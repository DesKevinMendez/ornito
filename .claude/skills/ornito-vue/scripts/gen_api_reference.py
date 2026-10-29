#!/usr/bin/env python3
"""Generate the Ornito Vue API and token references from the library sources.

Writes, next to this script's skill:

- references/api.md    every exported component (props, v-model, events, slots),
                       composable and type, with exact names and defaults
- references/tokens.md every --ds-color-* token with its default value, and the
                       Tailwind color names that read them
- references/api.json  the same facts for scripts/check_ornito_usage.py

Run it after changing a component's props, emits or slots, src/index.ts,
src/tokens.css or src/theme.css:

    python3 .claude/skills/ornito-vue/scripts/gen_api_reference.py [repo_root]
"""
import json
import re
import sys
from pathlib import Path

SKILL_DIR = Path(__file__).resolve().parent.parent
DEFAULT_REPO = SKILL_DIR.parent.parent.parent

CATEGORIES = [
    ("Actions", ["BaseButton", "BaseButtonIcon", "IconButton"]),
    ("Forms", ["FormInput", "FormSelect", "FormTextarea", "SearchableSelect", "SwitchInput"]),
    ("Feedback", ["Alert", "WarningAlert", "Badge", "Modal", "BottomModal", "ConfirmationModal",
                  "SnackBar", "SnackBarItem", "LoadingSVG", "HelpTooltip", "ImageLightbox"]),
    ("Layout", ["Card", "CardPaginations", "ViewHeader", "InfoItem", "StatCard", "Divider",
                "CollapseTransition"]),
    ("Navigation", ["Sidebar", "SidebarNav", "SidebarItem", "SidebarList", "Navbar",
                    "UserProfileDropdown", "Dropdown", "DropdownItem", "DropdownMenu",
                    "DropdownAnimation", "Tabs", "Breadcrumb"]),
    ("Data display", ["DataTable", "TableHeader", "TablePagination", "ResultCount", "TableSkeleton",
                      "List", "Item", "UserAvatar", "UserAvatars"]),
]


# ---------------------------------------------------------------- parsing helpers

def strip_comments(code):
    """Remove // and /* */ comments, keeping strings (and URLs inside them) intact."""
    return re.sub(
        r"(\"(?:\\.|[^\"\\\n])*\"|'(?:\\.|[^'\\\n])*'|`(?:\\.|[^`\\])*`)|//[^\n]*|/\*.*?\*/",
        lambda m: m.group(1) or "",
        code,
        flags=re.S,
    )


def matching(text, start):
    """Index of the bracket that closes the one at `start` ((, {, [ or <)."""
    pairs = {"(": ")", "{": "}", "[": "]", "<": ">"}
    depth, quote = 0, None
    for i in range(start, len(text)):
        c = text[i]
        if quote:
            if c == quote and text[i - 1] != "\\":
                quote = None
            continue
        if c in "'\"`":
            quote = c
        elif c in pairs:
            depth += 1
        elif c in ")}]" or (c == ">" and text[i - 1] != "="):
            depth -= 1
            if depth == 0:
                return i
    return -1


def split_top(raw, seps=",;\n"):
    """Split at separators outside brackets and strings."""
    parts, depth, cur, quote = [], 0, "", None
    for i, c in enumerate(raw):
        if quote:
            cur += c
            if c == quote and raw[i - 1] != "\\":
                quote = None
            continue
        if c in "'\"`":
            quote = c
        elif c in "([{<":
            depth += 1
        elif c in ")]}" or (c == ">" and i > 0 and raw[i - 1] != "="):
            depth -= 1
        if depth == 0 and c in seps:
            parts.append(cur)
            cur = ""
        else:
            cur += c
    parts.append(cur)
    return parts


MEMBER = re.compile(r"""^(?:readonly\s+)?(["']?)([\w:-]+)\1(\?)?\s*:\s*(.*)$""", re.S)


def type_members(body):
    """Members of a TypeScript object type: [(name, optional, type)]."""
    members = []
    for part in split_top(body):
        s = " ".join(part.split())
        if not s:
            continue
        m = MEMBER.match(s)
        if m and not s.startswith("("):
            members.append([m.group(2), bool(m.group(3)), m.group(4).strip()])
        elif s.startswith("("):
            members.append(["(", False, s])
        elif members:  # continuation of a multi-line union
            members[-1][2] = (members[-1][2] + " " + s).strip()
    for m in members:
        m[2] = re.sub(r"^\|\s*", "", m[2])
    return [tuple(m) for m in members]


def object_entries(body):
    """Top-level `key: value` entries of an object literal."""
    out = {}
    for part in split_top(body, ",\n"):
        s = " ".join(part.split())
        m = re.match(r"""^(["']?)([\w-]+)\1\s*:\s*(.+)$""", s)
        if m:
            out[m.group(2)] = m.group(3).rstrip(",")
        elif re.match(r"^[\w]+$", s):
            out[s] = s
    return out


def destructured_defaults(pattern):
    """`{ a, b = 1, c = 'x' }` -> {"b": "1", "c": "'x'"}."""
    out = {}
    for part in split_top(pattern, ","):
        s = " ".join(part.split())
        m = re.match(r"^(\w+)(?:\s*:\s*\w+)?\s*=\s*(.+)$", s)
        if m:
            out[m.group(1)] = m.group(2)
    return out


def named_type_body(script, name):
    m = re.search(r"\binterface\s+" + re.escape(name) + r"\b[^{]*\{", script)
    if m:
        start = m.end() - 1
        return script[start + 1:matching(script, start)]
    m = re.search(r"\btype\s+" + re.escape(name) + r"\b[^=]*=\s*\{", script)
    if m:
        start = m.end() - 1
        return script[start + 1:matching(script, start)]
    return None


def generic_arg(script, call):
    """Body of `call<...>(` as (type_text, index_after_closing_paren_open)."""
    m = re.search(r"\b" + call + r"\s*<", script)
    if not m:
        return None, None
    lt = m.end() - 1
    gt = matching(script, lt)
    return script[lt + 1:gt].strip(), gt + 1


def resolve_type_body(script, type_text):
    type_text = type_text.strip()
    if type_text.startswith("{"):
        return type_text[1:matching(type_text, 0)]
    name = re.match(r"(\w+)", type_text)
    return named_type_body(script, name.group(1)) if name else None


# ---------------------------------------------------------------- component model

def parse_props(script):
    props, defaults = {}, {}
    type_text, after = generic_arg(script, "defineProps")
    if type_text is not None:
        body = resolve_type_body(script, type_text) or ""
        for name, optional, typ in type_members(body):
            props[name] = {"type": typ, "required": not optional}
    else:
        m = re.search(r"\bdefineProps\s*\(\s*\{", script)
        if m:
            start = m.end() - 1
            body = script[start + 1:matching(script, start)]
            for name, value in object_entries(body).items():
                value = value.strip()
                if value.startswith("{"):
                    inner = object_entries(value[1:matching(value, 0)])
                    typ = inner.get("type", "any")
                    props[name] = {"type": typ, "required": inner.get("required") == "true"}
                    if "default" in inner:
                        defaults[name] = inner["default"]
                else:
                    props[name] = {"type": value, "required": False}
    # withDefaults(defineProps<...>(), { ... })
    m = re.search(r"\bwithDefaults\s*\(", script)
    if m:
        open_paren = m.end() - 1
        close = matching(script, open_paren)
        args = split_top(script[open_paren + 1:close], ",")
        rest = ",".join(args[1:]).strip()
        if rest.startswith("{"):
            defaults.update(object_entries(rest[1:matching(rest, 0)]))
    # const { a = 1 } = defineProps<...>()  or  const { a = 1 } = props
    for m in re.finditer(r"\bconst\s*\{", script):
        start = m.end() - 1
        close = matching(script, start)
        tail = script[close + 1:close + 60]
        if re.match(r"\s*=\s*(defineProps\b|props\b)", tail):
            defaults.update(destructured_defaults(script[start + 1:close]))
    for name, value in defaults.items():
        if name in props:
            props[name]["default"] = value
    return props


def parse_models(script):
    models = {}
    for m in re.finditer(r"\bdefineModel\s*(<)?", script):
        typ, pos = "any", m.end()
        if m.group(1):
            lt = m.end() - 1
            gt = matching(script, lt)
            typ = " ".join(script[lt + 1:gt].split())
            pos = gt + 1
        paren = script.find("(", pos)
        args = split_top(script[paren + 1:matching(script, paren)], ",")
        name, opts = "modelValue", ""
        for a in args:
            a = a.strip()
            if re.match(r"^['\"]", a):
                name = a.strip("'\"")
            elif a.startswith("{"):
                opts = a
        entries = object_entries(opts[1:matching(opts, 0)]) if opts else {}
        model = {"type": typ, "required": entries.get("required") == "true"}
        if "default" in entries:
            model["default"] = entries["default"]
        models[name] = model
    return models


def parse_emits(script):
    emits = {}
    type_text, _ = generic_arg(script, "defineEmits")
    if type_text is not None:
        body = resolve_type_body(script, type_text) or ""
        for name, _, typ in type_members(body):
            if name == "(":
                sig = typ
                em = re.match(r"""\(\s*\w+\s*:\s*['"]([^'"]+)['"]\s*(?:,\s*(.*?))?\)\s*:""", sig)
                if em:
                    emits[em.group(1)] = (em.group(2) or "").strip()
            else:
                emits[name] = typ.strip("[]").strip()
        return emits
    m = re.search(r"\bdefineEmits\s*\(\s*\[([^\]]*)\]", script)
    if m:
        for name in re.findall(r"""['"]([^'"]+)['"]""", m.group(1)):
            emits[name] = ""
    return emits


def parse_slots(template):
    slots, dynamic = {}, []
    for m in re.finditer(r"<slot\b([^>]*?)/?>", template, re.S):
        attrs = m.group(1)
        bound = re.findall(r"(?<![\w-]):([\w-]+)\s*=", attrs)
        static = re.search(r"""(?<![:\w-])name\s*=\s*["']([^"']+)["']""", attrs)
        dyn = re.search(r""":name\s*=\s*"([^"]+)\"""", attrs)
        slot_props = [b for b in bound if b != "name"]
        if dyn:
            # `tab-${index}` -> tab-{index}
            expression = re.sub(r"\$\{([^}]*)\}", r"{\1}", dyn.group(1).strip("`"))
            entry = {"expression": expression, "props": slot_props}
            if entry not in dynamic:
                dynamic.append(entry)
            continue
        name = static.group(1) if static else "default"
        slots.setdefault(name, [])
        for p in slot_props:
            if p not in slots[name]:
                slots[name].append(p)
    return slots, dynamic


def local_types(script):
    """Local interface/type declarations other than Props/Emits, verbatim."""
    out = []
    for m in re.finditer(r"^(?:export\s+)?(interface|type)\s+(\w+)", script, re.M):
        name = m.group(2)
        if name in ("Props", "Emits", "ViewHeaderProps") or name.endswith("Props"):
            continue
        start = m.start()
        brace = script.find("{", m.end())
        eq = script.find("=", m.end())
        line_end = script.find("\n", m.end())
        if m.group(1) == "type" and (brace == -1 or (eq != -1 and eq < brace and brace > line_end)):
            end = script.find(";", m.end())
            end = line_end if end == -1 or end > line_end else end + 1
        else:
            end = matching(script, brace) + 1
        out.append(script[start:end].strip())
    return out


def sfc_parts(source):
    scripts = "\n".join(re.findall(r"<script\b[^>]*>(.*?)</script>", source, re.S))
    tm = re.search(r"^<template[^>]*>(.*)^</template>", source, re.S | re.M)
    return strip_comments(scripts), tm.group(1) if tm else ""


def doc_summary(repo, name):
    """First paragraph under the `# Name` / `## Name` heading of docs/components."""
    for doc in sorted((repo / "docs" / "components").glob("*.md")):
        text = doc.read_text()
        m = re.search(r"^#{1,3} " + re.escape(name) + r"\s*\n+((?:(?!#|\||```|<).+\n?)+)", text, re.M)
        if m:
            para = " ".join(m.group(1).split())
            return para, doc.name
    return None, None


def type_aliases(repo):
    """String-literal union aliases from src/types (ButtonVariant, BadgeVariant…)."""
    aliases = {}
    for path in (repo / "src" / "types").glob("*.ts"):
        for m in re.finditer(r"export\s+type\s+(\w+)\s*=\s*([^;]+);", strip_comments(path.read_text())):
            aliases[m.group(1)] = m.group(2)
    return aliases


def literal_values(type_text, aliases):
    """['a', 'b'] when the type is a union of string literals, else None."""
    t = " ".join(type_text.split())
    if t in aliases:
        t = " ".join(aliases[t].split())
    parts = [p.strip() for p in split_top(t, "|")]
    parts = [p for p in parts if p not in ("undefined", "null", "")]
    if parts and all(re.match(r"""^(["'])[^"']*\1$""", p) for p in parts):
        return [p[1:-1] for p in parts]
    return None


# ---------------------------------------------------------------- index and composables

def parse_index(repo):
    text = (repo / "src" / "index.ts").read_text()
    components = re.findall(r"export\s*\{\s*default as (\w+)\s*\}\s*from\s*'\./components/([^']+)'", text)
    types = []
    for m in re.finditer(r"export\s+type\s*\{([^}]*)\}\s*from\s*'([^']+)'", text):
        types += [(t.strip(), m.group(2)) for t in m.group(1).split(",") if t.strip()]
    values = []
    for m in re.finditer(r"export\s*\{([^}]*)\}\s*from\s*'(\./composables/[^']+)'", text):
        for item in m.group(1).split(","):
            item = item.strip()
            if not item:
                continue
            dm = re.match(r"default as (\w+)", item)
            values.append((dm.group(1) if dm else item, m.group(2), bool(dm)))
    namespaces = re.findall(r"export\s*\*\s*as\s+(\w+)\s+from\s*'([^']+)'", text)
    return components, types, values, namespaces


def composable_entry(repo, name, rel, is_default):
    path = repo / "src" / (rel.lstrip("./") + ".ts")
    code = strip_comments(path.read_text())
    if is_default:
        sig = re.search(r"export default function\s*\w*\s*(\([^)]*\))", code)
        signature = "function {}{}".format(name, sig.group(1) if sig else "()")
    else:
        sig = re.search(r"export function " + name + r"\s*(\([^)]*\))", code)
        if sig:
            signature = "function {}{}".format(name, " ".join(sig.group(1).split()))
        else:
            decl = re.search(r"export const " + name + r"\b[^=]*=[^\n;]*", code)
            signature = " ".join(decl.group(0).replace("export ", "").split()) if decl else name
    returns = []
    fm = re.search(r"export (?:default )?function\s*" + ("" if is_default else name) + r"\s*\(", code)
    if fm:
        paren = fm.end() - 1
        brace = code.find("{", matching(code, paren))
        body = code[brace + 1:matching(code, brace)]
        starts = [m.end() - 1 for m in re.finditer(r"\n    return\s*\{|\n  return\s*\{", body)]
        if starts:
            last = starts[-1]
            ret = body[last + 1:matching(body, last)]
            returns = [p.strip().split(":")[0].strip() for p in split_top(ret, ",\n") if p.strip()]
    return {"name": name, "file": "src/" + rel.lstrip("./") + ".ts", "signature": signature, "returns": returns}


# ---------------------------------------------------------------- tokens

def parse_tokens(repo):
    text = (repo / "src" / "tokens.css").read_text()
    root = re.search(r":root\s*\{(.*?)\n\}", text, re.S).group(1)
    sections, current = [], ["Typography", []]
    for line in root.splitlines():
        s = line.strip()
        c = re.match(r"/\*\s*(.*?)\s*\*/$", s)
        if c and not s.startswith("--"):
            title = c.group(1).split(". ")[0].rstrip(".")
            if current[1]:
                sections.append(current)
            current = [title, []]
            continue
        d = re.match(r"(--ds-[\w-]+)\s*:\s*(.*?);?$", s)
        if d:
            current[1].append((d.group(1), d.group(2).rstrip(";")))
        elif current[1] and s and not s.startswith("/*"):
            # Continuation of a multi-line value (the font stack).
            name, value = current[1][-1]
            current[1][-1] = (name, (value + " " + s.rstrip(";")).strip())
    if current[1]:
        sections.append(current)
    theme = (repo / "src" / "theme.css").read_text()
    colors = {}
    for m in re.finditer(r"--color-([\w-]+)\s*:\s*var\((--ds-[\w-]+)\)", theme):
        colors[m.group(1)] = m.group(2)
    return sections, colors


# ---------------------------------------------------------------- rendering

def fmt_default(value):
    value = " ".join(value.split())
    return "`{}`".format(value.replace("|", "\\|"))


def cell(text):
    return "`{}`".format(" ".join(text.split()).replace("|", "\\|")) if text else ""


def render_component(c):
    lines = ["### {}".format(c["name"]), ""]
    lines.append("`{}` · `import {{ {} }} from 'ornito'`".format(c["file"], c["name"]))
    lines.append("")
    if c["summary"]:
        lines += ["> {}".format(c["summary"]), ""]
    props = c["props"]
    if props:
        lines += ["| Prop | Type | Required | Default |", "| --- | --- | --- | --- |"]
        for name, p in props.items():
            lines.append("| `{}` | {} | {} | {} |".format(
                name, cell(p["type"]), "yes" if p["required"] and "default" not in p else "no",
                fmt_default(p["default"]) if "default" in p else "—"))
        lines.append("")
    else:
        lines += ["No props.", ""]
    for name, m in c["models"].items():
        binding = "v-model" if name == "modelValue" else "v-model:{}".format(name)
        extra = ", required" if m["required"] else ""
        if "default" in m:
            extra += ", default {}".format(fmt_default(m["default"]))
        lines.append("- `{}`: `{}`{}".format(binding, m["type"], extra))
    events = dict(("update:" + n, m["type"]) for n, m in c["models"].items())
    events.update(c["emits"])
    if events:
        evs = []
        for name, args in events.items():
            evs.append("`@{}`{}".format(name, " ({})".format(args) if args else ""))
        lines.append("- Events: " + ", ".join(evs))
    else:
        lines.append("- Events: none declared (native listeners such as `@click` fall through to the root element)")
    slot_text = []
    for name, sp in c["slots"].items():
        slot_text.append("`#{}`{}".format(name, " (slot props: {})".format(", ".join(sp)) if sp else ""))
    for d in c["dynamic_slots"]:
        slot_text.append("dynamic slot named by `{}`{}".format(
            d["expression"], " (slot props: {})".format(", ".join(d["props"])) if d["props"] else ""))
    lines.append("- Slots: " + (", ".join(slot_text) if slot_text else "none"))
    if c["local_types"]:
        lines += ["", "```ts"] + c["local_types"] + ["```"]
    lines.append("")
    return lines


def render_api(repo, version, components, types_src, composables, namespaces):
    by_name = {c["name"]: c for c in components}
    out = [
        "# Ornito Vue API reference",
        "",
        "Generated from the library sources (v{}) by `scripts/gen_api_reference.py`; don't".format(version),
        "edit by hand. Prop names are camelCase here; in templates use either",
        "`:icon-position` or `:iconPosition`. \"Required\" means Vue warns when the prop is",
        "missing. Events are listened to as `@kebab-case`.",
        "",
        "Contents:",
        "",
    ]
    listed = set()
    for title, names in CATEGORIES:
        present = [n for n in names if n in by_name]
        listed.update(present)
        out.append("- {}: {}".format(title, ", ".join(present)))
    rest = [c["name"] for c in components if c["name"] not in listed]
    if rest:
        out.append("- Other: " + ", ".join(rest))
    out += ["- Composables: " + ", ".join(c["name"] for c in composables),
            "- Types: " + ", ".join(t for t, _ in types_src), ""]
    for title, names in CATEGORIES + ([("Other", rest)] if rest else []):
        present = [n for n in names if n in by_name]
        if not present:
            continue
        out += ["## {}".format(title), ""]
        for n in present:
            out += render_component(by_name[n])
    out += ["## Composables", ""]
    for c in composables:
        out += ["### {}".format(c["name"]), "", "`{}` · `import {{ {} }} from 'ornito'`".format(c["file"], c["name"]), "",
                "```ts", c["signature"], "```", ""]
        if c["returns"]:
            out += ["Returns: " + ", ".join("`{}`".format(r) for r in c["returns"]), ""]
    for ns, src in namespaces:
        out += ["### {}".format(ns), "", "`export * as {} from '{}'`: the same instance the form components".format(ns, src),
                "validate with, so `import {{ {} }} from 'ornito'` builds rule schemas.".format(ns), ""]
    out += ["## Types", "", "Import the exported ones with `import type { … } from 'ornito'`. Files",
            "marked \"not exported\" are shown because props use them; write the same",
            "literal values (e.g. `variant=\"danger-outline\"`) instead of importing them.", ""]
    exported_files = {src.lstrip("./") for _, src in types_src}
    for path in sorted((repo / "src" / "types").glob("*.ts")):
        rel = "types/" + path.stem
        note = "" if rel in exported_files else " (not exported)"
        out += ["### `{}`{}".format(path.relative_to(repo), note), "", "```ts", path.read_text().strip(), "```", ""]
    return "\n".join(out).rstrip() + "\n"


def render_tokens(version, sections, colors):
    out = [
        "# Ornito Vue token defaults",
        "",
        "Generated from `src/tokens.css` and `src/theme.css` (v{}) by".format(version),
        "`scripts/gen_api_reference.py`; don't edit by hand. Override any of these on",
        "`:root` in the consuming app's CSS. `-light` tokens are read in light mode and",
        "`-dark` tokens through the `dark:` variant, so set both when a color changes in both",
        "modes. Search this file instead of guessing a name: `grep -n \"sidebar-bg\" tokens.md`.",
        "",
        "Contents: " + ", ".join(s[0] for s in sections) + ", Tailwind color names.",
        "",
    ]
    for title, decls in sections:
        out += ["## {}".format(title), "", "```css"]
        out += ["{}: {};".format(n, v) for n, v in decls]
        out += ["```", ""]
    same, renamed = [], []
    for name, token in colors.items():
        (same if token == "--ds-color-" + name else renamed).append((name, token))
    palettes = sorted({re.sub(r"-\d+$", "", n) for n in colors if re.search(r"-\d+$", n)})
    mapped = set(colors.values())
    unmapped = [n for _, decls in sections for n, _ in decls
                if re.search(r"-(light|dark)$", n) and n not in mapped]
    out += [
        "## Tailwind color names",
        "",
        "`theme.css` maps each name below to Tailwind with `@theme inline`, so any color",
        "utility works with it: `bg-`, `text-`, `border-`, `ring-`, `divide-`,",
        "`placeholder-`, `from-`/`to-`, with opacity (`bg-primary-600/10`) and variants",
        "(`hover:`, `dark:`). A name not listed here generates no CSS.",
        "",
        "- Palettes (`{palette}-{shade}`): " + ", ".join("`{}`".format(p) for p in palettes) +
        ". `success`, `warning`, `error` and `danger` have no 300 or 950 shade; `danger`"
        " is an alias of the `error` palette.",
        "- Every component token `--ds-color-{name}` is the color `{name}`, e.g.",
        "  `--ds-color-card-bg-light` → `bg-card-bg-light`" +
        (", except {} (read through `var()` only).".format(", ".join("`{}`".format(n) for n in unmapped))
         if unmapped else "."),
        "- Semantic borders drop the `border-` segment (use them with `border-`, `divide-`",
        "  or `outline-`):",
        "",
        "| Color name | Token |",
        "| --- | --- |",
    ]
    for name, token in renamed:
        if re.match(r"^danger-\d+$", name):
            continue
        out.append("| `{}` | `{}` |".format(name, token))
    out += ["", "`neutral`, `gray`, `pink`, `white` and `black` are not remapped: those utilities",
            "are Tailwind's own. The DS neutral palette (`--ds-color-neutral-*`) defaults to",
            "Tailwind gray, so `gray-*` utilities match it until an app changes",
            "`--ds-color-neutral`."]
    return "\n".join(out).rstrip() + "\n"


def main(argv):
    repo = Path(argv[1]).resolve() if len(argv) > 1 else DEFAULT_REPO
    version = json.loads((repo / "package.json").read_text())["version"]
    comps, types_src, values, namespaces = parse_index(repo)
    components = []
    for name, rel in comps:
        path = repo / "src" / "components" / rel
        script, template = sfc_parts(path.read_text())
        slots, dynamic = parse_slots(template)
        summary, _ = doc_summary(repo, name)
        root = re.search(r"<([A-Za-z][\w-]*)", template)
        components.append({
            "name": name,
            "file": str(path.relative_to(repo)),
            "root": root.group(1) if root else None,
            "summary": summary,
            "props": parse_props(script),
            "models": parse_models(script),
            "emits": parse_emits(script),
            "slots": slots,
            "dynamic_slots": dynamic,
            "local_types": local_types(script),
        })
    aliases = type_aliases(repo)
    for c in components:
        local = dict(aliases)
        for decl in c["local_types"]:
            m = re.match(r"type\s+(\w+)\s*=\s*([^;]+);?", decl)
            if m:
                local[m.group(1)] = m.group(2)
        for p in c["props"].values():
            allowed = literal_values(p["type"], local)
            if allowed:
                p["values"] = allowed
    composables = [composable_entry(repo, n, rel, d) for n, rel, d in values]
    sections, colors = parse_tokens(repo)

    refs = SKILL_DIR / "references"
    refs.mkdir(exist_ok=True)
    (refs / "api.md").write_text(render_api(repo, version, components, types_src, composables, namespaces))
    (refs / "tokens.md").write_text(render_tokens(version, sections, colors))
    data = {
        "version": version,
        "components": {
            c["name"]: {k: c[k] for k in ("root", "props", "models", "emits", "slots", "dynamic_slots")}
            for c in components
        },
        "exports": [c["name"] for c in components] + [n for n, _, _ in values] +
                   [t for t, _ in types_src] + [n for n, _ in namespaces],
        "tokens": [n for _, decls in sections for n, _ in decls],
        "colors": sorted(colors),
    }
    (refs / "api.json").write_text(json.dumps(data, indent=1, ensure_ascii=False) + "\n")
    print("Wrote references/api.md, tokens.md and api.json for {} components, {} tokens (v{}).".format(
        len(components), len(data["tokens"]), version))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
