/* eslint-disable no-fallthrough */
/* eslint-disable no-useless-escape */
/* eslint-disable no-restricted-globals */
/* eslint-disable new-cap */
/* eslint-disable no-redeclare */
/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-properties */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-empty */
/* eslint-disable no-func-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable no-loop-func */
/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
/* eslint-disable default-case */
/* eslint-disable no-void */
/* eslint-disable no-multi-assign */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-spread */
/* eslint-disable no-nested-ternary */
/* eslint-disable block-scoped-var */
/* eslint-disable no-cond-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-var */
/* eslint-disable no-unreachable */
/* eslint-disable no-return-assign */
/* eslint-disable guard-for-in */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-plusplus */
/* eslint-disable vars-on-top */
const luxon = (function (e) {
  function r(e, t) {
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      // eslint-disable-next-line no-unused-expressions
      (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
    }
  }
  function o(e, t, n) {
    return t && r(e.prototype, t), n && r(e, n), e;
  }
  function s() {
    // eslint-disable-next-line no-return-assign
    return (s = Object.assign
      || function (e) {
        for (let t = 1; t < arguments.length; t++) {
          // eslint-disable-next-line no-var
          var n;
          const r = arguments[t];

          for (n in r) { Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]); }
        }
        return e;
      // eslint-disable-next-line prefer-rest-params
      }).apply(this, arguments);
  }
  function i(e, t) {
    (e.prototype = Object.create(t.prototype)),
    a((e.prototype.constructor = e), t);
  }
  function u(e) {
    // eslint-disable-next-line no-return-assign
    return (u = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
        // eslint-disable-next-line no-proto
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
  }
  function a(e, t) {
    return (a = Object.setPrototypeOf
      || function (e, t) {
        // eslint-disable-next-line no-proto
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function c(e, t, n) {
    return (c = (function () {
      if (
        typeof Reflect !== 'undefined'
        && Reflect.construct
        && !Reflect.construct.sham
      ) {
        if (typeof Proxy === 'function') return 1;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], () => {}),
            ),
            1
          );
        } catch (e) {

        }
      }
    }())
      ? Reflect.construct
      : function (e, t, n) {
        let r = [null];
        r.push.apply(r, t);
        r = new (Function.bind.apply(e, r))();
        return n && a(r, n.prototype), r;
      }).apply(null, arguments);
  }
  function t(e) {
    const n = typeof Map === 'function' ? new Map() : void 0;
    return (function (e) {
      if (
        e === null
        || Function.toString.call(e).indexOf('[native code]') === -1
      ) { return e; }
      if (typeof e !== 'function') {
        throw new TypeError(
          'Super expression must either be null or a function',
        );
      }
      if (void 0 !== n) {
        if (n.has(e)) return n.get(e);
        n.set(e, t);
      }
      function t() {
        return c(e, arguments, u(this).constructor);
      }
      return (
        (t.prototype = Object.create(e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        a(t, e)
      );
    }(e));
  }
  function l(e, t) {
    if (e == null) return {};
    for (var n, r = {}, i = Object.keys(e), o = 0; o < i.length; o++) { (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]); }
    return r;
  }
  function f(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function k(e, t) {
    let n = (typeof Symbol !== 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
      Array.isArray(e)
      || (n = (function (e, t) {
        if (e) {
          if (typeof e === 'string') return f(e, t);
          let n = Object.prototype.toString.call(e).slice(8, -1);
          return (n = n === 'Object' && e.constructor ? e.constructor.name : n)
            === 'Map'
            || n === 'Set'
            ? Array.from(e)
            : n === 'Arguments'
              || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? f(e, t)
              : void 0;
        }
      }(e)))
      || (t && e && typeof e.length === 'number')
    ) {
      n && (e = n);
      let r = 0;
      return function () {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }
  var n = (function (e) {
    function t() {
      return e.apply(this, arguments) || this;
    }
    return i(t, e), t;
  }(t(Error)));
  const d = (function (t) {
    function e(e) {
      return t.call(this, `Invalid DateTime: ${e.toMessage()}`) || this;
    }
    return i(e, t), e;
  }(n));
  const h = (function (t) {
    function e(e) {
      return t.call(this, `Invalid Interval: ${e.toMessage()}`) || this;
    }
    return i(e, t), e;
  }(n));
  const y = (function (t) {
    function e(e) {
      return t.call(this, `Invalid Duration: ${e.toMessage()}`) || this;
    }
    return i(e, t), e;
  }(n));
  const S = (function (e) {
    function t() {
      return e.apply(this, arguments) || this;
    }
    return i(t, e), t;
  }(n));
  const v = (function (t) {
    function e(e) {
      return t.call(this, `Invalid unit ${e}`) || this;
    }
    return i(e, t), e;
  }(n));
  const p = (function (e) {
    function t() {
      return e.apply(this, arguments) || this;
    }
    return i(t, e), t;
  }(n));
  const m = (function (e) {
    function t() {
      return e.call(this, 'Zone is an abstract class') || this;
    }
    return i(t, e), t;
  }(n));
  var g = 'numeric';
  var w = 'short';
  var T = 'long';
  const b = { year: g, month: g, day: g };
  const O = { year: g, month: w, day: g };
  const M = {
    year: g, month: w, day: g, weekday: w,
  };
  const N = { year: g, month: T, day: g };
  const D = {
    year: g, month: T, day: g, weekday: T,
  };
  const E = { hour: g, minute: g };
  const V = { hour: g, minute: g, second: g };
  const I = {
    hour: g, minute: g, second: g, timeZoneName: w,
  };
  const x = {
    hour: g, minute: g, second: g, timeZoneName: T,
  };
  const C = { hour: g, minute: g, hourCycle: 'h23' };
  const F = {
    hour: g, minute: g, second: g, hourCycle: 'h23',
  };
  const L = {
    hour: g, minute: g, second: g, hourCycle: 'h23', timeZoneName: w,
  };
  const Z = {
    hour: g, minute: g, second: g, hourCycle: 'h23', timeZoneName: T,
  };
  const A = {
    year: g, month: g, day: g, hour: g, minute: g,
  };
  const z = {
    year: g, month: g, day: g, hour: g, minute: g, second: g,
  };
  const j = {
    year: g, month: w, day: g, hour: g, minute: g,
  };
  const q = {
    year: g, month: w, day: g, hour: g, minute: g, second: g,
  };
  const _ = {
    year: g, month: w, day: g, weekday: w, hour: g, minute: g,
  };
  const U = {
    year: g, month: T, day: g, hour: g, minute: g, timeZoneName: w,
  };
  const R = {
    year: g,
    month: T,
    day: g,
    hour: g,
    minute: g,
    second: g,
    timeZoneName: w,
  };
  const H = {
    year: g,
    month: T,
    day: g,
    weekday: T,
    hour: g,
    minute: g,
    timeZoneName: T,
  };
  const P = {
    year: g,
    month: T,
    day: g,
    weekday: T,
    hour: g,
    minute: g,
    second: g,
    timeZoneName: T,
  };
  function W(e) {
    return void 0 === e;
  }
  function J(e) {
    return typeof e === 'number';
  }
  function Y(e) {
    return typeof e === 'number' && e % 1 == 0;
  }
  function G() {
    try {
      return typeof Intl !== 'undefined' && !!Intl.RelativeTimeFormat;
    } catch (e) {
      return !1;
    }
  }
  function $(e, n, r) {
    if (e.length !== 0) {
      return e.reduce((e, t) => {
        t = [n(t), t];
        return e && r(e[0], t[0]) === e[0] ? e : t;
      }, null)[1];
    }
  }
  function B(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function Q(e, t, n) {
    return Y(e) && t <= e && e <= n;
  }
  function K(e, t) {
    void 0 === t && (t = 2);
    t = e < 0 ? `-${(`${-e}`).padStart(t, '0')}` : (`${e}`).padStart(t, '0');
    return t;
  }
  function X(e) {
    if (!W(e) && e !== null && e !== '') return parseInt(e, 10);
  }
  function ee(e) {
    if (!W(e) && e !== null && e !== '') return parseFloat(e);
  }
  function te(e) {
    if (!W(e) && e !== null && e !== '') {
      e = 1e3 * parseFloat(`0.${e}`);
      return Math.floor(e);
    }
  }
  function ne(e, t, n) {
    void 0 === n && (n = !1);
    t = Math.pow(10, t);
    return (n ? Math.trunc : Math.round)(e * t) / t;
  }
  function re(e) {
    return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
  }
  function ie(e) {
    return re(e) ? 366 : 365;
  }
  function oe(e, t) {
    let n;
    var r = (n = t - 1) - (r = 12) * Math.floor(n / r) + 1;
    return r == 2
      ? re(e + (t - r) / 12)
        ? 29
        : 28
      : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][r - 1];
  }
  function ue(e) {
    let t = Date.UTC(
      e.year,
      e.month - 1,
      e.day,
      e.hour,
      e.minute,
      e.second,
      e.millisecond,
    );
    return (
      e.year < 100
        && e.year >= 0
        && (t = new Date(t)).setUTCFullYear(t.getUTCFullYear() - 1900),
      +t
    );
  }
  function ae(e) {
    const t = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7;
    var e = e - 1;
    var e = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7;
    return t == 4 || e == 3 ? 53 : 52;
  }
  function se(e) {
    // eslint-disable-next-line no-nested-ternary
    return e > 99 ? e : e > 60 ? 1900 + e : 2e3 + e;
  }
  function ce(e, t, n, r) {
    void 0 === r && (r = null);
    let i = new Date(e);
    // eslint-disable-next-line no-var
    var e = {
      hourCycle: 'h23',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };
    r && (e.timeZone = r);
    (e = { timeZoneName: t, ...e }),
    (i = new Intl.DateTimeFormat(n, e).formatToParts(i).find((e) => e.type.toLowerCase() === 'timezonename'));
    return i ? i.value : null;
  }
  function le(e, t) {
    e = parseInt(e, 10);
    Number.isNaN(e) && (e = 0);
    t = parseInt(t, 10) || 0;
    return 60 * e + (e < 0 || Object.is(e, -0) ? -t : t);
  }
  function fe(e) {
    const t = Number(e);
    if (typeof e === 'boolean' || e === '' || Number.isNaN(t)) { throw new p(`Invalid unit value ${e}`); }
    return t;
  }
  function de(e, t) {
    let n;
    let r;
    const i = {};
    // eslint-disable-next-line no-restricted-syntax
    for (n in e) !B(e, n) || ((r = e[n]) != null && (i[t(n)] = fe(r)));
    return i;
  }
  function he(e, t) {
    const n = Math.trunc(Math.abs(e / 60));
    const r = Math.trunc(Math.abs(e % 60));
    const i = e >= 0 ? '+' : '-';
    switch (t) {
      case 'short':
        return `${i + K(n, 2)}:${K(r, 2)}`;
      case 'narrow':
        return i + n + (r > 0 ? `:${r}` : '');
      case 'techie':
        return i + K(n, 2) + K(r, 2);
      default:
        throw new RangeError(
          `Value format ${t} is out of range for property format`,
        );
    }
  }
  function me(e) {
    return (
      (n = e),
      ['hour', 'minute', 'second', 'millisecond'].reduce((e, t) => ((e[t] = n[t]), e), {})
    );
    let n;
  }
  // eslint-disable-next-line no-var
  var ye = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z0-9_+-]{1,256}(\/[A-Za-z0-9_+-]{1,256})?)?/;
  const ve = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const pe = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const ge = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  function we(e) {
    switch (e) {
      case 'narrow':
        return [].concat(ge);
      case 'short':
        return [].concat(pe);
      case 'long':
        return [].concat(ve);
      case 'numeric':
        return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
      case '2-digit':
        return [
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
          '10',
          '11',
          '12',
        ];
      default:
        return null;
    }
  }
  const ke = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const Se = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const Te = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  function be(e) {
    switch (e) {
      case 'narrow':
        return [].concat(Te);
      case 'short':
        return [].concat(Se);
      case 'long':
        return [].concat(ke);
      case 'numeric':
        return ['1', '2', '3', '4', '5', '6', '7'];
      default:
        return null;
    }
  }
  const Oe = ['AM', 'PM'];
  const Me = ['Before Christ', 'Anno Domini'];
  const Ne = ['BC', 'AD'];
  const De = ['B', 'A'];
  function Ee(e) {
    switch (e) {
      case 'narrow':
        return [].concat(De);
      case 'short':
        return [].concat(Ne);
      case 'long':
        return [].concat(Me);
      default:
        return null;
    }
  }
  function Ve(e, t) {
    // eslint-disable-next-line no-var
    for (var n = '', r = k(e); !(i = r()).done;) {
      var i = i.value;
      i.literal ? (n += i.val) : (n += t(i.val));
    }
    return n;
  }
  const Ie = {
    D: b,
    DD: O,
    DDD: N,
    DDDD: D,
    t: E,
    tt: V,
    ttt: I,
    tttt: x,
    T: C,
    TT: F,
    TTT: L,
    TTTT: Z,
    f: A,
    ff: j,
    fff: U,
    ffff: H,
    F: z,
    FF: q,
    FFF: R,
    FFFF: P,
  };
  const xe = (function () {
    function d(e, t) {
      (this.opts = t), (this.loc = e), (this.systemLoc = null);
    }
    (d.create = function (e, t) {
      return new d(e, (t = void 0 === t ? {} : t));
    }),
    (d.parseFormat = function (e) {
      for (var t = null, n = '', r = !1, i = [], o = 0; o < e.length; o++) {
        const u = e.charAt(o);
        u === "'"
          ? (n.length > 0 && i.push({ literal: r, val: n }),
          (t = null),
          (n = ''),
          (r = !r))
          : r || u === t
            ? (n += u)
            : (n.length > 0 && i.push({ literal: !1, val: n }), (t = n = u));
      }
      return n.length > 0 && i.push({ literal: r, val: n }), i;
    }),
    (d.macroTokenToFormatOpts = function (e) {
      return Ie[e];
    });
    const e = d.prototype;
    return (
      (e.formatWithSystemDefault = function (e, t) {
        return (
          this.systemLoc === null
              && (this.systemLoc = this.loc.redefaultToSystem()),
          this.systemLoc.dtFormatter(e, { ...this.opts, ...t }).format()
        );
      }),
      (e.formatDateTime = function (e, t) {
        return this.loc
          .dtFormatter(e, { ...this.opts, ...(t = void 0 === t ? {} : t) })
          .format();
      }),
      (e.formatDateTimeParts = function (e, t) {
        return this.loc
          .dtFormatter(e, { ...this.opts, ...(t = void 0 === t ? {} : t) })
          .formatToParts();
      }),
      (e.resolvedOptions = function (e, t) {
        return this.loc
          .dtFormatter(e, { ...this.opts, ...(t = void 0 === t ? {} : t) })
          .resolvedOptions();
      }),
      (e.num = function (e, t) {
        if ((void 0 === t && (t = 0), this.opts.forceSimple)) return K(e, t);
        const n = { ...this.opts };
        return t > 0 && (n.padTo = t), this.loc.numberFormatter(n).format(e);
      }),
      (e.formatDateTimeFromString = function (r, e) {
        const n = this;
        const i = this.loc.listingMode() === 'en';
        const t = this.loc.outputCalendar && this.loc.outputCalendar !== 'gregory';
        const o = function (e, t) {
          return n.loc.extract(r, e, t);
        };
        const u = function (e) {
          return r.isOffsetFixed && r.offset === 0 && e.allowZ
            ? 'Z'
            : r.isValid
              ? r.zone.formatOffset(r.ts, e.format)
              : '';
        };
        const a = function () {
          return i
            ? Oe[r.hour < 12 ? 0 : 1]
            : o({ hour: 'numeric', hourCycle: 'h12' }, 'dayperiod');
        };
        const s = function (e, t) {
          return i
            ? ((n = r), we(e)[n.month - 1])
            : o(t ? { month: e } : { month: e, day: 'numeric' }, 'month');
          let n;
        };
        const c = function (e, t) {
          return i
            ? ((n = r), be(e)[n.weekday - 1])
            : o(
              t
                ? { weekday: e }
                : { weekday: e, month: 'long', day: 'numeric' },
              'weekday',
            );
          let n;
        };
        const l = function (e) {
          const t = d.macroTokenToFormatOpts(e);
          return t ? n.formatWithSystemDefault(r, t) : e;
        };
        const f = function (e) {
          return i
            ? ((t = r), Ee(e)[t.year < 0 ? 0 : 1])
            : o({ era: e }, 'era');
          let t;
        };
        return Ve(d.parseFormat(e), (e) => {
          switch (e) {
            case 'S':
              return n.num(r.millisecond);
            case 'u':
            case 'SSS':
              return n.num(r.millisecond, 3);
            case 's':
              return n.num(r.second);
            case 'ss':
              return n.num(r.second, 2);
            case 'uu':
              return n.num(Math.floor(r.millisecond / 10), 2);
            case 'uuu':
              return n.num(Math.floor(r.millisecond / 100));
            case 'm':
              return n.num(r.minute);
            case 'mm':
              return n.num(r.minute, 2);
            case 'h':
              return n.num(r.hour % 12 == 0 ? 12 : r.hour % 12);
            case 'hh':
              return n.num(r.hour % 12 == 0 ? 12 : r.hour % 12, 2);
            case 'H':
              return n.num(r.hour);
            case 'HH':
              return n.num(r.hour, 2);
            case 'Z':
              return u({ format: 'narrow', allowZ: n.opts.allowZ });
            case 'ZZ':
              return u({ format: 'short', allowZ: n.opts.allowZ });
            case 'ZZZ':
              return u({ format: 'techie', allowZ: n.opts.allowZ });
            case 'ZZZZ':
              return r.zone.offsetName(r.ts, {
                format: 'short',
                locale: n.loc.locale,
              });
            case 'ZZZZZ':
              return r.zone.offsetName(r.ts, {
                format: 'long',
                locale: n.loc.locale,
              });
            case 'z':
              return r.zoneName;
            case 'a':
              return a();
            case 'd':
              return t ? o({ day: 'numeric' }, 'day') : n.num(r.day);
            case 'dd':
              return t ? o({ day: '2-digit' }, 'day') : n.num(r.day, 2);
            case 'c':
              return n.num(r.weekday);
            case 'ccc':
              return c('short', !0);
            case 'cccc':
              return c('long', !0);
            case 'ccccc':
              return c('narrow', !0);
            case 'E':
              return n.num(r.weekday);
            case 'EEE':
              return c('short', !1);
            case 'EEEE':
              return c('long', !1);
            case 'EEEEE':
              return c('narrow', !1);
            case 'L':
              return t
                ? o({ month: 'numeric', day: 'numeric' }, 'month')
                : n.num(r.month);
            case 'LL':
              return t
                ? o({ month: '2-digit', day: 'numeric' }, 'month')
                : n.num(r.month, 2);
            case 'LLL':
              return s('short', !0);
            case 'LLLL':
              return s('long', !0);
            case 'LLLLL':
              return s('narrow', !0);
            case 'M':
              return t ? o({ month: 'numeric' }, 'month') : n.num(r.month);
            case 'MM':
              return t ? o({ month: '2-digit' }, 'month') : n.num(r.month, 2);
            case 'MMM':
              return s('short', !1);
            case 'MMMM':
              return s('long', !1);
            case 'MMMMM':
              return s('narrow', !1);
            case 'y':
              return t ? o({ year: 'numeric' }, 'year') : n.num(r.year);
            case 'yy':
              return t
                ? o({ year: '2-digit' }, 'year')
                : n.num(r.year.toString().slice(-2), 2);
            case 'yyyy':
              return t ? o({ year: 'numeric' }, 'year') : n.num(r.year, 4);
            case 'yyyyyy':
              return t ? o({ year: 'numeric' }, 'year') : n.num(r.year, 6);
            case 'G':
              return f('short');
            case 'GG':
              return f('long');
            case 'GGGGG':
              return f('narrow');
            case 'kk':
              return n.num(r.weekYear.toString().slice(-2), 2);
            case 'kkkk':
              return n.num(r.weekYear, 4);
            case 'W':
              return n.num(r.weekNumber);
            case 'WW':
              return n.num(r.weekNumber, 2);
            case 'o':
              return n.num(r.ordinal);
            case 'ooo':
              return n.num(r.ordinal, 3);
            case 'q':
              return n.num(r.quarter);
            case 'qq':
              return n.num(r.quarter, 2);
            case 'X':
              return n.num(Math.floor(r.ts / 1e3));
            case 'x':
              return n.num(r.ts);
            default:
              return l(e);
          }
        });
      }),
      (e.formatDurationFromString = function (e, t) {
        let n;
        const r = this;
        const i = function (e) {
          switch (e[0]) {
            case 'S':
              return 'millisecond';
            case 's':
              return 'second';
            case 'm':
              return 'minute';
            case 'h':
              return 'hour';
            case 'd':
              return 'day';
            case 'M':
              return 'month';
            case 'y':
              return 'year';
            default:
              return null;
          }
        };
        const o = d.parseFormat(t);
        var t = o.reduce((e, t) => {
          const n = t.literal;
          var t = t.val;
          return n ? e : e.concat(t);
        }, []);
        var t = e.shiftTo.apply(
          e,
          t.map(i).filter((e) => e),
        );
        return Ve(
          o,
          ((n = t),
          function (e) {
            const t = i(e);
            return t ? r.num(n.get(t), e.length) : e;
          }),
        );
      }),
      d
    );
  }());
  const Ce = (function () {
    function e(e, t) {
      (this.reason = e), (this.explanation = t);
    }
    return (
      (e.prototype.toMessage = function () {
        return this.explanation
          ? `${this.reason}: ${this.explanation}`
          : this.reason;
      }),
      e
    );
  }());
  const Fe = (function () {
    function e() {}
    const t = e.prototype;
    return (
      (t.offsetName = function (e, t) {
        throw new m();
      }),
      (t.formatOffset = function (e, t) {
        throw new m();
      }),
      (t.offset = function (e) {
        throw new m();
      }),
      (t.equals = function (e) {
        throw new m();
      }),
      o(e, [
        {
          key: 'type',
          get() {
            throw new m();
          },
        },
        {
          key: 'name',
          get() {
            throw new m();
          },
        },
        {
          key: 'isUniversal',
          get() {
            throw new m();
          },
        },
        {
          key: 'isValid',
          get() {
            throw new m();
          },
        },
      ]),
      e
    );
  }());
  let Le = null;
  const Ze = (function (e) {
    function t() {
      return e.apply(this, arguments) || this;
    }
    i(t, e);
    const n = t.prototype;
    return (
      (n.offsetName = function (e, t) {
        return ce(e, t.format, t.locale);
      }),
      (n.formatOffset = function (e, t) {
        return he(this.offset(e), t);
      }),
      (n.offset = function (e) {
        return -new Date(e).getTimezoneOffset();
      }),
      (n.equals = function (e) {
        return e.type === 'system';
      }),
      o(
        t,
        [
          {
            key: 'type',
            get() {
              return 'system';
            },
          },
          {
            key: 'name',
            get() {
              return new Intl.DateTimeFormat().resolvedOptions().timeZone;
            },
          },
          {
            key: 'isUniversal',
            get() {
              return !1;
            },
          },
          {
            key: 'isValid',
            get() {
              return !0;
            },
          },
        ],
        [
          {
            key: 'instance',
            get() {
              return (Le = Le === null ? new t() : Le);
            },
          },
        ],
      ),
      t
    );
  }(Fe));
  const Ae = RegExp(`^${ye.source}$`);
  let ze = {};
  const je = {
    year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5,
  };
  let qe = {};
  const _e = (function (n) {
    function r(e) {
      const t = n.call(this) || this;
      return (t.zoneName = e), (t.valid = r.isValidZone(e)), t;
    }
    i(r, n),
    (r.create = function (e) {
      // eslint-disable-next-line no-sequences
      return qe[e] || (qe[e] = new r(e)), qe[e];
    }),
    (r.resetCache = function () {
      // eslint-disable-next-line no-sequences
      (qe = {}), (ze = {});
    }),
    (r.isValidSpecifier = function (e) {
      return !(!e || !e.match(Ae));
    }),
    (r.isValidZone = function (e) {
      if (!e) return !1;
      try {
        return (
          new Intl.DateTimeFormat('en-US', { timeZone: e }).format(), !0
        );
      } catch (e) {
        return !1;
      }
    });
    const e = r.prototype;
    return (
      (e.offsetName = function (e, t) {
        return ce(e, t.format, t.locale, this.name);
      }),
      (e.formatOffset = function (e, t) {
        return he(this.offset(e), t);
      }),
      (e.offset = function (e) {
        var t = new Date(e);
        if (isNaN(t)) return NaN;
        var n = ((r = this.name),
        ze[r]
                || (ze[r] = new Intl.DateTimeFormat('en-US', {
                  hour12: !1,
                  timeZone: r,
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                })),
        ze[r]);
        var e = n.formatToParts
          ? (function (e, t) {
            for (
              var n = e.formatToParts(t), r = [], i = 0;
              i < n.length;
              i++
            ) {
              var o = n[i];
              var u = o.type;
              var o = o.value;
              var u = je[u];
              W(u) || (r[u] = parseInt(o, 10));
            }
            return r;
          }(n, t))
          : ((i = t),
          (o = (u = n).format(i).replace(/\u200E/g, '')),
          (i = (u = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(
            o,
          ))[1]),
          (o = u[2]),
          [u[3], i, o, u[4], u[5], u[6]]);
        var r = e[0];
        var n = e[1];
        var i = e[2];
        var o = e[3];
        var u = +t;
        var t = u % 1e3;
        return (
          (ue({
            year: r,
            month: n,
            day: i,
            hour: o === 24 ? 0 : o,
            minute: e[4],
            second: e[5],
            millisecond: 0,
          })
              - (u -= t >= 0 ? t : 1e3 + t))
            / 6e4
        );
      }),
      (e.equals = function (e) {
        return e.type === 'iana' && e.name === this.name;
      }),
      o(r, [
        {
          key: 'type',
          get() {
            return 'iana';
          },
        },
        {
          key: 'name',
          get() {
            return this.zoneName;
          },
        },
        {
          key: 'isUniversal',
          get() {
            return !1;
          },
        },
        {
          key: 'isValid',
          get() {
            return this.valid;
          },
        },
      ]),
      r
    );
  }(Fe));
  let Ue = null;
  const Re = (function (n) {
    function t(e) {
      const t = n.call(this) || this;
      return (t.fixed = e), t;
    }
    i(t, n),
    (t.instance = function (e) {
      return e === 0 ? t.utcInstance : new t(e);
    }),
    (t.parseSpecifier = function (e) {
      if (e) {
        e = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
        if (e) return new t(le(e[1], e[2]));
      }
      return null;
    });
    const e = t.prototype;
    return (
      (e.offsetName = function () {
        return this.name;
      }),
      (e.formatOffset = function (e, t) {
        return he(this.fixed, t);
      }),
      (e.offset = function () {
        return this.fixed;
      }),
      (e.equals = function (e) {
        return e.type === 'fixed' && e.fixed === this.fixed;
      }),
      o(
        t,
        [
          {
            key: 'type',
            get() {
              return 'fixed';
            },
          },
          {
            key: 'name',
            get() {
              return this.fixed === 0
                ? 'UTC'
                : `UTC${he(this.fixed, 'narrow')}`;
            },
          },
          {
            key: 'isUniversal',
            get() {
              return !0;
            },
          },
          {
            key: 'isValid',
            get() {
              return !0;
            },
          },
        ],
        [
          {
            key: 'utcInstance',
            get() {
              return (Ue = Ue === null ? new t(0) : Ue);
            },
          },
        ],
      ),
      t
    );
  }(Fe));
  const He = (function (n) {
    function e(e) {
      const t = n.call(this) || this;
      return (t.zoneName = e), t;
    }
    i(e, n);
    const t = e.prototype;
    return (
      (t.offsetName = function () {
        return null;
      }),
      (t.formatOffset = function () {
        return '';
      }),
      (t.offset = function () {
        return NaN;
      }),
      (t.equals = function () {
        return !1;
      }),
      o(e, [
        {
          key: 'type',
          get() {
            return 'invalid';
          },
        },
        {
          key: 'name',
          get() {
            return this.zoneName;
          },
        },
        {
          key: 'isUniversal',
          get() {
            return !1;
          },
        },
        {
          key: 'isValid',
          get() {
            return !1;
          },
        },
      ]),
      e
    );
  }(Fe));
  function Pe(e, t) {
    if (W(e) || e === null) return t;
    if (e instanceof Fe) return e;
    if (typeof e !== 'string') {
      return J(e)
        ? Re.instance(e)
        : typeof e === 'object' && e.offset && typeof e.offset === 'number'
          ? e
          : new He(e);
    }
    const n = e.toLowerCase();
    return n === 'local' || n === 'system'
      ? t
      : n === 'utc' || n === 'gmt'
        ? Re.utcInstance
        : _e.isValidSpecifier(n)
          ? _e.create(e)
          : Re.parseSpecifier(n) || new He(e);
  }
  let We;
  let Je = function () {
    return Date.now();
  };
  let Ye = 'system';
  let Ge = null;
  let $e = null;
  let Be = null;
  const Qe = (function () {
    function e() {}
    return (
      (e.resetCaches = function () {
        lt.resetCache(), _e.resetCache();
      }),
      o(e, null, [
        {
          key: 'now',
          get() {
            return Je;
          },
          set(e) {
            Je = e;
          },
        },
        {
          key: 'defaultZone',
          get() {
            return Pe(Ye, Ze.instance);
          },
          set(e) {
            Ye = e;
          },
        },
        {
          key: 'defaultLocale',
          get() {
            return Ge;
          },
          set(e) {
            Ge = e;
          },
        },
        {
          key: 'defaultNumberingSystem',
          get() {
            return $e;
          },
          set(e) {
            $e = e;
          },
        },
        {
          key: 'defaultOutputCalendar',
          get() {
            return Be;
          },
          set(e) {
            Be = e;
          },
        },
        {
          key: 'throwOnInvalid',
          get() {
            return We;
          },
          set(e) {
            We = e;
          },
        },
      ]),
      e
    );
  }());
  const Ke = ['base'];
  const Xe = ['padTo', 'floor'];
  const et = {};
  let tt = {};
  function nt(e, t) {
    void 0 === t && (t = {});
    const n = JSON.stringify([e, t]);
    let r = tt[n];
    return r || ((r = new Intl.DateTimeFormat(e, t)), (tt[n] = r)), r;
  }
  let rt = {};
  let it = {};
  let ot = null;
  function ut(e, t, n, r, i) {
    n = e.listingMode(n);
    return n === 'error' ? null : (n === 'en' ? r : i)(t);
  }
  const at = (function () {
    function e(e, t, n) {
      (this.padTo = n.padTo || 0),
      (this.floor = n.floor || !1),
      n.padTo,
      n.floor;
      let r = l(n, Xe);
      (!t || Object.keys(r).length > 0)
          && ((r = { useGrouping: !1, ...n }),
          n.padTo > 0 && (r.minimumIntegerDigits = n.padTo),
          (this.inf = (function (e, t) {
            void 0 === t && (t = {});
            const n = JSON.stringify([e, t]);
            let r = rt[n];
            return r || ((r = new Intl.NumberFormat(e, t)), (rt[n] = r)), r;
          }(e, r))));
    }
    return (
      (e.prototype.format = function (e) {
        if (this.inf) {
          const t = this.floor ? Math.floor(e) : e;
          return this.inf.format(t);
        }
        return K(this.floor ? Math.floor(e) : ne(e, 3), this.padTo);
      }),
      e
    );
  }());
  const st = (function () {
    function e(e, t, n) {
      let r; let
        i;
      (this.opts = n),
      e.zone.isUniversal
        ? ((i = (i = (e.offset / 60) * -1) >= 0
          ? `Etc/GMT+${i}`
          : `Etc/GMT${i}`),
        e.offset !== 0 && _e.create(i).valid
          ? ((r = i), (this.dt = e))
          : ((r = 'UTC'),
          n.timeZoneName
            ? (this.dt = e)
            : (this.dt = e.offset === 0
              ? e
              : ir.fromMillis(e.ts + 60 * e.offset * 1e3))))
        : e.zone.type === 'system'
          ? (this.dt = e)
          : (r = (this.dt = e).zone.name);
      e = { ...this.opts };
      r && (e.timeZone = r), (this.dtf = nt(t, e));
    }
    const t = e.prototype;
    return (
      (t.format = function () {
        return this.dtf.format(this.dt.toJSDate());
      }),
      (t.formatToParts = function () {
        return this.dtf.formatToParts(this.dt.toJSDate());
      }),
      (t.resolvedOptions = function () {
        return this.dtf.resolvedOptions();
      }),
      e
    );
  }());
  const ct = (function () {
    function e(e, t, n) {
      (this.opts = { style: 'long', ...n }),
      !t
            && G()
            && (this.rtf = (function (e, t) {
              (r = t = void 0 === t ? {} : t).base;
              let n = l(r, Ke);
              var r = JSON.stringify([e, n]);
              return (
                (n = it[r])
                  || ((n = new Intl.RelativeTimeFormat(e, t)), (it[r] = n)),
                n
              );
            }(e, n)));
    }
    const t = e.prototype;
    return (
      (t.format = function (e, t) {
        return this.rtf
          ? this.rtf.format(e, t)
          : (function (e, t, n, r) {
            void 0 === n && (n = 'always'), void 0 === r && (r = !1);
            const i = {
              years: ['year', 'yr.'],
              quarters: ['quarter', 'qtr.'],
              months: ['month', 'mo.'],
              weeks: ['week', 'wk.'],
              days: ['day', 'day', 'days'],
              hours: ['hour', 'hr.'],
              minutes: ['minute', 'min.'],
              seconds: ['second', 'sec.'],
            };
            var o = ['hours', 'minutes', 'seconds'].indexOf(e) === -1;
            if (n === 'auto' && o) {
              const u = e === 'days';
              switch (t) {
                case 1:
                  return u ? 'tomorrow' : `next ${i[e][0]}`;
                case -1:
                  return u ? 'yesterday' : `last ${i[e][0]}`;
                case 0:
                  return u ? 'today' : `this ${i[e][0]}`;
              }
            }
            const a = Object.is(t, -0) || t < 0;
            var o = (n = Math.abs(t)) === 1;
            var t = i[e];
            var o = r ? (!o && t[2]) || t[1] : o ? i[e][0] : e;
            return a ? `${n} ${o} ago` : `in ${n} ${o}`;
          }(t, e, this.opts.numeric, this.opts.style !== 'long'));
      }),
      (t.formatToParts = function (e, t) {
        return this.rtf ? this.rtf.formatToParts(e, t) : [];
      }),
      e
    );
  }());
  var lt = (function () {
    function i(e, t, n, r) {
      var i = (function (e) {
        let t = e.indexOf('-u-');
        if (t === -1) return [e];
        t = e.substring(0, t);
        try {
          n = nt(e).resolvedOptions();
        } catch (e) {
          n = nt(t).resolvedOptions();
        }
        var n = n;
        return [t, n.numberingSystem, n.calendar];
      }(e));
      const o = i[0];
      var e = i[1];
      var i = i[2];
      (this.locale = o),
      (this.numberingSystem = t || e || null),
      (this.outputCalendar = n || i || null),
      (this.intl = ((e = this.locale),
      (n = this.numberingSystem),
      ((i = this.outputCalendar) || n)
              && ((e += '-u'), i && (e += `-ca-${i}`), n && (e += `-nu-${n}`)),
      e)),
      (this.weekdaysCache = { format: {}, standalone: {} }),
      (this.monthsCache = { format: {}, standalone: {} }),
      (this.meridiemCache = null),
      (this.eraCache = {}),
      (this.specifiedLocale = r),
      (this.fastNumbersCached = null);
    }
    (i.fromOpts = function (e) {
      return i.create(
        e.locale,
        e.numberingSystem,
        e.outputCalendar,
        e.defaultToEN,
      );
    }),
    (i.create = function (e, t, n, r) {
      void 0 === r && (r = !1);
      e = e || Qe.defaultLocale;
      return new i(
        e
              || (r
                ? 'en-US'
                : (ot = ot || new Intl.DateTimeFormat().resolvedOptions().locale)),
        t || Qe.defaultNumberingSystem,
        n || Qe.defaultOutputCalendar,
        e,
      );
    }),
    (i.resetCache = function () {
      (ot = null), (tt = {}), (rt = {}), (it = {});
    }),
    (i.fromObject = function (e) {
      var t = void 0 === e ? {} : e;
      const n = t.locale;
      var e = t.numberingSystem;
      var t = t.outputCalendar;
      return i.create(n, e, t);
    });
    const e = i.prototype;
    return (
      (e.listingMode = function () {
        const e = this.isEnglish();
        const t = !(
          (this.numberingSystem !== null
                && this.numberingSystem !== 'latn')
              || (this.outputCalendar !== null
                && this.outputCalendar !== 'gregory')
        );
        return e && t ? 'en' : 'intl';
      }),
      (e.clone = function (e) {
        return e && Object.getOwnPropertyNames(e).length !== 0
          ? i.create(
            e.locale || this.specifiedLocale,
            e.numberingSystem || this.numberingSystem,
            e.outputCalendar || this.outputCalendar,
            e.defaultToEN || !1,
          )
          : this;
      }),
      (e.redefaultToEN = function (e) {
        return this.clone(
          { ...(e = void 0 === e ? {} : e), defaultToEN: !0 },
        );
      }),
      (e.redefaultToSystem = function (e) {
        return this.clone(
          { ...(e = void 0 === e ? {} : e), defaultToEN: !1 },
        );
      }),
      (e.months = function (n, r, e) {
        const i = this;
        return (
          void 0 === r && (r = !1),
          ut(this, n, (e = void 0 === e ? !0 : e), we, () => {
            const t = r ? { month: n, day: 'numeric' } : { month: n };
            const e = r ? 'format' : 'standalone';
            return (
              i.monthsCache[e][n]
                  || (i.monthsCache[e][n] = (function (e) {
                    for (var t = [], n = 1; n <= 12; n++) {
                      const r = ir.utc(2016, n, 1);
                      t.push(e(r));
                    }
                    return t;
                  }((e) => i.extract(e, t, 'month')))),
              i.monthsCache[e][n]
            );
          })
        );
      }),
      (e.weekdays = function (n, r, e) {
        const i = this;
        return (
          void 0 === r && (r = !1),
          ut(this, n, (e = void 0 === e ? !0 : e), be, () => {
            const t = r
              ? {
                weekday: n,
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }
              : { weekday: n };
            const e = r ? 'format' : 'standalone';
            return (
              i.weekdaysCache[e][n]
                  || (i.weekdaysCache[e][n] = (function (e) {
                    for (var t = [], n = 1; n <= 7; n++) {
                      const r = ir.utc(2016, 11, 13 + n);
                      t.push(e(r));
                    }
                    return t;
                  }((e) => i.extract(e, t, 'weekday')))),
              i.weekdaysCache[e][n]
            );
          })
        );
      }),
      (e.meridiems = function (e) {
        const n = this;
        return ut(
          this,
          void 0,
          (e = void 0 === e ? !0 : e),
          () => Oe,
          () => {
            let t;
            return (
              n.meridiemCache
                  || ((t = { hour: 'numeric', hourCycle: 'h12' }),
                  (n.meridiemCache = [
                    ir.utc(2016, 11, 13, 9),
                    ir.utc(2016, 11, 13, 19),
                  ].map((e) => n.extract(e, t, 'dayperiod')))),
              n.meridiemCache
            );
          },
        );
      }),
      (e.eras = function (e, t) {
        const n = this;
        return ut(this, e, (t = void 0 === t ? !0 : t), Ee, () => {
          const t = { era: e };
          return (
            n.eraCache[e]
                || (n.eraCache[e] = [ir.utc(-40, 1, 1), ir.utc(2017, 1, 1)].map(
                  (e) => n.extract(e, t, 'era'),
                )),
            n.eraCache[e]
          );
        });
      }),
      (e.extract = function (e, t, n) {
        t = this.dtFormatter(e, t)
          .formatToParts()
          .find((e) => e.type.toLowerCase() === n);
        return t ? t.value : null;
      }),
      (e.numberFormatter = function (e) {
        return new at(
          this.intl,
          (e = void 0 === e ? {} : e).forceSimple || this.fastNumbers,
          e,
        );
      }),
      (e.dtFormatter = function (e, t) {
        return new st(e, this.intl, (t = void 0 === t ? {} : t));
      }),
      (e.relFormatter = function (e) {
        return (
          void 0 === e && (e = {}), new ct(this.intl, this.isEnglish(), e)
        );
      }),
      (e.listFormatter = function (e) {
        return (function (e, t) {
          void 0 === t && (t = {});
          const n = JSON.stringify([e, t]);
          let r = et[n];
          return r || ((r = new Intl.ListFormat(e, t)), (et[n] = r)), r;
        }(this.intl, (e = void 0 === e ? {} : e)));
      }),
      (e.isEnglish = function () {
        return (
          this.locale === 'en'
            || this.locale.toLowerCase() === 'en-us'
            || new Intl.DateTimeFormat(this.intl)
              .resolvedOptions()
              .locale.startsWith('en-us')
        );
      }),
      (e.equals = function (e) {
        return (
          this.locale === e.locale
            && this.numberingSystem === e.numberingSystem
            && this.outputCalendar === e.outputCalendar
        );
      }),
      o(i, [
        {
          key: 'fastNumbers',
          get() {
            let e;
            return (
              this.fastNumbersCached == null
                  && (this.fastNumbersCached = (!(e = this).numberingSystem
                      || e.numberingSystem === 'latn')
                    && (e.numberingSystem === 'latn'
                      || !e.locale
                      || e.locale.startsWith('en')
                      || new Intl.DateTimeFormat(e.intl).resolvedOptions()
                        .numberingSystem
                        === 'latn')),
              this.fastNumbersCached
            );
          },
        },
      ]),
      i
    );
  }());
  function ft() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) { t[n] = arguments[n]; }
    const r = t.reduce((e, t) => e + t.source, '');
    return RegExp(`^${r}$`);
  }
  function dt() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) { t[n] = arguments[n]; }
    return function (o) {
      return t
        .reduce(
          (e, t) => {
            const n = e[0];
            const r = e[1];
            var i = e[2];
            var e = t(o, i);
            var t = e[0];
            var i = e[1];
            var e = e[2];
            return [{ ...n, ...t }, r || i, e];
          },
          [{}, null, 1],
        )
        .slice(0, 2);
    };
  }
  function ht(e) {
    if (e == null) return [null, null];
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    ) { n[r - 1] = arguments[r]; }
    for (let i = 0, o = n; i < o.length; i++) {
      var u = o[i];
      var a = u[0];
      var u = u[1];
      var a = a.exec(e);
      if (a) return u(a);
    }
    return [null, null];
  }
  function mt() {
    for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++) { i[t] = arguments[t]; }
    return function (e, t) {
      for (var n = {}, r = 0; r < i.length; r++) n[i[r]] = X(e[t + r]);
      return [n, null, t + r];
    };
  }
  var yt = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
  const vt = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
  var n = RegExp(`${vt.source}${yt.source}?`);
  var w = RegExp(`(?:T${n.source})?`);
  var g = mt('weekYear', 'weekNumber', 'weekDay');
  var T = mt('year', 'ordinal');
  var yt = RegExp(`${vt.source} ?(?:${yt.source}|(${ye.source}))?`);
  var ye = RegExp(`(?: ${yt.source})?`);
  function pt(e, t, n) {
    t = e[t];
    return W(t) ? n : X(t);
  }
  function gt(e, t) {
    return [
      { year: pt(e, t), month: pt(e, t + 1, 1), day: pt(e, t + 2, 1) },
      null,
      t + 3,
    ];
  }
  function wt(e, t) {
    return [
      {
        hours: pt(e, t, 0),
        minutes: pt(e, t + 1, 0),
        seconds: pt(e, t + 2, 0),
        milliseconds: te(e[t + 3]),
      },
      null,
      t + 4,
    ];
  }
  function kt(e, t) {
    const n = !e[t] && !e[t + 1];
    var e = le(e[t + 1], e[t + 2]);
    return [{}, n ? null : Re.instance(e), t + 3];
  }
  function St(e, t) {
    return [{}, e[t] ? _e.create(e[t]) : null, t + 1];
  }
  const Tt = RegExp(`^T?${vt.source}$`);
  const bt = /^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
  function Ot(e) {
    function t(e, t) {
      return void 0 === t && (t = !1), void 0 !== e && (t || (e && l)) ? -e : e;
    }
    var n = e[0];
    const r = e[1];
    const i = e[2];
    const o = e[3];
    const u = e[4];
    const a = e[5];
    const s = e[6];
    const c = e[7];
    var e = e[8];
    var l = n[0] === '-';
    var n = c && c[0] === '-';
    return [
      {
        years: t(ee(r)),
        months: t(ee(i)),
        weeks: t(ee(o)),
        days: t(ee(u)),
        hours: t(ee(a)),
        minutes: t(ee(s)),
        seconds: t(ee(c), c === '-0'),
        milliseconds: t(te(e), n),
      },
    ];
  }
  const Mt = {
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480,
  };
  function Nt(e, t, n, r, i, o, u) {
    o = {
      year: t.length === 2 ? se(X(t)) : X(t),
      month: pe.indexOf(n) + 1,
      day: X(r),
      hour: X(i),
      minute: X(o),
    };
    return (
      u && (o.second = X(u)),
      e && (o.weekday = e.length > 3 ? ke.indexOf(e) + 1 : Se.indexOf(e) + 1),
      o
    );
  }
  const Dt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
  function Et(e) {
    const t = e[1];
    const n = e[2];
    const r = e[3];
    const i = e[4];
    const o = e[5];
    const u = e[6];
    var a = e[7];
    const s = e[8];
    const c = e[9];
    const l = e[10];
    var e = e[11];
    var a = Nt(t, i, r, n, o, u, a);
    var e = s ? Mt[s] : c ? 0 : le(l, e);
    return [a, new Re(e)];
  }
  const Vt = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/;
  const It = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/;
  const xt = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
  function Ct(e) {
    const t = e[1];
    const n = e[2];
    const r = e[3];
    return [Nt(t, e[4], r, n, e[5], e[6], e[7]), Re.utcInstance];
  }
  function Ft(e) {
    const t = e[1];
    const n = e[2];
    const r = e[3];
    const i = e[4];
    const o = e[5];
    const u = e[6];
    return [Nt(t, e[7], n, r, i, o, u), Re.utcInstance];
  }
  const Lt = ft(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, w);
  const Zt = ft(/(\d{4})-?W(\d\d)(?:-?(\d))?/, w);
  const At = ft(/(\d{4})-?(\d{3})/, w);
  const zt = ft(n);
  const jt = dt(gt, wt, kt);
  const qt = dt(g, wt, kt);
  const _t = dt(T, wt, kt);
  const Ut = dt(wt, kt);
  const Rt = dt(wt);
  const Ht = ft(/(\d{4})-(\d\d)-(\d\d)/, ye);
  const Pt = ft(yt);
  const Wt = dt(gt, wt, kt, St);
  const Jt = dt(wt, kt, St);
  var T = {
    weeks: {
      days: 7,
      hours: 168,
      minutes: 10080,
      seconds: 604800,
      milliseconds: 6048e5,
    },
    days: {
      hours: 24, minutes: 1440, seconds: 86400, milliseconds: 864e5,
    },
    hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 },
    minutes: { seconds: 60, milliseconds: 6e4 },
    seconds: { milliseconds: 1e3 },
  };
  const Yt = {
    years: {
      quarters: 4,
      months: 12,
      weeks: 52,
      days: 365,
      hours: 8760,
      minutes: 525600,
      seconds: 31536e3,
      milliseconds: 31536e6,
    },
    quarters: {
      months: 3,
      weeks: 13,
      days: 91,
      hours: 2184,
      minutes: 131040,
      seconds: 7862400,
      milliseconds: 78624e5,
    },
    months: {
      weeks: 4,
      days: 30,
      hours: 720,
      minutes: 43200,
      seconds: 2592e3,
      milliseconds: 2592e6,
    },
    ...T,
  };
  var ye = 365.2425;
  var yt = 30.436875;
  const Gt = {
    years: {
      quarters: 4,
      months: 12,
      weeks: ye / 7,
      days: ye,
      hours: 24 * ye,
      minutes: 525949.2,
      seconds: 525949.2 * 60,
      milliseconds: 525949.2 * 60 * 1e3,
    },
    quarters: {
      months: 3,
      weeks: ye / 28,
      days: ye / 4,
      hours: (24 * ye) / 4,
      minutes: 131487.3,
      seconds: (525949.2 * 60) / 4,
      milliseconds: 7889237999.999999,
    },
    months: {
      weeks: yt / 7,
      days: yt,
      hours: 24 * yt,
      minutes: 43829.1,
      seconds: 2629746,
      milliseconds: 2629746e3,
    },
    ...T,
  };
  const $t = [
    'years',
    'quarters',
    'months',
    'weeks',
    'days',
    'hours',
    'minutes',
    'seconds',
    'milliseconds',
  ];
  const Bt = $t.slice(0).reverse();
  function Qt(e, t, n) {
    e = {
      values: (n = void 0 === n ? !1 : n)
        ? t.values
        : ({ ...e.values, ...t.values || {} }),
      loc: e.loc.clone(t.loc),
      conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy,
    };
    return new Xt(e);
  }
  function Kt(e, t, n, r, i) {
    const o = e[i][n];
    var u = t[n] / o;
    var u = !(Math.sign(u) === Math.sign(r[i])) && r[i] !== 0 && Math.abs(u) <= 1
      ? (e = u) < 0
        ? Math.floor(e)
        : Math.ceil(e)
      : Math.trunc(u);
    (r[i] += u), (t[n] -= u * o);
  }
  var Xt = (function () {
    function m(e) {
      const t = e.conversionAccuracy === 'longterm' || !1;
      (this.values = e.values),
      (this.loc = e.loc || lt.create()),
      (this.conversionAccuracy = t ? 'longterm' : 'casual'),
      (this.invalid = e.invalid || null),
      (this.matrix = t ? Gt : Yt),
      (this.isLuxonDuration = !0);
    }
    (m.fromMillis = function (e, t) {
      return m.fromObject({ milliseconds: e }, t);
    }),
    (m.fromObject = function (e, t) {
      if ((void 0 === t && (t = {}), e == null || typeof e !== 'object')) {
        throw new p(
          `Duration.fromObject: argument expected to be an object, got ${
            e === null ? 'null' : typeof e}`,
        );
      }
      return new m({
        values: de(e, m.normalizeUnit),
        loc: lt.fromObject(t),
        conversionAccuracy: t.conversionAccuracy,
      });
    }),
    (m.fromDurationLike = function (e) {
      if (J(e)) return m.fromMillis(e);
      if (m.isDuration(e)) return e;
      if (typeof e === 'object') return m.fromObject(e);
      throw new p(
        `Unknown duration argument ${e} of type ${typeof e}`,
      );
    }),
    (m.fromISO = function (e, t) {
      const n = ht(e, [bt, Ot])[0];
      return n
        ? m.fromObject(n, t)
        : m.invalid(
          'unparsable',
          `the input "${e}" can't be parsed as ISO 8601`,
        );
    }),
    (m.fromISOTime = function (e, t) {
      const n = ht(e, [Tt, Rt])[0];
      return n
        ? m.fromObject(n, t)
        : m.invalid(
          'unparsable',
          `the input "${e}" can't be parsed as ISO 8601`,
        );
    }),
    (m.invalid = function (e, t) {
      if ((void 0 === t && (t = null), !e)) { throw new p('need to specify a reason the Duration is invalid'); }
      t = e instanceof Ce ? e : new Ce(e, t);
      if (Qe.throwOnInvalid) throw new y(t);
      return new m({ invalid: t });
    }),
    (m.normalizeUnit = function (e) {
      const t = {
        year: 'years',
        years: 'years',
        quarter: 'quarters',
        quarters: 'quarters',
        month: 'months',
        months: 'months',
        week: 'weeks',
        weeks: 'weeks',
        day: 'days',
        days: 'days',
        hour: 'hours',
        hours: 'hours',
        minute: 'minutes',
        minutes: 'minutes',
        second: 'seconds',
        seconds: 'seconds',
        millisecond: 'milliseconds',
        milliseconds: 'milliseconds',
      }[e && e.toLowerCase()];
      if (!t) throw new v(e);
      return t;
    }),
    (m.isDuration = function (e) {
      return (e && e.isLuxonDuration) || !1;
    });
    const e = m.prototype;
    return (
      (e.toFormat = function (e, t) {
        t = { ...(t = void 0 === t ? {} : t), floor: !1 !== t.round && !1 !== t.floor };
        return this.isValid
          ? xe.create(this.loc, t).formatDurationFromString(this, e)
          : 'Invalid Duration';
      }),
      (e.toHuman = function (n) {
        const r = this;
        void 0 === n && (n = {});
        const e = $t
          .map((e) => {
            const t = r.values[e];
            return W(t)
              ? null
              : r.loc
                .numberFormatter(
                  {
                    style: 'unit', unitDisplay: 'long', ...n, unit: e.slice(0, -1),
                  },
                )
                .format(t);
          })
          .filter((e) => e);
        return this.loc
          .listFormatter(
            { type: 'conjunction', style: n.listStyle || 'narrow', ...n },
          )
          .format(e);
      }),
      (e.toObject = function () {
        return this.isValid ? ({ ...this.values }) : {};
      }),
      (e.toISO = function () {
        if (!this.isValid) return null;
        let e = 'P';
        return (
          this.years !== 0 && (e += `${this.years}Y`),
          (this.months === 0 && this.quarters === 0)
              || (e += `${this.months + 3 * this.quarters}M`),
          this.weeks !== 0 && (e += `${this.weeks}W`),
          this.days !== 0 && (e += `${this.days}D`),
          (this.hours === 0
              && this.minutes === 0
              && this.seconds === 0
              && this.milliseconds === 0)
              || (e += 'T'),
          this.hours !== 0 && (e += `${this.hours}H`),
          this.minutes !== 0 && (e += `${this.minutes}M`),
          (this.seconds === 0 && this.milliseconds === 0)
              || (e += `${ne(this.seconds + this.milliseconds / 1e3, 3)}S`),
          e === 'P' && (e += 'T0S'),
          e
        );
      }),
      (e.toISOTime = function (e) {
        if ((void 0 === e && (e = {}), !this.isValid)) return null;
        var t = this.toMillis();
        if (t < 0 || t >= 864e5) return null;
        e = {
          suppressMilliseconds: !1,
          suppressSeconds: !1,
          includePrefix: !1,
          format: 'extended',
          ...e,
        };
        const n = this.shiftTo('hours', 'minutes', 'seconds', 'milliseconds');
        var t = e.format === 'basic' ? 'hhmm' : 'hh:mm';
        (e.suppressSeconds && n.seconds === 0 && n.milliseconds === 0)
            || ((t += e.format === 'basic' ? 'ss' : ':ss'),
            (e.suppressMilliseconds && n.milliseconds === 0) || (t += '.SSS'));
        t = n.toFormat(t);
        return (t = e.includePrefix ? `T${t}` : t);
      }),
      (e.toJSON = function () {
        return this.toISO();
      }),
      (e.toString = function () {
        return this.toISO();
      }),
      (e.toMillis = function () {
        return this.as('milliseconds');
      }),
      (e.valueOf = function () {
        return this.toMillis();
      }),
      (e.plus = function (e) {
        if (!this.isValid) return this;
        for (
          var t = m.fromDurationLike(e), n = {}, r = k($t);
          !(i = r()).done;

        ) {
          var i = i.value;
          (B(t.values, i) || B(this.values, i))
              && (n[i] = t.get(i) + this.get(i));
        }
        return Qt(this, { values: n }, !0);
      }),
      (e.minus = function (e) {
        if (!this.isValid) return this;
        e = m.fromDurationLike(e);
        return this.plus(e.negate());
      }),
      (e.mapUnits = function (e) {
        if (!this.isValid) return this;
        for (
          var t = {}, n = 0, r = Object.keys(this.values);
          n < r.length;
          n++
        ) {
          const i = r[n];
          t[i] = fe(e(this.values[i], i));
        }
        return Qt(this, { values: t }, !0);
      }),
      (e.get = function (e) {
        return this[m.normalizeUnit(e)];
      }),
      (e.set = function (e) {
        return this.isValid
          ? Qt(this, { values: { ...this.values, ...de(e, m.normalizeUnit) } })
          : this;
      }),
      (e.reconfigure = function (e) {
        var t = void 0 === e ? {} : e;
        const n = t.locale;
        var e = t.numberingSystem;
        var t = t.conversionAccuracy;
        var e = { loc: this.loc.clone({ locale: n, numberingSystem: e }) };
        return t && (e.conversionAccuracy = t), Qt(this, e);
      }),
      (e.as = function (e) {
        return this.isValid ? this.shiftTo(e).get(e) : NaN;
      }),
      (e.normalize = function () {
        if (!this.isValid) return this;
        let n;
        let r;
        const e = this.toObject();
        return (
          (n = this.matrix),
          (r = e),
          Bt.reduce((e, t) => (W(r[t]) ? e : (e && Kt(n, r, e, r, t), t)), null),
          Qt(this, { values: e }, !0)
        );
      }),
      (e.shiftTo = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) { t[n] = arguments[n]; }
        if (!this.isValid) return this;
        if (t.length === 0) return this;
        for (
          var r,
            t = t.map((e) => m.normalizeUnit(e)),
            i = {},
            o = {},
            u = this.toObject(),
            a = k($t);
          !(h = a()).done;

        ) {
          const s = h.value;
          if (t.indexOf(s) >= 0) {
            var c;
            var l = s;
            let f = 0;
            for (c in o) (f += this.matrix[c][s] * o[c]), (o[c] = 0);
            J(u[s]) && (f += u[s]);
            var d;
            var h = Math.trunc(f);
            for (d in ((i[s] = h), (o[s] = (1e3 * f - 1e3 * h) / 1e3), u)) { $t.indexOf(d) > $t.indexOf(s) && Kt(this.matrix, u, d, i, s); }
          } else J(u[s]) && (o[s] = u[s]);
        }
        for (r in o) o[r] !== 0 && (i[l] += r === l ? o[r] : o[r] / this.matrix[l][r]);
        return Qt(this, { values: i }, !0).normalize();
      }),
      (e.negate = function () {
        if (!this.isValid) return this;
        for (
          var e = {}, t = 0, n = Object.keys(this.values);
          t < n.length;
          t++
        ) {
          const r = n[t];
          e[r] = -this.values[r];
        }
        return Qt(this, { values: e }, !0);
      }),
      (e.equals = function (e) {
        if (!this.isValid || !e.isValid) return !1;
        if (!this.loc.equals(e.loc)) return !1;
        for (var t, n = k($t); !(t = n()).done;) {
          let r = t.value;
          if (
            ((t = this.values[r]),
            (r = e.values[r]),
            !(void 0 === t || t === 0 ? void 0 === r || r === 0 : t === r))
          ) { return !1; }
        }
        return !0;
      }),
      o(m, [
        {
          key: 'locale',
          get() {
            return this.isValid ? this.loc.locale : null;
          },
        },
        {
          key: 'numberingSystem',
          get() {
            return this.isValid ? this.loc.numberingSystem : null;
          },
        },
        {
          key: 'years',
          get() {
            return this.isValid ? this.values.years || 0 : NaN;
          },
        },
        {
          key: 'quarters',
          get() {
            return this.isValid ? this.values.quarters || 0 : NaN;
          },
        },
        {
          key: 'months',
          get() {
            return this.isValid ? this.values.months || 0 : NaN;
          },
        },
        {
          key: 'weeks',
          get() {
            return this.isValid ? this.values.weeks || 0 : NaN;
          },
        },
        {
          key: 'days',
          get() {
            return this.isValid ? this.values.days || 0 : NaN;
          },
        },
        {
          key: 'hours',
          get() {
            return this.isValid ? this.values.hours || 0 : NaN;
          },
        },
        {
          key: 'minutes',
          get() {
            return this.isValid ? this.values.minutes || 0 : NaN;
          },
        },
        {
          key: 'seconds',
          get() {
            return this.isValid ? this.values.seconds || 0 : NaN;
          },
        },
        {
          key: 'milliseconds',
          get() {
            return this.isValid ? this.values.milliseconds || 0 : NaN;
          },
        },
        {
          key: 'isValid',
          get() {
            return this.invalid === null;
          },
        },
        {
          key: 'invalidReason',
          get() {
            return this.invalid ? this.invalid.reason : null;
          },
        },
        {
          key: 'invalidExplanation',
          get() {
            return this.invalid ? this.invalid.explanation : null;
          },
        },
      ]),
      m
    );
  }());
  const en = 'Invalid Interval';
  var tn = (function () {
    function c(e) {
      (this.s = e.start),
      (this.e = e.end),
      (this.invalid = e.invalid || null),
      (this.isLuxonInterval = !0);
    }
    (c.invalid = function (e, t) {
      if ((void 0 === t && (t = null), !e)) { throw new p('need to specify a reason the Interval is invalid'); }
      t = e instanceof Ce ? e : new Ce(e, t);
      if (Qe.throwOnInvalid) throw new h(t);
      return new c({ invalid: t });
    }),
    (c.fromDateTimes = function (e, t) {
      const n = or(e);
      const r = or(t);
      var e = ((e = r),
      (t = n) && t.isValid
        ? e && e.isValid
          ? e < t
            ? tn.invalid(
              'end before start',
              `The end of an interval must be after its start, but you had start=${
                t.toISO()
              } and end=${
                e.toISO()}`,
            )
            : null
          : tn.invalid('missing or invalid end')
        : tn.invalid('missing or invalid start'));
      return e == null ? new c({ start: n, end: r }) : e;
    }),
    (c.after = function (e, t) {
      (t = Xt.fromDurationLike(t)), (e = or(e));
      return c.fromDateTimes(e, e.plus(t));
    }),
    (c.before = function (e, t) {
      (t = Xt.fromDurationLike(t)), (e = or(e));
      return c.fromDateTimes(e.minus(t), e);
    }),
    (c.fromISO = function (e, t) {
      let n;
      let r;
      let i;
      const o = (e || '').split('/', 2);
      const u = o[0];
      const a = o[1];
      if (u && a) {
        try {
          s = (n = ir.fromISO(u, t)).isValid;
        } catch (a) {
          s = !1;
        }
        try {
          i = (r = ir.fromISO(a, t)).isValid;
        } catch (a) {
          i = !1;
        }
        if (s && i) return c.fromDateTimes(n, r);
        if (s) {
          var s = Xt.fromISO(a, t);
          if (s.isValid) return c.after(n, s);
        } else if (i) {
          t = Xt.fromISO(u, t);
          if (t.isValid) return c.before(r, t);
        }
      }
      return c.invalid(
        'unparsable',
        `the input "${e}" can't be parsed as ISO 8601`,
      );
    }),
    (c.isInterval = function (e) {
      return (e && e.isLuxonInterval) || !1;
    });
    const e = c.prototype;
    return (
      (e.length = function (e) {
        return (
          void 0 === e && (e = 'milliseconds'),
          this.isValid ? this.toDuration.apply(this, [e]).get(e) : NaN
        );
      }),
      (e.count = function (e) {
        if (!this.isValid) return NaN;
        const t = this.start.startOf((e = void 0 === e ? 'milliseconds' : e));
        const n = this.end.startOf(e);
        return Math.floor(n.diff(t, e).get(e)) + 1;
      }),
      (e.hasSame = function (e) {
        return (
          !!this.isValid
            && (this.isEmpty() || this.e.minus(1).hasSame(this.s, e))
        );
      }),
      (e.isEmpty = function () {
        return this.s.valueOf() === this.e.valueOf();
      }),
      (e.isAfter = function (e) {
        return !!this.isValid && this.s > e;
      }),
      (e.isBefore = function (e) {
        return !!this.isValid && this.e <= e;
      }),
      (e.contains = function (e) {
        return !!this.isValid && this.s <= e && this.e > e;
      }),
      (e.set = function (e) {
        var t = void 0 === e ? {} : e;
        var e = t.start;
        var t = t.end;
        return this.isValid
          ? c.fromDateTimes(e || this.s, t || this.e)
          : this;
      }),
      (e.splitAt = function () {
        const t = this;
        if (!this.isValid) return [];
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) { n[r] = arguments[r]; }
        for (
          var i = n
              .map(or)
              .filter((e) => t.contains(e))
              .sort(),
            o = [],
            u = this.s,
            a = 0;
          u < this.e;

        ) {
          var s = i[a] || this.e;
          var s = +s > +this.e ? this.e : s;
          o.push(c.fromDateTimes(u, s)), (u = s), (a += 1);
        }
        return o;
      }),
      (e.splitBy = function (e) {
        const t = Xt.fromDurationLike(e);
        if (!this.isValid || !t.isValid || t.as('milliseconds') === 0) { return []; }
        for (var n = this.s, r = 1, i = []; n < this.e;) {
          var o = this.start.plus(
            t.mapUnits((e) => e * r),
          );
          var o = +o > +this.e ? this.e : o;
          i.push(c.fromDateTimes(n, o)), (n = o), (r += 1);
        }
        return i;
      }),
      (e.divideEqually = function (e) {
        return this.isValid
          ? this.splitBy(this.length() / e).slice(0, e)
          : [];
      }),
      (e.overlaps = function (e) {
        return this.e > e.s && this.s < e.e;
      }),
      (e.abutsStart = function (e) {
        return !!this.isValid && +this.e == +e.s;
      }),
      (e.abutsEnd = function (e) {
        return !!this.isValid && +e.e == +this.s;
      }),
      (e.engulfs = function (e) {
        return !!this.isValid && this.s <= e.s && this.e >= e.e;
      }),
      (e.equals = function (e) {
        return (
          !(!this.isValid || !e.isValid)
            && this.s.equals(e.s)
            && this.e.equals(e.e)
        );
      }),
      (e.intersection = function (e) {
        if (!this.isValid) return this;
        const t = (this.s > e.s ? this : e).s;
        var { e } = this.e < e.e ? this : e;
        return e <= t ? null : c.fromDateTimes(t, e);
      }),
      (e.union = function (e) {
        if (!this.isValid) return this;
        const t = (this.s < e.s ? this : e).s;
        var { e } = this.e > e.e ? this : e;
        return c.fromDateTimes(t, e);
      }),
      (c.merge = function (e) {
        var t = e
          .sort((e, t) => e.s - t.s)
          .reduce(
            (e, t) => {
              const n = e[0];
              var e = e[1];
              return e
                ? e.overlaps(t) || e.abutsStart(t)
                  ? [n, e.union(t)]
                  : [n.concat([e]), t]
                : [n, t];
            },
            [[], null],
          );
        var e = t[0];
        var t = t[1];
        return t && e.push(t), e;
      }),
      (c.xor = function (e) {
        for (
          var t = null,
            n = 0,
            r = [],
            i = e.map((e) => [
              { time: e.s, type: 's' },
              { time: e.e, type: 'e' },
            ]),
            o = k(
              (e = Array.prototype).concat.apply(e, i).sort((e, t) => e.time - t.time),
            );
          !(u = o()).done;

        ) {
          var u = u.value;
          var t = (n += u.type === 's' ? 1 : -1) === 1
            ? u.time
            : (t && +t != +u.time && r.push(c.fromDateTimes(t, u.time)),
            null);
        }
        return c.merge(r);
      }),
      (e.difference = function () {
        for (
          var t = this, e = arguments.length, n = new Array(e), r = 0;
          r < e;
          r++
        ) { n[r] = arguments[r]; }
        return c
          .xor([this].concat(n))
          .map((e) => t.intersection(e))
          .filter((e) => e && !e.isEmpty());
      }),
      (e.toString = function () {
        return this.isValid
          ? `[${this.s.toISO()} – ${this.e.toISO()})`
          : en;
      }),
      (e.toISO = function (e) {
        return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : en;
      }),
      (e.toISODate = function () {
        return this.isValid
          ? `${this.s.toISODate()}/${this.e.toISODate()}`
          : en;
      }),
      (e.toISOTime = function (e) {
        return this.isValid
          ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`
          : en;
      }),
      (e.toFormat = function (e, t) {
        (t = (void 0 === t ? {} : t).separator),
        (t = void 0 === t ? ' – ' : t);
        return this.isValid
          ? `${this.s.toFormat(e)}${t}${this.e.toFormat(e)}`
          : en;
      }),
      (e.toDuration = function (e, t) {
        return this.isValid
          ? this.e.diff(this.s, e, t)
          : Xt.invalid(this.invalidReason);
      }),
      (e.mapEndpoints = function (e) {
        return c.fromDateTimes(e(this.s), e(this.e));
      }),
      o(c, [
        {
          key: 'start',
          get() {
            return this.isValid ? this.s : null;
          },
        },
        {
          key: 'end',
          get() {
            return this.isValid ? this.e : null;
          },
        },
        {
          key: 'isValid',
          get() {
            return this.invalidReason === null;
          },
        },
        {
          key: 'invalidReason',
          get() {
            return this.invalid ? this.invalid.reason : null;
          },
        },
        {
          key: 'invalidExplanation',
          get() {
            return this.invalid ? this.invalid.explanation : null;
          },
        },
      ]),
      c
    );
  }());
  const nn = (function () {
    function e() {}
    return (
      (e.hasDST = function (e) {
        void 0 === e && (e = Qe.defaultZone);
        const t = ir.now().setZone(e).set({ month: 12 });
        return !e.isUniversal && t.offset !== t.set({ month: 6 }).offset;
      }),
      (e.isValidIANAZone = function (e) {
        return _e.isValidSpecifier(e) && _e.isValidZone(e);
      }),
      (e.normalizeZone = function (e) {
        return Pe(e, Qe.defaultZone);
      }),
      (e.months = function (e, t) {
        void 0 === e && (e = 'long');
        var n = void 0 === t ? {} : t;
        const r = n.locale;
        const i = n.numberingSystem;
        var t = n.locObj;
        var t = void 0 === t ? null : t;
        var n = n.outputCalendar;
        return (
          t
            || lt.create(
              void 0 === r ? null : r,
              void 0 === i ? null : i,
              void 0 === n ? 'gregory' : n,
            )
        ).months(e);
      }),
      (e.monthsFormat = function (e, t) {
        void 0 === e && (e = 'long');
        var n = void 0 === t ? {} : t;
        const r = n.locale;
        const i = n.numberingSystem;
        var t = n.locObj;
        var t = void 0 === t ? null : t;
        var n = n.outputCalendar;
        return (
          t
            || lt.create(
              void 0 === r ? null : r,
              void 0 === i ? null : i,
              void 0 === n ? 'gregory' : n,
            )
        ).months(e, !0);
      }),
      (e.weekdays = function (e, t) {
        void 0 === e && (e = 'long');
        var n = void 0 === t ? {} : t;
        const r = n.locale;
        var t = n.numberingSystem;
        var n = n.locObj;
        return (
          (void 0 === n ? null : n)
            || lt.create(void 0 === r ? null : r, void 0 === t ? null : t, null)
        ).weekdays(e);
      }),
      (e.weekdaysFormat = function (e, t) {
        void 0 === e && (e = 'long');
        var n = void 0 === t ? {} : t;
        const r = n.locale;
        var t = n.numberingSystem;
        var n = n.locObj;
        return (
          (void 0 === n ? null : n)
            || lt.create(void 0 === r ? null : r, void 0 === t ? null : t, null)
        ).weekdays(e, !0);
      }),
      (e.meridiems = function (e) {
        e = (void 0 === e ? {} : e).locale;
        return lt.create(void 0 === e ? null : e).meridiems();
      }),
      (e.eras = function (e, t) {
        void 0 === e && (e = 'short');
        t = (void 0 === t ? {} : t).locale;
        return lt.create(void 0 === t ? null : t, null, 'gregory').eras(e);
      }),
      (e.features = function () {
        return { relative: G() };
      }),
      e
    );
  }());
  function rn(e, t) {
    function n(e) {
      return e.toUTC(0, { keepLocalTime: !0 }).startOf('day').valueOf();
    }
    e = n(t) - n(e);
    return Math.floor(Xt.fromMillis(e).as('days'));
  }
  function on(e, t, n, r) {
    var i = (function (e, t, n) {
      for (
        var r = {},
          i = 0,
          o = [
            [
              'years',
              function (e, t) {
                return t.year - e.year;
              },
            ],
            [
              'quarters',
              function (e, t) {
                return t.quarter - e.quarter;
              },
            ],
            [
              'months',
              function (e, t) {
                return t.month - e.month + 12 * (t.year - e.year);
              },
            ],
            [
              'weeks',
              function (e, t) {
                t = rn(e, t);
                return (t - (t % 7)) / 7;
              },
            ],
            ['days', rn],
          ];
        i < o.length;
        i++
      ) {
        var u;
        var a;
        let s = o[i];
        const c = s[0];
        let l = s[1];
        n.indexOf(c) >= 0
            && ((u = c),
            (s = l(e, t)),
            t < (a = e.plus((((l = {})[c] = s), l)))
              ? ((e = e.plus((((l = {})[c] = s - 1), l))), --s)
              : (e = a),
            (r[c] = s));
      }
      return [e, r, a, u];
    }(e, t, n));
    const o = i[0];
    let u = i[1];
    let a = i[2];
    var e = i[3];
    var i = t - o;
    var n = n.filter((e) => ['hours', 'minutes', 'seconds', 'milliseconds'].indexOf(e) >= 0);
    n.length === 0
      && (a = a < t ? o.plus((((t = {})[e] = 1), t)) : a) !== o
      && (u[e] = (u[e] || 0) + i / (a - o));
    u = Xt.fromObject(u, r);
    return n.length > 0
      ? (r = Xt.fromMillis(i, r)).shiftTo.apply(r, n).plus(u)
      : u;
  }
  const un = {
    arab: '[٠-٩]',
    arabext: '[۰-۹]',
    bali: '[᭐-᭙]',
    beng: '[০-৯]',
    deva: '[०-९]',
    fullwide: '[０-９]',
    gujr: '[૦-૯]',
    hanidec: '[〇|一|二|三|四|五|六|七|八|九]',
    khmr: '[០-៩]',
    knda: '[೦-೯]',
    laoo: '[໐-໙]',
    limb: '[᥆-᥏]',
    mlym: '[൦-൯]',
    mong: '[᠐-᠙]',
    mymr: '[၀-၉]',
    orya: '[୦-୯]',
    tamldec: '[௦-௯]',
    telu: '[౦-౯]',
    thai: '[๐-๙]',
    tibt: '[༠-༩]',
    latn: '\\d',
  };
  const an = {
    arab: [1632, 1641],
    arabext: [1776, 1785],
    bali: [6992, 7001],
    beng: [2534, 2543],
    deva: [2406, 2415],
    fullwide: [65296, 65303],
    gujr: [2790, 2799],
    khmr: [6112, 6121],
    knda: [3302, 3311],
    laoo: [3792, 3801],
    limb: [6470, 6479],
    mlym: [3430, 3439],
    mong: [6160, 6169],
    mymr: [4160, 4169],
    orya: [2918, 2927],
    tamldec: [3046, 3055],
    telu: [3174, 3183],
    thai: [3664, 3673],
    tibt: [3872, 3881],
  };
  const sn = un.hanidec.replace(/[\[|\]]/g, '').split('');
  function cn(e, t) {
    e = e.numberingSystem;
    return void 0 === t && (t = ''), new RegExp(`${un[e || 'latn']}${t}`);
  }
  const ln = 'missing Intl.DateTimeFormat.formatToParts support';
  function fn(e, t) {
    return (
      void 0 === t
        && (t = function (e) {
          return e;
        }),
      {
        regex: e,
        deser(e) {
          e = e[0];
          return t(
            (function (e) {
              var t = parseInt(e, 10);
              if (isNaN(t)) {
                for (var t = '', n = 0; n < e.length; n++) {
                  const r = e.charCodeAt(n);
                  if (e[n].search(un.hanidec) !== -1) t += sn.indexOf(e[n]);
                  else {
                    for (var i in an) {
                      var o = an[i];
                      var i = o[0];
                      var o = o[1];
                      i <= r && r <= o && (t += r - i);
                    }
                  }
                }
                return parseInt(t, 10);
              }
              return t;
            }(e)),
          );
        },
      }
    );
  }
  const dn = `( |${String.fromCharCode(160)})`;
  const hn = new RegExp(dn, 'g');
  function mn(e) {
    return e.replace(/\./g, '\\.?').replace(hn, dn);
  }
  function yn(e) {
    return e.replace(/\./g, '').replace(hn, ' ').toLowerCase();
  }
  function vn(n, r) {
    return n === null
      ? null
      : {
        regex: RegExp(n.map(mn).join('|')),
        deser(e) {
          const t = e[0];
          return (
            n.findIndex((e) => yn(t) === yn(e)) + r
          );
        },
      };
  }
  function pn(e, t) {
    return {
      regex: e,
      deser(e) {
        return le(e[1], e[2]);
      },
      groups: t,
    };
  }
  function gn(e) {
    return {
      regex: e,
      deser(e) {
        return e[0];
      },
    };
  }
  function wn(t, n) {
    function r(e) {
      return {
        regex: RegExp(e.val.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')),
        deser(e) {
          return e[0];
        },
        literal: !0,
      };
    }
    const i = cn(n);
    const o = cn(n, '{2}');
    const u = cn(n, '{3}');
    const a = cn(n, '{4}');
    const s = cn(n, '{6}');
    const c = cn(n, '{1,2}');
    const l = cn(n, '{1,3}');
    const f = cn(n, '{1,6}');
    const d = cn(n, '{1,9}');
    const h = cn(n, '{2,4}');
    const m = cn(n, '{4,6}');
    const e = (function (e) {
      if (t.literal) return r(e);
      switch (e.val) {
        case 'G':
          return vn(n.eras('short', !1), 0);
        case 'GG':
          return vn(n.eras('long', !1), 0);
        case 'y':
          return fn(f);
        case 'yy':
          return fn(h, se);
        case 'yyyy':
          return fn(a);
        case 'yyyyy':
          return fn(m);
        case 'yyyyyy':
          return fn(s);
        case 'M':
          return fn(c);
        case 'MM':
          return fn(o);
        case 'MMM':
          return vn(n.months('short', !0, !1), 1);
        case 'MMMM':
          return vn(n.months('long', !0, !1), 1);
        case 'L':
          return fn(c);
        case 'LL':
          return fn(o);
        case 'LLL':
          return vn(n.months('short', !1, !1), 1);
        case 'LLLL':
          return vn(n.months('long', !1, !1), 1);
        case 'd':
          return fn(c);
        case 'dd':
          return fn(o);
        case 'o':
          return fn(l);
        case 'ooo':
          return fn(u);
        case 'HH':
          return fn(o);
        case 'H':
          return fn(c);
        case 'hh':
          return fn(o);
        case 'h':
          return fn(c);
        case 'mm':
          return fn(o);
        case 'm':
        case 'q':
          return fn(c);
        case 'qq':
          return fn(o);
        case 's':
          return fn(c);
        case 'ss':
          return fn(o);
        case 'S':
          return fn(l);
        case 'SSS':
          return fn(u);
        case 'u':
          return gn(d);
        case 'uu':
          return gn(c);
        case 'uuu':
          return fn(i);
        case 'a':
          return vn(n.meridiems(), 0);
        case 'kkkk':
          return fn(a);
        case 'kk':
          return fn(h, se);
        case 'W':
          return fn(c);
        case 'WW':
          return fn(o);
        case 'E':
        case 'c':
          return fn(i);
        case 'EEE':
          return vn(n.weekdays('short', !1, !1), 1);
        case 'EEEE':
          return vn(n.weekdays('long', !1, !1), 1);
        case 'ccc':
          return vn(n.weekdays('short', !0, !1), 1);
        case 'cccc':
          return vn(n.weekdays('long', !0, !1), 1);
        case 'Z':
        case 'ZZ':
          return pn(
            new RegExp(`([+-]${c.source})(?::(${o.source}))?`),
            2,
          );
        case 'ZZZ':
          return pn(
            new RegExp(`([+-]${c.source})(${o.source})?`),
            2,
          );
        case 'z':
          return gn(/[a-z_+-/]{1,256}?/i);
        default:
          return r(e);
      }
    }(t)) || { invalidReason: ln };
    return (e.token = t), e;
  }
  const kn = {
    year: { '2-digit': 'yy', numeric: 'yyyyy' },
    month: {
      numeric: 'M', '2-digit': 'MM', short: 'MMM', long: 'MMMM',
    },
    day: { numeric: 'd', '2-digit': 'dd' },
    weekday: { short: 'EEE', long: 'EEEE' },
    dayperiod: 'a',
    dayPeriod: 'a',
    hour: { numeric: 'h', '2-digit': 'hh' },
    minute: { numeric: 'm', '2-digit': 'mm' },
    second: { numeric: 's', '2-digit': 'ss' },
  };
  let Sn = null;
  function Tn(e, t) {
    if (e.literal) return e;
    const i = xe.macroTokenToFormatOpts(e.val);
    if (!i) return e;
    t = xe
      .create(t, i)
      .formatDateTimeParts((Sn = Sn || ir.fromMillis(1555555555555)))
      .map((e) => {
        return (
          (n = i),
          (r = (t = e).type),
          (t = e.value),
          r === 'literal'
            ? { literal: !0, val: t }
            : ((n = n[r]),
            (r = typeof (r = kn[r]) === 'object' ? r[n] : r)
              ? { literal: !1, val: r }
              : void 0)
        );
        let t; let n; let
          r;
      });
    return t.includes(void 0) ? e : t;
  }
  function bn(t, e, n) {
    let r;
    const i = ((a = xe.parseFormat(n)),
    (r = t),
    (s = Array.prototype).concat.apply(
      s,
      a.map((e) => Tn(e, r)),
    ));
    var o = i.map((e) => wn(e, t));
    var n = o.find((e) => e.invalidReason);
    if (n) return { input: e, tokens: i, invalidReason: n.invalidReason };
    let u;
    var a = [
      `^${
        (s = o)
          .map((e) => e.regex)
          .reduce((e, t) => `${e}(${t.source})`, '')
      }$`,
      s,
    ];
    var n = a[1];
    var o = RegExp(a[0], 'i');
    var s = (function (e, t, n) {
      const r = e.match(t);
      if (r) {
        let i;
        let o;
        let u;
        const a = {};
        let s = 1;
        for (i in n) {
          B(n, i)
              && ((u = (o = n[i]).groups ? o.groups + 1 : 1),
              !o.literal
                && o.token
                && (a[o.token.val[0]] = o.deser(r.slice(s, s + u))),
              (s += u));
        }
        return [r, a];
      }
      return [r, {}];
    }(e, o, n));
    var a = s[0];
    var n = s[1];
    var s = n
      ? ((c = null),
      W((u = n).z) || (c = _e.create(u.z)),
      W(u.Z) || ((c = c || new Re(u.Z)), (l = u.Z)),
      W(u.q) || (u.M = 3 * (u.q - 1) + 1),
      W(u.h)
            || (u.h < 12 && u.a === 1
              ? (u.h += 12)
              : u.h === 12 && u.a === 0 && (u.h = 0)),
      u.G === 0 && u.y && (u.y = -u.y),
      W(u.u) || (u.S = te(u.u)),
      [
        Object.keys(u).reduce((e, t) => {
          const n = (function (e) {
            switch (e) {
              case 'S':
                return 'millisecond';
              case 's':
                return 'second';
              case 'm':
                return 'minute';
              case 'h':
              case 'H':
                return 'hour';
              case 'd':
                return 'day';
              case 'o':
                return 'ordinal';
              case 'L':
              case 'M':
                return 'month';
              case 'y':
                return 'year';
              case 'E':
              case 'c':
                return 'weekday';
              case 'W':
                return 'weekNumber';
              case 'k':
                return 'weekYear';
              case 'q':
                return 'quarter';
              default:
                return null;
            }
          }(t));
          return n && (e[n] = u[t]), e;
        }, {}),
        c,
        l,
      ])
      : [null, null, void 0];
    var c = s[0];
    var l = s[1];
    var s = s[2];
    if (B(n, 'a') && B(n, 'H')) { throw new S("Can't include meridiem when specifying 24-hour format"); }
    return {
      input: e,
      tokens: i,
      regex: o,
      rawMatches: a,
      matches: n,
      result: c,
      zone: l,
      specificOffset: s,
    };
  }
  const On = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  const Mn = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
  function Nn(e, t) {
    return new Ce(
      'unit out of range',
      `you specified ${
        t
      } (of type ${
        typeof t
      }) as a ${
        e
      }, which is invalid`,
    );
  }
  function Dn(e, t, n) {
    n = new Date(Date.UTC(e, t - 1, n)).getUTCDay();
    return n === 0 ? 7 : n;
  }
  function En(e, t, n) {
    return n + (re(e) ? Mn : On)[t - 1];
  }
  function Vn(e, t) {
    const n = re(e) ? Mn : On;
    var e = n.findIndex((e) => e < t);
    return { month: e + 1, day: t - n[e] };
  }
  function In(e) {
    let t;
    const n = e.year;
    const r = e.month;
    var i = e.day;
    var o = En(n, r, i);
    var i = Dn(n, r, i);
    var o = Math.floor((o - i + 10) / 7);
    return (
      o < 1
        ? (o = ae((t = n - 1)))
        : o > ae(n)
          ? ((t = n + 1), (o = 1))
          : (t = n),
      ({
        weekYear: t, weekNumber: o, weekday: i, ...me(e),
      })
    );
  }
  function xn(e) {
    let t;
    const n = e.weekYear;
    const r = e.weekNumber;
    const i = e.weekday;
    var o = Dn(n, 1, 4);
    const u = ie(n);
    var o = 7 * r + i - o - 3;
    o < 1
      ? (o += ie((t = n - 1)))
      : u < o
        ? ((t = n + 1), (o -= ie(n)))
        : (t = n);
    o = Vn(t, o);
    return {
      year: t, month: o.month, day: o.day, ...me(e),
    };
  }
  function Cn(e) {
    const t = e.year;
    return { year: t, ordinal: En(t, e.month, e.day), ...me(e) };
  }
  function Fn(e) {
    const t = e.year;
    const n = Vn(t, e.ordinal);
    return {
      year: t, month: n.month, day: n.day, ...me(e),
    };
  }
  function Ln(e) {
    const t = Y(e.year);
    const n = Q(e.month, 1, 12);
    const r = Q(e.day, 1, oe(e.year, e.month));
    return t
      ? n
        ? !r && Nn('day', e.day)
        : Nn('month', e.month)
      : Nn('year', e.year);
  }
  function Zn(e) {
    const t = e.hour;
    const n = e.minute;
    const r = e.second;
    const i = e.millisecond;
    const o = Q(t, 0, 23) || (t === 24 && n === 0 && r === 0 && i === 0);
    const u = Q(n, 0, 59);
    const a = Q(r, 0, 59);
    var e = Q(i, 0, 999);
    return o
      ? u
        ? a
          ? !e && Nn('millisecond', i)
          : Nn('second', r)
        : Nn('minute', n)
      : Nn('hour', t);
  }
  const An = 'Invalid DateTime';
  function zn(e) {
    return new Ce(
      'unsupported zone',
      `the zone "${e.name}" is not supported`,
    );
  }
  function jn(e) {
    return e.weekData === null && (e.weekData = In(e.c)), e.weekData;
  }
  function qn(e, t) {
    e = {
      ts: e.ts,
      zone: e.zone,
      c: e.c,
      o: e.o,
      loc: e.loc,
      invalid: e.invalid,
    };
    return new ir({ ...e, ...t, old: e });
  }
  function _n(e, t, n) {
    let r = e - 60 * t * 1e3;
    const i = n.offset(r);
    if (t === i) return [r, t];
    t = n.offset((r -= 60 * (i - t) * 1e3));
    return i === t ? [r, i] : [e - 60 * Math.min(i, t) * 1e3, Math.max(i, t)];
  }
  function Un(e, t) {
    e += 60 * t * 1e3;
    e = new Date(e);
    return {
      year: e.getUTCFullYear(),
      month: e.getUTCMonth() + 1,
      day: e.getUTCDate(),
      hour: e.getUTCHours(),
      minute: e.getUTCMinutes(),
      second: e.getUTCSeconds(),
      millisecond: e.getUTCMilliseconds(),
    };
  }
  function Rn(e, t, n) {
    return _n(ue(e), t, n);
  }
  function Hn(e, t) {
    var n = e.o;
    const r = e.c.year + Math.trunc(t.years);
    var i = e.c.month + Math.trunc(t.months) + 3 * Math.trunc(t.quarters);
    var i = {
      ...e.c,
      year: r,
      month: i,
      day:
          Math.min(e.c.day, oe(r, i))
          + Math.trunc(t.days)
          + 7 * Math.trunc(t.weeks),
    };
    var t = Xt.fromObject({
      years: t.years - Math.trunc(t.years),
      quarters: t.quarters - Math.trunc(t.quarters),
      months: t.months - Math.trunc(t.months),
      weeks: t.weeks - Math.trunc(t.weeks),
      days: t.days - Math.trunc(t.days),
      hours: t.hours,
      minutes: t.minutes,
      seconds: t.seconds,
      milliseconds: t.milliseconds,
    }).as('milliseconds');
    var i = _n(ue(i), n, e.zone);
    var n = i[0];
    var i = i[1];
    return t !== 0 && (i = e.zone.offset((n += t))), { ts: n, o: i };
  }
  function Pn(e, t, n, r, i, o) {
    const u = n.setZone;
    const a = n.zone;
    if (e && Object.keys(e).length !== 0) {
      o = ir.fromObject(e, { ...n, zone: t || a, specificOffset: o });
      return u ? o : o.setZone(a);
    }
    return ir.invalid(
      new Ce('unparsable', `the input "${i}" can't be parsed as ${r}`),
    );
  }
  function Wn(e, t, n) {
    return (
      void 0 === n && (n = !0),
      e.isValid
        ? xe
          .create(lt.create('en-US'), { allowZ: n, forceSimple: !0 })
          .formatDateTimeFromString(e, t)
        : null
    );
  }
  function Jn(e, t) {
    const n = e.c.year > 9999 || e.c.year < 0;
    let r = '';
    return (
      n && e.c.year >= 0 && (r += '+'),
      (r += K(e.c.year, n ? 6 : 4)),
      t ? ((r += '-'), (r += K(e.c.month)), (r += '-')) : (r += K(e.c.month)),
      (r += K(e.c.day))
    );
  }
  function Yn(e, t, n, r, i) {
    let o = K(e.c.hour);
    return (
      t
        ? ((o += ':'),
        (o += K(e.c.minute)),
        (e.c.second === 0 && n) || (o += ':'))
        : (o += K(e.c.minute)),
      (e.c.second === 0 && n)
        || ((o += K(e.c.second)),
        (e.c.millisecond === 0 && r)
          || ((o += '.'), (o += K(e.c.millisecond, 3)))),
      i
        && (e.isOffsetFixed && e.offset === 0
          ? (o += 'Z')
          : e.o < 0
            ? ((o += '-'),
            (o += K(Math.trunc(-e.o / 60))),
            (o += ':'),
            (o += K(Math.trunc(-e.o % 60))))
            : ((o += '+'),
            (o += K(Math.trunc(e.o / 60))),
            (o += ':'),
            (o += K(Math.trunc(e.o % 60))))),
      o
    );
  }
  const Gn = {
    month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0,
  };
  const $n = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  };
  const Bn = {
    ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0,
  };
  const Qn = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'];
  const Kn = [
    'weekYear',
    'weekNumber',
    'weekday',
    'hour',
    'minute',
    'second',
    'millisecond',
  ];
  const Xn = ['year', 'ordinal', 'hour', 'minute', 'second', 'millisecond'];
  function er(e) {
    const t = {
      year: 'year',
      years: 'year',
      month: 'month',
      months: 'month',
      day: 'day',
      days: 'day',
      hour: 'hour',
      hours: 'hour',
      minute: 'minute',
      minutes: 'minute',
      quarter: 'quarter',
      quarters: 'quarter',
      second: 'second',
      seconds: 'second',
      millisecond: 'millisecond',
      milliseconds: 'millisecond',
      weekday: 'weekday',
      weekdays: 'weekday',
      weeknumber: 'weekNumber',
      weeksnumber: 'weekNumber',
      weeknumbers: 'weekNumber',
      weekyear: 'weekYear',
      weekyears: 'weekYear',
      ordinal: 'ordinal',
    }[e.toLowerCase()];
    if (!t) throw new v(e);
    return t;
  }
  function tr(e, t) {
    const n = Pe(t.zone, Qe.defaultZone);
    const r = lt.fromObject(t);
    var t = Qe.now();
    if (W(e.year)) a = t;
    else {
      for (let i = k(Qn); !(o = i()).done;) {
        var o = o.value;
        W(e[o]) && (e[o] = Gn[o]);
      }
      var u = Ln(e) || Zn(e);
      if (u) return ir.invalid(u);
      var u = Rn(e, n.offset(t), n);
      var a = u[0];
      var u = u[1];
    }
    return new ir({
      ts: a, zone: n, loc: r, o: u,
    });
  }
  function nr(t, n, r) {
    function e(e, t) {
      return (
        (e = ne(e, o || r.calendary ? 0 : 2, !0)),
        n.loc.clone(r).relFormatter(r).format(e, t)
      );
    }
    function i(e) {
      return r.calendary
        ? n.hasSame(t, e)
          ? 0
          : n.startOf(e).diff(t.startOf(e), e).get(e)
        : n.diff(t, e).get(e);
    }
    var o = !!W(r.round) || r.round;
    if (r.unit) return e(i(r.unit), r.unit);
    for (let u = k(r.units); !(s = u()).done;) {
      const a = s.value;
      var s = i(a);
      if (Math.abs(s) >= 1) return e(s, a);
    }
    return e(n < t ? -0 : 0, r.units[r.units.length - 1]);
  }
  function rr(e) {
    let t = {};
    var e = e.length > 0 && typeof e[e.length - 1] === 'object'
      ? ((t = e[e.length - 1]), Array.from(e).slice(0, e.length - 1))
      : Array.from(e);
    return [t, e];
  }
  var ir = (function () {
    function w(e) {
      const t = e.zone || Qe.defaultZone;
      let n = e.invalid
          || (Number.isNaN(e.ts) ? new Ce('invalid input') : null)
          || (t.isValid ? null : zn(t));
      this.ts = W(e.ts) ? Qe.now() : e.ts;
      let r;
      let i = null;
      let o = null;
      n
        || (o = e.old && e.old.ts === this.ts && e.old.zone.equals(t)
          ? ((i = (r = [e.old.c, e.old.o])[0]), r[1])
          : ((r = t.offset(this.ts)),
          (i = Un(this.ts, r)),
          (i = (n = Number.isNaN(i.year) ? new Ce('invalid input') : null)
            ? null
            : i),
          n ? null : r)),
      (this._zone = t),
      (this.loc = e.loc || lt.create()),
      (this.invalid = n),
      (this.weekData = null),
      (this.c = i),
      (this.o = o),
      (this.isLuxonDateTime = !0);
    }
    (w.now = function () {
      return new w({});
    }),
    (w.local = function () {
      var e = rr(arguments);
      const t = e[0];
      var e = e[1];
      return tr(
        {
          year: e[0],
          month: e[1],
          day: e[2],
          hour: e[3],
          minute: e[4],
          second: e[5],
          millisecond: e[6],
        },
        t,
      );
    }),
    (w.utc = function () {
      var e = rr(arguments);
      const t = e[0];
      var n = e[1];
      const r = n[0];
      const i = n[1];
      const o = n[2];
      const u = n[3];
      const a = n[4];
      var e = n[5];
      var n = n[6];
      return (
        (t.zone = Re.utcInstance),
        tr(
          {
            year: r,
            month: i,
            day: o,
            hour: u,
            minute: a,
            second: e,
            millisecond: n,
          },
          t,
        )
      );
    }),
    (w.fromJSDate = function (e, t) {
      void 0 === t && (t = {});
      const n = Object.prototype.toString.call(e) === '[object Date]'
        ? e.valueOf()
        : NaN;
      if (Number.isNaN(n)) return w.invalid('invalid input');
      e = Pe(t.zone, Qe.defaultZone);
      return e.isValid
        ? new w({ ts: n, zone: e, loc: lt.fromObject(t) })
        : w.invalid(zn(e));
    }),
    (w.fromMillis = function (e, t) {
      if ((void 0 === t && (t = {}), J(e))) {
        return e < -864e13 || e > 864e13
          ? w.invalid('Timestamp out of range')
          : new w({
            ts: e,
            zone: Pe(t.zone, Qe.defaultZone),
            loc: lt.fromObject(t),
          });
      }
      throw new p(
        `fromMillis requires a numerical input, but received a ${
          typeof e
        } with value ${
          e}`,
      );
    }),
    (w.fromSeconds = function (e, t) {
      if ((void 0 === t && (t = {}), J(e))) {
        return new w({
          ts: 1e3 * e,
          zone: Pe(t.zone, Qe.defaultZone),
          loc: lt.fromObject(t),
        });
      }
      throw new p('fromSeconds requires a numerical input');
    }),
    (w.fromObject = function (e, t) {
      e = e || {};
      const n = Pe((t = void 0 === t ? {} : t).zone, Qe.defaultZone);
      if (!n.isValid) return w.invalid(zn(n));
      let r = Qe.now();
      let i = W(t.specificOffset) ? n.offset(r) : t.specificOffset;
      const o = de(e, er);
      const u = !W(o.ordinal);
      var a = !W(o.year);
      const s = !W(o.month) || !W(o.day);
      const c = a || s;
      var a = o.weekYear || o.weekNumber;
      var t = lt.fromObject(t);
      if ((c || u) && a) {
        throw new S(
          "Can't mix weekYear/weekNumber units with year/month/day or ordinals",
        );
      }
      if (s && u) throw new S("Can't mix ordinal dates with month/day");
      let l;
      var a = a || (o.weekday && !c);
      let f = Un(r, i);
      a
        ? ((v = Kn), (l = $n), (f = In(f)))
        : u
          ? ((v = Xn), (l = Bn), (f = Cn(f)))
          : ((v = Qn), (l = Gn));
      for (let d = !1, h = k(v); !(m = h()).done;) {
        var m = m.value;
        W(o[m]) ? (o[m] = (d ? l : f)[m]) : (d = !0);
      }
      let y;
      let v;
      let p;
      var g = (a
        ? ((r = Y((y = o).weekYear)),
        (v = Q(y.weekNumber, 1, ae(y.weekYear))),
        (p = Q(y.weekday, 1, 7)),
        r
          ? v
            ? !p && Nn('weekday', y.weekday)
            : Nn('week', y.week)
          : Nn('weekYear', y.weekYear))
        : u
          ? ((p = Y((g = o).year)),
          (y = Q(g.ordinal, 1, ie(g.year))),
          p ? !y && Nn('ordinal', g.ordinal) : Nn('year', g.year))
          : Ln(o)) || Zn(o);
      if (g) return w.invalid(g);
      (i = Rn(a ? xn(o) : u ? Fn(o) : o, i, n)),
      (t = new w({
        ts: i[0], zone: n, o: i[1], loc: t,
      }));
      return o.weekday && c && e.weekday !== t.weekday
        ? w.invalid(
          'mismatched weekday',
          `you can't specify both a weekday of ${
            o.weekday
          } and a date of ${
            t.toISO()}`,
        )
        : t;
    }),
    (w.fromISO = function (e, t) {
      void 0 === t && (t = {});
      const n = ht(e, [Lt, jt], [Zt, qt], [At, _t], [zt, Ut]);
      return Pn(n[0], n[1], t, 'ISO 8601', e);
    }),
    (w.fromRFC2822 = function (e, t) {
      void 0 === t && (t = {});
      const n = ht(
        e
          .replace(/\([^)]*\)|[\n\t]/g, ' ')
          .replace(/(\s\s+)/g, ' ')
          .trim(),
        [Dt, Et],
      );
      return Pn(n[0], n[1], t, 'RFC 2822', e);
    }),
    (w.fromHTTP = function (e, t) {
      void 0 === t && (t = {});
      e = ht(e, [Vt, Ct], [It, Ct], [xt, Ft]);
      return Pn(e[0], e[1], t, 'HTTP', t);
    }),
    (w.fromFormat = function (e, t, n) {
      if ((void 0 === n && (n = {}), W(e) || W(t))) { throw new p('fromFormat requires an input string and a format'); }
      var r = n;
      var i = r.locale;
      var o = r.numberingSystem;
      var u = lt.fromOpts({
        locale: void 0 === i ? null : i,
        numberingSystem: void 0 === o ? null : o,
        defaultToEN: !0,
      });
      var i = [
        (r = bn(u, e, (r = t))).result,
        r.zone,
        r.specificOffset,
        r.invalidReason,
      ];
      var o = i[0];
      var u = i[1];
      var r = i[2];
      var i = i[3];
      return i ? w.invalid(i) : Pn(o, u, n, `format ${t}`, e, r);
    }),
    (w.fromString = function (e, t, n) {
      return w.fromFormat(e, t, (n = void 0 === n ? {} : n));
    }),
    (w.fromSQL = function (e, t) {
      void 0 === t && (t = {});
      const n = ht(e, [Ht, Wt], [Pt, Jt]);
      return Pn(n[0], n[1], t, 'SQL', e);
    }),
    (w.invalid = function (e, t) {
      if ((void 0 === t && (t = null), !e)) { throw new p('need to specify a reason the DateTime is invalid'); }
      t = e instanceof Ce ? e : new Ce(e, t);
      if (Qe.throwOnInvalid) throw new d(t);
      return new w({ invalid: t });
    }),
    (w.isDateTime = function (e) {
      return (e && e.isLuxonDateTime) || !1;
    });
    const e = w.prototype;
    return (
      (e.get = function (e) {
        return this[e];
      }),
      (e.resolvedLocaleOptions = function (e) {
        e = xe
          .create(this.loc.clone((e = void 0 === e ? {} : e)), e)
          .resolvedOptions(this);
        return {
          locale: e.locale,
          numberingSystem: e.numberingSystem,
          outputCalendar: e.calendar,
        };
      }),
      (e.toUTC = function (e, t) {
        return (
          void 0 === t && (t = {}),
          this.setZone(Re.instance((e = void 0 === e ? 0 : e)), t)
        );
      }),
      (e.toLocal = function () {
        return this.setZone(Qe.defaultZone);
      }),
      (e.setZone = function (e, t) {
        var n = void 0 === t ? {} : t;
        var r = n.keepLocalTime;
        var t = void 0 !== r && r;
        var r = n.keepCalendarTime;
        var n = void 0 !== r && r;
        if ((e = Pe(e, Qe.defaultZone)).equals(this.zone)) return this;
        if (e.isValid) {
          r = this.ts;
          return (
            (t || n)
              && ((n = e.offset(this.ts)), (r = Rn(this.toObject(), n, e)[0])),
            qn(this, { ts: r, zone: e })
          );
        }
        return w.invalid(zn(e));
      }),
      (e.reconfigure = function (e) {
        var t = void 0 === e ? {} : e;
        const n = t.locale;
        var e = t.numberingSystem;
        var t = t.outputCalendar;
        var t = this.loc.clone({
          locale: n,
          numberingSystem: e,
          outputCalendar: t,
        });
        return qn(this, { loc: t });
      }),
      (e.setLocale = function (e) {
        return this.reconfigure({ locale: e });
      }),
      (e.set = function (e) {
        if (!this.isValid) return this;
        const t = de(e, er);
        const n = !W(t.weekYear) || !W(t.weekNumber) || !W(t.weekday);
        const r = !W(t.ordinal);
        const i = !W(t.year);
        const o = !W(t.month) || !W(t.day);
        var e = t.weekYear || t.weekNumber;
        if ((i || o || r) && e) {
          throw new S(
            "Can't mix weekYear/weekNumber units with year/month/day or ordinals",
          );
        }
        if (o && r) throw new S("Can't mix ordinal dates with month/day");
        n
          ? (u = xn({ ...In(this.c), ...t }))
          : W(t.ordinal)
            ? ((u = { ...this.toObject(), ...t }),
            W(t.day) && (u.day = Math.min(oe(u.year, u.month), u.day)))
            : (u = Fn({ ...Cn(this.c), ...t }));
        var u = Rn(u, this.o, this.zone);
        return qn(this, { ts: u[0], o: u[1] });
      }),
      (e.plus = function (e) {
        return this.isValid ? qn(this, Hn(this, Xt.fromDurationLike(e))) : this;
      }),
      (e.minus = function (e) {
        return this.isValid
          ? qn(this, Hn(this, Xt.fromDurationLike(e).negate()))
          : this;
      }),
      (e.startOf = function (e) {
        if (!this.isValid) return this;
        const t = {};
        var e = Xt.normalizeUnit(e);
        switch (e) {
          case 'years':
            t.month = 1;
          case 'quarters':
          case 'months':
            t.day = 1;
          case 'weeks':
          case 'days':
            t.hour = 0;
          case 'hours':
            t.minute = 0;
          case 'minutes':
            t.second = 0;
          case 'seconds':
            t.millisecond = 0;
        }
        return (
          e === 'weeks' && (t.weekday = 1),
          e === 'quarters'
            && ((e = Math.ceil(this.month / 3)), (t.month = 3 * (e - 1) + 1)),
          this.set(t)
        );
      }),
      (e.endOf = function (e) {
        let t;
        return this.isValid
          ? this.plus((((t = {})[e] = 1), t))
            .startOf(e)
            .minus(1)
          : this;
      }),
      (e.toFormat = function (e, t) {
        return (
          void 0 === t && (t = {}),
          this.isValid
            ? xe
              .create(this.loc.redefaultToEN(t))
              .formatDateTimeFromString(this, e)
            : An
        );
      }),
      (e.toLocaleString = function (e, t) {
        return (
          void 0 === e && (e = b),
          void 0 === t && (t = {}),
          this.isValid
            ? xe.create(this.loc.clone(t), e).formatDateTime(this)
            : An
        );
      }),
      (e.toLocaleParts = function (e) {
        return (
          void 0 === e && (e = {}),
          this.isValid
            ? xe.create(this.loc.clone(e), e).formatDateTimeParts(this)
            : []
        );
      }),
      (e.toISO = function (e) {
        var t = void 0 === e ? {} : e;
        let n = t.format;
        var r = t.suppressSeconds;
        const i = void 0 !== r && r;
        var e = t.suppressMilliseconds;
        var r = void 0 !== e && e;
        var e = t.includeOffset;
        var t = void 0 === e || e;
        if (!this.isValid) return null;
        (e = (void 0 === n ? 'extended' : n) === 'extended'), (n = Jn(this, e));
        return (n += 'T'), (n += Yn(this, e, i, r, t));
      }),
      (e.toISODate = function (e) {
        e = (void 0 === e ? {} : e).format;
        return this.isValid
          ? Jn(this, (void 0 === e ? 'extended' : e) === 'extended')
          : null;
      }),
      (e.toISOWeekDate = function () {
        return Wn(this, "kkkk-'W'WW-c");
      }),
      (e.toISOTime = function (e) {
        var t = void 0 === e ? {} : e;
        const n = t.suppressMilliseconds;
        const r = t.suppressSeconds;
        const i = t.includeOffset;
        var e = t.includePrefix;
        var t = t.format;
        return this.isValid
          ? (void 0 !== e && e ? 'T' : '')
              + Yn(
                this,
                (void 0 === t ? 'extended' : t) === 'extended',
                void 0 !== r && r,
                void 0 !== n && n,
                void 0 === i || i,
              )
          : null;
      }),
      (e.toRFC2822 = function () {
        return Wn(this, 'EEE, dd LLL yyyy HH:mm:ss ZZZ', !1);
      }),
      (e.toHTTP = function () {
        return Wn(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
      }),
      (e.toSQLDate = function () {
        return this.isValid ? Jn(this, !0) : null;
      }),
      (e.toSQLTime = function (e) {
        var t = void 0 === e ? {} : e;
        var n = t.includeOffset;
        var e = void 0 === n || n;
        var n = t.includeZone;
        var t = void 0 !== n && n;
        var n = 'HH:mm:ss.SSS';
        return (
          (t || e) && ((n += ' '), t ? (n += 'z') : e && (n += 'ZZ')),
          Wn(this, n, !0)
        );
      }),
      (e.toSQL = function (e) {
        return (
          void 0 === e && (e = {}),
          this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null
        );
      }),
      (e.toString = function () {
        return this.isValid ? this.toISO() : An;
      }),
      (e.valueOf = function () {
        return this.toMillis();
      }),
      (e.toMillis = function () {
        return this.isValid ? this.ts : NaN;
      }),
      (e.toSeconds = function () {
        return this.isValid ? this.ts / 1e3 : NaN;
      }),
      (e.toJSON = function () {
        return this.toISO();
      }),
      (e.toBSON = function () {
        return this.toJSDate();
      }),
      (e.toObject = function (e) {
        if ((void 0 === e && (e = {}), !this.isValid)) return {};
        const t = { ...this.c };
        return (
          e.includeConfig
            && ((t.outputCalendar = this.outputCalendar),
            (t.numberingSystem = this.loc.numberingSystem),
            (t.locale = this.loc.locale)),
          t
        );
      }),
      (e.toJSDate = function () {
        return new Date(this.isValid ? this.ts : NaN);
      }),
      (e.diff = function (e, t, n) {
        if (
          (void 0 === t && (t = 'milliseconds'),
          void 0 === n && (n = {}),
          !this.isValid || !e.isValid)
        ) { return Xt.invalid('created by diffing an invalid DateTime'); }
        var r = {
          locale: this.locale,
          numberingSystem: this.numberingSystem,
          ...n,
        };
        var t = ((n = t), (Array.isArray(n) ? n : [n]).map(Xt.normalizeUnit));
        var n = e.valueOf() > this.valueOf();
        var r = on(n ? this : e, n ? e : this, t, r);
        return n ? r.negate() : r;
      }),
      (e.diffNow = function (e, t) {
        return (
          void 0 === e && (e = 'milliseconds'),
          void 0 === t && (t = {}),
          this.diff(w.now(), e, t)
        );
      }),
      (e.until = function (e) {
        return this.isValid ? tn.fromDateTimes(this, e) : this;
      }),
      (e.hasSame = function (e, t) {
        if (!this.isValid) return !1;
        const n = e.valueOf();
        var e = this.setZone(e.zone, { keepLocalTime: !0 });
        return e.startOf(t) <= n && n <= e.endOf(t);
      }),
      (e.equals = function (e) {
        return (
          this.isValid
          && e.isValid
          && this.valueOf() === e.valueOf()
          && this.zone.equals(e.zone)
          && this.loc.equals(e.loc)
        );
      }),
      (e.toRelative = function (e) {
        if (!this.isValid) return null;
        const t = (e = void 0 === e ? {} : e).base
            || w.fromObject({}, { zone: this.zone });
        const n = e.padding ? (this < t ? -e.padding : e.padding) : 0;
        let r = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];
        let i = e.unit;
        return (
          Array.isArray(e.unit) && ((r = e.unit), (i = void 0)),
          nr(
            t,
            this.plus(n),
            {
              ...e, numeric: 'always', units: r, unit: i,
            },
          )
        );
      }),
      (e.toRelativeCalendar = function (e) {
        return (
          void 0 === e && (e = {}),
          this.isValid
            ? nr(
              e.base || w.fromObject({}, { zone: this.zone }),
              this,
              {
                ...e,
                numeric: 'auto',
                units: ['years', 'months', 'days'],
                calendary: !0,
              },
            )
            : null
        );
      }),
      (w.min = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) { t[n] = arguments[n]; }
        if (!t.every(w.isDateTime)) { throw new p('min requires all arguments be DateTimes'); }
        return $(
          t,
          (e) => e.valueOf(),
          Math.min,
        );
      }),
      (w.max = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) { t[n] = arguments[n]; }
        if (!t.every(w.isDateTime)) { throw new p('max requires all arguments be DateTimes'); }
        return $(
          t,
          (e) => e.valueOf(),
          Math.max,
        );
      }),
      (w.fromFormatExplain = function (e, t, n) {
        var r = (n = void 0 === n ? {} : n);
        var n = r.locale;
        var r = r.numberingSystem;
        return bn(
          lt.fromOpts({
            locale: void 0 === n ? null : n,
            numberingSystem: void 0 === r ? null : r,
            defaultToEN: !0,
          }),
          e,
          t,
        );
      }),
      (w.fromStringExplain = function (e, t, n) {
        return w.fromFormatExplain(e, t, (n = void 0 === n ? {} : n));
      }),
      o(
        w,
        [
          {
            key: 'isValid',
            get() {
              return this.invalid === null;
            },
          },
          {
            key: 'invalidReason',
            get() {
              return this.invalid ? this.invalid.reason : null;
            },
          },
          {
            key: 'invalidExplanation',
            get() {
              return this.invalid ? this.invalid.explanation : null;
            },
          },
          {
            key: 'locale',
            get() {
              return this.isValid ? this.loc.locale : null;
            },
          },
          {
            key: 'numberingSystem',
            get() {
              return this.isValid ? this.loc.numberingSystem : null;
            },
          },
          {
            key: 'outputCalendar',
            get() {
              return this.isValid ? this.loc.outputCalendar : null;
            },
          },
          {
            key: 'zone',
            get() {
              return this._zone;
            },
          },
          {
            key: 'zoneName',
            get() {
              return this.isValid ? this.zone.name : null;
            },
          },
          {
            key: 'year',
            get() {
              return this.isValid ? this.c.year : NaN;
            },
          },
          {
            key: 'quarter',
            get() {
              return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
            },
          },
          {
            key: 'month',
            get() {
              return this.isValid ? this.c.month : NaN;
            },
          },
          {
            key: 'day',
            get() {
              return this.isValid ? this.c.day : NaN;
            },
          },
          {
            key: 'hour',
            get() {
              return this.isValid ? this.c.hour : NaN;
            },
          },
          {
            key: 'minute',
            get() {
              return this.isValid ? this.c.minute : NaN;
            },
          },
          {
            key: 'second',
            get() {
              return this.isValid ? this.c.second : NaN;
            },
          },
          {
            key: 'millisecond',
            get() {
              return this.isValid ? this.c.millisecond : NaN;
            },
          },
          {
            key: 'weekYear',
            get() {
              return this.isValid ? jn(this).weekYear : NaN;
            },
          },
          {
            key: 'weekNumber',
            get() {
              return this.isValid ? jn(this).weekNumber : NaN;
            },
          },
          {
            key: 'weekday',
            get() {
              return this.isValid ? jn(this).weekday : NaN;
            },
          },
          {
            key: 'ordinal',
            get() {
              return this.isValid ? Cn(this.c).ordinal : NaN;
            },
          },
          {
            key: 'monthShort',
            get() {
              return this.isValid
                ? nn.months('short', { locObj: this.loc })[this.month - 1]
                : null;
            },
          },
          {
            key: 'monthLong',
            get() {
              return this.isValid
                ? nn.months('long', { locObj: this.loc })[this.month - 1]
                : null;
            },
          },
          {
            key: 'weekdayShort',
            get() {
              return this.isValid
                ? nn.weekdays('short', { locObj: this.loc })[this.weekday - 1]
                : null;
            },
          },
          {
            key: 'weekdayLong',
            get() {
              return this.isValid
                ? nn.weekdays('long', { locObj: this.loc })[this.weekday - 1]
                : null;
            },
          },
          {
            key: 'offset',
            get() {
              return this.isValid ? +this.o : NaN;
            },
          },
          {
            key: 'offsetNameShort',
            get() {
              return this.isValid
                ? this.zone.offsetName(this.ts, {
                  format: 'short',
                  locale: this.locale,
                })
                : null;
            },
          },
          {
            key: 'offsetNameLong',
            get() {
              return this.isValid
                ? this.zone.offsetName(this.ts, {
                  format: 'long',
                  locale: this.locale,
                })
                : null;
            },
          },
          {
            key: 'isOffsetFixed',
            get() {
              return this.isValid ? this.zone.isUniversal : null;
            },
          },
          {
            key: 'isInDST',
            get() {
              return (
                !this.isOffsetFixed
                && (this.offset > this.set({ month: 1 }).offset
                  || this.offset > this.set({ month: 5 }).offset)
              );
            },
          },
          {
            key: 'isInLeapYear',
            get() {
              return re(this.year);
            },
          },
          {
            key: 'daysInMonth',
            get() {
              return oe(this.year, this.month);
            },
          },
          {
            key: 'daysInYear',
            get() {
              return this.isValid ? ie(this.year) : NaN;
            },
          },
          {
            key: 'weeksInWeekYear',
            get() {
              return this.isValid ? ae(this.weekYear) : NaN;
            },
          },
        ],
        [
          {
            key: 'DATE_SHORT',
            get() {
              return b;
            },
          },
          {
            key: 'DATE_MED',
            get() {
              return O;
            },
          },
          {
            key: 'DATE_MED_WITH_WEEKDAY',
            get() {
              return M;
            },
          },
          {
            key: 'DATE_FULL',
            get() {
              return N;
            },
          },
          {
            key: 'DATE_HUGE',
            get() {
              return D;
            },
          },
          {
            key: 'TIME_SIMPLE',
            get() {
              return E;
            },
          },
          {
            key: 'TIME_WITH_SECONDS',
            get() {
              return V;
            },
          },
          {
            key: 'TIME_WITH_SHORT_OFFSET',
            get() {
              return I;
            },
          },
          {
            key: 'TIME_WITH_LONG_OFFSET',
            get() {
              return x;
            },
          },
          {
            key: 'TIME_24_SIMPLE',
            get() {
              return C;
            },
          },
          {
            key: 'TIME_24_WITH_SECONDS',
            get() {
              return F;
            },
          },
          {
            key: 'TIME_24_WITH_SHORT_OFFSET',
            get() {
              return L;
            },
          },
          {
            key: 'TIME_24_WITH_LONG_OFFSET',
            get() {
              return Z;
            },
          },
          {
            key: 'DATETIME_SHORT',
            get() {
              return A;
            },
          },
          {
            key: 'DATETIME_SHORT_WITH_SECONDS',
            get() {
              return z;
            },
          },
          {
            key: 'DATETIME_MED',
            get() {
              return j;
            },
          },
          {
            key: 'DATETIME_MED_WITH_SECONDS',
            get() {
              return q;
            },
          },
          {
            key: 'DATETIME_MED_WITH_WEEKDAY',
            get() {
              return _;
            },
          },
          {
            key: 'DATETIME_FULL',
            get() {
              return U;
            },
          },
          {
            key: 'DATETIME_FULL_WITH_SECONDS',
            get() {
              return R;
            },
          },
          {
            key: 'DATETIME_HUGE',
            get() {
              return H;
            },
          },
          {
            key: 'DATETIME_HUGE_WITH_SECONDS',
            get() {
              return P;
            },
          },
        ],
      ),
      w
    );
  }());
  function or(e) {
    if (ir.isDateTime(e)) return e;
    if (e && e.valueOf && J(e.valueOf())) return ir.fromJSDate(e);
    if (e && typeof e === 'object') return ir.fromObject(e);
    throw new p(`Unknown datetime argument: ${e}, of type ${typeof e}`);
  }
  return (
    (e.DateTime = ir),
    (e.Duration = Xt),
    (e.FixedOffsetZone = Re),
    (e.IANAZone = _e),
    (e.Info = nn),
    (e.Interval = tn),
    (e.InvalidZone = He),
    (e.Settings = Qe),
    (e.SystemZone = Ze),
    (e.VERSION = '2.3.0'),
    (e.Zone = Fe),
    Object.defineProperty(e, '__esModule', { value: !0 }),
    e
  );
}({}));
