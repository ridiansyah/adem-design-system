import he, { useRef as cn, useDebugValue as Gt, createElement as un, useContext as ln } from "react";
var vt = { exports: {} }, De = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ht;
function fn() {
  if (Ht)
    return De;
  Ht = 1;
  var e = he, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, l, h) {
    var p, m = {}, b = null, E = null;
    h !== void 0 && (b = "" + h), l.key !== void 0 && (b = "" + l.key), l.ref !== void 0 && (E = l.ref);
    for (p in l)
      o.call(l, p) && !s.hasOwnProperty(p) && (m[p] = l[p]);
    if (f && f.defaultProps)
      for (p in l = f.defaultProps, l)
        m[p] === void 0 && (m[p] = l[p]);
    return { $$typeof: t, type: f, key: b, ref: E, props: m, _owner: a.current };
  }
  return De.Fragment = r, De.jsx = c, De.jsxs = c, De;
}
var $e = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function dn() {
  return qt || (qt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = he, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), O = Symbol.iterator, N = "@@iterator";
    function M(n) {
      if (n === null || typeof n != "object")
        return null;
      var i = O && n[O] || n[N];
      return typeof i == "function" ? i : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(n) {
      {
        for (var i = arguments.length, u = new Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++)
          u[d - 1] = arguments[d];
        C("error", n, u);
      }
    }
    function C(n, i, u) {
      {
        var d = x.ReactDebugCurrentFrame, _ = d.getStackAddendum();
        _ !== "" && (i += "%s", u = u.concat([_]));
        var P = u.map(function(R) {
          return String(R);
        });
        P.unshift("Warning: " + i), Function.prototype.apply.call(console[n], console, P);
      }
    }
    var T = !1, I = !1, S = !1, g = !1, Z = !1, Q;
    Q = Symbol.for("react.module.reference");
    function it(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === s || Z || n === a || n === h || n === p || g || n === E || T || I || S || typeof n == "object" && n !== null && (n.$$typeof === b || n.$$typeof === m || n.$$typeof === c || n.$$typeof === f || n.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === Q || n.getModuleId !== void 0));
    }
    function st(n, i, u) {
      var d = n.displayName;
      if (d)
        return d;
      var _ = i.displayName || i.name || "";
      return _ !== "" ? u + "(" + _ + ")" : u;
    }
    function Le(n) {
      return n.displayName || "Context";
    }
    function Y(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case a:
          return "StrictMode";
        case h:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case f:
            var i = n;
            return Le(i) + ".Consumer";
          case c:
            var u = n;
            return Le(u._context) + ".Provider";
          case l:
            return st(n, n.render, "ForwardRef");
          case m:
            var d = n.displayName || null;
            return d !== null ? d : Y(n.type) || "Memo";
          case b: {
            var _ = n, P = _._payload, R = _._init;
            try {
              return Y(R(P));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ee = Object.assign, ce = 0, ze, ge, Ae, B, ne, oe, L;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function Ie() {
      {
        if (ce === 0) {
          ze = console.log, ge = console.info, Ae = console.warn, B = console.error, ne = console.group, oe = console.groupCollapsed, L = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        ce++;
      }
    }
    function ve() {
      {
        if (ce--, ce === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ee({}, n, {
              value: ze
            }),
            info: ee({}, n, {
              value: ge
            }),
            warn: ee({}, n, {
              value: Ae
            }),
            error: ee({}, n, {
              value: B
            }),
            group: ee({}, n, {
              value: ne
            }),
            groupCollapsed: ee({}, n, {
              value: oe
            }),
            groupEnd: ee({}, n, {
              value: L
            })
          });
        }
        ce < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = x.ReactCurrentDispatcher, ae;
    function H(n, i, u) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (_) {
            var d = _.stack.trim().match(/\n( *(at )?)/);
            ae = d && d[1] || "";
          }
        return `
` + ae + n;
      }
    }
    var q = !1, ie;
    {
      var be = typeof WeakMap == "function" ? WeakMap : Map;
      ie = new be();
    }
    function K(n, i) {
      if (!n || q)
        return "";
      {
        var u = ie.get(n);
        if (u !== void 0)
          return u;
      }
      var d;
      q = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var P;
      P = te.current, te.current = null, Ie();
      try {
        if (i) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (V) {
              d = V;
            }
            Reflect.construct(n, [], R);
          } else {
            try {
              R.call();
            } catch (V) {
              d = V;
            }
            n.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            d = V;
          }
          n();
        }
      } catch (V) {
        if (V && d && typeof V.stack == "string") {
          for (var w = V.stack.split(`
`), z = d.stack.split(`
`), j = w.length - 1, D = z.length - 1; j >= 1 && D >= 0 && w[j] !== z[D]; )
            D--;
          for (; j >= 1 && D >= 0; j--, D--)
            if (w[j] !== z[D]) {
              if (j !== 1 || D !== 1)
                do
                  if (j--, D--, D < 0 || w[j] !== z[D]) {
                    var U = `
` + w[j].replace(" at new ", " at ");
                    return n.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", n.displayName)), typeof n == "function" && ie.set(n, U), U;
                  }
                while (j >= 1 && D >= 0);
              break;
            }
        }
      } finally {
        q = !1, te.current = P, ve(), Error.prepareStackTrace = _;
      }
      var Se = n ? n.displayName || n.name : "", ue = Se ? H(Se) : "";
      return typeof n == "function" && ie.set(n, ue), ue;
    }
    function Fr(n, i, u) {
      return K(n, !1);
    }
    function Mr(n) {
      var i = n.prototype;
      return !!(i && i.isReactComponent);
    }
    function Ve(n, i, u) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return K(n, Mr(n));
      if (typeof n == "string")
        return H(n);
      switch (n) {
        case h:
          return H("Suspense");
        case p:
          return H("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case l:
            return Fr(n.render);
          case m:
            return Ve(n.type, i, u);
          case b: {
            var d = n, _ = d._payload, P = d._init;
            try {
              return Ve(P(_), i, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Ne = Object.prototype.hasOwnProperty, Nt = {}, jt = x.ReactDebugCurrentFrame;
    function We(n) {
      if (n) {
        var i = n._owner, u = Ve(n.type, n._source, i ? i.type : null);
        jt.setExtraStackFrame(u);
      } else
        jt.setExtraStackFrame(null);
    }
    function Lr(n, i, u, d, _) {
      {
        var P = Function.call.bind(Ne);
        for (var R in n)
          if (P(n, R)) {
            var w = void 0;
            try {
              if (typeof n[R] != "function") {
                var z = Error((d || "React class") + ": " + u + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              w = n[R](i, R, d, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              w = j;
            }
            w && !(w instanceof Error) && (We(_), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", u, R, typeof w), We(null)), w instanceof Error && !(w.message in Nt) && (Nt[w.message] = !0, We(_), v("Failed %s type: %s", u, w.message), We(null));
          }
      }
    }
    var zr = Array.isArray;
    function ct(n) {
      return zr(n);
    }
    function Vr(n) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, u = i && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return u;
      }
    }
    function Wr(n) {
      try {
        return Dt(n), !1;
      } catch {
        return !0;
      }
    }
    function Dt(n) {
      return "" + n;
    }
    function $t(n) {
      if (Wr(n))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vr(n)), Dt(n);
    }
    var je = x.ReactCurrentOwner, Yr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ft, Mt, ut;
    ut = {};
    function Br(n) {
      if (Ne.call(n, "ref")) {
        var i = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Ur(n) {
      if (Ne.call(n, "key")) {
        var i = Object.getOwnPropertyDescriptor(n, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function Gr(n, i) {
      if (typeof n.ref == "string" && je.current && i && je.current.stateNode !== i) {
        var u = Y(je.current.type);
        ut[u] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(je.current.type), n.ref), ut[u] = !0);
      }
    }
    function Hr(n, i) {
      {
        var u = function() {
          Ft || (Ft = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function qr(n, i) {
      {
        var u = function() {
          Mt || (Mt = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Kr = function(n, i, u, d, _, P, R) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: i,
        ref: u,
        props: R,
        // Record the component responsible for creating this element.
        _owner: P
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function Xr(n, i, u, d, _) {
      {
        var P, R = {}, w = null, z = null;
        u !== void 0 && ($t(u), w = "" + u), Ur(i) && ($t(i.key), w = "" + i.key), Br(i) && (z = i.ref, Gr(i, _));
        for (P in i)
          Ne.call(i, P) && !Yr.hasOwnProperty(P) && (R[P] = i[P]);
        if (n && n.defaultProps) {
          var j = n.defaultProps;
          for (P in j)
            R[P] === void 0 && (R[P] = j[P]);
        }
        if (w || z) {
          var D = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          w && Hr(R, D), z && qr(R, D);
        }
        return Kr(n, w, z, _, d, je.current, R);
      }
    }
    var lt = x.ReactCurrentOwner, Lt = x.ReactDebugCurrentFrame;
    function we(n) {
      if (n) {
        var i = n._owner, u = Ve(n.type, n._source, i ? i.type : null);
        Lt.setExtraStackFrame(u);
      } else
        Lt.setExtraStackFrame(null);
    }
    var ft;
    ft = !1;
    function dt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function zt() {
      {
        if (lt.current) {
          var n = Y(lt.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function Jr(n) {
      {
        if (n !== void 0) {
          var i = n.fileName.replace(/^.*[\\\/]/, ""), u = n.lineNumber;
          return `

Check your code at ` + i + ":" + u + ".";
        }
        return "";
      }
    }
    var Vt = {};
    function Zr(n) {
      {
        var i = zt();
        if (!i) {
          var u = typeof n == "string" ? n : n.displayName || n.name;
          u && (i = `

Check the top-level render call using <` + u + ">.");
        }
        return i;
      }
    }
    function Wt(n, i) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var u = Zr(i);
        if (Vt[u])
          return;
        Vt[u] = !0;
        var d = "";
        n && n._owner && n._owner !== lt.current && (d = " It was passed a child from " + Y(n._owner.type) + "."), we(n), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, d), we(null);
      }
    }
    function Yt(n, i) {
      {
        if (typeof n != "object")
          return;
        if (ct(n))
          for (var u = 0; u < n.length; u++) {
            var d = n[u];
            dt(d) && Wt(d, i);
          }
        else if (dt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var _ = M(n);
          if (typeof _ == "function" && _ !== n.entries)
            for (var P = _.call(n), R; !(R = P.next()).done; )
              dt(R.value) && Wt(R.value, i);
        }
      }
    }
    function Qr(n) {
      {
        var i = n.type;
        if (i == null || typeof i == "string")
          return;
        var u;
        if (typeof i == "function")
          u = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === m))
          u = i.propTypes;
        else
          return;
        if (u) {
          var d = Y(i);
          Lr(u, n.props, "prop", d, n);
        } else if (i.PropTypes !== void 0 && !ft) {
          ft = !0;
          var _ = Y(i);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function en(n) {
      {
        for (var i = Object.keys(n.props), u = 0; u < i.length; u++) {
          var d = i[u];
          if (d !== "children" && d !== "key") {
            we(n), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), we(null);
            break;
          }
        }
        n.ref !== null && (we(n), v("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
      }
    }
    var Bt = {};
    function Ut(n, i, u, d, _, P) {
      {
        var R = it(n);
        if (!R) {
          var w = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = Jr(_);
          z ? w += z : w += zt();
          var j;
          n === null ? j = "null" : ct(n) ? j = "array" : n !== void 0 && n.$$typeof === t ? (j = "<" + (Y(n.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : j = typeof n, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, w);
        }
        var D = Xr(n, i, u, _, P);
        if (D == null)
          return D;
        if (R) {
          var U = i.children;
          if (U !== void 0)
            if (d)
              if (ct(U)) {
                for (var Se = 0; Se < U.length; Se++)
                  Yt(U[Se], n);
                Object.freeze && Object.freeze(U);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Yt(U, n);
        }
        if (Ne.call(i, "key")) {
          var ue = Y(n), V = Object.keys(i).filter(function(sn) {
            return sn !== "key";
          }), pt = V.length > 0 ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Bt[ue + pt]) {
            var an = V.length > 0 ? "{" + V.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, pt, ue, an, ue), Bt[ue + pt] = !0;
          }
        }
        return n === o ? en(D) : Qr(D), D;
      }
    }
    function tn(n, i, u) {
      return Ut(n, i, u, !0);
    }
    function rn(n, i, u) {
      return Ut(n, i, u, !1);
    }
    var nn = rn, on = tn;
    $e.Fragment = o, $e.jsx = nn, $e.jsxs = on;
  }()), $e;
}
process.env.NODE_ENV === "production" ? vt.exports = fn() : vt.exports = dn();
var pn = vt.exports, W = function() {
  return W = Object.assign || function(t) {
    for (var r, o = 1, a = arguments.length; o < a; o++) {
      r = arguments[o];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, W.apply(this, arguments);
};
function Re(e, t, r) {
  if (r || arguments.length === 2)
    for (var o = 0, a = t.length, s; o < a; o++)
      (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function hn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var mn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, gn = /* @__PURE__ */ hn(
  function(e) {
    return mn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), A = "-ms-", Me = "-moz-", k = "-webkit-", dr = "comm", et = "rule", Ct = "decl", yn = "@import", pr = "@keyframes", vn = "@layer", hr = Math.abs, Pt = String.fromCharCode, bt = Object.assign;
function bn(e, t) {
  return F(e, 0) ^ 45 ? (((t << 2 ^ F(e, 0)) << 2 ^ F(e, 1)) << 2 ^ F(e, 2)) << 2 ^ F(e, 3) : 0;
}
function mr(e) {
  return e.trim();
}
function re(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function y(e, t, r) {
  return e.replace(t, r);
}
function He(e, t, r) {
  return e.indexOf(t, r);
}
function F(e, t) {
  return e.charCodeAt(t) | 0;
}
function _e(e, t, r) {
  return e.slice(t, r);
}
function J(e) {
  return e.length;
}
function gr(e) {
  return e.length;
}
function Fe(e, t) {
  return t.push(e), e;
}
function wn(e, t) {
  return e.map(t).join("");
}
function Kt(e, t) {
  return e.filter(function(r) {
    return !re(r, t);
  });
}
var tt = 1, ke = 1, yr = 0, G = 0, $ = 0, Oe = "";
function rt(e, t, r, o, a, s, c, f) {
  return { value: e, root: t, parent: r, type: o, props: a, children: s, line: tt, column: ke, length: c, return: "", siblings: f };
}
function se(e, t) {
  return bt(rt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Ee(e) {
  for (; e.root; )
    e = se(e.root, { children: [e] });
  Fe(e, e.siblings);
}
function Sn() {
  return $;
}
function En() {
  return $ = G > 0 ? F(Oe, --G) : 0, ke--, $ === 10 && (ke = 1, tt--), $;
}
function X() {
  return $ = G < yr ? F(Oe, G++) : 0, ke++, $ === 10 && (ke = 1, tt++), $;
}
function de() {
  return F(Oe, G);
}
function qe() {
  return G;
}
function nt(e, t) {
  return _e(Oe, e, t);
}
function wt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Rn(e) {
  return tt = ke = 1, yr = J(Oe = e), G = 0, [];
}
function _n(e) {
  return Oe = "", e;
}
function ht(e) {
  return mr(nt(G - 1, St(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function kn(e) {
  for (; ($ = de()) && $ < 33; )
    X();
  return wt(e) > 2 || wt($) > 3 ? "" : " ";
}
function xn(e, t) {
  for (; --t && X() && !($ < 48 || $ > 102 || $ > 57 && $ < 65 || $ > 70 && $ < 97); )
    ;
  return nt(e, qe() + (t < 6 && de() == 32 && X() == 32));
}
function St(e) {
  for (; X(); )
    switch ($) {
      case e:
        return G;
      case 34:
      case 39:
        e !== 34 && e !== 39 && St($);
        break;
      case 40:
        e === 41 && St(e);
        break;
      case 92:
        X();
        break;
    }
  return G;
}
function Cn(e, t) {
  for (; X() && e + $ !== 57; )
    if (e + $ === 84 && de() === 47)
      break;
  return "/*" + nt(t, G - 1) + "*" + Pt(e === 47 ? e : X());
}
function Pn(e) {
  for (; !wt(de()); )
    X();
  return nt(e, G);
}
function On(e) {
  return _n(Ke("", null, null, null, [""], e = Rn(e), 0, [0], e));
}
function Ke(e, t, r, o, a, s, c, f, l) {
  for (var h = 0, p = 0, m = c, b = 0, E = 0, O = 0, N = 1, M = 1, x = 1, v = 0, C = "", T = a, I = s, S = o, g = C; M; )
    switch (O = v, v = X()) {
      case 40:
        if (O != 108 && F(g, m - 1) == 58) {
          He(g += y(ht(v), "&", "&\f"), "&\f", hr(h ? f[h - 1] : 0)) != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        g += ht(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        g += kn(O);
        break;
      case 92:
        g += xn(qe() - 1, 7);
        continue;
      case 47:
        switch (de()) {
          case 42:
          case 47:
            Fe(Tn(Cn(X(), qe()), t, r, l), l);
            break;
          default:
            g += "/";
        }
        break;
      case 123 * N:
        f[h++] = J(g) * x;
      case 125 * N:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            M = 0;
          case 59 + p:
            x == -1 && (g = y(g, /\f/g, "")), E > 0 && J(g) - m && Fe(E > 32 ? Jt(g + ";", o, r, m - 1, l) : Jt(y(g, " ", "") + ";", o, r, m - 2, l), l);
            break;
          case 59:
            g += ";";
          default:
            if (Fe(S = Xt(g, t, r, h, p, a, f, C, T = [], I = [], m, s), s), v === 123)
              if (p === 0)
                Ke(g, t, S, S, T, s, m, f, I);
              else
                switch (b === 99 && F(g, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ke(e, S, S, o && Fe(Xt(e, S, S, 0, 0, a, f, C, a, T = [], m, I), I), a, I, m, f, o ? T : I);
                    break;
                  default:
                    Ke(g, S, S, S, [""], I, 0, f, I);
                }
        }
        h = p = E = 0, N = x = 1, C = g = "", m = c;
        break;
      case 58:
        m = 1 + J(g), E = O;
      default:
        if (N < 1) {
          if (v == 123)
            --N;
          else if (v == 125 && N++ == 0 && En() == 125)
            continue;
        }
        switch (g += Pt(v), v * N) {
          case 38:
            x = p > 0 ? 1 : (g += "\f", -1);
            break;
          case 44:
            f[h++] = (J(g) - 1) * x, x = 1;
            break;
          case 64:
            de() === 45 && (g += ht(X())), b = de(), p = m = J(C = g += Pn(qe())), v++;
            break;
          case 45:
            O === 45 && J(g) == 2 && (N = 0);
        }
    }
  return s;
}
function Xt(e, t, r, o, a, s, c, f, l, h, p, m) {
  for (var b = a - 1, E = a === 0 ? s : [""], O = gr(E), N = 0, M = 0, x = 0; N < o; ++N)
    for (var v = 0, C = _e(e, b + 1, b = hr(M = c[N])), T = e; v < O; ++v)
      (T = mr(M > 0 ? E[v] + " " + C : y(C, /&\f/g, E[v]))) && (l[x++] = T);
  return rt(e, t, r, a === 0 ? et : f, l, h, p, m);
}
function Tn(e, t, r, o) {
  return rt(e, t, r, dr, Pt(Sn()), _e(e, 2, -2), 0, o);
}
function Jt(e, t, r, o, a) {
  return rt(e, t, r, Ct, _e(e, 0, o), _e(e, o + 1, -1), o, a);
}
function vr(e, t, r) {
  switch (bn(e, t)) {
    case 5103:
      return k + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return k + e + e;
    case 4789:
      return Me + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return k + e + Me + e + A + e + e;
    case 5936:
      switch (F(e, t + 11)) {
        case 114:
          return k + e + A + y(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return k + e + A + y(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return k + e + A + y(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return k + e + A + e + e;
    case 6165:
      return k + e + A + "flex-" + e + e;
    case 5187:
      return k + e + y(e, /(\w+).+(:[^]+)/, k + "box-$1$2" + A + "flex-$1$2") + e;
    case 5443:
      return k + e + A + "flex-item-" + y(e, /flex-|-self/g, "") + (re(e, /flex-|baseline/) ? "" : A + "grid-row-" + y(e, /flex-|-self/g, "")) + e;
    case 4675:
      return k + e + A + "flex-line-pack" + y(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return k + e + A + y(e, "shrink", "negative") + e;
    case 5292:
      return k + e + A + y(e, "basis", "preferred-size") + e;
    case 6060:
      return k + "box-" + y(e, "-grow", "") + k + e + A + y(e, "grow", "positive") + e;
    case 4554:
      return k + y(e, /([^-])(transform)/g, "$1" + k + "$2") + e;
    case 6187:
      return y(y(y(e, /(zoom-|grab)/, k + "$1"), /(image-set)/, k + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return y(e, /(image-set\([^]*)/, k + "$1$`$1");
    case 4968:
      return y(y(e, /(.+:)(flex-)?(.*)/, k + "box-pack:$3" + A + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + k + e + e;
    case 4200:
      if (!re(e, /flex-|baseline/))
        return A + "grid-column-align" + _e(e, t) + e;
      break;
    case 2592:
    case 3360:
      return A + y(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(o, a) {
        return t = a, re(o.props, /grid-\w+-end/);
      }) ? ~He(e + (r = r[t].value), "span", 0) ? e : A + y(e, "-start", "") + e + A + "grid-row-span:" + (~He(r, "span", 0) ? re(r, /\d+/) : +re(r, /\d+/) - +re(e, /\d+/)) + ";" : A + y(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(o) {
        return re(o.props, /grid-\w+-start/);
      }) ? e : A + y(y(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return y(e, /(.+)-inline(.+)/, k + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (J(e) - 1 - t > 6)
        switch (F(e, t + 1)) {
          case 109:
            if (F(e, t + 4) !== 45)
              break;
          case 102:
            return y(e, /(.+:)(.+)-([^]+)/, "$1" + k + "$2-$3$1" + Me + (F(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~He(e, "stretch", 0) ? vr(y(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return y(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(o, a, s, c, f, l, h) {
        return A + a + ":" + s + h + (c ? A + a + "-span:" + (f ? l : +l - +s) + h : "") + e;
      });
    case 4949:
      if (F(e, t + 6) === 121)
        return y(e, ":", ":" + k) + e;
      break;
    case 6444:
      switch (F(e, F(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return y(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + k + (F(e, 14) === 45 ? "inline-" : "") + "box$3$1" + k + "$2$3$1" + A + "$2box$3") + e;
        case 100:
          return y(e, ":", ":" + A) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return y(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Ze(e, t) {
  for (var r = "", o = 0; o < e.length; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function An(e, t, r, o) {
  switch (e.type) {
    case vn:
      if (e.children.length)
        break;
    case yn:
    case Ct:
      return e.return = e.return || e.value;
    case dr:
      return "";
    case pr:
      return e.return = e.value + "{" + Ze(e.children, o) + "}";
    case et:
      if (!J(e.value = e.props.join(",")))
        return "";
  }
  return J(r = Ze(e.children, o)) ? e.return = e.value + "{" + r + "}" : "";
}
function In(e) {
  var t = gr(e);
  return function(r, o, a, s) {
    for (var c = "", f = 0; f < t; f++)
      c += e[f](r, o, a, s) || "";
    return c;
  };
}
function Nn(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function jn(e, t, r, o) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Ct:
        e.return = vr(e.value, e.length, r);
        return;
      case pr:
        return Ze([se(e, { value: y(e.value, "@", "@" + k) })], o);
      case et:
        if (e.length)
          return wn(r = e.props, function(a) {
            switch (re(a, o = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Ee(se(e, { props: [y(a, /:(read-\w+)/, ":" + Me + "$1")] })), Ee(se(e, { props: [a] })), bt(e, { props: Kt(r, o) });
                break;
              case "::placeholder":
                Ee(se(e, { props: [y(a, /:(plac\w+)/, ":" + k + "input-$1")] })), Ee(se(e, { props: [y(a, /:(plac\w+)/, ":" + Me + "$1")] })), Ee(se(e, { props: [y(a, /:(plac\w+)/, A + "input-$1")] })), Ee(se(e, { props: [a] })), bt(e, { props: Kt(r, o) });
                break;
            }
            return "";
          });
    }
}
var Dn = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, me = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", br = "active", wr = "data-styled-version", ot = "6.1.8", Ot = `/*!sc*/
`, Tt = typeof window < "u" && "HTMLElement" in window, $n = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Zt = /invalid hook call/i, Ye = /* @__PURE__ */ new Set(), Fn = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", o = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, a = console.error;
    try {
      var s = !0;
      console.error = function(c) {
        for (var f = [], l = 1; l < arguments.length; l++)
          f[l - 1] = arguments[l];
        Zt.test(c) ? (s = !1, Ye.delete(o)) : a.apply(void 0, Re([c], f, !1));
      }, cn(), s && !Ye.has(o) && (console.warn(o), Ye.add(o));
    } catch (c) {
      Zt.test(c.message) && Ye.delete(o);
    } finally {
      console.error = a;
    }
  }
}, at = Object.freeze([]), xe = Object.freeze({});
function Mn(e, t, r) {
  return r === void 0 && (r = xe), e.theme !== r.theme && e.theme || t || r.theme;
}
var Et = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Ln = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, zn = /(^-|-$)/g;
function Qt(e) {
  return e.replace(Ln, "-").replace(zn, "");
}
var Vn = /(a)(d)/gi, Be = 52, er = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Rt(e) {
  var t, r = "";
  for (t = Math.abs(e); t > Be; t = t / Be | 0)
    r = er(t % Be) + r;
  return (er(t % Be) + r).replace(Vn, "$1-$2");
}
var mt, Sr = 5381, le = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Er = function(e) {
  return le(Sr, e);
};
function Wn(e) {
  return Rt(Er(e) >>> 0);
}
function Rr(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function gt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var _r = typeof Symbol == "function" && Symbol.for, kr = _r ? Symbol.for("react.memo") : 60115, Yn = _r ? Symbol.for("react.forward_ref") : 60112, Bn = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Un = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, xr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Gn = ((mt = {})[Yn] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, mt[kr] = xr, mt);
function tr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === kr ? xr : "$$typeof" in e ? Gn[e.$$typeof] : Bn;
  var t;
}
var Hn = Object.defineProperty, qn = Object.getOwnPropertyNames, rr = Object.getOwnPropertySymbols, Kn = Object.getOwnPropertyDescriptor, Xn = Object.getPrototypeOf, nr = Object.prototype;
function Cr(e, t, r) {
  if (typeof t != "string") {
    if (nr) {
      var o = Xn(t);
      o && o !== nr && Cr(e, o, r);
    }
    var a = qn(t);
    rr && (a = a.concat(rr(t)));
    for (var s = tr(e), c = tr(t), f = 0; f < a.length; ++f) {
      var l = a[f];
      if (!(l in Un || r && r[l] || c && l in c || s && l in s)) {
        var h = Kn(t, l);
        try {
          Hn(e, l, h);
        } catch {
        }
      }
    }
  }
  return e;
}
function Ce(e) {
  return typeof e == "function";
}
function At(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function fe(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function or(e, t) {
  if (e.length === 0)
    return "";
  for (var r = e[0], o = 1; o < e.length; o++)
    r += t ? t + e[o] : e[o];
  return r;
}
function Pe(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function _t(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Pe(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      e[o] = _t(e[o], t[o]);
  else if (Pe(t))
    for (var o in t)
      e[o] = _t(e[o], t[o]);
  return e;
}
function It(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Jn = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function Zn() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var r = e[0], o = [], a = 1, s = e.length; a < s; a += 1)
    o.push(e[a]);
  return o.forEach(function(c) {
    r = r.replace(/%[a-z]/, c);
  }), r;
}
function Te(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Zn.apply(void 0, Re([Jn[e]], t, !1)).trim());
}
var Qn = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, o = 0; o < t; o++)
      r += this.groupSizes[o];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, a = o.length, s = a; t >= s; )
        if ((s <<= 1) < 0)
          throw Te(16, "".concat(t));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(o), this.length = s;
      for (var c = a; c < s; c++)
        this.groupSizes[c] = 0;
    }
    for (var f = this.indexOfGroup(t + 1), l = (c = 0, r.length); c < l; c++)
      this.tag.insertRule(f, r[c]) && (this.groupSizes[t]++, f++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], o = this.indexOfGroup(t), a = o + r;
      this.groupSizes[t] = 0;
      for (var s = o; s < a; s++)
        this.tag.deleteRule(o);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var o = this.groupSizes[t], a = this.indexOfGroup(t), s = a + o, c = a; c < s; c++)
      r += "".concat(this.tag.getRule(c)).concat(Ot);
    return r;
  }, e;
}(), Xe = /* @__PURE__ */ new Map(), Qe = /* @__PURE__ */ new Map(), Je = 1, Ue = function(e) {
  if (Xe.has(e))
    return Xe.get(e);
  for (; Qe.has(Je); )
    Je++;
  var t = Je++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw Te(16, "".concat(t));
  return Xe.set(e, t), Qe.set(t, e), t;
}, eo = function(e, t) {
  Je = t + 1, Xe.set(e, t), Qe.set(t, e);
}, to = "style[".concat(me, "][").concat(wr, '="').concat(ot, '"]'), ro = new RegExp("^".concat(me, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), no = function(e, t, r) {
  for (var o, a = r.split(","), s = 0, c = a.length; s < c; s++)
    (o = a[s]) && e.registerName(t, o);
}, oo = function(e, t) {
  for (var r, o = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(Ot), a = [], s = 0, c = o.length; s < c; s++) {
    var f = o[s].trim();
    if (f) {
      var l = f.match(ro);
      if (l) {
        var h = 0 | parseInt(l[1], 10), p = l[2];
        h !== 0 && (eo(p, h), no(e, p, l[3]), e.getTag().insertRules(h, a)), a.length = 0;
      } else
        a.push(f);
    }
  }
};
function ao() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Pr = function(e) {
  var t = document.head, r = e || t, o = document.createElement("style"), a = function(f) {
    var l = Array.from(f.querySelectorAll("style[".concat(me, "]")));
    return l[l.length - 1];
  }(r), s = a !== void 0 ? a.nextSibling : null;
  o.setAttribute(me, br), o.setAttribute(wr, ot);
  var c = ao();
  return c && o.setAttribute("nonce", c), r.insertBefore(o, s), o;
}, io = function() {
  function e(t) {
    this.element = Pr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet)
        return r.sheet;
      for (var o = document.styleSheets, a = 0, s = o.length; a < s; a++) {
        var c = o[a];
        if (c.ownerNode === r)
          return c;
      }
      throw Te(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), so = function() {
  function e(t) {
    this.element = Pr(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(r);
      return this.element.insertBefore(o, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), co = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), ar = Tt, uo = { isServer: !Tt, useCSSOMInjection: !$n }, Or = function() {
  function e(t, r, o) {
    t === void 0 && (t = xe), r === void 0 && (r = {});
    var a = this;
    this.options = W(W({}, uo), t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && Tt && ar && (ar = !1, function(s) {
      for (var c = document.querySelectorAll(to), f = 0, l = c.length; f < l; f++) {
        var h = c[f];
        h && h.getAttribute(me) !== br && (oo(s, h), h.parentNode && h.parentNode.removeChild(h));
      }
    }(this)), It(this, function() {
      return function(s) {
        for (var c = s.getTag(), f = c.length, l = "", h = function(m) {
          var b = function(x) {
            return Qe.get(x);
          }(m);
          if (b === void 0)
            return "continue";
          var E = s.names.get(b), O = c.getGroup(m);
          if (E === void 0 || O.length === 0)
            return "continue";
          var N = "".concat(me, ".g").concat(m, '[id="').concat(b, '"]'), M = "";
          E !== void 0 && E.forEach(function(x) {
            x.length > 0 && (M += "".concat(x, ","));
          }), l += "".concat(O).concat(N, '{content:"').concat(M, '"}').concat(Ot);
        }, p = 0; p < f; p++)
          h(p);
        return l;
      }(a);
    });
  }
  return e.registerId = function(t) {
    return Ue(t);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(W(W({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var o = r.useCSSOMInjection, a = r.target;
      return r.isServer ? new co(a) : o ? new io(a) : new so(a);
    }(this.options), new Qn(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (Ue(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, e.prototype.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(Ue(t), o);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Ue(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), lo = /&/g, fo = /^\s*\/\/.*$/gm;
function Tr(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(o) {
      return "".concat(t, " ").concat(o);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Tr(r.children, t)), r;
  });
}
function po(e) {
  var t, r, o, a = e === void 0 ? xe : e, s = a.options, c = s === void 0 ? xe : s, f = a.plugins, l = f === void 0 ? at : f, h = function(b, E, O) {
    return O.startsWith(r) && O.endsWith(r) && O.replaceAll(r, "").length > 0 ? ".".concat(t) : b;
  }, p = l.slice();
  p.push(function(b) {
    b.type === et && b.value.includes("&") && (b.props[0] = b.props[0].replace(lo, r).replace(o, h));
  }), c.prefix && p.push(jn), p.push(An);
  var m = function(b, E, O, N) {
    E === void 0 && (E = ""), O === void 0 && (O = ""), N === void 0 && (N = "&"), t = N, r = E, o = new RegExp("\\".concat(r, "\\b"), "g");
    var M = b.replace(fo, ""), x = On(O || E ? "".concat(O, " ").concat(E, " { ").concat(M, " }") : M);
    c.namespace && (x = Tr(x, c.namespace));
    var v = [];
    return Ze(x, In(p.concat(Nn(function(C) {
      return v.push(C);
    })))), v;
  };
  return m.hash = l.length ? l.reduce(function(b, E) {
    return E.name || Te(15), le(b, E.name);
  }, Sr).toString() : "", m;
}
var ho = new Or(), kt = po(), Ar = he.createContext({ shouldForwardProp: void 0, styleSheet: ho, stylis: kt });
Ar.Consumer;
he.createContext(void 0);
function ir() {
  return ln(Ar);
}
var sr = function() {
  function e(t, r) {
    var o = this;
    this.inject = function(a, s) {
      s === void 0 && (s = kt);
      var c = o.name + s.hash;
      a.hasNameForId(o.id, c) || a.insertRules(o.id, c, s(o.rules, c, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, It(this, function() {
      throw Te(12, String(o.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = kt), this.name + t.hash;
  }, e;
}(), mo = function(e) {
  return e >= "A" && e <= "Z";
};
function cr(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var o = e[r];
    if (r === 1 && o === "-" && e[0] === "-")
      return e;
    mo(o) ? t += "-" + o.toLowerCase() : t += o;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Ir = function(e) {
  return e == null || e === !1 || e === "";
}, Nr = function(e) {
  var t, r, o = [];
  for (var a in e) {
    var s = e[a];
    e.hasOwnProperty(a) && !Ir(s) && (Array.isArray(s) && s.isCss || Ce(s) ? o.push("".concat(cr(a), ":"), s, ";") : Pe(s) ? o.push.apply(o, Re(Re(["".concat(a, " {")], Nr(s), !1), ["}"], !1)) : o.push("".concat(cr(a), ": ").concat((t = a, (r = s) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Dn || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return o;
};
function pe(e, t, r, o) {
  if (Ir(e))
    return [];
  if (At(e))
    return [".".concat(e.styledComponentId)];
  if (Ce(e)) {
    if (!Ce(s = e) || s.prototype && s.prototype.isReactComponent || !t)
      return [e];
    var a = e(t);
    return process.env.NODE_ENV === "production" || typeof a != "object" || Array.isArray(a) || a instanceof sr || Pe(a) || a === null || console.error("".concat(Rr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), pe(a, t, r, o);
  }
  var s;
  return e instanceof sr ? r ? (e.inject(r, o), [e.getName(o)]) : [e] : Pe(e) ? Nr(e) : Array.isArray(e) ? Array.prototype.concat.apply(at, e.map(function(c) {
    return pe(c, t, r, o);
  })) : [e.toString()];
}
function go(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Ce(r) && !At(r))
      return !1;
  }
  return !0;
}
var yo = Er(ot), vo = function() {
  function e(t, r, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && go(t), this.componentId = r, this.baseHash = le(yo, r), this.baseStyle = o, Or.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, o) {
    var a = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, o) : "";
    if (this.isStatic && !o.hash)
      if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId))
        a = fe(a, this.staticRulesId);
      else {
        var s = or(pe(this.rules, t, r, o)), c = Rt(le(this.baseHash, s) >>> 0);
        if (!r.hasNameForId(this.componentId, c)) {
          var f = o(s, ".".concat(c), void 0, this.componentId);
          r.insertRules(this.componentId, c, f);
        }
        a = fe(a, c), this.staticRulesId = c;
      }
    else {
      for (var l = le(this.baseHash, o.hash), h = "", p = 0; p < this.rules.length; p++) {
        var m = this.rules[p];
        if (typeof m == "string")
          h += m, process.env.NODE_ENV !== "production" && (l = le(l, m));
        else if (m) {
          var b = or(pe(m, t, r, o));
          l = le(l, b + p), h += b;
        }
      }
      if (h) {
        var E = Rt(l >>> 0);
        r.hasNameForId(this.componentId, E) || r.insertRules(this.componentId, E, o(h, ".".concat(E), void 0, this.componentId)), a = fe(a, E);
      }
    }
    return a;
  }, e;
}(), jr = he.createContext(void 0);
jr.Consumer;
var yt = {}, ur = /* @__PURE__ */ new Set();
function bo(e, t, r) {
  var o = At(e), a = e, s = !gt(e), c = t.attrs, f = c === void 0 ? at : c, l = t.componentId, h = l === void 0 ? function(T, I) {
    var S = typeof T != "string" ? "sc" : Qt(T);
    yt[S] = (yt[S] || 0) + 1;
    var g = "".concat(S, "-").concat(Wn(ot + S + yt[S]));
    return I ? "".concat(I, "-").concat(g) : g;
  }(t.displayName, t.parentComponentId) : l, p = t.displayName, m = p === void 0 ? function(T) {
    return gt(T) ? "styled.".concat(T) : "Styled(".concat(Rr(T), ")");
  }(e) : p, b = t.displayName && t.componentId ? "".concat(Qt(t.displayName), "-").concat(t.componentId) : t.componentId || h, E = o && a.attrs ? a.attrs.concat(f).filter(Boolean) : f, O = t.shouldForwardProp;
  if (o && a.shouldForwardProp) {
    var N = a.shouldForwardProp;
    if (t.shouldForwardProp) {
      var M = t.shouldForwardProp;
      O = function(T, I) {
        return N(T, I) && M(T, I);
      };
    } else
      O = N;
  }
  var x = new vo(r, b, o ? a.componentStyle : void 0);
  function v(T, I) {
    return function(S, g, Z) {
      var Q = S.attrs, it = S.componentStyle, st = S.defaultProps, Le = S.foldedComponentIds, Y = S.styledComponentId, ee = S.target, ce = he.useContext(jr), ze = ir(), ge = S.shouldForwardProp || ze.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Gt(Y);
      var Ae = Mn(g, ce, st) || xe, B = function(ve, te, ae) {
        for (var H, q = W(W({}, te), { className: void 0, theme: ae }), ie = 0; ie < ve.length; ie += 1) {
          var be = Ce(H = ve[ie]) ? H(q) : H;
          for (var K in be)
            q[K] = K === "className" ? fe(q[K], be[K]) : K === "style" ? W(W({}, q[K]), be[K]) : be[K];
        }
        return te.className && (q.className = fe(q.className, te.className)), q;
      }(Q, g, Ae), ne = B.as || ee, oe = {};
      for (var L in B)
        B[L] === void 0 || L[0] === "$" || L === "as" || L === "theme" && B.theme === Ae || (L === "forwardedAs" ? oe.as = B.forwardedAs : ge && !ge(L, ne) || (oe[L] = B[L], ge || process.env.NODE_ENV !== "development" || gn(L) || ur.has(L) || !Et.has(ne) || (ur.add(L), console.warn('styled-components: it looks like an unknown prop "'.concat(L, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ye = function(ve, te) {
        var ae = ir(), H = ve.generateAndInjectStyles(te, ae.styleSheet, ae.stylis);
        return process.env.NODE_ENV !== "production" && Gt(H), H;
      }(it, B);
      process.env.NODE_ENV !== "production" && S.warnTooManyClasses && S.warnTooManyClasses(ye);
      var Ie = fe(Le, Y);
      return ye && (Ie += " " + ye), B.className && (Ie += " " + B.className), oe[gt(ne) && !Et.has(ne) ? "class" : "className"] = Ie, oe.ref = Z, un(ne, oe);
    }(C, T, I);
  }
  v.displayName = m;
  var C = he.forwardRef(v);
  return C.attrs = E, C.componentStyle = x, C.displayName = m, C.shouldForwardProp = O, C.foldedComponentIds = o ? fe(a.foldedComponentIds, a.styledComponentId) : "", C.styledComponentId = b, C.target = o ? a.target : e, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = o ? function(I) {
      for (var S = [], g = 1; g < arguments.length; g++)
        S[g - 1] = arguments[g];
      for (var Z = 0, Q = S; Z < Q.length; Z++)
        _t(I, Q[Z], !0);
      return I;
    }({}, a.defaultProps, T) : T;
  } }), process.env.NODE_ENV !== "production" && (Fn(m, b), C.warnTooManyClasses = /* @__PURE__ */ function(T, I) {
    var S = {}, g = !1;
    return function(Z) {
      if (!g && (S[Z] = !0, Object.keys(S).length >= 200)) {
        var Q = I ? ' with the id of "'.concat(I, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(T).concat(Q, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), g = !0, S = {};
      }
    };
  }(m, b)), It(C, function() {
    return ".".concat(C.styledComponentId);
  }), s && Cr(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), C;
}
function lr(e, t) {
  for (var r = [e[0]], o = 0, a = t.length; o < a; o += 1)
    r.push(t[o], e[o + 1]);
  return r;
}
var fr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function wo(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (Ce(e) || Pe(e))
    return fr(pe(lr(at, Re([e], t, !0))));
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? pe(o) : fr(pe(lr(o, t)));
}
function xt(e, t, r) {
  if (r === void 0 && (r = xe), !t)
    throw Te(1, t);
  var o = function(a) {
    for (var s = [], c = 1; c < arguments.length; c++)
      s[c - 1] = arguments[c];
    return e(t, r, wo.apply(void 0, Re([a], s, !1)));
  };
  return o.attrs = function(a) {
    return xt(e, t, W(W({}, r), { attrs: Array.prototype.concat(r.attrs, a).filter(Boolean) }));
  }, o.withConfig = function(a) {
    return xt(e, t, W(W({}, r), a));
  }, o;
}
var Dr = function(e) {
  return xt(bo, e);
}, $r = Dr;
Et.forEach(function(e) {
  $r[e] = Dr(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ge = "__sc-".concat(me, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Ge] || (window[Ge] = 0), window[Ge] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ge] += 1);
const So = $r.button`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 10px;
  display: inline-block;
  color: ${(e) => e.primary ? "#fff" : "#000"};
  background-color: ${(e) => e.primary ? "#FF5655" : "#f4c4c4"};
  padding: ${(e) => e.size === "small" ? "7px 25px 8px" : e.size === "medium" ? "9px 30px 11px" : "14px 30px 16px"};
`, Ro = ({
  size: e,
  primary: t,
  disabled: r,
  text: o,
  onClick: a,
  ...s
}) => /* @__PURE__ */ pn.jsx(
  So,
  {
    type: "button",
    onClick: a,
    primary: t,
    disabled: r,
    size: e,
    ...s,
    children: o
  }
);
export {
  Ro as Button
};
//# sourceMappingURL=index.es.js.map
