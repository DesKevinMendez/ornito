#!/usr/bin/env python3
"""Check Ornito usage in Vue/TS/CSS files (or vue/css blocks inside Markdown).

Uses references/api.json (generated from the library) as the source of truth and
reports:

- names imported from 'ornito' that it doesn't export
- props, v-models, events and slots that an Ornito component doesn't have, and
  required props that are missing
- --ds-color-* variables and DS color utilities (bg-card-bg-light, success-300…)
  that don't exist, so they would silently do nothing
- colors that bypass the theme: hex/rgb literals in components and raw Tailwind
  palettes that have a DS palette (indigo → primary, red → error/danger…)

    python3 check_ornito_usage.py resources/js            # a directory
    python3 check_ornito_usage.py Page.vue src/app.css     # files

Exit code 1 when something is wrong. It doesn't replace vue-tsc or a build: it
catches invented names and theme leaks, the most common mistakes, in seconds.
"""
import difflib
import json
import re
import sys
from pathlib import Path

API = Path(__file__).resolve().parent.parent / "references" / "api.json"
SKIP_DIRS = {"node_modules", "dist", ".git", "vendor", "storybook-static", ".vuepress"}
SUBPATHS = {"ornito", "ornito/style.css", "ornito/theme.css", "ornito/tokens.css"}

GLOBAL_ATTRS = {"class", "style", "key", "ref", "id", "role", "title", "tabindex", "hidden",
                "lang", "dir", "slot", "is", "inert", "draggable", "translate"}
NATIVE_EVENTS = {
    "click", "dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mouseover",
    "mouseout", "mousemove", "contextmenu", "keydown", "keyup", "keypress", "focus", "blur",
    "focusin", "focusout", "input", "change", "submit", "scroll", "wheel", "touchstart",
    "touchend", "touchmove", "pointerdown", "pointerup", "pointerenter", "pointerleave",
    "pointermove", "dragstart", "drag", "dragend", "dragenter", "dragleave", "dragover", "drop",
    "animationend", "transitionend", "copy", "paste", "cut",
}
# Attributes that fall through to a native root element and work there.
ROOT_ATTRS = {
    "button": {"type", "disabled", "name", "value", "form", "autofocus"},
    "component": {"type", "disabled", "name", "value", "form", "autofocus", "href", "target", "rel"},
    "RouterLink": {"href", "target", "rel", "replace", "active-class", "exact-active-class"},
    "ul": set(), "nav": set(), "aside": set(),
}
VOID_TAGS = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta",
             "source", "track", "wbr"}
# Raw Tailwind palettes that the theme can't recolor, and the DS palette to use.
RAW_PALETTES = {
    "indigo": "primary", "violet": "tertiary", "purple": "tertiary", "sky": "informative or secondary",
    "blue": "informative or secondary", "cyan": "informative", "emerald": "success",
    "green": "success", "teal": "success", "amber": "warning", "yellow": "warning",
    "orange": "warning", "red": "error (or danger)", "rose": "error (or danger)",
}
DS_PALETTES = ("primary", "secondary", "tertiary", "informative", "success", "warning", "error", "danger")
COLOR_UTILITY = re.compile(
    r"(?<![\w-])(?:[\w-]+:)*!?(bg|text|border(?:-[trblxy])?|ring(?:-offset)?|divide|placeholder|outline"
    r"|fill|stroke|from|via|to|accent|caret|decoration|shadow)-([a-z][a-z0-9-]*?)(?:/\d+)?(?![\w-])"
)


def camel(name):
    return re.sub(r"-([a-z0-9])", lambda m: m.group(1).upper(), name)


def kebab_to_pascal(tag):
    return "".join(p[:1].upper() + p[1:] for p in tag.split("-"))


def line_of(text, index):
    return text.count("\n", 0, index) + 1


def strip_comments(code):
    return re.sub(
        r"(\"(?:\\.|[^\"\\\n])*\"|'(?:\\.|[^'\\\n])*'|`(?:\\.|[^`\\])*`)|//[^\n]*|/\*.*?\*/",
        lambda m: m.group(1) or "",
        code,
        flags=re.S,
    )


def blank(match):
    """Replace a match with spaces/newlines so offsets and line numbers survive."""
    return re.sub(r"[^\n]", " ", match.group(0))


# ---------------------------------------------------------------- sources

def sources(path):
    """Yield (path, kind, text) where kind is vue, ts or css; Markdown yields its blocks."""
    if path.is_dir():
        for f in sorted(path.rglob("*")):
            if f.is_file() and not SKIP_DIRS.intersection(f.relative_to(path).parts):
                if f.suffix in (".vue", ".ts", ".tsx", ".js", ".css", ".md") and not f.name.endswith(".d.ts"):
                    yield from sources(f)
        return
    text = path.read_text()
    if path.suffix == ".md":
        for m in re.finditer(r"```(vue|html|css|ts|js)\n(.*?)```", text, re.S):
            lang, body = m.group(1), m.group(2)
            kind = {"html": "vue", "js": "ts"}.get(lang, lang)
            # Pad with newlines so reported lines are the Markdown file's.
            first = line_of(text, m.start(2))
            if kind == "vue" and not re.search(r"^<(template|script)", body, re.M):
                block = "\n" * (first - 2) + "<template>\n" + body + "\n</template>\n"
            else:
                block = "\n" * (first - 1) + body
            yield path, kind, block
    elif path.suffix == ".vue":
        yield path, "vue", text
    elif path.suffix == ".css":
        yield path, "css", text
    else:
        yield path, "ts", text


# ---------------------------------------------------------------- checks

def check_imports(code, api, problems, imported):
    exports = set(api["exports"])
    for m in re.finditer(r"\bimport\s+(type\s+)?((?:(?!\bimport\b)[^;])*?)\s+from\s+['\"](ornito[^'\"]*)['\"]", code, re.S):
        what, source = m.group(2).strip(), m.group(3)
        line = line_of(code, m.start())
        if source not in SUBPATHS:
            problems.append((line, "unknown import path `{}` (use 'ornito', 'ornito/style.css' or 'ornito/theme.css')".format(source)))
            continue
        if source != "ornito":
            continue
        named = re.search(r"\{([^}]*)\}", what)
        if not named or re.match(r"^\w+\s*(,|$)", what):
            problems.append((line, "'ornito' has no default export; import named exports"))
        if named:
            for item in named.group(1).split(","):
                item = item.strip()
                if not item:
                    continue
                item = re.sub(r"^type\s+", "", item)
                parts = re.split(r"\s+as\s+", item)
                name, local = parts[0].strip(), parts[-1].strip()
                if name not in exports:
                    problems.append((line, "'ornito' doesn't export `{}`".format(name)))
                else:
                    imported[local] = name
    for m in re.finditer(r"\bimport\s+((?:(?!\bimport\b)[^;])*?)\s+from\s+['\"](?!ornito)([^'\"]+)['\"]", code, re.S):
        for name in re.findall(r"\b([A-Z]\w*)\b", m.group(1)):
            imported.setdefault(name, None)  # a local component that shadows an Ornito name


def css_tokens(text, api, problems):
    known = set(api["tokens"])
    for m in re.finditer(r"--ds-color-[\w-]+|--ds-font-family", text):
        name = m.group(0)
        if name not in known:
            hint = closest(name, known)
            problems.append((line_of(text, m.start()), "unknown token `{}`{}".format(name, hint)))


def closest(name, known):
    match = difflib.get_close_matches(name, sorted(known), n=1, cutoff=0.8)
    return " (did you mean `{}`?)".format(match[0]) if match else ""


def class_colors(text, api, problems, allow_raw_hex):
    colors = set(api["colors"])
    for m in COLOR_UTILITY.finditer(text):
        prop, name = m.group(1), m.group(2)
        line = line_of(text, m.start())
        shade = re.match(r"^([a-z]+)-(\d{2,3})$", name)
        if re.search(r"-(light|dark)$", name):
            if name not in colors:
                problems.append((line, "`{}-{}` uses a color the DS doesn't define (see tokens.md)".format(prop, name)))
        elif shade and shade.group(1) in DS_PALETTES:
            if name not in colors:
                problems.append((line, "`{}-{}` doesn't exist: the {} palette has no {} shade".format(
                    prop, name, shade.group(1), shade.group(2))))
        elif shade and shade.group(1) in RAW_PALETTES:
            target = RAW_PALETTES[shade.group(1)]
            palette = target.split()[0]
            number = nearest_shade(palette, int(shade.group(2)), colors)
            problems.append((line, "`{}-{}` bypasses the theme; use the {} palette (e.g. `{}-{}-{}`)".format(
                prop, name, target, prop, palette, number)))
    if not allow_raw_hex:
        for m in re.finditer(r"(?<![\w&-])#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})\b|\brgba?\(\s*\d", text):
            problems.append((line_of(text, m.start()), "hardcoded color `{}`; use a DS utility or var(--ds-color-…)".format(
                m.group(0).rstrip("(").strip())))


def nearest_shade(palette, number, colors):
    shades = [int(c.rsplit("-", 1)[1]) for c in colors if re.match(palette + r"-\d+$", c)]
    return min(shades, key=lambda s: (abs(s - number), s)) if shades else number


def parse_attrs(raw):
    attrs = []
    for m in re.finditer(r"""([^\s"'=/>]+)(?:\s*=\s*("[^"]*"|'[^']*'|[^\s>]+))?""", raw):
        value = m.group(2)
        if value and value[0] in "\"'":
            value = value[1:-1]
        attrs.append((m.group(1), value))
    return attrs


def check_component(name, attrs, spec, problems, line):
    props = spec["props"]
    models = spec["models"]
    emits = {camel(e) for e in spec["emits"]}
    emits |= {"update:" + n for n in models}
    emits |= {camel(e) for e in ["update:" + p for p in props]}
    given, spread = set(), False
    for raw, value in attrs:
        attr = raw
        if attr in ("v-bind",) or attr.startswith("v-bind=") or attr == ":":
            spread = True
            continue
        if attr.startswith(("v-if", "v-else", "v-for", "v-show", "v-once", "v-memo", "v-html", "v-text", "v-cloak", "v-pre")):
            continue
        if attr.startswith("v-model"):
            arg = attr.split(":", 1)[1] if ":" in attr else "modelValue"
            arg = camel(arg.split(".")[0])
            if arg not in models and arg not in props:
                problems.append((line, "`{}` has no v-model{} (no `{}` model or prop)".format(
                    name, "" if arg == "modelValue" else ":" + arg, arg)))
            given.add(arg)
            continue
        if attr.startswith(("#", "v-slot")):
            slot = attr[1:] if attr.startswith("#") else (attr.split(":", 1)[1] if ":" in attr else "default")
            check_slot(name, slot, spec, problems, line)
            continue
        if attr.startswith(("@", "v-on:")):
            event = attr[1:] if attr.startswith("@") else attr[5:]
            event = event.split(".")[0]
            if event.startswith("["):
                continue
            if camel(event) not in emits and event.lower() not in NATIVE_EVENTS:
                problems.append((line, "`{}` doesn't emit `{}`".format(name, event)))
            continue
        if attr.startswith(("v-bind:", ":")):
            attr = attr.split(":", 1)[1]
        attr = attr.split(".")[0]
        if attr.startswith("[") or attr.startswith("v-"):
            continue
        prop = camel(attr)
        given.add(prop)
        if prop in props or prop in models:
            allowed = props.get(prop, {}).get("values")
            if allowed and not raw.startswith((":", "v-bind:")) and value is not None and value not in allowed:
                problems.append((line, "`{}` {}=\"{}\" isn't valid; use one of: {}".format(
                    name, attr, value, ", ".join(allowed))))
            if name == "DataTable" and prop == "searchBy" and value and "filter[" in value:
                problems.append((line, "DataTable already sends search-by as filter[field]; pass the field name, "
                                       "not `{}`".format(value)))
            continue
        if attr in GLOBAL_ATTRS or attr.startswith(("aria-", "data-")):
            continue
        if attr in ROOT_ATTRS.get(spec.get("root"), set()):
            continue
        if not re.match(r"^[A-Za-z][\w-]*$", attr):
            continue
        problems.append((line, "`{}` has no prop `{}`".format(name, attr)))
    if not spread:
        for prop, p in props.items():
            if p["required"] and "default" not in p and prop not in given:
                problems.append((line, "`{}` is missing required prop `{}`".format(name, prop)))
        for model, m in models.items():
            if m["required"] and model not in given:
                problems.append((line, "`{}` is missing `v-model{}`".format(name, "" if model == "modelValue" else ":" + model)))


def check_slot(name, slot, spec, problems, line):
    slot = slot.split("=")[0].strip()
    if slot.startswith("["):
        return
    if slot in spec["slots"]:
        return
    for d in spec["dynamic_slots"]:
        pattern = "^" + re.sub(r"\\\{[^}]*\\\}", ".+", re.escape(d["expression"])) + "$"
        if "{" not in d["expression"] or re.match(pattern, slot):
            return
    problems.append((line, "`{}` has no slot `#{}`".format(name, slot)))


def check_template(template, api, imported, problems):
    comps = api["components"]
    stack = []
    for m in re.finditer(r"<(/?)([A-Za-z][\w.-]*)((?:[^>\"']|\"[^\"]*\"|'[^']*')*?)(/?)>", template):
        closing, tag, raw, self_close = m.group(1), m.group(2), m.group(3), m.group(4)
        line = line_of(template, m.start())
        if closing:
            while stack and stack.pop() != tag:
                pass
            continue
        attrs = parse_attrs(raw)
        pascal = tag if tag[0].isupper() else kebab_to_pascal(tag)
        name = imported.get(pascal, pascal if pascal not in imported else None)
        if tag == "template":
            owner = next((t for t in reversed(stack) if t != "template"), None)
            owner_name = None
            if owner:
                op = owner if owner[0].isupper() else kebab_to_pascal(owner)
                owner_name = imported.get(op, op if op not in imported else None)
            if owner_name in comps:
                for a, _ in attrs:
                    if a.startswith("#") or a.startswith("v-slot"):
                        slot = a[1:] if a.startswith("#") else (a.split(":", 1)[1] if ":" in a else "default")
                        check_slot(owner_name, slot, comps[owner_name], problems, line)
        elif name in comps and ("-" in tag or tag[0].isupper()):
            check_component(name, attrs, comps[name], problems, line)
        if not self_close and tag.lower() not in VOID_TAGS:
            stack.append(tag)


def check(path, kind, text, api):
    problems = []
    if kind == "css":
        code = re.sub(r"/\*.*?\*/", blank, text, flags=re.S)
        css_tokens(code, api, problems)
        class_colors(re.sub(r"--ds-[\w-]+\s*:[^;]*;", blank, code), api, problems, allow_raw_hex=True)
        return problems
    if kind == "ts":
        code = strip_comments(text)
        imported = {}
        check_imports(code, api, problems, imported)
        css_tokens(code, api, problems)
        return problems
    # .vue: keep offsets so line numbers point at the original file.
    code = re.sub(r"<!--.*?-->", blank, text, flags=re.S)
    imported = {}
    for sm in re.finditer(r"(<script\b[^>]*>)(.*?)</script>", code, re.S):
        script = re.sub(r"[^\n]", " ", code[:sm.start(2)]) + re.sub(
            r"(\"(?:\\.|[^\"\\\n])*\"|'(?:\\.|[^'\\\n])*'|`(?:\\.|[^`\\])*`)|//[^\n]*|/\*.*?\*/",
            lambda m: m.group(1) or blank(m), sm.group(2), flags=re.S)
        check_imports(script, api, problems, imported)
        css_tokens(script, api, problems)
        class_colors(script, api, problems, allow_raw_hex=False)
    tm = re.search(r"^<template[^>]*>(.*)^</template>", code, re.S | re.M)
    if tm:
        template = re.sub(r"[^\n]", " ", code[:tm.start(1)]) + tm.group(1)
        check_template(template, api, imported, problems)
        css_tokens(template, api, problems)
        class_colors(template, api, problems, allow_raw_hex=False)
    for st in re.finditer(r"<style\b[^>]*>(.*?)</style>", code, re.S):
        style = re.sub(r"[^\n]", " ", code[:st.start(1)]) + re.sub(r"/\*.*?\*/", blank, st.group(1), flags=re.S)
        css_tokens(style, api, problems)
        class_colors(re.sub(r"--ds-[\w-]+\s*:[^;]*;", blank, style), api, problems, allow_raw_hex=False)
    return problems


def main(argv):
    if len(argv) < 2:
        print(__doc__)
        return 2
    api = json.loads(API.read_text())
    failed = False
    for arg in argv[1:]:
        for path, kind, text in sources(Path(arg)):
            for line, problem in sorted(set(check(path, kind, text, api))):
                failed = True
                print("{}:{}: {}".format(path, line, problem))
    if not failed:
        print("OK: every Ornito import, prop, event, slot, token and color exists (v{}).".format(api["version"]))
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
