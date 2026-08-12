//#region node_modules/.pnpm/@vue+devtools-shared@7.7.10/node_modules/@vue/devtools-shared/dist/index.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => function() {
	return e && (t = (0, e[r(e)[0]])(e = 0)), t;
}, s = (e, t) => function() {
	return t || (0, e[r(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, c = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (let c of r(i)) !a.call(e, c) && c !== o && t(e, c, {
		get: () => i[c],
		enumerable: !(s = n(i, c)) || s.enumerable
	});
	return e;
}, l = (n, r, a) => (a = n == null ? {} : e(i(n)), c(r || !n || !n.__esModule ? t(a, "default", {
	value: n,
	enumerable: !0
}) : a, n)), u = o({ "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {} }), d = s({ "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(e, t) {
	u(), t.exports = r;
	function n(e) {
		return e instanceof Buffer ? Buffer.from(e) : new e.constructor(e.buffer.slice(), e.byteOffset, e.length);
	}
	function r(e) {
		if (e ||= {}, e.circles) return i(e);
		let t = /* @__PURE__ */ new Map();
		if (t.set(Date, (e) => new Date(e)), t.set(Map, (e, t) => new Map(a(Array.from(e), t))), t.set(Set, (e, t) => new Set(a(Array.from(e), t))), e.constructorHandlers) for (let n of e.constructorHandlers) t.set(n[0], n[1]);
		let r = null;
		return e.proto ? s : o;
		function a(e, i) {
			let a = Object.keys(e), o = Array(a.length);
			for (let s = 0; s < a.length; s++) {
				let c = a[s], l = e[c];
				o[c] = typeof l != "object" || !l ? l : l.constructor !== Object && (r = t.get(l.constructor)) ? r(l, i) : ArrayBuffer.isView(l) ? n(l) : i(l);
			}
			return o;
		}
		function o(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return a(e, o);
			if (e.constructor !== Object && (r = t.get(e.constructor))) return r(e, o);
			let i = {};
			for (let a in e) {
				if (Object.hasOwnProperty.call(e, a) === !1) continue;
				let s = e[a];
				i[a] = typeof s != "object" || !s ? s : s.constructor !== Object && (r = t.get(s.constructor)) ? r(s, o) : ArrayBuffer.isView(s) ? n(s) : o(s);
			}
			return i;
		}
		function s(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return a(e, s);
			if (e.constructor !== Object && (r = t.get(e.constructor))) return r(e, s);
			let i = {};
			for (let a in e) {
				let o = e[a];
				i[a] = typeof o != "object" || !o ? o : o.constructor !== Object && (r = t.get(o.constructor)) ? r(o, s) : ArrayBuffer.isView(o) ? n(o) : s(o);
			}
			return i;
		}
	}
	function i(e) {
		let t = [], r = [], i = /* @__PURE__ */ new Map();
		if (i.set(Date, (e) => new Date(e)), i.set(Map, (e, t) => new Map(o(Array.from(e), t))), i.set(Set, (e, t) => new Set(o(Array.from(e), t))), e.constructorHandlers) for (let t of e.constructorHandlers) i.set(t[0], t[1]);
		let a = null;
		return e.proto ? c : s;
		function o(e, o) {
			let s = Object.keys(e), c = Array(s.length);
			for (let l = 0; l < s.length; l++) {
				let u = s[l], d = e[u];
				if (typeof d != "object" || !d) c[u] = d;
				else if (d.constructor !== Object && (a = i.get(d.constructor))) c[u] = a(d, o);
				else if (ArrayBuffer.isView(d)) c[u] = n(d);
				else {
					let e = t.indexOf(d);
					c[u] = e === -1 ? o(d) : r[e];
				}
			}
			return c;
		}
		function s(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return o(e, s);
			if (e.constructor !== Object && (a = i.get(e.constructor))) return a(e, s);
			let c = {};
			t.push(e), r.push(c);
			for (let o in e) {
				if (Object.hasOwnProperty.call(e, o) === !1) continue;
				let l = e[o];
				if (typeof l != "object" || !l) c[o] = l;
				else if (l.constructor !== Object && (a = i.get(l.constructor))) c[o] = a(l, s);
				else if (ArrayBuffer.isView(l)) c[o] = n(l);
				else {
					let e = t.indexOf(l);
					c[o] = e === -1 ? s(l) : r[e];
				}
			}
			return t.pop(), r.pop(), c;
		}
		function c(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return o(e, c);
			if (e.constructor !== Object && (a = i.get(e.constructor))) return a(e, c);
			let s = {};
			t.push(e), r.push(s);
			for (let o in e) {
				let l = e[o];
				if (typeof l != "object" || !l) s[o] = l;
				else if (l.constructor !== Object && (a = i.get(l.constructor))) s[o] = a(l, c);
				else if (ArrayBuffer.isView(l)) s[o] = n(l);
				else {
					let e = t.indexOf(l);
					s[o] = e === -1 ? c(l) : r[e];
				}
			}
			return t.pop(), r.pop(), s;
		}
	}
} });
u(), u(), u();
var f = typeof navigator < "u", p = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
p.chrome !== void 0 && p.chrome.devtools, f && (p.self, p.top), typeof navigator < "u" && navigator.userAgent?.toLowerCase().includes("electron"), typeof window < "u" && window.__NUXT__, u();
var m = l(d(), 1), h = /(?:^|[-_/])(\w)/g;
function g(e, t) {
	return t ? t.toUpperCase() : "";
}
function ee(e) {
	return e && `${e}`.replace(h, g);
}
function _(e, t) {
	let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
	n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
	let r = n.lastIndexOf("/"), i = n.substring(r + 1);
	if (t) {
		let e = i.lastIndexOf(t);
		return i.substring(0, e);
	}
	return "";
}
var v = (0, m.default)({ circles: !0 }), y = { trailing: !0 };
function b(e, t = 25, n = {}) {
	if (n = {
		...y,
		...n
	}, !Number.isFinite(t)) throw TypeError("Expected `wait` to be a finite number");
	let r, i, a = [], o, s, c = (t, r) => (o = te(e, t, r), o.finally(() => {
		if (o = null, n.trailing && s && !i) {
			let e = c(t, s);
			return s = null, e;
		}
	}), o);
	return function(...e) {
		return o ? (n.trailing && (s = e), o) : new Promise((o) => {
			let s = !i && n.leading;
			clearTimeout(i), i = setTimeout(() => {
				i = null;
				let t = n.leading ? r : c(this, e);
				for (let e of a) e(t);
				a = [];
			}, t), s ? (r = c(this, e), o(r)) : a.push(o);
		});
	};
}
async function te(e, t, n) {
	return await e.apply(t, n);
}
//#endregion
//#region node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs
function x(e, t = {}, n) {
	for (let r in e) {
		let i = e[r], a = n ? `${n}:${r}` : r;
		typeof i == "object" && i ? x(i, t, a) : typeof i == "function" && (t[a] = i);
	}
	return t;
}
var S = { run: (e) => e() }, C = console.createTask === void 0 ? () => S : console.createTask;
function w(e, t) {
	let n = C(t.shift());
	return e.reduce((e, r) => e.then(() => n.run(() => r(...t))), Promise.resolve());
}
function T(e, t) {
	let n = C(t.shift());
	return Promise.all(e.map((e) => n.run(() => e(...t))));
}
function E(e, t) {
	for (let n of [...e]) n(t);
}
var D = class {
	constructor() {
		this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
	}
	hook(e, t, n = {}) {
		if (!e || typeof t != "function") return () => {};
		let r = e, i;
		for (; this._deprecatedHooks[e];) i = this._deprecatedHooks[e], e = i.to;
		if (i && !n.allowDeprecated) {
			let e = i.message;
			e ||= `${r} hook has been deprecated` + (i.to ? `, please use ${i.to}` : ""), this._deprecatedMessages ||= /* @__PURE__ */ new Set(), this._deprecatedMessages.has(e) || (console.warn(e), this._deprecatedMessages.add(e));
		}
		if (!t.name) try {
			Object.defineProperty(t, "name", {
				get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb",
				configurable: !0
			});
		} catch {}
		return this._hooks[e] = this._hooks[e] || [], this._hooks[e].push(t), () => {
			t &&= (this.removeHook(e, t), void 0);
		};
	}
	hookOnce(e, t) {
		let n, r = (...e) => (typeof n == "function" && n(), n = void 0, r = void 0, t(...e));
		return n = this.hook(e, r), n;
	}
	removeHook(e, t) {
		if (this._hooks[e]) {
			let n = this._hooks[e].indexOf(t);
			n !== -1 && this._hooks[e].splice(n, 1), this._hooks[e].length === 0 && delete this._hooks[e];
		}
	}
	deprecateHook(e, t) {
		this._deprecatedHooks[e] = typeof t == "string" ? { to: t } : t;
		let n = this._hooks[e] || [];
		delete this._hooks[e];
		for (let t of n) this.hook(e, t);
	}
	deprecateHooks(e) {
		Object.assign(this._deprecatedHooks, e);
		for (let t in e) this.deprecateHook(t, e[t]);
	}
	addHooks(e) {
		let t = x(e), n = Object.keys(t).map((e) => this.hook(e, t[e]));
		return () => {
			for (let e of n.splice(0, n.length)) e();
		};
	}
	removeHooks(e) {
		let t = x(e);
		for (let e in t) this.removeHook(e, t[e]);
	}
	removeAllHooks() {
		for (let e in this._hooks) delete this._hooks[e];
	}
	callHook(e, ...t) {
		return t.unshift(e), this.callHookWith(w, e, ...t);
	}
	callHookParallel(e, ...t) {
		return t.unshift(e), this.callHookWith(T, e, ...t);
	}
	callHookWith(e, t, ...n) {
		let r = this._before || this._after ? {
			name: t,
			args: n,
			context: {}
		} : void 0;
		this._before && E(this._before, r);
		let i = e(t in this._hooks ? [...this._hooks[t]] : [], n);
		return i instanceof Promise ? i.finally(() => {
			this._after && r && E(this._after, r);
		}) : (this._after && r && E(this._after, r), i);
	}
	beforeEach(e) {
		return this._before = this._before || [], this._before.push(e), () => {
			if (this._before !== void 0) {
				let t = this._before.indexOf(e);
				t !== -1 && this._before.splice(t, 1);
			}
		};
	}
	afterEach(e) {
		return this._after = this._after || [], this._after.push(e), () => {
			if (this._after !== void 0) {
				let t = this._after.indexOf(e);
				t !== -1 && this._after.splice(t, 1);
			}
		};
	}
};
function O() {
	return new D();
}
//#endregion
//#region node_modules/.pnpm/@vue+devtools-kit@7.7.10/node_modules/@vue/devtools-kit/dist/index.js
var k = Object.create, ne = Object.defineProperty, re = Object.getOwnPropertyDescriptor, ie = Object.getOwnPropertyNames, ae = Object.getPrototypeOf, oe = Object.prototype.hasOwnProperty, se = (e, t) => function() {
	return e && (t = (0, e[ie(e)[0]])(e = 0)), t;
}, ce = (e, t) => function() {
	return t || (0, e[ie(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, le = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (let i of ie(t)) !oe.call(e, i) && i !== n && ne(e, i, {
		get: () => t[i],
		enumerable: !(r = re(t, i)) || r.enumerable
	});
	return e;
}, ue = (e, t, n) => (n = e == null ? {} : k(ae(e)), le(t || !e || !e.__esModule ? ne(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), A = se({ "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {} }), de = ce({ "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(e, t) {
	A(), (function(e) {
		var n = {
			À: "A",
			Á: "A",
			Â: "A",
			Ã: "A",
			Ä: "Ae",
			Å: "A",
			Æ: "AE",
			Ç: "C",
			È: "E",
			É: "E",
			Ê: "E",
			Ë: "E",
			Ì: "I",
			Í: "I",
			Î: "I",
			Ï: "I",
			Ð: "D",
			Ñ: "N",
			Ò: "O",
			Ó: "O",
			Ô: "O",
			Õ: "O",
			Ö: "Oe",
			Ő: "O",
			Ø: "O",
			Ù: "U",
			Ú: "U",
			Û: "U",
			Ü: "Ue",
			Ű: "U",
			Ý: "Y",
			Þ: "TH",
			ß: "ss",
			à: "a",
			á: "a",
			â: "a",
			ã: "a",
			ä: "ae",
			å: "a",
			æ: "ae",
			ç: "c",
			è: "e",
			é: "e",
			ê: "e",
			ë: "e",
			ì: "i",
			í: "i",
			î: "i",
			ï: "i",
			ð: "d",
			ñ: "n",
			ò: "o",
			ó: "o",
			ô: "o",
			õ: "o",
			ö: "oe",
			ő: "o",
			ø: "o",
			ù: "u",
			ú: "u",
			û: "u",
			ü: "ue",
			ű: "u",
			ý: "y",
			þ: "th",
			ÿ: "y",
			ẞ: "SS",
			ا: "a",
			أ: "a",
			إ: "i",
			آ: "aa",
			ؤ: "u",
			ئ: "e",
			ء: "a",
			ب: "b",
			ت: "t",
			ث: "th",
			ج: "j",
			ح: "h",
			خ: "kh",
			د: "d",
			ذ: "th",
			ر: "r",
			ز: "z",
			س: "s",
			ش: "sh",
			ص: "s",
			ض: "dh",
			ط: "t",
			ظ: "z",
			ع: "a",
			غ: "gh",
			ف: "f",
			ق: "q",
			ك: "k",
			ل: "l",
			م: "m",
			ن: "n",
			ه: "h",
			و: "w",
			ي: "y",
			ى: "a",
			ة: "h",
			ﻻ: "la",
			ﻷ: "laa",
			ﻹ: "lai",
			ﻵ: "laa",
			گ: "g",
			چ: "ch",
			پ: "p",
			ژ: "zh",
			ک: "k",
			ی: "y",
			"َ": "a",
			"ً": "an",
			"ِ": "e",
			"ٍ": "en",
			"ُ": "u",
			"ٌ": "on",
			"ْ": "",
			"٠": "0",
			"١": "1",
			"٢": "2",
			"٣": "3",
			"٤": "4",
			"٥": "5",
			"٦": "6",
			"٧": "7",
			"٨": "8",
			"٩": "9",
			"۰": "0",
			"۱": "1",
			"۲": "2",
			"۳": "3",
			"۴": "4",
			"۵": "5",
			"۶": "6",
			"۷": "7",
			"۸": "8",
			"۹": "9",
			က: "k",
			ခ: "kh",
			ဂ: "g",
			ဃ: "ga",
			င: "ng",
			စ: "s",
			ဆ: "sa",
			ဇ: "z",
			စျ: "za",
			ည: "ny",
			ဋ: "t",
			ဌ: "ta",
			ဍ: "d",
			ဎ: "da",
			ဏ: "na",
			တ: "t",
			ထ: "ta",
			ဒ: "d",
			ဓ: "da",
			န: "n",
			ပ: "p",
			ဖ: "pa",
			ဗ: "b",
			ဘ: "ba",
			မ: "m",
			ယ: "y",
			ရ: "ya",
			လ: "l",
			ဝ: "w",
			သ: "th",
			ဟ: "h",
			ဠ: "la",
			အ: "a",
			"ြ": "y",
			"ျ": "ya",
			"ွ": "w",
			"ြွ": "yw",
			"ျွ": "ywa",
			"ှ": "h",
			ဧ: "e",
			"၏": "-e",
			ဣ: "i",
			ဤ: "-i",
			ဉ: "u",
			ဦ: "-u",
			ဩ: "aw",
			သြော: "aw",
			ဪ: "aw",
			"၀": "0",
			"၁": "1",
			"၂": "2",
			"၃": "3",
			"၄": "4",
			"၅": "5",
			"၆": "6",
			"၇": "7",
			"၈": "8",
			"၉": "9",
			"္": "",
			"့": "",
			"း": "",
			č: "c",
			ď: "d",
			ě: "e",
			ň: "n",
			ř: "r",
			š: "s",
			ť: "t",
			ů: "u",
			ž: "z",
			Č: "C",
			Ď: "D",
			Ě: "E",
			Ň: "N",
			Ř: "R",
			Š: "S",
			Ť: "T",
			Ů: "U",
			Ž: "Z",
			ހ: "h",
			ށ: "sh",
			ނ: "n",
			ރ: "r",
			ބ: "b",
			ޅ: "lh",
			ކ: "k",
			އ: "a",
			ވ: "v",
			މ: "m",
			ފ: "f",
			ދ: "dh",
			ތ: "th",
			ލ: "l",
			ގ: "g",
			ޏ: "gn",
			ސ: "s",
			ޑ: "d",
			ޒ: "z",
			ޓ: "t",
			ޔ: "y",
			ޕ: "p",
			ޖ: "j",
			ޗ: "ch",
			ޘ: "tt",
			ޙ: "hh",
			ޚ: "kh",
			ޛ: "th",
			ޜ: "z",
			ޝ: "sh",
			ޞ: "s",
			ޟ: "d",
			ޠ: "t",
			ޡ: "z",
			ޢ: "a",
			ޣ: "gh",
			ޤ: "q",
			ޥ: "w",
			"ަ": "a",
			"ާ": "aa",
			"ި": "i",
			"ީ": "ee",
			"ު": "u",
			"ޫ": "oo",
			"ެ": "e",
			"ޭ": "ey",
			"ޮ": "o",
			"ޯ": "oa",
			"ް": "",
			ა: "a",
			ბ: "b",
			გ: "g",
			დ: "d",
			ე: "e",
			ვ: "v",
			ზ: "z",
			თ: "t",
			ი: "i",
			კ: "k",
			ლ: "l",
			მ: "m",
			ნ: "n",
			ო: "o",
			პ: "p",
			ჟ: "zh",
			რ: "r",
			ს: "s",
			ტ: "t",
			უ: "u",
			ფ: "p",
			ქ: "k",
			ღ: "gh",
			ყ: "q",
			შ: "sh",
			ჩ: "ch",
			ც: "ts",
			ძ: "dz",
			წ: "ts",
			ჭ: "ch",
			ხ: "kh",
			ჯ: "j",
			ჰ: "h",
			α: "a",
			β: "v",
			γ: "g",
			δ: "d",
			ε: "e",
			ζ: "z",
			η: "i",
			θ: "th",
			ι: "i",
			κ: "k",
			λ: "l",
			μ: "m",
			ν: "n",
			ξ: "ks",
			ο: "o",
			π: "p",
			ρ: "r",
			σ: "s",
			τ: "t",
			υ: "y",
			φ: "f",
			χ: "x",
			ψ: "ps",
			ω: "o",
			ά: "a",
			έ: "e",
			ί: "i",
			ό: "o",
			ύ: "y",
			ή: "i",
			ώ: "o",
			ς: "s",
			ϊ: "i",
			ΰ: "y",
			ϋ: "y",
			ΐ: "i",
			Α: "A",
			Β: "B",
			Γ: "G",
			Δ: "D",
			Ε: "E",
			Ζ: "Z",
			Η: "I",
			Θ: "TH",
			Ι: "I",
			Κ: "K",
			Λ: "L",
			Μ: "M",
			Ν: "N",
			Ξ: "KS",
			Ο: "O",
			Π: "P",
			Ρ: "R",
			Σ: "S",
			Τ: "T",
			Υ: "Y",
			Φ: "F",
			Χ: "X",
			Ψ: "PS",
			Ω: "O",
			Ά: "A",
			Έ: "E",
			Ί: "I",
			Ό: "O",
			Ύ: "Y",
			Ή: "I",
			Ώ: "O",
			Ϊ: "I",
			Ϋ: "Y",
			ā: "a",
			ē: "e",
			ģ: "g",
			ī: "i",
			ķ: "k",
			ļ: "l",
			ņ: "n",
			ū: "u",
			Ā: "A",
			Ē: "E",
			Ģ: "G",
			Ī: "I",
			Ķ: "k",
			Ļ: "L",
			Ņ: "N",
			Ū: "U",
			Ќ: "Kj",
			ќ: "kj",
			Љ: "Lj",
			љ: "lj",
			Њ: "Nj",
			њ: "nj",
			Тс: "Ts",
			тс: "ts",
			ą: "a",
			ć: "c",
			ę: "e",
			ł: "l",
			ń: "n",
			ś: "s",
			ź: "z",
			ż: "z",
			Ą: "A",
			Ć: "C",
			Ę: "E",
			Ł: "L",
			Ń: "N",
			Ś: "S",
			Ź: "Z",
			Ż: "Z",
			Є: "Ye",
			І: "I",
			Ї: "Yi",
			Ґ: "G",
			є: "ye",
			і: "i",
			ї: "yi",
			ґ: "g",
			ă: "a",
			Ă: "A",
			ș: "s",
			Ș: "S",
			ț: "t",
			Ț: "T",
			ţ: "t",
			Ţ: "T",
			а: "a",
			б: "b",
			в: "v",
			г: "g",
			д: "d",
			е: "e",
			ё: "yo",
			ж: "zh",
			з: "z",
			и: "i",
			й: "i",
			к: "k",
			л: "l",
			м: "m",
			н: "n",
			о: "o",
			п: "p",
			р: "r",
			с: "s",
			т: "t",
			у: "u",
			ф: "f",
			х: "kh",
			ц: "c",
			ч: "ch",
			ш: "sh",
			щ: "sh",
			ъ: "",
			ы: "y",
			ь: "",
			э: "e",
			ю: "yu",
			я: "ya",
			А: "A",
			Б: "B",
			В: "V",
			Г: "G",
			Д: "D",
			Е: "E",
			Ё: "Yo",
			Ж: "Zh",
			З: "Z",
			И: "I",
			Й: "I",
			К: "K",
			Л: "L",
			М: "M",
			Н: "N",
			О: "O",
			П: "P",
			Р: "R",
			С: "S",
			Т: "T",
			У: "U",
			Ф: "F",
			Х: "Kh",
			Ц: "C",
			Ч: "Ch",
			Ш: "Sh",
			Щ: "Sh",
			Ъ: "",
			Ы: "Y",
			Ь: "",
			Э: "E",
			Ю: "Yu",
			Я: "Ya",
			ђ: "dj",
			ј: "j",
			ћ: "c",
			џ: "dz",
			Ђ: "Dj",
			Ј: "j",
			Ћ: "C",
			Џ: "Dz",
			ľ: "l",
			ĺ: "l",
			ŕ: "r",
			Ľ: "L",
			Ĺ: "L",
			Ŕ: "R",
			ş: "s",
			Ş: "S",
			ı: "i",
			İ: "I",
			ğ: "g",
			Ğ: "G",
			ả: "a",
			Ả: "A",
			ẳ: "a",
			Ẳ: "A",
			ẩ: "a",
			Ẩ: "A",
			đ: "d",
			Đ: "D",
			ẹ: "e",
			Ẹ: "E",
			ẽ: "e",
			Ẽ: "E",
			ẻ: "e",
			Ẻ: "E",
			ế: "e",
			Ế: "E",
			ề: "e",
			Ề: "E",
			ệ: "e",
			Ệ: "E",
			ễ: "e",
			Ễ: "E",
			ể: "e",
			Ể: "E",
			ỏ: "o",
			ọ: "o",
			Ọ: "o",
			ố: "o",
			Ố: "O",
			ồ: "o",
			Ồ: "O",
			ổ: "o",
			Ổ: "O",
			ộ: "o",
			Ộ: "O",
			ỗ: "o",
			Ỗ: "O",
			ơ: "o",
			Ơ: "O",
			ớ: "o",
			Ớ: "O",
			ờ: "o",
			Ờ: "O",
			ợ: "o",
			Ợ: "O",
			ỡ: "o",
			Ỡ: "O",
			Ở: "o",
			ở: "o",
			ị: "i",
			Ị: "I",
			ĩ: "i",
			Ĩ: "I",
			ỉ: "i",
			Ỉ: "i",
			ủ: "u",
			Ủ: "U",
			ụ: "u",
			Ụ: "U",
			ũ: "u",
			Ũ: "U",
			ư: "u",
			Ư: "U",
			ứ: "u",
			Ứ: "U",
			ừ: "u",
			Ừ: "U",
			ự: "u",
			Ự: "U",
			ữ: "u",
			Ữ: "U",
			ử: "u",
			Ử: "ư",
			ỷ: "y",
			Ỷ: "y",
			ỳ: "y",
			Ỳ: "Y",
			ỵ: "y",
			Ỵ: "Y",
			ỹ: "y",
			Ỹ: "Y",
			ạ: "a",
			Ạ: "A",
			ấ: "a",
			Ấ: "A",
			ầ: "a",
			Ầ: "A",
			ậ: "a",
			Ậ: "A",
			ẫ: "a",
			Ẫ: "A",
			ắ: "a",
			Ắ: "A",
			ằ: "a",
			Ằ: "A",
			ặ: "a",
			Ặ: "A",
			ẵ: "a",
			Ẵ: "A",
			"⓪": "0",
			"①": "1",
			"②": "2",
			"③": "3",
			"④": "4",
			"⑤": "5",
			"⑥": "6",
			"⑦": "7",
			"⑧": "8",
			"⑨": "9",
			"⑩": "10",
			"⑪": "11",
			"⑫": "12",
			"⑬": "13",
			"⑭": "14",
			"⑮": "15",
			"⑯": "16",
			"⑰": "17",
			"⑱": "18",
			"⑲": "18",
			"⑳": "18",
			"⓵": "1",
			"⓶": "2",
			"⓷": "3",
			"⓸": "4",
			"⓹": "5",
			"⓺": "6",
			"⓻": "7",
			"⓼": "8",
			"⓽": "9",
			"⓾": "10",
			"⓿": "0",
			"⓫": "11",
			"⓬": "12",
			"⓭": "13",
			"⓮": "14",
			"⓯": "15",
			"⓰": "16",
			"⓱": "17",
			"⓲": "18",
			"⓳": "19",
			"⓴": "20",
			"Ⓐ": "A",
			"Ⓑ": "B",
			"Ⓒ": "C",
			"Ⓓ": "D",
			"Ⓔ": "E",
			"Ⓕ": "F",
			"Ⓖ": "G",
			"Ⓗ": "H",
			"Ⓘ": "I",
			"Ⓙ": "J",
			"Ⓚ": "K",
			"Ⓛ": "L",
			"Ⓜ": "M",
			"Ⓝ": "N",
			"Ⓞ": "O",
			"Ⓟ": "P",
			"Ⓠ": "Q",
			"Ⓡ": "R",
			"Ⓢ": "S",
			"Ⓣ": "T",
			"Ⓤ": "U",
			"Ⓥ": "V",
			"Ⓦ": "W",
			"Ⓧ": "X",
			"Ⓨ": "Y",
			"Ⓩ": "Z",
			"ⓐ": "a",
			"ⓑ": "b",
			"ⓒ": "c",
			"ⓓ": "d",
			"ⓔ": "e",
			"ⓕ": "f",
			"ⓖ": "g",
			"ⓗ": "h",
			"ⓘ": "i",
			"ⓙ": "j",
			"ⓚ": "k",
			"ⓛ": "l",
			"ⓜ": "m",
			"ⓝ": "n",
			"ⓞ": "o",
			"ⓟ": "p",
			"ⓠ": "q",
			"ⓡ": "r",
			"ⓢ": "s",
			"ⓣ": "t",
			"ⓤ": "u",
			"ⓦ": "v",
			"ⓥ": "w",
			"ⓧ": "x",
			"ⓨ": "y",
			"ⓩ": "z",
			"“": "\"",
			"”": "\"",
			"‘": "'",
			"’": "'",
			"∂": "d",
			ƒ: "f",
			"™": "(TM)",
			"©": "(C)",
			œ: "oe",
			Œ: "OE",
			"®": "(R)",
			"†": "+",
			"℠": "(SM)",
			"…": "...",
			"˚": "o",
			º: "o",
			ª: "a",
			"•": "*",
			"၊": ",",
			"။": ".",
			$: "USD",
			"€": "EUR",
			"₢": "BRN",
			"₣": "FRF",
			"£": "GBP",
			"₤": "ITL",
			"₦": "NGN",
			"₧": "ESP",
			"₩": "KRW",
			"₪": "ILS",
			"₫": "VND",
			"₭": "LAK",
			"₮": "MNT",
			"₯": "GRD",
			"₱": "ARS",
			"₲": "PYG",
			"₳": "ARA",
			"₴": "UAH",
			"₵": "GHS",
			"¢": "cent",
			"¥": "CNY",
			元: "CNY",
			円: "YEN",
			"﷼": "IRR",
			"₠": "EWE",
			"฿": "THB",
			"₨": "INR",
			"₹": "INR",
			"₰": "PF",
			"₺": "TRY",
			"؋": "AFN",
			"₼": "AZN",
			лв: "BGN",
			"៛": "KHR",
			"₡": "CRC",
			"₸": "KZT",
			ден: "MKD",
			zł: "PLN",
			"₽": "RUB",
			"₾": "GEL"
		}, r = ["်", "ް"], i = {
			"ာ": "a",
			"ါ": "a",
			"ေ": "e",
			"ဲ": "e",
			"ိ": "i",
			"ီ": "i",
			"ို": "o",
			"ု": "u",
			"ူ": "u",
			"ေါင်": "aung",
			"ော": "aw",
			"ော်": "aw",
			"ေါ": "aw",
			"ေါ်": "aw",
			"်": "်",
			က်: "et",
			"ိုက်": "aik",
			"ောက်": "auk",
			င်: "in",
			"ိုင်": "aing",
			"ောင်": "aung",
			စ်: "it",
			ည်: "i",
			တ်: "at",
			"ိတ်": "eik",
			"ုတ်": "ok",
			"ွတ်": "ut",
			"ေတ်": "it",
			ဒ်: "d",
			"ိုဒ်": "ok",
			"ုဒ်": "ait",
			န်: "an",
			"ာန်": "an",
			"ိန်": "ein",
			"ုန်": "on",
			"ွန်": "un",
			ပ်: "at",
			"ိပ်": "eik",
			"ုပ်": "ok",
			"ွပ်": "ut",
			န်ုပ်: "nub",
			မ်: "an",
			"ိမ်": "ein",
			"ုမ်": "on",
			"ွမ်": "un",
			ယ်: "e",
			"ိုလ်": "ol",
			ဉ်: "in",
			"ံ": "an",
			"ိံ": "ein",
			"ုံ": "on",
			"ައް": "ah",
			"ަށް": "ah"
		}, a = {
			en: {},
			az: {
				ç: "c",
				ə: "e",
				ğ: "g",
				ı: "i",
				ö: "o",
				ş: "s",
				ü: "u",
				Ç: "C",
				Ə: "E",
				Ğ: "G",
				İ: "I",
				Ö: "O",
				Ş: "S",
				Ü: "U"
			},
			cs: {
				č: "c",
				ď: "d",
				ě: "e",
				ň: "n",
				ř: "r",
				š: "s",
				ť: "t",
				ů: "u",
				ž: "z",
				Č: "C",
				Ď: "D",
				Ě: "E",
				Ň: "N",
				Ř: "R",
				Š: "S",
				Ť: "T",
				Ů: "U",
				Ž: "Z"
			},
			fi: {
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O"
			},
			hu: {
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O",
				ü: "u",
				Ü: "U",
				ű: "u",
				Ű: "U"
			},
			lt: {
				ą: "a",
				č: "c",
				ę: "e",
				ė: "e",
				į: "i",
				š: "s",
				ų: "u",
				ū: "u",
				ž: "z",
				Ą: "A",
				Č: "C",
				Ę: "E",
				Ė: "E",
				Į: "I",
				Š: "S",
				Ų: "U",
				Ū: "U"
			},
			lv: {
				ā: "a",
				č: "c",
				ē: "e",
				ģ: "g",
				ī: "i",
				ķ: "k",
				ļ: "l",
				ņ: "n",
				š: "s",
				ū: "u",
				ž: "z",
				Ā: "A",
				Č: "C",
				Ē: "E",
				Ģ: "G",
				Ī: "i",
				Ķ: "k",
				Ļ: "L",
				Ņ: "N",
				Š: "S",
				Ū: "u",
				Ž: "Z"
			},
			pl: {
				ą: "a",
				ć: "c",
				ę: "e",
				ł: "l",
				ń: "n",
				ó: "o",
				ś: "s",
				ź: "z",
				ż: "z",
				Ą: "A",
				Ć: "C",
				Ę: "e",
				Ł: "L",
				Ń: "N",
				Ó: "O",
				Ś: "S",
				Ź: "Z",
				Ż: "Z"
			},
			sv: {
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O"
			},
			sk: {
				ä: "a",
				Ä: "A"
			},
			sr: {
				љ: "lj",
				њ: "nj",
				Љ: "Lj",
				Њ: "Nj",
				đ: "dj",
				Đ: "Dj"
			},
			tr: {
				Ü: "U",
				Ö: "O",
				ü: "u",
				ö: "o"
			}
		}, o = {
			ar: {
				"∆": "delta",
				"∞": "la-nihaya",
				"♥": "hob",
				"&": "wa",
				"|": "aw",
				"<": "aqal-men",
				">": "akbar-men",
				"∑": "majmou",
				"¤": "omla"
			},
			az: {},
			ca: {
				"∆": "delta",
				"∞": "infinit",
				"♥": "amor",
				"&": "i",
				"|": "o",
				"<": "menys que",
				">": "mes que",
				"∑": "suma dels",
				"¤": "moneda"
			},
			cs: {
				"∆": "delta",
				"∞": "nekonecno",
				"♥": "laska",
				"&": "a",
				"|": "nebo",
				"<": "mensi nez",
				">": "vetsi nez",
				"∑": "soucet",
				"¤": "mena"
			},
			de: {
				"∆": "delta",
				"∞": "unendlich",
				"♥": "Liebe",
				"&": "und",
				"|": "oder",
				"<": "kleiner als",
				">": "groesser als",
				"∑": "Summe von",
				"¤": "Waehrung"
			},
			dv: {
				"∆": "delta",
				"∞": "kolunulaa",
				"♥": "loabi",
				"&": "aai",
				"|": "noonee",
				"<": "ah vure kuda",
				">": "ah vure bodu",
				"∑": "jumula",
				"¤": "faisaa"
			},
			en: {
				"∆": "delta",
				"∞": "infinity",
				"♥": "love",
				"&": "and",
				"|": "or",
				"<": "less than",
				">": "greater than",
				"∑": "sum",
				"¤": "currency"
			},
			es: {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amor",
				"&": "y",
				"|": "u",
				"<": "menos que",
				">": "mas que",
				"∑": "suma de los",
				"¤": "moneda"
			},
			fa: {
				"∆": "delta",
				"∞": "bi-nahayat",
				"♥": "eshgh",
				"&": "va",
				"|": "ya",
				"<": "kamtar-az",
				">": "bishtar-az",
				"∑": "majmooe",
				"¤": "vahed"
			},
			fi: {
				"∆": "delta",
				"∞": "aarettomyys",
				"♥": "rakkaus",
				"&": "ja",
				"|": "tai",
				"<": "pienempi kuin",
				">": "suurempi kuin",
				"∑": "summa",
				"¤": "valuutta"
			},
			fr: {
				"∆": "delta",
				"∞": "infiniment",
				"♥": "Amour",
				"&": "et",
				"|": "ou",
				"<": "moins que",
				">": "superieure a",
				"∑": "somme des",
				"¤": "monnaie"
			},
			ge: {
				"∆": "delta",
				"∞": "usasruloba",
				"♥": "siqvaruli",
				"&": "da",
				"|": "an",
				"<": "naklebi",
				">": "meti",
				"∑": "jami",
				"¤": "valuta"
			},
			gr: {},
			hu: {
				"∆": "delta",
				"∞": "vegtelen",
				"♥": "szerelem",
				"&": "es",
				"|": "vagy",
				"<": "kisebb mint",
				">": "nagyobb mint",
				"∑": "szumma",
				"¤": "penznem"
			},
			it: {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amore",
				"&": "e",
				"|": "o",
				"<": "minore di",
				">": "maggiore di",
				"∑": "somma",
				"¤": "moneta"
			},
			lt: {
				"∆": "delta",
				"∞": "begalybe",
				"♥": "meile",
				"&": "ir",
				"|": "ar",
				"<": "maziau nei",
				">": "daugiau nei",
				"∑": "suma",
				"¤": "valiuta"
			},
			lv: {
				"∆": "delta",
				"∞": "bezgaliba",
				"♥": "milestiba",
				"&": "un",
				"|": "vai",
				"<": "mazak neka",
				">": "lielaks neka",
				"∑": "summa",
				"¤": "valuta"
			},
			my: {
				"∆": "kwahkhyaet",
				"∞": "asaonasme",
				"♥": "akhyait",
				"&": "nhin",
				"|": "tho",
				"<": "ngethaw",
				">": "kyithaw",
				"∑": "paungld",
				"¤": "ngwekye"
			},
			mk: {},
			nl: {
				"∆": "delta",
				"∞": "oneindig",
				"♥": "liefde",
				"&": "en",
				"|": "of",
				"<": "kleiner dan",
				">": "groter dan",
				"∑": "som",
				"¤": "valuta"
			},
			pl: {
				"∆": "delta",
				"∞": "nieskonczonosc",
				"♥": "milosc",
				"&": "i",
				"|": "lub",
				"<": "mniejsze niz",
				">": "wieksze niz",
				"∑": "suma",
				"¤": "waluta"
			},
			pt: {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amor",
				"&": "e",
				"|": "ou",
				"<": "menor que",
				">": "maior que",
				"∑": "soma",
				"¤": "moeda"
			},
			ro: {
				"∆": "delta",
				"∞": "infinit",
				"♥": "dragoste",
				"&": "si",
				"|": "sau",
				"<": "mai mic ca",
				">": "mai mare ca",
				"∑": "suma",
				"¤": "valuta"
			},
			ru: {
				"∆": "delta",
				"∞": "beskonechno",
				"♥": "lubov",
				"&": "i",
				"|": "ili",
				"<": "menshe",
				">": "bolshe",
				"∑": "summa",
				"¤": "valjuta"
			},
			sk: {
				"∆": "delta",
				"∞": "nekonecno",
				"♥": "laska",
				"&": "a",
				"|": "alebo",
				"<": "menej ako",
				">": "viac ako",
				"∑": "sucet",
				"¤": "mena"
			},
			sr: {},
			tr: {
				"∆": "delta",
				"∞": "sonsuzluk",
				"♥": "ask",
				"&": "ve",
				"|": "veya",
				"<": "kucuktur",
				">": "buyuktur",
				"∑": "toplam",
				"¤": "para birimi"
			},
			uk: {
				"∆": "delta",
				"∞": "bezkinechnist",
				"♥": "lubov",
				"&": "i",
				"|": "abo",
				"<": "menshe",
				">": "bilshe",
				"∑": "suma",
				"¤": "valjuta"
			},
			vn: {
				"∆": "delta",
				"∞": "vo cuc",
				"♥": "yeu",
				"&": "va",
				"|": "hoac",
				"<": "nho hon",
				">": "lon hon",
				"∑": "tong",
				"¤": "tien te"
			}
		}, s = [
			";",
			"?",
			":",
			"@",
			"&",
			"=",
			"+",
			"$",
			",",
			"/"
		].join(""), c = [
			";",
			"?",
			":",
			"@",
			"&",
			"=",
			"+",
			"$",
			","
		].join(""), l = [
			".",
			"!",
			"~",
			"*",
			"'",
			"(",
			")"
		].join(""), u = function(e, t) {
			var u = "-", d = "", m = "", h = !0, g = {}, ee, _, v, y, b, te, x, S, C, w, T, E, D, O, k = "";
			if (typeof e != "string") return "";
			if (typeof t == "string" && (u = t), x = o.en, S = a.en, typeof t == "object") for (T in ee = t.maintainCase || !1, g = t.custom && typeof t.custom == "object" ? t.custom : g, v = +t.truncate > 1 && t.truncate || !1, y = t.uric || !1, b = t.uricNoSlash || !1, te = t.mark || !1, h = t.symbols !== !1 && t.lang !== !1, u = t.separator || u, y && (k += s), b && (k += c), te && (k += l), x = t.lang && o[t.lang] && h ? o[t.lang] : h ? o.en : {}, S = t.lang && a[t.lang] ? a[t.lang] : t.lang === !1 || t.lang === !0 ? {} : a.en, t.titleCase && typeof t.titleCase.length == "number" && Array.prototype.toString.call(t.titleCase) ? (t.titleCase.forEach(function(e) {
				g[e + ""] = e + "";
			}), _ = !0) : _ = !!t.titleCase, t.custom && typeof t.custom.length == "number" && Array.prototype.toString.call(t.custom) && t.custom.forEach(function(e) {
				g[e + ""] = e + "";
			}), Object.keys(g).forEach(function(t) {
				var n = t.length > 1 ? RegExp("\\b" + f(t) + "\\b", "gi") : new RegExp(f(t), "gi");
				e = e.replace(n, g[t]);
			}), g) k += T;
			for (k += u, k = f(k), e = e.replace(/(^\s+|\s+$)/g, ""), D = !1, O = !1, w = 0, E = e.length; w < E; w++) T = e[w], p(T, g) ? D = !1 : S[T] ? (T = D && S[T].match(/[A-Za-z0-9]/) ? " " + S[T] : S[T], D = !1) : T in n ? (w + 1 < E && r.indexOf(e[w + 1]) >= 0 ? (m += T, T = "") : O === !0 ? (T = i[m] + n[T], m = "") : T = D && n[T].match(/[A-Za-z0-9]/) ? " " + n[T] : n[T], D = !1, O = !1) : T in i ? (m += T, T = "", w === E - 1 && (T = i[m]), O = !0) : x[T] && !(y && s.indexOf(T) !== -1) && !(b && c.indexOf(T) !== -1) ? (T = D || d.substr(-1).match(/[A-Za-z0-9]/) ? u + x[T] : x[T], T += e[w + 1] !== void 0 && e[w + 1].match(/[A-Za-z0-9]/) ? u : "", D = !0) : (O === !0 ? (T = i[m] + T, m = "", O = !1) : D && (/[A-Za-z0-9]/.test(T) || d.substr(-1).match(/A-Za-z0-9]/)) && (T = " " + T), D = !1), d += T.replace(RegExp("[^\\w\\s" + k + "_-]", "g"), u);
			return _ && (d = d.replace(/(\w)(\S*)/g, function(e, t, n) {
				var r = t.toUpperCase() + (n === null ? "" : n);
				return Object.keys(g).indexOf(r.toLowerCase()) < 0 ? r : r.toLowerCase();
			})), d = d.replace(/\s+/g, u).replace(RegExp("\\" + u + "+", "g"), u).replace(RegExp("(^\\" + u + "+|\\" + u + "+$)", "g"), ""), v && d.length > v && (C = d.charAt(v) === u, d = d.slice(0, v), C || (d = d.slice(0, d.lastIndexOf(u)))), !ee && !_ && (d = d.toLowerCase()), d;
		}, d = function(e) {
			return function(t) {
				return u(t, e);
			};
		}, f = function(e) {
			return e.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
		}, p = function(e, t) {
			for (var n in t) if (t[n] === e) return !0;
		};
		if (t !== void 0 && t.exports) t.exports = u, t.exports.createSlug = d;
		else if (typeof define < "u" && define.amd) define([], function() {
			return u;
		});
		else try {
			if (e.getSlug || e.createSlug) throw "speakingurl: globals exists /(getSlug|createSlug)/";
			e.getSlug = u, e.createSlug = d;
		} catch {}
	})(e);
} }), fe = ce({ "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(e, t) {
	A(), t.exports = de();
} });
A(), A(), A(), A(), A(), A(), A(), A();
function pe(e) {
	let t = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
	return t === "index" && e.__file?.endsWith("index.vue") ? "" : t;
}
function me(e) {
	let t = e.__file;
	if (t) return ee(_(t, ".vue"));
}
function he(e, t) {
	return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function ge(e) {
	if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__) return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
	if (e.root) return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function _e(e) {
	let t = e.subTree?.type, n = ge(e);
	return n ? n?.types?.Fragment === t : !1;
}
function ve(e) {
	let t = pe(e?.type || {});
	if (t) return t;
	if (e?.root === e) return "Root";
	for (let t in e.parent?.type?.components) if (e.parent.type.components[t] === e?.type) return he(e, t);
	for (let t in e.appContext?.components) if (e.appContext.components[t] === e?.type) return he(e, t);
	return me(e?.type || {}) || "Anonymous Component";
}
function ye(e) {
	return `${e?.appContext?.app?.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__ ?? 0}:${e === e?.root ? "root" : e.uid}`;
}
function be(e, t) {
	return t ||= `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function xe() {
	let e = {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		get width() {
			return e.right - e.left;
		},
		get height() {
			return e.bottom - e.top;
		}
	};
	return e;
}
var Se;
function Ce(e) {
	return Se ||= document.createRange(), Se.selectNode(e), Se.getBoundingClientRect();
}
function we(e) {
	let t = xe();
	if (!e.children) return t;
	for (let n = 0, r = e.children.length; n < r; n++) {
		let r = e.children[n], i;
		if (r.component) i = j(r.component);
		else if (r.el) {
			let e = r.el;
			e.nodeType === 1 || e.getBoundingClientRect ? i = e.getBoundingClientRect() : e.nodeType === 3 && e.data.trim() && (i = Ce(e));
		}
		i && Te(t, i);
	}
	return t;
}
function Te(e, t) {
	return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var Ee = {
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	width: 0,
	height: 0
};
function j(e) {
	let t = e.subTree.el;
	return typeof window > "u" ? Ee : _e(e) ? we(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? j(e.subTree.component) : Ee;
}
A();
function De(e) {
	return _e(e) ? Oe(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function Oe(e) {
	if (!e.children) return [];
	let t = [];
	return e.children.forEach((e) => {
		e.component ? t.push(...De(e.component)) : e?.el && t.push(e.el);
	}), t;
}
var ke = "__vue-devtools-component-inspector__", Ae = "__vue-devtools-component-inspector__card__", je = "__vue-devtools-component-inspector__name__", Me = "__vue-devtools-component-inspector__indicator__", Ne = {
	display: "block",
	zIndex: 2147483640,
	position: "fixed",
	backgroundColor: "#42b88325",
	border: "1px solid #42b88350",
	borderRadius: "5px",
	transition: "all 0.1s ease-in",
	pointerEvents: "none"
}, Pe = {
	fontFamily: "Arial, Helvetica, sans-serif",
	padding: "5px 8px",
	borderRadius: "4px",
	textAlign: "left",
	position: "absolute",
	left: 0,
	color: "#e9e9e9",
	fontSize: "14px",
	fontWeight: 600,
	lineHeight: "24px",
	backgroundColor: "#42b883",
	boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
}, Fe = {
	display: "inline-block",
	fontWeight: 400,
	fontStyle: "normal",
	fontSize: "12px",
	opacity: .7
};
function M() {
	return document.getElementById(ke);
}
function Ie() {
	return document.getElementById(Ae);
}
function Le() {
	return document.getElementById(Me);
}
function Re() {
	return document.getElementById(je);
}
function ze(e) {
	return {
		left: `${Math.round(e.left * 100) / 100}px`,
		top: `${Math.round(e.top * 100) / 100}px`,
		width: `${Math.round(e.width * 100) / 100}px`,
		height: `${Math.round(e.height * 100) / 100}px`
	};
}
function Be(e) {
	let t = document.createElement("div");
	t.id = e.elementId ?? ke, Object.assign(t.style, {
		...Ne,
		...ze(e.bounds),
		...e.style
	});
	let n = document.createElement("span");
	n.id = Ae, Object.assign(n.style, {
		...Pe,
		top: e.bounds.top < 35 ? 0 : "-35px"
	});
	let r = document.createElement("span");
	r.id = je, r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
	let i = document.createElement("i");
	return i.id = Me, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(i.style, Fe), n.appendChild(r), n.appendChild(i), t.appendChild(n), document.body.appendChild(t), t;
}
function Ve(e) {
	let t = M(), n = Ie(), r = Re(), i = Le();
	t && (Object.assign(t.style, {
		...Ne,
		...ze(e.bounds)
	}), Object.assign(n.style, { top: e.bounds.top < 35 ? 0 : "-35px" }), r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function He(e) {
	let t = j(e);
	if (!t.width && !t.height) return;
	let n = ve(e);
	M() ? Ve({
		bounds: t,
		name: n
	}) : Be({
		bounds: t,
		name: n
	});
}
function Ue() {
	let e = M();
	e && (e.style.display = "none");
}
var We = null;
function Ge(e) {
	let t = e.target;
	if (t) {
		let e = t.__vueParentComponent;
		if (e && (We = e, e.vnode.el)) {
			let t = j(e), n = ve(e);
			M() ? Ve({
				bounds: t,
				name: n
			}) : Be({
				bounds: t,
				name: n
			});
		}
	}
}
function Ke(e, t) {
	e.preventDefault(), e.stopPropagation(), We && t(ye(We));
}
var N = null;
function qe() {
	Ue(), window.removeEventListener("mouseover", Ge), window.removeEventListener("click", N, !0), N = null;
}
function Je() {
	return window.addEventListener("mouseover", Ge), new Promise((e) => {
		function t(n) {
			n.preventDefault(), n.stopPropagation(), Ke(n, (n) => {
				window.removeEventListener("click", t, !0), N = null, window.removeEventListener("mouseover", Ge);
				let r = M();
				r && (r.style.display = "none"), e(JSON.stringify({ id: n }));
			});
		}
		N = t, window.addEventListener("click", t, !0);
	});
}
function Ye(e) {
	let t = be(R.value, e.id);
	if (t) {
		let [n] = De(t);
		if (typeof n.scrollIntoView == "function") n.scrollIntoView({ behavior: "smooth" });
		else {
			let e = j(t), n = document.createElement("div"), r = {
				...ze(e),
				position: "absolute"
			};
			Object.assign(n.style, r), document.body.appendChild(n), n.scrollIntoView({ behavior: "smooth" }), setTimeout(() => {
				document.body.removeChild(n);
			}, 2e3);
		}
		setTimeout(() => {
			let n = j(t);
			if (n.width || n.height) {
				let r = ve(t), i = M();
				i ? Ve({
					...e,
					name: r,
					bounds: n
				}) : Be({
					...e,
					name: r,
					bounds: n
				}), setTimeout(() => {
					i && (i.style.display = "none");
				}, 1500);
			}
		}, 1200);
	}
}
A();
var Xe;
(Xe = p).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ ?? (Xe.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0);
function Ze(e) {
	let t = 0, n = setInterval(() => {
		p.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= 5e3 && clearInterval(n);
	}, 30);
}
function Qe() {
	let e = p.__VUE_INSPECTOR__, t = e.openInEditor;
	e.openInEditor = async (...n) => {
		e.disable(), t(...n);
	};
}
function $e() {
	return new Promise((e) => {
		function t() {
			Qe(), e(p.__VUE_INSPECTOR__);
		}
		p.__VUE_INSPECTOR__ ? t() : Ze(() => {
			t();
		});
	});
}
A(), A();
function et(e) {
	return !!(e && e.__v_isReadonly);
}
function tt(e) {
	return et(e) ? tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function nt(e) {
	return !!(e && e.__v_isRef === !0);
}
function P(e) {
	let t = e && e.__v_raw;
	return t ? P(t) : e;
}
var rt = class {
	constructor() {
		this.refEditor = new it();
	}
	set(e, t, n, r) {
		let i = Array.isArray(t) ? t : t.split(".");
		for (; i.length > 1;) {
			let t = i.shift();
			e = e instanceof Map ? e.get(t) : e instanceof Set ? Array.from(e.values())[t] : e[t], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
		}
		let a = i[0], o = this.refEditor.get(e)[a];
		r ? r(e, a, n) : this.refEditor.isRef(o) ? this.refEditor.set(o, n) : e[a] = n;
	}
	get(e, t) {
		let n = Array.isArray(t) ? t : t.split(".");
		for (let t = 0; t < n.length; t++) if (e = e instanceof Map ? e.get(n[t]) : e[n[t]], this.refEditor.isRef(e) && (e = this.refEditor.get(e)), !e) return;
		return e;
	}
	has(e, t, n = !1) {
		if (e === void 0) return !1;
		let r = Array.isArray(t) ? t.slice() : t.split("."), i = n ? 2 : 1;
		for (; e && r.length > i;) {
			let t = r.shift();
			e = e[t], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
		}
		return e != null && Object.prototype.hasOwnProperty.call(e, r[0]);
	}
	createDefaultSetCallback(e) {
		return (t, n, r) => {
			if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : P(t) instanceof Map ? t.delete(n) : P(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
				let i = t[e.newKey || n];
				this.refEditor.isRef(i) ? this.refEditor.set(i, r) : P(t) instanceof Map ? t.set(e.newKey || n, r) : P(t) instanceof Set ? t.add(r) : t[e.newKey || n] = r;
			}
		};
	}
}, it = class {
	set(e, t) {
		if (nt(e)) e.value = t;
		else {
			if (e instanceof Set && Array.isArray(t)) {
				e.clear(), t.forEach((t) => e.add(t));
				return;
			}
			let n = Object.keys(t);
			if (e instanceof Map) {
				let r = new Set(e.keys());
				n.forEach((n) => {
					e.set(n, Reflect.get(t, n)), r.delete(n);
				}), r.forEach((t) => e.delete(t));
				return;
			}
			let r = new Set(Object.keys(e));
			n.forEach((n) => {
				Reflect.set(e, n, Reflect.get(t, n)), r.delete(n);
			}), r.forEach((t) => Reflect.deleteProperty(e, t));
		}
	}
	get(e) {
		return nt(e) ? e.value : e;
	}
	isRef(e) {
		return nt(e) || tt(e);
	}
};
new rt(), A(), A(), A();
var at = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function ot() {
	if (typeof window > "u" || !f || typeof localStorage > "u" || localStorage === null) return {
		recordingState: !1,
		mouseEventEnabled: !1,
		keyboardEventEnabled: !1,
		componentEventEnabled: !1,
		performanceEventEnabled: !1,
		selected: ""
	};
	let e = localStorage.getItem === void 0 ? null : localStorage.getItem(at);
	return e ? JSON.parse(e) : {
		recordingState: !1,
		mouseEventEnabled: !1,
		keyboardEventEnabled: !1,
		componentEventEnabled: !1,
		performanceEventEnabled: !1,
		selected: ""
	};
}
A(), A(), A();
var st;
(st = p).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS ?? (st.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var ct = new Proxy(p.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, { get(e, t, n) {
	return Reflect.get(e, t, n);
} });
function lt(e, t) {
	z.timelineLayersState[t.id] = !1, ct.push({
		...e,
		descriptorId: t.id,
		appRecord: ge(t.app)
	});
}
var ut;
(ut = p).__VUE_DEVTOOLS_KIT_INSPECTOR__ ?? (ut.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var dt = new Proxy(p.__VUE_DEVTOOLS_KIT_INSPECTOR__, { get(e, t, n) {
	return Reflect.get(e, t, n);
} }), ft = b(() => {
	H.hooks.callHook("sendInspectorToClient", mt());
});
function pt(e, t) {
	dt.push({
		options: e,
		descriptor: t,
		treeFilterPlaceholder: e.treeFilterPlaceholder ?? "Search tree...",
		stateFilterPlaceholder: e.stateFilterPlaceholder ?? "Search state...",
		treeFilter: "",
		selectedNodeId: "",
		appRecord: ge(t.app)
	}), ft();
}
function mt() {
	return dt.filter((e) => e.descriptor.app === R.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
		let t = e.descriptor, n = e.options;
		return {
			id: n.id,
			label: n.label,
			logo: t.logo,
			icon: `custom-ic-baseline-${(n?.icon)?.replace(/_/g, "-")}`,
			packageName: t.packageName,
			homepage: t.homepage,
			pluginId: t.id
		};
	});
}
function F(e, t) {
	return dt.find((n) => n.options.id === e && (!t || n.descriptor.app === t));
}
function ht() {
	let e = O();
	e.hook("addInspector", ({ inspector: e, plugin: t }) => {
		pt(e, t.descriptor);
	});
	let t = b(async ({ inspectorId: t, plugin: n }) => {
		if (!t || !n?.descriptor?.app || z.highPerfModeEnabled) return;
		let r = F(t, n.descriptor.app), i = {
			app: n.descriptor.app,
			inspectorId: t,
			filter: r?.treeFilter || "",
			rootNodes: []
		};
		await new Promise((t) => {
			e.callHookWith(async (e) => {
				await Promise.all(e.map((e) => e(i))), t();
			}, "getInspectorTree");
		}), e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e({
				inspectorId: t,
				rootNodes: i.rootNodes
			})));
		}, "sendInspectorTreeToClient");
	}, 120);
	e.hook("sendInspectorTree", t);
	let n = b(async ({ inspectorId: t, plugin: n }) => {
		if (!t || !n?.descriptor?.app || z.highPerfModeEnabled) return;
		let r = F(t, n.descriptor.app), i = {
			app: n.descriptor.app,
			inspectorId: t,
			nodeId: r?.selectedNodeId || "",
			state: null
		}, a = { currentTab: `custom-inspector:${t}` };
		i.nodeId && await new Promise((t) => {
			e.callHookWith(async (e) => {
				await Promise.all(e.map((e) => e(i, a))), t();
			}, "getInspectorState");
		}), e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e({
				inspectorId: t,
				nodeId: i.nodeId,
				state: i.state
			})));
		}, "sendInspectorStateToClient");
	}, 120);
	return e.hook("sendInspectorState", n), e.hook("customInspectorSelectNode", ({ inspectorId: e, nodeId: t, plugin: n }) => {
		let r = F(e, n.descriptor.app);
		r && (r.selectedNodeId = t);
	}), e.hook("timelineLayerAdded", ({ options: e, plugin: t }) => {
		lt(e, t.descriptor);
	}), e.hook("timelineEventAdded", ({ options: t, plugin: n }) => {
		z.highPerfModeEnabled || !z.timelineLayersState?.[n.descriptor.id] && ![
			"performance",
			"component-event",
			"keyboard",
			"mouse"
		].includes(t.layerId) || e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e(t)));
		}, "sendTimelineEventToClient");
	}), e.hook("getComponentInstances", async ({ app: e }) => {
		let t = e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
		if (!t) return null;
		let n = t.id.toString();
		return [...t.instanceMap].filter(([e]) => e.split(":")[0] === n).map(([, e]) => e);
	}), e.hook("getComponentBounds", async ({ instance: e }) => j(e)), e.hook("getComponentName", ({ instance: e }) => ve(e)), e.hook("componentHighlight", ({ uid: e }) => {
		let t = R.value.instanceMap.get(e);
		t && He(t);
	}), e.hook("componentUnhighlight", () => {
		Ue();
	}), e;
}
var gt;
(gt = p).__VUE_DEVTOOLS_KIT_APP_RECORDS__ ?? (gt.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var _t;
(_t = p).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ ?? (_t.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var vt;
(vt = p).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ ?? (vt.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var yt;
(yt = p).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ ?? (yt.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var bt;
(bt = p).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ ?? (bt.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var I = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function xt() {
	return {
		connected: !1,
		clientConnected: !1,
		vitePluginDetected: !0,
		appRecords: [],
		activeAppRecordId: "",
		tabs: [],
		commands: [],
		highPerfModeEnabled: !0,
		devtoolsClientDetected: {},
		perfUniqueGroupId: 0,
		timelineLayersState: ot()
	};
}
var St;
(St = p)[I] ?? (St[I] = xt());
var Ct = b((e) => {
	H.hooks.callHook("devtoolsStateUpdated", { state: e });
});
b((e, t) => {
	H.hooks.callHook("devtoolsConnectedUpdated", {
		state: e,
		oldState: t
	});
});
var L = new Proxy(p.__VUE_DEVTOOLS_KIT_APP_RECORDS__, { get(e, t, n) {
	return t === "value" ? p.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : p.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
} }), R = new Proxy(p.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, { get(e, t, n) {
	return t === "value" ? p.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? p.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : p.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
} });
function wt() {
	Ct({
		...p[I],
		appRecords: L.value,
		activeAppRecordId: R.id,
		tabs: p.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
		commands: p.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
	});
}
function Tt(e) {
	p.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, wt();
}
function Et(e) {
	p.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, wt();
}
var z = new Proxy(p[I], {
	get(e, t) {
		return t === "appRecords" ? L : t === "activeAppRecordId" ? R.id : t === "tabs" ? p.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? p.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : p[I][t];
	},
	deleteProperty(e, t) {
		return delete e[t], !0;
	},
	set(e, t, n) {
		return { ...p[I] }, e[t] = n, p[I][t] = n, !0;
	}
});
function Dt(e = {}) {
	let { file: t, host: n, baseUrl: r = window.location.origin, line: i = 0, column: a = 0 } = e;
	if (t) {
		if (n === "chrome-extension") {
			let e = t.replace(/\\/g, "\\\\"), n = window.VUE_DEVTOOLS_CONFIG?.openInEditorHost ?? "/";
			fetch(`${n}__open-in-editor?file=${encodeURI(t)}`).then((t) => {
				if (!t.ok) {
					let t = `Opening component ${e} failed`;
					console.log(`%c${t}`, "color:red");
				}
			});
		} else if (z.vitePluginDetected) {
			let e = p.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__ ?? r;
			p.__VUE_INSPECTOR__.openInEditor(e, t, i, a);
		}
	}
}
A(), A(), A(), A(), A();
var Ot;
(Ot = p).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ ?? (Ot.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var kt = new Proxy(p.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, { get(e, t, n) {
	return Reflect.get(e, t, n);
} });
function At(e) {
	let t = {};
	return Object.keys(e).forEach((n) => {
		t[n] = e[n].defaultValue;
	}), t;
}
function jt(e) {
	return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function Mt(e) {
	return (kt.find((t) => t[0].id === e && !!t[0]?.settings)?.[0] ?? null)?.settings ?? null;
}
function Nt(e, t) {
	let n = jt(e);
	if (n) {
		let e = localStorage.getItem(n);
		if (e) return JSON.parse(e);
	}
	return At(e ? (kt.find((t) => t[0].id === e)?.[0] ?? null)?.settings ?? {} : t);
}
function Pt(e, t) {
	let n = jt(e);
	localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(At(t)));
}
function Ft(e, t, n) {
	let r = jt(e), i = localStorage.getItem(r), a = JSON.parse(i || "{}"), o = {
		...a,
		[t]: n
	};
	localStorage.setItem(r, JSON.stringify(o)), H.hooks.callHookWith((r) => {
		r.forEach((r) => r({
			pluginId: e,
			key: t,
			oldValue: a[t],
			newValue: n,
			settings: o
		}));
	}, "setPluginSettings");
}
A();
var It, B = (It = p).__VUE_DEVTOOLS_HOOK ?? (It.__VUE_DEVTOOLS_HOOK = O()), Lt = {
	on: {
		vueAppInit(e) {
			B.hook("app:init", e);
		},
		vueAppUnmount(e) {
			B.hook("app:unmount", e);
		},
		vueAppConnected(e) {
			B.hook("app:connected", e);
		},
		componentAdded(e) {
			return B.hook("component:added", e);
		},
		componentEmit(e) {
			return B.hook("component:emit", e);
		},
		componentUpdated(e) {
			return B.hook("component:updated", e);
		},
		componentRemoved(e) {
			return B.hook("component:removed", e);
		},
		setupDevtoolsPlugin(e) {
			B.hook("devtools-plugin:setup", e);
		},
		perfStart(e) {
			return B.hook("perf:start", e);
		},
		perfEnd(e) {
			return B.hook("perf:end", e);
		}
	},
	setupDevToolsPlugin(e, t) {
		return B.callHook("devtools-plugin:setup", e, t);
	}
}, Rt = class {
	constructor({ plugin: e, ctx: t }) {
		this.hooks = t.hooks, this.plugin = e;
	}
	get on() {
		return {
			visitComponentTree: (e) => {
				this.hooks.hook("visitComponentTree", e);
			},
			inspectComponent: (e) => {
				this.hooks.hook("inspectComponent", e);
			},
			editComponentState: (e) => {
				this.hooks.hook("editComponentState", e);
			},
			getInspectorTree: (e) => {
				this.hooks.hook("getInspectorTree", e);
			},
			getInspectorState: (e) => {
				this.hooks.hook("getInspectorState", e);
			},
			editInspectorState: (e) => {
				this.hooks.hook("editInspectorState", e);
			},
			inspectTimelineEvent: (e) => {
				this.hooks.hook("inspectTimelineEvent", e);
			},
			timelineCleared: (e) => {
				this.hooks.hook("timelineCleared", e);
			},
			setPluginSettings: (e) => {
				this.hooks.hook("setPluginSettings", e);
			}
		};
	}
	notifyComponentUpdate(e) {
		if (z.highPerfModeEnabled) return;
		let t = mt().find((e) => e.packageName === this.plugin.descriptor.packageName);
		if (t?.id) {
			if (e) {
				let t = [
					e.appContext.app,
					e.uid,
					e.parent?.uid,
					e
				];
				B.callHook("component:updated", ...t);
			} else B.callHook("component:updated");
			this.hooks.callHook("sendInspectorState", {
				inspectorId: t.id,
				plugin: this.plugin
			});
		}
	}
	addInspector(e) {
		this.hooks.callHook("addInspector", {
			inspector: e,
			plugin: this.plugin
		}), this.plugin.descriptor.settings && Pt(e.id, this.plugin.descriptor.settings);
	}
	sendInspectorTree(e) {
		z.highPerfModeEnabled || this.hooks.callHook("sendInspectorTree", {
			inspectorId: e,
			plugin: this.plugin
		});
	}
	sendInspectorState(e) {
		z.highPerfModeEnabled || this.hooks.callHook("sendInspectorState", {
			inspectorId: e,
			plugin: this.plugin
		});
	}
	selectInspectorNode(e, t) {
		this.hooks.callHook("customInspectorSelectNode", {
			inspectorId: e,
			nodeId: t,
			plugin: this.plugin
		});
	}
	visitComponentTree(e) {
		return this.hooks.callHook("visitComponentTree", e);
	}
	now() {
		return z.highPerfModeEnabled ? 0 : Date.now();
	}
	addTimelineLayer(e) {
		this.hooks.callHook("timelineLayerAdded", {
			options: e,
			plugin: this.plugin
		});
	}
	addTimelineEvent(e) {
		z.highPerfModeEnabled || this.hooks.callHook("timelineEventAdded", {
			options: e,
			plugin: this.plugin
		});
	}
	getSettings(e) {
		return Nt(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
	}
	getComponentInstances(e) {
		return this.hooks.callHook("getComponentInstances", { app: e });
	}
	getComponentBounds(e) {
		return this.hooks.callHook("getComponentBounds", { instance: e });
	}
	getComponentName(e) {
		return this.hooks.callHook("getComponentName", { instance: e });
	}
	highlightElement(e) {
		let t = e.__VUE_DEVTOOLS_NEXT_UID__;
		return this.hooks.callHook("componentHighlight", { uid: t });
	}
	unhighlightElement() {
		return this.hooks.callHook("componentUnhighlight");
	}
};
A(), A(), A(), A();
var zt = "__vue_devtool_undefined__", Bt = "__vue_devtool_infinity__", Vt = "__vue_devtool_negative_infinity__", Ht = "__vue_devtool_nan__";
A(), A(), Object.entries({
	[zt]: "undefined",
	[Ht]: "NaN",
	[Bt]: "Infinity",
	[Vt]: "-Infinity"
}).reduce((e, [t, n]) => (e[n] = t, e), {}), A(), A(), A(), A(), A();
var Ut;
(Ut = p).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ ?? (Ut.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function Wt(e, t) {
	return Lt.setupDevToolsPlugin(e, t);
}
function Gt(e, t) {
	let [n, r] = e;
	if (n.app !== t) return;
	let i = new Rt({
		plugin: {
			setupFn: r,
			descriptor: n
		},
		ctx: H
	});
	n.packageName === "vuex" && i.on.editInspectorState((e) => {
		i.sendInspectorState(e.inspectorId);
	}), r(i);
}
function Kt(e, t) {
	p.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || z.highPerfModeEnabled && !t?.inspectingComponent || (p.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), kt.forEach((t) => {
		Gt(t, e);
	}));
}
A(), A();
var qt = "__VUE_DEVTOOLS_ROUTER__", V = "__VUE_DEVTOOLS_ROUTER_INFO__", Jt;
(Jt = p).__VUE_DEVTOOLS_ROUTER_INFO__ ?? (Jt.__VUE_DEVTOOLS_ROUTER_INFO__ = {
	currentRoute: null,
	routes: []
});
var Yt;
(Yt = p).__VUE_DEVTOOLS_ROUTER__ ?? (Yt.__VUE_DEVTOOLS_ROUTER__ = {}), new Proxy(p[V], { get(e, t) {
	return p[V][t];
} }), new Proxy(p[qt], { get(e, t) {
	if (t === "value") return p[qt];
} });
function Xt(e) {
	let t = /* @__PURE__ */ new Map();
	return (e?.getRoutes() || []).filter((e) => !t.has(e.path) && t.set(e.path, 1));
}
function Zt(e) {
	return e.map((e) => {
		let { path: t, name: n, children: r, meta: i } = e;
		return r?.length && (r = Zt(r)), {
			path: t,
			name: n,
			children: r,
			meta: i
		};
	});
}
function Qt(e) {
	if (e) {
		let { fullPath: t, hash: n, href: r, path: i, name: a, matched: o, params: s, query: c } = e;
		return {
			fullPath: t,
			hash: n,
			href: r,
			path: i,
			name: a,
			params: s,
			query: c,
			matched: Zt(o)
		};
	}
	return e;
}
function $t(e, t) {
	function n() {
		let t = e.app?.config.globalProperties.$router, n = Qt(t?.currentRoute.value), r = Zt(Xt(t)), i = console.warn;
		console.warn = () => {}, p[V] = {
			currentRoute: n ? v(n) : {},
			routes: v(r)
		}, p[qt] = t, console.warn = i;
	}
	n(), Lt.on.componentUpdated(b(() => {
		t.value?.app === e.app && (n(), !z.highPerfModeEnabled && H.hooks.callHook("routerInfoUpdated", { state: p[V] }));
	}, 200));
}
function en(e) {
	return {
		async getInspectorTree(t) {
			let n = {
				...t,
				app: R.value.app,
				rootNodes: []
			};
			return await new Promise((t) => {
				e.callHookWith(async (e) => {
					await Promise.all(e.map((e) => e(n))), t();
				}, "getInspectorTree");
			}), n.rootNodes;
		},
		async getInspectorState(t) {
			let n = {
				...t,
				app: R.value.app,
				state: null
			}, r = { currentTab: `custom-inspector:${t.inspectorId}` };
			return await new Promise((t) => {
				e.callHookWith(async (e) => {
					await Promise.all(e.map((e) => e(n, r))), t();
				}, "getInspectorState");
			}), n.state;
		},
		editInspectorState(t) {
			let n = new rt(), r = {
				...t,
				app: R.value.app,
				set: (e, r = t.path, i = t.state.value, a) => {
					n.set(e, r, i, a || n.createDefaultSetCallback(t.state));
				}
			};
			e.callHookWith((e) => {
				e.forEach((e) => e(r));
			}, "editInspectorState");
		},
		sendInspectorState(t) {
			let n = F(t);
			e.callHook("sendInspectorState", {
				inspectorId: t,
				plugin: {
					descriptor: n.descriptor,
					setupFn: () => ({})
				}
			});
		},
		inspectComponentInspector() {
			return Je();
		},
		cancelInspectComponentInspector() {
			return qe();
		},
		getComponentRenderCode(e) {
			let t = be(R.value, e);
			if (t) return typeof t?.type == "function" ? t.type.toString() : t.render.toString();
		},
		scrollToComponent(e) {
			return Ye({ id: e });
		},
		openInEditor: Dt,
		getVueInspector: $e,
		toggleApp(e, t) {
			let n = L.value.find((t) => t.id === e);
			n && (Et(e), Tt(n), $t(n, R), ft(), Kt(n.app, t));
		},
		inspectDOM(e) {
			let t = be(R.value, e);
			if (t) {
				let [e] = De(t);
				e && (p.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = e);
			}
		},
		updatePluginSettings(e, t, n) {
			Ft(e, t, n);
		},
		getPluginSettings(e) {
			return {
				options: Mt(e),
				values: Nt(e)
			};
		}
	};
}
A();
var tn;
(tn = p).__VUE_DEVTOOLS_ENV__ ?? (tn.__VUE_DEVTOOLS_ENV__ = { vitePluginDetected: !1 });
var nn = ht(), rn;
(rn = p).__VUE_DEVTOOLS_KIT_CONTEXT__ ?? (rn.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
	hooks: nn,
	get state() {
		return {
			...z,
			activeAppRecordId: R.id,
			activeAppRecord: R.value,
			appRecords: L.value
		};
	},
	api: en(nn)
});
var H = p.__VUE_DEVTOOLS_KIT_CONTEXT__;
A(), ue(fe(), 1);
var an;
(an = p).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ ?? (an.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
	id: 0,
	appIds: /* @__PURE__ */ new Set()
}), A(), A();
function on(e) {
	z.highPerfModeEnabled = e ?? !z.highPerfModeEnabled, !e && R.value && Kt(R.value.app);
}
A(), A(), A();
function sn(e) {
	z.devtoolsClientDetected = {
		...z.devtoolsClientDetected,
		...e
	}, on(!Object.values(z.devtoolsClientDetected).some(Boolean));
}
var cn;
(cn = p).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ ?? (cn.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = sn), A(), A(), A(), A(), A(), A();
var ln = class {
	constructor() {
		this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
	}
	set(e, t) {
		this.keyToValue.set(e, t), this.valueToKey.set(t, e);
	}
	getByKey(e) {
		return this.keyToValue.get(e);
	}
	getByValue(e) {
		return this.valueToKey.get(e);
	}
	clear() {
		this.keyToValue.clear(), this.valueToKey.clear();
	}
}, un = class {
	constructor(e) {
		this.generateIdentifier = e, this.kv = new ln();
	}
	register(e, t) {
		this.kv.getByValue(e) || (t ||= this.generateIdentifier(e), this.kv.set(t, e));
	}
	clear() {
		this.kv.clear();
	}
	getIdentifier(e) {
		return this.kv.getByValue(e);
	}
	getValue(e) {
		return this.kv.getByKey(e);
	}
}, dn = class extends un {
	constructor() {
		super((e) => e.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
	}
	register(e, t) {
		typeof t == "object" ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps), super.register(e, t.identifier)) : super.register(e, t);
	}
	getAllowedProps(e) {
		return this.classToAllowedProps.get(e);
	}
};
A(), A();
function fn(e) {
	if ("values" in Object) return Object.values(e);
	let t = [];
	for (let n in e) e.hasOwnProperty(n) && t.push(e[n]);
	return t;
}
function pn(e, t) {
	let n = fn(e);
	if ("find" in n) return n.find(t);
	let r = n;
	for (let e = 0; e < r.length; e++) {
		let n = r[e];
		if (t(n)) return n;
	}
}
function U(e, t) {
	Object.entries(e).forEach(([e, n]) => t(n, e));
}
function W(e, t) {
	return e.indexOf(t) !== -1;
}
function mn(e, t) {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (t(r)) return r;
	}
}
var hn = class {
	constructor() {
		this.transfomers = {};
	}
	register(e) {
		this.transfomers[e.name] = e;
	}
	findApplicable(e) {
		return pn(this.transfomers, (t) => t.isApplicable(e));
	}
	findByName(e) {
		return this.transfomers[e];
	}
};
A(), A();
var gn = (e) => Object.prototype.toString.call(e).slice(8, -1), _n = (e) => e === void 0, vn = (e) => e === null, G = (e) => typeof e != "object" || !e || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null || Object.getPrototypeOf(e) === Object.prototype, yn = (e) => G(e) && Object.keys(e).length === 0, K = (e) => Array.isArray(e), bn = (e) => typeof e == "string", xn = (e) => typeof e == "number" && !isNaN(e), Sn = (e) => typeof e == "boolean", Cn = (e) => e instanceof RegExp, q = (e) => e instanceof Map, J = (e) => e instanceof Set, wn = (e) => gn(e) === "Symbol", Tn = (e) => e instanceof Date && !isNaN(e.valueOf()), En = (e) => e instanceof Error, Dn = (e) => typeof e == "number" && isNaN(e), On = (e) => Sn(e) || vn(e) || _n(e) || xn(e) || bn(e) || wn(e), kn = (e) => typeof e == "bigint", An = (e) => e === Infinity || e === -Infinity, jn = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), Mn = (e) => e instanceof URL;
A();
var Nn = (e) => e.replace(/\./g, "\\."), Pn = (e) => e.map(String).map(Nn).join("."), Y = (e) => {
	let t = [], n = "";
	for (let r = 0; r < e.length; r++) {
		let i = e.charAt(r);
		if (i === "\\" && e.charAt(r + 1) === ".") {
			n += ".", r++;
			continue;
		}
		if (i === ".") {
			t.push(n), n = "";
			continue;
		}
		n += i;
	}
	let r = n;
	return t.push(r), t;
};
A();
function X(e, t, n, r) {
	return {
		isApplicable: e,
		annotation: t,
		transform: n,
		untransform: r
	};
}
var Fn = [
	X(_n, "undefined", () => null, () => void 0),
	X(kn, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
	X(Tn, "Date", (e) => e.toISOString(), (e) => new Date(e)),
	X(En, "Error", (e, t) => {
		let n = {
			name: e.name,
			message: e.message
		};
		return t.allowedErrorProps.forEach((t) => {
			n[t] = e[t];
		}), n;
	}, (e, t) => {
		let n = Error(e.message);
		return n.name = e.name, n.stack = e.stack, t.allowedErrorProps.forEach((t) => {
			n[t] = e[t];
		}), n;
	}),
	X(Cn, "regexp", (e) => "" + e, (e) => {
		let t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
		return new RegExp(t, n);
	}),
	X(J, "set", (e) => [...e.values()], (e) => new Set(e)),
	X(q, "map", (e) => [...e.entries()], (e) => new Map(e)),
	X((e) => Dn(e) || An(e), "number", (e) => Dn(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
	X((e) => e === 0 && 1 / e == -Infinity, "number", () => "-0", Number),
	X(Mn, "URL", (e) => e.toString(), (e) => new URL(e))
];
function Z(e, t, n, r) {
	return {
		isApplicable: e,
		annotation: t,
		transform: n,
		untransform: r
	};
}
var In = Z((e, t) => wn(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
	let r = n.symbolRegistry.getValue(t[1]);
	if (!r) throw Error("Trying to deserialize unknown symbol");
	return r;
}), Ln = [
	Int8Array,
	Uint8Array,
	Int16Array,
	Uint16Array,
	Int32Array,
	Uint32Array,
	Float32Array,
	Float64Array,
	Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), Rn = Z(jn, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
	let n = Ln[t[1]];
	if (!n) throw Error("Trying to deserialize unknown typed array");
	return new n(e);
});
function zn(e, t) {
	return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var Bn = Z(zn, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
	let n = t.classRegistry.getAllowedProps(e.constructor);
	if (!n) return { ...e };
	let r = {};
	return n.forEach((t) => {
		r[t] = e[t];
	}), r;
}, (e, t, n) => {
	let r = n.classRegistry.getValue(t[1]);
	if (!r) throw Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
	return Object.assign(Object.create(r.prototype), e);
}), Vn = Z((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
	let r = n.customTransformerRegistry.findByName(t[1]);
	if (!r) throw Error("Trying to deserialize unknown custom value");
	return r.deserialize(e);
}), Hn = [
	Bn,
	In,
	Vn,
	Rn
], Un = (e, t) => {
	let n = mn(Hn, (n) => n.isApplicable(e, t));
	if (n) return {
		value: n.transform(e, t),
		type: n.annotation(e, t)
	};
	let r = mn(Fn, (n) => n.isApplicable(e, t));
	if (r) return {
		value: r.transform(e, t),
		type: r.annotation
	};
}, Wn = {};
Fn.forEach((e) => {
	Wn[e.annotation] = e;
});
var Gn = (e, t, n) => {
	if (K(t)) switch (t[0]) {
		case "symbol": return In.untransform(e, t, n);
		case "class": return Bn.untransform(e, t, n);
		case "custom": return Vn.untransform(e, t, n);
		case "typed-array": return Rn.untransform(e, t, n);
		default: throw Error("Unknown transformation: " + t);
	}
	else {
		let r = Wn[t];
		if (!r) throw Error("Unknown transformation: " + t);
		return r.untransform(e, n);
	}
};
A();
var Q = (e, t) => {
	if (t > e.size) throw Error("index out of bounds");
	let n = e.keys();
	for (; t > 0;) n.next(), t--;
	return n.next().value;
};
function Kn(e) {
	if (W(e, "__proto__")) throw Error("__proto__ is not allowed as a property");
	if (W(e, "prototype")) throw Error("prototype is not allowed as a property");
	if (W(e, "constructor")) throw Error("constructor is not allowed as a property");
}
var qn = (e, t) => {
	Kn(t);
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (J(e)) e = Q(e, +r);
		else if (q(e)) {
			let i = +r, a = +t[++n] == 0 ? "key" : "value", o = Q(e, i);
			switch (a) {
				case "key":
					e = o;
					break;
				case "value": e = e.get(o);
			}
		} else e = e[r];
	}
	return e;
}, Jn = (e, t, n) => {
	if (Kn(t), t.length === 0) return n(e);
	let r = e;
	for (let e = 0; e < t.length - 1; e++) {
		let n = t[e];
		if (K(r)) {
			let e = +n;
			r = r[e];
		} else if (G(r)) r = r[n];
		else if (J(r)) {
			let e = +n;
			r = Q(r, e);
		} else if (q(r)) {
			if (e === t.length - 2) break;
			let i = +n, a = +t[++e] == 0 ? "key" : "value", o = Q(r, i);
			switch (a) {
				case "key":
					r = o;
					break;
				case "value": r = r.get(o);
			}
		}
	}
	let i = t[t.length - 1];
	if (K(r) ? r[+i] = n(r[+i]) : G(r) && (r[i] = n(r[i])), J(r)) {
		let e = Q(r, +i), t = n(e);
		e !== t && (r.delete(e), r.add(t));
	}
	if (q(r)) {
		let e = +t[t.length - 2], a = Q(r, e);
		switch (+i == 0 ? "key" : "value") {
			case "key": {
				let e = n(a);
				r.set(e, r.get(a)), e !== a && r.delete(a);
				break;
			}
			case "value": r.set(a, n(r.get(a)));
		}
	}
	return e;
};
function Yn(e, t, n = []) {
	if (!e) return;
	if (!K(e)) {
		U(e, (e, r) => Yn(e, t, [...n, ...Y(r)]));
		return;
	}
	let [r, i] = e;
	i && U(i, (e, r) => {
		Yn(e, t, [...n, ...Y(r)]);
	}), t(r, n);
}
function Xn(e, t, n) {
	return Yn(t, (t, r) => {
		e = Jn(e, r, (e) => Gn(e, t, n));
	}), e;
}
function Zn(e, t) {
	function n(t, n) {
		let r = qn(e, Y(n));
		t.map(Y).forEach((t) => {
			e = Jn(e, t, () => r);
		});
	}
	if (K(t)) {
		let [r, i] = t;
		r.forEach((t) => {
			e = Jn(e, Y(t), () => e);
		}), i && U(i, n);
	} else U(t, n);
	return e;
}
var Qn = (e, t) => G(e) || K(e) || q(e) || J(e) || zn(e, t);
function $n(e, t, n) {
	let r = n.get(e);
	r ? r.push(t) : n.set(e, [t]);
}
function er(e, t) {
	let n = {}, r;
	return e.forEach((e) => {
		if (e.length <= 1) return;
		t || (e = e.map((e) => e.map(String)).sort((e, t) => e.length - t.length));
		let [i, ...a] = e;
		i.length === 0 ? r = a.map(Pn) : n[Pn(i)] = a.map(Pn);
	}), r ? yn(n) ? [r] : [r, n] : yn(n) ? void 0 : n;
}
var tr = (e, t, n, r, i = [], a = [], o = /* @__PURE__ */ new Map()) => {
	let s = On(e);
	if (!s) {
		$n(e, i, t);
		let n = o.get(e);
		if (n) return r ? { transformedValue: null } : n;
	}
	if (!Qn(e, n)) {
		let t = Un(e, n), r = t ? {
			transformedValue: t.value,
			annotations: [t.type]
		} : { transformedValue: e };
		return s || o.set(e, r), r;
	}
	if (W(a, e)) return { transformedValue: null };
	let c = Un(e, n), l = c?.value ?? e, u = K(l) ? [] : {}, d = {};
	U(l, (s, c) => {
		if (c === "__proto__" || c === "constructor" || c === "prototype") throw Error(`Detected property ${c}. This is a prototype pollution risk, please remove it from your object.`);
		let l = tr(s, t, n, r, [...i, c], [...a, e], o);
		u[c] = l.transformedValue, K(l.annotations) ? d[c] = l.annotations : G(l.annotations) && U(l.annotations, (e, t) => {
			d[Nn(c) + "." + t] = e;
		});
	});
	let f = yn(d) ? {
		transformedValue: u,
		annotations: c ? [c.type] : void 0
	} : {
		transformedValue: u,
		annotations: c ? [c.type, d] : d
	};
	return s || o.set(e, f), f;
};
A(), A();
function nr(e) {
	return Object.prototype.toString.call(e).slice(8, -1);
}
function rr(e) {
	return nr(e) === "Array";
}
function ir(e) {
	if (nr(e) !== "Object") return !1;
	let t = Object.getPrototypeOf(e);
	return !!t && t.constructor === Object && t === Object.prototype;
}
function ar(e, t, n, r, i) {
	let a = {}.propertyIsEnumerable.call(r, t) ? "enumerable" : "nonenumerable";
	a === "enumerable" && (e[t] = n), i && a === "nonenumerable" && Object.defineProperty(e, t, {
		value: n,
		enumerable: !1,
		writable: !0,
		configurable: !0
	});
}
function or(e, t = {}) {
	if (rr(e)) return e.map((e) => or(e, t));
	if (!ir(e)) return e;
	let n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertySymbols(e);
	return [...n, ...r].reduce((n, r) => {
		if (rr(t.props) && !t.props.includes(r)) return n;
		let i = e[r];
		return ar(n, r, or(i, t), e, t.nonenumerable), n;
	}, {});
}
var $ = class {
	constructor({ dedupe: e = !1 } = {}) {
		this.classRegistry = new dn(), this.symbolRegistry = new un((e) => e.description ?? ""), this.customTransformerRegistry = new hn(), this.allowedErrorProps = [], this.dedupe = e;
	}
	serialize(e) {
		let t = /* @__PURE__ */ new Map(), n = tr(e, t, this, this.dedupe), r = { json: n.transformedValue };
		n.annotations && (r.meta = {
			...r.meta,
			values: n.annotations
		});
		let i = er(t, this.dedupe);
		return i && (r.meta = {
			...r.meta,
			referentialEqualities: i
		}), r;
	}
	deserialize(e) {
		let { json: t, meta: n } = e, r = or(t);
		return n?.values && (r = Xn(r, n.values, this)), n?.referentialEqualities && (r = Zn(r, n.referentialEqualities)), r;
	}
	stringify(e) {
		return JSON.stringify(this.serialize(e));
	}
	parse(e) {
		return this.deserialize(JSON.parse(e));
	}
	registerClass(e, t) {
		this.classRegistry.register(e, t);
	}
	registerSymbol(e, t) {
		this.symbolRegistry.register(e, t);
	}
	registerCustom(e, t) {
		this.customTransformerRegistry.register({
			name: t,
			...e
		});
	}
	allowErrorProps(...e) {
		this.allowedErrorProps.push(...e);
	}
};
$.defaultInstance = new $(), $.serialize = $.defaultInstance.serialize.bind($.defaultInstance), $.deserialize = $.defaultInstance.deserialize.bind($.defaultInstance), $.stringify = $.defaultInstance.stringify.bind($.defaultInstance), $.parse = $.defaultInstance.parse.bind($.defaultInstance), $.registerClass = $.defaultInstance.registerClass.bind($.defaultInstance), $.registerSymbol = $.defaultInstance.registerSymbol.bind($.defaultInstance), $.registerCustom = $.defaultInstance.registerCustom.bind($.defaultInstance), $.allowErrorProps = $.defaultInstance.allowErrorProps.bind($.defaultInstance), $.serialize, $.deserialize, $.stringify, $.parse, $.registerClass, $.registerCustom, $.registerSymbol, $.allowErrorProps, A(), A(), A(), A(), A(), A(), A(), A(), A(), A(), A(), A(), A(), A(), A();
var sr;
(sr = p).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ ?? (sr.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
var cr;
(cr = p).__VUE_DEVTOOLS_KIT_RPC_CLIENT__ ?? (cr.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
var lr;
(lr = p).__VUE_DEVTOOLS_KIT_RPC_SERVER__ ?? (lr.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
var ur;
(ur = p).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ ?? (ur.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
var dr;
(dr = p).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ ?? (dr.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
var fr;
(fr = p).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ ?? (fr.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null), A(), A(), A(), A();
//#endregion
export { Wt as setupDevtoolsPlugin };
