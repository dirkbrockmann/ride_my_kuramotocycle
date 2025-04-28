(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Ki = {
  display_type: "svg",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "1px solid black",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function Qt(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Vi(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Cr(t) {
  let n, e, r;
  t.length !== 2 ? (n = Qt, e = (s, u) => Qt(t(s), u), r = (s, u) => t(s) - u) : (n = t === Qt || t === Vi ? t : Zi, e = t, r = t);
  function i(s, u, l = 0, c = s.length) {
    if (l < c) {
      if (n(u, u) !== 0) return c;
      do {
        const f = l + c >>> 1;
        e(s[f], u) < 0 ? l = f + 1 : c = f;
      } while (l < c);
    }
    return l;
  }
  function o(s, u, l = 0, c = s.length) {
    if (l < c) {
      if (n(u, u) !== 0) return c;
      do {
        const f = l + c >>> 1;
        e(s[f], u) <= 0 ? l = f + 1 : c = f;
      } while (l < c);
    }
    return l;
  }
  function a(s, u, l = 0, c = s.length) {
    const f = i(s, u, l, c - 1);
    return f > l && r(s[f - 1], u) > -r(s[f], u) ? f - 1 : f;
  }
  return { left: i, center: a, right: o };
}
function Zi() {
  return 0;
}
function Wi(t) {
  return t === null ? NaN : +t;
}
const Ji = Cr(Qt), Qi = Ji.right;
Cr(Wi).center;
const ji = Math.sqrt(50), to = Math.sqrt(10), no = Math.sqrt(2);
function on(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= ji ? 10 : o >= to ? 5 : o >= no ? 2 : 1;
  let s, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / a, s = Math.round(t * l), u = Math.round(n * l), s / l < t && ++s, u / l > n && --u, l = -l) : (l = Math.pow(10, i) * a, s = Math.round(t / l), u = Math.round(n / l), s * l < t && ++s, u * l > n && --u), u < s && 0.5 <= e && e < 2 ? on(t, n, e * 2) : [s, u, l];
}
function eo(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? on(n, t, e) : on(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, u = new Array(s);
  if (r)
    if (a < 0) for (let l = 0; l < s; ++l) u[l] = (o - l) / -a;
    else for (let l = 0; l < s; ++l) u[l] = (o - l) * a;
  else if (a < 0) for (let l = 0; l < s; ++l) u[l] = (i + l) / -a;
  else for (let l = 0; l < s; ++l) u[l] = (i + l) * a;
  return u;
}
function Xn(t, n, e) {
  return n = +n, t = +t, e = +e, on(t, n, e)[2];
}
function ro(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Xn(n, t, e) : Xn(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Xt(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function io(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
var oo = { value: () => {
} };
function de() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new jt(e);
}
function jt(t) {
  this._ = t;
}
function ao(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
jt.prototype = de.prototype = {
  constructor: jt,
  on: function(t, n) {
    var e = this._, r = ao(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = so(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = He(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = He(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new jt(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function so(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function He(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = oo, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Gn = "http://www.w3.org/1999/xhtml";
const qe = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Gn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function _n(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), qe.hasOwnProperty(n) ? { space: qe[n], local: t } : t;
}
function uo(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Gn && n.documentElement.namespaceURI === Gn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function lo(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function kr(t) {
  var n = _n(t);
  return (n.local ? lo : uo)(n);
}
function fo() {
}
function pe(t) {
  return t == null ? fo : function() {
    return this.querySelector(t);
  };
}
function co(t) {
  typeof t != "function" && (t = pe(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), u, l, c = 0; c < a; ++c)
      (u = o[c]) && (l = t.call(u, u.__data__, c, o)) && ("__data__" in u && (l.__data__ = u.__data__), s[c] = l);
  return new O(r, this._parents);
}
function ho(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function po() {
  return [];
}
function Rr(t) {
  return t == null ? po : function() {
    return this.querySelectorAll(t);
  };
}
function go(t) {
  return function() {
    return ho(t.apply(this, arguments));
  };
}
function yo(t) {
  typeof t == "function" ? t = go(t) : t = Rr(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
  return new O(r, i);
}
function Fr(t) {
  return function() {
    return this.matches(t);
  };
}
function Lr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var _o = Array.prototype.find;
function mo(t) {
  return function() {
    return _o.call(this.children, t);
  };
}
function vo() {
  return this.firstElementChild;
}
function wo(t) {
  return this.select(t == null ? vo : mo(typeof t == "function" ? t : Lr(t)));
}
var bo = Array.prototype.filter;
function xo() {
  return Array.from(this.children);
}
function Mo(t) {
  return function() {
    return bo.call(this.children, t);
  };
}
function $o(t) {
  return this.selectAll(t == null ? xo : Mo(typeof t == "function" ? t : Lr(t)));
}
function Ao(t) {
  typeof t != "function" && (t = Fr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new O(r, this._parents);
}
function Dr(t) {
  return new Array(t.length);
}
function To() {
  return new O(this._enter || this._groups.map(Dr), this._parents);
}
function an(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
an.prototype = {
  constructor: an,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Po(t) {
  return function() {
    return t;
  };
}
function So(t, n, e, r, i, o) {
  for (var a = 0, s, u = n.length, l = o.length; a < l; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new an(t, o[a]);
  for (; a < u; ++a)
    (s = n[a]) && (i[a] = s);
}
function Eo(t, n, e, r, i, o, a) {
  var s, u, l = /* @__PURE__ */ new Map(), c = n.length, f = o.length, h = new Array(c), g;
  for (s = 0; s < c; ++s)
    (u = n[s]) && (h[s] = g = a.call(u, u.__data__, s, n) + "", l.has(g) ? i[s] = u : l.set(g, u));
  for (s = 0; s < f; ++s)
    g = a.call(t, o[s], s, o) + "", (u = l.get(g)) ? (r[s] = u, u.__data__ = o[s], l.delete(g)) : e[s] = new an(t, o[s]);
  for (s = 0; s < c; ++s)
    (u = n[s]) && l.get(h[s]) === u && (i[s] = u);
}
function No(t) {
  return t.__data__;
}
function zo(t, n) {
  if (!arguments.length) return Array.from(this, No);
  var e = n ? Eo : So, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Po(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var c = r[l], f = i[l], h = f.length, g = Io(t.call(c, c && c.__data__, l, r)), d = g.length, p = s[l] = new Array(d), b = a[l] = new Array(d), _ = u[l] = new Array(h);
    e(c, f, p, b, _, g, n);
    for (var x = 0, $ = 0, y, v; x < d; ++x)
      if (y = p[x]) {
        for (x >= $ && ($ = x + 1); !(v = b[$]) && ++$ < d; ) ;
        y._next = v || null;
      }
  }
  return a = new O(a, r), a._enter = s, a._exit = u, a;
}
function Io(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Oo() {
  return new O(this._exit || this._groups.map(Dr), this._parents);
}
function Co(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function ko(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var l = e[u], c = r[u], f = l.length, h = s[u] = new Array(f), g, d = 0; d < f; ++d)
      (g = l[d] || c[d]) && (h[d] = g);
  for (; u < i; ++u)
    s[u] = e[u];
  return new O(s, this._parents);
}
function Ro() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Fo(t) {
  t || (t = Lo);
  function n(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, u = i[o] = new Array(s), l, c = 0; c < s; ++c)
      (l = a[c]) && (u[c] = l);
    u.sort(n);
  }
  return new O(i, this._parents).order();
}
function Lo(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Do() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Ho() {
  return Array.from(this);
}
function qo() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Bo() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Xo() {
  return !this.node();
}
function Go(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Uo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Yo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ko(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Vo(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Zo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Wo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Jo(t, n) {
  var e = _n(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Yo : Uo : typeof n == "function" ? e.local ? Wo : Zo : e.local ? Vo : Ko)(e, n));
}
function Hr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Qo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function jo(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function ta(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function na(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Qo : typeof n == "function" ? ta : jo)(t, n, e ?? "")) : bt(this.node(), t);
}
function bt(t, n) {
  return t.style.getPropertyValue(n) || Hr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function ea(t) {
  return function() {
    delete this[t];
  };
}
function ra(t, n) {
  return function() {
    this[t] = n;
  };
}
function ia(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function oa(t, n) {
  return arguments.length > 1 ? this.each((n == null ? ea : typeof n == "function" ? ia : ra)(t, n)) : this.node()[t];
}
function qr(t) {
  return t.trim().split(/^|\s+/);
}
function ge(t) {
  return t.classList || new Br(t);
}
function Br(t) {
  this._node = t, this._names = qr(t.getAttribute("class") || "");
}
Br.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Xr(t, n) {
  for (var e = ge(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Gr(t, n) {
  for (var e = ge(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function aa(t) {
  return function() {
    Xr(this, t);
  };
}
function sa(t) {
  return function() {
    Gr(this, t);
  };
}
function ua(t, n) {
  return function() {
    (n.apply(this, arguments) ? Xr : Gr)(this, t);
  };
}
function la(t, n) {
  var e = qr(t + "");
  if (arguments.length < 2) {
    for (var r = ge(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? ua : n ? aa : sa)(e, n));
}
function fa() {
  this.textContent = "";
}
function ca(t) {
  return function() {
    this.textContent = t;
  };
}
function ha(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function da(t) {
  return arguments.length ? this.each(t == null ? fa : (typeof t == "function" ? ha : ca)(t)) : this.node().textContent;
}
function pa() {
  this.innerHTML = "";
}
function ga(t) {
  return function() {
    this.innerHTML = t;
  };
}
function ya(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function _a(t) {
  return arguments.length ? this.each(t == null ? pa : (typeof t == "function" ? ya : ga)(t)) : this.node().innerHTML;
}
function ma() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function va() {
  return this.each(ma);
}
function wa() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ba() {
  return this.each(wa);
}
function xa(t) {
  var n = typeof t == "function" ? t : kr(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Ma() {
  return null;
}
function $a(t, n) {
  var e = typeof t == "function" ? t : kr(t), r = n == null ? Ma : typeof n == "function" ? n : pe(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Aa() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ta() {
  return this.each(Aa);
}
function Pa() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Sa() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Ea(t) {
  return this.select(t ? Sa : Pa);
}
function Na(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function za(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Ia(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Oa(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Ca(t, n, e) {
  return function() {
    var r = this.__on, i, o = za(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function ka(t, n, e) {
  var r = Ia(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, l = s.length, c; u < l; ++u)
        for (i = 0, c = s[u]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? Ca : Oa, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function Ur(t, n, e) {
  var r = Hr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Ra(t, n) {
  return function() {
    return Ur(this, t, n);
  };
}
function Fa(t, n) {
  return function() {
    return Ur(this, t, n.apply(this, arguments));
  };
}
function La(t, n) {
  return this.each((typeof n == "function" ? Fa : Ra)(t, n));
}
function* Da() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Yr = [null];
function O(t, n) {
  this._groups = t, this._parents = n;
}
function Lt() {
  return new O([[document.documentElement]], Yr);
}
function Ha() {
  return this;
}
O.prototype = Lt.prototype = {
  constructor: O,
  select: co,
  selectAll: yo,
  selectChild: wo,
  selectChildren: $o,
  filter: Ao,
  data: zo,
  enter: To,
  exit: Oo,
  join: Co,
  merge: ko,
  selection: Ha,
  order: Ro,
  sort: Fo,
  call: Do,
  nodes: Ho,
  node: qo,
  size: Bo,
  empty: Xo,
  each: Go,
  attr: Jo,
  style: na,
  property: oa,
  classed: la,
  text: da,
  html: _a,
  raise: va,
  lower: ba,
  append: xa,
  insert: $a,
  remove: Ta,
  clone: Ea,
  datum: Na,
  on: ka,
  dispatch: La,
  [Symbol.iterator]: Da
};
function T(t) {
  return typeof t == "string" ? new O([[document.querySelector(t)]], [document.documentElement]) : new O([[t]], Yr);
}
function qa(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Un(t, n) {
  if (t = qa(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Ba = { passive: !1 }, zt = { capture: !0, passive: !1 };
function kn(t) {
  t.stopImmediatePropagation();
}
function vt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Xa(t) {
  var n = t.document.documentElement, e = T(t).on("dragstart.drag", vt, zt);
  "onselectstart" in n ? e.on("selectstart.drag", vt, zt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Ga(t, n) {
  var e = t.document.documentElement, r = T(t).on("dragstart.drag", null);
  n && (r.on("click.drag", vt, zt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Gt = (t) => () => t;
function Yn(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: u,
  dy: l,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
Yn.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Ua(t) {
  return !t.ctrlKey && !t.button;
}
function Ya() {
  return this.parentNode;
}
function Ka(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function Va() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Za() {
  var t = Ua, n = Ya, e = Ka, r = Va, i = {}, o = de("start", "drag", "end"), a = 0, s, u, l, c, f = 0;
  function h(y) {
    y.on("mousedown.drag", g).filter(r).on("touchstart.drag", b).on("touchmove.drag", _, Ba).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(y, v) {
    if (!(c || !t.call(this, y, v))) {
      var S = $(this, n.call(this, y, v), y, v, "mouse");
      S && (T(y.view).on("mousemove.drag", d, zt).on("mouseup.drag", p, zt), Xa(y.view), kn(y), l = !1, s = y.clientX, u = y.clientY, S("start", y));
    }
  }
  function d(y) {
    if (vt(y), !l) {
      var v = y.clientX - s, S = y.clientY - u;
      l = v * v + S * S > f;
    }
    i.mouse("drag", y);
  }
  function p(y) {
    T(y.view).on("mousemove.drag mouseup.drag", null), Ga(y.view, l), vt(y), i.mouse("end", y);
  }
  function b(y, v) {
    if (t.call(this, y, v)) {
      var S = y.changedTouches, E = n.call(this, y, v), N = S.length, q, V;
      for (q = 0; q < N; ++q)
        (V = $(this, E, y, v, S[q].identifier, S[q])) && (kn(y), V("start", y, S[q]));
    }
  }
  function _(y) {
    var v = y.changedTouches, S = v.length, E, N;
    for (E = 0; E < S; ++E)
      (N = i[v[E].identifier]) && (vt(y), N("drag", y, v[E]));
  }
  function x(y) {
    var v = y.changedTouches, S = v.length, E, N;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), E = 0; E < S; ++E)
      (N = i[v[E].identifier]) && (kn(y), N("end", y, v[E]));
  }
  function $(y, v, S, E, N, q) {
    var V = o.copy(), w = Un(q || S, v), B, z, R;
    if ((R = e.call(y, new Yn("beforestart", {
      sourceEvent: S,
      target: h,
      identifier: N,
      active: a,
      x: w[0],
      y: w[1],
      dx: 0,
      dy: 0,
      dispatch: V
    }), E)) != null)
      return B = R.x - w[0] || 0, z = R.y - w[1] || 0, function Bt(rt, at, _t) {
        var C = w, Cn;
        switch (rt) {
          case "start":
            i[N] = Bt, Cn = a++;
            break;
          case "end":
            delete i[N], --a;
          // falls through
          case "drag":
            w = Un(_t || at, v), Cn = a;
            break;
        }
        V.call(
          rt,
          y,
          new Yn(rt, {
            sourceEvent: at,
            subject: R,
            target: h,
            identifier: N,
            active: Cn,
            x: w[0] + B,
            y: w[1] + z,
            dx: w[0] - C[0],
            dy: w[1] - C[1],
            dispatch: V
          }),
          E
        );
      };
  }
  return h.filter = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : Gt(!!y), h) : t;
  }, h.container = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : Gt(y), h) : n;
  }, h.subject = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Gt(y), h) : e;
  }, h.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : Gt(!!y), h) : r;
  }, h.on = function() {
    var y = o.on.apply(o, arguments);
    return y === o ? h : y;
  }, h.clickDistance = function(y) {
    return arguments.length ? (f = (y = +y) * y, h) : Math.sqrt(f);
  }, h;
}
function ye(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Kr(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Dt() {
}
var It = 0.7, sn = 1 / It, wt = "\\s*([+-]?\\d+)\\s*", Ot = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", X = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Wa = /^#([0-9a-f]{3,8})$/, Ja = new RegExp(`^rgb\\(${wt},${wt},${wt}\\)$`), Qa = new RegExp(`^rgb\\(${X},${X},${X}\\)$`), ja = new RegExp(`^rgba\\(${wt},${wt},${wt},${Ot}\\)$`), ts = new RegExp(`^rgba\\(${X},${X},${X},${Ot}\\)$`), ns = new RegExp(`^hsl\\(${Ot},${X},${X}\\)$`), es = new RegExp(`^hsla\\(${Ot},${X},${X},${Ot}\\)$`), Be = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
ye(Dt, ft, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Xe,
  // Deprecated! Use color.formatHex.
  formatHex: Xe,
  formatHex8: rs,
  formatHsl: is,
  formatRgb: Ge,
  toString: Ge
});
function Xe() {
  return this.rgb().formatHex();
}
function rs() {
  return this.rgb().formatHex8();
}
function is() {
  return Vr(this).formatHsl();
}
function Ge() {
  return this.rgb().formatRgb();
}
function ft(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Wa.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Ue(n) : e === 3 ? new I(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Ut(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Ut(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Ja.exec(t)) ? new I(n[1], n[2], n[3], 1) : (n = Qa.exec(t)) ? new I(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = ja.exec(t)) ? Ut(n[1], n[2], n[3], n[4]) : (n = ts.exec(t)) ? Ut(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = ns.exec(t)) ? Ve(n[1], n[2] / 100, n[3] / 100, 1) : (n = es.exec(t)) ? Ve(n[1], n[2] / 100, n[3] / 100, n[4]) : Be.hasOwnProperty(t) ? Ue(Be[t]) : t === "transparent" ? new I(NaN, NaN, NaN, 0) : null;
}
function Ue(t) {
  return new I(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Ut(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new I(t, n, e, r);
}
function os(t) {
  return t instanceof Dt || (t = ft(t)), t ? (t = t.rgb(), new I(t.r, t.g, t.b, t.opacity)) : new I();
}
function un(t, n, e, r) {
  return arguments.length === 1 ? os(t) : new I(t, n, e, r ?? 1);
}
function I(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
ye(I, un, Kr(Dt, {
  brighter(t) {
    return t = t == null ? sn : Math.pow(sn, t), new I(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? It : Math.pow(It, t), new I(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new I(lt(this.r), lt(this.g), lt(this.b), ln(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ye,
  // Deprecated! Use color.formatHex.
  formatHex: Ye,
  formatHex8: as,
  formatRgb: Ke,
  toString: Ke
}));
function Ye() {
  return `#${ut(this.r)}${ut(this.g)}${ut(this.b)}`;
}
function as() {
  return `#${ut(this.r)}${ut(this.g)}${ut(this.b)}${ut((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ke() {
  const t = ln(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${lt(this.r)}, ${lt(this.g)}, ${lt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function ln(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function lt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ut(t) {
  return t = lt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ve(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new L(t, n, e, r);
}
function Vr(t) {
  if (t instanceof L) return new L(t.h, t.s, t.l, t.opacity);
  if (t instanceof Dt || (t = ft(t)), !t) return new L();
  if (t instanceof L) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new L(a, s, u, t.opacity);
}
function ss(t, n, e, r) {
  return arguments.length === 1 ? Vr(t) : new L(t, n, e, r ?? 1);
}
function L(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
ye(L, ss, Kr(Dt, {
  brighter(t) {
    return t = t == null ? sn : Math.pow(sn, t), new L(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? It : Math.pow(It, t), new L(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new I(
      Rn(t >= 240 ? t - 240 : t + 120, i, r),
      Rn(t, i, r),
      Rn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new L(Ze(this.h), Yt(this.s), Yt(this.l), ln(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = ln(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ze(this.h)}, ${Yt(this.s) * 100}%, ${Yt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ze(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Yt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Rn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const _e = (t) => () => t;
function us(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function ls(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function fs(t) {
  return (t = +t) == 1 ? Zr : function(n, e) {
    return e - n ? ls(n, e, t) : _e(isNaN(n) ? e : n);
  };
}
function Zr(t, n) {
  var e = n - t;
  return e ? us(t, e) : _e(isNaN(t) ? n : t);
}
const fn = function t(n) {
  var e = fs(n);
  function r(i, o) {
    var a = e((i = un(i)).r, (o = un(o)).r), s = e(i.g, o.g), u = e(i.b, o.b), l = Zr(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = u(c), i.opacity = l(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function cs(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function hs(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function ds(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = me(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function ps(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function F(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function gs(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = me(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var Kn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Fn = new RegExp(Kn.source, "g");
function ys(t) {
  return function() {
    return t;
  };
}
function _s(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Wr(t, n) {
  var e = Kn.lastIndex = Fn.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", n = n + ""; (r = Kn.exec(t)) && (i = Fn.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: F(r, i) })), e = Fn.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? _s(u[0].x) : ys(n) : (n = u.length, function(l) {
    for (var c = 0, f; c < n; ++c) s[(f = u[c]).i] = f.x(l);
    return s.join("");
  });
}
function me(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? _e(n) : (e === "number" ? F : e === "string" ? (r = ft(n)) ? (n = r, fn) : Wr : n instanceof ft ? fn : n instanceof Date ? ps : hs(n) ? cs : Array.isArray(n) ? ds : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? gs : F)(t, n);
}
function ms(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var We = 180 / Math.PI, Vn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Jr(t, n, e, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (u = t * e + n * r) && (e -= t * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t * r < n * e && (t = -t, n = -n, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * We,
    skewX: Math.atan(u) * We,
    scaleX: a,
    scaleY: s
  };
}
var Kt;
function vs(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Vn : Jr(n.a, n.b, n.c, n.d, n.e, n.f);
}
function ws(t) {
  return t == null || (Kt || (Kt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Kt.setAttribute("transform", t), !(t = Kt.transform.baseVal.consolidate())) ? Vn : (t = t.matrix, Jr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Qr(t, n, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, c, f, h, g, d) {
    if (l !== f || c !== h) {
      var p = g.push("translate(", null, n, null, e);
      d.push({ i: p - 4, x: F(l, f) }, { i: p - 2, x: F(c, h) });
    } else (f || h) && g.push("translate(" + f + n + h + e);
  }
  function a(l, c, f, h) {
    l !== c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: F(l, c) })) : c && f.push(i(f) + "rotate(" + c + r);
  }
  function s(l, c, f, h) {
    l !== c ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: F(l, c) }) : c && f.push(i(f) + "skewX(" + c + r);
  }
  function u(l, c, f, h, g, d) {
    if (l !== f || c !== h) {
      var p = g.push(i(g) + "scale(", null, ",", null, ")");
      d.push({ i: p - 4, x: F(l, f) }, { i: p - 2, x: F(c, h) });
    } else (f !== 1 || h !== 1) && g.push(i(g) + "scale(" + f + "," + h + ")");
  }
  return function(l, c) {
    var f = [], h = [];
    return l = t(l), c = t(c), o(l.translateX, l.translateY, c.translateX, c.translateY, f, h), a(l.rotate, c.rotate, f, h), s(l.skewX, c.skewX, f, h), u(l.scaleX, l.scaleY, c.scaleX, c.scaleY, f, h), l = c = null, function(g) {
      for (var d = -1, p = h.length, b; ++d < p; ) f[(b = h[d]).i] = b.x(g);
      return f.join("");
    };
  };
}
var bs = Qr(vs, "px, ", "px)", "deg)"), xs = Qr(ws, ", ", ")", ")"), xt = 0, Tt = 0, $t = 0, jr = 1e3, cn, Pt, hn = 0, ct = 0, mn = 0, Ct = typeof performance == "object" && performance.now ? performance : Date, ti = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function vn() {
  return ct || (ti(Ms), ct = Ct.now() + mn);
}
function Ms() {
  ct = 0;
}
function kt() {
  this._call = this._time = this._next = null;
}
kt.prototype = ni.prototype = {
  constructor: kt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? vn() : +e) + (n == null ? 0 : +n), !this._next && Pt !== this && (Pt ? Pt._next = this : cn = this, Pt = this), this._call = t, this._time = e, Zn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Zn());
  }
};
function ni(t, n, e) {
  var r = new kt();
  return r.restart(t, n, e), r;
}
function $s() {
  vn(), ++xt;
  for (var t = cn, n; t; )
    (n = ct - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --xt;
}
function Je() {
  ct = (hn = Ct.now()) + mn, xt = Tt = 0;
  try {
    $s();
  } finally {
    xt = 0, Ts(), ct = 0;
  }
}
function As() {
  var t = Ct.now(), n = t - hn;
  n > jr && (mn -= n, hn = t);
}
function Ts() {
  for (var t, n = cn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : cn = e);
  Pt = t, Zn(r);
}
function Zn(t) {
  if (!xt) {
    Tt && (Tt = clearTimeout(Tt));
    var n = t - ct;
    n > 24 ? (t < 1 / 0 && (Tt = setTimeout(Je, t - Ct.now() - mn)), $t && ($t = clearInterval($t))) : ($t || (hn = Ct.now(), $t = setInterval(As, jr)), xt = 1, ti(Je));
  }
}
function Qe(t, n, e) {
  var r = new kt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function Ps(t, n, e) {
  var r = new kt(), i = n;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? vn() : +s, r._restart(function u(l) {
      l += i, r._restart(u, i += a, s), o(l);
    }, a, s);
  }, r.restart(t, n, e), r;
}
var Ss = de("start", "end", "cancel", "interrupt"), Es = [], ei = 0, je = 1, Wn = 2, tn = 3, tr = 4, Jn = 5, nn = 6;
function wn(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  Ns(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Ss,
    tween: Es,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: ei
  });
}
function ve(t, n) {
  var e = D(t, n);
  if (e.state > ei) throw new Error("too late; already scheduled");
  return e;
}
function K(t, n) {
  var e = D(t, n);
  if (e.state > tn) throw new Error("too late; already running");
  return e;
}
function D(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Ns(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = ni(o, 0, e.time);
  function o(l) {
    e.state = je, e.timer.restart(a, e.delay, e.time), e.delay <= l && a(l - e.delay);
  }
  function a(l) {
    var c, f, h, g;
    if (e.state !== je) return u();
    for (c in r)
      if (g = r[c], g.name === e.name) {
        if (g.state === tn) return Qe(a);
        g.state === tr ? (g.state = nn, g.timer.stop(), g.on.call("interrupt", t, t.__data__, g.index, g.group), delete r[c]) : +c < n && (g.state = nn, g.timer.stop(), g.on.call("cancel", t, t.__data__, g.index, g.group), delete r[c]);
      }
    if (Qe(function() {
      e.state === tn && (e.state = tr, e.timer.restart(s, e.delay, e.time), s(l));
    }), e.state = Wn, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Wn) {
      for (e.state = tn, i = new Array(h = e.tween.length), c = 0, f = -1; c < h; ++c)
        (g = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++f] = g);
      i.length = f + 1;
    }
  }
  function s(l) {
    for (var c = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(u), e.state = Jn, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, c);
    e.state === Jn && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = nn, e.timer.stop(), delete r[n];
    for (var l in r) return;
    delete t.__transition;
  }
}
function zs(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Wn && r.state < Jn, r.state = nn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Is(t) {
  return this.each(function() {
    zs(this, t);
  });
}
function Os(t, n) {
  var e, r;
  return function() {
    var i = K(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Cs(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = K(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === n) {
          i[u] = s;
          break;
        }
      u === l && i.push(s);
    }
    o.tween = i;
  };
}
function ks(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = D(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? Os : Cs)(e, t, n));
}
function we(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = K(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return D(i, r).value[n];
  };
}
function ri(t, n) {
  var e;
  return (typeof n == "number" ? F : n instanceof ft ? fn : (e = ft(n)) ? (n = e, fn) : Wr)(t, n);
}
function Rs(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Fs(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ls(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Ds(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Hs(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function qs(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Bs(t, n) {
  var e = _n(t), r = e === "transform" ? xs : ri;
  return this.attrTween(t, typeof n == "function" ? (e.local ? qs : Hs)(e, r, we(this, "attr." + t, n)) : n == null ? (e.local ? Fs : Rs)(e) : (e.local ? Ds : Ls)(e, r, n));
}
function Xs(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Gs(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Us(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Gs(t, o)), e;
  }
  return i._value = n, i;
}
function Ys(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Xs(t, o)), e;
  }
  return i._value = n, i;
}
function Ks(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = _n(t);
  return this.tween(e, (r.local ? Us : Ys)(r, n));
}
function Vs(t, n) {
  return function() {
    ve(this, t).delay = +n.apply(this, arguments);
  };
}
function Zs(t, n) {
  return n = +n, function() {
    ve(this, t).delay = n;
  };
}
function Ws(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Vs : Zs)(n, t)) : D(this.node(), n).delay;
}
function Js(t, n) {
  return function() {
    K(this, t).duration = +n.apply(this, arguments);
  };
}
function Qs(t, n) {
  return n = +n, function() {
    K(this, t).duration = n;
  };
}
function js(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Js : Qs)(n, t)) : D(this.node(), n).duration;
}
function tu(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    K(this, t).ease = n;
  };
}
function nu(t) {
  var n = this._id;
  return arguments.length ? this.each(tu(n, t)) : D(this.node(), n).ease;
}
function eu(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    K(this, t).ease = e;
  };
}
function ru(t) {
  if (typeof t != "function") throw new Error();
  return this.each(eu(this._id, t));
}
function iu(t) {
  typeof t != "function" && (t = Fr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new Q(r, this._parents, this._name, this._id);
}
function ou(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = n[s], l = e[s], c = u.length, f = a[s] = new Array(c), h, g = 0; g < c; ++g)
      (h = u[g] || l[g]) && (f[g] = h);
  for (; s < r; ++s)
    a[s] = n[s];
  return new Q(a, this._parents, this._name, this._id);
}
function au(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function su(t, n, e) {
  var r, i, o = au(n) ? ve : K;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function uu(t, n) {
  var e = this._id;
  return arguments.length < 2 ? D(this.node(), e).on.on(t) : this.each(su(e, t, n));
}
function lu(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function fu() {
  return this.on("end.remove", lu(this._id));
}
function cu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = pe(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, l = o[a] = new Array(u), c, f, h = 0; h < u; ++h)
      (c = s[h]) && (f = t.call(c, c.__data__, h, s)) && ("__data__" in c && (f.__data__ = c.__data__), l[h] = f, wn(l[h], n, e, h, l, D(c, e)));
  return new Q(o, this._parents, n, e);
}
function hu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Rr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, c, f = 0; f < l; ++f)
      if (c = u[f]) {
        for (var h = t.call(c, c.__data__, f, u), g, d = D(c, e), p = 0, b = h.length; p < b; ++p)
          (g = h[p]) && wn(g, n, e, p, h, d);
        o.push(h), a.push(c);
      }
  return new Q(o, a, n, e);
}
var du = Lt.prototype.constructor;
function pu() {
  return new du(this._groups, this._parents);
}
function gu(t, n) {
  var e, r, i;
  return function() {
    var o = bt(this, t), a = (this.style.removeProperty(t), bt(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function ii(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function yu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = bt(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function _u(t, n, e) {
  var r, i, o;
  return function() {
    var a = bt(this, t), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), bt(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s));
  };
}
function mu(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var u = K(this, t), l = u.on, c = u.value[o] == null ? s || (s = ii(n)) : void 0;
    (l !== e || i !== c) && (r = (e = l).copy()).on(a, i = c), u.on = r;
  };
}
function vu(t, n, e) {
  var r = (t += "") == "transform" ? bs : ri;
  return n == null ? this.styleTween(t, gu(t, r)).on("end.style." + t, ii(t)) : typeof n == "function" ? this.styleTween(t, _u(t, r, we(this, "style." + t, n))).each(mu(this._id, t)) : this.styleTween(t, yu(t, r, n), e).on("end.style." + t, null);
}
function wu(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function bu(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && wu(t, a, e)), r;
  }
  return o._value = n, o;
}
function xu(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, bu(t, n, e ?? ""));
}
function Mu(t) {
  return function() {
    this.textContent = t;
  };
}
function $u(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Au(t) {
  return this.tween("text", typeof t == "function" ? $u(we(this, "text", t)) : Mu(t == null ? "" : t + ""));
}
function Tu(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Pu(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Tu(i)), n;
  }
  return r._value = t, r;
}
function Su(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Pu(t));
}
function Eu() {
  for (var t = this._name, n = this._id, e = oi(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      if (u = a[l]) {
        var c = D(u, n);
        wn(u, t, e, l, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Q(r, this._parents, t, e);
}
function Nu() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var l = K(this, r), c = l.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), l.on = n;
    }), i === 0 && o();
  });
}
var zu = 0;
function Q(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function oi() {
  return ++zu;
}
var Z = Lt.prototype;
Q.prototype = {
  constructor: Q,
  select: cu,
  selectAll: hu,
  selectChild: Z.selectChild,
  selectChildren: Z.selectChildren,
  filter: iu,
  merge: ou,
  selection: pu,
  transition: Eu,
  call: Z.call,
  nodes: Z.nodes,
  node: Z.node,
  size: Z.size,
  empty: Z.empty,
  each: Z.each,
  on: uu,
  attr: Bs,
  attrTween: Ks,
  style: vu,
  styleTween: xu,
  text: Au,
  textTween: Su,
  remove: fu,
  tween: ks,
  delay: Ws,
  duration: js,
  ease: nu,
  easeVarying: ru,
  end: Nu,
  [Symbol.iterator]: Z[Symbol.iterator]
};
function Iu(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Ou = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Iu
};
function Cu(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function ku(t) {
  var n, e;
  t instanceof Q ? (n = t._id, t = t._name) : (n = oi(), (e = Ou).time = vn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && wn(u, t, n, l, a, e || Cu(u, n));
  return new Q(r, this._parents, t, n);
}
Lt.prototype.interrupt = Is;
Lt.prototype.transition = ku;
const Qn = Math.PI, jn = 2 * Qn, st = 1e-6, Ru = jn - st;
function ai(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Fu(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return ai;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class si {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? ai : Fu(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, u = r - n, l = i - e, c = a - n, f = s - e, h = c * c + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (h > st) if (!(Math.abs(f * u - l * c) > st) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let g = r - a, d = i - s, p = u * u + l * l, b = g * g + d * d, _ = Math.sqrt(p), x = Math.sqrt(h), $ = o * Math.tan((Qn - Math.acos((p + h - b) / (2 * _ * x))) / 2), y = $ / x, v = $ / _;
      Math.abs(y - 1) > st && this._append`L${n + y * c},${e + y * f}`, this._append`A${o},${o},0,0,${+(f * g > c * d)},${this._x1 = n + v * u},${this._y1 = e + v * l}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = n + s, c = e + u, f = 1 ^ a, h = a ? i - o : o - i;
    this._x1 === null ? this._append`M${l},${c}` : (Math.abs(this._x1 - l) > st || Math.abs(this._y1 - c) > st) && this._append`L${l},${c}`, r && (h < 0 && (h = h % jn + jn), h > Ru ? this._append`A${r},${r},0,1,${f},${n - s},${e - u}A${r},${r},0,1,${f},${this._x1 = l},${this._y1 = c}` : h > st && this._append`A${r},${r},0,${+(h >= Qn)},${f},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function H() {
  return new si();
}
H.prototype = si.prototype;
function Lu(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function dn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Mt(t) {
  return t = dn(Math.abs(t)), t ? t[1] : NaN;
}
function Du(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(e.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Hu(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var qu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function pn(t) {
  if (!(n = qu.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new be({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
pn.prototype = be.prototype;
function be(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
be.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Bu(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var ui;
function Xu(t, n) {
  var e = dn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (ui = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + dn(t, Math.max(0, n + o - 1))[0];
}
function nr(t, n) {
  var e = dn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const er = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Lu,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => nr(t * 100, n),
  r: nr,
  s: Xu,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function rr(t) {
  return t;
}
var ir = Array.prototype.map, or = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Gu(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? rr : Du(ir.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? rr : Hu(ir.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(f) {
    f = pn(f);
    var h = f.fill, g = f.align, d = f.sign, p = f.symbol, b = f.zero, _ = f.width, x = f.comma, $ = f.precision, y = f.trim, v = f.type;
    v === "n" ? (x = !0, v = "g") : er[v] || ($ === void 0 && ($ = 12), y = !0, v = "g"), (b || h === "0" && g === "=") && (b = !0, h = "0", g = "=");
    var S = p === "$" ? e : p === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", E = p === "$" ? r : /[%p]/.test(v) ? a : "", N = er[v], q = /[defgprs%]/.test(v);
    $ = $ === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, $)) : Math.max(0, Math.min(20, $));
    function V(w) {
      var B = S, z = E, R, Bt, rt;
      if (v === "c")
        z = N(w) + z, w = "";
      else {
        w = +w;
        var at = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? u : N(Math.abs(w), $), y && (w = Bu(w)), at && +w == 0 && d !== "+" && (at = !1), B = (at ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + B, z = (v === "s" ? or[8 + ui / 3] : "") + z + (at && d === "(" ? ")" : ""), q) {
          for (R = -1, Bt = w.length; ++R < Bt; )
            if (rt = w.charCodeAt(R), 48 > rt || rt > 57) {
              z = (rt === 46 ? i + w.slice(R + 1) : w.slice(R)) + z, w = w.slice(0, R);
              break;
            }
        }
      }
      x && !b && (w = n(w, 1 / 0));
      var _t = B.length + w.length + z.length, C = _t < _ ? new Array(_ - _t + 1).join(h) : "";
      switch (x && b && (w = n(C + w, C.length ? _ - z.length : 1 / 0), C = ""), g) {
        case "<":
          w = B + w + z + C;
          break;
        case "=":
          w = B + C + w + z;
          break;
        case "^":
          w = C.slice(0, _t = C.length >> 1) + B + w + z + C.slice(_t);
          break;
        default:
          w = C + B + w + z;
          break;
      }
      return o(w);
    }
    return V.toString = function() {
      return f + "";
    }, V;
  }
  function c(f, h) {
    var g = l((f = pn(f), f.type = "f", f)), d = Math.max(-8, Math.min(8, Math.floor(Mt(h) / 3))) * 3, p = Math.pow(10, -d), b = or[8 + d / 3];
    return function(_) {
      return g(p * _) + b;
    };
  }
  return {
    format: l,
    formatPrefix: c
  };
}
var Vt, bn, li;
Uu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Uu(t) {
  return Vt = Gu(t), bn = Vt.format, li = Vt.formatPrefix, Vt;
}
function Yu(t) {
  return Math.max(0, -Mt(Math.abs(t)));
}
function Ku(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Mt(n) / 3))) * 3 - Mt(Math.abs(t)));
}
function Vu(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Mt(n) - Mt(t)) + 1;
}
function Zu(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function Wu(t) {
  return function() {
    return t;
  };
}
function Ju(t) {
  return +t;
}
var ar = [0, 1];
function mt(t) {
  return t;
}
function te(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Wu(isNaN(n) ? NaN : 0.5);
}
function Qu(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function ju(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = te(i, r), o = e(a, o)) : (r = te(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function tl(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = te(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var u = Qi(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function nl(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function el() {
  var t = ar, n = ar, e = me, r, i, o, a = mt, s, u, l;
  function c() {
    var h = Math.min(t.length, n.length);
    return a !== mt && (a = Qu(t[0], t[h - 1])), s = h > 2 ? tl : ju, u = l = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (u || (u = s(t.map(r), n, e)))(r(a(h)));
  }
  return f.invert = function(h) {
    return a(i((l || (l = s(n, t.map(r), F)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, Ju), c()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (n = Array.from(h), c()) : n.slice();
  }, f.rangeRound = function(h) {
    return n = Array.from(h), e = ms, c();
  }, f.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : mt, c()) : a !== mt;
  }, f.interpolate = function(h) {
    return arguments.length ? (e = h, c()) : e;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, g) {
    return r = h, i = g, c();
  };
}
function rl() {
  return el()(mt, mt);
}
function il(t, n, e, r) {
  var i = ro(t, n, e), o;
  switch (r = pn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Ku(i, a)) && (r.precision = o), li(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Vu(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Yu(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return bn(r);
}
function ol(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return eo(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return il(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, l, c = 10;
    for (s < a && (l = a, a = s, s = l, l = i, i = o, o = l); c-- > 0; ) {
      if (l = Xn(a, s, e), l === u)
        return r[i] = a, r[o] = s, n(r);
      if (l > 0)
        a = Math.floor(a / l) * l, s = Math.ceil(s / l) * l;
      else if (l < 0)
        a = Math.ceil(a * l) / l, s = Math.floor(s * l) / l;
      else
        break;
      u = l;
    }
    return t;
  }, t;
}
function G() {
  var t = rl();
  return t.copy = function() {
    return nl(t, G());
  }, Zu.apply(t, arguments), ol(t);
}
var Zt = un(), al = Math.PI / 3, sl = Math.PI * 2 / 3;
function fi(t) {
  var n;
  return t = (0.5 - t) * Math.PI, Zt.r = 255 * (n = Math.sin(t)) * n, Zt.g = 255 * (n = Math.sin(t + al)) * n, Zt.b = 255 * (n = Math.sin(t + sl)) * n, Zt + "";
}
function St(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
St.prototype = {
  constructor: St,
  scale: function(t) {
    return t === 1 ? this : new St(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new St(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
St.prototype;
var ci = typeof global == "object" && global && global.Object === Object && global, ul = typeof self == "object" && self && self.Object === Object && self, tt = ci || ul || Function("return this")(), U = tt.Symbol, hi = Object.prototype, ll = hi.hasOwnProperty, fl = hi.toString, At = U ? U.toStringTag : void 0;
function cl(t) {
  var n = ll.call(t, At), e = t[At];
  try {
    t[At] = void 0;
    var r = !0;
  } catch {
  }
  var i = fl.call(t);
  return r && (n ? t[At] = e : delete t[At]), i;
}
var hl = Object.prototype, dl = hl.toString;
function pl(t) {
  return dl.call(t);
}
var gl = "[object Null]", yl = "[object Undefined]", sr = U ? U.toStringTag : void 0;
function pt(t) {
  return t == null ? t === void 0 ? yl : gl : sr && sr in Object(t) ? cl(t) : pl(t);
}
function ht(t) {
  return t != null && typeof t == "object";
}
var _l = "[object Symbol]";
function xn(t) {
  return typeof t == "symbol" || ht(t) && pt(t) == _l;
}
function Mn(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var k = Array.isArray, ur = U ? U.prototype : void 0, lr = ur ? ur.toString : void 0;
function di(t) {
  if (typeof t == "string")
    return t;
  if (k(t))
    return Mn(t, di) + "";
  if (xn(t))
    return lr ? lr.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var ml = /\s/;
function vl(t) {
  for (var n = t.length; n-- && ml.test(t.charAt(n)); )
    ;
  return n;
}
var wl = /^\s+/;
function bl(t) {
  return t && t.slice(0, vl(t) + 1).replace(wl, "");
}
function j(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var fr = NaN, xl = /^[-+]0x[0-9a-f]+$/i, Ml = /^0b[01]+$/i, $l = /^0o[0-7]+$/i, Al = parseInt;
function Tl(t) {
  if (typeof t == "number")
    return t;
  if (xn(t))
    return fr;
  if (j(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = j(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = bl(t);
  var e = Ml.test(t);
  return e || $l.test(t) ? Al(t.slice(2), e ? 2 : 8) : xl.test(t) ? fr : +t;
}
var Pl = 1 / 0, Sl = 17976931348623157e292;
function Ln(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Tl(t), t === Pl || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * Sl;
  }
  return t === t ? t : 0;
}
function xe(t) {
  return t;
}
var El = "[object AsyncFunction]", Nl = "[object Function]", zl = "[object GeneratorFunction]", Il = "[object Proxy]";
function pi(t) {
  if (!j(t))
    return !1;
  var n = pt(t);
  return n == Nl || n == zl || n == El || n == Il;
}
var Dn = tt["__core-js_shared__"], cr = function() {
  var t = /[^.]+$/.exec(Dn && Dn.keys && Dn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Ol(t) {
  return !!cr && cr in t;
}
var Cl = Function.prototype, kl = Cl.toString;
function gt(t) {
  if (t != null) {
    try {
      return kl.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Rl = /[\\^$.*+?()[\]{}|]/g, Fl = /^\[object .+?Constructor\]$/, Ll = Function.prototype, Dl = Object.prototype, Hl = Ll.toString, ql = Dl.hasOwnProperty, Bl = RegExp(
  "^" + Hl.call(ql).replace(Rl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Xl(t) {
  if (!j(t) || Ol(t))
    return !1;
  var n = pi(t) ? Bl : Fl;
  return n.test(gt(t));
}
function Gl(t, n) {
  return t == null ? void 0 : t[n];
}
function yt(t, n) {
  var e = Gl(t, n);
  return Xl(e) ? e : void 0;
}
var ne = yt(tt, "WeakMap"), hr = function() {
  try {
    var t = yt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function Ul(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var Yl = 9007199254740991, Kl = /^(?:0|[1-9]\d*)$/;
function $n(t, n) {
  var e = typeof t;
  return n = n ?? Yl, !!n && (e == "number" || e != "symbol" && Kl.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function Vl(t, n, e) {
  n == "__proto__" && hr ? hr(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function An(t, n) {
  return t === n || t !== t && n !== n;
}
var Zl = Object.prototype, Wl = Zl.hasOwnProperty;
function Jl(t, n, e) {
  var r = t[n];
  (!(Wl.call(t, n) && An(r, e)) || e === void 0 && !(n in t)) && Vl(t, n, e);
}
var Ql = 9007199254740991;
function Me(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Ql;
}
function Ht(t) {
  return t != null && Me(t.length) && !pi(t);
}
function jl(t, n, e) {
  if (!j(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Ht(e) && $n(n, e.length) : r == "string" && n in e) ? An(e[n], t) : !1;
}
var tf = Object.prototype;
function gi(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || tf;
  return t === e;
}
function nf(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var ef = "[object Arguments]";
function dr(t) {
  return ht(t) && pt(t) == ef;
}
var yi = Object.prototype, rf = yi.hasOwnProperty, of = yi.propertyIsEnumerable, $e = dr(/* @__PURE__ */ function() {
  return arguments;
}()) ? dr : function(t) {
  return ht(t) && rf.call(t, "callee") && !of.call(t, "callee");
};
function af() {
  return !1;
}
var _i = typeof exports == "object" && exports && !exports.nodeType && exports, pr = _i && typeof module == "object" && module && !module.nodeType && module, sf = pr && pr.exports === _i, gr = sf ? tt.Buffer : void 0, uf = gr ? gr.isBuffer : void 0, ee = uf || af, lf = "[object Arguments]", ff = "[object Array]", cf = "[object Boolean]", hf = "[object Date]", df = "[object Error]", pf = "[object Function]", gf = "[object Map]", yf = "[object Number]", _f = "[object Object]", mf = "[object RegExp]", vf = "[object Set]", wf = "[object String]", bf = "[object WeakMap]", xf = "[object ArrayBuffer]", Mf = "[object DataView]", $f = "[object Float32Array]", Af = "[object Float64Array]", Tf = "[object Int8Array]", Pf = "[object Int16Array]", Sf = "[object Int32Array]", Ef = "[object Uint8Array]", Nf = "[object Uint8ClampedArray]", zf = "[object Uint16Array]", If = "[object Uint32Array]", M = {};
M[$f] = M[Af] = M[Tf] = M[Pf] = M[Sf] = M[Ef] = M[Nf] = M[zf] = M[If] = !0;
M[lf] = M[ff] = M[xf] = M[cf] = M[Mf] = M[hf] = M[df] = M[pf] = M[gf] = M[yf] = M[_f] = M[mf] = M[vf] = M[wf] = M[bf] = !1;
function Of(t) {
  return ht(t) && Me(t.length) && !!M[pt(t)];
}
function Cf(t) {
  return function(n) {
    return t(n);
  };
}
var mi = typeof exports == "object" && exports && !exports.nodeType && exports, Et = mi && typeof module == "object" && module && !module.nodeType && module, kf = Et && Et.exports === mi, Hn = kf && ci.process, yr = function() {
  try {
    var t = Et && Et.require && Et.require("util").types;
    return t || Hn && Hn.binding && Hn.binding("util");
  } catch {
  }
}(), _r = yr && yr.isTypedArray, vi = _r ? Cf(_r) : Of, Rf = Object.prototype, Ff = Rf.hasOwnProperty;
function wi(t, n) {
  var e = k(t), r = !e && $e(t), i = !e && !r && ee(t), o = !e && !r && !i && vi(t), a = e || r || i || o, s = a ? nf(t.length, String) : [], u = s.length;
  for (var l in t)
    (n || Ff.call(t, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    $n(l, u))) && s.push(l);
  return s;
}
function bi(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Lf = bi(Object.keys, Object), Df = Object.prototype, Hf = Df.hasOwnProperty;
function qf(t) {
  if (!gi(t))
    return Lf(t);
  var n = [];
  for (var e in Object(t))
    Hf.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Tn(t) {
  return Ht(t) ? wi(t) : qf(t);
}
function Bf(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var Xf = Object.prototype, Gf = Xf.hasOwnProperty;
function Uf(t) {
  if (!j(t))
    return Bf(t);
  var n = gi(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !Gf.call(t, r)) || e.push(r);
  return e;
}
function Yf(t) {
  return Ht(t) ? wi(t, !0) : Uf(t);
}
var Kf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Vf = /^\w*$/;
function Ae(t, n) {
  if (k(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || xn(t) ? !0 : Vf.test(t) || !Kf.test(t) || n != null && t in Object(n);
}
var Rt = yt(Object, "create");
function Zf() {
  this.__data__ = Rt ? Rt(null) : {}, this.size = 0;
}
function Wf(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var Jf = "__lodash_hash_undefined__", Qf = Object.prototype, jf = Qf.hasOwnProperty;
function tc(t) {
  var n = this.__data__;
  if (Rt) {
    var e = n[t];
    return e === Jf ? void 0 : e;
  }
  return jf.call(n, t) ? n[t] : void 0;
}
var nc = Object.prototype, ec = nc.hasOwnProperty;
function rc(t) {
  var n = this.__data__;
  return Rt ? n[t] !== void 0 : ec.call(n, t);
}
var ic = "__lodash_hash_undefined__";
function oc(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Rt && n === void 0 ? ic : n, this;
}
function dt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
dt.prototype.clear = Zf;
dt.prototype.delete = Wf;
dt.prototype.get = tc;
dt.prototype.has = rc;
dt.prototype.set = oc;
function ac() {
  this.__data__ = [], this.size = 0;
}
function Pn(t, n) {
  for (var e = t.length; e--; )
    if (An(t[e][0], n))
      return e;
  return -1;
}
var sc = Array.prototype, uc = sc.splice;
function lc(t) {
  var n = this.__data__, e = Pn(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : uc.call(n, e, 1), --this.size, !0;
}
function fc(t) {
  var n = this.__data__, e = Pn(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function cc(t) {
  return Pn(this.__data__, t) > -1;
}
function hc(t, n) {
  var e = this.__data__, r = Pn(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function nt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
nt.prototype.clear = ac;
nt.prototype.delete = lc;
nt.prototype.get = fc;
nt.prototype.has = cc;
nt.prototype.set = hc;
var Ft = yt(tt, "Map");
function dc() {
  this.size = 0, this.__data__ = {
    hash: new dt(),
    map: new (Ft || nt)(),
    string: new dt()
  };
}
function pc(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Sn(t, n) {
  var e = t.__data__;
  return pc(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function gc(t) {
  var n = Sn(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function yc(t) {
  return Sn(this, t).get(t);
}
function _c(t) {
  return Sn(this, t).has(t);
}
function mc(t, n) {
  var e = Sn(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function et(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
et.prototype.clear = dc;
et.prototype.delete = gc;
et.prototype.get = yc;
et.prototype.has = _c;
et.prototype.set = mc;
var vc = "Expected a function";
function Te(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(vc);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (Te.Cache || et)(), e;
}
Te.Cache = et;
var wc = 500;
function bc(t) {
  var n = Te(t, function(r) {
    return e.size === wc && e.clear(), r;
  }), e = n.cache;
  return n;
}
var xc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Mc = /\\(\\)?/g, $c = bc(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(xc, function(e, r, i, o) {
    n.push(i ? o.replace(Mc, "$1") : r || e);
  }), n;
});
function En(t) {
  return t == null ? "" : di(t);
}
function Nn(t, n) {
  return k(t) ? t : Ae(t, n) ? [t] : $c(En(t));
}
function qt(t) {
  if (typeof t == "string" || xn(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Pe(t, n) {
  n = Nn(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[qt(n[e++])];
  return e && e == r ? t : void 0;
}
function Ac(t, n, e) {
  var r = t == null ? void 0 : Pe(t, n);
  return r === void 0 ? e : r;
}
function Se(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var mr = U ? U.isConcatSpreadable : void 0;
function Tc(t) {
  return k(t) || $e(t) || !!(mr && t && t[mr]);
}
function Pc(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = Tc), i || (i = []); ++o < a; ) {
    var s = t[o];
    e(s) ? Se(i, s) : i[i.length] = s;
  }
  return i;
}
function Sc(t) {
  var n = t == null ? 0 : t.length;
  return n ? Pc(t) : [];
}
var Ec = bi(Object.getPrototypeOf, Object);
function Nc(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + n];
  return o;
}
function zc(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, Nc(t, n, e);
}
var Ic = "\\ud800-\\udfff", Oc = "\\u0300-\\u036f", Cc = "\\ufe20-\\ufe2f", kc = "\\u20d0-\\u20ff", Rc = Oc + Cc + kc, Fc = "\\ufe0e\\ufe0f", Lc = "\\u200d", Dc = RegExp("[" + Lc + Ic + Rc + Fc + "]");
function xi(t) {
  return Dc.test(t);
}
function Hc(t) {
  return t.split("");
}
var Mi = "\\ud800-\\udfff", qc = "\\u0300-\\u036f", Bc = "\\ufe20-\\ufe2f", Xc = "\\u20d0-\\u20ff", Gc = qc + Bc + Xc, Uc = "\\ufe0e\\ufe0f", Yc = "[" + Mi + "]", re = "[" + Gc + "]", ie = "\\ud83c[\\udffb-\\udfff]", Kc = "(?:" + re + "|" + ie + ")", $i = "[^" + Mi + "]", Ai = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ti = "[\\ud800-\\udbff][\\udc00-\\udfff]", Vc = "\\u200d", Pi = Kc + "?", Si = "[" + Uc + "]?", Zc = "(?:" + Vc + "(?:" + [$i, Ai, Ti].join("|") + ")" + Si + Pi + ")*", Wc = Si + Pi + Zc, Jc = "(?:" + [$i + re + "?", re, Ai, Ti, Yc].join("|") + ")", Qc = RegExp(ie + "(?=" + ie + ")|" + Jc + Wc, "g");
function jc(t) {
  return t.match(Qc) || [];
}
function th(t) {
  return xi(t) ? jc(t) : Hc(t);
}
function nh(t) {
  return function(n) {
    n = En(n);
    var e = xi(n) ? th(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? zc(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var eh = nh("toUpperCase");
function rh(t) {
  return eh(En(t).toLowerCase());
}
function ih() {
  this.__data__ = new nt(), this.size = 0;
}
function oh(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function ah(t) {
  return this.__data__.get(t);
}
function sh(t) {
  return this.__data__.has(t);
}
var uh = 200;
function lh(t, n) {
  var e = this.__data__;
  if (e instanceof nt) {
    var r = e.__data__;
    if (!Ft || r.length < uh - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new et(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function J(t) {
  var n = this.__data__ = new nt(t);
  this.size = n.size;
}
J.prototype.clear = ih;
J.prototype.delete = oh;
J.prototype.get = ah;
J.prototype.has = sh;
J.prototype.set = lh;
function fh(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function Ei() {
  return [];
}
var ch = Object.prototype, hh = ch.propertyIsEnumerable, vr = Object.getOwnPropertySymbols, Ni = vr ? function(t) {
  return t == null ? [] : (t = Object(t), fh(vr(t), function(n) {
    return hh.call(t, n);
  }));
} : Ei, dh = Object.getOwnPropertySymbols, ph = dh ? function(t) {
  for (var n = []; t; )
    Se(n, Ni(t)), t = Ec(t);
  return n;
} : Ei;
function zi(t, n, e) {
  var r = n(t);
  return k(t) ? r : Se(r, e(t));
}
function wr(t) {
  return zi(t, Tn, Ni);
}
function gh(t) {
  return zi(t, Yf, ph);
}
var oe = yt(tt, "DataView"), ae = yt(tt, "Promise"), se = yt(tt, "Set"), br = "[object Map]", yh = "[object Object]", xr = "[object Promise]", Mr = "[object Set]", $r = "[object WeakMap]", Ar = "[object DataView]", _h = gt(oe), mh = gt(Ft), vh = gt(ae), wh = gt(se), bh = gt(ne), W = pt;
(oe && W(new oe(new ArrayBuffer(1))) != Ar || Ft && W(new Ft()) != br || ae && W(ae.resolve()) != xr || se && W(new se()) != Mr || ne && W(new ne()) != $r) && (W = function(t) {
  var n = pt(t), e = n == yh ? t.constructor : void 0, r = e ? gt(e) : "";
  if (r)
    switch (r) {
      case _h:
        return Ar;
      case mh:
        return br;
      case vh:
        return xr;
      case wh:
        return Mr;
      case bh:
        return $r;
    }
  return n;
});
var Tr = tt.Uint8Array, xh = "__lodash_hash_undefined__";
function Mh(t) {
  return this.__data__.set(t, xh), this;
}
function $h(t) {
  return this.__data__.has(t);
}
function gn(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new et(); ++n < e; )
    this.add(t[n]);
}
gn.prototype.add = gn.prototype.push = Mh;
gn.prototype.has = $h;
function Ah(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Th(t, n) {
  return t.has(n);
}
var Ph = 1, Sh = 2;
function Ii(t, n, e, r, i, o) {
  var a = e & Ph, s = t.length, u = n.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(t), c = o.get(n);
  if (l && c)
    return l == n && c == t;
  var f = -1, h = !0, g = e & Sh ? new gn() : void 0;
  for (o.set(t, n), o.set(n, t); ++f < s; ) {
    var d = t[f], p = n[f];
    if (r)
      var b = a ? r(p, d, f, n, t, o) : r(d, p, f, t, n, o);
    if (b !== void 0) {
      if (b)
        continue;
      h = !1;
      break;
    }
    if (g) {
      if (!Ah(n, function(_, x) {
        if (!Th(g, x) && (d === _ || i(d, _, e, r, o)))
          return g.push(x);
      })) {
        h = !1;
        break;
      }
    } else if (!(d === p || i(d, p, e, r, o))) {
      h = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), h;
}
function Oi(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Eh(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Nh = 1, zh = 2, Ih = "[object Boolean]", Oh = "[object Date]", Ch = "[object Error]", kh = "[object Map]", Rh = "[object Number]", Fh = "[object RegExp]", Lh = "[object Set]", Dh = "[object String]", Hh = "[object Symbol]", qh = "[object ArrayBuffer]", Bh = "[object DataView]", Pr = U ? U.prototype : void 0, qn = Pr ? Pr.valueOf : void 0;
function Xh(t, n, e, r, i, o, a) {
  switch (e) {
    case Bh:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case qh:
      return !(t.byteLength != n.byteLength || !o(new Tr(t), new Tr(n)));
    case Ih:
    case Oh:
    case Rh:
      return An(+t, +n);
    case Ch:
      return t.name == n.name && t.message == n.message;
    case Fh:
    case Dh:
      return t == n + "";
    case kh:
      var s = Oi;
    case Lh:
      var u = r & Nh;
      if (s || (s = Eh), t.size != n.size && !u)
        return !1;
      var l = a.get(t);
      if (l)
        return l == n;
      r |= zh, a.set(t, n);
      var c = Ii(s(t), s(n), r, i, o, a);
      return a.delete(t), c;
    case Hh:
      if (qn)
        return qn.call(t) == qn.call(n);
  }
  return !1;
}
var Gh = 1, Uh = Object.prototype, Yh = Uh.hasOwnProperty;
function Kh(t, n, e, r, i, o) {
  var a = e & Gh, s = wr(t), u = s.length, l = wr(n), c = l.length;
  if (u != c && !a)
    return !1;
  for (var f = u; f--; ) {
    var h = s[f];
    if (!(a ? h in n : Yh.call(n, h)))
      return !1;
  }
  var g = o.get(t), d = o.get(n);
  if (g && d)
    return g == n && d == t;
  var p = !0;
  o.set(t, n), o.set(n, t);
  for (var b = a; ++f < u; ) {
    h = s[f];
    var _ = t[h], x = n[h];
    if (r)
      var $ = a ? r(x, _, h, n, t, o) : r(_, x, h, t, n, o);
    if (!($ === void 0 ? _ === x || i(_, x, e, r, o) : $)) {
      p = !1;
      break;
    }
    b || (b = h == "constructor");
  }
  if (p && !b) {
    var y = t.constructor, v = n.constructor;
    y != v && "constructor" in t && "constructor" in n && !(typeof y == "function" && y instanceof y && typeof v == "function" && v instanceof v) && (p = !1);
  }
  return o.delete(t), o.delete(n), p;
}
var Vh = 1, Sr = "[object Arguments]", Er = "[object Array]", Wt = "[object Object]", Zh = Object.prototype, Nr = Zh.hasOwnProperty;
function Wh(t, n, e, r, i, o) {
  var a = k(t), s = k(n), u = a ? Er : W(t), l = s ? Er : W(n);
  u = u == Sr ? Wt : u, l = l == Sr ? Wt : l;
  var c = u == Wt, f = l == Wt, h = u == l;
  if (h && ee(t)) {
    if (!ee(n))
      return !1;
    a = !0, c = !1;
  }
  if (h && !c)
    return o || (o = new J()), a || vi(t) ? Ii(t, n, e, r, i, o) : Xh(t, n, u, e, r, i, o);
  if (!(e & Vh)) {
    var g = c && Nr.call(t, "__wrapped__"), d = f && Nr.call(n, "__wrapped__");
    if (g || d) {
      var p = g ? t.value() : t, b = d ? n.value() : n;
      return o || (o = new J()), i(p, b, e, r, o);
    }
  }
  return h ? (o || (o = new J()), Kh(t, n, e, r, i, o)) : !1;
}
function Ee(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !ht(t) && !ht(n) ? t !== t && n !== n : Wh(t, n, e, r, Ee, i);
}
var Jh = 1, Qh = 2;
function jh(t, n, e, r) {
  var i = e.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = e[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = e[i];
    var s = a[0], u = t[s], l = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in t))
        return !1;
    } else {
      var c = new J(), f;
      if (!(f === void 0 ? Ee(l, u, Jh | Qh, r, c) : f))
        return !1;
    }
  }
  return !0;
}
function Ci(t) {
  return t === t && !j(t);
}
function td(t) {
  for (var n = Tn(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Ci(i)];
  }
  return n;
}
function ki(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function nd(t) {
  var n = td(t);
  return n.length == 1 && n[0][2] ? ki(n[0][0], n[0][1]) : function(e) {
    return e === t || jh(e, t, n);
  };
}
function ed(t, n) {
  return t != null && n in Object(t);
}
function Ri(t, n, e) {
  n = Nn(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = qt(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Me(i) && $n(a, i) && (k(t) || $e(t)));
}
function rd(t, n) {
  return t != null && Ri(t, n, ed);
}
var id = 1, od = 2;
function ad(t, n) {
  return Ae(t) && Ci(n) ? ki(qt(t), n) : function(e) {
    var r = Ac(e, t);
    return r === void 0 && r === n ? rd(e, t) : Ee(n, r, id | od);
  };
}
function sd(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function ud(t) {
  return function(n) {
    return Pe(n, t);
  };
}
function ld(t) {
  return Ae(t) ? sd(qt(t)) : ud(t);
}
function Fi(t) {
  return typeof t == "function" ? t : t == null ? xe : typeof t == "object" ? k(t) ? ad(t[0], t[1]) : nd(t) : ld(t);
}
function fd(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var u = a[++i];
      if (e(o[u], u, o) === !1)
        break;
    }
    return n;
  };
}
var cd = fd();
function hd(t, n) {
  return t && cd(t, n, Tn);
}
function dd(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Ht(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var Li = dd(hd);
function pd(t) {
  return typeof t == "function" ? t : xe;
}
function Nt(t, n) {
  var e = k(t) ? Ul : Li;
  return e(t, pd(n));
}
function gd(t, n) {
  return Mn(n, function(e) {
    return [e, t[e]];
  });
}
function yd(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var _d = "[object Map]", md = "[object Set]";
function vd(t) {
  return function(n) {
    var e = W(n);
    return e == _d ? Oi(n) : e == md ? yd(n) : gd(n, t(n));
  };
}
var Di = vd(Tn);
function wd(t, n) {
  var e = -1, r = Ht(t) ? Array(t.length) : [];
  return Li(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function Y(t, n) {
  var e = k(t) ? Mn : wd;
  return e(t, Fi(n));
}
var bd = Object.prototype, xd = bd.hasOwnProperty;
function Md(t, n) {
  return t != null && xd.call(t, n);
}
function Hi(t, n) {
  return t != null && Ri(t, n, Md);
}
var $d = "[object Boolean]";
function Ad(t) {
  return t === !0 || t === !1 || ht(t) && pt(t) == $d;
}
function Td(t, n) {
  for (var e, r = -1, i = t.length; ++r < i; ) {
    var o = n(t[r]);
    o !== void 0 && (e = e === void 0 ? o : e + o);
  }
  return e;
}
var Pd = NaN;
function Sd(t, n) {
  var e = t == null ? 0 : t.length;
  return e ? Td(t, n) / e : Pd;
}
function zr(t) {
  return Sd(t, xe);
}
function Ed(t, n, e, r) {
  if (!j(t))
    return t;
  n = Nn(n, t);
  for (var i = -1, o = n.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var u = qt(n[i]), l = e;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (i != a) {
      var c = s[u];
      l = void 0, l === void 0 && (l = j(c) ? c : $n(n[i + 1]) ? [] : {});
    }
    Jl(s, u, l), s = s[u];
  }
  return t;
}
function Nd(t, n, e) {
  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
    var a = n[r], s = Pe(t, a);
    e(s, a) && Ed(o, Nn(a, t), s);
  }
  return o;
}
function Ne(t, n) {
  if (t == null)
    return {};
  var e = Mn(gh(t), function(r) {
    return [r];
  });
  return n = Fi(n), Nd(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var zd = Math.ceil, Id = Math.max;
function Od(t, n, e, r) {
  for (var i = -1, o = Id(zd((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function Cd(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && jl(n, e, r) && (e = r = void 0), n = Ln(n), e === void 0 ? (e = n, n = 0) : e = Ln(e), r = r === void 0 ? n < e ? 1 : -1 : Ln(r), Od(n, e, r);
  };
}
var ze = Cd();
function kd() {
  var t = arguments, n = En(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
const Rd = (t, n, e = 12, r = 12) => {
  const i = G().domain([0, e]).range([0, t]), o = G().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return ze((e + 1) * (r + 1)).map(function(u) {
        return { m: u % (e + 1), n: Math.floor(u / (e + 1)), x: i(u % (e + 1)), y: o(Math.floor(u / (e + 1))) };
      });
    },
    position: function(u, l) {
      typeof u == "number" && (u = [u]), typeof l == "number" && (l = [l]);
      const c = Sc(Y(l, function(f) {
        return Y(
          u,
          function(h) {
            return { x: i(h), y: o(f) };
          }
        );
      }));
      return c.length == 1 ? c[0] : c;
    }
  };
}, Fd = "_widget_18g36_1", Ld = "_label_18g36_19", Dd = "_lit_18g36_24", Hd = "_button_18g36_29", qd = "_symbol_18g36_29", Bd = "_radio_18g36_29", Xd = "_radiobutton_18g36_29", Gd = "_selected_18g36_35", Ud = "_toggle_18g36_35", Yd = "_slider_18g36_44", Kd = "_track_18g36_44", Vd = "_track_overlay_18g36_48", Zd = "_handle_18g36_55", m = {
  widget: Fd,
  label: Ld,
  lit: Dd,
  button: Hd,
  symbol: qd,
  radio: Bd,
  radiobutton: Xd,
  selected: Gd,
  toggle: Ud,
  slider: Yd,
  track: Kd,
  track_overlay: Vd,
  handle: Zd
}, zn = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, Ie = (t, n, e) => {
  var r, i, o, a;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, Wd = (t = 1) => {
  const n = H();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Jd = (t = 1) => {
  const n = H(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Qd = (t = 1) => {
  const n = H();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, jd = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = H();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, tp = (t = 1) => {
  const n = H(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, s = 0.6, u = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], l = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, np = (t = 1) => {
  const n = H(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, a), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, ep = (t = 1) => {
  const n = H(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var u = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], l = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, rp = (t = 1) => {
  var n = H(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, ip = (t = 1) => {
  const n = H(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, ue = (t) => {
  switch (t) {
    case "play":
      return Wd;
    case "forward":
      return Jd;
    case "back":
      return Qd;
    case "pause":
      return jd;
    case "reload":
      return tp;
    case "capture":
      return np;
    case "rewind":
      return ep;
    case "stop":
      return rp;
    case "push":
      return ip;
  }
}, Oe = () => {
  const t = "button";
  var n = zn(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", u = null, l = function(d) {
  }, c = ["play"], f = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    symbolsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? o.x : (o.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? o.y : (o.y = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? u : (u = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return l = d, this;
      l(d);
    },
    actions: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? f : (f = d, this);
    },
    click: function() {
      f = (f + 1) % c.length, l(), T(this.parentNode).select("." + m.symbol).attr("d", ue(c[f])(r * e));
    },
    press: function(d) {
      f = (f + 1) % c.length, l(), d.select("#button_" + n).select("." + m.symbol).attr("d", ue(c[f])(r * e));
    }
  };
}, op = () => {
  const t = "slider", n = bn(".3f");
  var e = zn(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, u = "top-left", l = null, c = function(_) {
  }, f = function(_) {
  }, h = [0, 1], g = 0, d = null, p = G().domain(h).range([0, r]).clamp(!0);
  const b = function(_, x, $ = h) {
    const y = _.select("#slider_" + e);
    p.domain($), g = x, y.selectAll("." + m.handle).transition().attr("cx", p(x)), a && y.select("." + m.label).text(d + " = " + n(g)), c(), f();
  };
  return {
    type: t,
    scale: p,
    id: function(_) {
      return typeof _ > "u" ? e : (e = _, this);
    },
    label: function(_) {
      return typeof _ > "u" ? d : (d = _, this);
    },
    size: function(_) {
      return typeof _ > "u" ? r : (r = _, this);
    },
    girth: function(_) {
      return typeof _ > "u" ? i : (i = _, this);
    },
    knob: function(_) {
      return typeof _ > "u" ? o : (o = _, this);
    },
    show: function(_) {
      return typeof _ > "u" ? a : (a = _, this);
    },
    position: function(_) {
      return typeof _ > "u" ? s : (s = _, this);
    },
    x: function(_) {
      return typeof _ > "u" ? s.x : (s.x = _, this);
    },
    y: function(_) {
      return typeof _ > "u" ? s.y : (s.y = _, this);
    },
    labelposition: function(_) {
      return typeof _ > "u" ? u : (u = _, this);
    },
    fontsize: function(_) {
      return typeof _ > "u" ? l : (l = _, this);
    },
    update: function(_) {
      if (typeof _ == "function")
        return c = _, this;
      c(_);
    },
    update_end: function(_) {
      if (typeof _ == "function")
        return f = _, this;
      f(_);
    },
    range: function(_) {
      return typeof _ > "u" ? h : (h = _, this);
    },
    value: function(_) {
      return typeof _ > "u" ? g : (g = _, this);
    },
    reset: b,
    click: b
  };
}, ap = () => {
  const t = "toggle";
  var n = zn(), e = 10, r = { x: 0, y: 0 }, i = null, o = "top", a = null, s = function(f) {
  }, u = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? r.x : (r.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? r.y : (r.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return s = f, this;
      s(f);
    },
    value: function(f) {
      return typeof f > "u" ? u : (u = f, this);
    },
    click: function() {
      u = !u;
      const f = T(this.parentNode);
      f.select("." + m.handle).transition().attr("cx", u ? 2 * e : 0), f.classed(m.selected, u), s();
    },
    reset: function(f, h) {
      u = h;
      const g = f.select("#toggle_" + n);
      g.selectAll("." + m.handle).transition().attr("cx", u ? 2 * e : 0), g.classed(m.selected, u), s();
    }
  };
}, sp = () => {
  const t = "radio";
  var n = zn(), e = 100, r = 20, i = 0.3, o = "round", a = "vertical", s = { x: 0, y: 0 }, u = "right", l = null, c = function(p) {
  }, f = [], h = 0;
  return {
    type: t,
    id: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? e : (e = p, this);
    },
    buttonsize: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    buttonpadding: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    orientation: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    shape: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? s.x : (s.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? s.y : (s.y = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? u : (u = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? l : (l = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return c = p, this;
      c(p);
    },
    choices: function(p) {
      return typeof p > "u" ? f : (f = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? h : (h = p, this);
    },
    click: function(p, b) {
      h = b, T(this.parentNode).selectAll("." + m.symbol).classed(m.selected, (_) => _ == h), c();
    },
    reset: function(p, b) {
      h = b, p.select("#radio_" + n).selectAll("." + m.symbol).classed(m.selected, (_) => _ == h), c();
    }
  };
}, up = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = T(o).attr("class", m.widget + " " + m.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", m.background).on("click", t.click).on("mouseover", function() {
    T(this).classed(m.lit, !0), T(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    T(this).classed(m.lit, !1), T(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), a.append("path").attr("d", ue(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", m.symbol), r) {
    const u = Ie(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return o;
}, qi = (t, n) => {
  const e = H();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, lp = (t, n) => {
  const e = bn(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = T(u).attr("class", m.widget + " " + m.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const l = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", qi(t.size(), t.girth())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * l).attr("height", 2 * l).attr("transform", "translate(" + -l + "," + -l + ")").attr("class", m.track_overlay).on("click", function(d) {
    const p = Un(d, this)[0];
    t.value(a.invert(p)), t.update(), t.update_end(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Za().on("drag", function(d) {
      t.value(a.invert(d.x)), t.update(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var c, f, h, g = "bottom";
  return t.fontsize && (f = t.labelposition().match(/bottom/i) != null ? Xt([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Xt([t.girth() / 2, t.knob()]) - t.fontsize() / 2), f = t.labelposition().match(/bottom/i) != null ? Xt([t.girth() / 2, t.knob()]) + 7 : -Xt([t.girth() / 2, t.knob()]) - 7, c = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, h = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", g = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", m.label).style("text-anchor", h).style("alignment-baseline", g).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + c + "," + f + ")"), u;
}, fp = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = T(a).attr("class", m.widget + " " + m.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(m.selected, t.value() == 1);
  if (s.append("path").attr("d", qi(2 * t.size(), 2 * t.size())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", m.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = Ie(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return a;
}, cp = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = io(a), u = G().domain([0, a - 1]).range([0, t.size()]), l = G().domain([0, a - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = T(c).attr("class", m.widget + " " + m.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + m.radiobutton).data(s).enter().append("g").attr("class", m.radiobutton).attr("id", (b) => "b" + b).attr("transform", (b) => t.orientation() == "vertical" ? "translate(0," + l(b) + ")" : "translate(" + u(b) + ",0)");
  var g, d;
  t.shape() == "rect" ? (g = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (g = h.append("circle").attr("r", i / 2), d = h.append("circle").attr("r", o / 2)), g.attr("class", m.background).on("mouseover", function() {
    T(this).classed(m.lit, !0), T(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    T(this).classed(m.lit, !1), T(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), d.attr("class", m.symbol), d.filter((b) => b == t.value()).classed(m.selected, !0), h.on("click", t.click);
  const p = Ie(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", m.label).text(function(b, _) {
    return t.choices()[_];
  }).attr("alignment-baseline", p.valign).attr("transform", "translate(" + p.x + "," + p.y + ")").style("font-size", t.fontsize()).attr("text-anchor", p.anchor), c;
}, Jt = (t, n) => {
  switch (t.type) {
    case "button":
      return up(t);
    case "slider":
      return lp(t);
    case "radio":
      return cp(t);
    case "toggle":
      return fp(t);
  }
}, hp = (t, n) => {
  const e = Rd(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = T("#" + t).classed(n.id + " " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), o = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && o.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && o.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (a) => "translate(" + a.x + "," + a.y + ")").style("fill", "black"), { display: i, controls: o, grid: e };
}, A = {
  widgets: {
    slider_size: 400,
    slider_gap: 1.5,
    slider_anchor: { x: 1, y: 8 },
    toggle_anchor: { x: 7, y: 4 },
    toggle_label_pos: "right",
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 4, y: 5 },
    resetbutton_anchor: { x: 2, y: 5 },
    radio_anchor: { x: 7, y: 2 },
    radio_size: 150,
    radio_orientation: "horizontal",
    radio_label_position: "top",
    radio_shape: "rect"
  },
  simulation: {
    delay: 10
  }
}, P = {
  dt: 1,
  L: 100,
  agentsize: 1,
  speed: {
    range: [0, 1],
    default: 0.2
  },
  wiggle: {
    range: [0, 180],
    default: 50
  },
  interaction_radius: {
    range: [0, 5],
    default: 3
  },
  number_of_particles: {
    choices: [50, 100, 200, 400],
    default: 2
  },
  color_by_heading: {
    default: !0
  }
}, Ce = (t) => Y(Di(t), (n) => {
  n[1].id = n[0], n[1].label = kd(rh(n[0]), /_/g, " ");
}), ke = (t) => Y(Di(t), (n) => n[1]), Re = (t, n) => Nt(t, (e, r) => e.widget = n[r]), dp = (t) => Ne(t, (n) => Hi(n, "range")), pp = (t) => Ne(t, (n) => Ad(n.default)), gp = (t) => Ne(t, (n) => Hi(n, "choices")), Bn = G().domain([0, 360]).range([0, 2 * Math.PI]), yp = G().range([0, 360]).domain([0, 2 * Math.PI]), Fe = dp(P), Le = pp(P), De = gp(P);
Ce(Fe);
Ce(Le);
Ce(De);
const Bi = ke(Fe), Xi = ke(Le), Gi = ke(De), en = Y(
  Bi,
  (t) => op().id(t.id).label(t.label).range(t.range).value(t.default).size(A.widgets.slider_size)
), le = Y(
  Xi,
  (t) => ap().id(t.id).label(t.label).value(t.default)
), fe = Y(
  Gi,
  (t) => sp().choices(t.choices).id(t.id).value(t.default).orientation(A.widgets.radio_orientation).labelposition(A.widgets.radio_label_position)
);
Re(Xi, le);
Re(Bi, en);
Re(Gi, fe);
const ot = Oe().actions(["play", "pause"]), In = Oe().actions(["back"]), On = Oe().actions(["rewind"]), _p = [ot, In, On], mp = (t, n) => {
  const e = n.position(A.widgets.slider_anchor.x, ze(en.length).map((o) => A.widgets.slider_anchor.y + A.widgets.slider_gap * o)), r = n.position(A.widgets.toggle_anchor.x, A.widgets.toggle_anchor.y), i = n.position(A.widgets.radio_anchor.x, A.widgets.radio_anchor.y);
  en.forEach((o, a) => o.position(e[a])), le[0].position(r).labelposition(A.widgets.toggle_label_pos), fe[0].position(i).size(A.widgets.radio_size).shape(A.widgets.radio_shape), ot.position(n.position(A.widgets.playbutton_anchor.x, A.widgets.playbutton_anchor.y)).size(A.widgets.playbutton_size), On.position(n.position(A.widgets.backbutton_anchor.x, A.widgets.backbutton_anchor.y)), In.position(n.position(A.widgets.resetbutton_anchor.x, A.widgets.resetbutton_anchor.y)), t.selectAll(null).data(en).enter().append(Jt), t.selectAll(null).data(le).enter().append(Jt), t.selectAll(null).data(_p).enter().append(Jt), t.selectAll(null).data(fe).enter().append(Jt);
}, vp = (t) => {
  Nt(Fe, (n) => n.widget.reset(t, n.default)), Nt(Le, (n) => n.widget.reset(t, n.default)), Nt(De, (n) => n.widget.reset(t, n.default)), P.number_of_particles.widget.update();
}, it = P.L, Ir = P.dt;
var yn = [];
const wp = () => {
  P.timer = {}, P.tick = 0;
  const t = P.number_of_particles.choices[P.number_of_particles.widget.value()];
  yn = Y(ze(t), (n) => ({
    index: n,
    x: it * Math.random(),
    y: it * Math.random(),
    theta: 2 * Math.PI * Math.random()
  }));
}, bp = () => {
  P.tick++, Nt(yn, (t) => {
    var n = Ir * P.speed.widget.value() * Math.cos(t.theta), e = Ir * P.speed.widget.value() * Math.sin(t.theta);
    const r = t.x + n, i = t.y + e;
    r < 0 && (n += it), i < 0 && (e += it), r > it && (n -= it), i > it && (e -= it), t.x += n, t.y += e;
    var o = yn.filter((u) => (u.x - t.x) ** 2 + (u.y - t.y) ** 2 <= P.interaction_radius.widget.value() ** 2), a = zr(Y(o, (u) => Math.cos(Bn(u.theta)))), s = zr(Y(o, (u) => Math.sin(Bn(u.theta))));
    t.theta = yp(Math.atan2(s, a)), t.theta += Bn(P.wiggle.widget.value()) * (Math.random() - 0.5);
  });
}, xp = "_node_1fco6_1", Ui = {
  node: xp
}, Yi = P.L, rn = G().domain([0, Yi]), ce = G().domain([0, Yi]), Mp = (t, n) => {
  const e = n.display_size.width, r = n.display_size.height;
  rn.range([0, e]), ce.range([0, r]), t.selectAll("#origin").remove(), t.append("g").attr("id", "origin").selectAll(null).data(yn).enter().append("circle").attr("class", Ui.node).attr("cx", (o) => rn(o.x)).attr("cy", (o) => ce(o.y)).attr("r", rn(P.agentsize / 2)).style("fill", (o) => P.color_by_heading.widget.value() ? fi(o.theta / 2 / Math.PI) : "black");
}, $p = (t, n) => {
  t.selectAll("." + Ui.node).attr("cx", (e) => rn(e.x)).attr("cy", (e) => ce(e.y)).style("fill", (e) => P.color_by_heading.widget.value() ? fi(e.theta / 2 / Math.PI) : "black");
};
function Ap(t, n) {
  bp(), $p(t);
}
function he(t, n) {
  wp(), Mp(t, n);
}
var Or = {};
const Tp = (t, n) => {
  ot.value() == 1 ? Or = Ps(() => Ap(t), A.simulation.delay) : Or.stop();
}, Pp = (t, n, e) => {
  On.update(() => vp(n)), ot.update(() => Tp(t)), In.update(() => he(t, e)), P.number_of_particles.widget.update(() => he(t, e));
}, Sp = {
  name: "@explorables/explorable_template",
  title: "Explorable Title",
  subtitle: "Explorable Subtitle",
  description: "This is a template for making a complexity explorable. The template can be used to create a new complexity explorable. This template implements the Vicsek Model.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function Ep(t, n = Ki) {
  const e = hp(t, n), r = e.display, i = e.controls, o = e.grid;
  return mp(i, o), Pp(r, i, n), he(r, n), {
    halt() {
      ot.value() === 1 && ot.press(i);
    },
    reset() {
      ot.value() === 1 && ot.press(i), On.press(i), In.press(i);
    },
    config: n,
    meta: Sp
  };
}
export {
  Ki as config,
  Ep as default,
  Ep as load,
  Sp as meta
};
