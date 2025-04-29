(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}._agent_502tr_1{opacity:.7;stroke:#000;stroke-width:.5px}._xlabel_502tr_14,._ylabel_502tr_17{text-anchor:middle}._caxis_502tr_20{stroke:#000;stroke-width:.5px;stroke-opacity:.5}._dot_502tr_26{stroke:gray;stroke-width:.5px;fill:#8b0000}._op_502tr_32{stroke:#8b0000;stroke-width:.5px;fill:none}._plotline_502tr_38{stroke:#8b0000;stroke-width:2px;fill:none}._osctrack_502tr_44{fill:none;stroke-width:1px;stroke-opacity:.6;stroke:gray}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const mo = {
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
function un(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function vo(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Qr(t) {
  let n, e, r;
  t.length !== 2 ? (n = un, e = (s, u) => un(t(s), u), r = (s, u) => t(s) - u) : (n = t === un || t === vo ? t : wo, e = t, r = t);
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
function wo() {
  return 0;
}
function bo(t) {
  return t === null ? NaN : +t;
}
const xo = Qr(un), Mo = xo.right;
Qr(bo).center;
const $o = Math.sqrt(50), Ao = Math.sqrt(10), To = Math.sqrt(2);
function yn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= $o ? 10 : o >= Ao ? 5 : o >= To ? 2 : 1;
  let s, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / a, s = Math.round(t * l), u = Math.round(n * l), s / l < t && ++s, u / l > n && --u, l = -l) : (l = Math.pow(10, i) * a, s = Math.round(t / l), u = Math.round(n / l), s * l < t && ++s, u * l > n && --u), u < s && 0.5 <= e && e < 2 ? yn(t, n, e * 2) : [s, u, l];
}
function So(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? yn(n, t, e) : yn(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, u = new Array(s);
  if (r)
    if (a < 0) for (let l = 0; l < s; ++l) u[l] = (o - l) / -a;
    else for (let l = 0; l < s; ++l) u[l] = (o - l) * a;
  else if (a < 0) for (let l = 0; l < s; ++l) u[l] = (i + l) / -a;
  else for (let l = 0; l < s; ++l) u[l] = (i + l) * a;
  return u;
}
function re(t, n, e) {
  return n = +n, t = +t, e = +e, yn(t, n, e)[2];
}
function Po(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? re(n, t, e) : re(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function jt(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function Eo(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
function zo(t) {
  return t;
}
var Vn = 1, Zn = 2, ie = 3, Ct = 4, rr = 1e-6;
function No(t) {
  return "translate(" + t + ",0)";
}
function ko(t) {
  return "translate(0," + t + ")";
}
function Oo(t) {
  return (n) => +t(n);
}
function Io(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function Co() {
  return !this.__axis;
}
function jr(t, n) {
  var e = [], r = null, i = null, o = 6, a = 6, s = 3, u = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, l = t === Vn || t === Ct ? -1 : 1, c = t === Ct || t === Zn ? "x" : "y", f = t === Vn || t === ie ? No : ko;
  function h(d) {
    var p = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), g = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : zo), x = Math.max(o, 0) + s, _ = n.range(), $ = +_[0] + u, A = +_[_.length - 1] + u, y = (n.bandwidth ? Io : Oo)(n.copy(), u), w = d.selection ? d.selection() : d, S = w.selectAll(".domain").data([null]), T = w.selectAll(".tick").data(p, n).order(), k = T.exit(), C = T.enter().append("g").attr("class", "tick"), R = T.select("line"), b = T.select("text");
    S = S.merge(S.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), T = T.merge(C), R = R.merge(C.append("line").attr("stroke", "currentColor").attr(c + "2", l * o)), b = b.merge(C.append("text").attr("fill", "currentColor").attr(c, l * x).attr("dy", t === Vn ? "0em" : t === ie ? "0.71em" : "0.32em")), d !== w && (S = S.transition(d), T = T.transition(d), R = R.transition(d), b = b.transition(d), k = k.transition(d).attr("opacity", rr).attr("transform", function(O) {
      return isFinite(O = y(O)) ? f(O + u) : this.getAttribute("transform");
    }), C.attr("opacity", rr).attr("transform", function(O) {
      var z = this.parentNode.__axis;
      return f((z && isFinite(z = z(O)) ? z : y(O)) + u);
    })), k.remove(), S.attr("d", t === Ct || t === Zn ? a ? "M" + l * a + "," + $ + "H" + u + "V" + A + "H" + l * a : "M" + u + "," + $ + "V" + A : a ? "M" + $ + "," + l * a + "V" + u + "H" + A + "V" + l * a : "M" + $ + "," + u + "H" + A), T.attr("opacity", 1).attr("transform", function(O) {
      return f(y(O) + u);
    }), R.attr(c + "2", l * o), b.attr(c, l * x).text(g), w.filter(Co).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Zn ? "start" : t === Ct ? "end" : "middle"), w.each(function() {
      this.__axis = y;
    });
  }
  return h.scale = function(d) {
    return arguments.length ? (n = d, h) : n;
  }, h.ticks = function() {
    return e = Array.from(arguments), h;
  }, h.tickArguments = function(d) {
    return arguments.length ? (e = d == null ? [] : Array.from(d), h) : e.slice();
  }, h.tickValues = function(d) {
    return arguments.length ? (r = d == null ? null : Array.from(d), h) : r && r.slice();
  }, h.tickFormat = function(d) {
    return arguments.length ? (i = d, h) : i;
  }, h.tickSize = function(d) {
    return arguments.length ? (o = a = +d, h) : o;
  }, h.tickSizeInner = function(d) {
    return arguments.length ? (o = +d, h) : o;
  }, h.tickSizeOuter = function(d) {
    return arguments.length ? (a = +d, h) : a;
  }, h.tickPadding = function(d) {
    return arguments.length ? (s = +d, h) : s;
  }, h.offset = function(d) {
    return arguments.length ? (u = +d, h) : u;
  }, h;
}
function Ro(t) {
  return jr(ie, t);
}
function Fo(t) {
  return jr(Ct, t);
}
var Lo = { value: () => {
} };
function Te() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new ln(e);
}
function ln(t) {
  this._ = t;
}
function Do(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
ln.prototype = Te.prototype = {
  constructor: ln,
  on: function(t, n) {
    var e = this._, r = Do(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Ho(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = ir(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = ir(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new ln(t);
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
function Ho(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function ir(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Lo, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var oe = "http://www.w3.org/1999/xhtml";
const or = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: oe,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function En(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), or.hasOwnProperty(n) ? { space: or[n], local: t } : t;
}
function qo(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === oe && n.documentElement.namespaceURI === oe ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Bo(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ti(t) {
  var n = En(t);
  return (n.local ? Bo : qo)(n);
}
function Xo() {
}
function Se(t) {
  return t == null ? Xo : function() {
    return this.querySelector(t);
  };
}
function Go(t) {
  typeof t != "function" && (t = Se(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), u, l, c = 0; c < a; ++c)
      (u = o[c]) && (l = t.call(u, u.__data__, c, o)) && ("__data__" in u && (l.__data__ = u.__data__), s[c] = l);
  return new H(r, this._parents);
}
function Uo(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Yo() {
  return [];
}
function ni(t) {
  return t == null ? Yo : function() {
    return this.querySelectorAll(t);
  };
}
function Ko(t) {
  return function() {
    return Uo(t.apply(this, arguments));
  };
}
function Vo(t) {
  typeof t == "function" ? t = Ko(t) : t = ni(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
  return new H(r, i);
}
function ei(t) {
  return function() {
    return this.matches(t);
  };
}
function ri(t) {
  return function(n) {
    return n.matches(t);
  };
}
var Zo = Array.prototype.find;
function Wo(t) {
  return function() {
    return Zo.call(this.children, t);
  };
}
function Jo() {
  return this.firstElementChild;
}
function Qo(t) {
  return this.select(t == null ? Jo : Wo(typeof t == "function" ? t : ri(t)));
}
var jo = Array.prototype.filter;
function ta() {
  return Array.from(this.children);
}
function na(t) {
  return function() {
    return jo.call(this.children, t);
  };
}
function ea(t) {
  return this.selectAll(t == null ? ta : na(typeof t == "function" ? t : ri(t)));
}
function ra(t) {
  typeof t != "function" && (t = ei(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new H(r, this._parents);
}
function ii(t) {
  return new Array(t.length);
}
function ia() {
  return new H(this._enter || this._groups.map(ii), this._parents);
}
function _n(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
_n.prototype = {
  constructor: _n,
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
function oa(t) {
  return function() {
    return t;
  };
}
function aa(t, n, e, r, i, o) {
  for (var a = 0, s, u = n.length, l = o.length; a < l; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new _n(t, o[a]);
  for (; a < u; ++a)
    (s = n[a]) && (i[a] = s);
}
function sa(t, n, e, r, i, o, a) {
  var s, u, l = /* @__PURE__ */ new Map(), c = n.length, f = o.length, h = new Array(c), d;
  for (s = 0; s < c; ++s)
    (u = n[s]) && (h[s] = d = a.call(u, u.__data__, s, n) + "", l.has(d) ? i[s] = u : l.set(d, u));
  for (s = 0; s < f; ++s)
    d = a.call(t, o[s], s, o) + "", (u = l.get(d)) ? (r[s] = u, u.__data__ = o[s], l.delete(d)) : e[s] = new _n(t, o[s]);
  for (s = 0; s < c; ++s)
    (u = n[s]) && l.get(h[s]) === u && (i[s] = u);
}
function ua(t) {
  return t.__data__;
}
function la(t, n) {
  if (!arguments.length) return Array.from(this, ua);
  var e = n ? sa : aa, r = this._parents, i = this._groups;
  typeof t != "function" && (t = oa(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var c = r[l], f = i[l], h = f.length, d = fa(t.call(c, c && c.__data__, l, r)), p = d.length, g = s[l] = new Array(p), x = a[l] = new Array(p), _ = u[l] = new Array(h);
    e(c, f, g, x, _, d, n);
    for (var $ = 0, A = 0, y, w; $ < p; ++$)
      if (y = g[$]) {
        for ($ >= A && (A = $ + 1); !(w = x[A]) && ++A < p; ) ;
        y._next = w || null;
      }
  }
  return a = new H(a, r), a._enter = s, a._exit = u, a;
}
function fa(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function ca() {
  return new H(this._exit || this._groups.map(ii), this._parents);
}
function ha(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function da(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var l = e[u], c = r[u], f = l.length, h = s[u] = new Array(f), d, p = 0; p < f; ++p)
      (d = l[p] || c[p]) && (h[p] = d);
  for (; u < i; ++u)
    s[u] = e[u];
  return new H(s, this._parents);
}
function pa() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function ga(t) {
  t || (t = ya);
  function n(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, u = i[o] = new Array(s), l, c = 0; c < s; ++c)
      (l = a[c]) && (u[c] = l);
    u.sort(n);
  }
  return new H(i, this._parents).order();
}
function ya(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function _a() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function ma() {
  return Array.from(this);
}
function va() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function wa() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function ba() {
  return !this.node();
}
function xa(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Ma(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function $a(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Aa(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Ta(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Sa(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Pa(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Ea(t, n) {
  var e = En(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? $a : Ma : typeof n == "function" ? e.local ? Pa : Sa : e.local ? Ta : Aa)(e, n));
}
function oi(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function za(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Na(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function ka(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Oa(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? za : typeof n == "function" ? ka : Na)(t, n, e ?? "")) : Et(this.node(), t);
}
function Et(t, n) {
  return t.style.getPropertyValue(n) || oi(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Ia(t) {
  return function() {
    delete this[t];
  };
}
function Ca(t, n) {
  return function() {
    this[t] = n;
  };
}
function Ra(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Fa(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Ia : typeof n == "function" ? Ra : Ca)(t, n)) : this.node()[t];
}
function ai(t) {
  return t.trim().split(/^|\s+/);
}
function Pe(t) {
  return t.classList || new si(t);
}
function si(t) {
  this._node = t, this._names = ai(t.getAttribute("class") || "");
}
si.prototype = {
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
function ui(t, n) {
  for (var e = Pe(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function li(t, n) {
  for (var e = Pe(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function La(t) {
  return function() {
    ui(this, t);
  };
}
function Da(t) {
  return function() {
    li(this, t);
  };
}
function Ha(t, n) {
  return function() {
    (n.apply(this, arguments) ? ui : li)(this, t);
  };
}
function qa(t, n) {
  var e = ai(t + "");
  if (arguments.length < 2) {
    for (var r = Pe(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Ha : n ? La : Da)(e, n));
}
function Ba() {
  this.textContent = "";
}
function Xa(t) {
  return function() {
    this.textContent = t;
  };
}
function Ga(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Ua(t) {
  return arguments.length ? this.each(t == null ? Ba : (typeof t == "function" ? Ga : Xa)(t)) : this.node().textContent;
}
function Ya() {
  this.innerHTML = "";
}
function Ka(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Va(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function Za(t) {
  return arguments.length ? this.each(t == null ? Ya : (typeof t == "function" ? Va : Ka)(t)) : this.node().innerHTML;
}
function Wa() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ja() {
  return this.each(Wa);
}
function Qa() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ja() {
  return this.each(Qa);
}
function ts(t) {
  var n = typeof t == "function" ? t : ti(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function ns() {
  return null;
}
function es(t, n) {
  var e = typeof t == "function" ? t : ti(t), r = n == null ? ns : typeof n == "function" ? n : Se(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function rs() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function is() {
  return this.each(rs);
}
function os() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function as() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function ss(t) {
  return this.select(t ? as : os);
}
function us(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function ls(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function fs(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function cs(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function hs(t, n, e) {
  return function() {
    var r = this.__on, i, o = ls(n);
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
function ds(t, n, e) {
  var r = fs(t + ""), i, o = r.length, a;
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
  for (s = n ? hs : cs, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function fi(t, n, e) {
  var r = oi(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function ps(t, n) {
  return function() {
    return fi(this, t, n);
  };
}
function gs(t, n) {
  return function() {
    return fi(this, t, n.apply(this, arguments));
  };
}
function ys(t, n) {
  return this.each((typeof n == "function" ? gs : ps)(t, n));
}
function* _s() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var ci = [null];
function H(t, n) {
  this._groups = t, this._parents = n;
}
function Vt() {
  return new H([[document.documentElement]], ci);
}
function ms() {
  return this;
}
H.prototype = Vt.prototype = {
  constructor: H,
  select: Go,
  selectAll: Vo,
  selectChild: Qo,
  selectChildren: ea,
  filter: ra,
  data: la,
  enter: ia,
  exit: ca,
  join: ha,
  merge: da,
  selection: ms,
  order: pa,
  sort: ga,
  call: _a,
  nodes: ma,
  node: va,
  size: wa,
  empty: ba,
  each: xa,
  attr: Ea,
  style: Oa,
  property: Fa,
  classed: qa,
  text: Ua,
  html: Za,
  raise: Ja,
  lower: ja,
  append: ts,
  insert: es,
  remove: is,
  clone: ss,
  datum: us,
  on: ds,
  dispatch: ys,
  [Symbol.iterator]: _s
};
function N(t) {
  return typeof t == "string" ? new H([[document.querySelector(t)]], [document.documentElement]) : new H([[t]], ci);
}
function vs(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function ae(t, n) {
  if (t = vs(t), n === void 0 && (n = t.currentTarget), n) {
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
const ws = { passive: !1 }, Ht = { capture: !0, passive: !1 };
function Wn(t) {
  t.stopImmediatePropagation();
}
function $t(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function bs(t) {
  var n = t.document.documentElement, e = N(t).on("dragstart.drag", $t, Ht);
  "onselectstart" in n ? e.on("selectstart.drag", $t, Ht) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function xs(t, n) {
  var e = t.document.documentElement, r = N(t).on("dragstart.drag", null);
  n && (r.on("click.drag", $t, Ht), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const tn = (t) => () => t;
function se(t, {
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
se.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Ms(t) {
  return !t.ctrlKey && !t.button;
}
function $s() {
  return this.parentNode;
}
function As(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function Ts() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ss() {
  var t = Ms, n = $s, e = As, r = Ts, i = {}, o = Te("start", "drag", "end"), a = 0, s, u, l, c, f = 0;
  function h(y) {
    y.on("mousedown.drag", d).filter(r).on("touchstart.drag", x).on("touchmove.drag", _, ws).on("touchend.drag touchcancel.drag", $).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function d(y, w) {
    if (!(c || !t.call(this, y, w))) {
      var S = A(this, n.call(this, y, w), y, w, "mouse");
      S && (N(y.view).on("mousemove.drag", p, Ht).on("mouseup.drag", g, Ht), bs(y.view), Wn(y), l = !1, s = y.clientX, u = y.clientY, S("start", y));
    }
  }
  function p(y) {
    if ($t(y), !l) {
      var w = y.clientX - s, S = y.clientY - u;
      l = w * w + S * S > f;
    }
    i.mouse("drag", y);
  }
  function g(y) {
    N(y.view).on("mousemove.drag mouseup.drag", null), xs(y.view, l), $t(y), i.mouse("end", y);
  }
  function x(y, w) {
    if (t.call(this, y, w)) {
      var S = y.changedTouches, T = n.call(this, y, w), k = S.length, C, R;
      for (C = 0; C < k; ++C)
        (R = A(this, T, y, w, S[C].identifier, S[C])) && (Wn(y), R("start", y, S[C]));
    }
  }
  function _(y) {
    var w = y.changedTouches, S = w.length, T, k;
    for (T = 0; T < S; ++T)
      (k = i[w[T].identifier]) && ($t(y), k("drag", y, w[T]));
  }
  function $(y) {
    var w = y.changedTouches, S = w.length, T, k;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), T = 0; T < S; ++T)
      (k = i[w[T].identifier]) && (Wn(y), k("end", y, w[T]));
  }
  function A(y, w, S, T, k, C) {
    var R = o.copy(), b = ae(C || S, w), O, z, X;
    if ((X = e.call(y, new se("beforestart", {
      sourceEvent: S,
      target: h,
      identifier: k,
      active: a,
      x: b[0],
      y: b[1],
      dx: 0,
      dy: 0,
      dispatch: R
    }), T)) != null)
      return O = X.x - b[0] || 0, z = X.y - b[1] || 0, function Qt(ot, ft, bt) {
        var B = b, Kn;
        switch (ot) {
          case "start":
            i[k] = Qt, Kn = a++;
            break;
          case "end":
            delete i[k], --a;
          // falls through
          case "drag":
            b = ae(bt || ft, w), Kn = a;
            break;
        }
        R.call(
          ot,
          y,
          new se(ot, {
            sourceEvent: ft,
            subject: X,
            target: h,
            identifier: k,
            active: Kn,
            x: b[0] + O,
            y: b[1] + z,
            dx: b[0] - B[0],
            dy: b[1] - B[1],
            dispatch: R
          }),
          T
        );
      };
  }
  return h.filter = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : tn(!!y), h) : t;
  }, h.container = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : tn(y), h) : n;
  }, h.subject = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : tn(y), h) : e;
  }, h.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : tn(!!y), h) : r;
  }, h.on = function() {
    var y = o.on.apply(o, arguments);
    return y === o ? h : y;
  }, h.clickDistance = function(y) {
    return arguments.length ? (f = (y = +y) * y, h) : Math.sqrt(f);
  }, h;
}
function Ee(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function hi(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Zt() {
}
var qt = 0.7, mn = 1 / qt, At = "\\s*([+-]?\\d+)\\s*", Bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", V = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ps = /^#([0-9a-f]{3,8})$/, Es = new RegExp(`^rgb\\(${At},${At},${At}\\)$`), zs = new RegExp(`^rgb\\(${V},${V},${V}\\)$`), Ns = new RegExp(`^rgba\\(${At},${At},${At},${Bt}\\)$`), ks = new RegExp(`^rgba\\(${V},${V},${V},${Bt}\\)$`), Os = new RegExp(`^hsl\\(${Bt},${V},${V}\\)$`), Is = new RegExp(`^hsla\\(${Bt},${V},${V},${Bt}\\)$`), ar = {
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
Ee(Zt, pt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: sr,
  // Deprecated! Use color.formatHex.
  formatHex: sr,
  formatHex8: Cs,
  formatHsl: Rs,
  formatRgb: ur,
  toString: ur
});
function sr() {
  return this.rgb().formatHex();
}
function Cs() {
  return this.rgb().formatHex8();
}
function Rs() {
  return di(this).formatHsl();
}
function ur() {
  return this.rgb().formatRgb();
}
function pt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Ps.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? lr(n) : e === 3 ? new L(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? nn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? nn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Es.exec(t)) ? new L(n[1], n[2], n[3], 1) : (n = zs.exec(t)) ? new L(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Ns.exec(t)) ? nn(n[1], n[2], n[3], n[4]) : (n = ks.exec(t)) ? nn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Os.exec(t)) ? hr(n[1], n[2] / 100, n[3] / 100, 1) : (n = Is.exec(t)) ? hr(n[1], n[2] / 100, n[3] / 100, n[4]) : ar.hasOwnProperty(t) ? lr(ar[t]) : t === "transparent" ? new L(NaN, NaN, NaN, 0) : null;
}
function lr(t) {
  return new L(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function nn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new L(t, n, e, r);
}
function Fs(t) {
  return t instanceof Zt || (t = pt(t)), t ? (t = t.rgb(), new L(t.r, t.g, t.b, t.opacity)) : new L();
}
function vn(t, n, e, r) {
  return arguments.length === 1 ? Fs(t) : new L(t, n, e, r ?? 1);
}
function L(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
Ee(L, vn, hi(Zt, {
  brighter(t) {
    return t = t == null ? mn : Math.pow(mn, t), new L(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? qt : Math.pow(qt, t), new L(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new L(dt(this.r), dt(this.g), dt(this.b), wn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: fr,
  // Deprecated! Use color.formatHex.
  formatHex: fr,
  formatHex8: Ls,
  formatRgb: cr,
  toString: cr
}));
function fr() {
  return `#${ht(this.r)}${ht(this.g)}${ht(this.b)}`;
}
function Ls() {
  return `#${ht(this.r)}${ht(this.g)}${ht(this.b)}${ht((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function cr() {
  const t = wn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${dt(this.r)}, ${dt(this.g)}, ${dt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function wn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function dt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ht(t) {
  return t = dt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function hr(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new U(t, n, e, r);
}
function di(t) {
  if (t instanceof U) return new U(t.h, t.s, t.l, t.opacity);
  if (t instanceof Zt || (t = pt(t)), !t) return new U();
  if (t instanceof U) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new U(a, s, u, t.opacity);
}
function Ds(t, n, e, r) {
  return arguments.length === 1 ? di(t) : new U(t, n, e, r ?? 1);
}
function U(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
Ee(U, Ds, hi(Zt, {
  brighter(t) {
    return t = t == null ? mn : Math.pow(mn, t), new U(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? qt : Math.pow(qt, t), new U(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new L(
      Jn(t >= 240 ? t - 240 : t + 120, i, r),
      Jn(t, i, r),
      Jn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new U(dr(this.h), en(this.s), en(this.l), wn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = wn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${dr(this.h)}, ${en(this.s) * 100}%, ${en(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function dr(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function en(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Jn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
function Hs(t, n, e, r, i) {
  var o = t * t, a = o * t;
  return ((1 - 3 * t + 3 * o - a) * n + (4 - 6 * o + 3 * a) * e + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6;
}
function qs(t) {
  var n = t.length - 1;
  return function(e) {
    var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n), i = t[r], o = t[r + 1], a = r > 0 ? t[r - 1] : 2 * i - o, s = r < n - 1 ? t[r + 2] : 2 * o - i;
    return Hs((e - r / n) * n, a, i, o, s);
  };
}
const ze = (t) => () => t;
function Bs(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Xs(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Gs(t) {
  return (t = +t) == 1 ? pi : function(n, e) {
    return e - n ? Xs(n, e, t) : ze(isNaN(n) ? e : n);
  };
}
function pi(t, n) {
  var e = n - t;
  return e ? Bs(t, e) : ze(isNaN(t) ? n : t);
}
const bn = function t(n) {
  var e = Gs(n);
  function r(i, o) {
    var a = e((i = vn(i)).r, (o = vn(o)).r), s = e(i.g, o.g), u = e(i.b, o.b), l = pi(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = u(c), i.opacity = l(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Us(t) {
  return function(n) {
    var e = n.length, r = new Array(e), i = new Array(e), o = new Array(e), a, s;
    for (a = 0; a < e; ++a)
      s = vn(n[a]), r[a] = s.r || 0, i[a] = s.g || 0, o[a] = s.b || 0;
    return r = t(r), i = t(i), o = t(o), s.opacity = 1, function(u) {
      return s.r = r(u), s.g = i(u), s.b = o(u), s + "";
    };
  };
}
var Ys = Us(qs);
function Ks(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Vs(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Zs(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = Ne(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function Ws(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function G(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function Js(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = Ne(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var ue = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Qn = new RegExp(ue.source, "g");
function Qs(t) {
  return function() {
    return t;
  };
}
function js(t) {
  return function(n) {
    return t(n) + "";
  };
}
function gi(t, n) {
  var e = ue.lastIndex = Qn.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", n = n + ""; (r = ue.exec(t)) && (i = Qn.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: G(r, i) })), e = Qn.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? js(u[0].x) : Qs(n) : (n = u.length, function(l) {
    for (var c = 0, f; c < n; ++c) s[(f = u[c]).i] = f.x(l);
    return s.join("");
  });
}
function Ne(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? ze(n) : (e === "number" ? G : e === "string" ? (r = pt(n)) ? (n = r, bn) : gi : n instanceof pt ? bn : n instanceof Date ? Ws : Vs(n) ? Ks : Array.isArray(n) ? Zs : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Js : G)(t, n);
}
function tu(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var pr = 180 / Math.PI, le = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function yi(t, n, e, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (u = t * e + n * r) && (e -= t * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t * r < n * e && (t = -t, n = -n, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * pr,
    skewX: Math.atan(u) * pr,
    scaleX: a,
    scaleY: s
  };
}
var rn;
function nu(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? le : yi(n.a, n.b, n.c, n.d, n.e, n.f);
}
function eu(t) {
  return t == null || (rn || (rn = document.createElementNS("http://www.w3.org/2000/svg", "g")), rn.setAttribute("transform", t), !(t = rn.transform.baseVal.consolidate())) ? le : (t = t.matrix, yi(t.a, t.b, t.c, t.d, t.e, t.f));
}
function _i(t, n, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, c, f, h, d, p) {
    if (l !== f || c !== h) {
      var g = d.push("translate(", null, n, null, e);
      p.push({ i: g - 4, x: G(l, f) }, { i: g - 2, x: G(c, h) });
    } else (f || h) && d.push("translate(" + f + n + h + e);
  }
  function a(l, c, f, h) {
    l !== c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: G(l, c) })) : c && f.push(i(f) + "rotate(" + c + r);
  }
  function s(l, c, f, h) {
    l !== c ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: G(l, c) }) : c && f.push(i(f) + "skewX(" + c + r);
  }
  function u(l, c, f, h, d, p) {
    if (l !== f || c !== h) {
      var g = d.push(i(d) + "scale(", null, ",", null, ")");
      p.push({ i: g - 4, x: G(l, f) }, { i: g - 2, x: G(c, h) });
    } else (f !== 1 || h !== 1) && d.push(i(d) + "scale(" + f + "," + h + ")");
  }
  return function(l, c) {
    var f = [], h = [];
    return l = t(l), c = t(c), o(l.translateX, l.translateY, c.translateX, c.translateY, f, h), a(l.rotate, c.rotate, f, h), s(l.skewX, c.skewX, f, h), u(l.scaleX, l.scaleY, c.scaleX, c.scaleY, f, h), l = c = null, function(d) {
      for (var p = -1, g = h.length, x; ++p < g; ) f[(x = h[p]).i] = x.x(d);
      return f.join("");
    };
  };
}
var ru = _i(nu, "px, ", "px)", "deg)"), iu = _i(eu, ", ", ")", ")"), zt = 0, Rt = 0, Ot = 0, mi = 1e3, xn, Ft, Mn = 0, gt = 0, zn = 0, Xt = typeof performance == "object" && performance.now ? performance : Date, vi = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Nn() {
  return gt || (vi(ou), gt = Xt.now() + zn);
}
function ou() {
  gt = 0;
}
function Gt() {
  this._call = this._time = this._next = null;
}
Gt.prototype = wi.prototype = {
  constructor: Gt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Nn() : +e) + (n == null ? 0 : +n), !this._next && Ft !== this && (Ft ? Ft._next = this : xn = this, Ft = this), this._call = t, this._time = e, fe();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, fe());
  }
};
function wi(t, n, e) {
  var r = new Gt();
  return r.restart(t, n, e), r;
}
function au() {
  Nn(), ++zt;
  for (var t = xn, n; t; )
    (n = gt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --zt;
}
function gr() {
  gt = (Mn = Xt.now()) + zn, zt = Rt = 0;
  try {
    au();
  } finally {
    zt = 0, uu(), gt = 0;
  }
}
function su() {
  var t = Xt.now(), n = t - Mn;
  n > mi && (zn -= n, Mn = t);
}
function uu() {
  for (var t, n = xn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : xn = e);
  Ft = t, fe(r);
}
function fe(t) {
  if (!zt) {
    Rt && (Rt = clearTimeout(Rt));
    var n = t - gt;
    n > 24 ? (t < 1 / 0 && (Rt = setTimeout(gr, t - Xt.now() - zn)), Ot && (Ot = clearInterval(Ot))) : (Ot || (Mn = Xt.now(), Ot = setInterval(su, mi)), zt = 1, vi(gr));
  }
}
function yr(t, n, e) {
  var r = new Gt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function lu(t, n, e) {
  var r = new Gt(), i = n;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? Nn() : +s, r._restart(function u(l) {
      l += i, r._restart(u, i += a, s), o(l);
    }, a, s);
  }, r.restart(t, n, e), r;
}
var fu = Te("start", "end", "cancel", "interrupt"), cu = [], bi = 0, _r = 1, ce = 2, fn = 3, mr = 4, he = 5, cn = 6;
function kn(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  hu(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: fu,
    tween: cu,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: bi
  });
}
function ke(t, n) {
  var e = Y(t, n);
  if (e.state > bi) throw new Error("too late; already scheduled");
  return e;
}
function W(t, n) {
  var e = Y(t, n);
  if (e.state > fn) throw new Error("too late; already running");
  return e;
}
function Y(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function hu(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = wi(o, 0, e.time);
  function o(l) {
    e.state = _r, e.timer.restart(a, e.delay, e.time), e.delay <= l && a(l - e.delay);
  }
  function a(l) {
    var c, f, h, d;
    if (e.state !== _r) return u();
    for (c in r)
      if (d = r[c], d.name === e.name) {
        if (d.state === fn) return yr(a);
        d.state === mr ? (d.state = cn, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[c]) : +c < n && (d.state = cn, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[c]);
      }
    if (yr(function() {
      e.state === fn && (e.state = mr, e.timer.restart(s, e.delay, e.time), s(l));
    }), e.state = ce, e.on.call("start", t, t.__data__, e.index, e.group), e.state === ce) {
      for (e.state = fn, i = new Array(h = e.tween.length), c = 0, f = -1; c < h; ++c)
        (d = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++f] = d);
      i.length = f + 1;
    }
  }
  function s(l) {
    for (var c = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(u), e.state = he, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, c);
    e.state === he && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = cn, e.timer.stop(), delete r[n];
    for (var l in r) return;
    delete t.__transition;
  }
}
function du(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > ce && r.state < he, r.state = cn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function pu(t) {
  return this.each(function() {
    du(this, t);
  });
}
function gu(t, n) {
  var e, r;
  return function() {
    var i = W(this, t), o = i.tween;
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
function yu(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = W(this, t), a = o.tween;
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
function _u(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Y(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? gu : yu)(e, t, n));
}
function Oe(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = W(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return Y(i, r).value[n];
  };
}
function xi(t, n) {
  var e;
  return (typeof n == "number" ? G : n instanceof pt ? bn : (e = pt(n)) ? (n = e, bn) : gi)(t, n);
}
function mu(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function vu(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function wu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function bu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function xu(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Mu(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function $u(t, n) {
  var e = En(t), r = e === "transform" ? iu : xi;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Mu : xu)(e, r, Oe(this, "attr." + t, n)) : n == null ? (e.local ? vu : mu)(e) : (e.local ? bu : wu)(e, r, n));
}
function Au(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Tu(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Su(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Tu(t, o)), e;
  }
  return i._value = n, i;
}
function Pu(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Au(t, o)), e;
  }
  return i._value = n, i;
}
function Eu(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = En(t);
  return this.tween(e, (r.local ? Su : Pu)(r, n));
}
function zu(t, n) {
  return function() {
    ke(this, t).delay = +n.apply(this, arguments);
  };
}
function Nu(t, n) {
  return n = +n, function() {
    ke(this, t).delay = n;
  };
}
function ku(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? zu : Nu)(n, t)) : Y(this.node(), n).delay;
}
function Ou(t, n) {
  return function() {
    W(this, t).duration = +n.apply(this, arguments);
  };
}
function Iu(t, n) {
  return n = +n, function() {
    W(this, t).duration = n;
  };
}
function Cu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ou : Iu)(n, t)) : Y(this.node(), n).duration;
}
function Ru(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    W(this, t).ease = n;
  };
}
function Fu(t) {
  var n = this._id;
  return arguments.length ? this.each(Ru(n, t)) : Y(this.node(), n).ease;
}
function Lu(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    W(this, t).ease = e;
  };
}
function Du(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Lu(this._id, t));
}
function Hu(t) {
  typeof t != "function" && (t = ei(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new tt(r, this._parents, this._name, this._id);
}
function qu(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = n[s], l = e[s], c = u.length, f = a[s] = new Array(c), h, d = 0; d < c; ++d)
      (h = u[d] || l[d]) && (f[d] = h);
  for (; s < r; ++s)
    a[s] = n[s];
  return new tt(a, this._parents, this._name, this._id);
}
function Bu(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Xu(t, n, e) {
  var r, i, o = Bu(n) ? ke : W;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function Gu(t, n) {
  var e = this._id;
  return arguments.length < 2 ? Y(this.node(), e).on.on(t) : this.each(Xu(e, t, n));
}
function Uu(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function Yu() {
  return this.on("end.remove", Uu(this._id));
}
function Ku(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Se(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, l = o[a] = new Array(u), c, f, h = 0; h < u; ++h)
      (c = s[h]) && (f = t.call(c, c.__data__, h, s)) && ("__data__" in c && (f.__data__ = c.__data__), l[h] = f, kn(l[h], n, e, h, l, Y(c, e)));
  return new tt(o, this._parents, n, e);
}
function Vu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ni(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, c, f = 0; f < l; ++f)
      if (c = u[f]) {
        for (var h = t.call(c, c.__data__, f, u), d, p = Y(c, e), g = 0, x = h.length; g < x; ++g)
          (d = h[g]) && kn(d, n, e, g, h, p);
        o.push(h), a.push(c);
      }
  return new tt(o, a, n, e);
}
var Zu = Vt.prototype.constructor;
function Wu() {
  return new Zu(this._groups, this._parents);
}
function Ju(t, n) {
  var e, r, i;
  return function() {
    var o = Et(this, t), a = (this.style.removeProperty(t), Et(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function Mi(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Qu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = Et(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function ju(t, n, e) {
  var r, i, o;
  return function() {
    var a = Et(this, t), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), Et(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s));
  };
}
function tl(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var u = W(this, t), l = u.on, c = u.value[o] == null ? s || (s = Mi(n)) : void 0;
    (l !== e || i !== c) && (r = (e = l).copy()).on(a, i = c), u.on = r;
  };
}
function nl(t, n, e) {
  var r = (t += "") == "transform" ? ru : xi;
  return n == null ? this.styleTween(t, Ju(t, r)).on("end.style." + t, Mi(t)) : typeof n == "function" ? this.styleTween(t, ju(t, r, Oe(this, "style." + t, n))).each(tl(this._id, t)) : this.styleTween(t, Qu(t, r, n), e).on("end.style." + t, null);
}
function el(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function rl(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && el(t, a, e)), r;
  }
  return o._value = n, o;
}
function il(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, rl(t, n, e ?? ""));
}
function ol(t) {
  return function() {
    this.textContent = t;
  };
}
function al(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function sl(t) {
  return this.tween("text", typeof t == "function" ? al(Oe(this, "text", t)) : ol(t == null ? "" : t + ""));
}
function ul(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function ll(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && ul(i)), n;
  }
  return r._value = t, r;
}
function fl(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, ll(t));
}
function cl() {
  for (var t = this._name, n = this._id, e = $i(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      if (u = a[l]) {
        var c = Y(u, n);
        kn(u, t, e, l, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new tt(r, this._parents, t, e);
}
function hl() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var l = W(this, r), c = l.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), l.on = n;
    }), i === 0 && o();
  });
}
var dl = 0;
function tt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function $i() {
  return ++dl;
}
var J = Vt.prototype;
tt.prototype = {
  constructor: tt,
  select: Ku,
  selectAll: Vu,
  selectChild: J.selectChild,
  selectChildren: J.selectChildren,
  filter: Hu,
  merge: qu,
  selection: Wu,
  transition: cl,
  call: J.call,
  nodes: J.nodes,
  node: J.node,
  size: J.size,
  empty: J.empty,
  each: J.each,
  on: Gu,
  attr: $u,
  attrTween: Eu,
  style: nl,
  styleTween: il,
  text: sl,
  textTween: fl,
  remove: Yu,
  tween: _u,
  delay: ku,
  duration: Cu,
  ease: Fu,
  easeVarying: Du,
  end: hl,
  [Symbol.iterator]: J[Symbol.iterator]
};
function pl(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var gl = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: pl
};
function yl(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function _l(t) {
  var n, e;
  t instanceof tt ? (n = t._id, t = t._name) : (n = $i(), (e = gl).time = Nn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && kn(u, t, n, l, a, e || yl(u, n));
  return new tt(r, this._parents, t, n);
}
Vt.prototype.interrupt = pu;
Vt.prototype.transition = _l;
const de = Math.PI, pe = 2 * de, ct = 1e-6, ml = pe - ct;
function Ai(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function vl(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return Ai;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Ie {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? Ai : vl(n);
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
    else if (h > ct) if (!(Math.abs(f * u - l * c) > ct) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let d = r - a, p = i - s, g = u * u + l * l, x = d * d + p * p, _ = Math.sqrt(g), $ = Math.sqrt(h), A = o * Math.tan((de - Math.acos((g + h - x) / (2 * _ * $))) / 2), y = A / $, w = A / _;
      Math.abs(y - 1) > ct && this._append`L${n + y * c},${e + y * f}`, this._append`A${o},${o},0,0,${+(f * d > c * p)},${this._x1 = n + w * u},${this._y1 = e + w * l}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = n + s, c = e + u, f = 1 ^ a, h = a ? i - o : o - i;
    this._x1 === null ? this._append`M${l},${c}` : (Math.abs(this._x1 - l) > ct || Math.abs(this._y1 - c) > ct) && this._append`L${l},${c}`, r && (h < 0 && (h = h % pe + pe), h > ml ? this._append`A${r},${r},0,1,${f},${n - s},${e - u}A${r},${r},0,1,${f},${this._x1 = l},${this._y1 = c}` : h > ct && this._append`A${r},${r},0,${+(h >= de)},${f},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function K() {
  return new Ie();
}
K.prototype = Ie.prototype;
function wl(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function $n(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Nt(t) {
  return t = $n(Math.abs(t)), t ? t[1] : NaN;
}
function bl(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(e.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function xl(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Ml = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function An(t) {
  if (!(n = Ml.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new Ce({
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
An.prototype = Ce.prototype;
function Ce(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Ce.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function $l(t) {
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
var Ti;
function Al(t, n) {
  var e = $n(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (Ti = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + $n(t, Math.max(0, n + o - 1))[0];
}
function vr(t, n) {
  var e = $n(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const wr = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: wl,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => vr(t * 100, n),
  r: vr,
  s: Al,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function br(t) {
  return t;
}
var xr = Array.prototype.map, Mr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Tl(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? br : bl(xr.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? br : xl(xr.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(f) {
    f = An(f);
    var h = f.fill, d = f.align, p = f.sign, g = f.symbol, x = f.zero, _ = f.width, $ = f.comma, A = f.precision, y = f.trim, w = f.type;
    w === "n" ? ($ = !0, w = "g") : wr[w] || (A === void 0 && (A = 12), y = !0, w = "g"), (x || h === "0" && d === "=") && (x = !0, h = "0", d = "=");
    var S = g === "$" ? e : g === "#" && /[boxX]/.test(w) ? "0" + w.toLowerCase() : "", T = g === "$" ? r : /[%p]/.test(w) ? a : "", k = wr[w], C = /[defgprs%]/.test(w);
    A = A === void 0 ? 6 : /[gprs]/.test(w) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function R(b) {
      var O = S, z = T, X, Qt, ot;
      if (w === "c")
        z = k(b) + z, b = "";
      else {
        b = +b;
        var ft = b < 0 || 1 / b < 0;
        if (b = isNaN(b) ? u : k(Math.abs(b), A), y && (b = $l(b)), ft && +b == 0 && p !== "+" && (ft = !1), O = (ft ? p === "(" ? p : s : p === "-" || p === "(" ? "" : p) + O, z = (w === "s" ? Mr[8 + Ti / 3] : "") + z + (ft && p === "(" ? ")" : ""), C) {
          for (X = -1, Qt = b.length; ++X < Qt; )
            if (ot = b.charCodeAt(X), 48 > ot || ot > 57) {
              z = (ot === 46 ? i + b.slice(X + 1) : b.slice(X)) + z, b = b.slice(0, X);
              break;
            }
        }
      }
      $ && !x && (b = n(b, 1 / 0));
      var bt = O.length + b.length + z.length, B = bt < _ ? new Array(_ - bt + 1).join(h) : "";
      switch ($ && x && (b = n(B + b, B.length ? _ - z.length : 1 / 0), B = ""), d) {
        case "<":
          b = O + b + z + B;
          break;
        case "=":
          b = O + B + b + z;
          break;
        case "^":
          b = B.slice(0, bt = B.length >> 1) + O + b + z + B.slice(bt);
          break;
        default:
          b = B + O + b + z;
          break;
      }
      return o(b);
    }
    return R.toString = function() {
      return f + "";
    }, R;
  }
  function c(f, h) {
    var d = l((f = An(f), f.type = "f", f)), p = Math.max(-8, Math.min(8, Math.floor(Nt(h) / 3))) * 3, g = Math.pow(10, -p), x = Mr[8 + p / 3];
    return function(_) {
      return d(g * _) + x;
    };
  }
  return {
    format: l,
    formatPrefix: c
  };
}
var on, On, Si;
Sl({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Sl(t) {
  return on = Tl(t), On = on.format, Si = on.formatPrefix, on;
}
function Pl(t) {
  return Math.max(0, -Nt(Math.abs(t)));
}
function El(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Nt(n) / 3))) * 3 - Nt(Math.abs(t)));
}
function zl(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Nt(n) - Nt(t)) + 1;
}
const Nl = Math.random, kl = function t(n) {
  function e(r, i) {
    var o, a;
    return r = r == null ? 0 : +r, i = i == null ? 1 : +i, function() {
      var s;
      if (o != null) s = o, o = null;
      else do
        o = n() * 2 - 1, s = n() * 2 - 1, a = o * o + s * s;
      while (!a || a > 1);
      return r + i * s * Math.sqrt(-2 * Math.log(a) / a);
    };
  }
  return e.source = t, e;
}(Nl);
function Ol(t, n) {
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
function Il(t) {
  return function() {
    return t;
  };
}
function Cl(t) {
  return +t;
}
var $r = [0, 1];
function Mt(t) {
  return t;
}
function ge(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Il(isNaN(n) ? NaN : 0.5);
}
function Rl(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Fl(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = ge(i, r), o = e(a, o)) : (r = ge(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function Ll(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = ge(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var u = Mo(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function Dl(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Hl() {
  var t = $r, n = $r, e = Ne, r, i, o, a = Mt, s, u, l;
  function c() {
    var h = Math.min(t.length, n.length);
    return a !== Mt && (a = Rl(t[0], t[h - 1])), s = h > 2 ? Ll : Fl, u = l = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (u || (u = s(t.map(r), n, e)))(r(a(h)));
  }
  return f.invert = function(h) {
    return a(i((l || (l = s(n, t.map(r), G)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, Cl), c()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (n = Array.from(h), c()) : n.slice();
  }, f.rangeRound = function(h) {
    return n = Array.from(h), e = tu, c();
  }, f.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : Mt, c()) : a !== Mt;
  }, f.interpolate = function(h) {
    return arguments.length ? (e = h, c()) : e;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, d) {
    return r = h, i = d, c();
  };
}
function ql() {
  return Hl()(Mt, Mt);
}
function Bl(t, n, e, r) {
  var i = Po(t, n, e), o;
  switch (r = An(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = El(i, a)) && (r.precision = o), Si(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = zl(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Pl(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return On(r);
}
function Xl(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return So(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Bl(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, l, c = 10;
    for (s < a && (l = a, a = s, s = l, l = i, i = o, o = l); c-- > 0; ) {
      if (l = re(a, s, e), l === u)
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
function D() {
  var t = ql();
  return t.copy = function() {
    return Dl(t, D());
  }, Ol.apply(t, arguments), Xl(t);
}
function Pi(t) {
  for (var n = t.length / 6 | 0, e = new Array(n), r = 0; r < n; ) e[r] = "#" + t.slice(r * 6, ++r * 6);
  return e;
}
const Ei = (t) => Ys(t[t.length - 1]);
var Gl = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(Pi);
const Ul = Ei(Gl);
var Yl = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(Pi);
const Kl = Ei(Yl);
function xt(t) {
  return function() {
    return t;
  };
}
function Vl(t) {
  let n = 3;
  return t.digits = function(e) {
    if (!arguments.length) return n;
    if (e == null)
      n = null;
    else {
      const r = Math.floor(e);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${e}`);
      n = r;
    }
    return t;
  }, () => new Ie(n);
}
function Zl(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function zi(t) {
  this._context = t;
}
zi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(t, n);
        break;
    }
  }
};
function Wl(t) {
  return new zi(t);
}
function Jl(t) {
  return t[0];
}
function Ql(t) {
  return t[1];
}
function Ni(t, n) {
  var e = xt(!0), r = null, i = Wl, o = null, a = Vl(s);
  t = typeof t == "function" ? t : t === void 0 ? Jl : xt(t), n = typeof n == "function" ? n : n === void 0 ? Ql : xt(n);
  function s(u) {
    var l, c = (u = Zl(u)).length, f, h = !1, d;
    for (r == null && (o = i(d = a())), l = 0; l <= c; ++l)
      !(l < c && e(f = u[l], l, u)) === h && ((h = !h) ? o.lineStart() : o.lineEnd()), h && o.point(+t(f, l, u), +n(f, l, u));
    if (d) return o = null, d + "" || null;
  }
  return s.x = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : xt(+u), s) : t;
  }, s.y = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : xt(+u), s) : n;
  }, s.defined = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : xt(!!u), s) : e;
  }, s.curve = function(u) {
    return arguments.length ? (i = u, r != null && (o = i(r)), s) : i;
  }, s.context = function(u) {
    return arguments.length ? (u == null ? r = o = null : o = i(r = u), s) : r;
  }, s;
}
function Lt(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Lt.prototype = {
  constructor: Lt,
  scale: function(t) {
    return t === 1 ? this : new Lt(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Lt(this.k, this.x + this.k * t, this.y + this.k * n);
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
Lt.prototype;
var ki = typeof global == "object" && global && global.Object === Object && global, jl = typeof self == "object" && self && self.Object === Object && self, et = ki || jl || Function("return this")(), Z = et.Symbol, Oi = Object.prototype, tf = Oi.hasOwnProperty, nf = Oi.toString, It = Z ? Z.toStringTag : void 0;
function ef(t) {
  var n = tf.call(t, It), e = t[It];
  try {
    t[It] = void 0;
    var r = !0;
  } catch {
  }
  var i = nf.call(t);
  return r && (n ? t[It] = e : delete t[It]), i;
}
var rf = Object.prototype, of = rf.toString;
function af(t) {
  return of.call(t);
}
var sf = "[object Null]", uf = "[object Undefined]", Ar = Z ? Z.toStringTag : void 0;
function mt(t) {
  return t == null ? t === void 0 ? uf : sf : Ar && Ar in Object(t) ? ef(t) : af(t);
}
function yt(t) {
  return t != null && typeof t == "object";
}
var lf = "[object Symbol]";
function In(t) {
  return typeof t == "symbol" || yt(t) && mt(t) == lf;
}
function Cn(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var q = Array.isArray, Tr = Z ? Z.prototype : void 0, Sr = Tr ? Tr.toString : void 0;
function Ii(t) {
  if (typeof t == "string")
    return t;
  if (q(t))
    return Cn(t, Ii) + "";
  if (In(t))
    return Sr ? Sr.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var ff = /\s/;
function cf(t) {
  for (var n = t.length; n-- && ff.test(t.charAt(n)); )
    ;
  return n;
}
var hf = /^\s+/;
function df(t) {
  return t && t.slice(0, cf(t) + 1).replace(hf, "");
}
function nt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var Pr = NaN, pf = /^[-+]0x[0-9a-f]+$/i, gf = /^0b[01]+$/i, yf = /^0o[0-7]+$/i, _f = parseInt;
function mf(t) {
  if (typeof t == "number")
    return t;
  if (In(t))
    return Pr;
  if (nt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = nt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = df(t);
  var e = gf.test(t);
  return e || yf.test(t) ? _f(t.slice(2), e ? 2 : 8) : pf.test(t) ? Pr : +t;
}
var vf = 1 / 0, wf = 17976931348623157e292;
function jn(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = mf(t), t === vf || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * wf;
  }
  return t === t ? t : 0;
}
function Ci(t) {
  return t;
}
var bf = "[object AsyncFunction]", xf = "[object Function]", Mf = "[object GeneratorFunction]", $f = "[object Proxy]";
function Ri(t) {
  if (!nt(t))
    return !1;
  var n = mt(t);
  return n == xf || n == Mf || n == bf || n == $f;
}
var te = et["__core-js_shared__"], Er = function() {
  var t = /[^.]+$/.exec(te && te.keys && te.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Af(t) {
  return !!Er && Er in t;
}
var Tf = Function.prototype, Sf = Tf.toString;
function vt(t) {
  if (t != null) {
    try {
      return Sf.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Pf = /[\\^$.*+?()[\]{}|]/g, Ef = /^\[object .+?Constructor\]$/, zf = Function.prototype, Nf = Object.prototype, kf = zf.toString, Of = Nf.hasOwnProperty, If = RegExp(
  "^" + kf.call(Of).replace(Pf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Cf(t) {
  if (!nt(t) || Af(t))
    return !1;
  var n = Ri(t) ? If : Ef;
  return n.test(vt(t));
}
function Rf(t, n) {
  return t == null ? void 0 : t[n];
}
function wt(t, n) {
  var e = Rf(t, n);
  return Cf(e) ? e : void 0;
}
var ye = wt(et, "WeakMap"), zr = function() {
  try {
    var t = wt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function Ff(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var Lf = 9007199254740991, Df = /^(?:0|[1-9]\d*)$/;
function Rn(t, n) {
  var e = typeof t;
  return n = n ?? Lf, !!n && (e == "number" || e != "symbol" && Df.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function Hf(t, n, e) {
  n == "__proto__" && zr ? zr(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function Fn(t, n) {
  return t === n || t !== t && n !== n;
}
var qf = Object.prototype, Bf = qf.hasOwnProperty;
function Xf(t, n, e) {
  var r = t[n];
  (!(Bf.call(t, n) && Fn(r, e)) || e === void 0 && !(n in t)) && Hf(t, n, e);
}
var Gf = 9007199254740991;
function Re(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Gf;
}
function Wt(t) {
  return t != null && Re(t.length) && !Ri(t);
}
function Uf(t, n, e) {
  if (!nt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Wt(e) && Rn(n, e.length) : r == "string" && n in e) ? Fn(e[n], t) : !1;
}
var Yf = Object.prototype;
function Fi(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || Yf;
  return t === e;
}
function Kf(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var Vf = "[object Arguments]";
function Nr(t) {
  return yt(t) && mt(t) == Vf;
}
var Li = Object.prototype, Zf = Li.hasOwnProperty, Wf = Li.propertyIsEnumerable, Fe = Nr(/* @__PURE__ */ function() {
  return arguments;
}()) ? Nr : function(t) {
  return yt(t) && Zf.call(t, "callee") && !Wf.call(t, "callee");
};
function Jf() {
  return !1;
}
var Di = typeof exports == "object" && exports && !exports.nodeType && exports, kr = Di && typeof module == "object" && module && !module.nodeType && module, Qf = kr && kr.exports === Di, Or = Qf ? et.Buffer : void 0, jf = Or ? Or.isBuffer : void 0, _e = jf || Jf, tc = "[object Arguments]", nc = "[object Array]", ec = "[object Boolean]", rc = "[object Date]", ic = "[object Error]", oc = "[object Function]", ac = "[object Map]", sc = "[object Number]", uc = "[object Object]", lc = "[object RegExp]", fc = "[object Set]", cc = "[object String]", hc = "[object WeakMap]", dc = "[object ArrayBuffer]", pc = "[object DataView]", gc = "[object Float32Array]", yc = "[object Float64Array]", _c = "[object Int8Array]", mc = "[object Int16Array]", vc = "[object Int32Array]", wc = "[object Uint8Array]", bc = "[object Uint8ClampedArray]", xc = "[object Uint16Array]", Mc = "[object Uint32Array]", P = {};
P[gc] = P[yc] = P[_c] = P[mc] = P[vc] = P[wc] = P[bc] = P[xc] = P[Mc] = !0;
P[tc] = P[nc] = P[dc] = P[ec] = P[pc] = P[rc] = P[ic] = P[oc] = P[ac] = P[sc] = P[uc] = P[lc] = P[fc] = P[cc] = P[hc] = !1;
function $c(t) {
  return yt(t) && Re(t.length) && !!P[mt(t)];
}
function Ac(t) {
  return function(n) {
    return t(n);
  };
}
var Hi = typeof exports == "object" && exports && !exports.nodeType && exports, Dt = Hi && typeof module == "object" && module && !module.nodeType && module, Tc = Dt && Dt.exports === Hi, ne = Tc && ki.process, Ir = function() {
  try {
    var t = Dt && Dt.require && Dt.require("util").types;
    return t || ne && ne.binding && ne.binding("util");
  } catch {
  }
}(), Cr = Ir && Ir.isTypedArray, qi = Cr ? Ac(Cr) : $c, Sc = Object.prototype, Pc = Sc.hasOwnProperty;
function Bi(t, n) {
  var e = q(t), r = !e && Fe(t), i = !e && !r && _e(t), o = !e && !r && !i && qi(t), a = e || r || i || o, s = a ? Kf(t.length, String) : [], u = s.length;
  for (var l in t)
    (n || Pc.call(t, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Rn(l, u))) && s.push(l);
  return s;
}
function Xi(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Ec = Xi(Object.keys, Object), zc = Object.prototype, Nc = zc.hasOwnProperty;
function kc(t) {
  if (!Fi(t))
    return Ec(t);
  var n = [];
  for (var e in Object(t))
    Nc.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Ln(t) {
  return Wt(t) ? Bi(t) : kc(t);
}
function Oc(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var Ic = Object.prototype, Cc = Ic.hasOwnProperty;
function Rc(t) {
  if (!nt(t))
    return Oc(t);
  var n = Fi(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !Cc.call(t, r)) || e.push(r);
  return e;
}
function Fc(t) {
  return Wt(t) ? Bi(t, !0) : Rc(t);
}
var Lc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Dc = /^\w*$/;
function Le(t, n) {
  if (q(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || In(t) ? !0 : Dc.test(t) || !Lc.test(t) || n != null && t in Object(n);
}
var Ut = wt(Object, "create");
function Hc() {
  this.__data__ = Ut ? Ut(null) : {}, this.size = 0;
}
function qc(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var Bc = "__lodash_hash_undefined__", Xc = Object.prototype, Gc = Xc.hasOwnProperty;
function Uc(t) {
  var n = this.__data__;
  if (Ut) {
    var e = n[t];
    return e === Bc ? void 0 : e;
  }
  return Gc.call(n, t) ? n[t] : void 0;
}
var Yc = Object.prototype, Kc = Yc.hasOwnProperty;
function Vc(t) {
  var n = this.__data__;
  return Ut ? n[t] !== void 0 : Kc.call(n, t);
}
var Zc = "__lodash_hash_undefined__";
function Wc(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Ut && n === void 0 ? Zc : n, this;
}
function _t(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
_t.prototype.clear = Hc;
_t.prototype.delete = qc;
_t.prototype.get = Uc;
_t.prototype.has = Vc;
_t.prototype.set = Wc;
function Jc() {
  this.__data__ = [], this.size = 0;
}
function Dn(t, n) {
  for (var e = t.length; e--; )
    if (Fn(t[e][0], n))
      return e;
  return -1;
}
var Qc = Array.prototype, jc = Qc.splice;
function th(t) {
  var n = this.__data__, e = Dn(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : jc.call(n, e, 1), --this.size, !0;
}
function nh(t) {
  var n = this.__data__, e = Dn(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function eh(t) {
  return Dn(this.__data__, t) > -1;
}
function rh(t, n) {
  var e = this.__data__, r = Dn(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function rt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
rt.prototype.clear = Jc;
rt.prototype.delete = th;
rt.prototype.get = nh;
rt.prototype.has = eh;
rt.prototype.set = rh;
var Yt = wt(et, "Map");
function ih() {
  this.size = 0, this.__data__ = {
    hash: new _t(),
    map: new (Yt || rt)(),
    string: new _t()
  };
}
function oh(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Hn(t, n) {
  var e = t.__data__;
  return oh(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function ah(t) {
  var n = Hn(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function sh(t) {
  return Hn(this, t).get(t);
}
function uh(t) {
  return Hn(this, t).has(t);
}
function lh(t, n) {
  var e = Hn(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function it(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
it.prototype.clear = ih;
it.prototype.delete = ah;
it.prototype.get = sh;
it.prototype.has = uh;
it.prototype.set = lh;
var fh = "Expected a function";
function De(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(fh);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (De.Cache || it)(), e;
}
De.Cache = it;
var ch = 500;
function hh(t) {
  var n = De(t, function(r) {
    return e.size === ch && e.clear(), r;
  }), e = n.cache;
  return n;
}
var dh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ph = /\\(\\)?/g, gh = hh(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(dh, function(e, r, i, o) {
    n.push(i ? o.replace(ph, "$1") : r || e);
  }), n;
});
function qn(t) {
  return t == null ? "" : Ii(t);
}
function Bn(t, n) {
  return q(t) ? t : Le(t, n) ? [t] : gh(qn(t));
}
function Jt(t) {
  if (typeof t == "string" || In(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function He(t, n) {
  n = Bn(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Jt(n[e++])];
  return e && e == r ? t : void 0;
}
function yh(t, n, e) {
  var r = t == null ? void 0 : He(t, n);
  return r === void 0 ? e : r;
}
function qe(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Rr = Z ? Z.isConcatSpreadable : void 0;
function _h(t) {
  return q(t) || Fe(t) || !!(Rr && t && t[Rr]);
}
function mh(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = _h), i || (i = []); ++o < a; ) {
    var s = t[o];
    e(s) ? qe(i, s) : i[i.length] = s;
  }
  return i;
}
function vh(t) {
  var n = t == null ? 0 : t.length;
  return n ? mh(t) : [];
}
var wh = Xi(Object.getPrototypeOf, Object);
function bh(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + n];
  return o;
}
function xh(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, bh(t, n, e);
}
var Mh = "\\ud800-\\udfff", $h = "\\u0300-\\u036f", Ah = "\\ufe20-\\ufe2f", Th = "\\u20d0-\\u20ff", Sh = $h + Ah + Th, Ph = "\\ufe0e\\ufe0f", Eh = "\\u200d", zh = RegExp("[" + Eh + Mh + Sh + Ph + "]");
function Gi(t) {
  return zh.test(t);
}
function Nh(t) {
  return t.split("");
}
var Ui = "\\ud800-\\udfff", kh = "\\u0300-\\u036f", Oh = "\\ufe20-\\ufe2f", Ih = "\\u20d0-\\u20ff", Ch = kh + Oh + Ih, Rh = "\\ufe0e\\ufe0f", Fh = "[" + Ui + "]", me = "[" + Ch + "]", ve = "\\ud83c[\\udffb-\\udfff]", Lh = "(?:" + me + "|" + ve + ")", Yi = "[^" + Ui + "]", Ki = "(?:\\ud83c[\\udde6-\\uddff]){2}", Vi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Dh = "\\u200d", Zi = Lh + "?", Wi = "[" + Rh + "]?", Hh = "(?:" + Dh + "(?:" + [Yi, Ki, Vi].join("|") + ")" + Wi + Zi + ")*", qh = Wi + Zi + Hh, Bh = "(?:" + [Yi + me + "?", me, Ki, Vi, Fh].join("|") + ")", Xh = RegExp(ve + "(?=" + ve + ")|" + Bh + qh, "g");
function Gh(t) {
  return t.match(Xh) || [];
}
function Uh(t) {
  return Gi(t) ? Gh(t) : Nh(t);
}
function Yh(t) {
  return function(n) {
    n = qn(n);
    var e = Gi(n) ? Uh(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? xh(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var Kh = Yh("toUpperCase");
function Vh(t) {
  return Kh(qn(t).toLowerCase());
}
function Zh() {
  this.__data__ = new rt(), this.size = 0;
}
function Wh(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function Jh(t) {
  return this.__data__.get(t);
}
function Qh(t) {
  return this.__data__.has(t);
}
var jh = 200;
function td(t, n) {
  var e = this.__data__;
  if (e instanceof rt) {
    var r = e.__data__;
    if (!Yt || r.length < jh - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new it(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function j(t) {
  var n = this.__data__ = new rt(t);
  this.size = n.size;
}
j.prototype.clear = Zh;
j.prototype.delete = Wh;
j.prototype.get = Jh;
j.prototype.has = Qh;
j.prototype.set = td;
function Ji(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function Qi() {
  return [];
}
var nd = Object.prototype, ed = nd.propertyIsEnumerable, Fr = Object.getOwnPropertySymbols, ji = Fr ? function(t) {
  return t == null ? [] : (t = Object(t), Ji(Fr(t), function(n) {
    return ed.call(t, n);
  }));
} : Qi, rd = Object.getOwnPropertySymbols, id = rd ? function(t) {
  for (var n = []; t; )
    qe(n, ji(t)), t = wh(t);
  return n;
} : Qi;
function to(t, n, e) {
  var r = n(t);
  return q(t) ? r : qe(r, e(t));
}
function Lr(t) {
  return to(t, Ln, ji);
}
function od(t) {
  return to(t, Fc, id);
}
var we = wt(et, "DataView"), be = wt(et, "Promise"), xe = wt(et, "Set"), Dr = "[object Map]", ad = "[object Object]", Hr = "[object Promise]", qr = "[object Set]", Br = "[object WeakMap]", Xr = "[object DataView]", sd = vt(we), ud = vt(Yt), ld = vt(be), fd = vt(xe), cd = vt(ye), Q = mt;
(we && Q(new we(new ArrayBuffer(1))) != Xr || Yt && Q(new Yt()) != Dr || be && Q(be.resolve()) != Hr || xe && Q(new xe()) != qr || ye && Q(new ye()) != Br) && (Q = function(t) {
  var n = mt(t), e = n == ad ? t.constructor : void 0, r = e ? vt(e) : "";
  if (r)
    switch (r) {
      case sd:
        return Xr;
      case ud:
        return Dr;
      case ld:
        return Hr;
      case fd:
        return qr;
      case cd:
        return Br;
    }
  return n;
});
var Gr = et.Uint8Array, hd = "__lodash_hash_undefined__";
function dd(t) {
  return this.__data__.set(t, hd), this;
}
function pd(t) {
  return this.__data__.has(t);
}
function Tn(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new it(); ++n < e; )
    this.add(t[n]);
}
Tn.prototype.add = Tn.prototype.push = dd;
Tn.prototype.has = pd;
function gd(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function yd(t, n) {
  return t.has(n);
}
var _d = 1, md = 2;
function no(t, n, e, r, i, o) {
  var a = e & _d, s = t.length, u = n.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(t), c = o.get(n);
  if (l && c)
    return l == n && c == t;
  var f = -1, h = !0, d = e & md ? new Tn() : void 0;
  for (o.set(t, n), o.set(n, t); ++f < s; ) {
    var p = t[f], g = n[f];
    if (r)
      var x = a ? r(g, p, f, n, t, o) : r(p, g, f, t, n, o);
    if (x !== void 0) {
      if (x)
        continue;
      h = !1;
      break;
    }
    if (d) {
      if (!gd(n, function(_, $) {
        if (!yd(d, $) && (p === _ || i(p, _, e, r, o)))
          return d.push($);
      })) {
        h = !1;
        break;
      }
    } else if (!(p === g || i(p, g, e, r, o))) {
      h = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), h;
}
function eo(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function vd(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var wd = 1, bd = 2, xd = "[object Boolean]", Md = "[object Date]", $d = "[object Error]", Ad = "[object Map]", Td = "[object Number]", Sd = "[object RegExp]", Pd = "[object Set]", Ed = "[object String]", zd = "[object Symbol]", Nd = "[object ArrayBuffer]", kd = "[object DataView]", Ur = Z ? Z.prototype : void 0, ee = Ur ? Ur.valueOf : void 0;
function Od(t, n, e, r, i, o, a) {
  switch (e) {
    case kd:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Nd:
      return !(t.byteLength != n.byteLength || !o(new Gr(t), new Gr(n)));
    case xd:
    case Md:
    case Td:
      return Fn(+t, +n);
    case $d:
      return t.name == n.name && t.message == n.message;
    case Sd:
    case Ed:
      return t == n + "";
    case Ad:
      var s = eo;
    case Pd:
      var u = r & wd;
      if (s || (s = vd), t.size != n.size && !u)
        return !1;
      var l = a.get(t);
      if (l)
        return l == n;
      r |= bd, a.set(t, n);
      var c = no(s(t), s(n), r, i, o, a);
      return a.delete(t), c;
    case zd:
      if (ee)
        return ee.call(t) == ee.call(n);
  }
  return !1;
}
var Id = 1, Cd = Object.prototype, Rd = Cd.hasOwnProperty;
function Fd(t, n, e, r, i, o) {
  var a = e & Id, s = Lr(t), u = s.length, l = Lr(n), c = l.length;
  if (u != c && !a)
    return !1;
  for (var f = u; f--; ) {
    var h = s[f];
    if (!(a ? h in n : Rd.call(n, h)))
      return !1;
  }
  var d = o.get(t), p = o.get(n);
  if (d && p)
    return d == n && p == t;
  var g = !0;
  o.set(t, n), o.set(n, t);
  for (var x = a; ++f < u; ) {
    h = s[f];
    var _ = t[h], $ = n[h];
    if (r)
      var A = a ? r($, _, h, n, t, o) : r(_, $, h, t, n, o);
    if (!(A === void 0 ? _ === $ || i(_, $, e, r, o) : A)) {
      g = !1;
      break;
    }
    x || (x = h == "constructor");
  }
  if (g && !x) {
    var y = t.constructor, w = n.constructor;
    y != w && "constructor" in t && "constructor" in n && !(typeof y == "function" && y instanceof y && typeof w == "function" && w instanceof w) && (g = !1);
  }
  return o.delete(t), o.delete(n), g;
}
var Ld = 1, Yr = "[object Arguments]", Kr = "[object Array]", an = "[object Object]", Dd = Object.prototype, Vr = Dd.hasOwnProperty;
function Hd(t, n, e, r, i, o) {
  var a = q(t), s = q(n), u = a ? Kr : Q(t), l = s ? Kr : Q(n);
  u = u == Yr ? an : u, l = l == Yr ? an : l;
  var c = u == an, f = l == an, h = u == l;
  if (h && _e(t)) {
    if (!_e(n))
      return !1;
    a = !0, c = !1;
  }
  if (h && !c)
    return o || (o = new j()), a || qi(t) ? no(t, n, e, r, i, o) : Od(t, n, u, e, r, i, o);
  if (!(e & Ld)) {
    var d = c && Vr.call(t, "__wrapped__"), p = f && Vr.call(n, "__wrapped__");
    if (d || p) {
      var g = d ? t.value() : t, x = p ? n.value() : n;
      return o || (o = new j()), i(g, x, e, r, o);
    }
  }
  return h ? (o || (o = new j()), Fd(t, n, e, r, i, o)) : !1;
}
function Be(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !yt(t) && !yt(n) ? t !== t && n !== n : Hd(t, n, e, r, Be, i);
}
var qd = 1, Bd = 2;
function Xd(t, n, e, r) {
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
      var c = new j(), f;
      if (!(f === void 0 ? Be(l, u, qd | Bd, r, c) : f))
        return !1;
    }
  }
  return !0;
}
function ro(t) {
  return t === t && !nt(t);
}
function Gd(t) {
  for (var n = Ln(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, ro(i)];
  }
  return n;
}
function io(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function Ud(t) {
  var n = Gd(t);
  return n.length == 1 && n[0][2] ? io(n[0][0], n[0][1]) : function(e) {
    return e === t || Xd(e, t, n);
  };
}
function Yd(t, n) {
  return t != null && n in Object(t);
}
function oo(t, n, e) {
  n = Bn(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = Jt(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Re(i) && Rn(a, i) && (q(t) || Fe(t)));
}
function Kd(t, n) {
  return t != null && oo(t, n, Yd);
}
var Vd = 1, Zd = 2;
function Wd(t, n) {
  return Le(t) && ro(n) ? io(Jt(t), n) : function(e) {
    var r = yh(e, t);
    return r === void 0 && r === n ? Kd(e, t) : Be(n, r, Vd | Zd);
  };
}
function Jd(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function Qd(t) {
  return function(n) {
    return He(n, t);
  };
}
function jd(t) {
  return Le(t) ? Jd(Jt(t)) : Qd(t);
}
function Xn(t) {
  return typeof t == "function" ? t : t == null ? Ci : typeof t == "object" ? q(t) ? Wd(t[0], t[1]) : Ud(t) : jd(t);
}
function tp(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var u = a[++i];
      if (e(o[u], u, o) === !1)
        break;
    }
    return n;
  };
}
var np = tp();
function ep(t, n) {
  return t && np(t, n, Ln);
}
function rp(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Wt(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var Xe = rp(ep);
function ip(t) {
  return typeof t == "function" ? t : Ci;
}
function ut(t, n) {
  var e = q(t) ? Ff : Xe;
  return e(t, ip(n));
}
function op(t, n) {
  return Cn(n, function(e) {
    return [e, t[e]];
  });
}
function ap(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var sp = "[object Map]", up = "[object Set]";
function lp(t) {
  return function(n) {
    var e = Q(n);
    return e == sp ? eo(n) : e == up ? ap(n) : op(n, t(n));
  };
}
var ao = lp(Ln);
function fp(t, n) {
  var e = [];
  return Xe(t, function(r, i, o) {
    n(r, i, o) && e.push(r);
  }), e;
}
function so(t, n) {
  var e = q(t) ? Ji : fp;
  return e(t, Xn(n));
}
function cp(t, n) {
  var e = -1, r = Wt(t) ? Array(t.length) : [];
  return Xe(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function lt(t, n) {
  var e = q(t) ? Cn : cp;
  return e(t, Xn(n));
}
var hp = Object.prototype, dp = hp.hasOwnProperty;
function pp(t, n) {
  return t != null && dp.call(t, n);
}
function uo(t, n) {
  return t != null && oo(t, n, pp);
}
var gp = "[object Boolean]";
function yp(t) {
  return t === !0 || t === !1 || yt(t) && mt(t) == gp;
}
function _p(t, n) {
  for (var e, r = -1, i = t.length; ++r < i; ) {
    var o = n(t[r]);
    o !== void 0 && (e = e === void 0 ? o : e + o);
  }
  return e;
}
var mp = NaN;
function vp(t, n) {
  var e = t == null ? 0 : t.length;
  return e ? _p(t, n) / e : mp;
}
function kt(t, n) {
  return vp(t, Xn(n));
}
function wp(t, n, e, r) {
  if (!nt(t))
    return t;
  n = Bn(n, t);
  for (var i = -1, o = n.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var u = Jt(n[i]), l = e;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (i != a) {
      var c = s[u];
      l = void 0, l === void 0 && (l = nt(c) ? c : Rn(n[i + 1]) ? [] : {});
    }
    Xf(s, u, l), s = s[u];
  }
  return t;
}
function bp(t, n, e) {
  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
    var a = n[r], s = He(t, a);
    e(s, a) && wp(o, Bn(a, t), s);
  }
  return o;
}
function Ge(t, n) {
  if (t == null)
    return {};
  var e = Cn(od(t), function(r) {
    return [r];
  });
  return n = Xn(n), bp(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var xp = Math.ceil, Mp = Math.max;
function $p(t, n, e, r) {
  for (var i = -1, o = Mp(xp((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function Ap(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && Uf(n, e, r) && (e = r = void 0), n = jn(n), e === void 0 ? (e = n, n = 0) : e = jn(e), r = r === void 0 ? n < e ? 1 : -1 : jn(r), $p(n, e, r);
  };
}
var Sn = Ap();
function Tp() {
  var t = arguments, n = qn(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
const Sp = (t, n, e = 12, r = 12) => {
  const i = D().domain([0, e]).range([0, t]), o = D().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return Sn((e + 1) * (r + 1)).map(function(u) {
        return { m: u % (e + 1), n: Math.floor(u / (e + 1)), x: i(u % (e + 1)), y: o(Math.floor(u / (e + 1))) };
      });
    },
    position: function(u, l) {
      typeof u == "number" && (u = [u]), typeof l == "number" && (l = [l]);
      const c = vh(lt(l, function(f) {
        return lt(
          u,
          function(h) {
            return { x: i(h), y: o(f) };
          }
        );
      }));
      return c.length == 1 ? c[0] : c;
    }
  };
}, Pp = "_widget_18g36_1", Ep = "_label_18g36_19", zp = "_lit_18g36_24", Np = "_button_18g36_29", kp = "_symbol_18g36_29", Op = "_radio_18g36_29", Ip = "_radiobutton_18g36_29", Cp = "_selected_18g36_35", Rp = "_toggle_18g36_35", Fp = "_slider_18g36_44", Lp = "_track_18g36_44", Dp = "_track_overlay_18g36_48", Hp = "_handle_18g36_55", v = {
  widget: Pp,
  label: Ep,
  lit: zp,
  button: Np,
  symbol: kp,
  radio: Op,
  radiobutton: Ip,
  selected: Cp,
  toggle: Rp,
  slider: Fp,
  track: Lp,
  track_overlay: Dp,
  handle: Hp
}, Gn = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, Ue = (t, n, e) => {
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
}, qp = (t = 1) => {
  const n = K();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Bp = (t = 1) => {
  const n = K(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Xp = (t = 1) => {
  const n = K();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Gp = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = K();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, Up = (t = 1) => {
  const n = K(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, s = 0.6, u = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], l = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, Yp = (t = 1) => {
  const n = K(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, a), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, Kp = (t = 1) => {
  const n = K(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var u = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], l = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, Vp = (t = 1) => {
  var n = K(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, Zp = (t = 1) => {
  const n = K(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, Me = (t) => {
  switch (t) {
    case "play":
      return qp;
    case "forward":
      return Bp;
    case "back":
      return Xp;
    case "pause":
      return Gp;
    case "reload":
      return Up;
    case "capture":
      return Yp;
    case "rewind":
      return Kp;
    case "stop":
      return Vp;
    case "push":
      return Zp;
  }
}, Ye = () => {
  const t = "button";
  var n = Gn(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", u = null, l = function(p) {
  }, c = ["play"], f = 0;
  return {
    type: t,
    id: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? e : (e = p, this);
    },
    symbolsize: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    shape: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? o.x : (o.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? o.y : (o.y = p, this);
    },
    label: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? u : (u = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return l = p, this;
      l(p);
    },
    actions: function(p) {
      return typeof p > "u" ? c : (c = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? f : (f = p, this);
    },
    click: function() {
      f = (f + 1) % c.length, l(), N(this.parentNode).select("." + v.symbol).attr("d", Me(c[f])(r * e));
    },
    press: function(p) {
      f = (f + 1) % c.length, l(), p.select("#button_" + n).select("." + v.symbol).attr("d", Me(c[f])(r * e));
    }
  };
}, Wp = () => {
  const t = "slider", n = On(".3f");
  var e = Gn(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, u = "top-left", l = null, c = function(_) {
  }, f = function(_) {
  }, h = [0, 1], d = 0, p = null, g = D().domain(h).range([0, r]).clamp(!0);
  const x = function(_, $, A = h) {
    const y = _.select("#slider_" + e);
    g.domain(A), d = $, y.selectAll("." + v.handle).transition().attr("cx", g($)), a && y.select("." + v.label).text(p + " = " + n(d)), c(), f();
  };
  return {
    type: t,
    scale: g,
    id: function(_) {
      return typeof _ > "u" ? e : (e = _, this);
    },
    label: function(_) {
      return typeof _ > "u" ? p : (p = _, this);
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
      return typeof _ > "u" ? d : (d = _, this);
    },
    reset: x,
    click: x
  };
}, Jp = () => {
  const t = "toggle";
  var n = Gn(), e = 10, r = { x: 0, y: 0 }, i = null, o = "top", a = null, s = function(f) {
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
      const f = N(this.parentNode);
      f.select("." + v.handle).transition().attr("cx", u ? 2 * e : 0), f.classed(v.selected, u), s();
    },
    reset: function(f, h) {
      u = h;
      const d = f.select("#toggle_" + n);
      d.selectAll("." + v.handle).transition().attr("cx", u ? 2 * e : 0), d.classed(v.selected, u), s();
    }
  };
}, Qp = () => {
  const t = "radio";
  var n = Gn(), e = 100, r = 20, i = 0.3, o = "round", a = "vertical", s = { x: 0, y: 0 }, u = "right", l = null, c = function(g) {
  }, f = [], h = 0;
  return {
    type: t,
    id: function(g) {
      return typeof g > "u" ? n : (n = g, this);
    },
    size: function(g) {
      return typeof g > "u" ? e : (e = g, this);
    },
    buttonsize: function(g) {
      return typeof g > "u" ? r : (r = g, this);
    },
    buttonpadding: function(g) {
      return typeof g > "u" ? i : (i = g, this);
    },
    orientation: function(g) {
      return typeof g > "u" ? a : (a = g, this);
    },
    shape: function(g) {
      return typeof g > "u" ? o : (o = g, this);
    },
    position: function(g) {
      return typeof g > "u" ? s : (s = g, this);
    },
    x: function(g) {
      return typeof g > "u" ? s.x : (s.x = g, this);
    },
    y: function(g) {
      return typeof g > "u" ? s.y : (s.y = g, this);
    },
    labelposition: function(g) {
      return typeof g > "u" ? u : (u = g, this);
    },
    fontsize: function(g) {
      return typeof g > "u" ? l : (l = g, this);
    },
    update: function(g) {
      if (typeof g == "function")
        return c = g, this;
      c(g);
    },
    choices: function(g) {
      return typeof g > "u" ? f : (f = g, this);
    },
    value: function(g) {
      return typeof g > "u" ? h : (h = g, this);
    },
    click: function(g, x) {
      h = x, N(this.parentNode).selectAll("." + v.symbol).classed(v.selected, (_) => _ == h), c();
    },
    reset: function(g, x) {
      h = x, g.select("#radio_" + n).selectAll("." + v.symbol).classed(v.selected, (_) => _ == h), c();
    }
  };
}, jp = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = N(o).attr("class", v.widget + " " + v.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", v.background).on("click", t.click).on("mouseover", function() {
    N(this).classed(v.lit, !0), N(this.parentNode).select("." + v.symbol).classed(v.lit, !0);
  }).on("mouseout", function() {
    N(this).classed(v.lit, !1), N(this.parentNode).select("." + v.symbol).classed(v.lit, !1);
  }), a.append("path").attr("d", Me(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", v.symbol), r) {
    const u = Ue(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", v.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return o;
}, lo = (t, n) => {
  const e = K();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, t0 = (t, n) => {
  const e = On(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = N(u).attr("class", v.widget + " " + v.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const l = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", lo(t.size(), t.girth())).attr("class", v.track), s.append("circle").attr("class", v.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * l).attr("height", 2 * l).attr("transform", "translate(" + -l + "," + -l + ")").attr("class", v.track_overlay).on("click", function(p) {
    const g = ae(p, this)[0];
    t.value(a.invert(g)), t.update(), t.update_end(), s.selectAll("." + v.handle).attr("cx", a(t.value())), t.show() && s.select("." + v.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Ss().on("drag", function(p) {
      t.value(a.invert(p.x)), t.update(), s.selectAll("." + v.handle).attr("cx", a(t.value())), t.show() && s.select("." + v.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(p) {
      t.update_end();
    })
  );
  var c, f, h, d = "bottom";
  return t.fontsize && (f = t.labelposition().match(/bottom/i) != null ? jt([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -jt([t.girth() / 2, t.knob()]) - t.fontsize() / 2), f = t.labelposition().match(/bottom/i) != null ? jt([t.girth() / 2, t.knob()]) + 7 : -jt([t.girth() / 2, t.knob()]) - 7, c = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, h = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", d = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", v.label).style("text-anchor", h).style("alignment-baseline", d).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + c + "," + f + ")"), u;
}, n0 = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = N(a).attr("class", v.widget + " " + v.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(v.selected, t.value() == 1);
  if (s.append("path").attr("d", lo(2 * t.size(), 2 * t.size())).attr("class", v.track), s.append("circle").attr("class", v.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", v.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = Ue(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", v.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return a;
}, e0 = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = Eo(a), u = D().domain([0, a - 1]).range([0, t.size()]), l = D().domain([0, a - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = N(c).attr("class", v.widget + " " + v.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + v.radiobutton).data(s).enter().append("g").attr("class", v.radiobutton).attr("id", (x) => "b" + x).attr("transform", (x) => t.orientation() == "vertical" ? "translate(0," + l(x) + ")" : "translate(" + u(x) + ",0)");
  var d, p;
  t.shape() == "rect" ? (d = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (d = h.append("circle").attr("r", i / 2), p = h.append("circle").attr("r", o / 2)), d.attr("class", v.background).on("mouseover", function() {
    N(this).classed(v.lit, !0), N(this.parentNode).select("." + v.symbol).classed(v.lit, !0);
  }).on("mouseout", function() {
    N(this).classed(v.lit, !1), N(this.parentNode).select("." + v.symbol).classed(v.lit, !1);
  }), p.attr("class", v.symbol), p.filter((x) => x == t.value()).classed(v.selected, !0), h.on("click", t.click);
  const g = Ue(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", v.label).text(function(x, _) {
    return t.choices()[_];
  }).attr("alignment-baseline", g.valign).attr("transform", "translate(" + g.x + "," + g.y + ")").style("font-size", t.fontsize()).attr("text-anchor", g.anchor), c;
}, sn = (t, n) => {
  switch (t.type) {
    case "button":
      return jp(t);
    case "slider":
      return t0(t);
    case "radio":
      return e0(t);
    case "toggle":
      return n0(t);
  }
}, r0 = (t, n) => {
  const e = Sp(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = N("#" + t).classed(n.id + " " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), o = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && o.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && o.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (a) => "translate(" + a.x + "," + a.y + ")").style("fill", "black"), { display: i, controls: o, grid: e };
}, M = {
  widgets: {
    slider_size: 200,
    slider_gap: 1.5,
    slider_anchor: { x: 6, y: 1 },
    toggle_anchor: { x: 6, y: 8 },
    toggle_label_pos: "right",
    toggle_gap: 1.5,
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 4, y: 5 },
    resetbutton_anchor: { x: 2, y: 5 },
    radio_anchor: { x: 1, y: 6.5 },
    radio_size: 40,
    radio_label_position: "right",
    radio_shape: "rect"
  },
  simulation: {
    delay: 10
  },
  plot: {
    anchor: { x: 1, y: 11 },
    width: 150,
    domain: [0, 1e3],
    xlabel: "time",
    ylabel: "order parameter"
  }
}, m = {
  dt: 0.01,
  L: 1,
  agentsize: [6, 3],
  omega_0: 1,
  omega_var: 0.2,
  r_var: 0.2,
  orderparametersize: 6,
  orderparameterlength: 0.5,
  angular_speed: {
    range: [1, 4],
    default: 3
  },
  coupling_strength: {
    range: [0, 2],
    default: 0
  },
  number_of_oscillators: {
    range: [1, 200],
    default: 100
  },
  angular_speed_variability: {
    range: [0, 1],
    default: 0.672
  },
  initial_conditions: {
    choices: ["random init. cond.", "identical init. cond."],
    default: 0
  },
  show_order_parameter: {
    default: !0
  },
  comoving_reference_frame: {
    default: !1
  },
  comoving_reference_frame: {
    default: !1
  },
  orlis_magic_switch: {
    default: !1,
    label: "Orli's Magic Switch"
  }
}, Ke = (t) => lt(ao(t), (n) => {
  n[1].id = n[0], n[1].label == null && (n[1].label = Tp(Vh(n[0]), /_/g, " "));
}), Ve = (t) => lt(ao(t), (n) => n[1]), Ze = (t, n) => ut(t, (e, r) => e.widget = n[r]), i0 = (t) => Ge(t, (n) => uo(n, "range")), o0 = (t) => Ge(t, (n) => yp(n.default)), a0 = (t) => Ge(t, (n) => uo(n, "choices"));
D().domain([0, 360]).range([0, 2 * Math.PI]);
D().range([0, 360]).domain([0, 2 * Math.PI]);
const We = i0(m), Je = o0(m), Qe = a0(m);
Ke(We);
Ke(Je);
Ke(Qe);
const fo = Ve(We), co = Ve(Je), ho = Ve(Qe), hn = lt(
  fo,
  (t) => Wp().id(t.id).label(t.label).range(t.range).value(t.default).size(M.widgets.slider_size)
), dn = lt(
  co,
  (t) => Jp().id(t.id).label(t.label).value(t.default).labelposition(M.widgets.toggle_label_pos)
), $e = lt(
  ho,
  (t) => Qp().choices(t.choices).id(t.id).value(t.default).labelposition(M.widgets.radio_label_position)
);
Ze(co, dn);
Ze(fo, hn);
Ze(ho, $e);
const at = Ye().actions(["play", "pause"]), Un = Ye().actions(["back"]), Yn = Ye().actions(["rewind"]), s0 = [at, Un, Yn], u0 = (t, n) => {
  const e = n.position(M.widgets.slider_anchor.x, Sn(hn.length).map((o) => M.widgets.slider_anchor.y + M.widgets.slider_gap * o)), r = n.position(M.widgets.toggle_anchor.x, Sn(dn.length).map((o) => M.widgets.toggle_anchor.y + M.widgets.toggle_gap * o)), i = n.position(M.widgets.radio_anchor.x, M.widgets.radio_anchor.y);
  hn.forEach((o, a) => o.position(e[a])), dn.forEach((o, a) => o.position(r[a])), $e[0].position(i).size(M.widgets.radio_size).shape(M.widgets.radio_shape), at.position(n.position(M.widgets.playbutton_anchor.x, M.widgets.playbutton_anchor.y)).size(M.widgets.playbutton_size), Yn.position(n.position(M.widgets.backbutton_anchor.x, M.widgets.backbutton_anchor.y)), Un.position(n.position(M.widgets.resetbutton_anchor.x, M.widgets.resetbutton_anchor.y)), t.selectAll(null).data(hn).enter().append(sn), t.selectAll(null).data(dn).enter().append(sn), t.selectAll(null).data(s0).enter().append(sn), t.selectAll(null).data($e).enter().append(sn);
}, l0 = (t) => {
  ut(We, (n) => n.widget.reset(t, n.default)), ut(Je, (n) => n.widget.reset(t, n.default)), ut(Qe, (n) => n.widget.reset(t, n.default));
}, f0 = m.dt, c0 = m.L, Zr = m.r_var;
var F = [], st = [], Tt, I;
const h0 = kl(0, m.omega_var), d0 = 2 * m.number_of_oscillators.range[1];
function po(t) {
  return {
    x: kt(t, "x"),
    y: kt(t, "y")
  };
}
const p0 = () => {
  m.timer = {}, m.tick = 0, F = lt(Sn(d0), (t) => {
    const n = h0(), e = m.initial_conditions.widget.value() ? 0 : 2 * Math.PI * Math.random();
    return {
      id: t,
      r: c0 - Zr + Zr * (Math.random() - 0.5),
      theta: e,
      domega: n,
      omega: m.omega_0 + n * m.angular_speed_variability.widget.value(),
      x: Math.cos(e),
      y: Math.sin(e)
    };
  });
  for (let t = 0; t < F.length / 2; t++)
    F[t].domega = -F[F.length - t - 1].domega, F[F.length - t - 1].id = F[t].id;
  ut(F, (t) => {
    t.active = t.id < m.number_of_oscillators.widget.value() ? 1 : 0;
  }), st = so(F, (t) => t.active == 1), I = po(st), Tt = [{ x: m.tick, y: Math.sqrt(I.x * I.x + I.y * I.y) }];
}, g0 = () => {
  m.tick++, st = so(F, (n) => n.active == 1);
  const t = { x: kt(st, "x"), y: kt(st, "y") };
  ut(F, (n) => {
    n.dx = n.active == 1 ? Math.cos(n.theta) * t.y - Math.sin(n.theta) * t.x : 0;
  }), ut(F, (n) => {
    n.omega = m.omega_0 + n.domega * m.angular_speed_variability.widget.value(), n.omega = m.omega_0 + n.domega * m.angular_speed_variability.widget.value(), n.dtheta = f0 * m.angular_speed.widget.value() * (n.omega + m.coupling_strength.widget.value() * n.dx), n.theta += n.dtheta, n.x = Math.cos(n.theta), n.y = Math.sin(n.theta);
  }), I = po(st), Tt.push({ x: m.tick, y: Math.sqrt(I.x * I.x + I.y * I.y) });
}, y0 = () => {
  ut(F, (t) => {
    t.active = t.id < m.number_of_oscillators.widget.value() ? 1 : 0;
  });
}, _0 = "_agent_502tr_1", m0 = "_inset_502tr_7", v0 = "_plot_502tr_11", w0 = "_xlabel_502tr_14", b0 = "_ylabel_502tr_17", x0 = "_caxis_502tr_20", M0 = "_dot_502tr_26", $0 = "_op_502tr_32", A0 = "_plotline_502tr_38", E = {
  agent: _0,
  inset: m0,
  plot: v0,
  xlabel: w0,
  ylabel: b0,
  caxis: x0,
  dot: M0,
  op: $0,
  plotline: A0
}, Pn = m.L, T0 = 2 * m.number_of_oscillators.range[1], St = D().domain([-Pn, Pn]), Pt = D().domain([-Pn, Pn]), je = D().domain([0, T0 / 2]).range(m.agentsize), tr = D().range([0, 0.9]).domain([m.omega_0 - m.omega_var, m.omega_0 + m.omega_var]), nr = (t) => m.orlis_magic_switch.widget.value() ? Ul(t) : Kl(t), pn = Ni().x(function(t) {
  return St(t.x);
}).y(function(t) {
  return Pt(t.y);
});
var gn = 0;
const S0 = (t, n) => {
  const e = n.display_size.width, r = n.display_size.height;
  St.range([-e / 2, e / 2]), Pt.range([r / 2, -r / 2]), t.selectAll("#zero").remove(), gn = 0;
  const o = t.append("g").attr("id", "zero").attr("transform", "translate(" + e / 2 + "," + r / 2 + ")").append("g").attr("id", "origin");
  o.selectAll("." + E.agent).data(F).enter().append("circle").attr("class", E.agent).attr("r", function(s) {
    return je(m.number_of_oscillators.widget.value());
  }).style("fill", function(s) {
    return nr(tr(s.omega));
  }).attr("transform", function(s) {
    return "translate(" + St(s.r * Math.cos(s.theta)) + "," + Pt(s.r * Math.sin(s.theta)) + ")";
  }).style("opacity", function(s) {
    return s.active ? 1 : 0;
  });
  const a = o.append("g").attr("class", E.inset).style("opacity", m.show_order_parameter.widget.value() ? 1 : 0);
  a.append("path").datum([{ x: -m.orderparameterlength, y: 0 }, { x: m.orderparameterlength, y: 0 }]).attr("d", pn).attr("class", E.caxis), a.append("path").datum([{ x: 0, y: -m.orderparameterlength }, { x: 0, y: m.orderparameterlength }]).attr("d", pn).attr("class", E.caxis), a.append("circle").attr("class", E.dot).attr("r", m.orderparametersize).attr("transform", "translate(" + St(m.orderparameterlength * I.x) + "," + Pt(m.orderparameterlength * I.y) + ")"), a.append("path").datum(
    [
      { x: 0, y: 0 },
      { x: m.orderparameterlength * I.x, y: m.orderparameterlength * I.y }
    ]
  ).attr("class", E.op).attr("d", pn);
}, P0 = (t, n) => {
  t.selectAll("." + E.agent).attr("r", function(e) {
    return je(m.number_of_oscillators.widget.value());
  }).style("opacity", function(e) {
    return e.active ? 1 : 0;
  }).attr("transform", function(e) {
    return "translate(" + St(e.r * Math.cos(e.theta)) + "," + Pt(e.r * Math.sin(e.theta)) + ")";
  }).style("fill", function(e) {
    return nr(tr(e.omega));
  }), kt(st, "omega"), m.comoving_reference_frame.widget.value() ? gn += m.dt * m.angular_speed.widget.value() * kt(st, "omega") / Math.PI * 180 : gn += 0, t.select("." + E.dot).attr("transform", "translate(" + St(m.orderparameterlength * I.x) + "," + Pt(m.orderparameterlength * I.y) + ")"), t.select("." + E.op).datum(
    [
      { x: 0, y: 0 },
      { x: m.orderparameterlength * I.x, y: m.orderparameterlength * I.y }
    ]
  ).attr("class", E.op).attr("d", pn), t.selectAll("#origin").attr("transform", "rotate(" + gn + ")");
}, E0 = (t, n) => {
  t.selectAll("." + E.agent).attr("r", function(e) {
    return je(m.number_of_oscillators.widget.value());
  }).style("opacity", function(e) {
    return e.active ? 1 : 0;
  }).style("fill", function(e) {
    return nr(tr(e.omega));
  });
}, Kt = D().domain(M.plot.domain).range([0, M.plot.width]), er = D().domain([0, 1]).range([0, -100]), go = Ro(Kt).tickFormat(""), z0 = Fo(er).tickFormat(""), yo = Ni().x(function(t) {
  return Kt(t.x);
}).y(function(t) {
  return er(t.y);
}), N0 = (t, n) => {
  Kt.domain(M.plot.domain);
  const e = n.position(M.plot.anchor.x, M.plot.anchor.y);
  t.select("#plot").remove();
  const r = t.append("g").attr("class", E.plot).attr("transform", "translate(" + e.x + "," + e.y + ")").attr("id", "plot");
  r.append("text").text(M.plot.xlabel).attr("transform", "translate(" + Kt(M.plot.domain[1] / 2) + ",25)").attr("class", E.xlabel), r.append("text").text(M.plot.ylabel).attr("transform", "translate(-20," + er(0.5) + ")rotate(-90)").attr("class", E.ylabel), r.append("g").call(go).attr("class", E.xaxis), r.append("g").call(z0).attr("class", E.yaxis), r.append("path").datum(Tt).attr("d", yo).attr("class", E.plotline);
}, _o = (t) => {
  t.select("." + E.plotline).datum(Tt).attr("d", yo), Tt.length > M.plot.domain[1] && (Kt.domain([m.tick - M.plot.domain[1], m.tick]), t.select("." + E.xaxis).call(go), Tt.shift());
};
function k0(t, n, e) {
  g0(), P0(t), _o(n);
}
function Ae(t, n, e, r) {
  p0(), S0(t, r), N0(n, e);
}
function Wr(t, n, e) {
  y0(), E0(t), _o(n);
}
var Jr = {};
const O0 = (t, n, e) => {
  at.value() == 1 ? Jr = lu(() => k0(t, n), M.simulation.delay) : Jr.stop();
}, I0 = (t, n, e, r) => {
  Yn.update(() => l0(n)), at.update(() => O0(t, n)), Un.update(() => Ae(t, n, e, r)), m.number_of_oscillators.widget.update(() => Wr(t, n)), m.orlis_magic_switch.widget.update(() => Wr(t, n)), m.initial_conditions.widget.update(() => Ae(t, n, e, r)), m.show_order_parameter.widget.update(() => {
    t.selectAll("." + E.inset).transition().duration(1e3).style("opacity", m.show_order_parameter.widget.value() ? 1 : 0), n.selectAll("." + E.plot).transition().duration(1e3).style("opacity", m.show_order_parameter.widget.value() ? 1 : 0);
  });
}, C0 = {
  name: "@explorables/ride_my_kuramotocycle",
  title: "Ride my Kuramotocycle!",
  subtitle: "Synchronization of Phase-Coupled Oscillators - The Kuramoto Model",
  description: "This explorable illustrates the Kuramoto model for phase coupled oscillators. This model is used to describe synchronization phenomena in natural systems, e.g. the flash synchronization of fire flies or wall-mounted clocks.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function R0(t, n = mo) {
  const e = r0(t, n), r = e.display, i = e.controls, o = e.grid;
  return u0(i, o), I0(r, i, o, n), Ae(r, i, o, n), {
    halt() {
      at.value() === 1 && at.press(i);
    },
    reset() {
      at.value() === 1 && at.press(i), Yn.press(i), Un.press(i);
    },
    config: n,
    meta: C0
  };
}
export {
  mo as config,
  R0 as default,
  R0 as load,
  C0 as meta
};
