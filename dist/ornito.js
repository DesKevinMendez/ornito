import * as e from "vue";
import { Fragment as t, Teleport as n, Transition as r, computed as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createSlots as l, createTextVNode as u, createVNode as d, defineComponent as f, getCurrentInstance as p, guardReactiveProps as m, h, inject as g, isRef as _, mergeDefaults as v, mergeModels as y, mergeProps as b, nextTick as x, normalizeClass as S, normalizeProps as C, normalizeStyle as w, onBeforeUnmount as T, onBeforeUpdate as E, onMounted as D, onUnmounted as O, openBlock as k, provide as A, reactive as j, readonly as M, ref as N, renderList as P, renderSlot as F, resolveComponent as I, resolveDynamicComponent as L, shallowRef as R, toDisplayString as z, toRef as B, toValue as V, unref as H, useModel as U, useSlots as ee, useTemplateRef as W, vModelText as G, vShow as K, warn as q, watch as J, watchEffect as te, withCtx as Y, withDirectives as ne, withKeys as X, withModifiers as Z } from "vue";
import { RouterLink as re, useRoute as ie } from "vue-router";
import { onClickOutside as ae, unrefElement as oe, useStorage as se, useSwipe as ce, watchDebounced as le } from "@vueuse/core";
//#region \0rolldown/runtime.js
var ue = Object.create, de = Object.defineProperty, fe = Object.getOwnPropertyDescriptor, pe = Object.getOwnPropertyNames, me = Object.getPrototypeOf, he = Object.prototype.hasOwnProperty, ge = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), _e = (e, t) => {
	let n = {};
	for (var r in e) de(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || de(n, Symbol.toStringTag, { value: "Module" }), n;
}, ve = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = pe(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !he.call(e, s) && s !== n && de(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = fe(t, s)) || r.enumerable
	});
	return e;
}, ye = (e, t, n) => (ve(e, t, "default"), n && ve(n, t, "default")), be = (e, t, n) => (n = e == null ? {} : ue(me(e)), ve(t || !e || !e.__esModule || !he.call(e, "default") ? de(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), xe = /* @__PURE__ */ ge(((e, t) => {
	function n(e) {
		this._maxSize = e, this.clear();
	}
	n.prototype.clear = function() {
		this._size = 0, this._values = Object.create(null);
	}, n.prototype.get = function(e) {
		return this._values[e];
	}, n.prototype.set = function(e, t) {
		return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
	};
	var r = /[^.^\]^[]+|(?=\[\]|\.\.)/g, i = /^\d+$/, a = /^\d/, o = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, s = /^\s*(['"]?)(.*?)(\1)\s*$/, c = 512, l = new n(c), u = new n(c), d = new n(c);
	t.exports = {
		Cache: n,
		split: p,
		normalizePath: f,
		setter: function(e) {
			var t = f(e);
			return u.get(e) || u.set(e, function(e, n) {
				for (var r = 0, i = t.length, a = e; r < i - 1;) {
					var o = t[r];
					if (o === "__proto__" || o === "constructor" || o === "prototype") return e;
					a = a[t[r++]];
				}
				a[t[r]] = n;
			});
		},
		getter: function(e, t) {
			var n = f(e);
			return d.get(e) || d.set(e, function(e) {
				for (var r = 0, i = n.length; r < i;) if (e != null || !t) e = e[n[r++]];
				else return;
				return e;
			});
		},
		join: function(e) {
			return e.reduce(function(e, t) {
				return e + (h(t) || i.test(t) ? "[" + t + "]" : (e ? "." : "") + t);
			}, "");
		},
		forEach: function(e, t, n) {
			m(Array.isArray(e) ? e : p(e), t, n);
		}
	};
	function f(e) {
		return l.get(e) || l.set(e, p(e).map(function(e) {
			return e.replace(s, "$2");
		}));
	}
	function p(e) {
		return e.match(r) || [""];
	}
	function m(e, t, n) {
		var r = e.length, i, a, o, s;
		for (a = 0; a < r; a++) i = e[a], i && (v(i) && (i = "\"" + i + "\""), s = h(i), o = !s && /^\d+$/.test(i), t.call(n, i, s, o, a, e));
	}
	function h(e) {
		return typeof e == "string" && e && ["'", "\""].indexOf(e.charAt(0)) !== -1;
	}
	function g(e) {
		return e.match(a) && !e.match(i);
	}
	function _(e) {
		return o.test(e);
	}
	function v(e) {
		return !h(e) && (g(e) || _(e));
	}
})), Se = /* @__PURE__ */ ge(((e, t) => {
	var n = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, r = (e) => e.match(n) || [], i = (e) => e[0].toUpperCase() + e.slice(1), a = (e, t) => r(e).join(t).toLowerCase(), o = (e) => r(e).reduce((e, t) => `${e}${e ? t[0].toUpperCase() + t.slice(1).toLowerCase() : t.toLowerCase()}`, "");
	t.exports = {
		words: r,
		upperFirst: i,
		camelCase: o,
		pascalCase: (e) => i(o(e)),
		snakeCase: (e) => a(e, "_"),
		kebabCase: (e) => a(e, "-"),
		sentenceCase: (e) => i(a(e, " ")),
		titleCase: (e) => r(e).map(i).join(" ")
	};
})), Ce = /* @__PURE__ */ ge(((e, t) => {
	t.exports = function(e) {
		return n(r(e), e);
	}, t.exports.array = n;
	function n(e, t) {
		var n = e.length, r = Array(n), o = {}, s = n, c = i(t), l = a(e);
		for (t.forEach(function(e) {
			if (!l.has(e[0]) || !l.has(e[1])) throw Error("Unknown node. There is an unknown node in the supplied edges.");
		}); s--;) o[s] || u(e[s], s, /* @__PURE__ */ new Set());
		return r;
		function u(e, t, i) {
			if (i.has(e)) {
				var a;
				try {
					a = ", node was:" + JSON.stringify(e);
				} catch {
					a = "";
				}
				throw Error("Cyclic dependency" + a);
			}
			if (!l.has(e)) throw Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(e));
			if (!o[t]) {
				o[t] = !0;
				var s = c.get(e) || /* @__PURE__ */ new Set();
				if (s = Array.from(s), t = s.length) {
					i.add(e);
					do {
						var d = s[--t];
						u(d, l.get(d), i);
					} while (t);
					i.delete(e);
				}
				r[--n] = e;
			}
		}
	}
	function r(e) {
		for (var t = /* @__PURE__ */ new Set(), n = 0, r = e.length; n < r; n++) {
			var i = e[n];
			t.add(i[0]), t.add(i[1]);
		}
		return Array.from(t);
	}
	function i(e) {
		for (var t = /* @__PURE__ */ new Map(), n = 0, r = e.length; n < r; n++) {
			var i = e[n];
			t.has(i[0]) || t.set(i[0], /* @__PURE__ */ new Set()), t.has(i[1]) || t.set(i[1], /* @__PURE__ */ new Set()), t.get(i[0]).add(i[1]);
		}
		return t;
	}
	function a(e) {
		for (var t = /* @__PURE__ */ new Map(), n = 0, r = e.length; n < r; n++) t.set(e[n], n);
		return t;
	}
})), we = /* @__PURE__ */ _e({
	ArraySchema: () => Zt,
	BooleanSchema: () => yt,
	DateSchema: () => Rt,
	LazySchema: () => nn,
	MixedSchema: () => _t,
	NumberSchema: () => Pt,
	ObjectSchema: () => Yt,
	Schema: () => mt,
	StringSchema: () => jt,
	TupleSchema: () => $t,
	ValidationError: () => He,
	addMethod: () => an,
	array: () => Xt,
	bool: () => vt,
	boolean: () => vt,
	date: () => Lt,
	defaultLocale: () => Ze,
	getIn: () => st,
	isSchema: () => Qe,
	lazy: () => en,
	mixed: () => gt,
	number: () => Nt,
	object: () => Jt,
	printValue: () => Fe,
	reach: () => ct,
	ref: () => tt,
	setLocale: () => rn,
	string: () => At,
	tuple: () => Qt
}), Te = xe(), Ee = Se(), De = /* @__PURE__ */ be(Ce()), Oe = Object.prototype.toString, ke = Error.prototype.toString, Ae = RegExp.prototype.toString, je = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Me = /^Symbol\((.*)\)(.*)$/;
function Ne(e) {
	return e == +e ? e === 0 && 1 / e < 0 ? "-0" : "" + e : "NaN";
}
function Pe(e, t = !1) {
	if (e == null || e === !0 || e === !1) return "" + e;
	let n = typeof e;
	if (n === "number") return Ne(e);
	if (n === "string") return t ? `"${e}"` : e;
	if (n === "function") return "[Function " + (e.name || "anonymous") + "]";
	if (n === "symbol") return je.call(e).replace(Me, "Symbol($1)");
	let r = Oe.call(e).slice(8, -1);
	return r === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : r === "Error" || e instanceof Error ? "[" + ke.call(e) + "]" : r === "RegExp" ? Ae.call(e) : null;
}
function Fe(e, t) {
	let n = Pe(e, t);
	return n === null ? JSON.stringify(e, function(e, n) {
		let r = Pe(this[e], t);
		return r === null ? n : r;
	}, 2) : n;
}
function Ie(e) {
	return e == null ? [] : [].concat(e);
}
var Le, Re, ze, Be = /\$\{\s*(\w+)\s*\}/g;
Le = Symbol.toStringTag;
var Ve = class {
	constructor(e, t, n, r) {
		this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[Le] = "Error", this.name = "ValidationError", this.value = t, this.path = n, this.type = r, this.errors = [], this.inner = [], Ie(e).forEach((e) => {
			if (He.isError(e)) {
				this.errors.push(...e.errors);
				let t = e.inner.length ? e.inner : [e];
				this.inner.push(...t);
			} else this.errors.push(e);
		}), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
	}
};
Re = Symbol.hasInstance, ze = Symbol.toStringTag;
var He = class e extends Error {
	static formatError(e, t) {
		let n = t.label || t.path || "this";
		return t = Object.assign({}, t, {
			path: n,
			originalPath: t.path
		}), typeof e == "string" ? e.replace(Be, (e, n) => Fe(t[n])) : typeof e == "function" ? e(t) : e;
	}
	static isError(e) {
		return e && e.name === "ValidationError";
	}
	constructor(t, n, r, i, a) {
		let o = new Ve(t, n, r, i);
		if (a) return o;
		super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[ze] = "Error", this.name = o.name, this.message = o.message, this.type = o.type, this.value = o.value, this.path = o.path, this.errors = o.errors, this.inner = o.inner, Error.captureStackTrace && Error.captureStackTrace(this, e);
	}
	static [Re](e) {
		return Ve[Symbol.hasInstance](e) || super[Symbol.hasInstance](e);
	}
}, Ue = {
	default: "${path} is invalid",
	required: "${path} is a required field",
	defined: "${path} must be defined",
	notNull: "${path} cannot be null",
	oneOf: "${path} must be one of the following values: ${values}",
	notOneOf: "${path} must not be one of the following values: ${values}",
	notType: ({ path: e, type: t, value: n, originalValue: r }) => {
		let i = r != null && r !== n ? ` (cast from the value \`${Fe(r, !0)}\`).` : ".";
		return t === "mixed" ? `${e} must match the configured type. The validated value was: \`${Fe(n, !0)}\`` + i : `${e} must be a \`${t}\` type, but the final value was: \`${Fe(n, !0)}\`` + i;
	}
}, We = {
	length: "${path} must be exactly ${length} characters",
	min: "${path} must be at least ${min} characters",
	max: "${path} must be at most ${max} characters",
	matches: "${path} must match the following: \"${regex}\"",
	email: "${path} must be a valid email",
	url: "${path} must be a valid URL",
	uuid: "${path} must be a valid UUID",
	datetime: "${path} must be a valid ISO date-time",
	datetime_precision: "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
	datetime_offset: "${path} must be a valid ISO date-time with UTC \"Z\" timezone",
	trim: "${path} must be a trimmed string",
	lowercase: "${path} must be a lowercase string",
	uppercase: "${path} must be a upper case string"
}, Ge = {
	min: "${path} must be greater than or equal to ${min}",
	max: "${path} must be less than or equal to ${max}",
	lessThan: "${path} must be less than ${less}",
	moreThan: "${path} must be greater than ${more}",
	positive: "${path} must be a positive number",
	negative: "${path} must be a negative number",
	integer: "${path} must be an integer"
}, Ke = {
	min: "${path} field must be later than ${min}",
	max: "${path} field must be at earlier than ${max}"
}, qe = { isValue: "${path} field must be ${value}" }, Je = {
	noUnknown: "${path} field has unspecified keys: ${unknown}",
	exact: "${path} object contains unknown properties: ${properties}"
}, Ye = {
	min: "${path} field must have at least ${min} items",
	max: "${path} field must have less than or equal to ${max} items",
	length: "${path} must have ${length} items"
}, Xe = { notType: (e) => {
	let { path: t, value: n, spec: r } = e, i = r.types.length;
	if (Array.isArray(n)) {
		if (n.length < i) return `${t} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${Fe(n, !0)}\``;
		if (n.length > i) return `${t} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${Fe(n, !0)}\``;
	}
	return He.formatError(Ue.notType, e);
} }, Ze = Object.assign(Object.create(null), {
	mixed: Ue,
	string: We,
	number: Ge,
	date: Ke,
	object: Je,
	array: Ye,
	boolean: qe,
	tuple: Xe
}), Qe = (e) => e && e.__isYupSchema__, $e = class e {
	static fromOptions(t, n) {
		if (!n.then && !n.otherwise) throw TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
		let { is: r, then: i, otherwise: a } = n, o = typeof r == "function" ? r : (...e) => e.every((e) => e === r);
		return new e(t, (e, t) => (o(...e) ? i : a)?.(t) ?? t);
	}
	constructor(e, t) {
		this.fn = void 0, this.refs = e, this.refs = e, this.fn = t;
	}
	resolve(e, t) {
		let n = this.refs.map((e) => e.getValue(t?.value, t?.parent, t?.context)), r = this.fn(n, e, t);
		if (r === void 0 || r === e) return e;
		if (!Qe(r)) throw TypeError("conditions must return a schema object");
		return r.resolve(t);
	}
}, et = {
	context: "$",
	value: "."
};
function tt(e, t) {
	return new nt(e, t);
}
var nt = class {
	constructor(e, t = {}) {
		if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof e != "string") throw TypeError("ref must be a string, got: " + e);
		if (this.key = e.trim(), e === "") throw TypeError("ref must be a non-empty string");
		this.isContext = this.key[0] === et.context, this.isValue = this.key[0] === et.value, this.isSibling = !this.isContext && !this.isValue;
		let n = this.isContext ? et.context : this.isValue ? et.value : "";
		this.path = this.key.slice(n.length), this.getter = this.path && (0, Te.getter)(this.path, !0), this.map = t.map;
	}
	getValue(e, t, n) {
		let r = this.isContext ? n : this.isValue ? e : t;
		return this.getter && (r = this.getter(r || {})), this.map && (r = this.map(r)), r;
	}
	cast(e, t) {
		return this.getValue(e, t?.parent, t?.context);
	}
	resolve() {
		return this;
	}
	describe() {
		return {
			type: "ref",
			key: this.key
		};
	}
	toString() {
		return `Ref(${this.key})`;
	}
	static isRef(e) {
		return e && e.__isYupRef;
	}
};
nt.prototype.__isYupRef = !0;
var rt = (e) => e == null;
function it(e) {
	function t({ value: t, path: n = "", options: r, originalValue: i, schema: a }, o, s) {
		let { name: c, test: l, params: u, message: d, skipAbsent: f } = e, { parent: p, context: m, abortEarly: h = a.spec.abortEarly, disableStackTrace: g = a.spec.disableStackTrace } = r, _ = {
			value: t,
			parent: p,
			context: m
		};
		function v(e = {}) {
			let r = at(Object.assign({
				value: t,
				originalValue: i,
				label: a.spec.label,
				path: e.path || n,
				spec: a.spec,
				disableStackTrace: e.disableStackTrace || g
			}, u, e.params), _), o = new He(He.formatError(e.message || d, r), t, r.path, e.type || c, r.disableStackTrace);
			return o.params = r, o;
		}
		let y = h ? o : s, b = {
			path: n,
			parent: p,
			type: c,
			from: r.from,
			createError: v,
			resolve(e) {
				return ot(e, _);
			},
			options: r,
			originalValue: i,
			schema: a
		}, x = (e) => {
			He.isError(e) ? y(e) : e ? s(null) : y(v());
		}, S = (e) => {
			He.isError(e) ? y(e) : o(e);
		};
		if (f && rt(t)) return x(!0);
		let C;
		try {
			if (C = l.call(b, t, b), typeof C?.then == "function") {
				if (r.sync) throw Error(`Validation test of type: "${b.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
				return Promise.resolve(C).then(x, S);
			}
		} catch (e) {
			S(e);
			return;
		}
		x(C);
	}
	return t.OPTIONS = e, t;
}
function at(e, t) {
	if (!e) return e;
	for (let n of Object.keys(e)) e[n] = ot(e[n], t);
	return e;
}
function ot(e, t) {
	return nt.isRef(e) ? e.getValue(t.value, t.parent, t.context) : e;
}
function st(e, t, n, r = n) {
	let i, a, o;
	return t ? ((0, Te.forEach)(t, (s, c, l) => {
		let u = c ? s.slice(1, s.length - 1) : s;
		e = e.resolve({
			context: r,
			parent: i,
			value: n
		});
		let d = e.type === "tuple", f = l ? parseInt(u, 10) : 0;
		if (e.innerType || d) {
			if (d && !l) throw Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
			if (n && f >= n.length) throw Error(`Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `);
			i = n, n &&= n[f], e = d ? e.spec.types[f] : e.innerType;
		}
		if (!l) {
			if (!e.fields || !e.fields[u]) throw Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`);
			i = n, n &&= n[u], e = e.fields[u];
		}
		a = u, o = c ? "[" + s + "]" : "." + s;
	}), {
		schema: e,
		parent: i,
		parentPath: a
	}) : {
		parent: i,
		parentPath: t,
		schema: e
	};
}
function ct(e, t, n, r) {
	return st(e, t, n, r).schema;
}
var lt = class e extends Set {
	describe() {
		let e = [];
		for (let t of this.values()) e.push(nt.isRef(t) ? t.describe() : t);
		return e;
	}
	resolveAll(e) {
		let t = [];
		for (let n of this.values()) t.push(e(n));
		return t;
	}
	clone() {
		return new e(this.values());
	}
	merge(e, t) {
		let n = this.clone();
		return e.forEach((e) => n.add(e)), t.forEach((e) => n.delete(e)), n;
	}
};
function ut(e, t = /* @__PURE__ */ new Map()) {
	if (Qe(e) || !e || typeof e != "object") return e;
	if (t.has(e)) return t.get(e);
	let n;
	if (e instanceof Date) n = new Date(e.getTime()), t.set(e, n);
	else if (e instanceof RegExp) n = new RegExp(e), t.set(e, n);
	else if (Array.isArray(e)) {
		n = Array(e.length), t.set(e, n);
		for (let r = 0; r < e.length; r++) n[r] = ut(e[r], t);
	} else if (e instanceof Map) {
		n = /* @__PURE__ */ new Map(), t.set(e, n);
		for (let [r, i] of e.entries()) n.set(r, ut(i, t));
	} else if (e instanceof Set) {
		n = /* @__PURE__ */ new Set(), t.set(e, n);
		for (let r of e) n.add(ut(r, t));
	} else if (e instanceof Object) {
		n = {}, t.set(e, n);
		for (let [r, i] of Object.entries(e)) n[r] = ut(i, t);
	} else throw Error(`Unable to clone ${e}`);
	return n;
}
function dt(e) {
	if (!(e != null && e.length)) return;
	let t = [], n = "", r = !1, i = !1;
	for (let a = 0; a < e.length; a++) {
		let o = e[a];
		if (o === "[" && !i) {
			n &&= (t.push(...n.split(".").filter(Boolean)), ""), r = !0;
			continue;
		}
		if (o === "]" && !i) {
			n &&= (/^\d+$/.test(n) ? t.push(n) : t.push(n.replace(/^"|"$/g, "")), ""), r = !1;
			continue;
		}
		if (o === "\"") {
			i = !i;
			continue;
		}
		if (o === "." && !r && !i) {
			n &&= (t.push(n), "");
			continue;
		}
		n += o;
	}
	return n && t.push(...n.split(".").filter(Boolean)), t;
}
function ft(e, t) {
	let n = t ? `${t}.${e.path}` : e.path;
	return e.errors.map((e) => ({
		message: e,
		path: dt(n)
	}));
}
function pt(e, t) {
	var n;
	if (!((n = e.inner) != null && n.length) && e.errors.length) return ft(e, t);
	let r = t ? `${t}.${e.path}` : e.path;
	return e.inner.flatMap((e) => pt(e, r));
}
var mt = class {
	constructor(e) {
		this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new lt(), this._blacklist = new lt(), this.exclusiveTests = Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
			this.typeError(Ue.notType);
		}), this.type = e.type, this._typeCheck = e.check, this.spec = Object.assign({
			strip: !1,
			strict: !1,
			abortEarly: !0,
			recursive: !0,
			disableStackTrace: !1,
			nullable: !1,
			optional: !0,
			coerce: !0
		}, e?.spec), this.withMutation((e) => {
			e.nonNullable();
		});
	}
	get _type() {
		return this.type;
	}
	clone(e) {
		if (this._mutate) return e && Object.assign(this.spec, e), this;
		let t = Object.create(Object.getPrototypeOf(this));
		return t.type = this.type, t._typeCheck = this._typeCheck, t._whitelist = this._whitelist.clone(), t._blacklist = this._blacklist.clone(), t.internalTests = Object.assign({}, this.internalTests), t.exclusiveTests = Object.assign({}, this.exclusiveTests), t.deps = [...this.deps], t.conditions = [...this.conditions], t.tests = [...this.tests], t.transforms = [...this.transforms], t.spec = ut(Object.assign({}, this.spec, e)), t;
	}
	label(e) {
		let t = this.clone();
		return t.spec.label = e, t;
	}
	meta(...e) {
		if (e.length === 0) return this.spec.meta;
		let t = this.clone();
		return t.spec.meta = Object.assign(t.spec.meta || {}, e[0]), t;
	}
	withMutation(e) {
		let t = this._mutate;
		this._mutate = !0;
		let n = e(this);
		return this._mutate = t, n;
	}
	concat(e) {
		if (!e || e === this) return this;
		if (e.type !== this.type && this.type !== "mixed") throw TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);
		let t = this, n = e.clone();
		return n.spec = Object.assign({}, t.spec, n.spec), n.internalTests = Object.assign({}, t.internalTests, n.internalTests), n._whitelist = t._whitelist.merge(e._whitelist, e._blacklist), n._blacklist = t._blacklist.merge(e._blacklist, e._whitelist), n.tests = t.tests, n.exclusiveTests = t.exclusiveTests, n.withMutation((t) => {
			e.tests.forEach((e) => {
				t.test(e.OPTIONS);
			});
		}), n.transforms = [...t.transforms, ...n.transforms], n;
	}
	isType(e) {
		return e == null ? !!(this.spec.nullable && e === null || this.spec.optional && e === void 0) : this._typeCheck(e);
	}
	resolve(e) {
		let t = this;
		if (t.conditions.length) {
			let n = t.conditions;
			t = t.clone(), t.conditions = [], t = n.reduce((t, n) => n.resolve(t, e), t), t = t.resolve(e);
		}
		return t;
	}
	resolveOptions(e) {
		return Object.assign({}, e, {
			from: e.from || [],
			strict: e.strict ?? this.spec.strict,
			abortEarly: e.abortEarly ?? this.spec.abortEarly,
			recursive: e.recursive ?? this.spec.recursive,
			disableStackTrace: e.disableStackTrace ?? this.spec.disableStackTrace
		});
	}
	cast(e, t = {}) {
		let n = this.resolve(Object.assign({}, t, { value: e })), r = t.assert === "ignore-optionality", i = n._cast(e, t);
		if (t.assert !== !1 && !n.isType(i)) {
			if (r && rt(i)) return i;
			let a = Fe(e), o = Fe(i);
			throw TypeError(`The value of ${t.path || "field"} could not be cast to a value that satisfies the schema type: "${n.type}". \n\nattempted value: ${a} \n` + (o === a ? "" : `result of cast: ${o}`));
		}
		return i;
	}
	_cast(e, t) {
		let n = e === void 0 ? e : this.transforms.reduce((n, r) => r.call(this, n, e, this, t), e);
		return n === void 0 && (n = this.getDefault(t)), n;
	}
	_validate(e, t = {}, n, r) {
		let { path: i, originalValue: a = e, strict: o = this.spec.strict } = t, s = e;
		o || (s = this._cast(s, Object.assign({ assert: !1 }, t)));
		let c = [];
		for (let e of Object.values(this.internalTests)) e && c.push(e);
		this.runTests({
			path: i,
			value: s,
			originalValue: a,
			options: t,
			tests: c
		}, n, (e) => {
			if (e.length) return r(e, s);
			this.runTests({
				path: i,
				value: s,
				originalValue: a,
				options: t,
				tests: this.tests
			}, n, r);
		});
	}
	runTests(e, t, n) {
		let r = !1, { tests: i, value: a, originalValue: o, path: s, options: c } = e, l = (e) => {
			r || (r = !0, t(e, a));
		}, u = (e) => {
			r || (r = !0, n(e, a));
		}, d = i.length, f = [];
		if (!d) return u([]);
		let p = {
			value: a,
			originalValue: o,
			path: s,
			options: c,
			schema: this
		};
		for (let e = 0; e < i.length; e++) {
			let t = i[e];
			t(p, l, function(e) {
				e && (Array.isArray(e) ? f.push(...e) : f.push(e)), --d <= 0 && u(f);
			});
		}
	}
	asNestedTest({ key: e, index: t, parent: n, parentPath: r, originalParent: i, options: a }) {
		let o = e ?? t;
		if (o == null) throw TypeError("Must include `key` or `index` for nested validations");
		let s = typeof o == "number", c = n[o], l = Object.assign({}, a, {
			strict: !0,
			parent: n,
			value: c,
			originalValue: i[o],
			key: void 0,
			[s ? "index" : "key"]: o,
			path: s || o.includes(".") ? `${r || ""}[${s ? o : `"${o}"`}]` : (r ? `${r}.` : "") + e
		});
		return (e, t, n) => this.resolve(l)._validate(c, l, t, n);
	}
	validate(e, t) {
		let n = this.resolve(Object.assign({}, t, { value: e })), r = t?.disableStackTrace ?? n.spec.disableStackTrace;
		return new Promise((i, a) => n._validate(e, t, (e, t) => {
			He.isError(e) && (e.value = t), a(e);
		}, (e, t) => {
			e.length ? a(new He(e, t, void 0, void 0, r)) : i(t);
		}));
	}
	validateSync(e, t) {
		let n = this.resolve(Object.assign({}, t, { value: e })), r, i = t?.disableStackTrace ?? n.spec.disableStackTrace;
		return n._validate(e, Object.assign({}, t, { sync: !0 }), (e, t) => {
			throw He.isError(e) && (e.value = t), e;
		}, (t, n) => {
			if (t.length) throw new He(t, e, void 0, void 0, i);
			r = n;
		}), r;
	}
	isValid(e, t) {
		return this.validate(e, t).then(() => !0, (e) => {
			if (He.isError(e)) return !1;
			throw e;
		});
	}
	isValidSync(e, t) {
		try {
			return this.validateSync(e, t), !0;
		} catch (e) {
			if (He.isError(e)) return !1;
			throw e;
		}
	}
	_getDefault(e) {
		let t = this.spec.default;
		return t == null ? t : typeof t == "function" ? t.call(this, e) : ut(t);
	}
	getDefault(e) {
		return this.resolve(e || {})._getDefault(e);
	}
	default(e) {
		return arguments.length === 0 ? this._getDefault() : this.clone({ default: e });
	}
	strict(e = !0) {
		return this.clone({ strict: e });
	}
	nullability(e, t) {
		let n = this.clone({ nullable: e });
		return n.internalTests.nullable = it({
			message: t,
			name: "nullable",
			test(e) {
				return e !== null || this.schema.spec.nullable;
			}
		}), n;
	}
	optionality(e, t) {
		let n = this.clone({ optional: e });
		return n.internalTests.optionality = it({
			message: t,
			name: "optionality",
			test(e) {
				return e !== void 0 || this.schema.spec.optional;
			}
		}), n;
	}
	optional() {
		return this.optionality(!0);
	}
	defined(e = Ue.defined) {
		return this.optionality(!1, e);
	}
	nullable() {
		return this.nullability(!0);
	}
	nonNullable(e = Ue.notNull) {
		return this.nullability(!1, e);
	}
	required(e = Ue.required) {
		return this.clone().withMutation((t) => t.nonNullable(e).defined(e));
	}
	notRequired() {
		return this.clone().withMutation((e) => e.nullable().optional());
	}
	transform(e) {
		let t = this.clone();
		return t.transforms.push(e), t;
	}
	test(...e) {
		let t;
		if (t = e.length === 1 ? typeof e[0] == "function" ? { test: e[0] } : e[0] : e.length === 2 ? {
			name: e[0],
			test: e[1]
		} : {
			name: e[0],
			message: e[1],
			test: e[2]
		}, t.message === void 0 && (t.message = Ue.default), typeof t.test != "function") throw TypeError("`test` is a required parameters");
		let n = this.clone(), r = it(t), i = t.exclusive || t.name && n.exclusiveTests[t.name] === !0;
		if (t.exclusive && !t.name) throw TypeError("Exclusive tests must provide a unique `name` identifying the test");
		return t.name && (n.exclusiveTests[t.name] = !!t.exclusive), n.tests = n.tests.filter((e) => !(e.OPTIONS.name === t.name && (i || e.OPTIONS.test === r.OPTIONS.test))), n.tests.push(r), n;
	}
	when(e, t) {
		!Array.isArray(e) && typeof e != "string" && (t = e, e = ".");
		let n = this.clone(), r = Ie(e).map((e) => new nt(e));
		return r.forEach((e) => {
			e.isSibling && n.deps.push(e.key);
		}), n.conditions.push(typeof t == "function" ? new $e(r, t) : $e.fromOptions(r, t)), n;
	}
	typeError(e) {
		let t = this.clone();
		return t.internalTests.typeError = it({
			message: e,
			name: "typeError",
			skipAbsent: !0,
			test(e) {
				return this.schema._typeCheck(e) ? !0 : this.createError({ params: { type: this.schema.type } });
			}
		}), t;
	}
	oneOf(e, t = Ue.oneOf) {
		let n = this.clone();
		return e.forEach((e) => {
			n._whitelist.add(e), n._blacklist.delete(e);
		}), n.internalTests.whiteList = it({
			message: t,
			name: "oneOf",
			skipAbsent: !0,
			test(e) {
				let t = this.schema._whitelist, n = t.resolveAll(this.resolve);
				return n.includes(e) ? !0 : this.createError({ params: {
					values: Array.from(t).join(", "),
					resolved: n
				} });
			}
		}), n;
	}
	notOneOf(e, t = Ue.notOneOf) {
		let n = this.clone();
		return e.forEach((e) => {
			n._blacklist.add(e), n._whitelist.delete(e);
		}), n.internalTests.blacklist = it({
			message: t,
			name: "notOneOf",
			test(e) {
				let t = this.schema._blacklist, n = t.resolveAll(this.resolve);
				return !n.includes(e) || this.createError({ params: {
					values: Array.from(t).join(", "),
					resolved: n
				} });
			}
		}), n;
	}
	strip(e = !0) {
		let t = this.clone();
		return t.spec.strip = e, t;
	}
	describe(e) {
		let t = (e ? this.resolve(e) : this).clone(), { label: n, meta: r, optional: i, nullable: a } = t.spec;
		return {
			meta: r,
			label: n,
			optional: i,
			nullable: a,
			default: t.getDefault(e),
			type: t.type,
			oneOf: t._whitelist.describe(),
			notOneOf: t._blacklist.describe(),
			tests: t.tests.filter((e, t, n) => n.findIndex((t) => t.OPTIONS.name === e.OPTIONS.name) === t).map((t) => {
				let n = t.OPTIONS.params && e ? at(Object.assign({}, t.OPTIONS.params), e) : t.OPTIONS.params;
				return {
					name: t.OPTIONS.name,
					params: n
				};
			})
		};
	}
	get "~standard"() {
		let e = this;
		return {
			version: 1,
			vendor: "yup",
			async validate(t) {
				try {
					return { value: await e.validate(t, { abortEarly: !1 }) };
				} catch (e) {
					if (e instanceof He) return { issues: pt(e) };
					throw e;
				}
			}
		};
	}
};
mt.prototype.__isYupSchema__ = !0;
for (let e of ["validate", "validateSync"]) mt.prototype[`${e}At`] = function(t, n, r = {}) {
	let { parent: i, parentPath: a, schema: o } = st(this, t, n, r.context);
	return o[e](i && i[a], Object.assign({}, r, {
		parent: i,
		path: t
	}));
};
for (let e of ["equals", "is"]) mt.prototype[e] = mt.prototype.oneOf;
for (let e of ["not", "nope"]) mt.prototype[e] = mt.prototype.notOneOf;
var ht = () => !0;
function gt(e) {
	return new _t(e);
}
var _t = class extends mt {
	constructor(e) {
		super(typeof e == "function" ? {
			type: "mixed",
			check: e
		} : Object.assign({
			type: "mixed",
			check: ht
		}, e));
	}
};
gt.prototype = _t.prototype;
function vt() {
	return new yt();
}
var yt = class extends mt {
	constructor() {
		super({
			type: "boolean",
			check(e) {
				return e instanceof Boolean && (e = e.valueOf()), typeof e == "boolean";
			}
		}), this.withMutation(() => {
			this.transform((e, t) => {
				if (this.spec.coerce && !this.isType(e)) {
					if (/^(true|1)$/i.test(String(e))) return !0;
					if (/^(false|0)$/i.test(String(e))) return !1;
				}
				return e;
			});
		});
	}
	isTrue(e = qe.isValue) {
		return this.test({
			message: e,
			name: "is-value",
			exclusive: !0,
			params: { value: "true" },
			test(e) {
				return rt(e) || e === !0;
			}
		});
	}
	isFalse(e = qe.isValue) {
		return this.test({
			message: e,
			name: "is-value",
			exclusive: !0,
			params: { value: "false" },
			test(e) {
				return rt(e) || e === !1;
			}
		});
	}
	default(e) {
		return super.default(e);
	}
	defined(e) {
		return super.defined(e);
	}
	optional() {
		return super.optional();
	}
	required(e) {
		return super.required(e);
	}
	notRequired() {
		return super.notRequired();
	}
	nullable() {
		return super.nullable();
	}
	nonNullable(e) {
		return super.nonNullable(e);
	}
	strip(e) {
		return super.strip(e);
	}
};
vt.prototype = yt.prototype;
var bt = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function xt(e) {
	let t = St(e);
	if (!t) return Date.parse ? Date.parse(e) : NaN;
	if (t.z === void 0 && t.plusMinus === void 0) return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
	let n = 0;
	return t.z !== "Z" && t.plusMinus !== void 0 && (n = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (n = 0 - n)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + n, t.second, t.millisecond);
}
function St(e) {
	let t = bt.exec(e);
	return t ? {
		year: Ct(t[1]),
		month: Ct(t[2], 1) - 1,
		day: Ct(t[3], 1),
		hour: Ct(t[4]),
		minute: Ct(t[5]),
		second: Ct(t[6]),
		millisecond: t[7] ? Ct(t[7].substring(0, 3)) : 0,
		precision: t[7]?.length ?? void 0,
		z: t[8] || void 0,
		plusMinus: t[9] || void 0,
		hourOffset: Ct(t[10]),
		minuteOffset: Ct(t[11])
	} : null;
}
function Ct(e, t = 0) {
	return Number(e) || t;
}
var wt = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Tt = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, Et = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Dt = /* @__PURE__ */ RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"), Ot = (e) => rt(e) || e === e.trim(), kt = {}.toString();
function At() {
	return new jt();
}
var jt = class extends mt {
	constructor() {
		super({
			type: "string",
			check(e) {
				return e instanceof String && (e = e.valueOf()), typeof e == "string";
			}
		}), this.withMutation(() => {
			this.transform((e, t) => {
				if (!this.spec.coerce || this.isType(e) || Array.isArray(e)) return e;
				let n = e != null && e.toString ? e.toString() : e;
				return n === kt ? e : n;
			});
		});
	}
	required(e) {
		return super.required(e).withMutation((t) => t.test({
			message: e || Ue.required,
			name: "required",
			skipAbsent: !0,
			test: (e) => !!e.length
		}));
	}
	notRequired() {
		return super.notRequired().withMutation((e) => (e.tests = e.tests.filter((e) => e.OPTIONS.name !== "required"), e));
	}
	length(e, t = We.length) {
		return this.test({
			message: t,
			name: "length",
			exclusive: !0,
			params: { length: e },
			skipAbsent: !0,
			test(t) {
				return t.length === this.resolve(e);
			}
		});
	}
	min(e, t = We.min) {
		return this.test({
			message: t,
			name: "min",
			exclusive: !0,
			params: { min: e },
			skipAbsent: !0,
			test(t) {
				return t.length >= this.resolve(e);
			}
		});
	}
	max(e, t = We.max) {
		return this.test({
			name: "max",
			exclusive: !0,
			message: t,
			params: { max: e },
			skipAbsent: !0,
			test(t) {
				return t.length <= this.resolve(e);
			}
		});
	}
	matches(e, t) {
		let n = !1, r, i;
		return t && (typeof t == "object" ? {excludeEmptyString: n = !1, message: r, name: i} = t : r = t), this.test({
			name: i || "matches",
			message: r || We.matches,
			params: { regex: e },
			skipAbsent: !0,
			test: (t) => t === "" && n || t.search(e) !== -1
		});
	}
	email(e = We.email) {
		return this.matches(wt, {
			name: "email",
			message: e,
			excludeEmptyString: !0
		});
	}
	url(e = We.url) {
		return this.matches(Tt, {
			name: "url",
			message: e,
			excludeEmptyString: !0
		});
	}
	uuid(e = We.uuid) {
		return this.matches(Et, {
			name: "uuid",
			message: e,
			excludeEmptyString: !1
		});
	}
	datetime(e) {
		let t = "", n, r;
		return e && (typeof e == "object" ? {message: t = "", allowOffset: n = !1, precision: r = void 0} = e : t = e), this.matches(Dt, {
			name: "datetime",
			message: t || We.datetime,
			excludeEmptyString: !0
		}).test({
			name: "datetime_offset",
			message: t || We.datetime_offset,
			params: { allowOffset: n },
			skipAbsent: !0,
			test: (e) => {
				if (!e || n) return !0;
				let t = St(e);
				return t ? !!t.z : !1;
			}
		}).test({
			name: "datetime_precision",
			message: t || We.datetime_precision,
			params: { precision: r },
			skipAbsent: !0,
			test: (e) => {
				if (!e || r == null) return !0;
				let t = St(e);
				return t ? t.precision === r : !1;
			}
		});
	}
	ensure() {
		return this.default("").transform((e) => e === null ? "" : e);
	}
	trim(e = We.trim) {
		return this.transform((e) => e == null ? e : e.trim()).test({
			message: e,
			name: "trim",
			test: Ot
		});
	}
	lowercase(e = We.lowercase) {
		return this.transform((e) => rt(e) ? e : e.toLowerCase()).test({
			message: e,
			name: "string_case",
			exclusive: !0,
			skipAbsent: !0,
			test: (e) => rt(e) || e === e.toLowerCase()
		});
	}
	uppercase(e = We.uppercase) {
		return this.transform((e) => rt(e) ? e : e.toUpperCase()).test({
			message: e,
			name: "string_case",
			exclusive: !0,
			skipAbsent: !0,
			test: (e) => rt(e) || e === e.toUpperCase()
		});
	}
};
At.prototype = jt.prototype;
var Mt = (e) => e != +e;
function Nt() {
	return new Pt();
}
var Pt = class extends mt {
	constructor() {
		super({
			type: "number",
			check(e) {
				return e instanceof Number && (e = e.valueOf()), typeof e == "number" && !Mt(e);
			}
		}), this.withMutation(() => {
			this.transform((e, t) => {
				if (!this.spec.coerce) return e;
				let n = e;
				if (typeof n == "string") {
					if (n = n.replace(/\s/g, ""), n === "") return NaN;
					n = +n;
				}
				return this.isType(n) || n === null ? n : parseFloat(n);
			});
		});
	}
	min(e, t = Ge.min) {
		return this.test({
			message: t,
			name: "min",
			exclusive: !0,
			params: { min: e },
			skipAbsent: !0,
			test(t) {
				return t >= this.resolve(e);
			}
		});
	}
	max(e, t = Ge.max) {
		return this.test({
			message: t,
			name: "max",
			exclusive: !0,
			params: { max: e },
			skipAbsent: !0,
			test(t) {
				return t <= this.resolve(e);
			}
		});
	}
	lessThan(e, t = Ge.lessThan) {
		return this.test({
			message: t,
			name: "max",
			exclusive: !0,
			params: { less: e },
			skipAbsent: !0,
			test(t) {
				return t < this.resolve(e);
			}
		});
	}
	moreThan(e, t = Ge.moreThan) {
		return this.test({
			message: t,
			name: "min",
			exclusive: !0,
			params: { more: e },
			skipAbsent: !0,
			test(t) {
				return t > this.resolve(e);
			}
		});
	}
	positive(e = Ge.positive) {
		return this.moreThan(0, e);
	}
	negative(e = Ge.negative) {
		return this.lessThan(0, e);
	}
	integer(e = Ge.integer) {
		return this.test({
			name: "integer",
			message: e,
			skipAbsent: !0,
			test: (e) => Number.isInteger(e)
		});
	}
	truncate() {
		return this.transform((e) => rt(e) ? e : e | 0);
	}
	round(e) {
		let t = [
			"ceil",
			"floor",
			"round",
			"trunc"
		];
		if (e = e?.toLowerCase() || "round", e === "trunc") return this.truncate();
		if (t.indexOf(e.toLowerCase()) === -1) throw TypeError("Only valid options for round() are: " + t.join(", "));
		return this.transform((t) => rt(t) ? t : Math[e](t));
	}
};
Nt.prototype = Pt.prototype;
var Ft = /* @__PURE__ */ new Date(""), It = (e) => Object.prototype.toString.call(e) === "[object Date]";
function Lt() {
	return new Rt();
}
var Rt = class e extends mt {
	constructor() {
		super({
			type: "date",
			check(e) {
				return It(e) && !isNaN(e.getTime());
			}
		}), this.withMutation(() => {
			this.transform((t, n) => !this.spec.coerce || this.isType(t) || t === null ? t : (t = xt(t), isNaN(t) ? e.INVALID_DATE : new Date(t)));
		});
	}
	prepareParam(e, t) {
		let n;
		if (nt.isRef(e)) n = e;
		else {
			let r = this.cast(e);
			if (!this._typeCheck(r)) throw TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);
			n = r;
		}
		return n;
	}
	min(e, t = Ke.min) {
		let n = this.prepareParam(e, "min");
		return this.test({
			message: t,
			name: "min",
			exclusive: !0,
			params: { min: e },
			skipAbsent: !0,
			test(e) {
				return e >= this.resolve(n);
			}
		});
	}
	max(e, t = Ke.max) {
		let n = this.prepareParam(e, "max");
		return this.test({
			message: t,
			name: "max",
			exclusive: !0,
			params: { max: e },
			skipAbsent: !0,
			test(e) {
				return e <= this.resolve(n);
			}
		});
	}
};
Rt.INVALID_DATE = Ft, Lt.prototype = Rt.prototype, Lt.INVALID_DATE = Ft;
function zt(e, t = []) {
	let n = [], r = /* @__PURE__ */ new Set(), i = new Set(t.map(([e, t]) => `${e}-${t}`));
	function a(e, t) {
		let a = (0, Te.split)(e)[0];
		r.add(a), i.has(`${t}-${a}`) || n.push([t, a]);
	}
	for (let t of Object.keys(e)) {
		let n = e[t];
		r.add(t), nt.isRef(n) && n.isSibling ? a(n.path, t) : Qe(n) && "deps" in n && n.deps.forEach((e) => a(e, t));
	}
	return De.default.array(Array.from(r), n).reverse();
}
function Bt(e, t) {
	let n = Infinity;
	return e.some((e, r) => {
		var i;
		if ((i = t.path) != null && i.includes(e)) return n = r, !0;
	}), n;
}
function Vt(e) {
	return (t, n) => Bt(e, t) - Bt(e, n);
}
var Ht = (e, t, n) => {
	if (typeof e != "string") return e;
	let r = e;
	try {
		r = JSON.parse(e);
	} catch {}
	return n.isType(r) ? r : e;
};
function Ut(e) {
	if ("fields" in e) {
		let t = {};
		for (let [n, r] of Object.entries(e.fields)) t[n] = Ut(r);
		return e.setFields(t);
	}
	if (e.type === "array") {
		let t = e.optional();
		return t.innerType &&= Ut(t.innerType), t;
	}
	return e.type === "tuple" ? e.optional().clone({ types: e.spec.types.map(Ut) }) : "optional" in e ? e.optional() : e;
}
var Wt = (e, t) => {
	let n = [...(0, Te.normalizePath)(t)];
	if (n.length === 1) return n[0] in e;
	let r = n.pop(), i = (0, Te.getter)((0, Te.join)(n), !0)(e);
	return !!(i && r in i);
}, Gt = (e) => Object.prototype.toString.call(e) === "[object Object]";
function Kt(e, t) {
	let n = Object.keys(e.fields);
	return Object.keys(t).filter((e) => n.indexOf(e) === -1);
}
var qt = Vt([]);
function Jt(e) {
	return new Yt(e);
}
var Yt = class extends mt {
	constructor(e) {
		super({
			type: "object",
			check(e) {
				return Gt(e) || typeof e == "function";
			}
		}), this.fields = Object.create(null), this._sortErrors = qt, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
			e && this.shape(e);
		});
	}
	_cast(e, t = {}) {
		let n = super._cast(e, t);
		if (n === void 0) return this.getDefault(t);
		if (!this._typeCheck(n)) return n;
		let r = this.fields, i = t.stripUnknown ?? this.spec.noUnknown, a = [].concat(this._nodes, Object.keys(n).filter((e) => !this._nodes.includes(e))), o = {}, s = Object.assign({}, t, {
			parent: o,
			__validating: t.__validating || !1
		}), c = !1;
		for (let e of a) {
			let a = r[e], l = e in n, u = n[e];
			if (a) {
				let r;
				s.path = (t.path ? `${t.path}.` : "") + e, a = a.resolve({
					value: u,
					context: t.context,
					parent: o
				});
				let i = a instanceof mt ? a.spec : void 0, l = i?.strict;
				if (i != null && i.strip) {
					c ||= e in n;
					continue;
				}
				r = !t.__validating || !l ? a.cast(u, s) : u, r !== void 0 && (o[e] = r);
			} else l && !i && (o[e] = u);
			(l !== e in o || o[e] !== u) && (c = !0);
		}
		return c ? o : n;
	}
	_validate(e, t = {}, n, r) {
		let { from: i = [], originalValue: a = e, recursive: o = this.spec.recursive } = t;
		t.from = [{
			schema: this,
			value: a
		}, ...i], t.__validating = !0, t.originalValue = a, super._validate(e, t, n, (e, i) => {
			if (!o || !Gt(i)) {
				r(e, i);
				return;
			}
			a ||= i;
			let s = [];
			for (let e of this._nodes) {
				let n = this.fields[e];
				!n || nt.isRef(n) || s.push(n.asNestedTest({
					options: t,
					key: e,
					parent: i,
					parentPath: t.path,
					originalParent: a
				}));
			}
			this.runTests({
				tests: s,
				value: i,
				originalValue: a,
				options: t
			}, n, (t) => {
				r(t.sort(this._sortErrors).concat(e), i);
			});
		});
	}
	clone(e) {
		let t = super.clone(e);
		return t.fields = Object.assign({}, this.fields), t._nodes = this._nodes, t._excludedEdges = this._excludedEdges, t._sortErrors = this._sortErrors, t;
	}
	concat(e) {
		let t = super.concat(e), n = t.fields;
		for (let [e, t] of Object.entries(this.fields)) {
			let r = n[e];
			n[e] = r === void 0 ? t : r;
		}
		return t.withMutation((t) => t.setFields(n, [...this._excludedEdges, ...e._excludedEdges]));
	}
	_getDefault(e) {
		if ("default" in this.spec) return super._getDefault(e);
		if (!this._nodes.length) return;
		let t = {};
		return this._nodes.forEach((n) => {
			var r;
			let i = this.fields[n], a = e;
			(r = a) != null && r.value && (a = Object.assign({}, a, {
				parent: a.value,
				value: a.value[n]
			})), t[n] = i && "getDefault" in i ? i.getDefault(a) : void 0;
		}), t;
	}
	setFields(e, t) {
		let n = this.clone();
		return n.fields = e, n._nodes = zt(e, t), n._sortErrors = Vt(Object.keys(e)), t && (n._excludedEdges = t), n;
	}
	shape(e, t = []) {
		return this.clone().withMutation((n) => {
			let r = n._excludedEdges;
			return t.length && (Array.isArray(t[0]) || (t = [t]), r = [...n._excludedEdges, ...t]), n.setFields(Object.assign(n.fields, e), r);
		});
	}
	partial() {
		let e = {};
		for (let [t, n] of Object.entries(this.fields)) e[t] = "optional" in n && n.optional instanceof Function ? n.optional() : n;
		return this.setFields(e);
	}
	deepPartial() {
		return Ut(this);
	}
	pick(e) {
		let t = {};
		for (let n of e) this.fields[n] && (t[n] = this.fields[n]);
		return this.setFields(t, this._excludedEdges.filter(([t, n]) => e.includes(t) && e.includes(n)));
	}
	omit(e) {
		let t = [];
		for (let n of Object.keys(this.fields)) e.includes(n) || t.push(n);
		return this.pick(t);
	}
	from(e, t, n) {
		let r = (0, Te.getter)(e, !0);
		return this.transform((i) => {
			if (!i) return i;
			let a = i;
			return Wt(i, e) && (a = Object.assign({}, i), n || delete a[e], a[t] = r(i)), a;
		});
	}
	json() {
		return this.transform(Ht);
	}
	exact(e) {
		return this.test({
			name: "exact",
			exclusive: !0,
			message: e || Je.exact,
			test(e) {
				if (e == null) return !0;
				let t = Kt(this.schema, e);
				return t.length === 0 || this.createError({ params: { properties: t.join(", ") } });
			}
		});
	}
	stripUnknown() {
		return this.clone({ noUnknown: !0 });
	}
	noUnknown(e = !0, t = Je.noUnknown) {
		typeof e != "boolean" && (t = e, e = !0);
		let n = this.test({
			name: "noUnknown",
			exclusive: !0,
			message: t,
			test(t) {
				if (t == null) return !0;
				let n = Kt(this.schema, t);
				return !e || n.length === 0 || this.createError({ params: { unknown: n.join(", ") } });
			}
		});
		return n.spec.noUnknown = e, n;
	}
	unknown(e = !0, t = Je.noUnknown) {
		return this.noUnknown(!e, t);
	}
	transformKeys(e) {
		return this.transform((t) => {
			if (!t) return t;
			let n = {};
			for (let r of Object.keys(t)) n[e(r)] = t[r];
			return n;
		});
	}
	camelCase() {
		return this.transformKeys(Ee.camelCase);
	}
	snakeCase() {
		return this.transformKeys(Ee.snakeCase);
	}
	constantCase() {
		return this.transformKeys((e) => (0, Ee.snakeCase)(e).toUpperCase());
	}
	describe(e) {
		let t = (e ? this.resolve(e) : this).clone(), n = super.describe(e);
		n.fields = {};
		for (let [i, a] of Object.entries(t.fields)) {
			var r;
			let t = e;
			(r = t) != null && r.value && (t = Object.assign({}, t, {
				parent: t.value,
				value: t.value[i]
			})), n.fields[i] = a.describe(t);
		}
		return n;
	}
};
Jt.prototype = Yt.prototype;
function Xt(e) {
	return new Zt(e);
}
var Zt = class extends mt {
	constructor(e) {
		super({
			type: "array",
			spec: { types: e },
			check(e) {
				return Array.isArray(e);
			}
		}), this.innerType = void 0, this.innerType = e;
	}
	_cast(e, t) {
		let n = super._cast(e, t);
		if (!this._typeCheck(n) || !this.innerType) return n;
		let r = !1, i = n.map((e, i) => {
			let a = this.innerType.cast(e, Object.assign({}, t, {
				path: `${t.path || ""}[${i}]`,
				parent: n,
				originalValue: e,
				value: e,
				index: i
			}));
			return a !== e && (r = !0), a;
		});
		return r ? i : n;
	}
	_validate(e, t = {}, n, r) {
		let i = this.innerType, a = t.recursive ?? this.spec.recursive;
		t.originalValue != null && t.originalValue, super._validate(e, t, n, (o, s) => {
			if (!a || !i || !this._typeCheck(s)) {
				r(o, s);
				return;
			}
			let c = Array(s.length);
			for (let n = 0; n < s.length; n++) c[n] = i.asNestedTest({
				options: t,
				index: n,
				parent: s,
				parentPath: t.path,
				originalParent: t.originalValue ?? e
			});
			this.runTests({
				value: s,
				tests: c,
				originalValue: t.originalValue ?? e,
				options: t
			}, n, (e) => r(e.concat(o), s));
		});
	}
	clone(e) {
		let t = super.clone(e);
		return t.innerType = this.innerType, t;
	}
	json() {
		return this.transform(Ht);
	}
	concat(e) {
		let t = super.concat(e);
		return t.innerType = this.innerType, e.innerType && (t.innerType = t.innerType ? t.innerType.concat(e.innerType) : e.innerType), t;
	}
	of(e) {
		let t = this.clone();
		if (!Qe(e)) throw TypeError("`array.of()` sub-schema must be a valid yup schema not: " + Fe(e));
		return t.innerType = e, t.spec = Object.assign({}, t.spec, { types: e }), t;
	}
	length(e, t = Ye.length) {
		return this.test({
			message: t,
			name: "length",
			exclusive: !0,
			params: { length: e },
			skipAbsent: !0,
			test(t) {
				return t.length === this.resolve(e);
			}
		});
	}
	min(e, t) {
		return t ||= Ye.min, this.test({
			message: t,
			name: "min",
			exclusive: !0,
			params: { min: e },
			skipAbsent: !0,
			test(t) {
				return t.length >= this.resolve(e);
			}
		});
	}
	max(e, t) {
		return t ||= Ye.max, this.test({
			message: t,
			name: "max",
			exclusive: !0,
			params: { max: e },
			skipAbsent: !0,
			test(t) {
				return t.length <= this.resolve(e);
			}
		});
	}
	ensure() {
		return this.default(() => []).transform((e, t) => this._typeCheck(e) ? e : t == null ? [] : [].concat(t));
	}
	compact(e) {
		let t = e ? (t, n, r) => !e(t, n, r) : (e) => !!e;
		return this.transform((e) => e == null ? e : e.filter(t));
	}
	describe(e) {
		let t = (e ? this.resolve(e) : this).clone(), n = super.describe(e);
		if (t.innerType) {
			var r;
			let i = e;
			(r = i) != null && r.value && (i = Object.assign({}, i, {
				parent: i.value,
				value: i.value[0]
			})), n.innerType = t.innerType.describe(i);
		}
		return n;
	}
};
Xt.prototype = Zt.prototype;
function Qt(e) {
	return new $t(e);
}
var $t = class extends mt {
	constructor(e) {
		super({
			type: "tuple",
			spec: { types: e },
			check(e) {
				let t = this.spec.types;
				return Array.isArray(e) && e.length === t.length;
			}
		}), this.withMutation(() => {
			this.typeError(Xe.notType);
		});
	}
	_cast(e, t) {
		let { types: n } = this.spec, r = super._cast(e, t);
		if (!this._typeCheck(r)) return r;
		let i = !1, a = n.map((e, n) => {
			let a = e.cast(r[n], Object.assign({}, t, {
				path: `${t.path || ""}[${n}]`,
				parent: r,
				originalValue: r[n],
				value: r[n],
				index: n
			}));
			return a !== r[n] && (i = !0), a;
		});
		return i ? a : r;
	}
	_validate(e, t = {}, n, r) {
		let i = this.spec.types;
		super._validate(e, t, n, (a, o) => {
			if (!this._typeCheck(o)) {
				r(a, o);
				return;
			}
			let s = [];
			for (let [n, r] of i.entries()) s[n] = r.asNestedTest({
				options: t,
				index: n,
				parent: o,
				parentPath: t.path,
				originalParent: t.originalValue ?? e
			});
			this.runTests({
				value: o,
				tests: s,
				originalValue: t.originalValue ?? e,
				options: t
			}, n, (e) => r(e.concat(a), o));
		});
	}
	describe(e) {
		let t = (e ? this.resolve(e) : this).clone(), n = super.describe(e);
		return n.innerType = t.spec.types.map((t, n) => {
			var r;
			let i = e;
			return (r = i) != null && r.value && (i = Object.assign({}, i, {
				parent: i.value,
				value: i.value[n]
			})), t.describe(i);
		}), n;
	}
};
Qt.prototype = $t.prototype;
function en(e) {
	return new nn(e);
}
function tn(e) {
	try {
		return e();
	} catch (e) {
		if (He.isError(e)) return Promise.reject(e);
		throw e;
	}
}
var nn = class e {
	constructor(e) {
		this.type = "lazy", this.__isYupSchema__ = !0, this.spec = void 0, this._resolve = (e, t = {}) => {
			let n = this.builder(e, t);
			if (!Qe(n)) throw TypeError("lazy() functions must return a valid schema");
			return this.spec.optional && (n = n.optional()), n.resolve(t);
		}, this.builder = e, this.spec = {
			meta: void 0,
			optional: !1
		};
	}
	clone(t) {
		let n = new e(this.builder);
		return n.spec = Object.assign({}, this.spec, t), n;
	}
	optionality(e) {
		return this.clone({ optional: e });
	}
	optional() {
		return this.optionality(!0);
	}
	resolve(e) {
		return this._resolve(e.value, e);
	}
	cast(e, t) {
		return this._resolve(e, t).cast(e, t);
	}
	asNestedTest(e) {
		let { key: t, index: n, parent: r, options: i } = e, a = r[n ?? t];
		return this._resolve(a, Object.assign({}, i, {
			value: a,
			parent: r
		})).asNestedTest(e);
	}
	validate(e, t) {
		return tn(() => this._resolve(e, t).validate(e, t));
	}
	validateSync(e, t) {
		return this._resolve(e, t).validateSync(e, t);
	}
	validateAt(e, t, n) {
		return tn(() => this._resolve(t, n).validateAt(e, t, n));
	}
	validateSyncAt(e, t, n) {
		return this._resolve(t, n).validateSyncAt(e, t, n);
	}
	isValid(e, t) {
		try {
			return this._resolve(e, t).isValid(e, t);
		} catch (e) {
			if (He.isError(e)) return Promise.resolve(!1);
			throw e;
		}
	}
	isValidSync(e, t) {
		return this._resolve(e, t).isValidSync(e, t);
	}
	describe(e) {
		return e ? this.resolve(e).describe(e) : {
			type: "lazy",
			meta: this.spec.meta,
			label: void 0
		};
	}
	meta(...e) {
		if (e.length === 0) return this.spec.meta;
		let t = this.clone();
		return t.spec.meta = Object.assign(t.spec.meta || {}, e[0]), t;
	}
	get "~standard"() {
		let e = this;
		return {
			version: 1,
			vendor: "yup",
			async validate(t) {
				try {
					return { value: await e.validate(t, { abortEarly: !1 }) };
				} catch (e) {
					if (He.isError(e)) return { issues: pt(e) };
					throw e;
				}
			}
		};
	}
};
function rn(e) {
	Object.keys(e).forEach((t) => {
		Object.keys(e[t]).forEach((n) => {
			Ze[t][n] = e[t][n];
		});
	});
}
function an(e, t, n) {
	if (!e || !Qe(e.prototype)) throw TypeError("You must provide a yup schema constructor function");
	if (typeof t != "string") throw TypeError("A Method name must be provided");
	if (typeof n != "function") throw TypeError("Method function must be provided");
	e.prototype[t] = n;
}
//#endregion
//#region node_modules/.pnpm/@tabler+icons-vue@3.46.0_vue@3.5.41_typescript@6.0.3_/node_modules/@tabler/icons-vue/dist/esm/defaultAttributes.mjs
var on = {
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
}, sn = (e, t, n, r) => ({ color: n = "currentColor", size: i = 24, stroke: a = 2, title: o, class: s, ...c }, { attrs: l, slots: u }) => {
	let d = [...r.map((e) => h(...e)), ...u.default ? [u.default()] : []];
	return o && (d = [h("title", o), ...d]), h("svg", {
		...on[e],
		width: i,
		height: i,
		...l,
		class: ["tabler-icon", `tabler-icon-${t}`],
		...e === "filled" ? { fill: n } : {
			"stroke-width": a ?? on[e]["stroke-width"],
			stroke: n
		},
		...c
	}, d);
}, cn = sn("outline", "alert-circle", "AlertCircle", [
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
]), ln = sn("outline", "alert-triangle", "AlertTriangle", [
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
]), un = sn("outline", "arrow-up-right", "ArrowUpRight", [["path", {
	d: "M17 7l-10 10",
	key: "svg-0"
}], ["path", {
	d: "M8 7l9 0l0 9",
	key: "svg-1"
}]]), dn = sn("outline", "bell", "Bell", [["path", {
	d: "M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6",
	key: "svg-0"
}], ["path", {
	d: "M9 17v1a3 3 0 0 0 6 0v-1",
	key: "svg-1"
}]]), fn = sn("outline", "check", "Check", [["path", {
	d: "M5 12l5 5l10 -10",
	key: "svg-0"
}]]), pn = sn("outline", "chevron-down", "ChevronDown", [["path", {
	d: "M6 9l6 6l6 -6",
	key: "svg-0"
}]]), mn = sn("outline", "chevron-left", "ChevronLeft", [["path", {
	d: "M15 6l-6 6l6 6",
	key: "svg-0"
}]]), hn = sn("outline", "chevron-right", "ChevronRight", [["path", {
	d: "M9 6l6 6l-6 6",
	key: "svg-0"
}]]), gn = sn("outline", "currency-dollar", "CurrencyDollar", [["path", {
	d: "M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2",
	key: "svg-0"
}], ["path", {
	d: "M12 3v3m0 12v3",
	key: "svg-1"
}]]), _n = sn("outline", "dots-vertical", "DotsVertical", [
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
]), vn = sn("outline", "eye-off", "EyeOff", [
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
]), yn = sn("outline", "eye", "Eye", [["path", {
	d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
	key: "svg-0"
}], ["path", {
	d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",
	key: "svg-1"
}]]), bn = sn("outline", "info-circle", "InfoCircle", [
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
]), xn = sn("outline", "loader-2", "Loader2", [["path", {
	d: "M12 3a9 9 0 1 0 9 9",
	key: "svg-0"
}]]), Sn = sn("outline", "menu-2", "Menu2", [
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
]), Cn = sn("outline", "moon", "Moon", [["path", {
	d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008",
	key: "svg-0"
}]]), wn = sn("outline", "search", "Search", [["path", {
	d: "M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",
	key: "svg-0"
}], ["path", {
	d: "M21 21l-6 -6",
	key: "svg-1"
}]]), Tn = sn("outline", "shield-check", "ShieldCheck", [["path", {
	d: "M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06",
	key: "svg-0"
}], ["path", {
	d: "M15 19l2 2l4 -4",
	key: "svg-1"
}]]), En = sn("outline", "sun", "Sun", [["path", {
	d: "M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
	key: "svg-0"
}], ["path", {
	d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
	key: "svg-1"
}]]), Dn = sn("outline", "x", "X", [["path", {
	d: "M18 6l-12 12",
	key: "svg-0"
}], ["path", {
	d: "M6 6l12 12",
	key: "svg-1"
}]]), On = /*@__PURE__*/ f({
	__name: "Alert",
	props: {
		type: {},
		show: {
			type: Boolean,
			default: !0
		}
	},
	setup(e) {
		let t = e, n = i(() => {
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
		}), l = i(() => {
			switch (t.type) {
				case "warning": return ln;
				case "danger": return cn;
				case "info": return bn;
				case "success": return Tn;
				default: return ln;
			}
		});
		return (t, i) => (k(), a(r, { name: "alert-reveal" }, {
			default: Y(() => [e.show ? (k(), s("div", {
				key: 0,
				class: S([
					"flex items-start gap-3 p-4 rounded-lg border backdrop-blur-sm",
					n.value.border,
					n.value.background
				])
			}, [(k(), a(L(l.value), { class: S(["w-5 h-5 flex-shrink-0 mt-0.5", n.value.icon]) }, null, 8, ["class"])), c("div", { class: S(["flex-1 text-sm", n.value.text]) }, [F(t.$slots, "default", {}, void 0, !0)], 2)], 2)) : o("", !0)]),
			_: 3
		}));
	}
}), kn = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, An = /*#__PURE__*/ kn(On, [["__scopeId", "data-v-22e2bebf"]]), jn = { class: "flex items-center justify-center relative" }, Mn = { class: "flex items-center space-x-2" }, Nn = /* @__PURE__ */ f({
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
		let t = e, n = i(() => t.to !== void 0), r = i(() => n.value ? re : "button");
		return (t, n) => (k(), a(L(H(r)), {
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
			default: Y(() => [c("div", jn, [e.loading ? (k(), s("svg", {
				key: 0,
				class: S(["animate-spin h-4 w-4 transition-all duration-300 ease-in-out mr-2", e.variant === "primary" ? "text-white" : "text-gray-900 dark:text-white"]),
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 24 24"
			}, [...n[0] ||= [c("circle", {
				class: "opacity-25",
				cx: "12",
				cy: "12",
				r: "10",
				stroke: "currentColor",
				"stroke-width": "4"
			}, null, -1), c("path", {
				class: "opacity-75",
				fill: "currentColor",
				d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			}, null, -1)]], 2)) : o("", !0), c("div", Mn, [
				e.icon && !e.loading && e.iconPosition !== "right" ? (k(), a(L(e.icon), {
					key: 0,
					class: S([
						"h-5 w-5",
						t.$slots.default ? "mr-2" : "",
						e.iconClass
					])
				}, null, 8, ["class"])) : o("", !0),
				F(t.$slots, "default"),
				e.icon && !e.loading && e.iconPosition === "right" ? (k(), a(L(e.icon), {
					key: 1,
					class: S(["h-5 w-5", e.iconClass])
				}, null, 8, ["class"])) : o("", !0)
			])])]),
			_: 3
		}, 8, [
			"to",
			"type",
			"disabled",
			"class"
		]));
	}
}), Pn = ["type", "disabled"], Fn = /* @__PURE__ */ f({
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
		let t = i(() => ({
			sm: "p-1",
			md: "p-1.5",
			lg: "p-2"
		})[e.size]), n = i(() => ({
			sm: "w-4 h-4",
			md: "w-5 h-5",
			lg: "w-6 h-6"
		})[e.size]), r = i(() => ({
			primary: "bg-primary-600 dark:bg-primary-500 text-white hover:bg-primary-700 dark:hover:bg-primary-600 shadow-sm hover:shadow",
			secondary: "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 shadow-sm hover:shadow",
			outline: "border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700",
			"primary-outline": "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white dark:border-primary-500 dark:text-primary-400 dark:hover:bg-primary-500",
			danger: "bg-danger-600 hover:bg-danger-700 text-white dark:bg-danger-500 dark:hover:bg-danger-600 focus:ring-danger-500 shadow-sm hover:shadow",
			"danger-outline": "border-2 border-danger-600 text-danger-600 hover:bg-danger-600 hover:text-white dark:border-danger-500 dark:text-danger-400 dark:hover:bg-danger-500 dark:hover:text-white focus:ring-danger-500",
			overlay: "bg-black/60 hover:bg-black/80 text-white shadow-sm hover:shadow"
		})[e.variant]);
		return (i, o) => (k(), s("button", {
			type: e.type,
			disabled: e.disabled || e.loading,
			class: S([
				"rounded-lg transition-all duration-200 cursor-pointer inline-flex items-center justify-center",
				"disabled:opacity-50 disabled:cursor-not-allowed",
				"focus:outline-none",
				"active:scale-95",
				H(t),
				H(r)
			])
		}, [e.loading ? (k(), s("svg", {
			key: 0,
			class: S(["animate-spin", [H(n), e.variant === "primary" || e.variant === "danger" ? "text-white" : "text-gray-900 dark:text-white"]]),
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 24 24"
		}, [...o[0] ||= [c("circle", {
			class: "opacity-25",
			cx: "12",
			cy: "12",
			r: "10",
			stroke: "currentColor",
			"stroke-width": "4"
		}, null, -1), c("path", {
			class: "opacity-75",
			fill: "currentColor",
			d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
		}, null, -1)]], 2)) : (k(), a(L(e.icon), {
			key: 1,
			class: S(H(n))
		}, null, 8, ["class"]))], 10, Pn));
	}
}), In = {
	class: "flex mb-6",
	"aria-label": "Breadcrumb"
}, Ln = { class: "inline-flex items-center space-x-1 md:space-x-3" }, Rn = {
	key: 0,
	class: "flex items-center"
}, zn = /* @__PURE__ */ f({
	__name: "Breadcrumb",
	props: { items: {} },
	setup(e) {
		return (n, r) => (k(), s("nav", In, [c("ol", Ln, [(k(!0), s(t, null, P(e.items, (t, n) => (k(), s("li", {
			key: n,
			class: "inline-flex items-center"
		}, [n > 0 ? (k(), s("div", Rn, [...r[0] ||= [c("svg", {
			class: "w-3 h-3 text-gray-500 dark:text-gray-500 mx-1",
			"aria-hidden": "true",
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 6 10"
		}, [c("path", {
			stroke: "currentColor",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			"stroke-width": "2",
			d: "m1 9 4-4-4-4"
		})], -1)]])) : o("", !0), t.to && n < e.items.length - 1 ? (k(), a(H(re), {
			key: 1,
			to: t.to,
			class: "inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
		}, {
			default: Y(() => [t.icon ? (k(), a(L(t.icon), {
				key: 0,
				class: "w-4 h-4 mr-2"
			})) : o("", !0), u(" " + z(t.label), 1)]),
			_: 2
		}, 1032, ["to"])) : (k(), s("span", {
			key: 2,
			class: S(["inline-flex items-center text-sm font-medium", n === e.items.length - 1 ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400"])
		}, [t.icon ? (k(), a(L(t.icon), {
			key: 0,
			class: "w-4 h-4 mr-2"
		})) : o("", !0), u(" " + z(t.label), 1)], 2))]))), 128))])]));
	}
}), Bn = /* @__PURE__ */ f({
	__name: "Badge",
	props: {
		variant: { default: "neutral" },
		text: { default: "base" }
	},
	setup(e) {
		let t = e, n = i(() => {
			switch (t.variant) {
				case "success": return "bg-success-50 dark:bg-success-900/30 text-success-700 dark:text-success-400";
				case "warning": return "bg-warning-50 dark:bg-warning-900/30 text-warning-700 dark:text-warning-400";
				case "danger": return "bg-danger-50 dark:bg-danger-900/30 text-danger-700 dark:text-danger-400";
				case "info": return "bg-secondary-50 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400";
				default: return "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300";
			}
		}), r = i(() => {
			switch (t.text) {
				case "xs": return "text-xs";
				case "sm": return "text-sm";
				default: return "text-base";
			}
		});
		return (e, t) => (k(), s("span", { class: S([
			"inline-flex items-center px-2.5 py-0.5 rounded-full font-medium tabular-nums",
			H(n),
			H(r)
		]) }, [F(e.$slots, "default")], 2));
	}
}), Vn = {
	key: 0,
	class: "px-6 pt-5"
}, Hn = { class: "flex-1 min-w-0" }, Un = {
	key: 0,
	class: "text-base font-semibold tracking-tight text-gray-900 dark:text-white"
}, Wn = {
	key: 1,
	class: "mt-0.5 text-sm text-gray-500 dark:text-gray-400"
}, Gn = {
	key: 0,
	class: "flex items-center gap-2 shrink-0"
}, Kn = /* @__PURE__ */ f({
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
		let t = ee(), n = i(() => e.title || e.subtitle || t.headerButtons);
		return (t, r) => (k(), s("div", { class: S(["bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm", { "overflow-hidden flex flex-col": e.noPadding }]) }, [H(n) ? (k(), s("div", Vn, [c("div", { class: S(["flex items-start justify-between gap-4 pb-4 border-b border-gray-300 dark:border-gray-600", { "flex-col gap-3 sm:flex-row sm:items-start": e.colInMobile }]) }, [c("div", Hn, [e.title ? (k(), s("h3", Un, z(e.title), 1)) : o("", !0), e.subtitle ? (k(), s("p", Wn, z(e.subtitle), 1)) : o("", !0)]), t.$slots.headerButtons ? (k(), s("div", Gn, [F(t.$slots, "headerButtons")])) : o("", !0)], 2)])) : o("", !0), c("div", { class: S(e.noPadding ? "flex-1 flex flex-col" : "p-4") }, [F(t.$slots, "default")], 2)], 2));
	}
}), qn = {
	key: 0,
	class: "flex items-center justify-between pt-4"
}, Jn = { class: "text-base text-gray-500 dark:text-gray-400 tabular-nums" }, Yn = { class: "flex items-center gap-2" }, Xn = ["disabled"], Zn = { class: "text-base text-gray-700 dark:text-gray-300 tabular-nums" }, Qn = ["disabled"], $n = /* @__PURE__ */ f({
	__name: "CardPaginations",
	props: { pagination: {} },
	emits: ["page-change"],
	setup(e, { emit: t }) {
		let n = t, r = (t) => {
			e.pagination && (t < 1 || t > e.pagination.last_page || n("page-change", t));
		};
		return (t, n) => e.pagination && e.pagination.last_page > 1 ? (k(), s("div", qn, [c("p", Jn, " Mostrando " + z(e.pagination.from) + "-" + z(e.pagination.to) + " de " + z(e.pagination.total), 1), c("div", Yn, [
			c("button", {
				type: "button",
				disabled: e.pagination.current_page === 1,
				class: "w-8 h-8 flex items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-500 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors",
				onClick: n[0] ||= (t) => r(e.pagination.current_page - 1)
			}, [d(H(mn), { class: "w-4 h-4" })], 8, Xn),
			c("span", Zn, z(e.pagination.current_page) + " / " + z(e.pagination.last_page), 1),
			c("button", {
				type: "button",
				disabled: e.pagination.current_page === e.pagination.last_page,
				class: "w-8 h-8 flex items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-500 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors",
				onClick: n[1] ||= (t) => r(e.pagination.current_page + 1)
			}, [d(H(hn), { class: "w-4 h-4" })], 8, Qn)
		])])) : o("", !0);
	}
}), er = /* @__PURE__ */ f({
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
		function i(e) {
			let t = e;
			t.style.height = `${t.scrollHeight}px`, t.style.overflow = "hidden", t.style.transition = "height 0.3s ease-out, opacity 0.3s ease-out", t.style.opacity = "1", requestAnimationFrame(() => {
				t.style.height = "0", t.style.opacity = "0";
			});
		}
		function o(e) {
			let t = e;
			t.style.height = "", t.style.overflow = "", t.style.transition = "", t.style.opacity = "";
		}
		return (e, s) => (k(), a(r, {
			name: "collapse",
			onEnter: t,
			onAfterEnter: n,
			onLeave: i,
			onAfterLeave: o
		}, {
			default: Y(() => [F(e.$slots, "default")]),
			_: 3
		}));
	}
}), tr = { class: "relative py-4" }, nr = /* @__PURE__ */ f({
	__name: "Divider",
	setup(e) {
		return (e, t) => (k(), s("div", tr, [...t[0] ||= [c("div", { class: "absolute inset-0 flex items-center" }, [c("div", { class: "w-full border-t border-gray-200 dark:border-gray-700" })], -1)]]));
	}
}), rr = { class: "flex items-start justify-between" }, ir = { class: "flex-1 min-w-0" }, ar = {
	key: 0,
	class: "text-lg font-semibold text-gray-900 dark:text-white"
}, or = {
	key: 1,
	class: "text-sm text-gray-600 dark:text-gray-400 mt-1"
}, sr = { class: "overflow-y-auto max-h-[70vh] p-0.5 -m-0.5" }, cr = /*#__PURE__*/ kn(/* @__PURE__ */ f({
	__name: "Modal",
	props: {
		open: { type: Boolean },
		title: {},
		subtitle: {},
		size: {}
	},
	emits: ["update:open", "close"],
	setup(e, { emit: t }) {
		let l = e, u = i(() => ({
			sm: "max-w-sm",
			md: "max-w-lg",
			lg: "max-w-2xl",
			xl: "max-w-4xl",
			"2xl": "max-w-6xl"
		})[l.size ?? "md"]), f = t, p = N(null);
		function m() {
			f("update:open", !1), f("close");
		}
		function h(e) {
			e.target === p.value && m();
		}
		function g(e) {
			e.key === "Escape" && m();
		}
		return J(() => l.open, async (e) => {
			e ? (p.value?.showModal(), await x(), p.value?.focus()) : p.value?.close();
		}), D(async () => {
			l.open && (p.value?.showModal(), await x(), p.value?.focus());
		}), T(() => {
			p.value?.open && p.value.close();
		}), (t, i) => {
			let l = nr;
			return k(), a(n, { to: "body" }, [d(r, {
				name: "modal-fade",
				appear: ""
			}, {
				default: Y(() => [e.open ? (k(), s("dialog", {
					key: 0,
					ref_key: "dialogRef",
					ref: p,
					class: "rutely-modal fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-0 m-0 border-0 w-full h-full focus:outline-none",
					onClose: m,
					onClick: Z(h, ["self"]),
					onKeydown: g
				}, [c("div", { class: S(["relative bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full p-6 transform transition-all duration-300 border border-gray-200 dark:border-gray-700", [H(u), e.open ? "scale-100 opacity-100" : "scale-95 opacity-0"]]) }, [c("div", null, [c("div", rr, [c("div", ir, [e.title ? (k(), s("div", ar, z(e.title), 1)) : o("", !0), e.subtitle ? (k(), s("div", or, z(e.subtitle), 1)) : o("", !0)]), c("button", {
					onClick: m,
					"aria-label": "Cerrar",
					class: "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-gray-500 ml-4",
					type: "button"
				}, [...i[0] ||= [c("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					class: "h-5 w-5",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor"
				}, [c("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					"stroke-width": "2",
					d: "M6 18L18 6M6 6l12 12"
				})], -1)]])]), d(l)]), c("div", sr, [F(t.$slots, "default", {}, void 0, !0)])], 2)], 544)) : o("", !0)]),
				_: 3
			})]);
		};
	}
}), [["__scopeId", "data-v-558911f3"]]), lr = /* @__PURE__ */ f({
	__name: "DropdownAnimation",
	setup(e) {
		return (e, t) => (k(), a(r, {
			"enter-active-class": "transition ease-out duration-200",
			"enter-from-class": "transform opacity-0 scale-95",
			"enter-to-class": "transform opacity-100 scale-100",
			"leave-active-class": "transition ease-in duration-150",
			"leave-from-class": "transform opacity-100 scale-100",
			"leave-to-class": "transform opacity-0 scale-95"
		}, {
			default: Y(() => [F(e.$slots, "default")]),
			_: 3
		}));
	}
}), ur = /* @__PURE__ */ f({
	__name: "LoadingSVG",
	props: { customClass: {} },
	setup(e) {
		let t = e, n = i(() => t.customClass || "animate-spin -ml-1 mr-3 h-12 w-12 text-gray-900 dark:text-white");
		return (e, t) => (k(), s("svg", {
			class: S(H(n)),
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 24 24"
		}, [...t[0] ||= [c("circle", {
			class: "opacity-25",
			cx: "12",
			cy: "12",
			r: "10",
			stroke: "currentColor",
			"stroke-width": "4"
		}, null, -1), c("path", {
			class: "opacity-75",
			fill: "currentColor",
			d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
		}, null, -1)]], 2));
	}
}), dr = Symbol("useRequest"), fr = { class: "relative" }, pr = [
	"id",
	"placeholder",
	"disabled"
], mr = {
	key: 0,
	class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
}, hr = { class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" }, gr = {
	key: 0,
	class: "flex flex-wrap gap-2 mt-2"
}, _r = ["onClick"], vr = {
	key: 0,
	class: "py-4 px-4 flex items-center justify-center"
}, yr = {
	key: 1,
	class: "py-4 px-4 text-center text-gray-500 dark:text-gray-400"
}, br = {
	key: 2,
	class: "space-y-2 p-2 max-h-64 overflow-y-auto"
}, xr = ["onClick"], Sr = { class: "flex justify-between items-center" }, Cr = { class: "flex items-center space-x-2" }, wr = { class: "flex flex-col" }, Tr = { class: "font-semibold text-gray-900 dark:text-white" }, Er = {
	key: 0,
	class: "text-primary-600 dark:text-primary-400"
}, Dr = /* @__PURE__ */ f({
	__name: "SearchableSelect",
	props: /*@__PURE__*/ y({
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
	emits: /*@__PURE__*/ y(["select", "data"], ["update:modelValue"]),
	setup(e, { emit: n }) {
		let r = e, { placeholder: l = "Buscar...", id: f = "searchable-select", small: p = !1, labelKey: m = "label", valueKey: h = "value", multiple: v = !1 } = r, y = U(e, "modelValue"), b = g(dr);
		if (!b) throw Error("SearchableSelect: no request instance provided. Call app.provide(useRequestKey, useRequest) in the consuming app.");
		let { get: x } = b(), C = `searchable-${Math.random().toString(36).slice(2)}`, w = N(!1), T = N(""), E = N([]), A = N([]), j = N(/* @__PURE__ */ new Map()), M = N(null), F = N([]), I = N(!1), R = N(), B = N(), V = N(""), ee = N(!1), W = N(!1), K = N(!1), q = i(() => y.value ? M.value && M.value.value === y.value ? M.value : E.value.find((e) => e.value === y.value) || A.value.find((e) => e.value === y.value) : null), te = i(() => "absolute w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-[9999] mt-2 overflow-hidden"), X = i(() => Array.isArray(y.value) ? y.value : []), Z = (e) => v ? X.value.includes(e.value) : q.value?.value === e.value, re = 0, ie = async () => {
			let e = ++re, t = X.value;
			if (t.length === 0) {
				F.value = [];
				return;
			}
			let n = /* @__PURE__ */ new Map();
			for (let e of F.value) n.set(e.value, e);
			for (let e of E.value) n.set(e.value, e);
			for (let e of A.value) n.set(e.value, e);
			let i = t.filter((e) => !n.has(e));
			if (i.length && r.url) {
				if (A.value.length === 0) {
					if (await de(), e !== re) return;
					for (let e of A.value) n.set(e.value, e);
					i = t.filter((e) => !n.has(e));
				}
				for (let t of i) try {
					let i = r.url.includes("?") ? "&" : "?", { data: a } = await x(`${r.url}${i}filter[${h}]=${t}`);
					if (e !== re) return;
					let o = Array.isArray(a.value) ? a.value : a.value?.data || [];
					o.length && n.set(t, ue(o[0]));
				} catch {}
			}
			e === re && (F.value = t.map((e) => n.get(e) ?? {
				label: String(e),
				value: e,
				subtitles: []
			}));
		}, ae = (e) => {
			K.value = !0, y.value = X.value.filter((t) => t !== e), F.value = F.value.filter((t) => t.value !== e);
		};
		function oe(e, t) {
			return t.trim().split(".").reduce((e, t) => e?.[t], e);
		}
		function se(e, t) {
			let n = [...e.matchAll(/\{([^}]+)\}/g)];
			if (n.length === 0) {
				let n = oe(t, e);
				return n == null ? "" : String(n);
			}
			let r = n.map((e) => oe(t, e[1]));
			if (r.every((e) => e == null || e === "")) return "";
			let i = e;
			return n.forEach((e, t) => {
				let n = r[t];
				i = i.replace(e[0], n == null ? "" : String(n));
			}), i.replace(/^[\s\-:|,·]+/, "").replace(/[\s\-:|,·]+$/, "").replace(/\s+/g, " ").trim();
		}
		function ce(e) {
			return r.subtitleKey ? (Array.isArray(r.subtitleKey) ? r.subtitleKey : [r.subtitleKey]).map((t) => se(t, e)).filter(Boolean) : [];
		}
		let ue = (e) => {
			let t = {
				label: se(m, e),
				value: oe(e, h),
				icon: e.icon,
				subtitles: ce(e)
			};
			return j.value.set(t.value, e), t;
		}, de = async (e = {}) => {
			if (!r.url) return;
			let t = r.url;
			if (e.searchWithId && y.value) {
				let e = r.url.includes("?") ? "&" : "?";
				t = `${r.url}${e}filter[${r.valueKey}]=${y.value}`;
			}
			I.value = !0;
			try {
				let { data: e } = await x(t);
				if (e.value) {
					let t = (Array.isArray(e.value) ? e.value : e.value.data || []).map(ue);
					E.value = t, A.value = t;
				}
			} catch (e) {
				console.error("Error fetching initial data:", e), E.value = [], A.value = [];
			} finally {
				I.value = !1;
			}
		}, fe = async (e) => {
			if (!r.url || !e.trim()) {
				E.value = A.value;
				return;
			}
			I.value = !0;
			try {
				let t = r.url.includes("?") ? "&" : "?", n = `${r.url}${t}${r.searchBy}=${encodeURIComponent(e)}`, { data: i } = await x(n);
				if (i.value) {
					let e = (Array.isArray(i.value) ? i.value : i.value.data || []).map(ue);
					E.value = e;
				}
			} catch (e) {
				console.error("Error searching data:", e), E.value = [];
			} finally {
				I.value = !1;
			}
		}, pe = () => {
			w.value = !0, V.value = T.value, W.value = !0, T.value = "", A.value.length === 0 ? de() : (E.value = A.value, M.value && !E.value.find((e) => e.value === M.value.value) && (E.value = [M.value, ...E.value])), B.value && B.value.select();
		}, me = () => {
			setTimeout(() => {
				w.value = !1, W.value = !0, v ? T.value = "" : y.value && q.value ? T.value = q.value.label : y.value || (T.value = ""), V.value = "";
			}, 200);
		};
		le(T, (e) => {
			if (W.value) {
				W.value = !1;
				return;
			}
			let t = e.trim();
			t && !ee.value ? (fe(t), ee.value = !1) : E.value = A.value;
		}, { debounce: 500 });
		let he = n, ge = (e, t) => {
			if (t && (t.preventDefault(), t.stopPropagation()), v) {
				W.value = !0, K.value = !0, X.value.includes(e.value) ? (y.value = X.value.filter((t) => t !== e.value), F.value = F.value.filter((t) => t.value !== e.value)) : (y.value = [...X.value, e.value], F.value.find((t) => t.value === e.value) || F.value.push(e)), T.value = "", E.value = A.value, he("select", e);
				let t = j.value.get(e.value);
				t !== void 0 && he("data", t), B.value && B.value.focus();
				return;
			}
			W.value = !0, y.value = e.value, T.value = e.label, M.value = e, w.value = !1, B.value && B.value.blur(), he("select", e);
			let n = j.value.get(e.value);
			n !== void 0 && he("data", n);
		}, _e = (e) => {
			let t = e.target;
			R.value && !R.value.contains(t) && (w.value = !1);
		};
		D(() => {
			if (document.addEventListener("click", _e), v) {
				ie();
				return;
			}
			y.value && y.value !== "" ? ve(y.value) : y.value && q.value && (T.value = q.value.label, M.value = q.value);
		}), O(() => {
			document.removeEventListener("click", _e);
		}), J(y, (e, t) => {
			if (v) {
				if (K.value) {
					K.value = !1;
					return;
				}
				ie();
				return;
			}
			e && e !== t ? q.value && q.value.value === e ? (T.value = q.value.label, M.value ||= q.value) : (!M.value || M.value.value !== e) && ve(e) : e || (T.value = "", M.value = null);
		});
		let ve = async (e) => {
			ee.value = !0, await de();
			let t = E.value.find((t) => t.value === e);
			if (t) W.value = !0, T.value = t.label, M.value = t;
			else {
				let t = r.url.includes("?") ? "&" : "?", n = `${r.url}${t}filter[${r.valueKey}]=${e}`;
				try {
					let { data: e } = await x(n);
					if (e.value) {
						let t = Array.isArray(e.value) ? e.value : e.value.data || [];
						if (t.length > 0) {
							let e = ue(t[0]);
							E.value = [e, ...E.value], A.value = [e, ...A.value], M.value = e, W.value = !0, T.value = e.label;
						}
					}
				} catch (e) {
					console.error("Error fetching item by ID:", e);
				}
			}
			ee.value = !1;
		};
		return (n, r) => {
			let i = ur, m = lr;
			return k(), s("div", {
				class: "relative",
				ref_key: "selectRef",
				ref: R
			}, [
				c("div", fr, [
					ne(c("input", {
						id: H(f),
						ref_key: "inputRef",
						ref: B,
						"onUpdate:modelValue": r[0] ||= (e) => _(T) ? T.value = e : null,
						onFocus: pe,
						onBlur: me,
						placeholder: H(l),
						name: C,
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
							H(p) ? "py-2" : "py-3"
						]),
						disabled: e.disabled
					}, null, 42, pr), [[G, H(T)]]),
					e.leftIcon ? (k(), s("div", mr, [(k(), a(L(e.leftIcon), { class: S([H(p) ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400"]) }, null, 8, ["class"]))])) : o("", !0),
					c("div", hr, [(k(), a(L(H(pn)), { class: S([
						H(p) ? "h-4 w-4" : "h-5 w-5",
						"text-gray-400 dark:text-gray-400 transition-transform duration-200",
						H(w) ? "rotate-180" : ""
					]) }, null, 8, ["class"]))])
				]),
				H(v) && H(F).length ? (k(), s("div", gr, [(k(!0), s(t, null, P(H(F), (e) => (k(), s("span", {
					key: e.value,
					class: "inline-flex items-center gap-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1"
				}, [u(z(e.label) + " ", 1), c("button", {
					type: "button",
					onClick: (t) => ae(e.value),
					class: "hover:text-primary-900 dark:hover:text-primary-100"
				}, [d(H(Dn), { class: "h-4 w-4" })], 8, _r)]))), 128))])) : o("", !0),
				d(m, null, {
					default: Y(() => [H(w) ? (k(), s("div", {
						key: 0,
						class: S(H(te))
					}, [H(I) ? (k(), s("div", vr, [d(i)])) : H(E).length === 0 ? (k(), s("div", yr, " No se encontraron datos ")) : (k(), s("div", br, [(k(!0), s(t, null, P(H(E), (e) => (k(), s("div", {
						key: e.value,
						onClick: (t) => ge(e, t),
						class: S(["rounded-lg p-3 border cursor-pointer transition-colors", {
							"border-primary-500 bg-primary-100 dark:bg-primary-900/20 hover:bg-primary-200 dark:hover:bg-primary-900/30": Z(e),
							"bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700": !Z(e)
						}])
					}, [c("div", Sr, [c("div", Cr, [e.icon ? (k(), a(L(e.icon), {
						key: 0,
						class: "w-5 h-5 text-gray-600 dark:text-gray-400"
					})) : o("", !0), c("div", wr, [c("span", Tr, z(e.label), 1), (k(!0), s(t, null, P(e.subtitles, (e, t) => (k(), s("span", {
						key: t,
						class: "text-xs text-gray-500 dark:text-gray-400"
					}, z(e), 1))), 128))])]), Z(e) ? (k(), s("div", Er, [d(H(fn), { class: "h-6 w-6" })])) : o("", !0)])], 10, xr))), 128))]))], 2)) : o("", !0)]),
					_: 1
				})
			], 512);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/vee-validate@4.15.1_vue@3.5.41_typescript@6.0.3_/node_modules/vee-validate/dist/vee-validate.mjs
function Or(e) {
	return typeof e == "function";
}
function kr(e) {
	return e == null;
}
var Ar = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function jr(e) {
	return Number(e) >= 0;
}
function Mr(e) {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}
function Nr(e) {
	return typeof e == "object" && !!e;
}
function Pr(e) {
	return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function Fr(e) {
	if (!Nr(e) || Pr(e) !== "[object Object]") return !1;
	if (Object.getPrototypeOf(e) === null) return !0;
	let t = e;
	for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t;
}
function Ir(e, t) {
	return Object.keys(t).forEach((n) => {
		if (Fr(t[n]) && Fr(e[n])) {
			e[n] || (e[n] = {}), Ir(e[n], t[n]);
			return;
		}
		e[n] = t[n];
	}), e;
}
function Lr(e) {
	let t = e.split(".");
	if (!t.length) return "";
	let n = String(t[0]);
	for (let e = 1; e < t.length; e++) {
		if (jr(t[e])) {
			n += `[${t[e]}]`;
			continue;
		}
		n += `.${t[e]}`;
	}
	return n;
}
var Rr = {};
function zr(e) {
	return Rr[e];
}
function Br(e, t, n) {
	typeof n.value == "object" && (n.value = Vr(n.value)), !n.enumerable || n.get || n.set || !n.configurable || !n.writable || t === "__proto__" ? Object.defineProperty(e, t, n) : e[t] = n.value;
}
function Vr(e) {
	if (typeof e != "object") return e;
	var t = 0, n, r, i, a = Object.prototype.toString.call(e);
	if (a === "[object Object]" ? i = Object.create(e.__proto__ || null) : a === "[object Array]" ? i = Array(e.length) : a === "[object Set]" ? (i = /* @__PURE__ */ new Set(), e.forEach(function(e) {
		i.add(Vr(e));
	})) : a === "[object Map]" ? (i = /* @__PURE__ */ new Map(), e.forEach(function(e, t) {
		i.set(Vr(t), Vr(e));
	})) : a === "[object Date]" ? i = /* @__PURE__ */ new Date(+e) : a === "[object RegExp]" ? i = new RegExp(e.source, e.flags) : a === "[object DataView]" ? i = new e.constructor(Vr(e.buffer)) : a === "[object ArrayBuffer]" ? i = e.slice(0) : a.slice(-6) === "Array]" && (i = new e.constructor(e)), i) {
		for (r = Object.getOwnPropertySymbols(e); t < r.length; t++) Br(i, r[t], Object.getOwnPropertyDescriptor(e, r[t]));
		for (t = 0, r = Object.getOwnPropertyNames(e); t < r.length; t++) Object.hasOwnProperty.call(i, n = r[t]) && i[n] === e[n] || Br(i, n, Object.getOwnPropertyDescriptor(e, n));
	}
	return i || e;
}
var Hr = Symbol("vee-validate-form"), Ur = Symbol("vee-validate-form-context"), Wr = Symbol("vee-validate-field-instance"), Gr = Symbol("Default empty value"), Kr = typeof window < "u";
function qr(e) {
	return Or(e) && !!e.__locatorRef;
}
function Jr(e) {
	return !!e && Or(e.parse) && e.__type === "VVTypedSchema";
}
function Yr(e) {
	return !!e && Or(e.validate);
}
function Xr(e) {
	return e === "checkbox" || e === "radio";
}
function Zr(e) {
	return Ar(e) || Array.isArray(e);
}
function Qr(e) {
	return Array.isArray(e) ? e.length === 0 : Ar(e) && Object.keys(e).length === 0;
}
function $r(e) {
	return /^\[.+\]$/i.test(e);
}
function ei(e) {
	return ti(e) && e.multiple;
}
function ti(e) {
	return e.tagName === "SELECT";
}
function ni(e, t) {
	let n = ![
		!1,
		null,
		void 0,
		0
	].includes(t.multiple) && !Number.isNaN(t.multiple);
	return e === "select" && "multiple" in t && n;
}
function ri(e, t) {
	return !ni(e, t) && t.type !== "file" && !Xr(t.type);
}
function ii(e) {
	return ai(e) && e.target && "submit" in e.target;
}
function ai(e) {
	return e ? 
	/* istanbul ignore next */
	!!(typeof Event < "u" && Or(Event) && e instanceof Event || e && e.srcElement) : !1;
}
function oi(e, t) {
	return t in e && e[t] !== Gr;
}
function si(e, t) {
	if (e === t) return !0;
	if (e && t && typeof e == "object" && typeof t == "object") {
		if (e.constructor !== t.constructor) return !1;
		var n, r, i;
		if (Array.isArray(e)) {
			if (n = e.length, n != t.length) return !1;
			for (r = n; r-- !== 0;) if (!si(e[r], t[r])) return !1;
			return !0;
		}
		if (e instanceof Map && t instanceof Map) {
			if (e.size !== t.size) return !1;
			for (r of e.entries()) if (!t.has(r[0])) return !1;
			for (r of e.entries()) if (!si(r[1], t.get(r[0]))) return !1;
			return !0;
		}
		if (li(e) && li(t)) return e.size === t.size && e.name === t.name && e.lastModified === t.lastModified && e.type === t.type;
		if (e instanceof Set && t instanceof Set) {
			if (e.size !== t.size) return !1;
			for (r of e.entries()) if (!t.has(r[0])) return !1;
			return !0;
		}
		if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
			if (n = e.length, n != t.length) return !1;
			for (r = n; r-- !== 0;) if (e[r] !== t[r]) return !1;
			return !0;
		}
		if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
		if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
		if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
		if (e = ci(e), t = ci(t), i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!Object.prototype.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			var a = i[r];
			if (!si(e[a], t[a])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function ci(e) {
	return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0));
}
function li(e) {
	return Kr ? e instanceof File : !1;
}
function ui(e) {
	return $r(e) ? e.replace(/\[|\]/gi, "") : e;
}
function di(e, t, n) {
	return e ? $r(t) ? e[ui(t)] : (t || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((e, t) => Zr(e) && t in e ? e[t] : n, e) : n;
}
function fi(e, t, n) {
	if ($r(t)) {
		e[ui(t)] = n;
		return;
	}
	let r = t.split(/\.|\[(\d+)\]/).filter(Boolean), i = e;
	for (let e = 0; e < r.length; e++) {
		if (e === r.length - 1) {
			i[r[e]] = n;
			return;
		}
		(!(r[e] in i) || kr(i[r[e]])) && (i[r[e]] = jr(r[e + 1]) ? [] : {}), i = i[r[e]];
	}
}
function pi(e, t) {
	if (Array.isArray(e) && jr(t)) {
		e.splice(Number(t), 1);
		return;
	}
	Ar(e) && delete e[t];
}
function mi(e, t) {
	if ($r(t)) {
		delete e[ui(t)];
		return;
	}
	let n = t.split(/\.|\[(\d+)\]/).filter(Boolean), r = e;
	for (let e = 0; e < n.length; e++) {
		if (e === n.length - 1) {
			pi(r, n[e]);
			break;
		}
		if (!(n[e] in r) || kr(r[n[e]])) break;
		r = r[n[e]];
	}
	let i = n.map((t, r) => di(e, n.slice(0, r).join(".")));
	for (let t = i.length - 1; t >= 0; t--) if (Qr(i[t])) {
		if (t === 0) {
			pi(e, n[0]);
			continue;
		}
		pi(i[t - 1], n[t - 1]);
	}
}
function hi(e) {
	return Object.keys(e);
}
function gi(e, t = void 0) {
	return p()?.provides[e] || g(e, t);
}
function _i(e) {
	q(`[vee-validate]: ${e}`);
}
function vi(e, t, n) {
	if (Array.isArray(e)) {
		let n = [...e], r = n.findIndex((e) => si(e, t));
		return r >= 0 ? n.splice(r, 1) : n.push(t), n;
	}
	return si(e, t) ? n : t;
}
function yi(e, t) {
	let n, r;
	return function(...i) {
		let a = this;
		return n || (n = !0, setTimeout(() => n = !1, t), r = e.apply(a, i)), r;
	};
}
function bi(e, t = 0) {
	let n = null, r = [];
	return function(...i) {
		return n && clearTimeout(n), n = setTimeout(() => {
			let t = e(...i);
			r.forEach((e) => e(t)), r = [];
		}, t), new Promise((e) => r.push(e));
	};
}
function xi(e, t) {
	return Ar(t) && t.number ? Mr(e) : e;
}
function Si(e, t) {
	let n;
	return async function(...r) {
		let i = e(...r);
		n = i;
		let a = await i;
		return i === n ? (n = void 0, t(a, r)) : a;
	};
}
function Ci({ get: e, set: t }) {
	let n = N(Vr(e()));
	return J(e, (e) => {
		si(e, n.value) || (n.value = Vr(e));
	}, { deep: !0 }), J(n, (n) => {
		si(n, e()) || t(Vr(n));
	}, { deep: !0 }), n;
}
function wi(e) {
	return Array.isArray(e) ? e : e ? [e] : [];
}
function Ti(e, t) {
	let n = {};
	for (let r in e) t.includes(r) || (n[r] = e[r]);
	return n;
}
function Ei(e) {
	let t = null, n = [];
	return function(...r) {
		let i = x(() => {
			if (t !== i) return;
			let a = e(...r);
			n.forEach((e) => e(a)), n = [], t = null;
		});
		return t = i, new Promise((e) => n.push(e));
	};
}
function Di(e, t, n) {
	return t.slots.default ? typeof e == "string" || !e ? t.slots.default(n()) : { default: () => {
		var e;
		return (e = t.slots).default?.call(e, n());
	} } : t.slots.default;
}
function Oi(e) {
	if (ki(e)) return e._value;
}
function ki(e) {
	return "_value" in e;
}
function Ai(e) {
	return e.type === "number" || e.type === "range" ? Number.isNaN(e.valueAsNumber) ? e.value : e.valueAsNumber : e.value;
}
function ji(e) {
	if (!ai(e)) return e;
	let t = e.target;
	if (Xr(t.type) && ki(t)) return Oi(t);
	if (t.type === "file" && t.files) {
		let e = Array.from(t.files);
		return t.multiple ? e : e[0];
	}
	if (ei(t)) return Array.from(t.options).filter((e) => e.selected && !e.disabled).map(Oi);
	if (ti(t)) {
		let e = Array.from(t.options).find((e) => e.selected);
		return e ? Oi(e) : t.value;
	}
	return Ai(t);
}
function Mi(e) {
	let t = {};
	return Object.defineProperty(t, "_$$isNormalized", {
		value: !0,
		writable: !1,
		enumerable: !1,
		configurable: !1
	}), e ? Ar(e) && e._$$isNormalized ? e : Ar(e) ? Object.keys(e).reduce((t, n) => {
		let r = Ni(e[n]);
		return e[n] !== !1 && (t[n] = Pi(r)), t;
	}, t) : 
	/* istanbul ignore if */
	typeof e == "string" ? e.split("|").reduce((e, t) => {
		let n = Fi(t);
		return n.name && (e[n.name] = Pi(n.params)), e;
	}, t) : t : t;
}
function Ni(e) {
	return e === !0 ? [] : Array.isArray(e) || Ar(e) ? e : [e];
}
function Pi(e) {
	let t = (e) => typeof e == "string" && e[0] === "@" ? Ii(e.slice(1)) : e;
	return Array.isArray(e) ? e.map(t) : e instanceof RegExp ? [e] : Object.keys(e).reduce((n, r) => (n[r] = t(e[r]), n), {});
}
var Fi = (e) => {
	let t = [], n = e.split(":")[0];
	return e.includes(":") && (t = e.split(":").slice(1).join(":").split(",")), {
		name: n,
		params: t
	};
};
function Ii(e) {
	let t = (t) => di(t, e) ?? t[e];
	return t.__locatorRef = e, t;
}
function Li(e) {
	return Array.isArray(e) ? e.filter(qr) : hi(e).filter((t) => qr(e[t])).map((t) => e[t]);
}
var Ri = Object.assign({}, {
	generateMessage: ({ field: e }) => `${e} is not valid.`,
	bails: !0,
	validateOnBlur: !0,
	validateOnChange: !0,
	validateOnInput: !1,
	validateOnModelUpdate: !0
}), zi = () => Ri;
async function Bi(e, t, n = {}) {
	let r = n?.bails, i = await Vi({
		name: n?.name || "{field}",
		rules: t,
		label: n?.label,
		bails: r ?? !0,
		formData: n?.values || {}
	}, e);
	return Object.assign(Object.assign({}, i), { valid: !i.errors.length });
}
async function Vi(e, t) {
	let n = e.rules;
	if (Jr(n) || Yr(n)) return Wi(t, Object.assign(Object.assign({}, e), { rules: n }));
	if (Or(n) || Array.isArray(n)) {
		let r = {
			field: e.label || e.name,
			name: e.name,
			label: e.label,
			form: e.formData,
			value: t
		}, i = Array.isArray(n) ? n : [n], a = i.length, o = [];
		for (let n = 0; n < a; n++) {
			let a = i[n], s = await a(t, r);
			if (!(typeof s != "string" && !Array.isArray(s) && s)) {
				if (Array.isArray(s)) o.push(...s);
				else {
					let e = typeof s == "string" ? s : Ki(r);
					o.push(e);
				}
				if (e.bails) return { errors: o };
			}
		}
		return { errors: o };
	}
	let r = Object.assign(Object.assign({}, e), { rules: Mi(n) }), i = [], a = Object.keys(r.rules), o = a.length;
	for (let n = 0; n < o; n++) {
		let o = a[n], s = await Gi(r, t, {
			name: o,
			params: r.rules[o]
		});
		if (s.error && (i.push(s.error), e.bails)) return { errors: i };
	}
	return { errors: i };
}
function Hi(e) {
	return !!e && e.name === "ValidationError";
}
function Ui(e) {
	return {
		__type: "VVTypedSchema",
		async parse(t, n) {
			try {
				return {
					output: await e.validate(t, {
						abortEarly: !1,
						context: n?.formData || {}
					}),
					errors: []
				};
			} catch (e) {
				if (!Hi(e)) throw e;
				if (!e.inner?.length && e.errors.length) return { errors: [{
					path: e.path,
					errors: e.errors
				}] };
				let t = e.inner.reduce((e, t) => {
					let n = t.path || "";
					return e[n] || (e[n] = {
						errors: [],
						path: n
					}), e[n].errors.push(...t.errors), e;
				}, {});
				return { errors: Object.values(t) };
			}
		}
	};
}
async function Wi(e, t) {
	let n = await (Jr(t.rules) ? t.rules : Ui(t.rules)).parse(e, { formData: t.formData }), r = [];
	for (let e of n.errors) e.errors.length && r.push(...e.errors);
	return {
		value: n.value,
		errors: r
	};
}
async function Gi(e, t, n) {
	let r = zr(n.name);
	if (!r) throw Error(`No such validator '${n.name}' exists.`);
	let i = qi(n.params, e.formData), a = {
		field: e.label || e.name,
		name: e.name,
		label: e.label,
		value: t,
		form: e.formData,
		rule: Object.assign(Object.assign({}, n), { params: i })
	}, o = await r(t, i, a);
	return typeof o == "string" ? { error: o } : { error: o ? void 0 : Ki(a) };
}
function Ki(e) {
	let t = zi().generateMessage;
	return t ? t(e) : "Field is invalid";
}
function qi(e, t) {
	let n = (e) => qr(e) ? e(t) : e;
	return Array.isArray(e) ? e.map(n) : Object.keys(e).reduce((t, r) => (t[r] = n(e[r]), t), {});
}
async function Ji(e, t) {
	let n = await (Jr(e) ? e : Ui(e)).parse(Vr(t), { formData: Vr(t) }), r = {}, i = {};
	for (let e of n.errors) {
		let t = e.errors, n = (e.path || "").replace(/\["(\d+)"\]/g, (e, t) => `[${t}]`);
		r[n] = {
			valid: !t.length,
			errors: t
		}, t.length && (i[n] = t[0]);
	}
	return {
		valid: !n.errors.length,
		results: r,
		errors: i,
		values: n.value,
		source: "schema"
	};
}
async function Yi(e, t, n) {
	let r = hi(e).map(async (r) => {
		let i = n?.names?.[r], a = await Bi(di(t, r), e[r], {
			name: i?.name || r,
			label: i?.label,
			values: t,
			bails: n?.bailsMap?.[r] ?? !0
		});
		return Object.assign(Object.assign({}, a), { path: r });
	}), i = !0, a = await Promise.all(r), o = {}, s = {};
	for (let e of a) o[e.path] = {
		valid: e.valid,
		errors: e.errors
	}, e.valid || (i = !1, s[e.path] = e.errors[0]);
	return {
		valid: i,
		results: o,
		errors: s,
		source: "schema"
	};
}
var Xi = 0;
function Zi(e, t) {
	let { value: n, initialValue: r, setInitialValue: a } = Qi(e, t.modelValue, t.form);
	if (!t.form) {
		let { errors: i, setErrors: o } = ta(), s = Xi >= 2 ** 53 - 1 ? 0 : ++Xi, c = ea(n, r, i, t.schema);
		function l(e) {
			"value" in e && (n.value = e.value), "errors" in e && o(e.errors), "touched" in e && (c.touched = e.touched ?? c.touched), "initialValue" in e && a(e.initialValue);
		}
		return {
			id: s,
			path: e,
			value: n,
			initialValue: r,
			meta: c,
			flags: {
				pendingUnmount: { [s]: !1 },
				pendingReset: !1
			},
			errors: i,
			setState: l
		};
	}
	let o = t.form.createPathState(e, {
		bails: t.bails,
		label: t.label,
		type: t.type,
		validate: t.validate,
		schema: t.schema
	}), s = i(() => o.errors);
	function c(r) {
		var i, o;
		"value" in r && (n.value = r.value), "errors" in r && ((i = t.form) == null || i.setFieldError(H(e), r.errors)), "touched" in r && ((o = t.form) == null || o.setFieldTouched(H(e), r.touched ?? !1)), "initialValue" in r && a(r.initialValue);
	}
	return {
		id: Array.isArray(o.id) ? o.id[o.id.length - 1] : o.id,
		path: e,
		value: n,
		errors: s,
		meta: o,
		initialValue: r,
		flags: o.__flags,
		setState: c
	};
}
function Qi(e, t, n) {
	let r = N(H(t));
	function a() {
		return n ? di(n.initialValues.value, H(e), H(r)) : H(r);
	}
	function o(t) {
		if (!n) {
			r.value = t;
			return;
		}
		n.setFieldInitialValue(H(e), t, !0);
	}
	let s = i(a);
	if (!n) return {
		value: N(a()),
		initialValue: s,
		setInitialValue: o
	};
	let c = $i(t, n, s, e);
	return n.stageInitialValue(H(e), c, !0), {
		value: i({
			get() {
				return di(n.values, H(e));
			},
			set(t) {
				n.setFieldValue(H(e), t, !1);
			}
		}),
		initialValue: s,
		setInitialValue: o
	};
}
function $i(e, t, n, r) {
	return _(e) ? H(e) : e === void 0 ? di(t.values, H(r), H(n)) : e;
}
function ea(e, t, n, r) {
	let a = i(() => {
		var e;
		return ((e = V(r))?.describe)?.call(e).required ?? !1;
	}), o = j({
		touched: !1,
		pending: !1,
		valid: !0,
		required: a,
		validated: !!H(n).length,
		initialValue: i(() => H(t)),
		dirty: i(() => !si(H(e), H(t)))
	});
	return J(n, (e) => {
		o.valid = !e.length;
	}, {
		immediate: !0,
		flush: "sync"
	}), o;
}
function ta() {
	let e = N([]);
	return {
		errors: e,
		setErrors: (t) => {
			e.value = wi(t);
		}
	};
}
var na = {}, ra = {}, ia = "vee-validate-inspector", aa = {
	error: 12405579,
	success: 448379,
	unknown: 5522283,
	white: 16777215,
	black: 0,
	blue: 218007,
	purple: 12157168,
	orange: 16099682,
	gray: 12304330
}, oa = null, sa;
async function ca(e) {
	if (process.env.NODE_ENV !== "production") {
		if (!Kr) return;
		(await import("./dist-C8MdAbK2.js")).setupDevtoolsPlugin({
			id: "vee-validate-devtools-plugin",
			label: "VeeValidate Plugin",
			packageName: "vee-validate",
			homepage: "https://vee-validate.logaretm.com/v4",
			app: e,
			logo: "https://vee-validate.logaretm.com/v4/logo.png"
		}, (e) => {
			sa = e, e.addInspector({
				id: ia,
				icon: "rule",
				label: "vee-validate",
				noSelectionText: "Select a vee-validate node to inspect",
				actions: [{
					icon: "done_outline",
					tooltip: "Validate selected item",
					action: async () => {
						if (!oa) {
							console.error("There is not a valid selected vee-validate node or component");
							return;
						}
						if (oa.type === "field") {
							await oa.field.validate();
							return;
						}
						if (oa.type === "form") {
							await oa.form.validate();
							return;
						}
						oa.type === "pathState" && await oa.form.validateField(oa.state.path);
					}
				}, {
					icon: "delete_sweep",
					tooltip: "Clear validation state of the selected item",
					action: () => {
						if (!oa) {
							console.error("There is not a valid selected vee-validate node or component");
							return;
						}
						if (oa.type === "field") {
							oa.field.resetField();
							return;
						}
						oa.type === "form" && oa.form.resetForm(), oa.type === "pathState" && oa.form.resetField(oa.state.path);
					}
				}]
			}), e.on.getInspectorTree((e) => {
				if (e.inspectorId !== ia) return;
				let t = Object.values(na), n = Object.values(ra);
				e.rootNodes = [...t.map(fa), ...n.map((e) => ma(e))];
			}), e.on.getInspectorState((t) => {
				if (t.inspectorId !== ia) return;
				let { form: n, field: r, state: i, type: a } = _a(t.nodeId);
				if (e.unhighlightElement(), n && a === "form") {
					t.state = ya(n), oa = {
						type: "form",
						form: n
					}, e.highlightElement(n._vm);
					return;
				}
				if (i && a === "pathState" && n) {
					t.state = va(i), oa = {
						type: "pathState",
						state: i,
						form: n
					};
					return;
				}
				if (r && a === "field") {
					t.state = va({
						errors: r.errors.value,
						dirty: r.meta.dirty,
						valid: r.meta.valid,
						touched: r.meta.touched,
						value: r.value.value,
						initialValue: r.meta.initialValue
					}), oa = {
						field: r,
						type: "field"
					}, e.highlightElement(r._vm);
					return;
				}
				oa = null, e.unhighlightElement();
			});
		});
	}
}
var la = yi(() => {
	setTimeout(async () => {
		await x(), sa?.sendInspectorState(ia), sa?.sendInspectorTree(ia);
	}, 100);
}, 100);
function ua(e) {
	let t = p();
	if (!sa) {
		let e = t?.appContext.app;
		if (!e) return;
		ca(e);
	}
	na[e.formId] = Object.assign({}, e), na[e.formId]._vm = t, O(() => {
		delete na[e.formId], la();
	}), la();
}
function da(e) {
	let t = p();
	if (!sa) {
		let e = t?.appContext.app;
		if (!e) return;
		ca(e);
	}
	ra[e.id] = Object.assign({}, e), ra[e.id]._vm = t, O(() => {
		delete ra[e.id], la();
	}), la();
}
function fa(e) {
	let { textColor: t, bgColor: n } = ba(e.meta.value.valid), r = {};
	Object.values(e.getAllPathStates()).forEach((t) => {
		fi(r, V(t.path), pa(t, e));
	});
	function i(e, t = []) {
		let n = [...t].pop();
		return "id" in e ? Object.assign(Object.assign({}, e), { label: n || e.label }) : Ar(e) ? {
			id: `${t.join(".")}`,
			label: n || "",
			children: Object.keys(e).map((n) => i(e[n], [...t, n]))
		} : Array.isArray(e) ? {
			id: `${t.join(".")}`,
			label: `${n}[]`,
			children: e.map((e, n) => i(e, [...t, String(n)]))
		} : {
			id: "",
			label: "",
			children: []
		};
	}
	let { children: a } = i(r);
	return {
		id: ga(e),
		label: e.name,
		children: a,
		tags: [{
			label: "Form",
			textColor: t,
			backgroundColor: n
		}, {
			label: `${e.getAllPathStates().length} fields`,
			textColor: aa.white,
			backgroundColor: aa.unknown
		}]
	};
}
function pa(e, t) {
	return {
		id: ga(t, e),
		label: V(e.path),
		tags: ha(e.multiple, e.fieldsCount, e.type, e.valid, t)
	};
}
function ma(e, t) {
	return {
		id: ga(t, e),
		label: H(e.name),
		tags: ha(!1, 1, e.type, e.meta.valid, t)
	};
}
function ha(e, t, n, r, i) {
	let { textColor: a, bgColor: o } = ba(r);
	return [
		e ? void 0 : {
			label: "Field",
			textColor: a,
			backgroundColor: o
		},
		i ? void 0 : {
			label: "Standalone",
			textColor: aa.black,
			backgroundColor: aa.gray
		},
		n === "checkbox" ? {
			label: "Checkbox",
			textColor: aa.white,
			backgroundColor: aa.blue
		} : void 0,
		n === "radio" ? {
			label: "Radio",
			textColor: aa.white,
			backgroundColor: aa.purple
		} : void 0,
		e ? {
			label: "Multiple",
			textColor: aa.black,
			backgroundColor: aa.orange
		} : void 0
	].filter(Boolean);
}
function ga(e, t) {
	let n = t ? "path" in t ? "pathState" : "field" : "form", r = t ? "path" in t ? t?.path : V(t?.name) : "", i = {
		f: e?.formId,
		ff: t?.id || r,
		type: n
	};
	return btoa(encodeURIComponent(JSON.stringify(i)));
}
function _a(e) {
	try {
		let t = JSON.parse(decodeURIComponent(atob(e))), n = na[t.f];
		if (!n && t.ff) {
			let e = ra[t.ff];
			return e ? {
				type: t.type,
				field: e
			} : {};
		}
		if (!n) return {};
		let r = n.getPathState(t.ff);
		return {
			type: t.type,
			form: n,
			state: r
		};
	} catch {}
	return {};
}
function va(e) {
	return { "Field state": [
		{
			key: "errors",
			value: e.errors
		},
		{
			key: "initialValue",
			value: e.initialValue
		},
		{
			key: "currentValue",
			value: e.value
		},
		{
			key: "touched",
			value: e.touched
		},
		{
			key: "dirty",
			value: e.dirty
		},
		{
			key: "valid",
			value: e.valid
		}
	] };
}
function ya(e) {
	let { errorBag: t, meta: n, values: r, isSubmitting: i, isValidating: a, submitCount: o } = e;
	return { "Form state": [
		{
			key: "submitCount",
			value: o.value
		},
		{
			key: "isSubmitting",
			value: i.value
		},
		{
			key: "isValidating",
			value: a.value
		},
		{
			key: "touched",
			value: n.value.touched
		},
		{
			key: "dirty",
			value: n.value.dirty
		},
		{
			key: "valid",
			value: n.value.valid
		},
		{
			key: "initialValues",
			value: n.value.initialValues
		},
		{
			key: "currentValues",
			value: r
		},
		{
			key: "errors",
			value: hi(t.value).reduce((e, n) => {
				let r = t.value[n]?.[0];
				return r && (e[n] = r), e;
			}, {})
		}
	] };
}
function ba(e) {
	return {
		bgColor: e ? aa.success : aa.error,
		textColor: e ? aa.black : aa.white
	};
}
function xa(e, t, n) {
	return Xr(n?.type) ? wa(e, t, n) : Sa(e, t, n);
}
function Sa(e, t, n) {
	let { initialValue: r, validateOnMount: a, bails: o, type: s, checkedValue: c, label: l, validateOnValueUpdate: u, uncheckedValue: d, controlled: f, keepValueOnUnmount: m, syncVModel: h, form: g } = Ca(n), v = f ? gi(Hr) : void 0, y = g || v, b = i(() => Lr(V(e))), x = i(() => {
		if (V(y?.schema)) return;
		let e = H(t);
		return Yr(e) || Jr(e) || Or(e) || Array.isArray(e) ? e : Mi(e);
	}), S = !Or(x.value) && Jr(V(t)), { id: C, value: w, initialValue: E, meta: O, setState: k, errors: j, flags: M } = Zi(b, {
		modelValue: r,
		form: y,
		bails: o,
		label: l,
		type: s,
		validate: x.value ? R : void 0,
		schema: S ? t : void 0
	}), N = i(() => j.value[0]);
	h && Ta({
		value: w,
		prop: h,
		handleChange: z,
		shouldValidate: () => u && !M.pendingReset
	});
	let P = (e, t = !1) => {
		O.touched = !0, t && I();
	};
	async function F(e) {
		if (y?.validateSchema) {
			let { results: t } = await y.validateSchema(e);
			return t[V(b)] ?? {
				valid: !0,
				errors: []
			};
		}
		return x.value ? Bi(w.value, x.value, {
			name: V(b),
			label: V(l),
			values: y?.values ?? {},
			bails: o
		}) : {
			valid: !0,
			errors: []
		};
	}
	let I = Si(async () => (O.pending = !0, O.validated = !0, F("validated-only")), (e) => M.pendingUnmount[K.id] ? e : (k({ errors: e.errors }), O.pending = !1, O.valid = e.valid, e)), L = Si(async () => F("silent"), (e) => (O.valid = e.valid, e));
	function R(e) {
		return e?.mode === "silent" ? L() : I();
	}
	function z(e, t = !0) {
		W(ji(e), t);
	}
	D(() => {
		if (a) return I();
		(!y || !y.validateSchema) && L();
	});
	function B(e) {
		O.touched = e;
	}
	function U(e) {
		let t = e && "value" in e ? e.value : E.value;
		k({
			value: Vr(t),
			initialValue: Vr(t),
			touched: e?.touched ?? !1,
			errors: e?.errors || []
		}), O.pending = !1, O.validated = !1, L();
	}
	let ee = p();
	function W(e, t = !0) {
		w.value = ee && h ? xi(e, ee.props.modelModifiers) : e, (t ? I : L)();
	}
	function G(e) {
		k({ errors: Array.isArray(e) ? e : [e] });
	}
	let K = {
		id: C,
		name: b,
		label: l,
		value: i({
			get() {
				return w.value;
			},
			set(e) {
				W(e, u);
			}
		}),
		meta: O,
		errors: j,
		errorMessage: N,
		type: s,
		checkedValue: c,
		uncheckedValue: d,
		bails: o,
		keepValueOnUnmount: m,
		resetField: U,
		handleReset: () => U(),
		validate: R,
		handleChange: z,
		handleBlur: P,
		setState: k,
		setTouched: B,
		setErrors: G,
		setValue: W
	};
	if (A(Wr, K), _(t) && typeof H(t) != "function" && J(t, (e, t) => {
		si(e, t) || (O.validated ? I() : L());
	}, { deep: !0 }), process.env.NODE_ENV !== "production" && (K._vm = p(), J(() => Object.assign(Object.assign({ errors: j.value }, O), { value: w.value }), la, { deep: !0 }), y || da(K)), !y) return K;
	let q = i(() => {
		let e = x.value;
		return !e || Or(e) || Yr(e) || Jr(e) || Array.isArray(e) ? {} : Object.keys(e).reduce((t, n) => {
			let r = Li(e[n]).map((e) => e.__locatorRef).reduce((e, t) => {
				let n = di(y.values, t) || y.values[t];
				return n !== void 0 && (e[t] = n), e;
			}, {});
			return Object.assign(t, r), t;
		}, {});
	});
	return J(q, (e, t) => {
		Object.keys(e).length && (si(e, t) || (O.validated ? I() : L()));
	}), T(() => {
		let e = V(K.keepValueOnUnmount) ?? V(y.keepValuesOnUnmount), t = V(b);
		if (e || !y || M.pendingUnmount[K.id]) {
			y?.removePathState(t, C);
			return;
		}
		M.pendingUnmount[K.id] = !0;
		let n = y.getPathState(t);
		if (Array.isArray(n?.id) && n?.multiple ? n?.id.includes(K.id) : n?.id === K.id) {
			if (n?.multiple && Array.isArray(n.value)) {
				let e = n.value.findIndex((e) => si(e, V(K.checkedValue)));
				if (e > -1) {
					let r = [...n.value];
					r.splice(e, 1), y.setFieldValue(t, r);
				}
				Array.isArray(n.id) && n.id.splice(n.id.indexOf(K.id), 1);
			} else y.unsetPathValue(V(b));
			y.removePathState(t, C);
		}
	}), K;
}
function Ca(e) {
	let t = () => ({
		initialValue: void 0,
		validateOnMount: !1,
		bails: !0,
		label: void 0,
		validateOnValueUpdate: !0,
		keepValueOnUnmount: void 0,
		syncVModel: !1,
		controlled: !0
	}), n = !!e?.syncVModel, r = typeof e?.syncVModel == "string" ? e.syncVModel : e?.modelPropName || "modelValue", i = n && !("initialValue" in (e || {})) ? Ea(p(), r) : e?.initialValue;
	if (!e) return Object.assign(Object.assign({}, t()), { initialValue: i });
	let a = "valueProp" in e ? e.valueProp : e.checkedValue, o = "standalone" in e ? !e.standalone : e.controlled, s = e?.modelPropName || e?.syncVModel || !1;
	return Object.assign(Object.assign(Object.assign({}, t()), e || {}), {
		initialValue: i,
		controlled: o ?? !0,
		checkedValue: a,
		syncVModel: s
	});
}
function wa(e, t, n) {
	let r = n?.standalone ? void 0 : gi(Hr), a = n?.checkedValue, o = n?.uncheckedValue;
	function s(t) {
		let s = t.handleChange, c = i(() => {
			let e = V(t.value), n = V(a);
			return Array.isArray(e) ? e.findIndex((e) => si(e, n)) >= 0 : si(n, e);
		});
		function l(i, l = !0) {
			if (c.value === i?.target?.checked) {
				l && t.validate();
				return;
			}
			let u = V(e), d = r?.getPathState(u), f = ji(i), p = V(a) ?? f;
			r && d?.multiple && d.type === "checkbox" ? p = vi(di(r.values, u) || [], p, void 0) : n?.type === "checkbox" && (p = vi(V(t.value), p, V(o))), s(p, l);
		}
		return Object.assign(Object.assign({}, t), {
			checked: c,
			checkedValue: a,
			uncheckedValue: o,
			handleChange: l
		});
	}
	return s(Sa(e, t, n));
}
function Ta({ prop: e, value: t, handleChange: n, shouldValidate: r }) {
	let i = p();
	/* istanbul ignore next */
	if (!i || !e) {
		process.env.NODE_ENV !== "production" && console.warn("Failed to setup model events because `useField` was not called in setup.");
		return;
	}
	let a = typeof e == "string" ? e : "modelValue", o = `update:${a}`;
	a in i.props && (J(t, (e) => {
		si(e, Ea(i, a)) || i.emit(o, e);
	}), J(() => Ea(i, a), (e) => {
		if (e === Gr && t.value === void 0) return;
		let i = e === Gr ? void 0 : e;
		si(i, t.value) || n(i, r());
	}));
}
function Ea(e, t) {
	if (e) return e.props[t];
}
var Da = f({
	name: "Field",
	inheritAttrs: !1,
	props: {
		as: {
			type: [String, Object],
			default: void 0
		},
		name: {
			type: String,
			required: !0
		},
		rules: {
			type: [
				Object,
				String,
				Function
			],
			default: void 0
		},
		validateOnMount: {
			type: Boolean,
			default: !1
		},
		validateOnBlur: {
			type: Boolean,
			default: void 0
		},
		validateOnChange: {
			type: Boolean,
			default: void 0
		},
		validateOnInput: {
			type: Boolean,
			default: void 0
		},
		validateOnModelUpdate: {
			type: Boolean,
			default: void 0
		},
		bails: {
			type: Boolean,
			default: () => zi().bails
		},
		label: {
			type: String,
			default: void 0
		},
		uncheckedValue: {
			type: null,
			default: void 0
		},
		modelValue: {
			type: null,
			default: Gr
		},
		modelModifiers: {
			type: null,
			default: () => ({})
		},
		"onUpdate:modelValue": {
			type: null,
			default: void 0
		},
		standalone: {
			type: Boolean,
			default: !1
		},
		keepValue: {
			type: Boolean,
			default: void 0
		}
	},
	setup(e, t) {
		let n = B(e, "rules"), r = B(e, "name"), a = B(e, "label"), o = B(e, "uncheckedValue"), s = B(e, "keepValue"), { errors: c, value: l, errorMessage: u, validate: d, handleChange: f, handleBlur: p, setTouched: m, resetField: g, handleReset: _, meta: v, checked: y, setErrors: b, setValue: x } = xa(r, n, {
			validateOnMount: e.validateOnMount,
			bails: e.bails,
			standalone: e.standalone,
			type: t.attrs.type,
			initialValue: Aa(e, t),
			checkedValue: t.attrs.value,
			uncheckedValue: o,
			label: a,
			validateOnValueUpdate: e.validateOnModelUpdate,
			keepValueOnUnmount: s,
			syncVModel: !0
		}), S = function(e, t = !0) {
			f(e, t);
		}, C = i(() => {
			let { validateOnInput: n, validateOnChange: r, validateOnBlur: i, validateOnModelUpdate: a } = ka(e);
			function o(e) {
				p(e, i), Or(t.attrs.onBlur) && t.attrs.onBlur(e);
			}
			function s(e) {
				S(e, n), Or(t.attrs.onInput) && t.attrs.onInput(e);
			}
			function c(e) {
				S(e, r), Or(t.attrs.onChange) && t.attrs.onChange(e);
			}
			let l = {
				name: e.name,
				onBlur: o,
				onInput: s,
				onChange: c
			};
			return l["onUpdate:modelValue"] = (e) => S(e, a), l;
		}), w = i(() => {
			let n = Object.assign({}, C.value);
			return Xr(t.attrs.type) && y && (n.checked = y.value), ri(Oa(e, t), t.attrs) && (n.value = l.value), n;
		}), T = i(() => Object.assign(Object.assign({}, C.value), { modelValue: l.value }));
		function E() {
			return {
				field: w.value,
				componentField: T.value,
				value: l.value,
				meta: v,
				errors: c.value,
				errorMessage: u.value,
				validate: d,
				resetField: g,
				handleChange: S,
				handleInput: (e) => S(e, !1),
				handleReset: _,
				handleBlur: C.value.onBlur,
				setTouched: m,
				setErrors: b,
				setValue: x
			};
		}
		return t.expose({
			value: l,
			meta: v,
			errors: c,
			errorMessage: u,
			setErrors: b,
			setTouched: m,
			setValue: x,
			reset: g,
			validate: d,
			handleChange: f
		}), () => {
			let n = L(Oa(e, t)), r = Di(n, t, E);
			return n ? h(n, Object.assign(Object.assign({}, t.attrs), w.value), r) : r;
		};
	}
});
function Oa(e, t) {
	let n = e.as || "";
	return !e.as && !t.slots.default && (n = "input"), n;
}
function ka(e) {
	let { validateOnInput: t, validateOnChange: n, validateOnBlur: r, validateOnModelUpdate: i } = zi();
	return {
		validateOnInput: e.validateOnInput ?? t,
		validateOnChange: e.validateOnChange ?? n,
		validateOnBlur: e.validateOnBlur ?? r,
		validateOnModelUpdate: e.validateOnModelUpdate ?? i
	};
}
function Aa(e, t) {
	return Xr(t.attrs.type) ? oi(e, "modelValue") ? e.modelValue : void 0 : oi(e, "modelValue") ? e.modelValue : t.attrs.value;
}
var ja = Da, Ma = 0, Na = [
	"bails",
	"fieldsCount",
	"id",
	"multiple",
	"type",
	"validate"
];
function Pa(e) {
	let t = e?.initialValues || {}, n = Object.assign({}, V(t)), r = H(e?.validationSchema);
	return r && Jr(r) && Or(r.cast) ? Vr(r.cast(n) || {}) : Vr(n);
}
function Fa(e) {
	let t = Ma++, n = e?.name || "Form", r = 0, a = N(!1), o = N(!1), s = N(0), c = [], l = j(Pa(e)), u = N([]), d = N({}), f = N({}), p = Ei(() => {
		f.value = u.value.reduce((e, t) => (e[Lr(V(t.path))] = t, e), {});
	});
	function m(e, t) {
		let n = U(e);
		if (!n) {
			typeof e == "string" && (d.value[Lr(e)] = wi(t));
			return;
		}
		if (typeof e == "string") {
			let t = Lr(e);
			d.value[t] && delete d.value[t];
		}
		n.errors = wi(t), n.valid = !n.errors.length;
	}
	function h(e) {
		hi(e).forEach((t) => {
			m(t, e[t]);
		});
	}
	e?.initialErrors && h(e.initialErrors);
	let g = i(() => {
		let e = u.value.reduce((e, t) => (t.errors.length && (e[V(t.path)] = t.errors), e), {});
		return Object.assign(Object.assign({}, d.value), e);
	}), v = i(() => hi(g.value).reduce((e, t) => {
		let n = g.value[t];
		return n?.length && (e[t] = n[0]), e;
	}, {})), y = i(() => u.value.reduce((e, t) => (e[V(t.path)] = {
		name: V(t.path) || "",
		label: t.label || ""
	}, e), {})), b = i(() => u.value.reduce((e, t) => (e[V(t.path)] = t.bails ?? !0, e), {})), S = Object.assign({}, e?.initialErrors || {}), C = e?.keepValuesOnUnmount ?? !1, { initialValues: w, originalInitialValues: T, setInitialValues: E } = La(u, l, e), O = Ia(u, l, T, v), k = i(() => u.value.reduce((e, t) => {
		let n = di(l, V(t.path));
		return fi(e, V(t.path), n), e;
	}, {})), P = e?.validationSchema;
	function F(e, t) {
		let n = i(() => di(w.value, V(e))), a = f.value[V(e)], o = t?.type === "checkbox" || t?.type === "radio";
		if (a && o) {
			a.multiple = !0;
			let e = r++;
			return Array.isArray(a.id) ? a.id.push(e) : a.id = [a.id, e], a.fieldsCount++, a.__flags.pendingUnmount[e] = !1, a;
		}
		let s = i(() => di(l, V(e))), c = V(e), d = W.findIndex((e) => e === c);
		d !== -1 && W.splice(d, 1);
		let m = i(() => {
			let n = V(P);
			if (Jr(n)) return n.describe?.call(n, V(e)).required ?? !1;
			let r = V(t?.schema);
			return Jr(r) ? r.describe?.call(r).required ?? !1 : !1;
		}), h = r++, g = j({
			id: h,
			path: e,
			touched: !1,
			pending: !1,
			valid: !0,
			validated: !!S[c]?.length,
			required: m,
			initialValue: n,
			errors: R([]),
			bails: t?.bails ?? !1,
			label: t?.label,
			type: t?.type || "default",
			value: s,
			multiple: !1,
			__flags: {
				pendingUnmount: { [h]: !1 },
				pendingReset: !1
			},
			fieldsCount: 1,
			validate: t?.validate,
			dirty: i(() => !si(H(s), H(n)))
		});
		return u.value.push(g), f.value[c] = g, p(), v.value[c] && !S[c] && x(() => {
			he(c, { mode: "silent" });
		}), _(e) && J(e, (e) => {
			p();
			let t = Vr(s.value);
			f.value[e] = g, x(() => {
				fi(l, e, t);
			});
		}), g;
	}
	let I = bi(ye, 5), L = bi(ye, 5), z = Si(async (e) => await (e === "silent" ? I() : L()), (e, [t]) => {
		let n = hi(Z.errorBag.value), r = [.../* @__PURE__ */ new Set([
			...hi(e.results),
			...u.value.map((e) => e.path),
			...n
		])].sort().reduce((n, r) => {
			let i = r, a = U(i) || ee(i), o = e.results[i]?.errors || [], s = V(a?.path) || i, c = Ra({
				errors: o,
				valid: !o.length
			}, n.results[s]);
			return n.results[s] = c, c.valid || (n.errors[s] = c.errors[0]), a && d.value[s] && delete d.value[s], a ? (a.valid = c.valid, t === "silent" || t === "validated-only" && !a.validated || m(a, c.errors), n) : (m(s, o), n);
		}, {
			valid: e.valid,
			results: {},
			errors: {},
			source: e.source
		});
		return e.values && (r.values = e.values, r.source = e.source), hi(r.results).forEach((e) => {
			let n = U(e);
			n && t !== "silent" && (t === "validated-only" && !n.validated || m(n, r.results[e]?.errors));
		}), r;
	});
	function B(e) {
		u.value.forEach(e);
	}
	function U(e) {
		let t = typeof e == "string" ? Lr(e) : e;
		return typeof t == "string" ? f.value[t] : t;
	}
	function ee(e) {
		return u.value.filter((t) => e.startsWith(V(t.path))).reduce((e, t) => e ? t.path.length > e.path.length ? t : e : t, void 0);
	}
	let W = [], G;
	function K(e) {
		return W.push(e), G ||= x(() => {
			[...W].sort().reverse().forEach((e) => {
				mi(l, e);
			}), W = [], G = null;
		}), G;
	}
	function te(e) {
		return function(t, n) {
			return function(r) {
				return r instanceof Event && (r.preventDefault(), r.stopPropagation()), B((e) => e.touched = !0), a.value = !0, s.value++, me().then((i) => {
					let a = Vr(l);
					if (i.valid && typeof t == "function") {
						let n = Vr(k.value), o = e ? n : a;
						return i.values && (o = i.source === "schema" ? i.values : Object.assign({}, o, i.values)), t(o, {
							evt: r,
							controlledValues: n,
							setErrors: h,
							setFieldError: m,
							setTouched: de,
							setFieldTouched: se,
							setValues: ae,
							setFieldValue: re,
							resetForm: pe,
							resetField: fe
						});
					}
					!i.valid && typeof n == "function" && n({
						values: a,
						evt: r,
						errors: i.errors,
						results: i.results
					});
				}).then((e) => (a.value = !1, e), (e) => {
					throw a.value = !1, e;
				});
			};
		};
	}
	let Y = te(!1);
	Y.withControlled = te(!0);
	function ne(e, t) {
		let n = u.value.findIndex((n) => n.path === e && (Array.isArray(n.id) ? n.id.includes(t) : n.id === t)), r = u.value[n];
		if (!(n === -1 || !r)) {
			if (x(() => {
				he(e, {
					mode: "silent",
					warn: !1
				});
			}), r.multiple && r.fieldsCount && r.fieldsCount--, Array.isArray(r.id)) {
				let e = r.id.indexOf(t);
				e >= 0 && r.id.splice(e, 1), delete r.__flags.pendingUnmount[t];
			}
			(!r.multiple || r.fieldsCount <= 0) && (u.value.splice(n, 1), ge(e), p(), delete f.value[e]);
		}
	}
	function X(e) {
		hi(f.value).forEach((t) => {
			t.startsWith(e) && delete f.value[t];
		}), u.value = u.value.filter((t) => !t.path.startsWith(e)), x(() => {
			p();
		});
	}
	let Z = {
		name: n,
		formId: t,
		values: l,
		controlledValues: k,
		errorBag: g,
		errors: v,
		schema: P,
		submitCount: s,
		meta: O,
		isSubmitting: a,
		isValidating: o,
		fieldArrays: c,
		keepValuesOnUnmount: C,
		validateSchema: H(P) ? z : void 0,
		validate: me,
		setFieldError: m,
		validateField: he,
		setFieldValue: re,
		setValues: ae,
		setErrors: h,
		setFieldTouched: se,
		setTouched: de,
		resetForm: pe,
		resetField: fe,
		handleSubmit: Y,
		useFieldModel: Se,
		defineInputBinds: Ce,
		defineComponentBinds: we,
		defineField: xe,
		stageInitialValue: _e,
		unsetInitialValue: ge,
		setFieldInitialValue: ve,
		createPathState: F,
		getPathState: U,
		unsetPathValue: K,
		removePathState: ne,
		initialValues: w,
		getAllPathStates: () => u.value,
		destroyPath: X,
		isFieldTouched: ce,
		isFieldDirty: le,
		isFieldValid: ue
	};
	function re(e, t, n = !0) {
		let r = Vr(t), i = typeof e == "string" ? e : e.path;
		U(i) || F(i), fi(l, i, r), n && he(i);
	}
	function ie(e, t = !0) {
		hi(l).forEach((e) => {
			delete l[e];
		}), hi(e).forEach((t) => {
			re(t, e[t], !1);
		}), t && me();
	}
	function ae(e, t = !0) {
		Ir(l, e), c.forEach((e) => e && e.reset()), t && me();
	}
	function oe(e, t) {
		let n = U(V(e)) || F(e);
		return i({
			get() {
				return n.value;
			},
			set(n) {
				re(V(e), n, V(t) ?? !1);
			}
		});
	}
	function se(e, t) {
		let n = U(e);
		n && (n.touched = t);
	}
	function ce(e) {
		let t = U(e);
		return t ? t.touched : u.value.filter((t) => t.path.startsWith(e)).some((e) => e.touched);
	}
	function le(e) {
		let t = U(e);
		return t ? t.dirty : u.value.filter((t) => t.path.startsWith(e)).some((e) => e.dirty);
	}
	function ue(e) {
		let t = U(e);
		return t ? t.valid : u.value.filter((t) => t.path.startsWith(e)).every((e) => e.valid);
	}
	function de(e) {
		if (typeof e == "boolean") {
			B((t) => {
				t.touched = e;
			});
			return;
		}
		hi(e).forEach((t) => {
			se(t, !!e[t]);
		});
	}
	function fe(e, t) {
		let n = t && "value" in t ? t.value : di(w.value, e), r = U(e);
		r && (r.__flags.pendingReset = !0), ve(e, Vr(n), !0), re(e, n, !1), se(e, t?.touched ?? !1), m(e, t?.errors || []), x(() => {
			r && (r.__flags.pendingReset = !1);
		});
	}
	function pe(e, t) {
		let n = Vr(e?.values ? e.values : T.value);
		n = t?.force ? n : Ir(T.value, n), n = Jr(P) && Or(P.cast) ? P.cast(n) : n, E(n, { force: t?.force }), B((t) => {
			t.__flags.pendingReset = !0, t.validated = !1, t.touched = e?.touched?.[V(t.path)] || !1, re(V(t.path), di(n, V(t.path)), !1), m(V(t.path), void 0);
		}), t?.force ? ie(n, !1) : ae(n, !1), h(e?.errors || {}), s.value = e?.submitCount || 0, x(() => {
			me({ mode: "silent" }), B((e) => {
				e.__flags.pendingReset = !1;
			});
		});
	}
	async function me(e) {
		let t = e?.mode || "force";
		if (t === "force" && B((e) => e.validated = !0), Z.validateSchema) return Z.validateSchema(t);
		o.value = !0;
		let n = await Promise.all(u.value.map((t) => t.validate ? t.validate(e).then((e) => ({
			key: V(t.path),
			valid: e.valid,
			errors: e.errors,
			value: e.value
		})) : Promise.resolve({
			key: V(t.path),
			valid: !0,
			errors: [],
			value: void 0
		})));
		o.value = !1;
		let r = {}, i = {}, a = {};
		for (let e of n) r[e.key] = {
			valid: e.valid,
			errors: e.errors
		}, e.value && fi(a, e.key, e.value), e.errors.length && (i[e.key] = e.errors[0]);
		return {
			valid: n.every((e) => e.valid),
			results: r,
			errors: i,
			values: a,
			source: "fields"
		};
	}
	async function he(e, t) {
		let n = U(e);
		if (n && t?.mode !== "silent" && (n.validated = !0), P) {
			let { results: n } = await z(t?.mode || "validated-only");
			return n[e] || {
				errors: [],
				valid: !0
			};
		}
		return n?.validate ? n.validate(t) : (!n && (t?.warn ?? !0) && process.env.NODE_ENV !== "production" && q(`field with path ${e} was not found`), Promise.resolve({
			errors: [],
			valid: !0
		}));
	}
	function ge(e) {
		mi(w.value, e);
	}
	function _e(t, n, r = !1) {
		ve(t, n), fi(l, t, n), r && !e?.initialValues && fi(T.value, t, Vr(n));
	}
	function ve(e, t, n = !1) {
		fi(w.value, e, Vr(t)), n && fi(T.value, e, Vr(t));
	}
	async function ye() {
		let e = H(P);
		if (!e) return {
			valid: !0,
			results: {},
			errors: {},
			source: "none"
		};
		o.value = !0;
		let t = Yr(e) || Jr(e) ? await Ji(e, l) : await Yi(e, l, {
			names: y.value,
			bailsMap: b.value
		});
		return o.value = !1, t;
	}
	let be = Y((e, { evt: t }) => {
		ii(t) && t.target.submit();
	});
	D(() => {
		if (e?.initialErrors && h(e.initialErrors), e?.initialTouched && de(e.initialTouched), e?.validateOnMount) {
			me();
			return;
		}
		Z.validateSchema && Z.validateSchema("silent");
	}), _(P) && J(P, () => {
		var e;
		(e = Z.validateSchema) == null || e.call(Z, "validated-only");
	}), A(Hr, Z), process.env.NODE_ENV !== "production" && (ua(Z), J(() => Object.assign(Object.assign({ errors: g.value }, O.value), {
		values: l,
		isSubmitting: a.value,
		isValidating: o.value,
		submitCount: s.value
	}), la, { deep: !0 }));
	function xe(e, t) {
		let n = Or(t) ? void 0 : t?.label, r = U(V(e)) || F(e, { label: n }), a = () => Or(t) ? t(Ti(r, Na)) : t || {};
		function o() {
			r.touched = !0, (a().validateOnBlur ?? zi().validateOnBlur) && he(V(r.path));
		}
		function s() {
			(a().validateOnInput ?? zi().validateOnInput) && x(() => {
				he(V(r.path));
			});
		}
		function c() {
			(a().validateOnChange ?? zi().validateOnChange) && x(() => {
				he(V(r.path));
			});
		}
		let l = i(() => {
			let e = {
				onChange: c,
				onInput: s,
				onBlur: o
			};
			return Or(t) ? Object.assign(Object.assign({}, e), t(Ti(r, Na)).props || {}) : t?.props ? Object.assign(Object.assign({}, e), t.props(Ti(r, Na))) : e;
		});
		return [oe(e, () => a().validateOnModelUpdate ?? zi()?.validateOnModelUpdate ?? !0), l];
	}
	function Se(e) {
		return Array.isArray(e) ? e.map((e) => oe(e, !0)) : oe(e);
	}
	function Ce(e, t) {
		let [n, r] = xe(e, t);
		function a() {
			r.value.onBlur();
		}
		function o(t) {
			let n = ji(t);
			re(V(e), n, !1), r.value.onInput();
		}
		function s(t) {
			let n = ji(t);
			re(V(e), n, !1), r.value.onChange();
		}
		return i(() => Object.assign(Object.assign({}, r.value), {
			onBlur: a,
			onInput: o,
			onChange: s,
			value: n.value
		}));
	}
	function we(e, t) {
		let [n, r] = xe(e, t), a = U(V(e));
		function o(e) {
			n.value = e;
		}
		return i(() => {
			let e = Or(t) ? t(Ti(a, Na)) : t || {};
			return Object.assign({
				[e.model || "modelValue"]: n.value,
				[`onUpdate:${e.model || "modelValue"}`]: o
			}, r.value);
		});
	}
	let Te = Object.assign(Object.assign({}, Z), {
		values: M(l),
		handleReset: () => pe(),
		submitForm: be
	});
	return A(Ur, Te), Te;
}
function Ia(e, t, n, r) {
	let a = {
		touched: "some",
		pending: "some",
		valid: "every"
	}, o = i(() => !si(t, H(n)));
	function s() {
		let t = e.value;
		return hi(a).reduce((e, n) => {
			let r = a[n];
			return e[n] = t[r]((e) => e[n]), e;
		}, {});
	}
	let c = j(s());
	return te(() => {
		let e = s();
		c.touched = e.touched, c.valid = e.valid, c.pending = e.pending;
	}), i(() => Object.assign(Object.assign({ initialValues: H(n) }, c), {
		valid: c.valid && !hi(r.value).length,
		dirty: o.value
	}));
}
function La(e, t, n) {
	let r = Pa(n), i = N(r), a = N(Vr(r));
	function o(n, r) {
		r?.force ? (i.value = Vr(n), a.value = Vr(n)) : (i.value = Ir(Vr(i.value) || {}, Vr(n)), a.value = Ir(Vr(a.value) || {}, Vr(n))), r?.updateFields && e.value.forEach((e) => {
			if (e.touched) return;
			let n = di(i.value, V(e.path));
			fi(t, V(e.path), Vr(n));
		});
	}
	return {
		initialValues: i,
		originalInitialValues: a,
		setInitialValues: o
	};
}
function Ra(e, t) {
	return t ? {
		valid: e.valid && t.valid,
		errors: [...e.errors, ...t.errors]
	} : e;
}
var za = f({
	name: "Form",
	inheritAttrs: !1,
	props: {
		as: {
			type: null,
			default: "form"
		},
		validationSchema: {
			type: Object,
			default: void 0
		},
		initialValues: {
			type: Object,
			default: void 0
		},
		initialErrors: {
			type: Object,
			default: void 0
		},
		initialTouched: {
			type: Object,
			default: void 0
		},
		validateOnMount: {
			type: Boolean,
			default: !1
		},
		onSubmit: {
			type: Function,
			default: void 0
		},
		onInvalidSubmit: {
			type: Function,
			default: void 0
		},
		keepValues: {
			type: Boolean,
			default: !1
		},
		name: {
			type: String,
			default: "Form"
		}
	},
	setup(e, t) {
		let n = B(e, "validationSchema"), r = B(e, "keepValues"), { errors: i, errorBag: a, values: o, meta: s, isSubmitting: c, isValidating: l, submitCount: u, controlledValues: d, validate: f, validateField: p, handleReset: m, resetForm: g, handleSubmit: _, setErrors: v, setFieldError: y, setFieldValue: b, setValues: x, setFieldTouched: S, setTouched: C, resetField: w } = Fa({
			validationSchema: n.value ? n : void 0,
			initialValues: e.initialValues,
			initialErrors: e.initialErrors,
			initialTouched: e.initialTouched,
			validateOnMount: e.validateOnMount,
			keepValuesOnUnmount: r,
			name: e.name
		}), T = _((e, { evt: t }) => {
			ii(t) && t.target.submit();
		}, e.onInvalidSubmit), E = e.onSubmit ? _(e.onSubmit, e.onInvalidSubmit) : T;
		function D(e) {
			ai(e) && e.preventDefault(), m(), typeof t.attrs.onReset == "function" && t.attrs.onReset();
		}
		function O(t, n) {
			return _(typeof t == "function" && !n ? t : n, e.onInvalidSubmit)(t);
		}
		function k() {
			return Vr(o);
		}
		function A() {
			return Vr(s.value);
		}
		function j() {
			return Vr(i.value);
		}
		function M() {
			return {
				meta: s.value,
				errors: i.value,
				errorBag: a.value,
				values: o,
				isSubmitting: c.value,
				isValidating: l.value,
				submitCount: u.value,
				controlledValues: d.value,
				validate: f,
				validateField: p,
				handleSubmit: O,
				handleReset: m,
				submitForm: T,
				setErrors: v,
				setFieldError: y,
				setFieldValue: b,
				setValues: x,
				setFieldTouched: S,
				setTouched: C,
				resetForm: g,
				resetField: w,
				getValues: k,
				getMeta: A,
				getErrors: j
			};
		}
		return t.expose({
			setFieldError: y,
			setErrors: v,
			setFieldValue: b,
			setValues: x,
			setFieldTouched: S,
			setTouched: C,
			resetForm: g,
			validate: f,
			validateField: p,
			resetField: w,
			getValues: k,
			getMeta: A,
			getErrors: j,
			values: o,
			meta: s,
			errors: i
		}), function() {
			let n = e.as === "form" ? e.as : e.as ? L(e.as) : null, r = Di(n, t, M);
			return n ? h(n, Object.assign(Object.assign(Object.assign({}, n === "form" ? { novalidate: !0 } : {}), t.attrs), {
				onSubmit: E,
				onReset: D
			}), r) : r;
		};
	}
});
function Ba(e) {
	let t = gi(Hr, void 0), n = N([]), r = () => {}, i = {
		fields: n,
		remove: r,
		push: r,
		swap: r,
		insert: r,
		update: r,
		replace: r,
		prepend: r,
		move: r
	};
	if (!t) return process.env.NODE_ENV !== "production" && _i("FieldArray requires being a child of `<Form/>` or `useForm` being called before it. Array fields may not work correctly"), i;
	if (!H(e)) return process.env.NODE_ENV !== "production" && _i("FieldArray requires a field path to be provided, did you forget to pass the `name` prop?"), i;
	let a = t.fieldArrays.find((t) => H(t.path) === H(e));
	if (a) return a;
	let o = 0;
	function s() {
		return di(t?.values, V(e), []) || [];
	}
	function c() {
		let e = s();
		Array.isArray(e) && (n.value = e.map((e, t) => u(e, t, n.value)), l());
	}
	c();
	function l() {
		let e = n.value.length;
		for (let t = 0; t < e; t++) {
			let r = n.value[t];
			r.isFirst = t === 0, r.isLast = t === e - 1;
		}
	}
	function u(r, i, a) {
		if (a && !kr(i) && a[i]) return a[i];
		let s = o++;
		return {
			key: s,
			value: Ci({
				get() {
					let i = di(t?.values, V(e), []) || [], a = n.value.findIndex((e) => e.key === s);
					return a === -1 ? r : i[a];
				},
				set(e) {
					let t = n.value.findIndex((e) => e.key === s);
					if (t === -1) {
						process.env.NODE_ENV !== "production" && _i("Attempting to update a non-existent array item");
						return;
					}
					_(t, e);
				}
			}),
			isFirst: !1,
			isLast: !1
		};
	}
	function d() {
		l(), t?.validate({ mode: "silent" });
	}
	function f(r) {
		let i = V(e), a = di(t?.values, i);
		if (!a || !Array.isArray(a)) return;
		let o = [...a];
		o.splice(r, 1);
		let s = i + `[${r}]`;
		t.destroyPath(s), t.unsetInitialValue(s), fi(t.values, i, o), n.value.splice(r, 1), d();
	}
	function p(r) {
		let i = Vr(r), a = V(e), o = di(t?.values, a), s = kr(o) ? [] : o;
		if (!Array.isArray(s)) return;
		let c = [...s];
		c.push(i), t.stageInitialValue(a + `[${c.length - 1}]`, i), fi(t.values, a, c), n.value.push(u(i)), d();
	}
	function m(r, i) {
		let a = V(e), o = di(t?.values, a);
		if (!Array.isArray(o) || !(r in o) || !(i in o)) return;
		let s = [...o], c = [...n.value], u = s[r];
		s[r] = s[i], s[i] = u;
		let d = c[r];
		c[r] = c[i], c[i] = d, fi(t.values, a, s), n.value = c, l();
	}
	function h(r, i) {
		let a = Vr(i), o = V(e), s = di(t?.values, o);
		if (!Array.isArray(s) || s.length < r) return;
		let c = [...s], l = [...n.value];
		c.splice(r, 0, a), l.splice(r, 0, u(a)), fi(t.values, o, c), n.value = l, d();
	}
	function g(n) {
		let r = V(e);
		t.stageInitialValue(r, n), fi(t.values, r, n), c(), d();
	}
	function _(n, r) {
		let i = V(e), a = di(t?.values, i);
		!Array.isArray(a) || a.length - 1 < n || (fi(t.values, `${i}[${n}]`, r), t?.validate({ mode: "validated-only" }));
	}
	function v(r) {
		let i = Vr(r), a = V(e), o = di(t?.values, a), s = kr(o) ? [] : o;
		if (!Array.isArray(s)) return;
		let c = [i, ...s];
		fi(t.values, a, c), t.stageInitialValue(a + "[0]", i), n.value.unshift(u(i)), d();
	}
	function y(r, i) {
		let a = V(e), o = di(t?.values, a), s = kr(o) ? [] : [...o];
		if (!Array.isArray(o) || !(r in o) || !(i in o)) return;
		let c = [...n.value], l = c[r];
		c.splice(r, 1), c.splice(i, 0, l);
		let u = s[r];
		s.splice(r, 1), s.splice(i, 0, u), fi(t.values, a, s), n.value = c, d();
	}
	let b = {
		fields: n,
		remove: f,
		push: p,
		swap: m,
		insert: h,
		update: _,
		replace: g,
		prepend: v,
		move: y
	};
	return t.fieldArrays.push(Object.assign({
		path: e,
		reset: c
	}, b)), T(() => {
		let n = t.fieldArrays.findIndex((t) => V(t.path) === V(e));
		n >= 0 && t.fieldArrays.splice(n, 1);
	}), J(s, (e) => {
		si(e, n.value.map((e) => e.value)) || c();
	}), b;
}
f({
	name: "FieldArray",
	inheritAttrs: !1,
	props: { name: {
		type: String,
		required: !0
	} },
	setup(e, t) {
		let { push: n, remove: r, swap: i, insert: a, replace: o, update: s, prepend: c, move: l, fields: u } = Ba(() => e.name);
		function d() {
			return {
				fields: u.value,
				push: n,
				remove: r,
				swap: i,
				insert: a,
				update: s,
				replace: o,
				prepend: c,
				move: l
			};
		}
		return t.expose({
			push: n,
			remove: r,
			swap: i,
			insert: a,
			update: s,
			replace: o,
			prepend: c,
			move: l
		}), () => Di(void 0, t, d);
	}
});
var Va = f({
	name: "ErrorMessage",
	props: {
		as: {
			type: String,
			default: void 0
		},
		name: {
			type: String,
			required: !0
		}
	},
	setup(e, t) {
		let n = g(Hr, void 0), r = i(() => n?.errors.value[e.name]);
		function a() {
			return { message: r.value };
		}
		return () => {
			if (!r.value) return;
			let n = e.as ? L(e.as) : e.as, i = Di(n, t, a), o = Object.assign({ role: "alert" }, t.attrs);
			return !n && (Array.isArray(i) || !i) && i?.length ? i : (Array.isArray(i) || !i) && !i?.length ? h(n || "span", o, r.value) : h(n, o, i);
		};
	}
}), Ha = {
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
}, Ua = ["+", "-"], Wa = [
	"decimal",
	"thousands",
	"prefix",
	"suffix"
];
function Ga(e) {
	return Math.max(0, Math.min(e, 100));
}
function Ka(e, t) {
	return e = e.padStart(t + 1, "0"), t === 0 ? e : `${e.slice(0, -t)}.${e.slice(-t)}`;
}
function qa(e) {
	return e = e ? e.toString() : "", e.replace(/\D+/g, "") || "0";
}
function Ja(e, t) {
	return e.replace(/(\d)(?=(?:\d{3})+\b)/gm, `$1${t}`);
}
function Ya(e, t, n) {
	return t ? e + n + t : e;
}
function Xa(e, t) {
	return Ua.includes(e) ? (console.warn(`v-money3 "${t}" property don't accept "${e}" as a value.`), !1) : !/\d/g.test(e) || (console.warn(`v-money3 "${t}" property don't accept "${e}" (any number) as a value.`), !1);
}
function Za(e) {
	for (let t of Wa) if (!Xa(e[t], t)) return !1;
	return !0;
}
function Qa(e) {
	for (let t of Wa) {
		if (typeof e[t] != "string") {
			e[t] = "";
			continue;
		}
		e[t] = e[t].replace(/\d+/g, "");
		for (let n of Ua) e[t] = e[t].replaceAll(n, "");
	}
	return e;
}
function $a(e) {
	return e.length - (e.indexOf(".") + 1);
}
function eo(e) {
	return e.replace(/^(-?)0+(?!\.)(.+)/, "$1$2");
}
function to(e) {
	return /^-?[\d]+$/g.test(e);
}
function no(e) {
	return /^-?[\d]+(\.[\d]+)$/g.test(e);
}
function ro(e, t, n) {
	return t > e.length - 1 ? e : e.substring(0, t) + n + e.substring(t + 1);
}
function io(e, t) {
	let n = t - $a(e);
	if (n >= 0) return e;
	let r = e.slice(0, n), i = e.slice(n);
	if (r.charAt(r.length - 1) === "." && (r = r.slice(0, -1)), parseInt(i.charAt(0), 10) >= 5) {
		for (let e = r.length - 1; e >= 0; --e) {
			let t = r.charAt(e);
			if (t !== "." && t !== "-") {
				let n = parseInt(t, 10) + 1;
				if (n < 10) return ro(r, e, n);
				r = ro(r, e, "0");
			}
		}
		return `1${r}`;
	}
	return r;
}
function ao(e, t) {
	let n = () => {
		e === document.activeElement && e.setSelectionRange(t, t);
	};
	e === document.activeElement && (n(), setTimeout(n, 1));
}
function oo(e) {
	return new Event(e, {
		bubbles: !0,
		cancelable: !1
	});
}
function so({ debug: e = !1 }, ...t) {
	e && console.log(...t);
}
function co(e) {
	"@babel/helpers - typeof";
	return co = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, co(e);
}
function lo(e, t) {
	if (co(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (co(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function uo(e) {
	var t = lo(e, "string");
	return co(t) == "symbol" ? t : t + "";
}
function fo(e, t, n) {
	return (t = uo(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var po = class e {
	constructor(e) {
		fo(this, "number", 0n), fo(this, "decimal", 0), this.setNumber(e);
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
			if (t) return io(n, e);
			let i = n.slice(0, r);
			return i.endsWith(".") ? i.slice(0, -1) : i;
		}
		return n;
	}
	toString() {
		let e = this.number.toString();
		if (this.decimal) {
			let t = !1;
			return e.charAt(0) === "-" && (e = e.substring(1), t = !0), e = e.padStart(e.length + this.decimal, "0"), e = `${e.slice(0, -this.decimal)}.${e.slice(-this.decimal)}`, e = eo(e), (t ? "-" : "") + e;
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
		if (e = eo(e), to(e)) this.number = BigInt(e);
		else if (no(e)) this.decimal = $a(e), this.number = BigInt(e.replace(".", ""));
		else throw Error(`BigNumber has received an invalid format for the constructor: ${e}`);
	}
	adjustComparisonNumbers(t) {
		let n;
		n = t instanceof e ? t : new e(t);
		let r = this.getDecimalPrecision() - n.getDecimalPrecision(), i = this.getNumber(), a = n.getNumber();
		return r > 0 ? a = n.getNumber() * 10n ** BigInt(r) : r < 0 && (i = this.getNumber() * 10n ** BigInt(r * -1)), [i, a];
	}
};
function mo(e, t = Ha, n = "") {
	so(t, "utils format() - caller", n), so(t, "utils format() - input1", e);
	let r = Ga(t.precision);
	if ((e == null || e === "") && t.allowBlank) return "";
	if (e == null) e = "";
	else if (typeof e == "number") e = t.shouldRound ? e.toFixed(r) : e.toFixed(Math.min(r + 1, 100)).slice(0, -1);
	else if (t.modelModifiers && t.modelModifiers.number && to(e)) e = Number(e).toFixed(r);
	else if (!t.disableNegative && e === "-") return e;
	so(t, "utils format() - input2", e);
	let i = t.disableNegative ? "" : e.indexOf("-") >= 0 ? "-" : "", a = e.replace(t.prefix, "").replace(t.suffix, "");
	so(t, "utils format() - filtered", a), !r && t.thousands !== "." && no(a) && (a = io(a, 0), so(t, "utils format() - !precision && isValidFloat()", a));
	let o = qa(a);
	so(t, "utils format() - numbers", o), so(t, "utils format() - numbersToCurrency", i + Ka(o, r));
	let s = new po(i + Ka(o, r));
	so(t, "utils format() - bigNumber1", s.toString()), t.setMaxIfBigger !== !1 && t.max !== null && t.max !== void 0 && t.max !== "" && s.biggerThan(t.max) && s.setNumber(t.max), t.min !== null && t.min !== void 0 && t.min !== "" && s.lessThan(t.min) && s.setNumber(t.min), t.disableNegative && s.lessThan(0) && s.setNumber(0);
	let c = s.toFixed(r, t.shouldRound);
	if (so(t, "utils format() - bigNumber2", s.toFixed(r)), /^0(\.0+)?$/g.test(c) && t.allowBlank && t.treatZeroAsBlank) return "";
	let [l, u] = c.split("."), d = u === void 0 ? 0 : u.length, f = l.charAt(0) === "-", p = (f ? l.slice(1) : l).padStart(t.minimumNumberOfCharacters - d, "0");
	l = (f ? "-" : "") + Ja(p, t.thousands);
	let m = t.prefix + Ya(l, u, t.decimal) + t.suffix;
	return so(t, "utils format() - output", m), m;
}
function ho(e, t = Ha, n = "") {
	if (so(t, "utils unformat() - caller", n), so(t, "utils unformat() - input", e), !t.disableNegative && e === "-") return so(t, "utils unformat() - return netagive symbol", e), e;
	let r = t.disableNegative ? "" : e.indexOf("-") >= 0 ? "-" : "", i = e.replace(t.prefix, "").replace(t.suffix, "");
	so(t, "utils unformat() - filtered", i);
	let a = qa(i);
	so(t, "utils unformat() - numbers", a);
	let o = new po(r + Ka(a, t.precision));
	so(t, "utils unformat() - bigNumber1", a.toString()), t.setMaxIfBigger !== !1 && t.max !== null && t.max !== void 0 && t.max !== "" && o.biggerThan(t.max) && o.setNumber(t.max), t.min !== null && t.min !== void 0 && t.min !== "" && o.lessThan(t.min) && o.setNumber(t.min), t.disableNegative && o.lessThan(0) && o.setNumber(0);
	let s = o.toFixed(Ga(t.precision), t.shouldRound);
	return t.modelModifiers && t.modelModifiers.number && (s = parseFloat(s)), so(t, "utils unformat() - output", s), s;
}
var go = [
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
], _o = "__v_money3_last_valid__", vo = "__v_money3_is_wrapper__", yo = "__v_money3_synth__", bo = (e, t, n) => {
	if (so(t, "directive setValue() - caller", n), !Za(t)) {
		so(t, "directive setValue() - validateRestrictedOptions() return false. Stopping here...", e.value);
		return;
	}
	let r = e.value.length - (e.selectionEnd || 0), i = mo(e.value, t, n);
	if (t.setMaxIfBigger === !1 && t.max !== null && t.max !== void 0 && t.max !== "") {
		let n = ho(i, t, "directive setValue overflow check");
		if (new po(String(n)).biggerThan(t.max)) {
			let t = e[_o];
			typeof t == "string" && t !== e.value && (e.value = t);
			return;
		}
	}
	if (i === e.value) {
		let t = e[_o];
		e[_o] = i, t !== void 0 && t !== i && e.dispatchEvent(oo("change"));
		return;
	}
	if (e.value = i, e[_o] = i, r = Math.max(r, t.suffix.length), r = e.value.length - r, r = Math.max(r, t.prefix.length), ao(e, r), e.dispatchEvent(oo("change")), e[vo]) {
		let t = new Event("input", { bubbles: !1 });
		t[yo] = !0, e.dispatchEvent(t);
	}
}, xo = (e, t) => {
	let n = e.currentTarget, r = e.code === "Backspace" || e.code === "Delete", i = n.value.length - (n.selectionEnd || 0) === 0;
	so(t, "directive onkeydown() - el.value", n.value), so(t, "directive onkeydown() - backspacePressed", r), so(t, "directive onkeydown() - isAtEndPosition", i), t.allowBlank && t.treatZeroAsBlank && r && i && parseFloat(String(ho(n.value, t, "directive onkeydown allowBlank"))) === 0 && (so(t, "directive onkeydown() - set el.value = \"\"", n.value), n.value = "", n.dispatchEvent(oo("change"))), so(t, "directive onkeydown() - e.key", e.key), e.key === "+" && n.value.indexOf("-") >= 0 && (so(t, "directive onkeydown() - flipping sign on el.value", n.value), n.value = n.value.replace("-", ""), bo(n, t, "directive onkeydown +"));
}, So = (e, t) => {
	if (e[yo]) return;
	let n = e.currentTarget;
	so(t, "directive oninput()", n.value), /^[1-9]$/.test(n.value) && (n.value = Ka(n.value, Ga(t.precision)), so(t, "directive oninput() - is 1-9", n.value)), bo(n, t, "directive oninput");
}, Co = (e, t) => {
	let n = e.currentTarget;
	so(t, "directive onFocus()", n.value), t.focusOnRight && ao(n, n.value.length - t.suffix.length);
}, wo = (e) => {
	if (e.tagName.toLocaleUpperCase() !== "INPUT") {
		let t = e.getElementsByTagName("input");
		if (t.length !== 1) throw Error(`v-money3 requires 1 input, found ${t.length} elements.`);
		return t[0];
	}
	return e;
}, To = (e, t) => {
	e.onkeydown = (e) => {
		xo(e, t);
	}, e.oninput = (e) => {
		So(e, t);
	}, e.onfocus = (e) => {
		Co(e, t);
	};
};
function Eo(e, t) {
	return e ? go.some((n) => JSON.stringify(e[n]) !== JSON.stringify(t[n])) : !1;
}
var Do = "__v_money3_input__";
function Oo(e) {
	let t = e[Do];
	if (t) return t;
	let n = wo(e);
	return e[Do] = n, n;
}
var ko = {
	mounted(e, t) {
		if (!t.value) return;
		let n = Qa({
			...Ha,
			...t.value
		});
		so(n, "directive mounted() - opt", n);
		let r = Oo(e);
		r[vo] = e !== r, To(r, n), so(n, "directive mounted() - el.value", r.value), bo(r, n, "directive mounted");
	},
	updated(e, t) {
		if (!t.value) return;
		let n = Qa({
			...Ha,
			...t.value
		});
		so(n, "directive updated() - opt", n), so(n, "directive updated() - host.value", e.value);
		let r = Oo(e);
		if (r[vo] = e !== r, mo(r.value, n, "directive updated check") !== r.value) {
			if (Eo(t.oldValue ? Qa({
				...Ha,
				...t.oldValue
			}) : null, n) && r.value !== "") {
				console.warn("v-money3: runtime change of format options on the bare directive is unsupported and was skipped to avoid corrupting the value. Re-mount the directive or use the Money3 component instead.");
				return;
			}
			bo(r, n, "directive updated");
		}
	},
	beforeUnmount(e) {
		let t = e[Do] || e;
		t.onkeydown = null, t.oninput = null, t.onfocus = null, delete t[vo], delete e[Do];
	}
}, Ao = Object.defineProperty, jo = (e, t, n) => t in e ? Ao(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Mo = (e, t, n) => jo(e, typeof t == "symbol" ? t : t + "", n), No = {
	"#": { pattern: /[0-9]/ },
	"@": { pattern: /[a-zA-Z]/ },
	"*": { pattern: /[a-zA-Z0-9]/ }
}, Po = (e, t, n) => e.replaceAll(t, "").replace(n, ".").replace("..", ".").replace(/[^.\d]/g, ""), Fo = (e, t, n) => new Intl.NumberFormat(n.number?.locale ?? "en", {
	minimumFractionDigits: e,
	maximumFractionDigits: t,
	roundingMode: "trunc"
}), Io = (e, t = !0, n) => {
	let r = n.number?.unsigned !== !0 && e.startsWith("-") ? "-" : "", i = n.number?.fraction ?? 0, a = Fo(0, i, n), o = a.formatToParts(1000.12), s = o.find((e) => e.type === "group")?.value ?? " ", c = o.find((e) => e.type === "decimal")?.value ?? ".", l = Po(e, s, c);
	if (Number.isNaN(parseFloat(l))) return r;
	let u = l.split(".");
	u[1] != null && u[1].length >= 1 && (a = Fo(u[1].length <= i ? u[1].length : i, i, n));
	let d = a.format(parseFloat(l));
	return t ? i > 0 && l.endsWith(".") && !l.slice(0, -1).includes(".") && (d += c) : d = Po(d, s, c), r + d;
}, Lo = (e) => JSON.parse(e.replaceAll("'", "\"")), Ro = (e, t = {}) => {
	let n = { ...t };
	e.dataset.maska != null && e.dataset.maska !== "" && (n.mask = Bo(e.dataset.maska)), e.dataset.maskaEager != null && (n.eager = zo(e.dataset.maskaEager)), e.dataset.maskaReversed != null && (n.reversed = zo(e.dataset.maskaReversed)), e.dataset.maskaTokensReplace != null && (n.tokensReplace = zo(e.dataset.maskaTokensReplace)), e.dataset.maskaTokens != null && (n.tokens = Vo(e.dataset.maskaTokens));
	let r = {};
	return e.dataset.maskaNumberLocale != null && (r.locale = e.dataset.maskaNumberLocale), e.dataset.maskaNumberFraction != null && (r.fraction = parseInt(e.dataset.maskaNumberFraction)), e.dataset.maskaNumberUnsigned != null && (r.unsigned = zo(e.dataset.maskaNumberUnsigned)), (e.dataset.maskaNumber != null || Object.values(r).length > 0) && (n.number = r), n;
}, zo = (e) => e === "" || !!JSON.parse(e), Bo = (e) => e.startsWith("[") && e.endsWith("]") ? Lo(e) : e, Vo = (e) => {
	if (e.startsWith("{") && e.endsWith("}")) return Lo(e);
	let t = {};
	return e.split("|").forEach((e) => {
		let n = e.split(":");
		t[n[0]] = {
			pattern: Ho() ? new RegExp(n[1], "u") : new RegExp(n[1]),
			optional: n[2] === "optional",
			multiple: n[2] === "multiple",
			repeated: n[2] === "repeated"
		};
	}), t;
}, Ho = () => {
	try {
		return !0;
	} catch {
		return !1;
	}
}, Uo = class {
	constructor(e = {}) {
		Mo(this, "opts", {}), Mo(this, "memo", /* @__PURE__ */ new Map());
		let t = { ...e };
		if (t.tokens != null) {
			t.tokens = t.tokensReplace ? { ...t.tokens } : {
				...No,
				...t.tokens
			};
			for (let e of Object.values(t.tokens)) typeof e.pattern == "string" && (e.pattern = Ho() ? new RegExp(e.pattern, "u") : new RegExp(e.pattern));
		} else t.tokens = No;
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
		if (this.opts.number != null) return Io(e, n, this.opts);
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
}, Wo = class {
	constructor(e, t = {}) {
		Mo(this, "items", /* @__PURE__ */ new Map()), Mo(this, "eventAbortController"), Mo(this, "onInput", (e) => {
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
			let e = new Uo(Ro(n, t));
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
}, Go = /* @__PURE__ */ new WeakMap(), Ko = (e, t) => {
	if (e.arg == null || e.instance == null) return;
	let n = "setup" in e.instance.$.type;
	e.arg in e.instance ? e.instance[e.arg] = t : n && console.warn("Maska: please expose `%s` using defineExpose", e.arg);
}, qo = (e, t) => {
	var n;
	let r = e instanceof HTMLInputElement ? e : e.querySelector("input");
	if (r == null || r?.type === "file") return;
	let i = {};
	if (t.value != null && (i = typeof t.value == "string" ? { mask: t.value } : { ...t.value }), t.arg != null) {
		let e = (e) => {
			Ko(t, t.modifiers.unmasked ? e.unmasked : t.modifiers.completed ? e.completed : e.masked);
		};
		i.onMaska = i.onMaska == null ? e : Array.isArray(i.onMaska) ? [...i.onMaska, e] : [i.onMaska, e];
	}
	Go.has(r) ? (n = Go.get(r)) == null || n.update(i) : Go.set(r, new Wo(r, i));
}, Jo = Math.min, Yo = Math.max, Xo = Math.round, Zo = Math.floor, Qo = (e) => ({
	x: e,
	y: e
}), $o = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function es(e, t, n) {
	return Yo(e, Jo(t, n));
}
function ts(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function ns(e) {
	return e.split("-")[0];
}
function rs(e) {
	return e.split("-")[1];
}
function is(e) {
	return e === "x" ? "y" : "x";
}
function as(e) {
	return e === "y" ? "height" : "width";
}
function os(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function ss(e) {
	return is(os(e));
}
function cs(e, t, n) {
	n === void 0 && (n = !1);
	let r = rs(e), i = ss(e), a = as(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = _s(o)), [o, _s(o)];
}
function ls(e) {
	let t = _s(e);
	return [
		us(e),
		t,
		us(t)
	];
}
function us(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var ds = ["left", "right"], fs = ["right", "left"], ps = ["top", "bottom"], ms = ["bottom", "top"];
function hs(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? fs : ds : t ? ds : fs;
		case "left":
		case "right": return t ? ps : ms;
		default: return [];
	}
}
function gs(e, t, n, r) {
	let i = rs(e), a = hs(ns(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(us)))), a;
}
function _s(e) {
	let t = ns(e);
	return $o[t] + e.slice(t.length);
}
function vs(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function ys(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : vs(e);
}
function bs(e) {
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
function xs(e, t, n) {
	let { reference: r, floating: i } = e, a = os(t), o = ss(t), s = as(o), c = ns(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	let m = rs(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function Ss(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = ts(t, e), p = ys(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = bs(await i.getClippingRect({
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
	}, y = bs(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var Cs = 50, ws = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Ss
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = xs(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < Cs && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = xs(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Ts = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = ts(e, t) || {};
		if (l == null) return {};
		let d = ys(u), f = {
			x: n,
			y: r
		}, p = ss(i), m = as(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = Jo(d[_], T), D = Jo(d[v], T), O = C - h[m] - D, k = C / 2 - h[m] / 2 + w, A = es(E, k, O), j = !c.arrow && rs(i) != null && k !== A && a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0, M = j ? k < E ? k - E : k - O : 0;
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
}), Es = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = ts(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = ns(r), _ = os(o), v = ns(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [_s(o)] : ls(o)), x = p !== "none";
			!d && x && b.push(...gs(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = cs(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (u !== "alignment" || _ === os(t) || T.every((e) => os(e.placement) !== _ || e.overflows[0] > 0))) return {
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
								let t = os(e.placement);
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
}, Ds = /*#__PURE__*/ new Set(["left", "top"]);
async function Os(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = ns(n), s = rs(n), c = os(n) === "y", l = Ds.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = ts(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var ks = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Os(t, e);
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
}, As = function(e) {
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
			} }, ...l } = ts(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = os(i), p = is(f), m = u[p], h = u[f], g = (e, t) => es(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
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
function js() {
	return typeof window < "u";
}
function Ms(e) {
	return Fs(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ns(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ps(e) {
	return ((Fs(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Fs(e) {
	return js() ? e instanceof Node || e instanceof Ns(e).Node : !1;
}
function Is(e) {
	return js() ? e instanceof Element || e instanceof Ns(e).Element : !1;
}
function Ls(e) {
	return js() ? e instanceof HTMLElement || e instanceof Ns(e).HTMLElement : !1;
}
function Rs(e) {
	return !js() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ns(e).ShadowRoot;
}
function zs(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Xs(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Bs(e) {
	return /^(table|td|th)$/.test(Ms(e));
}
function Vs(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Hs = /transform|translate|scale|rotate|perspective|filter/, Us = /paint|layout|strict|content/, Ws = (e) => !!e && e !== "none", Gs;
function Ks(e) {
	let t = Is(e) ? Xs(e) : e;
	return Ws(t.transform) || Ws(t.translate) || Ws(t.scale) || Ws(t.rotate) || Ws(t.perspective) || !Js() && (Ws(t.backdropFilter) || Ws(t.filter)) || Hs.test(t.willChange || "") || Us.test(t.contain || "");
}
function qs(e) {
	let t = Qs(e);
	for (; Ls(t) && !Ys(t);) {
		if (Ks(t)) return t;
		if (Vs(t)) return null;
		t = Qs(t);
	}
	return null;
}
function Js() {
	return Gs ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Gs;
}
function Ys(e) {
	return /^(html|body|#document)$/.test(Ms(e));
}
function Xs(e) {
	return Ns(e).getComputedStyle(e);
}
function Zs(e) {
	return Is(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Qs(e) {
	if (Ms(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Rs(e) && e.host || Ps(e);
	return Rs(t) ? t.host : t;
}
function $s(e) {
	let t = Qs(e);
	return Ys(t) ? (e.ownerDocument || e).body : Ls(t) && zs(t) ? t : $s(t);
}
function ec(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = $s(e), i = r === e.ownerDocument?.body, a = Ns(r);
	if (i) {
		let e = tc(a);
		return t.concat(a, a.visualViewport || [], zs(r) ? r : [], e && n ? ec(e) : []);
	}
	return t.concat(r, ec(r, [], n));
}
function tc(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+dom@1.8.0/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function nc(e) {
	let t = Xs(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Ls(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Xo(n) !== a || Xo(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function rc(e) {
	return Is(e) ? e : e.contextElement;
}
function ic(e) {
	let t = rc(e);
	if (!Ls(t)) return Qo(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = nc(t), o = (a ? Xo(n.width) : n.width) / r, s = (a ? Xo(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var ac = /*#__PURE__*/ Qo(0);
function oc(e) {
	let t = Ns(e);
	return !Js() || !t.visualViewport ? ac : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function sc(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === Ns(e);
}
function cc(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = rc(e), o = Qo(1);
	t && (r ? Is(r) && (o = ic(r)) : o = ic(e));
	let s = sc(a, n, r) ? oc(a) : Qo(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = Ns(a), t = Is(r) ? Ns(r) : r, n = e, i = tc(n);
		for (; i && t !== n;) {
			let e = ic(i), t = i.getBoundingClientRect(), r = Xs(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Ns(i), i = tc(n);
		}
	}
	return bs({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function lc(e, t) {
	let n = Zs(e).scrollLeft;
	return t ? t.left + n : cc(Ps(e)).left + n;
}
function uc(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - lc(e, n),
		y: n.top + t.scrollTop
	};
}
function dc(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = Ps(r), s = t ? Vs(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Qo(1), u = Qo(0), d = Ls(r);
	if ((d || !a) && ((Ms(r) !== "body" || zs(o)) && (c = Zs(r)), d)) {
		let e = cc(r);
		l = ic(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? uc(o, c) : Qo(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function fc(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function pc(e) {
	let t = Zs(e), n = e.ownerDocument.body, r = Yo(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = Yo(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + lc(e), o = -t.scrollTop;
	return Xs(n).direction === "rtl" && (a += Yo(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var mc = 25;
function hc(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = Ns(e), a = Ps(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !Js() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (lc(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= mc && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function gc(e, t) {
	let n = cc(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = ic(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function _c(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = hc(e, n, t);
	else if (t === "document") r = pc(Ps(e));
	else if (Is(t)) r = gc(t, n);
	else {
		let n = oc(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return bs(r);
}
function vc(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = ec(e, [], !1).filter((e) => Is(e) && Ms(e) !== "body"), i = null, a = Xs(e).position === "fixed", o = a ? Qs(e) : e;
	for (; Is(o) && !Ys(o);) {
		let e = Xs(o), t = Ks(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = Qs(o);
	}
	return t.set(e, r), r;
}
function yc(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Vs(t) ? [] : vc(t, this._c) : [].concat(n), r], o = _c(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = _c(t, a[e], i);
		s = Yo(n.top, s), c = Jo(n.right, c), l = Jo(n.bottom, l), u = Yo(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function bc(e) {
	let { width: t, height: n } = nc(e);
	return {
		width: t,
		height: n
	};
}
function xc(e, t, n) {
	let r = Ls(t), i = Ps(t), a = n === "fixed", o = cc(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Qo(0);
	if ((r || !a) && ((Ms(t) !== "body" || zs(i)) && (s = Zs(t)), r)) {
		let e = cc(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = lc(i));
	let l = i && !r && !a ? uc(i, s) : Qo(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function Sc(e) {
	return Xs(e).position === "static";
}
function Cc(e, t) {
	if (!Ls(e) || Xs(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Ps(e) === n && (n = n.ownerDocument.body), n;
}
function wc(e, t) {
	let n = Ns(e);
	if (Vs(e)) return n;
	if (!Ls(e)) {
		let t = Qs(e);
		for (; t && !Ys(t);) {
			if (Is(t) && !Sc(t)) return t;
			t = Qs(t);
		}
		return n;
	}
	let r = Cc(e, t);
	for (; r && Bs(r) && Sc(r);) r = Cc(r, t);
	return r && Ys(r) && Sc(r) && !Ks(r) ? n : r || qs(e) || n;
}
var Tc = async function(e) {
	let t = this.getOffsetParent || wc, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: xc(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Ec(e) {
	return Xs(e).direction === "rtl";
}
var Dc = {
	convertOffsetParentRelativeRectToViewportRelativeRect: dc,
	getDocumentElement: Ps,
	getClippingRect: yc,
	getOffsetParent: wc,
	getElementRects: Tc,
	getClientRects: fc,
	getDimensions: bc,
	getScale: ic,
	isElement: Is,
	isRTL: Ec
};
function Oc(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function kc(e, t, n) {
	let r = null, i, a = Ps(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = Zo(d), h = Zo(a.clientWidth - (u + f)), g = Zo(a.clientHeight - (d + p)), _ = Zo(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Yo(0, Jo(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!Oc(l, e.getBoundingClientRect())) return s();
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
	let c = Ns(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function Ac(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = rc(e), u = i || a ? [...l ? ec(l) : [], ...t ? ec(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? kc(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? cc(e) : null;
	c && g();
	function g() {
		let t = cc(e);
		h && !Oc(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var jc = ks, Mc = As, Nc = Es, Pc = Ts, Fc = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...Dc,
		...i.platform,
		_c: r
	};
	return ws(e, t, {
		...i,
		platform: a
	});
}, Ic = /* @__PURE__ */ _e({
	Vue: () => e,
	Vue2: () => void 0,
	del: () => Bc,
	install: () => Rc,
	isVue2: () => !1,
	isVue3: () => !0,
	set: () => zc
});
import * as Lc from "vue";
ye(Ic, Lc);
function Rc() {}
function zc(e, t, n) {
	return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function Bc(e, t) {
	if (Array.isArray(e)) {
		e.splice(t, 1);
		return;
	}
	delete e[t];
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+vue@1.1.11_vue@3.5.41_typescript@6.0.3_/node_modules/@floating-ui/vue/dist/floating-ui.vue.mjs
function Vc(e) {
	return typeof e == "object" && !!e && "$el" in e;
}
function Hc(e) {
	if (Vc(e)) {
		let t = e.$el;
		return Fs(t) && Ms(t) === "#comment" ? null : t;
	}
	return e;
}
function Uc(e) {
	return typeof e == "function" ? e() : (0, Ic.unref)(e);
}
function Wc(e) {
	return {
		name: "arrow",
		options: e,
		fn(t) {
			let n = Hc(Uc(e.element));
			return n == null ? {} : Pc({
				element: n,
				padding: e.padding
			}).fn(t);
		}
	};
}
function Gc(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Kc(e, t) {
	let n = Gc(e);
	return Math.round(t * n) / n;
}
function qc(e, t, n) {
	n === void 0 && (n = {});
	let r = n.whileElementsMounted, i = (0, Ic.computed)(() => Uc(n.open) ?? !0), a = (0, Ic.computed)(() => Uc(n.middleware)), o = (0, Ic.computed)(() => Uc(n.placement) ?? "bottom"), s = (0, Ic.computed)(() => Uc(n.strategy) ?? "absolute"), c = (0, Ic.computed)(() => Uc(n.transform) ?? !0), l = (0, Ic.computed)(() => Hc(e.value)), u = (0, Ic.computed)(() => Hc(t.value)), d = (0, Ic.ref)(0), f = (0, Ic.ref)(0), p = (0, Ic.ref)(s.value), m = (0, Ic.ref)(o.value), h = (0, Ic.shallowRef)({}), g = (0, Ic.ref)(!1), _ = (0, Ic.computed)(() => {
		let e = {
			position: p.value,
			left: "0",
			top: "0"
		};
		if (!u.value) return e;
		let t = Kc(u.value, d.value), n = Kc(u.value, f.value);
		return c.value ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...Gc(u.value) >= 1.5 && { willChange: "transform" }
		} : {
			position: p.value,
			left: t + "px",
			top: n + "px"
		};
	}), v;
	function y() {
		if (l.value == null || u.value == null) return;
		let e = i.value;
		Fc(l.value, u.value, {
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
	return (0, Ic.watch)([
		a,
		o,
		s,
		i
	], y, { flush: "sync" }), (0, Ic.watch)([l, u], x, { flush: "sync" }), (0, Ic.watch)(i, S, { flush: "sync" }), (0, Ic.getCurrentScope)() && (0, Ic.onScopeDispose)(b), {
		x: (0, Ic.shallowReadonly)(d),
		y: (0, Ic.shallowReadonly)(f),
		strategy: (0, Ic.shallowReadonly)(p),
		placement: (0, Ic.shallowReadonly)(m),
		middlewareData: (0, Ic.shallowReadonly)(h),
		isPositioned: (0, Ic.shallowReadonly)(g),
		floatingStyles: _,
		update: y
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/constants.js
var Jc = 365.2425, Yc = 6048e5, Xc = 864e5, Zc = 6e4, Qc = 36e5, $c = 1e3, el = 86400;
el * 7, el * Jc / 12 * 3;
var tl = Symbol.for("constructDateFrom");
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/constructFrom.js
function nl(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && tl in e ? e[tl](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/toDate.js
function Q(e, t) {
	return nl(t || e, e);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/addDays.js
function rl(e, t, n) {
	let r = Q(e, n?.in);
	return isNaN(t) ? nl(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/addMonths.js
function il(e, t, n) {
	let r = Q(e, n?.in);
	if (isNaN(t)) return nl(n?.in || e, NaN);
	if (!t) return r;
	let i = r.getDate(), a = nl(n?.in || e, r.getTime());
	return a.setMonth(r.getMonth() + t + 1, 0), i >= a.getDate() ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), i), r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/add.js
function al(e, t, n) {
	let { years: r = 0, months: i = 0, weeks: a = 0, days: o = 0, hours: s = 0, minutes: c = 0, seconds: l = 0 } = t, u = Q(e, n?.in), d = i || r ? il(u, i + r * 12) : u, f = o || a ? rl(d, o + a * 7) : d, p = (l + (c + s * 60) * 60) * 1e3;
	return nl(n?.in || e, +f + p);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/defaultOptions.js
var ol = {};
function sl() {
	return ol;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfWeek.js
function cl(e, t) {
	let n = sl(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = Q(e, t?.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
	return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfISOWeek.js
function ll(e, t) {
	return cl(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getISOWeekYear.js
function ul(e, t) {
	let n = Q(e, t?.in), r = n.getFullYear(), i = nl(n, 0);
	i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
	let a = ll(i), o = nl(n, 0);
	o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
	let s = ll(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function dl(e) {
	let t = Q(e), n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
	return n.setUTCFullYear(t.getFullYear()), e - +n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/normalizeDates.js
function fl(e, ...t) {
	let n = nl.bind(null, e || t.find((e) => typeof e == "object"));
	return t.map(n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfDay.js
function pl(e, t) {
	let n = Q(e, t?.in);
	return n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInCalendarDays.js
function ml(e, t, n) {
	let [r, i] = fl(n?.in, e, t), a = pl(r), o = pl(i), s = +a - dl(a), c = +o - dl(o);
	return Math.round((s - c) / Xc);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfISOWeekYear.js
function hl(e, t) {
	let n = ul(e, t), r = nl(t?.in || e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), ll(r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/addQuarters.js
function gl(e, t, n) {
	return il(e, t * 3, n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/addYears.js
function _l(e, t, n) {
	return il(e, t * 12, n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/compareAsc.js
function vl(e, t) {
	let n = Q(e) - +Q(t);
	return n < 0 ? -1 : n > 0 ? 1 : n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isDate.js
function yl(e) {
	return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isValid.js
function bl(e) {
	return !(!yl(e) && typeof e != "number" || isNaN(+Q(e)));
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getQuarter.js
function xl(e, t) {
	let n = Q(e, t?.in);
	return Math.trunc(n.getMonth() / 3) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInCalendarYears.js
function Sl(e, t, n) {
	let [r, i] = fl(n?.in, e, t);
	return r.getFullYear() - i.getFullYear();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/getRoundingMethod.js
function Cl(e) {
	return (t) => {
		let n = (e ? Math[e] : Math.trunc)(t);
		return n === 0 ? 0 : n;
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInYears.js
function wl(e, t, n) {
	let [r, i] = fl(n?.in, e, t), a = vl(r, i), o = Math.abs(Sl(r, i));
	r.setFullYear(1584), i.setFullYear(1584);
	let s = a * (o - +(vl(r, i) === -a));
	return s === 0 ? 0 : s;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/normalizeInterval.js
function Tl(e, t) {
	let [n, r] = fl(e, t.start, t.end);
	return {
		start: n,
		end: r
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/eachDayOfInterval.js
function El(e, t) {
	let { start: n, end: r } = Tl(t?.in, e), i = +n > +r, a = i ? +n : +r, o = i ? r : n;
	o.setHours(0, 0, 0, 0);
	let s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(nl(n, o)), o.setDate(o.getDate() + s), o.setHours(0, 0, 0, 0);
	return i ? c.reverse() : c;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfQuarter.js
function Dl(e, t) {
	let n = Q(e, t?.in), r = n.getMonth(), i = r - r % 3;
	return n.setMonth(i, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/eachQuarterOfInterval.js
function Ol(e, t) {
	let { start: n, end: r } = Tl(t?.in, e), i = +n > +r, a = i ? +Dl(n) : +Dl(r), o = Dl(i ? r : n), s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(nl(n, o)), o = gl(o, s);
	return i ? c.reverse() : c;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfMonth.js
function kl(e, t) {
	let n = Q(e, t?.in);
	return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/endOfYear.js
function Al(e, t) {
	let n = Q(e, t?.in), r = n.getFullYear();
	return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfYear.js
function jl(e, t) {
	let n = Q(e, t?.in);
	return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/endOfWeek.js
function Ml(e, t) {
	let n = sl(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = Q(e, t?.in), a = i.getDay(), o = (a < r ? -7 : 0) + 6 - (a - r);
	return i.setDate(i.getDate() + o), i.setHours(23, 59, 59, 999), i;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/endOfQuarter.js
function Nl(e, t) {
	let n = Q(e, t?.in), r = n.getMonth(), i = r - r % 3 + 3;
	return n.setMonth(i, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var Pl = {
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
}, Fl = (e, t, n) => {
	let r, i = Pl[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function Il(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
var Ll = {
	date: Il({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: Il({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: Il({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, Rl = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, zl = (e, t, n, r) => Rl[e];
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function Bl(e) {
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
var Vl = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: Bl({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: Bl({
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
	month: Bl({
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
	day: Bl({
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
	dayPeriod: Bl({
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
function Hl(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Wl(s, (e) => e.test(o)) : Ul(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function Ul(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Wl(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function Gl(e) {
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
var Kl = {
	code: "en-US",
	formatDistance: Fl,
	formatLong: Ll,
	formatRelative: zl,
	localize: Vl,
	match: {
		ordinalNumber: Gl({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: Hl({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: "any"
		}),
		quarter: Hl({
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
		month: Hl({
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
		day: Hl({
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
		dayPeriod: Hl({
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
function ql(e, t) {
	let n = Q(e, t?.in);
	return ml(n, jl(n)) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getISOWeek.js
function Jl(e, t) {
	let n = Q(e, t?.in), r = ll(n) - +hl(n);
	return Math.round(r / Yc) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getWeekYear.js
function Yl(e, t) {
	let n = Q(e, t?.in), r = n.getFullYear(), i = sl(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = nl(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = cl(o, t), c = nl(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = cl(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfWeekYear.js
function Xl(e, t) {
	let n = sl(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = Yl(e, t), a = nl(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), cl(a, t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getWeek.js
function Zl(e, t) {
	let n = Q(e, t?.in), r = cl(n, t) - +Xl(n, t);
	return Math.round(r / Yc) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/addLeadingZeros.js
function Ql(e, t) {
	return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/format/lightFormatters.js
var $l = {
	y(e, t) {
		let n = e.getFullYear(), r = n > 0 ? n : 1 - n;
		return Ql(t === "yy" ? r % 100 : r, t.length);
	},
	M(e, t) {
		let n = e.getMonth();
		return t === "M" ? String(n + 1) : Ql(n + 1, 2);
	},
	d(e, t) {
		return Ql(e.getDate(), t.length);
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
		return Ql(e.getHours() % 12 || 12, t.length);
	},
	H(e, t) {
		return Ql(e.getHours(), t.length);
	},
	m(e, t) {
		return Ql(e.getMinutes(), t.length);
	},
	s(e, t) {
		return Ql(e.getSeconds(), t.length);
	},
	S(e, t) {
		let n = t.length, r = e.getMilliseconds();
		return Ql(Math.trunc(r * 10 ** (n - 3)), t.length);
	}
}, eu = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
}, tu = {
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
		return $l.y(e, t);
	},
	Y: function(e, t, n, r) {
		let i = Yl(e, r), a = i > 0 ? i : 1 - i;
		return t === "YY" ? Ql(a % 100, 2) : t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Ql(a, t.length);
	},
	R: function(e, t) {
		return Ql(ul(e), t.length);
	},
	u: function(e, t) {
		return Ql(e.getFullYear(), t.length);
	},
	Q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "Q": return String(r);
			case "QQ": return Ql(r, 2);
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
			case "qq": return Ql(r, 2);
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
			case "MM": return $l.M(e, t);
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
			case "LL": return Ql(r + 1, 2);
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
		let i = Zl(e, r);
		return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : Ql(i, t.length);
	},
	I: function(e, t, n) {
		let r = Jl(e);
		return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Ql(r, t.length);
	},
	d: function(e, t, n) {
		return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : $l.d(e, t);
	},
	D: function(e, t, n) {
		let r = ql(e);
		return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Ql(r, t.length);
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
			case "ee": return Ql(a, 2);
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
			case "cc": return Ql(a, t.length);
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
			case "ii": return Ql(i, t.length);
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
		switch (i = r === 12 ? eu.noon : r === 0 ? eu.midnight : r / 12 >= 1 ? "pm" : "am", t) {
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
		switch (i = r >= 17 ? eu.evening : r >= 12 ? eu.afternoon : r >= 4 ? eu.morning : eu.night, t) {
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
		return $l.h(e, t);
	},
	H: function(e, t, n) {
		return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : $l.H(e, t);
	},
	K: function(e, t, n) {
		let r = e.getHours() % 12;
		return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ql(r, t.length);
	},
	k: function(e, t, n) {
		let r = e.getHours();
		return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ql(r, t.length);
	},
	m: function(e, t, n) {
		return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : $l.m(e, t);
	},
	s: function(e, t, n) {
		return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : $l.s(e, t);
	},
	S: function(e, t) {
		return $l.S(e, t);
	},
	X: function(e, t, n) {
		let r = e.getTimezoneOffset();
		if (r === 0) return "Z";
		switch (t) {
			case "X": return ru(r);
			case "XXXX":
			case "XX": return iu(r);
			default: return iu(r, ":");
		}
	},
	x: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "x": return ru(r);
			case "xxxx":
			case "xx": return iu(r);
			default: return iu(r, ":");
		}
	},
	O: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + nu(r, ":");
			default: return "GMT" + iu(r, ":");
		}
	},
	z: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + nu(r, ":");
			default: return "GMT" + iu(r, ":");
		}
	},
	t: function(e, t, n) {
		return Ql(Math.trunc(e / 1e3), t.length);
	},
	T: function(e, t, n) {
		return Ql(+e, t.length);
	}
};
function nu(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
	return a === 0 ? n + String(i) : n + String(i) + t + Ql(a, 2);
}
function ru(e, t) {
	return e % 60 == 0 ? (e > 0 ? "-" : "+") + Ql(Math.abs(e) / 60, 2) : iu(e, t);
}
function iu(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Ql(Math.trunc(r / 60), 2), a = Ql(r % 60, 2);
	return n + i + t + a;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/format/longFormatters.js
var au = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, ou = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, su = {
	p: ou,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return au(e, t);
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
		return a.replace("{{date}}", au(r, t)).replace("{{time}}", ou(i, t));
	}
}, cu = /^D+$/, lu = /^Y+$/, uu = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function du(e) {
	return cu.test(e);
}
function fu(e) {
	return lu.test(e);
}
function pu(e, t, n) {
	let r = mu(e, t, n);
	if (console.warn(r), uu.includes(e)) throw RangeError(r);
}
function mu(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/format.js
var hu = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, gu = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, _u = /^'([^]*?)'?$/, vu = /''/g, yu = /[a-zA-Z]/;
function bu(e, t, n) {
	let r = sl(), i = n?.locale ?? r.locale ?? Kl, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = Q(e, n?.in);
	if (!bl(s)) throw RangeError("Invalid time value");
	let c = t.match(gu).map((e) => {
		let t = e[0];
		if (t === "p" || t === "P") {
			let n = su[t];
			return n(e, i.formatLong);
		}
		return e;
	}).join("").match(hu).map((e) => {
		if (e === "''") return {
			isToken: !1,
			value: "'"
		};
		let t = e[0];
		if (t === "'") return {
			isToken: !1,
			value: xu(e)
		};
		if (tu[t]) return {
			isToken: !0,
			value: e
		};
		if (t.match(yu)) throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
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
		(!n?.useAdditionalWeekYearTokens && fu(a) || !n?.useAdditionalDayOfYearTokens && du(a)) && pu(a, t, String(e));
		let o = tu[a[0]];
		return o(s, a, i.localize, l);
	}).join("");
}
function xu(e) {
	let t = e.match(_u);
	return t ? t[1].replace(vu, "'") : e;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getDay.js
function Su(e, t) {
	return Q(e, t?.in).getDay();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getDaysInMonth.js
function Cu(e, t) {
	let n = Q(e, t?.in), r = n.getFullYear(), i = n.getMonth(), a = nl(n, 0);
	return a.setFullYear(r, i + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getDefaultOptions.js
function wu() {
	return Object.assign({}, sl());
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getHours.js
function Tu(e, t) {
	return Q(e, t?.in).getHours();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getISODay.js
function Eu(e, t) {
	let n = Q(e, t?.in).getDay();
	return n === 0 ? 7 : n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getMinutes.js
function Du(e, t) {
	return Q(e, t?.in).getMinutes();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getMonth.js
function Ou(e, t) {
	return Q(e, t?.in).getMonth();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getSeconds.js
function ku(e) {
	return Q(e).getSeconds();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/getYear.js
function $(e, t) {
	return Q(e, t?.in).getFullYear();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isAfter.js
function Au(e, t) {
	return +Q(e) > +Q(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isBefore.js
function ju(e, t) {
	return +Q(e) < +Q(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isEqual.js
function Mu(e, t) {
	return +Q(e) == +Q(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/transpose.js
function Nu(e, t) {
	let n = Pu(t) ? new t(0) : nl(t, 0);
	return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), n;
}
function Pu(e) {
	return typeof e == "function" && e.prototype?.constructor === e;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/Setter.js
var Fu = 10, Iu = class {
	subPriority = 0;
	validate(e, t) {
		return !0;
	}
}, Lu = class extends Iu {
	constructor(e, t, n, r, i) {
		super(), this.value = e, this.validateValue = t, this.setValue = n, this.priority = r, i && (this.subPriority = i);
	}
	validate(e, t) {
		return this.validateValue(e, this.value, t);
	}
	set(e, t, n) {
		return this.setValue(e, t, this.value, n);
	}
}, Ru = class extends Iu {
	priority = Fu;
	subPriority = -1;
	constructor(e, t) {
		super(), this.context = e || ((e) => nl(t, e));
	}
	set(e, t) {
		return t.timestampIsSet ? e : nl(e, Nu(e, this.context));
	}
}, zu = class {
	run(e, t, n, r) {
		let i = this.parse(e, t, n, r);
		return i ? {
			setter: new Lu(i.value, this.validate, this.set, this.priority, this.subPriority),
			rest: i.rest
		} : null;
	}
	validate(e, t, n) {
		return !0;
	}
}, Bu = class extends zu {
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
}, Vu = {
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
}, Hu = {
	basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
	basic: /^([+-])(\d{2})(\d{2})|Z/,
	basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
	extended: /^([+-])(\d{2}):(\d{2})|Z/,
	extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/utils.js
function Uu(e, t) {
	return e && {
		value: t(e.value),
		rest: e.rest
	};
}
function Wu(e, t) {
	let n = t.match(e);
	return n ? {
		value: parseInt(n[0], 10),
		rest: t.slice(n[0].length)
	} : null;
}
function Gu(e, t) {
	let n = t.match(e);
	if (!n) return null;
	if (n[0] === "Z") return {
		value: 0,
		rest: t.slice(1)
	};
	let r = n[1] === "+" ? 1 : -1, i = n[2] ? parseInt(n[2], 10) : 0, a = n[3] ? parseInt(n[3], 10) : 0, o = n[5] ? parseInt(n[5], 10) : 0;
	return {
		value: r * (i * Qc + a * Zc + o * $c),
		rest: t.slice(n[0].length)
	};
}
function Ku(e) {
	return Wu(Vu.anyDigitsSigned, e);
}
function qu(e, t) {
	switch (e) {
		case 1: return Wu(Vu.singleDigit, t);
		case 2: return Wu(Vu.twoDigits, t);
		case 3: return Wu(Vu.threeDigits, t);
		case 4: return Wu(Vu.fourDigits, t);
		default: return Wu(RegExp("^\\d{1," + e + "}"), t);
	}
}
function Ju(e, t) {
	switch (e) {
		case 1: return Wu(Vu.singleDigitSigned, t);
		case 2: return Wu(Vu.twoDigitsSigned, t);
		case 3: return Wu(Vu.threeDigitsSigned, t);
		case 4: return Wu(Vu.fourDigitsSigned, t);
		default: return Wu(RegExp("^-?\\d{1," + e + "}"), t);
	}
}
function Yu(e) {
	switch (e) {
		case "morning": return 4;
		case "evening": return 17;
		case "pm":
		case "noon":
		case "afternoon": return 12;
		default: return 0;
	}
}
function Xu(e, t) {
	let n = t > 0, r = n ? t : 1 - t, i;
	if (r <= 50) i = e || 100;
	else {
		let t = r + 50, n = Math.trunc(t / 100) * 100, a = e >= t % 100;
		i = e + n - (a ? 100 : 0);
	}
	return n ? i : 1 - i;
}
function Zu(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/YearParser.js
var Qu = class extends zu {
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
			case "y": return Uu(qu(4, e), r);
			case "yo": return Uu(n.ordinalNumber(e, { unit: "year" }), r);
			default: return Uu(qu(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n) {
		let r = e.getFullYear();
		if (n.isTwoDigitYear) {
			let t = Xu(n.year, r);
			return e.setFullYear(t, 0, 1), e.setHours(0, 0, 0, 0), e;
		}
		let i = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
}, $u = class extends zu {
	priority = 130;
	parse(e, t, n) {
		let r = (e) => ({
			year: e,
			isTwoDigitYear: t === "YY"
		});
		switch (t) {
			case "Y": return Uu(qu(4, e), r);
			case "Yo": return Uu(n.ordinalNumber(e, { unit: "year" }), r);
			default: return Uu(qu(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n, r) {
		let i = Yl(e, r);
		if (n.isTwoDigitYear) {
			let t = Xu(n.year, i);
			return e.setFullYear(t, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), cl(e, r);
		}
		let a = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(a, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), cl(e, r);
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
}, ed = class extends zu {
	priority = 130;
	parse(e, t) {
		return Ju(t === "R" ? 4 : t.length, e);
	}
	set(e, t, n) {
		let r = nl(e, 0);
		return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), ll(r);
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
}, td = class extends zu {
	priority = 130;
	parse(e, t) {
		return Ju(t === "u" ? 4 : t.length, e);
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
}, nd = class extends zu {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "Q":
			case "QQ": return qu(t.length, e);
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
}, rd = class extends zu {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "q":
			case "qq": return qu(t.length, e);
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
}, id = class extends zu {
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
			case "M": return Uu(Wu(Vu.month, e), r);
			case "MM": return Uu(qu(2, e), r);
			case "Mo": return Uu(n.ordinalNumber(e, { unit: "month" }), r);
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
}, ad = class extends zu {
	priority = 110;
	parse(e, t, n) {
		let r = (e) => e - 1;
		switch (t) {
			case "L": return Uu(Wu(Vu.month, e), r);
			case "LL": return Uu(qu(2, e), r);
			case "Lo": return Uu(n.ordinalNumber(e, { unit: "month" }), r);
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
function od(e, t, n) {
	let r = Q(e, n?.in), i = Zl(r, n) - t;
	return r.setDate(r.getDate() - i * 7), Q(r, n?.in);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js
var sd = class extends zu {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "w": return Wu(Vu.week, e);
			case "wo": return n.ordinalNumber(e, { unit: "week" });
			default: return qu(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n, r) {
		return cl(od(e, n, r), r);
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
function cd(e, t, n) {
	let r = Q(e, n?.in), i = Jl(r, n) - t;
	return r.setDate(r.getDate() - i * 7), r;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js
var ld = class extends zu {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "I": return Wu(Vu.week, e);
			case "Io": return n.ordinalNumber(e, { unit: "week" });
			default: return qu(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n) {
		return ll(cd(e, n));
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
}, ud = [
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
], dd = [
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
], fd = class extends zu {
	priority = 90;
	subPriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "d": return Wu(Vu.date, e);
			case "do": return n.ordinalNumber(e, { unit: "date" });
			default: return qu(t.length, e);
		}
	}
	validate(e, t) {
		let n = Zu(e.getFullYear()), r = e.getMonth();
		return n ? t >= 1 && t <= dd[r] : t >= 1 && t <= ud[r];
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
}, pd = class extends zu {
	priority = 90;
	subpriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "D":
			case "DD": return Wu(Vu.dayOfYear, e);
			case "Do": return n.ordinalNumber(e, { unit: "date" });
			default: return qu(t.length, e);
		}
	}
	validate(e, t) {
		return Zu(e.getFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
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
function md(e, t, n) {
	let r = sl(), i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, a = Q(e, n?.in), o = a.getDay(), s = (t % 7 + 7) % 7, c = 7 - i;
	return rl(a, t < 0 || t > 6 ? t - (o + c) % 7 : (s + c) % 7 - (o + c) % 7, n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/DayParser.js
var hd = class extends zu {
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
		return e = md(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, gd = class extends zu {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "e":
			case "ee": return Uu(qu(t.length, e), i);
			case "eo": return Uu(n.ordinalNumber(e, { unit: "day" }), i);
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
		return e = md(e, n, r), e.setHours(0, 0, 0, 0), e;
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
}, _d = class extends zu {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "c":
			case "cc": return Uu(qu(t.length, e), i);
			case "co": return Uu(n.ordinalNumber(e, { unit: "day" }), i);
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
		return e = md(e, n, r), e.setHours(0, 0, 0, 0), e;
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
function vd(e, t, n) {
	let r = Q(e, n?.in);
	return rl(r, t - Eu(r, n), n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parse/_lib/parsers/ISODayParser.js
var yd = class extends zu {
	priority = 90;
	parse(e, t, n) {
		let r = (e) => e === 0 ? 7 : e;
		switch (t) {
			case "i":
			case "ii": return qu(t.length, e);
			case "io": return n.ordinalNumber(e, { unit: "day" });
			case "iii": return Uu(n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiii": return Uu(n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiiii": return Uu(n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			default: return Uu(n.day(e, {
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
		return e = vd(e, n), e.setHours(0, 0, 0, 0), e;
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
}, bd = class extends zu {
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
		return e.setHours(Yu(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"b",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, xd = class extends zu {
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
		return e.setHours(Yu(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, Sd = class extends zu {
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
		return e.setHours(Yu(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"t",
		"T"
	];
}, Cd = class extends zu {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "h": return Wu(Vu.hour12h, e);
			case "ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return qu(t.length, e);
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
}, wd = class extends zu {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "H": return Wu(Vu.hour23h, e);
			case "Ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return qu(t.length, e);
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
}, Td = class extends zu {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "K": return Wu(Vu.hour11h, e);
			case "Ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return qu(t.length, e);
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
}, Ed = class extends zu {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "k": return Wu(Vu.hour24h, e);
			case "ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return qu(t.length, e);
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
}, Dd = class extends zu {
	priority = 60;
	parse(e, t, n) {
		switch (t) {
			case "m": return Wu(Vu.minute, e);
			case "mo": return n.ordinalNumber(e, { unit: "minute" });
			default: return qu(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setMinutes(n, 0, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, Od = class extends zu {
	priority = 50;
	parse(e, t, n) {
		switch (t) {
			case "s": return Wu(Vu.second, e);
			case "so": return n.ordinalNumber(e, { unit: "second" });
			default: return qu(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setSeconds(n, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, kd = class extends zu {
	priority = 30;
	parse(e, t) {
		return Uu(qu(t.length, e), (e) => Math.trunc(e * 10 ** (-t.length + 3)));
	}
	set(e, t, n) {
		return e.setMilliseconds(n), e;
	}
	incompatibleTokens = ["t", "T"];
}, Ad = class extends zu {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "X": return Gu(Hu.basicOptionalMinutes, e);
			case "XX": return Gu(Hu.basic, e);
			case "XXXX": return Gu(Hu.basicOptionalSeconds, e);
			case "XXXXX": return Gu(Hu.extendedOptionalSeconds, e);
			default: return Gu(Hu.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : nl(e, e.getTime() - dl(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"x"
	];
}, jd = class extends zu {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "x": return Gu(Hu.basicOptionalMinutes, e);
			case "xx": return Gu(Hu.basic, e);
			case "xxxx": return Gu(Hu.basicOptionalSeconds, e);
			case "xxxxx": return Gu(Hu.extendedOptionalSeconds, e);
			default: return Gu(Hu.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : nl(e, e.getTime() - dl(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"X"
	];
}, Md = class extends zu {
	priority = 40;
	parse(e) {
		return Ku(e);
	}
	set(e, t, n) {
		return [nl(e, n * 1e3), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, Nd = class extends zu {
	priority = 20;
	parse(e) {
		return Ku(e);
	}
	set(e, t, n) {
		return [nl(e, n), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, Pd = {
	G: new Bu(),
	y: new Qu(),
	Y: new $u(),
	R: new ed(),
	u: new td(),
	Q: new nd(),
	q: new rd(),
	M: new id(),
	L: new ad(),
	w: new sd(),
	I: new ld(),
	d: new fd(),
	D: new pd(),
	E: new hd(),
	e: new gd(),
	c: new _d(),
	i: new yd(),
	a: new bd(),
	b: new xd(),
	B: new Sd(),
	h: new Cd(),
	H: new wd(),
	K: new Td(),
	k: new Ed(),
	m: new Dd(),
	s: new Od(),
	S: new kd(),
	X: new Ad(),
	x: new jd(),
	t: new Md(),
	T: new Nd()
}, Fd = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Id = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ld = /^'([^]*?)'?$/, Rd = /''/g, zd = /\S/, Bd = /[a-zA-Z]/;
function Vd(e, t, n, r) {
	let i = () => nl(r?.in || n, NaN), a = wu(), o = r?.locale ?? a.locale ?? Kl, s = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, c = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0;
	if (!t) return e ? i() : Q(n, r?.in);
	let l = {
		firstWeekContainsDate: s,
		weekStartsOn: c,
		locale: o
	}, u = [new Ru(r?.in, n)], d = t.match(Id).map((e) => {
		let t = e[0];
		if (t in su) {
			let n = su[t];
			return n(e, o.formatLong);
		}
		return e;
	}).join("").match(Fd), f = [];
	for (let n of d) {
		!r?.useAdditionalWeekYearTokens && fu(n) && pu(n, t, e), !r?.useAdditionalDayOfYearTokens && du(n) && pu(n, t, e);
		let a = n[0], s = Pd[a];
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
			if (a.match(Bd)) throw RangeError("Format string contains an unescaped latin alphabet character `" + a + "`");
			if (n === "''" ? n = "'" : a === "'" && (n = Hd(n)), e.indexOf(n) === 0) e = e.slice(n.length);
			else return i();
		}
	}
	if (e.length > 0 && zd.test(e)) return i();
	let p = u.map((e) => e.priority).sort((e, t) => t - e).filter((e, t, n) => n.indexOf(e) === t).map((e) => u.filter((t) => t.priority === e).sort((e, t) => t.subPriority - e.subPriority)).map((e) => e[0]), m = Q(n, r?.in);
	if (isNaN(+m)) return i();
	let h = {};
	for (let e of p) {
		if (!e.validate(m, l)) return i();
		let t = e.set(m, h, l);
		Array.isArray(t) ? (m = t[0], Object.assign(h, t[1])) : m = t;
	}
	return m;
}
function Hd(e) {
	return e.match(Ld)[1].replace(Rd, "'");
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isSameQuarter.js
function Ud(e, t, n) {
	let [r, i] = fl(n?.in, e, t);
	return +Dl(r) == +Dl(i);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/subDays.js
function Wd(e, t, n) {
	return rl(e, -t, n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/parseISO.js
function Gd(e, t) {
	let n = () => nl(t?.in, NaN), r = t?.additionalDigits ?? 2, i = Xd(e), a;
	if (i.date) {
		let e = Zd(i.date, r);
		a = Qd(e.restDateString, e.year);
	}
	if (!a || isNaN(+a)) return n();
	let o = +a, s = 0, c;
	if (i.time && (s = ef(i.time), isNaN(s))) return n();
	if (i.timezone) {
		if (c = nf(i.timezone), isNaN(c)) return n();
	} else {
		let e = new Date(o + s), n = Q(0, t?.in);
		return n.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()), n.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()), n;
	}
	return Q(o + s + c, t?.in);
}
var Kd = {
	dateTimeDelimiter: /[T ]/,
	timeZoneDelimiter: /[Z ]/i,
	timezone: /([Z+-].*)$/
}, qd = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, Jd = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, Yd = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Xd(e) {
	let t = {}, n = e.split(Kd.dateTimeDelimiter), r;
	if (n.length > 2) return t;
	if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], Kd.timeZoneDelimiter.test(t.date) && (t.date = e.split(Kd.timeZoneDelimiter)[0], r = e.substr(t.date.length, e.length))), r) {
		let e = Kd.timezone.exec(r);
		e ? (t.time = r.replace(e[1], ""), t.timezone = e[1]) : t.time = r;
	}
	return t;
}
function Zd(e, t) {
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
function Qd(e, t) {
	if (t === null) return /* @__PURE__ */ new Date(NaN);
	let n = e.match(qd);
	if (!n) return /* @__PURE__ */ new Date(NaN);
	let r = !!n[4], i = $d(n[1]), a = $d(n[2]) - 1, o = $d(n[3]), s = $d(n[4]), c = $d(n[5]) - 1;
	if (r) return lf(t, s, c) ? rf(t, s, c) : /* @__PURE__ */ new Date(NaN);
	{
		let e = /* @__PURE__ */ new Date(0);
		return !sf(t, a, o) || !cf(t, i) ? /* @__PURE__ */ new Date(NaN) : (e.setUTCFullYear(t, a, Math.max(i, o)), e);
	}
}
function $d(e) {
	return e ? parseInt(e) : 1;
}
function ef(e) {
	let t = e.match(Jd);
	if (!t) return NaN;
	let n = tf(t[1]), r = tf(t[2]), i = tf(t[3]);
	return uf(n, r, i) ? n * Qc + r * Zc + i * 1e3 : NaN;
}
function tf(e) {
	return e && parseFloat(e.replace(",", ".")) || 0;
}
function nf(e) {
	if (e === "Z") return 0;
	let t = e.match(Yd);
	if (!t) return 0;
	let n = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), i = t[3] && parseInt(t[3]) || 0;
	return df(r, i) ? n * (r * Qc + i * Zc) : NaN;
}
function rf(e, t, n) {
	let r = /* @__PURE__ */ new Date(0);
	r.setUTCFullYear(e, 0, 4);
	let i = r.getUTCDay() || 7, a = (t - 1) * 7 + n + 1 - i;
	return r.setUTCDate(r.getUTCDate() + a), r;
}
var af = [
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
function of(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
function sf(e, t, n) {
	return t >= 0 && t <= 11 && n >= 1 && n <= (af[t] || (of(e) ? 29 : 28));
}
function cf(e, t) {
	return t >= 1 && t <= (of(e) ? 366 : 365);
}
function lf(e, t, n) {
	return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function uf(e, t, n) {
	return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function df(e, t) {
	return t >= 0 && t <= 59;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/roundToNearestMinutes.js
function ff(e, t) {
	let n = t?.nearestTo ?? 1;
	if (n < 1 || n > 30) return nl(e, NaN);
	let r = Q(e, t?.in), i = r.getSeconds() / 60, a = r.getMilliseconds() / 1e3 / 60, o = r.getMinutes() + i + a, s = Cl(t?.roundingMethod ?? "round")(o / n) * n;
	return r.setMinutes(s, 0, 0), r;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/setMonth.js
function pf(e, t, n) {
	let r = Q(e, n?.in), i = r.getFullYear(), a = r.getDate(), o = nl(n?.in || e, 0);
	o.setFullYear(i, t, 15), o.setHours(0, 0, 0, 0);
	let s = Cu(o);
	return r.setMonth(t, Math.min(a, s)), r;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/set.js
function mf(e, t, n) {
	let r = Q(e, n?.in);
	return isNaN(+r) ? nl(n?.in || e, NaN) : (t.year != null && r.setFullYear(t.year), t.month != null && (r = pf(r, t.month)), t.date != null && r.setDate(t.date), t.hours != null && r.setHours(t.hours), t.minutes != null && r.setMinutes(t.minutes), t.seconds != null && r.setSeconds(t.seconds), t.milliseconds != null && r.setMilliseconds(t.milliseconds), r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/setMilliseconds.js
function hf(e, t, n) {
	let r = Q(e, n?.in);
	return r.setMilliseconds(t), r;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/setSeconds.js
function gf(e, t, n) {
	let r = Q(e, n?.in);
	return r.setSeconds(t), r;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/setYear.js
function _f(e, t, n) {
	let r = Q(e, n?.in);
	return isNaN(+r) ? nl(n?.in || e, NaN) : (r.setFullYear(t), r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/subMonths.js
function vf(e, t, n) {
	return il(e, -t, n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/sub.js
function yf(e, t, n) {
	let { years: r = 0, months: i = 0, weeks: a = 0, days: o = 0, hours: s = 0, minutes: c = 0, seconds: l = 0 } = t, u = Wd(vf(e, i + r * 12, n), o + a * 7, n), d = (l + (c + s * 60) * 60) * 1e3;
	return nl(n?.in || e, +u - d);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/subYears.js
function bf(e, t, n) {
	return _l(e, -t, n);
}
//#endregion
//#region node_modules/.pnpm/@date-fns+tz@1.5.0/node_modules/@date-fns/tz/tzName/index.js
function xf(e, t, n = "long") {
	return new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		timeZone: e,
		timeZoneName: n
	}).format(t).split(/\s/g).slice(2).join(" ");
}
//#endregion
//#region node_modules/.pnpm/@date-fns+tz@1.5.0/node_modules/@date-fns/tz/tzOffset/index.js
var Sf = {}, Cf = {};
function wf(e, t) {
	try {
		let n = (Sf[e] ||= new Intl.DateTimeFormat("en-US", {
			timeZone: e,
			timeZoneName: "longOffset"
		}).format)(t).split("GMT")[1];
		return n in Cf ? Cf[n] : Ef(n, n.split(":"));
	} catch {
		if (e in Cf) return Cf[e];
		let t = e?.match(Tf);
		return t ? Ef(e, t.slice(1)) : NaN;
	}
}
var Tf = /([+-]\d\d):?(\d\d)?/;
function Ef(e, t) {
	let n = +(t[0] || 0), r = +(t[1] || 0), i = (t[2] || 0) / 60;
	return Cf[e] = n * 60 + r > 0 ? n * 60 + r + i : n * 60 - r - i;
}
//#endregion
//#region node_modules/.pnpm/@date-fns+tz@1.5.0/node_modules/@date-fns/tz/date/mini.js
var Df = class e extends Date {
	constructor(...e) {
		super(), e.length > 1 && typeof e[e.length - 1] == "string" && (this.timeZone = e.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(wf(this.timeZone, this)) ? this.setTime(NaN) : e.length ? typeof e[0] == "number" && (e.length === 1 || e.length === 2 && typeof e[1] != "number") ? this.setTime(e[0]) : typeof e[0] == "string" ? this.setTime(+new Date(e[0])) : e[0] instanceof Date ? this.setTime(+e[0]) : (this.setTime(+new Date(...e)), jf(this, e)) : this.setTime(Date.now());
	}
	static tz(t, ...n) {
		return n.length ? new e(...n, t) : new e(Date.now(), t);
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	getTimezoneOffset() {
		let e = -wf(this.timeZone, this);
		return e > 0 ? Math.floor(e) : Math.ceil(e);
	}
	setTime(e) {
		return Date.prototype.setTime.apply(this, arguments), kf(this), +this;
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
}, Of = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
	if (!Of.test(e)) return;
	let t = e.replace(Of, "$1UTC");
	Df.prototype[t] && (e.startsWith("get") ? Df.prototype[e] = function() {
		return this.internal[t]();
	} : (Df.prototype[e] = function() {
		return Date.prototype[t].apply(this.internal, arguments), Af(this), +this;
	}, Df.prototype[t] = function() {
		return Date.prototype[t].apply(this, arguments), kf(this), +this;
	}));
});
function kf(e) {
	e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-wf(e.timeZone, e) * 60));
}
function Af(e) {
	Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), jf(e);
}
function jf(e, t) {
	let n = Array.isArray(t) ? Mf(t) : +e.internal, r = wf(e.timeZone, e), i = r > 0 ? Math.floor(r) : Math.ceil(r), a = /* @__PURE__ */ new Date(+e);
	a.setUTCHours(a.getUTCHours() - 1);
	let o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), s = -(/* @__PURE__ */ new Date(+a)).getTimezoneOffset(), c = o - s, l = o;
	if (c && o !== i && Date.prototype.getHours.apply(e) !== (Array.isArray(t) ? t[3] || 0 : e.internal.getUTCHours())) {
		let t = /* @__PURE__ */ new Date(+e), n = o - i;
		n && t.setUTCMinutes(t.getUTCMinutes() + n);
		let r = wf(e.timeZone, t);
		(r > 0 ? Math.floor(r) : Math.ceil(r)) === i && (l = s);
	}
	let u = l - i;
	u && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + u);
	let d = /* @__PURE__ */ new Date(+e);
	d.setUTCSeconds(0);
	let f = o > 0 ? d.getSeconds() : (d.getSeconds() - 60) % 60, p = Math.round(-(wf(e.timeZone, e) * 60)) % 60;
	(p || f) && Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + p + f);
	let m = wf(e.timeZone, e), h = m > 0 ? Math.floor(m) : Math.ceil(m), g = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - h, _ = h !== i, v = g - u, y = h - i, b = n - h * 60 * 1e3, x = y > 0 && Nf(e) - n === y * 60 * 1e3 && Nf(e, b) !== n;
	if (_ && v && !x) {
		Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + v);
		let t = wf(e.timeZone, e), n = h - (t > 0 ? Math.floor(t) : Math.ceil(t));
		n && v < 0 && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + n);
	}
	kf(e);
	let S = (t ? n : n + p * 1e3) - +e.internal;
	S && Math.abs(S) < 18e5 && (Date.prototype.setTime.call(e, +e + S), kf(e));
}
function Mf(e) {
	return Date.UTC(e[0], e.length > 1 ? e[1] : 0, e.length > 2 ? e[2] : 1, ...e.slice(3));
}
function Nf(e, t) {
	let n = new Date(t ?? +e);
	return n.setUTCSeconds(n.getUTCSeconds() - Math.round(-wf(e.timeZone, n) * 60)), +n;
}
//#endregion
//#region node_modules/.pnpm/@date-fns+tz@1.5.0/node_modules/@date-fns/tz/date/index.js
var Pf = class e extends Df {
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
		return `${e} GMT${t}${n}${r} (${xf(this.timeZone, this)})`;
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
function Ff() {
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
function If() {
	return h("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [h("path", { d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z" }), h("path", { d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" })]);
}
function Lf() {
	return h("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [h("path", { d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" })]);
}
function Rf() {
	return h("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [h("path", { d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z" })]);
}
function zf() {
	return h("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [h("path", { d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z" }), h("path", { d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" })]);
}
function Bf() {
	return h("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [h("path", { d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" })]);
}
function Vf() {
	return h("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32",
		fill: "currentColor",
		"aria-hidden": "true",
		class: "dp__icon",
		role: "img"
	}, [h("path", { d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" })]);
}
var Hf = Symbol("ContextKey"), Uf = (e, t) => {
	let { setTimeModelValue: n } = Np(), r = Mp(e), a = N(null), o = j({
		menuFocused: !1,
		shiftKeyInMenu: !1,
		isInputFocused: !1,
		isTextInputDate: !1,
		arrowNavigationLevel: 0
	}), s = r.getDate(/* @__PURE__ */ new Date()), c = N(""), l = N([{
		month: Ou(s),
		year: $(s)
	}]), u = j({
		hours: 0,
		minutes: 0,
		seconds: 0
	});
	n(u, null, s, r.range.value.enabled);
	let d = i({
		get: () => a.value,
		set: (e) => {
			a.value = e;
		}
	}), f = i(() => (e) => l.value[e] ? l.value[e].month : 0), p = i(() => (e) => l.value[e] ? l.value[e].year : 0);
	A(Hf, {
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
}, Wf = () => {
	let e = g(Hf);
	if (!e) throw Error("Can't use context");
	return e;
}, Gf = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(Gf || {}), Kf = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(Kf || {}), qf = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(qf || {}), Jf = [
	"timestamp",
	"date",
	"iso"
], Yf = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(Yf || {}), Xf = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(Xf || {}), Zf = /* @__PURE__ */ ((e) => (e.MONTH_AND_YEAR = "MM-yyyy", e.YEAR = "yyyy", e.DATE = "dd-MM-yyyy", e))(Zf || {}), Qf = /* @__PURE__ */ ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e))(Qf || {}), $f = () => {
	let { rootProps: e, state: t } = Wf(), n = i(() => t.arrowNavigationLevel), r = N(-1), a = N(-1);
	J(n, (e, t) => {
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
		n.value === 0 && (r.value = e, a.value = t);
	}, d = (e) => {
		if (![
			Xf.arrowUp,
			Xf.arrowDown,
			Xf.arrowLeft,
			Xf.arrowRight
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
			case Xf.arrowLeft: return f(n, r);
			case Xf.arrowRight: return p(n, r);
			case Xf.arrowUp: return m(n, r);
			case Xf.arrowDown: return h(n, r);
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
			let e = o.value[r.value]?.[a.value];
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
}, ep = () => {
	let { checkPartialRangeValue: e, checkRangeEnabled: t, isValidDate: n } = rp(), { convertType: r, errorMapper: i } = Np(), { getDate: a, rootEmit: o, state: s, rootProps: c, inputValue: l, defaults: { textInput: u, range: d, multiDates: f, timeConfig: p, formats: m }, modelValue: h, updateTime: g } = Wf(), { setTime: _, getWeekFromDate: v } = Pp(), { formatSelectedDate: y, formatForTextInput: b } = Ip();
	J(h, (e, t) => {
		o("internal-model-change", h.value), JSON.stringify(t ?? {}) !== JSON.stringify(e ?? {}) && g();
	}, { deep: !0 }), J(d, (e, t) => {
		e.enabled !== t.enabled && (h.value = null);
	}), J(() => m.value.input, () => {
		R();
	});
	let x = (e) => e ? c.modelType ? B(e) : {
		hours: Tu(e),
		minutes: Du(e),
		seconds: p.value.enableSeconds ? ku(e) : 0
	} : null, S = (e) => c.modelType ? B(e) : {
		month: Ou(e),
		year: $(e)
	}, C = (n) => Array.isArray(n) ? f.value.enabled ? n.map((e) => w(e, _f(a(), e))) : t(() => [_f(a(), n[0]), n[1] ? _f(a(), n[1]) : e(d.value.partialRange)], d.value.enabled) : _f(a(), +n), w = (e, t) => (typeof e == "string" || typeof e == "number") && c.modelType ? z(e) : t, T = (e) => Array.isArray(e) ? [w(e[0], _(e[0])), w(e[1], _(e[1]))] : w(e, _(e)), E = (n) => {
		let r = mf(a(), { date: 1 });
		return Array.isArray(n) ? f.value.enabled ? n.map((e) => w(e, mf(r, {
			month: +e.month,
			year: +e.year
		}))) : t(() => [w(n[0], mf(r, {
			month: +n[0].month,
			year: +n[0].year
		})), w(n[1], n[1] ? mf(r, {
			month: +n[1].month,
			year: +n[1].year
		}) : e(d.value.partialRange))], d.value.enabled) : w(n, mf(r, {
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
	}, z = (e) => c.modelType ? Jf.includes(c.modelType) ? a(e) : c.modelType === "format" && typeof m.value.input == "string" ? Vd(e, m.value.input, a(), { locale: c.locale }) : Vd(e, c.modelType, a(), { locale: c.locale }) : a(e), B = (e) => e ? c.modelType ? c.modelType === "timestamp" ? +e : c.modelType === "iso" ? e.toISOString() : c.modelType === "format" && typeof m.value.input == "string" ? y(e) : y(e, c.modelType) : e : null, V = (e) => {
		o("update:model-value", e);
	}, H = (e) => Array.isArray(h.value) ? f.value.enabled ? h.value.map((t) => e(t)) : [e(h.value[0]), h.value[1] ? e(h.value[1]) : null] : e(r(h.value)), U = () => {
		if (Array.isArray(h.value)) {
			let e = v(h.value[0], c.weekStart), t = h.value[1] ? v(h.value[1], c.weekStart) : [];
			return [e.map((e) => a(e)), t.map((e) => a(e))];
		}
		return v(h.value, c.weekStart).map((e) => a(e));
	}, ee = (e) => V(r(H(e))), W = () => o("update:model-value", U());
	return {
		checkBeforeEmit: () => h.value ? d.value.enabled ? d.value.partialRange ? h.value.length >= 1 : h.value.length === 2 : !!h.value : !1,
		parseExternalModelValue: I,
		formatInputValue: R,
		emitModelValue: () => (R(), c.monthPicker ? ee(S) : c.timePicker ? ee(x) : c.yearPicker ? ee($) : c.weekPicker ? W() : V(P()))
	};
}, tp = () => {
	let { defaults: { transitions: e } } = Wf(), t = i(() => (t) => e.value ? t ? e.value.open : e.value.close : ""), n = i(() => (t) => e.value ? t ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
	return {
		transitionName: t,
		showTransition: !!e.value,
		menuTransition: n
	};
}, np = (e) => {
	let { today: t, time: n, modelValue: r, defaults: { range: i } } = Wf(), { setTimeModelValue: a } = Np();
	J(i, (e, o) => {
		e.enabled !== o.enabled && a(n, r.value, t, i.value.enabled);
	}, { deep: !0 }), J(r, (t, n) => {
		e && JSON.stringify(t ?? {}) !== JSON.stringify(n ?? {}) && e();
	}, { deep: !0 });
}, rp = () => {
	let { defaults: { safeDates: e, range: t, multiDates: n, filters: r, timeConfig: a }, rootProps: o, getDate: s } = Wf(), { getMapKeyType: c, getMapDate: l, errorMapper: u, convertType: d } = Np(), { isDateBefore: f, isDateAfter: p, isDateEqual: m, resetDate: h, getDaysInBetween: g, setTimeValue: _, getTimeObj: v, setTime: y } = Pp(), b = (t) => e.value.disabledDates ? typeof e.value.disabledDates == "function" ? e.value.disabledDates(s(t)) : !!l(t, e.value.disabledDates) : !1, x = (t) => e.value.maxDate ? o.yearPicker ? $(t) > $(e.value.maxDate) : p(t, e.value.maxDate) : !1, S = (t) => e.value.minDate ? o.yearPicker ? $(t) < $(e.value.minDate) : f(t, e.value.minDate) : !1, C = (e) => {
		if (!e) return !1;
		let t = x(e), n = S(e), i = b(e), a = r.value.months.map((e) => +e).includes(Ou(e)), s = r.value.weekDays?.length ? r.value.weekDays.some((t) => +t === Su(e)) : !1, c = O(e), l = $(e), u = l < +o.yearRange[0] || l > +o.yearRange[1];
		return !(t || n || i || a || u || s || c);
	}, w = (t, n) => f(...G(e.value.minDate, t, n)) || m(...G(e.value.minDate, t, n)), T = (t, n) => p(...G(e.value.maxDate, t, n)) || m(...G(e.value.maxDate, t, n)), E = (t, n, r) => {
		let i = !1;
		return e.value.maxDate && r && T(t, n) && (i = !0), e.value.minDate && !r && w(t, n) && (i = !0), i;
	}, D = (t, n, r, i) => {
		let a = !1;
		return i && (e.value.minDate || e.value.maxDate) ? e.value.minDate && e.value.maxDate ? a = E(t, n, r) : (e.value.minDate && w(t, n) || e.value.maxDate && T(t, n)) && (a = !0) : a = !0, a;
	}, O = (t) => Array.isArray(e.value.allowedDates) && !e.value.allowedDates.length ? !0 : e.value.allowedDates ? !l(t, e.value.allowedDates, c(o.monthPicker, o.yearPicker)) : !1, k = (e) => !C(e), A = (e) => !t.value.noDisabledRange || !El({
		start: e[0],
		end: e[1]
	}).some((e) => k(e)), j = (e) => {
		if (e) {
			let t = $(e);
			return t >= +o.yearRange[0] && t <= o.yearRange[1];
		}
		return !0;
	}, M = (e, n) => !!(Array.isArray(e) && e[n] && (t.value.maxRange || t.value.minRange) && j(e[n])), N = (e, n, r = 0) => {
		if (M(n, r) && j(e)) {
			let i = ml(e, n[r]), a = g(n[r], e), o = a.length === 1 ? 0 : a.filter((e) => k(e)).length, s = Math.abs(i) - (t.value.minMaxRawRange ? 0 : o);
			if (t.value.minRange && t.value.maxRange) return s >= +t.value.minRange && s <= +t.value.maxRange;
			if (t.value.minRange) return s >= +t.value.minRange;
			if (t.value.maxRange) return s <= +t.value.maxRange;
		}
		return !0;
	}, P = () => !a.value.enableTimePicker || o.monthPicker || o.yearPicker || a.value.ignoreTimeValidation, F = (e) => Array.isArray(e) ? [e[0] ? _(e[0]) : null, e[1] ? _(e[1]) : null] : _(e), I = (e, t, n) => t ? e.find((e) => +e.hours === Tu(t) && e.minutes === "*" || +e.minutes === Du(t) && +e.hours === Tu(t)) && n : !1, L = (e, t, n) => {
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
	}, U = i(() => (e) => !a.value.enableTimePicker || a.value.ignoreTimeValidation ? !0 : V(e)), ee = i(() => (e) => o.monthPicker ? Array.isArray(e) && (t.value.enabled || n.value.enabled) ? !e.filter((e) => !H(e)).length : H(e) : !0), W = (t, n, r) => {
		if (!n || r && !e.value.maxDate || !r && !e.value.minDate) return !1;
		let i = r ? il(t, 1) : vf(t, 1), a = [Ou(i), $(i)];
		return r ? !T(...a) : !w(...a);
	}, G = (e, t, n) => [mf(s(e), { date: 1 }), mf(s(), {
		month: t,
		year: n,
		date: 1
	})], K = (e, t, n, r) => {
		if (!e) return !0;
		if (r) {
			let r = n === "max" ? ju(e, t) : Au(e, t), i = {
				seconds: 0,
				milliseconds: 0
			};
			return r || Mu(mf(e, i), mf(t, i));
		}
		return n === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
	}, q = (e, t, n, r, i) => {
		if (Array.isArray(r)) {
			let a = J(e, r[0], t), o = J(e, r[1], t);
			return K(r[0], a, n, !!t) && K(r[1], o, n, !!t) && i;
		}
		let a = J(e, r, t);
		return K(r, a, n, !!t) && i;
	}, J = (e, t, n) => e ? y(e, t) : s(n ?? t);
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
		isValidDate: (e) => Array.isArray(e) ? bl(e[0]) && (!e[1] || bl(e[1])) : e ? bl(e) : !1,
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
		isTimeValid: U,
		isMonthValid: ee
	};
}, ip = (e) => {
	let { rootEmit: t, rootProps: n, defaults: { timeConfig: r, flow: a } } = Wf(), o = N(0), s = j({
		[Kf.timePicker]: !r.value.enableTimePicker || n.timePicker || n.monthPicker,
		[Kf.calendar]: !1,
		[Kf.header]: !1
	}), c = i(() => n.monthPicker || n.timePicker), l = (e) => {
		if (a.value?.steps?.length) {
			if (!e && c.value) return p();
			s[e] = !0, Object.keys(s).filter((e) => !s[e]).length || p();
		}
	}, u = () => {
		a.value?.steps?.length && o.value !== -1 && (o.value += 1, t("flow-step", o.value), p()), a.value?.steps?.length === o.value && x().then(() => d());
	}, d = () => {
		o.value = -1;
	}, f = (t, n, ...r) => {
		a.value?.steps[o.value] === t && e.value && e.value[n]?.(...r);
	}, p = (e = 0) => {
		e && (o.value += e), f(qf.month, "toggleMonthPicker", !0), f(qf.year, "toggleYearPicker", !0), f(qf.calendar, "toggleTimePicker", !1, !0), f(qf.time, "toggleTimePicker", !0, !0);
		let t = a.value?.steps[o.value];
		(t === qf.hours || t === qf.minutes || t === qf.seconds) && f(t, "toggleTimePicker", !0, !0, t);
	};
	return {
		childMount: l,
		updateFlowStep: u,
		resetFlow: d,
		handleFlow: p,
		flowStep: o
	};
};
function ap(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
function op(e) {
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
function sp(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? lp(s, (e) => e.test(o)) : cp(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function cp(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function lp(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function up(e) {
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
var dp = {
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
}, fp = (e, t, n) => {
	let r, i = dp[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
}, pp = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, mp = (e, t, n, r) => pp[e], hp = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: op({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: op({
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
	month: op({
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
	day: op({
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
	dayPeriod: op({
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
}, gp = {
	ordinalNumber: up({
		matchPattern: /^(\d+)(th|st|nd|rd)?/i,
		parsePattern: /\d+/i,
		valueCallback: (e) => parseInt(e, 10)
	}),
	era: sp({
		matchPatterns: {
			narrow: /^(b|a)/i,
			abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
			wide: /^(before christ|before common era|anno domini|common era)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: { any: [/^b/i, /^(a|c)/i] },
		defaultParseWidth: "any"
	}),
	quarter: sp({
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
	month: sp({
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
	day: sp({
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
	dayPeriod: sp({
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
}, _p = {
	code: "en-US",
	formatDistance: fp,
	formatLong: {
		date: ap({
			formats: {
				full: "EEEE, MMMM do, y",
				long: "MMMM do, y",
				medium: "MMM d, y",
				short: "MM/dd/yyyy"
			},
			defaultWidth: "full"
		}),
		time: ap({
			formats: {
				full: "h:mm:ss a zzzz",
				long: "h:mm:ss a z",
				medium: "h:mm:ss a",
				short: "h:mm a"
			},
			defaultWidth: "full"
		}),
		dateTime: ap({
			formats: {
				full: "{{date}} 'at' {{time}}",
				long: "{{date}} 'at' {{time}}",
				medium: "{{date}}, {{time}}",
				short: "{{date}}, {{time}}"
			},
			defaultWidth: "full"
		})
	},
	formatRelative: mp,
	localize: hp,
	match: gp,
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
}, vp = {
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
}, yp = {
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
}, bp = {
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
}, xp = {
	dates: [],
	years: [],
	months: [],
	quarters: [],
	weeks: [],
	weekdays: [],
	options: { highlightDisabled: !1 }
}, Sp = {
	showSelect: !0,
	showCancel: !0,
	showNow: !1,
	showPreview: !0,
	selectBtnLabel: "Select",
	cancelBtnLabel: "Cancel",
	nowBtnLabel: "Now",
	nowBtnRound: void 0
}, Cp = {
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
}, wp = {
	menuAppearTop: "dp-menu-appear-top",
	menuAppearBottom: "dp-menu-appear-bottom",
	open: "dp-slide-down",
	close: "dp-slide-up",
	next: "calendar-next",
	previous: "calendar-prev",
	vNext: "dp-slide-up",
	vPrevious: "dp-slide-down"
}, Tp = {
	weekDays: [],
	months: [],
	years: [],
	times: {
		hours: [],
		minutes: [],
		seconds: []
	}
}, Ep = {
	month: "LLL",
	year: "yyyy",
	weekDay: "EEEEEE",
	quarter: "MMMM",
	day: "d",
	input: void 0,
	preview: void 0
}, Dp = {
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
}, Op = {
	flowStep: 0,
	menuWrapRef: null,
	collapse: !1
}, kp = {
	weekStart: Qf.Monday,
	yearRange: () => [1900, 2100],
	ui: () => ({}),
	locale: () => _p,
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
}, Ap = {
	name: void 0,
	required: !1,
	autocomplete: "off",
	state: void 0,
	clearable: !0,
	alwaysClearable: !1,
	hideInputIcon: !1,
	id: void 0,
	inputmode: "none"
}, jp = {
	type: "local",
	hideOnOffsetDates: !1,
	label: "W"
}, Mp = (e) => {
	let { getMapKey: t, getMapKeyType: n, getTimeObjFromCurrent: r } = Np();
	function a(t, n) {
		let r;
		return r = e.timezone ? new Pf(t ?? /* @__PURE__ */ new Date(), e.timezone) : t ? new Date(t) : /* @__PURE__ */ new Date(), n ? mf(r, {
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0
		}) : r;
	}
	let o = () => {
		let e = A.value.enableSeconds ? ":ss" : "", t = A.value.enableMinutes ? ":mm" : "";
		return A.value.is24 ? `HH${t}${e}` : `hh${t}${e} aa`;
	}, s = () => e.monthPicker ? "MM/yyyy" : e.timePicker ? o() : e.weekPicker ? `${C.value?.type === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : A.value.enableTimePicker ? `MM/dd/yyyy, ${o()}` : "MM/dd/yyyy", c = (e) => r(a(), e, A.value.enableSeconds), l = () => E.value.enabled ? A.value.startTime && Array.isArray(A.value.startTime) ? [c(A.value.startTime[0]), c(A.value.startTime[1])] : null : A.value.startTime && !Array.isArray(A.value.startTime) ? c(A.value.startTime) : null, u = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : Math.max(+e, 2) : 0, d = (r) => {
		let i = n(e.monthPicker, e.yearPicker);
		return new Map(r.map((e) => {
			let n = a(e, f.value);
			return [t(n, i), n];
		}));
	}, f = i(() => e.monthPicker || e.yearPicker || e.quarterPicker), p = i(() => {
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
	}), m = i(() => l()), h = i(() => ({
		...Cp,
		...e.ariaLabels
	})), g = i(() => ({
		...Tp,
		...e.filters
	})), _ = i(() => typeof e.transitions == "boolean" ? e.transitions ? wp : !1 : {
		...wp,
		...e.transitions
	}), v = i(() => ({
		...Sp,
		...e.actionRow
	})), y = i(() => typeof e.textInput == "object" ? {
		...bp,
		...e.textInput,
		format: typeof e.textInput.format == "string" ? e.textInput.format : O.value.input,
		pattern: e.textInput.format ?? O.value.input,
		enabled: !0
	} : {
		...bp,
		format: O.value.input,
		pattern: O.value.input,
		enabled: e.textInput
	}), b = i(() => {
		let t = { input: !1 };
		return typeof e.inline == "object" ? {
			...t,
			...e.inline,
			enabled: !0
		} : {
			enabled: e.inline,
			...t
		};
	}), x = i(() => ({
		...yp,
		...e.config
	})), S = i(() => typeof e.highlight == "function" ? e.highlight : {
		...xp,
		...e.highlight
	}), C = i(() => typeof e.weekNumbers == "object" ? {
		type: e.weekNumbers?.type ?? jp.type,
		hideOnOffsetDates: e.weekNumbers?.hideOnOffsetDates ?? jp.hideOnOffsetDates,
		label: e.weekNumbers.label ?? jp.label
	} : e.weekNumbers ? jp : void 0), w = i(() => typeof e.multiDates == "boolean" ? {
		enabled: e.multiDates,
		dragSelect: !0,
		limit: null
	} : {
		enabled: !!e.multiDates,
		limit: e.multiDates?.limit ? +e.multiDates.limit : null,
		dragSelect: e.multiDates?.dragSelect ?? !0
	}), T = i(() => ({
		minDate: e.minDate ? a(e.minDate) : null,
		maxDate: e.maxDate ? a(e.maxDate) : null,
		disabledDates: Array.isArray(e.disabledDates) ? d(e.disabledDates) : e.disabledDates,
		allowedDates: Array.isArray(e.allowedDates) ? d(e.allowedDates) : null,
		highlight: typeof S.value == "object" && Array.isArray(S.value.dates) ? d(S.value.dates) : S.value,
		markers: e.markers?.length ? new Map(e.markers.map((e) => {
			let n = a(e.date);
			return [t(n, Zf.DATE), e];
		})) : null
	})), E = i(() => typeof e.range == "object" ? {
		enabled: !0,
		...vp,
		...e.range
	} : {
		enabled: e.range,
		...vp
	}), D = i(() => ({ ...Object.fromEntries(Object.keys(e.ui).map((t) => {
		let n = t, r = e.ui[n];
		return n === "dayClass" ? [n, e.ui[n]] : [t, typeof e.ui[n] == "string" ? { [r]: !0 } : Object.fromEntries(r.map((e) => [e, !0]))];
	})) })), O = i(() => ({
		...Ep,
		...e.formats,
		input: e.formats?.input ?? s(),
		preview: e.formats?.preview ?? s()
	})), k = i(() => {
		if (e.teleport) return typeof e.teleport == "string" ? e.teleport : typeof e.teleport == "boolean" ? "body" : e.teleport;
	}), A = i(() => ({
		...Dp,
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
		flow: i(() => {
			if (e.flow) return {
				steps: [],
				partial: !1,
				...e.flow
			};
		}),
		inputAttrs: i(() => {
			let t = y.value.enabled ? "text" : "none";
			return e.inputAttrs ? {
				...Ap,
				inputmode: t,
				...e.inputAttrs
			} : {
				...Ap,
				inputmode: t
			};
		}),
		floatingConfig: i(() => ({
			offset: e.floating?.offset ?? 10,
			arrow: e.floating?.arrow ?? !0,
			strategy: e.floating?.strategy ?? void 0,
			placement: e.floating?.placement ?? void 0,
			flip: e.floating?.flip ?? !0,
			shift: e.floating?.shift ?? !0
		})),
		getDate: a
	};
}, Np = () => {
	let e = (e, t) => bu(e, t ?? Zf.DATE), t = (e, t) => e ? Zf.MONTH_AND_YEAR : t ? Zf.YEAR : Zf.DATE, n = (t, n, r) => n.get(e(t, r)), r = (e) => e, i = (e) => e === 0 ? e : !e || Number.isNaN(+e) ? null : +e, a = () => [
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
		if (e.key === Xf.enter || e.key === Xf.space) return n && e.preventDefault(), t();
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
			hours: Tu,
			minutes: Du,
			seconds: ku
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
				hours: Tu(e),
				minutes: Du(e),
				seconds: n ? ku(e) : 0
			};
			return Object.assign(r, t);
		},
		errorMapper: g
	};
}, Pp = () => {
	let { getDate: e } = Wf(), { getMapDate: t, getGroupedList: n } = Np(), r = (t, n) => {
		if (!t) return e();
		let r = mf(e(t), {
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0
		});
		return n ? kl(r) : r;
	}, i = (t, n) => {
		let r = e(n);
		return mf(r, {
			hours: +(t.hours ?? Tu(r)),
			minutes: +(t.minutes ?? Du(r)),
			seconds: +(t.seconds ?? ku(r)),
			milliseconds: 0
		});
	}, a = (e, t) => [cl(e, { weekStartsOn: +t }), Ml(e, { weekStartsOn: +t })], o = (e, t) => !e || !t ? !1 : ju(r(e), r(t)), s = (e, t) => !e || !t ? !1 : Mu(r(e), r(t)), c = (e, t) => !e || !t ? !1 : Au(r(e), r(t)), l = (e, t, n) => e?.[0] && e?.[1] ? c(n, e[0]) && o(n, e[1]) : e?.[0] && t ? c(n, e[0]) && o(n, t) || o(n, e[0]) && c(n, t) : !1, u = (e, t) => El({
		start: c(e, t) ? t : e,
		end: c(t, e) ? t : e
	}), d = (e) => `dp-${bu(e, "yyyy-MM-dd")}`, f = (t) => r(mf(e(t), { date: 1 })), p = (t, n) => {
		if (n) {
			let r = $(e(n));
			if (r > t) return 12;
			if (r === t) return Ou(e(n));
		}
	}, m = (t, n) => {
		if (n) {
			let r = $(e(n));
			return r < t ? -1 : r === t ? Ou(e(n)) : void 0;
		}
	}, h = (t) => {
		if (t) return $(e(t));
	}, g = (e) => ({
		hours: Tu(e),
		minutes: Du(e),
		seconds: ku(e)
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
		setTimeValue: (t) => mf(e(), g(t)),
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
			before: Wd(r(t), e),
			after: rl(r(t), e)
		}),
		isModelAuto: (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1,
		matchDate: (n, r) => n ? r ? r instanceof Map ? !!t(n, r) : r(e(n)) : !1 : !0,
		checkHighlightMonth: (e, t, n) => typeof e == "function" ? e({
			month: t,
			year: n
		}) : e.months.some((e) => e.month === t && e.year === n),
		checkHighlightYear: (e, t) => typeof e == "function" ? e(t) : e.years.includes(t)
	};
}, Fp = () => {
	let { defaults: { config: e } } = Wf(), t = N(0);
	D(() => {
		n(), globalThis.addEventListener("resize", n, { passive: !0 });
	}), O(() => {
		globalThis.removeEventListener("resize", n);
	});
	let n = () => {
		t.value = globalThis.document.documentElement.clientWidth;
	};
	return { isMobile: i(() => t.value <= e.value.mobileBreakpoint || void 0) };
}, Ip = () => {
	let { getDate: e, state: t, modelValue: n, rootProps: r, defaults: { formats: i, textInput: a } } = Wf(), o = (t) => bu(_f(e(), t), i.value.year, { locale: r.locale }), s = (t) => bu(pf(e(), t), i.value.month, { locale: r.locale }), c = (e) => bu(e, i.value.weekDay, { locale: r.locale }), l = (e) => bu(e, i.value.quarter, { locale: r.locale }), u = (e, t) => [e, t].map((e) => l(e)).join("-"), d = (e) => bu(e, i.value.day, { locale: r.locale }), f = (e, t, n) => {
		let o = n ? i.value.preview : i.value.input;
		if (!e) return "";
		if (typeof o == "function") return o(e);
		let s = t ?? o, c = { locale: r.locale };
		return Array.isArray(e) ? `${bu(e[0], s, c)}${r.modelAuto && !e[1] ? "" : a.value.rangeSeparator}${e[1] ? bu(e[1], s, c) : ""}` : bu(e, s, c);
	}, p = () => {
		let e = (e) => bu(e, a.value.format);
		return Array.isArray(n.value) ? `${e(n.value[0])} ${a.value.rangeSeparator} ${n.value[1] ? e(n.value[1]) : ""}` : "";
	};
	return {
		formatYear: o,
		formatMonth: s,
		formatWeekDay: c,
		formatQuarter: l,
		formatSelectedDate: f,
		formatForTextInput: () => t.isInputFocused && n.value ? Array.isArray(n.value) ? p() : bu(n.value, a.value.format) : f(n.value),
		formatPreview: (e) => f(e, void 0, !0),
		formatQuarterText: u,
		formatDay: d
	};
}, Lp = () => {
	let { rootProps: e } = Wf(), { formatYear: t, formatMonth: n } = Ip();
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
}, Rp = (e) => ({
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
}), zp = () => ({ boolHtmlAttribute: (e) => e ? !0 : void 0 }), Bp = () => {
	let { getDate: e, rootProps: t, defaults: { textInput: n, startTime: r, timeConfig: a } } = Wf(), { getTimeObjFromCurrent: o } = Np(), s = N(!1), c = i(() => Array.isArray(r.value) ? r.value[0] : r.value ?? o(e(), {}, a.value.enableSeconds)), l = (e, t) => {
		let n = /[^a-zA-Z]+/g, r = /\D+/g, i = t.split(r), a = e.split(n), o = e.match(n) || [], s = t.match(r) || [], c = "";
		for (let e = 0; e < i.length && e < a.length; e++) {
			e > 0 && s[e - 1] && (c += o[e - 1] || s[e - 1]);
			let t = i[e]?.length;
			c += a[e]?.slice(0, t);
		}
		return c;
	}, u = (n, r, i) => {
		let a = Vd(n, l(r, n), e(), { locale: t.locale });
		return bl(a) && yl(a) ? i || s.value ? a : mf(a, {
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
}, Vp = /* @__PURE__ */ ((e) => (e.Input = "input", e.DatePicker = "date-picker", e.Calendar = "calendar", e.DatePickerHeader = "date-picker-header", e.Menu = "menu", e.ActionRow = "action-row", e.TimePicker = "time-picker", e.TimeInput = "time-input", e.PassTrough = "pass-trough", e.MonthPicker = "month-picker", e.YearMode = "year-mode", e.QuarterPicker = "quarter-picker", e.YearPicker = "year-picker", e))(Vp || {}), Hp = [
	"time-input",
	"time-picker",
	"pass-trough"
], Up = [
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
		use: Hp
	},
	{
		name: "hours-overlay-header",
		use: Hp
	},
	{
		name: "minutes-overlay-value",
		use: Hp
	},
	{
		name: "minutes-overlay-header",
		use: Hp
	},
	{
		name: "seconds-overlay-value",
		use: Hp
	},
	{
		name: "seconds-overlay-header",
		use: Hp
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
], Wp = (e, t) => Up.filter((n) => e[n.name] && n.use.includes(t)).map((e) => e.name), Gp = (e, t) => Up.map((e) => e.name).concat(t?.filter((e) => e.slot).map((e) => e.slot) ?? []).filter((t) => !!e[t]), Kp = {
	key: 1,
	class: "dp__input_wrap"
}, qp = [
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
], Jp = {
	key: 1,
	class: "dp--clear-btn"
}, Yp = ["aria-label"], Xp = /* @__PURE__ */ f({
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
		let r = n, l = e, { rootEmit: u, inputValue: f, rootProps: p, defaults: { textInput: m, ariaLabels: h, inline: g, config: _, range: v, multiDates: y, ui: b, inputAttrs: C } } = Wf(), { checkMinMaxRange: w, isValidDate: T } = rp(), { parseFreeInput: E, textPasted: D, createMaskedValue: O, applyMaxValues: A } = Bp(), { checkKeyDown: j, checkStopPropagation: M } = Np(), { boolHtmlAttribute: P } = zp(), I = W("dp-input"), L = N(null), R = N(!1), z = i(() => ({
			dp__pointer: !p.disabled && !p.readonly && !m.value.enabled,
			dp__disabled: p.disabled,
			dp__input_readonly: !m.value.enabled,
			dp__input: !0,
			dp__input_not_clearable: !C.value.clearable,
			dp__input_icon_pad: !C.value.hideInputIcon,
			dp__input_valid: typeof C.value.state == "boolean" && C.value.state,
			dp__input_invalid: typeof C.value.state == "boolean" && !C.value.state,
			dp__input_focus: R.value || l.isMenuOpen,
			dp__input_reg: !m.value.enabled,
			...b.value.input
		})), B = () => {
			r("set-input-date", null), C && p.autoApply && (r("set-empty-date"), L.value = null);
		}, V = (e) => {
			if (m.value.separators?.length) {
				let t = new RegExp(m.value.separators.map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"));
				return e.split(t);
			}
			return e.split(m.value.rangeSeparator);
		}, U = (e) => {
			let [t, n] = V(e);
			if (t) {
				let e = E(t.trim(), f.value), r = n ? E(n.trim(), f.value) : void 0;
				if (Au(e, r)) return;
				let i = e && r ? [e, r] : [e];
				w(r, i, 0) && (L.value = e ? i : null);
			}
		}, ee = () => {
			D.value = !0;
		}, G = (e) => {
			if (v.value.enabled) U(e);
			else if (y.value.enabled) {
				let t = e.split(";");
				L.value = t.map((e) => E(e.trim())).filter((e) => !!e);
			} else L.value = E(e, f.value);
		}, K = (e) => {
			let t = typeof e == "string" ? e : e.target?.value, n = m?.value?.maskFormat, i = t;
			if (typeof n == "string") {
				let e = [...n.matchAll(/(YYYY|MM|DD|hh|mm|ss)/g)].map((e) => e[0]), r = t.replace(/\D/g, ""), a = A(r, e);
				i = O(a, n);
			}
			i === "" ? B() : (m.value.openMenu && !l.isMenuOpen && r("open"), G(i), r("set-input-date", L.value)), D.value = !1, f.value = i, u("text-input", e, L.value);
		}, q = (e) => {
			m.value.enabled ? (G(e.target.value), m.value.enterSubmit && T(L.value) && f.value !== "" ? (r("set-input-date", L.value, !0), L.value = null) : m.value.enterSubmit && f.value === "" && (L.value = null, r("clear"))) : Y(e);
		}, J = (e, t) => {
			m.value.enabled && m.value.tabSubmit && !t && G(e.target.value), m.value.tabSubmit && T(L.value) && f.value !== "" ? (r("set-input-date", L.value, !0, !0), L.value = null) : m.value.tabSubmit && f.value === "" && (L.value = null, r("clear"));
		}, te = () => {
			R.value = !0, r("focus"), x().then(() => {
				m.value.enabled && m.value.selectOnFocus && I.value?.select();
			});
		}, Y = (e) => {
			if (M(e, _.value, !0), m.value.enabled && m.value.openMenu && !g.value.input) {
				if (m.value.openMenu === "open" && !l.isMenuOpen) return r("open");
				if (m.value.openMenu === "toggle") return r("toggle");
			} else m.value.enabled || r("toggle");
		}, ne = () => {
			r("real-blur"), R.value = !1, (!l.isMenuOpen || g.value.enabled && g.value.input) && r("blur"), (p.autoApply && m.value.enabled && L.value && !l.isMenuOpen || m.value.applyOnBlur) && (r("set-input-date", L.value), r("select-date"), L.value = null);
		}, X = (e) => {
			M(e, _.value, !0), r("clear");
		}, re = () => {
			r("close");
		}, ie = (e) => {
			if (e.key === "Tab" && J(e), e.key === "Enter" && q(e), e.key === "Escape" && m.value.escClose && re(), !m.value.enabled) {
				if (e.code === "Tab") return;
				e.preventDefault();
			}
		}, ae = () => {
			I.value?.focus({ preventScroll: !0 });
		}, oe = (e) => {
			L.value = e;
		}, se = (e) => {
			e.key === Xf.tab && J(e, !0);
		};
		return t({
			focusInput: ae,
			setParsedDate: oe
		}), (t, n) => (k(), s("div", { onClick: Y }, [!t.$slots["dp-input"] && !H(g).enabled ? F(t.$slots, "trigger", { key: 0 }) : o("", !0), !t.$slots.trigger && (!H(g).enabled || H(g).input) ? (k(), s("div", Kp, [
			!t.$slots.trigger && (!H(g).enabled || H(g).enabled && H(g).input) ? F(t.$slots, "dp-input", {
				key: 0,
				value: H(f),
				isMenuOpen: e.isMenuOpen,
				onInput: K,
				onEnter: q,
				onTab: J,
				onClear: X,
				onBlur: ne,
				onKeypress: ie,
				onPaste: ee,
				onFocus: te,
				openMenu: () => t.$emit("open"),
				closeMenu: () => t.$emit("close"),
				toggleMenu: () => t.$emit("toggle")
			}, () => [c("input", {
				id: H(C).id,
				ref: "dp-input",
				"data-test-id": "dp-input",
				name: H(C).name,
				class: S(z.value),
				inputmode: H(C).inputmode,
				placeholder: H(p).placeholder,
				disabled: H(P)(H(p).disabled),
				readonly: H(P)(H(p).readonly),
				required: H(P)(H(C).required),
				value: H(f),
				autocomplete: H(C).autocomplete,
				"aria-label": H(h).input,
				"aria-disabled": H(p).disabled || void 0,
				"aria-invalid": H(C).state === !1 || void 0,
				onInput: K,
				onBlur: ne,
				onFocus: te,
				onKeypress: ie,
				onKeydown: n[0] ||= (e) => ie(e),
				onPaste: ee,
				onInvalid: n[1] ||= (e) => H(u)("invalid", e)
			}, null, 42, qp)]) : o("", !0),
			c("div", { onClick: n[4] ||= (e) => r("toggle") }, [t.$slots["input-icon"] && !H(C).hideInputIcon ? (k(), s("span", {
				key: 0,
				class: "dp__input_icon",
				onClick: n[2] ||= (e) => r("toggle")
			}, [F(t.$slots, "input-icon")])) : o("", !0), !t.$slots["input-icon"] && !H(C).hideInputIcon && !t.$slots["dp-input"] ? (k(), a(H(Ff), {
				key: 1,
				"aria-label": H(h)?.calendarIcon,
				class: "dp__input_icon dp__input_icons",
				onClick: n[3] ||= (e) => r("toggle")
			}, null, 8, ["aria-label"])) : o("", !0)]),
			t.$slots["clear-icon"] && (H(C).alwaysClearable || H(f) && H(C).clearable && !H(p).disabled && !H(p).readonly) ? (k(), s("span", Jp, [F(t.$slots, "clear-icon", { clear: X })])) : o("", !0),
			!t.$slots["clear-icon"] && (H(C).alwaysClearable || H(C).clearable && H(f) && !H(p).disabled && !H(p).readonly) ? (k(), s("button", {
				key: 2,
				"aria-label": H(h)?.clearInput,
				class: "dp--clear-btn",
				type: "button",
				"data-test-id": "clear-input-value-btn",
				onKeydown: n[5] ||= (e) => H(j)(e, () => X(e), !0, se),
				onClick: n[6] ||= Z((e) => X(e), ["prevent"])
			}, [d(H(If), { class: "dp__input_icons" })], 40, Yp)) : o("", !0)
		])) : o("", !0)]));
	}
}), Zp = {
	ref: "action-row",
	class: "dp__action_row"
}, Qp = ["title"], $p = {
	ref: "action-buttons-container",
	class: "dp__action_buttons",
	"data-dp-element": "action-row"
}, em = ["disabled"], tm = /* @__PURE__ */ f({
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
	setup(e, { emit: n }) {
		let r = n, a = e, { rootEmit: l, rootProps: d, modelValue: f, defaults: { actionRow: p, multiCalendars: m, inline: h, range: g, multiDates: _, formats: v } } = Wf(), { isTimeValid: y, isMonthValid: x } = rp(), { formatPreview: S } = Ip(), { checkKeyDown: T, convertType: E } = Np(), { boolHtmlAttribute: A } = zp(), j = W("action-buttons-container"), M = W("action-row"), P = N(!1), I = N({});
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
		}, R = i(() => g.value.enabled && !g.value.partialRange && f.value ? f.value.length === 2 : !0), B = i(() => !y.value(f.value) || !x.value(f.value) || !R.value), V = () => {
			let e = v.value.preview;
			return d.timePicker || d.monthPicker, e(E(f.value));
		}, U = () => {
			let e = f.value;
			return m.value.count > 0 ? `${S(e[0])} - ${S(e[1])}` : [S(e[0]), S(e[1])];
		}, ee = i(() => !f.value || !a.menuMount ? "" : typeof v.value.preview == "string" ? Array.isArray(f.value) ? f.value.length === 2 && f.value[1] ? U() : _.value.enabled ? f.value.map((e) => `${S(e)}`) : d.modelAuto ? `${S(f.value[0])}` : `${S(f.value[0])} -` : S(f.value) : V()), G = () => _.value.enabled ? "; " : " - ", K = i(() => Array.isArray(ee.value) ? ee.value.join(G()) : ee.value), q = () => {
			y.value(f.value) && x.value(f.value) && R.value ? r("select-date") : l("invalid-select");
		};
		return (e, n) => (k(), s("div", Zp, [e.$slots["action-row"] ? F(e.$slots, "action-row", C(b({ key: 0 }, {
			modelValue: H(f),
			disabled: B.value,
			selectDate: () => e.$emit("select-date"),
			closePicker: () => e.$emit("close-picker")
		}))) : (k(), s(t, { key: 1 }, [H(p).showPreview ? (k(), s("div", {
			key: 0,
			class: "dp__selection_preview",
			title: K.value || void 0,
			style: w(I.value)
		}, [e.$slots["action-preview"] && P.value ? F(e.$slots, "action-preview", {
			key: 0,
			value: H(f),
			formatValue: K.value
		}) : o("", !0), !e.$slots["action-preview"] && P.value ? (k(), s(t, { key: 1 }, [u(z(K.value), 1)], 64)) : o("", !0)], 12, Qp)) : o("", !0), c("div", $p, [e.$slots["action-buttons"] ? F(e.$slots, "action-buttons", {
			key: 0,
			value: H(f),
			selectDate: q,
			selectionDisabled: B.value
		}) : o("", !0), e.$slots["action-buttons"] ? o("", !0) : (k(), s(t, { key: 1 }, [
			!H(h).enabled && H(p).showCancel ? (k(), s("button", {
				key: 0,
				ref: "cancel-btn",
				type: "button",
				"data-dp-action-element": "0",
				class: "dp__action_button dp__action_cancel",
				onClick: n[0] ||= (t) => e.$emit("close-picker"),
				onKeydown: n[1] ||= (t) => H(T)(t, () => e.$emit("close-picker"))
			}, z(H(p).cancelBtnLabel), 545)) : o("", !0),
			H(p).showNow ? (k(), s("button", {
				key: 1,
				type: "button",
				"data-dp-action-element": "0",
				class: "dp__action_button dp__action_cancel",
				onClick: n[2] ||= (t) => e.$emit("select-now"),
				onKeydown: n[3] ||= (t) => H(T)(t, () => e.$emit("select-now"))
			}, z(H(p).nowBtnLabel), 33)) : o("", !0),
			H(p).showSelect ? (k(), s("button", {
				key: 2,
				ref: "select-btn",
				type: "button",
				"data-dp-action-element": "0",
				class: "dp__action_button dp__action_select",
				disabled: H(A)(B.value),
				"data-test-id": "select-button",
				onKeydown: n[4] ||= (e) => H(T)(e, () => q()),
				onClick: q
			}, z(H(p).selectBtnLabel), 41, em)) : o("", !0)
		], 64))], 512)], 64))], 512));
	}
}), nm = () => {
	let { rootProps: e, defaults: { multiCalendars: t } } = Wf();
	return {
		hideNavigationButtons: i(() => (t) => e.hideNavigation?.includes(t)),
		showLeftIcon: i(() => (e) => t.value.count ? t.value.solo ? !0 : e === 0 : !0),
		showRightIcon: i(() => (e) => t.value.count ? t.value.solo ? !0 : e === t.value.count - 1 : !0)
	};
}, rm = [
	"role",
	"aria-label",
	"tabindex"
], im = { class: "dp__selection_grid_header" }, am = [
	"aria-selected",
	"aria-disabled",
	"data-dp-action-element",
	"data-dp-element-active",
	"data-test-id",
	"onClick",
	"onKeydown",
	"onMouseover"
], om = ["aria-label", "data-dp-action-element"], sm = /* @__PURE__ */ f({
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
	setup(e, { emit: n }) {
		let r = n, a = e, { setState: l, defaults: { ariaLabels: d, config: f } } = Wf(), { hideNavigationButtons: p } = nm(), { handleEventPropagation: m, checkKeyDown: h } = Np(), g = W("toggle-button"), _ = W("overlay-container"), v = W("grid-wrap"), y = N(!1), b = N(null), C = N(), T = N(0);
		E(() => {
			b.value = null;
		}), D(async () => {
			await x(), R(), l("arrowNavigationLevel", a.level ?? 1);
		}), O(() => {
			l("arrowNavigationLevel", (a.level ?? 1) - 1);
		});
		let A = i(() => ({
			dp__overlay: !0,
			"dp--overlay-absolute": !a.useRelative,
			"dp--overlay-relative": a.useRelative
		})), j = i(() => a.useRelative ? {
			height: `${a.height}px`,
			width: "var(--dp-menu-min-width)"
		} : void 0), M = i(() => ({ dp__overlay_col: !0 })), I = i(() => ({
			dp__btn: !0,
			dp__button: !0,
			dp__overlay_action: !0,
			dp__over_action_scroll: y.value,
			dp__button_bottom: a.isLast
		})), L = i(() => ({
			dp__overlay_container: !0,
			dp__container_flex: a.items?.length <= 6,
			dp__container_block: a.items?.length > 6
		}));
		J(() => a.items, () => R(!1), { deep: !0 });
		let R = (e = !0) => {
			x().then(() => {
				let t = document.querySelector(`[data-dp-element-active="${a.level ?? 1}"]`), n = oe(v), r = oe(g), i = oe(_), o = r ? r.getBoundingClientRect().height : 0;
				n && (n.getBoundingClientRect().height ? T.value = n.getBoundingClientRect().height - o : T.value = f.value.modeHeight - o), t && i && e && (i.scrollTop = t.offsetTop - i.offsetTop - (T.value / 2 - t.getBoundingClientRect().height) - o);
			});
		}, B = (e) => {
			e.disabled || r("selected", e.value);
		}, V = () => {
			r("toggle"), r("reset-flow");
		}, U = (e) => {
			f.value.escClose && (V(), m(e, f.value));
		}, ee = (e) => {
			C.value = e, r("hover-value", e);
		}, G = (e) => {
			if (e.key === Xf.esc) return U(e);
		}, q = (e) => {
			if (e.key === Xf.enter) return V();
		};
		return (n, r) => (k(), s("div", {
			ref: "grid-wrap",
			class: S(A.value),
			style: w(j.value),
			role: e.useRelative ? void 0 : "dialog",
			"aria-label": e.overlayLabel,
			tabindex: e.useRelative ? void 0 : "0",
			onKeydown: G,
			onClick: r[0] ||= Z(() => {}, ["prevent"])
		}, [c("div", {
			ref: "overlay-container",
			class: S(L.value),
			style: w({ "--dp-overlay-height": `${T.value}px` }),
			role: "grid"
		}, [c("div", im, [F(n.$slots, "header")]), F(n.$slots, "overlay", {}, () => [(k(!0), s(t, null, P(e.items, (r, i) => (k(), s("div", {
			key: i,
			class: S(["dp__overlay_row", { dp__flex_row: e.items.length >= 3 }]),
			role: "row"
		}, [(k(!0), s(t, null, P(r, (t) => (k(), s("div", {
			key: t.value,
			role: "gridcell",
			class: S(M.value),
			"aria-selected": t.active || void 0,
			"aria-disabled": t.disabled || void 0,
			"data-dp-action-element": e.level ?? 1,
			"data-dp-element-active": t.active ? e.level ?? 1 : void 0,
			tabindex: "0",
			"data-test-id": t.text,
			onClick: Z((e) => B(t), ["prevent"]),
			onKeydown: (e) => H(h)(e, () => B(t), !0),
			onMouseover: (e) => ee(t.value)
		}, [c("div", { class: S(t.className) }, [F(n.$slots, "item", { item: t }, () => [u(z(t.text), 1)])], 2)], 42, am))), 128))], 2))), 128))])], 6), n.$slots["button-icon"] ? ne((k(), s("button", {
			key: 0,
			ref: "toggle-button",
			type: "button",
			"aria-label": H(d)?.toggleOverlay,
			class: S(I.value),
			tabindex: "0",
			"data-dp-action-element": e.level ?? 1,
			onClick: V,
			onKeydown: q
		}, [F(n.$slots, "button-icon")], 42, om)), [[K, !H(p)(e.type)]]) : o("", !0)], 46, rm));
	}
}), cm = ["data-dp-mobile"], lm = /* @__PURE__ */ f({
	__name: "InstanceWrap",
	props: {
		stretch: { type: Boolean },
		collapse: { type: Boolean }
	},
	setup(e) {
		let { defaults: { multiCalendars: t } } = Wf(), { isMobile: n } = Fp(), r = i(() => t.value.count > 0 ? [...Array(t.value.count).keys()] : [0]);
		return (i, a) => (k(), s("div", {
			class: S({
				dp__menu_inner: !e.stretch,
				"dp--menu--inner-stretched": e.stretch,
				dp__flex_display: H(t).count > 0,
				"dp--flex-display-collapsed": e.collapse
			}),
			"data-dp-mobile": H(n)
		}, [F(i.$slots, "default", {
			instances: r.value,
			wrapClass: { dp__instance_calendar: H(t).count > 0 }
		})], 10, cm));
	}
}), um = [
	"data-dp-element",
	"aria-label",
	"aria-disabled"
], dm = /* @__PURE__ */ f({
	__name: "ArrowBtn",
	props: {
		ariaLabel: {},
		elName: {},
		disabled: { type: Boolean }
	},
	emits: ["activate", "set-ref"],
	setup(e, { emit: t }) {
		let { checkKeyDown: n } = Np(), r = t;
		return (t, i) => (k(), s("button", {
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
		}, [c("span", { class: S(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }]) }, [F(t.$slots, "default")], 2)], 40, um));
	}
}), fm = ["aria-label", "data-test-id"], pm = /* @__PURE__ */ f({
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
	setup(e, { emit: n }) {
		let f = n, p = e, { showRightIcon: m, showLeftIcon: h } = nm(), { rootProps: g, defaults: { config: _, ariaLabels: v, ui: y } } = Wf(), { showTransition: b, transitionName: x } = tp(), { formatYear: C } = Ip(), { boolHtmlAttribute: w } = zp(), T = N(!1), E = i(() => C(p.year)), D = (e = !1, t) => {
			T.value = !T.value, f("toggle-year-picker", {
				flow: e,
				show: t
			});
		}, O = (e) => {
			T.value = !1, f("year-select", e);
		}, A = (e = !1) => {
			f("handle-year", e);
		};
		return (n, i) => (k(), s(t, null, [c("div", { class: S(["dp--year-mode-picker", { "dp--hidden-el": T.value }]) }, [
			H(h)(e.instance) ? (k(), a(dm, {
				key: 0,
				ref: "mpPrevIconRef",
				"aria-label": H(v)?.prevYear,
				disabled: H(w)(e.isDisabled(!1)),
				class: S(H(y)?.navBtnPrev),
				onActivate: i[0] ||= (e) => A(!1)
			}, {
				default: Y(() => [n.$slots["arrow-left"] ? F(n.$slots, "arrow-left", { key: 0 }) : o("", !0), n.$slots["arrow-left"] ? o("", !0) : (k(), a(H(Lf), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : o("", !0),
			c("button", {
				ref: "mpYearButtonRef",
				class: "dp__btn dp--year-select",
				type: "button",
				"aria-label": `${e.year}-${H(v)?.openYearsOverlay}`,
				"data-test-id": `year-mode-btn-${e.instance}`,
				"data-dp-action-element": "0",
				onClick: i[1] ||= () => D(!1),
				onKeydown: i[2] ||= X(Z(() => D(!1), ["prevent"]), ["enter"])
			}, [n.$slots.year ? F(n.$slots, "year", {
				key: 0,
				text: E.value,
				value: e.year
			}) : o("", !0), n.$slots.year ? o("", !0) : (k(), s(t, { key: 1 }, [u(z(e.year), 1)], 64))], 40, fm),
			H(m)(e.instance) ? (k(), a(dm, {
				key: 1,
				ref: "mpNextIconRef",
				"aria-label": H(v)?.nextYear,
				disabled: H(w)(e.isDisabled(!0)),
				class: S(H(y)?.navBtnNext),
				onActivate: i[3] ||= (e) => A(!0)
			}, {
				default: Y(() => [n.$slots["arrow-right"] ? F(n.$slots, "arrow-right", { key: 0 }) : o("", !0), n.$slots["arrow-right"] ? o("", !0) : (k(), a(H(Rf), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : o("", !0)
		], 2), d(r, {
			name: H(x)(e.showYearPicker),
			css: H(b)
		}, {
			default: Y(() => [e.showYearPicker ? (k(), a(sm, {
				key: 0,
				items: e.items,
				config: H(_),
				"is-last": H(g).autoApply && !H(_).keepActionRow,
				"overlay-label": H(v)?.yearPicker?.(!0),
				type: "year",
				onToggle: D,
				onSelected: i[4] ||= (e) => O(e)
			}, l({
				"button-icon": Y(() => [n.$slots["calendar-icon"] ? F(n.$slots, "calendar-icon", { key: 0 }) : o("", !0), n.$slots["calendar-icon"] ? o("", !0) : (k(), a(H(Ff), { key: 1 }))]),
				_: 2
			}, [n.$slots["year-overlay-value"] ? {
				name: "item",
				fn: Y(({ item: e }) => [F(n.$slots, "year-overlay-value", {
					text: e.text,
					value: e.value
				})]),
				key: "0"
			} : void 0]), 1032, [
				"items",
				"config",
				"is-last",
				"overlay-label"
			])) : o("", !0)]),
			_: 3
		}, 8, ["name", "css"])], 64));
	}
}), mm = (e) => {
	let { getDate: t, rootEmit: n, state: r, month: a, year: o, modelValue: s, calendars: c, rootProps: l, defaults: { multiCalendars: u, range: d, safeDates: f, filters: p, highlight: m } } = Wf(), { resetDate: h, getYearFromDate: g, checkHighlightYear: _, groupListAndMap: v } = Pp(), { getYears: y } = Lp(), { validateMonthYear: b, checkMinMaxValue: x } = rp(), S = N([!1]), C = i(() => y()), w = i(() => (e, n) => {
		let r = mf(h(t()), {
			month: a.value(e),
			year: o.value(e)
		}), i = n ? Al(r) : jl(r);
		return b(i, l.preventMinMaxNavigation, n);
	}), T = () => Array.isArray(s.value) && u.value.solo && s.value[1], E = () => {
		for (let e = 0; e < u.value.count; e++) if (e === 0) c.value[e] = c.value[0];
		else if (e === u.value.count - 1 && T()) c.value[e] = {
			month: Ou(s.value[1]),
			year: $(s.value[1])
		};
		else {
			let n = mf(t(), c.value[e - 1]);
			c.value[e] = {
				month: Ou(n),
				year: $(_l(n, 1))
			};
		}
	}, O = (e) => {
		if (!e) return E();
		let n = mf(t(), c.value[e]);
		return c.value[0].year = $(bf(n, u.value.count - 1)), E();
	}, k = (e, t) => {
		let n = wl(t, e);
		return d.value.showLastInRange && n > 1 ? t : e;
	}, A = (e) => l.focusStartDate || u.value.solo ? e[0] : e[1] ? k(e[0], e[1]) : e[0], j = () => {
		if (s.value) {
			let e = Array.isArray(s.value) ? A(s.value) : s.value;
			c.value[0] = {
				month: Ou(e),
				year: $(e)
			};
		}
	}, M = () => {
		j(), u.value.count && E();
	};
	J(s, (e, t) => {
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
	}, F = i(() => (e) => v(C.value, (t) => ({
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
			overlay: qf.year
		}) : n("overlay-toggle", {
			open: !1,
			overlay: qf.year
		});
	};
	return {
		isDisabled: w,
		groupedYears: F,
		showYearPicker: S,
		selectYear: P,
		setStartDate: () => {
			l.startDate && (s.value && l.focusStartDate || !s.value) && P($(t(l.startDate)), 0);
		},
		toggleYearPicker: R,
		handleYearSelect: I,
		handleYear: L
	};
}, hm = () => {
	let { isDateAfter: e, isDateBefore: t, isDateEqual: n } = Pp(), { getDate: r, rootEmit: i, rootProps: a, modelValue: o, defaults: { range: s } } = Wf();
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
}, gm = (e, t) => {
	let { getDate: n, rootEmit: r, state: a, calendars: o, year: s, modelValue: c, rootProps: l, defaults: { range: u, highlight: d, safeDates: f, filters: p, multiDates: m } } = Wf();
	np(() => {
		a.isTextInputDate && L($(n(l.startDate)), 0);
	});
	let { checkMinMaxRange: h, checkMinMaxValue: g } = rp(), { isDateBetween: _, resetDateTime: v, resetDate: y, getMinMonth: b, getMaxMonth: S, checkHighlightMonth: C, groupListAndMap: w } = Pp(), { checkRangeAutoApply: T, getRangeWithFixedDate: E, handleMultiDatesSelect: O, setMonthOrYearRange: k, setPresetDate: A } = hm(), { padZero: j } = Np(), { getMonths: M, isOutOfYearRange: P } = Lp(), F = i(() => M()), I = N(null), { selectYear: L, groupedYears: R, showYearPicker: z, toggleYearPicker: B, handleYearSelect: V, handleYear: H, isDisabled: U, setStartDate: ee } = mm(t);
	D(() => {
		ee();
	});
	let W = (e) => e ? {
		month: Ou(e),
		year: $(e)
	} : {
		month: null,
		year: null
	}, G = () => c.value ? Array.isArray(c.value) ? c.value.map((e) => W(e)) : W(c.value) : W(), K = (e, t) => {
		let n = o.value[e], r = G();
		return Array.isArray(r) ? r.some((e) => e.year === n?.year && e.month === t) : n?.year === r.year && t === r.month;
	}, q = (e, t, n) => {
		let r = G();
		return Array.isArray(r) ? s.value(t) === r[n]?.year && e === r[n]?.month : !1;
	}, J = (e, t) => {
		if (u.value.enabled) {
			let r = G();
			if (Array.isArray(c.value) && Array.isArray(r)) {
				let r = q(e, t, 0) || q(e, t, 1), i = mf(y(n()), {
					month: e,
					year: s.value(t)
				});
				return _(c.value, I.value, i) && !r;
			}
			return !1;
		}
		return !1;
	}, te = i(() => (e) => w(F.value, (t) => ({
		active: K(e, t.value),
		disabled: g(t.value, b(s.value(e), f.value.minDate), S(s.value(e), f.value.maxDate)) || ce(f.value.disabledDates, s.value(e), t.value) || p.value.months?.includes(t.value) || !le(f.value.allowedDates, s.value(e), t.value) || P(s.value(e)),
		isBetween: J(t.value, e),
		highlighted: C(d.value, t.value, s.value(e))
	}))), Y = (e, t) => mf(y(n()), {
		month: e,
		year: s.value(t)
	}), ne = (e, r) => {
		let i = c.value ? c.value : y(n());
		c.value = mf(i, {
			month: e,
			year: s.value(r)
		}), t("auto-apply"), t("update-flow-step");
	}, X = (e, n) => {
		let r = Y(e, n);
		u.value.fixedEnd || u.value.fixedStart ? c.value = E(r) : c.value ? h(r, c.value) && (c.value = k(Y(e, n))) : c.value = [Y(e, n)], x().then(() => {
			T(c.value, t, c.value.length < 2);
		});
	}, Z = (e, n) => {
		O(Y(e, n), m.value.limit), t("auto-apply", !0);
	}, re = (e, t) => (o.value[t].month = e, ae(t, o.value[t].year, e), m.value.enabled ? Z(e, t) : u.value.enabled ? X(e, t) : ne(e, t)), ie = (e, t) => {
		L(e, t), ae(t, e, null);
	}, ae = (e, t, n) => {
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
	}, oe = (e, t) => {
		I.value = Y(e, t);
	}, se = (e) => {
		A({ value: e }), t("auto-apply");
	}, ce = (e, t, r) => {
		if (e instanceof Map) {
			let n = `${j(r + 1)}-${t}`;
			return e.size ? e.has(n) : !1;
		}
		return typeof e == "function" && e(v(mf(n(), {
			month: r,
			year: t
		}), !0));
	}, le = (e, t, n) => {
		if (e instanceof Map) {
			let r = `${j(n + 1)}-${t}`;
			return !e.size || e.has(r);
		}
		return !0;
	};
	return {
		groupedMonths: te,
		groupedYears: R,
		year: s,
		isDisabled: U,
		showYearPicker: z,
		modelValue: c,
		toggleYearPicker: B,
		handleYearSelect: V,
		handleYear: H,
		presetDate: se,
		setHoverDate: oe,
		selectMonth: re,
		selectYear: ie,
		getModelMonthYear: G
	};
}, _m = /* @__PURE__ */ f({
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
	setup(e, { expose: n, emit: r }) {
		let i = r, c = e, u = ee(), { rootProps: f, defaults: { config: p } } = Wf(), m = Wp(u, Vp.YearMode);
		D(() => {
			i("mount");
		});
		let { groupedMonths: h, groupedYears: g, year: _, isDisabled: v, showYearPicker: y, modelValue: x, presetDate: C, setHoverDate: w, selectMonth: T, selectYear: E, toggleYearPicker: O, handleYearSelect: A, handleYear: j, getModelMonthYear: M } = gm(c, i);
		return n({
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
		}), (n, r) => (k(), a(lm, {
			collapse: e.collapse,
			stretch: ""
		}, {
			default: Y(({ instances: r, wrapClass: i }) => [(k(!0), s(t, null, P(r, (t) => (k(), s("div", {
				key: t,
				class: S(i)
			}, [n.$slots["top-extra"] ? F(n.$slots, "top-extra", {
				key: 0,
				value: H(x)
			}) : o("", !0), F(n.$slots, "month-year", b({ ref_for: !0 }, {
				year: H(_),
				months: H(h)(t),
				years: H(g)(t),
				selectMonth: H(T),
				selectYear: H(E),
				instance: t
			}), () => [d(sm, {
				items: H(h)(t),
				"is-last": H(f).autoApply && !H(p).keepActionRow,
				height: H(p).modeHeight,
				"no-overlay-focus": !!(e.noOverlayFocus || H(f).textInput),
				"use-relative": "",
				level: 0,
				type: "month",
				onSelected: (e) => H(T)(e, t),
				onHoverValue: (e) => H(w)(e, t)
			}, l({
				header: Y(() => [d(pm, {
					items: H(g)(t),
					instance: t,
					"show-year-picker": H(y)[t],
					year: H(_)(t),
					"is-disabled": (e) => H(v)(t, e),
					onHandleYear: (e) => H(j)(t, e),
					onYearSelect: (e) => H(A)(e, t),
					onToggleYearPicker: (e) => H(O)(t, e?.flow, e?.show)
				}, l({ _: 2 }, [P(H(m), (e, t) => ({
					name: e,
					fn: Y((t) => [F(n.$slots, e, b({ ref_for: !0 }, t))])
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
			}, [n.$slots["month-overlay-value"] ? {
				name: "item",
				fn: Y(({ item: e }) => [F(n.$slots, "month-overlay-value", {
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
}), vm = (e, t) => {
	let { rootEmit: n, getDate: r, state: a, modelValue: o, rootProps: s, defaults: { highlight: c, multiDates: l, filters: u, range: d, safeDates: f } } = Wf(), { getYears: p } = Lp(), { isDateBetween: m, resetDate: h, resetDateTime: g, getYearFromDate: _, checkHighlightYear: v, groupListAndMap: y } = Pp(), { checkRangeAutoApply: b, setMonthOrYearRange: S } = hm(), { checkMinMaxValue: C, checkMinMaxRange: w } = rp();
	np(() => {
		a.isTextInputDate && (E.value = $(r(s.startDate)));
	});
	let T = N(null), E = N();
	D(() => {
		s.startDate && (o.value && s.focusStartDate || !o.value) && (E.value = $(r(s.startDate)));
	});
	let O = (e) => Array.isArray(o.value) ? o.value.some((t) => $(t) === e) : o.value ? $(o.value) === e : !1, k = (e) => d.value.enabled && Array.isArray(o.value) ? m(o.value, T.value, P(e)) : !1, A = (e) => !f.value.allowedDates?.size || f.value.allowedDates.has(`${e}`), j = (e) => f.value.disabledDates instanceof Map ? f.value.disabledDates.size ? f.value.disabledDates.has(`${e}`) : !1 : typeof f.value.disabledDates != "function" || f.value.disabledDates(_f(g(jl(r())), e)), M = i(() => y(p(), (e) => {
		let t = O(e.value);
		return {
			active: t,
			disabled: C(e.value, _(f.value.minDate), _(f.value.maxDate)) || u.value.years.includes(e.value) || !A(e.value) || j(e.value),
			isBetween: k(e.value) && !t,
			highlighted: v(c.value, e.value)
		};
	})), P = (e) => _f(h(jl(r())), e);
	return {
		groupedYears: M,
		focusYear: E,
		setHoverValue: (e) => {
			T.value = _f(h(r()), e);
		},
		selectYear: (e) => {
			if (n("update-month-year", {
				instance: 0,
				year: e,
				month: NaN
			}), l.value.enabled) return o.value ? Array.isArray(o.value) && ((o.value?.map((e) => $(e))).includes(e) ? o.value = o.value.filter((t) => $(t) !== e) : o.value.push(_f(g(r()), e))) : o.value = [_f(g(jl(r())), e)], t("auto-apply", !0);
			d.value.enabled ? w(P(e), o.value) && (o.value = S(P(e)), x().then(() => {
				b(o.value, t, o.value.length < 2);
			})) : (o.value = P(e), t("auto-apply"));
		}
	};
}, ym = /* @__PURE__ */ f({
	__name: "YearPicker",
	props: {
		flowStep: {},
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["reset-flow", "auto-apply"],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = e, { modelValue: c, defaults: { config: u }, rootProps: d } = Wf(), { groupedYears: f, focusYear: p, selectYear: m, setHoverValue: h } = vm(i, r);
		return t({ getSidebarProps: () => ({
			modelValue: c,
			selectYear: m
		}) }), (t, n) => (k(), s("div", null, [t.$slots["top-extra"] ? F(t.$slots, "top-extra", {
			key: 0,
			value: H(c)
		}) : o("", !0), t.$slots["month-year"] ? F(t.$slots, "month-year", C(b({ key: 1 }, {
			years: H(f),
			selectYear: H(m)
		}))) : (k(), a(sm, {
			key: 2,
			items: H(f),
			"is-last": H(d).autoApply && !H(u).keepActionRow,
			height: H(u).modeHeight,
			"no-overlay-focus": !!(e.noOverlayFocus || H(d).textInput),
			"focus-value": H(p),
			type: "year",
			"use-relative": "",
			onSelected: H(m),
			onHoverValue: H(h)
		}, l({ _: 2 }, [t.$slots["year-overlay-value"] ? {
			name: "item",
			fn: Y(({ item: e }) => [F(t.$slots, "year-overlay-value", {
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
}), bm = {
	key: 0,
	class: "dp__time_input"
}, xm = ["data-compact", "data-collapsed"], Sm = [
	"data-test-id",
	"aria-label",
	"data-dp-action-element",
	"onKeydown",
	"onClick",
	"onMousedown"
], Cm = [
	"aria-label",
	"disabled",
	"data-dp-action-element",
	"data-test-id",
	"onKeydown",
	"onClick"
], wm = [
	"data-test-id",
	"aria-label",
	"data-dp-action-element",
	"onKeydown",
	"onClick",
	"onMousedown"
], Tm = { key: 0 }, Em = [
	"aria-label",
	"data-dp-action-element",
	"data-compact"
], Dm = /* @__PURE__ */ f({
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
	setup(e, { expose: n, emit: f }) {
		let p = f, m = e, { getDate: h, rootEmit: g, rootProps: _, defaults: { ariaLabels: v, filters: y, config: b, range: x, multiCalendars: C, timeConfig: w } } = Wf(), { checkKeyDown: T, hoursToAmPmHours: E } = Np(), { boolHtmlAttribute: O } = zp(), { sanitizeTime: A, groupListAndMap: M } = Pp(), { transitionName: I, showTransition: R } = tp(), B = j({
			hours: !1,
			minutes: !1,
			seconds: !1
		}), V = N("AM"), U = N(null), ee = N(), W = N(!1);
		D(() => {
			p("mounted");
		});
		let G = (e) => mf(h(), {
			hours: e.hours,
			minutes: e.minutes,
			seconds: w.value.enableSeconds ? e.seconds : 0,
			milliseconds: 0
		}), K = i(() => _.timePicker || w.value.timePickerInline ? 0 : 1), q = i(() => (e) => ue(e, m[e]) || te(e, m[e])), J = i(() => ({
			hours: m.hours,
			minutes: m.minutes,
			seconds: m.seconds
		})), te = (e, t) => x.value.enabled && !x.value.disableTimeRangeValidation ? !m.validateTime(e, t) : !1, ne = (e, t) => {
			if (x.value.enabled && !x.value.disableTimeRangeValidation) {
				let n = t ? +w.value[`${e}Increment`] : -+w.value[`${e}Increment`], r = m[e] + n;
				return !m.validateTime(e, r);
			}
			return !1;
		}, X = i(() => (e) => !he(+m[e] + +w.value[`${e}Increment`], e) || ne(e, !0)), Z = i(() => (e) => !he(m[e] - +w.value[`${e}Increment`], e) || ne(e, !1)), re = (e, t) => al(mf(h(), e), t), ie = (e, t) => yf(mf(h(), e), t), ae = i(() => ({
			dp__time_col: !0,
			dp__time_col_block: !w.value.timePickerInline,
			dp__time_col_reg_block: !w.value.enableSeconds && w.value.is24 && !w.value.timePickerInline,
			dp__time_col_reg_inline: !w.value.enableSeconds && w.value.is24 && w.value.timePickerInline,
			dp__time_col_reg_with_button: !w.value.enableSeconds && !w.value.is24,
			dp__time_col_sec: w.value.enableSeconds && w.value.is24,
			dp__time_col_sec_with_button: w.value.enableSeconds && !w.value.is24
		})), oe = i(() => w.value.timePickerInline && x.value.enabled && !C.value.count), se = i(() => {
			let e = [{ type: "hours" }];
			return w.value.enableMinutes && e.push({
				type: "",
				separator: !0
			}, { type: "minutes" }), w.value.enableSeconds && e.push({
				type: "",
				separator: !0
			}, { type: "seconds" }), e;
		}), ce = i(() => se.value.filter((e) => !e.separator)), le = i(() => (e) => {
			if (e === "hours") {
				let e = xe(+m.hours);
				return {
					text: e < 10 ? `0${e}` : `${e}`,
					value: e
				};
			}
			return {
				text: m[e] < 10 ? `0${m[e]}` : `${m[e]}`,
				value: m[e]
			};
		}), ue = (e, t) => {
			if (!m.disabledTimesConfig) return !1;
			let n = m.disabledTimesConfig(m.order, e === "hours" ? t : void 0);
			return !n[e] || !!n[e]?.includes(t);
		}, de = (e, t) => t !== "hours" || V.value === "AM" ? e : e + 12, fe = (e) => {
			let t = w.value.is24 ? 24 : 12, n = e === "hours" ? t : 60, r = +w.value[`${e}GridIncrement`], i = e === "hours" && !w.value.is24 ? r : 0, a = [];
			for (let t = i; t < n; t += r) a.push({
				value: w.value.is24 ? t : de(t, e),
				text: t < 10 ? `0${t}` : `${t}`
			});
			return e === "hours" && !w.value.is24 && a.unshift({
				value: V.value === "PM" ? 12 : 0,
				text: "12"
			}), M(a, (t) => ({
				active: !1,
				disabled: y.value.times[e].includes(t.value) || !he(t.value, e) || ue(e, t.value) || te(e, t.value)
			}));
		}, pe = (e) => e >= 0 ? e : 59, me = (e) => e >= 0 ? e : 23, he = (e, t) => {
			let n = _.minTime ? G(A(_.minTime)) : null, r = _.maxTime ? G(A(_.maxTime)) : null, i = G(A(J.value, t, t === "minutes" || t === "seconds" ? pe(e) : me(e)));
			return n && r ? (ju(i, r) || Mu(i, r)) && (Au(i, n) || Mu(i, n)) : n ? Au(i, n) || Mu(i, n) : !r || ju(i, r) || Mu(i, r);
		}, ge = (e) => w.value[`no${e[0].toUpperCase() + e.slice(1)}Overlay`], _e = (e) => {
			ge(e) || (B[e] = !B[e], B[e] ? (W.value = !0, p("overlay-opened", e)) : (W.value = !1, p("overlay-closed", e)));
		}, ve = (e) => e === "hours" ? Tu : e === "minutes" ? Du : ku, ye = () => {
			ee.value && clearTimeout(ee.value);
		}, be = (e, t = !0, n) => {
			let r = t ? re : ie, i = t ? +w.value[`${e}Increment`] : -+w.value[`${e}Increment`];
			he(+m[e] + i, e) && p(`update:${e}`, ve(e)(r({ [e]: +m[e] }, { [e]: +w.value[`${e}Increment`] }))), !n?.keyboard && b.value.timeArrowHoldThreshold && (ee.value = setTimeout(() => {
				be(e, t);
			}, b.value.timeArrowHoldThreshold));
		}, xe = (e) => w.value.is24 ? e : (e >= 12 ? V.value = "PM" : V.value = "AM", E(e)), Se = () => {
			V.value === "PM" ? (V.value = "AM", p("update:hours", m.hours - 12)) : (V.value = "PM", p("update:hours", m.hours + 12)), g("am-pm-change", V.value);
		}, Ce = (e) => {
			B[e] = !0;
		}, we = (e, t) => (_e(e), p(`update:${e}`, t));
		return n({ openChildCmp: Ce }), (e, n) => H(_).disabled ? o("", !0) : (k(), s("div", bm, [
			(k(!0), s(t, null, P(se.value, (r, i) => (k(), s("div", {
				key: i,
				class: S(ae.value),
				"data-compact": oe.value && !H(w).enableSeconds,
				"data-collapsed": oe.value && H(w).enableSeconds
			}, [r.separator ? (k(), s(t, { key: 0 }, [W.value ? o("", !0) : (k(), s(t, { key: 0 }, [u(":")], 64))], 64)) : (k(), s(t, { key: 1 }, [
				c("button", {
					type: "button",
					class: S({
						dp__btn: !0,
						dp__inc_dec_button: !H(w).timePickerInline,
						dp__inc_dec_button_inline: H(w).timePickerInline,
						dp__tp_inline_btn_top: H(w).timePickerInline,
						dp__inc_dec_button_disabled: X.value(r.type),
						"dp--hidden-el": W.value
					}),
					"data-test-id": `${r.type}-time-inc-btn-${m.order}`,
					"aria-label": H(v)?.incrementValue(r.type),
					tabindex: "0",
					"data-dp-action-element": K.value,
					onKeydown: (e) => H(T)(e, () => be(r.type, !0, { keyboard: !0 }), !0),
					onClick: (e) => H(b).timeArrowHoldThreshold ? void 0 : be(r.type, !0),
					onMousedown: (e) => H(b).timeArrowHoldThreshold ? be(r.type, !0) : void 0,
					onMouseup: ye
				}, [H(w).timePickerInline ? F(e.$slots, "tp-inline-arrow-up", { key: 1 }, () => [n[2] ||= c("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), n[3] ||= c("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1)]) : F(e.$slots, "arrow-up", { key: 0 }, () => [d(H(Bf))])], 42, Sm),
				c("button", {
					type: "button",
					"aria-label": `${le.value(r.type).text}-${H(v)?.openTpOverlay(r.type)}`,
					class: S({
						dp__time_display: !0,
						dp__time_display_block: !H(w).timePickerInline,
						dp__time_display_inline: H(w).timePickerInline,
						"dp--time-invalid": q.value(r.type),
						"dp--time-overlay-btn": !q.value(r.type),
						"dp--hidden-el": W.value
					}),
					disabled: H(O)(ge(r.type)),
					tabindex: "0",
					"data-dp-action-element": K.value,
					"data-test-id": `${r.type}-toggle-overlay-btn-${m.order}`,
					onKeydown: (e) => H(T)(e, () => _e(r.type), !0),
					onClick: (e) => _e(r.type)
				}, [F(e.$slots, r.type, {
					text: le.value(r.type).text,
					value: le.value(r.type).value
				}, () => [u(z(le.value(r.type).text), 1)])], 42, Cm),
				c("button", {
					type: "button",
					class: S({
						dp__btn: !0,
						dp__inc_dec_button: !H(w).timePickerInline,
						dp__inc_dec_button_inline: H(w).timePickerInline,
						dp__tp_inline_btn_bottom: H(w).timePickerInline,
						dp__inc_dec_button_disabled: Z.value(r.type),
						"dp--hidden-el": W.value
					}),
					"data-test-id": `${r.type}-time-dec-btn-${m.order}`,
					"aria-label": H(v)?.decrementValue(r.type),
					tabindex: "0",
					"data-dp-action-element": K.value,
					onKeydown: (e) => H(T)(e, () => be(r.type, !1, { keyboard: !0 }), !0),
					onClick: (e) => H(b).timeArrowHoldThreshold ? void 0 : be(r.type, !1),
					onMousedown: (e) => H(b).timeArrowHoldThreshold ? be(r.type, !1) : void 0,
					onMouseup: ye
				}, [H(w).timePickerInline ? F(e.$slots, "tp-inline-arrow-down", { key: 1 }, () => [n[4] ||= c("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), n[5] ||= c("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1)]) : F(e.$slots, "arrow-down", { key: 0 }, () => [d(H(Vf))])], 42, wm)
			], 64))], 10, xm))), 128)),
			H(w).is24 ? o("", !0) : (k(), s("div", Tm, [F(e.$slots, "am-pm-button", {
				toggle: Se,
				value: V.value
			}, () => [c("button", {
				ref_key: "amPmButton",
				ref: U,
				type: "button",
				class: "dp__pm_am_button",
				role: "button",
				"aria-label": H(v)?.amPmButton,
				tabindex: "0",
				"data-dp-action-element": K.value,
				"data-compact": oe.value,
				onClick: Se,
				onKeydown: n[0] ||= (e) => H(T)(e, () => Se(), !0)
			}, z(V.value), 41, Em)])])),
			(k(!0), s(t, null, P(ce.value, (t, i) => (k(), a(r, {
				key: i,
				name: H(I)(B[t.type]),
				css: H(R)
			}, {
				default: Y(() => [B[t.type] ? (k(), a(sm, {
					key: 0,
					items: fe(t.type),
					"is-last": H(_).autoApply && !H(b).keepActionRow,
					type: t.type,
					"aria-labels": H(v),
					level: H(w).timePickerInline || H(_).timePicker ? 1 : 2,
					"overlay-label": H(v).timeOverlay?.(t.type),
					onSelected: (e) => we(t.type, e),
					onToggle: (e) => _e(t.type),
					onResetFlow: n[1] ||= (t) => e.$emit("reset-flow")
				}, l({
					"button-icon": Y(() => [F(e.$slots, "clock-icon", {}, () => [e.$slots["clock-icon"] ? o("", !0) : (k(), a(L(H(w).timePickerInline ? H(Ff) : H(zf)), { key: 0 }))])]),
					_: 2
				}, [e.$slots[`${t.type}-overlay-value`] ? {
					name: "item",
					fn: Y(({ item: n }) => [F(e.$slots, `${t.type}-overlay-value`, {
						text: n.text,
						value: n.value
					})]),
					key: "0"
				} : void 0, e.$slots[`${t.type}-overlay-header`] ? {
					name: "header",
					fn: Y(() => [F(e.$slots, `${t.type}-overlay-header`, { toggle: () => _e(t.type) })]),
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
				])) : o("", !0)]),
				_: 2
			}, 1032, ["name", "css"]))), 128))
		]));
	}
}), Om = ["data-dp-mobile"], km = ["aria-label", "tabindex"], Am = [
	"role",
	"aria-label",
	"tabindex"
], jm = ["aria-label"], Mm = /* @__PURE__ */ f({
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
	setup(e, { expose: n, emit: u }) {
		let f = u, p = e, { rootEmit: m, setState: h, modelValue: g, rootProps: _, defaults: { ariaLabels: v, textInput: y, config: C, range: T, timeConfig: E } } = Wf(), { isModelAuto: O } = Pp(), { checkKeyDown: A, findFocusableEl: j } = Np(), { transitionName: M, showTransition: I } = tp(), { hideNavigationButtons: L } = nm(), { isMobile: R } = Fp(), z = ee(), B = W("overlay"), V = W("close-tp-btn"), U = W("tp-input"), G = N(!1);
		D(() => {
			f("mount");
		});
		let q = i(() => T.value.enabled && _.modelAuto ? O(g.value) : !0), J = N(!1), te = (e) => ({
			hours: Array.isArray(p.hours) ? p.hours[e] : p.hours,
			minutes: Array.isArray(p.minutes) ? p.minutes[e] : p.minutes,
			seconds: Array.isArray(p.seconds) ? p.seconds[e] : p.seconds
		}), X = i(() => {
			let e = [];
			if (T.value.enabled) for (let t = 0; t < 2; t++) e.push(te(t));
			else e.push(te(0));
			return e;
		}), Z = (e, t = !1, n = "") => {
			t || f("reset-flow"), J.value = e, h("arrowNavigationLevel", +!!e), m("overlay-toggle", {
				open: e,
				overlay: qf.time
			}), x(() => {
				n !== "" && U.value?.[0] && U.value[0].openChildCmp(n);
			});
		}, re = i(() => ({
			dp__btn: !0,
			dp__button: !0,
			dp__button_bottom: _.autoApply && !C.value.keepActionRow
		})), ie = Wp(z, Vp.TimeInput), ae = (e, t, n) => T.value.enabled ? t === 0 ? [e, X.value[1][n]] : [X.value[0][n], e] : e, oe = (e) => {
			f("update:hours", e);
		}, se = (e) => {
			f("update:minutes", e);
		}, ce = (e) => {
			f("update:seconds", e);
		}, le = () => {
			if (B.value && !y.value.enabled && !p.noOverlayFocus) {
				let e = j(B.value);
				e && e.focus({ preventScroll: !0 });
			}
		}, ue = (e) => {
			G.value = !1, m("overlay-toggle", {
				open: !1,
				overlay: e
			});
		}, de = (e) => {
			G.value = !0, m("overlay-toggle", {
				open: !0,
				overlay: e
			});
		};
		return n({ toggleTimePicker: Z }), (n, i) => (k(), s("div", {
			class: "dp--tp-wrap",
			"data-dp-mobile": H(R)
		}, [!H(_).timePicker && !H(E).timePickerInline ? ne((k(), s("button", {
			key: 0,
			ref: "open-tp-btn",
			type: "button",
			"data-dp-action-element": "0",
			class: S({
				...re.value,
				"dp--hidden-el": J.value
			}),
			"aria-label": H(v)?.openTimePicker,
			tabindex: e.noOverlayFocus ? void 0 : 0,
			"data-test-id": "open-time-picker-btn",
			onKeydown: i[0] ||= (e) => H(A)(e, () => Z(!0)),
			onClick: i[1] ||= (e) => Z(!0)
		}, [F(n.$slots, "clock-icon", {}, () => [d(H(zf))])], 42, km)), [[K, !H(L)("time")]]) : o("", !0), d(r, {
			name: H(M)(J.value),
			css: H(I) && !H(E).timePickerInline
		}, {
			default: Y(() => [J.value || H(_).timePicker || H(E).timePickerInline ? (k(), s("div", {
				key: 0,
				ref: "overlay",
				role: H(E).timePickerInline ? void 0 : "dialog",
				class: S({
					dp__overlay: !H(E).timePickerInline,
					"dp--overlay-absolute": !H(_).timePicker && !H(E).timePickerInline,
					"dp--overlay-relative": H(_).timePicker
				}),
				style: w(H(_).timePicker ? { height: `${H(C).modeHeight}px` } : void 0),
				"aria-label": H(v)?.timePicker,
				tabindex: H(E).timePickerInline ? void 0 : 0
			}, [c("div", {
				class: S(H(E).timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"),
				style: { display: "flex" }
			}, [F(n.$slots, "time-picker-overlay", {
				hours: e.hours,
				minutes: e.minutes,
				seconds: e.seconds,
				setHours: oe,
				setMinutes: se,
				setSeconds: ce
			}, () => [c("div", { class: S(H(E).timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row") }, [(k(!0), s(t, null, P(X.value, (t, r) => ne((k(), a(Dm, b({ key: r }, { ref_for: !0 }, {
				order: r,
				hours: t.hours,
				minutes: t.minutes,
				seconds: t.seconds,
				closeTimePickerBtn: V.value,
				disabledTimesConfig: e.disabledTimesConfig,
				disabled: r === 0 ? H(T).fixedStart : H(T).fixedEnd
			}, {
				ref_for: !0,
				ref: "tp-input",
				"validate-time": (t, n) => e.validateTime(t, ae(n, r, t)),
				"onUpdate:hours": (e) => oe(ae(e, r, "hours")),
				"onUpdate:minutes": (e) => se(ae(e, r, "minutes")),
				"onUpdate:seconds": (e) => ce(ae(e, r, "seconds")),
				onMounted: le,
				onOverlayClosed: ue,
				onOverlayOpened: de
			}), l({ _: 2 }, [P(H(ie), (e, t) => ({
				name: e,
				fn: Y((t) => [F(n.$slots, e, b({ ref_for: !0 }, t))])
			}))]), 1040, [
				"validate-time",
				"onUpdate:hours",
				"onUpdate:minutes",
				"onUpdate:seconds"
			])), [[K, r === 0 || q.value]])), 128))], 2)]), !H(_).timePicker && !H(E).timePickerInline ? ne((k(), s("button", {
				key: 0,
				ref: "close-tp-btn",
				"data-dp-action-element": "1",
				type: "button",
				class: S({
					...re.value,
					"dp--hidden-el": G.value
				}),
				"aria-label": H(v)?.closeTimePicker,
				tabindex: "0",
				onKeydown: i[2] ||= (e) => H(A)(e, () => Z(!1)),
				onClick: i[3] ||= (e) => Z(!1)
			}, [F(n.$slots, "calendar-icon", {}, () => [d(H(Ff))])], 42, jm)), [[K, !H(L)("time")]]) : o("", !0)], 2)], 14, Am)) : o("", !0)]),
			_: 3
		}, 8, ["name", "css"])], 8, Om));
	}
}), Nm = (e) => {
	let { getDate: t, modelValue: n, time: r, rootProps: a, defaults: { range: o, timeConfig: s } } = Wf(), { isDateEqual: c, setTime: l } = Pp(), u = (e, t) => Array.isArray(r[e]) ? r[e][t] : r[e], d = (e) => s.value.enableSeconds ? Array.isArray(r.seconds) ? r.seconds[e] : r.seconds : 0, f = (e, n) => e ? l(n === void 0 ? {
		hours: r.hours,
		minutes: r.minutes,
		seconds: d()
	} : {
		hours: u("hours", n),
		minutes: u("minutes", n),
		seconds: d(n)
	}, e) : gf(t(), d(n)), p = (e, t) => {
		r[e] = t;
	}, m = i(() => a.modelAuto && o.value.enabled ? Array.isArray(n.value) ? n.value.length > 1 : !1 : o.value.enabled), h = (e, t) => {
		let i = Object.fromEntries(Object.keys(r).map((n) => n === e ? [n, t] : [n, r[n]].slice()));
		if (m.value && !o.value.disableTimeRangeValidation) {
			let e = (e) => n.value ? l({
				hours: i.hours[e],
				minutes: i.minutes[e],
				seconds: i.seconds[e]
			}, n.value[e]) : null, t = (e) => hf(n.value[e], 0);
			return !(c(e(0), e(1)) && (Au(e(0), t(1)) || ju(e(1), t(0))));
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
		return (t || t === 0) && (n.hours = t), Array.isArray(a.disabledTimes) && (n.disabledArr = o.value.enabled && Array.isArray(a.disabledTimes[e]) ? a.disabledTimes[e] : a.disabledTimes), n;
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
		disabledTimesConfig: i(() => (e, t) => {
			if (Array.isArray(a.disabledTimes)) {
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
}, Pm = (e) => {
	let { getDate: t, time: n, modelValue: r, state: i, defaults: { startTime: a, range: o, timeConfig: s } } = Wf(), { getTimeObj: c } = Pp();
	np(() => {
		i.isTextInputDate && x();
	});
	let { updateTimeValues: l, getSetDateTime: u, assignTime: d, assignStartTime: f, disabledTimesConfig: p, validateTime: m } = Nm(h);
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
				return [mf(t(), e), mf(t(), n)];
			}
			let e = g(s.value.startTime);
			return mf(t(), e);
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
}, Fm = /* @__PURE__ */ f({
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
		let r = n, i = Wp(ee(), Vp.TimePicker), o = W("time-input"), { time: s, modelValue: u, disabledTimesConfig: f, updateTime: p, validateTime: h } = Pm(r);
		return D(() => {
			r("mount");
		}), t({
			getSidebarProps: () => ({
				modelValue: u,
				time: s,
				updateTime: p
			}),
			toggleTimePicker: (e, t = !1, n = "") => {
				o.value?.toggleTimePicker(e, t, n);
			}
		}), (e, t) => (k(), a(lm, {
			"multi-calendars": 0,
			stretch: ""
		}, {
			default: Y(({ wrapClass: n }) => [c("div", { class: S(n) }, [d(Mm, b({ ref: "time-input" }, e.$props, {
				hours: H(s).hours,
				minutes: H(s).minutes,
				seconds: H(s).seconds,
				"disabled-times-config": H(f),
				"validate-time": H(h),
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
			}), l({ _: 2 }, [P(H(i), (t, n) => ({
				name: t,
				fn: Y((n) => [F(e.$slots, t, C(m(n)))])
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
}), Im = (e, t) => {
	let { getDate: n, rootProps: r, defaults: { filters: a } } = Wf(), { validateMonthYearInRange: o, validateMonthYear: s } = rp(), c = (e, t) => {
		let n = e;
		return a.value.months.includes(Ou(n)) ? (n = t ? il(e, 1) : vf(e, 1), c(n, t)) : n;
	}, l = (e, t) => {
		let n = e;
		return a.value.years.includes($(n)) ? (n = t ? _l(e, 1) : bf(e, 1), l(n, t)) : n;
	}, u = (t, i = !1) => {
		let s = mf(n(), {
			month: e.month,
			year: e.year
		}), u = t ? il(s, 1) : vf(s, 1);
		r.disableYearSelect && (u = _f(u, e.year));
		let f = Ou(u), p = $(u);
		a.value.months.includes(f) && (u = c(u, t), f = Ou(u), p = $(u)), a.value.years.includes(p) && (u = l(u, t), p = $(u)), o(f, p, t, r.preventMinMaxNavigation) && d(f, p, i);
	}, d = (e, n, r = !1) => {
		t("update-month-year", {
			month: e,
			year: n,
			fromNav: r
		});
	};
	return {
		handleMonthYearChange: u,
		isDisabled: i(() => (t) => s(mf(n(), {
			month: e.month,
			year: e.year
		}), r.preventMinMaxNavigation, t)),
		updateMonthYear: d
	};
}, Lm = { class: "dp--header-wrap" }, Rm = {
	key: 0,
	class: "dp__month_year_wrap"
}, zm = { key: 0 }, Bm = { class: "dp__month_year_wrap" }, Vm = [
	"data-dp-element",
	"aria-label",
	"data-test-id",
	"onClick",
	"onKeydown"
], Hm = /* @__PURE__ */ f({
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
	setup(e, { expose: n, emit: f }) {
		let p = f, h = e, { rootEmit: g, rootProps: _, modelValue: v, defaults: { ariaLabels: y, filters: x, config: w, highlight: T, safeDates: E, ui: O } } = Wf(), { transitionName: A, showTransition: j } = tp(), { showLeftIcon: M, showRightIcon: I } = nm(), { handleMonthYearChange: R, isDisabled: B, updateMonthYear: V } = Im(h, p), { getMaxMonth: U, getMinMonth: ee, getYearFromDate: W, groupListAndMap: G, checkHighlightYear: K, checkHighlightMonth: q } = Pp(), { checkKeyDown: J } = Np(), { formatYear: te } = Ip(), { checkMinMaxValue: ne } = rp(), { boolHtmlAttribute: X } = zp(), Z = N(!1), re = N(!1), ie = N(!1);
		D(() => {
			p("mount");
		});
		let ae = (e) => ({
			get: () => h[e],
			set: (t) => {
				let n = e === Gf.month ? Gf.year : Gf.month;
				p("update-month-year", {
					[e]: t,
					[n]: h[n]
				}), e === Gf.month ? pe(!0) : me(!0);
			}
		}), oe = i(ae(Gf.month)), se = i(ae(Gf.year)), ce = i(() => (e) => ({
			month: h.month,
			year: h.year,
			items: e === Gf.month ? h.months : h.years,
			instance: h.instance,
			updateMonthYear: V,
			toggle: e === Gf.month ? pe : me
		})), le = i(() => h.months.find((e) => e.value === h.month) || {
			text: "",
			value: 0
		}), ue = i(() => G(h.months, (e) => ({
			active: h.month === e.value,
			disabled: ne(e.value, ee(h.year, E.value.minDate), U(h.year, E.value.maxDate)) || x.value.months.includes(e.value),
			highlighted: q(T.value, e.value, h.year)
		}))), de = i(() => G(h.years, (e) => ({
			active: h.year === e.value,
			disabled: ne(e.value, W(E.value.minDate), W(E.value.maxDate)) || x.value.years.includes(e.value),
			highlighted: K(T.value, e.value)
		}))), fe = (e, t, n) => {
			e.value = n === void 0 ? !e.value : n, e.value ? (ie.value = !0, g("overlay-toggle", {
				open: !0,
				overlay: t
			})) : (ie.value = !1, g("overlay-toggle", {
				open: !1,
				overlay: t
			}));
		}, pe = (e = !1, t) => {
			he(e), fe(Z, qf.month, t);
		}, me = (e = !1, t) => {
			he(e), fe(re, qf.year, t);
		}, he = (e) => {
			e || p("reset-flow");
		}, ge = i(() => [{
			type: Gf.month,
			index: 1,
			toggle: pe,
			modelValue: oe.value,
			updateModelValue: (e) => oe.value = e,
			text: le.value.text,
			showSelectionGrid: Z.value,
			items: ue.value,
			ariaLabel: y.value?.openMonthsOverlay,
			overlayLabel: y.value.monthPicker?.(!0) ?? void 0
		}, {
			type: Gf.year,
			index: 2,
			toggle: me,
			modelValue: se.value,
			updateModelValue: (e) => se.value = e,
			text: te(h.year),
			showSelectionGrid: re.value,
			items: de.value,
			ariaLabel: y.value?.openYearsOverlay,
			overlayLabel: y.value.yearPicker?.(!0) ?? void 0
		}]), _e = i(() => _.disableYearSelect ? [ge.value[0]] : _.yearFirst ? [...ge.value].reverse() : ge.value);
		return n({
			toggleMonthPicker: pe,
			toggleYearPicker: me,
			handleMonthYearChange: R
		}), (n, i) => (k(), s("div", Lm, [n.$slots["month-year"] ? (k(), s("div", Rm, [F(n.$slots, "month-year", C(m({
			month: e.month,
			year: e.year,
			months: e.months,
			years: e.years,
			updateMonthYear: H(V),
			handleMonthYearChange: H(R),
			instance: e.instance,
			isDisabled: H(B)
		})))])) : (k(), s(t, { key: 1 }, [n.$slots["top-extra"] ? (k(), s("div", zm, [F(n.$slots, "top-extra", { value: H(v) })])) : o("", !0), c("div", Bm, [
			H(M)(e.instance) && !H(_).vertical ? (k(), a(dm, {
				key: 0,
				"aria-label": H(y)?.prevMonth,
				disabled: H(X)(H(B)(!1)),
				class: S(H(O)?.navBtnPrev),
				"el-name": "action-prev",
				onActivate: i[0] ||= (e) => H(R)(!1, !0)
			}, {
				default: Y(() => [n.$slots["arrow-left"] ? F(n.$slots, "arrow-left", { key: 0 }) : o("", !0), n.$slots["arrow-left"] ? o("", !0) : (k(), a(H(Lf), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : o("", !0),
			c("div", { class: S(["dp__month_year_wrap", { dp__year_disable_select: H(_).disableYearSelect }]) }, [(k(!0), s(t, null, P(_e.value, (i) => (k(), s(t, { key: i.type }, [c("button", {
				type: "button",
				"data-dp-element": `overlay-${i.type}`,
				class: S(["dp__btn dp__month_year_select", { "dp--hidden-el": ie.value }]),
				"aria-label": `${i.text}-${i.ariaLabel}`,
				"data-test-id": `${i.type}-toggle-overlay-${e.instance}`,
				tabindex: "0",
				"data-dp-action-element": "0",
				onClick: (e) => i.toggle(!1),
				onKeydown: (e) => H(J)(e, () => i.toggle(), !0)
			}, [n.$slots[i.type] ? F(n.$slots, i.type, {
				key: 0,
				text: i.text,
				value: h[i.type]
			}) : o("", !0), n.$slots[i.type] ? o("", !0) : (k(), s(t, { key: 1 }, [u(z(i.text), 1)], 64))], 42, Vm), d(r, {
				name: H(A)(i.showSelectionGrid),
				css: H(j)
			}, {
				default: Y(() => [i.showSelectionGrid ? (k(), a(sm, {
					key: 0,
					items: i.items,
					"is-last": H(_).autoApply && !H(w).keepActionRow,
					"skip-button-ref": !1,
					type: i.type,
					"header-refs": [],
					"menu-wrap-ref": e.menuWrapRef,
					"overlay-label": i.overlayLabel,
					onSelected: i.updateModelValue,
					onToggle: i.toggle
				}, l({
					"button-icon": Y(() => [n.$slots["calendar-icon"] ? F(n.$slots, "calendar-icon", { key: 0 }) : o("", !0), n.$slots["calendar-icon"] ? o("", !0) : (k(), a(H(Ff), { key: 1 }))]),
					_: 2
				}, [
					n.$slots[`${i.type}-overlay-value`] ? {
						name: "item",
						fn: Y(({ item: e }) => [F(n.$slots, `${i.type}-overlay-value`, {
							text: e.text,
							value: e.value
						})]),
						key: "0"
					} : void 0,
					n.$slots[`${i.type}-overlay`] ? {
						name: "overlay",
						fn: Y(() => [F(n.$slots, `${i.type}-overlay`, b({ ref_for: !0 }, ce.value(i.type)))]),
						key: "1"
					} : void 0,
					n.$slots[`${i.type}-overlay-header`] ? {
						name: "header",
						fn: Y(() => [F(n.$slots, `${i.type}-overlay-header`, { toggle: i.toggle })]),
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
				])) : o("", !0)]),
				_: 2
			}, 1032, ["name", "css"])], 64))), 128))], 2),
			H(M)(e.instance) && H(_).vertical ? (k(), a(dm, {
				key: 1,
				"aria-label": H(y)?.prevMonth,
				"el-name": "action-prev",
				disabled: H(X)(H(B)(!1)),
				class: S(H(O)?.navBtnPrev),
				onActivate: i[1] ||= (e) => H(R)(!1, !0)
			}, {
				default: Y(() => [n.$slots["arrow-up"] ? F(n.$slots, "arrow-up", { key: 0 }) : o("", !0), n.$slots["arrow-up"] ? o("", !0) : (k(), a(H(Bf), { key: 1 }))]),
				_: 3
			}, 8, [
				"aria-label",
				"disabled",
				"class"
			])) : o("", !0),
			H(I)(e.instance) ? (k(), a(dm, {
				key: 2,
				ref: "rightIcon",
				"el-name": "action-next",
				disabled: H(X)(H(B)(!0)),
				"aria-label": H(y)?.nextMonth,
				class: S(H(O)?.navBtnNext),
				onActivate: i[2] ||= (e) => H(R)(!0, !0)
			}, {
				default: Y(() => [n.$slots[H(_).vertical ? "arrow-down" : "arrow-right"] ? F(n.$slots, H(_).vertical ? "arrow-down" : "arrow-right", { key: 0 }) : o("", !0), n.$slots[H(_).vertical ? "arrow-down" : "arrow-right"] ? o("", !0) : (k(), a(L(H(_).vertical ? H(Vf) : H(Rf)), { key: 1 }))]),
				_: 3
			}, 8, [
				"disabled",
				"aria-label",
				"class"
			])) : o("", !0)
		])], 64))]));
	}
}), Um = {
	class: "dp__calendar_header",
	role: "row"
}, Wm = {
	key: 0,
	class: "dp__calendar_header_item",
	role: "gridcell"
}, Gm = ["aria-label"], Km = {
	key: 0,
	class: "dp__calendar_item dp__week_num",
	role: "gridcell"
}, qm = { class: "dp__cell_inner" }, Jm = [
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
], Ym = /* @__PURE__ */ f({
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
	setup(e, { expose: n, emit: a }) {
		let l = a, f = e, { getDate: p, rootEmit: m, rootProps: h, defaults: { transitions: g, config: _, ariaLabels: v, multiCalendars: y, weekNumbers: b, multiDates: C, ui: T } } = Wf(), { isDateAfter: E, isDateEqual: A, resetDateTime: j, getCellId: M } = Pp(), { checkKeyDown: I, checkStopPropagation: L, isTouchDevice: R } = Np(), { formatWeekDay: B } = Ip(), V = W("calendar-wrap"), U = W("active-tooltip"), ee = N([]), G = N(null), K = N(!0), q = N(!1), J = N(""), te = N({
			bottom: "",
			left: "",
			transform: ""
		}), ne = N({ left: "50%" });
		ce(V, { onSwipeEnd: (e, t) => {
			_.value.noSwipe || (h.vertical ? (t === "up" || t === "down") && l("handle-swipe", t === "up" ? "left" : "right") : (t === "left" || t === "right") && l("handle-swipe", t === "right" ? "left" : "right"));
		} });
		let X = i(() => h.calendar ? h.calendar(f.mappedDates) : f.mappedDates), re = i(() => h.dayNames ? Array.isArray(h.dayNames) ? h.dayNames : h.dayNames() : Te());
		D(() => {
			l("mount", {
				cmp: "calendar",
				dayRefs: ee.value
			}), _.value.monthChangeOnScroll && V.value && V.value.addEventListener("wheel", ye, { passive: !1 });
		}), O(() => {
			_.value.monthChangeOnScroll && V.value && V.value.removeEventListener("wheel", ye);
		});
		let ie = (e) => e ? h.vertical ? "vNext" : "next" : h.vertical ? "vPrevious" : "previous", ae = (e, t) => {
			if (h.transitions) {
				let n = j(mf(p(), {
					month: f.month,
					year: f.year
				}));
				J.value = E(j(mf(p(), {
					month: e,
					year: t
				})), n) ? g.value[ie(!0)] : g.value[ie(!1)], K.value = !1, x(() => {
					K.value = !0;
				});
			}
		}, se = i(() => ({ ...T.value.calendar })), le = (e) => ({
			type: "dot",
			...e
		}), ue = i(() => (e) => {
			let t = le(e);
			return {
				dp__marker_dot: t.type === "dot",
				dp__marker_line: t.type === "line"
			};
		}), de = i(() => (e) => A(e, G.value)), fe = i(() => ({
			dp__calendar: !0,
			dp__calendar_next: y.value.count > 0 && f.instance !== 0
		})), pe = i(() => (e) => !h.hideOffsetDates || e.current), me = async (e, t) => {
			let { width: n, height: r } = e.getBoundingClientRect();
			G.value = t.value;
			let i = { left: `${n / 2}px` }, a = -50;
			if (await x(), U.value?.[0]) {
				let { left: e, width: t } = U.value[0].getBoundingClientRect();
				e < 0 && (i = { left: "0" }, a = 0, ne.value.left = `${n / 2}px`), globalThis.innerWidth < e + t && (i = { right: "0" }, a = 0, ne.value.left = `${t - n / 2}px`);
			}
			te.value = {
				bottom: `${r}px`,
				...i,
				transform: `translateX(${a}%)`
			};
		}, he = async (e, t, n) => {
			let r = oe(ee.value?.[t]?.[n]);
			r && (e.marker?.customPosition && e.marker?.tooltip?.length ? te.value = e.marker.customPosition(r) : await me(r, e), m("tooltip-open", e.marker));
		}, ge = async (e, t, n) => {
			if (q.value && C.value.enabled && C.value.dragSelect) return l("select-date", e);
			if (l("set-hover-date", e), e.marker?.tooltip?.length) {
				if (h.hideOffsetDates && !e.current) return;
				await he(e, t, n);
			}
		}, _e = (e) => {
			G.value && (G.value = null, te.value = structuredClone({
				bottom: "",
				left: "",
				transform: ""
			}), m("tooltip-close", e.marker));
		}, ve = (e, t, n) => {
			e && (Array.isArray(ee.value[t]) ? ee.value[t][n] = e : ee.value[t] = [e]);
		}, ye = (e) => {
			_.value.monthChangeOnScroll && (e.preventDefault(), l("handle-scroll", e));
		}, be = (e) => b.value ? b.value.type === "local" ? Zl(e.value, {
			weekStartsOn: +h.weekStart,
			locale: h.locale
		}) : b.value.type === "iso" ? Jl(e.value) : typeof b.value.type == "function" ? b.value.type(e.value) : "" : "", xe = (e) => {
			let t = e[0];
			return b.value?.hideOnOffsetDates ? e.some((e) => e.current) ? be(t) : "" : be(t);
		}, Se = (e, t, n = !0) => {
			!n && R() || (!C.value.enabled || _.value.allowPreventDefault) && (L(e, _.value), l("select-date", t));
		}, Ce = (e) => {
			L(e, _.value);
		}, we = (e) => {
			C.value.enabled && C.value.dragSelect ? (q.value = !0, l("select-date", e)) : C.value.enabled && l("select-date", e);
		}, Te = () => {
			let e = p();
			return El({
				start: cl(e, {
					locale: h.locale,
					weekStartsOn: +h.weekStart
				}),
				end: Ml(e, {
					locale: h.locale,
					weekStartsOn: +h.weekStart
				})
			}).map((e) => B(e));
		};
		return n({ triggerTransition: ae }), (e, n) => (k(), s("div", { class: S(fe.value) }, [c("div", {
			ref: "calendar-wrap",
			class: S(se.value),
			role: "grid"
		}, [
			c("div", Um, [H(b) ? (k(), s("div", Wm, z(H(b).label), 1)) : o("", !0), (k(!0), s(t, null, P(re.value, (t, n) => (k(), s("div", {
				key: n,
				class: "dp__calendar_header_item",
				role: "gridcell",
				"data-test-id": "calendar-header",
				"aria-label": H(v)?.weekDay?.(n)
			}, [F(e.$slots, "calendar-header", {
				day: t,
				index: n
			}, () => [u(z(t), 1)])], 8, Gm))), 128))]),
			n[2] ||= c("div", { class: "dp__calendar_header_separator" }, null, -1),
			d(r, {
				name: J.value,
				css: !!H(g)
			}, {
				default: Y(() => [K.value ? (k(), s("div", {
					key: 0,
					class: "dp__calendar",
					role: "rowgroup",
					onMouseleave: n[1] ||= (e) => q.value = !1
				}, [(k(!0), s(t, null, P(X.value, (r, i) => (k(), s("div", {
					key: i,
					class: "dp__calendar_row",
					role: "row"
				}, [H(b) ? (k(), s("div", Km, [c("div", qm, z(xe(r.days)), 1)])) : o("", !0), (k(!0), s(t, null, P(r.days, (r, a) => (k(), s("div", {
					id: H(M)(r.value),
					ref_for: !0,
					ref: (e) => ve(e, i, a),
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
					onClick: Z((e) => Se(e, r), ["prevent"]),
					onTouchend: (e) => Se(e, r, !1),
					onKeydown: (t) => H(I)(t, () => e.$emit("select-date", r)),
					onMouseenter: (e) => ge(r, i, a),
					onMouseleave: (e) => _e(r),
					onMousedown: (e) => we(r),
					onMouseup: n[0] ||= (e) => q.value = !1
				}, [c("div", { class: S(["dp__cell_inner", r.classData]) }, [
					e.$slots.day && pe.value(r) ? F(e.$slots, "day", {
						key: 0,
						day: +r.text,
						date: r.value
					}) : o("", !0),
					e.$slots.day ? o("", !0) : (k(), s(t, { key: 1 }, [u(z(r.text), 1)], 64)),
					r.marker && pe.value(r) ? F(e.$slots, "marker", {
						key: 2,
						marker: r.marker,
						day: +r.text,
						date: r.value
					}, () => [c("div", {
						class: S(ue.value(r.marker)),
						style: w(r.marker.color ? { backgroundColor: r.marker.color } : {})
					}, null, 6)]) : o("", !0),
					de.value(r.value) ? (k(), s("div", {
						key: 3,
						ref_for: !0,
						ref: "active-tooltip",
						class: "dp__marker_tooltip",
						style: w(te.value)
					}, [r.marker?.tooltip ? (k(), s("div", {
						key: 0,
						class: "dp__tooltip_content",
						onClick: Ce
					}, [(k(!0), s(t, null, P(r.marker.tooltip, (t, n) => (k(), s("div", {
						key: n,
						class: "dp__tooltip_text"
					}, [F(e.$slots, "marker-tooltip", {
						tooltip: t,
						day: r.value
					}, () => [c("div", {
						class: "dp__tooltip_mark",
						style: w(t.color ? { backgroundColor: t.color } : {})
					}, null, 4), c("div", null, z(t.text), 1)])]))), 128)), c("div", {
						class: "dp__arrow_bottom_tp",
						style: w(ne.value)
					}, null, 4)])) : o("", !0)], 4)) : o("", !0)
				], 2)], 40, Jm))), 128))]))), 128))], 32)) : o("", !0)]),
				_: 3
			}, 8, ["name", "css"])
		], 2)], 2));
	}
}), Xm = (e, t, n, r) => {
	let a = N([]), o = N(/* @__PURE__ */ new Date()), s = N(), { getDate: c, rootEmit: l, calendars: u, month: d, year: f, time: p, modelValue: m, rootProps: h, today: g, state: _, defaults: { multiCalendars: v, startTime: y, range: b, config: S, safeDates: C, multiDates: w, timeConfig: T, flow: E } } = Wf(), { validateMonthYearInRange: O, isDisabled: k, isDateRangeAllowed: A, checkMinMaxRange: j } = rp(), { updateTimeValues: M, getSetDateTime: P, assignTime: F, assignStartTime: I, validateTime: L, disabledTimesConfig: R } = Nm(r), { formatDay: z } = Ip(), { resetDateTime: B, setTime: V, isDateBefore: H, isDateEqual: U, getDaysInBetween: ee } = Pp(), { checkRangeAutoApply: W, getRangeWithFixedDate: G, handleMultiDatesSelect: K, setPresetDate: q } = hm(), { getMapDate: J } = Np();
	np(() => ie(_.isTextInputDate));
	let te = (e) => !S.value.keepViewOnOffsetClick || e ? !0 : !s.value, Y = (e, t, n, r = !1) => {
		te(r) && (u.value[e] ??= u.value[e] = {
			month: 0,
			year: 0
		}, u.value[e].month = t ?? u.value[e]?.month, u.value[e].year = n ?? u.value[e]?.year);
	}, ne = () => {
		h.autoApply && t("select-date");
	}, X = () => {
		y.value && I(y.value);
	};
	D(() => {
		m.value || (ge(), X()), ie(!0), h.focusStartDate && h.startDate && ge();
	});
	let Z = i(() => E.value?.steps?.length && !E.value?.partial ? e.flowStep === E.value.steps.length : !0), re = () => {
		h.autoApply && Z.value && t("auto-apply", E.value?.partial ? e.flowStep !== E.value?.steps?.length : !1);
	}, ie = (e = !1) => {
		if (m.value) return Array.isArray(m.value) ? (a.value = m.value, fe(e)) : ce(m.value, e);
		if (v.value.count && e && !h.startDate) return se(c(), e);
	}, ae = () => Array.isArray(m.value) && b.value.enabled ? Ou(m.value[0]) === Ou(m.value[1] ?? m.value[0]) : !1, oe = (e) => {
		let t = il(e, 1);
		return {
			month: Ou(t),
			year: $(t)
		};
	}, se = (e = c(), t = !1) => {
		if ((!v.value.count || !v.value.static || t) && Y(0, Ou(e), $(e)), v.value.count && (!m.value || ae() || !v.value.solo) && (!v.value.solo || t)) for (let e = 1; e < v.value.count; e++) {
			let t = al(mf(c(), {
				month: d.value(e - 1),
				year: f.value(e - 1)
			}), { months: 1 });
			u.value[e] = {
				month: Ou(t),
				year: $(t)
			};
		}
	}, ce = (e, t) => {
		se(e), F("hours", Tu(e)), F("minutes", Du(e)), F("seconds", ku(e)), v.value.count && t && he();
	}, le = (e) => {
		if (v.value.count) {
			if (v.value.solo) return 0;
			let t = Ou(e[0]), n = Ou(e[1]);
			return Math.abs(n - t) < v.value.count ? 0 : 1;
		}
		return 1;
	}, ue = (e, t) => {
		e[1] && b.value.showLastInRange ? se(e[le(e)], t) : se(e[0], t);
		let n = (t, n) => [t(e[0]), e?.[1] ? t(e[1]) : p[n][1]];
		F("hours", n(Tu, "hours")), F("minutes", n(Du, "minutes")), F("seconds", n(ku, "seconds"));
	}, de = (e, t) => {
		if ((b.value.enabled || h.weekPicker) && !w.value.enabled) return ue(e, t);
		if (w.value.enabled && t) {
			let n = e[e.length - 1];
			return ce(n, t);
		}
	}, fe = (e) => {
		let t = m.value;
		de(t, e), v.value.count && v.value.solo && he();
	}, pe = (e, t) => {
		let r = mf(c(), {
			month: d.value(t),
			year: f.value(t)
		}), i = e < 0 ? il(r, 1) : vf(r, 1);
		O(Ou(i), $(i), e < 0, h.preventMinMaxNavigation) && (Y(t, Ou(i), $(i)), l("update-month-year", {
			instance: t,
			month: Ou(i),
			year: $(i)
		}), v.value.count && !v.value.solo && me(t), n());
	}, me = (e) => {
		for (let t = e - 1; t >= 0; t--) {
			let e = vf(mf(c(), {
				month: d.value(t + 1),
				year: f.value(t + 1)
			}), 1);
			Y(t, Ou(e), $(e));
		}
		for (let t = e + 1; t <= v.value.count - 1; t++) {
			let e = il(mf(c(), {
				month: d.value(t - 1),
				year: f.value(t - 1)
			}), 1);
			Y(t, Ou(e), $(e));
		}
	}, he = () => {
		if (Array.isArray(m.value) && m.value.length === 2) {
			let e = c(c(m.value[1] ?? il(m.value[0], 1))), [t, n] = [Ou(m.value[0]), $(m.value[0])], [r, i] = [Ou(m.value[1]), $(m.value[1])];
			(t !== r || t === r && n !== i) && v.value.solo && Y(1, Ou(e), $(e));
		} else m.value && !Array.isArray(m.value) && (Y(0, Ou(m.value), $(m.value)), se(c()));
	}, ge = () => {
		h.startDate && (Y(0, Ou(c(h.startDate)), $(c(h.startDate))), v.value.count && me(0));
	}, _e = (e, t) => {
		if (S.value.monthChangeOnScroll) {
			let n = Date.now() - o.value.getTime(), r = Math.abs(e.deltaY), i = 500;
			r > 1 && (i = 100), r > 100 && (i = 0), n > i && (o.value = /* @__PURE__ */ new Date(), pe(S.value.monthChangeOnScroll === "inverse" ? e.deltaY : -e.deltaY, t));
		}
	}, ve = (e, t, n = !1) => {
		S.value.monthChangeOnArrows && h.vertical === n && ye(e, t);
	}, ye = (e, t) => {
		pe(e === "right" ? -1 : 1, t);
	}, be = (e) => {
		if (C.value.markers) return J(e.value, C.value.markers);
	}, xe = (e, t) => {
		switch (h.sixWeeks === !0 ? "append" : h.sixWeeks) {
			case "prepend": return [!0, !1];
			case "center": return [e == 0, !0];
			case "fair": return [e == 0 || t > e, !0];
			case "append": return [!1, !1];
			default: return [!1, !1];
		}
	}, Se = (e, t, n, r) => {
		if (h.sixWeeks && e.length < 6) {
			let i = 6 - e.length, a = (t.getDay() + 7 - r) % 7, o = 6 - (n.getDay() + 7 - r) % 7, [s, c] = xe(a, o);
			for (let n = 1; n <= i; n++) if (c ? !!(n % 2) == s : s) {
				let n = e[0].days[0], r = Ce(rl(n.value, -7), Ou(t));
				e.unshift({ days: r });
			} else {
				let n = e[e.length - 1], r = n.days[n.days.length - 1], i = Ce(rl(r.value, 1), Ou(t));
				e.push({ days: i });
			}
		}
		return e;
	}, Ce = (e, t) => {
		let n = c(e), r = [];
		for (let e = 0; e < 7; e++) {
			let i = rl(n, e), a = Ou(i) !== t;
			r.push({
				text: h.hideOffsetDates && a ? "" : z(i),
				value: i,
				current: !a,
				classData: {}
			});
		}
		return r;
	}, we = (e, t) => {
		let n = [], r = c(new Date(t, e)), i = c(new Date(t, e + 1, 0)), a = h.weekStart, o = cl(r, { weekStartsOn: a }), s = (t) => {
			let r = Ce(t, e);
			if (n.push({ days: r }), !n[n.length - 1].days.some((e) => U(c(e.value), B(i)))) {
				let e = rl(t, 7);
				s(e);
			}
		};
		return s(o), Se(n, r, i, a);
	}, Te = (e) => {
		let t = V({
			hours: p.hours,
			minutes: p.minutes,
			seconds: Me()
		}, c(e.value));
		l("date-click", t), w.value.enabled ? K(t, w.value.limit) : m.value = t, r(), x().then(() => {
			re();
		});
	}, Ee = (e) => b.value.noDisabledRange ? ee(a.value[0], e).some((e) => k(e)) : !1, De = () => {
		a.value = m.value ? m.value.slice().filter((e) => !!e) : [], a.value.length === 2 && !(b.value.fixedStart || b.value.fixedEnd) && (a.value = []);
	}, Oe = (e, t) => {
		let n = [c(e.value), rl(c(e.value), +b.value.autoRange)];
		A(n) ? (t && ke(e.value), a.value = n) : l("invalid-date", e.value);
	}, ke = (e) => {
		let t = Ou(c(e)), n = $(c(e));
		if (Y(0, t, n), v.value.count > 0) for (let t = 1; t < v.value.count; t++) {
			let n = oe(mf(c(e), {
				year: f.value(t - 1),
				month: d.value(t - 1)
			}));
			Y(t, n.month, n.year);
		}
	}, Ae = (e) => {
		if (Ee(e.value) || !j(e.value, m.value, +!b.value.fixedStart)) return l("invalid-date", e.value);
		a.value = G(c(e.value));
	}, je = (e, t) => {
		if (De(), b.value.autoRange) return Oe(e, t);
		if (b.value.fixedStart || b.value.fixedEnd) return Ae(e);
		a.value[0] ? j(c(e.value), m.value) && !Ee(e.value) ? H(c(e.value), c(a.value[0])) ? b.value.autoSwitchStartEnd ? (a.value.unshift(c(e.value)), l("range-end", a.value[0])) : (a.value[0] = c(e.value), l("range-start", a.value[0])) : (a.value[1] = c(e.value), l("range-end", a.value[1])) : l("invalid-date", e.value) : (a.value[0] = c(e.value), l("range-start", a.value[0]));
	}, Me = (e = !0) => T.value.enableSeconds ? Array.isArray(p.seconds) ? e ? p.seconds[0] : p.seconds[1] : p.seconds : 0, Ne = (e) => {
		a.value[e] = V({
			hours: p.hours[e],
			minutes: p.minutes[e],
			seconds: Me(e !== 1)
		}, a.value[e]);
	}, Pe = () => {
		a.value[0] && a.value[1] && +a.value?.[0] > +a.value?.[1] && (a.value.reverse(), l("range-start", a.value[0]), l("range-end", a.value[1]));
	}, Fe = () => {
		a.value.length && (a.value[0] && !a.value[1] ? Ne(0) : (Ne(0), Ne(1), r()), Pe(), m.value = a.value.slice(), W(a.value, t, a.value.length < 2 || E.value?.steps.length ? e.flowStep !== E.value?.steps?.length : !1));
	}, Ie = (e, t = !1) => {
		if (k(e.value) || !e.current && h.hideOffsetDates) return l("invalid-date", e.value);
		if (s.value = structuredClone(e), !b.value.enabled) return Te(e);
		Array.isArray(p.hours) && Array.isArray(p.minutes) && !w.value.enabled && (je(e, t), Fe());
	}, Le = (t, i) => {
		Y(t, i.month, i.year, !0), v.value.count && !v.value.solo && me(t), l("update-month-year", {
			instance: t,
			month: i.month,
			year: i.year
		}), n(v.value.solo ? t : void 0);
		let a = E.value?.steps?.length ? E.value.steps[e.flowStep] : void 0;
		!i.fromNav && (a === qf.month || a === qf.year) && r();
	}, Re = (e) => {
		q({ value: e }), ne(), h.multiCalendars && x().then(() => ie(!0));
	}, ze = () => {
		let e = c();
		return h.actionRow?.nowBtnRound && (e = ff(e, {
			roundingMethod: h.actionRow.nowBtnRound.rounding ?? "ceil",
			nearestTo: h.actionRow.nowBtnRound.roundTo ?? 15
		})), e;
	}, Be = () => {
		let e = ze();
		!b.value.enabled && !w.value.enabled ? m.value = e : m.value && Array.isArray(m.value) && m.value[0] ? w.value.enabled ? m.value = [...m.value, e] : m.value = H(e, m.value[0]) ? [e, m.value[0]] : [m.value[0], e] : m.value = [e], ne();
	}, Ve = () => {
		if (Array.isArray(m.value)) {
			if (w.value.enabled) {
				let e = He();
				m.value[m.value.length - 1] = P(e);
			} else m.value = m.value.map((e, t) => e && P(e, t));
		} else m.value = P(m.value);
		t("time-update");
	}, He = () => Array.isArray(m.value) && m.value.length ? m.value[m.value.length - 1] : null, Ue = (e) => {
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
		getCalendarDays: we,
		getMarker: be,
		handleScroll: _e,
		handleSwipe: ye,
		handleArrow: ve,
		selectDate: Ie,
		updateMonthYear: Le,
		presetDate: Re,
		selectCurrentDate: Be,
		updateTime: (e) => {
			let t = Ue(e);
			M(e, Ve), t && l(t, m.value[t === "range-start" ? 0 : 1]);
		},
		assignMonthAndYear: se,
		setStartTime: X
	};
}, Zm = () => {
	let { isModelAuto: e, matchDate: t, isDateAfter: n, isDateBefore: r, isDateBetween: i, isDateEqual: a, getWeekFromDate: o, getBeforeAndAfterInRange: s } = Pp(), { getDate: c, today: l, rootProps: u, defaults: { multiCalendars: d, multiDates: f, ui: p, highlight: m, safeDates: h, range: g }, modelValue: _ } = Wf(), { isDisabled: v } = rp(), y = N(null), b = (e) => {
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
				let t = rl(y.value, +g.value.autoRange), n = o(c(y.value), u.weekStart);
				return u.weekPicker ? a(n[1], c(e.value)) : a(t, c(e.value));
			}
			return !1;
		}
		return !1;
	}, k = (e) => {
		if (g.value.autoRange || u.weekPicker) {
			if (y.value) {
				let t = rl(y.value, +g.value.autoRange);
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
			return ju(e.value, t) || Au(e.value, n);
		}
		return !1;
	}, H = (e) => {
		if (Array.isArray(_.value) && _.value.length === 1) {
			let { before: t, after: n } = s(+g.value.minRange, _.value[0]);
			return i([t, n], _.value[0], e.value);
		}
		return !1;
	}, U = (e) => g.value.enabled && (g.value.maxRange || g.value.minRange) ? g.value.maxRange && g.value.minRange ? V(e) || H(e) : g.value.maxRange ? V(e) : H(e) : !1, ee = (e) => {
		let { isRangeStart: t, isRangeEnd: i } = q(e), o = g.value.enabled ? t || i : !1;
		return {
			dp__cell_offset: !e.current,
			dp__pointer: !u.disabled && !(!e.current && u.hideOffsetDates) && !v(e.value) && !U(e),
			dp__cell_disabled: v(e.value) || U(e),
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
				...X(e),
				dp__range_start: a(t[0], e.value),
				dp__range_end: a(t[1], e.value),
				dp__range_between_week: n(e.value, t[0]) && r(e.value, t[1])
			};
		}
		return { ...X(e) };
	}, K = (e) => {
		if (_.value && Array.isArray(_.value)) {
			let t = o(_.value[0], u.weekStart), i = _.value[1] ? o(_.value[1], u.weekStart) : [];
			return {
				...X(e),
				dp__range_start: a(t[0], e.value) || a(i[0], e.value),
				dp__range_end: a(t[1], e.value) || a(i[1], e.value),
				dp__range_between_week: n(e.value, t[0]) && r(e.value, t[1]) || n(e.value, i[0]) && r(e.value, i[1]),
				dp__range_between: n(e.value, t[1]) && r(e.value, i[0])
			};
		}
		return { ...X(e) };
	}, q = (e) => ({
		isRangeStart: d.value.count > 0 ? e.current && T(e) && P() : T(e) && P(),
		isRangeEnd: d.value.count > 0 ? e.current && T(e, !1) && P() : T(e, !1) && P()
	}), J = (e) => g.value.enabled && (g.value.fixedStart || g.value.fixedEnd) && Array.isArray(_.value) && _.value.length === 2, te = (e, t, n, r) => !J(_.value) || !y.value ? !1 : t ? g.value.fixedEnd && a(e.value, y.value) && ju(e.value, _.value[0]) && !n : g.value.fixedStart && a(e.value, y.value) && Au(e.value, _.value[1]) && !r, Y = (e, t) => !J(_.value) || !y.value ? !1 : t ? g.value.fixedEnd && Au(e.value, y.value) && ju(e.value, _.value[0]) : g.value.fixedStart && ju(e.value, y.value) && Au(e.value, _.value[1]), ne = (e) => {
		let { isRangeStart: t, isRangeEnd: n } = q(e);
		return {
			dp__range_start: t,
			dp__range_end: n,
			dp__range_between: B(e),
			dp__date_hover: a(e.value, y.value) && !t && !n && !u.weekPicker,
			dp__date_hover_start: E(e, !0) || te(e, !0, t, n),
			dp__date_hover_end: E(e, !1) || te(e, !1, t, n),
			"dp--extended-fixed-start": Y(e, !0),
			"dp--extended-fixed-end": Y(e, !1)
		};
	}, X = (e) => ({
		...ne(e),
		dp__cell_auto_range: k(e),
		dp__cell_auto_range_start: A(e),
		dp__cell_auto_range_end: O(e)
	}), Z = (e) => g.value.enabled ? g.value.autoRange ? X(e) : u.modelAuto ? {
		...W(e),
		...ne(e)
	} : u.weekPicker ? K(e) : ne(e) : u.weekPicker ? G(e) : W(e);
	return {
		setHoverDate: b,
		clearHoverDate: x,
		getDayClassData: (e) => u.hideOffsetDates && !e.current ? {} : {
			...ee(e),
			...Z(e),
			[p.value.dayClass ? p.value.dayClass(e.value, _.value) : ""]: !0,
			...p.value.calendarCell
		}
	};
}, Qm = { key: 0 }, $m = /* @__PURE__ */ f({
	__name: "DatePicker",
	props: /* @__PURE__ */ v({
		flowStep: {},
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	}, Op),
	emits: [
		"mount",
		"update-flow-step",
		"reset-flow",
		"focus-menu",
		"select-date",
		"time-update",
		"auto-apply"
	],
	setup(e, { expose: n, emit: r }) {
		let c = r, { month: u, year: f, modelValue: p, time: h, disabledTimesConfig: g, today: _, validateTime: v, getCalendarDays: y, getMarker: x, handleArrow: w, handleScroll: T, handleSwipe: E, selectDate: D, updateMonthYear: O, presetDate: A, selectCurrentDate: j, updateTime: M, assignMonthAndYear: N, setStartTime: I } = Xm(e, c, ue, de), L = ee(), { setHoverDate: R, getDayClassData: z, clearHoverDate: B } = Zm(), { getDate: V, rootEmit: U, rootProps: G, defaults: { multiCalendars: K, timeConfig: q } } = Wf(), { getYears: te, getMonths: ne } = Lp(), { getCellId: X } = Pp(), Z = W("calendar-header"), re = W("calendar"), ie = W("time-picker"), ae = Wp(L, Vp.Calendar), oe = Wp(L, Vp.DatePickerHeader), se = Wp(L, Vp.TimePicker), ce = (e) => {
			c("mount", e);
		};
		J(K, (e, t) => {
			e.count - t.count > 0 && N();
		}, { deep: !0 });
		let le = i(() => (e) => y(u.value(e), f.value(e)).map((e) => ({
			...e,
			days: e.days.map((e) => (e.marker = x(e), e.classData = z(e), e))
		})));
		function ue(e) {
			e || e === 0 ? re.value?.[e]?.triggerTransition(u.value(e), f.value(e)) : re.value?.forEach((e, t) => e?.triggerTransition(u.value(t), f.value(t)));
		}
		function de() {
			c("update-flow-step");
		}
		let fe = (e, t, n = 0) => {
			Z.value?.[n]?.toggleMonthPicker(e, t);
		}, pe = (e, t, n = 0) => {
			Z.value?.[n]?.toggleYearPicker(e, t);
		}, me = (e, t, n) => {
			ie.value?.toggleTimePicker(e, t, n);
		}, he = (e, t) => {
			if (!G.range) {
				let n = p.value ? p.value : _, r = t ? V(t) : n, i = e ? cl(r, { weekStartsOn: 1 }) : Ml(r, { weekStartsOn: 1 });
				D({
					value: i,
					current: Ou(r) === u.value(0),
					text: "",
					classData: {}
				}), document.getElementById(X(i))?.focus();
			}
		}, ge = (e) => {
			Z.value?.[0]?.handleMonthYearChange(e, !0);
		}, _e = (e) => {
			O(0, {
				month: u.value(0),
				year: f.value(0) + (e ? 1 : -1),
				fromNav: !0
			});
		}, ve = (e) => {
			U("overlay-toggle", {
				open: !1,
				overlay: e
			}), c("focus-menu");
		};
		return n({
			clearHoverDate: B,
			presetDate: A,
			selectCurrentDate: j,
			handleArrow: w,
			updateMonthYear: O,
			setStartTime: I,
			toggleMonthPicker: fe,
			toggleYearPicker: pe,
			toggleTimePicker: me,
			getSidebarProps: () => ({
				modelValue: p,
				month: u,
				year: f,
				time: h,
				updateTime: M,
				updateMonthYear: O,
				selectDate: D,
				presetDate: A
			}),
			changeMonth: ge,
			changeYear: _e,
			selectWeekDate: he
		}), (n, r) => (k(), s(t, null, [d(lm, { collapse: e.collapse }, {
			default: Y(({ instances: i, wrapClass: c }) => [(k(!0), s(t, null, P(i, (t) => (k(), s("div", {
				key: t,
				class: S(c)
			}, [H(G).hideMonthYearSelect ? o("", !0) : (k(), a(Hm, {
				key: 0,
				ref_for: !0,
				ref: "calendar-header",
				months: H(ne)(),
				years: H(te)(),
				month: H(u)(t),
				year: H(f)(t),
				instance: t,
				"menu-wrap-ref": e.menuWrapRef,
				onMount: r[0] ||= (e) => ce(H(Kf).header),
				onResetFlow: r[1] ||= (e) => n.$emit("reset-flow"),
				onUpdateMonthYear: (e) => H(O)(t, e),
				onOverlayClosed: ve
			}, l({ _: 2 }, [P(H(oe), (e, t) => ({
				name: e,
				fn: Y((t) => [F(n.$slots, e, b({ ref_for: !0 }, t))])
			}))]), 1032, [
				"months",
				"years",
				"month",
				"year",
				"instance",
				"menu-wrap-ref",
				"onUpdateMonthYear"
			])), d(Ym, {
				ref_for: !0,
				ref: "calendar",
				"mapped-dates": le.value(t),
				instance: t,
				month: H(u)(t),
				year: H(f)(t),
				onSelectDate: (e) => H(D)(e, t !== 1),
				onSetHoverDate: r[2] ||= (e) => H(R)(e),
				onHandleScroll: (e) => H(T)(e, t),
				onHandleSwipe: (e) => H(E)(e, t),
				onMount: r[3] ||= (e) => ce(H(Kf).calendar)
			}, l({ _: 2 }, [P(H(ae), (e, t) => ({
				name: e,
				fn: Y((t) => [F(n.$slots, e, b({ ref_for: !0 }, t))])
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
		}, 8, ["collapse"]), H(q).enableTimePicker ? (k(), s("div", Qm, [F(n.$slots, "time-picker", C(m({
			time: H(h),
			updateTime: H(M)
		})), () => [d(Mm, {
			ref: "time-picker",
			hours: H(h).hours,
			minutes: H(h).minutes,
			seconds: H(h).seconds,
			"disabled-times-config": H(g),
			"validate-time": H(v),
			"no-overlay-focus": e.noOverlayFocus,
			onMount: r[4] ||= (e) => ce(H(Kf).timePicker),
			"onUpdate:hours": r[5] ||= (e) => H(M)({
				hours: e,
				minutes: H(h).minutes,
				seconds: H(h).seconds
			}),
			"onUpdate:minutes": r[6] ||= (e) => H(M)({
				hours: H(h).hours,
				minutes: e,
				seconds: H(h).seconds
			}),
			"onUpdate:seconds": r[7] ||= (e) => H(M)({
				hours: H(h).hours,
				minutes: H(h).minutes,
				seconds: e
			}),
			onResetFlow: r[8] ||= (e) => n.$emit("reset-flow")
		}, l({ _: 2 }, [P(H(se), (e, t) => ({
			name: e,
			fn: Y((t) => [F(n.$slots, e, C(m(t)))])
		}))]), 1032, [
			"hours",
			"minutes",
			"seconds",
			"disabled-times-config",
			"validate-time",
			"no-overlay-focus"
		])])])) : o("", !0)], 64));
	}
}), eh = (e, t) => {
	let { getDate: n, modelValue: r, year: a, calendars: o, defaults: { highlight: s, range: c, multiDates: l } } = Wf(), { isDateBetween: u, isDateEqual: d } = Pp(), { checkRangeAutoApply: f, handleMultiDatesSelect: p, setMonthOrYearRange: m } = hm();
	np();
	let { isDisabled: h } = rp(), { formatQuarterText: g } = Ip(), { selectYear: _, groupedYears: v, showYearPicker: y, isDisabled: b, toggleYearPicker: x, handleYearSelect: S, handleYear: C, setStartDate: w } = mm(t), T = N();
	D(() => {
		w();
	});
	let E = i(() => (e) => r.value ? Array.isArray(r.value) ? r.value.some((t) => Ud(e, t)) : Ud(r.value, e) : !1), O = (e) => {
		if (c.value.enabled) {
			if (Array.isArray(r.value)) {
				let t = d(e, r.value[0]) || d(e, r.value[1]);
				return u(r.value, T.value, e) && !t;
			}
			return !1;
		}
		return !1;
	}, k = (e, t) => e.quarter === xl(t) && e.year === $(t), A = (e) => typeof s.value == "function" ? s.value({
		quarter: xl(e),
		year: $(e)
	}) : s.value.quarters.some((t) => k(t, e)), j = i(() => (e) => {
		let t = mf(n(), { year: a.value(e) });
		return Ol({
			start: jl(t),
			end: Al(t)
		}).map((e) => {
			let t = Dl(e), n = Nl(e), r = h(e), i = O(t), a = A(t);
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
		year: a,
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
			if (!n) return o.value[t].month = Ou(Nl(e)), l.value.enabled ? M(e) : c.value.enabled ? P(e) : F(e);
		}
	};
}, th = { class: "dp--quarter-items" }, nh = [
	"data-test-id",
	"disabled",
	"onClick",
	"onMouseover"
], rh = /* @__PURE__ */ f({
	__name: "QuarterPicker",
	props: {
		flowStep: {},
		collapse: { type: Boolean },
		menuWrapRef: {},
		noOverlayFocus: { type: Boolean }
	},
	emits: ["reset-flow", "auto-apply"],
	setup(e, { expose: n, emit: r }) {
		let i = r, f = e, { defaults: { config: p } } = Wf(), m = ee(), { boolHtmlAttribute: h } = zp(), g = Wp(m, Vp.YearMode), { groupedYears: _, year: v, isDisabled: y, quarters: x, modelValue: C, showYearPicker: T, setHoverDate: E, selectQuarter: D, toggleYearPicker: O, handleYearSelect: A, handleYear: j } = eh(f, i);
		return n({ getSidebarProps: () => ({
			modelValue: C,
			year: v,
			selectQuarter: D,
			handleYearSelect: A,
			handleYear: j
		}) }), (n, r) => (k(), a(lm, {
			collapse: e.collapse,
			stretch: ""
		}, {
			default: Y(({ instances: e, wrapClass: r }) => [(k(!0), s(t, null, P(e, (e) => (k(), s("div", {
				key: e,
				class: S(r)
			}, [c("div", {
				class: "dp-quarter-picker-wrap",
				style: w({ minHeight: `${H(p).modeHeight}px` })
			}, [
				n.$slots["top-extra"] ? F(n.$slots, "top-extra", {
					key: 0,
					value: H(C)
				}) : o("", !0),
				c("div", null, [d(pm, {
					items: H(_)(e),
					instance: e,
					"show-year-picker": H(T)[e],
					year: H(v)(e),
					"is-disabled": (t) => H(y)(e, t),
					onHandleYear: (t) => H(j)(e, t),
					onYearSelect: (t) => H(A)(t, e),
					onToggleYearPicker: (t) => H(O)(e, t?.flow, t?.show)
				}, l({ _: 2 }, [P(H(g), (e, t) => ({
					name: e,
					fn: Y((t) => [F(n.$slots, e, b({ ref_for: !0 }, t))])
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
				c("div", th, [(k(!0), s(t, null, P(H(x)(e), (t, r) => (k(), s("div", { key: r }, [c("button", {
					type: "button",
					class: S(["dp--qr-btn", {
						"dp--qr-btn-active": t.active,
						"dp--qr-btn-between": t.isBetween,
						"dp--qr-btn-disabled": t.disabled,
						"dp--highlighted": t.highlighted
					}]),
					"data-dp-action-element": "0",
					"data-test-id": t.value,
					disabled: H(h)(t.disabled),
					onClick: (n) => H(D)(t.value, e, t.disabled),
					onMouseover: (e) => H(E)(t.value)
				}, [F(n.$slots, "quarter", {
					value: t.value,
					text: t.text
				}, () => [u(z(t.text), 1)])], 42, nh)]))), 128))])
			], 4)], 2))), 128))]),
			_: 3
		}, 8, ["collapse"]));
	}
}), ih = [
	"id",
	"tabindex",
	"role",
	"aria-label"
], ah = {
	key: 0,
	class: "dp--menu-load-container"
}, oh = {
	key: 1,
	class: "dp--menu-header"
}, sh = ["data-dp-mobile"], ch = {
	key: 0,
	class: "dp__sidebar_left"
}, lh = ["data-dp-mobile"], uh = [
	"data-test-id",
	"data-dp-mobile",
	"onClick",
	"onKeydown"
], dh = { class: "dp__instance_calendar" }, fh = {
	key: 2,
	class: "dp__sidebar_right"
}, ph = {
	key: 2,
	class: "dp__action_extra"
}, mh = /* @__PURE__ */ f({
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
	setup(e, { expose: n, emit: r }) {
		let u = r, d = ee(), { state: f, rootProps: p, defaults: { textInput: h, inline: g, config: _, ui: v, ariaLabels: y }, setState: b } = Wf(), { isMobile: x } = Fp(), { handleEventPropagation: T, getElWithin: E, checkStopPropagation: A, checkKeyDown: j } = Np();
		$f();
		let M = W("inner-menu"), I = W("dp-menu"), R = W("dyn-cmp"), B = N(0), U = N(!1), G = N(!1), { flowStep: K, updateFlowStep: q, childMount: J, resetFlow: te, handleFlow: ne } = ip(R), X = (e) => {
			G.value = !0, _.value.allowPreventDefault && e.preventDefault(), A(e, _.value, !0);
		};
		D(() => {
			U.value = !0, re(), globalThis.addEventListener("resize", re);
			let e = oe(I);
			e && !h.value.enabled && !g.value.enabled && b("menuFocused", !0), e && (e.addEventListener("pointerdown", X), e.addEventListener("mousedown", X)), document.addEventListener("mousedown", Te);
		}), O(() => {
			globalThis.removeEventListener("resize", re), document.removeEventListener("mousedown", Te);
			let e = oe(I);
			e && (e.removeEventListener("pointerdown", X), e.removeEventListener("mousedown", X));
		});
		let re = () => {
			let e = oe(M);
			e && (B.value = e.getBoundingClientRect().width);
		}, ie = i(() => p.monthPicker ? _m : p.yearPicker ? ym : p.timePicker ? Fm : p.quarterPicker ? rh : $m), ae = () => {
			let e = oe(I);
			e && e.focus({ preventScroll: !0 });
		}, se = i(() => R.value?.getSidebarProps() || {}), ce = Wp(d, Vp.ActionRow), le = Wp(d, Vp.PassTrough), ue = i(() => ({
			dp__menu_disabled: p.disabled,
			dp__menu_readonly: p.readonly,
			"dp-menu-loading": p.loading
		})), de = i(() => ({
			dp__menu: !0,
			dp__menu_index: !g.value.enabled,
			dp__relative: g.value.enabled,
			...v.value.menu
		})), fe = (e) => {
			A(e, _.value, !0);
		}, pe = (e) => {
			_.value.escClose && (u("close-picker"), T(e, _.value));
		}, me = (e) => {
			p.arrowNavigation || (e === Yf.left || e === Yf.up ? ve("handleArrow", Yf.left, 0, e === Yf.up) : ve("handleArrow", Yf.right, 0, e === Yf.down));
		}, he = (e) => {
			b("shiftKeyInMenu", e.shiftKey), !p.hideMonthYearSelect && e.code === Xf.tab && e.target.classList.contains("dp__menu") && f.shiftKeyInMenu && (e.preventDefault(), A(e, _.value, !0), u("close-picker"));
		}, ge = (e) => {
			R.value?.toggleTimePicker(!1, !1), R.value?.toggleMonthPicker(!1, !1, e), R.value?.toggleYearPicker(!1, !1, e);
		}, _e = (e, t = 0) => e === "month" ? R.value?.toggleMonthPicker(!1, !0, t) : e === "year" ? R.value?.toggleYearPicker(!1, !0, t) : e === "time" ? R.value?.toggleTimePicker(!0, !1) : ge(t), ve = (e, ...t) => {
			R.value?.[e] && R.value?.[e](...t);
		}, ye = () => {
			ve("selectCurrentDate");
		}, be = (e) => {
			ve("presetDate", V(e));
		}, xe = () => {
			ve("clearHoverDate");
		}, Se = (e, t) => {
			ve("updateMonthYear", e, t);
		}, Ce = (e, t) => {
			e.preventDefault(), me(t);
		}, we = (e) => {
			if (he(e), e.key === Xf.home || e.key === Xf.end) return ve("selectWeekDate", e.key === Xf.home, e.target.getAttribute("id"));
			switch ((e.key === Xf.pageUp || e.key === Xf.pageDown) && (e.shiftKey ? (ve("changeYear", e.key === Xf.pageUp), E(I.value, "overlay-year")?.focus()) : (ve("changeMonth", e.key === Xf.pageUp), E(I.value, e.key === Xf.pageUp ? "action-prev" : "action-next")?.focus()), e.target.getAttribute("id") && I.value?.focus({ preventScroll: !0 })), e.key) {
				case Xf.esc: return pe(e);
				case Xf.arrowLeft: return Ce(e, Yf.left);
				case Xf.arrowRight: return Ce(e, Yf.right);
				case Xf.arrowUp: return Ce(e, Yf.up);
				case Xf.arrowDown: return Ce(e, Yf.down);
				default: return;
			}
		}, Te = (e) => {
			g.value.enabled && !g.value.input && !I.value?.contains(e.target) && G.value && (G.value = !1, u("menu-blur"));
		};
		return n({
			updateMonthYear: Se,
			switchView: _e,
			onValueCleared: () => {
				R.value?.setStartTime?.();
			},
			handleFlow: ne
		}), (n, r) => (k(), s("div", {
			id: H(p).menuId,
			ref: "dp-menu",
			tabindex: H(g).enabled ? void 0 : "0",
			role: H(g).enabled ? void 0 : "dialog",
			"aria-label": H(y)?.menu,
			class: S(de.value),
			onMouseleave: xe,
			onClick: fe,
			onKeydown: we
		}, [
			(H(p).disabled || H(p).readonly) && H(g).enabled || H(p).loading ? (k(), s("div", {
				key: 0,
				class: S(ue.value)
			}, [H(p).loading ? (k(), s("div", ah, [...r[5] ||= [c("span", { class: "dp--menu-loader" }, null, -1)]])) : o("", !0)], 2)) : o("", !0),
			n.$slots["menu-header"] ? (k(), s("div", oh, [F(n.$slots, "menu-header")])) : o("", !0),
			F(n.$slots, "arrow"),
			c("div", {
				ref: "inner-menu",
				class: S({
					dp__menu_content_wrapper: H(p).presetDates?.length || !!n.$slots["left-sidebar"] || !!n.$slots["right-sidebar"],
					"dp--menu-content-wrapper-collapsed": e.collapse && (H(p).presetDates?.length || !!n.$slots["left-sidebar"] || !!n.$slots["right-sidebar"])
				}),
				"data-dp-mobile": H(x),
				style: w({ "--dp-menu-width": `${B.value}px` })
			}, [
				n.$slots["left-sidebar"] ? (k(), s("div", ch, [F(n.$slots, "left-sidebar", C(m(se.value)))])) : o("", !0),
				H(p).presetDates.length ? (k(), s("div", {
					key: 1,
					class: S({
						"dp--preset-dates-collapsed": e.collapse,
						"dp--preset-dates": !0
					}),
					"data-dp-mobile": H(x)
				}, [(k(!0), s(t, null, P(H(p).presetDates, (r, i) => (k(), s(t, { key: i }, [r.slot ? F(n.$slots, r.slot, {
					key: 0,
					presetDate: be,
					label: r.label,
					value: r.value
				}) : (k(), s("button", {
					key: 1,
					type: "button",
					style: w(r.style || {}),
					class: S(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
					"data-test-id": r.testId ?? void 0,
					"data-dp-mobile": H(x),
					onClick: Z((e) => be(r.value), ["prevent"]),
					onKeydown: (e) => H(j)(e, () => be(r.value), !0)
				}, z(r.label), 47, uh))], 64))), 128))], 10, lh)) : o("", !0),
				c("div", dh, [(k(), a(L(ie.value), {
					ref: "dyn-cmp",
					"flow-step": H(K),
					collapse: e.collapse,
					"no-overlay-focus": e.noOverlayFocus,
					"menu-wrap-ref": I.value,
					onMount: H(J),
					onUpdateFlowStep: H(q),
					onResetFlow: H(te),
					onFocusMenu: ae,
					onSelectDate: r[0] ||= (e) => n.$emit("select-date"),
					onAutoApply: r[1] ||= (e) => n.$emit("auto-apply", e),
					onTimeUpdate: r[2] ||= (e) => n.$emit("time-update")
				}, l({ _: 2 }, [P(H(le), (e, t) => ({
					name: e,
					fn: Y((t) => [F(n.$slots, e, C(m({ ...t })))])
				}))]), 1064, [
					"flow-step",
					"collapse",
					"no-overlay-focus",
					"menu-wrap-ref",
					"onMount",
					"onUpdateFlowStep",
					"onResetFlow"
				]))]),
				n.$slots["right-sidebar"] ? (k(), s("div", fh, [F(n.$slots, "right-sidebar", C(m(se.value)))])) : o("", !0)
			], 14, sh),
			n.$slots["action-extra"] ? (k(), s("div", ph, [n.$slots["action-extra"] ? F(n.$slots, "action-extra", {
				key: 0,
				selectCurrentDate: ye
			}) : o("", !0)])) : o("", !0),
			!H(p).autoApply || H(_).keepActionRow ? (k(), a(tm, {
				key: 3,
				"menu-mount": U.value,
				"calendar-width": B.value,
				onClosePicker: r[3] ||= (e) => n.$emit("close-picker"),
				onSelectDate: r[4] ||= (e) => n.$emit("select-date"),
				onSelectNow: ye
			}, l({ _: 2 }, [P(H(ce), (e, t) => ({
				name: e,
				fn: Y((t) => [F(n.$slots, e, C(m(t)))])
			}))]), 1032, ["menu-mount", "calendar-width"])) : o("", !0)
		], 42, ih));
	}
}), hh = ["data-dp-mobile"], gh = /* @__PURE__ */ f({
	__name: "VueDatePicker",
	setup(e, { expose: t }) {
		let { rootEmit: u, setState: f, inputValue: p, modelValue: h, rootProps: g, defaults: { inline: _, config: v, textInput: y, range: b, multiDates: T, teleport: E, floatingConfig: A } } = Wf(), { validateDate: j, isValidTime: M } = rp(), { menuTransition: I, showTransition: L } = tp(), { isMobile: R } = Fp(), { findNextFocusableElement: z, getNumVal: V } = Np(), U = ee(), G = N(!1), K = N(_.value.enabled || g.centered), q = B(g, "modelValue"), te = B(g, "timezone"), ne = W("dp-menu-wrap"), X = W("dp-menu"), Z = W("input-cmp"), re = W("picker-wrapper"), ie = W("menu-arrow"), oe = N(!1), se = N(!1), ce = N(!1), le = N(!0), { floatingStyles: ue, middlewareData: de, placement: fe, y: pe } = qc(Z, ne, {
			strategy: A.value.strategy,
			placement: A.value.placement,
			middleware: ((e) => (A.value.arrow && e.push(Wc({ element: A.value.arrow === !0 ? ie : A.value.arrow })), A.value.flip && e.push(Nc(typeof A.value.flip == "object" ? A.value.flip : {})), A.value.shift && e.push(Mc(typeof A.value.shift == "object" ? A.value.shift : {})), e))([jc(A.value.offset)]),
			whileElementsMounted: Ac
		});
		D(() => {
			ge(g.modelValue), x().then(() => {
				_.value.enabled || globalThis.addEventListener("resize", Te);
			}), _.value.enabled && (G.value = !0), globalThis.addEventListener("keyup", Ee), globalThis.addEventListener("keydown", De);
		}), O(() => {
			_.value.enabled || globalThis.removeEventListener("resize", Te), globalThis.removeEventListener("keyup", Ee), globalThis.removeEventListener("keydown", De);
		});
		let me = Gp(U, g.presetDates), he = Wp(U, Vp.Input);
		J([q, te], () => {
			ge(q.value);
		}, { deep: !0 }), J([fe, pe], () => {
			!_.value.enabled && !g.centered && le.value && (K.value = !1, x().then(() => {
				le.value = !1, K.value = !0;
			}));
		});
		let { parseExternalModelValue: ge, emitModelValue: _e, formatInputValue: ve, checkBeforeEmit: ye } = ep(), be = i(() => ({
			dp__main: !0,
			dp__theme_dark: g.dark,
			dp__theme_light: !g.dark,
			dp__flex_display: _.value.enabled,
			"dp--flex-display-collapsed": ce.value,
			dp__flex_display_with_input: _.value.input
		})), xe = i(() => g.dark ? "dp__theme_dark" : "dp__theme_light"), Se = i(() => _.value.enabled && (g.timePicker || g.monthPicker || g.yearPicker || g.quarterPicker)), Ce = () => Z.value?.$el?.getBoundingClientRect() ?? {
			width: 0,
			left: 0,
			right: 0
		}, we = () => {
			G.value && v.value.closeOnScroll && Ie();
		}, Te = () => {
			let e = X.value?.$el.getBoundingClientRect().width ?? 0;
			ce.value = document.body.offsetWidth <= e;
		}, Ee = (e) => {
			e.key === "Tab" && !_.value.enabled && !g.teleport && v.value.tabOutClosesMenu && (re.value.contains(document.activeElement) || Ie()), se.value = e.shiftKey;
		}, De = (e) => {
			se.value = e.shiftKey;
		}, Oe = () => {
			!g.disabled && !g.readonly && (le.value = !0, G.value = !0, G.value && u("open"), G.value || Fe(), ge(g.modelValue));
		}, ke = () => {
			p.value = "", Fe(), X.value?.onValueCleared(), Z.value?.setParsedDate(null), u("update:model-value", null), u("cleared"), v.value.closeOnClearValue && Ie();
		}, Ae = () => {
			let e = h.value;
			return !e || !Array.isArray(e) && j(e) ? !0 : Array.isArray(e) ? T.value.enabled || e.length === 2 && j(e[0]) && j(e[1]) ? !0 : b.value.partialRange && !g.timePicker ? j(e[0]) : !1 : !1;
		}, je = () => {
			ye() && Ae() ? (_e(), Ie()) : u("invalid-select");
		}, Me = (e) => {
			Ne(), _e(), v.value.closeOnAutoApply && !e && Ie();
		}, Ne = () => {
			Z.value && y.value.enabled && Z.value.setParsedDate(h.value);
		}, Pe = (e = !1) => {
			g.autoApply && M(h.value) && Ae() && (b.value.enabled && Array.isArray(h.value) ? (b.value.partialRange || h.value.length === 2) && Me(e) : Me(e));
		}, Fe = () => {
			y.value.enabled || (h.value = null);
		}, Ie = (e = !1) => {
			le.value = !0, e && h.value && v.value.setDateOnMenuClose && je(), _.value.enabled || (G.value && (G.value = !1, f("menuFocused", !1), f("shiftKeyInMenu", !1), u("closed"), p.value && ge(q.value)), Fe(), u("blur"));
		}, Le = (e, t, n = !1) => {
			if (!e) {
				h.value = null;
				return;
			}
			let r = Array.isArray(e) ? e.every((e) => j(e)) : j(e), i = M(e);
			r && i ? (f("isTextInputDate", !0), h.value = e, t ? (oe.value = n, je(), u("text-submit")) : g.autoApply && Pe(!0), x().then(() => {
				f("isTextInputDate", !1);
			})) : u("invalid-date", e);
		}, Re = () => {
			g.autoApply && M(h.value) && _e(), Ne();
		}, ze = () => G.value ? Ie() : Oe(), Be = (e) => {
			h.value = e;
		}, Ve = () => {
			y.value.enabled && (f("isInputFocused", !0), ve()), u("focus");
		}, He = () => {
			y.value.enabled && (f("isInputFocused", !1), ge(g.modelValue), oe.value && z(re.value, se.value)?.focus()), u("blur");
		}, Ue = (e, t) => {
			X.value && X.value.updateMonthYear(t ?? 0, {
				month: V(e.month),
				year: V(e.year)
			});
		}, We = (e) => {
			ge(e ?? g.modelValue);
		}, Ge = (e, t) => {
			X.value?.switchView(e, t);
		}, Ke = (e, t) => {
			if (G.value) return v.value.onClickOutside ? v.value.onClickOutside(e, t) : Ie(!0);
		};
		return ae(ne, (e) => Ke(Ae, e), { ignore: [Z] }), t({
			closeMenu: Ie,
			selectDate: je,
			clearValue: ke,
			openMenu: Oe,
			onScroll: we,
			formatInputValue: ve,
			updateInternalModelValue: Be,
			setMonthYear: Ue,
			parseModel: We,
			switchView: Ge,
			toggleMenu: ze,
			handleFlow: (e = 0) => {
				X.value?.handleFlow(e);
			},
			getDpWrapMenuRef: () => ne,
			dpMenuRef: () => X,
			dpWrapMenuRef: () => ne,
			inputRef: () => Z
		}), (e, t) => (k(), s("div", {
			ref: "picker-wrapper",
			class: S(be.value),
			"data-datepicker-instance": "",
			"data-dp-mobile": H(R)
		}, [d(Xp, {
			ref: "input-cmp",
			"is-menu-open": G.value,
			onClear: ke,
			onOpen: Oe,
			onSetInputDate: Le,
			onSetEmptyDate: H(_e),
			onSelectDate: je,
			onToggle: ze,
			onClose: Ie,
			onFocus: Ve,
			onBlur: He,
			onRealBlur: t[0] ||= (e) => H(f)("isInputFocused", !1)
		}, l({ _: 2 }, [P(H(he), (t, n) => ({
			name: t,
			fn: Y((n) => [F(e.$slots, t, C(m(n)))])
		}))]), 1032, ["is-menu-open", "onSetEmptyDate"]), d(n, {
			to: H(E),
			disabled: !H(E)
		}, {
			default: Y(() => [c("div", {
				ref: "dp-menu-wrap",
				class: S({
					"dp--menu-wrapper": !H(_).enabled,
					dp__outer_menu_wrap: !0,
					"dp--centered": H(g).centered
				}),
				style: w(!H(_).enabled && !H(g).centered ? H(ue) : void 0)
			}, [d(r, {
				name: H(I)(H(fe).startsWith("top")),
				css: H(L) && !H(_).enabled && !H(g).centered && K.value
			}, {
				default: Y(() => [G.value && K.value ? (k(), a(mh, {
					key: 0,
					ref: "dp-menu",
					class: S({ [xe.value]: !0 }),
					"no-overlay-focus": Se.value,
					collapse: ce.value,
					"get-input-rect": Ce,
					onClosePicker: Ie,
					onSelectDate: je,
					onAutoApply: Pe,
					onTimeUpdate: Re,
					onMenuBlur: t[1] ||= (e) => H(u)("blur")
				}, l({ _: 2 }, [P(H(me), (t, n) => ({
					name: t,
					fn: Y((n) => [F(e.$slots, t, C(m({ ...n })))])
				})), !H(_).enabled && !H(g).centered && H(A).arrow === !0 ? {
					name: "arrow",
					fn: Y(() => [c("div", {
						ref: "menu-arrow",
						class: S({
							dp__arrow_top: H(fe) === "bottom",
							dp__arrow_bottom: H(fe) === "top"
						}),
						style: w({
							left: H(de).arrow?.x == null ? "" : `${H(de).arrow.x}px`,
							top: H(de).arrow?.y == null ? "" : `${H(de).arrow.y}px`
						})
					}, null, 6)]),
					key: "0"
				} : void 0]), 1032, [
					"class",
					"no-overlay-focus",
					"collapse"
				])) : o("", !0)]),
				_: 3
			}, 8, ["name", "css"])], 6)]),
			_: 3
		}, 8, ["to", "disabled"])], 10, hh));
	}
}), _h = /* @__PURE__ */ f({
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
	}, kp),
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
		Uf(i, r);
		let o = Gp(ee(), i.presetDates);
		return t(Rp(W("date-picker"))), (e, t) => (k(), a(gh, { ref: "date-picker" }, l({ _: 2 }, [P(H(o), (t, n) => ({
			name: t,
			fn: Y((n) => [F(e.$slots, t, C(m(n)))])
		}))]), 1536));
	}
}), vh = se("darkMode", !0), yh = () => {
	typeof window > "u" || (vh.value ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"));
};
function bh() {
	yh();
}
function xh() {
	return {
		isDarkMode: vh,
		toggleTheme: () => {
			vh.value = !vh.value, yh();
		},
		applyTheme: yh
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/locale/es/_lib/formatDistance.js
var Sh = {
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
}, Ch = (e, t, n) => {
	let r, i = Sh[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "en " + r : "hace " + r : r;
}, wh = {
	date: Il({
		formats: {
			full: "EEEE, d 'de' MMMM 'de' y",
			long: "d 'de' MMMM 'de' y",
			medium: "d MMM y",
			short: "dd/MM/y"
		},
		defaultWidth: "full"
	}),
	time: Il({
		formats: {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: Il({
		formats: {
			full: "{{date}} 'a las' {{time}}",
			long: "{{date}} 'a las' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, Th = {
	lastWeek: "'el' eeee 'pasado a la' p",
	yesterday: "'ayer a la' p",
	today: "'hoy a la' p",
	tomorrow: "'mañana a la' p",
	nextWeek: "eeee 'a la' p",
	other: "P"
}, Eh = {
	lastWeek: "'el' eeee 'pasado a las' p",
	yesterday: "'ayer a las' p",
	today: "'hoy a las' p",
	tomorrow: "'mañana a las' p",
	nextWeek: "eeee 'a las' p",
	other: "P"
}, Dh = {
	code: "es",
	formatDistance: Ch,
	formatLong: wh,
	formatRelative: (e, t, n, r) => t.getHours() === 1 ? Th[e] : Eh[e],
	localize: {
		ordinalNumber: (e, t) => Number(e) + "º",
		era: Bl({
			values: {
				narrow: ["AC", "DC"],
				abbreviated: ["AC", "DC"],
				wide: ["antes de cristo", "después de cristo"]
			},
			defaultWidth: "wide"
		}),
		quarter: Bl({
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
		month: Bl({
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
		day: Bl({
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
		dayPeriod: Bl({
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
		ordinalNumber: Gl({
			matchPattern: /^(\d+)(º)?/i,
			parsePattern: /\d+/i,
			valueCallback: function(e) {
				return parseInt(e, 10);
			}
		}),
		era: Hl({
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
		quarter: Hl({
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
		month: Hl({
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
		day: Hl({
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
		dayPeriod: Hl({
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
}, Oh = ["for"], kh = {
	key: 1,
	class: "relative"
}, Ah = [
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
], jh = {
	key: 1,
	class: "space-y-1"
}, Mh = [
	"id",
	"value",
	"onInput",
	"min",
	"max",
	"step",
	"disabled",
	"autocomplete"
], Nh = { class: "flex justify-between text-xs text-gray-400" }, Ph = { class: "font-medium text-gray-600 dark:text-gray-300" }, Fh = [
	"id",
	"value",
	"onInput",
	"type",
	"placeholder",
	"disabled",
	"autocomplete"
], Ih = [
	"id",
	"placeholder",
	"autocomplete"
], Lh = {
	key: 4,
	class: "absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer transition-colors duration-200"
}, Rh = {
	key: 5,
	class: "absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer transition-colors duration-200"
}, zh = {
	key: 6,
	class: "absolute inset-y-0 right-0 pr-3 flex items-center"
}, Bh = {
	key: 7,
	class: "absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer transition-colors duration-200"
}, Vh = {
	key: 2,
	class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, Hh = /* @__PURE__ */ f({
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
		let t = ko, n = i(() => {
			if (r.mask) return r.mask;
		}), r = e, l = U(e, "modelValue"), { isDarkMode: u } = xh(), f = N(""), p = N(null), m = i({
			get: () => r.type === "datetime" ? p.value : l.value,
			set: (e) => {
				if (r.type === "datetime") {
					let t = g(String(e || ""));
					t !== null && (l.value = t);
				} else l.value = e;
			}
		});
		function h(e) {
			if (!e) return null;
			try {
				let t = Gd(e);
				return bl(t) ? bu(t, "yyyy-MM-dd HH:mm") : null;
			} catch {
				return null;
			}
		}
		function g(e) {
			if (!e) return null;
			try {
				let t = Gd(e.replace(" ", "T"));
				return bl(t) ? t.toISOString() : null;
			} catch {
				return null;
			}
		}
		function _(e, t) {
			(r.type !== "datetime" || g(String(e || "")) !== null) && t.onChange(e);
		}
		let v = i(() => ({ config: {
			prefix: "",
			suffix: "",
			thousands: ",",
			decimal: ".",
			precision: 2,
			masked: !1,
			allowBlank: !1,
			shouldRound: !0
		} }));
		J(() => l.value, (e) => {
			if (r.type === "money") {
				if (e == null || e === "") f.value = "";
				else if (typeof e == "number") f.value = (e / 100).toFixed(2);
				else {
					let t = parseFloat(String(e));
					isNaN(t) ? f.value = "" : f.value = (t / 100).toFixed(2);
				}
			} else if (r.type === "datetime") {
				let t = h(String(e || ""));
				p.value = t;
			}
		}, { immediate: !0 }), J(() => f.value, (e) => {
			if (r.type === "money") {
				if (!e || e === "") {
					l.value = 0;
					return;
				}
				let t = ho(e, v.value.config), n = parseFloat(String(t));
				Number.isNaN(n) ? l.value = 0 : l.value = Math.round(n * 100);
			}
		}), J(() => p.value, (e) => {
			if (r.type === "datetime") {
				let t = g(e);
				t !== null && (l.value = t);
			}
		});
		let y = N(!1), x = i(() => r.type === "password"), C = i(() => r.type === "password" ? y.value ? "text" : "password" : r.type), w = i(() => r.type === "password" ? y.value ? vn : yn : null), T = () => {
			y.value = !y.value;
		};
		return (i, p) => {
			let h = Dr;
			return k(), s("div", null, [e.label && !e.small ? (k(), s("label", {
				key: 0,
				for: e.id,
				class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
			}, z(e.label), 9, Oh)) : o("", !0), d(H(ja), {
				name: e.name,
				label: e.label?.toLowerCase(),
				rules: e.rules
			}, {
				default: Y(({ field: i, errorMessage: g }) => [c("div", null, [
					e.url && e.searchBy ? (k(), a(h, {
						key: 0,
						url: e.url,
						id: e.id,
						"search-by": e.searchBy,
						"label-key": e.labelKey,
						"value-key": e.valueKey,
						"subtitle-key": e.subtitleKey,
						placeholder: e.placeholder,
						"left-icon": e.leftIcon,
						modelValue: l.value,
						"onUpdate:modelValue": p[0] ||= (e) => l.value = e,
						disabled: e.disabled,
						onSelect: (e) => i.onChange(e.value)
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
					])) : (k(), s("div", kh, [
						e.type === "date" || e.type === "datetime" || e.type === "time" ? (k(), a(H(_h), {
							key: 0,
							modelValue: m.value,
							"onUpdate:modelValue": [p[1] ||= (e) => m.value = e, (e) => _(e, i)],
							"min-date": e.minDate ?? void 0,
							"max-date": e.maxDate ?? void 0,
							"disabled-dates": e.disabledDates,
							id: e.id,
							locale: H(Dh),
							"time-picker": e.type === "time",
							"model-type": e.type === "time" ? "HH:mm" : e.type === "datetime" ? "yyyy-MM-dd HH:mm" : "yyyy-MM-dd",
							"time-config": e.type === "date" ? { enableTimePicker: !1 } : { enableTimePicker: !0 },
							dark: H(u),
							"text-input": "",
							teleport: !1,
							autocomplete: e.autocomplete
						}, {
							"dp-input": Y((t) => [c("input", {
								id: e.id,
								value: t.value,
								placeholder: e.placeholder,
								onInput: t.onInput,
								onKeydown: [X(t.onEnter, ["enter"]), X(t.onTab, ["tab"])],
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
							}, null, 42, Ah)]),
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
						])) : e.type === "range" ? (k(), s("div", jh, [c("input", b({ id: e.id }, i, {
							value: l.value,
							onInput: (e) => {
								i.onChange(e), l.value = Number(e.target.value);
							},
							type: "range",
							min: e.min,
							max: e.max,
							step: e.step,
							disabled: e.disabled,
							autocomplete: e.autocomplete,
							class: "w-full accent-primary-600"
						}), null, 16, Mh), c("div", Nh, [
							c("span", null, z(e.min), 1),
							c("span", Ph, z(l.value), 1),
							c("span", null, z(e.max), 1)
						])])) : e.type === "money" ? ne((k(), s("input", {
							key: 3,
							id: e.id,
							"onUpdate:modelValue": p[2] ||= (e) => f.value = e,
							type: "text",
							placeholder: e.placeholder,
							autocomplete: e.autocomplete,
							class: S([
								"w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 pl-10",
								e.rightIcon || x.value || e.type === "money" ? "pr-10" : "pr-4",
								g ? "border-danger-500 dark:border-danger-500" : "",
								e.small ? "py-2" : "py-3"
							])
						}, null, 10, Ih)), [[
							G,
							f.value,
							void 0,
							{ lazy: !0 }
						], [H(t), v.value.config]]) : ne((k(), s("input", b({
							key: 2,
							id: e.id
						}, i, {
							value: l.value,
							onInput: (e) => {
								i.onChange(e), l.value = e.target.value;
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
						}), null, 16, Fh)), [[H(qo), n.value]]),
						e.type === "money" ? (k(), s("div", Lh, [(k(), a(L(H(gn)), { class: S([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"]) }, null, 8, ["class"]))])) : o("", !0),
						e.leftIcon ? (k(), s("div", Rh, [(k(), a(L(e.leftIcon), { class: S([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"]) }, null, 8, ["class"]))])) : o("", !0),
						r.loading ? (k(), s("div", zh, [d(H(xn), { class: S([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400 animate-spin"]) }, null, 8, ["class"])])) : e.rightIcon && !x.value ? (k(), s("div", Bh, [(k(), a(L(e.rightIcon), { class: S([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"]) }, null, 8, ["class"]))])) : o("", !0),
						x.value ? (k(), s("button", {
							key: 8,
							type: "button",
							onClick: T,
							class: "absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer transition-colors duration-200"
						}, [(k(), a(L(w.value), { class: S([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"]) }, null, 8, ["class"]))])) : o("", !0)
					])),
					d(H(Va), {
						name: e.name,
						class: "mt-1 text-sm text-danger-600 dark:text-danger-400"
					}, null, 8, ["name"]),
					e.help ? (k(), s("p", Vh, z(e.help), 1)) : o("", !0)
				])]),
				_: 1
			}, 8, [
				"name",
				"label",
				"rules"
			])]);
		};
	}
}), Uh = { class: "flex justify-end space-x-3 pt-4" }, Wh = /* @__PURE__ */ f({
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
		let n = Jt({ confirmation: At().required("La confirmación es requerida").oneOf(["Confirmar"], "Debes escribir 'Confirmar' exactamente") }), r = t, i = j({ confirmation: "" }), o = () => {
			e.loading || (i.confirmation = "", r("close"));
		}, s = () => {
			r("confirm");
		};
		return J(() => e.open, (e) => {
			e || (i.confirmation = "");
		}), (t, r) => {
			let l = Hh, f = Nn, p = cr;
			return k(), a(p, {
				open: e.open,
				title: e.title,
				subtitle: e.subtitle,
				onClose: o
			}, {
				default: Y(() => [d(H(za), {
					onSubmit: s,
					class: "space-y-4",
					"initial-values": i,
					"validation-schema": H(n)
				}, {
					default: Y(() => [c("div", null, [d(l, {
						modelValue: i.confirmation,
						"onUpdate:modelValue": r[0] ||= (e) => i.confirmation = e,
						id: "confirmation",
						name: "confirmation",
						label: "Confirmación",
						placeholder: "Escribe 'Confirmar'"
					}, null, 8, ["modelValue"])]), c("div", Uh, [d(f, {
						type: "button",
						variant: "outline",
						onClick: o,
						disabled: e.loading
					}, {
						default: Y(() => [...r[1] ||= [u(" Cancelar ", -1)]]),
						_: 1
					}, 8, ["disabled"]), d(f, {
						type: "submit",
						variant: "danger",
						loading: e.loading,
						disabled: e.loading
					}, {
						default: Y(() => [...r[2] ||= [u(" Confirmar ", -1)]]),
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
}), Gh = { class: "mt-4 text-sm text-gray-600 dark:text-gray-400 tabular-nums" }, Kh = /* @__PURE__ */ f({
	__name: "ResultCount",
	props: {
		internalPaginationServer: {},
		totalItems: {}
	},
	setup(e) {
		let t = e, n = i(() => t.internalPaginationServer.total);
		return (t, r) => (k(), s("div", Gh, " Mostrando " + z(e.totalItems) + " de " + z(H(n)) + " resultados ", 1));
	}
}), qh = /* @__PURE__ */ f({
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
		return (t, n) => e.to ? (k(), a(H(re), {
			key: 0,
			to: e.to,
			class: S(["w-full text-left px-4 py-2 text-sm transition-colors duration-150 flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/30 hover:text-gray-900 dark:hover:text-white", { "bg-gray-100 dark:bg-gray-700/50 text-gray-900 dark:text-white": e.active }])
		}, {
			default: Y(() => [e.icon ? (k(), a(L(e.icon), {
				key: 0,
				class: "w-4 h-4"
			})) : o("", !0), c("span", null, z(e.label), 1)]),
			_: 1
		}, 8, ["to", "class"])) : (k(), s("button", {
			key: 1,
			type: "button",
			onClick: i,
			class: S(["w-full text-left px-4 py-2 text-sm transition-colors duration-150 flex items-center space-x-2 cursor-pointer text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/30 hover:text-gray-900 dark:hover:text-white", { "bg-gray-100 dark:bg-gray-700/50 text-gray-900 dark:text-white": e.active }])
		}, [e.icon ? (k(), a(L(e.icon), {
			key: 0,
			class: "w-4 h-4"
		})) : o("", !0), c("span", null, z(e.label), 1)], 2));
	}
}), Jh = { class: "py-1" }, Yh = /* @__PURE__ */ f({
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
		let n = e, r = U(e, "modelValue"), l = N(!1), f = N(), p = i(() => n.items.find((e) => e.value === r.value)), m = i(() => `absolute w-48 max-h-60 bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl shadow-lg z-[9999] ${{
			"bottom-left": "left-0 top-full mt-2",
			"bottom-right": "right-0 top-full mt-2",
			"top-left": "left-0 bottom-full mb-2",
			"top-right": "right-0 bottom-full mb-2"
		}[n.position]}`), h = () => {
			l.value = !l.value;
		}, g = () => {
			l.value = !1;
		}, _ = (e) => {
			r.value = e.value, g();
		}, v = (e) => {
			let t = e.target;
			f.value && !f.value.contains(t) && g();
		};
		return D(() => {
			document.addEventListener("click", v);
		}), O(() => {
			document.removeEventListener("click", v);
		}), (n, r) => {
			let i = Nn, g = qh, v = lr;
			return k(), s("div", {
				class: "relative",
				ref_key: "dropdownRef",
				ref: f
			}, [d(i, {
				variant: e.triggerVariant,
				size: e.triggerSize,
				icon: H(pn),
				iconPosition: "right",
				small: e.triggerSmall,
				iconClass: H(l) ? "rotate-180 transition-transform duration-200" : "transition-transform duration-200",
				onClick: h,
				class: "bg-white dark:bg-gray-800/70 backdrop-blur-sm border-gray-300 dark:border-gray-700/70 hover:bg-gray-50 dark:hover:bg-gray-700/70 focus:ring-0 focus:border-gray-400 dark:focus:border-gray-600"
			}, {
				default: Y(() => [u(z(H(p)?.label || e.placeholder), 1)]),
				_: 1
			}, 8, [
				"variant",
				"size",
				"icon",
				"small",
				"iconClass"
			]), d(v, null, {
				default: Y(() => [H(l) ? (k(), s("div", {
					key: 0,
					class: S(H(m))
				}, [c("div", Jh, [(k(!0), s(t, null, P(e.items, (e) => (k(), a(g, {
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
				]))), 128))])], 2)) : o("", !0)]),
				_: 1
			})], 512);
		};
	}
}), Xh = { class: "flex items-center justify-between" }, Zh = { class: "text-sm text-gray-600 dark:text-gray-400 tabular-nums" }, Qh = { class: "flex items-center space-x-2" }, $h = { class: "flex items-center space-x-1" }, eg = {
	key: 1,
	class: "px-2 text-gray-600 dark:text-gray-400"
}, tg = /* @__PURE__ */ f({
	__name: "TablePagination",
	props: { internalPaginationServer: {} },
	emits: ["page-change"],
	setup(e, { emit: n }) {
		let r = e, o = n, l = i(() => {
			let e = r.internalPaginationServer.last_page, t = r.internalPaginationServer.current_page, n = [];
			if (e <= 7) for (let t = 1; t <= e; t++) n.push(t);
			else {
				let r = Math.max(1, t - 2), i = Math.min(e, t + 2);
				r > 1 && (n.push(1), r > 2 && n.push(-1));
				for (let e = r; e <= i; e++) n.push(e);
				i < e && (i < e - 1 && n.push(-1), n.push(e));
			}
			return n;
		}), f = (e) => {
			e >= 1 && e <= r.internalPaginationServer.last_page && o("page-change", e);
		};
		return (n, r) => {
			let i = Nn;
			return k(), s("div", Xh, [c("div", Zh, " Página " + z(e.internalPaginationServer.current_page) + " de " + z(e.internalPaginationServer.last_page), 1), c("div", Qh, [
				d(i, {
					disabled: e.internalPaginationServer.current_page === 1,
					variant: "outline",
					size: "auto",
					small: !0,
					icon: H(mn),
					"icon-class": "h-4 w-4",
					class: "px-2.5!",
					onClick: r[0] ||= (t) => f(e.internalPaginationServer.current_page - 1)
				}, null, 8, ["disabled", "icon"]),
				c("div", $h, [(k(!0), s(t, null, P(l.value, (n) => (k(), s(t, { key: n }, [n === -1 ? (k(), s("span", eg, "...")) : (k(), a(i, {
					key: 0,
					variant: n === e.internalPaginationServer.current_page ? "primary" : "outline",
					size: "auto",
					small: !0,
					class: "tabular-nums",
					onClick: (e) => f(n)
				}, {
					default: Y(() => [u(z(n), 1)]),
					_: 2
				}, 1032, ["variant", "onClick"]))], 64))), 128))]),
				d(i, {
					disabled: e.internalPaginationServer.current_page === e.internalPaginationServer.last_page,
					variant: "outline",
					size: "auto",
					small: !0,
					icon: H(hn),
					"icon-class": "h-4 w-4",
					class: "px-2.5!",
					onClick: r[1] ||= (t) => f(e.internalPaginationServer.current_page + 1)
				}, null, 8, ["disabled", "icon"])
			])]);
		};
	}
}), ng = { class: "bg-gray-50 dark:bg-gray-800/30" }, rg = {
	key: 0,
	style: {
		width: "120px",
		"min-width": "120px",
		"max-width": "120px"
	},
	class: "px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider overflow-hidden text-ellipsis"
}, ig = /* @__PURE__ */ f({
	__name: "TableHeader",
	props: {
		columns: {},
		showActions: { type: Boolean },
		actionsLabel: {}
	},
	setup(e) {
		return (n, r) => (k(), s("thead", ng, [c("tr", null, [(k(!0), s(t, null, P(e.columns, (e) => (k(), s("th", {
			key: e.key,
			style: w({
				width: e.width ? typeof e.width == "number" ? `${e.width}px` : e.width : "auto",
				minWidth: e.width ? typeof e.width == "number" ? `${e.width}px` : e.width : "150px",
				maxWidth: e.width ? typeof e.width == "number" ? `${e.width}px` : e.width : "none"
			}),
			class: "px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider overflow-hidden text-ellipsis"
		}, z(e.label), 5))), 128)), e.showActions ? (k(), s("th", rg, z(e.actionsLabel || "Actions"), 1)) : o("", !0)])]));
	}
}), ag = { class: "bg-white dark:bg-gray-800/20 divide-y divide-gray-200 dark:divide-gray-700 animate-pulse" }, og = {
	key: 0,
	style: {
		width: "120px",
		"min-width": "120px",
		"max-width": "120px"
	},
	class: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300 overflow-hidden text-ellipsis"
}, sg = /* @__PURE__ */ f({
	__name: "TableSkeleton",
	props: {
		rows: { default: 10 },
		columns: {},
		showActions: { type: Boolean }
	},
	setup(e) {
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
		return (r, i) => (k(), s("tbody", ag, [(k(!0), s(t, null, P(e.rows, (r) => (k(), s("tr", {
			key: r,
			class: "hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-200"
		}, [(k(!0), s(t, null, P(e.columns, (e, t) => (k(), s("td", {
			key: t,
			class: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300 overflow-hidden text-ellipsis"
		}, [c("div", {
			class: "h-4 bg-gray-200 dark:bg-gray-700 rounded",
			style: w({ width: n() })
		}, null, 4)]))), 128)), e.showActions ? (k(), s("td", og, [...i[0] ||= [c("div", { class: "h-4 bg-gray-200 dark:bg-gray-700 rounded w-16" }, null, -1)]])) : o("", !0)]))), 128))]));
	}
}), cg = N(!1);
function lg() {
	let e = g(dr);
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
		refreshData: cg,
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
			cg.value = !0, setTimeout(() => {
				cg.value = !1;
			}, 200);
		}
	};
}
//#endregion
//#region src/components/DataTable.vue?vue&type=script&setup=true&lang.ts
var ug = {
	key: 0,
	class: "mb-4 flex justify-between items-center"
}, dg = { class: "flex items-center relative" }, fg = { class: "relative w-64" }, pg = {
	key: 0,
	class: "absolute right-3 top-1/2 transform -translate-y-1/2"
}, mg = {
	key: 1,
	class: "overflow-x-auto min-w-full"
}, hg = {
	key: 1,
	class: "bg-white dark:bg-gray-800/20 divide-y divide-gray-200 dark:divide-gray-700"
}, gg = ["onClick"], _g = { key: 1 }, vg = { key: 2 }, yg = {
	key: 0,
	style: {
		width: "120px",
		"min-width": "120px",
		"max-width": "120px"
	},
	class: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300"
}, bg = {
	key: 2,
	class: "space-y-4"
}, xg = {
	key: 0,
	class: "space-y-4"
}, Sg = ["onClick"], Cg = { class: "space-y-3" }, wg = { class: "text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider w-1/3" }, Tg = { class: "text-sm text-gray-900 dark:text-gray-300 w-2/3 text-right tabular-nums" }, Eg = { key: 1 }, Dg = { key: 2 }, Og = {
	key: 0,
	class: "flex justify-between items-center pt-3 border-t border-gray-200 dark:border-gray-700"
}, kg = { class: "text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" }, Ag = { class: "flex space-x-2" }, jg = {
	key: 3,
	class: "text-center py-12 text-danger-600 dark:text-danger-400"
}, Mg = { class: "text-lg" }, Ng = /* @__PURE__ */ f({
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
	setup(e, { emit: n }) {
		let r = n, { refreshData: l, isLoading: f, error: p, internalData: m, internalPaginationServer: h, fetchData: g } = lg(), v = N(""), y = N(!1), b = N("10"), x = N(1), C = [
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
		], T = e, E = ee(), A = i(() => !!E.actions), j = N(!1), M = null, I = () => {
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
		}, R = i(() => {
			let e = T.columns.reduce((e, t) => {
				if (t.width) {
					let n = typeof t.width == "number" ? t.width : parseInt(t.width.toString());
					return e + (isNaN(n) ? 0 : n);
				}
				return e;
			}, 0), t = T.columns.filter((e) => !e.width).length * 150, n = A.value ? 120 : 0;
			return e === 0 && !A.value ? "100%" : `max(${e + t + n}px, 100%)`;
		}), B = i(() => T.columns.some((e) => e.width)), V = async () => {
			T.url && (await g(T.url, x.value, b.value, v.value, T.searchBy), x.value = h.value.current_page, r("pagination-loaded", h.value));
		};
		J(() => T.url, () => {
			T.url && V();
		}, { immediate: !0 }), J(() => [b.value, x.value], () => {
			T.url && V();
		}), le(() => v.value, async () => {
			T.url && T.searchBy && (x.value = 1, y.value = !0, await V(), y.value = !1);
		}, { debounce: 500 }), J(() => l.value, (e) => {
			e && T.url && V();
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
		return (n, r) => {
			let i = Yh, l = Hh, g = Nn, x = Kh;
			return k(), s("div", null, [
				e.showSearch ? (k(), s("div", ug, [c("div", dg, [d(i, {
					modelValue: H(b),
					"onUpdate:modelValue": r[0] ||= (e) => _(b) ? b.value = e : null,
					items: C,
					"trigger-small": !0,
					class: "w-20"
				}, null, 8, ["modelValue"])]), c("div", fg, [d(l, {
					modelValue: H(v),
					"onUpdate:modelValue": r[1] ||= (e) => _(v) ? v.value = e : null,
					label: "",
					id: "table-search",
					name: "table-search",
					placeholder: "Buscar...",
					"left-icon": H(wn),
					small: "",
					disabled: H(y)
				}, null, 8, [
					"modelValue",
					"left-icon",
					"disabled"
				]), H(y) ? (k(), s("div", pg, [...r[2] ||= [c("div", { class: "animate-spin rounded-full h-4 w-4 border-b-2 border-primary-500" }, null, -1)]])) : o("", !0)])])) : o("", !0),
				H(j) ? (k(), s("div", bg, [H(f) ? (k(), s("div", xg, [(k(), s(t, null, P(5, (e) => c("div", {
					key: e,
					class: "bg-gray-50 dark:bg-gray-800/20 rounded-lg p-4 animate-pulse"
				}, [...r[3] ||= [c("div", { class: "space-y-3" }, [
					c("div", { class: "h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" }),
					c("div", { class: "h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" }),
					c("div", { class: "h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3" })
				], -1)]])), 64))])) : (k(!0), s(t, { key: 1 }, P(H(m), (r, i) => (k(), s("div", {
					key: i,
					class: "bg-white dark:bg-gray-800/20 rounded-lg p-4 border border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-200",
					onClick: (e) => W(r)
				}, [c("div", Cg, [(k(!0), s(t, null, P(T.columns, (e, t) => (k(), s("div", {
					key: e.key,
					class: S(["flex justify-between items-start", t < T.columns.length - 1 ? "pb-3 border-b border-gray-200 dark:border-gray-700" : ""])
				}, [c("span", wg, z(e.label), 1), c("div", Tg, [e.slot ? F(n.$slots, e.slot, {
					row: r,
					value: U(r, e)
				}, void 0, void 0, 0) : e.format ? (k(), s("span", Eg, z(e.format(r)), 1)) : (k(), s("span", Dg, z(U(r, e)), 1))])], 2))), 128)), H(A) ? (k(), s("div", Og, [c("span", kg, z(e.actionsLabel || "Actions"), 1), c("div", Ag, [F(n.$slots, "actions", { row: r })])])) : o("", !0)])], 8, Sg))), 128))])) : (k(), s("div", mg, [c("table", {
					class: "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
					style: w({
						width: H(R),
						tableLayout: H(B) ? "fixed" : "auto"
					})
				}, [d(ig, {
					columns: T.columns,
					"show-actions": H(A),
					"actions-label": e.actionsLabel
				}, null, 8, [
					"columns",
					"show-actions",
					"actions-label"
				]), H(f) ? (k(), a(sg, {
					key: 0,
					rows: 10,
					columns: T.columns,
					"show-actions": H(A)
				}, null, 8, ["columns", "show-actions"])) : (k(), s("tbody", hg, [(k(!0), s(t, null, P(H(m), (e, r) => (k(), s("tr", {
					key: r,
					class: "hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-200 cursor-pointer",
					onClick: (t) => W(e)
				}, [(k(!0), s(t, null, P(T.columns, (t) => (k(), s("td", {
					key: t.key,
					style: w({
						width: t.width ? typeof t.width == "number" ? `${t.width}px` : t.width : "auto",
						minWidth: t.width ? typeof t.width == "number" ? `${t.width}px` : t.width : "150px",
						maxWidth: t.width ? typeof t.width == "number" ? `${t.width}px` : t.width : "none"
					}),
					class: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300 overflow-hidden text-ellipsis tabular-nums"
				}, [t.slot ? F(n.$slots, t.slot, {
					row: e,
					value: U(e, t)
				}, void 0, void 0, 0) : t.format ? (k(), s("span", _g, z(t.format(e)), 1)) : (k(), s("span", vg, z(U(e, t)), 1))], 4))), 128)), H(A) ? (k(), s("td", yg, [F(n.$slots, "actions", { row: e })])) : o("", !0)], 8, gg))), 128))]))], 4)])),
				H(p) ? (k(), s("div", jg, [c("p", Mg, z(H(p)), 1), d(g, {
					onClick: V,
					class: "mt-4",
					variant: "secondary",
					size: "small"
				}, {
					default: Y(() => [...r[4] ||= [u(" Reintentar ", -1)]]),
					_: 1
				})])) : o("", !0),
				d(x, {
					"internal-pagination-server": H(h),
					"total-items": H(m).length
				}, null, 8, ["internal-pagination-server", "total-items"]),
				d(tg, {
					"internal-pagination-server": H(h),
					onPageChange: L
				}, null, 8, ["internal-pagination-server"])
			]);
		};
	}
}), Pg = ["onClick"], Fg = /* @__PURE__ */ f({
	__name: "DropdownMenu",
	props: {
		items: {},
		ariaLabel: { default: "Opciones" },
		position: { default: "bottom-right" },
		buttonVariant: { default: "outline" },
		icon: { default: () => _n }
	},
	emits: ["select"],
	setup(e, { emit: n }) {
		let r = n, i = N(!1), l = N(null);
		ae(l, () => {
			i.value = !1;
		});
		function u(e) {
			r("select", e), i.value = !1;
		}
		return (n, r) => {
			let f = Fn, p = lr;
			return k(), s("div", {
				ref_key: "menuRef",
				ref: l,
				class: S(["relative", { "z-[9999]": H(i) }])
			}, [d(f, {
				icon: e.icon,
				variant: e.buttonVariant,
				"aria-label": e.ariaLabel,
				onClick: r[0] ||= (e) => i.value = !H(i)
			}, null, 8, [
				"icon",
				"variant",
				"aria-label"
			]), d(p, null, {
				default: Y(() => [H(i) ? (k(), s("div", {
					key: 0,
					class: S(["absolute w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-10 py-1", e.position === "bottom-right" ? "right-0 top-full mt-1" : "left-0 top-full mt-1"])
				}, [(k(!0), s(t, null, P(e.items, (e) => (k(), s("button", {
					key: e.action,
					type: "button",
					class: S(["w-full text-left px-4 py-2 text-sm transition-colors duration-150 flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700/30 cursor-pointer", [e.variant === "danger" ? "text-danger-600 dark:text-danger-400" : e.variant === "success" ? "text-success-600 dark:text-success-400" : "text-gray-700 dark:text-gray-200"]]),
					onClick: (t) => u(e)
				}, [e.icon ? (k(), a(L(e.icon), {
					key: 0,
					class: "w-4 h-4"
				})) : o("", !0), c("span", null, z(e.label), 1)], 10, Pg))), 128))], 2)) : o("", !0)]),
				_: 1
			})], 2);
		};
	}
}), Ig = ["for"], Lg = { class: "relative" }, Rg = [
	"id",
	"name",
	"onChange",
	"onBlur",
	"value"
], zg = {
	key: 0,
	value: "",
	class: "bg-white dark:bg-gray-500 text-gray-600 dark:text-white",
	disabled: ""
}, Bg = ["value", "selected"], Vg = {
	key: 0,
	class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
}, Hg = /* @__PURE__ */ f({
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
		let n = e, { placeholder: r = "Selecciona una opción" } = n, i = U(e, "modelValue"), l = (e, t) => {
			let r = e.target, a = n.options.find((e) => String(e.value) === r.value), o = r.value === "" ? null : a ? a.value : r.value;
			i.value = o, t(o);
		};
		return (n, u) => (k(), s("div", null, [
			e.label && !e.small ? (k(), s("label", {
				key: 0,
				for: e.id,
				class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
			}, z(e.label), 9, Ig)) : o("", !0),
			d(H(ja), {
				name: e.name,
				rules: e.rules,
				modelValue: i.value,
				"onUpdate:modelValue": u[0] ||= (e) => i.value = e
			}, {
				default: Y(({ field: n, value: i, errorMessage: u, handleChange: d }) => [c("div", Lg, [c("select", {
					id: e.id,
					name: n.name,
					onChange: (e) => l(e, d),
					onBlur: n.onBlur,
					value: i,
					class: S([
						"w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
						e.leftIcon ? "pl-10" : "pl-4",
						"pr-4",
						u ? "border-danger-500 dark:border-danger-500" : "",
						e.small ? "py-2" : "py-3"
					])
				}, [H(r) ? (k(), s("option", zg, z(H(r)), 1)) : o("", !0), (k(!0), s(t, null, P(e.options, (e) => (k(), s("option", {
					key: e.value,
					value: e.value,
					selected: i != null && String(i) === String(e.value),
					class: "bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
				}, z(e.label), 9, Bg))), 128))], 42, Rg), e.leftIcon ? (k(), s("div", Vg, [(k(), a(L(e.leftIcon), { class: S([e.small ? "h-4 w-4" : "h-5 w-5", "text-gray-400 dark:text-gray-400"]) }, null, 8, ["class"]))])) : o("", !0)])]),
				_: 1
			}, 8, [
				"name",
				"rules",
				"modelValue"
			]),
			d(H(Va), {
				name: e.name,
				class: "mt-1 text-sm text-danger-600 dark:text-danger-400"
			}, null, 8, ["name"])
		]));
	}
}), Ug = ["for"], Wg = { class: "relative" }, Gg = [
	"id",
	"value",
	"onInput",
	"placeholder",
	"rows",
	"maxlength"
], Kg = { class: "mt-1 flex items-start justify-between gap-2" }, qg = /* @__PURE__ */ f({
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
		let t = U(e, "modelValue"), n = i(() => (t.value ?? "").length);
		return (r, i) => (k(), s("div", null, [e.label && !e.small ? (k(), s("label", {
			key: 0,
			for: e.id,
			class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
		}, z(e.label), 9, Ug)) : o("", !0), d(H(ja), {
			name: e.name,
			rules: e.rules
		}, {
			default: Y(({ field: r, errorMessage: i }) => [c("div", null, [c("div", Wg, [c("textarea", b({ id: e.id }, r, {
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
			}), null, 16, Gg)]), c("div", Kg, [d(H(Va), {
				name: e.name,
				class: "text-sm text-danger-600 dark:text-danger-400"
			}, null, 8, ["name"]), e.maxLength ? (k(), s("span", {
				key: 0,
				class: S(["text-xs text-gray-500 dark:text-gray-400 ml-auto shrink-0", n.value >= e.maxLength ? "text-danger-600 dark:text-danger-400" : ""])
			}, z(n.value) + " / " + z(e.maxLength), 3)) : o("", !0)])])]),
			_: 1
		}, 8, ["name", "rules"])]));
	}
}), Jg = /* @__PURE__ */ f({
	__name: "HelpTooltip",
	props: { tooltip: {} },
	setup(e) {
		let t = N(null), n = N(null), r = N(0), i = () => {
			if (!t.value || !n.value) return;
			let e = t.value.getBoundingClientRect(), i = e.left + e.width / 2, a = i + 96 - window.innerWidth + 8, o = -(i - 96 - 8);
			a > 0 ? r.value = -a : o > 0 ? r.value = o : r.value = 0;
		};
		return (a, o) => (k(), s("div", {
			ref_key: "triggerRef",
			ref: t,
			class: "relative group",
			onMouseenter: i
		}, [o[1] ||= c("span", { class: "inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-[10px] font-bold cursor-help leading-none" }, "?", -1), c("div", {
			ref_key: "tooltipRef",
			ref: n,
			class: "absolute bottom-full left-1/2 mb-2 px-3 py-2 text-xs text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-48 text-center z-50 pointer-events-none",
			style: w({ transform: `translateX(calc(-50% + ${H(r)}px))` })
		}, [u(z(e.tooltip) + " ", 1), o[0] ||= c("div", { class: "absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700" }, null, -1)], 4)], 544));
	}
}), Yg = /* @__PURE__ */ f({
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
		let t = e, n = i(() => t.to !== void 0), r = i(() => n.value ? re : "button"), o = i(() => {
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
		return (t, n) => (k(), a(L(r.value), {
			to: e.to,
			class: S([
				"w-8 h-8 flex items-center justify-center transition-colors cursor-pointer",
				e.rounded ? "rounded-full" : "rounded-lg",
				o.value
			])
		}, {
			default: Y(() => [F(t.$slots, "default", {}, () => [(k(), a(L(e.icon), { class: "w-4 h-4" }))])]),
			_: 3
		}, 8, ["to", "class"]));
	}
}), Xg = ["src"], Zg = /*#__PURE__*/ kn(/* @__PURE__ */ f({
	__name: "ImageLightbox",
	props: {
		open: { type: Boolean },
		src: {}
	},
	emits: ["close"],
	setup(e, { emit: t }) {
		let i = e, c = t;
		function l() {
			c("close");
		}
		function u(e) {
			i.open && e.key === "Escape" && l();
		}
		return D(() => {
			document.addEventListener("keydown", u);
		}), O(() => {
			document.removeEventListener("keydown", u);
		}), (t, i) => (k(), a(n, { to: "body" }, [d(r, { name: "lightbox-fade" }, {
			default: Y(() => [e.open ? (k(), s("div", {
				key: 0,
				class: "fixed inset-0 z-[110] flex cursor-zoom-out items-center justify-center bg-black/90 p-4 sm:p-8",
				onClick: l
			}, [e.src ? (k(), s("img", {
				key: 0,
				src: e.src,
				alt: "Vista ampliada",
				class: "max-h-full max-w-full rounded-lg object-contain shadow-2xl"
			}, null, 8, Xg)) : o("", !0)])) : o("", !0)]),
			_: 1
		})]));
	}
}), [["__scopeId", "data-v-1bea9514"]]), Qg = { class: "text-base font-medium text-gray-600 dark:text-gray-400 block mb-1" }, $g = { class: "text-gray-900 dark:text-white text-base w-fit" }, e_ = /* @__PURE__ */ f({
	__name: "InfoItem",
	props: {
		label: {},
		column: {
			type: Boolean,
			default: !0
		}
	},
	setup(e) {
		let t = e, n = i(() => t.column ? "" : "flex items-center space-x-2");
		return (t, r) => (k(), s("div", { class: S(H(n)) }, [c("span", Qg, z(e.label), 1), c("div", $g, [F(t.$slots, "default")])], 2));
	}
}), t_ = { class: "bg-white border-b-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700 px-6 h-20 flex items-center" }, n_ = { class: "flex items-center justify-between w-full" }, r_ = { class: "flex gap-4" }, i_ = { class: "flex items-center lg:hidden" }, a_ = { class: "flex items-center space-x-4" }, o_ = /* @__PURE__ */ f({
	__name: "Navbar",
	emits: ["toggle-mobile-sidebar"],
	setup(e) {
		return (e, t) => (k(), s("nav", t_, [c("div", n_, [c("div", r_, [c("div", i_, [c("button", {
			onClick: t[0] ||= (t) => e.$emit("toggle-mobile-sidebar"),
			class: "w-10 h-10 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
		}, [d(H(Sn), { class: "w-5 h-5 text-gray-900 dark:text-white" })])])]), c("div", a_, [F(e.$slots, "right")])])]));
	}
}), s_ = /* @__PURE__ */ f({
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
		let t = e, n = ie(), r = i(() => n.path === t.to);
		return (t, n) => {
			let i = I("RouterLink");
			return k(), a(i, {
				to: e.to,
				"data-active": r.value,
				class: S(["group relative flex items-center gap-3 py-2.5 px-3 rounded-xl w-full transition-all duration-200 focus:outline-none", [r.value ? e.showActiveBackground ? "bg-primary-600 text-white dark:bg-primary-500" : e.useExternalIndicator ? "bg-primary-600 text-white dark:bg-primary-500 lg:bg-transparent lg:dark:bg-transparent" : "text-white" : "text-gray-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800/50"]])
			}, {
				default: Y(() => [(k(), a(L(e.icon), { class: S(["w-5 h-5 shrink-0 transition-colors duration-200", [r.value ? "text-white" : "text-gray-400 group-hover:text-gray-600 dark:text-gray-200 dark:group-hover:text-gray-100"]]) }, null, 8, ["class"])), c("div", { class: S(["overflow-hidden transition-all duration-300 flex items-center gap-2", e.isCollapsed ? "w-0" : e.textFitContent ? "w-fit" : "w-48"]) }, [
					c("span", { class: S(["whitespace-nowrap", r.value ? "font-medium" : "font-normal"]) }, z(e.name), 3),
					e.hasExternalIcon ? (k(), a(H(un), {
						key: 0,
						class: "w-3.5 h-3.5 shrink-0 opacity-50"
					})) : o("", !0),
					e.hasBadge ? (k(), s("span", {
						key: 1,
						class: S(["text-[10px] font-medium px-1.5 py-0.5 rounded-full shrink-0 tabular-nums", [r.value ? "bg-white/20 text-white" : "bg-primary-600 text-white dark:bg-primary-500"]])
					}, z(e.badgeText), 3)) : o("", !0)
				], 2)]),
				_: 1
			}, 8, [
				"to",
				"data-active",
				"class"
			]);
		};
	}
}), c_ = se("sidebarCollapsed", !1);
function l_() {
	return {
		isCollapsed: c_,
		toggleCollapse: () => {
			c_.value = !c_.value;
		},
		expand: () => {
			c_.value = !1;
		}
	};
}
//#endregion
//#region src/composables/useActiveIndicator.ts
function u_(e) {
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
	}), J(() => t.path, () => {
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
var d_ = { class: "space-y-0.5 relative" }, f_ = ["onClick"], p_ = { class: "overflow-hidden" }, m_ = { class: "pl-6 space-y-0.5 pt-1 pb-1" }, h_ = /* @__PURE__ */ f({
	__name: "SidebarList",
	props: {
		isCollapsed: { type: Boolean },
		menuItems: {}
	},
	setup(e) {
		let n = e, r = ie(), { expand: i } = l_(), o = W("navRef"), { isInitialized: l, isAnimating: u, activeIndicatorStyle: f, trackAnimation: p } = u_(o), m = N(/* @__PURE__ */ new Set()), h = N(/* @__PURE__ */ new Set()), g = (e) => e.children?.some((e) => r.path === e.route || r.path.startsWith(e.route + "/")) ?? !1, _ = (e) => h.value.has(e.route) ? !1 : m.value.has(e.route) || g(e), v = (e) => {
			if (n.isCollapsed) {
				i(), m.value.add(e), h.value.delete(e), p();
				return;
			}
			_({ route: e }) ? (m.value.delete(e), h.value.add(e)) : (m.value.add(e), h.value.delete(e)), p();
		};
		return J(() => r.path, () => {
			h.value.clear();
		}), J(() => n.isCollapsed, () => {
			p();
		}), (r, i) => {
			let p = s_;
			return k(), s("nav", {
				ref_key: "navRef",
				ref: o,
				class: "flex-1 px-3 py-2 relative"
			}, [c("div", {
				class: S(["absolute left-3 right-3 bg-primary-600 dark:bg-primary-500 rounded-xl", H(l) ? H(u) ? "transition-opacity duration-150 ease-out" : "transition-all duration-300 ease-out" : ""]),
				style: w({
					top: H(f).top,
					height: H(f).height,
					opacity: H(f).opacity
				})
			}, null, 6), c("ul", d_, [(k(!0), s(t, null, P(n.menuItems, (n) => (k(), s("li", { key: n.route }, [n.children?.length ? (k(), s(t, { key: 0 }, [c("button", {
				class: S(["group relative flex items-center gap-3 py-2.5 px-3 rounded-xl w-full transition-all duration-200 outline-none", [g(n) ? "text-primary-500 dark:text-primary-400" : "text-gray-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800/50"]]),
				onClick: (e) => v(n.route)
			}, [(k(), a(L(n.icon), { class: S(["w-5 h-5 shrink-0 transition-colors duration-200", [g(n) ? "text-primary-500 dark:text-primary-400" : "text-gray-400 group-hover:text-gray-600 dark:text-gray-200 dark:group-hover:text-gray-100"]]) }, null, 8, ["class"])), c("div", { class: S(["overflow-hidden transition-all duration-300 flex items-center justify-between flex-1", e.isCollapsed ? "w-0" : "w-48"]) }, [c("span", { class: S([g(n) ? "font-medium" : "font-normal", "whitespace-nowrap"]) }, z(n.name), 3), d(H(pn), { class: S(["w-4 h-4 shrink-0 transition-transform duration-300 ease-in-out", _(n) ? "rotate-180" : ""]) }, null, 8, ["class"])], 2)], 10, f_), c("div", { class: S(["grid transition-all duration-300 ease-in-out", _(n) && !e.isCollapsed ? "grid-rows-[1fr]" : "grid-rows-[0fr]"]) }, [c("div", p_, [c("ul", m_, [(k(!0), s(t, null, P(n.children, (t) => (k(), s("li", { key: t.route }, [d(p, {
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
			])]))), 128))])])], 2)], 64)) : (k(), a(p, {
				key: 1,
				to: n.route,
				name: n.name,
				icon: n.icon,
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
}), g_ = N(!1), __ = N(!1), v_ = N(!1);
function y_() {
	let e = () => {
		let e = window.innerWidth;
		g_.value = e < 1024, __.value = e >= 768 && e < 1024, v_.value = e >= 1024;
	};
	return D(() => {
		e(), window.addEventListener("resize", e);
	}), O(() => {
		window.removeEventListener("resize", e);
	}), {
		isMobile: g_,
		isTablet: __,
		isDesktop: v_,
		checkScreenSize: e
	};
}
//#endregion
//#region src/components/Sidebar.vue?vue&type=script&setup=true&lang.ts
var b_ = { class: "p-4 border-b-2 border-gray-200 dark:border-gray-700 h-20 flex items-center" }, x_ = {
	key: 0,
	class: "flex items-center space-x-2"
}, S_ = { class: "w-8 h-8" }, C_ = ["src", "alt"], w_ = { class: "overflow-hidden transition-all duration-300 w-auto" }, T_ = { class: "text-lg font-semibold whitespace-nowrap text-gray-900 dark:text-white" }, E_ = { class: "text-sm whitespace-nowrap text-gray-500 dark:text-gray-400" }, D_ = { class: "flex-1 overflow-y-auto" }, O_ = {
	key: 0,
	class: "px-4 pb-1 text-left text-[10px] text-gray-400 dark:text-gray-500"
}, k_ = { class: "p-4 border-t-2 border-gray-200 dark:border-gray-700" }, A_ = {
	key: 0,
	class: "text-sm text-gray-900 dark:text-white whitespace-nowrap"
}, j_ = /* @__PURE__ */ f({
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
		let n = e, { logo: r, title: l, subtitle: u, version: f, menuItems: p } = n, m = t, { isDarkMode: h, toggleTheme: g } = xh(), _ = i(() => h.value ? En : Cn), v = i(() => n.isCollapsed ? "w-20" : "lg:w-64 xl:w-72"), y = () => {
			m("toggle-collapse");
		};
		return (e, t) => {
			let i = h_;
			return k(), s("aside", { class: S(["h-screen flex flex-col border-r-2 transition-all duration-300 bg-white text-gray-900 border-gray-200 dark:bg-gray-900 dark:text-white dark:border-gray-700", v.value]) }, [
				c("div", b_, [c("div", { class: S(["flex items-center w-full", n.isCollapsed ? "justify-center" : "justify-between"]) }, [n.isCollapsed ? o("", !0) : (k(), s("div", x_, [c("div", S_, [c("img", {
					src: H(r),
					alt: H(l),
					class: "w-full h-full object-contain"
				}, null, 8, C_)]), c("div", w_, [c("h1", T_, z(H(l)), 1), c("p", E_, z(H(u)), 1)])])), H(g_) ? (k(), s("button", {
					key: 1,
					onClick: t[0] ||= (t) => e.$emit("close"),
					class: "w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
				}, [d(H(Dn), { class: "w-4 h-4 text-gray-600 dark:text-gray-400" })])) : n.isCollapsed ? (k(), s("button", {
					key: 3,
					onClick: y,
					class: "w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
				}, [d(H(hn), { class: "w-4 h-4 text-gray-600 dark:text-gray-400" })])) : (k(), s("button", {
					key: 2,
					onClick: y,
					class: "w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ml-auto bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
				}, [d(H(mn), { class: "w-4 h-4 text-gray-600 dark:text-gray-400" })]))], 2)]),
				c("div", D_, [d(i, {
					"is-collapsed": n.isCollapsed,
					"menu-items": H(p)
				}, null, 8, ["is-collapsed", "menu-items"])]),
				n.isCollapsed ? o("", !0) : (k(), s("p", O_, " v" + z(H(f)), 1)),
				c("div", k_, [c("button", {
					onClick: t[1] ||= (...e) => H(g) && H(g)(...e),
					class: S(["w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700", n.isCollapsed ? "justify-center" : ""]),
					"aria-label": "Toggle theme"
				}, [(k(), a(L(_.value), { class: "w-5 h-5 text-gray-900 dark:text-white flex-shrink-0" })), n.isCollapsed ? o("", !0) : (k(), s("span", A_, z(H(h) ? "Modo claro" : "Modo oscuro"), 1))], 2)])
			], 2);
		};
	}
}), M_ = /* @__PURE__ */ f({
	__name: "SidebarNav",
	props: { items: {} },
	setup(e) {
		let n = W("navRef"), { isInitialized: r, activeIndicatorStyle: i } = u_(n);
		return (o, l) => {
			let u = s_;
			return k(), s("nav", {
				ref_key: "navRef",
				ref: n,
				class: "relative space-y-2 flex gap-4 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-hidden"
			}, [c("div", {
				class: S(["absolute left-0 right-0 bg-primary-600 dark:bg-primary-500 rounded-xl hidden lg:block", H(r) ? "transition-all duration-300 ease-out" : ""]),
				style: w({
					top: H(i).top,
					height: H(i).height,
					opacity: H(i).opacity
				})
			}, null, 6), (k(!0), s(t, null, P(e.items, (e) => (k(), a(u, {
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
}), N_ = 3e3, P_ = /* @__PURE__ */ f({
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
		let n = e, i = t, o = N(!1);
		D(() => {
			setTimeout(() => {
				o.value = !0;
			}, 50);
		}), setTimeout(() => {
			o.value = !1, setTimeout(() => {
				i("expired");
			}, 300);
		}, N_);
		let s = (e) => {
			e && (e.preventDefault(), e.stopPropagation()), o.value = !1, setTimeout(() => {
				i("cancel", n.message);
			}, 300);
		};
		return (t, n) => (k(), a(r, {
			"enter-active-class": "animate-fade-in-up-fast",
			"leave-active-class": "animate-fade-out"
		}, {
			default: Y(() => [ne(c("div", { class: S(["min-h-12 mb-4 snack-content flex items-center justify-between rounded-lg pointer-events-auto", [e.error ? "border border-danger-200 dark:border-danger-800 bg-danger-50 dark:bg-danger-900" : "border border-success-200 dark:border-success-800 bg-success-50 dark:bg-success-900"]]) }, [c("div", { class: S(["p-4 flex-1", [e.error ? "text-danger-700 dark:text-danger-100" : "text-success-700 dark:text-success-100"]]) }, z(e.message.text), 3), c("div", null, [c("button", {
				class: S(["px-3 py-2 text-center text-sm uppercase font-semibold cursor-pointer hover:opacity-70 transition-opacity", [e.error ? "text-danger-700 dark:text-danger-100" : "text-success-700 dark:text-success-100"]]),
				onClick: Z(s, ["stop"])
			}, [d(H(Dn), {
				name: "close",
				class: "w-4 h-4"
			})], 2)])], 2), [[K, H(o)]])]),
			_: 1
		}));
	}
}), F_ = N([]);
function I_() {
	return {
		messages: F_,
		pushMessage: (e, t = !1) => {
			F_.value.push({
				ts: Date.now(),
				text: e,
				error: t
			});
		},
		shiftMessage: () => {
			F_.value.shift();
		}
	};
}
//#endregion
//#region src/components/Snack/SnackBar.vue?vue&type=script&setup=true&lang.ts
var L_ = { class: "fixed top-0 right-0 flex flex-col-reverse p-4 overflow-hidden z-50 w-80" }, R_ = /* @__PURE__ */ f({
	__name: "SnackBar",
	props: { active: Boolean },
	setup(e) {
		let { messages: n, shiftMessage: r } = I_(), i = () => {
			r();
		};
		return (e, r) => {
			let o = P_;
			return k(), s("div", L_, [(k(!0), s(t, null, P(H(n), (e) => (k(), a(o, {
				key: e.ts,
				active: !0,
				message: e,
				error: e.error,
				onExpired: i
			}, null, 8, ["message", "error"]))), 128))]);
		};
	}
}), z_ = { class: "flex items-center gap-1.5" }, B_ = { class: "text-sm font-medium text-gray-600 dark:text-gray-300" }, V_ = {
	key: 0,
	class: "text-2xl font-bold text-gray-400 dark:text-gray-500 mt-1"
}, H_ = {
	key: 1,
	class: "text-2xl font-bold text-gray-900 dark:text-white mt-1 tabular-nums"
}, U_ = {
	key: 0,
	class: "mt-4 flex items-center"
}, W_ = {
	key: 1,
	class: "text-sm text-gray-500 dark:text-gray-400 ml-1"
}, G_ = /* @__PURE__ */ f({
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
		let t = i(() => e.value === null), n = i(() => {
			switch (e.changeType) {
				case "positive": return "text-success-600 dark:text-success-400";
				case "negative": return "text-danger-600 dark:text-danger-400";
				case "neutral": return "text-warning-600 dark:text-warning-400";
				case "info": return "text-secondary-600 dark:text-secondary-400";
				default: return "text-gray-600 dark:text-gray-400";
			}
		});
		return (r, i) => {
			let l = Jg, u = Kn;
			return k(), a(u, null, {
				default: Y(() => [c("div", null, [c("div", z_, [c("p", B_, z(e.title), 1), e.help ? (k(), a(l, {
					key: 0,
					tooltip: e.help
				}, null, 8, ["tooltip"])) : o("", !0)]), H(t) ? (k(), s("p", V_, "Sin datos")) : (k(), s("p", H_, z(e.value), 1))]), e.change !== void 0 || e.description ? (k(), s("div", U_, [e.change === void 0 ? o("", !0) : (k(), s("span", {
					key: 0,
					class: S(["text-sm font-medium tabular-nums", H(n)])
				}, z(e.change), 3)), e.description ? (k(), s("span", W_, z(e.description), 1)) : o("", !0)])) : o("", !0)]),
				_: 1
			});
		};
	}
}), K_ = {
	key: 0,
	class: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
}, q_ = { class: "flex items-center space-x-3" }, J_ = ["disabled"], Y_ = {
	key: 0,
	class: "text-sm text-gray-700 dark:text-gray-300"
}, X_ = /* @__PURE__ */ f({
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
		let t = U(e, "modelValue"), n = () => {
			e.disabled || (t.value = !t.value);
		};
		return (r, i) => (k(), s("div", null, [e.label ? (k(), s("label", K_, z(e.label), 1)) : o("", !0), c("div", q_, [c("button", {
			type: "button",
			onClick: n,
			disabled: e.disabled,
			class: S(["relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed", t.value ? "bg-primary-600" : "bg-gray-300 dark:bg-gray-600"])
		}, [c("span", { class: S(["pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", t.value ? "translate-x-5" : "translate-x-0"]) }, null, 2)], 10, J_), e.showLabel ? (k(), s("span", Y_, z(t.value ? e.trueLabel : e.falseLabel), 1)) : o("", !0)])]));
	}
}), Z_ = { class: "space-y-4" }, Q_ = { class: "h-16 flex items-center transition-transform duration-300" }, $_ = { class: "flex space-x-2 bg-gray-200 dark:bg-gray-800 rounded-lg py-2 px-3 w-full relative" }, ev = ["onClick"], tv = { class: "tab-content" }, nv = /*#__PURE__*/ kn(/* @__PURE__ */ f({
	__name: "Tabs",
	props: {
		tabs: {},
		modelValue: { default: 0 }
	},
	emits: ["update:modelValue", "change"],
	setup(e, { emit: n }) {
		let a = e, o = n, l = i({
			get: () => a.modelValue,
			set: (e) => o("update:modelValue", e)
		});
		function u(e) {
			l.value !== e && (l.value = e, o("change", a.tabs[e], e));
		}
		return (n, i) => (k(), s("div", Z_, [c("div", Q_, [c("div", $_, [c("div", {
			class: "absolute top-1 bottom-1 bg-white dark:bg-gray-700 rounded-lg transition-all duration-300 ease-in-out shadow-sm",
			style: w({
				left: `${1 + l.value * ((98 - 98 / e.tabs.length) / (e.tabs.length - 1))}%`,
				width: `${98 / e.tabs.length}%`
			})
		}, null, 4), (k(!0), s(t, null, P(e.tabs, (e, t) => (k(), s("button", {
			key: e.id,
			class: S(["relative flex-1 py-2 px-3 text-sm font-medium transition-colors duration-200 z-10", [l.value === t ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"]]),
			onClick: (e) => u(t)
		}, z(e.label), 11, ev))), 128))])]), c("div", tv, [d(r, {
			name: "tab-content",
			mode: "out-in",
			appear: ""
		}, {
			default: Y(() => [(k(), s("div", {
				key: l.value,
				class: "tab-panel"
			}, [F(n.$slots, `tab-${l.value}`, {
				activeTab: e.tabs[l.value],
				activeTabIndex: l.value
			}, () => [i[0] ||= c("div", { class: "text-gray-500 dark:text-gray-400 text-center py-8" }, " No content available for this tab ", -1)], !0)]))]),
			_: 3
		})])]));
	}
}), [["__scopeId", "data-v-220a3b65"]]), rv = ["src", "alt"], iv = /* @__PURE__ */ f({
	__name: "UserAvatar",
	props: {
		imageUrl: { default: null },
		name: {},
		size: { default: "md" }
	},
	setup(e) {
		let t = i(() => {
			let t = e.name.trim().split(/\s+/).filter(Boolean);
			return t.length === 0 ? "?" : t.length >= 2 ? `${t[0].charAt(0)}${t[1].charAt(0)}`.toUpperCase() : t[0].charAt(0).toUpperCase();
		}), n = i(() => {
			switch (e.size) {
				case "sm": return "w-8 h-8";
				case "lg": return "w-12 h-12";
				case "xl": return "w-16 h-16";
				default: return "w-10 h-10";
			}
		}), r = i(() => {
			switch (e.size) {
				case "sm": return "text-xs";
				case "lg": return "text-base";
				case "xl": return "text-lg";
				default: return "text-sm";
			}
		});
		return (i, a) => (k(), s("div", { class: S([H(n), "rounded-full shrink-0 overflow-hidden"]) }, [e.imageUrl ? (k(), s("img", {
			key: 0,
			src: e.imageUrl,
			alt: e.name,
			class: "w-full h-full object-cover"
		}, null, 8, rv)) : (k(), s("div", {
			key: 1,
			class: S(["w-full h-full flex items-center justify-center bg-linear-to-br from-primary-500 to-secondary-500 text-white font-semibold", H(r)])
		}, z(H(t)), 3))], 2));
	}
}), av = { class: "flex -space-x-2" }, ov = /* @__PURE__ */ f({
	__name: "UserAvatars",
	props: { users: {} },
	setup(e) {
		return (n, r) => (k(), s("div", av, [(k(!0), s(t, null, P(e.users, (t, n) => (k(), s("div", {
			key: n,
			class: "relative"
		}, [c("div", {
			class: "w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white text-xs font-medium border-2 border-white",
			style: w({ zIndex: e.users.length - n })
		}, z(t.initials), 5)]))), 128))]));
	}
}), sv = { class: "flex items-center gap-2 sm:gap-3" }, cv = {
	key: 0,
	class: "absolute -top-1 -right-1 bg-danger-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium tabular-nums"
}, lv = {
	key: 0,
	class: "absolute right-0 top-14 w-80 bg-white dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-lg shadow-lg z-50"
}, uv = { class: "max-h-96 overflow-y-auto" }, dv = {
	key: 0,
	class: "py-2 px-4 border-t border-gray-200 dark:border-gray-700 text-center"
}, fv = { class: "w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center sm:mr-3 overflow-hidden" }, pv = { class: "text-gray-900 dark:text-white text-lg" }, mv = {
	class: "hidden sm:flex items-center",
	style: { gap: "0" }
}, hv = { class: "mr-3" }, gv = { class: "text-gray-900 dark:text-white font-medium" }, _v = { class: "flex items-center" }, vv = { class: "text-sm text-gray-600 dark:text-gray-400" }, yv = {
	key: 0,
	class: "absolute right-0 top-14 w-56 sm:w-full bg-white dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-lg shadow-lg z-50"
}, bv = { class: "py-2" }, xv = /* @__PURE__ */ f({
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
	setup(e, { emit: n }) {
		let r = n;
		y_();
		let i = N(!1), l = N(null), u = N(!1), f = N(null);
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
			if (r("bell-click"), g_.value) return;
			let e = u.value;
			_(), !e && u.value && r("panel-open");
		}
		function _() {
			u.value = !u.value, u.value && (i.value = !1);
		}
		function v() {
			u.value = !1;
		}
		ae(l, m), ae(f, v);
		function y(e) {
			e.key === "Escape" && (i.value && m(), u.value && v());
		}
		return D(() => {
			window.addEventListener("keydown", y);
		}), T(() => {
			window.removeEventListener("keydown", y);
		}), (n, m) => {
			let _ = lr, v = qh;
			return k(), s("div", sv, [e.showNotifications ? (k(), s("div", {
				key: 0,
				class: "relative",
				ref_key: "notificationDropdownRef",
				ref: f
			}, [c("button", {
				onClick: Z(g, ["stop"]),
				class: "w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 relative cursor-pointer",
				"aria-label": "Show notifications"
			}, [d(H(dn), { class: "w-5 h-5 text-gray-900 dark:text-white" }), e.unreadNotificationsCount > 0 ? (k(), s("div", cv, z(e.unreadNotificationsCount > 9 ? "9+" : e.unreadNotificationsCount), 1)) : o("", !0)]), d(_, null, {
				default: Y(() => [u.value && !H(g_) ? (k(), s("div", lv, [
					m[1] ||= c("div", { class: "py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white font-semibold" }, " Notificaciones ", -1),
					c("div", uv, [F(n.$slots, "notifications")]),
					e.unreadNotificationsCount > 0 ? (k(), s("div", dv, [c("button", {
						onClick: m[0] ||= (e) => r("mark-all-read"),
						class: "text-xs font-medium text-primary-600 dark:text-primary-400 hover:underline focus:outline-none cursor-pointer"
					}, " Marcar todo como leído ")])) : o("", !0)
				])) : o("", !0)]),
				_: 3
			})], 512)) : o("", !0), c("div", {
				class: "items-center cursor-pointer relative",
				ref_key: "profileDropdownRef",
				ref: l
			}, [c("div", {
				class: "flex items-center",
				onClick: p
			}, [
				c("div", fv, [F(n.$slots, "avatar", {}, () => [c("span", pv, z(e.userInitials), 1)])]),
				c("div", mv, [c("div", hv, [c("div", gv, z(e.userName), 1), c("div", _v, [c("span", vv, z(e.userRole), 1)])]), d(H(pn), { class: S(["w-4 h-4 text-gray-600 dark:text-gray-400", i.value ? "rotate-180 transition-transform duration-200" : "transition-transform duration-200"]) }, null, 8, ["class"])]),
				d(H(pn), { class: S(["sm:hidden w-4 h-4 text-gray-600 dark:text-gray-400 ml-2", i.value ? "rotate-180 transition-transform duration-200" : "transition-transform duration-200"]) }, null, 8, ["class"])
			]), d(_, null, {
				default: Y(() => [i.value ? (k(), s("div", yv, [c("ul", bv, [(k(!0), s(t, null, P(e.menuItems, (e) => (k(), a(v, {
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
				]))), 128))])])) : o("", !0)]),
				_: 1
			})], 512)]);
		};
	}
}), Sv = { class: "flex items-start justify-between gap-4 flex-col md:flex-row" }, Cv = { class: "space-y-2" }, wv = { class: "text-3xl font-bold text-gray-900 dark:text-white" }, Tv = { class: "flex space-x-2 justify-start flex-col gap-3 md:gap-0 md:flex-row items-center" }, Ev = { class: "text-gray-600 dark:text-gray-400 text-sm" }, Dv = { class: "flex items-center space-x-3" }, Ov = /* @__PURE__ */ f({
	__name: "ViewHeader",
	props: {
		subtitle: {},
		title: {},
		badgeText: {}
	},
	setup(e) {
		return (t, n) => {
			let r = Bn;
			return k(), s("div", null, [c("div", Sv, [c("div", Cv, [c("h1", wv, z(e.title), 1), c("div", Tv, [c("span", Ev, z(e.subtitle), 1), e.badgeText ? (k(), a(r, {
				key: 0,
				variant: "neutral",
				text: "sm"
			}, {
				default: Y(() => [u(z(e.badgeText), 1)]),
				_: 1
			})) : o("", !0)])]), c("div", Dv, [F(t.$slots, "right")])])]);
		};
	}
}), kv = { class: "flex items-start gap-3 p-4 rounded-lg border border-warning-200 dark:border-warning-800 bg-warning-50 dark:bg-warning-500/15" }, Av = { class: "flex-1 text-sm text-warning-700 dark:text-warning-300" }, jv = /* @__PURE__ */ f({
	__name: "WarningAlert",
	setup(e) {
		return (e, t) => (k(), s("div", kv, [d(H(ln), { class: "w-5 h-5 text-warning-600 dark:text-warning-400 flex-shrink-0 mt-0.5" }), c("div", Av, [F(e.$slots, "default")])]));
	}
});
//#endregion
export { An as Alert, Bn as Badge, Nn as BaseButton, Fn as BaseButtonIcon, zn as Breadcrumb, Kn as Card, $n as CardPaginations, er as CollapseTransition, Wh as ConfirmationModal, Ng as DataTable, nr as Divider, Yh as Dropdown, lr as DropdownAnimation, qh as DropdownItem, Fg as DropdownMenu, Hh as FormInput, Hg as FormSelect, qg as FormTextarea, Jg as HelpTooltip, Yg as IconButton, Zg as ImageLightbox, e_ as InfoItem, ur as LoadingSVG, cr as Modal, o_ as Navbar, Kh as ResultCount, Dr as SearchableSelect, j_ as Sidebar, s_ as SidebarItem, h_ as SidebarList, M_ as SidebarNav, R_ as SnackBar, P_ as SnackBarItem, G_ as StatCard, X_ as SwitchInput, ig as TableHeader, tg as TablePagination, sg as TableSkeleton, nv as Tabs, iv as UserAvatar, ov as UserAvatars, xv as UserProfileDropdown, Ov as ViewHeader, jv as WarningAlert, bh as initTheme, v_ as isDesktop, g_ as isMobile, __ as isTablet, u_ as useActiveIndicator, I_ as useMessages, y_ as useMobile, dr as useRequestKey, l_ as useSidebar, xh as useTheme, we as yup };
