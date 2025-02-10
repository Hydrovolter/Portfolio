/*! For license information please see bundle.js.LICENSE.txt */
(()=>{
    var t = {
        198: (t,e,n)=>{
            var r = 1 / 0
              , i = 9007199254740991
              , o = "[object Arguments]"
              , u = "[object Function]"
              , a = "[object GeneratorFunction]"
              , s = "[object Map]"
              , c = "[object Promise]"
              , l = "[object Set]"
              , f = "[object WeakMap]"
              , h = "[object DataView]"
              , d = /^\s+|\s+$/g
              , p = /^[-+]0x[0-9a-f]+$/i
              , v = /^0b[01]+$/i
              , y = /^\[object .+?Constructor\]$/
              , g = /^0o[0-7]+$/i
              , b = /^(?:0|[1-9]\d*)$/
              , w = "\\ud800-\\udfff"
              , _ = "\\u0300-\\u036f\\ufe20-\\ufe23"
              , m = "\\u20d0-\\u20f0"
              , k = "\\ufe0e\\ufe0f"
              , I = "[" + w + "]"
              , S = "[" + _ + m + "]"
              , E = "\\ud83c[\\udffb-\\udfff]"
              , A = "[^" + w + "]"
              , x = "(?:\\ud83c[\\udde6-\\uddff]){2}"
              , T = "[\\ud800-\\udbff][\\udc00-\\udfff]"
              , R = "\\u200d"
              , P = "(?:" + S + "|" + E + ")?"
              , D = "[" + k + "]?"
              , z = D + P + "(?:" + R + "(?:" + [A, x, T].join("|") + ")" + D + P + ")*"
              , j = "(?:" + [A + S + "?", S, x, T, I].join("|") + ")"
              , W = RegExp(E + "(?=" + E + ")|" + j + z, "g")
              , M = RegExp("[" + R + w + _ + m + k + "]")
              , O = parseInt
              , L = "object" == typeof n.g && n.g && n.g.Object === Object && n.g
              , U = "object" == typeof self && self && self.Object === Object && self
              , C = L || U || Function("return this")();
            function F(t) {
                var e = -1
                  , n = Array(t.size);
                return t.forEach((function(t, r) {
                    n[++e] = [r, t]
                }
                )),
                n
            }
            function q(t) {
                var e = -1
                  , n = Array(t.size);
                return t.forEach((function(t) {
                    n[++e] = t
                }
                )),
                n
            }
            var N, B, G, K = Function.prototype, V = Object.prototype, Z = C["__core-js_shared__"], Q = (N = /[^.]+$/.exec(Z && Z.keys && Z.keys.IE_PROTO || "")) ? "Symbol(src)_1." + N : "", Y = K.toString, X = V.hasOwnProperty, H = V.toString, J = RegExp("^" + Y.call(X).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), $ = C.Symbol, tt = $ ? $.iterator : void 0, et = V.propertyIsEnumerable, nt = Math.floor, rt = (B = Object.keys,
            G = Object,
            function(t) {
                return B(G(t))
            }
            ), it = Math.random, ot = yt(C, "DataView"), ut = yt(C, "Map"), at = yt(C, "Promise"), st = yt(C, "Set"), ct = yt(C, "WeakMap"), lt = wt(ot), ft = wt(ut), ht = wt(at), dt = wt(st), pt = wt(ct);
            function vt(t, e) {
                return t + nt(it() * (e - t + 1))
            }
            function yt(t, e) {
                var n = function(t, e) {
                    return null == t ? void 0 : t[e]
                }(t, e);
                return function(t) {
                    if (!St(t) || function(t) {
                        return !!Q && Q in t
                    }(t))
                        return !1;
                    var e = It(t) || function(t) {
                        var e = !1;
                        if (null != t && "function" != typeof t.toString)
                            try {
                                e = !!(t + "")
                            } catch (t) {}
                        return e
                    }(t) ? J : y;
                    return e.test(wt(t))
                }(n) ? n : void 0
            }
            var gt = function(t) {
                return H.call(t)
            };
            function bt(t, e) {
                return !!(e = null == e ? i : e) && ("number" == typeof t || b.test(t)) && t > -1 && t % 1 == 0 && t < e
            }
            function wt(t) {
                if (null != t) {
                    try {
                        return Y.call(t)
                    } catch (t) {}
                    try {
                        return t + ""
                    } catch (t) {}
                }
                return ""
            }
            function _t(t, e, n) {
                var i, o, u = -1, a = function(t) {
                    if (!t)
                        return [];
                    if (kt(t))
                        return function(t) {
                            return "string" == typeof t || !mt(t) && Et(t) && "[object String]" == H.call(t)
                        }(t) ? function(t) {
                            return M.test(t)
                        }(e = t) ? function(t) {
                            return t.match(W) || []
                        }(e) : function(t) {
                            return t.split("")
                        }(e) : function(t, e) {
                            var n = -1
                              , r = t.length;
                            for (e || (e = Array(r)); ++n < r; )
                                e[n] = t[n];
                            return e
                        }(t);
                    var e;
                    if (tt && t[tt])
                        return function(t) {
                            for (var e, n = []; !(e = t.next()).done; )
                                n.push(e.value);
                            return n
                        }(t[tt]());
                    var n = gt(t);
                    return (n == s ? F : n == l ? q : At)(t)
                }(t), c = a.length, f = c - 1;
                for ((n ? function(t, e, n) {
                    if (!St(n))
                        return !1;
                    var r = typeof e;
                    return !!("number" == r ? kt(n) && bt(e, n.length) : "string" == r && e in n) && function(t, e) {
                        return t === e || t != t && e != e
                    }(n[e], t)
                }(t, e, n) : void 0 === e) ? e = 1 : (i = function(t) {
                    var e = function(t) {
                        return t ? (t = function(t) {
                            if ("number" == typeof t)
                                return t;
                            if (function(t) {
                                return "symbol" == typeof t || Et(t) && "[object Symbol]" == H.call(t)
                            }(t))
                                return NaN;
                            if (St(t)) {
                                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                                t = St(e) ? e + "" : e
                            }
                            if ("string" != typeof t)
                                return 0 === t ? t : +t;
                            t = t.replace(d, "");
                            var n = v.test(t);
                            return n || g.test(t) ? O(t.slice(2), n ? 2 : 8) : p.test(t) ? NaN : +t
                        }(t)) === r || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
                    }(t)
                      , n = e % 1;
                    return e == e ? n ? e - n : e : 0
                }(e),
                0,
                o = c,
                i == i && (void 0 !== o && (i = i <= o ? i : o),
                i = i >= 0 ? i : 0),
                e = i); ++u < e; ) {
                    var h = vt(u, f)
                      , y = a[h];
                    a[h] = a[u],
                    a[u] = y
                }
                return a.length = e,
                a
            }
            (ot && gt(new ot(new ArrayBuffer(1))) != h || ut && gt(new ut) != s || at && gt(at.resolve()) != c || st && gt(new st) != l || ct && gt(new ct) != f) && (gt = function(t) {
                var e = H.call(t)
                  , n = "[object Object]" == e ? t.constructor : void 0
                  , r = n ? wt(n) : void 0;
                if (r)
                    switch (r) {
                    case lt:
                        return h;
                    case ft:
                        return s;
                    case ht:
                        return c;
                    case dt:
                        return l;
                    case pt:
                        return f
                    }
                return e
            }
            );
            var mt = Array.isArray;
            function kt(t) {
                return null != t && function(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= i
                }(t.length) && !It(t)
            }
            function It(t) {
                var e = St(t) ? H.call(t) : "";
                return e == u || e == a
            }
            function St(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }
            function Et(t) {
                return !!t && "object" == typeof t
            }
            function At(t) {
                return t ? function(t, e) {
                    return function(e, n) {
                        for (var r = -1, i = e ? e.length : 0, o = Array(i); ++r < i; )
                            o[r] = (u = e[r],
                            t[u]);
                        var u;
                        return o
                    }(e)
                }(t, function(t) {
                    return kt(t) ? function(t, e) {
                        var n = mt(t) || function(t) {
                            return function(t) {
                                return Et(t) && kt(t)
                            }(t) && X.call(t, "callee") && (!et.call(t, "callee") || H.call(t) == o)
                        }(t) ? function(t, e) {
                            for (var n = -1, r = Array(t); ++n < t; )
                                r[n] = e(n);
                            return r
                        }(t.length, String) : []
                          , r = n.length
                          , i = !!r;
                        for (var u in t)
                            !e && !X.call(t, u) || i && ("length" == u || bt(u, r)) || n.push(u);
                        return n
                    }(t) : function(t) {
                        if (n = (e = t) && e.constructor,
                        e !== ("function" == typeof n && n.prototype || V))
                            return rt(t);
                        var e, n, r = [];
                        for (var i in Object(t))
                            X.call(t, i) && "constructor" != i && r.push(i);
                        return r
                    }(t)
                }(t)) : []
            }
            t.exports = function(t) {
                return _t(t, 4294967295)
            }
        }
        ,
        486: function(t, e, n) {
            var r;
            t = n.nmd(t),
            function() {
                var i, o = "Expected a function", u = "__lodash_hash_undefined__", a = "__lodash_placeholder__", s = 32, c = 128, l = 1 / 0, f = 9007199254740991, h = NaN, d = 4294967295, p = [["ary", c], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", s], ["partialRight", 64], ["rearg", 256]], v = "[object Arguments]", y = "[object Array]", g = "[object Boolean]", b = "[object Date]", w = "[object Error]", _ = "[object Function]", m = "[object GeneratorFunction]", k = "[object Map]", I = "[object Number]", S = "[object Object]", E = "[object Promise]", A = "[object RegExp]", x = "[object Set]", T = "[object String]", R = "[object Symbol]", P = "[object WeakMap]", D = "[object ArrayBuffer]", z = "[object DataView]", j = "[object Float32Array]", W = "[object Float64Array]", M = "[object Int8Array]", O = "[object Int16Array]", L = "[object Int32Array]", U = "[object Uint8Array]", C = "[object Uint8ClampedArray]", F = "[object Uint16Array]", q = "[object Uint32Array]", N = /\b__p \+= '';/g, B = /\b(__p \+=) '' \+/g, G = /(__e\(.*?\)|\b__t\)) \+\n'';/g, K = /&(?:amp|lt|gt|quot|#39);/g, V = /[&<>"']/g, Z = RegExp(K.source), Q = RegExp(V.source), Y = /<%-([\s\S]+?)%>/g, X = /<%([\s\S]+?)%>/g, H = /<%=([\s\S]+?)%>/g, J = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $ = /^\w*$/, tt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, et = /[\\^$.*+?()[\]{}|]/g, nt = RegExp(et.source), rt = /^\s+/, it = /\s/, ot = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ut = /\{\n\/\* \[wrapped with (.+)\] \*/, at = /,? & /, st = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ct = /[()=,{}\[\]\/\s]/, lt = /\\(\\)?/g, ft = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ht = /\w*$/, dt = /^[-+]0x[0-9a-f]+$/i, pt = /^0b[01]+$/i, vt = /^\[object .+?Constructor\]$/, yt = /^0o[0-7]+$/i, gt = /^(?:0|[1-9]\d*)$/, bt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, wt = /($^)/, _t = /['\n\r\u2028\u2029\\]/g, mt = "\\ud800-\\udfff", kt = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", It = "\\u2700-\\u27bf", St = "a-z\\xdf-\\xf6\\xf8-\\xff", Et = "A-Z\\xc0-\\xd6\\xd8-\\xde", At = "\\ufe0e\\ufe0f", xt = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Tt = "[" + mt + "]", Rt = "[" + xt + "]", Pt = "[" + kt + "]", Dt = "\\d+", zt = "[" + It + "]", jt = "[" + St + "]", Wt = "[^" + mt + xt + Dt + It + St + Et + "]", Mt = "\\ud83c[\\udffb-\\udfff]", Ot = "[^" + mt + "]", Lt = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ut = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ct = "[" + Et + "]", Ft = "\\u200d", qt = "(?:" + jt + "|" + Wt + ")", Nt = "(?:" + Ct + "|" + Wt + ")", Bt = "(?:['’](?:d|ll|m|re|s|t|ve))?", Gt = "(?:['’](?:D|LL|M|RE|S|T|VE))?", Kt = "(?:" + Pt + "|" + Mt + ")?", Vt = "[" + At + "]?", Zt = Vt + Kt + "(?:" + Ft + "(?:" + [Ot, Lt, Ut].join("|") + ")" + Vt + Kt + ")*", Qt = "(?:" + [zt, Lt, Ut].join("|") + ")" + Zt, Yt = "(?:" + [Ot + Pt + "?", Pt, Lt, Ut, Tt].join("|") + ")", Xt = RegExp("['’]", "g"), Ht = RegExp(Pt, "g"), Jt = RegExp(Mt + "(?=" + Mt + ")|" + Yt + Zt, "g"), $t = RegExp([Ct + "?" + jt + "+" + Bt + "(?=" + [Rt, Ct, "$"].join("|") + ")", Nt + "+" + Gt + "(?=" + [Rt, Ct + qt, "$"].join("|") + ")", Ct + "?" + qt + "+" + Bt, Ct + "+" + Gt, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Dt, Qt].join("|"), "g"), te = RegExp("[" + Ft + mt + kt + At + "]"), ee = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, ne = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], re = -1, ie = {};
                ie[j] = ie[W] = ie[M] = ie[O] = ie[L] = ie[U] = ie[C] = ie[F] = ie[q] = !0,
                ie[v] = ie[y] = ie[D] = ie[g] = ie[z] = ie[b] = ie[w] = ie[_] = ie[k] = ie[I] = ie[S] = ie[A] = ie[x] = ie[T] = ie[P] = !1;
                var oe = {};
                oe[v] = oe[y] = oe[D] = oe[z] = oe[g] = oe[b] = oe[j] = oe[W] = oe[M] = oe[O] = oe[L] = oe[k] = oe[I] = oe[S] = oe[A] = oe[x] = oe[T] = oe[R] = oe[U] = oe[C] = oe[F] = oe[q] = !0,
                oe[w] = oe[_] = oe[P] = !1;
                var ue = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                }
                  , ae = parseFloat
                  , se = parseInt
                  , ce = "object" == typeof n.g && n.g && n.g.Object === Object && n.g
                  , le = "object" == typeof self && self && self.Object === Object && self
                  , fe = ce || le || Function("return this")()
                  , he = e && !e.nodeType && e
                  , de = he && t && !t.nodeType && t
                  , pe = de && de.exports === he
                  , ve = pe && ce.process
                  , ye = function() {
                    try {
                        return de && de.require && de.require("util").types || ve && ve.binding && ve.binding("util")
                    } catch (t) {}
                }()
                  , ge = ye && ye.isArrayBuffer
                  , be = ye && ye.isDate
                  , we = ye && ye.isMap
                  , _e = ye && ye.isRegExp
                  , me = ye && ye.isSet
                  , ke = ye && ye.isTypedArray;
                function Ie(t, e, n) {
                    switch (n.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, n[0]);
                    case 2:
                        return t.call(e, n[0], n[1]);
                    case 3:
                        return t.call(e, n[0], n[1], n[2])
                    }
                    return t.apply(e, n)
                }
                function Se(t, e, n, r) {
                    for (var i = -1, o = null == t ? 0 : t.length; ++i < o; ) {
                        var u = t[i];
                        e(r, u, n(u), t)
                    }
                    return r
                }
                function Ee(t, e) {
                    for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t); )
                        ;
                    return t
                }
                function Ae(t, e) {
                    for (var n = null == t ? 0 : t.length; n-- && !1 !== e(t[n], n, t); )
                        ;
                    return t
                }
                function xe(t, e) {
                    for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
                        if (!e(t[n], n, t))
                            return !1;
                    return !0
                }
                function Te(t, e) {
                    for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r; ) {
                        var u = t[n];
                        e(u, n, t) && (o[i++] = u)
                    }
                    return o
                }
                function Re(t, e) {
                    return !(null == t || !t.length) && Ce(t, e, 0) > -1
                }
                function Pe(t, e, n) {
                    for (var r = -1, i = null == t ? 0 : t.length; ++r < i; )
                        if (n(e, t[r]))
                            return !0;
                    return !1
                }
                function De(t, e) {
                    for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r; )
                        i[n] = e(t[n], n, t);
                    return i
                }
                function ze(t, e) {
                    for (var n = -1, r = e.length, i = t.length; ++n < r; )
                        t[i + n] = e[n];
                    return t
                }
                function je(t, e, n, r) {
                    var i = -1
                      , o = null == t ? 0 : t.length;
                    for (r && o && (n = t[++i]); ++i < o; )
                        n = e(n, t[i], i, t);
                    return n
                }
                function We(t, e, n, r) {
                    var i = null == t ? 0 : t.length;
                    for (r && i && (n = t[--i]); i--; )
                        n = e(n, t[i], i, t);
                    return n
                }
                function Me(t, e) {
                    for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
                        if (e(t[n], n, t))
                            return !0;
                    return !1
                }
                var Oe = Be("length");
                function Le(t, e, n) {
                    var r;
                    return n(t, (function(t, n, i) {
                        if (e(t, n, i))
                            return r = n,
                            !1
                    }
                    )),
                    r
                }
                function Ue(t, e, n, r) {
                    for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
                        if (e(t[o], o, t))
                            return o;
                    return -1
                }
                function Ce(t, e, n) {
                    return e == e ? function(t, e, n) {
                        for (var r = n - 1, i = t.length; ++r < i; )
                            if (t[r] === e)
                                return r;
                        return -1
                    }(t, e, n) : Ue(t, qe, n)
                }
                function Fe(t, e, n, r) {
                    for (var i = n - 1, o = t.length; ++i < o; )
                        if (r(t[i], e))
                            return i;
                    return -1
                }
                function qe(t) {
                    return t != t
                }
                function Ne(t, e) {
                    var n = null == t ? 0 : t.length;
                    return n ? Ve(t, e) / n : h
                }
                function Be(t) {
                    return function(e) {
                        return null == e ? i : e[t]
                    }
                }
                function Ge(t) {
                    return function(e) {
                        return null == t ? i : t[e]
                    }
                }
                function Ke(t, e, n, r, i) {
                    return i(t, (function(t, i, o) {
                        n = r ? (r = !1,
                        t) : e(n, t, i, o)
                    }
                    )),
                    n
                }
                function Ve(t, e) {
                    for (var n, r = -1, o = t.length; ++r < o; ) {
                        var u = e(t[r]);
                        u !== i && (n = n === i ? u : n + u)
                    }
                    return n
                }
                function Ze(t, e) {
                    for (var n = -1, r = Array(t); ++n < t; )
                        r[n] = e(n);
                    return r
                }
                function Qe(t) {
                    return t ? t.slice(0, hn(t) + 1).replace(rt, "") : t
                }
                function Ye(t) {
                    return function(e) {
                        return t(e)
                    }
                }
                function Xe(t, e) {
                    return De(e, (function(e) {
                        return t[e]
                    }
                    ))
                }
                function He(t, e) {
                    return t.has(e)
                }
                function Je(t, e) {
                    for (var n = -1, r = t.length; ++n < r && Ce(e, t[n], 0) > -1; )
                        ;
                    return n
                }
                function $e(t, e) {
                    for (var n = t.length; n-- && Ce(e, t[n], 0) > -1; )
                        ;
                    return n
                }
                var tn = Ge({
                    À: "A",
                    Á: "A",
                    Â: "A",
                    Ã: "A",
                    Ä: "A",
                    Å: "A",
                    à: "a",
                    á: "a",
                    â: "a",
                    ã: "a",
                    ä: "a",
                    å: "a",
                    Ç: "C",
                    ç: "c",
                    Ð: "D",
                    ð: "d",
                    È: "E",
                    É: "E",
                    Ê: "E",
                    Ë: "E",
                    è: "e",
                    é: "e",
                    ê: "e",
                    ë: "e",
                    Ì: "I",
                    Í: "I",
                    Î: "I",
                    Ï: "I",
                    ì: "i",
                    í: "i",
                    î: "i",
                    ï: "i",
                    Ñ: "N",
                    ñ: "n",
                    Ò: "O",
                    Ó: "O",
                    Ô: "O",
                    Õ: "O",
                    Ö: "O",
                    Ø: "O",
                    ò: "o",
                    ó: "o",
                    ô: "o",
                    õ: "o",
                    ö: "o",
                    ø: "o",
                    Ù: "U",
                    Ú: "U",
                    Û: "U",
                    Ü: "U",
                    ù: "u",
                    ú: "u",
                    û: "u",
                    ü: "u",
                    Ý: "Y",
                    ý: "y",
                    ÿ: "y",
                    Æ: "Ae",
                    æ: "ae",
                    Þ: "Th",
                    þ: "th",
                    ß: "ss",
                    Ā: "A",
                    Ă: "A",
                    Ą: "A",
                    ā: "a",
                    ă: "a",
                    ą: "a",
                    Ć: "C",
                    Ĉ: "C",
                    Ċ: "C",
                    Č: "C",
                    ć: "c",
                    ĉ: "c",
                    ċ: "c",
                    č: "c",
                    Ď: "D",
                    Đ: "D",
                    ď: "d",
                    đ: "d",
                    Ē: "E",
                    Ĕ: "E",
                    Ė: "E",
                    Ę: "E",
                    Ě: "E",
                    ē: "e",
                    ĕ: "e",
                    ė: "e",
                    ę: "e",
                    ě: "e",
                    Ĝ: "G",
                    Ğ: "G",
                    Ġ: "G",
                    Ģ: "G",
                    ĝ: "g",
                    ğ: "g",
                    ġ: "g",
                    ģ: "g",
                    Ĥ: "H",
                    Ħ: "H",
                    ĥ: "h",
                    ħ: "h",
                    Ĩ: "I",
                    Ī: "I",
                    Ĭ: "I",
                    Į: "I",
                    İ: "I",
                    ĩ: "i",
                    ī: "i",
                    ĭ: "i",
                    į: "i",
                    ı: "i",
                    Ĵ: "J",
                    ĵ: "j",
                    Ķ: "K",
                    ķ: "k",
                    ĸ: "k",
                    Ĺ: "L",
                    Ļ: "L",
                    Ľ: "L",
                    Ŀ: "L",
                    Ł: "L",
                    ĺ: "l",
                    ļ: "l",
                    ľ: "l",
                    ŀ: "l",
                    ł: "l",
                    Ń: "N",
                    Ņ: "N",
                    Ň: "N",
                    Ŋ: "N",
                    ń: "n",
                    ņ: "n",
                    ň: "n",
                    ŋ: "n",
                    Ō: "O",
                    Ŏ: "O",
                    Ő: "O",
                    ō: "o",
                    ŏ: "o",
                    ő: "o",
                    Ŕ: "R",
                    Ŗ: "R",
                    Ř: "R",
                    ŕ: "r",
                    ŗ: "r",
                    ř: "r",
                    Ś: "S",
                    Ŝ: "S",
                    Ş: "S",
                    Š: "S",
                    ś: "s",
                    ŝ: "s",
                    ş: "s",
                    š: "s",
                    Ţ: "T",
                    Ť: "T",
                    Ŧ: "T",
                    ţ: "t",
                    ť: "t",
                    ŧ: "t",
                    Ũ: "U",
                    Ū: "U",
                    Ŭ: "U",
                    Ů: "U",
                    Ű: "U",
                    Ų: "U",
                    ũ: "u",
                    ū: "u",
                    ŭ: "u",
                    ů: "u",
                    ű: "u",
                    ų: "u",
                    Ŵ: "W",
                    ŵ: "w",
                    Ŷ: "Y",
                    ŷ: "y",
                    Ÿ: "Y",
                    Ź: "Z",
                    Ż: "Z",
                    Ž: "Z",
                    ź: "z",
                    ż: "z",
                    ž: "z",
                    Ĳ: "IJ",
                    ĳ: "ij",
                    Œ: "Oe",
                    œ: "oe",
                    ŉ: "'n",
                    ſ: "s"
                })
                  , en = Ge({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                });
                function nn(t) {
                    return "\\" + ue[t]
                }
                function rn(t) {
                    return te.test(t)
                }
                function on(t) {
                    var e = -1
                      , n = Array(t.size);
                    return t.forEach((function(t, r) {
                        n[++e] = [r, t]
                    }
                    )),
                    n
                }
                function un(t, e) {
                    return function(n) {
                        return t(e(n))
                    }
                }
                function an(t, e) {
                    for (var n = -1, r = t.length, i = 0, o = []; ++n < r; ) {
                        var u = t[n];
                        u !== e && u !== a || (t[n] = a,
                        o[i++] = n)
                    }
                    return o
                }
                function sn(t) {
                    var e = -1
                      , n = Array(t.size);
                    return t.forEach((function(t) {
                        n[++e] = t
                    }
                    )),
                    n
                }
                function cn(t) {
                    var e = -1
                      , n = Array(t.size);
                    return t.forEach((function(t) {
                        n[++e] = [t, t]
                    }
                    )),
                    n
                }
                function ln(t) {
                    return rn(t) ? function(t) {
                        for (var e = Jt.lastIndex = 0; Jt.test(t); )
                            ++e;
                        return e
                    }(t) : Oe(t)
                }
                function fn(t) {
                    return rn(t) ? function(t) {
                        return t.match(Jt) || []
                    }(t) : function(t) {
                        return t.split("")
                    }(t)
                }
                function hn(t) {
                    for (var e = t.length; e-- && it.test(t.charAt(e)); )
                        ;
                    return e
                }
                var dn = Ge({
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                })
                  , pn = function t(e) {
                    var n, r = (e = null == e ? fe : pn.defaults(fe.Object(), e, pn.pick(fe, ne))).Array, it = e.Date, mt = e.Error, kt = e.Function, It = e.Math, St = e.Object, Et = e.RegExp, At = e.String, xt = e.TypeError, Tt = r.prototype, Rt = kt.prototype, Pt = St.prototype, Dt = e["__core-js_shared__"], zt = Rt.toString, jt = Pt.hasOwnProperty, Wt = 0, Mt = (n = /[^.]+$/.exec(Dt && Dt.keys && Dt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "", Ot = Pt.toString, Lt = zt.call(St), Ut = fe._, Ct = Et("^" + zt.call(jt).replace(et, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Ft = pe ? e.Buffer : i, qt = e.Symbol, Nt = e.Uint8Array, Bt = Ft ? Ft.allocUnsafe : i, Gt = un(St.getPrototypeOf, St), Kt = St.create, Vt = Pt.propertyIsEnumerable, Zt = Tt.splice, Qt = qt ? qt.isConcatSpreadable : i, Yt = qt ? qt.iterator : i, Jt = qt ? qt.toStringTag : i, te = function() {
                        try {
                            var t = so(St, "defineProperty");
                            return t({}, "", {}),
                            t
                        } catch (t) {}
                    }(), ue = e.clearTimeout !== fe.clearTimeout && e.clearTimeout, ce = it && it.now !== fe.Date.now && it.now, le = e.setTimeout !== fe.setTimeout && e.setTimeout, he = It.ceil, de = It.floor, ve = St.getOwnPropertySymbols, ye = Ft ? Ft.isBuffer : i, Oe = e.isFinite, Ge = Tt.join, vn = un(St.keys, St), yn = It.max, gn = It.min, bn = it.now, wn = e.parseInt, _n = It.random, mn = Tt.reverse, kn = so(e, "DataView"), In = so(e, "Map"), Sn = so(e, "Promise"), En = so(e, "Set"), An = so(e, "WeakMap"), xn = so(St, "create"), Tn = An && new An, Rn = {}, Pn = Lo(kn), Dn = Lo(In), zn = Lo(Sn), jn = Lo(En), Wn = Lo(An), Mn = qt ? qt.prototype : i, On = Mn ? Mn.valueOf : i, Ln = Mn ? Mn.toString : i;
                    function Un(t) {
                        if (ta(t) && !Bu(t) && !(t instanceof Nn)) {
                            if (t instanceof qn)
                                return t;
                            if (jt.call(t, "__wrapped__"))
                                return Uo(t)
                        }
                        return new qn(t)
                    }
                    var Cn = function() {
                        function t() {}
                        return function(e) {
                            if (!$u(e))
                                return {};
                            if (Kt)
                                return Kt(e);
                            t.prototype = e;
                            var n = new t;
                            return t.prototype = i,
                            n
                        }
                    }();
                    function Fn() {}
                    function qn(t, e) {
                        this.__wrapped__ = t,
                        this.__actions__ = [],
                        this.__chain__ = !!e,
                        this.__index__ = 0,
                        this.__values__ = i
                    }
                    function Nn(t) {
                        this.__wrapped__ = t,
                        this.__actions__ = [],
                        this.__dir__ = 1,
                        this.__filtered__ = !1,
                        this.__iteratees__ = [],
                        this.__takeCount__ = d,
                        this.__views__ = []
                    }
                    function Bn(t) {
                        var e = -1
                          , n = null == t ? 0 : t.length;
                        for (this.clear(); ++e < n; ) {
                            var r = t[e];
                            this.set(r[0], r[1])
                        }
                    }
                    function Gn(t) {
                        var e = -1
                          , n = null == t ? 0 : t.length;
                        for (this.clear(); ++e < n; ) {
                            var r = t[e];
                            this.set(r[0], r[1])
                        }
                    }
                    function Kn(t) {
                        var e = -1
                          , n = null == t ? 0 : t.length;
                        for (this.clear(); ++e < n; ) {
                            var r = t[e];
                            this.set(r[0], r[1])
                        }
                    }
                    function Vn(t) {
                        var e = -1
                          , n = null == t ? 0 : t.length;
                        for (this.__data__ = new Kn; ++e < n; )
                            this.add(t[e])
                    }
                    function Zn(t) {
                        var e = this.__data__ = new Gn(t);
                        this.size = e.size
                    }
                    function Qn(t, e) {
                        var n = Bu(t)
                          , r = !n && Nu(t)
                          , i = !n && !r && Zu(t)
                          , o = !n && !r && !i && sa(t)
                          , u = n || r || i || o
                          , a = u ? Ze(t.length, At) : []
                          , s = a.length;
                        for (var c in t)
                            !e && !jt.call(t, c) || u && ("length" == c || i && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || yo(c, s)) || a.push(c);
                        return a
                    }
                    function Yn(t) {
                        var e = t.length;
                        return e ? t[Kr(0, e - 1)] : i
                    }
                    function Xn(t, e) {
                        return zo(Ai(t), or(e, 0, t.length))
                    }
                    function Hn(t) {
                        return zo(Ai(t))
                    }
                    function Jn(t, e, n) {
                        (n !== i && !Cu(t[e], n) || n === i && !(e in t)) && rr(t, e, n)
                    }
                    function $n(t, e, n) {
                        var r = t[e];
                        jt.call(t, e) && Cu(r, n) && (n !== i || e in t) || rr(t, e, n)
                    }
                    function tr(t, e) {
                        for (var n = t.length; n--; )
                            if (Cu(t[n][0], e))
                                return n;
                        return -1
                    }
                    function er(t, e, n, r) {
                        return lr(t, (function(t, i, o) {
                            e(r, t, n(t), o)
                        }
                        )),
                        r
                    }
                    function nr(t, e) {
                        return t && xi(e, Pa(e), t)
                    }
                    function rr(t, e, n) {
                        "__proto__" == e && te ? te(t, e, {
                            configurable: !0,
                            enumerable: !0,
                            value: n,
                            writable: !0
                        }) : t[e] = n
                    }
                    function ir(t, e) {
                        for (var n = -1, o = e.length, u = r(o), a = null == t; ++n < o; )
                            u[n] = a ? i : Ea(t, e[n]);
                        return u
                    }
                    function or(t, e, n) {
                        return t == t && (n !== i && (t = t <= n ? t : n),
                        e !== i && (t = t >= e ? t : e)),
                        t
                    }
                    function ur(t, e, n, r, o, u) {
                        var a, s = 1 & e, c = 2 & e, l = 4 & e;
                        if (n && (a = o ? n(t, r, o, u) : n(t)),
                        a !== i)
                            return a;
                        if (!$u(t))
                            return t;
                        var f = Bu(t);
                        if (f) {
                            if (a = function(t) {
                                var e = t.length
                                  , n = new t.constructor(e);
                                return e && "string" == typeof t[0] && jt.call(t, "index") && (n.index = t.index,
                                n.input = t.input),
                                n
                            }(t),
                            !s)
                                return Ai(t, a)
                        } else {
                            var h = fo(t)
                              , d = h == _ || h == m;
                            if (Zu(t))
                                return _i(t, s);
                            if (h == S || h == v || d && !o) {
                                if (a = c || d ? {} : po(t),
                                !s)
                                    return c ? function(t, e) {
                                        return xi(t, lo(t), e)
                                    }(t, function(t, e) {
                                        return t && xi(e, Da(e), t)
                                    }(a, t)) : function(t, e) {
                                        return xi(t, co(t), e)
                                    }(t, nr(a, t))
                            } else {
                                if (!oe[h])
                                    return o ? t : {};
                                a = function(t, e, n) {
                                    var r, i = t.constructor;
                                    switch (e) {
                                    case D:
                                        return mi(t);
                                    case g:
                                    case b:
                                        return new i(+t);
                                    case z:
                                        return function(t, e) {
                                            var n = e ? mi(t.buffer) : t.buffer;
                                            return new t.constructor(n,t.byteOffset,t.byteLength)
                                        }(t, n);
                                    case j:
                                    case W:
                                    case M:
                                    case O:
                                    case L:
                                    case U:
                                    case C:
                                    case F:
                                    case q:
                                        return ki(t, n);
                                    case k:
                                        return new i;
                                    case I:
                                    case T:
                                        return new i(t);
                                    case A:
                                        return function(t) {
                                            var e = new t.constructor(t.source,ht.exec(t));
                                            return e.lastIndex = t.lastIndex,
                                            e
                                        }(t);
                                    case x:
                                        return new i;
                                    case R:
                                        return r = t,
                                        On ? St(On.call(r)) : {}
                                    }
                                }(t, h, s)
                            }
                        }
                        u || (u = new Zn);
                        var p = u.get(t);
                        if (p)
                            return p;
                        u.set(t, a),
                        oa(t) ? t.forEach((function(r) {
                            a.add(ur(r, e, n, r, t, u))
                        }
                        )) : ea(t) && t.forEach((function(r, i) {
                            a.set(i, ur(r, e, n, i, t, u))
                        }
                        ));
                        var y = f ? i : (l ? c ? eo : to : c ? Da : Pa)(t);
                        return Ee(y || t, (function(r, i) {
                            y && (r = t[i = r]),
                            $n(a, i, ur(r, e, n, i, t, u))
                        }
                        )),
                        a
                    }
                    function ar(t, e, n) {
                        var r = n.length;
                        if (null == t)
                            return !r;
                        for (t = St(t); r--; ) {
                            var o = n[r]
                              , u = e[o]
                              , a = t[o];
                            if (a === i && !(o in t) || !u(a))
                                return !1
                        }
                        return !0
                    }
                    function sr(t, e, n) {
                        if ("function" != typeof t)
                            throw new xt(o);
                        return To((function() {
                            t.apply(i, n)
                        }
                        ), e)
                    }
                    function cr(t, e, n, r) {
                        var i = -1
                          , o = Re
                          , u = !0
                          , a = t.length
                          , s = []
                          , c = e.length;
                        if (!a)
                            return s;
                        n && (e = De(e, Ye(n))),
                        r ? (o = Pe,
                        u = !1) : e.length >= 200 && (o = He,
                        u = !1,
                        e = new Vn(e));
                        t: for (; ++i < a; ) {
                            var l = t[i]
                              , f = null == n ? l : n(l);
                            if (l = r || 0 !== l ? l : 0,
                            u && f == f) {
                                for (var h = c; h--; )
                                    if (e[h] === f)
                                        continue t;
                                s.push(l)
                            } else
                                o(e, f, r) || s.push(l)
                        }
                        return s
                    }
                    Un.templateSettings = {
                        escape: Y,
                        evaluate: X,
                        interpolate: H,
                        variable: "",
                        imports: {
                            _: Un
                        }
                    },
                    Un.prototype = Fn.prototype,
                    Un.prototype.constructor = Un,
                    qn.prototype = Cn(Fn.prototype),
                    qn.prototype.constructor = qn,
                    Nn.prototype = Cn(Fn.prototype),
                    Nn.prototype.constructor = Nn,
                    Bn.prototype.clear = function() {
                        this.__data__ = xn ? xn(null) : {},
                        this.size = 0
                    }
                    ,
                    Bn.prototype.delete = function(t) {
                        var e = this.has(t) && delete this.__data__[t];
                        return this.size -= e ? 1 : 0,
                        e
                    }
                    ,
                    Bn.prototype.get = function(t) {
                        var e = this.__data__;
                        if (xn) {
                            var n = e[t];
                            return n === u ? i : n
                        }
                        return jt.call(e, t) ? e[t] : i
                    }
                    ,
                    Bn.prototype.has = function(t) {
                        var e = this.__data__;
                        return xn ? e[t] !== i : jt.call(e, t)
                    }
                    ,
                    Bn.prototype.set = function(t, e) {
                        var n = this.__data__;
                        return this.size += this.has(t) ? 0 : 1,
                        n[t] = xn && e === i ? u : e,
                        this
                    }
                    ,
                    Gn.prototype.clear = function() {
                        this.__data__ = [],
                        this.size = 0
                    }
                    ,
                    Gn.prototype.delete = function(t) {
                        var e = this.__data__
                          , n = tr(e, t);
                        return !(n < 0 || (n == e.length - 1 ? e.pop() : Zt.call(e, n, 1),
                        --this.size,
                        0))
                    }
                    ,
                    Gn.prototype.get = function(t) {
                        var e = this.__data__
                          , n = tr(e, t);
                        return n < 0 ? i : e[n][1]
                    }
                    ,
                    Gn.prototype.has = function(t) {
                        return tr(this.__data__, t) > -1
                    }
                    ,
                    Gn.prototype.set = function(t, e) {
                        var n = this.__data__
                          , r = tr(n, t);
                        return r < 0 ? (++this.size,
                        n.push([t, e])) : n[r][1] = e,
                        this
                    }
                    ,
                    Kn.prototype.clear = function() {
                        this.size = 0,
                        this.__data__ = {
                            hash: new Bn,
                            map: new (In || Gn),
                            string: new Bn
                        }
                    }
                    ,
                    Kn.prototype.delete = function(t) {
                        var e = uo(this, t).delete(t);
                        return this.size -= e ? 1 : 0,
                        e
                    }
                    ,
                    Kn.prototype.get = function(t) {
                        return uo(this, t).get(t)
                    }
                    ,
                    Kn.prototype.has = function(t) {
                        return uo(this, t).has(t)
                    }
                    ,
                    Kn.prototype.set = function(t, e) {
                        var n = uo(this, t)
                          , r = n.size;
                        return n.set(t, e),
                        this.size += n.size == r ? 0 : 1,
                        this
                    }
                    ,
                    Vn.prototype.add = Vn.prototype.push = function(t) {
                        return this.__data__.set(t, u),
                        this
                    }
                    ,
                    Vn.prototype.has = function(t) {
                        return this.__data__.has(t)
                    }
                    ,
                    Zn.prototype.clear = function() {
                        this.__data__ = new Gn,
                        this.size = 0
                    }
                    ,
                    Zn.prototype.delete = function(t) {
                        var e = this.__data__
                          , n = e.delete(t);
                        return this.size = e.size,
                        n
                    }
                    ,
                    Zn.prototype.get = function(t) {
                        return this.__data__.get(t)
                    }
                    ,
                    Zn.prototype.has = function(t) {
                        return this.__data__.has(t)
                    }
                    ,
                    Zn.prototype.set = function(t, e) {
                        var n = this.__data__;
                        if (n instanceof Gn) {
                            var r = n.__data__;
                            if (!In || r.length < 199)
                                return r.push([t, e]),
                                this.size = ++n.size,
                                this;
                            n = this.__data__ = new Kn(r)
                        }
                        return n.set(t, e),
                        this.size = n.size,
                        this
                    }
                    ;
                    var lr = Pi(br)
                      , fr = Pi(wr, !0);
                    function hr(t, e) {
                        var n = !0;
                        return lr(t, (function(t, r, i) {
                            return n = !!e(t, r, i)
                        }
                        )),
                        n
                    }
                    function dr(t, e, n) {
                        for (var r = -1, o = t.length; ++r < o; ) {
                            var u = t[r]
                              , a = e(u);
                            if (null != a && (s === i ? a == a && !aa(a) : n(a, s)))
                                var s = a
                                  , c = u
                        }
                        return c
                    }
                    function pr(t, e) {
                        var n = [];
                        return lr(t, (function(t, r, i) {
                            e(t, r, i) && n.push(t)
                        }
                        )),
                        n
                    }
                    function vr(t, e, n, r, i) {
                        var o = -1
                          , u = t.length;
                        for (n || (n = vo),
                        i || (i = []); ++o < u; ) {
                            var a = t[o];
                            e > 0 && n(a) ? e > 1 ? vr(a, e - 1, n, r, i) : ze(i, a) : r || (i[i.length] = a)
                        }
                        return i
                    }
                    var yr = Di()
                      , gr = Di(!0);
                    function br(t, e) {
                        return t && yr(t, e, Pa)
                    }
                    function wr(t, e) {
                        return t && gr(t, e, Pa)
                    }
                    function _r(t, e) {
                        return Te(e, (function(e) {
                            return Xu(t[e])
                        }
                        ))
                    }
                    function mr(t, e) {
                        for (var n = 0, r = (e = yi(e, t)).length; null != t && n < r; )
                            t = t[Oo(e[n++])];
                        return n && n == r ? t : i
                    }
                    function kr(t, e, n) {
                        var r = e(t);
                        return Bu(t) ? r : ze(r, n(t))
                    }
                    function Ir(t) {
                        return null == t ? t === i ? "[object Undefined]" : "[object Null]" : Jt && Jt in St(t) ? function(t) {
                            var e = jt.call(t, Jt)
                              , n = t[Jt];
                            try {
                                t[Jt] = i;
                                var r = !0
                            } catch (t) {}
                            var o = Ot.call(t);
                            return r && (e ? t[Jt] = n : delete t[Jt]),
                            o
                        }(t) : function(t) {
                            return Ot.call(t)
                        }(t)
                    }
                    function Sr(t, e) {
                        return t > e
                    }
                    function Er(t, e) {
                        return null != t && jt.call(t, e)
                    }
                    function Ar(t, e) {
                        return null != t && e in St(t)
                    }
                    function xr(t, e, n) {
                        for (var o = n ? Pe : Re, u = t[0].length, a = t.length, s = a, c = r(a), l = 1 / 0, f = []; s--; ) {
                            var h = t[s];
                            s && e && (h = De(h, Ye(e))),
                            l = gn(h.length, l),
                            c[s] = !n && (e || u >= 120 && h.length >= 120) ? new Vn(s && h) : i
                        }
                        h = t[0];
                        var d = -1
                          , p = c[0];
                        t: for (; ++d < u && f.length < l; ) {
                            var v = h[d]
                              , y = e ? e(v) : v;
                            if (v = n || 0 !== v ? v : 0,
                            !(p ? He(p, y) : o(f, y, n))) {
                                for (s = a; --s; ) {
                                    var g = c[s];
                                    if (!(g ? He(g, y) : o(t[s], y, n)))
                                        continue t
                                }
                                p && p.push(y),
                                f.push(v)
                            }
                        }
                        return f
                    }
                    function Tr(t, e, n) {
                        var r = null == (t = Eo(t, e = yi(e, t))) ? t : t[Oo(Yo(e))];
                        return null == r ? i : Ie(r, t, n)
                    }
                    function Rr(t) {
                        return ta(t) && Ir(t) == v
                    }
                    function Pr(t, e, n, r, o) {
                        return t === e || (null == t || null == e || !ta(t) && !ta(e) ? t != t && e != e : function(t, e, n, r, o, u) {
                            var a = Bu(t)
                              , s = Bu(e)
                              , c = a ? y : fo(t)
                              , l = s ? y : fo(e)
                              , f = (c = c == v ? S : c) == S
                              , h = (l = l == v ? S : l) == S
                              , d = c == l;
                            if (d && Zu(t)) {
                                if (!Zu(e))
                                    return !1;
                                a = !0,
                                f = !1
                            }
                            if (d && !f)
                                return u || (u = new Zn),
                                a || sa(t) ? Ji(t, e, n, r, o, u) : function(t, e, n, r, i, o, u) {
                                    switch (n) {
                                    case z:
                                        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                                            return !1;
                                        t = t.buffer,
                                        e = e.buffer;
                                    case D:
                                        return !(t.byteLength != e.byteLength || !o(new Nt(t), new Nt(e)));
                                    case g:
                                    case b:
                                    case I:
                                        return Cu(+t, +e);
                                    case w:
                                        return t.name == e.name && t.message == e.message;
                                    case A:
                                    case T:
                                        return t == e + "";
                                    case k:
                                        var a = on;
                                    case x:
                                        var s = 1 & r;
                                        if (a || (a = sn),
                                        t.size != e.size && !s)
                                            return !1;
                                        var c = u.get(t);
                                        if (c)
                                            return c == e;
                                        r |= 2,
                                        u.set(t, e);
                                        var l = Ji(a(t), a(e), r, i, o, u);
                                        return u.delete(t),
                                        l;
                                    case R:
                                        if (On)
                                            return On.call(t) == On.call(e)
                                    }
                                    return !1
                                }(t, e, c, n, r, o, u);
                            if (!(1 & n)) {
                                var p = f && jt.call(t, "__wrapped__")
                                  , _ = h && jt.call(e, "__wrapped__");
                                if (p || _) {
                                    var m = p ? t.value() : t
                                      , E = _ ? e.value() : e;
                                    return u || (u = new Zn),
                                    o(m, E, n, r, u)
                                }
                            }
                            return !!d && (u || (u = new Zn),
                            function(t, e, n, r, o, u) {
                                var a = 1 & n
                                  , s = to(t)
                                  , c = s.length;
                                if (c != to(e).length && !a)
                                    return !1;
                                for (var l = c; l--; ) {
                                    var f = s[l];
                                    if (!(a ? f in e : jt.call(e, f)))
                                        return !1
                                }
                                var h = u.get(t)
                                  , d = u.get(e);
                                if (h && d)
                                    return h == e && d == t;
                                var p = !0;
                                u.set(t, e),
                                u.set(e, t);
                                for (var v = a; ++l < c; ) {
                                    var y = t[f = s[l]]
                                      , g = e[f];
                                    if (r)
                                        var b = a ? r(g, y, f, e, t, u) : r(y, g, f, t, e, u);
                                    if (!(b === i ? y === g || o(y, g, n, r, u) : b)) {
                                        p = !1;
                                        break
                                    }
                                    v || (v = "constructor" == f)
                                }
                                if (p && !v) {
                                    var w = t.constructor
                                      , _ = e.constructor;
                                    w == _ || !("constructor"in t) || !("constructor"in e) || "function" == typeof w && w instanceof w && "function" == typeof _ && _ instanceof _ || (p = !1)
                                }
                                return u.delete(t),
                                u.delete(e),
                                p
                            }(t, e, n, r, o, u))
                        }(t, e, n, r, Pr, o))
                    }
                    function Dr(t, e, n, r) {
                        var o = n.length
                          , u = o
                          , a = !r;
                        if (null == t)
                            return !u;
                        for (t = St(t); o--; ) {
                            var s = n[o];
                            if (a && s[2] ? s[1] !== t[s[0]] : !(s[0]in t))
                                return !1
                        }
                        for (; ++o < u; ) {
                            var c = (s = n[o])[0]
                              , l = t[c]
                              , f = s[1];
                            if (a && s[2]) {
                                if (l === i && !(c in t))
                                    return !1
                            } else {
                                var h = new Zn;
                                if (r)
                                    var d = r(l, f, c, t, e, h);
                                if (!(d === i ? Pr(f, l, 3, r, h) : d))
                                    return !1
                            }
                        }
                        return !0
                    }
                    function zr(t) {
                        return !(!$u(t) || (e = t,
                        Mt && Mt in e)) && (Xu(t) ? Ct : vt).test(Lo(t));
                        var e
                    }
                    function jr(t) {
                        return "function" == typeof t ? t : null == t ? ns : "object" == typeof t ? Bu(t) ? Ur(t[0], t[1]) : Lr(t) : fs(t)
                    }
                    function Wr(t) {
                        if (!mo(t))
                            return vn(t);
                        var e = [];
                        for (var n in St(t))
                            jt.call(t, n) && "constructor" != n && e.push(n);
                        return e
                    }
                    function Mr(t, e) {
                        return t < e
                    }
                    function Or(t, e) {
                        var n = -1
                          , i = Ku(t) ? r(t.length) : [];
                        return lr(t, (function(t, r, o) {
                            i[++n] = e(t, r, o)
                        }
                        )),
                        i
                    }
                    function Lr(t) {
                        var e = ao(t);
                        return 1 == e.length && e[0][2] ? Io(e[0][0], e[0][1]) : function(n) {
                            return n === t || Dr(n, t, e)
                        }
                    }
                    function Ur(t, e) {
                        return bo(t) && ko(e) ? Io(Oo(t), e) : function(n) {
                            var r = Ea(n, t);
                            return r === i && r === e ? Aa(n, t) : Pr(e, r, 3)
                        }
                    }
                    function Cr(t, e, n, r, o) {
                        t !== e && yr(e, (function(u, a) {
                            if (o || (o = new Zn),
                            $u(u))
                                !function(t, e, n, r, o, u, a) {
                                    var s = Ao(t, n)
                                      , c = Ao(e, n)
                                      , l = a.get(c);
                                    if (l)
                                        Jn(t, n, l);
                                    else {
                                        var f = u ? u(s, c, n + "", t, e, a) : i
                                          , h = f === i;
                                        if (h) {
                                            var d = Bu(c)
                                              , p = !d && Zu(c)
                                              , v = !d && !p && sa(c);
                                            f = c,
                                            d || p || v ? Bu(s) ? f = s : Vu(s) ? f = Ai(s) : p ? (h = !1,
                                            f = _i(c, !0)) : v ? (h = !1,
                                            f = ki(c, !0)) : f = [] : ra(c) || Nu(c) ? (f = s,
                                            Nu(s) ? f = ya(s) : $u(s) && !Xu(s) || (f = po(c))) : h = !1
                                        }
                                        h && (a.set(c, f),
                                        o(f, c, r, u, a),
                                        a.delete(c)),
                                        Jn(t, n, f)
                                    }
                                }(t, e, a, n, Cr, r, o);
                            else {
                                var s = r ? r(Ao(t, a), u, a + "", t, e, o) : i;
                                s === i && (s = u),
                                Jn(t, a, s)
                            }
                        }
                        ), Da)
                    }
                    function Fr(t, e) {
                        var n = t.length;
                        if (n)
                            return yo(e += e < 0 ? n : 0, n) ? t[e] : i
                    }
                    function qr(t, e, n) {
                        e = e.length ? De(e, (function(t) {
                            return Bu(t) ? function(e) {
                                return mr(e, 1 === t.length ? t[0] : t)
                            }
                            : t
                        }
                        )) : [ns];
                        var r = -1;
                        e = De(e, Ye(oo()));
                        var i = Or(t, (function(t, n, i) {
                            var o = De(e, (function(e) {
                                return e(t)
                            }
                            ));
                            return {
                                criteria: o,
                                index: ++r,
                                value: t
                            }
                        }
                        ));
                        return function(t, e) {
                            var r = t.length;
                            for (t.sort((function(t, e) {
                                return function(t, e, n) {
                                    for (var r = -1, i = t.criteria, o = e.criteria, u = i.length, a = n.length; ++r < u; ) {
                                        var s = Ii(i[r], o[r]);
                                        if (s)
                                            return r >= a ? s : s * ("desc" == n[r] ? -1 : 1)
                                    }
                                    return t.index - e.index
                                }(t, e, n)
                            }
                            )); r--; )
                                t[r] = t[r].value;
                            return t
                        }(i)
                    }
                    function Nr(t, e, n) {
                        for (var r = -1, i = e.length, o = {}; ++r < i; ) {
                            var u = e[r]
                              , a = mr(t, u);
                            n(a, u) && Xr(o, yi(u, t), a)
                        }
                        return o
                    }
                    function Br(t, e, n, r) {
                        var i = r ? Fe : Ce
                          , o = -1
                          , u = e.length
                          , a = t;
                        for (t === e && (e = Ai(e)),
                        n && (a = De(t, Ye(n))); ++o < u; )
                            for (var s = 0, c = e[o], l = n ? n(c) : c; (s = i(a, l, s, r)) > -1; )
                                a !== t && Zt.call(a, s, 1),
                                Zt.call(t, s, 1);
                        return t
                    }
                    function Gr(t, e) {
                        for (var n = t ? e.length : 0, r = n - 1; n--; ) {
                            var i = e[n];
                            if (n == r || i !== o) {
                                var o = i;
                                yo(i) ? Zt.call(t, i, 1) : si(t, i)
                            }
                        }
                        return t
                    }
                    function Kr(t, e) {
                        return t + de(_n() * (e - t + 1))
                    }
                    function Vr(t, e) {
                        var n = "";
                        if (!t || e < 1 || e > f)
                            return n;
                        do {
                            e % 2 && (n += t),
                            (e = de(e / 2)) && (t += t)
                        } while (e);
                        return n
                    }
                    function Zr(t, e) {
                        return Ro(So(t, e, ns), t + "")
                    }
                    function Qr(t) {
                        return Yn(Ca(t))
                    }
                    function Yr(t, e) {
                        var n = Ca(t);
                        return zo(n, or(e, 0, n.length))
                    }
                    function Xr(t, e, n, r) {
                        if (!$u(t))
                            return t;
                        for (var o = -1, u = (e = yi(e, t)).length, a = u - 1, s = t; null != s && ++o < u; ) {
                            var c = Oo(e[o])
                              , l = n;
                            if ("__proto__" === c || "constructor" === c || "prototype" === c)
                                return t;
                            if (o != a) {
                                var f = s[c];
                                (l = r ? r(f, c, s) : i) === i && (l = $u(f) ? f : yo(e[o + 1]) ? [] : {})
                            }
                            $n(s, c, l),
                            s = s[c]
                        }
                        return t
                    }
                    var Hr = Tn ? function(t, e) {
                        return Tn.set(t, e),
                        t
                    }
                    : ns
                      , Jr = te ? function(t, e) {
                        return te(t, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: $a(e),
                            writable: !0
                        })
                    }
                    : ns;
                    function $r(t) {
                        return zo(Ca(t))
                    }
                    function ti(t, e, n) {
                        var i = -1
                          , o = t.length;
                        e < 0 && (e = -e > o ? 0 : o + e),
                        (n = n > o ? o : n) < 0 && (n += o),
                        o = e > n ? 0 : n - e >>> 0,
                        e >>>= 0;
                        for (var u = r(o); ++i < o; )
                            u[i] = t[i + e];
                        return u
                    }
                    function ei(t, e) {
                        var n;
                        return lr(t, (function(t, r, i) {
                            return !(n = e(t, r, i))
                        }
                        )),
                        !!n
                    }
                    function ni(t, e, n) {
                        var r = 0
                          , i = null == t ? r : t.length;
                        if ("number" == typeof e && e == e && i <= 2147483647) {
                            for (; r < i; ) {
                                var o = r + i >>> 1
                                  , u = t[o];
                                null !== u && !aa(u) && (n ? u <= e : u < e) ? r = o + 1 : i = o
                            }
                            return i
                        }
                        return ri(t, e, ns, n)
                    }
                    function ri(t, e, n, r) {
                        var o = 0
                          , u = null == t ? 0 : t.length;
                        if (0 === u)
                            return 0;
                        for (var a = (e = n(e)) != e, s = null === e, c = aa(e), l = e === i; o < u; ) {
                            var f = de((o + u) / 2)
                              , h = n(t[f])
                              , d = h !== i
                              , p = null === h
                              , v = h == h
                              , y = aa(h);
                            if (a)
                                var g = r || v;
                            else
                                g = l ? v && (r || d) : s ? v && d && (r || !p) : c ? v && d && !p && (r || !y) : !p && !y && (r ? h <= e : h < e);
                            g ? o = f + 1 : u = f
                        }
                        return gn(u, 4294967294)
                    }
                    function ii(t, e) {
                        for (var n = -1, r = t.length, i = 0, o = []; ++n < r; ) {
                            var u = t[n]
                              , a = e ? e(u) : u;
                            if (!n || !Cu(a, s)) {
                                var s = a;
                                o[i++] = 0 === u ? 0 : u
                            }
                        }
                        return o
                    }
                    function oi(t) {
                        return "number" == typeof t ? t : aa(t) ? h : +t
                    }
                    function ui(t) {
                        if ("string" == typeof t)
                            return t;
                        if (Bu(t))
                            return De(t, ui) + "";
                        if (aa(t))
                            return Ln ? Ln.call(t) : "";
                        var e = t + "";
                        return "0" == e && 1 / t == -1 / 0 ? "-0" : e
                    }
                    function ai(t, e, n) {
                        var r = -1
                          , i = Re
                          , o = t.length
                          , u = !0
                          , a = []
                          , s = a;
                        if (n)
                            u = !1,
                            i = Pe;
                        else if (o >= 200) {
                            var c = e ? null : Vi(t);
                            if (c)
                                return sn(c);
                            u = !1,
                            i = He,
                            s = new Vn
                        } else
                            s = e ? [] : a;
                        t: for (; ++r < o; ) {
                            var l = t[r]
                              , f = e ? e(l) : l;
                            if (l = n || 0 !== l ? l : 0,
                            u && f == f) {
                                for (var h = s.length; h--; )
                                    if (s[h] === f)
                                        continue t;
                                e && s.push(f),
                                a.push(l)
                            } else
                                i(s, f, n) || (s !== a && s.push(f),
                                a.push(l))
                        }
                        return a
                    }
                    function si(t, e) {
                        return null == (t = Eo(t, e = yi(e, t))) || delete t[Oo(Yo(e))]
                    }
                    function ci(t, e, n, r) {
                        return Xr(t, e, n(mr(t, e)), r)
                    }
                    function li(t, e, n, r) {
                        for (var i = t.length, o = r ? i : -1; (r ? o-- : ++o < i) && e(t[o], o, t); )
                            ;
                        return n ? ti(t, r ? 0 : o, r ? o + 1 : i) : ti(t, r ? o + 1 : 0, r ? i : o)
                    }
                    function fi(t, e) {
                        var n = t;
                        return n instanceof Nn && (n = n.value()),
                        je(e, (function(t, e) {
                            return e.func.apply(e.thisArg, ze([t], e.args))
                        }
                        ), n)
                    }
                    function hi(t, e, n) {
                        var i = t.length;
                        if (i < 2)
                            return i ? ai(t[0]) : [];
                        for (var o = -1, u = r(i); ++o < i; )
                            for (var a = t[o], s = -1; ++s < i; )
                                s != o && (u[o] = cr(u[o] || a, t[s], e, n));
                        return ai(vr(u, 1), e, n)
                    }
                    function di(t, e, n) {
                        for (var r = -1, o = t.length, u = e.length, a = {}; ++r < o; ) {
                            var s = r < u ? e[r] : i;
                            n(a, t[r], s)
                        }
                        return a
                    }
                    function pi(t) {
                        return Vu(t) ? t : []
                    }
                    function vi(t) {
                        return "function" == typeof t ? t : ns
                    }
                    function yi(t, e) {
                        return Bu(t) ? t : bo(t, e) ? [t] : Mo(ga(t))
                    }
                    var gi = Zr;
                    function bi(t, e, n) {
                        var r = t.length;
                        return n = n === i ? r : n,
                        !e && n >= r ? t : ti(t, e, n)
                    }
                    var wi = ue || function(t) {
                        return fe.clearTimeout(t)
                    }
                    ;
                    function _i(t, e) {
                        if (e)
                            return t.slice();
                        var n = t.length
                          , r = Bt ? Bt(n) : new t.constructor(n);
                        return t.copy(r),
                        r
                    }
                    function mi(t) {
                        var e = new t.constructor(t.byteLength);
                        return new Nt(e).set(new Nt(t)),
                        e
                    }
                    function ki(t, e) {
                        var n = e ? mi(t.buffer) : t.buffer;
                        return new t.constructor(n,t.byteOffset,t.length)
                    }
                    function Ii(t, e) {
                        if (t !== e) {
                            var n = t !== i
                              , r = null === t
                              , o = t == t
                              , u = aa(t)
                              , a = e !== i
                              , s = null === e
                              , c = e == e
                              , l = aa(e);
                            if (!s && !l && !u && t > e || u && a && c && !s && !l || r && a && c || !n && c || !o)
                                return 1;
                            if (!r && !u && !l && t < e || l && n && o && !r && !u || s && n && o || !a && o || !c)
                                return -1
                        }
                        return 0
                    }
                    function Si(t, e, n, i) {
                        for (var o = -1, u = t.length, a = n.length, s = -1, c = e.length, l = yn(u - a, 0), f = r(c + l), h = !i; ++s < c; )
                            f[s] = e[s];
                        for (; ++o < a; )
                            (h || o < u) && (f[n[o]] = t[o]);
                        for (; l--; )
                            f[s++] = t[o++];
                        return f
                    }
                    function Ei(t, e, n, i) {
                        for (var o = -1, u = t.length, a = -1, s = n.length, c = -1, l = e.length, f = yn(u - s, 0), h = r(f + l), d = !i; ++o < f; )
                            h[o] = t[o];
                        for (var p = o; ++c < l; )
                            h[p + c] = e[c];
                        for (; ++a < s; )
                            (d || o < u) && (h[p + n[a]] = t[o++]);
                        return h
                    }
                    function Ai(t, e) {
                        var n = -1
                          , i = t.length;
                        for (e || (e = r(i)); ++n < i; )
                            e[n] = t[n];
                        return e
                    }
                    function xi(t, e, n, r) {
                        var o = !n;
                        n || (n = {});
                        for (var u = -1, a = e.length; ++u < a; ) {
                            var s = e[u]
                              , c = r ? r(n[s], t[s], s, n, t) : i;
                            c === i && (c = t[s]),
                            o ? rr(n, s, c) : $n(n, s, c)
                        }
                        return n
                    }
                    function Ti(t, e) {
                        return function(n, r) {
                            var i = Bu(n) ? Se : er
                              , o = e ? e() : {};
                            return i(n, t, oo(r, 2), o)
                        }
                    }
                    function Ri(t) {
                        return Zr((function(e, n) {
                            var r = -1
                              , o = n.length
                              , u = o > 1 ? n[o - 1] : i
                              , a = o > 2 ? n[2] : i;
                            for (u = t.length > 3 && "function" == typeof u ? (o--,
                            u) : i,
                            a && go(n[0], n[1], a) && (u = o < 3 ? i : u,
                            o = 1),
                            e = St(e); ++r < o; ) {
                                var s = n[r];
                                s && t(e, s, r, u)
                            }
                            return e
                        }
                        ))
                    }
                    function Pi(t, e) {
                        return function(n, r) {
                            if (null == n)
                                return n;
                            if (!Ku(n))
                                return t(n, r);
                            for (var i = n.length, o = e ? i : -1, u = St(n); (e ? o-- : ++o < i) && !1 !== r(u[o], o, u); )
                                ;
                            return n
                        }
                    }
                    function Di(t) {
                        return function(e, n, r) {
                            for (var i = -1, o = St(e), u = r(e), a = u.length; a--; ) {
                                var s = u[t ? a : ++i];
                                if (!1 === n(o[s], s, o))
                                    break
                            }
                            return e
                        }
                    }
                    function zi(t) {
                        return function(e) {
                            var n = rn(e = ga(e)) ? fn(e) : i
                              , r = n ? n[0] : e.charAt(0)
                              , o = n ? bi(n, 1).join("") : e.slice(1);
                            return r[t]() + o
                        }
                    }
                    function ji(t) {
                        return function(e) {
                            return je(Xa(Na(e).replace(Xt, "")), t, "")
                        }
                    }
                    function Wi(t) {
                        return function() {
                            var e = arguments;
                            switch (e.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e[0]);
                            case 2:
                                return new t(e[0],e[1]);
                            case 3:
                                return new t(e[0],e[1],e[2]);
                            case 4:
                                return new t(e[0],e[1],e[2],e[3]);
                            case 5:
                                return new t(e[0],e[1],e[2],e[3],e[4]);
                            case 6:
                                return new t(e[0],e[1],e[2],e[3],e[4],e[5]);
                            case 7:
                                return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])
                            }
                            var n = Cn(t.prototype)
                              , r = t.apply(n, e);
                            return $u(r) ? r : n
                        }
                    }
                    function Mi(t) {
                        return function(e, n, r) {
                            var o = St(e);
                            if (!Ku(e)) {
                                var u = oo(n, 3);
                                e = Pa(e),
                                n = function(t) {
                                    return u(o[t], t, o)
                                }
                            }
                            var a = t(e, n, r);
                            return a > -1 ? o[u ? e[a] : a] : i
                        }
                    }
                    function Oi(t) {
                        return $i((function(e) {
                            var n = e.length
                              , r = n
                              , u = qn.prototype.thru;
                            for (t && e.reverse(); r--; ) {
                                var a = e[r];
                                if ("function" != typeof a)
                                    throw new xt(o);
                                if (u && !s && "wrapper" == ro(a))
                                    var s = new qn([],!0)
                            }
                            for (r = s ? r : n; ++r < n; ) {
                                var c = ro(a = e[r])
                                  , l = "wrapper" == c ? no(a) : i;
                                s = l && wo(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9] ? s[ro(l[0])].apply(s, l[3]) : 1 == a.length && wo(a) ? s[c]() : s.thru(a)
                            }
                            return function() {
                                var t = arguments
                                  , r = t[0];
                                if (s && 1 == t.length && Bu(r))
                                    return s.plant(r).value();
                                for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n; )
                                    o = e[i].call(this, o);
                                return o
                            }
                        }
                        ))
                    }
                    function Li(t, e, n, o, u, a, s, l, f, h) {
                        var d = e & c
                          , p = 1 & e
                          , v = 2 & e
                          , y = 24 & e
                          , g = 512 & e
                          , b = v ? i : Wi(t);
                        return function c() {
                            for (var w = arguments.length, _ = r(w), m = w; m--; )
                                _[m] = arguments[m];
                            if (y)
                                var k = io(c)
                                  , I = function(t, e) {
                                    for (var n = t.length, r = 0; n--; )
                                        t[n] === e && ++r;
                                    return r
                                }(_, k);
                            if (o && (_ = Si(_, o, u, y)),
                            a && (_ = Ei(_, a, s, y)),
                            w -= I,
                            y && w < h) {
                                var S = an(_, k);
                                return Gi(t, e, Li, c.placeholder, n, _, S, l, f, h - w)
                            }
                            var E = p ? n : this
                              , A = v ? E[t] : t;
                            return w = _.length,
                            l ? _ = function(t, e) {
                                for (var n = t.length, r = gn(e.length, n), o = Ai(t); r--; ) {
                                    var u = e[r];
                                    t[r] = yo(u, n) ? o[u] : i
                                }
                                return t
                            }(_, l) : g && w > 1 && _.reverse(),
                            d && f < w && (_.length = f),
                            this && this !== fe && this instanceof c && (A = b || Wi(A)),
                            A.apply(E, _)
                        }
                    }
                    function Ui(t, e) {
                        return function(n, r) {
                            return function(t, e, n, r) {
                                return br(t, (function(t, i, o) {
                                    e(r, n(t), i, o)
                                }
                                )),
                                r
                            }(n, t, e(r), {})
                        }
                    }
                    function Ci(t, e) {
                        return function(n, r) {
                            var o;
                            if (n === i && r === i)
                                return e;
                            if (n !== i && (o = n),
                            r !== i) {
                                if (o === i)
                                    return r;
                                "string" == typeof n || "string" == typeof r ? (n = ui(n),
                                r = ui(r)) : (n = oi(n),
                                r = oi(r)),
                                o = t(n, r)
                            }
                            return o
                        }
                    }
                    function Fi(t) {
                        return $i((function(e) {
                            return e = De(e, Ye(oo())),
                            Zr((function(n) {
                                var r = this;
                                return t(e, (function(t) {
                                    return Ie(t, r, n)
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    function qi(t, e) {
                        var n = (e = e === i ? " " : ui(e)).length;
                        if (n < 2)
                            return n ? Vr(e, t) : e;
                        var r = Vr(e, he(t / ln(e)));
                        return rn(e) ? bi(fn(r), 0, t).join("") : r.slice(0, t)
                    }
                    function Ni(t) {
                        return function(e, n, o) {
                            return o && "number" != typeof o && go(e, n, o) && (n = o = i),
                            e = ha(e),
                            n === i ? (n = e,
                            e = 0) : n = ha(n),
                            function(t, e, n, i) {
                                for (var o = -1, u = yn(he((e - t) / (n || 1)), 0), a = r(u); u--; )
                                    a[i ? u : ++o] = t,
                                    t += n;
                                return a
                            }(e, n, o = o === i ? e < n ? 1 : -1 : ha(o), t)
                        }
                    }
                    function Bi(t) {
                        return function(e, n) {
                            return "string" == typeof e && "string" == typeof n || (e = va(e),
                            n = va(n)),
                            t(e, n)
                        }
                    }
                    function Gi(t, e, n, r, o, u, a, c, l, f) {
                        var h = 8 & e;
                        e |= h ? s : 64,
                        4 & (e &= ~(h ? 64 : s)) || (e &= -4);
                        var d = [t, e, o, h ? u : i, h ? a : i, h ? i : u, h ? i : a, c, l, f]
                          , p = n.apply(i, d);
                        return wo(t) && xo(p, d),
                        p.placeholder = r,
                        Po(p, t, e)
                    }
                    function Ki(t) {
                        var e = It[t];
                        return function(t, n) {
                            if (t = va(t),
                            (n = null == n ? 0 : gn(da(n), 292)) && Oe(t)) {
                                var r = (ga(t) + "e").split("e");
                                return +((r = (ga(e(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n))
                            }
                            return e(t)
                        }
                    }
                    var Vi = En && 1 / sn(new En([, -0]))[1] == l ? function(t) {
                        return new En(t)
                    }
                    : as;
                    function Zi(t) {
                        return function(e) {
                            var n = fo(e);
                            return n == k ? on(e) : n == x ? cn(e) : function(t, e) {
                                return De(e, (function(e) {
                                    return [e, t[e]]
                                }
                                ))
                            }(e, t(e))
                        }
                    }
                    function Qi(t, e, n, u, l, f, h, d) {
                        var p = 2 & e;
                        if (!p && "function" != typeof t)
                            throw new xt(o);
                        var v = u ? u.length : 0;
                        if (v || (e &= -97,
                        u = l = i),
                        h = h === i ? h : yn(da(h), 0),
                        d = d === i ? d : da(d),
                        v -= l ? l.length : 0,
                        64 & e) {
                            var y = u
                              , g = l;
                            u = l = i
                        }
                        var b = p ? i : no(t)
                          , w = [t, e, n, u, l, y, g, f, h, d];
                        if (b && function(t, e) {
                            var n = t[1]
                              , r = e[1]
                              , i = n | r
                              , o = i < 131
                              , u = r == c && 8 == n || r == c && 256 == n && t[7].length <= e[8] || 384 == r && e[7].length <= e[8] && 8 == n;
                            if (!o && !u)
                                return t;
                            1 & r && (t[2] = e[2],
                            i |= 1 & n ? 0 : 4);
                            var s = e[3];
                            if (s) {
                                var l = t[3];
                                t[3] = l ? Si(l, s, e[4]) : s,
                                t[4] = l ? an(t[3], a) : e[4]
                            }
                            (s = e[5]) && (l = t[5],
                            t[5] = l ? Ei(l, s, e[6]) : s,
                            t[6] = l ? an(t[5], a) : e[6]),
                            (s = e[7]) && (t[7] = s),
                            r & c && (t[8] = null == t[8] ? e[8] : gn(t[8], e[8])),
                            null == t[9] && (t[9] = e[9]),
                            t[0] = e[0],
                            t[1] = i
                        }(w, b),
                        t = w[0],
                        e = w[1],
                        n = w[2],
                        u = w[3],
                        l = w[4],
                        !(d = w[9] = w[9] === i ? p ? 0 : t.length : yn(w[9] - v, 0)) && 24 & e && (e &= -25),
                        e && 1 != e)
                            _ = 8 == e || 16 == e ? function(t, e, n) {
                                var o = Wi(t);
                                return function u() {
                                    for (var a = arguments.length, s = r(a), c = a, l = io(u); c--; )
                                        s[c] = arguments[c];
                                    var f = a < 3 && s[0] !== l && s[a - 1] !== l ? [] : an(s, l);
                                    return (a -= f.length) < n ? Gi(t, e, Li, u.placeholder, i, s, f, i, i, n - a) : Ie(this && this !== fe && this instanceof u ? o : t, this, s)
                                }
                            }(t, e, d) : e != s && 33 != e || l.length ? Li.apply(i, w) : function(t, e, n, i) {
                                var o = 1 & e
                                  , u = Wi(t);
                                return function e() {
                                    for (var a = -1, s = arguments.length, c = -1, l = i.length, f = r(l + s), h = this && this !== fe && this instanceof e ? u : t; ++c < l; )
                                        f[c] = i[c];
                                    for (; s--; )
                                        f[c++] = arguments[++a];
                                    return Ie(h, o ? n : this, f)
                                }
                            }(t, e, n, u);
                        else
                            var _ = function(t, e, n) {
                                var r = 1 & e
                                  , i = Wi(t);
                                return function e() {
                                    return (this && this !== fe && this instanceof e ? i : t).apply(r ? n : this, arguments)
                                }
                            }(t, e, n);
                        return Po((b ? Hr : xo)(_, w), t, e)
                    }
                    function Yi(t, e, n, r) {
                        return t === i || Cu(t, Pt[n]) && !jt.call(r, n) ? e : t
                    }
                    function Xi(t, e, n, r, o, u) {
                        return $u(t) && $u(e) && (u.set(e, t),
                        Cr(t, e, i, Xi, u),
                        u.delete(e)),
                        t
                    }
                    function Hi(t) {
                        return ra(t) ? i : t
                    }
                    function Ji(t, e, n, r, o, u) {
                        var a = 1 & n
                          , s = t.length
                          , c = e.length;
                        if (s != c && !(a && c > s))
                            return !1;
                        var l = u.get(t)
                          , f = u.get(e);
                        if (l && f)
                            return l == e && f == t;
                        var h = -1
                          , d = !0
                          , p = 2 & n ? new Vn : i;
                        for (u.set(t, e),
                        u.set(e, t); ++h < s; ) {
                            var v = t[h]
                              , y = e[h];
                            if (r)
                                var g = a ? r(y, v, h, e, t, u) : r(v, y, h, t, e, u);
                            if (g !== i) {
                                if (g)
                                    continue;
                                d = !1;
                                break
                            }
                            if (p) {
                                if (!Me(e, (function(t, e) {
                                    if (!He(p, e) && (v === t || o(v, t, n, r, u)))
                                        return p.push(e)
                                }
                                ))) {
                                    d = !1;
                                    break
                                }
                            } else if (v !== y && !o(v, y, n, r, u)) {
                                d = !1;
                                break
                            }
                        }
                        return u.delete(t),
                        u.delete(e),
                        d
                    }
                    function $i(t) {
                        return Ro(So(t, i, Go), t + "")
                    }
                    function to(t) {
                        return kr(t, Pa, co)
                    }
                    function eo(t) {
                        return kr(t, Da, lo)
                    }
                    var no = Tn ? function(t) {
                        return Tn.get(t)
                    }
                    : as;
                    function ro(t) {
                        for (var e = t.name + "", n = Rn[e], r = jt.call(Rn, e) ? n.length : 0; r--; ) {
                            var i = n[r]
                              , o = i.func;
                            if (null == o || o == t)
                                return i.name
                        }
                        return e
                    }
                    function io(t) {
                        return (jt.call(Un, "placeholder") ? Un : t).placeholder
                    }
                    function oo() {
                        var t = Un.iteratee || rs;
                        return t = t === rs ? jr : t,
                        arguments.length ? t(arguments[0], arguments[1]) : t
                    }
                    function uo(t, e) {
                        var n, r, i = t.__data__;
                        return ("string" == (r = typeof (n = e)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? i["string" == typeof e ? "string" : "hash"] : i.map
                    }
                    function ao(t) {
                        for (var e = Pa(t), n = e.length; n--; ) {
                            var r = e[n]
                              , i = t[r];
                            e[n] = [r, i, ko(i)]
                        }
                        return e
                    }
                    function so(t, e) {
                        var n = function(t, e) {
                            return null == t ? i : t[e]
                        }(t, e);
                        return zr(n) ? n : i
                    }
                    var co = ve ? function(t) {
                        return null == t ? [] : (t = St(t),
                        Te(ve(t), (function(e) {
                            return Vt.call(t, e)
                        }
                        )))
                    }
                    : ps
                      , lo = ve ? function(t) {
                        for (var e = []; t; )
                            ze(e, co(t)),
                            t = Gt(t);
                        return e
                    }
                    : ps
                      , fo = Ir;
                    function ho(t, e, n) {
                        for (var r = -1, i = (e = yi(e, t)).length, o = !1; ++r < i; ) {
                            var u = Oo(e[r]);
                            if (!(o = null != t && n(t, u)))
                                break;
                            t = t[u]
                        }
                        return o || ++r != i ? o : !!(i = null == t ? 0 : t.length) && Ju(i) && yo(u, i) && (Bu(t) || Nu(t))
                    }
                    function po(t) {
                        return "function" != typeof t.constructor || mo(t) ? {} : Cn(Gt(t))
                    }
                    function vo(t) {
                        return Bu(t) || Nu(t) || !!(Qt && t && t[Qt])
                    }
                    function yo(t, e) {
                        var n = typeof t;
                        return !!(e = null == e ? f : e) && ("number" == n || "symbol" != n && gt.test(t)) && t > -1 && t % 1 == 0 && t < e
                    }
                    function go(t, e, n) {
                        if (!$u(n))
                            return !1;
                        var r = typeof e;
                        return !!("number" == r ? Ku(n) && yo(e, n.length) : "string" == r && e in n) && Cu(n[e], t)
                    }
                    function bo(t, e) {
                        if (Bu(t))
                            return !1;
                        var n = typeof t;
                        return !("number" != n && "symbol" != n && "boolean" != n && null != t && !aa(t)) || $.test(t) || !J.test(t) || null != e && t in St(e)
                    }
                    function wo(t) {
                        var e = ro(t)
                          , n = Un[e];
                        if ("function" != typeof n || !(e in Nn.prototype))
                            return !1;
                        if (t === n)
                            return !0;
                        var r = no(n);
                        return !!r && t === r[0]
                    }
                    (kn && fo(new kn(new ArrayBuffer(1))) != z || In && fo(new In) != k || Sn && fo(Sn.resolve()) != E || En && fo(new En) != x || An && fo(new An) != P) && (fo = function(t) {
                        var e = Ir(t)
                          , n = e == S ? t.constructor : i
                          , r = n ? Lo(n) : "";
                        if (r)
                            switch (r) {
                            case Pn:
                                return z;
                            case Dn:
                                return k;
                            case zn:
                                return E;
                            case jn:
                                return x;
                            case Wn:
                                return P
                            }
                        return e
                    }
                    );
                    var _o = Dt ? Xu : vs;
                    function mo(t) {
                        var e = t && t.constructor;
                        return t === ("function" == typeof e && e.prototype || Pt)
                    }
                    function ko(t) {
                        return t == t && !$u(t)
                    }
                    function Io(t, e) {
                        return function(n) {
                            return null != n && n[t] === e && (e !== i || t in St(n))
                        }
                    }
                    function So(t, e, n) {
                        return e = yn(e === i ? t.length - 1 : e, 0),
                        function() {
                            for (var i = arguments, o = -1, u = yn(i.length - e, 0), a = r(u); ++o < u; )
                                a[o] = i[e + o];
                            o = -1;
                            for (var s = r(e + 1); ++o < e; )
                                s[o] = i[o];
                            return s[e] = n(a),
                            Ie(t, this, s)
                        }
                    }
                    function Eo(t, e) {
                        return e.length < 2 ? t : mr(t, ti(e, 0, -1))
                    }
                    function Ao(t, e) {
                        if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e)
                            return t[e]
                    }
                    var xo = Do(Hr)
                      , To = le || function(t, e) {
                        return fe.setTimeout(t, e)
                    }
                      , Ro = Do(Jr);
                    function Po(t, e, n) {
                        var r = e + "";
                        return Ro(t, function(t, e) {
                            var n = e.length;
                            if (!n)
                                return t;
                            var r = n - 1;
                            return e[r] = (n > 1 ? "& " : "") + e[r],
                            e = e.join(n > 2 ? ", " : " "),
                            t.replace(ot, "{\n/* [wrapped with " + e + "] */\n")
                        }(r, function(t, e) {
                            return Ee(p, (function(n) {
                                var r = "_." + n[0];
                                e & n[1] && !Re(t, r) && t.push(r)
                            }
                            )),
                            t.sort()
                        }(function(t) {
                            var e = t.match(ut);
                            return e ? e[1].split(at) : []
                        }(r), n)))
                    }
                    function Do(t) {
                        var e = 0
                          , n = 0;
                        return function() {
                            var r = bn()
                              , o = 16 - (r - n);
                            if (n = r,
                            o > 0) {
                                if (++e >= 800)
                                    return arguments[0]
                            } else
                                e = 0;
                            return t.apply(i, arguments)
                        }
                    }
                    function zo(t, e) {
                        var n = -1
                          , r = t.length
                          , o = r - 1;
                        for (e = e === i ? r : e; ++n < e; ) {
                            var u = Kr(n, o)
                              , a = t[u];
                            t[u] = t[n],
                            t[n] = a
                        }
                        return t.length = e,
                        t
                    }
                    var jo, Wo, Mo = (jo = ju((function(t) {
                        var e = [];
                        return 46 === t.charCodeAt(0) && e.push(""),
                        t.replace(tt, (function(t, n, r, i) {
                            e.push(r ? i.replace(lt, "$1") : n || t)
                        }
                        )),
                        e
                    }
                    ), (function(t) {
                        return 500 === Wo.size && Wo.clear(),
                        t
                    }
                    )),
                    Wo = jo.cache,
                    jo);
                    function Oo(t) {
                        if ("string" == typeof t || aa(t))
                            return t;
                        var e = t + "";
                        return "0" == e && 1 / t == -1 / 0 ? "-0" : e
                    }
                    function Lo(t) {
                        if (null != t) {
                            try {
                                return zt.call(t)
                            } catch (t) {}
                            try {
                                return t + ""
                            } catch (t) {}
                        }
                        return ""
                    }
                    function Uo(t) {
                        if (t instanceof Nn)
                            return t.clone();
                        var e = new qn(t.__wrapped__,t.__chain__);
                        return e.__actions__ = Ai(t.__actions__),
                        e.__index__ = t.__index__,
                        e.__values__ = t.__values__,
                        e
                    }
                    var Co = Zr((function(t, e) {
                        return Vu(t) ? cr(t, vr(e, 1, Vu, !0)) : []
                    }
                    ))
                      , Fo = Zr((function(t, e) {
                        var n = Yo(e);
                        return Vu(n) && (n = i),
                        Vu(t) ? cr(t, vr(e, 1, Vu, !0), oo(n, 2)) : []
                    }
                    ))
                      , qo = Zr((function(t, e) {
                        var n = Yo(e);
                        return Vu(n) && (n = i),
                        Vu(t) ? cr(t, vr(e, 1, Vu, !0), i, n) : []
                    }
                    ));
                    function No(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        if (!r)
                            return -1;
                        var i = null == n ? 0 : da(n);
                        return i < 0 && (i = yn(r + i, 0)),
                        Ue(t, oo(e, 3), i)
                    }
                    function Bo(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        if (!r)
                            return -1;
                        var o = r - 1;
                        return n !== i && (o = da(n),
                        o = n < 0 ? yn(r + o, 0) : gn(o, r - 1)),
                        Ue(t, oo(e, 3), o, !0)
                    }
                    function Go(t) {
                        return null != t && t.length ? vr(t, 1) : []
                    }
                    function Ko(t) {
                        return t && t.length ? t[0] : i
                    }
                    var Vo = Zr((function(t) {
                        var e = De(t, pi);
                        return e.length && e[0] === t[0] ? xr(e) : []
                    }
                    ))
                      , Zo = Zr((function(t) {
                        var e = Yo(t)
                          , n = De(t, pi);
                        return e === Yo(n) ? e = i : n.pop(),
                        n.length && n[0] === t[0] ? xr(n, oo(e, 2)) : []
                    }
                    ))
                      , Qo = Zr((function(t) {
                        var e = Yo(t)
                          , n = De(t, pi);
                        return (e = "function" == typeof e ? e : i) && n.pop(),
                        n.length && n[0] === t[0] ? xr(n, i, e) : []
                    }
                    ));
                    function Yo(t) {
                        var e = null == t ? 0 : t.length;
                        return e ? t[e - 1] : i
                    }
                    var Xo = Zr(Ho);
                    function Ho(t, e) {
                        return t && t.length && e && e.length ? Br(t, e) : t
                    }
                    var Jo = $i((function(t, e) {
                        var n = null == t ? 0 : t.length
                          , r = ir(t, e);
                        return Gr(t, De(e, (function(t) {
                            return yo(t, n) ? +t : t
                        }
                        )).sort(Ii)),
                        r
                    }
                    ));
                    function $o(t) {
                        return null == t ? t : mn.call(t)
                    }
                    var tu = Zr((function(t) {
                        return ai(vr(t, 1, Vu, !0))
                    }
                    ))
                      , eu = Zr((function(t) {
                        var e = Yo(t);
                        return Vu(e) && (e = i),
                        ai(vr(t, 1, Vu, !0), oo(e, 2))
                    }
                    ))
                      , nu = Zr((function(t) {
                        var e = Yo(t);
                        return e = "function" == typeof e ? e : i,
                        ai(vr(t, 1, Vu, !0), i, e)
                    }
                    ));
                    function ru(t) {
                        if (!t || !t.length)
                            return [];
                        var e = 0;
                        return t = Te(t, (function(t) {
                            if (Vu(t))
                                return e = yn(t.length, e),
                                !0
                        }
                        )),
                        Ze(e, (function(e) {
                            return De(t, Be(e))
                        }
                        ))
                    }
                    function iu(t, e) {
                        if (!t || !t.length)
                            return [];
                        var n = ru(t);
                        return null == e ? n : De(n, (function(t) {
                            return Ie(e, i, t)
                        }
                        ))
                    }
                    var ou = Zr((function(t, e) {
                        return Vu(t) ? cr(t, e) : []
                    }
                    ))
                      , uu = Zr((function(t) {
                        return hi(Te(t, Vu))
                    }
                    ))
                      , au = Zr((function(t) {
                        var e = Yo(t);
                        return Vu(e) && (e = i),
                        hi(Te(t, Vu), oo(e, 2))
                    }
                    ))
                      , su = Zr((function(t) {
                        var e = Yo(t);
                        return e = "function" == typeof e ? e : i,
                        hi(Te(t, Vu), i, e)
                    }
                    ))
                      , cu = Zr(ru)
                      , lu = Zr((function(t) {
                        var e = t.length
                          , n = e > 1 ? t[e - 1] : i;
                        return n = "function" == typeof n ? (t.pop(),
                        n) : i,
                        iu(t, n)
                    }
                    ));
                    function fu(t) {
                        var e = Un(t);
                        return e.__chain__ = !0,
                        e
                    }
                    function hu(t, e) {
                        return e(t)
                    }
                    var du = $i((function(t) {
                        var e = t.length
                          , n = e ? t[0] : 0
                          , r = this.__wrapped__
                          , o = function(e) {
                            return ir(e, t)
                        };
                        return !(e > 1 || this.__actions__.length) && r instanceof Nn && yo(n) ? ((r = r.slice(n, +n + (e ? 1 : 0))).__actions__.push({
                            func: hu,
                            args: [o],
                            thisArg: i
                        }),
                        new qn(r,this.__chain__).thru((function(t) {
                            return e && !t.length && t.push(i),
                            t
                        }
                        ))) : this.thru(o)
                    }
                    ))
                      , pu = Ti((function(t, e, n) {
                        jt.call(t, n) ? ++t[n] : rr(t, n, 1)
                    }
                    ))
                      , vu = Mi(No)
                      , yu = Mi(Bo);
                    function gu(t, e) {
                        return (Bu(t) ? Ee : lr)(t, oo(e, 3))
                    }
                    function bu(t, e) {
                        return (Bu(t) ? Ae : fr)(t, oo(e, 3))
                    }
                    var wu = Ti((function(t, e, n) {
                        jt.call(t, n) ? t[n].push(e) : rr(t, n, [e])
                    }
                    ))
                      , _u = Zr((function(t, e, n) {
                        var i = -1
                          , o = "function" == typeof e
                          , u = Ku(t) ? r(t.length) : [];
                        return lr(t, (function(t) {
                            u[++i] = o ? Ie(e, t, n) : Tr(t, e, n)
                        }
                        )),
                        u
                    }
                    ))
                      , mu = Ti((function(t, e, n) {
                        rr(t, n, e)
                    }
                    ));
                    function ku(t, e) {
                        return (Bu(t) ? De : Or)(t, oo(e, 3))
                    }
                    var Iu = Ti((function(t, e, n) {
                        t[n ? 0 : 1].push(e)
                    }
                    ), (function() {
                        return [[], []]
                    }
                    ))
                      , Su = Zr((function(t, e) {
                        if (null == t)
                            return [];
                        var n = e.length;
                        return n > 1 && go(t, e[0], e[1]) ? e = [] : n > 2 && go(e[0], e[1], e[2]) && (e = [e[0]]),
                        qr(t, vr(e, 1), [])
                    }
                    ))
                      , Eu = ce || function() {
                        return fe.Date.now()
                    }
                    ;
                    function Au(t, e, n) {
                        return e = n ? i : e,
                        e = t && null == e ? t.length : e,
                        Qi(t, c, i, i, i, i, e)
                    }
                    function xu(t, e) {
                        var n;
                        if ("function" != typeof e)
                            throw new xt(o);
                        return t = da(t),
                        function() {
                            return --t > 0 && (n = e.apply(this, arguments)),
                            t <= 1 && (e = i),
                            n
                        }
                    }
                    var Tu = Zr((function(t, e, n) {
                        var r = 1;
                        if (n.length) {
                            var i = an(n, io(Tu));
                            r |= s
                        }
                        return Qi(t, r, e, n, i)
                    }
                    ))
                      , Ru = Zr((function(t, e, n) {
                        var r = 3;
                        if (n.length) {
                            var i = an(n, io(Ru));
                            r |= s
                        }
                        return Qi(e, r, t, n, i)
                    }
                    ));
                    function Pu(t, e, n) {
                        var r, u, a, s, c, l, f = 0, h = !1, d = !1, p = !0;
                        if ("function" != typeof t)
                            throw new xt(o);
                        function v(e) {
                            var n = r
                              , o = u;
                            return r = u = i,
                            f = e,
                            s = t.apply(o, n)
                        }
                        function y(t) {
                            var n = t - l;
                            return l === i || n >= e || n < 0 || d && t - f >= a
                        }
                        function g() {
                            var t = Eu();
                            if (y(t))
                                return b(t);
                            c = To(g, function(t) {
                                var n = e - (t - l);
                                return d ? gn(n, a - (t - f)) : n
                            }(t))
                        }
                        function b(t) {
                            return c = i,
                            p && r ? v(t) : (r = u = i,
                            s)
                        }
                        function w() {
                            var t = Eu()
                              , n = y(t);
                            if (r = arguments,
                            u = this,
                            l = t,
                            n) {
                                if (c === i)
                                    return function(t) {
                                        return f = t,
                                        c = To(g, e),
                                        h ? v(t) : s
                                    }(l);
                                if (d)
                                    return wi(c),
                                    c = To(g, e),
                                    v(l)
                            }
                            return c === i && (c = To(g, e)),
                            s
                        }
                        return e = va(e) || 0,
                        $u(n) && (h = !!n.leading,
                        a = (d = "maxWait"in n) ? yn(va(n.maxWait) || 0, e) : a,
                        p = "trailing"in n ? !!n.trailing : p),
                        w.cancel = function() {
                            c !== i && wi(c),
                            f = 0,
                            r = l = u = c = i
                        }
                        ,
                        w.flush = function() {
                            return c === i ? s : b(Eu())
                        }
                        ,
                        w
                    }
                    var Du = Zr((function(t, e) {
                        return sr(t, 1, e)
                    }
                    ))
                      , zu = Zr((function(t, e, n) {
                        return sr(t, va(e) || 0, n)
                    }
                    ));
                    function ju(t, e) {
                        if ("function" != typeof t || null != e && "function" != typeof e)
                            throw new xt(o);
                        var n = function() {
                            var r = arguments
                              , i = e ? e.apply(this, r) : r[0]
                              , o = n.cache;
                            if (o.has(i))
                                return o.get(i);
                            var u = t.apply(this, r);
                            return n.cache = o.set(i, u) || o,
                            u
                        };
                        return n.cache = new (ju.Cache || Kn),
                        n
                    }
                    function Wu(t) {
                        if ("function" != typeof t)
                            throw new xt(o);
                        return function() {
                            var e = arguments;
                            switch (e.length) {
                            case 0:
                                return !t.call(this);
                            case 1:
                                return !t.call(this, e[0]);
                            case 2:
                                return !t.call(this, e[0], e[1]);
                            case 3:
                                return !t.call(this, e[0], e[1], e[2])
                            }
                            return !t.apply(this, e)
                        }
                    }
                    ju.Cache = Kn;
                    var Mu = gi((function(t, e) {
                        var n = (e = 1 == e.length && Bu(e[0]) ? De(e[0], Ye(oo())) : De(vr(e, 1), Ye(oo()))).length;
                        return Zr((function(r) {
                            for (var i = -1, o = gn(r.length, n); ++i < o; )
                                r[i] = e[i].call(this, r[i]);
                            return Ie(t, this, r)
                        }
                        ))
                    }
                    ))
                      , Ou = Zr((function(t, e) {
                        var n = an(e, io(Ou));
                        return Qi(t, s, i, e, n)
                    }
                    ))
                      , Lu = Zr((function(t, e) {
                        var n = an(e, io(Lu));
                        return Qi(t, 64, i, e, n)
                    }
                    ))
                      , Uu = $i((function(t, e) {
                        return Qi(t, 256, i, i, i, e)
                    }
                    ));
                    function Cu(t, e) {
                        return t === e || t != t && e != e
                    }
                    var Fu = Bi(Sr)
                      , qu = Bi((function(t, e) {
                        return t >= e
                    }
                    ))
                      , Nu = Rr(function() {
                        return arguments
                    }()) ? Rr : function(t) {
                        return ta(t) && jt.call(t, "callee") && !Vt.call(t, "callee")
                    }
                      , Bu = r.isArray
                      , Gu = ge ? Ye(ge) : function(t) {
                        return ta(t) && Ir(t) == D
                    }
                    ;
                    function Ku(t) {
                        return null != t && Ju(t.length) && !Xu(t)
                    }
                    function Vu(t) {
                        return ta(t) && Ku(t)
                    }
                    var Zu = ye || vs
                      , Qu = be ? Ye(be) : function(t) {
                        return ta(t) && Ir(t) == b
                    }
                    ;
                    function Yu(t) {
                        if (!ta(t))
                            return !1;
                        var e = Ir(t);
                        return e == w || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !ra(t)
                    }
                    function Xu(t) {
                        if (!$u(t))
                            return !1;
                        var e = Ir(t);
                        return e == _ || e == m || "[object AsyncFunction]" == e || "[object Proxy]" == e
                    }
                    function Hu(t) {
                        return "number" == typeof t && t == da(t)
                    }
                    function Ju(t) {
                        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= f
                    }
                    function $u(t) {
                        var e = typeof t;
                        return null != t && ("object" == e || "function" == e)
                    }
                    function ta(t) {
                        return null != t && "object" == typeof t
                    }
                    var ea = we ? Ye(we) : function(t) {
                        return ta(t) && fo(t) == k
                    }
                    ;
                    function na(t) {
                        return "number" == typeof t || ta(t) && Ir(t) == I
                    }
                    function ra(t) {
                        if (!ta(t) || Ir(t) != S)
                            return !1;
                        var e = Gt(t);
                        if (null === e)
                            return !0;
                        var n = jt.call(e, "constructor") && e.constructor;
                        return "function" == typeof n && n instanceof n && zt.call(n) == Lt
                    }
                    var ia = _e ? Ye(_e) : function(t) {
                        return ta(t) && Ir(t) == A
                    }
                      , oa = me ? Ye(me) : function(t) {
                        return ta(t) && fo(t) == x
                    }
                    ;
                    function ua(t) {
                        return "string" == typeof t || !Bu(t) && ta(t) && Ir(t) == T
                    }
                    function aa(t) {
                        return "symbol" == typeof t || ta(t) && Ir(t) == R
                    }
                    var sa = ke ? Ye(ke) : function(t) {
                        return ta(t) && Ju(t.length) && !!ie[Ir(t)]
                    }
                      , ca = Bi(Mr)
                      , la = Bi((function(t, e) {
                        return t <= e
                    }
                    ));
                    function fa(t) {
                        if (!t)
                            return [];
                        if (Ku(t))
                            return ua(t) ? fn(t) : Ai(t);
                        if (Yt && t[Yt])
                            return function(t) {
                                for (var e, n = []; !(e = t.next()).done; )
                                    n.push(e.value);
                                return n
                            }(t[Yt]());
                        var e = fo(t);
                        return (e == k ? on : e == x ? sn : Ca)(t)
                    }
                    function ha(t) {
                        return t ? (t = va(t)) === l || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
                    }
                    function da(t) {
                        var e = ha(t)
                          , n = e % 1;
                        return e == e ? n ? e - n : e : 0
                    }
                    function pa(t) {
                        return t ? or(da(t), 0, d) : 0
                    }
                    function va(t) {
                        if ("number" == typeof t)
                            return t;
                        if (aa(t))
                            return h;
                        if ($u(t)) {
                            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                            t = $u(e) ? e + "" : e
                        }
                        if ("string" != typeof t)
                            return 0 === t ? t : +t;
                        t = Qe(t);
                        var n = pt.test(t);
                        return n || yt.test(t) ? se(t.slice(2), n ? 2 : 8) : dt.test(t) ? h : +t
                    }
                    function ya(t) {
                        return xi(t, Da(t))
                    }
                    function ga(t) {
                        return null == t ? "" : ui(t)
                    }
                    var ba = Ri((function(t, e) {
                        if (mo(e) || Ku(e))
                            xi(e, Pa(e), t);
                        else
                            for (var n in e)
                                jt.call(e, n) && $n(t, n, e[n])
                    }
                    ))
                      , wa = Ri((function(t, e) {
                        xi(e, Da(e), t)
                    }
                    ))
                      , _a = Ri((function(t, e, n, r) {
                        xi(e, Da(e), t, r)
                    }
                    ))
                      , ma = Ri((function(t, e, n, r) {
                        xi(e, Pa(e), t, r)
                    }
                    ))
                      , ka = $i(ir)
                      , Ia = Zr((function(t, e) {
                        t = St(t);
                        var n = -1
                          , r = e.length
                          , o = r > 2 ? e[2] : i;
                        for (o && go(e[0], e[1], o) && (r = 1); ++n < r; )
                            for (var u = e[n], a = Da(u), s = -1, c = a.length; ++s < c; ) {
                                var l = a[s]
                                  , f = t[l];
                                (f === i || Cu(f, Pt[l]) && !jt.call(t, l)) && (t[l] = u[l])
                            }
                        return t
                    }
                    ))
                      , Sa = Zr((function(t) {
                        return t.push(i, Xi),
                        Ie(ja, i, t)
                    }
                    ));
                    function Ea(t, e, n) {
                        var r = null == t ? i : mr(t, e);
                        return r === i ? n : r
                    }
                    function Aa(t, e) {
                        return null != t && ho(t, e, Ar)
                    }
                    var xa = Ui((function(t, e, n) {
                        null != e && "function" != typeof e.toString && (e = Ot.call(e)),
                        t[e] = n
                    }
                    ), $a(ns))
                      , Ta = Ui((function(t, e, n) {
                        null != e && "function" != typeof e.toString && (e = Ot.call(e)),
                        jt.call(t, e) ? t[e].push(n) : t[e] = [n]
                    }
                    ), oo)
                      , Ra = Zr(Tr);
                    function Pa(t) {
                        return Ku(t) ? Qn(t) : Wr(t)
                    }
                    function Da(t) {
                        return Ku(t) ? Qn(t, !0) : function(t) {
                            if (!$u(t))
                                return function(t) {
                                    var e = [];
                                    if (null != t)
                                        for (var n in St(t))
                                            e.push(n);
                                    return e
                                }(t);
                            var e = mo(t)
                              , n = [];
                            for (var r in t)
                                ("constructor" != r || !e && jt.call(t, r)) && n.push(r);
                            return n
                        }(t)
                    }
                    var za = Ri((function(t, e, n) {
                        Cr(t, e, n)
                    }
                    ))
                      , ja = Ri((function(t, e, n, r) {
                        Cr(t, e, n, r)
                    }
                    ))
                      , Wa = $i((function(t, e) {
                        var n = {};
                        if (null == t)
                            return n;
                        var r = !1;
                        e = De(e, (function(e) {
                            return e = yi(e, t),
                            r || (r = e.length > 1),
                            e
                        }
                        )),
                        xi(t, eo(t), n),
                        r && (n = ur(n, 7, Hi));
                        for (var i = e.length; i--; )
                            si(n, e[i]);
                        return n
                    }
                    ))
                      , Ma = $i((function(t, e) {
                        return null == t ? {} : function(t, e) {
                            return Nr(t, e, (function(e, n) {
                                return Aa(t, n)
                            }
                            ))
                        }(t, e)
                    }
                    ));
                    function Oa(t, e) {
                        if (null == t)
                            return {};
                        var n = De(eo(t), (function(t) {
                            return [t]
                        }
                        ));
                        return e = oo(e),
                        Nr(t, n, (function(t, n) {
                            return e(t, n[0])
                        }
                        ))
                    }
                    var La = Zi(Pa)
                      , Ua = Zi(Da);
                    function Ca(t) {
                        return null == t ? [] : Xe(t, Pa(t))
                    }
                    var Fa = ji((function(t, e, n) {
                        return e = e.toLowerCase(),
                        t + (n ? qa(e) : e)
                    }
                    ));
                    function qa(t) {
                        return Ya(ga(t).toLowerCase())
                    }
                    function Na(t) {
                        return (t = ga(t)) && t.replace(bt, tn).replace(Ht, "")
                    }
                    var Ba = ji((function(t, e, n) {
                        return t + (n ? "-" : "") + e.toLowerCase()
                    }
                    ))
                      , Ga = ji((function(t, e, n) {
                        return t + (n ? " " : "") + e.toLowerCase()
                    }
                    ))
                      , Ka = zi("toLowerCase")
                      , Va = ji((function(t, e, n) {
                        return t + (n ? "_" : "") + e.toLowerCase()
                    }
                    ))
                      , Za = ji((function(t, e, n) {
                        return t + (n ? " " : "") + Ya(e)
                    }
                    ))
                      , Qa = ji((function(t, e, n) {
                        return t + (n ? " " : "") + e.toUpperCase()
                    }
                    ))
                      , Ya = zi("toUpperCase");
                    function Xa(t, e, n) {
                        return t = ga(t),
                        (e = n ? i : e) === i ? function(t) {
                            return ee.test(t)
                        }(t) ? function(t) {
                            return t.match($t) || []
                        }(t) : function(t) {
                            return t.match(st) || []
                        }(t) : t.match(e) || []
                    }
                    var Ha = Zr((function(t, e) {
                        try {
                            return Ie(t, i, e)
                        } catch (t) {
                            return Yu(t) ? t : new mt(t)
                        }
                    }
                    ))
                      , Ja = $i((function(t, e) {
                        return Ee(e, (function(e) {
                            e = Oo(e),
                            rr(t, e, Tu(t[e], t))
                        }
                        )),
                        t
                    }
                    ));
                    function $a(t) {
                        return function() {
                            return t
                        }
                    }
                    var ts = Oi()
                      , es = Oi(!0);
                    function ns(t) {
                        return t
                    }
                    function rs(t) {
                        return jr("function" == typeof t ? t : ur(t, 1))
                    }
                    var is = Zr((function(t, e) {
                        return function(n) {
                            return Tr(n, t, e)
                        }
                    }
                    ))
                      , os = Zr((function(t, e) {
                        return function(n) {
                            return Tr(t, n, e)
                        }
                    }
                    ));
                    function us(t, e, n) {
                        var r = Pa(e)
                          , i = _r(e, r);
                        null != n || $u(e) && (i.length || !r.length) || (n = e,
                        e = t,
                        t = this,
                        i = _r(e, Pa(e)));
                        var o = !($u(n) && "chain"in n && !n.chain)
                          , u = Xu(t);
                        return Ee(i, (function(n) {
                            var r = e[n];
                            t[n] = r,
                            u && (t.prototype[n] = function() {
                                var e = this.__chain__;
                                if (o || e) {
                                    var n = t(this.__wrapped__);
                                    return (n.__actions__ = Ai(this.__actions__)).push({
                                        func: r,
                                        args: arguments,
                                        thisArg: t
                                    }),
                                    n.__chain__ = e,
                                    n
                                }
                                return r.apply(t, ze([this.value()], arguments))
                            }
                            )
                        }
                        )),
                        t
                    }
                    function as() {}
                    var ss = Fi(De)
                      , cs = Fi(xe)
                      , ls = Fi(Me);
                    function fs(t) {
                        return bo(t) ? Be(Oo(t)) : function(t) {
                            return function(e) {
                                return mr(e, t)
                            }
                        }(t)
                    }
                    var hs = Ni()
                      , ds = Ni(!0);
                    function ps() {
                        return []
                    }
                    function vs() {
                        return !1
                    }
                    var ys, gs = Ci((function(t, e) {
                        return t + e
                    }
                    ), 0), bs = Ki("ceil"), ws = Ci((function(t, e) {
                        return t / e
                    }
                    ), 1), _s = Ki("floor"), ms = Ci((function(t, e) {
                        return t * e
                    }
                    ), 1), ks = Ki("round"), Is = Ci((function(t, e) {
                        return t - e
                    }
                    ), 0);
                    return Un.after = function(t, e) {
                        if ("function" != typeof e)
                            throw new xt(o);
                        return t = da(t),
                        function() {
                            if (--t < 1)
                                return e.apply(this, arguments)
                        }
                    }
                    ,
                    Un.ary = Au,
                    Un.assign = ba,
                    Un.assignIn = wa,
                    Un.assignInWith = _a,
                    Un.assignWith = ma,
                    Un.at = ka,
                    Un.before = xu,
                    Un.bind = Tu,
                    Un.bindAll = Ja,
                    Un.bindKey = Ru,
                    Un.castArray = function() {
                        if (!arguments.length)
                            return [];
                        var t = arguments[0];
                        return Bu(t) ? t : [t]
                    }
                    ,
                    Un.chain = fu,
                    Un.chunk = function(t, e, n) {
                        e = (n ? go(t, e, n) : e === i) ? 1 : yn(da(e), 0);
                        var o = null == t ? 0 : t.length;
                        if (!o || e < 1)
                            return [];
                        for (var u = 0, a = 0, s = r(he(o / e)); u < o; )
                            s[a++] = ti(t, u, u += e);
                        return s
                    }
                    ,
                    Un.compact = function(t) {
                        for (var e = -1, n = null == t ? 0 : t.length, r = 0, i = []; ++e < n; ) {
                            var o = t[e];
                            o && (i[r++] = o)
                        }
                        return i
                    }
                    ,
                    Un.concat = function() {
                        var t = arguments.length;
                        if (!t)
                            return [];
                        for (var e = r(t - 1), n = arguments[0], i = t; i--; )
                            e[i - 1] = arguments[i];
                        return ze(Bu(n) ? Ai(n) : [n], vr(e, 1))
                    }
                    ,
                    Un.cond = function(t) {
                        var e = null == t ? 0 : t.length
                          , n = oo();
                        return t = e ? De(t, (function(t) {
                            if ("function" != typeof t[1])
                                throw new xt(o);
                            return [n(t[0]), t[1]]
                        }
                        )) : [],
                        Zr((function(n) {
                            for (var r = -1; ++r < e; ) {
                                var i = t[r];
                                if (Ie(i[0], this, n))
                                    return Ie(i[1], this, n)
                            }
                        }
                        ))
                    }
                    ,
                    Un.conforms = function(t) {
                        return function(t) {
                            var e = Pa(t);
                            return function(n) {
                                return ar(n, t, e)
                            }
                        }(ur(t, 1))
                    }
                    ,
                    Un.constant = $a,
                    Un.countBy = pu,
                    Un.create = function(t, e) {
                        var n = Cn(t);
                        return null == e ? n : nr(n, e)
                    }
                    ,
                    Un.curry = function t(e, n, r) {
                        var o = Qi(e, 8, i, i, i, i, i, n = r ? i : n);
                        return o.placeholder = t.placeholder,
                        o
                    }
                    ,
                    Un.curryRight = function t(e, n, r) {
                        var o = Qi(e, 16, i, i, i, i, i, n = r ? i : n);
                        return o.placeholder = t.placeholder,
                        o
                    }
                    ,
                    Un.debounce = Pu,
                    Un.defaults = Ia,
                    Un.defaultsDeep = Sa,
                    Un.defer = Du,
                    Un.delay = zu,
                    Un.difference = Co,
                    Un.differenceBy = Fo,
                    Un.differenceWith = qo,
                    Un.drop = function(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        return r ? ti(t, (e = n || e === i ? 1 : da(e)) < 0 ? 0 : e, r) : []
                    }
                    ,
                    Un.dropRight = function(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        return r ? ti(t, 0, (e = r - (e = n || e === i ? 1 : da(e))) < 0 ? 0 : e) : []
                    }
                    ,
                    Un.dropRightWhile = function(t, e) {
                        return t && t.length ? li(t, oo(e, 3), !0, !0) : []
                    }
                    ,
                    Un.dropWhile = function(t, e) {
                        return t && t.length ? li(t, oo(e, 3), !0) : []
                    }
                    ,
                    Un.fill = function(t, e, n, r) {
                        var o = null == t ? 0 : t.length;
                        return o ? (n && "number" != typeof n && go(t, e, n) && (n = 0,
                        r = o),
                        function(t, e, n, r) {
                            var o = t.length;
                            for ((n = da(n)) < 0 && (n = -n > o ? 0 : o + n),
                            (r = r === i || r > o ? o : da(r)) < 0 && (r += o),
                            r = n > r ? 0 : pa(r); n < r; )
                                t[n++] = e;
                            return t
                        }(t, e, n, r)) : []
                    }
                    ,
                    Un.filter = function(t, e) {
                        return (Bu(t) ? Te : pr)(t, oo(e, 3))
                    }
                    ,
                    Un.flatMap = function(t, e) {
                        return vr(ku(t, e), 1)
                    }
                    ,
                    Un.flatMapDeep = function(t, e) {
                        return vr(ku(t, e), l)
                    }
                    ,
                    Un.flatMapDepth = function(t, e, n) {
                        return n = n === i ? 1 : da(n),
                        vr(ku(t, e), n)
                    }
                    ,
                    Un.flatten = Go,
                    Un.flattenDeep = function(t) {
                        return null != t && t.length ? vr(t, l) : []
                    }
                    ,
                    Un.flattenDepth = function(t, e) {
                        return null != t && t.length ? vr(t, e = e === i ? 1 : da(e)) : []
                    }
                    ,
                    Un.flip = function(t) {
                        return Qi(t, 512)
                    }
                    ,
                    Un.flow = ts,
                    Un.flowRight = es,
                    Un.fromPairs = function(t) {
                        for (var e = -1, n = null == t ? 0 : t.length, r = {}; ++e < n; ) {
                            var i = t[e];
                            r[i[0]] = i[1]
                        }
                        return r
                    }
                    ,
                    Un.functions = function(t) {
                        return null == t ? [] : _r(t, Pa(t))
                    }
                    ,
                    Un.functionsIn = function(t) {
                        return null == t ? [] : _r(t, Da(t))
                    }
                    ,
                    Un.groupBy = wu,
                    Un.initial = function(t) {
                        return null != t && t.length ? ti(t, 0, -1) : []
                    }
                    ,
                    Un.intersection = Vo,
                    Un.intersectionBy = Zo,
                    Un.intersectionWith = Qo,
                    Un.invert = xa,
                    Un.invertBy = Ta,
                    Un.invokeMap = _u,
                    Un.iteratee = rs,
                    Un.keyBy = mu,
                    Un.keys = Pa,
                    Un.keysIn = Da,
                    Un.map = ku,
                    Un.mapKeys = function(t, e) {
                        var n = {};
                        return e = oo(e, 3),
                        br(t, (function(t, r, i) {
                            rr(n, e(t, r, i), t)
                        }
                        )),
                        n
                    }
                    ,
                    Un.mapValues = function(t, e) {
                        var n = {};
                        return e = oo(e, 3),
                        br(t, (function(t, r, i) {
                            rr(n, r, e(t, r, i))
                        }
                        )),
                        n
                    }
                    ,
                    Un.matches = function(t) {
                        return Lr(ur(t, 1))
                    }
                    ,
                    Un.matchesProperty = function(t, e) {
                        return Ur(t, ur(e, 1))
                    }
                    ,
                    Un.memoize = ju,
                    Un.merge = za,
                    Un.mergeWith = ja,
                    Un.method = is,
                    Un.methodOf = os,
                    Un.mixin = us,
                    Un.negate = Wu,
                    Un.nthArg = function(t) {
                        return t = da(t),
                        Zr((function(e) {
                            return Fr(e, t)
                        }
                        ))
                    }
                    ,
                    Un.omit = Wa,
                    Un.omitBy = function(t, e) {
                        return Oa(t, Wu(oo(e)))
                    }
                    ,
                    Un.once = function(t) {
                        return xu(2, t)
                    }
                    ,
                    Un.orderBy = function(t, e, n, r) {
                        return null == t ? [] : (Bu(e) || (e = null == e ? [] : [e]),
                        Bu(n = r ? i : n) || (n = null == n ? [] : [n]),
                        qr(t, e, n))
                    }
                    ,
                    Un.over = ss,
                    Un.overArgs = Mu,
                    Un.overEvery = cs,
                    Un.overSome = ls,
                    Un.partial = Ou,
                    Un.partialRight = Lu,
                    Un.partition = Iu,
                    Un.pick = Ma,
                    Un.pickBy = Oa,
                    Un.property = fs,
                    Un.propertyOf = function(t) {
                        return function(e) {
                            return null == t ? i : mr(t, e)
                        }
                    }
                    ,
                    Un.pull = Xo,
                    Un.pullAll = Ho,
                    Un.pullAllBy = function(t, e, n) {
                        return t && t.length && e && e.length ? Br(t, e, oo(n, 2)) : t
                    }
                    ,
                    Un.pullAllWith = function(t, e, n) {
                        return t && t.length && e && e.length ? Br(t, e, i, n) : t
                    }
                    ,
                    Un.pullAt = Jo,
                    Un.range = hs,
                    Un.rangeRight = ds,
                    Un.rearg = Uu,
                    Un.reject = function(t, e) {
                        return (Bu(t) ? Te : pr)(t, Wu(oo(e, 3)))
                    }
                    ,
                    Un.remove = function(t, e) {
                        var n = [];
                        if (!t || !t.length)
                            return n;
                        var r = -1
                          , i = []
                          , o = t.length;
                        for (e = oo(e, 3); ++r < o; ) {
                            var u = t[r];
                            e(u, r, t) && (n.push(u),
                            i.push(r))
                        }
                        return Gr(t, i),
                        n
                    }
                    ,
                    Un.rest = function(t, e) {
                        if ("function" != typeof t)
                            throw new xt(o);
                        return Zr(t, e = e === i ? e : da(e))
                    }
                    ,
                    Un.reverse = $o,
                    Un.sampleSize = function(t, e, n) {
                        return e = (n ? go(t, e, n) : e === i) ? 1 : da(e),
                        (Bu(t) ? Xn : Yr)(t, e)
                    }
                    ,
                    Un.set = function(t, e, n) {
                        return null == t ? t : Xr(t, e, n)
                    }
                    ,
                    Un.setWith = function(t, e, n, r) {
                        return r = "function" == typeof r ? r : i,
                        null == t ? t : Xr(t, e, n, r)
                    }
                    ,
                    Un.shuffle = function(t) {
                        return (Bu(t) ? Hn : $r)(t)
                    }
                    ,
                    Un.slice = function(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        return r ? (n && "number" != typeof n && go(t, e, n) ? (e = 0,
                        n = r) : (e = null == e ? 0 : da(e),
                        n = n === i ? r : da(n)),
                        ti(t, e, n)) : []
                    }
                    ,
                    Un.sortBy = Su,
                    Un.sortedUniq = function(t) {
                        return t && t.length ? ii(t) : []
                    }
                    ,
                    Un.sortedUniqBy = function(t, e) {
                        return t && t.length ? ii(t, oo(e, 2)) : []
                    }
                    ,
                    Un.split = function(t, e, n) {
                        return n && "number" != typeof n && go(t, e, n) && (e = n = i),
                        (n = n === i ? d : n >>> 0) ? (t = ga(t)) && ("string" == typeof e || null != e && !ia(e)) && !(e = ui(e)) && rn(t) ? bi(fn(t), 0, n) : t.split(e, n) : []
                    }
                    ,
                    Un.spread = function(t, e) {
                        if ("function" != typeof t)
                            throw new xt(o);
                        return e = null == e ? 0 : yn(da(e), 0),
                        Zr((function(n) {
                            var r = n[e]
                              , i = bi(n, 0, e);
                            return r && ze(i, r),
                            Ie(t, this, i)
                        }
                        ))
                    }
                    ,
                    Un.tail = function(t) {
                        var e = null == t ? 0 : t.length;
                        return e ? ti(t, 1, e) : []
                    }
                    ,
                    Un.take = function(t, e, n) {
                        return t && t.length ? ti(t, 0, (e = n || e === i ? 1 : da(e)) < 0 ? 0 : e) : []
                    }
                    ,
                    Un.takeRight = function(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        return r ? ti(t, (e = r - (e = n || e === i ? 1 : da(e))) < 0 ? 0 : e, r) : []
                    }
                    ,
                    Un.takeRightWhile = function(t, e) {
                        return t && t.length ? li(t, oo(e, 3), !1, !0) : []
                    }
                    ,
                    Un.takeWhile = function(t, e) {
                        return t && t.length ? li(t, oo(e, 3)) : []
                    }
                    ,
                    Un.tap = function(t, e) {
                        return e(t),
                        t
                    }
                    ,
                    Un.throttle = function(t, e, n) {
                        var r = !0
                          , i = !0;
                        if ("function" != typeof t)
                            throw new xt(o);
                        return $u(n) && (r = "leading"in n ? !!n.leading : r,
                        i = "trailing"in n ? !!n.trailing : i),
                        Pu(t, e, {
                            leading: r,
                            maxWait: e,
                            trailing: i
                        })
                    }
                    ,
                    Un.thru = hu,
                    Un.toArray = fa,
                    Un.toPairs = La,
                    Un.toPairsIn = Ua,
                    Un.toPath = function(t) {
                        return Bu(t) ? De(t, Oo) : aa(t) ? [t] : Ai(Mo(ga(t)))
                    }
                    ,
                    Un.toPlainObject = ya,
                    Un.transform = function(t, e, n) {
                        var r = Bu(t)
                          , i = r || Zu(t) || sa(t);
                        if (e = oo(e, 4),
                        null == n) {
                            var o = t && t.constructor;
                            n = i ? r ? new o : [] : $u(t) && Xu(o) ? Cn(Gt(t)) : {}
                        }
                        return (i ? Ee : br)(t, (function(t, r, i) {
                            return e(n, t, r, i)
                        }
                        )),
                        n
                    }
                    ,
                    Un.unary = function(t) {
                        return Au(t, 1)
                    }
                    ,
                    Un.union = tu,
                    Un.unionBy = eu,
                    Un.unionWith = nu,
                    Un.uniq = function(t) {
                        return t && t.length ? ai(t) : []
                    }
                    ,
                    Un.uniqBy = function(t, e) {
                        return t && t.length ? ai(t, oo(e, 2)) : []
                    }
                    ,
                    Un.uniqWith = function(t, e) {
                        return e = "function" == typeof e ? e : i,
                        t && t.length ? ai(t, i, e) : []
                    }
                    ,
                    Un.unset = function(t, e) {
                        return null == t || si(t, e)
                    }
                    ,
                    Un.unzip = ru,
                    Un.unzipWith = iu,
                    Un.update = function(t, e, n) {
                        return null == t ? t : ci(t, e, vi(n))
                    }
                    ,
                    Un.updateWith = function(t, e, n, r) {
                        return r = "function" == typeof r ? r : i,
                        null == t ? t : ci(t, e, vi(n), r)
                    }
                    ,
                    Un.values = Ca,
                    Un.valuesIn = function(t) {
                        return null == t ? [] : Xe(t, Da(t))
                    }
                    ,
                    Un.without = ou,
                    Un.words = Xa,
                    Un.wrap = function(t, e) {
                        return Ou(vi(e), t)
                    }
                    ,
                    Un.xor = uu,
                    Un.xorBy = au,
                    Un.xorWith = su,
                    Un.zip = cu,
                    Un.zipObject = function(t, e) {
                        return di(t || [], e || [], $n)
                    }
                    ,
                    Un.zipObjectDeep = function(t, e) {
                        return di(t || [], e || [], Xr)
                    }
                    ,
                    Un.zipWith = lu,
                    Un.entries = La,
                    Un.entriesIn = Ua,
                    Un.extend = wa,
                    Un.extendWith = _a,
                    us(Un, Un),
                    Un.add = gs,
                    Un.attempt = Ha,
                    Un.camelCase = Fa,
                    Un.capitalize = qa,
                    Un.ceil = bs,
                    Un.clamp = function(t, e, n) {
                        return n === i && (n = e,
                        e = i),
                        n !== i && (n = (n = va(n)) == n ? n : 0),
                        e !== i && (e = (e = va(e)) == e ? e : 0),
                        or(va(t), e, n)
                    }
                    ,
                    Un.clone = function(t) {
                        return ur(t, 4)
                    }
                    ,
                    Un.cloneDeep = function(t) {
                        return ur(t, 5)
                    }
                    ,
                    Un.cloneDeepWith = function(t, e) {
                        return ur(t, 5, e = "function" == typeof e ? e : i)
                    }
                    ,
                    Un.cloneWith = function(t, e) {
                        return ur(t, 4, e = "function" == typeof e ? e : i)
                    }
                    ,
                    Un.conformsTo = function(t, e) {
                        return null == e || ar(t, e, Pa(e))
                    }
                    ,
                    Un.deburr = Na,
                    Un.defaultTo = function(t, e) {
                        return null == t || t != t ? e : t
                    }
                    ,
                    Un.divide = ws,
                    Un.endsWith = function(t, e, n) {
                        t = ga(t),
                        e = ui(e);
                        var r = t.length
                          , o = n = n === i ? r : or(da(n), 0, r);
                        return (n -= e.length) >= 0 && t.slice(n, o) == e
                    }
                    ,
                    Un.eq = Cu,
                    Un.escape = function(t) {
                        return (t = ga(t)) && Q.test(t) ? t.replace(V, en) : t
                    }
                    ,
                    Un.escapeRegExp = function(t) {
                        return (t = ga(t)) && nt.test(t) ? t.replace(et, "\\$&") : t
                    }
                    ,
                    Un.every = function(t, e, n) {
                        var r = Bu(t) ? xe : hr;
                        return n && go(t, e, n) && (e = i),
                        r(t, oo(e, 3))
                    }
                    ,
                    Un.find = vu,
                    Un.findIndex = No,
                    Un.findKey = function(t, e) {
                        return Le(t, oo(e, 3), br)
                    }
                    ,
                    Un.findLast = yu,
                    Un.findLastIndex = Bo,
                    Un.findLastKey = function(t, e) {
                        return Le(t, oo(e, 3), wr)
                    }
                    ,
                    Un.floor = _s,
                    Un.forEach = gu,
                    Un.forEachRight = bu,
                    Un.forIn = function(t, e) {
                        return null == t ? t : yr(t, oo(e, 3), Da)
                    }
                    ,
                    Un.forInRight = function(t, e) {
                        return null == t ? t : gr(t, oo(e, 3), Da)
                    }
                    ,
                    Un.forOwn = function(t, e) {
                        return t && br(t, oo(e, 3))
                    }
                    ,
                    Un.forOwnRight = function(t, e) {
                        return t && wr(t, oo(e, 3))
                    }
                    ,
                    Un.get = Ea,
                    Un.gt = Fu,
                    Un.gte = qu,
                    Un.has = function(t, e) {
                        return null != t && ho(t, e, Er)
                    }
                    ,
                    Un.hasIn = Aa,
                    Un.head = Ko,
                    Un.identity = ns,
                    Un.includes = function(t, e, n, r) {
                        t = Ku(t) ? t : Ca(t),
                        n = n && !r ? da(n) : 0;
                        var i = t.length;
                        return n < 0 && (n = yn(i + n, 0)),
                        ua(t) ? n <= i && t.indexOf(e, n) > -1 : !!i && Ce(t, e, n) > -1
                    }
                    ,
                    Un.indexOf = function(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        if (!r)
                            return -1;
                        var i = null == n ? 0 : da(n);
                        return i < 0 && (i = yn(r + i, 0)),
                        Ce(t, e, i)
                    }
                    ,
                    Un.inRange = function(t, e, n) {
                        return e = ha(e),
                        n === i ? (n = e,
                        e = 0) : n = ha(n),
                        function(t, e, n) {
                            return t >= gn(e, n) && t < yn(e, n)
                        }(t = va(t), e, n)
                    }
                    ,
                    Un.invoke = Ra,
                    Un.isArguments = Nu,
                    Un.isArray = Bu,
                    Un.isArrayBuffer = Gu,
                    Un.isArrayLike = Ku,
                    Un.isArrayLikeObject = Vu,
                    Un.isBoolean = function(t) {
                        return !0 === t || !1 === t || ta(t) && Ir(t) == g
                    }
                    ,
                    Un.isBuffer = Zu,
                    Un.isDate = Qu,
                    Un.isElement = function(t) {
                        return ta(t) && 1 === t.nodeType && !ra(t)
                    }
                    ,
                    Un.isEmpty = function(t) {
                        if (null == t)
                            return !0;
                        if (Ku(t) && (Bu(t) || "string" == typeof t || "function" == typeof t.splice || Zu(t) || sa(t) || Nu(t)))
                            return !t.length;
                        var e = fo(t);
                        if (e == k || e == x)
                            return !t.size;
                        if (mo(t))
                            return !Wr(t).length;
                        for (var n in t)
                            if (jt.call(t, n))
                                return !1;
                        return !0
                    }
                    ,
                    Un.isEqual = function(t, e) {
                        return Pr(t, e)
                    }
                    ,
                    Un.isEqualWith = function(t, e, n) {
                        var r = (n = "function" == typeof n ? n : i) ? n(t, e) : i;
                        return r === i ? Pr(t, e, i, n) : !!r
                    }
                    ,
                    Un.isError = Yu,
                    Un.isFinite = function(t) {
                        return "number" == typeof t && Oe(t)
                    }
                    ,
                    Un.isFunction = Xu,
                    Un.isInteger = Hu,
                    Un.isLength = Ju,
                    Un.isMap = ea,
                    Un.isMatch = function(t, e) {
                        return t === e || Dr(t, e, ao(e))
                    }
                    ,
                    Un.isMatchWith = function(t, e, n) {
                        return n = "function" == typeof n ? n : i,
                        Dr(t, e, ao(e), n)
                    }
                    ,
                    Un.isNaN = function(t) {
                        return na(t) && t != +t
                    }
                    ,
                    Un.isNative = function(t) {
                        if (_o(t))
                            throw new mt("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                        return zr(t)
                    }
                    ,
                    Un.isNil = function(t) {
                        return null == t
                    }
                    ,
                    Un.isNull = function(t) {
                        return null === t
                    }
                    ,
                    Un.isNumber = na,
                    Un.isObject = $u,
                    Un.isObjectLike = ta,
                    Un.isPlainObject = ra,
                    Un.isRegExp = ia,
                    Un.isSafeInteger = function(t) {
                        return Hu(t) && t >= -9007199254740991 && t <= f
                    }
                    ,
                    Un.isSet = oa,
                    Un.isString = ua,
                    Un.isSymbol = aa,
                    Un.isTypedArray = sa,
                    Un.isUndefined = function(t) {
                        return t === i
                    }
                    ,
                    Un.isWeakMap = function(t) {
                        return ta(t) && fo(t) == P
                    }
                    ,
                    Un.isWeakSet = function(t) {
                        return ta(t) && "[object WeakSet]" == Ir(t)
                    }
                    ,
                    Un.join = function(t, e) {
                        return null == t ? "" : Ge.call(t, e)
                    }
                    ,
                    Un.kebabCase = Ba,
                    Un.last = Yo,
                    Un.lastIndexOf = function(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        if (!r)
                            return -1;
                        var o = r;
                        return n !== i && (o = (o = da(n)) < 0 ? yn(r + o, 0) : gn(o, r - 1)),
                        e == e ? function(t, e, n) {
                            for (var r = n + 1; r--; )
                                if (t[r] === e)
                                    return r;
                            return r
                        }(t, e, o) : Ue(t, qe, o, !0)
                    }
                    ,
                    Un.lowerCase = Ga,
                    Un.lowerFirst = Ka,
                    Un.lt = ca,
                    Un.lte = la,
                    Un.max = function(t) {
                        return t && t.length ? dr(t, ns, Sr) : i
                    }
                    ,
                    Un.maxBy = function(t, e) {
                        return t && t.length ? dr(t, oo(e, 2), Sr) : i
                    }
                    ,
                    Un.mean = function(t) {
                        return Ne(t, ns)
                    }
                    ,
                    Un.meanBy = function(t, e) {
                        return Ne(t, oo(e, 2))
                    }
                    ,
                    Un.min = function(t) {
                        return t && t.length ? dr(t, ns, Mr) : i
                    }
                    ,
                    Un.minBy = function(t, e) {
                        return t && t.length ? dr(t, oo(e, 2), Mr) : i
                    }
                    ,
                    Un.stubArray = ps,
                    Un.stubFalse = vs,
                    Un.stubObject = function() {
                        return {}
                    }
                    ,
                    Un.stubString = function() {
                        return ""
                    }
                    ,
                    Un.stubTrue = function() {
                        return !0
                    }
                    ,
                    Un.multiply = ms,
                    Un.nth = function(t, e) {
                        return t && t.length ? Fr(t, da(e)) : i
                    }
                    ,
                    Un.noConflict = function() {
                        return fe._ === this && (fe._ = Ut),
                        this
                    }
                    ,
                    Un.noop = as,
                    Un.now = Eu,
                    Un.pad = function(t, e, n) {
                        t = ga(t);
                        var r = (e = da(e)) ? ln(t) : 0;
                        if (!e || r >= e)
                            return t;
                        var i = (e - r) / 2;
                        return qi(de(i), n) + t + qi(he(i), n)
                    }
                    ,
                    Un.padEnd = function(t, e, n) {
                        t = ga(t);
                        var r = (e = da(e)) ? ln(t) : 0;
                        return e && r < e ? t + qi(e - r, n) : t
                    }
                    ,
                    Un.padStart = function(t, e, n) {
                        t = ga(t);
                        var r = (e = da(e)) ? ln(t) : 0;
                        return e && r < e ? qi(e - r, n) + t : t
                    }
                    ,
                    Un.parseInt = function(t, e, n) {
                        return n || null == e ? e = 0 : e && (e = +e),
                        wn(ga(t).replace(rt, ""), e || 0)
                    }
                    ,
                    Un.random = function(t, e, n) {
                        if (n && "boolean" != typeof n && go(t, e, n) && (e = n = i),
                        n === i && ("boolean" == typeof e ? (n = e,
                        e = i) : "boolean" == typeof t && (n = t,
                        t = i)),
                        t === i && e === i ? (t = 0,
                        e = 1) : (t = ha(t),
                        e === i ? (e = t,
                        t = 0) : e = ha(e)),
                        t > e) {
                            var r = t;
                            t = e,
                            e = r
                        }
                        if (n || t % 1 || e % 1) {
                            var o = _n();
                            return gn(t + o * (e - t + ae("1e-" + ((o + "").length - 1))), e)
                        }
                        return Kr(t, e)
                    }
                    ,
                    Un.reduce = function(t, e, n) {
                        var r = Bu(t) ? je : Ke
                          , i = arguments.length < 3;
                        return r(t, oo(e, 4), n, i, lr)
                    }
                    ,
                    Un.reduceRight = function(t, e, n) {
                        var r = Bu(t) ? We : Ke
                          , i = arguments.length < 3;
                        return r(t, oo(e, 4), n, i, fr)
                    }
                    ,
                    Un.repeat = function(t, e, n) {
                        return e = (n ? go(t, e, n) : e === i) ? 1 : da(e),
                        Vr(ga(t), e)
                    }
                    ,
                    Un.replace = function() {
                        var t = arguments
                          , e = ga(t[0]);
                        return t.length < 3 ? e : e.replace(t[1], t[2])
                    }
                    ,
                    Un.result = function(t, e, n) {
                        var r = -1
                          , o = (e = yi(e, t)).length;
                        for (o || (o = 1,
                        t = i); ++r < o; ) {
                            var u = null == t ? i : t[Oo(e[r])];
                            u === i && (r = o,
                            u = n),
                            t = Xu(u) ? u.call(t) : u
                        }
                        return t
                    }
                    ,
                    Un.round = ks,
                    Un.runInContext = t,
                    Un.sample = function(t) {
                        return (Bu(t) ? Yn : Qr)(t)
                    }
                    ,
                    Un.size = function(t) {
                        if (null == t)
                            return 0;
                        if (Ku(t))
                            return ua(t) ? ln(t) : t.length;
                        var e = fo(t);
                        return e == k || e == x ? t.size : Wr(t).length
                    }
                    ,
                    Un.snakeCase = Va,
                    Un.some = function(t, e, n) {
                        var r = Bu(t) ? Me : ei;
                        return n && go(t, e, n) && (e = i),
                        r(t, oo(e, 3))
                    }
                    ,
                    Un.sortedIndex = function(t, e) {
                        return ni(t, e)
                    }
                    ,
                    Un.sortedIndexBy = function(t, e, n) {
                        return ri(t, e, oo(n, 2))
                    }
                    ,
                    Un.sortedIndexOf = function(t, e) {
                        var n = null == t ? 0 : t.length;
                        if (n) {
                            var r = ni(t, e);
                            if (r < n && Cu(t[r], e))
                                return r
                        }
                        return -1
                    }
                    ,
                    Un.sortedLastIndex = function(t, e) {
                        return ni(t, e, !0)
                    }
                    ,
                    Un.sortedLastIndexBy = function(t, e, n) {
                        return ri(t, e, oo(n, 2), !0)
                    }
                    ,
                    Un.sortedLastIndexOf = function(t, e) {
                        if (null != t && t.length) {
                            var n = ni(t, e, !0) - 1;
                            if (Cu(t[n], e))
                                return n
                        }
                        return -1
                    }
                    ,
                    Un.startCase = Za,
                    Un.startsWith = function(t, e, n) {
                        return t = ga(t),
                        n = null == n ? 0 : or(da(n), 0, t.length),
                        e = ui(e),
                        t.slice(n, n + e.length) == e
                    }
                    ,
                    Un.subtract = Is,
                    Un.sum = function(t) {
                        return t && t.length ? Ve(t, ns) : 0
                    }
                    ,
                    Un.sumBy = function(t, e) {
                        return t && t.length ? Ve(t, oo(e, 2)) : 0
                    }
                    ,
                    Un.template = function(t, e, n) {
                        var r = Un.templateSettings;
                        n && go(t, e, n) && (e = i),
                        t = ga(t),
                        e = _a({}, e, r, Yi);
                        var o, u, a = _a({}, e.imports, r.imports, Yi), s = Pa(a), c = Xe(a, s), l = 0, f = e.interpolate || wt, h = "__p += '", d = Et((e.escape || wt).source + "|" + f.source + "|" + (f === H ? ft : wt).source + "|" + (e.evaluate || wt).source + "|$", "g"), p = "//# sourceURL=" + (jt.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++re + "]") + "\n";
                        t.replace(d, (function(e, n, r, i, a, s) {
                            return r || (r = i),
                            h += t.slice(l, s).replace(_t, nn),
                            n && (o = !0,
                            h += "' +\n__e(" + n + ") +\n'"),
                            a && (u = !0,
                            h += "';\n" + a + ";\n__p += '"),
                            r && (h += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                            l = s + e.length,
                            e
                        }
                        )),
                        h += "';\n";
                        var v = jt.call(e, "variable") && e.variable;
                        if (v) {
                            if (ct.test(v))
                                throw new mt("Invalid `variable` option passed into `_.template`")
                        } else
                            h = "with (obj) {\n" + h + "\n}\n";
                        h = (u ? h.replace(N, "") : h).replace(B, "$1").replace(G, "$1;"),
                        h = "function(" + (v || "obj") + ") {\n" + (v ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (u ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + h + "return __p\n}";
                        var y = Ha((function() {
                            return kt(s, p + "return " + h).apply(i, c)
                        }
                        ));
                        if (y.source = h,
                        Yu(y))
                            throw y;
                        return y
                    }
                    ,
                    Un.times = function(t, e) {
                        if ((t = da(t)) < 1 || t > f)
                            return [];
                        var n = d
                          , r = gn(t, d);
                        e = oo(e),
                        t -= d;
                        for (var i = Ze(r, e); ++n < t; )
                            e(n);
                        return i
                    }
                    ,
                    Un.toFinite = ha,
                    Un.toInteger = da,
                    Un.toLength = pa,
                    Un.toLower = function(t) {
                        return ga(t).toLowerCase()
                    }
                    ,
                    Un.toNumber = va,
                    Un.toSafeInteger = function(t) {
                        return t ? or(da(t), -9007199254740991, f) : 0 === t ? t : 0
                    }
                    ,
                    Un.toString = ga,
                    Un.toUpper = function(t) {
                        return ga(t).toUpperCase()
                    }
                    ,
                    Un.trim = function(t, e, n) {
                        if ((t = ga(t)) && (n || e === i))
                            return Qe(t);
                        if (!t || !(e = ui(e)))
                            return t;
                        var r = fn(t)
                          , o = fn(e);
                        return bi(r, Je(r, o), $e(r, o) + 1).join("")
                    }
                    ,
                    Un.trimEnd = function(t, e, n) {
                        if ((t = ga(t)) && (n || e === i))
                            return t.slice(0, hn(t) + 1);
                        if (!t || !(e = ui(e)))
                            return t;
                        var r = fn(t);
                        return bi(r, 0, $e(r, fn(e)) + 1).join("")
                    }
                    ,
                    Un.trimStart = function(t, e, n) {
                        if ((t = ga(t)) && (n || e === i))
                            return t.replace(rt, "");
                        if (!t || !(e = ui(e)))
                            return t;
                        var r = fn(t);
                        return bi(r, Je(r, fn(e))).join("")
                    }
                    ,
                    Un.truncate = function(t, e) {
                        var n = 30
                          , r = "...";
                        if ($u(e)) {
                            var o = "separator"in e ? e.separator : o;
                            n = "length"in e ? da(e.length) : n,
                            r = "omission"in e ? ui(e.omission) : r
                        }
                        var u = (t = ga(t)).length;
                        if (rn(t)) {
                            var a = fn(t);
                            u = a.length
                        }
                        if (n >= u)
                            return t;
                        var s = n - ln(r);
                        if (s < 1)
                            return r;
                        var c = a ? bi(a, 0, s).join("") : t.slice(0, s);
                        if (o === i)
                            return c + r;
                        if (a && (s += c.length - s),
                        ia(o)) {
                            if (t.slice(s).search(o)) {
                                var l, f = c;
                                for (o.global || (o = Et(o.source, ga(ht.exec(o)) + "g")),
                                o.lastIndex = 0; l = o.exec(f); )
                                    var h = l.index;
                                c = c.slice(0, h === i ? s : h)
                            }
                        } else if (t.indexOf(ui(o), s) != s) {
                            var d = c.lastIndexOf(o);
                            d > -1 && (c = c.slice(0, d))
                        }
                        return c + r
                    }
                    ,
                    Un.unescape = function(t) {
                        return (t = ga(t)) && Z.test(t) ? t.replace(K, dn) : t
                    }
                    ,
                    Un.uniqueId = function(t) {
                        var e = ++Wt;
                        return ga(t) + e
                    }
                    ,
                    Un.upperCase = Qa,
                    Un.upperFirst = Ya,
                    Un.each = gu,
                    Un.eachRight = bu,
                    Un.first = Ko,
                    us(Un, (ys = {},
                    br(Un, (function(t, e) {
                        jt.call(Un.prototype, e) || (ys[e] = t)
                    }
                    )),
                    ys), {
                        chain: !1
                    }),
                    Un.VERSION = "4.17.21",
                    Ee(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(t) {
                        Un[t].placeholder = Un
                    }
                    )),
                    Ee(["drop", "take"], (function(t, e) {
                        Nn.prototype[t] = function(n) {
                            n = n === i ? 1 : yn(da(n), 0);
                            var r = this.__filtered__ && !e ? new Nn(this) : this.clone();
                            return r.__filtered__ ? r.__takeCount__ = gn(n, r.__takeCount__) : r.__views__.push({
                                size: gn(n, d),
                                type: t + (r.__dir__ < 0 ? "Right" : "")
                            }),
                            r
                        }
                        ,
                        Nn.prototype[t + "Right"] = function(e) {
                            return this.reverse()[t](e).reverse()
                        }
                    }
                    )),
                    Ee(["filter", "map", "takeWhile"], (function(t, e) {
                        var n = e + 1
                          , r = 1 == n || 3 == n;
                        Nn.prototype[t] = function(t) {
                            var e = this.clone();
                            return e.__iteratees__.push({
                                iteratee: oo(t, 3),
                                type: n
                            }),
                            e.__filtered__ = e.__filtered__ || r,
                            e
                        }
                    }
                    )),
                    Ee(["head", "last"], (function(t, e) {
                        var n = "take" + (e ? "Right" : "");
                        Nn.prototype[t] = function() {
                            return this[n](1).value()[0]
                        }
                    }
                    )),
                    Ee(["initial", "tail"], (function(t, e) {
                        var n = "drop" + (e ? "" : "Right");
                        Nn.prototype[t] = function() {
                            return this.__filtered__ ? new Nn(this) : this[n](1)
                        }
                    }
                    )),
                    Nn.prototype.compact = function() {
                        return this.filter(ns)
                    }
                    ,
                    Nn.prototype.find = function(t) {
                        return this.filter(t).head()
                    }
                    ,
                    Nn.prototype.findLast = function(t) {
                        return this.reverse().find(t)
                    }
                    ,
                    Nn.prototype.invokeMap = Zr((function(t, e) {
                        return "function" == typeof t ? new Nn(this) : this.map((function(n) {
                            return Tr(n, t, e)
                        }
                        ))
                    }
                    )),
                    Nn.prototype.reject = function(t) {
                        return this.filter(Wu(oo(t)))
                    }
                    ,
                    Nn.prototype.slice = function(t, e) {
                        t = da(t);
                        var n = this;
                        return n.__filtered__ && (t > 0 || e < 0) ? new Nn(n) : (t < 0 ? n = n.takeRight(-t) : t && (n = n.drop(t)),
                        e !== i && (n = (e = da(e)) < 0 ? n.dropRight(-e) : n.take(e - t)),
                        n)
                    }
                    ,
                    Nn.prototype.takeRightWhile = function(t) {
                        return this.reverse().takeWhile(t).reverse()
                    }
                    ,
                    Nn.prototype.toArray = function() {
                        return this.take(d)
                    }
                    ,
                    br(Nn.prototype, (function(t, e) {
                        var n = /^(?:filter|find|map|reject)|While$/.test(e)
                          , r = /^(?:head|last)$/.test(e)
                          , o = Un[r ? "take" + ("last" == e ? "Right" : "") : e]
                          , u = r || /^find/.test(e);
                        o && (Un.prototype[e] = function() {
                            var e = this.__wrapped__
                              , a = r ? [1] : arguments
                              , s = e instanceof Nn
                              , c = a[0]
                              , l = s || Bu(e)
                              , f = function(t) {
                                var e = o.apply(Un, ze([t], a));
                                return r && h ? e[0] : e
                            };
                            l && n && "function" == typeof c && 1 != c.length && (s = l = !1);
                            var h = this.__chain__
                              , d = !!this.__actions__.length
                              , p = u && !h
                              , v = s && !d;
                            if (!u && l) {
                                e = v ? e : new Nn(this);
                                var y = t.apply(e, a);
                                return y.__actions__.push({
                                    func: hu,
                                    args: [f],
                                    thisArg: i
                                }),
                                new qn(y,h)
                            }
                            return p && v ? t.apply(this, a) : (y = this.thru(f),
                            p ? r ? y.value()[0] : y.value() : y)
                        }
                        )
                    }
                    )),
                    Ee(["pop", "push", "shift", "sort", "splice", "unshift"], (function(t) {
                        var e = Tt[t]
                          , n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru"
                          , r = /^(?:pop|shift)$/.test(t);
                        Un.prototype[t] = function() {
                            var t = arguments;
                            if (r && !this.__chain__) {
                                var i = this.value();
                                return e.apply(Bu(i) ? i : [], t)
                            }
                            return this[n]((function(n) {
                                return e.apply(Bu(n) ? n : [], t)
                            }
                            ))
                        }
                    }
                    )),
                    br(Nn.prototype, (function(t, e) {
                        var n = Un[e];
                        if (n) {
                            var r = n.name + "";
                            jt.call(Rn, r) || (Rn[r] = []),
                            Rn[r].push({
                                name: e,
                                func: n
                            })
                        }
                    }
                    )),
                    Rn[Li(i, 2).name] = [{
                        name: "wrapper",
                        func: i
                    }],
                    Nn.prototype.clone = function() {
                        var t = new Nn(this.__wrapped__);
                        return t.__actions__ = Ai(this.__actions__),
                        t.__dir__ = this.__dir__,
                        t.__filtered__ = this.__filtered__,
                        t.__iteratees__ = Ai(this.__iteratees__),
                        t.__takeCount__ = this.__takeCount__,
                        t.__views__ = Ai(this.__views__),
                        t
                    }
                    ,
                    Nn.prototype.reverse = function() {
                        if (this.__filtered__) {
                            var t = new Nn(this);
                            t.__dir__ = -1,
                            t.__filtered__ = !0
                        } else
                            (t = this.clone()).__dir__ *= -1;
                        return t
                    }
                    ,
                    Nn.prototype.value = function() {
                        var t = this.__wrapped__.value()
                          , e = this.__dir__
                          , n = Bu(t)
                          , r = e < 0
                          , i = n ? t.length : 0
                          , o = function(t, e, n) {
                            for (var r = -1, i = n.length; ++r < i; ) {
                                var o = n[r]
                                  , u = o.size;
                                switch (o.type) {
                                case "drop":
                                    t += u;
                                    break;
                                case "dropRight":
                                    e -= u;
                                    break;
                                case "take":
                                    e = gn(e, t + u);
                                    break;
                                case "takeRight":
                                    t = yn(t, e - u)
                                }
                            }
                            return {
                                start: t,
                                end: e
                            }
                        }(0, i, this.__views__)
                          , u = o.start
                          , a = o.end
                          , s = a - u
                          , c = r ? a : u - 1
                          , l = this.__iteratees__
                          , f = l.length
                          , h = 0
                          , d = gn(s, this.__takeCount__);
                        if (!n || !r && i == s && d == s)
                            return fi(t, this.__actions__);
                        var p = [];
                        t: for (; s-- && h < d; ) {
                            for (var v = -1, y = t[c += e]; ++v < f; ) {
                                var g = l[v]
                                  , b = g.iteratee
                                  , w = g.type
                                  , _ = b(y);
                                if (2 == w)
                                    y = _;
                                else if (!_) {
                                    if (1 == w)
                                        continue t;
                                    break t
                                }
                            }
                            p[h++] = y
                        }
                        return p
                    }
                    ,
                    Un.prototype.at = du,
                    Un.prototype.chain = function() {
                        return fu(this)
                    }
                    ,
                    Un.prototype.commit = function() {
                        return new qn(this.value(),this.__chain__)
                    }
                    ,
                    Un.prototype.next = function() {
                        this.__values__ === i && (this.__values__ = fa(this.value()));
                        var t = this.__index__ >= this.__values__.length;
                        return {
                            done: t,
                            value: t ? i : this.__values__[this.__index__++]
                        }
                    }
                    ,
                    Un.prototype.plant = function(t) {
                        for (var e, n = this; n instanceof Fn; ) {
                            var r = Uo(n);
                            r.__index__ = 0,
                            r.__values__ = i,
                            e ? o.__wrapped__ = r : e = r;
                            var o = r;
                            n = n.__wrapped__
                        }
                        return o.__wrapped__ = t,
                        e
                    }
                    ,
                    Un.prototype.reverse = function() {
                        var t = this.__wrapped__;
                        if (t instanceof Nn) {
                            var e = t;
                            return this.__actions__.length && (e = new Nn(this)),
                            (e = e.reverse()).__actions__.push({
                                func: hu,
                                args: [$o],
                                thisArg: i
                            }),
                            new qn(e,this.__chain__)
                        }
                        return this.thru($o)
                    }
                    ,
                    Un.prototype.toJSON = Un.prototype.valueOf = Un.prototype.value = function() {
                        return fi(this.__wrapped__, this.__actions__)
                    }
                    ,
                    Un.prototype.first = Un.prototype.head,
                    Yt && (Un.prototype[Yt] = function() {
                        return this
                    }
                    ),
                    Un
                }();
                fe._ = pn,
                (r = function() {
                    return pn
                }
                .call(e, n, e, t)) === i || (t.exports = r)
            }
            .call(this)
        },
        236: function(t, e, n) {
            "use strict";
            var r = this && this.__awaiter || function(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function u(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function a(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(u, a)
                    }
                    s((r = r.apply(t, e || [])).next())
                }
                ))
            }
              , i = this && this.__generator || function(t, e) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; u; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [2 & o[0], i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(),
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2],
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(),
                                        u.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
              , o = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var u = o(n(71))
              , a = n(823)
              , s = {
                adFinished: function() {},
                adError: function() {},
                adStarted: function() {}
            }
              , c = function() {
                function t(t) {
                    this.sdk = t,
                    this.adCallbacks = s,
                    this.requestInProgress = !1,
                    this.adblockDetectionResolvers = []
                }
                return t.prototype.requestAd = function(t, e) {
                    return r(this, void 0, void 0, (function() {
                        return i(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return u.default.log("Requesting " + t + " ad"),
                                [4, this.sdk.ensureInit()];
                            case 1:
                                return n.sent(),
                                this.adCallbacks = {
                                    adFinished: (null == e ? void 0 : e.adFinished) || s.adFinished,
                                    adError: (null == e ? void 0 : e.adError) || (null == e ? void 0 : e.adFinished) || s.adFinished,
                                    adStarted: (null == e ? void 0 : e.adStarted) || s.adStarted
                                },
                                this.requestInProgress ? (u.default.log("Ad already requested"),
                                [2, (0,
                                a.wrapUserFn)(this.adCallbacks.adError)("An ad request is already in progress")]) : (this.requestInProgress = !0,
                                u.default.log("Requesting Ad to GF"),
                                this.sdk.postMessage("requestAd", {
                                    adType: t
                                }),
                                [2])
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.hasAdblock = function(t) {
                    var e = this;
                    return (0,
                    a.callbackWrapper)((function() {
                        return void 0 !== e.adblockDetectionResult ? Promise.resolve(e.adblockDetectionResult) : new Promise((function(t) {
                            e.adblockDetectionResolvers.push(t)
                        }
                        ))
                    }
                    ), t)
                }
                ,
                t.prototype.handleEvent = function(t) {
                    var e = t.data;
                    switch (e.type) {
                    case "adblockDetectionExecuted":
                        return this.handleAdBlockDetectionExecutedEvent(e);
                    case "adError":
                        return this.requestInProgress = !1,
                        (0,
                        a.wrapUserFn)(this.adCallbacks.adError)(e.error);
                    case "adFinished":
                        return this.requestInProgress = !1,
                        (0,
                        a.wrapUserFn)(this.adCallbacks.adFinished)();
                    case "adStarted":
                        return (0,
                        a.wrapUserFn)(this.adCallbacks.adStarted)()
                    }
                }
                ,
                t.prototype.handleAdBlockDetectionExecutedEvent = function(t) {
                    var e = !!t.hasAdblock;
                    this.adblockDetectionResult = e,
                    this.adblockDetectionResolvers.forEach((function(t) {
                        return t(e)
                    }
                    )),
                    this.adblockDetectionResolvers = []
                }
                ,
                t
            }();
            e.default = c
        },
        683: function(t, e, n) {
            "use strict";
            var r = this && this.__awaiter || function(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function u(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function a(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(u, a)
                    }
                    s((r = r.apply(t, e || [])).next())
                }
                ))
            }
              , i = this && this.__generator || function(t, e) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; u; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [2 & o[0], i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(),
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2],
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(),
                                        u.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
              , o = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var u = n(81)
              , a = n(823)
              , s = o(n(71))
              , c = n(414)
              , l = function() {
                function t(t) {
                    this.sdk = t,
                    this.disableBannerCheck = !1,
                    this.useTestAds = !1,
                    this.bannerQueue = {},
                    this.overlayBanners = {}
                }
                return t.prototype.requestBanner = function(t, e) {
                    var n = this;
                    return (0,
                    a.callbackWrapper)((function() {
                        return r(n, void 0, void 0, (function() {
                            var e, n = this;
                            return i(this, (function(r) {
                                switch (r.label) {
                                case 0:
                                    return s.default.log("Requesting banner", t),
                                    [4, this.sdk.ensureInit(!0)];
                                case 1:
                                    return r.sent(),
                                    [4, (0,
                                    u.getBannerContainer)(t.id, !this.disableBannerCheck)];
                                case 2:
                                    return e = r.sent(),
                                    s.default.log("Requesting banner to GF", t),
                                    [2, new Promise((function(r, i) {
                                        n.bannerQueue[e.id] = {
                                            banner: t,
                                            resolve: r,
                                            reject: i
                                        },
                                        n.sdk.postMessage("requestBanner", [{
                                            containerId: e.id,
                                            size: (0,
                                            u.getBannerSizeAsText)(t)
                                        }])
                                    }
                                    ))]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ), e)
                }
                ,
                t.prototype.requestResponsiveBanner = function(t, e) {
                    var n = this;
                    return (0,
                    a.callbackWrapper)((function() {
                        return r(n, void 0, void 0, (function() {
                            var e, n, r = this;
                            return i(this, (function(i) {
                                switch (i.label) {
                                case 0:
                                    return s.default.log("Requesting responsive banner", t),
                                    [4, this.sdk.ensureInit(!0)];
                                case 1:
                                    return i.sent(),
                                    [4, (0,
                                    u.getBannerContainer)(t, !this.disableBannerCheck)];
                                case 2:
                                    return e = i.sent(),
                                    n = (0,
                                    u.getBannerForResponsive)(e),
                                    s.default.log("Requesting banner to gameframe", t),
                                    [2, new Promise((function(i, o) {
                                        var u = n.width
                                          , a = n.height;
                                        r.bannerQueue[e.id] = {
                                            banner: n,
                                            resolve: i,
                                            reject: o
                                        },
                                        r.sdk.postMessage("requestResponsiveBanner", [{
                                            id: t,
                                            width: u,
                                            height: a
                                        }])
                                    }
                                    ))]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ), e)
                }
                ,
                t.prototype.requestOverlayBanners = function(t, e) {
                    var n = this
                      , r = t.map((function(t) {
                        return t.id
                    }
                    ));
                    Object.keys(this.overlayBanners).forEach((function(t) {
                        r.includes(t) || (s.default.log("Remove overlay banner " + t),
                        n.overlayBanners[t].destroy(),
                        delete n.overlayBanners[t])
                    }
                    )),
                    t.forEach((function(t) {
                        if (n.overlayBanners[t.id])
                            s.default.log("Skip overlay banner update " + t.id);
                        else {
                            s.default.log("Create overlay banner " + t.id);
                            var r = new c.OverlayBanner(t,n.disableBannerCheck,n,e);
                            n.overlayBanners[t.id] = r
                        }
                    }
                    ))
                }
                ,
                t.prototype.handleEvent = function(t) {
                    switch (t.data.type) {
                    case "bannerError":
                        return this.handleBannerErrorEvent(t.data);
                    case "bannerRendered":
                        return this.handleBannerRenderedEvent(t.data);
                    case "requestBanner":
                        return this.handleRequestBannerEvent(t.data)
                    }
                }
                ,
                t.prototype.handleBannerErrorEvent = function(t) {
                    var e = t.error
                      , n = t.containerId;
                    s.default.log("Banner error happened", {
                        error: e,
                        containerId: n
                    });
                    var r = this.popFromBannerQueue(t.containerId);
                    r && (0,
                    r.reject)(e)
                }
                ,
                t.prototype.handleBannerRenderedEvent = function(t) {
                    var e = this.popFromBannerQueue(t.containerId);
                    if (e) {
                        var n = e.banner
                          , r = e.resolve;
                        s.default.log("Banner rendered", n),
                        r()
                    }
                }
                ,
                t.prototype.handleRequestBannerEvent = function(t) {
                    var e = t.request;
                    s.default.log("Banner request answer from gameframe received", e),
                    this.buildBannerRequestCallback(e),
                    (0,
                    u.requestInGameBanner)(e)
                }
                ,
                t.prototype.buildBannerRequestCallback = function(t) {
                    var e = this;
                    t.options.banner = {
                        callback: function(t) {
                            var n = e.popFromBannerQueue(t.code);
                            if (n) {
                                var r = n.banner
                                  , i = n.resolve
                                  , o = n.reject;
                                if (delete e.bannerQueue[t.code],
                                !t.empty)
                                    return s.default.log("Banner rendered", r),
                                    e.sdk.postMessage("bannerProcessed", {
                                        containerId: r.id,
                                        width: r.width,
                                        height: r.height
                                    }),
                                    void i();
                                if (e.useTestAds)
                                    (0,
                                    u.renderFakeBanner)(r),
                                    s.default.log("Fake banner rendered", r),
                                    i();
                                else {
                                    s.default.log("No banner available", r);
                                    var a = "Sorry, no banner is available for the moment, please retry";
                                    e.sdk.postMessage("bannerProcessed", {
                                        containerId: r.id,
                                        width: r.width,
                                        height: r.height,
                                        error: a
                                    }),
                                    o(a)
                                }
                            }
                        }
                    }
                }
                ,
                t.prototype.popFromBannerQueue = function(t) {
                    var e = this.bannerQueue[t];
                    return e ? (delete this.bannerQueue[t],
                    e) : (s.default.log("Cannot retrieve element for id " + t + " from the banner queue"),
                    null)
                }
                ,
                t
            }();
            e.default = l
        },
        881: function(t, e, n) {
            "use strict";
            var r = this && this.__awaiter || function(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function u(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function a(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(u, a)
                    }
                    s((r = r.apply(t, e || [])).next())
                }
                ))
            }
              , i = this && this.__generator || function(t, e) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; u; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [2 & o[0], i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(),
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2],
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(),
                                        u.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
              , o = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var u = o(n(71))
              , a = n(823)
              , s = n(659)
              , c = function() {
                function t(t) {
                    var e = this;
                    this.sdk = t,
                    this.onScreenshotReady = function(t) {
                        return r(e, void 0, void 0, (function() {
                            return i(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, this.sdk.ensureInit()];
                                case 1:
                                    return e.sent(),
                                    this.sdk.postMessage("requestScreenshotResponse", {
                                        base64image: t
                                    }),
                                    [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                }
                return t.prototype.happytime = function(t) {
                    return r(this, void 0, void 0, (function() {
                        var e = this;
                        return i(this, (function(n) {
                            return [2, (0,
                            a.callbackWrapper)((function() {
                                return r(e, void 0, void 0, (function() {
                                    return i(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return u.default.log("Requesting happytime"),
                                            [4, this.sdk.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            this.sdk.postMessage("happytime", {}),
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                            ), t)]
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.gameplayStart = function(t) {
                    return r(this, void 0, void 0, (function() {
                        var e = this;
                        return i(this, (function(n) {
                            return [2, (0,
                            a.callbackWrapper)((function() {
                                return r(e, void 0, void 0, (function() {
                                    return i(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return u.default.log("Requesting gameplay start"),
                                            [4, this.sdk.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            this.sdk.postMessage("gameplayStart", {}),
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                            ), t)]
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.gameplayStop = function(t) {
                    return r(this, void 0, void 0, (function() {
                        var e = this;
                        return i(this, (function(n) {
                            return [2, (0,
                            a.callbackWrapper)((function() {
                                return r(e, void 0, void 0, (function() {
                                    return i(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return u.default.log("Requesting gameplay stop"),
                                            [4, this.sdk.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            this.sdk.postMessage("gameplayStop", {}),
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                            ), t)]
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.sdkGameLoadingStart = function(t) {
                    return r(this, void 0, void 0, (function() {
                        var e = this;
                        return i(this, (function(n) {
                            return [2, (0,
                            a.callbackWrapper)((function() {
                                return r(e, void 0, void 0, (function() {
                                    return i(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return u.default.log("Requesting start of game loading from sdk"),
                                            [4, this.sdk.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            this.sdk.postMessage("sdkGameLoadingStart", {}),
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                            ), t)]
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.sdkGameLoadingStop = function(t) {
                    return r(this, void 0, void 0, (function() {
                        var e = this;
                        return i(this, (function(n) {
                            return [2, (0,
                            a.callbackWrapper)((function() {
                                return r(e, void 0, void 0, (function() {
                                    return i(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return u.default.log("Requesting stop of game loading from sdk"),
                                            [4, this.sdk.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            this.sdk.postMessage("sdkGameLoadingStop", {}),
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                            ), t)]
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.inviteLink = function(t, e) {
                    return r(this, void 0, void 0, (function() {
                        var n = this;
                        return i(this, (function(o) {
                            return [2, (0,
                            a.callbackWrapper)((function() {
                                return r(n, void 0, void 0, (function() {
                                    var e;
                                    return i(this, (function(n) {
                                        switch (n.label) {
                                        case 0:
                                            return u.default.log("Requesting invite link"),
                                            [4, this.sdk.ensureInit()];
                                        case 1:
                                            return n.sent(),
                                            e = (0,
                                            s.generateInviteLink)(t, this.gameLink),
                                            u.default.log("Invite link is " + e),
                                            this.sdk.postMessage("inviteUrl", {
                                                inviteUrl: e
                                            }),
                                            [2, e]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                            ), e)]
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.onScreenshotRequestFromGF = function() {
                    this.screenshotHandler && this.screenshotHandler()
                }
                ,
                t.prototype.setScreenshotHandlerAsync = function(t) {
                    return r(this, void 0, void 0, (function() {
                        return i(this, (function(e) {
                            return this.screenshotHandler = t,
                            [2, this.onScreenshotReady]
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.handleEvent = function(t) {
                    "requestScreenshot" === t.data.type && this.onScreenshotRequestFromGF()
                }
                ,
                t.prototype.setScreenshotHandler = function(t) {
                    return function() {}
                }
                ,
                t
            }();
            e.default = c
        },
        273: function(t, e, n) {
            "use strict";
            var r = this && this.__assign || function() {
                return r = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n])
                            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }
                ,
                r.apply(this, arguments)
            }
              , i = this && this.__awaiter || function(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function u(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function a(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(u, a)
                    }
                    s((r = r.apply(t, e || [])).next())
                }
                ))
            }
              , o = this && this.__generator || function(t, e) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; u; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [2 & o[0], i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(),
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2],
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(),
                                        u.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
              , u = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var a = u(n(683))
              , s = u(n(881))
              , c = u(n(236))
              , l = u(n(320))
              , f = u(n(71))
              , h = n(871)
              , d = n(951)
              , p = n(823)
              , v = n(412)
              , y = function() {
                function t() {
                    var t = this;
                    this.initResolvers = [],
                    this.rafvertizingUrl = "",
                    this.initState = h.INIT_STATE.UNINITIALIZED,
                    this._banner = new a.default(this),
                    this._game = new s.default(this),
                    this._ad = new c.default(this),
                    this._user = new l.default(this),
                    this.receiveMessage = function(e) {
                        return i(t, void 0, void 0, (function() {
                            var t, n;
                            return o(this, (function(r) {
                                return "sdk" !== (t = e.data).messageTarget ? [2] : (n = t.type) && this.isValidCrazyEvent(n) ? (f.default.log("Received message from GF", t),
                                "initialized" === n ? (this.gfWindow = e.source,
                                [2, this.initializeReply(t.data)]) : (this._banner.handleEvent(e),
                                this._ad.handleEvent(e),
                                this._user.handleEvent(e),
                                this._game.handleEvent(e),
                                [2])) : [2]
                            }
                            ))
                        }
                        ))
                    }
                }
                return t.prototype.init = function(t) {
                    this.initState === h.INIT_STATE.UNINITIALIZED && (f.default.log("Initializing v2"),
                    t && f.default.log("Init options", t),
                    this.registerMessageListener(),
                    this.sendInit(t),
                    this.initState = h.INIT_STATE.REQUESTED)
                }
                ,
                t.prototype.addInitCallback = function(t) {
                    return i(this, void 0, void 0, (function() {
                        return o(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.ensureInit()];
                            case 1:
                                return e.sent(),
                                t(this._initInfo),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.getEnvironment = function(t) {
                    return i(this, void 0, void 0, (function() {
                        var e = this;
                        return o(this, (function(n) {
                            return [2, (0,
                            p.callbackWrapper)((function() {
                                return i(e, void 0, void 0, (function() {
                                    return o(this, (function(t) {
                                        return [2, "crazygames"]
                                    }
                                    ))
                                }
                                ))
                            }
                            ), t)]
                        }
                        ))
                    }
                    ))
                }
                ,
                Object.defineProperty(t.prototype, "banner", {
                    get: function() {
                        return this._banner
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "game", {
                    get: function() {
                        return this._game
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "user", {
                    get: function() {
                        return this._user
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "ad", {
                    get: function() {
                        return this._ad
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.postMessage = function(t, e) {
                    var n = {
                        type: t,
                        data: e
                    };
                    f.default.log("Message to GF", n),
                    this.gfWindow ? this.gfWindow.postMessage(n, "*") : f.default.log("CrazyGames gameframe hasn't been detected")
                }
                ,
                t.prototype.ensureInit = function(t) {
                    return void 0 === t && (t = !1),
                    i(this, void 0, void 0, (function() {
                        var e = this;
                        return o(this, (function(n) {
                            return this.initState === h.INIT_STATE.INITIALIZED ? t ? [2, (0,
                            d.loadAdsIfNeeded)(this.rafvertizingUrl)] : [2, Promise.resolve()] : (this.init(),
                            [2, new Promise((function(n) {
                                e.initResolvers.push((function() {
                                    return i(e, void 0, void 0, (function() {
                                        return o(this, (function(e) {
                                            switch (e.label) {
                                            case 0:
                                                return t ? [3, 1] : (n(),
                                                [3, 3]);
                                            case 1:
                                                return [4, (0,
                                                d.loadAdsIfNeeded)(this.rafvertizingUrl)];
                                            case 2:
                                                e.sent(),
                                                n(),
                                                e.label = 3;
                                            case 3:
                                                return [2]
                                            }
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ))
                            }
                            ))])
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.sendInit = function(t) {
                    var e = {
                        type: "init-js-sdk",
                        data: r({
                            version: v.SDK_VERSION,
                            sdkType: "js"
                        }, t)
                    };
                    window.postMessage(e, "*"),
                    window.parent.postMessage(e, "*"),
                    window.parent.parent.postMessage(e, "*"),
                    window.parent.parent.parent.postMessage(e, "*")
                }
                ,
                t.prototype.registerMessageListener = function() {
                    window.addEventListener("message", this.receiveMessage, !1)
                }
                ,
                t.prototype.initializeReply = function(t) {
                    return i(this, void 0, void 0, (function() {
                        return o(this, (function(e) {
                            return t && void 0 !== t.debug && f.default.setDebug(t.debug),
                            f.default.log("Initialize reply received from gameframe", t),
                            this.initState === h.INIT_STATE.INITIALIZED || (t && (this.rafvertizingUrl = t.rafvertizingUrl,
                            this.gameId = t.gameId,
                            this._game.gameLink = t.gameLink,
                            this._banner.useTestAds = t.useTestAds,
                            this._banner.disableBannerCheck = t.disableBannerCheck || !1,
                            this._user.systemInfo = t.systemInfo,
                            this._user.userAccountAvailable = !!t.userAccountAvailable),
                            this.initState = h.INIT_STATE.INITIALIZED,
                            this._initInfo = t,
                            this.initResolvers.length > 0 && (f.default.log("Calling init callbacks"),
                            this.initResolvers.forEach((function(t) {
                                return t()
                            }
                            )),
                            this.initResolvers = [])),
                            [2]
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.isValidCrazyEvent = function(t) {
                    switch (t) {
                    case "adStarted":
                    case "adFinished":
                    case "adError":
                    case "adblockDetectionExecuted":
                    case "bannerRendered":
                    case "bannerError":
                    case "requestBanner":
                    case "initialized":
                    case "requestGameDataResponse":
                    case "userLoggedIn":
                    case "showAuthPromptResponse":
                    case "requestUserTokenResponse":
                    case "requestXsollaUserTokenResponse":
                    case "linkAccountResponse":
                    case "requestScreenshot":
                        return !0;
                    default:
                        return !1
                    }
                }
                ,
                t
            }();
            e.default = y
        },
        320: function(t, e, n) {
            "use strict";
            var r = this && this.__awaiter || function(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function u(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function a(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(u, a)
                    }
                    s((r = r.apply(t, e || [])).next())
                }
                ))
            }
              , i = this && this.__generator || function(t, e) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; u; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [2 & o[0], i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(),
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2],
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(),
                                        u.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
              , o = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var u = o(n(71))
              , a = n(823)
              , s = n(297)
              , c = function() {
                function t(t) {
                    this.sdk = t,
                    this.authDeferredPromise = null,
                    this.accountLinkDeferredPromise = null,
                    this.authListeners = [],
                    this.userTokenResolvers = [],
                    this.userTokenRequestInProgress = !1,
                    this.xsollaUserTokenRequestInProgress = !1,
                    this.xsollaUserTokenResolvers = []
                }
                return t.prototype.showAuthPrompt = function(t) {
                    var e = this;
                    return this.authDeferredPromise ? (0,
                    a.callbackWrapper)((function() {
                        return r(e, void 0, void 0, (function() {
                            return i(this, (function(t) {
                                throw new Error("showAuthPromptInProgress")
                            }
                            ))
                        }
                        ))
                    }
                    ), t) : this.user ? (0,
                    a.callbackWrapper)((function() {
                        return r(e, void 0, void 0, (function() {
                            return i(this, (function(t) {
                                throw new Error("userAlreadySignedIn")
                            }
                            ))
                        }
                        ))
                    }
                    ), t) : (0,
                    a.callbackWrapper)((function() {
                        return new Promise((function(t, n) {
                            return r(e, void 0, void 0, (function() {
                                return i(this, (function(e) {
                                    switch (e.label) {
                                    case 0:
                                        return this.authDeferredPromise = {
                                            resolve: t,
                                            reject: n
                                        },
                                        [4, this.sdk.ensureInit()];
                                    case 1:
                                        return e.sent(),
                                        this.sdk.postMessage("showAuthPrompt", {}),
                                        [2]
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    ), t)
                }
                ,
                t.prototype.handleAuthPromptResponse = function(t) {
                    u.default.log("Received auth prompt response", t);
                    var e = t.error
                      , n = t.user;
                    e ? this.authDeferredPromise && this.authDeferredPromise.reject(e) : (this.user = n,
                    this.authDeferredPromise && this.authDeferredPromise.resolve(this.user)),
                    this.authDeferredPromise = null
                }
                ,
                t.prototype.showAccountLinkPrompt = function(t) {
                    var e = this;
                    return this.accountLinkDeferredPromise ? (0,
                    a.callbackWrapper)((function() {
                        return r(e, void 0, void 0, (function() {
                            return i(this, (function(t) {
                                throw new Error("showAccountLinkPromptInProgress")
                            }
                            ))
                        }
                        ))
                    }
                    ), t) : this.user ? (0,
                    a.callbackWrapper)((function() {
                        return new Promise((function(t, n) {
                            return r(e, void 0, void 0, (function() {
                                return i(this, (function(e) {
                                    switch (e.label) {
                                    case 0:
                                        return this.accountLinkDeferredPromise = {
                                            resolve: t,
                                            reject: n
                                        },
                                        [4, this.sdk.ensureInit()];
                                    case 1:
                                        return e.sent(),
                                        this.sdk.postMessage("showAccountLinkPrompt", {}),
                                        [2]
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    ), t) : (0,
                    a.callbackWrapper)((function() {
                        return r(e, void 0, void 0, (function() {
                            return i(this, (function(t) {
                                throw new Error("userNotAuthenticated")
                            }
                            ))
                        }
                        ))
                    }
                    ), t)
                }
                ,
                t.prototype.handleAccountLinkPromptResponse = function(t) {
                    u.default.log("Received account link prompt response", t);
                    var e = t.response;
                    this.accountLinkDeferredPromise && this.accountLinkDeferredPromise.resolve({
                        response: e
                    }),
                    this.accountLinkDeferredPromise = null
                }
                ,
                t.prototype.getUser = function(t) {
                    var e = this;
                    return (0,
                    a.callbackWrapper)((function() {
                        return r(e, void 0, void 0, (function() {
                            return i(this, (function(t) {
                                switch (t.label) {
                                case 0:
                                    return u.default.log("Requesting site user info"),
                                    [4, this.sdk.ensureInit()];
                                case 1:
                                    return t.sent(),
                                    [2, this.user]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ), t)
                }
                ,
                t.prototype.getSystemInfo = function(t) {
                    var e = this;
                    return (0,
                    a.callbackWrapper)((function() {
                        return r(e, void 0, void 0, (function() {
                            return i(this, (function(t) {
                                switch (t.label) {
                                case 0:
                                    return u.default.log("Requesting system info"),
                                    [4, this.sdk.ensureInit()];
                                case 1:
                                    return t.sent(),
                                    [2, this.systemInfo]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ), t)
                }
                ,
                t.prototype.isUserAccountAvailable = function(t) {
                    var e = this;
                    return (0,
                    a.callbackWrapper)((function() {
                        return r(e, void 0, void 0, (function() {
                            return i(this, (function(t) {
                                switch (t.label) {
                                case 0:
                                    return u.default.log("Requesting isUserAccountAvailable"),
                                    [4, this.sdk.ensureInit()];
                                case 1:
                                    return t.sent(),
                                    [2, !!this.userAccountAvailable]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ), t)
                }
                ,
                t.prototype.getUserToken = function(t) {
                    var e;
                    return r(this, void 0, void 0, (function() {
                        var n = this;
                        return i(this, (function(o) {
                            switch (o.label) {
                            case 0:
                                return [4, this.sdk.ensureInit()];
                            case 1:
                                return o.sent(),
                                this.tokenExpiresAtMs && this.tokenExpiresAtMs < Date.now() && (u.default.log("User token expired, clean it so it is requested again"),
                                this.userToken = null,
                                this.tokenExpiresAtMs = null),
                                this.tokenExpiresAtMs && !this.userTokenRequestInProgress && this.tokenExpiresAtMs - 3e4 < Date.now() && (u.default.log("User token expires soon, request new one in background"),
                                this.requestNewUserToken()),
                                (null === (e = this.userToken) || void 0 === e ? void 0 : e.token) ? (u.default.log("Returning cached user token"),
                                [2, (0,
                                a.callbackWrapper)((function() {
                                    return r(n, void 0, void 0, (function() {
                                        return i(this, (function(t) {
                                            return [2, this.userToken.token]
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ), t)]) : (this.userTokenRequestInProgress ? u.default.log("User token request to portal in progress") : (u.default.log("No user token present in the SDK, request one"),
                                this.requestNewUserToken()),
                                [2, (0,
                                a.callbackWrapper)((function() {
                                    return r(n, void 0, void 0, (function() {
                                        var t = this;
                                        return i(this, (function(e) {
                                            switch (e.label) {
                                            case 0:
                                                return [4, new Promise((function(e) {
                                                    t.userTokenResolvers.push((function() {
                                                        return r(t, void 0, void 0, (function() {
                                                            return i(this, (function(t) {
                                                                return e(),
                                                                [2]
                                                            }
                                                            ))
                                                        }
                                                        ))
                                                    }
                                                    ))
                                                }
                                                ))];
                                            case 1:
                                                if (e.sent(),
                                                !this.userToken)
                                                    throw u.default.error("User token missing after portal request finished"),
                                                    new Error("unexpectedError");
                                                if (this.userToken.error)
                                                    throw new Error(this.userToken.error);
                                                if (!this.userToken.token)
                                                    throw u.default.error("User token missing, even though there isn't any error"),
                                                    new Error("unexpectedError");
                                                return [2, this.userToken.token]
                                            }
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ), t)])
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.handleUserTokenResponse = function(t) {
                    u.default.log("Received token response from portal", t),
                    this.userToken = t,
                    this.userTokenRequestInProgress = !1,
                    t.expiresIn && (this.tokenExpiresAtMs = Date.now() + 1e3 * t.expiresIn),
                    this.userTokenResolvers.forEach((function(t) {
                        return t()
                    }
                    )),
                    this.userTokenResolvers = []
                }
                ,
                t.prototype.requestNewUserToken = function() {
                    u.default.log("Requesting user token from portal"),
                    this.sdk.postMessage("requestUserToken", {}),
                    this.userTokenRequestInProgress = !0
                }
                ,
                t.prototype.getXsollaUserToken = function(t) {
                    var e;
                    return r(this, void 0, void 0, (function() {
                        var n = this;
                        return i(this, (function(o) {
                            switch (o.label) {
                            case 0:
                                return [4, this.sdk.ensureInit()];
                            case 1:
                                return o.sent(),
                                this.xsollaUserTokenExpiresAtMs && this.xsollaUserTokenExpiresAtMs < Date.now() && (u.default.log("Xsolla user token expired, clean it so it is requested again"),
                                this.xsollaUserToken = null,
                                this.xsollaUserTokenExpiresAtMs = null),
                                this.xsollaUserTokenExpiresAtMs && !this.xsollaUserTokenRequestInProgress && this.xsollaUserTokenExpiresAtMs - 3e4 < Date.now() && (u.default.log("Xsolla user token expires soon, request new one in background"),
                                this.requestNewXsollaUserToken()),
                                (null === (e = this.xsollaUserToken) || void 0 === e ? void 0 : e.token) ? (u.default.log("Returning cached Xsolla user token"),
                                [2, (0,
                                a.callbackWrapper)((function() {
                                    return r(n, void 0, void 0, (function() {
                                        return i(this, (function(t) {
                                            return [2, this.xsollaUserToken.token]
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ), t)]) : (this.xsollaUserTokenRequestInProgress ? u.default.log("Xsolla user token request to portal in progress") : (u.default.log("No Xsolla user token present in the SDK, request one"),
                                this.requestNewXsollaUserToken()),
                                [2, (0,
                                a.callbackWrapper)((function() {
                                    return r(n, void 0, void 0, (function() {
                                        var t = this;
                                        return i(this, (function(e) {
                                            switch (e.label) {
                                            case 0:
                                                return [4, new Promise((function(e) {
                                                    t.xsollaUserTokenResolvers.push((function() {
                                                        return r(t, void 0, void 0, (function() {
                                                            return i(this, (function(t) {
                                                                return e(),
                                                                [2]
                                                            }
                                                            ))
                                                        }
                                                        ))
                                                    }
                                                    ))
                                                }
                                                ))];
                                            case 1:
                                                if (e.sent(),
                                                !this.xsollaUserToken)
                                                    throw u.default.error("Xsolla user token missing after portal request finished"),
                                                    new Error("unexpectedError");
                                                if (this.xsollaUserToken.error)
                                                    throw new Error(this.xsollaUserToken.error);
                                                if (!this.xsollaUserToken.token)
                                                    throw u.default.error("Xsolla user token missing, even though there isn't any error"),
                                                    new Error("unexpectedError");
                                                return [2, this.xsollaUserToken.token]
                                            }
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ), t)])
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.handleXsollaUserTokenResponse = function(t) {
                    u.default.log("Received Xsolla user token response from portal", t),
                    this.xsollaUserToken = t,
                    this.xsollaUserTokenRequestInProgress = !1,
                    t.expiresIn && (this.xsollaUserTokenExpiresAtMs = Date.now() + 1e3 * t.expiresIn),
                    this.xsollaUserTokenResolvers.forEach((function(t) {
                        return t()
                    }
                    )),
                    this.xsollaUserTokenResolvers = []
                }
                ,
                t.prototype.requestNewXsollaUserToken = function() {
                    u.default.log("Requesting Xsolla user token from portal"),
                    this.sdk.postMessage("requestXsollaUserToken", {}),
                    this.xsollaUserTokenRequestInProgress = !0
                }
                ,
                t.prototype.addScore = function(t, e) {
                    var n = this;
                    return "number" != typeof t || isNaN(t) ? (0,
                    a.callbackWrapper)((function() {
                        return r(n, void 0, void 0, (function() {
                            return i(this, (function(t) {
                                throw u.default.error("Score input must be a number"),
                                new Error("unexpectedError")
                            }
                            ))
                        }
                        ))
                    }
                    ), e) : "https:" !== window.location.protocol ? (0,
                    a.callbackWrapper)((function() {
                        return r(n, void 0, void 0, (function() {
                            return i(this, (function(t) {
                                throw u.default.error("AddScore is only supported on https"),
                                new Error("unexpectedError")
                            }
                            ))
                        }
                        ))
                    }
                    ), e) : (0,
                    a.callbackWrapper)((function() {
                        return r(n, void 0, void 0, (function() {
                            var e;
                            return i(this, (function(n) {
                                switch (n.label) {
                                case 0:
                                    return u.default.log("Requesting to addScore", t),
                                    [4, this.sdk.ensureInit()];
                                case 1:
                                    return n.sent(),
                                    [4, (0,
                                    s.roundNumber)("" + t)];
                                case 2:
                                    return e = n.sent(),
                                    this.sdk.postMessage("addScore", {
                                        score: t,
                                        encryptedScore: e
                                    }),
                                    [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ), e)
                }
                ,
                t.prototype.handleEvent = function(t) {
                    var e = t.data;
                    switch (e.type) {
                    case "showAuthPromptResponse":
                        this.handleAuthPromptResponse(e);
                        break;
                    case "linkAccountResponse":
                        this.handleAccountLinkPromptResponse(e.data);
                        break;
                    case "userLoggedIn":
                        this.handleUserLoggedIn(e.data);
                        break;
                    case "requestUserTokenResponse":
                        this.handleUserTokenResponse(e);
                        break;
                    case "requestXsollaUserTokenResponse":
                        this.handleXsollaUserTokenResponse(e)
                    }
                }
                ,
                t.prototype.addAuthListener = function(t) {
                    this.authListeners.push(t),
                    this.callAuthChangeListener(t)
                }
                ,
                t.prototype.removeAuthListener = function(t) {
                    this.authListeners = this.authListeners.filter((function(e) {
                        return e !== t
                    }
                    ))
                }
                ,
                t.prototype.handleUserLoggedIn = function(t) {
                    this.user = t.user,
                    this.callAuthChangeListeners()
                }
                ,
                t.prototype.callAuthChangeListeners = function() {
                    var t = this;
                    this.authListeners.forEach((function(e) {
                        return t.callAuthChangeListener(e)
                    }
                    ))
                }
                ,
                t.prototype.callAuthChangeListener = function(t) {
                    try {
                        t(this.user)
                    } catch (t) {
                        console.error(t)
                    }
                }
                ,
                t
            }();
            e.default = c
        },
        176: function(t, e, n) {
            "use strict";
            var r = this && this.__awaiter || function(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function u(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function a(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(u, a)
                    }
                    s((r = r.apply(t, e || [])).next())
                }
                ))
            }
              , i = this && this.__generator || function(t, e) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; u; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [2 & o[0], i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(),
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2],
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(),
                                        u.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(823)
              , u = function() {
                function t() {
                    var t = this;
                    this.errorMessage = 'CrazySDK is disabled on this domain. Please check if window.CrazyGames.SDK.environment is not "disabled" before calling the SDK.',
                    this.errorFunction = function() {
                        return r(t, void 0, void 0, (function() {
                            return i(this, (function(t) {
                                // throw new Error(this.errorMessage)
                              console.log("--fx--", this.errorMessage);
                            }
                            ))
                        }
                        ))
                    }
                }
                return t.prototype.init = function() {}
                ,
                t.prototype.addInitCallback = function() {}
                ,
                t.prototype.getEnvironment = function(t) {
                    return r(this, void 0, void 0, (function() {
                        var e = this;
                        return i(this, (function(n) {
                            return [2, (0,
                            o.callbackWrapper)((function() {
                                return r(e, void 0, void 0, (function() {
                                    return i(this, (function(t) {
                                        return [2, "disabled"]
                                    }
                                    ))
                                }
                                ))
                            }
                            ), t)]
                        }
                        ))
                    }
                    ))
                }
                ,
                Object.defineProperty(t.prototype, "ad", {
                    get: function() {
                        var t = this;
                        return {
                            requestAd: function(e, n) {
                                return r(t, void 0, void 0, (function() {
                                    return i(this, (function(t) {
                                        return [2, null == n ? void 0 : n.adError(this.errorMessage)]
                                    }
                                    ))
                                }
                                ))
                            },
                            hasAdblock: function(e) {
                                return (0,
                                o.callbackWrapper)(t.errorFunction, e)
                            }
                        }
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "banner", {
                    get: function() {
                        var t = this;
                        return {
                            requestBanner: function(e, n) {
                                return (0,
                                o.callbackWrapper)(t.errorFunction, n)
                            },
                            requestResponsiveBanner: function(e, n) {
                                return (0,
                                o.callbackWrapper)(t.errorFunction, n)
                            },
                            requestOverlayBanners: function(e, n) {
                                return t.errorFunction()
                            }
                        }
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "game", {
                    get: function() {
                        var t = this;
                        return {
                            happytime: function(e) {
                                return (0,
                                o.callbackWrapper)(t.errorFunction, e)
                            },
                            gameplayStart: function(e) {
                                return (0,
                                o.callbackWrapper)(t.errorFunction, e)
                            },
                            gameplayStop: function(e) {
                                return (0,
                                o.callbackWrapper)(t.errorFunction, e)
                            },
                            sdkGameLoadingStart: function(e) {
                                return (0,
                                o.callbackWrapper)(t.errorFunction, e)
                            },
                            sdkGameLoadingStop: function(e) {
                                return (0,
                                o.callbackWrapper)(t.errorFunction, e)
                            },
                            inviteLink: function(e, n) {
                                return (0,
                                o.callbackWrapper)(t.errorFunction, n)
                            },
                            setScreenshotHandlerAsync: function() {
                                return r(t, void 0, void 0, (function() {
                                    return i(this, (function(t) {
                                        return [2, function() {}
                                        ]
                                    }
                                    ))
                                }
                                ))
                            },
                            setScreenshotHandler: function(t) {
                                return function() {}
                            }
                        }
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "user", {
                    get: function() {
                        var t = this;
                        return {
                            getUser: function(e) {
                                return (0,
                                o.callbackWrapper)(t.errorFunction, e)
                            },
                            getSystemInfo: function(e) {
                                return (0,
                                o.callbackWrapper)(t.errorFunction, e)
                            },
                            showAuthPrompt: function(e) {
                                return (0,
                                o.callbackWrapper)(t.errorFunction, e)
                            },
                            showAccountLinkPrompt: function(e) {
                                return (0,
                                o.callbackWrapper)(t.errorFunction, e)
                            },
                            addAuthListener: function(t) {},
                            removeAuthListener: function(t) {},
                            getUserToken: function(e) {
                                return (0,
                                o.callbackWrapper)(t.errorFunction, e)
                            },
                            getXsollaUserToken: function(e) {
                                return (0,
                                o.callbackWrapper)(t.errorFunction, e)
                            },
                            addScore: function(e, n) {
                                return (0,
                                o.callbackWrapper)(t.errorFunction, n)
                            },
                            isUserAccountAvailable: function(e) {
                                return (0,
                                o.callbackWrapper)(t.errorFunction, e)
                            }
                        }
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t
            }();
            e.default = u
        },
        223: function(t, e, n) {
            "use strict";
            var r = this && this.__awaiter || function(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function u(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function a(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(u, a)
                    }
                    s((r = r.apply(t, e || [])).next())
                }
                ))
            }
              , i = this && this.__generator || function(t, e) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; u; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [2 & o[0], i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(),
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2],
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(),
                                        u.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
              , o = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var u = o(n(71))
              , a = n(823)
              , s = n(871)
              , c = 3e4
              , l = function() {
                function t(t) {
                    this.sdk = t,
                    this.requestInProgress = !1,
                    this.throttleInterstitial = !1,
                    this.throttleRewarded = !1
                }
                return t.prototype.init = function(t) {
                    var e, n, r, i;
                    (null === (e = null == t ? void 0 : t.fb) || void 0 === e ? void 0 : e.interstitialId) || console.warn("InitOptions missing interstitialId, interstitial ads will not work."),
                    (null === (n = null == t ? void 0 : t.fb) || void 0 === n ? void 0 : n.rewardedId) || console.warn("InitOptions missing rewardedId, rewarded ads will not work."),
                    this.interstitialAdId = null === (r = null == t ? void 0 : t.fb) || void 0 === r ? void 0 : r.interstitialId,
                    this.rewardedAdId = null === (i = null == t ? void 0 : t.fb) || void 0 === i ? void 0 : i.rewardedId,
                    this.preloadAds()
                }
                ,
                t.prototype.preloadAds = function() {
                    return r(this, void 0, void 0, (function() {
                        return i(this, (function(t) {
                            return this.preloadInterstitialAd(0),
                            this.preloadRewardedAd(0),
                            [2]
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.requestAd = function(t, e) {
                    return r(this, void 0, void 0, (function() {
                        return i(this, (function(n) {
                            return u.default.log("Requesting " + t + " ad"),
                            this.requestInProgress && (null == e ? void 0 : e.adError) && (0,
                            a.wrapUserFn)(e.adError)("An ad request is already in progress"),
                            this.requestInProgress = !0,
                            "rewarded" === t ? [2, this.displayRewardedAd(e)] : [2, this.displayMidrollAd(e)]
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.hasAdblock = function(t) {
                    return (0,
                    a.callbackWrapper)((function() {
                        return Promise.resolve(!1)
                    }
                    ), t)
                }
                ,
                t.prototype.handleAdError = function(t, e) {
                    this.requestInProgress = !1,
                    (null == e ? void 0 : e.adError) ? (0,
                    a.wrapUserFn)(e.adError)(t.toString()) : (null == e ? void 0 : e.adFinished) && (0,
                    a.wrapUserFn)(e.adFinished)()
                }
                ,
                t.prototype.handleAdFinished = function(t) {
                    this.requestInProgress = !1,
                    (null == t ? void 0 : t.adFinished) && (0,
                    a.wrapUserFn)(t.adFinished)()
                }
                ,
                t.prototype.handleAdStarted = function(t) {
                    (null == t ? void 0 : t.adStarted) && (0,
                    a.wrapUserFn)(null == t ? void 0 : t.adStarted)()
                }
                ,
                t.prototype.displayMidrollAd = function(t) {
                    return r(this, void 0, void 0, (function() {
                        var e, n, r = this;
                        return i(this, (function(i) {
                            switch (i.label) {
                            case 0:
                                if (!this.preloadedInterstitialAd)
                                    return this.handleAdError("Missing preloaded interstitial ad", t),
                                    [2];
                                if (this.throttleInterstitial)
                                    return this.handleAdError("Please wait " + s.DEFAULT_MIN_TIME_BETWEEN_MIDROLL_MS / 1e3 + " seconds between two midroll ads", t),
                                    [2];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]),
                                this.handleAdStarted(t),
                                this.throttleInterstitial = !0,
                                setTimeout((function() {
                                    return r.throttleInterstitial = !1
                                }
                                ), s.DEFAULT_MIN_TIME_BETWEEN_MIDROLL_MS),
                                [4, this.preloadedInterstitialAd.showAsync()];
                            case 2:
                                return i.sent(),
                                this.handleAdFinished(t),
                                [3, 4];
                            case 3:
                                return e = i.sent(),
                                n = e,
                                this.handleAdError(n.code + " " + n.message, t),
                                [3, 4];
                            case 4:
                                return this.preloadedInterstitialAd = void 0,
                                this.preloadInterstitialAd(0),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.displayRewardedAd = function(t) {
                    return r(this, void 0, void 0, (function() {
                        var e, n, r = this;
                        return i(this, (function(i) {
                            switch (i.label) {
                            case 0:
                                if (!this.preloadedRewardedAd)
                                    return this.handleAdError("Missing preloaded rewarded ad", t),
                                    [2];
                                if (this.throttleRewarded)
                                    return this.handleAdError("Please wait " + s.DEFAULT_MIN_TIME_BETWEEN_REWARDED_MS / 1e3 + " seconds between two rewarded ads", t),
                                    [2];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]),
                                this.handleAdStarted(t),
                                this.throttleRewarded = !0,
                                setTimeout((function() {
                                    return r.throttleRewarded = !1
                                }
                                ), s.DEFAULT_MIN_TIME_BETWEEN_REWARDED_MS),
                                [4, this.preloadedRewardedAd.showAsync()];
                            case 2:
                                return i.sent(),
                                this.handleAdFinished(t),
                                [3, 4];
                            case 3:
                                return e = i.sent(),
                                n = e,
                                this.handleAdError(n.code + " " + n.message, t),
                                [3, 4];
                            case 4:
                                return this.preloadedRewardedAd = void 0,
                                this.preloadRewardedAd(0),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.preloadInterstitialAd = function(t) {
                    return r(this, void 0, void 0, (function() {
                        var e, n, r, o, a, s = this;
                        return i(this, (function(i) {
                            switch (i.label) {
                            case 0:
                                return !this.interstitialAdId || this.preloadedInterstitialAd ? [2] : t >= 3 ? [2, console.warn("Failed to preload interstitial ads 3 times in a row, no interstitial ads will be displayed in this session.")] : [4, this.sdk.ensureInit()];
                            case 1:
                                e = i.sent(),
                                i.label = 2;
                            case 2:
                                return i.trys.push([2, 4, , 5]),
                                [4, e.getInterstitialAdAsync(this.interstitialAdId)];
                            case 3:
                                return n = i.sent(),
                                [3, 5];
                            case 4:
                                return r = i.sent(),
                                a = r,
                                console.error("Failed to get interstitial (midgame) ad. Code: " + a.code + ", message: " + a.message),
                                setTimeout((function() {
                                    return s.preloadInterstitialAd(t + 1)
                                }
                                ), c),
                                [2];
                            case 5:
                                return i.trys.push([5, 7, , 8]),
                                [4, n.loadAsync()];
                            case 6:
                                return i.sent(),
                                [3, 8];
                            case 7:
                                return o = i.sent(),
                                a = o,
                                console.error("Failed to load interstitial (midgame) ad. Code: " + a.code + ", message: " + a.message),
                                setTimeout((function() {
                                    return s.preloadInterstitialAd(t + 1)
                                }
                                ), c),
                                [2];
                            case 8:
                                return this.preloadedInterstitialAd = n,
                                u.default.log("Interstitial (midgame) ad preloaded"),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.preloadRewardedAd = function(t) {
                    return r(this, void 0, void 0, (function() {
                        var e, n, r, o, a, s = this;
                        return i(this, (function(i) {
                            switch (i.label) {
                            case 0:
                                return !this.rewardedAdId || this.preloadedRewardedAd ? [2] : t >= 3 ? [2, console.warn("Failed to preload rewarded ads 3 times in a row, no rewarded ads will be displayed in this session.")] : [4, this.sdk.ensureInit()];
                            case 1:
                                e = i.sent(),
                                i.label = 2;
                            case 2:
                                return i.trys.push([2, 4, , 5]),
                                [4, e.getRewardedVideoAsync(this.rewardedAdId)];
                            case 3:
                                return n = i.sent(),
                                [3, 5];
                            case 4:
                                return r = i.sent(),
                                a = r,
                                console.error("Failed to get rewarded ad. Code: " + a.code + ", message: " + a.message),
                                setTimeout((function() {
                                    return s.preloadRewardedAd(t + 1)
                                }
                                ), c),
                                [2];
                            case 5:
                                return i.trys.push([5, 7, , 8]),
                                [4, n.loadAsync()];
                            case 6:
                                return i.sent(),
                                [3, 8];
                            case 7:
                                return o = i.sent(),
                                a = o,
                                console.error("Failed to load rewarded ad. Code: " + a.code + ", message: " + a.message),
                                setTimeout((function() {
                                    return s.preloadRewardedAd(t + 1)
                                }
                                ), c),
                                [2];
                            case 8:
                                return this.preloadedRewardedAd = n,
                                u.default.log("Rewarded ad preloaded"),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t
            }();
            e.default = l
        },
        983: function(t, e, n) {
            "use strict";
            var r = this && this.__awaiter || function(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function u(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function a(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(u, a)
                    }
                    s((r = r.apply(t, e || [])).next())
                }
                ))
            }
              , i = this && this.__generator || function(t, e) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; u; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [2 & o[0], i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(),
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2],
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(),
                                        u.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
              , o = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var u = o(n(71))
              , a = n(823)
              , s = n(871)
              , c = o(n(223))
              , l = function() {
                function t() {
                    this.initState = s.INIT_STATE.UNINITIALIZED,
                    this.initResolvers = [],
                    this._ad = new c.default(this)
                }
                return t.prototype.init = function(t) {
                    this.loadFbSdk(),
                    this._ad.init(t)
                }
                ,
                t.prototype.addInitCallback = function(t) {
                    return r(this, void 0, void 0, (function() {
                        return i(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.ensureInit()];
                            case 1:
                                return e.sent(),
                                t({
                                    gameLink: "",
                                    rafvertizingUrl: "",
                                    useTestAds: !1,
                                    systemInfo: {
                                        countryCode: "",
                                        browser: {
                                            name: "",
                                            version: ""
                                        },
                                        os: {
                                            name: "",
                                            version: ""
                                        },
                                        device: "desktop"
                                    },
                                    gameId: "",
                                    locale: "en-US",
                                    userAccountAvailable: !1
                                }),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.getEnvironment = function(t) {
                    return r(this, void 0, void 0, (function() {
                        var e = this;
                        return i(this, (function(n) {
                            return [2, (0,
                            a.callbackWrapper)((function() {
                                return r(e, void 0, void 0, (function() {
                                    return i(this, (function(t) {
                                        return [2, "facebook"]
                                    }
                                    ))
                                }
                                ))
                            }
                            ), t)]
                        }
                        ))
                    }
                    ))
                }
                ,
                Object.defineProperty(t.prototype, "ad", {
                    get: function() {
                        return this._ad
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "banner", {
                    get: function() {
                        return {
                            requestBanner: function(t, e) {
                                var n = this
                                  , o = "Responsive banner not supported with FacebookSDK";
                                return u.default.log(o),
                                (0,
                                a.callbackWrapper)((function() {
                                    return r(n, void 0, void 0, (function() {
                                        return i(this, (function(t) {
                                            throw new Error(o)
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ), e)
                            },
                            requestResponsiveBanner: function(t, e) {
                                var n = this
                                  , o = "Responsive banner not supported with FacebookSDK";
                                return u.default.log(o),
                                (0,
                                a.callbackWrapper)((function() {
                                    return r(n, void 0, void 0, (function() {
                                        return i(this, (function(t) {
                                            throw new Error(o)
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ), e)
                            },
                            requestOverlayBanners: function(t, e) {
                                throw new Error("Overlay banners not supported with FacebookSDK")
                            }
                        }
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "game", {
                    get: function() {
                        var t = this;
                        return {
                            happytime: function(t) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("Happytime is not supported with FacebookSDK")
                                }
                                ), t)
                            },
                            gameplayStart: function(t) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("Gameplay start is not supported with FacebookSDK")
                                }
                                ), t)
                            },
                            gameplayStop: function(t) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("Gameplay stop is not supported with FacebookSDK")
                                }
                                ), t)
                            },
                            sdkGameLoadingStart: function(t) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("Game load start from SDK is not supported with FacebookSDK")
                                }
                                ), t)
                            },
                            sdkGameLoadingStop: function(t) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("Game load stop from SDK is not supported with FacebookSDK")
                                }
                                ), t)
                            },
                            inviteLink: function(t, e) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("Invite link is not supported with FacebookSDK")
                                }
                                ), e)
                            },
                            setScreenshotHandlerAsync: function() {
                                return r(t, void 0, void 0, (function() {
                                    return i(this, (function(t) {
                                        throw new s.SDKError("Registering a screenshot handler is not supported with FacebookSDK")
                                    }
                                    ))
                                }
                                ))
                            },
                            setScreenshotHandler: function(t) {
                                return function() {}
                            }
                        }
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "user", {
                    get: function() {
                        return {
                            getUser: function(t) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("No user available with FacebookSDK")
                                }
                                ), t)
                            },
                            getSystemInfo: function(t) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("No system info available with FacebookSDK")
                                }
                                ), t)
                            },
                            showAuthPrompt: function(t) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("No user available with FacebookSDK")
                                }
                                ), t)
                            },
                            showAccountLinkPrompt: function(t) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("No account linking available with FacebookSDK")
                                }
                                ), t)
                            },
                            getUserToken: function(t) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("No user token available with FacebookSDK.")
                                }
                                ), t)
                            },
                            getXsollaUserToken: function(t) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("No Xsolla user token available with FacebookSDK.")
                                }
                                ), t)
                            },
                            addScore: function(t, e) {
                                var n = this;
                                return (0,
                                a.callbackWrapper)((function() {
                                    return r(n, void 0, void 0, (function() {
                                        return i(this, (function(t) {
                                            throw new s.SDKError("Game score is not supported with FacebookSDK")
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ), e)
                            },
                            addAuthListener: function(t) {},
                            removeAuthListener: function(t) {},
                            isUserAccountAvailable: function(t) {
                                var e = this;
                                return (0,
                                a.callbackWrapper)((function() {
                                    return r(e, void 0, void 0, (function() {
                                        return i(this, (function(t) {
                                            return [2, !1]
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ), t)
                            }
                        }
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.ensureInit = function() {
                    return r(this, void 0, void 0, (function() {
                        var t = this;
                        return i(this, (function(e) {
                            return this.initState === s.INIT_STATE.INITIALIZED ? [2, Promise.resolve(this.fbSdk)] : (this.loadFbSdk(),
                            [2, new Promise((function(e) {
                                t.initResolvers.push((function() {
                                    return r(t, void 0, void 0, (function() {
                                        return i(this, (function(t) {
                                            return e(this.fbSdk),
                                            [2]
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ))
                            }
                            ))])
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.loadFbSdk = function() {
                    var t, e, n;
                    return r(this, void 0, void 0, (function() {
                        return i(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return this.initState !== s.INIT_STATE.UNINITIALIZED ? [2] : (u.default.log("Loading FBInstant SDK"),
                                this.initState = s.INIT_STATE.REQUESTED,
                                [4, (0,
                                a.loadScript)("https://connect.facebook.net/en_US/fbinstant.7.1.js")]);
                            case 1:
                                return r.sent(),
                                this.fbSdk = window.FBInstant,
                                [4, null === (t = this.fbSdk) || void 0 === t ? void 0 : t.initializeAsync()];
                            case 2:
                                return r.sent(),
                                null === (e = this.fbSdk) || void 0 === e || e.setLoadingProgress(100),
                                [4, null === (n = this.fbSdk) || void 0 === n ? void 0 : n.startGameAsync()];
                            case 3:
                                return r.sent(),
                                this.initState = s.INIT_STATE.INITIALIZED,
                                this.initResolvers.length > 0 && (u.default.log("Calling init callbacks"),
                                this.initResolvers.forEach((function(t) {
                                    return t()
                                }
                                )),
                                this.initResolvers = []),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t
            }();
            e.default = l
        },
        608: function(t, e, n) {
            "use strict";
            var r = this && this.__awaiter || function(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function u(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function a(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(u, a)
                    }
                    s((r = r.apply(t, e || [])).next())
                }
                ))
            }
              , i = this && this.__generator || function(t, e) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; u; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [2 & o[0], i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(),
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2],
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(),
                                        u.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
              , o = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var u = o(n(71))
              , a = n(823)
              , s = function() {
                function t() {
                    this.requestInProgress = !1,
                    this.overlay = null
                }
                return t.prototype.init = function() {
                    this.overlay = document.createElement("div"),
                    this.overlay.id = "local-overlay",
                    this.createOverlayStyle(),
                    document.body.appendChild(this.overlay)
                }
                ,
                t.prototype.requestAd = function(t, e) {
                    return r(this, void 0, void 0, (function() {
                        return i(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return this.requestInProgress ? ((null == e ? void 0 : e.adError) ? (0,
                                a.wrapUserFn)(e.adError)("An ad request is already in progress") : (null == e ? void 0 : e.adFinished) && (0,
                                a.wrapUserFn)(e.adFinished)(),
                                [2]) : ((null == e ? void 0 : e.adStarted) && (0,
                                a.wrapUserFn)(e.adStarted)(),
                                [4, this.renderFakeAd(t)]);
                            case 1:
                                return n.sent(),
                                (null == e ? void 0 : e.adFinished) && (0,
                                a.wrapUserFn)(e.adFinished)(),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.hasAdblock = function(t) {
                    return (0,
                    a.callbackWrapper)((function() {
                        return Promise.resolve(!1)
                    }
                    ), t)
                }
                ,
                t.prototype.renderFakeAd = function(t) {
                    return r(this, void 0, void 0, (function() {
                        var e = this;
                        return i(this, (function(n) {
                            return u.default.log("requesting " + t + " ad"),
                            this.requestInProgress = !0,
                            this.showOverlay(),
                            // this.overlay.innerHTML = "<h1>A " + t + " ad would appear here</h1>",
                            this.overlay.innerHTML = "<h1>www.Games235.com</h1>",
                            [2, new Promise((function(t) {
                                window.setTimeout((function() {
                                    e.requestInProgress = !1,
                                    e.hideOverlay(),
                                    t()
                                }
                                ), 1000)
                            }
                            ))]
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.showOverlay = function() {
                    this.overlay.style.display = "flex"
                }
                ,
                t.prototype.hideOverlay = function() {
                    this.overlay.style.display = "none",
                    this.overlay.innerHTML = ""
                }
                ,
                t.prototype.createOverlayStyle = function() {
                    var t = {
                        position: "fixed",
                        display: "none",
                        inset: 0,
                        "font-family": "Arial, Helvetica, sans-serif",
                        color: "white",
                        "align-items": "center",
                        "justify-content": "center",
                        "background-color": "rgba(0,0,0,0.75)",
                        "z-index": "10000"
                    };
                    for (var e in t)
                        this.overlay.style[e] = t[e]
                }
                ,
                t
            }();
            e.default = s
        },
        216: function(t, e, n) {
            "use strict";
            var r = this && this.__awaiter || function(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function u(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function a(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(u, a)
                    }
                    s((r = r.apply(t, e || [])).next())
                }
                ))
            }
              , i = this && this.__generator || function(t, e) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; u; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [2 & o[0], i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(),
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2],
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(),
                                        u.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
              , o = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var u = n(81)
              , a = n(823)
              , s = o(n(71))
              , c = n(414)
              , l = function() {
                function t() {
                    this.disableBannerCheck = !1,
                    this.overlayBanners = {}
                }
                return t.prototype.requestBanner = function(t, e) {
                    var n = this;
                    return (0,
                    a.callbackWrapper)((function() {
                        return r(n, void 0, void 0, (function() {
                            return i(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return s.default.log("Requesting banner", t),
                                    [4, (0,
                                    u.getBannerContainer)(t.id, !this.disableBannerCheck)];
                                case 1:
                                    return e.sent(),
                                    (0,
                                    u.renderFakeBanner)(t),
                                    [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ), e)
                }
                ,
                t.prototype.requestResponsiveBanner = function(t, e) {
                    var n = this;
                    return (0,
                    a.callbackWrapper)((function() {
                        return r(n, void 0, void 0, (function() {
                            var e;
                            return i(this, (function(n) {
                                switch (n.label) {
                                case 0:
                                    return s.default.log("Requesting responsive banner", t),
                                    [4, (0,
                                    u.getBannerContainer)(t, !this.disableBannerCheck)];
                                case 1:
                                    return e = n.sent(),
                                    (0,
                                    u.renderFakeBanner)((0,
                                    u.getBannerForResponsive)(e)),
                                    [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ), e)
                }
                ,
                t.prototype.requestOverlayBanners = function(t, e) {
                    var n = this
                      , r = t.map((function(t) {
                        return t.id
                    }
                    ));
                    Object.keys(this.overlayBanners).forEach((function(t) {
                        r.includes(t) || (s.default.log("Remove overlay banner " + t),
                        n.overlayBanners[t].destroy(),
                        delete n.overlayBanners[t])
                    }
                    )),
                    t.forEach((function(t) {
                        if (n.overlayBanners[t.id])
                            s.default.log("Skip overlay banner update " + t.id);
                        else {
                            s.default.log("Create overlay banner " + t.id);
                            var r = new c.OverlayBanner(t,n.disableBannerCheck,n,e);
                            n.overlayBanners[t.id] = r
                        }
                    }
                    ))
                }
                ,
                t
            }();
            e.default = l
        },
        942: function(t, e, n) {
            "use strict";
            var r = this && this.__awaiter || function(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function u(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function a(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(u, a)
                    }
                    s((r = r.apply(t, e || [])).next())
                }
                ))
            }
              , i = this && this.__generator || function(t, e) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; u; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [2 & o[0], i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(),
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2],
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(),
                                        u.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
              , o = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var u = n(871)
              , a = o(n(71))
              , s = o(n(608))
              , c = o(n(216))
              , l = o(n(338))
              , f = n(823)
              , h = n(659)
              , d = function() {
                function t() {
                    var t = this;
                    this.initState = u.INIT_STATE.UNINITIALIZED,
                    this._ad = new s.default,
                    this._banner = new c.default,
                    this._user = new l.default,
                    this.gameLink = "https://www.crazygames.com/game/your-game-will-appear-here",
                    this.inviteLink = function(e, n) {
                        return (0,
                        f.callbackWrapper)((function() {
                            return r(t, void 0, void 0, (function() {
                                var t;
                                return i(this, (function(n) {
                                    return a.default.log("Requesting invite link"),
                                    t = (0,
                                    h.generateInviteLink)(e, this.gameLink),
                                    a.default.log("Invite link is " + t),
                                    [2, t]
                                }
                                ))
                            }
                            ))
                        }
                        ), n)
                    }
                }
                return t.prototype.init = function(t) {
                    a.default.log("Initializing local sdk"),
                    t && a.default.log("Init options", t),
                    this.initState !== u.INIT_STATE.INITIALIZED && (this.initState = u.INIT_STATE.INITIALIZED,
                    this._ad.init(),
                    this._banner.disableBannerCheck = "true" === (0,
                    f.getQueryStringValue)("disable_banner_check"))
                }
                ,
                t.prototype.addInitCallback = function(t) {
                    var e = !0;
                    "false" === (0,
                    f.getQueryStringValue)("user_account_available") && (e = !1),
                    t({
                        gameLink: "https://www.crazygames.com/game/yourFabulousGameHere",
                        rafvertizingUrl: "demo",
                        useTestAds: !1,
                        systemInfo: {
                            countryCode: "demo",
                            browser: {
                                name: "demo",
                                version: "demo"
                            },
                            os: {
                                name: "demo",
                                version: "demo"
                            },
                            device: "desktop"
                        },
                        gameId: "",
                        locale: "en-US",
                        userAccountAvailable: e
                    })
                }
                ,
                t.prototype.getEnvironment = function(t) {
                    return r(this, void 0, void 0, (function() {
                        var e = this;
                        return i(this, (function(n) {
                            return [2, (0,
                            f.callbackWrapper)((function() {
                                return r(e, void 0, void 0, (function() {
                                    return i(this, (function(t) {
                                        return [2, "local"]
                                    }
                                    ))
                                }
                                ))
                            }
                            ), t)]
                        }
                        ))
                    }
                    ))
                }
                ,
                Object.defineProperty(t.prototype, "ad", {
                    get: function() {
                        return this._ad
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "banner", {
                    get: function() {
                        return this._banner
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "user", {
                    get: function() {
                        return this._user
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "game", {
                    get: function() {
                        var t = this;
                        return {
                            happytime: function(t) {
                                var e = this;
                                return (0,
                                f.callbackWrapper)((function() {
                                    return r(e, void 0, void 0, (function() {
                                        return i(this, (function(t) {
                                            return a.default.log("Local happy time"),
                                            [2]
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ), t)
                            },
                            gameplayStart: function(t) {
                                var e = this;
                                return (0,
                                f.callbackWrapper)((function() {
                                    return r(e, void 0, void 0, (function() {
                                        return i(this, (function(t) {
                                            return a.default.log("Local gameplay start"),
                                            [2]
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ), t)
                            },
                            gameplayStop: function(t) {
                                var e = this;
                                return (0,
                                f.callbackWrapper)((function() {
                                    return r(e, void 0, void 0, (function() {
                                        return i(this, (function(t) {
                                            return a.default.log("Local gameplay stop"),
                                            [2]
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ), t)
                            },
                            sdkGameLoadingStart: function(t) {
                                var e = this;
                                return (0,
                                f.callbackWrapper)((function() {
                                    return r(e, void 0, void 0, (function() {
                                        return i(this, (function(t) {
                                            return a.default.log("Local sdk game load start"),
                                            [2]
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ), t)
                            },
                            sdkGameLoadingStop: function(t) {
                                var e = this;
                                return (0,
                                f.callbackWrapper)((function() {
                                    return r(e, void 0, void 0, (function() {
                                        return i(this, (function(t) {
                                            return a.default.log("Local sdk game load stop"),
                                            [2]
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ), t)
                            },
                            inviteLink: this.inviteLink,
                            setScreenshotHandlerAsync: function() {
                                return r(t, void 0, void 0, (function() {
                                    return i(this, (function(t) {
                                        return a.default.log("Register local screenshot handler"),
                                        [2, function() {}
                                        ]
                                    }
                                    ))
                                }
                                ))
                            },
                            setScreenshotHandler: function(t) {
                                return function() {}
                            }
                        }
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t
            }();
            e.default = d
        },
        338: function(t, e, n) {
            "use strict";
            var r = this && this.__awaiter || function(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function u(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function a(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(u, a)
                    }
                    s((r = r.apply(t, e || [])).next())
                }
                ))
            }
              , i = this && this.__generator || function(t, e) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; u; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [2 & o[0], i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(),
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2],
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(),
                                        u.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
              , o = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var u = n(823)
              , a = o(n(71))
              , s = function() {
                function t() {
                    this.systemInfo = {
                        browser: {
                            name: "Chrome",
                            version: "89.0.0.0"
                        },
                        countryCode: "FR",
                        os: {
                            name: "Windows",
                            version: "10"
                        },
                        device: "desktop"
                    },
                    this.demoUser1 = {
                        id: "idUser1",
                        username: "User1",
                        profilePictureUrl: "https://images.crazygames.com/userportal/avatars/1.png"
                    },
                    this.demoUser2 = {
                        id: "idUser2",
                        username: "User2",
                        profilePictureUrl: "https://images.crazygames.com/userportal/avatars/2.png"
                    },
                    this.user1Token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJpZFVzZXIxIiwidXNlcm5hbWUiOiJVc2VyMSIsImdhbWVJZCI6InlvdXJHYW1lSWQiLCJwcm9maWxlUGljdHVyZVVybCI6Imh0dHBzOi8vaW1hZ2VzLmNyYXp5Z2FtZXMuY29tL3VzZXJwb3J0YWwvYXZhdGFycy8xLnBuZyIsImlhdCI6MTY2ODU5MzMxNCwiZXhwIjo0ODI0Mjg4NTE0fQ.u4N2DzCC6Vmo6Gys-XSl8rHQR0NUJAcWQWr29eLd54qMDPbCopPG0kye8TAidOU6dWAqNWO_kERbl75nTxNcJjbW4yqBS_bIPingIhuCCJsjvnQPkalfmVotmoZGQP21Q9MyZPfpjZNogioA3a0vm6APXAqzudTA9lTioztnT4YvgndISngOMQVNoDCJ_DgCbKy8GFQDcCN-AHFFb0WIVWiTYszv-9JZohUzULt-ueYL31pXVGHQ5C4rHESEg7LYzx1IaLKw1zcoYGxul0RxR35nm3yD_bGa6fQVzCfnKnhEBRifUZsIN1LfIHfNB23ZOh1llG7PEOdvtCSfIxP9ZK6t4gRkGn1VsqZFAMhq1LgJebO8hcm_Iqx0wF3WkdMysoQuWThTNKnwmphv9pguuALILYJluUP8UQll3qiF6gzoLPy1MfD_9l4TPZeP9Bv50B-Tm6Lk3OW248jyuFRKP_VgwZutTb5pJ7LggFcqWFXsBv5ZG3V2zsfVwpAPDhpmb4ykjoB2xLSuxjrvs1dzMhl02QAQjqTUgHj4fstgX-2jYowDyyPjj6JbT2ZC7vrrdmPvc8AcNvyCszamfRYjexElGaeJDDt6vtRuJw_JVwsCLaYHGif4UaKCoe6BECg3mRVUkH08Nm-qQPQw9slpYZmxckFEQQPCGkkPhgOBFkE",
                    this.user2Token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJpZFVzZXIyIiwidXNlcm5hbWUiOiJVc2VyMiIsImdhbWVJZCI6InlvdXJHYW1lSWQiLCJwcm9maWxlUGljdHVyZVVybCI6Imh0dHBzOi8vaW1hZ2VzLmNyYXp5Z2FtZXMuY29tL3VzZXJwb3J0YWwvYXZhdGFycy8yLnBuZyIsImlhdCI6MTY2ODU5MzMxNCwiZXhwIjo0ODI0Mjg4NTE0fQ.kh60HYKR8txKvLoCB6dQ9hQG8Mu1UgtneTGs3Y15HvBWrZoLKp3x3pTf_Vhq8xzs7fQYJKr94zYAxxFRztHey7Tv7PBBmPESUFo8Le-_s2xDy982sFhpM6XDt84ohhvEuJEsOW8wIcCaCK6wzm6UWY6n1bpw1cO1KNASyZRSkDRhfyzDVJ5e167OLgGe3euodTHgClJPDv0ZYhle9KH86PepWamCm0429VrzyOu6QdbtFcRlRNZVnTtgNrCpyvss4AyDhnY5qV9yng7xHVt4zlocP_Z7btBL_kxrzYskhJi6KYuQAYmqLxqHSDnehlIvgO4cdEpJA_FOTeACTohhEu8zjXRrfdAFvEe0W6qqUo5HNFoElRoxYWf11WGSdrJCjpF4Qei9BPgprFaVH2Xi-ITAjKyElQxeKs5p6VmvaMAGwdqZgM4fm7OSex8QQGK0HFJ7wFoCTV5PLl-MBVvTSTfemJMWEwc8od124gwT_uGdDKrASovT2pijgBsAi3jxwgfEr1RPq8uCgZtksrTqaAM9TMv9Z6Zv35pdgTrWzTrOn-G-uc4EPZq7iQaEnglWEFj8Qsm_nMQMgtIM7MYG8KwPC4if3-Yc8KwaAL_taVvkqyMaV3W5j4MX9b1bbf_fw3jrGt74MACb7FtgzKudxoz2CXKZqTppadxS_IOnlMk",
                    this.expiredToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJpZFVzZXIxIiwidXNlcm5hbWUiOiJVc2VyMSIsImdhbWVJZCI6InlvdXJHYW1lSWQiLCJwcm9maWxlUGljdHVyZVVybCI6Imh0dHBzOi8vaW1hZ2VzLmNyYXp5Z2FtZXMuY29tL3VzZXJwb3J0YWwvYXZhdGFycy8xLnBuZyIsImlhdCI6MTY2ODU5MzQ5MSwiZXhwIjoxNjY4NTkzNDkyfQ.l_0cyeD-suEM7n9l-Vb2nP5vTJi-e3HwZQWLUESJMdVTX1zPDuQhwnSgHhcGVGFnhG5Wvtni-ElpM8HnVNvY7hRthbeP23n2ScAJBvAX10vrzPuLJRn_Nj_5GcRQpK4fH813Ij8ZWuOaS2hD4gKaEUessZs5n5hNBTQN9T5j4wkNvfhuw9vqtVOha2aPveqeVy1eA5XAWI7IirHi31-Dw60MSVgsp3r4tpYEHTlUPktzLsQvO9Sk9IE7iybg9ycoFoS6L1eAvxGWVF1BMHRerPwdOV9CN0rtrqrTM3pyb1fpmFfgQpoA8AgPuVrU58mwyeTpUQ4WSrPrltGjxxfiGQOATBDBrJk5V173BfUgBEgAEP0TifWAQt02iijJa9G6q-V8p0GWto1EYSdvEDmG0YhoRBVxnOQH3U1Fu0yxMWGMm9VmZVVhVN8PpLjitEhP4Gn33IafpS05d1-Q0NFMb9-FvQCdtXjTaGbaBVIeBN-aO0r4ERvoBE9R0AUrywd9Z2zK_qKRvp35NyryLjnedsYt5Xrc9TA2uDMR77TjByyqsdQ_qv4zhLfhuiMiweXyPfYzltAiNJmEUohxlP7OvH33B6xpT7Qz2ZyEeMHBrQRQGGlT6MowcMYx_2LFNSK8PwZJNlMs0Uw_uCIu-4TvqleVleIg7sLhWiijw1cxtmM"
                }
                return t.prototype.showAuthPrompt = function(t) {
                    var e = this;
                    switch (a.default.log("Requesting auth prompt", t),
                    (0,
                    u.getQueryStringValue)("show_auth_prompt_response")) {
                    case "user1":
                    default:
                        return (0,
                        u.callbackWrapper)((function() {
                            return r(e, void 0, void 0, (function() {
                                return i(this, (function(t) {
                                    return [2, this.demoUser1]
                                }
                                ))
                            }
                            ))
                        }
                        ), t);
                    case "user2":
                        return (0,
                        u.callbackWrapper)((function() {
                            return r(e, void 0, void 0, (function() {
                                return i(this, (function(t) {
                                    return [2, this.demoUser2]
                                }
                                ))
                            }
                            ))
                        }
                        ), t);
                    case "user_cancelled":
                        return (0,
                        u.callbackWrapper)((function() {
                            return r(e, void 0, void 0, (function() {
                                return i(this, (function(t) {
                                    throw new Error("userCancelled")
                                }
                                ))
                            }
                            ))
                        }
                        ), t)
                    }
                }
                ,
                t.prototype.showAccountLinkPrompt = function(t) {
                    var e = this;
                    switch (a.default.log("Requesting link account prompt", t),
                    (0,
                    u.getQueryStringValue)("link_account_response")) {
                    case "yes":
                    default:
                        return (0,
                        u.callbackWrapper)((function() {
                            return r(e, void 0, void 0, (function() {
                                return i(this, (function(t) {
                                    return [2, {
                                        response: "yes"
                                    }]
                                }
                                ))
                            }
                            ))
                        }
                        ), t);
                    case "no":
                        return (0,
                        u.callbackWrapper)((function() {
                            return r(e, void 0, void 0, (function() {
                                return i(this, (function(t) {
                                    return [2, {
                                        response: "no"
                                    }]
                                }
                                ))
                            }
                            ))
                        }
                        ), t);
                    case "logged_out":
                        return (0,
                        u.callbackWrapper)((function() {
                            return r(e, void 0, void 0, (function() {
                                return i(this, (function(t) {
                                    throw new Error("userNotAuthenticated")
                                }
                                ))
                            }
                            ))
                        }
                        ), t)
                    }
                }
                ,
                t.prototype.getUser = function(t) {
                    var e = this;
                    switch (a.default.log("Get user", t),
                    (0,
                    u.getQueryStringValue)("user_response")) {
                    case "user1":
                    default:
                        return (0,
                        u.callbackWrapper)((function() {
                            return r(e, void 0, void 0, (function() {
                                return i(this, (function(t) {
                                    return [2, this.demoUser1]
                                }
                                ))
                            }
                            ))
                        }
                        ), t);
                    case "user2":
                        return (0,
                        u.callbackWrapper)((function() {
                            return r(e, void 0, void 0, (function() {
                                return i(this, (function(t) {
                                    return [2, this.demoUser2]
                                }
                                ))
                            }
                            ))
                        }
                        ), t);
                    case "logged_out":
                        return (0,
                        u.callbackWrapper)((function() {
                            return r(e, void 0, void 0, (function() {
                                return i(this, (function(t) {
                                    return [2, null]
                                }
                                ))
                            }
                            ))
                        }
                        ), t)
                    }
                }
                ,
                t.prototype.getSystemInfo = function(t) {
                    var e = this;
                    return a.default.log("Get system info", t),
                    (0,
                    u.callbackWrapper)((function() {
                        return r(e, void 0, void 0, (function() {
                            return i(this, (function(t) {
                                return [2, this.systemInfo]
                            }
                            ))
                        }
                        ))
                    }
                    ), t)
                }
                ,
                t.prototype.getUserToken = function(t) {
                    var e = this;
                    switch (a.default.log("Get user token", t),
                    (0,
                    u.getQueryStringValue)("token_response")) {
                    case "user1":
                    default:
                        return (0,
                        u.callbackWrapper)((function() {
                            return r(e, void 0, void 0, (function() {
                                return i(this, (function(t) {
                                    return [2, this.user1Token]
                                }
                                ))
                            }
                            ))
                        }
                        ), t);
                    case "user2":
                        return (0,
                        u.callbackWrapper)((function() {
                            return r(e, void 0, void 0, (function() {
                                return i(this, (function(t) {
                                    return [2, this.user2Token]
                                }
                                ))
                            }
                            ))
                        }
                        ), t);
                    case "expired_token":
                        return (0,
                        u.callbackWrapper)((function() {
                            return r(e, void 0, void 0, (function() {
                                return i(this, (function(t) {
                                    return [2, this.expiredToken]
                                }
                                ))
                            }
                            ))
                        }
                        ), t);
                    case "logged_out":
                        return (0,
                        u.callbackWrapper)((function() {
                            return r(e, void 0, void 0, (function() {
                                return i(this, (function(t) {
                                    throw new Error("userNotAuthenticated")
                                }
                                ))
                            }
                            ))
                        }
                        ), t)
                    }
                }
                ,
                t.prototype.getXsollaUserToken = function(t) {
                    var e = this;
                    return a.default.log("Get Xsolla user token", t),
                    (0,
                    u.callbackWrapper)((function() {
                        return r(e, void 0, void 0, (function() {
                            return i(this, (function(t) {
                                return [2, "Demo local Xsolla token"]
                            }
                            ))
                        }
                        ))
                    }
                    ), t)
                }
                ,
                t.prototype.addScore = function(t, e) {
                    var n = this;
                    return a.default.log("Requesting to addScore", t, e),
                    (0,
                    u.callbackWrapper)((function() {
                        return r(n, void 0, void 0, (function() {
                            return i(this, (function(t) {
                                return [2]
                            }
                            ))
                        }
                        ))
                    }
                    ), e)
                }
                ,
                t.prototype.addAuthListener = function(t) {}
                ,
                t.prototype.removeAuthListener = function(t) {}
                ,
                t.prototype.isUserAccountAvailable = function(t) {
                    var e = this;
                    return (0,
                    u.callbackWrapper)((function() {
                        return r(e, void 0, void 0, (function() {
                            return i(this, (function(t) {
                                return [2, !0]
                            }
                            ))
                        }
                        ))
                    }
                    ), t)
                }
                ,
                t
            }();
            e.default = s
        },
        245: function(t, e) {
            "use strict";
            var n = this && this.__awaiter || function(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function u(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function a(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(u, a)
                    }
                    s((r = r.apply(t, e || [])).next())
                }
                ))
            }
              , r = this && this.__generator || function(t, e) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; u; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [2 & o[0], i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(),
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2],
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(),
                                        u.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function() {
                function t(t) {
                    this.sdkInitializer = t,
                    this.initCallbacks = []
                }
                return t.prototype.getEnvironment = function(t) {
                    return n(this, void 0, void 0, (function() {
                        return r(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.sdkInitializer.ensureInit()];
                            case 1:
                                return e.sent(),
                                [2, this.sdkInitializer.getInstance().getEnvironment(t)]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.init = function() {}
                ,
                t.prototype.addInitCallback = function(t) {
                    this.initCallbacks.push(t)
                }
                ,
                t.prototype.forwardInitCallbacks = function(t) {
                    this.initCallbacks.forEach((function(e) {
                        return t.addInitCallback(e)
                    }
                    )),
                    this.initCallbacks = []
                }
                ,
                Object.defineProperty(t.prototype, "ad", {
                    get: function() {
                        var t = this;
                        return {
                            requestAd: function(e, i) {
                                return n(t, void 0, void 0, (function() {
                                    return r(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.sdkInitializer.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            [2, this.sdkInitializer.getInstance().ad.requestAd(e, i)]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            hasAdblock: function(e) {
                                return n(t, void 0, void 0, (function() {
                                    return r(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.sdkInitializer.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            [2, this.sdkInitializer.getInstance().ad.hasAdblock(e)]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                        }
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "banner", {
                    get: function() {
                        var t = this;
                        return {
                            requestBanner: function(e, i) {
                                return n(t, void 0, void 0, (function() {
                                    return r(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.sdkInitializer.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            [2, this.sdkInitializer.getInstance().banner.requestBanner(e, i)]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            requestResponsiveBanner: function(e, i) {
                                return n(t, void 0, void 0, (function() {
                                    return r(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.sdkInitializer.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            [2, this.sdkInitializer.getInstance().banner.requestResponsiveBanner(e, i)]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            requestOverlayBanners: function(e, i) {
                                return n(t, void 0, void 0, (function() {
                                    return r(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.sdkInitializer.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            [2, this.sdkInitializer.getInstance().banner.requestOverlayBanners(e, i)]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                        }
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "game", {
                    get: function() {
                        var t = this;
                        return {
                            happytime: function(e) {
                                return n(t, void 0, void 0, (function() {
                                    return r(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.sdkInitializer.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            [2, this.sdkInitializer.getInstance().game.happytime(e)]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            gameplayStart: function(e) {
                                return n(t, void 0, void 0, (function() {
                                    return r(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.sdkInitializer.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            [2, this.sdkInitializer.getInstance().game.gameplayStart(e)]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            gameplayStop: function(e) {
                                return n(t, void 0, void 0, (function() {
                                    return r(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.sdkInitializer.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            [2, this.sdkInitializer.getInstance().game.gameplayStop(e)]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            sdkGameLoadingStart: function(e) {
                                return n(t, void 0, void 0, (function() {
                                    return r(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.sdkInitializer.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            [2, this.sdkInitializer.getInstance().game.sdkGameLoadingStart(e)]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            sdkGameLoadingStop: function(e) {
                                return n(t, void 0, void 0, (function() {
                                    return r(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.sdkInitializer.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            [2, this.sdkInitializer.getInstance().game.sdkGameLoadingStop(e)]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            inviteLink: function(e, i) {
                                return n(t, void 0, void 0, (function() {
                                    return r(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.sdkInitializer.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            [2, this.sdkInitializer.getInstance().game.inviteLink(e, i)]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            setScreenshotHandlerAsync: function(e) {
                                return n(t, void 0, void 0, (function() {
                                    return r(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.sdkInitializer.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            [4, this.sdkInitializer.getInstance().game.setScreenshotHandlerAsync(e)];
                                        case 2:
                                            return [2, t.sent()]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            setScreenshotHandler: function(t) {
                                return console.log("setScreenshotHandler is not supported anymore, please update your SDK."),
                                function() {
                                    console.log("setScreenshotHandler is not supported anymore, please update your SDK.")
                                }
                            }
                        }
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "user", {
                    get: function() {
                        var t = this;
                        return {
                            getUser: function(e) {
                                return n(t, void 0, void 0, (function() {
                                    return r(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.sdkInitializer.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            [4, this.sdkInitializer.getInstance().user.getUser(e)];
                                        case 2:
                                            return [2, t.sent()]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            getSystemInfo: function(e) {
                                return n(t, void 0, void 0, (function() {
                                    return r(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.sdkInitializer.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            [4, this.sdkInitializer.getInstance().user.getSystemInfo(e)];
                                        case 2:
                                            return [2, t.sent()]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            showAuthPrompt: function(e) {
                                return n(t, void 0, void 0, (function() {
                                    return r(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.sdkInitializer.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            [4, this.sdkInitializer.getInstance().user.showAuthPrompt(e)];
                                        case 2:
                                            return [2, t.sent()]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            showAccountLinkPrompt: function(e) {
                                return n(t, void 0, void 0, (function() {
                                    return r(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.sdkInitializer.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            [4, this.sdkInitializer.getInstance().user.showAccountLinkPrompt(e)];
                                        case 2:
                                            return [2, t.sent()]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            addAuthListener: function(e) {
                                return n(t, void 0, void 0, (function() {
                                    return r(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.sdkInitializer.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            this.sdkInitializer.getInstance().user.addAuthListener(e),
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            removeAuthListener: function(e) {
                                return n(t, void 0, void 0, (function() {
                                    return r(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.sdkInitializer.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            this.sdkInitializer.getInstance().user.removeAuthListener(e),
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            getUserToken: function(e) {
                                return n(t, void 0, void 0, (function() {
                                    return r(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.sdkInitializer.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            [2, this.sdkInitializer.getInstance().user.getUserToken(e)]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            getXsollaUserToken: function(e) {
                                return n(t, void 0, void 0, (function() {
                                    return r(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.sdkInitializer.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            [2, this.sdkInitializer.getInstance().user.getXsollaUserToken(e)]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            addScore: function(e, i) {
                                return n(t, void 0, void 0, (function() {
                                    return r(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.sdkInitializer.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            [2, this.sdkInitializer.getInstance().user.addScore(e, i)]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            isUserAccountAvailable: function(e) {
                                return n(t, void 0, void 0, (function() {
                                    return r(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.sdkInitializer.ensureInit()];
                                        case 1:
                                            return t.sent(),
                                            [2, this.sdkInitializer.getInstance().user.isUserAccountAvailable(e)]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                        }
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t
            }();
            e.default = i
        },
        724: function(t, e, n) {
            "use strict";
            var r = this && this.__awaiter || function(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function u(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function a(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(u, a)
                    }
                    s((r = r.apply(t, e || [])).next())
                }
                ))
            }
              , i = this && this.__generator || function(t, e) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; u; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [2 & o[0], i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(),
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2],
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(),
                                        u.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
              , o = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.SDKInitializer = void 0;
            var u = o(n(71))
              , a = o(n(273))
              , s = o(n(942))
              , c = o(n(799))
              , l = n(823)
              , f = o(n(176))
              , h = o(n(983))
              , d = o(n(245))
              , p = n(719)
              , v = n(412)
              , y = function() {
                function t() {
                    this.proxyInstance = new d.default(this),
                    this.initResolvers = [],
                    this.crazyGamesCheckResolver = function() {}
                    ,
                    this.isOnCrazyGames = !1,
                    this.initializeSDK()
                }
                return t.prototype.isYandex = function() {
                    return r(this, void 0, void 0, (function() {
                        return i(this, (function(t) {
                            try {
                                return [2, window.location.origin.endsWith("yandex.net") || "true" === (0,
                                l.getQueryStringValue)("useYandexSdk")]
                            } catch (t) {
                                return console.error("Crazygames SDK failed to detect Yandex domain", t),
                                [2, !1]
                            }
                            return [2]
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.isFacebook = function() {
                    return r(this, void 0, void 0, (function() {
                        return i(this, (function(t) {
                            try {
                                return [2, window.location.origin.endsWith("apps.fbsbx.com") || "true" === (0,
                                l.getQueryStringValue)("useFacebookSdk")]
                            } catch (t) {
                                return console.error("Crazygames SDK failed to detect Facebook domain", t),
                                [2, !1]
                            }
                            return [2]
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.isLocalhost = function() {
                    return r(this, void 0, void 0, (function() {
                        return i(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return [4, (0,
                                p.wait)(500)];
                            case 1:
                                return t.sent(),
                                [2, ["localhost", "127.0.0.1"].includes("localhost") || "true" === (0,
                                l.getQueryStringValue)("useLocalSdk")]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.isCrazyGames = function() {
                    return r(this, void 0, void 0, (function() {
                        var t, e, n = this;
                        return i(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return window.addEventListener("message", (function(t) {
                                    return n.crazyGamesGfCheckListener(t)
                                }
                                ), !1),
                                t = {
                                    type: "checkCrazyGamesGF"
                                },
                                window.postMessage(t, "*"),
                                window.parent.postMessage(t, "*"),
                                window.parent.parent.postMessage(t, "*"),
                                window.parent.parent.parent.postMessage(t, "*"),
                                e = new Promise((function(t) {
                                    n.crazyGamesCheckResolver = t
                                }
                                )),
                                [4, Promise.race([e, (0,
                                p.wait)(1e3)])];
                            case 1:
                                return r.sent(),
                                window.removeEventListener("message", this.crazyGamesGfCheckListener),
                                [2, this.isOnCrazyGames]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.crazyGamesGfCheckListener = function(t) {
                    "crazyGamesGFConfirmation" === t.data.type && (this.isOnCrazyGames = !0,
                    this.crazyGamesCheckResolver())
                }
                ,
                t.prototype.getProxy = function() {
                    return this.proxyInstance
                }
                ,
                t.prototype.getInstance = function() {
                    return this.realInstance
                }
                ,
                t.prototype.initializeSDK = function() {
                    return r(this, void 0, void 0, (function() {
                        var t, e, n, r, o, l, d, p;
                        return i(this, (function(i) {
                            switch (i.label) {
                            case 0:
                                return [4, Promise.all([this.isCrazyGames(), this.isLocalhost(), this.isFacebook(), this.isYandex()])];
                            case 1:
                                return t = i.sent(),
                                e = t[0],
                                n = t[1],
                                r = t[2],
                                o = t[3],
                                n ? (u.default.setDebug(!0),
                                this.realInstance = new s.default) : this.realInstance = e ? new a.default : o ? new c.default : r ? new h.default : new f.default,
                                l = window.crazySdkInitOptions,
                                [4, this.realInstance.getEnvironment()];
                            case 2:
                                return d = i.sent(),
                                p = v.SDK_VERSION,
                                console.log("CrazyGames HTML SDK", {
                                    environment: d,
                                    version: p,
                                    initOptions: l
                                }),
                                this.proxyInstance.forwardInitCallbacks(this.realInstance),
                                this.realInstance.init(l),
                                this.onInitialized(),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.onInitialized = function() {
                    u.default.log("SDK initialized, forwarding " + this.initResolvers.length + " cached calls"),
                    this.initResolvers.length > 0 && (this.initResolvers.forEach((function(t) {
                        return t()
                    }
                    )),
                    this.initResolvers = [])
                }
                ,
                t.prototype.ensureInit = function() {
                    return r(this, void 0, void 0, (function() {
                        var t = this;
                        return i(this, (function(e) {
                            return this.realInstance ? [2, Promise.resolve()] : [2, new Promise((function(e) {
                                t.initResolvers.push((function() {
                                    return r(t, void 0, void 0, (function() {
                                        return i(this, (function(t) {
                                            return e(),
                                            [2]
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ))
                            }
                            ))]
                        }
                        ))
                    }
                    ))
                }
                ,
                t
            }();
            e.SDKInitializer = y
        },
        769: function(t, e, n) {
            "use strict";
            var r = this && this.__awaiter || function(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function u(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function a(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(u, a)
                    }
                    s((r = r.apply(t, e || [])).next())
                }
                ))
            }
              , i = this && this.__generator || function(t, e) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; u; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [2 & o[0], i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(),
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2],
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(),
                                        u.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
              , o = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var u = o(n(71))
              , a = n(823)
              , s = n(871)
              , c = function() {
                function t(t) {
                    this.sdk = t,
                    this.requestInProgress = !1,
                    this.throttleMidroll = !1,
                    this.throttleRewarded = !1,
                    this._onRewardedCalled = !1
                }
                return t.prototype.requestAd = function(t, e) {
                    return r(this, void 0, void 0, (function() {
                        return i(this, (function(n) {
                            return u.default.log("Requesting " + t + " ad"),
                            this.requestInProgress && (null == e ? void 0 : e.adError) && (0,
                            a.wrapUserFn)(e.adError)("An ad request is already in progress"),
                            this.requestInProgress = !0,
                            "rewarded" === t ? [2, this.requestRewardedAd(e)] : [2, this.requestMidrollAd(e)]
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.hasAdblock = function(t) {
                    return (0,
                    a.callbackWrapper)((function() {
                        return Promise.resolve(!1)
                    }
                    ), t)
                }
                ,
                t.prototype.handleAdError = function(t, e) {
                    this.requestInProgress = !1,
                    (null == e ? void 0 : e.adError) ? (0,
                    a.wrapUserFn)(e.adError)(t.toString()) : (null == e ? void 0 : e.adFinished) && (0,
                    a.wrapUserFn)(e.adFinished)()
                }
                ,
                t.prototype.handleAdFinished = function(t) {
                    this.requestInProgress = !1,
                    (null == t ? void 0 : t.adFinished) && (0,
                    a.wrapUserFn)(t.adFinished)()
                }
                ,
                t.prototype.handleAdStarted = function(t) {
                    (null == t ? void 0 : t.adStarted) && (0,
                    a.wrapUserFn)(null == t ? void 0 : t.adStarted)()
                }
                ,
                t.prototype.requestMidrollAd = function(t) {
                    return r(this, void 0, void 0, (function() {
                        var e, n = this;
                        return i(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return [4, this.sdk.ensureInit()];
                            case 1:
                                return e = r.sent(),
                                this.throttleMidroll ? (this.handleAdError("Please wait " + s.DEFAULT_MIN_TIME_BETWEEN_MIDROLL_MS / 1e3 + " seconds between two midroll ads", t),
                                [2]) : (e.adv.showFullscreenAdv({
                                    callbacks: {
                                        onOpen: function() {
                                            n.throttleMidroll = !0,
                                            setTimeout((function() {
                                                return n.throttleMidroll = !1
                                            }
                                            ), s.DEFAULT_MIN_TIME_BETWEEN_MIDROLL_MS),
                                            n.handleAdStarted(t)
                                        },
                                        onClose: function() {
                                            n.handleAdFinished(t)
                                        },
                                        onError: function(e) {
                                            n.handleAdError(e, t)
                                        }
                                    }
                                }),
                                [2])
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.requestRewardedAd = function(t) {
                    return r(this, void 0, void 0, (function() {
                        var e, n = this;
                        return i(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return [4, this.sdk.ensureInit()];
                            case 1:
                                return e = r.sent(),
                                this.throttleRewarded ? (this.handleAdError("Please wait " + s.DEFAULT_MIN_TIME_BETWEEN_REWARDED_MS / 1e3 + " seconds between two rewarded ads", t),
                                [2]) : (this._onRewardedCalled = !1,
                                e.adv.showRewardedVideo({
                                    callbacks: {
                                        onOpen: function() {
                                            n.throttleRewarded = !0,
                                            setTimeout((function() {
                                                return n.throttleRewarded = !1
                                            }
                                            ), s.DEFAULT_MIN_TIME_BETWEEN_REWARDED_MS),
                                            n.handleAdStarted(t)
                                        },
                                        onRewarded: function() {
                                            n._onRewardedCalled || (n._onRewardedCalled = !0,
                                            n.handleAdFinished(t))
                                        },
                                        onClose: function() {
                                            n._onRewardedCalled || (n._onRewardedCalled = !0,
                                            n.handleAdFinished(t))
                                        },
                                        onError: function(e) {
                                            n.handleAdError(e, t)
                                        }
                                    }
                                }),
                                [2])
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t
            }();
            e.default = c
        },
        799: function(t, e, n) {
            "use strict";
            var r = this && this.__awaiter || function(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function u(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function a(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(u, a)
                    }
                    s((r = r.apply(t, e || [])).next())
                }
                ))
            }
              , i = this && this.__generator || function(t, e) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; u; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [2 & o[0], i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(),
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2],
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(),
                                        u.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
              , o = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var u = o(n(71))
              , a = n(823)
              , s = n(871)
              , c = o(n(769))
              , l = function() {
                function t() {
                    this.initState = s.INIT_STATE.UNINITIALIZED,
                    this.yandexPromise = null,
                    this._ad = new c.default(this)
                }
                return t.prototype.init = function() {
                    this.initState === s.INIT_STATE.UNINITIALIZED && this.installYandex()
                }
                ,
                t.prototype.addInitCallback = function(t) {
                    var e;
                    return r(this, void 0, void 0, (function() {
                        return i(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, this.ensureInit()];
                            case 1:
                                return n.sent(),
                                t({
                                    gameLink: "",
                                    rafvertizingUrl: "",
                                    useTestAds: !1,
                                    systemInfo: {
                                        countryCode: "",
                                        browser: {
                                            name: "",
                                            version: ""
                                        },
                                        os: {
                                            name: "",
                                            version: ""
                                        },
                                        device: "desktop"
                                    },
                                    gameId: "",
                                    locale: (null === (e = this.yandexSDKObj) || void 0 === e ? void 0 : e.environment.i18n.lang) || "en-US",
                                    userAccountAvailable: !1
                                }),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.getEnvironment = function(t) {
                    return r(this, void 0, void 0, (function() {
                        var e = this;
                        return i(this, (function(n) {
                            return [2, (0,
                            a.callbackWrapper)((function() {
                                return r(e, void 0, void 0, (function() {
                                    return i(this, (function(t) {
                                        return [2, "yandex"]
                                    }
                                    ))
                                }
                                ))
                            }
                            ), t)]
                        }
                        ))
                    }
                    ))
                }
                ,
                Object.defineProperty(t.prototype, "ad", {
                    get: function() {
                        return this._ad
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "banner", {
                    get: function() {
                        return {
                            requestBanner: function(t, e) {
                                var n = this
                                  , o = "Responsive banner not supported with YandexSDK";
                                return u.default.log(o),
                                (0,
                                a.callbackWrapper)((function() {
                                    return r(n, void 0, void 0, (function() {
                                        return i(this, (function(t) {
                                            throw new Error(o)
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ), e)
                            },
                            requestResponsiveBanner: function(t, e) {
                                var n = this
                                  , o = "Responsive banner not supported with YandexSDK";
                                return u.default.log(o),
                                (0,
                                a.callbackWrapper)((function() {
                                    return r(n, void 0, void 0, (function() {
                                        return i(this, (function(t) {
                                            throw new Error(o)
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ), e)
                            },
                            requestOverlayBanners: function(t, e) {
                                throw new Error("Overlay banners not supported with Yandex")
                            }
                        }
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "game", {
                    get: function() {
                        return {
                            happytime: function(t) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("Happytime is not supported with YandexSDK")
                                }
                                ), t)
                            },
                            gameplayStart: function(t) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("Gameplay start is not supported with YandexSDK")
                                }
                                ), t)
                            },
                            gameplayStop: function(t) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("Gameplay stop is not supported with YandexSDK")
                                }
                                ), t)
                            },
                            sdkGameLoadingStart: function(t) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("Game load start from SDK is not supported with YandexSDK")
                                }
                                ), t)
                            },
                            sdkGameLoadingStop: function(t) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("Game load stop from SDK is not supported with YandexSDK")
                                }
                                ), t)
                            },
                            inviteLink: function(t, e) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("Invite link is not supported with YandexSDK")
                                }
                                ), e)
                            },
                            setScreenshotHandlerAsync: function() {
                                throw new s.SDKError("Registering a screenshot handler is not supported with YandexSDK")
                            },
                            setScreenshotHandler: function(t) {
                                return function() {}
                            }
                        }
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "user", {
                    get: function() {
                        return {
                            getUser: function(t) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("No user available with Yandex")
                                }
                                ), t)
                            },
                            getSystemInfo: function(t) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("No system info available with Yandex")
                                }
                                ), t)
                            },
                            showAuthPrompt: function(t) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("No user available with Yandex")
                                }
                                ), t)
                            },
                            showAccountLinkPrompt: function(t) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("No account linking available with Yandex")
                                }
                                ), t)
                            },
                            getUserToken: function(t) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("No user token available with Yandex.")
                                }
                                ), t)
                            },
                            getXsollaUserToken: function(t) {
                                return (0,
                                a.callbackWrapper)((function() {
                                    throw new s.SDKError("No Xsolla user token available with Yandex.")
                                }
                                ), t)
                            },
                            addScore: function(t, e) {
                                var n = this;
                                return (0,
                                a.callbackWrapper)((function() {
                                    return r(n, void 0, void 0, (function() {
                                        return i(this, (function(t) {
                                            throw new s.SDKError("Game score is not supported with Yandex")
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ), e)
                            },
                            addAuthListener: function(t) {},
                            removeAuthListener: function(t) {},
                            isUserAccountAvailable: function(t) {
                                var e = this;
                                return (0,
                                a.callbackWrapper)((function() {
                                    return r(e, void 0, void 0, (function() {
                                        return i(this, (function(t) {
                                            return [2, !1]
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ), t)
                            }
                        }
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.ensureInit = function() {
                    return r(this, void 0, void 0, (function() {
                        var t;
                        return i(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return this.yandexSDKObj ? [2, this.yandexSDKObj] : this.initState !== s.INIT_STATE.UNINITIALIZED && this.yandexPromise ? [3, 1] : [2, this.installYandex()];
                            case 1:
                                return t = this,
                                [4, this.yandexPromise];
                            case 2:
                                return t.yandexSDKObj = e.sent(),
                                [2, this.yandexSDKObj]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.installYandex = function() {
                    return r(this, void 0, void 0, (function() {
                        var t, e;
                        return i(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return u.default.log("Initializing"),
                                this.initState = s.INIT_STATE.REQUESTED,
                                [4, (0,
                                a.loadScript)("https://yandex.ru/games/sdk/v2")];
                            case 1:
                                return n.sent(),
                                t = window.YaGames.init(),
                                this.yandexPromise = t,
                                [4, Promise.race([t, new Promise((function(t, e) {
                                    setTimeout((function() {
                                        e("Yandex SDK was unable to init within the timeout")
                                    }
                                    ), 5e3)
                                }
                                ))])];
                            case 2:
                                return e = n.sent(),
                                this.yandexSDKObj = e,
                                u.default.log("Yandex SDK initialized"),
                                this.initState = s.INIT_STATE.INITIALIZED,
                                [2, e]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                t
            }();
            e.default = l
        },
        871: function(t, e) {
            "use strict";
            var n, r = this && this.__extends || (n = function(t, e) {
                return n = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(t, e) {
                    t.__proto__ = e
                }
                || function(t, e) {
                    for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                }
                ,
                n(t, e)
            }
            ,
            function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                function r() {
                    this.constructor = t
                }
                n(t, e),
                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
            );
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.DEFAULT_MIN_TIME_BETWEEN_REWARDED_MS = e.DEFAULT_MIN_TIME_BETWEEN_MIDROLL_MS = e.INIT_STATE = e.SDKError = void 0;
            var i, o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r(e, t),
                e
            }(Error);
            e.SDKError = o,
            (i = e.INIT_STATE || (e.INIT_STATE = {}))[i.UNINITIALIZED = 0] = "UNINITIALIZED",
            i[i.REQUESTED = 1] = "REQUESTED",
            i[i.INITIALIZED = 2] = "INITIALIZED",
            e.DEFAULT_MIN_TIME_BETWEEN_MIDROLL_MS = 18e4,
            e.DEFAULT_MIN_TIME_BETWEEN_REWARDED_MS = 5e3
        },
        81: function(t, e, n) {
            "use strict";
            var r, i = this && this.__extends || (r = function(t, e) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(t, e) {
                    t.__proto__ = e
                }
                || function(t, e) {
                    for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                }
                ,
                r(t, e)
            }
            ,
            function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                function n() {
                    this.constructor = t
                }
                r(t, e),
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
                new n)
            }
            ), o = this && this.__awaiter || function(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function u(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function a(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(u, a)
                    }
                    s((r = r.apply(t, e || [])).next())
                }
                ))
            }
            , u = this && this.__generator || function(t, e) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; u; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [2 & o[0], i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(),
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2],
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(),
                                        u.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
            , a = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.getBannerSizeAsText = e.requestInGameBanner = e.renderFakeBanner = e.getBannerForResponsive = e.getBannerContainer = void 0;
            var s = a(n(198))
              , c = n(492)
              , l = a(n(71))
              , f = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t),
                e
            }(Error)
              , h = [{
                width: 970,
                height: 90
            }, {
                width: 320,
                height: 50
            }, {
                width: 160,
                height: 600
            }, {
                width: 336,
                height: 280
            }, {
                width: 728,
                height: 90
            }, {
                width: 300,
                height: 600
            }, {
                width: 468,
                height: 60
            }, {
                width: 970,
                height: 250
            }, {
                width: 300,
                height: 250
            }, {
                width: 250,
                height: 250
            }, {
                width: 120,
                height: 600
            }];
            function d(t) {
                return t.width + "x" + t.height
            }
            e.getBannerContainer = function(t, e) {
                return o(this, void 0, void 0, (function() {
                    var n, r;
                    return u(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            if (!t || "" === t)
                                throw new f("Container id not specified");
                            return [4, (0,
                            c.getContainerInfo)(t)];
                        case 1:
                            if (n = i.sent(),
                            r = n.visibleState,
                            e) {
                                if ("notCreated" === r)
                                    throw new f("Container is not present on the page");
                                if ("notVisible" === r)
                                    throw new f("Container is not entirely visible on the page")
                            }
                            return [2, {
                                id: t,
                                containerInfo: n
                            }]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.getBannerForResponsive = function(t) {
                var e = t.containerInfo.size
                  , n = e.width
                  , r = e.height;
                if (n <= 1 || r <= 1)
                    throw new f("Container must have a non-null width and height to render a responsive banner.");
                var i = (0,
                s.default)(h).find((function(e) {
                    return t.containerInfo.size.width >= e.width && t.containerInfo.size.height >= e.height
                }
                ));
                if (!i)
                    throw new f("No available banner size has been found for container " + t.id);
                return {
                    id: t.id,
                    width: i.width,
                    height: i.height
                }
            }
            ,
            e.renderFakeBanner = function(t) {
                l.default.log("Rendering fake banner", t);
                var e = t.width
                  , n = t.height
                  , r = document.getElementById(t.id);
                if (r) {
                    r.innerHTML = "";
                    var i = document.createElement("img");
                    i.setAttribute("src", "https://images.crazygames.com/crazygames-sdk/" + d(t) + ".png"),
                    i.setAttribute("width", e + "px"),
                    i.setAttribute("height", n + "px"),
                    r.appendChild(i),
                    r.style.backgroundColor = "rgb(191, 173, 255, 0.25)"
                }
            }
            ,
            e.requestInGameBanner = function(t) {
                return o(this, void 0, void 0, (function() {
                    var e;
                    return u(this, (function(n) {
                        return e = window.CrazygamesAds,
                        l.default.log("Requesting banner to CrazyAds"),
                        [2, e.requestAds(t.request, t.options)]
                    }
                    ))
                }
                ))
            }
            ,
            e.getBannerSizeAsText = d
        },
        951: (t,e,n)=>{
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.loadAdsIfNeeded = void 0;
            var r, i = n(823);
            e.loadAdsIfNeeded = function(t) {
                return window.CrazygamesAds ? Promise.resolve() : function(t) {
                    return r || (r = (0,
                    i.loadScript)(t).then((function() {
                        window.CrazygamesAds.initAds()
                    }
                    )))
                }(t)
            }
        }
        ,
        414: function(t, e, n) {
            "use strict";
            var r = this && this.__assign || function() {
                return r = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n])
                            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }
                ,
                r.apply(this, arguments)
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.OverlayBanner = void 0;
            var i = n(486)
              , o = function() {
                function t(t, e, n, r) {
                    var o = this;
                    this.onWindowResize = function() {
                        o.setContainerPosition()
                    }
                    ,
                    this.containerElement = document.createElement("div"),
                    this.containerId = "unity-banner-" + t.id,
                    this.containerElement.id = this.containerId,
                    this.bannerRequest = t,
                    this.containerElement.style.position = "absolute",
                    this.containerElement.style.transformOrigin = "top left",
                    this.containerElement.style.userSelect = "none",
                    document.body.appendChild(this.containerElement);
                    var u = t.size.split("x");
                    this.onScreenSize = {
                        width: parseInt(u[0]),
                        height: parseInt(u[1])
                    },
                    this.bannerModule = n,
                    this.callback = r,
                    this.disableBannerCheck = e,
                    this.debouncedWindowResize = (0,
                    i.debounce)(this.onWindowResize, 200),
                    window.addEventListener("resize", this.debouncedWindowResize),
                    this.renderBanner()
                }
                return t.prototype.isVisible = function() {
                    var t = this.computeOverlay();
                    if (this.disableBannerCheck)
                        return !0;
                    var e = t.left + t.width * t.scale
                      , n = t.top + t.height * t.scale
                      , r = this.getGameContainerDimensions();
                    return !(t.top < -4 || t.left < -4 || e > window.innerWidth + 4 || n > r.height + 4)
                }
                ,
                t.prototype.computeOverlay = function() {
                    var t = this.getScale()
                      , e = this.getOnScreenPosition();
                    return {
                        width: this.onScreenSize.width,
                        height: this.onScreenSize.height,
                        top: e.y,
                        left: e.x,
                        scale: t
                    }
                }
                ,
                t.prototype.getGameContainerDimensions = function() {
                    var t = document.getElementById("game-container");
                    return t ? {
                        width: t.clientWidth,
                        height: t.clientHeight
                    } : {
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                }
                ,
                t.prototype.getScale = function() {
                    return this.getGameContainerDimensions().width / 922
                }
                ,
                t.prototype.getOnScreenPosition = function() {
                    var t = this.getGameContainerDimensions()
                      , e = this.bannerRequest.anchor.x * t.width
                      , n = (1 - this.bannerRequest.anchor.y) * t.height
                      , r = this.getScale()
                      , i = this.onScreenSize
                      , o = i.width * r
                      , u = i.height * r
                      , a = this.bannerRequest.pivot || {
                        x: .5,
                        y: .5
                    };
                    return {
                        x: e + this.bannerRequest.position.x * r - o * a.x,
                        y: n - this.bannerRequest.position.y * r - u * (1 - a.y)
                    }
                }
                ,
                t.prototype.setContainerPosition = function() {
                    var t = this.computeOverlay();
                    this.containerElement.style.width = t.width + "px",
                    this.containerElement.style.height = t.height + "px",
                    this.containerElement.style.top = t.top + "px",
                    this.containerElement.style.left = t.left + "px",
                    this.containerElement.style.transform = "scale(" + t.scale + ")",
                    this.containerElement.style.display = "block"
                }
                ,
                t.prototype.renderBanner = function() {
                    var t = this;
                    if (this.setContainerPosition(),
                    !this.isVisible())
                        return this.callback(this.bannerRequest.id, "bannerError", "bannerNotEntirelyVisible"),
                        void (this.containerElement.style.display = "none");
                    this.bannerModule.requestBanner(r({
                        id: this.containerId
                    }, this.onScreenSize), (function(e, n) {
                        e ? t.callback(t.bannerRequest.id, "bannerError", e) : t.callback(t.bannerRequest.id, "bannerRendered")
                    }
                    ))
                }
                ,
                t.prototype.destroy = function() {
                    this.containerElement && this.containerElement.remove(),
                    window.removeEventListener("resize", this.debouncedWindowResize)
                }
                ,
                t
            }();
            e.OverlayBanner = o
        },
        71: (t,e,n)=>{
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(823)
              , i = function() {
                function t() {}
                return t.prototype.log = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++)
                        e[n - 1] = arguments[n];
                    void 0 === this.enabled && (this.enabled = "true" === (0,
                    r.getQueryStringValue)("sdk_debug")),
                    this.enabled && console.log("[Crazygames SDK (JS)]", t, e)
                }
                ,
                t.prototype.error = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++)
                        e[n - 1] = arguments[n];
                    console.error("[Crazygames SDK (JS)]", t, e)
                }
                ,
                t.prototype.setDebug = function(t) {
                    this.enabled = t
                }
                ,
                t.prototype.isEnabled = function() {
                    return this.enabled
                }
                ,
                t
            }();
            e.default = new i
        }
        ,
        492: function(t, e) {
            "use strict";
            var n = this && this.__awaiter || function(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function u(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function a(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(u, a)
                    }
                    s((r = r.apply(t, e || [])).next())
                }
                ))
            }
              , r = this && this.__generator || function(t, e) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; u; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [2 & o[0], i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(),
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2],
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(),
                                        u.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.getContainerInfo = void 0;
            function i(t) {
                return n(this, void 0, void 0, (function() {
                    return r(this, (function(e) {
                        return [2, new Promise((function(e) {
                            var n = new IntersectionObserver((function(t) {
                                var r = t[0]
                                  , i = r.intersectionRatio > .95;
                                e({
                                    visibleState: i ? "visible" : "notVisible",
                                    size: {
                                        width: Math.ceil(r.boundingClientRect.width),
                                        height: Math.ceil(r.boundingClientRect.height)
                                    }
                                }),
                                n.disconnect()
                            }
                            ));
                            n.observe(t)
                        }
                        ))]
                    }
                    ))
                }
                ))
            }
            e.getContainerInfo = function(t) {
                return n(this, void 0, void 0, (function() {
                    var e;
                    return r(this, (function(n) {
                        return (e = document.getElementById(t)) ? [2, i(e)] : [2, {
                            visibleState: "notCreated",
                            size: {
                                width: 0,
                                height: 0
                            }
                        }]
                    }
                    ))
                }
                ))
            }
        },
        823: function(t, e, n) {
            "use strict";
            var r = this && this.__awaiter || function(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function u(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function a(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(u, a)
                    }
                    s((r = r.apply(t, e || [])).next())
                }
                ))
            }
              , i = this && this.__generator || function(t, e) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; u; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [2 & o[0], i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(),
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2],
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(),
                                        u.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
              , o = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.wrapUserFn = e.callbackWrapper = e.loadScript = e.addStyle = e.getQueryStringValue = void 0;
            var u = o(n(71));
            function a(t) {
                return function() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    try {
                        t.apply(void 0, e)
                    } catch (t) {
                        console.error(t)
                    }
                }
            }
            e.getQueryStringValue = function(t) {
                return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(t).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$","i"), "$1"))
            }
            ,
            e.addStyle = function(t) {
                var e = document.createElement("style");
                e.textContent = t,
                document.head.append(e)
            }
            ,
            e.loadScript = function(t) {
                return new Promise((function(e, n) {
                    var r = document.createElement("script");
                    r.onload = function() {
                        return e()
                    }
                    ,
                    r.onerror = function(t) {
                        return n(t)
                    }
                    ,
                    r.src = t,
                    r.async = !0,
                    document.head.appendChild(r)
                }
                ))
            }
            ,
            e.callbackWrapper = function(t, e) {
                return r(this, void 0, void 0, (function() {
                    var n = this;
                    return i(this, (function(o) {
                        return [2, new Promise((function(o, s) {
                            return r(n, void 0, void 0, (function() {
                                var n, r;
                                return i(this, (function(i) {
                                    switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]),
                                        [4, t()];
                                    case 1:
                                        return n = i.sent(),
                                        e && a(e)(void 0, n),
                                        o(n),
                                        [3, 3];
                                    case 2:
                                        return r = i.sent(),
                                        u.default.log(r),
                                        e ? (a(e)(r.message || r.toString(), void 0),
                                        o()) : s(r.message || r.toString()),
                                        [3, 3];
                                    case 3:
                                        return [2]
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        ))]
                    }
                    ))
                }
                ))
            }
            ,
            e.wrapUserFn = a
        },
        659: (t,e)=>{
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.generateInviteLink = void 0,
            e.generateInviteLink = function(t, e) {
                if (!e)
                    return "An error happened when generating invite link";
                var n = new URL(e)
                  , r = n.searchParams;
                return r.set("utm_source", "invite"),
                Object.keys(t).forEach((function(e) {
                    r.set(e, t[e])
                }
                )),
                n.toString()
            }
        }
        ,
        297: function(t, e) {
            "use strict";
            var n = this && this.__awaiter || function(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function u(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function a(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(u, a)
                    }
                    s((r = r.apply(t, e || [])).next())
                }
                ))
            }
              , r = this && this.__generator || function(t, e) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; u; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [2 & o[0], i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(),
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2],
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(),
                                        u.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.roundNumber = void 0;
            var i = {
                alg: "A256GCM",
                ext: !0,
                k: "hVuCLdc0PRYLNxiz4SU3DNUj0AZ5RXZ3v3VflvdKYCM",
                key_ops: ["encrypt", "decrypt"],
                kty: "oct"
            }
              , o = null;
            function u() {
                return n(this, void 0, void 0, (function() {
                    return r(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return o ? [3, 2] : [4, window.crypto.subtle.importKey("jwk", i, {
                                name: "AES-GCM",
                                length: 256
                            }, !0, ["encrypt", "decrypt"])];
                        case 1:
                            o = t.sent(),
                            t.label = 2;
                        case 2:
                            return [2, o]
                        }
                    }
                    ))
                }
                ))
            }
            function a(t) {
                for (var e = new ArrayBuffer(2 * t.length), n = new Uint16Array(e), r = 0, i = t.length; r < i; r++)
                    n[r] = t.charCodeAt(r);
                return e
            }
            e.roundNumber = function(t) {
                return n(this, void 0, void 0, (function() {
                    var e, n, i, o, s, c;
                    return r(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return e = window.crypto.getRandomValues(new Uint8Array(12)),
                            o = (i = window.crypto.subtle).encrypt,
                            s = [{
                                name: "AES-GCM",
                                iv: e
                            }],
                            [4, u()];
                        case 1:
                            return [4, o.apply(i, s.concat([r.sent(), a(t)]))];
                        case 2:
                            return n = r.sent(),
                            c = {
                                ciphertext: (l = n,
                                String.fromCharCode.apply(null, new Uint16Array(l))),
                                iv: Array.from(e)
                            },
                            [2, JSON.stringify(c)]
                        }
                        var l
                    }
                    ))
                }
                ))
            }
        },
        719: (t,e)=>{
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.wait = void 0,
            e.wait = function(t) {
                return new Promise((function(e) {
                  // console.log("--fx--e--", e);
                  // console.log("--fx--t--", t);
                  return setTimeout(e, t);
                }
                ))
            }
        }
        ,
        412: (t,e)=>{
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.SDK_VERSION = void 0,
            e.SDK_VERSION = "2.0.0"
        }
    }
      , e = {};
    function n(r) {
        var i = e[r];
        if (void 0 !== i)
            return i.exports;
        var o = e[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n),
        o.loaded = !0,
        o.exports
    }
    n.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window)
                return window
        }
    }(),
    n.nmd = t=>(t.paths = [],
    t.children || (t.children = []),
    t),
    (()=>{
        "use strict";
        var t = n(823)
          , e = (new (n(724).SDKInitializer)).getProxy();
        e.init(window.crazySdkInitOptions),
        window.CrazyGames = {
            SDK: e
        },
        (0,
        t.addStyle)("\n.crazy-banner-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n")
    }
    )()
}
)();
