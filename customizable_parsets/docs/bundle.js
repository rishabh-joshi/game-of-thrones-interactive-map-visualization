! function(t) {
    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return t[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
    }
    var e = {};
    return n.m = t, n.c = e, n.p = "", n(0)
}([function(t, n, e) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var i = e(1),
        o = r(i),
        u = e(43),
        a = r(u),
        c = e(36),
        s = r(c),
        f = e(72),
        l = r(f),
        h = e(73),
        p = r(h),
        d = e(70),
        v = (r(d), e(74)),
        g = r(v),
        y = e(37),
        _ = r(y);
    e(75);
    var m = ((0, a.default)(), _.default.Map({}));
    document.addEventListener("DOMContentLoaded", function() {
        var t = function() {
                var t = ["dataset"];
                s.default.shouldUpdate(m, t) && (m = s.default.updateViewState(m, t), s.default.getStateElement("dataset").size > 0 && x()), b()
            },
            n = s.default.getStore();
        n.subscribe(t), t(), w()
    });
    var x = function() {
            console.log("INFO: Rendering the content."), setTimeout(function() {
                (0, l.default)(), (0, o.default)()
            }, 2e3)
        },
        b = function() {
            (0, p.default)(), (0, g.default)(), console.log("INFO: App is idle.")
        },
        w = function() {
            $(".modal").modal("open")
        }
}, function(t, n, e) {
    (function(t) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e(34),
            o = e(35),
            u = r(o),
            a = e(36),
            c = r(a),
            s = e(37),
            f = r(s);
        e(38);
        var l = e(42),
            h = r(l);
        (0, u.default)(h.default);
        var p = h.default.parsets(),
            d = f.default.Map({});
        n.default = function(n) {
            var e = function() {
                    var t = ["dataset", "featuresFilter"];
                    c.default.shouldUpdate(d, t) && (d = c.default.updateViewState(d, t), v())
                },
                r = c.default.getStore();
            t.select(window).on("resize", v), r.subscribe(e), e()
        };
        var v = function() {
                var t = d.get("dataset");
                g(), y(t)
            },
            g = function() {
                var n = i.elementsProvider.LOADER_SECTION;
                t.select(n).attr("style", "display: none;")
            },
            y = function(t) {
                Materialize.toast("Rendering...", 3e3, "rounded");
                var n = x(),
                    e = b(n);
                _(t, n, e)
            },
            _ = function(t, n, e) {
                p.dimensions(m(t)), p.width(n), e.datum(t.toJS()).call(p)
            },
            m = function(t) {
                var n = Object.keys(t.get(0)),
                    e = d.get("featuresFilter");
                return n.filter(function(t) {
                    return !e.includes(t)
                })
            },
            x = function() {
                var t = h.default.select(i.elementsProvider.PARALLEL_SET_CONTAINER).node().getBoundingClientRect().width - 30;
                return t
            },
            b = function(t) {
                var n = h.default.select(i.elementsProvider.PARALLEL_SET_CONTENT);
                n.select("svg").remove();
                var e = n.append("svg").attr("width", t).attr("height", p.height());
                return e
            }
    }).call(n, e(2))
}, function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = e(3),
        i = e(4),
        o = e(5),
        u = e(14),
        a = e(16),
        c = e(10),
        s = e(6),
        f = e(7),
        l = e(17),
        h = e(13),
        p = e(18),
        d = e(20),
        v = e(21),
        g = e(22),
        y = e(9),
        _ = e(15),
        m = e(23),
        x = e(19),
        b = e(24),
        w = e(25),
        M = e(26),
        S = e(28),
        E = e(8),
        k = e(31),
        N = e(29),
        A = e(30),
        T = e(12),
        z = e(11),
        C = e(32),
        O = e(33),
        I = "4.11.0";
    n.version = I, Object.keys(r).forEach(function(t) {
        n[t] = r[t]
    }), Object.keys(i).forEach(function(t) {
        n[t] = i[t]
    }), Object.keys(o).forEach(function(t) {
        n[t] = o[t]
    }), Object.keys(u).forEach(function(t) {
        n[t] = u[t]
    }), Object.keys(a).forEach(function(t) {
        n[t] = a[t]
    }), Object.keys(c).forEach(function(t) {
        n[t] = c[t]
    }), Object.keys(s).forEach(function(t) {
        n[t] = s[t]
    }), Object.keys(f).forEach(function(t) {
        n[t] = f[t]
    }), Object.keys(l).forEach(function(t) {
        n[t] = l[t]
    }), Object.keys(h).forEach(function(t) {
        n[t] = h[t]
    }), Object.keys(p).forEach(function(t) {
        n[t] = p[t]
    }), Object.keys(d).forEach(function(t) {
        n[t] = d[t]
    }), Object.keys(v).forEach(function(t) {
        n[t] = v[t]
    }), Object.keys(g).forEach(function(t) {
        n[t] = g[t]
    }), Object.keys(y).forEach(function(t) {
        n[t] = y[t]
    }), Object.keys(_).forEach(function(t) {
        n[t] = _[t]
    }), Object.keys(m).forEach(function(t) {
        n[t] = m[t]
    }), Object.keys(x).forEach(function(t) {
        n[t] = x[t]
    }), Object.keys(b).forEach(function(t) {
        n[t] = b[t]
    }), Object.keys(w).forEach(function(t) {
        n[t] = w[t]
    }), Object.keys(M).forEach(function(t) {
        n[t] = M[t]
    }), Object.keys(S).forEach(function(t) {
        n[t] = S[t]
    }), Object.keys(E).forEach(function(t) {
        n[t] = E[t]
    }), Object.keys(k).forEach(function(t) {
        n[t] = k[t]
    }), Object.keys(N).forEach(function(t) {
        n[t] = N[t]
    }), Object.keys(A).forEach(function(t) {
        n[t] = A[t]
    }), Object.keys(T).forEach(function(t) {
        n[t] = T[t]
    }), Object.keys(z).forEach(function(t) {
        n[t] = z[t]
    }), Object.keys(C).forEach(function(t) {
        n[t] = C[t]
    }), Object.keys(O).forEach(function(t) {
        n[t] = O[t]
    }), Object.defineProperty(n, "event", {
        get: function() {
            return E.event
        }
    })
}, function(t, n, e) {
    ! function(t, e) {
        e(n)
    }(this, function(t) {
        "use strict";

        function n(t) {
            return function(n, e) {
                return u(t(n), e)
            }
        }

        function e(t, n) {
            return [t, n]
        }

        function r(t, n, e) {
            var r = (n - t) / Math.max(0, e),
                i = Math.floor(Math.log(r) / Math.LN10),
                o = r / Math.pow(10, i);
            return i >= 0 ? (o >= S ? 10 : o >= E ? 5 : o >= k ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= S ? 10 : o >= E ? 5 : o >= k ? 2 : 1)
        }

        function i(t, n, e) {
            var r = Math.abs(n - t) / Math.max(0, e),
                i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
                o = r / i;
            return o >= S ? i *= 10 : o >= E ? i *= 5 : o >= k && (i *= 2), n < t ? -i : i
        }

        function o(t) {
            return t.length
        }
        var u = function(t, n) {
                return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
            },
            a = function(t) {
                return 1 === t.length && (t = n(t)), {
                    left: function(n, e, r, i) {
                        for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                            var o = r + i >>> 1;
                            t(n[o], e) < 0 ? r = o + 1 : i = o
                        }
                        return r
                    },
                    right: function(n, e, r, i) {
                        for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                            var o = r + i >>> 1;
                            t(n[o], e) > 0 ? i = o : r = o + 1
                        }
                        return r
                    }
                }
            },
            c = a(u),
            s = c.right,
            f = c.left,
            l = function(t, n) {
                null == n && (n = e);
                for (var r = 0, i = t.length - 1, o = t[0], u = new Array(i < 0 ? 0 : i); r < i;) u[r] = n(o, o = t[++r]);
                return u
            },
            h = function(t, n, r) {
                var i, o, u, a, c = t.length,
                    s = n.length,
                    f = new Array(c * s);
                for (null == r && (r = e), i = u = 0; i < c; ++i)
                    for (a = t[i], o = 0; o < s; ++o, ++u) f[u] = r(a, n[o]);
                return f
            },
            p = function(t, n) {
                return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
            },
            d = function(t) {
                return null === t ? NaN : +t
            },
            v = function(t, n) {
                var e, r, i = t.length,
                    o = 0,
                    u = -1,
                    a = 0,
                    c = 0;
                if (null == n)
                    for (; ++u < i;) isNaN(e = d(t[u])) || (r = e - a, a += r / ++o, c += r * (e - a));
                else
                    for (; ++u < i;) isNaN(e = d(n(t[u], u, t))) || (r = e - a, a += r / ++o, c += r * (e - a));
                if (o > 1) return c / (o - 1)
            },
            g = function(t, n) {
                var e = v(t, n);
                return e ? Math.sqrt(e) : e
            },
            y = function(t, n) {
                var e, r, i, o = t.length,
                    u = -1;
                if (null == n) {
                    for (; ++u < o;)
                        if (null != (e = t[u]) && e >= e)
                            for (r = i = e; ++u < o;) null != (e = t[u]) && (r > e && (r = e), i < e && (i = e))
                } else
                    for (; ++u < o;)
                        if (null != (e = n(t[u], u, t)) && e >= e)
                            for (r = i = e; ++u < o;) null != (e = n(t[u], u, t)) && (r > e && (r = e), i < e && (i = e));
                return [r, i]
            },
            _ = Array.prototype,
            m = _.slice,
            x = _.map,
            b = function(t) {
                return function() {
                    return t
                }
            },
            w = function(t) {
                return t
            },
            M = function(t, n, e) {
                t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
                for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;) o[r] = t + r * e;
                return o
            },
            S = Math.sqrt(50),
            E = Math.sqrt(10),
            k = Math.sqrt(2),
            N = function(t, n, e) {
                var i, o, u, a, c = -1;
                if (n = +n, t = +t, e = +e, t === n && e > 0) return [t];
                if ((i = n < t) && (o = t, t = n, n = o), 0 === (a = r(t, n, e)) || !isFinite(a)) return [];
                if (a > 0)
                    for (t = Math.ceil(t / a), n = Math.floor(n / a), u = new Array(o = Math.ceil(n - t + 1)); ++c < o;) u[c] = (t + c) * a;
                else
                    for (t = Math.floor(t * a), n = Math.ceil(n * a), u = new Array(o = Math.ceil(t - n + 1)); ++c < o;) u[c] = (t - c) / a;
                return i && u.reverse(), u
            },
            A = function(t) {
                return Math.ceil(Math.log(t.length) / Math.LN2) + 1
            },
            T = function() {
                function t(t) {
                    var o, u, a = t.length,
                        c = new Array(a);
                    for (o = 0; o < a; ++o) c[o] = n(t[o], o, t);
                    var f = e(c),
                        l = f[0],
                        h = f[1],
                        p = r(c, l, h);
                    Array.isArray(p) || (p = i(l, h, p), p = M(Math.ceil(l / p) * p, Math.floor(h / p) * p, p));
                    for (var d = p.length; p[0] <= l;) p.shift(), --d;
                    for (; p[d - 1] > h;) p.pop(), --d;
                    var v, g = new Array(d + 1);
                    for (o = 0; o <= d; ++o) v = g[o] = [], v.x0 = o > 0 ? p[o - 1] : l, v.x1 = o < d ? p[o] : h;
                    for (o = 0; o < a; ++o) u = c[o], l <= u && u <= h && g[s(p, u, 0, d)].push(t[o]);
                    return g
                }
                var n = w,
                    e = y,
                    r = A;
                return t.value = function(e) {
                    return arguments.length ? (n = "function" == typeof e ? e : b(e), t) : n
                }, t.domain = function(n) {
                    return arguments.length ? (e = "function" == typeof n ? n : b([n[0], n[1]]), t) : e
                }, t.thresholds = function(n) {
                    return arguments.length ? (r = "function" == typeof n ? n : b(Array.isArray(n) ? m.call(n) : n), t) : r
                }, t
            },
            z = function(t, n, e) {
                if (null == e && (e = d), r = t.length) {
                    if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);
                    if (n >= 1) return +e(t[r - 1], r - 1, t);
                    var r, i = (r - 1) * n,
                        o = Math.floor(i),
                        u = +e(t[o], o, t),
                        a = +e(t[o + 1], o + 1, t);
                    return u + (a - u) * (i - o)
                }
            },
            C = function(t, n, e) {
                return t = x.call(t, d).sort(u), Math.ceil((e - n) / (2 * (z(t, .75) - z(t, .25)) * Math.pow(t.length, -1 / 3)))
            },
            O = function(t, n, e) {
                return Math.ceil((e - n) / (3.5 * g(t) * Math.pow(t.length, -1 / 3)))
            },
            I = function(t, n) {
                var e, r, i = t.length,
                    o = -1;
                if (null == n) {
                    for (; ++o < i;)
                        if (null != (e = t[o]) && e >= e)
                            for (r = e; ++o < i;) null != (e = t[o]) && e > r && (r = e)
                } else
                    for (; ++o < i;)
                        if (null != (e = n(t[o], o, t)) && e >= e)
                            for (r = e; ++o < i;) null != (e = n(t[o], o, t)) && e > r && (r = e);
                return r
            },
            L = function(t, n) {
                var e, r = t.length,
                    i = r,
                    o = -1,
                    u = 0;
                if (null == n)
                    for (; ++o < r;) isNaN(e = d(t[o])) ? --i : u += e;
                else
                    for (; ++o < r;) isNaN(e = d(n(t[o], o, t))) ? --i : u += e;
                if (i) return u / i
            },
            P = function(t, n) {
                var e, r = t.length,
                    i = -1,
                    o = [];
                if (null == n)
                    for (; ++i < r;) isNaN(e = d(t[i])) || o.push(e);
                else
                    for (; ++i < r;) isNaN(e = d(n(t[i], i, t))) || o.push(e);
                return z(o.sort(u), .5)
            },
            D = function(t) {
                for (var n, e, r, i = t.length, o = -1, u = 0; ++o < i;) u += t[o].length;
                for (e = new Array(u); --i >= 0;)
                    for (r = t[i], n = r.length; --n >= 0;) e[--u] = r[n];
                return e
            },
            q = function(t, n) {
                var e, r, i = t.length,
                    o = -1;
                if (null == n) {
                    for (; ++o < i;)
                        if (null != (e = t[o]) && e >= e)
                            for (r = e; ++o < i;) null != (e = t[o]) && r > e && (r = e)
                } else
                    for (; ++o < i;)
                        if (null != (e = n(t[o], o, t)) && e >= e)
                            for (r = e; ++o < i;) null != (e = n(t[o], o, t)) && r > e && (r = e);
                return r
            },
            R = function(t, n) {
                for (var e = n.length, r = new Array(e); e--;) r[e] = t[n[e]];
                return r
            },
            j = function(t, n) {
                if (e = t.length) {
                    var e, r, i = 0,
                        o = 0,
                        a = t[o];
                    for (null == n && (n = u); ++i < e;)(n(r = t[i], a) < 0 || 0 !== n(a, a)) && (a = r, o = i);
                    return 0 === n(a, a) ? o : void 0
                }
            },
            U = function(t, n, e) {
                for (var r, i, o = (null == e ? t.length : e) - (n = null == n ? 0 : +n); o;) i = Math.random() * o-- | 0, r = t[o + n], t[o + n] = t[i + n], t[i + n] = r;
                return t
            },
            F = function(t, n) {
                var e, r = t.length,
                    i = -1,
                    o = 0;
                if (null == n)
                    for (; ++i < r;)(e = +t[i]) && (o += e);
                else
                    for (; ++i < r;)(e = +n(t[i], i, t)) && (o += e);
                return o
            },
            Y = function(t) {
                if (!(i = t.length)) return [];
                for (var n = -1, e = q(t, o), r = new Array(e); ++n < e;)
                    for (var i, u = -1, a = r[n] = new Array(i); ++u < i;) a[u] = t[u][n];
                return r
            },
            H = function() {
                return Y(arguments)
            };
        t.bisect = s, t.bisectRight = s, t.bisectLeft = f, t.ascending = u, t.bisector = a, t.cross = h, t.descending = p, t.deviation = g, t.extent = y, t.histogram = T, t.thresholdFreedmanDiaconis = C, t.thresholdScott = O, t.thresholdSturges = A, t.max = I, t.mean = L, t.median = P, t.merge = D, t.min = q, t.pairs = l, t.permute = R, t.quantile = z, t.range = M, t.scan = j, t.shuffle = U, t.sum = F, t.ticks = N, t.tickIncrement = r, t.tickStep = i, t.transpose = Y, t.variance = v, t.zip = H, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, e) {
        e(n)
    }(this, function(t) {
        "use strict";

        function n(t) {
            return "translate(" + (t + .5) + ",0)"
        }

        function e(t) {
            return "translate(0," + (t + .5) + ")"
        }

        function r(t) {
            return function(n) {
                return +t(n)
            }
        }

        function i(t) {
            var n = Math.max(0, t.bandwidth() - 1) / 2;
            return t.round() && (n = Math.round(n)),
                function(e) {
                    return +t(e) + n
                }
        }

        function o() {
            return !this.__axis
        }

        function u(t, u) {
            function a(n) {
                var e = null == s ? u.ticks ? u.ticks.apply(u, c) : u.domain() : s,
                    a = null == f ? u.tickFormat ? u.tickFormat.apply(u, c) : h : f,
                    l = Math.max(_, 0) + x,
                    S = u.range(),
                    E = +S[0] + .5,
                    k = +S[S.length - 1] + .5,
                    N = (u.bandwidth ? i : r)(u.copy()),
                    A = n.selection ? n.selection() : n,
                    T = A.selectAll(".domain").data([null]),
                    z = A.selectAll(".tick").data(e, u).order(),
                    C = z.exit(),
                    O = z.enter().append("g").attr("class", "tick"),
                    I = z.select("line"),
                    L = z.select("text");
                T = T.merge(T.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), z = z.merge(O), I = I.merge(O.append("line").attr("stroke", "#000").attr(w + "2", b * _)), L = L.merge(O.append("text").attr("fill", "#000").attr(w, b * l).attr("dy", t === p ? "0em" : t === v ? "0.71em" : "0.32em")), n !== A && (T = T.transition(n), z = z.transition(n), I = I.transition(n), L = L.transition(n), C = C.transition(n).attr("opacity", y).attr("transform", function(t) {
                    return isFinite(t = N(t)) ? M(t) : this.getAttribute("transform")
                }), O.attr("opacity", y).attr("transform", function(t) {
                    var n = this.parentNode.__axis;
                    return M(n && isFinite(n = n(t)) ? n : N(t))
                })), C.remove(), T.attr("d", t === g || t == d ? "M" + b * m + "," + E + "H0.5V" + k + "H" + b * m : "M" + E + "," + b * m + "V0.5H" + k + "V" + b * m), z.attr("opacity", 1).attr("transform", function(t) {
                    return M(N(t))
                }), I.attr(w + "2", b * _), L.attr(w, b * l).text(a), A.filter(o).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === d ? "start" : t === g ? "end" : "middle"), A.each(function() {
                    this.__axis = N
                })
            }
            var c = [],
                s = null,
                f = null,
                _ = 6,
                m = 6,
                x = 3,
                b = t === p || t === g ? -1 : 1,
                w = t === g || t === d ? "x" : "y",
                M = t === p || t === v ? n : e;
            return a.scale = function(t) {
                return arguments.length ? (u = t, a) : u
            }, a.ticks = function() {
                return c = l.call(arguments), a
            }, a.tickArguments = function(t) {
                return arguments.length ? (c = null == t ? [] : l.call(t), a) : c.slice()
            }, a.tickValues = function(t) {
                return arguments.length ? (s = null == t ? null : l.call(t), a) : s && s.slice()
            }, a.tickFormat = function(t) {
                return arguments.length ? (f = t, a) : f
            }, a.tickSize = function(t) {
                return arguments.length ? (_ = m = +t, a) : _
            }, a.tickSizeInner = function(t) {
                return arguments.length ? (_ = +t, a) : _
            }, a.tickSizeOuter = function(t) {
                return arguments.length ? (m = +t, a) : m
            }, a.tickPadding = function(t) {
                return arguments.length ? (x = +t, a) : x
            }, a
        }

        function a(t) {
            return u(p, t)
        }

        function c(t) {
            return u(d, t)
        }

        function s(t) {
            return u(v, t)
        }

        function f(t) {
            return u(g, t)
        }
        var l = Array.prototype.slice,
            h = function(t) {
                return t
            },
            p = 1,
            d = 2,
            v = 3,
            g = 4,
            y = 1e-6;
        t.axisTop = a, t.axisRight = c, t.axisBottom = s, t.axisLeft = f, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, r) {
        r(n, e(6), e(7), e(9), e(8), e(11))
    }(this, function(t, n, e, r, i, o) {
        "use strict";

        function u() {
            i.event.stopImmediatePropagation()
        }

        function a(t) {
            return {
                type: t
            }
        }

        function c() {
            return !i.event.button
        }

        function s() {
            var t = this.ownerSVGElement || this;
            return [
                [0, 0],
                [t.width.baseVal.value, t.height.baseVal.value]
            ]
        }

        function f(t) {
            for (; !t.__brush;)
                if (!(t = t.parentNode)) return;
            return t.__brush
        }

        function l(t) {
            return t[0][0] === t[1][0] || t[0][1] === t[1][1]
        }

        function h(t) {
            var n = t.__brush;
            return n ? n.dim.output(n.selection) : null
        }

        function p() {
            return v(M)
        }

        function d() {
            return v(S)
        }

        function v(t) {
            function h(n) {
                var e = n.property("__brush", C).selectAll(".overlay").data([a("overlay")]);
                e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", k.overlay).merge(e).each(function() {
                    var t = f(this).extent;
                    i.select(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1])
                }), n.selectAll(".selection").data([a("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", k.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
                var r = n.selectAll(".handle").data(t.handles, function(t) {
                    return t.type
                });
                r.exit().remove(), r.enter().append("rect").attr("class", function(t) {
                    return "handle handle--" + t.type
                }).attr("cursor", function(t) {
                    return k[t.type]
                }), n.each(p).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", E)
            }

            function p() {
                var t = i.select(this),
                    n = f(this).selection;
                n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x", function(t) {
                    return "e" === t.type[t.type.length - 1] ? n[1][0] - D / 2 : n[0][0] - D / 2
                }).attr("y", function(t) {
                    return "s" === t.type[0] ? n[1][1] - D / 2 : n[0][1] - D / 2
                }).attr("width", function(t) {
                    return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + D : D
                }).attr("height", function(t) {
                    return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + D : D
                })) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
            }

            function d(t, n) {
                return t.__brush.emitter || new v(t, n)
            }

            function v(t, n) {
                this.that = t, this.args = n, this.state = t.__brush, this.active = 0
            }

            function E() {
                function n() {
                    var t = i.mouse(F);
                    !Q || j || U || (Math.abs(t[0] - nt[0]) > Math.abs(t[1] - nt[1]) ? U = !0 : j = !0), nt = t, R = !0, _(), r()
                }

                function r() {
                    var t;
                    switch (D = nt[0] - tt[0], q = nt[1] - tt[1], H) {
                        case x:
                        case m:
                            B && (D = Math.max(J - h, Math.min($ - E, D)), v = h + D, C = E + D), V && (q = Math.max(Z - g, Math.min(G - I, q)), y = g + q, P = I + q);
                            break;
                        case b:
                            B < 0 ? (D = Math.max(J - h, Math.min($ - h, D)), v = h + D, C = E) : B > 0 && (D = Math.max(J - E, Math.min($ - E, D)), v = h, C = E + D), V < 0 ? (q = Math.max(Z - g, Math.min(G - g, q)), y = g + q, P = I) : V > 0 && (q = Math.max(Z - I, Math.min(G - I, q)), y = g, P = I + q);
                            break;
                        case w:
                            B && (v = Math.max(J, Math.min($, h - D * B)), C = Math.max(J, Math.min($, E + D * B))), V && (y = Math.max(Z, Math.min(G, g - q * V)), P = Math.max(Z, Math.min(G, I + q * V)))
                    }
                    C < v && (B *= -1, t = h, h = E, E = t, t = v, v = C, C = t, Y in N && it.attr("cursor", k[Y = N[Y]])), P < y && (V *= -1, t = g, g = I, I = t, t = y, y = P, P = t, Y in A && it.attr("cursor", k[Y = A[Y]])), X.selection && (K = X.selection), j && (v = K[0][0], C = K[1][0]), U && (y = K[0][1], P = K[1][1]), K[0][0] === v && K[0][1] === y && K[1][0] === C && K[1][1] === P || (X.selection = [
                        [v, y],
                        [C, P]
                    ], p.call(F), et.brush())
                }

                function a() {
                    if (u(), i.event.touches) {
                        if (i.event.touches.length) return;
                        O && clearTimeout(O), O = setTimeout(function() {
                            O = null
                        }, 500), rt.on("touchmove.brush touchend.brush touchcancel.brush", null)
                    } else e.dragEnable(i.event.view, R), ot.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
                    rt.attr("pointer-events", "all"), it.attr("cursor", k.overlay), X.selection && (K = X.selection), l(K) && (X.selection = null, p.call(F)), et.end()
                }

                function c() {
                    switch (i.event.keyCode) {
                        case 16:
                            Q = B && V;
                            break;
                        case 18:
                            H === b && (B && (E = C - D * B, h = v + D * B), V && (I = P - q * V, g = y + q * V), H = w, r());
                            break;
                        case 32:
                            H !== b && H !== w || (B < 0 ? E = C - D : B > 0 && (h = v - D), V < 0 ? I = P - q : V > 0 && (g = y - q), H = x, it.attr("cursor", k.selection), r());
                            break;
                        default:
                            return
                    }
                    _()
                }

                function s() {
                    switch (i.event.keyCode) {
                        case 16:
                            Q && (j = U = Q = !1, r());
                            break;
                        case 18:
                            H === w && (B < 0 ? E = C : B > 0 && (h = v), V < 0 ? I = P : V > 0 && (g = y), H = b, r());
                            break;
                        case 32:
                            H === x && (i.event.altKey ? (B && (E = C - D * B, h = v + D * B), V && (I = P - q * V, g = y + q * V), H = w) : (B < 0 ? E = C : B > 0 && (h = v), V < 0 ? I = P : V > 0 && (g = y), H = b), it.attr("cursor", k[Y]), r());
                            break;
                        default:
                            return
                    }
                    _()
                }
                if (i.event.touches) {
                    if (i.event.changedTouches.length < i.event.touches.length) return _()
                } else if (O) return;
                if (L.apply(this, arguments)) {
                    var h, v, g, y, E, C, I, P, D, q, R, j, U, F = this,
                        Y = i.event.target.__data__.type,
                        H = "selection" === (i.event.metaKey ? Y = "overlay" : Y) ? m : i.event.altKey ? w : b,
                        B = t === S ? null : T[Y],
                        V = t === M ? null : z[Y],
                        X = f(F),
                        W = X.extent,
                        K = X.selection,
                        J = W[0][0],
                        Z = W[0][1],
                        $ = W[1][0],
                        G = W[1][1],
                        Q = B && V && i.event.shiftKey,
                        tt = i.mouse(F),
                        nt = tt,
                        et = d(F, arguments).beforestart();
                    "overlay" === Y ? X.selection = K = [
                        [h = t === S ? J : tt[0], g = t === M ? Z : tt[1]],
                        [E = t === S ? $ : h, I = t === M ? G : g]
                    ] : (h = K[0][0], g = K[0][1], E = K[1][0], I = K[1][1]), v = h, y = g, C = E, P = I;
                    var rt = i.select(F).attr("pointer-events", "none"),
                        it = rt.selectAll(".overlay").attr("cursor", k[Y]);
                    if (i.event.touches) rt.on("touchmove.brush", n, !0).on("touchend.brush touchcancel.brush", a, !0);
                    else {
                        var ot = i.select(i.event.view).on("keydown.brush", c, !0).on("keyup.brush", s, !0).on("mousemove.brush", n, !0).on("mouseup.brush", a, !0);
                        e.dragDisable(i.event.view)
                    }
                    u(), o.interrupt(F), p.call(F), et.start()
                }
            }

            function C() {
                var n = this.__brush || {
                    selection: null
                };
                return n.extent = I.apply(this, arguments), n.dim = t, n
            }
            var O, I = s,
                L = c,
                P = n.dispatch(h, "start", "brush", "end"),
                D = 6;
            return h.move = function(n, e) {
                n.selection ? n.on("start.brush", function() {
                    d(this, arguments).beforestart().start()
                }).on("interrupt.brush end.brush", function() {
                    d(this, arguments).end()
                }).tween("brush", function() {
                    function n(t) {
                        o.selection = 1 === t && l(c) ? null : s(t), p.call(i), u.brush()
                    }
                    var i = this,
                        o = i.__brush,
                        u = d(i, arguments),
                        a = o.selection,
                        c = t.input("function" == typeof e ? e.apply(this, arguments) : e, o.extent),
                        s = r.interpolate(a, c);
                    return a && c ? n : n(1)
                }) : n.each(function() {
                    var n = this,
                        r = arguments,
                        i = n.__brush,
                        u = t.input("function" == typeof e ? e.apply(n, r) : e, i.extent),
                        a = d(n, r).beforestart();
                    o.interrupt(n), i.selection = null == u || l(u) ? null : u, p.call(n), a.start().brush().end()
                })
            }, v.prototype = {
                beforestart: function() {
                    return 1 === ++this.active && (this.state.emitter = this, this.starting = !0), this
                },
                start: function() {
                    return this.starting && (this.starting = !1, this.emit("start")), this
                },
                brush: function() {
                    return this.emit("brush"), this
                },
                end: function() {
                    return 0 === --this.active && (delete this.state.emitter, this.emit("end")), this
                },
                emit: function(n) {
                    i.customEvent(new y(h, n, t.output(this.state.selection)), P.apply, P, [n, this.that, this.args])
                }
            }, h.extent = function(t) {
                return arguments.length ? (I = "function" == typeof t ? t : g([
                    [+t[0][0], +t[0][1]],
                    [+t[1][0], +t[1][1]]
                ]), h) : I
            }, h.filter = function(t) {
                return arguments.length ? (L = "function" == typeof t ? t : g(!!t), h) : L
            }, h.handleSize = function(t) {
                return arguments.length ? (D = +t, h) : D
            }, h.on = function() {
                var t = P.on.apply(P, arguments);
                return t === P ? h : t
            }, h
        }
        var g = function(t) {
                return function() {
                    return t
                }
            },
            y = function(t, n, e) {
                this.target = t, this.type = n, this.selection = e
            },
            _ = function() {
                i.event.preventDefault(), i.event.stopImmediatePropagation()
            },
            m = {
                name: "drag"
            },
            x = {
                name: "space"
            },
            b = {
                name: "handle"
            },
            w = {
                name: "center"
            },
            M = {
                name: "x",
                handles: ["e", "w"].map(a),
                input: function(t, n) {
                    return t && [
                        [t[0], n[0][1]],
                        [t[1], n[1][1]]
                    ]
                },
                output: function(t) {
                    return t && [t[0][0], t[1][0]]
                }
            },
            S = {
                name: "y",
                handles: ["n", "s"].map(a),
                input: function(t, n) {
                    return t && [
                        [n[0][0], t[0]],
                        [n[1][0], t[1]]
                    ]
                },
                output: function(t) {
                    return t && [t[0][1], t[1][1]]
                }
            },
            E = {
                name: "xy",
                handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(a),
                input: function(t) {
                    return t
                },
                output: function(t) {
                    return t
                }
            },
            k = {
                overlay: "crosshair",
                selection: "move",
                n: "ns-resize",
                e: "ew-resize",
                s: "ns-resize",
                w: "ew-resize",
                nw: "nwse-resize",
                ne: "nesw-resize",
                se: "nwse-resize",
                sw: "nesw-resize"
            },
            N = {
                e: "w",
                w: "e",
                nw: "ne",
                ne: "nw",
                se: "sw",
                sw: "se"
            },
            A = {
                n: "s",
                s: "n",
                nw: "sw",
                ne: "se",
                se: "ne",
                sw: "nw"
            },
            T = {
                overlay: 1,
                selection: 1,
                n: null,
                e: 1,
                s: null,
                w: -1,
                nw: -1,
                ne: 1,
                se: 1,
                sw: -1
            },
            z = {
                overlay: 1,
                selection: 1,
                n: -1,
                e: null,
                s: 1,
                w: null,
                nw: -1,
                ne: -1,
                se: 1,
                sw: 1
            },
            C = function() {
                return v(E)
            };
        t.brush = C, t.brushX = p, t.brushY = d, t.brushSelection = h, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, e) {
        e(n)
    }(this, function(t) {
        "use strict";

        function n() {
            for (var t, n = 0, r = arguments.length, i = {}; n < r; ++n) {
                if (!(t = arguments[n] + "") || t in i) throw new Error("illegal type: " + t);
                i[t] = []
            }
            return new e(i)
        }

        function e(t) {
            this._ = t
        }

        function r(t, n) {
            return t.trim().split(/^|\s+/).map(function(t) {
                var e = "",
                    r = t.indexOf(".");
                if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                return {
                    type: t,
                    name: e
                }
            })
        }

        function i(t, n) {
            for (var e, r = 0, i = t.length; r < i; ++r)
                if ((e = t[r]).name === n) return e.value
        }

        function o(t, n, e) {
            for (var r = 0, i = t.length; r < i; ++r)
                if (t[r].name === n) {
                    t[r] = u, t = t.slice(0, r).concat(t.slice(r + 1));
                    break
                }
            return null != e && t.push({
                name: n,
                value: e
            }), t
        }
        var u = {
            value: function() {}
        };
        e.prototype = n.prototype = {
            constructor: e,
            on: function(t, n) {
                var e, u = this._,
                    a = r(t + "", u),
                    c = -1,
                    s = a.length; {
                    if (!(arguments.length < 2)) {
                        if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                        for (; ++c < s;)
                            if (e = (t = a[c]).type) u[e] = o(u[e], t.name, n);
                            else if (null == n)
                            for (e in u) u[e] = o(u[e], t.name, null);
                        return this
                    }
                    for (; ++c < s;)
                        if ((e = (t = a[c]).type) && (e = i(u[e], t.name))) return e
                }
            },
            copy: function() {
                var t = {},
                    n = this._;
                for (var r in n) t[r] = n[r].slice();
                return new e(t)
            },
            call: function(t, n) {
                if ((e = arguments.length - 2) > 0)
                    for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2];
                if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                for (r = this._[t], o = 0, e = r.length; o < e; ++o) r[o].value.apply(n, i)
            },
            apply: function(t, n, e) {
                if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e)
            }
        }, t.dispatch = n, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, r) {
        r(n, e(6), e(8))
    }(this, function(t, n, e) {
        "use strict";

        function r() {
            e.event.stopImmediatePropagation()
        }

        function i(t, n) {
            var r = t.document.documentElement,
                i = e.select(t).on("dragstart.drag", null);
            n && (i.on("click.drag", f, !0), setTimeout(function() {
                i.on("click.drag", null)
            }, 0)), "onselectstart" in r ? i.on("selectstart.drag", null) : (r.style.MozUserSelect = r.__noselect, delete r.__noselect)
        }

        function o(t, n, e, r, i, o, u, a, c, s) {
            this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = o, this.y = u, this.dx = a, this.dy = c, this._ = s
        }

        function u() {
            return !e.event.button
        }

        function a() {
            return this.parentNode
        }

        function c(t) {
            return null == t ? {
                x: e.event.x,
                y: e.event.y
            } : t
        }

        function s() {
            return "ontouchstart" in this
        }
        var f = function() {
                e.event.preventDefault(), e.event.stopImmediatePropagation()
            },
            l = function(t) {
                var n = t.document.documentElement,
                    r = e.select(t).on("dragstart.drag", f, !0);
                "onselectstart" in n ? r.on("selectstart.drag", f, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
            },
            h = function(t) {
                return function() {
                    return t
                }
            };
        o.prototype.on = function() {
            var t = this._.on.apply(this._, arguments);
            return t === this._ ? this : t
        };
        var p = function() {
            function t(t) {
                t.on("mousedown.drag", p).filter(N).on("touchstart.drag", g).on("touchmove.drag", y).on("touchend.drag touchcancel.drag", _).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
            }

            function p() {
                if (!M && S.apply(this, arguments)) {
                    var t = m("mouse", E.apply(this, arguments), e.mouse, this, arguments);
                    t && (e.select(e.event.view).on("mousemove.drag", d, !0).on("mouseup.drag", v, !0), l(e.event.view), r(), w = !1, x = e.event.clientX, b = e.event.clientY, t("start"))
                }
            }

            function d() {
                if (f(), !w) {
                    var t = e.event.clientX - x,
                        n = e.event.clientY - b;
                    w = t * t + n * n > C
                }
                A.mouse("drag")
            }

            function v() {
                e.select(e.event.view).on("mousemove.drag mouseup.drag", null), i(e.event.view, w), f(), A.mouse("end")
            }

            function g() {
                if (S.apply(this, arguments)) {
                    var t, n, i = e.event.changedTouches,
                        o = E.apply(this, arguments),
                        u = i.length;
                    for (t = 0; t < u; ++t)(n = m(i[t].identifier, o, e.touch, this, arguments)) && (r(), n("start"))
                }
            }

            function y() {
                var t, n, r = e.event.changedTouches,
                    i = r.length;
                for (t = 0; t < i; ++t)(n = A[r[t].identifier]) && (f(), n("drag"))
            }

            function _() {
                var t, n, i = e.event.changedTouches,
                    o = i.length;
                for (M && clearTimeout(M), M = setTimeout(function() {
                        M = null
                    }, 500), t = 0; t < o; ++t)(n = A[i[t].identifier]) && (r(), n("end"))
            }

            function m(n, r, i, u, a) {
                var c, s, f, l = i(r, n),
                    h = T.copy();
                if (e.customEvent(new o(t, "beforestart", c, n, z, l[0], l[1], 0, 0, h), function() {
                        return null != (e.event.subject = c = k.apply(u, a)) && (s = c.x - l[0] || 0, f = c.y - l[1] || 0, !0)
                    })) return function p(d) {
                    var v, g = l;
                    switch (d) {
                        case "start":
                            A[n] = p, v = z++;
                            break;
                        case "end":
                            delete A[n], --z;
                        case "drag":
                            l = i(r, n), v = z
                    }
                    e.customEvent(new o(t, d, c, n, v, l[0] + s, l[1] + f, l[0] - g[0], l[1] - g[1], h), h.apply, h, [d, u, a])
                }
            }
            var x, b, w, M, S = u,
                E = a,
                k = c,
                N = s,
                A = {},
                T = n.dispatch("start", "drag", "end"),
                z = 0,
                C = 0;
            return t.filter = function(n) {
                return arguments.length ? (S = "function" == typeof n ? n : h(!!n), t) : S
            }, t.container = function(n) {
                return arguments.length ? (E = "function" == typeof n ? n : h(n), t) : E
            }, t.subject = function(n) {
                return arguments.length ? (k = "function" == typeof n ? n : h(n), t) : k
            }, t.touchable = function(n) {
                return arguments.length ? (N = "function" == typeof n ? n : h(!!n), t) : N
            }, t.on = function() {
                var n = T.on.apply(T, arguments);
                return n === T ? t : n
            }, t.clickDistance = function(n) {
                return arguments.length ? (C = (n = +n) * n, t) : Math.sqrt(C)
            }, t
        };
        t.drag = p, t.dragDisable = l, t.dragEnable = i, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, e) {
        e(n)
    }(this, function(t) {
        "use strict";

        function n(t) {
            return function() {
                var n = this.ownerDocument,
                    e = this.namespaceURI;
                return e === Q && n.documentElement.namespaceURI === Q ? n.createElement(t) : n.createElementNS(e, t)
            }
        }

        function e(t) {
            return function() {
                return this.ownerDocument.createElementNS(t.space, t.local)
            }
        }

        function r() {
            return new i
        }

        function i() {
            this._ = "@" + (++rt).toString(36)
        }

        function o(t, n, e) {
            return t = u(t, n, e),
                function(n) {
                    var e = n.relatedTarget;
                    e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
                }
        }

        function u(n, e, r) {
            return function(i) {
                var o = t.event;
                t.event = i;
                try {
                    n.call(this, this.__data__, e, r)
                } finally {
                    t.event = o
                }
            }
        }

        function a(t) {
            return t.trim().split(/^|\s+/).map(function(t) {
                var n = "",
                    e = t.indexOf(".");
                return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
                    type: t,
                    name: n
                }
            })
        }

        function c(t) {
            return function() {
                var n = this.__on;
                if (n) {
                    for (var e, r = 0, i = -1, o = n.length; r < o; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
                    ++i ? n.length = i : delete this.__on
                }
            }
        }

        function s(t, n, e) {
            var r = ct.hasOwnProperty(t.type) ? o : u;
            return function(i, o, u) {
                var a, c = this.__on,
                    s = r(n, o, u);
                if (c)
                    for (var f = 0, l = c.length; f < l; ++f)
                        if ((a = c[f]).type === t.type && a.name === t.name) return this.removeEventListener(a.type, a.listener, a.capture), this.addEventListener(a.type, a.listener = s, a.capture = e), void(a.value = n);
                this.addEventListener(t.type, s, e), a = {
                    type: t.type,
                    name: t.name,
                    value: n,
                    listener: s,
                    capture: e
                }, c ? c.push(a) : this.__on = [a]
            }
        }

        function f(n, e, r, i) {
            var o = t.event;
            n.sourceEvent = t.event, t.event = n;
            try {
                return e.apply(r, i)
            } finally {
                t.event = o
            }
        }

        function l() {}

        function h() {
            return []
        }

        function p(t, n) {
            this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
        }

        function d(t, n, e, r, i, o) {
            for (var u, a = 0, c = n.length, s = o.length; a < s; ++a)(u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new p(t, o[a]);
            for (; a < c; ++a)(u = n[a]) && (i[a] = u)
        }

        function v(t, n, e, r, i, o, u) {
            var a, c, s, f = {},
                l = n.length,
                h = o.length,
                d = new Array(l);
            for (a = 0; a < l; ++a)(c = n[a]) && (d[a] = s = wt + u.call(c, c.__data__, a, n), s in f ? i[a] = c : f[s] = c);
            for (a = 0; a < h; ++a) s = wt + u.call(t, o[a], a, o), (c = f[s]) ? (r[a] = c, c.__data__ = o[a], f[s] = null) : e[a] = new p(t, o[a]);
            for (a = 0; a < l; ++a)(c = n[a]) && f[d[a]] === c && (i[a] = c)
        }

        function g(t, n) {
            return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
        }

        function y(t) {
            return function() {
                this.removeAttribute(t)
            }
        }

        function _(t) {
            return function() {
                this.removeAttributeNS(t.space, t.local)
            }
        }

        function m(t, n) {
            return function() {
                this.setAttribute(t, n)
            }
        }

        function x(t, n) {
            return function() {
                this.setAttributeNS(t.space, t.local, n)
            }
        }

        function b(t, n) {
            return function() {
                var e = n.apply(this, arguments);
                null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
            }
        }

        function w(t, n) {
            return function() {
                var e = n.apply(this, arguments);
                null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
            }
        }

        function M(t) {
            return function() {
                this.style.removeProperty(t)
            }
        }

        function S(t, n, e) {
            return function() {
                this.style.setProperty(t, n, e)
            }
        }

        function E(t, n, e) {
            return function() {
                var r = n.apply(this, arguments);
                null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
            }
        }

        function k(t, n) {
            return t.style.getPropertyValue(n) || Pt(t).getComputedStyle(t, null).getPropertyValue(n)
        }

        function N(t) {
            return function() {
                delete this[t]
            }
        }

        function A(t, n) {
            return function() {
                this[t] = n
            }
        }

        function T(t, n) {
            return function() {
                var e = n.apply(this, arguments);
                null == e ? delete this[t] : this[t] = e
            }
        }

        function z(t) {
            return t.trim().split(/^|\s+/)
        }

        function C(t) {
            return t.classList || new O(t)
        }

        function O(t) {
            this._node = t, this._names = z(t.getAttribute("class") || "")
        }

        function I(t, n) {
            for (var e = C(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
        }

        function L(t, n) {
            for (var e = C(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
        }

        function P(t) {
            return function() {
                I(this, t)
            }
        }

        function D(t) {
            return function() {
                L(this, t)
            }
        }

        function q(t, n) {
            return function() {
                (n.apply(this, arguments) ? I : L)(this, t)
            }
        }

        function R() {
            this.textContent = ""
        }

        function j(t) {
            return function() {
                this.textContent = t
            }
        }

        function U(t) {
            return function() {
                var n = t.apply(this, arguments);
                this.textContent = null == n ? "" : n
            }
        }

        function F() {
            this.innerHTML = ""
        }

        function Y(t) {
            return function() {
                this.innerHTML = t
            }
        }

        function H(t) {
            return function() {
                var n = t.apply(this, arguments);
                this.innerHTML = null == n ? "" : n
            }
        }

        function B() {
            this.nextSibling && this.parentNode.appendChild(this)
        }

        function V() {
            this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
        }

        function X() {
            return null
        }

        function W() {
            var t = this.parentNode;
            t && t.removeChild(this)
        }

        function K(t, n, e) {
            var r = Pt(t),
                i = r.CustomEvent;
            "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
        }

        function J(t, n) {
            return function() {
                return K(this, t, n)
            }
        }

        function Z(t, n) {
            return function() {
                return K(this, t, n.apply(this, arguments))
            }
        }

        function $(t, n) {
            this._groups = t, this._parents = n
        }

        function G() {
            return new $([
                [document.documentElement]
            ], Kt)
        }
        var Q = "http://www.w3.org/1999/xhtml",
            tt = {
                svg: "http://www.w3.org/2000/svg",
                xhtml: Q,
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            },
            nt = function(t) {
                var n = t += "",
                    e = n.indexOf(":");
                return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), tt.hasOwnProperty(n) ? {
                    space: tt[n],
                    local: t
                } : t
            },
            et = function(t) {
                var r = nt(t);
                return (r.local ? e : n)(r)
            },
            rt = 0;
        i.prototype = r.prototype = {
            constructor: i,
            get: function(t) {
                for (var n = this._; !(n in t);)
                    if (!(t = t.parentNode)) return;
                return t[n]
            },
            set: function(t, n) {
                return t[this._] = n
            },
            remove: function(t) {
                return this._ in t && delete t[this._]
            },
            toString: function() {
                return this._
            }
        };
        var it = function(t) {
            return function() {
                return this.matches(t)
            }
        };
        if ("undefined" != typeof document) {
            var ot = document.documentElement;
            if (!ot.matches) {
                var ut = ot.webkitMatchesSelector || ot.msMatchesSelector || ot.mozMatchesSelector || ot.oMatchesSelector;
                it = function(t) {
                    return function() {
                        return ut.call(this, t)
                    }
                }
            }
        }
        var at = it,
            ct = {};
        if (t.event = null, "undefined" != typeof document) {
            var st = document.documentElement;
            "onmouseenter" in st || (ct = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            })
        }
        var ft = function(t, n, e) {
                var r, i, o = a(t + ""),
                    u = o.length; {
                    if (!(arguments.length < 2)) {
                        for (f = n ? s : c, null == e && (e = !1), r = 0; r < u; ++r) this.each(f(o[r], n, e));
                        return this
                    }
                    var f = this.node().__on;
                    if (f)
                        for (var l, h = 0, p = f.length; h < p; ++h)
                            for (r = 0, l = f[h]; r < u; ++r)
                                if ((i = o[r]).type === l.type && i.name === l.name) return l.value
                }
            },
            lt = function() {
                for (var n, e = t.event; n = e.sourceEvent;) e = n;
                return e
            },
            ht = function(t, n) {
                var e = t.ownerSVGElement || t;
                if (e.createSVGPoint) {
                    var r = e.createSVGPoint();
                    return r.x = n.clientX, r.y = n.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y]
                }
                var i = t.getBoundingClientRect();
                return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
            },
            pt = function(t) {
                var n = lt();
                return n.changedTouches && (n = n.changedTouches[0]), ht(t, n)
            },
            dt = function(t) {
                return null == t ? l : function() {
                    return this.querySelector(t)
                }
            },
            vt = function(t) {
                "function" != typeof t && (t = dt(t));
                for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                    for (var o, u, a = n[i], c = a.length, s = r[i] = new Array(c), f = 0; f < c; ++f)(o = a[f]) && (u = t.call(o, o.__data__, f, a)) && ("__data__" in o && (u.__data__ = o.__data__), s[f] = u);
                return new $(r, this._parents)
            },
            gt = function(t) {
                return null == t ? h : function() {
                    return this.querySelectorAll(t)
                }
            },
            yt = function(t) {
                "function" != typeof t && (t = gt(t));
                for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
                    for (var u, a = n[o], c = a.length, s = 0; s < c; ++s)(u = a[s]) && (r.push(t.call(u, u.__data__, s, a)), i.push(u));
                return new $(r, i)
            },
            _t = function(t) {
                "function" != typeof t && (t = at(t));
                for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                    for (var o, u = n[i], a = u.length, c = r[i] = [], s = 0; s < a; ++s)(o = u[s]) && t.call(o, o.__data__, s, u) && c.push(o);
                return new $(r, this._parents)
            },
            mt = function(t) {
                return new Array(t.length)
            },
            xt = function() {
                return new $(this._enter || this._groups.map(mt), this._parents)
            };
        p.prototype = {
            constructor: p,
            appendChild: function(t) {
                return this._parent.insertBefore(t, this._next)
            },
            insertBefore: function(t, n) {
                return this._parent.insertBefore(t, n)
            },
            querySelector: function(t) {
                return this._parent.querySelector(t)
            },
            querySelectorAll: function(t) {
                return this._parent.querySelectorAll(t)
            }
        };
        var bt = function(t) {
                return function() {
                    return t
                }
            },
            wt = "$",
            Mt = function(t, n) {
                if (!t) return p = new Array(this.size()), s = -1, this.each(function(t) {
                    p[++s] = t
                }), p;
                var e = n ? v : d,
                    r = this._parents,
                    i = this._groups;
                "function" != typeof t && (t = bt(t));
                for (var o = i.length, u = new Array(o), a = new Array(o), c = new Array(o), s = 0; s < o; ++s) {
                    var f = r[s],
                        l = i[s],
                        h = l.length,
                        p = t.call(f, f && f.__data__, s, r),
                        g = p.length,
                        y = a[s] = new Array(g),
                        _ = u[s] = new Array(g),
                        m = c[s] = new Array(h);
                    e(f, l, y, _, m, p, n);
                    for (var x, b, w = 0, M = 0; w < g; ++w)
                        if (x = y[w]) {
                            for (w >= M && (M = w + 1); !(b = _[M]) && ++M < g;);
                            x._next = b || null
                        }
                }
                return u = new $(u, r), u._enter = a, u._exit = c, u
            },
            St = function() {
                return new $(this._exit || this._groups.map(mt), this._parents)
            },
            Et = function(t) {
                for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)
                    for (var c, s = n[a], f = e[a], l = s.length, h = u[a] = new Array(l), p = 0; p < l; ++p)(c = s[p] || f[p]) && (h[p] = c);
                for (; a < r; ++a) u[a] = n[a];
                return new $(u, this._parents)
            },
            kt = function() {
                for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                    for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0;)(r = i[o]) && (u && u !== r.nextSibling && u.parentNode.insertBefore(r, u), u = r);
                return this
            },
            Nt = function(t) {
                function n(n, e) {
                    return n && e ? t(n.__data__, e.__data__) : !n - !e
                }
                t || (t = g);
                for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
                    for (var u, a = e[o], c = a.length, s = i[o] = new Array(c), f = 0; f < c; ++f)(u = a[f]) && (s[f] = u);
                    s.sort(n)
                }
                return new $(i, this._parents).order()
            },
            At = function() {
                var t = arguments[0];
                return arguments[0] = this, t.apply(null, arguments), this
            },
            Tt = function() {
                var t = new Array(this.size()),
                    n = -1;
                return this.each(function() {
                    t[++n] = this
                }), t
            },
            zt = function() {
                for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
                        var u = r[i];
                        if (u) return u
                    }
                return null
            },
            Ct = function() {
                var t = 0;
                return this.each(function() {
                    ++t
                }), t
            },
            Ot = function() {
                return !this.node()
            },
            It = function(t) {
                for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                    for (var i, o = n[e], u = 0, a = o.length; u < a; ++u)(i = o[u]) && t.call(i, i.__data__, u, o);
                return this
            },
            Lt = function(t, n) {
                var e = nt(t);
                if (arguments.length < 2) {
                    var r = this.node();
                    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
                }
                return this.each((null == n ? e.local ? _ : y : "function" == typeof n ? e.local ? w : b : e.local ? x : m)(e, n))
            },
            Pt = function(t) {
                return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
            },
            Dt = function(t, n, e) {
                return arguments.length > 1 ? this.each((null == n ? M : "function" == typeof n ? E : S)(t, n, null == e ? "" : e)) : k(this.node(), t)
            },
            qt = function(t, n) {
                return arguments.length > 1 ? this.each((null == n ? N : "function" == typeof n ? T : A)(t, n)) : this.node()[t]
            };
        O.prototype = {
            add: function(t) {
                var n = this._names.indexOf(t);
                n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
            },
            remove: function(t) {
                var n = this._names.indexOf(t);
                n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
            },
            contains: function(t) {
                return this._names.indexOf(t) >= 0
            }
        };
        var Rt = function(t, n) {
                var e = z(t + "");
                if (arguments.length < 2) {
                    for (var r = C(this.node()), i = -1, o = e.length; ++i < o;)
                        if (!r.contains(e[i])) return !1;
                    return !0
                }
                return this.each(("function" == typeof n ? q : n ? P : D)(e, n))
            },
            jt = function(t) {
                return arguments.length ? this.each(null == t ? R : ("function" == typeof t ? U : j)(t)) : this.node().textContent
            },
            Ut = function(t) {
                return arguments.length ? this.each(null == t ? F : ("function" == typeof t ? H : Y)(t)) : this.node().innerHTML
            },
            Ft = function() {
                return this.each(B)
            },
            Yt = function() {
                return this.each(V)
            },
            Ht = function(t) {
                var n = "function" == typeof t ? t : et(t);
                return this.select(function() {
                    return this.appendChild(n.apply(this, arguments))
                })
            },
            Bt = function(t, n) {
                var e = "function" == typeof t ? t : et(t),
                    r = null == n ? X : "function" == typeof n ? n : dt(n);
                return this.select(function() {
                    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
                })
            },
            Vt = function() {
                return this.each(W)
            },
            Xt = function(t) {
                return arguments.length ? this.property("__data__", t) : this.node().__data__
            },
            Wt = function(t, n) {
                return this.each(("function" == typeof n ? Z : J)(t, n))
            },
            Kt = [null];
        $.prototype = G.prototype = {
            constructor: $,
            select: vt,
            selectAll: yt,
            filter: _t,
            data: Mt,
            enter: xt,
            exit: St,
            merge: Et,
            order: kt,
            sort: Nt,
            call: At,
            nodes: Tt,
            node: zt,
            size: Ct,
            empty: Ot,
            each: It,
            attr: Lt,
            style: Dt,
            property: qt,
            classed: Rt,
            text: jt,
            html: Ut,
            raise: Ft,
            lower: Yt,
            append: Ht,
            insert: Bt,
            remove: Vt,
            datum: Xt,
            on: ft,
            dispatch: Wt
        };
        var Jt = function(t) {
                return "string" == typeof t ? new $([
                    [document.querySelector(t)]
                ], [document.documentElement]) : new $([
                    [t]
                ], Kt)
            },
            Zt = function(t) {
                return "string" == typeof t ? new $([document.querySelectorAll(t)], [document.documentElement]) : new $([null == t ? [] : t], Kt)
            },
            $t = function(t, n, e) {
                arguments.length < 3 && (e = n, n = lt().changedTouches);
                for (var r, i = 0, o = n ? n.length : 0; i < o; ++i)
                    if ((r = n[i]).identifier === e) return ht(t, r);
                return null
            },
            Gt = function(t, n) {
                null == n && (n = lt().touches);
                for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e) i[e] = ht(t, n[e]);
                return i
            };
        t.creator = et, t.local = r, t.matcher = at, t.mouse = pt, t.namespace = nt, t.namespaces = tt, t.select = Jt, t.selectAll = Zt, t.selection = G, t.selector = dt, t.selectorAll = gt, t.style = k, t.touch = $t, t.touches = Gt, t.window = Pt, t.customEvent = f, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, r) {
        r(n, e(10))
    }(this, function(t, n) {
        "use strict";

        function e(t, n, e, r, i) {
            var o = t * t,
                u = o * t;
            return ((1 - 3 * t + 3 * o - u) * n + (4 - 6 * o + 3 * u) * e + (1 + 3 * t + 3 * o - 3 * u) * r + u * i) / 6
        }

        function r(t, n) {
            return function(e) {
                return t + e * n
            }
        }

        function i(t, n, e) {
            return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
                function(r) {
                    return Math.pow(t + r * n, e)
                }
        }

        function o(t, n) {
            var e = n - t;
            return e ? r(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : N(isNaN(t) ? n : t)
        }

        function u(t) {
            return 1 === (t = +t) ? a : function(n, e) {
                return e - n ? i(n, e, t) : N(isNaN(n) ? e : n)
            }
        }

        function a(t, n) {
            var e = n - t;
            return e ? r(t, e) : N(isNaN(t) ? n : t)
        }

        function c(t) {
            return function(e) {
                var r, i, o = e.length,
                    u = new Array(o),
                    a = new Array(o),
                    c = new Array(o);
                for (r = 0; r < o; ++r) i = n.rgb(e[r]), u[r] = i.r || 0, a[r] = i.g || 0, c[r] = i.b || 0;
                return u = t(u), a = t(a), c = t(c), i.opacity = 1,
                    function(t) {
                        return i.r = u(t), i.g = a(t), i.b = c(t), i + ""
                    }
            }
        }

        function s(t) {
            return function() {
                return t
            }
        }

        function f(t) {
            return function(n) {
                return t(n) + ""
            }
        }

        function l(t) {
            return "none" === t ? F : (b || (b = document.createElement("DIV"), w = document.documentElement, M = document.defaultView), b.style.transform = t, t = M.getComputedStyle(w.appendChild(b), null).getPropertyValue("transform"), w.removeChild(b), t = t.slice(7, -1).split(","), Y(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
        }

        function h(t) {
            return null == t ? F : (S || (S = document.createElementNS("http://www.w3.org/2000/svg", "g")), S.setAttribute("transform", t), (t = S.transform.baseVal.consolidate()) ? (t = t.matrix, Y(t.a, t.b, t.c, t.d, t.e, t.f)) : F)
        }

        function p(t, n, e, r) {
            function i(t) {
                return t.length ? t.pop() + " " : ""
            }

            function o(t, r, i, o, u, a) {
                if (t !== i || r !== o) {
                    var c = u.push("translate(", null, n, null, e);
                    a.push({
                        i: c - 4,
                        x: I(t, i)
                    }, {
                        i: c - 2,
                        x: I(r, o)
                    })
                } else(i || o) && u.push("translate(" + i + n + o + e)
            }

            function u(t, n, e, o) {
                t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({
                    i: e.push(i(e) + "rotate(", null, r) - 2,
                    x: I(t, n)
                })) : n && e.push(i(e) + "rotate(" + n + r)
            }

            function a(t, n, e, o) {
                t !== n ? o.push({
                    i: e.push(i(e) + "skewX(", null, r) - 2,
                    x: I(t, n)
                }) : n && e.push(i(e) + "skewX(" + n + r)
            }

            function c(t, n, e, r, o, u) {
                if (t !== e || n !== r) {
                    var a = o.push(i(o) + "scale(", null, ",", null, ")");
                    u.push({
                        i: a - 4,
                        x: I(t, e)
                    }, {
                        i: a - 2,
                        x: I(n, r)
                    })
                } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")")
            }
            return function(n, e) {
                var r = [],
                    i = [];
                return n = t(n), e = t(e), o(n.translateX, n.translateY, e.translateX, e.translateY, r, i), u(n.rotate, e.rotate, r, i), a(n.skewX, e.skewX, r, i), c(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i), n = e = null,
                    function(t) {
                        for (var n, e = -1, o = i.length; ++e < o;) r[(n = i[e]).i] = n.x(t);
                        return r.join("")
                    }
            }
        }

        function d(t) {
            return ((t = Math.exp(t)) + 1 / t) / 2
        }

        function v(t) {
            return ((t = Math.exp(t)) - 1 / t) / 2
        }

        function g(t) {
            return ((t = Math.exp(2 * t)) - 1) / (t + 1)
        }

        function y(t) {
            return function(e, r) {
                var i = t((e = n.hsl(e)).h, (r = n.hsl(r)).h),
                    o = a(e.s, r.s),
                    u = a(e.l, r.l),
                    c = a(e.opacity, r.opacity);
                return function(t) {
                    return e.h = i(t), e.s = o(t), e.l = u(t), e.opacity = c(t), e + ""
                }
            }
        }

        function _(t, e) {
            var r = a((t = n.lab(t)).l, (e = n.lab(e)).l),
                i = a(t.a, e.a),
                o = a(t.b, e.b),
                u = a(t.opacity, e.opacity);
            return function(n) {
                return t.l = r(n), t.a = i(n), t.b = o(n), t.opacity = u(n), t + ""
            }
        }

        function m(t) {
            return function(e, r) {
                var i = t((e = n.hcl(e)).h, (r = n.hcl(r)).h),
                    o = a(e.c, r.c),
                    u = a(e.l, r.l),
                    c = a(e.opacity, r.opacity);
                return function(t) {
                    return e.h = i(t), e.c = o(t), e.l = u(t), e.opacity = c(t), e + ""
                }
            }
        }

        function x(t) {
            return function e(r) {
                function i(e, i) {
                    var o = t((e = n.cubehelix(e)).h, (i = n.cubehelix(i)).h),
                        u = a(e.s, i.s),
                        c = a(e.l, i.l),
                        s = a(e.opacity, i.opacity);
                    return function(t) {
                        return e.h = o(t), e.s = u(t), e.l = c(Math.pow(t, r)), e.opacity = s(t), e + ""
                    }
                }
                return r = +r, i.gamma = e, i
            }(1)
        }
        var b, w, M, S, E = function(t) {
                var n = t.length - 1;
                return function(r) {
                    var i = r <= 0 ? r = 0 : r >= 1 ? (r = 1, n - 1) : Math.floor(r * n),
                        o = t[i],
                        u = t[i + 1],
                        a = i > 0 ? t[i - 1] : 2 * o - u,
                        c = i < n - 1 ? t[i + 2] : 2 * u - o;
                    return e((r - i / n) * n, a, o, u, c)
                }
            },
            k = function(t) {
                var n = t.length;
                return function(r) {
                    var i = Math.floor(((r %= 1) < 0 ? ++r : r) * n),
                        o = t[(i + n - 1) % n],
                        u = t[i % n],
                        a = t[(i + 1) % n],
                        c = t[(i + 2) % n];
                    return e((r - i / n) * n, o, u, a, c)
                }
            },
            N = function(t) {
                return function() {
                    return t
                }
            },
            A = function t(e) {
                function r(t, e) {
                    var r = i((t = n.rgb(t)).r, (e = n.rgb(e)).r),
                        o = i(t.g, e.g),
                        u = i(t.b, e.b),
                        c = a(t.opacity, e.opacity);
                    return function(n) {
                        return t.r = r(n), t.g = o(n), t.b = u(n), t.opacity = c(n), t + ""
                    }
                }
                var i = u(e);
                return r.gamma = t, r
            }(1),
            T = c(E),
            z = c(k),
            C = function(t, n) {
                var e, r = n ? n.length : 0,
                    i = t ? Math.min(r, t.length) : 0,
                    o = new Array(r),
                    u = new Array(r);
                for (e = 0; e < i; ++e) o[e] = R(t[e], n[e]);
                for (; e < r; ++e) u[e] = n[e];
                return function(t) {
                    for (e = 0; e < i; ++e) u[e] = o[e](t);
                    return u
                }
            },
            O = function(t, n) {
                var e = new Date;
                return t = +t, n -= t,
                    function(r) {
                        return e.setTime(t + n * r), e
                    }
            },
            I = function(t, n) {
                return t = +t, n -= t,
                    function(e) {
                        return t + n * e
                    }
            },
            L = function(t, n) {
                var e, r = {},
                    i = {};
                null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {});
                for (e in n) e in t ? r[e] = R(t[e], n[e]) : i[e] = n[e];
                return function(t) {
                    for (e in r) i[e] = r[e](t);
                    return i
                }
            },
            P = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
            D = new RegExp(P.source, "g"),
            q = function(t, n) {
                var e, r, i, o = P.lastIndex = D.lastIndex = 0,
                    u = -1,
                    a = [],
                    c = [];
                for (t += "", n += "";
                    (e = P.exec(t)) && (r = D.exec(n));)(i = r.index) > o && (i = n.slice(o, i), a[u] ? a[u] += i : a[++u] = i), (e = e[0]) === (r = r[0]) ? a[u] ? a[u] += r : a[++u] = r : (a[++u] = null, c.push({
                    i: u,
                    x: I(e, r)
                })), o = D.lastIndex;
                return o < n.length && (i = n.slice(o), a[u] ? a[u] += i : a[++u] = i), a.length < 2 ? c[0] ? f(c[0].x) : s(n) : (n = c.length, function(t) {
                    for (var e, r = 0; r < n; ++r) a[(e = c[r]).i] = e.x(t);
                    return a.join("")
                })
            },
            R = function(t, e) {
                var r, i = typeof e;
                return null == e || "boolean" === i ? N(e) : ("number" === i ? I : "string" === i ? (r = n.color(e)) ? (e = r, A) : q : e instanceof n.color ? A : e instanceof Date ? O : Array.isArray(e) ? C : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? L : I)(t, e)
            },
            j = function(t, n) {
                return t = +t, n -= t,
                    function(e) {
                        return Math.round(t + n * e)
                    }
            },
            U = 180 / Math.PI,
            F = {
                translateX: 0,
                translateY: 0,
                rotate: 0,
                skewX: 0,
                scaleX: 1,
                scaleY: 1
            },
            Y = function(t, n, e, r, i, o) {
                var u, a, c;
                return (u = Math.sqrt(t * t + n * n)) && (t /= u, n /= u), (c = t * e + n * r) && (e -= t * c, r -= n * c), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, c /= a), t * r < n * e && (t = -t, n = -n, c = -c, u = -u), {
                    translateX: i,
                    translateY: o,
                    rotate: Math.atan2(n, t) * U,
                    skewX: Math.atan(c) * U,
                    scaleX: u,
                    scaleY: a
                }
            },
            H = p(l, "px, ", "px)", "deg)"),
            B = p(h, ", ", ")", ")"),
            V = Math.SQRT2,
            X = 2,
            W = 4,
            K = 1e-12,
            J = function(t, n) {
                var e, r, i = t[0],
                    o = t[1],
                    u = t[2],
                    a = n[0],
                    c = n[1],
                    s = n[2],
                    f = a - i,
                    l = c - o,
                    h = f * f + l * l;
                if (h < K) r = Math.log(s / u) / V, e = function(t) {
                    return [i + t * f, o + t * l, u * Math.exp(V * t * r)]
                };
                else {
                    var p = Math.sqrt(h),
                        y = (s * s - u * u + W * h) / (2 * u * X * p),
                        _ = (s * s - u * u - W * h) / (2 * s * X * p),
                        m = Math.log(Math.sqrt(y * y + 1) - y),
                        x = Math.log(Math.sqrt(_ * _ + 1) - _);
                    r = (x - m) / V, e = function(t) {
                        var n = t * r,
                            e = d(m),
                            a = u / (X * p) * (e * g(V * n + m) - v(m));
                        return [i + a * f, o + a * l, u * e / d(V * n + m)]
                    }
                }
                return e.duration = 1e3 * r, e
            },
            Z = y(o),
            $ = y(a),
            G = m(o),
            Q = m(a),
            tt = x(o),
            nt = x(a),
            et = function(t, n) {
                for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
                return e
            };
        t.interpolate = R, t.interpolateArray = C, t.interpolateBasis = E, t.interpolateBasisClosed = k, t.interpolateDate = O, t.interpolateNumber = I, t.interpolateObject = L, t.interpolateRound = j, t.interpolateString = q, t.interpolateTransformCss = H, t.interpolateTransformSvg = B, t.interpolateZoom = J, t.interpolateRgb = A, t.interpolateRgbBasis = T, t.interpolateRgbBasisClosed = z, t.interpolateHsl = Z, t.interpolateHslLong = $, t.interpolateLab = _, t.interpolateHcl = G, t.interpolateHclLong = Q, t.interpolateCubehelix = tt, t.interpolateCubehelixLong = nt, t.quantize = et, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, e) {
        e(n)
    }(this, function(t) {
        "use strict";

        function n(t, n) {
            var e = Object.create(t.prototype);
            for (var r in n) e[r] = n[r];
            return e
        }

        function e() {}

        function r(t) {
            var n;
            return t = (t + "").trim().toLowerCase(), (n = I.exec(t)) ? (n = parseInt(n[1], 16), new c(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = L.exec(t)) ? i(parseInt(n[1], 16)) : (n = P.exec(t)) ? new c(n[1], n[2], n[3], 1) : (n = D.exec(t)) ? new c(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = q.exec(t)) ? o(n[1], n[2], n[3], n[4]) : (n = R.exec(t)) ? o(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = j.exec(t)) ? s(n[1], n[2] / 100, n[3] / 100, 1) : (n = U.exec(t)) ? s(n[1], n[2] / 100, n[3] / 100, n[4]) : F.hasOwnProperty(t) ? i(F[t]) : "transparent" === t ? new c(NaN, NaN, NaN, 0) : null
        }

        function i(t) {
            return new c(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
        }

        function o(t, n, e, r) {
            return r <= 0 && (t = n = e = NaN), new c(t, n, e, r)
        }

        function u(t) {
            return t instanceof e || (t = r(t)), t ? (t = t.rgb(), new c(t.r, t.g, t.b, t.opacity)) : new c
        }

        function a(t, n, e, r) {
            return 1 === arguments.length ? u(t) : new c(t, n, e, null == r ? 1 : r)
        }

        function c(t, n, e, r) {
            this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
        }

        function s(t, n, e, r) {
            return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new h(t, n, e, r)
        }

        function f(t) {
            if (t instanceof h) return new h(t.h, t.s, t.l, t.opacity);
            if (t instanceof e || (t = r(t)), !t) return new h;
            if (t instanceof h) return t;
            t = t.rgb();
            var n = t.r / 255,
                i = t.g / 255,
                o = t.b / 255,
                u = Math.min(n, i, o),
                a = Math.max(n, i, o),
                c = NaN,
                s = a - u,
                f = (a + u) / 2;
            return s ? (c = n === a ? (i - o) / s + 6 * (i < o) : i === a ? (o - n) / s + 2 : (n - i) / s + 4, s /= f < .5 ? a + u : 2 - a - u, c *= 60) : s = f > 0 && f < 1 ? 0 : c, new h(c, s, f, t.opacity)
        }

        function l(t, n, e, r) {
            return 1 === arguments.length ? f(t) : new h(t, n, e, null == r ? 1 : r)
        }

        function h(t, n, e, r) {
            this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
        }

        function p(t, n, e) {
            return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
        }

        function d(t) {
            if (t instanceof g) return new g(t.l, t.a, t.b, t.opacity);
            if (t instanceof M) {
                var n = t.h * Y;
                return new g(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
            }
            t instanceof c || (t = u(t));
            var e = x(t.r),
                r = x(t.g),
                i = x(t.b),
                o = y((.4124564 * e + .3575761 * r + .1804375 * i) / V),
                a = y((.2126729 * e + .7151522 * r + .072175 * i) / X),
                s = y((.0193339 * e + .119192 * r + .9503041 * i) / W);
            return new g(116 * a - 16, 500 * (o - a), 200 * (a - s), t.opacity)
        }

        function v(t, n, e, r) {
            return 1 === arguments.length ? d(t) : new g(t, n, e, null == r ? 1 : r)
        }

        function g(t, n, e, r) {
            this.l = +t, this.a = +n, this.b = +e, this.opacity = +r
        }

        function y(t) {
            return t > $ ? Math.pow(t, 1 / 3) : t / Z + K
        }

        function _(t) {
            return t > J ? t * t * t : Z * (t - K)
        }

        function m(t) {
            return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
        }

        function x(t) {
            return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }

        function b(t) {
            if (t instanceof M) return new M(t.h, t.c, t.l, t.opacity);
            t instanceof g || (t = d(t));
            var n = Math.atan2(t.b, t.a) * H;
            return new M(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
        }

        function w(t, n, e, r) {
            return 1 === arguments.length ? b(t) : new M(t, n, e, null == r ? 1 : r)
        }

        function M(t, n, e, r) {
            this.h = +t, this.c = +n, this.l = +e, this.opacity = +r
        }

        function S(t) {
            if (t instanceof k) return new k(t.h, t.s, t.l, t.opacity);
            t instanceof c || (t = u(t));
            var n = t.r / 255,
                e = t.g / 255,
                r = t.b / 255,
                i = (ot * r + rt * n - it * e) / (ot + rt - it),
                o = r - i,
                a = (et * (e - i) - tt * o) / nt,
                s = Math.sqrt(a * a + o * o) / (et * i * (1 - i)),
                f = s ? Math.atan2(a, o) * H - 120 : NaN;
            return new k(f < 0 ? f + 360 : f, s, i, t.opacity)
        }

        function E(t, n, e, r) {
            return 1 === arguments.length ? S(t) : new k(t, n, e, null == r ? 1 : r)
        }

        function k(t, n, e, r) {
            this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
        }
        var N = function(t, n, e) {
                t.prototype = n.prototype = e, e.constructor = t
            },
            A = .7,
            T = 1 / A,
            z = "\\s*([+-]?\\d+)\\s*",
            C = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
            O = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
            I = /^#([0-9a-f]{3})$/,
            L = /^#([0-9a-f]{6})$/,
            P = new RegExp("^rgb\\(" + [z, z, z] + "\\)$"),
            D = new RegExp("^rgb\\(" + [O, O, O] + "\\)$"),
            q = new RegExp("^rgba\\(" + [z, z, z, C] + "\\)$"),
            R = new RegExp("^rgba\\(" + [O, O, O, C] + "\\)$"),
            j = new RegExp("^hsl\\(" + [C, O, O] + "\\)$"),
            U = new RegExp("^hsla\\(" + [C, O, O, C] + "\\)$"),
            F = {
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
        N(e, r, {
            displayable: function() {
                return this.rgb().displayable()
            },
            toString: function() {
                return this.rgb() + ""
            }
        }), N(c, a, n(e, {
            brighter: function(t) {
                return t = null == t ? T : Math.pow(T, t), new c(this.r * t, this.g * t, this.b * t, this.opacity)
            },
            darker: function(t) {
                return t = null == t ? A : Math.pow(A, t), new c(this.r * t, this.g * t, this.b * t, this.opacity)
            },
            rgb: function() {
                return this
            },
            displayable: function() {
                return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
            },
            toString: function() {
                var t = this.opacity;
                return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (1 === t ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
            }
        })), N(h, l, n(e, {
            brighter: function(t) {
                return t = null == t ? T : Math.pow(T, t), new h(this.h, this.s, this.l * t, this.opacity)
            },
            darker: function(t) {
                return t = null == t ? A : Math.pow(A, t), new h(this.h, this.s, this.l * t, this.opacity)
            },
            rgb: function() {
                var t = this.h % 360 + 360 * (this.h < 0),
                    n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                    e = this.l,
                    r = e + (e < .5 ? e : 1 - e) * n,
                    i = 2 * e - r;
                return new c(p(t >= 240 ? t - 240 : t + 120, i, r), p(t, i, r), p(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
            },
            displayable: function() {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            }
        }));
        var Y = Math.PI / 180,
            H = 180 / Math.PI,
            B = 18,
            V = .95047,
            X = 1,
            W = 1.08883,
            K = 4 / 29,
            J = 6 / 29,
            Z = 3 * J * J,
            $ = J * J * J;
        N(g, v, n(e, {
            brighter: function(t) {
                return new g(this.l + B * (null == t ? 1 : t), this.a, this.b, this.opacity)
            },
            darker: function(t) {
                return new g(this.l - B * (null == t ? 1 : t), this.a, this.b, this.opacity)
            },
            rgb: function() {
                var t = (this.l + 16) / 116,
                    n = isNaN(this.a) ? t : t + this.a / 500,
                    e = isNaN(this.b) ? t : t - this.b / 200;
                return t = X * _(t), n = V * _(n), e = W * _(e), new c(m(3.2404542 * n - 1.5371385 * t - .4985314 * e), m(-.969266 * n + 1.8760108 * t + .041556 * e), m(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity)
            }
        })), N(M, w, n(e, {
            brighter: function(t) {
                return new M(this.h, this.c, this.l + B * (null == t ? 1 : t), this.opacity)
            },
            darker: function(t) {
                return new M(this.h, this.c, this.l - B * (null == t ? 1 : t), this.opacity)
            },
            rgb: function() {
                return d(this).rgb()
            }
        }));
        var G = -.14861,
            Q = 1.78277,
            tt = -.29227,
            nt = -.90649,
            et = 1.97294,
            rt = et * nt,
            it = et * Q,
            ot = Q * tt - nt * G;
        N(k, E, n(e, {
            brighter: function(t) {
                return t = null == t ? T : Math.pow(T, t), new k(this.h, this.s, this.l * t, this.opacity)
            },
            darker: function(t) {
                return t = null == t ? A : Math.pow(A, t), new k(this.h, this.s, this.l * t, this.opacity)
            },
            rgb: function() {
                var t = isNaN(this.h) ? 0 : (this.h + 120) * Y,
                    n = +this.l,
                    e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                    r = Math.cos(t),
                    i = Math.sin(t);
                return new c(255 * (n + e * (G * r + Q * i)), 255 * (n + e * (tt * r + nt * i)), 255 * (n + e * (et * r)), this.opacity)
            }
        })), t.color = r, t.rgb = a, t.hsl = l, t.lab = v, t.hcl = w, t.cubehelix = E, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, r) {
        r(n, e(8), e(6), e(12), e(9), e(10), e(13))
    }(this, function(t, n, e, r, i, o, u) {
        "use strict";

        function a(t, n) {
            var e = t.__transition;
            if (!e || !(e = e[n]) || e.state > H) throw new Error("too late");
            return e
        }

        function c(t, n) {
            var e = t.__transition;
            if (!e || !(e = e[n]) || e.state > V) throw new Error("too late");
            return e
        }

        function s(t, n) {
            var e = t.__transition;
            if (!e || !(e = e[n])) throw new Error("too late");
            return e
        }

        function f(t, n, e) {
            function i(t) {
                e.state = B, e.timer.restart(o, e.delay, e.time), e.delay <= t && o(t - e.delay)
            }

            function o(i) {
                var f, l, h, p;
                if (e.state !== B) return a();
                for (f in s)
                    if (p = s[f], p.name === e.name) {
                        if (p.state === X) return r.timeout(o);
                        p.state === W ? (p.state = J, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete s[f]) : +f < n && (p.state = J, p.timer.stop(), delete s[f])
                    }
                if (r.timeout(function() {
                        e.state === X && (e.state = W, e.timer.restart(u, e.delay, e.time), u(i))
                    }), e.state = V, e.on.call("start", t, t.__data__, e.index, e.group), e.state === V) {
                    for (e.state = X, c = new Array(h = e.tween.length), f = 0, l = -1; f < h; ++f)(p = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (c[++l] = p);
                    c.length = l + 1
                }
            }

            function u(n) {
                for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(a), e.state = K, 1), i = -1, o = c.length; ++i < o;) c[i].call(null, r);
                e.state === K && (e.on.call("end", t, t.__data__, e.index, e.group), a())
            }

            function a() {
                e.state = J, e.timer.stop(), delete s[n];
                for (var r in s) return;
                delete t.__transition
            }
            var c, s = t.__transition;
            s[n] = e, e.timer = r.timer(i, 0, e.time)
        }

        function l(t, n) {
            var e, r;
            return function() {
                var i = c(this, t),
                    o = i.tween;
                if (o !== e) {
                    r = e = o;
                    for (var u = 0, a = r.length; u < a; ++u)
                        if (r[u].name === n) {
                            r = r.slice(), r.splice(u, 1);
                            break
                        }
                }
                i.tween = r
            }
        }

        function h(t, n, e) {
            var r, i;
            if ("function" != typeof e) throw new Error;
            return function() {
                var o = c(this, t),
                    u = o.tween;
                if (u !== r) {
                    i = (r = u).slice();
                    for (var a = {
                            name: n,
                            value: e
                        }, s = 0, f = i.length; s < f; ++s)
                        if (i[s].name === n) {
                            i[s] = a;
                            break
                        }
                    s === f && i.push(a)
                }
                o.tween = i
            }
        }

        function p(t, n, e) {
            var r = t._id;
            return t.each(function() {
                    var t = c(this, r);
                    (t.value || (t.value = {}))[n] = e.apply(this, arguments)
                }),
                function(t) {
                    return s(t, r).value[n]
                }
        }

        function d(t) {
            return function() {
                this.removeAttribute(t)
            }
        }

        function v(t) {
            return function() {
                this.removeAttributeNS(t.space, t.local)
            }
        }

        function g(t, n, e) {
            var r, i;
            return function() {
                var o = this.getAttribute(t);
                return o === e ? null : o === r ? i : i = n(r = o, e)
            }
        }

        function y(t, n, e) {
            var r, i;
            return function() {
                var o = this.getAttributeNS(t.space, t.local);
                return o === e ? null : o === r ? i : i = n(r = o, e)
            }
        }

        function _(t, n, e) {
            var r, i, o;
            return function() {
                var u, a = e(this);
                return null == a ? void this.removeAttribute(t) : (u = this.getAttribute(t), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a))
            }
        }

        function m(t, n, e) {
            var r, i, o;
            return function() {
                var u, a = e(this);
                return null == a ? void this.removeAttributeNS(t.space, t.local) : (u = this.getAttributeNS(t.space, t.local), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a))
            }
        }

        function x(t, n) {
            function e() {
                var e = this,
                    r = n.apply(e, arguments);
                return r && function(n) {
                    e.setAttributeNS(t.space, t.local, r(n))
                }
            }
            return e._value = n, e
        }

        function b(t, n) {
            function e() {
                var e = this,
                    r = n.apply(e, arguments);
                return r && function(n) {
                    e.setAttribute(t, r(n))
                }
            }
            return e._value = n, e
        }

        function w(t, n) {
            return function() {
                a(this, t).delay = +n.apply(this, arguments)
            }
        }

        function M(t, n) {
            return n = +n,
                function() {
                    a(this, t).delay = n
                }
        }

        function S(t, n) {
            return function() {
                c(this, t).duration = +n.apply(this, arguments)
            }
        }

        function E(t, n) {
            return n = +n,
                function() {
                    c(this, t).duration = n
                }
        }

        function k(t, n) {
            if ("function" != typeof n) throw new Error;
            return function() {
                c(this, t).ease = n
            }
        }

        function N(t) {
            return (t + "").trim().split(/^|\s+/).every(function(t) {
                var n = t.indexOf(".");
                return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
            })
        }

        function A(t, n, e) {
            var r, i, o = N(n) ? a : c;
            return function() {
                var u = o(this, t),
                    a = u.on;
                a !== r && (i = (r = a).copy()).on(n, e), u.on = i
            }
        }

        function T(t) {
            return function() {
                var n = this.parentNode;
                for (var e in this.__transition)
                    if (+e !== t) return;
                n && n.removeChild(this)
            }
        }

        function z(t, e) {
            var r, i, o;
            return function() {
                var u = n.style(this, t),
                    a = (this.style.removeProperty(t), n.style(this, t));
                return u === a ? null : u === r && a === i ? o : o = e(r = u, i = a)
            }
        }

        function C(t) {
            return function() {
                this.style.removeProperty(t)
            }
        }

        function O(t, e, r) {
            var i, o;
            return function() {
                var u = n.style(this, t);
                return u === r ? null : u === i ? o : o = e(i = u, r)
            }
        }

        function I(t, e, r) {
            var i, o, u;
            return function() {
                var a = n.style(this, t),
                    c = r(this);
                return null == c && (this.style.removeProperty(t), c = n.style(this, t)), a === c ? null : a === i && c === o ? u : u = e(i = a, o = c)
            }
        }

        function L(t, n, e) {
            function r() {
                var r = this,
                    i = n.apply(r, arguments);
                return i && function(n) {
                    r.style.setProperty(t, i(n), e)
                }
            }
            return r._value = n, r
        }

        function P(t) {
            return function() {
                this.textContent = t
            }
        }

        function D(t) {
            return function() {
                var n = t(this);
                this.textContent = null == n ? "" : n
            }
        }

        function q(t, n, e, r) {
            this._groups = t, this._parents = n, this._name = e, this._id = r
        }

        function R(t) {
            return n.selection().transition(t)
        }

        function j() {
            return ++_t
        }

        function U(t, n) {
            for (var e; !(e = t.__transition) || !(e = e[n]);)
                if (!(t = t.parentNode)) return xt.time = r.now(), xt;
            return e
        }
        var F = e.dispatch("start", "end", "interrupt"),
            Y = [],
            H = 0,
            B = 1,
            V = 2,
            X = 3,
            W = 4,
            K = 5,
            J = 6,
            Z = function(t, n, e, r, i, o) {
                var u = t.__transition;
                if (u) {
                    if (e in u) return
                } else t.__transition = {};
                f(t, e, {
                    name: n,
                    index: r,
                    group: i,
                    on: F,
                    tween: Y,
                    time: o.time,
                    delay: o.delay,
                    duration: o.duration,
                    ease: o.ease,
                    timer: null,
                    state: H
                })
            },
            $ = function(t, n) {
                var e, r, i, o = t.__transition,
                    u = !0;
                if (o) {
                    n = null == n ? null : n + "";
                    for (i in o)(e = o[i]).name === n ? (r = e.state > V && e.state < K, e.state = J, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete o[i]) : u = !1;
                    u && delete t.__transition
                }
            },
            G = function(t) {
                return this.each(function() {
                    $(this, t)
                })
            },
            Q = function(t, n) {
                var e = this._id;
                if (t += "", arguments.length < 2) {
                    for (var r, i = s(this.node(), e).tween, o = 0, u = i.length; o < u; ++o)
                        if ((r = i[o]).name === t) return r.value;
                    return null
                }
                return this.each((null == n ? l : h)(e, t, n))
            },
            tt = function(t, n) {
                var e;
                return ("number" == typeof n ? i.interpolateNumber : n instanceof o.color ? i.interpolateRgb : (e = o.color(n)) ? (n = e, i.interpolateRgb) : i.interpolateString)(t, n)
            },
            nt = function(t, e) {
                var r = n.namespace(t),
                    o = "transform" === r ? i.interpolateTransformSvg : tt;
                return this.attrTween(t, "function" == typeof e ? (r.local ? m : _)(r, o, p(this, "attr." + t, e)) : null == e ? (r.local ? v : d)(r) : (r.local ? y : g)(r, o, e + ""))
            },
            et = function(t, e) {
                var r = "attr." + t;
                if (arguments.length < 2) return (r = this.tween(r)) && r._value;
                if (null == e) return this.tween(r, null);
                if ("function" != typeof e) throw new Error;
                var i = n.namespace(t);
                return this.tween(r, (i.local ? x : b)(i, e))
            },
            rt = function(t) {
                var n = this._id;
                return arguments.length ? this.each(("function" == typeof t ? w : M)(n, t)) : s(this.node(), n).delay
            },
            it = function(t) {
                var n = this._id;
                return arguments.length ? this.each(("function" == typeof t ? S : E)(n, t)) : s(this.node(), n).duration
            },
            ot = function(t) {
                var n = this._id;
                return arguments.length ? this.each(k(n, t)) : s(this.node(), n).ease
            },
            ut = function(t) {
                "function" != typeof t && (t = n.matcher(t));
                for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o)
                    for (var u, a = e[o], c = a.length, s = i[o] = [], f = 0; f < c; ++f)(u = a[f]) && t.call(u, u.__data__, f, a) && s.push(u);
                return new q(i, this._parents, this._name, this._id)
            },
            at = function(t) {
                if (t._id !== this._id) throw new Error;
                for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)
                    for (var c, s = n[a], f = e[a], l = s.length, h = u[a] = new Array(l), p = 0; p < l; ++p)(c = s[p] || f[p]) && (h[p] = c);
                for (; a < r; ++a) u[a] = n[a];
                return new q(u, this._parents, this._name, this._id)
            },
            ct = function(t, n) {
                var e = this._id;
                return arguments.length < 2 ? s(this.node(), e).on.on(t) : this.each(A(e, t, n))
            },
            st = function() {
                return this.on("end.remove", T(this._id))
            },
            ft = function(t) {
                var e = this._name,
                    r = this._id;
                "function" != typeof t && (t = n.selector(t));
                for (var i = this._groups, o = i.length, u = new Array(o), a = 0; a < o; ++a)
                    for (var c, f, l = i[a], h = l.length, p = u[a] = new Array(h), d = 0; d < h; ++d)(c = l[d]) && (f = t.call(c, c.__data__, d, l)) && ("__data__" in c && (f.__data__ = c.__data__), p[d] = f, Z(p[d], e, r, d, p, s(c, r)));
                return new q(u, this._parents, e, r)
            },
            lt = function(t) {
                var e = this._name,
                    r = this._id;
                "function" != typeof t && (t = n.selectorAll(t));
                for (var i = this._groups, o = i.length, u = [], a = [], c = 0; c < o; ++c)
                    for (var f, l = i[c], h = l.length, p = 0; p < h; ++p)
                        if (f = l[p]) {
                            for (var d, v = t.call(f, f.__data__, p, l), g = s(f, r), y = 0, _ = v.length; y < _; ++y)(d = v[y]) && Z(d, e, r, y, v, g);
                            u.push(v), a.push(f)
                        }
                return new q(u, a, e, r)
            },
            ht = n.selection.prototype.constructor,
            pt = function() {
                return new ht(this._groups, this._parents)
            },
            dt = function(t, n, e) {
                var r = "transform" == (t += "") ? i.interpolateTransformCss : tt;
                return null == n ? this.styleTween(t, z(t, r)).on("end.style." + t, C(t)) : this.styleTween(t, "function" == typeof n ? I(t, r, p(this, "style." + t, n)) : O(t, r, n + ""), e)
            },
            vt = function(t, n, e) {
                var r = "style." + (t += "");
                if (arguments.length < 2) return (r = this.tween(r)) && r._value;
                if (null == n) return this.tween(r, null);
                if ("function" != typeof n) throw new Error;
                return this.tween(r, L(t, n, null == e ? "" : e))
            },
            gt = function(t) {
                return this.tween("text", "function" == typeof t ? D(p(this, "text", t)) : P(null == t ? "" : t + ""))
            },
            yt = function() {
                for (var t = this._name, n = this._id, e = j(), r = this._groups, i = r.length, o = 0; o < i; ++o)
                    for (var u, a = r[o], c = a.length, f = 0; f < c; ++f)
                        if (u = a[f]) {
                            var l = s(u, n);
                            Z(u, t, e, f, a, {
                                time: l.time + l.delay + l.duration,
                                delay: 0,
                                duration: l.duration,
                                ease: l.ease
                            })
                        }
                return new q(r, this._parents, t, e)
            },
            _t = 0,
            mt = n.selection.prototype;
        q.prototype = R.prototype = {
            constructor: q,
            select: ft,
            selectAll: lt,
            filter: ut,
            merge: at,
            selection: pt,
            transition: yt,
            call: mt.call,
            nodes: mt.nodes,
            node: mt.node,
            size: mt.size,
            empty: mt.empty,
            each: mt.each,
            on: ct,
            attr: nt,
            attrTween: et,
            style: dt,
            styleTween: vt,
            text: gt,
            remove: st,
            tween: Q,
            delay: rt,
            duration: it,
            ease: ot
        };
        var xt = {
                time: null,
                delay: 0,
                duration: 250,
                ease: u.easeCubicInOut
            },
            bt = function(t) {
                var n, e;
                t instanceof q ? (n = t._id, t = t._name) : (n = j(), (e = xt).time = r.now(), t = null == t ? null : t + "");
                for (var i = this._groups, o = i.length, u = 0; u < o; ++u)
                    for (var a, c = i[u], s = c.length, f = 0; f < s; ++f)(a = c[f]) && Z(a, t, n, f, c, e || U(a, n));
                return new q(i, this._parents, t, n)
            };
        n.selection.prototype.interrupt = G, n.selection.prototype.transition = bt;
        var wt = [null],
            Mt = function(t, n) {
                var e, r, i = t.__transition;
                if (i) {
                    n = null == n ? null : n + "";
                    for (r in i)
                        if ((e = i[r]).state > B && e.name === n) return new q([
                            [t]
                        ], wt, n, +r)
                }
                return null
            };
        t.transition = R, t.active = Mt, t.interrupt = $, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, e) {
        e(n)
    }(this, function(t) {
        "use strict";

        function n() {
            return y || (x(e), y = m.now() + _)
        }

        function e() {
            y = 0
        }

        function r() {
            this._call = this._time = this._next = null
        }

        function i(t, n, e) {
            var i = new r;
            return i.restart(t, n, e), i
        }

        function o() {
            n(), ++h;
            for (var t, e = f; e;)(t = y - e._time) >= 0 && e._call.call(null, t), e = e._next;
            --h
        }

        function u() {
            y = (g = m.now()) + _, h = p = 0;
            try {
                o()
            } finally {
                h = 0, c(), y = 0
            }
        }

        function a() {
            var t = m.now(),
                n = t - g;
            n > v && (_ -= n, g = t)
        }

        function c() {
            for (var t, n, e = f, r = 1 / 0; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : f = n);
            l = t, s(r)
        }

        function s(t) {
            if (!h) {
                p && (p = clearTimeout(p));
                var n = t - y;
                n > 24 ? (t < 1 / 0 && (p = setTimeout(u, t - m.now() - _)), d && (d = clearInterval(d))) : (d || (g = m.now(), d = setInterval(a, v)), h = 1, x(u))
            }
        }
        var f, l, h = 0,
            p = 0,
            d = 0,
            v = 1e3,
            g = 0,
            y = 0,
            _ = 0,
            m = "object" == typeof performance && performance.now ? performance : Date,
            x = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
                setTimeout(t, 17)
            };
        r.prototype = i.prototype = {
            constructor: r,
            restart: function(t, e, r) {
                if ("function" != typeof t) throw new TypeError("callback is not a function");
                r = (null == r ? n() : +r) + (null == e ? 0 : +e), this._next || l === this || (l ? l._next = this : f = this, l = this), this._call = t, this._time = r, s()
            },
            stop: function() {
                this._call && (this._call = null, this._time = 1 / 0, s())
            }
        };
        var b = function(t, n, e) {
                var i = new r;
                return n = null == n ? 0 : +n, i.restart(function(e) {
                    i.stop(), t(e + n)
                }, n, e), i
            },
            w = function(t, e, i) {
                var o = new r,
                    u = e;
                return null == e ? (o.restart(t, e, i), o) : (e = +e, i = null == i ? n() : +i, o.restart(function n(r) {
                    r += u, o.restart(n, u += e, i), t(r)
                }, e, i), o)
            };
        t.now = n, t.timer = i, t.timerFlush = o, t.timeout = b, t.interval = w, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, e) {
        e(n)
    }(this, function(t) {
        "use strict";

        function n(t) {
            return +t
        }

        function e(t) {
            return t * t
        }

        function r(t) {
            return t * (2 - t)
        }

        function i(t) {
            return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
        }

        function o(t) {
            return t * t * t
        }

        function u(t) {
            return --t * t * t + 1
        }

        function a(t) {
            return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
        }

        function c(t) {
            return 1 - Math.cos(t * E)
        }

        function s(t) {
            return Math.sin(t * E)
        }

        function f(t) {
            return (1 - Math.cos(S * t)) / 2
        }

        function l(t) {
            return Math.pow(2, 10 * t - 10)
        }

        function h(t) {
            return 1 - Math.pow(2, -10 * t)
        }

        function p(t) {
            return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2
        }

        function d(t) {
            return 1 - Math.sqrt(1 - t * t)
        }

        function v(t) {
            return Math.sqrt(1 - --t * t)
        }

        function g(t) {
            return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
        }

        function y(t) {
            return 1 - _(1 - t)
        }

        function _(t) {
            return (t = +t) < k ? P * t * t : t < A ? P * (t -= N) * t + T : t < C ? P * (t -= z) * t + O : P * (t -= I) * t + L
        }

        function m(t) {
            return ((t *= 2) <= 1 ? 1 - _(1 - t) : _(t - 1) + 1) / 2
        }
        var x = 3,
            b = function t(n) {
                function e(t) {
                    return Math.pow(t, n)
                }
                return n = +n, e.exponent = t, e
            }(x),
            w = function t(n) {
                function e(t) {
                    return 1 - Math.pow(1 - t, n)
                }
                return n = +n, e.exponent = t, e
            }(x),
            M = function t(n) {
                function e(t) {
                    return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
                }
                return n = +n, e.exponent = t, e
            }(x),
            S = Math.PI,
            E = S / 2,
            k = 4 / 11,
            N = 6 / 11,
            A = 8 / 11,
            T = .75,
            z = 9 / 11,
            C = 10 / 11,
            O = .9375,
            I = 21 / 22,
            L = 63 / 64,
            P = 1 / k / k,
            D = 1.70158,
            q = function t(n) {
                function e(t) {
                    return t * t * ((n + 1) * t - n)
                }
                return n = +n, e.overshoot = t, e
            }(D),
            R = function t(n) {
                function e(t) {
                    return --t * t * ((n + 1) * t + n) + 1
                }
                return n = +n, e.overshoot = t, e
            }(D),
            j = function t(n) {
                function e(t) {
                    return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
                }
                return n = +n, e.overshoot = t, e
            }(D),
            U = 2 * Math.PI,
            F = 1,
            Y = .3,
            H = function t(n, e) {
                function r(t) {
                    return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e)
                }
                var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= U);
                return r.amplitude = function(n) {
                    return t(n, e * U)
                }, r.period = function(e) {
                    return t(n, e)
                }, r
            }(F, Y),
            B = function t(n, e) {
                function r(t) {
                    return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e)
                }
                var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= U);
                return r.amplitude = function(n) {
                    return t(n, e * U)
                }, r.period = function(e) {
                    return t(n, e)
                }, r
            }(F, Y),
            V = function t(n, e) {
                function r(t) {
                    return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2
                }
                var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= U);
                return r.amplitude = function(n) {
                    return t(n, e * U)
                }, r.period = function(e) {
                    return t(n, e)
                }, r
            }(F, Y);
        t.easeLinear = n, t.easeQuad = i, t.easeQuadIn = e, t.easeQuadOut = r, t.easeQuadInOut = i, t.easeCubic = a, t.easeCubicIn = o, t.easeCubicOut = u, t.easeCubicInOut = a, t.easePoly = M, t.easePolyIn = b, t.easePolyOut = w, t.easePolyInOut = M, t.easeSin = f, t.easeSinIn = c, t.easeSinOut = s, t.easeSinInOut = f, t.easeExp = p, t.easeExpIn = l, t.easeExpOut = h, t.easeExpInOut = p, t.easeCircle = g, t.easeCircleIn = d, t.easeCircleOut = v, t.easeCircleInOut = g, t.easeBounce = _, t.easeBounceIn = y, t.easeBounceOut = _, t.easeBounceInOut = m, t.easeBack = j, t.easeBackIn = q, t.easeBackOut = R, t.easeBackInOut = j, t.easeElastic = B, t.easeElasticIn = H, t.easeElasticOut = B, t.easeElasticInOut = V, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, r) {
        r(n, e(3), e(15))
    }(this, function(t, n, e) {
        "use strict";

        function r(t) {
            return function(n, e) {
                return t(n.source.value + n.target.value, e.source.value + e.target.value)
            }
        }

        function i(t) {
            return t.source
        }

        function o(t) {
            return t.target
        }

        function u(t) {
            return t.radius
        }

        function a(t) {
            return t.startAngle
        }

        function c(t) {
            return t.endAngle
        }
        var s = Math.cos,
            f = Math.sin,
            l = Math.PI,
            h = l / 2,
            p = 2 * l,
            d = Math.max,
            v = function() {
                function t(t) {
                    var r, a, c, s, f, l, h = t.length,
                        v = [],
                        g = n.range(h),
                        y = [],
                        _ = [],
                        m = _.groups = new Array(h),
                        x = new Array(h * h);
                    for (r = 0, f = -1; ++f < h;) {
                        for (a = 0, l = -1; ++l < h;) a += t[f][l];
                        v.push(a), y.push(n.range(h)), r += a
                    }
                    for (i && g.sort(function(t, n) {
                            return i(v[t], v[n])
                        }), o && y.forEach(function(n, e) {
                            n.sort(function(n, r) {
                                return o(t[e][n], t[e][r])
                            })
                        }), r = d(0, p - e * h) / r, s = r ? e : p / h, a = 0, f = -1; ++f < h;) {
                        for (c = a, l = -1; ++l < h;) {
                            var b = g[f],
                                w = y[b][l],
                                M = t[b][w],
                                S = a,
                                E = a += M * r;
                            x[w * h + b] = {
                                index: b,
                                subindex: w,
                                startAngle: S,
                                endAngle: E,
                                value: M
                            }
                        }
                        m[b] = {
                            index: b,
                            startAngle: c,
                            endAngle: a,
                            value: v[b]
                        }, a += s
                    }
                    for (f = -1; ++f < h;)
                        for (l = f - 1; ++l < h;) {
                            var k = x[l * h + f],
                                N = x[f * h + l];
                            (k.value || N.value) && _.push(k.value < N.value ? {
                                source: N,
                                target: k
                            } : {
                                source: k,
                                target: N
                            })
                        }
                    return u ? _.sort(u) : _
                }
                var e = 0,
                    i = null,
                    o = null,
                    u = null;
                return t.padAngle = function(n) {
                    return arguments.length ? (e = d(0, n), t) : e
                }, t.sortGroups = function(n) {
                    return arguments.length ? (i = n, t) : i
                }, t.sortSubgroups = function(n) {
                    return arguments.length ? (o = n, t) : o
                }, t.sortChords = function(n) {
                    return arguments.length ? (null == n ? u = null : (u = r(n))._ = n, t) : u && u._
                }, t
            },
            g = Array.prototype.slice,
            y = function(t) {
                return function() {
                    return t
                }
            },
            _ = function() {
                function t() {
                    var t, i = g.call(arguments),
                        o = n.apply(this, i),
                        u = r.apply(this, i),
                        a = +l.apply(this, (i[0] = o, i)),
                        c = p.apply(this, i) - h,
                        y = d.apply(this, i) - h,
                        _ = a * s(c),
                        m = a * f(c),
                        x = +l.apply(this, (i[0] = u, i)),
                        b = p.apply(this, i) - h,
                        w = d.apply(this, i) - h;
                    if (v || (v = t = e.path()), v.moveTo(_, m), v.arc(0, 0, a, c, y), c === b && y === w || (v.quadraticCurveTo(0, 0, x * s(b), x * f(b)), v.arc(0, 0, x, b, w)), v.quadraticCurveTo(0, 0, _, m), v.closePath(), t) return v = null, t + "" || null
                }
                var n = i,
                    r = o,
                    l = u,
                    p = a,
                    d = c,
                    v = null;
                return t.radius = function(n) {
                    return arguments.length ? (l = "function" == typeof n ? n : y(+n), t) : l
                }, t.startAngle = function(n) {
                    return arguments.length ? (p = "function" == typeof n ? n : y(+n), t) : p
                }, t.endAngle = function(n) {
                    return arguments.length ? (d = "function" == typeof n ? n : y(+n), t) : d
                }, t.source = function(e) {
                    return arguments.length ? (n = e, t) : n
                }, t.target = function(n) {
                    return arguments.length ? (r = n, t) : r
                }, t.context = function(n) {
                    return arguments.length ? (v = null == n ? null : n, t) : v
                }, t
            };
        t.chord = v, t.ribbon = _, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, e) {
        e(n)
    }(this, function(t) {
        "use strict";

        function n() {
            this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
        }

        function e() {
            return new n
        }
        var r = Math.PI,
            i = 2 * r,
            o = 1e-6,
            u = i - o;
        n.prototype = e.prototype = {
            constructor: n,
            moveTo: function(t, n) {
                this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
            },
            closePath: function() {
                null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
            },
            lineTo: function(t, n) {
                this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
            },
            quadraticCurveTo: function(t, n, e, r) {
                this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r)
            },
            bezierCurveTo: function(t, n, e, r, i, o) {
                this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o)
            },
            arcTo: function(t, n, e, i, u) {
                t = +t, n = +n, e = +e, i = +i, u = +u;
                var a = this._x1,
                    c = this._y1,
                    s = e - t,
                    f = i - n,
                    l = a - t,
                    h = c - n,
                    p = l * l + h * h;
                if (u < 0) throw new Error("negative radius: " + u);
                if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
                else if (p > o)
                    if (Math.abs(h * s - f * l) > o && u) {
                        var d = e - a,
                            v = i - c,
                            g = s * s + f * f,
                            y = d * d + v * v,
                            _ = Math.sqrt(g),
                            m = Math.sqrt(p),
                            x = u * Math.tan((r - Math.acos((g + p - y) / (2 * _ * m))) / 2),
                            b = x / m,
                            w = x / _;
                        Math.abs(b - 1) > o && (this._ += "L" + (t + b * l) + "," + (n + b * h)), this._ += "A" + u + "," + u + ",0,0," + +(h * d > l * v) + "," + (this._x1 = t + w * s) + "," + (this._y1 = n + w * f)
                    } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
                else;
            },
            arc: function(t, n, e, a, c, s) {
                t = +t, n = +n, e = +e;
                var f = e * Math.cos(a),
                    l = e * Math.sin(a),
                    h = t + f,
                    p = n + l,
                    d = 1 ^ s,
                    v = s ? a - c : c - a;
                if (e < 0) throw new Error("negative radius: " + e);
                null === this._x1 ? this._ += "M" + h + "," + p : (Math.abs(this._x1 - h) > o || Math.abs(this._y1 - p) > o) && (this._ += "L" + h + "," + p), e && (v < 0 && (v = v % i + i), v > u ? this._ += "A" + e + "," + e + ",0,1," + d + "," + (t - f) + "," + (n - l) + "A" + e + "," + e + ",0,1," + d + "," + (this._x1 = h) + "," + (this._y1 = p) : v > o && (this._ += "A" + e + "," + e + ",0," + +(v >= r) + "," + d + "," + (this._x1 = t + e * Math.cos(c)) + "," + (this._y1 = n + e * Math.sin(c))))
            },
            rect: function(t, n, e, r) {
                this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z"
            },
            toString: function() {
                return this._
            }
        }, t.path = e, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, e) {
        e(n)
    }(this, function(t) {
        "use strict";

        function n() {}

        function e(t, e) {
            var r = new n;
            if (t instanceof n) t.each(function(t, n) {
                r.set(n, t)
            });
            else if (Array.isArray(t)) {
                var i, o = -1,
                    u = t.length;
                if (null == e)
                    for (; ++o < u;) r.set(o, t[o]);
                else
                    for (; ++o < u;) r.set(e(i = t[o], o, t), i)
            } else if (t)
                for (var a in t) r.set(a, t[a]);
            return r
        }

        function r() {
            return {}
        }

        function i(t, n, e) {
            t[n] = e
        }

        function o() {
            return e()
        }

        function u(t, n, e) {
            t.set(n, e)
        }

        function a() {}

        function c(t, n) {
            var e = new a;
            if (t instanceof a) t.each(function(t) {
                e.add(t)
            });
            else if (t) {
                var r = -1,
                    i = t.length;
                if (null == n)
                    for (; ++r < i;) e.add(t[r]);
                else
                    for (; ++r < i;) e.add(n(t[r], r, t))
            }
            return e
        }
        var s = "$";
        n.prototype = e.prototype = {
            constructor: n,
            has: function(t) {
                return s + t in this
            },
            get: function(t) {
                return this[s + t]
            },
            set: function(t, n) {
                return this[s + t] = n, this
            },
            remove: function(t) {
                var n = s + t;
                return n in this && delete this[n]
            },
            clear: function() {
                for (var t in this) t[0] === s && delete this[t]
            },
            keys: function() {
                var t = [];
                for (var n in this) n[0] === s && t.push(n.slice(1));
                return t
            },
            values: function() {
                var t = [];
                for (var n in this) n[0] === s && t.push(this[n]);
                return t
            },
            entries: function() {
                var t = [];
                for (var n in this) n[0] === s && t.push({
                    key: n.slice(1),
                    value: this[n]
                });
                return t
            },
            size: function() {
                var t = 0;
                for (var n in this) n[0] === s && ++t;
                return t
            },
            empty: function() {
                for (var t in this)
                    if (t[0] === s) return !1;
                return !0
            },
            each: function(t) {
                for (var n in this) n[0] === s && t(this[n], n.slice(1), this)
            }
        };
        var f = function() {
                function t(n, r, i, o) {
                    if (r >= f.length) return null != a && n.sort(a), null != c ? c(n) : n;
                    for (var u, s, l, h = -1, p = n.length, d = f[r++], v = e(), g = i(); ++h < p;)(l = v.get(u = d(s = n[h]) + "")) ? l.push(s) : v.set(u, [s]);
                    return v.each(function(n, e) {
                        o(g, e, t(n, r, i, o))
                    }), g
                }

                function n(t, e) {
                    if (++e > f.length) return t;
                    var r, i = l[e - 1];
                    return null != c && e >= f.length ? r = t.entries() : (r = [], t.each(function(t, i) {
                        r.push({
                            key: i,
                            values: n(t, e)
                        })
                    })), null != i ? r.sort(function(t, n) {
                        return i(t.key, n.key)
                    }) : r
                }
                var a, c, s, f = [],
                    l = [];
                return s = {
                    object: function(n) {
                        return t(n, 0, r, i)
                    },
                    map: function(n) {
                        return t(n, 0, o, u)
                    },
                    entries: function(e) {
                        return n(t(e, 0, o, u), 0)
                    },
                    key: function(t) {
                        return f.push(t), s
                    },
                    sortKeys: function(t) {
                        return l[f.length - 1] = t, s
                    },
                    sortValues: function(t) {
                        return a = t, s
                    },
                    rollup: function(t) {
                        return c = t, s
                    }
                }
            },
            l = e.prototype;
        a.prototype = c.prototype = {
            constructor: a,
            has: l.has,
            add: function(t) {
                return t += "", this[s + t] = t, this
            },
            remove: l.remove,
            clear: l.clear,
            values: l.keys,
            size: l.size,
            empty: l.empty,
            each: l.each
        };
        var h = function(t) {
                var n = [];
                for (var e in t) n.push(e);
                return n
            },
            p = function(t) {
                var n = [];
                for (var e in t) n.push(t[e]);
                return n
            },
            d = function(t) {
                var n = [];
                for (var e in t) n.push({
                    key: e,
                    value: t[e]
                });
                return n
            };
        t.nest = f, t.set = c, t.map = e, t.keys = h, t.values = p, t.entries = d, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, e) {
        e(n)
    }(this, function(t) {
        "use strict";

        function n(t) {
            return new Function("d", "return {" + t.map(function(t, n) {
                return JSON.stringify(t) + ": d[" + n + "]"
            }).join(",") + "}")
        }

        function e(t, e) {
            var r = n(t);
            return function(n, i) {
                return e(r(n), i, t)
            }
        }

        function r(t) {
            var n = Object.create(null),
                e = [];
            return t.forEach(function(t) {
                for (var r in t) r in n || e.push(n[r] = r)
            }), e
        }
        var i = {},
            o = {},
            u = 34,
            a = 10,
            c = 13,
            s = function(t) {
                function s(t, r) {
                    var i, o, u = f(t, function(t, u) {
                        return i ? i(t, u - 1) : (o = t, void(i = r ? e(t, r) : n(t)))
                    });
                    return u.columns = o, u
                }

                function f(t, n) {
                    function e() {
                        if (p) return o;
                        if (d) return d = !1, i;
                        var n, e, r = l;
                        if (t.charCodeAt(r) === u) {
                            for (; l++ < f && t.charCodeAt(l) !== u || t.charCodeAt(++l) === u;);
                            return (n = l) >= f ? p = !0 : (e = t.charCodeAt(l++)) === a ? d = !0 : e === c && (d = !0, t.charCodeAt(l) === a && ++l), t.slice(r + 1, n - 1).replace(/""/g, '"')
                        }
                        for (; l < f;) {
                            if ((e = t.charCodeAt(n = l++)) === a) d = !0;
                            else if (e === c) d = !0, t.charCodeAt(l) === a && ++l;
                            else if (e !== g) continue;
                            return t.slice(r, n)
                        }
                        return p = !0, t.slice(r, f)
                    }
                    var r, s = [],
                        f = t.length,
                        l = 0,
                        h = 0,
                        p = f <= 0,
                        d = !1;
                    for (t.charCodeAt(f - 1) === a && --f, t.charCodeAt(f - 1) === c && --f;
                        (r = e()) !== o;) {
                        for (var v = []; r !== i && r !== o;) v.push(r), r = e();
                        n && null == (v = n(v, h++)) || s.push(v)
                    }
                    return s
                }

                function l(n, e) {
                    return null == e && (e = r(n)), [e.map(d).join(t)].concat(n.map(function(n) {
                        return e.map(function(t) {
                            return d(n[t])
                        }).join(t)
                    })).join("\n")
                }

                function h(t) {
                    return t.map(p).join("\n")
                }

                function p(n) {
                    return n.map(d).join(t)
                }

                function d(t) {
                    return null == t ? "" : v.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t
                }
                var v = new RegExp('["' + t + "\n\r]"),
                    g = t.charCodeAt(0);
                return {
                    parse: s,
                    parseRows: f,
                    format: l,
                    formatRows: h
                }
            },
            f = s(","),
            l = f.parse,
            h = f.parseRows,
            p = f.format,
            d = f.formatRows,
            v = s("\t"),
            g = v.parse,
            y = v.parseRows,
            _ = v.format,
            m = v.formatRows;
        t.dsvFormat = s, t.csvParse = l, t.csvParseRows = h, t.csvFormat = p, t.csvFormatRows = d, t.tsvParse = g, t.tsvParseRows = y, t.tsvFormat = _, t.tsvFormatRows = m, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, r) {
        r(n, e(19), e(16), e(6), e(12))
    }(this, function(t, n, e, r, i) {
        "use strict";

        function o(t) {
            return t.x + t.vx
        }

        function u(t) {
            return t.y + t.vy
        }

        function a(t) {
            return t.index
        }

        function c(t, n) {
            var e = t.get(n);
            if (!e) throw new Error("missing: " + n);
            return e
        }

        function s(t) {
            return t.x
        }

        function f(t) {
            return t.y
        }
        var l = function(t, n) {
                function e() {
                    var e, i, o = r.length,
                        u = 0,
                        a = 0;
                    for (e = 0; e < o; ++e) i = r[e], u += i.x, a += i.y;
                    for (u = u / o - t, a = a / o - n, e = 0; e < o; ++e) i = r[e], i.x -= u, i.y -= a
                }
                var r;
                return null == t && (t = 0), null == n && (n = 0), e.initialize = function(t) {
                    r = t
                }, e.x = function(n) {
                    return arguments.length ? (t = +n, e) : t
                }, e.y = function(t) {
                    return arguments.length ? (n = +t, e) : n
                }, e
            },
            h = function(t) {
                return function() {
                    return t
                }
            },
            p = function() {
                return 1e-6 * (Math.random() - .5)
            },
            d = function(t) {
                function e() {
                    function t(t, n, e, r, i) {
                        var o = t.data,
                            u = t.r,
                            a = v + u; {
                            if (!o) return n > h + a || r < h - a || e > d + a || i < d - a;
                            if (o.index > l.index) {
                                var c = h - o.x - o.vx,
                                    f = d - o.y - o.vy,
                                    y = c * c + f * f;
                                y < a * a && (0 === c && (c = p(), y += c * c), 0 === f && (f = p(), y += f * f), y = (a - (y = Math.sqrt(y))) / y * s, l.vx += (c *= y) * (a = (u *= u) / (g + u)), l.vy += (f *= y) * a, o.vx -= c * (a = 1 - a), o.vy -= f * a)
                            }
                        }
                    }
                    for (var e, i, l, h, d, v, g, y = a.length, _ = 0; _ < f; ++_)
                        for (i = n.quadtree(a, o, u).visitAfter(r), e = 0; e < y; ++e) l = a[e], v = c[l.index], g = v * v, h = l.x + l.vx, d = l.y + l.vy, i.visit(t)
                }

                function r(t) {
                    if (t.data) return t.r = c[t.data.index];
                    for (var n = t.r = 0; n < 4; ++n) t[n] && t[n].r > t.r && (t.r = t[n].r)
                }

                function i() {
                    if (a) {
                        var n, e, r = a.length;
                        for (c = new Array(r), n = 0; n < r; ++n) e = a[n], c[e.index] = +t(e, n, a)
                    }
                }
                var a, c, s = 1,
                    f = 1;
                return "function" != typeof t && (t = h(null == t ? 1 : +t)), e.initialize = function(t) {
                    a = t, i()
                }, e.iterations = function(t) {
                    return arguments.length ? (f = +t, e) : f
                }, e.strength = function(t) {
                    return arguments.length ? (s = +t, e) : s
                }, e.radius = function(n) {
                    return arguments.length ? (t = "function" == typeof n ? n : h(+n), i(), e) : t
                }, e
            },
            v = function(t) {
                function n(t) {
                    return 1 / Math.min(d[t.source.index], d[t.target.index])
                }

                function r(n) {
                    for (var e = 0, r = t.length; e < m; ++e)
                        for (var i, o, u, a, c, l, h, d = 0; d < r; ++d) i = t[d], o = i.source, u = i.target, a = u.x + u.vx - o.x - o.vx || p(), c = u.y + u.vy - o.y - o.vy || p(), l = Math.sqrt(a * a + c * c), l = (l - f[d]) / l * n * s[d], a *= l, c *= l, u.vx -= a * (h = v[d]), u.vy -= c * h, o.vx += a * (h = 1 - h), o.vy += c * h
                }

                function i() {
                    if (l) {
                        var n, r, i = l.length,
                            a = t.length,
                            h = e.map(l, g);
                        for (n = 0, d = new Array(i); n < a; ++n) r = t[n], r.index = n, "object" != typeof r.source && (r.source = c(h, r.source)), "object" != typeof r.target && (r.target = c(h, r.target)), d[r.source.index] = (d[r.source.index] || 0) + 1, d[r.target.index] = (d[r.target.index] || 0) + 1;
                        for (n = 0, v = new Array(a); n < a; ++n) r = t[n], v[n] = d[r.source.index] / (d[r.source.index] + d[r.target.index]);
                        s = new Array(a), o(), f = new Array(a), u()
                    }
                }

                function o() {
                    if (l)
                        for (var n = 0, e = t.length; n < e; ++n) s[n] = +y(t[n], n, t)
                }

                function u() {
                    if (l)
                        for (var n = 0, e = t.length; n < e; ++n) f[n] = +_(t[n], n, t)
                }
                var s, f, l, d, v, g = a,
                    y = n,
                    _ = h(30),
                    m = 1;
                return null == t && (t = []), r.initialize = function(t) {
                    l = t, i()
                }, r.links = function(n) {
                    return arguments.length ? (t = n, i(), r) : t
                }, r.id = function(t) {
                    return arguments.length ? (g = t, r) : g
                }, r.iterations = function(t) {
                    return arguments.length ? (m = +t, r) : m
                }, r.strength = function(t) {
                    return arguments.length ? (y = "function" == typeof t ? t : h(+t), o(), r) : y
                }, r.distance = function(t) {
                    return arguments.length ? (_ = "function" == typeof t ? t : h(+t), u(), r) : _
                }, r
            },
            g = 10,
            y = Math.PI * (3 - Math.sqrt(5)),
            _ = function(t) {
                function n() {
                    o(), _.call("tick", c), s < f && (v.stop(), _.call("end", c))
                }

                function o() {
                    var n, e, r = t.length;
                    for (s += (h - s) * l, d.each(function(t) {
                            t(s)
                        }), n = 0; n < r; ++n) e = t[n], null == e.fx ? e.x += e.vx *= p : (e.x = e.fx, e.vx = 0), null == e.fy ? e.y += e.vy *= p : (e.y = e.fy, e.vy = 0)
                }

                function u() {
                    for (var n, e = 0, r = t.length; e < r; ++e) {
                        if (n = t[e], n.index = e, isNaN(n.x) || isNaN(n.y)) {
                            var i = g * Math.sqrt(e),
                                o = e * y;
                            n.x = i * Math.cos(o), n.y = i * Math.sin(o)
                        }(isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0)
                    }
                }

                function a(n) {
                    return n.initialize && n.initialize(t), n
                }
                var c, s = 1,
                    f = .001,
                    l = 1 - Math.pow(f, 1 / 300),
                    h = 0,
                    p = .6,
                    d = e.map(),
                    v = i.timer(n),
                    _ = r.dispatch("tick", "end");
                return null == t && (t = []), u(), c = {
                    tick: o,
                    restart: function() {
                        return v.restart(n), c
                    },
                    stop: function() {
                        return v.stop(), c
                    },
                    nodes: function(n) {
                        return arguments.length ? (t = n, u(), d.each(a), c) : t
                    },
                    alpha: function(t) {
                        return arguments.length ? (s = +t, c) : s
                    },
                    alphaMin: function(t) {
                        return arguments.length ? (f = +t, c) : f
                    },
                    alphaDecay: function(t) {
                        return arguments.length ? (l = +t, c) : +l
                    },
                    alphaTarget: function(t) {
                        return arguments.length ? (h = +t, c) : h
                    },
                    velocityDecay: function(t) {
                        return arguments.length ? (p = 1 - t, c) : 1 - p
                    },
                    force: function(t, n) {
                        return arguments.length > 1 ? (null == n ? d.remove(t) : d.set(t, a(n)), c) : d.get(t)
                    },
                    find: function(n, e, r) {
                        var i, o, u, a, c, s = 0,
                            f = t.length;
                        for (null == r ? r = 1 / 0 : r *= r, s = 0; s < f; ++s) a = t[s], i = n - a.x, o = e - a.y, u = i * i + o * o, u < r && (c = a, r = u);
                        return c
                    },
                    on: function(t, n) {
                        return arguments.length > 1 ? (_.on(t, n), c) : _.on(t)
                    }
                }
            },
            m = function() {
                function t(t) {
                    var e, c = o.length,
                        l = n.quadtree(o, s, f).visitAfter(r);
                    for (a = t, e = 0; e < c; ++e) u = o[e], l.visit(i)
                }

                function e() {
                    if (o) {
                        var t, n, e = o.length;
                        for (c = new Array(e), t = 0; t < e; ++t) n = o[t], c[n.index] = +l(n, t, o)
                    }
                }

                function r(t) {
                    var n, e, r, i, o, u = 0,
                        a = 0;
                    if (t.length) {
                        for (r = i = o = 0; o < 4; ++o)(n = t[o]) && (e = Math.abs(n.value)) && (u += n.value, a += e, r += e * n.x, i += e * n.y);
                        t.x = r / a, t.y = i / a
                    } else {
                        n = t, n.x = n.data.x, n.y = n.data.y;
                        do u += c[n.data.index]; while (n = n.next)
                    }
                    t.value = u
                }

                function i(t, n, e, r) {
                    if (!t.value) return !0;
                    var i = t.x - u.x,
                        o = t.y - u.y,
                        s = r - n,
                        f = i * i + o * o;
                    if (s * s / g < f) return f < v && (0 === i && (i = p(), f += i * i), 0 === o && (o = p(), f += o * o), f < d && (f = Math.sqrt(d * f)), u.vx += i * t.value * a / f, u.vy += o * t.value * a / f), !0;
                    if (!(t.length || f >= v)) {
                        (t.data !== u || t.next) && (0 === i && (i = p(), f += i * i), 0 === o && (o = p(), f += o * o), f < d && (f = Math.sqrt(d * f)));
                        do t.data !== u && (s = c[t.data.index] * a / f, u.vx += i * s, u.vy += o * s); while (t = t.next)
                    }
                }
                var o, u, a, c, l = h(-30),
                    d = 1,
                    v = 1 / 0,
                    g = .81;
                return t.initialize = function(t) {
                    o = t, e()
                }, t.strength = function(n) {
                    return arguments.length ? (l = "function" == typeof n ? n : h(+n), e(), t) : l
                }, t.distanceMin = function(n) {
                    return arguments.length ? (d = n * n, t) : Math.sqrt(d)
                }, t.distanceMax = function(n) {
                    return arguments.length ? (v = n * n, t) : Math.sqrt(v)
                }, t.theta = function(n) {
                    return arguments.length ? (g = n * n, t) : Math.sqrt(g)
                }, t
            },
            x = function(t, n, e) {
                function r(t) {
                    for (var r = 0, i = o.length; r < i; ++r) {
                        var c = o[r],
                            s = c.x - n || 1e-6,
                            f = c.y - e || 1e-6,
                            l = Math.sqrt(s * s + f * f),
                            h = (a[r] - l) * u[r] * t / l;
                        c.vx += s * h, c.vy += f * h
                    }
                }

                function i() {
                    if (o) {
                        var n, e = o.length;
                        for (u = new Array(e), a = new Array(e), n = 0; n < e; ++n) a[n] = +t(o[n], n, o), u[n] = isNaN(a[n]) ? 0 : +c(o[n], n, o)
                    }
                }
                var o, u, a, c = h(.1);
                return "function" != typeof t && (t = h(+t)), null == n && (n = 0), null == e && (e = 0), r.initialize = function(t) {
                    o = t, i()
                }, r.strength = function(t) {
                    return arguments.length ? (c = "function" == typeof t ? t : h(+t), i(), r) : c
                }, r.radius = function(n) {
                    return arguments.length ? (t = "function" == typeof n ? n : h(+n), i(), r) : t
                }, r.x = function(t) {
                    return arguments.length ? (n = +t, r) : n
                }, r.y = function(t) {
                    return arguments.length ? (e = +t, r) : e
                }, r
            },
            b = function(t) {
                function n(t) {
                    for (var n, e = 0, u = r.length; e < u; ++e) n = r[e], n.vx += (o[e] - n.x) * i[e] * t
                }

                function e() {
                    if (r) {
                        var n, e = r.length;
                        for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n) i[n] = isNaN(o[n] = +t(r[n], n, r)) ? 0 : +u(r[n], n, r)
                    }
                }
                var r, i, o, u = h(.1);
                return "function" != typeof t && (t = h(null == t ? 0 : +t)), n.initialize = function(t) {
                    r = t, e()
                }, n.strength = function(t) {
                    return arguments.length ? (u = "function" == typeof t ? t : h(+t), e(), n) : u
                }, n.x = function(r) {
                    return arguments.length ? (t = "function" == typeof r ? r : h(+r), e(), n) : t
                }, n
            },
            w = function(t) {
                function n(t) {
                    for (var n, e = 0, u = r.length; e < u; ++e) n = r[e], n.vy += (o[e] - n.y) * i[e] * t
                }

                function e() {
                    if (r) {
                        var n, e = r.length;
                        for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n) i[n] = isNaN(o[n] = +t(r[n], n, r)) ? 0 : +u(r[n], n, r)
                    }
                }
                var r, i, o, u = h(.1);
                return "function" != typeof t && (t = h(null == t ? 0 : +t)), n.initialize = function(t) {
                    r = t, e()
                }, n.strength = function(t) {
                    return arguments.length ? (u = "function" == typeof t ? t : h(+t), e(), n) : u
                }, n.y = function(r) {
                    return arguments.length ? (t = "function" == typeof r ? r : h(+r), e(), n) : t
                }, n
            };
        t.forceCenter = l, t.forceCollide = d, t.forceLink = v, t.forceManyBody = m, t.forceRadial = x, t.forceSimulation = _, t.forceX = b, t.forceY = w, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, e) {
        e(n)
    }(this, function(t) {
        "use strict";

        function n(t, n, e, r) {
            if (isNaN(n) || isNaN(e)) return t;
            var i, o, u, a, c, s, f, l, h, p = t._root,
                d = {
                    data: r
                },
                v = t._x0,
                g = t._y0,
                y = t._x1,
                _ = t._y1;
            if (!p) return t._root = d, t;
            for (; p.length;)
                if ((s = n >= (o = (v + y) / 2)) ? v = o : y = o, (f = e >= (u = (g + _) / 2)) ? g = u : _ = u, i = p, !(p = p[l = f << 1 | s])) return i[l] = d, t;
            if (a = +t._x.call(null, p.data), c = +t._y.call(null, p.data), n === a && e === c) return d.next = p, i ? i[l] = d : t._root = d, t;
            do i = i ? i[l] = new Array(4) : t._root = new Array(4), (s = n >= (o = (v + y) / 2)) ? v = o : y = o, (f = e >= (u = (g + _) / 2)) ? g = u : _ = u; while ((l = f << 1 | s) === (h = (c >= u) << 1 | a >= o));
            return i[h] = p, i[l] = d, t
        }

        function e(t) {
            var e, r, i, o, u = t.length,
                a = new Array(u),
                c = new Array(u),
                s = 1 / 0,
                f = 1 / 0,
                l = -(1 / 0),
                h = -(1 / 0);
            for (r = 0; r < u; ++r) isNaN(i = +this._x.call(null, e = t[r])) || isNaN(o = +this._y.call(null, e)) || (a[r] = i, c[r] = o, i < s && (s = i), i > l && (l = i), o < f && (f = o), o > h && (h = o));
            for (l < s && (s = this._x0, l = this._x1), h < f && (f = this._y0, h = this._y1), this.cover(s, f).cover(l, h), r = 0; r < u; ++r) n(this, a[r], c[r], t[r]);
            return this
        }

        function r(t) {
            for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
            return this
        }

        function i(t) {
            return t[0]
        }

        function o(t) {
            return t[1]
        }

        function u(t, n, e) {
            var r = new a(null == n ? i : n, null == e ? o : e, NaN, NaN, NaN, NaN);
            return null == t ? r : r.addAll(t)
        }

        function a(t, n, e, r, i, o) {
            this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0
        }

        function c(t) {
            for (var n = {
                    data: t.data
                }, e = n; t = t.next;) e = e.next = {
                data: t.data
            };
            return n
        }
        var s = function(t) {
                var e = +this._x.call(null, t),
                    r = +this._y.call(null, t);
                return n(this.cover(e, r), e, r, t)
            },
            f = function(t, n) {
                if (isNaN(t = +t) || isNaN(n = +n)) return this;
                var e = this._x0,
                    r = this._y0,
                    i = this._x1,
                    o = this._y1;
                if (isNaN(e)) i = (e = Math.floor(t)) + 1, o = (r = Math.floor(n)) + 1;
                else {
                    if (!(e > t || t > i || r > n || n > o)) return this;
                    var u, a, c = i - e,
                        s = this._root;
                    switch (a = (n < (r + o) / 2) << 1 | t < (e + i) / 2) {
                        case 0:
                            do u = new Array(4), u[a] = s, s = u; while (c *= 2, i = e + c, o = r + c, t > i || n > o);
                            break;
                        case 1:
                            do u = new Array(4), u[a] = s, s = u; while (c *= 2, e = i - c, o = r + c, e > t || n > o);
                            break;
                        case 2:
                            do u = new Array(4), u[a] = s, s = u; while (c *= 2, i = e + c, r = o - c, t > i || r > n);
                            break;
                        case 3:
                            do u = new Array(4), u[a] = s, s = u; while (c *= 2, e = i - c, r = o - c, e > t || r > n)
                    }
                    this._root && this._root.length && (this._root = s)
                }
                return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this
            },
            l = function() {
                var t = [];
                return this.visit(function(n) {
                    if (!n.length)
                        do t.push(n.data); while (n = n.next)
                }), t
            },
            h = function(t) {
                return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [
                    [this._x0, this._y0],
                    [this._x1, this._y1]
                ]
            },
            p = function(t, n, e, r, i) {
                this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i
            },
            d = function(t, n, e) {
                var r, i, o, u, a, c, s, f = this._x0,
                    l = this._y0,
                    h = this._x1,
                    d = this._y1,
                    v = [],
                    g = this._root;
                for (g && v.push(new p(g, f, l, h, d)), null == e ? e = 1 / 0 : (f = t - e, l = n - e, h = t + e, d = n + e, e *= e); c = v.pop();)
                    if (!(!(g = c.node) || (i = c.x0) > h || (o = c.y0) > d || (u = c.x1) < f || (a = c.y1) < l))
                        if (g.length) {
                            var y = (i + u) / 2,
                                _ = (o + a) / 2;
                            v.push(new p(g[3], y, _, u, a), new p(g[2], i, _, y, a), new p(g[1], y, o, u, _), new p(g[0], i, o, y, _)), (s = (n >= _) << 1 | t >= y) && (c = v[v.length - 1], v[v.length - 1] = v[v.length - 1 - s], v[v.length - 1 - s] = c)
                        } else {
                            var m = t - +this._x.call(null, g.data),
                                x = n - +this._y.call(null, g.data),
                                b = m * m + x * x;
                            if (b < e) {
                                var w = Math.sqrt(e = b);
                                f = t - w, l = n - w, h = t + w, d = n + w, r = g.data
                            }
                        }
                return r
            },
            v = function(t) {
                if (isNaN(o = +this._x.call(null, t)) || isNaN(u = +this._y.call(null, t))) return this;
                var n, e, r, i, o, u, a, c, s, f, l, h, p = this._root,
                    d = this._x0,
                    v = this._y0,
                    g = this._x1,
                    y = this._y1;
                if (!p) return this;
                if (p.length)
                    for (;;) {
                        if ((s = o >= (a = (d + g) / 2)) ? d = a : g = a, (f = u >= (c = (v + y) / 2)) ? v = c : y = c, n = p, !(p = p[l = f << 1 | s])) return this;
                        if (!p.length) break;
                        (n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l)
                    }
                for (; p.data !== t;)
                    if (r = p, !(p = p.next)) return this;
                return (i = p.next) && delete p.next, r ? (i ? r.next = i : delete r.next, this) : n ? (i ? n[l] = i : delete n[l], (p = n[0] || n[1] || n[2] || n[3]) && p === (n[3] || n[2] || n[1] || n[0]) && !p.length && (e ? e[h] = p : this._root = p), this) : (this._root = i, this)
            },
            g = function() {
                return this._root
            },
            y = function() {
                var t = 0;
                return this.visit(function(n) {
                    if (!n.length)
                        do ++t; while (n = n.next)
                }), t
            },
            _ = function(t) {
                var n, e, r, i, o, u, a = [],
                    c = this._root;
                for (c && a.push(new p(c, this._x0, this._y0, this._x1, this._y1)); n = a.pop();)
                    if (!t(c = n.node, r = n.x0, i = n.y0, o = n.x1, u = n.y1) && c.length) {
                        var s = (r + o) / 2,
                            f = (i + u) / 2;
                        (e = c[3]) && a.push(new p(e, s, f, o, u)), (e = c[2]) && a.push(new p(e, r, f, s, u)), (e = c[1]) && a.push(new p(e, s, i, o, f)), (e = c[0]) && a.push(new p(e, r, i, s, f))
                    }
                return this
            },
            m = function(t) {
                var n, e = [],
                    r = [];
                for (this._root && e.push(new p(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
                    var i = n.node;
                    if (i.length) {
                        var o, u = n.x0,
                            a = n.y0,
                            c = n.x1,
                            s = n.y1,
                            f = (u + c) / 2,
                            l = (a + s) / 2;
                        (o = i[0]) && e.push(new p(o, u, a, f, l)), (o = i[1]) && e.push(new p(o, f, a, c, l)), (o = i[2]) && e.push(new p(o, u, l, f, s)), (o = i[3]) && e.push(new p(o, f, l, c, s))
                    }
                    r.push(n)
                }
                for (; n = r.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);
                return this
            },
            x = function(t) {
                return arguments.length ? (this._x = t, this) : this._x
            },
            b = function(t) {
                return arguments.length ? (this._y = t, this) : this._y
            },
            w = u.prototype = a.prototype;
        w.copy = function() {
            var t, n, e = new a(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
                r = this._root;
            if (!r) return e;
            if (!r.length) return e._root = c(r), e;
            for (t = [{
                    source: r,
                    target: e._root = new Array(4)
                }]; r = t.pop();)
                for (var i = 0; i < 4; ++i)(n = r.source[i]) && (n.length ? t.push({
                    source: n,
                    target: r.target[i] = new Array(4)
                }) : r.target[i] = c(n));
            return e
        }, w.add = s, w.addAll = e, w.cover = f, w.data = l, w.extent = h, w.find = d, w.remove = v, w.removeAll = r, w.root = g, w.size = y, w.visit = _, w.visitAfter = m, w.x = x, w.y = b, t.quadtree = u, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, e) {
        e(n)
    }(this, function(t) {
        "use strict";

        function n(t) {
            return new e(t)
        }

        function e(t) {
            if (!(n = p.exec(t))) throw new Error("invalid format: " + t);
            var n, e = n[1] || " ",
                r = n[2] || ">",
                i = n[3] || "-",
                o = n[4] || "",
                u = !!n[5],
                a = n[6] && +n[6],
                c = !!n[7],
                s = n[8] && +n[8].slice(1),
                f = n[9] || "";
            "n" === f ? (c = !0, f = "g") : h[f] || (f = ""), (u || "0" === e && "=" === r) && (u = !0, e = "0", r = "="), this.fill = e, this.align = r, this.sign = i, this.symbol = o, this.zero = u, this.width = a, this.comma = c, this.precision = s, this.type = f
        }

        function r(n) {
            return d = y(n), t.format = d.format, t.formatPrefix = d.formatPrefix, d
        }
        var i, o = function(t, n) {
                if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
                var e, r = t.slice(0, e);
                return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
            },
            u = function(t) {
                return t = o(Math.abs(t)), t ? t[1] : NaN
            },
            a = function(t, n) {
                return function(e, r) {
                    for (var i = e.length, o = [], u = 0, a = t[0], c = 0; i > 0 && a > 0 && (c + a + 1 > r && (a = Math.max(1, r - c)), o.push(e.substring(i -= a, i + a)), !((c += a + 1) > r));) a = t[u = (u + 1) % t.length];
                    return o.reverse().join(n)
                }
            },
            c = function(t) {
                return function(n) {
                    return n.replace(/[0-9]/g, function(n) {
                        return t[+n]
                    })
                }
            },
            s = function(t, n) {
                t = t.toPrecision(n);
                t: for (var e, r = t.length, i = 1, o = -1; i < r; ++i) switch (t[i]) {
                    case ".":
                        o = e = i;
                        break;
                    case "0":
                        0 === o && (o = i), e = i;
                        break;
                    case "e":
                        break t;
                    default:
                        o > 0 && (o = 0)
                }
                return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t
            },
            f = function(t, n) {
                var e = o(t, n);
                if (!e) return t + "";
                var r = e[0],
                    u = e[1],
                    a = u - (i = 3 * Math.max(-8, Math.min(8, Math.floor(u / 3)))) + 1,
                    c = r.length;
                return a === c ? r : a > c ? r + new Array(a - c + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + o(t, Math.max(0, n + a - 1))[0]
            },
            l = function(t, n) {
                var e = o(t, n);
                if (!e) return t + "";
                var r = e[0],
                    i = e[1];
                return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
            },
            h = {
                "": s,
                "%": function(t, n) {
                    return (100 * t).toFixed(n)
                },
                b: function(t) {
                    return Math.round(t).toString(2)
                },
                c: function(t) {
                    return t + ""
                },
                d: function(t) {
                    return Math.round(t).toString(10)
                },
                e: function(t, n) {
                    return t.toExponential(n)
                },
                f: function(t, n) {
                    return t.toFixed(n)
                },
                g: function(t, n) {
                    return t.toPrecision(n)
                },
                o: function(t) {
                    return Math.round(t).toString(8)
                },
                p: function(t, n) {
                    return l(100 * t, n)
                },
                r: l,
                s: f,
                X: function(t) {
                    return Math.round(t).toString(16).toUpperCase()
                },
                x: function(t) {
                    return Math.round(t).toString(16)
                }
            },
            p = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
        n.prototype = e.prototype, e.prototype.toString = function() {
            return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type
        };
        var d, v = function(t) {
                return t
            },
            g = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
            y = function(t) {
                function e(t) {
                    function e(t) {
                        var n, e, c, s = x,
                            h = b;
                        if ("c" === m) h = w(t) + h, t = "";
                        else {
                            t = +t;
                            var p = t < 0;
                            if (t = w(Math.abs(t), _), p && 0 === +t && (p = !1), s = (p ? "(" === a ? a : "-" : "-" === a || "(" === a ? "" : a) + s, h = h + ("s" === m ? g[8 + i / 3] : "") + (p && "(" === a ? ")" : ""), M)
                                for (n = -1, e = t.length; ++n < e;)
                                    if (c = t.charCodeAt(n), 48 > c || c > 57) {
                                        h = (46 === c ? f + t.slice(n + 1) : t.slice(n)) + h, t = t.slice(0, n);
                                        break
                                    }
                        }
                        y && !d && (t = o(t, 1 / 0));
                        var S = s.length + t.length + h.length,
                            E = S < v ? new Array(v - S + 1).join(r) : "";
                        switch (y && d && (t = o(E + t, E.length ? v - h.length : 1 / 0), E = ""), u) {
                            case "<":
                                t = s + t + h + E;
                                break;
                            case "=":
                                t = s + E + t + h;
                                break;
                            case "^":
                                t = E.slice(0, S = E.length >> 1) + s + t + h + E.slice(S);
                                break;
                            default:
                                t = E + s + t + h
                        }
                        return l(t)
                    }
                    t = n(t);
                    var r = t.fill,
                        u = t.align,
                        a = t.sign,
                        c = t.symbol,
                        d = t.zero,
                        v = t.width,
                        y = t.comma,
                        _ = t.precision,
                        m = t.type,
                        x = "$" === c ? s[0] : "#" === c && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "",
                        b = "$" === c ? s[1] : /[%p]/.test(m) ? p : "",
                        w = h[m],
                        M = !m || /[defgprs%]/.test(m);
                    return _ = null == _ ? m ? 6 : 12 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _)), e.toString = function() {
                        return t + ""
                    }, e
                }

                function r(t, r) {
                    var i = e((t = n(t), t.type = "f", t)),
                        o = 3 * Math.max(-8, Math.min(8, Math.floor(u(r) / 3))),
                        a = Math.pow(10, -o),
                        c = g[8 + o / 3];
                    return function(t) {
                        return i(a * t) + c
                    }
                }
                var o = t.grouping && t.thousands ? a(t.grouping, t.thousands) : v,
                    s = t.currency,
                    f = t.decimal,
                    l = t.numerals ? c(t.numerals) : v,
                    p = t.percent || "%";
                return {
                    format: e,
                    formatPrefix: r
                }
            };
        r({
            decimal: ".",
            thousands: ",",
            grouping: [3],
            currency: ["$", ""]
        });
        var _ = function(t) {
                return Math.max(0, -u(Math.abs(t)))
            },
            m = function(t, n) {
                return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(u(n) / 3))) - u(Math.abs(t)))
            },
            x = function(t, n) {
                return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, u(n) - u(t)) + 1
            };
        t.formatDefaultLocale = r, t.formatLocale = y, t.formatSpecifier = n, t.precisionFixed = _, t.precisionPrefix = m, t.precisionRound = x, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, r) {
        r(n, e(3))
    }(this, function(t, n) {
        "use strict";

        function e() {
            this.reset()
        }

        function r(t, n, e) {
            var r = t.s = n + e,
                i = r - n,
                o = r - i;
            t.t = n - o + (e - i)
        }

        function i(t) {
            return t > 1 ? 0 : t < -1 ? Vn : Math.acos(t)
        }

        function o(t) {
            return t > 1 ? Xn : t < -1 ? -Xn : Math.asin(t)
        }

        function u(t) {
            return (t = oe(t / 2)) * t
        }

        function a() {}

        function c(t, n) {
            t && fe.hasOwnProperty(t.type) && fe[t.type](t, n)
        }

        function s(t, n, e) {
            var r, i = -1,
                o = t.length - e;
            for (n.lineStart(); ++i < o;) r = t[i], n.point(r[0], r[1], r[2]);
            n.lineEnd()
        }

        function f(t, n) {
            var e = -1,
                r = t.length;
            for (n.polygonStart(); ++e < r;) s(t[e], n, 1);
            n.polygonEnd()
        }

        function l() {
            de.point = p
        }

        function h() {
            d(ln, hn)
        }

        function p(t, n) {
            de.point = d, ln = t, hn = n, t *= Zn, n *= Zn, pn = t, dn = te(n = n / 2 + Wn), vn = oe(n)
        }

        function d(t, n) {
            t *= Zn, n *= Zn, n = n / 2 + Wn;
            var e = t - pn,
                r = e >= 0 ? 1 : -1,
                i = r * e,
                o = te(n),
                u = oe(n),
                a = vn * u,
                c = dn * o + a * te(i),
                s = a * r * oe(i);
            he.add(Qn(s, c)), pn = t, dn = o, vn = u
        }

        function v(t) {
            return [Qn(t[1], t[0]), o(t[2])]
        }

        function g(t) {
            var n = t[0],
                e = t[1],
                r = te(e);
            return [r * te(n), r * oe(n), oe(e)]
        }

        function y(t, n) {
            return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
        }

        function _(t, n) {
            return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
        }

        function m(t, n) {
            t[0] += n[0], t[1] += n[1], t[2] += n[2]
        }

        function x(t, n) {
            return [t[0] * n, t[1] * n, t[2] * n]
        }

        function b(t) {
            var n = ae(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
            t[0] /= n, t[1] /= n, t[2] /= n
        }

        function w(t, n) {
            Sn.push(En = [gn = t, _n = t]), n < yn && (yn = n), n > mn && (mn = n)
        }

        function M(t, n) {
            var e = g([t * Zn, n * Zn]);
            if (Mn) {
                var r = _(Mn, e),
                    i = [r[1], -r[0], 0],
                    o = _(i, r);
                b(o), o = v(o);
                var u, a = t - xn,
                    c = a > 0 ? 1 : -1,
                    s = o[0] * Jn * c,
                    f = $n(a) > 180;
                f ^ (c * xn < s && s < c * t) ? (u = o[1] * Jn, u > mn && (mn = u)) : (s = (s + 360) % 360 - 180, f ^ (c * xn < s && s < c * t) ? (u = -o[1] * Jn, u < yn && (yn = u)) : (n < yn && (yn = n), n > mn && (mn = n))), f ? t < xn ? T(gn, t) > T(gn, _n) && (_n = t) : T(t, _n) > T(gn, _n) && (gn = t) : _n >= gn ? (t < gn && (gn = t), t > _n && (_n = t)) : t > xn ? T(gn, t) > T(gn, _n) && (_n = t) : T(t, _n) > T(gn, _n) && (gn = t)
            } else Sn.push(En = [gn = t, _n = t]);
            n < yn && (yn = n), n > mn && (mn = n), Mn = e, xn = t
        }

        function S() {
            ye.point = M
        }

        function E() {
            En[0] = gn, En[1] = _n, ye.point = w, Mn = null
        }

        function k(t, n) {
            if (Mn) {
                var e = t - xn;
                ge.add($n(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
            } else bn = t, wn = n;
            de.point(t, n), M(t, n)
        }

        function N() {
            de.lineStart()
        }

        function A() {
            k(bn, wn), de.lineEnd(), $n(ge) > Hn && (gn = -(_n = 180)), En[0] = gn, En[1] = _n, Mn = null
        }

        function T(t, n) {
            return (n -= t) < 0 ? n + 360 : n
        }

        function z(t, n) {
            return t[0] - n[0]
        }

        function C(t, n) {
            return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
        }

        function O(t, n) {
            t *= Zn, n *= Zn;
            var e = te(n);
            I(e * te(t), e * oe(t), oe(n))
        }

        function I(t, n, e) {
            ++kn, An += (t - An) / kn, Tn += (n - Tn) / kn, zn += (e - zn) / kn
        }

        function L() {
            me.point = P
        }

        function P(t, n) {
            t *= Zn, n *= Zn;
            var e = te(n);
            jn = e * te(t), Un = e * oe(t), Fn = oe(n), me.point = D, I(jn, Un, Fn)
        }

        function D(t, n) {
            t *= Zn, n *= Zn;
            var e = te(n),
                r = e * te(t),
                i = e * oe(t),
                o = oe(n),
                u = Qn(ae((u = Un * o - Fn * i) * u + (u = Fn * r - jn * o) * u + (u = jn * i - Un * r) * u), jn * r + Un * i + Fn * o);
            Nn += u, Cn += u * (jn + (jn = r)), On += u * (Un + (Un = i)), In += u * (Fn + (Fn = o)), I(jn, Un, Fn)
        }

        function q() {
            me.point = O
        }

        function R() {
            me.point = U
        }

        function j() {
            F(qn, Rn), me.point = O
        }

        function U(t, n) {
            qn = t, Rn = n, t *= Zn, n *= Zn, me.point = F;
            var e = te(n);
            jn = e * te(t), Un = e * oe(t), Fn = oe(n), I(jn, Un, Fn)
        }

        function F(t, n) {
            t *= Zn, n *= Zn;
            var e = te(n),
                r = e * te(t),
                i = e * oe(t),
                u = oe(n),
                a = Un * u - Fn * i,
                c = Fn * r - jn * u,
                s = jn * i - Un * r,
                f = ae(a * a + c * c + s * s),
                l = o(f),
                h = f && -l / f;
            Ln += h * a, Pn += h * c, Dn += h * s, Nn += l, Cn += l * (jn + (jn = r)), On += l * (Un + (Un = i)), In += l * (Fn + (Fn = u)), I(jn, Un, Fn)
        }

        function Y(t, n) {
            return [t > Vn ? t - Kn : t < -Vn ? t + Kn : t, n]
        }

        function H(t, n, e) {
            return (t %= Kn) ? n || e ? we(V(t), X(n, e)) : V(t) : n || e ? X(n, e) : Y
        }

        function B(t) {
            return function(n, e) {
                return n += t, [n > Vn ? n - Kn : n < -Vn ? n + Kn : n, e]
            }
        }

        function V(t) {
            var n = B(t);
            return n.invert = B(-t), n
        }

        function X(t, n) {
            function e(t, n) {
                var e = te(n),
                    c = te(t) * e,
                    s = oe(t) * e,
                    f = oe(n),
                    l = f * r + c * i;
                return [Qn(s * u - l * a, c * r - f * i), o(l * u + s * a)]
            }
            var r = te(t),
                i = oe(t),
                u = te(n),
                a = oe(n);
            return e.invert = function(t, n) {
                var e = te(n),
                    c = te(t) * e,
                    s = oe(t) * e,
                    f = oe(n),
                    l = f * u - s * a;
                return [Qn(s * u + f * a, c * r + l * i), o(l * r - c * i)]
            }, e
        }

        function W(t, n, e, r, i, o) {
            if (e) {
                var u = te(n),
                    a = oe(n),
                    c = r * e;
                null == i ? (i = n + r * Kn, o = n - c / 2) : (i = K(u, i), o = K(u, o), (r > 0 ? i < o : i > o) && (i += r * Kn));
                for (var s, f = i; r > 0 ? f > o : f < o; f -= c) s = v([u, -a * te(f), -a * oe(f)]), t.point(s[0], s[1])
            }
        }

        function K(t, n) {
            n = g(n), n[0] -= t, b(n);
            var e = i(-n[1]);
            return ((-n[2] < 0 ? -e : e) + Kn - Hn) % Kn
        }

        function J(t, n, e, r) {
            this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
        }

        function Z(t) {
            if (n = t.length) {
                for (var n, e, r = 0, i = t[0]; ++r < n;) i.n = e = t[r], e.p = i, i = e;
                i.n = e = t[0], e.p = i
            }
        }

        function $(t) {
            return t.length > 1
        }

        function G(t, n) {
            return ((t = t.x)[0] < 0 ? t[1] - Xn - Hn : Xn - t[1]) - ((n = n.x)[0] < 0 ? n[1] - Xn - Hn : Xn - n[1])
        }

        function Q(t) {
            var n, e = NaN,
                r = NaN,
                i = NaN;
            return {
                lineStart: function() {
                    t.lineStart(), n = 1
                },
                point: function(o, u) {
                    var a = o > 0 ? Vn : -Vn,
                        c = $n(o - e);
                    $n(c - Vn) < Hn ? (t.point(e, r = (r + u) / 2 > 0 ? Xn : -Xn), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), t.point(o, r), n = 0) : i !== a && c >= Vn && ($n(e - i) < Hn && (e -= i * Hn), $n(o - a) < Hn && (o -= a * Hn), r = tt(e, r, o, u), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), n = 0), t.point(e = o, r = u), i = a
                },
                lineEnd: function() {
                    t.lineEnd(), e = r = NaN
                },
                clean: function() {
                    return 2 - n
                }
            }
        }

        function tt(t, n, e, r) {
            var i, o, u = oe(t - e);
            return $n(u) > Hn ? Gn((oe(n) * (o = te(r)) * oe(e) - oe(r) * (i = te(n)) * oe(t)) / (i * o * u)) : (n + r) / 2
        }

        function nt(t, n, e, r) {
            var i;
            if (null == t) i = e * Xn, r.point(-Vn, i), r.point(0, i), r.point(Vn, i), r.point(Vn, 0), r.point(Vn, -i), r.point(0, -i), r.point(-Vn, -i), r.point(-Vn, 0), r.point(-Vn, i);
            else if ($n(t[0] - n[0]) > Hn) {
                var o = t[0] < n[0] ? Vn : -Vn;
                i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i)
            } else r.point(n[0], n[1])
        }

        function et(t, e, r, i) {
            function o(n, o) {
                return t <= n && n <= r && e <= o && o <= i
            }

            function u(n, o, u, c) {
                var f = 0,
                    l = 0;
                if (null == n || (f = a(n, u)) !== (l = a(o, u)) || s(n, o) < 0 ^ u > 0) {
                    do c.point(0 === f || 3 === f ? t : r, f > 1 ? i : e); while ((f = (f + u + 4) % 4) !== l)
                } else c.point(o[0], o[1])
            }

            function a(n, i) {
                return $n(n[0] - t) < Hn ? i > 0 ? 0 : 3 : $n(n[0] - r) < Hn ? i > 0 ? 2 : 1 : $n(n[1] - e) < Hn ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
            }

            function c(t, n) {
                return s(t.x, n.x)
            }

            function s(t, n) {
                var e = a(t, 1),
                    r = a(n, 1);
                return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
            }
            return function(a) {
                function s(t, n) {
                    o(t, n) && N.point(t, n)
                }

                function f() {
                    for (var n = 0, e = 0, r = y.length; e < r; ++e)
                        for (var o, u, a = y[e], c = 1, s = a.length, f = a[0], l = f[0], h = f[1]; c < s; ++c) o = l, u = h, f = a[c], l = f[0], h = f[1], u <= i ? h > i && (l - o) * (i - u) > (h - u) * (t - o) && ++n : h <= i && (l - o) * (i - u) < (h - u) * (t - o) && --n;
                    return n
                }

                function l() {
                    N = A, g = [], y = [], k = !0
                }

                function h() {
                    var t = f(),
                        e = k && t,
                        r = (g = n.merge(g)).length;
                    (e || r) && (a.polygonStart(), e && (a.lineStart(), u(null, null, 1, a), a.lineEnd()), r && Re(g, c, t, u, a), a.polygonEnd()), N = a, g = y = _ = null
                }

                function p() {
                    T.point = v, y && y.push(_ = []), E = !0, S = !1, w = M = NaN
                }

                function d() {
                    g && (v(m, x), b && S && A.rejoin(), g.push(A.result())), T.point = s, S && N.lineEnd()
                }

                function v(n, u) {
                    var a = o(n, u);
                    if (y && _.push([n, u]), E) m = n, x = u, b = a, E = !1, a && (N.lineStart(), N.point(n, u));
                    else if (a && S) N.point(n, u);
                    else {
                        var c = [w = Math.max(Xe, Math.min(Ve, w)), M = Math.max(Xe, Math.min(Ve, M))],
                            s = [n = Math.max(Xe, Math.min(Ve, n)), u = Math.max(Xe, Math.min(Ve, u))];
                        Be(c, s, t, e, r, i) ? (S || (N.lineStart(), N.point(c[0], c[1])), N.point(s[0], s[1]), a || N.lineEnd(), k = !1) : a && (N.lineStart(), N.point(n, u), k = !1)
                    }
                    w = n, M = u, S = a
                }
                var g, y, _, m, x, b, w, M, S, E, k, N = a,
                    A = De(),
                    T = {
                        point: s,
                        lineStart: p,
                        lineEnd: d,
                        polygonStart: l,
                        polygonEnd: h
                    };
                return T
            }
        }

        function rt() {
            Je.point = ot, Je.lineEnd = it
        }

        function it() {
            Je.point = Je.lineEnd = a
        }

        function ot(t, n) {
            t *= Zn, n *= Zn, Me = t, Se = oe(n), Ee = te(n), Je.point = ut
        }

        function ut(t, n) {
            t *= Zn, n *= Zn;
            var e = oe(n),
                r = te(n),
                i = $n(t - Me),
                o = te(i),
                u = oe(i),
                a = r * u,
                c = Ee * e - Se * r * o,
                s = Se * e + Ee * r * o;
            Ke.add(Qn(ae(a * a + c * c), s)), Me = t, Se = e, Ee = r
        }

        function at(t, n) {
            return !(!t || !nr.hasOwnProperty(t.type)) && nr[t.type](t, n)
        }

        function ct(t, n) {
            return 0 === Qe(t, n)
        }

        function st(t, n) {
            var e = Qe(t[0], t[1]),
                r = Qe(t[0], n),
                i = Qe(n, t[1]);
            return r + i <= e + Hn
        }

        function ft(t, n) {
            return !!Ue(t.map(lt), ht(n))
        }

        function lt(t) {
            return t = t.map(ht), t.pop(), t
        }

        function ht(t) {
            return [t[0] * Zn, t[1] * Zn]
        }

        function pt(t, e, r) {
            var i = n.range(t, e - Hn, r).concat(e);
            return function(t) {
                return i.map(function(n) {
                    return [t, n]
                })
            }
        }

        function dt(t, e, r) {
            var i = n.range(t, e - Hn, r).concat(e);
            return function(t) {
                return i.map(function(n) {
                    return [n, t]
                })
            }
        }

        function vt() {
            function t() {
                return {
                    type: "MultiLineString",
                    coordinates: e()
                }
            }

            function e() {
                return n.range(ne(u / y) * y, o, y).map(p).concat(n.range(ne(f / _) * _, s, _).map(d)).concat(n.range(ne(i / v) * v, r, v).filter(function(t) {
                    return $n(t % y) > Hn
                }).map(l)).concat(n.range(ne(c / g) * g, a, g).filter(function(t) {
                    return $n(t % _) > Hn
                }).map(h))
            }
            var r, i, o, u, a, c, s, f, l, h, p, d, v = 10,
                g = v,
                y = 90,
                _ = 360,
                m = 2.5;
            return t.lines = function() {
                return e().map(function(t) {
                    return {
                        type: "LineString",
                        coordinates: t
                    }
                })
            }, t.outline = function() {
                return {
                    type: "Polygon",
                    coordinates: [p(u).concat(d(s).slice(1), p(o).reverse().slice(1), d(f).reverse().slice(1))]
                }
            }, t.extent = function(n) {
                return arguments.length ? t.extentMajor(n).extentMinor(n) : t.extentMinor()
            }, t.extentMajor = function(n) {
                return arguments.length ? (u = +n[0][0], o = +n[1][0], f = +n[0][1], s = +n[1][1], u > o && (n = u, u = o, o = n), f > s && (n = f, f = s, s = n), t.precision(m)) : [
                    [u, f],
                    [o, s]
                ]
            }, t.extentMinor = function(n) {
                return arguments.length ? (i = +n[0][0], r = +n[1][0], c = +n[0][1], a = +n[1][1], i > r && (n = i, i = r, r = n), c > a && (n = c, c = a, a = n), t.precision(m)) : [
                    [i, c],
                    [r, a]
                ]
            }, t.step = function(n) {
                return arguments.length ? t.stepMajor(n).stepMinor(n) : t.stepMinor()
            }, t.stepMajor = function(n) {
                return arguments.length ? (y = +n[0], _ = +n[1], t) : [y, _]
            }, t.stepMinor = function(n) {
                return arguments.length ? (v = +n[0], g = +n[1], t) : [v, g]
            }, t.precision = function(n) {
                return arguments.length ? (m = +n, l = pt(c, a, 90), h = dt(i, r, m), p = pt(f, s, 90), d = dt(u, o, m), t) : m
            }, t.extentMajor([
                [-180, -90 + Hn],
                [180, 90 - Hn]
            ]).extentMinor([
                [-180, -80 - Hn],
                [180, 80 + Hn]
            ])
        }

        function gt() {
            return vt()()
        }

        function yt() {
            ar.point = _t
        }

        function _t(t, n) {
            ar.point = mt, ke = Ae = t, Ne = Te = n
        }

        function mt(t, n) {
            ur.add(Te * t - Ae * n), Ae = t, Te = n
        }

        function xt() {
            mt(ke, Ne)
        }

        function bt(t, n) {
            t < cr && (cr = t), t > fr && (fr = t), n < sr && (sr = n), n > lr && (lr = n)
        }

        function wt(t, n) {
            pr += t, dr += n, ++vr
        }

        function Mt() {
            wr.point = St
        }

        function St(t, n) {
            wr.point = Et, wt(Oe = t, Ie = n)
        }

        function Et(t, n) {
            var e = t - Oe,
                r = n - Ie,
                i = ae(e * e + r * r);
            gr += i * (Oe + t) / 2, yr += i * (Ie + n) / 2, _r += i, wt(Oe = t, Ie = n)
        }

        function kt() {
            wr.point = wt
        }

        function Nt() {
            wr.point = Tt
        }

        function At() {
            zt(ze, Ce)
        }

        function Tt(t, n) {
            wr.point = zt, wt(ze = Oe = t, Ce = Ie = n)
        }

        function zt(t, n) {
            var e = t - Oe,
                r = n - Ie,
                i = ae(e * e + r * r);
            gr += i * (Oe + t) / 2, yr += i * (Ie + n) / 2, _r += i, i = Ie * t - Oe * n, mr += i * (Oe + t), xr += i * (Ie + n), br += 3 * i, wt(Oe = t, Ie = n)
        }

        function Ct(t) {
            this._context = t
        }

        function Ot(t, n) {
            Tr.point = It, Sr = kr = t, Er = Nr = n
        }

        function It(t, n) {
            kr -= t, Nr -= n, Ar.add(ae(kr * kr + Nr * Nr)), kr = t, Nr = n
        }

        function Lt() {
            this._string = []
        }

        function Pt(t) {
            return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
        }

        function Dt(t) {
            return function(n) {
                var e = new qt;
                for (var r in t) e[r] = t[r];
                return e.stream = n, e
            }
        }

        function qt() {}

        function Rt(t, n, e) {
            var r = n[1][0] - n[0][0],
                i = n[1][1] - n[0][1],
                o = t.clipExtent && t.clipExtent();
            t.scale(150).translate([0, 0]), null != o && t.clipExtent(null), le(e, t.stream(hr));
            var u = hr.result(),
                a = Math.min(r / (u[1][0] - u[0][0]), i / (u[1][1] - u[0][1])),
                c = +n[0][0] + (r - a * (u[1][0] + u[0][0])) / 2,
                s = +n[0][1] + (i - a * (u[1][1] + u[0][1])) / 2;
            return null != o && t.clipExtent(o), t.scale(150 * a).translate([c, s])
        }

        function jt(t, n, e) {
            return Rt(t, [
                [0, 0], n
            ], e)
        }

        function Ut(t) {
            return Dt({
                point: function(n, e) {
                    n = t(n, e), this.stream.point(n[0], n[1])
                }
            })
        }

        function Ft(t, n) {
            function e(r, i, u, a, c, s, f, l, h, p, d, v, g, y) {
                var _ = f - r,
                    m = l - i,
                    x = _ * _ + m * m;
                if (x > 4 * n && g--) {
                    var b = a + p,
                        w = c + d,
                        M = s + v,
                        S = ae(b * b + w * w + M * M),
                        E = o(M /= S),
                        k = $n($n(M) - 1) < Hn || $n(u - h) < Hn ? (u + h) / 2 : Qn(w, b),
                        N = t(k, E),
                        A = N[0],
                        T = N[1],
                        z = A - r,
                        C = T - i,
                        O = m * z - _ * C;
                    (O * O / x > n || $n((_ * z + m * C) / x - .5) > .3 || a * p + c * d + s * v < Ir) && (e(r, i, u, a, c, s, A, T, k, b /= S, w /= S, M, g, y), y.point(A, T), e(A, T, k, b, w, M, f, l, h, p, d, v, g, y))
                }
            }
            return function(n) {
                function r(e, r) {
                    e = t(e, r), n.point(e[0], e[1])
                }

                function i() {
                    _ = NaN, M.point = o, n.lineStart()
                }

                function o(r, i) {
                    var o = g([r, i]),
                        u = t(r, i);
                    e(_, m, y, x, b, w, _ = u[0], m = u[1], y = r, x = o[0], b = o[1], w = o[2], Or, n), n.point(_, m)
                }

                function u() {
                    M.point = r, n.lineEnd()
                }

                function a() {
                    i(), M.point = c, M.lineEnd = s
                }

                function c(t, n) {
                    o(f = t, n), l = _, h = m, p = x, d = b, v = w, M.point = o
                }

                function s() {
                    e(_, m, y, x, b, w, l, h, f, p, d, v, Or, n), M.lineEnd = u, u()
                }
                var f, l, h, p, d, v, y, _, m, x, b, w, M = {
                    point: r,
                    lineStart: i,
                    lineEnd: u,
                    polygonStart: function() {
                        n.polygonStart(), M.lineStart = a
                    },
                    polygonEnd: function() {
                        n.polygonEnd(), M.lineStart = i
                    }
                };
                return M
            }
        }

        function Yt(t) {
            return Dt({
                point: function(n, e) {
                    var r = t(n, e);
                    return this.stream.point(r[0], r[1])
                }
            })
        }

        function Ht(t) {
            return Bt(function() {
                return t
            })()
        }

        function Bt(t) {
            function n(t) {
                return t = f(t[0] * Zn, t[1] * Zn), [t[0] * g + a, c - t[1] * g]
            }

            function e(t) {
                return t = f.invert((t[0] - a) / g, (c - t[1]) / g), t && [t[0] * Jn, t[1] * Jn]
            }

            function r(t, n) {
                return t = u(t, n), [t[0] * g + a, c - t[1] * g]
            }

            function i() {
                f = we(s = H(b, w, M), u);
                var t = u(m, x);
                return a = y - t[0] * g, c = _ + t[1] * g, o()
            }

            function o() {
                return d = v = null, n
            }
            var u, a, c, s, f, l, h, p, d, v, g = 150,
                y = 480,
                _ = 250,
                m = 0,
                x = 0,
                b = 0,
                w = 0,
                M = 0,
                S = null,
                E = Ye,
                k = null,
                N = ir,
                A = .5,
                T = Lr(r, A);
            return n.stream = function(t) {
                    return d && v === t ? d : d = Pr(Yt(s)(E(T(N(v = t)))))
                }, n.preclip = function(t) {
                    return arguments.length ? (E = t, S = void 0, o()) : E
                }, n.postclip = function(t) {
                    return arguments.length ? (N = t, k = l = h = p = null, o()) : N
                }, n.clipAngle = function(t) {
                    return arguments.length ? (E = +t ? He(S = t * Zn) : (S = null, Ye), o()) : S * Jn
                }, n.clipExtent = function(t) {
                    return arguments.length ? (N = null == t ? (k = l = h = p = null, ir) : et(k = +t[0][0], l = +t[0][1], h = +t[1][0], p = +t[1][1]), o()) : null == k ? null : [
                        [k, l],
                        [h, p]
                    ]
                }, n.scale = function(t) {
                    return arguments.length ? (g = +t, i()) : g
                }, n.translate = function(t) {
                    return arguments.length ? (y = +t[0], _ = +t[1], i()) : [y, _]
                }, n.center = function(t) {
                    return arguments.length ? (m = t[0] % 360 * Zn, x = t[1] % 360 * Zn, i()) : [m * Jn, x * Jn]
                }, n.rotate = function(t) {
                    return arguments.length ? (b = t[0] % 360 * Zn, w = t[1] % 360 * Zn, M = t.length > 2 ? t[2] % 360 * Zn : 0, i()) : [b * Jn, w * Jn, M * Jn]
                }, n.precision = function(t) {
                    return arguments.length ? (T = Lr(r, A = t * t), o()) : ae(A)
                }, n.fitExtent = function(t, e) {
                    return Rt(n, t, e)
                }, n.fitSize = function(t, e) {
                    return jt(n, t, e)
                },
                function() {
                    return u = t.apply(this, arguments), n.invert = u.invert && e, i()
                }
        }

        function Vt(t) {
            var n = 0,
                e = Vn / 3,
                r = Bt(t),
                i = r(n, e);
            return i.parallels = function(t) {
                return arguments.length ? r(n = t[0] * Zn, e = t[1] * Zn) : [n * Jn, e * Jn]
            }, i
        }

        function Xt(t) {
            function n(t, n) {
                return [t * e, oe(n) / e]
            }
            var e = te(t);
            return n.invert = function(t, n) {
                return [t / e, o(n * e)]
            }, n
        }

        function Wt(t, n) {
            function e(t, n) {
                var e = ae(u - 2 * i * oe(n)) / i;
                return [e * oe(t *= i), a - e * te(t)]
            }
            var r = oe(t),
                i = (r + oe(n)) / 2;
            if ($n(i) < Hn) return Xt(t);
            var u = 1 + r * (2 * i - r),
                a = ae(u) / i;
            return e.invert = function(t, n) {
                var e = a - n;
                return [Qn(t, $n(e)) / i * ue(e), o((u - (t * t + e * e) * i * i) / (2 * i))]
            }, e
        }

        function Kt(t) {
            var n = t.length;
            return {
                point: function(e, r) {
                    for (var i = -1; ++i < n;) t[i].point(e, r)
                },
                sphere: function() {
                    for (var e = -1; ++e < n;) t[e].sphere()
                },
                lineStart: function() {
                    for (var e = -1; ++e < n;) t[e].lineStart()
                },
                lineEnd: function() {
                    for (var e = -1; ++e < n;) t[e].lineEnd()
                },
                polygonStart: function() {
                    for (var e = -1; ++e < n;) t[e].polygonStart()
                },
                polygonEnd: function() {
                    for (var e = -1; ++e < n;) t[e].polygonEnd()
                }
            }
        }

        function Jt(t) {
            return function(n, e) {
                var r = te(n),
                    i = te(e),
                    o = t(r * i);
                return [o * i * oe(n), o * oe(e)]
            }
        }

        function Zt(t) {
            return function(n, e) {
                var r = ae(n * n + e * e),
                    i = t(r),
                    u = oe(i),
                    a = te(i);
                return [Qn(n * u, r * a), o(r && e * u / r)]
            }
        }

        function $t(t, n) {
            return [t, re(ce((Xn + n) / 2))]
        }

        function Gt(t) {
            function n() {
                var n = Vn * a(),
                    u = o(Le(o.rotate()).invert([0, 0]));
                return s(null == f ? [
                    [u[0] - n, u[1] - n],
                    [u[0] + n, u[1] + n]
                ] : t === $t ? [
                    [Math.max(u[0] - n, f), e],
                    [Math.min(u[0] + n, r), i]
                ] : [
                    [f, Math.max(u[1] - n, e)],
                    [r, Math.min(u[1] + n, i)]
                ])
            }
            var e, r, i, o = Ht(t),
                u = o.center,
                a = o.scale,
                c = o.translate,
                s = o.clipExtent,
                f = null;
            return o.scale = function(t) {
                return arguments.length ? (a(t), n()) : a()
            }, o.translate = function(t) {
                return arguments.length ? (c(t), n()) : c()
            }, o.center = function(t) {
                return arguments.length ? (u(t), n()) : u()
            }, o.clipExtent = function(t) {
                return arguments.length ? (null == t ? f = e = r = i = null : (f = +t[0][0], e = +t[0][1], r = +t[1][0], i = +t[1][1]), n()) : null == f ? null : [
                    [f, e],
                    [r, i]
                ]
            }, n()
        }

        function Qt(t) {
            return ce((Xn + t) / 2)
        }

        function tn(t, n) {
            function e(t, n) {
                o > 0 ? n < -Xn + Hn && (n = -Xn + Hn) : n > Xn - Hn && (n = Xn - Hn);
                var e = o / ie(Qt(n), i);
                return [e * oe(i * t), o - e * te(i * t)]
            }
            var r = te(t),
                i = t === n ? oe(t) : re(r / te(n)) / re(Qt(n) / Qt(t)),
                o = r * ie(Qt(t), i) / i;
            return i ? (e.invert = function(t, n) {
                var e = o - n,
                    r = ue(i) * ae(t * t + e * e);
                return [Qn(t, $n(e)) / i * ue(e), 2 * Gn(ie(o / r, 1 / i)) - Xn]
            }, e) : $t
        }

        function nn(t, n) {
            return [t, n]
        }

        function en(t, n) {
            function e(t, n) {
                var e = o - n,
                    r = i * t;
                return [e * oe(r), o - e * te(r)]
            }
            var r = te(t),
                i = t === n ? oe(t) : (r - te(n)) / (n - t),
                o = r / i + t;
            return $n(i) < Hn ? nn : (e.invert = function(t, n) {
                var e = o - n;
                return [Qn(t, $n(e)) / i * ue(e), o - ue(i) * ae(t * t + e * e)]
            }, e)
        }

        function rn(t, n) {
            var e = te(n),
                r = te(t) * e;
            return [e * oe(t) / r, oe(n) / r]
        }

        function on(t, n, e, r) {
            return 1 === t && 1 === n && 0 === e && 0 === r ? ir : Dt({
                point: function(i, o) {
                    this.stream.point(i * t + e, o * n + r)
                }
            })
        }

        function un(t, n) {
            var e = n * n,
                r = e * e;
            return [t * (.8707 - .131979 * e + r * (-.013791 + r * (.003971 * e - .001529 * r))), n * (1.007226 + e * (.015085 + r * (-.044475 + .028874 * e - .005916 * r)))]
        }

        function an(t, n) {
            return [te(n) * oe(t), oe(n)]
        }

        function cn(t, n) {
            var e = te(n),
                r = 1 + te(t) * e;
            return [e * oe(t) / r, oe(n) / r]
        }

        function sn(t, n) {
            return [re(ce((Xn + n) / 2)), -t]
        }
        var fn = function() {
            return new e
        };
        e.prototype = {
            constructor: e,
            reset: function() {
                this.s = this.t = 0
            },
            add: function(t) {
                r(Yn, t, this.t), r(this, Yn.s, this.s), this.s ? this.t += Yn.t : this.s = Yn.t
            },
            valueOf: function() {
                return this.s
            }
        };
        var ln, hn, pn, dn, vn, gn, yn, _n, mn, xn, bn, wn, Mn, Sn, En, kn, Nn, An, Tn, zn, Cn, On, In, Ln, Pn, Dn, qn, Rn, jn, Un, Fn, Yn = new e,
            Hn = 1e-6,
            Bn = 1e-12,
            Vn = Math.PI,
            Xn = Vn / 2,
            Wn = Vn / 4,
            Kn = 2 * Vn,
            Jn = 180 / Vn,
            Zn = Vn / 180,
            $n = Math.abs,
            Gn = Math.atan,
            Qn = Math.atan2,
            te = Math.cos,
            ne = Math.ceil,
            ee = Math.exp,
            re = Math.log,
            ie = Math.pow,
            oe = Math.sin,
            ue = Math.sign || function(t) {
                return t > 0 ? 1 : t < 0 ? -1 : 0
            },
            ae = Math.sqrt,
            ce = Math.tan,
            se = {
                Feature: function(t, n) {
                    c(t.geometry, n)
                },
                FeatureCollection: function(t, n) {
                    for (var e = t.features, r = -1, i = e.length; ++r < i;) c(e[r].geometry, n)
                }
            },
            fe = {
                Sphere: function(t, n) {
                    n.sphere()
                },
                Point: function(t, n) {
                    t = t.coordinates, n.point(t[0], t[1], t[2])
                },
                MultiPoint: function(t, n) {
                    for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) t = e[r], n.point(t[0], t[1], t[2])
                },
                LineString: function(t, n) {
                    s(t.coordinates, n, 0)
                },
                MultiLineString: function(t, n) {
                    for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) s(e[r], n, 0)
                },
                Polygon: function(t, n) {
                    f(t.coordinates, n)
                },
                MultiPolygon: function(t, n) {
                    for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) f(e[r], n)
                },
                GeometryCollection: function(t, n) {
                    for (var e = t.geometries, r = -1, i = e.length; ++r < i;) c(e[r], n)
                }
            },
            le = function(t, n) {
                t && se.hasOwnProperty(t.type) ? se[t.type](t, n) : c(t, n)
            },
            he = fn(),
            pe = fn(),
            de = {
                point: a,
                lineStart: a,
                lineEnd: a,
                polygonStart: function() {
                    he.reset(), de.lineStart = l, de.lineEnd = h
                },
                polygonEnd: function() {
                    var t = +he;
                    pe.add(t < 0 ? Kn + t : t), this.lineStart = this.lineEnd = this.point = a
                },
                sphere: function() {
                    pe.add(Kn)
                }
            },
            ve = function(t) {
                return pe.reset(), le(t, de), 2 * pe
            },
            ge = fn(),
            ye = {
                point: w,
                lineStart: S,
                lineEnd: E,
                polygonStart: function() {
                    ye.point = k, ye.lineStart = N, ye.lineEnd = A, ge.reset(), de.polygonStart()
                },
                polygonEnd: function() {
                    de.polygonEnd(), ye.point = w, ye.lineStart = S, ye.lineEnd = E, he < 0 ? (gn = -(_n = 180), yn = -(mn = 90)) : ge > Hn ? mn = 90 : ge < -Hn && (yn = -90), En[0] = gn, En[1] = _n
                }
            },
            _e = function(t) {
                var n, e, r, i, o, u, a;
                if (mn = _n = -(gn = yn = 1 / 0), Sn = [], le(t, ye), e = Sn.length) {
                    for (Sn.sort(z), n = 1, r = Sn[0], o = [r]; n < e; ++n) i = Sn[n], C(r, i[0]) || C(r, i[1]) ? (T(r[0], i[1]) > T(r[0], r[1]) && (r[1] = i[1]), T(i[0], r[1]) > T(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i);
                    for (u = -(1 / 0), e = o.length - 1, n = 0, r = o[e]; n <= e; r = i, ++n) i = o[n], (a = T(r[1], i[0])) > u && (u = a, gn = i[0], _n = r[1])
                }
                return Sn = En = null, gn === 1 / 0 || yn === 1 / 0 ? [
                    [NaN, NaN],
                    [NaN, NaN]
                ] : [
                    [gn, yn],
                    [_n, mn]
                ]
            },
            me = {
                sphere: a,
                point: O,
                lineStart: L,
                lineEnd: q,
                polygonStart: function() {
                    me.lineStart = R, me.lineEnd = j
                },
                polygonEnd: function() {
                    me.lineStart = L, me.lineEnd = q
                }
            },
            xe = function(t) {
                kn = Nn = An = Tn = zn = Cn = On = In = Ln = Pn = Dn = 0, le(t, me);
                var n = Ln,
                    e = Pn,
                    r = Dn,
                    i = n * n + e * e + r * r;
                return i < Bn && (n = Cn, e = On, r = In, Nn < Hn && (n = An, e = Tn, r = zn), i = n * n + e * e + r * r, i < Bn) ? [NaN, NaN] : [Qn(e, n) * Jn, o(r / ae(i)) * Jn]
            },
            be = function(t) {
                return function() {
                    return t
                }
            },
            we = function(t, n) {
                function e(e, r) {
                    return e = t(e, r), n(e[0], e[1])
                }
                return t.invert && n.invert && (e.invert = function(e, r) {
                    return e = n.invert(e, r), e && t.invert(e[0], e[1])
                }), e
            };
        Y.invert = Y;
        var Me, Se, Ee, ke, Ne, Ae, Te, ze, Ce, Oe, Ie, Le = function(t) {
                function n(n) {
                    return n = t(n[0] * Zn, n[1] * Zn), n[0] *= Jn, n[1] *= Jn, n
                }
                return t = H(t[0] * Zn, t[1] * Zn, t.length > 2 ? t[2] * Zn : 0), n.invert = function(n) {
                    return n = t.invert(n[0] * Zn, n[1] * Zn), n[0] *= Jn, n[1] *= Jn, n
                }, n
            },
            Pe = function() {
                function t(t, n) {
                    e.push(t = r(t, n)), t[0] *= Jn, t[1] *= Jn
                }

                function n() {
                    var t = i.apply(this, arguments),
                        n = o.apply(this, arguments) * Zn,
                        c = u.apply(this, arguments) * Zn;
                    return e = [], r = H(-t[0] * Zn, -t[1] * Zn, 0).invert, W(a, n, c, 1), t = {
                        type: "Polygon",
                        coordinates: [e]
                    }, e = r = null, t
                }
                var e, r, i = be([0, 0]),
                    o = be(90),
                    u = be(6),
                    a = {
                        point: t
                    };
                return n.center = function(t) {
                    return arguments.length ? (i = "function" == typeof t ? t : be([+t[0], +t[1]]), n) : i
                }, n.radius = function(t) {
                    return arguments.length ? (o = "function" == typeof t ? t : be(+t), n) : o
                }, n.precision = function(t) {
                    return arguments.length ? (u = "function" == typeof t ? t : be(+t), n) : u
                }, n
            },
            De = function() {
                var t, n = [];
                return {
                    point: function(n, e) {
                        t.push([n, e])
                    },
                    lineStart: function() {
                        n.push(t = [])
                    },
                    lineEnd: a,
                    rejoin: function() {
                        n.length > 1 && n.push(n.pop().concat(n.shift()))
                    },
                    result: function() {
                        var e = n;
                        return n = [], t = null, e
                    }
                }
            },
            qe = function(t, n) {
                return $n(t[0] - n[0]) < Hn && $n(t[1] - n[1]) < Hn
            },
            Re = function(t, n, e, r, i) {
                var o, u, a = [],
                    c = [];
                if (t.forEach(function(t) {
                        if (!((n = t.length - 1) <= 0)) {
                            var n, e, r = t[0],
                                u = t[n];
                            if (qe(r, u)) {
                                for (i.lineStart(), o = 0; o < n; ++o) i.point((r = t[o])[0], r[1]);
                                return void i.lineEnd()
                            }
                            a.push(e = new J(r, t, null, !0)), c.push(e.o = new J(r, null, e, !1)), a.push(e = new J(u, t, null, !1)), c.push(e.o = new J(u, null, e, !0))
                        }
                    }), a.length) {
                    for (c.sort(n), Z(a), Z(c), o = 0, u = c.length; o < u; ++o) c[o].e = e = !e;
                    for (var s, f, l = a[0];;) {
                        for (var h = l, p = !0; h.v;)
                            if ((h = h.n) === l) return;
                        s = h.z, i.lineStart();
                        do {
                            if (h.v = h.o.v = !0, h.e) {
                                if (p)
                                    for (o = 0, u = s.length; o < u; ++o) i.point((f = s[o])[0], f[1]);
                                else r(h.x, h.n.x, 1, i);
                                h = h.n
                            } else {
                                if (p)
                                    for (s = h.p.z, o = s.length - 1; o >= 0; --o) i.point((f = s[o])[0], f[1]);
                                else r(h.x, h.p.x, -1, i);
                                h = h.p
                            }
                            h = h.o, s = h.z, p = !p
                        } while (!h.v);
                        i.lineEnd()
                    }
                }
            },
            je = fn(),
            Ue = function(t, n) {
                var e = n[0],
                    r = n[1],
                    i = [oe(e), -te(e), 0],
                    u = 0,
                    a = 0;
                je.reset();
                for (var c = 0, s = t.length; c < s; ++c)
                    if (l = (f = t[c]).length)
                        for (var f, l, h = f[l - 1], p = h[0], d = h[1] / 2 + Wn, v = oe(d), y = te(d), m = 0; m < l; ++m, p = w, v = S, y = E, h = x) {
                            var x = f[m],
                                w = x[0],
                                M = x[1] / 2 + Wn,
                                S = oe(M),
                                E = te(M),
                                k = w - p,
                                N = k >= 0 ? 1 : -1,
                                A = N * k,
                                T = A > Vn,
                                z = v * S;
                            if (je.add(Qn(z * N * oe(A), y * E + z * te(A))), u += T ? k + N * Kn : k, T ^ p >= e ^ w >= e) {
                                var C = _(g(h), g(x));
                                b(C);
                                var O = _(i, C);
                                b(O);
                                var I = (T ^ k >= 0 ? -1 : 1) * o(O[2]);
                                (r > I || r === I && (C[0] || C[1])) && (a += T ^ k >= 0 ? 1 : -1)
                            }
                        }
                return (u < -Hn || u < Hn && je < -Hn) ^ 1 & a
            },
            Fe = function(t, e, r, i) {
                return function(o) {
                    function u(n, e) {
                        t(n, e) && o.point(n, e)
                    }

                    function a(t, n) {
                        g.point(t, n)
                    }

                    function c() {
                        x.point = a, g.lineStart()
                    }

                    function s() {
                        x.point = u, g.lineEnd()
                    }

                    function f(t, n) {
                        v.push([t, n]), _.point(t, n)
                    }

                    function l() {
                        _.lineStart(), v = []
                    }

                    function h() {
                        f(v[0][0], v[0][1]), _.lineEnd();
                        var t, n, e, r, i = _.clean(),
                            u = y.result(),
                            a = u.length;
                        if (v.pop(), p.push(v), v = null, a)
                            if (1 & i) {
                                if (e = u[0], (n = e.length - 1) > 0) {
                                    for (m || (o.polygonStart(), m = !0), o.lineStart(), t = 0; t < n; ++t) o.point((r = e[t])[0], r[1]);
                                    o.lineEnd()
                                }
                            } else a > 1 && 2 & i && u.push(u.pop().concat(u.shift())), d.push(u.filter($))
                    }
                    var p, d, v, g = e(o),
                        y = De(),
                        _ = e(y),
                        m = !1,
                        x = {
                            point: u,
                            lineStart: c,
                            lineEnd: s,
                            polygonStart: function() {
                                x.point = f, x.lineStart = l, x.lineEnd = h, d = [], p = []
                            },
                            polygonEnd: function() {
                                x.point = u, x.lineStart = c, x.lineEnd = s, d = n.merge(d);
                                var t = Ue(p, i);
                                d.length ? (m || (o.polygonStart(), m = !0), Re(d, G, t, r, o)) : t && (m || (o.polygonStart(), m = !0), o.lineStart(), r(null, null, 1, o), o.lineEnd()), m && (o.polygonEnd(), m = !1), d = p = null
                            },
                            sphere: function() {
                                o.polygonStart(), o.lineStart(), r(null, null, 1, o), o.lineEnd(), o.polygonEnd()
                            }
                        };
                    return x
                }
            },
            Ye = Fe(function() {
                return !0
            }, Q, nt, [-Vn, -Xn]),
            He = function(t) {
                function n(n, e, r, i) {
                    W(i, t, a, r, n, e)
                }

                function e(t, n) {
                    return te(t) * te(n) > u
                }

                function r(t) {
                    var n, r, u, a, f;
                    return {
                        lineStart: function() {
                            a = u = !1, f = 1
                        },
                        point: function(l, h) {
                            var p, d = [l, h],
                                v = e(l, h),
                                g = c ? v ? 0 : o(l, h) : v ? o(l + (l < 0 ? Vn : -Vn), h) : 0;
                            if (!n && (a = u = v) && t.lineStart(), v !== u && (p = i(n, d), (!p || qe(n, p) || qe(d, p)) && (d[0] += Hn, d[1] += Hn, v = e(d[0], d[1]))), v !== u) f = 0, v ? (t.lineStart(), p = i(d, n), t.point(p[0], p[1])) : (p = i(n, d), t.point(p[0], p[1]), t.lineEnd()), n = p;
                            else if (s && n && c ^ v) {
                                var y;
                                g & r || !(y = i(d, n, !0)) || (f = 0, c ? (t.lineStart(), t.point(y[0][0], y[0][1]), t.point(y[1][0], y[1][1]), t.lineEnd()) : (t.point(y[1][0], y[1][1]), t.lineEnd(), t.lineStart(), t.point(y[0][0], y[0][1])))
                            }!v || n && qe(n, d) || t.point(d[0], d[1]), n = d, u = v, r = g
                        },
                        lineEnd: function() {
                            u && t.lineEnd(), n = null
                        },
                        clean: function() {
                            return f | (a && u) << 1
                        }
                    }
                }

                function i(t, n, e) {
                    var r = g(t),
                        i = g(n),
                        o = [1, 0, 0],
                        a = _(r, i),
                        c = y(a, a),
                        s = a[0],
                        f = c - s * s;
                    if (!f) return !e && t;
                    var l = u * c / f,
                        h = -u * s / f,
                        p = _(o, a),
                        d = x(o, l),
                        b = x(a, h);
                    m(d, b);
                    var w = p,
                        M = y(d, w),
                        S = y(w, w),
                        E = M * M - S * (y(d, d) - 1);
                    if (!(E < 0)) {
                        var k = ae(E),
                            N = x(w, (-M - k) / S);
                        if (m(N, d), N = v(N), !e) return N;
                        var A, T = t[0],
                            z = n[0],
                            C = t[1],
                            O = n[1];
                        z < T && (A = T, T = z, z = A);
                        var I = z - T,
                            L = $n(I - Vn) < Hn,
                            P = L || I < Hn;
                        if (!L && O < C && (A = C, C = O, O = A), P ? L ? C + O > 0 ^ N[1] < ($n(N[0] - T) < Hn ? C : O) : C <= N[1] && N[1] <= O : I > Vn ^ (T <= N[0] && N[0] <= z)) {
                            var D = x(w, (-M + k) / S);
                            return m(D, d), [N, v(D)]
                        }
                    }
                }

                function o(n, e) {
                    var r = c ? t : Vn - t,
                        i = 0;
                    return n < -r ? i |= 1 : n > r && (i |= 2), e < -r ? i |= 4 : e > r && (i |= 8), i
                }
                var u = te(t),
                    a = 6 * Zn,
                    c = u > 0,
                    s = $n(u) > Hn;
                return Fe(e, r, n, c ? [0, -t] : [-Vn, t - Vn])
            },
            Be = function(t, n, e, r, i, o) {
                var u, a = t[0],
                    c = t[1],
                    s = n[0],
                    f = n[1],
                    l = 0,
                    h = 1,
                    p = s - a,
                    d = f - c;
                if (u = e - a, p || !(u > 0)) {
                    if (u /= p, p < 0) {
                        if (u < l) return;
                        u < h && (h = u)
                    } else if (p > 0) {
                        if (u > h) return;
                        u > l && (l = u)
                    }
                    if (u = i - a, p || !(u < 0)) {
                        if (u /= p, p < 0) {
                            if (u > h) return;
                            u > l && (l = u)
                        } else if (p > 0) {
                            if (u < l) return;
                            u < h && (h = u)
                        }
                        if (u = r - c, d || !(u > 0)) {
                            if (u /= d, d < 0) {
                                if (u < l) return;
                                u < h && (h = u)
                            } else if (d > 0) {
                                if (u > h) return;
                                u > l && (l = u)
                            }
                            if (u = o - c, d || !(u < 0)) {
                                if (u /= d, d < 0) {
                                    if (u > h) return;
                                    u > l && (l = u)
                                } else if (d > 0) {
                                    if (u < l) return;
                                    u < h && (h = u)
                                }
                                return l > 0 && (t[0] = a + l * p, t[1] = c + l * d), h < 1 && (n[0] = a + h * p, n[1] = c + h * d), !0
                            }
                        }
                    }
                }
            },
            Ve = 1e9,
            Xe = -Ve,
            We = function() {
                var t, n, e, r = 0,
                    i = 0,
                    o = 960,
                    u = 500;
                return e = {
                    stream: function(e) {
                        return t && n === e ? t : t = et(r, i, o, u)(n = e)
                    },
                    extent: function(a) {
                        return arguments.length ? (r = +a[0][0], i = +a[0][1], o = +a[1][0], u = +a[1][1], t = n = null, e) : [
                            [r, i],
                            [o, u]
                        ]
                    }
                }
            },
            Ke = fn(),
            Je = {
                sphere: a,
                point: a,
                lineStart: rt,
                lineEnd: a,
                polygonStart: a,
                polygonEnd: a
            },
            Ze = function(t) {
                return Ke.reset(), le(t, Je), +Ke
            },
            $e = [null, null],
            Ge = {
                type: "LineString",
                coordinates: $e
            },
            Qe = function(t, n) {
                return $e[0] = t, $e[1] = n, Ze(Ge)
            },
            tr = {
                Feature: function(t, n) {
                    return at(t.geometry, n)
                },
                FeatureCollection: function(t, n) {
                    for (var e = t.features, r = -1, i = e.length; ++r < i;)
                        if (at(e[r].geometry, n)) return !0;
                    return !1
                }
            },
            nr = {
                Sphere: function() {
                    return !0
                },
                Point: function(t, n) {
                    return ct(t.coordinates, n)
                },
                MultiPoint: function(t, n) {
                    for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
                        if (ct(e[r], n)) return !0;
                    return !1
                },
                LineString: function(t, n) {
                    return st(t.coordinates, n)
                },
                MultiLineString: function(t, n) {
                    for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
                        if (st(e[r], n)) return !0;
                    return !1
                },
                Polygon: function(t, n) {
                    return ft(t.coordinates, n)
                },
                MultiPolygon: function(t, n) {
                    for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
                        if (ft(e[r], n)) return !0;
                    return !1
                },
                GeometryCollection: function(t, n) {
                    for (var e = t.geometries, r = -1, i = e.length; ++r < i;)
                        if (at(e[r], n)) return !0;
                    return !1
                }
            },
            er = function(t, n) {
                return (t && tr.hasOwnProperty(t.type) ? tr[t.type] : at)(t, n)
            },
            rr = function(t, n) {
                var e = t[0] * Zn,
                    r = t[1] * Zn,
                    i = n[0] * Zn,
                    a = n[1] * Zn,
                    c = te(r),
                    s = oe(r),
                    f = te(a),
                    l = oe(a),
                    h = c * te(e),
                    p = c * oe(e),
                    d = f * te(i),
                    v = f * oe(i),
                    g = 2 * o(ae(u(a - r) + c * f * u(i - e))),
                    y = oe(g),
                    _ = g ? function(t) {
                        var n = oe(t *= g) / y,
                            e = oe(g - t) / y,
                            r = e * h + n * d,
                            i = e * p + n * v,
                            o = e * s + n * l;
                        return [Qn(i, r) * Jn, Qn(o, ae(r * r + i * i)) * Jn]
                    } : function() {
                        return [e * Jn, r * Jn]
                    };
                return _.distance = g, _
            },
            ir = function(t) {
                return t
            },
            or = fn(),
            ur = fn(),
            ar = {
                point: a,
                lineStart: a,
                lineEnd: a,
                polygonStart: function() {
                    ar.lineStart = yt, ar.lineEnd = xt
                },
                polygonEnd: function() {
                    ar.lineStart = ar.lineEnd = ar.point = a, or.add($n(ur)), ur.reset()
                },
                result: function() {
                    var t = or / 2;
                    return or.reset(), t
                }
            },
            cr = 1 / 0,
            sr = cr,
            fr = -cr,
            lr = fr,
            hr = {
                point: bt,
                lineStart: a,
                lineEnd: a,
                polygonStart: a,
                polygonEnd: a,
                result: function() {
                    var t = [
                        [cr, sr],
                        [fr, lr]
                    ];
                    return fr = lr = -(sr = cr = 1 / 0), t
                }
            },
            pr = 0,
            dr = 0,
            vr = 0,
            gr = 0,
            yr = 0,
            _r = 0,
            mr = 0,
            xr = 0,
            br = 0,
            wr = {
                point: wt,
                lineStart: Mt,
                lineEnd: kt,
                polygonStart: function() {
                    wr.lineStart = Nt, wr.lineEnd = At
                },
                polygonEnd: function() {
                    wr.point = wt, wr.lineStart = Mt, wr.lineEnd = kt
                },
                result: function() {
                    var t = br ? [mr / br, xr / br] : _r ? [gr / _r, yr / _r] : vr ? [pr / vr, dr / vr] : [NaN, NaN];
                    return pr = dr = vr = gr = yr = _r = mr = xr = br = 0, t
                }
            };
        Ct.prototype = {
            _radius: 4.5,
            pointRadius: function(t) {
                return this._radius = t, this
            },
            polygonStart: function() {
                this._line = 0
            },
            polygonEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._point = 0
            },
            lineEnd: function() {
                0 === this._line && this._context.closePath(), this._point = NaN
            },
            point: function(t, n) {
                switch (this._point) {
                    case 0:
                        this._context.moveTo(t, n), this._point = 1;
                        break;
                    case 1:
                        this._context.lineTo(t, n);
                        break;
                    default:
                        this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, Kn)
                }
            },
            result: a
        };
        var Mr, Sr, Er, kr, Nr, Ar = fn(),
            Tr = {
                point: a,
                lineStart: function() {
                    Tr.point = Ot
                },
                lineEnd: function() {
                    Mr && It(Sr, Er), Tr.point = a
                },
                polygonStart: function() {
                    Mr = !0
                },
                polygonEnd: function() {
                    Mr = null
                },
                result: function() {
                    var t = +Ar;
                    return Ar.reset(), t
                }
            };
        Lt.prototype = {
            _radius: 4.5,
            _circle: Pt(4.5),
            pointRadius: function(t) {
                return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this
            },
            polygonStart: function() {
                this._line = 0
            },
            polygonEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._point = 0
            },
            lineEnd: function() {
                0 === this._line && this._string.push("Z"), this._point = NaN
            },
            point: function(t, n) {
                switch (this._point) {
                    case 0:
                        this._string.push("M", t, ",", n), this._point = 1;
                        break;
                    case 1:
                        this._string.push("L", t, ",", n);
                        break;
                    default:
                        null == this._circle && (this._circle = Pt(this._radius)), this._string.push("M", t, ",", n, this._circle)
                }
            },
            result: function() {
                if (this._string.length) {
                    var t = this._string.join("");
                    return this._string = [], t
                }
                return null
            }
        };
        var zr = function(t, n) {
                function e(t) {
                    return t && ("function" == typeof o && i.pointRadius(+o.apply(this, arguments)), le(t, r(i))), i.result()
                }
                var r, i, o = 4.5;
                return e.area = function(t) {
                    return le(t, r(ar)), ar.result()
                }, e.measure = function(t) {
                    return le(t, r(Tr)), Tr.result()
                }, e.bounds = function(t) {
                    return le(t, r(hr)), hr.result()
                }, e.centroid = function(t) {
                    return le(t, r(wr)), wr.result()
                }, e.projection = function(n) {
                    return arguments.length ? (r = null == n ? (t = null, ir) : (t = n).stream, e) : t
                }, e.context = function(t) {
                    return arguments.length ? (i = null == t ? (n = null, new Lt) : new Ct(n = t), "function" != typeof o && i.pointRadius(o), e) : n
                }, e.pointRadius = function(t) {
                    return arguments.length ? (o = "function" == typeof t ? t : (i.pointRadius(+t), +t), e) : o
                }, e.projection(t).context(n)
            },
            Cr = function(t) {
                return {
                    stream: Dt(t)
                }
            };
        qt.prototype = {
            constructor: qt,
            point: function(t, n) {
                this.stream.point(t, n)
            },
            sphere: function() {
                this.stream.sphere()
            },
            lineStart: function() {
                this.stream.lineStart()
            },
            lineEnd: function() {
                this.stream.lineEnd()
            },
            polygonStart: function() {
                this.stream.polygonStart()
            },
            polygonEnd: function() {
                this.stream.polygonEnd()
            }
        };
        var Or = 16,
            Ir = te(30 * Zn),
            Lr = function(t, n) {
                return +n ? Ft(t, n) : Ut(t)
            },
            Pr = Dt({
                point: function(t, n) {
                    this.stream.point(t * Zn, n * Zn)
                }
            }),
            Dr = function() {
                return Vt(Wt).scale(155.424).center([0, 33.6442])
            },
            qr = function() {
                return Dr().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
            },
            Rr = function() {
                function t(t) {
                    var n = t[0],
                        e = t[1];
                    return a = null, i.point(n, e), a || (o.point(n, e), a) || (u.point(n, e), a)
                }

                function n() {
                    return e = r = null, t
                }
                var e, r, i, o, u, a, c = qr(),
                    s = Dr().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                    f = Dr().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
                    l = {
                        point: function(t, n) {
                            a = [t, n]
                        }
                    };
                return t.invert = function(t) {
                    var n = c.scale(),
                        e = c.translate(),
                        r = (t[0] - e[0]) / n,
                        i = (t[1] - e[1]) / n;
                    return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? s : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? f : c).invert(t)
                }, t.stream = function(t) {
                    return e && r === t ? e : e = Kt([c.stream(r = t), s.stream(t), f.stream(t)])
                }, t.precision = function(t) {
                    return arguments.length ? (c.precision(t), s.precision(t), f.precision(t), n()) : c.precision()
                }, t.scale = function(n) {
                    return arguments.length ? (c.scale(n), s.scale(.35 * n), f.scale(n), t.translate(c.translate())) : c.scale()
                }, t.translate = function(t) {
                    if (!arguments.length) return c.translate();
                    var e = c.scale(),
                        r = +t[0],
                        a = +t[1];
                    return i = c.translate(t).clipExtent([
                        [r - .455 * e, a - .238 * e],
                        [r + .455 * e, a + .238 * e]
                    ]).stream(l), o = s.translate([r - .307 * e, a + .201 * e]).clipExtent([
                        [r - .425 * e + Hn, a + .12 * e + Hn],
                        [r - .214 * e - Hn, a + .234 * e - Hn]
                    ]).stream(l), u = f.translate([r - .205 * e, a + .212 * e]).clipExtent([
                        [r - .214 * e + Hn, a + .166 * e + Hn],
                        [r - .115 * e - Hn, a + .234 * e - Hn]
                    ]).stream(l), n()
                }, t.fitExtent = function(n, e) {
                    return Rt(t, n, e)
                }, t.fitSize = function(n, e) {
                    return jt(t, n, e)
                }, t.scale(1070)
            },
            jr = Jt(function(t) {
                return ae(2 / (1 + t))
            });
        jr.invert = Zt(function(t) {
            return 2 * o(t / 2)
        });
        var Ur = function() {
                return Ht(jr).scale(124.75).clipAngle(179.999)
            },
            Fr = Jt(function(t) {
                return (t = i(t)) && t / oe(t)
            });
        Fr.invert = Zt(function(t) {
            return t
        });
        var Yr = function() {
            return Ht(Fr).scale(79.4188).clipAngle(179.999)
        };
        $t.invert = function(t, n) {
            return [t, 2 * Gn(ee(n)) - Xn]
        };
        var Hr = function() {
                return Gt($t).scale(961 / Kn)
            },
            Br = function() {
                return Vt(tn).scale(109.5).parallels([30, 30])
            };
        nn.invert = nn;
        var Vr = function() {
                return Ht(nn).scale(152.63)
            },
            Xr = function() {
                return Vt(en).scale(131.154).center([0, 13.9389])
            };
        rn.invert = Zt(Gn);
        var Wr = function() {
                return Ht(rn).scale(144.049).clipAngle(60)
            },
            Kr = function() {
                function t() {
                    return i = o = null, u
                }
                var n, e, r, i, o, u, a = 1,
                    c = 0,
                    s = 0,
                    f = 1,
                    l = 1,
                    h = ir,
                    p = null,
                    d = ir;
                return u = {
                    stream: function(t) {
                        return i && o === t ? i : i = h(d(o = t))
                    },
                    postclip: function(i) {
                        return arguments.length ? (d = i, p = n = e = r = null, t()) : d
                    },
                    clipExtent: function(i) {
                        return arguments.length ? (d = null == i ? (p = n = e = r = null, ir) : et(p = +i[0][0], n = +i[0][1], e = +i[1][0], r = +i[1][1]), t()) : null == p ? null : [
                            [p, n],
                            [e, r]
                        ]
                    },
                    scale: function(n) {
                        return arguments.length ? (h = on((a = +n) * f, a * l, c, s), t()) : a
                    },
                    translate: function(n) {
                        return arguments.length ? (h = on(a * f, a * l, c = +n[0], s = +n[1]), t()) : [c, s]
                    },
                    reflectX: function(n) {
                        return arguments.length ? (h = on(a * (f = n ? -1 : 1), a * l, c, s), t()) : f < 0
                    },
                    reflectY: function(n) {
                        return arguments.length ? (h = on(a * f, a * (l = n ? -1 : 1), c, s), t()) : l < 0
                    },
                    fitExtent: function(t, n) {
                        return Rt(u, t, n)
                    },
                    fitSize: function(t, n) {
                        return jt(u, t, n)
                    }
                }
            };
        un.invert = function(t, n) {
            var e, r = n,
                i = 25;
            do {
                var o = r * r,
                    u = o * o;
                r -= e = (r * (1.007226 + o * (.015085 + u * (-.044475 + .028874 * o - .005916 * u))) - n) / (1.007226 + o * (.045255 + u * (-.311325 + .259866 * o - .005916 * 11 * u)))
            } while ($n(e) > Hn && --i > 0);
            return [t / (.8707 + (o = r * r) * (-.131979 + o * (-.013791 + o * o * o * (.003971 - .001529 * o)))), r]
        };
        var Jr = function() {
            return Ht(un).scale(175.295)
        };
        an.invert = Zt(o);
        var Zr = function() {
            return Ht(an).scale(249.5).clipAngle(90 + Hn)
        };
        cn.invert = Zt(function(t) {
            return 2 * Gn(t)
        });
        var $r = function() {
            return Ht(cn).scale(250).clipAngle(142)
        };
        sn.invert = function(t, n) {
            return [-n, 2 * Gn(ee(t)) - Xn]
        };
        var Gr = function() {
            var t = Gt(sn),
                n = t.center,
                e = t.rotate;
            return t.center = function(t) {
                return arguments.length ? n([-t[1], t[0]]) : (t = n(), [t[1], -t[0]])
            }, t.rotate = function(t) {
                return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = e(), [t[0], t[1], t[2] - 90])
            }, e([0, 0, 90]).scale(159.155)
        };
        t.geoArea = ve, t.geoBounds = _e, t.geoCentroid = xe, t.geoCircle = Pe, t.geoClipAntimeridian = Ye, t.geoClipCircle = He, t.geoClipExtent = We, t.geoClipRectangle = et, t.geoContains = er, t.geoDistance = Qe, t.geoGraticule = vt, t.geoGraticule10 = gt, t.geoInterpolate = rr, t.geoLength = Ze, t.geoPath = zr, t.geoAlbers = qr, t.geoAlbersUsa = Rr, t.geoAzimuthalEqualArea = Ur, t.geoAzimuthalEqualAreaRaw = jr, t.geoAzimuthalEquidistant = Yr, t.geoAzimuthalEquidistantRaw = Fr, t.geoConicConformal = Br, t.geoConicConformalRaw = tn, t.geoConicEqualArea = Dr, t.geoConicEqualAreaRaw = Wt, t.geoConicEquidistant = Xr, t.geoConicEquidistantRaw = en, t.geoEquirectangular = Vr, t.geoEquirectangularRaw = nn, t.geoGnomonic = Wr, t.geoGnomonicRaw = rn, t.geoIdentity = Kr, t.geoProjection = Ht, t.geoProjectionMutator = Bt, t.geoMercator = Hr, t.geoMercatorRaw = $t, t.geoNaturalEarth1 = Jr, t.geoNaturalEarth1Raw = un, t.geoOrthographic = Zr, t.geoOrthographicRaw = an, t.geoStereographic = $r, t.geoStereographicRaw = cn, t.geoTransverseMercator = Gr, t.geoTransverseMercatorRaw = sn, t.geoRotation = Le, t.geoStream = le, t.geoTransform = Cr, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, e) {
        e(n)
    }(this, function(t) {
        "use strict";

        function n(t, n) {
            return t.parent === n.parent ? 1 : 2
        }

        function e(t) {
            return t.reduce(r, 0) / t.length
        }

        function r(t, n) {
            return t + n.x
        }

        function i(t) {
            return 1 + t.reduce(o, 0)
        }

        function o(t, n) {
            return Math.max(t, n.y)
        }

        function u(t) {
            for (var n; n = t.children;) t = n[0];
            return t
        }

        function a(t) {
            for (var n; n = t.children;) t = n[n.length - 1];
            return t
        }

        function c(t) {
            var n = 0,
                e = t.children,
                r = e && e.length;
            if (r)
                for (; --r >= 0;) n += e[r].value;
            else n = 1;
            t.value = n
        }

        function s(t, n) {
            if (t === n) return t;
            var e = t.ancestors(),
                r = n.ancestors(),
                i = null;
            for (t = e.pop(), n = r.pop(); t === n;) i = t, t = e.pop(), n = r.pop();
            return i
        }

        function f(t, n) {
            var e, r, i, o, u, a = new v(t),
                c = +t.value && (a.value = t.value),
                s = [a];
            for (null == n && (n = h); e = s.pop();)
                if (c && (e.value = +e.data.value), (i = n(e.data)) && (u = i.length))
                    for (e.children = new Array(u), o = u - 1; o >= 0; --o) s.push(r = e.children[o] = new v(i[o])), r.parent = e, r.depth = e.depth + 1;
            return a.eachBefore(d)
        }

        function l() {
            return f(this).eachBefore(p)
        }

        function h(t) {
            return t.children
        }

        function p(t) {
            t.data = t.data.data
        }

        function d(t) {
            var n = 0;
            do t.height = n; while ((t = t.parent) && t.height < ++n)
        }

        function v(t) {
            this.data = t, this.depth = this.height = 0, this.parent = null
        }

        function g(t) {
            for (var n, e, r = t.length; r;) e = Math.random() * r-- | 0, n = t[r], t[r] = t[e], t[e] = n;
            return t
        }

        function y(t, n) {
            var e, r;
            if (x(n, t)) return [n];
            for (e = 0; e < t.length; ++e)
                if (_(n, t[e]) && x(M(t[e], n), t)) return [t[e], n];
            for (e = 0; e < t.length - 1; ++e)
                for (r = e + 1; r < t.length; ++r)
                    if (_(M(t[e], t[r]), n) && _(M(t[e], n), t[r]) && _(M(t[r], n), t[e]) && x(S(t[e], t[r], n), t)) return [t[e], t[r], n];
            throw new Error
        }

        function _(t, n) {
            var e = t.r - n.r,
                r = n.x - t.x,
                i = n.y - t.y;
            return e < 0 || e * e < r * r + i * i
        }

        function m(t, n) {
            var e = t.r - n.r + 1e-6,
                r = n.x - t.x,
                i = n.y - t.y;
            return e > 0 && e * e > r * r + i * i
        }

        function x(t, n) {
            for (var e = 0; e < n.length; ++e)
                if (!m(t, n[e])) return !1;
            return !0
        }

        function b(t) {
            switch (t.length) {
                case 1:
                    return w(t[0]);
                case 2:
                    return M(t[0], t[1]);
                case 3:
                    return S(t[0], t[1], t[2])
            }
        }

        function w(t) {
            return {
                x: t.x,
                y: t.y,
                r: t.r
            }
        }

        function M(t, n) {
            var e = t.x,
                r = t.y,
                i = t.r,
                o = n.x,
                u = n.y,
                a = n.r,
                c = o - e,
                s = u - r,
                f = a - i,
                l = Math.sqrt(c * c + s * s);
            return {
                x: (e + o + c / l * f) / 2,
                y: (r + u + s / l * f) / 2,
                r: (l + i + a) / 2
            }
        }

        function S(t, n, e) {
            var r = t.x,
                i = t.y,
                o = t.r,
                u = n.x,
                a = n.y,
                c = n.r,
                s = e.x,
                f = e.y,
                l = e.r,
                h = r - u,
                p = r - s,
                d = i - a,
                v = i - f,
                g = c - o,
                y = l - o,
                _ = r * r + i * i - o * o,
                m = _ - u * u - a * a + c * c,
                x = _ - s * s - f * f + l * l,
                b = p * d - h * v,
                w = (d * x - v * m) / (2 * b) - r,
                M = (v * g - d * y) / b,
                S = (p * m - h * x) / (2 * b) - i,
                E = (h * y - p * g) / b,
                k = M * M + E * E - 1,
                N = 2 * (o + w * M + S * E),
                A = w * w + S * S - o * o,
                T = -(k ? (N + Math.sqrt(N * N - 4 * k * A)) / (2 * k) : A / N);
            return {
                x: r + w + M * T,
                y: i + S + E * T,
                r: T
            }
        }

        function E(t, n, e) {
            var r = t.x,
                i = t.y,
                o = n.r + e.r,
                u = t.r + e.r,
                a = n.x - r,
                c = n.y - i,
                s = a * a + c * c;
            if (s) {
                var f = .5 + ((u *= u) - (o *= o)) / (2 * s),
                    l = Math.sqrt(Math.max(0, 2 * o * (u + s) - (u -= s) * u - o * o)) / (2 * s);
                e.x = r + f * a + l * c, e.y = i + f * c - l * a
            } else e.x = r + u, e.y = i
        }

        function k(t, n) {
            var e = n.x - t.x,
                r = n.y - t.y,
                i = t.r + n.r;
            return i * i - 1e-6 > e * e + r * r
        }

        function N(t) {
            var n = t._,
                e = t.next._,
                r = n.r + e.r,
                i = (n.x * e.r + e.x * n.r) / r,
                o = (n.y * e.r + e.y * n.r) / r;
            return i * i + o * o
        }

        function A(t) {
            this._ = t, this.next = null, this.previous = null
        }

        function T(t) {
            if (!(i = t.length)) return 0;
            var n, e, r, i, o, u, a, c, s, f, l;
            if (n = t[0], n.x = 0, n.y = 0, !(i > 1)) return n.r;
            if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(i > 2)) return n.r + e.r;
            E(e, n, r = t[2]), n = new A(n), e = new A(e), r = new A(r), n.next = r.previous = e, e.next = n.previous = r, r.next = e.previous = n;
            t: for (a = 3; a < i; ++a) {
                E(n._, e._, r = t[a]), r = new A(r), c = e.next, s = n.previous, f = e._.r, l = n._.r;
                do
                    if (f <= l) {
                        if (k(c._, r._)) {
                            e = c, n.next = e, e.previous = n, --a;
                            continue t
                        }
                        f += c._.r, c = c.next
                    } else {
                        if (k(s._, r._)) {
                            n = s, n.next = e, e.previous = n, --a;
                            continue t
                        }
                        l += s._.r, s = s.previous
                    }
                while (c !== s.next);
                for (r.previous = n, r.next = e, n.next = e.previous = e = r, o = N(n);
                    (r = r.next) !== e;)(u = N(r)) < o && (n = r, o = u);
                e = n.next
            }
            for (n = [e._], r = e;
                (r = r.next) !== e;) n.push(r._);
            for (r = at(n), a = 0; a < i; ++a) n = t[a], n.x -= r.x, n.y -= r.y;
            return r.r
        }

        function z(t) {
            return null == t ? null : C(t)
        }

        function C(t) {
            if ("function" != typeof t) throw new Error;
            return t
        }

        function O() {
            return 0
        }

        function I(t) {
            return Math.sqrt(t.value)
        }

        function L(t) {
            return function(n) {
                n.children || (n.r = Math.max(0, +t(n) || 0))
            }
        }

        function P(t, n) {
            return function(e) {
                if (r = e.children) {
                    var r, i, o, u = r.length,
                        a = t(e) * n || 0;
                    if (a)
                        for (i = 0; i < u; ++i) r[i].r += a;
                    if (o = T(r), a)
                        for (i = 0; i < u; ++i) r[i].r -= a;
                    e.r = o + a
                }
            }
        }

        function D(t) {
            return function(n) {
                var e = n.parent;
                n.r *= t, e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y)
            }
        }

        function q(t) {
            return t.id
        }

        function R(t) {
            return t.parentId
        }

        function j(t, n) {
            return t.parent === n.parent ? 1 : 2
        }

        function U(t) {
            var n = t.children;
            return n ? n[0] : t.t
        }

        function F(t) {
            var n = t.children;
            return n ? n[n.length - 1] : t.t
        }

        function Y(t, n, e) {
            var r = e / (n.i - t.i);
            n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e
        }

        function H(t) {
            for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;) n = i[o], n.z += e, n.m += e, e += n.s + (r += n.c)
        }

        function B(t, n, e) {
            return t.a.parent === n.parent ? t.a : e
        }

        function V(t, n) {
            this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n
        }

        function X(t) {
            for (var n, e, r, i, o, u = new V(t, 0), a = [u]; n = a.pop();)
                if (r = n._.children)
                    for (n.children = new Array(o = r.length), i = o - 1; i >= 0; --i) a.push(e = n.children[i] = new V(r[i], i)), e.parent = n;
            return (u.parent = new V(null, 0)).children = [u], u
        }

        function W(t, n, e, r, i, o) {
            for (var u, a, c, s, f, l, h, p, d, v, g, y = [], _ = n.children, m = 0, x = 0, b = _.length, w = n.value; m < b;) {
                c = i - e, s = o - r;
                do f = _[x++].value; while (!f && x < b);
                for (l = h = f, v = Math.max(s / c, c / s) / (w * t), g = f * f * v, d = Math.max(h / g, g / l); x < b; ++x) {
                    if (f += a = _[x].value, a < l && (l = a), a > h && (h = a), g = f * f * v, p = Math.max(h / g, g / l), p > d) {
                        f -= a;
                        break
                    }
                    d = p
                }
                y.push(u = {
                    value: f,
                    dice: c < s,
                    children: _.slice(m, x)
                }), u.dice ? ht(u, e, r, i, w ? r += s * f / w : o) : mt(u, e, r, w ? e += c * f / w : i, o), w -= f, m = x
            }
            return y
        }
        var K = function() {
                function t(t) {
                    var n, f = 0;
                    t.eachAfter(function(t) {
                        var o = t.children;
                        o ? (t.x = e(o), t.y = i(o)) : (t.x = n ? f += r(t, n) : 0, t.y = 0, n = t)
                    });
                    var l = u(t),
                        h = a(t),
                        p = l.x - r(l, h) / 2,
                        d = h.x + r(h, l) / 2;
                    return t.eachAfter(s ? function(n) {
                        n.x = (n.x - t.x) * o, n.y = (t.y - n.y) * c
                    } : function(n) {
                        n.x = (n.x - p) / (d - p) * o, n.y = (1 - (t.y ? n.y / t.y : 1)) * c
                    })
                }
                var r = n,
                    o = 1,
                    c = 1,
                    s = !1;
                return t.separation = function(n) {
                    return arguments.length ? (r = n, t) : r
                }, t.size = function(n) {
                    return arguments.length ? (s = !1, o = +n[0], c = +n[1], t) : s ? null : [o, c]
                }, t.nodeSize = function(n) {
                    return arguments.length ? (s = !0, o = +n[0], c = +n[1], t) : s ? [o, c] : null
                }, t
            },
            J = function() {
                return this.eachAfter(c)
            },
            Z = function(t) {
                var n, e, r, i, o = this,
                    u = [o];
                do
                    for (n = u.reverse(), u = []; o = n.pop();)
                        if (t(o), e = o.children)
                            for (r = 0, i = e.length; r < i; ++r) u.push(e[r]); while (u.length);
                return this
            },
            $ = function(t) {
                for (var n, e, r = this, i = [r]; r = i.pop();)
                    if (t(r), n = r.children)
                        for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
                return this
            },
            G = function(t) {
                for (var n, e, r, i = this, o = [i], u = []; i = o.pop();)
                    if (u.push(i), n = i.children)
                        for (e = 0, r = n.length; e < r; ++e) o.push(n[e]);
                for (; i = u.pop();) t(i);
                return this
            },
            Q = function(t) {
                return this.eachAfter(function(n) {
                    for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) e += r[i].value;
                    n.value = e
                })
            },
            tt = function(t) {
                return this.eachBefore(function(n) {
                    n.children && n.children.sort(t)
                })
            },
            nt = function(t) {
                for (var n = this, e = s(n, t), r = [n]; n !== e;) n = n.parent, r.push(n);
                for (var i = r.length; t !== e;) r.splice(i, 0, t), t = t.parent;
                return r
            },
            et = function() {
                for (var t = this, n = [t]; t = t.parent;) n.push(t);
                return n
            },
            rt = function() {
                var t = [];
                return this.each(function(n) {
                    t.push(n)
                }), t
            },
            it = function() {
                var t = [];
                return this.eachBefore(function(n) {
                    n.children || t.push(n)
                }), t
            },
            ot = function() {
                var t = this,
                    n = [];
                return t.each(function(e) {
                    e !== t && n.push({
                        source: e.parent,
                        target: e
                    })
                }), n
            };
        v.prototype = f.prototype = {
            constructor: v,
            count: J,
            each: Z,
            eachAfter: G,
            eachBefore: $,
            sum: Q,
            sort: tt,
            path: nt,
            ancestors: et,
            descendants: rt,
            leaves: it,
            links: ot,
            copy: l
        };
        var ut = Array.prototype.slice,
            at = function(t) {
                for (var n, e, r = 0, i = (t = g(ut.call(t))).length, o = []; r < i;) n = t[r], e && m(e, n) ? ++r : (e = b(o = y(o, n)), r = 0);
                return e
            },
            ct = function(t) {
                return T(t), t
            },
            st = function(t) {
                return function() {
                    return t
                }
            },
            ft = function() {
                function t(t) {
                    return t.x = e / 2, t.y = r / 2, n ? t.eachBefore(L(n)).eachAfter(P(i, .5)).eachBefore(D(1)) : t.eachBefore(L(I)).eachAfter(P(O, 1)).eachAfter(P(i, t.r / Math.min(e, r))).eachBefore(D(Math.min(e, r) / (2 * t.r))), t
                }
                var n = null,
                    e = 1,
                    r = 1,
                    i = O;
                return t.radius = function(e) {
                    return arguments.length ? (n = z(e), t) : n
                }, t.size = function(n) {
                    return arguments.length ? (e = +n[0], r = +n[1], t) : [e, r]
                }, t.padding = function(n) {
                    return arguments.length ? (i = "function" == typeof n ? n : st(+n), t) : i
                }, t
            },
            lt = function(t) {
                t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1)
            },
            ht = function(t, n, e, r, i) {
                for (var o, u = t.children, a = -1, c = u.length, s = t.value && (r - n) / t.value; ++a < c;) o = u[a], o.y0 = e, o.y1 = i, o.x0 = n, o.x1 = n += o.value * s
            },
            pt = function() {
                function t(t) {
                    var u = t.height + 1;
                    return t.x0 = t.y0 = i, t.x1 = e, t.y1 = r / u, t.eachBefore(n(r, u)), o && t.eachBefore(lt), t
                }

                function n(t, n) {
                    return function(e) {
                        e.children && ht(e, e.x0, t * (e.depth + 1) / n, e.x1, t * (e.depth + 2) / n);
                        var r = e.x0,
                            o = e.y0,
                            u = e.x1 - i,
                            a = e.y1 - i;
                        u < r && (r = u = (r + u) / 2), a < o && (o = a = (o + a) / 2), e.x0 = r, e.y0 = o, e.x1 = u, e.y1 = a
                    }
                }
                var e = 1,
                    r = 1,
                    i = 0,
                    o = !1;
                return t.round = function(n) {
                    return arguments.length ? (o = !!n, t) : o
                }, t.size = function(n) {
                    return arguments.length ? (e = +n[0], r = +n[1], t) : [e, r]
                }, t.padding = function(n) {
                    return arguments.length ? (i = +n, t) : i
                }, t
            },
            dt = "$",
            vt = {
                depth: -1
            },
            gt = {},
            yt = function() {
                function t(t) {
                    var r, i, o, u, a, c, s, f = t.length,
                        l = new Array(f),
                        h = {};
                    for (i = 0; i < f; ++i) r = t[i], a = l[i] = new v(r), null != (c = n(r, i, t)) && (c += "") && (s = dt + (a.id = c), h[s] = s in h ? gt : a);
                    for (i = 0; i < f; ++i)
                        if (a = l[i], c = e(t[i], i, t), null != c && (c += "")) {
                            if (u = h[dt + c], !u) throw new Error("missing: " + c);
                            if (u === gt) throw new Error("ambiguous: " + c);
                            u.children ? u.children.push(a) : u.children = [a], a.parent = u
                        } else {
                            if (o) throw new Error("multiple roots");
                            o = a
                        }
                    if (!o) throw new Error("no root");
                    if (o.parent = vt, o.eachBefore(function(t) {
                            t.depth = t.parent.depth + 1, --f
                        }).eachBefore(d), o.parent = null, f > 0) throw new Error("cycle");
                    return o
                }
                var n = q,
                    e = R;
                return t.id = function(e) {
                    return arguments.length ? (n = C(e), t) : n
                }, t.parentId = function(n) {
                    return arguments.length ? (e = C(n), t) : e
                }, t
            };
        V.prototype = Object.create(v.prototype);
        var _t = function() {
                function t(t) {
                    var r = X(t);
                    if (r.eachAfter(n), r.parent.m = -r.z, r.eachBefore(e), c) t.eachBefore(i);
                    else {
                        var s = t,
                            f = t,
                            l = t;
                        t.eachBefore(function(t) {
                            t.x < s.x && (s = t), t.x > f.x && (f = t), t.depth > l.depth && (l = t)
                        });
                        var h = s === f ? 1 : o(s, f) / 2,
                            p = h - s.x,
                            d = u / (f.x + h + p),
                            v = a / (l.depth || 1);
                        t.eachBefore(function(t) {
                            t.x = (t.x + p) * d, t.y = t.depth * v
                        })
                    }
                    return t
                }

                function n(t) {
                    var n = t.children,
                        e = t.parent.children,
                        i = t.i ? e[t.i - 1] : null;
                    if (n) {
                        H(t);
                        var u = (n[0].z + n[n.length - 1].z) / 2;
                        i ? (t.z = i.z + o(t._, i._), t.m = t.z - u) : t.z = u
                    } else i && (t.z = i.z + o(t._, i._));
                    t.parent.A = r(t, i, t.parent.A || e[0])
                }

                function e(t) {
                    t._.x = t.z + t.parent.m, t.m += t.parent.m
                }

                function r(t, n, e) {
                    if (n) {
                        for (var r, i = t, u = t, a = n, c = i.parent.children[0], s = i.m, f = u.m, l = a.m, h = c.m; a = F(a), i = U(i), a && i;) c = U(c), u = F(u), u.a = t, r = a.z + l - i.z - s + o(a._, i._), r > 0 && (Y(B(a, t, e), t, r), s += r, f += r), l += a.m, s += i.m, h += c.m, f += u.m;
                        a && !F(u) && (u.t = a, u.m += l - f), i && !U(c) && (c.t = i, c.m += s - h, e = t)
                    }
                    return e
                }

                function i(t) {
                    t.x *= u, t.y = t.depth * a
                }
                var o = j,
                    u = 1,
                    a = 1,
                    c = null;
                return t.separation = function(n) {
                    return arguments.length ? (o = n, t) : o
                }, t.size = function(n) {
                    return arguments.length ? (c = !1, u = +n[0], a = +n[1], t) : c ? null : [u, a]
                }, t.nodeSize = function(n) {
                    return arguments.length ? (c = !0, u = +n[0], a = +n[1], t) : c ? [u, a] : null
                }, t
            },
            mt = function(t, n, e, r, i) {
                for (var o, u = t.children, a = -1, c = u.length, s = t.value && (i - e) / t.value; ++a < c;) o = u[a], o.x0 = n, o.x1 = r, o.y0 = e, o.y1 = e += o.value * s
            },
            xt = (1 + Math.sqrt(5)) / 2,
            bt = function t(n) {
                function e(t, e, r, i, o) {
                    W(n, t, e, r, i, o)
                }
                return e.ratio = function(n) {
                    return t((n = +n) > 1 ? n : 1)
                }, e
            }(xt),
            wt = function() {
                function t(t) {
                    return t.x0 = t.y0 = 0, t.x1 = i, t.y1 = o, t.eachBefore(n), u = [0], r && t.eachBefore(lt), t
                }

                function n(t) {
                    var n = u[t.depth],
                        r = t.x0 + n,
                        i = t.y0 + n,
                        o = t.x1 - n,
                        h = t.y1 - n;
                    o < r && (r = o = (r + o) / 2), h < i && (i = h = (i + h) / 2), t.x0 = r, t.y0 = i, t.x1 = o, t.y1 = h, t.children && (n = u[t.depth + 1] = a(t) / 2, r += l(t) - n, i += c(t) - n, o -= s(t) - n, h -= f(t) - n, o < r && (r = o = (r + o) / 2), h < i && (i = h = (i + h) / 2), e(t, r, i, o, h))
                }
                var e = bt,
                    r = !1,
                    i = 1,
                    o = 1,
                    u = [0],
                    a = O,
                    c = O,
                    s = O,
                    f = O,
                    l = O;
                return t.round = function(n) {
                    return arguments.length ? (r = !!n, t) : r
                }, t.size = function(n) {
                    return arguments.length ? (i = +n[0], o = +n[1], t) : [i, o]
                }, t.tile = function(n) {
                    return arguments.length ? (e = C(n), t) : e
                }, t.padding = function(n) {
                    return arguments.length ? t.paddingInner(n).paddingOuter(n) : t.paddingInner()
                }, t.paddingInner = function(n) {
                    return arguments.length ? (a = "function" == typeof n ? n : st(+n), t) : a
                }, t.paddingOuter = function(n) {
                    return arguments.length ? t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n) : t.paddingTop()
                }, t.paddingTop = function(n) {
                    return arguments.length ? (c = "function" == typeof n ? n : st(+n), t) : c
                }, t.paddingRight = function(n) {
                    return arguments.length ? (s = "function" == typeof n ? n : st(+n), t) : s
                }, t.paddingBottom = function(n) {
                    return arguments.length ? (f = "function" == typeof n ? n : st(+n), t) : f
                }, t.paddingLeft = function(n) {
                    return arguments.length ? (l = "function" == typeof n ? n : st(+n), t) : l
                }, t
            },
            Mt = function(t, n, e, r, i) {
                function o(t, n, e, r, i, u, a) {
                    if (t >= n - 1) {
                        var s = c[t];
                        return s.x0 = r, s.y0 = i, s.x1 = u, s.y1 = a, void 0
                    }
                    for (var l = f[t], h = e / 2 + l, p = t + 1, d = n - 1; p < d;) {
                        var v = p + d >>> 1;
                        f[v] < h ? p = v + 1 : d = v
                    }
                    h - f[p - 1] < f[p] - h && t + 1 < p && --p;
                    var g = f[p] - l,
                        y = e - g;
                    if (u - r > a - i) {
                        var _ = (r * y + u * g) / e;
                        o(t, p, g, r, i, _, a), o(p, n, y, _, i, u, a)
                    } else {
                        var m = (i * y + a * g) / e;
                        o(t, p, g, r, i, u, m), o(p, n, y, r, m, u, a)
                    }
                }
                var u, a, c = t.children,
                    s = c.length,
                    f = new Array(s + 1);
                for (f[0] = a = u = 0; u < s; ++u) f[u + 1] = a += c[u].value;
                o(0, s, t.value, n, e, r, i)
            },
            St = function(t, n, e, r, i) {
                (1 & t.depth ? mt : ht)(t, n, e, r, i)
            },
            Et = function t(n) {
                function e(t, e, r, i, o) {
                    if ((u = t._squarify) && u.ratio === n)
                        for (var u, a, c, s, f, l = -1, h = u.length, p = t.value; ++l < h;) {
                            for (a = u[l], c = a.children, s = a.value = 0, f = c.length; s < f; ++s) a.value += c[s].value;
                            a.dice ? ht(a, e, r, i, r += (o - r) * a.value / p) : mt(a, e, r, e += (i - e) * a.value / p, o), p -= a.value
                        } else t._squarify = u = W(n, t, e, r, i, o), u.ratio = n
                }
                return e.ratio = function(n) {
                    return t((n = +n) > 1 ? n : 1)
                }, e
            }(xt);
        t.cluster = K, t.hierarchy = f, t.pack = ft, t.packSiblings = ct, t.packEnclose = at, t.partition = pt, t.stratify = yt, t.tree = _t, t.treemap = wt, t.treemapBinary = Mt, t.treemapDice = ht, t.treemapSlice = mt, t.treemapSliceDice = St, t.treemapSquarify = bt, t.treemapResquarify = Et, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, e) {
        e(n)
    }(this, function(t) {
        "use strict";

        function n(t, n) {
            return t[0] - n[0] || t[1] - n[1]
        }

        function e(t) {
            for (var n = t.length, e = [0, 1], r = 2, i = 2; i < n; ++i) {
                for (; r > 1 && o(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0;) --r;
                e[r++] = i
            }
            return e.slice(0, r)
        }
        var r = function(t) {
                for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r;) n = i, i = t[e], o += n[1] * i[0] - n[0] * i[1];
                return o / 2
            },
            i = function(t) {
                for (var n, e, r = -1, i = t.length, o = 0, u = 0, a = t[i - 1], c = 0; ++r < i;) n = a, a = t[r], c += e = n[0] * a[1] - a[0] * n[1], o += (n[0] + a[0]) * e, u += (n[1] + a[1]) * e;
                return c *= 3, [o / c, u / c]
            },
            o = function(t, n, e) {
                return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0])
            },
            u = function(t) {
                if ((i = t.length) < 3) return null;
                var r, i, o = new Array(i),
                    u = new Array(i);
                for (r = 0; r < i; ++r) o[r] = [+t[r][0], +t[r][1], r];
                for (o.sort(n), r = 0; r < i; ++r) u[r] = [o[r][0], -o[r][1]];
                var a = e(o),
                    c = e(u),
                    s = c[0] === a[0],
                    f = c[c.length - 1] === a[a.length - 1],
                    l = [];
                for (r = a.length - 1; r >= 0; --r) l.push(t[o[a[r]][2]]);
                for (r = +s; r < c.length - f; ++r) l.push(t[o[c[r]][2]]);
                return l
            },
            a = function(t, n) {
                for (var e, r, i = t.length, o = t[i - 1], u = n[0], a = n[1], c = o[0], s = o[1], f = !1, l = 0; l < i; ++l) o = t[l], e = o[0], r = o[1], r > a != s > a && u < (c - e) * (a - r) / (s - r) + e && (f = !f), c = e, s = r;
                return f
            },
            c = function(t) {
                for (var n, e, r = -1, i = t.length, o = t[i - 1], u = o[0], a = o[1], c = 0; ++r < i;) n = u, e = a, o = t[r], u = o[0], a = o[1], n -= u, e -= a, c += Math.sqrt(n * n + e * e);
                return c
            };
        t.polygonArea = r, t.polygonCentroid = i, t.polygonHull = u, t.polygonContains = a, t.polygonLength = c, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, e) {
        e(n)
    }(this, function(t) {
        "use strict";

        function n(t) {
            this._size = t, this._call = this._error = null, this._tasks = [], this._data = [], this._waiting = this._active = this._ended = this._start = 0
        }

        function e(t) {
            if (!t._start) try {
                r(t)
            } catch (n) {
                if (t._tasks[t._ended + t._active - 1]) o(t, n);
                else if (!t._data) throw n
            }
        }

        function r(t) {
            for (; t._start = t._waiting && t._active < t._size;) {
                var n = t._ended + t._active,
                    e = t._tasks[n],
                    r = e.length - 1,
                    o = e[r];
                e[r] = i(t, n), --t._waiting, ++t._active, e = o.apply(null, e), t._tasks[n] && (t._tasks[n] = e || s)
            }
        }

        function i(t, n) {
            return function(r, i) {
                t._tasks[n] && (--t._active, ++t._ended, t._tasks[n] = null, null == t._error && (null != r ? o(t, r) : (t._data[n] = i, t._waiting ? e(t) : u(t))))
            }
        }

        function o(t, n) {
            var e, r = t._tasks.length;
            for (t._error = n, t._data = void 0, t._waiting = NaN; --r >= 0;)
                if ((e = t._tasks[r]) && (t._tasks[r] = null, e.abort)) try {
                    e.abort()
                } catch (t) {}
            t._active = NaN, u(t)
        }

        function u(t) {
            if (!t._active && t._call) {
                var n = t._data;
                t._data = void 0, t._call(t._error, n)
            }
        }

        function a(t) {
            if (null == t) t = 1 / 0;
            else if (!((t = +t) >= 1)) throw new Error("invalid concurrency");
            return new n(t)
        }
        var c = [].slice,
            s = {};
        n.prototype = a.prototype = {
            constructor: n,
            defer: function(t) {
                if ("function" != typeof t) throw new Error("invalid callback");
                if (this._call) throw new Error("defer after await");
                if (null != this._error) return this;
                var n = c.call(arguments, 1);
                return n.push(t), ++this._waiting, this._tasks.push(n), e(this), this
            },
            abort: function() {
                return null == this._error && o(this, new Error("abort")), this
            },
            await: function(t) {
                if ("function" != typeof t) throw new Error("invalid callback");
                if (this._call) throw new Error("multiple await");
                return this._call = function(n, e) {
                    t.apply(null, [n].concat(e))
                }, u(this), this
            },
            awaitAll: function(t) {
                if ("function" != typeof t) throw new Error("invalid callback");
                if (this._call) throw new Error("multiple await");
                return this._call = t, u(this), this
            }
        }, t.queue = a, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, e) {
        e(n)
    }(this, function(t) {
        "use strict";
        var n = function() {
                return Math.random()
            },
            e = function t(n) {
                function e(t, e) {
                    return t = null == t ? 0 : +t, e = null == e ? 1 : +e, 1 === arguments.length ? (e = t, t = 0) : e -= t,
                        function() {
                            return n() * e + t
                        }
                }
                return e.source = t, e
            }(n),
            r = function t(n) {
                function e(t, e) {
                    var r, i;
                    return t = null == t ? 0 : +t, e = null == e ? 1 : +e,
                        function() {
                            var o;
                            if (null != r) o = r, r = null;
                            else
                                do r = 2 * n() - 1, o = 2 * n() - 1, i = r * r + o * o; while (!i || i > 1);
                            return t + e * o * Math.sqrt(-2 * Math.log(i) / i)
                        }
                }
                return e.source = t, e
            }(n),
            i = function t(n) {
                function e() {
                    var t = r.source(n).apply(this, arguments);
                    return function() {
                        return Math.exp(t())
                    }
                }
                return e.source = t, e
            }(n),
            o = function t(n) {
                function e(t) {
                    return function() {
                        for (var e = 0, r = 0; r < t; ++r) e += n();
                        return e
                    }
                }
                return e.source = t, e
            }(n),
            u = function t(n) {
                function e(t) {
                    var e = o.source(n)(t);
                    return function() {
                        return e() / t
                    }
                }
                return e.source = t, e
            }(n),
            a = function t(n) {
                function e(t) {
                    return function() {
                        return -Math.log(1 - n()) / t
                    }
                }
                return e.source = t, e
            }(n);
        t.randomUniform = e, t.randomNormal = r, t.randomLogNormal = i, t.randomBates = u, t.randomIrwinHall = o, t.randomExponential = a, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    "use strict";

    function r(t) {
        return function(n, e) {
            t(null == n ? e : null)
        }
    }

    function i(t) {
        var n = t.responseType;
        return n && "text" !== n ? t.response : t.responseText
    }

    function o(t, n) {
        return function(e) {
            return t(e.responseText, n)
        }
    }
    var u = e(27).XMLHttpRequest;
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var a = e(16),
        c = e(6),
        s = e(17),
        f = function(t, n) {
            function e(t) {
                var n, e = d.status;
                if (!e && i(d) || e >= 200 && e < 300 || 304 === e) {
                    if (f) try {
                        n = f.call(o, d)
                    } catch (t) {
                        return void h.call("error", o, t)
                    } else n = d;
                    h.call("load", o, n)
                } else h.call("error", o, t)
            }
            var o, s, f, l, h = c.dispatch("beforesend", "progress", "load", "error"),
                p = a.map(),
                d = new u,
                v = null,
                g = null,
                y = 0;
            if ("undefined" == typeof XDomainRequest || "withCredentials" in d || !/^(http(s)?:)?\/\//.test(t) || (d = new XDomainRequest), "onload" in d ? d.onload = d.onerror = d.ontimeout = e : d.onreadystatechange = function(t) {
                    d.readyState > 3 && e(t)
                }, d.onprogress = function(t) {
                    h.call("progress", o, t)
                }, o = {
                    header: function(t, n) {
                        return t = (t + "").toLowerCase(), arguments.length < 2 ? p.get(t) : (null == n ? p.remove(t) : p.set(t, n + ""), o)
                    },
                    mimeType: function(t) {
                        return arguments.length ? (s = null == t ? null : t + "", o) : s
                    },
                    responseType: function(t) {
                        return arguments.length ? (l = t, o) : l
                    },
                    timeout: function(t) {
                        return arguments.length ? (y = +t, o) : y
                    },
                    user: function(t) {
                        return arguments.length < 1 ? v : (v = null == t ? null : t + "", o)
                    },
                    password: function(t) {
                        return arguments.length < 1 ? g : (g = null == t ? null : t + "", o)
                    },
                    response: function(t) {
                        return f = t, o
                    },
                    get: function(t, n) {
                        return o.send("GET", t, n)
                    },
                    post: function(t, n) {
                        return o.send("POST", t, n)
                    },
                    send: function(n, e, i) {
                        return d.open(n, t, !0, v, g), null == s || p.has("accept") || p.set("accept", s + ",*/*"), d.setRequestHeader && p.each(function(t, n) {
                            d.setRequestHeader(n, t)
                        }), null != s && d.overrideMimeType && d.overrideMimeType(s), null != l && (d.responseType = l), y > 0 && (d.timeout = y), null == i && "function" == typeof e && (i = e, e = null), null != i && 1 === i.length && (i = r(i)), null != i && o.on("error", i).on("load", function(t) {
                            i(null, t)
                        }), h.call("beforesend", o, d), d.send(null == e ? null : e), o
                    },
                    abort: function() {
                        return d.abort(), o
                    },
                    on: function() {
                        var t = h.on.apply(h, arguments);
                        return t === h ? o : t
                    }
                }, null != n) {
                if ("function" != typeof n) throw new Error("invalid callback: " + n);
                return o.get(n)
            }
            return o
        },
        l = function(t, n) {
            return function(e, r) {
                var i = f(e).mimeType(t).response(n);
                if (null != r) {
                    if ("function" != typeof r) throw new Error("invalid callback: " + r);
                    return i.get(r)
                }
                return i
            }
        },
        h = l("text/html", function(t) {
            return document.createRange().createContextualFragment(t.responseText)
        }),
        p = l("application/json", function(t) {
            return JSON.parse(t.responseText)
        }),
        d = l("text/plain", function(t) {
            return t.responseText
        }),
        v = l("application/xml", function(t) {
            var n = t.responseXML;
            if (!n) throw new Error("parse error");
            return n
        }),
        g = function(t, n) {
            return function(e, r, i) {
                arguments.length < 3 && (i = r, r = null);
                var u = f(e).mimeType(t);
                return u.row = function(t) {
                    return arguments.length ? u.response(o(n, r = t)) : r
                }, u.row(r), i ? u.get(i) : u
            }
        },
        y = g("text/csv", s.csvParse),
        _ = g("text/tab-separated-values", s.tsvParse);
    n.request = f, n.html = h, n.json = p, n.text = d, n.xml = v, n.csv = y, n.tsv = _
}, function(t, n) {
    t.exports = {
        XMLHttpRequest: XMLHttpRequest
    }
}, function(t, n, e) {
    ! function(t, r) {
        r(n, e(3), e(16), e(9), e(20), e(29), e(30), e(10))
    }(this, function(t, n, e, r, i, o, u, a) {
        "use strict";

        function c(t) {
            function n(n) {
                var e = n + "",
                    u = r.get(e);
                if (!u) {
                    if (o !== H) return o;
                    r.set(e, u = i.push(n))
                }
                return t[(u - 1) % t.length]
            }
            var r = e.map(),
                i = [],
                o = H;
            return t = null == t ? [] : Y.call(t), n.domain = function(t) {
                if (!arguments.length) return i.slice();
                i = [], r = e.map();
                for (var o, u, a = -1, c = t.length; ++a < c;) r.has(u = (o = t[a]) + "") || r.set(u, i.push(o));
                return n
            }, n.range = function(e) {
                return arguments.length ? (t = Y.call(e), n) : t.slice()
            }, n.unknown = function(t) {
                return arguments.length ? (o = t, n) : o
            }, n.copy = function() {
                return c().domain(i).range(t).unknown(o)
            }, n
        }

        function s() {
            function t() {
                var t = o().length,
                    i = a[1] < a[0],
                    c = a[i - 0],
                    s = a[1 - i];
                e = (s - c) / Math.max(1, t - l + 2 * h), f && (e = Math.floor(e)), c += (s - c - e * (t - l)) * p, r = e * (1 - l), f && (c = Math.round(c), r = Math.round(r));
                var d = n.range(t).map(function(t) {
                    return c + e * t
                });
                return u(i ? d.reverse() : d)
            }
            var e, r, i = c().unknown(void 0),
                o = i.domain,
                u = i.range,
                a = [0, 1],
                f = !1,
                l = 0,
                h = 0,
                p = .5;
            return delete i.unknown, i.domain = function(n) {
                return arguments.length ? (o(n), t()) : o()
            }, i.range = function(n) {
                return arguments.length ? (a = [+n[0], +n[1]], t()) : a.slice()
            }, i.rangeRound = function(n) {
                return a = [+n[0], +n[1]], f = !0, t()
            }, i.bandwidth = function() {
                return r
            }, i.step = function() {
                return e
            }, i.round = function(n) {
                return arguments.length ? (f = !!n, t()) : f
            }, i.padding = function(n) {
                return arguments.length ? (l = h = Math.max(0, Math.min(1, n)), t()) : l
            }, i.paddingInner = function(n) {
                return arguments.length ? (l = Math.max(0, Math.min(1, n)), t()) : l
            }, i.paddingOuter = function(n) {
                return arguments.length ? (h = Math.max(0, Math.min(1, n)), t()) : h
            }, i.align = function(n) {
                return arguments.length ? (p = Math.max(0, Math.min(1, n)), t()) : p
            }, i.copy = function() {
                return s().domain(o()).range(a).round(f).paddingInner(l).paddingOuter(h).align(p)
            }, t()
        }

        function f(t) {
            var n = t.copy;
            return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function() {
                return f(n())
            }, t
        }

        function l() {
            return f(s().paddingInner(1))
        }

        function h(t, n) {
            return (n -= t = +t) ? function(e) {
                return (e - t) / n
            } : B(n)
        }

        function p(t) {
            return function(n, e) {
                var r = t(n = +n, e = +e);
                return function(t) {
                    return t <= n ? 0 : t >= e ? 1 : r(t)
                }
            }
        }

        function d(t) {
            return function(n, e) {
                var r = t(n = +n, e = +e);
                return function(t) {
                    return t <= 0 ? n : t >= 1 ? e : r(t)
                }
            }
        }

        function v(t, n, e, r) {
            var i = t[0],
                o = t[1],
                u = n[0],
                a = n[1];
            return o < i ? (i = e(o, i), u = r(a, u)) : (i = e(i, o), u = r(u, a)),
                function(t) {
                    return u(i(t))
                }
        }

        function g(t, e, r, i) {
            var o = Math.min(t.length, e.length) - 1,
                u = new Array(o),
                a = new Array(o),
                c = -1;
            for (t[o] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++c < o;) u[c] = r(t[c], t[c + 1]), a[c] = i(e[c], e[c + 1]);
            return function(e) {
                var r = n.bisect(t, e, 1, o) - 1;
                return a[r](u[r](e))
            }
        }

        function y(t, n) {
            return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
        }

        function _(t, n) {
            function e() {
                return o = Math.min(c.length, s.length) > 2 ? g : v, u = a = null, i
            }

            function i(n) {
                return (u || (u = o(c, s, l ? p(t) : t, f)))(+n)
            }
            var o, u, a, c = X,
                s = X,
                f = r.interpolate,
                l = !1;
            return i.invert = function(t) {
                return (a || (a = o(s, c, h, l ? d(n) : n)))(+t)
            }, i.domain = function(t) {
                return arguments.length ? (c = F.call(t, V), e()) : c.slice()
            }, i.range = function(t) {
                return arguments.length ? (s = Y.call(t), e()) : s.slice()
            }, i.rangeRound = function(t) {
                return s = Y.call(t), f = r.interpolateRound, e()
            }, i.clamp = function(t) {
                return arguments.length ? (l = !!t, e()) : l
            }, i.interpolate = function(t) {
                return arguments.length ? (f = t, e()) : f
            }, e()
        }

        function m(t) {
            var e = t.domain;
            return t.ticks = function(t) {
                var r = e();
                return n.ticks(r[0], r[r.length - 1], null == t ? 10 : t)
            }, t.tickFormat = function(t, n) {
                return W(e(), t, n)
            }, t.nice = function(r) {
                null == r && (r = 10);
                var i, o = e(),
                    u = 0,
                    a = o.length - 1,
                    c = o[u],
                    s = o[a];
                return s < c && (i = c, c = s, s = i, i = u, u = a, a = i), i = n.tickIncrement(c, s, r), i > 0 ? (c = Math.floor(c / i) * i, s = Math.ceil(s / i) * i, i = n.tickIncrement(c, s, r)) : i < 0 && (c = Math.ceil(c * i) / i, s = Math.floor(s * i) / i, i = n.tickIncrement(c, s, r)), i > 0 ? (o[u] = Math.floor(c / i) * i, o[a] = Math.ceil(s / i) * i, e(o)) : i < 0 && (o[u] = Math.ceil(c * i) / i, o[a] = Math.floor(s * i) / i, e(o)), t
            }, t
        }

        function x() {
            var t = _(h, r.interpolateNumber);
            return t.copy = function() {
                return y(t, x())
            }, m(t)
        }

        function b() {
            function t(t) {
                return +t
            }
            var n = [0, 1];
            return t.invert = t, t.domain = t.range = function(e) {
                return arguments.length ? (n = F.call(e, V), t) : n.slice()
            }, t.copy = function() {
                return b().domain(n)
            }, m(t)
        }

        function w(t, n) {
            return (n = Math.log(n / t)) ? function(e) {
                return Math.log(e / t) / n
            } : B(n)
        }

        function M(t, n) {
            return t < 0 ? function(e) {
                return -Math.pow(-n, e) * Math.pow(-t, 1 - e)
            } : function(e) {
                return Math.pow(n, e) * Math.pow(t, 1 - e)
            }
        }

        function S(t) {
            return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
        }

        function E(t) {
            return 10 === t ? S : t === Math.E ? Math.exp : function(n) {
                return Math.pow(t, n)
            }
        }

        function k(t) {
            return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function(n) {
                return Math.log(n) / t
            })
        }

        function N(t) {
            return function(n) {
                return -t(-n)
            }
        }

        function A() {
            function t() {
                return u = k(o), a = E(o), r()[0] < 0 && (u = N(u), a = N(a)), e
            }
            var e = _(w, M).domain([1, 10]),
                r = e.domain,
                o = 10,
                u = k(10),
                a = E(10);
            return e.base = function(n) {
                return arguments.length ? (o = +n, t()) : o
            }, e.domain = function(n) {
                return arguments.length ? (r(n), t()) : r()
            }, e.ticks = function(t) {
                var e, i = r(),
                    c = i[0],
                    s = i[i.length - 1];
                (e = s < c) && (p = c, c = s, s = p);
                var f, l, h, p = u(c),
                    d = u(s),
                    v = null == t ? 10 : +t,
                    g = [];
                if (!(o % 1) && d - p < v) {
                    if (p = Math.round(p) - 1, d = Math.round(d) + 1, c > 0) {
                        for (; p < d; ++p)
                            for (l = 1, f = a(p); l < o; ++l)
                                if (h = f * l, !(h < c)) {
                                    if (h > s) break;
                                    g.push(h)
                                }
                    } else
                        for (; p < d; ++p)
                            for (l = o - 1, f = a(p); l >= 1; --l)
                                if (h = f * l, !(h < c)) {
                                    if (h > s) break;
                                    g.push(h)
                                }
                } else g = n.ticks(p, d, Math.min(d - p, v)).map(a);
                return e ? g.reverse() : g
            }, e.tickFormat = function(t, n) {
                if (null == n && (n = 10 === o ? ".0e" : ","), "function" != typeof n && (n = i.format(n)), t === 1 / 0) return n;
                null == t && (t = 10);
                var r = Math.max(1, o * t / e.ticks().length);
                return function(t) {
                    var e = t / a(Math.round(u(t)));
                    return e * o < o - .5 && (e *= o), e <= r ? n(t) : ""
                }
            }, e.nice = function() {
                return r(K(r(), {
                    floor: function(t) {
                        return a(Math.floor(u(t)))
                    },
                    ceil: function(t) {
                        return a(Math.ceil(u(t)))
                    }
                }))
            }, e.copy = function() {
                return y(e, A().base(o))
            }, e
        }

        function T(t, n) {
            return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n)
        }

        function z() {
            function t(t, n) {
                return (n = T(n, e) - (t = T(t, e))) ? function(r) {
                    return (T(r, e) - t) / n
                } : B(n)
            }

            function n(t, n) {
                return n = T(n, e) - (t = T(t, e)),
                    function(r) {
                        return T(t + n * r, 1 / e)
                    }
            }
            var e = 1,
                r = _(t, n),
                i = r.domain;
            return r.exponent = function(t) {
                return arguments.length ? (e = +t, i(i())) : e
            }, r.copy = function() {
                return y(r, z().exponent(e))
            }, m(r)
        }

        function C() {
            return z().exponent(.5)
        }

        function O() {
            function t() {
                var t = 0,
                    u = Math.max(1, i.length);
                for (o = new Array(u - 1); ++t < u;) o[t - 1] = n.quantile(r, t / u);
                return e
            }

            function e(t) {
                if (!isNaN(t = +t)) return i[n.bisect(o, t)]
            }
            var r = [],
                i = [],
                o = [];
            return e.invertExtent = function(t) {
                var n = i.indexOf(t);
                return n < 0 ? [NaN, NaN] : [n > 0 ? o[n - 1] : r[0], n < o.length ? o[n] : r[r.length - 1]]
            }, e.domain = function(e) {
                if (!arguments.length) return r.slice();
                r = [];
                for (var i, o = 0, u = e.length; o < u; ++o) i = e[o], null == i || isNaN(i = +i) || r.push(i);
                return r.sort(n.ascending), t()
            }, e.range = function(n) {
                return arguments.length ? (i = Y.call(n), t()) : i.slice()
            }, e.quantiles = function() {
                return o.slice()
            }, e.copy = function() {
                return O().domain(r).range(i)
            }, e
        }

        function I() {
            function t(t) {
                if (t <= t) return a[n.bisect(u, t, 0, o)]
            }

            function e() {
                var n = -1;
                for (u = new Array(o); ++n < o;) u[n] = ((n + 1) * i - (n - o) * r) / (o + 1);
                return t
            }
            var r = 0,
                i = 1,
                o = 1,
                u = [.5],
                a = [0, 1];
            return t.domain = function(t) {
                return arguments.length ? (r = +t[0], i = +t[1], e()) : [r, i]
            }, t.range = function(t) {
                return arguments.length ? (o = (a = Y.call(t)).length - 1, e()) : a.slice()
            }, t.invertExtent = function(t) {
                var n = a.indexOf(t);
                return n < 0 ? [NaN, NaN] : n < 1 ? [r, u[0]] : n >= o ? [u[o - 1], i] : [u[n - 1], u[n]]
            }, t.copy = function() {
                return I().domain([r, i]).range(a)
            }, m(t)
        }

        function L() {
            function t(t) {
                if (t <= t) return r[n.bisect(e, t, 0, i)]
            }
            var e = [.5],
                r = [0, 1],
                i = 1;
            return t.domain = function(n) {
                return arguments.length ? (e = Y.call(n), i = Math.min(e.length, r.length - 1), t) : e.slice()
            }, t.range = function(n) {
                return arguments.length ? (r = Y.call(n), i = Math.min(e.length, r.length - 1), t) : r.slice()
            }, t.invertExtent = function(t) {
                var n = r.indexOf(t);
                return [e[n - 1], e[n]]
            }, t.copy = function() {
                return L().domain(e).range(r)
            }, t
        }

        function P(t) {
            return new Date(t)
        }

        function D(t) {
            return t instanceof Date ? +t : +new Date(+t)
        }

        function q(t, e, i, o, u, a, c, s, f) {
            function l(n) {
                return (c(n) < n ? m : a(n) < n ? x : u(n) < n ? b : o(n) < n ? w : e(n) < n ? i(n) < n ? M : S : t(n) < n ? E : k)(n)
            }

            function p(e, r, i, o) {
                if (null == e && (e = 10), "number" == typeof e) {
                    var u = Math.abs(i - r) / e,
                        a = n.bisector(function(t) {
                            return t[2]
                        }).right(N, u);
                    a === N.length ? (o = n.tickStep(r / nt, i / nt, e), e = t) : a ? (a = N[u / N[a - 1][2] < N[a][2] / u ? a - 1 : a], o = a[1], e = a[0]) : (o = n.tickStep(r, i, e), e = s)
                }
                return null == o ? e : e.every(o)
            }
            var d = _(h, r.interpolateNumber),
                v = d.invert,
                g = d.domain,
                m = f(".%L"),
                x = f(":%S"),
                b = f("%I:%M"),
                w = f("%I %p"),
                M = f("%a %d"),
                S = f("%b %d"),
                E = f("%B"),
                k = f("%Y"),
                N = [
                    [c, 1, J],
                    [c, 5, 5 * J],
                    [c, 15, 15 * J],
                    [c, 30, 30 * J],
                    [a, 1, Z],
                    [a, 5, 5 * Z],
                    [a, 15, 15 * Z],
                    [a, 30, 30 * Z],
                    [u, 1, $],
                    [u, 3, 3 * $],
                    [u, 6, 6 * $],
                    [u, 12, 12 * $],
                    [o, 1, G],
                    [o, 2, 2 * G],
                    [i, 1, Q],
                    [e, 1, tt],
                    [e, 3, 3 * tt],
                    [t, 1, nt]
                ];
            return d.invert = function(t) {
                return new Date(v(t))
            }, d.domain = function(t) {
                return arguments.length ? g(F.call(t, D)) : g().map(P)
            }, d.ticks = function(t, n) {
                var e, r = g(),
                    i = r[0],
                    o = r[r.length - 1],
                    u = o < i;
                return u && (e = i, i = o, o = e), e = p(t, i, o, n), e = e ? e.range(i, o + 1) : [], u ? e.reverse() : e
            }, d.tickFormat = function(t, n) {
                return null == n ? l : f(n)
            }, d.nice = function(t, n) {
                var e = g();
                return (t = p(t, e[0], e[e.length - 1], n)) ? g(K(e, t)) : d
            }, d.copy = function() {
                return y(d, q(t, e, i, o, u, a, c, s, f))
            }, d
        }

        function R(t) {
            var n = t.length;
            return function(e) {
                return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
            }
        }

        function j(t) {
            function n(n) {
                var o = (n - e) / (r - e);
                return t(i ? Math.max(0, Math.min(1, o)) : o)
            }
            var e = 0,
                r = 1,
                i = !1;
            return n.domain = function(t) {
                return arguments.length ? (e = +t[0], r = +t[1], n) : [e, r]
            }, n.clamp = function(t) {
                return arguments.length ? (i = !!t, n) : i
            }, n.interpolator = function(e) {
                return arguments.length ? (t = e, n) : t
            }, n.copy = function() {
                return j(t).domain([e, r]).clamp(i)
            }, m(n)
        }
        var U = Array.prototype,
            F = U.map,
            Y = U.slice,
            H = {
                name: "implicit"
            },
            B = function(t) {
                return function() {
                    return t
                }
            },
            V = function(t) {
                return +t
            },
            X = [0, 1],
            W = function(t, e, r) {
                var o, u = t[0],
                    a = t[t.length - 1],
                    c = n.tickStep(u, a, null == e ? 10 : e);
                switch (r = i.formatSpecifier(null == r ? ",f" : r), r.type) {
                    case "s":
                        var s = Math.max(Math.abs(u), Math.abs(a));
                        return null != r.precision || isNaN(o = i.precisionPrefix(c, s)) || (r.precision = o), i.formatPrefix(r, s);
                    case "":
                    case "e":
                    case "g":
                    case "p":
                    case "r":
                        null != r.precision || isNaN(o = i.precisionRound(c, Math.max(Math.abs(u), Math.abs(a)))) || (r.precision = o - ("e" === r.type));
                        break;
                    case "f":
                    case "%":
                        null != r.precision || isNaN(o = i.precisionFixed(c)) || (r.precision = o - 2 * ("%" === r.type))
                }
                return i.format(r)
            },
            K = function(t, n) {
                t = t.slice();
                var e, r = 0,
                    i = t.length - 1,
                    o = t[r],
                    u = t[i];
                return u < o && (e = r, r = i, i = e, e = o, o = u, u = e), t[r] = n.floor(o), t[i] = n.ceil(u), t
            },
            J = 1e3,
            Z = 60 * J,
            $ = 60 * Z,
            G = 24 * $,
            Q = 7 * G,
            tt = 30 * G,
            nt = 365 * G,
            et = function() {
                return q(o.timeYear, o.timeMonth, o.timeWeek, o.timeDay, o.timeHour, o.timeMinute, o.timeSecond, o.timeMillisecond, u.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)])
            },
            rt = function() {
                return q(o.utcYear, o.utcMonth, o.utcWeek, o.utcDay, o.utcHour, o.utcMinute, o.utcSecond, o.utcMillisecond, u.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)])
            },
            it = function(t) {
                return t.match(/.{6}/g).map(function(t) {
                    return "#" + t
                })
            },
            ot = it("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
            ut = it("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),
            at = it("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),
            ct = it("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),
            st = r.interpolateCubehelixLong(a.cubehelix(300, .5, 0), a.cubehelix(-240, .5, 1)),
            ft = r.interpolateCubehelixLong(a.cubehelix(-100, .75, .35), a.cubehelix(80, 1.5, .8)),
            lt = r.interpolateCubehelixLong(a.cubehelix(260, .75, .35), a.cubehelix(80, 1.5, .8)),
            ht = a.cubehelix(),
            pt = function(t) {
                (t < 0 || t > 1) && (t -= Math.floor(t));
                var n = Math.abs(t - .5);
                return ht.h = 360 * t - 100, ht.s = 1.5 - 1.5 * n, ht.l = .8 - .9 * n, ht + ""
            },
            dt = R(it("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
            vt = R(it("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
            gt = R(it("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
            yt = R(it("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
        t.scaleBand = s, t.scalePoint = l, t.scaleIdentity = b, t.scaleLinear = x, t.scaleLog = A, t.scaleOrdinal = c, t.scaleImplicit = H, t.scalePow = z, t.scaleSqrt = C, t.scaleQuantile = O, t.scaleQuantize = I, t.scaleThreshold = L, t.scaleTime = et, t.scaleUtc = rt, t.schemeCategory10 = ot, t.schemeCategory20b = ut, t.schemeCategory20c = at, t.schemeCategory20 = ct, t.interpolateCubehelixDefault = st, t.interpolateRainbow = pt, t.interpolateWarm = ft, t.interpolateCool = lt, t.interpolateViridis = dt, t.interpolateMagma = vt, t.interpolateInferno = gt, t.interpolatePlasma = yt, t.scaleSequential = j, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, e) {
        e(n)
    }(this, function(t) {
        "use strict";

        function n(t, e, r, u) {
            function a(n) {
                return t(n = new Date(+n)), n
            }
            return a.floor = a, a.ceil = function(n) {
                return t(n = new Date(n - 1)), e(n, 1), t(n), n
            }, a.round = function(t) {
                var n = a(t),
                    e = a.ceil(t);
                return t - n < e - t ? n : e
            }, a.offset = function(t, n) {
                return e(t = new Date(+t), null == n ? 1 : Math.floor(n)), t
            }, a.range = function(n, r, i) {
                var o = [];
                if (n = a.ceil(n), i = null == i ? 1 : Math.floor(i), !(n < r && i > 0)) return o;
                do o.push(new Date(+n)); while (e(n, i), t(n), n < r);
                return o
            }, a.filter = function(r) {
                return n(function(n) {
                    if (n >= n)
                        for (; t(n), !r(n);) n.setTime(n - 1)
                }, function(t, n) {
                    if (t >= t)
                        if (n < 0)
                            for (; ++n <= 0;)
                                for (; e(t, -1), !r(t););
                        else
                            for (; --n >= 0;)
                                for (; e(t, 1), !r(t););
                })
            }, r && (a.count = function(n, e) {
                return i.setTime(+n), o.setTime(+e), t(i), t(o), Math.floor(r(i, o))
            }, a.every = function(t) {
                return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? a.filter(u ? function(n) {
                    return u(n) % t === 0
                } : function(n) {
                    return a.count(0, n) % t === 0
                }) : a : null
            }), a
        }

        function e(t) {
            return n(function(n) {
                n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setDate(t.getDate() + 7 * n)
            }, function(t, n) {
                return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * s) / h
            })
        }

        function r(t) {
            return n(function(n) {
                n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setUTCDate(t.getUTCDate() + 7 * n)
            }, function(t, n) {
                return (n - t) / h
            })
        }
        var i = new Date,
            o = new Date,
            u = n(function() {}, function(t, n) {
                t.setTime(+t + n)
            }, function(t, n) {
                return n - t
            });
        u.every = function(t) {
            return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? n(function(n) {
                n.setTime(Math.floor(n / t) * t)
            }, function(n, e) {
                n.setTime(+n + e * t)
            }, function(n, e) {
                return (e - n) / t
            }) : u : null
        };
        var a = u.range,
            c = 1e3,
            s = 6e4,
            f = 36e5,
            l = 864e5,
            h = 6048e5,
            p = n(function(t) {
                t.setTime(Math.floor(t / c) * c)
            }, function(t, n) {
                t.setTime(+t + n * c)
            }, function(t, n) {
                return (n - t) / c
            }, function(t) {
                return t.getUTCSeconds()
            }),
            d = p.range,
            v = n(function(t) {
                t.setTime(Math.floor(t / s) * s)
            }, function(t, n) {
                t.setTime(+t + n * s)
            }, function(t, n) {
                return (n - t) / s
            }, function(t) {
                return t.getMinutes()
            }),
            g = v.range,
            y = n(function(t) {
                var n = t.getTimezoneOffset() * s % f;
                n < 0 && (n += f), t.setTime(Math.floor((+t - n) / f) * f + n)
            }, function(t, n) {
                t.setTime(+t + n * f)
            }, function(t, n) {
                return (n - t) / f
            }, function(t) {
                return t.getHours()
            }),
            _ = y.range,
            m = n(function(t) {
                t.setHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setDate(t.getDate() + n)
            }, function(t, n) {
                return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * s) / l
            }, function(t) {
                return t.getDate() - 1
            }),
            x = m.range,
            b = e(0),
            w = e(1),
            M = e(2),
            S = e(3),
            E = e(4),
            k = e(5),
            N = e(6),
            A = b.range,
            T = w.range,
            z = M.range,
            C = S.range,
            O = E.range,
            I = k.range,
            L = N.range,
            P = n(function(t) {
                t.setDate(1), t.setHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setMonth(t.getMonth() + n)
            }, function(t, n) {
                return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
            }, function(t) {
                return t.getMonth()
            }),
            D = P.range,
            q = n(function(t) {
                t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setFullYear(t.getFullYear() + n)
            }, function(t, n) {
                return n.getFullYear() - t.getFullYear()
            }, function(t) {
                return t.getFullYear()
            });
        q.every = function(t) {
            return isFinite(t = Math.floor(t)) && t > 0 ? n(function(n) {
                n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
            }, function(n, e) {
                n.setFullYear(n.getFullYear() + e * t)
            }) : null
        };
        var R = q.range,
            j = n(function(t) {
                t.setUTCSeconds(0, 0)
            }, function(t, n) {
                t.setTime(+t + n * s)
            }, function(t, n) {
                return (n - t) / s
            }, function(t) {
                return t.getUTCMinutes()
            }),
            U = j.range,
            F = n(function(t) {
                t.setUTCMinutes(0, 0, 0)
            }, function(t, n) {
                t.setTime(+t + n * f)
            }, function(t, n) {
                return (n - t) / f
            }, function(t) {
                return t.getUTCHours()
            }),
            Y = F.range,
            H = n(function(t) {
                t.setUTCHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setUTCDate(t.getUTCDate() + n)
            }, function(t, n) {
                return (n - t) / l
            }, function(t) {
                return t.getUTCDate() - 1
            }),
            B = H.range,
            V = r(0),
            X = r(1),
            W = r(2),
            K = r(3),
            J = r(4),
            Z = r(5),
            $ = r(6),
            G = V.range,
            Q = X.range,
            tt = W.range,
            nt = K.range,
            et = J.range,
            rt = Z.range,
            it = $.range,
            ot = n(function(t) {
                t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setUTCMonth(t.getUTCMonth() + n)
            }, function(t, n) {
                return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
            }, function(t) {
                return t.getUTCMonth()
            }),
            ut = ot.range,
            at = n(function(t) {
                t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setUTCFullYear(t.getUTCFullYear() + n)
            }, function(t, n) {
                return n.getUTCFullYear() - t.getUTCFullYear()
            }, function(t) {
                return t.getUTCFullYear()
            });
        at.every = function(t) {
            return isFinite(t = Math.floor(t)) && t > 0 ? n(function(n) {
                n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
            }, function(n, e) {
                n.setUTCFullYear(n.getUTCFullYear() + e * t)
            }) : null
        };
        var ct = at.range;
        t.timeInterval = n, t.timeMillisecond = u, t.timeMilliseconds = a, t.utcMillisecond = u, t.utcMilliseconds = a, t.timeSecond = p, t.timeSeconds = d, t.utcSecond = p, t.utcSeconds = d, t.timeMinute = v, t.timeMinutes = g, t.timeHour = y, t.timeHours = _, t.timeDay = m, t.timeDays = x, t.timeWeek = b, t.timeWeeks = A, t.timeSunday = b, t.timeSundays = A, t.timeMonday = w, t.timeMondays = T, t.timeTuesday = M, t.timeTuesdays = z, t.timeWednesday = S, t.timeWednesdays = C, t.timeThursday = E, t.timeThursdays = O, t.timeFriday = k, t.timeFridays = I, t.timeSaturday = N, t.timeSaturdays = L, t.timeMonth = P, t.timeMonths = D, t.timeYear = q, t.timeYears = R, t.utcMinute = j, t.utcMinutes = U, t.utcHour = F, t.utcHours = Y, t.utcDay = H, t.utcDays = B, t.utcWeek = V, t.utcWeeks = G, t.utcSunday = V, t.utcSundays = G, t.utcMonday = X, t.utcMondays = Q, t.utcTuesday = W, t.utcTuesdays = tt, t.utcWednesday = K, t.utcWednesdays = nt, t.utcThursday = J, t.utcThursdays = et, t.utcFriday = Z, t.utcFridays = rt, t.utcSaturday = $, t.utcSaturdays = it, t.utcMonth = ot, t.utcMonths = ut, t.utcYear = at, t.utcYears = ct, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, r) {
        r(n, e(29))
    }(this, function(t, n) {
        "use strict";

        function e(t) {
            if (0 <= t.y && t.y < 100) {
                var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
                return n.setFullYear(t.y), n
            }
            return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
        }

        function r(t) {
            if (0 <= t.y && t.y < 100) {
                var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                return n.setUTCFullYear(t.y), n
            }
            return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
        }

        function i(t) {
            return {
                y: t,
                m: 0,
                d: 1,
                H: 0,
                M: 0,
                S: 0,
                L: 0
            }
        }

        function o(t) {
            function n(t, n) {
                return function(e) {
                    var r, i, o, u = [],
                        a = -1,
                        c = 0,
                        s = t.length;
                    for (e instanceof Date || (e = new Date(+e)); ++a < s;) 37 === t.charCodeAt(a) && (u.push(t.slice(c, a)), null != (i = rt[r = t.charAt(++a)]) ? r = t.charAt(++a) : i = "e" === r ? " " : "0", (o = n[r]) && (r = o(e, i)), u.push(r), c = a + 1);
                    return u.push(t.slice(c, a)), u.join("")
                }
            }

            function o(t, n) {
                return function(e) {
                    var o = i(1900),
                        a = u(o, t, e += "", 0);
                    if (a != e.length) return null;
                    if ("p" in o && (o.H = o.H % 12 + 12 * o.p), "W" in o || "U" in o) {
                        "w" in o || (o.w = "W" in o ? 1 : 0);
                        var c = "Z" in o ? r(i(o.y)).getUTCDay() : n(i(o.y)).getDay();
                        o.m = 0, o.d = "W" in o ? (o.w + 6) % 7 + 7 * o.W - (c + 5) % 7 : o.w + 7 * o.U - (c + 6) % 7
                    }
                    return "Z" in o ? (o.H += o.Z / 100 | 0, o.M += o.Z % 100, r(o)) : n(o)
                }
            }

            function u(t, n, e, r) {
                for (var i, o, u = 0, a = n.length, c = e.length; u < a;) {
                    if (r >= c) return -1;
                    if (i = n.charCodeAt(u++), 37 === i) {
                        if (i = n.charAt(u++), o = qt[i in rt ? n.charAt(u++) : i], !o || (r = o(t, e, r)) < 0) return -1
                    } else if (i != e.charCodeAt(r++)) return -1
                }
                return r
            }

            function a(t, n, e) {
                var r = Et.exec(n.slice(e));
                return r ? (t.p = kt[r[0].toLowerCase()], e + r[0].length) : -1
            }

            function Q(t, n, e) {
                var r = Tt.exec(n.slice(e));
                return r ? (t.w = zt[r[0].toLowerCase()], e + r[0].length) : -1
            }

            function tt(t, n, e) {
                var r = Nt.exec(n.slice(e));
                return r ? (t.w = At[r[0].toLowerCase()], e + r[0].length) : -1
            }

            function nt(t, n, e) {
                var r = It.exec(n.slice(e));
                return r ? (t.m = Lt[r[0].toLowerCase()], e + r[0].length) : -1
            }

            function et(t, n, e) {
                var r = Ct.exec(n.slice(e));
                return r ? (t.m = Ot[r[0].toLowerCase()], e + r[0].length) : -1
            }

            function it(t, n, e) {
                return u(t, yt, n, e)
            }

            function ot(t, n, e) {
                return u(t, _t, n, e)
            }

            function ut(t, n, e) {
                return u(t, mt, n, e)
            }

            function at(t) {
                return wt[t.getDay()]
            }

            function ct(t) {
                return bt[t.getDay()]
            }

            function st(t) {
                return St[t.getMonth()]
            }

            function ft(t) {
                return Mt[t.getMonth()]
            }

            function lt(t) {
                return xt[+(t.getHours() >= 12)]
            }

            function ht(t) {
                return wt[t.getUTCDay()]
            }

            function pt(t) {
                return bt[t.getUTCDay()]
            }

            function dt(t) {
                return St[t.getUTCMonth()]
            }

            function vt(t) {
                return Mt[t.getUTCMonth()]
            }

            function gt(t) {
                return xt[+(t.getUTCHours() >= 12)]
            }
            var yt = t.dateTime,
                _t = t.date,
                mt = t.time,
                xt = t.periods,
                bt = t.days,
                wt = t.shortDays,
                Mt = t.months,
                St = t.shortMonths,
                Et = c(xt),
                kt = s(xt),
                Nt = c(bt),
                At = s(bt),
                Tt = c(wt),
                zt = s(wt),
                Ct = c(Mt),
                Ot = s(Mt),
                It = c(St),
                Lt = s(St),
                Pt = {
                    a: at,
                    A: ct,
                    b: st,
                    B: ft,
                    c: null,
                    d: S,
                    e: S,
                    H: E,
                    I: k,
                    j: N,
                    L: A,
                    m: T,
                    M: z,
                    p: lt,
                    S: C,
                    U: O,
                    w: I,
                    W: L,
                    x: null,
                    X: null,
                    y: P,
                    Y: D,
                    Z: q,
                    "%": G
                },
                Dt = {
                    a: ht,
                    A: pt,
                    b: dt,
                    B: vt,
                    c: null,
                    d: R,
                    e: R,
                    H: j,
                    I: U,
                    j: F,
                    L: Y,
                    m: H,
                    M: B,
                    p: gt,
                    S: V,
                    U: X,
                    w: W,
                    W: K,
                    x: null,
                    X: null,
                    y: J,
                    Y: Z,
                    Z: $,
                    "%": G
                },
                qt = {
                    a: Q,
                    A: tt,
                    b: nt,
                    B: et,
                    c: it,
                    d: y,
                    e: y,
                    H: m,
                    I: m,
                    j: _,
                    L: w,
                    m: g,
                    M: x,
                    p: a,
                    S: b,
                    U: l,
                    w: f,
                    W: h,
                    x: ot,
                    X: ut,
                    y: d,
                    Y: p,
                    Z: v,
                    "%": M
                };
            return Pt.x = n(_t, Pt), Pt.X = n(mt, Pt), Pt.c = n(yt, Pt), Dt.x = n(_t, Dt), Dt.X = n(mt, Dt), Dt.c = n(yt, Dt), {
                format: function(t) {
                    var e = n(t += "", Pt);
                    return e.toString = function() {
                        return t
                    }, e
                },
                parse: function(t) {
                    var n = o(t += "", e);
                    return n.toString = function() {
                        return t
                    }, n
                },
                utcFormat: function(t) {
                    var e = n(t += "", Dt);
                    return e.toString = function() {
                        return t
                    }, e
                },
                utcParse: function(t) {
                    var n = o(t, r);
                    return n.toString = function() {
                        return t
                    }, n
                }
            }
        }

        function u(t, n, e) {
            var r = t < 0 ? "-" : "",
                i = (r ? -t : t) + "",
                o = i.length;
            return r + (o < e ? new Array(e - o + 1).join(n) + i : i)
        }

        function a(t) {
            return t.replace(ut, "\\$&")
        }

        function c(t) {
            return new RegExp("^(?:" + t.map(a).join("|") + ")", "i")
        }

        function s(t) {
            for (var n = {}, e = -1, r = t.length; ++e < r;) n[t[e].toLowerCase()] = e;
            return n
        }

        function f(t, n, e) {
            var r = it.exec(n.slice(e, e + 1));
            return r ? (t.w = +r[0], e + r[0].length) : -1
        }

        function l(t, n, e) {
            var r = it.exec(n.slice(e));
            return r ? (t.U = +r[0], e + r[0].length) : -1
        }

        function h(t, n, e) {
            var r = it.exec(n.slice(e));
            return r ? (t.W = +r[0], e + r[0].length) : -1
        }

        function p(t, n, e) {
            var r = it.exec(n.slice(e, e + 4));
            return r ? (t.y = +r[0], e + r[0].length) : -1
        }

        function d(t, n, e) {
            var r = it.exec(n.slice(e, e + 2));
            return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
        }

        function v(t, n, e) {
            var r = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e, e + 6));
            return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
        }

        function g(t, n, e) {
            var r = it.exec(n.slice(e, e + 2));
            return r ? (t.m = r[0] - 1, e + r[0].length) : -1
        }

        function y(t, n, e) {
            var r = it.exec(n.slice(e, e + 2));
            return r ? (t.d = +r[0], e + r[0].length) : -1
        }

        function _(t, n, e) {
            var r = it.exec(n.slice(e, e + 3));
            return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
        }

        function m(t, n, e) {
            var r = it.exec(n.slice(e, e + 2));
            return r ? (t.H = +r[0], e + r[0].length) : -1
        }

        function x(t, n, e) {
            var r = it.exec(n.slice(e, e + 2));
            return r ? (t.M = +r[0], e + r[0].length) : -1
        }

        function b(t, n, e) {
            var r = it.exec(n.slice(e, e + 2));
            return r ? (t.S = +r[0], e + r[0].length) : -1
        }

        function w(t, n, e) {
            var r = it.exec(n.slice(e, e + 3));
            return r ? (t.L = +r[0], e + r[0].length) : -1
        }

        function M(t, n, e) {
            var r = ot.exec(n.slice(e, e + 1));
            return r ? e + r[0].length : -1
        }

        function S(t, n) {
            return u(t.getDate(), n, 2)
        }

        function E(t, n) {
            return u(t.getHours(), n, 2)
        }

        function k(t, n) {
            return u(t.getHours() % 12 || 12, n, 2)
        }

        function N(t, e) {
            return u(1 + n.timeDay.count(n.timeYear(t), t), e, 3)
        }

        function A(t, n) {
            return u(t.getMilliseconds(), n, 3)
        }

        function T(t, n) {
            return u(t.getMonth() + 1, n, 2)
        }

        function z(t, n) {
            return u(t.getMinutes(), n, 2)
        }

        function C(t, n) {
            return u(t.getSeconds(), n, 2)
        }

        function O(t, e) {
            return u(n.timeSunday.count(n.timeYear(t), t), e, 2)
        }

        function I(t) {
            return t.getDay()
        }

        function L(t, e) {
            return u(n.timeMonday.count(n.timeYear(t), t), e, 2)
        }

        function P(t, n) {
            return u(t.getFullYear() % 100, n, 2)
        }

        function D(t, n) {
            return u(t.getFullYear() % 1e4, n, 4)
        }

        function q(t) {
            var n = t.getTimezoneOffset();
            return (n > 0 ? "-" : (n *= -1, "+")) + u(n / 60 | 0, "0", 2) + u(n % 60, "0", 2)
        }

        function R(t, n) {
            return u(t.getUTCDate(), n, 2)
        }

        function j(t, n) {
            return u(t.getUTCHours(), n, 2)
        }

        function U(t, n) {
            return u(t.getUTCHours() % 12 || 12, n, 2)
        }

        function F(t, e) {
            return u(1 + n.utcDay.count(n.utcYear(t), t), e, 3)
        }

        function Y(t, n) {
            return u(t.getUTCMilliseconds(), n, 3)
        }

        function H(t, n) {
            return u(t.getUTCMonth() + 1, n, 2)
        }

        function B(t, n) {
            return u(t.getUTCMinutes(), n, 2)
        }

        function V(t, n) {
            return u(t.getUTCSeconds(), n, 2)
        }

        function X(t, e) {
            return u(n.utcSunday.count(n.utcYear(t), t), e, 2)
        }

        function W(t) {
            return t.getUTCDay()
        }

        function K(t, e) {
            return u(n.utcMonday.count(n.utcYear(t), t), e, 2)
        }

        function J(t, n) {
            return u(t.getUTCFullYear() % 100, n, 2)
        }

        function Z(t, n) {
            return u(t.getUTCFullYear() % 1e4, n, 4)
        }

        function $() {
            return "+0000"
        }

        function G() {
            return "%"
        }

        function Q(n) {
            return et = o(n), t.timeFormat = et.format, t.timeParse = et.parse, t.utcFormat = et.utcFormat, t.utcParse = et.utcParse, et
        }

        function tt(t) {
            return t.toISOString()
        }

        function nt(t) {
            var n = new Date(t);
            return isNaN(n) ? null : n
        }
        var et, rt = {
                "-": "",
                _: " ",
                0: "0"
            },
            it = /^\s*\d+/,
            ot = /^%/,
            ut = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
        Q({
            dateTime: "%x, %X",
            date: "%-m/%-d/%Y",
            time: "%-I:%M:%S %p",
            periods: ["AM", "PM"],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        });
        var at = "%Y-%m-%dT%H:%M:%S.%LZ",
            ct = Date.prototype.toISOString ? tt : t.utcFormat(at),
            st = +new Date("2000-01-01T00:00:00.000Z") ? nt : t.utcParse(at);
        t.timeFormatDefaultLocale = Q, t.timeFormatLocale = o, t.isoFormat = ct, t.isoParse = st, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, r) {
        r(n, e(15))
    }(this, function(t, n) {
        "use strict";

        function e(t) {
            return t > 1 ? 0 : t < -1 ? lt : Math.acos(t)
        }

        function r(t) {
            return t >= 1 ? ht : t <= -1 ? -ht : Math.asin(t)
        }

        function i(t) {
            return t.innerRadius
        }

        function o(t) {
            return t.outerRadius
        }

        function u(t) {
            return t.startAngle
        }

        function a(t) {
            return t.endAngle
        }

        function c(t) {
            return t && t.padAngle
        }

        function s(t, n, e, r, i, o, u, a) {
            var c = e - t,
                s = r - n,
                f = u - i,
                l = a - o,
                h = (f * (n - o) - l * (t - i)) / (l * c - f * s);
            return [t + h * c, n + h * s]
        }

        function f(t, n, e, r, i, o, u) {
            var a = t - e,
                c = n - r,
                s = (u ? o : -o) / st(a * a + c * c),
                f = s * c,
                l = -s * a,
                h = t + f,
                p = n + l,
                d = e + f,
                v = r + l,
                g = (h + d) / 2,
                y = (p + v) / 2,
                _ = d - h,
                m = v - p,
                x = _ * _ + m * m,
                b = i - o,
                w = h * v - d * p,
                M = (m < 0 ? -1 : 1) * st(ut(0, b * b * x - w * w)),
                S = (w * m - _ * M) / x,
                E = (-w * _ - m * M) / x,
                k = (w * m + _ * M) / x,
                N = (-w * _ + m * M) / x,
                A = S - g,
                T = E - y,
                z = k - g,
                C = N - y;
            return A * A + T * T > z * z + C * C && (S = k, E = N), {
                cx: S,
                cy: E,
                x01: -f,
                y01: -l,
                x11: S * (i / b - 1),
                y11: E * (i / b - 1)
            }
        }

        function l(t) {
            this._context = t
        }

        function h(t) {
            return t[0]
        }

        function p(t) {
            return t[1]
        }

        function d(t) {
            this._curve = t
        }

        function v(t) {
            function n(n) {
                return new d(t(n))
            }
            return n._curve = t, n
        }

        function g(t) {
            var n = t.curve;
            return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function(t) {
                return arguments.length ? n(v(t)) : n()._curve
            }, t
        }

        function y(t) {
            return t.source
        }

        function _(t) {
            return t.target
        }

        function m(t) {
            function e() {
                var e, c = Et.call(arguments),
                    s = r.apply(this, c),
                    f = i.apply(this, c);
                if (a || (a = e = n.path()), t(a, +o.apply(this, (c[0] = s, c)), +u.apply(this, c), +o.apply(this, (c[0] = f, c)), +u.apply(this, c)), e) return a = null, e + "" || null
            }
            var r = y,
                i = _,
                o = h,
                u = p,
                a = null;
            return e.source = function(t) {
                return arguments.length ? (r = t, e) : r
            }, e.target = function(t) {
                return arguments.length ? (i = t, e) : i
            }, e.x = function(t) {
                return arguments.length ? (o = "function" == typeof t ? t : et(+t), e) : o
            }, e.y = function(t) {
                return arguments.length ? (u = "function" == typeof t ? t : et(+t), e) : u
            }, e.context = function(t) {
                return arguments.length ? (a = null == t ? null : t, e) : a
            }, e
        }

        function x(t, n, e, r, i) {
            t.moveTo(n, e), t.bezierCurveTo(n = (n + r) / 2, e, n, i, r, i)
        }

        function b(t, n, e, r, i) {
            t.moveTo(n, e), t.bezierCurveTo(n, e = (e + i) / 2, r, e, r, i)
        }

        function w(t, n, e, r, i) {
            var o = St(n, e),
                u = St(n, e = (e + i) / 2),
                a = St(r, e),
                c = St(r, i);
            t.moveTo(o[0], o[1]), t.bezierCurveTo(u[0], u[1], a[0], a[1], c[0], c[1])
        }

        function M() {
            return m(x)
        }

        function S() {
            return m(b)
        }

        function E() {
            var t = m(w);
            return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t
        }

        function k(t, n, e) {
            t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
        }

        function N(t) {
            this._context = t
        }

        function A(t) {
            this._context = t
        }

        function T(t) {
            this._context = t
        }

        function z(t, n) {
            this._basis = new N(t), this._beta = n
        }

        function C(t, n, e) {
            t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
        }

        function O(t, n) {
            this._context = t, this._k = (1 - n) / 6
        }

        function I(t, n) {
            this._context = t, this._k = (1 - n) / 6
        }

        function L(t, n) {
            this._context = t, this._k = (1 - n) / 6
        }

        function P(t, n, e) {
            var r = t._x1,
                i = t._y1,
                o = t._x2,
                u = t._y2;
            if (t._l01_a > ft) {
                var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
                    c = 3 * t._l01_a * (t._l01_a + t._l12_a);
                r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, i = (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c
            }
            if (t._l23_a > ft) {
                var s = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
                    f = 3 * t._l23_a * (t._l23_a + t._l12_a);
                o = (o * s + t._x1 * t._l23_2a - n * t._l12_2a) / f, u = (u * s + t._y1 * t._l23_2a - e * t._l12_2a) / f
            }
            t._context.bezierCurveTo(r, i, o, u, t._x2, t._y2)
        }

        function D(t, n) {
            this._context = t, this._alpha = n
        }

        function q(t, n) {
            this._context = t, this._alpha = n
        }

        function R(t, n) {
            this._context = t, this._alpha = n
        }

        function j(t) {
            this._context = t
        }

        function U(t) {
            return t < 0 ? -1 : 1
        }

        function F(t, n, e) {
            var r = t._x1 - t._x0,
                i = n - t._x1,
                o = (t._y1 - t._y0) / (r || i < 0 && -0),
                u = (e - t._y1) / (i || r < 0 && -0),
                a = (o * i + u * r) / (r + i);
            return (U(o) + U(u)) * Math.min(Math.abs(o), Math.abs(u), .5 * Math.abs(a)) || 0
        }

        function Y(t, n) {
            var e = t._x1 - t._x0;
            return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
        }

        function H(t, n, e) {
            var r = t._x0,
                i = t._y0,
                o = t._x1,
                u = t._y1,
                a = (o - r) / 3;
            t._context.bezierCurveTo(r + a, i + a * n, o - a, u - a * e, o, u)
        }

        function B(t) {
            this._context = t
        }

        function V(t) {
            this._context = new X(t)
        }

        function X(t) {
            this._context = t
        }

        function W(t) {
            return new B(t)
        }

        function K(t) {
            return new V(t)
        }

        function J(t) {
            this._context = t
        }

        function Z(t) {
            var n, e, r = t.length - 1,
                i = new Array(r),
                o = new Array(r),
                u = new Array(r);
            for (i[0] = 0, o[0] = 2, u[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) i[n] = 1, o[n] = 4, u[n] = 4 * t[n] + 2 * t[n + 1];
            for (i[r - 1] = 2, o[r - 1] = 7, u[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = i[n] / o[n - 1], o[n] -= e, u[n] -= e * u[n - 1];
            for (i[r - 1] = u[r - 1] / o[r - 1], n = r - 2; n >= 0; --n) i[n] = (u[n] - i[n + 1]) / o[n];
            for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) o[n] = 2 * t[n + 1] - i[n + 1];
            return [i, o]
        }

        function $(t, n) {
            this._context = t, this._t = n
        }

        function G(t) {
            return new $(t, 0)
        }

        function Q(t) {
            return new $(t, 1)
        }

        function tt(t, n) {
            return t[n]
        }

        function nt(t) {
            for (var n, e = 0, r = -1, i = t.length; ++r < i;)(n = +t[r][1]) && (e += n);
            return e
        }
        var et = function(t) {
                return function() {
                    return t
                }
            },
            rt = Math.abs,
            it = Math.atan2,
            ot = Math.cos,
            ut = Math.max,
            at = Math.min,
            ct = Math.sin,
            st = Math.sqrt,
            ft = 1e-12,
            lt = Math.PI,
            ht = lt / 2,
            pt = 2 * lt,
            dt = function() {
                function t() {
                    var t, i, o = +l.apply(this, arguments),
                        u = +h.apply(this, arguments),
                        a = v.apply(this, arguments) - ht,
                        c = g.apply(this, arguments) - ht,
                        m = rt(c - a),
                        x = c > a;
                    if (_ || (_ = t = n.path()), u < o && (i = u, u = o, o = i), u > ft)
                        if (m > pt - ft) _.moveTo(u * ot(a), u * ct(a)), _.arc(0, 0, u, a, c, !x), o > ft && (_.moveTo(o * ot(c), o * ct(c)), _.arc(0, 0, o, c, a, x));
                        else {
                            var b, w, M = a,
                                S = c,
                                E = a,
                                k = c,
                                N = m,
                                A = m,
                                T = y.apply(this, arguments) / 2,
                                z = T > ft && (d ? +d.apply(this, arguments) : st(o * o + u * u)),
                                C = at(rt(u - o) / 2, +p.apply(this, arguments)),
                                O = C,
                                I = C;
                            if (z > ft) {
                                var L = r(z / o * ct(T)),
                                    P = r(z / u * ct(T));
                                (N -= 2 * L) > ft ? (L *= x ? 1 : -1, E += L, k -= L) : (N = 0, E = k = (a + c) / 2), (A -= 2 * P) > ft ? (P *= x ? 1 : -1, M += P, S -= P) : (A = 0, M = S = (a + c) / 2)
                            }
                            var D = u * ot(M),
                                q = u * ct(M),
                                R = o * ot(k),
                                j = o * ct(k);
                            if (C > ft) {
                                var U = u * ot(S),
                                    F = u * ct(S),
                                    Y = o * ot(E),
                                    H = o * ct(E);
                                if (m < lt) {
                                    var B = N > ft ? s(D, q, Y, H, U, F, R, j) : [R, j],
                                        V = D - B[0],
                                        X = q - B[1],
                                        W = U - B[0],
                                        K = F - B[1],
                                        J = 1 / ct(e((V * W + X * K) / (st(V * V + X * X) * st(W * W + K * K))) / 2),
                                        Z = st(B[0] * B[0] + B[1] * B[1]);
                                    O = at(C, (o - Z) / (J - 1)), I = at(C, (u - Z) / (J + 1))
                                }
                            }
                            A > ft ? I > ft ? (b = f(Y, H, D, q, u, I, x), w = f(U, F, R, j, u, I, x), _.moveTo(b.cx + b.x01, b.cy + b.y01), I < C ? _.arc(b.cx, b.cy, I, it(b.y01, b.x01), it(w.y01, w.x01), !x) : (_.arc(b.cx, b.cy, I, it(b.y01, b.x01), it(b.y11, b.x11), !x), _.arc(0, 0, u, it(b.cy + b.y11, b.cx + b.x11), it(w.cy + w.y11, w.cx + w.x11), !x), _.arc(w.cx, w.cy, I, it(w.y11, w.x11), it(w.y01, w.x01), !x))) : (_.moveTo(D, q), _.arc(0, 0, u, M, S, !x)) : _.moveTo(D, q), o > ft && N > ft ? O > ft ? (b = f(R, j, U, F, o, -O, x), w = f(D, q, Y, H, o, -O, x), _.lineTo(b.cx + b.x01, b.cy + b.y01), O < C ? _.arc(b.cx, b.cy, O, it(b.y01, b.x01), it(w.y01, w.x01), !x) : (_.arc(b.cx, b.cy, O, it(b.y01, b.x01), it(b.y11, b.x11), !x), _.arc(0, 0, o, it(b.cy + b.y11, b.cx + b.x11), it(w.cy + w.y11, w.cx + w.x11), x), _.arc(w.cx, w.cy, O, it(w.y11, w.x11), it(w.y01, w.x01), !x))) : _.arc(0, 0, o, k, E, x) : _.lineTo(R, j)
                        }
                    else _.moveTo(0, 0);
                    if (_.closePath(), t) return _ = null, t + "" || null
                }
                var l = i,
                    h = o,
                    p = et(0),
                    d = null,
                    v = u,
                    g = a,
                    y = c,
                    _ = null;
                return t.centroid = function() {
                    var t = (+l.apply(this, arguments) + +h.apply(this, arguments)) / 2,
                        n = (+v.apply(this, arguments) + +g.apply(this, arguments)) / 2 - lt / 2;
                    return [ot(n) * t, ct(n) * t]
                }, t.innerRadius = function(n) {
                    return arguments.length ? (l = "function" == typeof n ? n : et(+n), t) : l
                }, t.outerRadius = function(n) {
                    return arguments.length ? (h = "function" == typeof n ? n : et(+n), t) : h
                }, t.cornerRadius = function(n) {
                    return arguments.length ? (p = "function" == typeof n ? n : et(+n), t) : p
                }, t.padRadius = function(n) {
                    return arguments.length ? (d = null == n ? null : "function" == typeof n ? n : et(+n), t) : d
                }, t.startAngle = function(n) {
                    return arguments.length ? (v = "function" == typeof n ? n : et(+n), t) : v
                }, t.endAngle = function(n) {
                    return arguments.length ? (g = "function" == typeof n ? n : et(+n), t) : g
                }, t.padAngle = function(n) {
                    return arguments.length ? (y = "function" == typeof n ? n : et(+n), t) : y
                }, t.context = function(n) {
                    return arguments.length ? (_ = null == n ? null : n, t) : _
                }, t
            };
        l.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                    default:
                        this._context.lineTo(t, n)
                }
            }
        };
        var vt = function(t) {
                return new l(t)
            },
            gt = function() {
                function t(t) {
                    var c, s, f, l = t.length,
                        h = !1;
                    for (null == o && (a = u(f = n.path())), c = 0; c <= l; ++c) !(c < l && i(s = t[c], c, t)) === h && ((h = !h) ? a.lineStart() : a.lineEnd()), h && a.point(+e(s, c, t), +r(s, c, t));
                    if (f) return a = null, f + "" || null
                }
                var e = h,
                    r = p,
                    i = et(!0),
                    o = null,
                    u = vt,
                    a = null;
                return t.x = function(n) {
                    return arguments.length ? (e = "function" == typeof n ? n : et(+n), t) : e
                }, t.y = function(n) {
                    return arguments.length ? (r = "function" == typeof n ? n : et(+n), t) : r
                }, t.defined = function(n) {
                    return arguments.length ? (i = "function" == typeof n ? n : et(!!n), t) : i
                }, t.curve = function(n) {
                    return arguments.length ? (u = n, null != o && (a = u(o)), t) : u
                }, t.context = function(n) {
                    return arguments.length ? (null == n ? o = a = null : a = u(o = n), t) : o
                }, t
            },
            yt = function() {
                function t(t) {
                    var e, l, h, p, d, v = t.length,
                        g = !1,
                        y = new Array(v),
                        _ = new Array(v);
                    for (null == c && (f = s(d = n.path())), e = 0; e <= v; ++e) {
                        if (!(e < v && a(p = t[e], e, t)) === g)
                            if (g = !g) l = e, f.areaStart(), f.lineStart();
                            else {
                                for (f.lineEnd(), f.lineStart(), h = e - 1; h >= l; --h) f.point(y[h], _[h]);
                                f.lineEnd(), f.areaEnd()
                            }
                        g && (y[e] = +r(p, e, t), _[e] = +o(p, e, t), f.point(i ? +i(p, e, t) : y[e], u ? +u(p, e, t) : _[e]))
                    }
                    if (d) return f = null, d + "" || null
                }

                function e() {
                    return gt().defined(a).curve(s).context(c)
                }
                var r = h,
                    i = null,
                    o = et(0),
                    u = p,
                    a = et(!0),
                    c = null,
                    s = vt,
                    f = null;
                return t.x = function(n) {
                    return arguments.length ? (r = "function" == typeof n ? n : et(+n), i = null, t) : r
                }, t.x0 = function(n) {
                    return arguments.length ? (r = "function" == typeof n ? n : et(+n), t) : r
                }, t.x1 = function(n) {
                    return arguments.length ? (i = null == n ? null : "function" == typeof n ? n : et(+n), t) : i
                }, t.y = function(n) {
                    return arguments.length ? (o = "function" == typeof n ? n : et(+n), u = null, t) : o
                }, t.y0 = function(n) {
                    return arguments.length ? (o = "function" == typeof n ? n : et(+n), t) : o
                }, t.y1 = function(n) {
                    return arguments.length ? (u = null == n ? null : "function" == typeof n ? n : et(+n), t) : u
                }, t.lineX0 = t.lineY0 = function() {
                    return e().x(r).y(o)
                }, t.lineY1 = function() {
                    return e().x(r).y(u)
                }, t.lineX1 = function() {
                    return e().x(i).y(o)
                }, t.defined = function(n) {
                    return arguments.length ? (a = "function" == typeof n ? n : et(!!n), t) : a
                }, t.curve = function(n) {
                    return arguments.length ? (s = n, null != c && (f = s(c)), t) : s
                }, t.context = function(n) {
                    return arguments.length ? (null == n ? c = f = null : f = s(c = n),
                        t) : c
                }, t
            },
            _t = function(t, n) {
                return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
            },
            mt = function(t) {
                return t
            },
            xt = function() {
                function t(t) {
                    var a, c, s, f, l, h = t.length,
                        p = 0,
                        d = new Array(h),
                        v = new Array(h),
                        g = +i.apply(this, arguments),
                        y = Math.min(pt, Math.max(-pt, o.apply(this, arguments) - g)),
                        _ = Math.min(Math.abs(y) / h, u.apply(this, arguments)),
                        m = _ * (y < 0 ? -1 : 1);
                    for (a = 0; a < h; ++a)(l = v[d[a] = a] = +n(t[a], a, t)) > 0 && (p += l);
                    for (null != e ? d.sort(function(t, n) {
                            return e(v[t], v[n])
                        }) : null != r && d.sort(function(n, e) {
                            return r(t[n], t[e])
                        }), a = 0, s = p ? (y - h * m) / p : 0; a < h; ++a, g = f) c = d[a], l = v[c], f = g + (l > 0 ? l * s : 0) + m, v[c] = {
                        data: t[c],
                        index: a,
                        value: l,
                        startAngle: g,
                        endAngle: f,
                        padAngle: _
                    };
                    return v
                }
                var n = mt,
                    e = _t,
                    r = null,
                    i = et(0),
                    o = et(pt),
                    u = et(0);
                return t.value = function(e) {
                    return arguments.length ? (n = "function" == typeof e ? e : et(+e), t) : n
                }, t.sortValues = function(n) {
                    return arguments.length ? (e = n, r = null, t) : e
                }, t.sort = function(n) {
                    return arguments.length ? (r = n, e = null, t) : r
                }, t.startAngle = function(n) {
                    return arguments.length ? (i = "function" == typeof n ? n : et(+n), t) : i
                }, t.endAngle = function(n) {
                    return arguments.length ? (o = "function" == typeof n ? n : et(+n), t) : o
                }, t.padAngle = function(n) {
                    return arguments.length ? (u = "function" == typeof n ? n : et(+n), t) : u
                }, t
            },
            bt = v(vt);
        d.prototype = {
            areaStart: function() {
                this._curve.areaStart()
            },
            areaEnd: function() {
                this._curve.areaEnd()
            },
            lineStart: function() {
                this._curve.lineStart()
            },
            lineEnd: function() {
                this._curve.lineEnd()
            },
            point: function(t, n) {
                this._curve.point(n * Math.sin(t), n * -Math.cos(t))
            }
        };
        var wt = function() {
                return g(gt().curve(bt))
            },
            Mt = function() {
                var t = yt().curve(bt),
                    n = t.curve,
                    e = t.lineX0,
                    r = t.lineX1,
                    i = t.lineY0,
                    o = t.lineY1;
                return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function() {
                    return g(e())
                }, delete t.lineX0, t.lineEndAngle = function() {
                    return g(r())
                }, delete t.lineX1, t.lineInnerRadius = function() {
                    return g(i())
                }, delete t.lineY0, t.lineOuterRadius = function() {
                    return g(o())
                }, delete t.lineY1, t.curve = function(t) {
                    return arguments.length ? n(v(t)) : n()._curve
                }, t
            },
            St = function(t, n) {
                return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)]
            },
            Et = Array.prototype.slice,
            kt = {
                draw: function(t, n) {
                    var e = Math.sqrt(n / lt);
                    t.moveTo(e, 0), t.arc(0, 0, e, 0, pt)
                }
            },
            Nt = {
                draw: function(t, n) {
                    var e = Math.sqrt(n / 5) / 2;
                    t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath()
                }
            },
            At = Math.sqrt(1 / 3),
            Tt = 2 * At,
            zt = {
                draw: function(t, n) {
                    var e = Math.sqrt(n / Tt),
                        r = e * At;
                    t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath()
                }
            },
            Ct = .8908130915292852,
            Ot = Math.sin(lt / 10) / Math.sin(7 * lt / 10),
            It = Math.sin(pt / 10) * Ot,
            Lt = -Math.cos(pt / 10) * Ot,
            Pt = {
                draw: function(t, n) {
                    var e = Math.sqrt(n * Ct),
                        r = It * e,
                        i = Lt * e;
                    t.moveTo(0, -e), t.lineTo(r, i);
                    for (var o = 1; o < 5; ++o) {
                        var u = pt * o / 5,
                            a = Math.cos(u),
                            c = Math.sin(u);
                        t.lineTo(c * e, -a * e), t.lineTo(a * r - c * i, c * r + a * i)
                    }
                    t.closePath()
                }
            },
            Dt = {
                draw: function(t, n) {
                    var e = Math.sqrt(n),
                        r = -e / 2;
                    t.rect(r, r, e, e)
                }
            },
            qt = Math.sqrt(3),
            Rt = {
                draw: function(t, n) {
                    var e = -Math.sqrt(n / (3 * qt));
                    t.moveTo(0, 2 * e), t.lineTo(-qt * e, -e), t.lineTo(qt * e, -e), t.closePath()
                }
            },
            jt = -.5,
            Ut = Math.sqrt(3) / 2,
            Ft = 1 / Math.sqrt(12),
            Yt = 3 * (Ft / 2 + 1),
            Ht = {
                draw: function(t, n) {
                    var e = Math.sqrt(n / Yt),
                        r = e / 2,
                        i = e * Ft,
                        o = r,
                        u = e * Ft + e,
                        a = -o,
                        c = u;
                    t.moveTo(r, i), t.lineTo(o, u), t.lineTo(a, c), t.lineTo(jt * r - Ut * i, Ut * r + jt * i), t.lineTo(jt * o - Ut * u, Ut * o + jt * u), t.lineTo(jt * a - Ut * c, Ut * a + jt * c), t.lineTo(jt * r + Ut * i, jt * i - Ut * r), t.lineTo(jt * o + Ut * u, jt * u - Ut * o), t.lineTo(jt * a + Ut * c, jt * c - Ut * a), t.closePath()
                }
            },
            Bt = [kt, Nt, zt, Dt, Pt, Rt, Ht],
            Vt = function() {
                function t() {
                    var t;
                    if (i || (i = t = n.path()), e.apply(this, arguments).draw(i, +r.apply(this, arguments)), t) return i = null, t + "" || null
                }
                var e = et(kt),
                    r = et(64),
                    i = null;
                return t.type = function(n) {
                    return arguments.length ? (e = "function" == typeof n ? n : et(n), t) : e
                }, t.size = function(n) {
                    return arguments.length ? (r = "function" == typeof n ? n : et(+n), t) : r
                }, t.context = function(n) {
                    return arguments.length ? (i = null == n ? null : n, t) : i
                }, t
            },
            Xt = function() {};
        N.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 3:
                        k(this, this._x1, this._y1);
                    case 2:
                        this._context.lineTo(this._x1, this._y1)
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                    default:
                        k(this, t, n)
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
            }
        };
        var Wt = function(t) {
            return new N(t)
        };
        A.prototype = {
            areaStart: Xt,
            areaEnd: Xt,
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x2, this._y2), this._context.closePath();
                        break;
                    case 2:
                        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
                }
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._x2 = t, this._y2 = n;
                        break;
                    case 1:
                        this._point = 2, this._x3 = t, this._y3 = n;
                        break;
                    case 2:
                        this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                        break;
                    default:
                        k(this, t, n)
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
            }
        };
        var Kt = function(t) {
            return new A(t)
        };
        T.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3;
                        var e = (this._x0 + 4 * this._x1 + t) / 6,
                            r = (this._y0 + 4 * this._y1 + n) / 6;
                        this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        k(this, t, n)
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
            }
        };
        var Jt = function(t) {
            return new T(t)
        };
        z.prototype = {
            lineStart: function() {
                this._x = [], this._y = [], this._basis.lineStart()
            },
            lineEnd: function() {
                var t = this._x,
                    n = this._y,
                    e = t.length - 1;
                if (e > 0)
                    for (var r, i = t[0], o = n[0], u = t[e] - i, a = n[e] - o, c = -1; ++c <= e;) r = c / e, this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * u), this._beta * n[c] + (1 - this._beta) * (o + r * a));
                this._x = this._y = null, this._basis.lineEnd()
            },
            point: function(t, n) {
                this._x.push(+t), this._y.push(+n)
            }
        };
        var Zt = function t(n) {
            function e(t) {
                return 1 === n ? new N(t) : new z(t, n)
            }
            return e.beta = function(n) {
                return t(+n)
            }, e
        }(.85);
        O.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x2, this._y2);
                        break;
                    case 3:
                        C(this, this._x1, this._y1)
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2, this._x1 = t, this._y1 = n;
                        break;
                    case 2:
                        this._point = 3;
                    default:
                        C(this, t, n)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        var $t = function t(n) {
            function e(t) {
                return new O(t, n)
            }
            return e.tension = function(n) {
                return t(+n)
            }, e
        }(0);
        I.prototype = {
            areaStart: Xt,
            areaEnd: Xt,
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 2:
                        this._context.lineTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                }
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._x3 = t, this._y3 = n;
                        break;
                    case 1:
                        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                        break;
                    case 2:
                        this._point = 3, this._x5 = t, this._y5 = n;
                        break;
                    default:
                        C(this, t, n)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        var Gt = function t(n) {
            function e(t) {
                return new I(t, n)
            }
            return e.tension = function(n) {
                return t(+n)
            }, e
        }(0);
        L.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        C(this, t, n)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        var Qt = function t(n) {
            function e(t) {
                return new L(t, n)
            }
            return e.tension = function(n) {
                return t(+n)
            }, e
        }(0);
        D.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x2, this._y2);
                        break;
                    case 3:
                        this.point(this._x2, this._y2)
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                if (t = +t, n = +n, this._point) {
                    var e = this._x2 - t,
                        r = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3;
                    default:
                        P(this, t, n)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        var tn = function t(n) {
            function e(t) {
                return n ? new D(t, n) : new O(t, 0)
            }
            return e.alpha = function(n) {
                return t(+n)
            }, e
        }(.5);
        q.prototype = {
            areaStart: Xt,
            areaEnd: Xt,
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 2:
                        this._context.lineTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                }
            },
            point: function(t, n) {
                if (t = +t, n = +n, this._point) {
                    var e = this._x2 - t,
                        r = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1, this._x3 = t, this._y3 = n;
                        break;
                    case 1:
                        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                        break;
                    case 2:
                        this._point = 3, this._x5 = t, this._y5 = n;
                        break;
                    default:
                        P(this, t, n)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        var nn = function t(n) {
            function e(t) {
                return n ? new q(t, n) : new I(t, 0)
            }
            return e.alpha = function(n) {
                return t(+n)
            }, e
        }(.5);
        R.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                if (t = +t, n = +n, this._point) {
                    var e = this._x2 - t,
                        r = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        P(this, t, n)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        var en = function t(n) {
            function e(t) {
                return n ? new R(t, n) : new L(t, 0)
            }
            return e.alpha = function(n) {
                return t(+n)
            }, e
        }(.5);
        j.prototype = {
            areaStart: Xt,
            areaEnd: Xt,
            lineStart: function() {
                this._point = 0
            },
            lineEnd: function() {
                this._point && this._context.closePath()
            },
            point: function(t, n) {
                t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
            }
        };
        var rn = function(t) {
            return new j(t)
        };
        B.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x1, this._y1);
                        break;
                    case 3:
                        H(this, this._t0, Y(this, this._t0))
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                var e = NaN;
                if (t = +t, n = +n, t !== this._x1 || n !== this._y1) {
                    switch (this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, H(this, Y(this, e = F(this, t, n)), e);
                            break;
                        default:
                            H(this, this._t0, e = F(this, t, n))
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
                }
            }
        }, (V.prototype = Object.create(B.prototype)).point = function(t, n) {
            B.prototype.point.call(this, n, t)
        }, X.prototype = {
            moveTo: function(t, n) {
                this._context.moveTo(n, t)
            },
            closePath: function() {
                this._context.closePath()
            },
            lineTo: function(t, n) {
                this._context.lineTo(n, t)
            },
            bezierCurveTo: function(t, n, e, r, i, o) {
                this._context.bezierCurveTo(n, t, r, e, o, i)
            }
        }, J.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x = [], this._y = []
            },
            lineEnd: function() {
                var t = this._x,
                    n = this._y,
                    e = t.length;
                if (e)
                    if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);
                    else
                        for (var r = Z(t), i = Z(n), o = 0, u = 1; u < e; ++o, ++u) this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[u], n[u]);
                (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
            },
            point: function(t, n) {
                this._x.push(+t), this._y.push(+n)
            }
        };
        var on = function(t) {
            return new J(t)
        };
        $.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x = this._y = NaN, this._point = 0
            },
            lineEnd: function() {
                0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                    default:
                        if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);
                        else {
                            var e = this._x * (1 - this._t) + t * this._t;
                            this._context.lineTo(e, this._y), this._context.lineTo(e, n)
                        }
                }
                this._x = t, this._y = n
            }
        };
        var un = function(t) {
                return new $(t, .5)
            },
            an = function(t, n) {
                if ((i = t.length) > 1)
                    for (var e, r, i, o = 1, u = t[n[0]], a = u.length; o < i; ++o)
                        for (r = u, u = t[n[o]], e = 0; e < a; ++e) u[e][1] += u[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1]
            },
            cn = function(t) {
                for (var n = t.length, e = new Array(n); --n >= 0;) e[n] = n;
                return e
            },
            sn = function() {
                function t(t) {
                    var o, u, a = n.apply(this, arguments),
                        c = t.length,
                        s = a.length,
                        f = new Array(s);
                    for (o = 0; o < s; ++o) {
                        for (var l, h = a[o], p = f[o] = new Array(c), d = 0; d < c; ++d) p[d] = l = [0, +i(t[d], h, d, t)], l.data = t[d];
                        p.key = h
                    }
                    for (o = 0, u = e(f); o < s; ++o) f[u[o]].index = o;
                    return r(f, u), f
                }
                var n = et([]),
                    e = cn,
                    r = an,
                    i = tt;
                return t.keys = function(e) {
                    return arguments.length ? (n = "function" == typeof e ? e : et(Et.call(e)), t) : n
                }, t.value = function(n) {
                    return arguments.length ? (i = "function" == typeof n ? n : et(+n), t) : i
                }, t.order = function(n) {
                    return arguments.length ? (e = null == n ? cn : "function" == typeof n ? n : et(Et.call(n)), t) : e
                }, t.offset = function(n) {
                    return arguments.length ? (r = null == n ? an : n, t) : r
                }, t
            },
            fn = function(t, n) {
                if ((r = t.length) > 0) {
                    for (var e, r, i, o = 0, u = t[0].length; o < u; ++o) {
                        for (i = e = 0; e < r; ++e) i += t[e][o][1] || 0;
                        if (i)
                            for (e = 0; e < r; ++e) t[e][o][1] /= i
                    }
                    an(t, n)
                }
            },
            ln = function(t, n) {
                if ((a = t.length) > 1)
                    for (var e, r, i, o, u, a, c = 0, s = t[n[0]].length; c < s; ++c)
                        for (o = u = 0, e = 0; e < a; ++e)(i = (r = t[n[e]][c])[1] - r[0]) >= 0 ? (r[0] = o, r[1] = o += i) : i < 0 ? (r[1] = u, r[0] = u += i) : r[0] = o
            },
            hn = function(t, n) {
                if ((e = t.length) > 0) {
                    for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
                        for (var u = 0, a = 0; u < e; ++u) a += t[u][r][1] || 0;
                        i[r][1] += i[r][0] = -a / 2
                    }
                    an(t, n)
                }
            },
            pn = function(t, n) {
                if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
                    for (var e, r, i, o = 0, u = 1; u < r; ++u) {
                        for (var a = 0, c = 0, s = 0; a < i; ++a) {
                            for (var f = t[n[a]], l = f[u][1] || 0, h = f[u - 1][1] || 0, p = (l - h) / 2, d = 0; d < a; ++d) {
                                var v = t[n[d]],
                                    g = v[u][1] || 0,
                                    y = v[u - 1][1] || 0;
                                p += g - y
                            }
                            c += l, s += p * l
                        }
                        e[u - 1][1] += e[u - 1][0] = o, c && (o -= s / c)
                    }
                    e[u - 1][1] += e[u - 1][0] = o, an(t, n)
                }
            },
            dn = function(t) {
                var n = t.map(nt);
                return cn(t).sort(function(t, e) {
                    return n[t] - n[e]
                })
            },
            vn = function(t) {
                return dn(t).reverse()
            },
            gn = function(t) {
                var n, e, r = t.length,
                    i = t.map(nt),
                    o = cn(t).sort(function(t, n) {
                        return i[n] - i[t]
                    }),
                    u = 0,
                    a = 0,
                    c = [],
                    s = [];
                for (n = 0; n < r; ++n) e = o[n], u < a ? (u += i[e], c.push(e)) : (a += i[e], s.push(e));
                return s.reverse().concat(c)
            },
            yn = function(t) {
                return cn(t).reverse()
            };
        t.arc = dt, t.area = yt, t.line = gt, t.pie = xt, t.areaRadial = Mt, t.radialArea = Mt, t.lineRadial = wt, t.radialLine = wt, t.pointRadial = St, t.linkHorizontal = M, t.linkVertical = S, t.linkRadial = E, t.symbol = Vt, t.symbols = Bt, t.symbolCircle = kt, t.symbolCross = Nt, t.symbolDiamond = zt, t.symbolSquare = Dt, t.symbolStar = Pt, t.symbolTriangle = Rt, t.symbolWye = Ht, t.curveBasisClosed = Kt, t.curveBasisOpen = Jt, t.curveBasis = Wt, t.curveBundle = Zt, t.curveCardinalClosed = Gt, t.curveCardinalOpen = Qt, t.curveCardinal = $t, t.curveCatmullRomClosed = nn, t.curveCatmullRomOpen = en, t.curveCatmullRom = tn, t.curveLinearClosed = rn, t.curveLinear = vt, t.curveMonotoneX = W, t.curveMonotoneY = K, t.curveNatural = on, t.curveStep = un, t.curveStepAfter = Q, t.curveStepBefore = G, t.stack = sn, t.stackOffsetExpand = fn, t.stackOffsetDiverging = ln, t.stackOffsetNone = an, t.stackOffsetSilhouette = hn, t.stackOffsetWiggle = pn, t.stackOrderAscending = dn, t.stackOrderDescending = vn, t.stackOrderInsideOut = gn, t.stackOrderNone = cn, t.stackOrderReverse = yn, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, e) {
        e(n)
    }(this, function(t) {
        "use strict";

        function n(t) {
            return t[0]
        }

        function e(t) {
            return t[1]
        }

        function r() {
            this._ = null
        }

        function i(t) {
            t.U = t.C = t.L = t.R = t.P = t.N = null
        }

        function o(t, n) {
            var e = n,
                r = n.R,
                i = e.U;
            i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
        }

        function u(t, n) {
            var e = n,
                r = n.L,
                i = e.U;
            i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
        }

        function a(t) {
            for (; t.L;) t = t.L;
            return t
        }

        function c(t, n, e, r) {
            var i = [null, null],
                o = R.push(i) - 1;
            return i.left = t, i.right = n, e && f(i, t, n, e), r && f(i, n, t, r), D[t.index].halfedges.push(o), D[n.index].halfedges.push(o), i
        }

        function s(t, n, e) {
            var r = [n, e];
            return r.left = t, r
        }

        function f(t, n, e, r) {
            t[0] || t[1] ? t.left === e ? t[1] = r : t[0] = r : (t[0] = r, t.left = n, t.right = e)
        }

        function l(t, n, e, r, i) {
            var o, u = t[0],
                a = t[1],
                c = u[0],
                s = u[1],
                f = a[0],
                l = a[1],
                h = 0,
                p = 1,
                d = f - c,
                v = l - s;
            if (o = n - c, d || !(o > 0)) {
                if (o /= d, d < 0) {
                    if (o < h) return;
                    o < p && (p = o)
                } else if (d > 0) {
                    if (o > p) return;
                    o > h && (h = o)
                }
                if (o = r - c, d || !(o < 0)) {
                    if (o /= d, d < 0) {
                        if (o > p) return;
                        o > h && (h = o)
                    } else if (d > 0) {
                        if (o < h) return;
                        o < p && (p = o)
                    }
                    if (o = e - s, v || !(o > 0)) {
                        if (o /= v, v < 0) {
                            if (o < h) return;
                            o < p && (p = o)
                        } else if (v > 0) {
                            if (o > p) return;
                            o > h && (h = o)
                        }
                        if (o = i - s, v || !(o < 0)) {
                            if (o /= v, v < 0) {
                                if (o > p) return;
                                o > h && (h = o)
                            } else if (v > 0) {
                                if (o < h) return;
                                o < p && (p = o)
                            }
                            return !(h > 0 || p < 1) || (h > 0 && (t[0] = [c + h * d, s + h * v]), p < 1 && (t[1] = [c + p * d, s + p * v]), !0)
                        }
                    }
                }
            }
        }

        function h(t, n, e, r, i) {
            var o = t[1];
            if (o) return !0;
            var u, a, c = t[0],
                s = t.left,
                f = t.right,
                l = s[0],
                h = s[1],
                p = f[0],
                d = f[1],
                v = (l + p) / 2,
                g = (h + d) / 2;
            if (d === h) {
                if (v < n || v >= r) return;
                if (l > p) {
                    if (c) {
                        if (c[1] >= i) return
                    } else c = [v, e];
                    o = [v, i]
                } else {
                    if (c) {
                        if (c[1] < e) return
                    } else c = [v, i];
                    o = [v, e]
                }
            } else if (u = (l - p) / (d - h), a = g - u * v, u < -1 || u > 1)
                if (l > p) {
                    if (c) {
                        if (c[1] >= i) return
                    } else c = [(e - a) / u, e];
                    o = [(i - a) / u, i]
                } else {
                    if (c) {
                        if (c[1] < e) return
                    } else c = [(i - a) / u, i];
                    o = [(e - a) / u, e]
                }
            else if (h < d) {
                if (c) {
                    if (c[0] >= r) return
                } else c = [n, u * n + a];
                o = [r, u * r + a]
            } else {
                if (c) {
                    if (c[0] < n) return
                } else c = [r, u * r + a];
                o = [n, u * n + a]
            }
            return t[0] = c, t[1] = o, !0
        }

        function p(t, n, e, r) {
            for (var i, o = R.length; o--;) h(i = R[o], t, n, e, r) && l(i, t, n, e, r) && (Math.abs(i[0][0] - i[1][0]) > F || Math.abs(i[0][1] - i[1][1]) > F) || delete R[o]
        }

        function d(t) {
            return D[t.index] = {
                site: t,
                halfedges: []
            }
        }

        function v(t, n) {
            var e = t.site,
                r = n.left,
                i = n.right;
            return e === i && (i = r, r = e), i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1], i = n[0]) : (r = n[0], i = n[1]), Math.atan2(r[0] - i[0], i[1] - r[1]))
        }

        function g(t, n) {
            return n[+(n.left !== t.site)]
        }

        function y(t, n) {
            return n[+(n.left === t.site)]
        }

        function _() {
            for (var t, n, e, r, i = 0, o = D.length; i < o; ++i)
                if ((t = D[i]) && (r = (n = t.halfedges).length)) {
                    var u = new Array(r),
                        a = new Array(r);
                    for (e = 0; e < r; ++e) u[e] = e, a[e] = v(t, R[n[e]]);
                    for (u.sort(function(t, n) {
                            return a[n] - a[t]
                        }), e = 0; e < r; ++e) a[e] = n[u[e]];
                    for (e = 0; e < r; ++e) n[e] = a[e]
                }
        }

        function m(t, n, e, r) {
            var i, o, u, a, c, f, l, h, p, d, v, _, m = D.length,
                x = !0;
            for (i = 0; i < m; ++i)
                if (o = D[i]) {
                    for (u = o.site, c = o.halfedges, a = c.length; a--;) R[c[a]] || c.splice(a, 1);
                    for (a = 0, f = c.length; a < f;) d = y(o, R[c[a]]), v = d[0], _ = d[1], l = g(o, R[c[++a % f]]), h = l[0], p = l[1], (Math.abs(v - h) > F || Math.abs(_ - p) > F) && (c.splice(a, 0, R.push(s(u, d, Math.abs(v - t) < F && r - _ > F ? [t, Math.abs(h - t) < F ? p : r] : Math.abs(_ - r) < F && e - v > F ? [Math.abs(p - r) < F ? h : e, r] : Math.abs(v - e) < F && _ - n > F ? [e, Math.abs(h - e) < F ? p : n] : Math.abs(_ - n) < F && v - t > F ? [Math.abs(p - n) < F ? h : t, n] : null)) - 1), ++f);
                    f && (x = !1)
                }
            if (x) {
                var b, w, M, S = 1 / 0;
                for (i = 0, x = null; i < m; ++i)(o = D[i]) && (u = o.site, b = u[0] - t, w = u[1] - n, M = b * b + w * w, M < S && (S = M, x = o));
                if (x) {
                    var E = [t, n],
                        k = [t, r],
                        N = [e, r],
                        A = [e, n];
                    x.halfedges.push(R.push(s(u = x.site, E, k)) - 1, R.push(s(u, k, N)) - 1, R.push(s(u, N, A)) - 1, R.push(s(u, A, E)) - 1)
                }
            }
            for (i = 0; i < m; ++i)(o = D[i]) && (o.halfedges.length || delete D[i])
        }

        function x() {
            i(this), this.x = this.y = this.arc = this.site = this.cy = null
        }

        function b(t) {
            var n = t.P,
                e = t.N;
            if (n && e) {
                var r = n.site,
                    i = t.site,
                    o = e.site;
                if (r !== o) {
                    var u = i[0],
                        a = i[1],
                        c = r[0] - u,
                        s = r[1] - a,
                        f = o[0] - u,
                        l = o[1] - a,
                        h = 2 * (c * l - s * f);
                    if (!(h >= -Y)) {
                        var p = c * c + s * s,
                            d = f * f + l * l,
                            v = (l * p - s * d) / h,
                            g = (c * d - f * p) / h,
                            y = j.pop() || new x;
                        y.arc = t, y.site = i, y.x = v + u, y.y = (y.cy = g + a) + Math.sqrt(v * v + g * g), t.circle = y;
                        for (var _ = null, m = q._; m;)
                            if (y.y < m.y || y.y === m.y && y.x <= m.x) {
                                if (!m.L) {
                                    _ = m.P;
                                    break
                                }
                                m = m.L
                            } else {
                                if (!m.R) {
                                    _ = m;
                                    break
                                }
                                m = m.R
                            }
                        q.insert(_, y), _ || (L = y)
                    }
                }
            }
        }

        function w(t) {
            var n = t.circle;
            n && (n.P || (L = n.N), q.remove(n), j.push(n), i(n), t.circle = null)
        }

        function M() {
            i(this), this.edge = this.site = this.circle = null
        }

        function S(t) {
            var n = U.pop() || new M;
            return n.site = t, n
        }

        function E(t) {
            w(t), P.remove(t), U.push(t), i(t)
        }

        function k(t) {
            var n = t.circle,
                e = n.x,
                r = n.cy,
                i = [e, r],
                o = t.P,
                u = t.N,
                a = [t];
            E(t);
            for (var s = o; s.circle && Math.abs(e - s.circle.x) < F && Math.abs(r - s.circle.cy) < F;) o = s.P, a.unshift(s), E(s), s = o;
            a.unshift(s), w(s);
            for (var l = u; l.circle && Math.abs(e - l.circle.x) < F && Math.abs(r - l.circle.cy) < F;) u = l.N, a.push(l), E(l), l = u;
            a.push(l), w(l);
            var h, p = a.length;
            for (h = 1; h < p; ++h) l = a[h], s = a[h - 1], f(l.edge, s.site, l.site, i);
            s = a[0], l = a[p - 1], l.edge = c(s.site, l.site, null, i), b(s), b(l)
        }

        function N(t) {
            for (var n, e, r, i, o = t[0], u = t[1], a = P._; a;)
                if (r = A(a, u) - o, r > F) a = a.L;
                else {
                    if (i = o - T(a, u), !(i > F)) {
                        r > -F ? (n = a.P, e = a) : i > -F ? (n = a, e = a.N) : n = e = a;
                        break
                    }
                    if (!a.R) {
                        n = a;
                        break
                    }
                    a = a.R
                }
            d(t);
            var s = S(t);
            if (P.insert(n, s), n || e) {
                if (n === e) return w(n), e = S(n.site), P.insert(s, e), s.edge = e.edge = c(n.site, s.site), b(n), void b(e);
                if (!e) return void(s.edge = c(n.site, s.site));
                w(n), w(e);
                var l = n.site,
                    h = l[0],
                    p = l[1],
                    v = t[0] - h,
                    g = t[1] - p,
                    y = e.site,
                    _ = y[0] - h,
                    m = y[1] - p,
                    x = 2 * (v * m - g * _),
                    M = v * v + g * g,
                    E = _ * _ + m * m,
                    k = [(m * M - g * E) / x + h, (v * E - _ * M) / x + p];
                f(e.edge, l, y, k), s.edge = c(l, t, null, k), e.edge = c(t, y, null, k), b(n), b(e)
            }
        }

        function A(t, n) {
            var e = t.site,
                r = e[0],
                i = e[1],
                o = i - n;
            if (!o) return r;
            var u = t.P;
            if (!u) return -(1 / 0);
            e = u.site;
            var a = e[0],
                c = e[1],
                s = c - n;
            if (!s) return a;
            var f = a - r,
                l = 1 / o - 1 / s,
                h = f / s;
            return l ? (-h + Math.sqrt(h * h - 2 * l * (f * f / (-2 * s) - c + s / 2 + i - o / 2))) / l + r : (r + a) / 2
        }

        function T(t, n) {
            var e = t.N;
            if (e) return A(e, n);
            var r = t.site;
            return r[1] === n ? r[0] : 1 / 0
        }

        function z(t, n, e) {
            return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1])
        }

        function C(t, n) {
            return n[1] - t[1] || n[0] - t[0]
        }

        function O(t, n) {
            var e, i, o, u = t.sort(C).pop();
            for (R = [], D = new Array(t.length), P = new r, q = new r;;)
                if (o = L, u && (!o || u[1] < o.y || u[1] === o.y && u[0] < o.x)) u[0] === e && u[1] === i || (N(u), e = u[0], i = u[1]), u = t.pop();
                else {
                    if (!o) break;
                    k(o.arc)
                }
            if (_(), n) {
                var a = +n[0][0],
                    c = +n[0][1],
                    s = +n[1][0],
                    f = +n[1][1];
                p(a, c, s, f), m(a, c, s, f)
            }
            this.edges = R, this.cells = D, P = q = R = D = null
        }
        var I = function(t) {
            return function() {
                return t
            }
        };
        r.prototype = {
            constructor: r,
            insert: function(t, n) {
                var e, r, i;
                if (t) {
                    if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                        for (t = t.R; t.L;) t = t.L;
                        t.L = n
                    } else t.R = n;
                    e = t
                } else this._ ? (t = a(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
                for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) r = e.U, e === r.L ? (i = r.R, i && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (o(this, e), t = e, e = t.U), e.C = !1, r.C = !0, u(this, r))) : (i = r.L, i && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (u(this, e), t = e, e = t.U), e.C = !1, r.C = !0, o(this, r))), e = t.U;
                this._.C = !1
            },
            remove: function(t) {
                t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
                var n, e, r, i = t.U,
                    c = t.L,
                    s = t.R;
                if (e = c ? s ? a(s) : c : s, i ? i.L === t ? i.L = e : i.R = e : this._ = e, c && s ? (r = e.C, e.C = t.C, e.L = c, c.U = e, e !== s ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = s, s.U = e) : (e.U = i, i = e, t = e.R)) : (r = t.C, t = e), t && (t.U = i), !r) {
                    if (t && t.C) return void(t.C = !1);
                    do {
                        if (t === this._) break;
                        if (t === i.L) {
                            if (n = i.R, n.C && (n.C = !1, i.C = !0, o(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) {
                                n.R && n.R.C || (n.L.C = !1, n.C = !0, u(this, n), n = i.R), n.C = i.C, i.C = n.R.C = !1, o(this, i), t = this._;
                                break
                            }
                        } else if (n = i.L, n.C && (n.C = !1, i.C = !0, u(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) {
                            n.L && n.L.C || (n.R.C = !1, n.C = !0, o(this, n), n = i.L), n.C = i.C, i.C = n.L.C = !1, u(this, i), t = this._;
                            break
                        }
                        n.C = !0, t = i, i = i.U
                    } while (!t.C);
                    t && (t.C = !1)
                }
            }
        };
        var L, P, D, q, R, j = [],
            U = [],
            F = 1e-6,
            Y = 1e-12;
        O.prototype = {
            constructor: O,
            polygons: function() {
                var t = this.edges;
                return this.cells.map(function(n) {
                    var e = n.halfedges.map(function(e) {
                        return g(n, t[e])
                    });
                    return e.data = n.site.data, e
                })
            },
            triangles: function() {
                var t = [],
                    n = this.edges;
                return this.cells.forEach(function(e, r) {
                    if (o = (i = e.halfedges).length)
                        for (var i, o, u, a = e.site, c = -1, s = n[i[o - 1]], f = s.left === a ? s.right : s.left; ++c < o;) u = f, s = n[i[c]], f = s.left === a ? s.right : s.left, u && f && r < u.index && r < f.index && z(a, u, f) < 0 && t.push([a.data, u.data, f.data])
                }), t
            },
            links: function() {
                return this.edges.filter(function(t) {
                    return t.right
                }).map(function(t) {
                    return {
                        source: t.left.data,
                        target: t.right.data
                    }
                })
            },
            find: function(t, n, e) {
                for (var r, i, o = this, u = o._found || 0, a = o.cells.length; !(i = o.cells[u]);)
                    if (++u >= a) return null;
                var c = t - i.site[0],
                    s = n - i.site[1],
                    f = c * c + s * s;
                do i = o.cells[r = u], u = null, i.halfedges.forEach(function(e) {
                    var r = o.edges[e],
                        a = r.left;
                    if (a !== i.site && a || (a = r.right)) {
                        var c = t - a[0],
                            s = n - a[1],
                            l = c * c + s * s;
                        l < f && (f = l, u = a.index)
                    }
                }); while (null !== u);
                return o._found = r, null == e || f <= e * e ? i.site : null
            }
        };
        var H = function() {
            function t(t) {
                return new O(t.map(function(n, e) {
                    var o = [Math.round(r(n, e, t) / F) * F, Math.round(i(n, e, t) / F) * F];
                    return o.index = e, o.data = n, o
                }), o)
            }
            var r = n,
                i = e,
                o = null;
            return t.polygons = function(n) {
                return t(n).polygons()
            }, t.links = function(n) {
                return t(n).links()
            }, t.triangles = function(n) {
                return t(n).triangles()
            }, t.x = function(n) {
                return arguments.length ? (r = "function" == typeof n ? n : I(+n), t) : r
            }, t.y = function(n) {
                return arguments.length ? (i = "function" == typeof n ? n : I(+n), t) : i
            }, t.extent = function(n) {
                return arguments.length ? (o = null == n ? null : [
                    [+n[0][0], +n[0][1]],
                    [+n[1][0], +n[1][1]]
                ], t) : o && [
                    [o[0][0], o[0][1]],
                    [o[1][0], o[1][1]]
                ]
            }, t.size = function(n) {
                return arguments.length ? (o = null == n ? null : [
                    [0, 0],
                    [+n[0], +n[1]]
                ], t) : o && [o[1][0] - o[0][0], o[1][1] - o[0][1]]
            }, t
        };
        t.voronoi = H, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n, e) {
    ! function(t, r) {
        r(n, e(6), e(7), e(9), e(8), e(11))
    }(this, function(t, n, e, r, i, o) {
        "use strict";

        function u(t, n, e) {
            this.target = t, this.type = n, this.transform = e
        }

        function a(t, n, e) {
            this.k = t, this.x = n, this.y = e
        }

        function c(t) {
            return t.__zoom || g
        }

        function s() {
            i.event.stopImmediatePropagation()
        }

        function f() {
            return !i.event.button
        }

        function l() {
            var t, n, e = this;
            return e instanceof SVGElement ? (e = e.ownerSVGElement || e, t = e.width.baseVal.value, n = e.height.baseVal.value) : (t = e.clientWidth, n = e.clientHeight), [
                [0, 0],
                [t, n]
            ]
        }

        function h() {
            return this.__zoom || g
        }

        function p() {
            return -i.event.deltaY * (i.event.deltaMode ? 120 : 1) / 500
        }

        function d() {
            return "ontouchstart" in this
        }
        var v = function(t) {
            return function() {
                return t
            }
        };
        a.prototype = {
            constructor: a,
            scale: function(t) {
                return 1 === t ? this : new a(this.k * t, this.x, this.y)
            },
            translate: function(t, n) {
                return 0 === t & 0 === n ? this : new a(this.k, this.x + this.k * t, this.y + this.k * n)
            },
            apply: function(t) {
                return [t[0] * this.k + this.x, t[1] * this.k + this.y]
            },
            applyX: function(t) {
                return t * this.k + this.x
            },
            applyY: function(t) {
                return t * this.k + this.y
            },
            invert: function(t) {
                return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
            },
            invertX: function(t) {
                return (t - this.x) / this.k
            },
            invertY: function(t) {
                return (t - this.y) / this.k
            },
            rescaleX: function(t) {
                return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
            },
            rescaleY: function(t) {
                return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
            },
            toString: function() {
                return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
            }
        };
        var g = new a(1, 0, 0);
        c.prototype = a.prototype;
        var y = function() {
                i.event.preventDefault(), i.event.stopImmediatePropagation()
            },
            _ = function() {
                function t(t) {
                    t.property("__zoom", h).on("wheel.zoom", S).on("mousedown.zoom", E).on("dblclick.zoom", k).filter(P).on("touchstart.zoom", N).on("touchmove.zoom", A).on("touchend.zoom touchcancel.zoom", T).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
                }

                function c(t, n) {
                    return n = Math.max(D, Math.min(q, n)), n === t.k ? t : new a(n, t.x, t.y)
                }

                function _(t, n, e) {
                    var r = n[0] - e[0] * t.k,
                        i = n[1] - e[1] * t.k;
                    return r === t.x && i === t.y ? t : new a(t.k, r, i)
                }

                function m(t, n) {
                    var e = t.invertX(n[0][0]) - R,
                        r = t.invertX(n[1][0]) - j,
                        i = t.invertY(n[0][1]) - U,
                        o = t.invertY(n[1][1]) - F;
                    return t.translate(r > e ? (e + r) / 2 : Math.min(0, e) || Math.max(0, r), o > i ? (i + o) / 2 : Math.min(0, i) || Math.max(0, o))
                }

                function x(t) {
                    return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
                }

                function b(t, n, e) {
                    t.on("start.zoom", function() {
                        w(this, arguments).start()
                    }).on("interrupt.zoom end.zoom", function() {
                        w(this, arguments).end()
                    }).tween("zoom", function() {
                        var t = this,
                            r = arguments,
                            i = w(t, r),
                            o = I.apply(t, r),
                            u = e || x(o),
                            c = Math.max(o[1][0] - o[0][0], o[1][1] - o[0][1]),
                            s = t.__zoom,
                            f = "function" == typeof n ? n.apply(t, r) : n,
                            l = H(s.invert(u).concat(c / s.k), f.invert(u).concat(c / f.k));
                        return function(t) {
                            if (1 === t) t = f;
                            else {
                                var n = l(t),
                                    e = c / n[2];
                                t = new a(e, u[0] - n[0] * e, u[1] - n[1] * e)
                            }
                            i.zoom(null, t)
                        }
                    })
                }

                function w(t, n) {
                    for (var e, r = 0, i = B.length; r < i; ++r)
                        if ((e = B[r]).that === t) return e;
                    return new M(t, n)
                }

                function M(t, n) {
                    this.that = t, this.args = n, this.index = -1, this.active = 0, this.extent = I.apply(t, n)
                }

                function S() {
                    function t() {
                        n.wheel = null, n.end()
                    }
                    if (O.apply(this, arguments)) {
                        var n = w(this, arguments),
                            e = this.__zoom,
                            r = Math.max(D, Math.min(q, e.k * Math.pow(2, L.apply(this, arguments)))),
                            u = i.mouse(this);
                        if (n.wheel) n.mouse[0][0] === u[0] && n.mouse[0][1] === u[1] || (n.mouse[1] = e.invert(n.mouse[0] = u)), clearTimeout(n.wheel);
                        else {
                            if (e.k === r) return;
                            n.mouse = [u, e.invert(u)], o.interrupt(this), n.start()
                        }
                        y(), n.wheel = setTimeout(t, W), n.zoom("mouse", m(_(c(e, r), n.mouse[0], n.mouse[1]), n.extent))
                    }
                }

                function E() {
                    function t() {
                        if (y(), !r.moved) {
                            var t = i.event.clientX - c,
                                n = i.event.clientY - f;
                            r.moved = t * t + n * n > K
                        }
                        r.zoom("mouse", m(_(r.that.__zoom, r.mouse[0] = i.mouse(r.that), r.mouse[1]), r.extent))
                    }

                    function n() {
                        u.on("mousemove.zoom mouseup.zoom", null), e.dragEnable(i.event.view, r.moved), y(), r.end()
                    }
                    if (!C && O.apply(this, arguments)) {
                        var r = w(this, arguments),
                            u = i.select(i.event.view).on("mousemove.zoom", t, !0).on("mouseup.zoom", n, !0),
                            a = i.mouse(this),
                            c = i.event.clientX,
                            f = i.event.clientY;
                        e.dragDisable(i.event.view), s(), r.mouse = [a, this.__zoom.invert(a)], o.interrupt(this), r.start()
                    }
                }

                function k() {
                    if (O.apply(this, arguments)) {
                        var n = this.__zoom,
                            e = i.mouse(this),
                            r = n.invert(e),
                            o = n.k * (i.event.shiftKey ? .5 : 2),
                            u = m(_(c(n, o), e, r), I.apply(this, arguments));
                        y(), Y > 0 ? i.select(this).transition().duration(Y).call(b, u, e) : i.select(this).call(t.transform, u)
                    }
                }

                function N() {
                    if (O.apply(this, arguments)) {
                        var t, n, e, r, u = w(this, arguments),
                            a = i.event.changedTouches,
                            c = a.length;
                        for (s(), n = 0; n < c; ++n) e = a[n], r = i.touch(this, a, e.identifier), r = [r, this.__zoom.invert(r), e.identifier], u.touch0 ? u.touch1 || (u.touch1 = r) : (u.touch0 = r, t = !0);
                        return z && (z = clearTimeout(z), !u.touch1) ? (u.end(), r = i.select(this).on("dblclick.zoom"), void(r && r.apply(this, arguments))) : void(t && (z = setTimeout(function() {
                            z = null
                        }, X), o.interrupt(this), u.start()))
                    }
                }

                function A() {
                    var t, n, e, r, o = w(this, arguments),
                        u = i.event.changedTouches,
                        a = u.length;
                    for (y(), z && (z = clearTimeout(z)), t = 0; t < a; ++t) n = u[t], e = i.touch(this, u, n.identifier), o.touch0 && o.touch0[2] === n.identifier ? o.touch0[0] = e : o.touch1 && o.touch1[2] === n.identifier && (o.touch1[0] = e);
                    if (n = o.that.__zoom, o.touch1) {
                        var s = o.touch0[0],
                            f = o.touch0[1],
                            l = o.touch1[0],
                            h = o.touch1[1],
                            p = (p = l[0] - s[0]) * p + (p = l[1] - s[1]) * p,
                            d = (d = h[0] - f[0]) * d + (d = h[1] - f[1]) * d;
                        n = c(n, Math.sqrt(p / d)), e = [(s[0] + l[0]) / 2, (s[1] + l[1]) / 2], r = [(f[0] + h[0]) / 2, (f[1] + h[1]) / 2]
                    } else {
                        if (!o.touch0) return;
                        e = o.touch0[0], r = o.touch0[1]
                    }
                    o.zoom("touch", m(_(n, e, r), o.extent))
                }

                function T() {
                    var t, n, e = w(this, arguments),
                        r = i.event.changedTouches,
                        o = r.length;
                    for (s(), C && clearTimeout(C), C = setTimeout(function() {
                            C = null
                        }, X), t = 0; t < o; ++t) n = r[t], e.touch0 && e.touch0[2] === n.identifier ? delete e.touch0 : e.touch1 && e.touch1[2] === n.identifier && delete e.touch1;
                    e.touch1 && !e.touch0 && (e.touch0 = e.touch1, delete e.touch1), e.touch0 ? e.touch0[1] = this.__zoom.invert(e.touch0[0]) : e.end()
                }
                var z, C, O = f,
                    I = l,
                    L = p,
                    P = d,
                    D = 0,
                    q = 1 / 0,
                    R = -q,
                    j = q,
                    U = R,
                    F = j,
                    Y = 250,
                    H = r.interpolateZoom,
                    B = [],
                    V = n.dispatch("start", "zoom", "end"),
                    X = 500,
                    W = 150,
                    K = 0;
                return t.transform = function(t, n) {
                    var e = t.selection ? t.selection() : t;
                    e.property("__zoom", h), t !== e ? b(t, n) : e.interrupt().each(function() {
                        w(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
                    })
                }, t.scaleBy = function(n, e) {
                    t.scaleTo(n, function() {
                        var t = this.__zoom.k,
                            n = "function" == typeof e ? e.apply(this, arguments) : e;
                        return t * n
                    })
                }, t.scaleTo = function(n, e) {
                    t.transform(n, function() {
                        var t = I.apply(this, arguments),
                            n = this.__zoom,
                            r = x(t),
                            i = n.invert(r),
                            o = "function" == typeof e ? e.apply(this, arguments) : e;
                        return m(_(c(n, o), r, i), t)
                    })
                }, t.translateBy = function(n, e, r) {
                    t.transform(n, function() {
                        return m(this.__zoom.translate("function" == typeof e ? e.apply(this, arguments) : e, "function" == typeof r ? r.apply(this, arguments) : r), I.apply(this, arguments))
                    })
                }, t.translateTo = function(n, e, r) {
                    t.transform(n, function() {
                        var t = I.apply(this, arguments),
                            n = this.__zoom,
                            i = x(t);
                        return m(g.translate(i[0], i[1]).scale(n.k).translate("function" == typeof e ? -e.apply(this, arguments) : -e, "function" == typeof r ? -r.apply(this, arguments) : -r), t)
                    })
                }, M.prototype = {
                    start: function() {
                        return 1 === ++this.active && (this.index = B.push(this) - 1, this.emit("start")), this
                    },
                    zoom: function(t, n) {
                        return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this
                    },
                    end: function() {
                        return 0 === --this.active && (B.splice(this.index, 1), this.index = -1, this.emit("end")), this
                    },
                    emit: function(n) {
                        i.customEvent(new u(t, n, this.that.__zoom), V.apply, V, [n, this.that, this.args])
                    }
                }, t.wheelDelta = function(n) {
                    return arguments.length ? (L = "function" == typeof n ? n : v(+n), t) : L
                }, t.filter = function(n) {
                    return arguments.length ? (O = "function" == typeof n ? n : v(!!n), t) : O
                }, t.touchable = function(n) {
                    return arguments.length ? (P = "function" == typeof n ? n : v(!!n), t) : P
                }, t.extent = function(n) {
                    return arguments.length ? (I = "function" == typeof n ? n : v([
                        [+n[0][0], +n[0][1]],
                        [+n[1][0], +n[1][1]]
                    ]), t) : I
                }, t.scaleExtent = function(n) {
                    return arguments.length ? (D = +n[0], q = +n[1], t) : [D, q]
                }, t.translateExtent = function(n) {
                    return arguments.length ? (R = +n[0][0], j = +n[1][0], U = +n[0][1], F = +n[1][1], t) : [
                        [R, U],
                        [j, F]
                    ]
                }, t.duration = function(n) {
                    return arguments.length ? (Y = +n, t) : Y
                }, t.interpolate = function(n) {
                    return arguments.length ? (H = n, t) : H
                }, t.on = function() {
                    var n = V.on.apply(V, arguments);
                    return n === V ? t : n
                }, t.clickDistance = function(n) {
                    return arguments.length ? (K = (n = +n) * n, t) : Math.sqrt(K)
                }, t
            };
        t.zoom = _, t.zoomTransform = c, t.zoomIdentity = g, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    n.elementsProvider = {
        SIDEBAR_OPTIONS: "#sidebar_options",
        PARALLEL_SET_CONTAINER: "#parallel_set_container",
        PARALLEL_SET_CONTENT: "#parallel_set_content",
        UPLOAD_CSV_BUTTON: "#upload_csv",
        UPLOAD_JSON_BUTTON: "#upload_json",
        UPLOAD_INPUT: "#upload_input",
        UPLOAD_PLACE_HOLDER: "#upload_placeholder",
        LOADER_SECTION: "#loader_section",
        OPEN_FAQ: "#open_faq",
        FAQ_MODAL: "#faq_modal",
        FILE_NAME: "#file_name"
    }
}, function(t, n) {
    "use strict";
    t.exports = function(t) {
        function n(n) {
            return n.length ? t.keys(n[0]).sort() : []
        }

        function e() {
            t.event.stopPropagation(), t.event.preventDefault()
        }

        function r(t) {
            return t.name
        }

        function i(t) {
            return t[0].categories.reduce(function(t, n) {
                return t + n.count
            }, 0)
        }

        function o(t, n) {
            return function(e, r) {
                var i = this.textContent = t(e, r),
                    o = n(e, r);
                if (this.getComputedTextLength() < o) return i;
                this.textContent = "…" + i;
                for (var u, a = 0, c = i.length + 1; a < c;) {
                    var s = a + c >> 1;
                    (u = this.getSubStringLength(0, s)) < o ? a = s + 1 : c = s
                }
                return a > 1 ? i.substr(0, a - 2) + "…" : ""
            }
        }

        function u(t, n, e, r) {
            a(t);
            for (var i = n.length, o = e.length, u = 0; u < i; u++) {
                for (var c = n[u], s = +r(c, u), f = t, l = 0; l < o; l++) {
                    var h = e[l],
                        p = c[h],
                        d = f.children;
                    f.count += s, f = d.hasOwnProperty(p) ? d[p] : d[p] = {
                        children: l === o - 1 ? null : {},
                        count: 0,
                        parent: f,
                        dimension: h,
                        name: p
                    }
                }
                f.count += s
            }
            return t
        }

        function a(t) {
            if (t.count = 0, t.children)
                for (var n in t.children) a(t.children[n])
        }

        function c(t) {
            return t
        }

        function s(t) {
            return "translate(0," + t.y + ")"
        }

        function f(t) {
            for (var n = t.count, e = []; t.parent;) t.name && e.unshift(t.name), t = t.parent;
            return e.join(" → ") + "<br>" + p(n) + " (" + h(n / t.count) + ")"
        }

        function l(t) {
            return t.name + "<br>" + p(t.count) + " (" + h(t.count / t.dimension.count) + ")"
        }
        t.parsets = function() {
            function a(n) {
                n.each(function(n, a) {
                    function f() {
                        var n = t.interpolateNumber(k, I);
                        return function(t) {
                            k = n(t), F.attr("d", m)
                        }
                    }

                    function l() {
                        var o = Y.selectAll("g.dimension"),
                            a = {};
                        o.each(function(t) {
                                a[t.name] = t
                            }), V.forEach(function(t) {
                                a.hasOwnProperty(t) || (a[t] = {
                                    name: t,
                                    categories: []
                                }), X.push(a[t])
                            }), X.sort(w), Y.select(".ribbon").selectAll("path").each(function(t) {
                                for (var n = t.path.split("\0"), e = W, r = n.length - 1, i = 0; i < r; i++) {
                                    var o = n[i];
                                    e = e.children.hasOwnProperty(o) ? e.children[o] : e.children[o] = {
                                        children: {},
                                        count: 0
                                    }
                                }
                                e.children[t.name] = t
                            }), W = u(W, n, X.map(r), M), a = X.map(function(t) {
                                var n = {};
                                return t.categories.forEach(function(t) {
                                    n[t.name] = t
                                }), n
                            }),
                            function t(n, e) {
                                if (n.children) {
                                    var r = X[e],
                                        i = a[e];
                                    for (var o in n.children) i.hasOwnProperty(o) || r.categories.push(i[o] = {
                                        name: o
                                    }), t(n.children[o], e + 1)
                                }
                            }(W, 0), H.domain([]).range(t.range(X[0].categories.length)), j = _(W, X, H), U = i(X), X.forEach(function(t) {
                                t.count = U
                            }), o = o.data(X, r);
                        var f = o.enter().append("g").attr("class", "dimension").attr("transform", function(t) {
                            return "translate(0," + t.y + ")"
                        }).on("mousedown.parsets", e);
                        o.each(function(t) {
                            t.y0 = t.y, t.categories.forEach(function(t) {
                                t.x0 = t.x
                            })
                        }), f.append("rect").attr("width", S).attr("y", -45).attr("height", 45);
                        var l = f.append("text").attr("class", "dimension").attr("transform", "translate(0,-25)");
                        l.append("tspan").attr("class", "name").text(h), l.append("tspan").attr("class", "sort alpha").attr("dx", "2em").text("alpha »").on("mousedown.parsets", e), l.append("tspan").attr("class", "sort size").attr("dx", "2em").text("size »").on("mousedown.parsets", e), o.call(t.behavior.drag().origin(c).on("dragstart", function(t) {
                            B = !0, t.y0 = t.y
                        }).on("drag", function(e) {
                            e.y0 = e.y = t.event.y;
                            for (var a = 1; a < X.length; a++)
                                if (E * X[a].y < E * X[a - 1].y) {
                                    X.sort(w), V = X.map(r), H.domain([]).range(t.range(X[0].categories.length)), j = _(W = u({
                                        children: {},
                                        count: 0
                                    }, n, V, M), X, H), U = i(X), Y.selectAll(".ribbon, .ribbon-mouse").selectAll("path").remove(), b(), R(o), o.transition().duration(L).attr("transform", s).tween("ribbon", P), N.sortDimensions();
                                    break
                                }
                            t.select(this).attr("transform", "translate(0," + e.y + ")").transition(), F.filter(function(t) {
                                return t.source.dimension === e || t.target.dimension === e
                            }).attr("d", m)
                        }).on("dragend", function(n) {
                            B = !1, q();
                            var e = 45,
                                r = (E - e - 2) / (X.length - 1);
                            X.forEach(function(t, n) {
                                t.y = e + n * r
                            }), y(t.select(this)).attr("transform", "translate(0," + n.y + ")").tween("ribbon", P)
                        })), o.select("text").select("tspan.sort.alpha").on("click.parsets", d("alpha", function(t, n) {
                            return t.name < n.name ? 1 : -1
                        }, o)), o.select("text").select("tspan.sort.size").on("click.parsets", d("size", function(t, n) {
                            return t.count - n.count
                        }, o)), o.transition().duration(L).attr("transform", function(t) {
                            return "translate(0," + t.y + ")"
                        }).tween("ribbon", P), o.exit().remove(), R(o), b()
                    }

                    function d(n, e, r) {
                        return function(i) {
                            var o = this.__direction = -(this.__direction || 1);
                            t.select(this).text(o > 0 ? n + " »" : "« " + n), i.categories.sort(function() {
                                return o * e.apply(this, arguments)
                            }), j = _(W, X, H), R(r), b(), N.sortCategories()
                        }
                    }

                    function b() {
                        F = Y.select(".ribbon").selectAll("path").data(j, function(t) {
                            return t.path
                        }), F.enter().append("path").each(function(t) {
                            t.source.x0 = t.source.x, t.target.x0 = t.target.x
                        }).attr("class", function(t) {
                            return "category-" + t.major
                        }).attr("d", m), F.sort(function(t, n) {
                            return n.count - t.count
                        }), F.exit().remove();
                        var n = Y.select(".ribbon-mouse").selectAll("path").data(j, function(t) {
                            return t.path
                        });
                        n.enter().append("path").on("mousemove.parsets", function(n) {
                            F.classed("active", !1), B || (D(n = n.node, !0), p(z.call(this, n)), t.event.stopPropagation())
                        }), n.sort(function(t, n) {
                            return n.count - t.count
                        }).attr("d", x), n.exit().remove()
                    }

                    function T(n) {
                        var e = [n],
                            r = F.filter(function(t) {
                                var r, i;
                                return t.source.node === n && e.push(r = t.source), t.target.node === n && e.push(i = t.target), r || i
                            }),
                            i = e.map(function(n) {
                                return t.interpolateNumber(n.x0, n.x)
                            }),
                            o = e.length;
                        return function(t) {
                            for (var n = 0; n < o; n++) e[n].x0 = i[n](t);
                            r.attr("d", m)
                        }
                    }

                    function P(n) {
                        var e = F.filter(function(t) {
                                return t.source.dimension.name == n.name || t.target.dimension.name == n.name
                            }),
                            r = t.interpolateNumber(n.y0, n.y);
                        return function(t) {
                            n.y0 = r(t), e.attr("d", m)
                        }
                    }

                    function D(t, n) {
                        if (!B) {
                            var e = [];
                            if (function t(n) {
                                    e.push(n);
                                    for (var r in n.children) t(n.children[r])
                                }(t), e.shift(), n)
                                for (; t;) e.push(t), t = t.parent;
                            F.filter(function(t) {
                                var n = e.indexOf(t.node) >= 0;
                                return n && this.parentNode.appendChild(this), n
                            }).classed("active", !0)
                        }
                    }

                    function q() {
                        B || (F.classed("active", !1), g())
                    }

                    function R(n) {
                        var r = n.selectAll("g.category").data(function(t) {
                                return t.categories
                            }, function(t) {
                                return t.name
                            }),
                            i = r.enter().append("g").attr("class", "category").attr("transform", function(t) {
                                return "translate(" + t.x + ")"
                            });
                        r.exit().remove(), r.on("mousemove.parsets", function(n) {
                            F.classed("active", !1), B || (n.nodes.forEach(function(t) {
                                D(t)
                            }), p(C.call(this, n)), t.event.stopPropagation())
                        }).on("mouseout.parsets", q).on("mousedown.parsets", e).call(t.behavior.drag().origin(c).on("dragstart", function(t) {
                            B = !0, t.x0 = t.x
                        }).on("drag", function(e) {
                            e.x = t.event.x;
                            for (var r = e.dimension.categories, i = 0, o = r[0]; ++i < r.length;)
                                if (o.x + o.dx / 2 > (o = r[i]).x + o.dx / 2) {
                                    r.sort(function(t, n) {
                                        return t.x + t.dx / 2 - n.x - n.dx / 2
                                    }), j = _(W, X, H), b(), R(n), D(e.node), N.sortCategories();
                                    break
                                }
                            var u = 0,
                                a = O / (r.length - 1);
                            r.forEach(function(n) {
                                e === n && (n.x0 = t.event.x), n.x = u, u += n.count / U * (S - O) + a
                            }), t.select(this).attr("transform", function(t) {
                                return "translate(" + t.x0 + ")"
                            }).transition(), F.filter(function(t) {
                                return t.source.node === e || t.target.node === e
                            }).attr("d", m)
                        }).on("dragend", function(n) {
                            B = !1, q(), b(), y(t.select(this)).attr("transform", "translate(" + n.x + ")").tween("ribbon", T)
                        })), r.transition().duration(L).attr("transform", function(t) {
                            return "translate(" + t.x + ")"
                        }).tween("ribbon", T), i.append("rect").attr("width", function(t) {
                            return t.dx
                        }).attr("y", -20).attr("height", 20), i.append("line").style("stroke-width", 2), i.append("text").attr("dy", "-.3em"), r.select("rect").attr("width", function(t) {
                            return t.dx
                        }).attr("class", function(t) {
                            return "category-" + (t.dimension === X[0] ? H(t.name) : "background")
                        }), r.select("line").attr("x2", function(t) {
                            return t.dx
                        }), r.select("text").text(o(function(t) {
                            return t.name
                        }, function(t) {
                            return t.dx
                        }))
                    }
                    var j, U, F, Y = t.select(this),
                        H = t.scale.ordinal(),
                        B = !1,
                        V = A.call(this, n, a),
                        X = [],
                        W = {
                            children: {},
                            count: 0
                        };
                    if (t.select(window).on("mousemove.parsets." + ++v, q), null == k && (k = I), Y.selectAll(".ribbon, .ribbon-mouse").data(["ribbon", "ribbon-mouse"], String).enter().append("g").attr("class", String), l(), I != k) {
                        var K = t.transition(Y);
                        K.tween ? K.tween("ribbon", f) : f()(1)
                    }
                })
            }

            function h(t, n) {
                return T.call(this, t.name, n)
            }

            function p(n) {
                var e = t.mouse(P.node());
                D.style("display", null).style("left", e[0] + 30 + "px").style("top", e[1] - 20 + "px").html(n)
            }

            function g() {
                D.style("display", "none")
            }

            function y(t) {
                return L ? t.transition().duration(L).ease(d) : t
            }

            function _(t, n, e) {
                function r(t, e, o, u) {
                    var a = e.node,
                        s = n[o];
                    s.categories.forEach(function(f) {
                        var l = f.name;
                        if (a.children.hasOwnProperty(l)) {
                            var h = a.children[l];
                            h.path = e.path + "\0" + l;
                            var p = h.target || {
                                node: f,
                                dimension: s
                            };
                            p.x = f.in.dx, p.dx = h.count / c * (S - O), f.in.dx += p.dx;
                            var d = h.source || {
                                node: t,
                                dimension: n[o - 1]
                            };
                            d.x = t.out.dx, d.dx = p.dx, t.out.dx += d.dx, h.node = h, h.source = d, h.target = p, h.major = u, i.push(h), o + 1 < n.length && r(f, h, o + 1, u)
                        }
                    })
                }
                var i = [],
                    o = n.length,
                    u = 45,
                    a = (E - u - 2) / (o - 1);
                n.forEach(function(t, n) {
                    t.categories.forEach(function(n) {
                        n.dimension = t, n.count = 0, n.nodes = []
                    }), t.y = u + n * a
                });
                var c = function t(e, r) {
                    if (!e.children) return e.count;
                    var i = n[r],
                        o = 0;
                    return i.categories.forEach(function(n) {
                        var i = e.children[n.name];
                        if (i) {
                            n.nodes.push(i);
                            var u = t(i, r + 1);
                            n.count += u, o += u
                        }
                    }), o
                }(t, 0);
                n.forEach(function(t) {
                    t.categories = t.categories.filter(function(t) {
                        return t.count
                    });
                    var n = 0,
                        e = O / (t.categories.length - 1);
                    t.categories.forEach(function(t) {
                        t.x = n, t.dx = t.count / c * (S - O), t.in = {
                            dx: 0
                        }, t.out = {
                            dx: 0
                        }, n += t.dx + e
                    })
                });
                var s = n[0];
                return s.categories.forEach(function(n) {
                    var i = n.name;
                    t.children.hasOwnProperty(i) && r(n, {
                        node: t.children[i],
                        path: i
                    }, 1, e(i))
                }), i
            }

            function m(t) {
                var n = t.source,
                    e = t.target;
                return b(n.node.x0 + n.x0, n.dimension.y0, n.dx, e.node.x0 + e.x0, e.dimension.y0, e.dx, k)
            }

            function x(t) {
                var n = t.source,
                    e = t.target;
                return b(n.node.x + n.x, n.dimension.y, n.dx, e.node.x + e.x, e.dimension.y, e.dx, I)
            }

            function b(t, n, e, r, i, o, u) {
                var a, c;
                return (1 === u ? ["M", [t, n], "L", [r, i], "h", o, "L", [t + e, n], "Z"] : ["M", [t, n], "C", [t, a = u * n + (1 - u) * i], " ", [r, c = u * i + (1 - u) * n], " ", [r, i], "h", o, "C", [r + o, c], " ", [t + e, a], " ", [t + e, n], "Z"]).join("")
            }

            function w(t, n) {
                return t = E * t.y, n = E * n.y, t < n ? -1 : t > n ? 1 : t >= n ? 0 : t <= t ? -1 : n <= n ? 1 : NaN
            }
            var M, S, E, k, N = t.dispatch("sortDimensions", "sortCategories"),
                A = n,
                T = String,
                z = f,
                C = l,
                O = 20,
                I = 1,
                L = 500;
            a.dimensionFormat = function(t) {
                return arguments.length ? (T = t, a) : T
            }, a.dimensions = function(n) {
                return arguments.length ? (A = t.functor(n), a) : A
            }, a.value = function(n) {
                return arguments.length ? (M = t.functor(n), a) : M
            }, a.width = function(t) {
                return arguments.length ? (S = +t, a) : S
            }, a.height = function(t) {
                return arguments.length ? (E = +t, a) : E
            }, a.spacing = function(t) {
                return arguments.length ? (O = +t, a) : O
            }, a.tension = function(t) {
                return arguments.length ? (I = +t, a) : I
            }, a.duration = function(t) {
                return arguments.length ? (L = +t, a) : L
            }, a.tooltip = function(t) {
                return arguments.length ? (z = null == t ? f : t, a) : D
            }, a.categoryTooltip = function(t) {
                return arguments.length ? (C = null == t ? l : t, a) : C
            };
            var P = t.select("body"),
                D = P.append("div").style("display", "none").attr("class", "parsets tooltip");
            return t.rebind(a, N, "on").value(1).width(960).height(600)
        }, t.parsets.tree = u;
        var h = t.format("%"),
            p = t.format(",f"),
            d = "elastic",
            v = 0
    }
}, function(t, n, e) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, n, e) {
        return n in t ? Object.defineProperty(t, n, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = e, t
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = e(37),
        u = r(o),
        a = void 0,
        c = function(t) {
            a = t
        },
        s = function() {
            return a
        },
        f = function() {
            return a.getState()
        },
        l = function(t) {
            return a.getState()[t]
        },
        h = function(t, n) {
            if (0 === t.size || 0 === n.length) return !0;
            var e = u.default.Map({});
            return n.forEach(function(t) {
                e = e.mergeDeep(u.default.Map(i({}, t, a.getState()[t])))
            }), !e.equals(t)
        },
        p = function(t, n) {
            if (0 === n.length) return [];
            var e = u.default.Map({});
            return n.forEach(function(t) {
                e = e.set(t, a.getState()[t])
            }), e
        },
        d = function(t) {
            a.dispatch(t())
        };
    n.default = {
        init: c,
        getStore: s,
        getState: f,
        getStateElement: l,
        shouldUpdate: h,
        updateViewState: p,
        dispatch: d
    }
}, function(t, n, e) {
    ! function(n, e) {
        t.exports = e()
    }(this, function() {
        "use strict";

        function t(t, n) {
            n && (t.prototype = Object.create(n.prototype)), t.prototype.constructor = t
        }

        function n(t) {
            return o(t) ? t : T(t)
        }

        function e(t) {
            return u(t) ? t : z(t)
        }

        function r(t) {
            return a(t) ? t : C(t)
        }

        function i(t) {
            return o(t) && !c(t) ? t : O(t)
        }

        function o(t) {
            return !(!t || !t[se])
        }

        function u(t) {
            return !(!t || !t[fe])
        }

        function a(t) {
            return !(!t || !t[le])
        }

        function c(t) {
            return u(t) || a(t)
        }

        function s(t) {
            return !(!t || !t[he])
        }

        function f(t) {
            return t.value = !1, t
        }

        function l(t) {
            t && (t.value = !0)
        }

        function h() {}

        function p(t, n) {
            n = n || 0;
            for (var e = Math.max(0, t.length - n), r = new Array(e), i = 0; i < e; i++) r[i] = t[i + n];
            return r
        }

        function d(t) {
            return void 0 === t.size && (t.size = t.__iterate(g)), t.size
        }

        function v(t, n) {
            if ("number" != typeof n) {
                var e = n >>> 0;
                if ("" + e !== n || 4294967295 === e) return NaN;
                n = e
            }
            return n < 0 ? d(t) + n : n
        }

        function g() {
            return !0
        }

        function y(t, n, e) {
            return (0 === t || void 0 !== e && t <= -e) && (void 0 === n || void 0 !== e && n >= e)
        }

        function _(t, n) {
            return x(t, n, 0)
        }

        function m(t, n) {
            return x(t, n, n)
        }

        function x(t, n, e) {
            return void 0 === t ? e : t < 0 ? Math.max(0, n + t) : void 0 === n ? t : Math.min(n, t)
        }

        function b(t) {
            this.next = t
        }

        function w(t, n, e, r) {
            var i = 0 === t ? n : 1 === t ? e : [n, e];
            return r ? r.value = i : r = {
                value: i,
                done: !1
            }, r
        }

        function M() {
            return {
                value: void 0,
                done: !0
            }
        }

        function S(t) {
            return !!N(t)
        }

        function E(t) {
            return t && "function" == typeof t.next
        }

        function k(t) {
            var n = N(t);
            return n && n.call(t)
        }

        function N(t) {
            var n = t && (Me && t[Me] || t[Se]);
            if ("function" == typeof n) return n
        }

        function A(t) {
            return t && "number" == typeof t.length
        }

        function T(t) {
            return null === t || void 0 === t ? R() : o(t) ? t.toSeq() : F(t)
        }

        function z(t) {
            return null === t || void 0 === t ? R().toKeyedSeq() : o(t) ? u(t) ? t.toSeq() : t.fromEntrySeq() : j(t)
        }

        function C(t) {
            return null === t || void 0 === t ? R() : o(t) ? u(t) ? t.entrySeq() : t.toIndexedSeq() : U(t)
        }

        function O(t) {
            return (null === t || void 0 === t ? R() : o(t) ? u(t) ? t.entrySeq() : t : U(t)).toSetSeq()
        }

        function I(t) {
            this._array = t, this.size = t.length
        }

        function L(t) {
            var n = Object.keys(t);
            this._object = t, this._keys = n, this.size = n.length
        }

        function P(t) {
            this._iterable = t, this.size = t.length || t.size
        }

        function D(t) {
            this._iterator = t, this._iteratorCache = []
        }

        function q(t) {
            return !(!t || !t[ke])
        }

        function R() {
            return Ne || (Ne = new I([]))
        }

        function j(t) {
            var n = Array.isArray(t) ? new I(t).fromEntrySeq() : E(t) ? new D(t).fromEntrySeq() : S(t) ? new P(t).fromEntrySeq() : "object" == typeof t ? new L(t) : void 0;
            if (!n) throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + t);
            return n
        }

        function U(t) {
            var n = Y(t);
            if (!n) throw new TypeError("Expected Array or iterable object of values: " + t);
            return n
        }

        function F(t) {
            var n = Y(t) || "object" == typeof t && new L(t);
            if (!n) throw new TypeError("Expected Array or iterable object of values, or keyed object: " + t);
            return n
        }

        function Y(t) {
            return A(t) ? new I(t) : E(t) ? new D(t) : S(t) ? new P(t) : void 0
        }

        function H(t, n, e, r) {
            var i = t._cache;
            if (i) {
                for (var o = i.length - 1, u = 0; u <= o; u++) {
                    var a = i[e ? o - u : u];
                    if (n(a[1], r ? a[0] : u, t) === !1) return u + 1
                }
                return u
            }
            return t.__iterateUncached(n, e)
        }

        function B(t, n, e, r) {
            var i = t._cache;
            if (i) {
                var o = i.length - 1,
                    u = 0;
                return new b(function() {
                    var t = i[e ? o - u : u];
                    return u++ > o ? M() : w(n, r ? t[0] : u - 1, t[1])
                })
            }
            return t.__iteratorUncached(n, e)
        }

        function V(t, n) {
            return n ? X(n, t, "", {
                "": t
            }) : W(t)
        }

        function X(t, n, e, r) {
            return Array.isArray(n) ? t.call(r, e, C(n).map(function(e, r) {
                return X(t, e, r, n)
            })) : K(n) ? t.call(r, e, z(n).map(function(e, r) {
                return X(t, e, r, n)
            })) : n
        }

        function W(t) {
            return Array.isArray(t) ? C(t).map(W).toList() : K(t) ? z(t).map(W).toMap() : t
        }

        function K(t) {
            return t && (t.constructor === Object || void 0 === t.constructor)
        }

        function J(t, n) {
            if (t === n || t !== t && n !== n) return !0;
            if (!t || !n) return !1;
            if ("function" == typeof t.valueOf && "function" == typeof n.valueOf) {
                if (t = t.valueOf(), n = n.valueOf(), t === n || t !== t && n !== n) return !0;
                if (!t || !n) return !1
            }
            return !("function" != typeof t.equals || "function" != typeof n.equals || !t.equals(n))
        }

        function Z(t, n) {
            if (t === n) return !0;
            if (!o(n) || void 0 !== t.size && void 0 !== n.size && t.size !== n.size || void 0 !== t.__hash && void 0 !== n.__hash && t.__hash !== n.__hash || u(t) !== u(n) || a(t) !== a(n) || s(t) !== s(n)) return !1;
            if (0 === t.size && 0 === n.size) return !0;
            var e = !c(t);
            if (s(t)) {
                var r = t.entries();
                return n.every(function(t, n) {
                    var i = r.next().value;
                    return i && J(i[1], t) && (e || J(i[0], n))
                }) && r.next().done
            }
            var i = !1;
            if (void 0 === t.size)
                if (void 0 === n.size) "function" == typeof t.cacheResult && t.cacheResult();
                else {
                    i = !0;
                    var f = t;
                    t = n, n = f
                }
            var l = !0,
                h = n.__iterate(function(n, r) {
                    if (e ? !t.has(n) : i ? !J(n, t.get(r, ye)) : !J(t.get(r, ye), n)) return l = !1, !1
                });
            return l && t.size === h
        }

        function $(t, n) {
            if (!(this instanceof $)) return new $(t, n);
            if (this._value = t, this.size = void 0 === n ? 1 / 0 : Math.max(0, n), 0 === this.size) {
                if (Ae) return Ae;
                Ae = this
            }
        }

        function G(t, n) {
            if (!t) throw new Error(n)
        }

        function Q(t, n, e) {
            if (!(this instanceof Q)) return new Q(t, n, e);
            if (G(0 !== e, "Cannot step a Range by 0"), t = t || 0, void 0 === n && (n = 1 / 0), e = void 0 === e ? 1 : Math.abs(e), n < t && (e = -e), this._start = t, this._end = n, this._step = e, this.size = Math.max(0, Math.ceil((n - t) / e - 1) + 1), 0 === this.size) {
                if (Te) return Te;
                Te = this
            }
        }

        function tt() {
            throw TypeError("Abstract")
        }

        function nt() {}

        function et() {}

        function rt() {}

        function it(t) {
            return t >>> 1 & 1073741824 | 3221225471 & t
        }

        function ot(t) {
            if (t === !1 || null === t || void 0 === t) return 0;
            if ("function" == typeof t.valueOf && (t = t.valueOf(), t === !1 || null === t || void 0 === t)) return 0;
            if (t === !0) return 1;
            var n = typeof t;
            if ("number" === n) {
                if (t !== t || t === 1 / 0) return 0;
                var e = 0 | t;
                for (e !== t && (e ^= 4294967295 * t); t > 4294967295;) t /= 4294967295, e ^= t;
                return it(e)
            }
            if ("string" === n) return t.length > qe ? ut(t) : at(t);
            if ("function" == typeof t.hashCode) return t.hashCode();
            if ("object" === n) return ct(t);
            if ("function" == typeof t.toString) return at(t.toString());
            throw new Error("Value type " + n + " cannot be hashed.")
        }

        function ut(t) {
            var n = Ue[t];
            return void 0 === n && (n = at(t), je === Re && (je = 0, Ue = {}), je++, Ue[t] = n), n
        }

        function at(t) {
            for (var n = 0, e = 0; e < t.length; e++) n = 31 * n + t.charCodeAt(e) | 0;
            return it(n)
        }

        function ct(t) {
            var n;
            if (Le && (n = ze.get(t), void 0 !== n)) return n;
            if (n = t[De], void 0 !== n) return n;
            if (!Ie) {
                if (n = t.propertyIsEnumerable && t.propertyIsEnumerable[De], void 0 !== n) return n;
                if (n = st(t), void 0 !== n) return n
            }
            if (n = ++Pe, 1073741824 & Pe && (Pe = 0), Le) ze.set(t, n);
            else {
                if (void 0 !== Oe && Oe(t) === !1) throw new Error("Non-extensible objects are not allowed as keys.");
                if (Ie) Object.defineProperty(t, De, {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: n
                });
                else if (void 0 !== t.propertyIsEnumerable && t.propertyIsEnumerable === t.constructor.prototype.propertyIsEnumerable) t.propertyIsEnumerable = function() {
                    return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments)
                }, t.propertyIsEnumerable[De] = n;
                else {
                    if (void 0 === t.nodeType) throw new Error("Unable to set a non-enumerable property on object.");
                    t[De] = n
                }
            }
            return n
        }

        function st(t) {
            if (t && t.nodeType > 0) switch (t.nodeType) {
                case 1:
                    return t.uniqueID;
                case 9:
                    return t.documentElement && t.documentElement.uniqueID
            }
        }

        function ft(t) {
            G(t !== 1 / 0, "Cannot perform this action with an infinite size.")
        }

        function lt(t) {
            return null === t || void 0 === t ? wt() : ht(t) && !s(t) ? t : wt().withMutations(function(n) {
                var r = e(t);
                ft(r.size), r.forEach(function(t, e) {
                    return n.set(e, t)
                })
            })
        }

        function ht(t) {
            return !(!t || !t[Fe])
        }

        function pt(t, n) {
            this.ownerID = t, this.entries = n
        }

        function dt(t, n, e) {
            this.ownerID = t, this.bitmap = n, this.nodes = e
        }

        function vt(t, n, e) {
            this.ownerID = t, this.count = n, this.nodes = e
        }

        function gt(t, n, e) {
            this.ownerID = t, this.keyHash = n, this.entries = e
        }

        function yt(t, n, e) {
            this.ownerID = t, this.keyHash = n, this.entry = e
        }

        function _t(t, n, e) {
            this._type = n, this._reverse = e, this._stack = t._root && xt(t._root)
        }

        function mt(t, n) {
            return w(t, n[0], n[1])
        }

        function xt(t, n) {
            return {
                node: t,
                index: 0,
                __prev: n
            }
        }

        function bt(t, n, e, r) {
            var i = Object.create(Ye);
            return i.size = t, i._root = n, i.__ownerID = e, i.__hash = r, i.__altered = !1, i
        }

        function wt() {
            return He || (He = bt(0))
        }

        function Mt(t, n, e) {
            var r, i;
            if (t._root) {
                var o = f(_e),
                    u = f(me);
                if (r = St(t._root, t.__ownerID, 0, void 0, n, e, o, u), !u.value) return t;
                i = t.size + (o.value ? e === ye ? -1 : 1 : 0)
            } else {
                if (e === ye) return t;
                i = 1, r = new pt(t.__ownerID, [
                    [n, e]
                ])
            }
            return t.__ownerID ? (t.size = i, t._root = r, t.__hash = void 0, t.__altered = !0, t) : r ? bt(i, r) : wt()
        }

        function St(t, n, e, r, i, o, u, a) {
            return t ? t.update(n, e, r, i, o, u, a) : o === ye ? t : (l(a), l(u), new yt(n, r, [i, o]))
        }

        function Et(t) {
            return t.constructor === yt || t.constructor === gt
        }

        function kt(t, n, e, r, i) {
            if (t.keyHash === r) return new gt(n, r, [t.entry, i]);
            var o, u = (0 === e ? t.keyHash : t.keyHash >>> e) & ge,
                a = (0 === e ? r : r >>> e) & ge,
                c = u === a ? [kt(t, n, e + de, r, i)] : (o = new yt(n, r, i), u < a ? [t, o] : [o, t]);
            return new dt(n, 1 << u | 1 << a, c)
        }

        function Nt(t, n, e, r) {
            t || (t = new h);
            for (var i = new yt(t, ot(e), [e, r]), o = 0; o < n.length; o++) {
                var u = n[o];
                i = i.update(t, 0, void 0, u[0], u[1])
            }
            return i
        }

        function At(t, n, e, r) {
            for (var i = 0, o = 0, u = new Array(e), a = 0, c = 1, s = n.length; a < s; a++, c <<= 1) {
                var f = n[a];
                void 0 !== f && a !== r && (i |= c, u[o++] = f)
            }
            return new dt(t, i, u)
        }

        function Tt(t, n, e, r, i) {
            for (var o = 0, u = new Array(ve), a = 0; 0 !== e; a++, e >>>= 1) u[a] = 1 & e ? n[o++] : void 0;
            return u[r] = i, new vt(t, o + 1, u)
        }

        function zt(t, n, r) {
            for (var i = [], u = 0; u < r.length; u++) {
                var a = r[u],
                    c = e(a);
                o(a) || (c = c.map(function(t) {
                    return V(t)
                })), i.push(c)
            }
            return It(t, n, i)
        }

        function Ct(t, n, e) {
            return t && t.mergeDeep && o(n) ? t.mergeDeep(n) : J(t, n) ? t : n
        }

        function Ot(t) {
            return function(n, e, r) {
                if (n && n.mergeDeepWith && o(e)) return n.mergeDeepWith(t, e);
                var i = t(n, e, r);
                return J(n, i) ? n : i
            }
        }

        function It(t, n, e) {
            return e = e.filter(function(t) {
                return 0 !== t.size
            }), 0 === e.length ? t : 0 !== t.size || t.__ownerID || 1 !== e.length ? t.withMutations(function(t) {
                for (var r = n ? function(e, r) {
                        t.update(r, ye, function(t) {
                            return t === ye ? e : n(t, e, r)
                        })
                    } : function(n, e) {
                        t.set(e, n)
                    }, i = 0; i < e.length; i++) e[i].forEach(r)
            }) : t.constructor(e[0])
        }

        function Lt(t, n, e, r) {
            var i = t === ye,
                o = n.next();
            if (o.done) {
                var u = i ? e : t,
                    a = r(u);
                return a === u ? t : a
            }
            G(i || t && t.set, "invalid keyPath");
            var c = o.value,
                s = i ? ye : t.get(c, ye),
                f = Lt(s, n, e, r);
            return f === s ? t : f === ye ? t.remove(c) : (i ? wt() : t).set(c, f)
        }

        function Pt(t) {
            return t -= t >> 1 & 1431655765, t = (858993459 & t) + (t >> 2 & 858993459), t = t + (t >> 4) & 252645135, t += t >> 8, t += t >> 16, 127 & t
        }

        function Dt(t, n, e, r) {
            var i = r ? t : p(t);
            return i[n] = e, i
        }

        function qt(t, n, e, r) {
            var i = t.length + 1;
            if (r && n + 1 === i) return t[n] = e, t;
            for (var o = new Array(i), u = 0, a = 0; a < i; a++) a === n ? (o[a] = e, u = -1) : o[a] = t[a + u];
            return o
        }

        function Rt(t, n, e) {
            var r = t.length - 1;
            if (e && n === r) return t.pop(), t;
            for (var i = new Array(r), o = 0, u = 0; u < r; u++) u === n && (o = 1), i[u] = t[u + o];
            return i
        }

        function jt(t) {
            var n = Bt();
            if (null === t || void 0 === t) return n;
            if (Ut(t)) return t;
            var e = r(t),
                i = e.size;
            return 0 === i ? n : (ft(i), i > 0 && i < ve ? Ht(0, i, de, null, new Ft(e.toArray())) : n.withMutations(function(t) {
                t.setSize(i), e.forEach(function(n, e) {
                    return t.set(e, n)
                })
            }))
        }

        function Ut(t) {
            return !(!t || !t[We])
        }

        function Ft(t, n) {
            this.array = t, this.ownerID = n
        }

        function Yt(t, n) {
            function e(t, n, e) {
                return 0 === n ? r(t, e) : i(t, n, e)
            }

            function r(t, e) {
                var r = e === a ? c && c.array : t && t.array,
                    i = e > o ? 0 : o - e,
                    s = u - e;
                return s > ve && (s = ve),
                    function() {
                        if (i === s) return Ze;
                        var t = n ? --s : i++;
                        return r && r[t]
                    }
            }

            function i(t, r, i) {
                var a, c = t && t.array,
                    s = i > o ? 0 : o - i >> r,
                    f = (u - i >> r) + 1;
                return f > ve && (f = ve),
                    function() {
                        for (;;) {
                            if (a) {
                                var t = a();
                                if (t !== Ze) return t;
                                a = null
                            }
                            if (s === f) return Ze;
                            var o = n ? --f : s++;
                            a = e(c && c[o], r - de, i + (o << r))
                        }
                    }
            }
            var o = t._origin,
                u = t._capacity,
                a = $t(u),
                c = t._tail;
            return e(t._root, t._level, 0)
        }

        function Ht(t, n, e, r, i, o, u) {
            var a = Object.create(Ke);
            return a.size = n - t, a._origin = t, a._capacity = n, a._level = e, a._root = r, a._tail = i, a.__ownerID = o, a.__hash = u, a.__altered = !1, a
        }

        function Bt() {
            return Je || (Je = Ht(0, 0, de))
        }

        function Vt(t, n, e) {
            if (n = v(t, n), n !== n) return t;
            if (n >= t.size || n < 0) return t.withMutations(function(t) {
                n < 0 ? Jt(t, n).set(0, e) : Jt(t, 0, n + 1).set(n, e)
            });
            n += t._origin;
            var r = t._tail,
                i = t._root,
                o = f(me);
            return n >= $t(t._capacity) ? r = Xt(r, t.__ownerID, 0, n, e, o) : i = Xt(i, t.__ownerID, t._level, n, e, o), o.value ? t.__ownerID ? (t._root = i, t._tail = r, t.__hash = void 0, t.__altered = !0, t) : Ht(t._origin, t._capacity, t._level, i, r) : t
        }

        function Xt(t, n, e, r, i, o) {
            var u = r >>> e & ge,
                a = t && u < t.array.length;
            if (!a && void 0 === i) return t;
            var c;
            if (e > 0) {
                var s = t && t.array[u],
                    f = Xt(s, n, e - de, r, i, o);
                return f === s ? t : (c = Wt(t, n), c.array[u] = f, c)
            }
            return a && t.array[u] === i ? t : (l(o), c = Wt(t, n), void 0 === i && u === c.array.length - 1 ? c.array.pop() : c.array[u] = i, c)
        }

        function Wt(t, n) {
            return n && t && n === t.ownerID ? t : new Ft(t ? t.array.slice() : [], n)
        }

        function Kt(t, n) {
            if (n >= $t(t._capacity)) return t._tail;
            if (n < 1 << t._level + de) {
                for (var e = t._root, r = t._level; e && r > 0;) e = e.array[n >>> r & ge], r -= de;
                return e
            }
        }

        function Jt(t, n, e) {
            void 0 !== n && (n |= 0), void 0 !== e && (e |= 0);
            var r = t.__ownerID || new h,
                i = t._origin,
                o = t._capacity,
                u = i + n,
                a = void 0 === e ? o : e < 0 ? o + e : i + e;
            if (u === i && a === o) return t;
            if (u >= a) return t.clear();
            for (var c = t._level, s = t._root, f = 0; u + f < 0;) s = new Ft(s && s.array.length ? [void 0, s] : [], r), c += de, f += 1 << c;
            f && (u += f, i += f, a += f, o += f);
            for (var l = $t(o), p = $t(a); p >= 1 << c + de;) s = new Ft(s && s.array.length ? [s] : [], r), c += de;
            var d = t._tail,
                v = p < l ? Kt(t, a - 1) : p > l ? new Ft([], r) : d;
            if (d && p > l && u < o && d.array.length) {
                s = Wt(s, r);
                for (var g = s, y = c; y > de; y -= de) {
                    var _ = l >>> y & ge;
                    g = g.array[_] = Wt(g.array[_], r)
                }
                g.array[l >>> de & ge] = d
            }
            if (a < o && (v = v && v.removeAfter(r, 0, a)), u >= p) u -= p, a -= p, c = de, s = null, v = v && v.removeBefore(r, 0, u);
            else if (u > i || p < l) {
                for (f = 0; s;) {
                    var m = u >>> c & ge;
                    if (m !== p >>> c & ge) break;
                    m && (f += (1 << c) * m), c -= de, s = s.array[m]
                }
                s && u > i && (s = s.removeBefore(r, c, u - f)), s && p < l && (s = s.removeAfter(r, c, p - f)), f && (u -= f, a -= f)
            }
            return t.__ownerID ? (t.size = a - u, t._origin = u, t._capacity = a, t._level = c, t._root = s, t._tail = v, t.__hash = void 0, t.__altered = !0, t) : Ht(u, a, c, s, v)
        }

        function Zt(t, n, e) {
            for (var i = [], u = 0, a = 0; a < e.length; a++) {
                var c = e[a],
                    s = r(c);
                s.size > u && (u = s.size), o(c) || (s = s.map(function(t) {
                    return V(t)
                })), i.push(s)
            }
            return u > t.size && (t = t.setSize(u)), It(t, n, i)
        }

        function $t(t) {
            return t < ve ? 0 : t - 1 >>> de << de
        }

        function Gt(t) {
            return null === t || void 0 === t ? nn() : Qt(t) ? t : nn().withMutations(function(n) {
                var r = e(t);
                ft(r.size), r.forEach(function(t, e) {
                    return n.set(e, t)
                })
            })
        }

        function Qt(t) {
            return ht(t) && s(t)
        }

        function tn(t, n, e, r) {
            var i = Object.create(Gt.prototype);
            return i.size = t ? t.size : 0, i._map = t, i._list = n, i.__ownerID = e, i.__hash = r, i
        }

        function nn() {
            return $e || ($e = tn(wt(), Bt()))
        }

        function en(t, n, e) {
            var r, i, o = t._map,
                u = t._list,
                a = o.get(n),
                c = void 0 !== a;
            if (e === ye) {
                if (!c) return t;
                u.size >= ve && u.size >= 2 * o.size ? (i = u.filter(function(t, n) {
                    return void 0 !== t && a !== n
                }), r = i.toKeyedSeq().map(function(t) {
                    return t[0]
                }).flip().toMap(), t.__ownerID && (r.__ownerID = i.__ownerID = t.__ownerID)) : (r = o.remove(n), i = a === u.size - 1 ? u.pop() : u.set(a, void 0))
            } else if (c) {
                if (e === u.get(a)[1]) return t;
                r = o, i = u.set(a, [n, e])
            } else r = o.set(n, u.size), i = u.set(u.size, [n, e]);
            return t.__ownerID ? (t.size = r.size, t._map = r, t._list = i, t.__hash = void 0, t) : tn(r, i)
        }

        function rn(t, n) {
            this._iter = t, this._useKeys = n, this.size = t.size
        }

        function on(t) {
            this._iter = t, this.size = t.size
        }

        function un(t) {
            this._iter = t, this.size = t.size
        }

        function an(t) {
            this._iter = t, this.size = t.size
        }

        function cn(t) {
            var n = Tn(t);
            return n._iter = t, n.size = t.size, n.flip = function() {
                return t
            }, n.reverse = function() {
                var n = t.reverse.apply(this);
                return n.flip = function() {
                    return t.reverse()
                }, n
            }, n.has = function(n) {
                return t.includes(n)
            }, n.includes = function(n) {
                return t.has(n)
            }, n.cacheResult = zn, n.__iterateUncached = function(n, e) {
                var r = this;
                return t.__iterate(function(t, e) {
                    return n(e, t, r) !== !1
                }, e)
            }, n.__iteratorUncached = function(n, e) {
                if (n === we) {
                    var r = t.__iterator(n, e);
                    return new b(function() {
                        var t = r.next();
                        if (!t.done) {
                            var n = t.value[0];
                            t.value[0] = t.value[1], t.value[1] = n
                        }
                        return t
                    })
                }
                return t.__iterator(n === be ? xe : be, e)
            }, n
        }

        function sn(t, n, e) {
            var r = Tn(t);
            return r.size = t.size, r.has = function(n) {
                return t.has(n)
            }, r.get = function(r, i) {
                var o = t.get(r, ye);
                return o === ye ? i : n.call(e, o, r, t)
            }, r.__iterateUncached = function(r, i) {
                var o = this;
                return t.__iterate(function(t, i, u) {
                    return r(n.call(e, t, i, u), i, o) !== !1
                }, i)
            }, r.__iteratorUncached = function(r, i) {
                var o = t.__iterator(we, i);
                return new b(function() {
                    var i = o.next();
                    if (i.done) return i;
                    var u = i.value,
                        a = u[0];
                    return w(r, a, n.call(e, u[1], a, t), i)
                })
            }, r
        }

        function fn(t, n) {
            var e = Tn(t);
            return e._iter = t, e.size = t.size, e.reverse = function() {
                return t
            }, t.flip && (e.flip = function() {
                var n = cn(t);
                return n.reverse = function() {
                    return t.flip()
                }, n
            }), e.get = function(e, r) {
                return t.get(n ? e : -1 - e, r)
            }, e.has = function(e) {
                return t.has(n ? e : -1 - e)
            }, e.includes = function(n) {
                return t.includes(n)
            }, e.cacheResult = zn, e.__iterate = function(n, e) {
                var r = this;
                return t.__iterate(function(t, e) {
                    return n(t, e, r)
                }, !e)
            }, e.__iterator = function(n, e) {
                return t.__iterator(n, !e)
            }, e
        }

        function ln(t, n, e, r) {
            var i = Tn(t);
            return r && (i.has = function(r) {
                var i = t.get(r, ye);
                return i !== ye && !!n.call(e, i, r, t)
            }, i.get = function(r, i) {
                var o = t.get(r, ye);
                return o !== ye && n.call(e, o, r, t) ? o : i
            }), i.__iterateUncached = function(i, o) {
                var u = this,
                    a = 0;
                return t.__iterate(function(t, o, c) {
                    if (n.call(e, t, o, c)) return a++, i(t, r ? o : a - 1, u)
                }, o), a
            }, i.__iteratorUncached = function(i, o) {
                var u = t.__iterator(we, o),
                    a = 0;
                return new b(function() {
                    for (;;) {
                        var o = u.next();
                        if (o.done) return o;
                        var c = o.value,
                            s = c[0],
                            f = c[1];
                        if (n.call(e, f, s, t)) return w(i, r ? s : a++, f, o)
                    }
                })
            }, i
        }

        function hn(t, n, e) {
            var r = lt().asMutable();
            return t.__iterate(function(i, o) {
                r.update(n.call(e, i, o, t), 0, function(t) {
                    return t + 1
                })
            }), r.asImmutable()
        }

        function pn(t, n, e) {
            var r = u(t),
                i = (s(t) ? Gt() : lt()).asMutable();
            t.__iterate(function(o, u) {
                i.update(n.call(e, o, u, t), function(t) {
                    return t = t || [], t.push(r ? [u, o] : o), t
                })
            });
            var o = An(t);
            return i.map(function(n) {
                return En(t, o(n))
            })
        }

        function dn(t, n, e, r) {
            var i = t.size;
            if (void 0 !== n && (n |= 0), void 0 !== e && (e === 1 / 0 ? e = i : e |= 0), y(n, e, i)) return t;
            var o = _(n, i),
                u = m(e, i);
            if (o !== o || u !== u) return dn(t.toSeq().cacheResult(), n, e, r);
            var a, c = u - o;
            c === c && (a = c < 0 ? 0 : c);
            var s = Tn(t);
            return s.size = 0 === a ? a : t.size && a || void 0, !r && q(t) && a >= 0 && (s.get = function(n, e) {
                return n = v(this, n), n >= 0 && n < a ? t.get(n + o, e) : e
            }), s.__iterateUncached = function(n, e) {
                var i = this;
                if (0 === a) return 0;
                if (e) return this.cacheResult().__iterate(n, e);
                var u = 0,
                    c = !0,
                    s = 0;
                return t.__iterate(function(t, e) {
                    if (!c || !(c = u++ < o)) return s++, n(t, r ? e : s - 1, i) !== !1 && s !== a
                }), s
            }, s.__iteratorUncached = function(n, e) {
                if (0 !== a && e) return this.cacheResult().__iterator(n, e);
                var i = 0 !== a && t.__iterator(n, e),
                    u = 0,
                    c = 0;
                return new b(function() {
                    for (; u++ < o;) i.next();
                    if (++c > a) return M();
                    var t = i.next();
                    return r || n === be ? t : n === xe ? w(n, c - 1, void 0, t) : w(n, c - 1, t.value[1], t)
                })
            }, s
        }

        function vn(t, n, e) {
            var r = Tn(t);
            return r.__iterateUncached = function(r, i) {
                var o = this;
                if (i) return this.cacheResult().__iterate(r, i);
                var u = 0;
                return t.__iterate(function(t, i, a) {
                    return n.call(e, t, i, a) && ++u && r(t, i, o)
                }), u
            }, r.__iteratorUncached = function(r, i) {
                var o = this;
                if (i) return this.cacheResult().__iterator(r, i);
                var u = t.__iterator(we, i),
                    a = !0;
                return new b(function() {
                    if (!a) return M();
                    var t = u.next();
                    if (t.done) return t;
                    var i = t.value,
                        c = i[0],
                        s = i[1];
                    return n.call(e, s, c, o) ? r === we ? t : w(r, c, s, t) : (a = !1, M())
                })
            }, r
        }

        function gn(t, n, e, r) {
            var i = Tn(t);
            return i.__iterateUncached = function(i, o) {
                var u = this;
                if (o) return this.cacheResult().__iterate(i, o);
                var a = !0,
                    c = 0;
                return t.__iterate(function(t, o, s) {
                    if (!a || !(a = n.call(e, t, o, s))) return c++, i(t, r ? o : c - 1, u)
                }), c
            }, i.__iteratorUncached = function(i, o) {
                var u = this;
                if (o) return this.cacheResult().__iterator(i, o);
                var a = t.__iterator(we, o),
                    c = !0,
                    s = 0;
                return new b(function() {
                    var t, o, f;
                    do {
                        if (t = a.next(), t.done) return r || i === be ? t : i === xe ? w(i, s++, void 0, t) : w(i, s++, t.value[1], t);
                        var l = t.value;
                        o = l[0], f = l[1], c && (c = n.call(e, f, o, u))
                    } while (c);
                    return i === we ? t : w(i, o, f, t)
                })
            }, i
        }

        function yn(t, n) {
            var r = u(t),
                i = [t].concat(n).map(function(t) {
                    return o(t) ? r && (t = e(t)) : t = r ? j(t) : U(Array.isArray(t) ? t : [t]), t
                }).filter(function(t) {
                    return 0 !== t.size
                });
            if (0 === i.length) return t;
            if (1 === i.length) {
                var c = i[0];
                if (c === t || r && u(c) || a(t) && a(c)) return c
            }
            var s = new I(i);
            return r ? s = s.toKeyedSeq() : a(t) || (s = s.toSetSeq()), s = s.flatten(!0), s.size = i.reduce(function(t, n) {
                if (void 0 !== t) {
                    var e = n.size;
                    if (void 0 !== e) return t + e
                }
            }, 0), s
        }

        function _n(t, n, e) {
            var r = Tn(t);
            return r.__iterateUncached = function(r, i) {
                function u(t, s) {
                    var f = this;
                    t.__iterate(function(t, i) {
                        return (!n || s < n) && o(t) ? u(t, s + 1) : r(t, e ? i : a++, f) === !1 && (c = !0), !c
                    }, i)
                }
                var a = 0,
                    c = !1;
                return u(t, 0), a
            }, r.__iteratorUncached = function(r, i) {
                var u = t.__iterator(r, i),
                    a = [],
                    c = 0;
                return new b(function() {
                    for (; u;) {
                        var t = u.next();
                        if (t.done === !1) {
                            var s = t.value;
                            if (r === we && (s = s[1]), n && !(a.length < n) || !o(s)) return e ? t : w(r, c++, s, t);
                            a.push(u), u = s.__iterator(r, i)
                        } else u = a.pop()
                    }
                    return M()
                })
            }, r
        }

        function mn(t, n, e) {
            var r = An(t);
            return t.toSeq().map(function(i, o) {
                return r(n.call(e, i, o, t))
            }).flatten(!0)
        }

        function xn(t, n) {
            var e = Tn(t);
            return e.size = t.size && 2 * t.size - 1, e.__iterateUncached = function(e, r) {
                var i = this,
                    o = 0;
                return t.__iterate(function(t, r) {
                    return (!o || e(n, o++, i) !== !1) && e(t, o++, i) !== !1
                }, r), o
            }, e.__iteratorUncached = function(e, r) {
                var i, o = t.__iterator(be, r),
                    u = 0;
                return new b(function() {
                    return (!i || u % 2) && (i = o.next(), i.done) ? i : u % 2 ? w(e, u++, n) : w(e, u++, i.value, i)
                })
            }, e
        }

        function bn(t, n, e) {
            n || (n = Cn);
            var r = u(t),
                i = 0,
                o = t.toSeq().map(function(n, r) {
                    return [r, n, i++, e ? e(n, r, t) : n]
                }).toArray();
            return o.sort(function(t, e) {
                return n(t[3], e[3]) || t[2] - e[2]
            }).forEach(r ? function(t, n) {
                o[n].length = 2
            } : function(t, n) {
                o[n] = t[1]
            }), r ? z(o) : a(t) ? C(o) : O(o)
        }

        function wn(t, n, e) {
            if (n || (n = Cn), e) {
                var r = t.toSeq().map(function(n, r) {
                    return [n, e(n, r, t)]
                }).reduce(function(t, e) {
                    return Mn(n, t[1], e[1]) ? e : t
                });
                return r && r[0]
            }
            return t.reduce(function(t, e) {
                return Mn(n, t, e) ? e : t
            })
        }

        function Mn(t, n, e) {
            var r = t(e, n);
            return 0 === r && e !== n && (void 0 === e || null === e || e !== e) || r > 0
        }

        function Sn(t, e, r) {
            var i = Tn(t);
            return i.size = new I(r).map(function(t) {
                return t.size
            }).min(), i.__iterate = function(t, n) {
                for (var e, r = this.__iterator(be, n), i = 0; !(e = r.next()).done && t(e.value, i++, this) !== !1;);
                return i
            }, i.__iteratorUncached = function(t, i) {
                var o = r.map(function(t) {
                        return t = n(t), k(i ? t.reverse() : t)
                    }),
                    u = 0,
                    a = !1;
                return new b(function() {
                    var n;
                    return a || (n = o.map(function(t) {
                        return t.next()
                    }), a = n.some(function(t) {
                        return t.done
                    })), a ? M() : w(t, u++, e.apply(null, n.map(function(t) {
                        return t.value
                    })))
                })
            }, i
        }

        function En(t, n) {
            return q(t) ? n : t.constructor(n)
        }

        function kn(t) {
            if (t !== Object(t)) throw new TypeError("Expected [K, V] tuple: " + t)
        }

        function Nn(t) {
            return ft(t.size), d(t)
        }

        function An(t) {
            return u(t) ? e : a(t) ? r : i
        }

        function Tn(t) {
            return Object.create((u(t) ? z : a(t) ? C : O).prototype)
        }

        function zn() {
            return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, this) : T.prototype.cacheResult.call(this)
        }

        function Cn(t, n) {
            return t > n ? 1 : t < n ? -1 : 0
        }

        function On(t) {
            var e = k(t);
            if (!e) {
                if (!A(t)) throw new TypeError("Expected iterable or array-like: " + t);
                e = k(n(t))
            }
            return e
        }

        function In(t, n) {
            var e, r = function(o) {
                    if (o instanceof r) return o;
                    if (!(this instanceof r)) return new r(o);
                    if (!e) {
                        e = !0;
                        var u = Object.keys(t);
                        Dn(i, u), i.size = u.length, i._name = n, i._keys = u, i._defaultValues = t
                    }
                    this._map = lt(o)
                },
                i = r.prototype = Object.create(Ge);
            return i.constructor = r, r
        }

        function Ln(t, n, e) {
            var r = Object.create(Object.getPrototypeOf(t));
            return r._map = n, r.__ownerID = e, r
        }

        function Pn(t) {
            return t._name || t.constructor.name || "Record"
        }

        function Dn(t, n) {
            try {
                n.forEach(qn.bind(void 0, t))
            } catch (t) {}
        }

        function qn(t, n) {
            Object.defineProperty(t, n, {
                get: function() {
                    return this.get(n)
                },
                set: function(t) {
                    G(this.__ownerID, "Cannot set on an immutable record."), this.set(n, t)
                }
            })
        }

        function Rn(t) {
            return null === t || void 0 === t ? Yn() : jn(t) && !s(t) ? t : Yn().withMutations(function(n) {
                var e = i(t);
                ft(e.size), e.forEach(function(t) {
                    return n.add(t)
                })
            })
        }

        function jn(t) {
            return !(!t || !t[Qe])
        }

        function Un(t, n) {
            return t.__ownerID ? (t.size = n.size, t._map = n, t) : n === t._map ? t : 0 === n.size ? t.__empty() : t.__make(n)
        }

        function Fn(t, n) {
            var e = Object.create(tr);
            return e.size = t ? t.size : 0, e._map = t, e.__ownerID = n, e
        }

        function Yn() {
            return nr || (nr = Fn(wt()))
        }

        function Hn(t) {
            return null === t || void 0 === t ? Xn() : Bn(t) ? t : Xn().withMutations(function(n) {
                var e = i(t);
                ft(e.size), e.forEach(function(t) {
                    return n.add(t)
                })
            })
        }

        function Bn(t) {
            return jn(t) && s(t)
        }

        function Vn(t, n) {
            var e = Object.create(er);
            return e.size = t ? t.size : 0, e._map = t, e.__ownerID = n, e
        }

        function Xn() {
            return rr || (rr = Vn(nn()))
        }

        function Wn(t) {
            return null === t || void 0 === t ? Zn() : Kn(t) ? t : Zn().unshiftAll(t)
        }

        function Kn(t) {
            return !(!t || !t[ir])
        }

        function Jn(t, n, e, r) {
            var i = Object.create(or);
            return i.size = t, i._head = n, i.__ownerID = e, i.__hash = r, i.__altered = !1, i
        }

        function Zn() {
            return ur || (ur = Jn(0))
        }

        function $n(t, n) {
            var e = function(e) {
                t.prototype[e] = n[e]
            };
            return Object.keys(n).forEach(e), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(n).forEach(e), t
        }

        function Gn(t, n) {
            return n
        }

        function Qn(t, n) {
            return [n, t]
        }

        function te(t) {
            return function() {
                return !t.apply(this, arguments)
            }
        }

        function ne(t) {
            return function() {
                return -t.apply(this, arguments)
            }
        }

        function ee(t) {
            return "string" == typeof t ? JSON.stringify(t) : String(t)
        }

        function re() {
            return p(arguments)
        }

        function ie(t, n) {
            return t < n ? 1 : t > n ? -1 : 0
        }

        function oe(t) {
            if (t.size === 1 / 0) return 0;
            var n = s(t),
                e = u(t),
                r = n ? 1 : 0,
                i = t.__iterate(e ? n ? function(t, n) {
                    r = 31 * r + ae(ot(t), ot(n)) | 0
                } : function(t, n) {
                    r = r + ae(ot(t), ot(n)) | 0
                } : n ? function(t) {
                    r = 31 * r + ot(t) | 0
                } : function(t) {
                    r = r + ot(t) | 0
                });
            return ue(i, r)
        }

        function ue(t, n) {
            return n = Ce(n, 3432918353), n = Ce(n << 15 | n >>> -15, 461845907), n = Ce(n << 13 | n >>> -13, 5), n = (n + 3864292196 | 0) ^ t, n = Ce(n ^ n >>> 16, 2246822507), n = Ce(n ^ n >>> 13, 3266489909), n = it(n ^ n >>> 16)
        }

        function ae(t, n) {
            return t ^ n + 2654435769 + (t << 6) + (t >> 2) | 0
        }
        var ce = Array.prototype.slice;
        t(e, n), t(r, n), t(i, n), n.isIterable = o, n.isKeyed = u, n.isIndexed = a, n.isAssociative = c, n.isOrdered = s, n.Keyed = e, n.Indexed = r, n.Set = i;
        var se = "@@__IMMUTABLE_ITERABLE__@@",
            fe = "@@__IMMUTABLE_KEYED__@@",
            le = "@@__IMMUTABLE_INDEXED__@@",
            he = "@@__IMMUTABLE_ORDERED__@@",
            pe = "delete",
            de = 5,
            ve = 1 << de,
            ge = ve - 1,
            ye = {},
            _e = {
                value: !1
            },
            me = {
                value: !1
            },
            xe = 0,
            be = 1,
            we = 2,
            Me = "function" == typeof Symbol && Symbol.iterator,
            Se = "@@iterator",
            Ee = Me || Se;
        b.prototype.toString = function() {
            return "[Iterator]"
        }, b.KEYS = xe, b.VALUES = be, b.ENTRIES = we, b.prototype.inspect = b.prototype.toSource = function() {
            return this.toString()
        }, b.prototype[Ee] = function() {
            return this
        }, t(T, n), T.of = function() {
            return T(arguments)
        }, T.prototype.toSeq = function() {
            return this
        }, T.prototype.toString = function() {
            return this.__toString("Seq {", "}")
        }, T.prototype.cacheResult = function() {
            return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(), this.size = this._cache.length), this
        }, T.prototype.__iterate = function(t, n) {
            return H(this, t, n, !0)
        }, T.prototype.__iterator = function(t, n) {
            return B(this, t, n, !0)
        }, t(z, T), z.prototype.toKeyedSeq = function() {
            return this
        }, t(C, T), C.of = function() {
            return C(arguments)
        }, C.prototype.toIndexedSeq = function() {
            return this
        }, C.prototype.toString = function() {
            return this.__toString("Seq [", "]")
        }, C.prototype.__iterate = function(t, n) {
            return H(this, t, n, !1)
        }, C.prototype.__iterator = function(t, n) {
            return B(this, t, n, !1)
        }, t(O, T), O.of = function() {
            return O(arguments)
        }, O.prototype.toSetSeq = function() {
            return this
        }, T.isSeq = q, T.Keyed = z, T.Set = O, T.Indexed = C;
        var ke = "@@__IMMUTABLE_SEQ__@@";
        T.prototype[ke] = !0, t(I, C), I.prototype.get = function(t, n) {
            return this.has(t) ? this._array[v(this, t)] : n
        }, I.prototype.__iterate = function(t, n) {
            for (var e = this._array, r = e.length - 1, i = 0; i <= r; i++)
                if (t(e[n ? r - i : i], i, this) === !1) return i + 1;
            return i
        }, I.prototype.__iterator = function(t, n) {
            var e = this._array,
                r = e.length - 1,
                i = 0;
            return new b(function() {
                return i > r ? M() : w(t, i, e[n ? r - i++ : i++])
            })
        }, t(L, z), L.prototype.get = function(t, n) {
            return void 0 === n || this.has(t) ? this._object[t] : n
        }, L.prototype.has = function(t) {
            return this._object.hasOwnProperty(t)
        }, L.prototype.__iterate = function(t, n) {
            for (var e = this._object, r = this._keys, i = r.length - 1, o = 0; o <= i; o++) {
                var u = r[n ? i - o : o];
                if (t(e[u], u, this) === !1) return o + 1
            }
            return o
        }, L.prototype.__iterator = function(t, n) {
            var e = this._object,
                r = this._keys,
                i = r.length - 1,
                o = 0;
            return new b(function() {
                var u = r[n ? i - o : o];
                return o++ > i ? M() : w(t, u, e[u])
            })
        }, L.prototype[he] = !0, t(P, C), P.prototype.__iterateUncached = function(t, n) {
            if (n) return this.cacheResult().__iterate(t, n);
            var e = this._iterable,
                r = k(e),
                i = 0;
            if (E(r))
                for (var o; !(o = r.next()).done && t(o.value, i++, this) !== !1;);
            return i
        }, P.prototype.__iteratorUncached = function(t, n) {
            if (n) return this.cacheResult().__iterator(t, n);
            var e = this._iterable,
                r = k(e);
            if (!E(r)) return new b(M);
            var i = 0;
            return new b(function() {
                var n = r.next();
                return n.done ? n : w(t, i++, n.value)
            })
        }, t(D, C), D.prototype.__iterateUncached = function(t, n) {
            if (n) return this.cacheResult().__iterate(t, n);
            for (var e = this._iterator, r = this._iteratorCache, i = 0; i < r.length;)
                if (t(r[i], i++, this) === !1) return i;
            for (var o; !(o = e.next()).done;) {
                var u = o.value;
                if (r[i] = u, t(u, i++, this) === !1) break
            }
            return i
        }, D.prototype.__iteratorUncached = function(t, n) {
            if (n) return this.cacheResult().__iterator(t, n);
            var e = this._iterator,
                r = this._iteratorCache,
                i = 0;
            return new b(function() {
                if (i >= r.length) {
                    var n = e.next();
                    if (n.done) return n;
                    r[i] = n.value
                }
                return w(t, i, r[i++])
            })
        };
        var Ne;
        t($, C), $.prototype.toString = function() {
            return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]"
        }, $.prototype.get = function(t, n) {
            return this.has(t) ? this._value : n
        }, $.prototype.includes = function(t) {
            return J(this._value, t)
        }, $.prototype.slice = function(t, n) {
            var e = this.size;
            return y(t, n, e) ? this : new $(this._value, m(n, e) - _(t, e))
        }, $.prototype.reverse = function() {
            return this
        }, $.prototype.indexOf = function(t) {
            return J(this._value, t) ? 0 : -1
        }, $.prototype.lastIndexOf = function(t) {
            return J(this._value, t) ? this.size : -1
        }, $.prototype.__iterate = function(t, n) {
            for (var e = 0; e < this.size; e++)
                if (t(this._value, e, this) === !1) return e + 1;
            return e
        }, $.prototype.__iterator = function(t, n) {
            var e = this,
                r = 0;
            return new b(function() {
                return r < e.size ? w(t, r++, e._value) : M()
            })
        }, $.prototype.equals = function(t) {
            return t instanceof $ ? J(this._value, t._value) : Z(t)
        };
        var Ae;
        t(Q, C), Q.prototype.toString = function() {
            return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (1 !== this._step ? " by " + this._step : "") + " ]"
        }, Q.prototype.get = function(t, n) {
            return this.has(t) ? this._start + v(this, t) * this._step : n
        }, Q.prototype.includes = function(t) {
            var n = (t - this._start) / this._step;
            return n >= 0 && n < this.size && n === Math.floor(n)
        }, Q.prototype.slice = function(t, n) {
            return y(t, n, this.size) ? this : (t = _(t, this.size), n = m(n, this.size), n <= t ? new Q(0, 0) : new Q(this.get(t, this._end), this.get(n, this._end), this._step))
        }, Q.prototype.indexOf = function(t) {
            var n = t - this._start;
            if (n % this._step === 0) {
                var e = n / this._step;
                if (e >= 0 && e < this.size) return e
            }
            return -1
        }, Q.prototype.lastIndexOf = function(t) {
            return this.indexOf(t)
        }, Q.prototype.__iterate = function(t, n) {
            for (var e = this.size - 1, r = this._step, i = n ? this._start + e * r : this._start, o = 0; o <= e; o++) {
                if (t(i, o, this) === !1) return o + 1;
                i += n ? -r : r
            }
            return o
        }, Q.prototype.__iterator = function(t, n) {
            var e = this.size - 1,
                r = this._step,
                i = n ? this._start + e * r : this._start,
                o = 0;
            return new b(function() {
                var u = i;
                return i += n ? -r : r, o > e ? M() : w(t, o++, u)
            })
        }, Q.prototype.equals = function(t) {
            return t instanceof Q ? this._start === t._start && this._end === t._end && this._step === t._step : Z(this, t)
        };
        var Te;
        t(tt, n), t(nt, tt), t(et, tt), t(rt, tt), tt.Keyed = nt, tt.Indexed = et, tt.Set = rt;
        var ze, Ce = "function" == typeof Math.imul && Math.imul(4294967295, 2) === -2 ? Math.imul : function(t, n) {
                t |= 0, n |= 0;
                var e = 65535 & t,
                    r = 65535 & n;
                return e * r + ((t >>> 16) * r + e * (n >>> 16) << 16 >>> 0) | 0
            },
            Oe = Object.isExtensible,
            Ie = function() {
                try {
                    return Object.defineProperty({}, "@", {}), !0
                } catch (t) {
                    return !1
                }
            }(),
            Le = "function" == typeof WeakMap;
        Le && (ze = new WeakMap);
        var Pe = 0,
            De = "__immutablehash__";
        "function" == typeof Symbol && (De = Symbol(De));
        var qe = 16,
            Re = 255,
            je = 0,
            Ue = {};
        t(lt, nt), lt.of = function() {
            var t = ce.call(arguments, 0);
            return wt().withMutations(function(n) {
                for (var e = 0; e < t.length; e += 2) {
                    if (e + 1 >= t.length) throw new Error("Missing value for key: " + t[e]);
                    n.set(t[e], t[e + 1])
                }
            })
        }, lt.prototype.toString = function() {
            return this.__toString("Map {", "}")
        }, lt.prototype.get = function(t, n) {
            return this._root ? this._root.get(0, void 0, t, n) : n
        }, lt.prototype.set = function(t, n) {
            return Mt(this, t, n)
        }, lt.prototype.setIn = function(t, n) {
            return this.updateIn(t, ye, function() {
                return n
            })
        }, lt.prototype.remove = function(t) {
            return Mt(this, t, ye)
        }, lt.prototype.deleteIn = function(t) {
            return this.updateIn(t, function() {
                return ye
            })
        }, lt.prototype.update = function(t, n, e) {
            return 1 === arguments.length ? t(this) : this.updateIn([t], n, e)
        }, lt.prototype.updateIn = function(t, n, e) {
            e || (e = n, n = void 0);
            var r = Lt(this, On(t), n, e);
            return r === ye ? void 0 : r
        }, lt.prototype.clear = function() {
            return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, this.__hash = void 0, this.__altered = !0, this) : wt()
        }, lt.prototype.merge = function() {
            return zt(this, void 0, arguments)
        }, lt.prototype.mergeWith = function(t) {
            var n = ce.call(arguments, 1);
            return zt(this, t, n)
        }, lt.prototype.mergeIn = function(t) {
            var n = ce.call(arguments, 1);
            return this.updateIn(t, wt(), function(t) {
                return "function" == typeof t.merge ? t.merge.apply(t, n) : n[n.length - 1]
            })
        }, lt.prototype.mergeDeep = function() {
            return zt(this, Ct, arguments)
        }, lt.prototype.mergeDeepWith = function(t) {
            var n = ce.call(arguments, 1);
            return zt(this, Ot(t), n)
        }, lt.prototype.mergeDeepIn = function(t) {
            var n = ce.call(arguments, 1);
            return this.updateIn(t, wt(), function(t) {
                return "function" == typeof t.mergeDeep ? t.mergeDeep.apply(t, n) : n[n.length - 1]
            })
        }, lt.prototype.sort = function(t) {
            return Gt(bn(this, t))
        }, lt.prototype.sortBy = function(t, n) {
            return Gt(bn(this, n, t))
        }, lt.prototype.withMutations = function(t) {
            var n = this.asMutable();
            return t(n), n.wasAltered() ? n.__ensureOwner(this.__ownerID) : this
        }, lt.prototype.asMutable = function() {
            return this.__ownerID ? this : this.__ensureOwner(new h)
        }, lt.prototype.asImmutable = function() {
            return this.__ensureOwner()
        }, lt.prototype.wasAltered = function() {
            return this.__altered
        }, lt.prototype.__iterator = function(t, n) {
            return new _t(this, t, n)
        }, lt.prototype.__iterate = function(t, n) {
            var e = this,
                r = 0;
            return this._root && this._root.iterate(function(n) {
                return r++, t(n[1], n[0], e)
            }, n), r
        }, lt.prototype.__ensureOwner = function(t) {
            return t === this.__ownerID ? this : t ? bt(this.size, this._root, t, this.__hash) : (this.__ownerID = t, this.__altered = !1, this)
        }, lt.isMap = ht;
        var Fe = "@@__IMMUTABLE_MAP__@@",
            Ye = lt.prototype;
        Ye[Fe] = !0, Ye[pe] = Ye.remove, Ye.removeIn = Ye.deleteIn, pt.prototype.get = function(t, n, e, r) {
            for (var i = this.entries, o = 0, u = i.length; o < u; o++)
                if (J(e, i[o][0])) return i[o][1];
            return r
        }, pt.prototype.update = function(t, n, e, r, i, o, u) {
            for (var a = i === ye, c = this.entries, s = 0, f = c.length; s < f && !J(r, c[s][0]); s++);
            var h = s < f;
            if (h ? c[s][1] === i : a) return this;
            if (l(u), (a || !h) && l(o), !a || 1 !== c.length) {
                if (!h && !a && c.length >= Be) return Nt(t, c, r, i);
                var d = t && t === this.ownerID,
                    v = d ? c : p(c);
                return h ? a ? s === f - 1 ? v.pop() : v[s] = v.pop() : v[s] = [r, i] : v.push([r, i]), d ? (this.entries = v, this) : new pt(t, v)
            }
        }, dt.prototype.get = function(t, n, e, r) {
            void 0 === n && (n = ot(e));
            var i = 1 << ((0 === t ? n : n >>> t) & ge),
                o = this.bitmap;
            return 0 === (o & i) ? r : this.nodes[Pt(o & i - 1)].get(t + de, n, e, r)
        }, dt.prototype.update = function(t, n, e, r, i, o, u) {
            void 0 === e && (e = ot(r));
            var a = (0 === n ? e : e >>> n) & ge,
                c = 1 << a,
                s = this.bitmap,
                f = 0 !== (s & c);
            if (!f && i === ye) return this;
            var l = Pt(s & c - 1),
                h = this.nodes,
                p = f ? h[l] : void 0,
                d = St(p, t, n + de, e, r, i, o, u);
            if (d === p) return this;
            if (!f && d && h.length >= Ve) return Tt(t, h, s, a, d);
            if (f && !d && 2 === h.length && Et(h[1 ^ l])) return h[1 ^ l];
            if (f && d && 1 === h.length && Et(d)) return d;
            var v = t && t === this.ownerID,
                g = f ? d ? s : s ^ c : s | c,
                y = f ? d ? Dt(h, l, d, v) : Rt(h, l, v) : qt(h, l, d, v);
            return v ? (this.bitmap = g, this.nodes = y, this) : new dt(t, g, y)
        }, vt.prototype.get = function(t, n, e, r) {
            void 0 === n && (n = ot(e));
            var i = (0 === t ? n : n >>> t) & ge,
                o = this.nodes[i];
            return o ? o.get(t + de, n, e, r) : r
        }, vt.prototype.update = function(t, n, e, r, i, o, u) {
            void 0 === e && (e = ot(r));
            var a = (0 === n ? e : e >>> n) & ge,
                c = i === ye,
                s = this.nodes,
                f = s[a];
            if (c && !f) return this;
            var l = St(f, t, n + de, e, r, i, o, u);
            if (l === f) return this;
            var h = this.count;
            if (f) {
                if (!l && (h--, h < Xe)) return At(t, s, h, a)
            } else h++;
            var p = t && t === this.ownerID,
                d = Dt(s, a, l, p);
            return p ? (this.count = h, this.nodes = d, this) : new vt(t, h, d)
        }, gt.prototype.get = function(t, n, e, r) {
            for (var i = this.entries, o = 0, u = i.length; o < u; o++)
                if (J(e, i[o][0])) return i[o][1];
            return r
        }, gt.prototype.update = function(t, n, e, r, i, o, u) {
            void 0 === e && (e = ot(r));
            var a = i === ye;
            if (e !== this.keyHash) return a ? this : (l(u), l(o), kt(this, t, n, e, [r, i]));
            for (var c = this.entries, s = 0, f = c.length; s < f && !J(r, c[s][0]); s++);
            var h = s < f;
            if (h ? c[s][1] === i : a) return this;
            if (l(u), (a || !h) && l(o), a && 2 === f) return new yt(t, this.keyHash, c[1 ^ s]);
            var d = t && t === this.ownerID,
                v = d ? c : p(c);
            return h ? a ? s === f - 1 ? v.pop() : v[s] = v.pop() : v[s] = [r, i] : v.push([r, i]), d ? (this.entries = v, this) : new gt(t, this.keyHash, v)
        }, yt.prototype.get = function(t, n, e, r) {
            return J(e, this.entry[0]) ? this.entry[1] : r
        }, yt.prototype.update = function(t, n, e, r, i, o, u) {
            var a = i === ye,
                c = J(r, this.entry[0]);
            return (c ? i === this.entry[1] : a) ? this : (l(u), a ? void l(o) : c ? t && t === this.ownerID ? (this.entry[1] = i, this) : new yt(t, this.keyHash, [r, i]) : (l(o), kt(this, t, n, ot(r), [r, i])))
        }, pt.prototype.iterate = gt.prototype.iterate = function(t, n) {
            for (var e = this.entries, r = 0, i = e.length - 1; r <= i; r++)
                if (t(e[n ? i - r : r]) === !1) return !1
        }, dt.prototype.iterate = vt.prototype.iterate = function(t, n) {
            for (var e = this.nodes, r = 0, i = e.length - 1; r <= i; r++) {
                var o = e[n ? i - r : r];
                if (o && o.iterate(t, n) === !1) return !1
            }
        }, yt.prototype.iterate = function(t, n) {
            return t(this.entry)
        }, t(_t, b), _t.prototype.next = function() {
            for (var t = this._type, n = this._stack; n;) {
                var e, r = n.node,
                    i = n.index++;
                if (r.entry) {
                    if (0 === i) return mt(t, r.entry)
                } else if (r.entries) {
                    if (e = r.entries.length - 1, i <= e) return mt(t, r.entries[this._reverse ? e - i : i])
                } else if (e = r.nodes.length - 1, i <= e) {
                    var o = r.nodes[this._reverse ? e - i : i];
                    if (o) {
                        if (o.entry) return mt(t, o.entry);
                        n = this._stack = xt(o, n)
                    }
                    continue
                }
                n = this._stack = this._stack.__prev
            }
            return M()
        };
        var He, Be = ve / 4,
            Ve = ve / 2,
            Xe = ve / 4;
        t(jt, et), jt.of = function() {
            return this(arguments)
        }, jt.prototype.toString = function() {
            return this.__toString("List [", "]")
        }, jt.prototype.get = function(t, n) {
            if (t = v(this, t), t >= 0 && t < this.size) {
                t += this._origin;
                var e = Kt(this, t);
                return e && e.array[t & ge]
            }
            return n
        }, jt.prototype.set = function(t, n) {
            return Vt(this, t, n)
        }, jt.prototype.remove = function(t) {
            return this.has(t) ? 0 === t ? this.shift() : t === this.size - 1 ? this.pop() : this.splice(t, 1) : this
        }, jt.prototype.insert = function(t, n) {
            return this.splice(t, 0, n)
        }, jt.prototype.clear = function() {
            return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, this._level = de, this._root = this._tail = null, this.__hash = void 0, this.__altered = !0, this) : Bt()
        }, jt.prototype.push = function() {
            var t = arguments,
                n = this.size;
            return this.withMutations(function(e) {
                Jt(e, 0, n + t.length);
                for (var r = 0; r < t.length; r++) e.set(n + r, t[r])
            })
        }, jt.prototype.pop = function() {
            return Jt(this, 0, -1)
        }, jt.prototype.unshift = function() {
            var t = arguments;
            return this.withMutations(function(n) {
                Jt(n, -t.length);
                for (var e = 0; e < t.length; e++) n.set(e, t[e])
            })
        }, jt.prototype.shift = function() {
            return Jt(this, 1)
        }, jt.prototype.merge = function() {
            return Zt(this, void 0, arguments)
        }, jt.prototype.mergeWith = function(t) {
            var n = ce.call(arguments, 1);
            return Zt(this, t, n)
        }, jt.prototype.mergeDeep = function() {
            return Zt(this, Ct, arguments)
        }, jt.prototype.mergeDeepWith = function(t) {
            var n = ce.call(arguments, 1);
            return Zt(this, Ot(t), n)
        }, jt.prototype.setSize = function(t) {
            return Jt(this, 0, t)
        }, jt.prototype.slice = function(t, n) {
            var e = this.size;
            return y(t, n, e) ? this : Jt(this, _(t, e), m(n, e))
        }, jt.prototype.__iterator = function(t, n) {
            var e = 0,
                r = Yt(this, n);
            return new b(function() {
                var n = r();
                return n === Ze ? M() : w(t, e++, n)
            })
        }, jt.prototype.__iterate = function(t, n) {
            for (var e, r = 0, i = Yt(this, n);
                (e = i()) !== Ze && t(e, r++, this) !== !1;);
            return r
        }, jt.prototype.__ensureOwner = function(t) {
            return t === this.__ownerID ? this : t ? Ht(this._origin, this._capacity, this._level, this._root, this._tail, t, this.__hash) : (this.__ownerID = t, this)
        }, jt.isList = Ut;
        var We = "@@__IMMUTABLE_LIST__@@",
            Ke = jt.prototype;
        Ke[We] = !0, Ke[pe] = Ke.remove, Ke.setIn = Ye.setIn, Ke.deleteIn = Ke.removeIn = Ye.removeIn, Ke.update = Ye.update, Ke.updateIn = Ye.updateIn, Ke.mergeIn = Ye.mergeIn, Ke.mergeDeepIn = Ye.mergeDeepIn, Ke.withMutations = Ye.withMutations, Ke.asMutable = Ye.asMutable, Ke.asImmutable = Ye.asImmutable, Ke.wasAltered = Ye.wasAltered, Ft.prototype.removeBefore = function(t, n, e) {
            if (e === n ? 1 << n : 0 === this.array.length) return this;
            var r = e >>> n & ge;
            if (r >= this.array.length) return new Ft([], t);
            var i, o = 0 === r;
            if (n > 0) {
                var u = this.array[r];
                if (i = u && u.removeBefore(t, n - de, e), i === u && o) return this
            }
            if (o && !i) return this;
            var a = Wt(this, t);
            if (!o)
                for (var c = 0; c < r; c++) a.array[c] = void 0;
            return i && (a.array[r] = i), a
        }, Ft.prototype.removeAfter = function(t, n, e) {
            if (e === (n ? 1 << n : 0) || 0 === this.array.length) return this;
            var r = e - 1 >>> n & ge;
            if (r >= this.array.length) return this;
            var i;
            if (n > 0) {
                var o = this.array[r];
                if (i = o && o.removeAfter(t, n - de, e), i === o && r === this.array.length - 1) return this
            }
            var u = Wt(this, t);
            return u.array.splice(r + 1), i && (u.array[r] = i), u
        };
        var Je, Ze = {};
        t(Gt, lt), Gt.of = function() {
            return this(arguments)
        }, Gt.prototype.toString = function() {
            return this.__toString("OrderedMap {", "}")
        }, Gt.prototype.get = function(t, n) {
            var e = this._map.get(t);
            return void 0 !== e ? this._list.get(e)[1] : n
        }, Gt.prototype.clear = function() {
            return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), this._list.clear(), this) : nn()
        }, Gt.prototype.set = function(t, n) {
            return en(this, t, n)
        }, Gt.prototype.remove = function(t) {
            return en(this, t, ye)
        }, Gt.prototype.wasAltered = function() {
            return this._map.wasAltered() || this._list.wasAltered()
        }, Gt.prototype.__iterate = function(t, n) {
            var e = this;
            return this._list.__iterate(function(n) {
                return n && t(n[1], n[0], e)
            }, n)
        }, Gt.prototype.__iterator = function(t, n) {
            return this._list.fromEntrySeq().__iterator(t, n)
        }, Gt.prototype.__ensureOwner = function(t) {
            if (t === this.__ownerID) return this;
            var n = this._map.__ensureOwner(t),
                e = this._list.__ensureOwner(t);
            return t ? tn(n, e, t, this.__hash) : (this.__ownerID = t, this._map = n, this._list = e, this)
        }, Gt.isOrderedMap = Qt, Gt.prototype[he] = !0, Gt.prototype[pe] = Gt.prototype.remove;
        var $e;
        t(rn, z), rn.prototype.get = function(t, n) {
            return this._iter.get(t, n)
        }, rn.prototype.has = function(t) {
            return this._iter.has(t)
        }, rn.prototype.valueSeq = function() {
            return this._iter.valueSeq()
        }, rn.prototype.reverse = function() {
            var t = this,
                n = fn(this, !0);
            return this._useKeys || (n.valueSeq = function() {
                return t._iter.toSeq().reverse()
            }), n
        }, rn.prototype.map = function(t, n) {
            var e = this,
                r = sn(this, t, n);
            return this._useKeys || (r.valueSeq = function() {
                return e._iter.toSeq().map(t, n)
            }), r
        }, rn.prototype.__iterate = function(t, n) {
            var e, r = this;
            return this._iter.__iterate(this._useKeys ? function(n, e) {
                return t(n, e, r)
            } : (e = n ? Nn(this) : 0, function(i) {
                return t(i, n ? --e : e++, r)
            }), n)
        }, rn.prototype.__iterator = function(t, n) {
            if (this._useKeys) return this._iter.__iterator(t, n);
            var e = this._iter.__iterator(be, n),
                r = n ? Nn(this) : 0;
            return new b(function() {
                var i = e.next();
                return i.done ? i : w(t, n ? --r : r++, i.value, i)
            })
        }, rn.prototype[he] = !0, t(on, C), on.prototype.includes = function(t) {
            return this._iter.includes(t)
        }, on.prototype.__iterate = function(t, n) {
            var e = this,
                r = 0;
            return this._iter.__iterate(function(n) {
                return t(n, r++, e)
            }, n)
        }, on.prototype.__iterator = function(t, n) {
            var e = this._iter.__iterator(be, n),
                r = 0;
            return new b(function() {
                var n = e.next();
                return n.done ? n : w(t, r++, n.value, n)
            })
        }, t(un, O), un.prototype.has = function(t) {
            return this._iter.includes(t)
        }, un.prototype.__iterate = function(t, n) {
            var e = this;
            return this._iter.__iterate(function(n) {
                return t(n, n, e)
            }, n)
        }, un.prototype.__iterator = function(t, n) {
            var e = this._iter.__iterator(be, n);
            return new b(function() {
                var n = e.next();
                return n.done ? n : w(t, n.value, n.value, n)
            })
        }, t(an, z), an.prototype.entrySeq = function() {
            return this._iter.toSeq()
        }, an.prototype.__iterate = function(t, n) {
            var e = this;
            return this._iter.__iterate(function(n) {
                if (n) {
                    kn(n);
                    var r = o(n);
                    return t(r ? n.get(1) : n[1], r ? n.get(0) : n[0], e)
                }
            }, n)
        }, an.prototype.__iterator = function(t, n) {
            var e = this._iter.__iterator(be, n);
            return new b(function() {
                for (;;) {
                    var n = e.next();
                    if (n.done) return n;
                    var r = n.value;
                    if (r) {
                        kn(r);
                        var i = o(r);
                        return w(t, i ? r.get(0) : r[0], i ? r.get(1) : r[1], n)
                    }
                }
            })
        }, on.prototype.cacheResult = rn.prototype.cacheResult = un.prototype.cacheResult = an.prototype.cacheResult = zn, t(In, nt), In.prototype.toString = function() {
            return this.__toString(Pn(this) + " {", "}")
        }, In.prototype.has = function(t) {
            return this._defaultValues.hasOwnProperty(t)
        }, In.prototype.get = function(t, n) {
            if (!this.has(t)) return n;
            var e = this._defaultValues[t];
            return this._map ? this._map.get(t, e) : e
        }, In.prototype.clear = function() {
            if (this.__ownerID) return this._map && this._map.clear(), this;
            var t = this.constructor;
            return t._empty || (t._empty = Ln(this, wt()))
        }, In.prototype.set = function(t, n) {
            if (!this.has(t)) throw new Error('Cannot set unknown key "' + t + '" on ' + Pn(this));
            if (this._map && !this._map.has(t)) {
                var e = this._defaultValues[t];
                if (n === e) return this
            }
            var r = this._map && this._map.set(t, n);
            return this.__ownerID || r === this._map ? this : Ln(this, r)
        }, In.prototype.remove = function(t) {
            if (!this.has(t)) return this;
            var n = this._map && this._map.remove(t);
            return this.__ownerID || n === this._map ? this : Ln(this, n)
        }, In.prototype.wasAltered = function() {
            return this._map.wasAltered()
        }, In.prototype.__iterator = function(t, n) {
            var r = this;
            return e(this._defaultValues).map(function(t, n) {
                return r.get(n)
            }).__iterator(t, n)
        }, In.prototype.__iterate = function(t, n) {
            var r = this;
            return e(this._defaultValues).map(function(t, n) {
                return r.get(n)
            }).__iterate(t, n)
        }, In.prototype.__ensureOwner = function(t) {
            if (t === this.__ownerID) return this;
            var n = this._map && this._map.__ensureOwner(t);
            return t ? Ln(this, n, t) : (this.__ownerID = t, this._map = n, this)
        };
        var Ge = In.prototype;
        Ge[pe] = Ge.remove, Ge.deleteIn = Ge.removeIn = Ye.removeIn, Ge.merge = Ye.merge, Ge.mergeWith = Ye.mergeWith, Ge.mergeIn = Ye.mergeIn, Ge.mergeDeep = Ye.mergeDeep, Ge.mergeDeepWith = Ye.mergeDeepWith, Ge.mergeDeepIn = Ye.mergeDeepIn, Ge.setIn = Ye.setIn, Ge.update = Ye.update, Ge.updateIn = Ye.updateIn, Ge.withMutations = Ye.withMutations, Ge.asMutable = Ye.asMutable, Ge.asImmutable = Ye.asImmutable, t(Rn, rt), Rn.of = function() {
            return this(arguments)
        }, Rn.fromKeys = function(t) {
            return this(e(t).keySeq())
        }, Rn.prototype.toString = function() {
            return this.__toString("Set {", "}")
        }, Rn.prototype.has = function(t) {
            return this._map.has(t)
        }, Rn.prototype.add = function(t) {
            return Un(this, this._map.set(t, !0))
        }, Rn.prototype.remove = function(t) {
            return Un(this, this._map.remove(t))
        }, Rn.prototype.clear = function() {
            return Un(this, this._map.clear())
        }, Rn.prototype.union = function() {
            var t = ce.call(arguments, 0);
            return t = t.filter(function(t) {
                return 0 !== t.size
            }), 0 === t.length ? this : 0 !== this.size || this.__ownerID || 1 !== t.length ? this.withMutations(function(n) {
                for (var e = 0; e < t.length; e++) i(t[e]).forEach(function(t) {
                    return n.add(t)
                })
            }) : this.constructor(t[0])
        }, Rn.prototype.intersect = function() {
            var t = ce.call(arguments, 0);
            if (0 === t.length) return this;
            t = t.map(function(t) {
                return i(t)
            });
            var n = this;
            return this.withMutations(function(e) {
                n.forEach(function(n) {
                    t.every(function(t) {
                        return t.includes(n)
                    }) || e.remove(n)
                })
            })
        }, Rn.prototype.subtract = function() {
            var t = ce.call(arguments, 0);
            if (0 === t.length) return this;
            t = t.map(function(t) {
                return i(t)
            });
            var n = this;
            return this.withMutations(function(e) {
                n.forEach(function(n) {
                    t.some(function(t) {
                        return t.includes(n)
                    }) && e.remove(n)
                })
            })
        }, Rn.prototype.merge = function() {
            return this.union.apply(this, arguments)
        }, Rn.prototype.mergeWith = function(t) {
            var n = ce.call(arguments, 1);
            return this.union.apply(this, n)
        }, Rn.prototype.sort = function(t) {
            return Hn(bn(this, t))
        }, Rn.prototype.sortBy = function(t, n) {
            return Hn(bn(this, n, t))
        }, Rn.prototype.wasAltered = function() {
            return this._map.wasAltered()
        }, Rn.prototype.__iterate = function(t, n) {
            var e = this;
            return this._map.__iterate(function(n, r) {
                return t(r, r, e)
            }, n)
        }, Rn.prototype.__iterator = function(t, n) {
            return this._map.map(function(t, n) {
                return n
            }).__iterator(t, n)
        }, Rn.prototype.__ensureOwner = function(t) {
            if (t === this.__ownerID) return this;
            var n = this._map.__ensureOwner(t);
            return t ? this.__make(n, t) : (this.__ownerID = t, this._map = n, this)
        }, Rn.isSet = jn;
        var Qe = "@@__IMMUTABLE_SET__@@",
            tr = Rn.prototype;
        tr[Qe] = !0, tr[pe] = tr.remove, tr.mergeDeep = tr.merge, tr.mergeDeepWith = tr.mergeWith, tr.withMutations = Ye.withMutations, tr.asMutable = Ye.asMutable, tr.asImmutable = Ye.asImmutable, tr.__empty = Yn, tr.__make = Fn;
        var nr;
        t(Hn, Rn), Hn.of = function() {
            return this(arguments)
        }, Hn.fromKeys = function(t) {
            return this(e(t).keySeq())
        }, Hn.prototype.toString = function() {
            return this.__toString("OrderedSet {", "}")
        }, Hn.isOrderedSet = Bn;
        var er = Hn.prototype;
        er[he] = !0, er.__empty = Xn, er.__make = Vn;
        var rr;
        t(Wn, et), Wn.of = function() {
            return this(arguments)
        }, Wn.prototype.toString = function() {
            return this.__toString("Stack [", "]")
        }, Wn.prototype.get = function(t, n) {
            var e = this._head;
            for (t = v(this, t); e && t--;) e = e.next;
            return e ? e.value : n
        }, Wn.prototype.peek = function() {
            return this._head && this._head.value
        }, Wn.prototype.push = function() {
            if (0 === arguments.length) return this;
            for (var t = this.size + arguments.length, n = this._head, e = arguments.length - 1; e >= 0; e--) n = {
                value: arguments[e],
                next: n
            };
            return this.__ownerID ? (this.size = t, this._head = n, this.__hash = void 0, this.__altered = !0, this) : Jn(t, n)
        }, Wn.prototype.pushAll = function(t) {
            if (t = r(t), 0 === t.size) return this;
            ft(t.size);
            var n = this.size,
                e = this._head;
            return t.reverse().forEach(function(t) {
                n++, e = {
                    value: t,
                    next: e
                }
            }), this.__ownerID ? (this.size = n, this._head = e, this.__hash = void 0, this.__altered = !0, this) : Jn(n, e)
        }, Wn.prototype.pop = function() {
            return this.slice(1)
        }, Wn.prototype.unshift = function() {
            return this.push.apply(this, arguments)
        }, Wn.prototype.unshiftAll = function(t) {
            return this.pushAll(t)
        }, Wn.prototype.shift = function() {
            return this.pop.apply(this, arguments)
        }, Wn.prototype.clear = function() {
            return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = void 0, this.__hash = void 0, this.__altered = !0, this) : Zn()
        }, Wn.prototype.slice = function(t, n) {
            if (y(t, n, this.size)) return this;
            var e = _(t, this.size),
                r = m(n, this.size);
            if (r !== this.size) return et.prototype.slice.call(this, t, n);
            for (var i = this.size - e, o = this._head; e--;) o = o.next;
            return this.__ownerID ? (this.size = i, this._head = o, this.__hash = void 0, this.__altered = !0, this) : Jn(i, o)
        }, Wn.prototype.__ensureOwner = function(t) {
            return t === this.__ownerID ? this : t ? Jn(this.size, this._head, t, this.__hash) : (this.__ownerID = t, this.__altered = !1, this)
        }, Wn.prototype.__iterate = function(t, n) {
            if (n) return this.reverse().__iterate(t);
            for (var e = 0, r = this._head; r && t(r.value, e++, this) !== !1;) r = r.next;
            return e
        }, Wn.prototype.__iterator = function(t, n) {
            if (n) return this.reverse().__iterator(t);
            var e = 0,
                r = this._head;
            return new b(function() {
                if (r) {
                    var n = r.value;
                    return r = r.next, w(t, e++, n)
                }
                return M()
            })
        }, Wn.isStack = Kn;
        var ir = "@@__IMMUTABLE_STACK__@@",
            or = Wn.prototype;
        or[ir] = !0, or.withMutations = Ye.withMutations, or.asMutable = Ye.asMutable, or.asImmutable = Ye.asImmutable, or.wasAltered = Ye.wasAltered;
        var ur;
        n.Iterator = b, $n(n, {
            toArray: function() {
                ft(this.size);
                var t = new Array(this.size || 0);
                return this.valueSeq().__iterate(function(n, e) {
                    t[e] = n
                }), t
            },
            toIndexedSeq: function() {
                return new on(this)
            },
            toJS: function() {
                return this.toSeq().map(function(t) {
                    return t && "function" == typeof t.toJS ? t.toJS() : t
                }).__toJS()
            },
            toJSON: function() {
                return this.toSeq().map(function(t) {
                    return t && "function" == typeof t.toJSON ? t.toJSON() : t
                }).__toJS()
            },
            toKeyedSeq: function() {
                return new rn(this, !0)
            },
            toMap: function() {
                return lt(this.toKeyedSeq())
            },
            toObject: function() {
                ft(this.size);
                var t = {};
                return this.__iterate(function(n, e) {
                    t[e] = n
                }), t
            },
            toOrderedMap: function() {
                return Gt(this.toKeyedSeq())
            },
            toOrderedSet: function() {
                return Hn(u(this) ? this.valueSeq() : this)
            },
            toSet: function() {
                return Rn(u(this) ? this.valueSeq() : this)
            },
            toSetSeq: function() {
                return new un(this)
            },
            toSeq: function() {
                return a(this) ? this.toIndexedSeq() : u(this) ? this.toKeyedSeq() : this.toSetSeq()
            },
            toStack: function() {
                return Wn(u(this) ? this.valueSeq() : this)
            },
            toList: function() {
                return jt(u(this) ? this.valueSeq() : this)
            },
            toString: function() {
                return "[Iterable]"
            },
            __toString: function(t, n) {
                return 0 === this.size ? t + n : t + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + n
            },
            concat: function() {
                var t = ce.call(arguments, 0);
                return En(this, yn(this, t))
            },
            includes: function(t) {
                return this.some(function(n) {
                    return J(n, t)
                })
            },
            entries: function() {
                return this.__iterator(we)
            },
            every: function(t, n) {
                ft(this.size);
                var e = !0;
                return this.__iterate(function(r, i, o) {
                    if (!t.call(n, r, i, o)) return e = !1, !1
                }), e
            },
            filter: function(t, n) {
                return En(this, ln(this, t, n, !0))
            },
            find: function(t, n, e) {
                var r = this.findEntry(t, n);
                return r ? r[1] : e
            },
            forEach: function(t, n) {
                return ft(this.size), this.__iterate(n ? t.bind(n) : t)
            },
            join: function(t) {
                ft(this.size), t = void 0 !== t ? "" + t : ",";
                var n = "",
                    e = !0;
                return this.__iterate(function(r) {
                    e ? e = !1 : n += t, n += null !== r && void 0 !== r ? r.toString() : ""
                }), n
            },
            keys: function() {
                return this.__iterator(xe)
            },
            map: function(t, n) {
                return En(this, sn(this, t, n))
            },
            reduce: function(t, n, e) {
                ft(this.size);
                var r, i;
                return arguments.length < 2 ? i = !0 : r = n, this.__iterate(function(n, o, u) {
                    i ? (i = !1, r = n) : r = t.call(e, r, n, o, u)
                }), r
            },
            reduceRight: function(t, n, e) {
                var r = this.toKeyedSeq().reverse();
                return r.reduce.apply(r, arguments)
            },
            reverse: function() {
                return En(this, fn(this, !0))
            },
            slice: function(t, n) {
                return En(this, dn(this, t, n, !0))
            },
            some: function(t, n) {
                return !this.every(te(t), n)
            },
            sort: function(t) {
                return En(this, bn(this, t))
            },
            values: function() {
                return this.__iterator(be)
            },
            butLast: function() {
                return this.slice(0, -1)
            },
            isEmpty: function() {
                return void 0 !== this.size ? 0 === this.size : !this.some(function() {
                    return !0
                })
            },
            count: function(t, n) {
                return d(t ? this.toSeq().filter(t, n) : this)
            },
            countBy: function(t, n) {
                return hn(this, t, n)
            },
            equals: function(t) {
                return Z(this, t)
            },
            entrySeq: function() {
                var t = this;
                if (t._cache) return new I(t._cache);
                var n = t.toSeq().map(Qn).toIndexedSeq();
                return n.fromEntrySeq = function() {
                    return t.toSeq()
                }, n
            },
            filterNot: function(t, n) {
                return this.filter(te(t), n)
            },
            findEntry: function(t, n, e) {
                var r = e;
                return this.__iterate(function(e, i, o) {
                    if (t.call(n, e, i, o)) return r = [i, e], !1
                }), r
            },
            findKey: function(t, n) {
                var e = this.findEntry(t, n);
                return e && e[0]
            },
            findLast: function(t, n, e) {
                return this.toKeyedSeq().reverse().find(t, n, e)
            },
            findLastEntry: function(t, n, e) {
                return this.toKeyedSeq().reverse().findEntry(t, n, e)
            },
            findLastKey: function(t, n) {
                return this.toKeyedSeq().reverse().findKey(t, n)
            },
            first: function() {
                return this.find(g)
            },
            flatMap: function(t, n) {
                return En(this, mn(this, t, n))
            },
            flatten: function(t) {
                return En(this, _n(this, t, !0))
            },
            fromEntrySeq: function() {
                return new an(this)
            },
            get: function(t, n) {
                return this.find(function(n, e) {
                    return J(e, t)
                }, void 0, n)
            },
            getIn: function(t, n) {
                for (var e, r = this, i = On(t); !(e = i.next()).done;) {
                    var o = e.value;
                    if (r = r && r.get ? r.get(o, ye) : ye, r === ye) return n
                }
                return r
            },
            groupBy: function(t, n) {
                return pn(this, t, n)
            },
            has: function(t) {
                return this.get(t, ye) !== ye
            },
            hasIn: function(t) {
                return this.getIn(t, ye) !== ye
            },
            isSubset: function(t) {
                return t = "function" == typeof t.includes ? t : n(t), this.every(function(n) {
                    return t.includes(n)
                })
            },
            isSuperset: function(t) {
                return t = "function" == typeof t.isSubset ? t : n(t), t.isSubset(this)
            },
            keyOf: function(t) {
                return this.findKey(function(n) {
                    return J(n, t)
                })
            },
            keySeq: function() {
                return this.toSeq().map(Gn).toIndexedSeq()
            },
            last: function() {
                return this.toSeq().reverse().first()
            },
            lastKeyOf: function(t) {
                return this.toKeyedSeq().reverse().keyOf(t)
            },
            max: function(t) {
                return wn(this, t)
            },
            maxBy: function(t, n) {
                return wn(this, n, t)
            },
            min: function(t) {
                return wn(this, t ? ne(t) : ie)
            },
            minBy: function(t, n) {
                return wn(this, n ? ne(n) : ie, t)
            },
            rest: function() {
                return this.slice(1)
            },
            skip: function(t) {
                return this.slice(Math.max(0, t))
            },
            skipLast: function(t) {
                return En(this, this.toSeq().reverse().skip(t).reverse())
            },
            skipWhile: function(t, n) {
                return En(this, gn(this, t, n, !0))
            },
            skipUntil: function(t, n) {
                return this.skipWhile(te(t), n)
            },
            sortBy: function(t, n) {
                return En(this, bn(this, n, t))
            },
            take: function(t) {
                return this.slice(0, Math.max(0, t))
            },
            takeLast: function(t) {
                return En(this, this.toSeq().reverse().take(t).reverse())
            },
            takeWhile: function(t, n) {
                return En(this, vn(this, t, n))
            },
            takeUntil: function(t, n) {
                return this.takeWhile(te(t), n)
            },
            valueSeq: function() {
                return this.toIndexedSeq()
            },
            hashCode: function() {
                return this.__hash || (this.__hash = oe(this))
            }
        });
        var ar = n.prototype;
        ar[se] = !0, ar[Ee] = ar.values, ar.__toJS = ar.toArray, ar.__toStringMapper = ee, ar.inspect = ar.toSource = function() {
            return this.toString()
        }, ar.chain = ar.flatMap, ar.contains = ar.includes, $n(e, {
            flip: function() {
                return En(this, cn(this))
            },
            mapEntries: function(t, n) {
                var e = this,
                    r = 0;
                return En(this, this.toSeq().map(function(i, o) {
                    return t.call(n, [o, i], r++, e)
                }).fromEntrySeq())
            },
            mapKeys: function(t, n) {
                var e = this;
                return En(this, this.toSeq().flip().map(function(r, i) {
                    return t.call(n, r, i, e)
                }).flip())
            }
        });
        var cr = e.prototype;
        cr[fe] = !0, cr[Ee] = ar.entries, cr.__toJS = ar.toObject, cr.__toStringMapper = function(t, n) {
            return JSON.stringify(n) + ": " + ee(t)
        }, $n(r, {
            toKeyedSeq: function() {
                return new rn(this, !1)
            },
            filter: function(t, n) {
                return En(this, ln(this, t, n, !1))
            },
            findIndex: function(t, n) {
                var e = this.findEntry(t, n);
                return e ? e[0] : -1
            },
            indexOf: function(t) {
                var n = this.keyOf(t);
                return void 0 === n ? -1 : n
            },
            lastIndexOf: function(t) {
                var n = this.lastKeyOf(t);
                return void 0 === n ? -1 : n
            },
            reverse: function() {
                return En(this, fn(this, !1))
            },
            slice: function(t, n) {
                return En(this, dn(this, t, n, !1))
            },
            splice: function(t, n) {
                var e = arguments.length;
                if (n = Math.max(0 | n, 0), 0 === e || 2 === e && !n) return this;
                t = _(t, t < 0 ? this.count() : this.size);
                var r = this.slice(0, t);
                return En(this, 1 === e ? r : r.concat(p(arguments, 2), this.slice(t + n)))
            },
            findLastIndex: function(t, n) {
                var e = this.findLastEntry(t, n);
                return e ? e[0] : -1
            },
            first: function() {
                return this.get(0)
            },
            flatten: function(t) {
                return En(this, _n(this, t, !1))
            },
            get: function(t, n) {
                return t = v(this, t), t < 0 || this.size === 1 / 0 || void 0 !== this.size && t > this.size ? n : this.find(function(n, e) {
                    return e === t
                }, void 0, n)
            },
            has: function(t) {
                return t = v(this, t), t >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || t < this.size : this.indexOf(t) !== -1)
            },
            interpose: function(t) {
                return En(this, xn(this, t))
            },
            interleave: function() {
                var t = [this].concat(p(arguments)),
                    n = Sn(this.toSeq(), C.of, t),
                    e = n.flatten(!0);
                return n.size && (e.size = n.size * t.length), En(this, e)
            },
            keySeq: function() {
                return Q(0, this.size)
            },
            last: function() {
                return this.get(-1)
            },
            skipWhile: function(t, n) {
                return En(this, gn(this, t, n, !1))
            },
            zip: function() {
                var t = [this].concat(p(arguments));
                return En(this, Sn(this, re, t))
            },
            zipWith: function(t) {
                var n = p(arguments);
                return n[0] = this, En(this, Sn(this, t, n))
            }
        }), r.prototype[le] = !0, r.prototype[he] = !0, $n(i, {
            get: function(t, n) {
                return this.has(t) ? t : n
            },
            includes: function(t) {
                return this.has(t)
            },
            keySeq: function() {
                return this.valueSeq()
            }
        }), i.prototype.has = ar.includes, i.prototype.contains = i.prototype.includes, $n(z, e.prototype), $n(C, r.prototype), $n(O, i.prototype), $n(nt, e.prototype), $n(et, r.prototype), $n(rt, i.prototype);
        var sr = {
            Iterable: n,
            Seq: T,
            Collection: tt,
            Map: lt,
            OrderedMap: Gt,
            List: jt,
            Stack: Wn,
            Set: Rn,
            OrderedSet: Hn,
            Record: In,
            Range: Q,
            Repeat: $,
            is: J,
            fromJS: V
        };
        return sr
    })
}, function(t, n, e) {
    var r = e(39);
    "string" == typeof r && (r = [
        [t.id, r, ""]
    ]);
    e(41)(r, {});
    r.locals && (t.exports = r.locals)
}, function(t, n, e) {
    n = t.exports = e(40)(), n.push([t.id, ".dimension{cursor:ns-resize}.category{cursor:ew-resize}.dimension tspan.name{font-size:1.5em;fill:#333;font-weight:700}.dimension tspan.sort{fill:#000;cursor:pointer;opacity:0}.dimension tspan.sort:hover{fill:#333}.dimension:hover tspan.name{fill:#000}.dimension:hover tspan.sort{opacity:1}.dimension line{stroke:#000}.dimension rect{stroke:none;fill-opacity:0}.category-background,.dimension>rect{fill:#fff}.dimension>rect{display:none}.category:hover rect,.dimension:hover>rect{fill-opacity:.3}.ribbon path{stroke-opacity:0;fill-opacity:.5}.ribbon path.active{fill-opacity:.9}.ribbon-mouse path{fill-opacity:0}.category-0{fill:#1f77b4;stroke:#1f77b4}.category-1{fill:#ff7f0e;stroke:#ff7f0e}.category-2{fill:#2ca02c;stroke:#2ca02c}.category-3{fill:#d62728;stroke:#d62728}.category-4{fill:#9467bd;stroke:#9467bd}.category-5{fill:#8c564b;stroke:#8c564b}.category-6{fill:#e377c2;stroke:#e377c2}.category-7{fill:#7f7f7f;stroke:#7f7f7f}.category-8{fill:#bcbd22;stroke:#bcbd22}.category-9{fill:#17becf;stroke:#17becf}.tooltip{background-color:hsla(0,0%,95%,.6);position:absolute;padding:5px}", ""])
}, function(t, n) {
    t.exports = function() {
        var t = [];
        return t.toString = function() {
            for (var t = [], n = 0; n < this.length; n++) {
                var e = this[n];
                e[2] ? t.push("@media " + e[2] + "{" + e[1] + "}") : t.push(e[1])
            }
            return t.join("")
        }, t.i = function(n, e) {
            "string" == typeof n && (n = [
                [null, n, ""]
            ]);
            for (var r = {}, i = 0; i < this.length; i++) {
                var o = this[i][0];
                "number" == typeof o && (r[o] = !0)
            }
            for (i = 0; i < n.length; i++) {
                var u = n[i];
                "number" == typeof u[0] && r[u[0]] || (e && !u[2] ? u[2] = e : e && (u[2] = "(" + u[2] + ") and (" + e + ")"), t.push(u))
            }
        }, t
    }
}, function(t, n, e) {
    function r(t, n) {
        for (var e = 0; e < t.length; e++) {
            var r = t[e],
                i = p[r.id];
            if (i) {
                i.refs++;
                for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]);
                for (; o < r.parts.length; o++) i.parts.push(s(r.parts[o], n))
            } else {
                for (var u = [], o = 0; o < r.parts.length; o++) u.push(s(r.parts[o], n));
                p[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: u
                }
            }
        }
    }

    function i(t) {
        for (var n = [], e = {}, r = 0; r < t.length; r++) {
            var i = t[r],
                o = i[0],
                u = i[1],
                a = i[2],
                c = i[3],
                s = {
                    css: u,
                    media: a,
                    sourceMap: c
                };
            e[o] ? e[o].parts.push(s) : n.push(e[o] = {
                id: o,
                parts: [s]
            })
        }
        return n
    }

    function o(t, n) {
        var e = g(),
            r = m[m.length - 1];
        if ("top" === t.insertAt) r ? r.nextSibling ? e.insertBefore(n, r.nextSibling) : e.appendChild(n) : e.insertBefore(n, e.firstChild), m.push(n);
        else {
            if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            e.appendChild(n)
        }
    }

    function u(t) {
        t.parentNode.removeChild(t);
        var n = m.indexOf(t);
        n >= 0 && m.splice(n, 1)
    }

    function a(t) {
        var n = document.createElement("style");
        return n.type = "text/css", o(t, n), n
    }

    function c(t) {
        var n = document.createElement("link");
        return n.rel = "stylesheet", o(t, n), n
    }

    function s(t, n) {
        var e, r, i;
        if (n.singleton) {
            var o = _++;
            e = y || (y = a(n)), r = f.bind(null, e, o, !1), i = f.bind(null, e, o, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (e = c(n), r = h.bind(null, e), i = function() {
            u(e), e.href && URL.revokeObjectURL(e.href)
        }) : (e = a(n), r = l.bind(null, e), i = function() {
            u(e)
        });
        return r(t),
            function(n) {
                if (n) {
                    if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap) return;
                    r(t = n)
                } else i()
            }
    }

    function f(t, n, e, r) {
        var i = e ? "" : r.css;
        if (t.styleSheet) t.styleSheet.cssText = x(n, i);
        else {
            var o = document.createTextNode(i),
                u = t.childNodes;
            u[n] && t.removeChild(u[n]), u.length ? t.insertBefore(o, u[n]) : t.appendChild(o)
        }
    }

    function l(t, n) {
        var e = n.css,
            r = n.media;
        if (r && t.setAttribute("media", r), t.styleSheet) t.styleSheet.cssText = e;
        else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e))
        }
    }

    function h(t, n) {
        var e = n.css,
            r = n.sourceMap;
        r && (e += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
        var i = new Blob([e], {
                type: "text/css"
            }),
            o = t.href;
        t.href = URL.createObjectURL(i), o && URL.revokeObjectURL(o)
    }
    var p = {},
        d = function(t) {
            var n;
            return function() {
                return "undefined" == typeof n && (n = t.apply(this, arguments)), n
            }
        },
        v = d(function() {
            return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
        }),
        g = d(function() {
            return document.head || document.getElementsByTagName("head")[0]
        }),
        y = null,
        _ = 0,
        m = [];
    t.exports = function(t, n) {
        n = n || {}, "undefined" == typeof n.singleton && (n.singleton = v()), "undefined" == typeof n.insertAt && (n.insertAt = "bottom");
        var e = i(t);
        return r(e, n),
            function(t) {
                for (var o = [], u = 0; u < e.length; u++) {
                    var a = e[u],
                        c = p[a.id];
                    c.refs--, o.push(c)
                }
                if (t) {
                    var s = i(t);
                    r(s, n)
                }
                for (var u = 0; u < o.length; u++) {
                    var c = o[u];
                    if (0 === c.refs) {
                        for (var f = 0; f < c.parts.length; f++) c.parts[f]();
                        delete p[c.id]
                    }
                }
            }
    };
    var x = function() {
        var t = [];
        return function(n, e) {
            return t[n] = e, t.filter(Boolean).join("\n")
        }
    }()
}, function(t, n, e) {
    var r, i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    ! function() {
        function u(t) {
            return t && (t.ownerDocument || t.document || t).documentElement
        }

        function a(t) {
            return t && (t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView)
        }

        function c(t, n) {
            return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
        }

        function s(t) {
            return null === t ? NaN : +t
        }

        function f(t) {
            return !isNaN(t)
        }

        function l(t) {
            return {
                left: function(n, e, r, i) {
                    for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = n.length); r < i;) {
                        var o = r + i >>> 1;
                        t(n[o], e) < 0 ? r = o + 1 : i = o
                    }
                    return r
                },
                right: function(n, e, r, i) {
                    for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = n.length); r < i;) {
                        var o = r + i >>> 1;
                        t(n[o], e) > 0 ? i = o : r = o + 1
                    }
                    return r
                }
            }
        }

        function h(t) {
            return t.length
        }

        function p(t) {
            for (var n = 1; t * n % 1;) n *= 10;
            return n
        }

        function d(t, n) {
            for (var e in n) Object.defineProperty(t.prototype, e, {
                value: n[e],
                enumerable: !1
            })
        }

        function v() {
            this._ = Object.create(null)
        }

        function g(t) {
            return (t += "") === Eu || t[0] === ku ? ku + t : t
        }

        function y(t) {
            return (t += "")[0] === ku ? t.slice(1) : t
        }

        function _(t) {
            return g(t) in this._
        }

        function m(t) {
            return (t = g(t)) in this._ && delete this._[t]
        }

        function x() {
            var t = [];
            for (var n in this._) t.push(y(n));
            return t
        }

        function b() {
            var t = 0;
            for (var n in this._) ++t;
            return t
        }

        function w() {
            for (var t in this._) return !1;
            return !0
        }

        function M() {
            this._ = Object.create(null)
        }

        function S(t) {
            return t
        }

        function E(t, n, e) {
            return function() {
                var r = e.apply(n, arguments);
                return r === n ? t : r
            }
        }

        function k(t, n) {
            if (n in t) return n;
            n = n.charAt(0).toUpperCase() + n.slice(1);
            for (var e = 0, r = Nu.length; e < r; ++e) {
                var i = Nu[e] + n;
                if (i in t) return i
            }
        }

        function N() {}

        function A() {}

        function T(t) {
            function n() {
                for (var n, r = e, i = -1, o = r.length; ++i < o;)(n = r[i].on) && n.apply(this, arguments);
                return t
            }
            var e = [],
                r = new v;
            return n.on = function(n, i) {
                var o, u = r.get(n);
                return arguments.length < 2 ? u && u.on : (u && (u.on = null, e = e.slice(0, o = e.indexOf(u)).concat(e.slice(o + 1)), r.remove(n)), i && e.push(r.set(n, {
                    on: i
                })), t)
            }, n
        }

        function z() {
            du.event.preventDefault()
        }

        function C() {
            for (var t, n = du.event; t = n.sourceEvent;) n = t;
            return n
        }

        function O(t) {
            for (var n = new A, e = 0, r = arguments.length; ++e < r;) n[arguments[e]] = T(n);
            return n.of = function(e, r) {
                return function(i) {
                    try {
                        var o = i.sourceEvent = du.event;
                        i.target = t, du.event = i, n[i.type].apply(e, r)
                    } finally {
                        du.event = o
                    }
                }
            }, n
        }

        function I(t) {
            return Tu(t, Iu), t
        }

        function L(t) {
            return "function" == typeof t ? t : function() {
                return zu(t, this)
            }
        }

        function P(t) {
            return "function" == typeof t ? t : function() {
                return Cu(t, this)
            }
        }

        function D(t, n) {
            function e() {
                this.removeAttribute(t)
            }

            function r() {
                this.removeAttributeNS(t.space, t.local)
            }

            function i() {
                this.setAttribute(t, n)
            }

            function o() {
                this.setAttributeNS(t.space, t.local, n)
            }

            function u() {
                var e = n.apply(this, arguments);
                null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
            }

            function a() {
                var e = n.apply(this, arguments);
                null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
            }
            return t = du.ns.qualify(t), null == n ? t.local ? r : e : "function" == typeof n ? t.local ? a : u : t.local ? o : i
        }

        function q(t) {
            return t.trim().replace(/\s+/g, " ")
        }

        function R(t) {
            return new RegExp("(?:^|\\s+)" + du.requote(t) + "(?:\\s+|$)", "g")
        }

        function j(t) {
            return (t + "").trim().split(/^|\s+/)
        }

        function U(t, n) {
            function e() {
                for (var e = -1; ++e < i;) t[e](this, n)
            }

            function r() {
                for (var e = -1, r = n.apply(this, arguments); ++e < i;) t[e](this, r)
            }
            t = j(t).map(F);
            var i = t.length;
            return "function" == typeof n ? r : e
        }

        function F(t) {
            var n = R(t);
            return function(e, r) {
                if (i = e.classList) return r ? i.add(t) : i.remove(t);
                var i = e.getAttribute("class") || "";
                r ? (n.lastIndex = 0, n.test(i) || e.setAttribute("class", q(i + " " + t))) : e.setAttribute("class", q(i.replace(n, " ")))
            }
        }

        function Y(t, n, e) {
            function r() {
                this.style.removeProperty(t)
            }

            function i() {
                this.style.setProperty(t, n, e)
            }

            function o() {
                var r = n.apply(this, arguments);
                null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
            }
            return null == n ? r : "function" == typeof n ? o : i
        }

        function H(t, n) {
            function e() {
                delete this[t]
            }

            function r() {
                this[t] = n
            }

            function i() {
                var e = n.apply(this, arguments);
                null == e ? delete this[t] : this[t] = e
            }
            return null == n ? e : "function" == typeof n ? i : r
        }

        function B(t) {
            function n() {
                var n = this.ownerDocument,
                    e = this.namespaceURI;
                return e === Lu && n.documentElement.namespaceURI === Lu ? n.createElement(t) : n.createElementNS(e, t)
            }

            function e() {
                return this.ownerDocument.createElementNS(t.space, t.local)
            }
            return "function" == typeof t ? t : (t = du.ns.qualify(t)).local ? e : n
        }

        function V() {
            var t = this.parentNode;
            t && t.removeChild(this)
        }

        function X(t) {
            return {
                __data__: t
            }
        }

        function W(t) {
            return function() {
                return Ou(this, t)
            }
        }

        function K(t) {
            return arguments.length || (t = c),
                function(n, e) {
                    return n && e ? t(n.__data__, e.__data__) : !n - !e
                }
        }

        function J(t, n) {
            for (var e = 0, r = t.length; e < r; e++)
                for (var i, o = t[e], u = 0, a = o.length; u < a; u++)(i = o[u]) && n(i, u, e);
            return t
        }

        function Z(t) {
            return Tu(t, Du), t
        }

        function $(t) {
            var n, e;
            return function(r, i, o) {
                var u, a = t[o].update,
                    c = a.length;
                for (o != e && (e = o, n = 0), i >= n && (n = i + 1); !(u = a[n]) && ++n < c;);
                return u
            }
        }

        function G(t, n, e) {
            function r() {
                var n = this[u];
                n && (this.removeEventListener(t, n, n.$), delete this[u])
            }

            function i() {
                var i = c(n, gu(arguments));
                r.call(this), this.addEventListener(t, this[u] = i, i.$ = e), i._ = n
            }

            function o() {
                var n, e = new RegExp("^__on([^.]+)" + du.requote(t) + "$");
                for (var r in this)
                    if (n = r.match(e)) {
                        var i = this[r];
                        this.removeEventListener(n[1], i, i.$), delete this[r]
                    }
            }
            var u = "__on" + t,
                a = t.indexOf("."),
                c = Q;
            a > 0 && (t = t.slice(0, a));
            var s = qu.get(t);
            return s && (t = s, c = tt), a ? n ? i : r : n ? N : o
        }

        function Q(t, n) {
            return function(e) {
                var r = du.event;
                du.event = e, n[0] = this.__data__;
                try {
                    t.apply(this, n)
                } finally {
                    du.event = r
                }
            }
        }

        function tt(t, n) {
            var e = Q(t, n);
            return function(t) {
                var n = this,
                    r = t.relatedTarget;
                r && (r === n || 8 & r.compareDocumentPosition(n)) || e.call(n, t)
            }
        }

        function nt(t) {
            var n = ".dragsuppress-" + ++ju,
                e = "click" + n,
                r = du.select(a(t)).on("touchmove" + n, z).on("dragstart" + n, z).on("selectstart" + n, z);
            if (null == Ru && (Ru = !("onselectstart" in t) && k(t.style, "userSelect")), Ru) {
                var i = u(t).style,
                    o = i[Ru];
                i[Ru] = "none"
            }
            return function(t) {
                if (r.on(n, null), Ru && (i[Ru] = o), t) {
                    var u = function() {
                        r.on(e, null)
                    };
                    r.on(e, function() {
                        z(), u()
                    }, !0), setTimeout(u, 0)
                }
            }
        }

        function et(t, n) {
            n.changedTouches && (n = n.changedTouches[0]);
            var e = t.ownerSVGElement || t;
            if (e.createSVGPoint) {
                var r = e.createSVGPoint();
                if (Uu < 0) {
                    var i = a(t);
                    if (i.scrollX || i.scrollY) {
                        e = du.select("body").append("svg").style({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            margin: 0,
                            padding: 0,
                            border: "none"
                        }, "important");
                        var o = e[0][0].getScreenCTM();
                        Uu = !(o.f || o.e), e.remove()
                    }
                }
                return Uu ? (r.x = n.pageX, r.y = n.pageY) : (r.x = n.clientX, r.y = n.clientY), r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y]
            }
            var u = t.getBoundingClientRect();
            return [n.clientX - u.left - t.clientLeft, n.clientY - u.top - t.clientTop]
        }

        function rt() {
            return du.event.changedTouches[0].identifier
        }

        function it(t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0
        }

        function ot(t, n, e) {
            return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0])
        }

        function ut(t) {
            return t > 1 ? 0 : t < -1 ? Hu : Math.acos(t)
        }

        function at(t) {
            return t > 1 ? Xu : t < -1 ? -Xu : Math.asin(t)
        }

        function ct(t) {
            return ((t = Math.exp(t)) - 1 / t) / 2
        }

        function st(t) {
            return ((t = Math.exp(t)) + 1 / t) / 2
        }

        function ft(t) {
            return ((t = Math.exp(2 * t)) - 1) / (t + 1)
        }

        function lt(t) {
            return (t = Math.sin(t / 2)) * t
        }

        function ht() {}

        function pt(t, n, e) {
            return this instanceof pt ? (this.h = +t, this.s = +n, void(this.l = +e)) : arguments.length < 2 ? t instanceof pt ? new pt(t.h, t.s, t.l) : Nt("" + t, At, pt) : new pt(t, n, e)
        }

        function dt(t, n, e) {
            function r(t) {
                return t > 360 ? t -= 360 : t < 0 && (t += 360), t < 60 ? o + (u - o) * t / 60 : t < 180 ? u : t < 240 ? o + (u - o) * (240 - t) / 60 : o
            }

            function i(t) {
                return Math.round(255 * r(t))
            }
            var o, u;
            return t = isNaN(t) ? 0 : (t %= 360) < 0 ? t + 360 : t, n = isNaN(n) ? 0 : n < 0 ? 0 : n > 1 ? 1 : n, e = e < 0 ? 0 : e > 1 ? 1 : e, u = e <= .5 ? e * (1 + n) : e + n - e * n, o = 2 * e - u, new Mt(i(t + 120), i(t), i(t - 120))
        }

        function vt(t, n, e) {
            return this instanceof vt ? (this.h = +t, this.c = +n, void(this.l = +e)) : arguments.length < 2 ? t instanceof vt ? new vt(t.h, t.c, t.l) : t instanceof yt ? mt(t.l, t.a, t.b) : mt((t = Tt((t = du.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : new vt(t, n, e)
        }

        function gt(t, n, e) {
            return isNaN(t) && (t = 0), isNaN(n) && (n = 0), new yt(e, Math.cos(t *= Wu) * n, Math.sin(t) * n)
        }

        function yt(t, n, e) {
            return this instanceof yt ? (this.l = +t, this.a = +n, void(this.b = +e)) : arguments.length < 2 ? t instanceof yt ? new yt(t.l, t.a, t.b) : t instanceof vt ? gt(t.h, t.c, t.l) : Tt((t = Mt(t)).r, t.g, t.b) : new yt(t, n, e)
        }

        function _t(t, n, e) {
            var r = (t + 16) / 116,
                i = r + n / 500,
                o = r - e / 200;
            return i = xt(i) * ia, r = xt(r) * oa, o = xt(o) * ua, new Mt(wt(3.2404542 * i - 1.5371385 * r - .4985314 * o), wt(-.969266 * i + 1.8760108 * r + .041556 * o), wt(.0556434 * i - .2040259 * r + 1.0572252 * o))
        }

        function mt(t, n, e) {
            return t > 0 ? new vt(Math.atan2(e, n) * Ku, Math.sqrt(n * n + e * e), t) : new vt(NaN, NaN, t)
        }

        function xt(t) {
            return t > .206893034 ? t * t * t : (t - 4 / 29) / 7.787037
        }

        function bt(t) {
            return t > .008856 ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29
        }

        function wt(t) {
            return Math.round(255 * (t <= .00304 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055))
        }

        function Mt(t, n, e) {
            return this instanceof Mt ? (this.r = ~~t, this.g = ~~n, void(this.b = ~~e)) : arguments.length < 2 ? t instanceof Mt ? new Mt(t.r, t.g, t.b) : Nt("" + t, Mt, dt) : new Mt(t, n, e)
        }

        function St(t) {
            return new Mt(t >> 16, t >> 8 & 255, 255 & t)
        }

        function Et(t) {
            return St(t) + ""
        }

        function kt(t) {
            return t < 16 ? "0" + Math.max(0, t).toString(16) : Math.min(255, t).toString(16)
        }

        function Nt(t, n, e) {
            var r, i, o, u = 0,
                a = 0,
                c = 0;
            if (r = /([a-z]+)\((.*)\)/.exec(t = t.toLowerCase())) switch (i = r[2].split(","), r[1]) {
                case "hsl":
                    return e(parseFloat(i[0]), parseFloat(i[1]) / 100, parseFloat(i[2]) / 100);
                case "rgb":
                    return n(Ct(i[0]), Ct(i[1]), Ct(i[2]))
            }
            return (o = sa.get(t)) ? n(o.r, o.g, o.b) : (null == t || "#" !== t.charAt(0) || isNaN(o = parseInt(t.slice(1), 16)) || (4 === t.length ? (u = (3840 & o) >> 4, u |= u >> 4, a = 240 & o, a |= a >> 4, c = 15 & o, c |= c << 4) : 7 === t.length && (u = (16711680 & o) >> 16, a = (65280 & o) >> 8, c = 255 & o)), n(u, a, c))
        }

        function At(t, n, e) {
            var r, i, o = Math.min(t /= 255, n /= 255, e /= 255),
                u = Math.max(t, n, e),
                a = u - o,
                c = (u + o) / 2;
            return a ? (i = c < .5 ? a / (u + o) : a / (2 - u - o), r = t == u ? (n - e) / a + (n < e ? 6 : 0) : n == u ? (e - t) / a + 2 : (t - n) / a + 4, r *= 60) : (r = NaN, i = c > 0 && c < 1 ? 0 : r), new pt(r, i, c)
        }

        function Tt(t, n, e) {
            t = zt(t), n = zt(n), e = zt(e);
            var r = bt((.4124564 * t + .3575761 * n + .1804375 * e) / ia),
                i = bt((.2126729 * t + .7151522 * n + .072175 * e) / oa),
                o = bt((.0193339 * t + .119192 * n + .9503041 * e) / ua);
            return yt(116 * i - 16, 500 * (r - i), 200 * (i - o))
        }

        function zt(t) {
            return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }

        function Ct(t) {
            var n = parseFloat(t);
            return "%" === t.charAt(t.length - 1) ? Math.round(2.55 * n) : n
        }

        function Ot(t) {
            return "function" == typeof t ? t : function() {
                return t
            }
        }

        function It(t) {
            return function(n, e, r) {
                return 2 === arguments.length && "function" == typeof e && (r = e, e = null), Lt(n, e, t, r)
            }
        }

        function Lt(t, n, e, r) {
            function i() {
                var t, n = c.status;
                if (!n && Dt(c) || n >= 200 && n < 300 || 304 === n) {
                    try {
                        t = e.call(o, c)
                    } catch (t) {
                        return void u.error.call(o, t)
                    }
                    u.load.call(o, t)
                } else u.error.call(o, c)
            }
            var o = {},
                u = du.dispatch("beforesend", "progress", "load", "error"),
                a = {},
                c = new XMLHttpRequest,
                s = null;
            return !this.XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(t) || (c = new XDomainRequest), "onload" in c ? c.onload = c.onerror = i : c.onreadystatechange = function() {
                c.readyState > 3 && i()
            }, c.onprogress = function(t) {
                var n = du.event;
                du.event = t;
                try {
                    u.progress.call(o, c)
                } finally {
                    du.event = n
                }
            }, o.header = function(t, n) {
                return t = (t + "").toLowerCase(), arguments.length < 2 ? a[t] : (null == n ? delete a[t] : a[t] = n + "", o)
            }, o.mimeType = function(t) {
                return arguments.length ? (n = null == t ? null : t + "", o) : n
            }, o.responseType = function(t) {
                return arguments.length ? (s = t, o) : s
            }, o.response = function(t) {
                return e = t, o
            }, ["get", "post"].forEach(function(t) {
                o[t] = function() {
                    return o.send.apply(o, [t].concat(gu(arguments)))
                }
            }), o.send = function(e, r, i) {
                if (2 === arguments.length && "function" == typeof r && (i = r, r = null), c.open(e, t, !0), null == n || "accept" in a || (a.accept = n + ",*/*"), c.setRequestHeader)
                    for (var f in a) c.setRequestHeader(f, a[f]);
                return null != n && c.overrideMimeType && c.overrideMimeType(n), null != s && (c.responseType = s), null != i && o.on("error", i).on("load", function(t) {
                    i(null, t)
                }), u.beforesend.call(o, c), c.send(null == r ? null : r), o
            }, o.abort = function() {
                return c.abort(), o
            }, du.rebind(o, u, "on"), null == r ? o : o.get(Pt(r))
        }

        function Pt(t) {
            return 1 === t.length ? function(n, e) {
                t(null == n ? e : null)
            } : t
        }

        function Dt(t) {
            var n = t.responseType;
            return n && "text" !== n ? t.response : t.responseText
        }

        function qt(t, n, e) {
            var r = arguments.length;
            r < 2 && (n = 0), r < 3 && (e = Date.now());
            var i = e + n,
                o = {
                    c: t,
                    t: i,
                    n: null
                };
            return la ? la.n = o : fa = o, la = o, ha || (pa = clearTimeout(pa), ha = 1, da(Rt)), o
        }

        function Rt() {
            var t = jt(),
                n = Ut() - t;
            n > 24 ? (isFinite(n) && (clearTimeout(pa), pa = setTimeout(Rt, n)), ha = 0) : (ha = 1, da(Rt))
        }

        function jt() {
            for (var t = Date.now(), n = fa; n;) t >= n.t && n.c(t - n.t) && (n.c = null), n = n.n;
            return t
        }

        function Ut() {
            for (var t, n = fa, e = 1 / 0; n;) n.c ? (n.t < e && (e = n.t), n = (t = n).n) : n = t ? t.n = n.n : fa = n.n;
            return la = t, e
        }

        function Ft(t, n) {
            return n - (t ? Math.ceil(Math.log(t) / Math.LN10) : 1)
        }

        function Yt(t, n) {
            var e = Math.pow(10, 3 * Su(8 - n));
            return {
                scale: n > 8 ? function(t) {
                    return t / e
                } : function(t) {
                    return t * e
                },
                symbol: t
            }
        }

        function Ht(t) {
            var n = t.decimal,
                e = t.thousands,
                r = t.grouping,
                i = t.currency,
                o = r && e ? function(t, n) {
                    for (var i = t.length, o = [], u = 0, a = r[0], c = 0; i > 0 && a > 0 && (c + a + 1 > n && (a = Math.max(1, n - c)), o.push(t.substring(i -= a, i + a)), !((c += a + 1) > n));) a = r[u = (u + 1) % r.length];
                    return o.reverse().join(e)
                } : S;
            return function(t) {
                var e = ga.exec(t),
                    r = e[1] || " ",
                    u = e[2] || ">",
                    a = e[3] || "-",
                    c = e[4] || "",
                    s = e[5],
                    f = +e[6],
                    l = e[7],
                    h = e[8],
                    p = e[9],
                    d = 1,
                    v = "",
                    g = "",
                    y = !1,
                    _ = !0;
                switch (h && (h = +h.substring(1)), (s || "0" === r && "=" === u) && (s = r = "0", u = "="), p) {
                    case "n":
                        l = !0, p = "g";
                        break;
                    case "%":
                        d = 100, g = "%", p = "f";
                        break;
                    case "p":
                        d = 100, g = "%", p = "r";
                        break;
                    case "b":
                    case "o":
                    case "x":
                    case "X":
                        "#" === c && (v = "0" + p.toLowerCase());
                    case "c":
                        _ = !1;
                    case "d":
                        y = !0, h = 0;
                        break;
                    case "s":
                        d = -1, p = "r"
                }
                "$" === c && (v = i[0], g = i[1]), "r" != p || h || (p = "g"), null != h && ("g" == p ? h = Math.max(1, Math.min(21, h)) : "e" != p && "f" != p || (h = Math.max(0, Math.min(20, h)))), p = ya.get(p) || Bt;
                var m = s && l;
                return function(t) {
                    var e = g;
                    if (y && t % 1) return "";
                    var i = t < 0 || 0 === t && 1 / t < 0 ? (t = -t, "-") : "-" === a ? "" : a;
                    if (d < 0) {
                        var c = du.formatPrefix(t, h);
                        t = c.scale(t), e = c.symbol + g
                    } else t *= d;
                    t = p(t, h);
                    var x, b, w = t.lastIndexOf(".");
                    if (w < 0) {
                        var M = _ ? t.lastIndexOf("e") : -1;
                        M < 0 ? (x = t, b = "") : (x = t.substring(0, M), b = t.substring(M))
                    } else x = t.substring(0, w), b = n + t.substring(w + 1);
                    !s && l && (x = o(x, 1 / 0));
                    var S = v.length + x.length + b.length + (m ? 0 : i.length),
                        E = S < f ? new Array(S = f - S + 1).join(r) : "";
                    return m && (x = o(E + x, E.length ? f - b.length : 1 / 0)), i += v, t = x + b, ("<" === u ? i + t + E : ">" === u ? E + i + t : "^" === u ? E.substring(0, S >>= 1) + i + t + E.substring(S) : i + (m ? t : E + t)) + e
                }
            }
        }

        function Bt(t) {
            return t + ""
        }

        function Vt() {
            this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
        }

        function Xt(t, n, e) {
            function r(n) {
                var e = t(n),
                    r = o(e, 1);
                return n - e < r - n ? e : r
            }

            function i(e) {
                return n(e = t(new ma(e - 1)), 1), e
            }

            function o(t, e) {
                return n(t = new ma(+t), e), t
            }

            function u(t, r, o) {
                var u = i(t),
                    a = [];
                if (o > 1)
                    for (; u < r;) e(u) % o || a.push(new Date(+u)), n(u, 1);
                else
                    for (; u < r;) a.push(new Date(+u)), n(u, 1);
                return a
            }

            function a(t, n, e) {
                try {
                    ma = Vt;
                    var r = new Vt;
                    return r._ = t, u(r, n, e)
                } finally {
                    ma = Date
                }
            }
            t.floor = t, t.round = r, t.ceil = i, t.offset = o, t.range = u;
            var c = t.utc = Wt(t);
            return c.floor = c, c.round = Wt(r), c.ceil = Wt(i), c.offset = Wt(o), c.range = a, t
        }

        function Wt(t) {
            return function(n, e) {
                try {
                    ma = Vt;
                    var r = new Vt;
                    return r._ = n, t(r, e)._
                } finally {
                    ma = Date
                }
            }
        }

        function Kt(t) {
            function n(t) {
                function n(n) {
                    for (var e, i, o, u = [], a = -1, c = 0; ++a < r;) 37 === t.charCodeAt(a) && (u.push(t.slice(c, a)), null != (i = ba[e = t.charAt(++a)]) && (e = t.charAt(++a)), (o = A[e]) && (e = o(n, null == i ? "e" === e ? " " : "0" : i)), u.push(e), c = a + 1);
                    return u.push(t.slice(c, a)), u.join("")
                }
                var r = t.length;
                return n.parse = function(n) {
                    var r = {
                            y: 1900,
                            m: 0,
                            d: 1,
                            H: 0,
                            M: 0,
                            S: 0,
                            L: 0,
                            Z: null
                        },
                        i = e(r, t, n, 0);
                    if (i != n.length) return null;
                    "p" in r && (r.H = r.H % 12 + 12 * r.p);
                    var o = null != r.Z && ma !== Vt,
                        u = new(o ? Vt : ma);
                    return "j" in r ? u.setFullYear(r.y, 0, r.j) : "W" in r || "U" in r ? ("w" in r || (r.w = "W" in r ? 1 : 0), u.setFullYear(r.y, 0, 1), u.setFullYear(r.y, 0, "W" in r ? (r.w + 6) % 7 + 7 * r.W - (u.getDay() + 5) % 7 : r.w + 7 * r.U - (u.getDay() + 6) % 7)) : u.setFullYear(r.y, r.m, r.d), u.setHours(r.H + (r.Z / 100 | 0), r.M + r.Z % 100, r.S, r.L), o ? u._ : u
                }, n.toString = function() {
                    return t
                }, n
            }

            function e(t, n, e, r) {
                for (var i, o, u, a = 0, c = n.length, s = e.length; a < c;) {
                    if (r >= s) return -1;
                    if (i = n.charCodeAt(a++), 37 === i) {
                        if (u = n.charAt(a++), o = T[u in ba ? n.charAt(a++) : u], !o || (r = o(t, e, r)) < 0) return -1
                    } else if (i != e.charCodeAt(r++)) return -1
                }
                return r
            }

            function r(t, n, e) {
                w.lastIndex = 0;
                var r = w.exec(n.slice(e));
                return r ? (t.w = M.get(r[0].toLowerCase()), e + r[0].length) : -1
            }

            function i(t, n, e) {
                x.lastIndex = 0;
                var r = x.exec(n.slice(e));
                return r ? (t.w = b.get(r[0].toLowerCase()), e + r[0].length) : -1
            }

            function o(t, n, e) {
                k.lastIndex = 0;
                var r = k.exec(n.slice(e));
                return r ? (t.m = N.get(r[0].toLowerCase()), e + r[0].length) : -1
            }

            function u(t, n, e) {
                S.lastIndex = 0;
                var r = S.exec(n.slice(e));
                return r ? (t.m = E.get(r[0].toLowerCase()), e + r[0].length) : -1
            }

            function a(t, n, r) {
                return e(t, A.c.toString(), n, r)
            }

            function c(t, n, r) {
                return e(t, A.x.toString(), n, r)
            }

            function s(t, n, r) {
                return e(t, A.X.toString(), n, r)
            }

            function f(t, n, e) {
                var r = m.get(n.slice(e, e += 2).toLowerCase());
                return null == r ? -1 : (t.p = r, e)
            }
            var l = t.dateTime,
                h = t.date,
                p = t.time,
                d = t.periods,
                v = t.days,
                g = t.shortDays,
                y = t.months,
                _ = t.shortMonths;
            n.utc = function(t) {
                function e(t) {
                    try {
                        ma = Vt;
                        var n = new ma;
                        return n._ = t, r(n)
                    } finally {
                        ma = Date
                    }
                }
                var r = n(t);
                return e.parse = function(t) {
                    try {
                        ma = Vt;
                        var n = r.parse(t);
                        return n && n._
                    } finally {
                        ma = Date
                    }
                }, e.toString = r.toString, e
            }, n.multi = n.utc.multi = vn;
            var m = du.map(),
                x = Zt(v),
                b = $t(v),
                w = Zt(g),
                M = $t(g),
                S = Zt(y),
                E = $t(y),
                k = Zt(_),
                N = $t(_);
            d.forEach(function(t, n) {
                m.set(t.toLowerCase(), n)
            });
            var A = {
                    a: function(t) {
                        return g[t.getDay()]
                    },
                    A: function(t) {
                        return v[t.getDay()]
                    },
                    b: function(t) {
                        return _[t.getMonth()]
                    },
                    B: function(t) {
                        return y[t.getMonth()]
                    },
                    c: n(l),
                    d: function(t, n) {
                        return Jt(t.getDate(), n, 2)
                    },
                    e: function(t, n) {
                        return Jt(t.getDate(), n, 2)
                    },
                    H: function(t, n) {
                        return Jt(t.getHours(), n, 2)
                    },
                    I: function(t, n) {
                        return Jt(t.getHours() % 12 || 12, n, 2)
                    },
                    j: function(t, n) {
                        return Jt(1 + _a.dayOfYear(t), n, 3)
                    },
                    L: function(t, n) {
                        return Jt(t.getMilliseconds(), n, 3)
                    },
                    m: function(t, n) {
                        return Jt(t.getMonth() + 1, n, 2)
                    },
                    M: function(t, n) {
                        return Jt(t.getMinutes(), n, 2)
                    },
                    p: function(t) {
                        return d[+(t.getHours() >= 12)]
                    },
                    S: function(t, n) {
                        return Jt(t.getSeconds(), n, 2)
                    },
                    U: function(t, n) {
                        return Jt(_a.sundayOfYear(t), n, 2)
                    },
                    w: function(t) {
                        return t.getDay()
                    },
                    W: function(t, n) {
                        return Jt(_a.mondayOfYear(t), n, 2)
                    },
                    x: n(h),
                    X: n(p),
                    y: function(t, n) {
                        return Jt(t.getFullYear() % 100, n, 2)
                    },
                    Y: function(t, n) {
                        return Jt(t.getFullYear() % 1e4, n, 4)
                    },
                    Z: pn,
                    "%": function() {
                        return "%"
                    }
                },
                T = {
                    a: r,
                    A: i,
                    b: o,
                    B: u,
                    c: a,
                    d: an,
                    e: an,
                    H: sn,
                    I: sn,
                    j: cn,
                    L: hn,
                    m: un,
                    M: fn,
                    p: f,
                    S: ln,
                    U: Qt,
                    w: Gt,
                    W: tn,
                    x: c,
                    X: s,
                    y: en,
                    Y: nn,
                    Z: rn,
                    "%": dn
                };
            return n
        }

        function Jt(t, n, e) {
            var r = t < 0 ? "-" : "",
                i = (r ? -t : t) + "",
                o = i.length;
            return r + (o < e ? new Array(e - o + 1).join(n) + i : i)
        }

        function Zt(t) {
            return new RegExp("^(?:" + t.map(du.requote).join("|") + ")", "i")
        }

        function $t(t) {
            for (var n = new v, e = -1, r = t.length; ++e < r;) n.set(t[e].toLowerCase(), e);
            return n
        }

        function Gt(t, n, e) {
            wa.lastIndex = 0;
            var r = wa.exec(n.slice(e, e + 1));
            return r ? (t.w = +r[0], e + r[0].length) : -1
        }

        function Qt(t, n, e) {
            wa.lastIndex = 0;
            var r = wa.exec(n.slice(e));
            return r ? (t.U = +r[0], e + r[0].length) : -1
        }

        function tn(t, n, e) {
            wa.lastIndex = 0;
            var r = wa.exec(n.slice(e));
            return r ? (t.W = +r[0], e + r[0].length) : -1
        }

        function nn(t, n, e) {
            wa.lastIndex = 0;
            var r = wa.exec(n.slice(e, e + 4));
            return r ? (t.y = +r[0], e + r[0].length) : -1
        }

        function en(t, n, e) {
            wa.lastIndex = 0;
            var r = wa.exec(n.slice(e, e + 2));
            return r ? (t.y = on(+r[0]), e + r[0].length) : -1
        }

        function rn(t, n, e) {
            return /^[+-]\d{4}$/.test(n = n.slice(e, e + 5)) ? (t.Z = -n, e + 5) : -1
        }

        function on(t) {
            return t + (t > 68 ? 1900 : 2e3)
        }

        function un(t, n, e) {
            wa.lastIndex = 0;
            var r = wa.exec(n.slice(e, e + 2));
            return r ? (t.m = r[0] - 1, e + r[0].length) : -1
        }

        function an(t, n, e) {
            wa.lastIndex = 0;
            var r = wa.exec(n.slice(e, e + 2));
            return r ? (t.d = +r[0],
                e + r[0].length) : -1
        }

        function cn(t, n, e) {
            wa.lastIndex = 0;
            var r = wa.exec(n.slice(e, e + 3));
            return r ? (t.j = +r[0], e + r[0].length) : -1
        }

        function sn(t, n, e) {
            wa.lastIndex = 0;
            var r = wa.exec(n.slice(e, e + 2));
            return r ? (t.H = +r[0], e + r[0].length) : -1
        }

        function fn(t, n, e) {
            wa.lastIndex = 0;
            var r = wa.exec(n.slice(e, e + 2));
            return r ? (t.M = +r[0], e + r[0].length) : -1
        }

        function ln(t, n, e) {
            wa.lastIndex = 0;
            var r = wa.exec(n.slice(e, e + 2));
            return r ? (t.S = +r[0], e + r[0].length) : -1
        }

        function hn(t, n, e) {
            wa.lastIndex = 0;
            var r = wa.exec(n.slice(e, e + 3));
            return r ? (t.L = +r[0], e + r[0].length) : -1
        }

        function pn(t) {
            var n = t.getTimezoneOffset(),
                e = n > 0 ? "-" : "+",
                r = Su(n) / 60 | 0,
                i = Su(n) % 60;
            return e + Jt(r, "0", 2) + Jt(i, "0", 2)
        }

        function dn(t, n, e) {
            Ma.lastIndex = 0;
            var r = Ma.exec(n.slice(e, e + 1));
            return r ? e + r[0].length : -1
        }

        function vn(t) {
            for (var n = t.length, e = -1; ++e < n;) t[e][0] = this(t[e][0]);
            return function(n) {
                for (var e = 0, r = t[e]; !r[1](n);) r = t[++e];
                return r[0](n)
            }
        }

        function gn() {}

        function yn(t, n, e) {
            var r = e.s = t + n,
                i = r - t,
                o = r - i;
            e.t = t - o + (n - i)
        }

        function _n(t, n) {
            t && Na.hasOwnProperty(t.type) && Na[t.type](t, n)
        }

        function mn(t, n, e) {
            var r, i = -1,
                o = t.length - e;
            for (n.lineStart(); ++i < o;) r = t[i], n.point(r[0], r[1], r[2]);
            n.lineEnd()
        }

        function xn(t, n) {
            var e = -1,
                r = t.length;
            for (n.polygonStart(); ++e < r;) mn(t[e], n, 1);
            n.polygonEnd()
        }

        function bn() {
            function t(t, n) {
                t *= Wu, n = n * Wu / 2 + Hu / 4;
                var e = t - r,
                    u = e >= 0 ? 1 : -1,
                    a = u * e,
                    c = Math.cos(n),
                    s = Math.sin(n),
                    f = o * s,
                    l = i * c + f * Math.cos(a),
                    h = f * u * Math.sin(a);
                Ta.add(Math.atan2(h, l)), r = t, i = c, o = s
            }
            var n, e, r, i, o;
            za.point = function(u, a) {
                za.point = t, r = (n = u) * Wu, i = Math.cos(a = (e = a) * Wu / 2 + Hu / 4), o = Math.sin(a)
            }, za.lineEnd = function() {
                t(n, e)
            }
        }

        function wn(t) {
            var n = t[0],
                e = t[1],
                r = Math.cos(e);
            return [r * Math.cos(n), r * Math.sin(n), Math.sin(e)]
        }

        function Mn(t, n) {
            return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
        }

        function Sn(t, n) {
            return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
        }

        function En(t, n) {
            t[0] += n[0], t[1] += n[1], t[2] += n[2]
        }

        function kn(t, n) {
            return [t[0] * n, t[1] * n, t[2] * n]
        }

        function Nn(t) {
            var n = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
            t[0] /= n, t[1] /= n, t[2] /= n
        }

        function An(t) {
            return [Math.atan2(t[1], t[0]), at(t[2])]
        }

        function Tn(t, n) {
            return Su(t[0] - n[0]) < Fu && Su(t[1] - n[1]) < Fu
        }

        function zn(t, n) {
            t *= Wu;
            var e = Math.cos(n *= Wu);
            Cn(e * Math.cos(t), e * Math.sin(t), Math.sin(n))
        }

        function Cn(t, n, e) {
            ++Ca, Ia += (t - Ia) / Ca, La += (n - La) / Ca, Pa += (e - Pa) / Ca
        }

        function On() {
            function t(t, i) {
                t *= Wu;
                var o = Math.cos(i *= Wu),
                    u = o * Math.cos(t),
                    a = o * Math.sin(t),
                    c = Math.sin(i),
                    s = Math.atan2(Math.sqrt((s = e * c - r * a) * s + (s = r * u - n * c) * s + (s = n * a - e * u) * s), n * u + e * a + r * c);
                Oa += s, Da += s * (n + (n = u)), qa += s * (e + (e = a)), Ra += s * (r + (r = c)), Cn(n, e, r)
            }
            var n, e, r;
            Ya.point = function(i, o) {
                i *= Wu;
                var u = Math.cos(o *= Wu);
                n = u * Math.cos(i), e = u * Math.sin(i), r = Math.sin(o), Ya.point = t, Cn(n, e, r)
            }
        }

        function In() {
            Ya.point = zn
        }

        function Ln() {
            function t(t, n) {
                t *= Wu;
                var e = Math.cos(n *= Wu),
                    u = e * Math.cos(t),
                    a = e * Math.sin(t),
                    c = Math.sin(n),
                    s = i * c - o * a,
                    f = o * u - r * c,
                    l = r * a - i * u,
                    h = Math.sqrt(s * s + f * f + l * l),
                    p = r * u + i * a + o * c,
                    d = h && -ut(p) / h,
                    v = Math.atan2(h, p);
                ja += d * s, Ua += d * f, Fa += d * l, Oa += v, Da += v * (r + (r = u)), qa += v * (i + (i = a)), Ra += v * (o + (o = c)), Cn(r, i, o)
            }
            var n, e, r, i, o;
            Ya.point = function(u, a) {
                n = u, e = a, Ya.point = t, u *= Wu;
                var c = Math.cos(a *= Wu);
                r = c * Math.cos(u), i = c * Math.sin(u), o = Math.sin(a), Cn(r, i, o)
            }, Ya.lineEnd = function() {
                t(n, e), Ya.lineEnd = In, Ya.point = zn
            }
        }

        function Pn(t, n) {
            function e(e, r) {
                return e = t(e, r), n(e[0], e[1])
            }
            return t.invert && n.invert && (e.invert = function(e, r) {
                return e = n.invert(e, r), e && t.invert(e[0], e[1])
            }), e
        }

        function Dn() {
            return !0
        }

        function qn(t, n, e, r, i) {
            var o = [],
                u = [];
            if (t.forEach(function(t) {
                    if (!((n = t.length - 1) <= 0)) {
                        var n, e = t[0],
                            r = t[n];
                        if (Tn(e, r)) {
                            i.lineStart();
                            for (var a = 0; a < n; ++a) i.point((e = t[a])[0], e[1]);
                            return void i.lineEnd()
                        }
                        var c = new jn(e, t, null, !0),
                            s = new jn(e, null, c, !1);
                        c.o = s, o.push(c), u.push(s), c = new jn(r, t, null, !1), s = new jn(r, null, c, !0), c.o = s, o.push(c), u.push(s)
                    }
                }), u.sort(n), Rn(o), Rn(u), o.length) {
                for (var a = 0, c = e, s = u.length; a < s; ++a) u[a].e = c = !c;
                for (var f, l, h = o[0];;) {
                    for (var p = h, d = !0; p.v;)
                        if ((p = p.n) === h) return;
                    f = p.z, i.lineStart();
                    do {
                        if (p.v = p.o.v = !0, p.e) {
                            if (d)
                                for (var a = 0, s = f.length; a < s; ++a) i.point((l = f[a])[0], l[1]);
                            else r(p.x, p.n.x, 1, i);
                            p = p.n
                        } else {
                            if (d) {
                                f = p.p.z;
                                for (var a = f.length - 1; a >= 0; --a) i.point((l = f[a])[0], l[1])
                            } else r(p.x, p.p.x, -1, i);
                            p = p.p
                        }
                        p = p.o, f = p.z, d = !d
                    } while (!p.v);
                    i.lineEnd()
                }
            }
        }

        function Rn(t) {
            if (n = t.length) {
                for (var n, e, r = 0, i = t[0]; ++r < n;) i.n = e = t[r], e.p = i, i = e;
                i.n = e = t[0], e.p = i
            }
        }

        function jn(t, n, e, r) {
            this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
        }

        function Un(t, n, e, r) {
            return function(i, o) {
                function u(n, e) {
                    var r = i(n, e);
                    t(n = r[0], e = r[1]) && o.point(n, e)
                }

                function a(t, n) {
                    var e = i(t, n);
                    g.point(e[0], e[1])
                }

                function c() {
                    _.point = a, g.lineStart()
                }

                function s() {
                    _.point = u, g.lineEnd()
                }

                function f(t, n) {
                    v.push([t, n]);
                    var e = i(t, n);
                    x.point(e[0], e[1])
                }

                function l() {
                    x.lineStart(), v = []
                }

                function h() {
                    f(v[0][0], v[0][1]), x.lineEnd();
                    var t, n = x.clean(),
                        e = m.buffer(),
                        r = e.length;
                    if (v.pop(), d.push(v), v = null, r)
                        if (1 & n) {
                            t = e[0];
                            var i, r = t.length - 1,
                                u = -1;
                            if (r > 0) {
                                for (b || (o.polygonStart(), b = !0), o.lineStart(); ++u < r;) o.point((i = t[u])[0], i[1]);
                                o.lineEnd()
                            }
                        } else r > 1 && 2 & n && e.push(e.pop().concat(e.shift())), p.push(e.filter(Fn))
                }
                var p, d, v, g = n(o),
                    y = i.invert(r[0], r[1]),
                    _ = {
                        point: u,
                        lineStart: c,
                        lineEnd: s,
                        polygonStart: function() {
                            _.point = f, _.lineStart = l, _.lineEnd = h, p = [], d = []
                        },
                        polygonEnd: function() {
                            _.point = u, _.lineStart = c, _.lineEnd = s, p = du.merge(p);
                            var t = Wn(y, d);
                            p.length ? (b || (o.polygonStart(), b = !0), qn(p, Hn, t, e, o)) : t && (b || (o.polygonStart(), b = !0), o.lineStart(), e(null, null, 1, o), o.lineEnd()), b && (o.polygonEnd(), b = !1), p = d = null
                        },
                        sphere: function() {
                            o.polygonStart(), o.lineStart(), e(null, null, 1, o), o.lineEnd(), o.polygonEnd()
                        }
                    },
                    m = Yn(),
                    x = n(m),
                    b = !1;
                return _
            }
        }

        function Fn(t) {
            return t.length > 1
        }

        function Yn() {
            var t, n = [];
            return {
                lineStart: function() {
                    n.push(t = [])
                },
                point: function(n, e) {
                    t.push([n, e])
                },
                lineEnd: N,
                buffer: function e() {
                    var e = n;
                    return n = [], t = null, e
                },
                rejoin: function() {
                    n.length > 1 && n.push(n.pop().concat(n.shift()))
                }
            }
        }

        function Hn(t, n) {
            return ((t = t.x)[0] < 0 ? t[1] - Xu - Fu : Xu - t[1]) - ((n = n.x)[0] < 0 ? n[1] - Xu - Fu : Xu - n[1])
        }

        function Bn(t) {
            var n, e = NaN,
                r = NaN,
                i = NaN;
            return {
                lineStart: function() {
                    t.lineStart(), n = 1
                },
                point: function(o, u) {
                    var a = o > 0 ? Hu : -Hu,
                        c = Su(o - e);
                    Su(c - Hu) < Fu ? (t.point(e, r = (r + u) / 2 > 0 ? Xu : -Xu), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), t.point(o, r), n = 0) : i !== a && c >= Hu && (Su(e - i) < Fu && (e -= i * Fu), Su(o - a) < Fu && (o -= a * Fu), r = Vn(e, r, o, u), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), n = 0), t.point(e = o, r = u), i = a
                },
                lineEnd: function() {
                    t.lineEnd(), e = r = NaN
                },
                clean: function() {
                    return 2 - n
                }
            }
        }

        function Vn(t, n, e, r) {
            var i, o, u = Math.sin(t - e);
            return Su(u) > Fu ? Math.atan((Math.sin(n) * (o = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (i = Math.cos(n)) * Math.sin(t)) / (i * o * u)) : (n + r) / 2
        }

        function Xn(t, n, e, r) {
            var i;
            if (null == t) i = e * Xu, r.point(-Hu, i), r.point(0, i), r.point(Hu, i), r.point(Hu, 0), r.point(Hu, -i), r.point(0, -i), r.point(-Hu, -i), r.point(-Hu, 0), r.point(-Hu, i);
            else if (Su(t[0] - n[0]) > Fu) {
                var o = t[0] < n[0] ? Hu : -Hu;
                i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i)
            } else r.point(n[0], n[1])
        }

        function Wn(t, n) {
            var e = t[0],
                r = t[1],
                i = [Math.sin(e), -Math.cos(e), 0],
                o = 0,
                u = 0;
            Ta.reset();
            for (var a = 0, c = n.length; a < c; ++a) {
                var s = n[a],
                    f = s.length;
                if (f)
                    for (var l = s[0], h = l[0], p = l[1] / 2 + Hu / 4, d = Math.sin(p), v = Math.cos(p), g = 1;;) {
                        g === f && (g = 0), t = s[g];
                        var y = t[0],
                            _ = t[1] / 2 + Hu / 4,
                            m = Math.sin(_),
                            x = Math.cos(_),
                            b = y - h,
                            w = b >= 0 ? 1 : -1,
                            M = w * b,
                            S = M > Hu,
                            E = d * m;
                        if (Ta.add(Math.atan2(E * w * Math.sin(M), v * x + E * Math.cos(M))), o += S ? b + w * Bu : b, S ^ h >= e ^ y >= e) {
                            var k = Sn(wn(l), wn(t));
                            Nn(k);
                            var N = Sn(i, k);
                            Nn(N);
                            var A = (S ^ b >= 0 ? -1 : 1) * at(N[2]);
                            (r > A || r === A && (k[0] || k[1])) && (u += S ^ b >= 0 ? 1 : -1)
                        }
                        if (!g++) break;
                        h = y, d = m, v = x, l = t
                    }
            }
            return (o < -Fu || o < Fu && Ta < -Fu) ^ 1 & u
        }

        function Kn(t) {
            function n(t, n) {
                return Math.cos(t) * Math.cos(n) > o
            }

            function e(t) {
                var e, o, c, s, f;
                return {
                    lineStart: function() {
                        s = c = !1, f = 1
                    },
                    point: function(l, h) {
                        var p, d = [l, h],
                            v = n(l, h),
                            g = u ? v ? 0 : i(l, h) : v ? i(l + (l < 0 ? Hu : -Hu), h) : 0;
                        if (!e && (s = c = v) && t.lineStart(), v !== c && (p = r(e, d), (Tn(e, p) || Tn(d, p)) && (d[0] += Fu, d[1] += Fu, v = n(d[0], d[1]))), v !== c) f = 0, v ? (t.lineStart(), p = r(d, e), t.point(p[0], p[1])) : (p = r(e, d), t.point(p[0], p[1]), t.lineEnd()), e = p;
                        else if (a && e && u ^ v) {
                            var y;
                            g & o || !(y = r(d, e, !0)) || (f = 0, u ? (t.lineStart(), t.point(y[0][0], y[0][1]), t.point(y[1][0], y[1][1]), t.lineEnd()) : (t.point(y[1][0], y[1][1]), t.lineEnd(), t.lineStart(), t.point(y[0][0], y[0][1])))
                        }!v || e && Tn(e, d) || t.point(d[0], d[1]), e = d, c = v, o = g
                    },
                    lineEnd: function() {
                        c && t.lineEnd(), e = null
                    },
                    clean: function() {
                        return f | (s && c) << 1
                    }
                }
            }

            function r(t, n, e) {
                var r = wn(t),
                    i = wn(n),
                    u = [1, 0, 0],
                    a = Sn(r, i),
                    c = Mn(a, a),
                    s = a[0],
                    f = c - s * s;
                if (!f) return !e && t;
                var l = o * c / f,
                    h = -o * s / f,
                    p = Sn(u, a),
                    d = kn(u, l),
                    v = kn(a, h);
                En(d, v);
                var g = p,
                    y = Mn(d, g),
                    _ = Mn(g, g),
                    m = y * y - _ * (Mn(d, d) - 1);
                if (!(m < 0)) {
                    var x = Math.sqrt(m),
                        b = kn(g, (-y - x) / _);
                    if (En(b, d), b = An(b), !e) return b;
                    var w, M = t[0],
                        S = n[0],
                        E = t[1],
                        k = n[1];
                    S < M && (w = M, M = S, S = w);
                    var N = S - M,
                        A = Su(N - Hu) < Fu,
                        T = A || N < Fu;
                    if (!A && k < E && (w = E, E = k, k = w), T ? A ? E + k > 0 ^ b[1] < (Su(b[0] - M) < Fu ? E : k) : E <= b[1] && b[1] <= k : N > Hu ^ (M <= b[0] && b[0] <= S)) {
                        var z = kn(g, (-y + x) / _);
                        return En(z, d), [b, An(z)]
                    }
                }
            }

            function i(n, e) {
                var r = u ? t : Hu - t,
                    i = 0;
                return n < -r ? i |= 1 : n > r && (i |= 2), e < -r ? i |= 4 : e > r && (i |= 8), i
            }
            var o = Math.cos(t),
                u = o > 0,
                a = Su(o) > Fu,
                c = be(t, 6 * Wu);
            return Un(n, e, c, u ? [0, -t] : [-Hu, t - Hu])
        }

        function Jn(t, n, e, r) {
            return function(i) {
                var o, u = i.a,
                    a = i.b,
                    c = u.x,
                    s = u.y,
                    f = a.x,
                    l = a.y,
                    h = 0,
                    p = 1,
                    d = f - c,
                    v = l - s;
                if (o = t - c, d || !(o > 0)) {
                    if (o /= d, d < 0) {
                        if (o < h) return;
                        o < p && (p = o)
                    } else if (d > 0) {
                        if (o > p) return;
                        o > h && (h = o)
                    }
                    if (o = e - c, d || !(o < 0)) {
                        if (o /= d, d < 0) {
                            if (o > p) return;
                            o > h && (h = o)
                        } else if (d > 0) {
                            if (o < h) return;
                            o < p && (p = o)
                        }
                        if (o = n - s, v || !(o > 0)) {
                            if (o /= v, v < 0) {
                                if (o < h) return;
                                o < p && (p = o)
                            } else if (v > 0) {
                                if (o > p) return;
                                o > h && (h = o)
                            }
                            if (o = r - s, v || !(o < 0)) {
                                if (o /= v, v < 0) {
                                    if (o > p) return;
                                    o > h && (h = o)
                                } else if (v > 0) {
                                    if (o < h) return;
                                    o < p && (p = o)
                                }
                                return h > 0 && (i.a = {
                                    x: c + h * d,
                                    y: s + h * v
                                }), p < 1 && (i.b = {
                                    x: c + p * d,
                                    y: s + p * v
                                }), i
                            }
                        }
                    }
                }
            }
        }

        function Zn(t, n, e, r) {
            function i(r, i) {
                return Su(r[0] - t) < Fu ? i > 0 ? 0 : 3 : Su(r[0] - e) < Fu ? i > 0 ? 2 : 1 : Su(r[1] - n) < Fu ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
            }

            function o(t, n) {
                return u(t.x, n.x)
            }

            function u(t, n) {
                var e = i(t, 1),
                    r = i(n, 1);
                return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
            }
            return function(a) {
                function c(t) {
                    for (var n = 0, e = g.length, r = t[1], i = 0; i < e; ++i)
                        for (var o, u = 1, a = g[i], c = a.length, s = a[0]; u < c; ++u) o = a[u], s[1] <= r ? o[1] > r && ot(s, o, t) > 0 && ++n : o[1] <= r && ot(s, o, t) < 0 && --n, s = o;
                    return 0 !== n
                }

                function s(o, a, c, s) {
                    var f = 0,
                        l = 0;
                    if (null == o || (f = i(o, c)) !== (l = i(a, c)) || u(o, a) < 0 ^ c > 0) {
                        do s.point(0 === f || 3 === f ? t : e, f > 1 ? r : n); while ((f = (f + c + 4) % 4) !== l)
                    } else s.point(a[0], a[1])
                }

                function f(i, o) {
                    return t <= i && i <= e && n <= o && o <= r
                }

                function l(t, n) {
                    f(t, n) && a.point(t, n)
                }

                function h() {
                    T.point = d, g && g.push(y = []), S = !0, M = !1, b = w = NaN
                }

                function p() {
                    v && (d(_, m), x && M && N.rejoin(), v.push(N.buffer())), T.point = l, M && a.lineEnd()
                }

                function d(t, n) {
                    t = Math.max(-Ba, Math.min(Ba, t)), n = Math.max(-Ba, Math.min(Ba, n));
                    var e = f(t, n);
                    if (g && y.push([t, n]), S) _ = t, m = n, x = e, S = !1, e && (a.lineStart(), a.point(t, n));
                    else if (e && M) a.point(t, n);
                    else {
                        var r = {
                            a: {
                                x: b,
                                y: w
                            },
                            b: {
                                x: t,
                                y: n
                            }
                        };
                        A(r) ? (M || (a.lineStart(), a.point(r.a.x, r.a.y)), a.point(r.b.x, r.b.y), e || a.lineEnd(), E = !1) : e && (a.lineStart(), a.point(t, n), E = !1)
                    }
                    b = t, w = n, M = e
                }
                var v, g, y, _, m, x, b, w, M, S, E, k = a,
                    N = Yn(),
                    A = Jn(t, n, e, r),
                    T = {
                        point: l,
                        lineStart: h,
                        lineEnd: p,
                        polygonStart: function() {
                            a = N, v = [], g = [], E = !0
                        },
                        polygonEnd: function() {
                            a = k, v = du.merge(v);
                            var n = c([t, r]),
                                e = E && n,
                                i = v.length;
                            (e || i) && (a.polygonStart(), e && (a.lineStart(), s(null, null, 1, a), a.lineEnd()), i && qn(v, o, n, s, a), a.polygonEnd()), v = g = y = null
                        }
                    };
                return T
            }
        }

        function $n(t) {
            var n = 0,
                e = Hu / 3,
                r = pe(t),
                i = r(n, e);
            return i.parallels = function(t) {
                return arguments.length ? r(n = t[0] * Hu / 180, e = t[1] * Hu / 180) : [n / Hu * 180, e / Hu * 180]
            }, i
        }

        function Gn(t, n) {
            function e(t, n) {
                var e = Math.sqrt(o - 2 * i * Math.sin(n)) / i;
                return [e * Math.sin(t *= i), u - e * Math.cos(t)]
            }
            var r = Math.sin(t),
                i = (r + Math.sin(n)) / 2,
                o = 1 + r * (2 * i - r),
                u = Math.sqrt(o) / i;
            return e.invert = function(t, n) {
                var e = u - n;
                return [Math.atan2(t, e) / i, at((o - (t * t + e * e) * i * i) / (2 * i))]
            }, e
        }

        function Qn() {
            function t(t, n) {
                Xa += i * t - r * n, r = t, i = n
            }
            var n, e, r, i;
            $a.point = function(o, u) {
                $a.point = t, n = r = o, e = i = u
            }, $a.lineEnd = function() {
                t(n, e)
            }
        }

        function te(t, n) {
            t < Wa && (Wa = t), t > Ja && (Ja = t), n < Ka && (Ka = n), n > Za && (Za = n)
        }

        function ne() {
            function t(t, n) {
                u.push("M", t, ",", n, o)
            }

            function n(t, n) {
                u.push("M", t, ",", n), a.point = e
            }

            function e(t, n) {
                u.push("L", t, ",", n)
            }

            function r() {
                a.point = t
            }

            function i() {
                u.push("Z")
            }
            var o = ee(4.5),
                u = [],
                a = {
                    point: t,
                    lineStart: function() {
                        a.point = n
                    },
                    lineEnd: r,
                    polygonStart: function() {
                        a.lineEnd = i
                    },
                    polygonEnd: function() {
                        a.lineEnd = r, a.point = t
                    },
                    pointRadius: function(t) {
                        return o = ee(t), a
                    },
                    result: function t() {
                        if (u.length) {
                            var t = u.join("");
                            return u = [], t
                        }
                    }
                };
            return a
        }

        function ee(t) {
            return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
        }

        function re(t, n) {
            Ia += t, La += n, ++Pa
        }

        function ie() {
            function t(t, r) {
                var i = t - n,
                    o = r - e,
                    u = Math.sqrt(i * i + o * o);
                Da += u * (n + t) / 2, qa += u * (e + r) / 2, Ra += u, re(n = t, e = r)
            }
            var n, e;
            Qa.point = function(r, i) {
                Qa.point = t, re(n = r, e = i)
            }
        }

        function oe() {
            Qa.point = re
        }

        function ue() {
            function t(t, n) {
                var e = t - r,
                    o = n - i,
                    u = Math.sqrt(e * e + o * o);
                Da += u * (r + t) / 2, qa += u * (i + n) / 2, Ra += u, u = i * t - r * n, ja += u * (r + t), Ua += u * (i + n), Fa += 3 * u, re(r = t, i = n)
            }
            var n, e, r, i;
            Qa.point = function(o, u) {
                Qa.point = t, re(n = r = o, e = i = u)
            }, Qa.lineEnd = function() {
                t(n, e)
            }
        }

        function ae(t) {
            function n(n, e) {
                t.moveTo(n + u, e), t.arc(n, e, u, 0, Bu)
            }

            function e(n, e) {
                t.moveTo(n, e), a.point = r
            }

            function r(n, e) {
                t.lineTo(n, e)
            }

            function i() {
                a.point = n
            }

            function o() {
                t.closePath()
            }
            var u = 4.5,
                a = {
                    point: n,
                    lineStart: function() {
                        a.point = e
                    },
                    lineEnd: i,
                    polygonStart: function() {
                        a.lineEnd = o
                    },
                    polygonEnd: function() {
                        a.lineEnd = i, a.point = n
                    },
                    pointRadius: function(t) {
                        return u = t, a
                    },
                    result: N
                };
            return a
        }

        function ce(t) {
            function n(t) {
                return (a ? r : e)(t)
            }

            function e(n) {
                return le(n, function(e, r) {
                    e = t(e, r), n.point(e[0], e[1])
                })
            }

            function r(n) {
                function e(e, r) {
                    e = t(e, r), n.point(e[0], e[1])
                }

                function r() {
                    m = NaN, S.point = o, n.lineStart()
                }

                function o(e, r) {
                    var o = wn([e, r]),
                        u = t(e, r);
                    i(m, x, _, b, w, M, m = u[0], x = u[1], _ = e, b = o[0], w = o[1], M = o[2], a, n), n.point(m, x)
                }

                function u() {
                    S.point = e, n.lineEnd()
                }

                function c() {
                    r(), S.point = s, S.lineEnd = f
                }

                function s(t, n) {
                    o(l = t, h = n), p = m, d = x, v = b, g = w, y = M, S.point = o
                }

                function f() {
                    i(m, x, _, b, w, M, p, d, l, v, g, y, a, n), S.lineEnd = u, u()
                }
                var l, h, p, d, v, g, y, _, m, x, b, w, M, S = {
                    point: e,
                    lineStart: r,
                    lineEnd: u,
                    polygonStart: function() {
                        n.polygonStart(), S.lineStart = c
                    },
                    polygonEnd: function() {
                        n.polygonEnd(), S.lineStart = r
                    }
                };
                return S
            }

            function i(n, e, r, a, c, s, f, l, h, p, d, v, g, y) {
                var _ = f - n,
                    m = l - e,
                    x = _ * _ + m * m;
                if (x > 4 * o && g--) {
                    var b = a + p,
                        w = c + d,
                        M = s + v,
                        S = Math.sqrt(b * b + w * w + M * M),
                        E = Math.asin(M /= S),
                        k = Su(Su(M) - 1) < Fu || Su(r - h) < Fu ? (r + h) / 2 : Math.atan2(w, b),
                        N = t(k, E),
                        A = N[0],
                        T = N[1],
                        z = A - n,
                        C = T - e,
                        O = m * z - _ * C;
                    (O * O / x > o || Su((_ * z + m * C) / x - .5) > .3 || a * p + c * d + s * v < u) && (i(n, e, r, a, c, s, A, T, k, b /= S, w /= S, M, g, y), y.point(A, T), i(A, T, k, b, w, M, f, l, h, p, d, v, g, y))
                }
            }
            var o = .5,
                u = Math.cos(30 * Wu),
                a = 16;
            return n.precision = function(t) {
                return arguments.length ? (a = (o = t * t) > 0 && 16, n) : Math.sqrt(o)
            }, n
        }

        function se(t) {
            var n = ce(function(n, e) {
                return t([n * Ku, e * Ku])
            });
            return function(t) {
                return de(n(t))
            }
        }

        function fe(t) {
            this.stream = t
        }

        function le(t, n) {
            return {
                point: n,
                sphere: function() {
                    t.sphere()
                },
                lineStart: function() {
                    t.lineStart()
                },
                lineEnd: function() {
                    t.lineEnd()
                },
                polygonStart: function() {
                    t.polygonStart()
                },
                polygonEnd: function() {
                    t.polygonEnd()
                }
            }
        }

        function he(t) {
            return pe(function() {
                return t
            })()
        }

        function pe(t) {
            function n(t) {
                return t = a(t[0] * Wu, t[1] * Wu), [t[0] * h + c, s - t[1] * h]
            }

            function e(t) {
                return t = a.invert((t[0] - c) / h, (s - t[1]) / h), t && [t[0] * Ku, t[1] * Ku]
            }

            function r() {
                a = Pn(u = ye(y, _, m), o);
                var t = o(v, g);
                return c = p - t[0] * h, s = d + t[1] * h, i()
            }

            function i() {
                return f && (f.valid = !1, f = null), n
            }
            var o, u, a, c, s, f, l = ce(function(t, n) {
                    return t = o(t, n), [t[0] * h + c, s - t[1] * h]
                }),
                h = 150,
                p = 480,
                d = 250,
                v = 0,
                g = 0,
                y = 0,
                _ = 0,
                m = 0,
                x = Ha,
                b = S,
                w = null,
                M = null;
            return n.stream = function(t) {
                    return f && (f.valid = !1), f = de(x(u, l(b(t)))), f.valid = !0, f
                }, n.clipAngle = function(t) {
                    return arguments.length ? (x = null == t ? (w = t, Ha) : Kn((w = +t) * Wu), i()) : w
                }, n.clipExtent = function(t) {
                    return arguments.length ? (M = t, b = t ? Zn(t[0][0], t[0][1], t[1][0], t[1][1]) : S, i()) : M
                }, n.scale = function(t) {
                    return arguments.length ? (h = +t, r()) : h
                }, n.translate = function(t) {
                    return arguments.length ? (p = +t[0], d = +t[1], r()) : [p, d]
                }, n.center = function(t) {
                    return arguments.length ? (v = t[0] % 360 * Wu, g = t[1] % 360 * Wu, r()) : [v * Ku, g * Ku]
                }, n.rotate = function(t) {
                    return arguments.length ? (y = t[0] % 360 * Wu, _ = t[1] % 360 * Wu, m = t.length > 2 ? t[2] % 360 * Wu : 0, r()) : [y * Ku, _ * Ku, m * Ku]
                }, du.rebind(n, l, "precision"),
                function() {
                    return o = t.apply(this, arguments), n.invert = o.invert && e, r()
                }
        }

        function de(t) {
            return le(t, function(n, e) {
                t.point(n * Wu, e * Wu)
            })
        }

        function ve(t, n) {
            return [t, n]
        }

        function ge(t, n) {
            return [t > Hu ? t - Bu : t < -Hu ? t + Bu : t, n]
        }

        function ye(t, n, e) {
            return t ? n || e ? Pn(me(t), xe(n, e)) : me(t) : n || e ? xe(n, e) : ge
        }

        function _e(t) {
            return function(n, e) {
                return n += t, [n > Hu ? n - Bu : n < -Hu ? n + Bu : n, e]
            }
        }

        function me(t) {
            var n = _e(t);
            return n.invert = _e(-t), n
        }

        function xe(t, n) {
            function e(t, n) {
                var e = Math.cos(n),
                    a = Math.cos(t) * e,
                    c = Math.sin(t) * e,
                    s = Math.sin(n),
                    f = s * r + a * i;
                return [Math.atan2(c * o - f * u, a * r - s * i), at(f * o + c * u)]
            }
            var r = Math.cos(t),
                i = Math.sin(t),
                o = Math.cos(n),
                u = Math.sin(n);
            return e.invert = function(t, n) {
                var e = Math.cos(n),
                    a = Math.cos(t) * e,
                    c = Math.sin(t) * e,
                    s = Math.sin(n),
                    f = s * o - c * u;
                return [Math.atan2(c * o + s * u, a * r + f * i), at(f * r - a * i)]
            }, e
        }

        function be(t, n) {
            var e = Math.cos(t),
                r = Math.sin(t);
            return function(i, o, u, a) {
                var c = u * n;
                null != i ? (i = we(e, i), o = we(e, o), (u > 0 ? i < o : i > o) && (i += u * Bu)) : (i = t + u * Bu, o = t - .5 * c);
                for (var s, f = i; u > 0 ? f > o : f < o; f -= c) a.point((s = An([e, -r * Math.cos(f), -r * Math.sin(f)]))[0], s[1])
            }
        }

        function we(t, n) {
            var e = wn(n);
            e[0] -= t, Nn(e);
            var r = ut(-e[1]);
            return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Fu) % (2 * Math.PI)
        }

        function Me(t, n, e) {
            var r = du.range(t, n - Fu, e).concat(n);
            return function(t) {
                return r.map(function(n) {
                    return [t, n]
                })
            }
        }

        function Se(t, n, e) {
            var r = du.range(t, n - Fu, e).concat(n);
            return function(t) {
                return r.map(function(n) {
                    return [n, t]
                })
            }
        }

        function Ee(t) {
            return t.source
        }

        function ke(t) {
            return t.target
        }

        function Ne(t, n, e, r) {
            var i = Math.cos(n),
                o = Math.sin(n),
                u = Math.cos(r),
                a = Math.sin(r),
                c = i * Math.cos(t),
                s = i * Math.sin(t),
                f = u * Math.cos(e),
                l = u * Math.sin(e),
                h = 2 * Math.asin(Math.sqrt(lt(r - n) + i * u * lt(e - t))),
                p = 1 / Math.sin(h),
                d = h ? function(t) {
                    var n = Math.sin(t *= h) * p,
                        e = Math.sin(h - t) * p,
                        r = e * c + n * f,
                        i = e * s + n * l,
                        u = e * o + n * a;
                    return [Math.atan2(i, r) * Ku, Math.atan2(u, Math.sqrt(r * r + i * i)) * Ku]
                } : function() {
                    return [t * Ku, n * Ku]
                };
            return d.distance = h, d
        }

        function Ae() {
            function t(t, i) {
                var o = Math.sin(i *= Wu),
                    u = Math.cos(i),
                    a = Su((t *= Wu) - n),
                    c = Math.cos(a);
                tc += Math.atan2(Math.sqrt((a = u * Math.sin(a)) * a + (a = r * o - e * u * c) * a), e * o + r * u * c), n = t, e = o, r = u
            }
            var n, e, r;
            nc.point = function(i, o) {
                n = i * Wu, e = Math.sin(o *= Wu), r = Math.cos(o), nc.point = t
            }, nc.lineEnd = function() {
                nc.point = nc.lineEnd = N
            }
        }

        function Te(t, n) {
            function e(n, e) {
                var r = Math.cos(n),
                    i = Math.cos(e),
                    o = t(r * i);
                return [o * i * Math.sin(n), o * Math.sin(e)]
            }
            return e.invert = function(t, e) {
                var r = Math.sqrt(t * t + e * e),
                    i = n(r),
                    o = Math.sin(i),
                    u = Math.cos(i);
                return [Math.atan2(t * o, r * u), Math.asin(r && e * o / r)]
            }, e
        }

        function ze(t, n) {
            function e(t, n) {
                u > 0 ? n < -Xu + Fu && (n = -Xu + Fu) : n > Xu - Fu && (n = Xu - Fu);
                var e = u / Math.pow(i(n), o);
                return [e * Math.sin(o * t), u - e * Math.cos(o * t)]
            }
            var r = Math.cos(t),
                i = function(t) {
                    return Math.tan(Hu / 4 + t / 2)
                },
                o = t === n ? Math.sin(t) : Math.log(r / Math.cos(n)) / Math.log(i(n) / i(t)),
                u = r * Math.pow(i(t), o) / o;
            return o ? (e.invert = function(t, n) {
                var e = u - n,
                    r = it(o) * Math.sqrt(t * t + e * e);
                return [Math.atan2(t, e) / o, 2 * Math.atan(Math.pow(u / r, 1 / o)) - Xu]
            }, e) : Oe
        }

        function Ce(t, n) {
            function e(t, n) {
                var e = o - n;
                return [e * Math.sin(i * t), o - e * Math.cos(i * t)]
            }
            var r = Math.cos(t),
                i = t === n ? Math.sin(t) : (r - Math.cos(n)) / (n - t),
                o = r / i + t;
            return Su(i) < Fu ? ve : (e.invert = function(t, n) {
                var e = o - n;
                return [Math.atan2(t, e) / i, o - it(i) * Math.sqrt(t * t + e * e)]
            }, e)
        }

        function Oe(t, n) {
            return [t, Math.log(Math.tan(Hu / 4 + n / 2))]
        }

        function Ie(t) {
            var n, e = he(t),
                r = e.scale,
                i = e.translate,
                o = e.clipExtent;
            return e.scale = function() {
                var t = r.apply(e, arguments);
                return t === e ? n ? e.clipExtent(null) : e : t
            }, e.translate = function() {
                var t = i.apply(e, arguments);
                return t === e ? n ? e.clipExtent(null) : e : t
            }, e.clipExtent = function(t) {
                var u = o.apply(e, arguments);
                if (u === e) {
                    if (n = null == t) {
                        var a = Hu * r(),
                            c = i();
                        o([
                            [c[0] - a, c[1] - a],
                            [c[0] + a, c[1] + a]
                        ])
                    }
                } else n && (u = null);
                return u
            }, e.clipExtent(null)
        }

        function Le(t, n) {
            return [Math.log(Math.tan(Hu / 4 + n / 2)), -t]
        }

        function Pe(t) {
            return t[0]
        }

        function De(t) {
            return t[1]
        }

        function qe(t) {
            for (var n = t.length, e = [0, 1], r = 2, i = 2; i < n; i++) {
                for (; r > 1 && ot(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0;) --r;
                e[r++] = i
            }
            return e.slice(0, r)
        }

        function Re(t, n) {
            return t[0] - n[0] || t[1] - n[1]
        }

        function je(t, n, e) {
            return (e[0] - n[0]) * (t[1] - n[1]) < (e[1] - n[1]) * (t[0] - n[0])
        }

        function Ue(t, n, e, r) {
            var i = t[0],
                o = e[0],
                u = n[0] - i,
                a = r[0] - o,
                c = t[1],
                s = e[1],
                f = n[1] - c,
                l = r[1] - s,
                h = (a * (c - s) - l * (i - o)) / (l * u - a * f);
            return [i + h * u, c + h * f]
        }

        function Fe(t) {
            var n = t[0],
                e = t[t.length - 1];
            return !(n[0] - e[0] || n[1] - e[1])
        }

        function Ye() {
            sr(this), this.edge = this.site = this.circle = null
        }

        function He(t) {
            var n = pc.pop() || new Ye;
            return n.site = t, n
        }

        function Be(t) {
            tr(t), fc.remove(t), pc.push(t), sr(t)
        }

        function Ve(t) {
            var n = t.circle,
                e = n.x,
                r = n.cy,
                i = {
                    x: e,
                    y: r
                },
                o = t.P,
                u = t.N,
                a = [t];
            Be(t);
            for (var c = o; c.circle && Su(e - c.circle.x) < Fu && Su(r - c.circle.cy) < Fu;) o = c.P, a.unshift(c), Be(c), c = o;
            a.unshift(c), tr(c);
            for (var s = u; s.circle && Su(e - s.circle.x) < Fu && Su(r - s.circle.cy) < Fu;) u = s.N, a.push(s), Be(s), s = u;
            a.push(s), tr(s);
            var f, l = a.length;
            for (f = 1; f < l; ++f) s = a[f], c = a[f - 1], ur(s.edge, c.site, s.site, i);
            c = a[0], s = a[l - 1], s.edge = ir(c.site, s.site, null, i), Qe(c), Qe(s)
        }

        function Xe(t) {
            for (var n, e, r, i, o = t.x, u = t.y, a = fc._; a;)
                if (r = We(a, u) - o, r > Fu) a = a.L;
                else {
                    if (i = o - Ke(a, u), !(i > Fu)) {
                        r > -Fu ? (n = a.P, e = a) : i > -Fu ? (n = a, e = a.N) : n = e = a;
                        break
                    }
                    if (!a.R) {
                        n = a;
                        break
                    }
                    a = a.R
                }
            var c = He(t);
            if (fc.insert(n, c), n || e) {
                if (n === e) return tr(n), e = He(n.site), fc.insert(c, e), c.edge = e.edge = ir(n.site, c.site), Qe(n), void Qe(e);
                if (!e) return void(c.edge = ir(n.site, c.site));
                tr(n), tr(e);
                var s = n.site,
                    f = s.x,
                    l = s.y,
                    h = t.x - f,
                    p = t.y - l,
                    d = e.site,
                    v = d.x - f,
                    g = d.y - l,
                    y = 2 * (h * g - p * v),
                    _ = h * h + p * p,
                    m = v * v + g * g,
                    x = {
                        x: (g * _ - p * m) / y + f,
                        y: (h * m - v * _) / y + l
                    };
                ur(e.edge, s, d, x), c.edge = ir(s, t, null, x), e.edge = ir(t, d, null, x), Qe(n), Qe(e)
            }
        }

        function We(t, n) {
            var e = t.site,
                r = e.x,
                i = e.y,
                o = i - n;
            if (!o) return r;
            var u = t.P;
            if (!u) return -(1 / 0);
            e = u.site;
            var a = e.x,
                c = e.y,
                s = c - n;
            if (!s) return a;
            var f = a - r,
                l = 1 / o - 1 / s,
                h = f / s;
            return l ? (-h + Math.sqrt(h * h - 2 * l * (f * f / (-2 * s) - c + s / 2 + i - o / 2))) / l + r : (r + a) / 2
        }

        function Ke(t, n) {
            var e = t.N;
            if (e) return We(e, n);
            var r = t.site;
            return r.y === n ? r.x : 1 / 0
        }

        function Je(t) {
            this.site = t, this.edges = []
        }

        function Ze(t) {
            for (var n, e, r, i, o, u, a, c, s, f, l = t[0][0], h = t[1][0], p = t[0][1], d = t[1][1], v = sc, g = v.length; g--;)
                if (o = v[g], o && o.prepare())
                    for (a = o.edges, c = a.length, u = 0; u < c;) f = a[u].end(), r = f.x, i = f.y, s = a[++u % c].start(), n = s.x, e = s.y, (Su(r - n) > Fu || Su(i - e) > Fu) && (a.splice(u, 0, new ar(or(o.site, f, Su(r - l) < Fu && d - i > Fu ? {
                        x: l,
                        y: Su(n - l) < Fu ? e : d
                    } : Su(i - d) < Fu && h - r > Fu ? {
                        x: Su(e - d) < Fu ? n : h,
                        y: d
                    } : Su(r - h) < Fu && i - p > Fu ? {
                        x: h,
                        y: Su(n - h) < Fu ? e : p
                    } : Su(i - p) < Fu && r - l > Fu ? {
                        x: Su(e - p) < Fu ? n : l,
                        y: p
                    } : null), o.site, null)), ++c)
        }

        function $e(t, n) {
            return n.angle - t.angle
        }

        function Ge() {
            sr(this), this.x = this.y = this.arc = this.site = this.cy = null
        }

        function Qe(t) {
            var n = t.P,
                e = t.N;
            if (n && e) {
                var r = n.site,
                    i = t.site,
                    o = e.site;
                if (r !== o) {
                    var u = i.x,
                        a = i.y,
                        c = r.x - u,
                        s = r.y - a,
                        f = o.x - u,
                        l = o.y - a,
                        h = 2 * (c * l - s * f);
                    if (!(h >= -Yu)) {
                        var p = c * c + s * s,
                            d = f * f + l * l,
                            v = (l * p - s * d) / h,
                            g = (c * d - f * p) / h,
                            l = g + a,
                            y = dc.pop() || new Ge;
                        y.arc = t, y.site = i, y.x = v + u, y.y = l + Math.sqrt(v * v + g * g), y.cy = l, t.circle = y;
                        for (var _ = null, m = hc._; m;)
                            if (y.y < m.y || y.y === m.y && y.x <= m.x) {
                                if (!m.L) {
                                    _ = m.P;
                                    break
                                }
                                m = m.L
                            } else {
                                if (!m.R) {
                                    _ = m;
                                    break
                                }
                                m = m.R
                            }
                        hc.insert(_, y), _ || (lc = y)
                    }
                }
            }
        }

        function tr(t) {
            var n = t.circle;
            n && (n.P || (lc = n.N), hc.remove(n), dc.push(n), sr(n), t.circle = null)
        }

        function nr(t) {
            for (var n, e = cc, r = Jn(t[0][0], t[0][1], t[1][0], t[1][1]), i = e.length; i--;) n = e[i], (!er(n, t) || !r(n) || Su(n.a.x - n.b.x) < Fu && Su(n.a.y - n.b.y) < Fu) && (n.a = n.b = null, e.splice(i, 1))
        }

        function er(t, n) {
            var e = t.b;
            if (e) return !0;
            var r, i, o = t.a,
                u = n[0][0],
                a = n[1][0],
                c = n[0][1],
                s = n[1][1],
                f = t.l,
                l = t.r,
                h = f.x,
                p = f.y,
                d = l.x,
                v = l.y,
                g = (h + d) / 2,
                y = (p + v) / 2;
            if (v === p) {
                if (g < u || g >= a) return;
                if (h > d) {
                    if (o) {
                        if (o.y >= s) return
                    } else o = {
                        x: g,
                        y: c
                    };
                    e = {
                        x: g,
                        y: s
                    }
                } else {
                    if (o) {
                        if (o.y < c) return
                    } else o = {
                        x: g,
                        y: s
                    };
                    e = {
                        x: g,
                        y: c
                    }
                }
            } else if (r = (h - d) / (v - p), i = y - r * g, r < -1 || r > 1)
                if (h > d) {
                    if (o) {
                        if (o.y >= s) return
                    } else o = {
                        x: (c - i) / r,
                        y: c
                    };
                    e = {
                        x: (s - i) / r,
                        y: s
                    }
                } else {
                    if (o) {
                        if (o.y < c) return
                    } else o = {
                        x: (s - i) / r,
                        y: s
                    };
                    e = {
                        x: (c - i) / r,
                        y: c
                    }
                }
            else if (p < v) {
                if (o) {
                    if (o.x >= a) return
                } else o = {
                    x: u,
                    y: r * u + i
                };
                e = {
                    x: a,
                    y: r * a + i
                }
            } else {
                if (o) {
                    if (o.x < u) return
                } else o = {
                    x: a,
                    y: r * a + i
                };
                e = {
                    x: u,
                    y: r * u + i
                }
            }
            return t.a = o, t.b = e, !0
        }

        function rr(t, n) {
            this.l = t, this.r = n, this.a = this.b = null
        }

        function ir(t, n, e, r) {
            var i = new rr(t, n);
            return cc.push(i), e && ur(i, t, n, e), r && ur(i, n, t, r), sc[t.i].edges.push(new ar(i, t, n)), sc[n.i].edges.push(new ar(i, n, t)), i
        }

        function or(t, n, e) {
            var r = new rr(t, null);
            return r.a = n, r.b = e, cc.push(r), r
        }

        function ur(t, n, e, r) {
            t.a || t.b ? t.l === e ? t.b = r : t.a = r : (t.a = r, t.l = n, t.r = e)
        }

        function ar(t, n, e) {
            var r = t.a,
                i = t.b;
            this.edge = t, this.site = n, this.angle = e ? Math.atan2(e.y - n.y, e.x - n.x) : t.l === n ? Math.atan2(i.x - r.x, r.y - i.y) : Math.atan2(r.x - i.x, i.y - r.y)
        }

        function cr() {
            this._ = null
        }

        function sr(t) {
            t.U = t.C = t.L = t.R = t.P = t.N = null
        }

        function fr(t, n) {
            var e = n,
                r = n.R,
                i = e.U;
            i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
        }

        function lr(t, n) {
            var e = n,
                r = n.L,
                i = e.U;
            i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
        }

        function hr(t) {
            for (; t.L;) t = t.L;
            return t
        }

        function pr(t, n) {
            var e, r, i, o = t.sort(dr).pop();
            for (cc = [], sc = new Array(t.length), fc = new cr, hc = new cr;;)
                if (i = lc, o && (!i || o.y < i.y || o.y === i.y && o.x < i.x)) o.x === e && o.y === r || (sc[o.i] = new Je(o), Xe(o), e = o.x, r = o.y), o = t.pop();
                else {
                    if (!i) break;
                    Ve(i.arc)
                }
            n && (nr(n), Ze(n));
            var u = {
                cells: sc,
                edges: cc
            };
            return fc = hc = cc = sc = null, u
        }

        function dr(t, n) {
            return n.y - t.y || n.x - t.x
        }

        function vr(t, n, e) {
            return (t.x - e.x) * (n.y - t.y) - (t.x - n.x) * (e.y - t.y)
        }

        function gr(t) {
            return t.x
        }

        function yr(t) {
            return t.y
        }

        function _r() {
            return {
                leaf: !0,
                nodes: [],
                point: null,
                x: null,
                y: null
            }
        }

        function mr(t, n, e, r, i, o) {
            if (!t(n, e, r, i, o)) {
                var u = .5 * (e + i),
                    a = .5 * (r + o),
                    c = n.nodes;
                c[0] && mr(t, c[0], e, r, u, a), c[1] && mr(t, c[1], u, r, i, a), c[2] && mr(t, c[2], e, a, u, o), c[3] && mr(t, c[3], u, a, i, o)
            }
        }

        function xr(t, n, e, r, i, o, u) {
            var a, c = 1 / 0;
            return function t(s, f, l, h, p) {
                if (!(f > o || l > u || h < r || p < i)) {
                    if (d = s.point) {
                        var d, v = n - s.x,
                            g = e - s.y,
                            y = v * v + g * g;
                        if (y < c) {
                            var _ = Math.sqrt(c = y);
                            r = n - _, i = e - _, o = n + _, u = e + _, a = d
                        }
                    }
                    for (var m = s.nodes, x = .5 * (f + h), b = .5 * (l + p), w = n >= x, M = e >= b, S = M << 1 | w, E = S + 4; S < E; ++S)
                        if (s = m[3 & S]) switch (3 & S) {
                            case 0:
                                t(s, f, l, x, b);
                                break;
                            case 1:
                                t(s, x, l, h, b);
                                break;
                            case 2:
                                t(s, f, b, x, p);
                                break;
                            case 3:
                                t(s, x, b, h, p)
                        }
                }
            }(t, r, i, o, u), a
        }

        function br(t, n) {
            t = du.rgb(t), n = du.rgb(n);
            var e = t.r,
                r = t.g,
                i = t.b,
                o = n.r - e,
                u = n.g - r,
                a = n.b - i;
            return function(t) {
                return "#" + kt(Math.round(e + o * t)) + kt(Math.round(r + u * t)) + kt(Math.round(i + a * t))
            }
        }

        function wr(t, n) {
            var e, r = {},
                i = {};
            for (e in t) e in n ? r[e] = Er(t[e], n[e]) : i[e] = t[e];
            for (e in n) e in t || (i[e] = n[e]);
            return function(t) {
                for (e in r) i[e] = r[e](t);
                return i
            }
        }

        function Mr(t, n) {
            return t = +t, n = +n,
                function(e) {
                    return t * (1 - e) + n * e
                }
        }

        function Sr(t, n) {
            var e, r, i, o = gc.lastIndex = yc.lastIndex = 0,
                u = -1,
                a = [],
                c = [];
            for (t += "", n += "";
                (e = gc.exec(t)) && (r = yc.exec(n));)(i = r.index) > o && (i = n.slice(o, i), a[u] ? a[u] += i : a[++u] = i), (e = e[0]) === (r = r[0]) ? a[u] ? a[u] += r : a[++u] = r : (a[++u] = null, c.push({
                i: u,
                x: Mr(e, r)
            })), o = yc.lastIndex;
            return o < n.length && (i = n.slice(o), a[u] ? a[u] += i : a[++u] = i), a.length < 2 ? c[0] ? (n = c[0].x, function(t) {
                return n(t) + ""
            }) : function() {
                return n
            } : (n = c.length, function(t) {
                for (var e, r = 0; r < n; ++r) a[(e = c[r]).i] = e.x(t);
                return a.join("")
            })
        }

        function Er(t, n) {
            for (var e, r = du.interpolators.length; --r >= 0 && !(e = du.interpolators[r](t, n)););
            return e
        }

        function kr(t, n) {
            var e, r = [],
                i = [],
                o = t.length,
                u = n.length,
                a = Math.min(t.length, n.length);
            for (e = 0; e < a; ++e) r.push(Er(t[e], n[e]));
            for (; e < o; ++e) i[e] = t[e];
            for (; e < u; ++e) i[e] = n[e];
            return function(t) {
                for (e = 0; e < a; ++e) i[e] = r[e](t);
                return i
            }
        }

        function Nr(t) {
            return function(n) {
                return n <= 0 ? 0 : n >= 1 ? 1 : t(n)
            }
        }

        function Ar(t) {
            return function(n) {
                return 1 - t(1 - n)
            }
        }

        function Tr(t) {
            return function(n) {
                return .5 * (n < .5 ? t(2 * n) : 2 - t(2 - 2 * n))
            }
        }

        function zr(t) {
            return t * t
        }

        function Cr(t) {
            return t * t * t
        }

        function Or(t) {
            if (t <= 0) return 0;
            if (t >= 1) return 1;
            var n = t * t,
                e = n * t;
            return 4 * (t < .5 ? e : 3 * (t - n) + e - .75)
        }

        function Ir(t) {
            return function(n) {
                return Math.pow(n, t)
            }
        }

        function Lr(t) {
            return 1 - Math.cos(t * Xu)
        }

        function Pr(t) {
            return Math.pow(2, 10 * (t - 1))
        }

        function Dr(t) {
            return 1 - Math.sqrt(1 - t * t)
        }

        function qr(t, n) {
            var e;
            return arguments.length < 2 && (n = .45), arguments.length ? e = n / Bu * Math.asin(1 / t) : (t = 1, e = n / 4),
                function(r) {
                    return 1 + t * Math.pow(2, -10 * r) * Math.sin((r - e) * Bu / n)
                }
        }

        function Rr(t) {
            return t || (t = 1.70158),
                function(n) {
                    return n * n * ((t + 1) * n - t)
                }
        }

        function jr(t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }

        function Ur(t, n) {
            t = du.hcl(t), n = du.hcl(n);
            var e = t.h,
                r = t.c,
                i = t.l,
                o = n.h - e,
                u = n.c - r,
                a = n.l - i;
            return isNaN(u) && (u = 0, r = isNaN(r) ? n.c : r), isNaN(o) ? (o = 0, e = isNaN(e) ? n.h : e) : o > 180 ? o -= 360 : o < -180 && (o += 360),
                function(t) {
                    return gt(e + o * t, r + u * t, i + a * t) + ""
                }
        }

        function Fr(t, n) {
            t = du.hsl(t), n = du.hsl(n);
            var e = t.h,
                r = t.s,
                i = t.l,
                o = n.h - e,
                u = n.s - r,
                a = n.l - i;
            return isNaN(u) && (u = 0, r = isNaN(r) ? n.s : r), isNaN(o) ? (o = 0, e = isNaN(e) ? n.h : e) : o > 180 ? o -= 360 : o < -180 && (o += 360),
                function(t) {
                    return dt(e + o * t, r + u * t, i + a * t) + ""
                }
        }

        function Yr(t, n) {
            t = du.lab(t), n = du.lab(n);
            var e = t.l,
                r = t.a,
                i = t.b,
                o = n.l - e,
                u = n.a - r,
                a = n.b - i;
            return function(t) {
                return _t(e + o * t, r + u * t, i + a * t) + ""
            }
        }

        function Hr(t, n) {
            return n -= t,
                function(e) {
                    return Math.round(t + n * e)
                }
        }

        function Br(t) {
            var n = [t.a, t.b],
                e = [t.c, t.d],
                r = Xr(n),
                i = Vr(n, e),
                o = Xr(Wr(e, n, -i)) || 0;
            n[0] * e[1] < e[0] * n[1] && (n[0] *= -1, n[1] *= -1, r *= -1, i *= -1), this.rotate = (r ? Math.atan2(n[1], n[0]) : Math.atan2(-e[0], e[1])) * Ku, this.translate = [t.e, t.f], this.scale = [r, o], this.skew = o ? Math.atan2(i, o) * Ku : 0
        }

        function Vr(t, n) {
            return t[0] * n[0] + t[1] * n[1]
        }

        function Xr(t) {
            var n = Math.sqrt(Vr(t, t));
            return n && (t[0] /= n, t[1] /= n), n
        }

        function Wr(t, n, e) {
            return t[0] += e * n[0], t[1] += e * n[1], t
        }

        function Kr(t) {
            return t.length ? t.pop() + "," : ""
        }

        function Jr(t, n, e, r) {
            if (t[0] !== n[0] || t[1] !== n[1]) {
                var i = e.push("translate(", null, ",", null, ")");
                r.push({
                    i: i - 4,
                    x: Mr(t[0], n[0])
                }, {
                    i: i - 2,
                    x: Mr(t[1], n[1])
                })
            } else(n[0] || n[1]) && e.push("translate(" + n + ")")
        }

        function Zr(t, n, e, r) {
            t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), r.push({
                i: e.push(Kr(e) + "rotate(", null, ")") - 2,
                x: Mr(t, n)
            })) : n && e.push(Kr(e) + "rotate(" + n + ")")
        }

        function $r(t, n, e, r) {
            t !== n ? r.push({
                i: e.push(Kr(e) + "skewX(", null, ")") - 2,
                x: Mr(t, n)
            }) : n && e.push(Kr(e) + "skewX(" + n + ")")
        }

        function Gr(t, n, e, r) {
            if (t[0] !== n[0] || t[1] !== n[1]) {
                var i = e.push(Kr(e) + "scale(", null, ",", null, ")");
                r.push({
                    i: i - 4,
                    x: Mr(t[0], n[0])
                }, {
                    i: i - 2,
                    x: Mr(t[1], n[1])
                })
            } else 1 === n[0] && 1 === n[1] || e.push(Kr(e) + "scale(" + n + ")")
        }

        function Qr(t, n) {
            var e = [],
                r = [];
            return t = du.transform(t), n = du.transform(n), Jr(t.translate, n.translate, e, r), Zr(t.rotate, n.rotate, e, r), $r(t.skew, n.skew, e, r), Gr(t.scale, n.scale, e, r), t = n = null,
                function(t) {
                    for (var n, i = -1, o = r.length; ++i < o;) e[(n = r[i]).i] = n.x(t);
                    return e.join("")
                }
        }

        function ti(t, n) {
            return n = (n -= t = +t) || 1 / n,
                function(e) {
                    return (e - t) / n
                }
        }

        function ni(t, n) {
            return n = (n -= t = +t) || 1 / n,
                function(e) {
                    return Math.max(0, Math.min(1, (e - t) / n))
                }
        }

        function ei(t) {
            for (var n = t.source, e = t.target, r = ii(n, e), i = [n]; n !== r;) n = n.parent, i.push(n);
            for (var o = i.length; e !== r;) i.splice(o, 0, e), e = e.parent;
            return i
        }

        function ri(t) {
            for (var n = [], e = t.parent; null != e;) n.push(t), t = e, e = e.parent;
            return n.push(t), n
        }

        function ii(t, n) {
            if (t === n) return t;
            for (var e = ri(t), r = ri(n), i = e.pop(), o = r.pop(), u = null; i === o;) u = i, i = e.pop(), o = r.pop();
            return u
        }

        function oi(t) {
            t.fixed |= 2
        }

        function ui(t) {
            t.fixed &= -7
        }

        function ai(t) {
            t.fixed |= 4, t.px = t.x, t.py = t.y
        }

        function ci(t) {
            t.fixed &= -5
        }

        function si(t, n, e) {
            var r = 0,
                i = 0;
            if (t.charge = 0, !t.leaf)
                for (var o, u = t.nodes, a = u.length, c = -1; ++c < a;) o = u[c], null != o && (si(o, n, e), t.charge += o.charge, r += o.charge * o.cx, i += o.charge * o.cy);
            if (t.point) {
                t.leaf || (t.point.x += Math.random() - .5, t.point.y += Math.random() - .5);
                var s = n * e[t.point.index];
                t.charge += t.pointCharge = s, r += s * t.point.x, i += s * t.point.y
            }
            t.cx = r / t.charge, t.cy = i / t.charge
        }

        function fi(t, n) {
            return du.rebind(t, n, "sort", "children", "value"), t.nodes = t, t.links = gi, t
        }

        function li(t, n) {
            for (var e = [t]; null != (t = e.pop());)
                if (n(t), (i = t.children) && (r = i.length))
                    for (var r, i; --r >= 0;) e.push(i[r])
        }

        function hi(t, n) {
            for (var e = [t], r = []; null != (t = e.pop());)
                if (r.push(t), (o = t.children) && (i = o.length))
                    for (var i, o, u = -1; ++u < i;) e.push(o[u]);
            for (; null != (t = r.pop());) n(t)
        }

        function pi(t) {
            return t.children
        }

        function di(t) {
            return t.value
        }

        function vi(t, n) {
            return n.value - t.value
        }

        function gi(t) {
            return du.merge(t.map(function(t) {
                return (t.children || []).map(function(n) {
                    return {
                        source: t,
                        target: n
                    }
                })
            }))
        }

        function yi(t) {
            return t.x
        }

        function _i(t) {
            return t.y
        }

        function mi(t, n, e) {
            t.y0 = n, t.y = e
        }

        function xi(t) {
            return du.range(t.length)
        }

        function bi(t) {
            for (var n = -1, e = t[0].length, r = []; ++n < e;) r[n] = 0;
            return r
        }

        function wi(t) {
            for (var n, e = 1, r = 0, i = t[0][1], o = t.length; e < o; ++e)(n = t[e][1]) > i && (r = e, i = n);
            return r
        }

        function Mi(t) {
            return t.reduce(Si, 0)
        }

        function Si(t, n) {
            return t + n[1]
        }

        function Ei(t, n) {
            return ki(t, Math.ceil(Math.log(n.length) / Math.LN2 + 1))
        }

        function ki(t, n) {
            for (var e = -1, r = +t[0], i = (t[1] - r) / n, o = []; ++e <= n;) o[e] = i * e + r;
            return o
        }

        function Ni(t) {
            return [du.min(t), du.max(t)]
        }

        function Ai(t, n) {
            return t.value - n.value
        }

        function Ti(t, n) {
            var e = t._pack_next;
            t._pack_next = n, n._pack_prev = t, n._pack_next = e, e._pack_prev = n
        }

        function zi(t, n) {
            t._pack_next = n, n._pack_prev = t
        }

        function Ci(t, n) {
            var e = n.x - t.x,
                r = n.y - t.y,
                i = t.r + n.r;
            return .999 * i * i > e * e + r * r
        }

        function Oi(t) {
            function n(t) {
                f = Math.min(t.x - t.r, f), l = Math.max(t.x + t.r, l), h = Math.min(t.y - t.r, h), p = Math.max(t.y + t.r, p)
            }
            if ((e = t.children) && (s = e.length)) {
                var e, r, i, o, u, a, c, s, f = 1 / 0,
                    l = -(1 / 0),
                    h = 1 / 0,
                    p = -(1 / 0);
                if (e.forEach(Ii), r = e[0], r.x = -r.r, r.y = 0, n(r), s > 1 && (i = e[1], i.x = i.r, i.y = 0, n(i), s > 2))
                    for (o = e[2], Di(r, i, o), n(o), Ti(r, o), r._pack_prev = o, Ti(o, i), i = r._pack_next, u = 3; u < s; u++) {
                        Di(r, i, o = e[u]);
                        var d = 0,
                            v = 1,
                            g = 1;
                        for (a = i._pack_next; a !== i; a = a._pack_next, v++)
                            if (Ci(a, o)) {
                                d = 1;
                                break
                            }
                        if (1 == d)
                            for (c = r._pack_prev; c !== a._pack_prev && !Ci(c, o); c = c._pack_prev, g++);
                        d ? (v < g || v == g && i.r < r.r ? zi(r, i = a) : zi(r = c, i), u--) : (Ti(r, o), i = o, n(o))
                    }
                var y = (f + l) / 2,
                    _ = (h + p) / 2,
                    m = 0;
                for (u = 0; u < s; u++) o = e[u], o.x -= y, o.y -= _, m = Math.max(m, o.r + Math.sqrt(o.x * o.x + o.y * o.y));
                t.r = m, e.forEach(Li)
            }
        }

        function Ii(t) {
            t._pack_next = t._pack_prev = t
        }

        function Li(t) {
            delete t._pack_next, delete t._pack_prev
        }

        function Pi(t, n, e, r) {
            var i = t.children;
            if (t.x = n += r * t.x, t.y = e += r * t.y, t.r *= r, i)
                for (var o = -1, u = i.length; ++o < u;) Pi(i[o], n, e, r)
        }

        function Di(t, n, e) {
            var r = t.r + e.r,
                i = n.x - t.x,
                o = n.y - t.y;
            if (r && (i || o)) {
                var u = n.r + e.r,
                    a = i * i + o * o;
                u *= u, r *= r;
                var c = .5 + (r - u) / (2 * a),
                    s = Math.sqrt(Math.max(0, 2 * u * (r + a) - (r -= a) * r - u * u)) / (2 * a);
                e.x = t.x + c * i + s * o, e.y = t.y + c * o - s * i
            } else e.x = t.x + r, e.y = t.y
        }

        function qi(t, n) {
            return t.parent == n.parent ? 1 : 2
        }

        function Ri(t) {
            var n = t.children;
            return n.length ? n[0] : t.t
        }

        function ji(t) {
            var n, e = t.children;
            return (n = e.length) ? e[n - 1] : t.t
        }

        function Ui(t, n, e) {
            var r = e / (n.i - t.i);
            n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e
        }

        function Fi(t) {
            for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;) n = i[o], n.z += e, n.m += e, e += n.s + (r += n.c)
        }

        function Yi(t, n, e) {
            return t.a.parent === n.parent ? t.a : e
        }

        function Hi(t) {
            return 1 + du.max(t, function(t) {
                return t.y
            })
        }

        function Bi(t) {
            return t.reduce(function(t, n) {
                return t + n.x
            }, 0) / t.length
        }

        function Vi(t) {
            var n = t.children;
            return n && n.length ? Vi(n[0]) : t
        }

        function Xi(t) {
            var n, e = t.children;
            return e && (n = e.length) ? Xi(e[n - 1]) : t
        }

        function Wi(t) {
            return {
                x: t.x,
                y: t.y,
                dx: t.dx,
                dy: t.dy
            }
        }

        function Ki(t, n) {
            var e = t.x + n[3],
                r = t.y + n[0],
                i = t.dx - n[1] - n[3],
                o = t.dy - n[0] - n[2];
            return i < 0 && (e += i / 2, i = 0), o < 0 && (r += o / 2, o = 0), {
                x: e,
                y: r,
                dx: i,
                dy: o
            }
        }

        function Ji(t) {
            var n = t[0],
                e = t[t.length - 1];
            return n < e ? [n, e] : [e, n]
        }

        function Zi(t) {
            return t.rangeExtent ? t.rangeExtent() : Ji(t.range())
        }

        function $i(t, n, e, r) {
            var i = e(t[0], t[1]),
                o = r(n[0], n[1]);
            return function(t) {
                return o(i(t))
            }
        }

        function Gi(t, n) {
            var e, r = 0,
                i = t.length - 1,
                o = t[r],
                u = t[i];
            return u < o && (e = r, r = i, i = e, e = o, o = u, u = e), t[r] = n.floor(o), t[i] = n.ceil(u), t
        }

        function Qi(t) {
            return t ? {
                floor: function(n) {
                    return Math.floor(n / t) * t
                },
                ceil: function(n) {
                    return Math.ceil(n / t) * t
                }
            } : Ac
        }

        function to(t, n, e, r) {
            var i = [],
                o = [],
                u = 0,
                a = Math.min(t.length, n.length) - 1;
            for (t[a] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++u <= a;) i.push(e(t[u - 1], t[u])), o.push(r(n[u - 1], n[u]));
            return function(n) {
                var e = du.bisect(t, n, 1, a) - 1;
                return o[e](i[e](n))
            }
        }

        function no(t, n, e, r) {
            function i() {
                var i = Math.min(t.length, n.length) > 2 ? to : $i,
                    c = r ? ni : ti;
                return u = i(t, n, c, e), a = i(n, t, c, Er), o
            }

            function o(t) {
                return u(t)
            }
            var u, a;
            return o.invert = function(t) {
                return a(t)
            }, o.domain = function(n) {
                return arguments.length ? (t = n.map(Number), i()) : t
            }, o.range = function(t) {
                return arguments.length ? (n = t, i()) : n
            }, o.rangeRound = function(t) {
                return o.range(t).interpolate(Hr)
            }, o.clamp = function(t) {
                return arguments.length ? (r = t, i()) : r
            }, o.interpolate = function(t) {
                return arguments.length ? (e = t, i()) : e
            }, o.ticks = function(n) {
                return oo(t, n)
            }, o.tickFormat = function(n, e) {
                return uo(t, n, e)
            }, o.nice = function(n) {
                return ro(t, n), i()
            }, o.copy = function() {
                return no(t, n, e, r)
            }, i()
        }

        function eo(t, n) {
            return du.rebind(t, n, "range", "rangeRound", "interpolate", "clamp")
        }

        function ro(t, n) {
            return Gi(t, Qi(io(t, n)[2])), Gi(t, Qi(io(t, n)[2])), t
        }

        function io(t, n) {
            null == n && (n = 10);
            var e = Ji(t),
                r = e[1] - e[0],
                i = Math.pow(10, Math.floor(Math.log(r / n) / Math.LN10)),
                o = n / r * i;
            return o <= .15 ? i *= 10 : o <= .35 ? i *= 5 : o <= .75 && (i *= 2), e[0] = Math.ceil(e[0] / i) * i, e[1] = Math.floor(e[1] / i) * i + .5 * i, e[2] = i, e
        }

        function oo(t, n) {
            return du.range.apply(du, io(t, n))
        }

        function uo(t, n, e) {
            var r = io(t, n);
            if (e) {
                var i = ga.exec(e);
                if (i.shift(), "s" === i[8]) {
                    var o = du.formatPrefix(Math.max(Su(r[0]), Su(r[1])));
                    return i[7] || (i[7] = "." + ao(o.scale(r[2]))), i[8] = "f", e = du.format(i.join("")),
                        function(t) {
                            return e(o.scale(t)) + o.symbol
                        }
                }
                i[7] || (i[7] = "." + co(i[8], r)), e = i.join("")
            } else e = ",." + ao(r[2]) + "f";
            return du.format(e)
        }

        function ao(t) {
            return -Math.floor(Math.log(t) / Math.LN10 + .01)
        }

        function co(t, n) {
            var e = ao(n[2]);
            return t in Tc ? Math.abs(e - ao(Math.max(Su(n[0]), Su(n[1])))) + +("e" !== t) : e - 2 * ("%" === t)
        }

        function so(t, n, e, r) {
            function i(t) {
                return (e ? Math.log(t < 0 ? 0 : t) : -Math.log(t > 0 ? 0 : -t)) / Math.log(n)
            }

            function o(t) {
                return e ? Math.pow(n, t) : -Math.pow(n, -t)
            }

            function u(n) {
                return t(i(n))
            }
            return u.invert = function(n) {
                return o(t.invert(n))
            }, u.domain = function(n) {
                return arguments.length ? (e = n[0] >= 0, t.domain((r = n.map(Number)).map(i)), u) : r
            }, u.base = function(e) {
                return arguments.length ? (n = +e, t.domain(r.map(i)), u) : n
            }, u.nice = function() {
                var n = Gi(r.map(i), e ? Math : Cc);
                return t.domain(n), r = n.map(o), u
            }, u.ticks = function() {
                var t = Ji(r),
                    u = [],
                    a = t[0],
                    c = t[1],
                    s = Math.floor(i(a)),
                    f = Math.ceil(i(c)),
                    l = n % 1 ? 2 : n;
                if (isFinite(f - s)) {
                    if (e) {
                        for (; s < f; s++)
                            for (var h = 1; h < l; h++) u.push(o(s) * h);
                        u.push(o(s))
                    } else
                        for (u.push(o(s)); s++ < f;)
                            for (var h = l - 1; h > 0; h--) u.push(o(s) * h);
                    for (s = 0; u[s] < a; s++);
                    for (f = u.length; u[f - 1] > c; f--);
                    u = u.slice(s, f)
                }
                return u
            }, u.tickFormat = function(t, e) {
                if (!arguments.length) return zc;
                arguments.length < 2 ? e = zc : "function" != typeof e && (e = du.format(e));
                var r = Math.max(1, n * t / u.ticks().length);
                return function(t) {
                    var u = t / o(Math.round(i(t)));
                    return u * n < n - .5 && (u *= n), u <= r ? e(t) : ""
                }
            }, u.copy = function() {
                return so(t.copy(), n, e, r)
            }, eo(u, t)
        }

        function fo(t, n, e) {
            function r(n) {
                return t(i(n))
            }
            var i = lo(n),
                o = lo(1 / n);
            return r.invert = function(n) {
                return o(t.invert(n))
            }, r.domain = function(n) {
                return arguments.length ? (t.domain((e = n.map(Number)).map(i)), r) : e
            }, r.ticks = function(t) {
                return oo(e, t)
            }, r.tickFormat = function(t, n) {
                return uo(e, t, n)
            }, r.nice = function(t) {
                return r.domain(ro(e, t))
            }, r.exponent = function(u) {
                return arguments.length ? (i = lo(n = u), o = lo(1 / n), t.domain(e.map(i)), r) : n
            }, r.copy = function() {
                return fo(t.copy(), n, e)
            }, eo(r, t)
        }

        function lo(t) {
            return function(n) {
                return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t)
            }
        }

        function ho(t, n) {
            function e(e) {
                return o[((i.get(e) || ("range" === n.t ? i.set(e, t.push(e)) : NaN)) - 1) % o.length]
            }

            function r(n, e) {
                return du.range(t.length).map(function(t) {
                    return n + e * t
                })
            }
            var i, o, u;
            return e.domain = function(r) {
                if (!arguments.length) return t;
                t = [], i = new v;
                for (var o, u = -1, a = r.length; ++u < a;) i.has(o = r[u]) || i.set(o, t.push(o));
                return e[n.t].apply(e, n.a)
            }, e.range = function(t) {
                return arguments.length ? (o = t, u = 0, n = {
                    t: "range",
                    a: arguments
                }, e) : o
            }, e.rangePoints = function(i, a) {
                arguments.length < 2 && (a = 0);
                var c = i[0],
                    s = i[1],
                    f = t.length < 2 ? (c = (c + s) / 2, 0) : (s - c) / (t.length - 1 + a);
                return o = r(c + f * a / 2, f), u = 0, n = {
                    t: "rangePoints",
                    a: arguments
                }, e
            }, e.rangeRoundPoints = function(i, a) {
                arguments.length < 2 && (a = 0);
                var c = i[0],
                    s = i[1],
                    f = t.length < 2 ? (c = s = Math.round((c + s) / 2), 0) : (s - c) / (t.length - 1 + a) | 0;
                return o = r(c + Math.round(f * a / 2 + (s - c - (t.length - 1 + a) * f) / 2), f), u = 0, n = {
                    t: "rangeRoundPoints",
                    a: arguments
                }, e
            }, e.rangeBands = function(i, a, c) {
                arguments.length < 2 && (a = 0), arguments.length < 3 && (c = a);
                var s = i[1] < i[0],
                    f = i[s - 0],
                    l = i[1 - s],
                    h = (l - f) / (t.length - a + 2 * c);
                return o = r(f + h * c, h), s && o.reverse(), u = h * (1 - a), n = {
                    t: "rangeBands",
                    a: arguments
                }, e
            }, e.rangeRoundBands = function(i, a, c) {
                arguments.length < 2 && (a = 0), arguments.length < 3 && (c = a);
                var s = i[1] < i[0],
                    f = i[s - 0],
                    l = i[1 - s],
                    h = Math.floor((l - f) / (t.length - a + 2 * c));
                return o = r(f + Math.round((l - f - (t.length - a) * h) / 2), h), s && o.reverse(), u = Math.round(h * (1 - a)), n = {
                    t: "rangeRoundBands",
                    a: arguments
                }, e
            }, e.rangeBand = function() {
                return u
            }, e.rangeExtent = function() {
                return Ji(n.a[0])
            }, e.copy = function() {
                return ho(t, n)
            }, e.domain(t)
        }

        function po(t, n) {
            function e() {
                var e = 0,
                    o = n.length;
                for (i = []; ++e < o;) i[e - 1] = du.quantile(t, e / o);
                return r
            }

            function r(t) {
                if (!isNaN(t = +t)) return n[du.bisect(i, t)]
            }
            var i;
            return r.domain = function(n) {
                return arguments.length ? (t = n.map(s).filter(f).sort(c), e()) : t
            }, r.range = function(t) {
                return arguments.length ? (n = t, e()) : n
            }, r.quantiles = function() {
                return i
            }, r.invertExtent = function(e) {
                return e = n.indexOf(e), e < 0 ? [NaN, NaN] : [e > 0 ? i[e - 1] : t[0], e < i.length ? i[e] : t[t.length - 1]]
            }, r.copy = function() {
                return po(t, n)
            }, e()
        }

        function vo(t, n, e) {
            function r(n) {
                return e[Math.max(0, Math.min(u, Math.floor(o * (n - t))))]
            }

            function i() {
                return o = e.length / (n - t), u = e.length - 1, r
            }
            var o, u;
            return r.domain = function(e) {
                return arguments.length ? (t = +e[0], n = +e[e.length - 1], i()) : [t, n]
            }, r.range = function(t) {
                return arguments.length ? (e = t, i()) : e
            }, r.invertExtent = function(n) {
                return n = e.indexOf(n), n = n < 0 ? NaN : n / o + t, [n, n + 1 / o]
            }, r.copy = function() {
                return vo(t, n, e)
            }, i()
        }

        function go(t, n) {
            function e(e) {
                if (e <= e) return n[du.bisect(t, e)]
            }
            return e.domain = function(n) {
                return arguments.length ? (t = n, e) : t
            }, e.range = function(t) {
                return arguments.length ? (n = t, e) : n
            }, e.invertExtent = function(e) {
                return e = n.indexOf(e), [t[e - 1], t[e]]
            }, e.copy = function() {
                return go(t, n)
            }, e
        }

        function yo(t) {
            function n(t) {
                return +t
            }
            return n.invert = n, n.domain = n.range = function(e) {
                return arguments.length ? (t = e.map(n), n) : t
            }, n.ticks = function(n) {
                return oo(t, n)
            }, n.tickFormat = function(n, e) {
                return uo(t, n, e)
            }, n.copy = function() {
                return yo(t)
            }, n
        }

        function _o() {
            return 0
        }

        function mo(t) {
            return t.innerRadius
        }

        function xo(t) {
            return t.outerRadius
        }

        function bo(t) {
            return t.startAngle
        }

        function wo(t) {
            return t.endAngle
        }

        function Mo(t) {
            return t && t.padAngle
        }

        function So(t, n, e, r) {
            return (t - e) * n - (n - r) * t > 0 ? 0 : 1
        }

        function Eo(t, n, e, r, i) {
            var o = t[0] - n[0],
                u = t[1] - n[1],
                a = (i ? r : -r) / Math.sqrt(o * o + u * u),
                c = a * u,
                s = -a * o,
                f = t[0] + c,
                l = t[1] + s,
                h = n[0] + c,
                p = n[1] + s,
                d = (f + h) / 2,
                v = (l + p) / 2,
                g = h - f,
                y = p - l,
                _ = g * g + y * y,
                m = e - r,
                x = f * p - h * l,
                b = (y < 0 ? -1 : 1) * Math.sqrt(Math.max(0, m * m * _ - x * x)),
                w = (x * y - g * b) / _,
                M = (-x * g - y * b) / _,
                S = (x * y + g * b) / _,
                E = (-x * g + y * b) / _,
                k = w - d,
                N = M - v,
                A = S - d,
                T = E - v;
            return k * k + N * N > A * A + T * T && (w = S, M = E), [
                [w - c, M - s],
                [w * e / m, M * e / m]
            ]
        }

        function ko(t) {
            function n(n) {
                function u() {
                    s.push("M", o(t(f), a))
                }
                for (var c, s = [], f = [], l = -1, h = n.length, p = Ot(e), d = Ot(r); ++l < h;) i.call(this, c = n[l], l) ? f.push([+p.call(this, c, l), +d.call(this, c, l)]) : f.length && (u(), f = []);
                return f.length && u(), s.length ? s.join("") : null
            }
            var e = Pe,
                r = De,
                i = Dn,
                o = No,
                u = o.key,
                a = .7;
            return n.x = function(t) {
                return arguments.length ? (e = t, n) : e
            }, n.y = function(t) {
                return arguments.length ? (r = t, n) : r
            }, n.defined = function(t) {
                return arguments.length ? (i = t, n) : i
            }, n.interpolate = function(t) {
                return arguments.length ? (u = "function" == typeof t ? o = t : (o = qc.get(t) || No).key, n) : u
            }, n.tension = function(t) {
                return arguments.length ? (a = t, n) : a
            }, n
        }

        function No(t) {
            return t.length > 1 ? t.join("L") : t + "Z"
        }

        function Ao(t) {
            return t.join("L") + "Z"
        }

        function To(t) {
            for (var n = 0, e = t.length, r = t[0], i = [r[0], ",", r[1]]; ++n < e;) i.push("H", (r[0] + (r = t[n])[0]) / 2, "V", r[1]);
            return e > 1 && i.push("H", r[0]), i.join("")
        }

        function zo(t) {
            for (var n = 0, e = t.length, r = t[0], i = [r[0], ",", r[1]]; ++n < e;) i.push("V", (r = t[n])[1], "H", r[0]);
            return i.join("")
        }

        function Co(t) {
            for (var n = 0, e = t.length, r = t[0], i = [r[0], ",", r[1]]; ++n < e;) i.push("H", (r = t[n])[0], "V", r[1]);
            return i.join("")
        }

        function Oo(t, n) {
            return t.length < 4 ? No(t) : t[1] + Po(t.slice(1, -1), Do(t, n))
        }

        function Io(t, n) {
            return t.length < 3 ? Ao(t) : t[0] + Po((t.push(t[0]), t), Do([t[t.length - 2]].concat(t, [t[1]]), n))
        }

        function Lo(t, n) {
            return t.length < 3 ? No(t) : t[0] + Po(t, Do(t, n))
        }

        function Po(t, n) {
            if (n.length < 1 || t.length != n.length && t.length != n.length + 2) return No(t);
            var e = t.length != n.length,
                r = "",
                i = t[0],
                o = t[1],
                u = n[0],
                a = u,
                c = 1;
            if (e && (r += "Q" + (o[0] - 2 * u[0] / 3) + "," + (o[1] - 2 * u[1] / 3) + "," + o[0] + "," + o[1], i = t[1], c = 2), n.length > 1) {
                a = n[1], o = t[c], c++, r += "C" + (i[0] + u[0]) + "," + (i[1] + u[1]) + "," + (o[0] - a[0]) + "," + (o[1] - a[1]) + "," + o[0] + "," + o[1];
                for (var s = 2; s < n.length; s++, c++) o = t[c], a = n[s], r += "S" + (o[0] - a[0]) + "," + (o[1] - a[1]) + "," + o[0] + "," + o[1]
            }
            if (e) {
                var f = t[c];
                r += "Q" + (o[0] + 2 * a[0] / 3) + "," + (o[1] + 2 * a[1] / 3) + "," + f[0] + "," + f[1]
            }
            return r
        }

        function Do(t, n) {
            for (var e, r = [], i = (1 - n) / 2, o = t[0], u = t[1], a = 1, c = t.length; ++a < c;) e = o, o = u, u = t[a], r.push([i * (u[0] - e[0]), i * (u[1] - e[1])]);
            return r
        }

        function qo(t) {
            if (t.length < 3) return No(t);
            var n = 1,
                e = t.length,
                r = t[0],
                i = r[0],
                o = r[1],
                u = [i, i, i, (r = t[1])[0]],
                a = [o, o, o, r[1]],
                c = [i, ",", o, "L", Fo(Uc, u), ",", Fo(Uc, a)];
            for (t.push(t[e - 1]); ++n <= e;) r = t[n], u.shift(), u.push(r[0]), a.shift(), a.push(r[1]), Yo(c, u, a);
            return t.pop(), c.push("L", r), c.join("")
        }

        function Ro(t) {
            if (t.length < 4) return No(t);
            for (var n, e = [], r = -1, i = t.length, o = [0], u = [0]; ++r < 3;) n = t[r], o.push(n[0]), u.push(n[1]);
            for (e.push(Fo(Uc, o) + "," + Fo(Uc, u)), --r; ++r < i;) n = t[r], o.shift(), o.push(n[0]), u.shift(), u.push(n[1]), Yo(e, o, u);
            return e.join("")
        }

        function jo(t) {
            for (var n, e, r = -1, i = t.length, o = i + 4, u = [], a = []; ++r < 4;) e = t[r % i], u.push(e[0]), a.push(e[1]);
            for (n = [Fo(Uc, u), ",", Fo(Uc, a)], --r; ++r < o;) e = t[r % i], u.shift(), u.push(e[0]), a.shift(), a.push(e[1]), Yo(n, u, a);
            return n.join("")
        }

        function Uo(t, n) {
            var e = t.length - 1;
            if (e)
                for (var r, i, o = t[0][0], u = t[0][1], a = t[e][0] - o, c = t[e][1] - u, s = -1; ++s <= e;) r = t[s], i = s / e, r[0] = n * r[0] + (1 - n) * (o + i * a), r[1] = n * r[1] + (1 - n) * (u + i * c);
            return qo(t)
        }

        function Fo(t, n) {
            return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3]
        }

        function Yo(t, n, e) {
            t.push("C", Fo(Rc, n), ",", Fo(Rc, e), ",", Fo(jc, n), ",", Fo(jc, e), ",", Fo(Uc, n), ",", Fo(Uc, e))
        }

        function Ho(t, n) {
            return (n[1] - t[1]) / (n[0] - t[0])
        }

        function Bo(t) {
            for (var n = 0, e = t.length - 1, r = [], i = t[0], o = t[1], u = r[0] = Ho(i, o); ++n < e;) r[n] = (u + (u = Ho(i = o, o = t[n + 1]))) / 2;
            return r[n] = u, r
        }

        function Vo(t) {
            for (var n, e, r, i, o = [], u = Bo(t), a = -1, c = t.length - 1; ++a < c;) n = Ho(t[a], t[a + 1]), Su(n) < Fu ? u[a] = u[a + 1] = 0 : (e = u[a] / n, r = u[a + 1] / n, i = e * e + r * r, i > 9 && (i = 3 * n / Math.sqrt(i), u[a] = i * e, u[a + 1] = i * r));
            for (a = -1; ++a <= c;) i = (t[Math.min(c, a + 1)][0] - t[Math.max(0, a - 1)][0]) / (6 * (1 + u[a] * u[a])), o.push([i || 0, u[a] * i || 0]);
            return o
        }

        function Xo(t) {
            return t.length < 3 ? No(t) : t[0] + Po(t, Vo(t))
        }

        function Wo(t) {
            for (var n, e, r, i = -1, o = t.length; ++i < o;) n = t[i], e = n[0], r = n[1] - Xu, n[0] = e * Math.cos(r), n[1] = e * Math.sin(r);
            return t
        }

        function Ko(t) {
            function n(n) {
                function c() {
                    v.push("M", a(t(y), l), f, s(t(g.reverse()), l), "Z")
                }
                for (var h, p, d, v = [], g = [], y = [], _ = -1, m = n.length, x = Ot(e), b = Ot(i), w = e === r ? function() {
                        return p
                    } : Ot(r), M = i === o ? function() {
                        return d
                    } : Ot(o); ++_ < m;) u.call(this, h = n[_], _) ? (g.push([p = +x.call(this, h, _), d = +b.call(this, h, _)]), y.push([+w.call(this, h, _), +M.call(this, h, _)])) : g.length && (c(), g = [], y = []);
                return g.length && c(), v.length ? v.join("") : null
            }
            var e = Pe,
                r = Pe,
                i = 0,
                o = De,
                u = Dn,
                a = No,
                c = a.key,
                s = a,
                f = "L",
                l = .7;
            return n.x = function(t) {
                return arguments.length ? (e = r = t, n) : r
            }, n.x0 = function(t) {
                return arguments.length ? (e = t, n) : e
            }, n.x1 = function(t) {
                return arguments.length ? (r = t, n) : r
            }, n.y = function(t) {
                return arguments.length ? (i = o = t, n) : o
            }, n.y0 = function(t) {
                return arguments.length ? (i = t, n) : i
            }, n.y1 = function(t) {
                return arguments.length ? (o = t, n) : o
            }, n.defined = function(t) {
                return arguments.length ? (u = t, n) : u
            }, n.interpolate = function(t) {
                return arguments.length ? (c = "function" == typeof t ? a = t : (a = qc.get(t) || No).key, s = a.reverse || a, f = a.closed ? "M" : "L", n) : c
            }, n.tension = function(t) {
                return arguments.length ? (l = t, n) : l
            }, n
        }

        function Jo(t) {
            return t.radius
        }

        function Zo(t) {
            return [t.x, t.y]
        }

        function $o(t) {
            return function() {
                var n = t.apply(this, arguments),
                    e = n[0],
                    r = n[1] - Xu;
                return [e * Math.cos(r), e * Math.sin(r)]
            }
        }

        function Go() {
            return 64
        }

        function Qo() {
            return "circle"
        }

        function tu(t) {
            var n = Math.sqrt(t / Hu);
            return "M0," + n + "A" + n + "," + n + " 0 1,1 0," + -n + "A" + n + "," + n + " 0 1,1 0," + n + "Z"
        }

        function nu(t) {
            return function() {
                var n, e, r;
                (n = this[t]) && (r = n[e = n.active]) && (r.timer.c = null, r.timer.t = NaN, --n.count ? delete n[e] : delete this[t], n.active += .5, r.event && r.event.interrupt.call(this, this.__data__, r.index))
            }
        }

        function eu(t, n, e) {
            return Tu(t, Wc), t.namespace = n, t.id = e, t
        }

        function ru(t, n, e, r) {
            var i = t.id,
                o = t.namespace;
            return J(t, "function" == typeof e ? function(t, u, a) {
                t[o][i].tween.set(n, r(e.call(t, t.__data__, u, a)))
            } : (e = r(e), function(t) {
                t[o][i].tween.set(n, e)
            }))
        }

        function iu(t) {
            return null == t && (t = ""),
                function() {
                    this.textContent = t
                }
        }

        function ou(t) {
            return null == t ? "__transition__" : "__transition_" + t + "__"
        }

        function uu(t, n, e, r, i) {
            function o(t) {
                var n = d.delay;
                return s.t = n + c, n <= t ? u(t - n) : void(s.c = u)
            }

            function u(e) {
                var i = p.active,
                    o = p[i];
                o && (o.timer.c = null, o.timer.t = NaN, --p.count, delete p[i], o.event && o.event.interrupt.call(t, t.__data__, o.index));
                for (var u in p)
                    if (+u < r) {
                        var v = p[u];
                        v.timer.c = null, v.timer.t = NaN, --p.count, delete p[u]
                    }
                s.c = a, qt(function() {
                    return s.c && a(e || 1) && (s.c = null, s.t = NaN), 1
                }, 0, c), p.active = r, d.event && d.event.start.call(t, t.__data__, n), h = [], d.tween.forEach(function(e, r) {
                    (r = r.call(t, t.__data__, n)) && h.push(r)
                }), l = d.ease, f = d.duration
            }

            function a(i) {
                for (var o = i / f, u = l(o), a = h.length; a > 0;) h[--a].call(t, u);
                if (o >= 1) return d.event && d.event.end.call(t, t.__data__, n), --p.count ? delete p[r] : delete t[e], 1
            }
            var c, s, f, l, h, p = t[e] || (t[e] = {
                    active: 0,
                    count: 0
                }),
                d = p[r];
            d || (c = i.time, s = qt(o, 0, c), d = p[r] = {
                tween: new v,
                time: c,
                timer: s,
                delay: i.delay,
                duration: i.duration,
                ease: i.ease,
                index: n
            }, i = null, ++p.count)
        }

        function au(t, n, e) {
            t.attr("transform", function(t) {
                var r = n(t);
                return "translate(" + (isFinite(r) ? r : e(t)) + ",0)"
            })
        }

        function cu(t, n, e) {
            t.attr("transform", function(t) {
                var r = n(t);
                return "translate(0," + (isFinite(r) ? r : e(t)) + ")"
            })
        }

        function su(t) {
            return t.toISOString()
        }

        function fu(t, n, e) {
            function r(n) {
                return t(n)
            }

            function i(t, e) {
                var r = t[1] - t[0],
                    i = r / e,
                    o = du.bisect(es, i);
                return o == es.length ? [n.year, io(t.map(function(t) {
                    return t / 31536e6
                }), e)[2]] : o ? n[i / es[o - 1] < es[o] / i ? o - 1 : o] : [os, io(t, e)[2]]
            }
            return r.invert = function(n) {
                return lu(t.invert(n))
            }, r.domain = function(n) {
                return arguments.length ? (t.domain(n), r) : t.domain().map(lu)
            }, r.nice = function(t, n) {
                function e(e) {
                    return !isNaN(e) && !t.range(e, lu(+e + 1), n).length
                }
                var o = r.domain(),
                    u = Ji(o),
                    a = null == t ? i(u, 10) : "number" == typeof t && i(u, t);
                return a && (t = a[0], n = a[1]), r.domain(Gi(o, n > 1 ? {
                    floor: function(n) {
                        for (; e(n = t.floor(n));) n = lu(n - 1);
                        return n
                    },
                    ceil: function(n) {
                        for (; e(n = t.ceil(n));) n = lu(+n + 1);
                        return n
                    }
                } : t))
            }, r.ticks = function(t, n) {
                var e = Ji(r.domain()),
                    o = null == t ? i(e, 10) : "number" == typeof t ? i(e, t) : !t.range && [{
                        range: t
                    }, n];
                return o && (t = o[0], n = o[1]), t.range(e[0], lu(+e[1] + 1), n < 1 ? 1 : n)
            }, r.tickFormat = function() {
                return e
            }, r.copy = function() {
                return fu(t.copy(), n, e)
            }, eo(r, t)
        }

        function lu(t) {
            return new Date(t)
        }

        function hu(t) {
            return JSON.parse(t.responseText)
        }

        function pu(t) {
            var n = yu.createRange();
            return n.selectNode(yu.body), n.createContextualFragment(t.responseText)
        }
        var du = {
                version: "3.5.17"
            },
            vu = [].slice,
            gu = function(t) {
                return vu.call(t)
            },
            yu = this.document;
        if (yu) try {
            gu(yu.documentElement.childNodes)[0].nodeType
        } catch (t) {
            gu = function(t) {
                for (var n = t.length, e = new Array(n); n--;) e[n] = t[n];
                return e
            }
        }
        if (Date.now || (Date.now = function() {
                return +new Date
            }), yu) try {
            yu.createElement("DIV").style.setProperty("opacity", 0, "")
        } catch (t) {
            var _u = this.Element.prototype,
                mu = _u.setAttribute,
                xu = _u.setAttributeNS,
                bu = this.CSSStyleDeclaration.prototype,
                wu = bu.setProperty;
            _u.setAttribute = function(t, n) {
                mu.call(this, t, n + "")
            }, _u.setAttributeNS = function(t, n, e) {
                xu.call(this, t, n, e + "")
            }, bu.setProperty = function(t, n, e) {
                wu.call(this, t, n + "", e)
            }
        }
        du.ascending = c, du.descending = function(t, n) {
            return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
        }, du.min = function(t, n) {
            var e, r, i = -1,
                o = t.length;
            if (1 === arguments.length) {
                for (; ++i < o;)
                    if (null != (r = t[i]) && r >= r) {
                        e = r;
                        break
                    }
                for (; ++i < o;) null != (r = t[i]) && e > r && (e = r)
            } else {
                for (; ++i < o;)
                    if (null != (r = n.call(t, t[i], i)) && r >= r) {
                        e = r;
                        break
                    }
                for (; ++i < o;) null != (r = n.call(t, t[i], i)) && e > r && (e = r)
            }
            return e
        }, du.max = function(t, n) {
            var e, r, i = -1,
                o = t.length;
            if (1 === arguments.length) {
                for (; ++i < o;)
                    if (null != (r = t[i]) && r >= r) {
                        e = r;
                        break
                    }
                for (; ++i < o;) null != (r = t[i]) && r > e && (e = r)
            } else {
                for (; ++i < o;)
                    if (null != (r = n.call(t, t[i], i)) && r >= r) {
                        e = r;
                        break
                    }
                for (; ++i < o;) null != (r = n.call(t, t[i], i)) && r > e && (e = r)
            }
            return e
        }, du.extent = function(t, n) {
            var e, r, i, o = -1,
                u = t.length;
            if (1 === arguments.length) {
                for (; ++o < u;)
                    if (null != (r = t[o]) && r >= r) {
                        e = i = r;
                        break
                    }
                for (; ++o < u;) null != (r = t[o]) && (e > r && (e = r), i < r && (i = r))
            } else {
                for (; ++o < u;)
                    if (null != (r = n.call(t, t[o], o)) && r >= r) {
                        e = i = r;
                        break
                    }
                for (; ++o < u;) null != (r = n.call(t, t[o], o)) && (e > r && (e = r), i < r && (i = r))
            }
            return [e, i]
        }, du.sum = function(t, n) {
            var e, r = 0,
                i = t.length,
                o = -1;
            if (1 === arguments.length)
                for (; ++o < i;) f(e = +t[o]) && (r += e);
            else
                for (; ++o < i;) f(e = +n.call(t, t[o], o)) && (r += e);
            return r
        }, du.mean = function(t, n) {
            var e, r = 0,
                i = t.length,
                o = -1,
                u = i;
            if (1 === arguments.length)
                for (; ++o < i;) f(e = s(t[o])) ? r += e : --u;
            else
                for (; ++o < i;) f(e = s(n.call(t, t[o], o))) ? r += e : --u;
            if (u) return r / u
        }, du.quantile = function(t, n) {
            var e = (t.length - 1) * n + 1,
                r = Math.floor(e),
                i = +t[r - 1],
                o = e - r;
            return o ? i + o * (t[r] - i) : i
        }, du.median = function(t, n) {
            var e, r = [],
                i = t.length,
                o = -1;
            if (1 === arguments.length)
                for (; ++o < i;) f(e = s(t[o])) && r.push(e);
            else
                for (; ++o < i;) f(e = s(n.call(t, t[o], o))) && r.push(e);
            if (r.length) return du.quantile(r.sort(c), .5)
        }, du.variance = function(t, n) {
            var e, r, i = t.length,
                o = 0,
                u = 0,
                a = -1,
                c = 0;
            if (1 === arguments.length)
                for (; ++a < i;) f(e = s(t[a])) && (r = e - o, o += r / ++c, u += r * (e - o));
            else
                for (; ++a < i;) f(e = s(n.call(t, t[a], a))) && (r = e - o, o += r / ++c, u += r * (e - o));
            if (c > 1) return u / (c - 1)
        }, du.deviation = function() {
            var t = du.variance.apply(this, arguments);
            return t ? Math.sqrt(t) : t
        };
        var Mu = l(c);
        du.bisectLeft = Mu.left, du.bisect = du.bisectRight = Mu.right, du.bisector = function(t) {
            return l(1 === t.length ? function(n, e) {
                return c(t(n), e)
            } : t)
        }, du.shuffle = function(t, n, e) {
            (o = arguments.length) < 3 && (e = t.length, o < 2 && (n = 0));
            for (var r, i, o = e - n; o;) i = Math.random() * o-- | 0, r = t[o + n], t[o + n] = t[i + n], t[i + n] = r;
            return t
        }, du.permute = function(t, n) {
            for (var e = n.length, r = new Array(e); e--;) r[e] = t[n[e]];
            return r
        }, du.pairs = function(t) {
            for (var n, e = 0, r = t.length - 1, i = t[0], o = new Array(r < 0 ? 0 : r); e < r;) o[e] = [n = i, i = t[++e]];
            return o
        }, du.transpose = function(t) {
            if (!(i = t.length)) return [];
            for (var n = -1, e = du.min(t, h), r = new Array(e); ++n < e;)
                for (var i, o = -1, u = r[n] = new Array(i); ++o < i;) u[o] = t[o][n];
            return r
        }, du.zip = function() {
            return du.transpose(arguments)
        }, du.keys = function(t) {
            var n = [];
            for (var e in t) n.push(e);
            return n
        }, du.values = function(t) {
            var n = [];
            for (var e in t) n.push(t[e]);
            return n
        }, du.entries = function(t) {
            var n = [];
            for (var e in t) n.push({
                key: e,
                value: t[e]
            });
            return n
        }, du.merge = function(t) {
            for (var n, e, r, i = t.length, o = -1, u = 0; ++o < i;) u += t[o].length;
            for (e = new Array(u); --i >= 0;)
                for (r = t[i], n = r.length; --n >= 0;) e[--u] = r[n];
            return e
        };
        var Su = Math.abs;
        du.range = function(t, n, e) {
            if (arguments.length < 3 && (e = 1, arguments.length < 2 && (n = t, t = 0)), (n - t) / e === 1 / 0) throw new Error("infinite range");
            var r, i = [],
                o = p(Su(e)),
                u = -1;
            if (t *= o, n *= o, e *= o, e < 0)
                for (;
                    (r = t + e * ++u) > n;) i.push(r / o);
            else
                for (;
                    (r = t + e * ++u) < n;) i.push(r / o);
            return i
        }, du.map = function(t, n) {
            var e = new v;
            if (t instanceof v) t.forEach(function(t, n) {
                e.set(t, n)
            });
            else if (Array.isArray(t)) {
                var r, i = -1,
                    o = t.length;
                if (1 === arguments.length)
                    for (; ++i < o;) e.set(i, t[i]);
                else
                    for (; ++i < o;) e.set(n.call(t, r = t[i], i), r)
            } else
                for (var u in t) e.set(u, t[u]);
            return e
        };
        var Eu = "__proto__",
            ku = "\0";
        d(v, {
            has: _,
            get: function(t) {
                return this._[g(t)]
            },
            set: function(t, n) {
                return this._[g(t)] = n
            },
            remove: m,
            keys: x,
            values: function t() {
                var t = [];
                for (var n in this._) t.push(this._[n]);
                return t
            },
            entries: function t() {
                var t = [];
                for (var n in this._) t.push({
                    key: y(n),
                    value: this._[n]
                });
                return t
            },
            size: b,
            empty: w,
            forEach: function(t) {
                for (var n in this._) t.call(this, y(n), this._[n])
            }
        }), du.nest = function() {
            function t(n, u, a) {
                if (a >= o.length) return r ? r.call(i, u) : e ? u.sort(e) : u;
                for (var c, s, f, l, h = -1, p = u.length, d = o[a++], g = new v; ++h < p;)(l = g.get(c = d(s = u[h]))) ? l.push(s) : g.set(c, [s]);
                return n ? (s = n(), f = function(e, r) {
                    s.set(e, t(n, r, a))
                }) : (s = {}, f = function(e, r) {
                    s[e] = t(n, r, a)
                }), g.forEach(f), s
            }

            function n(t, e) {
                if (e >= o.length) return t;
                var r = [],
                    i = u[e++];
                return t.forEach(function(t, i) {
                    r.push({
                        key: t,
                        values: n(i, e)
                    })
                }), i ? r.sort(function(t, n) {
                    return i(t.key, n.key)
                }) : r
            }
            var e, r, i = {},
                o = [],
                u = [];
            return i.map = function(n, e) {
                return t(e, n, 0)
            }, i.entries = function(e) {
                return n(t(du.map, e, 0), 0)
            }, i.key = function(t) {
                return o.push(t), i
            }, i.sortKeys = function(t) {
                return u[o.length - 1] = t, i
            }, i.sortValues = function(t) {
                return e = t, i
            }, i.rollup = function(t) {
                return r = t, i
            }, i
        }, du.set = function(t) {
            var n = new M;
            if (t)
                for (var e = 0, r = t.length; e < r; ++e) n.add(t[e]);
            return n
        }, d(M, {
            has: _,
            add: function(t) {
                return this._[g(t += "")] = !0, t
            },
            remove: m,
            values: x,
            size: b,
            empty: w,
            forEach: function(t) {
                for (var n in this._) t.call(this, y(n))
            }
        }), du.behavior = {}, du.rebind = function(t, n) {
            for (var e, r = 1, i = arguments.length; ++r < i;) t[e = arguments[r]] = E(t, n, n[e]);
            return t
        };
        var Nu = ["webkit", "ms", "moz", "Moz", "o", "O"];
        du.dispatch = function() {
            for (var t = new A, n = -1, e = arguments.length; ++n < e;) t[arguments[n]] = T(t);
            return t
        }, A.prototype.on = function(t, n) {
            var e = t.indexOf("."),
                r = "";
            if (e >= 0 && (r = t.slice(e + 1), t = t.slice(0, e)), t) return arguments.length < 2 ? this[t].on(r) : this[t].on(r, n);
            if (2 === arguments.length) {
                if (null == n)
                    for (t in this) this.hasOwnProperty(t) && this[t].on(r, null);
                return this
            }
        }, du.event = null, du.requote = function(t) {
            return t.replace(Au, "\\$&")
        };
        var Au = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
            Tu = {}.__proto__ ? function(t, n) {
                t.__proto__ = n
            } : function(t, n) {
                for (var e in n) t[e] = n[e]
            },
            zu = function(t, n) {
                return n.querySelector(t)
            },
            Cu = function(t, n) {
                return n.querySelectorAll(t)
            },
            Ou = function(t, n) {
                var e = t.matches || t[k(t, "matchesSelector")];
                return (Ou = function(t, n) {
                    return e.call(t, n)
                })(t, n)
            };
        "function" == typeof Sizzle && (zu = function(t, n) {
            return Sizzle(t, n)[0] || null
        }, Cu = Sizzle, Ou = Sizzle.matchesSelector), du.selection = function() {
            return du.select(yu.documentElement)
        };
        var Iu = du.selection.prototype = [];
        Iu.select = function(t) {
            var n, e, r, i, o = [];
            t = L(t);
            for (var u = -1, a = this.length; ++u < a;) {
                o.push(n = []), n.parentNode = (r = this[u]).parentNode;
                for (var c = -1, s = r.length; ++c < s;)(i = r[c]) ? (n.push(e = t.call(i, i.__data__, c, u)), e && "__data__" in i && (e.__data__ = i.__data__)) : n.push(null)
            }
            return I(o)
        }, Iu.selectAll = function(t) {
            var n, e, r = [];
            t = P(t);
            for (var i = -1, o = this.length; ++i < o;)
                for (var u = this[i], a = -1, c = u.length; ++a < c;)(e = u[a]) && (r.push(n = gu(t.call(e, e.__data__, a, i))), n.parentNode = e);
            return I(r)
        };
        var Lu = "http://www.w3.org/1999/xhtml",
            Pu = {
                svg: "http://www.w3.org/2000/svg",
                xhtml: Lu,
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            };
        du.ns = {
            prefix: Pu,
            qualify: function(t) {
                var n = t.indexOf(":"),
                    e = t;
                return n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)), Pu.hasOwnProperty(e) ? {
                    space: Pu[e],
                    local: t
                } : t
            }
        }, Iu.attr = function(t, n) {
            if (arguments.length < 2) {
                if ("string" == typeof t) {
                    var e = this.node();
                    return t = du.ns.qualify(t), t.local ? e.getAttributeNS(t.space, t.local) : e.getAttribute(t)
                }
                for (n in t) this.each(D(n, t[n]));
                return this
            }
            return this.each(D(t, n))
        }, Iu.classed = function(t, n) {
            if (arguments.length < 2) {
                if ("string" == typeof t) {
                    var e = this.node(),
                        r = (t = j(t)).length,
                        i = -1;
                    if (n = e.classList) {
                        for (; ++i < r;)
                            if (!n.contains(t[i])) return !1
                    } else
                        for (n = e.getAttribute("class"); ++i < r;)
                            if (!R(t[i]).test(n)) return !1;
                    return !0
                }
                for (n in t) this.each(U(n, t[n]));
                return this
            }
            return this.each(U(t, n))
        }, Iu.style = function(t, n, e) {
            var r = arguments.length;
            if (r < 3) {
                if ("string" != typeof t) {
                    r < 2 && (n = "");
                    for (e in t) this.each(Y(e, t[e], n));
                    return this
                }
                if (r < 2) {
                    var i = this.node();
                    return a(i).getComputedStyle(i, null).getPropertyValue(t)
                }
                e = ""
            }
            return this.each(Y(t, n, e))
        }, Iu.property = function(t, n) {
            if (arguments.length < 2) {
                if ("string" == typeof t) return this.node()[t];
                for (n in t) this.each(H(n, t[n]));
                return this
            }
            return this.each(H(t, n))
        }, Iu.text = function(t) {
            return arguments.length ? this.each("function" == typeof t ? function() {
                var n = t.apply(this, arguments);
                this.textContent = null == n ? "" : n
            } : null == t ? function() {
                this.textContent = ""
            } : function() {
                this.textContent = t
            }) : this.node().textContent
        }, Iu.html = function(t) {
            return arguments.length ? this.each("function" == typeof t ? function() {
                var n = t.apply(this, arguments);
                this.innerHTML = null == n ? "" : n
            } : null == t ? function() {
                this.innerHTML = ""
            } : function() {
                this.innerHTML = t
            }) : this.node().innerHTML
        }, Iu.append = function(t) {
            return t = B(t), this.select(function() {
                return this.appendChild(t.apply(this, arguments))
            })
        }, Iu.insert = function(t, n) {
            return t = B(t), n = L(n), this.select(function() {
                return this.insertBefore(t.apply(this, arguments), n.apply(this, arguments) || null)
            })
        }, Iu.remove = function() {
            return this.each(V)
        }, Iu.data = function(t, n) {
            function e(t, e) {
                var r, i, o, u = t.length,
                    f = e.length,
                    l = Math.min(u, f),
                    h = new Array(f),
                    p = new Array(f),
                    d = new Array(u);
                if (n) {
                    var g, y = new v,
                        _ = new Array(u);
                    for (r = -1; ++r < u;)(i = t[r]) && (y.has(g = n.call(i, i.__data__, r)) ? d[r] = i : y.set(g, i), _[r] = g);
                    for (r = -1; ++r < f;)(i = y.get(g = n.call(e, o = e[r], r))) ? i !== !0 && (h[r] = i, i.__data__ = o) : p[r] = X(o), y.set(g, !0);
                    for (r = -1; ++r < u;) r in _ && y.get(_[r]) !== !0 && (d[r] = t[r])
                } else {
                    for (r = -1; ++r < l;) i = t[r], o = e[r], i ? (i.__data__ = o, h[r] = i) : p[r] = X(o);
                    for (; r < f; ++r) p[r] = X(e[r]);
                    for (; r < u; ++r) d[r] = t[r]
                }
                p.update = h, p.parentNode = h.parentNode = d.parentNode = t.parentNode, a.push(p), c.push(h), s.push(d)
            }
            var r, i, o = -1,
                u = this.length;
            if (!arguments.length) {
                for (t = new Array(u = (r = this[0]).length); ++o < u;)(i = r[o]) && (t[o] = i.__data__);
                return t
            }
            var a = Z([]),
                c = I([]),
                s = I([]);
            if ("function" == typeof t)
                for (; ++o < u;) e(r = this[o], t.call(r, r.parentNode.__data__, o));
            else
                for (; ++o < u;) e(r = this[o], t);
            return c.enter = function() {
                return a
            }, c.exit = function() {
                return s
            }, c
        }, Iu.datum = function(t) {
            return arguments.length ? this.property("__data__", t) : this.property("__data__")
        }, Iu.filter = function(t) {
            var n, e, r, i = [];
            "function" != typeof t && (t = W(t));
            for (var o = 0, u = this.length; o < u; o++) {
                i.push(n = []), n.parentNode = (e = this[o]).parentNode;
                for (var a = 0, c = e.length; a < c; a++)(r = e[a]) && t.call(r, r.__data__, a, o) && n.push(r)
            }
            return I(i)
        }, Iu.order = function() {
            for (var t = -1, n = this.length; ++t < n;)
                for (var e, r = this[t], i = r.length - 1, o = r[i]; --i >= 0;)(e = r[i]) && (o && o !== e.nextSibling && o.parentNode.insertBefore(e, o), o = e);
            return this
        }, Iu.sort = function(t) {
            t = K.apply(this, arguments);
            for (var n = -1, e = this.length; ++n < e;) this[n].sort(t);
            return this.order()
        }, Iu.each = function(t) {
            return J(this, function(n, e, r) {
                t.call(n, n.__data__, e, r)
            })
        }, Iu.call = function(t) {
            var n = gu(arguments);
            return t.apply(n[0] = this, n), this
        }, Iu.empty = function() {
            return !this.node()
        }, Iu.node = function() {
            for (var t = 0, n = this.length; t < n; t++)
                for (var e = this[t], r = 0, i = e.length; r < i; r++) {
                    var o = e[r];
                    if (o) return o
                }
            return null
        }, Iu.size = function() {
            var t = 0;
            return J(this, function() {
                ++t
            }), t
        };
        var Du = [];
        du.selection.enter = Z, du.selection.enter.prototype = Du, Du.append = Iu.append, Du.empty = Iu.empty, Du.node = Iu.node, Du.call = Iu.call, Du.size = Iu.size, Du.select = function(t) {
            for (var n, e, r, i, o, u = [], a = -1, c = this.length; ++a < c;) {
                r = (i = this[a]).update, u.push(n = []), n.parentNode = i.parentNode;
                for (var s = -1, f = i.length; ++s < f;)(o = i[s]) ? (n.push(r[s] = e = t.call(i.parentNode, o.__data__, s, a)), e.__data__ = o.__data__) : n.push(null)
            }
            return I(u)
        }, Du.insert = function(t, n) {
            return arguments.length < 2 && (n = $(this)), Iu.insert.call(this, t, n)
        }, du.select = function(t) {
            var n;
            return "string" == typeof t ? (n = [zu(t, yu)], n.parentNode = yu.documentElement) : (n = [t], n.parentNode = u(t)), I([n])
        }, du.selectAll = function(t) {
            var n;
            return "string" == typeof t ? (n = gu(Cu(t, yu)), n.parentNode = yu.documentElement) : (n = gu(t), n.parentNode = null), I([n])
        }, Iu.on = function(t, n, e) {
            var r = arguments.length;
            if (r < 3) {
                if ("string" != typeof t) {
                    r < 2 && (n = !1);
                    for (e in t) this.each(G(e, t[e], n));
                    return this
                }
                if (r < 2) return (r = this.node()["__on" + t]) && r._;
                e = !1
            }
            return this.each(G(t, n, e))
        };
        var qu = du.map({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        });
        yu && qu.forEach(function(t) {
            "on" + t in yu && qu.remove(t)
        });
        var Ru, ju = 0;
        du.mouse = function(t) {
            return et(t, C())
        };
        var Uu = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
        du.touch = function(t, n, e) {
            if (arguments.length < 3 && (e = n, n = C().changedTouches), n)
                for (var r, i = 0, o = n.length; i < o; ++i)
                    if ((r = n[i]).identifier === e) return et(t, r)
        }, du.behavior.drag = function() {
            function t() {
                this.on("mousedown.drag", i).on("touchstart.drag", o)
            }

            function n(t, n, i, o, u) {
                return function() {
                    function a() {
                        var t, e, r = n(h, v);
                        r && (t = r[0] - m[0], e = r[1] - m[1], d |= t | e, m = r, p({
                            type: "drag",
                            x: r[0] + s[0],
                            y: r[1] + s[1],
                            dx: t,
                            dy: e
                        }))
                    }

                    function c() {
                        n(h, v) && (y.on(o + g, null).on(u + g, null), _(d), p({
                            type: "dragend"
                        }))
                    }
                    var s, f = this,
                        l = du.event.target.correspondingElement || du.event.target,
                        h = f.parentNode,
                        p = e.of(f, arguments),
                        d = 0,
                        v = t(),
                        g = ".drag" + (null == v ? "" : "-" + v),
                        y = du.select(i(l)).on(o + g, a).on(u + g, c),
                        _ = nt(l),
                        m = n(h, v);
                    r ? (s = r.apply(f, arguments), s = [s.x - m[0], s.y - m[1]]) : s = [0, 0], p({
                        type: "dragstart"
                    })
                }
            }
            var e = O(t, "drag", "dragstart", "dragend"),
                r = null,
                i = n(N, du.mouse, a, "mousemove", "mouseup"),
                o = n(rt, du.touch, S, "touchmove", "touchend");
            return t.origin = function(n) {
                return arguments.length ? (r = n, t) : r
            }, du.rebind(t, e, "on")
        }, du.touches = function(t, n) {
            return arguments.length < 2 && (n = C().touches), n ? gu(n).map(function(n) {
                var e = et(t, n);
                return e.identifier = n.identifier, e
            }) : []
        };
        var Fu = 1e-6,
            Yu = Fu * Fu,
            Hu = Math.PI,
            Bu = 2 * Hu,
            Vu = Bu - Fu,
            Xu = Hu / 2,
            Wu = Hu / 180,
            Ku = 180 / Hu,
            Ju = Math.SQRT2,
            Zu = 2,
            $u = 4;
        du.interpolateZoom = function(t, n) {
            var e, r, i = t[0],
                o = t[1],
                u = t[2],
                a = n[0],
                c = n[1],
                s = n[2],
                f = a - i,
                l = c - o,
                h = f * f + l * l;
            if (h < Yu) r = Math.log(s / u) / Ju, e = function(t) {
                return [i + t * f, o + t * l, u * Math.exp(Ju * t * r)]
            };
            else {
                var p = Math.sqrt(h),
                    d = (s * s - u * u + $u * h) / (2 * u * Zu * p),
                    v = (s * s - u * u - $u * h) / (2 * s * Zu * p),
                    g = Math.log(Math.sqrt(d * d + 1) - d),
                    y = Math.log(Math.sqrt(v * v + 1) - v);
                r = (y - g) / Ju, e = function(t) {
                    var n = t * r,
                        e = st(g),
                        a = u / (Zu * p) * (e * ft(Ju * n + g) - ct(g));
                    return [i + a * f, o + a * l, u * e / st(Ju * n + g)]
                }
            }
            return e.duration = 1e3 * r, e
        }, du.behavior.zoom = function() {
            function t(t) {
                t.on(T, l).on(Qu + ".zoom", p).on("dblclick.zoom", d).on(L, h)
            }

            function n(t) {
                return [(t[0] - S.x) / S.k, (t[1] - S.y) / S.k]
            }

            function e(t) {
                return [t[0] * S.k + S.x, t[1] * S.k + S.y]
            }

            function r(t) {
                S.k = Math.max(k[0], Math.min(k[1], t))
            }

            function i(t, n) {
                n = e(n), S.x += t[0] - n[0], S.y += t[1] - n[1]
            }

            function o(n, e, o, u) {
                n.__chart__ = {
                    x: S.x,
                    y: S.y,
                    k: S.k
                }, r(Math.pow(2, u)), i(g = e, o), n = du.select(n), N > 0 && (n = n.transition().duration(N)), n.call(t.event)
            }

            function u() {
                b && b.domain(x.range().map(function(t) {
                    return (t - S.x) / S.k
                }).map(x.invert)), M && M.domain(w.range().map(function(t) {
                    return (t - S.y) / S.k
                }).map(w.invert))
            }

            function c(t) {
                A++ || t({
                    type: "zoomstart"
                })
            }

            function s(t) {
                u(), t({
                    type: "zoom",
                    scale: S.k,
                    translate: [S.x, S.y]
                })
            }

            function f(t) {
                --A || (t({
                    type: "zoomend"
                }), g = null)
            }

            function l() {
                function t() {
                    u = 1, i(du.mouse(r), h), s(o)
                }

                function e() {
                    l.on(C, null).on(I, null), p(u), f(o)
                }
                var r = this,
                    o = P.of(r, arguments),
                    u = 0,
                    l = du.select(a(r)).on(C, t).on(I, e),
                    h = n(du.mouse(r)),
                    p = nt(r);
                Xc.call(r), c(o)
            }

            function h() {
                function t() {
                    var t = du.touches(d);
                    return p = S.k, t.forEach(function(t) {
                        t.identifier in g && (g[t.identifier] = n(t))
                    }), t
                }

                function e() {
                    var n = du.event.target;
                    du.select(n).on(x, u).on(b, a), w.push(n);
                    for (var e = du.event.changedTouches, r = 0, i = e.length; r < i; ++r) g[e[r].identifier] = null;
                    var c = t(),
                        s = Date.now();
                    if (1 === c.length) {
                        if (s - m < 500) {
                            var f = c[0];
                            o(d, f, g[f.identifier], Math.floor(Math.log(S.k) / Math.LN2) + 1), z()
                        }
                        m = s
                    } else if (c.length > 1) {
                        var f = c[0],
                            l = c[1],
                            h = f[0] - l[0],
                            p = f[1] - l[1];
                        y = h * h + p * p
                    }
                }

                function u() {
                    var t, n, e, o, u = du.touches(d);
                    Xc.call(d);
                    for (var a = 0, c = u.length; a < c; ++a, o = null)
                        if (e = u[a], o = g[e.identifier]) {
                            if (n) break;
                            t = e, n = o
                        }
                    if (o) {
                        var f = (f = e[0] - t[0]) * f + (f = e[1] - t[1]) * f,
                            l = y && Math.sqrt(f / y);
                        t = [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2], n = [(n[0] + o[0]) / 2, (n[1] + o[1]) / 2], r(l * p)
                    }
                    m = null, i(t, n), s(v)
                }

                function a() {
                    if (du.event.touches.length) {
                        for (var n = du.event.changedTouches, e = 0, r = n.length; e < r; ++e) delete g[n[e].identifier];
                        for (var i in g) return void t()
                    }
                    du.selectAll(w).on(_, null), M.on(T, l).on(L, h), E(), f(v)
                }
                var p, d = this,
                    v = P.of(d, arguments),
                    g = {},
                    y = 0,
                    _ = ".zoom-" + du.event.changedTouches[0].identifier,
                    x = "touchmove" + _,
                    b = "touchend" + _,
                    w = [],
                    M = du.select(d),
                    E = nt(d);
                e(), c(v), M.on(T, null).on(L, e)
            }

            function p() {
                var t = P.of(this, arguments);
                _ ? clearTimeout(_) : (Xc.call(this), v = n(g = y || du.mouse(this)), c(t)), _ = setTimeout(function() {
                    _ = null, f(t)
                }, 50), z(), r(Math.pow(2, .002 * Gu()) * S.k), i(g, v), s(t)
            }

            function d() {
                var t = du.mouse(this),
                    e = Math.log(S.k) / Math.LN2;
                o(this, t, n(t), du.event.shiftKey ? Math.ceil(e) - 1 : Math.floor(e) + 1)
            }
            var v, g, y, _, m, x, b, w, M, S = {
                    x: 0,
                    y: 0,
                    k: 1
                },
                E = [960, 500],
                k = ta,
                N = 250,
                A = 0,
                T = "mousedown.zoom",
                C = "mousemove.zoom",
                I = "mouseup.zoom",
                L = "touchstart.zoom",
                P = O(t, "zoomstart", "zoom", "zoomend");
            return Qu || (Qu = "onwheel" in yu ? (Gu = function() {
                return -du.event.deltaY * (du.event.deltaMode ? 120 : 1)
            }, "wheel") : "onmousewheel" in yu ? (Gu = function() {
                return du.event.wheelDelta
            }, "mousewheel") : (Gu = function() {
                return -du.event.detail
            }, "MozMousePixelScroll")), t.event = function(t) {
                t.each(function() {
                    var t = P.of(this, arguments),
                        n = S;
                    Bc ? du.select(this).transition().each("start.zoom", function() {
                        S = this.__chart__ || {
                            x: 0,
                            y: 0,
                            k: 1
                        }, c(t)
                    }).tween("zoom:zoom", function() {
                        var e = E[0],
                            r = E[1],
                            i = g ? g[0] : e / 2,
                            o = g ? g[1] : r / 2,
                            u = du.interpolateZoom([(i - S.x) / S.k, (o - S.y) / S.k, e / S.k], [(i - n.x) / n.k, (o - n.y) / n.k, e / n.k]);
                        return function(n) {
                            var r = u(n),
                                a = e / r[2];
                            this.__chart__ = S = {
                                x: i - r[0] * a,
                                y: o - r[1] * a,
                                k: a
                            }, s(t)
                        }
                    }).each("interrupt.zoom", function() {
                        f(t)
                    }).each("end.zoom", function() {
                        f(t)
                    }) : (this.__chart__ = S, c(t), s(t), f(t))
                })
            }, t.translate = function(n) {
                return arguments.length ? (S = {
                    x: +n[0],
                    y: +n[1],
                    k: S.k
                }, u(), t) : [S.x, S.y]
            }, t.scale = function(n) {
                return arguments.length ? (S = {
                    x: S.x,
                    y: S.y,
                    k: null
                }, r(+n), u(), t) : S.k
            }, t.scaleExtent = function(n) {
                return arguments.length ? (k = null == n ? ta : [+n[0], +n[1]], t) : k
            }, t.center = function(n) {
                return arguments.length ? (y = n && [+n[0], +n[1]], t) : y
            }, t.size = function(n) {
                return arguments.length ? (E = n && [+n[0], +n[1]], t) : E
            }, t.duration = function(n) {
                return arguments.length ? (N = +n, t) : N
            }, t.x = function(n) {
                return arguments.length ? (b = n, x = n.copy(), S = {
                    x: 0,
                    y: 0,
                    k: 1
                }, t) : b
            }, t.y = function(n) {
                return arguments.length ? (M = n, w = n.copy(), S = {
                    x: 0,
                    y: 0,
                    k: 1
                }, t) : M
            }, du.rebind(t, P, "on")
        };
        var Gu, Qu, ta = [0, 1 / 0];
        du.color = ht, ht.prototype.toString = function() {
            return this.rgb() + ""
        }, du.hsl = pt;
        var na = pt.prototype = new ht;
        na.brighter = function(t) {
            return t = Math.pow(.7, arguments.length ? t : 1), new pt(this.h, this.s, this.l / t)
        }, na.darker = function(t) {
            return t = Math.pow(.7, arguments.length ? t : 1), new pt(this.h, this.s, t * this.l)
        }, na.rgb = function() {
            return dt(this.h, this.s, this.l)
        }, du.hcl = vt;
        var ea = vt.prototype = new ht;
        ea.brighter = function(t) {
            return new vt(this.h, this.c, Math.min(100, this.l + ra * (arguments.length ? t : 1)))
        }, ea.darker = function(t) {
            return new vt(this.h, this.c, Math.max(0, this.l - ra * (arguments.length ? t : 1)))
        }, ea.rgb = function() {
            return gt(this.h, this.c, this.l).rgb()
        }, du.lab = yt;
        var ra = 18,
            ia = .95047,
            oa = 1,
            ua = 1.08883,
            aa = yt.prototype = new ht;
        aa.brighter = function(t) {
            return new yt(Math.min(100, this.l + ra * (arguments.length ? t : 1)), this.a, this.b)
        }, aa.darker = function(t) {
            return new yt(Math.max(0, this.l - ra * (arguments.length ? t : 1)), this.a, this.b)
        }, aa.rgb = function() {
            return _t(this.l, this.a, this.b)
        }, du.rgb = Mt;
        var ca = Mt.prototype = new ht;
        ca.brighter = function(t) {
            t = Math.pow(.7, arguments.length ? t : 1);
            var n = this.r,
                e = this.g,
                r = this.b,
                i = 30;
            return n || e || r ? (n && n < i && (n = i), e && e < i && (e = i), r && r < i && (r = i), new Mt(Math.min(255, n / t), Math.min(255, e / t), Math.min(255, r / t))) : new Mt(i, i, i)
        }, ca.darker = function(t) {
            return t = Math.pow(.7, arguments.length ? t : 1), new Mt(t * this.r, t * this.g, t * this.b)
        }, ca.hsl = function() {
            return At(this.r, this.g, this.b)
        }, ca.toString = function() {
            return "#" + kt(this.r) + kt(this.g) + kt(this.b)
        };
        var sa = du.map({
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
        });
        sa.forEach(function(t, n) {
            sa.set(t, St(n))
        }), du.functor = Ot, du.xhr = It(S), du.dsv = function(t, n) {
            function e(t, e, o) {
                arguments.length < 3 && (o = e, e = null);
                var u = Lt(t, n, null == e ? r : i(e), o);
                return u.row = function(t) {
                    return arguments.length ? u.response(null == (e = t) ? r : i(t)) : e
                }, u
            }

            function r(t) {
                return e.parse(t.responseText)
            }

            function i(t) {
                return function(n) {
                    return e.parse(n.responseText, t)
                }
            }

            function o(n) {
                return n.map(u).join(t)
            }

            function u(t) {
                return a.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t
            }
            var a = new RegExp('["' + t + "\n]"),
                c = t.charCodeAt(0);
            return e.parse = function(t, n) {
                var r;
                return e.parseRows(t, function(t, e) {
                    if (r) return r(t, e - 1);
                    var i = new Function("d", "return {" + t.map(function(t, n) {
                        return JSON.stringify(t) + ": d[" + n + "]"
                    }).join(",") + "}");
                    r = n ? function(t, e) {
                        return n(i(t), e)
                    } : i
                })
            }, e.parseRows = function(t, n) {
                function e() {
                    if (f >= s) return u;
                    if (i) return i = !1, o;
                    var n = f;
                    if (34 === t.charCodeAt(n)) {
                        for (var e = n; e++ < s;)
                            if (34 === t.charCodeAt(e)) {
                                if (34 !== t.charCodeAt(e + 1)) break;
                                ++e
                            }
                        f = e + 2;
                        var r = t.charCodeAt(e + 1);
                        return 13 === r ? (i = !0, 10 === t.charCodeAt(e + 2) && ++f) : 10 === r && (i = !0), t.slice(n + 1, e).replace(/""/g, '"')
                    }
                    for (; f < s;) {
                        var r = t.charCodeAt(f++),
                            a = 1;
                        if (10 === r) i = !0;
                        else if (13 === r) i = !0, 10 === t.charCodeAt(f) && (++f, ++a);
                        else if (r !== c) continue;
                        return t.slice(n, f - a)
                    }
                    return t.slice(n)
                }
                for (var r, i, o = {}, u = {}, a = [], s = t.length, f = 0, l = 0;
                    (r = e()) !== u;) {
                    for (var h = []; r !== o && r !== u;) h.push(r), r = e();
                    n && null == (h = n(h, l++)) || a.push(h)
                }
                return a
            }, e.format = function(n) {
                if (Array.isArray(n[0])) return e.formatRows(n);
                var r = new M,
                    i = [];
                return n.forEach(function(t) {
                    for (var n in t) r.has(n) || i.push(r.add(n))
                }), [i.map(u).join(t)].concat(n.map(function(n) {
                    return i.map(function(t) {
                        return u(n[t])
                    }).join(t)
                })).join("\n")
            }, e.formatRows = function(t) {
                return t.map(o).join("\n")
            }, e
        }, du.csv = du.dsv(",", "text/csv"), du.tsv = du.dsv("\t", "text/tab-separated-values");
        var fa, la, ha, pa, da = this[k(this, "requestAnimationFrame")] || function(t) {
            setTimeout(t, 17)
        };
        du.timer = function() {
            qt.apply(this, arguments)
        }, du.timer.flush = function() {
            jt(), Ut()
        }, du.round = function(t, n) {
            return n ? Math.round(t * (n = Math.pow(10, n))) / n : Math.round(t)
        };
        var va = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Yt);
        du.formatPrefix = function(t, n) {
            var e = 0;
            return (t = +t) && (t < 0 && (t *= -1), n && (t = du.round(t, Ft(t, n))), e = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), va[8 + e / 3]
        };
        var ga = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
            ya = du.map({
                b: function(t) {
                    return t.toString(2)
                },
                c: function(t) {
                    return String.fromCharCode(t)
                },
                o: function(t) {
                    return t.toString(8)
                },
                x: function(t) {
                    return t.toString(16)
                },
                X: function(t) {
                    return t.toString(16).toUpperCase()
                },
                g: function(t, n) {
                    return t.toPrecision(n)
                },
                e: function(t, n) {
                    return t.toExponential(n)
                },
                f: function(t, n) {
                    return t.toFixed(n)
                },
                r: function(t, n) {
                    return (t = du.round(t, Ft(t, n))).toFixed(Math.max(0, Math.min(20, Ft(t * (1 + 1e-15), n))))
                }
            }),
            _a = du.time = {},
            ma = Date;
        Vt.prototype = {
            getDate: function() {
                return this._.getUTCDate()
            },
            getDay: function() {
                return this._.getUTCDay()
            },
            getFullYear: function() {
                return this._.getUTCFullYear()
            },
            getHours: function() {
                return this._.getUTCHours()
            },
            getMilliseconds: function() {
                return this._.getUTCMilliseconds()
            },
            getMinutes: function() {
                return this._.getUTCMinutes()
            },
            getMonth: function() {
                return this._.getUTCMonth()
            },
            getSeconds: function() {
                return this._.getUTCSeconds()
            },
            getTime: function() {
                return this._.getTime()
            },
            getTimezoneOffset: function() {
                return 0
            },
            valueOf: function() {
                return this._.valueOf()
            },
            setDate: function() {
                xa.setUTCDate.apply(this._, arguments)
            },
            setDay: function() {
                xa.setUTCDay.apply(this._, arguments)
            },
            setFullYear: function() {
                xa.setUTCFullYear.apply(this._, arguments)
            },
            setHours: function() {
                xa.setUTCHours.apply(this._, arguments)
            },
            setMilliseconds: function() {
                xa.setUTCMilliseconds.apply(this._, arguments)
            },
            setMinutes: function() {
                xa.setUTCMinutes.apply(this._, arguments)
            },
            setMonth: function() {
                xa.setUTCMonth.apply(this._, arguments)
            },
            setSeconds: function() {
                xa.setUTCSeconds.apply(this._, arguments)
            },
            setTime: function() {
                xa.setTime.apply(this._, arguments)
            }
        };
        var xa = Date.prototype;
        _a.year = Xt(function(t) {
            return t = _a.day(t), t.setMonth(0, 1), t
        }, function(t, n) {
            t.setFullYear(t.getFullYear() + n)
        }, function(t) {
            return t.getFullYear()
        }), _a.years = _a.year.range, _a.years.utc = _a.year.utc.range, _a.day = Xt(function(t) {
            var n = new ma(2e3, 0);
            return n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), n
        }, function(t, n) {
            t.setDate(t.getDate() + n)
        }, function(t) {
            return t.getDate() - 1
        }), _a.days = _a.day.range, _a.days.utc = _a.day.utc.range, _a.dayOfYear = function(t) {
            var n = _a.year(t);
            return Math.floor((t - n - 6e4 * (t.getTimezoneOffset() - n.getTimezoneOffset())) / 864e5)
        }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(t, n) {
            n = 7 - n;
            var e = _a[t] = Xt(function(t) {
                return (t = _a.day(t)).setDate(t.getDate() - (t.getDay() + n) % 7), t
            }, function(t, n) {
                t.setDate(t.getDate() + 7 * Math.floor(n))
            }, function(t) {
                var e = _a.year(t).getDay();
                return Math.floor((_a.dayOfYear(t) + (e + n) % 7) / 7) - (e !== n)
            });
            _a[t + "s"] = e.range, _a[t + "s"].utc = e.utc.range, _a[t + "OfYear"] = function(t) {
                var e = _a.year(t).getDay();
                return Math.floor((_a.dayOfYear(t) + (e + n) % 7) / 7)
            }
        }), _a.week = _a.sunday, _a.weeks = _a.sunday.range, _a.weeks.utc = _a.sunday.utc.range, _a.weekOfYear = _a.sundayOfYear;
        var ba = {
                "-": "",
                _: " ",
                0: "0"
            },
            wa = /^\s*\d+/,
            Ma = /^%/;
        du.locale = function(t) {
            return {
                numberFormat: Ht(t),
                timeFormat: Kt(t)
            }
        };
        var Sa = du.locale({
            decimal: ".",
            thousands: ",",
            grouping: [3],
            currency: ["$", ""],
            dateTime: "%a %b %e %X %Y",
            date: "%m/%d/%Y",
            time: "%H:%M:%S",
            periods: ["AM", "PM"],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        });
        du.format = Sa.numberFormat, du.geo = {}, gn.prototype = {
            s: 0,
            t: 0,
            add: function(t) {
                yn(t, this.t, Ea), yn(Ea.s, this.s, this), this.s ? this.t += Ea.t : this.s = Ea.t
            },
            reset: function() {
                this.s = this.t = 0
            },
            valueOf: function() {
                return this.s
            }
        };
        var Ea = new gn;
        du.geo.stream = function(t, n) {
            t && ka.hasOwnProperty(t.type) ? ka[t.type](t, n) : _n(t, n)
        };
        var ka = {
                Feature: function(t, n) {
                    _n(t.geometry, n)
                },
                FeatureCollection: function(t, n) {
                    for (var e = t.features, r = -1, i = e.length; ++r < i;) _n(e[r].geometry, n)
                }
            },
            Na = {
                Sphere: function(t, n) {
                    n.sphere()
                },
                Point: function(t, n) {
                    t = t.coordinates, n.point(t[0], t[1], t[2])
                },
                MultiPoint: function(t, n) {
                    for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) t = e[r], n.point(t[0], t[1], t[2])
                },
                LineString: function(t, n) {
                    mn(t.coordinates, n, 0)
                },
                MultiLineString: function(t, n) {
                    for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) mn(e[r], n, 0)
                },
                Polygon: function(t, n) {
                    xn(t.coordinates, n)
                },
                MultiPolygon: function(t, n) {
                    for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) xn(e[r], n)
                },
                GeometryCollection: function(t, n) {
                    for (var e = t.geometries, r = -1, i = e.length; ++r < i;) _n(e[r], n)
                }
            };
        du.geo.area = function(t) {
            return Aa = 0, du.geo.stream(t, za), Aa
        };
        var Aa, Ta = new gn,
            za = {
                sphere: function() {
                    Aa += 4 * Hu
                },
                point: N,
                lineStart: N,
                lineEnd: N,
                polygonStart: function() {
                    Ta.reset(), za.lineStart = bn
                },
                polygonEnd: function() {
                    var t = 2 * Ta;
                    Aa += t < 0 ? 4 * Hu + t : t, za.lineStart = za.lineEnd = za.point = N
                }
            };
        du.geo.bounds = function() {
            function t(t, n) {
                m.push(x = [f = t, h = t]), n < l && (l = n), n > p && (p = n)
            }

            function n(n, e) {
                var r = wn([n * Wu, e * Wu]);
                if (y) {
                    var i = Sn(y, r),
                        o = [i[1], -i[0], 0],
                        u = Sn(o, i);
                    Nn(u), u = An(u);
                    var c = n - d,
                        s = c > 0 ? 1 : -1,
                        v = u[0] * Ku * s,
                        g = Su(c) > 180;
                    if (g ^ (s * d < v && v < s * n)) {
                        var _ = u[1] * Ku;
                        _ > p && (p = _)
                    } else if (v = (v + 360) % 360 - 180, g ^ (s * d < v && v < s * n)) {
                        var _ = -u[1] * Ku;
                        _ < l && (l = _)
                    } else e < l && (l = e), e > p && (p = e);
                    g ? n < d ? a(f, n) > a(f, h) && (h = n) : a(n, h) > a(f, h) && (f = n) : h >= f ? (n < f && (f = n), n > h && (h = n)) : n > d ? a(f, n) > a(f, h) && (h = n) : a(n, h) > a(f, h) && (f = n)
                } else t(n, e);
                y = r, d = n
            }

            function e() {
                b.point = n
            }

            function r() {
                x[0] = f, x[1] = h, b.point = t, y = null
            }

            function i(t, e) {
                if (y) {
                    var r = t - d;
                    _ += Su(r) > 180 ? r + (r > 0 ? 360 : -360) : r
                } else v = t, g = e;
                za.point(t, e), n(t, e)
            }

            function o() {
                za.lineStart()
            }

            function u() {
                i(v, g), za.lineEnd(), Su(_) > Fu && (f = -(h = 180)), x[0] = f, x[1] = h, y = null
            }

            function a(t, n) {
                return (n -= t) < 0 ? n + 360 : n
            }

            function c(t, n) {
                return t[0] - n[0]
            }

            function s(t, n) {
                return n[0] <= n[1] ? n[0] <= t && t <= n[1] : t < n[0] || n[1] < t
            }
            var f, l, h, p, d, v, g, y, _, m, x, b = {
                point: t,
                lineStart: e,
                lineEnd: r,
                polygonStart: function() {
                    b.point = i, b.lineStart = o, b.lineEnd = u, _ = 0, za.polygonStart()
                },
                polygonEnd: function() {
                    za.polygonEnd(), b.point = t, b.lineStart = e, b.lineEnd = r, Ta < 0 ? (f = -(h = 180), l = -(p = 90)) : _ > Fu ? p = 90 : _ < -Fu && (l = -90), x[0] = f, x[1] = h
                }
            };
            return function(t) {
                p = h = -(f = l = 1 / 0), m = [], du.geo.stream(t, b);
                var n = m.length;
                if (n) {
                    m.sort(c);
                    for (var e, r = 1, i = m[0], o = [i]; r < n; ++r) e = m[r], s(e[0], i) || s(e[1], i) ? (a(i[0], e[1]) > a(i[0], i[1]) && (i[1] = e[1]), a(e[0], i[1]) > a(i[0], i[1]) && (i[0] = e[0])) : o.push(i = e);
                    for (var u, e, d = -(1 / 0), n = o.length - 1, r = 0, i = o[n]; r <= n; i = e, ++r) e = o[r], (u = a(i[1], e[0])) > d && (d = u, f = e[0], h = i[1])
                }
                return m = x = null, f === 1 / 0 || l === 1 / 0 ? [
                    [NaN, NaN],
                    [NaN, NaN]
                ] : [
                    [f, l],
                    [h, p]
                ]
            }
        }(), du.geo.centroid = function(t) {
            Ca = Oa = Ia = La = Pa = Da = qa = Ra = ja = Ua = Fa = 0, du.geo.stream(t, Ya);
            var n = ja,
                e = Ua,
                r = Fa,
                i = n * n + e * e + r * r;
            return i < Yu && (n = Da, e = qa, r = Ra, Oa < Fu && (n = Ia, e = La, r = Pa), i = n * n + e * e + r * r, i < Yu) ? [NaN, NaN] : [Math.atan2(e, n) * Ku, at(r / Math.sqrt(i)) * Ku]
        };
        var Ca, Oa, Ia, La, Pa, Da, qa, Ra, ja, Ua, Fa, Ya = {
                sphere: N,
                point: zn,
                lineStart: On,
                lineEnd: In,
                polygonStart: function() {
                    Ya.lineStart = Ln
                },
                polygonEnd: function() {
                    Ya.lineStart = On
                }
            },
            Ha = Un(Dn, Bn, Xn, [-Hu, -Hu / 2]),
            Ba = 1e9;
        du.geo.clipExtent = function() {
            var t, n, e, r, i, o, u = {
                stream: function(t) {
                    return i && (i.valid = !1), i = o(t), i.valid = !0, i
                },
                extent: function(a) {
                    return arguments.length ? (o = Zn(t = +a[0][0], n = +a[0][1], e = +a[1][0], r = +a[1][1]), i && (i.valid = !1, i = null), u) : [
                        [t, n],
                        [e, r]
                    ]
                }
            };
            return u.extent([
                [0, 0],
                [960, 500]
            ])
        }, (du.geo.conicEqualArea = function() {
            return $n(Gn)
        }).raw = Gn, du.geo.albers = function() {
            return du.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
        }, du.geo.albersUsa = function() {
            function t(t) {
                var o = t[0],
                    u = t[1];
                return n = null, e(o, u), n || (r(o, u), n) || i(o, u), n
            }
            var n, e, r, i, o = du.geo.albers(),
                u = du.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                a = du.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
                c = {
                    point: function(t, e) {
                        n = [t, e]
                    }
                };
            return t.invert = function(t) {
                var n = o.scale(),
                    e = o.translate(),
                    r = (t[0] - e[0]) / n,
                    i = (t[1] - e[1]) / n;
                return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? u : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? a : o).invert(t)
            }, t.stream = function(t) {
                var n = o.stream(t),
                    e = u.stream(t),
                    r = a.stream(t);
                return {
                    point: function(t, i) {
                        n.point(t, i), e.point(t, i), r.point(t, i)
                    },
                    sphere: function() {
                        n.sphere(), e.sphere(), r.sphere()
                    },
                    lineStart: function() {
                        n.lineStart(), e.lineStart(), r.lineStart()
                    },
                    lineEnd: function() {
                        n.lineEnd(), e.lineEnd(), r.lineEnd()
                    },
                    polygonStart: function() {
                        n.polygonStart(), e.polygonStart(), r.polygonStart()
                    },
                    polygonEnd: function() {
                        n.polygonEnd(), e.polygonEnd(), r.polygonEnd()
                    }
                }
            }, t.precision = function(n) {
                return arguments.length ? (o.precision(n), u.precision(n), a.precision(n), t) : o.precision()
            }, t.scale = function(n) {
                return arguments.length ? (o.scale(n), u.scale(.35 * n), a.scale(n), t.translate(o.translate())) : o.scale()
            }, t.translate = function(n) {
                if (!arguments.length) return o.translate();
                var s = o.scale(),
                    f = +n[0],
                    l = +n[1];
                return e = o.translate(n).clipExtent([
                    [f - .455 * s, l - .238 * s],
                    [f + .455 * s, l + .238 * s]
                ]).stream(c).point, r = u.translate([f - .307 * s, l + .201 * s]).clipExtent([
                    [f - .425 * s + Fu, l + .12 * s + Fu],
                    [f - .214 * s - Fu, l + .234 * s - Fu]
                ]).stream(c).point, i = a.translate([f - .205 * s, l + .212 * s]).clipExtent([
                    [f - .214 * s + Fu, l + .166 * s + Fu],
                    [f - .115 * s - Fu, l + .234 * s - Fu]
                ]).stream(c).point, t
            }, t.scale(1070)
        };
        var Va, Xa, Wa, Ka, Ja, Za, $a = {
                point: N,
                lineStart: N,
                lineEnd: N,
                polygonStart: function() {
                    Xa = 0, $a.lineStart = Qn
                },
                polygonEnd: function() {
                    $a.lineStart = $a.lineEnd = $a.point = N, Va += Su(Xa / 2)
                }
            },
            Ga = {
                point: te,
                lineStart: N,
                lineEnd: N,
                polygonStart: N,
                polygonEnd: N
            },
            Qa = {
                point: re,
                lineStart: ie,
                lineEnd: oe,
                polygonStart: function() {
                    Qa.lineStart = ue
                },
                polygonEnd: function() {
                    Qa.point = re, Qa.lineStart = ie, Qa.lineEnd = oe
                }
            };
        du.geo.path = function() {
            function t(t) {
                return t && ("function" == typeof a && o.pointRadius(+a.apply(this, arguments)), u && u.valid || (u = i(o)), du.geo.stream(t, u)), o.result()
            }

            function n() {
                return u = null, t
            }
            var e, r, i, o, u, a = 4.5;
            return t.area = function(t) {
                return Va = 0, du.geo.stream(t, i($a)), Va
            }, t.centroid = function(t) {
                return Ia = La = Pa = Da = qa = Ra = ja = Ua = Fa = 0, du.geo.stream(t, i(Qa)), Fa ? [ja / Fa, Ua / Fa] : Ra ? [Da / Ra, qa / Ra] : Pa ? [Ia / Pa, La / Pa] : [NaN, NaN]
            }, t.bounds = function(t) {
                return Ja = Za = -(Wa = Ka = 1 / 0), du.geo.stream(t, i(Ga)), [
                    [Wa, Ka],
                    [Ja, Za]
                ]
            }, t.projection = function(t) {
                return arguments.length ? (i = (e = t) ? t.stream || se(t) : S, n()) : e
            }, t.context = function(t) {
                return arguments.length ? (o = null == (r = t) ? new ne : new ae(t), "function" != typeof a && o.pointRadius(a), n()) : r
            }, t.pointRadius = function(n) {
                return arguments.length ? (a = "function" == typeof n ? n : (o.pointRadius(+n), +n), t) : a
            }, t.projection(du.geo.albersUsa()).context(null)
        }, du.geo.transform = function(t) {
            return {
                stream: function(n) {
                    var e = new fe(n);
                    for (var r in t) e[r] = t[r];
                    return e
                }
            }
        }, fe.prototype = {
            point: function(t, n) {
                this.stream.point(t, n)
            },
            sphere: function() {
                this.stream.sphere()
            },
            lineStart: function() {
                this.stream.lineStart()
            },
            lineEnd: function() {
                this.stream.lineEnd()
            },
            polygonStart: function() {
                this.stream.polygonStart()
            },
            polygonEnd: function() {
                this.stream.polygonEnd()
            }
        }, du.geo.projection = he, du.geo.projectionMutator = pe, (du.geo.equirectangular = function() {
            return he(ve)
        }).raw = ve.invert = ve, du.geo.rotation = function(t) {
            function n(n) {
                return n = t(n[0] * Wu, n[1] * Wu), n[0] *= Ku, n[1] *= Ku, n
            }
            return t = ye(t[0] % 360 * Wu, t[1] * Wu, t.length > 2 ? t[2] * Wu : 0), n.invert = function(n) {
                return n = t.invert(n[0] * Wu, n[1] * Wu), n[0] *= Ku, n[1] *= Ku, n
            }, n
        }, ge.invert = ve, du.geo.circle = function() {
            function t() {
                var t = "function" == typeof r ? r.apply(this, arguments) : r,
                    n = ye(-t[0] * Wu, -t[1] * Wu, 0).invert,
                    i = [];
                return e(null, null, 1, {
                    point: function(t, e) {
                        i.push(t = n(t, e)), t[0] *= Ku, t[1] *= Ku
                    }
                }), {
                    type: "Polygon",
                    coordinates: [i]
                }
            }
            var n, e, r = [0, 0],
                i = 6;
            return t.origin = function(n) {
                return arguments.length ? (r = n, t) : r
            }, t.angle = function(r) {
                return arguments.length ? (e = be((n = +r) * Wu, i * Wu), t) : n
            }, t.precision = function(r) {
                return arguments.length ? (e = be(n * Wu, (i = +r) * Wu), t) : i
            }, t.angle(90)
        }, du.geo.distance = function(t, n) {
            var e, r = (n[0] - t[0]) * Wu,
                i = t[1] * Wu,
                o = n[1] * Wu,
                u = Math.sin(r),
                a = Math.cos(r),
                c = Math.sin(i),
                s = Math.cos(i),
                f = Math.sin(o),
                l = Math.cos(o);
            return Math.atan2(Math.sqrt((e = l * u) * e + (e = s * f - c * l * a) * e), c * f + s * l * a)
        }, du.geo.graticule = function() {
            function t() {
                return {
                    type: "MultiLineString",
                    coordinates: n()
                }
            }

            function n() {
                return du.range(Math.ceil(o / g) * g, i, g).map(h).concat(du.range(Math.ceil(s / y) * y, c, y).map(p)).concat(du.range(Math.ceil(r / d) * d, e, d).filter(function(t) {
                    return Su(t % g) > Fu
                }).map(f)).concat(du.range(Math.ceil(a / v) * v, u, v).filter(function(t) {
                    return Su(t % y) > Fu
                }).map(l))
            }
            var e, r, i, o, u, a, c, s, f, l, h, p, d = 10,
                v = d,
                g = 90,
                y = 360,
                _ = 2.5;
            return t.lines = function() {
                return n().map(function(t) {
                    return {
                        type: "LineString",
                        coordinates: t
                    }
                })
            }, t.outline = function() {
                return {
                    type: "Polygon",
                    coordinates: [h(o).concat(p(c).slice(1), h(i).reverse().slice(1), p(s).reverse().slice(1))]
                }
            }, t.extent = function(n) {
                return arguments.length ? t.majorExtent(n).minorExtent(n) : t.minorExtent()
            }, t.majorExtent = function(n) {
                return arguments.length ? (o = +n[0][0], i = +n[1][0], s = +n[0][1], c = +n[1][1], o > i && (n = o, o = i, i = n), s > c && (n = s, s = c, c = n), t.precision(_)) : [
                    [o, s],
                    [i, c]
                ]
            }, t.minorExtent = function(n) {
                return arguments.length ? (r = +n[0][0], e = +n[1][0], a = +n[0][1], u = +n[1][1], r > e && (n = r, r = e, e = n), a > u && (n = a, a = u, u = n), t.precision(_)) : [
                    [r, a],
                    [e, u]
                ]
            }, t.step = function(n) {
                return arguments.length ? t.majorStep(n).minorStep(n) : t.minorStep()
            }, t.majorStep = function(n) {
                return arguments.length ? (g = +n[0], y = +n[1], t) : [g, y]
            }, t.minorStep = function(n) {
                return arguments.length ? (d = +n[0], v = +n[1], t) : [d, v]
            }, t.precision = function(n) {
                return arguments.length ? (_ = +n, f = Me(a, u, 90), l = Se(r, e, _), h = Me(s, c, 90), p = Se(o, i, _), t) : _
            }, t.majorExtent([
                [-180, -90 + Fu],
                [180, 90 - Fu]
            ]).minorExtent([
                [-180, -80 - Fu],
                [180, 80 + Fu]
            ])
        }, du.geo.greatArc = function() {
            function t() {
                return {
                    type: "LineString",
                    coordinates: [n || r.apply(this, arguments), e || i.apply(this, arguments)]
                }
            }
            var n, e, r = Ee,
                i = ke;
            return t.distance = function() {
                return du.geo.distance(n || r.apply(this, arguments), e || i.apply(this, arguments))
            }, t.source = function(e) {
                return arguments.length ? (r = e, n = "function" == typeof e ? null : e, t) : r
            }, t.target = function(n) {
                return arguments.length ? (i = n, e = "function" == typeof n ? null : n, t) : i
            }, t.precision = function() {
                return arguments.length ? t : 0
            }, t
        }, du.geo.interpolate = function(t, n) {
            return Ne(t[0] * Wu, t[1] * Wu, n[0] * Wu, n[1] * Wu)
        }, du.geo.length = function(t) {
            return tc = 0, du.geo.stream(t, nc), tc
        };
        var tc, nc = {
                sphere: N,
                point: N,
                lineStart: Ae,
                lineEnd: N,
                polygonStart: N,
                polygonEnd: N
            },
            ec = Te(function(t) {
                return Math.sqrt(2 / (1 + t))
            }, function(t) {
                return 2 * Math.asin(t / 2)
            });
        (du.geo.azimuthalEqualArea = function() {
            return he(ec)
        }).raw = ec;
        var rc = Te(function(t) {
            var n = Math.acos(t);
            return n && n / Math.sin(n)
        }, S);
        (du.geo.azimuthalEquidistant = function() {
            return he(rc)
        }).raw = rc, (du.geo.conicConformal = function() {
            return $n(ze)
        }).raw = ze, (du.geo.conicEquidistant = function() {
            return $n(Ce)
        }).raw = Ce;
        var ic = Te(function(t) {
            return 1 / t
        }, Math.atan);
        (du.geo.gnomonic = function() {
            return he(ic)
        }).raw = ic, Oe.invert = function(t, n) {
            return [t, 2 * Math.atan(Math.exp(n)) - Xu]
        }, (du.geo.mercator = function() {
            return Ie(Oe)
        }).raw = Oe;
        var oc = Te(function() {
            return 1
        }, Math.asin);
        (du.geo.orthographic = function() {
            return he(oc)
        }).raw = oc;
        var uc = Te(function(t) {
            return 1 / (1 + t)
        }, function(t) {
            return 2 * Math.atan(t)
        });
        (du.geo.stereographic = function() {
            return he(uc)
        }).raw = uc, Le.invert = function(t, n) {
            return [-n, 2 * Math.atan(Math.exp(t)) - Xu]
        }, (du.geo.transverseMercator = function() {
            var t = Ie(Le),
                n = t.center,
                e = t.rotate;
            return t.center = function(t) {
                return t ? n([-t[1], t[0]]) : (t = n(), [t[1], -t[0]])
            }, t.rotate = function(t) {
                return t ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = e(), [t[0], t[1], t[2] - 90])
            }, e([0, 0, 90])
        }).raw = Le, du.geom = {}, du.geom.hull = function(t) {
            function n(t) {
                if (t.length < 3) return [];
                var n, i = Ot(e),
                    o = Ot(r),
                    u = t.length,
                    a = [],
                    c = [];
                for (n = 0; n < u; n++) a.push([+i.call(this, t[n], n), +o.call(this, t[n], n), n]);
                for (a.sort(Re), n = 0; n < u; n++) c.push([a[n][0], -a[n][1]]);
                var s = qe(a),
                    f = qe(c),
                    l = f[0] === s[0],
                    h = f[f.length - 1] === s[s.length - 1],
                    p = [];
                for (n = s.length - 1; n >= 0; --n) p.push(t[a[s[n]][2]]);
                for (n = +l; n < f.length - h; ++n) p.push(t[a[f[n]][2]]);
                return p
            }
            var e = Pe,
                r = De;
            return arguments.length ? n(t) : (n.x = function(t) {
                return arguments.length ? (e = t, n) : e
            }, n.y = function(t) {
                return arguments.length ? (r = t, n) : r
            }, n)
        }, du.geom.polygon = function(t) {
            return Tu(t, ac), t
        };
        var ac = du.geom.polygon.prototype = [];
        ac.area = function() {
            for (var t, n = -1, e = this.length, r = this[e - 1], i = 0; ++n < e;) t = r, r = this[n], i += t[1] * r[0] - t[0] * r[1];
            return .5 * i
        }, ac.centroid = function(t) {
            var n, e, r = -1,
                i = this.length,
                o = 0,
                u = 0,
                a = this[i - 1];
            for (arguments.length || (t = -1 / (6 * this.area())); ++r < i;) n = a, a = this[r], e = n[0] * a[1] - a[0] * n[1], o += (n[0] + a[0]) * e, u += (n[1] + a[1]) * e;
            return [o * t, u * t]
        }, ac.clip = function(t) {
            for (var n, e, r, i, o, u, a = Fe(t), c = -1, s = this.length - Fe(this), f = this[s - 1]; ++c < s;) {
                for (n = t.slice(), t.length = 0, i = this[c], o = n[(r = n.length - a) - 1], e = -1; ++e < r;) u = n[e], je(u, f, i) ? (je(o, f, i) || t.push(Ue(o, u, f, i)), t.push(u)) : je(o, f, i) && t.push(Ue(o, u, f, i)), o = u;
                a && t.push(t[0]), f = i
            }
            return t
        };
        var cc, sc, fc, lc, hc, pc = [],
            dc = [];
        Je.prototype.prepare = function() {
            for (var t, n = this.edges, e = n.length; e--;) t = n[e].edge, t.b && t.a || n.splice(e, 1);
            return n.sort($e), n.length
        }, ar.prototype = {
            start: function() {
                return this.edge.l === this.site ? this.edge.a : this.edge.b
            },
            end: function() {
                return this.edge.l === this.site ? this.edge.b : this.edge.a
            }
        }, cr.prototype = {
            insert: function(t, n) {
                var e, r, i;
                if (t) {
                    if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                        for (t = t.R; t.L;) t = t.L;
                        t.L = n
                    } else t.R = n;
                    e = t
                } else this._ ? (t = hr(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
                for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) r = e.U, e === r.L ? (i = r.R, i && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (fr(this, e), t = e, e = t.U), e.C = !1, r.C = !0, lr(this, r))) : (i = r.L, i && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (lr(this, e), t = e, e = t.U), e.C = !1, r.C = !0, fr(this, r))), e = t.U;
                this._.C = !1
            },
            remove: function(t) {
                t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
                var n, e, r, i = t.U,
                    o = t.L,
                    u = t.R;
                if (e = o ? u ? hr(u) : o : u, i ? i.L === t ? i.L = e : i.R = e : this._ = e, o && u ? (r = e.C, e.C = t.C, e.L = o, o.U = e, e !== u ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = u, u.U = e) : (e.U = i, i = e, t = e.R)) : (r = t.C, t = e), t && (t.U = i), !r) {
                    if (t && t.C) return void(t.C = !1);
                    do {
                        if (t === this._) break;
                        if (t === i.L) {
                            if (n = i.R, n.C && (n.C = !1, i.C = !0, fr(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) {
                                n.R && n.R.C || (n.L.C = !1, n.C = !0, lr(this, n), n = i.R), n.C = i.C, i.C = n.R.C = !1, fr(this, i), t = this._;
                                break
                            }
                        } else if (n = i.L, n.C && (n.C = !1, i.C = !0, lr(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) {
                            n.L && n.L.C || (n.R.C = !1, n.C = !0, fr(this, n), n = i.L), n.C = i.C, i.C = n.L.C = !1, lr(this, i), t = this._;
                            break
                        }
                        n.C = !0, t = i, i = i.U
                    } while (!t.C);
                    t && (t.C = !1)
                }
            }
        }, du.geom.voronoi = function(t) {
            function n(t) {
                var n = new Array(t.length),
                    r = a[0][0],
                    i = a[0][1],
                    o = a[1][0],
                    u = a[1][1];
                return pr(e(t), a).cells.forEach(function(e, a) {
                    var c = e.edges,
                        s = e.site,
                        f = n[a] = c.length ? c.map(function(t) {
                            var n = t.start();
                            return [n.x, n.y]
                        }) : s.x >= r && s.x <= o && s.y >= i && s.y <= u ? [
                            [r, u],
                            [o, u],
                            [o, i],
                            [r, i]
                        ] : [];
                    f.point = t[a]
                }), n
            }

            function e(t) {
                return t.map(function(t, n) {
                    return {
                        x: Math.round(o(t, n) / Fu) * Fu,
                        y: Math.round(u(t, n) / Fu) * Fu,
                        i: n
                    }
                })
            }
            var r = Pe,
                i = De,
                o = r,
                u = i,
                a = vc;
            return t ? n(t) : (n.links = function(t) {
                return pr(e(t)).edges.filter(function(t) {
                    return t.l && t.r
                }).map(function(n) {
                    return {
                        source: t[n.l.i],
                        target: t[n.r.i]
                    }
                })
            }, n.triangles = function(t) {
                var n = [];
                return pr(e(t)).cells.forEach(function(e, r) {
                    for (var i, o, u = e.site, a = e.edges.sort($e), c = -1, s = a.length, f = a[s - 1].edge, l = f.l === u ? f.r : f.l; ++c < s;) i = f, o = l, f = a[c].edge, l = f.l === u ? f.r : f.l, r < o.i && r < l.i && vr(u, o, l) < 0 && n.push([t[r], t[o.i], t[l.i]])
                }), n
            }, n.x = function(t) {
                return arguments.length ? (o = Ot(r = t), n) : r
            }, n.y = function(t) {
                return arguments.length ? (u = Ot(i = t), n) : i
            }, n.clipExtent = function(t) {
                return arguments.length ? (a = null == t ? vc : t, n) : a === vc ? null : a
            }, n.size = function(t) {
                return arguments.length ? n.clipExtent(t && [
                    [0, 0], t
                ]) : a === vc ? null : a && a[1]
            }, n)
        };
        var vc = [
            [-1e6, -1e6],
            [1e6, 1e6]
        ];
        du.geom.delaunay = function(t) {
            return du.geom.voronoi().triangles(t)
        }, du.geom.quadtree = function(t, n, e, r, i) {
            function o(t) {
                function o(t, n, e, r, i, o, u, a) {
                    if (!isNaN(e) && !isNaN(r))
                        if (t.leaf) {
                            var c = t.x,
                                f = t.y;
                            if (null != c)
                                if (Su(c - e) + Su(f - r) < .01) s(t, n, e, r, i, o, u, a);
                                else {
                                    var l = t.point;
                                    t.x = t.y = t.point = null, s(t, l, c, f, i, o, u, a), s(t, n, e, r, i, o, u, a)
                                }
                            else t.x = e, t.y = r, t.point = n
                        } else s(t, n, e, r, i, o, u, a)
                }

                function s(t, n, e, r, i, u, a, c) {
                    var s = .5 * (i + a),
                        f = .5 * (u + c),
                        l = e >= s,
                        h = r >= f,
                        p = h << 1 | l;
                    t.leaf = !1, t = t.nodes[p] || (t.nodes[p] = _r()), l ? i = s : a = s, h ? u = f : c = f, o(t, n, e, r, i, u, a, c)
                }
                var f, l, h, p, d, v, g, y, _, m = Ot(a),
                    x = Ot(c);
                if (null != n) v = n, g = e, y = r, _ = i;
                else if (y = _ = -(v = g = 1 / 0), l = [], h = [], d = t.length, u)
                    for (p = 0; p < d; ++p) f = t[p], f.x < v && (v = f.x), f.y < g && (g = f.y), f.x > y && (y = f.x), f.y > _ && (_ = f.y), l.push(f.x), h.push(f.y);
                else
                    for (p = 0; p < d; ++p) {
                        var b = +m(f = t[p], p),
                            w = +x(f, p);
                        b < v && (v = b), w < g && (g = w), b > y && (y = b), w > _ && (_ = w), l.push(b), h.push(w)
                    }
                var M = y - v,
                    S = _ - g;
                M > S ? _ = g + M : y = v + S;
                var E = _r();
                if (E.add = function(t) {
                        o(E, t, +m(t, ++p), +x(t, p), v, g, y, _)
                    }, E.visit = function(t) {
                        mr(t, E, v, g, y, _)
                    }, E.find = function(t) {
                        return xr(E, t[0], t[1], v, g, y, _)
                    }, p = -1, null == n) {
                    for (; ++p < d;) o(E, t[p], l[p], h[p], v, g, y, _);
                    --p
                } else t.forEach(E.add);
                return l = h = t = f = null, E
            }
            var u, a = Pe,
                c = De;
            return (u = arguments.length) ? (a = gr, c = yr, 3 === u && (i = e, r = n, e = n = 0), o(t)) : (o.x = function(t) {
                return arguments.length ? (a = t, o) : a
            }, o.y = function(t) {
                return arguments.length ? (c = t, o) : c
            }, o.extent = function(t) {
                return arguments.length ? (null == t ? n = e = r = i = null : (n = +t[0][0], e = +t[0][1], r = +t[1][0], i = +t[1][1]), o) : null == n ? null : [
                    [n, e],
                    [r, i]
                ]
            }, o.size = function(t) {
                return arguments.length ? (null == t ? n = e = r = i = null : (n = e = 0, r = +t[0], i = +t[1]), o) : null == n ? null : [r - n, i - e]
            }, o)
        }, du.interpolateRgb = br, du.interpolateObject = wr, du.interpolateNumber = Mr, du.interpolateString = Sr;
        var gc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
            yc = new RegExp(gc.source, "g");
        du.interpolate = Er, du.interpolators = [function(t, n) {
            var e = "undefined" == typeof n ? "undefined" : o(n);
            return ("string" === e ? sa.has(n.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(n) ? br : Sr : n instanceof ht ? br : Array.isArray(n) ? kr : "object" === e && isNaN(n) ? wr : Mr)(t, n)
        }], du.interpolateArray = kr;
        var _c = function() {
                return S
            },
            mc = du.map({
                linear: _c,
                poly: Ir,
                quad: function() {
                    return zr
                },
                cubic: function() {
                    return Cr
                },
                sin: function() {
                    return Lr
                },
                exp: function() {
                    return Pr
                },
                circle: function() {
                    return Dr
                },
                elastic: qr,
                back: Rr,
                bounce: function() {
                    return jr
                }
            }),
            xc = du.map({ in: S,
                out: Ar,
                "in-out": Tr,
                "out-in": function(t) {
                    return Tr(Ar(t))
                }
            });
        du.ease = function(t) {
            var n = t.indexOf("-"),
                e = n >= 0 ? t.slice(0, n) : t,
                r = n >= 0 ? t.slice(n + 1) : "in";
            return e = mc.get(e) || _c, r = xc.get(r) || S, Nr(r(e.apply(null, vu.call(arguments, 1))))
        }, du.interpolateHcl = Ur, du.interpolateHsl = Fr, du.interpolateLab = Yr, du.interpolateRound = Hr, du.transform = function(t) {
            var n = yu.createElementNS(du.ns.prefix.svg, "g");
            return (du.transform = function(t) {
                if (null != t) {
                    n.setAttribute("transform", t);
                    var e = n.transform.baseVal.consolidate()
                }
                return new Br(e ? e.matrix : bc);
            })(t)
        }, Br.prototype.toString = function() {
            return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
        };
        var bc = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: 0,
            f: 0
        };
        du.interpolateTransform = Qr, du.layout = {}, du.layout.bundle = function() {
            return function(t) {
                for (var n = [], e = -1, r = t.length; ++e < r;) n.push(ei(t[e]));
                return n
            }
        }, du.layout.chord = function() {
            function t() {
                var t, s, l, h, p, d = {},
                    v = [],
                    g = du.range(o),
                    y = [];
                for (e = [], r = [], t = 0, h = -1; ++h < o;) {
                    for (s = 0, p = -1; ++p < o;) s += i[h][p];
                    v.push(s), y.push(du.range(o)), t += s
                }
                for (u && g.sort(function(t, n) {
                        return u(v[t], v[n])
                    }), a && y.forEach(function(t, n) {
                        t.sort(function(t, e) {
                            return a(i[n][t], i[n][e])
                        })
                    }), t = (Bu - f * o) / t, s = 0, h = -1; ++h < o;) {
                    for (l = s, p = -1; ++p < o;) {
                        var _ = g[h],
                            m = y[_][p],
                            x = i[_][m],
                            b = s,
                            w = s += x * t;
                        d[_ + "-" + m] = {
                            index: _,
                            subindex: m,
                            startAngle: b,
                            endAngle: w,
                            value: x
                        }
                    }
                    r[_] = {
                        index: _,
                        startAngle: l,
                        endAngle: s,
                        value: v[_]
                    }, s += f
                }
                for (h = -1; ++h < o;)
                    for (p = h - 1; ++p < o;) {
                        var M = d[h + "-" + p],
                            S = d[p + "-" + h];
                        (M.value || S.value) && e.push(M.value < S.value ? {
                            source: S,
                            target: M
                        } : {
                            source: M,
                            target: S
                        })
                    }
                c && n()
            }

            function n() {
                e.sort(function(t, n) {
                    return c((t.source.value + t.target.value) / 2, (n.source.value + n.target.value) / 2)
                })
            }
            var e, r, i, o, u, a, c, s = {},
                f = 0;
            return s.matrix = function(t) {
                return arguments.length ? (o = (i = t) && i.length, e = r = null, s) : i
            }, s.padding = function(t) {
                return arguments.length ? (f = t, e = r = null, s) : f
            }, s.sortGroups = function(t) {
                return arguments.length ? (u = t, e = r = null, s) : u
            }, s.sortSubgroups = function(t) {
                return arguments.length ? (a = t, e = null, s) : a
            }, s.sortChords = function(t) {
                return arguments.length ? (c = t, e && n(), s) : c
            }, s.chords = function() {
                return e || t(), e
            }, s.groups = function() {
                return r || t(), r
            }, s
        }, du.layout.force = function() {
            function t(t) {
                return function(n, e, r, i) {
                    if (n.point !== t) {
                        var o = n.cx - t.x,
                            u = n.cy - t.y,
                            a = i - e,
                            c = o * o + u * u;
                        if (a * a / y < c) {
                            if (c < v) {
                                var s = n.charge / c;
                                t.px -= o * s, t.py -= u * s
                            }
                            return !0
                        }
                        if (n.point && c && c < v) {
                            var s = n.pointCharge / c;
                            t.px -= o * s, t.py -= u * s
                        }
                    }
                    return !n.charge
                }
            }

            function n(t) {
                t.px = du.event.x, t.py = du.event.y, c.resume()
            }
            var e, r, i, o, u, a, c = {},
                s = du.dispatch("start", "tick", "end"),
                f = [1, 1],
                l = .9,
                h = wc,
                p = Mc,
                d = -30,
                v = Sc,
                g = .1,
                y = .64,
                _ = [],
                m = [];
            return c.tick = function() {
                if ((i *= .99) < .005) return e = null, s.end({
                    type: "end",
                    alpha: i = 0
                }), !0;
                var n, r, c, h, p, v, y, x, b, w = _.length,
                    M = m.length;
                for (r = 0; r < M; ++r) c = m[r], h = c.source, p = c.target, x = p.x - h.x, b = p.y - h.y, (v = x * x + b * b) && (v = i * u[r] * ((v = Math.sqrt(v)) - o[r]) / v, x *= v, b *= v, p.x -= x * (y = h.weight + p.weight ? h.weight / (h.weight + p.weight) : .5), p.y -= b * y, h.x += x * (y = 1 - y), h.y += b * y);
                if ((y = i * g) && (x = f[0] / 2, b = f[1] / 2, r = -1, y))
                    for (; ++r < w;) c = _[r], c.x += (x - c.x) * y, c.y += (b - c.y) * y;
                if (d)
                    for (si(n = du.geom.quadtree(_), i, a), r = -1; ++r < w;)(c = _[r]).fixed || n.visit(t(c));
                for (r = -1; ++r < w;) c = _[r], c.fixed ? (c.x = c.px, c.y = c.py) : (c.x -= (c.px - (c.px = c.x)) * l, c.y -= (c.py - (c.py = c.y)) * l);
                s.tick({
                    type: "tick",
                    alpha: i
                })
            }, c.nodes = function(t) {
                return arguments.length ? (_ = t, c) : _
            }, c.links = function(t) {
                return arguments.length ? (m = t, c) : m
            }, c.size = function(t) {
                return arguments.length ? (f = t, c) : f
            }, c.linkDistance = function(t) {
                return arguments.length ? (h = "function" == typeof t ? t : +t, c) : h
            }, c.distance = c.linkDistance, c.linkStrength = function(t) {
                return arguments.length ? (p = "function" == typeof t ? t : +t, c) : p
            }, c.friction = function(t) {
                return arguments.length ? (l = +t, c) : l
            }, c.charge = function(t) {
                return arguments.length ? (d = "function" == typeof t ? t : +t, c) : d
            }, c.chargeDistance = function(t) {
                return arguments.length ? (v = t * t, c) : Math.sqrt(v)
            }, c.gravity = function(t) {
                return arguments.length ? (g = +t, c) : g
            }, c.theta = function(t) {
                return arguments.length ? (y = t * t, c) : Math.sqrt(y)
            }, c.alpha = function(t) {
                return arguments.length ? (t = +t, i ? t > 0 ? i = t : (e.c = null, e.t = NaN, e = null, s.end({
                    type: "end",
                    alpha: i = 0
                })) : t > 0 && (s.start({
                    type: "start",
                    alpha: i = t
                }), e = qt(c.tick)), c) : i
            }, c.start = function() {
                function t(t, r) {
                    if (!e) {
                        for (e = new Array(i), c = 0; c < i; ++c) e[c] = [];
                        for (c = 0; c < s; ++c) {
                            var o = m[c];
                            e[o.source.index].push(o.target), e[o.target.index].push(o.source)
                        }
                    }
                    for (var u, a = e[n], c = -1, f = a.length; ++c < f;)
                        if (!isNaN(u = a[c][t])) return u;
                    return Math.random() * r
                }
                var n, e, r, i = _.length,
                    s = m.length,
                    l = f[0],
                    v = f[1];
                for (n = 0; n < i; ++n)(r = _[n]).index = n, r.weight = 0;
                for (n = 0; n < s; ++n) r = m[n], "number" == typeof r.source && (r.source = _[r.source]), "number" == typeof r.target && (r.target = _[r.target]), ++r.source.weight, ++r.target.weight;
                for (n = 0; n < i; ++n) r = _[n], isNaN(r.x) && (r.x = t("x", l)), isNaN(r.y) && (r.y = t("y", v)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y);
                if (o = [], "function" == typeof h)
                    for (n = 0; n < s; ++n) o[n] = +h.call(this, m[n], n);
                else
                    for (n = 0; n < s; ++n) o[n] = h;
                if (u = [], "function" == typeof p)
                    for (n = 0; n < s; ++n) u[n] = +p.call(this, m[n], n);
                else
                    for (n = 0; n < s; ++n) u[n] = p;
                if (a = [], "function" == typeof d)
                    for (n = 0; n < i; ++n) a[n] = +d.call(this, _[n], n);
                else
                    for (n = 0; n < i; ++n) a[n] = d;
                return c.resume()
            }, c.resume = function() {
                return c.alpha(.1)
            }, c.stop = function() {
                return c.alpha(0)
            }, c.drag = function() {
                return r || (r = du.behavior.drag().origin(S).on("dragstart.force", oi).on("drag.force", n).on("dragend.force", ui)), arguments.length ? void this.on("mouseover.force", ai).on("mouseout.force", ci).call(r) : r
            }, du.rebind(c, s, "on")
        };
        var wc = 20,
            Mc = 1,
            Sc = 1 / 0;
        du.layout.hierarchy = function() {
            function t(i) {
                var o, u = [i],
                    a = [];
                for (i.depth = 0; null != (o = u.pop());)
                    if (a.push(o), (s = e.call(t, o, o.depth)) && (c = s.length)) {
                        for (var c, s, f; --c >= 0;) u.push(f = s[c]), f.parent = o, f.depth = o.depth + 1;
                        r && (o.value = 0), o.children = s
                    } else r && (o.value = +r.call(t, o, o.depth) || 0), delete o.children;
                return hi(i, function(t) {
                    var e, i;
                    n && (e = t.children) && e.sort(n), r && (i = t.parent) && (i.value += t.value)
                }), a
            }
            var n = vi,
                e = pi,
                r = di;
            return t.sort = function(e) {
                return arguments.length ? (n = e, t) : n
            }, t.children = function(n) {
                return arguments.length ? (e = n, t) : e
            }, t.value = function(n) {
                return arguments.length ? (r = n, t) : r
            }, t.revalue = function(n) {
                return r && (li(n, function(t) {
                    t.children && (t.value = 0)
                }), hi(n, function(n) {
                    var e;
                    n.children || (n.value = +r.call(t, n, n.depth) || 0), (e = n.parent) && (e.value += n.value)
                })), n
            }, t
        }, du.layout.partition = function() {
            function t(n, e, r, i) {
                var o = n.children;
                if (n.x = e, n.y = n.depth * i, n.dx = r, n.dy = i, o && (u = o.length)) {
                    var u, a, c, s = -1;
                    for (r = n.value ? r / n.value : 0; ++s < u;) t(a = o[s], e, c = a.value * r, i), e += c
                }
            }

            function n(t) {
                var e = t.children,
                    r = 0;
                if (e && (i = e.length))
                    for (var i, o = -1; ++o < i;) r = Math.max(r, n(e[o]));
                return 1 + r
            }

            function e(e, o) {
                var u = r.call(this, e, o);
                return t(u[0], 0, i[0], i[1] / n(u[0])), u
            }
            var r = du.layout.hierarchy(),
                i = [1, 1];
            return e.size = function(t) {
                return arguments.length ? (i = t, e) : i
            }, fi(e, r)
        }, du.layout.pie = function() {
            function t(u) {
                var a, c = u.length,
                    s = u.map(function(e, r) {
                        return +n.call(t, e, r)
                    }),
                    f = +("function" == typeof r ? r.apply(this, arguments) : r),
                    l = ("function" == typeof i ? i.apply(this, arguments) : i) - f,
                    h = Math.min(Math.abs(l) / c, +("function" == typeof o ? o.apply(this, arguments) : o)),
                    p = h * (l < 0 ? -1 : 1),
                    d = du.sum(s),
                    v = d ? (l - c * p) / d : 0,
                    g = du.range(c),
                    y = [];
                return null != e && g.sort(e === Ec ? function(t, n) {
                    return s[n] - s[t]
                } : function(t, n) {
                    return e(u[t], u[n])
                }), g.forEach(function(t) {
                    y[t] = {
                        data: u[t],
                        value: a = s[t],
                        startAngle: f,
                        endAngle: f += a * v + p,
                        padAngle: h
                    }
                }), y
            }
            var n = Number,
                e = Ec,
                r = 0,
                i = Bu,
                o = 0;
            return t.value = function(e) {
                return arguments.length ? (n = e, t) : n
            }, t.sort = function(n) {
                return arguments.length ? (e = n, t) : e
            }, t.startAngle = function(n) {
                return arguments.length ? (r = n, t) : r
            }, t.endAngle = function(n) {
                return arguments.length ? (i = n, t) : i
            }, t.padAngle = function(n) {
                return arguments.length ? (o = n, t) : o
            }, t
        };
        var Ec = {};
        du.layout.stack = function() {
            function t(a, c) {
                if (!(h = a.length)) return a;
                var s = a.map(function(e, r) {
                        return n.call(t, e, r)
                    }),
                    f = s.map(function(n) {
                        return n.map(function(n, e) {
                            return [o.call(t, n, e), u.call(t, n, e)]
                        })
                    }),
                    l = e.call(t, f, c);
                s = du.permute(s, l), f = du.permute(f, l);
                var h, p, d, v, g = r.call(t, f, c),
                    y = s[0].length;
                for (d = 0; d < y; ++d)
                    for (i.call(t, s[0][d], v = g[d], f[0][d][1]), p = 1; p < h; ++p) i.call(t, s[p][d], v += f[p - 1][d][1], f[p][d][1]);
                return a
            }
            var n = S,
                e = xi,
                r = bi,
                i = mi,
                o = yi,
                u = _i;
            return t.values = function(e) {
                return arguments.length ? (n = e, t) : n
            }, t.order = function(n) {
                return arguments.length ? (e = "function" == typeof n ? n : kc.get(n) || xi, t) : e
            }, t.offset = function(n) {
                return arguments.length ? (r = "function" == typeof n ? n : Nc.get(n) || bi, t) : r
            }, t.x = function(n) {
                return arguments.length ? (o = n, t) : o
            }, t.y = function(n) {
                return arguments.length ? (u = n, t) : u
            }, t.out = function(n) {
                return arguments.length ? (i = n, t) : i
            }, t
        };
        var kc = du.map({
                "inside-out": function(t) {
                    var n, e, r = t.length,
                        i = t.map(wi),
                        o = t.map(Mi),
                        u = du.range(r).sort(function(t, n) {
                            return i[t] - i[n]
                        }),
                        a = 0,
                        c = 0,
                        s = [],
                        f = [];
                    for (n = 0; n < r; ++n) e = u[n], a < c ? (a += o[e], s.push(e)) : (c += o[e], f.push(e));
                    return f.reverse().concat(s)
                },
                reverse: function(t) {
                    return du.range(t.length).reverse()
                },
                default: xi
            }),
            Nc = du.map({
                silhouette: function(t) {
                    var n, e, r, i = t.length,
                        o = t[0].length,
                        u = [],
                        a = 0,
                        c = [];
                    for (e = 0; e < o; ++e) {
                        for (n = 0, r = 0; n < i; n++) r += t[n][e][1];
                        r > a && (a = r), u.push(r)
                    }
                    for (e = 0; e < o; ++e) c[e] = (a - u[e]) / 2;
                    return c
                },
                wiggle: function(t) {
                    var n, e, r, i, o, u, a, c, s, f = t.length,
                        l = t[0],
                        h = l.length,
                        p = [];
                    for (p[0] = c = s = 0, e = 1; e < h; ++e) {
                        for (n = 0, i = 0; n < f; ++n) i += t[n][e][1];
                        for (n = 0, o = 0, a = l[e][0] - l[e - 1][0]; n < f; ++n) {
                            for (r = 0, u = (t[n][e][1] - t[n][e - 1][1]) / (2 * a); r < n; ++r) u += (t[r][e][1] - t[r][e - 1][1]) / a;
                            o += u * t[n][e][1]
                        }
                        p[e] = c -= i ? o / i * a : 0, c < s && (s = c)
                    }
                    for (e = 0; e < h; ++e) p[e] -= s;
                    return p
                },
                expand: function(t) {
                    var n, e, r, i = t.length,
                        o = t[0].length,
                        u = 1 / i,
                        a = [];
                    for (e = 0; e < o; ++e) {
                        for (n = 0, r = 0; n < i; n++) r += t[n][e][1];
                        if (r)
                            for (n = 0; n < i; n++) t[n][e][1] /= r;
                        else
                            for (n = 0; n < i; n++) t[n][e][1] = u
                    }
                    for (e = 0; e < o; ++e) a[e] = 0;
                    return a
                },
                zero: bi
            });
        du.layout.histogram = function() {
            function t(t, o) {
                for (var u, a, c = [], s = t.map(e, this), f = r.call(this, s, o), l = i.call(this, f, s, o), o = -1, h = s.length, p = l.length - 1, d = n ? 1 : 1 / h; ++o < p;) u = c[o] = [], u.dx = l[o + 1] - (u.x = l[o]), u.y = 0;
                if (p > 0)
                    for (o = -1; ++o < h;) a = s[o], a >= f[0] && a <= f[1] && (u = c[du.bisect(l, a, 1, p) - 1], u.y += d, u.push(t[o]));
                return c
            }
            var n = !0,
                e = Number,
                r = Ni,
                i = Ei;
            return t.value = function(n) {
                return arguments.length ? (e = n, t) : e
            }, t.range = function(n) {
                return arguments.length ? (r = Ot(n), t) : r
            }, t.bins = function(n) {
                return arguments.length ? (i = "number" == typeof n ? function(t) {
                    return ki(t, n)
                } : Ot(n), t) : i
            }, t.frequency = function(e) {
                return arguments.length ? (n = !!e, t) : n
            }, t
        }, du.layout.pack = function() {
            function t(t, o) {
                var u = e.call(this, t, o),
                    a = u[0],
                    c = i[0],
                    s = i[1],
                    f = null == n ? Math.sqrt : "function" == typeof n ? n : function() {
                        return n
                    };
                if (a.x = a.y = 0, hi(a, function(t) {
                        t.r = +f(t.value)
                    }), hi(a, Oi), r) {
                    var l = r * (n ? 1 : Math.max(2 * a.r / c, 2 * a.r / s)) / 2;
                    hi(a, function(t) {
                        t.r += l
                    }), hi(a, Oi), hi(a, function(t) {
                        t.r -= l
                    })
                }
                return Pi(a, c / 2, s / 2, n ? 1 : 1 / Math.max(2 * a.r / c, 2 * a.r / s)), u
            }
            var n, e = du.layout.hierarchy().sort(Ai),
                r = 0,
                i = [1, 1];
            return t.size = function(n) {
                return arguments.length ? (i = n, t) : i
            }, t.radius = function(e) {
                return arguments.length ? (n = null == e || "function" == typeof e ? e : +e, t) : n
            }, t.padding = function(n) {
                return arguments.length ? (r = +n, t) : r
            }, fi(t, e)
        }, du.layout.tree = function() {
            function t(t, i) {
                var f = u.call(this, t, i),
                    l = f[0],
                    h = n(l);
                if (hi(h, e), h.parent.m = -h.z, li(h, r), s) li(l, o);
                else {
                    var p = l,
                        d = l,
                        v = l;
                    li(l, function(t) {
                        t.x < p.x && (p = t), t.x > d.x && (d = t), t.depth > v.depth && (v = t)
                    });
                    var g = a(p, d) / 2 - p.x,
                        y = c[0] / (d.x + a(d, p) / 2 + g),
                        _ = c[1] / (v.depth || 1);
                    li(l, function(t) {
                        t.x = (t.x + g) * y, t.y = t.depth * _
                    })
                }
                return f
            }

            function n(t) {
                for (var n, e = {
                        A: null,
                        children: [t]
                    }, r = [e]; null != (n = r.pop());)
                    for (var i, o = n.children, u = 0, a = o.length; u < a; ++u) r.push((o[u] = i = {
                        _: o[u],
                        parent: n,
                        children: (i = o[u].children) && i.slice() || [],
                        A: null,
                        a: null,
                        z: 0,
                        m: 0,
                        c: 0,
                        s: 0,
                        t: null,
                        i: u
                    }).a = i);
                return e.children[0]
            }

            function e(t) {
                var n = t.children,
                    e = t.parent.children,
                    r = t.i ? e[t.i - 1] : null;
                if (n.length) {
                    Fi(t);
                    var o = (n[0].z + n[n.length - 1].z) / 2;
                    r ? (t.z = r.z + a(t._, r._), t.m = t.z - o) : t.z = o
                } else r && (t.z = r.z + a(t._, r._));
                t.parent.A = i(t, r, t.parent.A || e[0])
            }

            function r(t) {
                t._.x = t.z + t.parent.m, t.m += t.parent.m
            }

            function i(t, n, e) {
                if (n) {
                    for (var r, i = t, o = t, u = n, c = i.parent.children[0], s = i.m, f = o.m, l = u.m, h = c.m; u = ji(u), i = Ri(i), u && i;) c = Ri(c), o = ji(o), o.a = t, r = u.z + l - i.z - s + a(u._, i._), r > 0 && (Ui(Yi(u, t, e), t, r), s += r, f += r), l += u.m, s += i.m, h += c.m, f += o.m;
                    u && !ji(o) && (o.t = u, o.m += l - f), i && !Ri(c) && (c.t = i, c.m += s - h, e = t)
                }
                return e
            }

            function o(t) {
                t.x *= c[0], t.y = t.depth * c[1]
            }
            var u = du.layout.hierarchy().sort(null).value(null),
                a = qi,
                c = [1, 1],
                s = null;
            return t.separation = function(n) {
                return arguments.length ? (a = n, t) : a
            }, t.size = function(n) {
                return arguments.length ? (s = null == (c = n) ? o : null, t) : s ? null : c
            }, t.nodeSize = function(n) {
                return arguments.length ? (s = null == (c = n) ? null : o, t) : s ? c : null
            }, fi(t, u)
        }, du.layout.cluster = function() {
            function t(t, o) {
                var u, a = n.call(this, t, o),
                    c = a[0],
                    s = 0;
                hi(c, function(t) {
                    var n = t.children;
                    n && n.length ? (t.x = Bi(n), t.y = Hi(n)) : (t.x = u ? s += e(t, u) : 0, t.y = 0, u = t)
                });
                var f = Vi(c),
                    l = Xi(c),
                    h = f.x - e(f, l) / 2,
                    p = l.x + e(l, f) / 2;
                return hi(c, i ? function(t) {
                    t.x = (t.x - c.x) * r[0], t.y = (c.y - t.y) * r[1]
                } : function(t) {
                    t.x = (t.x - h) / (p - h) * r[0], t.y = (1 - (c.y ? t.y / c.y : 1)) * r[1]
                }), a
            }
            var n = du.layout.hierarchy().sort(null).value(null),
                e = qi,
                r = [1, 1],
                i = !1;
            return t.separation = function(n) {
                return arguments.length ? (e = n, t) : e
            }, t.size = function(n) {
                return arguments.length ? (i = null == (r = n), t) : i ? null : r
            }, t.nodeSize = function(n) {
                return arguments.length ? (i = null != (r = n), t) : i ? r : null
            }, fi(t, n)
        }, du.layout.treemap = function() {
            function t(t, n) {
                for (var e, r, i = -1, o = t.length; ++i < o;) r = (e = t[i]).value * (n < 0 ? 0 : n), e.area = isNaN(r) || r <= 0 ? 0 : r
            }

            function n(e) {
                var o = e.children;
                if (o && o.length) {
                    var u, a, c, s = h(e),
                        f = [],
                        l = o.slice(),
                        p = 1 / 0,
                        v = "slice" === d ? s.dx : "dice" === d ? s.dy : "slice-dice" === d ? 1 & e.depth ? s.dy : s.dx : Math.min(s.dx, s.dy);
                    for (t(l, s.dx * s.dy / e.value), f.area = 0;
                        (c = l.length) > 0;) f.push(u = l[c - 1]), f.area += u.area, "squarify" !== d || (a = r(f, v)) <= p ? (l.pop(), p = a) : (f.area -= f.pop().area, i(f, v, s, !1), v = Math.min(s.dx, s.dy), f.length = f.area = 0, p = 1 / 0);
                    f.length && (i(f, v, s, !0), f.length = f.area = 0), o.forEach(n)
                }
            }

            function e(n) {
                var r = n.children;
                if (r && r.length) {
                    var o, u = h(n),
                        a = r.slice(),
                        c = [];
                    for (t(a, u.dx * u.dy / n.value), c.area = 0; o = a.pop();) c.push(o), c.area += o.area, null != o.z && (i(c, o.z ? u.dx : u.dy, u, !a.length), c.length = c.area = 0);
                    r.forEach(e)
                }
            }

            function r(t, n) {
                for (var e, r = t.area, i = 0, o = 1 / 0, u = -1, a = t.length; ++u < a;)(e = t[u].area) && (e < o && (o = e), e > i && (i = e));
                return r *= r, n *= n, r ? Math.max(n * i * v / r, r / (n * o * v)) : 1 / 0
            }

            function i(t, n, e, r) {
                var i, o = -1,
                    u = t.length,
                    a = e.x,
                    c = e.y,
                    f = n ? s(t.area / n) : 0;
                if (n == e.dx) {
                    for ((r || f > e.dy) && (f = e.dy); ++o < u;) i = t[o], i.x = a, i.y = c, i.dy = f, a += i.dx = Math.min(e.x + e.dx - a, f ? s(i.area / f) : 0);
                    i.z = !0, i.dx += e.x + e.dx - a, e.y += f, e.dy -= f
                } else {
                    for ((r || f > e.dx) && (f = e.dx); ++o < u;) i = t[o], i.x = a, i.y = c, i.dx = f, c += i.dy = Math.min(e.y + e.dy - c, f ? s(i.area / f) : 0);
                    i.z = !1, i.dy += e.y + e.dy - c, e.x += f, e.dx -= f
                }
            }

            function u(r) {
                var i = a || c(r),
                    o = i[0];
                return o.x = o.y = 0, o.value ? (o.dx = f[0], o.dy = f[1]) : o.dx = o.dy = 0, a && c.revalue(o), t([o], o.dx * o.dy / o.value), (a ? e : n)(o), p && (a = i), i
            }
            var a, c = du.layout.hierarchy(),
                s = Math.round,
                f = [1, 1],
                l = null,
                h = Wi,
                p = !1,
                d = "squarify",
                v = .5 * (1 + Math.sqrt(5));
            return u.size = function(t) {
                return arguments.length ? (f = t, u) : f
            }, u.padding = function(t) {
                function n(n) {
                    var e = t.call(u, n, n.depth);
                    return null == e ? Wi(n) : Ki(n, "number" == typeof e ? [e, e, e, e] : e)
                }

                function e(n) {
                    return Ki(n, t)
                }
                if (!arguments.length) return l;
                var r;
                return h = null == (l = t) ? Wi : "function" === (r = "undefined" == typeof t ? "undefined" : o(t)) ? n : "number" === r ? (t = [t, t, t, t], e) : e, u
            }, u.round = function(t) {
                return arguments.length ? (s = t ? Math.round : Number, u) : s != Number
            }, u.sticky = function(t) {
                return arguments.length ? (p = t, a = null, u) : p
            }, u.ratio = function(t) {
                return arguments.length ? (v = t, u) : v
            }, u.mode = function(t) {
                return arguments.length ? (d = t + "", u) : d
            }, fi(u, c)
        }, du.random = {
            normal: function(t, n) {
                var e = arguments.length;
                return e < 2 && (n = 1), e < 1 && (t = 0),
                    function() {
                        var e, r, i;
                        do e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, i = e * e + r * r; while (!i || i > 1);
                        return t + n * e * Math.sqrt(-2 * Math.log(i) / i)
                    }
            },
            logNormal: function() {
                var t = du.random.normal.apply(du, arguments);
                return function() {
                    return Math.exp(t())
                }
            },
            bates: function(t) {
                var n = du.random.irwinHall(t);
                return function() {
                    return n() / t
                }
            },
            irwinHall: function(t) {
                return function() {
                    for (var n = 0, e = 0; e < t; e++) n += Math.random();
                    return n
                }
            }
        }, du.scale = {};
        var Ac = {
            floor: S,
            ceil: S
        };
        du.scale.linear = function() {
            return no([0, 1], [0, 1], Er, !1)
        };
        var Tc = {
            s: 1,
            g: 1,
            p: 1,
            r: 1,
            e: 1
        };
        du.scale.log = function() {
            return so(du.scale.linear().domain([0, 1]), 10, !0, [1, 10])
        };
        var zc = du.format(".0e"),
            Cc = {
                floor: function(t) {
                    return -Math.ceil(-t)
                },
                ceil: function(t) {
                    return -Math.floor(-t)
                }
            };
        du.scale.pow = function() {
            return fo(du.scale.linear(), 1, [0, 1])
        }, du.scale.sqrt = function() {
            return du.scale.pow().exponent(.5)
        }, du.scale.ordinal = function() {
            return ho([], {
                t: "range",
                a: [
                    []
                ]
            })
        }, du.scale.category10 = function() {
            return du.scale.ordinal().range(Oc)
        }, du.scale.category20 = function() {
            return du.scale.ordinal().range(Ic)
        }, du.scale.category20b = function() {
            return du.scale.ordinal().range(Lc)
        }, du.scale.category20c = function() {
            return du.scale.ordinal().range(Pc)
        };
        var Oc = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(Et),
            Ic = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(Et),
            Lc = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(Et),
            Pc = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(Et);
        du.scale.quantile = function() {
            return po([], [])
        }, du.scale.quantize = function() {
            return vo(0, 1, [0, 1])
        }, du.scale.threshold = function() {
            return go([.5], [0, 1])
        }, du.scale.identity = function() {
            return yo([0, 1])
        }, du.svg = {}, du.svg.arc = function() {
            function t() {
                var t = Math.max(0, +e.apply(this, arguments)),
                    s = Math.max(0, +r.apply(this, arguments)),
                    f = u.apply(this, arguments) - Xu,
                    l = a.apply(this, arguments) - Xu,
                    h = Math.abs(l - f),
                    p = f > l ? 0 : 1;
                if (s < t && (d = s, s = t, t = d), h >= Vu) return n(s, p) + (t ? n(t, 1 - p) : "") + "Z";
                var d, v, g, y, _, m, x, b, w, M, S, E, k = 0,
                    N = 0,
                    A = [];
                if ((y = (+c.apply(this, arguments) || 0) / 2) && (g = o === Dc ? Math.sqrt(t * t + s * s) : +o.apply(this, arguments), p || (N *= -1), s && (N = at(g / s * Math.sin(y))), t && (k = at(g / t * Math.sin(y)))), s) {
                    _ = s * Math.cos(f + N), m = s * Math.sin(f + N), x = s * Math.cos(l - N), b = s * Math.sin(l - N);
                    var T = Math.abs(l - f - 2 * N) <= Hu ? 0 : 1;
                    if (N && So(_, m, x, b) === p ^ T) {
                        var z = (f + l) / 2;
                        _ = s * Math.cos(z), m = s * Math.sin(z), x = b = null
                    }
                } else _ = m = 0;
                if (t) {
                    w = t * Math.cos(l - k), M = t * Math.sin(l - k), S = t * Math.cos(f + k), E = t * Math.sin(f + k);
                    var C = Math.abs(f - l + 2 * k) <= Hu ? 0 : 1;
                    if (k && So(w, M, S, E) === 1 - p ^ C) {
                        var O = (f + l) / 2;
                        w = t * Math.cos(O), M = t * Math.sin(O), S = E = null
                    }
                } else w = M = 0;
                if (h > Fu && (d = Math.min(Math.abs(s - t) / 2, +i.apply(this, arguments))) > .001) {
                    v = t < s ^ p ? 0 : 1;
                    var I = d,
                        L = d;
                    if (h < Hu) {
                        var P = null == S ? [w, M] : null == x ? [_, m] : Ue([_, m], [S, E], [x, b], [w, M]),
                            D = _ - P[0],
                            q = m - P[1],
                            R = x - P[0],
                            j = b - P[1],
                            U = 1 / Math.sin(Math.acos((D * R + q * j) / (Math.sqrt(D * D + q * q) * Math.sqrt(R * R + j * j))) / 2),
                            F = Math.sqrt(P[0] * P[0] + P[1] * P[1]);
                        L = Math.min(d, (t - F) / (U - 1)), I = Math.min(d, (s - F) / (U + 1))
                    }
                    if (null != x) {
                        var Y = Eo(null == S ? [w, M] : [S, E], [_, m], s, I, p),
                            H = Eo([x, b], [w, M], s, I, p);
                        d === I ? A.push("M", Y[0], "A", I, ",", I, " 0 0,", v, " ", Y[1], "A", s, ",", s, " 0 ", 1 - p ^ So(Y[1][0], Y[1][1], H[1][0], H[1][1]), ",", p, " ", H[1], "A", I, ",", I, " 0 0,", v, " ", H[0]) : A.push("M", Y[0], "A", I, ",", I, " 0 1,", v, " ", H[0])
                    } else A.push("M", _, ",", m);
                    if (null != S) {
                        var B = Eo([_, m], [S, E], t, -L, p),
                            V = Eo([w, M], null == x ? [_, m] : [x, b], t, -L, p);
                        d === L ? A.push("L", V[0], "A", L, ",", L, " 0 0,", v, " ", V[1], "A", t, ",", t, " 0 ", p ^ So(V[1][0], V[1][1], B[1][0], B[1][1]), ",", 1 - p, " ", B[1], "A", L, ",", L, " 0 0,", v, " ", B[0]) : A.push("L", V[0], "A", L, ",", L, " 0 0,", v, " ", B[0])
                    } else A.push("L", w, ",", M)
                } else A.push("M", _, ",", m), null != x && A.push("A", s, ",", s, " 0 ", T, ",", p, " ", x, ",", b), A.push("L", w, ",", M), null != S && A.push("A", t, ",", t, " 0 ", C, ",", 1 - p, " ", S, ",", E);
                return A.push("Z"), A.join("")
            }

            function n(t, n) {
                return "M0," + t + "A" + t + "," + t + " 0 1," + n + " 0," + -t + "A" + t + "," + t + " 0 1," + n + " 0," + t
            }
            var e = mo,
                r = xo,
                i = _o,
                o = Dc,
                u = bo,
                a = wo,
                c = Mo;
            return t.innerRadius = function(n) {
                return arguments.length ? (e = Ot(n), t) : e
            }, t.outerRadius = function(n) {
                return arguments.length ? (r = Ot(n), t) : r
            }, t.cornerRadius = function(n) {
                return arguments.length ? (i = Ot(n), t) : i
            }, t.padRadius = function(n) {
                return arguments.length ? (o = n == Dc ? Dc : Ot(n), t) : o
            }, t.startAngle = function(n) {
                return arguments.length ? (u = Ot(n), t) : u
            }, t.endAngle = function(n) {
                return arguments.length ? (a = Ot(n), t) : a
            }, t.padAngle = function(n) {
                return arguments.length ? (c = Ot(n), t) : c
            }, t.centroid = function() {
                var t = (+e.apply(this, arguments) + +r.apply(this, arguments)) / 2,
                    n = (+u.apply(this, arguments) + +a.apply(this, arguments)) / 2 - Xu;
                return [Math.cos(n) * t, Math.sin(n) * t]
            }, t
        };
        var Dc = "auto";
        du.svg.line = function() {
            return ko(S)
        };
        var qc = du.map({
            linear: No,
            "linear-closed": Ao,
            step: To,
            "step-before": zo,
            "step-after": Co,
            basis: qo,
            "basis-open": Ro,
            "basis-closed": jo,
            bundle: Uo,
            cardinal: Lo,
            "cardinal-open": Oo,
            "cardinal-closed": Io,
            monotone: Xo
        });
        qc.forEach(function(t, n) {
            n.key = t, n.closed = /-closed$/.test(t)
        });
        var Rc = [0, 2 / 3, 1 / 3, 0],
            jc = [0, 1 / 3, 2 / 3, 0],
            Uc = [0, 1 / 6, 2 / 3, 1 / 6];
        du.svg.line.radial = function() {
            var t = ko(Wo);
            return t.radius = t.x, delete t.x, t.angle = t.y, delete t.y, t
        }, zo.reverse = Co, Co.reverse = zo, du.svg.area = function() {
            return Ko(S)
        }, du.svg.area.radial = function() {
            var t = Ko(Wo);
            return t.radius = t.x, delete t.x, t.innerRadius = t.x0, delete t.x0, t.outerRadius = t.x1, delete t.x1, t.angle = t.y, delete t.y, t.startAngle = t.y0, delete t.y0, t.endAngle = t.y1, delete t.y1, t
        }, du.svg.chord = function() {
            function t(t, a) {
                var c = n(this, o, t, a),
                    s = n(this, u, t, a);
                return "M" + c.p0 + r(c.r, c.p1, c.a1 - c.a0) + (e(c, s) ? i(c.r, c.p1, c.r, c.p0) : i(c.r, c.p1, s.r, s.p0) + r(s.r, s.p1, s.a1 - s.a0) + i(s.r, s.p1, c.r, c.p0)) + "Z"
            }

            function n(t, n, e, r) {
                var i = n.call(t, e, r),
                    o = a.call(t, i, r),
                    u = c.call(t, i, r) - Xu,
                    f = s.call(t, i, r) - Xu;
                return {
                    r: o,
                    a0: u,
                    a1: f,
                    p0: [o * Math.cos(u), o * Math.sin(u)],
                    p1: [o * Math.cos(f), o * Math.sin(f)]
                }
            }

            function e(t, n) {
                return t.a0 == n.a0 && t.a1 == n.a1
            }

            function r(t, n, e) {
                return "A" + t + "," + t + " 0 " + +(e > Hu) + ",1 " + n
            }

            function i(t, n, e, r) {
                return "Q 0,0 " + r
            }
            var o = Ee,
                u = ke,
                a = Jo,
                c = bo,
                s = wo;
            return t.radius = function(n) {
                return arguments.length ? (a = Ot(n), t) : a
            }, t.source = function(n) {
                return arguments.length ? (o = Ot(n), t) : o
            }, t.target = function(n) {
                return arguments.length ? (u = Ot(n), t) : u
            }, t.startAngle = function(n) {
                return arguments.length ? (c = Ot(n), t) : c
            }, t.endAngle = function(n) {
                return arguments.length ? (s = Ot(n), t) : s
            }, t
        }, du.svg.diagonal = function() {
            function t(t, i) {
                var o = n.call(this, t, i),
                    u = e.call(this, t, i),
                    a = (o.y + u.y) / 2,
                    c = [o, {
                        x: o.x,
                        y: a
                    }, {
                        x: u.x,
                        y: a
                    }, u];
                return c = c.map(r), "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3]
            }
            var n = Ee,
                e = ke,
                r = Zo;
            return t.source = function(e) {
                return arguments.length ? (n = Ot(e), t) : n
            }, t.target = function(n) {
                return arguments.length ? (e = Ot(n), t) : e
            }, t.projection = function(n) {
                return arguments.length ? (r = n, t) : r
            }, t
        }, du.svg.diagonal.radial = function() {
            var t = du.svg.diagonal(),
                n = Zo,
                e = t.projection;
            return t.projection = function(t) {
                return arguments.length ? e($o(n = t)) : n
            }, t
        }, du.svg.symbol = function() {
            function t(t, r) {
                return (Fc.get(n.call(this, t, r)) || tu)(e.call(this, t, r))
            }
            var n = Qo,
                e = Go;
            return t.type = function(e) {
                return arguments.length ? (n = Ot(e), t) : n
            }, t.size = function(n) {
                return arguments.length ? (e = Ot(n), t) : e
            }, t
        };
        var Fc = du.map({
            circle: tu,
            cross: function(t) {
                var n = Math.sqrt(t / 5) / 2;
                return "M" + -3 * n + "," + -n + "H" + -n + "V" + -3 * n + "H" + n + "V" + -n + "H" + 3 * n + "V" + n + "H" + n + "V" + 3 * n + "H" + -n + "V" + n + "H" + -3 * n + "Z"
            },
            diamond: function(t) {
                var n = Math.sqrt(t / (2 * Hc)),
                    e = n * Hc;
                return "M0," + -n + "L" + e + ",0 0," + n + " " + -e + ",0Z"
            },
            square: function(t) {
                var n = Math.sqrt(t) / 2;
                return "M" + -n + "," + -n + "L" + n + "," + -n + " " + n + "," + n + " " + -n + "," + n + "Z"
            },
            "triangle-down": function(t) {
                var n = Math.sqrt(t / Yc),
                    e = n * Yc / 2;
                return "M0," + e + "L" + n + "," + -e + " " + -n + "," + -e + "Z"
            },
            "triangle-up": function(t) {
                var n = Math.sqrt(t / Yc),
                    e = n * Yc / 2;
                return "M0," + -e + "L" + n + "," + e + " " + -n + "," + e + "Z"
            }
        });
        du.svg.symbolTypes = Fc.keys();
        var Yc = Math.sqrt(3),
            Hc = Math.tan(30 * Wu);
        Iu.transition = function(t) {
            for (var n, e, r = Bc || ++Kc, i = ou(t), o = [], u = Vc || {
                    time: Date.now(),
                    ease: Or,
                    delay: 0,
                    duration: 250
                }, a = -1, c = this.length; ++a < c;) {
                o.push(n = []);
                for (var s = this[a], f = -1, l = s.length; ++f < l;)(e = s[f]) && uu(e, f, i, r, u), n.push(e)
            }
            return eu(o, i, r)
        }, Iu.interrupt = function(t) {
            return this.each(null == t ? Xc : nu(ou(t)))
        };
        var Bc, Vc, Xc = nu(ou()),
            Wc = [],
            Kc = 0;
        Wc.call = Iu.call, Wc.empty = Iu.empty, Wc.node = Iu.node, Wc.size = Iu.size, du.transition = function(t, n) {
            return t && t.transition ? Bc ? t.transition(n) : t : du.selection().transition(t)
        }, du.transition.prototype = Wc, Wc.select = function(t) {
            var n, e, r, i = this.id,
                o = this.namespace,
                u = [];
            t = L(t);
            for (var a = -1, c = this.length; ++a < c;) {
                u.push(n = []);
                for (var s = this[a], f = -1, l = s.length; ++f < l;)(r = s[f]) && (e = t.call(r, r.__data__, f, a)) ? ("__data__" in r && (e.__data__ = r.__data__), uu(e, f, o, i, r[o][i]), n.push(e)) : n.push(null)
            }
            return eu(u, o, i)
        }, Wc.selectAll = function(t) {
            var n, e, r, i, o, u = this.id,
                a = this.namespace,
                c = [];
            t = P(t);
            for (var s = -1, f = this.length; ++s < f;)
                for (var l = this[s], h = -1, p = l.length; ++h < p;)
                    if (r = l[h]) {
                        o = r[a][u], e = t.call(r, r.__data__, h, s), c.push(n = []);
                        for (var d = -1, v = e.length; ++d < v;)(i = e[d]) && uu(i, d, a, u, o), n.push(i)
                    }
            return eu(c, a, u)
        }, Wc.filter = function(t) {
            var n, e, r, i = [];
            "function" != typeof t && (t = W(t));
            for (var o = 0, u = this.length; o < u; o++) {
                i.push(n = []);
                for (var e = this[o], a = 0, c = e.length; a < c; a++)(r = e[a]) && t.call(r, r.__data__, a, o) && n.push(r)
            }
            return eu(i, this.namespace, this.id)
        }, Wc.tween = function(t, n) {
            var e = this.id,
                r = this.namespace;
            return arguments.length < 2 ? this.node()[r][e].tween.get(t) : J(this, null == n ? function(n) {
                n[r][e].tween.remove(t)
            } : function(i) {
                i[r][e].tween.set(t, n)
            })
        }, Wc.attr = function(t, n) {
            function e() {
                this.removeAttribute(a)
            }

            function r() {
                this.removeAttributeNS(a.space, a.local)
            }

            function i(t) {
                return null == t ? e : (t += "", function() {
                    var n, e = this.getAttribute(a);
                    return e !== t && (n = u(e, t), function(t) {
                        this.setAttribute(a, n(t))
                    })
                })
            }

            function o(t) {
                return null == t ? r : (t += "", function() {
                    var n, e = this.getAttributeNS(a.space, a.local);
                    return e !== t && (n = u(e, t), function(t) {
                        this.setAttributeNS(a.space, a.local, n(t))
                    })
                })
            }
            if (arguments.length < 2) {
                for (n in t) this.attr(n, t[n]);
                return this
            }
            var u = "transform" == t ? Qr : Er,
                a = du.ns.qualify(t);
            return ru(this, "attr." + t, n, a.local ? o : i)
        }, Wc.attrTween = function(t, n) {
            function e(t, e) {
                var r = n.call(this, t, e, this.getAttribute(i));
                return r && function(t) {
                    this.setAttribute(i, r(t))
                }
            }

            function r(t, e) {
                var r = n.call(this, t, e, this.getAttributeNS(i.space, i.local));
                return r && function(t) {
                    this.setAttributeNS(i.space, i.local, r(t))
                }
            }
            var i = du.ns.qualify(t);
            return this.tween("attr." + t, i.local ? r : e)
        }, Wc.style = function(t, n, e) {
            function r() {
                this.style.removeProperty(t)
            }

            function i(n) {
                return null == n ? r : (n += "", function() {
                    var r, i = a(this).getComputedStyle(this, null).getPropertyValue(t);
                    return i !== n && (r = Er(i, n), function(n) {
                        this.style.setProperty(t, r(n), e)
                    })
                })
            }
            var o = arguments.length;
            if (o < 3) {
                if ("string" != typeof t) {
                    o < 2 && (n = "");
                    for (e in t) this.style(e, t[e], n);
                    return this
                }
                e = ""
            }
            return ru(this, "style." + t, n, i)
        }, Wc.styleTween = function(t, n, e) {
            function r(r, i) {
                var o = n.call(this, r, i, a(this).getComputedStyle(this, null).getPropertyValue(t));
                return o && function(n) {
                    this.style.setProperty(t, o(n), e)
                }
            }
            return arguments.length < 3 && (e = ""), this.tween("style." + t, r)
        }, Wc.text = function(t) {
            return ru(this, "text", t, iu)
        }, Wc.remove = function() {
            var t = this.namespace;
            return this.each("end.transition", function() {
                var n;
                this[t].count < 2 && (n = this.parentNode) && n.removeChild(this)
            })
        }, Wc.ease = function(t) {
            var n = this.id,
                e = this.namespace;
            return arguments.length < 1 ? this.node()[e][n].ease : ("function" != typeof t && (t = du.ease.apply(du, arguments)), J(this, function(r) {
                r[e][n].ease = t
            }))
        }, Wc.delay = function(t) {
            var n = this.id,
                e = this.namespace;
            return arguments.length < 1 ? this.node()[e][n].delay : J(this, "function" == typeof t ? function(r, i, o) {
                r[e][n].delay = +t.call(r, r.__data__, i, o)
            } : (t = +t, function(r) {
                r[e][n].delay = t
            }))
        }, Wc.duration = function(t) {
            var n = this.id,
                e = this.namespace;
            return arguments.length < 1 ? this.node()[e][n].duration : J(this, "function" == typeof t ? function(r, i, o) {
                r[e][n].duration = Math.max(1, t.call(r, r.__data__, i, o))
            } : (t = Math.max(1, t), function(r) {
                r[e][n].duration = t
            }))
        }, Wc.each = function(t, n) {
            var e = this.id,
                r = this.namespace;
            if (arguments.length < 2) {
                var i = Vc,
                    o = Bc;
                try {
                    Bc = e, J(this, function(n, i, o) {
                        Vc = n[r][e], t.call(n, n.__data__, i, o)
                    })
                } finally {
                    Vc = i, Bc = o
                }
            } else J(this, function(i) {
                var o = i[r][e];
                (o.event || (o.event = du.dispatch("start", "end", "interrupt"))).on(t, n)
            });
            return this
        }, Wc.transition = function() {
            for (var t, n, e, r, i = this.id, o = ++Kc, u = this.namespace, a = [], c = 0, s = this.length; c < s; c++) {
                a.push(t = []);
                for (var n = this[c], f = 0, l = n.length; f < l; f++)(e = n[f]) && (r = e[u][i], uu(e, f, u, o, {
                    time: r.time,
                    ease: r.ease,
                    delay: r.delay + r.duration,
                    duration: r.duration
                })), t.push(e)
            }
            return eu(a, u, o)
        }, du.svg.axis = function() {
            function t(t) {
                t.each(function() {
                    var t, s = du.select(this),
                        f = this.__chart__ || e,
                        l = this.__chart__ = e.copy(),
                        h = null == c ? l.ticks ? l.ticks.apply(l, a) : l.domain() : c,
                        p = null == n ? l.tickFormat ? l.tickFormat.apply(l, a) : S : n,
                        d = s.selectAll(".tick").data(h, l),
                        v = d.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Fu),
                        g = du.transition(d.exit()).style("opacity", Fu).remove(),
                        y = du.transition(d.order()).style("opacity", 1),
                        _ = Math.max(i, 0) + u,
                        m = Zi(l),
                        x = s.selectAll(".domain").data([0]),
                        b = (x.enter().append("path").attr("class", "domain"), du.transition(x));
                    v.append("line"), v.append("text");
                    var w, M, E, k, N = v.select("line"),
                        A = y.select("line"),
                        T = d.select("text").text(p),
                        z = v.select("text"),
                        C = y.select("text"),
                        O = "top" === r || "left" === r ? -1 : 1;
                    if ("bottom" === r || "top" === r ? (t = au, w = "x", E = "y", M = "x2", k = "y2", T.attr("dy", O < 0 ? "0em" : ".71em").style("text-anchor", "middle"), b.attr("d", "M" + m[0] + "," + O * o + "V0H" + m[1] + "V" + O * o)) : (t = cu, w = "y", E = "x", M = "y2", k = "x2", T.attr("dy", ".32em").style("text-anchor", O < 0 ? "end" : "start"), b.attr("d", "M" + O * o + "," + m[0] + "H0V" + m[1] + "H" + O * o)), N.attr(k, O * i), z.attr(E, O * _), A.attr(M, 0).attr(k, O * i), C.attr(w, 0).attr(E, O * _), l.rangeBand) {
                        var I = l,
                            L = I.rangeBand() / 2;
                        f = l = function(t) {
                            return I(t) + L
                        }
                    } else f.rangeBand ? f = l : g.call(t, l, f);
                    v.call(t, f, l), y.call(t, l, l)
                })
            }
            var n, e = du.scale.linear(),
                r = Jc,
                i = 6,
                o = 6,
                u = 3,
                a = [10],
                c = null;
            return t.scale = function(n) {
                return arguments.length ? (e = n, t) : e
            }, t.orient = function(n) {
                return arguments.length ? (r = n in Zc ? n + "" : Jc, t) : r
            }, t.ticks = function() {
                return arguments.length ? (a = gu(arguments), t) : a
            }, t.tickValues = function(n) {
                return arguments.length ? (c = n, t) : c
            }, t.tickFormat = function(e) {
                return arguments.length ? (n = e, t) : n
            }, t.tickSize = function(n) {
                var e = arguments.length;
                return e ? (i = +n, o = +arguments[e - 1], t) : i
            }, t.innerTickSize = function(n) {
                return arguments.length ? (i = +n, t) : i
            }, t.outerTickSize = function(n) {
                return arguments.length ? (o = +n, t) : o
            }, t.tickPadding = function(n) {
                return arguments.length ? (u = +n, t) : u
            }, t.tickSubdivide = function() {
                return arguments.length && t
            }, t
        };
        var Jc = "bottom",
            Zc = {
                top: 1,
                right: 1,
                bottom: 1,
                left: 1
            };
        du.svg.brush = function() {
            function t(o) {
                o.each(function() {
                    var o = du.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", i).on("touchstart.brush", i),
                        u = o.selectAll(".background").data([0]);
                    u.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), o.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                    var a = o.selectAll(".resize").data(v, S);
                    a.exit().remove(), a.enter().append("g").attr("class", function(t) {
                        return "resize " + t
                    }).style("cursor", function(t) {
                        return $c[t]
                    }).append("rect").attr("x", function(t) {
                        return /[ew]$/.test(t) ? -3 : null
                    }).attr("y", function(t) {
                        return /^[ns]/.test(t) ? -3 : null
                    }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), a.style("display", t.empty() ? "none" : null);
                    var c, l = du.transition(o),
                        h = du.transition(u);
                    s && (c = Zi(s), h.attr("x", c[0]).attr("width", c[1] - c[0]), e(l)), f && (c = Zi(f), h.attr("y", c[0]).attr("height", c[1] - c[0]), r(l)), n(l)
                })
            }

            function n(t) {
                t.selectAll(".resize").attr("transform", function(t) {
                    return "translate(" + l[+/e$/.test(t)] + "," + h[+/^s/.test(t)] + ")"
                })
            }

            function e(t) {
                t.select(".extent").attr("x", l[0]), t.selectAll(".extent,.n>rect,.s>rect").attr("width", l[1] - l[0])
            }

            function r(t) {
                t.select(".extent").attr("y", h[0]), t.selectAll(".extent,.e>rect,.w>rect").attr("height", h[1] - h[0])
            }

            function i() {
                function i() {
                    32 == du.event.keyCode && (A || (m = null, C[0] -= l[1], C[1] -= h[1], A = 2), z())
                }

                function v() {
                    32 == du.event.keyCode && 2 == A && (C[0] += l[1], C[1] += h[1], A = 0, z())
                }

                function g() {
                    var t = du.mouse(b),
                        i = !1;
                    x && (t[0] += x[0], t[1] += x[1]), A || (du.event.altKey ? (m || (m = [(l[0] + l[1]) / 2, (h[0] + h[1]) / 2]), C[0] = l[+(t[0] < m[0])], C[1] = h[+(t[1] < m[1])]) : m = null), k && y(t, s, 0) && (e(S), i = !0), N && y(t, f, 1) && (r(S), i = !0), i && (n(S), M({
                        type: "brush",
                        mode: A ? "move" : "resize"
                    }))
                }

                function y(t, n, e) {
                    var r, i, a = Zi(n),
                        c = a[0],
                        s = a[1],
                        f = C[e],
                        v = e ? h : l,
                        g = v[1] - v[0];
                    if (A && (c -= f, s -= g + f), r = (e ? d : p) ? Math.max(c, Math.min(s, t[e])) : t[e], A ? i = (r += f) + g : (m && (f = Math.max(c, Math.min(s, 2 * m[e] - r))), f < r ? (i = r, r = f) : i = f), v[0] != r || v[1] != i) return e ? u = null : o = null, v[0] = r, v[1] = i, !0
                }

                function _() {
                    g(), S.style("pointer-events", "all").selectAll(".resize").style("display", t.empty() ? "none" : null), du.select("body").style("cursor", null), O.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), T(), M({
                        type: "brushend"
                    })
                }
                var m, x, b = this,
                    w = du.select(du.event.target),
                    M = c.of(b, arguments),
                    S = du.select(b),
                    E = w.datum(),
                    k = !/^(n|s)$/.test(E) && s,
                    N = !/^(e|w)$/.test(E) && f,
                    A = w.classed("extent"),
                    T = nt(b),
                    C = du.mouse(b),
                    O = du.select(a(b)).on("keydown.brush", i).on("keyup.brush", v);
                if (du.event.changedTouches ? O.on("touchmove.brush", g).on("touchend.brush", _) : O.on("mousemove.brush", g).on("mouseup.brush", _),
                    S.interrupt().selectAll("*").interrupt(), A) C[0] = l[0] - C[0], C[1] = h[0] - C[1];
                else if (E) {
                    var I = +/w$/.test(E),
                        L = +/^n/.test(E);
                    x = [l[1 - I] - C[0], h[1 - L] - C[1]], C[0] = l[I], C[1] = h[L]
                } else du.event.altKey && (m = C.slice());
                S.style("pointer-events", "none").selectAll(".resize").style("display", null), du.select("body").style("cursor", w.style("cursor")), M({
                    type: "brushstart"
                }), g()
            }
            var o, u, c = O(t, "brushstart", "brush", "brushend"),
                s = null,
                f = null,
                l = [0, 0],
                h = [0, 0],
                p = !0,
                d = !0,
                v = Gc[0];
            return t.event = function(t) {
                t.each(function() {
                    var t = c.of(this, arguments),
                        n = {
                            x: l,
                            y: h,
                            i: o,
                            j: u
                        },
                        e = this.__chart__ || n;
                    this.__chart__ = n, Bc ? du.select(this).transition().each("start.brush", function() {
                        o = e.i, u = e.j, l = e.x, h = e.y, t({
                            type: "brushstart"
                        })
                    }).tween("brush:brush", function() {
                        var e = kr(l, n.x),
                            r = kr(h, n.y);
                        return o = u = null,
                            function(i) {
                                l = n.x = e(i), h = n.y = r(i), t({
                                    type: "brush",
                                    mode: "resize"
                                })
                            }
                    }).each("end.brush", function() {
                        o = n.i, u = n.j, t({
                            type: "brush",
                            mode: "resize"
                        }), t({
                            type: "brushend"
                        })
                    }) : (t({
                        type: "brushstart"
                    }), t({
                        type: "brush",
                        mode: "resize"
                    }), t({
                        type: "brushend"
                    }))
                })
            }, t.x = function(n) {
                return arguments.length ? (s = n, v = Gc[!s << 1 | !f], t) : s
            }, t.y = function(n) {
                return arguments.length ? (f = n, v = Gc[!s << 1 | !f], t) : f
            }, t.clamp = function(n) {
                return arguments.length ? (s && f ? (p = !!n[0], d = !!n[1]) : s ? p = !!n : f && (d = !!n), t) : s && f ? [p, d] : s ? p : f ? d : null
            }, t.extent = function(n) {
                var e, r, i, a, c;
                return arguments.length ? (s && (e = n[0], r = n[1], f && (e = e[0], r = r[0]), o = [e, r], s.invert && (e = s(e), r = s(r)), r < e && (c = e, e = r, r = c), e == l[0] && r == l[1] || (l = [e, r])), f && (i = n[0], a = n[1], s && (i = i[1], a = a[1]), u = [i, a], f.invert && (i = f(i), a = f(a)), a < i && (c = i, i = a, a = c), i == h[0] && a == h[1] || (h = [i, a])), t) : (s && (o ? (e = o[0], r = o[1]) : (e = l[0], r = l[1], s.invert && (e = s.invert(e), r = s.invert(r)), r < e && (c = e, e = r, r = c))), f && (u ? (i = u[0], a = u[1]) : (i = h[0], a = h[1], f.invert && (i = f.invert(i), a = f.invert(a)), a < i && (c = i, i = a, a = c))), s && f ? [
                    [e, i],
                    [r, a]
                ] : s ? [e, r] : f && [i, a])
            }, t.clear = function() {
                return t.empty() || (l = [0, 0], h = [0, 0], o = u = null), t
            }, t.empty = function() {
                return !!s && l[0] == l[1] || !!f && h[0] == h[1]
            }, du.rebind(t, c, "on")
        };
        var $c = {
                n: "ns-resize",
                e: "ew-resize",
                s: "ns-resize",
                w: "ew-resize",
                nw: "nwse-resize",
                ne: "nesw-resize",
                se: "nwse-resize",
                sw: "nesw-resize"
            },
            Gc = [
                ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
                ["e", "w"],
                ["n", "s"],
                []
            ],
            Qc = _a.format = Sa.timeFormat,
            ts = Qc.utc,
            ns = ts("%Y-%m-%dT%H:%M:%S.%LZ");
        Qc.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? su : ns, su.parse = function(t) {
            var n = new Date(t);
            return isNaN(n) ? null : n
        }, su.toString = ns.toString, _a.second = Xt(function(t) {
            return new ma(1e3 * Math.floor(t / 1e3))
        }, function(t, n) {
            t.setTime(t.getTime() + 1e3 * Math.floor(n))
        }, function(t) {
            return t.getSeconds()
        }), _a.seconds = _a.second.range, _a.seconds.utc = _a.second.utc.range, _a.minute = Xt(function(t) {
            return new ma(6e4 * Math.floor(t / 6e4))
        }, function(t, n) {
            t.setTime(t.getTime() + 6e4 * Math.floor(n))
        }, function(t) {
            return t.getMinutes()
        }), _a.minutes = _a.minute.range, _a.minutes.utc = _a.minute.utc.range, _a.hour = Xt(function(t) {
            var n = t.getTimezoneOffset() / 60;
            return new ma(36e5 * (Math.floor(t / 36e5 - n) + n))
        }, function(t, n) {
            t.setTime(t.getTime() + 36e5 * Math.floor(n))
        }, function(t) {
            return t.getHours()
        }), _a.hours = _a.hour.range, _a.hours.utc = _a.hour.utc.range, _a.month = Xt(function(t) {
            return t = _a.day(t), t.setDate(1), t
        }, function(t, n) {
            t.setMonth(t.getMonth() + n)
        }, function(t) {
            return t.getMonth()
        }), _a.months = _a.month.range, _a.months.utc = _a.month.utc.range;
        var es = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
            rs = [
                [_a.second, 1],
                [_a.second, 5],
                [_a.second, 15],
                [_a.second, 30],
                [_a.minute, 1],
                [_a.minute, 5],
                [_a.minute, 15],
                [_a.minute, 30],
                [_a.hour, 1],
                [_a.hour, 3],
                [_a.hour, 6],
                [_a.hour, 12],
                [_a.day, 1],
                [_a.day, 2],
                [_a.week, 1],
                [_a.month, 1],
                [_a.month, 3],
                [_a.year, 1]
            ],
            is = Qc.multi([
                [".%L", function(t) {
                    return t.getMilliseconds()
                }],
                [":%S", function(t) {
                    return t.getSeconds()
                }],
                ["%I:%M", function(t) {
                    return t.getMinutes()
                }],
                ["%I %p", function(t) {
                    return t.getHours()
                }],
                ["%a %d", function(t) {
                    return t.getDay() && 1 != t.getDate()
                }],
                ["%b %d", function(t) {
                    return 1 != t.getDate()
                }],
                ["%B", function(t) {
                    return t.getMonth()
                }],
                ["%Y", Dn]
            ]),
            os = {
                range: function(t, n, e) {
                    return du.range(Math.ceil(t / e) * e, +n, e).map(lu)
                },
                floor: S,
                ceil: S
            };
        rs.year = _a.year, _a.scale = function() {
            return fu(du.scale.linear(), rs, is)
        };
        var us = rs.map(function(t) {
                return [t[0].utc, t[1]]
            }),
            as = ts.multi([
                [".%L", function(t) {
                    return t.getUTCMilliseconds()
                }],
                [":%S", function(t) {
                    return t.getUTCSeconds()
                }],
                ["%I:%M", function(t) {
                    return t.getUTCMinutes()
                }],
                ["%I %p", function(t) {
                    return t.getUTCHours()
                }],
                ["%a %d", function(t) {
                    return t.getUTCDay() && 1 != t.getUTCDate()
                }],
                ["%b %d", function(t) {
                    return 1 != t.getUTCDate()
                }],
                ["%B", function(t) {
                    return t.getUTCMonth()
                }],
                ["%Y", Dn]
            ]);
        us.year = _a.year.utc, _a.scale.utc = function() {
            return fu(du.scale.linear(), us, as)
        }, du.text = It(function(t) {
            return t.responseText
        }), du.json = function(t, n) {
            return Lt(t, "application/json", hu, n)
        }, du.html = function(t, n) {
            return Lt(t, "text/html", pu, n)
        }, du.xml = It(function(t) {
            return t.responseXML
        }), this.d3 = du, r = du, i = "function" == typeof r ? r.call(n, e, n, t) : r, !(void 0 !== i && (t.exports = i))
    }()
}, function(t, n, e) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = e(44),
        o = e(66),
        u = r(o),
        a = e(68),
        c = r(a),
        s = e(36),
        f = r(s);
    n.default = function() {
        var t = (0, i.combineReducers)({
                featuresFilter: u.default,
                dataset: c.default
            }),
            n = (0, i.createStore)(t, (0, i.compose)(window.devToolsExtension ? window.devToolsExtension() : function(t) {
                return t
            }));
        return f.default.init(n), n
    }
}, function(t, n, e) {
    (function(t) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function i() {}
        n.__esModule = !0, n.compose = n.applyMiddleware = n.bindActionCreators = n.combineReducers = n.createStore = void 0;
        var o = e(46),
            u = r(o),
            a = e(61),
            c = r(a),
            s = e(63),
            f = r(s),
            l = e(64),
            h = r(l),
            p = e(65),
            d = r(p),
            v = e(62),
            g = r(v);
        "production" !== t.env.NODE_ENV && "string" == typeof i.name && "isCrushed" !== i.name && (0, g.default)("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build."), n.createStore = u.default, n.combineReducers = c.default, n.bindActionCreators = f.default, n.applyMiddleware = h.default, n.compose = d.default
    }).call(n, e(45))
}, function(t, n) {
    function e() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(t) {
        if (f === setTimeout) return setTimeout(t, 0);
        if ((f === e || !f) && setTimeout) return f = setTimeout, setTimeout(t, 0);
        try {
            return f(t, 0)
        } catch (n) {
            try {
                return f.call(null, t, 0)
            } catch (n) {
                return f.call(this, t, 0)
            }
        }
    }

    function o(t) {
        if (l === clearTimeout) return clearTimeout(t);
        if ((l === r || !l) && clearTimeout) return l = clearTimeout, clearTimeout(t);
        try {
            return l(t)
        } catch (n) {
            try {
                return l.call(null, t)
            } catch (n) {
                return l.call(this, t)
            }
        }
    }

    function u() {
        v && p && (v = !1, p.length ? d = p.concat(d) : g = -1, d.length && a())
    }

    function a() {
        if (!v) {
            var t = i(u);
            v = !0;
            for (var n = d.length; n;) {
                for (p = d, d = []; ++g < n;) p && p[g].run();
                g = -1, n = d.length
            }
            p = null, v = !1, o(t)
        }
    }

    function c(t, n) {
        this.fun = t, this.array = n
    }

    function s() {}
    var f, l, h = t.exports = {};
    ! function() {
        try {
            f = "function" == typeof setTimeout ? setTimeout : e
        } catch (t) {
            f = e
        }
        try {
            l = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (t) {
            l = r
        }
    }();
    var p, d = [],
        v = !1,
        g = -1;
    h.nextTick = function(t) {
        var n = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
        d.push(new c(t, n)), 1 !== d.length || v || i(a)
    }, c.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = s, h.addListener = s, h.once = s, h.off = s, h.removeListener = s, h.removeAllListeners = s, h.emit = s, h.prependListener = s, h.prependOnceListener = s, h.listeners = function(t) {
        return []
    }, h.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, h.cwd = function() {
        return "/"
    }, h.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, h.umask = function() {
        return 0
    }
}, function(t, n, e) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, n, e) {
        function r() {
            y === g && (y = g.slice())
        }

        function o() {
            return v
        }

        function a(t) {
            if ("function" != typeof t) throw new Error("Expected listener to be a function.");
            var n = !0;
            return r(), y.push(t),
                function() {
                    if (n) {
                        n = !1, r();
                        var e = y.indexOf(t);
                        y.splice(e, 1)
                    }
                }
        }

        function f(t) {
            if (!(0, u.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if ("undefined" == typeof t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (_) throw new Error("Reducers may not dispatch actions.");
            try {
                _ = !0, v = d(v, t)
            } finally {
                _ = !1
            }
            for (var n = g = y, e = 0; e < n.length; e++) {
                var r = n[e];
                r()
            }
            return t
        }

        function l(t) {
            if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
            d = t, f({
                type: s.INIT
            })
        }

        function h() {
            var t, n = a;
            return t = {
                subscribe: function(t) {
                    function e() {
                        t.next && t.next(o())
                    }
                    if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");
                    e();
                    var r = n(e);
                    return {
                        unsubscribe: r
                    }
                }
            }, t[c.default] = function() {
                return this
            }, t
        }
        var p;
        if ("function" == typeof n && "undefined" == typeof e && (e = n, n = void 0), "undefined" != typeof e) {
            if ("function" != typeof e) throw new Error("Expected the enhancer to be a function.");
            return e(i)(t, n)
        }
        if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
        var d = t,
            v = n,
            g = [],
            y = g,
            _ = !1;
        return f({
            type: s.INIT
        }), p = {
            dispatch: f,
            subscribe: a,
            getState: o,
            replaceReducer: l
        }, p[c.default] = h, p
    }
    n.__esModule = !0, n.ActionTypes = void 0, n.default = i;
    var o = e(47),
        u = r(o),
        a = e(57),
        c = r(a),
        s = n.ActionTypes = {
            INIT: "@@redux/INIT"
        }
}, function(t, n, e) {
    function r(t) {
        if (!u(t) || i(t) != a) return !1;
        var n = o(t);
        if (null === n) return !0;
        var e = l.call(n, "constructor") && n.constructor;
        return "function" == typeof e && e instanceof e && f.call(e) == h
    }
    var i = e(48),
        o = e(54),
        u = e(56),
        a = "[object Object]",
        c = Function.prototype,
        s = Object.prototype,
        f = c.toString,
        l = s.hasOwnProperty,
        h = f.call(Object);
    t.exports = r
}, function(t, n, e) {
    function r(t) {
        return null == t ? void 0 === t ? c : a : s && s in Object(t) ? o(t) : u(t)
    }
    var i = e(49),
        o = e(52),
        u = e(53),
        a = "[object Null]",
        c = "[object Undefined]",
        s = i ? i.toStringTag : void 0;
    t.exports = r
}, function(t, n, e) {
    var r = e(50),
        i = r.Symbol;
    t.exports = i
}, function(t, n, e) {
    var r = e(51),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r || i || Function("return this")();
    t.exports = o
}, function(t, n) {
    (function(n) {
        var e = "object" == typeof n && n && n.Object === Object && n;
        t.exports = e
    }).call(n, function() {
        return this
    }())
}, function(t, n, e) {
    function r(t) {
        var n = u.call(t, c),
            e = t[c];
        try {
            t[c] = void 0;
            var r = !0
        } catch (t) {}
        var i = a.call(t);
        return r && (n ? t[c] = e : delete t[c]), i
    }
    var i = e(49),
        o = Object.prototype,
        u = o.hasOwnProperty,
        a = o.toString,
        c = i ? i.toStringTag : void 0;
    t.exports = r
}, function(t, n) {
    function e(t) {
        return i.call(t)
    }
    var r = Object.prototype,
        i = r.toString;
    t.exports = e
}, function(t, n, e) {
    var r = e(55),
        i = r(Object.getPrototypeOf, Object);
    t.exports = i
}, function(t, n) {
    function e(t, n) {
        return function(e) {
            return t(n(e))
        }
    }
    t.exports = e
}, function(t, n) {
    function e(t) {
        return null != t && "object" == typeof t
    }
    t.exports = e
}, function(t, n, e) {
    t.exports = e(58)
}, function(t, n, e) {
    (function(t, r) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o, u = e(60),
            a = i(u);
        o = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof t ? t : r;
        var c = (0, a.default)(o);
        n.default = c
    }).call(n, function() {
        return this
    }(), e(59)(t))
}, function(t, n) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
    }
}, function(t, n) {
    "use strict";

    function e(t) {
        var n, e = t.Symbol;
        return "function" == typeof e ? e.observable ? n = e.observable : (n = e("observable"), e.observable = n) : n = "@@observable", n
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = e
}, function(t, n, e) {
    (function(t) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function i(t, n) {
            var e = n && n.type,
                r = e && '"' + e.toString() + '"' || "an action";
            return "Given action " + r + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
        }

        function o(t, n, e, r) {
            var i = Object.keys(n),
                o = e && e.type === c.ActionTypes.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
            if (0 === i.length) return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
            if (!(0, f.default)(t)) return "The " + o + ' has unexpected type of "' + {}.toString.call(t).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + i.join('", "') + '"');
            var u = Object.keys(t).filter(function(t) {
                return !n.hasOwnProperty(t) && !r[t]
            });
            return u.forEach(function(t) {
                r[t] = !0
            }), u.length > 0 ? "Unexpected " + (u.length > 1 ? "keys" : "key") + " " + ('"' + u.join('", "') + '" found in ' + o + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + i.join('", "') + '". Unexpected keys will be ignored.') : void 0
        }

        function u(t) {
            Object.keys(t).forEach(function(n) {
                var e = t[n],
                    r = e(void 0, {
                        type: c.ActionTypes.INIT
                    });
                if ("undefined" == typeof r) throw new Error('Reducer "' + n + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if ("undefined" == typeof e(void 0, {
                        type: i
                    })) throw new Error('Reducer "' + n + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + c.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.")
            })
        }

        function a(n) {
            for (var e = Object.keys(n), r = {}, a = 0; a < e.length; a++) {
                var c = e[a];
                "production" !== t.env.NODE_ENV && "undefined" == typeof n[c] && (0, h.default)('No reducer provided for key "' + c + '"'), "function" == typeof n[c] && (r[c] = n[c])
            }
            var s = Object.keys(r),
                f = void 0;
            "production" !== t.env.NODE_ENV && (f = {});
            var l = void 0;
            try {
                u(r)
            } catch (t) {
                l = t
            }
            return function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments[1];
                if (l) throw l;
                if ("production" !== t.env.NODE_ENV) {
                    var u = o(n, r, e, f);
                    u && (0, h.default)(u)
                }
                for (var a = !1, c = {}, p = 0; p < s.length; p++) {
                    var d = s[p],
                        v = r[d],
                        g = n[d],
                        y = v(g, e);
                    if ("undefined" == typeof y) {
                        var _ = i(d, e);
                        throw new Error(_)
                    }
                    c[d] = y, a = a || y !== g
                }
                return a ? c : n
            }
        }
        n.__esModule = !0, n.default = a;
        var c = e(46),
            s = e(47),
            f = r(s),
            l = e(62),
            h = r(l)
    }).call(n, e(45))
}, function(t, n) {
    "use strict";

    function e(t) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(t);
        try {
            throw new Error(t)
        } catch (t) {}
    }
    n.__esModule = !0, n.default = e
}, function(t, n) {
    "use strict";

    function e(t, n) {
        return function() {
            return n(t.apply(void 0, arguments))
        }
    }

    function r(t, n) {
        if ("function" == typeof t) return e(t, n);
        if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        for (var r = Object.keys(t), i = {}, o = 0; o < r.length; o++) {
            var u = r[o],
                a = t[u];
            "function" == typeof a && (i[u] = e(a, n))
        }
        return i
    }
    n.__esModule = !0, n.default = r
}, function(t, n, e) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i() {
        for (var t = arguments.length, n = Array(t), e = 0; e < t; e++) n[e] = arguments[e];
        return function(t) {
            return function(e, r, i) {
                var u = t(e, r, i),
                    c = u.dispatch,
                    s = [],
                    f = {
                        getState: u.getState,
                        dispatch: function(t) {
                            return c(t)
                        }
                    };
                return s = n.map(function(t) {
                    return t(f)
                }), c = a.default.apply(void 0, s)(u.dispatch), o({}, u, {
                    dispatch: c
                })
            }
        }
    }
    n.__esModule = !0;
    var o = Object.assign || function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var e = arguments[n];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
        }
        return t
    };
    n.default = i;
    var u = e(65),
        a = r(u)
}, function(t, n) {
    "use strict";

    function e() {
        for (var t = arguments.length, n = Array(t), e = 0; e < t; e++) n[e] = arguments[e];
        return 0 === n.length ? function(t) {
            return t
        } : 1 === n.length ? n[0] : n.reduce(function(t, n) {
            return function() {
                return t(n.apply(void 0, arguments))
            }
        })
    }
    n.__esModule = !0, n.default = e
}, function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = e(67),
        i = e(37),
        o = i.Set(),
        u = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
                n = arguments[1];
            switch (n.type) {
                case r.TOGGLE_SIDEBAR_FILTER:
                    var e = n.payload.featureName;
                    return t.contains(e) ? t.remove(e) : t.add(e);
                default:
                    return t
            }
        };
    n.default = u
}, function(t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var e = n.TOGGLE_SIDEBAR_FILTER = "TOGGLE_SIDEBAR_FILTER",
        r = n.toggleSidebarFilter = function(t) {
            return function() {
                return {
                    type: e,
                    payload: {
                        featureName: t
                    }
                }
            }
        };
    n.default = {
        toggleSidebarFilter: r
    }
}, function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = e(69),
        i = e(70),
        o = e(71),
        u = e(37),
        a = u.List(),
        c = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
                n = arguments[1];
            switch (n.type) {
                case o.STORE_DATASET:
                    return u.List(n.payload.data);
                case r.LOAD_CSV:
                    var e = n.payload.file;
                    return (0, i.loadCSV)(e), t;
                case r.LOAD_JSON:
                    var e = n.payload.file;
                    return (0, i.loadJSON)(e), t;
                default:
                    return t
            }
        };
    n.default = c
}, function(t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var e = n.LOAD_CSV = "LOAD_CSV",
        r = n.LOAD_JSON = "LOAD_JSON",
        i = n.loadCSV = function(t) {
            return function() {
                return {
                    type: e,
                    payload: {
                        file: t
                    }
                }
            }
        },
        o = n.loadJSON = function(t) {
            return function() {
                return {
                    type: r,
                    payload: {
                        file: t
                    }
                }
            }
        };
    n.default = {
        loadCSV: i,
        loadJSON: o
    }
}, function(t, n, e) {
    "use strict";

    function r(t) {
        if (t && t.__esModule) return t;
        var n = {};
        if (null != t)
            for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
        return n.default = t, n
    }

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.loadJSON = n.loadCSV = void 0;
    var o = e(34),
        u = e(36),
        a = i(u),
        c = e(71),
        s = i(c),
        f = e(2),
        l = r(f);
    n.default = function(t) {
        var n = [{
            status: 200,
            gender: "Male",
            credit: "Yes"
        }, {
            status: 422,
            gender: "Female",
            credit: "Yes"
        }, {
            status: 500,
            gender: "Female",
            credit: "Yes"
        }, {
            status: 200,
            gender: "Female",
            credit: "Yes"
        }, {
            status: 422,
            gender: "Female",
            credit: "Yes"
        }, {
            status: 500,
            gender: "Male",
            credit: "Yes"
        }, {
            status: 200,
            gender: "Male",
            credit: "Yes"
        }, {
            status: 422,
            gender: "Male",
            credit: "Yes"
        }];
        a.default.dispatch(s.default.storeDataset(n))
    };
    var h = void 0,
        p = (n.loadCSV = function(t) {
            p(t, v)
        }, n.loadJSON = function(t) {
            p(t, g)
        }, function(t, n) {
            h = new FileReader, h.addEventListener("load", n, !1), h.readAsText(t), Materialize.toast("Parsing content...", 3e3, "rounded"), d(t)
        }),
        d = function(t) {
            var n = l.select(o.elementsProvider.FILE_NAME);
            n.text(t.name)
        },
        v = function() {
            var t = l.csvParse(h.result);
            a.default.dispatch(s.default.storeDataset(t))
        },
        g = function() {
            var t = JSON.parse(h.result).items;
            a.default.dispatch(s.default.storeDataset(t))
        }
}, function(t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var e = n.STORE_DATASET = "STORE_DATASET",
        r = n.storeDataset = function(t) {
            return function() {
                return {
                    type: e,
                    payload: {
                        data: t
                    }
                }
            }
        };
    n.default = {
        storeDataset: r
    }
}, function(t, n, e) {
    "use strict";

    function r(t) {
        if (t && t.__esModule) return t;
        var n = {};
        if (null != t)
            for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
        return n.default = t, n
    }

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = e(34),
        u = e(36),
        a = i(u),
        c = e(67),
        s = i(c),
        f = e(37),
        l = i(f),
        h = e(2),
        p = r(h),
        d = l.default.Map({});
    n.default = function() {
        var t = function() {
                var t = ["dataset", "featuresFilter"];
                a.default.shouldUpdate(d, t) && (d = a.default.updateViewState(d, t), v())
            },
            n = a.default.getStore();
        p.select(window).on("resize", v), n.subscribe(t), t()
    };
    var v = function() {
            var t = d.get("dataset"),
                n = b(t);
            g(o.elementsProvider.SIDEBAR_OPTIONS, n)
        },
        g = function(t, n) {
            var e = p.select(t),
                r = e.selectAll("input").data(n).enter().append("div").attr("class", "col s12");
            y(r), _(r)
        },
        y = function(t) {
            t.append("input").attr("type", "checkbox").attr("checked", "checked").attr("id", function(t) {
                return t
            }).on("click", function(t) {
                return x(t)
            })
        },
        _ = function(t) {
            t.append("label").attr("class", "tooltipped").attr("data-position", "right").attr("data-delay", 50).attr("data-tooltip", function(t) {
                return t
            }).attr("for", function(t) {
                return t
            }).text(function(t) {
                return t
            }), m()
        },
        m = function() {
            $(".tooltipped").tooltip({
                delay: 50
            })
        },
        x = function(t) {
            console.log("INFO: Toggled " + t + " checkbox."), a.default.dispatch(s.default.toggleSidebarFilter(t))
        },
        b = function(t) {
            return Object.keys(t.get(0))
        }
}, function(t, n, e) {
    "use strict";

    function r(t) {
        if (t && t.__esModule) return t;
        var n = {};
        if (null != t)
            for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
        return n.default = t, n
    }

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = e(34),
        u = e(36),
        a = i(u),
        c = e(37),
        s = i(c),
        f = e(69),
        l = i(f),
        h = e(2),
        p = r(h),
        d = s.default.Map({});
    n.default = function() {
        var t = function() {
                var t = [];
                a.default.shouldUpdate(d, t) && (d = a.default.updateViewState(d, t), v())
            },
            n = a.default.getStore();
        p.select(window).on("resize", v), n.subscribe(t), t()
    };
    var v = function() {
            g(o.elementsProvider.UPLOAD_INPUT), y(o.elementsProvider.UPLOAD_CSV_BUTTON), _(o.elementsProvider.UPLOAD_JSON_BUTTON)
        },
        g = function(t) {
            var n = p.select(t);
            n.on("change", function(t, n, e) {
                return x(t, n, e)
            })
        },
        y = function(t) {
            p.selectAll(t).on("click", function() {
                return m()
            })
        },
        _ = function(t) {
            p.selectAll(t).on("click", function() {
                return m()
            })
        },
        m = function() {
            $(o.elementsProvider.UPLOAD_INPUT).trigger("click")
        },
        x = function(t, n, e) {
            console.log("INFO: Reading data."), Materialize.toast("Uploading file...", 3e3, "rounded");
            var r = e[n];
            if (0 === r.files.length) return console.error("Error: No file selected."), void Materialize.toast("No file selected!", 4e3);
            var i = r.files[0];
            b(i), w(), M()
        },
        b = function(t) {
            var n = t.name.split(".").pop();
            n === S.JSON ? a.default.dispatch(l.default.loadJSON(t)) : n === S.CSV ? a.default.dispatch(l.default.loadCSV(t)) : E(n)
        },
        w = function() {
            var t = o.elementsProvider.UPLOAD_PLACE_HOLDER;
            p.select(t).attr("style", "display: none;")
        },
        M = function() {
            var t = o.elementsProvider.LOADER_SECTION;
            p.select(t).attr("style", "display: block;")
        },
        S = {
            JSON: "json",
            CSV: "csv"
        },
        E = function(t) {
            console.error("Error: extension " + t + " not supported."), Materialize.toast("Extension ${extension} not supported!", 4e3)
        }
}, function(t, n, e) {
    "use strict";

    function r(t) {
        if (t && t.__esModule) return t;
        var n = {};
        if (null != t)
            for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
        return n.default = t, n
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = e(34),
        o = e(2);
    r(o);
    n.default = function() {
        u(i.elementsProvider.OPEN_FAQ)
    };
    var u = function(t) {
        $(".modal").modal()
    }
}, function(t, n, e) {
    var r = e(76);
    "string" == typeof r && (r = [
        [t.id, r, ""]
    ]);
    e(41)(r, {});
    r.locals && (t.exports = r.locals)
}, function(t, n, e) {
    n = t.exports = e(40)(), n.push([t.id, ".row{margin-top:10px}.page-footer{position:absolute;bottom:0;left:0;right:0;padding:3px!important}.section{padding-bottom:0}.divider{height:1px!important}.no-spacement{margin:0!important}.parallel-width{width:1000px!important}.github-icon,.parallel-content{margin-top:10px}.github-icon{width:15px;height:15px;margin-right:5px}.icon-color{color:#4caf50}.x-large-icon{font-size:150px}.cloud-icon-margin{margin-top:150px}.cursor-pointer{cursor:pointer}keyframes fadeInOutAnimation 0%{opacity:1}keyframes fadeInOutAnimation 50%{opacity:0}keyframes fadeInOutAnimation to{opacity:1}keyframes fadeInOutAnimation 0%{color:#4caf50}keyframes fadeInOutAnimation 50%{color:#5c7f32}keyframes fadeInOutAnimation to{color:#9ccc65}@-webkit-keyframes fadeInOutAnimation{0%{opacity:1}50%{opacity:0}to{opacity:1}0%{color:#4caf50}50%{color:#5c7f32}to{color:#9ccc65}}.animate-loader{-webkit-animation:fadeInOutAnimation 1s infinite;animation:fadeInOutAnimation 1s infinite}.start-hidden{display:none}#toast-container{top:auto!important;right:auto!important;bottom:10%;left:2%}.file-name{font-size:16px}.round-top-borders{border-top-left-radius:5px;border-top-right-radius:5px}.fade{opacity:.5}.fade:hover{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}", ""])
}]);
//# sourceMappingURL=bundle.js.map