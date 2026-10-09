import * as e from "yup";
import * as t from "vue";
import { Fragment as n, Teleport as r, Transition as i, computed as a, createBlock as o, createCommentVNode as s, createElementBlock as c, createElementVNode as l, createSlots as u, createTextVNode as d, createVNode as f, defineComponent as p, effectScope as m, guardReactiveProps as h, h as g, inject as _, isRef as v, mergeDefaults as y, mergeModels as b, mergeProps as x, nextTick as S, normalizeClass as C, normalizeProps as w, normalizeStyle as T, onBeforeUnmount as E, onBeforeUpdate as D, onMounted as O, onScopeDispose as k, onUnmounted as A, openBlock as j, provide as M, reactive as N, readonly as P, ref as F, renderList as I, renderSlot as L, resolveComponent as R, resolveDynamicComponent as z, toDisplayString as B, toRef as V, toValue as ee, unref as H, useModel as U, useSlots as W, useTemplateRef as G, vModelText as te, vShow as ne, watch as K, withCtx as q, withDirectives as J, withKeys as re, withModifiers as ie } from "vue";
import { RouterLink as Y, useRoute as ae } from "vue-router";
import { ErrorMessage as oe, Field as se, Form as ce } from "vee-validate";
import { onClickOutside as le, unrefElement as ue, useInfiniteScroll as de, useStorage as fe, useSwipe as pe, watchDebounced as me } from "@vueuse/core";
//#region \0rolldown/runtime.js
var he = Object.defineProperty, ge = Object.getOwnPropertyDescriptor, _e = Object.getOwnPropertyNames, ve = Object.prototype.hasOwnProperty, ye = (e, t) => {
	let n = {};
	for (var r in e) he(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || he(n, Symbol.toStringTag, { value: "Module" }), n;
}, be = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = _e(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !ve.call(e, s) && s !== n && he(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = ge(t, s)) || r.enumerable
	});
	return e;
}, xe = (e, t, n) => (be(e, t, "default"), n && be(n, t, "default")), Se = {
	outline: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 24,
		height: 24,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": 2,
		"stroke-linecap": "round",
		"stroke-linejoin": "round"
	},
	filled: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 24,
		height: 24,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		stroke: "none"
	}
}, Ce = (e, t, n, r) => ({ color: n = "currentColor", size: i = 24, stroke: a = 2, title: o, class: s, ...c }, { attrs: l, slots: u }) => {
	let d = [...r.map((e) => g(...e)), ...u.default ? [u.default()] : []];
	return o && (d = [g("title", o), ...d]), g("svg", {
		...Se[e],
		width: i,
		height: i,
		...l,
		class: ["tabler-icon", `tabler-icon-${t}`],
		...e === "filled" ? { fill: n } : {
			"stroke-width": a ?? Se[e]["stroke-width"],
			stroke: n
		},
		...c
	}, d);
}, we = Ce("outline", "alert-circle", "AlertCircle", [
	["path", {
		d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",
		key: "svg-0"
	}],
	["path", {
		d: "M12 8v4",
		key: "svg-1"
	}],
	["path", {
		d: "M12 16h.01",
		key: "svg-2"
	}]
]), Te = Ce("outline", "alert-triangle", "AlertTriangle", [
	["path", {
		d: "M12 9v4",
		key: "svg-0"
	}],
	["path", {
		d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0",
		key: "svg-1"
	}],
	["path", {
		d: "M12 16h.01",
		key: "svg-2"
	}]
]), Ee = Ce("outline", "arrow-up-right", "ArrowUpRight", [["path", {
	d: "M17 7l-10 10",
	key: "svg-0"
}], ["path", {
	d: "M8 7l9 0l0 9",
	key: "svg-1"
}]]), De = Ce("outline", "bell", "Bell", [["path", {
	d: "M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6",
	key: "svg-0"
}], ["path", {
	d: "M9 17v1a3 3 0 0 0 6 0v-1",
	key: "svg-1"
}]]), Oe = Ce("outline", "check", "Check", [["path", {
	d: "M5 12l5 5l10 -10",
	key: "svg-0"
}]]), ke = Ce("outline", "chevron-down", "ChevronDown", [["path", {
	d: "M6 9l6 6l6 -6",
	key: "svg-0"
}]]), Ae = Ce("outline", "chevron-left", "ChevronLeft", [["path", {
	d: "M15 6l-6 6l6 6",
	key: "svg-0"
}]]), je = Ce("outline", "chevron-right", "ChevronRight", [["path", {
	d: "M9 6l6 6l-6 6",
	key: "svg-0"
}]]), Me = Ce("outline", "currency-dollar", "CurrencyDollar", [["path", {
	d: "M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2",
	key: "svg-0"
}], ["path", {
	d: "M12 3v3m0 12v3",
	key: "svg-1"
}]]), Ne = Ce("outline", "dots-vertical", "DotsVertical", [
	["path", {
		d: "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
		key: "svg-0"
	}],
	["path", {
		d: "M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
		key: "svg-1"
	}],
	["path", {
		d: "M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
		key: "svg-2"
	}]
]), Pe = Ce("outline", "eye-off", "EyeOff", [
	["path", {
		d: "M10.585 10.587a2 2 0 0 0 2.829 2.828",
		key: "svg-0"
	}],
	["path", {
		d: "M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87",
		key: "svg-1"
	}],
	["path", {
		d: "M3 3l18 18",
		key: "svg-2"
	}]
]), Fe = Ce("outline", "eye", "Eye", [["path", {
	d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
	key: "svg-0"
}], ["path", {
	d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",
	key: "svg-1"
}]]), Ie = Ce("outline", "info-circle", "InfoCircle", [
	["path", {
		d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",
		key: "svg-0"
	}],
	["path", {
		d: "M12 9h.01",
		key: "svg-1"
	}],
	["path", {
		d: "M11 12h1v4h1",
		key: "svg-2"
	}]
]), Le = Ce("outline", "loader-2", "Loader2", [["path", {
	d: "M12 3a9 9 0 1 0 9 9",
	key: "svg-0"
}]]), Re = Ce("outline", "menu-2", "Menu2", [
	["path", {
		d: "M4 6l16 0",
		key: "svg-0"
	}],
	["path", {
		d: "M4 12l16 0",
		key: "svg-1"
	}],
	["path", {
		d: "M4 18l16 0",
		key: "svg-2"
	}]
]), ze = Ce("outline", "moon", "Moon", [["path", {
	d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008",
	key: "svg-0"
}]]), Be = Ce("outline", "search", "Search", [["path", {
	d: "M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",
	key: "svg-0"
}], ["path", {
	d: "M21 21l-6 -6",
	key: "svg-1"
}]]), Ve = Ce("outline", "shield-check", "ShieldCheck", [["path", {
	d: "M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06",
	key: "svg-0"
}], ["path", {
	d: "M15 19l2 2l4 -4",
	key: "svg-1"
}]]), He = Ce("outline", "sun", "Sun", [["path", {
	d: "M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
	key: "svg-0"
}], ["path", {
	d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
	key: "svg-1"
}]]), Ue = Ce("outline", "x", "X", [["path", {
	d: "M18 6l-12 12",
	key: "svg-0"
}], ["path", {
	d: "M6 6l12 12",
	key: "svg-1"
}]]), We = /*@__PURE__*/ p({
	__name: "Alert",
	props: {
		type: {},
		show: {
			type: Boolean,
			default: !0
		}
	},
	setup(e) {
		let t = e, n = a(() => {
			switch (t.type) {
				case "warning": return {
					border: "border-warning-200 dark:border-warning-900/50",
					background: "bg-warning-50/85 dark:bg-warning-900/40",
					icon: "text-warning-700 dark:text-warning-100",
					text: "text-warning-700 dark:text-warning-100"
				};
				case "danger": return {
					border: "border-danger-200 dark:border-danger-900/50",
					background: "bg-danger-50/85 dark:bg-danger-900/40",
					icon: "text-danger-700 dark:text-danger-100",
					text: "text-danger-700 dark:text-danger-100"
				};
				case "info": return {
					border: "border-secondary-200 dark:border-secondary-900/50",
					background: "bg-secondary-50/85 dark:bg-secondary-900/40",
					icon: "text-secondary-700 dark:text-secondary-100",
					text: "text-secondary-700 dark:text-secondary-100"
				};
				case "success": return {
					border: "border-success-200 dark:border-success-900/50",
					background: "bg-success-50/85 dark:bg-success-900/40",
					icon: "text-success-700 dark:text-success-100",
					text: "text-success-700 dark:text-success-100"
				};
				default: return {
					border: "border-warning-200 dark:border-warning-900/50",
					background: "bg-warning-50/85 dark:bg-warning-900/40",
					icon: "text-warning-700 dark:text-warning-100",
					text: "text-warning-700 dark:text-warning-100"
				};
			}
		}), r = a(() => {
			switch (t.type) {
				case "warning": return Te;
				case "danger": return we;
				case "info": return Ie;
				case "success": return Ve;
				default: return Te;
			}
		});
		return (t, a) => (j(), o(i, { name: "alert-reveal" }, {
			default: q(() => [e.show ? (j(), c("div", {
				key: 0,
				class: C([
					"flex items-start gap-3 p-4 rounded-lg border backdrop-blur-sm",
					n.value.border,
					n.value.background
				])
			}, [(j(), o(z(r.value), { class: C(["w-5 h-5 flex-shrink-0 mt-0.5", n.value.icon]) }, null, 8, ["class"])), l("div", { class: C(["flex-1 text-sm", n.value.text]) }, [L(t.$slots, "default", {}, void 0, !0)], 2)], 2)) : s("", !0)]),
			_: 3
		}));
	}
}), Ge = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Ke = /*#__PURE__*/ Ge(We, [["__scopeId", "data-v-22e2bebf"]]), qe = { class: "flex items-center justify-center relative" }, Je = { class: "flex items-center space-x-2" }, Ye = /* @__PURE__ */ p({
	__name: "BaseButton",
	props: {
		type: { default: "button" },
		variant: { default: "primary" },
		size: { default: "full" },
		icon: { default: null },
		iconPosition: { default: "left" },
		iconClass: { default: "" },
		disabled: {
			type: Boolean,
			default: !1
		},
		loading: {
			type: Boolean,
			default: !1
		},
		to: {}
	},
	setup(e) {
		let t = e, n = a(() => t.to !== void 0), r = a(() => n.value ? Y : "button");
		return (t, n) => (j(), o(z(H(r)), {
			to: e.to,
			type: e.type,
			disabled: e.disabled || e.loading,
			class: C([
				"rounded-lg font-medium transition-all duration-200 relative cursor-pointer",
				"disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2",
				"focus:outline-none",
				"active:scale-95 shadow-sm hover:shadow",
				e.size === "full" && "w-full",
				e.size === "auto" && "w-auto",
				e.size === "small" && "text-sm",
				e.variant === "primary" && "bg-primary-600 dark:bg-primary-500 text-white hover:bg-primary-700 dark:hover:bg-primary-600",
				e.variant === "secondary" && "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700",
				e.variant === "outline" && "border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white",
				e.variant === "primary-outline" && "border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white dark:border-primary-500 dark:text-primary-400 dark:hover:bg-primary-500",
				e.variant === "danger" && "bg-danger-600 hover:bg-danger-700 text-white dark:bg-danger-500 dark:hover:bg-danger-600",
				e.variant === "danger-outline" && "border border-danger-600 text-danger-600 hover:bg-danger-600 hover:text-white dark:border-danger-500 dark:text-danger-400 dark:hover:bg-danger-500 dark:hover:text-white",
				e.variant === "overlay" && "bg-black/60 hover:bg-black/80 text-white text-sm"
			])
		}, {
			default: q(() => [l("div", qe, [e.loading ? (j(), c("svg", {
				key: 0,
				class: C(["animate-spin h-4 w-4 transition-all duration-300 ease-in-out mr-2", e.variant === "primary" ? "text-white" : "text-gray-900 dark:text-white"]),
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 24 24"
			}, [...n[0] ||= [l("circle", {
				class: "opacity-25",
				cx: "12",
				cy: "12",
				r: "10",
				stroke: "currentColor",
				"stroke-width": "4"
			}, null, -1), l("path", {
				class: "opacity-75",
				fill: "currentColor",
				d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			}, null, -1)]], 2)) : s("", !0), l("div", Je, [
				e.icon && !e.loading && e.iconPosition !== "right" ? (j(), o(z(e.icon), {
					key: 0,
					class: C([
						"h-5 w-5",
						t.$slots.default ? "mr-2" : "",
						e.iconClass
					])
				}, null, 8, ["class"])) : s("", !0),
				L(t.$slots, "default"),
				e.icon && !e.loading && e.iconPosition === "right" ? (j(), o(z(e.icon), {
					key: 1,
					class: C(["h-5 w-5", e.iconClass])
				}, null, 8, ["class"])) : s("", !0)
			])])]),
			_: 3
		}, 8, [
			"to",
			"type",
			"disabled",
			"class"
		]));
	}
}), Xe = ["type", "disabled"], Ze = /* @__PURE__ */ p({
	__name: "BaseButtonIcon",
	props: {
		icon: {},
		type: {},
		variant: { default: "secondary" },
		size: { default: "md" },
		disabled: { type: Boolean },
		loading: { type: Boolean }
	},
	setup(e) {
		let t = a(() => ({
			sm: "p-1",
			md: "p-1.5",
			lg: "p-2"
		})[e.size]), n = a(() => ({
			sm: "w-4 h-4",
			md: "w-5 h-5",
			lg: "w-6 h-6"
		})[e.size]), r = a(() => ({
			primary: "bg-primary-600 dark:bg-primary-500 text-white hover:bg-primary-700 dark:hover:bg-primary-600 shadow-sm hover:shadow",
			secondary: "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 shadow-sm hover:shadow",
			outline: "border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700",
			"primary-outline": "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white dark:border-primary-500 dark:text-primary-400 dark:hover:bg-primary-500",
			danger: "bg-danger-600 hover:bg-danger-700 text-white dark:bg-danger-500 dark:hover:bg-danger-600 focus:ring-danger-500 shadow-sm hover:shadow",
			"danger-outline": "border-2 border-danger-600 text-danger-600 hover:bg-danger-600 hover:text-white dark:border-danger-500 dark:text-danger-400 dark:hover:bg-danger-500 dark:hover:text-white focus:ring-danger-500",
			overlay: "bg-black/60 hover:bg-black/80 text-white shadow-sm hover:shadow"
		})[e.variant]);
		return (i, a) => (j(), c("button", {
			type: e.type,
			disabled: e.disabled || e.loading,
			class: C([
				"rounded-lg transition-all duration-200 cursor-pointer inline-flex items-center justify-center",
				"disabled:opacity-50 disabled:cursor-not-allowed",
				"focus:outline-none",
				"active:scale-95",
				H(t),
				H(r)
			])
		}, [e.loading ? (j(), c("svg", {
			key: 0,
			class: C(["animate-spin", [H(n), e.variant === "primary" || e.variant === "danger" ? "text-white" : "text-gray-900 dark:text-white"]]),
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 24 24"
		}, [...a[0] ||= [l("circle", {
			class: "opacity-25",
			cx: "12",
			cy: "12",
			r: "10",
			stroke: "currentColor",
			"stroke-width": "4"
		}, null, -1), l("path", {
			class: "opacity-75",
			fill: "currentColor",
			d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
		}, null, -1)]], 2)) : (j(), o(z(e.icon), {
			key: 1,
			class: C(H(n))
		}, null, 8, ["class"]))], 10, Xe));
	}
}), Qe = {
	class: "flex mb-6",
	"aria-label": "Breadcrumb"
}, $e = { class: "inline-flex items-center space-x-1 md:space-x-3" }, et = {
	key: 0,
	class: "flex items-center"
}, tt = /* @__PURE__ */ p({
	__name: "Breadcrumb",
	props: { items: {} },
	setup(e) {
		return (t, r) => (j(), c("nav", Qe, [l("ol", $e, [(j(!0), c(n, null, I(e.items, (t, n) => (j(), c("li", {
			key: n,
			class: "inline-flex items-center"
		}, [n > 0 ? (j(), c("div", et, [...r[0] ||= [l("svg", {
			class: "w-3 h-3 text-gray-500 dark:text-gray-500 mx-1",
			"aria-hidden": "true",
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 6 10"
		}, [l("path", {
			stroke: "currentColor",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			"stroke-width": "2",
			d: "m1 9 4-4-4-4"
		})], -1)]])) : s("", !0), t.to && n < e.items.length - 1 ? (j(), o(H(Y), {
			key: 1,
			to: t.to,
			class: "inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
		}, {
			default: q(() => [t.icon ? (j(), o(z(t.icon), {
				key: 0,
				class: "w-4 h-4 mr-2"
			})) : s("", !0), d(" " + B(t.label), 1)]),
			_: 2
		}, 1032, ["to"])) : (j(), c("span", {
			key: 2,
			class: C(["inline-flex items-center text-sm font-medium", n === e.items.length - 1 ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400"])
		}, [t.icon ? (j(), o(z(t.icon), {
			key: 0,
			class: "w-4 h-4 mr-2"
		})) : s("", !0), d(" " + B(t.label), 1)], 2))]))), 128))])]));
	}
}), nt = /* @__PURE__ */ p({
	__name: "Badge",
	props: {
		variant: { default: "neutral" },
		text: { default: "base" }
	},
	setup(e) {
		let t = e, n = a(() => {
			switch (t.variant) {
				case "success": return "bg-success-50 dark:bg-success-900/30 text-success-700 dark:text-success-400";
				case "warning": return "bg-warning-50 dark:bg-warning-900/30 text-warning-700 dark:text-warning-400";
				case "danger": return "bg-danger-50 dark:bg-danger-900/30 text-danger-700 dark:text-danger-400";
				case "info": return "bg-secondary-50 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400";
				default: return "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300";
			}
		}), r = a(() => {
			switch (t.text) {
				case "xs": return "text-xs";
				case "sm": return "text-sm";
				default: return "text-base";
			}
		});
		return (e, t) => (j(), c("span", { class: C([
			"inline-flex items-center px-2.5 py-0.5 rounded-full font-medium tabular-nums",
			H(n),
			H(r)
		]) }, [L(e.$slots, "default")], 2));
	}
}), rt = {
	key: 0,
	class: "px-6 pt-5"
}, it = { class: "flex-1 min-w-0" }, at = {
	key: 0,
	class: "text-base font-semibold tracking-tight text-gray-900 dark:text-white"
}, ot = {
	key: 1,
	class: "mt-0.5 text-sm text-gray-500 dark:text-gray-400"
}, st = {
	key: 0,
	class: "flex items-center gap-2 shrink-0"
}, ct = /* @__PURE__ */ p({
	__name: "Card",
	props: {
		title: {},
		subtitle: {},
		colInMobile: {
			type: Boolean,
			default: !1
		},
		noPadding: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = W(), n = a(() => e.title || e.subtitle || t.headerButtons);
		return (t, r) => (j(), c("div", { class: C(["bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm", { "overflow-hidden flex flex-col": e.noPadding }]) }, [H(n) ? (j(), c("div", rt, [l("div", { class: C(["flex items-start justify-between gap-4 pb-4 border-b border-gray-300 dark:border-gray-600", { "flex-col gap-3 sm:flex-row sm:items-start": e.colInMobile }]) }, [l("div", it, [e.title ? (j(), c("h3", at, B(e.title), 1)) : s("", !0), e.subtitle ? (j(), c("p", ot, B(e.subtitle), 1)) : s("", !0)]), t.$slots.headerButtons ? (j(), c("div", st, [L(t.$slots, "headerButtons")])) : s("", !0)], 2)])) : s("", !0), l("div", { class: C(e.noPadding ? "flex-1 flex flex-col" : "p-4") }, [L(t.$slots, "default")], 2)], 2));
	}
}), lt = {
	key: 0,
	class: "flex items-center justify-between pt-4"
}, ut = { class: "text-base text-gray-500 dark:text-gray-400 tabular-nums" }, dt = { class: "flex items-center gap-2" }, ft = ["disabled"], pt = { class: "text-base text-gray-700 dark:text-gray-300 tabular-nums" }, mt = ["disabled"], ht = /* @__PURE__ */ p({
	__name: "CardPaginations",
	props: { pagination: {} },
	emits: ["page-change"],
	setup(e, { emit: t }) {
		let n = t, r = (t) => {
			e.pagination && (t < 1 || t > e.pagination.last_page || n("page-change", t));
		};
		return (t, n) => e.pagination && e.pagination.last_page > 1 ? (j(), c("div", lt, [l("p", ut, " Mostrando " + B(e.pagination.from) + "-" + B(e.pagination.to) + " de " + B(e.pagination.total), 1), l("div", dt, [
			l("button", {
				type: "button",
				disabled: e.pagination.current_page === 1,
				class: "w-8 h-8 flex items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-500 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors",
				onClick: n[0] ||= (t) => r(e.pagination.current_page - 1)
			}, [f(H(Ae), { class: "w-4 h-4" })], 8, ft),
			l("span", pt, B(e.pagination.current_page) + " / " + B(e.pagination.last_page), 1),
			l("button", {
				type: "button",
				disabled: e.pagination.current_page === e.pagination.last_page,
				class: "w-8 h-8 flex items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-500 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors",
				onClick: n[1] ||= (t) => r(e.pagination.current_page + 1)
			}, [f(H(je), { class: "w-4 h-4" })], 8, mt)
		])])) : s("", !0);
	}
}), gt = /* @__PURE__ */ p({
	__name: "CollapseTransition",
	setup(e) {
		function t(e) {
			let t = e;
			t.style.height = "0", t.style.overflow = "hidden", t.style.transition = "height 0.3s ease-out, opacity 0.3s ease-out", t.style.opacity = "0", requestAnimationFrame(() => {
				t.style.height = `${t.scrollHeight}px`, t.style.opacity = "1";
			});
		}
		function n(e) {
			let t = e;
			t.style.height = "", t.style.overflow = "", t.style.transition = "", t.style.opacity = "";
		}
		function r(e) {
			let t = e;
			t.style.height = `${t.scrollHeight}px`, t.style.overflow = "hidden", t.style.transition = "height 0.3s ease-out, opacity 0.3s ease-out", t.style.opacity = "1", requestAnimationFrame(() => {
				t.style.height = "0", t.style.opacity = "0";
			});
		}
		function a(e) {
			let t = e;
			t.style.height = "", t.style.overflow = "", t.style.transition = "", t.style.opacity = "";
		}
		return (e, s) => (j(), o(i, {
			name: "collapse",
			onEnter: t,
			onAfterEnter: n,
			onLeave: r,
			onAfterLeave: a
		}, {
			default: q(() => [L(e.$slots, "default")]),
			_: 3
		}));
	}
}), _t = { class: "relative py-4" }, vt = /* @__PURE__ */ p({
	__name: "Divider",
	setup(e) {
		return (e, t) => (j(), c("div", _t, [...t[0] ||= [l("div", { class: "absolute inset-0 flex items-center" }, [l("div", { class: "w-full border-t border-gray-200 dark:border-gray-700" })], -1)]]));
	}
}), yt = { class: "flex items-start justify-between" }, bt = { class: "flex-1 min-w-0" }, xt = {
	key: 0,
	class: "text-lg font-semibold text-gray-900 dark:text-white"
}, St = {
	key: 1,
	class: "text-sm text-gray-600 dark:text-gray-400 mt-1"
}, Ct = { class: "overflow-y-auto max-h-[70vh] p-0.5 -m-0.5" }, wt = /*#__PURE__*/ Ge(/* @__PURE__ */ p({
	__name: "Modal",
	props: {
		open: { type: Boolean },
		title: {},
		subtitle: {},
		size: {}
	},
	emits: ["update:open", "close"],
	setup(e, { emit: t }) {
		let n = e, u = a(() => ({
			sm: "max-w-sm",
			md: "max-w-lg",
			lg: "max-w-2xl",
			xl: "max-w-4xl",
			"2xl": "max-w-6xl"
		})[n.size ?? "md"]), d = t, p = F(null);
		function m() {
			d("update:open", !1), d("close");
		}
		function h(e) {
			e.target === p.value && m();
		}
		function g(e) {
			e.key === "Escape" && m();
		}
		return K(() => n.open, async (e) => {
			e ? (p.value?.showModal(), await S(), p.value?.focus()) : p.value?.close();
		}), O(async () => {
			n.open && (p.value?.showModal(), await S(), p.value?.focus());
		}), E(() => {
			p.value?.open && p.value.close();
		}), (t, n) => {
			let a = vt;
			return j(), o(r, { to: "body" }, [f(i, {
				name: "modal-fade",
				appear: ""
			}, {
				default: q(() => [e.open ? (j(), c("dialog", {
					key: 0,
					ref_key: "dialogRef",
					ref: p,
					class: "rutely-modal fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-0 m-0 border-0 w-full h-full focus:outline-none",
					onClose: m,
					onClick: ie(h, ["self"]),
					onKeydown: g
				}, [l("div", { class: C(["relative bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full p-6 transform transition-all duration-300 border border-gray-200 dark:border-gray-700", [H(u), e.open ? "scale-100 opacity-100" : "scale-95 opacity-0"]]) }, [l("div", null, [l("div", yt, [l("div", bt, [e.title ? (j(), c("div", xt, B(e.title), 1)) : s("", !0), e.subtitle ? (j(), c("div", St, B(e.subtitle), 1)) : s("", !0)]), l("button", {
					onClick: m,
					"aria-label": "Cerrar",
					class: "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-gray-500 ml-4",
					type: "button"
				}, [...n[0] ||= [l("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					class: "h-5 w-5",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor"
				}, [l("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					"stroke-width": "2",
					d: "M6 18L18 6M6 6l12 12"
				})], -1)]])]), f(a)]), l("div", Ct, [L(t.$slots, "default", {}, void 0, !0)])], 2)], 544)) : s("", !0)]),
				_: 3
			})]);
		};
	}
}), [["__scopeId", "data-v-558911f3"]]), Tt = /* @__PURE__ */ p({
	__name: "DropdownAnimation",
	setup(e) {
		return (e, t) => (j(), o(i, {
			"enter-active-class": "transition ease-out duration-200",
			"enter-from-class": "transform opacity-0 scale-95",
			"enter-to-class": "transform opacity-100 scale-100",
			"leave-active-class": "transition ease-in duration-150",
			"leave-from-class": "transform opacity-100 scale-100",
			"leave-to-class": "transform opacity-0 scale-95"
		}, {
			default: q(() => [L(e.$slots, "default")]),
			_: 3
		}));
	}
}), Et = /* @__PURE__ */ p({
	__name: "LoadingSVG",
	props: { customClass: {} },
	setup(e) {
		let t = e, n = a(() => t.customClass || "animate-spin -ml-1 mr-3 h-12 w-12 text-gray-900 dark:text-white");
		return (e, t) => (j(), c("svg", {
			class: C(H(n)),
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 24 24"
		}, [...t[0] ||= [l("circle", {
			class: "opacity-25",
			cx: "12",
			cy: "12",
			r: "10",
			stroke: "currentColor",
			"stroke-width": "4"
		}, null, -1), l("path", {
			class: "opacity-75",
			fill: "currentColor",
			d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
		}, null, -1)]], 2));
	}
}), Dt = Symbol("useRequest"), Ot = ["for"], kt = { class: "relative" }, At = [
	"id",
	"onBlur",
	"placeholder",
	"name",
	"disabled"
], jt = {
	key: 0,
	class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
}, Mt = { class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" }, Nt = {
	key: 0,
	class: "flex flex-wrap gap-2 mt-2"
}, Pt = ["onClick"], Ft = {
	key: 0,
	class: "py-4 px-4 flex items-center justify-center"
}, It = {
	key: 1,
	class: "py-4 px-4 text-center text-gray-500 dark:text-gray-400"
}, Lt = {
	key: 2,
	class: "space-y-2 p-2 max-h-64 overflow-y-auto"
}, Rt = ["onClick"], zt = { class: "flex justify-between items-center" }, Bt = { class: "flex items-center space-x-2" }, Vt = { class: "flex flex-col" }, Ht = { class: "font-semibold text-gray-900 dark:text-white" }, Ut = {
	key: 0,
	class: "text-primary-600 dark:text-primary-400"
}, Wt = /* @__PURE__ */ p({
	__name: "SearchableSelect",
	props: /*@__PURE__*/ b({
		url: {},
		searchBy: {},
		placeholder: {},
		leftIcon: {},
		id: {},
		name: {},
		label: {},
		rules: {},
		small: { type: Boolean },
		labelKey: {},
		valueKey: {},
		subtitleKey: {},
		disabled: { type: Boolean },
		multiple: { type: Boolean },
		localSearchFirst: { type: Boolean }
	}, {
		modelValue: {},
		modelModifiers: {}
	}),
	emits: /*@__PURE__*/ b(["select", "data"], ["update:modelValue"]),
	setup(e, { emit: t }) {
		let r = e, { placeholder: i = "Buscar...", id: u = "searchable-select", labelKey: p = "label", valueKey: m = "value", multiple: h = !1 } = r, g = U(e, "modelValue"), y = _(Dt);
		if (!y) throw Error("SearchableSelect: no request instance provided. Call app.provide(useRequestKey, useRequest) in the consuming app.");
		let { get: b } = y(), x = F(!1), S = F(""), w = F([]), T = F([]), E = F(/* @__PURE__ */ new Map()), D = F(null), k = F([]), M = F(!1), N = F(), P = F(), L = F(""), R = F(!1), V = F(!1), ee = F(!1), W = a(() => g.value ? D.value && D.value.value === g.value ? D.value : w.value.find((e) => e.value === g.value) || T.value.find((e) => e.value === g.value) : null), G = a(() => "absolute w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-[9999] mt-2 overflow-hidden"), ne = a(() => Array.isArray(g.value) ? g.value : []), re = (e, t) => {
			let n = t.toLocaleLowerCase();
			return [e.label, ...e.subtitles].some((e) => e.toLocaleLowerCase().includes(n));
		}, ie = (e) => T.value.filter((t) => re(t, e)), Y = (e) => h ? ne.value.includes(e.value) : W.value?.value === e.value, ae = 0, ce = async () => {
			let e = ++ae, t = ne.value;
			if (t.length === 0) {
				k.value = [];
				return;
			}
			let n = /* @__PURE__ */ new Map();
			for (let e of k.value) n.set(e.value, e);
			for (let e of w.value) n.set(e.value, e);
			for (let e of T.value) n.set(e.value, e);
			let i = t.filter((e) => !n.has(e));
			if (i.length && r.url) {
				if (T.value.length === 0) {
					if (await he(), e !== ae) return;
					for (let e of T.value) n.set(e.value, e);
					i = t.filter((e) => !n.has(e));
				}
				for (let t of i) try {
					let i = r.url.includes("?") ? "&" : "?", { data: a } = await b(`${r.url}${i}filter[${m}]=${t}`);
					if (e !== ae) return;
					let o = Array.isArray(a.value) ? a.value : a.value?.data || [];
					o.length && n.set(t, pe(o[0]));
				} catch {}
			}
			e === ae && (k.value = t.map((e) => n.get(e) ?? {
				label: String(e),
				value: e,
				subtitles: []
			}));
		}, le = (e, t) => {
			ee.value = !0;
			let n = ne.value.filter((t) => t !== e);
			g.value = n, t(n), k.value = k.value.filter((t) => t.value !== e);
		};
		function ue(e, t) {
			return t.trim().split(".").reduce((e, t) => e?.[t], e);
		}
		function de(e, t) {
			let n = [...e.matchAll(/\{([^}]+)\}/g)];
			if (n.length === 0) {
				let n = ue(t, e);
				return n == null ? "" : String(n);
			}
			let r = n.map((e) => ue(t, e[1]));
			if (r.every((e) => e == null || e === "")) return "";
			let i = e;
			return n.forEach((e, t) => {
				let n = r[t];
				i = i.replace(e[0], n == null ? "" : String(n));
			}), i.replace(/^[\s\-:|,·]+/, "").replace(/[\s\-:|,·]+$/, "").replace(/\s+/g, " ").trim();
		}
		function fe(e) {
			return r.subtitleKey ? (Array.isArray(r.subtitleKey) ? r.subtitleKey : [r.subtitleKey]).map((t) => de(t, e)).filter(Boolean) : [];
		}
		let pe = (e) => {
			let t = {
				label: de(p, e),
				value: ue(e, m),
				icon: e.icon,
				subtitles: fe(e)
			};
			return E.value.set(t.value, e), t;
		}, he = async (e = {}) => {
			if (!r.url) return;
			let t = r.url;
			if (e.searchWithId && g.value) {
				let e = r.url.includes("?") ? "&" : "?";
				t = `${r.url}${e}filter[${r.valueKey}]=${g.value}`;
			}
			M.value = !0;
			try {
				let { data: e } = await b(t);
				if (e.value) {
					let t = (Array.isArray(e.value) ? e.value : e.value.data || []).map(pe);
					w.value = t, T.value = t;
				}
			} catch (e) {
				console.error("Error fetching initial data:", e), w.value = [], T.value = [];
			} finally {
				M.value = !1;
			}
		}, ge = async (e) => {
			if (!r.url || !e.trim()) {
				w.value = T.value;
				return;
			}
			if (r.localSearchFirst) {
				let t = ie(e);
				if (t.length > 0) {
					w.value = t;
					return;
				}
			}
			M.value = !0;
			try {
				let t = r.url.includes("?") ? "&" : "?", n = `${r.url}${t}${r.searchBy}=${encodeURIComponent(e)}`, { data: i } = await b(n);
				if (i.value) {
					let e = (Array.isArray(i.value) ? i.value : i.value.data || []).map(pe);
					w.value = e;
				}
			} catch (e) {
				console.error("Error searching data:", e), w.value = [];
			} finally {
				M.value = !1;
			}
		}, _e = () => {
			x.value = !0, L.value = S.value, V.value = !0, S.value = "", T.value.length === 0 ? he() : (w.value = T.value, D.value && !w.value.find((e) => e.value === D.value.value) && (w.value = [D.value, ...w.value])), P.value && P.value.select();
		}, ve = () => {
			setTimeout(() => {
				x.value = !1, V.value = !0, h ? S.value = "" : g.value && W.value ? S.value = W.value.label : g.value || (S.value = ""), L.value = "";
			}, 200);
		};
		me(S, (e) => {
			if (V.value) {
				V.value = !1;
				return;
			}
			let t = e.trim();
			t && !R.value ? (ge(t), R.value = !1) : w.value = T.value;
		}, { debounce: 500 });
		let ye = t, be = (e, t, n) => {
			if (t && (t.preventDefault(), t.stopPropagation()), h) {
				if (V.value = !0, ee.value = !0, ne.value.includes(e.value)) {
					let t = ne.value.filter((t) => t !== e.value);
					g.value = t, n(t), k.value = k.value.filter((t) => t.value !== e.value);
				} else {
					let t = [...ne.value, e.value];
					g.value = t, n(t), k.value.find((t) => t.value === e.value) || k.value.push(e);
				}
				S.value = "", w.value = T.value, ye("select", e);
				let t = E.value.get(e.value);
				t !== void 0 && ye("data", t), P.value && P.value.focus();
				return;
			}
			V.value = !0, g.value = e.value, n(e.value), S.value = e.label, D.value = e, x.value = !1, P.value && P.value.blur(), ye("select", e);
			let r = E.value.get(e.value);
			r !== void 0 && ye("data", r);
		}, xe = (e) => {
			let t = e.target;
			N.value && !N.value.contains(t) && (x.value = !1);
		};
		O(() => {
			if (document.addEventListener("click", xe), h) {
				ce();
				return;
			}
			g.value && g.value !== "" ? Se(g.value) : g.value && W.value && (S.value = W.value.label, D.value = W.value);
		}), A(() => {
			document.removeEventListener("click", xe);
		}), K(g, (e, t) => {
			if (h) {
				if (ee.value) {
					ee.value = !1;
					return;
				}
				ce();
				return;
			}
			e && e !== t ? W.value && W.value.value === e ? (S.value = W.value.label, D.value ||= W.value) : (!D.value || D.value.value !== e) && Se(e) : e || (S.value = "", D.value = null);
		});
		let Se = async (e) => {
			R.value = !0, await he();
			let t = w.value.find((t) => t.value === e);
			if (t) V.value = !0, S.value = t.label, D.value = t;
			else {
				let t = r.url.includes("?") ? "&" : "?", n = `${r.url}${t}filter[${r.valueKey}]=${e}`;
				try {
					let { data: e } = await b(n);
					if (e.value) {
						let t = Array.isArray(e.value) ? e.value : e.value.data || [];
						if (t.length > 0) {
							let e = pe(t[0]);
							w.value = [e, ...w.value], T.value = [e, ...T.value], D.value = e, V.value = !0, S.value = e.label;
						}
					}
				} catch (e) {
					console.error("Error fetching item by ID:", e);
				}
			}
			R.value = !1;
		};
		return (t, a) => {
			let p = Et, m = Tt;
			return j(), c("div", {
				class: "relative",
				ref_key: "selectRef",
				ref: N
			}, [
				e.label && !r.small ? (j(), c("label", {
					key: 0,
					for: H(u),
					class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
				}, B(e.label), 9, Ot)) : s("", !0),
				f(H(se), {
					name: e.name || H(u),
					rules: e.rules,
					modelValue: g.value,
					"onUpdate:modelValue": a[1] ||= (e) => g.value = e
				}, {
					default: q(({ field: t, errorMessage: g, handleChange: _ }) => [
						l("div", kt, [
							J(l("input", {
								id: H(u),
								ref_key: "inputRef",
								ref: P,
								"onUpdate:modelValue": a[0] ||= (e) => v(S) ? S.value = e : null,
								onFocus: _e,
								onBlur: (e) => {
									t.onBlur(e), ve();
								},
								placeholder: H(i),
								name: t.name,
								autocomplete: "off",
								"aria-autocomplete": "none",
								"data-lpignore": "true",
								"data-bwignore": "true",
								"data-form-type": "other",
								spellcheck: "false",
								class: C([
									"w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
									e.leftIcon ? "pl-10" : "pl-4",
									"pr-10",
									g ? "border-danger-500 dark:border-danger-500" : "",
									r.small ? "py-2" : "py-3"
								]),
								disabled: e.disabled
							}, null, 42, At), [[te, H(S)]]),
							e.leftIcon ? (j(), c("div", jt, [(j(), o(z(e.leftIcon), { class: C([r.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400"]) }, null, 8, ["class"]))])) : s("", !0),
							l("div", Mt, [(j(), o(z(H(ke)), { class: C([
								r.small ? "h-4 w-4" : "h-5 w-5",
								"text-gray-400 dark:text-gray-400 transition-transform duration-200",
								H(x) ? "rotate-180" : ""
							]) }, null, 8, ["class"]))])
						]),
						H(h) && H(k).length ? (j(), c("div", Nt, [(j(!0), c(n, null, I(H(k), (e) => (j(), c("span", {
							key: e.value,
							class: "inline-flex items-center gap-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1"
						}, [d(B(e.label) + " ", 1), l("button", {
							type: "button",
							onClick: (t) => le(e.value, _),
							class: "hover:text-primary-900 dark:hover:text-primary-100"
						}, [f(H(Ue), { class: "h-4 w-4" })], 8, Pt)]))), 128))])) : s("", !0),
						f(m, null, {
							default: q(() => [H(x) ? (j(), c("div", {
								key: 0,
								class: C(H(G))
							}, [H(M) ? (j(), c("div", Ft, [f(p)])) : H(w).length === 0 ? (j(), c("div", It, " No se encontraron datos ")) : (j(), c("div", Lt, [(j(!0), c(n, null, I(H(w), (e) => (j(), c("div", {
								key: e.value,
								onClick: (t) => be(e, t, _),
								class: C(["rounded-lg p-3 border cursor-pointer transition-colors", {
									"border-primary-500 bg-primary-100 dark:bg-primary-900/20 hover:bg-primary-200 dark:hover:bg-primary-900/30": Y(e),
									"bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700": !Y(e)
								}])
							}, [l("div", zt, [l("div", Bt, [e.icon ? (j(), o(z(e.icon), {
								key: 0,
								class: "w-5 h-5 text-gray-600 dark:text-gray-400"
							})) : s("", !0), l("div", Vt, [l("span", Ht, B(e.label), 1), (j(!0), c(n, null, I(e.subtitles, (e, t) => (j(), c("span", {
								key: t,
								class: "text-xs text-gray-500 dark:text-gray-400"
							}, B(e), 1))), 128))])]), Y(e) ? (j(), c("div", Ut, [f(H(Oe), { class: "h-6 w-6" })])) : s("", !0)])], 10, Rt))), 128))]))], 2)) : s("", !0)]),
							_: 2
						}, 1024)
					]),
					_: 1
				}, 8, [
					"name",
					"rules",
					"modelValue"
				]),
				f(H(oe), {
					name: e.name || H(u),
					class: "mt-1 text-sm text-danger-600 dark:text-danger-400"
				}, null, 8, ["name"])
			], 512);
		};
	}
}), Gt = {
	debug: !1,
	masked: !1,
	prefix: "",
	suffix: "",
	thousands: ",",
	decimal: ".",
	precision: 2,
	disableNegative: !1,
	disabled: !1,
	min: null,
	max: null,
	setMaxIfBigger: !0,
	allowBlank: !1,
	treatZeroAsBlank: !0,
	minimumNumberOfCharacters: 0,
	modelModifiers: { number: !1 },
	shouldRound: !0,
	focusOnRight: !1,
	lazy: !0
}, Kt = ["+", "-"], qt = [
	"decimal",
	"thousands",
	"prefix",
	"suffix"
];
function Jt(e) {
	return Math.max(0, Math.min(e, 100));
}
function Yt(e, t) {
	return e = e.padStart(t + 1, "0"), t === 0 ? e : `${e.slice(0, -t)}.${e.slice(-t)}`;
}
function Xt(e) {
	return e = e ? e.toString() : "", e.replace(/\D+/g, "") || "0";
}
function Zt(e, t) {
	return e.replace(/(\d)(?=(?:\d{3})+\b)/gm, `$1${t}`);
}
function Qt(e, t, n) {
	return t ? e + n + t : e;
}
function $t(e, t) {
	return Kt.includes(e) ? (console.warn(`v-money3 "${t}" property don't accept "${e}" as a value.`), !1) : !/\d/g.test(e) || (console.warn(`v-money3 "${t}" property don't accept "${e}" (any number) as a value.`), !1);
}
function en(e) {
	for (let t of qt) if (!$t(e[t], t)) return !1;
	return !0;
}
function tn(e) {
	for (let t of qt) {
		if (typeof e[t] != "string") {
			e[t] = "";
			continue;
		}
		e[t] = e[t].replace(/\d+/g, "");
		for (let n of Kt) e[t] = e[t].replaceAll(n, "");
	}
	return e;
}
function nn(e) {
	return e.length - (e.indexOf(".") + 1);
}
function rn(e) {
	return e.replace(/^(-?)0+(?!\.)(.+)/, "$1$2");
}
function an(e) {
	return /^-?[\d]+$/g.test(e);
}
function on(e) {
	return /^-?[\d]+(\.[\d]+)$/g.test(e);
}
function sn(e, t, n) {
	return t > e.length - 1 ? e : e.substring(0, t) + n + e.substring(t + 1);
}
function cn(e, t) {
	let n = t - nn(e);
	if (n >= 0) return e;
	let r = e.slice(0, n), i = e.slice(n);
	if (r.charAt(r.length - 1) === "." && (r = r.slice(0, -1)), parseInt(i.charAt(0), 10) >= 5) {
		for (let e = r.length - 1; e >= 0; --e) {
			let t = r.charAt(e);
			if (t !== "." && t !== "-") {
				let n = parseInt(t, 10) + 1;
				if (n < 10) return sn(r, e, n);
				r = sn(r, e, "0");
			}
		}
		return `1${r}`;
	}
	return r;
}
function ln(e, t) {
	let n = () => {
		e === document.activeElement && e.setSelectionRange(t, t);
	};
	e === document.activeElement && (n(), setTimeout(n, 1));
}
function un(e) {
	return new Event(e, {
		bubbles: !0,
		cancelable: !1
	});
}
function dn({ debug: e = !1 }, ...t) {
	e && console.log(...t);
}
function fn(e) {
	"@babel/helpers - typeof";
	return fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, fn(e);
}
function pn(e, t) {
	if (fn(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (fn(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function mn(e) {
	var t = pn(e, "string");
	return fn(t) == "symbol" ? t : t + "";
}
function hn(e, t, n) {
	return (t = mn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var gn = class e {
	constructor(e) {
		hn(this, "number", 0n), hn(this, "decimal", 0), this.setNumber(e);
	}
	getNumber() {
		return this.number;
	}
	getDecimalPrecision() {
		return this.decimal;
	}
	setNumber(e) {
		this.decimal = 0, typeof e == "bigint" ? this.number = e : typeof e == "number" ? this.setupString(e.toString()) : this.setupString(e);
	}
	toFixed(e = 0, t = !0) {
		let n = this.toString(), r = e - this.getDecimalPrecision();
		if (r > 0) return n.includes(".") || (n += "."), n.padEnd(n.length + r, "0");
		if (r < 0) {
			if (t) return cn(n, e);
			let i = n.slice(0, r);
			return i.endsWith(".") ? i.slice(0, -1) : i;
		}
		return n;
	}
	toString() {
		let e = this.number.toString();
		if (this.decimal) {
			let t = !1;
			return e.charAt(0) === "-" && (e = e.substring(1), t = !0), e = e.padStart(e.length + this.decimal, "0"), e = `${e.slice(0, -this.decimal)}.${e.slice(-this.decimal)}`, e = rn(e), (t ? "-" : "") + e;
		}
		return e;
	}
	lessThan(e) {
		let [t, n] = this.adjustComparisonNumbers(e);
		return t < n;
	}
	biggerThan(e) {
		let [t, n] = this.adjustComparisonNumbers(e);
		return t > n;
	}
	isEqual(e) {
		let [t, n] = this.adjustComparisonNumbers(e);
		return t === n;
	}
	setupString(e) {
		if (e = rn(e), an(e)) this.number = BigInt(e);
		else if (on(e)) this.decimal = nn(e), this.number = BigInt(e.replace(".", ""));
		else throw Error(`BigNumber has received an invalid format for the constructor: ${e}`);
	}
	adjustComparisonNumbers(t) {
		let n;
		n = t instanceof e ? t : new e(t);
		let r = this.getDecimalPrecision() - n.getDecimalPrecision(), i = this.getNumber(), a = n.getNumber();
		return r > 0 ? a = n.getNumber() * 10n ** BigInt(r) : r < 0 && (i = this.getNumber() * 10n ** BigInt(r * -1)), [i, a];
	}
};
function _n(e, t = Gt, n = "") {
	dn(t, "utils format() - caller", n), dn(t, "utils format() - input1", e);
	let r = Jt(t.precision);
	if ((e == null || e === "") && t.allowBlank) return "";
	if (e == null) e = "";
	else if (typeof e == "number") e = t.shouldRound ? e.toFixed(r) : e.toFixed(Math.min(r + 1, 100)).slice(0, -1);
	else if (t.modelModifiers && t.modelModifiers.number && an(e)) e = Number(e).toFixed(r);
	else if (!t.disableNegative && e === "-") return e;
	dn(t, "utils format() - input2", e);
	let i = t.disableNegative ? "" : e.indexOf("-") >= 0 ? "-" : "", a = e.replace(t.prefix, "").replace(t.suffix, "");
	dn(t, "utils format() - filtered", a), !r && t.thousands !== "." && on(a) && (a = cn(a, 0), dn(t, "utils format() - !precision && isValidFloat()", a));
	let o = Xt(a);
	dn(t, "utils format() - numbers", o), dn(t, "utils format() - numbersToCurrency", i + Yt(o, r));
	let s = new gn(i + Yt(o, r));
	dn(t, "utils format() - bigNumber1", s.toString()), t.setMaxIfBigger !== !1 && t.max !== null && t.max !== void 0 && t.max !== "" && s.biggerThan(t.max) && s.setNumber(t.max), t.min !== null && t.min !== void 0 && t.min !== "" && s.lessThan(t.min) && s.setNumber(t.min), t.disableNegative && s.lessThan(0) && s.setNumber(0);
	let c = s.toFixed(r, t.shouldRound);
	if (dn(t, "utils format() - bigNumber2", s.toFixed(r)), /^0(\.0+)?$/g.test(c) && t.allowBlank && t.treatZeroAsBlank) return "";
	let [l, u] = c.split("."), d = u === void 0 ? 0 : u.length, f = l.charAt(0) === "-", p = (f ? l.slice(1) : l).padStart(t.minimumNumberOfCharacters - d, "0");
	l = (f ? "-" : "") + Zt(p, t.thousands);
	let m = t.prefix + Qt(l, u, t.decimal) + t.suffix;
	return dn(t, "utils format() - output", m), m;
}
function vn(e, t = Gt, n = "") {
	if (dn(t, "utils unformat() - caller", n), dn(t, "utils unformat() - input", e), !t.disableNegative && e === "-") return dn(t, "utils unformat() - return netagive symbol", e), e;
	let r = t.disableNegative ? "" : e.indexOf("-") >= 0 ? "-" : "", i = e.replace(t.prefix, "").replace(t.suffix, "");
	dn(t, "utils unformat() - filtered", i);
	let a = Xt(i);
	dn(t, "utils unformat() - numbers", a);
	let o = new gn(r + Yt(a, t.precision));
	dn(t, "utils unformat() - bigNumber1", a.toString()), t.setMaxIfBigger !== !1 && t.max !== null && t.max !== void 0 && t.max !== "" && o.biggerThan(t.max) && o.setNumber(t.max), t.min !== null && t.min !== void 0 && t.min !== "" && o.lessThan(t.min) && o.setNumber(t.min), t.disableNegative && o.lessThan(0) && o.setNumber(0);
	let s = o.toFixed(Jt(t.precision), t.shouldRound);
	return t.modelModifiers && t.modelModifiers.number && (s = parseFloat(s)), dn(t, "utils unformat() - output", s), s;
}
var yn = [
	"precision",
	"decimal",
	"thousands",
	"prefix",
	"suffix",
	"min",
	"max",
	"setMaxIfBigger",
	"allowBlank",
	"treatZeroAsBlank",
	"minimumNumberOfCharacters",
	"shouldRound",
	"modelModifiers"
], bn = "__v_money3_last_valid__", xn = "__v_money3_is_wrapper__", Sn = "__v_money3_synth__", Cn = (e, t, n) => {
	if (dn(t, "directive setValue() - caller", n), !en(t)) {
		dn(t, "directive setValue() - validateRestrictedOptions() return false. Stopping here...", e.value);
		return;
	}
	let r = e.value.length - (e.selectionEnd || 0), i = _n(e.value, t, n);
	if (t.setMaxIfBigger === !1 && t.max !== null && t.max !== void 0 && t.max !== "") {
		let n = vn(i, t, "directive setValue overflow check");
		if (new gn(String(n)).biggerThan(t.max)) {
			let t = e[bn];
			typeof t == "string" && t !== e.value && (e.value = t);
			return;
		}
	}
	if (i === e.value) {
		let t = e[bn];
		e[bn] = i, t !== void 0 && t !== i && e.dispatchEvent(un("change"));
		return;
	}
	if (e.value = i, e[bn] = i, r = Math.max(r, t.suffix.length), r = e.value.length - r, r = Math.max(r, t.prefix.length), ln(e, r), e.dispatchEvent(un("change")), e[xn]) {
		let t = new Event("input", { bubbles: !1 });
		t[Sn] = !0, e.dispatchEvent(t);
	}
}, wn = (e, t) => {
	let n = e.currentTarget, r = e.code === "Backspace" || e.code === "Delete", i = n.value.length - (n.selectionEnd || 0) === 0;
	dn(t, "directive onkeydown() - el.value", n.value), dn(t, "directive onkeydown() - backspacePressed", r), dn(t, "directive onkeydown() - isAtEndPosition", i), t.allowBlank && t.treatZeroAsBlank && r && i && parseFloat(String(vn(n.value, t, "directive onkeydown allowBlank"))) === 0 && (dn(t, "directive onkeydown() - set el.value = \"\"", n.value), n.value = "", n.dispatchEvent(un("change"))), dn(t, "directive onkeydown() - e.key", e.key), e.key === "+" && n.value.indexOf("-") >= 0 && (dn(t, "directive onkeydown() - flipping sign on el.value", n.value), n.value = n.value.replace("-", ""), Cn(n, t, "directive onkeydown +"));
}, Tn = (e, t) => {
	if (e[Sn]) return;
	let n = e.currentTarget;
	dn(t, "directive oninput()", n.value), /^[1-9]$/.test(n.value) && (n.value = Yt(n.value, Jt(t.precision)), dn(t, "directive oninput() - is 1-9", n.value)), Cn(n, t, "directive oninput");
}, En = (e, t) => {
	let n = e.currentTarget;
	dn(t, "directive onFocus()", n.value), t.focusOnRight && ln(n, n.value.length - t.suffix.length);
}, Dn = (e) => {
	if (e.tagName.toLocaleUpperCase() !== "INPUT") {
		let t = e.getElementsByTagName("input");
		if (t.length !== 1) throw Error(`v-money3 requires 1 input, found ${t.length} elements.`);
		return t[0];
	}
	return e;
}, On = (e, t) => {
	e.onkeydown = (e) => {
		wn(e, t);
	}, e.oninput = (e) => {
		Tn(e, t);
	}, e.onfocus = (e) => {
		En(e, t);
	};
};
function kn(e, t) {
	return e ? yn.some((n) => JSON.stringify(e[n]) !== JSON.stringify(t[n])) : !1;
}
var An = "__v_money3_input__";
function jn(e) {
	let t = e[An];
	if (t) return t;
	let n = Dn(e);
	return e[An] = n, n;
}
var Mn = {
	mounted(e, t) {
		if (!t.value) return;
		let n = tn({
			...Gt,
			...t.value
		});
		dn(n, "directive mounted() - opt", n);
		let r = jn(e);
		r[xn] = e !== r, On(r, n), dn(n, "directive mounted() - el.value", r.value), Cn(r, n, "directive mounted");
	},
	updated(e, t) {
		if (!t.value) return;
		let n = tn({
			...Gt,
			...t.value
		});
		dn(n, "directive updated() - opt", n), dn(n, "directive updated() - host.value", e.value);
		let r = jn(e);
		if (r[xn] = e !== r, _n(r.value, n, "directive updated check") !== r.value) {
			if (kn(t.oldValue ? tn({
				...Gt,
				...t.oldValue
			}) : null, n) && r.value !== "") {
				console.warn("v-money3: runtime change of format options on the bare directive is unsupported and was skipped to avoid corrupting the value. Re-mount the directive or use the Money3 component instead.");
				return;
			}
			Cn(r, n, "directive updated");
		}
	},
	beforeUnmount(e) {
		let t = e[An] || e;
		t.onkeydown = null, t.oninput = null, t.onfocus = null, delete t[xn], delete e[An];
	}
}, Nn = Object.defineProperty, Pn = (e, t, n) => t in e ? Nn(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Fn = (e, t, n) => Pn(e, typeof t == "symbol" ? t : t + "", n), In = {
	"#": { pattern: /[0-9]/ },
	"@": { pattern: /[a-zA-Z]/ },
	"*": { pattern: /[a-zA-Z0-9]/ }
}, Ln = (e, t, n) => e.replaceAll(t, "").replace(n, ".").replace("..", ".").replace(/[^.\d]/g, ""), Rn = (e, t, n) => new Intl.NumberFormat(n.number?.locale ?? "en", {
	minimumFractionDigits: e,
	maximumFractionDigits: t,
	roundingMode: "trunc"
}), zn = (e, t = !0, n) => {
	let r = n.number?.unsigned !== !0 && e.startsWith("-") ? "-" : "", i = n.number?.fraction ?? 0, a = Rn(0, i, n), o = a.formatToParts(1000.12), s = o.find((e) => e.type === "group")?.value ?? " ", c = o.find((e) => e.type === "decimal")?.value ?? ".", l = Ln(e, s, c);
	if (Number.isNaN(parseFloat(l))) return r;
	let u = l.split(".");
	u[1] != null && u[1].length >= 1 && (a = Rn(u[1].length <= i ? u[1].length : i, i, n));
	let d = a.format(parseFloat(l));
	return t ? i > 0 && l.endsWith(".") && !l.slice(0, -1).includes(".") && (d += c) : d = Ln(d, s, c), r + d;
}, Bn = (e) => JSON.parse(e.replaceAll("'", "\"")), Vn = (e, t = {}) => {
	let n = { ...t };
	e.dataset.maska != null && e.dataset.maska !== "" && (n.mask = Un(e.dataset.maska)), e.dataset.maskaEager != null && (n.eager = Hn(e.dataset.maskaEager)), e.dataset.maskaReversed != null && (n.reversed = Hn(e.dataset.maskaReversed)), e.dataset.maskaTokensReplace != null && (n.tokensReplace = Hn(e.dataset.maskaTokensReplace)), e.dataset.maskaTokens != null && (n.tokens = Wn(e.dataset.maskaTokens));
	let r = {};
	return e.dataset.maskaNumberLocale != null && (r.locale = e.dataset.maskaNumberLocale), e.dataset.maskaNumberFraction != null && (r.fraction = parseInt(e.dataset.maskaNumberFraction)), e.dataset.maskaNumberUnsigned != null && (r.unsigned = Hn(e.dataset.maskaNumberUnsigned)), (e.dataset.maskaNumber != null || Object.values(r).length > 0) && (n.number = r), n;
}, Hn = (e) => e === "" || !!JSON.parse(e), Un = (e) => e.startsWith("[") && e.endsWith("]") ? Bn(e) : e, Wn = (e) => {
	if (e.startsWith("{") && e.endsWith("}")) return Bn(e);
	let t = {};
	return e.split("|").forEach((e) => {
		let n = e.split(":");
		t[n[0]] = {
			pattern: Gn() ? new RegExp(n[1], "u") : new RegExp(n[1]),
			optional: n[2] === "optional",
			multiple: n[2] === "multiple",
			repeated: n[2] === "repeated"
		};
	}), t;
}, Gn = () => {
	try {
		return !0;
	} catch {
		return !1;
	}
}, Kn = class {
	constructor(e = {}) {
		Fn(this, "opts", {}), Fn(this, "memo", /* @__PURE__ */ new Map());
		let t = { ...e };
		if (t.tokens != null) {
			t.tokens = t.tokensReplace ? { ...t.tokens } : {
				...In,
				...t.tokens
			};
			for (let e of Object.values(t.tokens)) typeof e.pattern == "string" && (e.pattern = Gn() ? new RegExp(e.pattern, "u") : new RegExp(e.pattern));
		} else t.tokens = In;
		Array.isArray(t.mask) && (t.mask = t.mask.length > 1 ? [...t.mask].sort((e, t) => e.length - t.length) : t.mask[0] ?? ""), t.mask === "" && (t.mask = null), this.opts = t;
	}
	masked(e) {
		return this.process(String(e), this.findMask(String(e)));
	}
	unmasked(e) {
		return this.process(String(e), this.findMask(String(e)), !1);
	}
	isEager() {
		return this.opts.eager === !0;
	}
	isReversed() {
		return this.opts.reversed === !0;
	}
	completed(e) {
		let t = this.findMask(String(e));
		if (this.opts.mask == null || t == null) return !1;
		let n = this.process(String(e), t).length;
		return typeof this.opts.mask == "string" ? n >= this.opts.mask.length : n >= t.length;
	}
	findMask(e) {
		let t = this.opts.mask;
		if (t == null) return null;
		if (typeof t == "string") return t;
		if (typeof t == "function") return t(e);
		let n = this.process(e, t.slice(-1).pop() ?? "", !1);
		return t.find((t) => this.process(e, t, !1).length >= n.length) ?? "";
	}
	escapeMask(e) {
		let t = [], n = [];
		return e.split("").forEach((r, i) => {
			r === "!" && e[i - 1] !== "!" ? n.push(i - n.length) : t.push(r);
		}), {
			mask: t.join(""),
			escaped: n
		};
	}
	process(e, t, n = !0) {
		if (this.opts.number != null) return zn(e, n, this.opts);
		if (t == null) return e;
		let r = `v=${e},mr=${t},m=${+!!n}`;
		if (this.memo.has(r)) return this.memo.get(r);
		let { mask: i, escaped: a } = this.escapeMask(t), o = [], s = this.opts.tokens == null ? {} : this.opts.tokens, c = this.isReversed() ? -1 : 1, l = this.isReversed() ? "unshift" : "push", u = this.isReversed() ? 0 : i.length - 1, d = this.isReversed() ? () => h > -1 && g > -1 : () => h < i.length && g < e.length, f = (e) => !this.isReversed() && e <= u || this.isReversed() && e >= u, p, m = -1, h = this.isReversed() ? i.length - 1 : 0, g = this.isReversed() ? e.length - 1 : 0, _ = !1;
		for (; d();) {
			let t = i.charAt(h), r = s[t], d = r?.transform == null ? e.charAt(g) : r.transform(e.charAt(g));
			if (!a.includes(h) && r != null ? (d.match(r.pattern) == null ? r.multiple ? _ &&= (h += c, g -= c, !1) : d === p ? p = void 0 : r.optional && (h += c, g -= c) : (o[l](d), r.repeated ? (m === -1 ? m = h : h === u && h !== m && (h = m - c), u === m && (h -= c)) : r.multiple && (_ = !0, h -= c), h += c), g += c) : (n && !this.isEager() && o[l](t), d === t && !this.isEager() ? g += c : p = t, this.isEager() || (h += c)), this.isEager()) for (; f(h) && (s[i.charAt(h)] == null || a.includes(h));) {
				if (n) {
					if (o[l](i.charAt(h)), e.charAt(g) === i.charAt(h)) {
						h += c, g += c;
						continue;
					}
				} else i.charAt(h) === e.charAt(g) && (g += c);
				h += c;
			}
		}
		return this.memo.set(r, o.join("")), this.memo.get(r);
	}
}, qn = class {
	constructor(e, t = {}) {
		Fn(this, "items", /* @__PURE__ */ new Map()), Fn(this, "eventAbortController"), Fn(this, "onInput", (e) => {
			if (e instanceof CustomEvent && e.type === "input" && !e.isTrusted && !e.bubbles) return;
			let t = e.target, n = this.items.get(t);
			if (n === void 0) return;
			let r = "inputType" in e && e.inputType.startsWith("delete"), i = n.isEager(), a = r && i && n.unmasked(t.value) === "" ? "" : t.value;
			this.fixCursor(t, r, () => this.setValue(t, a));
		}), this.options = t, this.eventAbortController = new AbortController(), this.init(this.getInputs(e));
	}
	update(e = {}) {
		this.options = { ...e }, this.init(Array.from(this.items.keys()));
	}
	updateValue(e) {
		e.value !== "" && e.value !== this.processInput(e)?.masked && this.setValue(e, e.value);
	}
	destroy() {
		this.eventAbortController.abort(), this.items.clear();
	}
	init(e) {
		let t = this.getOptions(this.options);
		for (let n of e) {
			if (!this.items.has(n)) {
				let { signal: e } = this.eventAbortController;
				n.addEventListener("input", this.onInput, {
					capture: !0,
					signal: e
				});
			}
			let e = new Kn(Vn(n, t));
			this.items.set(n, e), queueMicrotask(() => this.updateValue(n)), n.selectionStart === null && e.isEager() && console.warn("Maska: input of `%s` type is not supported", n.type);
		}
	}
	getInputs(e) {
		return typeof e == "string" ? Array.from(document.querySelectorAll(e)) : "length" in e ? Array.from(e) : [e];
	}
	getOptions(e) {
		let { onMaska: t, preProcess: n, postProcess: r, ...i } = e;
		return i;
	}
	fixCursor(e, t, n) {
		let r = e.selectionStart, i = e.value;
		if (n(), r === null || r === i.length && !t) return;
		let a = e.value, o = i.slice(0, r), s = a.slice(0, r), c = this.processInput(e, o)?.unmasked, l = this.processInput(e, s)?.unmasked;
		if (c === void 0 || l === void 0) return;
		let u = r;
		o !== s && (u += t ? a.length - i.length : c.length - l.length), e.setSelectionRange(u, u);
	}
	setValue(e, t) {
		let n = this.processInput(e, t);
		n !== void 0 && (e.value = n.masked, this.options.onMaska != null && (Array.isArray(this.options.onMaska) ? this.options.onMaska.forEach((e) => e(n)) : this.options.onMaska(n)), e.dispatchEvent(new CustomEvent("maska", { detail: n })), e.dispatchEvent(new CustomEvent("input", { detail: n.masked })));
	}
	processInput(e, t) {
		let n = this.items.get(e);
		if (n === void 0) return;
		let r = t ?? e.value;
		this.options.preProcess != null && (r = this.options.preProcess(r));
		let i = n.masked(r);
		return this.options.postProcess != null && (i = this.options.postProcess(i)), {
			masked: i,
			unmasked: n.unmasked(r),
			completed: n.completed(r)
		};
	}
}, Jn = /* @__PURE__ */ new WeakMap(), Yn = (e, t) => {
	if (e.arg == null || e.instance == null) return;
	let n = "setup" in e.instance.$.type;
	e.arg in e.instance ? e.instance[e.arg] = t : n && console.warn("Maska: please expose `%s` using defineExpose", e.arg);
}, Xn = (e, t) => {
	var n;
	let r = e instanceof HTMLInputElement ? e : e.querySelector("input");
	if (r == null || r?.type === "file") return;
	let i = {};
	if (t.value != null && (i = typeof t.value == "string" ? { mask: t.value } : { ...t.value }), t.arg != null) {
		let e = (e) => {
			Yn(t, t.modifiers.unmasked ? e.unmasked : t.modifiers.completed ? e.completed : e.masked);
		};
		i.onMaska = i.onMaska == null ? e : Array.isArray(i.onMaska) ? [...i.onMaska, e] : [i.onMaska, e];
	}
	Jn.has(r) ? (n = Jn.get(r)) == null || n.update(i) : Jn.set(r, new qn(r, i));
}, Zn = Math.min, Qn = Math.max, $n = Math.round, er = Math.floor, tr = (e) => ({
	x: e,
	y: e
}), nr = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function rr(e, t, n) {
	return Qn(e, Zn(t, n));
}
function ir(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function ar(e) {
	return e.split("-")[0];
}
function or(e) {
	return e.split("-")[1];
}
function sr(e) {
	return e === "x" ? "y" : "x";
}
function cr(e) {
	return e === "y" ? "height" : "width";
}
function lr(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function ur(e) {
	return sr(lr(e));
}
function dr(e, t, n) {
	n === void 0 && (n = !1);
	let r = or(e), i = ur(e), a = cr(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = br(o)), [o, br(o)];
}
function fr(e) {
	let t = br(e);
	return [
		pr(e),
		t,
		pr(t)
	];
}
function pr(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var mr = ["left", "right"], hr = ["right", "left"], gr = ["top", "bottom"], _r = ["bottom", "top"];
function vr(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? hr : mr : t ? mr : hr;
		case "left":
		case "right": return t ? gr : _r;
		default: return [];
	}
}
function yr(e, t, n, r) {
	let i = or(e), a = vr(ar(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(pr)))), a;
}
function br(e) {
	let t = ar(e);
	return nr[t] + e.slice(t.length);
}
function xr(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function Sr(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : xr(e);
}
function Cr(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+core@1.8.0/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function wr(e, t, n) {
	let { reference: r, floating: i } = e, a = lr(t), o = ur(t), s = cr(o), c = ar(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	let m = or(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function Tr(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = ir(t, e), p = Sr(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = Cr(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = Cr(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var Er = 50, Dr = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Tr
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = wr(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < Er && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = wr(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Or = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = ir(e, t) || {};
		if (l == null) return {};
		let d = Sr(u), f = {
			x: n,
			y: r
		}, p = ur(i), m = cr(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = Zn(d[_], T), D = Zn(d[v], T), O = C - h[m] - D, k = C / 2 - h[m] / 2 + w, A = rr(E, k, O), j = !c.arrow && or(i) != null && k !== A && a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0, M = j ? k < E ? k - E : k - O : 0;
		return {
			[p]: f[p] + M,
			data: {
				[p]: A,
				centerOffset: k - A - M,
				...j && { alignmentOffset: M }
			},
			reset: j
		};
	}
}), kr = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = ir(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = ar(r), _ = lr(o), v = ar(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [br(o)] : fr(o)), x = p !== "none";
			!d && x && b.push(...yr(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = dr(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (u !== "alignment" || _ === lr(t) || T.every((e) => lr(e.placement) !== _ || e.overflows[0] > 0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = lr(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement": n = o;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
}, Ar = /*#__PURE__*/ new Set(["left", "top"]);
async function jr(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = ar(n), s = or(n), c = lr(n) === "y", l = Ar.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = ir(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var Mr = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await jr(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, Nr = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = ir(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = lr(i), p = sr(f), m = u[p], h = u[f], g = (e, t) => rr(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
			o && (m = g(p, m)), s && (h = g(f, h));
			let _ = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				..._,
				data: {
					x: _.x - n,
					y: _.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
};
//#endregion
//#region node_modules/.pnpm/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function Pr() {
	return typeof window < "u";
}
function Fr(e) {
	return Rr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ir(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Lr(e) {
	return ((Rr(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Rr(e) {
	return Pr() ? e instanceof Node || e instanceof Ir(e).Node : !1;
}
function zr(e) {
	return Pr() ? e instanceof Element || e instanceof Ir(e).Element : !1;
}
function Br(e) {
	return Pr() ? e instanceof HTMLElement || e instanceof Ir(e).HTMLElement : !1;
}
function Vr(e) {
	return !Pr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ir(e).ShadowRoot;
}
function Hr(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = $r(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Ur(e) {
	return /^(table|td|th)$/.test(Fr(e));
}
function Wr(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Gr = /transform|translate|scale|rotate|perspective|filter/, Kr = /paint|layout|strict|content/, qr = (e) => !!e && e !== "none", Jr;
function Yr(e) {
	let t = zr(e) ? $r(e) : e;
	return qr(t.transform) || qr(t.translate) || qr(t.scale) || qr(t.rotate) || qr(t.perspective) || !Zr() && (qr(t.backdropFilter) || qr(t.filter)) || Gr.test(t.willChange || "") || Kr.test(t.contain || "");
}
function Xr(e) {
	let t = ti(e);
	for (; Br(t) && !Qr(t);) {
		if (Yr(t)) return t;
		if (Wr(t)) return null;
		t = ti(t);
	}
	return null;
}
function Zr() {
	return Jr ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Jr;
}
function Qr(e) {
	return /^(html|body|#document)$/.test(Fr(e));
}
function $r(e) {
	return Ir(e).getComputedStyle(e);
}
function ei(e) {
	return zr(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function ti(e) {
	if (Fr(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Vr(e) && e.host || Lr(e);
	return Vr(t) ? t.host : t;
}
function ni(e) {
	let t = ti(e);
	return Qr(t) ? (e.ownerDocument || e).body : Br(t) && Hr(t) ? t : ni(t);
}
function ri(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = ni(e), i = r === e.ownerDocument?.body, a = Ir(r);
	if (i) {
		let e = ii(a);
		return t.concat(a, a.visualViewport || [], Hr(r) ? r : [], e && n ? ri(e) : []);
	}
	return t.concat(r, ri(r, [], n));
}
function ii(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+dom@1.8.0/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function ai(e) {
	let t = $r(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Br(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = $n(n) !== a || $n(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function oi(e) {
	return zr(e) ? e : e.contextElement;
}
function si(e) {
	let t = oi(e);
	if (!Br(t)) return tr(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = ai(t), o = (a ? $n(n.width) : n.width) / r, s = (a ? $n(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var ci = /*#__PURE__*/ tr(0);
function li(e) {
	let t = Ir(e);
	return !Zr() || !t.visualViewport ? ci : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function ui(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === Ir(e);
}
function di(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = oi(e), o = tr(1);
	t && (r ? zr(r) && (o = si(r)) : o = si(e));
	let s = ui(a, n, r) ? li(a) : tr(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = Ir(a), t = zr(r) ? Ir(r) : r, n = e, i = ii(n);
		for (; i && t !== n;) {
			let e = si(i), t = i.getBoundingClientRect(), r = $r(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Ir(i), i = ii(n);
		}
	}
	return Cr({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function fi(e, t) {
	let n = ei(e).scrollLeft;
	return t ? t.left + n : di(Lr(e)).left + n;
}
function pi(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - fi(e, n),
		y: n.top + t.scrollTop
	};
}
function mi(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = Lr(r), s = t ? Wr(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = tr(1), u = tr(0), d = Br(r);
	if ((d || !a) && ((Fr(r) !== "body" || Hr(o)) && (c = ei(r)), d)) {
		let e = di(r);
		l = si(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? pi(o, c) : tr(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function hi(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function gi(e) {
	let t = ei(e), n = e.ownerDocument.body, r = Qn(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = Qn(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + fi(e), o = -t.scrollTop;
	return $r(n).direction === "rtl" && (a += Qn(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var _i = 25;
function vi(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = Ir(e), a = Lr(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !Zr() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (fi(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= _i && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function yi(e, t) {
	let n = di(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = si(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function bi(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = vi(e, n, t);
	else if (t === "document") r = gi(Lr(e));
	else if (zr(t)) r = yi(t, n);
	else {
		let n = li(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return Cr(r);
}
function xi(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = ri(e, [], !1).filter((e) => zr(e) && Fr(e) !== "body"), i = null, a = $r(e).position === "fixed", o = a ? ti(e) : e;
	for (; zr(o) && !Qr(o);) {
		let e = $r(o), t = Yr(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = ti(o);
	}
	return t.set(e, r), r;
}
function Si(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Wr(t) ? [] : xi(t, this._c) : [].concat(n), r], o = bi(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = bi(t, a[e], i);
		s = Qn(n.top, s), c = Zn(n.right, c), l = Zn(n.bottom, l), u = Qn(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Ci(e) {
	let { width: t, height: n } = ai(e);
	return {
		width: t,
		height: n
	};
}
function wi(e, t, n) {
	let r = Br(t), i = Lr(t), a = n === "fixed", o = di(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = tr(0);
	if ((r || !a) && ((Fr(t) !== "body" || Hr(i)) && (s = ei(t)), r)) {
		let e = di(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = fi(i));
	let l = i && !r && !a ? pi(i, s) : tr(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function Ti(e) {
	return $r(e).position === "static";
}
function Ei(e, t) {
	if (!Br(e) || $r(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Lr(e) === n && (n = n.ownerDocument.body), n;
}
function Di(e, t) {
	let n = Ir(e);
	if (Wr(e)) return n;
	if (!Br(e)) {
		let t = ti(e);
		for (; t && !Qr(t);) {
			if (zr(t) && !Ti(t)) return t;
			t = ti(t);
		}
		return n;
	}
	let r = Ei(e, t);
	for (; r && Ur(r) && Ti(r);) r = Ei(r, t);
	return r && Qr(r) && Ti(r) && !Yr(r) ? n : r || Xr(e) || n;
}
var Oi = async function(e) {
	let t = this.getOffsetParent || Di, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: wi(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function ki(e) {
	return $r(e).direction === "rtl";
}
var Ai = {
	convertOffsetParentRelativeRectToViewportRelativeRect: mi,
	getDocumentElement: Lr,
	getClippingRect: Si,
	getOffsetParent: Di,
	getElementRects: Oi,
	getClientRects: hi,
	getDimensions: Ci,
	getScale: si,
	isElement: zr,
	isRTL: ki
};
function ji(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Mi(e, t, n) {
	let r = null, i, a = Lr(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = er(d), h = er(a.clientWidth - (u + f)), g = er(a.clientHeight - (d + p)), _ = er(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Qn(0, Zn(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!ji(l, e.getBoundingClientRect())) return s();
			if (n !== c) {
				if (!y) return s();
				n ? s(!1, n) : i = setTimeout(() => {
					s(!1, 1e-7);
				}, 1e3);
			}
			y = !1;
		}
		try {
			r = new IntersectionObserver(b, {
				...v,
				root: a.ownerDocument
			});
		} catch {
			r = new IntersectionObserver(b, v);
		}
		r.observe(e);
	}
	let c = Ir(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function Ni(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = oi(e), u = i || a ? [...l ? ri(l) : [], ...t ? ri(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? Mi(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? di(e) : null;
	c && g();
	function g() {
		let t = di(e);
		h && !ji(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Pi = Mr, Fi = Nr, Ii = kr, Li = Or, Ri = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...Ai,
		...i.platform,
		_c: r
	};
	return Dr(e, t, {
		...i,
		platform: a
	});
}, zi = /* @__PURE__ */ ye({
	Vue: () => t,
	Vue2: () => void 0,
	del: () => Ui,
	install: () => Vi,
	isVue2: () => !1,
	isVue3: () => !0,
	set: () => Hi
});
import * as Bi from "vue";
xe(zi, Bi);
function Vi() {}
function Hi(e, t, n) {
	return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function Ui(e, t) {
	if (Array.isArray(e)) {
		e.splice(t, 1);
		return;
	}
	delete e[t];
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+vue@1.1.11_vue@3.5.41_typescript@6.0.3_/node_modules/@floating-ui/vue/dist/floating-ui.vue.mjs
function Wi(e) {
	return typeof e == "object" && !!e && "$el" in e;
}
function Gi(e) {
	if (Wi(e)) {
		let t = e.$el;
		return Rr(t) && Fr(t) === "#comment" ? null : t;
	}
	return e;
}
function Ki(e) {
	return typeof e == "function" ? e() : (0, zi.unref)(e);
}
function qi(e) {
	return {
		name: "arrow",
		options: e,
		fn(t) {
			let n = Gi(Ki(e.element));
			return n == null ? {} : Li({
				element: n,
				padding: e.padding
			}).fn(t);
		}
	};
}
function Ji(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Yi(e, t) {
	let n = Ji(e);
	return Math.round(t * n) / n;
}
function Xi(e, t, n) {
	n === void 0 && (n = {});
	let r = n.whileElementsMounted, i = (0, zi.computed)(() => Ki(n.open) ?? !0), a = (0, zi.computed)(() => Ki(n.middleware)), o = (0, zi.computed)(() => Ki(n.placement) ?? "bottom"), s = (0, zi.computed)(() => Ki(n.strategy) ?? "absolute"), c = (0, zi.computed)(() => Ki(n.transform) ?? !0), l = (0, zi.computed)(() => Gi(e.value)), u = (0, zi.computed)(() => Gi(t.value)), d = (0, zi.ref)(0), f = (0, zi.ref)(0), p = (0, zi.ref)(s.value), m = (0, zi.ref)(o.value), h = (0, zi.shallowRef)({}), g = (0, zi.ref)(!1), _ = (0, zi.computed)(() => {
		let e = {
			position: p.value,
			left: "0",
			top: "0"
		};
		if (!u.value) return e;
		let t = Yi(u.value, d.value), n = Yi(u.value, f.value);
		return c.value ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...Ji(u.value) >= 1.5 && { willChange: "transform" }
		} : {
			position: p.value,
			left: t + "px",
			top: n + "px"
		};
	}), v;
	function y() {
		if (l.value == null || u.value == null) return;
		let e = i.value;
		Ri(l.value, u.value, {
			middleware: a.value,
			placement: o.value,
			strategy: s.value
		}).then((t) => {
			d.value = t.x, f.value = t.y, p.value = t.strategy, m.value = t.placement, h.value = t.middlewareData, g.value = e !== !1;
		});
	}
	function b() {
		typeof v == "function" && (v(), v = void 0);
	}
	function x() {
		if (b(), r === void 0) {
			y();
			return;
		}
		if (l.value != null && u.value != null) {
			v = r(l.value, u.value, y);
			return;
		}
	}
	function S() {
		i.value || (g.value = !1);
	}
	return (0, zi.watch)([
		a,
		o,
		s,
		i
	], y, { flush: "sync" }), (0, zi.watch)([l, u], x, { flush: "sync" }), (0, zi.watch)(i, S, { flush: "sync" }), (0, zi.getCurrentScope)() && (0, zi.onScopeDispose)(b), {
		x: (0, zi.shallowReadonly)(d),
		y: (0, zi.shallowReadonly)(f),
		strategy: (0, zi.shallowReadonly)(p),
		placement: (0, zi.shallowReadonly)(m),
		middlewareData: (0, zi.shallowReadonly)(h),
		isPositioned: (0, zi.shallowReadonly)(g),
		floatingStyles: _,
		update: y
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/constants.js
var Zi = 365.2425, Qi = 6048e5, $i = 864e5, ea = 6e4, ta = 36e5, na = 1e3, ra = 86400;
ra * 7, ra * Zi / 12 * 3;
var ia = Symbol.for("constructDateFrom");
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/constructFrom.js
function aa(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && ia in e ? e[ia](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/toDate.js
function X(e, t) {
	return aa(t || e, e);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/addDays.js
function oa(e, t, n) {
	let r = X(e, n?.in);
	return isNaN(t) ? aa(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/addMonths.js
function sa(e, t, n) {
	let r = X(e, n?.in);
	if (isNaN(t)) return aa(n?.in || e, NaN);
	if (!t) return r;
	let i = r.getDate(), a = aa(n?.in || e, r.getTime());
	return a.setMonth(r.getMonth() + t + 1, 0), i >= a.getDate() ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), i), r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/add.js
function ca(e, t, n) {
	let { years: r = 0, months: i = 0, weeks: a = 0, days: o = 0, hours: s = 0, minutes: c = 0, seconds: l = 0 } = t, u = X(e, n?.in), d = i || r ? sa(u, i + r * 12) : u, f = o || a ? oa(d, o + a * 7) : d, p = (l + (c + s * 60) * 60) * 1e3;
	return aa(n?.in || e, +f + p);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/defaultOptions.js
var la = {};
function ua() {
	return la;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfWeek.js
function da(e, t) {
	let n = ua(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = X(e, t?.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
	return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfISOWeek.js
function fa(e, t) {
	return da(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getISOWeekYear.js
function pa(e, t) {
	let n = X(e, t?.in), r = n.getFullYear(), i = aa(n, 0);
	i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
	let a = fa(i), o = aa(n, 0);
	o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
	let s = fa(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function ma(e) {
	let t = X(e), n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
	return n.setUTCFullYear(t.getFullYear()), e - +n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/normalizeDates.js
function ha(e, ...t) {
	let n = aa.bind(null, e || t.find((e) => typeof e == "object"));
	return t.map(n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfDay.js
function ga(e, t) {
	let n = X(e, t?.in);
	return n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInCalendarDays.js
function _a(e, t, n) {
	let [r, i] = ha(n?.in, e, t), a = ga(r), o = ga(i), s = +a - ma(a), c = +o - ma(o);
	return Math.round((s - c) / $i);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfISOWeekYear.js
function va(e, t) {
	let n = pa(e, t), r = aa(t?.in || e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), fa(r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/addQuarters.js
function ya(e, t, n) {
	return sa(e, t * 3, n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/addYears.js
function ba(e, t, n) {
	return sa(e, t * 12, n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/compareAsc.js
function xa(e, t) {
	let n = X(e) - +X(t);
	return n < 0 ? -1 : n > 0 ? 1 : n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isDate.js
function Sa(e) {
	return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isValid.js
function Ca(e) {
	return !(!Sa(e) && typeof e != "number" || isNaN(+X(e)));
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getQuarter.js
function wa(e, t) {
	let n = X(e, t?.in);
	return Math.trunc(n.getMonth() / 3) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInCalendarYears.js
function Ta(e, t, n) {
	let [r, i] = ha(n?.in, e, t);
	return r.getFullYear() - i.getFullYear();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/getRoundingMethod.js
function Ea(e) {
	return (t) => {
		let n = (e ? Math[e] : Math.trunc)(t);
		return n === 0 ? 0 : n;
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInYears.js
function Da(e, t, n) {
	let [r, i] = ha(n?.in, e, t), a = xa(r, i), o = Math.abs(Ta(r, i));
	r.setFullYear(1584), i.setFullYear(1584);
	let s = a * (o - +(xa(r, i) === -a));
	return s === 0 ? 0 : s;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/normalizeInterval.js
function Oa(e, t) {
	let [n, r] = ha(e, t.start, t.end);
	return {
		start: n,
		end: r
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/eachDayOfInterval.js
function ka(e, t) {
	let { start: n, end: r } = Oa(t?.in, e), i = +n > +r, a = i ? +n : +r, o = i ? r : n;
	o.setHours(0, 0, 0, 0);
	let s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(aa(n, o)), o.setDate(o.getDate() + s), o.setHours(0, 0, 0, 0);
	return i ? c.reverse() : c;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfQuarter.js
function Aa(e, t) {
	let n = X(e, t?.in), r = n.getMonth(), i = r - r % 3;
	return n.setMonth(i, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/eachQuarterOfInterval.js
function ja(e, t) {
	let { start: n, end: r } = Oa(t?.in, e), i = +n > +r, a = i ? +Aa(n) : +Aa(r), o = Aa(i ? r : n), s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(aa(n, o)), o = ya(o, s);
	return i ? c.reverse() : c;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfMonth.js
function Ma(e, t) {
	let n = X(e, t?.in);
	return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/endOfYear.js
function Na(e, t) {
	let n = X(e, t?.in), r = n.getFullYear();
	return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfYear.js
function Pa(e, t) {
	let n = X(e, t?.in);
	return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/endOfWeek.js
function Fa(e, t) {
	let n = ua(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = X(e, t?.in), a = i.getDay(), o = (a < r ? -7 : 0) + 6 - (a - r);
	return i.setDate(i.getDate() + o), i.setHours(23, 59, 59, 999), i;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/endOfQuarter.js
function Ia(e, t) {
	let n = X(e, t?.in), r = n.getMonth(), i = r - r % 3 + 3;
	return n.setMonth(i, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var La = {
	lessThanXSeconds: {
		one: "less than a second",
		other: "less than {{count}} seconds"
	},
	xSeconds: {
		one: "1 second",
		other: "{{count}} seconds"
	},
	halfAMinute: "half a minute",
	lessThanXMinutes: {
		one: "less than a minute",
		other: "less than {{count}} minutes"
	},
	xMinutes: {
		one: "1 minute",
		other: "{{count}} minutes"
	},
	aboutXHours: {
		one: "about 1 hour",
		other: "about {{count}} hours"
	},
	xHours: {
		one: "1 hour",
		other: "{{count}} hours"
	},
	xDays: {
		one: "1 day",
		other: "{{count}} days"
	},
	aboutXWeeks: {
		one: "about 1 week",
		other: "about {{count}} weeks"
	},
	xWeeks: {
		one: "1 week",
		other: "{{count}} weeks"
	},
	aboutXMonths: {
		one: "about 1 month",
		other: "about {{count}} months"
	},
	xMonths: {
		one: "1 month",
		other: "{{count}} months"
	},
	aboutXYears: {
		one: "about 1 year",
		other: "about {{count}} years"
	},
	xYears: {
		one: "1 year",
		other: "{{count}} years"
	},
	overXYears: {
		one: "over 1 year",
		other: "over {{count}} years"
	},
	almostXYears: {
		one: "almost 1 year",
		other: "almost {{count}} years"
	}
}, Ra = (e, t, n) => {
	let r, i = La[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function za(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
var Ba = {
	date: za({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: za({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: za({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, Va = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, Ha = (e, t, n, r) => Va[e];
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function Ua(e) {
	return (t, n) => {
		let r = n?.context ? String(n.context) : "standalone", i;
		if (r === "formatting" && e.formattingValues) {
			let t = e.defaultFormattingWidth || e.defaultWidth, r = n?.width ? String(n.width) : t;
			i = e.formattingValues[r] || e.formattingValues[t];
		} else {
			let t = e.defaultWidth, r = n?.width ? String(n.width) : e.defaultWidth;
			i = e.values[r] || e.values[t];
		}
		let a = e.argumentCallback ? e.argumentCallback(t) : t;
		return i[a];
	};
}
var Wa = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: Ua({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: Ua({
		values: {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"Q1",
				"Q2",
				"Q3",
				"Q4"
			],
			wide: [
				"1st quarter",
				"2nd quarter",
				"3rd quarter",
				"4th quarter"
			]
		},
		defaultWidth: "wide",
		argumentCallback: (e) => e - 1
	}),
	month: Ua({
		values: {
			narrow: [
				"J",
				"F",
				"M",
				"A",
				"M",
				"J",
				"J",
				"A",
				"S",
				"O",
				"N",
				"D"
			],
			abbreviated: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec"
			],
			wide: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			]
		},
		defaultWidth: "wide"
	}),
	day: Ua({
		values: {
			narrow: [
				"S",
				"M",
				"T",
				"W",
				"T",
				"F",
				"S"
			],
			short: [
				"Su",
				"Mo",
				"Tu",
				"We",
				"Th",
				"Fr",
				"Sa"
			],
			abbreviated: [
				"Sun",
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat"
			],
			wide: [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			]
		},
		defaultWidth: "wide"
	}),
	dayPeriod: Ua({
		values: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			}
		},
		defaultWidth: "wide",
		formattingValues: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			}
		},
		defaultFormattingWidth: "wide"
	})
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildMatchFn.js
function Ga(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? qa(s, (e) => e.test(o)) : Ka(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function Ka(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function qa(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function Ja(e) {
	return (t, n = {}) => {
		let r = t.match(e.matchPattern);
		if (!r) return null;
		let i = r[0], a = t.match(e.parsePattern);
		if (!a) return null;
		let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
		o = n.valueCallback ? n.valueCallback(o) : o;
		let s = t.slice(i.length);
		return {
			value: o,
			rest: s
		};
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/en-US.js
var Ya = {
	code: "en-US",
	formatDistance: Ra,
	formatLong: Ba,
	formatRelative: Ha,
	localize: Wa,
	match: {
		ordinalNumber: Ja({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: Ga({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: "any"
		}),
		quarter: Ga({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^q[1234]/i,
				wide: /^[1234](th|st|nd|rd)? quarter/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (e) => e + 1
		}),
		month: Ga({
			matchPatterns: {
				narrow: /^[jfmasond]/i,
				abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
				wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^j/i,
					/^f/i,
					/^m/i,
					/^a/i,
					/^m/i,
					/^j/i,
					/^j/i,
					/^a/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				],
				any: [
					/^ja/i,
					/^f/i,
					/^mar/i,
					/^ap/i,
					/^may/i,
					/^jun/i,
					/^jul/i,
					/^au/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: Ga({
			matchPatterns: {
				narrow: /^[smtwf]/i,
				short: /^(su|mo|tu|we|th|fr|sa)/i,
				abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
				wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^s/i,
					/^m/i,
					/^t/i,
					/^w/i,
					/^t/i,
					/^f/i,
					/^s/i
				],
				any: [
					/^su/i,
					/^m/i,
					/^tu/i,
					/^w/i,
					/^th/i,
					/^f/i,
					/^sa/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: Ga({
			matchPatterns: {
				narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
				any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mi/i,
				noon: /^no/i,
				morning: /morning/i,
				afternoon: /afternoon/i,
				evening: /evening/i,
				night: /night/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getDayOfYear.js
function Xa(e, t) {
	let n = X(e, t?.in);
	return _a(n, Pa(n)) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getISOWeek.js
function Za(e, t) {
	let n = X(e, t?.in), r = fa(n) - +va(n);
	return Math.round(r / Qi) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getWeekYear.js
function Qa(e, t) {
	let n = X(e, t?.in), r = n.getFullYear(), i = ua(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = aa(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = da(o, t), c = aa(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = da(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfWeekYear.js
function $a(e, t) {
	let n = ua(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = Qa(e, t), a = aa(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), da(a, t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getWeek.js
function eo(e, t) {
	let n = X(e, t?.in), r = da(n, t) - +$a(n, t);
	return Math.round(r / Qi) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/addLeadingZeros.js
function to(e, t) {
	return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/format/lightFormatters.js
var no = {
	y(e, t) {
		let n = e.getFullYear(), r = n > 0 ? n : 1 - n;
		return to(t === "yy" ? r % 100 : r, t.length);
	},
	M(e, t) {
		let n = e.getMonth();
		return t === "M" ? String(n + 1) : to(n + 1, 2);
	},
	d(e, t) {
		return to(e.getDate(), t.length);
	},
	a(e, t) {
		let n = e.getHours() / 12 >= 1 ? "pm" : "am";
		switch (t) {
			case "a":
			case "aa": return n.toUpperCase();
			case "aaa": return n;
			case "aaaaa": return n[0];
			default: return n === "am" ? "a.m." : "p.m.";
		}
	},
	h(e, t) {
		return to(e.getHours() % 12 || 12, t.length);
	},
	H(e, t) {
		return to(e.getHours(), t.length);
	},
	m(e, t) {
		return to(e.getMinutes(), t.length);
	},
	s(e, t) {
		return to(e.getSeconds(), t.length);
	},
	S(e, t) {
		let n = t.length, r = e.getMilliseconds();
		return to(Math.trunc(r * 10 ** (n - 3)), t.length);
	}
}, ro = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
}, io = {
	G: function(e, t, n) {
		let r = +(e.getFullYear() > 0);
		switch (t) {
			case "G":
			case "GG":
			case "GGG": return n.era(r, { width: "abbreviated" });
			case "GGGGG": return n.era(r, { width: "narrow" });
			default: return n.era(r, { width: "wide" });
		}
	},
	y: function(e, t, n) {
		if (t === "yo") {
			let t = e.getFullYear(), r = t > 0 ? t : 1 - t;
			return n.ordinalNumber(r, { unit: "year" });
		}
		return no.y(e, t);
	},
	Y: function(e, t, n, r) {
		let i = Qa(e, r), a = i > 0 ? i : 1 - i;
		return t === "YY" ? to(a % 100, 2) : t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : to(a, t.length);
	},
	R: function(e, t) {
		return to(pa(e), t.length);
	},
	u: function(e, t) {
		return to(e.getFullYear(), t.length);
	},
	Q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "Q": return String(r);
			case "QQ": return to(r, 2);
			case "Qo": return n.ordinalNumber(r, { unit: "quarter" });
			case "QQQ": return n.quarter(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "QQQQQ": return n.quarter(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.quarter(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "q": return String(r);
			case "qq": return to(r, 2);
			case "qo": return n.ordinalNumber(r, { unit: "quarter" });
			case "qqq": return n.quarter(r, {
				width: "abbreviated",
				context: "standalone"
			});
			case "qqqqq": return n.quarter(r, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.quarter(r, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	M: function(e, t, n) {
		let r = e.getMonth();
		switch (t) {
			case "M":
			case "MM": return no.M(e, t);
			case "Mo": return n.ordinalNumber(r + 1, { unit: "month" });
			case "MMM": return n.month(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "MMMMM": return n.month(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.month(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	L: function(e, t, n) {
		let r = e.getMonth();
		switch (t) {
			case "L": return String(r + 1);
			case "LL": return to(r + 1, 2);
			case "Lo": return n.ordinalNumber(r + 1, { unit: "month" });
			case "LLL": return n.month(r, {
				width: "abbreviated",
				context: "standalone"
			});
			case "LLLLL": return n.month(r, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.month(r, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	w: function(e, t, n, r) {
		let i = eo(e, r);
		return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : to(i, t.length);
	},
	I: function(e, t, n) {
		let r = Za(e);
		return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : to(r, t.length);
	},
	d: function(e, t, n) {
		return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : no.d(e, t);
	},
	D: function(e, t, n) {
		let r = Xa(e);
		return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : to(r, t.length);
	},
	E: function(e, t, n) {
		let r = e.getDay();
		switch (t) {
			case "E":
			case "EE":
			case "EEE": return n.day(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "EEEEE": return n.day(r, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return n.day(r, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	e: function(e, t, n, r) {
		let i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
		switch (t) {
			case "e": return String(a);
			case "ee": return to(a, 2);
			case "eo": return n.ordinalNumber(a, { unit: "day" });
			case "eee": return n.day(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "eeeee": return n.day(i, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return n.day(i, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	c: function(e, t, n, r) {
		let i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
		switch (t) {
			case "c": return String(a);
			case "cc": return to(a, t.length);
			case "co": return n.ordinalNumber(a, { unit: "day" });
			case "ccc": return n.day(i, {
				width: "abbreviated",
				context: "standalone"
			});
			case "ccccc": return n.day(i, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return n.day(i, {
				width: "short",
				context: "standalone"
			});
			default: return n.day(i, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	i: function(e, t, n) {
		let r = e.getDay(), i = r === 0 ? 7 : r;
		switch (t) {
			case "i": return String(i);
			case "ii": return to(i, t.length);
			case "io": return n.ordinalNumber(i, { unit: "day" });
			case "iii": return n.day(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "iiiii": return n.day(r, {
				width: "narrow",
				context: "formatting"
			});
			case "iiiiii": return n.day(r, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	a: function(e, t, n) {
		let r = e.getHours() / 12 >= 1 ? "pm" : "am";
		switch (t) {
			case "a":
			case "aa": return n.dayPeriod(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "aaa": return n.dayPeriod(r, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "aaaaa": return n.dayPeriod(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	b: function(e, t, n) {
		let r = e.getHours(), i;
		switch (i = r === 12 ? ro.noon : r === 0 ? ro.midnight : r / 12 >= 1 ? "pm" : "am", t) {
			case "b":
			case "bb": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "bbb": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "bbbbb": return n.dayPeriod(i, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	B: function(e, t, n) {
		let r = e.getHours(), i;
		switch (i = r >= 17 ? ro.evening : r >= 12 ? ro.afternoon : r >= 4 ? ro.morning : ro.night, t) {
			case "B":
			case "BB":
			case "BBB": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "BBBBB": return n.dayPeriod(i, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	h: function(e, t, n) {
		if (t === "ho") {
			let t = e.getHours() % 12;
			return t === 0 && (t = 12), n.ordinalNumber(t, { unit: "hour" });
		}
		return no.h(e, t);
	},
	H: function(e, t, n) {
		return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : no.H(e, t);
	},
	K: function(e, t, n) {
		let r = e.getHours() % 12;
		return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : to(r, t.length);
	},
	k: function(e, t, n) {
		let r = e.getHours();
		return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : to(r, t.length);
	},
	m: function(e, t, n) {
		return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : no.m(e, t);
	},
	s: function(e, t, n) {
		return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : no.s(e, t);
	},
	S: function(e, t) {
		return no.S(e, t);
	},
	X: function(e, t, n) {
		let r = e.getTimezoneOffset();
		if (r === 0) return "Z";
		switch (t) {
			case "X": return oo(r);
			case "XXXX":
			case "XX": return so(r);
			default: return so(r, ":");
		}
	},
	x: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "x": return oo(r);
			case "xxxx":
			case "xx": return so(r);
			default: return so(r, ":");
		}
	},
	O: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + ao(r, ":");
			default: return "GMT" + so(r, ":");
		}
	},
	z: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + ao(r, ":");
			default: return "GMT" + so(r, ":");
		}
	},
	t: function(e, t, n) {
		return to(Math.trunc(e / 1e3), t.length);
	},
	T: function(e, t, n) {
		return to(+e, t.length);
	}
};
function ao(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
	return a === 0 ? n + String(i) : n + String(i) + t + to(a, 2);
}
function oo(e, t) {
	return e % 60 == 0 ? (e > 0 ? "-" : "+") + to(Math.abs(e) / 60, 2) : so(e, t);
}
function so(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = to(Math.trunc(r / 60), 2), a = to(r % 60, 2);
	return n + i + t + a;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/format/longFormatters.js
var co = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, lo = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, uo = {
	p: lo,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return co(e, t);
		let a;
		switch (r) {
			case "P":
				a = t.dateTime({ width: "short" });
				break;
			case "PP":
				a = t.dateTime({ width: "medium" });
				break;
			case "PPP":
				a = t.dateTime({ width: "long" });
				break;
			default: a = t.dateTime({ width: "full" });
		}
		return a.replace("{{date}}", co(r, t)).replace("{{time}}", lo(i, t));
	}
}, fo = /^D+$/, po = /^Y+$/, mo = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function ho(e) {
	return fo.test(e);
}
function go(e) {
	return po.test(e);
}
function _o(e, t, n) {
	let r = vo(e, t, n);
	if (console.warn(r), mo.includes(e)) throw RangeError(r);
}
function vo(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/format.js
var yo = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, bo = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, xo = /^'([^]*?)'?$/, So = /''/g, Co = /[a-zA-Z]/;
function wo(e, t, n) {
	let r = ua(), i = n?.locale ?? r.locale ?? Ya, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = X(e, n?.in);
	if (!Ca(s)) throw RangeError("Invalid time value");
	let c = t.match(bo).map((e) => {
		let t = e[0];
		if (t === "p" || t === "P") {
			let n = uo[t];
			return n(e, i.formatLong);
		}
		return e;
	}).join("").match(yo).map((e) => {
		if (e === "''") return {
			isToken: !1,
			value: "'"
		};
		let t = e[0];
		if (t === "'") return {
			isToken: !1,
			value: To(e)
		};
		if (io[t]) return {
			isToken: !0,
			value: e
		};
		if (t.match(Co)) throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
		return {
			isToken: !1,
			value: e
		};
	});
	i.localize.preprocessor && (c = i.localize.preprocessor(s, c));
	let l = {
		firstWeekContainsDate: a,
		weekStartsOn: o,
		locale: i
	};
	return c.map((r) => {
		if (!r.isToken) return r.value;
		let a = r.value;
		(!n?.useAdditionalWeekYearTokens && go(a) || !n?.useAdditionalDayOfYearTokens && ho(a)) && _o(a, t, String(e));
		let o = io[a[0]];
		return o(s, a, i.localize, l);
	}).join("");
}
function To(e) {
	let t = e.match(xo);
	return t ? t[1].replace(So, "'") : e;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getDay.js
function Eo(e, t) {
	return X(e, t?.in).getDay();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getDaysInMonth.js
function Do(e, t) {
	let n = X(e, t?.in), r = n.getFullYear(), i = n.getMonth(), a = aa(n, 0);
	return a.setFullYear(r, i + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getDefaultOptions.js
function Oo() {
	return Object.assign({}, ua());
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getHours.js
function ko(e, t) {
	return X(e, t?.in).getHours();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getISODay.js
function Ao(e, t) {
	let n = X(e, t?.in).getDay();
	return n === 0 ? 7 : n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getMinutes.js
function jo(e, t) {
	return X(e, t?.in).getMinutes();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getMonth.js
function Mo(e, t) {
	return X(e, t?.in).getMonth();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getSeconds.js
function No(e) {
	return X(e).getSeconds();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getYear.js
function Z(e, t) {
	return X(e, t?.in).getFullYear();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isAfter.js
function Po(e, t) {
	return +X(e) > +X(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isBefore.js
function Fo(e, t) {
	return +X(e) < +X(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isEqual.js
function Io(e, t) {
	return +X(e) == +X(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/transpose.js
function Lo(e, t) {
	let n = Ro(t) ? new t(0) : aa(t, 0);
	return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), n;
}
function Ro(e) {
	return typeof e == "function" && e.prototype?.constructor === e;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/Setter.js
var zo = 10, Bo = class {
	subPriority = 0;
	validate(e, t) {
		return !0;
	}
}, Vo = class extends Bo {
	constructor(e, t, n, r, i) {
		super(), this.value = e, this.validateValue = t, this.setValue = n, this.priority = r, i && (this.subPriority = i);
	}
	validate(e, t) {
		return this.validateValue(e, this.value, t);
	}
	set(e, t, n) {
		return this.setValue(e, t, this.value, n);
	}
}, Ho = class extends Bo {
	priority = zo;
	subPriority = -1;
	constructor(e, t) {
		super(), this.context = e || ((e) => aa(t, e));
	}
	set(e, t) {
		return t.timestampIsSet ? e : aa(e, Lo(e, this.context));
	}
}, Uo = class {
	run(e, t, n, r) {
		let i = this.parse(e, t, n, r);
		return i ? {
			setter: new Vo(i.value, this.validate, this.set, this.priority, this.subPriority),
			rest: i.rest
		} : null;
	}
	validate(e, t, n) {
		return !0;
	}
}, Wo = class extends Uo {
	priority = 140;
	parse(e, t, n) {
		switch (t) {
			case "G":
			case "GG":
			case "GGG": return n.era(e, { width: "abbreviated" }) || n.era(e, { width: "narrow" });
			case "GGGGG": return n.era(e, { width: "narrow" });
			default: return n.era(e, { width: "wide" }) || n.era(e, { width: "abbreviated" }) || n.era(e, { width: "narrow" });
		}
	}
	set(e, t, n) {
		return t.era = n, e.setFullYear(n, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"R",
		"u",
		"t",
		"T"
	];
}, Go = {
	month: /^(1[0-2]|0?\d)/,
	date: /^(3[0-1]|[0-2]?\d)/,
	dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
	week: /^(5[0-3]|[0-4]?\d)/,
	hour23h: /^(2[0-3]|[0-1]?\d)/,
	hour24h: /^(2[0-4]|[0-1]?\d)/,
	hour11h: /^(1[0-1]|0?\d)/,
	hour12h: /^(1[0-2]|0?\d)/,
	minute: /^[0-5]?\d/,
	second: /^[0-5]?\d/,
	singleDigit: /^\d/,
	twoDigits: /^\d{1,2}/,
	threeDigits: /^\d{1,3}/,
	fourDigits: /^\d{1,4}/,
	anyDigitsSigned: /^-?\d+/,
	singleDigitSigned: /^-?\d/,
	twoDigitsSigned: /^-?\d{1,2}/,
	threeDigitsSigned: /^-?\d{1,3}/,
	fourDigitsSigned: /^-?\d{1,4}/
}, Ko = {
	basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
	basic: /^([+-])(\d{2})(\d{2})|Z/,
	basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
	extended: /^([+-])(\d{2}):(\d{2})|Z/,
	extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/utils.js
function qo(e, t) {
	return e && {
		value: t(e.value),
		rest: e.rest
	};
}
function Jo(e, t) {
	let n = t.match(e);
	return n ? {
		value: parseInt(n[0], 10),
		rest: t.slice(n[0].length)
	} : null;
}
function Yo(e, t) {
	let n = t.match(e);
	if (!n) return null;
	if (n[0] === "Z") return {
		value: 0,
		rest: t.slice(1)
	};
	let r = n[1] === "+" ? 1 : -1, i = n[2] ? parseInt(n[2], 10) : 0, a = n[3] ? parseInt(n[3], 10) : 0, o = n[5] ? parseInt(n[5], 10) : 0;
	return {
		value: r * (i * ta + a * ea + o * na),
		rest: t.slice(n[0].length)
	};
}
function Xo(e) {
	return Jo(Go.anyDigitsSigned, e);
}
function Zo(e, t) {
	switch (e) {
		case 1: return Jo(Go.singleDigit, t);
		case 2: return Jo(Go.twoDigits, t);
		case 3: return Jo(Go.threeDigits, t);
		case 4: return Jo(Go.fourDigits, t);
		default: return Jo(RegExp("^\\d{1," + e + "}"), t);
	}
}
function Qo(e, t) {
	switch (e) {
		case 1: return Jo(Go.singleDigitSigned, t);
		case 2: return Jo(Go.twoDigitsSigned, t);
		case 3: return Jo(Go.threeDigitsSigned, t);
		case 4: return Jo(Go.fourDigitsSigned, t);
		default: return Jo(RegExp("^-?\\d{1," + e + "}"), t);
	}
}
function $o(e) {
	switch (e) {
		case "morning": return 4;
		case "evening": return 17;
		case "pm":
		case "noon":
		case "afternoon": return 12;
		default: return 0;
	}
}
function es(e, t) {
	let n = t > 0, r = n ? t : 1 - t, i;
	if (r <= 50) i = e || 100;
	else {
		let t = r + 50, n = Math.trunc(t / 100) * 100, a = e >= t % 100;
		i = e + n - (a ? 100 : 0);
	}
	return n ? i : 1 - i;
}
function ts(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/YearParser.js
var ns = class extends Uo {
	priority = 130;
	incompatibleTokens = [
		"Y",
		"R",
		"u",
		"w",
		"I",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
	parse(e, t, n) {
		let r = (e) => ({
			year: e,
			isTwoDigitYear: t === "yy"
		});
		switch (t) {
			case "y": return qo(Zo(4, e), r);
			case "yo": return qo(n.ordinalNumber(e, { unit: "year" }), r);
			default: return qo(Zo(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n) {
		let r = e.getFullYear();
		if (n.isTwoDigitYear) {
			let t = es(n.year, r);
			return e.setFullYear(t, 0, 1), e.setHours(0, 0, 0, 0), e;
		}
		let i = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
}, rs = class extends Uo {
	priority = 130;
	parse(e, t, n) {
		let r = (e) => ({
			year: e,
			isTwoDigitYear: t === "YY"
		});
		switch (t) {
			case "Y": return qo(Zo(4, e), r);
			case "Yo": return qo(n.ordinalNumber(e, { unit: "year" }), r);
			default: return qo(Zo(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n, r) {
		let i = Qa(e, r);
		if (n.isTwoDigitYear) {
			let t = es(n.year, i);
			return e.setFullYear(t, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), da(e, r);
		}
		let a = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(a, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), da(e, r);
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"Q",
		"q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"i",
		"t",
		"T"
	];
}, is = class extends Uo {
	priority = 130;
	parse(e, t) {
		return Qo(t === "R" ? 4 : t.length, e);
	}
	set(e, t, n) {
		let r = aa(e, 0);
		return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), fa(r);
	}
	incompatibleTokens = [
		"G",
		"y",
		"Y",
		"u",
		"Q",
		"q",
		"M",
		"L",
		"w",
		"d",
		"D",
		"e",
		"c",
		"t",
		"T"
	];
}, as = class extends Uo {
	priority = 130;
	parse(e, t) {
		return Qo(t === "u" ? 4 : t.length, e);
	}
	set(e, t, n) {
		return e.setFullYear(n, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"G",
		"y",
		"Y",
		"R",
		"w",
		"I",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, os = class extends Uo {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "Q":
			case "QQ": return Zo(t.length, e);
			case "Qo": return n.ordinalNumber(e, { unit: "quarter" });
			case "QQQ": return n.quarter(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.quarter(e, {
				width: "narrow",
				context: "formatting"
			});
			case "QQQQQ": return n.quarter(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.quarter(e, {
				width: "wide",
				context: "formatting"
			}) || n.quarter(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.quarter(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 4;
	}
	set(e, t, n) {
		return e.setMonth((n - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"M",
		"L",
		"w",
		"I",
		"d",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, ss = class extends Uo {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "q":
			case "qq": return Zo(t.length, e);
			case "qo": return n.ordinalNumber(e, { unit: "quarter" });
			case "qqq": return n.quarter(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.quarter(e, {
				width: "narrow",
				context: "standalone"
			});
			case "qqqqq": return n.quarter(e, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.quarter(e, {
				width: "wide",
				context: "standalone"
			}) || n.quarter(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.quarter(e, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 4;
	}
	set(e, t, n) {
		return e.setMonth((n - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"Q",
		"M",
		"L",
		"w",
		"I",
		"d",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, cs = class extends Uo {
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"L",
		"w",
		"I",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
	priority = 110;
	parse(e, t, n) {
		let r = (e) => e - 1;
		switch (t) {
			case "M": return qo(Jo(Go.month, e), r);
			case "MM": return qo(Zo(2, e), r);
			case "Mo": return qo(n.ordinalNumber(e, { unit: "month" }), r);
			case "MMM": return n.month(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.month(e, {
				width: "narrow",
				context: "formatting"
			});
			case "MMMMM": return n.month(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.month(e, {
				width: "wide",
				context: "formatting"
			}) || n.month(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.month(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 11;
	}
	set(e, t, n) {
		return e.setMonth(n, 1), e.setHours(0, 0, 0, 0), e;
	}
}, ls = class extends Uo {
	priority = 110;
	parse(e, t, n) {
		let r = (e) => e - 1;
		switch (t) {
			case "L": return qo(Jo(Go.month, e), r);
			case "LL": return qo(Zo(2, e), r);
			case "Lo": return qo(n.ordinalNumber(e, { unit: "month" }), r);
			case "LLL": return n.month(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.month(e, {
				width: "narrow",
				context: "standalone"
			});
			case "LLLLL": return n.month(e, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.month(e, {
				width: "wide",
				context: "standalone"
			}) || n.month(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.month(e, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 11;
	}
	set(e, t, n) {
		return e.setMonth(n, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"M",
		"w",
		"I",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/setWeek.js
function us(e, t, n) {
	let r = X(e, n?.in), i = eo(r, n) - t;
	return r.setDate(r.getDate() - i * 7), X(r, n?.in);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js
var ds = class extends Uo {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "w": return Jo(Go.week, e);
			case "wo": return n.ordinalNumber(e, { unit: "week" });
			default: return Zo(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n, r) {
		return da(us(e, n, r), r);
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"i",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/setISOWeek.js
function fs(e, t, n) {
	let r = X(e, n?.in), i = Za(r, n) - t;
	return r.setDate(r.getDate() - i * 7), r;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js
var ps = class extends Uo {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "I": return Jo(Go.week, e);
			case "Io": return n.ordinalNumber(e, { unit: "week" });
			default: return Zo(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n) {
		return fa(fs(e, n));
	}
	incompatibleTokens = [
		"y",
		"Y",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"w",
		"d",
		"D",
		"e",
		"c",
		"t",
		"T"
	];
}, ms = [
	31,
	28,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
], hs = [
	31,
	29,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
], gs = class extends Uo {
	priority = 90;
	subPriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "d": return Jo(Go.date, e);
			case "do": return n.ordinalNumber(e, { unit: "date" });
			default: return Zo(t.length, e);
		}
	}
	validate(e, t) {
		let n = ts(e.getFullYear()), r = e.getMonth();
		return n ? t >= 1 && t <= hs[r] : t >= 1 && t <= ms[r];
	}
	set(e, t, n) {
		return e.setDate(n), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"w",
		"I",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, _s = class extends Uo {
	priority = 90;
	subpriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "D":
			case "DD": return Jo(Go.dayOfYear, e);
			case "Do": return n.ordinalNumber(e, { unit: "date" });
			default: return Zo(t.length, e);
		}
	}
	validate(e, t) {
		return ts(e.getFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
	}
	set(e, t, n) {
		return e.setMonth(0, n), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"M",
		"L",
		"w",
		"I",
		"d",
		"E",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/setDay.js
function vs(e, t, n) {
	let r = ua(), i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, a = X(e, n?.in), o = a.getDay(), s = (t % 7 + 7) % 7, c = 7 - i;
	return oa(a, t < 0 || t > 6 ? t - (o + c) % 7 : (s + c) % 7 - (o + c) % 7, n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/DayParser.js
var ys = class extends Uo {
	priority = 90;
	parse(e, t, n) {
		switch (t) {
			case "E":
			case "EE":
			case "EEE": return n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEE": return n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.day(e, {
				width: "wide",
				context: "formatting"
			}) || n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 6;
	}
	set(e, t, n, r) {
		return e = vs(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, bs = class extends Uo {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "e":
			case "ee": return qo(Zo(t.length, e), i);
			case "eo": return qo(n.ordinalNumber(e, { unit: "day" }), i);
			case "eee": return n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeee": return n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.day(e, {
				width: "wide",
				context: "formatting"
			}) || n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 6;
	}
	set(e, t, n, r) {
		return e = vs(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"E",
		"i",
		"c",
		"t",
		"T"
	];
}, xs = class extends Uo {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "c":
			case "cc": return qo(Zo(t.length, e), i);
			case "co": return qo(n.ordinalNumber(e, { unit: "day" }), i);
			case "ccc": return n.day(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.day(e, {
				width: "short",
				context: "standalone"
			}) || n.day(e, {
				width: "narrow",
				context: "standalone"
			});
			case "ccccc": return n.day(e, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return n.day(e, {
				width: "short",
				context: "standalone"
			}) || n.day(e, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.day(e, {
				width: "wide",
				context: "standalone"
			}) || n.day(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.day(e, {
				width: "short",
				context: "standalone"
			}) || n.day(e, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 6;
	}
	set(e, t, n, r) {
		return e = vs(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"E",
		"i",
		"e",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/setISODay.js
function Ss(e, t, n) {
	let r = X(e, n?.in);
	return oa(r, t - Ao(r, n), n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/ISODayParser.js
var Cs = class extends Uo {
	priority = 90;
	parse(e, t, n) {
		let r = (e) => e === 0 ? 7 : e;
		switch (t) {
			case "i":
			case "ii": return Zo(t.length, e);
			case "io": return n.ordinalNumber(e, { unit: "day" });
			case "iii": return qo(n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiii": return qo(n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiiii": return qo(n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			default: return qo(n.day(e, {
				width: "wide",
				context: "formatting"
			}) || n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 7;
	}
	set(e, t, n) {
		return e = Ss(e, n), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"y",
		"Y",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"w",
		"d",
		"D",
		"E",
		"e",
		"c",
		"t",
		"T"
	];
}, ws = class extends Uo {
	priority = 80;
	parse(e, t, n) {
		switch (t) {
			case "a":
			case "aa":
			case "aaa": return n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			case "aaaaa": return n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(e, {
				width: "wide",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(e, t, n) {
		return e.setHours($o(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"b",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, Ts = class extends Uo {
	priority = 80;
	parse(e, t, n) {
		switch (t) {
			case "b":
			case "bb":
			case "bbb": return n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			case "bbbbb": return n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(e, {
				width: "wide",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(e, t, n) {
		return e.setHours($o(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, Es = class extends Uo {
	priority = 80;
	parse(e, t, n) {
		switch (t) {
			case "B":
			case "BB":
			case "BBB": return n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			case "BBBBB": return n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(e, {
				width: "wide",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(e, t, n) {
		return e.setHours($o(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"t",
		"T"
	];
}, Ds = class extends Uo {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "h": return Jo(Go.hour12h, e);
			case "ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return Zo(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 12;
	}
	set(e, t, n) {
		let r = e.getHours() >= 12;
		return r && n < 12 ? e.setHours(n + 12, 0, 0, 0) : !r && n === 12 ? e.setHours(0, 0, 0, 0) : e.setHours(n, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"H",
		"K",
		"k",
		"t",
		"T"
	];
}, Os = class extends Uo {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "H": return Jo(Go.hour23h, e);
			case "Ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return Zo(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 23;
	}
	set(e, t, n) {
		return e.setHours(n, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"h",
		"K",
		"k",
		"t",
		"T"
	];
}, ks = class extends Uo {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "K": return Jo(Go.hour11h, e);
			case "Ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return Zo(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 11;
	}
	set(e, t, n) {
		return e.getHours() >= 12 && n < 12 ? e.setHours(n + 12, 0, 0, 0) : e.setHours(n, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"h",
		"H",
		"k",
		"t",
		"T"
	];
}, As = class extends Uo {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "k": return Jo(Go.hour24h, e);
			case "ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return Zo(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 24;
	}
	set(e, t, n) {
		let r = n <= 24 ? n % 24 : n;
		return e.setHours(r, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"h",
		"H",
		"K",
		"t",
		"T"
	];
}, js = class extends Uo {
	priority = 60;
	parse(e, t, n) {
		switch (t) {
			case "m": return Jo(Go.minute, e);
			case "mo": return n.ordinalNumber(e, { unit: "minute" });
			default: return Zo(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setMinutes(n, 0, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, Ms = class extends Uo {
	priority = 50;
	parse(e, t, n) {
		switch (t) {
			case "s": return Jo(Go.second, e);
			case "so": return n.ordinalNumber(e, { unit: "second" });
			default: return Zo(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setSeconds(n, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, Ns = class extends Uo {
	priority = 30;
	parse(e, t) {
		return qo(Zo(t.length, e), (e) => Math.trunc(e * 10 ** (-t.length + 3)));
	}
	set(e, t, n) {
		return e.setMilliseconds(n), e;
	}
	incompatibleTokens = ["t", "T"];
}, Ps = class extends Uo {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "X": return Yo(Ko.basicOptionalMinutes, e);
			case "XX": return Yo(Ko.basic, e);
			case "XXXX": return Yo(Ko.basicOptionalSeconds, e);
			case "XXXXX": return Yo(Ko.extendedOptionalSeconds, e);
			default: return Yo(Ko.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : aa(e, e.getTime() - ma(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"x"
	];
}, Fs = class extends Uo {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "x": return Yo(Ko.basicOptionalMinutes, e);
			case "xx": return Yo(Ko.basic, e);
			case "xxxx": return Yo(Ko.basicOptionalSeconds, e);
			case "xxxxx": return Yo(Ko.extendedOptionalSeconds, e);
			default: return Yo(Ko.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : aa(e, e.getTime() - ma(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"X"
	];
}, Is = class extends Uo {
	priority = 40;
	parse(e) {
		return Xo(e);
	}
	set(e, t, n) {
		return [aa(e, n * 1e3), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, Ls = class extends Uo {
	priority = 20;
	parse(e) {
		return Xo(e);
	}
	set(e, t, n) {
		return [aa(e, n), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, Rs = {
	G: new Wo(),
	y: new ns(),
	Y: new rs(),
	R: new is(),
	u: new as(),
	Q: new os(),
	q: new ss(),
	M: new cs(),
	L: new ls(),
	w: new ds(),
	I: new ps(),
	d: new gs(),
	D: new _s(),
	E: new ys(),
	e: new bs(),
	c: new xs(),
	i: new Cs(),
	a: new ws(),
	b: new Ts(),
	B: new Es(),
	h: new Ds(),
	H: new Os(),
	K: new ks(),
	k: new As(),
	m: new js(),
	s: new Ms(),
	S: new Ns(),
	X: new Ps(),
	x: new Fs(),
	t: new Is(),
	T: new Ls()
}, zs = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Bs = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Vs = /^'([^]*?)'?$/, Hs = /''/g, Us = /\S/, Ws = /[a-zA-Z]/;
function Gs(e, t, n, r) {
	let i = () => aa(r?.in || n, NaN), a = Oo(), o = r?.locale ?? a.locale ?? Ya, s = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, c = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0;
	if (!t) return e ? i() : X(n, r?.in);
	let l = {
		firstWeekContainsDate: s,
		weekStartsOn: c,
		locale: o
	}, u = [new Ho(r?.in, n)], d = t.match(Bs).map((e) => {
		let t = e[0];
		if (t in uo) {
			let n = uo[t];
			return n(e, o.formatLong);
		}
		return e;
	}).join("").match(zs), f = [];
	for (let n of d) {
		!r?.useAdditionalWeekYearTokens && go(n) && _o(n, t, e), !r?.useAdditionalDayOfYearTokens && ho(n) && _o(n, t, e);
		let a = n[0], s = Rs[a];
		if (s) {
			let { incompatibleTokens: t } = s;
			if (Array.isArray(t)) {
				let e = f.find((e) => t.includes(e.token) || e.token === a);
				if (e) throw RangeError(`The format string mustn't contain \`${e.fullToken}\` and \`${n}\` at the same time`);
			} else if (s.incompatibleTokens === "*" && f.length > 0) throw RangeError(`The format string mustn't contain \`${n}\` and any other token at the same time`);
			f.push({
				token: a,
				fullToken: n
			});
			let r = s.run(e, n, o.match, l);
			if (!r) return i();
			u.push(r.setter), e = r.rest;
		} else {
			if (a.match(Ws)) throw RangeError("Format string contains an unescaped latin alphabet character `" + a + "`");
			if (n === "''" ? n = "'" : a === "'" && (n = Ks(n)), e.indexOf(n) === 0) e = e.slice(n.length);
			else return i();
		}
	}
	if (e.length > 0 && Us.test(e)) return i();
	let p = u.map((e) => e.priority).sort((e, t) => t - e).filter((e, t, n) => n.indexOf(e) === t).map((e) => u.filter((t) => t.priority === e).sort((e, t) => t.subPriority - e.subPriority)).map((e) => e[0]), m = X(n, r?.in);
	if (isNaN(+m)) return i();
	let h = {};
	for (let e of p) {
		if (!e.validate(m, l)) return i();
		let t = e.set(m, h, l);
		Array.isArray(t) ? (m = t[0], Object.assign(h, t[1])) : m = t;
	}
	return m;
}
function Ks(e) {
	return e.match(Vs)[1].replace(Hs, "'");
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isSameQuarter.js
function qs(e, t, n) {
	let [r, i] = ha(n?.in, e, t);
	return +Aa(r) == +Aa(i);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/subDays.js
function Js(e, t, n) {
	return oa(e, -t, n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parseISO.js
function Ys(e, t) {
	let n = () => aa(t?.in, NaN), r = t?.additionalDigits ?? 2, i = ec(e), a;
	if (i.date) {
		let e = tc(i.date, r);
		a = nc(e.restDateString, e.year);
	}
	if (!a || isNaN(+a)) return n();
	let o = +a, s = 0, c;
	if (i.time && (s = ic(i.time), isNaN(s))) return n();
	if (i.timezone) {
		if (c = oc(i.timezone), isNaN(c)) return n();
	} else {
		let e = new Date(o + s), n = X(0, t?.in);
		return n.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()), n.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()), n;
	}
	return X(o + s + c, t?.in);
}
var Xs = {
	dateTimeDelimiter: /[T ]/,
	timeZoneDelimiter: /[Z ]/i,
	timezone: /([Z+-].*)$/
}, Zs = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, Qs = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, $s = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function ec(e) {
	let t = {}, n = e.split(Xs.dateTimeDelimiter), r;
	if (n.length > 2) return t;
	if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], Xs.timeZoneDelimiter.test(t.date) && (t.date = e.split(Xs.timeZoneDelimiter)[0], r = e.substr(t.date.length, e.length))), r) {
		let e = Xs.timezone.exec(r);
		e ? (t.time = r.replace(e[1], ""), t.timezone = e[1]) : t.time = r;
	}
	return t;
}
function tc(e, t) {
	let n = RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"), r = e.match(n);
	if (!r) return {
		year: NaN,
		restDateString: ""
	};
	let i = r[1] ? parseInt(r[1]) : null, a = r[2] ? parseInt(r[2]) : null;
	return {
		year: a === null ? i : a * 100,
		restDateString: e.slice((r[1] || r[2]).length)
	};
}
function nc(e, t) {
	if (t === null) return /* @__PURE__ */ new Date(NaN);
	let n = e.match(Zs);
	if (!n) return /* @__PURE__ */ new Date(NaN);
	let r = !!n[4], i = rc(n[1]), a = rc(n[2]) - 1, o = rc(n[3]), s = rc(n[4]), c = rc(n[5]) - 1;
	if (r) return fc(t, s, c) ? sc(t, s, c) : /* @__PURE__ */ new Date(NaN);
	{
		let e = /* @__PURE__ */ new Date(0);
		return !uc(t, a, o) || !dc(t, i) ? /* @__PURE__ */ new Date(NaN) : (e.setUTCFullYear(t, a, Math.max(i, o)), e);
	}
}
function rc(e) {
	return e ? parseInt(e) : 1;
}
function ic(e) {
	let t = e.match(Qs);
	if (!t) return NaN;
	let n = ac(t[1]), r = ac(t[2]), i = ac(t[3]);
	return pc(n, r, i) ? n * ta + r * ea + i * 1e3 : NaN;
}
function ac(e) {
	return e && parseFloat(e.replace(",", ".")) || 0;
}
function oc(e) {
	if (e === "Z") return 0;
	let t = e.match($s);
	if (!t) return 0;
	let n = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), i = t[3] && parseInt(t[3]) || 0;
	return mc(r, i) ? n * (r * ta + i * ea) : NaN;
}
function sc(e, t, n) {
	let r = /* @__PURE__ */ new Date(0);
	r.setUTCFullYear(e, 0, 4);
	let i = r.getUTCDay() || 7, a = (t - 1) * 7 + n + 1 - i;
	return r.setUTCDate(r.getUTCDate() + a), r;
}
var cc = [
	31,
	null,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
];
function lc(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
function uc(e, t, n) {
	return t >= 0 && t <= 11 && n >= 1 && n <= (cc[t] || (lc(e) ? 29 : 28));
}
function dc(e, t) {
	return t >= 1 && t <= (lc(e) ? 366 : 365);
}
function fc(e, t, n) {
	return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function pc(e, t, n) {
	return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function mc(e, t) {
	return t >= 0 && t <= 59;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/roundToNearestMinutes.js
function hc(e, t) {
	let n = t?.nearestTo ?? 1;
	if (n < 1 || n > 30) return aa(e, NaN);
	let r = X(e, t?.in), i = r.getSeconds() / 60, a = r.getMilliseconds() / 1e3 / 60, o = r.getMinutes() + i + a, s = Ea(t?.roundingMethod ?? "round")(o / n) * n;
	return r.setMinutes(s, 0, 0), r;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/setMonth.js
function gc(e, t, n) {
	let r = X(e, n?.in), i = r.getFullYear(), a = r.getDate(), o = aa(n?.in || e, 0);
	o.setFullYear(i, t, 15), o.setHours(0, 0, 0, 0);
	let s = Do(o);
	return r.setMonth(t, Math.min(a, s)), r;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/set.js
function Q(e, t, n) {
	let r = X(e, n?.in);
	return isNaN(+r) ? aa(n?.in || e, NaN) : (t.year != null && r.setFullYear(t.year), t.month != null && (r = gc(r, t.month)), t.date != null && r.setDate(t.date), t.hours != null && r.setHours(t.hours), t.minutes != null && r.setMinutes(t.minutes), t.seconds != null && r.setSeconds(t.seconds), t.milliseconds != null && r.setMilliseconds(t.milliseconds), r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/setMilliseconds.js
function _c(e, t, n) {
	let r = X(e, n?.in);
	return r.setMilliseconds(t), r;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/setSeconds.js
function vc(e, t, n) {
	let r = X(e, n?.in);
	return r.setSeconds(t), r;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/setYear.js
function yc(e, t, n) {
	let r = X(e, n?.in);
	return isNaN(+r) ? aa(n?.in || e, NaN) : (r.setFullYear(t), r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/subMonths.js
function bc(e, t, n) {
	return sa(e, -t, n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/sub.js
function xc(e, t, n) {
	let { years: r = 0, months: i = 0, weeks: a = 0, days: o = 0, hours: s = 0, minutes: c = 0, seconds: l = 0 } = t, u = Js(bc(e, i + r * 12, n), o + a * 7, n), d = (l + (c + s * 60) * 60) * 1e3;
	return aa(n?.in || e, +u - d);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/subYears.js
function Sc(e, t, n) {
	return ba(e, -t, n);
}
//#endregion
//#region node_modules/.pnpm/@date-fns+tz@1.5.0/node_modules/@date-fns/tz/tzName/index.js
function Cc(e, t, n = "long") {
	return new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		timeZone: e,
		timeZoneName: n
	}).format(t).split(/\s/g).slice(2).join(" ");
}
//#endregion
//#region node_modules/.pnpm/@date-fns+tz@1.5.0/node_modules/@date-fns/tz/tzOffset/index.js
var wc = {}, Tc = {};
function Ec(e, t) {
	try {
		let n = (wc[e] ||= new Intl.DateTimeFormat("en-US", {
			timeZone: e,
			timeZoneName: "longOffset"
		}).format)(t).split("GMT")[1];
		return n in Tc ? Tc[n] : Oc(n, n.split(":"));
	} catch {
		if (e in Tc) return Tc[e];
		let t = e?.match(Dc);
		return t ? Oc(e, t.slice(1)) : NaN;
	}
}
var Dc = /([+-]\d\d):?(\d\d)?/;
function Oc(e, t) {
	let n = +(t[0] || 0), r = +(t[1] || 0), i = (t[2] || 0) / 60;
	return Tc[e] = n * 60 + r > 0 ? n * 60 + r + i : n * 60 - r - i;
}
//#endregion
//#region node_modules/.pnpm/@date-fns+tz@1.5.0/node_modules/@date-fns/tz/date/mini.js
var kc = class e extends Date {
	constructor(...e) {
		super(), e.length > 1 && typeof e[e.length - 1] == "string" && (this.timeZone = e.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Ec(this.timeZone, this)) ? this.setTime(NaN) : e.length ? typeof e[0] == "number" && (e.length === 1 || e.length === 2 && typeof e[1] != "number") ? this.setTime(e[0]) : typeof e[0] == "string" ? this.setTime(+new Date(e[0])) : e[0] instanceof Date ? this.setTime(+e[0]) : (this.setTime(+new Date(...e)), Nc(this, e)) : this.setTime(Date.now());
	}
	static tz(t, ...n) {
		return n.length ? new e(...n, t) : new e(Date.now(), t);
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	getTimezoneOffset() {
		let e = -Ec(this.timeZone, this);
		return e > 0 ? Math.floor(e) : Math.ceil(e);
	}
	setTime(e) {
		return Date.prototype.setTime.apply(this, arguments), jc(this), +this;
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
}, Ac = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
	if (!Ac.test(e)) return;
	let t = e.replace(Ac, "$1UTC");
	kc.prototype[t] && (e.startsWith("get") ? kc.prototype[e] = function() {
		return this.internal[t]();
	} : (kc.prototype[e] = function() {
		return Date.prototype[t].apply(this.internal, arguments), Mc(this), +this;
	}, kc.prototype[t] = function() {
		return Date.prototype[t].apply(this, arguments), jc(this), +this;
	}));
});
function jc(e) {
	e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Ec(e.timeZone, e) * 60));
}
function Mc(e) {
	Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), Nc(e);
}
function Nc(e, t) {
	let n = Array.isArray(t) ? Pc(t) : +e.internal, r = Ec(e.timeZone, e), i = r > 0 ? Math.floor(r) : Math.ceil(r), a = /* @__PURE__ */ new Date(+e);
	a.setUTCHours(a.getUTCHours() - 1);
	let o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), s = -(/* @__PURE__ */ new Date(+a)).getTimezoneOffset(), c = o - s, l = o;
	if (c && o !== i && Date.prototype.getHours.apply(e) !== (Array.isArray(t) ? t[3] || 0 : e.internal.getUTCHours())) {
		let t = /* @__PURE__ */ new Date(+e), n = o - i;
		n && t.setUTCMinutes(t.getUTCMinutes() + n);
		let r = Ec(e.timeZone, t);
		(r > 0 ? Math.floor(r) : Math.ceil(r)) === i && (l = s);
	}
	let u = l - i;
	u && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + u);
	let d = /* @__PURE__ */ new Date(+e);
	d.setUTCSeconds(0);
	let f = o > 0 ? d.getSeconds() : (d.getSeconds() - 60) % 60, p = Math.round(-(Ec(e.timeZone, e) * 60)) % 60;
	(p || f) && Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + p + f);
	let m = Ec(e.timeZone, e), h = m > 0 ? Math.floor(m) : Math.ceil(m), g = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - h, _ = h !== i, v = g - u, y = h - i, b = n - h * 60 * 1e3, x = y > 0 && Fc(e) - n === y * 60 * 1e3 && Fc(e, b) !== n;
	if (_ && v && !x) {
		Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + v);
		let t = Ec(e.timeZone, e), n = h - (t > 0 ? Math.floor(t) : Math.ceil(t));
		n && v < 0 && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + n);
	}
	jc(e);
	let S = (t ? n : n + p * 1e3) - +e.internal;
	S && Math.abs(S) < 18e5 && (Date.prototype.setTime.call(e, +e + S), jc(e));
}
function Pc(e) {
	return Date.UTC(e[0], e.length > 1 ? e[1] : 0, e.length > 2 ? e[2] : 1, ...e.slice(3));
}
function Fc(e, t) {
	let n = new Date(t ?? +e);
	return n.setUTCSeconds(n.getUTCSeconds() - Math.round(-Ec(e.timeZone, n) * 60)), +n;
}
//#endregion
//#region node_modules/.pnpm/@date-fns+tz@1.5.0/node_modules/@date-fns/tz/date/index.js
var Ic = class e extends kc {
	static tz(t, ...n) {
		return n.length ? new e(...n, t) : new e(Date.now(), t);
	}
	toISOString() {
		let [e, t, n] = this.tzComponents(), r = `${e}${t}:${n}`;
		return this.internal.toISOString().slice(0, -1) + r;
	}
	toString() {
		return `${this.toDateString()} ${this.toTimeString()}`;
	}
	toDateString() {
		let [e, t, n, r] = this.internal.toUTCString().split(" ");
		return `${e?.slice(0, -1)} ${n} ${t} ${r}`;
	}
	toTimeString() {
		let e = this.internal.toUTCString().split(" ")[4], [t, n, r] = this.tzComponents();
		return `${e} GMT${t}${n}${r} (${Cc(this.timeZone, this)})`;
	}
	toLocaleString(e, t) {
		return Date.prototype.toLocaleString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	toLocaleDateString(e, t) {
		return Date.prototype.toLocaleDateString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	toLocaleTimeString(e, t) {
		return Date.prototype.toLocaleTimeString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	tzComponents() {
		let e = this.getTimezoneOffset();
		return [
			e > 0 ? "-" : "+",
			String(Math.floor(Math.abs(e) / 60)).padStart(2, "0"),
			String(Math.abs(e) % 60).padStart(2, "0")
		];
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
};
//#endregion
//#region node_modules/.pnpm/@vuepic+vue-datepicker@12.1.0_vue@3.5.41_typescript@6.0.3_/node_modules/@vuepic/vue-datepicker/dist/vue-datepicker.js
function Lc() {
	return g("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [
		g("path", { d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" }),
		g("path", { d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }),
		g("path", { d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }),
		g("path", { d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" })
	]);
}
function Rc() {
	return g("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [g("path", { d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z" }), g("path", { d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" })]);
}
function zc() {
	return g("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [g("path", { d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" })]);
}
function Bc() {
	return g("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [g("path", { d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z" })]);
}
function Vc() {
	return g("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [g("path", { d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z" }), g("path", { d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" })]);
}
function Hc() {
	return g("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [g("path", { d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" })]);
}
function Uc() {
	return g("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [g("path", { d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" })]);
}
var Wc = Symbol("ContextKey"), Gc = (e, t) => {
	let { setTimeModelValue: n } = Pl(), r = Nl(e), i = F(null), o = N({
		menuFocused: !1,
		shiftKeyInMenu: !1,
		isInputFocused: !1,
		isTextInputDate: !1,
		arrowNavigationLevel: 0
	}), s = r.getDate(/* @__PURE__ */ new Date()), c = F(""), l = F([{
		month: Mo(s),
		year: Z(s)
	}]), u = N({
		hours: 0,
		minutes: 0,
		seconds: 0
	});
	n(u, null, s, r.range.value.enabled);
	let d = a({
		get: () => i.value,
		set: (e) => {
			i.value = e;
		}
	}), f = a(() => (e) => l.value[e] ? l.value[e].month : 0), p = a(() => (e) => l.value[e] ? l.value[e].year : 0);
	M(Wc, {
		rootProps: e,
		defaults: r,
		modelValue: d,
		state: P(o),
		rootEmit: t,
		calendars: l,
		month: f,
		year: p,
		time: u,
		today: s,
		inputValue: c,
		setState: (e, t) => {
			o[e] = t;
		},
		updateTime: () => {
			n(u, d.value, s, r.range.value.enabled);
		},
		getDate: r.getDate
	});
}, $ = () => {
	let e = _(Wc);
	if (!e) throw Error("Can't use context");
	return e;
}, Kc = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(Kc || {}), qc = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(qc || {}), Jc = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(Jc || {}), Yc = [
	"timestamp",
	"date",
	"iso"
], Xc = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(Xc || {}), Zc = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(Zc || {}), Qc = /* @__PURE__ */ ((e) => (e.MONTH_AND_YEAR = "MM-yyyy", e.YEAR = "yyyy", e.DATE = "dd-MM-yyyy", e))(Qc || {}), $c = /* @__PURE__ */ ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e))($c || {}), el = () => {
	let { rootProps: e, state: t } = $(), n = a(() => t.arrowNavigationLevel), r = F(-1), i = F(-1);
	K(n, (e, t) => {
		v(e === 0 && t > 0);
	});
	let o = F([]), s = F(/* @__PURE__ */ new Map()), c = () => {
		let e = Array.from(document.querySelectorAll(`[data-dp-action-element="${n.value}"]`)), t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
		for (let n of e) {
			let e = n.getBoundingClientRect(), i = e.top, a = e.left;
			t.has(i) || t.set(i, []), t.get(i).push(n), r.set(n, {
				row: i,
				col: a
			});
		}
		o.value = Array.from(t.entries()).sort((e, t) => e[0] - t[0]).map(([e, t]) => l(t, r)), s.value = r;
	}, l = (e, t) => e.sort((e, n) => {
		let r = t.get(e), i = t.get(n);
		return r.col - i.col;
	}), u = (e, t) => {
		n.value === 0 && (r.value = e, i.value = t);
	}, d = (e) => {
		if (![
			Zc.arrowUp,
			Zc.arrowDown,
			Zc.arrowLeft,
			Zc.arrowRight
		].includes(e.key)) return;
		c(), e.preventDefault();
		let t = document.activeElement;
		if (!t?.hasAttribute("data-dp-action-element")) return;
		let n = -1, r = -1;
		for (let e = 0; e < o.value.length; e++) {
			let i = o.value[e].indexOf(t);
			if (i !== -1) {
				n = e, r = i;
				break;
			}
		}
		if (n !== -1) switch (e.key) {
			case Zc.arrowLeft: return f(n, r);
			case Zc.arrowRight: return p(n, r);
			case Zc.arrowUp: return m(n, r);
			case Zc.arrowDown: return h(n, r);
			default: return;
		}
	}, f = (e, t) => {
		if (t > 0) {
			let n = o.value[e][t - 1];
			u(e, t - 1), n && n.focus();
		}
	}, p = (e, t) => {
		if (t < o.value[e].length - 1) {
			let n = o.value[e][t + 1];
			u(e, t + 1), n && n.focus();
		}
	}, m = (e, t) => {
		if (e > 0) {
			let n = o.value[e - 1], r = Math.min(t, n.length - 1), i = n[r];
			u(e - 1, r), i && i.focus();
		}
	}, h = (e, t) => {
		if (e < o.value.length - 1) {
			let n = o.value[e + 1], r = Math.min(t, n.length - 1), i = n[r];
			u(e + 1, r), i && i.focus();
		}
	}, g = () => {
		S().then(() => {
			c();
			let e = o.value[r.value]?.[i.value];
			e && _(e);
		});
	}, _ = (e) => {
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				e.focus({ preventScroll: !0 });
			});
		});
	}, v = (e) => {
		if (e) return g();
		let t = document.querySelector(`[data-dp-element-active="${n.value}"]`);
		if (t && !e) _(t);
		else {
			let e = document.querySelector(`[data-dp-action-element="${n.value}"]`);
			e && _(e);
		}
	};
	O(() => {
		e.arrowNavigation && (v(!1), document.addEventListener("keydown", d));
	}), A(() => {
		e.arrowNavigation && document.removeEventListener("keydown", d);
	});
}, tl = () => {
	let { checkPartialRangeValue: e, checkRangeEnabled: t, isValidDate: n } = il(), { convertType: r, errorMapper: i } = Pl(), { getDate: a, rootEmit: o, state: s, rootProps: c, inputValue: l, defaults: { textInput: u, range: d, multiDates: f, timeConfig: p, formats: m }, modelValue: h, updateTime: g } = $(), { setTime: _, getWeekFromDate: v } = Fl(), { formatSelectedDate: y, formatForTextInput: b } = Ll();
	K(h, (e, t) => {
		o("internal-model-change", h.value), JSON.stringify(t ?? {}) !== JSON.stringify(e ?? {}) && g();
	}, { deep: !0 }), K(d, (e, t) => {
		e.enabled !== t.enabled && (h.value = null);
	}), K(() => m.value.input, () => {
		R();
	});
	let x = (e) => e ? c.modelType ? B(e) : {
		hours: ko(e),
		minutes: jo(e),
		seconds: p.value.enableSeconds ? No(e) : 0
	} : null, S = (e) => c.modelType ? B(e) : {
		month: Mo(e),
		year: Z(e)
	}, C = (n) => Array.isArray(n) ? f.value.enabled ? n.map((e) => w(e, yc(a(), e))) : t(() => [yc(a(), n[0]), n[1] ? yc(a(), n[1]) : e(d.value.partialRange)], d.value.enabled) : yc(a(), +n), w = (e, t) => (typeof e == "string" || typeof e == "number") && c.modelType ? z(e) : t, T = (e) => Array.isArray(e) ? [w(e[0], _(e[0])), w(e[1], _(e[1]))] : w(e, _(e)), E = (n) => {
		let r = Q(a(), { date: 1 });
		return Array.isArray(n) ? f.value.enabled ? n.map((e) => w(e, Q(r, {
			month: +e.month,
			year: +e.year
		}))) : t(() => [w(n[0], Q(r, {
			month: +n[0].month,
			year: +n[0].year
		})), w(n[1], n[1] ? Q(r, {
			month: +n[1].month,
			year: +n[1].year
		}) : e(d.value.partialRange))], d.value.enabled) : w(n, Q(r, {
			month: +n.month,
			year: +n.year
		}));
	}, D = (e) => {
		if (Array.isArray(e)) return e.map((e) => z(e));
		throw Error(i.dateArr("multi-dates"));
	}, O = (e) => {
		if (Array.isArray(e) && d.value.enabled) {
			let t = e[0], n = e[1];
			return [a(Array.isArray(t) ? t[0] : null), Array.isArray(n) && n.length ? a(n[0]) : null];
		}
		return a(e[0]);
	}, k = (n) => c.modelAuto ? Array.isArray(n) ? [z(n[0]), z(n[1])] : c.autoApply ? [z(n)] : [z(n), null] : Array.isArray(n) ? t(() => n[1] ? [z(n[0]), n[1] ? z(n[1]) : e(d.value.partialRange)] : [z(n[0])], d.value.enabled) : z(n), A = () => {
		Array.isArray(h.value) && d.value.enabled && h.value.length === 1 && h.value.push(e(d.value.partialRange));
	}, j = () => {
		let t = h.value;
		return [B(t[0]), t[1] ? B(t[1]) : e(d.value.partialRange)];
	}, M = () => Array.isArray(h.value) ? h.value[1] ? j() : B(r(h.value[0])) : [], N = () => (h.value || []).map((e) => B(e)), P = (e = !1) => (e || A(), c.modelAuto ? M() : f.value.enabled ? N() : Array.isArray(h.value) ? t(() => j(), d.value.enabled) : B(r(h.value))), F = (e) => !e || Array.isArray(e) && !e.length ? null : c.timePicker ? T(r(e)) : c.monthPicker ? E(r(e)) : c.yearPicker ? C(r(e)) : f.value.enabled ? D(r(e)) : c.weekPicker ? O(r(e)) : k(r(e)), I = (e) => {
		if (s.isTextInputDate) return;
		let t = F(e);
		n(r(t)) ? (h.value = r(t), R()) : (h.value = null, l.value = "");
	}, L = () => h.value ? f.value.enabled ? h.value.map((e) => y(e)).join("; ") : u.value.enabled ? b() : y(h.value) : "", R = () => {
		l.value = L();
	}, z = (e) => c.modelType ? Yc.includes(c.modelType) ? a(e) : c.modelType === "format" && typeof m.value.input == "string" ? Gs(e, m.value.input, a(), { locale: c.locale }) : Gs(e, c.modelType, a(), { locale: c.locale }) : a(e), B = (e) => e ? c.modelType ? c.modelType === "timestamp" ? +e : c.modelType === "iso" ? e.toISOString() : c.modelType === "format" && typeof m.value.input == "string" ? y(e) : y(e, c.modelType) : e : null, V = (e) => {
		o("update:model-value", e);
	}, ee = (e) => Array.isArray(h.value) ? f.value.enabled ? h.value.map((t) => e(t)) : [e(h.value[0]), h.value[1] ? e(h.value[1]) : null] : e(r(h.value)), H = () => {
		if (Array.isArray(h.value)) {
			let e = v(h.value[0], c.weekStart), t = h.value[1] ? v(h.value[1], c.weekStart) : [];
			return [e.map((e) => a(e)), t.map((e) => a(e))];
		}
		return v(h.value, c.weekStart).map((e) => a(e));
	}, U = (e) => V(r(ee(e))), W = () => o("update:model-value", H());
	return {
		checkBeforeEmit: () => h.value ? d.value.enabled ? d.value.partialRange ? h.value.length >= 1 : h.value.length === 2 : !!h.value : !1,
		parseExternalModelValue: I,
		formatInputValue: R,
		emitModelValue: () => (R(), c.monthPicker ? U(S) : c.timePicker ? U(x) : c.yearPicker ? U(Z) : c.weekPicker ? W() : V(P()))
	};
}, nl = () => {
	let { defaults: { transitions: e } } = $(), t = a(() => (t) => e.value ? t ? e.value.open : e.value.close : ""), n = a(() => (t) => e.value ? t ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
	return {
		transitionName: t,
		showTransition: !!e.value,
		menuTransition: n
	};
}, rl = (e) => {
	let { today: t, time: n, modelValue: r, defaults: { range: i } } = $(), { setTimeModelValue: a } = Pl();
	K(i, (e, o) => {
		e.enabled !== o.enabled && a(n, r.value, t, i.value.enabled);
	}, { deep: !0 }), K(r, (t, n) => {
		e && JSON.stringify(t ?? {}) !== JSON.stringify(n ?? {}) && e();
	}, { deep: !0 });
}, il = () => {
	let { defaults: { safeDates: e, range: t, multiDates: n, filters: r, timeConfig: i }, rootProps: o, getDate: s } = $(), { getMapKeyType: c, getMapDate: l, errorMapper: u, convertType: d } = Pl(), { isDateBefore: f, isDateAfter: p, isDateEqual: m, resetDate: h, getDaysInBetween: g, setTimeValue: _, getTimeObj: v, setTime: y } = Fl(), b = (t) => e.value.disabledDates ? typeof e.value.disabledDates == "function" ? e.value.disabledDates(s(t)) : !!l(t, e.value.disabledDates) : !1, x = (t) => e.value.maxDate ? o.yearPicker ? Z(t) > Z(e.value.maxDate) : p(t, e.value.maxDate) : !1, S = (t) => e.value.minDate ? o.yearPicker ? Z(t) < Z(e.value.minDate) : f(t, e.value.minDate) : !1, C = (e) => {
		if (!e) return !1;
		let t = x(e), n = S(e), i = b(e), a = r.value.months.map((e) => +e).includes(Mo(e)), s = r.value.weekDays?.length ? r.value.weekDays.some((t) => +t === Eo(e)) : !1, c = O(e), l = Z(e), u = l < +o.yearRange[0] || l > +o.yearRange[1];
		return !(t || n || i || a || u || s || c);
	}, w = (t, n) => f(...G(e.value.minDate, t, n)) || m(...G(e.value.minDate, t, n)), T = (t, n) => p(...G(e.value.maxDate, t, n)) || m(...G(e.value.maxDate, t, n)), E = (t, n, r) => {
		let i = !1;
		return e.value.maxDate && r && T(t, n) && (i = !0), e.value.minDate && !r && w(t, n) && (i = !0), i;
	}, D = (t, n, r, i) => {
		let a = !1;
		return i && (e.value.minDate || e.value.maxDate) ? e.value.minDate && e.value.maxDate ? a = E(t, n, r) : (e.value.minDate && w(t, n) || e.value.maxDate && T(t, n)) && (a = !0) : a = !0, a;
	}, O = (t) => Array.isArray(e.value.allowedDates) && !e.value.allowedDates.length ? !0 : e.value.allowedDates ? !l(t, e.value.allowedDates, c(o.monthPicker, o.yearPicker)) : !1, k = (e) => !C(e), A = (e) => !t.value.noDisabledRange || !ka({
		start: e[0],
		end: e[1]
	}).some((e) => k(e)), j = (e) => {
		if (e) {
			let t = Z(e);
			return t >= +o.yearRange[0] && t <= o.yearRange[1];
		}
		return !0;
	}, M = (e, n) => !!(Array.isArray(e) && e[n] && (t.value.maxRange || t.value.minRange) && j(e[n])), N = (e, n, r = 0) => {
		if (M(n, r) && j(e)) {
			let i = _a(e, n[r]), a = g(n[r], e), o = a.length === 1 ? 0 : a.filter((e) => k(e)).length, s = Math.abs(i) - (t.value.minMaxRawRange ? 0 : o);
			if (t.value.minRange && t.value.maxRange) return s >= +t.value.minRange && s <= +t.value.maxRange;
			if (t.value.minRange) return s >= +t.value.minRange;
			if (t.value.maxRange) return s <= +t.value.maxRange;
		}
		return !0;
	}, P = () => !i.value.enableTimePicker || o.monthPicker || o.yearPicker || i.value.ignoreTimeValidation, F = (e) => Array.isArray(e) ? [e[0] ? _(e[0]) : null, e[1] ? _(e[1]) : null] : _(e), I = (e, t, n) => t ? e.find((e) => +e.hours === ko(t) && e.minutes === "*" || +e.minutes === jo(t) && +e.hours === ko(t)) && n : !1, L = (e, t, n) => {
		let [r, i] = e, [a, o] = t;
		return !I(r, a, n) && !I(i, o, n) && n;
	}, R = (e, t) => {
		let n = Array.isArray(t) ? t : [t];
		return Array.isArray(o.disabledTimes) ? Array.isArray(o.disabledTimes[0]) ? L(o.disabledTimes, n, e) : !n.some((t) => I(o.disabledTimes, t, e)) : e;
	}, z = (e, t) => {
		let n = Array.isArray(t) ? [v(t[0]), t[1] ? v(t[1]) : void 0] : v(t), r = !o.disabledTimes(n);
		return e && r;
	}, B = (e, t) => o.disabledTimes ? Array.isArray(o.disabledTimes) ? R(t, e) : z(t, e) : t, V = (t) => {
		let n = !0;
		if (!t || P()) return !0;
		let r = !e.value.minDate && !e.value.maxDate ? F(t) : t;
		return (o.maxTime || e.value.maxDate) && (n = ne(o.maxTime, e.value.maxDate, "max", d(r), n)), (o.minTime || e.value.minDate) && (n = ne(o.minTime, e.value.minDate, "min", d(r), n)), B(t, n);
	}, ee = (t) => {
		if (!o.monthPicker) return !0;
		let n = !0, r = s(h(t));
		if (e.value.minDate && e.value.maxDate) {
			let t = s(h(e.value.minDate)), n = s(h(e.value.maxDate));
			return p(r, t) && f(r, n) || m(r, t) || m(r, n);
		}
		if (e.value.minDate) {
			let t = s(h(e.value.minDate));
			n = p(r, t) || m(r, t);
		}
		if (e.value.maxDate) {
			let t = s(h(e.value.maxDate));
			n = f(r, t) || m(r, t);
		}
		return n;
	}, H = a(() => (e) => !i.value.enableTimePicker || i.value.ignoreTimeValidation ? !0 : V(e)), U = a(() => (e) => o.monthPicker ? Array.isArray(e) && (t.value.enabled || n.value.enabled) ? !e.filter((e) => !ee(e)).length : ee(e) : !0), W = (t, n, r) => {
		if (!n || r && !e.value.maxDate || !r && !e.value.minDate) return !1;
		let i = r ? sa(t, 1) : bc(t, 1), a = [Mo(i), Z(i)];
		return r ? !T(...a) : !w(...a);
	}, G = (e, t, n) => [Q(s(e), { date: 1 }), Q(s(), {
		month: t,
		year: n,
		date: 1
	})], te = (e, t, n, r) => {
		if (!e) return !0;
		if (r) {
			let r = n === "max" ? Fo(e, t) : Po(e, t), i = {
				seconds: 0,
				milliseconds: 0
			};
			return r || Io(Q(e, i), Q(t, i));
		}
		return n === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
	}, ne = (e, t, n, r, i) => {
		if (Array.isArray(r)) {
			let a = K(e, r[0], t), o = K(e, r[1], t);
			return te(r[0], a, n, !!t) && te(r[1], o, n, !!t) && i;
		}
		let a = K(e, r, t);
		return te(r, a, n, !!t) && i;
	}, K = (e, t, n) => e ? y(e, t) : s(n ?? t);
	return {
		isDisabled: k,
		validateDate: C,
		validateMonthYearInRange: D,
		isDateRangeAllowed: A,
		checkMinMaxRange: N,
		isValidTime: V,
		validateMonthYear: W,
		validateMinDate: w,
		validateMaxDate: T,
		isValidDate: (e) => Array.isArray(e) ? Ca(e[0]) && (!e[1] || Ca(e[1])) : e ? Ca(e) : !1,
		checkPartialRangeValue: (e) => {
			if (e) return null;
			throw Error(u.prop("partial-range"));
		},
		checkRangeEnabled: (e, t) => {
			if (t) return e();
			throw Error(u.prop("range"));
		},
		checkMinMaxValue: (e, t, n) => {
			let r = n != null, i = t != null;
			if (!r && !i) return !1;
			let a = +n, o = +t;
			return r && i ? +e > a || +e < o : r ? +e > a : i ? +e < o : !1;
		},
		isTimeValid: H,
		isMonthValid: U
	};
}, al = (e) => {
	let { rootEmit: t, rootProps: n, defaults: { timeConfig: r, flow: i } } = $(), o = F(0), s = N({
		[qc.timePicker]: !r.value.enableTimePicker || n.timePicker || n.monthPicker,
		[qc.calendar]: !1,
		[qc.header]: !1
	}), c = a(() => n.monthPicker || n.timePicker), l = (e) => {
		if (i.value?.steps?.length) {
			if (!e && c.value) return p();
			s[e] = !0, Object.keys(s).filter((e) => !s[e]).length || p();
		}
	}, u = () => {
		i.value?.steps?.length && o.value !== -1 && (o.value += 1, t("flow-step", o.value), p()), i.value?.steps?.length === o.value && S().then(() => d());
	}, d = () => {
		o.value = -1;
	}, f = (t, n, ...r) => {
		i.value?.steps[o.value] === t && e.value && e.value[n]?.(...r);
	}, p = (e = 0) => {
		e && (o.value += e), f(Jc.month, "toggleMonthPicker", !0), f(Jc.year, "toggleYearPicker", !0), f(Jc.calendar, "toggleTimePicker", !1, !0), f(Jc.time, "toggleTimePicker", !0, !0);
		let t = i.value?.steps[o.value];
		(t === Jc.hours || t === Jc.minutes || t === Jc.seconds) && f(t, "toggleTimePicker", !0, !0, t);
	};
	return {
		childMount: l,
		updateFlowStep: u,
		resetFlow: d,
		handleFlow: p,
		flowStep: o
	};
};
function ol(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
function sl(e) {
	return (t, n) => {
		let r = n?.context ? String(n.context) : "standalone", i;
		if (r === "formatting" && e.formattingValues) {
			let t = e.defaultFormattingWidth || e.defaultWidth, r = n?.width ? String(n.width) : t;
			i = e.formattingValues[r] || e.formattingValues[t];
		} else {
			let t = e.defaultWidth, r = n?.width ? String(n.width) : e.defaultWidth;
			i = e.values[r] || e.values[t];
		}
		let a = e.argumentCallback ? e.argumentCallback(t) : t;
		return i[a];
	};
}
function cl(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? ul(s, (e) => e.test(o)) : ll(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function ll(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function ul(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function dl(e) {
	return (t, n = {}) => {
		let r = t.match(e.matchPattern);
		if (!r) return null;
		let i = r[0], a = t.match(e.parsePattern);
		if (!a) return null;
		let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
		o = n.valueCallback ? n.valueCallback(o) : o;
		let s = t.slice(i.length);
		return {
			value: o,
			rest: s
		};
	};
}
var fl = {
	lessThanXSeconds: {
		one: "less than a second",
		other: "less than {{count}} seconds"
	},
	xSeconds: {
		one: "1 second",
		other: "{{count}} seconds"
	},
	halfAMinute: "half a minute",
	lessThanXMinutes: {
		one: "less than a minute",
		other: "less than {{count}} minutes"
	},
	xMinutes: {
		one: "1 minute",
		other: "{{count}} minutes"
	},
	aboutXHours: {
		one: "about 1 hour",
		other: "about {{count}} hours"
	},
	xHours: {
		one: "1 hour",
		other: "{{count}} hours"
	},
	xDays: {
		one: "1 day",
		other: "{{count}} days"
	},
	aboutXWeeks: {
		one: "about 1 week",
		other: "about {{count}} weeks"
	},
	xWeeks: {
		one: "1 week",
		other: "{{count}} weeks"
	},
	aboutXMonths: {
		one: "about 1 month",
		other: "about {{count}} months"
	},
	xMonths: {
		one: "1 month",
		other: "{{count}} months"
	},
	aboutXYears: {
		one: "about 1 year",
		other: "about {{count}} years"
	},
	xYears: {
		one: "1 year",
		other: "{{count}} years"
	},
	overXYears: {
		one: "over 1 year",
		other: "over {{count}} years"
	},
	almostXYears: {
		one: "almost 1 year",
		other: "almost {{count}} years"
	}
}, pl = (e, t, n) => {
	let r, i = fl[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
}, ml = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, hl = (e, t, n, r) => ml[e], gl = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: sl({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: sl({
		values: {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"Q1",
				"Q2",
				"Q3",
				"Q4"
			],
			wide: [
				"1st quarter",
				"2nd quarter",
				"3rd quarter",
				"4th quarter"
			]
		},
		defaultWidth: "wide",
		argumentCallback: (e) => e - 1
	}),
	month: sl({
		values: {
			narrow: [
				"J",
				"F",
				"M",
				"A",
				"M",
				"J",
				"J",
				"A",
				"S",
				"O",
				"N",
				"D"
			],
			abbreviated: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec"
			],
			wide: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			]
		},
		defaultWidth: "wide"
	}),
	day: sl({
		values: {
			narrow: [
				"S",
				"M",
				"T",
				"W",
				"T",
				"F",
				"S"
			],
			short: [
				"Su",
				"Mo",
				"Tu",
				"We",
				"Th",
				"Fr",
				"Sa"
			],
			abbreviated: [
				"Sun",
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat"
			],
			wide: [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			]
		},
		defaultWidth: "wide"
	}),
	dayPeriod: sl({
		values: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			}
		},
		defaultWidth: "wide",
		formattingValues: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			}
		},
		defaultFormattingWidth: "wide"
	})
}, _l = {
	ordinalNumber: dl({
		matchPattern: /^(\d+)(th|st|nd|rd)?/i,
		parsePattern: /\d+/i,
		valueCallback: (e) => parseInt(e, 10)
	}),
	era: cl({
		matchPatterns: {
			narrow: /^(b|a)/i,
			abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
			wide: /^(before christ|before common era|anno domini|common era)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: { any: [/^b/i, /^(a|c)/i] },
		defaultParseWidth: "any"
	}),
	quarter: cl({
		matchPatterns: {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^[1234](th|st|nd|rd)? quarter/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: { any: [
			/1/i,
			/2/i,
			/3/i,
			/4/i
		] },
		defaultParseWidth: "any",
		valueCallback: (e) => e + 1
	}),
	month: cl({
		matchPatterns: {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
			wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: {
			narrow: [
				/^j/i,
				/^f/i,
				/^m/i,
				/^a/i,
				/^m/i,
				/^j/i,
				/^j/i,
				/^a/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			],
			any: [
				/^ja/i,
				/^f/i,
				/^mar/i,
				/^ap/i,
				/^may/i,
				/^jun/i,
				/^jul/i,
				/^au/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			]
		},
		defaultParseWidth: "any"
	}),
	day: cl({
		matchPatterns: {
			narrow: /^[smtwf]/i,
			short: /^(su|mo|tu|we|th|fr|sa)/i,
			abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
			wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: {
			narrow: [
				/^s/i,
				/^m/i,
				/^t/i,
				/^w/i,
				/^t/i,
				/^f/i,
				/^s/i
			],
			any: [
				/^su/i,
				/^m/i,
				/^tu/i,
				/^w/i,
				/^th/i,
				/^f/i,
				/^sa/i
			]
		},
		defaultParseWidth: "any"
	}),
	dayPeriod: cl({
		matchPatterns: {
			narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
			any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
		},
		defaultMatchWidth: "any",
		parsePatterns: { any: {
			am: /^a/i,
			pm: /^p/i,
			midnight: /^mi/i,
			noon: /^no/i,
			morning: /morning/i,
			afternoon: /afternoon/i,
			evening: /evening/i,
			night: /night/i
		} },
		defaultParseWidth: "any"
	})
}, vl = {
	code: "en-US",
	formatDistance: pl,
	formatLong: {
		date: ol({
			formats: {
				full: "EEEE, MMMM do, y",
				long: "MMMM do, y",
				medium: "MMM d, y",
				short: "MM/dd/yyyy"
			},
			defaultWidth: "full"
		}),
		time: ol({
			formats: {
				full: "h:mm:ss a zzzz",
				long: "h:mm:ss a z",
				medium: "h:mm:ss a",
				short: "h:mm a"
			},
			defaultWidth: "full"
		}),
		dateTime: ol({
			formats: {
				full: "{{date}} 'at' {{time}}",
				long: "{{date}} 'at' {{time}}",
				medium: "{{date}}, {{time}}",
				short: "{{date}}, {{time}}"
			},
			defaultWidth: "full"
		})
	},
	formatRelative: hl,
	localize: gl,
	match: _l,
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
}, yl = {
	noDisabledRange: !1,
	showLastInRange: !0,
	minMaxRawRange: !1,
	partialRange: !0,
	disableTimeRangeValidation: !1,
	maxRange: void 0,
	minRange: void 0,
	autoRange: void 0,
	fixedStart: !1,
	fixedEnd: !1,
	autoSwitchStartEnd: !0
}, bl = {
	allowStopPropagation: !0,
	closeOnScroll: !1,
	modeHeight: 255,
	allowPreventDefault: !1,
	closeOnClearValue: !0,
	closeOnAutoApply: !0,
	noSwipe: !1,
	keepActionRow: !1,
	onClickOutside: void 0,
	tabOutClosesMenu: !0,
	arrowLeft: void 0,
	keepViewOnOffsetClick: !1,
	timeArrowHoldThreshold: 0,
	shadowDom: !1,
	mobileBreakpoint: 600,
	setDateOnMenuClose: !1,
	escClose: !0,
	spaceConfirm: !0,
	monthChangeOnArrows: !0,
	monthChangeOnScroll: !0
}, xl = {
	enterSubmit: !0,
	tabSubmit: !0,
	openMenu: "open",
	selectOnFocus: !1,
	rangeSeparator: " - ",
	escClose: !0,
	format: void 0,
	maskFormat: void 0,
	applyOnBlur: !1,
	separators: void 0
}, Sl = {
	dates: [],
	years: [],
	months: [],
	quarters: [],
	weeks: [],
	weekdays: [],
	options: { highlightDisabled: !1 }
}, Cl = {
	showSelect: !0,
	showCancel: !0,
	showNow: !1,
	showPreview: !0,
	selectBtnLabel: "Select",
	cancelBtnLabel: "Cancel",
	nowBtnLabel: "Now",
	nowBtnRound: void 0
}, wl = {
	toggleOverlay: "Toggle overlay",
	menu: "Datepicker menu",
	input: "Datepicker input",
	openTimePicker: "Open time picker",
	closeTimePicker: "Close time Picker",
	incrementValue: (e) => `Increment ${e}`,
	decrementValue: (e) => `Decrement ${e}`,
	openTpOverlay: (e) => `Open ${e} overlay`,
	amPmButton: "Switch AM/PM mode",
	openYearsOverlay: "Open years overlay",
	openMonthsOverlay: "Open months overlay",
	nextMonth: "Next month",
	prevMonth: "Previous month",
	nextYear: "Next year",
	prevYear: "Previous year",
	day: void 0,
	weekDay: void 0,
	clearInput: "Clear value",
	calendarIcon: "Calendar icon",
	timePicker: "Time picker",
	monthPicker: (e) => `Month picker${e ? " overlay" : ""}`,
	yearPicker: (e) => `Year picker${e ? " overlay" : ""}`,
	timeOverlay: (e) => `${e} overlay`
}, Tl = {
	menuAppearTop: "dp-menu-appear-top",
	menuAppearBottom: "dp-menu-appear-bottom",
	open: "dp-slide-down",
	close: "dp-slide-up",
	next: "calendar-next",
	previous: "calendar-prev",
	vNext: "dp-slide-up",
	vPrevious: "dp-slide-down"
}, El = {
	weekDays: [],
	months: [],
	years: [],
	times: {
		hours: [],
		minutes: [],
		seconds: []
	}
}, Dl = {
	month: "LLL",
	year: "yyyy",
	weekDay: "EEEEEE",
	quarter: "MMMM",
	day: "d",
	input: void 0,
	preview: void 0
}, Ol = {
	enableTimePicker: !0,
	ignoreTimeValidation: !1,
	enableSeconds: !1,
	enableMinutes: !0,
	is24: !0,
	noHoursOverlay: !1,
	noMinutesOverlay: !1,
	noSecondsOverlay: !1,
	hoursGridIncrement: 1,
	minutesGridIncrement: 5,
	secondsGridIncrement: 5,
	hoursIncrement: 1,
	minutesIncrement: 1,
	secondsIncrement: 1,
	timePickerInline: !1,
	startTime: void 0
}, kl = {
	flowStep: 0,
	menuWrapRef: null,
	collapse: !1
}, Al = {
	weekStart: $c.Monday,
	yearRange: () => [1900, 2100],
	ui: () => ({}),
	locale: () => vl,
	dark: !1,
	transitions: !0,
	hideNavigation: () => [],
	vertical: !1,
	hideMonthYearSelect: !1,
	disableYearSelect: !1,
	autoApply: !1,
	disabledDates: () => [],
	hideOffsetDates: !1,
	noToday: !1,
	markers: () => [],
	presetDates: () => [],
	preventMinMaxNavigation: !1,
	reverseYears: !1,
	weekPicker: !1,
	arrowNavigation: !1,
	monthPicker: !1,
	yearPicker: !1,
	quarterPicker: !1,
	timePicker: !1,
	modelAuto: !1,
	multiDates: !1,
	range: !1,
	inline: !1,
	sixWeeks: !1,
	focusStartDate: !1,
	yearFirst: !1,
	loading: !1,
	centered: !1
}, jl = {
	name: void 0,
	required: !1,
	autocomplete: "off",
	state: void 0,
	clearable: !0,
	alwaysClearable: !1,
	hideInputIcon: !1,
	id: void 0,
	inputmode: "none"
}, Ml = {
	type: "local",
	hideOnOffsetDates: !1,
	label: "W"
}, Nl = (e) => {
	let { getMapKey: t, getMapKeyType: n, getTimeObjFromCurrent: r } = Pl();
	function i(t, n) {
		let r;
		return r = e.timezone ? new Ic(t ?? /* @__PURE__ */ new Date(), e.timezone) : t ? new Date(t) : /* @__PURE__ */ new Date(), n ? Q(r, {
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0
		}) : r;
	}
	let o = () => {
		let e = A.value.enableSeconds ? ":ss" : "", t = A.value.enableMinutes ? ":mm" : "";
		return A.value.is24 ? `HH${t}${e}` : `hh${t}${e} aa`;
	}, s = () => e.monthPicker ? "MM/yyyy" : e.timePicker ? o() : e.weekPicker ? `${C.value?.type === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : A.value.enableTimePicker ? `MM/dd/yyyy, ${o()}` : "MM/dd/yyyy", c = (e) => r(i(), e, A.value.enableSeconds), l = () => E.value.enabled ? A.value.startTime && Array.isArray(A.value.startTime) ? [c(A.value.startTime[0]), c(A.value.startTime[1])] : null : A.value.startTime && !Array.isArray(A.value.startTime) ? c(A.value.startTime) : null, u = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : Math.max(+e, 2) : 0, d = (r) => {
		let a = n(e.monthPicker, e.yearPicker);
		return new Map(r.map((e) => {
			let n = i(e, f.value);
			return [t(n, a), n];
		}));
	}, f = a(() => e.monthPicker || e.yearPicker || e.quarterPicker), p = a(() => {
		let t = typeof e.multiCalendars == "object" && e.multiCalendars, n = {
			static: !0,
			solo: !1
		};
		if (!e.multiCalendars) return {
			...n,
			count: u(!1)
		};
		let r = t ? e.multiCalendars : {}, i = t ? r.count ?? !0 : e.multiCalendars, a = u(i);
		return Object.assign(n, r, { count: a });
	}), m = a(() => l()), h = a(() => ({
		...wl,
		...e.ariaLabels
	})), g = a(() => ({
		...El,
		...e.filters
	})), _ = a(() => typeof e.transitions == "boolean" ? e.transitions ? Tl : !1 : {
		...Tl,
		...e.transitions
	}), v = a(() => ({
		...Cl,
		...e.actionRow
	})), y = a(() => typeof e.textInput == "object" ? {
		...xl,
		...e.textInput,
		format: typeof e.textInput.format == "string" ? e.textInput.format : O.value.input,
		pattern: e.textInput.format ?? O.value.input,
		enabled: !0
	} : {
		...xl,
		format: O.value.input,
		pattern: O.value.input,
		enabled: e.textInput
	}), b = a(() => {
		let t = { input: !1 };
		return typeof e.inline == "object" ? {
			...t,
			...e.inline,
			enabled: !0
		} : {
			enabled: e.inline,
			...t
		};
	}), x = a(() => ({
		...bl,
		...e.config
	})), S = a(() => typeof e.highlight == "function" ? e.highlight : {
		...Sl,
		...e.highlight
	}), C = a(() => typeof e.weekNumbers == "object" ? {
		type: e.weekNumbers?.type ?? Ml.type,
		hideOnOffsetDates: e.weekNumbers?.hideOnOffsetDates ?? Ml.hideOnOffsetDates,
		label: e.weekNumbers.label ?? Ml.label
	} : e.weekNumbers ? Ml : void 0), w = a(() => typeof e.multiDates == "boolean" ? {
		enabled: e.multiDates,
		dragSelect: !0,
		limit: null
	} : {
		enabled: !!e.multiDates,
		limit: e.multiDates?.limit ? +e.multiDates.limit : null,
		dragSelect: e.multiDates?.dragSelect ?? !0
	}), T = a(() => ({
		minDate: e.minDate ? i(e.minDate) : null,
		maxDate: e.maxDate ? i(e.maxDate) : null,
		disabledDates: Array.isArray(e.disabledDates) ? d(e.disabledDates) : e.disabledDates,
		allowedDates: Array.isArray(e.allowedDates) ? d(e.allowedDates) : null,
		highlight: typeof S.value == "object" && Array.isArray(S.value.dates) ? d(S.value.dates) : S.value,
		markers: e.markers?.length ? new Map(e.markers.map((e) => {
			let n = i(e.date);
			return [t(n, Qc.DATE), e];
		})) : null
	})), E = a(() => typeof e.range == "object" ? {
		enabled: !0,
		...yl,
		...e.range
	} : {
		enabled: e.range,
		...yl
	}), D = a(() => ({ ...Object.fromEntries(Object.keys(e.ui).map((t) => {
		let n = t, r = e.ui[n];
		return n === "dayClass" ? [n, e.ui[n]] : [t, typeof e.ui[n] == "string" ? { [r]: !0 } : Object.fromEntries(r.map((e) => [e, !0]))];
	})) })), O = a(() => ({
		...Dl,
		...e.formats,
		input: e.formats?.input ?? s(),
		preview: e.formats?.preview ?? s()
	})), k = a(() => {
		if (e.teleport) return typeof e.teleport == "string" ? e.teleport : typeof e.teleport == "boolean" ? "body" : e.teleport;
	}), A = a(() => ({
		...Ol,
		...e.timeConfig
	}));
	return {
		transitions: _,
		multiCalendars: p,
		startTime: m,
		ariaLabels: h,
		filters: g,
		actionRow: v,
		textInput: y,
		inline: b,
		config: x,
		highlight: S,
		weekNumbers: C,
		range: E,
		safeDates: T,
		multiDates: w,
		ui: D,
		formats: O,
		teleport: k,
		timeConfig: A,
		flow: a(() => {
			if (e.flow) return {
				steps: [],
				partial: !1,
				...e.flow
			};
		}),
		inputAttrs: a(() => {
			let t = y.value.enabled ? "text" : "none";
			return e.inputAttrs ? {
				...jl,
				inputmode: t,
				...e.inputAttrs
			} : {
				...jl,
				inputmode: t
			};
		}),
		floatingConfig: a(() => ({
			offset: e.floating?.offset ?? 10,
			arrow: e.floating?.arrow ?? !0,
			strategy: e.floating?.strategy ?? void 0,
			placement: e.floating?.placement ?? void 0,
			flip: e.floating?.flip ?? !0,
			shift: e.floating?.shift ?? !0
		})),
		getDate: i
	};
}, Pl = () => {
	let e = (e, t) => wo(e, t ?? Qc.DATE), t = (e, t) => e ? Qc.MONTH_AND_YEAR : t ? Qc.YEAR : Qc.DATE, n = (t, n, r) => n.get(e(t, r)), r = (e) => e, i = (e) => e === 0 ? e : !e || Number.isNaN(+e) ? null : +e, a = () => [
		"a[href]",
		"area[href]",
		"input:not([disabled]):not([type='hidden'])",
		"select:not([disabled])",
		"textarea:not([disabled])",
		"button:not([disabled])",
		"[tabindex]:not([tabindex='-1'])",
		"[data-datepicker-instance]"
	].join(", "), o = (e, t) => {
		let n = [...document.querySelectorAll(a())];
		n = n.filter((t) => !e.contains(t) || "datepicker-instance" in t.dataset);
		let r = n.indexOf(e);
		if (r >= 0 && (t ? r - 1 >= 0 : r + 1 <= n.length)) return n[r + (t ? -1 : 1)];
	}, s = (e) => String(e).padStart(2, "0"), c = (e, t) => e?.querySelector(`[data-dp-element="${t}"]`), l = (e, t, n = !1) => {
		e && t.allowStopPropagation && (n && e.stopImmediatePropagation(), e.stopPropagation());
	}, u = (e, t, n = !1, r) => {
		if (e.key === Zc.enter || e.key === Zc.space) return n && e.preventDefault(), t();
		if (r) return r(e);
	}, d = (e, t) => {
		t.allowStopPropagation && e.stopPropagation(), t.allowPreventDefault && e.preventDefault();
	}, f = (e) => {
		if (e) return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
	}, p = () => "ontouchstart" in globalThis || navigator.maxTouchPoints > 0, m = (e) => [
		12,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11
	][e], h = (e) => {
		let t = [], n = (e) => e.filter((e) => !!e);
		for (let r = 0; r < e.length; r += 3) {
			let i = [
				e[r],
				e[r + 1],
				e[r + 2]
			];
			t.push(n(i));
		}
		return t;
	}, g = {
		prop: (e) => `"${e}" prop must be enabled!`,
		dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
	}, _ = (e, t, n, r, i) => {
		let a = {
			hours: ko,
			minutes: jo,
			seconds: No
		};
		if (!t) return r ? [a[e](n), a[e](n)] : a[e](n);
		if (Array.isArray(t) && r) {
			let r = t[0] ?? n, o = t[1];
			return [a[e](r), o ? a[e](o) : i[e][1] ?? a[e](n)];
		}
		return Array.isArray(t) && !r ? a[e](t[t.length - 1] ?? n) : a[e](t);
	};
	return {
		getMapKey: e,
		getMapKeyType: t,
		getMapDate: n,
		convertType: r,
		getNumVal: i,
		findNextFocusableElement: o,
		padZero: s,
		getElWithin: c,
		checkStopPropagation: l,
		checkKeyDown: u,
		handleEventPropagation: d,
		findFocusableEl: f,
		isTouchDevice: p,
		hoursToAmPmHours: m,
		getGroupedList: h,
		setTimeModelValue: (e, t, n, r) => {
			e.hours = _("hours", t, n, r, e), e.minutes = _("minutes", t, n, r, e), e.seconds = _("seconds", t, n, r, e);
		},
		getTimeObjFromCurrent: (e, t, n) => {
			let r = {
				hours: ko(e),
				minutes: jo(e),
				seconds: n ? No(e) : 0
			};
			return Object.assign(r, t);
		},
		errorMapper: g
	};
}, Fl = () => {
	let { getDate: e } = $(), { getMapDate: t, getGroupedList: n } = Pl(), r = (t, n) => {
		if (!t) return e();
		let r = Q(e(t), {
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0
		});
		return n ? Ma(r) : r;
	}, i = (t, n) => {
		let r = e(n);
		return Q(r, {
			hours: +(t.hours ?? ko(r)),
			minutes: +(t.minutes ?? jo(r)),
			seconds: +(t.seconds ?? No(r)),
			milliseconds: 0
		});
	}, a = (e, t) => [da(e, { weekStartsOn: +t }), Fa(e, { weekStartsOn: +t })], o = (e, t) => !e || !t ? !1 : Fo(r(e), r(t)), s = (e, t) => !e || !t ? !1 : Io(r(e), r(t)), c = (e, t) => !e || !t ? !1 : Po(r(e), r(t)), l = (e, t, n) => e?.[0] && e?.[1] ? c(n, e[0]) && o(n, e[1]) : e?.[0] && t ? c(n, e[0]) && o(n, t) || o(n, e[0]) && c(n, t) : !1, u = (e, t) => ka({
		start: c(e, t) ? t : e,
		end: c(t, e) ? t : e
	}), d = (e) => `dp-${wo(e, "yyyy-MM-dd")}`, f = (t) => r(Q(e(t), { date: 1 })), p = (t, n) => {
		if (n) {
			let r = Z(e(n));
			if (r > t) return 12;
			if (r === t) return Mo(e(n));
		}
	}, m = (t, n) => {
		if (n) {
			let r = Z(e(n));
			return r < t ? -1 : r === t ? Mo(e(n)) : void 0;
		}
	}, h = (t) => {
		if (t) return Z(e(t));
	}, g = (e) => ({
		hours: ko(e),
		minutes: jo(e),
		seconds: No(e)
	});
	return {
		resetDateTime: r,
		groupListAndMap: (e, t) => n(e).map((e) => e.map((e) => {
			let { active: n, disabled: r, isBetween: i, highlighted: a } = t(e);
			return {
				...e,
				active: n,
				disabled: r,
				className: {
					dp__overlay_cell_active: n,
					dp__overlay_cell: !n,
					dp__overlay_cell_disabled: r,
					dp__overlay_cell_pad: !0,
					dp__overlay_cell_active_disabled: r && n,
					dp__cell_in_between: i,
					"dp--highlighted": a
				}
			};
		})),
		setTime: i,
		getWeekFromDate: a,
		isDateAfter: c,
		isDateBefore: o,
		isDateBetween: l,
		isDateEqual: s,
		getDaysInBetween: u,
		getCellId: d,
		resetDate: f,
		getMinMonth: p,
		getMaxMonth: m,
		getYearFromDate: h,
		getTimeObj: g,
		setTimeValue: (t) => Q(e(), g(t)),
		sanitizeTime: (e, t, n) => t && (n || n === 0) ? Object.fromEntries([
			"hours",
			"minutes",
			"seconds"
		].map((r) => r === t ? [r, n] : [r, Number.isNaN(+e[r]) ? void 0 : +e[r]])) : {
			hours: Number.isNaN(+e.hours) ? void 0 : +e.hours,
			minutes: Number.isNaN(+e.minutes) ? void 0 : +e.minutes,
			seconds: Number.isNaN(+(e.seconds ?? "")) ? void 0 : +e.seconds
		},
		getBeforeAndAfterInRange: (e, t) => ({
			before: Js(r(t), e),
			after: oa(r(t), e)
		}),
		isModelAuto: (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1,
		matchDate: (n, r) => n ? r ? r instanceof Map ? !!t(n, r) : r(e(n)) : !1 : !0,
		checkHighlightMonth: (e, t, n) => typeof e == "function" ? e({
			month: t,
			year: n
		}) : e.months.some((e) => e.month === t && e.year === n),
		checkHighlightYear: (e, t) => typeof e == "function" ? e(t) : e.years.includes(t)
	};
}, Il = () => {
	let { defaults: { config: e } } = $(), t = F(0);
	O(() => {
		n(), globalThis.addEventListener("resize", n, { passive: !0 });
	}), A(() => {
		globalThis.removeEventListener("resize", n);
	});
	let n = () => {
		t.value = globalThis.document.documentElement.clientWidth;
	};
	return { isMobile: a(() => t.value <= e.value.mobileBreakpoint || void 0) };
}, Ll = () => {
	let { getDate: e, state: t, modelValue: n, rootProps: r, defaults: { formats: i, textInput: a } } = $(), o = (t) => wo(yc(e(), t), i.value.year, { locale: r.locale }), s = (t) => wo(gc(e(), t), i.value.month, { locale: r.locale }), c = (e) => wo(e, i.value.weekDay, { locale: r.locale }), l = (e) => wo(e, i.value.quarter, { locale: r.locale }), u = (e, t) => [e, t].map((e) => l(e)).join("-"), d = (e) => wo(e, i.value.day, { locale: r.locale }), f = (e, t, n) => {
		let o = n ? i.value.preview : i.value.input;
		if (!e) return "";
		if (typeof o == "function") return o(e);
		let s = t ?? o, c = { locale: r.locale };
		return Array.isArray(e) ? `${wo(e[0], s, c)}${r.modelAuto && !e[1] ? "" : a.value.rangeSeparator}${e[1] ? wo(e[1], s, c) : ""}` : wo(e, s, c);
	}, p = () => {
		let e = (e) => wo(e, a.value.format);
		return Array.isArray(n.value) ? `${e(n.value[0])} ${a.value.rangeSeparator} ${n.value[1] ? e(n.value[1]) : ""}` : "";
	};
	return {
		formatYear: o,
		formatMonth: s,
		formatWeekDay: c,
		formatQuarter: l,
		formatSelectedDate: f,
		formatForTextInput: () => t.isInputFocused && n.value ? Array.isArray(n.value) ? p() : wo(n.value, a.value.format) : f(n.value),
		formatPreview: (e) => f(e, void 0, !0),
		formatQuarterText: u,
		formatDay: d
	};
}, Rl = () => {
	let { rootProps: e } = $(), { formatYear: t, formatMonth: n } = Ll();
	return {
		getMonths: () => [
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11
		].map((e) => ({
			text: n(e),
			value: e
		})),
		getYears: () => {
			let n = [];
			for (let r = +e.yearRange[0]; r <= +e.yearRange[1]; r++) n.push({
				value: +r,
				text: t(r)
			});
			return e.reverseYears ? n.reverse() : n;
		},
		isOutOfYearRange: (t) => t < +e.yearRange[0] || t > +e.yearRange[1]
	};
}, zl = (e) => ({
	openMenu: () => e.value?.openMenu(),
	closeMenu: () => e.value?.closeMenu(),
	selectDate: () => e.value?.selectDate(),
	clearValue: () => e.value?.clearValue(),
	formatInputValue: () => e.value?.formatInputValue(),
	updateInternalModelValue: (t) => e.value?.updateInternalModelValue(t),
	setMonthYear: (t, n) => e.value?.setMonthYear(t, n),
	parseModel: () => e.value?.parseModel(),
	switchView: (t, n) => e.value?.switchView(t, n),
	handleFlow: () => e.value?.handleFlow(),
	toggleMenu: () => e.value?.toggleMenu(),
	dpMenuRef: () => e.value?.dpMenuRef(),
	dpWrapMenuRef: () => e.value?.dpWrapMenuRef(),
	inputRef: () => e.value?.inputRef()
}), Bl = () => ({ boolHtmlAttribute: (e) => e ? !0 : void 0 }), Vl = () => {
	let { getDate: e, rootProps: t, defaults: { textInput: n, startTime: r, timeConfig: i } } = $(), { getTimeObjFromCurrent: o } = Pl(), s = F(!1), c = a(() => Array.isArray(r.value) ? r.value[0] : r.value ?? o(e(), {}, i.value.enableSeconds)), l = (e, t) => {
		let n = /[^a-zA-Z]+/g, r = /\D+/g, i = t.split(r), a = e.split(n), o = e.match(n) || [], s = t.match(r) || [], c = "";
		for (let e = 0; e < i.length && e < a.length; e++) {
			e > 0 && s[e - 1] && (c += o[e - 1] || s[e - 1]);
			let t = i[e]?.length;
			c += a[e]?.slice(0, t);
		}
		return c;
	}, u = (n, r, i) => {
		let a = Gs(n, l(r, n), e(), { locale: t.locale });
		return Ca(a) && Sa(a) ? i || s.value ? a : Q(a, {
			hours: +c.value.hours,
			minutes: +c.value.minutes,
			seconds: +(c.value.seconds ?? 0),
			milliseconds: 0
		}) : null;
	};
	return {
		textPasted: s,
		parseFreeInput: (e, t) => {
			if (typeof n.value.pattern == "string") return u(e, n.value.pattern, t);
			if (Array.isArray(n.value.pattern)) {
				let r = null;
				for (let i of n.value.pattern) if (r = u(e, i, t), r) break;
				return r;
			}
			return typeof n.value.pattern == "function" ? n.value.pattern(e) : null;
		},
		applyMaxValues: (e, t) => {
			let n = {
				MM: 12,
				DD: 31,
				hh: 23,
				mm: 59,
				ss: 59
			}, r = "", i = 0;
			for (let a = 0; a < t.length; a++) {
				let o = t[a], s = o.length, c = e.slice(i, i + s);
				if (!c) break;
				if (c.length < s) r += c;
				else {
					let e = Number.parseInt(c, 10);
					n[o] && e > n[o] && (e = n[o]), r += e.toString().padStart(s, "0").slice(0, s);
				}
				i += s;
			}
			return r;
		},
		createMaskedValue: (e, t) => {
			let n = /(YYYY|MM|DD|hh|mm|ss)/g, r = [...t.matchAll(n)].map((e) => e[0]), i = t.replace(n, "|").split("|").filter(Boolean), a = r.map((e) => e.length), o = "", s = 0;
			for (let t = 0; t < r.length; t++) {
				let n = a[t], r = e.slice(s, s + n);
				if (!r) break;
				o += r, r.length === n && i[t] && (o += i[t]), s += n;
			}
			return o;
		}
	};
}, Hl = /* @__PURE__ */ ((e) => (e.Input = "input", e.DatePicker = "date-picker", e.Calendar = "calendar", e.DatePickerHeader = "date-picker-header", e.Menu = "menu", e.ActionRow = "action-row", e.TimePicker = "time-picker", e.TimeInput = "time-input", e.PassTrough = "pass-trough", e.MonthPicker = "month-picker", e.YearMode = "year-mode", e.QuarterPicker = "quarter-picker", e.YearPicker = "year-picker", e))(Hl || {}), Ul = [
	"time-input",
	"time-picker",
	"pass-trough"
], Wl = [
	{
		name: "trigger",
		use: ["input"]
	},
	{
		name: "input-icon",
		use: ["input"]
	},
	{
		name: "clear-icon",
		use: ["input"]
	},
	{
		name: "dp-input",
		use: ["input"]
	},
	{
		name: "clock-icon",
		use: [
			"time-picker",
			"time-input",
			"pass-trough"
		]
	},
	{
		name: "arrow-left",
		use: [
			"date-picker-header",
			"pass-trough",
			"year-mode"
		]
	},
	{
		name: "arrow-right",
		use: [
			"date-picker-header",
			"pass-trough",
			"year-mode"
		]
	},
	{
		name: "arrow-up",
		use: [
			"time-picker",
			"time-input",
			"date-picker-header",
			"pass-trough"
		]
	},
	{
		name: "arrow-down",
		use: [
			"time-picker",
			"time-input",
			"date-picker-header",
			"pass-trough"
		]
	},
	{
		name: "calendar-icon",
		use: [
			"date-picker-header",
			"time-picker",
			"pass-trough",
			"year-mode"
		]
	},
	{
		name: "day",
		use: ["calendar", "pass-trough"]
	},
	{
		name: "month-overlay-value",
		use: [
			"date-picker-header",
			"pass-trough",
			"month-picker"
		]
	},
	{
		name: "year-overlay-value",
		use: [
			"date-picker-header",
			"pass-trough",
			"year-mode",
			"year-picker"
		]
	},
	{
		name: "year-overlay",
		use: ["date-picker-header", "pass-trough"]
	},
	{
		name: "month-overlay",
		use: ["date-picker-header", "pass-trough"]
	},
	{
		name: "month-overlay-header",
		use: ["date-picker-header", "pass-trough"]
	},
	{
		name: "year-overlay-header",
		use: ["date-picker-header", "pass-trough"]
	},
	{
		name: "hours-overlay-value",
		use: Ul
	},
	{
		name: "hours-overlay-header",
		use: Ul
	},
	{
		name: "minutes-overlay-value",
		use: Ul
	},
	{
		name: "minutes-overlay-header",
		use: Ul
	},
	{
		name: "seconds-overlay-value",
		use: Ul
	},
	{
		name: "seconds-overlay-header",
		use: Ul
	},
	{
		name: "hours",
		use: [
			"time-input",
			"time-picker",
			"pass-trough"
		]
	},
	{
		name: "minutes",
		use: [
			"time-input",
			"time-picker",
			"pass-trough"
		]
	},
	{
		name: "seconds",
		use: [
			"time-input",
			"time-picker",
			"pass-trough"
		]
	},
	{
		name: "month",
		use: [
			"date-picker-header",
			"time-picker",
			"pass-trough"
		]
	},
	{
		name: "year",
		use: [
			"date-picker-header",
			"time-picker",
			"pass-trough",
			"year-mode"
		]
	},
	{
		name: "action-buttons",
		use: ["action-row"]
	},
	{
		name: "action-preview",
		use: ["action-row"]
	},
	{
		name: "calendar-header",
		use: ["calendar", "pass-trough"]
	},
	{
		name: "marker-tooltip",
		use: ["calendar", "pass-trough"]
	},
	{
		name: "action-extra",
		use: ["menu"]
	},
	{
		name: "time-picker-overlay",
		use: [
			"time-picker",
			"time-picker",
			"pass-trough"
		]
	},
	{
		name: "am-pm-button",
		use: [
			"time-picker",
			"time-input",
			"pass-trough"
		]
	},
	{
		name: "left-sidebar",
		use: ["menu"]
	},
	{
		name: "right-sidebar",
		use: ["menu"]
	},
	{
		name: "month-year",
		use: [
			"date-picker-header",
			"pass-trough",
			"month-picker",
			"year-picker"
		]
	},
	{
		name: "time-picker",
		use: ["date-picker", "pass-trough"]
	},
	{
		name: "action-row",
		use: ["action-row"]
	},
	{
		name: "marker",
		use: ["calendar", "pass-trough"]
	},
	{
		name: "quarter",
		use: ["quarter-picker", "pass-trough"]
	},
	{
		name: "top-extra",
		use: [
			"date-picker-header",
			"pass-trough",
			"month-picker",
			"quarter-picker",
			"year-picker"
		]
	},
	{
		name: "tp-inline-arrow-up",
		use: [
			"date-picker",
			"time-input",
			"time-picker",
			"pass-trough"
		]
	},
	{
		name: "tp-inline-arrow-down",
		use: [
			"date-picker",
			"time-input",
			"time-picker",
			"pass-trough"
		]
	},
	{
		name: "arrow",
		use: ["menu"]
	},
	{
		name: "menu-header",
		use: ["menu"]
	}
], Gl = (e, t) => Wl.filter((n) => e[n.name] && n.use.includes(t)).map((e) => e.name), Kl = (e, t) => Wl.map((e) => e.name).concat(t?.filter((e) => e.slot).map((e) => e.slot) ?? []).filter((t) => !!e[t]), ql = {
	key: 1,
	class: "dp__input_wrap"
}, Jl = [
	"id",
	"name",
	"inputmode",
	"placeholder",
	"disabled",
	"readonly",
	"required",
	"value",
	"autocomplete",
	"aria-label",
	"aria-disabled",
	"aria-invalid"
], Yl = {
	key: 1,
	class: "dp--clear-btn"
}, Xl = ["aria-label"], Zl = /* @__PURE__ */ p({
	__name: "DatepickerInput",
	props: { isMenuOpen: {
		type: Boolean,
		default: !1
	} },
	emits: [
		"clear",
		"open",
		"set-input-date",
		"close",
		"select-date",
		"set-empty-date",
		"toggle",
		"focus",
		"blur",
		"real-blur"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = e, { rootEmit: u, inputValue: d, rootProps: p, defaults: { textInput: m, ariaLabels: h, inline: g, config: _, range: v, multiDates: y, ui: b, inputAttrs: x } } = $(), { checkMinMaxRange: w, isValidDate: T } = il(), { parseFreeInput: E, textPasted: D, createMaskedValue: O, applyMaxValues: k } = Vl(), { checkKeyDown: A, checkStopPropagation: M } = Pl(), { boolHtmlAttribute: N } = Bl(), P = G("dp-input"), I = F(null), R = F(!1), z = a(() => ({
			dp__pointer: !p.disabled && !p.readonly && !m.value.enabled,
			dp__disabled: p.disabled,
			dp__input_readonly: !m.value.enabled,
			dp__input: !0,
			dp__input_not_clearable: !x.value.clearable,
			dp__input_icon_pad: !x.value.hideInputIcon,
			dp__input_valid: typeof x.value.state == "boolean" && x.value.state,
			dp__input_invalid: typeof x.value.state == "boolean" && !x.value.state,
			dp__input_focus: R.value || i.isMenuOpen,
			dp__input_reg: !m.value.enabled,
			...b.value.input
		})), B = () => {
			r("set-input-date", null), x && p.autoApply && (r("set-empty-date"), I.value = null);
		}, V = (e) => {
			if (m.value.separators?.length) {
				let t = new RegExp(m.value.separators.map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"));
				return e.split(t);
			}
			return e.split(m.value.rangeSeparator);
		}, ee = (e) => {
			let [t, n] = V(e);
			if (t) {
				let e = E(t.trim(), d.value), r = n ? E(n.trim(), d.value) : void 0;
				if (Po(e, r)) return;
				let i = e && r ? [e, r] : [e];
				w(r, i, 0) && (I.value = e ? i : null);
			}
		}, U = () => {
			D.value = !0;
		}, W = (e) => {
			if (v.value.enabled) ee(e);
			else if (y.value.enabled) {
				let t = e.split(";");
				I.value = t.map((e) => E(e.trim())).filter((e) => !!e);
			} else I.value = E(e, d.value);
		}, te = (e) => {
			let t = typeof e == "string" ? e : e.target?.value, n = m?.value?.maskFormat, a = t;
			if (typeof n == "string") {
				let e = [...n.matchAll(/(YYYY|MM|DD|hh|mm|ss)/g)].map((e) => e[0]), r = t.replace(/\D/g, ""), i = k(r, e);
				a = O(i, n);
			}
			a === "" ? B() : (m.value.openMenu && !i.isMenuOpen && r("open"), W(a), r("set-input-date", I.value)), D.value = !1, d.value = a, u("text-input", e, I.value);
		}, ne = (e) => {
			m.value.enabled ? (W(e.target.value), m.value.enterSubmit && T(I.value) && d.value !== "" ? (r("set-input-date", I.value, !0), I.value = null) : m.value.enterSubmit && d.value === "" && (I.value = null, r("clear"))) : J(e);
		}, K = (e, t) => {
			m.value.enabled && m.value.tabSubmit && !t && W(e.target.value), m.value.tabSubmit && T(I.value) && d.value !== "" ? (r("set-input-date", I.value, !0, !0), I.value = null) : m.value.tabSubmit && d.value === "" && (I.value = null, r("clear"));
		}, q = () => {
			R.value = !0, r("focus"), S().then(() => {
				m.value.enabled && m.value.selectOnFocus && P.value?.select();
			});
		}, J = (e) => {
			if (M(e, _.value, !0), m.value.enabled && m.value.openMenu && !g.value.input) {
				if (m.value.openMenu === "open" && !i.isMenuOpen) return r("open");
				if (m.value.openMenu === "toggle") return r("toggle");
			} else m.value.enabled || r("toggle");
		}, re = () => {
			r("real-blur"), R.value = !1, (!i.isMenuOpen || g.value.enabled && g.value.input) && r("blur"), (p.autoApply && m.value.enabled && I.value && !i.isMenuOpen || m.value.applyOnBlur) && (r("set-input-date", I.value), r("select-date"), I.value = null);
		}, Y = (e) => {
			M(e, _.value, !0), r("clear");
		}, ae = () => {
			r("close");
		}, oe = (e) => {
			if (e.key === "Tab" && K(e), e.key === "Enter" && ne(e), e.key === "Escape" && m.value.escClose && ae(), !m.value.enabled) {
				if (e.code === "Tab") return;
				e.preventDefault();
			}
		}, se = () => {
			P.value?.focus({ preventScroll: !0 });
		}, ce = (e) => {
			I.value = e;
		}, le = (e) => {
			e.key === Zc.tab && K(e, !0);
		};
		return t({
			focusInput: se,
			setParsedDate: ce
		}), (t, n) => (j(), c("div", { onClick: J }, [!t.$slots["dp-input"] && !H(g).enabled ? L(t.$slots, "trigger", { key: 0 }) : s("", !0), !t.$slots.trigger && (!H(g).enabled || H(g).input) ? (j(), c("div", ql, [
			!t.$slots.trigger && (!H(g).enabled || H(g).enabled && H(g).input) ? L(t.$slots, "dp-input", {
				key: 0,
				value: H(d),
				isMenuOpen: e.isMenuOpen,
				onInput: te,
				onEnter: ne,
				onTab: K,
				onClear: Y,
				onBlur: re,
				onKeypress: oe,
				onPaste: U,
				onFocus: q,
				openMenu: () => t.$emit("open"),
				closeMenu: () => t.$emit("close"),
				toggleMenu: () => t.$emit("toggle")
			}, () => [l("input", {
				id: H(x).id,
				ref: "dp-input",
				"data-test-id": "dp-input",
				name: H(x).name,
				class: C(z.value),
				inputmode: H(x).inputmode,
				placeholder: H(p).placeholder,
				disabled: H(N)(H(p).disabled),
				readonly: H(N)(H(p).readonly),
				required: H(N)(H(x).required),
				value: H(d),
				autocomplete: H(x).autocomplete,
				"aria-label": H(h).input,
				"aria-disabled": H(p).disabled || void 0,
				"aria-invalid": H(x).state === !1 || void 0,
				onInput: te,
				onBlur: re,
				onFocus: q,
				onKeypress: oe,
				onKeydown: n[0] ||= (e) => oe(e),
				onPaste: U,
				onInvalid: n[1] ||= (e) => H(u)("invalid", e)
			}, null, 42, Jl)]) : s("", !0),
			l("div", { onClick: n[4] ||= (e) => r("toggle") }, [t.$slots["input-icon"] && !H(x).hideInputIcon ? (j(), c("span", {
				key: 0,
				class: "dp__input_icon",
				onClick: n[2] ||= (e) => r("toggle")
			}, [L(t.$slots, "input-icon")])) : s("", !0), !t.$slots["input-icon"] && !H(x).hideInputIcon && !t.$slots["dp-input"] ? (j(), o(H(Lc), {
				key: 1,
				"aria-label": H(h)?.calendarIcon,
				class: "dp__input_icon dp__input_icons",
				onClick: n[3] ||= (e) => r("toggle")
			}, null, 8, ["aria-label"])) : s("", !0)]),
			t.$slots["clear-icon"] && (H(x).alwaysClearable || H(d) && H(x).clearable && !H(p).disabled && !H(p).readonly) ? (j(), c("span", Yl, [L(t.$slots, "clear-icon", { clear: Y })])) : s("", !0),
			!t.$slots["clear-icon"] && (H(x).alwaysClearable || H(x).clearable && H(d) && !H(p).disabled && !H(p).readonly) ? (j(), c("button", {
				key: 2,
				"aria-label": H(h)?.clearInput,
				class: "dp--clear-btn",
				type: "button",
				"data-test-id": "clear-input-value-btn",
				onKeydown: n[5] ||= (e) => H(A)(e, () => Y(e), !0, le),
				onClick: n[6] ||= ie((e) => Y(e), ["prevent"])
			}, [f(H(Rc), { class: "dp__input_icons" })], 40, Xl)) : s("", !0)
		])) : s("", !0)]));
	}
}), Ql = {
	ref: "action-row",
	class: "dp__action_row"
}, $l = ["title"], eu = {
	ref: "action-buttons-container",
	class: "dp__action_buttons",
	"data-dp-element": "action-row"
}, tu = ["disabled"], nu = /* @__PURE__ */ p({
	__name: "ActionRow",
	props: {
		menuMount: {
			type: Boolean,
			default: !1
		},
		calendarWidth: { default: 0 }
	},
	emits: [
		"close-picker",
		"select-date",
		"select-now"
	],
	setup(e, { emit: t }) {
		let r = t, i = e, { rootEmit: o, rootProps: u, modelValue: f, defaults: { actionRow: p, multiCalendars: m, inline: h, range: g, multiDates: _, formats: v } } = $(), { isTimeValid: y, isMonthValid: b } = il(), { formatPreview: S } = Ll(), { checkKeyDown: C, convertType: E } = Pl(), { boolHtmlAttribute: D } = Bl(), k = G("action-buttons-container"), M = G("action-row"), N = F(!1), P = F({});
		O(() => {
			I(), globalThis.addEventListener("resize", I);
		}), A(() => {
			globalThis.removeEventListener("resize", I);
		});
		let I = () => {
			N.value = !1, setTimeout(() => {
				let e = k.value?.getBoundingClientRect(), t = M.value?.getBoundingClientRect();
				e && t && (P.value.maxWidth = `${t.width - e.width - 20}px`), N.value = !0;
			}, 0);
		}, R = a(() => g.value.enabled && !g.value.partialRange && f.value ? f.value.length === 2 : !0), z = a(() => !y.value(f.value) || !b.value(f.value) || !R.value), V = () => {
			let e = v.value.preview;
			return u.timePicker || u.monthPicker, e(E(f.value));
		}, ee = () => {
			let e = f.value;
			return m.value.count > 0 ? `${S(e[0])} - ${S(e[1])}` : [S(e[0]), S(e[1])];
		}, U = a(() => !f.value || !i.menuMount ? "" : typeof v.value.preview == "string" ? Array.isArray(f.value) ? f.value.length === 2 && f.value[1] ? ee() : _.value.enabled ? f.value.map((e) => `${S(e)}`) : u.modelAuto ? `${S(f.value[0])}` : `${S(f.value[0])} -` : S(f.value) : V()), W = () => _.value.enabled ? "; " : " - ", te = a(() => Array.isArray(U.value) ? U.value.join(W()) : U.value), ne = () => {
			y.value(f.value) && b.value(f.value) && R.value ? r("select-date") : o("invalid-select");
		};
		return (e, t) => (j(), c("div", Ql, [e.$slots["action-row"] ? L(e.$slots, "action-row", w(x({ key: 0 }, {
			modelValue: H(f),
			disabled: z.value,
			selectDate: () => e.$emit("select-date"),
			closePicker: () => e.$emit("close-picker")
		}))) : (j(), c(n, { key: 1 }, [H(p).showPreview ? (j(), c("div", {
			key: 0,
			class: "dp__selection_preview",
			title: te.value || void 0,
			style: T(P.value)
		}, [e.$slots["action-preview"] && N.value ? L(e.$slots, "action-preview", {
			key: 0,
			value: H(f),
			formatValue: te.value
		}) : s("", !0), !e.$slots["action-preview"] && N.value ? (j(), c(n, { key: 1 }, [d(B(te.value), 1)], 64)) : s("", !0)], 12, $l)) : s("", !0), l("div", eu, [e.$slots["action-buttons"] ? L(e.$slots, "action-buttons", {
			key: 0,
			value: H(f),
			selectDate: ne,
			selectionDisabled: z.value
		}) : s("", !0), e.$slots["action-buttons"] ? s("", !0) : (j(), c(n, { key: 1 }, [
			!H(h).enabled && H(p).showCancel ? (j(), c("button", {
				key: 0,
				ref: "cancel-btn",
				type: "button",
				"data-dp-action-element": "0",
				class: "dp__action_button dp__action_cancel",
				onClick: t[0] ||= (t) => e.$emit("close-picker"),
				onKeydown: t[1] ||= (t) => H(C)(t, () => e.$emit("close-picker"))
			}, B(H(p).cancelBtnLabel), 545)) : s("", !0),
			H(p).showNow ? (j(), c("button", {
				key: 1,
				type: "button",
				"data-dp-action-element": "0",
				class: "dp__action_button dp__action_cancel",
				onClick: t[2] ||= (t) => e.$emit("select-now"),
				onKeydown: t[3] ||= (t) => H(C)(t, () => e.$emit("select-now"))
			}, B(H(p).nowBtnLabel), 33)) : s("", !0),
			H(p).showSelect ? (j(), c("button", {
				key: 2,
				ref: "select-btn",
				type: "button",
				"data-dp-action-element": "0",
				class: "dp__action_button dp__action_select",
				disabled: H(D)(z.value),
				"data-test-id": "select-button",
				onKeydown: t[4] ||= (e) => H(C)(e, () => ne()),
				onClick: ne
			}, B(H(p).selectBtnLabel), 41, tu)) : s("", !0)
		], 64))], 512)], 64))], 512));
	}
}), ru = () => {
	let { rootProps: e, defaults: { multiCalendars: t } } = $();
	return {
		hideNavigationButtons: a(() => (t) => e.hideNavigation?.includes(t)),
		showLeftIcon: a(() => (e) => t.value.count ? t.value.solo ? !0 : e === 0 : !0),
		showRightIcon: a(() => (e) => t.value.count ? t.value.solo ? !0 : e === t.value.count - 1 : !0)
	};
}, iu = [
	"role",
	"aria-label",
	"tabindex"
], au = { class: "dp__selection_grid_header" }, ou = [
	"aria-selected",
	"aria-disabled",
	"data-dp-action-element",
	"data-dp-element-active",
	"data-test-id",
	"onClick",
	"onKeydown",
	"onMouseover"
], su = ["aria-label", "data-dp-action-element"], cu = /* @__PURE__ */ p({
	__name: "SelectionOverlay",
	props: {
		items: {},
		type: {},
		useRelative: { type: Boolean },
		height: {},
		overlayLabel: {},
		isLast: { type: Boolean },
		level: {}
	},
	emits: [
		"selected",
		"toggle",
		"reset-flow",
		"hover-value"
	],
	setup(e, { emit: t }) {
		let r = t, i = e, { setState: o, defaults: { ariaLabels: u, config: f } } = $(), { hideNavigationButtons: p } = ru(), { handleEventPropagation: m, checkKeyDown: h } = Pl(), g = G("toggle-button"), _ = G("overlay-container"), v = G("grid-wrap"), y = F(!1), b = F(null), x = F(), w = F(0);
		D(() => {
			b.value = null;
		}), O(async () => {
			await S(), R(), o("arrowNavigationLevel", i.level ?? 1);
		}), A(() => {
			o("arrowNavigationLevel", (i.level ?? 1) - 1);
		});
		let E = a(() => ({
			dp__overlay: !0,
			"dp--overlay-absolute": !i.useRelative,
			"dp--overlay-relative": i.useRelative
		})), k = a(() => i.useRelative ? {
			height: `${i.height}px`,
			width: "var(--dp-menu-min-width)"
		} : void 0), M = a(() => ({ dp__overlay_col: !0 })), N = a(() => ({
			dp__btn: !0,
			dp__button: !0,
			dp__overlay_action: !0,
			dp__over_action_scroll: y.value,
			dp__button_bottom: i.isLast
		})), P = a(() => ({
			dp__overlay_container: !0,
			dp__container_flex: i.items?.length <= 6,
			dp__container_block: i.items?.length > 6
		}));
		K(() => i.items, () => R(!1), { deep: !0 });
		let R = (e = !0) => {
			S().then(() => {
				let t = document.querySelector(`[data-dp-element-active="${i.level ?? 1}"]`), n = ue(v), r = ue(g), a = ue(_), o = r ? r.getBoundingClientRect().height : 0;
				n && (n.getBoundingClientRect().height ? w.value = n.getBoundingClientRect().height - o : w.value = f.value.modeHeight - o), t && a && e && (a.scrollTop = t.offsetTop - a.offsetTop - (w.value / 2 - t.getBoundingClientRect().height) - o);
			});
		}, z = (e) => {
			e.disabled || r("selected", e.value);
		}, V = () => {
			r("toggle"), r("reset-flow");
		}, ee = (e) => {
			f.value.escClose && (V(), m(e, f.value));
		}, U = (e) => {
			x.value = e, r("hover-value", e);
		}, W = (e) => {
			if (e.key === Zc.esc) return ee(e);
		}, te = (e) => {
			if (e.key === Zc.enter) return V();
		};
		return (t, r) => (j(), c("div", {
			ref: "grid-wrap",
			class: C(E.value),
			style: T(k.value),
			role: e.useRelative ? void 0 : "dialog",
			"aria-label": e.overlayLabel,
			tabindex: e.useRelative ? void 0 : "0",
			onKeydown: W,
			onClick: r[0] ||= ie(() => {}, ["prevent"])
		}, [l("div", {
			ref: "overlay-container",
			class: C(P.value),
			style: T({ "--dp-overlay-height": `${w.value}px` }),
			role: "grid"
		}, [l("div", au, [L(t.$slots, "header")]), L(t.$slots, "overlay", {}, () => [(j(!0), c(n, null, I(e.items, (r, i) => (j(), c("div", {
			key: i,
			class: C(["dp__overlay_row", { dp__flex_row: e.items.length >= 3 }]),
			role: "row"
		}, [(j(!0), c(n, null, I(r, (n) => (j(), c("div", {
			key: n.value,
			role: "gridcell",
			class: C(M.value),
			"aria-selected": n.active || void 0,
			"aria-disabled": n.disabled || void 0,
			"data-dp-action-element": e.level ?? 1,
			"data-dp-element-active": n.active ? e.level ?? 1 : void 0,
			tabindex: "0",
			"data-test-id": n.text,
			onClick: ie((e) => z(n), ["prevent"]),
			onKeydown: (e) => H(h)(e, () => z(n), !0),
			onMouseover: (e) => U(n.value)
		}, [l("div", { class: C(n.className) }, [L(t.$slots, "item", { item: n }, () => [d(B(n.text), 1)])], 2)], 42, ou))), 128))], 2))), 128))])], 6), t.$slots["button-icon"] ? J((j(), c("button", {
			key: 0,
			ref: "toggle-button",
			type: "button",
			"aria-label": H(u)?.toggleOverlay,
			class: C(N.value),
			tabindex: "0",
			"data-dp-action-element": e.level ?? 1,
			onClick: V,
			onKeydown: te
		}, [L(t.$slots, "button-icon")], 42, su)), [[ne, !H(p)(e.type)]]) : s("", !0)], 46, iu));
	}
}), lu = ["data-dp-mobile"], uu = /* @__PURE__ */ p({
	__name: "InstanceWrap",
	props: {
		stretch: { type: Boolean },
		collapse: { type: Boolean }
	},
	setup(e) {
		let { defaults: { multiCalendars: t } } = $(), { isMobile: n } = Il(), r = a(() => t.value.count > 0 ? [...Array(t.value.count).keys()] : [0]);
		return (i, a) => (j(), c("div", {
			class: C({
				dp__menu_inner: !e.stretch,
				"dp--menu--inner-stretched": e.stretch,
				dp__flex_display: H(t).count > 0,
				"dp--flex-display-collapsed": e.collapse
			}),
			"data-dp-mobile": H(n)
		}, [L(i.$slots, "default", {
			instances: r.value,
			wrapClass: { dp__instance_calendar: H(t).count > 0 }
		})], 10, lu));
	}
}), du = [
	"data-dp-element",
	"aria-label",
	"aria-disabled"
], fu = /* @__PURE__ */ p({
	__name: "ArrowBtn",
	props: {
		ariaLabel: {},
		elName: {},
		disabled: { type: Boolean }
	},
	emits: ["activate", "set-ref"],
	setup(e, { emit: t }) {
		let { checkKeyDown: n } = Pl(), r = t;
		return (t, i) => (j(), c("button", {
			ref: "arrow-btn",
			type: "button",
			"data-dp-element": e.elName,
			"data-dp-action-element": "0",
			class: "dp__btn dp--arrow-btn-nav",
			tabindex: "0",
			"aria-label": e.ariaLabel,
			"aria-disabled": e.disabled || void 0,
			onClick: i[0] ||= (e) => r("activate"),
			onKeydown: i[1] ||= (e) => H(n)(e, () => r("activate"), !0)
		}, [l("span", { class: C(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }]) }, [L(t.$slots, "default")], 2)], 40, du));
	}
}), pu = ["aria-label", "data-test-id"], mu = /* @__PURE__ */ p({
	__name: "YearModePicker",
	props: {
		items: {},
		instance: {},
		year: {},
		showYearPicker: {
			type: Boolean,
			default: !1
		},
		isDisabled: {}
	},
	emits: [
		"handle-year",
		"year-select",
		"toggle-year-picker"
	],
	setup(e, { emit: t }) {
		let r = t, p = e, { showRightIcon: m, showLeftIcon: h } = ru(), { rootProps: g, defaults: { config: _, ariaLabels: v, ui: y } } = $(), { showTransition: b, transitionName: x } = nl(), { formatYear: S } = Ll(), { boolHtmlAttribute: w } = Bl(), T = F(!1), E = a(() => S(p.year)), D = (e = !1, t) => {
			T.value = !T.value, r("toggle-year-picker", {
				flow: e,
				show: t
			});
		}, O = (e) => {
			T.value = !1, r("year-select", e);
		}, k = (e = !1) => {
			r("handle-year", e);
		};
		return (t, r) => (j(), c(n, null, [l("div", { class: C(["dp--year-mode-picker", { "dp--hidden-el": T.value }]) }, [
			H(h)(e.instance) ? (j(), o(fu, {
				key: 0,
				ref: "mpPrevIconRef",
				"aria-label": H(v)?.prevYear,
				disabled: H(w)(e.isDisabled(!1)),
				class: C(H(y)?.navBtnPrev),
				onActivate: r[0] ||= (e) => k(!1)
			}, {
				default: q(() => [t.$slots["arrow-left"] ? L(t.$slots, "arrow-left", { key: 0 }) : s("", !0), t.$slots["arrow-left"] ? s("", !0) : (j(), o(H(zc), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : s("", !0),
			l("button", {
				ref: "mpYearButtonRef",
				class: "dp__btn dp--year-select",
				type: "button",
				"aria-label": `${e.year}-${H(v)?.openYearsOverlay}`,
				"data-test-id": `year-mode-btn-${e.instance}`,
				"data-dp-action-element": "0",
				onClick: r[1] ||= () => D(!1),
				onKeydown: r[2] ||= re(ie(() => D(!1), ["prevent"]), ["enter"])
			}, [t.$slots.year ? L(t.$slots, "year", {
				key: 0,
				text: E.value,
				value: e.year
			}) : s("", !0), t.$slots.year ? s("", !0) : (j(), c(n, { key: 1 }, [d(B(e.year), 1)], 64))], 40, pu),
			H(m)(e.instance) ? (j(), o(fu, {
				key: 1,
				ref: "mpNextIconRef",
				"aria-label": H(v)?.nextYear,
				disabled: H(w)(e.isDisabled(!0)),
				class: C(H(y)?.navBtnNext),
				onActivate: r[3] ||= (e) => k(!0)
			}, {
				default: q(() => [t.$slots["arrow-right"] ? L(t.$slots, "arrow-right", { key: 0 }) : s("", !0), t.$slots["arrow-right"] ? s("", !0) : (j(), o(H(Bc), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : s("", !0)
		], 2), f(i, {
			name: H(x)(e.showYearPicker),
			css: H(b)
		}, {
			default: q(() => [e.showYearPicker ? (j(), o(cu, {
				key: 0,
				items: e.items,
				config: H(_),
				"is-last": H(g).autoApply && !H(_).keepActionRow,
				"overlay-label": H(v)?.yearPicker?.(!0),
				type: "year",
				onToggle: D,
				onSelected: r[4] ||= (e) => O(e)
			}, u({
				"button-icon": q(() => [t.$slots["calendar-icon"] ? L(t.$slots, "calendar-icon", { key: 0 }) : s("", !0), t.$slots["calendar-icon"] ? s("", !0) : (j(), o(H(Lc), { key: 1 }))]),
				_: 2
			}, [t.$slots["year-overlay-value"] ? {
				name: "item",
				fn: q(({ item: e }) => [L(t.$slots, "year-overlay-value", {
					text: e.text,
					value: e.value
				})]),
				key: "0"
			} : void 0]), 1032, [
				"items",
				"config",
				"is-last",
				"overlay-label"
			])) : s("", !0)]),
			_: 3
		}, 8, ["name", "css"])], 64));
	}
}), hu = (e) => {
	let { getDate: t, rootEmit: n, state: r, month: i, year: o, modelValue: s, calendars: c, rootProps: l, defaults: { multiCalendars: u, range: d, safeDates: f, filters: p, highlight: m } } = $(), { resetDate: h, getYearFromDate: g, checkHighlightYear: _, groupListAndMap: v } = Fl(), { getYears: y } = Rl(), { validateMonthYear: b, checkMinMaxValue: x } = il(), S = F([!1]), C = a(() => y()), w = a(() => (e, n) => {
		let r = Q(h(t()), {
			month: i.value(e),
			year: o.value(e)
		}), a = n ? Na(r) : Pa(r);
		return b(a, l.preventMinMaxNavigation, n);
	}), T = () => Array.isArray(s.value) && u.value.solo && s.value[1], E = () => {
		for (let e = 0; e < u.value.count; e++) if (e === 0) c.value[e] = c.value[0];
		else if (e === u.value.count - 1 && T()) c.value[e] = {
			month: Mo(s.value[1]),
			year: Z(s.value[1])
		};
		else {
			let n = Q(t(), c.value[e - 1]);
			c.value[e] = {
				month: Mo(n),
				year: Z(ba(n, 1))
			};
		}
	}, D = (e) => {
		if (!e) return E();
		let n = Q(t(), c.value[e]);
		return c.value[0].year = Z(Sc(n, u.value.count - 1)), E();
	}, k = (e, t) => {
		let n = Da(t, e);
		return d.value.showLastInRange && n > 1 ? t : e;
	}, A = (e) => l.focusStartDate || u.value.solo ? e[0] : e[1] ? k(e[0], e[1]) : e[0], j = () => {
		if (s.value) {
			let e = Array.isArray(s.value) ? A(s.value) : s.value;
			c.value[0] = {
				month: Mo(e),
				year: Z(e)
			};
		}
	}, M = () => {
		j(), u.value.count && E();
	};
	K(s, (e, t) => {
		r.isTextInputDate && JSON.stringify(e ?? {}) !== JSON.stringify(t ?? {}) && M();
	}), O(() => {
		M();
	});
	let N = (e, t) => {
		c.value[t].year = e, n("update-month-year", {
			instance: t,
			year: e,
			month: c.value[t].month
		}), u.value.count && !u.value.solo && D(t);
	}, P = a(() => (e) => v(C.value, (t) => ({
		active: o.value(e) === t.value,
		disabled: x(t.value, g(f.value.minDate), g(f.value.maxDate)) || p.value.years?.includes(o.value(e)),
		highlighted: _(m.value, t.value)
	}))), I = (e, t) => {
		N(e, t), R(t);
	}, L = (e, t = !1) => {
		if (!w.value(e, t)) {
			let n = t ? o.value(e) + 1 : o.value(e) - 1;
			N(n, e);
		}
	}, R = (t, r = !1, i) => {
		r || e("reset-flow"), i === void 0 ? S.value[t] = !S.value[t] : S.value[t] = i, S.value[t] ? n("overlay-toggle", {
			open: !0,
			overlay: Jc.year
		}) : n("overlay-toggle", {
			open: !1,
			overlay: Jc.year
		});
	};
	return {
		isDisabled: w,
		groupedYears: P,
		showYearPicker: S,
		selectYear: N,
		setStartDate: () => {
			l.startDate && (s.value && l.focusStartDate || !s.value) && N(Z(t(l.startDate)), 0);
		},
		toggleYearPicker: R,
		handleYearSelect: I,
		handleYear: L
	};
}, gu = () => {
	let { isDateAfter: e, isDateBefore: t, isDateEqual: n } = Fl(), { getDate: r, rootEmit: i, rootProps: a, modelValue: o, defaults: { range: s } } = $();
	return {
		getRangeWithFixedDate: (r) => Array.isArray(o.value) && (o.value.length === 2 || o.value.length === 1 && s.value.partialRange) ? s.value.fixedStart && (e(r, o.value[0]) || n(r, o.value[0])) ? [o.value[0], r] : s.value.fixedEnd && (t(r, o.value[1]) || n(r, o.value[1])) ? [r, o.value[1]] : (i("invalid-fixed-range", r), o.value) : [],
		setPresetDate: (e) => {
			Array.isArray(e.value) && e.value.length <= 2 && s.value.enabled ? o.value = e.value.map((e) => r(e)) : Array.isArray(e.value) || (o.value = r(e.value));
		},
		checkRangeAutoApply: (e, t, n) => {
			s && (e[0] && e[1] && a.autoApply && t("auto-apply", n), e[0] && !e[1] && (a.modelAuto || s.value.partialRange) && a.autoApply && t("auto-apply", n));
		},
		setMonthOrYearRange: (e) => {
			let n = o.value ? o.value.slice() : [];
			return n.length === 2 && n[1] !== null && (n = []), n.length ? (t(e, n[0]) ? n.unshift(e) : n[1] = e, i("range-end", e)) : (n = [e], i("range-start", e)), n;
		},
		handleMultiDatesSelect: (e, t) => {
			if (o.value && Array.isArray(o.value)) {
				if (o.value.some((t) => n(e, t))) {
					let t = o.value.filter((t) => !n(t, e));
					o.value = t.length ? t : null;
				} else (t && +t > o.value.length || !t) && o.value.push(e);
			} else o.value = [e];
		}
	};
}, _u = (e, t) => {
	let { getDate: n, rootEmit: r, state: i, calendars: o, year: s, modelValue: c, rootProps: l, defaults: { range: u, highlight: d, safeDates: f, filters: p, multiDates: m } } = $();
	rl(() => {
		i.isTextInputDate && L(Z(n(l.startDate)), 0);
	});
	let { checkMinMaxRange: h, checkMinMaxValue: g } = il(), { isDateBetween: _, resetDateTime: v, resetDate: y, getMinMonth: b, getMaxMonth: x, checkHighlightMonth: C, groupListAndMap: w } = Fl(), { checkRangeAutoApply: T, getRangeWithFixedDate: E, handleMultiDatesSelect: D, setMonthOrYearRange: k, setPresetDate: A } = gu(), { padZero: j } = Pl(), { getMonths: M, isOutOfYearRange: N } = Rl(), P = a(() => M()), I = F(null), { selectYear: L, groupedYears: R, showYearPicker: z, toggleYearPicker: B, handleYearSelect: V, handleYear: ee, isDisabled: H, setStartDate: U } = hu(t);
	O(() => {
		U();
	});
	let W = (e) => e ? {
		month: Mo(e),
		year: Z(e)
	} : {
		month: null,
		year: null
	}, G = () => c.value ? Array.isArray(c.value) ? c.value.map((e) => W(e)) : W(c.value) : W(), te = (e, t) => {
		let n = o.value[e], r = G();
		return Array.isArray(r) ? r.some((e) => e.year === n?.year && e.month === t) : n?.year === r.year && t === r.month;
	}, ne = (e, t, n) => {
		let r = G();
		return Array.isArray(r) ? s.value(t) === r[n]?.year && e === r[n]?.month : !1;
	}, K = (e, t) => {
		if (u.value.enabled) {
			let r = G();
			if (Array.isArray(c.value) && Array.isArray(r)) {
				let r = ne(e, t, 0) || ne(e, t, 1), i = Q(y(n()), {
					month: e,
					year: s.value(t)
				});
				return _(c.value, I.value, i) && !r;
			}
			return !1;
		}
		return !1;
	}, q = a(() => (e) => w(P.value, (t) => ({
		active: te(e, t.value),
		disabled: g(t.value, b(s.value(e), f.value.minDate), x(s.value(e), f.value.maxDate)) || ue(f.value.disabledDates, s.value(e), t.value) || p.value.months?.includes(t.value) || !de(f.value.allowedDates, s.value(e), t.value) || N(s.value(e)),
		isBetween: K(t.value, e),
		highlighted: C(d.value, t.value, s.value(e))
	}))), J = (e, t) => Q(y(n()), {
		month: e,
		year: s.value(t)
	}), re = (e, r) => {
		let i = c.value ? c.value : y(n());
		c.value = Q(i, {
			month: e,
			year: s.value(r)
		}), t("auto-apply"), t("update-flow-step");
	}, ie = (e, n) => {
		let r = J(e, n);
		u.value.fixedEnd || u.value.fixedStart ? c.value = E(r) : c.value ? h(r, c.value) && (c.value = k(J(e, n))) : c.value = [J(e, n)], S().then(() => {
			T(c.value, t, c.value.length < 2);
		});
	}, Y = (e, n) => {
		D(J(e, n), m.value.limit), t("auto-apply", !0);
	}, ae = (e, t) => (o.value[t].month = e, se(t, o.value[t].year, e), m.value.enabled ? Y(e, t) : u.value.enabled ? ie(e, t) : re(e, t)), oe = (e, t) => {
		L(e, t), se(t, e, null);
	}, se = (e, t, n) => {
		let i = n;
		if (!i && i !== 0) {
			let t = G();
			i = Array.isArray(t) ? t[e].month : t.month;
		}
		r("update-month-year", {
			instance: e,
			year: t,
			month: i
		});
	}, ce = (e, t) => {
		I.value = J(e, t);
	}, le = (e) => {
		A({ value: e }), t("auto-apply");
	}, ue = (e, t, r) => {
		if (e instanceof Map) {
			let n = `${j(r + 1)}-${t}`;
			return e.size ? e.has(n) : !1;
		}
		return typeof e == "function" && e(v(Q(n(), {
			month: r,
			year: t
		}), !0));
	}, de = (e, t, n) => {
		if (e instanceof Map) {
			let r = `${j(n + 1)}-${t}`;
			return !e.size || e.has(r);
		}
		return !0;
	};
	return {
		groupedMonths: q,
		groupedYears: R,
		year: s,
		isDisabled: H,
		showYearPicker: z,
		modelValue: c,
		toggleYearPicker: B,
		handleYearSelect: V,
		handleYear: ee,
		presetDate: le,
		setHoverDate: ce,
		selectMonth: ae,
		selectYear: oe,
		getModelMonthYear: G
	};
}, vu = /* @__PURE__ */ p({
	__name: "MonthPicker",
	props: {
		flowStep: {},
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: [
		"reset-flow",
		"auto-apply",
		"update-flow-step",
		"mount"
	],
	setup(e, { expose: t, emit: r }) {
		let i = r, a = e, l = W(), { rootProps: d, defaults: { config: p } } = $(), m = Gl(l, Hl.YearMode);
		O(() => {
			i("mount");
		});
		let { groupedMonths: h, groupedYears: g, year: _, isDisabled: v, showYearPicker: y, modelValue: b, presetDate: S, setHoverDate: w, selectMonth: T, selectYear: E, toggleYearPicker: D, handleYearSelect: k, handleYear: A, getModelMonthYear: M } = _u(a, i);
		return t({
			getSidebarProps: () => ({
				modelValue: b,
				year: _,
				getModelMonthYear: M,
				selectMonth: T,
				selectYear: E,
				handleYear: A
			}),
			presetDate: S,
			toggleYearPicker: (e) => D(0, e)
		}), (t, r) => (j(), o(uu, {
			collapse: e.collapse,
			stretch: ""
		}, {
			default: q(({ instances: r, wrapClass: i }) => [(j(!0), c(n, null, I(r, (n) => (j(), c("div", {
				key: n,
				class: C(i)
			}, [t.$slots["top-extra"] ? L(t.$slots, "top-extra", {
				key: 0,
				value: H(b)
			}) : s("", !0), L(t.$slots, "month-year", x({ ref_for: !0 }, {
				year: H(_),
				months: H(h)(n),
				years: H(g)(n),
				selectMonth: H(T),
				selectYear: H(E),
				instance: n
			}), () => [f(cu, {
				items: H(h)(n),
				"is-last": H(d).autoApply && !H(p).keepActionRow,
				height: H(p).modeHeight,
				"no-overlay-focus": !!(e.noOverlayFocus || H(d).textInput),
				"use-relative": "",
				level: 0,
				type: "month",
				onSelected: (e) => H(T)(e, n),
				onHoverValue: (e) => H(w)(e, n)
			}, u({
				header: q(() => [f(mu, {
					items: H(g)(n),
					instance: n,
					"show-year-picker": H(y)[n],
					year: H(_)(n),
					"is-disabled": (e) => H(v)(n, e),
					onHandleYear: (e) => H(A)(n, e),
					onYearSelect: (e) => H(k)(e, n),
					onToggleYearPicker: (e) => H(D)(n, e?.flow, e?.show)
				}, u({ _: 2 }, [I(H(m), (e, n) => ({
					name: e,
					fn: q((n) => [L(t.$slots, e, x({ ref_for: !0 }, n))])
				}))]), 1032, [
					"items",
					"instance",
					"show-year-picker",
					"year",
					"is-disabled",
					"onHandleYear",
					"onYearSelect",
					"onToggleYearPicker"
				])]),
				_: 2
			}, [t.$slots["month-overlay-value"] ? {
				name: "item",
				fn: q(({ item: e }) => [L(t.$slots, "month-overlay-value", {
					text: e.text,
					value: e.value
				})]),
				key: "0"
			} : void 0]), 1032, [
				"items",
				"is-last",
				"height",
				"no-overlay-focus",
				"onSelected",
				"onHoverValue"
			])])], 2))), 128))]),
			_: 3
		}, 8, ["collapse"]));
	}
}), yu = (e, t) => {
	let { rootEmit: n, getDate: r, state: i, modelValue: o, rootProps: s, defaults: { highlight: c, multiDates: l, filters: u, range: d, safeDates: f } } = $(), { getYears: p } = Rl(), { isDateBetween: m, resetDate: h, resetDateTime: g, getYearFromDate: _, checkHighlightYear: v, groupListAndMap: y } = Fl(), { checkRangeAutoApply: b, setMonthOrYearRange: x } = gu(), { checkMinMaxValue: C, checkMinMaxRange: w } = il();
	rl(() => {
		i.isTextInputDate && (E.value = Z(r(s.startDate)));
	});
	let T = F(null), E = F();
	O(() => {
		s.startDate && (o.value && s.focusStartDate || !o.value) && (E.value = Z(r(s.startDate)));
	});
	let D = (e) => Array.isArray(o.value) ? o.value.some((t) => Z(t) === e) : o.value ? Z(o.value) === e : !1, k = (e) => d.value.enabled && Array.isArray(o.value) ? m(o.value, T.value, N(e)) : !1, A = (e) => !f.value.allowedDates?.size || f.value.allowedDates.has(`${e}`), j = (e) => f.value.disabledDates instanceof Map ? f.value.disabledDates.size ? f.value.disabledDates.has(`${e}`) : !1 : typeof f.value.disabledDates != "function" || f.value.disabledDates(yc(g(Pa(r())), e)), M = a(() => y(p(), (e) => {
		let t = D(e.value);
		return {
			active: t,
			disabled: C(e.value, _(f.value.minDate), _(f.value.maxDate)) || u.value.years.includes(e.value) || !A(e.value) || j(e.value),
			isBetween: k(e.value) && !t,
			highlighted: v(c.value, e.value)
		};
	})), N = (e) => yc(h(Pa(r())), e);
	return {
		groupedYears: M,
		focusYear: E,
		setHoverValue: (e) => {
			T.value = yc(h(r()), e);
		},
		selectYear: (e) => {
			if (n("update-month-year", {
				instance: 0,
				year: e,
				month: NaN
			}), l.value.enabled) return o.value ? Array.isArray(o.value) && ((o.value?.map((e) => Z(e))).includes(e) ? o.value = o.value.filter((t) => Z(t) !== e) : o.value.push(yc(g(r()), e))) : o.value = [yc(g(Pa(r())), e)], t("auto-apply", !0);
			d.value.enabled ? w(N(e), o.value) && (o.value = x(N(e)), S().then(() => {
				b(o.value, t, o.value.length < 2);
			})) : (o.value = N(e), t("auto-apply"));
		}
	};
}, bu = /* @__PURE__ */ p({
	__name: "YearPicker",
	props: {
		flowStep: {},
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["reset-flow", "auto-apply"],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = e, { modelValue: a, defaults: { config: l }, rootProps: d } = $(), { groupedYears: f, focusYear: p, selectYear: m, setHoverValue: h } = yu(i, r);
		return t({ getSidebarProps: () => ({
			modelValue: a,
			selectYear: m
		}) }), (t, n) => (j(), c("div", null, [t.$slots["top-extra"] ? L(t.$slots, "top-extra", {
			key: 0,
			value: H(a)
		}) : s("", !0), t.$slots["month-year"] ? L(t.$slots, "month-year", w(x({ key: 1 }, {
			years: H(f),
			selectYear: H(m)
		}))) : (j(), o(cu, {
			key: 2,
			items: H(f),
			"is-last": H(d).autoApply && !H(l).keepActionRow,
			height: H(l).modeHeight,
			"no-overlay-focus": !!(e.noOverlayFocus || H(d).textInput),
			"focus-value": H(p),
			type: "year",
			"use-relative": "",
			onSelected: H(m),
			onHoverValue: H(h)
		}, u({ _: 2 }, [t.$slots["year-overlay-value"] ? {
			name: "item",
			fn: q(({ item: e }) => [L(t.$slots, "year-overlay-value", {
				text: e.text,
				value: e.value
			})]),
			key: "0"
		} : void 0]), 1032, [
			"items",
			"is-last",
			"height",
			"no-overlay-focus",
			"focus-value",
			"onSelected",
			"onHoverValue"
		]))]));
	}
}), xu = {
	key: 0,
	class: "dp__time_input"
}, Su = ["data-compact", "data-collapsed"], Cu = [
	"data-test-id",
	"aria-label",
	"data-dp-action-element",
	"onKeydown",
	"onClick",
	"onMousedown"
], wu = [
	"aria-label",
	"disabled",
	"data-dp-action-element",
	"data-test-id",
	"onKeydown",
	"onClick"
], Tu = [
	"data-test-id",
	"aria-label",
	"data-dp-action-element",
	"onKeydown",
	"onClick",
	"onMousedown"
], Eu = { key: 0 }, Du = [
	"aria-label",
	"data-dp-action-element",
	"data-compact"
], Ou = /* @__PURE__ */ p({
	__name: "TimeInput",
	props: {
		hours: {},
		minutes: {},
		seconds: {},
		order: {},
		closeTimePickerBtn: {},
		disabledTimesConfig: {},
		validateTime: {}
	},
	emits: [
		"update:hours",
		"update:minutes",
		"update:seconds",
		"overlay-opened",
		"overlay-closed",
		"set-hours",
		"set-minutes",
		"reset-flow",
		"mounted"
	],
	setup(e, { expose: t, emit: r }) {
		let p = r, m = e, { getDate: h, rootEmit: g, rootProps: _, defaults: { ariaLabels: v, filters: y, config: b, range: x, multiCalendars: S, timeConfig: w } } = $(), { checkKeyDown: T, hoursToAmPmHours: E } = Pl(), { boolHtmlAttribute: D } = Bl(), { sanitizeTime: k, groupListAndMap: A } = Fl(), { transitionName: M, showTransition: P } = nl(), R = N({
			hours: !1,
			minutes: !1,
			seconds: !1
		}), V = F("AM"), ee = F(null), U = F(), W = F(!1);
		O(() => {
			p("mounted");
		});
		let G = (e) => Q(h(), {
			hours: e.hours,
			minutes: e.minutes,
			seconds: w.value.enableSeconds ? e.seconds : 0,
			milliseconds: 0
		}), te = a(() => _.timePicker || w.value.timePickerInline ? 0 : 1), ne = a(() => (e) => fe(e, m[e]) || J(e, m[e])), K = a(() => ({
			hours: m.hours,
			minutes: m.minutes,
			seconds: m.seconds
		})), J = (e, t) => x.value.enabled && !x.value.disableTimeRangeValidation ? !m.validateTime(e, t) : !1, re = (e, t) => {
			if (x.value.enabled && !x.value.disableTimeRangeValidation) {
				let n = t ? +w.value[`${e}Increment`] : -+w.value[`${e}Increment`], r = m[e] + n;
				return !m.validateTime(e, r);
			}
			return !1;
		}, ie = a(() => (e) => !_e(+m[e] + +w.value[`${e}Increment`], e) || re(e, !0)), Y = a(() => (e) => !_e(m[e] - +w.value[`${e}Increment`], e) || re(e, !1)), ae = (e, t) => ca(Q(h(), e), t), oe = (e, t) => xc(Q(h(), e), t), se = a(() => ({
			dp__time_col: !0,
			dp__time_col_block: !w.value.timePickerInline,
			dp__time_col_reg_block: !w.value.enableSeconds && w.value.is24 && !w.value.timePickerInline,
			dp__time_col_reg_inline: !w.value.enableSeconds && w.value.is24 && w.value.timePickerInline,
			dp__time_col_reg_with_button: !w.value.enableSeconds && !w.value.is24,
			dp__time_col_sec: w.value.enableSeconds && w.value.is24,
			dp__time_col_sec_with_button: w.value.enableSeconds && !w.value.is24
		})), ce = a(() => w.value.timePickerInline && x.value.enabled && !S.value.count), le = a(() => {
			let e = [{ type: "hours" }];
			return w.value.enableMinutes && e.push({
				type: "",
				separator: !0
			}, { type: "minutes" }), w.value.enableSeconds && e.push({
				type: "",
				separator: !0
			}, { type: "seconds" }), e;
		}), ue = a(() => le.value.filter((e) => !e.separator)), de = a(() => (e) => {
			if (e === "hours") {
				let e = Ce(+m.hours);
				return {
					text: e < 10 ? `0${e}` : `${e}`,
					value: e
				};
			}
			return {
				text: m[e] < 10 ? `0${m[e]}` : `${m[e]}`,
				value: m[e]
			};
		}), fe = (e, t) => {
			if (!m.disabledTimesConfig) return !1;
			let n = m.disabledTimesConfig(m.order, e === "hours" ? t : void 0);
			return !n[e] || !!n[e]?.includes(t);
		}, pe = (e, t) => t !== "hours" || V.value === "AM" ? e : e + 12, me = (e) => {
			let t = w.value.is24 ? 24 : 12, n = e === "hours" ? t : 60, r = +w.value[`${e}GridIncrement`], i = e === "hours" && !w.value.is24 ? r : 0, a = [];
			for (let t = i; t < n; t += r) a.push({
				value: w.value.is24 ? t : pe(t, e),
				text: t < 10 ? `0${t}` : `${t}`
			});
			return e === "hours" && !w.value.is24 && a.unshift({
				value: V.value === "PM" ? 12 : 0,
				text: "12"
			}), A(a, (t) => ({
				active: !1,
				disabled: y.value.times[e].includes(t.value) || !_e(t.value, e) || fe(e, t.value) || J(e, t.value)
			}));
		}, he = (e) => e >= 0 ? e : 59, ge = (e) => e >= 0 ? e : 23, _e = (e, t) => {
			let n = _.minTime ? G(k(_.minTime)) : null, r = _.maxTime ? G(k(_.maxTime)) : null, i = G(k(K.value, t, t === "minutes" || t === "seconds" ? he(e) : ge(e)));
			return n && r ? (Fo(i, r) || Io(i, r)) && (Po(i, n) || Io(i, n)) : n ? Po(i, n) || Io(i, n) : !r || Fo(i, r) || Io(i, r);
		}, ve = (e) => w.value[`no${e[0].toUpperCase() + e.slice(1)}Overlay`], ye = (e) => {
			ve(e) || (R[e] = !R[e], R[e] ? (W.value = !0, p("overlay-opened", e)) : (W.value = !1, p("overlay-closed", e)));
		}, be = (e) => e === "hours" ? ko : e === "minutes" ? jo : No, xe = () => {
			U.value && clearTimeout(U.value);
		}, Se = (e, t = !0, n) => {
			let r = t ? ae : oe, i = t ? +w.value[`${e}Increment`] : -+w.value[`${e}Increment`];
			_e(+m[e] + i, e) && p(`update:${e}`, be(e)(r({ [e]: +m[e] }, { [e]: +w.value[`${e}Increment`] }))), !n?.keyboard && b.value.timeArrowHoldThreshold && (U.value = setTimeout(() => {
				Se(e, t);
			}, b.value.timeArrowHoldThreshold));
		}, Ce = (e) => w.value.is24 ? e : (e >= 12 ? V.value = "PM" : V.value = "AM", E(e)), we = () => {
			V.value === "PM" ? (V.value = "AM", p("update:hours", m.hours - 12)) : (V.value = "PM", p("update:hours", m.hours + 12)), g("am-pm-change", V.value);
		}, Te = (e) => {
			R[e] = !0;
		}, Ee = (e, t) => (ye(e), p(`update:${e}`, t));
		return t({ openChildCmp: Te }), (e, t) => H(_).disabled ? s("", !0) : (j(), c("div", xu, [
			(j(!0), c(n, null, I(le.value, (r, i) => (j(), c("div", {
				key: i,
				class: C(se.value),
				"data-compact": ce.value && !H(w).enableSeconds,
				"data-collapsed": ce.value && H(w).enableSeconds
			}, [r.separator ? (j(), c(n, { key: 0 }, [W.value ? s("", !0) : (j(), c(n, { key: 0 }, [d(":")], 64))], 64)) : (j(), c(n, { key: 1 }, [
				l("button", {
					type: "button",
					class: C({
						dp__btn: !0,
						dp__inc_dec_button: !H(w).timePickerInline,
						dp__inc_dec_button_inline: H(w).timePickerInline,
						dp__tp_inline_btn_top: H(w).timePickerInline,
						dp__inc_dec_button_disabled: ie.value(r.type),
						"dp--hidden-el": W.value
					}),
					"data-test-id": `${r.type}-time-inc-btn-${m.order}`,
					"aria-label": H(v)?.incrementValue(r.type),
					tabindex: "0",
					"data-dp-action-element": te.value,
					onKeydown: (e) => H(T)(e, () => Se(r.type, !0, { keyboard: !0 }), !0),
					onClick: (e) => H(b).timeArrowHoldThreshold ? void 0 : Se(r.type, !0),
					onMousedown: (e) => H(b).timeArrowHoldThreshold ? Se(r.type, !0) : void 0,
					onMouseup: xe
				}, [H(w).timePickerInline ? L(e.$slots, "tp-inline-arrow-up", { key: 1 }, () => [t[2] ||= l("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), t[3] ||= l("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1)]) : L(e.$slots, "arrow-up", { key: 0 }, () => [f(H(Hc))])], 42, Cu),
				l("button", {
					type: "button",
					"aria-label": `${de.value(r.type).text}-${H(v)?.openTpOverlay(r.type)}`,
					class: C({
						dp__time_display: !0,
						dp__time_display_block: !H(w).timePickerInline,
						dp__time_display_inline: H(w).timePickerInline,
						"dp--time-invalid": ne.value(r.type),
						"dp--time-overlay-btn": !ne.value(r.type),
						"dp--hidden-el": W.value
					}),
					disabled: H(D)(ve(r.type)),
					tabindex: "0",
					"data-dp-action-element": te.value,
					"data-test-id": `${r.type}-toggle-overlay-btn-${m.order}`,
					onKeydown: (e) => H(T)(e, () => ye(r.type), !0),
					onClick: (e) => ye(r.type)
				}, [L(e.$slots, r.type, {
					text: de.value(r.type).text,
					value: de.value(r.type).value
				}, () => [d(B(de.value(r.type).text), 1)])], 42, wu),
				l("button", {
					type: "button",
					class: C({
						dp__btn: !0,
						dp__inc_dec_button: !H(w).timePickerInline,
						dp__inc_dec_button_inline: H(w).timePickerInline,
						dp__tp_inline_btn_bottom: H(w).timePickerInline,
						dp__inc_dec_button_disabled: Y.value(r.type),
						"dp--hidden-el": W.value
					}),
					"data-test-id": `${r.type}-time-dec-btn-${m.order}`,
					"aria-label": H(v)?.decrementValue(r.type),
					tabindex: "0",
					"data-dp-action-element": te.value,
					onKeydown: (e) => H(T)(e, () => Se(r.type, !1, { keyboard: !0 }), !0),
					onClick: (e) => H(b).timeArrowHoldThreshold ? void 0 : Se(r.type, !1),
					onMousedown: (e) => H(b).timeArrowHoldThreshold ? Se(r.type, !1) : void 0,
					onMouseup: xe
				}, [H(w).timePickerInline ? L(e.$slots, "tp-inline-arrow-down", { key: 1 }, () => [t[4] ||= l("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), t[5] ||= l("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1)]) : L(e.$slots, "arrow-down", { key: 0 }, () => [f(H(Uc))])], 42, Tu)
			], 64))], 10, Su))), 128)),
			H(w).is24 ? s("", !0) : (j(), c("div", Eu, [L(e.$slots, "am-pm-button", {
				toggle: we,
				value: V.value
			}, () => [l("button", {
				ref_key: "amPmButton",
				ref: ee,
				type: "button",
				class: "dp__pm_am_button",
				role: "button",
				"aria-label": H(v)?.amPmButton,
				tabindex: "0",
				"data-dp-action-element": te.value,
				"data-compact": ce.value,
				onClick: we,
				onKeydown: t[0] ||= (e) => H(T)(e, () => we(), !0)
			}, B(V.value), 41, Du)])])),
			(j(!0), c(n, null, I(ue.value, (n, r) => (j(), o(i, {
				key: r,
				name: H(M)(R[n.type]),
				css: H(P)
			}, {
				default: q(() => [R[n.type] ? (j(), o(cu, {
					key: 0,
					items: me(n.type),
					"is-last": H(_).autoApply && !H(b).keepActionRow,
					type: n.type,
					"aria-labels": H(v),
					level: H(w).timePickerInline || H(_).timePicker ? 1 : 2,
					"overlay-label": H(v).timeOverlay?.(n.type),
					onSelected: (e) => Ee(n.type, e),
					onToggle: (e) => ye(n.type),
					onResetFlow: t[1] ||= (t) => e.$emit("reset-flow")
				}, u({
					"button-icon": q(() => [L(e.$slots, "clock-icon", {}, () => [e.$slots["clock-icon"] ? s("", !0) : (j(), o(z(H(w).timePickerInline ? H(Lc) : H(Vc)), { key: 0 }))])]),
					_: 2
				}, [e.$slots[`${n.type}-overlay-value`] ? {
					name: "item",
					fn: q(({ item: t }) => [L(e.$slots, `${n.type}-overlay-value`, {
						text: t.text,
						value: t.value
					})]),
					key: "0"
				} : void 0, e.$slots[`${n.type}-overlay-header`] ? {
					name: "header",
					fn: q(() => [L(e.$slots, `${n.type}-overlay-header`, { toggle: () => ye(n.type) })]),
					key: "1"
				} : void 0]), 1032, [
					"items",
					"is-last",
					"type",
					"aria-labels",
					"level",
					"overlay-label",
					"onSelected",
					"onToggle"
				])) : s("", !0)]),
				_: 2
			}, 1032, ["name", "css"]))), 128))
		]));
	}
}), ku = ["data-dp-mobile"], Au = ["aria-label", "tabindex"], ju = [
	"role",
	"aria-label",
	"tabindex"
], Mu = ["aria-label"], Nu = /* @__PURE__ */ p({
	__name: "TimePicker",
	props: {
		hours: {},
		minutes: {},
		seconds: {},
		disabledTimesConfig: { type: [Function, null] },
		noOverlayFocus: { type: Boolean },
		validateTime: { type: Function }
	},
	emits: [
		"update:hours",
		"update:minutes",
		"update:seconds",
		"mount",
		"reset-flow"
	],
	setup(e, { expose: t, emit: r }) {
		let d = r, p = e, { rootEmit: m, setState: h, modelValue: g, rootProps: _, defaults: { ariaLabels: v, textInput: y, config: b, range: w, timeConfig: E } } = $(), { isModelAuto: D } = Fl(), { checkKeyDown: k, findFocusableEl: A } = Pl(), { transitionName: M, showTransition: N } = nl(), { hideNavigationButtons: P } = ru(), { isMobile: R } = Il(), z = W(), B = G("overlay"), V = G("close-tp-btn"), ee = G("tp-input"), U = F(!1);
		O(() => {
			d("mount");
		});
		let te = a(() => w.value.enabled && _.modelAuto ? D(g.value) : !0), K = F(!1), re = (e) => ({
			hours: Array.isArray(p.hours) ? p.hours[e] : p.hours,
			minutes: Array.isArray(p.minutes) ? p.minutes[e] : p.minutes,
			seconds: Array.isArray(p.seconds) ? p.seconds[e] : p.seconds
		}), ie = a(() => {
			let e = [];
			if (w.value.enabled) for (let t = 0; t < 2; t++) e.push(re(t));
			else e.push(re(0));
			return e;
		}), Y = (e, t = !1, n = "") => {
			t || d("reset-flow"), K.value = e, h("arrowNavigationLevel", +!!e), m("overlay-toggle", {
				open: e,
				overlay: Jc.time
			}), S(() => {
				n !== "" && ee.value?.[0] && ee.value[0].openChildCmp(n);
			});
		}, ae = a(() => ({
			dp__btn: !0,
			dp__button: !0,
			dp__button_bottom: _.autoApply && !b.value.keepActionRow
		})), oe = Gl(z, Hl.TimeInput), se = (e, t, n) => w.value.enabled ? t === 0 ? [e, ie.value[1][n]] : [ie.value[0][n], e] : e, ce = (e) => {
			d("update:hours", e);
		}, le = (e) => {
			d("update:minutes", e);
		}, ue = (e) => {
			d("update:seconds", e);
		}, de = () => {
			if (B.value && !y.value.enabled && !p.noOverlayFocus) {
				let e = A(B.value);
				e && e.focus({ preventScroll: !0 });
			}
		}, fe = (e) => {
			U.value = !1, m("overlay-toggle", {
				open: !1,
				overlay: e
			});
		}, pe = (e) => {
			U.value = !0, m("overlay-toggle", {
				open: !0,
				overlay: e
			});
		};
		return t({ toggleTimePicker: Y }), (t, r) => (j(), c("div", {
			class: "dp--tp-wrap",
			"data-dp-mobile": H(R)
		}, [!H(_).timePicker && !H(E).timePickerInline ? J((j(), c("button", {
			key: 0,
			ref: "open-tp-btn",
			type: "button",
			"data-dp-action-element": "0",
			class: C({
				...ae.value,
				"dp--hidden-el": K.value
			}),
			"aria-label": H(v)?.openTimePicker,
			tabindex: e.noOverlayFocus ? void 0 : 0,
			"data-test-id": "open-time-picker-btn",
			onKeydown: r[0] ||= (e) => H(k)(e, () => Y(!0)),
			onClick: r[1] ||= (e) => Y(!0)
		}, [L(t.$slots, "clock-icon", {}, () => [f(H(Vc))])], 42, Au)), [[ne, !H(P)("time")]]) : s("", !0), f(i, {
			name: H(M)(K.value),
			css: H(N) && !H(E).timePickerInline
		}, {
			default: q(() => [K.value || H(_).timePicker || H(E).timePickerInline ? (j(), c("div", {
				key: 0,
				ref: "overlay",
				role: H(E).timePickerInline ? void 0 : "dialog",
				class: C({
					dp__overlay: !H(E).timePickerInline,
					"dp--overlay-absolute": !H(_).timePicker && !H(E).timePickerInline,
					"dp--overlay-relative": H(_).timePicker
				}),
				style: T(H(_).timePicker ? { height: `${H(b).modeHeight}px` } : void 0),
				"aria-label": H(v)?.timePicker,
				tabindex: H(E).timePickerInline ? void 0 : 0
			}, [l("div", {
				class: C(H(E).timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"),
				style: { display: "flex" }
			}, [L(t.$slots, "time-picker-overlay", {
				hours: e.hours,
				minutes: e.minutes,
				seconds: e.seconds,
				setHours: ce,
				setMinutes: le,
				setSeconds: ue
			}, () => [l("div", { class: C(H(E).timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row") }, [(j(!0), c(n, null, I(ie.value, (n, r) => J((j(), o(Ou, x({ key: r }, { ref_for: !0 }, {
				order: r,
				hours: n.hours,
				minutes: n.minutes,
				seconds: n.seconds,
				closeTimePickerBtn: V.value,
				disabledTimesConfig: e.disabledTimesConfig,
				disabled: r === 0 ? H(w).fixedStart : H(w).fixedEnd
			}, {
				ref_for: !0,
				ref: "tp-input",
				"validate-time": (t, n) => e.validateTime(t, se(n, r, t)),
				"onUpdate:hours": (e) => ce(se(e, r, "hours")),
				"onUpdate:minutes": (e) => le(se(e, r, "minutes")),
				"onUpdate:seconds": (e) => ue(se(e, r, "seconds")),
				onMounted: de,
				onOverlayClosed: fe,
				onOverlayOpened: pe
			}), u({ _: 2 }, [I(H(oe), (e, n) => ({
				name: e,
				fn: q((n) => [L(t.$slots, e, x({ ref_for: !0 }, n))])
			}))]), 1040, [
				"validate-time",
				"onUpdate:hours",
				"onUpdate:minutes",
				"onUpdate:seconds"
			])), [[ne, r === 0 || te.value]])), 128))], 2)]), !H(_).timePicker && !H(E).timePickerInline ? J((j(), c("button", {
				key: 0,
				ref: "close-tp-btn",
				"data-dp-action-element": "1",
				type: "button",
				class: C({
					...ae.value,
					"dp--hidden-el": U.value
				}),
				"aria-label": H(v)?.closeTimePicker,
				tabindex: "0",
				onKeydown: r[2] ||= (e) => H(k)(e, () => Y(!1)),
				onClick: r[3] ||= (e) => Y(!1)
			}, [L(t.$slots, "calendar-icon", {}, () => [f(H(Lc))])], 42, Mu)), [[ne, !H(P)("time")]]) : s("", !0)], 2)], 14, ju)) : s("", !0)]),
			_: 3
		}, 8, ["name", "css"])], 8, ku));
	}
}), Pu = (e) => {
	let { getDate: t, modelValue: n, time: r, rootProps: i, defaults: { range: o, timeConfig: s } } = $(), { isDateEqual: c, setTime: l } = Fl(), u = (e, t) => Array.isArray(r[e]) ? r[e][t] : r[e], d = (e) => s.value.enableSeconds ? Array.isArray(r.seconds) ? r.seconds[e] : r.seconds : 0, f = (e, n) => e ? l(n === void 0 ? {
		hours: r.hours,
		minutes: r.minutes,
		seconds: d()
	} : {
		hours: u("hours", n),
		minutes: u("minutes", n),
		seconds: d(n)
	}, e) : vc(t(), d(n)), p = (e, t) => {
		r[e] = t;
	}, m = a(() => i.modelAuto && o.value.enabled ? Array.isArray(n.value) ? n.value.length > 1 : !1 : o.value.enabled), h = (e, t) => {
		let i = Object.fromEntries(Object.keys(r).map((n) => n === e ? [n, t] : [n, r[n]].slice()));
		if (m.value && !o.value.disableTimeRangeValidation) {
			let e = (e) => n.value ? l({
				hours: i.hours[e],
				minutes: i.minutes[e],
				seconds: i.seconds[e]
			}, n.value[e]) : null, t = (e) => _c(n.value[e], 0);
			return !(c(e(0), e(1)) && (Po(e(0), t(1)) || Fo(e(1), t(0))));
		}
		return !0;
	}, g = (t, n) => {
		h(t, n) && (p(t, n), e && e());
	}, _ = (e) => {
		g("hours", e);
	}, v = (e) => {
		g("minutes", e);
	}, y = (e) => {
		g("seconds", e);
	}, b = (e, t) => {
		_(e.hours), v(e.minutes), y(e.seconds), n.value && t(n.value);
	}, x = (e) => {
		if (e) {
			let t = Array.isArray(e), n = t ? [+e[0].hours, +e[1].hours] : +e.hours, r = t ? [+e[0].minutes, +e[1].minutes] : +e.minutes, i = t ? [+(e[0].seconds ?? 0), +(e[1].seconds ?? 0)] : +(e.seconds ?? 0);
			p("hours", n), p("minutes", r), s.value.enableSeconds && p("seconds", i);
		}
	}, S = (e, t) => {
		let n = {
			hours: Array.isArray(r.hours) ? r.hours[e] : r.hours,
			disabledArr: []
		};
		return (t || t === 0) && (n.hours = t), Array.isArray(i.disabledTimes) && (n.disabledArr = o.value.enabled && Array.isArray(i.disabledTimes[e]) ? i.disabledTimes[e] : i.disabledTimes), n;
	};
	return {
		assignTime: p,
		updateHours: _,
		updateMinutes: v,
		updateSeconds: y,
		getSetDateTime: f,
		updateTimeValues: b,
		getSecondsValue: d,
		assignStartTime: x,
		validateTime: h,
		disabledTimesConfig: a(() => (e, t) => {
			if (Array.isArray(i.disabledTimes)) {
				let { disabledArr: n, hours: r } = S(e, t), i = n.filter((e) => +e.hours === r);
				return i[0]?.minutes === "*" ? {
					hours: [r],
					minutes: void 0,
					seconds: void 0
				} : {
					hours: [],
					minutes: i?.map((e) => +e.minutes) ?? [],
					seconds: i?.map((e) => e.seconds ? +e.seconds : void 0) ?? []
				};
			}
			return {
				hours: [],
				minutes: [],
				seconds: []
			};
		})
	};
}, Fu = (e) => {
	let { getDate: t, time: n, modelValue: r, state: i, defaults: { startTime: a, range: o, timeConfig: s } } = $(), { getTimeObj: c } = Fl();
	rl(() => {
		i.isTextInputDate && x();
	});
	let { updateTimeValues: l, getSetDateTime: u, assignTime: d, assignStartTime: f, disabledTimesConfig: p, validateTime: m } = Pu(h);
	function h() {
		e("update-flow-step");
	}
	let g = (e) => {
		let { hours: t, minutes: n, seconds: r } = e;
		return {
			hours: +t,
			minutes: +n,
			seconds: r ? +r : 0
		};
	}, _ = () => {
		if (s.value.startTime) {
			if (Array.isArray(s.value.startTime)) {
				let e = g(s.value.startTime[0]), n = g(s.value.startTime[1]);
				return [Q(t(), e), Q(t(), n)];
			}
			let e = g(s.value.startTime);
			return Q(t(), e);
		}
		return o.value.enabled ? [null, null] : null;
	}, v = () => {
		if (o.value.enabled) {
			let [e, t] = _();
			r.value = [u(e, 0), u(t, 1)];
		} else r.value = u(_());
	}, y = (e) => Array.isArray(e) ? [c(t(e[0])), c(t(e[1]))] : [c(e ?? t())], b = (e, t, n) => {
		d("hours", e), d("minutes", t), d("seconds", s.value.enableSeconds ? n : 0);
	}, x = () => {
		let [e, t] = y(r.value);
		return o.value.enabled ? b([e.hours, t.hours], [e.minutes, t.minutes], [e.seconds, t.seconds]) : b(e.hours, e.minutes, e.seconds);
	};
	O(() => (f(a.value), r.value ? x() : v()));
	let S = () => {
		Array.isArray(r.value) ? r.value = r.value.map((e, t) => e && u(e, t)) : r.value = u(r.value), e("time-update");
	};
	return {
		modelValue: r,
		time: n,
		disabledTimesConfig: p,
		validateTime: m,
		updateTime: (e) => {
			l(e, S);
		}
	};
}, Iu = /* @__PURE__ */ p({
	__name: "TimePickerSolo",
	props: {
		flowStep: {},
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: [
		"time-update",
		"mount",
		"reset-flow",
		"update-flow-step"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = Gl(W(), Hl.TimePicker), a = G("time-input"), { time: s, modelValue: c, disabledTimesConfig: d, updateTime: p, validateTime: m } = Fu(r);
		return O(() => {
			r("mount");
		}), t({
			getSidebarProps: () => ({
				modelValue: c,
				time: s,
				updateTime: p
			}),
			toggleTimePicker: (e, t = !1, n = "") => {
				a.value?.toggleTimePicker(e, t, n);
			}
		}), (e, t) => (j(), o(uu, {
			"multi-calendars": 0,
			stretch: ""
		}, {
			default: q(({ wrapClass: n }) => [l("div", { class: C(n) }, [f(Nu, x({ ref: "time-input" }, e.$props, {
				hours: H(s).hours,
				minutes: H(s).minutes,
				seconds: H(s).seconds,
				"disabled-times-config": H(d),
				"validate-time": H(m),
				"onUpdate:hours": t[0] ||= (e) => H(p)({
					hours: e,
					minutes: H(s).minutes,
					seconds: H(s).seconds
				}),
				"onUpdate:minutes": t[1] ||= (e) => H(p)({
					hours: H(s).hours,
					minutes: e,
					seconds: H(s).seconds
				}),
				"onUpdate:seconds": t[2] ||= (e) => H(p)({
					hours: H(s).hours,
					minutes: H(s).minutes,
					seconds: e
				}),
				onResetFlow: t[3] ||= (t) => e.$emit("reset-flow")
			}), u({ _: 2 }, [I(H(i), (t, n) => ({
				name: t,
				fn: q((n) => [L(e.$slots, t, w(h(n)))])
			}))]), 1040, [
				"hours",
				"minutes",
				"seconds",
				"disabled-times-config",
				"validate-time"
			])], 2)]),
			_: 3
		}));
	}
}), Lu = (e, t) => {
	let { getDate: n, rootProps: r, defaults: { filters: i } } = $(), { validateMonthYearInRange: o, validateMonthYear: s } = il(), c = (e, t) => {
		let n = e;
		return i.value.months.includes(Mo(n)) ? (n = t ? sa(e, 1) : bc(e, 1), c(n, t)) : n;
	}, l = (e, t) => {
		let n = e;
		return i.value.years.includes(Z(n)) ? (n = t ? ba(e, 1) : Sc(e, 1), l(n, t)) : n;
	}, u = (t, a = !1) => {
		let s = Q(n(), {
			month: e.month,
			year: e.year
		}), u = t ? sa(s, 1) : bc(s, 1);
		r.disableYearSelect && (u = yc(u, e.year));
		let f = Mo(u), p = Z(u);
		i.value.months.includes(f) && (u = c(u, t), f = Mo(u), p = Z(u)), i.value.years.includes(p) && (u = l(u, t), p = Z(u)), o(f, p, t, r.preventMinMaxNavigation) && d(f, p, a);
	}, d = (e, n, r = !1) => {
		t("update-month-year", {
			month: e,
			year: n,
			fromNav: r
		});
	};
	return {
		handleMonthYearChange: u,
		isDisabled: a(() => (t) => s(Q(n(), {
			month: e.month,
			year: e.year
		}), r.preventMinMaxNavigation, t)),
		updateMonthYear: d
	};
}, Ru = { class: "dp--header-wrap" }, zu = {
	key: 0,
	class: "dp__month_year_wrap"
}, Bu = { key: 0 }, Vu = { class: "dp__month_year_wrap" }, Hu = [
	"data-dp-element",
	"aria-label",
	"data-test-id",
	"onClick",
	"onKeydown"
], Uu = /* @__PURE__ */ p({
	__name: "DpHeader",
	props: {
		month: {},
		year: {},
		instance: {},
		years: {},
		months: {},
		menuWrapRef: {}
	},
	emits: [
		"mount",
		"reset-flow",
		"update-month-year"
	],
	setup(e, { expose: t, emit: r }) {
		let p = r, m = e, { rootEmit: g, rootProps: _, modelValue: v, defaults: { ariaLabels: y, filters: b, config: S, highlight: T, safeDates: E, ui: D } } = $(), { transitionName: k, showTransition: A } = nl(), { showLeftIcon: M, showRightIcon: N } = ru(), { handleMonthYearChange: P, isDisabled: R, updateMonthYear: V } = Lu(m, p), { getMaxMonth: ee, getMinMonth: U, getYearFromDate: W, groupListAndMap: G, checkHighlightYear: te, checkHighlightMonth: ne } = Fl(), { checkKeyDown: K } = Pl(), { formatYear: J } = Ll(), { checkMinMaxValue: re } = il(), { boolHtmlAttribute: ie } = Bl(), Y = F(!1), ae = F(!1), oe = F(!1);
		O(() => {
			p("mount");
		});
		let se = (e) => ({
			get: () => m[e],
			set: (t) => {
				let n = e === Kc.month ? Kc.year : Kc.month;
				p("update-month-year", {
					[e]: t,
					[n]: m[n]
				}), e === Kc.month ? he(!0) : ge(!0);
			}
		}), ce = a(se(Kc.month)), le = a(se(Kc.year)), ue = a(() => (e) => ({
			month: m.month,
			year: m.year,
			items: e === Kc.month ? m.months : m.years,
			instance: m.instance,
			updateMonthYear: V,
			toggle: e === Kc.month ? he : ge
		})), de = a(() => m.months.find((e) => e.value === m.month) || {
			text: "",
			value: 0
		}), fe = a(() => G(m.months, (e) => ({
			active: m.month === e.value,
			disabled: re(e.value, U(m.year, E.value.minDate), ee(m.year, E.value.maxDate)) || b.value.months.includes(e.value),
			highlighted: ne(T.value, e.value, m.year)
		}))), pe = a(() => G(m.years, (e) => ({
			active: m.year === e.value,
			disabled: re(e.value, W(E.value.minDate), W(E.value.maxDate)) || b.value.years.includes(e.value),
			highlighted: te(T.value, e.value)
		}))), me = (e, t, n) => {
			e.value = n === void 0 ? !e.value : n, e.value ? (oe.value = !0, g("overlay-toggle", {
				open: !0,
				overlay: t
			})) : (oe.value = !1, g("overlay-toggle", {
				open: !1,
				overlay: t
			}));
		}, he = (e = !1, t) => {
			_e(e), me(Y, Jc.month, t);
		}, ge = (e = !1, t) => {
			_e(e), me(ae, Jc.year, t);
		}, _e = (e) => {
			e || p("reset-flow");
		}, ve = a(() => [{
			type: Kc.month,
			index: 1,
			toggle: he,
			modelValue: ce.value,
			updateModelValue: (e) => ce.value = e,
			text: de.value.text,
			showSelectionGrid: Y.value,
			items: fe.value,
			ariaLabel: y.value?.openMonthsOverlay,
			overlayLabel: y.value.monthPicker?.(!0) ?? void 0
		}, {
			type: Kc.year,
			index: 2,
			toggle: ge,
			modelValue: le.value,
			updateModelValue: (e) => le.value = e,
			text: J(m.year),
			showSelectionGrid: ae.value,
			items: pe.value,
			ariaLabel: y.value?.openYearsOverlay,
			overlayLabel: y.value.yearPicker?.(!0) ?? void 0
		}]), ye = a(() => _.disableYearSelect ? [ve.value[0]] : _.yearFirst ? [...ve.value].reverse() : ve.value);
		return t({
			toggleMonthPicker: he,
			toggleYearPicker: ge,
			handleMonthYearChange: P
		}), (t, r) => (j(), c("div", Ru, [t.$slots["month-year"] ? (j(), c("div", zu, [L(t.$slots, "month-year", w(h({
			month: e.month,
			year: e.year,
			months: e.months,
			years: e.years,
			updateMonthYear: H(V),
			handleMonthYearChange: H(P),
			instance: e.instance,
			isDisabled: H(R)
		})))])) : (j(), c(n, { key: 1 }, [t.$slots["top-extra"] ? (j(), c("div", Bu, [L(t.$slots, "top-extra", { value: H(v) })])) : s("", !0), l("div", Vu, [
			H(M)(e.instance) && !H(_).vertical ? (j(), o(fu, {
				key: 0,
				"aria-label": H(y)?.prevMonth,
				disabled: H(ie)(H(R)(!1)),
				class: C(H(D)?.navBtnPrev),
				"el-name": "action-prev",
				onActivate: r[0] ||= (e) => H(P)(!1, !0)
			}, {
				default: q(() => [t.$slots["arrow-left"] ? L(t.$slots, "arrow-left", { key: 0 }) : s("", !0), t.$slots["arrow-left"] ? s("", !0) : (j(), o(H(zc), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : s("", !0),
			l("div", { class: C(["dp__month_year_wrap", { dp__year_disable_select: H(_).disableYearSelect }]) }, [(j(!0), c(n, null, I(ye.value, (r) => (j(), c(n, { key: r.type }, [l("button", {
				type: "button",
				"data-dp-element": `overlay-${r.type}`,
				class: C(["dp__btn dp__month_year_select", { "dp--hidden-el": oe.value }]),
				"aria-label": `${r.text}-${r.ariaLabel}`,
				"data-test-id": `${r.type}-toggle-overlay-${e.instance}`,
				tabindex: "0",
				"data-dp-action-element": "0",
				onClick: (e) => r.toggle(!1),
				onKeydown: (e) => H(K)(e, () => r.toggle(), !0)
			}, [t.$slots[r.type] ? L(t.$slots, r.type, {
				key: 0,
				text: r.text,
				value: m[r.type]
			}) : s("", !0), t.$slots[r.type] ? s("", !0) : (j(), c(n, { key: 1 }, [d(B(r.text), 1)], 64))], 42, Hu), f(i, {
				name: H(k)(r.showSelectionGrid),
				css: H(A)
			}, {
				default: q(() => [r.showSelectionGrid ? (j(), o(cu, {
					key: 0,
					items: r.items,
					"is-last": H(_).autoApply && !H(S).keepActionRow,
					"skip-button-ref": !1,
					type: r.type,
					"header-refs": [],
					"menu-wrap-ref": e.menuWrapRef,
					"overlay-label": r.overlayLabel,
					onSelected: r.updateModelValue,
					onToggle: r.toggle
				}, u({
					"button-icon": q(() => [t.$slots["calendar-icon"] ? L(t.$slots, "calendar-icon", { key: 0 }) : s("", !0), t.$slots["calendar-icon"] ? s("", !0) : (j(), o(H(Lc), { key: 1 }))]),
					_: 2
				}, [
					t.$slots[`${r.type}-overlay-value`] ? {
						name: "item",
						fn: q(({ item: e }) => [L(t.$slots, `${r.type}-overlay-value`, {
							text: e.text,
							value: e.value
						})]),
						key: "0"
					} : void 0,
					t.$slots[`${r.type}-overlay`] ? {
						name: "overlay",
						fn: q(() => [L(t.$slots, `${r.type}-overlay`, x({ ref_for: !0 }, ue.value(r.type)))]),
						key: "1"
					} : void 0,
					t.$slots[`${r.type}-overlay-header`] ? {
						name: "header",
						fn: q(() => [L(t.$slots, `${r.type}-overlay-header`, { toggle: r.toggle })]),
						key: "2"
					} : void 0
				]), 1032, [
					"items",
					"is-last",
					"type",
					"menu-wrap-ref",
					"overlay-label",
					"onSelected",
					"onToggle"
				])) : s("", !0)]),
				_: 2
			}, 1032, ["name", "css"])], 64))), 128))], 2),
			H(M)(e.instance) && H(_).vertical ? (j(), o(fu, {
				key: 1,
				"aria-label": H(y)?.prevMonth,
				"el-name": "action-prev",
				disabled: H(ie)(H(R)(!1)),
				class: C(H(D)?.navBtnPrev),
				onActivate: r[1] ||= (e) => H(P)(!1, !0)
			}, {
				default: q(() => [t.$slots["arrow-up"] ? L(t.$slots, "arrow-up", { key: 0 }) : s("", !0), t.$slots["arrow-up"] ? s("", !0) : (j(), o(H(Hc), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : s("", !0),
			H(N)(e.instance) ? (j(), o(fu, {
				key: 2,
				ref: "rightIcon",
				"el-name": "action-next",
				disabled: H(ie)(H(R)(!0)),
				"aria-label": H(y)?.nextMonth,
				class: C(H(D)?.navBtnNext),
				onActivate: r[2] ||= (e) => H(P)(!0, !0)
			}, {
				default: q(() => [t.$slots[H(_).vertical ? "arrow-down" : "arrow-right"] ? L(t.$slots, H(_).vertical ? "arrow-down" : "arrow-right", { key: 0 }) : s("", !0), t.$slots[H(_).vertical ? "arrow-down" : "arrow-right"] ? s("", !0) : (j(), o(z(H(_).vertical ? H(Uc) : H(Bc)), { key: 1 }))]),
				_: 3
			}, 8, [
				"disabled",
				"aria-label",
				"class"
			])) : s("", !0)
		])], 64))]));
	}
}), Wu = {
	class: "dp__calendar_header",
	role: "row"
}, Gu = {
	key: 0,
	class: "dp__calendar_header_item",
	role: "gridcell"
}, Ku = ["aria-label"], qu = {
	key: 0,
	class: "dp__calendar_item dp__week_num",
	role: "gridcell"
}, Ju = { class: "dp__cell_inner" }, Yu = [
	"id",
	"aria-selected",
	"aria-disabled",
	"aria-label",
	"tabindex",
	"data-test-id",
	"data-dp-element-active",
	"onClick",
	"onTouchend",
	"onKeydown",
	"onMouseenter",
	"onMouseleave",
	"onMousedown"
], Xu = /* @__PURE__ */ p({
	__name: "DpCalendar",
	props: {
		instance: {},
		mappedDates: {},
		month: {},
		year: {}
	},
	emits: [
		"mount",
		"select-date",
		"set-hover-date",
		"handle-scroll",
		"handle-swipe"
	],
	setup(e, { expose: t, emit: r }) {
		let o = r, u = e, { getDate: p, rootEmit: m, rootProps: h, defaults: { transitions: g, config: _, ariaLabels: v, multiCalendars: y, weekNumbers: b, multiDates: x, ui: w } } = $(), { isDateAfter: E, isDateEqual: D, resetDateTime: k, getCellId: M } = Fl(), { checkKeyDown: N, checkStopPropagation: P, isTouchDevice: R } = Pl(), { formatWeekDay: z } = Ll(), V = G("calendar-wrap"), ee = G("active-tooltip"), U = F([]), W = F(null), te = F(!0), ne = F(!1), K = F(""), J = F({
			bottom: "",
			left: "",
			transform: ""
		}), re = F({ left: "50%" });
		pe(V, { onSwipeEnd: (e, t) => {
			_.value.noSwipe || (h.vertical ? (t === "up" || t === "down") && o("handle-swipe", t === "up" ? "left" : "right") : (t === "left" || t === "right") && o("handle-swipe", t === "right" ? "left" : "right"));
		} });
		let Y = a(() => h.calendar ? h.calendar(u.mappedDates) : u.mappedDates), ae = a(() => h.dayNames ? Array.isArray(h.dayNames) ? h.dayNames : h.dayNames() : De());
		O(() => {
			o("mount", {
				cmp: "calendar",
				dayRefs: U.value
			}), _.value.monthChangeOnScroll && V.value && V.value.addEventListener("wheel", xe, { passive: !1 });
		}), A(() => {
			_.value.monthChangeOnScroll && V.value && V.value.removeEventListener("wheel", xe);
		});
		let oe = (e) => e ? h.vertical ? "vNext" : "next" : h.vertical ? "vPrevious" : "previous", se = (e, t) => {
			if (h.transitions) {
				let n = k(Q(p(), {
					month: u.month,
					year: u.year
				}));
				K.value = E(k(Q(p(), {
					month: e,
					year: t
				})), n) ? g.value[oe(!0)] : g.value[oe(!1)], te.value = !1, S(() => {
					te.value = !0;
				});
			}
		}, ce = a(() => ({ ...w.value.calendar })), le = (e) => ({
			type: "dot",
			...e
		}), de = a(() => (e) => {
			let t = le(e);
			return {
				dp__marker_dot: t.type === "dot",
				dp__marker_line: t.type === "line"
			};
		}), fe = a(() => (e) => D(e, W.value)), me = a(() => ({
			dp__calendar: !0,
			dp__calendar_next: y.value.count > 0 && u.instance !== 0
		})), he = a(() => (e) => !h.hideOffsetDates || e.current), ge = async (e, t) => {
			let { width: n, height: r } = e.getBoundingClientRect();
			W.value = t.value;
			let i = { left: `${n / 2}px` }, a = -50;
			if (await S(), ee.value?.[0]) {
				let { left: e, width: t } = ee.value[0].getBoundingClientRect();
				e < 0 && (i = { left: "0" }, a = 0, re.value.left = `${n / 2}px`), globalThis.innerWidth < e + t && (i = { right: "0" }, a = 0, re.value.left = `${t - n / 2}px`);
			}
			J.value = {
				bottom: `${r}px`,
				...i,
				transform: `translateX(${a}%)`
			};
		}, _e = async (e, t, n) => {
			let r = ue(U.value?.[t]?.[n]);
			r && (e.marker?.customPosition && e.marker?.tooltip?.length ? J.value = e.marker.customPosition(r) : await ge(r, e), m("tooltip-open", e.marker));
		}, ve = async (e, t, n) => {
			if (ne.value && x.value.enabled && x.value.dragSelect) return o("select-date", e);
			if (o("set-hover-date", e), e.marker?.tooltip?.length) {
				if (h.hideOffsetDates && !e.current) return;
				await _e(e, t, n);
			}
		}, ye = (e) => {
			W.value && (W.value = null, J.value = structuredClone({
				bottom: "",
				left: "",
				transform: ""
			}), m("tooltip-close", e.marker));
		}, be = (e, t, n) => {
			e && (Array.isArray(U.value[t]) ? U.value[t][n] = e : U.value[t] = [e]);
		}, xe = (e) => {
			_.value.monthChangeOnScroll && (e.preventDefault(), o("handle-scroll", e));
		}, Se = (e) => b.value ? b.value.type === "local" ? eo(e.value, {
			weekStartsOn: +h.weekStart,
			locale: h.locale
		}) : b.value.type === "iso" ? Za(e.value) : typeof b.value.type == "function" ? b.value.type(e.value) : "" : "", Ce = (e) => {
			let t = e[0];
			return b.value?.hideOnOffsetDates ? e.some((e) => e.current) ? Se(t) : "" : Se(t);
		}, we = (e, t, n = !0) => {
			!n && R() || (!x.value.enabled || _.value.allowPreventDefault) && (P(e, _.value), o("select-date", t));
		}, Te = (e) => {
			P(e, _.value);
		}, Ee = (e) => {
			x.value.enabled && x.value.dragSelect ? (ne.value = !0, o("select-date", e)) : x.value.enabled && o("select-date", e);
		}, De = () => {
			let e = p();
			return ka({
				start: da(e, {
					locale: h.locale,
					weekStartsOn: +h.weekStart
				}),
				end: Fa(e, {
					locale: h.locale,
					weekStartsOn: +h.weekStart
				})
			}).map((e) => z(e));
		};
		return t({ triggerTransition: se }), (e, t) => (j(), c("div", { class: C(me.value) }, [l("div", {
			ref: "calendar-wrap",
			class: C(ce.value),
			role: "grid"
		}, [
			l("div", Wu, [H(b) ? (j(), c("div", Gu, B(H(b).label), 1)) : s("", !0), (j(!0), c(n, null, I(ae.value, (t, n) => (j(), c("div", {
				key: n,
				class: "dp__calendar_header_item",
				role: "gridcell",
				"data-test-id": "calendar-header",
				"aria-label": H(v)?.weekDay?.(n)
			}, [L(e.$slots, "calendar-header", {
				day: t,
				index: n
			}, () => [d(B(t), 1)])], 8, Ku))), 128))]),
			t[2] ||= l("div", { class: "dp__calendar_header_separator" }, null, -1),
			f(i, {
				name: K.value,
				css: !!H(g)
			}, {
				default: q(() => [te.value ? (j(), c("div", {
					key: 0,
					class: "dp__calendar",
					role: "rowgroup",
					onMouseleave: t[1] ||= (e) => ne.value = !1
				}, [(j(!0), c(n, null, I(Y.value, (r, i) => (j(), c("div", {
					key: i,
					class: "dp__calendar_row",
					role: "row"
				}, [H(b) ? (j(), c("div", qu, [l("div", Ju, B(Ce(r.days)), 1)])) : s("", !0), (j(!0), c(n, null, I(r.days, (r, a) => (j(), c("div", {
					id: H(M)(r.value),
					ref_for: !0,
					ref: (e) => be(e, i, a),
					key: a + i,
					role: "gridcell",
					class: "dp__calendar_item",
					"aria-selected": (r.classData.dp__active_date || r.classData.dp__range_start || r.classData.dp__range_end) ?? void 0,
					"aria-disabled": r.classData.dp__cell_disabled || void 0,
					"aria-label": H(v)?.day?.(r),
					tabindex: !r.current && H(h).hideOffsetDates ? void 0 : 0,
					"data-test-id": H(M)(r.value),
					"data-dp-element-active": r.classData.dp__active_date ? 0 : void 0,
					"data-dp-action-element": "0",
					onClick: ie((e) => we(e, r), ["prevent"]),
					onTouchend: (e) => we(e, r, !1),
					onKeydown: (t) => H(N)(t, () => e.$emit("select-date", r)),
					onMouseenter: (e) => ve(r, i, a),
					onMouseleave: (e) => ye(r),
					onMousedown: (e) => Ee(r),
					onMouseup: t[0] ||= (e) => ne.value = !1
				}, [l("div", { class: C(["dp__cell_inner", r.classData]) }, [
					e.$slots.day && he.value(r) ? L(e.$slots, "day", {
						key: 0,
						day: +r.text,
						date: r.value
					}) : s("", !0),
					e.$slots.day ? s("", !0) : (j(), c(n, { key: 1 }, [d(B(r.text), 1)], 64)),
					r.marker && he.value(r) ? L(e.$slots, "marker", {
						key: 2,
						marker: r.marker,
						day: +r.text,
						date: r.value
					}, () => [l("div", {
						class: C(de.value(r.marker)),
						style: T(r.marker.color ? { backgroundColor: r.marker.color } : {})
					}, null, 6)]) : s("", !0),
					fe.value(r.value) ? (j(), c("div", {
						key: 3,
						ref_for: !0,
						ref: "active-tooltip",
						class: "dp__marker_tooltip",
						style: T(J.value)
					}, [r.marker?.tooltip ? (j(), c("div", {
						key: 0,
						class: "dp__tooltip_content",
						onClick: Te
					}, [(j(!0), c(n, null, I(r.marker.tooltip, (t, n) => (j(), c("div", {
						key: n,
						class: "dp__tooltip_text"
					}, [L(e.$slots, "marker-tooltip", {
						tooltip: t,
						day: r.value
					}, () => [l("div", {
						class: "dp__tooltip_mark",
						style: T(t.color ? { backgroundColor: t.color } : {})
					}, null, 4), l("div", null, B(t.text), 1)])]))), 128)), l("div", {
						class: "dp__arrow_bottom_tp",
						style: T(re.value)
					}, null, 4)])) : s("", !0)], 4)) : s("", !0)
				], 2)], 40, Yu))), 128))]))), 128))], 32)) : s("", !0)]),
				_: 3
			}, 8, ["name", "css"])
		], 2)], 2));
	}
}), Zu = (e, t, n, r) => {
	let i = F([]), o = F(/* @__PURE__ */ new Date()), s = F(), { getDate: c, rootEmit: l, calendars: u, month: d, year: f, time: p, modelValue: m, rootProps: h, today: g, state: _, defaults: { multiCalendars: v, startTime: y, range: b, config: x, safeDates: C, multiDates: w, timeConfig: T, flow: E } } = $(), { validateMonthYearInRange: D, isDisabled: k, isDateRangeAllowed: A, checkMinMaxRange: j } = il(), { updateTimeValues: M, getSetDateTime: N, assignTime: P, assignStartTime: I, validateTime: L, disabledTimesConfig: R } = Pu(r), { formatDay: z } = Ll(), { resetDateTime: B, setTime: V, isDateBefore: ee, isDateEqual: H, getDaysInBetween: U } = Fl(), { checkRangeAutoApply: W, getRangeWithFixedDate: G, handleMultiDatesSelect: te, setPresetDate: ne } = gu(), { getMapDate: K } = Pl();
	rl(() => oe(_.isTextInputDate));
	let q = (e) => !x.value.keepViewOnOffsetClick || e ? !0 : !s.value, J = (e, t, n, r = !1) => {
		q(r) && (u.value[e] ??= u.value[e] = {
			month: 0,
			year: 0
		}, u.value[e].month = t ?? u.value[e]?.month, u.value[e].year = n ?? u.value[e]?.year);
	}, re = () => {
		h.autoApply && t("select-date");
	}, ie = () => {
		y.value && I(y.value);
	};
	O(() => {
		m.value || (ve(), ie()), oe(!0), h.focusStartDate && h.startDate && ve();
	});
	let Y = a(() => E.value?.steps?.length && !E.value?.partial ? e.flowStep === E.value.steps.length : !0), ae = () => {
		h.autoApply && Y.value && t("auto-apply", E.value?.partial ? e.flowStep !== E.value?.steps?.length : !1);
	}, oe = (e = !1) => {
		if (m.value) return Array.isArray(m.value) ? (i.value = m.value, me(e)) : ue(m.value, e);
		if (v.value.count && e && !h.startDate) return le(c(), e);
	}, se = () => Array.isArray(m.value) && b.value.enabled ? Mo(m.value[0]) === Mo(m.value[1] ?? m.value[0]) : !1, ce = (e) => {
		let t = sa(e, 1);
		return {
			month: Mo(t),
			year: Z(t)
		};
	}, le = (e = c(), t = !1) => {
		if ((!v.value.count || !v.value.static || t) && J(0, Mo(e), Z(e)), v.value.count && (!m.value || se() || !v.value.solo) && (!v.value.solo || t)) for (let e = 1; e < v.value.count; e++) {
			let t = ca(Q(c(), {
				month: d.value(e - 1),
				year: f.value(e - 1)
			}), { months: 1 });
			u.value[e] = {
				month: Mo(t),
				year: Z(t)
			};
		}
	}, ue = (e, t) => {
		le(e), P("hours", ko(e)), P("minutes", jo(e)), P("seconds", No(e)), v.value.count && t && _e();
	}, de = (e) => {
		if (v.value.count) {
			if (v.value.solo) return 0;
			let t = Mo(e[0]), n = Mo(e[1]);
			return Math.abs(n - t) < v.value.count ? 0 : 1;
		}
		return 1;
	}, fe = (e, t) => {
		e[1] && b.value.showLastInRange ? le(e[de(e)], t) : le(e[0], t);
		let n = (t, n) => [t(e[0]), e?.[1] ? t(e[1]) : p[n][1]];
		P("hours", n(ko, "hours")), P("minutes", n(jo, "minutes")), P("seconds", n(No, "seconds"));
	}, pe = (e, t) => {
		if ((b.value.enabled || h.weekPicker) && !w.value.enabled) return fe(e, t);
		if (w.value.enabled && t) {
			let n = e[e.length - 1];
			return ue(n, t);
		}
	}, me = (e) => {
		let t = m.value;
		pe(t, e), v.value.count && v.value.solo && _e();
	}, he = (e, t) => {
		let r = Q(c(), {
			month: d.value(t),
			year: f.value(t)
		}), i = e < 0 ? sa(r, 1) : bc(r, 1);
		D(Mo(i), Z(i), e < 0, h.preventMinMaxNavigation) && (J(t, Mo(i), Z(i)), l("update-month-year", {
			instance: t,
			month: Mo(i),
			year: Z(i)
		}), v.value.count && !v.value.solo && ge(t), n());
	}, ge = (e) => {
		for (let t = e - 1; t >= 0; t--) {
			let e = bc(Q(c(), {
				month: d.value(t + 1),
				year: f.value(t + 1)
			}), 1);
			J(t, Mo(e), Z(e));
		}
		for (let t = e + 1; t <= v.value.count - 1; t++) {
			let e = sa(Q(c(), {
				month: d.value(t - 1),
				year: f.value(t - 1)
			}), 1);
			J(t, Mo(e), Z(e));
		}
	}, _e = () => {
		if (Array.isArray(m.value) && m.value.length === 2) {
			let e = c(c(m.value[1] ?? sa(m.value[0], 1))), [t, n] = [Mo(m.value[0]), Z(m.value[0])], [r, i] = [Mo(m.value[1]), Z(m.value[1])];
			(t !== r || t === r && n !== i) && v.value.solo && J(1, Mo(e), Z(e));
		} else m.value && !Array.isArray(m.value) && (J(0, Mo(m.value), Z(m.value)), le(c()));
	}, ve = () => {
		h.startDate && (J(0, Mo(c(h.startDate)), Z(c(h.startDate))), v.value.count && ge(0));
	}, ye = (e, t) => {
		if (x.value.monthChangeOnScroll) {
			let n = Date.now() - o.value.getTime(), r = Math.abs(e.deltaY), i = 500;
			r > 1 && (i = 100), r > 100 && (i = 0), n > i && (o.value = /* @__PURE__ */ new Date(), he(x.value.monthChangeOnScroll === "inverse" ? e.deltaY : -e.deltaY, t));
		}
	}, be = (e, t, n = !1) => {
		x.value.monthChangeOnArrows && h.vertical === n && xe(e, t);
	}, xe = (e, t) => {
		he(e === "right" ? -1 : 1, t);
	}, Se = (e) => {
		if (C.value.markers) return K(e.value, C.value.markers);
	}, Ce = (e, t) => {
		switch (h.sixWeeks === !0 ? "append" : h.sixWeeks) {
			case "prepend": return [!0, !1];
			case "center": return [e == 0, !0];
			case "fair": return [e == 0 || t > e, !0];
			case "append": return [!1, !1];
			default: return [!1, !1];
		}
	}, we = (e, t, n, r) => {
		if (h.sixWeeks && e.length < 6) {
			let i = 6 - e.length, a = (t.getDay() + 7 - r) % 7, o = 6 - (n.getDay() + 7 - r) % 7, [s, c] = Ce(a, o);
			for (let n = 1; n <= i; n++) if (c ? !!(n % 2) == s : s) {
				let n = e[0].days[0], r = Te(oa(n.value, -7), Mo(t));
				e.unshift({ days: r });
			} else {
				let n = e[e.length - 1], r = n.days[n.days.length - 1], i = Te(oa(r.value, 1), Mo(t));
				e.push({ days: i });
			}
		}
		return e;
	}, Te = (e, t) => {
		let n = c(e), r = [];
		for (let e = 0; e < 7; e++) {
			let i = oa(n, e), a = Mo(i) !== t;
			r.push({
				text: h.hideOffsetDates && a ? "" : z(i),
				value: i,
				current: !a,
				classData: {}
			});
		}
		return r;
	}, Ee = (e, t) => {
		let n = [], r = c(new Date(t, e)), i = c(new Date(t, e + 1, 0)), a = h.weekStart, o = da(r, { weekStartsOn: a }), s = (t) => {
			let r = Te(t, e);
			if (n.push({ days: r }), !n[n.length - 1].days.some((e) => H(c(e.value), B(i)))) {
				let e = oa(t, 7);
				s(e);
			}
		};
		return s(o), we(n, r, i, a);
	}, De = (e) => {
		let t = V({
			hours: p.hours,
			minutes: p.minutes,
			seconds: Pe()
		}, c(e.value));
		l("date-click", t), w.value.enabled ? te(t, w.value.limit) : m.value = t, r(), S().then(() => {
			ae();
		});
	}, Oe = (e) => b.value.noDisabledRange ? U(i.value[0], e).some((e) => k(e)) : !1, ke = () => {
		i.value = m.value ? m.value.slice().filter((e) => !!e) : [], i.value.length === 2 && !(b.value.fixedStart || b.value.fixedEnd) && (i.value = []);
	}, Ae = (e, t) => {
		let n = [c(e.value), oa(c(e.value), +b.value.autoRange)];
		A(n) ? (t && je(e.value), i.value = n) : l("invalid-date", e.value);
	}, je = (e) => {
		let t = Mo(c(e)), n = Z(c(e));
		if (J(0, t, n), v.value.count > 0) for (let t = 1; t < v.value.count; t++) {
			let n = ce(Q(c(e), {
				year: f.value(t - 1),
				month: d.value(t - 1)
			}));
			J(t, n.month, n.year);
		}
	}, Me = (e) => {
		if (Oe(e.value) || !j(e.value, m.value, +!b.value.fixedStart)) return l("invalid-date", e.value);
		i.value = G(c(e.value));
	}, Ne = (e, t) => {
		if (ke(), b.value.autoRange) return Ae(e, t);
		if (b.value.fixedStart || b.value.fixedEnd) return Me(e);
		i.value[0] ? j(c(e.value), m.value) && !Oe(e.value) ? ee(c(e.value), c(i.value[0])) ? b.value.autoSwitchStartEnd ? (i.value.unshift(c(e.value)), l("range-end", i.value[0])) : (i.value[0] = c(e.value), l("range-start", i.value[0])) : (i.value[1] = c(e.value), l("range-end", i.value[1])) : l("invalid-date", e.value) : (i.value[0] = c(e.value), l("range-start", i.value[0]));
	}, Pe = (e = !0) => T.value.enableSeconds ? Array.isArray(p.seconds) ? e ? p.seconds[0] : p.seconds[1] : p.seconds : 0, Fe = (e) => {
		i.value[e] = V({
			hours: p.hours[e],
			minutes: p.minutes[e],
			seconds: Pe(e !== 1)
		}, i.value[e]);
	}, Ie = () => {
		i.value[0] && i.value[1] && +i.value?.[0] > +i.value?.[1] && (i.value.reverse(), l("range-start", i.value[0]), l("range-end", i.value[1]));
	}, Le = () => {
		i.value.length && (i.value[0] && !i.value[1] ? Fe(0) : (Fe(0), Fe(1), r()), Ie(), m.value = i.value.slice(), W(i.value, t, i.value.length < 2 || E.value?.steps.length ? e.flowStep !== E.value?.steps?.length : !1));
	}, Re = (e, t = !1) => {
		if (k(e.value) || !e.current && h.hideOffsetDates) return l("invalid-date", e.value);
		if (s.value = structuredClone(e), !b.value.enabled) return De(e);
		Array.isArray(p.hours) && Array.isArray(p.minutes) && !w.value.enabled && (Ne(e, t), Le());
	}, ze = (t, i) => {
		J(t, i.month, i.year, !0), v.value.count && !v.value.solo && ge(t), l("update-month-year", {
			instance: t,
			month: i.month,
			year: i.year
		}), n(v.value.solo ? t : void 0);
		let a = E.value?.steps?.length ? E.value.steps[e.flowStep] : void 0;
		!i.fromNav && (a === Jc.month || a === Jc.year) && r();
	}, Be = (e) => {
		ne({ value: e }), re(), h.multiCalendars && S().then(() => oe(!0));
	}, Ve = () => {
		let e = c();
		return h.actionRow?.nowBtnRound && (e = hc(e, {
			roundingMethod: h.actionRow.nowBtnRound.rounding ?? "ceil",
			nearestTo: h.actionRow.nowBtnRound.roundTo ?? 15
		})), e;
	}, He = () => {
		let e = Ve();
		!b.value.enabled && !w.value.enabled ? m.value = e : m.value && Array.isArray(m.value) && m.value[0] ? w.value.enabled ? m.value = [...m.value, e] : m.value = ee(e, m.value[0]) ? [e, m.value[0]] : [m.value[0], e] : m.value = [e], re();
	}, Ue = () => {
		if (Array.isArray(m.value)) {
			if (w.value.enabled) {
				let e = We();
				m.value[m.value.length - 1] = N(e);
			} else m.value = m.value.map((e, t) => e && N(e, t));
		} else m.value = N(m.value);
		t("time-update");
	}, We = () => Array.isArray(m.value) && m.value.length ? m.value[m.value.length - 1] : null, Ge = (e) => {
		let t = "";
		if (b.value.enabled && Array.isArray(m.value)) for (let n of Object.keys(e)) {
			let r = e[n];
			Array.isArray(r) && (p[n][0] !== r[0] && (t = "range-start"), p[n][1] !== r[1] && (t = "range-start"));
		}
		return t;
	};
	return {
		calendars: u,
		modelValue: m,
		month: d,
		year: f,
		time: p,
		disabledTimesConfig: R,
		today: g,
		validateTime: L,
		getCalendarDays: Ee,
		getMarker: Se,
		handleScroll: ye,
		handleSwipe: xe,
		handleArrow: be,
		selectDate: Re,
		updateMonthYear: ze,
		presetDate: Be,
		selectCurrentDate: He,
		updateTime: (e) => {
			let t = Ge(e);
			M(e, Ue), t && l(t, m.value[t === "range-start" ? 0 : 1]);
		},
		assignMonthAndYear: le,
		setStartTime: ie
	};
}, Qu = () => {
	let { isModelAuto: e, matchDate: t, isDateAfter: n, isDateBefore: r, isDateBetween: i, isDateEqual: a, getWeekFromDate: o, getBeforeAndAfterInRange: s } = Fl(), { getDate: c, today: l, rootProps: u, defaults: { multiCalendars: d, multiDates: f, ui: p, highlight: m, safeDates: h, range: g }, modelValue: _ } = $(), { isDisabled: v } = il(), y = F(null), b = (e) => {
		!e.current && u.hideOffsetDates || (y.value = e.value);
	}, x = () => {
		y.value = null;
	}, S = (e) => Array.isArray(_.value) && g.value.enabled && _.value[0] && y.value ? e ? n(y.value, _.value[0]) : r(y.value, _.value[0]) : !0, C = (e, t) => {
		let n = _.value && Array.isArray(_.value) && _.value ? t ? _.value[0] || null : _.value[1] : null;
		return a(c(e.value), n);
	}, w = (e) => {
		let t = Array.isArray(_.value) ? _.value[0] : null;
		return !e || !r(y.value, t);
	}, T = (e, t = !0) => (g.value.enabled || u.weekPicker) && Array.isArray(_.value) && _.value.length === 2 ? u.hideOffsetDates && !e.current ? !1 : a(c(e.value), _.value[+!t]) : g.value.enabled ? C(e, t) && w(t) || a(e.value, Array.isArray(_.value) ? _.value[0] : null) && S(t) : !1, E = (e, t) => {
		if (Array.isArray(_.value) && _.value[0] && _.value.length === 1) {
			let i = a(e.value, y.value);
			return t ? n(_.value[0], e.value) && i : r(_.value[0], e.value) && i;
		}
		return !1;
	}, D = (e) => !_.value || u.hideOffsetDates && !e.current ? !1 : g.value.enabled ? u.modelAuto && Array.isArray(_.value) ? a(e.value, _.value[0] ?? l) : !1 : f.value.enabled && Array.isArray(_.value) ? _.value.some((t) => a(t, e.value)) : a(e.value, _.value ? _.value : l), O = (e) => {
		if (g.value.autoRange || u.weekPicker) {
			if (y.value) {
				if (u.hideOffsetDates && !e.current) return !1;
				let t = oa(y.value, +g.value.autoRange), n = o(c(y.value), u.weekStart);
				return u.weekPicker ? a(n[1], c(e.value)) : a(t, c(e.value));
			}
			return !1;
		}
		return !1;
	}, k = (e) => {
		if (g.value.autoRange || u.weekPicker) {
			if (y.value) {
				let t = oa(y.value, +g.value.autoRange);
				if (u.hideOffsetDates && !e.current) return !1;
				let i = o(c(y.value), u.weekStart);
				return u.weekPicker ? n(e.value, i[0]) && r(e.value, i[1]) : n(e.value, y.value) && r(e.value, t);
			}
			return !1;
		}
		return !1;
	}, A = (e) => {
		if (g.value.autoRange || u.weekPicker) {
			if (y.value) {
				if (u.hideOffsetDates && !e.current) return !1;
				let t = o(c(y.value), u.weekStart);
				return u.weekPicker ? a(t[0], e.value) : a(y.value, e.value);
			}
			return !1;
		}
		return !1;
	}, j = (e) => i(_.value, y.value, e.value), M = () => u.modelAuto && Array.isArray(_.value) ? !!_.value[0] : !1, N = () => !u.modelAuto || e(_.value), P = (e) => {
		if (u.weekPicker) return !1;
		let t = !g.value.enabled || !T(e) && !T(e, !1);
		return !v(e.value) && !D(e) && !(!e.current && u.hideOffsetDates) && t;
	}, I = (e) => g.value.enabled ? u.modelAuto ? M() && D(e) : !1 : D(e), L = (e) => m.value ? t(e.value, h.value.highlight) : !1, R = (e) => {
		let t = v(e.value);
		return t && (typeof m.value == "function" ? !m.value(e.value, t) : !m.value.options.highlightDisabled);
	}, z = (e) => typeof m.value == "function" ? m.value(e.value) : m.value.weekdays?.includes(e.value.getDay()), B = (e) => (g.value.enabled || u.weekPicker) && (!(d.value.count > 0) || e.current) && N() && !(!e.current && u.hideOffsetDates) && !D(e) ? j(e) : !1, V = (e) => {
		if (Array.isArray(_.value) && _.value.length === 1) {
			let { before: t, after: n } = s(+g.value.maxRange, _.value[0]);
			return Fo(e.value, t) || Po(e.value, n);
		}
		return !1;
	}, ee = (e) => {
		if (Array.isArray(_.value) && _.value.length === 1) {
			let { before: t, after: n } = s(+g.value.minRange, _.value[0]);
			return i([t, n], _.value[0], e.value);
		}
		return !1;
	}, H = (e) => g.value.enabled && (g.value.maxRange || g.value.minRange) ? g.value.maxRange && g.value.minRange ? V(e) || ee(e) : g.value.maxRange ? V(e) : ee(e) : !1, U = (e) => {
		let { isRangeStart: t, isRangeEnd: i } = ne(e), o = g.value.enabled ? t || i : !1;
		return {
			dp__cell_offset: !e.current,
			dp__pointer: !u.disabled && !(!e.current && u.hideOffsetDates) && !v(e.value) && !H(e),
			dp__cell_disabled: v(e.value) || H(e),
			dp__cell_highlight: !R(e) && (L(e) || z(e)) && !I(e) && !o && !A(e) && !(B(e) && u.weekPicker) && !i,
			dp__cell_highlight_active: !R(e) && (L(e) || z(e)) && I(e),
			dp__today: !u.noToday && a(e.value, l) && e.current,
			"dp--past": r(e.value, l),
			"dp--future": n(e.value, l)
		};
	}, W = (e) => ({
		dp__active_date: I(e),
		dp__date_hover: P(e)
	}), G = (e) => {
		if (_.value && !Array.isArray(_.value)) {
			let t = o(_.value, u.weekStart);
			return {
				...ie(e),
				dp__range_start: a(t[0], e.value),
				dp__range_end: a(t[1], e.value),
				dp__range_between_week: n(e.value, t[0]) && r(e.value, t[1])
			};
		}
		return { ...ie(e) };
	}, te = (e) => {
		if (_.value && Array.isArray(_.value)) {
			let t = o(_.value[0], u.weekStart), i = _.value[1] ? o(_.value[1], u.weekStart) : [];
			return {
				...ie(e),
				dp__range_start: a(t[0], e.value) || a(i[0], e.value),
				dp__range_end: a(t[1], e.value) || a(i[1], e.value),
				dp__range_between_week: n(e.value, t[0]) && r(e.value, t[1]) || n(e.value, i[0]) && r(e.value, i[1]),
				dp__range_between: n(e.value, t[1]) && r(e.value, i[0])
			};
		}
		return { ...ie(e) };
	}, ne = (e) => ({
		isRangeStart: d.value.count > 0 ? e.current && T(e) && N() : T(e) && N(),
		isRangeEnd: d.value.count > 0 ? e.current && T(e, !1) && N() : T(e, !1) && N()
	}), K = (e) => g.value.enabled && (g.value.fixedStart || g.value.fixedEnd) && Array.isArray(_.value) && _.value.length === 2, q = (e, t, n, r) => !K(_.value) || !y.value ? !1 : t ? g.value.fixedEnd && a(e.value, y.value) && Fo(e.value, _.value[0]) && !n : g.value.fixedStart && a(e.value, y.value) && Po(e.value, _.value[1]) && !r, J = (e, t) => !K(_.value) || !y.value ? !1 : t ? g.value.fixedEnd && Po(e.value, y.value) && Fo(e.value, _.value[0]) : g.value.fixedStart && Fo(e.value, y.value) && Po(e.value, _.value[1]), re = (e) => {
		let { isRangeStart: t, isRangeEnd: n } = ne(e);
		return {
			dp__range_start: t,
			dp__range_end: n,
			dp__range_between: B(e),
			dp__date_hover: a(e.value, y.value) && !t && !n && !u.weekPicker,
			dp__date_hover_start: E(e, !0) || q(e, !0, t, n),
			dp__date_hover_end: E(e, !1) || q(e, !1, t, n),
			"dp--extended-fixed-start": J(e, !0),
			"dp--extended-fixed-end": J(e, !1)
		};
	}, ie = (e) => ({
		...re(e),
		dp__cell_auto_range: k(e),
		dp__cell_auto_range_start: A(e),
		dp__cell_auto_range_end: O(e)
	}), Y = (e) => g.value.enabled ? g.value.autoRange ? ie(e) : u.modelAuto ? {
		...W(e),
		...re(e)
	} : u.weekPicker ? te(e) : re(e) : u.weekPicker ? G(e) : W(e);
	return {
		setHoverDate: b,
		clearHoverDate: x,
		getDayClassData: (e) => u.hideOffsetDates && !e.current ? {} : {
			...U(e),
			...Y(e),
			[p.value.dayClass ? p.value.dayClass(e.value, _.value) : ""]: !0,
			...p.value.calendarCell
		}
	};
}, $u = { key: 0 }, ed = /* @__PURE__ */ p({
	__name: "DatePicker",
	props: /* @__PURE__ */ y({
		flowStep: {},
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	}, kl),
	emits: [
		"mount",
		"update-flow-step",
		"reset-flow",
		"focus-menu",
		"select-date",
		"time-update",
		"auto-apply"
	],
	setup(e, { expose: t, emit: r }) {
		let i = r, { month: l, year: d, modelValue: p, time: m, disabledTimesConfig: g, today: _, validateTime: v, getCalendarDays: y, getMarker: b, handleArrow: S, handleScroll: T, handleSwipe: E, selectDate: D, updateMonthYear: O, presetDate: k, selectCurrentDate: A, updateTime: M, assignMonthAndYear: N, setStartTime: P } = Zu(e, i, fe, pe), F = W(), { setHoverDate: R, getDayClassData: z, clearHoverDate: B } = Qu(), { getDate: V, rootEmit: ee, rootProps: U, defaults: { multiCalendars: te, timeConfig: ne } } = $(), { getYears: J, getMonths: re } = Rl(), { getCellId: ie } = Fl(), Y = G("calendar-header"), ae = G("calendar"), oe = G("time-picker"), se = Gl(F, Hl.Calendar), ce = Gl(F, Hl.DatePickerHeader), le = Gl(F, Hl.TimePicker), ue = (e) => {
			i("mount", e);
		};
		K(te, (e, t) => {
			e.count - t.count > 0 && N();
		}, { deep: !0 });
		let de = a(() => (e) => y(l.value(e), d.value(e)).map((e) => ({
			...e,
			days: e.days.map((e) => (e.marker = b(e), e.classData = z(e), e))
		})));
		function fe(e) {
			e || e === 0 ? ae.value?.[e]?.triggerTransition(l.value(e), d.value(e)) : ae.value?.forEach((e, t) => e?.triggerTransition(l.value(t), d.value(t)));
		}
		function pe() {
			i("update-flow-step");
		}
		let me = (e, t, n = 0) => {
			Y.value?.[n]?.toggleMonthPicker(e, t);
		}, he = (e, t, n = 0) => {
			Y.value?.[n]?.toggleYearPicker(e, t);
		}, ge = (e, t, n) => {
			oe.value?.toggleTimePicker(e, t, n);
		}, _e = (e, t) => {
			if (!U.range) {
				let n = p.value ? p.value : _, r = t ? V(t) : n, i = e ? da(r, { weekStartsOn: 1 }) : Fa(r, { weekStartsOn: 1 });
				D({
					value: i,
					current: Mo(r) === l.value(0),
					text: "",
					classData: {}
				}), document.getElementById(ie(i))?.focus();
			}
		}, ve = (e) => {
			Y.value?.[0]?.handleMonthYearChange(e, !0);
		}, ye = (e) => {
			O(0, {
				month: l.value(0),
				year: d.value(0) + (e ? 1 : -1),
				fromNav: !0
			});
		}, be = (e) => {
			ee("overlay-toggle", {
				open: !1,
				overlay: e
			}), i("focus-menu");
		};
		return t({
			clearHoverDate: B,
			presetDate: k,
			selectCurrentDate: A,
			handleArrow: S,
			updateMonthYear: O,
			setStartTime: P,
			toggleMonthPicker: me,
			toggleYearPicker: he,
			toggleTimePicker: ge,
			getSidebarProps: () => ({
				modelValue: p,
				month: l,
				year: d,
				time: m,
				updateTime: M,
				updateMonthYear: O,
				selectDate: D,
				presetDate: k
			}),
			changeMonth: ve,
			changeYear: ye,
			selectWeekDate: _e
		}), (t, r) => (j(), c(n, null, [f(uu, { collapse: e.collapse }, {
			default: q(({ instances: i, wrapClass: a }) => [(j(!0), c(n, null, I(i, (n) => (j(), c("div", {
				key: n,
				class: C(a)
			}, [H(U).hideMonthYearSelect ? s("", !0) : (j(), o(Uu, {
				key: 0,
				ref_for: !0,
				ref: "calendar-header",
				months: H(re)(),
				years: H(J)(),
				month: H(l)(n),
				year: H(d)(n),
				instance: n,
				"menu-wrap-ref": e.menuWrapRef,
				onMount: r[0] ||= (e) => ue(H(qc).header),
				onResetFlow: r[1] ||= (e) => t.$emit("reset-flow"),
				onUpdateMonthYear: (e) => H(O)(n, e),
				onOverlayClosed: be
			}, u({ _: 2 }, [I(H(ce), (e, n) => ({
				name: e,
				fn: q((n) => [L(t.$slots, e, x({ ref_for: !0 }, n))])
			}))]), 1032, [
				"months",
				"years",
				"month",
				"year",
				"instance",
				"menu-wrap-ref",
				"onUpdateMonthYear"
			])), f(Xu, {
				ref_for: !0,
				ref: "calendar",
				"mapped-dates": de.value(n),
				instance: n,
				month: H(l)(n),
				year: H(d)(n),
				onSelectDate: (e) => H(D)(e, n !== 1),
				onSetHoverDate: r[2] ||= (e) => H(R)(e),
				onHandleScroll: (e) => H(T)(e, n),
				onHandleSwipe: (e) => H(E)(e, n),
				onMount: r[3] ||= (e) => ue(H(qc).calendar)
			}, u({ _: 2 }, [I(H(se), (e, n) => ({
				name: e,
				fn: q((n) => [L(t.$slots, e, x({ ref_for: !0 }, n))])
			}))]), 1032, [
				"mapped-dates",
				"instance",
				"month",
				"year",
				"onSelectDate",
				"onHandleScroll",
				"onHandleSwipe"
			])], 2))), 128))]),
			_: 3
		}, 8, ["collapse"]), H(ne).enableTimePicker ? (j(), c("div", $u, [L(t.$slots, "time-picker", w(h({
			time: H(m),
			updateTime: H(M)
		})), () => [f(Nu, {
			ref: "time-picker",
			hours: H(m).hours,
			minutes: H(m).minutes,
			seconds: H(m).seconds,
			"disabled-times-config": H(g),
			"validate-time": H(v),
			"no-overlay-focus": e.noOverlayFocus,
			onMount: r[4] ||= (e) => ue(H(qc).timePicker),
			"onUpdate:hours": r[5] ||= (e) => H(M)({
				hours: e,
				minutes: H(m).minutes,
				seconds: H(m).seconds
			}),
			"onUpdate:minutes": r[6] ||= (e) => H(M)({
				hours: H(m).hours,
				minutes: e,
				seconds: H(m).seconds
			}),
			"onUpdate:seconds": r[7] ||= (e) => H(M)({
				hours: H(m).hours,
				minutes: H(m).minutes,
				seconds: e
			}),
			onResetFlow: r[8] ||= (e) => t.$emit("reset-flow")
		}, u({ _: 2 }, [I(H(le), (e, n) => ({
			name: e,
			fn: q((n) => [L(t.$slots, e, w(h(n)))])
		}))]), 1032, [
			"hours",
			"minutes",
			"seconds",
			"disabled-times-config",
			"validate-time",
			"no-overlay-focus"
		])])])) : s("", !0)], 64));
	}
}), td = (e, t) => {
	let { getDate: n, modelValue: r, year: i, calendars: o, defaults: { highlight: s, range: c, multiDates: l } } = $(), { isDateBetween: u, isDateEqual: d } = Fl(), { checkRangeAutoApply: f, handleMultiDatesSelect: p, setMonthOrYearRange: m } = gu();
	rl();
	let { isDisabled: h } = il(), { formatQuarterText: g } = Ll(), { selectYear: _, groupedYears: v, showYearPicker: y, isDisabled: b, toggleYearPicker: x, handleYearSelect: S, handleYear: C, setStartDate: w } = hu(t), T = F();
	O(() => {
		w();
	});
	let E = a(() => (e) => r.value ? Array.isArray(r.value) ? r.value.some((t) => qs(e, t)) : qs(r.value, e) : !1), D = (e) => {
		if (c.value.enabled) {
			if (Array.isArray(r.value)) {
				let t = d(e, r.value[0]) || d(e, r.value[1]);
				return u(r.value, T.value, e) && !t;
			}
			return !1;
		}
		return !1;
	}, k = (e, t) => e.quarter === wa(t) && e.year === Z(t), A = (e) => typeof s.value == "function" ? s.value({
		quarter: wa(e),
		year: Z(e)
	}) : s.value.quarters.some((t) => k(t, e)), j = a(() => (e) => {
		let t = Q(n(), { year: i.value(e) });
		return ja({
			start: Pa(t),
			end: Na(t)
		}).map((e) => {
			let t = Aa(e), n = Ia(e), r = h(e), i = D(t), a = A(t);
			return {
				text: g(t, n),
				value: t,
				active: E.value(t),
				highlighted: a,
				disabled: r,
				isBetween: i
			};
		});
	}), M = (e) => {
		p(e, l.value.limit), t("auto-apply", !0);
	}, N = (e) => {
		r.value = m(e), f(r.value, t, r.value.length < 2);
	}, P = (e) => {
		r.value = e, t("auto-apply");
	};
	return {
		groupedYears: v,
		year: i,
		isDisabled: b,
		quarters: j,
		showYearPicker: y,
		modelValue: r,
		selectYear: _,
		toggleYearPicker: x,
		handleYearSelect: S,
		handleYear: C,
		setHoverDate: (e) => {
			T.value = e;
		},
		selectQuarter: (e, t, n) => {
			if (!n) return o.value[t].month = Mo(Ia(e)), l.value.enabled ? M(e) : c.value.enabled ? N(e) : P(e);
		}
	};
}, nd = { class: "dp--quarter-items" }, rd = [
	"data-test-id",
	"disabled",
	"onClick",
	"onMouseover"
], id = /* @__PURE__ */ p({
	__name: "QuarterPicker",
	props: {
		flowStep: {},
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["reset-flow", "auto-apply"],
	setup(e, { expose: t, emit: r }) {
		let i = r, a = e, { defaults: { config: p } } = $(), m = W(), { boolHtmlAttribute: h } = Bl(), g = Gl(m, Hl.YearMode), { groupedYears: _, year: v, isDisabled: y, quarters: b, modelValue: S, showYearPicker: w, setHoverDate: E, selectQuarter: D, toggleYearPicker: O, handleYearSelect: k, handleYear: A } = td(a, i);
		return t({ getSidebarProps: () => ({
			modelValue: S,
			year: v,
			selectQuarter: D,
			handleYearSelect: k,
			handleYear: A
		}) }), (t, r) => (j(), o(uu, {
			collapse: e.collapse,
			stretch: ""
		}, {
			default: q(({ instances: e, wrapClass: r }) => [(j(!0), c(n, null, I(e, (e) => (j(), c("div", {
				key: e,
				class: C(r)
			}, [l("div", {
				class: "dp-quarter-picker-wrap",
				style: T({ minHeight: `${H(p).modeHeight}px` })
			}, [
				t.$slots["top-extra"] ? L(t.$slots, "top-extra", {
					key: 0,
					value: H(S)
				}) : s("", !0),
				l("div", null, [f(mu, {
					items: H(_)(e),
					instance: e,
					"show-year-picker": H(w)[e],
					year: H(v)(e),
					"is-disabled": (t) => H(y)(e, t),
					onHandleYear: (t) => H(A)(e, t),
					onYearSelect: (t) => H(k)(t, e),
					onToggleYearPicker: (t) => H(O)(e, t?.flow, t?.show)
				}, u({ _: 2 }, [I(H(g), (e, n) => ({
					name: e,
					fn: q((n) => [L(t.$slots, e, x({ ref_for: !0 }, n))])
				}))]), 1032, [
					"items",
					"instance",
					"show-year-picker",
					"year",
					"is-disabled",
					"onHandleYear",
					"onYearSelect",
					"onToggleYearPicker"
				])]),
				l("div", nd, [(j(!0), c(n, null, I(H(b)(e), (n, r) => (j(), c("div", { key: r }, [l("button", {
					type: "button",
					class: C(["dp--qr-btn", {
						"dp--qr-btn-active": n.active,
						"dp--qr-btn-between": n.isBetween,
						"dp--qr-btn-disabled": n.disabled,
						"dp--highlighted": n.highlighted
					}]),
					"data-dp-action-element": "0",
					"data-test-id": n.value,
					disabled: H(h)(n.disabled),
					onClick: (t) => H(D)(n.value, e, n.disabled),
					onMouseover: (e) => H(E)(n.value)
				}, [L(t.$slots, "quarter", {
					value: n.value,
					text: n.text
				}, () => [d(B(n.text), 1)])], 42, rd)]))), 128))])
			], 4)], 2))), 128))]),
			_: 3
		}, 8, ["collapse"]));
	}
}), ad = [
	"id",
	"tabindex",
	"role",
	"aria-label"
], od = {
	key: 0,
	class: "dp--menu-load-container"
}, sd = {
	key: 1,
	class: "dp--menu-header"
}, cd = ["data-dp-mobile"], ld = {
	key: 0,
	class: "dp__sidebar_left"
}, ud = ["data-dp-mobile"], dd = [
	"data-test-id",
	"data-dp-mobile",
	"onClick",
	"onKeydown"
], fd = { class: "dp__instance_calendar" }, pd = {
	key: 2,
	class: "dp__sidebar_right"
}, md = {
	key: 2,
	class: "dp__action_extra"
}, hd = /* @__PURE__ */ p({
	__name: "DatepickerMenu",
	props: {
		collapse: { type: Boolean },
		noOverlayFocus: { type: Boolean },
		getInputRect: { type: Function }
	},
	emits: [
		"close-picker",
		"select-date",
		"auto-apply",
		"time-update",
		"menu-blur"
	],
	setup(e, { expose: t, emit: r }) {
		let i = r, d = W(), { state: f, rootProps: p, defaults: { textInput: m, inline: g, config: _, ui: v, ariaLabels: y }, setState: b } = $(), { isMobile: x } = Il(), { handleEventPropagation: S, getElWithin: E, checkStopPropagation: D, checkKeyDown: k } = Pl();
		el();
		let M = G("inner-menu"), N = G("dp-menu"), P = G("dyn-cmp"), R = F(0), V = F(!1), U = F(!1), { flowStep: te, updateFlowStep: ne, childMount: K, resetFlow: J, handleFlow: re } = al(P), Y = (e) => {
			U.value = !0, _.value.allowPreventDefault && e.preventDefault(), D(e, _.value, !0);
		};
		O(() => {
			V.value = !0, ae(), globalThis.addEventListener("resize", ae);
			let e = ue(N);
			e && !m.value.enabled && !g.value.enabled && b("menuFocused", !0), e && (e.addEventListener("pointerdown", Y), e.addEventListener("mousedown", Y)), document.addEventListener("mousedown", De);
		}), A(() => {
			globalThis.removeEventListener("resize", ae), document.removeEventListener("mousedown", De);
			let e = ue(N);
			e && (e.removeEventListener("pointerdown", Y), e.removeEventListener("mousedown", Y));
		});
		let ae = () => {
			let e = ue(M);
			e && (R.value = e.getBoundingClientRect().width);
		}, oe = a(() => p.monthPicker ? vu : p.yearPicker ? bu : p.timePicker ? Iu : p.quarterPicker ? id : ed), se = () => {
			let e = ue(N);
			e && e.focus({ preventScroll: !0 });
		}, ce = a(() => P.value?.getSidebarProps() || {}), le = Gl(d, Hl.ActionRow), de = Gl(d, Hl.PassTrough), fe = a(() => ({
			dp__menu_disabled: p.disabled,
			dp__menu_readonly: p.readonly,
			"dp-menu-loading": p.loading
		})), pe = a(() => ({
			dp__menu: !0,
			dp__menu_index: !g.value.enabled,
			dp__relative: g.value.enabled,
			...v.value.menu
		})), me = (e) => {
			D(e, _.value, !0);
		}, he = (e) => {
			_.value.escClose && (i("close-picker"), S(e, _.value));
		}, ge = (e) => {
			p.arrowNavigation || (e === Xc.left || e === Xc.up ? be("handleArrow", Xc.left, 0, e === Xc.up) : be("handleArrow", Xc.right, 0, e === Xc.down));
		}, _e = (e) => {
			b("shiftKeyInMenu", e.shiftKey), !p.hideMonthYearSelect && e.code === Zc.tab && e.target.classList.contains("dp__menu") && f.shiftKeyInMenu && (e.preventDefault(), D(e, _.value, !0), i("close-picker"));
		}, ve = (e) => {
			P.value?.toggleTimePicker(!1, !1), P.value?.toggleMonthPicker(!1, !1, e), P.value?.toggleYearPicker(!1, !1, e);
		}, ye = (e, t = 0) => e === "month" ? P.value?.toggleMonthPicker(!1, !0, t) : e === "year" ? P.value?.toggleYearPicker(!1, !0, t) : e === "time" ? P.value?.toggleTimePicker(!0, !1) : ve(t), be = (e, ...t) => {
			P.value?.[e] && P.value?.[e](...t);
		}, xe = () => {
			be("selectCurrentDate");
		}, Se = (e) => {
			be("presetDate", ee(e));
		}, Ce = () => {
			be("clearHoverDate");
		}, we = (e, t) => {
			be("updateMonthYear", e, t);
		}, Te = (e, t) => {
			e.preventDefault(), ge(t);
		}, Ee = (e) => {
			if (_e(e), e.key === Zc.home || e.key === Zc.end) return be("selectWeekDate", e.key === Zc.home, e.target.getAttribute("id"));
			switch ((e.key === Zc.pageUp || e.key === Zc.pageDown) && (e.shiftKey ? (be("changeYear", e.key === Zc.pageUp), E(N.value, "overlay-year")?.focus()) : (be("changeMonth", e.key === Zc.pageUp), E(N.value, e.key === Zc.pageUp ? "action-prev" : "action-next")?.focus()), e.target.getAttribute("id") && N.value?.focus({ preventScroll: !0 })), e.key) {
				case Zc.esc: return he(e);
				case Zc.arrowLeft: return Te(e, Xc.left);
				case Zc.arrowRight: return Te(e, Xc.right);
				case Zc.arrowUp: return Te(e, Xc.up);
				case Zc.arrowDown: return Te(e, Xc.down);
				default: return;
			}
		}, De = (e) => {
			g.value.enabled && !g.value.input && !N.value?.contains(e.target) && U.value && (U.value = !1, i("menu-blur"));
		};
		return t({
			updateMonthYear: we,
			switchView: ye,
			onValueCleared: () => {
				P.value?.setStartTime?.();
			},
			handleFlow: re
		}), (t, r) => (j(), c("div", {
			id: H(p).menuId,
			ref: "dp-menu",
			tabindex: H(g).enabled ? void 0 : "0",
			role: H(g).enabled ? void 0 : "dialog",
			"aria-label": H(y)?.menu,
			class: C(pe.value),
			onMouseleave: Ce,
			onClick: me,
			onKeydown: Ee
		}, [
			(H(p).disabled || H(p).readonly) && H(g).enabled || H(p).loading ? (j(), c("div", {
				key: 0,
				class: C(fe.value)
			}, [H(p).loading ? (j(), c("div", od, [...r[5] ||= [l("span", { class: "dp--menu-loader" }, null, -1)]])) : s("", !0)], 2)) : s("", !0),
			t.$slots["menu-header"] ? (j(), c("div", sd, [L(t.$slots, "menu-header")])) : s("", !0),
			L(t.$slots, "arrow"),
			l("div", {
				ref: "inner-menu",
				class: C({
					dp__menu_content_wrapper: H(p).presetDates?.length || !!t.$slots["left-sidebar"] || !!t.$slots["right-sidebar"],
					"dp--menu-content-wrapper-collapsed": e.collapse && (H(p).presetDates?.length || !!t.$slots["left-sidebar"] || !!t.$slots["right-sidebar"])
				}),
				"data-dp-mobile": H(x),
				style: T({ "--dp-menu-width": `${R.value}px` })
			}, [
				t.$slots["left-sidebar"] ? (j(), c("div", ld, [L(t.$slots, "left-sidebar", w(h(ce.value)))])) : s("", !0),
				H(p).presetDates.length ? (j(), c("div", {
					key: 1,
					class: C({
						"dp--preset-dates-collapsed": e.collapse,
						"dp--preset-dates": !0
					}),
					"data-dp-mobile": H(x)
				}, [(j(!0), c(n, null, I(H(p).presetDates, (r, i) => (j(), c(n, { key: i }, [r.slot ? L(t.$slots, r.slot, {
					key: 0,
					presetDate: Se,
					label: r.label,
					value: r.value
				}) : (j(), c("button", {
					key: 1,
					type: "button",
					style: T(r.style || {}),
					class: C(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
					"data-test-id": r.testId ?? void 0,
					"data-dp-mobile": H(x),
					onClick: ie((e) => Se(r.value), ["prevent"]),
					onKeydown: (e) => H(k)(e, () => Se(r.value), !0)
				}, B(r.label), 47, dd))], 64))), 128))], 10, ud)) : s("", !0),
				l("div", fd, [(j(), o(z(oe.value), {
					ref: "dyn-cmp",
					"flow-step": H(te),
					collapse: e.collapse,
					"no-overlay-focus": e.noOverlayFocus,
					"menu-wrap-ref": N.value,
					onMount: H(K),
					onUpdateFlowStep: H(ne),
					onResetFlow: H(J),
					onFocusMenu: se,
					onSelectDate: r[0] ||= (e) => t.$emit("select-date"),
					onAutoApply: r[1] ||= (e) => t.$emit("auto-apply", e),
					onTimeUpdate: r[2] ||= (e) => t.$emit("time-update")
				}, u({ _: 2 }, [I(H(de), (e, n) => ({
					name: e,
					fn: q((n) => [L(t.$slots, e, w(h({ ...n })))])
				}))]), 1064, [
					"flow-step",
					"collapse",
					"no-overlay-focus",
					"menu-wrap-ref",
					"onMount",
					"onUpdateFlowStep",
					"onResetFlow"
				]))]),
				t.$slots["right-sidebar"] ? (j(), c("div", pd, [L(t.$slots, "right-sidebar", w(h(ce.value)))])) : s("", !0)
			], 14, cd),
			t.$slots["action-extra"] ? (j(), c("div", md, [t.$slots["action-extra"] ? L(t.$slots, "action-extra", {
				key: 0,
				selectCurrentDate: xe
			}) : s("", !0)])) : s("", !0),
			!H(p).autoApply || H(_).keepActionRow ? (j(), o(nu, {
				key: 3,
				"menu-mount": V.value,
				"calendar-width": R.value,
				onClosePicker: r[3] ||= (e) => t.$emit("close-picker"),
				onSelectDate: r[4] ||= (e) => t.$emit("select-date"),
				onSelectNow: xe
			}, u({ _: 2 }, [I(H(le), (e, n) => ({
				name: e,
				fn: q((n) => [L(t.$slots, e, w(h(n)))])
			}))]), 1032, ["menu-mount", "calendar-width"])) : s("", !0)
		], 42, ad));
	}
}), gd = ["data-dp-mobile"], _d = /* @__PURE__ */ p({
	__name: "VueDatePicker",
	setup(e, { expose: t }) {
		let { rootEmit: n, setState: d, inputValue: p, modelValue: m, rootProps: g, defaults: { inline: _, config: v, textInput: y, range: b, multiDates: x, teleport: E, floatingConfig: D } } = $(), { validateDate: k, isValidTime: M } = il(), { menuTransition: N, showTransition: P } = nl(), { isMobile: R } = Il(), { findNextFocusableElement: z, getNumVal: B } = Pl(), ee = W(), U = F(!1), te = F(_.value.enabled || g.centered), ne = V(g, "modelValue"), J = V(g, "timezone"), re = G("dp-menu-wrap"), ie = G("dp-menu"), Y = G("input-cmp"), ae = G("picker-wrapper"), oe = G("menu-arrow"), se = F(!1), ce = F(!1), ue = F(!1), de = F(!0), { floatingStyles: fe, middlewareData: pe, placement: me, y: he } = Xi(Y, re, {
			strategy: D.value.strategy,
			placement: D.value.placement,
			middleware: ((e) => (D.value.arrow && e.push(qi({ element: D.value.arrow === !0 ? oe : D.value.arrow })), D.value.flip && e.push(Ii(typeof D.value.flip == "object" ? D.value.flip : {})), D.value.shift && e.push(Fi(typeof D.value.shift == "object" ? D.value.shift : {})), e))([Pi(D.value.offset)]),
			whileElementsMounted: Ni
		});
		O(() => {
			ve(g.modelValue), S().then(() => {
				_.value.enabled || globalThis.addEventListener("resize", De);
			}), _.value.enabled && (U.value = !0), globalThis.addEventListener("keyup", Oe), globalThis.addEventListener("keydown", ke);
		}), A(() => {
			_.value.enabled || globalThis.removeEventListener("resize", De), globalThis.removeEventListener("keyup", Oe), globalThis.removeEventListener("keydown", ke);
		});
		let ge = Kl(ee, g.presetDates), _e = Gl(ee, Hl.Input);
		K([ne, J], () => {
			ve(ne.value);
		}, { deep: !0 }), K([me, he], () => {
			!_.value.enabled && !g.centered && de.value && (te.value = !1, S().then(() => {
				de.value = !1, te.value = !0;
			}));
		});
		let { parseExternalModelValue: ve, emitModelValue: ye, formatInputValue: be, checkBeforeEmit: xe } = tl(), Se = a(() => ({
			dp__main: !0,
			dp__theme_dark: g.dark,
			dp__theme_light: !g.dark,
			dp__flex_display: _.value.enabled,
			"dp--flex-display-collapsed": ue.value,
			dp__flex_display_with_input: _.value.input
		})), Ce = a(() => g.dark ? "dp__theme_dark" : "dp__theme_light"), we = a(() => _.value.enabled && (g.timePicker || g.monthPicker || g.yearPicker || g.quarterPicker)), Te = () => Y.value?.$el?.getBoundingClientRect() ?? {
			width: 0,
			left: 0,
			right: 0
		}, Ee = () => {
			U.value && v.value.closeOnScroll && Re();
		}, De = () => {
			let e = ie.value?.$el.getBoundingClientRect().width ?? 0;
			ue.value = document.body.offsetWidth <= e;
		}, Oe = (e) => {
			e.key === "Tab" && !_.value.enabled && !g.teleport && v.value.tabOutClosesMenu && (ae.value.contains(document.activeElement) || Re()), ce.value = e.shiftKey;
		}, ke = (e) => {
			ce.value = e.shiftKey;
		}, Ae = () => {
			!g.disabled && !g.readonly && (de.value = !0, U.value = !0, U.value && n("open"), U.value || Le(), ve(g.modelValue));
		}, je = () => {
			p.value = "", Le(), ie.value?.onValueCleared(), Y.value?.setParsedDate(null), n("update:model-value", null), n("cleared"), v.value.closeOnClearValue && Re();
		}, Me = () => {
			let e = m.value;
			return !e || !Array.isArray(e) && k(e) ? !0 : Array.isArray(e) ? x.value.enabled || e.length === 2 && k(e[0]) && k(e[1]) ? !0 : b.value.partialRange && !g.timePicker ? k(e[0]) : !1 : !1;
		}, Ne = () => {
			xe() && Me() ? (ye(), Re()) : n("invalid-select");
		}, Pe = (e) => {
			Fe(), ye(), v.value.closeOnAutoApply && !e && Re();
		}, Fe = () => {
			Y.value && y.value.enabled && Y.value.setParsedDate(m.value);
		}, Ie = (e = !1) => {
			g.autoApply && M(m.value) && Me() && (b.value.enabled && Array.isArray(m.value) ? (b.value.partialRange || m.value.length === 2) && Pe(e) : Pe(e));
		}, Le = () => {
			y.value.enabled || (m.value = null);
		}, Re = (e = !1) => {
			de.value = !0, e && m.value && v.value.setDateOnMenuClose && Ne(), _.value.enabled || (U.value && (U.value = !1, d("menuFocused", !1), d("shiftKeyInMenu", !1), n("closed"), p.value && ve(ne.value)), Le(), n("blur"));
		}, ze = (e, t, r = !1) => {
			if (!e) {
				m.value = null;
				return;
			}
			let i = Array.isArray(e) ? e.every((e) => k(e)) : k(e), a = M(e);
			i && a ? (d("isTextInputDate", !0), m.value = e, t ? (se.value = r, Ne(), n("text-submit")) : g.autoApply && Ie(!0), S().then(() => {
				d("isTextInputDate", !1);
			})) : n("invalid-date", e);
		}, Be = () => {
			g.autoApply && M(m.value) && ye(), Fe();
		}, Ve = () => U.value ? Re() : Ae(), He = (e) => {
			m.value = e;
		}, Ue = () => {
			y.value.enabled && (d("isInputFocused", !0), be()), n("focus");
		}, We = () => {
			y.value.enabled && (d("isInputFocused", !1), ve(g.modelValue), se.value && z(ae.value, ce.value)?.focus()), n("blur");
		}, Ge = (e, t) => {
			ie.value && ie.value.updateMonthYear(t ?? 0, {
				month: B(e.month),
				year: B(e.year)
			});
		}, Ke = (e) => {
			ve(e ?? g.modelValue);
		}, qe = (e, t) => {
			ie.value?.switchView(e, t);
		}, Je = (e, t) => {
			if (U.value) return v.value.onClickOutside ? v.value.onClickOutside(e, t) : Re(!0);
		};
		return le(re, (e) => Je(Me, e), { ignore: [Y] }), t({
			closeMenu: Re,
			selectDate: Ne,
			clearValue: je,
			openMenu: Ae,
			onScroll: Ee,
			formatInputValue: be,
			updateInternalModelValue: He,
			setMonthYear: Ge,
			parseModel: Ke,
			switchView: qe,
			toggleMenu: Ve,
			handleFlow: (e = 0) => {
				ie.value?.handleFlow(e);
			},
			getDpWrapMenuRef: () => re,
			dpMenuRef: () => ie,
			dpWrapMenuRef: () => re,
			inputRef: () => Y
		}), (e, t) => (j(), c("div", {
			ref: "picker-wrapper",
			class: C(Se.value),
			"data-datepicker-instance": "",
			"data-dp-mobile": H(R)
		}, [f(Zl, {
			ref: "input-cmp",
			"is-menu-open": U.value,
			onClear: je,
			onOpen: Ae,
			onSetInputDate: ze,
			onSetEmptyDate: H(ye),
			onSelectDate: Ne,
			onToggle: Ve,
			onClose: Re,
			onFocus: Ue,
			onBlur: We,
			onRealBlur: t[0] ||= (e) => H(d)("isInputFocused", !1)
		}, u({ _: 2 }, [I(H(_e), (t, n) => ({
			name: t,
			fn: q((n) => [L(e.$slots, t, w(h(n)))])
		}))]), 1032, ["is-menu-open", "onSetEmptyDate"]), f(r, {
			to: H(E),
			disabled: !H(E)
		}, {
			default: q(() => [l("div", {
				ref: "dp-menu-wrap",
				class: C({
					"dp--menu-wrapper": !H(_).enabled,
					dp__outer_menu_wrap: !0,
					"dp--centered": H(g).centered
				}),
				style: T(!H(_).enabled && !H(g).centered ? H(fe) : void 0)
			}, [f(i, {
				name: H(N)(H(me).startsWith("top")),
				css: H(P) && !H(_).enabled && !H(g).centered && te.value
			}, {
				default: q(() => [U.value && te.value ? (j(), o(hd, {
					key: 0,
					ref: "dp-menu",
					class: C({ [Ce.value]: !0 }),
					"no-overlay-focus": we.value,
					collapse: ue.value,
					"get-input-rect": Te,
					onClosePicker: Re,
					onSelectDate: Ne,
					onAutoApply: Ie,
					onTimeUpdate: Be,
					onMenuBlur: t[1] ||= (e) => H(n)("blur")
				}, u({ _: 2 }, [I(H(ge), (t, n) => ({
					name: t,
					fn: q((n) => [L(e.$slots, t, w(h({ ...n })))])
				})), !H(_).enabled && !H(g).centered && H(D).arrow === !0 ? {
					name: "arrow",
					fn: q(() => [l("div", {
						ref: "menu-arrow",
						class: C({
							dp__arrow_top: H(me) === "bottom",
							dp__arrow_bottom: H(me) === "top"
						}),
						style: T({
							left: H(pe).arrow?.x == null ? "" : `${H(pe).arrow.x}px`,
							top: H(pe).arrow?.y == null ? "" : `${H(pe).arrow.y}px`
						})
					}, null, 6)]),
					key: "0"
				} : void 0]), 1032, [
					"class",
					"no-overlay-focus",
					"collapse"
				])) : s("", !0)]),
				_: 3
			}, 8, ["name", "css"])], 6)]),
			_: 3
		}, 8, ["to", "disabled"])], 10, gd));
	}
}), vd = /* @__PURE__ */ p({
	__name: "VueDatePickerRoot",
	props: /* @__PURE__ */ y({
		multiCalendars: { type: [
			Boolean,
			Number,
			String,
			Object
		] },
		modelValue: {},
		modelType: {},
		dark: { type: Boolean },
		transitions: { type: [Boolean, Object] },
		ariaLabels: {},
		hideNavigation: {},
		timezone: {},
		vertical: { type: Boolean },
		hideMonthYearSelect: { type: Boolean },
		disableYearSelect: { type: Boolean },
		yearRange: {},
		autoApply: { type: Boolean },
		disabledDates: { type: [Array, Function] },
		startDate: {},
		hideOffsetDates: { type: Boolean },
		noToday: { type: Boolean },
		allowedDates: {},
		markers: {},
		presetDates: {},
		flow: {},
		preventMinMaxNavigation: { type: Boolean },
		reverseYears: { type: Boolean },
		weekPicker: { type: Boolean },
		filters: {},
		arrowNavigation: { type: Boolean },
		highlight: { type: [Function, Object] },
		teleport: { type: [String, Boolean] },
		centered: { type: Boolean },
		locale: {},
		weekStart: {},
		weekNumbers: { type: [Boolean, Object] },
		dayNames: { type: [Function, Array] },
		monthPicker: { type: Boolean },
		yearPicker: { type: Boolean },
		modelAuto: { type: Boolean },
		formats: {},
		multiDates: { type: [Boolean, Object] },
		minDate: {},
		maxDate: {},
		minTime: {},
		maxTime: {},
		inputAttrs: {},
		timeConfig: {},
		placeholder: {},
		timePicker: { type: Boolean },
		range: { type: [Boolean, Object] },
		menuId: {},
		disabled: { type: Boolean },
		readonly: { type: Boolean },
		inline: { type: [Boolean, Object] },
		textInput: { type: [Boolean, Object] },
		sixWeeks: { type: [Boolean, String] },
		actionRow: {},
		focusStartDate: { type: Boolean },
		disabledTimes: { type: [Function, Array] },
		calendar: { type: Function },
		config: {},
		quarterPicker: { type: Boolean },
		yearFirst: { type: Boolean },
		loading: { type: Boolean },
		ui: {},
		floating: {}
	}, Al),
	emits: [
		"update:model-value",
		"internal-model-change",
		"text-submit",
		"text-input",
		"open",
		"closed",
		"focus",
		"blur",
		"cleared",
		"flow-step",
		"update-month-year",
		"invalid-select",
		"invalid-fixed-range",
		"invalid-date",
		"tooltip-open",
		"tooltip-close",
		"am-pm-change",
		"range-start",
		"range-end",
		"date-click",
		"overlay-toggle",
		"invalid"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = e;
		Gc(i, r);
		let a = Kl(W(), i.presetDates);
		return t(zl(G("date-picker"))), (e, t) => (j(), o(_d, { ref: "date-picker" }, u({ _: 2 }, [I(H(a), (t, n) => ({
			name: t,
			fn: q((n) => [L(e.$slots, t, w(h(n)))])
		}))]), 1536));
	}
}), yd = fe("darkMode", !0), bd = () => {
	typeof window > "u" || (yd.value ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"));
};
function xd() {
	bd();
}
function Sd() {
	return {
		isDarkMode: yd,
		toggleTheme: () => {
			yd.value = !yd.value, bd();
		},
		applyTheme: bd
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/es/_lib/formatDistance.js
var Cd = {
	lessThanXSeconds: {
		one: "menos de un segundo",
		other: "menos de {{count}} segundos"
	},
	xSeconds: {
		one: "1 segundo",
		other: "{{count}} segundos"
	},
	halfAMinute: "medio minuto",
	lessThanXMinutes: {
		one: "menos de un minuto",
		other: "menos de {{count}} minutos"
	},
	xMinutes: {
		one: "1 minuto",
		other: "{{count}} minutos"
	},
	aboutXHours: {
		one: "alrededor de 1 hora",
		other: "alrededor de {{count}} horas"
	},
	xHours: {
		one: "1 hora",
		other: "{{count}} horas"
	},
	xDays: {
		one: "1 día",
		other: "{{count}} días"
	},
	aboutXWeeks: {
		one: "alrededor de 1 semana",
		other: "alrededor de {{count}} semanas"
	},
	xWeeks: {
		one: "1 semana",
		other: "{{count}} semanas"
	},
	aboutXMonths: {
		one: "alrededor de 1 mes",
		other: "alrededor de {{count}} meses"
	},
	xMonths: {
		one: "1 mes",
		other: "{{count}} meses"
	},
	aboutXYears: {
		one: "alrededor de 1 año",
		other: "alrededor de {{count}} años"
	},
	xYears: {
		one: "1 año",
		other: "{{count}} años"
	},
	overXYears: {
		one: "más de 1 año",
		other: "más de {{count}} años"
	},
	almostXYears: {
		one: "casi 1 año",
		other: "casi {{count}} años"
	}
}, wd = (e, t, n) => {
	let r, i = Cd[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "en " + r : "hace " + r : r;
}, Td = {
	date: za({
		formats: {
			full: "EEEE, d 'de' MMMM 'de' y",
			long: "d 'de' MMMM 'de' y",
			medium: "d MMM y",
			short: "dd/MM/y"
		},
		defaultWidth: "full"
	}),
	time: za({
		formats: {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: za({
		formats: {
			full: "{{date}} 'a las' {{time}}",
			long: "{{date}} 'a las' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, Ed = {
	lastWeek: "'el' eeee 'pasado a la' p",
	yesterday: "'ayer a la' p",
	today: "'hoy a la' p",
	tomorrow: "'mañana a la' p",
	nextWeek: "eeee 'a la' p",
	other: "P"
}, Dd = {
	lastWeek: "'el' eeee 'pasado a las' p",
	yesterday: "'ayer a las' p",
	today: "'hoy a las' p",
	tomorrow: "'mañana a las' p",
	nextWeek: "eeee 'a las' p",
	other: "P"
}, Od = {
	code: "es",
	formatDistance: wd,
	formatLong: Td,
	formatRelative: (e, t, n, r) => t.getHours() === 1 ? Ed[e] : Dd[e],
	localize: {
		ordinalNumber: (e, t) => Number(e) + "º",
		era: Ua({
			values: {
				narrow: ["AC", "DC"],
				abbreviated: ["AC", "DC"],
				wide: ["antes de cristo", "después de cristo"]
			},
			defaultWidth: "wide"
		}),
		quarter: Ua({
			values: {
				narrow: [
					"1",
					"2",
					"3",
					"4"
				],
				abbreviated: [
					"T1",
					"T2",
					"T3",
					"T4"
				],
				wide: [
					"1º trimestre",
					"2º trimestre",
					"3º trimestre",
					"4º trimestre"
				]
			},
			defaultWidth: "wide",
			argumentCallback: (e) => Number(e) - 1
		}),
		month: Ua({
			values: {
				narrow: [
					"e",
					"f",
					"m",
					"a",
					"m",
					"j",
					"j",
					"a",
					"s",
					"o",
					"n",
					"d"
				],
				abbreviated: [
					"ene",
					"feb",
					"mar",
					"abr",
					"may",
					"jun",
					"jul",
					"ago",
					"sep",
					"oct",
					"nov",
					"dic"
				],
				wide: [
					"enero",
					"febrero",
					"marzo",
					"abril",
					"mayo",
					"junio",
					"julio",
					"agosto",
					"septiembre",
					"octubre",
					"noviembre",
					"diciembre"
				]
			},
			defaultWidth: "wide"
		}),
		day: Ua({
			values: {
				narrow: [
					"d",
					"l",
					"m",
					"m",
					"j",
					"v",
					"s"
				],
				short: [
					"do",
					"lu",
					"ma",
					"mi",
					"ju",
					"vi",
					"sá"
				],
				abbreviated: [
					"dom",
					"lun",
					"mar",
					"mié",
					"jue",
					"vie",
					"sáb"
				],
				wide: [
					"domingo",
					"lunes",
					"martes",
					"miércoles",
					"jueves",
					"viernes",
					"sábado"
				]
			},
			defaultWidth: "wide"
		}),
		dayPeriod: Ua({
			values: {
				narrow: {
					am: "a",
					pm: "p",
					midnight: "mn",
					noon: "md",
					morning: "mañana",
					afternoon: "tarde",
					evening: "tarde",
					night: "noche"
				},
				abbreviated: {
					am: "AM",
					pm: "PM",
					midnight: "medianoche",
					noon: "mediodia",
					morning: "mañana",
					afternoon: "tarde",
					evening: "tarde",
					night: "noche"
				},
				wide: {
					am: "a.m.",
					pm: "p.m.",
					midnight: "medianoche",
					noon: "mediodia",
					morning: "mañana",
					afternoon: "tarde",
					evening: "tarde",
					night: "noche"
				}
			},
			defaultWidth: "wide",
			formattingValues: {
				narrow: {
					am: "a",
					pm: "p",
					midnight: "mn",
					noon: "md",
					morning: "de la mañana",
					afternoon: "de la tarde",
					evening: "de la tarde",
					night: "de la noche"
				},
				abbreviated: {
					am: "AM",
					pm: "PM",
					midnight: "medianoche",
					noon: "mediodia",
					morning: "de la mañana",
					afternoon: "de la tarde",
					evening: "de la tarde",
					night: "de la noche"
				},
				wide: {
					am: "a.m.",
					pm: "p.m.",
					midnight: "medianoche",
					noon: "mediodia",
					morning: "de la mañana",
					afternoon: "de la tarde",
					evening: "de la tarde",
					night: "de la noche"
				}
			},
			defaultFormattingWidth: "wide"
		})
	},
	match: {
		ordinalNumber: Ja({
			matchPattern: /^(\d+)(º)?/i,
			parsePattern: /\d+/i,
			valueCallback: function(e) {
				return parseInt(e, 10);
			}
		}),
		era: Ga({
			matchPatterns: {
				narrow: /^(ac|dc|a|d)/i,
				abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
				wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				any: [/^ac/i, /^dc/i],
				wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
			},
			defaultParseWidth: "any"
		}),
		quarter: Ga({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^T[1234]/i,
				wide: /^[1234](º)? trimestre/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (e) => e + 1
		}),
		month: Ga({
			matchPatterns: {
				narrow: /^[efmajsond]/i,
				abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
				wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^e/i,
					/^f/i,
					/^m/i,
					/^a/i,
					/^m/i,
					/^j/i,
					/^j/i,
					/^a/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				],
				any: [
					/^en/i,
					/^feb/i,
					/^mar/i,
					/^abr/i,
					/^may/i,
					/^jun/i,
					/^jul/i,
					/^ago/i,
					/^sep/i,
					/^oct/i,
					/^nov/i,
					/^dic/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: Ga({
			matchPatterns: {
				narrow: /^[dlmjvs]/i,
				short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
				abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
				wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^d/i,
					/^l/i,
					/^m/i,
					/^m/i,
					/^j/i,
					/^v/i,
					/^s/i
				],
				any: [
					/^do/i,
					/^lu/i,
					/^ma/i,
					/^mi/i,
					/^ju/i,
					/^vi/i,
					/^sa/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: Ga({
			matchPatterns: {
				narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
				any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mn/i,
				noon: /^md/i,
				morning: /mañana/i,
				afternoon: /tarde/i,
				evening: /tarde/i,
				night: /noche/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 1,
		firstWeekContainsDate: 1
	}
}, kd = ["for"], Ad = {
	key: 1,
	class: "relative"
}, jd = [
	"id",
	"value",
	"placeholder",
	"onInput",
	"onKeydown",
	"onBlur",
	"onFocus",
	"onKeypress",
	"onPaste",
	"disabled",
	"autocomplete"
], Md = {
	key: 1,
	class: "space-y-1"
}, Nd = [
	"id",
	"value",
	"onInput",
	"min",
	"max",
	"step",
	"disabled",
	"autocomplete"
], Pd = { class: "flex justify-between text-xs text-gray-400" }, Fd = { class: "font-medium text-gray-600 dark:text-gray-300" }, Id = [
	"id",
	"value",
	"onInput",
	"type",
	"placeholder",
	"disabled",
	"autocomplete"
], Ld = [
	"id",
	"placeholder",
	"autocomplete"
], Rd = {
	key: 4,
	class: "absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer transition-colors duration-200"
}, zd = {
	key: 5,
	class: "absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer transition-colors duration-200"
}, Bd = {
	key: 6,
	class: "absolute inset-y-0 right-0 pr-3 flex items-center"
}, Vd = {
	key: 7,
	class: "absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer transition-colors duration-200"
}, Hd = {
	key: 2,
	class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, Ud = /* @__PURE__ */ p({
	__name: "FormInput",
	props: /*@__PURE__*/ b({
		label: {},
		id: {},
		name: {},
		type: { default: "text" },
		placeholder: { default: "" },
		leftIcon: {},
		rightIcon: {},
		rules: {},
		small: { type: Boolean },
		min: {},
		max: {},
		step: {},
		mask: {},
		help: {},
		url: {},
		searchBy: {},
		labelKey: {},
		valueKey: {},
		subtitleKey: {},
		disabled: { type: Boolean },
		loading: { type: Boolean },
		minDate: {},
		maxDate: {},
		autocomplete: { default: "off" },
		disabledDates: {}
	}, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = Mn, n = a(() => {
			if (r.mask) return r.mask;
		}), r = e, i = U(e, "modelValue"), { isDarkMode: u } = Sd(), d = F(""), p = F(null), m = a({
			get: () => r.type === "datetime" ? p.value : i.value,
			set: (e) => {
				if (r.type === "datetime") {
					let t = g(String(e || ""));
					t !== null && (i.value = t);
				} else i.value = e;
			}
		});
		function h(e) {
			if (!e) return null;
			try {
				let t = Ys(e);
				return Ca(t) ? wo(t, "yyyy-MM-dd HH:mm") : null;
			} catch {
				return null;
			}
		}
		function g(e) {
			if (!e) return null;
			try {
				let t = Ys(e.replace(" ", "T"));
				return Ca(t) ? t.toISOString() : null;
			} catch {
				return null;
			}
		}
		function _(e, t) {
			(r.type !== "datetime" || g(String(e || "")) !== null) && t.onChange(e);
		}
		let v = a(() => ({ config: {
			prefix: "",
			suffix: "",
			thousands: ",",
			decimal: ".",
			precision: 2,
			masked: !1,
			allowBlank: !1,
			shouldRound: !0
		} }));
		K(() => i.value, (e) => {
			if (r.type === "money") {
				if (e == null || e === "") d.value = "";
				else if (typeof e == "number") d.value = (e / 100).toFixed(2);
				else {
					let t = parseFloat(String(e));
					isNaN(t) ? d.value = "" : d.value = (t / 100).toFixed(2);
				}
			} else if (r.type === "datetime") {
				let t = h(String(e || ""));
				p.value = t;
			}
		}, { immediate: !0 }), K(() => d.value, (e) => {
			if (r.type === "money") {
				if (!e || e === "") {
					i.value = 0;
					return;
				}
				let t = vn(e, v.value.config), n = parseFloat(String(t));
				Number.isNaN(n) ? i.value = 0 : i.value = Math.round(n * 100);
			}
		}), K(() => p.value, (e) => {
			if (r.type === "datetime") {
				let t = g(e);
				t !== null && (i.value = t);
			}
		});
		let y = F(!1), b = a(() => r.type === "password"), S = a(() => r.type === "password" ? y.value ? "text" : "password" : r.type), w = a(() => r.type === "password" ? y.value ? Pe : Fe : null), T = () => {
			y.value = !y.value;
		};
		return (a, p) => {
			let h = Wt;
			return j(), c("div", null, [e.label && !e.small ? (j(), c("label", {
				key: 0,
				for: e.id,
				class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
			}, B(e.label), 9, kd)) : s("", !0), f(H(se), {
				name: e.name,
				label: e.label?.toLowerCase(),
				rules: e.rules
			}, {
				default: q(({ field: a, errorMessage: g }) => [l("div", null, [
					e.url && e.searchBy ? (j(), o(h, {
						key: 0,
						url: e.url,
						id: e.id,
						"search-by": e.searchBy,
						"label-key": e.labelKey,
						"value-key": e.valueKey,
						"subtitle-key": e.subtitleKey,
						placeholder: e.placeholder,
						"left-icon": e.leftIcon,
						modelValue: i.value,
						"onUpdate:modelValue": p[0] ||= (e) => i.value = e,
						disabled: e.disabled,
						onSelect: (e) => a.onChange(e.value)
					}, null, 8, [
						"url",
						"id",
						"search-by",
						"label-key",
						"value-key",
						"subtitle-key",
						"placeholder",
						"left-icon",
						"modelValue",
						"disabled",
						"onSelect"
					])) : (j(), c("div", Ad, [
						e.type === "date" || e.type === "datetime" || e.type === "time" ? (j(), o(H(vd), {
							key: 0,
							modelValue: m.value,
							"onUpdate:modelValue": [p[1] ||= (e) => m.value = e, (e) => _(e, a)],
							"min-date": e.minDate ?? void 0,
							"max-date": e.maxDate ?? void 0,
							"disabled-dates": e.disabledDates,
							id: e.id,
							locale: H(Od),
							"time-picker": e.type === "time",
							"model-type": e.type === "time" ? "HH:mm" : e.type === "datetime" ? "yyyy-MM-dd HH:mm" : "yyyy-MM-dd",
							"time-config": e.type === "date" ? { enableTimePicker: !1 } : { enableTimePicker: !0 },
							dark: H(u),
							"text-input": "",
							teleport: !1,
							autocomplete: e.autocomplete
						}, {
							"dp-input": q((t) => [l("input", {
								id: e.id,
								value: t.value,
								placeholder: e.placeholder,
								onInput: t.onInput,
								onKeydown: [re(t.onEnter, ["enter"]), re(t.onTab, ["tab"])],
								onBlur: t.onBlur,
								onFocus: t.onFocus,
								onKeypress: t.onKeypress,
								onPaste: t.onPaste,
								class: C([
									"w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
									e.leftIcon ? "pl-10" : "pl-4",
									e.rightIcon || b.value ? "pr-10" : "pr-4",
									g ? "border-danger-500 dark:border-danger-500" : "",
									e.small ? "py-2" : "py-3"
								]),
								disabled: e.disabled,
								autocomplete: e.autocomplete
							}, null, 42, jd)]),
							_: 2
						}, 1032, [
							"modelValue",
							"min-date",
							"max-date",
							"disabled-dates",
							"id",
							"locale",
							"time-picker",
							"model-type",
							"time-config",
							"dark",
							"autocomplete",
							"onUpdate:modelValue"
						])) : e.type === "range" ? (j(), c("div", Md, [l("input", x({ id: e.id }, a, {
							value: i.value,
							onInput: (e) => {
								a.onChange(e), i.value = Number(e.target.value);
							},
							type: "range",
							min: e.min,
							max: e.max,
							step: e.step,
							disabled: e.disabled,
							autocomplete: e.autocomplete,
							class: "w-full accent-primary-600"
						}), null, 16, Nd), l("div", Pd, [
							l("span", null, B(e.min), 1),
							l("span", Fd, B(i.value), 1),
							l("span", null, B(e.max), 1)
						])])) : e.type === "money" ? J((j(), c("input", {
							key: 3,
							id: e.id,
							"onUpdate:modelValue": p[2] ||= (e) => d.value = e,
							type: "text",
							placeholder: e.placeholder,
							autocomplete: e.autocomplete,
							class: C([
								"w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 pl-10",
								e.rightIcon || b.value || e.type === "money" ? "pr-10" : "pr-4",
								g ? "border-danger-500 dark:border-danger-500" : "",
								e.small ? "py-2" : "py-3"
							])
						}, null, 10, Ld)), [[
							te,
							d.value,
							void 0,
							{ lazy: !0 }
						], [H(t), v.value.config]]) : J((j(), c("input", x({
							key: 2,
							id: e.id
						}, a, {
							value: i.value,
							onInput: (e) => {
								a.onChange(e), i.value = e.target.value;
							},
							type: S.value,
							placeholder: e.placeholder,
							disabled: e.disabled,
							autocomplete: e.autocomplete,
							class: [
								"w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:cursor-not-allowed",
								e.leftIcon ? "pl-10" : "pl-4",
								e.rightIcon || b.value ? "pr-10" : "pr-4",
								g ? "border-danger-500 dark:border-danger-500" : "",
								e.small ? "py-2" : "py-3"
							]
						}), null, 16, Id)), [[H(Xn), n.value]]),
						e.type === "money" ? (j(), c("div", Rd, [(j(), o(z(H(Me)), { class: C([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"]) }, null, 8, ["class"]))])) : s("", !0),
						e.leftIcon ? (j(), c("div", zd, [(j(), o(z(e.leftIcon), { class: C([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"]) }, null, 8, ["class"]))])) : s("", !0),
						r.loading ? (j(), c("div", Bd, [f(H(Le), { class: C([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400 animate-spin"]) }, null, 8, ["class"])])) : e.rightIcon && !b.value ? (j(), c("div", Vd, [(j(), o(z(e.rightIcon), { class: C([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"]) }, null, 8, ["class"]))])) : s("", !0),
						b.value ? (j(), c("button", {
							key: 8,
							type: "button",
							onClick: T,
							class: "absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer transition-colors duration-200"
						}, [(j(), o(z(w.value), { class: C([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"]) }, null, 8, ["class"]))])) : s("", !0)
					])),
					f(H(oe), {
						name: e.name,
						class: "mt-1 text-sm text-danger-600 dark:text-danger-400"
					}, null, 8, ["name"]),
					e.help ? (j(), c("p", Hd, B(e.help), 1)) : s("", !0)
				])]),
				_: 1
			}, 8, [
				"name",
				"label",
				"rules"
			])]);
		};
	}
}), Wd = { class: "flex justify-end space-x-3 pt-4" }, Gd = /* @__PURE__ */ p({
	__name: "ConfirmationModal",
	props: {
		open: { type: Boolean },
		loading: {
			type: Boolean,
			default: !1
		},
		title: { default: "Confirmar Acción" },
		subtitle: { default: "Esta acción no se puede deshacer. Escribe 'Confirmar' para continuar." }
	},
	emits: ["close", "confirm"],
	setup(t, { emit: n }) {
		let r = e.object({ confirmation: e.string().required("La confirmación es requerida").oneOf(["Confirmar"], "Debes escribir 'Confirmar' exactamente") }), i = n, a = N({ confirmation: "" }), s = () => {
			t.loading || (a.confirmation = "", i("close"));
		}, c = () => {
			i("confirm");
		};
		return K(() => t.open, (e) => {
			e || (a.confirmation = "");
		}), (e, n) => {
			let i = Ud, u = Ye, p = wt;
			return j(), o(p, {
				open: t.open,
				title: t.title,
				subtitle: t.subtitle,
				onClose: s
			}, {
				default: q(() => [f(H(ce), {
					onSubmit: c,
					class: "space-y-4",
					"initial-values": a,
					"validation-schema": H(r)
				}, {
					default: q(() => [l("div", null, [f(i, {
						modelValue: a.confirmation,
						"onUpdate:modelValue": n[0] ||= (e) => a.confirmation = e,
						id: "confirmation",
						name: "confirmation",
						label: "Confirmación",
						placeholder: "Escribe 'Confirmar'"
					}, null, 8, ["modelValue"])]), l("div", Wd, [f(u, {
						type: "button",
						variant: "outline",
						onClick: s,
						disabled: t.loading
					}, {
						default: q(() => [...n[1] ||= [d(" Cancelar ", -1)]]),
						_: 1
					}, 8, ["disabled"]), f(u, {
						type: "submit",
						variant: "danger",
						loading: t.loading,
						disabled: t.loading
					}, {
						default: q(() => [...n[2] ||= [d(" Confirmar ", -1)]]),
						_: 1
					}, 8, ["loading", "disabled"])])]),
					_: 1
				}, 8, ["initial-values", "validation-schema"])]),
				_: 1
			}, 8, [
				"open",
				"title",
				"subtitle"
			]);
		};
	}
}), Kd = { class: "mt-4 text-sm text-gray-600 dark:text-gray-400 tabular-nums" }, qd = /* @__PURE__ */ p({
	__name: "ResultCount",
	props: {
		internalPaginationServer: {},
		totalItems: {}
	},
	setup(e) {
		let t = e, n = a(() => t.internalPaginationServer.total);
		return (t, r) => (j(), c("div", Kd, " Mostrando " + B(e.totalItems) + " de " + B(H(n)) + " resultados ", 1));
	}
}), Jd = /* @__PURE__ */ p({
	__name: "DropdownItem",
	props: {
		label: {},
		icon: {},
		active: {
			type: Boolean,
			default: !1
		},
		to: {}
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = () => {
			r("click", n.label);
		};
		return (t, n) => e.to ? (j(), o(H(Y), {
			key: 0,
			to: e.to,
			class: C(["w-full text-left px-4 py-2 text-sm transition-colors duration-150 flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/30 hover:text-gray-900 dark:hover:text-white", { "bg-gray-100 dark:bg-gray-700/50 text-gray-900 dark:text-white": e.active }])
		}, {
			default: q(() => [e.icon ? (j(), o(z(e.icon), {
				key: 0,
				class: "w-4 h-4"
			})) : s("", !0), l("span", null, B(e.label), 1)]),
			_: 1
		}, 8, ["to", "class"])) : (j(), c("button", {
			key: 1,
			type: "button",
			onClick: i,
			class: C(["w-full text-left px-4 py-2 text-sm transition-colors duration-150 flex items-center space-x-2 cursor-pointer text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/30 hover:text-gray-900 dark:hover:text-white", { "bg-gray-100 dark:bg-gray-700/50 text-gray-900 dark:text-white": e.active }])
		}, [e.icon ? (j(), o(z(e.icon), {
			key: 0,
			class: "w-4 h-4"
		})) : s("", !0), l("span", null, B(e.label), 1)], 2));
	}
}), Yd = { class: "py-1" }, Xd = /* @__PURE__ */ p({
	__name: "Dropdown",
	props: /*@__PURE__*/ b({
		items: {},
		placeholder: { default: "Select an option" },
		triggerVariant: { default: "outline" },
		triggerSize: { default: "auto" },
		triggerSmall: {
			type: Boolean,
			default: !1
		},
		position: { default: "bottom-left" }
	}, {
		modelValue: {},
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = e, r = U(e, "modelValue"), i = F(!1), u = F(), p = a(() => t.items.find((e) => e.value === r.value)), m = a(() => `absolute w-48 max-h-60 bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl shadow-lg z-[9999] ${{
			"bottom-left": "left-0 top-full mt-2",
			"bottom-right": "right-0 top-full mt-2",
			"top-left": "left-0 bottom-full mb-2",
			"top-right": "right-0 bottom-full mb-2"
		}[t.position]}`), h = () => {
			i.value = !i.value;
		}, g = () => {
			i.value = !1;
		}, _ = (e) => {
			r.value = e.value, g();
		}, v = (e) => {
			let t = e.target;
			u.value && !u.value.contains(t) && g();
		};
		return O(() => {
			document.addEventListener("click", v);
		}), A(() => {
			document.removeEventListener("click", v);
		}), (t, r) => {
			let a = Ye, g = Jd, v = Tt;
			return j(), c("div", {
				class: "relative",
				ref_key: "dropdownRef",
				ref: u
			}, [f(a, {
				variant: e.triggerVariant,
				size: e.triggerSize,
				icon: H(ke),
				iconPosition: "right",
				small: e.triggerSmall,
				iconClass: H(i) ? "rotate-180 transition-transform duration-200" : "transition-transform duration-200",
				onClick: h,
				class: "bg-white dark:bg-gray-800/70 backdrop-blur-sm border-gray-300 dark:border-gray-700/70 hover:bg-gray-50 dark:hover:bg-gray-700/70 focus:ring-0 focus:border-gray-400 dark:focus:border-gray-600"
			}, {
				default: q(() => [d(B(H(p)?.label || e.placeholder), 1)]),
				_: 1
			}, 8, [
				"variant",
				"size",
				"icon",
				"small",
				"iconClass"
			]), f(v, null, {
				default: q(() => [H(i) ? (j(), c("div", {
					key: 0,
					class: C(H(m))
				}, [l("div", Yd, [(j(!0), c(n, null, I(e.items, (e) => (j(), o(g, {
					key: e.value,
					label: e.label,
					icon: e.icon,
					active: H(p)?.value === e.value,
					onClick: (t) => _(e)
				}, null, 8, [
					"label",
					"icon",
					"active",
					"onClick"
				]))), 128))])], 2)) : s("", !0)]),
				_: 1
			})], 512);
		};
	}
}), Zd = { class: "flex items-center justify-between" }, Qd = { class: "text-sm text-gray-600 dark:text-gray-400 tabular-nums" }, $d = { class: "flex items-center space-x-2" }, ef = { class: "flex items-center space-x-1" }, tf = {
	key: 1,
	class: "px-2 text-gray-600 dark:text-gray-400"
}, nf = /* @__PURE__ */ p({
	__name: "TablePagination",
	props: { internalPaginationServer: {} },
	emits: ["page-change"],
	setup(e, { emit: t }) {
		let r = e, i = t, s = a(() => {
			let e = r.internalPaginationServer.last_page, t = r.internalPaginationServer.current_page, n = [];
			if (e <= 7) for (let t = 1; t <= e; t++) n.push(t);
			else {
				let r = Math.max(1, t - 2), i = Math.min(e, t + 2);
				r > 1 && (n.push(1), r > 2 && n.push(-1));
				for (let e = r; e <= i; e++) n.push(e);
				i < e && (i < e - 1 && n.push(-1), n.push(e));
			}
			return n;
		}), u = (e) => {
			e >= 1 && e <= r.internalPaginationServer.last_page && i("page-change", e);
		};
		return (t, r) => {
			let i = Ye;
			return j(), c("div", Zd, [l("div", Qd, " Página " + B(e.internalPaginationServer.current_page) + " de " + B(e.internalPaginationServer.last_page), 1), l("div", $d, [
				f(i, {
					disabled: e.internalPaginationServer.current_page === 1,
					variant: "outline",
					size: "auto",
					small: !0,
					icon: H(Ae),
					"icon-class": "h-4 w-4",
					class: "px-2.5!",
					onClick: r[0] ||= (t) => u(e.internalPaginationServer.current_page - 1)
				}, null, 8, ["disabled", "icon"]),
				l("div", ef, [(j(!0), c(n, null, I(s.value, (t) => (j(), c(n, { key: t }, [t === -1 ? (j(), c("span", tf, "...")) : (j(), o(i, {
					key: 0,
					variant: t === e.internalPaginationServer.current_page ? "primary" : "outline",
					size: "auto",
					small: !0,
					class: "tabular-nums",
					onClick: (e) => u(t)
				}, {
					default: q(() => [d(B(t), 1)]),
					_: 2
				}, 1032, ["variant", "onClick"]))], 64))), 128))]),
				f(i, {
					disabled: e.internalPaginationServer.current_page === e.internalPaginationServer.last_page,
					variant: "outline",
					size: "auto",
					small: !0,
					icon: H(je),
					"icon-class": "h-4 w-4",
					class: "px-2.5!",
					onClick: r[1] ||= (t) => u(e.internalPaginationServer.current_page + 1)
				}, null, 8, ["disabled", "icon"])
			])]);
		};
	}
}), rf = { class: "bg-gray-50 dark:bg-gray-800/30" }, af = {
	key: 0,
	style: {
		width: "120px",
		"min-width": "120px",
		"max-width": "120px"
	},
	class: "px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider overflow-hidden text-ellipsis"
}, of = /* @__PURE__ */ p({
	__name: "TableHeader",
	props: {
		columns: {},
		showActions: { type: Boolean },
		actionsLabel: {}
	},
	setup(e) {
		return (t, r) => (j(), c("thead", rf, [l("tr", null, [(j(!0), c(n, null, I(e.columns, (e) => (j(), c("th", {
			key: e.key,
			style: T({
				width: e.width ? typeof e.width == "number" ? `${e.width}px` : e.width : "auto",
				minWidth: e.width ? typeof e.width == "number" ? `${e.width}px` : e.width : "150px",
				maxWidth: e.width ? typeof e.width == "number" ? `${e.width}px` : e.width : "none"
			}),
			class: "px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider overflow-hidden text-ellipsis"
		}, B(e.label), 5))), 128)), e.showActions ? (j(), c("th", af, B(e.actionsLabel || "Actions"), 1)) : s("", !0)])]));
	}
}), sf = { class: "bg-white dark:bg-gray-800/20 divide-y divide-gray-200 dark:divide-gray-700 animate-pulse" }, cf = {
	key: 0,
	style: {
		width: "120px",
		"min-width": "120px",
		"max-width": "120px"
	},
	class: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300 overflow-hidden text-ellipsis"
}, lf = /* @__PURE__ */ p({
	__name: "TableSkeleton",
	props: {
		rows: { default: 10 },
		columns: {},
		showActions: { type: Boolean }
	},
	setup(e) {
		let t = () => {
			let e = [
				"50%",
				"65%",
				"75%",
				"85%",
				"95%",
				"100%"
			];
			return e[Math.floor(Math.random() * e.length)];
		};
		return (r, i) => (j(), c("tbody", sf, [(j(!0), c(n, null, I(e.rows, (r) => (j(), c("tr", {
			key: r,
			class: "hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-200"
		}, [(j(!0), c(n, null, I(e.columns, (e, n) => (j(), c("td", {
			key: n,
			class: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300 overflow-hidden text-ellipsis"
		}, [l("div", {
			class: "h-4 bg-gray-200 dark:bg-gray-700 rounded",
			style: T({ width: t() })
		}, null, 4)]))), 128)), e.showActions ? (j(), c("td", cf, [...i[0] ||= [l("div", { class: "h-4 bg-gray-200 dark:bg-gray-700 rounded w-16" }, null, -1)]])) : s("", !0)]))), 128))]));
	}
}), uf = F(!1);
function df() {
	let e = _(Dt);
	if (!e) throw Error("useTable: no request instance provided. Call app.provide(useRequestKey, useRequest) in the consuming app.");
	let { get: t } = e(), n = F(!1), r = F(null), i = F([]), a = F({
		total: 0,
		per_page: 0,
		current_page: 1,
		from: 0,
		to: 0,
		last_page: 0
	});
	return {
		refreshData: uf,
		isLoading: n,
		error: r,
		internalData: i,
		internalPaginationServer: a,
		fetchData: async (e, o, s, c, l) => {
			if (e) {
				n.value = !0, r.value = null;
				try {
					let n = e + `${e.includes("?") ? "&" : "?"}page=${o}&per_page=${s}`;
					c && l && (typeof l == "string" ? n += `&filter[${l}]=${encodeURIComponent(c)}` : Array.isArray(l) && l.forEach((e) => {
						n += `&filter[${e}]=${encodeURIComponent(c)}`;
					}));
					let { data: r } = await t(n);
					r.value && (i.value = r.value.data, a.value = r.value.pagination);
				} catch (e) {
					r.value = e instanceof Error ? e.message : "Error fetching data", console.error("Error fetching table data:", e), i.value = [];
				} finally {
					n.value = !1;
				}
			}
		},
		refreshTable: () => {
			uf.value = !0, setTimeout(() => {
				uf.value = !1;
			}, 200);
		}
	};
}
//#endregion
//#region src/components/DataTable.vue?vue&type=script&setup=true&lang.ts
var ff = {
	key: 0,
	class: "mb-4 flex justify-between items-center"
}, pf = { class: "flex items-center relative" }, mf = { class: "relative w-64" }, hf = {
	key: 0,
	class: "absolute right-3 top-1/2 transform -translate-y-1/2"
}, gf = {
	key: 1,
	class: "overflow-x-auto min-w-full"
}, _f = {
	key: 1,
	class: "bg-white dark:bg-gray-800/20 divide-y divide-gray-200 dark:divide-gray-700"
}, vf = ["onClick"], yf = { key: 1 }, bf = { key: 2 }, xf = {
	key: 0,
	style: {
		width: "120px",
		"min-width": "120px",
		"max-width": "120px"
	},
	class: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300"
}, Sf = {
	key: 2,
	class: "space-y-4"
}, Cf = {
	key: 0,
	class: "space-y-4"
}, wf = ["onClick"], Tf = { class: "space-y-3" }, Ef = { class: "text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider w-1/3" }, Df = { class: "text-sm text-gray-900 dark:text-gray-300 w-2/3 text-right tabular-nums" }, Of = { key: 1 }, kf = { key: 2 }, Af = {
	key: 0,
	class: "flex justify-between items-center pt-3 border-t border-gray-200 dark:border-gray-700"
}, jf = { class: "text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" }, Mf = { class: "flex space-x-2" }, Nf = {
	key: 3,
	class: "text-center py-12 text-danger-600 dark:text-danger-400"
}, Pf = { class: "text-lg" }, Ff = /* @__PURE__ */ p({
	__name: "DataTable",
	props: {
		columns: {},
		data: { default: () => [] },
		url: {},
		showSearch: {
			type: Boolean,
			default: !0
		},
		searchPlaceholder: { default: "Buscar..." },
		actionsLabel: { default: "Actions" },
		searchBy: {}
	},
	emits: ["row-selected", "pagination-loaded"],
	setup(e, { emit: t }) {
		let r = t, { refreshData: i, isLoading: u, error: p, internalData: m, internalPaginationServer: h, fetchData: g } = df(), _ = F(""), y = F(!1), b = F("10"), x = F(1), S = [
			{
				label: "10",
				value: "10"
			},
			{
				label: "25",
				value: "25"
			},
			{
				label: "50",
				value: "50"
			}
		], w = e, E = W(), D = a(() => !!E.actions), k = F(!1), M = null, N = () => {
			k.value = window.innerWidth < 640;
		};
		O(() => {
			N(), M = new ResizeObserver(() => {
				N();
			}), M.observe(document.body);
		}), A(() => {
			M &&= (M.disconnect(), null), y.value = !1;
		});
		let P = (e) => {
			x.value = e;
		}, R = a(() => {
			let e = w.columns.reduce((e, t) => {
				if (t.width) {
					let n = typeof t.width == "number" ? t.width : parseInt(t.width.toString());
					return e + (isNaN(n) ? 0 : n);
				}
				return e;
			}, 0), t = w.columns.filter((e) => !e.width).length * 150, n = D.value ? 120 : 0;
			return e === 0 && !D.value ? "100%" : `max(${e + t + n}px, 100%)`;
		}), z = a(() => w.columns.some((e) => e.width)), V = async () => {
			w.url && (await g(w.url, x.value, b.value, _.value, w.searchBy), x.value = h.value.current_page, r("pagination-loaded", h.value));
		};
		K(() => w.url, () => {
			w.url && V();
		}, { immediate: !0 }), K(() => [b.value, x.value], () => {
			w.url && V();
		}), me(() => _.value, async () => {
			w.url && w.searchBy && (x.value = 1, y.value = !0, await V(), y.value = !1);
		}, { debounce: 500 }), K(() => i.value, (e) => {
			e && w.url && V();
		});
		function ee(e, t) {
			let n = t.key.toString().split("."), r = e;
			for (let e of n) if (r && typeof r == "object" && e in r) r = r[e];
			else return "";
			return r;
		}
		function U(e) {
			r("row-selected", e);
		}
		return (t, r) => {
			let i = Xd, a = Ud, g = Ye, x = qd;
			return j(), c("div", null, [
				e.showSearch ? (j(), c("div", ff, [l("div", pf, [f(i, {
					modelValue: H(b),
					"onUpdate:modelValue": r[0] ||= (e) => v(b) ? b.value = e : null,
					items: S,
					"trigger-small": !0,
					class: "w-20"
				}, null, 8, ["modelValue"])]), l("div", mf, [f(a, {
					modelValue: H(_),
					"onUpdate:modelValue": r[1] ||= (e) => v(_) ? _.value = e : null,
					label: "",
					id: "table-search",
					name: "table-search",
					placeholder: "Buscar...",
					"left-icon": H(Be),
					small: "",
					disabled: H(y)
				}, null, 8, [
					"modelValue",
					"left-icon",
					"disabled"
				]), H(y) ? (j(), c("div", hf, [...r[2] ||= [l("div", { class: "animate-spin rounded-full h-4 w-4 border-b-2 border-primary-500" }, null, -1)]])) : s("", !0)])])) : s("", !0),
				H(k) ? (j(), c("div", Sf, [H(u) ? (j(), c("div", Cf, [(j(), c(n, null, I(5, (e) => l("div", {
					key: e,
					class: "bg-gray-50 dark:bg-gray-800/20 rounded-lg p-4 animate-pulse"
				}, [...r[3] ||= [l("div", { class: "space-y-3" }, [
					l("div", { class: "h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" }),
					l("div", { class: "h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" }),
					l("div", { class: "h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3" })
				], -1)]])), 64))])) : (j(!0), c(n, { key: 1 }, I(H(m), (r, i) => (j(), c("div", {
					key: i,
					class: "bg-white dark:bg-gray-800/20 rounded-lg p-4 border border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-200",
					onClick: (e) => U(r)
				}, [l("div", Tf, [(j(!0), c(n, null, I(w.columns, (e, n) => (j(), c("div", {
					key: e.key,
					class: C(["flex justify-between items-start", n < w.columns.length - 1 ? "pb-3 border-b border-gray-200 dark:border-gray-700" : ""])
				}, [l("span", Ef, B(e.label), 1), l("div", Df, [e.slot ? L(t.$slots, e.slot, {
					row: r,
					value: ee(r, e)
				}, void 0, void 0, 0) : e.format ? (j(), c("span", Of, B(e.format(r)), 1)) : (j(), c("span", kf, B(ee(r, e)), 1))])], 2))), 128)), H(D) ? (j(), c("div", Af, [l("span", jf, B(e.actionsLabel || "Actions"), 1), l("div", Mf, [L(t.$slots, "actions", { row: r })])])) : s("", !0)])], 8, wf))), 128))])) : (j(), c("div", gf, [l("table", {
					class: "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
					style: T({
						width: H(R),
						tableLayout: H(z) ? "fixed" : "auto"
					})
				}, [f(of, {
					columns: w.columns,
					"show-actions": H(D),
					"actions-label": e.actionsLabel
				}, null, 8, [
					"columns",
					"show-actions",
					"actions-label"
				]), H(u) ? (j(), o(lf, {
					key: 0,
					rows: 10,
					columns: w.columns,
					"show-actions": H(D)
				}, null, 8, ["columns", "show-actions"])) : (j(), c("tbody", _f, [(j(!0), c(n, null, I(H(m), (e, r) => (j(), c("tr", {
					key: r,
					class: "hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-200 cursor-pointer",
					onClick: (t) => U(e)
				}, [(j(!0), c(n, null, I(w.columns, (n) => (j(), c("td", {
					key: n.key,
					style: T({
						width: n.width ? typeof n.width == "number" ? `${n.width}px` : n.width : "auto",
						minWidth: n.width ? typeof n.width == "number" ? `${n.width}px` : n.width : "150px",
						maxWidth: n.width ? typeof n.width == "number" ? `${n.width}px` : n.width : "none"
					}),
					class: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300 overflow-hidden text-ellipsis tabular-nums"
				}, [n.slot ? L(t.$slots, n.slot, {
					row: e,
					value: ee(e, n)
				}, void 0, void 0, 0) : n.format ? (j(), c("span", yf, B(n.format(e)), 1)) : (j(), c("span", bf, B(ee(e, n)), 1))], 4))), 128)), H(D) ? (j(), c("td", xf, [L(t.$slots, "actions", { row: e })])) : s("", !0)], 8, vf))), 128))]))], 4)])),
				H(p) ? (j(), c("div", Nf, [l("p", Pf, B(H(p)), 1), f(g, {
					onClick: V,
					class: "mt-4",
					variant: "secondary",
					size: "small"
				}, {
					default: q(() => [...r[4] ||= [d(" Reintentar ", -1)]]),
					_: 1
				})])) : s("", !0),
				f(x, {
					"internal-pagination-server": H(h),
					"total-items": H(m).length
				}, null, 8, ["internal-pagination-server", "total-items"]),
				f(nf, {
					"internal-pagination-server": H(h),
					onPageChange: P
				}, null, 8, ["internal-pagination-server"])
			]);
		};
	}
}), If = ["onClick"], Lf = /* @__PURE__ */ p({
	__name: "DropdownMenu",
	props: {
		items: {},
		ariaLabel: { default: "Opciones" },
		position: { default: "bottom-right" },
		buttonVariant: { default: "outline" },
		icon: { default: () => Ne }
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let r = t, i = F(!1), a = F(null);
		le(a, () => {
			i.value = !1;
		});
		function u(e) {
			r("select", e), i.value = !1;
		}
		return (t, r) => {
			let d = Ze, p = Tt;
			return j(), c("div", {
				ref_key: "menuRef",
				ref: a,
				class: C(["relative", { "z-[9999]": H(i) }])
			}, [f(d, {
				icon: e.icon,
				variant: e.buttonVariant,
				"aria-label": e.ariaLabel,
				onClick: r[0] ||= (e) => i.value = !H(i)
			}, null, 8, [
				"icon",
				"variant",
				"aria-label"
			]), f(p, null, {
				default: q(() => [H(i) ? (j(), c("div", {
					key: 0,
					class: C(["absolute w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-10 py-1", e.position === "bottom-right" ? "right-0 top-full mt-1" : "left-0 top-full mt-1"])
				}, [(j(!0), c(n, null, I(e.items, (e) => (j(), c("button", {
					key: e.action,
					type: "button",
					class: C(["w-full text-left px-4 py-2 text-sm transition-colors duration-150 flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700/30 cursor-pointer", [e.variant === "danger" ? "text-danger-600 dark:text-danger-400" : e.variant === "success" ? "text-success-600 dark:text-success-400" : "text-gray-700 dark:text-gray-200"]]),
					onClick: (t) => u(e)
				}, [e.icon ? (j(), o(z(e.icon), {
					key: 0,
					class: "w-4 h-4"
				})) : s("", !0), l("span", null, B(e.label), 1)], 10, If))), 128))], 2)) : s("", !0)]),
				_: 1
			})], 2);
		};
	}
}), Rf = ["for"], zf = { class: "relative" }, Bf = [
	"id",
	"name",
	"onChange",
	"onBlur",
	"value"
], Vf = {
	key: 0,
	value: "",
	class: "bg-white dark:bg-gray-500 text-gray-600 dark:text-white",
	disabled: ""
}, Hf = ["value", "selected"], Uf = {
	key: 0,
	class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
}, Wf = /* @__PURE__ */ p({
	__name: "FormSelect",
	props: /*@__PURE__*/ b({
		label: {},
		id: {},
		name: {},
		placeholder: {},
		leftIcon: {},
		rules: {},
		small: { type: Boolean },
		options: {}
	}, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = e, { placeholder: r = "Selecciona una opción" } = t, i = U(e, "modelValue"), a = (e, n) => {
			let r = e.target, a = t.options.find((e) => String(e.value) === r.value), o = r.value === "" ? null : a ? a.value : r.value;
			i.value = o, n(o);
		};
		return (t, u) => (j(), c("div", null, [
			e.label && !e.small ? (j(), c("label", {
				key: 0,
				for: e.id,
				class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
			}, B(e.label), 9, Rf)) : s("", !0),
			f(H(se), {
				name: e.name,
				rules: e.rules,
				modelValue: i.value,
				"onUpdate:modelValue": u[0] ||= (e) => i.value = e
			}, {
				default: q(({ field: t, value: i, errorMessage: u, handleChange: d }) => [l("div", zf, [l("select", {
					id: e.id,
					name: t.name,
					onChange: (e) => a(e, d),
					onBlur: t.onBlur,
					value: i,
					class: C([
						"w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
						e.leftIcon ? "pl-10" : "pl-4",
						"pr-4",
						u ? "border-danger-500 dark:border-danger-500" : "",
						e.small ? "py-2" : "py-3"
					])
				}, [H(r) ? (j(), c("option", Vf, B(H(r)), 1)) : s("", !0), (j(!0), c(n, null, I(e.options, (e) => (j(), c("option", {
					key: e.value,
					value: e.value,
					selected: i != null && String(i) === String(e.value),
					class: "bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
				}, B(e.label), 9, Hf))), 128))], 42, Bf), e.leftIcon ? (j(), c("div", Uf, [(j(), o(z(e.leftIcon), { class: C([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400"]) }, null, 8, ["class"]))])) : s("", !0)])]),
				_: 1
			}, 8, [
				"name",
				"rules",
				"modelValue"
			]),
			f(H(oe), {
				name: e.name,
				class: "mt-1 text-sm text-danger-600 dark:text-danger-400"
			}, null, 8, ["name"])
		]));
	}
}), Gf = ["for"], Kf = { class: "relative" }, qf = [
	"id",
	"value",
	"onInput",
	"placeholder",
	"rows",
	"maxlength"
], Jf = { class: "mt-1 flex items-start justify-between gap-2" }, Yf = /* @__PURE__ */ p({
	__name: "FormTextarea",
	props: /*@__PURE__*/ b({
		label: {},
		id: {},
		name: {},
		placeholder: { default: "" },
		rules: {},
		small: { type: Boolean },
		rows: { default: 3 },
		maxLength: {}
	}, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = U(e, "modelValue"), n = a(() => (t.value ?? "").length);
		return (r, i) => (j(), c("div", null, [e.label && !e.small ? (j(), c("label", {
			key: 0,
			for: e.id,
			class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
		}, B(e.label), 9, Gf)) : s("", !0), f(H(se), {
			name: e.name,
			rules: e.rules
		}, {
			default: q(({ field: r, errorMessage: i }) => [l("div", null, [l("div", Kf, [l("textarea", x({ id: e.id }, r, {
				value: t.value,
				onInput: (e) => {
					r.onChange(e), t.value = e.target.value;
				},
				placeholder: e.placeholder,
				rows: e.rows,
				maxlength: e.maxLength,
				class: [
					"w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
					i ? "border-danger-500 dark:border-danger-500" : "",
					e.small ? "py-2" : "py-3"
				]
			}), null, 16, qf)]), l("div", Jf, [f(H(oe), {
				name: e.name,
				class: "text-sm text-danger-600 dark:text-danger-400"
			}, null, 8, ["name"]), e.maxLength ? (j(), c("span", {
				key: 0,
				class: C(["text-xs text-gray-500 dark:text-gray-400 ml-auto shrink-0", n.value >= e.maxLength ? "text-danger-600 dark:text-danger-400" : ""])
			}, B(n.value) + " / " + B(e.maxLength), 3)) : s("", !0)])])]),
			_: 1
		}, 8, ["name", "rules"])]));
	}
}), Xf = /* @__PURE__ */ p({
	__name: "HelpTooltip",
	props: { tooltip: {} },
	setup(e) {
		let t = F(null), n = F(null), r = F(0), i = () => {
			if (!t.value || !n.value) return;
			let e = t.value.getBoundingClientRect(), i = e.left + e.width / 2, a = i + 96 - window.innerWidth + 8, o = -(i - 96 - 8);
			a > 0 ? r.value = -a : o > 0 ? r.value = o : r.value = 0;
		};
		return (a, o) => (j(), c("div", {
			ref_key: "triggerRef",
			ref: t,
			class: "relative group",
			onMouseenter: i
		}, [o[1] ||= l("span", { class: "inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-[10px] font-bold cursor-help leading-none" }, "?", -1), l("div", {
			ref_key: "tooltipRef",
			ref: n,
			class: "absolute bottom-full left-1/2 mb-2 px-3 py-2 text-xs text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-48 text-center z-50 pointer-events-none",
			style: T({ transform: `translateX(calc(-50% + ${H(r)}px))` })
		}, [d(B(e.tooltip) + " ", 1), o[0] ||= l("div", { class: "absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700" }, null, -1)], 4)], 544));
	}
}), Zf = /* @__PURE__ */ p({
	__name: "IconButton",
	props: {
		icon: {},
		color: { default: "gray" },
		to: {},
		rounded: {
			type: Boolean,
			default: !1
		},
		outline: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = e, n = a(() => t.to !== void 0), r = a(() => n.value ? Y : "button"), i = a(() => {
			let e = t.outline ? {
				gray: "border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
				primary: "border border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30",
				secondary: "border border-secondary-500 text-secondary-600 dark:text-secondary-400 hover:bg-secondary-50 dark:hover:bg-secondary-900/30",
				success: "border border-success-500 text-success-600 dark:text-success-400 hover:bg-success-50 dark:hover:bg-success-900/30",
				green: "border border-success-500 text-success-600 dark:text-success-400 hover:bg-success-50 dark:hover:bg-success-900/30",
				danger: "border border-danger-500 text-danger-600 dark:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-900/30",
				red: "border border-danger-500 text-danger-600 dark:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-900/30",
				warning: "border border-warning-500 text-warning-600 dark:text-warning-400 hover:bg-warning-50 dark:hover:bg-warning-900/30",
				yellow: "border border-warning-500 text-warning-600 dark:text-warning-400 hover:bg-warning-50 dark:hover:bg-warning-900/30",
				pink: "border border-pink-500 text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/30"
			} : {
				gray: "bg-gray-600 hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 text-white",
				primary: "bg-primary-600 hover:bg-primary-500 dark:bg-primary-700 dark:hover:bg-primary-600 text-white",
				secondary: "bg-secondary-600 hover:bg-secondary-500 dark:bg-secondary-700 dark:hover:bg-secondary-600 text-white",
				success: "bg-success-600 hover:bg-success-500 dark:bg-success-700 dark:hover:bg-success-600 text-white",
				green: "bg-success-600 hover:bg-success-500 dark:bg-success-700 dark:hover:bg-success-600 text-white",
				danger: "bg-danger-100 hover:bg-danger-200 dark:bg-danger-900/50 dark:hover:bg-danger-900/80 text-danger-700 dark:text-danger-200",
				red: "bg-danger-100 hover:bg-danger-200 dark:bg-danger-900/50 dark:hover:bg-danger-900/80 text-danger-700 dark:text-danger-200",
				warning: "bg-warning-600 hover:bg-warning-500 dark:bg-warning-700 dark:hover:bg-warning-600 text-white",
				yellow: "bg-warning-600 hover:bg-warning-500 dark:bg-warning-700 dark:hover:bg-warning-600 text-white",
				pink: "bg-pink-600 hover:bg-pink-500 dark:bg-pink-700 dark:hover:bg-pink-600 text-white"
			};
			return e[t.color] || e.gray;
		});
		return (t, n) => (j(), o(z(r.value), {
			to: e.to,
			class: C([
				"w-8 h-8 flex items-center justify-center transition-colors cursor-pointer",
				e.rounded ? "rounded-full" : "rounded-lg",
				i.value
			])
		}, {
			default: q(() => [L(t.$slots, "default", {}, () => [(j(), o(z(e.icon), { class: "w-4 h-4" }))])]),
			_: 3
		}, 8, ["to", "class"]));
	}
}), Qf = ["src"], $f = /*#__PURE__*/ Ge(/* @__PURE__ */ p({
	__name: "ImageLightbox",
	props: {
		open: { type: Boolean },
		src: {}
	},
	emits: ["close"],
	setup(e, { emit: t }) {
		let n = e, a = t;
		function l() {
			a("close");
		}
		function u(e) {
			n.open && e.key === "Escape" && l();
		}
		return O(() => {
			document.addEventListener("keydown", u);
		}), A(() => {
			document.removeEventListener("keydown", u);
		}), (t, n) => (j(), o(r, { to: "body" }, [f(i, { name: "lightbox-fade" }, {
			default: q(() => [e.open ? (j(), c("div", {
				key: 0,
				class: "fixed inset-0 z-[110] flex cursor-zoom-out items-center justify-center bg-black/90 p-4 sm:p-8",
				onClick: l
			}, [e.src ? (j(), c("img", {
				key: 0,
				src: e.src,
				alt: "Vista ampliada",
				class: "max-h-full max-w-full rounded-lg object-contain shadow-2xl"
			}, null, 8, Qf)) : s("", !0)])) : s("", !0)]),
			_: 1
		})]));
	}
}), [["__scopeId", "data-v-1bea9514"]]), ep = { class: "text-base font-medium text-gray-600 dark:text-gray-400 block mb-1" }, tp = { class: "text-gray-900 dark:text-white text-base w-fit" }, np = /* @__PURE__ */ p({
	__name: "InfoItem",
	props: {
		label: {},
		column: {
			type: Boolean,
			default: !0
		}
	},
	setup(e) {
		let t = e, n = a(() => t.column ? "" : "flex items-center space-x-2");
		return (t, r) => (j(), c("div", { class: C(H(n)) }, [l("span", ep, B(e.label), 1), l("div", tp, [L(t.$slots, "default")])], 2));
	}
}), rp = {
	key: 0,
	class: "h-12 w-12 shrink-0 overflow-hidden rounded-full"
}, ip = ["src", "alt"], ap = { class: "min-w-0 flex-1" }, op = { class: "block break-words text-sm font-medium text-gray-900 dark:text-white" }, sp = {
	key: 0,
	class: "mt-0.5 block break-words text-sm text-gray-500 dark:text-gray-400"
}, cp = {
	key: 1,
	class: "flex shrink-0 items-center justify-center text-gray-400 dark:text-gray-500"
}, lp = /* @__PURE__ */ p({
	__name: "Item",
	props: {
		title: {},
		subtitle: {},
		image: {},
		imageAlt: { default: "" },
		icon: {},
		border: {
			type: Boolean,
			default: !1
		},
		hoverable: {
			type: Boolean,
			default: !0
		},
		clickable: {
			type: Boolean,
			default: !1
		},
		id: {}
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = t, r = () => {
			e.clickable && n("click", e.id);
		};
		return (t, n) => (j(), o(z(e.clickable ? "button" : "div"), {
			id: e.id === void 0 ? void 0 : String(e.id),
			type: e.clickable ? "button" : void 0,
			class: C(["flex w-full items-center gap-3 rounded-lg bg-white px-4 py-3 text-left dark:bg-gray-900", {
				"border border-gray-200 dark:border-gray-700": e.border,
				"border-0": !e.border,
				"cursor-pointer transition-colors duration-150 hover:bg-gray-50 dark:hover:bg-gray-800": e.clickable || e.hoverable,
				"[font:inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500": e.clickable
			}]),
			onClick: r
		}, {
			default: q(() => [
				e.image || t.$slots.image ? (j(), c("span", rp, [L(t.$slots, "image", {}, () => [l("img", {
					src: e.image,
					alt: e.imageAlt,
					class: "h-full w-full object-cover"
				}, null, 8, ip)])])) : s("", !0),
				l("span", ap, [l("span", op, [L(t.$slots, "title", {}, () => [d(B(e.title), 1)])]), e.subtitle || t.$slots.subtitle ? (j(), c("span", sp, [L(t.$slots, "subtitle", {}, () => [d(B(e.subtitle), 1)])])) : s("", !0)]),
				e.icon || t.$slots.icon ? (j(), c("span", cp, [L(t.$slots, "icon", {}, () => [(j(), o(z(e.icon), {
					class: "h-5 w-5",
					"aria-hidden": "true",
					focusable: "false"
				}))])])) : s("", !0)
			]),
			_: 3
		}, 8, [
			"id",
			"type",
			"class"
		]));
	}
}), up = ["aria-busy", "tabindex"], dp = /* @__PURE__ */ p({
	__name: "List",
	props: {
		border: {
			type: Boolean,
			default: !1
		},
		pagination: {},
		scrollDistance: { default: 50 },
		loading: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["request"],
	setup(e, { emit: t }) {
		let n = t, r = F(null), i = a(() => Number.isFinite(e.scrollDistance) ? Math.max(0, e.scrollDistance) : 50), o, s = !1, l, u, d = (t) => {
			if (!t || !e.pagination || e.loading || t.clientHeight <= 0) return !1;
			let { current_page: n, last_page: r } = e.pagination;
			return !Number.isInteger(n) || !Number.isInteger(r) || n < 1 || n >= r ? !1 : o !== n + 1;
		};
		return K([i, () => !!e.pagination], ([t, i]) => {
			l?.stop(), u = void 0, i && (l = m(), l.run(() => {
				let i = !0;
				k(() => {
					i = !1;
				});
				let { reset: a } = de(r, () => {
					!d(r.value) || !e.pagination || (o = e.pagination.current_page + 1, s = !1, n("request", o));
				}, {
					distance: t,
					direction: "bottom",
					canLoadMore: (e) => i && d(e),
					onScroll: () => {
						!s || e.loading || (s = !1, o = void 0, u?.());
					}
				});
				u = a;
			}));
		}, {
			immediate: !0,
			flush: "post"
		}), k(() => l?.stop()), K(() => [
			e.pagination?.current_page,
			e.pagination?.last_page,
			e.loading
		], ([e, , t], [n, , r]) => {
			let i = e !== n;
			if (i && (o = void 0, s = !1), r && !t && !i && !(o === void 0 || e !== void 0 && e >= o)) {
				s = !0;
				return;
			}
			u?.();
		}, { flush: "post" }), (t, n) => (j(), c("ul", {
			ref_key: "listElement",
			ref: r,
			class: C(["m-0 w-full list-none divide-y divide-gray-200 rounded-xl bg-white p-0 dark:divide-gray-700 dark:bg-gray-900 [&>li>*]:rounded-none", {
				"border border-gray-200 dark:border-gray-700": e.border,
				"border-0": !e.border,
				"overflow-x-hidden overflow-y-auto": e.pagination,
				"overflow-hidden": !e.pagination
			}]),
			"aria-busy": e.pagination ? e.loading : void 0,
			tabindex: e.pagination ? 0 : void 0
		}, [L(t.$slots, "default")], 10, up));
	}
}), fp = { class: "bg-white border-b-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700 px-6 h-20 flex items-center" }, pp = { class: "flex items-center justify-between w-full" }, mp = { class: "flex gap-4" }, hp = { class: "flex items-center lg:hidden" }, gp = { class: "flex items-center space-x-4" }, _p = /* @__PURE__ */ p({
	__name: "Navbar",
	emits: ["toggle-mobile-sidebar"],
	setup(e) {
		return (e, t) => (j(), c("nav", fp, [l("div", pp, [l("div", mp, [l("div", hp, [l("button", {
			onClick: t[0] ||= (t) => e.$emit("toggle-mobile-sidebar"),
			class: "w-10 h-10 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
		}, [f(H(Re), { class: "w-5 h-5 text-gray-900 dark:text-white" })])])]), l("div", gp, [L(e.$slots, "right")])])]));
	}
}), vp = /* @__PURE__ */ p({
	__name: "SidebarItem",
	props: {
		to: {},
		name: {},
		icon: {},
		isCollapsed: { type: Boolean },
		hasExternalIcon: {
			type: Boolean,
			default: !1
		},
		hasBadge: {
			type: Boolean,
			default: !1
		},
		badgeText: { default: "" },
		textFitContent: {
			type: Boolean,
			default: !1
		},
		showActiveBackground: {
			type: Boolean,
			default: !1
		},
		useExternalIndicator: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = e, n = ae(), r = a(() => n.path === t.to);
		return (t, n) => {
			let i = R("RouterLink");
			return j(), o(i, {
				to: e.to,
				"data-active": r.value,
				class: C(["group relative flex items-center gap-3 py-2.5 px-3 rounded-xl w-full transition-all duration-200 focus:outline-none", [r.value ? e.showActiveBackground ? "bg-primary-600 text-white dark:bg-primary-500" : e.useExternalIndicator ? "bg-primary-600 text-white dark:bg-primary-500 lg:bg-transparent lg:dark:bg-transparent" : "text-white" : "text-gray-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800/50"]])
			}, {
				default: q(() => [(j(), o(z(e.icon), { class: C(["w-5 h-5 shrink-0 transition-colors duration-200", [r.value ? "text-white" : "text-gray-400 group-hover:text-gray-600 dark:text-gray-200 dark:group-hover:text-gray-100"]]) }, null, 8, ["class"])), l("div", { class: C(["overflow-hidden transition-all duration-300 flex items-center gap-2", e.isCollapsed ? "w-0" : e.textFitContent ? "w-fit" : "w-48"]) }, [
					l("span", { class: C(["whitespace-nowrap", r.value ? "font-medium" : "font-normal"]) }, B(e.name), 3),
					e.hasExternalIcon ? (j(), o(H(Ee), {
						key: 0,
						class: "w-3.5 h-3.5 shrink-0 opacity-50"
					})) : s("", !0),
					e.hasBadge ? (j(), c("span", {
						key: 1,
						class: C(["text-[10px] font-medium px-1.5 py-0.5 rounded-full shrink-0 tabular-nums", [r.value ? "bg-white/20 text-white" : "bg-primary-600 text-white dark:bg-primary-500"]])
					}, B(e.badgeText), 3)) : s("", !0)
				], 2)]),
				_: 1
			}, 8, [
				"to",
				"data-active",
				"class"
			]);
		};
	}
}), yp = fe("sidebarCollapsed", !1);
function bp() {
	return {
		isCollapsed: yp,
		toggleCollapse: () => {
			yp.value = !yp.value;
		},
		expand: () => {
			yp.value = !1;
		}
	};
}
//#endregion
//#region src/composables/useActiveIndicator.ts
function xp(e) {
	let t = ae(), n = F(!1), r = F(!1), i = F({
		top: "0px",
		height: "0px",
		opacity: 0
	}), a = null, o = (e, t) => {
		let n = e.closest(".overflow-hidden");
		if (!n || !t.contains(n)) return !0;
		let r = n.getBoundingClientRect(), i = e.getBoundingClientRect();
		return i.bottom <= r.bottom + 1 && i.top >= r.top - 1;
	}, s = () => {
		if (!e.value) return;
		let t = e.value.querySelector("[data-active=\"true\"]");
		if (t && o(t, e.value)) {
			let n = e.value.getBoundingClientRect(), r = t.getBoundingClientRect();
			r.height > 0 ? i.value = {
				top: `${r.top - n.top}px`,
				height: `${r.height}px`,
				opacity: 1
			} : i.value = {
				...i.value,
				opacity: 0
			};
		} else i.value = {
			...i.value,
			opacity: 0
		};
	}, c = () => {
		r.value = !0;
		let e = performance.now(), t = () => {
			s(), performance.now() - e < 350 ? a = requestAnimationFrame(t) : r.value = !1;
		};
		a = requestAnimationFrame(t);
	}, l = async (t = 3) => {
		if (await S(), !e.value) return;
		let n = e.value.querySelector("[data-active=\"true\"]");
		if (n) {
			let r = e.value.getBoundingClientRect(), a = n.getBoundingClientRect();
			a.height > 0 ? i.value = {
				top: `${a.top - r.top}px`,
				height: `${a.height}px`,
				opacity: 1
			} : t > 0 && requestAnimationFrame(() => l(t - 1));
		} else t > 0 ? requestAnimationFrame(() => l(t - 1)) : i.value = {
			...i.value,
			opacity: 0
		};
	};
	return O(async () => {
		await S(), l(), requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				n.value = !0;
			});
		});
	}), A(() => {
		a && cancelAnimationFrame(a);
	}), K(() => t.path, () => {
		l();
	}), {
		isInitialized: n,
		isAnimating: r,
		activeIndicatorStyle: i,
		trackAnimation: c
	};
}
//#endregion
//#region src/components/Sidebar/SidebarList.vue?vue&type=script&setup=true&lang.ts
var Sp = { class: "space-y-0.5 relative" }, Cp = ["onClick"], wp = { class: "overflow-hidden" }, Tp = { class: "pl-6 space-y-0.5 pt-1 pb-1" }, Ep = /* @__PURE__ */ p({
	__name: "SidebarList",
	props: {
		isCollapsed: { type: Boolean },
		menuItems: {}
	},
	setup(e) {
		let t = e, r = ae(), { expand: i } = bp(), a = G("navRef"), { isInitialized: s, isAnimating: u, activeIndicatorStyle: d, trackAnimation: p } = xp(a), m = F(/* @__PURE__ */ new Set()), h = F(/* @__PURE__ */ new Set()), g = (e) => e.children?.some((e) => r.path === e.route || r.path.startsWith(e.route + "/")) ?? !1, _ = (e) => h.value.has(e.route) ? !1 : m.value.has(e.route) || g(e), v = (e) => {
			if (t.isCollapsed) {
				i(), m.value.add(e), h.value.delete(e), p();
				return;
			}
			_({ route: e }) ? (m.value.delete(e), h.value.add(e)) : (m.value.add(e), h.value.delete(e)), p();
		};
		return K(() => r.path, () => {
			h.value.clear();
		}), K(() => t.isCollapsed, () => {
			p();
		}), (r, i) => {
			let p = vp;
			return j(), c("nav", {
				ref_key: "navRef",
				ref: a,
				class: "flex-1 px-3 py-2 relative"
			}, [l("div", {
				class: C(["absolute left-3 right-3 bg-primary-600 dark:bg-primary-500 rounded-xl", H(s) ? H(u) ? "transition-opacity duration-150 ease-out" : "transition-all duration-300 ease-out" : ""]),
				style: T({
					top: H(d).top,
					height: H(d).height,
					opacity: H(d).opacity
				})
			}, null, 6), l("ul", Sp, [(j(!0), c(n, null, I(t.menuItems, (t) => (j(), c("li", { key: t.route }, [t.children?.length ? (j(), c(n, { key: 0 }, [l("button", {
				class: C(["group relative flex items-center gap-3 py-2.5 px-3 rounded-xl w-full transition-all duration-200 outline-none", [g(t) ? "text-primary-500 dark:text-primary-400" : "text-gray-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800/50"]]),
				onClick: (e) => v(t.route)
			}, [(j(), o(z(t.icon), { class: C(["w-5 h-5 shrink-0 transition-colors duration-200", [g(t) ? "text-primary-500 dark:text-primary-400" : "text-gray-400 group-hover:text-gray-600 dark:text-gray-200 dark:group-hover:text-gray-100"]]) }, null, 8, ["class"])), l("div", { class: C(["overflow-hidden transition-all duration-300 flex items-center justify-between flex-1", e.isCollapsed ? "w-0" : "w-48"]) }, [l("span", { class: C([g(t) ? "font-medium" : "font-normal", "whitespace-nowrap"]) }, B(t.name), 3), f(H(ke), { class: C(["w-4 h-4 shrink-0 transition-transform duration-300 ease-in-out", _(t) ? "rotate-180" : ""]) }, null, 8, ["class"])], 2)], 10, Cp), l("div", { class: C(["grid transition-all duration-300 ease-in-out", _(t) && !e.isCollapsed ? "grid-rows-[1fr]" : "grid-rows-[0fr]"]) }, [l("div", wp, [l("ul", Tp, [(j(!0), c(n, null, I(t.children, (t) => (j(), c("li", { key: t.route }, [f(p, {
				to: t.route,
				name: t.name,
				icon: t.icon,
				"is-collapsed": e.isCollapsed,
				"use-external-indicator": ""
			}, null, 8, [
				"to",
				"name",
				"icon",
				"is-collapsed"
			])]))), 128))])])], 2)], 64)) : (j(), o(p, {
				key: 1,
				to: t.route,
				name: t.name,
				icon: t.icon,
				"is-collapsed": e.isCollapsed,
				"use-external-indicator": ""
			}, null, 8, [
				"to",
				"name",
				"icon",
				"is-collapsed"
			]))]))), 128))])], 512);
		};
	}
}), Dp = F(!1), Op = F(!1), kp = F(!1);
function Ap() {
	let e = () => {
		let e = window.innerWidth;
		Dp.value = e < 1024, Op.value = e >= 768 && e < 1024, kp.value = e >= 1024;
	};
	return O(() => {
		e(), window.addEventListener("resize", e);
	}), A(() => {
		window.removeEventListener("resize", e);
	}), {
		isMobile: Dp,
		isTablet: Op,
		isDesktop: kp,
		checkScreenSize: e
	};
}
//#endregion
//#region src/components/Sidebar.vue?vue&type=script&setup=true&lang.ts
var jp = { class: "p-4 border-b-2 border-gray-200 dark:border-gray-700 h-20 flex items-center" }, Mp = {
	key: 0,
	class: "flex items-center space-x-2"
}, Np = { class: "w-8 h-8" }, Pp = ["src", "alt"], Fp = { class: "overflow-hidden transition-all duration-300 w-auto" }, Ip = { class: "text-lg font-semibold whitespace-nowrap text-gray-900 dark:text-white" }, Lp = { class: "text-sm whitespace-nowrap text-gray-500 dark:text-gray-400" }, Rp = { class: "flex-1 overflow-y-auto" }, zp = {
	key: 0,
	class: "px-4 pb-1 text-left text-[10px] text-gray-400 dark:text-gray-500"
}, Bp = { class: "p-4 border-t-2 border-gray-200 dark:border-gray-700" }, Vp = {
	key: 0,
	class: "text-sm text-gray-900 dark:text-white whitespace-nowrap"
}, Hp = /* @__PURE__ */ p({
	__name: "Sidebar",
	props: {
		isCollapsed: { type: Boolean },
		logo: {},
		title: {},
		subtitle: {},
		version: {},
		menuItems: {}
	},
	emits: ["toggle-collapse", "close"],
	setup(e, { emit: t }) {
		let n = e, { logo: r, title: i, subtitle: u, version: d, menuItems: p } = n, m = t, { isDarkMode: h, toggleTheme: g } = Sd(), _ = a(() => h.value ? He : ze), v = a(() => n.isCollapsed ? "w-20" : "lg:w-64 xl:w-72"), y = () => {
			m("toggle-collapse");
		};
		return (e, t) => {
			let a = Ep;
			return j(), c("aside", { class: C(["h-screen flex flex-col border-r-2 transition-all duration-300 bg-white text-gray-900 border-gray-200 dark:bg-gray-900 dark:text-white dark:border-gray-700", v.value]) }, [
				l("div", jp, [l("div", { class: C(["flex items-center w-full", n.isCollapsed ? "justify-center" : "justify-between"]) }, [n.isCollapsed ? s("", !0) : (j(), c("div", Mp, [l("div", Np, [l("img", {
					src: H(r),
					alt: H(i),
					class: "w-full h-full object-contain"
				}, null, 8, Pp)]), l("div", Fp, [l("h1", Ip, B(H(i)), 1), l("p", Lp, B(H(u)), 1)])])), H(Dp) ? (j(), c("button", {
					key: 1,
					onClick: t[0] ||= (t) => e.$emit("close"),
					class: "w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
				}, [f(H(Ue), { class: "w-4 h-4 text-gray-600 dark:text-gray-400" })])) : n.isCollapsed ? (j(), c("button", {
					key: 3,
					onClick: y,
					class: "w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
				}, [f(H(je), { class: "w-4 h-4 text-gray-600 dark:text-gray-400" })])) : (j(), c("button", {
					key: 2,
					onClick: y,
					class: "w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ml-auto bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
				}, [f(H(Ae), { class: "w-4 h-4 text-gray-600 dark:text-gray-400" })]))], 2)]),
				l("div", Rp, [f(a, {
					"is-collapsed": n.isCollapsed,
					"menu-items": H(p)
				}, null, 8, ["is-collapsed", "menu-items"])]),
				n.isCollapsed ? s("", !0) : (j(), c("p", zp, " v" + B(H(d)), 1)),
				l("div", Bp, [l("button", {
					onClick: t[1] ||= (...e) => H(g) && H(g)(...e),
					class: C(["w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700", n.isCollapsed ? "justify-center" : ""]),
					"aria-label": "Toggle theme"
				}, [(j(), o(z(_.value), { class: "w-5 h-5 text-gray-900 dark:text-white flex-shrink-0" })), n.isCollapsed ? s("", !0) : (j(), c("span", Vp, B(H(h) ? "Modo claro" : "Modo oscuro"), 1))], 2)])
			], 2);
		};
	}
}), Up = /* @__PURE__ */ p({
	__name: "SidebarNav",
	props: { items: {} },
	setup(e) {
		let t = G("navRef"), { isInitialized: r, activeIndicatorStyle: i } = xp(t);
		return (a, s) => {
			let u = vp;
			return j(), c("nav", {
				ref_key: "navRef",
				ref: t,
				class: "relative space-y-2 flex gap-4 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-hidden"
			}, [l("div", {
				class: C(["absolute left-0 right-0 bg-primary-600 dark:bg-primary-500 rounded-xl hidden lg:block", H(r) ? "transition-all duration-300 ease-out" : ""]),
				style: T({
					top: H(i).top,
					height: H(i).height,
					opacity: H(i).opacity
				})
			}, null, 6), (j(!0), c(n, null, I(e.items, (e) => (j(), o(u, {
				key: e.name,
				name: e.name,
				icon: e.icon,
				"text-fit-content": "",
				"is-collapsed": !1,
				to: e.to,
				"use-external-indicator": ""
			}, null, 8, [
				"name",
				"icon",
				"to"
			]))), 128))], 512);
		};
	}
}), Wp = 3e3, Gp = /* @__PURE__ */ p({
	__name: "SnackBarItem",
	props: {
		message: {
			type: Object,
			required: !0,
			validator: (e) => !!e.text
		},
		error: {
			type: Boolean,
			required: !0
		}
	},
	emits: ["expired", "cancel"],
	setup(e, { emit: t }) {
		let n = e, r = t, a = F(!1);
		O(() => {
			setTimeout(() => {
				a.value = !0;
			}, 50);
		}), setTimeout(() => {
			a.value = !1, setTimeout(() => {
				r("expired");
			}, 300);
		}, Wp);
		let s = (e) => {
			e && (e.preventDefault(), e.stopPropagation()), a.value = !1, setTimeout(() => {
				r("cancel", n.message);
			}, 300);
		};
		return (t, n) => (j(), o(i, {
			"enter-active-class": "animate-fade-in-up-fast",
			"leave-active-class": "animate-fade-out"
		}, {
			default: q(() => [J(l("div", { class: C(["min-h-12 mb-4 snack-content flex items-center justify-between rounded-lg pointer-events-auto", [e.error ? "border border-danger-200 dark:border-danger-800 bg-danger-50 dark:bg-danger-900" : "border border-success-200 dark:border-success-800 bg-success-50 dark:bg-success-900"]]) }, [l("div", { class: C(["p-4 flex-1", [e.error ? "text-danger-700 dark:text-danger-100" : "text-success-700 dark:text-success-100"]]) }, B(e.message.text), 3), l("div", null, [l("button", {
				class: C(["px-3 py-2 text-center text-sm uppercase font-semibold cursor-pointer hover:opacity-70 transition-opacity", [e.error ? "text-danger-700 dark:text-danger-100" : "text-success-700 dark:text-success-100"]]),
				onClick: ie(s, ["stop"])
			}, [f(H(Ue), {
				name: "close",
				class: "w-4 h-4"
			})], 2)])], 2), [[ne, H(a)]])]),
			_: 1
		}));
	}
}), Kp = F([]);
function qp() {
	return {
		messages: Kp,
		pushMessage: (e, t = !1) => {
			Kp.value.push({
				ts: Date.now(),
				text: e,
				error: t
			});
		},
		shiftMessage: () => {
			Kp.value.shift();
		}
	};
}
//#endregion
//#region src/components/Snack/SnackBar.vue?vue&type=script&setup=true&lang.ts
var Jp = { class: "fixed top-0 right-0 flex flex-col-reverse p-4 overflow-hidden z-50 w-80" }, Yp = /* @__PURE__ */ p({
	__name: "SnackBar",
	props: { active: Boolean },
	setup(e) {
		let { messages: t, shiftMessage: r } = qp(), i = () => {
			r();
		};
		return (e, r) => {
			let a = Gp;
			return j(), c("div", Jp, [(j(!0), c(n, null, I(H(t), (e) => (j(), o(a, {
				key: e.ts,
				active: !0,
				message: e,
				error: e.error,
				onExpired: i
			}, null, 8, ["message", "error"]))), 128))]);
		};
	}
}), Xp = { class: "flex items-center gap-1.5" }, Zp = { class: "text-sm font-medium text-gray-600 dark:text-gray-300" }, Qp = {
	key: 0,
	class: "text-2xl font-bold text-gray-400 dark:text-gray-500 mt-1"
}, $p = {
	key: 1,
	class: "text-2xl font-bold text-gray-900 dark:text-white mt-1 tabular-nums"
}, em = {
	key: 0,
	class: "mt-4 flex items-center"
}, tm = {
	key: 1,
	class: "text-sm text-gray-500 dark:text-gray-400 ml-1"
}, nm = /* @__PURE__ */ p({
	__name: "StatCard",
	props: {
		title: {},
		value: {},
		change: {},
		changeType: { default: "neutral" },
		description: { default: "" },
		help: {}
	},
	setup(e) {
		let t = a(() => e.value === null), n = a(() => {
			switch (e.changeType) {
				case "positive": return "text-success-600 dark:text-success-400";
				case "negative": return "text-danger-600 dark:text-danger-400";
				case "neutral": return "text-warning-600 dark:text-warning-400";
				case "info": return "text-secondary-600 dark:text-secondary-400";
				default: return "text-gray-600 dark:text-gray-400";
			}
		});
		return (r, i) => {
			let a = Xf, u = ct;
			return j(), o(u, null, {
				default: q(() => [l("div", null, [l("div", Xp, [l("p", Zp, B(e.title), 1), e.help ? (j(), o(a, {
					key: 0,
					tooltip: e.help
				}, null, 8, ["tooltip"])) : s("", !0)]), H(t) ? (j(), c("p", Qp, "Sin datos")) : (j(), c("p", $p, B(e.value), 1))]), e.change !== void 0 || e.description ? (j(), c("div", em, [e.change === void 0 ? s("", !0) : (j(), c("span", {
					key: 0,
					class: C(["text-sm font-medium tabular-nums", H(n)])
				}, B(e.change), 3)), e.description ? (j(), c("span", tm, B(e.description), 1)) : s("", !0)])) : s("", !0)]),
				_: 1
			});
		};
	}
}), rm = {
	key: 0,
	class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
}, im = { class: "flex items-center space-x-3" }, am = ["disabled"], om = {
	key: 0,
	class: "text-sm text-gray-700 dark:text-gray-300"
}, sm = /* @__PURE__ */ p({
	__name: "SwitchInput",
	props: /*@__PURE__*/ b({
		label: {},
		modelValue: { type: Boolean },
		disabled: {
			type: Boolean,
			default: !1
		},
		trueLabel: { default: "Activo" },
		falseLabel: { default: "Inactivo" },
		showLabel: {
			type: Boolean,
			default: !0
		}
	}, {
		modelValue: {
			type: Boolean,
			required: !0
		},
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = U(e, "modelValue"), n = () => {
			e.disabled || (t.value = !t.value);
		};
		return (r, i) => (j(), c("div", null, [e.label ? (j(), c("label", rm, B(e.label), 1)) : s("", !0), l("div", im, [l("button", {
			type: "button",
			onClick: n,
			disabled: e.disabled,
			class: C(["relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed", t.value ? "bg-primary-600" : "bg-gray-300 dark:bg-gray-600"])
		}, [l("span", { class: C(["pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", t.value ? "translate-x-5" : "translate-x-0"]) }, null, 2)], 10, am), e.showLabel ? (j(), c("span", om, B(t.value ? e.trueLabel : e.falseLabel), 1)) : s("", !0)])]));
	}
}), cm = { class: "space-y-4" }, lm = { class: "h-16 flex items-center transition-transform duration-300" }, um = { class: "flex space-x-2 bg-gray-200 dark:bg-gray-800 rounded-lg py-2 px-3 w-full relative" }, dm = ["onClick"], fm = { class: "tab-content" }, pm = /*#__PURE__*/ Ge(/* @__PURE__ */ p({
	__name: "Tabs",
	props: {
		tabs: {},
		modelValue: { default: 0 }
	},
	emits: ["update:modelValue", "change"],
	setup(e, { emit: t }) {
		let r = e, o = t, s = a({
			get: () => r.modelValue,
			set: (e) => o("update:modelValue", e)
		});
		function u(e) {
			s.value !== e && (s.value = e, o("change", r.tabs[e], e));
		}
		return (t, r) => (j(), c("div", cm, [l("div", lm, [l("div", um, [l("div", {
			class: "absolute top-1 bottom-1 bg-white dark:bg-gray-700 rounded-lg transition-all duration-300 ease-in-out shadow-sm",
			style: T({
				left: `${1 + s.value * ((98 - 98 / e.tabs.length) / (e.tabs.length - 1))}%`,
				width: `${98 / e.tabs.length}%`
			})
		}, null, 4), (j(!0), c(n, null, I(e.tabs, (e, t) => (j(), c("button", {
			key: e.id,
			class: C(["relative flex-1 py-2 px-3 text-sm font-medium transition-colors duration-200 z-10", [s.value === t ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"]]),
			onClick: (e) => u(t)
		}, B(e.label), 11, dm))), 128))])]), l("div", fm, [f(i, {
			name: "tab-content",
			mode: "out-in",
			appear: ""
		}, {
			default: q(() => [(j(), c("div", {
				key: s.value,
				class: "tab-panel"
			}, [L(t.$slots, `tab-${s.value}`, {
				activeTab: e.tabs[s.value],
				activeTabIndex: s.value
			}, () => [r[0] ||= l("div", { class: "text-gray-500 dark:text-gray-400 text-center py-8" }, " No content available for this tab ", -1)], !0)]))]),
			_: 3
		})])]));
	}
}), [["__scopeId", "data-v-220a3b65"]]), mm = ["src", "alt"], hm = /* @__PURE__ */ p({
	__name: "UserAvatar",
	props: {
		imageUrl: { default: null },
		name: {},
		size: { default: "md" }
	},
	setup(e) {
		let t = a(() => {
			let t = e.name.trim().split(/\s+/).filter(Boolean);
			return t.length === 0 ? "?" : t.length >= 2 ? `${t[0].charAt(0)}${t[1].charAt(0)}`.toUpperCase() : t[0].charAt(0).toUpperCase();
		}), n = a(() => {
			switch (e.size) {
				case "sm": return "w-8 h-8";
				case "lg": return "w-12 h-12";
				case "xl": return "w-16 h-16";
				default: return "w-10 h-10";
			}
		}), r = a(() => {
			switch (e.size) {
				case "sm": return "text-xs";
				case "lg": return "text-base";
				case "xl": return "text-lg";
				default: return "text-sm";
			}
		});
		return (i, a) => (j(), c("div", { class: C([H(n), "rounded-full shrink-0 overflow-hidden"]) }, [e.imageUrl ? (j(), c("img", {
			key: 0,
			src: e.imageUrl,
			alt: e.name,
			class: "w-full h-full object-cover"
		}, null, 8, mm)) : (j(), c("div", {
			key: 1,
			class: C(["w-full h-full flex items-center justify-center bg-linear-to-br from-primary-500 to-secondary-500 text-white font-semibold", H(r)])
		}, B(H(t)), 3))], 2));
	}
}), gm = { class: "flex -space-x-2" }, _m = /* @__PURE__ */ p({
	__name: "UserAvatars",
	props: { users: {} },
	setup(e) {
		return (t, r) => (j(), c("div", gm, [(j(!0), c(n, null, I(e.users, (t, n) => (j(), c("div", {
			key: n,
			class: "relative"
		}, [l("div", {
			class: "w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white text-xs font-medium border-2 border-white",
			style: T({ zIndex: e.users.length - n })
		}, B(t.initials), 5)]))), 128))]));
	}
}), vm = { class: "flex items-center gap-2 sm:gap-3" }, ym = {
	key: 0,
	class: "absolute -top-1 -right-1 bg-danger-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium tabular-nums"
}, bm = {
	key: 0,
	class: "absolute right-0 top-14 w-80 bg-white dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-lg shadow-lg z-50"
}, xm = { class: "max-h-96 overflow-y-auto" }, Sm = {
	key: 0,
	class: "py-2 px-4 border-t border-gray-200 dark:border-gray-700 text-center"
}, Cm = { class: "w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center sm:mr-3 overflow-hidden" }, wm = { class: "text-gray-900 dark:text-white text-lg" }, Tm = {
	class: "hidden sm:flex items-center",
	style: { gap: "0" }
}, Em = { class: "mr-3" }, Dm = { class: "text-gray-900 dark:text-white font-medium" }, Om = { class: "flex items-center" }, km = { class: "text-sm text-gray-600 dark:text-gray-400" }, Am = {
	key: 0,
	class: "absolute right-0 top-14 w-56 sm:w-full bg-white dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-lg shadow-lg z-50"
}, jm = { class: "py-2" }, Mm = /* @__PURE__ */ p({
	__name: "UserProfileDropdown",
	props: {
		userName: {},
		userInitials: {},
		userRole: {},
		menuItems: {},
		showNotifications: {
			type: Boolean,
			default: !0
		},
		unreadNotificationsCount: { default: 0 }
	},
	emits: [
		"bell-click",
		"panel-open",
		"mark-all-read"
	],
	setup(e, { emit: t }) {
		let r = t;
		Ap();
		let i = F(!1), a = F(null), u = F(!1), d = F(null);
		function p() {
			i.value = !i.value, i.value && (u.value = !1);
		}
		function m() {
			i.value = !1;
		}
		function h(e) {
			m(), e.onClick?.();
		}
		function g() {
			if (r("bell-click"), Dp.value) return;
			let e = u.value;
			_(), !e && u.value && r("panel-open");
		}
		function _() {
			u.value = !u.value, u.value && (i.value = !1);
		}
		function v() {
			u.value = !1;
		}
		le(a, m), le(d, v);
		function y(e) {
			e.key === "Escape" && (i.value && m(), u.value && v());
		}
		return O(() => {
			window.addEventListener("keydown", y);
		}), E(() => {
			window.removeEventListener("keydown", y);
		}), (t, m) => {
			let _ = Tt, v = Jd;
			return j(), c("div", vm, [e.showNotifications ? (j(), c("div", {
				key: 0,
				class: "relative",
				ref_key: "notificationDropdownRef",
				ref: d
			}, [l("button", {
				onClick: ie(g, ["stop"]),
				class: "w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 relative cursor-pointer",
				"aria-label": "Show notifications"
			}, [f(H(De), { class: "w-5 h-5 text-gray-900 dark:text-white" }), e.unreadNotificationsCount > 0 ? (j(), c("div", ym, B(e.unreadNotificationsCount > 9 ? "9+" : e.unreadNotificationsCount), 1)) : s("", !0)]), f(_, null, {
				default: q(() => [u.value && !H(Dp) ? (j(), c("div", bm, [
					m[1] ||= l("div", { class: "py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white font-semibold" }, " Notificaciones ", -1),
					l("div", xm, [L(t.$slots, "notifications")]),
					e.unreadNotificationsCount > 0 ? (j(), c("div", Sm, [l("button", {
						onClick: m[0] ||= (e) => r("mark-all-read"),
						class: "text-xs font-medium text-primary-600 dark:text-primary-400 hover:underline focus:outline-none cursor-pointer"
					}, " Marcar todo como leído ")])) : s("", !0)
				])) : s("", !0)]),
				_: 3
			})], 512)) : s("", !0), l("div", {
				class: "items-center cursor-pointer relative",
				ref_key: "profileDropdownRef",
				ref: a
			}, [l("div", {
				class: "flex items-center",
				onClick: p
			}, [
				l("div", Cm, [L(t.$slots, "avatar", {}, () => [l("span", wm, B(e.userInitials), 1)])]),
				l("div", Tm, [l("div", Em, [l("div", Dm, B(e.userName), 1), l("div", Om, [l("span", km, B(e.userRole), 1)])]), f(H(ke), { class: C(["w-4 h-4 text-gray-600 dark:text-gray-400", i.value ? "rotate-180 transition-transform duration-200" : "transition-transform duration-200"]) }, null, 8, ["class"])]),
				f(H(ke), { class: C(["sm:hidden w-4 h-4 text-gray-600 dark:text-gray-400 ml-2", i.value ? "rotate-180 transition-transform duration-200" : "transition-transform duration-200"]) }, null, 8, ["class"])
			]), f(_, null, {
				default: q(() => [i.value ? (j(), c("div", Am, [l("ul", jm, [(j(!0), c(n, null, I(e.menuItems, (e) => (j(), o(v, {
					key: e.label,
					label: e.label,
					icon: e.icon,
					class: C(e.class),
					to: e.to,
					onClick: (t) => h(e)
				}, null, 8, [
					"label",
					"icon",
					"class",
					"to",
					"onClick"
				]))), 128))])])) : s("", !0)]),
				_: 1
			})], 512)]);
		};
	}
}), Nm = { class: "flex items-start justify-between gap-4 flex-col md:flex-row" }, Pm = { class: "space-y-2" }, Fm = { class: "text-3xl font-bold text-gray-900 dark:text-white" }, Im = { class: "flex space-x-2 justify-start flex-col gap-3 md:gap-0 md:flex-row items-center" }, Lm = { class: "text-gray-600 dark:text-gray-400 text-sm" }, Rm = { class: "flex items-center space-x-3" }, zm = /* @__PURE__ */ p({
	__name: "ViewHeader",
	props: {
		subtitle: {},
		title: {},
		badgeText: {}
	},
	setup(e) {
		return (t, n) => {
			let r = nt;
			return j(), c("div", null, [l("div", Nm, [l("div", Pm, [l("h1", Fm, B(e.title), 1), l("div", Im, [l("span", Lm, B(e.subtitle), 1), e.badgeText ? (j(), o(r, {
				key: 0,
				variant: "neutral",
				text: "sm"
			}, {
				default: q(() => [d(B(e.badgeText), 1)]),
				_: 1
			})) : s("", !0)])]), l("div", Rm, [L(t.$slots, "right")])])]);
		};
	}
}), Bm = { class: "flex items-start gap-3 p-4 rounded-lg border border-warning-200 dark:border-warning-800 bg-warning-50 dark:bg-warning-500/15" }, Vm = { class: "flex-1 text-sm text-warning-700 dark:text-warning-300" }, Hm = /* @__PURE__ */ p({
	__name: "WarningAlert",
	setup(e) {
		return (e, t) => (j(), c("div", Bm, [f(H(Te), { class: "w-5 h-5 text-warning-600 dark:text-warning-400 flex-shrink-0 mt-0.5" }), l("div", Vm, [L(e.$slots, "default")])]));
	}
});
//#endregion
export { Ke as Alert, nt as Badge, Ye as BaseButton, Ze as BaseButtonIcon, tt as Breadcrumb, ct as Card, ht as CardPaginations, gt as CollapseTransition, Gd as ConfirmationModal, Ff as DataTable, vt as Divider, Xd as Dropdown, Tt as DropdownAnimation, Jd as DropdownItem, Lf as DropdownMenu, Ud as FormInput, Wf as FormSelect, Yf as FormTextarea, Xf as HelpTooltip, Zf as IconButton, $f as ImageLightbox, np as InfoItem, lp as Item, dp as List, Et as LoadingSVG, wt as Modal, _p as Navbar, qd as ResultCount, Wt as SearchableSelect, Hp as Sidebar, vp as SidebarItem, Ep as SidebarList, Up as SidebarNav, Yp as SnackBar, Gp as SnackBarItem, nm as StatCard, sm as SwitchInput, of as TableHeader, nf as TablePagination, lf as TableSkeleton, pm as Tabs, hm as UserAvatar, _m as UserAvatars, Mm as UserProfileDropdown, zm as ViewHeader, Hm as WarningAlert, xd as initTheme, kp as isDesktop, Dp as isMobile, Op as isTablet, xp as useActiveIndicator, qp as useMessages, Ap as useMobile, Dt as useRequestKey, bp as useSidebar, df as useTable, Sd as useTheme, e as yup };
