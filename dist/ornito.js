import * as e from "yup";
import * as t from "vue";
import { Fragment as n, Teleport as r, Transition as i, computed as a, createBlock as o, createCommentVNode as s, createElementBlock as c, createElementVNode as l, createSlots as u, createTextVNode as d, createVNode as f, defineComponent as p, guardReactiveProps as m, h, inject as g, isRef as _, mergeDefaults as v, mergeModels as y, mergeProps as b, nextTick as x, normalizeClass as S, normalizeProps as C, normalizeStyle as w, onBeforeUnmount as T, onBeforeUpdate as E, onMounted as D, onUnmounted as O, openBlock as k, provide as A, reactive as j, readonly as M, ref as N, renderList as P, renderSlot as F, resolveComponent as I, resolveDynamicComponent as L, toDisplayString as R, toRef as z, toValue as B, unref as V, useModel as H, useSlots as ee, useTemplateRef as U, vModelText as W, vShow as G, watch as K, withCtx as q, withDirectives as te, withKeys as ne, withModifiers as J } from "vue";
import { RouterLink as re, useRoute as ie } from "vue-router";
import { ErrorMessage as ae, Field as oe, Form as se } from "vee-validate";
import { onClickOutside as ce, unrefElement as le, useStorage as ue, useSwipe as de, watchDebounced as fe } from "@vueuse/core";
//#region \0rolldown/runtime.js
var pe = Object.defineProperty, me = Object.getOwnPropertyDescriptor, he = Object.getOwnPropertyNames, ge = Object.prototype.hasOwnProperty, _e = (e, t) => {
	let n = {};
	for (var r in e) pe(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || pe(n, Symbol.toStringTag, { value: "Module" }), n;
}, ve = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = he(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !ge.call(e, s) && s !== n && pe(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = me(t, s)) || r.enumerable
	});
	return e;
}, ye = (e, t, n) => (ve(e, t, "default"), n && ve(n, t, "default")), be = {
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
}, Y = (e, t, n, r) => ({ color: n = "currentColor", size: i = 24, stroke: a = 2, title: o, class: s, ...c }, { attrs: l, slots: u }) => {
	let d = [...r.map((e) => h(...e)), ...u.default ? [u.default()] : []];
	return o && (d = [h("title", o), ...d]), h("svg", {
		...be[e],
		width: i,
		height: i,
		...l,
		class: ["tabler-icon", `tabler-icon-${t}`],
		...e === "filled" ? { fill: n } : {
			"stroke-width": a ?? be[e]["stroke-width"],
			stroke: n
		},
		...c
	}, d);
}, xe = Y("outline", "alert-circle", "AlertCircle", [
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
]), Se = Y("outline", "alert-triangle", "AlertTriangle", [
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
]), Ce = Y("outline", "arrow-up-right", "ArrowUpRight", [["path", {
	d: "M17 7l-10 10",
	key: "svg-0"
}], ["path", {
	d: "M8 7l9 0l0 9",
	key: "svg-1"
}]]), we = Y("outline", "bell", "Bell", [["path", {
	d: "M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6",
	key: "svg-0"
}], ["path", {
	d: "M9 17v1a3 3 0 0 0 6 0v-1",
	key: "svg-1"
}]]), Te = Y("outline", "check", "Check", [["path", {
	d: "M5 12l5 5l10 -10",
	key: "svg-0"
}]]), Ee = Y("outline", "chevron-down", "ChevronDown", [["path", {
	d: "M6 9l6 6l6 -6",
	key: "svg-0"
}]]), De = Y("outline", "chevron-left", "ChevronLeft", [["path", {
	d: "M15 6l-6 6l6 6",
	key: "svg-0"
}]]), Oe = Y("outline", "chevron-right", "ChevronRight", [["path", {
	d: "M9 6l6 6l-6 6",
	key: "svg-0"
}]]), ke = Y("outline", "currency-dollar", "CurrencyDollar", [["path", {
	d: "M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2",
	key: "svg-0"
}], ["path", {
	d: "M12 3v3m0 12v3",
	key: "svg-1"
}]]), Ae = Y("outline", "dots-vertical", "DotsVertical", [
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
]), je = Y("outline", "eye-off", "EyeOff", [
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
]), Me = Y("outline", "eye", "Eye", [["path", {
	d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
	key: "svg-0"
}], ["path", {
	d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",
	key: "svg-1"
}]]), Ne = Y("outline", "info-circle", "InfoCircle", [
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
]), Pe = Y("outline", "loader-2", "Loader2", [["path", {
	d: "M12 3a9 9 0 1 0 9 9",
	key: "svg-0"
}]]), Fe = Y("outline", "menu-2", "Menu2", [
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
]), Ie = Y("outline", "moon", "Moon", [["path", {
	d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008",
	key: "svg-0"
}]]), Le = Y("outline", "search", "Search", [["path", {
	d: "M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",
	key: "svg-0"
}], ["path", {
	d: "M21 21l-6 -6",
	key: "svg-1"
}]]), Re = Y("outline", "shield-check", "ShieldCheck", [["path", {
	d: "M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06",
	key: "svg-0"
}], ["path", {
	d: "M15 19l2 2l4 -4",
	key: "svg-1"
}]]), ze = Y("outline", "sun", "Sun", [["path", {
	d: "M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
	key: "svg-0"
}], ["path", {
	d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
	key: "svg-1"
}]]), Be = Y("outline", "x", "X", [["path", {
	d: "M18 6l-12 12",
	key: "svg-0"
}], ["path", {
	d: "M6 6l12 12",
	key: "svg-1"
}]]), Ve = /*@__PURE__*/ p({
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
				case "warning": return Se;
				case "danger": return xe;
				case "info": return Ne;
				case "success": return Re;
				default: return Se;
			}
		});
		return (t, a) => (k(), o(i, { name: "alert-reveal" }, {
			default: q(() => [e.show ? (k(), c("div", {
				key: 0,
				class: S([
					"flex items-start gap-3 p-4 rounded-lg border backdrop-blur-sm",
					n.value.border,
					n.value.background
				])
			}, [(k(), o(L(r.value), { class: S(["w-5 h-5 flex-shrink-0 mt-0.5", n.value.icon]) }, null, 8, ["class"])), l("div", { class: S(["flex-1 text-sm", n.value.text]) }, [F(t.$slots, "default", {}, void 0, !0)], 2)], 2)) : s("", !0)]),
			_: 3
		}));
	}
}), He = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Ue = /*#__PURE__*/ He(Ve, [["__scopeId", "data-v-22e2bebf"]]), We = { class: "flex items-center justify-center relative" }, Ge = { class: "flex items-center space-x-2" }, Ke = /* @__PURE__ */ p({
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
		let t = e, n = a(() => t.to !== void 0), r = a(() => n.value ? re : "button");
		return (t, n) => (k(), o(L(V(r)), {
			to: e.to,
			type: e.type,
			disabled: e.disabled || e.loading,
			class: S([
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
			default: q(() => [l("div", We, [e.loading ? (k(), c("svg", {
				key: 0,
				class: S(["animate-spin h-4 w-4 transition-all duration-300 ease-in-out mr-2", e.variant === "primary" ? "text-white" : "text-gray-900 dark:text-white"]),
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
			}, null, -1)]], 2)) : s("", !0), l("div", Ge, [
				e.icon && !e.loading && e.iconPosition !== "right" ? (k(), o(L(e.icon), {
					key: 0,
					class: S([
						"h-5 w-5",
						t.$slots.default ? "mr-2" : "",
						e.iconClass
					])
				}, null, 8, ["class"])) : s("", !0),
				F(t.$slots, "default"),
				e.icon && !e.loading && e.iconPosition === "right" ? (k(), o(L(e.icon), {
					key: 1,
					class: S(["h-5 w-5", e.iconClass])
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
}), qe = ["type", "disabled"], Je = /* @__PURE__ */ p({
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
		return (i, a) => (k(), c("button", {
			type: e.type,
			disabled: e.disabled || e.loading,
			class: S([
				"rounded-lg transition-all duration-200 cursor-pointer inline-flex items-center justify-center",
				"disabled:opacity-50 disabled:cursor-not-allowed",
				"focus:outline-none",
				"active:scale-95",
				V(t),
				V(r)
			])
		}, [e.loading ? (k(), c("svg", {
			key: 0,
			class: S(["animate-spin", [V(n), e.variant === "primary" || e.variant === "danger" ? "text-white" : "text-gray-900 dark:text-white"]]),
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
		}, null, -1)]], 2)) : (k(), o(L(e.icon), {
			key: 1,
			class: S(V(n))
		}, null, 8, ["class"]))], 10, qe));
	}
}), Ye = {
	class: "flex mb-6",
	"aria-label": "Breadcrumb"
}, Xe = { class: "inline-flex items-center space-x-1 md:space-x-3" }, Ze = {
	key: 0,
	class: "flex items-center"
}, Qe = /* @__PURE__ */ p({
	__name: "Breadcrumb",
	props: { items: {} },
	setup(e) {
		return (t, r) => (k(), c("nav", Ye, [l("ol", Xe, [(k(!0), c(n, null, P(e.items, (t, n) => (k(), c("li", {
			key: n,
			class: "inline-flex items-center"
		}, [n > 0 ? (k(), c("div", Ze, [...r[0] ||= [l("svg", {
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
		})], -1)]])) : s("", !0), t.to && n < e.items.length - 1 ? (k(), o(V(re), {
			key: 1,
			to: t.to,
			class: "inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
		}, {
			default: q(() => [t.icon ? (k(), o(L(t.icon), {
				key: 0,
				class: "w-4 h-4 mr-2"
			})) : s("", !0), d(" " + R(t.label), 1)]),
			_: 2
		}, 1032, ["to"])) : (k(), c("span", {
			key: 2,
			class: S(["inline-flex items-center text-sm font-medium", n === e.items.length - 1 ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400"])
		}, [t.icon ? (k(), o(L(t.icon), {
			key: 0,
			class: "w-4 h-4 mr-2"
		})) : s("", !0), d(" " + R(t.label), 1)], 2))]))), 128))])]));
	}
}), $e = /* @__PURE__ */ p({
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
		return (e, t) => (k(), c("span", { class: S([
			"inline-flex items-center px-2.5 py-0.5 rounded-full font-medium tabular-nums",
			V(n),
			V(r)
		]) }, [F(e.$slots, "default")], 2));
	}
}), et = {
	key: 0,
	class: "px-6 pt-5"
}, tt = { class: "flex-1 min-w-0" }, nt = {
	key: 0,
	class: "text-base font-semibold tracking-tight text-gray-900 dark:text-white"
}, rt = {
	key: 1,
	class: "mt-0.5 text-sm text-gray-500 dark:text-gray-400"
}, it = {
	key: 0,
	class: "flex items-center gap-2 shrink-0"
}, at = /* @__PURE__ */ p({
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
		let t = ee(), n = a(() => e.title || e.subtitle || t.headerButtons);
		return (t, r) => (k(), c("div", { class: S(["bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm", { "overflow-hidden flex flex-col": e.noPadding }]) }, [V(n) ? (k(), c("div", et, [l("div", { class: S(["flex items-start justify-between gap-4 pb-4 border-b border-gray-300 dark:border-gray-600", { "flex-col gap-3 sm:flex-row sm:items-start": e.colInMobile }]) }, [l("div", tt, [e.title ? (k(), c("h3", nt, R(e.title), 1)) : s("", !0), e.subtitle ? (k(), c("p", rt, R(e.subtitle), 1)) : s("", !0)]), t.$slots.headerButtons ? (k(), c("div", it, [F(t.$slots, "headerButtons")])) : s("", !0)], 2)])) : s("", !0), l("div", { class: S(e.noPadding ? "flex-1 flex flex-col" : "p-4") }, [F(t.$slots, "default")], 2)], 2));
	}
}), ot = {
	key: 0,
	class: "flex items-center justify-between pt-4"
}, st = { class: "text-base text-gray-500 dark:text-gray-400 tabular-nums" }, ct = { class: "flex items-center gap-2" }, lt = ["disabled"], ut = { class: "text-base text-gray-700 dark:text-gray-300 tabular-nums" }, dt = ["disabled"], ft = /* @__PURE__ */ p({
	__name: "CardPaginations",
	props: { pagination: {} },
	emits: ["page-change"],
	setup(e, { emit: t }) {
		let n = t, r = (t) => {
			e.pagination && (t < 1 || t > e.pagination.last_page || n("page-change", t));
		};
		return (t, n) => e.pagination && e.pagination.last_page > 1 ? (k(), c("div", ot, [l("p", st, " Mostrando " + R(e.pagination.from) + "-" + R(e.pagination.to) + " de " + R(e.pagination.total), 1), l("div", ct, [
			l("button", {
				type: "button",
				disabled: e.pagination.current_page === 1,
				class: "w-8 h-8 flex items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-500 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors",
				onClick: n[0] ||= (t) => r(e.pagination.current_page - 1)
			}, [f(V(De), { class: "w-4 h-4" })], 8, lt),
			l("span", ut, R(e.pagination.current_page) + " / " + R(e.pagination.last_page), 1),
			l("button", {
				type: "button",
				disabled: e.pagination.current_page === e.pagination.last_page,
				class: "w-8 h-8 flex items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-500 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors",
				onClick: n[1] ||= (t) => r(e.pagination.current_page + 1)
			}, [f(V(Oe), { class: "w-4 h-4" })], 8, dt)
		])])) : s("", !0);
	}
}), pt = /* @__PURE__ */ p({
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
		return (e, s) => (k(), o(i, {
			name: "collapse",
			onEnter: t,
			onAfterEnter: n,
			onLeave: r,
			onAfterLeave: a
		}, {
			default: q(() => [F(e.$slots, "default")]),
			_: 3
		}));
	}
}), mt = { class: "relative py-4" }, ht = /* @__PURE__ */ p({
	__name: "Divider",
	setup(e) {
		return (e, t) => (k(), c("div", mt, [...t[0] ||= [l("div", { class: "absolute inset-0 flex items-center" }, [l("div", { class: "w-full border-t border-gray-200 dark:border-gray-700" })], -1)]]));
	}
}), gt = { class: "flex items-start justify-between" }, _t = { class: "flex-1 min-w-0" }, vt = {
	key: 0,
	class: "text-lg font-semibold text-gray-900 dark:text-white"
}, yt = {
	key: 1,
	class: "text-sm text-gray-600 dark:text-gray-400 mt-1"
}, bt = { class: "overflow-y-auto max-h-[70vh] p-0.5 -m-0.5" }, xt = /*#__PURE__*/ He(/* @__PURE__ */ p({
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
		})[n.size ?? "md"]), d = t, p = N(null);
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
			e ? (p.value?.showModal(), await x(), p.value?.focus()) : p.value?.close();
		}), D(async () => {
			n.open && (p.value?.showModal(), await x(), p.value?.focus());
		}), T(() => {
			p.value?.open && p.value.close();
		}), (t, n) => {
			let a = ht;
			return k(), o(r, { to: "body" }, [f(i, {
				name: "modal-fade",
				appear: ""
			}, {
				default: q(() => [e.open ? (k(), c("dialog", {
					key: 0,
					ref_key: "dialogRef",
					ref: p,
					class: "rutely-modal fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-0 m-0 border-0 w-full h-full focus:outline-none",
					onClose: m,
					onClick: J(h, ["self"]),
					onKeydown: g
				}, [l("div", { class: S(["relative bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full p-6 transform transition-all duration-300 border border-gray-200 dark:border-gray-700", [V(u), e.open ? "scale-100 opacity-100" : "scale-95 opacity-0"]]) }, [l("div", null, [l("div", gt, [l("div", _t, [e.title ? (k(), c("div", vt, R(e.title), 1)) : s("", !0), e.subtitle ? (k(), c("div", yt, R(e.subtitle), 1)) : s("", !0)]), l("button", {
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
				})], -1)]])]), f(a)]), l("div", bt, [F(t.$slots, "default", {}, void 0, !0)])], 2)], 544)) : s("", !0)]),
				_: 3
			})]);
		};
	}
}), [["__scopeId", "data-v-558911f3"]]), St = /* @__PURE__ */ p({
	__name: "DropdownAnimation",
	setup(e) {
		return (e, t) => (k(), o(i, {
			"enter-active-class": "transition ease-out duration-200",
			"enter-from-class": "transform opacity-0 scale-95",
			"enter-to-class": "transform opacity-100 scale-100",
			"leave-active-class": "transition ease-in duration-150",
			"leave-from-class": "transform opacity-100 scale-100",
			"leave-to-class": "transform opacity-0 scale-95"
		}, {
			default: q(() => [F(e.$slots, "default")]),
			_: 3
		}));
	}
}), Ct = /* @__PURE__ */ p({
	__name: "LoadingSVG",
	props: { customClass: {} },
	setup(e) {
		let t = e, n = a(() => t.customClass || "animate-spin -ml-1 mr-3 h-12 w-12 text-gray-900 dark:text-white");
		return (e, t) => (k(), c("svg", {
			class: S(V(n)),
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
}), wt = Symbol("useRequest"), Tt = ["for"], Et = { class: "relative" }, Dt = [
	"id",
	"onBlur",
	"placeholder",
	"name",
	"disabled"
], Ot = {
	key: 0,
	class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
}, kt = { class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" }, At = {
	key: 0,
	class: "flex flex-wrap gap-2 mt-2"
}, jt = ["onClick"], Mt = {
	key: 0,
	class: "py-4 px-4 flex items-center justify-center"
}, Nt = {
	key: 1,
	class: "py-4 px-4 text-center text-gray-500 dark:text-gray-400"
}, Pt = {
	key: 2,
	class: "space-y-2 p-2 max-h-64 overflow-y-auto"
}, Ft = ["onClick"], It = { class: "flex justify-between items-center" }, Lt = { class: "flex items-center space-x-2" }, Rt = { class: "flex flex-col" }, zt = { class: "font-semibold text-gray-900 dark:text-white" }, Bt = {
	key: 0,
	class: "text-primary-600 dark:text-primary-400"
}, Vt = /* @__PURE__ */ p({
	__name: "SearchableSelect",
	props: /*@__PURE__*/ y({
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
	emits: /*@__PURE__*/ y(["select", "data"], ["update:modelValue"]),
	setup(e, { emit: t }) {
		let r = e, { placeholder: i = "Buscar...", id: u = "searchable-select", labelKey: p = "label", valueKey: m = "value", multiple: h = !1 } = r, v = H(e, "modelValue"), y = g(wt);
		if (!y) throw Error("SearchableSelect: no request instance provided. Call app.provide(useRequestKey, useRequest) in the consuming app.");
		let { get: b } = y(), x = N(!1), C = N(""), w = N([]), T = N([]), E = N(/* @__PURE__ */ new Map()), A = N(null), j = N([]), M = N(!1), F = N(), I = N(), z = N(""), B = N(!1), ee = N(!1), U = N(!1), G = a(() => v.value ? A.value && A.value.value === v.value ? A.value : w.value.find((e) => e.value === v.value) || T.value.find((e) => e.value === v.value) : null), ne = a(() => "absolute w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-[9999] mt-2 overflow-hidden"), J = a(() => Array.isArray(v.value) ? v.value : []), re = (e, t) => {
			let n = t.toLocaleLowerCase();
			return [e.label, ...e.subtitles].some((e) => e.toLocaleLowerCase().includes(n));
		}, ie = (e) => T.value.filter((t) => re(t, e)), se = (e) => h ? J.value.includes(e.value) : G.value?.value === e.value, ce = 0, le = async () => {
			let e = ++ce, t = J.value;
			if (t.length === 0) {
				j.value = [];
				return;
			}
			let n = /* @__PURE__ */ new Map();
			for (let e of j.value) n.set(e.value, e);
			for (let e of w.value) n.set(e.value, e);
			for (let e of T.value) n.set(e.value, e);
			let i = t.filter((e) => !n.has(e));
			if (i.length && r.url) {
				if (T.value.length === 0) {
					if (await ge(), e !== ce) return;
					for (let e of T.value) n.set(e.value, e);
					i = t.filter((e) => !n.has(e));
				}
				for (let t of i) try {
					let i = r.url.includes("?") ? "&" : "?", { data: a } = await b(`${r.url}${i}filter[${m}]=${t}`);
					if (e !== ce) return;
					let o = Array.isArray(a.value) ? a.value : a.value?.data || [];
					o.length && n.set(t, he(o[0]));
				} catch {}
			}
			e === ce && (j.value = t.map((e) => n.get(e) ?? {
				label: String(e),
				value: e,
				subtitles: []
			}));
		}, ue = (e, t) => {
			U.value = !0;
			let n = J.value.filter((t) => t !== e);
			v.value = n, t(n), j.value = j.value.filter((t) => t.value !== e);
		};
		function de(e, t) {
			return t.trim().split(".").reduce((e, t) => e?.[t], e);
		}
		function pe(e, t) {
			let n = [...e.matchAll(/\{([^}]+)\}/g)];
			if (n.length === 0) {
				let n = de(t, e);
				return n == null ? "" : String(n);
			}
			let r = n.map((e) => de(t, e[1]));
			if (r.every((e) => e == null || e === "")) return "";
			let i = e;
			return n.forEach((e, t) => {
				let n = r[t];
				i = i.replace(e[0], n == null ? "" : String(n));
			}), i.replace(/^[\s\-:|,·]+/, "").replace(/[\s\-:|,·]+$/, "").replace(/\s+/g, " ").trim();
		}
		function me(e) {
			return r.subtitleKey ? (Array.isArray(r.subtitleKey) ? r.subtitleKey : [r.subtitleKey]).map((t) => pe(t, e)).filter(Boolean) : [];
		}
		let he = (e) => {
			let t = {
				label: pe(p, e),
				value: de(e, m),
				icon: e.icon,
				subtitles: me(e)
			};
			return E.value.set(t.value, e), t;
		}, ge = async (e = {}) => {
			if (!r.url) return;
			let t = r.url;
			if (e.searchWithId && v.value) {
				let e = r.url.includes("?") ? "&" : "?";
				t = `${r.url}${e}filter[${r.valueKey}]=${v.value}`;
			}
			M.value = !0;
			try {
				let { data: e } = await b(t);
				if (e.value) {
					let t = (Array.isArray(e.value) ? e.value : e.value.data || []).map(he);
					w.value = t, T.value = t;
				}
			} catch (e) {
				console.error("Error fetching initial data:", e), w.value = [], T.value = [];
			} finally {
				M.value = !1;
			}
		}, _e = async (e) => {
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
					let e = (Array.isArray(i.value) ? i.value : i.value.data || []).map(he);
					w.value = e;
				}
			} catch (e) {
				console.error("Error searching data:", e), w.value = [];
			} finally {
				M.value = !1;
			}
		}, ve = () => {
			x.value = !0, z.value = C.value, ee.value = !0, C.value = "", T.value.length === 0 ? ge() : (w.value = T.value, A.value && !w.value.find((e) => e.value === A.value.value) && (w.value = [A.value, ...w.value])), I.value && I.value.select();
		}, ye = () => {
			setTimeout(() => {
				x.value = !1, ee.value = !0, h ? C.value = "" : v.value && G.value ? C.value = G.value.label : v.value || (C.value = ""), z.value = "";
			}, 200);
		};
		fe(C, (e) => {
			if (ee.value) {
				ee.value = !1;
				return;
			}
			let t = e.trim();
			t && !B.value ? (_e(t), B.value = !1) : w.value = T.value;
		}, { debounce: 500 });
		let be = t, Y = (e, t, n) => {
			if (t && (t.preventDefault(), t.stopPropagation()), h) {
				if (ee.value = !0, U.value = !0, J.value.includes(e.value)) {
					let t = J.value.filter((t) => t !== e.value);
					v.value = t, n(t), j.value = j.value.filter((t) => t.value !== e.value);
				} else {
					let t = [...J.value, e.value];
					v.value = t, n(t), j.value.find((t) => t.value === e.value) || j.value.push(e);
				}
				C.value = "", w.value = T.value, be("select", e);
				let t = E.value.get(e.value);
				t !== void 0 && be("data", t), I.value && I.value.focus();
				return;
			}
			ee.value = !0, v.value = e.value, n(e.value), C.value = e.label, A.value = e, x.value = !1, I.value && I.value.blur(), be("select", e);
			let r = E.value.get(e.value);
			r !== void 0 && be("data", r);
		}, xe = (e) => {
			let t = e.target;
			F.value && !F.value.contains(t) && (x.value = !1);
		};
		D(() => {
			if (document.addEventListener("click", xe), h) {
				le();
				return;
			}
			v.value && v.value !== "" ? Se(v.value) : v.value && G.value && (C.value = G.value.label, A.value = G.value);
		}), O(() => {
			document.removeEventListener("click", xe);
		}), K(v, (e, t) => {
			if (h) {
				if (U.value) {
					U.value = !1;
					return;
				}
				le();
				return;
			}
			e && e !== t ? G.value && G.value.value === e ? (C.value = G.value.label, A.value ||= G.value) : (!A.value || A.value.value !== e) && Se(e) : e || (C.value = "", A.value = null);
		});
		let Se = async (e) => {
			B.value = !0, await ge();
			let t = w.value.find((t) => t.value === e);
			if (t) ee.value = !0, C.value = t.label, A.value = t;
			else {
				let t = r.url.includes("?") ? "&" : "?", n = `${r.url}${t}filter[${r.valueKey}]=${e}`;
				try {
					let { data: e } = await b(n);
					if (e.value) {
						let t = Array.isArray(e.value) ? e.value : e.value.data || [];
						if (t.length > 0) {
							let e = he(t[0]);
							w.value = [e, ...w.value], T.value = [e, ...T.value], A.value = e, ee.value = !0, C.value = e.label;
						}
					}
				} catch (e) {
					console.error("Error fetching item by ID:", e);
				}
			}
			B.value = !1;
		};
		return (t, a) => {
			let p = Ct, m = St;
			return k(), c("div", {
				class: "relative",
				ref_key: "selectRef",
				ref: F
			}, [
				e.label && !r.small ? (k(), c("label", {
					key: 0,
					for: V(u),
					class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
				}, R(e.label), 9, Tt)) : s("", !0),
				f(V(oe), {
					name: e.name || V(u),
					rules: e.rules,
					modelValue: v.value,
					"onUpdate:modelValue": a[1] ||= (e) => v.value = e
				}, {
					default: q(({ field: t, errorMessage: g, handleChange: v }) => [
						l("div", Et, [
							te(l("input", {
								id: V(u),
								ref_key: "inputRef",
								ref: I,
								"onUpdate:modelValue": a[0] ||= (e) => _(C) ? C.value = e : null,
								onFocus: ve,
								onBlur: (e) => {
									t.onBlur(e), ye();
								},
								placeholder: V(i),
								name: t.name,
								autocomplete: "off",
								"aria-autocomplete": "none",
								"data-lpignore": "true",
								"data-bwignore": "true",
								"data-form-type": "other",
								spellcheck: "false",
								class: S([
									"w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
									e.leftIcon ? "pl-10" : "pl-4",
									"pr-10",
									g ? "border-danger-500 dark:border-danger-500" : "",
									r.small ? "py-2" : "py-3"
								]),
								disabled: e.disabled
							}, null, 42, Dt), [[W, V(C)]]),
							e.leftIcon ? (k(), c("div", Ot, [(k(), o(L(e.leftIcon), { class: S([r.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400"]) }, null, 8, ["class"]))])) : s("", !0),
							l("div", kt, [(k(), o(L(V(Ee)), { class: S([
								r.small ? "h-4 w-4" : "h-5 w-5",
								"text-gray-400 dark:text-gray-400 transition-transform duration-200",
								V(x) ? "rotate-180" : ""
							]) }, null, 8, ["class"]))])
						]),
						V(h) && V(j).length ? (k(), c("div", At, [(k(!0), c(n, null, P(V(j), (e) => (k(), c("span", {
							key: e.value,
							class: "inline-flex items-center gap-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1"
						}, [d(R(e.label) + " ", 1), l("button", {
							type: "button",
							onClick: (t) => ue(e.value, v),
							class: "hover:text-primary-900 dark:hover:text-primary-100"
						}, [f(V(Be), { class: "h-4 w-4" })], 8, jt)]))), 128))])) : s("", !0),
						f(m, null, {
							default: q(() => [V(x) ? (k(), c("div", {
								key: 0,
								class: S(V(ne))
							}, [V(M) ? (k(), c("div", Mt, [f(p)])) : V(w).length === 0 ? (k(), c("div", Nt, " No se encontraron datos ")) : (k(), c("div", Pt, [(k(!0), c(n, null, P(V(w), (e) => (k(), c("div", {
								key: e.value,
								onClick: (t) => Y(e, t, v),
								class: S(["rounded-lg p-3 border cursor-pointer transition-colors", {
									"border-primary-500 bg-primary-100 dark:bg-primary-900/20 hover:bg-primary-200 dark:hover:bg-primary-900/30": se(e),
									"bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700": !se(e)
								}])
							}, [l("div", It, [l("div", Lt, [e.icon ? (k(), o(L(e.icon), {
								key: 0,
								class: "w-5 h-5 text-gray-600 dark:text-gray-400"
							})) : s("", !0), l("div", Rt, [l("span", zt, R(e.label), 1), (k(!0), c(n, null, P(e.subtitles, (e, t) => (k(), c("span", {
								key: t,
								class: "text-xs text-gray-500 dark:text-gray-400"
							}, R(e), 1))), 128))])]), se(e) ? (k(), c("div", Bt, [f(V(Te), { class: "h-6 w-6" })])) : s("", !0)])], 10, Ft))), 128))]))], 2)) : s("", !0)]),
							_: 2
						}, 1024)
					]),
					_: 1
				}, 8, [
					"name",
					"rules",
					"modelValue"
				]),
				f(V(ae), {
					name: e.name || V(u),
					class: "mt-1 text-sm text-danger-600 dark:text-danger-400"
				}, null, 8, ["name"])
			], 512);
		};
	}
}), Ht = {
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
}, Ut = ["+", "-"], Wt = [
	"decimal",
	"thousands",
	"prefix",
	"suffix"
];
function Gt(e) {
	return Math.max(0, Math.min(e, 100));
}
function Kt(e, t) {
	return e = e.padStart(t + 1, "0"), t === 0 ? e : `${e.slice(0, -t)}.${e.slice(-t)}`;
}
function qt(e) {
	return e = e ? e.toString() : "", e.replace(/\D+/g, "") || "0";
}
function Jt(e, t) {
	return e.replace(/(\d)(?=(?:\d{3})+\b)/gm, `$1${t}`);
}
function Yt(e, t, n) {
	return t ? e + n + t : e;
}
function Xt(e, t) {
	return Ut.includes(e) ? (console.warn(`v-money3 "${t}" property don't accept "${e}" as a value.`), !1) : !/\d/g.test(e) || (console.warn(`v-money3 "${t}" property don't accept "${e}" (any number) as a value.`), !1);
}
function Zt(e) {
	for (let t of Wt) if (!Xt(e[t], t)) return !1;
	return !0;
}
function Qt(e) {
	for (let t of Wt) {
		if (typeof e[t] != "string") {
			e[t] = "";
			continue;
		}
		e[t] = e[t].replace(/\d+/g, "");
		for (let n of Ut) e[t] = e[t].replaceAll(n, "");
	}
	return e;
}
function $t(e) {
	return e.length - (e.indexOf(".") + 1);
}
function en(e) {
	return e.replace(/^(-?)0+(?!\.)(.+)/, "$1$2");
}
function tn(e) {
	return /^-?[\d]+$/g.test(e);
}
function nn(e) {
	return /^-?[\d]+(\.[\d]+)$/g.test(e);
}
function rn(e, t, n) {
	return t > e.length - 1 ? e : e.substring(0, t) + n + e.substring(t + 1);
}
function an(e, t) {
	let n = t - $t(e);
	if (n >= 0) return e;
	let r = e.slice(0, n), i = e.slice(n);
	if (r.charAt(r.length - 1) === "." && (r = r.slice(0, -1)), parseInt(i.charAt(0), 10) >= 5) {
		for (let e = r.length - 1; e >= 0; --e) {
			let t = r.charAt(e);
			if (t !== "." && t !== "-") {
				let n = parseInt(t, 10) + 1;
				if (n < 10) return rn(r, e, n);
				r = rn(r, e, "0");
			}
		}
		return `1${r}`;
	}
	return r;
}
function on(e, t) {
	let n = () => {
		e === document.activeElement && e.setSelectionRange(t, t);
	};
	e === document.activeElement && (n(), setTimeout(n, 1));
}
function sn(e) {
	return new Event(e, {
		bubbles: !0,
		cancelable: !1
	});
}
function cn({ debug: e = !1 }, ...t) {
	e && console.log(...t);
}
function ln(e) {
	"@babel/helpers - typeof";
	return ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, ln(e);
}
function un(e, t) {
	if (ln(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (ln(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function dn(e) {
	var t = un(e, "string");
	return ln(t) == "symbol" ? t : t + "";
}
function fn(e, t, n) {
	return (t = dn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var pn = class e {
	constructor(e) {
		fn(this, "number", 0n), fn(this, "decimal", 0), this.setNumber(e);
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
			if (t) return an(n, e);
			let i = n.slice(0, r);
			return i.endsWith(".") ? i.slice(0, -1) : i;
		}
		return n;
	}
	toString() {
		let e = this.number.toString();
		if (this.decimal) {
			let t = !1;
			return e.charAt(0) === "-" && (e = e.substring(1), t = !0), e = e.padStart(e.length + this.decimal, "0"), e = `${e.slice(0, -this.decimal)}.${e.slice(-this.decimal)}`, e = en(e), (t ? "-" : "") + e;
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
		if (e = en(e), tn(e)) this.number = BigInt(e);
		else if (nn(e)) this.decimal = $t(e), this.number = BigInt(e.replace(".", ""));
		else throw Error(`BigNumber has received an invalid format for the constructor: ${e}`);
	}
	adjustComparisonNumbers(t) {
		let n;
		n = t instanceof e ? t : new e(t);
		let r = this.getDecimalPrecision() - n.getDecimalPrecision(), i = this.getNumber(), a = n.getNumber();
		return r > 0 ? a = n.getNumber() * 10n ** BigInt(r) : r < 0 && (i = this.getNumber() * 10n ** BigInt(r * -1)), [i, a];
	}
};
function mn(e, t = Ht, n = "") {
	cn(t, "utils format() - caller", n), cn(t, "utils format() - input1", e);
	let r = Gt(t.precision);
	if ((e == null || e === "") && t.allowBlank) return "";
	if (e == null) e = "";
	else if (typeof e == "number") e = t.shouldRound ? e.toFixed(r) : e.toFixed(Math.min(r + 1, 100)).slice(0, -1);
	else if (t.modelModifiers && t.modelModifiers.number && tn(e)) e = Number(e).toFixed(r);
	else if (!t.disableNegative && e === "-") return e;
	cn(t, "utils format() - input2", e);
	let i = t.disableNegative ? "" : e.indexOf("-") >= 0 ? "-" : "", a = e.replace(t.prefix, "").replace(t.suffix, "");
	cn(t, "utils format() - filtered", a), !r && t.thousands !== "." && nn(a) && (a = an(a, 0), cn(t, "utils format() - !precision && isValidFloat()", a));
	let o = qt(a);
	cn(t, "utils format() - numbers", o), cn(t, "utils format() - numbersToCurrency", i + Kt(o, r));
	let s = new pn(i + Kt(o, r));
	cn(t, "utils format() - bigNumber1", s.toString()), t.setMaxIfBigger !== !1 && t.max !== null && t.max !== void 0 && t.max !== "" && s.biggerThan(t.max) && s.setNumber(t.max), t.min !== null && t.min !== void 0 && t.min !== "" && s.lessThan(t.min) && s.setNumber(t.min), t.disableNegative && s.lessThan(0) && s.setNumber(0);
	let c = s.toFixed(r, t.shouldRound);
	if (cn(t, "utils format() - bigNumber2", s.toFixed(r)), /^0(\.0+)?$/g.test(c) && t.allowBlank && t.treatZeroAsBlank) return "";
	let [l, u] = c.split("."), d = u === void 0 ? 0 : u.length, f = l.charAt(0) === "-", p = (f ? l.slice(1) : l).padStart(t.minimumNumberOfCharacters - d, "0");
	l = (f ? "-" : "") + Jt(p, t.thousands);
	let m = t.prefix + Yt(l, u, t.decimal) + t.suffix;
	return cn(t, "utils format() - output", m), m;
}
function hn(e, t = Ht, n = "") {
	if (cn(t, "utils unformat() - caller", n), cn(t, "utils unformat() - input", e), !t.disableNegative && e === "-") return cn(t, "utils unformat() - return netagive symbol", e), e;
	let r = t.disableNegative ? "" : e.indexOf("-") >= 0 ? "-" : "", i = e.replace(t.prefix, "").replace(t.suffix, "");
	cn(t, "utils unformat() - filtered", i);
	let a = qt(i);
	cn(t, "utils unformat() - numbers", a);
	let o = new pn(r + Kt(a, t.precision));
	cn(t, "utils unformat() - bigNumber1", a.toString()), t.setMaxIfBigger !== !1 && t.max !== null && t.max !== void 0 && t.max !== "" && o.biggerThan(t.max) && o.setNumber(t.max), t.min !== null && t.min !== void 0 && t.min !== "" && o.lessThan(t.min) && o.setNumber(t.min), t.disableNegative && o.lessThan(0) && o.setNumber(0);
	let s = o.toFixed(Gt(t.precision), t.shouldRound);
	return t.modelModifiers && t.modelModifiers.number && (s = parseFloat(s)), cn(t, "utils unformat() - output", s), s;
}
var gn = [
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
], _n = "__v_money3_last_valid__", vn = "__v_money3_is_wrapper__", yn = "__v_money3_synth__", bn = (e, t, n) => {
	if (cn(t, "directive setValue() - caller", n), !Zt(t)) {
		cn(t, "directive setValue() - validateRestrictedOptions() return false. Stopping here...", e.value);
		return;
	}
	let r = e.value.length - (e.selectionEnd || 0), i = mn(e.value, t, n);
	if (t.setMaxIfBigger === !1 && t.max !== null && t.max !== void 0 && t.max !== "") {
		let n = hn(i, t, "directive setValue overflow check");
		if (new pn(String(n)).biggerThan(t.max)) {
			let t = e[_n];
			typeof t == "string" && t !== e.value && (e.value = t);
			return;
		}
	}
	if (i === e.value) {
		let t = e[_n];
		e[_n] = i, t !== void 0 && t !== i && e.dispatchEvent(sn("change"));
		return;
	}
	if (e.value = i, e[_n] = i, r = Math.max(r, t.suffix.length), r = e.value.length - r, r = Math.max(r, t.prefix.length), on(e, r), e.dispatchEvent(sn("change")), e[vn]) {
		let t = new Event("input", { bubbles: !1 });
		t[yn] = !0, e.dispatchEvent(t);
	}
}, xn = (e, t) => {
	let n = e.currentTarget, r = e.code === "Backspace" || e.code === "Delete", i = n.value.length - (n.selectionEnd || 0) === 0;
	cn(t, "directive onkeydown() - el.value", n.value), cn(t, "directive onkeydown() - backspacePressed", r), cn(t, "directive onkeydown() - isAtEndPosition", i), t.allowBlank && t.treatZeroAsBlank && r && i && parseFloat(String(hn(n.value, t, "directive onkeydown allowBlank"))) === 0 && (cn(t, "directive onkeydown() - set el.value = \"\"", n.value), n.value = "", n.dispatchEvent(sn("change"))), cn(t, "directive onkeydown() - e.key", e.key), e.key === "+" && n.value.indexOf("-") >= 0 && (cn(t, "directive onkeydown() - flipping sign on el.value", n.value), n.value = n.value.replace("-", ""), bn(n, t, "directive onkeydown +"));
}, Sn = (e, t) => {
	if (e[yn]) return;
	let n = e.currentTarget;
	cn(t, "directive oninput()", n.value), /^[1-9]$/.test(n.value) && (n.value = Kt(n.value, Gt(t.precision)), cn(t, "directive oninput() - is 1-9", n.value)), bn(n, t, "directive oninput");
}, Cn = (e, t) => {
	let n = e.currentTarget;
	cn(t, "directive onFocus()", n.value), t.focusOnRight && on(n, n.value.length - t.suffix.length);
}, wn = (e) => {
	if (e.tagName.toLocaleUpperCase() !== "INPUT") {
		let t = e.getElementsByTagName("input");
		if (t.length !== 1) throw Error(`v-money3 requires 1 input, found ${t.length} elements.`);
		return t[0];
	}
	return e;
}, Tn = (e, t) => {
	e.onkeydown = (e) => {
		xn(e, t);
	}, e.oninput = (e) => {
		Sn(e, t);
	}, e.onfocus = (e) => {
		Cn(e, t);
	};
};
function En(e, t) {
	return e ? gn.some((n) => JSON.stringify(e[n]) !== JSON.stringify(t[n])) : !1;
}
var Dn = "__v_money3_input__";
function On(e) {
	let t = e[Dn];
	if (t) return t;
	let n = wn(e);
	return e[Dn] = n, n;
}
var kn = {
	mounted(e, t) {
		if (!t.value) return;
		let n = Qt({
			...Ht,
			...t.value
		});
		cn(n, "directive mounted() - opt", n);
		let r = On(e);
		r[vn] = e !== r, Tn(r, n), cn(n, "directive mounted() - el.value", r.value), bn(r, n, "directive mounted");
	},
	updated(e, t) {
		if (!t.value) return;
		let n = Qt({
			...Ht,
			...t.value
		});
		cn(n, "directive updated() - opt", n), cn(n, "directive updated() - host.value", e.value);
		let r = On(e);
		if (r[vn] = e !== r, mn(r.value, n, "directive updated check") !== r.value) {
			if (En(t.oldValue ? Qt({
				...Ht,
				...t.oldValue
			}) : null, n) && r.value !== "") {
				console.warn("v-money3: runtime change of format options on the bare directive is unsupported and was skipped to avoid corrupting the value. Re-mount the directive or use the Money3 component instead.");
				return;
			}
			bn(r, n, "directive updated");
		}
	},
	beforeUnmount(e) {
		let t = e[Dn] || e;
		t.onkeydown = null, t.oninput = null, t.onfocus = null, delete t[vn], delete e[Dn];
	}
}, An = Object.defineProperty, jn = (e, t, n) => t in e ? An(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Mn = (e, t, n) => jn(e, typeof t == "symbol" ? t : t + "", n), Nn = {
	"#": { pattern: /[0-9]/ },
	"@": { pattern: /[a-zA-Z]/ },
	"*": { pattern: /[a-zA-Z0-9]/ }
}, Pn = (e, t, n) => e.replaceAll(t, "").replace(n, ".").replace("..", ".").replace(/[^.\d]/g, ""), Fn = (e, t, n) => new Intl.NumberFormat(n.number?.locale ?? "en", {
	minimumFractionDigits: e,
	maximumFractionDigits: t,
	roundingMode: "trunc"
}), In = (e, t = !0, n) => {
	let r = n.number?.unsigned !== !0 && e.startsWith("-") ? "-" : "", i = n.number?.fraction ?? 0, a = Fn(0, i, n), o = a.formatToParts(1000.12), s = o.find((e) => e.type === "group")?.value ?? " ", c = o.find((e) => e.type === "decimal")?.value ?? ".", l = Pn(e, s, c);
	if (Number.isNaN(parseFloat(l))) return r;
	let u = l.split(".");
	u[1] != null && u[1].length >= 1 && (a = Fn(u[1].length <= i ? u[1].length : i, i, n));
	let d = a.format(parseFloat(l));
	return t ? i > 0 && l.endsWith(".") && !l.slice(0, -1).includes(".") && (d += c) : d = Pn(d, s, c), r + d;
}, Ln = (e) => JSON.parse(e.replaceAll("'", "\"")), Rn = (e, t = {}) => {
	let n = { ...t };
	e.dataset.maska != null && e.dataset.maska !== "" && (n.mask = Bn(e.dataset.maska)), e.dataset.maskaEager != null && (n.eager = zn(e.dataset.maskaEager)), e.dataset.maskaReversed != null && (n.reversed = zn(e.dataset.maskaReversed)), e.dataset.maskaTokensReplace != null && (n.tokensReplace = zn(e.dataset.maskaTokensReplace)), e.dataset.maskaTokens != null && (n.tokens = Vn(e.dataset.maskaTokens));
	let r = {};
	return e.dataset.maskaNumberLocale != null && (r.locale = e.dataset.maskaNumberLocale), e.dataset.maskaNumberFraction != null && (r.fraction = parseInt(e.dataset.maskaNumberFraction)), e.dataset.maskaNumberUnsigned != null && (r.unsigned = zn(e.dataset.maskaNumberUnsigned)), (e.dataset.maskaNumber != null || Object.values(r).length > 0) && (n.number = r), n;
}, zn = (e) => e === "" || !!JSON.parse(e), Bn = (e) => e.startsWith("[") && e.endsWith("]") ? Ln(e) : e, Vn = (e) => {
	if (e.startsWith("{") && e.endsWith("}")) return Ln(e);
	let t = {};
	return e.split("|").forEach((e) => {
		let n = e.split(":");
		t[n[0]] = {
			pattern: Hn() ? new RegExp(n[1], "u") : new RegExp(n[1]),
			optional: n[2] === "optional",
			multiple: n[2] === "multiple",
			repeated: n[2] === "repeated"
		};
	}), t;
}, Hn = () => {
	try {
		return !0;
	} catch {
		return !1;
	}
}, Un = class {
	constructor(e = {}) {
		Mn(this, "opts", {}), Mn(this, "memo", /* @__PURE__ */ new Map());
		let t = { ...e };
		if (t.tokens != null) {
			t.tokens = t.tokensReplace ? { ...t.tokens } : {
				...Nn,
				...t.tokens
			};
			for (let e of Object.values(t.tokens)) typeof e.pattern == "string" && (e.pattern = Hn() ? new RegExp(e.pattern, "u") : new RegExp(e.pattern));
		} else t.tokens = Nn;
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
		if (this.opts.number != null) return In(e, n, this.opts);
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
}, Wn = class {
	constructor(e, t = {}) {
		Mn(this, "items", /* @__PURE__ */ new Map()), Mn(this, "eventAbortController"), Mn(this, "onInput", (e) => {
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
			let e = new Un(Rn(n, t));
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
}, Gn = /* @__PURE__ */ new WeakMap(), Kn = (e, t) => {
	if (e.arg == null || e.instance == null) return;
	let n = "setup" in e.instance.$.type;
	e.arg in e.instance ? e.instance[e.arg] = t : n && console.warn("Maska: please expose `%s` using defineExpose", e.arg);
}, qn = (e, t) => {
	var n;
	let r = e instanceof HTMLInputElement ? e : e.querySelector("input");
	if (r == null || r?.type === "file") return;
	let i = {};
	if (t.value != null && (i = typeof t.value == "string" ? { mask: t.value } : { ...t.value }), t.arg != null) {
		let e = (e) => {
			Kn(t, t.modifiers.unmasked ? e.unmasked : t.modifiers.completed ? e.completed : e.masked);
		};
		i.onMaska = i.onMaska == null ? e : Array.isArray(i.onMaska) ? [...i.onMaska, e] : [i.onMaska, e];
	}
	Gn.has(r) ? (n = Gn.get(r)) == null || n.update(i) : Gn.set(r, new Wn(r, i));
}, Jn = Math.min, Yn = Math.max, Xn = Math.round, Zn = Math.floor, Qn = (e) => ({
	x: e,
	y: e
}), $n = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function er(e, t, n) {
	return Yn(e, Jn(t, n));
}
function tr(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function nr(e) {
	return e.split("-")[0];
}
function rr(e) {
	return e.split("-")[1];
}
function ir(e) {
	return e === "x" ? "y" : "x";
}
function ar(e) {
	return e === "y" ? "height" : "width";
}
function or(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function sr(e) {
	return ir(or(e));
}
function cr(e, t, n) {
	n === void 0 && (n = !1);
	let r = rr(e), i = sr(e), a = ar(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = _r(o)), [o, _r(o)];
}
function lr(e) {
	let t = _r(e);
	return [
		ur(e),
		t,
		ur(t)
	];
}
function ur(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var dr = ["left", "right"], fr = ["right", "left"], pr = ["top", "bottom"], mr = ["bottom", "top"];
function hr(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? fr : dr : t ? dr : fr;
		case "left":
		case "right": return t ? pr : mr;
		default: return [];
	}
}
function gr(e, t, n, r) {
	let i = rr(e), a = hr(nr(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(ur)))), a;
}
function _r(e) {
	let t = nr(e);
	return $n[t] + e.slice(t.length);
}
function vr(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function yr(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : vr(e);
}
function br(e) {
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
function xr(e, t, n) {
	let { reference: r, floating: i } = e, a = or(t), o = sr(t), s = ar(o), c = nr(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	let m = rr(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function Sr(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = tr(t, e), p = yr(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = br(await i.getClippingRect({
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
	}, y = br(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var Cr = 50, wr = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Sr
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = xr(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < Cr && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = xr(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Tr = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = tr(e, t) || {};
		if (l == null) return {};
		let d = yr(u), f = {
			x: n,
			y: r
		}, p = sr(i), m = ar(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = Jn(d[_], T), D = Jn(d[v], T), O = C - h[m] - D, k = C / 2 - h[m] / 2 + w, A = er(E, k, O), j = !c.arrow && rr(i) != null && k !== A && a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0, M = j ? k < E ? k - E : k - O : 0;
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
}), Er = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = tr(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = nr(r), _ = or(o), v = nr(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [_r(o)] : lr(o)), x = p !== "none";
			!d && x && b.push(...gr(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = cr(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (u !== "alignment" || _ === or(t) || T.every((e) => or(e.placement) !== _ || e.overflows[0] > 0))) return {
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
								let t = or(e.placement);
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
}, Dr = /*#__PURE__*/ new Set(["left", "top"]);
async function Or(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = nr(n), s = rr(n), c = or(n) === "y", l = Dr.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = tr(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var kr = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Or(t, e);
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
}, Ar = function(e) {
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
			} }, ...l } = tr(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = or(i), p = ir(f), m = u[p], h = u[f], g = (e, t) => er(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
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
function jr() {
	return typeof window < "u";
}
function Mr(e) {
	return Fr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Nr(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Pr(e) {
	return ((Fr(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Fr(e) {
	return jr() ? e instanceof Node || e instanceof Nr(e).Node : !1;
}
function Ir(e) {
	return jr() ? e instanceof Element || e instanceof Nr(e).Element : !1;
}
function Lr(e) {
	return jr() ? e instanceof HTMLElement || e instanceof Nr(e).HTMLElement : !1;
}
function Rr(e) {
	return !jr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Nr(e).ShadowRoot;
}
function zr(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Xr(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Br(e) {
	return /^(table|td|th)$/.test(Mr(e));
}
function Vr(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Hr = /transform|translate|scale|rotate|perspective|filter/, Ur = /paint|layout|strict|content/, Wr = (e) => !!e && e !== "none", Gr;
function Kr(e) {
	let t = Ir(e) ? Xr(e) : e;
	return Wr(t.transform) || Wr(t.translate) || Wr(t.scale) || Wr(t.rotate) || Wr(t.perspective) || !Jr() && (Wr(t.backdropFilter) || Wr(t.filter)) || Hr.test(t.willChange || "") || Ur.test(t.contain || "");
}
function qr(e) {
	let t = Qr(e);
	for (; Lr(t) && !Yr(t);) {
		if (Kr(t)) return t;
		if (Vr(t)) return null;
		t = Qr(t);
	}
	return null;
}
function Jr() {
	return Gr ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Gr;
}
function Yr(e) {
	return /^(html|body|#document)$/.test(Mr(e));
}
function Xr(e) {
	return Nr(e).getComputedStyle(e);
}
function Zr(e) {
	return Ir(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Qr(e) {
	if (Mr(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Rr(e) && e.host || Pr(e);
	return Rr(t) ? t.host : t;
}
function $r(e) {
	let t = Qr(e);
	return Yr(t) ? (e.ownerDocument || e).body : Lr(t) && zr(t) ? t : $r(t);
}
function ei(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = $r(e), i = r === e.ownerDocument?.body, a = Nr(r);
	if (i) {
		let e = ti(a);
		return t.concat(a, a.visualViewport || [], zr(r) ? r : [], e && n ? ei(e) : []);
	}
	return t.concat(r, ei(r, [], n));
}
function ti(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+dom@1.8.0/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function ni(e) {
	let t = Xr(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Lr(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Xn(n) !== a || Xn(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function ri(e) {
	return Ir(e) ? e : e.contextElement;
}
function ii(e) {
	let t = ri(e);
	if (!Lr(t)) return Qn(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = ni(t), o = (a ? Xn(n.width) : n.width) / r, s = (a ? Xn(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var ai = /*#__PURE__*/ Qn(0);
function oi(e) {
	let t = Nr(e);
	return !Jr() || !t.visualViewport ? ai : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function si(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === Nr(e);
}
function ci(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = ri(e), o = Qn(1);
	t && (r ? Ir(r) && (o = ii(r)) : o = ii(e));
	let s = si(a, n, r) ? oi(a) : Qn(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = Nr(a), t = Ir(r) ? Nr(r) : r, n = e, i = ti(n);
		for (; i && t !== n;) {
			let e = ii(i), t = i.getBoundingClientRect(), r = Xr(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Nr(i), i = ti(n);
		}
	}
	return br({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function li(e, t) {
	let n = Zr(e).scrollLeft;
	return t ? t.left + n : ci(Pr(e)).left + n;
}
function ui(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - li(e, n),
		y: n.top + t.scrollTop
	};
}
function di(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = Pr(r), s = t ? Vr(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Qn(1), u = Qn(0), d = Lr(r);
	if ((d || !a) && ((Mr(r) !== "body" || zr(o)) && (c = Zr(r)), d)) {
		let e = ci(r);
		l = ii(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? ui(o, c) : Qn(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function fi(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function pi(e) {
	let t = Zr(e), n = e.ownerDocument.body, r = Yn(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = Yn(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + li(e), o = -t.scrollTop;
	return Xr(n).direction === "rtl" && (a += Yn(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var mi = 25;
function hi(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = Nr(e), a = Pr(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !Jr() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (li(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= mi && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function gi(e, t) {
	let n = ci(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = ii(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function _i(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = hi(e, n, t);
	else if (t === "document") r = pi(Pr(e));
	else if (Ir(t)) r = gi(t, n);
	else {
		let n = oi(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return br(r);
}
function vi(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = ei(e, [], !1).filter((e) => Ir(e) && Mr(e) !== "body"), i = null, a = Xr(e).position === "fixed", o = a ? Qr(e) : e;
	for (; Ir(o) && !Yr(o);) {
		let e = Xr(o), t = Kr(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = Qr(o);
	}
	return t.set(e, r), r;
}
function yi(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Vr(t) ? [] : vi(t, this._c) : [].concat(n), r], o = _i(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = _i(t, a[e], i);
		s = Yn(n.top, s), c = Jn(n.right, c), l = Jn(n.bottom, l), u = Yn(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function bi(e) {
	let { width: t, height: n } = ni(e);
	return {
		width: t,
		height: n
	};
}
function xi(e, t, n) {
	let r = Lr(t), i = Pr(t), a = n === "fixed", o = ci(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Qn(0);
	if ((r || !a) && ((Mr(t) !== "body" || zr(i)) && (s = Zr(t)), r)) {
		let e = ci(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = li(i));
	let l = i && !r && !a ? ui(i, s) : Qn(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function Si(e) {
	return Xr(e).position === "static";
}
function Ci(e, t) {
	if (!Lr(e) || Xr(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Pr(e) === n && (n = n.ownerDocument.body), n;
}
function wi(e, t) {
	let n = Nr(e);
	if (Vr(e)) return n;
	if (!Lr(e)) {
		let t = Qr(e);
		for (; t && !Yr(t);) {
			if (Ir(t) && !Si(t)) return t;
			t = Qr(t);
		}
		return n;
	}
	let r = Ci(e, t);
	for (; r && Br(r) && Si(r);) r = Ci(r, t);
	return r && Yr(r) && Si(r) && !Kr(r) ? n : r || qr(e) || n;
}
var Ti = async function(e) {
	let t = this.getOffsetParent || wi, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: xi(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Ei(e) {
	return Xr(e).direction === "rtl";
}
var Di = {
	convertOffsetParentRelativeRectToViewportRelativeRect: di,
	getDocumentElement: Pr,
	getClippingRect: yi,
	getOffsetParent: wi,
	getElementRects: Ti,
	getClientRects: fi,
	getDimensions: bi,
	getScale: ii,
	isElement: Ir,
	isRTL: Ei
};
function Oi(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ki(e, t, n) {
	let r = null, i, a = Pr(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = Zn(d), h = Zn(a.clientWidth - (u + f)), g = Zn(a.clientHeight - (d + p)), _ = Zn(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Yn(0, Jn(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!Oi(l, e.getBoundingClientRect())) return s();
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
	let c = Nr(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function Ai(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = ri(e), u = i || a ? [...l ? ei(l) : [], ...t ? ei(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? ki(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? ci(e) : null;
	c && g();
	function g() {
		let t = ci(e);
		h && !Oi(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var ji = kr, Mi = Ar, Ni = Er, Pi = Tr, Fi = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...Di,
		...i.platform,
		_c: r
	};
	return wr(e, t, {
		...i,
		platform: a
	});
}, Ii = /* @__PURE__ */ _e({
	Vue: () => t,
	Vue2: () => void 0,
	del: () => Bi,
	install: () => Ri,
	isVue2: () => !1,
	isVue3: () => !0,
	set: () => zi
});
import * as Li from "vue";
ye(Ii, Li);
function Ri() {}
function zi(e, t, n) {
	return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function Bi(e, t) {
	if (Array.isArray(e)) {
		e.splice(t, 1);
		return;
	}
	delete e[t];
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+vue@1.1.11_vue@3.5.41_typescript@6.0.3_/node_modules/@floating-ui/vue/dist/floating-ui.vue.mjs
function Vi(e) {
	return typeof e == "object" && !!e && "$el" in e;
}
function Hi(e) {
	if (Vi(e)) {
		let t = e.$el;
		return Fr(t) && Mr(t) === "#comment" ? null : t;
	}
	return e;
}
function Ui(e) {
	return typeof e == "function" ? e() : (0, Ii.unref)(e);
}
function Wi(e) {
	return {
		name: "arrow",
		options: e,
		fn(t) {
			let n = Hi(Ui(e.element));
			return n == null ? {} : Pi({
				element: n,
				padding: e.padding
			}).fn(t);
		}
	};
}
function Gi(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ki(e, t) {
	let n = Gi(e);
	return Math.round(t * n) / n;
}
function qi(e, t, n) {
	n === void 0 && (n = {});
	let r = n.whileElementsMounted, i = (0, Ii.computed)(() => Ui(n.open) ?? !0), a = (0, Ii.computed)(() => Ui(n.middleware)), o = (0, Ii.computed)(() => Ui(n.placement) ?? "bottom"), s = (0, Ii.computed)(() => Ui(n.strategy) ?? "absolute"), c = (0, Ii.computed)(() => Ui(n.transform) ?? !0), l = (0, Ii.computed)(() => Hi(e.value)), u = (0, Ii.computed)(() => Hi(t.value)), d = (0, Ii.ref)(0), f = (0, Ii.ref)(0), p = (0, Ii.ref)(s.value), m = (0, Ii.ref)(o.value), h = (0, Ii.shallowRef)({}), g = (0, Ii.ref)(!1), _ = (0, Ii.computed)(() => {
		let e = {
			position: p.value,
			left: "0",
			top: "0"
		};
		if (!u.value) return e;
		let t = Ki(u.value, d.value), n = Ki(u.value, f.value);
		return c.value ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...Gi(u.value) >= 1.5 && { willChange: "transform" }
		} : {
			position: p.value,
			left: t + "px",
			top: n + "px"
		};
	}), v;
	function y() {
		if (l.value == null || u.value == null) return;
		let e = i.value;
		Fi(l.value, u.value, {
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
	return (0, Ii.watch)([
		a,
		o,
		s,
		i
	], y, { flush: "sync" }), (0, Ii.watch)([l, u], x, { flush: "sync" }), (0, Ii.watch)(i, S, { flush: "sync" }), (0, Ii.getCurrentScope)() && (0, Ii.onScopeDispose)(b), {
		x: (0, Ii.shallowReadonly)(d),
		y: (0, Ii.shallowReadonly)(f),
		strategy: (0, Ii.shallowReadonly)(p),
		placement: (0, Ii.shallowReadonly)(m),
		middlewareData: (0, Ii.shallowReadonly)(h),
		isPositioned: (0, Ii.shallowReadonly)(g),
		floatingStyles: _,
		update: y
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/constants.js
var Ji = 365.2425, Yi = 6048e5, Xi = 864e5, Zi = 6e4, Qi = 36e5, $i = 1e3, ea = 86400;
ea * 7, ea * Ji / 12 * 3;
var ta = Symbol.for("constructDateFrom");
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/constructFrom.js
function na(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && ta in e ? e[ta](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/toDate.js
function X(e, t) {
	return na(t || e, e);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/addDays.js
function ra(e, t, n) {
	let r = X(e, n?.in);
	return isNaN(t) ? na(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/addMonths.js
function ia(e, t, n) {
	let r = X(e, n?.in);
	if (isNaN(t)) return na(n?.in || e, NaN);
	if (!t) return r;
	let i = r.getDate(), a = na(n?.in || e, r.getTime());
	return a.setMonth(r.getMonth() + t + 1, 0), i >= a.getDate() ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), i), r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/add.js
function aa(e, t, n) {
	let { years: r = 0, months: i = 0, weeks: a = 0, days: o = 0, hours: s = 0, minutes: c = 0, seconds: l = 0 } = t, u = X(e, n?.in), d = i || r ? ia(u, i + r * 12) : u, f = o || a ? ra(d, o + a * 7) : d, p = (l + (c + s * 60) * 60) * 1e3;
	return na(n?.in || e, +f + p);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/defaultOptions.js
var oa = {};
function sa() {
	return oa;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfWeek.js
function ca(e, t) {
	let n = sa(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = X(e, t?.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
	return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfISOWeek.js
function la(e, t) {
	return ca(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getISOWeekYear.js
function ua(e, t) {
	let n = X(e, t?.in), r = n.getFullYear(), i = na(n, 0);
	i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
	let a = la(i), o = na(n, 0);
	o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
	let s = la(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function da(e) {
	let t = X(e), n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
	return n.setUTCFullYear(t.getFullYear()), e - +n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/normalizeDates.js
function fa(e, ...t) {
	let n = na.bind(null, e || t.find((e) => typeof e == "object"));
	return t.map(n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfDay.js
function pa(e, t) {
	let n = X(e, t?.in);
	return n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInCalendarDays.js
function ma(e, t, n) {
	let [r, i] = fa(n?.in, e, t), a = pa(r), o = pa(i), s = +a - da(a), c = +o - da(o);
	return Math.round((s - c) / Xi);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfISOWeekYear.js
function ha(e, t) {
	let n = ua(e, t), r = na(t?.in || e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), la(r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/addQuarters.js
function ga(e, t, n) {
	return ia(e, t * 3, n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/addYears.js
function _a(e, t, n) {
	return ia(e, t * 12, n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/compareAsc.js
function va(e, t) {
	let n = X(e) - +X(t);
	return n < 0 ? -1 : n > 0 ? 1 : n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isDate.js
function ya(e) {
	return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isValid.js
function ba(e) {
	return !(!ya(e) && typeof e != "number" || isNaN(+X(e)));
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getQuarter.js
function xa(e, t) {
	let n = X(e, t?.in);
	return Math.trunc(n.getMonth() / 3) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInCalendarYears.js
function Sa(e, t, n) {
	let [r, i] = fa(n?.in, e, t);
	return r.getFullYear() - i.getFullYear();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/getRoundingMethod.js
function Ca(e) {
	return (t) => {
		let n = (e ? Math[e] : Math.trunc)(t);
		return n === 0 ? 0 : n;
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInYears.js
function wa(e, t, n) {
	let [r, i] = fa(n?.in, e, t), a = va(r, i), o = Math.abs(Sa(r, i));
	r.setFullYear(1584), i.setFullYear(1584);
	let s = a * (o - +(va(r, i) === -a));
	return s === 0 ? 0 : s;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/normalizeInterval.js
function Ta(e, t) {
	let [n, r] = fa(e, t.start, t.end);
	return {
		start: n,
		end: r
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/eachDayOfInterval.js
function Ea(e, t) {
	let { start: n, end: r } = Ta(t?.in, e), i = +n > +r, a = i ? +n : +r, o = i ? r : n;
	o.setHours(0, 0, 0, 0);
	let s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(na(n, o)), o.setDate(o.getDate() + s), o.setHours(0, 0, 0, 0);
	return i ? c.reverse() : c;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfQuarter.js
function Da(e, t) {
	let n = X(e, t?.in), r = n.getMonth(), i = r - r % 3;
	return n.setMonth(i, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/eachQuarterOfInterval.js
function Oa(e, t) {
	let { start: n, end: r } = Ta(t?.in, e), i = +n > +r, a = i ? +Da(n) : +Da(r), o = Da(i ? r : n), s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(na(n, o)), o = ga(o, s);
	return i ? c.reverse() : c;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfMonth.js
function ka(e, t) {
	let n = X(e, t?.in);
	return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/endOfYear.js
function Aa(e, t) {
	let n = X(e, t?.in), r = n.getFullYear();
	return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfYear.js
function ja(e, t) {
	let n = X(e, t?.in);
	return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/endOfWeek.js
function Ma(e, t) {
	let n = sa(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = X(e, t?.in), a = i.getDay(), o = (a < r ? -7 : 0) + 6 - (a - r);
	return i.setDate(i.getDate() + o), i.setHours(23, 59, 59, 999), i;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/endOfQuarter.js
function Na(e, t) {
	let n = X(e, t?.in), r = n.getMonth(), i = r - r % 3 + 3;
	return n.setMonth(i, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var Pa = {
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
}, Fa = (e, t, n) => {
	let r, i = Pa[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function Ia(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
var La = {
	date: Ia({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: Ia({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: Ia({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, Ra = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, za = (e, t, n, r) => Ra[e];
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function Ba(e) {
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
var Va = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: Ba({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: Ba({
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
	month: Ba({
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
	day: Ba({
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
	dayPeriod: Ba({
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
function Ha(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Wa(s, (e) => e.test(o)) : Ua(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function Ua(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Wa(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function Ga(e) {
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
var Ka = {
	code: "en-US",
	formatDistance: Fa,
	formatLong: La,
	formatRelative: za,
	localize: Va,
	match: {
		ordinalNumber: Ga({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: Ha({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: "any"
		}),
		quarter: Ha({
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
		month: Ha({
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
		day: Ha({
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
		dayPeriod: Ha({
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
function qa(e, t) {
	let n = X(e, t?.in);
	return ma(n, ja(n)) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getISOWeek.js
function Ja(e, t) {
	let n = X(e, t?.in), r = la(n) - +ha(n);
	return Math.round(r / Yi) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getWeekYear.js
function Ya(e, t) {
	let n = X(e, t?.in), r = n.getFullYear(), i = sa(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = na(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = ca(o, t), c = na(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = ca(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfWeekYear.js
function Xa(e, t) {
	let n = sa(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = Ya(e, t), a = na(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), ca(a, t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getWeek.js
function Za(e, t) {
	let n = X(e, t?.in), r = ca(n, t) - +Xa(n, t);
	return Math.round(r / Yi) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/addLeadingZeros.js
function Qa(e, t) {
	return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/format/lightFormatters.js
var $a = {
	y(e, t) {
		let n = e.getFullYear(), r = n > 0 ? n : 1 - n;
		return Qa(t === "yy" ? r % 100 : r, t.length);
	},
	M(e, t) {
		let n = e.getMonth();
		return t === "M" ? String(n + 1) : Qa(n + 1, 2);
	},
	d(e, t) {
		return Qa(e.getDate(), t.length);
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
		return Qa(e.getHours() % 12 || 12, t.length);
	},
	H(e, t) {
		return Qa(e.getHours(), t.length);
	},
	m(e, t) {
		return Qa(e.getMinutes(), t.length);
	},
	s(e, t) {
		return Qa(e.getSeconds(), t.length);
	},
	S(e, t) {
		let n = t.length, r = e.getMilliseconds();
		return Qa(Math.trunc(r * 10 ** (n - 3)), t.length);
	}
}, eo = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
}, to = {
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
		return $a.y(e, t);
	},
	Y: function(e, t, n, r) {
		let i = Ya(e, r), a = i > 0 ? i : 1 - i;
		return t === "YY" ? Qa(a % 100, 2) : t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Qa(a, t.length);
	},
	R: function(e, t) {
		return Qa(ua(e), t.length);
	},
	u: function(e, t) {
		return Qa(e.getFullYear(), t.length);
	},
	Q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "Q": return String(r);
			case "QQ": return Qa(r, 2);
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
			case "qq": return Qa(r, 2);
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
			case "MM": return $a.M(e, t);
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
			case "LL": return Qa(r + 1, 2);
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
		let i = Za(e, r);
		return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : Qa(i, t.length);
	},
	I: function(e, t, n) {
		let r = Ja(e);
		return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Qa(r, t.length);
	},
	d: function(e, t, n) {
		return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : $a.d(e, t);
	},
	D: function(e, t, n) {
		let r = qa(e);
		return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Qa(r, t.length);
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
			case "ee": return Qa(a, 2);
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
			case "cc": return Qa(a, t.length);
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
			case "ii": return Qa(i, t.length);
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
		switch (i = r === 12 ? eo.noon : r === 0 ? eo.midnight : r / 12 >= 1 ? "pm" : "am", t) {
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
		switch (i = r >= 17 ? eo.evening : r >= 12 ? eo.afternoon : r >= 4 ? eo.morning : eo.night, t) {
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
		return $a.h(e, t);
	},
	H: function(e, t, n) {
		return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : $a.H(e, t);
	},
	K: function(e, t, n) {
		let r = e.getHours() % 12;
		return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Qa(r, t.length);
	},
	k: function(e, t, n) {
		let r = e.getHours();
		return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Qa(r, t.length);
	},
	m: function(e, t, n) {
		return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : $a.m(e, t);
	},
	s: function(e, t, n) {
		return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : $a.s(e, t);
	},
	S: function(e, t) {
		return $a.S(e, t);
	},
	X: function(e, t, n) {
		let r = e.getTimezoneOffset();
		if (r === 0) return "Z";
		switch (t) {
			case "X": return ro(r);
			case "XXXX":
			case "XX": return io(r);
			default: return io(r, ":");
		}
	},
	x: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "x": return ro(r);
			case "xxxx":
			case "xx": return io(r);
			default: return io(r, ":");
		}
	},
	O: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + no(r, ":");
			default: return "GMT" + io(r, ":");
		}
	},
	z: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + no(r, ":");
			default: return "GMT" + io(r, ":");
		}
	},
	t: function(e, t, n) {
		return Qa(Math.trunc(e / 1e3), t.length);
	},
	T: function(e, t, n) {
		return Qa(+e, t.length);
	}
};
function no(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
	return a === 0 ? n + String(i) : n + String(i) + t + Qa(a, 2);
}
function ro(e, t) {
	return e % 60 == 0 ? (e > 0 ? "-" : "+") + Qa(Math.abs(e) / 60, 2) : io(e, t);
}
function io(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Qa(Math.trunc(r / 60), 2), a = Qa(r % 60, 2);
	return n + i + t + a;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/format/longFormatters.js
var ao = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, oo = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, so = {
	p: oo,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return ao(e, t);
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
		return a.replace("{{date}}", ao(r, t)).replace("{{time}}", oo(i, t));
	}
}, co = /^D+$/, lo = /^Y+$/, uo = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function fo(e) {
	return co.test(e);
}
function po(e) {
	return lo.test(e);
}
function mo(e, t, n) {
	let r = ho(e, t, n);
	if (console.warn(r), uo.includes(e)) throw RangeError(r);
}
function ho(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/format.js
var go = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, _o = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, vo = /^'([^]*?)'?$/, yo = /''/g, bo = /[a-zA-Z]/;
function xo(e, t, n) {
	let r = sa(), i = n?.locale ?? r.locale ?? Ka, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = X(e, n?.in);
	if (!ba(s)) throw RangeError("Invalid time value");
	let c = t.match(_o).map((e) => {
		let t = e[0];
		if (t === "p" || t === "P") {
			let n = so[t];
			return n(e, i.formatLong);
		}
		return e;
	}).join("").match(go).map((e) => {
		if (e === "''") return {
			isToken: !1,
			value: "'"
		};
		let t = e[0];
		if (t === "'") return {
			isToken: !1,
			value: So(e)
		};
		if (to[t]) return {
			isToken: !0,
			value: e
		};
		if (t.match(bo)) throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
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
		(!n?.useAdditionalWeekYearTokens && po(a) || !n?.useAdditionalDayOfYearTokens && fo(a)) && mo(a, t, String(e));
		let o = to[a[0]];
		return o(s, a, i.localize, l);
	}).join("");
}
function So(e) {
	let t = e.match(vo);
	return t ? t[1].replace(yo, "'") : e;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getDay.js
function Co(e, t) {
	return X(e, t?.in).getDay();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getDaysInMonth.js
function wo(e, t) {
	let n = X(e, t?.in), r = n.getFullYear(), i = n.getMonth(), a = na(n, 0);
	return a.setFullYear(r, i + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getDefaultOptions.js
function To() {
	return Object.assign({}, sa());
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getHours.js
function Eo(e, t) {
	return X(e, t?.in).getHours();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getISODay.js
function Do(e, t) {
	let n = X(e, t?.in).getDay();
	return n === 0 ? 7 : n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getMinutes.js
function Oo(e, t) {
	return X(e, t?.in).getMinutes();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getMonth.js
function ko(e, t) {
	return X(e, t?.in).getMonth();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getSeconds.js
function Ao(e) {
	return X(e).getSeconds();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getYear.js
function Z(e, t) {
	return X(e, t?.in).getFullYear();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isAfter.js
function jo(e, t) {
	return +X(e) > +X(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isBefore.js
function Mo(e, t) {
	return +X(e) < +X(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isEqual.js
function No(e, t) {
	return +X(e) == +X(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/transpose.js
function Po(e, t) {
	let n = Fo(t) ? new t(0) : na(t, 0);
	return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), n;
}
function Fo(e) {
	return typeof e == "function" && e.prototype?.constructor === e;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/Setter.js
var Io = 10, Lo = class {
	subPriority = 0;
	validate(e, t) {
		return !0;
	}
}, Ro = class extends Lo {
	constructor(e, t, n, r, i) {
		super(), this.value = e, this.validateValue = t, this.setValue = n, this.priority = r, i && (this.subPriority = i);
	}
	validate(e, t) {
		return this.validateValue(e, this.value, t);
	}
	set(e, t, n) {
		return this.setValue(e, t, this.value, n);
	}
}, zo = class extends Lo {
	priority = Io;
	subPriority = -1;
	constructor(e, t) {
		super(), this.context = e || ((e) => na(t, e));
	}
	set(e, t) {
		return t.timestampIsSet ? e : na(e, Po(e, this.context));
	}
}, Bo = class {
	run(e, t, n, r) {
		let i = this.parse(e, t, n, r);
		return i ? {
			setter: new Ro(i.value, this.validate, this.set, this.priority, this.subPriority),
			rest: i.rest
		} : null;
	}
	validate(e, t, n) {
		return !0;
	}
}, Vo = class extends Bo {
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
}, Ho = {
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
}, Uo = {
	basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
	basic: /^([+-])(\d{2})(\d{2})|Z/,
	basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
	extended: /^([+-])(\d{2}):(\d{2})|Z/,
	extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/utils.js
function Wo(e, t) {
	return e && {
		value: t(e.value),
		rest: e.rest
	};
}
function Go(e, t) {
	let n = t.match(e);
	return n ? {
		value: parseInt(n[0], 10),
		rest: t.slice(n[0].length)
	} : null;
}
function Ko(e, t) {
	let n = t.match(e);
	if (!n) return null;
	if (n[0] === "Z") return {
		value: 0,
		rest: t.slice(1)
	};
	let r = n[1] === "+" ? 1 : -1, i = n[2] ? parseInt(n[2], 10) : 0, a = n[3] ? parseInt(n[3], 10) : 0, o = n[5] ? parseInt(n[5], 10) : 0;
	return {
		value: r * (i * Qi + a * Zi + o * $i),
		rest: t.slice(n[0].length)
	};
}
function qo(e) {
	return Go(Ho.anyDigitsSigned, e);
}
function Jo(e, t) {
	switch (e) {
		case 1: return Go(Ho.singleDigit, t);
		case 2: return Go(Ho.twoDigits, t);
		case 3: return Go(Ho.threeDigits, t);
		case 4: return Go(Ho.fourDigits, t);
		default: return Go(RegExp("^\\d{1," + e + "}"), t);
	}
}
function Yo(e, t) {
	switch (e) {
		case 1: return Go(Ho.singleDigitSigned, t);
		case 2: return Go(Ho.twoDigitsSigned, t);
		case 3: return Go(Ho.threeDigitsSigned, t);
		case 4: return Go(Ho.fourDigitsSigned, t);
		default: return Go(RegExp("^-?\\d{1," + e + "}"), t);
	}
}
function Xo(e) {
	switch (e) {
		case "morning": return 4;
		case "evening": return 17;
		case "pm":
		case "noon":
		case "afternoon": return 12;
		default: return 0;
	}
}
function Zo(e, t) {
	let n = t > 0, r = n ? t : 1 - t, i;
	if (r <= 50) i = e || 100;
	else {
		let t = r + 50, n = Math.trunc(t / 100) * 100, a = e >= t % 100;
		i = e + n - (a ? 100 : 0);
	}
	return n ? i : 1 - i;
}
function Qo(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/YearParser.js
var $o = class extends Bo {
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
			case "y": return Wo(Jo(4, e), r);
			case "yo": return Wo(n.ordinalNumber(e, { unit: "year" }), r);
			default: return Wo(Jo(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n) {
		let r = e.getFullYear();
		if (n.isTwoDigitYear) {
			let t = Zo(n.year, r);
			return e.setFullYear(t, 0, 1), e.setHours(0, 0, 0, 0), e;
		}
		let i = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
}, es = class extends Bo {
	priority = 130;
	parse(e, t, n) {
		let r = (e) => ({
			year: e,
			isTwoDigitYear: t === "YY"
		});
		switch (t) {
			case "Y": return Wo(Jo(4, e), r);
			case "Yo": return Wo(n.ordinalNumber(e, { unit: "year" }), r);
			default: return Wo(Jo(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n, r) {
		let i = Ya(e, r);
		if (n.isTwoDigitYear) {
			let t = Zo(n.year, i);
			return e.setFullYear(t, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), ca(e, r);
		}
		let a = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(a, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), ca(e, r);
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
}, ts = class extends Bo {
	priority = 130;
	parse(e, t) {
		return Yo(t === "R" ? 4 : t.length, e);
	}
	set(e, t, n) {
		let r = na(e, 0);
		return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), la(r);
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
}, ns = class extends Bo {
	priority = 130;
	parse(e, t) {
		return Yo(t === "u" ? 4 : t.length, e);
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
}, rs = class extends Bo {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "Q":
			case "QQ": return Jo(t.length, e);
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
}, is = class extends Bo {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "q":
			case "qq": return Jo(t.length, e);
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
}, as = class extends Bo {
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
			case "M": return Wo(Go(Ho.month, e), r);
			case "MM": return Wo(Jo(2, e), r);
			case "Mo": return Wo(n.ordinalNumber(e, { unit: "month" }), r);
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
}, os = class extends Bo {
	priority = 110;
	parse(e, t, n) {
		let r = (e) => e - 1;
		switch (t) {
			case "L": return Wo(Go(Ho.month, e), r);
			case "LL": return Wo(Jo(2, e), r);
			case "Lo": return Wo(n.ordinalNumber(e, { unit: "month" }), r);
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
function ss(e, t, n) {
	let r = X(e, n?.in), i = Za(r, n) - t;
	return r.setDate(r.getDate() - i * 7), X(r, n?.in);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js
var cs = class extends Bo {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "w": return Go(Ho.week, e);
			case "wo": return n.ordinalNumber(e, { unit: "week" });
			default: return Jo(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n, r) {
		return ca(ss(e, n, r), r);
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
function ls(e, t, n) {
	let r = X(e, n?.in), i = Ja(r, n) - t;
	return r.setDate(r.getDate() - i * 7), r;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js
var us = class extends Bo {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "I": return Go(Ho.week, e);
			case "Io": return n.ordinalNumber(e, { unit: "week" });
			default: return Jo(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n) {
		return la(ls(e, n));
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
}, ds = [
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
], fs = [
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
], ps = class extends Bo {
	priority = 90;
	subPriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "d": return Go(Ho.date, e);
			case "do": return n.ordinalNumber(e, { unit: "date" });
			default: return Jo(t.length, e);
		}
	}
	validate(e, t) {
		let n = Qo(e.getFullYear()), r = e.getMonth();
		return n ? t >= 1 && t <= fs[r] : t >= 1 && t <= ds[r];
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
}, ms = class extends Bo {
	priority = 90;
	subpriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "D":
			case "DD": return Go(Ho.dayOfYear, e);
			case "Do": return n.ordinalNumber(e, { unit: "date" });
			default: return Jo(t.length, e);
		}
	}
	validate(e, t) {
		return Qo(e.getFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
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
function hs(e, t, n) {
	let r = sa(), i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, a = X(e, n?.in), o = a.getDay(), s = (t % 7 + 7) % 7, c = 7 - i;
	return ra(a, t < 0 || t > 6 ? t - (o + c) % 7 : (s + c) % 7 - (o + c) % 7, n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/DayParser.js
var gs = class extends Bo {
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
		return e = hs(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, _s = class extends Bo {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "e":
			case "ee": return Wo(Jo(t.length, e), i);
			case "eo": return Wo(n.ordinalNumber(e, { unit: "day" }), i);
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
		return e = hs(e, n, r), e.setHours(0, 0, 0, 0), e;
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
}, vs = class extends Bo {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "c":
			case "cc": return Wo(Jo(t.length, e), i);
			case "co": return Wo(n.ordinalNumber(e, { unit: "day" }), i);
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
		return e = hs(e, n, r), e.setHours(0, 0, 0, 0), e;
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
function ys(e, t, n) {
	let r = X(e, n?.in);
	return ra(r, t - Do(r, n), n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/ISODayParser.js
var bs = class extends Bo {
	priority = 90;
	parse(e, t, n) {
		let r = (e) => e === 0 ? 7 : e;
		switch (t) {
			case "i":
			case "ii": return Jo(t.length, e);
			case "io": return n.ordinalNumber(e, { unit: "day" });
			case "iii": return Wo(n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiii": return Wo(n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiiii": return Wo(n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			default: return Wo(n.day(e, {
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
		return e = ys(e, n), e.setHours(0, 0, 0, 0), e;
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
}, xs = class extends Bo {
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
		return e.setHours(Xo(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"b",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, Ss = class extends Bo {
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
		return e.setHours(Xo(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, Cs = class extends Bo {
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
		return e.setHours(Xo(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"t",
		"T"
	];
}, ws = class extends Bo {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "h": return Go(Ho.hour12h, e);
			case "ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return Jo(t.length, e);
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
}, Ts = class extends Bo {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "H": return Go(Ho.hour23h, e);
			case "Ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return Jo(t.length, e);
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
}, Es = class extends Bo {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "K": return Go(Ho.hour11h, e);
			case "Ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return Jo(t.length, e);
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
}, Ds = class extends Bo {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "k": return Go(Ho.hour24h, e);
			case "ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return Jo(t.length, e);
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
}, Os = class extends Bo {
	priority = 60;
	parse(e, t, n) {
		switch (t) {
			case "m": return Go(Ho.minute, e);
			case "mo": return n.ordinalNumber(e, { unit: "minute" });
			default: return Jo(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setMinutes(n, 0, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, ks = class extends Bo {
	priority = 50;
	parse(e, t, n) {
		switch (t) {
			case "s": return Go(Ho.second, e);
			case "so": return n.ordinalNumber(e, { unit: "second" });
			default: return Jo(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setSeconds(n, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, As = class extends Bo {
	priority = 30;
	parse(e, t) {
		return Wo(Jo(t.length, e), (e) => Math.trunc(e * 10 ** (-t.length + 3)));
	}
	set(e, t, n) {
		return e.setMilliseconds(n), e;
	}
	incompatibleTokens = ["t", "T"];
}, js = class extends Bo {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "X": return Ko(Uo.basicOptionalMinutes, e);
			case "XX": return Ko(Uo.basic, e);
			case "XXXX": return Ko(Uo.basicOptionalSeconds, e);
			case "XXXXX": return Ko(Uo.extendedOptionalSeconds, e);
			default: return Ko(Uo.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : na(e, e.getTime() - da(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"x"
	];
}, Ms = class extends Bo {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "x": return Ko(Uo.basicOptionalMinutes, e);
			case "xx": return Ko(Uo.basic, e);
			case "xxxx": return Ko(Uo.basicOptionalSeconds, e);
			case "xxxxx": return Ko(Uo.extendedOptionalSeconds, e);
			default: return Ko(Uo.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : na(e, e.getTime() - da(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"X"
	];
}, Ns = class extends Bo {
	priority = 40;
	parse(e) {
		return qo(e);
	}
	set(e, t, n) {
		return [na(e, n * 1e3), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, Ps = class extends Bo {
	priority = 20;
	parse(e) {
		return qo(e);
	}
	set(e, t, n) {
		return [na(e, n), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, Fs = {
	G: new Vo(),
	y: new $o(),
	Y: new es(),
	R: new ts(),
	u: new ns(),
	Q: new rs(),
	q: new is(),
	M: new as(),
	L: new os(),
	w: new cs(),
	I: new us(),
	d: new ps(),
	D: new ms(),
	E: new gs(),
	e: new _s(),
	c: new vs(),
	i: new bs(),
	a: new xs(),
	b: new Ss(),
	B: new Cs(),
	h: new ws(),
	H: new Ts(),
	K: new Es(),
	k: new Ds(),
	m: new Os(),
	s: new ks(),
	S: new As(),
	X: new js(),
	x: new Ms(),
	t: new Ns(),
	T: new Ps()
}, Is = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Ls = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Rs = /^'([^]*?)'?$/, zs = /''/g, Bs = /\S/, Vs = /[a-zA-Z]/;
function Hs(e, t, n, r) {
	let i = () => na(r?.in || n, NaN), a = To(), o = r?.locale ?? a.locale ?? Ka, s = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, c = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0;
	if (!t) return e ? i() : X(n, r?.in);
	let l = {
		firstWeekContainsDate: s,
		weekStartsOn: c,
		locale: o
	}, u = [new zo(r?.in, n)], d = t.match(Ls).map((e) => {
		let t = e[0];
		if (t in so) {
			let n = so[t];
			return n(e, o.formatLong);
		}
		return e;
	}).join("").match(Is), f = [];
	for (let n of d) {
		!r?.useAdditionalWeekYearTokens && po(n) && mo(n, t, e), !r?.useAdditionalDayOfYearTokens && fo(n) && mo(n, t, e);
		let a = n[0], s = Fs[a];
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
			if (a.match(Vs)) throw RangeError("Format string contains an unescaped latin alphabet character `" + a + "`");
			if (n === "''" ? n = "'" : a === "'" && (n = Us(n)), e.indexOf(n) === 0) e = e.slice(n.length);
			else return i();
		}
	}
	if (e.length > 0 && Bs.test(e)) return i();
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
function Us(e) {
	return e.match(Rs)[1].replace(zs, "'");
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isSameQuarter.js
function Ws(e, t, n) {
	let [r, i] = fa(n?.in, e, t);
	return +Da(r) == +Da(i);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/subDays.js
function Gs(e, t, n) {
	return ra(e, -t, n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parseISO.js
function Ks(e, t) {
	let n = () => na(t?.in, NaN), r = t?.additionalDigits ?? 2, i = Zs(e), a;
	if (i.date) {
		let e = Qs(i.date, r);
		a = $s(e.restDateString, e.year);
	}
	if (!a || isNaN(+a)) return n();
	let o = +a, s = 0, c;
	if (i.time && (s = tc(i.time), isNaN(s))) return n();
	if (i.timezone) {
		if (c = rc(i.timezone), isNaN(c)) return n();
	} else {
		let e = new Date(o + s), n = X(0, t?.in);
		return n.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()), n.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()), n;
	}
	return X(o + s + c, t?.in);
}
var qs = {
	dateTimeDelimiter: /[T ]/,
	timeZoneDelimiter: /[Z ]/i,
	timezone: /([Z+-].*)$/
}, Js = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, Ys = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, Xs = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Zs(e) {
	let t = {}, n = e.split(qs.dateTimeDelimiter), r;
	if (n.length > 2) return t;
	if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], qs.timeZoneDelimiter.test(t.date) && (t.date = e.split(qs.timeZoneDelimiter)[0], r = e.substr(t.date.length, e.length))), r) {
		let e = qs.timezone.exec(r);
		e ? (t.time = r.replace(e[1], ""), t.timezone = e[1]) : t.time = r;
	}
	return t;
}
function Qs(e, t) {
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
function $s(e, t) {
	if (t === null) return /* @__PURE__ */ new Date(NaN);
	let n = e.match(Js);
	if (!n) return /* @__PURE__ */ new Date(NaN);
	let r = !!n[4], i = ec(n[1]), a = ec(n[2]) - 1, o = ec(n[3]), s = ec(n[4]), c = ec(n[5]) - 1;
	if (r) return lc(t, s, c) ? ic(t, s, c) : /* @__PURE__ */ new Date(NaN);
	{
		let e = /* @__PURE__ */ new Date(0);
		return !sc(t, a, o) || !cc(t, i) ? /* @__PURE__ */ new Date(NaN) : (e.setUTCFullYear(t, a, Math.max(i, o)), e);
	}
}
function ec(e) {
	return e ? parseInt(e) : 1;
}
function tc(e) {
	let t = e.match(Ys);
	if (!t) return NaN;
	let n = nc(t[1]), r = nc(t[2]), i = nc(t[3]);
	return uc(n, r, i) ? n * Qi + r * Zi + i * 1e3 : NaN;
}
function nc(e) {
	return e && parseFloat(e.replace(",", ".")) || 0;
}
function rc(e) {
	if (e === "Z") return 0;
	let t = e.match(Xs);
	if (!t) return 0;
	let n = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), i = t[3] && parseInt(t[3]) || 0;
	return dc(r, i) ? n * (r * Qi + i * Zi) : NaN;
}
function ic(e, t, n) {
	let r = /* @__PURE__ */ new Date(0);
	r.setUTCFullYear(e, 0, 4);
	let i = r.getUTCDay() || 7, a = (t - 1) * 7 + n + 1 - i;
	return r.setUTCDate(r.getUTCDate() + a), r;
}
var ac = [
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
function oc(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
function sc(e, t, n) {
	return t >= 0 && t <= 11 && n >= 1 && n <= (ac[t] || (oc(e) ? 29 : 28));
}
function cc(e, t) {
	return t >= 1 && t <= (oc(e) ? 366 : 365);
}
function lc(e, t, n) {
	return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function uc(e, t, n) {
	return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function dc(e, t) {
	return t >= 0 && t <= 59;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/roundToNearestMinutes.js
function fc(e, t) {
	let n = t?.nearestTo ?? 1;
	if (n < 1 || n > 30) return na(e, NaN);
	let r = X(e, t?.in), i = r.getSeconds() / 60, a = r.getMilliseconds() / 1e3 / 60, o = r.getMinutes() + i + a, s = Ca(t?.roundingMethod ?? "round")(o / n) * n;
	return r.setMinutes(s, 0, 0), r;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/setMonth.js
function pc(e, t, n) {
	let r = X(e, n?.in), i = r.getFullYear(), a = r.getDate(), o = na(n?.in || e, 0);
	o.setFullYear(i, t, 15), o.setHours(0, 0, 0, 0);
	let s = wo(o);
	return r.setMonth(t, Math.min(a, s)), r;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/set.js
function Q(e, t, n) {
	let r = X(e, n?.in);
	return isNaN(+r) ? na(n?.in || e, NaN) : (t.year != null && r.setFullYear(t.year), t.month != null && (r = pc(r, t.month)), t.date != null && r.setDate(t.date), t.hours != null && r.setHours(t.hours), t.minutes != null && r.setMinutes(t.minutes), t.seconds != null && r.setSeconds(t.seconds), t.milliseconds != null && r.setMilliseconds(t.milliseconds), r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/setMilliseconds.js
function mc(e, t, n) {
	let r = X(e, n?.in);
	return r.setMilliseconds(t), r;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/setSeconds.js
function hc(e, t, n) {
	let r = X(e, n?.in);
	return r.setSeconds(t), r;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/setYear.js
function gc(e, t, n) {
	let r = X(e, n?.in);
	return isNaN(+r) ? na(n?.in || e, NaN) : (r.setFullYear(t), r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/subMonths.js
function _c(e, t, n) {
	return ia(e, -t, n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/sub.js
function vc(e, t, n) {
	let { years: r = 0, months: i = 0, weeks: a = 0, days: o = 0, hours: s = 0, minutes: c = 0, seconds: l = 0 } = t, u = Gs(_c(e, i + r * 12, n), o + a * 7, n), d = (l + (c + s * 60) * 60) * 1e3;
	return na(n?.in || e, +u - d);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/subYears.js
function yc(e, t, n) {
	return _a(e, -t, n);
}
//#endregion
//#region node_modules/.pnpm/@date-fns+tz@1.5.0/node_modules/@date-fns/tz/tzName/index.js
function bc(e, t, n = "long") {
	return new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		timeZone: e,
		timeZoneName: n
	}).format(t).split(/\s/g).slice(2).join(" ");
}
//#endregion
//#region node_modules/.pnpm/@date-fns+tz@1.5.0/node_modules/@date-fns/tz/tzOffset/index.js
var xc = {}, Sc = {};
function Cc(e, t) {
	try {
		let n = (xc[e] ||= new Intl.DateTimeFormat("en-US", {
			timeZone: e,
			timeZoneName: "longOffset"
		}).format)(t).split("GMT")[1];
		return n in Sc ? Sc[n] : Tc(n, n.split(":"));
	} catch {
		if (e in Sc) return Sc[e];
		let t = e?.match(wc);
		return t ? Tc(e, t.slice(1)) : NaN;
	}
}
var wc = /([+-]\d\d):?(\d\d)?/;
function Tc(e, t) {
	let n = +(t[0] || 0), r = +(t[1] || 0), i = (t[2] || 0) / 60;
	return Sc[e] = n * 60 + r > 0 ? n * 60 + r + i : n * 60 - r - i;
}
//#endregion
//#region node_modules/.pnpm/@date-fns+tz@1.5.0/node_modules/@date-fns/tz/date/mini.js
var Ec = class e extends Date {
	constructor(...e) {
		super(), e.length > 1 && typeof e[e.length - 1] == "string" && (this.timeZone = e.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Cc(this.timeZone, this)) ? this.setTime(NaN) : e.length ? typeof e[0] == "number" && (e.length === 1 || e.length === 2 && typeof e[1] != "number") ? this.setTime(e[0]) : typeof e[0] == "string" ? this.setTime(+new Date(e[0])) : e[0] instanceof Date ? this.setTime(+e[0]) : (this.setTime(+new Date(...e)), Ac(this, e)) : this.setTime(Date.now());
	}
	static tz(t, ...n) {
		return n.length ? new e(...n, t) : new e(Date.now(), t);
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	getTimezoneOffset() {
		let e = -Cc(this.timeZone, this);
		return e > 0 ? Math.floor(e) : Math.ceil(e);
	}
	setTime(e) {
		return Date.prototype.setTime.apply(this, arguments), Oc(this), +this;
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
}, Dc = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
	if (!Dc.test(e)) return;
	let t = e.replace(Dc, "$1UTC");
	Ec.prototype[t] && (e.startsWith("get") ? Ec.prototype[e] = function() {
		return this.internal[t]();
	} : (Ec.prototype[e] = function() {
		return Date.prototype[t].apply(this.internal, arguments), kc(this), +this;
	}, Ec.prototype[t] = function() {
		return Date.prototype[t].apply(this, arguments), Oc(this), +this;
	}));
});
function Oc(e) {
	e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Cc(e.timeZone, e) * 60));
}
function kc(e) {
	Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), Ac(e);
}
function Ac(e, t) {
	let n = Array.isArray(t) ? jc(t) : +e.internal, r = Cc(e.timeZone, e), i = r > 0 ? Math.floor(r) : Math.ceil(r), a = /* @__PURE__ */ new Date(+e);
	a.setUTCHours(a.getUTCHours() - 1);
	let o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), s = -(/* @__PURE__ */ new Date(+a)).getTimezoneOffset(), c = o - s, l = o;
	if (c && o !== i && Date.prototype.getHours.apply(e) !== (Array.isArray(t) ? t[3] || 0 : e.internal.getUTCHours())) {
		let t = /* @__PURE__ */ new Date(+e), n = o - i;
		n && t.setUTCMinutes(t.getUTCMinutes() + n);
		let r = Cc(e.timeZone, t);
		(r > 0 ? Math.floor(r) : Math.ceil(r)) === i && (l = s);
	}
	let u = l - i;
	u && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + u);
	let d = /* @__PURE__ */ new Date(+e);
	d.setUTCSeconds(0);
	let f = o > 0 ? d.getSeconds() : (d.getSeconds() - 60) % 60, p = Math.round(-(Cc(e.timeZone, e) * 60)) % 60;
	(p || f) && Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + p + f);
	let m = Cc(e.timeZone, e), h = m > 0 ? Math.floor(m) : Math.ceil(m), g = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - h, _ = h !== i, v = g - u, y = h - i, b = n - h * 60 * 1e3, x = y > 0 && Mc(e) - n === y * 60 * 1e3 && Mc(e, b) !== n;
	if (_ && v && !x) {
		Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + v);
		let t = Cc(e.timeZone, e), n = h - (t > 0 ? Math.floor(t) : Math.ceil(t));
		n && v < 0 && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + n);
	}
	Oc(e);
	let S = (t ? n : n + p * 1e3) - +e.internal;
	S && Math.abs(S) < 18e5 && (Date.prototype.setTime.call(e, +e + S), Oc(e));
}
function jc(e) {
	return Date.UTC(e[0], e.length > 1 ? e[1] : 0, e.length > 2 ? e[2] : 1, ...e.slice(3));
}
function Mc(e, t) {
	let n = new Date(t ?? +e);
	return n.setUTCSeconds(n.getUTCSeconds() - Math.round(-Cc(e.timeZone, n) * 60)), +n;
}
//#endregion
//#region node_modules/.pnpm/@date-fns+tz@1.5.0/node_modules/@date-fns/tz/date/index.js
var Nc = class e extends Ec {
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
		return `${e} GMT${t}${n}${r} (${bc(this.timeZone, this)})`;
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
function Pc() {
	return h("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [
		h("path", { d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" }),
		h("path", { d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }),
		h("path", { d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }),
		h("path", { d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" })
	]);
}
function Fc() {
	return h("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [h("path", { d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z" }), h("path", { d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" })]);
}
function Ic() {
	return h("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [h("path", { d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" })]);
}
function Lc() {
	return h("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [h("path", { d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z" })]);
}
function Rc() {
	return h("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [h("path", { d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z" }), h("path", { d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" })]);
}
function zc() {
	return h("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [h("path", { d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" })]);
}
function Bc() {
	return h("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [h("path", { d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" })]);
}
var Vc = Symbol("ContextKey"), Hc = (e, t) => {
	let { setTimeModelValue: n } = jl(), r = Al(e), i = N(null), o = j({
		menuFocused: !1,
		shiftKeyInMenu: !1,
		isInputFocused: !1,
		isTextInputDate: !1,
		arrowNavigationLevel: 0
	}), s = r.getDate(/* @__PURE__ */ new Date()), c = N(""), l = N([{
		month: ko(s),
		year: Z(s)
	}]), u = j({
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
	A(Vc, {
		rootProps: e,
		defaults: r,
		modelValue: d,
		state: M(o),
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
	let e = g(Vc);
	if (!e) throw Error("Can't use context");
	return e;
}, Uc = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(Uc || {}), Wc = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(Wc || {}), Gc = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(Gc || {}), Kc = [
	"timestamp",
	"date",
	"iso"
], qc = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(qc || {}), Jc = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(Jc || {}), Yc = /* @__PURE__ */ ((e) => (e.MONTH_AND_YEAR = "MM-yyyy", e.YEAR = "yyyy", e.DATE = "dd-MM-yyyy", e))(Yc || {}), Xc = /* @__PURE__ */ ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e))(Xc || {}), Zc = () => {
	let { rootProps: e, state: t } = $(), n = a(() => t.arrowNavigationLevel), r = N(-1), i = N(-1);
	K(n, (e, t) => {
		v(e === 0 && t > 0);
	});
	let o = N([]), s = N(/* @__PURE__ */ new Map()), c = () => {
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
			Jc.arrowUp,
			Jc.arrowDown,
			Jc.arrowLeft,
			Jc.arrowRight
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
			case Jc.arrowLeft: return f(n, r);
			case Jc.arrowRight: return p(n, r);
			case Jc.arrowUp: return m(n, r);
			case Jc.arrowDown: return h(n, r);
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
		x().then(() => {
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
	D(() => {
		e.arrowNavigation && (v(!1), document.addEventListener("keydown", d));
	}), O(() => {
		e.arrowNavigation && document.removeEventListener("keydown", d);
	});
}, Qc = () => {
	let { checkPartialRangeValue: e, checkRangeEnabled: t, isValidDate: n } = tl(), { convertType: r, errorMapper: i } = jl(), { getDate: a, rootEmit: o, state: s, rootProps: c, inputValue: l, defaults: { textInput: u, range: d, multiDates: f, timeConfig: p, formats: m }, modelValue: h, updateTime: g } = $(), { setTime: _, getWeekFromDate: v } = Ml(), { formatSelectedDate: y, formatForTextInput: b } = Pl();
	K(h, (e, t) => {
		o("internal-model-change", h.value), JSON.stringify(t ?? {}) !== JSON.stringify(e ?? {}) && g();
	}, { deep: !0 }), K(d, (e, t) => {
		e.enabled !== t.enabled && (h.value = null);
	}), K(() => m.value.input, () => {
		R();
	});
	let x = (e) => e ? c.modelType ? B(e) : {
		hours: Eo(e),
		minutes: Oo(e),
		seconds: p.value.enableSeconds ? Ao(e) : 0
	} : null, S = (e) => c.modelType ? B(e) : {
		month: ko(e),
		year: Z(e)
	}, C = (n) => Array.isArray(n) ? f.value.enabled ? n.map((e) => w(e, gc(a(), e))) : t(() => [gc(a(), n[0]), n[1] ? gc(a(), n[1]) : e(d.value.partialRange)], d.value.enabled) : gc(a(), +n), w = (e, t) => (typeof e == "string" || typeof e == "number") && c.modelType ? z(e) : t, T = (e) => Array.isArray(e) ? [w(e[0], _(e[0])), w(e[1], _(e[1]))] : w(e, _(e)), E = (n) => {
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
	}, z = (e) => c.modelType ? Kc.includes(c.modelType) ? a(e) : c.modelType === "format" && typeof m.value.input == "string" ? Hs(e, m.value.input, a(), { locale: c.locale }) : Hs(e, c.modelType, a(), { locale: c.locale }) : a(e), B = (e) => e ? c.modelType ? c.modelType === "timestamp" ? +e : c.modelType === "iso" ? e.toISOString() : c.modelType === "format" && typeof m.value.input == "string" ? y(e) : y(e, c.modelType) : e : null, V = (e) => {
		o("update:model-value", e);
	}, H = (e) => Array.isArray(h.value) ? f.value.enabled ? h.value.map((t) => e(t)) : [e(h.value[0]), h.value[1] ? e(h.value[1]) : null] : e(r(h.value)), ee = () => {
		if (Array.isArray(h.value)) {
			let e = v(h.value[0], c.weekStart), t = h.value[1] ? v(h.value[1], c.weekStart) : [];
			return [e.map((e) => a(e)), t.map((e) => a(e))];
		}
		return v(h.value, c.weekStart).map((e) => a(e));
	}, U = (e) => V(r(H(e))), W = () => o("update:model-value", ee());
	return {
		checkBeforeEmit: () => h.value ? d.value.enabled ? d.value.partialRange ? h.value.length >= 1 : h.value.length === 2 : !!h.value : !1,
		parseExternalModelValue: I,
		formatInputValue: R,
		emitModelValue: () => (R(), c.monthPicker ? U(S) : c.timePicker ? U(x) : c.yearPicker ? U(Z) : c.weekPicker ? W() : V(P()))
	};
}, $c = () => {
	let { defaults: { transitions: e } } = $(), t = a(() => (t) => e.value ? t ? e.value.open : e.value.close : ""), n = a(() => (t) => e.value ? t ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
	return {
		transitionName: t,
		showTransition: !!e.value,
		menuTransition: n
	};
}, el = (e) => {
	let { today: t, time: n, modelValue: r, defaults: { range: i } } = $(), { setTimeModelValue: a } = jl();
	K(i, (e, o) => {
		e.enabled !== o.enabled && a(n, r.value, t, i.value.enabled);
	}, { deep: !0 }), K(r, (t, n) => {
		e && JSON.stringify(t ?? {}) !== JSON.stringify(n ?? {}) && e();
	}, { deep: !0 });
}, tl = () => {
	let { defaults: { safeDates: e, range: t, multiDates: n, filters: r, timeConfig: i }, rootProps: o, getDate: s } = $(), { getMapKeyType: c, getMapDate: l, errorMapper: u, convertType: d } = jl(), { isDateBefore: f, isDateAfter: p, isDateEqual: m, resetDate: h, getDaysInBetween: g, setTimeValue: _, getTimeObj: v, setTime: y } = Ml(), b = (t) => e.value.disabledDates ? typeof e.value.disabledDates == "function" ? e.value.disabledDates(s(t)) : !!l(t, e.value.disabledDates) : !1, x = (t) => e.value.maxDate ? o.yearPicker ? Z(t) > Z(e.value.maxDate) : p(t, e.value.maxDate) : !1, S = (t) => e.value.minDate ? o.yearPicker ? Z(t) < Z(e.value.minDate) : f(t, e.value.minDate) : !1, C = (e) => {
		if (!e) return !1;
		let t = x(e), n = S(e), i = b(e), a = r.value.months.map((e) => +e).includes(ko(e)), s = r.value.weekDays?.length ? r.value.weekDays.some((t) => +t === Co(e)) : !1, c = O(e), l = Z(e), u = l < +o.yearRange[0] || l > +o.yearRange[1];
		return !(t || n || i || a || u || s || c);
	}, w = (t, n) => f(...G(e.value.minDate, t, n)) || m(...G(e.value.minDate, t, n)), T = (t, n) => p(...G(e.value.maxDate, t, n)) || m(...G(e.value.maxDate, t, n)), E = (t, n, r) => {
		let i = !1;
		return e.value.maxDate && r && T(t, n) && (i = !0), e.value.minDate && !r && w(t, n) && (i = !0), i;
	}, D = (t, n, r, i) => {
		let a = !1;
		return i && (e.value.minDate || e.value.maxDate) ? e.value.minDate && e.value.maxDate ? a = E(t, n, r) : (e.value.minDate && w(t, n) || e.value.maxDate && T(t, n)) && (a = !0) : a = !0, a;
	}, O = (t) => Array.isArray(e.value.allowedDates) && !e.value.allowedDates.length ? !0 : e.value.allowedDates ? !l(t, e.value.allowedDates, c(o.monthPicker, o.yearPicker)) : !1, k = (e) => !C(e), A = (e) => !t.value.noDisabledRange || !Ea({
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
			let i = ma(e, n[r]), a = g(n[r], e), o = a.length === 1 ? 0 : a.filter((e) => k(e)).length, s = Math.abs(i) - (t.value.minMaxRawRange ? 0 : o);
			if (t.value.minRange && t.value.maxRange) return s >= +t.value.minRange && s <= +t.value.maxRange;
			if (t.value.minRange) return s >= +t.value.minRange;
			if (t.value.maxRange) return s <= +t.value.maxRange;
		}
		return !0;
	}, P = () => !i.value.enableTimePicker || o.monthPicker || o.yearPicker || i.value.ignoreTimeValidation, F = (e) => Array.isArray(e) ? [e[0] ? _(e[0]) : null, e[1] ? _(e[1]) : null] : _(e), I = (e, t, n) => t ? e.find((e) => +e.hours === Eo(t) && e.minutes === "*" || +e.minutes === Oo(t) && +e.hours === Eo(t)) && n : !1, L = (e, t, n) => {
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
		return (o.maxTime || e.value.maxDate) && (n = q(o.maxTime, e.value.maxDate, "max", d(r), n)), (o.minTime || e.value.minDate) && (n = q(o.minTime, e.value.minDate, "min", d(r), n)), B(t, n);
	}, H = (t) => {
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
	}, ee = a(() => (e) => !i.value.enableTimePicker || i.value.ignoreTimeValidation ? !0 : V(e)), U = a(() => (e) => o.monthPicker ? Array.isArray(e) && (t.value.enabled || n.value.enabled) ? !e.filter((e) => !H(e)).length : H(e) : !0), W = (t, n, r) => {
		if (!n || r && !e.value.maxDate || !r && !e.value.minDate) return !1;
		let i = r ? ia(t, 1) : _c(t, 1), a = [ko(i), Z(i)];
		return r ? !T(...a) : !w(...a);
	}, G = (e, t, n) => [Q(s(e), { date: 1 }), Q(s(), {
		month: t,
		year: n,
		date: 1
	})], K = (e, t, n, r) => {
		if (!e) return !0;
		if (r) {
			let r = n === "max" ? Mo(e, t) : jo(e, t), i = {
				seconds: 0,
				milliseconds: 0
			};
			return r || No(Q(e, i), Q(t, i));
		}
		return n === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
	}, q = (e, t, n, r, i) => {
		if (Array.isArray(r)) {
			let a = te(e, r[0], t), o = te(e, r[1], t);
			return K(r[0], a, n, !!t) && K(r[1], o, n, !!t) && i;
		}
		let a = te(e, r, t);
		return K(r, a, n, !!t) && i;
	}, te = (e, t, n) => e ? y(e, t) : s(n ?? t);
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
		isValidDate: (e) => Array.isArray(e) ? ba(e[0]) && (!e[1] || ba(e[1])) : e ? ba(e) : !1,
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
		isTimeValid: ee,
		isMonthValid: U
	};
}, nl = (e) => {
	let { rootEmit: t, rootProps: n, defaults: { timeConfig: r, flow: i } } = $(), o = N(0), s = j({
		[Wc.timePicker]: !r.value.enableTimePicker || n.timePicker || n.monthPicker,
		[Wc.calendar]: !1,
		[Wc.header]: !1
	}), c = a(() => n.monthPicker || n.timePicker), l = (e) => {
		if (i.value?.steps?.length) {
			if (!e && c.value) return p();
			s[e] = !0, Object.keys(s).filter((e) => !s[e]).length || p();
		}
	}, u = () => {
		i.value?.steps?.length && o.value !== -1 && (o.value += 1, t("flow-step", o.value), p()), i.value?.steps?.length === o.value && x().then(() => d());
	}, d = () => {
		o.value = -1;
	}, f = (t, n, ...r) => {
		i.value?.steps[o.value] === t && e.value && e.value[n]?.(...r);
	}, p = (e = 0) => {
		e && (o.value += e), f(Gc.month, "toggleMonthPicker", !0), f(Gc.year, "toggleYearPicker", !0), f(Gc.calendar, "toggleTimePicker", !1, !0), f(Gc.time, "toggleTimePicker", !0, !0);
		let t = i.value?.steps[o.value];
		(t === Gc.hours || t === Gc.minutes || t === Gc.seconds) && f(t, "toggleTimePicker", !0, !0, t);
	};
	return {
		childMount: l,
		updateFlowStep: u,
		resetFlow: d,
		handleFlow: p,
		flowStep: o
	};
};
function rl(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
function il(e) {
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
function al(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? sl(s, (e) => e.test(o)) : ol(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function ol(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function sl(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function cl(e) {
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
var ll = {
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
}, ul = (e, t, n) => {
	let r, i = ll[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
}, dl = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, fl = (e, t, n, r) => dl[e], pl = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: il({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: il({
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
	month: il({
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
	day: il({
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
	dayPeriod: il({
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
}, ml = {
	ordinalNumber: cl({
		matchPattern: /^(\d+)(th|st|nd|rd)?/i,
		parsePattern: /\d+/i,
		valueCallback: (e) => parseInt(e, 10)
	}),
	era: al({
		matchPatterns: {
			narrow: /^(b|a)/i,
			abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
			wide: /^(before christ|before common era|anno domini|common era)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: { any: [/^b/i, /^(a|c)/i] },
		defaultParseWidth: "any"
	}),
	quarter: al({
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
	month: al({
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
	day: al({
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
	dayPeriod: al({
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
}, hl = {
	code: "en-US",
	formatDistance: ul,
	formatLong: {
		date: rl({
			formats: {
				full: "EEEE, MMMM do, y",
				long: "MMMM do, y",
				medium: "MMM d, y",
				short: "MM/dd/yyyy"
			},
			defaultWidth: "full"
		}),
		time: rl({
			formats: {
				full: "h:mm:ss a zzzz",
				long: "h:mm:ss a z",
				medium: "h:mm:ss a",
				short: "h:mm a"
			},
			defaultWidth: "full"
		}),
		dateTime: rl({
			formats: {
				full: "{{date}} 'at' {{time}}",
				long: "{{date}} 'at' {{time}}",
				medium: "{{date}}, {{time}}",
				short: "{{date}}, {{time}}"
			},
			defaultWidth: "full"
		})
	},
	formatRelative: fl,
	localize: pl,
	match: ml,
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
}, gl = {
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
}, _l = {
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
}, vl = {
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
}, yl = {
	dates: [],
	years: [],
	months: [],
	quarters: [],
	weeks: [],
	weekdays: [],
	options: { highlightDisabled: !1 }
}, bl = {
	showSelect: !0,
	showCancel: !0,
	showNow: !1,
	showPreview: !0,
	selectBtnLabel: "Select",
	cancelBtnLabel: "Cancel",
	nowBtnLabel: "Now",
	nowBtnRound: void 0
}, xl = {
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
}, Sl = {
	menuAppearTop: "dp-menu-appear-top",
	menuAppearBottom: "dp-menu-appear-bottom",
	open: "dp-slide-down",
	close: "dp-slide-up",
	next: "calendar-next",
	previous: "calendar-prev",
	vNext: "dp-slide-up",
	vPrevious: "dp-slide-down"
}, Cl = {
	weekDays: [],
	months: [],
	years: [],
	times: {
		hours: [],
		minutes: [],
		seconds: []
	}
}, wl = {
	month: "LLL",
	year: "yyyy",
	weekDay: "EEEEEE",
	quarter: "MMMM",
	day: "d",
	input: void 0,
	preview: void 0
}, Tl = {
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
}, El = {
	flowStep: 0,
	menuWrapRef: null,
	collapse: !1
}, Dl = {
	weekStart: Xc.Monday,
	yearRange: () => [1900, 2100],
	ui: () => ({}),
	locale: () => hl,
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
}, Ol = {
	name: void 0,
	required: !1,
	autocomplete: "off",
	state: void 0,
	clearable: !0,
	alwaysClearable: !1,
	hideInputIcon: !1,
	id: void 0,
	inputmode: "none"
}, kl = {
	type: "local",
	hideOnOffsetDates: !1,
	label: "W"
}, Al = (e) => {
	let { getMapKey: t, getMapKeyType: n, getTimeObjFromCurrent: r } = jl();
	function i(t, n) {
		let r;
		return r = e.timezone ? new Nc(t ?? /* @__PURE__ */ new Date(), e.timezone) : t ? new Date(t) : /* @__PURE__ */ new Date(), n ? Q(r, {
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
		...xl,
		...e.ariaLabels
	})), g = a(() => ({
		...Cl,
		...e.filters
	})), _ = a(() => typeof e.transitions == "boolean" ? e.transitions ? Sl : !1 : {
		...Sl,
		...e.transitions
	}), v = a(() => ({
		...bl,
		...e.actionRow
	})), y = a(() => typeof e.textInput == "object" ? {
		...vl,
		...e.textInput,
		format: typeof e.textInput.format == "string" ? e.textInput.format : O.value.input,
		pattern: e.textInput.format ?? O.value.input,
		enabled: !0
	} : {
		...vl,
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
		..._l,
		...e.config
	})), S = a(() => typeof e.highlight == "function" ? e.highlight : {
		...yl,
		...e.highlight
	}), C = a(() => typeof e.weekNumbers == "object" ? {
		type: e.weekNumbers?.type ?? kl.type,
		hideOnOffsetDates: e.weekNumbers?.hideOnOffsetDates ?? kl.hideOnOffsetDates,
		label: e.weekNumbers.label ?? kl.label
	} : e.weekNumbers ? kl : void 0), w = a(() => typeof e.multiDates == "boolean" ? {
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
			return [t(n, Yc.DATE), e];
		})) : null
	})), E = a(() => typeof e.range == "object" ? {
		enabled: !0,
		...gl,
		...e.range
	} : {
		enabled: e.range,
		...gl
	}), D = a(() => ({ ...Object.fromEntries(Object.keys(e.ui).map((t) => {
		let n = t, r = e.ui[n];
		return n === "dayClass" ? [n, e.ui[n]] : [t, typeof e.ui[n] == "string" ? { [r]: !0 } : Object.fromEntries(r.map((e) => [e, !0]))];
	})) })), O = a(() => ({
		...wl,
		...e.formats,
		input: e.formats?.input ?? s(),
		preview: e.formats?.preview ?? s()
	})), k = a(() => {
		if (e.teleport) return typeof e.teleport == "string" ? e.teleport : typeof e.teleport == "boolean" ? "body" : e.teleport;
	}), A = a(() => ({
		...Tl,
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
				...Ol,
				inputmode: t,
				...e.inputAttrs
			} : {
				...Ol,
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
}, jl = () => {
	let e = (e, t) => xo(e, t ?? Yc.DATE), t = (e, t) => e ? Yc.MONTH_AND_YEAR : t ? Yc.YEAR : Yc.DATE, n = (t, n, r) => n.get(e(t, r)), r = (e) => e, i = (e) => e === 0 ? e : !e || Number.isNaN(+e) ? null : +e, a = () => [
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
		if (e.key === Jc.enter || e.key === Jc.space) return n && e.preventDefault(), t();
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
			hours: Eo,
			minutes: Oo,
			seconds: Ao
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
				hours: Eo(e),
				minutes: Oo(e),
				seconds: n ? Ao(e) : 0
			};
			return Object.assign(r, t);
		},
		errorMapper: g
	};
}, Ml = () => {
	let { getDate: e } = $(), { getMapDate: t, getGroupedList: n } = jl(), r = (t, n) => {
		if (!t) return e();
		let r = Q(e(t), {
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0
		});
		return n ? ka(r) : r;
	}, i = (t, n) => {
		let r = e(n);
		return Q(r, {
			hours: +(t.hours ?? Eo(r)),
			minutes: +(t.minutes ?? Oo(r)),
			seconds: +(t.seconds ?? Ao(r)),
			milliseconds: 0
		});
	}, a = (e, t) => [ca(e, { weekStartsOn: +t }), Ma(e, { weekStartsOn: +t })], o = (e, t) => !e || !t ? !1 : Mo(r(e), r(t)), s = (e, t) => !e || !t ? !1 : No(r(e), r(t)), c = (e, t) => !e || !t ? !1 : jo(r(e), r(t)), l = (e, t, n) => e?.[0] && e?.[1] ? c(n, e[0]) && o(n, e[1]) : e?.[0] && t ? c(n, e[0]) && o(n, t) || o(n, e[0]) && c(n, t) : !1, u = (e, t) => Ea({
		start: c(e, t) ? t : e,
		end: c(t, e) ? t : e
	}), d = (e) => `dp-${xo(e, "yyyy-MM-dd")}`, f = (t) => r(Q(e(t), { date: 1 })), p = (t, n) => {
		if (n) {
			let r = Z(e(n));
			if (r > t) return 12;
			if (r === t) return ko(e(n));
		}
	}, m = (t, n) => {
		if (n) {
			let r = Z(e(n));
			return r < t ? -1 : r === t ? ko(e(n)) : void 0;
		}
	}, h = (t) => {
		if (t) return Z(e(t));
	}, g = (e) => ({
		hours: Eo(e),
		minutes: Oo(e),
		seconds: Ao(e)
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
			before: Gs(r(t), e),
			after: ra(r(t), e)
		}),
		isModelAuto: (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1,
		matchDate: (n, r) => n ? r ? r instanceof Map ? !!t(n, r) : r(e(n)) : !1 : !0,
		checkHighlightMonth: (e, t, n) => typeof e == "function" ? e({
			month: t,
			year: n
		}) : e.months.some((e) => e.month === t && e.year === n),
		checkHighlightYear: (e, t) => typeof e == "function" ? e(t) : e.years.includes(t)
	};
}, Nl = () => {
	let { defaults: { config: e } } = $(), t = N(0);
	D(() => {
		n(), globalThis.addEventListener("resize", n, { passive: !0 });
	}), O(() => {
		globalThis.removeEventListener("resize", n);
	});
	let n = () => {
		t.value = globalThis.document.documentElement.clientWidth;
	};
	return { isMobile: a(() => t.value <= e.value.mobileBreakpoint || void 0) };
}, Pl = () => {
	let { getDate: e, state: t, modelValue: n, rootProps: r, defaults: { formats: i, textInput: a } } = $(), o = (t) => xo(gc(e(), t), i.value.year, { locale: r.locale }), s = (t) => xo(pc(e(), t), i.value.month, { locale: r.locale }), c = (e) => xo(e, i.value.weekDay, { locale: r.locale }), l = (e) => xo(e, i.value.quarter, { locale: r.locale }), u = (e, t) => [e, t].map((e) => l(e)).join("-"), d = (e) => xo(e, i.value.day, { locale: r.locale }), f = (e, t, n) => {
		let o = n ? i.value.preview : i.value.input;
		if (!e) return "";
		if (typeof o == "function") return o(e);
		let s = t ?? o, c = { locale: r.locale };
		return Array.isArray(e) ? `${xo(e[0], s, c)}${r.modelAuto && !e[1] ? "" : a.value.rangeSeparator}${e[1] ? xo(e[1], s, c) : ""}` : xo(e, s, c);
	}, p = () => {
		let e = (e) => xo(e, a.value.format);
		return Array.isArray(n.value) ? `${e(n.value[0])} ${a.value.rangeSeparator} ${n.value[1] ? e(n.value[1]) : ""}` : "";
	};
	return {
		formatYear: o,
		formatMonth: s,
		formatWeekDay: c,
		formatQuarter: l,
		formatSelectedDate: f,
		formatForTextInput: () => t.isInputFocused && n.value ? Array.isArray(n.value) ? p() : xo(n.value, a.value.format) : f(n.value),
		formatPreview: (e) => f(e, void 0, !0),
		formatQuarterText: u,
		formatDay: d
	};
}, Fl = () => {
	let { rootProps: e } = $(), { formatYear: t, formatMonth: n } = Pl();
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
}, Il = (e) => ({
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
}), Ll = () => ({ boolHtmlAttribute: (e) => e ? !0 : void 0 }), Rl = () => {
	let { getDate: e, rootProps: t, defaults: { textInput: n, startTime: r, timeConfig: i } } = $(), { getTimeObjFromCurrent: o } = jl(), s = N(!1), c = a(() => Array.isArray(r.value) ? r.value[0] : r.value ?? o(e(), {}, i.value.enableSeconds)), l = (e, t) => {
		let n = /[^a-zA-Z]+/g, r = /\D+/g, i = t.split(r), a = e.split(n), o = e.match(n) || [], s = t.match(r) || [], c = "";
		for (let e = 0; e < i.length && e < a.length; e++) {
			e > 0 && s[e - 1] && (c += o[e - 1] || s[e - 1]);
			let t = i[e]?.length;
			c += a[e]?.slice(0, t);
		}
		return c;
	}, u = (n, r, i) => {
		let a = Hs(n, l(r, n), e(), { locale: t.locale });
		return ba(a) && ya(a) ? i || s.value ? a : Q(a, {
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
}, zl = /* @__PURE__ */ ((e) => (e.Input = "input", e.DatePicker = "date-picker", e.Calendar = "calendar", e.DatePickerHeader = "date-picker-header", e.Menu = "menu", e.ActionRow = "action-row", e.TimePicker = "time-picker", e.TimeInput = "time-input", e.PassTrough = "pass-trough", e.MonthPicker = "month-picker", e.YearMode = "year-mode", e.QuarterPicker = "quarter-picker", e.YearPicker = "year-picker", e))(zl || {}), Bl = [
	"time-input",
	"time-picker",
	"pass-trough"
], Vl = [
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
		use: Bl
	},
	{
		name: "hours-overlay-header",
		use: Bl
	},
	{
		name: "minutes-overlay-value",
		use: Bl
	},
	{
		name: "minutes-overlay-header",
		use: Bl
	},
	{
		name: "seconds-overlay-value",
		use: Bl
	},
	{
		name: "seconds-overlay-header",
		use: Bl
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
], Hl = (e, t) => Vl.filter((n) => e[n.name] && n.use.includes(t)).map((e) => e.name), Ul = (e, t) => Vl.map((e) => e.name).concat(t?.filter((e) => e.slot).map((e) => e.slot) ?? []).filter((t) => !!e[t]), Wl = {
	key: 1,
	class: "dp__input_wrap"
}, Gl = [
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
], Kl = {
	key: 1,
	class: "dp--clear-btn"
}, ql = ["aria-label"], Jl = /* @__PURE__ */ p({
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
		let r = n, i = e, { rootEmit: u, inputValue: d, rootProps: p, defaults: { textInput: m, ariaLabels: h, inline: g, config: _, range: v, multiDates: y, ui: b, inputAttrs: C } } = $(), { checkMinMaxRange: w, isValidDate: T } = tl(), { parseFreeInput: E, textPasted: D, createMaskedValue: O, applyMaxValues: A } = Rl(), { checkKeyDown: j, checkStopPropagation: M } = jl(), { boolHtmlAttribute: P } = Ll(), I = U("dp-input"), L = N(null), R = N(!1), z = a(() => ({
			dp__pointer: !p.disabled && !p.readonly && !m.value.enabled,
			dp__disabled: p.disabled,
			dp__input_readonly: !m.value.enabled,
			dp__input: !0,
			dp__input_not_clearable: !C.value.clearable,
			dp__input_icon_pad: !C.value.hideInputIcon,
			dp__input_valid: typeof C.value.state == "boolean" && C.value.state,
			dp__input_invalid: typeof C.value.state == "boolean" && !C.value.state,
			dp__input_focus: R.value || i.isMenuOpen,
			dp__input_reg: !m.value.enabled,
			...b.value.input
		})), B = () => {
			r("set-input-date", null), C && p.autoApply && (r("set-empty-date"), L.value = null);
		}, H = (e) => {
			if (m.value.separators?.length) {
				let t = new RegExp(m.value.separators.map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"));
				return e.split(t);
			}
			return e.split(m.value.rangeSeparator);
		}, ee = (e) => {
			let [t, n] = H(e);
			if (t) {
				let e = E(t.trim(), d.value), r = n ? E(n.trim(), d.value) : void 0;
				if (jo(e, r)) return;
				let i = e && r ? [e, r] : [e];
				w(r, i, 0) && (L.value = e ? i : null);
			}
		}, W = () => {
			D.value = !0;
		}, G = (e) => {
			if (v.value.enabled) ee(e);
			else if (y.value.enabled) {
				let t = e.split(";");
				L.value = t.map((e) => E(e.trim())).filter((e) => !!e);
			} else L.value = E(e, d.value);
		}, K = (e) => {
			let t = typeof e == "string" ? e : e.target?.value, n = m?.value?.maskFormat, a = t;
			if (typeof n == "string") {
				let e = [...n.matchAll(/(YYYY|MM|DD|hh|mm|ss)/g)].map((e) => e[0]), r = t.replace(/\D/g, ""), i = A(r, e);
				a = O(i, n);
			}
			a === "" ? B() : (m.value.openMenu && !i.isMenuOpen && r("open"), G(a), r("set-input-date", L.value)), D.value = !1, d.value = a, u("text-input", e, L.value);
		}, q = (e) => {
			m.value.enabled ? (G(e.target.value), m.value.enterSubmit && T(L.value) && d.value !== "" ? (r("set-input-date", L.value, !0), L.value = null) : m.value.enterSubmit && d.value === "" && (L.value = null, r("clear"))) : re(e);
		}, te = (e, t) => {
			m.value.enabled && m.value.tabSubmit && !t && G(e.target.value), m.value.tabSubmit && T(L.value) && d.value !== "" ? (r("set-input-date", L.value, !0, !0), L.value = null) : m.value.tabSubmit && d.value === "" && (L.value = null, r("clear"));
		}, ne = () => {
			R.value = !0, r("focus"), x().then(() => {
				m.value.enabled && m.value.selectOnFocus && I.value?.select();
			});
		}, re = (e) => {
			if (M(e, _.value, !0), m.value.enabled && m.value.openMenu && !g.value.input) {
				if (m.value.openMenu === "open" && !i.isMenuOpen) return r("open");
				if (m.value.openMenu === "toggle") return r("toggle");
			} else m.value.enabled || r("toggle");
		}, ie = () => {
			r("real-blur"), R.value = !1, (!i.isMenuOpen || g.value.enabled && g.value.input) && r("blur"), (p.autoApply && m.value.enabled && L.value && !i.isMenuOpen || m.value.applyOnBlur) && (r("set-input-date", L.value), r("select-date"), L.value = null);
		}, ae = (e) => {
			M(e, _.value, !0), r("clear");
		}, oe = () => {
			r("close");
		}, se = (e) => {
			if (e.key === "Tab" && te(e), e.key === "Enter" && q(e), e.key === "Escape" && m.value.escClose && oe(), !m.value.enabled) {
				if (e.code === "Tab") return;
				e.preventDefault();
			}
		}, ce = () => {
			I.value?.focus({ preventScroll: !0 });
		}, le = (e) => {
			L.value = e;
		}, ue = (e) => {
			e.key === Jc.tab && te(e, !0);
		};
		return t({
			focusInput: ce,
			setParsedDate: le
		}), (t, n) => (k(), c("div", { onClick: re }, [!t.$slots["dp-input"] && !V(g).enabled ? F(t.$slots, "trigger", { key: 0 }) : s("", !0), !t.$slots.trigger && (!V(g).enabled || V(g).input) ? (k(), c("div", Wl, [
			!t.$slots.trigger && (!V(g).enabled || V(g).enabled && V(g).input) ? F(t.$slots, "dp-input", {
				key: 0,
				value: V(d),
				isMenuOpen: e.isMenuOpen,
				onInput: K,
				onEnter: q,
				onTab: te,
				onClear: ae,
				onBlur: ie,
				onKeypress: se,
				onPaste: W,
				onFocus: ne,
				openMenu: () => t.$emit("open"),
				closeMenu: () => t.$emit("close"),
				toggleMenu: () => t.$emit("toggle")
			}, () => [l("input", {
				id: V(C).id,
				ref: "dp-input",
				"data-test-id": "dp-input",
				name: V(C).name,
				class: S(z.value),
				inputmode: V(C).inputmode,
				placeholder: V(p).placeholder,
				disabled: V(P)(V(p).disabled),
				readonly: V(P)(V(p).readonly),
				required: V(P)(V(C).required),
				value: V(d),
				autocomplete: V(C).autocomplete,
				"aria-label": V(h).input,
				"aria-disabled": V(p).disabled || void 0,
				"aria-invalid": V(C).state === !1 || void 0,
				onInput: K,
				onBlur: ie,
				onFocus: ne,
				onKeypress: se,
				onKeydown: n[0] ||= (e) => se(e),
				onPaste: W,
				onInvalid: n[1] ||= (e) => V(u)("invalid", e)
			}, null, 42, Gl)]) : s("", !0),
			l("div", { onClick: n[4] ||= (e) => r("toggle") }, [t.$slots["input-icon"] && !V(C).hideInputIcon ? (k(), c("span", {
				key: 0,
				class: "dp__input_icon",
				onClick: n[2] ||= (e) => r("toggle")
			}, [F(t.$slots, "input-icon")])) : s("", !0), !t.$slots["input-icon"] && !V(C).hideInputIcon && !t.$slots["dp-input"] ? (k(), o(V(Pc), {
				key: 1,
				"aria-label": V(h)?.calendarIcon,
				class: "dp__input_icon dp__input_icons",
				onClick: n[3] ||= (e) => r("toggle")
			}, null, 8, ["aria-label"])) : s("", !0)]),
			t.$slots["clear-icon"] && (V(C).alwaysClearable || V(d) && V(C).clearable && !V(p).disabled && !V(p).readonly) ? (k(), c("span", Kl, [F(t.$slots, "clear-icon", { clear: ae })])) : s("", !0),
			!t.$slots["clear-icon"] && (V(C).alwaysClearable || V(C).clearable && V(d) && !V(p).disabled && !V(p).readonly) ? (k(), c("button", {
				key: 2,
				"aria-label": V(h)?.clearInput,
				class: "dp--clear-btn",
				type: "button",
				"data-test-id": "clear-input-value-btn",
				onKeydown: n[5] ||= (e) => V(j)(e, () => ae(e), !0, ue),
				onClick: n[6] ||= J((e) => ae(e), ["prevent"])
			}, [f(V(Fc), { class: "dp__input_icons" })], 40, ql)) : s("", !0)
		])) : s("", !0)]));
	}
}), Yl = {
	ref: "action-row",
	class: "dp__action_row"
}, Xl = ["title"], Zl = {
	ref: "action-buttons-container",
	class: "dp__action_buttons",
	"data-dp-element": "action-row"
}, Ql = ["disabled"], $l = /* @__PURE__ */ p({
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
		let r = t, i = e, { rootEmit: o, rootProps: u, modelValue: f, defaults: { actionRow: p, multiCalendars: m, inline: h, range: g, multiDates: _, formats: v } } = $(), { isTimeValid: y, isMonthValid: x } = tl(), { formatPreview: S } = Pl(), { checkKeyDown: T, convertType: E } = jl(), { boolHtmlAttribute: A } = Ll(), j = U("action-buttons-container"), M = U("action-row"), P = N(!1), I = N({});
		D(() => {
			L(), globalThis.addEventListener("resize", L);
		}), O(() => {
			globalThis.removeEventListener("resize", L);
		});
		let L = () => {
			P.value = !1, setTimeout(() => {
				let e = j.value?.getBoundingClientRect(), t = M.value?.getBoundingClientRect();
				e && t && (I.value.maxWidth = `${t.width - e.width - 20}px`), P.value = !0;
			}, 0);
		}, z = a(() => g.value.enabled && !g.value.partialRange && f.value ? f.value.length === 2 : !0), B = a(() => !y.value(f.value) || !x.value(f.value) || !z.value), H = () => {
			let e = v.value.preview;
			return u.timePicker || u.monthPicker, e(E(f.value));
		}, ee = () => {
			let e = f.value;
			return m.value.count > 0 ? `${S(e[0])} - ${S(e[1])}` : [S(e[0]), S(e[1])];
		}, W = a(() => !f.value || !i.menuMount ? "" : typeof v.value.preview == "string" ? Array.isArray(f.value) ? f.value.length === 2 && f.value[1] ? ee() : _.value.enabled ? f.value.map((e) => `${S(e)}`) : u.modelAuto ? `${S(f.value[0])}` : `${S(f.value[0])} -` : S(f.value) : H()), G = () => _.value.enabled ? "; " : " - ", K = a(() => Array.isArray(W.value) ? W.value.join(G()) : W.value), q = () => {
			y.value(f.value) && x.value(f.value) && z.value ? r("select-date") : o("invalid-select");
		};
		return (e, t) => (k(), c("div", Yl, [e.$slots["action-row"] ? F(e.$slots, "action-row", C(b({ key: 0 }, {
			modelValue: V(f),
			disabled: B.value,
			selectDate: () => e.$emit("select-date"),
			closePicker: () => e.$emit("close-picker")
		}))) : (k(), c(n, { key: 1 }, [V(p).showPreview ? (k(), c("div", {
			key: 0,
			class: "dp__selection_preview",
			title: K.value || void 0,
			style: w(I.value)
		}, [e.$slots["action-preview"] && P.value ? F(e.$slots, "action-preview", {
			key: 0,
			value: V(f),
			formatValue: K.value
		}) : s("", !0), !e.$slots["action-preview"] && P.value ? (k(), c(n, { key: 1 }, [d(R(K.value), 1)], 64)) : s("", !0)], 12, Xl)) : s("", !0), l("div", Zl, [e.$slots["action-buttons"] ? F(e.$slots, "action-buttons", {
			key: 0,
			value: V(f),
			selectDate: q,
			selectionDisabled: B.value
		}) : s("", !0), e.$slots["action-buttons"] ? s("", !0) : (k(), c(n, { key: 1 }, [
			!V(h).enabled && V(p).showCancel ? (k(), c("button", {
				key: 0,
				ref: "cancel-btn",
				type: "button",
				"data-dp-action-element": "0",
				class: "dp__action_button dp__action_cancel",
				onClick: t[0] ||= (t) => e.$emit("close-picker"),
				onKeydown: t[1] ||= (t) => V(T)(t, () => e.$emit("close-picker"))
			}, R(V(p).cancelBtnLabel), 545)) : s("", !0),
			V(p).showNow ? (k(), c("button", {
				key: 1,
				type: "button",
				"data-dp-action-element": "0",
				class: "dp__action_button dp__action_cancel",
				onClick: t[2] ||= (t) => e.$emit("select-now"),
				onKeydown: t[3] ||= (t) => V(T)(t, () => e.$emit("select-now"))
			}, R(V(p).nowBtnLabel), 33)) : s("", !0),
			V(p).showSelect ? (k(), c("button", {
				key: 2,
				ref: "select-btn",
				type: "button",
				"data-dp-action-element": "0",
				class: "dp__action_button dp__action_select",
				disabled: V(A)(B.value),
				"data-test-id": "select-button",
				onKeydown: t[4] ||= (e) => V(T)(e, () => q()),
				onClick: q
			}, R(V(p).selectBtnLabel), 41, Ql)) : s("", !0)
		], 64))], 512)], 64))], 512));
	}
}), eu = () => {
	let { rootProps: e, defaults: { multiCalendars: t } } = $();
	return {
		hideNavigationButtons: a(() => (t) => e.hideNavigation?.includes(t)),
		showLeftIcon: a(() => (e) => t.value.count ? t.value.solo ? !0 : e === 0 : !0),
		showRightIcon: a(() => (e) => t.value.count ? t.value.solo ? !0 : e === t.value.count - 1 : !0)
	};
}, tu = [
	"role",
	"aria-label",
	"tabindex"
], nu = { class: "dp__selection_grid_header" }, ru = [
	"aria-selected",
	"aria-disabled",
	"data-dp-action-element",
	"data-dp-element-active",
	"data-test-id",
	"onClick",
	"onKeydown",
	"onMouseover"
], iu = ["aria-label", "data-dp-action-element"], au = /* @__PURE__ */ p({
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
		let r = t, i = e, { setState: o, defaults: { ariaLabels: u, config: f } } = $(), { hideNavigationButtons: p } = eu(), { handleEventPropagation: m, checkKeyDown: h } = jl(), g = U("toggle-button"), _ = U("overlay-container"), v = U("grid-wrap"), y = N(!1), b = N(null), C = N(), T = N(0);
		E(() => {
			b.value = null;
		}), D(async () => {
			await x(), z(), o("arrowNavigationLevel", i.level ?? 1);
		}), O(() => {
			o("arrowNavigationLevel", (i.level ?? 1) - 1);
		});
		let A = a(() => ({
			dp__overlay: !0,
			"dp--overlay-absolute": !i.useRelative,
			"dp--overlay-relative": i.useRelative
		})), j = a(() => i.useRelative ? {
			height: `${i.height}px`,
			width: "var(--dp-menu-min-width)"
		} : void 0), M = a(() => ({ dp__overlay_col: !0 })), I = a(() => ({
			dp__btn: !0,
			dp__button: !0,
			dp__overlay_action: !0,
			dp__over_action_scroll: y.value,
			dp__button_bottom: i.isLast
		})), L = a(() => ({
			dp__overlay_container: !0,
			dp__container_flex: i.items?.length <= 6,
			dp__container_block: i.items?.length > 6
		}));
		K(() => i.items, () => z(!1), { deep: !0 });
		let z = (e = !0) => {
			x().then(() => {
				let t = document.querySelector(`[data-dp-element-active="${i.level ?? 1}"]`), n = le(v), r = le(g), a = le(_), o = r ? r.getBoundingClientRect().height : 0;
				n && (n.getBoundingClientRect().height ? T.value = n.getBoundingClientRect().height - o : T.value = f.value.modeHeight - o), t && a && e && (a.scrollTop = t.offsetTop - a.offsetTop - (T.value / 2 - t.getBoundingClientRect().height) - o);
			});
		}, B = (e) => {
			e.disabled || r("selected", e.value);
		}, H = () => {
			r("toggle"), r("reset-flow");
		}, ee = (e) => {
			f.value.escClose && (H(), m(e, f.value));
		}, W = (e) => {
			C.value = e, r("hover-value", e);
		}, q = (e) => {
			if (e.key === Jc.esc) return ee(e);
		}, ne = (e) => {
			if (e.key === Jc.enter) return H();
		};
		return (t, r) => (k(), c("div", {
			ref: "grid-wrap",
			class: S(A.value),
			style: w(j.value),
			role: e.useRelative ? void 0 : "dialog",
			"aria-label": e.overlayLabel,
			tabindex: e.useRelative ? void 0 : "0",
			onKeydown: q,
			onClick: r[0] ||= J(() => {}, ["prevent"])
		}, [l("div", {
			ref: "overlay-container",
			class: S(L.value),
			style: w({ "--dp-overlay-height": `${T.value}px` }),
			role: "grid"
		}, [l("div", nu, [F(t.$slots, "header")]), F(t.$slots, "overlay", {}, () => [(k(!0), c(n, null, P(e.items, (r, i) => (k(), c("div", {
			key: i,
			class: S(["dp__overlay_row", { dp__flex_row: e.items.length >= 3 }]),
			role: "row"
		}, [(k(!0), c(n, null, P(r, (n) => (k(), c("div", {
			key: n.value,
			role: "gridcell",
			class: S(M.value),
			"aria-selected": n.active || void 0,
			"aria-disabled": n.disabled || void 0,
			"data-dp-action-element": e.level ?? 1,
			"data-dp-element-active": n.active ? e.level ?? 1 : void 0,
			tabindex: "0",
			"data-test-id": n.text,
			onClick: J((e) => B(n), ["prevent"]),
			onKeydown: (e) => V(h)(e, () => B(n), !0),
			onMouseover: (e) => W(n.value)
		}, [l("div", { class: S(n.className) }, [F(t.$slots, "item", { item: n }, () => [d(R(n.text), 1)])], 2)], 42, ru))), 128))], 2))), 128))])], 6), t.$slots["button-icon"] ? te((k(), c("button", {
			key: 0,
			ref: "toggle-button",
			type: "button",
			"aria-label": V(u)?.toggleOverlay,
			class: S(I.value),
			tabindex: "0",
			"data-dp-action-element": e.level ?? 1,
			onClick: H,
			onKeydown: ne
		}, [F(t.$slots, "button-icon")], 42, iu)), [[G, !V(p)(e.type)]]) : s("", !0)], 46, tu));
	}
}), ou = ["data-dp-mobile"], su = /* @__PURE__ */ p({
	__name: "InstanceWrap",
	props: {
		stretch: { type: Boolean },
		collapse: { type: Boolean }
	},
	setup(e) {
		let { defaults: { multiCalendars: t } } = $(), { isMobile: n } = Nl(), r = a(() => t.value.count > 0 ? [...Array(t.value.count).keys()] : [0]);
		return (i, a) => (k(), c("div", {
			class: S({
				dp__menu_inner: !e.stretch,
				"dp--menu--inner-stretched": e.stretch,
				dp__flex_display: V(t).count > 0,
				"dp--flex-display-collapsed": e.collapse
			}),
			"data-dp-mobile": V(n)
		}, [F(i.$slots, "default", {
			instances: r.value,
			wrapClass: { dp__instance_calendar: V(t).count > 0 }
		})], 10, ou));
	}
}), cu = [
	"data-dp-element",
	"aria-label",
	"aria-disabled"
], lu = /* @__PURE__ */ p({
	__name: "ArrowBtn",
	props: {
		ariaLabel: {},
		elName: {},
		disabled: { type: Boolean }
	},
	emits: ["activate", "set-ref"],
	setup(e, { emit: t }) {
		let { checkKeyDown: n } = jl(), r = t;
		return (t, i) => (k(), c("button", {
			ref: "arrow-btn",
			type: "button",
			"data-dp-element": e.elName,
			"data-dp-action-element": "0",
			class: "dp__btn dp--arrow-btn-nav",
			tabindex: "0",
			"aria-label": e.ariaLabel,
			"aria-disabled": e.disabled || void 0,
			onClick: i[0] ||= (e) => r("activate"),
			onKeydown: i[1] ||= (e) => V(n)(e, () => r("activate"), !0)
		}, [l("span", { class: S(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }]) }, [F(t.$slots, "default")], 2)], 40, cu));
	}
}), uu = ["aria-label", "data-test-id"], du = /* @__PURE__ */ p({
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
		let r = t, p = e, { showRightIcon: m, showLeftIcon: h } = eu(), { rootProps: g, defaults: { config: _, ariaLabels: v, ui: y } } = $(), { showTransition: b, transitionName: x } = $c(), { formatYear: C } = Pl(), { boolHtmlAttribute: w } = Ll(), T = N(!1), E = a(() => C(p.year)), D = (e = !1, t) => {
			T.value = !T.value, r("toggle-year-picker", {
				flow: e,
				show: t
			});
		}, O = (e) => {
			T.value = !1, r("year-select", e);
		}, A = (e = !1) => {
			r("handle-year", e);
		};
		return (t, r) => (k(), c(n, null, [l("div", { class: S(["dp--year-mode-picker", { "dp--hidden-el": T.value }]) }, [
			V(h)(e.instance) ? (k(), o(lu, {
				key: 0,
				ref: "mpPrevIconRef",
				"aria-label": V(v)?.prevYear,
				disabled: V(w)(e.isDisabled(!1)),
				class: S(V(y)?.navBtnPrev),
				onActivate: r[0] ||= (e) => A(!1)
			}, {
				default: q(() => [t.$slots["arrow-left"] ? F(t.$slots, "arrow-left", { key: 0 }) : s("", !0), t.$slots["arrow-left"] ? s("", !0) : (k(), o(V(Ic), { key: 1 }))]),
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
				"aria-label": `${e.year}-${V(v)?.openYearsOverlay}`,
				"data-test-id": `year-mode-btn-${e.instance}`,
				"data-dp-action-element": "0",
				onClick: r[1] ||= () => D(!1),
				onKeydown: r[2] ||= ne(J(() => D(!1), ["prevent"]), ["enter"])
			}, [t.$slots.year ? F(t.$slots, "year", {
				key: 0,
				text: E.value,
				value: e.year
			}) : s("", !0), t.$slots.year ? s("", !0) : (k(), c(n, { key: 1 }, [d(R(e.year), 1)], 64))], 40, uu),
			V(m)(e.instance) ? (k(), o(lu, {
				key: 1,
				ref: "mpNextIconRef",
				"aria-label": V(v)?.nextYear,
				disabled: V(w)(e.isDisabled(!0)),
				class: S(V(y)?.navBtnNext),
				onActivate: r[3] ||= (e) => A(!0)
			}, {
				default: q(() => [t.$slots["arrow-right"] ? F(t.$slots, "arrow-right", { key: 0 }) : s("", !0), t.$slots["arrow-right"] ? s("", !0) : (k(), o(V(Lc), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : s("", !0)
		], 2), f(i, {
			name: V(x)(e.showYearPicker),
			css: V(b)
		}, {
			default: q(() => [e.showYearPicker ? (k(), o(au, {
				key: 0,
				items: e.items,
				config: V(_),
				"is-last": V(g).autoApply && !V(_).keepActionRow,
				"overlay-label": V(v)?.yearPicker?.(!0),
				type: "year",
				onToggle: D,
				onSelected: r[4] ||= (e) => O(e)
			}, u({
				"button-icon": q(() => [t.$slots["calendar-icon"] ? F(t.$slots, "calendar-icon", { key: 0 }) : s("", !0), t.$slots["calendar-icon"] ? s("", !0) : (k(), o(V(Pc), { key: 1 }))]),
				_: 2
			}, [t.$slots["year-overlay-value"] ? {
				name: "item",
				fn: q(({ item: e }) => [F(t.$slots, "year-overlay-value", {
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
}), fu = (e) => {
	let { getDate: t, rootEmit: n, state: r, month: i, year: o, modelValue: s, calendars: c, rootProps: l, defaults: { multiCalendars: u, range: d, safeDates: f, filters: p, highlight: m } } = $(), { resetDate: h, getYearFromDate: g, checkHighlightYear: _, groupListAndMap: v } = Ml(), { getYears: y } = Fl(), { validateMonthYear: b, checkMinMaxValue: x } = tl(), S = N([!1]), C = a(() => y()), w = a(() => (e, n) => {
		let r = Q(h(t()), {
			month: i.value(e),
			year: o.value(e)
		}), a = n ? Aa(r) : ja(r);
		return b(a, l.preventMinMaxNavigation, n);
	}), T = () => Array.isArray(s.value) && u.value.solo && s.value[1], E = () => {
		for (let e = 0; e < u.value.count; e++) if (e === 0) c.value[e] = c.value[0];
		else if (e === u.value.count - 1 && T()) c.value[e] = {
			month: ko(s.value[1]),
			year: Z(s.value[1])
		};
		else {
			let n = Q(t(), c.value[e - 1]);
			c.value[e] = {
				month: ko(n),
				year: Z(_a(n, 1))
			};
		}
	}, O = (e) => {
		if (!e) return E();
		let n = Q(t(), c.value[e]);
		return c.value[0].year = Z(yc(n, u.value.count - 1)), E();
	}, k = (e, t) => {
		let n = wa(t, e);
		return d.value.showLastInRange && n > 1 ? t : e;
	}, A = (e) => l.focusStartDate || u.value.solo ? e[0] : e[1] ? k(e[0], e[1]) : e[0], j = () => {
		if (s.value) {
			let e = Array.isArray(s.value) ? A(s.value) : s.value;
			c.value[0] = {
				month: ko(e),
				year: Z(e)
			};
		}
	}, M = () => {
		j(), u.value.count && E();
	};
	K(s, (e, t) => {
		r.isTextInputDate && JSON.stringify(e ?? {}) !== JSON.stringify(t ?? {}) && M();
	}), D(() => {
		M();
	});
	let P = (e, t) => {
		c.value[t].year = e, n("update-month-year", {
			instance: t,
			year: e,
			month: c.value[t].month
		}), u.value.count && !u.value.solo && O(t);
	}, F = a(() => (e) => v(C.value, (t) => ({
		active: o.value(e) === t.value,
		disabled: x(t.value, g(f.value.minDate), g(f.value.maxDate)) || p.value.years?.includes(o.value(e)),
		highlighted: _(m.value, t.value)
	}))), I = (e, t) => {
		P(e, t), R(t);
	}, L = (e, t = !1) => {
		if (!w.value(e, t)) {
			let n = t ? o.value(e) + 1 : o.value(e) - 1;
			P(n, e);
		}
	}, R = (t, r = !1, i) => {
		r || e("reset-flow"), i === void 0 ? S.value[t] = !S.value[t] : S.value[t] = i, S.value[t] ? n("overlay-toggle", {
			open: !0,
			overlay: Gc.year
		}) : n("overlay-toggle", {
			open: !1,
			overlay: Gc.year
		});
	};
	return {
		isDisabled: w,
		groupedYears: F,
		showYearPicker: S,
		selectYear: P,
		setStartDate: () => {
			l.startDate && (s.value && l.focusStartDate || !s.value) && P(Z(t(l.startDate)), 0);
		},
		toggleYearPicker: R,
		handleYearSelect: I,
		handleYear: L
	};
}, pu = () => {
	let { isDateAfter: e, isDateBefore: t, isDateEqual: n } = Ml(), { getDate: r, rootEmit: i, rootProps: a, modelValue: o, defaults: { range: s } } = $();
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
}, mu = (e, t) => {
	let { getDate: n, rootEmit: r, state: i, calendars: o, year: s, modelValue: c, rootProps: l, defaults: { range: u, highlight: d, safeDates: f, filters: p, multiDates: m } } = $();
	el(() => {
		i.isTextInputDate && L(Z(n(l.startDate)), 0);
	});
	let { checkMinMaxRange: h, checkMinMaxValue: g } = tl(), { isDateBetween: _, resetDateTime: v, resetDate: y, getMinMonth: b, getMaxMonth: S, checkHighlightMonth: C, groupListAndMap: w } = Ml(), { checkRangeAutoApply: T, getRangeWithFixedDate: E, handleMultiDatesSelect: O, setMonthOrYearRange: k, setPresetDate: A } = pu(), { padZero: j } = jl(), { getMonths: M, isOutOfYearRange: P } = Fl(), F = a(() => M()), I = N(null), { selectYear: L, groupedYears: R, showYearPicker: z, toggleYearPicker: B, handleYearSelect: V, handleYear: H, isDisabled: ee, setStartDate: U } = fu(t);
	D(() => {
		U();
	});
	let W = (e) => e ? {
		month: ko(e),
		year: Z(e)
	} : {
		month: null,
		year: null
	}, G = () => c.value ? Array.isArray(c.value) ? c.value.map((e) => W(e)) : W(c.value) : W(), K = (e, t) => {
		let n = o.value[e], r = G();
		return Array.isArray(r) ? r.some((e) => e.year === n?.year && e.month === t) : n?.year === r.year && t === r.month;
	}, q = (e, t, n) => {
		let r = G();
		return Array.isArray(r) ? s.value(t) === r[n]?.year && e === r[n]?.month : !1;
	}, te = (e, t) => {
		if (u.value.enabled) {
			let r = G();
			if (Array.isArray(c.value) && Array.isArray(r)) {
				let r = q(e, t, 0) || q(e, t, 1), i = Q(y(n()), {
					month: e,
					year: s.value(t)
				});
				return _(c.value, I.value, i) && !r;
			}
			return !1;
		}
		return !1;
	}, ne = a(() => (e) => w(F.value, (t) => ({
		active: K(e, t.value),
		disabled: g(t.value, b(s.value(e), f.value.minDate), S(s.value(e), f.value.maxDate)) || de(f.value.disabledDates, s.value(e), t.value) || p.value.months?.includes(t.value) || !fe(f.value.allowedDates, s.value(e), t.value) || P(s.value(e)),
		isBetween: te(t.value, e),
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
		u.value.fixedEnd || u.value.fixedStart ? c.value = E(r) : c.value ? h(r, c.value) && (c.value = k(J(e, n))) : c.value = [J(e, n)], x().then(() => {
			T(c.value, t, c.value.length < 2);
		});
	}, ae = (e, n) => {
		O(J(e, n), m.value.limit), t("auto-apply", !0);
	}, oe = (e, t) => (o.value[t].month = e, ce(t, o.value[t].year, e), m.value.enabled ? ae(e, t) : u.value.enabled ? ie(e, t) : re(e, t)), se = (e, t) => {
		L(e, t), ce(t, e, null);
	}, ce = (e, t, n) => {
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
	}, le = (e, t) => {
		I.value = J(e, t);
	}, ue = (e) => {
		A({ value: e }), t("auto-apply");
	}, de = (e, t, r) => {
		if (e instanceof Map) {
			let n = `${j(r + 1)}-${t}`;
			return e.size ? e.has(n) : !1;
		}
		return typeof e == "function" && e(v(Q(n(), {
			month: r,
			year: t
		}), !0));
	}, fe = (e, t, n) => {
		if (e instanceof Map) {
			let r = `${j(n + 1)}-${t}`;
			return !e.size || e.has(r);
		}
		return !0;
	};
	return {
		groupedMonths: ne,
		groupedYears: R,
		year: s,
		isDisabled: ee,
		showYearPicker: z,
		modelValue: c,
		toggleYearPicker: B,
		handleYearSelect: V,
		handleYear: H,
		presetDate: ue,
		setHoverDate: le,
		selectMonth: oe,
		selectYear: se,
		getModelMonthYear: G
	};
}, hu = /* @__PURE__ */ p({
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
		let i = r, a = e, l = ee(), { rootProps: d, defaults: { config: p } } = $(), m = Hl(l, zl.YearMode);
		D(() => {
			i("mount");
		});
		let { groupedMonths: h, groupedYears: g, year: _, isDisabled: v, showYearPicker: y, modelValue: x, presetDate: C, setHoverDate: w, selectMonth: T, selectYear: E, toggleYearPicker: O, handleYearSelect: A, handleYear: j, getModelMonthYear: M } = mu(a, i);
		return t({
			getSidebarProps: () => ({
				modelValue: x,
				year: _,
				getModelMonthYear: M,
				selectMonth: T,
				selectYear: E,
				handleYear: j
			}),
			presetDate: C,
			toggleYearPicker: (e) => O(0, e)
		}), (t, r) => (k(), o(su, {
			collapse: e.collapse,
			stretch: ""
		}, {
			default: q(({ instances: r, wrapClass: i }) => [(k(!0), c(n, null, P(r, (n) => (k(), c("div", {
				key: n,
				class: S(i)
			}, [t.$slots["top-extra"] ? F(t.$slots, "top-extra", {
				key: 0,
				value: V(x)
			}) : s("", !0), F(t.$slots, "month-year", b({ ref_for: !0 }, {
				year: V(_),
				months: V(h)(n),
				years: V(g)(n),
				selectMonth: V(T),
				selectYear: V(E),
				instance: n
			}), () => [f(au, {
				items: V(h)(n),
				"is-last": V(d).autoApply && !V(p).keepActionRow,
				height: V(p).modeHeight,
				"no-overlay-focus": !!(e.noOverlayFocus || V(d).textInput),
				"use-relative": "",
				level: 0,
				type: "month",
				onSelected: (e) => V(T)(e, n),
				onHoverValue: (e) => V(w)(e, n)
			}, u({
				header: q(() => [f(du, {
					items: V(g)(n),
					instance: n,
					"show-year-picker": V(y)[n],
					year: V(_)(n),
					"is-disabled": (e) => V(v)(n, e),
					onHandleYear: (e) => V(j)(n, e),
					onYearSelect: (e) => V(A)(e, n),
					onToggleYearPicker: (e) => V(O)(n, e?.flow, e?.show)
				}, u({ _: 2 }, [P(V(m), (e, n) => ({
					name: e,
					fn: q((n) => [F(t.$slots, e, b({ ref_for: !0 }, n))])
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
				fn: q(({ item: e }) => [F(t.$slots, "month-overlay-value", {
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
}), gu = (e, t) => {
	let { rootEmit: n, getDate: r, state: i, modelValue: o, rootProps: s, defaults: { highlight: c, multiDates: l, filters: u, range: d, safeDates: f } } = $(), { getYears: p } = Fl(), { isDateBetween: m, resetDate: h, resetDateTime: g, getYearFromDate: _, checkHighlightYear: v, groupListAndMap: y } = Ml(), { checkRangeAutoApply: b, setMonthOrYearRange: S } = pu(), { checkMinMaxValue: C, checkMinMaxRange: w } = tl();
	el(() => {
		i.isTextInputDate && (E.value = Z(r(s.startDate)));
	});
	let T = N(null), E = N();
	D(() => {
		s.startDate && (o.value && s.focusStartDate || !o.value) && (E.value = Z(r(s.startDate)));
	});
	let O = (e) => Array.isArray(o.value) ? o.value.some((t) => Z(t) === e) : o.value ? Z(o.value) === e : !1, k = (e) => d.value.enabled && Array.isArray(o.value) ? m(o.value, T.value, P(e)) : !1, A = (e) => !f.value.allowedDates?.size || f.value.allowedDates.has(`${e}`), j = (e) => f.value.disabledDates instanceof Map ? f.value.disabledDates.size ? f.value.disabledDates.has(`${e}`) : !1 : typeof f.value.disabledDates != "function" || f.value.disabledDates(gc(g(ja(r())), e)), M = a(() => y(p(), (e) => {
		let t = O(e.value);
		return {
			active: t,
			disabled: C(e.value, _(f.value.minDate), _(f.value.maxDate)) || u.value.years.includes(e.value) || !A(e.value) || j(e.value),
			isBetween: k(e.value) && !t,
			highlighted: v(c.value, e.value)
		};
	})), P = (e) => gc(h(ja(r())), e);
	return {
		groupedYears: M,
		focusYear: E,
		setHoverValue: (e) => {
			T.value = gc(h(r()), e);
		},
		selectYear: (e) => {
			if (n("update-month-year", {
				instance: 0,
				year: e,
				month: NaN
			}), l.value.enabled) return o.value ? Array.isArray(o.value) && ((o.value?.map((e) => Z(e))).includes(e) ? o.value = o.value.filter((t) => Z(t) !== e) : o.value.push(gc(g(r()), e))) : o.value = [gc(g(ja(r())), e)], t("auto-apply", !0);
			d.value.enabled ? w(P(e), o.value) && (o.value = S(P(e)), x().then(() => {
				b(o.value, t, o.value.length < 2);
			})) : (o.value = P(e), t("auto-apply"));
		}
	};
}, _u = /* @__PURE__ */ p({
	__name: "YearPicker",
	props: {
		flowStep: {},
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["reset-flow", "auto-apply"],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = e, { modelValue: a, defaults: { config: l }, rootProps: d } = $(), { groupedYears: f, focusYear: p, selectYear: m, setHoverValue: h } = gu(i, r);
		return t({ getSidebarProps: () => ({
			modelValue: a,
			selectYear: m
		}) }), (t, n) => (k(), c("div", null, [t.$slots["top-extra"] ? F(t.$slots, "top-extra", {
			key: 0,
			value: V(a)
		}) : s("", !0), t.$slots["month-year"] ? F(t.$slots, "month-year", C(b({ key: 1 }, {
			years: V(f),
			selectYear: V(m)
		}))) : (k(), o(au, {
			key: 2,
			items: V(f),
			"is-last": V(d).autoApply && !V(l).keepActionRow,
			height: V(l).modeHeight,
			"no-overlay-focus": !!(e.noOverlayFocus || V(d).textInput),
			"focus-value": V(p),
			type: "year",
			"use-relative": "",
			onSelected: V(m),
			onHoverValue: V(h)
		}, u({ _: 2 }, [t.$slots["year-overlay-value"] ? {
			name: "item",
			fn: q(({ item: e }) => [F(t.$slots, "year-overlay-value", {
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
}), vu = {
	key: 0,
	class: "dp__time_input"
}, yu = ["data-compact", "data-collapsed"], bu = [
	"data-test-id",
	"aria-label",
	"data-dp-action-element",
	"onKeydown",
	"onClick",
	"onMousedown"
], xu = [
	"aria-label",
	"disabled",
	"data-dp-action-element",
	"data-test-id",
	"onKeydown",
	"onClick"
], Su = [
	"data-test-id",
	"aria-label",
	"data-dp-action-element",
	"onKeydown",
	"onClick",
	"onMousedown"
], Cu = { key: 0 }, wu = [
	"aria-label",
	"data-dp-action-element",
	"data-compact"
], Tu = /* @__PURE__ */ p({
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
		let p = r, m = e, { getDate: h, rootEmit: g, rootProps: _, defaults: { ariaLabels: v, filters: y, config: b, range: x, multiCalendars: C, timeConfig: w } } = $(), { checkKeyDown: T, hoursToAmPmHours: E } = jl(), { boolHtmlAttribute: O } = Ll(), { sanitizeTime: A, groupListAndMap: M } = Ml(), { transitionName: I, showTransition: z } = $c(), B = j({
			hours: !1,
			minutes: !1,
			seconds: !1
		}), H = N("AM"), ee = N(null), U = N(), W = N(!1);
		D(() => {
			p("mounted");
		});
		let G = (e) => Q(h(), {
			hours: e.hours,
			minutes: e.minutes,
			seconds: w.value.enableSeconds ? e.seconds : 0,
			milliseconds: 0
		}), K = a(() => _.timePicker || w.value.timePickerInline ? 0 : 1), te = a(() => (e) => pe(e, m[e]) || J(e, m[e])), ne = a(() => ({
			hours: m.hours,
			minutes: m.minutes,
			seconds: m.seconds
		})), J = (e, t) => x.value.enabled && !x.value.disableTimeRangeValidation ? !m.validateTime(e, t) : !1, re = (e, t) => {
			if (x.value.enabled && !x.value.disableTimeRangeValidation) {
				let n = t ? +w.value[`${e}Increment`] : -+w.value[`${e}Increment`], r = m[e] + n;
				return !m.validateTime(e, r);
			}
			return !1;
		}, ie = a(() => (e) => !ve(+m[e] + +w.value[`${e}Increment`], e) || re(e, !0)), ae = a(() => (e) => !ve(m[e] - +w.value[`${e}Increment`], e) || re(e, !1)), oe = (e, t) => aa(Q(h(), e), t), se = (e, t) => vc(Q(h(), e), t), ce = a(() => ({
			dp__time_col: !0,
			dp__time_col_block: !w.value.timePickerInline,
			dp__time_col_reg_block: !w.value.enableSeconds && w.value.is24 && !w.value.timePickerInline,
			dp__time_col_reg_inline: !w.value.enableSeconds && w.value.is24 && w.value.timePickerInline,
			dp__time_col_reg_with_button: !w.value.enableSeconds && !w.value.is24,
			dp__time_col_sec: w.value.enableSeconds && w.value.is24,
			dp__time_col_sec_with_button: w.value.enableSeconds && !w.value.is24
		})), le = a(() => w.value.timePickerInline && x.value.enabled && !C.value.count), ue = a(() => {
			let e = [{ type: "hours" }];
			return w.value.enableMinutes && e.push({
				type: "",
				separator: !0
			}, { type: "minutes" }), w.value.enableSeconds && e.push({
				type: "",
				separator: !0
			}, { type: "seconds" }), e;
		}), de = a(() => ue.value.filter((e) => !e.separator)), fe = a(() => (e) => {
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
		}), pe = (e, t) => {
			if (!m.disabledTimesConfig) return !1;
			let n = m.disabledTimesConfig(m.order, e === "hours" ? t : void 0);
			return !n[e] || !!n[e]?.includes(t);
		}, me = (e, t) => t !== "hours" || H.value === "AM" ? e : e + 12, he = (e) => {
			let t = w.value.is24 ? 24 : 12, n = e === "hours" ? t : 60, r = +w.value[`${e}GridIncrement`], i = e === "hours" && !w.value.is24 ? r : 0, a = [];
			for (let t = i; t < n; t += r) a.push({
				value: w.value.is24 ? t : me(t, e),
				text: t < 10 ? `0${t}` : `${t}`
			});
			return e === "hours" && !w.value.is24 && a.unshift({
				value: H.value === "PM" ? 12 : 0,
				text: "12"
			}), M(a, (t) => ({
				active: !1,
				disabled: y.value.times[e].includes(t.value) || !ve(t.value, e) || pe(e, t.value) || J(e, t.value)
			}));
		}, ge = (e) => e >= 0 ? e : 59, _e = (e) => e >= 0 ? e : 23, ve = (e, t) => {
			let n = _.minTime ? G(A(_.minTime)) : null, r = _.maxTime ? G(A(_.maxTime)) : null, i = G(A(ne.value, t, t === "minutes" || t === "seconds" ? ge(e) : _e(e)));
			return n && r ? (Mo(i, r) || No(i, r)) && (jo(i, n) || No(i, n)) : n ? jo(i, n) || No(i, n) : !r || Mo(i, r) || No(i, r);
		}, ye = (e) => w.value[`no${e[0].toUpperCase() + e.slice(1)}Overlay`], be = (e) => {
			ye(e) || (B[e] = !B[e], B[e] ? (W.value = !0, p("overlay-opened", e)) : (W.value = !1, p("overlay-closed", e)));
		}, Y = (e) => e === "hours" ? Eo : e === "minutes" ? Oo : Ao, xe = () => {
			U.value && clearTimeout(U.value);
		}, Se = (e, t = !0, n) => {
			let r = t ? oe : se, i = t ? +w.value[`${e}Increment`] : -+w.value[`${e}Increment`];
			ve(+m[e] + i, e) && p(`update:${e}`, Y(e)(r({ [e]: +m[e] }, { [e]: +w.value[`${e}Increment`] }))), !n?.keyboard && b.value.timeArrowHoldThreshold && (U.value = setTimeout(() => {
				Se(e, t);
			}, b.value.timeArrowHoldThreshold));
		}, Ce = (e) => w.value.is24 ? e : (e >= 12 ? H.value = "PM" : H.value = "AM", E(e)), we = () => {
			H.value === "PM" ? (H.value = "AM", p("update:hours", m.hours - 12)) : (H.value = "PM", p("update:hours", m.hours + 12)), g("am-pm-change", H.value);
		}, Te = (e) => {
			B[e] = !0;
		}, Ee = (e, t) => (be(e), p(`update:${e}`, t));
		return t({ openChildCmp: Te }), (e, t) => V(_).disabled ? s("", !0) : (k(), c("div", vu, [
			(k(!0), c(n, null, P(ue.value, (r, i) => (k(), c("div", {
				key: i,
				class: S(ce.value),
				"data-compact": le.value && !V(w).enableSeconds,
				"data-collapsed": le.value && V(w).enableSeconds
			}, [r.separator ? (k(), c(n, { key: 0 }, [W.value ? s("", !0) : (k(), c(n, { key: 0 }, [d(":")], 64))], 64)) : (k(), c(n, { key: 1 }, [
				l("button", {
					type: "button",
					class: S({
						dp__btn: !0,
						dp__inc_dec_button: !V(w).timePickerInline,
						dp__inc_dec_button_inline: V(w).timePickerInline,
						dp__tp_inline_btn_top: V(w).timePickerInline,
						dp__inc_dec_button_disabled: ie.value(r.type),
						"dp--hidden-el": W.value
					}),
					"data-test-id": `${r.type}-time-inc-btn-${m.order}`,
					"aria-label": V(v)?.incrementValue(r.type),
					tabindex: "0",
					"data-dp-action-element": K.value,
					onKeydown: (e) => V(T)(e, () => Se(r.type, !0, { keyboard: !0 }), !0),
					onClick: (e) => V(b).timeArrowHoldThreshold ? void 0 : Se(r.type, !0),
					onMousedown: (e) => V(b).timeArrowHoldThreshold ? Se(r.type, !0) : void 0,
					onMouseup: xe
				}, [V(w).timePickerInline ? F(e.$slots, "tp-inline-arrow-up", { key: 1 }, () => [t[2] ||= l("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), t[3] ||= l("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1)]) : F(e.$slots, "arrow-up", { key: 0 }, () => [f(V(zc))])], 42, bu),
				l("button", {
					type: "button",
					"aria-label": `${fe.value(r.type).text}-${V(v)?.openTpOverlay(r.type)}`,
					class: S({
						dp__time_display: !0,
						dp__time_display_block: !V(w).timePickerInline,
						dp__time_display_inline: V(w).timePickerInline,
						"dp--time-invalid": te.value(r.type),
						"dp--time-overlay-btn": !te.value(r.type),
						"dp--hidden-el": W.value
					}),
					disabled: V(O)(ye(r.type)),
					tabindex: "0",
					"data-dp-action-element": K.value,
					"data-test-id": `${r.type}-toggle-overlay-btn-${m.order}`,
					onKeydown: (e) => V(T)(e, () => be(r.type), !0),
					onClick: (e) => be(r.type)
				}, [F(e.$slots, r.type, {
					text: fe.value(r.type).text,
					value: fe.value(r.type).value
				}, () => [d(R(fe.value(r.type).text), 1)])], 42, xu),
				l("button", {
					type: "button",
					class: S({
						dp__btn: !0,
						dp__inc_dec_button: !V(w).timePickerInline,
						dp__inc_dec_button_inline: V(w).timePickerInline,
						dp__tp_inline_btn_bottom: V(w).timePickerInline,
						dp__inc_dec_button_disabled: ae.value(r.type),
						"dp--hidden-el": W.value
					}),
					"data-test-id": `${r.type}-time-dec-btn-${m.order}`,
					"aria-label": V(v)?.decrementValue(r.type),
					tabindex: "0",
					"data-dp-action-element": K.value,
					onKeydown: (e) => V(T)(e, () => Se(r.type, !1, { keyboard: !0 }), !0),
					onClick: (e) => V(b).timeArrowHoldThreshold ? void 0 : Se(r.type, !1),
					onMousedown: (e) => V(b).timeArrowHoldThreshold ? Se(r.type, !1) : void 0,
					onMouseup: xe
				}, [V(w).timePickerInline ? F(e.$slots, "tp-inline-arrow-down", { key: 1 }, () => [t[4] ||= l("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), t[5] ||= l("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1)]) : F(e.$slots, "arrow-down", { key: 0 }, () => [f(V(Bc))])], 42, Su)
			], 64))], 10, yu))), 128)),
			V(w).is24 ? s("", !0) : (k(), c("div", Cu, [F(e.$slots, "am-pm-button", {
				toggle: we,
				value: H.value
			}, () => [l("button", {
				ref_key: "amPmButton",
				ref: ee,
				type: "button",
				class: "dp__pm_am_button",
				role: "button",
				"aria-label": V(v)?.amPmButton,
				tabindex: "0",
				"data-dp-action-element": K.value,
				"data-compact": le.value,
				onClick: we,
				onKeydown: t[0] ||= (e) => V(T)(e, () => we(), !0)
			}, R(H.value), 41, wu)])])),
			(k(!0), c(n, null, P(de.value, (n, r) => (k(), o(i, {
				key: r,
				name: V(I)(B[n.type]),
				css: V(z)
			}, {
				default: q(() => [B[n.type] ? (k(), o(au, {
					key: 0,
					items: he(n.type),
					"is-last": V(_).autoApply && !V(b).keepActionRow,
					type: n.type,
					"aria-labels": V(v),
					level: V(w).timePickerInline || V(_).timePicker ? 1 : 2,
					"overlay-label": V(v).timeOverlay?.(n.type),
					onSelected: (e) => Ee(n.type, e),
					onToggle: (e) => be(n.type),
					onResetFlow: t[1] ||= (t) => e.$emit("reset-flow")
				}, u({
					"button-icon": q(() => [F(e.$slots, "clock-icon", {}, () => [e.$slots["clock-icon"] ? s("", !0) : (k(), o(L(V(w).timePickerInline ? V(Pc) : V(Rc)), { key: 0 }))])]),
					_: 2
				}, [e.$slots[`${n.type}-overlay-value`] ? {
					name: "item",
					fn: q(({ item: t }) => [F(e.$slots, `${n.type}-overlay-value`, {
						text: t.text,
						value: t.value
					})]),
					key: "0"
				} : void 0, e.$slots[`${n.type}-overlay-header`] ? {
					name: "header",
					fn: q(() => [F(e.$slots, `${n.type}-overlay-header`, { toggle: () => be(n.type) })]),
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
}), Eu = ["data-dp-mobile"], Du = ["aria-label", "tabindex"], Ou = [
	"role",
	"aria-label",
	"tabindex"
], ku = ["aria-label"], Au = /* @__PURE__ */ p({
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
		let d = r, p = e, { rootEmit: m, setState: h, modelValue: g, rootProps: _, defaults: { ariaLabels: v, textInput: y, config: C, range: T, timeConfig: E } } = $(), { isModelAuto: O } = Ml(), { checkKeyDown: A, findFocusableEl: j } = jl(), { transitionName: M, showTransition: I } = $c(), { hideNavigationButtons: L } = eu(), { isMobile: R } = Nl(), z = ee(), B = U("overlay"), H = U("close-tp-btn"), W = U("tp-input"), K = N(!1);
		D(() => {
			d("mount");
		});
		let ne = a(() => T.value.enabled && _.modelAuto ? O(g.value) : !0), J = N(!1), re = (e) => ({
			hours: Array.isArray(p.hours) ? p.hours[e] : p.hours,
			minutes: Array.isArray(p.minutes) ? p.minutes[e] : p.minutes,
			seconds: Array.isArray(p.seconds) ? p.seconds[e] : p.seconds
		}), ie = a(() => {
			let e = [];
			if (T.value.enabled) for (let t = 0; t < 2; t++) e.push(re(t));
			else e.push(re(0));
			return e;
		}), ae = (e, t = !1, n = "") => {
			t || d("reset-flow"), J.value = e, h("arrowNavigationLevel", +!!e), m("overlay-toggle", {
				open: e,
				overlay: Gc.time
			}), x(() => {
				n !== "" && W.value?.[0] && W.value[0].openChildCmp(n);
			});
		}, oe = a(() => ({
			dp__btn: !0,
			dp__button: !0,
			dp__button_bottom: _.autoApply && !C.value.keepActionRow
		})), se = Hl(z, zl.TimeInput), ce = (e, t, n) => T.value.enabled ? t === 0 ? [e, ie.value[1][n]] : [ie.value[0][n], e] : e, le = (e) => {
			d("update:hours", e);
		}, ue = (e) => {
			d("update:minutes", e);
		}, de = (e) => {
			d("update:seconds", e);
		}, fe = () => {
			if (B.value && !y.value.enabled && !p.noOverlayFocus) {
				let e = j(B.value);
				e && e.focus({ preventScroll: !0 });
			}
		}, pe = (e) => {
			K.value = !1, m("overlay-toggle", {
				open: !1,
				overlay: e
			});
		}, me = (e) => {
			K.value = !0, m("overlay-toggle", {
				open: !0,
				overlay: e
			});
		};
		return t({ toggleTimePicker: ae }), (t, r) => (k(), c("div", {
			class: "dp--tp-wrap",
			"data-dp-mobile": V(R)
		}, [!V(_).timePicker && !V(E).timePickerInline ? te((k(), c("button", {
			key: 0,
			ref: "open-tp-btn",
			type: "button",
			"data-dp-action-element": "0",
			class: S({
				...oe.value,
				"dp--hidden-el": J.value
			}),
			"aria-label": V(v)?.openTimePicker,
			tabindex: e.noOverlayFocus ? void 0 : 0,
			"data-test-id": "open-time-picker-btn",
			onKeydown: r[0] ||= (e) => V(A)(e, () => ae(!0)),
			onClick: r[1] ||= (e) => ae(!0)
		}, [F(t.$slots, "clock-icon", {}, () => [f(V(Rc))])], 42, Du)), [[G, !V(L)("time")]]) : s("", !0), f(i, {
			name: V(M)(J.value),
			css: V(I) && !V(E).timePickerInline
		}, {
			default: q(() => [J.value || V(_).timePicker || V(E).timePickerInline ? (k(), c("div", {
				key: 0,
				ref: "overlay",
				role: V(E).timePickerInline ? void 0 : "dialog",
				class: S({
					dp__overlay: !V(E).timePickerInline,
					"dp--overlay-absolute": !V(_).timePicker && !V(E).timePickerInline,
					"dp--overlay-relative": V(_).timePicker
				}),
				style: w(V(_).timePicker ? { height: `${V(C).modeHeight}px` } : void 0),
				"aria-label": V(v)?.timePicker,
				tabindex: V(E).timePickerInline ? void 0 : 0
			}, [l("div", {
				class: S(V(E).timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"),
				style: { display: "flex" }
			}, [F(t.$slots, "time-picker-overlay", {
				hours: e.hours,
				minutes: e.minutes,
				seconds: e.seconds,
				setHours: le,
				setMinutes: ue,
				setSeconds: de
			}, () => [l("div", { class: S(V(E).timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row") }, [(k(!0), c(n, null, P(ie.value, (n, r) => te((k(), o(Tu, b({ key: r }, { ref_for: !0 }, {
				order: r,
				hours: n.hours,
				minutes: n.minutes,
				seconds: n.seconds,
				closeTimePickerBtn: H.value,
				disabledTimesConfig: e.disabledTimesConfig,
				disabled: r === 0 ? V(T).fixedStart : V(T).fixedEnd
			}, {
				ref_for: !0,
				ref: "tp-input",
				"validate-time": (t, n) => e.validateTime(t, ce(n, r, t)),
				"onUpdate:hours": (e) => le(ce(e, r, "hours")),
				"onUpdate:minutes": (e) => ue(ce(e, r, "minutes")),
				"onUpdate:seconds": (e) => de(ce(e, r, "seconds")),
				onMounted: fe,
				onOverlayClosed: pe,
				onOverlayOpened: me
			}), u({ _: 2 }, [P(V(se), (e, n) => ({
				name: e,
				fn: q((n) => [F(t.$slots, e, b({ ref_for: !0 }, n))])
			}))]), 1040, [
				"validate-time",
				"onUpdate:hours",
				"onUpdate:minutes",
				"onUpdate:seconds"
			])), [[G, r === 0 || ne.value]])), 128))], 2)]), !V(_).timePicker && !V(E).timePickerInline ? te((k(), c("button", {
				key: 0,
				ref: "close-tp-btn",
				"data-dp-action-element": "1",
				type: "button",
				class: S({
					...oe.value,
					"dp--hidden-el": K.value
				}),
				"aria-label": V(v)?.closeTimePicker,
				tabindex: "0",
				onKeydown: r[2] ||= (e) => V(A)(e, () => ae(!1)),
				onClick: r[3] ||= (e) => ae(!1)
			}, [F(t.$slots, "calendar-icon", {}, () => [f(V(Pc))])], 42, ku)), [[G, !V(L)("time")]]) : s("", !0)], 2)], 14, Ou)) : s("", !0)]),
			_: 3
		}, 8, ["name", "css"])], 8, Eu));
	}
}), ju = (e) => {
	let { getDate: t, modelValue: n, time: r, rootProps: i, defaults: { range: o, timeConfig: s } } = $(), { isDateEqual: c, setTime: l } = Ml(), u = (e, t) => Array.isArray(r[e]) ? r[e][t] : r[e], d = (e) => s.value.enableSeconds ? Array.isArray(r.seconds) ? r.seconds[e] : r.seconds : 0, f = (e, n) => e ? l(n === void 0 ? {
		hours: r.hours,
		minutes: r.minutes,
		seconds: d()
	} : {
		hours: u("hours", n),
		minutes: u("minutes", n),
		seconds: d(n)
	}, e) : hc(t(), d(n)), p = (e, t) => {
		r[e] = t;
	}, m = a(() => i.modelAuto && o.value.enabled ? Array.isArray(n.value) ? n.value.length > 1 : !1 : o.value.enabled), h = (e, t) => {
		let i = Object.fromEntries(Object.keys(r).map((n) => n === e ? [n, t] : [n, r[n]].slice()));
		if (m.value && !o.value.disableTimeRangeValidation) {
			let e = (e) => n.value ? l({
				hours: i.hours[e],
				minutes: i.minutes[e],
				seconds: i.seconds[e]
			}, n.value[e]) : null, t = (e) => mc(n.value[e], 0);
			return !(c(e(0), e(1)) && (jo(e(0), t(1)) || Mo(e(1), t(0))));
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
}, Mu = (e) => {
	let { getDate: t, time: n, modelValue: r, state: i, defaults: { startTime: a, range: o, timeConfig: s } } = $(), { getTimeObj: c } = Ml();
	el(() => {
		i.isTextInputDate && x();
	});
	let { updateTimeValues: l, getSetDateTime: u, assignTime: d, assignStartTime: f, disabledTimesConfig: p, validateTime: m } = ju(h);
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
	D(() => (f(a.value), r.value ? x() : v()));
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
}, Nu = /* @__PURE__ */ p({
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
		let r = n, i = Hl(ee(), zl.TimePicker), a = U("time-input"), { time: s, modelValue: c, disabledTimesConfig: d, updateTime: p, validateTime: h } = Mu(r);
		return D(() => {
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
		}), (e, t) => (k(), o(su, {
			"multi-calendars": 0,
			stretch: ""
		}, {
			default: q(({ wrapClass: n }) => [l("div", { class: S(n) }, [f(Au, b({ ref: "time-input" }, e.$props, {
				hours: V(s).hours,
				minutes: V(s).minutes,
				seconds: V(s).seconds,
				"disabled-times-config": V(d),
				"validate-time": V(h),
				"onUpdate:hours": t[0] ||= (e) => V(p)({
					hours: e,
					minutes: V(s).minutes,
					seconds: V(s).seconds
				}),
				"onUpdate:minutes": t[1] ||= (e) => V(p)({
					hours: V(s).hours,
					minutes: e,
					seconds: V(s).seconds
				}),
				"onUpdate:seconds": t[2] ||= (e) => V(p)({
					hours: V(s).hours,
					minutes: V(s).minutes,
					seconds: e
				}),
				onResetFlow: t[3] ||= (t) => e.$emit("reset-flow")
			}), u({ _: 2 }, [P(V(i), (t, n) => ({
				name: t,
				fn: q((n) => [F(e.$slots, t, C(m(n)))])
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
}), Pu = (e, t) => {
	let { getDate: n, rootProps: r, defaults: { filters: i } } = $(), { validateMonthYearInRange: o, validateMonthYear: s } = tl(), c = (e, t) => {
		let n = e;
		return i.value.months.includes(ko(n)) ? (n = t ? ia(e, 1) : _c(e, 1), c(n, t)) : n;
	}, l = (e, t) => {
		let n = e;
		return i.value.years.includes(Z(n)) ? (n = t ? _a(e, 1) : yc(e, 1), l(n, t)) : n;
	}, u = (t, a = !1) => {
		let s = Q(n(), {
			month: e.month,
			year: e.year
		}), u = t ? ia(s, 1) : _c(s, 1);
		r.disableYearSelect && (u = gc(u, e.year));
		let f = ko(u), p = Z(u);
		i.value.months.includes(f) && (u = c(u, t), f = ko(u), p = Z(u)), i.value.years.includes(p) && (u = l(u, t), p = Z(u)), o(f, p, t, r.preventMinMaxNavigation) && d(f, p, a);
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
}, Fu = { class: "dp--header-wrap" }, Iu = {
	key: 0,
	class: "dp__month_year_wrap"
}, Lu = { key: 0 }, Ru = { class: "dp__month_year_wrap" }, zu = [
	"data-dp-element",
	"aria-label",
	"data-test-id",
	"onClick",
	"onKeydown"
], Bu = /* @__PURE__ */ p({
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
		let p = r, h = e, { rootEmit: g, rootProps: _, modelValue: v, defaults: { ariaLabels: y, filters: x, config: w, highlight: T, safeDates: E, ui: O } } = $(), { transitionName: A, showTransition: j } = $c(), { showLeftIcon: M, showRightIcon: I } = eu(), { handleMonthYearChange: z, isDisabled: B, updateMonthYear: H } = Pu(h, p), { getMaxMonth: ee, getMinMonth: U, getYearFromDate: W, groupListAndMap: G, checkHighlightYear: K, checkHighlightMonth: te } = Ml(), { checkKeyDown: ne } = jl(), { formatYear: J } = Pl(), { checkMinMaxValue: re } = tl(), { boolHtmlAttribute: ie } = Ll(), ae = N(!1), oe = N(!1), se = N(!1);
		D(() => {
			p("mount");
		});
		let ce = (e) => ({
			get: () => h[e],
			set: (t) => {
				let n = e === Uc.month ? Uc.year : Uc.month;
				p("update-month-year", {
					[e]: t,
					[n]: h[n]
				}), e === Uc.month ? ge(!0) : _e(!0);
			}
		}), le = a(ce(Uc.month)), ue = a(ce(Uc.year)), de = a(() => (e) => ({
			month: h.month,
			year: h.year,
			items: e === Uc.month ? h.months : h.years,
			instance: h.instance,
			updateMonthYear: H,
			toggle: e === Uc.month ? ge : _e
		})), fe = a(() => h.months.find((e) => e.value === h.month) || {
			text: "",
			value: 0
		}), pe = a(() => G(h.months, (e) => ({
			active: h.month === e.value,
			disabled: re(e.value, U(h.year, E.value.minDate), ee(h.year, E.value.maxDate)) || x.value.months.includes(e.value),
			highlighted: te(T.value, e.value, h.year)
		}))), me = a(() => G(h.years, (e) => ({
			active: h.year === e.value,
			disabled: re(e.value, W(E.value.minDate), W(E.value.maxDate)) || x.value.years.includes(e.value),
			highlighted: K(T.value, e.value)
		}))), he = (e, t, n) => {
			e.value = n === void 0 ? !e.value : n, e.value ? (se.value = !0, g("overlay-toggle", {
				open: !0,
				overlay: t
			})) : (se.value = !1, g("overlay-toggle", {
				open: !1,
				overlay: t
			}));
		}, ge = (e = !1, t) => {
			ve(e), he(ae, Gc.month, t);
		}, _e = (e = !1, t) => {
			ve(e), he(oe, Gc.year, t);
		}, ve = (e) => {
			e || p("reset-flow");
		}, ye = a(() => [{
			type: Uc.month,
			index: 1,
			toggle: ge,
			modelValue: le.value,
			updateModelValue: (e) => le.value = e,
			text: fe.value.text,
			showSelectionGrid: ae.value,
			items: pe.value,
			ariaLabel: y.value?.openMonthsOverlay,
			overlayLabel: y.value.monthPicker?.(!0) ?? void 0
		}, {
			type: Uc.year,
			index: 2,
			toggle: _e,
			modelValue: ue.value,
			updateModelValue: (e) => ue.value = e,
			text: J(h.year),
			showSelectionGrid: oe.value,
			items: me.value,
			ariaLabel: y.value?.openYearsOverlay,
			overlayLabel: y.value.yearPicker?.(!0) ?? void 0
		}]), be = a(() => _.disableYearSelect ? [ye.value[0]] : _.yearFirst ? [...ye.value].reverse() : ye.value);
		return t({
			toggleMonthPicker: ge,
			toggleYearPicker: _e,
			handleMonthYearChange: z
		}), (t, r) => (k(), c("div", Fu, [t.$slots["month-year"] ? (k(), c("div", Iu, [F(t.$slots, "month-year", C(m({
			month: e.month,
			year: e.year,
			months: e.months,
			years: e.years,
			updateMonthYear: V(H),
			handleMonthYearChange: V(z),
			instance: e.instance,
			isDisabled: V(B)
		})))])) : (k(), c(n, { key: 1 }, [t.$slots["top-extra"] ? (k(), c("div", Lu, [F(t.$slots, "top-extra", { value: V(v) })])) : s("", !0), l("div", Ru, [
			V(M)(e.instance) && !V(_).vertical ? (k(), o(lu, {
				key: 0,
				"aria-label": V(y)?.prevMonth,
				disabled: V(ie)(V(B)(!1)),
				class: S(V(O)?.navBtnPrev),
				"el-name": "action-prev",
				onActivate: r[0] ||= (e) => V(z)(!1, !0)
			}, {
				default: q(() => [t.$slots["arrow-left"] ? F(t.$slots, "arrow-left", { key: 0 }) : s("", !0), t.$slots["arrow-left"] ? s("", !0) : (k(), o(V(Ic), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : s("", !0),
			l("div", { class: S(["dp__month_year_wrap", { dp__year_disable_select: V(_).disableYearSelect }]) }, [(k(!0), c(n, null, P(be.value, (r) => (k(), c(n, { key: r.type }, [l("button", {
				type: "button",
				"data-dp-element": `overlay-${r.type}`,
				class: S(["dp__btn dp__month_year_select", { "dp--hidden-el": se.value }]),
				"aria-label": `${r.text}-${r.ariaLabel}`,
				"data-test-id": `${r.type}-toggle-overlay-${e.instance}`,
				tabindex: "0",
				"data-dp-action-element": "0",
				onClick: (e) => r.toggle(!1),
				onKeydown: (e) => V(ne)(e, () => r.toggle(), !0)
			}, [t.$slots[r.type] ? F(t.$slots, r.type, {
				key: 0,
				text: r.text,
				value: h[r.type]
			}) : s("", !0), t.$slots[r.type] ? s("", !0) : (k(), c(n, { key: 1 }, [d(R(r.text), 1)], 64))], 42, zu), f(i, {
				name: V(A)(r.showSelectionGrid),
				css: V(j)
			}, {
				default: q(() => [r.showSelectionGrid ? (k(), o(au, {
					key: 0,
					items: r.items,
					"is-last": V(_).autoApply && !V(w).keepActionRow,
					"skip-button-ref": !1,
					type: r.type,
					"header-refs": [],
					"menu-wrap-ref": e.menuWrapRef,
					"overlay-label": r.overlayLabel,
					onSelected: r.updateModelValue,
					onToggle: r.toggle
				}, u({
					"button-icon": q(() => [t.$slots["calendar-icon"] ? F(t.$slots, "calendar-icon", { key: 0 }) : s("", !0), t.$slots["calendar-icon"] ? s("", !0) : (k(), o(V(Pc), { key: 1 }))]),
					_: 2
				}, [
					t.$slots[`${r.type}-overlay-value`] ? {
						name: "item",
						fn: q(({ item: e }) => [F(t.$slots, `${r.type}-overlay-value`, {
							text: e.text,
							value: e.value
						})]),
						key: "0"
					} : void 0,
					t.$slots[`${r.type}-overlay`] ? {
						name: "overlay",
						fn: q(() => [F(t.$slots, `${r.type}-overlay`, b({ ref_for: !0 }, de.value(r.type)))]),
						key: "1"
					} : void 0,
					t.$slots[`${r.type}-overlay-header`] ? {
						name: "header",
						fn: q(() => [F(t.$slots, `${r.type}-overlay-header`, { toggle: r.toggle })]),
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
			V(M)(e.instance) && V(_).vertical ? (k(), o(lu, {
				key: 1,
				"aria-label": V(y)?.prevMonth,
				"el-name": "action-prev",
				disabled: V(ie)(V(B)(!1)),
				class: S(V(O)?.navBtnPrev),
				onActivate: r[1] ||= (e) => V(z)(!1, !0)
			}, {
				default: q(() => [t.$slots["arrow-up"] ? F(t.$slots, "arrow-up", { key: 0 }) : s("", !0), t.$slots["arrow-up"] ? s("", !0) : (k(), o(V(zc), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : s("", !0),
			V(I)(e.instance) ? (k(), o(lu, {
				key: 2,
				ref: "rightIcon",
				"el-name": "action-next",
				disabled: V(ie)(V(B)(!0)),
				"aria-label": V(y)?.nextMonth,
				class: S(V(O)?.navBtnNext),
				onActivate: r[2] ||= (e) => V(z)(!0, !0)
			}, {
				default: q(() => [t.$slots[V(_).vertical ? "arrow-down" : "arrow-right"] ? F(t.$slots, V(_).vertical ? "arrow-down" : "arrow-right", { key: 0 }) : s("", !0), t.$slots[V(_).vertical ? "arrow-down" : "arrow-right"] ? s("", !0) : (k(), o(L(V(_).vertical ? V(Bc) : V(Lc)), { key: 1 }))]),
				_: 3
			}, 8, [
				"disabled",
				"aria-label",
				"class"
			])) : s("", !0)
		])], 64))]));
	}
}), Vu = {
	class: "dp__calendar_header",
	role: "row"
}, Hu = {
	key: 0,
	class: "dp__calendar_header_item",
	role: "gridcell"
}, Uu = ["aria-label"], Wu = {
	key: 0,
	class: "dp__calendar_item dp__week_num",
	role: "gridcell"
}, Gu = { class: "dp__cell_inner" }, Ku = [
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
], qu = /* @__PURE__ */ p({
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
		let o = r, u = e, { getDate: p, rootEmit: m, rootProps: h, defaults: { transitions: g, config: _, ariaLabels: v, multiCalendars: y, weekNumbers: b, multiDates: C, ui: T } } = $(), { isDateAfter: E, isDateEqual: A, resetDateTime: j, getCellId: M } = Ml(), { checkKeyDown: I, checkStopPropagation: L, isTouchDevice: z } = jl(), { formatWeekDay: B } = Pl(), H = U("calendar-wrap"), ee = U("active-tooltip"), W = N([]), G = N(null), K = N(!0), te = N(!1), ne = N(""), re = N({
			bottom: "",
			left: "",
			transform: ""
		}), ie = N({ left: "50%" });
		de(H, { onSwipeEnd: (e, t) => {
			_.value.noSwipe || (h.vertical ? (t === "up" || t === "down") && o("handle-swipe", t === "up" ? "left" : "right") : (t === "left" || t === "right") && o("handle-swipe", t === "right" ? "left" : "right"));
		} });
		let ae = a(() => h.calendar ? h.calendar(u.mappedDates) : u.mappedDates), oe = a(() => h.dayNames ? Array.isArray(h.dayNames) ? h.dayNames : h.dayNames() : De());
		D(() => {
			o("mount", {
				cmp: "calendar",
				dayRefs: W.value
			}), _.value.monthChangeOnScroll && H.value && H.value.addEventListener("wheel", xe, { passive: !1 });
		}), O(() => {
			_.value.monthChangeOnScroll && H.value && H.value.removeEventListener("wheel", xe);
		});
		let se = (e) => e ? h.vertical ? "vNext" : "next" : h.vertical ? "vPrevious" : "previous", ce = (e, t) => {
			if (h.transitions) {
				let n = j(Q(p(), {
					month: u.month,
					year: u.year
				}));
				ne.value = E(j(Q(p(), {
					month: e,
					year: t
				})), n) ? g.value[se(!0)] : g.value[se(!1)], K.value = !1, x(() => {
					K.value = !0;
				});
			}
		}, ue = a(() => ({ ...T.value.calendar })), fe = (e) => ({
			type: "dot",
			...e
		}), pe = a(() => (e) => {
			let t = fe(e);
			return {
				dp__marker_dot: t.type === "dot",
				dp__marker_line: t.type === "line"
			};
		}), me = a(() => (e) => A(e, G.value)), he = a(() => ({
			dp__calendar: !0,
			dp__calendar_next: y.value.count > 0 && u.instance !== 0
		})), ge = a(() => (e) => !h.hideOffsetDates || e.current), _e = async (e, t) => {
			let { width: n, height: r } = e.getBoundingClientRect();
			G.value = t.value;
			let i = { left: `${n / 2}px` }, a = -50;
			if (await x(), ee.value?.[0]) {
				let { left: e, width: t } = ee.value[0].getBoundingClientRect();
				e < 0 && (i = { left: "0" }, a = 0, ie.value.left = `${n / 2}px`), globalThis.innerWidth < e + t && (i = { right: "0" }, a = 0, ie.value.left = `${t - n / 2}px`);
			}
			re.value = {
				bottom: `${r}px`,
				...i,
				transform: `translateX(${a}%)`
			};
		}, ve = async (e, t, n) => {
			let r = le(W.value?.[t]?.[n]);
			r && (e.marker?.customPosition && e.marker?.tooltip?.length ? re.value = e.marker.customPosition(r) : await _e(r, e), m("tooltip-open", e.marker));
		}, ye = async (e, t, n) => {
			if (te.value && C.value.enabled && C.value.dragSelect) return o("select-date", e);
			if (o("set-hover-date", e), e.marker?.tooltip?.length) {
				if (h.hideOffsetDates && !e.current) return;
				await ve(e, t, n);
			}
		}, be = (e) => {
			G.value && (G.value = null, re.value = structuredClone({
				bottom: "",
				left: "",
				transform: ""
			}), m("tooltip-close", e.marker));
		}, Y = (e, t, n) => {
			e && (Array.isArray(W.value[t]) ? W.value[t][n] = e : W.value[t] = [e]);
		}, xe = (e) => {
			_.value.monthChangeOnScroll && (e.preventDefault(), o("handle-scroll", e));
		}, Se = (e) => b.value ? b.value.type === "local" ? Za(e.value, {
			weekStartsOn: +h.weekStart,
			locale: h.locale
		}) : b.value.type === "iso" ? Ja(e.value) : typeof b.value.type == "function" ? b.value.type(e.value) : "" : "", Ce = (e) => {
			let t = e[0];
			return b.value?.hideOnOffsetDates ? e.some((e) => e.current) ? Se(t) : "" : Se(t);
		}, we = (e, t, n = !0) => {
			!n && z() || (!C.value.enabled || _.value.allowPreventDefault) && (L(e, _.value), o("select-date", t));
		}, Te = (e) => {
			L(e, _.value);
		}, Ee = (e) => {
			C.value.enabled && C.value.dragSelect ? (te.value = !0, o("select-date", e)) : C.value.enabled && o("select-date", e);
		}, De = () => {
			let e = p();
			return Ea({
				start: ca(e, {
					locale: h.locale,
					weekStartsOn: +h.weekStart
				}),
				end: Ma(e, {
					locale: h.locale,
					weekStartsOn: +h.weekStart
				})
			}).map((e) => B(e));
		};
		return t({ triggerTransition: ce }), (e, t) => (k(), c("div", { class: S(he.value) }, [l("div", {
			ref: "calendar-wrap",
			class: S(ue.value),
			role: "grid"
		}, [
			l("div", Vu, [V(b) ? (k(), c("div", Hu, R(V(b).label), 1)) : s("", !0), (k(!0), c(n, null, P(oe.value, (t, n) => (k(), c("div", {
				key: n,
				class: "dp__calendar_header_item",
				role: "gridcell",
				"data-test-id": "calendar-header",
				"aria-label": V(v)?.weekDay?.(n)
			}, [F(e.$slots, "calendar-header", {
				day: t,
				index: n
			}, () => [d(R(t), 1)])], 8, Uu))), 128))]),
			t[2] ||= l("div", { class: "dp__calendar_header_separator" }, null, -1),
			f(i, {
				name: ne.value,
				css: !!V(g)
			}, {
				default: q(() => [K.value ? (k(), c("div", {
					key: 0,
					class: "dp__calendar",
					role: "rowgroup",
					onMouseleave: t[1] ||= (e) => te.value = !1
				}, [(k(!0), c(n, null, P(ae.value, (r, i) => (k(), c("div", {
					key: i,
					class: "dp__calendar_row",
					role: "row"
				}, [V(b) ? (k(), c("div", Wu, [l("div", Gu, R(Ce(r.days)), 1)])) : s("", !0), (k(!0), c(n, null, P(r.days, (r, a) => (k(), c("div", {
					id: V(M)(r.value),
					ref_for: !0,
					ref: (e) => Y(e, i, a),
					key: a + i,
					role: "gridcell",
					class: "dp__calendar_item",
					"aria-selected": (r.classData.dp__active_date || r.classData.dp__range_start || r.classData.dp__range_end) ?? void 0,
					"aria-disabled": r.classData.dp__cell_disabled || void 0,
					"aria-label": V(v)?.day?.(r),
					tabindex: !r.current && V(h).hideOffsetDates ? void 0 : 0,
					"data-test-id": V(M)(r.value),
					"data-dp-element-active": r.classData.dp__active_date ? 0 : void 0,
					"data-dp-action-element": "0",
					onClick: J((e) => we(e, r), ["prevent"]),
					onTouchend: (e) => we(e, r, !1),
					onKeydown: (t) => V(I)(t, () => e.$emit("select-date", r)),
					onMouseenter: (e) => ye(r, i, a),
					onMouseleave: (e) => be(r),
					onMousedown: (e) => Ee(r),
					onMouseup: t[0] ||= (e) => te.value = !1
				}, [l("div", { class: S(["dp__cell_inner", r.classData]) }, [
					e.$slots.day && ge.value(r) ? F(e.$slots, "day", {
						key: 0,
						day: +r.text,
						date: r.value
					}) : s("", !0),
					e.$slots.day ? s("", !0) : (k(), c(n, { key: 1 }, [d(R(r.text), 1)], 64)),
					r.marker && ge.value(r) ? F(e.$slots, "marker", {
						key: 2,
						marker: r.marker,
						day: +r.text,
						date: r.value
					}, () => [l("div", {
						class: S(pe.value(r.marker)),
						style: w(r.marker.color ? { backgroundColor: r.marker.color } : {})
					}, null, 6)]) : s("", !0),
					me.value(r.value) ? (k(), c("div", {
						key: 3,
						ref_for: !0,
						ref: "active-tooltip",
						class: "dp__marker_tooltip",
						style: w(re.value)
					}, [r.marker?.tooltip ? (k(), c("div", {
						key: 0,
						class: "dp__tooltip_content",
						onClick: Te
					}, [(k(!0), c(n, null, P(r.marker.tooltip, (t, n) => (k(), c("div", {
						key: n,
						class: "dp__tooltip_text"
					}, [F(e.$slots, "marker-tooltip", {
						tooltip: t,
						day: r.value
					}, () => [l("div", {
						class: "dp__tooltip_mark",
						style: w(t.color ? { backgroundColor: t.color } : {})
					}, null, 4), l("div", null, R(t.text), 1)])]))), 128)), l("div", {
						class: "dp__arrow_bottom_tp",
						style: w(ie.value)
					}, null, 4)])) : s("", !0)], 4)) : s("", !0)
				], 2)], 40, Ku))), 128))]))), 128))], 32)) : s("", !0)]),
				_: 3
			}, 8, ["name", "css"])
		], 2)], 2));
	}
}), Ju = (e, t, n, r) => {
	let i = N([]), o = N(/* @__PURE__ */ new Date()), s = N(), { getDate: c, rootEmit: l, calendars: u, month: d, year: f, time: p, modelValue: m, rootProps: h, today: g, state: _, defaults: { multiCalendars: v, startTime: y, range: b, config: S, safeDates: C, multiDates: w, timeConfig: T, flow: E } } = $(), { validateMonthYearInRange: O, isDisabled: k, isDateRangeAllowed: A, checkMinMaxRange: j } = tl(), { updateTimeValues: M, getSetDateTime: P, assignTime: F, assignStartTime: I, validateTime: L, disabledTimesConfig: R } = ju(r), { formatDay: z } = Pl(), { resetDateTime: B, setTime: V, isDateBefore: H, isDateEqual: ee, getDaysInBetween: U } = Ml(), { checkRangeAutoApply: W, getRangeWithFixedDate: G, handleMultiDatesSelect: K, setPresetDate: q } = pu(), { getMapDate: te } = jl();
	el(() => se(_.isTextInputDate));
	let ne = (e) => !S.value.keepViewOnOffsetClick || e ? !0 : !s.value, J = (e, t, n, r = !1) => {
		ne(r) && (u.value[e] ??= u.value[e] = {
			month: 0,
			year: 0
		}, u.value[e].month = t ?? u.value[e]?.month, u.value[e].year = n ?? u.value[e]?.year);
	}, re = () => {
		h.autoApply && t("select-date");
	}, ie = () => {
		y.value && I(y.value);
	};
	D(() => {
		m.value || (ye(), ie()), se(!0), h.focusStartDate && h.startDate && ye();
	});
	let ae = a(() => E.value?.steps?.length && !E.value?.partial ? e.flowStep === E.value.steps.length : !0), oe = () => {
		h.autoApply && ae.value && t("auto-apply", E.value?.partial ? e.flowStep !== E.value?.steps?.length : !1);
	}, se = (e = !1) => {
		if (m.value) return Array.isArray(m.value) ? (i.value = m.value, he(e)) : de(m.value, e);
		if (v.value.count && e && !h.startDate) return ue(c(), e);
	}, ce = () => Array.isArray(m.value) && b.value.enabled ? ko(m.value[0]) === ko(m.value[1] ?? m.value[0]) : !1, le = (e) => {
		let t = ia(e, 1);
		return {
			month: ko(t),
			year: Z(t)
		};
	}, ue = (e = c(), t = !1) => {
		if ((!v.value.count || !v.value.static || t) && J(0, ko(e), Z(e)), v.value.count && (!m.value || ce() || !v.value.solo) && (!v.value.solo || t)) for (let e = 1; e < v.value.count; e++) {
			let t = aa(Q(c(), {
				month: d.value(e - 1),
				year: f.value(e - 1)
			}), { months: 1 });
			u.value[e] = {
				month: ko(t),
				year: Z(t)
			};
		}
	}, de = (e, t) => {
		ue(e), F("hours", Eo(e)), F("minutes", Oo(e)), F("seconds", Ao(e)), v.value.count && t && ve();
	}, fe = (e) => {
		if (v.value.count) {
			if (v.value.solo) return 0;
			let t = ko(e[0]), n = ko(e[1]);
			return Math.abs(n - t) < v.value.count ? 0 : 1;
		}
		return 1;
	}, pe = (e, t) => {
		e[1] && b.value.showLastInRange ? ue(e[fe(e)], t) : ue(e[0], t);
		let n = (t, n) => [t(e[0]), e?.[1] ? t(e[1]) : p[n][1]];
		F("hours", n(Eo, "hours")), F("minutes", n(Oo, "minutes")), F("seconds", n(Ao, "seconds"));
	}, me = (e, t) => {
		if ((b.value.enabled || h.weekPicker) && !w.value.enabled) return pe(e, t);
		if (w.value.enabled && t) {
			let n = e[e.length - 1];
			return de(n, t);
		}
	}, he = (e) => {
		let t = m.value;
		me(t, e), v.value.count && v.value.solo && ve();
	}, ge = (e, t) => {
		let r = Q(c(), {
			month: d.value(t),
			year: f.value(t)
		}), i = e < 0 ? ia(r, 1) : _c(r, 1);
		O(ko(i), Z(i), e < 0, h.preventMinMaxNavigation) && (J(t, ko(i), Z(i)), l("update-month-year", {
			instance: t,
			month: ko(i),
			year: Z(i)
		}), v.value.count && !v.value.solo && _e(t), n());
	}, _e = (e) => {
		for (let t = e - 1; t >= 0; t--) {
			let e = _c(Q(c(), {
				month: d.value(t + 1),
				year: f.value(t + 1)
			}), 1);
			J(t, ko(e), Z(e));
		}
		for (let t = e + 1; t <= v.value.count - 1; t++) {
			let e = ia(Q(c(), {
				month: d.value(t - 1),
				year: f.value(t - 1)
			}), 1);
			J(t, ko(e), Z(e));
		}
	}, ve = () => {
		if (Array.isArray(m.value) && m.value.length === 2) {
			let e = c(c(m.value[1] ?? ia(m.value[0], 1))), [t, n] = [ko(m.value[0]), Z(m.value[0])], [r, i] = [ko(m.value[1]), Z(m.value[1])];
			(t !== r || t === r && n !== i) && v.value.solo && J(1, ko(e), Z(e));
		} else m.value && !Array.isArray(m.value) && (J(0, ko(m.value), Z(m.value)), ue(c()));
	}, ye = () => {
		h.startDate && (J(0, ko(c(h.startDate)), Z(c(h.startDate))), v.value.count && _e(0));
	}, be = (e, t) => {
		if (S.value.monthChangeOnScroll) {
			let n = Date.now() - o.value.getTime(), r = Math.abs(e.deltaY), i = 500;
			r > 1 && (i = 100), r > 100 && (i = 0), n > i && (o.value = /* @__PURE__ */ new Date(), ge(S.value.monthChangeOnScroll === "inverse" ? e.deltaY : -e.deltaY, t));
		}
	}, Y = (e, t, n = !1) => {
		S.value.monthChangeOnArrows && h.vertical === n && xe(e, t);
	}, xe = (e, t) => {
		ge(e === "right" ? -1 : 1, t);
	}, Se = (e) => {
		if (C.value.markers) return te(e.value, C.value.markers);
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
				let n = e[0].days[0], r = Te(ra(n.value, -7), ko(t));
				e.unshift({ days: r });
			} else {
				let n = e[e.length - 1], r = n.days[n.days.length - 1], i = Te(ra(r.value, 1), ko(t));
				e.push({ days: i });
			}
		}
		return e;
	}, Te = (e, t) => {
		let n = c(e), r = [];
		for (let e = 0; e < 7; e++) {
			let i = ra(n, e), a = ko(i) !== t;
			r.push({
				text: h.hideOffsetDates && a ? "" : z(i),
				value: i,
				current: !a,
				classData: {}
			});
		}
		return r;
	}, Ee = (e, t) => {
		let n = [], r = c(new Date(t, e)), i = c(new Date(t, e + 1, 0)), a = h.weekStart, o = ca(r, { weekStartsOn: a }), s = (t) => {
			let r = Te(t, e);
			if (n.push({ days: r }), !n[n.length - 1].days.some((e) => ee(c(e.value), B(i)))) {
				let e = ra(t, 7);
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
		l("date-click", t), w.value.enabled ? K(t, w.value.limit) : m.value = t, r(), x().then(() => {
			oe();
		});
	}, Oe = (e) => b.value.noDisabledRange ? U(i.value[0], e).some((e) => k(e)) : !1, ke = () => {
		i.value = m.value ? m.value.slice().filter((e) => !!e) : [], i.value.length === 2 && !(b.value.fixedStart || b.value.fixedEnd) && (i.value = []);
	}, Ae = (e, t) => {
		let n = [c(e.value), ra(c(e.value), +b.value.autoRange)];
		A(n) ? (t && je(e.value), i.value = n) : l("invalid-date", e.value);
	}, je = (e) => {
		let t = ko(c(e)), n = Z(c(e));
		if (J(0, t, n), v.value.count > 0) for (let t = 1; t < v.value.count; t++) {
			let n = le(Q(c(e), {
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
		i.value[0] ? j(c(e.value), m.value) && !Oe(e.value) ? H(c(e.value), c(i.value[0])) ? b.value.autoSwitchStartEnd ? (i.value.unshift(c(e.value)), l("range-end", i.value[0])) : (i.value[0] = c(e.value), l("range-start", i.value[0])) : (i.value[1] = c(e.value), l("range-end", i.value[1])) : l("invalid-date", e.value) : (i.value[0] = c(e.value), l("range-start", i.value[0]));
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
		J(t, i.month, i.year, !0), v.value.count && !v.value.solo && _e(t), l("update-month-year", {
			instance: t,
			month: i.month,
			year: i.year
		}), n(v.value.solo ? t : void 0);
		let a = E.value?.steps?.length ? E.value.steps[e.flowStep] : void 0;
		!i.fromNav && (a === Gc.month || a === Gc.year) && r();
	}, Be = (e) => {
		q({ value: e }), re(), h.multiCalendars && x().then(() => se(!0));
	}, Ve = () => {
		let e = c();
		return h.actionRow?.nowBtnRound && (e = fc(e, {
			roundingMethod: h.actionRow.nowBtnRound.rounding ?? "ceil",
			nearestTo: h.actionRow.nowBtnRound.roundTo ?? 15
		})), e;
	}, He = () => {
		let e = Ve();
		!b.value.enabled && !w.value.enabled ? m.value = e : m.value && Array.isArray(m.value) && m.value[0] ? w.value.enabled ? m.value = [...m.value, e] : m.value = H(e, m.value[0]) ? [e, m.value[0]] : [m.value[0], e] : m.value = [e], re();
	}, Ue = () => {
		if (Array.isArray(m.value)) {
			if (w.value.enabled) {
				let e = We();
				m.value[m.value.length - 1] = P(e);
			} else m.value = m.value.map((e, t) => e && P(e, t));
		} else m.value = P(m.value);
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
		handleScroll: be,
		handleSwipe: xe,
		handleArrow: Y,
		selectDate: Re,
		updateMonthYear: ze,
		presetDate: Be,
		selectCurrentDate: He,
		updateTime: (e) => {
			let t = Ge(e);
			M(e, Ue), t && l(t, m.value[t === "range-start" ? 0 : 1]);
		},
		assignMonthAndYear: ue,
		setStartTime: ie
	};
}, Yu = () => {
	let { isModelAuto: e, matchDate: t, isDateAfter: n, isDateBefore: r, isDateBetween: i, isDateEqual: a, getWeekFromDate: o, getBeforeAndAfterInRange: s } = Ml(), { getDate: c, today: l, rootProps: u, defaults: { multiCalendars: d, multiDates: f, ui: p, highlight: m, safeDates: h, range: g }, modelValue: _ } = $(), { isDisabled: v } = tl(), y = N(null), b = (e) => {
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
				let t = ra(y.value, +g.value.autoRange), n = o(c(y.value), u.weekStart);
				return u.weekPicker ? a(n[1], c(e.value)) : a(t, c(e.value));
			}
			return !1;
		}
		return !1;
	}, k = (e) => {
		if (g.value.autoRange || u.weekPicker) {
			if (y.value) {
				let t = ra(y.value, +g.value.autoRange);
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
	}, j = (e) => i(_.value, y.value, e.value), M = () => u.modelAuto && Array.isArray(_.value) ? !!_.value[0] : !1, P = () => !u.modelAuto || e(_.value), F = (e) => {
		if (u.weekPicker) return !1;
		let t = !g.value.enabled || !T(e) && !T(e, !1);
		return !v(e.value) && !D(e) && !(!e.current && u.hideOffsetDates) && t;
	}, I = (e) => g.value.enabled ? u.modelAuto ? M() && D(e) : !1 : D(e), L = (e) => m.value ? t(e.value, h.value.highlight) : !1, R = (e) => {
		let t = v(e.value);
		return t && (typeof m.value == "function" ? !m.value(e.value, t) : !m.value.options.highlightDisabled);
	}, z = (e) => typeof m.value == "function" ? m.value(e.value) : m.value.weekdays?.includes(e.value.getDay()), B = (e) => (g.value.enabled || u.weekPicker) && (!(d.value.count > 0) || e.current) && P() && !(!e.current && u.hideOffsetDates) && !D(e) ? j(e) : !1, V = (e) => {
		if (Array.isArray(_.value) && _.value.length === 1) {
			let { before: t, after: n } = s(+g.value.maxRange, _.value[0]);
			return Mo(e.value, t) || jo(e.value, n);
		}
		return !1;
	}, H = (e) => {
		if (Array.isArray(_.value) && _.value.length === 1) {
			let { before: t, after: n } = s(+g.value.minRange, _.value[0]);
			return i([t, n], _.value[0], e.value);
		}
		return !1;
	}, ee = (e) => g.value.enabled && (g.value.maxRange || g.value.minRange) ? g.value.maxRange && g.value.minRange ? V(e) || H(e) : g.value.maxRange ? V(e) : H(e) : !1, U = (e) => {
		let { isRangeStart: t, isRangeEnd: i } = q(e), o = g.value.enabled ? t || i : !1;
		return {
			dp__cell_offset: !e.current,
			dp__pointer: !u.disabled && !(!e.current && u.hideOffsetDates) && !v(e.value) && !ee(e),
			dp__cell_disabled: v(e.value) || ee(e),
			dp__cell_highlight: !R(e) && (L(e) || z(e)) && !I(e) && !o && !A(e) && !(B(e) && u.weekPicker) && !i,
			dp__cell_highlight_active: !R(e) && (L(e) || z(e)) && I(e),
			dp__today: !u.noToday && a(e.value, l) && e.current,
			"dp--past": r(e.value, l),
			"dp--future": n(e.value, l)
		};
	}, W = (e) => ({
		dp__active_date: I(e),
		dp__date_hover: F(e)
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
	}, K = (e) => {
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
	}, q = (e) => ({
		isRangeStart: d.value.count > 0 ? e.current && T(e) && P() : T(e) && P(),
		isRangeEnd: d.value.count > 0 ? e.current && T(e, !1) && P() : T(e, !1) && P()
	}), te = (e) => g.value.enabled && (g.value.fixedStart || g.value.fixedEnd) && Array.isArray(_.value) && _.value.length === 2, ne = (e, t, n, r) => !te(_.value) || !y.value ? !1 : t ? g.value.fixedEnd && a(e.value, y.value) && Mo(e.value, _.value[0]) && !n : g.value.fixedStart && a(e.value, y.value) && jo(e.value, _.value[1]) && !r, J = (e, t) => !te(_.value) || !y.value ? !1 : t ? g.value.fixedEnd && jo(e.value, y.value) && Mo(e.value, _.value[0]) : g.value.fixedStart && Mo(e.value, y.value) && jo(e.value, _.value[1]), re = (e) => {
		let { isRangeStart: t, isRangeEnd: n } = q(e);
		return {
			dp__range_start: t,
			dp__range_end: n,
			dp__range_between: B(e),
			dp__date_hover: a(e.value, y.value) && !t && !n && !u.weekPicker,
			dp__date_hover_start: E(e, !0) || ne(e, !0, t, n),
			dp__date_hover_end: E(e, !1) || ne(e, !1, t, n),
			"dp--extended-fixed-start": J(e, !0),
			"dp--extended-fixed-end": J(e, !1)
		};
	}, ie = (e) => ({
		...re(e),
		dp__cell_auto_range: k(e),
		dp__cell_auto_range_start: A(e),
		dp__cell_auto_range_end: O(e)
	}), ae = (e) => g.value.enabled ? g.value.autoRange ? ie(e) : u.modelAuto ? {
		...W(e),
		...re(e)
	} : u.weekPicker ? K(e) : re(e) : u.weekPicker ? G(e) : W(e);
	return {
		setHoverDate: b,
		clearHoverDate: x,
		getDayClassData: (e) => u.hideOffsetDates && !e.current ? {} : {
			...U(e),
			...ae(e),
			[p.value.dayClass ? p.value.dayClass(e.value, _.value) : ""]: !0,
			...p.value.calendarCell
		}
	};
}, Xu = { key: 0 }, Zu = /* @__PURE__ */ p({
	__name: "DatePicker",
	props: /* @__PURE__ */ v({
		flowStep: {},
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	}, El),
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
		let i = r, { month: l, year: d, modelValue: p, time: h, disabledTimesConfig: g, today: _, validateTime: v, getCalendarDays: y, getMarker: x, handleArrow: w, handleScroll: T, handleSwipe: E, selectDate: D, updateMonthYear: O, presetDate: A, selectCurrentDate: j, updateTime: M, assignMonthAndYear: N, setStartTime: I } = Ju(e, i, pe, me), L = ee(), { setHoverDate: R, getDayClassData: z, clearHoverDate: B } = Yu(), { getDate: H, rootEmit: W, rootProps: G, defaults: { multiCalendars: te, timeConfig: ne } } = $(), { getYears: J, getMonths: re } = Fl(), { getCellId: ie } = Ml(), ae = U("calendar-header"), oe = U("calendar"), se = U("time-picker"), ce = Hl(L, zl.Calendar), le = Hl(L, zl.DatePickerHeader), ue = Hl(L, zl.TimePicker), de = (e) => {
			i("mount", e);
		};
		K(te, (e, t) => {
			e.count - t.count > 0 && N();
		}, { deep: !0 });
		let fe = a(() => (e) => y(l.value(e), d.value(e)).map((e) => ({
			...e,
			days: e.days.map((e) => (e.marker = x(e), e.classData = z(e), e))
		})));
		function pe(e) {
			e || e === 0 ? oe.value?.[e]?.triggerTransition(l.value(e), d.value(e)) : oe.value?.forEach((e, t) => e?.triggerTransition(l.value(t), d.value(t)));
		}
		function me() {
			i("update-flow-step");
		}
		let he = (e, t, n = 0) => {
			ae.value?.[n]?.toggleMonthPicker(e, t);
		}, ge = (e, t, n = 0) => {
			ae.value?.[n]?.toggleYearPicker(e, t);
		}, _e = (e, t, n) => {
			se.value?.toggleTimePicker(e, t, n);
		}, ve = (e, t) => {
			if (!G.range) {
				let n = p.value ? p.value : _, r = t ? H(t) : n, i = e ? ca(r, { weekStartsOn: 1 }) : Ma(r, { weekStartsOn: 1 });
				D({
					value: i,
					current: ko(r) === l.value(0),
					text: "",
					classData: {}
				}), document.getElementById(ie(i))?.focus();
			}
		}, ye = (e) => {
			ae.value?.[0]?.handleMonthYearChange(e, !0);
		}, be = (e) => {
			O(0, {
				month: l.value(0),
				year: d.value(0) + (e ? 1 : -1),
				fromNav: !0
			});
		}, Y = (e) => {
			W("overlay-toggle", {
				open: !1,
				overlay: e
			}), i("focus-menu");
		};
		return t({
			clearHoverDate: B,
			presetDate: A,
			selectCurrentDate: j,
			handleArrow: w,
			updateMonthYear: O,
			setStartTime: I,
			toggleMonthPicker: he,
			toggleYearPicker: ge,
			toggleTimePicker: _e,
			getSidebarProps: () => ({
				modelValue: p,
				month: l,
				year: d,
				time: h,
				updateTime: M,
				updateMonthYear: O,
				selectDate: D,
				presetDate: A
			}),
			changeMonth: ye,
			changeYear: be,
			selectWeekDate: ve
		}), (t, r) => (k(), c(n, null, [f(su, { collapse: e.collapse }, {
			default: q(({ instances: i, wrapClass: a }) => [(k(!0), c(n, null, P(i, (n) => (k(), c("div", {
				key: n,
				class: S(a)
			}, [V(G).hideMonthYearSelect ? s("", !0) : (k(), o(Bu, {
				key: 0,
				ref_for: !0,
				ref: "calendar-header",
				months: V(re)(),
				years: V(J)(),
				month: V(l)(n),
				year: V(d)(n),
				instance: n,
				"menu-wrap-ref": e.menuWrapRef,
				onMount: r[0] ||= (e) => de(V(Wc).header),
				onResetFlow: r[1] ||= (e) => t.$emit("reset-flow"),
				onUpdateMonthYear: (e) => V(O)(n, e),
				onOverlayClosed: Y
			}, u({ _: 2 }, [P(V(le), (e, n) => ({
				name: e,
				fn: q((n) => [F(t.$slots, e, b({ ref_for: !0 }, n))])
			}))]), 1032, [
				"months",
				"years",
				"month",
				"year",
				"instance",
				"menu-wrap-ref",
				"onUpdateMonthYear"
			])), f(qu, {
				ref_for: !0,
				ref: "calendar",
				"mapped-dates": fe.value(n),
				instance: n,
				month: V(l)(n),
				year: V(d)(n),
				onSelectDate: (e) => V(D)(e, n !== 1),
				onSetHoverDate: r[2] ||= (e) => V(R)(e),
				onHandleScroll: (e) => V(T)(e, n),
				onHandleSwipe: (e) => V(E)(e, n),
				onMount: r[3] ||= (e) => de(V(Wc).calendar)
			}, u({ _: 2 }, [P(V(ce), (e, n) => ({
				name: e,
				fn: q((n) => [F(t.$slots, e, b({ ref_for: !0 }, n))])
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
		}, 8, ["collapse"]), V(ne).enableTimePicker ? (k(), c("div", Xu, [F(t.$slots, "time-picker", C(m({
			time: V(h),
			updateTime: V(M)
		})), () => [f(Au, {
			ref: "time-picker",
			hours: V(h).hours,
			minutes: V(h).minutes,
			seconds: V(h).seconds,
			"disabled-times-config": V(g),
			"validate-time": V(v),
			"no-overlay-focus": e.noOverlayFocus,
			onMount: r[4] ||= (e) => de(V(Wc).timePicker),
			"onUpdate:hours": r[5] ||= (e) => V(M)({
				hours: e,
				minutes: V(h).minutes,
				seconds: V(h).seconds
			}),
			"onUpdate:minutes": r[6] ||= (e) => V(M)({
				hours: V(h).hours,
				minutes: e,
				seconds: V(h).seconds
			}),
			"onUpdate:seconds": r[7] ||= (e) => V(M)({
				hours: V(h).hours,
				minutes: V(h).minutes,
				seconds: e
			}),
			onResetFlow: r[8] ||= (e) => t.$emit("reset-flow")
		}, u({ _: 2 }, [P(V(ue), (e, n) => ({
			name: e,
			fn: q((n) => [F(t.$slots, e, C(m(n)))])
		}))]), 1032, [
			"hours",
			"minutes",
			"seconds",
			"disabled-times-config",
			"validate-time",
			"no-overlay-focus"
		])])])) : s("", !0)], 64));
	}
}), Qu = (e, t) => {
	let { getDate: n, modelValue: r, year: i, calendars: o, defaults: { highlight: s, range: c, multiDates: l } } = $(), { isDateBetween: u, isDateEqual: d } = Ml(), { checkRangeAutoApply: f, handleMultiDatesSelect: p, setMonthOrYearRange: m } = pu();
	el();
	let { isDisabled: h } = tl(), { formatQuarterText: g } = Pl(), { selectYear: _, groupedYears: v, showYearPicker: y, isDisabled: b, toggleYearPicker: x, handleYearSelect: S, handleYear: C, setStartDate: w } = fu(t), T = N();
	D(() => {
		w();
	});
	let E = a(() => (e) => r.value ? Array.isArray(r.value) ? r.value.some((t) => Ws(e, t)) : Ws(r.value, e) : !1), O = (e) => {
		if (c.value.enabled) {
			if (Array.isArray(r.value)) {
				let t = d(e, r.value[0]) || d(e, r.value[1]);
				return u(r.value, T.value, e) && !t;
			}
			return !1;
		}
		return !1;
	}, k = (e, t) => e.quarter === xa(t) && e.year === Z(t), A = (e) => typeof s.value == "function" ? s.value({
		quarter: xa(e),
		year: Z(e)
	}) : s.value.quarters.some((t) => k(t, e)), j = a(() => (e) => {
		let t = Q(n(), { year: i.value(e) });
		return Oa({
			start: ja(t),
			end: Aa(t)
		}).map((e) => {
			let t = Da(e), n = Na(e), r = h(e), i = O(t), a = A(t);
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
	}, P = (e) => {
		r.value = m(e), f(r.value, t, r.value.length < 2);
	}, F = (e) => {
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
			if (!n) return o.value[t].month = ko(Na(e)), l.value.enabled ? M(e) : c.value.enabled ? P(e) : F(e);
		}
	};
}, $u = { class: "dp--quarter-items" }, ed = [
	"data-test-id",
	"disabled",
	"onClick",
	"onMouseover"
], td = /* @__PURE__ */ p({
	__name: "QuarterPicker",
	props: {
		flowStep: {},
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["reset-flow", "auto-apply"],
	setup(e, { expose: t, emit: r }) {
		let i = r, a = e, { defaults: { config: p } } = $(), m = ee(), { boolHtmlAttribute: h } = Ll(), g = Hl(m, zl.YearMode), { groupedYears: _, year: v, isDisabled: y, quarters: x, modelValue: C, showYearPicker: T, setHoverDate: E, selectQuarter: D, toggleYearPicker: O, handleYearSelect: A, handleYear: j } = Qu(a, i);
		return t({ getSidebarProps: () => ({
			modelValue: C,
			year: v,
			selectQuarter: D,
			handleYearSelect: A,
			handleYear: j
		}) }), (t, r) => (k(), o(su, {
			collapse: e.collapse,
			stretch: ""
		}, {
			default: q(({ instances: e, wrapClass: r }) => [(k(!0), c(n, null, P(e, (e) => (k(), c("div", {
				key: e,
				class: S(r)
			}, [l("div", {
				class: "dp-quarter-picker-wrap",
				style: w({ minHeight: `${V(p).modeHeight}px` })
			}, [
				t.$slots["top-extra"] ? F(t.$slots, "top-extra", {
					key: 0,
					value: V(C)
				}) : s("", !0),
				l("div", null, [f(du, {
					items: V(_)(e),
					instance: e,
					"show-year-picker": V(T)[e],
					year: V(v)(e),
					"is-disabled": (t) => V(y)(e, t),
					onHandleYear: (t) => V(j)(e, t),
					onYearSelect: (t) => V(A)(t, e),
					onToggleYearPicker: (t) => V(O)(e, t?.flow, t?.show)
				}, u({ _: 2 }, [P(V(g), (e, n) => ({
					name: e,
					fn: q((n) => [F(t.$slots, e, b({ ref_for: !0 }, n))])
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
				l("div", $u, [(k(!0), c(n, null, P(V(x)(e), (n, r) => (k(), c("div", { key: r }, [l("button", {
					type: "button",
					class: S(["dp--qr-btn", {
						"dp--qr-btn-active": n.active,
						"dp--qr-btn-between": n.isBetween,
						"dp--qr-btn-disabled": n.disabled,
						"dp--highlighted": n.highlighted
					}]),
					"data-dp-action-element": "0",
					"data-test-id": n.value,
					disabled: V(h)(n.disabled),
					onClick: (t) => V(D)(n.value, e, n.disabled),
					onMouseover: (e) => V(E)(n.value)
				}, [F(t.$slots, "quarter", {
					value: n.value,
					text: n.text
				}, () => [d(R(n.text), 1)])], 42, ed)]))), 128))])
			], 4)], 2))), 128))]),
			_: 3
		}, 8, ["collapse"]));
	}
}), nd = [
	"id",
	"tabindex",
	"role",
	"aria-label"
], rd = {
	key: 0,
	class: "dp--menu-load-container"
}, id = {
	key: 1,
	class: "dp--menu-header"
}, ad = ["data-dp-mobile"], od = {
	key: 0,
	class: "dp__sidebar_left"
}, sd = ["data-dp-mobile"], cd = [
	"data-test-id",
	"data-dp-mobile",
	"onClick",
	"onKeydown"
], ld = { class: "dp__instance_calendar" }, ud = {
	key: 2,
	class: "dp__sidebar_right"
}, dd = {
	key: 2,
	class: "dp__action_extra"
}, fd = /* @__PURE__ */ p({
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
		let i = r, d = ee(), { state: f, rootProps: p, defaults: { textInput: h, inline: g, config: _, ui: v, ariaLabels: y }, setState: b } = $(), { isMobile: x } = Nl(), { handleEventPropagation: T, getElWithin: E, checkStopPropagation: A, checkKeyDown: j } = jl();
		Zc();
		let M = U("inner-menu"), I = U("dp-menu"), z = U("dyn-cmp"), H = N(0), W = N(!1), G = N(!1), { flowStep: K, updateFlowStep: te, childMount: ne, resetFlow: re, handleFlow: ie } = nl(z), ae = (e) => {
			G.value = !0, _.value.allowPreventDefault && e.preventDefault(), A(e, _.value, !0);
		};
		D(() => {
			W.value = !0, oe(), globalThis.addEventListener("resize", oe);
			let e = le(I);
			e && !h.value.enabled && !g.value.enabled && b("menuFocused", !0), e && (e.addEventListener("pointerdown", ae), e.addEventListener("mousedown", ae)), document.addEventListener("mousedown", De);
		}), O(() => {
			globalThis.removeEventListener("resize", oe), document.removeEventListener("mousedown", De);
			let e = le(I);
			e && (e.removeEventListener("pointerdown", ae), e.removeEventListener("mousedown", ae));
		});
		let oe = () => {
			let e = le(M);
			e && (H.value = e.getBoundingClientRect().width);
		}, se = a(() => p.monthPicker ? hu : p.yearPicker ? _u : p.timePicker ? Nu : p.quarterPicker ? td : Zu), ce = () => {
			let e = le(I);
			e && e.focus({ preventScroll: !0 });
		}, ue = a(() => z.value?.getSidebarProps() || {}), de = Hl(d, zl.ActionRow), fe = Hl(d, zl.PassTrough), pe = a(() => ({
			dp__menu_disabled: p.disabled,
			dp__menu_readonly: p.readonly,
			"dp-menu-loading": p.loading
		})), me = a(() => ({
			dp__menu: !0,
			dp__menu_index: !g.value.enabled,
			dp__relative: g.value.enabled,
			...v.value.menu
		})), he = (e) => {
			A(e, _.value, !0);
		}, ge = (e) => {
			_.value.escClose && (i("close-picker"), T(e, _.value));
		}, _e = (e) => {
			p.arrowNavigation || (e === qc.left || e === qc.up ? Y("handleArrow", qc.left, 0, e === qc.up) : Y("handleArrow", qc.right, 0, e === qc.down));
		}, ve = (e) => {
			b("shiftKeyInMenu", e.shiftKey), !p.hideMonthYearSelect && e.code === Jc.tab && e.target.classList.contains("dp__menu") && f.shiftKeyInMenu && (e.preventDefault(), A(e, _.value, !0), i("close-picker"));
		}, ye = (e) => {
			z.value?.toggleTimePicker(!1, !1), z.value?.toggleMonthPicker(!1, !1, e), z.value?.toggleYearPicker(!1, !1, e);
		}, be = (e, t = 0) => e === "month" ? z.value?.toggleMonthPicker(!1, !0, t) : e === "year" ? z.value?.toggleYearPicker(!1, !0, t) : e === "time" ? z.value?.toggleTimePicker(!0, !1) : ye(t), Y = (e, ...t) => {
			z.value?.[e] && z.value?.[e](...t);
		}, xe = () => {
			Y("selectCurrentDate");
		}, Se = (e) => {
			Y("presetDate", B(e));
		}, Ce = () => {
			Y("clearHoverDate");
		}, we = (e, t) => {
			Y("updateMonthYear", e, t);
		}, Te = (e, t) => {
			e.preventDefault(), _e(t);
		}, Ee = (e) => {
			if (ve(e), e.key === Jc.home || e.key === Jc.end) return Y("selectWeekDate", e.key === Jc.home, e.target.getAttribute("id"));
			switch ((e.key === Jc.pageUp || e.key === Jc.pageDown) && (e.shiftKey ? (Y("changeYear", e.key === Jc.pageUp), E(I.value, "overlay-year")?.focus()) : (Y("changeMonth", e.key === Jc.pageUp), E(I.value, e.key === Jc.pageUp ? "action-prev" : "action-next")?.focus()), e.target.getAttribute("id") && I.value?.focus({ preventScroll: !0 })), e.key) {
				case Jc.esc: return ge(e);
				case Jc.arrowLeft: return Te(e, qc.left);
				case Jc.arrowRight: return Te(e, qc.right);
				case Jc.arrowUp: return Te(e, qc.up);
				case Jc.arrowDown: return Te(e, qc.down);
				default: return;
			}
		}, De = (e) => {
			g.value.enabled && !g.value.input && !I.value?.contains(e.target) && G.value && (G.value = !1, i("menu-blur"));
		};
		return t({
			updateMonthYear: we,
			switchView: be,
			onValueCleared: () => {
				z.value?.setStartTime?.();
			},
			handleFlow: ie
		}), (t, r) => (k(), c("div", {
			id: V(p).menuId,
			ref: "dp-menu",
			tabindex: V(g).enabled ? void 0 : "0",
			role: V(g).enabled ? void 0 : "dialog",
			"aria-label": V(y)?.menu,
			class: S(me.value),
			onMouseleave: Ce,
			onClick: he,
			onKeydown: Ee
		}, [
			(V(p).disabled || V(p).readonly) && V(g).enabled || V(p).loading ? (k(), c("div", {
				key: 0,
				class: S(pe.value)
			}, [V(p).loading ? (k(), c("div", rd, [...r[5] ||= [l("span", { class: "dp--menu-loader" }, null, -1)]])) : s("", !0)], 2)) : s("", !0),
			t.$slots["menu-header"] ? (k(), c("div", id, [F(t.$slots, "menu-header")])) : s("", !0),
			F(t.$slots, "arrow"),
			l("div", {
				ref: "inner-menu",
				class: S({
					dp__menu_content_wrapper: V(p).presetDates?.length || !!t.$slots["left-sidebar"] || !!t.$slots["right-sidebar"],
					"dp--menu-content-wrapper-collapsed": e.collapse && (V(p).presetDates?.length || !!t.$slots["left-sidebar"] || !!t.$slots["right-sidebar"])
				}),
				"data-dp-mobile": V(x),
				style: w({ "--dp-menu-width": `${H.value}px` })
			}, [
				t.$slots["left-sidebar"] ? (k(), c("div", od, [F(t.$slots, "left-sidebar", C(m(ue.value)))])) : s("", !0),
				V(p).presetDates.length ? (k(), c("div", {
					key: 1,
					class: S({
						"dp--preset-dates-collapsed": e.collapse,
						"dp--preset-dates": !0
					}),
					"data-dp-mobile": V(x)
				}, [(k(!0), c(n, null, P(V(p).presetDates, (r, i) => (k(), c(n, { key: i }, [r.slot ? F(t.$slots, r.slot, {
					key: 0,
					presetDate: Se,
					label: r.label,
					value: r.value
				}) : (k(), c("button", {
					key: 1,
					type: "button",
					style: w(r.style || {}),
					class: S(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
					"data-test-id": r.testId ?? void 0,
					"data-dp-mobile": V(x),
					onClick: J((e) => Se(r.value), ["prevent"]),
					onKeydown: (e) => V(j)(e, () => Se(r.value), !0)
				}, R(r.label), 47, cd))], 64))), 128))], 10, sd)) : s("", !0),
				l("div", ld, [(k(), o(L(se.value), {
					ref: "dyn-cmp",
					"flow-step": V(K),
					collapse: e.collapse,
					"no-overlay-focus": e.noOverlayFocus,
					"menu-wrap-ref": I.value,
					onMount: V(ne),
					onUpdateFlowStep: V(te),
					onResetFlow: V(re),
					onFocusMenu: ce,
					onSelectDate: r[0] ||= (e) => t.$emit("select-date"),
					onAutoApply: r[1] ||= (e) => t.$emit("auto-apply", e),
					onTimeUpdate: r[2] ||= (e) => t.$emit("time-update")
				}, u({ _: 2 }, [P(V(fe), (e, n) => ({
					name: e,
					fn: q((n) => [F(t.$slots, e, C(m({ ...n })))])
				}))]), 1064, [
					"flow-step",
					"collapse",
					"no-overlay-focus",
					"menu-wrap-ref",
					"onMount",
					"onUpdateFlowStep",
					"onResetFlow"
				]))]),
				t.$slots["right-sidebar"] ? (k(), c("div", ud, [F(t.$slots, "right-sidebar", C(m(ue.value)))])) : s("", !0)
			], 14, ad),
			t.$slots["action-extra"] ? (k(), c("div", dd, [t.$slots["action-extra"] ? F(t.$slots, "action-extra", {
				key: 0,
				selectCurrentDate: xe
			}) : s("", !0)])) : s("", !0),
			!V(p).autoApply || V(_).keepActionRow ? (k(), o($l, {
				key: 3,
				"menu-mount": W.value,
				"calendar-width": H.value,
				onClosePicker: r[3] ||= (e) => t.$emit("close-picker"),
				onSelectDate: r[4] ||= (e) => t.$emit("select-date"),
				onSelectNow: xe
			}, u({ _: 2 }, [P(V(de), (e, n) => ({
				name: e,
				fn: q((n) => [F(t.$slots, e, C(m(n)))])
			}))]), 1032, ["menu-mount", "calendar-width"])) : s("", !0)
		], 42, nd));
	}
}), pd = ["data-dp-mobile"], md = /* @__PURE__ */ p({
	__name: "VueDatePicker",
	setup(e, { expose: t }) {
		let { rootEmit: n, setState: d, inputValue: p, modelValue: h, rootProps: g, defaults: { inline: _, config: v, textInput: y, range: b, multiDates: T, teleport: E, floatingConfig: A } } = $(), { validateDate: j, isValidTime: M } = tl(), { menuTransition: I, showTransition: L } = $c(), { isMobile: R } = Nl(), { findNextFocusableElement: B, getNumVal: H } = jl(), W = ee(), G = N(!1), te = N(_.value.enabled || g.centered), ne = z(g, "modelValue"), J = z(g, "timezone"), re = U("dp-menu-wrap"), ie = U("dp-menu"), ae = U("input-cmp"), oe = U("picker-wrapper"), se = U("menu-arrow"), le = N(!1), ue = N(!1), de = N(!1), fe = N(!0), { floatingStyles: pe, middlewareData: me, placement: he, y: ge } = qi(ae, re, {
			strategy: A.value.strategy,
			placement: A.value.placement,
			middleware: ((e) => (A.value.arrow && e.push(Wi({ element: A.value.arrow === !0 ? se : A.value.arrow })), A.value.flip && e.push(Ni(typeof A.value.flip == "object" ? A.value.flip : {})), A.value.shift && e.push(Mi(typeof A.value.shift == "object" ? A.value.shift : {})), e))([ji(A.value.offset)]),
			whileElementsMounted: Ai
		});
		D(() => {
			ye(g.modelValue), x().then(() => {
				_.value.enabled || globalThis.addEventListener("resize", De);
			}), _.value.enabled && (G.value = !0), globalThis.addEventListener("keyup", Oe), globalThis.addEventListener("keydown", ke);
		}), O(() => {
			_.value.enabled || globalThis.removeEventListener("resize", De), globalThis.removeEventListener("keyup", Oe), globalThis.removeEventListener("keydown", ke);
		});
		let _e = Ul(W, g.presetDates), ve = Hl(W, zl.Input);
		K([ne, J], () => {
			ye(ne.value);
		}, { deep: !0 }), K([he, ge], () => {
			!_.value.enabled && !g.centered && fe.value && (te.value = !1, x().then(() => {
				fe.value = !1, te.value = !0;
			}));
		});
		let { parseExternalModelValue: ye, emitModelValue: be, formatInputValue: Y, checkBeforeEmit: xe } = Qc(), Se = a(() => ({
			dp__main: !0,
			dp__theme_dark: g.dark,
			dp__theme_light: !g.dark,
			dp__flex_display: _.value.enabled,
			"dp--flex-display-collapsed": de.value,
			dp__flex_display_with_input: _.value.input
		})), Ce = a(() => g.dark ? "dp__theme_dark" : "dp__theme_light"), we = a(() => _.value.enabled && (g.timePicker || g.monthPicker || g.yearPicker || g.quarterPicker)), Te = () => ae.value?.$el?.getBoundingClientRect() ?? {
			width: 0,
			left: 0,
			right: 0
		}, Ee = () => {
			G.value && v.value.closeOnScroll && Re();
		}, De = () => {
			let e = ie.value?.$el.getBoundingClientRect().width ?? 0;
			de.value = document.body.offsetWidth <= e;
		}, Oe = (e) => {
			e.key === "Tab" && !_.value.enabled && !g.teleport && v.value.tabOutClosesMenu && (oe.value.contains(document.activeElement) || Re()), ue.value = e.shiftKey;
		}, ke = (e) => {
			ue.value = e.shiftKey;
		}, Ae = () => {
			!g.disabled && !g.readonly && (fe.value = !0, G.value = !0, G.value && n("open"), G.value || Le(), ye(g.modelValue));
		}, je = () => {
			p.value = "", Le(), ie.value?.onValueCleared(), ae.value?.setParsedDate(null), n("update:model-value", null), n("cleared"), v.value.closeOnClearValue && Re();
		}, Me = () => {
			let e = h.value;
			return !e || !Array.isArray(e) && j(e) ? !0 : Array.isArray(e) ? T.value.enabled || e.length === 2 && j(e[0]) && j(e[1]) ? !0 : b.value.partialRange && !g.timePicker ? j(e[0]) : !1 : !1;
		}, Ne = () => {
			xe() && Me() ? (be(), Re()) : n("invalid-select");
		}, Pe = (e) => {
			Fe(), be(), v.value.closeOnAutoApply && !e && Re();
		}, Fe = () => {
			ae.value && y.value.enabled && ae.value.setParsedDate(h.value);
		}, Ie = (e = !1) => {
			g.autoApply && M(h.value) && Me() && (b.value.enabled && Array.isArray(h.value) ? (b.value.partialRange || h.value.length === 2) && Pe(e) : Pe(e));
		}, Le = () => {
			y.value.enabled || (h.value = null);
		}, Re = (e = !1) => {
			fe.value = !0, e && h.value && v.value.setDateOnMenuClose && Ne(), _.value.enabled || (G.value && (G.value = !1, d("menuFocused", !1), d("shiftKeyInMenu", !1), n("closed"), p.value && ye(ne.value)), Le(), n("blur"));
		}, ze = (e, t, r = !1) => {
			if (!e) {
				h.value = null;
				return;
			}
			let i = Array.isArray(e) ? e.every((e) => j(e)) : j(e), a = M(e);
			i && a ? (d("isTextInputDate", !0), h.value = e, t ? (le.value = r, Ne(), n("text-submit")) : g.autoApply && Ie(!0), x().then(() => {
				d("isTextInputDate", !1);
			})) : n("invalid-date", e);
		}, Be = () => {
			g.autoApply && M(h.value) && be(), Fe();
		}, Ve = () => G.value ? Re() : Ae(), He = (e) => {
			h.value = e;
		}, Ue = () => {
			y.value.enabled && (d("isInputFocused", !0), Y()), n("focus");
		}, We = () => {
			y.value.enabled && (d("isInputFocused", !1), ye(g.modelValue), le.value && B(oe.value, ue.value)?.focus()), n("blur");
		}, Ge = (e, t) => {
			ie.value && ie.value.updateMonthYear(t ?? 0, {
				month: H(e.month),
				year: H(e.year)
			});
		}, Ke = (e) => {
			ye(e ?? g.modelValue);
		}, qe = (e, t) => {
			ie.value?.switchView(e, t);
		}, Je = (e, t) => {
			if (G.value) return v.value.onClickOutside ? v.value.onClickOutside(e, t) : Re(!0);
		};
		return ce(re, (e) => Je(Me, e), { ignore: [ae] }), t({
			closeMenu: Re,
			selectDate: Ne,
			clearValue: je,
			openMenu: Ae,
			onScroll: Ee,
			formatInputValue: Y,
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
			inputRef: () => ae
		}), (e, t) => (k(), c("div", {
			ref: "picker-wrapper",
			class: S(Se.value),
			"data-datepicker-instance": "",
			"data-dp-mobile": V(R)
		}, [f(Jl, {
			ref: "input-cmp",
			"is-menu-open": G.value,
			onClear: je,
			onOpen: Ae,
			onSetInputDate: ze,
			onSetEmptyDate: V(be),
			onSelectDate: Ne,
			onToggle: Ve,
			onClose: Re,
			onFocus: Ue,
			onBlur: We,
			onRealBlur: t[0] ||= (e) => V(d)("isInputFocused", !1)
		}, u({ _: 2 }, [P(V(ve), (t, n) => ({
			name: t,
			fn: q((n) => [F(e.$slots, t, C(m(n)))])
		}))]), 1032, ["is-menu-open", "onSetEmptyDate"]), f(r, {
			to: V(E),
			disabled: !V(E)
		}, {
			default: q(() => [l("div", {
				ref: "dp-menu-wrap",
				class: S({
					"dp--menu-wrapper": !V(_).enabled,
					dp__outer_menu_wrap: !0,
					"dp--centered": V(g).centered
				}),
				style: w(!V(_).enabled && !V(g).centered ? V(pe) : void 0)
			}, [f(i, {
				name: V(I)(V(he).startsWith("top")),
				css: V(L) && !V(_).enabled && !V(g).centered && te.value
			}, {
				default: q(() => [G.value && te.value ? (k(), o(fd, {
					key: 0,
					ref: "dp-menu",
					class: S({ [Ce.value]: !0 }),
					"no-overlay-focus": we.value,
					collapse: de.value,
					"get-input-rect": Te,
					onClosePicker: Re,
					onSelectDate: Ne,
					onAutoApply: Ie,
					onTimeUpdate: Be,
					onMenuBlur: t[1] ||= (e) => V(n)("blur")
				}, u({ _: 2 }, [P(V(_e), (t, n) => ({
					name: t,
					fn: q((n) => [F(e.$slots, t, C(m({ ...n })))])
				})), !V(_).enabled && !V(g).centered && V(A).arrow === !0 ? {
					name: "arrow",
					fn: q(() => [l("div", {
						ref: "menu-arrow",
						class: S({
							dp__arrow_top: V(he) === "bottom",
							dp__arrow_bottom: V(he) === "top"
						}),
						style: w({
							left: V(me).arrow?.x == null ? "" : `${V(me).arrow.x}px`,
							top: V(me).arrow?.y == null ? "" : `${V(me).arrow.y}px`
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
		}, 8, ["to", "disabled"])], 10, pd));
	}
}), hd = /* @__PURE__ */ p({
	__name: "VueDatePickerRoot",
	props: /* @__PURE__ */ v({
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
	}, Dl),
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
		Hc(i, r);
		let a = Ul(ee(), i.presetDates);
		return t(Il(U("date-picker"))), (e, t) => (k(), o(md, { ref: "date-picker" }, u({ _: 2 }, [P(V(a), (t, n) => ({
			name: t,
			fn: q((n) => [F(e.$slots, t, C(m(n)))])
		}))]), 1536));
	}
}), gd = ue("darkMode", !0), _d = () => {
	typeof window > "u" || (gd.value ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"));
};
function vd() {
	_d();
}
function yd() {
	return {
		isDarkMode: gd,
		toggleTheme: () => {
			gd.value = !gd.value, _d();
		},
		applyTheme: _d
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/es/_lib/formatDistance.js
var bd = {
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
}, xd = (e, t, n) => {
	let r, i = bd[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "en " + r : "hace " + r : r;
}, Sd = {
	date: Ia({
		formats: {
			full: "EEEE, d 'de' MMMM 'de' y",
			long: "d 'de' MMMM 'de' y",
			medium: "d MMM y",
			short: "dd/MM/y"
		},
		defaultWidth: "full"
	}),
	time: Ia({
		formats: {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: Ia({
		formats: {
			full: "{{date}} 'a las' {{time}}",
			long: "{{date}} 'a las' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, Cd = {
	lastWeek: "'el' eeee 'pasado a la' p",
	yesterday: "'ayer a la' p",
	today: "'hoy a la' p",
	tomorrow: "'mañana a la' p",
	nextWeek: "eeee 'a la' p",
	other: "P"
}, wd = {
	lastWeek: "'el' eeee 'pasado a las' p",
	yesterday: "'ayer a las' p",
	today: "'hoy a las' p",
	tomorrow: "'mañana a las' p",
	nextWeek: "eeee 'a las' p",
	other: "P"
}, Td = {
	code: "es",
	formatDistance: xd,
	formatLong: Sd,
	formatRelative: (e, t, n, r) => t.getHours() === 1 ? Cd[e] : wd[e],
	localize: {
		ordinalNumber: (e, t) => Number(e) + "º",
		era: Ba({
			values: {
				narrow: ["AC", "DC"],
				abbreviated: ["AC", "DC"],
				wide: ["antes de cristo", "después de cristo"]
			},
			defaultWidth: "wide"
		}),
		quarter: Ba({
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
		month: Ba({
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
		day: Ba({
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
		dayPeriod: Ba({
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
		ordinalNumber: Ga({
			matchPattern: /^(\d+)(º)?/i,
			parsePattern: /\d+/i,
			valueCallback: function(e) {
				return parseInt(e, 10);
			}
		}),
		era: Ha({
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
		quarter: Ha({
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
		month: Ha({
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
		day: Ha({
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
		dayPeriod: Ha({
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
}, Ed = ["for"], Dd = {
	key: 1,
	class: "relative"
}, Od = [
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
], kd = {
	key: 1,
	class: "space-y-1"
}, Ad = [
	"id",
	"value",
	"onInput",
	"min",
	"max",
	"step",
	"disabled",
	"autocomplete"
], jd = { class: "flex justify-between text-xs text-gray-400" }, Md = { class: "font-medium text-gray-600 dark:text-gray-300" }, Nd = [
	"id",
	"value",
	"onInput",
	"type",
	"placeholder",
	"disabled",
	"autocomplete"
], Pd = [
	"id",
	"placeholder",
	"autocomplete"
], Fd = {
	key: 4,
	class: "absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer transition-colors duration-200"
}, Id = {
	key: 5,
	class: "absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer transition-colors duration-200"
}, Ld = {
	key: 6,
	class: "absolute inset-y-0 right-0 pr-3 flex items-center"
}, Rd = {
	key: 7,
	class: "absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer transition-colors duration-200"
}, zd = {
	key: 2,
	class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, Bd = /* @__PURE__ */ p({
	__name: "FormInput",
	props: /*@__PURE__*/ y({
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
		let t = kn, n = a(() => {
			if (r.mask) return r.mask;
		}), r = e, i = H(e, "modelValue"), { isDarkMode: u } = yd(), d = N(""), p = N(null), m = a({
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
				let t = Ks(e);
				return ba(t) ? xo(t, "yyyy-MM-dd HH:mm") : null;
			} catch {
				return null;
			}
		}
		function g(e) {
			if (!e) return null;
			try {
				let t = Ks(e.replace(" ", "T"));
				return ba(t) ? t.toISOString() : null;
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
				let t = hn(e, v.value.config), n = parseFloat(String(t));
				Number.isNaN(n) ? i.value = 0 : i.value = Math.round(n * 100);
			}
		}), K(() => p.value, (e) => {
			if (r.type === "datetime") {
				let t = g(e);
				t !== null && (i.value = t);
			}
		});
		let y = N(!1), x = a(() => r.type === "password"), C = a(() => r.type === "password" ? y.value ? "text" : "password" : r.type), w = a(() => r.type === "password" ? y.value ? je : Me : null), T = () => {
			y.value = !y.value;
		};
		return (a, p) => {
			let h = Vt;
			return k(), c("div", null, [e.label && !e.small ? (k(), c("label", {
				key: 0,
				for: e.id,
				class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
			}, R(e.label), 9, Ed)) : s("", !0), f(V(oe), {
				name: e.name,
				label: e.label?.toLowerCase(),
				rules: e.rules
			}, {
				default: q(({ field: a, errorMessage: g }) => [l("div", null, [
					e.url && e.searchBy ? (k(), o(h, {
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
					])) : (k(), c("div", Dd, [
						e.type === "date" || e.type === "datetime" || e.type === "time" ? (k(), o(V(hd), {
							key: 0,
							modelValue: m.value,
							"onUpdate:modelValue": [p[1] ||= (e) => m.value = e, (e) => _(e, a)],
							"min-date": e.minDate ?? void 0,
							"max-date": e.maxDate ?? void 0,
							"disabled-dates": e.disabledDates,
							id: e.id,
							locale: V(Td),
							"time-picker": e.type === "time",
							"model-type": e.type === "time" ? "HH:mm" : e.type === "datetime" ? "yyyy-MM-dd HH:mm" : "yyyy-MM-dd",
							"time-config": e.type === "date" ? { enableTimePicker: !1 } : { enableTimePicker: !0 },
							dark: V(u),
							"text-input": "",
							teleport: !1,
							autocomplete: e.autocomplete
						}, {
							"dp-input": q((t) => [l("input", {
								id: e.id,
								value: t.value,
								placeholder: e.placeholder,
								onInput: t.onInput,
								onKeydown: [ne(t.onEnter, ["enter"]), ne(t.onTab, ["tab"])],
								onBlur: t.onBlur,
								onFocus: t.onFocus,
								onKeypress: t.onKeypress,
								onPaste: t.onPaste,
								class: S([
									"w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
									e.leftIcon ? "pl-10" : "pl-4",
									e.rightIcon || x.value ? "pr-10" : "pr-4",
									g ? "border-danger-500 dark:border-danger-500" : "",
									e.small ? "py-2" : "py-3"
								]),
								disabled: e.disabled,
								autocomplete: e.autocomplete
							}, null, 42, Od)]),
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
						])) : e.type === "range" ? (k(), c("div", kd, [l("input", b({ id: e.id }, a, {
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
						}), null, 16, Ad), l("div", jd, [
							l("span", null, R(e.min), 1),
							l("span", Md, R(i.value), 1),
							l("span", null, R(e.max), 1)
						])])) : e.type === "money" ? te((k(), c("input", {
							key: 3,
							id: e.id,
							"onUpdate:modelValue": p[2] ||= (e) => d.value = e,
							type: "text",
							placeholder: e.placeholder,
							autocomplete: e.autocomplete,
							class: S([
								"w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 pl-10",
								e.rightIcon || x.value || e.type === "money" ? "pr-10" : "pr-4",
								g ? "border-danger-500 dark:border-danger-500" : "",
								e.small ? "py-2" : "py-3"
							])
						}, null, 10, Pd)), [[
							W,
							d.value,
							void 0,
							{ lazy: !0 }
						], [V(t), v.value.config]]) : te((k(), c("input", b({
							key: 2,
							id: e.id
						}, a, {
							value: i.value,
							onInput: (e) => {
								a.onChange(e), i.value = e.target.value;
							},
							type: C.value,
							placeholder: e.placeholder,
							disabled: e.disabled,
							autocomplete: e.autocomplete,
							class: [
								"w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:cursor-not-allowed",
								e.leftIcon ? "pl-10" : "pl-4",
								e.rightIcon || x.value ? "pr-10" : "pr-4",
								g ? "border-danger-500 dark:border-danger-500" : "",
								e.small ? "py-2" : "py-3"
							]
						}), null, 16, Nd)), [[V(qn), n.value]]),
						e.type === "money" ? (k(), c("div", Fd, [(k(), o(L(V(ke)), { class: S([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"]) }, null, 8, ["class"]))])) : s("", !0),
						e.leftIcon ? (k(), c("div", Id, [(k(), o(L(e.leftIcon), { class: S([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"]) }, null, 8, ["class"]))])) : s("", !0),
						r.loading ? (k(), c("div", Ld, [f(V(Pe), { class: S([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400 animate-spin"]) }, null, 8, ["class"])])) : e.rightIcon && !x.value ? (k(), c("div", Rd, [(k(), o(L(e.rightIcon), { class: S([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"]) }, null, 8, ["class"]))])) : s("", !0),
						x.value ? (k(), c("button", {
							key: 8,
							type: "button",
							onClick: T,
							class: "absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer transition-colors duration-200"
						}, [(k(), o(L(w.value), { class: S([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"]) }, null, 8, ["class"]))])) : s("", !0)
					])),
					f(V(ae), {
						name: e.name,
						class: "mt-1 text-sm text-danger-600 dark:text-danger-400"
					}, null, 8, ["name"]),
					e.help ? (k(), c("p", zd, R(e.help), 1)) : s("", !0)
				])]),
				_: 1
			}, 8, [
				"name",
				"label",
				"rules"
			])]);
		};
	}
}), Vd = { class: "flex justify-end space-x-3 pt-4" }, Hd = /* @__PURE__ */ p({
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
		let r = e.object({ confirmation: e.string().required("La confirmación es requerida").oneOf(["Confirmar"], "Debes escribir 'Confirmar' exactamente") }), i = n, a = j({ confirmation: "" }), s = () => {
			t.loading || (a.confirmation = "", i("close"));
		}, c = () => {
			i("confirm");
		};
		return K(() => t.open, (e) => {
			e || (a.confirmation = "");
		}), (e, n) => {
			let i = Bd, u = Ke, p = xt;
			return k(), o(p, {
				open: t.open,
				title: t.title,
				subtitle: t.subtitle,
				onClose: s
			}, {
				default: q(() => [f(V(se), {
					onSubmit: c,
					class: "space-y-4",
					"initial-values": a,
					"validation-schema": V(r)
				}, {
					default: q(() => [l("div", null, [f(i, {
						modelValue: a.confirmation,
						"onUpdate:modelValue": n[0] ||= (e) => a.confirmation = e,
						id: "confirmation",
						name: "confirmation",
						label: "Confirmación",
						placeholder: "Escribe 'Confirmar'"
					}, null, 8, ["modelValue"])]), l("div", Vd, [f(u, {
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
}), Ud = { class: "mt-4 text-sm text-gray-600 dark:text-gray-400 tabular-nums" }, Wd = /* @__PURE__ */ p({
	__name: "ResultCount",
	props: {
		internalPaginationServer: {},
		totalItems: {}
	},
	setup(e) {
		let t = e, n = a(() => t.internalPaginationServer.total);
		return (t, r) => (k(), c("div", Ud, " Mostrando " + R(e.totalItems) + " de " + R(V(n)) + " resultados ", 1));
	}
}), Gd = /* @__PURE__ */ p({
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
		return (t, n) => e.to ? (k(), o(V(re), {
			key: 0,
			to: e.to,
			class: S(["w-full text-left px-4 py-2 text-sm transition-colors duration-150 flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/30 hover:text-gray-900 dark:hover:text-white", { "bg-gray-100 dark:bg-gray-700/50 text-gray-900 dark:text-white": e.active }])
		}, {
			default: q(() => [e.icon ? (k(), o(L(e.icon), {
				key: 0,
				class: "w-4 h-4"
			})) : s("", !0), l("span", null, R(e.label), 1)]),
			_: 1
		}, 8, ["to", "class"])) : (k(), c("button", {
			key: 1,
			type: "button",
			onClick: i,
			class: S(["w-full text-left px-4 py-2 text-sm transition-colors duration-150 flex items-center space-x-2 cursor-pointer text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/30 hover:text-gray-900 dark:hover:text-white", { "bg-gray-100 dark:bg-gray-700/50 text-gray-900 dark:text-white": e.active }])
		}, [e.icon ? (k(), o(L(e.icon), {
			key: 0,
			class: "w-4 h-4"
		})) : s("", !0), l("span", null, R(e.label), 1)], 2));
	}
}), Kd = { class: "py-1" }, qd = /* @__PURE__ */ p({
	__name: "Dropdown",
	props: /*@__PURE__*/ y({
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
		let t = e, r = H(e, "modelValue"), i = N(!1), u = N(), p = a(() => t.items.find((e) => e.value === r.value)), m = a(() => `absolute w-48 max-h-60 bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl shadow-lg z-[9999] ${{
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
		return D(() => {
			document.addEventListener("click", v);
		}), O(() => {
			document.removeEventListener("click", v);
		}), (t, r) => {
			let a = Ke, g = Gd, v = St;
			return k(), c("div", {
				class: "relative",
				ref_key: "dropdownRef",
				ref: u
			}, [f(a, {
				variant: e.triggerVariant,
				size: e.triggerSize,
				icon: V(Ee),
				iconPosition: "right",
				small: e.triggerSmall,
				iconClass: V(i) ? "rotate-180 transition-transform duration-200" : "transition-transform duration-200",
				onClick: h,
				class: "bg-white dark:bg-gray-800/70 backdrop-blur-sm border-gray-300 dark:border-gray-700/70 hover:bg-gray-50 dark:hover:bg-gray-700/70 focus:ring-0 focus:border-gray-400 dark:focus:border-gray-600"
			}, {
				default: q(() => [d(R(V(p)?.label || e.placeholder), 1)]),
				_: 1
			}, 8, [
				"variant",
				"size",
				"icon",
				"small",
				"iconClass"
			]), f(v, null, {
				default: q(() => [V(i) ? (k(), c("div", {
					key: 0,
					class: S(V(m))
				}, [l("div", Kd, [(k(!0), c(n, null, P(e.items, (e) => (k(), o(g, {
					key: e.value,
					label: e.label,
					icon: e.icon,
					active: V(p)?.value === e.value,
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
}), Jd = { class: "flex items-center justify-between" }, Yd = { class: "text-sm text-gray-600 dark:text-gray-400 tabular-nums" }, Xd = { class: "flex items-center space-x-2" }, Zd = { class: "flex items-center space-x-1" }, Qd = {
	key: 1,
	class: "px-2 text-gray-600 dark:text-gray-400"
}, $d = /* @__PURE__ */ p({
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
			let i = Ke;
			return k(), c("div", Jd, [l("div", Yd, " Página " + R(e.internalPaginationServer.current_page) + " de " + R(e.internalPaginationServer.last_page), 1), l("div", Xd, [
				f(i, {
					disabled: e.internalPaginationServer.current_page === 1,
					variant: "outline",
					size: "auto",
					small: !0,
					icon: V(De),
					"icon-class": "h-4 w-4",
					class: "px-2.5!",
					onClick: r[0] ||= (t) => u(e.internalPaginationServer.current_page - 1)
				}, null, 8, ["disabled", "icon"]),
				l("div", Zd, [(k(!0), c(n, null, P(s.value, (t) => (k(), c(n, { key: t }, [t === -1 ? (k(), c("span", Qd, "...")) : (k(), o(i, {
					key: 0,
					variant: t === e.internalPaginationServer.current_page ? "primary" : "outline",
					size: "auto",
					small: !0,
					class: "tabular-nums",
					onClick: (e) => u(t)
				}, {
					default: q(() => [d(R(t), 1)]),
					_: 2
				}, 1032, ["variant", "onClick"]))], 64))), 128))]),
				f(i, {
					disabled: e.internalPaginationServer.current_page === e.internalPaginationServer.last_page,
					variant: "outline",
					size: "auto",
					small: !0,
					icon: V(Oe),
					"icon-class": "h-4 w-4",
					class: "px-2.5!",
					onClick: r[1] ||= (t) => u(e.internalPaginationServer.current_page + 1)
				}, null, 8, ["disabled", "icon"])
			])]);
		};
	}
}), ef = { class: "bg-gray-50 dark:bg-gray-800/30" }, tf = {
	key: 0,
	style: {
		width: "120px",
		"min-width": "120px",
		"max-width": "120px"
	},
	class: "px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider overflow-hidden text-ellipsis"
}, nf = /* @__PURE__ */ p({
	__name: "TableHeader",
	props: {
		columns: {},
		showActions: { type: Boolean },
		actionsLabel: {}
	},
	setup(e) {
		return (t, r) => (k(), c("thead", ef, [l("tr", null, [(k(!0), c(n, null, P(e.columns, (e) => (k(), c("th", {
			key: e.key,
			style: w({
				width: e.width ? typeof e.width == "number" ? `${e.width}px` : e.width : "auto",
				minWidth: e.width ? typeof e.width == "number" ? `${e.width}px` : e.width : "150px",
				maxWidth: e.width ? typeof e.width == "number" ? `${e.width}px` : e.width : "none"
			}),
			class: "px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider overflow-hidden text-ellipsis"
		}, R(e.label), 5))), 128)), e.showActions ? (k(), c("th", tf, R(e.actionsLabel || "Actions"), 1)) : s("", !0)])]));
	}
}), rf = { class: "bg-white dark:bg-gray-800/20 divide-y divide-gray-200 dark:divide-gray-700 animate-pulse" }, af = {
	key: 0,
	style: {
		width: "120px",
		"min-width": "120px",
		"max-width": "120px"
	},
	class: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300 overflow-hidden text-ellipsis"
}, of = /* @__PURE__ */ p({
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
		return (r, i) => (k(), c("tbody", rf, [(k(!0), c(n, null, P(e.rows, (r) => (k(), c("tr", {
			key: r,
			class: "hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-200"
		}, [(k(!0), c(n, null, P(e.columns, (e, n) => (k(), c("td", {
			key: n,
			class: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300 overflow-hidden text-ellipsis"
		}, [l("div", {
			class: "h-4 bg-gray-200 dark:bg-gray-700 rounded",
			style: w({ width: t() })
		}, null, 4)]))), 128)), e.showActions ? (k(), c("td", af, [...i[0] ||= [l("div", { class: "h-4 bg-gray-200 dark:bg-gray-700 rounded w-16" }, null, -1)]])) : s("", !0)]))), 128))]));
	}
}), sf = N(!1);
function cf() {
	let e = g(wt);
	if (!e) throw Error("useTable: no request instance provided. Call app.provide(useRequestKey, useRequest) in the consuming app.");
	let { get: t } = e(), n = N(!1), r = N(null), i = N([]), a = N({
		total: 0,
		per_page: 0,
		current_page: 1,
		from: 0,
		to: 0,
		last_page: 0
	});
	return {
		refreshData: sf,
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
			sf.value = !0, setTimeout(() => {
				sf.value = !1;
			}, 200);
		}
	};
}
//#endregion
//#region src/components/DataTable.vue?vue&type=script&setup=true&lang.ts
var lf = {
	key: 0,
	class: "mb-4 flex justify-between items-center"
}, uf = { class: "flex items-center relative" }, df = { class: "relative w-64" }, ff = {
	key: 0,
	class: "absolute right-3 top-1/2 transform -translate-y-1/2"
}, pf = {
	key: 1,
	class: "overflow-x-auto min-w-full"
}, mf = {
	key: 1,
	class: "bg-white dark:bg-gray-800/20 divide-y divide-gray-200 dark:divide-gray-700"
}, hf = ["onClick"], gf = { key: 1 }, _f = { key: 2 }, vf = {
	key: 0,
	style: {
		width: "120px",
		"min-width": "120px",
		"max-width": "120px"
	},
	class: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300"
}, yf = {
	key: 2,
	class: "space-y-4"
}, bf = {
	key: 0,
	class: "space-y-4"
}, xf = ["onClick"], Sf = { class: "space-y-3" }, Cf = { class: "text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider w-1/3" }, wf = { class: "text-sm text-gray-900 dark:text-gray-300 w-2/3 text-right tabular-nums" }, Tf = { key: 1 }, Ef = { key: 2 }, Df = {
	key: 0,
	class: "flex justify-between items-center pt-3 border-t border-gray-200 dark:border-gray-700"
}, Of = { class: "text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" }, kf = { class: "flex space-x-2" }, Af = {
	key: 3,
	class: "text-center py-12 text-danger-600 dark:text-danger-400"
}, jf = { class: "text-lg" }, Mf = /* @__PURE__ */ p({
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
		let r = t, { refreshData: i, isLoading: u, error: p, internalData: m, internalPaginationServer: h, fetchData: g } = cf(), v = N(""), y = N(!1), b = N("10"), x = N(1), C = [
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
		], T = e, E = ee(), A = a(() => !!E.actions), j = N(!1), M = null, I = () => {
			j.value = window.innerWidth < 640;
		};
		D(() => {
			I(), M = new ResizeObserver(() => {
				I();
			}), M.observe(document.body);
		}), O(() => {
			M &&= (M.disconnect(), null), y.value = !1;
		});
		let L = (e) => {
			x.value = e;
		}, z = a(() => {
			let e = T.columns.reduce((e, t) => {
				if (t.width) {
					let n = typeof t.width == "number" ? t.width : parseInt(t.width.toString());
					return e + (isNaN(n) ? 0 : n);
				}
				return e;
			}, 0), t = T.columns.filter((e) => !e.width).length * 150, n = A.value ? 120 : 0;
			return e === 0 && !A.value ? "100%" : `max(${e + t + n}px, 100%)`;
		}), B = a(() => T.columns.some((e) => e.width)), H = async () => {
			T.url && (await g(T.url, x.value, b.value, v.value, T.searchBy), x.value = h.value.current_page, r("pagination-loaded", h.value));
		};
		K(() => T.url, () => {
			T.url && H();
		}, { immediate: !0 }), K(() => [b.value, x.value], () => {
			T.url && H();
		}), fe(() => v.value, async () => {
			T.url && T.searchBy && (x.value = 1, y.value = !0, await H(), y.value = !1);
		}, { debounce: 500 }), K(() => i.value, (e) => {
			e && T.url && H();
		});
		function U(e, t) {
			let n = t.key.toString().split("."), r = e;
			for (let e of n) if (r && typeof r == "object" && e in r) r = r[e];
			else return "";
			return r;
		}
		function W(e) {
			r("row-selected", e);
		}
		return (t, r) => {
			let i = qd, a = Bd, g = Ke, x = Wd;
			return k(), c("div", null, [
				e.showSearch ? (k(), c("div", lf, [l("div", uf, [f(i, {
					modelValue: V(b),
					"onUpdate:modelValue": r[0] ||= (e) => _(b) ? b.value = e : null,
					items: C,
					"trigger-small": !0,
					class: "w-20"
				}, null, 8, ["modelValue"])]), l("div", df, [f(a, {
					modelValue: V(v),
					"onUpdate:modelValue": r[1] ||= (e) => _(v) ? v.value = e : null,
					label: "",
					id: "table-search",
					name: "table-search",
					placeholder: "Buscar...",
					"left-icon": V(Le),
					small: "",
					disabled: V(y)
				}, null, 8, [
					"modelValue",
					"left-icon",
					"disabled"
				]), V(y) ? (k(), c("div", ff, [...r[2] ||= [l("div", { class: "animate-spin rounded-full h-4 w-4 border-b-2 border-primary-500" }, null, -1)]])) : s("", !0)])])) : s("", !0),
				V(j) ? (k(), c("div", yf, [V(u) ? (k(), c("div", bf, [(k(), c(n, null, P(5, (e) => l("div", {
					key: e,
					class: "bg-gray-50 dark:bg-gray-800/20 rounded-lg p-4 animate-pulse"
				}, [...r[3] ||= [l("div", { class: "space-y-3" }, [
					l("div", { class: "h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" }),
					l("div", { class: "h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" }),
					l("div", { class: "h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3" })
				], -1)]])), 64))])) : (k(!0), c(n, { key: 1 }, P(V(m), (r, i) => (k(), c("div", {
					key: i,
					class: "bg-white dark:bg-gray-800/20 rounded-lg p-4 border border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-200",
					onClick: (e) => W(r)
				}, [l("div", Sf, [(k(!0), c(n, null, P(T.columns, (e, n) => (k(), c("div", {
					key: e.key,
					class: S(["flex justify-between items-start", n < T.columns.length - 1 ? "pb-3 border-b border-gray-200 dark:border-gray-700" : ""])
				}, [l("span", Cf, R(e.label), 1), l("div", wf, [e.slot ? F(t.$slots, e.slot, {
					row: r,
					value: U(r, e)
				}, void 0, void 0, 0) : e.format ? (k(), c("span", Tf, R(e.format(r)), 1)) : (k(), c("span", Ef, R(U(r, e)), 1))])], 2))), 128)), V(A) ? (k(), c("div", Df, [l("span", Of, R(e.actionsLabel || "Actions"), 1), l("div", kf, [F(t.$slots, "actions", { row: r })])])) : s("", !0)])], 8, xf))), 128))])) : (k(), c("div", pf, [l("table", {
					class: "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
					style: w({
						width: V(z),
						tableLayout: V(B) ? "fixed" : "auto"
					})
				}, [f(nf, {
					columns: T.columns,
					"show-actions": V(A),
					"actions-label": e.actionsLabel
				}, null, 8, [
					"columns",
					"show-actions",
					"actions-label"
				]), V(u) ? (k(), o(of, {
					key: 0,
					rows: 10,
					columns: T.columns,
					"show-actions": V(A)
				}, null, 8, ["columns", "show-actions"])) : (k(), c("tbody", mf, [(k(!0), c(n, null, P(V(m), (e, r) => (k(), c("tr", {
					key: r,
					class: "hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-200 cursor-pointer",
					onClick: (t) => W(e)
				}, [(k(!0), c(n, null, P(T.columns, (n) => (k(), c("td", {
					key: n.key,
					style: w({
						width: n.width ? typeof n.width == "number" ? `${n.width}px` : n.width : "auto",
						minWidth: n.width ? typeof n.width == "number" ? `${n.width}px` : n.width : "150px",
						maxWidth: n.width ? typeof n.width == "number" ? `${n.width}px` : n.width : "none"
					}),
					class: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300 overflow-hidden text-ellipsis tabular-nums"
				}, [n.slot ? F(t.$slots, n.slot, {
					row: e,
					value: U(e, n)
				}, void 0, void 0, 0) : n.format ? (k(), c("span", gf, R(n.format(e)), 1)) : (k(), c("span", _f, R(U(e, n)), 1))], 4))), 128)), V(A) ? (k(), c("td", vf, [F(t.$slots, "actions", { row: e })])) : s("", !0)], 8, hf))), 128))]))], 4)])),
				V(p) ? (k(), c("div", Af, [l("p", jf, R(V(p)), 1), f(g, {
					onClick: H,
					class: "mt-4",
					variant: "secondary",
					size: "small"
				}, {
					default: q(() => [...r[4] ||= [d(" Reintentar ", -1)]]),
					_: 1
				})])) : s("", !0),
				f(x, {
					"internal-pagination-server": V(h),
					"total-items": V(m).length
				}, null, 8, ["internal-pagination-server", "total-items"]),
				f($d, {
					"internal-pagination-server": V(h),
					onPageChange: L
				}, null, 8, ["internal-pagination-server"])
			]);
		};
	}
}), Nf = ["onClick"], Pf = /* @__PURE__ */ p({
	__name: "DropdownMenu",
	props: {
		items: {},
		ariaLabel: { default: "Opciones" },
		position: { default: "bottom-right" },
		buttonVariant: { default: "outline" },
		icon: { default: () => Ae }
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let r = t, i = N(!1), a = N(null);
		ce(a, () => {
			i.value = !1;
		});
		function u(e) {
			r("select", e), i.value = !1;
		}
		return (t, r) => {
			let d = Je, p = St;
			return k(), c("div", {
				ref_key: "menuRef",
				ref: a,
				class: S(["relative", { "z-[9999]": V(i) }])
			}, [f(d, {
				icon: e.icon,
				variant: e.buttonVariant,
				"aria-label": e.ariaLabel,
				onClick: r[0] ||= (e) => i.value = !V(i)
			}, null, 8, [
				"icon",
				"variant",
				"aria-label"
			]), f(p, null, {
				default: q(() => [V(i) ? (k(), c("div", {
					key: 0,
					class: S(["absolute w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-10 py-1", e.position === "bottom-right" ? "right-0 top-full mt-1" : "left-0 top-full mt-1"])
				}, [(k(!0), c(n, null, P(e.items, (e) => (k(), c("button", {
					key: e.action,
					type: "button",
					class: S(["w-full text-left px-4 py-2 text-sm transition-colors duration-150 flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700/30 cursor-pointer", [e.variant === "danger" ? "text-danger-600 dark:text-danger-400" : e.variant === "success" ? "text-success-600 dark:text-success-400" : "text-gray-700 dark:text-gray-200"]]),
					onClick: (t) => u(e)
				}, [e.icon ? (k(), o(L(e.icon), {
					key: 0,
					class: "w-4 h-4"
				})) : s("", !0), l("span", null, R(e.label), 1)], 10, Nf))), 128))], 2)) : s("", !0)]),
				_: 1
			})], 2);
		};
	}
}), Ff = ["for"], If = { class: "relative" }, Lf = [
	"id",
	"name",
	"onChange",
	"onBlur",
	"value"
], Rf = {
	key: 0,
	value: "",
	class: "bg-white dark:bg-gray-500 text-gray-600 dark:text-white",
	disabled: ""
}, zf = ["value", "selected"], Bf = {
	key: 0,
	class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
}, Vf = /* @__PURE__ */ p({
	__name: "FormSelect",
	props: /*@__PURE__*/ y({
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
		let t = e, { placeholder: r = "Selecciona una opción" } = t, i = H(e, "modelValue"), a = (e, n) => {
			let r = e.target, a = t.options.find((e) => String(e.value) === r.value), o = r.value === "" ? null : a ? a.value : r.value;
			i.value = o, n(o);
		};
		return (t, u) => (k(), c("div", null, [
			e.label && !e.small ? (k(), c("label", {
				key: 0,
				for: e.id,
				class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
			}, R(e.label), 9, Ff)) : s("", !0),
			f(V(oe), {
				name: e.name,
				rules: e.rules,
				modelValue: i.value,
				"onUpdate:modelValue": u[0] ||= (e) => i.value = e
			}, {
				default: q(({ field: t, value: i, errorMessage: u, handleChange: d }) => [l("div", If, [l("select", {
					id: e.id,
					name: t.name,
					onChange: (e) => a(e, d),
					onBlur: t.onBlur,
					value: i,
					class: S([
						"w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
						e.leftIcon ? "pl-10" : "pl-4",
						"pr-4",
						u ? "border-danger-500 dark:border-danger-500" : "",
						e.small ? "py-2" : "py-3"
					])
				}, [V(r) ? (k(), c("option", Rf, R(V(r)), 1)) : s("", !0), (k(!0), c(n, null, P(e.options, (e) => (k(), c("option", {
					key: e.value,
					value: e.value,
					selected: i != null && String(i) === String(e.value),
					class: "bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
				}, R(e.label), 9, zf))), 128))], 42, Lf), e.leftIcon ? (k(), c("div", Bf, [(k(), o(L(e.leftIcon), { class: S([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400"]) }, null, 8, ["class"]))])) : s("", !0)])]),
				_: 1
			}, 8, [
				"name",
				"rules",
				"modelValue"
			]),
			f(V(ae), {
				name: e.name,
				class: "mt-1 text-sm text-danger-600 dark:text-danger-400"
			}, null, 8, ["name"])
		]));
	}
}), Hf = ["for"], Uf = { class: "relative" }, Wf = [
	"id",
	"value",
	"onInput",
	"placeholder",
	"rows",
	"maxlength"
], Gf = { class: "mt-1 flex items-start justify-between gap-2" }, Kf = /* @__PURE__ */ p({
	__name: "FormTextarea",
	props: /*@__PURE__*/ y({
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
		let t = H(e, "modelValue"), n = a(() => (t.value ?? "").length);
		return (r, i) => (k(), c("div", null, [e.label && !e.small ? (k(), c("label", {
			key: 0,
			for: e.id,
			class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
		}, R(e.label), 9, Hf)) : s("", !0), f(V(oe), {
			name: e.name,
			rules: e.rules
		}, {
			default: q(({ field: r, errorMessage: i }) => [l("div", null, [l("div", Uf, [l("textarea", b({ id: e.id }, r, {
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
			}), null, 16, Wf)]), l("div", Gf, [f(V(ae), {
				name: e.name,
				class: "text-sm text-danger-600 dark:text-danger-400"
			}, null, 8, ["name"]), e.maxLength ? (k(), c("span", {
				key: 0,
				class: S(["text-xs text-gray-500 dark:text-gray-400 ml-auto shrink-0", n.value >= e.maxLength ? "text-danger-600 dark:text-danger-400" : ""])
			}, R(n.value) + " / " + R(e.maxLength), 3)) : s("", !0)])])]),
			_: 1
		}, 8, ["name", "rules"])]));
	}
}), qf = /* @__PURE__ */ p({
	__name: "HelpTooltip",
	props: { tooltip: {} },
	setup(e) {
		let t = N(null), n = N(null), r = N(0), i = () => {
			if (!t.value || !n.value) return;
			let e = t.value.getBoundingClientRect(), i = e.left + e.width / 2, a = i + 96 - window.innerWidth + 8, o = -(i - 96 - 8);
			a > 0 ? r.value = -a : o > 0 ? r.value = o : r.value = 0;
		};
		return (a, o) => (k(), c("div", {
			ref_key: "triggerRef",
			ref: t,
			class: "relative group",
			onMouseenter: i
		}, [o[1] ||= l("span", { class: "inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-[10px] font-bold cursor-help leading-none" }, "?", -1), l("div", {
			ref_key: "tooltipRef",
			ref: n,
			class: "absolute bottom-full left-1/2 mb-2 px-3 py-2 text-xs text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-48 text-center z-50 pointer-events-none",
			style: w({ transform: `translateX(calc(-50% + ${V(r)}px))` })
		}, [d(R(e.tooltip) + " ", 1), o[0] ||= l("div", { class: "absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700" }, null, -1)], 4)], 544));
	}
}), Jf = /* @__PURE__ */ p({
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
		let t = e, n = a(() => t.to !== void 0), r = a(() => n.value ? re : "button"), i = a(() => {
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
		return (t, n) => (k(), o(L(r.value), {
			to: e.to,
			class: S([
				"w-8 h-8 flex items-center justify-center transition-colors cursor-pointer",
				e.rounded ? "rounded-full" : "rounded-lg",
				i.value
			])
		}, {
			default: q(() => [F(t.$slots, "default", {}, () => [(k(), o(L(e.icon), { class: "w-4 h-4" }))])]),
			_: 3
		}, 8, ["to", "class"]));
	}
}), Yf = ["src"], Xf = /*#__PURE__*/ He(/* @__PURE__ */ p({
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
		return D(() => {
			document.addEventListener("keydown", u);
		}), O(() => {
			document.removeEventListener("keydown", u);
		}), (t, n) => (k(), o(r, { to: "body" }, [f(i, { name: "lightbox-fade" }, {
			default: q(() => [e.open ? (k(), c("div", {
				key: 0,
				class: "fixed inset-0 z-[110] flex cursor-zoom-out items-center justify-center bg-black/90 p-4 sm:p-8",
				onClick: l
			}, [e.src ? (k(), c("img", {
				key: 0,
				src: e.src,
				alt: "Vista ampliada",
				class: "max-h-full max-w-full rounded-lg object-contain shadow-2xl"
			}, null, 8, Yf)) : s("", !0)])) : s("", !0)]),
			_: 1
		})]));
	}
}), [["__scopeId", "data-v-1bea9514"]]), Zf = { class: "text-base font-medium text-gray-600 dark:text-gray-400 block mb-1" }, Qf = { class: "text-gray-900 dark:text-white text-base w-fit" }, $f = /* @__PURE__ */ p({
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
		return (t, r) => (k(), c("div", { class: S(V(n)) }, [l("span", Zf, R(e.label), 1), l("div", Qf, [F(t.$slots, "default")])], 2));
	}
}), ep = { class: "bg-white border-b-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700 px-6 h-20 flex items-center" }, tp = { class: "flex items-center justify-between w-full" }, np = { class: "flex gap-4" }, rp = { class: "flex items-center lg:hidden" }, ip = { class: "flex items-center space-x-4" }, ap = /* @__PURE__ */ p({
	__name: "Navbar",
	emits: ["toggle-mobile-sidebar"],
	setup(e) {
		return (e, t) => (k(), c("nav", ep, [l("div", tp, [l("div", np, [l("div", rp, [l("button", {
			onClick: t[0] ||= (t) => e.$emit("toggle-mobile-sidebar"),
			class: "w-10 h-10 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
		}, [f(V(Fe), { class: "w-5 h-5 text-gray-900 dark:text-white" })])])]), l("div", ip, [F(e.$slots, "right")])])]));
	}
}), op = /* @__PURE__ */ p({
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
		let t = e, n = ie(), r = a(() => n.path === t.to);
		return (t, n) => {
			let i = I("RouterLink");
			return k(), o(i, {
				to: e.to,
				"data-active": r.value,
				class: S(["group relative flex items-center gap-3 py-2.5 px-3 rounded-xl w-full transition-all duration-200 focus:outline-none", [r.value ? e.showActiveBackground ? "bg-primary-600 text-white dark:bg-primary-500" : e.useExternalIndicator ? "bg-primary-600 text-white dark:bg-primary-500 lg:bg-transparent lg:dark:bg-transparent" : "text-white" : "text-gray-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800/50"]])
			}, {
				default: q(() => [(k(), o(L(e.icon), { class: S(["w-5 h-5 shrink-0 transition-colors duration-200", [r.value ? "text-white" : "text-gray-400 group-hover:text-gray-600 dark:text-gray-200 dark:group-hover:text-gray-100"]]) }, null, 8, ["class"])), l("div", { class: S(["overflow-hidden transition-all duration-300 flex items-center gap-2", e.isCollapsed ? "w-0" : e.textFitContent ? "w-fit" : "w-48"]) }, [
					l("span", { class: S(["whitespace-nowrap", r.value ? "font-medium" : "font-normal"]) }, R(e.name), 3),
					e.hasExternalIcon ? (k(), o(V(Ce), {
						key: 0,
						class: "w-3.5 h-3.5 shrink-0 opacity-50"
					})) : s("", !0),
					e.hasBadge ? (k(), c("span", {
						key: 1,
						class: S(["text-[10px] font-medium px-1.5 py-0.5 rounded-full shrink-0 tabular-nums", [r.value ? "bg-white/20 text-white" : "bg-primary-600 text-white dark:bg-primary-500"]])
					}, R(e.badgeText), 3)) : s("", !0)
				], 2)]),
				_: 1
			}, 8, [
				"to",
				"data-active",
				"class"
			]);
		};
	}
}), sp = ue("sidebarCollapsed", !1);
function cp() {
	return {
		isCollapsed: sp,
		toggleCollapse: () => {
			sp.value = !sp.value;
		},
		expand: () => {
			sp.value = !1;
		}
	};
}
//#endregion
//#region src/composables/useActiveIndicator.ts
function lp(e) {
	let t = ie(), n = N(!1), r = N(!1), i = N({
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
		if (await x(), !e.value) return;
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
	return D(async () => {
		await x(), l(), requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				n.value = !0;
			});
		});
	}), O(() => {
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
var up = { class: "space-y-0.5 relative" }, dp = ["onClick"], fp = { class: "overflow-hidden" }, pp = { class: "pl-6 space-y-0.5 pt-1 pb-1" }, mp = /* @__PURE__ */ p({
	__name: "SidebarList",
	props: {
		isCollapsed: { type: Boolean },
		menuItems: {}
	},
	setup(e) {
		let t = e, r = ie(), { expand: i } = cp(), a = U("navRef"), { isInitialized: s, isAnimating: u, activeIndicatorStyle: d, trackAnimation: p } = lp(a), m = N(/* @__PURE__ */ new Set()), h = N(/* @__PURE__ */ new Set()), g = (e) => e.children?.some((e) => r.path === e.route || r.path.startsWith(e.route + "/")) ?? !1, _ = (e) => h.value.has(e.route) ? !1 : m.value.has(e.route) || g(e), v = (e) => {
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
			let p = op;
			return k(), c("nav", {
				ref_key: "navRef",
				ref: a,
				class: "flex-1 px-3 py-2 relative"
			}, [l("div", {
				class: S(["absolute left-3 right-3 bg-primary-600 dark:bg-primary-500 rounded-xl", V(s) ? V(u) ? "transition-opacity duration-150 ease-out" : "transition-all duration-300 ease-out" : ""]),
				style: w({
					top: V(d).top,
					height: V(d).height,
					opacity: V(d).opacity
				})
			}, null, 6), l("ul", up, [(k(!0), c(n, null, P(t.menuItems, (t) => (k(), c("li", { key: t.route }, [t.children?.length ? (k(), c(n, { key: 0 }, [l("button", {
				class: S(["group relative flex items-center gap-3 py-2.5 px-3 rounded-xl w-full transition-all duration-200 outline-none", [g(t) ? "text-primary-500 dark:text-primary-400" : "text-gray-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800/50"]]),
				onClick: (e) => v(t.route)
			}, [(k(), o(L(t.icon), { class: S(["w-5 h-5 shrink-0 transition-colors duration-200", [g(t) ? "text-primary-500 dark:text-primary-400" : "text-gray-400 group-hover:text-gray-600 dark:text-gray-200 dark:group-hover:text-gray-100"]]) }, null, 8, ["class"])), l("div", { class: S(["overflow-hidden transition-all duration-300 flex items-center justify-between flex-1", e.isCollapsed ? "w-0" : "w-48"]) }, [l("span", { class: S([g(t) ? "font-medium" : "font-normal", "whitespace-nowrap"]) }, R(t.name), 3), f(V(Ee), { class: S(["w-4 h-4 shrink-0 transition-transform duration-300 ease-in-out", _(t) ? "rotate-180" : ""]) }, null, 8, ["class"])], 2)], 10, dp), l("div", { class: S(["grid transition-all duration-300 ease-in-out", _(t) && !e.isCollapsed ? "grid-rows-[1fr]" : "grid-rows-[0fr]"]) }, [l("div", fp, [l("ul", pp, [(k(!0), c(n, null, P(t.children, (t) => (k(), c("li", { key: t.route }, [f(p, {
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
			])]))), 128))])])], 2)], 64)) : (k(), o(p, {
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
}), hp = N(!1), gp = N(!1), _p = N(!1);
function vp() {
	let e = () => {
		let e = window.innerWidth;
		hp.value = e < 1024, gp.value = e >= 768 && e < 1024, _p.value = e >= 1024;
	};
	return D(() => {
		e(), window.addEventListener("resize", e);
	}), O(() => {
		window.removeEventListener("resize", e);
	}), {
		isMobile: hp,
		isTablet: gp,
		isDesktop: _p,
		checkScreenSize: e
	};
}
//#endregion
//#region src/components/Sidebar.vue?vue&type=script&setup=true&lang.ts
var yp = { class: "p-4 border-b-2 border-gray-200 dark:border-gray-700 h-20 flex items-center" }, bp = {
	key: 0,
	class: "flex items-center space-x-2"
}, xp = { class: "w-8 h-8" }, Sp = ["src", "alt"], Cp = { class: "overflow-hidden transition-all duration-300 w-auto" }, wp = { class: "text-lg font-semibold whitespace-nowrap text-gray-900 dark:text-white" }, Tp = { class: "text-sm whitespace-nowrap text-gray-500 dark:text-gray-400" }, Ep = { class: "flex-1 overflow-y-auto" }, Dp = {
	key: 0,
	class: "px-4 pb-1 text-left text-[10px] text-gray-400 dark:text-gray-500"
}, Op = { class: "p-4 border-t-2 border-gray-200 dark:border-gray-700" }, kp = {
	key: 0,
	class: "text-sm text-gray-900 dark:text-white whitespace-nowrap"
}, Ap = /* @__PURE__ */ p({
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
		let n = e, { logo: r, title: i, subtitle: u, version: d, menuItems: p } = n, m = t, { isDarkMode: h, toggleTheme: g } = yd(), _ = a(() => h.value ? ze : Ie), v = a(() => n.isCollapsed ? "w-20" : "lg:w-64 xl:w-72"), y = () => {
			m("toggle-collapse");
		};
		return (e, t) => {
			let a = mp;
			return k(), c("aside", { class: S(["h-screen flex flex-col border-r-2 transition-all duration-300 bg-white text-gray-900 border-gray-200 dark:bg-gray-900 dark:text-white dark:border-gray-700", v.value]) }, [
				l("div", yp, [l("div", { class: S(["flex items-center w-full", n.isCollapsed ? "justify-center" : "justify-between"]) }, [n.isCollapsed ? s("", !0) : (k(), c("div", bp, [l("div", xp, [l("img", {
					src: V(r),
					alt: V(i),
					class: "w-full h-full object-contain"
				}, null, 8, Sp)]), l("div", Cp, [l("h1", wp, R(V(i)), 1), l("p", Tp, R(V(u)), 1)])])), V(hp) ? (k(), c("button", {
					key: 1,
					onClick: t[0] ||= (t) => e.$emit("close"),
					class: "w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
				}, [f(V(Be), { class: "w-4 h-4 text-gray-600 dark:text-gray-400" })])) : n.isCollapsed ? (k(), c("button", {
					key: 3,
					onClick: y,
					class: "w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
				}, [f(V(Oe), { class: "w-4 h-4 text-gray-600 dark:text-gray-400" })])) : (k(), c("button", {
					key: 2,
					onClick: y,
					class: "w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ml-auto bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
				}, [f(V(De), { class: "w-4 h-4 text-gray-600 dark:text-gray-400" })]))], 2)]),
				l("div", Ep, [f(a, {
					"is-collapsed": n.isCollapsed,
					"menu-items": V(p)
				}, null, 8, ["is-collapsed", "menu-items"])]),
				n.isCollapsed ? s("", !0) : (k(), c("p", Dp, " v" + R(V(d)), 1)),
				l("div", Op, [l("button", {
					onClick: t[1] ||= (...e) => V(g) && V(g)(...e),
					class: S(["w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700", n.isCollapsed ? "justify-center" : ""]),
					"aria-label": "Toggle theme"
				}, [(k(), o(L(_.value), { class: "w-5 h-5 text-gray-900 dark:text-white flex-shrink-0" })), n.isCollapsed ? s("", !0) : (k(), c("span", kp, R(V(h) ? "Modo claro" : "Modo oscuro"), 1))], 2)])
			], 2);
		};
	}
}), jp = /* @__PURE__ */ p({
	__name: "SidebarNav",
	props: { items: {} },
	setup(e) {
		let t = U("navRef"), { isInitialized: r, activeIndicatorStyle: i } = lp(t);
		return (a, s) => {
			let u = op;
			return k(), c("nav", {
				ref_key: "navRef",
				ref: t,
				class: "relative space-y-2 flex gap-4 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-hidden"
			}, [l("div", {
				class: S(["absolute left-0 right-0 bg-primary-600 dark:bg-primary-500 rounded-xl hidden lg:block", V(r) ? "transition-all duration-300 ease-out" : ""]),
				style: w({
					top: V(i).top,
					height: V(i).height,
					opacity: V(i).opacity
				})
			}, null, 6), (k(!0), c(n, null, P(e.items, (e) => (k(), o(u, {
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
}), Mp = 3e3, Np = /* @__PURE__ */ p({
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
		let n = e, r = t, a = N(!1);
		D(() => {
			setTimeout(() => {
				a.value = !0;
			}, 50);
		}), setTimeout(() => {
			a.value = !1, setTimeout(() => {
				r("expired");
			}, 300);
		}, Mp);
		let s = (e) => {
			e && (e.preventDefault(), e.stopPropagation()), a.value = !1, setTimeout(() => {
				r("cancel", n.message);
			}, 300);
		};
		return (t, n) => (k(), o(i, {
			"enter-active-class": "animate-fade-in-up-fast",
			"leave-active-class": "animate-fade-out"
		}, {
			default: q(() => [te(l("div", { class: S(["min-h-12 mb-4 snack-content flex items-center justify-between rounded-lg pointer-events-auto", [e.error ? "border border-danger-200 dark:border-danger-800 bg-danger-50 dark:bg-danger-900" : "border border-success-200 dark:border-success-800 bg-success-50 dark:bg-success-900"]]) }, [l("div", { class: S(["p-4 flex-1", [e.error ? "text-danger-700 dark:text-danger-100" : "text-success-700 dark:text-success-100"]]) }, R(e.message.text), 3), l("div", null, [l("button", {
				class: S(["px-3 py-2 text-center text-sm uppercase font-semibold cursor-pointer hover:opacity-70 transition-opacity", [e.error ? "text-danger-700 dark:text-danger-100" : "text-success-700 dark:text-success-100"]]),
				onClick: J(s, ["stop"])
			}, [f(V(Be), {
				name: "close",
				class: "w-4 h-4"
			})], 2)])], 2), [[G, V(a)]])]),
			_: 1
		}));
	}
}), Pp = N([]);
function Fp() {
	return {
		messages: Pp,
		pushMessage: (e, t = !1) => {
			Pp.value.push({
				ts: Date.now(),
				text: e,
				error: t
			});
		},
		shiftMessage: () => {
			Pp.value.shift();
		}
	};
}
//#endregion
//#region src/components/Snack/SnackBar.vue?vue&type=script&setup=true&lang.ts
var Ip = { class: "fixed top-0 right-0 flex flex-col-reverse p-4 overflow-hidden z-50 w-80" }, Lp = /* @__PURE__ */ p({
	__name: "SnackBar",
	props: { active: Boolean },
	setup(e) {
		let { messages: t, shiftMessage: r } = Fp(), i = () => {
			r();
		};
		return (e, r) => {
			let a = Np;
			return k(), c("div", Ip, [(k(!0), c(n, null, P(V(t), (e) => (k(), o(a, {
				key: e.ts,
				active: !0,
				message: e,
				error: e.error,
				onExpired: i
			}, null, 8, ["message", "error"]))), 128))]);
		};
	}
}), Rp = { class: "flex items-center gap-1.5" }, zp = { class: "text-sm font-medium text-gray-600 dark:text-gray-300" }, Bp = {
	key: 0,
	class: "text-2xl font-bold text-gray-400 dark:text-gray-500 mt-1"
}, Vp = {
	key: 1,
	class: "text-2xl font-bold text-gray-900 dark:text-white mt-1 tabular-nums"
}, Hp = {
	key: 0,
	class: "mt-4 flex items-center"
}, Up = {
	key: 1,
	class: "text-sm text-gray-500 dark:text-gray-400 ml-1"
}, Wp = /* @__PURE__ */ p({
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
			let a = qf, u = at;
			return k(), o(u, null, {
				default: q(() => [l("div", null, [l("div", Rp, [l("p", zp, R(e.title), 1), e.help ? (k(), o(a, {
					key: 0,
					tooltip: e.help
				}, null, 8, ["tooltip"])) : s("", !0)]), V(t) ? (k(), c("p", Bp, "Sin datos")) : (k(), c("p", Vp, R(e.value), 1))]), e.change !== void 0 || e.description ? (k(), c("div", Hp, [e.change === void 0 ? s("", !0) : (k(), c("span", {
					key: 0,
					class: S(["text-sm font-medium tabular-nums", V(n)])
				}, R(e.change), 3)), e.description ? (k(), c("span", Up, R(e.description), 1)) : s("", !0)])) : s("", !0)]),
				_: 1
			});
		};
	}
}), Gp = {
	key: 0,
	class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
}, Kp = { class: "flex items-center space-x-3" }, qp = ["disabled"], Jp = {
	key: 0,
	class: "text-sm text-gray-700 dark:text-gray-300"
}, Yp = /* @__PURE__ */ p({
	__name: "SwitchInput",
	props: /*@__PURE__*/ y({
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
		let t = H(e, "modelValue"), n = () => {
			e.disabled || (t.value = !t.value);
		};
		return (r, i) => (k(), c("div", null, [e.label ? (k(), c("label", Gp, R(e.label), 1)) : s("", !0), l("div", Kp, [l("button", {
			type: "button",
			onClick: n,
			disabled: e.disabled,
			class: S(["relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed", t.value ? "bg-primary-600" : "bg-gray-300 dark:bg-gray-600"])
		}, [l("span", { class: S(["pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", t.value ? "translate-x-5" : "translate-x-0"]) }, null, 2)], 10, qp), e.showLabel ? (k(), c("span", Jp, R(t.value ? e.trueLabel : e.falseLabel), 1)) : s("", !0)])]));
	}
}), Xp = { class: "space-y-4" }, Zp = { class: "h-16 flex items-center transition-transform duration-300" }, Qp = { class: "flex space-x-2 bg-gray-200 dark:bg-gray-800 rounded-lg py-2 px-3 w-full relative" }, $p = ["onClick"], em = { class: "tab-content" }, tm = /*#__PURE__*/ He(/* @__PURE__ */ p({
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
		return (t, r) => (k(), c("div", Xp, [l("div", Zp, [l("div", Qp, [l("div", {
			class: "absolute top-1 bottom-1 bg-white dark:bg-gray-700 rounded-lg transition-all duration-300 ease-in-out shadow-sm",
			style: w({
				left: `${1 + s.value * ((98 - 98 / e.tabs.length) / (e.tabs.length - 1))}%`,
				width: `${98 / e.tabs.length}%`
			})
		}, null, 4), (k(!0), c(n, null, P(e.tabs, (e, t) => (k(), c("button", {
			key: e.id,
			class: S(["relative flex-1 py-2 px-3 text-sm font-medium transition-colors duration-200 z-10", [s.value === t ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"]]),
			onClick: (e) => u(t)
		}, R(e.label), 11, $p))), 128))])]), l("div", em, [f(i, {
			name: "tab-content",
			mode: "out-in",
			appear: ""
		}, {
			default: q(() => [(k(), c("div", {
				key: s.value,
				class: "tab-panel"
			}, [F(t.$slots, `tab-${s.value}`, {
				activeTab: e.tabs[s.value],
				activeTabIndex: s.value
			}, () => [r[0] ||= l("div", { class: "text-gray-500 dark:text-gray-400 text-center py-8" }, " No content available for this tab ", -1)], !0)]))]),
			_: 3
		})])]));
	}
}), [["__scopeId", "data-v-220a3b65"]]), nm = ["src", "alt"], rm = /* @__PURE__ */ p({
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
		return (i, a) => (k(), c("div", { class: S([V(n), "rounded-full shrink-0 overflow-hidden"]) }, [e.imageUrl ? (k(), c("img", {
			key: 0,
			src: e.imageUrl,
			alt: e.name,
			class: "w-full h-full object-cover"
		}, null, 8, nm)) : (k(), c("div", {
			key: 1,
			class: S(["w-full h-full flex items-center justify-center bg-linear-to-br from-primary-500 to-secondary-500 text-white font-semibold", V(r)])
		}, R(V(t)), 3))], 2));
	}
}), im = { class: "flex -space-x-2" }, am = /* @__PURE__ */ p({
	__name: "UserAvatars",
	props: { users: {} },
	setup(e) {
		return (t, r) => (k(), c("div", im, [(k(!0), c(n, null, P(e.users, (t, n) => (k(), c("div", {
			key: n,
			class: "relative"
		}, [l("div", {
			class: "w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white text-xs font-medium border-2 border-white",
			style: w({ zIndex: e.users.length - n })
		}, R(t.initials), 5)]))), 128))]));
	}
}), om = { class: "flex items-center gap-2 sm:gap-3" }, sm = {
	key: 0,
	class: "absolute -top-1 -right-1 bg-danger-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium tabular-nums"
}, cm = {
	key: 0,
	class: "absolute right-0 top-14 w-80 bg-white dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-lg shadow-lg z-50"
}, lm = { class: "max-h-96 overflow-y-auto" }, um = {
	key: 0,
	class: "py-2 px-4 border-t border-gray-200 dark:border-gray-700 text-center"
}, dm = { class: "w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center sm:mr-3 overflow-hidden" }, fm = { class: "text-gray-900 dark:text-white text-lg" }, pm = {
	class: "hidden sm:flex items-center",
	style: { gap: "0" }
}, mm = { class: "mr-3" }, hm = { class: "text-gray-900 dark:text-white font-medium" }, gm = { class: "flex items-center" }, _m = { class: "text-sm text-gray-600 dark:text-gray-400" }, vm = {
	key: 0,
	class: "absolute right-0 top-14 w-56 sm:w-full bg-white dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-lg shadow-lg z-50"
}, ym = { class: "py-2" }, bm = /* @__PURE__ */ p({
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
		vp();
		let i = N(!1), a = N(null), u = N(!1), d = N(null);
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
			if (r("bell-click"), hp.value) return;
			let e = u.value;
			_(), !e && u.value && r("panel-open");
		}
		function _() {
			u.value = !u.value, u.value && (i.value = !1);
		}
		function v() {
			u.value = !1;
		}
		ce(a, m), ce(d, v);
		function y(e) {
			e.key === "Escape" && (i.value && m(), u.value && v());
		}
		return D(() => {
			window.addEventListener("keydown", y);
		}), T(() => {
			window.removeEventListener("keydown", y);
		}), (t, m) => {
			let _ = St, v = Gd;
			return k(), c("div", om, [e.showNotifications ? (k(), c("div", {
				key: 0,
				class: "relative",
				ref_key: "notificationDropdownRef",
				ref: d
			}, [l("button", {
				onClick: J(g, ["stop"]),
				class: "w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 relative cursor-pointer",
				"aria-label": "Show notifications"
			}, [f(V(we), { class: "w-5 h-5 text-gray-900 dark:text-white" }), e.unreadNotificationsCount > 0 ? (k(), c("div", sm, R(e.unreadNotificationsCount > 9 ? "9+" : e.unreadNotificationsCount), 1)) : s("", !0)]), f(_, null, {
				default: q(() => [u.value && !V(hp) ? (k(), c("div", cm, [
					m[1] ||= l("div", { class: "py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white font-semibold" }, " Notificaciones ", -1),
					l("div", lm, [F(t.$slots, "notifications")]),
					e.unreadNotificationsCount > 0 ? (k(), c("div", um, [l("button", {
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
				l("div", dm, [F(t.$slots, "avatar", {}, () => [l("span", fm, R(e.userInitials), 1)])]),
				l("div", pm, [l("div", mm, [l("div", hm, R(e.userName), 1), l("div", gm, [l("span", _m, R(e.userRole), 1)])]), f(V(Ee), { class: S(["w-4 h-4 text-gray-600 dark:text-gray-400", i.value ? "rotate-180 transition-transform duration-200" : "transition-transform duration-200"]) }, null, 8, ["class"])]),
				f(V(Ee), { class: S(["sm:hidden w-4 h-4 text-gray-600 dark:text-gray-400 ml-2", i.value ? "rotate-180 transition-transform duration-200" : "transition-transform duration-200"]) }, null, 8, ["class"])
			]), f(_, null, {
				default: q(() => [i.value ? (k(), c("div", vm, [l("ul", ym, [(k(!0), c(n, null, P(e.menuItems, (e) => (k(), o(v, {
					key: e.label,
					label: e.label,
					icon: e.icon,
					class: S(e.class),
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
}), xm = { class: "flex items-start justify-between gap-4 flex-col md:flex-row" }, Sm = { class: "space-y-2" }, Cm = { class: "text-3xl font-bold text-gray-900 dark:text-white" }, wm = { class: "flex space-x-2 justify-start flex-col gap-3 md:gap-0 md:flex-row items-center" }, Tm = { class: "text-gray-600 dark:text-gray-400 text-sm" }, Em = { class: "flex items-center space-x-3" }, Dm = /* @__PURE__ */ p({
	__name: "ViewHeader",
	props: {
		subtitle: {},
		title: {},
		badgeText: {}
	},
	setup(e) {
		return (t, n) => {
			let r = $e;
			return k(), c("div", null, [l("div", xm, [l("div", Sm, [l("h1", Cm, R(e.title), 1), l("div", wm, [l("span", Tm, R(e.subtitle), 1), e.badgeText ? (k(), o(r, {
				key: 0,
				variant: "neutral",
				text: "sm"
			}, {
				default: q(() => [d(R(e.badgeText), 1)]),
				_: 1
			})) : s("", !0)])]), l("div", Em, [F(t.$slots, "right")])])]);
		};
	}
}), Om = { class: "flex items-start gap-3 p-4 rounded-lg border border-warning-200 dark:border-warning-800 bg-warning-50 dark:bg-warning-500/15" }, km = { class: "flex-1 text-sm text-warning-700 dark:text-warning-300" }, Am = /* @__PURE__ */ p({
	__name: "WarningAlert",
	setup(e) {
		return (e, t) => (k(), c("div", Om, [f(V(Se), { class: "w-5 h-5 text-warning-600 dark:text-warning-400 flex-shrink-0 mt-0.5" }), l("div", km, [F(e.$slots, "default")])]));
	}
});
//#endregion
export { Ue as Alert, $e as Badge, Ke as BaseButton, Je as BaseButtonIcon, Qe as Breadcrumb, at as Card, ft as CardPaginations, pt as CollapseTransition, Hd as ConfirmationModal, Mf as DataTable, ht as Divider, qd as Dropdown, St as DropdownAnimation, Gd as DropdownItem, Pf as DropdownMenu, Bd as FormInput, Vf as FormSelect, Kf as FormTextarea, qf as HelpTooltip, Jf as IconButton, Xf as ImageLightbox, $f as InfoItem, Ct as LoadingSVG, xt as Modal, ap as Navbar, Wd as ResultCount, Vt as SearchableSelect, Ap as Sidebar, op as SidebarItem, mp as SidebarList, jp as SidebarNav, Lp as SnackBar, Np as SnackBarItem, Wp as StatCard, Yp as SwitchInput, nf as TableHeader, $d as TablePagination, of as TableSkeleton, tm as Tabs, rm as UserAvatar, am as UserAvatars, bm as UserProfileDropdown, Dm as ViewHeader, Am as WarningAlert, vd as initTheme, _p as isDesktop, hp as isMobile, gp as isTablet, lp as useActiveIndicator, Fp as useMessages, vp as useMobile, wt as useRequestKey, cp as useSidebar, yd as useTheme, e as yup };
