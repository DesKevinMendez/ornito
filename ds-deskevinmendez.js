import { Fragment as e, Teleport as t, Transition as n, computed as r, createBlock as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, createTextVNode as c, createVNode as l, defineComponent as u, inject as d, isRef as f, mergeModels as p, mergeProps as m, nextTick as h, normalizeClass as g, normalizeStyle as _, onBeforeUnmount as v, onMounted as y, onUnmounted as b, openBlock as x, reactive as S, ref as C, renderList as w, renderSlot as T, resolveComponent as E, resolveDynamicComponent as D, toDisplayString as O, unref as k, useModel as A, useSlots as ee, useTemplateRef as j, vModelText as te, vShow as M, watch as N, withCtx as P, withDirectives as ne, withKeys as F, withModifiers as I } from "vue";
import { IconAlertCircle as L, IconAlertTriangle as R, IconArrowUpRight as z, IconBell as B, IconCheck as re, IconChevronDown as V, IconChevronLeft as H, IconChevronRight as U, IconCurrencyDollar as W, IconDotsVertical as ie, IconEye as ae, IconEyeOff as G, IconInfoCircle as oe, IconLoader2 as K, IconMenu2 as se, IconMoon as ce, IconSearch as le, IconShieldCheck as ue, IconSun as de, IconX as fe } from "@tabler/icons-vue";
import { RouterLink as pe, useRoute as me } from "vue-router";
import { onClickOutside as he, useStorage as ge, watchDebounced as _e } from "@vueuse/core";
import { ErrorMessage as ve, Field as ye, Form as be } from "vee-validate";
import { VueDatePicker as xe } from "@vuepic/vue-datepicker";
import * as Se from "yup";
//#region src/components/Alert.vue?vue&type=script&setup=true&lang.ts
var Ce = /*@__PURE__*/ u({
	__name: "Alert",
	props: {
		type: {},
		show: {
			type: Boolean,
			default: !0
		}
	},
	setup(e) {
		let t = e, c = r(() => {
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
		}), l = r(() => {
			switch (t.type) {
				case "warning": return R;
				case "danger": return L;
				case "info": return oe;
				case "success": return ue;
				default: return R;
			}
		});
		return (t, r) => (x(), i(n, { name: "alert-reveal" }, {
			default: P(() => [e.show ? (x(), o("div", {
				key: 0,
				class: g([
					"flex items-start gap-3 p-4 rounded-lg border backdrop-blur-sm",
					c.value.border,
					c.value.background
				])
			}, [(x(), i(D(l.value), { class: g(["w-5 h-5 flex-shrink-0 mt-0.5", c.value.icon]) }, null, 8, ["class"])), s("div", { class: g(["flex-1 text-sm", c.value.text]) }, [T(t.$slots, "default", {}, void 0, !0)], 2)], 2)) : a("", !0)]),
			_: 3
		}));
	}
}), we = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Te = /*#__PURE__*/ we(Ce, [["__scopeId", "data-v-22e2bebf"]]), Ee = { class: "flex items-center justify-center relative" }, De = { class: "flex items-center space-x-2" }, Oe = /* @__PURE__ */ u({
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
		let t = e, n = r(() => t.to !== void 0), c = r(() => n.value ? pe : "button");
		return (t, n) => (x(), i(D(k(c)), {
			to: e.to,
			type: e.type,
			disabled: e.disabled || e.loading,
			class: g([
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
			default: P(() => [s("div", Ee, [e.loading ? (x(), o("svg", {
				key: 0,
				class: g(["animate-spin h-4 w-4 transition-all duration-300 ease-in-out mr-2", e.variant === "primary" ? "text-white" : "text-gray-900 dark:text-white"]),
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 24 24"
			}, [...n[0] ||= [s("circle", {
				class: "opacity-25",
				cx: "12",
				cy: "12",
				r: "10",
				stroke: "currentColor",
				"stroke-width": "4"
			}, null, -1), s("path", {
				class: "opacity-75",
				fill: "currentColor",
				d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			}, null, -1)]], 2)) : a("", !0), s("div", De, [
				e.icon && !e.loading && e.iconPosition !== "right" ? (x(), i(D(e.icon), {
					key: 0,
					class: g([
						"h-5 w-5",
						t.$slots.default ? "mr-2" : "",
						e.iconClass
					])
				}, null, 8, ["class"])) : a("", !0),
				T(t.$slots, "default"),
				e.icon && !e.loading && e.iconPosition === "right" ? (x(), i(D(e.icon), {
					key: 1,
					class: g(["h-5 w-5", e.iconClass])
				}, null, 8, ["class"])) : a("", !0)
			])])]),
			_: 3
		}, 8, [
			"to",
			"type",
			"disabled",
			"class"
		]));
	}
}), ke = ["type", "disabled"], Ae = /* @__PURE__ */ u({
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
		let t = r(() => ({
			sm: "p-1",
			md: "p-1.5",
			lg: "p-2"
		})[e.size]), n = r(() => ({
			sm: "w-4 h-4",
			md: "w-5 h-5",
			lg: "w-6 h-6"
		})[e.size]), a = r(() => ({
			primary: "bg-primary-600 dark:bg-primary-500 text-white hover:bg-primary-700 dark:hover:bg-primary-600 shadow-sm hover:shadow",
			secondary: "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 shadow-sm hover:shadow",
			outline: "border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700",
			"primary-outline": "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white dark:border-primary-500 dark:text-primary-400 dark:hover:bg-primary-500",
			danger: "bg-danger-600 hover:bg-danger-700 text-white dark:bg-danger-500 dark:hover:bg-danger-600 focus:ring-danger-500 shadow-sm hover:shadow",
			"danger-outline": "border-2 border-danger-600 text-danger-600 hover:bg-danger-600 hover:text-white dark:border-danger-500 dark:text-danger-400 dark:hover:bg-danger-500 dark:hover:text-white focus:ring-danger-500",
			overlay: "bg-black/60 hover:bg-black/80 text-white shadow-sm hover:shadow"
		})[e.variant]);
		return (r, c) => (x(), o("button", {
			type: e.type,
			disabled: e.disabled || e.loading,
			class: g([
				"rounded-lg transition-all duration-200 cursor-pointer inline-flex items-center justify-center",
				"disabled:opacity-50 disabled:cursor-not-allowed",
				"focus:outline-none",
				"active:scale-95",
				k(t),
				k(a)
			])
		}, [e.loading ? (x(), o("svg", {
			key: 0,
			class: g(["animate-spin", [k(n), e.variant === "primary" || e.variant === "danger" ? "text-white" : "text-gray-900 dark:text-white"]]),
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 24 24"
		}, [...c[0] ||= [s("circle", {
			class: "opacity-25",
			cx: "12",
			cy: "12",
			r: "10",
			stroke: "currentColor",
			"stroke-width": "4"
		}, null, -1), s("path", {
			class: "opacity-75",
			fill: "currentColor",
			d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
		}, null, -1)]], 2)) : (x(), i(D(e.icon), {
			key: 1,
			class: g(k(n))
		}, null, 8, ["class"]))], 10, ke));
	}
}), je = {
	class: "flex mb-6",
	"aria-label": "Breadcrumb"
}, Me = { class: "inline-flex items-center space-x-1 md:space-x-3" }, Ne = {
	key: 0,
	class: "flex items-center"
}, Pe = /* @__PURE__ */ u({
	__name: "Breadcrumb",
	props: { items: {} },
	setup(t) {
		return (n, r) => (x(), o("nav", je, [s("ol", Me, [(x(!0), o(e, null, w(t.items, (e, n) => (x(), o("li", {
			key: n,
			class: "inline-flex items-center"
		}, [n > 0 ? (x(), o("div", Ne, [...r[0] ||= [s("svg", {
			class: "w-3 h-3 text-gray-500 dark:text-gray-500 mx-1",
			"aria-hidden": "true",
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 6 10"
		}, [s("path", {
			stroke: "currentColor",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			"stroke-width": "2",
			d: "m1 9 4-4-4-4"
		})], -1)]])) : a("", !0), e.to && n < t.items.length - 1 ? (x(), i(k(pe), {
			key: 1,
			to: e.to,
			class: "inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
		}, {
			default: P(() => [e.icon ? (x(), i(D(e.icon), {
				key: 0,
				class: "w-4 h-4 mr-2"
			})) : a("", !0), c(" " + O(e.label), 1)]),
			_: 2
		}, 1032, ["to"])) : (x(), o("span", {
			key: 2,
			class: g(["inline-flex items-center text-sm font-medium", n === t.items.length - 1 ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400"])
		}, [e.icon ? (x(), i(D(e.icon), {
			key: 0,
			class: "w-4 h-4 mr-2"
		})) : a("", !0), c(" " + O(e.label), 1)], 2))]))), 128))])]));
	}
}), Fe = /* @__PURE__ */ u({
	__name: "Badge",
	props: {
		variant: { default: "neutral" },
		text: { default: "base" }
	},
	setup(e) {
		let t = e, n = r(() => {
			switch (t.variant) {
				case "success": return "bg-success-50 dark:bg-success-900/30 text-success-700 dark:text-success-400";
				case "warning": return "bg-warning-50 dark:bg-warning-900/30 text-warning-700 dark:text-warning-400";
				case "danger": return "bg-danger-50 dark:bg-danger-900/30 text-danger-700 dark:text-danger-400";
				case "info": return "bg-secondary-50 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400";
				default: return "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300";
			}
		}), i = r(() => {
			switch (t.text) {
				case "xs": return "text-xs";
				case "sm": return "text-sm";
				default: return "text-base";
			}
		});
		return (e, t) => (x(), o("span", { class: g([
			"inline-flex items-center px-2.5 py-0.5 rounded-full font-medium tabular-nums",
			k(n),
			k(i)
		]) }, [T(e.$slots, "default")], 2));
	}
}), Ie = {
	key: 0,
	class: "px-6 pt-5"
}, Le = { class: "flex-1 min-w-0" }, Re = {
	key: 0,
	class: "text-base font-semibold tracking-tight text-gray-900 dark:text-white"
}, ze = {
	key: 1,
	class: "mt-0.5 text-sm text-gray-500 dark:text-gray-400"
}, Be = {
	key: 0,
	class: "flex items-center gap-2 shrink-0"
}, Ve = /* @__PURE__ */ u({
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
		let t = ee(), n = r(() => e.title || e.subtitle || t.headerButtons);
		return (t, r) => (x(), o("div", { class: g(["bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm", { "overflow-hidden flex flex-col": e.noPadding }]) }, [k(n) ? (x(), o("div", Ie, [s("div", { class: g(["flex items-start justify-between gap-4 pb-4 border-b border-gray-300 dark:border-gray-600", { "flex-col gap-3 sm:flex-row sm:items-start": e.colInMobile }]) }, [s("div", Le, [e.title ? (x(), o("h3", Re, O(e.title), 1)) : a("", !0), e.subtitle ? (x(), o("p", ze, O(e.subtitle), 1)) : a("", !0)]), t.$slots.headerButtons ? (x(), o("div", Be, [T(t.$slots, "headerButtons")])) : a("", !0)], 2)])) : a("", !0), s("div", { class: g(e.noPadding ? "flex-1 flex flex-col" : "p-4") }, [T(t.$slots, "default")], 2)], 2));
	}
}), He = {
	key: 0,
	class: "flex items-center justify-between pt-4"
}, Ue = { class: "text-base text-gray-500 dark:text-gray-400 tabular-nums" }, We = { class: "flex items-center gap-2" }, Ge = ["disabled"], Ke = { class: "text-base text-gray-700 dark:text-gray-300 tabular-nums" }, qe = ["disabled"], Je = /* @__PURE__ */ u({
	__name: "CardPaginations",
	props: { pagination: {} },
	emits: ["page-change"],
	setup(e, { emit: t }) {
		let n = t, r = (t) => {
			e.pagination && (t < 1 || t > e.pagination.last_page || n("page-change", t));
		};
		return (t, n) => e.pagination && e.pagination.last_page > 1 ? (x(), o("div", He, [s("p", Ue, " Mostrando " + O(e.pagination.from) + "-" + O(e.pagination.to) + " de " + O(e.pagination.total), 1), s("div", We, [
			s("button", {
				type: "button",
				disabled: e.pagination.current_page === 1,
				class: "w-8 h-8 flex items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-500 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors",
				onClick: n[0] ||= (t) => r(e.pagination.current_page - 1)
			}, [l(k(H), { class: "w-4 h-4" })], 8, Ge),
			s("span", Ke, O(e.pagination.current_page) + " / " + O(e.pagination.last_page), 1),
			s("button", {
				type: "button",
				disabled: e.pagination.current_page === e.pagination.last_page,
				class: "w-8 h-8 flex items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-500 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors",
				onClick: n[1] ||= (t) => r(e.pagination.current_page + 1)
			}, [l(k(U), { class: "w-4 h-4" })], 8, qe)
		])])) : a("", !0);
	}
}), Ye = /* @__PURE__ */ u({
	__name: "CollapseTransition",
	setup(e) {
		function t(e) {
			let t = e;
			t.style.height = "0", t.style.overflow = "hidden", t.style.transition = "height 0.3s ease-out, opacity 0.3s ease-out", t.style.opacity = "0", requestAnimationFrame(() => {
				t.style.height = `${t.scrollHeight}px`, t.style.opacity = "1";
			});
		}
		function r(e) {
			let t = e;
			t.style.height = "", t.style.overflow = "", t.style.transition = "", t.style.opacity = "";
		}
		function a(e) {
			let t = e;
			t.style.height = `${t.scrollHeight}px`, t.style.overflow = "hidden", t.style.transition = "height 0.3s ease-out, opacity 0.3s ease-out", t.style.opacity = "1", requestAnimationFrame(() => {
				t.style.height = "0", t.style.opacity = "0";
			});
		}
		function o(e) {
			let t = e;
			t.style.height = "", t.style.overflow = "", t.style.transition = "", t.style.opacity = "";
		}
		return (e, s) => (x(), i(n, {
			name: "collapse",
			onEnter: t,
			onAfterEnter: r,
			onLeave: a,
			onAfterLeave: o
		}, {
			default: P(() => [T(e.$slots, "default")]),
			_: 3
		}));
	}
}), Xe = { class: "relative py-4" }, Ze = /* @__PURE__ */ u({
	__name: "Divider",
	setup(e) {
		return (e, t) => (x(), o("div", Xe, [...t[0] ||= [s("div", { class: "absolute inset-0 flex items-center" }, [s("div", { class: "w-full border-t border-gray-200 dark:border-gray-700" })], -1)]]));
	}
}), Qe = { class: "flex items-start justify-between" }, $e = { class: "flex-1 min-w-0" }, et = {
	key: 0,
	class: "text-lg font-semibold text-gray-900 dark:text-white"
}, tt = {
	key: 1,
	class: "text-sm text-gray-600 dark:text-gray-400 mt-1"
}, nt = { class: "overflow-y-auto max-h-[70vh] p-0.5 -m-0.5" }, rt = /*#__PURE__*/ we(/* @__PURE__ */ u({
	__name: "Modal",
	props: {
		open: { type: Boolean },
		title: {},
		subtitle: {},
		size: {}
	},
	emits: ["update:open", "close"],
	setup(e, { emit: c }) {
		let u = e, d = r(() => ({
			sm: "max-w-sm",
			md: "max-w-lg",
			lg: "max-w-2xl",
			xl: "max-w-4xl",
			"2xl": "max-w-6xl"
		})[u.size ?? "md"]), f = c, p = C(null);
		function m() {
			f("update:open", !1), f("close");
		}
		function _(e) {
			e.target === p.value && m();
		}
		function b(e) {
			e.key === "Escape" && m();
		}
		return N(() => u.open, async (e) => {
			e ? (p.value?.showModal(), await h(), p.value?.focus()) : p.value?.close();
		}), y(async () => {
			u.open && (p.value?.showModal(), await h(), p.value?.focus());
		}), v(() => {
			p.value?.open && p.value.close();
		}), (r, c) => {
			let u = Ze;
			return x(), i(t, { to: "body" }, [l(n, {
				name: "modal-fade",
				appear: ""
			}, {
				default: P(() => [e.open ? (x(), o("dialog", {
					key: 0,
					ref_key: "dialogRef",
					ref: p,
					class: "rutely-modal fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-0 m-0 border-0 w-full h-full focus:outline-none",
					onClose: m,
					onClick: I(_, ["self"]),
					onKeydown: b
				}, [s("div", { class: g(["relative bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full p-6 transform transition-all duration-300 border border-gray-200 dark:border-gray-700", [k(d), e.open ? "scale-100 opacity-100" : "scale-95 opacity-0"]]) }, [s("div", null, [s("div", Qe, [s("div", $e, [e.title ? (x(), o("div", et, O(e.title), 1)) : a("", !0), e.subtitle ? (x(), o("div", tt, O(e.subtitle), 1)) : a("", !0)]), s("button", {
					onClick: m,
					"aria-label": "Cerrar",
					class: "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-gray-500 ml-4",
					type: "button"
				}, [...c[0] ||= [s("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					class: "h-5 w-5",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor"
				}, [s("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					"stroke-width": "2",
					d: "M6 18L18 6M6 6l12 12"
				})], -1)]])]), l(u)]), s("div", nt, [T(r.$slots, "default", {}, void 0, !0)])], 2)], 544)) : a("", !0)]),
				_: 3
			})]);
		};
	}
}), [["__scopeId", "data-v-558911f3"]]), it = /* @__PURE__ */ u({
	__name: "DropdownAnimation",
	setup(e) {
		return (e, t) => (x(), i(n, {
			"enter-active-class": "transition ease-out duration-200",
			"enter-from-class": "transform opacity-0 scale-95",
			"enter-to-class": "transform opacity-100 scale-100",
			"leave-active-class": "transition ease-in duration-150",
			"leave-from-class": "transform opacity-100 scale-100",
			"leave-to-class": "transform opacity-0 scale-95"
		}, {
			default: P(() => [T(e.$slots, "default")]),
			_: 3
		}));
	}
}), at = /* @__PURE__ */ u({
	__name: "LoadingSVG",
	props: { customClass: {} },
	setup(e) {
		let t = e, n = r(() => t.customClass || "animate-spin -ml-1 mr-3 h-12 w-12 text-gray-900 dark:text-white");
		return (e, t) => (x(), o("svg", {
			class: g(k(n)),
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 24 24"
		}, [...t[0] ||= [s("circle", {
			class: "opacity-25",
			cx: "12",
			cy: "12",
			r: "10",
			stroke: "currentColor",
			"stroke-width": "4"
		}, null, -1), s("path", {
			class: "opacity-75",
			fill: "currentColor",
			d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
		}, null, -1)]], 2));
	}
}), ot = Symbol("useRequest"), st = { class: "relative" }, ct = [
	"id",
	"placeholder",
	"disabled"
], lt = {
	key: 0,
	class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
}, ut = { class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" }, dt = {
	key: 0,
	class: "flex flex-wrap gap-2 mt-2"
}, ft = ["onClick"], pt = {
	key: 0,
	class: "py-4 px-4 flex items-center justify-center"
}, mt = {
	key: 1,
	class: "py-4 px-4 text-center text-gray-500 dark:text-gray-400"
}, ht = {
	key: 2,
	class: "space-y-2 p-2 max-h-64 overflow-y-auto"
}, gt = ["onClick"], _t = { class: "flex justify-between items-center" }, vt = { class: "flex items-center space-x-2" }, yt = { class: "flex flex-col" }, bt = { class: "font-semibold text-gray-900 dark:text-white" }, xt = {
	key: 0,
	class: "text-primary-600 dark:text-primary-400"
}, St = /* @__PURE__ */ u({
	__name: "SearchableSelect",
	props: /*@__PURE__*/ p({
		url: {},
		searchBy: {},
		placeholder: {},
		leftIcon: {},
		id: {},
		small: { type: Boolean },
		labelKey: {},
		valueKey: {},
		subtitleKey: {},
		disabled: { type: Boolean },
		multiple: { type: Boolean }
	}, {
		modelValue: {},
		modelModifiers: {}
	}),
	emits: /*@__PURE__*/ p(["select", "data"], ["update:modelValue"]),
	setup(t, { emit: n }) {
		let u = t, { placeholder: p = "Buscar...", id: m = "searchable-select", small: h = !1, labelKey: _ = "label", valueKey: v = "value", multiple: S = !1 } = u, T = A(t, "modelValue"), E = d(ot);
		if (!E) throw Error("SearchableSelect: no request instance provided. Call app.provide(useRequestKey, useRequest) in the consuming app.");
		let { get: ee } = E(), j = `searchable-${Math.random().toString(36).slice(2)}`, M = C(!1), F = C(""), I = C([]), L = C([]), R = C(/* @__PURE__ */ new Map()), z = C(null), B = C([]), H = C(!1), U = C(), W = C(), ie = C(""), ae = C(!1), G = C(!1), oe = C(!1), K = r(() => T.value ? z.value && z.value.value === T.value ? z.value : I.value.find((e) => e.value === T.value) || L.value.find((e) => e.value === T.value) : null), se = r(() => "absolute w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-[9999] mt-2 overflow-hidden"), ce = r(() => Array.isArray(T.value) ? T.value : []), le = (e) => S ? ce.value.includes(e.value) : K.value?.value === e.value, ue = 0, de = async () => {
			let e = ++ue, t = ce.value;
			if (t.length === 0) {
				B.value = [];
				return;
			}
			let n = /* @__PURE__ */ new Map();
			for (let e of B.value) n.set(e.value, e);
			for (let e of I.value) n.set(e.value, e);
			for (let e of L.value) n.set(e.value, e);
			let r = t.filter((e) => !n.has(e));
			if (r.length && u.url) {
				if (L.value.length === 0) {
					if (await ye(), e !== ue) return;
					for (let e of L.value) n.set(e.value, e);
					r = t.filter((e) => !n.has(e));
				}
				for (let t of r) try {
					let r = u.url.includes("?") ? "&" : "?", { data: i } = await ee(`${u.url}${r}filter[${v}]=${t}`);
					if (e !== ue) return;
					let a = Array.isArray(i.value) ? i.value : i.value?.data || [];
					a.length && n.set(t, ve(a[0]));
				} catch {}
			}
			e === ue && (B.value = t.map((e) => n.get(e) ?? {
				label: String(e),
				value: e,
				subtitles: []
			}));
		}, pe = (e) => {
			oe.value = !0, T.value = ce.value.filter((t) => t !== e), B.value = B.value.filter((t) => t.value !== e);
		};
		function me(e, t) {
			return t.trim().split(".").reduce((e, t) => e?.[t], e);
		}
		function he(e, t) {
			let n = [...e.matchAll(/\{([^}]+)\}/g)];
			if (n.length === 0) {
				let n = me(t, e);
				return n == null ? "" : String(n);
			}
			let r = n.map((e) => me(t, e[1]));
			if (r.every((e) => e == null || e === "")) return "";
			let i = e;
			return n.forEach((e, t) => {
				let n = r[t];
				i = i.replace(e[0], n == null ? "" : String(n));
			}), i.replace(/^[\s\-:|,·]+/, "").replace(/[\s\-:|,·]+$/, "").replace(/\s+/g, " ").trim();
		}
		function ge(e) {
			return u.subtitleKey ? (Array.isArray(u.subtitleKey) ? u.subtitleKey : [u.subtitleKey]).map((t) => he(t, e)).filter(Boolean) : [];
		}
		let ve = (e) => {
			let t = {
				label: he(_, e),
				value: me(e, v),
				icon: e.icon,
				subtitles: ge(e)
			};
			return R.value.set(t.value, e), t;
		}, ye = async (e = {}) => {
			if (!u.url) return;
			let t = u.url;
			if (e.searchWithId && T.value) {
				let e = u.url.includes("?") ? "&" : "?";
				t = `${u.url}${e}filter[${u.valueKey}]=${T.value}`;
			}
			H.value = !0;
			try {
				let { data: e } = await ee(t);
				if (e.value) {
					let t = (Array.isArray(e.value) ? e.value : e.value.data || []).map(ve);
					I.value = t, L.value = t;
				}
			} catch (e) {
				console.error("Error fetching initial data:", e), I.value = [], L.value = [];
			} finally {
				H.value = !1;
			}
		}, be = async (e) => {
			if (!u.url || !e.trim()) {
				I.value = L.value;
				return;
			}
			H.value = !0;
			try {
				let t = u.url.includes("?") ? "&" : "?", n = `${u.url}${t}${u.searchBy}=${encodeURIComponent(e)}`, { data: r } = await ee(n);
				if (r.value) {
					let e = (Array.isArray(r.value) ? r.value : r.value.data || []).map(ve);
					I.value = e;
				}
			} catch (e) {
				console.error("Error searching data:", e), I.value = [];
			} finally {
				H.value = !1;
			}
		}, xe = () => {
			M.value = !0, ie.value = F.value, G.value = !0, F.value = "", L.value.length === 0 ? ye() : (I.value = L.value, z.value && !I.value.find((e) => e.value === z.value.value) && (I.value = [z.value, ...I.value])), W.value && W.value.select();
		}, Se = () => {
			setTimeout(() => {
				M.value = !1, G.value = !0, S ? F.value = "" : T.value && K.value ? F.value = K.value.label : T.value || (F.value = ""), ie.value = "";
			}, 200);
		};
		_e(F, (e) => {
			if (G.value) {
				G.value = !1;
				return;
			}
			let t = e.trim();
			t && !ae.value ? (be(t), ae.value = !1) : I.value = L.value;
		}, { debounce: 500 });
		let Ce = n, we = (e, t) => {
			if (t && (t.preventDefault(), t.stopPropagation()), S) {
				G.value = !0, oe.value = !0, ce.value.includes(e.value) ? (T.value = ce.value.filter((t) => t !== e.value), B.value = B.value.filter((t) => t.value !== e.value)) : (T.value = [...ce.value, e.value], B.value.find((t) => t.value === e.value) || B.value.push(e)), F.value = "", I.value = L.value, Ce("select", e);
				let t = R.value.get(e.value);
				t !== void 0 && Ce("data", t), W.value && W.value.focus();
				return;
			}
			G.value = !0, T.value = e.value, F.value = e.label, z.value = e, M.value = !1, W.value && W.value.blur(), Ce("select", e);
			let n = R.value.get(e.value);
			n !== void 0 && Ce("data", n);
		}, Te = (e) => {
			let t = e.target;
			U.value && !U.value.contains(t) && (M.value = !1);
		};
		y(() => {
			if (document.addEventListener("click", Te), S) {
				de();
				return;
			}
			T.value && T.value !== "" ? Ee(T.value) : T.value && K.value && (F.value = K.value.label, z.value = K.value);
		}), b(() => {
			document.removeEventListener("click", Te);
		}), N(T, (e, t) => {
			if (S) {
				if (oe.value) {
					oe.value = !1;
					return;
				}
				de();
				return;
			}
			e && e !== t ? K.value && K.value.value === e ? (F.value = K.value.label, z.value ||= K.value) : (!z.value || z.value.value !== e) && Ee(e) : e || (F.value = "", z.value = null);
		});
		let Ee = async (e) => {
			ae.value = !0, await ye();
			let t = I.value.find((t) => t.value === e);
			if (t) G.value = !0, F.value = t.label, z.value = t;
			else {
				let t = u.url.includes("?") ? "&" : "?", n = `${u.url}${t}filter[${u.valueKey}]=${e}`;
				try {
					let { data: e } = await ee(n);
					if (e.value) {
						let t = Array.isArray(e.value) ? e.value : e.value.data || [];
						if (t.length > 0) {
							let e = ve(t[0]);
							I.value = [e, ...I.value], L.value = [e, ...L.value], z.value = e, G.value = !0, F.value = e.label;
						}
					}
				} catch (e) {
					console.error("Error fetching item by ID:", e);
				}
			}
			ae.value = !1;
		};
		return (n, r) => {
			let u = at, d = it;
			return x(), o("div", {
				class: "relative",
				ref_key: "selectRef",
				ref: U
			}, [
				s("div", st, [
					ne(s("input", {
						id: k(m),
						ref_key: "inputRef",
						ref: W,
						"onUpdate:modelValue": r[0] ||= (e) => f(F) ? F.value = e : null,
						onFocus: xe,
						onBlur: Se,
						placeholder: k(p),
						name: j,
						autocomplete: "off",
						"aria-autocomplete": "none",
						"data-lpignore": "true",
						"data-bwignore": "true",
						"data-form-type": "other",
						spellcheck: "false",
						class: g([
							"w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
							t.leftIcon ? "pl-10" : "pl-4",
							"pr-10",
							k(h) ? "py-2" : "py-3"
						]),
						disabled: t.disabled
					}, null, 42, ct), [[te, k(F)]]),
					t.leftIcon ? (x(), o("div", lt, [(x(), i(D(t.leftIcon), { class: g([k(h) ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400"]) }, null, 8, ["class"]))])) : a("", !0),
					s("div", ut, [(x(), i(D(k(V)), { class: g([
						k(h) ? "h-4 w-4" : "h-5 w-5",
						"text-gray-400 dark:text-gray-400 transition-transform duration-200",
						k(M) ? "rotate-180" : ""
					]) }, null, 8, ["class"]))])
				]),
				k(S) && k(B).length ? (x(), o("div", dt, [(x(!0), o(e, null, w(k(B), (e) => (x(), o("span", {
					key: e.value,
					class: "inline-flex items-center gap-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1"
				}, [c(O(e.label) + " ", 1), s("button", {
					type: "button",
					onClick: (t) => pe(e.value),
					class: "hover:text-primary-900 dark:hover:text-primary-100"
				}, [l(k(fe), { class: "h-4 w-4" })], 8, ft)]))), 128))])) : a("", !0),
				l(d, null, {
					default: P(() => [k(M) ? (x(), o("div", {
						key: 0,
						class: g(k(se))
					}, [k(H) ? (x(), o("div", pt, [l(u)])) : k(I).length === 0 ? (x(), o("div", mt, " No se encontraron datos ")) : (x(), o("div", ht, [(x(!0), o(e, null, w(k(I), (t) => (x(), o("div", {
						key: t.value,
						onClick: (e) => we(t, e),
						class: g(["rounded-lg p-3 border cursor-pointer transition-colors", {
							"border-primary-500 bg-primary-100 dark:bg-primary-900/20 hover:bg-primary-200 dark:hover:bg-primary-900/30": le(t),
							"bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700": !le(t)
						}])
					}, [s("div", _t, [s("div", vt, [t.icon ? (x(), i(D(t.icon), {
						key: 0,
						class: "w-5 h-5 text-gray-600 dark:text-gray-400"
					})) : a("", !0), s("div", yt, [s("span", bt, O(t.label), 1), (x(!0), o(e, null, w(t.subtitles, (e, t) => (x(), o("span", {
						key: t,
						class: "text-xs text-gray-500 dark:text-gray-400"
					}, O(e), 1))), 128))])]), le(t) ? (x(), o("div", xt, [l(k(re), { class: "h-6 w-6" })])) : a("", !0)])], 10, gt))), 128))]))], 2)) : a("", !0)]),
					_: 1
				})
			], 512);
		};
	}
}), Ct = {
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
}, wt = ["+", "-"], Tt = [
	"decimal",
	"thousands",
	"prefix",
	"suffix"
];
function Et(e) {
	return Math.max(0, Math.min(e, 100));
}
function Dt(e, t) {
	return e = e.padStart(t + 1, "0"), t === 0 ? e : `${e.slice(0, -t)}.${e.slice(-t)}`;
}
function Ot(e) {
	return e = e ? e.toString() : "", e.replace(/\D+/g, "") || "0";
}
function kt(e, t) {
	return e.replace(/(\d)(?=(?:\d{3})+\b)/gm, `$1${t}`);
}
function At(e, t, n) {
	return t ? e + n + t : e;
}
function jt(e, t) {
	return wt.includes(e) ? (console.warn(`v-money3 "${t}" property don't accept "${e}" as a value.`), !1) : !/\d/g.test(e) || (console.warn(`v-money3 "${t}" property don't accept "${e}" (any number) as a value.`), !1);
}
function Mt(e) {
	for (let t of Tt) if (!jt(e[t], t)) return !1;
	return !0;
}
function Nt(e) {
	for (let t of Tt) {
		if (typeof e[t] != "string") {
			e[t] = "";
			continue;
		}
		e[t] = e[t].replace(/\d+/g, "");
		for (let n of wt) e[t] = e[t].replaceAll(n, "");
	}
	return e;
}
function Pt(e) {
	return e.length - (e.indexOf(".") + 1);
}
function Ft(e) {
	return e.replace(/^(-?)0+(?!\.)(.+)/, "$1$2");
}
function It(e) {
	return /^-?[\d]+$/g.test(e);
}
function Lt(e) {
	return /^-?[\d]+(\.[\d]+)$/g.test(e);
}
function Rt(e, t, n) {
	return t > e.length - 1 ? e : e.substring(0, t) + n + e.substring(t + 1);
}
function zt(e, t) {
	let n = t - Pt(e);
	if (n >= 0) return e;
	let r = e.slice(0, n), i = e.slice(n);
	if (r.charAt(r.length - 1) === "." && (r = r.slice(0, -1)), parseInt(i.charAt(0), 10) >= 5) {
		for (let e = r.length - 1; e >= 0; --e) {
			let t = r.charAt(e);
			if (t !== "." && t !== "-") {
				let n = parseInt(t, 10) + 1;
				if (n < 10) return Rt(r, e, n);
				r = Rt(r, e, "0");
			}
		}
		return `1${r}`;
	}
	return r;
}
function Bt(e, t) {
	let n = () => {
		e === document.activeElement && e.setSelectionRange(t, t);
	};
	e === document.activeElement && (n(), setTimeout(n, 1));
}
function Vt(e) {
	return new Event(e, {
		bubbles: !0,
		cancelable: !1
	});
}
function q({ debug: e = !1 }, ...t) {
	e && console.log(...t);
}
function Ht(e) {
	"@babel/helpers - typeof";
	return Ht = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ht(e);
}
function Ut(e, t) {
	if (Ht(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Ht(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Wt(e) {
	var t = Ut(e, "string");
	return Ht(t) == "symbol" ? t : t + "";
}
function Gt(e, t, n) {
	return (t = Wt(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var Kt = class e {
	constructor(e) {
		Gt(this, "number", 0n), Gt(this, "decimal", 0), this.setNumber(e);
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
			if (t) return zt(n, e);
			let i = n.slice(0, r);
			return i.endsWith(".") ? i.slice(0, -1) : i;
		}
		return n;
	}
	toString() {
		let e = this.number.toString();
		if (this.decimal) {
			let t = !1;
			return e.charAt(0) === "-" && (e = e.substring(1), t = !0), e = e.padStart(e.length + this.decimal, "0"), e = `${e.slice(0, -this.decimal)}.${e.slice(-this.decimal)}`, e = Ft(e), (t ? "-" : "") + e;
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
		if (e = Ft(e), It(e)) this.number = BigInt(e);
		else if (Lt(e)) this.decimal = Pt(e), this.number = BigInt(e.replace(".", ""));
		else throw Error(`BigNumber has received an invalid format for the constructor: ${e}`);
	}
	adjustComparisonNumbers(t) {
		let n;
		n = t instanceof e ? t : new e(t);
		let r = this.getDecimalPrecision() - n.getDecimalPrecision(), i = this.getNumber(), a = n.getNumber();
		return r > 0 ? a = n.getNumber() * 10n ** BigInt(r) : r < 0 && (i = this.getNumber() * 10n ** BigInt(r * -1)), [i, a];
	}
};
function qt(e, t = Ct, n = "") {
	q(t, "utils format() - caller", n), q(t, "utils format() - input1", e);
	let r = Et(t.precision);
	if ((e == null || e === "") && t.allowBlank) return "";
	if (e == null) e = "";
	else if (typeof e == "number") e = t.shouldRound ? e.toFixed(r) : e.toFixed(Math.min(r + 1, 100)).slice(0, -1);
	else if (t.modelModifiers && t.modelModifiers.number && It(e)) e = Number(e).toFixed(r);
	else if (!t.disableNegative && e === "-") return e;
	q(t, "utils format() - input2", e);
	let i = t.disableNegative ? "" : e.indexOf("-") >= 0 ? "-" : "", a = e.replace(t.prefix, "").replace(t.suffix, "");
	q(t, "utils format() - filtered", a), !r && t.thousands !== "." && Lt(a) && (a = zt(a, 0), q(t, "utils format() - !precision && isValidFloat()", a));
	let o = Ot(a);
	q(t, "utils format() - numbers", o), q(t, "utils format() - numbersToCurrency", i + Dt(o, r));
	let s = new Kt(i + Dt(o, r));
	q(t, "utils format() - bigNumber1", s.toString()), t.setMaxIfBigger !== !1 && t.max !== null && t.max !== void 0 && t.max !== "" && s.biggerThan(t.max) && s.setNumber(t.max), t.min !== null && t.min !== void 0 && t.min !== "" && s.lessThan(t.min) && s.setNumber(t.min), t.disableNegative && s.lessThan(0) && s.setNumber(0);
	let c = s.toFixed(r, t.shouldRound);
	if (q(t, "utils format() - bigNumber2", s.toFixed(r)), /^0(\.0+)?$/g.test(c) && t.allowBlank && t.treatZeroAsBlank) return "";
	let [l, u] = c.split("."), d = u === void 0 ? 0 : u.length, f = l.charAt(0) === "-", p = (f ? l.slice(1) : l).padStart(t.minimumNumberOfCharacters - d, "0");
	l = (f ? "-" : "") + kt(p, t.thousands);
	let m = t.prefix + At(l, u, t.decimal) + t.suffix;
	return q(t, "utils format() - output", m), m;
}
function Jt(e, t = Ct, n = "") {
	if (q(t, "utils unformat() - caller", n), q(t, "utils unformat() - input", e), !t.disableNegative && e === "-") return q(t, "utils unformat() - return netagive symbol", e), e;
	let r = t.disableNegative ? "" : e.indexOf("-") >= 0 ? "-" : "", i = e.replace(t.prefix, "").replace(t.suffix, "");
	q(t, "utils unformat() - filtered", i);
	let a = Ot(i);
	q(t, "utils unformat() - numbers", a);
	let o = new Kt(r + Dt(a, t.precision));
	q(t, "utils unformat() - bigNumber1", a.toString()), t.setMaxIfBigger !== !1 && t.max !== null && t.max !== void 0 && t.max !== "" && o.biggerThan(t.max) && o.setNumber(t.max), t.min !== null && t.min !== void 0 && t.min !== "" && o.lessThan(t.min) && o.setNumber(t.min), t.disableNegative && o.lessThan(0) && o.setNumber(0);
	let s = o.toFixed(Et(t.precision), t.shouldRound);
	return t.modelModifiers && t.modelModifiers.number && (s = parseFloat(s)), q(t, "utils unformat() - output", s), s;
}
var Yt = [
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
], Xt = "__v_money3_last_valid__", Zt = "__v_money3_is_wrapper__", Qt = "__v_money3_synth__", $t = (e, t, n) => {
	if (q(t, "directive setValue() - caller", n), !Mt(t)) {
		q(t, "directive setValue() - validateRestrictedOptions() return false. Stopping here...", e.value);
		return;
	}
	let r = e.value.length - (e.selectionEnd || 0), i = qt(e.value, t, n);
	if (t.setMaxIfBigger === !1 && t.max !== null && t.max !== void 0 && t.max !== "") {
		let n = Jt(i, t, "directive setValue overflow check");
		if (new Kt(String(n)).biggerThan(t.max)) {
			let t = e[Xt];
			typeof t == "string" && t !== e.value && (e.value = t);
			return;
		}
	}
	if (i === e.value) {
		let t = e[Xt];
		e[Xt] = i, t !== void 0 && t !== i && e.dispatchEvent(Vt("change"));
		return;
	}
	if (e.value = i, e[Xt] = i, r = Math.max(r, t.suffix.length), r = e.value.length - r, r = Math.max(r, t.prefix.length), Bt(e, r), e.dispatchEvent(Vt("change")), e[Zt]) {
		let t = new Event("input", { bubbles: !1 });
		t[Qt] = !0, e.dispatchEvent(t);
	}
}, en = (e, t) => {
	let n = e.currentTarget, r = e.code === "Backspace" || e.code === "Delete", i = n.value.length - (n.selectionEnd || 0) === 0;
	q(t, "directive onkeydown() - el.value", n.value), q(t, "directive onkeydown() - backspacePressed", r), q(t, "directive onkeydown() - isAtEndPosition", i), t.allowBlank && t.treatZeroAsBlank && r && i && parseFloat(String(Jt(n.value, t, "directive onkeydown allowBlank"))) === 0 && (q(t, "directive onkeydown() - set el.value = \"\"", n.value), n.value = "", n.dispatchEvent(Vt("change"))), q(t, "directive onkeydown() - e.key", e.key), e.key === "+" && n.value.indexOf("-") >= 0 && (q(t, "directive onkeydown() - flipping sign on el.value", n.value), n.value = n.value.replace("-", ""), $t(n, t, "directive onkeydown +"));
}, tn = (e, t) => {
	if (e[Qt]) return;
	let n = e.currentTarget;
	q(t, "directive oninput()", n.value), /^[1-9]$/.test(n.value) && (n.value = Dt(n.value, Et(t.precision)), q(t, "directive oninput() - is 1-9", n.value)), $t(n, t, "directive oninput");
}, nn = (e, t) => {
	let n = e.currentTarget;
	q(t, "directive onFocus()", n.value), t.focusOnRight && Bt(n, n.value.length - t.suffix.length);
}, rn = (e) => {
	if (e.tagName.toLocaleUpperCase() !== "INPUT") {
		let t = e.getElementsByTagName("input");
		if (t.length !== 1) throw Error(`v-money3 requires 1 input, found ${t.length} elements.`);
		return t[0];
	}
	return e;
}, an = (e, t) => {
	e.onkeydown = (e) => {
		en(e, t);
	}, e.oninput = (e) => {
		tn(e, t);
	}, e.onfocus = (e) => {
		nn(e, t);
	};
};
function on(e, t) {
	return e ? Yt.some((n) => JSON.stringify(e[n]) !== JSON.stringify(t[n])) : !1;
}
var sn = "__v_money3_input__";
function cn(e) {
	let t = e[sn];
	if (t) return t;
	let n = rn(e);
	return e[sn] = n, n;
}
var ln = {
	mounted(e, t) {
		if (!t.value) return;
		let n = Nt({
			...Ct,
			...t.value
		});
		q(n, "directive mounted() - opt", n);
		let r = cn(e);
		r[Zt] = e !== r, an(r, n), q(n, "directive mounted() - el.value", r.value), $t(r, n, "directive mounted");
	},
	updated(e, t) {
		if (!t.value) return;
		let n = Nt({
			...Ct,
			...t.value
		});
		q(n, "directive updated() - opt", n), q(n, "directive updated() - host.value", e.value);
		let r = cn(e);
		if (r[Zt] = e !== r, qt(r.value, n, "directive updated check") !== r.value) {
			if (on(t.oldValue ? Nt({
				...Ct,
				...t.oldValue
			}) : null, n) && r.value !== "") {
				console.warn("v-money3: runtime change of format options on the bare directive is unsupported and was skipped to avoid corrupting the value. Re-mount the directive or use the Money3 component instead.");
				return;
			}
			$t(r, n, "directive updated");
		}
	},
	beforeUnmount(e) {
		let t = e[sn] || e;
		t.onkeydown = null, t.oninput = null, t.onfocus = null, delete t[Zt], delete e[sn];
	}
}, un = Object.defineProperty, dn = (e, t, n) => t in e ? un(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, fn = (e, t, n) => dn(e, typeof t == "symbol" ? t : t + "", n), pn = {
	"#": { pattern: /[0-9]/ },
	"@": { pattern: /[a-zA-Z]/ },
	"*": { pattern: /[a-zA-Z0-9]/ }
}, mn = (e, t, n) => e.replaceAll(t, "").replace(n, ".").replace("..", ".").replace(/[^.\d]/g, ""), hn = (e, t, n) => new Intl.NumberFormat(n.number?.locale ?? "en", {
	minimumFractionDigits: e,
	maximumFractionDigits: t,
	roundingMode: "trunc"
}), gn = (e, t = !0, n) => {
	let r = n.number?.unsigned !== !0 && e.startsWith("-") ? "-" : "", i = n.number?.fraction ?? 0, a = hn(0, i, n), o = a.formatToParts(1000.12), s = o.find((e) => e.type === "group")?.value ?? " ", c = o.find((e) => e.type === "decimal")?.value ?? ".", l = mn(e, s, c);
	if (Number.isNaN(parseFloat(l))) return r;
	let u = l.split(".");
	u[1] != null && u[1].length >= 1 && (a = hn(u[1].length <= i ? u[1].length : i, i, n));
	let d = a.format(parseFloat(l));
	return t ? i > 0 && l.endsWith(".") && !l.slice(0, -1).includes(".") && (d += c) : d = mn(d, s, c), r + d;
}, _n = (e) => JSON.parse(e.replaceAll("'", "\"")), vn = (e, t = {}) => {
	let n = { ...t };
	e.dataset.maska != null && e.dataset.maska !== "" && (n.mask = bn(e.dataset.maska)), e.dataset.maskaEager != null && (n.eager = yn(e.dataset.maskaEager)), e.dataset.maskaReversed != null && (n.reversed = yn(e.dataset.maskaReversed)), e.dataset.maskaTokensReplace != null && (n.tokensReplace = yn(e.dataset.maskaTokensReplace)), e.dataset.maskaTokens != null && (n.tokens = xn(e.dataset.maskaTokens));
	let r = {};
	return e.dataset.maskaNumberLocale != null && (r.locale = e.dataset.maskaNumberLocale), e.dataset.maskaNumberFraction != null && (r.fraction = parseInt(e.dataset.maskaNumberFraction)), e.dataset.maskaNumberUnsigned != null && (r.unsigned = yn(e.dataset.maskaNumberUnsigned)), (e.dataset.maskaNumber != null || Object.values(r).length > 0) && (n.number = r), n;
}, yn = (e) => e === "" || !!JSON.parse(e), bn = (e) => e.startsWith("[") && e.endsWith("]") ? _n(e) : e, xn = (e) => {
	if (e.startsWith("{") && e.endsWith("}")) return _n(e);
	let t = {};
	return e.split("|").forEach((e) => {
		let n = e.split(":");
		t[n[0]] = {
			pattern: Sn() ? new RegExp(n[1], "u") : new RegExp(n[1]),
			optional: n[2] === "optional",
			multiple: n[2] === "multiple",
			repeated: n[2] === "repeated"
		};
	}), t;
}, Sn = () => {
	try {
		return !0;
	} catch {
		return !1;
	}
}, Cn = class {
	constructor(e = {}) {
		fn(this, "opts", {}), fn(this, "memo", /* @__PURE__ */ new Map());
		let t = { ...e };
		if (t.tokens != null) {
			t.tokens = t.tokensReplace ? { ...t.tokens } : {
				...pn,
				...t.tokens
			};
			for (let e of Object.values(t.tokens)) typeof e.pattern == "string" && (e.pattern = Sn() ? new RegExp(e.pattern, "u") : new RegExp(e.pattern));
		} else t.tokens = pn;
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
		if (this.opts.number != null) return gn(e, n, this.opts);
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
}, wn = class {
	constructor(e, t = {}) {
		fn(this, "items", /* @__PURE__ */ new Map()), fn(this, "eventAbortController"), fn(this, "onInput", (e) => {
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
			let e = new Cn(vn(n, t));
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
}, Tn = /* @__PURE__ */ new WeakMap(), En = (e, t) => {
	if (e.arg == null || e.instance == null) return;
	let n = "setup" in e.instance.$.type;
	e.arg in e.instance ? e.instance[e.arg] = t : n && console.warn("Maska: please expose `%s` using defineExpose", e.arg);
}, Dn = (e, t) => {
	var n;
	let r = e instanceof HTMLInputElement ? e : e.querySelector("input");
	if (r == null || r?.type === "file") return;
	let i = {};
	if (t.value != null && (i = typeof t.value == "string" ? { mask: t.value } : { ...t.value }), t.arg != null) {
		let e = (e) => {
			En(t, t.modifiers.unmasked ? e.unmasked : t.modifiers.completed ? e.completed : e.masked);
		};
		i.onMaska = i.onMaska == null ? e : Array.isArray(i.onMaska) ? [...i.onMaska, e] : [i.onMaska, e];
	}
	Tn.has(r) ? (n = Tn.get(r)) == null || n.update(i) : Tn.set(r, new wn(r, i));
}, On = ge("darkMode", !0), kn = () => {
	typeof window > "u" || (On.value ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"));
};
function An() {
	kn();
}
function jn() {
	return {
		isDarkMode: On,
		toggleTheme: () => {
			On.value = !On.value, kn();
		},
		applyTheme: kn
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function Mn(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function J(e) {
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
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildMatchFn.js
function Y(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Pn(s, (e) => e.test(o)) : Nn(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function Nn(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Pn(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function Fn(e) {
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
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/constants.js
var In = 365.2425, Ln = 6048e5, Rn = 864e5, zn = 6e4, Bn = 36e5, Vn = 86400;
Vn * 7, Vn * In / 12 * 3;
var Hn = Symbol.for("constructDateFrom");
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/constructFrom.js
function X(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && Hn in e ? e[Hn](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/normalizeDates.js
function Un(e, ...t) {
	let n = X.bind(null, e || t.find((e) => typeof e == "object"));
	return t.map(n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/defaultOptions.js
var Wn = {};
function Gn() {
	return Wn;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/toDate.js
function Z(e, t) {
	return X(t || e, e);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfWeek.js
function Kn(e, t) {
	let n = Gn(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = Z(e, t?.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
	return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var qn = {
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
}, Jn = (e, t, n) => {
	let r, i = qn[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
}, Yn = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, Xn = (e, t, n, r) => Yn[e], Zn = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: J({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: J({
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
	month: J({
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
	day: J({
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
	dayPeriod: J({
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
}, Qn = {
	ordinalNumber: Fn({
		matchPattern: /^(\d+)(th|st|nd|rd)?/i,
		parsePattern: /\d+/i,
		valueCallback: (e) => parseInt(e, 10)
	}),
	era: Y({
		matchPatterns: {
			narrow: /^(b|a)/i,
			abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
			wide: /^(before christ|before common era|anno domini|common era)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: { any: [/^b/i, /^(a|c)/i] },
		defaultParseWidth: "any"
	}),
	quarter: Y({
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
	month: Y({
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
	day: Y({
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
	dayPeriod: Y({
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
}, $n = {
	code: "en-US",
	formatDistance: Jn,
	formatLong: {
		date: Mn({
			formats: {
				full: "EEEE, MMMM do, y",
				long: "MMMM do, y",
				medium: "MMM d, y",
				short: "MM/dd/yyyy"
			},
			defaultWidth: "full"
		}),
		time: Mn({
			formats: {
				full: "h:mm:ss a zzzz",
				long: "h:mm:ss a z",
				medium: "h:mm:ss a",
				short: "h:mm a"
			},
			defaultWidth: "full"
		}),
		dateTime: Mn({
			formats: {
				full: "{{date}} 'at' {{time}}",
				long: "{{date}} 'at' {{time}}",
				medium: "{{date}}, {{time}}",
				short: "{{date}}, {{time}}"
			},
			defaultWidth: "full"
		})
	},
	formatRelative: Xn,
	localize: Zn,
	match: Qn,
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
}, er = {
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
}, tr = (e, t, n) => {
	let r, i = er[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "en " + r : "hace " + r : r;
}, nr = {
	date: Mn({
		formats: {
			full: "EEEE, d 'de' MMMM 'de' y",
			long: "d 'de' MMMM 'de' y",
			medium: "d MMM y",
			short: "dd/MM/y"
		},
		defaultWidth: "full"
	}),
	time: Mn({
		formats: {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: Mn({
		formats: {
			full: "{{date}} 'a las' {{time}}",
			long: "{{date}} 'a las' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, rr = {
	lastWeek: "'el' eeee 'pasado a la' p",
	yesterday: "'ayer a la' p",
	today: "'hoy a la' p",
	tomorrow: "'mañana a la' p",
	nextWeek: "eeee 'a la' p",
	other: "P"
}, ir = {
	lastWeek: "'el' eeee 'pasado a las' p",
	yesterday: "'ayer a las' p",
	today: "'hoy a las' p",
	tomorrow: "'mañana a las' p",
	nextWeek: "eeee 'a las' p",
	other: "P"
}, ar = {
	code: "es",
	formatDistance: tr,
	formatLong: nr,
	formatRelative: (e, t, n, r) => t.getHours() === 1 ? rr[e] : ir[e],
	localize: {
		ordinalNumber: (e, t) => Number(e) + "º",
		era: J({
			values: {
				narrow: ["AC", "DC"],
				abbreviated: ["AC", "DC"],
				wide: ["antes de cristo", "después de cristo"]
			},
			defaultWidth: "wide"
		}),
		quarter: J({
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
		month: J({
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
		day: J({
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
		dayPeriod: J({
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
		ordinalNumber: Fn({
			matchPattern: /^(\d+)(º)?/i,
			parsePattern: /\d+/i,
			valueCallback: function(e) {
				return parseInt(e, 10);
			}
		}),
		era: Y({
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
		quarter: Y({
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
		month: Y({
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
		day: Y({
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
		dayPeriod: Y({
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
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfISOWeek.js
function or(e, t) {
	return Kn(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getISOWeekYear.js
function sr(e, t) {
	let n = Z(e, t?.in), r = n.getFullYear(), i = X(n, 0);
	i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
	let a = or(i), o = X(n, 0);
	o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
	let s = or(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function cr(e) {
	let t = Z(e), n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
	return n.setUTCFullYear(t.getFullYear()), e - +n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfDay.js
function lr(e, t) {
	let n = Z(e, t?.in);
	return n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInCalendarDays.js
function ur(e, t, n) {
	let [r, i] = Un(n?.in, e, t), a = lr(r), o = lr(i), s = +a - cr(a), c = +o - cr(o);
	return Math.round((s - c) / Rn);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfISOWeekYear.js
function dr(e, t) {
	let n = sr(e, t), r = X(t?.in || e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), or(r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isDate.js
function fr(e) {
	return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isValid.js
function pr(e) {
	return !(!fr(e) && typeof e != "number" || isNaN(+Z(e)));
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfYear.js
function mr(e, t) {
	let n = Z(e, t?.in);
	return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getDayOfYear.js
function hr(e, t) {
	let n = Z(e, t?.in);
	return ur(n, mr(n)) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getISOWeek.js
function gr(e, t) {
	let n = Z(e, t?.in), r = or(n) - +dr(n);
	return Math.round(r / Ln) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getWeekYear.js
function _r(e, t) {
	let n = Z(e, t?.in), r = n.getFullYear(), i = Gn(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = X(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = Kn(o, t), c = X(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = Kn(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfWeekYear.js
function vr(e, t) {
	let n = Gn(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = _r(e, t), a = X(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), Kn(a, t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getWeek.js
function yr(e, t) {
	let n = Z(e, t?.in), r = Kn(n, t) - +vr(n, t);
	return Math.round(r / Ln) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/addLeadingZeros.js
function Q(e, t) {
	return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/format/lightFormatters.js
var $ = {
	y(e, t) {
		let n = e.getFullYear(), r = n > 0 ? n : 1 - n;
		return Q(t === "yy" ? r % 100 : r, t.length);
	},
	M(e, t) {
		let n = e.getMonth();
		return t === "M" ? String(n + 1) : Q(n + 1, 2);
	},
	d(e, t) {
		return Q(e.getDate(), t.length);
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
		return Q(e.getHours() % 12 || 12, t.length);
	},
	H(e, t) {
		return Q(e.getHours(), t.length);
	},
	m(e, t) {
		return Q(e.getMinutes(), t.length);
	},
	s(e, t) {
		return Q(e.getSeconds(), t.length);
	},
	S(e, t) {
		let n = t.length, r = e.getMilliseconds();
		return Q(Math.trunc(r * 10 ** (n - 3)), t.length);
	}
}, br = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
}, xr = {
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
		return $.y(e, t);
	},
	Y: function(e, t, n, r) {
		let i = _r(e, r), a = i > 0 ? i : 1 - i;
		return t === "YY" ? Q(a % 100, 2) : t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Q(a, t.length);
	},
	R: function(e, t) {
		return Q(sr(e), t.length);
	},
	u: function(e, t) {
		return Q(e.getFullYear(), t.length);
	},
	Q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "Q": return String(r);
			case "QQ": return Q(r, 2);
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
			case "qq": return Q(r, 2);
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
			case "MM": return $.M(e, t);
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
			case "LL": return Q(r + 1, 2);
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
		let i = yr(e, r);
		return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : Q(i, t.length);
	},
	I: function(e, t, n) {
		let r = gr(e);
		return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Q(r, t.length);
	},
	d: function(e, t, n) {
		return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : $.d(e, t);
	},
	D: function(e, t, n) {
		let r = hr(e);
		return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Q(r, t.length);
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
			case "ee": return Q(a, 2);
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
			case "cc": return Q(a, t.length);
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
			case "ii": return Q(i, t.length);
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
		switch (i = r === 12 ? br.noon : r === 0 ? br.midnight : r / 12 >= 1 ? "pm" : "am", t) {
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
		switch (i = r >= 17 ? br.evening : r >= 12 ? br.afternoon : r >= 4 ? br.morning : br.night, t) {
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
		return $.h(e, t);
	},
	H: function(e, t, n) {
		return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : $.H(e, t);
	},
	K: function(e, t, n) {
		let r = e.getHours() % 12;
		return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Q(r, t.length);
	},
	k: function(e, t, n) {
		let r = e.getHours();
		return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Q(r, t.length);
	},
	m: function(e, t, n) {
		return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : $.m(e, t);
	},
	s: function(e, t, n) {
		return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : $.s(e, t);
	},
	S: function(e, t) {
		return $.S(e, t);
	},
	X: function(e, t, n) {
		let r = e.getTimezoneOffset();
		if (r === 0) return "Z";
		switch (t) {
			case "X": return Cr(r);
			case "XXXX":
			case "XX": return wr(r);
			default: return wr(r, ":");
		}
	},
	x: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "x": return Cr(r);
			case "xxxx":
			case "xx": return wr(r);
			default: return wr(r, ":");
		}
	},
	O: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + Sr(r, ":");
			default: return "GMT" + wr(r, ":");
		}
	},
	z: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + Sr(r, ":");
			default: return "GMT" + wr(r, ":");
		}
	},
	t: function(e, t, n) {
		return Q(Math.trunc(e / 1e3), t.length);
	},
	T: function(e, t, n) {
		return Q(+e, t.length);
	}
};
function Sr(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
	return a === 0 ? n + String(i) : n + String(i) + t + Q(a, 2);
}
function Cr(e, t) {
	return e % 60 == 0 ? (e > 0 ? "-" : "+") + Q(Math.abs(e) / 60, 2) : wr(e, t);
}
function wr(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Q(Math.trunc(r / 60), 2), a = Q(r % 60, 2);
	return n + i + t + a;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/format/longFormatters.js
var Tr = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, Er = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, Dr = {
	p: Er,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return Tr(e, t);
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
		return a.replace("{{date}}", Tr(r, t)).replace("{{time}}", Er(i, t));
	}
}, Or = /^D+$/, kr = /^Y+$/, Ar = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function jr(e) {
	return Or.test(e);
}
function Mr(e) {
	return kr.test(e);
}
function Nr(e, t, n) {
	let r = Pr(e, t, n);
	if (console.warn(r), Ar.includes(e)) throw RangeError(r);
}
function Pr(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/format.js
var Fr = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Ir = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Lr = /^'([^]*?)'?$/, Rr = /''/g, zr = /[a-zA-Z]/;
function Br(e, t, n) {
	let r = Gn(), i = n?.locale ?? r.locale ?? $n, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = Z(e, n?.in);
	if (!pr(s)) throw RangeError("Invalid time value");
	let c = t.match(Ir).map((e) => {
		let t = e[0];
		if (t === "p" || t === "P") {
			let n = Dr[t];
			return n(e, i.formatLong);
		}
		return e;
	}).join("").match(Fr).map((e) => {
		if (e === "''") return {
			isToken: !1,
			value: "'"
		};
		let t = e[0];
		if (t === "'") return {
			isToken: !1,
			value: Vr(e)
		};
		if (xr[t]) return {
			isToken: !0,
			value: e
		};
		if (t.match(zr)) throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
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
		(!n?.useAdditionalWeekYearTokens && Mr(a) || !n?.useAdditionalDayOfYearTokens && jr(a)) && Nr(a, t, String(e));
		let o = xr[a[0]];
		return o(s, a, i.localize, l);
	}).join("");
}
function Vr(e) {
	let t = e.match(Lr);
	return t ? t[1].replace(Rr, "'") : e;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parseISO.js
function Hr(e, t) {
	let n = () => X(t?.in, NaN), r = t?.additionalDigits ?? 2, i = qr(e), a;
	if (i.date) {
		let e = Jr(i.date, r);
		a = Yr(e.restDateString, e.year);
	}
	if (!a || isNaN(+a)) return n();
	let o = +a, s = 0, c;
	if (i.time && (s = Zr(i.time), isNaN(s))) return n();
	if (i.timezone) {
		if (c = $r(i.timezone), isNaN(c)) return n();
	} else {
		let e = new Date(o + s), n = Z(0, t?.in);
		return n.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()), n.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()), n;
	}
	return Z(o + s + c, t?.in);
}
var Ur = {
	dateTimeDelimiter: /[T ]/,
	timeZoneDelimiter: /[Z ]/i,
	timezone: /([Z+-].*)$/
}, Wr = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, Gr = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, Kr = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function qr(e) {
	let t = {}, n = e.split(Ur.dateTimeDelimiter), r;
	if (n.length > 2) return t;
	if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], Ur.timeZoneDelimiter.test(t.date) && (t.date = e.split(Ur.timeZoneDelimiter)[0], r = e.substr(t.date.length, e.length))), r) {
		let e = Ur.timezone.exec(r);
		e ? (t.time = r.replace(e[1], ""), t.timezone = e[1]) : t.time = r;
	}
	return t;
}
function Jr(e, t) {
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
function Yr(e, t) {
	if (t === null) return /* @__PURE__ */ new Date(NaN);
	let n = e.match(Wr);
	if (!n) return /* @__PURE__ */ new Date(NaN);
	let r = !!n[4], i = Xr(n[1]), a = Xr(n[2]) - 1, o = Xr(n[3]), s = Xr(n[4]), c = Xr(n[5]) - 1;
	if (r) return ai(t, s, c) ? ei(t, s, c) : /* @__PURE__ */ new Date(NaN);
	{
		let e = /* @__PURE__ */ new Date(0);
		return !ri(t, a, o) || !ii(t, i) ? /* @__PURE__ */ new Date(NaN) : (e.setUTCFullYear(t, a, Math.max(i, o)), e);
	}
}
function Xr(e) {
	return e ? parseInt(e) : 1;
}
function Zr(e) {
	let t = e.match(Gr);
	if (!t) return NaN;
	let n = Qr(t[1]), r = Qr(t[2]), i = Qr(t[3]);
	return oi(n, r, i) ? n * Bn + r * zn + i * 1e3 : NaN;
}
function Qr(e) {
	return e && parseFloat(e.replace(",", ".")) || 0;
}
function $r(e) {
	if (e === "Z") return 0;
	let t = e.match(Kr);
	if (!t) return 0;
	let n = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), i = t[3] && parseInt(t[3]) || 0;
	return si(r, i) ? n * (r * Bn + i * zn) : NaN;
}
function ei(e, t, n) {
	let r = /* @__PURE__ */ new Date(0);
	r.setUTCFullYear(e, 0, 4);
	let i = r.getUTCDay() || 7, a = (t - 1) * 7 + n + 1 - i;
	return r.setUTCDate(r.getUTCDate() + a), r;
}
var ti = [
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
function ni(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
function ri(e, t, n) {
	return t >= 0 && t <= 11 && n >= 1 && n <= (ti[t] || (ni(e) ? 29 : 28));
}
function ii(e, t) {
	return t >= 1 && t <= (ni(e) ? 366 : 365);
}
function ai(e, t, n) {
	return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function oi(e, t, n) {
	return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function si(e, t) {
	return t >= 0 && t <= 59;
}
//#endregion
//#region src/components/FormInput.vue?vue&type=script&setup=true&lang.ts
var ci = ["for"], li = {
	key: 1,
	class: "relative"
}, ui = [
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
], di = {
	key: 1,
	class: "space-y-1"
}, fi = [
	"id",
	"value",
	"onInput",
	"min",
	"max",
	"step",
	"disabled",
	"autocomplete"
], pi = { class: "flex justify-between text-xs text-gray-400" }, mi = { class: "font-medium text-gray-600 dark:text-gray-300" }, hi = [
	"id",
	"value",
	"onInput",
	"type",
	"placeholder",
	"disabled",
	"autocomplete"
], gi = [
	"id",
	"placeholder",
	"autocomplete"
], _i = {
	key: 4,
	class: "absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer transition-colors duration-200"
}, vi = {
	key: 5,
	class: "absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer transition-colors duration-200"
}, yi = {
	key: 6,
	class: "absolute inset-y-0 right-0 pr-3 flex items-center"
}, bi = {
	key: 7,
	class: "absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer transition-colors duration-200"
}, xi = {
	key: 2,
	class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, Si = /* @__PURE__ */ u({
	__name: "FormInput",
	props: /*@__PURE__*/ p({
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
		let t = ln, n = r(() => {
			if (c.mask) return c.mask;
		}), c = e, u = A(e, "modelValue"), { isDarkMode: d } = jn(), f = C(""), p = C(null), h = r({
			get: () => c.type === "datetime" ? p.value : u.value,
			set: (e) => {
				if (c.type === "datetime") {
					let t = v(String(e || ""));
					t !== null && (u.value = t);
				} else u.value = e;
			}
		});
		function _(e) {
			if (!e) return null;
			try {
				let t = Hr(e);
				return pr(t) ? Br(t, "yyyy-MM-dd HH:mm") : null;
			} catch {
				return null;
			}
		}
		function v(e) {
			if (!e) return null;
			try {
				let t = Hr(e.replace(" ", "T"));
				return pr(t) ? t.toISOString() : null;
			} catch {
				return null;
			}
		}
		function y(e, t) {
			(c.type !== "datetime" || v(String(e || "")) !== null) && t.onChange(e);
		}
		let b = r(() => ({ config: {
			prefix: "",
			suffix: "",
			thousands: ",",
			decimal: ".",
			precision: 2,
			masked: !1,
			allowBlank: !1,
			shouldRound: !0
		} }));
		N(() => u.value, (e) => {
			if (c.type === "money") {
				if (e == null || e === "") f.value = "";
				else if (typeof e == "number") f.value = (e / 100).toFixed(2);
				else {
					let t = parseFloat(String(e));
					isNaN(t) ? f.value = "" : f.value = (t / 100).toFixed(2);
				}
			} else if (c.type === "datetime") {
				let t = _(String(e || ""));
				p.value = t;
			}
		}, { immediate: !0 }), N(() => f.value, (e) => {
			if (c.type === "money") {
				if (!e || e === "") {
					u.value = 0;
					return;
				}
				let t = Jt(e, b.value.config), n = parseFloat(String(t));
				Number.isNaN(n) ? u.value = 0 : u.value = Math.round(n * 100);
			}
		}), N(() => p.value, (e) => {
			if (c.type === "datetime") {
				let t = v(e);
				t !== null && (u.value = t);
			}
		});
		let S = C(!1), w = r(() => c.type === "password"), T = r(() => c.type === "password" ? S.value ? "text" : "password" : c.type), E = r(() => c.type === "password" ? S.value ? G : ae : null), ee = () => {
			S.value = !S.value;
		};
		return (r, p) => {
			let _ = St;
			return x(), o("div", null, [e.label && !e.small ? (x(), o("label", {
				key: 0,
				for: e.id,
				class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
			}, O(e.label), 9, ci)) : a("", !0), l(k(ye), {
				name: e.name,
				label: e.label?.toLowerCase(),
				rules: e.rules
			}, {
				default: P(({ field: r, errorMessage: v }) => [s("div", null, [
					e.url && e.searchBy ? (x(), i(_, {
						key: 0,
						url: e.url,
						id: e.id,
						"search-by": e.searchBy,
						"label-key": e.labelKey,
						"value-key": e.valueKey,
						"subtitle-key": e.subtitleKey,
						placeholder: e.placeholder,
						"left-icon": e.leftIcon,
						modelValue: u.value,
						"onUpdate:modelValue": p[0] ||= (e) => u.value = e,
						disabled: e.disabled,
						onSelect: (e) => r.onChange(e.value)
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
					])) : (x(), o("div", li, [
						e.type === "date" || e.type === "datetime" || e.type === "time" ? (x(), i(k(xe), {
							key: 0,
							modelValue: h.value,
							"onUpdate:modelValue": [p[1] ||= (e) => h.value = e, (e) => y(e, r)],
							"min-date": e.minDate ?? void 0,
							"max-date": e.maxDate ?? void 0,
							"disabled-dates": e.disabledDates,
							id: e.id,
							locale: k(ar),
							"time-picker": e.type === "time",
							"model-type": e.type === "time" ? "HH:mm" : e.type === "datetime" ? "yyyy-MM-dd HH:mm" : "yyyy-MM-dd",
							"time-config": e.type === "date" ? { enableTimePicker: !1 } : { enableTimePicker: !0 },
							dark: k(d),
							"text-input": "",
							teleport: !1,
							autocomplete: e.autocomplete
						}, {
							"dp-input": P((t) => [s("input", {
								id: e.id,
								value: t.value,
								placeholder: e.placeholder,
								onInput: t.onInput,
								onKeydown: [F(t.onEnter, ["enter"]), F(t.onTab, ["tab"])],
								onBlur: t.onBlur,
								onFocus: t.onFocus,
								onKeypress: t.onKeypress,
								onPaste: t.onPaste,
								class: g([
									"w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
									e.leftIcon ? "pl-10" : "pl-4",
									e.rightIcon || w.value ? "pr-10" : "pr-4",
									v ? "border-danger-500 dark:border-danger-500" : "",
									e.small ? "py-2" : "py-3"
								]),
								disabled: e.disabled,
								autocomplete: e.autocomplete
							}, null, 42, ui)]),
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
						])) : e.type === "range" ? (x(), o("div", di, [s("input", m({ id: e.id }, r, {
							value: u.value,
							onInput: (e) => {
								r.onChange(e), u.value = Number(e.target.value);
							},
							type: "range",
							min: e.min,
							max: e.max,
							step: e.step,
							disabled: e.disabled,
							autocomplete: e.autocomplete,
							class: "w-full accent-primary-600"
						}), null, 16, fi), s("div", pi, [
							s("span", null, O(e.min), 1),
							s("span", mi, O(u.value), 1),
							s("span", null, O(e.max), 1)
						])])) : e.type === "money" ? ne((x(), o("input", {
							key: 3,
							id: e.id,
							"onUpdate:modelValue": p[2] ||= (e) => f.value = e,
							type: "text",
							placeholder: e.placeholder,
							autocomplete: e.autocomplete,
							class: g([
								"w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 pl-10",
								e.rightIcon || w.value || e.type === "money" ? "pr-10" : "pr-4",
								v ? "border-danger-500 dark:border-danger-500" : "",
								e.small ? "py-2" : "py-3"
							])
						}, null, 10, gi)), [[
							te,
							f.value,
							void 0,
							{ lazy: !0 }
						], [k(t), b.value.config]]) : ne((x(), o("input", m({
							key: 2,
							id: e.id
						}, r, {
							value: u.value,
							onInput: (e) => {
								r.onChange(e), u.value = e.target.value;
							},
							type: T.value,
							placeholder: e.placeholder,
							disabled: e.disabled,
							autocomplete: e.autocomplete,
							class: [
								"w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:cursor-not-allowed",
								e.leftIcon ? "pl-10" : "pl-4",
								e.rightIcon || w.value ? "pr-10" : "pr-4",
								v ? "border-danger-500 dark:border-danger-500" : "",
								e.small ? "py-2" : "py-3"
							]
						}), null, 16, hi)), [[k(Dn), n.value]]),
						e.type === "money" ? (x(), o("div", _i, [(x(), i(D(k(W)), { class: g([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"]) }, null, 8, ["class"]))])) : a("", !0),
						e.leftIcon ? (x(), o("div", vi, [(x(), i(D(e.leftIcon), { class: g([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"]) }, null, 8, ["class"]))])) : a("", !0),
						c.loading ? (x(), o("div", yi, [l(k(K), { class: g([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400 animate-spin"]) }, null, 8, ["class"])])) : e.rightIcon && !w.value ? (x(), o("div", bi, [(x(), i(D(e.rightIcon), { class: g([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"]) }, null, 8, ["class"]))])) : a("", !0),
						w.value ? (x(), o("button", {
							key: 8,
							type: "button",
							onClick: ee,
							class: "absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer transition-colors duration-200"
						}, [(x(), i(D(E.value), { class: g([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"]) }, null, 8, ["class"]))])) : a("", !0)
					])),
					l(k(ve), {
						name: e.name,
						class: "mt-1 text-sm text-danger-600 dark:text-danger-400"
					}, null, 8, ["name"]),
					e.help ? (x(), o("p", xi, O(e.help), 1)) : a("", !0)
				])]),
				_: 1
			}, 8, [
				"name",
				"label",
				"rules"
			])]);
		};
	}
}), Ci = { class: "flex justify-end space-x-3 pt-4" }, wi = /* @__PURE__ */ u({
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
	setup(e, { emit: t }) {
		let n = Se.object({ confirmation: Se.string().required("La confirmación es requerida").oneOf(["Confirmar"], "Debes escribir 'Confirmar' exactamente") }), r = t, a = S({ confirmation: "" }), o = () => {
			e.loading || (a.confirmation = "", r("close"));
		}, u = () => {
			r("confirm");
		};
		return N(() => e.open, (e) => {
			e || (a.confirmation = "");
		}), (t, r) => {
			let d = Si, f = Oe, p = rt;
			return x(), i(p, {
				open: e.open,
				title: e.title,
				subtitle: e.subtitle,
				onClose: o
			}, {
				default: P(() => [l(k(be), {
					onSubmit: u,
					class: "space-y-4",
					"initial-values": a,
					"validation-schema": k(n)
				}, {
					default: P(() => [s("div", null, [l(d, {
						modelValue: a.confirmation,
						"onUpdate:modelValue": r[0] ||= (e) => a.confirmation = e,
						id: "confirmation",
						name: "confirmation",
						label: "Confirmación",
						placeholder: "Escribe 'Confirmar'"
					}, null, 8, ["modelValue"])]), s("div", Ci, [l(f, {
						type: "button",
						variant: "outline",
						onClick: o,
						disabled: e.loading
					}, {
						default: P(() => [...r[1] ||= [c(" Cancelar ", -1)]]),
						_: 1
					}, 8, ["disabled"]), l(f, {
						type: "submit",
						variant: "danger",
						loading: e.loading,
						disabled: e.loading
					}, {
						default: P(() => [...r[2] ||= [c(" Confirmar ", -1)]]),
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
}), Ti = { class: "mt-4 text-sm text-gray-600 dark:text-gray-400 tabular-nums" }, Ei = /* @__PURE__ */ u({
	__name: "ResultCount",
	props: {
		internalPaginationServer: {},
		totalItems: {}
	},
	setup(e) {
		let t = e, n = r(() => t.internalPaginationServer.total);
		return (t, r) => (x(), o("div", Ti, " Mostrando " + O(e.totalItems) + " de " + O(k(n)) + " resultados ", 1));
	}
}), Di = /* @__PURE__ */ u({
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
		let n = e, r = t, c = () => {
			r("click", n.label);
		};
		return (t, n) => e.to ? (x(), i(k(pe), {
			key: 0,
			to: e.to,
			class: g(["w-full text-left px-4 py-2 text-sm transition-colors duration-150 flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/30 hover:text-gray-900 dark:hover:text-white", { "bg-gray-100 dark:bg-gray-700/50 text-gray-900 dark:text-white": e.active }])
		}, {
			default: P(() => [e.icon ? (x(), i(D(e.icon), {
				key: 0,
				class: "w-4 h-4"
			})) : a("", !0), s("span", null, O(e.label), 1)]),
			_: 1
		}, 8, ["to", "class"])) : (x(), o("button", {
			key: 1,
			type: "button",
			onClick: c,
			class: g(["w-full text-left px-4 py-2 text-sm transition-colors duration-150 flex items-center space-x-2 cursor-pointer text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/30 hover:text-gray-900 dark:hover:text-white", { "bg-gray-100 dark:bg-gray-700/50 text-gray-900 dark:text-white": e.active }])
		}, [e.icon ? (x(), i(D(e.icon), {
			key: 0,
			class: "w-4 h-4"
		})) : a("", !0), s("span", null, O(e.label), 1)], 2));
	}
}), Oi = { class: "py-1" }, ki = /* @__PURE__ */ u({
	__name: "Dropdown",
	props: /*@__PURE__*/ p({
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
	setup(t) {
		let n = t, u = A(t, "modelValue"), d = C(!1), f = C(), p = r(() => n.items.find((e) => e.value === u.value)), m = r(() => `absolute w-48 max-h-60 bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl shadow-lg z-[9999] ${{
			"bottom-left": "left-0 top-full mt-2",
			"bottom-right": "right-0 top-full mt-2",
			"top-left": "left-0 bottom-full mb-2",
			"top-right": "right-0 bottom-full mb-2"
		}[n.position]}`), h = () => {
			d.value = !d.value;
		}, _ = () => {
			d.value = !1;
		}, v = (e) => {
			u.value = e.value, _();
		}, S = (e) => {
			let t = e.target;
			f.value && !f.value.contains(t) && _();
		};
		return y(() => {
			document.addEventListener("click", S);
		}), b(() => {
			document.removeEventListener("click", S);
		}), (n, r) => {
			let u = Oe, _ = Di, y = it;
			return x(), o("div", {
				class: "relative",
				ref_key: "dropdownRef",
				ref: f
			}, [l(u, {
				variant: t.triggerVariant,
				size: t.triggerSize,
				icon: k(V),
				iconPosition: "right",
				small: t.triggerSmall,
				iconClass: k(d) ? "rotate-180 transition-transform duration-200" : "transition-transform duration-200",
				onClick: h,
				class: "bg-white dark:bg-gray-800/70 backdrop-blur-sm border-gray-300 dark:border-gray-700/70 hover:bg-gray-50 dark:hover:bg-gray-700/70 focus:ring-0 focus:border-gray-400 dark:focus:border-gray-600"
			}, {
				default: P(() => [c(O(k(p)?.label || t.placeholder), 1)]),
				_: 1
			}, 8, [
				"variant",
				"size",
				"icon",
				"small",
				"iconClass"
			]), l(y, null, {
				default: P(() => [k(d) ? (x(), o("div", {
					key: 0,
					class: g(k(m))
				}, [s("div", Oi, [(x(!0), o(e, null, w(t.items, (e) => (x(), i(_, {
					key: e.value,
					label: e.label,
					icon: e.icon,
					active: k(p)?.value === e.value,
					onClick: (t) => v(e)
				}, null, 8, [
					"label",
					"icon",
					"active",
					"onClick"
				]))), 128))])], 2)) : a("", !0)]),
				_: 1
			})], 512);
		};
	}
}), Ai = { class: "flex items-center justify-between" }, ji = { class: "text-sm text-gray-600 dark:text-gray-400 tabular-nums" }, Mi = { class: "flex items-center space-x-2" }, Ni = { class: "flex items-center space-x-1" }, Pi = {
	key: 1,
	class: "px-2 text-gray-600 dark:text-gray-400"
}, Fi = /* @__PURE__ */ u({
	__name: "TablePagination",
	props: { internalPaginationServer: {} },
	emits: ["page-change"],
	setup(t, { emit: n }) {
		let a = t, u = n, d = r(() => {
			let e = a.internalPaginationServer.last_page, t = a.internalPaginationServer.current_page, n = [];
			if (e <= 7) for (let t = 1; t <= e; t++) n.push(t);
			else {
				let r = Math.max(1, t - 2), i = Math.min(e, t + 2);
				r > 1 && (n.push(1), r > 2 && n.push(-1));
				for (let e = r; e <= i; e++) n.push(e);
				i < e && (i < e - 1 && n.push(-1), n.push(e));
			}
			return n;
		}), f = (e) => {
			e >= 1 && e <= a.internalPaginationServer.last_page && u("page-change", e);
		};
		return (n, r) => {
			let a = Oe;
			return x(), o("div", Ai, [s("div", ji, " Página " + O(t.internalPaginationServer.current_page) + " de " + O(t.internalPaginationServer.last_page), 1), s("div", Mi, [
				l(a, {
					disabled: t.internalPaginationServer.current_page === 1,
					variant: "outline",
					size: "auto",
					small: !0,
					icon: k(H),
					"icon-class": "h-4 w-4",
					class: "px-2.5!",
					onClick: r[0] ||= (e) => f(t.internalPaginationServer.current_page - 1)
				}, null, 8, ["disabled", "icon"]),
				s("div", Ni, [(x(!0), o(e, null, w(d.value, (n) => (x(), o(e, { key: n }, [n === -1 ? (x(), o("span", Pi, "...")) : (x(), i(a, {
					key: 0,
					variant: n === t.internalPaginationServer.current_page ? "primary" : "outline",
					size: "auto",
					small: !0,
					class: "tabular-nums",
					onClick: (e) => f(n)
				}, {
					default: P(() => [c(O(n), 1)]),
					_: 2
				}, 1032, ["variant", "onClick"]))], 64))), 128))]),
				l(a, {
					disabled: t.internalPaginationServer.current_page === t.internalPaginationServer.last_page,
					variant: "outline",
					size: "auto",
					small: !0,
					icon: k(U),
					"icon-class": "h-4 w-4",
					class: "px-2.5!",
					onClick: r[1] ||= (e) => f(t.internalPaginationServer.current_page + 1)
				}, null, 8, ["disabled", "icon"])
			])]);
		};
	}
}), Ii = { class: "bg-gray-50 dark:bg-gray-800/30" }, Li = {
	key: 0,
	style: {
		width: "120px",
		"min-width": "120px",
		"max-width": "120px"
	},
	class: "px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider overflow-hidden text-ellipsis"
}, Ri = /* @__PURE__ */ u({
	__name: "TableHeader",
	props: {
		columns: {},
		showActions: { type: Boolean },
		actionsLabel: {}
	},
	setup(t) {
		return (n, r) => (x(), o("thead", Ii, [s("tr", null, [(x(!0), o(e, null, w(t.columns, (e) => (x(), o("th", {
			key: e.key,
			style: _({
				width: e.width ? typeof e.width == "number" ? `${e.width}px` : e.width : "auto",
				minWidth: e.width ? typeof e.width == "number" ? `${e.width}px` : e.width : "150px",
				maxWidth: e.width ? typeof e.width == "number" ? `${e.width}px` : e.width : "none"
			}),
			class: "px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider overflow-hidden text-ellipsis"
		}, O(e.label), 5))), 128)), t.showActions ? (x(), o("th", Li, O(t.actionsLabel || "Actions"), 1)) : a("", !0)])]));
	}
}), zi = { class: "bg-white dark:bg-gray-800/20 divide-y divide-gray-200 dark:divide-gray-700 animate-pulse" }, Bi = {
	key: 0,
	style: {
		width: "120px",
		"min-width": "120px",
		"max-width": "120px"
	},
	class: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300 overflow-hidden text-ellipsis"
}, Vi = /* @__PURE__ */ u({
	__name: "TableSkeleton",
	props: {
		rows: { default: 10 },
		columns: {},
		showActions: { type: Boolean }
	},
	setup(t) {
		let n = () => {
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
		return (r, i) => (x(), o("tbody", zi, [(x(!0), o(e, null, w(t.rows, (r) => (x(), o("tr", {
			key: r,
			class: "hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-200"
		}, [(x(!0), o(e, null, w(t.columns, (e, t) => (x(), o("td", {
			key: t,
			class: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300 overflow-hidden text-ellipsis"
		}, [s("div", {
			class: "h-4 bg-gray-200 dark:bg-gray-700 rounded",
			style: _({ width: n() })
		}, null, 4)]))), 128)), t.showActions ? (x(), o("td", Bi, [...i[0] ||= [s("div", { class: "h-4 bg-gray-200 dark:bg-gray-700 rounded w-16" }, null, -1)]])) : a("", !0)]))), 128))]));
	}
}), Hi = C(!1);
function Ui() {
	let e = d(ot);
	if (!e) throw Error("useTable: no request instance provided. Call app.provide(useRequestKey, useRequest) in the consuming app.");
	let { get: t } = e(), n = C(!1), r = C(null), i = C([]), a = C({
		total: 0,
		per_page: 0,
		current_page: 1,
		from: 0,
		to: 0,
		last_page: 0
	});
	return {
		refreshData: Hi,
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
			Hi.value = !0, setTimeout(() => {
				Hi.value = !1;
			}, 200);
		}
	};
}
//#endregion
//#region src/components/DataTable.vue?vue&type=script&setup=true&lang.ts
var Wi = {
	key: 0,
	class: "mb-4 flex justify-between items-center"
}, Gi = { class: "flex items-center relative" }, Ki = { class: "relative w-64" }, qi = {
	key: 0,
	class: "absolute right-3 top-1/2 transform -translate-y-1/2"
}, Ji = {
	key: 1,
	class: "overflow-x-auto min-w-full"
}, Yi = {
	key: 1,
	class: "bg-white dark:bg-gray-800/20 divide-y divide-gray-200 dark:divide-gray-700"
}, Xi = ["onClick"], Zi = { key: 1 }, Qi = { key: 2 }, $i = {
	key: 0,
	style: {
		width: "120px",
		"min-width": "120px",
		"max-width": "120px"
	},
	class: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300"
}, ea = {
	key: 2,
	class: "space-y-4"
}, ta = {
	key: 0,
	class: "space-y-4"
}, na = ["onClick"], ra = { class: "space-y-3" }, ia = { class: "text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider w-1/3" }, aa = { class: "text-sm text-gray-900 dark:text-gray-300 w-2/3 text-right tabular-nums" }, oa = { key: 1 }, sa = { key: 2 }, ca = {
	key: 0,
	class: "flex justify-between items-center pt-3 border-t border-gray-200 dark:border-gray-700"
}, la = { class: "text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" }, ua = { class: "flex space-x-2" }, da = {
	key: 3,
	class: "text-center py-12 text-danger-600 dark:text-danger-400"
}, fa = { class: "text-lg" }, pa = /* @__PURE__ */ u({
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
	setup(t, { emit: n }) {
		let u = n, { refreshData: d, isLoading: p, error: m, internalData: h, internalPaginationServer: v, fetchData: S } = Ui(), E = C(""), D = C(!1), A = C("10"), j = C(1), te = [
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
		], M = t, ne = ee(), F = r(() => !!ne.actions), I = C(!1), L = null, R = () => {
			I.value = window.innerWidth < 640;
		};
		y(() => {
			R(), L = new ResizeObserver(() => {
				R();
			}), L.observe(document.body);
		}), b(() => {
			L &&= (L.disconnect(), null), D.value = !1;
		});
		let z = (e) => {
			j.value = e;
		}, B = r(() => {
			let e = M.columns.reduce((e, t) => {
				if (t.width) {
					let n = typeof t.width == "number" ? t.width : parseInt(t.width.toString());
					return e + (isNaN(n) ? 0 : n);
				}
				return e;
			}, 0), t = M.columns.filter((e) => !e.width).length * 150, n = F.value ? 120 : 0;
			return e === 0 && !F.value ? "100%" : `max(${e + t + n}px, 100%)`;
		}), re = r(() => M.columns.some((e) => e.width)), V = async () => {
			M.url && (await S(M.url, j.value, A.value, E.value, M.searchBy), j.value = v.value.current_page, u("pagination-loaded", v.value));
		};
		N(() => M.url, () => {
			M.url && V();
		}, { immediate: !0 }), N(() => [A.value, j.value], () => {
			M.url && V();
		}), _e(() => E.value, async () => {
			M.url && M.searchBy && (j.value = 1, D.value = !0, await V(), D.value = !1);
		}, { debounce: 500 }), N(() => d.value, (e) => {
			e && M.url && V();
		});
		function H(e, t) {
			let n = t.key.toString().split("."), r = e;
			for (let e of n) if (r && typeof r == "object" && e in r) r = r[e];
			else return "";
			return r;
		}
		function U(e) {
			u("row-selected", e);
		}
		return (n, r) => {
			let u = ki, d = Si, y = Oe, b = Ei;
			return x(), o("div", null, [
				t.showSearch ? (x(), o("div", Wi, [s("div", Gi, [l(u, {
					modelValue: k(A),
					"onUpdate:modelValue": r[0] ||= (e) => f(A) ? A.value = e : null,
					items: te,
					"trigger-small": !0,
					class: "w-20"
				}, null, 8, ["modelValue"])]), s("div", Ki, [l(d, {
					modelValue: k(E),
					"onUpdate:modelValue": r[1] ||= (e) => f(E) ? E.value = e : null,
					label: "",
					id: "table-search",
					name: "table-search",
					placeholder: "Buscar...",
					"left-icon": k(le),
					small: "",
					disabled: k(D)
				}, null, 8, [
					"modelValue",
					"left-icon",
					"disabled"
				]), k(D) ? (x(), o("div", qi, [...r[2] ||= [s("div", { class: "animate-spin rounded-full h-4 w-4 border-b-2 border-primary-500" }, null, -1)]])) : a("", !0)])])) : a("", !0),
				k(I) ? (x(), o("div", ea, [k(p) ? (x(), o("div", ta, [(x(), o(e, null, w(5, (e) => s("div", {
					key: e,
					class: "bg-gray-50 dark:bg-gray-800/20 rounded-lg p-4 animate-pulse"
				}, [...r[3] ||= [s("div", { class: "space-y-3" }, [
					s("div", { class: "h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" }),
					s("div", { class: "h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" }),
					s("div", { class: "h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3" })
				], -1)]])), 64))])) : (x(!0), o(e, { key: 1 }, w(k(h), (r, i) => (x(), o("div", {
					key: i,
					class: "bg-white dark:bg-gray-800/20 rounded-lg p-4 border border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-200",
					onClick: (e) => U(r)
				}, [s("div", ra, [(x(!0), o(e, null, w(M.columns, (e, t) => (x(), o("div", {
					key: e.key,
					class: g(["flex justify-between items-start", t < M.columns.length - 1 ? "pb-3 border-b border-gray-200 dark:border-gray-700" : ""])
				}, [s("span", ia, O(e.label), 1), s("div", aa, [e.slot ? T(n.$slots, e.slot, {
					row: r,
					value: H(r, e)
				}, void 0, void 0, 0) : e.format ? (x(), o("span", oa, O(e.format(r)), 1)) : (x(), o("span", sa, O(H(r, e)), 1))])], 2))), 128)), k(F) ? (x(), o("div", ca, [s("span", la, O(t.actionsLabel || "Actions"), 1), s("div", ua, [T(n.$slots, "actions", { row: r })])])) : a("", !0)])], 8, na))), 128))])) : (x(), o("div", Ji, [s("table", {
					class: "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
					style: _({
						width: k(B),
						tableLayout: k(re) ? "fixed" : "auto"
					})
				}, [l(Ri, {
					columns: M.columns,
					"show-actions": k(F),
					"actions-label": t.actionsLabel
				}, null, 8, [
					"columns",
					"show-actions",
					"actions-label"
				]), k(p) ? (x(), i(Vi, {
					key: 0,
					rows: 10,
					columns: M.columns,
					"show-actions": k(F)
				}, null, 8, ["columns", "show-actions"])) : (x(), o("tbody", Yi, [(x(!0), o(e, null, w(k(h), (t, r) => (x(), o("tr", {
					key: r,
					class: "hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-200 cursor-pointer",
					onClick: (e) => U(t)
				}, [(x(!0), o(e, null, w(M.columns, (e) => (x(), o("td", {
					key: e.key,
					style: _({
						width: e.width ? typeof e.width == "number" ? `${e.width}px` : e.width : "auto",
						minWidth: e.width ? typeof e.width == "number" ? `${e.width}px` : e.width : "150px",
						maxWidth: e.width ? typeof e.width == "number" ? `${e.width}px` : e.width : "none"
					}),
					class: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300 overflow-hidden text-ellipsis tabular-nums"
				}, [e.slot ? T(n.$slots, e.slot, {
					row: t,
					value: H(t, e)
				}, void 0, void 0, 0) : e.format ? (x(), o("span", Zi, O(e.format(t)), 1)) : (x(), o("span", Qi, O(H(t, e)), 1))], 4))), 128)), k(F) ? (x(), o("td", $i, [T(n.$slots, "actions", { row: t })])) : a("", !0)], 8, Xi))), 128))]))], 4)])),
				k(m) ? (x(), o("div", da, [s("p", fa, O(k(m)), 1), l(y, {
					onClick: V,
					class: "mt-4",
					variant: "secondary",
					size: "small"
				}, {
					default: P(() => [...r[4] ||= [c(" Reintentar ", -1)]]),
					_: 1
				})])) : a("", !0),
				l(b, {
					"internal-pagination-server": k(v),
					"total-items": k(h).length
				}, null, 8, ["internal-pagination-server", "total-items"]),
				l(Fi, {
					"internal-pagination-server": k(v),
					onPageChange: z
				}, null, 8, ["internal-pagination-server"])
			]);
		};
	}
}), ma = ["onClick"], ha = /* @__PURE__ */ u({
	__name: "DropdownMenu",
	props: {
		items: {},
		ariaLabel: { default: "Opciones" },
		position: { default: "bottom-right" },
		buttonVariant: { default: "outline" },
		icon: { default: () => ie }
	},
	emits: ["select"],
	setup(t, { emit: n }) {
		let r = n, c = C(!1), u = C(null);
		he(u, () => {
			c.value = !1;
		});
		function d(e) {
			r("select", e), c.value = !1;
		}
		return (n, r) => {
			let f = Ae, p = it;
			return x(), o("div", {
				ref_key: "menuRef",
				ref: u,
				class: g(["relative", { "z-[9999]": k(c) }])
			}, [l(f, {
				icon: t.icon,
				variant: t.buttonVariant,
				"aria-label": t.ariaLabel,
				onClick: r[0] ||= (e) => c.value = !k(c)
			}, null, 8, [
				"icon",
				"variant",
				"aria-label"
			]), l(p, null, {
				default: P(() => [k(c) ? (x(), o("div", {
					key: 0,
					class: g(["absolute w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-10 py-1", t.position === "bottom-right" ? "right-0 top-full mt-1" : "left-0 top-full mt-1"])
				}, [(x(!0), o(e, null, w(t.items, (e) => (x(), o("button", {
					key: e.action,
					type: "button",
					class: g(["w-full text-left px-4 py-2 text-sm transition-colors duration-150 flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700/30 cursor-pointer", [e.variant === "danger" ? "text-danger-600 dark:text-danger-400" : e.variant === "success" ? "text-success-600 dark:text-success-400" : "text-gray-700 dark:text-gray-200"]]),
					onClick: (t) => d(e)
				}, [e.icon ? (x(), i(D(e.icon), {
					key: 0,
					class: "w-4 h-4"
				})) : a("", !0), s("span", null, O(e.label), 1)], 10, ma))), 128))], 2)) : a("", !0)]),
				_: 1
			})], 2);
		};
	}
}), ga = ["for"], _a = { class: "relative" }, va = [
	"id",
	"name",
	"onChange",
	"onBlur",
	"value"
], ya = {
	key: 0,
	value: "",
	class: "bg-white dark:bg-gray-500 text-gray-600 dark:text-white",
	disabled: ""
}, ba = ["value", "selected"], xa = {
	key: 0,
	class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
}, Sa = /* @__PURE__ */ u({
	__name: "FormSelect",
	props: /*@__PURE__*/ p({
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
	setup(t) {
		let n = t, { placeholder: r = "Selecciona una opción" } = n, c = A(t, "modelValue"), u = (e, t) => {
			let r = e.target, i = n.options.find((e) => String(e.value) === r.value), a = r.value === "" ? null : i ? i.value : r.value;
			c.value = a, t(a);
		};
		return (n, d) => (x(), o("div", null, [
			t.label && !t.small ? (x(), o("label", {
				key: 0,
				for: t.id,
				class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
			}, O(t.label), 9, ga)) : a("", !0),
			l(k(ye), {
				name: t.name,
				rules: t.rules,
				modelValue: c.value,
				"onUpdate:modelValue": d[0] ||= (e) => c.value = e
			}, {
				default: P(({ field: n, value: c, errorMessage: l, handleChange: d }) => [s("div", _a, [s("select", {
					id: t.id,
					name: n.name,
					onChange: (e) => u(e, d),
					onBlur: n.onBlur,
					value: c,
					class: g([
						"w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
						t.leftIcon ? "pl-10" : "pl-4",
						"pr-4",
						l ? "border-danger-500 dark:border-danger-500" : "",
						t.small ? "py-2" : "py-3"
					])
				}, [k(r) ? (x(), o("option", ya, O(k(r)), 1)) : a("", !0), (x(!0), o(e, null, w(t.options, (e) => (x(), o("option", {
					key: e.value,
					value: e.value,
					selected: c != null && String(c) === String(e.value),
					class: "bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
				}, O(e.label), 9, ba))), 128))], 42, va), t.leftIcon ? (x(), o("div", xa, [(x(), i(D(t.leftIcon), { class: g([t.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400"]) }, null, 8, ["class"]))])) : a("", !0)])]),
				_: 1
			}, 8, [
				"name",
				"rules",
				"modelValue"
			]),
			l(k(ve), {
				name: t.name,
				class: "mt-1 text-sm text-danger-600 dark:text-danger-400"
			}, null, 8, ["name"])
		]));
	}
}), Ca = ["for"], wa = { class: "relative" }, Ta = [
	"id",
	"value",
	"onInput",
	"placeholder",
	"rows",
	"maxlength"
], Ea = { class: "mt-1 flex items-start justify-between gap-2" }, Da = /* @__PURE__ */ u({
	__name: "FormTextarea",
	props: /*@__PURE__*/ p({
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
		let t = A(e, "modelValue"), n = r(() => (t.value ?? "").length);
		return (r, i) => (x(), o("div", null, [e.label && !e.small ? (x(), o("label", {
			key: 0,
			for: e.id,
			class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
		}, O(e.label), 9, Ca)) : a("", !0), l(k(ye), {
			name: e.name,
			rules: e.rules
		}, {
			default: P(({ field: r, errorMessage: i }) => [s("div", null, [s("div", wa, [s("textarea", m({ id: e.id }, r, {
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
			}), null, 16, Ta)]), s("div", Ea, [l(k(ve), {
				name: e.name,
				class: "text-sm text-danger-600 dark:text-danger-400"
			}, null, 8, ["name"]), e.maxLength ? (x(), o("span", {
				key: 0,
				class: g(["text-xs text-gray-500 dark:text-gray-400 ml-auto shrink-0", n.value >= e.maxLength ? "text-danger-600 dark:text-danger-400" : ""])
			}, O(n.value) + " / " + O(e.maxLength), 3)) : a("", !0)])])]),
			_: 1
		}, 8, ["name", "rules"])]));
	}
}), Oa = /* @__PURE__ */ u({
	__name: "HelpTooltip",
	props: { tooltip: {} },
	setup(e) {
		let t = C(null), n = C(null), r = C(0), i = () => {
			if (!t.value || !n.value) return;
			let e = t.value.getBoundingClientRect(), i = e.left + e.width / 2, a = i + 96 - window.innerWidth + 8, o = -(i - 96 - 8);
			a > 0 ? r.value = -a : o > 0 ? r.value = o : r.value = 0;
		};
		return (a, l) => (x(), o("div", {
			ref_key: "triggerRef",
			ref: t,
			class: "relative group",
			onMouseenter: i
		}, [l[1] ||= s("span", { class: "inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-[10px] font-bold cursor-help leading-none" }, "?", -1), s("div", {
			ref_key: "tooltipRef",
			ref: n,
			class: "absolute bottom-full left-1/2 mb-2 px-3 py-2 text-xs text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-48 text-center z-50 pointer-events-none",
			style: _({ transform: `translateX(calc(-50% + ${k(r)}px))` })
		}, [c(O(e.tooltip) + " ", 1), l[0] ||= s("div", { class: "absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700" }, null, -1)], 4)], 544));
	}
}), ka = /* @__PURE__ */ u({
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
		let t = e, n = r(() => t.to !== void 0), a = r(() => n.value ? pe : "button"), o = r(() => {
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
		return (t, n) => (x(), i(D(a.value), {
			to: e.to,
			class: g([
				"w-8 h-8 flex items-center justify-center transition-colors cursor-pointer",
				e.rounded ? "rounded-full" : "rounded-lg",
				o.value
			])
		}, {
			default: P(() => [T(t.$slots, "default", {}, () => [(x(), i(D(e.icon), { class: "w-4 h-4" }))])]),
			_: 3
		}, 8, ["to", "class"]));
	}
}), Aa = ["src"], ja = /*#__PURE__*/ we(/* @__PURE__ */ u({
	__name: "ImageLightbox",
	props: {
		open: { type: Boolean },
		src: {}
	},
	emits: ["close"],
	setup(e, { emit: r }) {
		let s = e, c = r;
		function u() {
			c("close");
		}
		function d(e) {
			s.open && e.key === "Escape" && u();
		}
		return y(() => {
			document.addEventListener("keydown", d);
		}), b(() => {
			document.removeEventListener("keydown", d);
		}), (r, s) => (x(), i(t, { to: "body" }, [l(n, { name: "lightbox-fade" }, {
			default: P(() => [e.open ? (x(), o("div", {
				key: 0,
				class: "fixed inset-0 z-[110] flex cursor-zoom-out items-center justify-center bg-black/90 p-4 sm:p-8",
				onClick: u
			}, [e.src ? (x(), o("img", {
				key: 0,
				src: e.src,
				alt: "Vista ampliada",
				class: "max-h-full max-w-full rounded-lg object-contain shadow-2xl"
			}, null, 8, Aa)) : a("", !0)])) : a("", !0)]),
			_: 1
		})]));
	}
}), [["__scopeId", "data-v-1bea9514"]]), Ma = { class: "text-base font-medium text-gray-600 dark:text-gray-400 block mb-1" }, Na = { class: "text-gray-900 dark:text-white text-base w-fit" }, Pa = /* @__PURE__ */ u({
	__name: "InfoItem",
	props: {
		label: {},
		column: {
			type: Boolean,
			default: !0
		}
	},
	setup(e) {
		let t = e, n = r(() => t.column ? "" : "flex items-center space-x-2");
		return (t, r) => (x(), o("div", { class: g(k(n)) }, [s("span", Ma, O(e.label), 1), s("div", Na, [T(t.$slots, "default")])], 2));
	}
}), Fa = { class: "bg-white border-b-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700 px-6 h-20 flex items-center" }, Ia = { class: "flex items-center justify-between w-full" }, La = { class: "flex gap-4" }, Ra = { class: "flex items-center lg:hidden" }, za = { class: "flex items-center space-x-4" }, Ba = /* @__PURE__ */ u({
	__name: "Navbar",
	emits: ["toggle-mobile-sidebar"],
	setup(e) {
		return (e, t) => (x(), o("nav", Fa, [s("div", Ia, [s("div", La, [s("div", Ra, [s("button", {
			onClick: t[0] ||= (t) => e.$emit("toggle-mobile-sidebar"),
			class: "w-10 h-10 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
		}, [l(k(se), { class: "w-5 h-5 text-gray-900 dark:text-white" })])])]), s("div", za, [T(e.$slots, "right")])])]));
	}
}), Va = /* @__PURE__ */ u({
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
		let t = e, n = me(), c = r(() => n.path === t.to);
		return (t, n) => {
			let r = E("RouterLink");
			return x(), i(r, {
				to: e.to,
				"data-active": c.value,
				class: g(["group relative flex items-center gap-3 py-2.5 px-3 rounded-xl w-full transition-all duration-200 focus:outline-none", [c.value ? e.showActiveBackground ? "bg-primary-600 text-white dark:bg-primary-500" : e.useExternalIndicator ? "bg-primary-600 text-white dark:bg-primary-500 lg:bg-transparent lg:dark:bg-transparent" : "text-white" : "text-gray-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800/50"]])
			}, {
				default: P(() => [(x(), i(D(e.icon), { class: g(["w-5 h-5 shrink-0 transition-colors duration-200", [c.value ? "text-white" : "text-gray-400 group-hover:text-gray-600 dark:text-gray-200 dark:group-hover:text-gray-100"]]) }, null, 8, ["class"])), s("div", { class: g(["overflow-hidden transition-all duration-300 flex items-center gap-2", e.isCollapsed ? "w-0" : e.textFitContent ? "w-fit" : "w-48"]) }, [
					s("span", { class: g(["whitespace-nowrap", c.value ? "font-medium" : "font-normal"]) }, O(e.name), 3),
					e.hasExternalIcon ? (x(), i(k(z), {
						key: 0,
						class: "w-3.5 h-3.5 shrink-0 opacity-50"
					})) : a("", !0),
					e.hasBadge ? (x(), o("span", {
						key: 1,
						class: g(["text-[10px] font-medium px-1.5 py-0.5 rounded-full shrink-0 tabular-nums", [c.value ? "bg-white/20 text-white" : "bg-primary-600 text-white dark:bg-primary-500"]])
					}, O(e.badgeText), 3)) : a("", !0)
				], 2)]),
				_: 1
			}, 8, [
				"to",
				"data-active",
				"class"
			]);
		};
	}
}), Ha = ge("sidebarCollapsed", !1);
function Ua() {
	return {
		isCollapsed: Ha,
		toggleCollapse: () => {
			Ha.value = !Ha.value;
		},
		expand: () => {
			Ha.value = !1;
		}
	};
}
//#endregion
//#region src/composables/useActiveIndicator.ts
function Wa(e) {
	let t = me(), n = C(!1), r = C(!1), i = C({
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
		if (await h(), !e.value) return;
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
	return y(async () => {
		await h(), l(), requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				n.value = !0;
			});
		});
	}), b(() => {
		a && cancelAnimationFrame(a);
	}), N(() => t.path, () => {
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
var Ga = { class: "space-y-0.5 relative" }, Ka = ["onClick"], qa = { class: "overflow-hidden" }, Ja = { class: "pl-6 space-y-0.5 pt-1 pb-1" }, Ya = /* @__PURE__ */ u({
	__name: "SidebarList",
	props: {
		isCollapsed: { type: Boolean },
		menuItems: {}
	},
	setup(t) {
		let n = t, r = me(), { expand: a } = Ua(), c = j("navRef"), { isInitialized: u, isAnimating: d, activeIndicatorStyle: f, trackAnimation: p } = Wa(c), m = C(/* @__PURE__ */ new Set()), h = C(/* @__PURE__ */ new Set()), v = (e) => e.children?.some((e) => r.path === e.route || r.path.startsWith(e.route + "/")) ?? !1, y = (e) => h.value.has(e.route) ? !1 : m.value.has(e.route) || v(e), b = (e) => {
			if (n.isCollapsed) {
				a(), m.value.add(e), h.value.delete(e), p();
				return;
			}
			y({ route: e }) ? (m.value.delete(e), h.value.add(e)) : (m.value.add(e), h.value.delete(e)), p();
		};
		return N(() => r.path, () => {
			h.value.clear();
		}), N(() => n.isCollapsed, () => {
			p();
		}), (r, a) => {
			let p = Va;
			return x(), o("nav", {
				ref_key: "navRef",
				ref: c,
				class: "flex-1 px-3 py-2 relative"
			}, [s("div", {
				class: g(["absolute left-3 right-3 bg-primary-600 dark:bg-primary-500 rounded-xl", k(u) ? k(d) ? "transition-opacity duration-150 ease-out" : "transition-all duration-300 ease-out" : ""]),
				style: _({
					top: k(f).top,
					height: k(f).height,
					opacity: k(f).opacity
				})
			}, null, 6), s("ul", Ga, [(x(!0), o(e, null, w(n.menuItems, (n) => (x(), o("li", { key: n.route }, [n.children?.length ? (x(), o(e, { key: 0 }, [s("button", {
				class: g(["group relative flex items-center gap-3 py-2.5 px-3 rounded-xl w-full transition-all duration-200 outline-none", [v(n) ? "text-primary-500 dark:text-primary-400" : "text-gray-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800/50"]]),
				onClick: (e) => b(n.route)
			}, [(x(), i(D(n.icon), { class: g(["w-5 h-5 shrink-0 transition-colors duration-200", [v(n) ? "text-primary-500 dark:text-primary-400" : "text-gray-400 group-hover:text-gray-600 dark:text-gray-200 dark:group-hover:text-gray-100"]]) }, null, 8, ["class"])), s("div", { class: g(["overflow-hidden transition-all duration-300 flex items-center justify-between flex-1", t.isCollapsed ? "w-0" : "w-48"]) }, [s("span", { class: g([v(n) ? "font-medium" : "font-normal", "whitespace-nowrap"]) }, O(n.name), 3), l(k(V), { class: g(["w-4 h-4 shrink-0 transition-transform duration-300 ease-in-out", y(n) ? "rotate-180" : ""]) }, null, 8, ["class"])], 2)], 10, Ka), s("div", { class: g(["grid transition-all duration-300 ease-in-out", y(n) && !t.isCollapsed ? "grid-rows-[1fr]" : "grid-rows-[0fr]"]) }, [s("div", qa, [s("ul", Ja, [(x(!0), o(e, null, w(n.children, (e) => (x(), o("li", { key: e.route }, [l(p, {
				to: e.route,
				name: e.name,
				icon: e.icon,
				"is-collapsed": t.isCollapsed,
				"use-external-indicator": ""
			}, null, 8, [
				"to",
				"name",
				"icon",
				"is-collapsed"
			])]))), 128))])])], 2)], 64)) : (x(), i(p, {
				key: 1,
				to: n.route,
				name: n.name,
				icon: n.icon,
				"is-collapsed": t.isCollapsed,
				"use-external-indicator": ""
			}, null, 8, [
				"to",
				"name",
				"icon",
				"is-collapsed"
			]))]))), 128))])], 512);
		};
	}
}), Xa = C(!1), Za = C(!1), Qa = C(!1);
function $a() {
	let e = () => {
		let e = window.innerWidth;
		Xa.value = e < 1024, Za.value = e >= 768 && e < 1024, Qa.value = e >= 1024;
	};
	return y(() => {
		e(), window.addEventListener("resize", e);
	}), b(() => {
		window.removeEventListener("resize", e);
	}), {
		isMobile: Xa,
		isTablet: Za,
		isDesktop: Qa,
		checkScreenSize: e
	};
}
//#endregion
//#region src/components/Sidebar.vue?vue&type=script&setup=true&lang.ts
var eo = { class: "p-4 border-b-2 border-gray-200 dark:border-gray-700 h-20 flex items-center" }, to = {
	key: 0,
	class: "flex items-center space-x-2"
}, no = { class: "w-8 h-8" }, ro = ["src", "alt"], io = { class: "overflow-hidden transition-all duration-300 w-auto" }, ao = { class: "text-lg font-semibold whitespace-nowrap text-gray-900 dark:text-white" }, oo = { class: "text-sm whitespace-nowrap text-gray-500 dark:text-gray-400" }, so = { class: "flex-1 overflow-y-auto" }, co = {
	key: 0,
	class: "px-4 pb-1 text-left text-[10px] text-gray-400 dark:text-gray-500"
}, lo = { class: "p-4 border-t-2 border-gray-200 dark:border-gray-700" }, uo = {
	key: 0,
	class: "text-sm text-gray-900 dark:text-white whitespace-nowrap"
}, fo = /* @__PURE__ */ u({
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
		let n = e, { logo: c, title: u, subtitle: d, version: f, menuItems: p } = n, m = t, { isDarkMode: h, toggleTheme: _ } = jn(), v = r(() => h.value ? de : ce), y = r(() => n.isCollapsed ? "w-20" : "lg:w-64 xl:w-72"), b = () => {
			m("toggle-collapse");
		};
		return (e, t) => {
			let r = Ya;
			return x(), o("aside", { class: g(["h-screen flex flex-col border-r-2 transition-all duration-300 bg-white text-gray-900 border-gray-200 dark:bg-gray-900 dark:text-white dark:border-gray-700", y.value]) }, [
				s("div", eo, [s("div", { class: g(["flex items-center w-full", n.isCollapsed ? "justify-center" : "justify-between"]) }, [n.isCollapsed ? a("", !0) : (x(), o("div", to, [s("div", no, [s("img", {
					src: k(c),
					alt: k(u),
					class: "w-full h-full object-contain"
				}, null, 8, ro)]), s("div", io, [s("h1", ao, O(k(u)), 1), s("p", oo, O(k(d)), 1)])])), k(Xa) ? (x(), o("button", {
					key: 1,
					onClick: t[0] ||= (t) => e.$emit("close"),
					class: "w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
				}, [l(k(fe), { class: "w-4 h-4 text-gray-600 dark:text-gray-400" })])) : n.isCollapsed ? (x(), o("button", {
					key: 3,
					onClick: b,
					class: "w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
				}, [l(k(U), { class: "w-4 h-4 text-gray-600 dark:text-gray-400" })])) : (x(), o("button", {
					key: 2,
					onClick: b,
					class: "w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ml-auto bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
				}, [l(k(H), { class: "w-4 h-4 text-gray-600 dark:text-gray-400" })]))], 2)]),
				s("div", so, [l(r, {
					"is-collapsed": n.isCollapsed,
					"menu-items": k(p)
				}, null, 8, ["is-collapsed", "menu-items"])]),
				n.isCollapsed ? a("", !0) : (x(), o("p", co, " v" + O(k(f)), 1)),
				s("div", lo, [s("button", {
					onClick: t[1] ||= (...e) => k(_) && k(_)(...e),
					class: g(["w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700", n.isCollapsed ? "justify-center" : ""]),
					"aria-label": "Toggle theme"
				}, [(x(), i(D(v.value), { class: "w-5 h-5 text-gray-900 dark:text-white flex-shrink-0" })), n.isCollapsed ? a("", !0) : (x(), o("span", uo, O(k(h) ? "Modo claro" : "Modo oscuro"), 1))], 2)])
			], 2);
		};
	}
}), po = /* @__PURE__ */ u({
	__name: "SidebarNav",
	props: { items: {} },
	setup(t) {
		let n = j("navRef"), { isInitialized: r, activeIndicatorStyle: a } = Wa(n);
		return (c, l) => {
			let u = Va;
			return x(), o("nav", {
				ref_key: "navRef",
				ref: n,
				class: "relative space-y-2 flex gap-4 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-hidden"
			}, [s("div", {
				class: g(["absolute left-0 right-0 bg-primary-600 dark:bg-primary-500 rounded-xl hidden lg:block", k(r) ? "transition-all duration-300 ease-out" : ""]),
				style: _({
					top: k(a).top,
					height: k(a).height,
					opacity: k(a).opacity
				})
			}, null, 6), (x(!0), o(e, null, w(t.items, (e) => (x(), i(u, {
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
}), mo = 3e3, ho = /* @__PURE__ */ u({
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
		let r = e, a = t, o = C(!1);
		y(() => {
			setTimeout(() => {
				o.value = !0;
			}, 50);
		}), setTimeout(() => {
			o.value = !1, setTimeout(() => {
				a("expired");
			}, 300);
		}, mo);
		let c = (e) => {
			e && (e.preventDefault(), e.stopPropagation()), o.value = !1, setTimeout(() => {
				a("cancel", r.message);
			}, 300);
		};
		return (t, r) => (x(), i(n, {
			"enter-active-class": "animate-fade-in-up-fast",
			"leave-active-class": "animate-fade-out"
		}, {
			default: P(() => [ne(s("div", { class: g(["min-h-12 mb-4 snack-content flex items-center justify-between rounded-lg pointer-events-auto", [e.error ? "border border-danger-200 dark:border-danger-800 bg-danger-50 dark:bg-danger-900" : "border border-success-200 dark:border-success-800 bg-success-50 dark:bg-success-900"]]) }, [s("div", { class: g(["p-4 flex-1", [e.error ? "text-danger-700 dark:text-danger-100" : "text-success-700 dark:text-success-100"]]) }, O(e.message.text), 3), s("div", null, [s("button", {
				class: g(["px-3 py-2 text-center text-sm uppercase font-semibold cursor-pointer hover:opacity-70 transition-opacity", [e.error ? "text-danger-700 dark:text-danger-100" : "text-success-700 dark:text-success-100"]]),
				onClick: I(c, ["stop"])
			}, [l(k(fe), {
				name: "close",
				class: "w-4 h-4"
			})], 2)])], 2), [[M, k(o)]])]),
			_: 1
		}));
	}
}), go = C([]);
function _o() {
	return {
		messages: go,
		pushMessage: (e, t = !1) => {
			go.value.push({
				ts: Date.now(),
				text: e,
				error: t
			});
		},
		shiftMessage: () => {
			go.value.shift();
		}
	};
}
//#endregion
//#region src/components/Snack/SnackBar.vue?vue&type=script&setup=true&lang.ts
var vo = { class: "fixed top-0 right-0 flex flex-col-reverse p-4 overflow-hidden z-50 w-80" }, yo = /* @__PURE__ */ u({
	__name: "SnackBar",
	props: { active: Boolean },
	setup(t) {
		let { messages: n, shiftMessage: r } = _o(), a = () => {
			r();
		};
		return (t, r) => {
			let s = ho;
			return x(), o("div", vo, [(x(!0), o(e, null, w(k(n), (e) => (x(), i(s, {
				key: e.ts,
				active: !0,
				message: e,
				error: e.error,
				onExpired: a
			}, null, 8, ["message", "error"]))), 128))]);
		};
	}
}), bo = { class: "flex items-center gap-1.5" }, xo = { class: "text-sm font-medium text-gray-600 dark:text-gray-300" }, So = {
	key: 0,
	class: "text-2xl font-bold text-gray-400 dark:text-gray-500 mt-1"
}, Co = {
	key: 1,
	class: "text-2xl font-bold text-gray-900 dark:text-white mt-1 tabular-nums"
}, wo = {
	key: 0,
	class: "mt-4 flex items-center"
}, To = {
	key: 1,
	class: "text-sm text-gray-500 dark:text-gray-400 ml-1"
}, Eo = /* @__PURE__ */ u({
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
		let t = r(() => e.value === null), n = r(() => {
			switch (e.changeType) {
				case "positive": return "text-success-600 dark:text-success-400";
				case "negative": return "text-danger-600 dark:text-danger-400";
				case "neutral": return "text-warning-600 dark:text-warning-400";
				case "info": return "text-secondary-600 dark:text-secondary-400";
				default: return "text-gray-600 dark:text-gray-400";
			}
		});
		return (r, c) => {
			let l = Oa, u = Ve;
			return x(), i(u, null, {
				default: P(() => [s("div", null, [s("div", bo, [s("p", xo, O(e.title), 1), e.help ? (x(), i(l, {
					key: 0,
					tooltip: e.help
				}, null, 8, ["tooltip"])) : a("", !0)]), k(t) ? (x(), o("p", So, "Sin datos")) : (x(), o("p", Co, O(e.value), 1))]), e.change !== void 0 || e.description ? (x(), o("div", wo, [e.change === void 0 ? a("", !0) : (x(), o("span", {
					key: 0,
					class: g(["text-sm font-medium tabular-nums", k(n)])
				}, O(e.change), 3)), e.description ? (x(), o("span", To, O(e.description), 1)) : a("", !0)])) : a("", !0)]),
				_: 1
			});
		};
	}
}), Do = {
	key: 0,
	class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
}, Oo = { class: "flex items-center space-x-3" }, ko = ["disabled"], Ao = {
	key: 0,
	class: "text-sm text-gray-700 dark:text-gray-300"
}, jo = /* @__PURE__ */ u({
	__name: "SwitchInput",
	props: /*@__PURE__*/ p({
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
		let t = A(e, "modelValue"), n = () => {
			e.disabled || (t.value = !t.value);
		};
		return (r, i) => (x(), o("div", null, [e.label ? (x(), o("label", Do, O(e.label), 1)) : a("", !0), s("div", Oo, [s("button", {
			type: "button",
			onClick: n,
			disabled: e.disabled,
			class: g(["relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed", t.value ? "bg-primary-600" : "bg-gray-300 dark:bg-gray-600"])
		}, [s("span", { class: g(["pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", t.value ? "translate-x-5" : "translate-x-0"]) }, null, 2)], 10, ko), e.showLabel ? (x(), o("span", Ao, O(t.value ? e.trueLabel : e.falseLabel), 1)) : a("", !0)])]));
	}
}), Mo = { class: "space-y-4" }, No = { class: "h-16 flex items-center transition-transform duration-300" }, Po = { class: "flex space-x-2 bg-gray-200 dark:bg-gray-800 rounded-lg py-2 px-3 w-full relative" }, Fo = ["onClick"], Io = { class: "tab-content" }, Lo = /*#__PURE__*/ we(/* @__PURE__ */ u({
	__name: "Tabs",
	props: {
		tabs: {},
		modelValue: { default: 0 }
	},
	emits: ["update:modelValue", "change"],
	setup(t, { emit: i }) {
		let a = t, c = i, u = r({
			get: () => a.modelValue,
			set: (e) => c("update:modelValue", e)
		});
		function d(e) {
			u.value !== e && (u.value = e, c("change", a.tabs[e], e));
		}
		return (r, i) => (x(), o("div", Mo, [s("div", No, [s("div", Po, [s("div", {
			class: "absolute top-1 bottom-1 bg-white dark:bg-gray-700 rounded-lg transition-all duration-300 ease-in-out shadow-sm",
			style: _({
				left: `${1 + u.value * ((98 - 98 / t.tabs.length) / (t.tabs.length - 1))}%`,
				width: `${98 / t.tabs.length}%`
			})
		}, null, 4), (x(!0), o(e, null, w(t.tabs, (e, t) => (x(), o("button", {
			key: e.id,
			class: g(["relative flex-1 py-2 px-3 text-sm font-medium transition-colors duration-200 z-10", [u.value === t ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"]]),
			onClick: (e) => d(t)
		}, O(e.label), 11, Fo))), 128))])]), s("div", Io, [l(n, {
			name: "tab-content",
			mode: "out-in",
			appear: ""
		}, {
			default: P(() => [(x(), o("div", {
				key: u.value,
				class: "tab-panel"
			}, [T(r.$slots, `tab-${u.value}`, {
				activeTab: t.tabs[u.value],
				activeTabIndex: u.value
			}, () => [i[0] ||= s("div", { class: "text-gray-500 dark:text-gray-400 text-center py-8" }, " No content available for this tab ", -1)], !0)]))]),
			_: 3
		})])]));
	}
}), [["__scopeId", "data-v-220a3b65"]]), Ro = ["src", "alt"], zo = /* @__PURE__ */ u({
	__name: "UserAvatar",
	props: {
		imageUrl: { default: null },
		name: {},
		size: { default: "md" }
	},
	setup(e) {
		let t = r(() => {
			let t = e.name.trim().split(/\s+/).filter(Boolean);
			return t.length === 0 ? "?" : t.length >= 2 ? `${t[0].charAt(0)}${t[1].charAt(0)}`.toUpperCase() : t[0].charAt(0).toUpperCase();
		}), n = r(() => {
			switch (e.size) {
				case "sm": return "w-8 h-8";
				case "lg": return "w-12 h-12";
				case "xl": return "w-16 h-16";
				default: return "w-10 h-10";
			}
		}), i = r(() => {
			switch (e.size) {
				case "sm": return "text-xs";
				case "lg": return "text-base";
				case "xl": return "text-lg";
				default: return "text-sm";
			}
		});
		return (r, a) => (x(), o("div", { class: g([k(n), "rounded-full shrink-0 overflow-hidden"]) }, [e.imageUrl ? (x(), o("img", {
			key: 0,
			src: e.imageUrl,
			alt: e.name,
			class: "w-full h-full object-cover"
		}, null, 8, Ro)) : (x(), o("div", {
			key: 1,
			class: g(["w-full h-full flex items-center justify-center bg-linear-to-br from-primary-500 to-secondary-500 text-white font-semibold", k(i)])
		}, O(k(t)), 3))], 2));
	}
}), Bo = { class: "flex -space-x-2" }, Vo = /* @__PURE__ */ u({
	__name: "UserAvatars",
	props: { users: {} },
	setup(t) {
		return (n, r) => (x(), o("div", Bo, [(x(!0), o(e, null, w(t.users, (e, n) => (x(), o("div", {
			key: n,
			class: "relative"
		}, [s("div", {
			class: "w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white text-xs font-medium border-2 border-white",
			style: _({ zIndex: t.users.length - n })
		}, O(e.initials), 5)]))), 128))]));
	}
}), Ho = { class: "flex items-center gap-2 sm:gap-3" }, Uo = {
	key: 0,
	class: "absolute -top-1 -right-1 bg-danger-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium tabular-nums"
}, Wo = {
	key: 0,
	class: "absolute right-0 top-14 w-80 bg-white dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-lg shadow-lg z-50"
}, Go = { class: "max-h-96 overflow-y-auto" }, Ko = {
	key: 0,
	class: "py-2 px-4 border-t border-gray-200 dark:border-gray-700 text-center"
}, qo = { class: "w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center sm:mr-3 overflow-hidden" }, Jo = { class: "text-gray-900 dark:text-white text-lg" }, Yo = {
	class: "hidden sm:flex items-center",
	style: { gap: "0" }
}, Xo = { class: "mr-3" }, Zo = { class: "text-gray-900 dark:text-white font-medium" }, Qo = { class: "flex items-center" }, $o = { class: "text-sm text-gray-600 dark:text-gray-400" }, es = {
	key: 0,
	class: "absolute right-0 top-14 w-56 sm:w-full bg-white dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-lg shadow-lg z-50"
}, ts = { class: "py-2" }, ns = /* @__PURE__ */ u({
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
	setup(t, { emit: n }) {
		let r = n;
		$a();
		let c = C(!1), u = C(null), d = C(!1), f = C(null);
		function p() {
			c.value = !c.value, c.value && (d.value = !1);
		}
		function m() {
			c.value = !1;
		}
		function h(e) {
			m(), e.onClick?.();
		}
		function _() {
			if (r("bell-click"), Xa.value) return;
			let e = d.value;
			b(), !e && d.value && r("panel-open");
		}
		function b() {
			d.value = !d.value, d.value && (c.value = !1);
		}
		function S() {
			d.value = !1;
		}
		he(u, m), he(f, S);
		function E(e) {
			e.key === "Escape" && (c.value && m(), d.value && S());
		}
		return y(() => {
			window.addEventListener("keydown", E);
		}), v(() => {
			window.removeEventListener("keydown", E);
		}), (n, m) => {
			let v = it, y = Di;
			return x(), o("div", Ho, [t.showNotifications ? (x(), o("div", {
				key: 0,
				class: "relative",
				ref_key: "notificationDropdownRef",
				ref: f
			}, [s("button", {
				onClick: I(_, ["stop"]),
				class: "w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 relative cursor-pointer",
				"aria-label": "Show notifications"
			}, [l(k(B), { class: "w-5 h-5 text-gray-900 dark:text-white" }), t.unreadNotificationsCount > 0 ? (x(), o("div", Uo, O(t.unreadNotificationsCount > 9 ? "9+" : t.unreadNotificationsCount), 1)) : a("", !0)]), l(v, null, {
				default: P(() => [d.value && !k(Xa) ? (x(), o("div", Wo, [
					m[1] ||= s("div", { class: "py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white font-semibold" }, " Notificaciones ", -1),
					s("div", Go, [T(n.$slots, "notifications")]),
					t.unreadNotificationsCount > 0 ? (x(), o("div", Ko, [s("button", {
						onClick: m[0] ||= (e) => r("mark-all-read"),
						class: "text-xs font-medium text-primary-600 dark:text-primary-400 hover:underline focus:outline-none cursor-pointer"
					}, " Marcar todo como leído ")])) : a("", !0)
				])) : a("", !0)]),
				_: 3
			})], 512)) : a("", !0), s("div", {
				class: "items-center cursor-pointer relative",
				ref_key: "profileDropdownRef",
				ref: u
			}, [s("div", {
				class: "flex items-center",
				onClick: p
			}, [
				s("div", qo, [T(n.$slots, "avatar", {}, () => [s("span", Jo, O(t.userInitials), 1)])]),
				s("div", Yo, [s("div", Xo, [s("div", Zo, O(t.userName), 1), s("div", Qo, [s("span", $o, O(t.userRole), 1)])]), l(k(V), { class: g(["w-4 h-4 text-gray-600 dark:text-gray-400", c.value ? "rotate-180 transition-transform duration-200" : "transition-transform duration-200"]) }, null, 8, ["class"])]),
				l(k(V), { class: g(["sm:hidden w-4 h-4 text-gray-600 dark:text-gray-400 ml-2", c.value ? "rotate-180 transition-transform duration-200" : "transition-transform duration-200"]) }, null, 8, ["class"])
			]), l(v, null, {
				default: P(() => [c.value ? (x(), o("div", es, [s("ul", ts, [(x(!0), o(e, null, w(t.menuItems, (e) => (x(), i(y, {
					key: e.label,
					label: e.label,
					icon: e.icon,
					class: g(e.class),
					to: e.to,
					onClick: (t) => h(e)
				}, null, 8, [
					"label",
					"icon",
					"class",
					"to",
					"onClick"
				]))), 128))])])) : a("", !0)]),
				_: 1
			})], 512)]);
		};
	}
}), rs = { class: "flex items-start justify-between gap-4 flex-col md:flex-row" }, is = { class: "space-y-2" }, as = { class: "text-3xl font-bold text-gray-900 dark:text-white" }, os = { class: "flex space-x-2 justify-start flex-col gap-3 md:gap-0 md:flex-row items-center" }, ss = { class: "text-gray-600 dark:text-gray-400 text-sm" }, cs = { class: "flex items-center space-x-3" }, ls = /* @__PURE__ */ u({
	__name: "ViewHeader",
	props: {
		subtitle: {},
		title: {},
		badgeText: {}
	},
	setup(e) {
		return (t, n) => {
			let r = Fe;
			return x(), o("div", null, [s("div", rs, [s("div", is, [s("h1", as, O(e.title), 1), s("div", os, [s("span", ss, O(e.subtitle), 1), e.badgeText ? (x(), i(r, {
				key: 0,
				variant: "neutral",
				text: "sm"
			}, {
				default: P(() => [c(O(e.badgeText), 1)]),
				_: 1
			})) : a("", !0)])]), s("div", cs, [T(t.$slots, "right")])])]);
		};
	}
}), us = { class: "flex items-start gap-3 p-4 rounded-lg border border-warning-200 dark:border-warning-800 bg-warning-50 dark:bg-warning-500/15" }, ds = { class: "flex-1 text-sm text-warning-700 dark:text-warning-300" }, fs = /* @__PURE__ */ u({
	__name: "WarningAlert",
	setup(e) {
		return (e, t) => (x(), o("div", us, [l(k(R), { class: "w-5 h-5 text-warning-600 dark:text-warning-400 flex-shrink-0 mt-0.5" }), s("div", ds, [T(e.$slots, "default")])]));
	}
});
//#endregion
export { Te as Alert, Fe as Badge, Oe as BaseButton, Ae as BaseButtonIcon, Pe as Breadcrumb, Ve as Card, Je as CardPaginations, Ye as CollapseTransition, wi as ConfirmationModal, pa as DataTable, Ze as Divider, ki as Dropdown, it as DropdownAnimation, Di as DropdownItem, ha as DropdownMenu, Si as FormInput, Sa as FormSelect, Da as FormTextarea, Oa as HelpTooltip, ka as IconButton, ja as ImageLightbox, Pa as InfoItem, at as LoadingSVG, rt as Modal, Ba as Navbar, Ei as ResultCount, St as SearchableSelect, fo as Sidebar, Va as SidebarItem, Ya as SidebarList, po as SidebarNav, yo as SnackBar, ho as SnackBarItem, Eo as StatCard, jo as SwitchInput, Ri as TableHeader, Fi as TablePagination, Vi as TableSkeleton, Lo as Tabs, zo as UserAvatar, Vo as UserAvatars, ns as UserProfileDropdown, ls as ViewHeader, fs as WarningAlert, An as initTheme, Qa as isDesktop, Xa as isMobile, Za as isTablet, Wa as useActiveIndicator, _o as useMessages, $a as useMobile, ot as useRequestKey, Ua as useSidebar, jn as useTheme };
