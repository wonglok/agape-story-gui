let builder = () => {
  let e, t, r;
  return (function () {
    function l(o, s, u) {
      function a(r, e) {
        if (!s[r]) {
          if (!o[r]) {
            let t = "function" == typeof require && require;
            if (!e && t) return t(r, !0);
            if (f) return f(r, !0);
            let n = new Error("Cannot find module '" + r + "'");
            throw ((n.code = "MODULE_NOT_FOUND"), n);
          }
          let i = (s[r] = { exports: {} });
          o[r][0].call(
            i.exports,
            function (e) {
              let t = o[r][1][e];
              return a(t || e);
            },
            i,
            i.exports,
            l,
            o,
            s,
            u
          );
        }
        return s[r].exports;
      }
      for (
        let f = "function" == typeof require && require, e = 0;
        e < u.length;
        e++
      )
        a(u[e]);
      return a;
    }
    return l;
  })()(
    {
      1: [
        function (e, t, r) {
          let a = Object.create || E;
          let u = Object.keys || j;
          let o = Function.prototype.bind || k;
          function n() {
            if (
              !this._events ||
              !Object.prototype.hasOwnProperty.call(this, "_events")
            ) {
              this._events = a(null);
              this._eventsCount = 0;
            }
            this._maxListeners = this._maxListeners || undefined;
          }
          t.exports = n;
          n.EventEmitter = n;
          n.prototype._events = undefined;
          n.prototype._maxListeners = undefined;
          let i = 10;
          let s;
          try {
            let f = {};
            if (Object.defineProperty)
              Object.defineProperty(f, "x", { value: 0 });
            s = f.x === 0;
          } catch (e) {
            s = false;
          }
          if (s) {
            Object.defineProperty(n, "defaultMaxListeners", {
              enumerable: true,
              get: function () {
                return i;
              },
              set: function (e) {
                if (typeof e !== "number" || e < 0 || e !== e)
                  throw new TypeError(
                    '"defaultMaxListeners" must be a positive number'
                  );
                i = e;
              },
            });
          } else {
            n.defaultMaxListeners = i;
          }
          n.prototype.setMaxListeners = function e(t) {
            if (typeof t !== "number" || t < 0 || isNaN(t))
              throw new TypeError('"n" argument must be a positive number');
            this._maxListeners = t;
            return this;
          };
          function l(e) {
            if (e._maxListeners === undefined) return n.defaultMaxListeners;
            return e._maxListeners;
          }
          n.prototype.getMaxListeners = function e() {
            return l(this);
          };
          function c(e, t, r) {
            if (t) e.call(r);
            else {
              let n = e.length;
              let i = b(e, n);
              for (let o = 0; o < n; ++o) i[o].call(r);
            }
          }
          function h(e, t, r, n) {
            if (t) e.call(r, n);
            else {
              let i = e.length;
              let o = b(e, i);
              for (let s = 0; s < i; ++s) o[s].call(r, n);
            }
          }
          function p(e, t, r, n, i) {
            if (t) e.call(r, n, i);
            else {
              let o = e.length;
              let s = b(e, o);
              for (let u = 0; u < o; ++u) s[u].call(r, n, i);
            }
          }
          function v(e, t, r, n, i, o) {
            if (t) e.call(r, n, i, o);
            else {
              let s = e.length;
              let u = b(e, s);
              for (let a = 0; a < s; ++a) u[a].call(r, n, i, o);
            }
          }
          function d(e, t, r, n) {
            if (t) e.apply(r, n);
            else {
              let i = e.length;
              let o = b(e, i);
              for (let s = 0; s < i; ++s) o[s].apply(r, n);
            }
          }
          n.prototype.emit = function e(t) {
            let r, n, i, o, s, u;
            let a = t === "error";
            u = this._events;
            if (u) a = a && u.error == null;
            else if (!a) return false;
            if (a) {
              if (arguments.length > 1) r = arguments[1];
              if (r instanceof Error) {
                throw r;
              } else {
                let f = new Error('Unhandled "error" event. (' + r + ")");
                f.context = r;
                throw f;
              }
              return false;
            }
            n = u[t];
            if (!n) return false;
            let l = typeof n === "function";
            i = arguments.length;
            switch (i) {
              case 1:
                c(n, l, this);
                break;
              case 2:
                h(n, l, this, arguments[1]);
                break;
              case 3:
                p(n, l, this, arguments[1], arguments[2]);
                break;
              case 4:
                v(n, l, this, arguments[1], arguments[2], arguments[3]);
                break;
              default:
                o = new Array(i - 1);
                for (s = 1; s < i; s++) o[s - 1] = arguments[s];
                d(n, l, this, o);
            }
            return true;
          };
          function y(e, t, r, n) {
            let i;
            let o;
            let s;
            if (typeof r !== "function")
              throw new TypeError('"listener" argument must be a function');
            o = e._events;
            if (!o) {
              o = e._events = a(null);
              e._eventsCount = 0;
            } else {
              if (o.newListener) {
                e.emit("newListener", t, r.listener ? r.listener : r);
                o = e._events;
              }
              s = o[t];
            }
            if (!s) {
              s = o[t] = r;
              ++e._eventsCount;
            } else {
              if (typeof s === "function") {
                s = o[t] = n ? [r, s] : [s, r];
              } else {
                if (n) {
                  s.unshift(r);
                } else {
                  s.push(r);
                }
              }
              if (!s.warned) {
                i = l(e);
                if (i && i > 0 && s.length > i) {
                  s.warned = true;
                  let u = new Error(
                    "Possible EventEmitter memory leak detected. " +
                      s.length +
                      ' "' +
                      String(t) +
                      '" listeners ' +
                      "added. Use emitter.setMaxListeners() to " +
                      "increase limit."
                  );
                  u.name = "MaxListenersExceededWarning";
                  u.emitter = e;
                  u.type = t;
                  u.count = s.length;
                  if (typeof console === "object" && console.warn) {
                    console.warn("%s: %s", u.name, u.message);
                  }
                }
              }
            }
            return e;
          }
          n.prototype.addListener = function e(t, r) {
            return y(this, t, r, false);
          };
          n.prototype.on = n.prototype.addListener;
          n.prototype.prependListener = function e(t, r) {
            return y(this, t, r, true);
          };
          function _() {
            if (!this.fired) {
              this.target.removeListener(this.type, this.wrapFn);
              this.fired = true;
              switch (arguments.length) {
                case 0:
                  return this.listener.call(this.target);
                case 1:
                  return this.listener.call(this.target, arguments[0]);
                case 2:
                  return this.listener.call(
                    this.target,
                    arguments[0],
                    arguments[1]
                  );
                case 3:
                  return this.listener.call(
                    this.target,
                    arguments[0],
                    arguments[1],
                    arguments[2]
                  );
                default:
                  let e = new Array(arguments.length);
                  for (let t = 0; t < e.length; ++t) e[t] = arguments[t];
                  this.listener.apply(this.target, e);
              }
            }
          }
          function m(e, t, r) {
            let n = {
              fired: false,
              wrapFn: undefined,
              target: e,
              type: t,
              listener: r,
            };
            let i = o.call(_, n);
            i.listener = r;
            n.wrapFn = i;
            return i;
          }
          n.prototype.once = function e(t, r) {
            if (typeof r !== "function")
              throw new TypeError('"listener" argument must be a function');
            this.on(t, m(this, t, r));
            return this;
          };
          n.prototype.prependOnceListener = function e(t, r) {
            if (typeof r !== "function")
              throw new TypeError('"listener" argument must be a function');
            this.prependListener(t, m(this, t, r));
            return this;
          };
          n.prototype.removeListener = function e(t, r) {
            let n, i, o, s, u;
            if (typeof r !== "function")
              throw new TypeError('"listener" argument must be a function');
            i = this._events;
            if (!i) return this;
            n = i[t];
            if (!n) return this;
            if (n === r || n.listener === r) {
              if (--this._eventsCount === 0) this._events = a(null);
              else {
                delete i[t];
                if (i.removeListener)
                  this.emit("removeListener", t, n.listener || r);
              }
            } else if (typeof n !== "function") {
              o = -1;
              for (s = n.length - 1; s >= 0; s--) {
                if (n[s] === r || n[s].listener === r) {
                  u = n[s].listener;
                  o = s;
                  break;
                }
              }
              if (o < 0) return this;
              if (o === 0) n.shift();
              else g(n, o);
              if (n.length === 1) i[t] = n[0];
              if (i.removeListener) this.emit("removeListener", t, u || r);
            }
            return this;
          };
          n.prototype.removeAllListeners = function e(t) {
            let r, n, i;
            n = this._events;
            if (!n) return this;
            if (!n.removeListener) {
              if (arguments.length === 0) {
                this._events = a(null);
                this._eventsCount = 0;
              } else if (n[t]) {
                if (--this._eventsCount === 0) this._events = a(null);
                else delete n[t];
              }
              return this;
            }
            if (arguments.length === 0) {
              let o = u(n);
              let s;
              for (i = 0; i < o.length; ++i) {
                s = o[i];
                if (s === "removeListener") continue;
                this.removeAllListeners(s);
              }
              this.removeAllListeners("removeListener");
              this._events = a(null);
              this._eventsCount = 0;
              return this;
            }
            r = n[t];
            if (typeof r === "function") {
              this.removeListener(t, r);
            } else if (r) {
              for (i = r.length - 1; i >= 0; i--) {
                this.removeListener(t, r[i]);
              }
            }
            return this;
          };
          n.prototype.listeners = function e(t) {
            let r;
            let n;
            let i = this._events;
            if (!i) n = [];
            else {
              r = i[t];
              if (!r) n = [];
              else if (typeof r === "function") n = [r.listener || r];
              else n = L(r);
            }
            return n;
          };
          n.listenerCount = function (e, t) {
            if (typeof e.listenerCount === "function") {
              return e.listenerCount(t);
            } else {
              return w.call(e, t);
            }
          };
          n.prototype.listenerCount = w;
          function w(e) {
            let t = this._events;
            if (t) {
              let r = t[e];
              if (typeof r === "function") {
                return 1;
              } else if (r) {
                return r.length;
              }
            }
            return 0;
          }
          n.prototype.eventNames = function e() {
            return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
          };
          function g(e, t) {
            for (let r = t, n = r + 1, i = e.length; n < i; r += 1, n += 1)
              e[r] = e[n];
            e.pop();
          }
          function b(e, t) {
            let r = new Array(t);
            for (let n = 0; n < t; ++n) r[n] = e[n];
            return r;
          }
          function L(e) {
            let t = new Array(e.length);
            for (let r = 0; r < t.length; ++r) {
              t[r] = e[r].listener || e[r];
            }
            return t;
          }
          function E(e) {
            let t = function () {};
            t.prototype = e;
            return new t();
          }
          function j(e) {
            let t = [];
            for (let r in e)
              if (Object.prototype.hasOwnProperty.call(e, r)) {
                t.push(r);
              }
            return r;
          }
          function k(e) {
            let t = this;
            return function () {
              return t.apply(e, arguments);
            };
          }
        },
        {},
      ],
      2: [
        function (e, t, r) {
          if (typeof Object.create === "function") {
            t.exports = function e(t, r) {
              t.super_ = r;
              t.prototype = Object.create(r.prototype, {
                constructor: {
                  value: t,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              });
            };
          } else {
            t.exports = function e(t, r) {
              t.super_ = r;
              let n = function () {};
              n.prototype = r.prototype;
              t.prototype = new n();
              t.prototype.constructor = t;
            };
          }
        },
        {},
      ],
      3: [
        function (e, t, r) {
          t.exports = n;
          function n(r) {
            let n;
            let i;
            let o;
            if (r != null && typeof r !== "function")
              throw new Error("cb must be a function");
            if (r == null && typeof Promise !== "undefined") {
              n = new Promise(function (e, t) {
                i = e;
                o = t;
              });
            }
            function e(e, t) {
              if (n) {
                if (e) o(e);
                else i(t);
              } else {
                if (r) r(e, t);
                else if (e) throw e;
              }
            }
            e.promise = n;
            return e;
          }
        },
        {},
      ],
      "/": [
        function (e, t, r) {
          t.exports = y;
          let p = e("events").EventEmitter;
          let n = e("inherits");
          let f = e("promisize");
          let v = typeof window === "undefined" ? self : window;
          let d =
            v.indexedDB || v.mozIndexedDB || v.webkitIndexedDB || v.msIndexedDB;
          y.INDEXEDDB_SUPPORT = d != null;
          y.BROADCAST_SUPPORT = v.BroadcastChannel != null;
          n(y, p);
          function y(e, t, r) {
            let n = this;
            if (typeof e !== "string")
              throw new Error("A name must be supplied of type string");
            if (!d) throw new Error("IndexedDB not supported");
            if (typeof t === "function") return new y(e, null, t);
            if (!(n instanceof y)) return new y(e, t, r);
            if (!t) t = {};
            p.call(n);
            n._db = null;
            n._closed = false;
            n._channel = null;
            n._waiters = [];
            let i = t.channel || v.BroadcastChannel;
            if (i) {
              n._channel = new i(e);
              n._channel.onmessage = h;
            }
            let o = d.open(e);
            o.onerror = s;
            o.onsuccess = a;
            o.onupgradeneeded = f;
            n.on("newListener", c);
            function s(e) {
              _(e);
              n._close(e.target.error);
              if (r) r(e.target.error);
            }
            function u(e) {
              _(e);
              n._close(e.target.error);
            }
            function a(e) {
              if (n._closed) {
                e.target.result.close();
              } else {
                n._db = e.target.result;
                n._db.onclose = l;
                n._db.onerror = u;
                for (let t in n._waiters) n._waiters[t]._init(null);
                n._waiters = null;
                if (r) r(null);
                n.emit("open");
              }
            }
            function f(e) {
              let t = e.target.result;
              t.createObjectStore("kv", { autoIncrement: true });
            }
            function l() {
              n._close();
            }
            function c(e) {
              if (e !== "add" && e !== "set" && e !== "remove") return;
              if (!n._channel)
                return n.emit(
                  "error",
                  new Error("No BroadcastChannel support")
                );
            }
            function h(e) {
              if (e.data.method === "add") n.emit("add", e.data);
              else if (e.data.method === "set") n.emit("set", e.data);
              else if (e.data.method === "remove") n.emit("remove", e.data);
            }
          }
          y.prototype.get = function (e, t) {
            return this.transaction("readonly").get(e, t);
          };
          y.prototype.getMultiple = function (e, t) {
            return this.transaction("readonly").getMultiple(e, t);
          };
          y.prototype.set = function (e, t, r) {
            r = f(r);
            let n = null;
            let i = this.transaction("readwrite", function (e) {
              n = n || e;
              r(n);
            });
            i.set(e, t, function (e) {
              n = e;
            });
            return r.promise;
          };
          y.prototype.json = function (e, t) {
            return this.transaction("readonly").json(e, t);
          };
          y.prototype.keys = function (e, t) {
            return this.transaction("readonly").keys(e, t);
          };
          y.prototype.values = function (e, t) {
            return this.transaction("readonly").values(e, t);
          };
          y.prototype.remove = function (e, t) {
            t = f(t);
            let r = null;
            let n = this.transaction("readwrite", function (e) {
              r = r || e;
              t(r);
            });
            n.remove(e, function (e) {
              r = e;
            });
            return t.promise;
          };
          y.prototype.clear = function (t) {
            t = f(t);
            let r = null;
            let e = this.transaction("readwrite", function (e) {
              r = r || e;
              t(r);
            });
            e.clear(function (e) {
              r = e;
            });
            return t.promise;
          };
          y.prototype.count = function (e, t) {
            return this.transaction("readonly").count(e, t);
          };
          y.prototype.add = function (e, t, r) {
            r = f(r);
            let n = null;
            let i = this.transaction("readwrite", function (e) {
              n = n || e;
              r(n);
            });
            i.add(e, t, function (e) {
              n = e;
            });
            return r.promise;
          };
          y.prototype.iterator = function (e, t) {
            return this.transaction("readonly").iterator(e, t);
          };
          y.prototype.transaction = function (e, t) {
            if (this._closed) throw new Error("Database is closed");
            let r = new i(this, e, t);
            if (this._db) r._init(null);
            else this._waiters.push(r);
            return r;
          };
          y.prototype.close = function () {
            this._close();
          };
          y.prototype._close = function (e) {
            if (this._closed) return;
            this._closed = true;
            if (this._db) this._db.close();
            if (this._channel) this._channel.close();
            this._db = null;
            this._channel = null;
            if (e) this.emit("error", e);
            this.emit("close");
            for (let t in this._waiters)
              this._waiters[t]._init(e || new Error("Database is closed"));
            this._waiters = null;
            this.removeAllListeners();
          };
          function i(e, t, r) {
            if (typeof t === "function") return new i(e, null, t);
            this._kvStore = e;
            this._mode = t || "readwrite";
            this._objectStore = null;
            this._waiters = null;
            this.finished = false;
            this.onfinish = f(r);
            this.done = this.onfinish.promise;
            if (this._mode !== "readonly" && this._mode !== "readwrite") {
              throw new Error('mode must be either "readonly" or "readwrite"');
            }
          }
          i.prototype._init = function (e) {
            let t = this;
            if (t.finished) return;
            if (e) return t._close(e);
            let r = t._kvStore._db.transaction("kv", t._mode);
            r.oncomplete = i;
            r.onerror = o;
            r.onabort = o;
            t._objectStore = r.objectStore("kv");
            for (let n in t._waiters) t._waiters[n](null, t._objectStore);
            t._waiters = null;
            function i() {
              t._close(null);
            }
            function o(e) {
              _(e);
              t._close(e.target.error);
            }
          };
          i.prototype._getObjectStore = function (e) {
            if (this.finished) throw new Error("Transaction is finished");
            if (this._objectStore) return e(null, this._objectStore);
            this._waiters = this._waiters || [];
            this._waiters.push(e);
          };
          i.prototype.set = function (n, i, o) {
            let s = this;
            if (n == null || i == null)
              throw new Error("A key and value must be given");
            o = f(o);
            s._getObjectStore(function (e, t) {
              if (e) return o(e);
              try {
                let r = t.put(i, n);
              } catch (e) {
                return o(e);
              }
              r.onerror = _.bind(this, o);
              r.onsuccess = function () {
                if (s._kvStore._channel) {
                  s._kvStore._channel.postMessage({
                    method: "set",
                    key: n,
                    value: i,
                  });
                }
                o(null);
              };
            });
            return o.promise;
          };
          i.prototype.add = function (n, i, o) {
            let s = this;
            if (i == null && n != null) return s.add(undefined, n, o);
            if (typeof i === "function" || (i == null && o == null))
              return s.add(undefined, n, i);
            if (i == null)
              throw new Error("A value must be provided as an argument");
            o = f(o);
            s._getObjectStore(function (e, t) {
              if (e) return o(e);
              try {
                let r = n == null ? t.add(i) : t.add(i, n);
              } catch (e) {
                return o(e);
              }
              r.onerror = _.bind(this, o);
              r.onsuccess = function () {
                if (s._kvStore._channel) {
                  s._kvStore._channel.postMessage({
                    method: "add",
                    key: n,
                    value: i,
                  });
                }
                o(null);
              };
            });
            return o.promise;
          };
          i.prototype.get = function (n, i) {
            let e = this;
            if (n == null)
              throw new Error("A key must be given as an argument");
            i = f(i);
            e._getObjectStore(function (e, t) {
              if (e) return i(e);
              try {
                let r = t.get(n);
              } catch (e) {
                return i(e);
              }
              r.onerror = _.bind(this, i);
              r.onsuccess = function (e) {
                i(null, e.target.result);
              };
            });
            return i.promise;
          };
          i.prototype.getMultiple = function (u, a) {
            let e = this;
            if (u == null)
              throw new Error("An array of keys must be given as an argument");
            a = f(a);
            if (u.length === 0) {
              a(null, []);
              return a.promise;
            }
            e._getObjectStore(function (e, t) {
              if (e) return a(e);
              let n = u.slice().sort();
              let i = 0;
              let o = {};
              let s = function () {
                return u.map(function (e) {
                  return o[e];
                });
              };
              let r = t.openCursor();
              r.onerror = _.bind(this, a);
              r.onsuccess = function (e) {
                let t = e.target.result;
                if (!t) {
                  a(null, s());
                  return;
                }
                let r = t.key;
                while (r > n[i]) {
                  ++i;
                  if (i === n.length) {
                    a(null, s());
                    return;
                  }
                }
                if (r === n[i]) {
                  o[r] = t.value;
                  t.continue();
                } else {
                  t.continue(n[i]);
                }
              };
            });
            return a.promise;
          };
          i.prototype.json = function (e, r) {
            let t = this;
            if (typeof e === "function") return t.json(null, e);
            r = f(r);
            let n = {};
            t.iterator(e, function (e, t) {
              if (e) return r(e);
              if (t) {
                n[t.key] = t.value;
                t.continue();
              } else {
                r(null, n);
              }
            });
            return r.promise;
          };
          i.prototype.keys = function (e, r) {
            let t = this;
            if (typeof e === "function") return t.keys(null, e);
            r = f(r);
            let n = [];
            t.iterator(e, function (e, t) {
              if (e) return r(e);
              if (t) {
                n.push(t.key);
                t.continue();
              } else {
                r(null, n);
              }
            });
            return r.promise;
          };
          i.prototype.values = function (e, r) {
            let t = this;
            if (typeof e === "function") return t.values(null, e);
            r = f(r);
            let n = [];
            t.iterator(e, function (e, t) {
              if (e) return r(e);
              if (t) {
                n.push(t.value);
                t.continue();
              } else {
                r(null, n);
              }
            });
            return r.promise;
          };
          i.prototype.remove = function (n, i) {
            let o = this;
            if (n == null)
              throw new Error("A key must be given as an argument");
            i = f(i);
            o._getObjectStore(function (e, t) {
              if (e) return i(e);
              try {
                let r = t.delete(n);
              } catch (e) {
                return i(e);
              }
              r.onerror = _.bind(this, i);
              r.onsuccess = function () {
                if (o._kvStore._channel) {
                  o._kvStore._channel.postMessage({ method: "remove", key: n });
                }
                i(null);
              };
            });
            return i.promise;
          };
          i.prototype.clear = function (n) {
            let e = this;
            n = f(n);
            e._getObjectStore(function (e, t) {
              if (e) return n(e);
              try {
                let r = t.clear();
              } catch (e) {
                return n(e);
              }
              r.onerror = _.bind(this, n);
              r.onsuccess = function () {
                n(null);
              };
            });
            return n.promise;
          };
          i.prototype.count = function (n, i) {
            let e = this;
            if (typeof n === "function") return e.count(null, n);
            i = f(i);
            e._getObjectStore(function (e, t) {
              if (e) return i(e);
              try {
                let r = n == null ? t.count() : t.count(n);
              } catch (e) {
                return i(e);
              }
              r.onerror = _.bind(this, i);
              r.onsuccess = function (e) {
                i(null, e.target.result);
              };
            });
            return i.promise;
          };
          i.prototype.iterator = function (n, i) {
            let e = this;
            if (typeof n === "function") return e.iterator(null, n);
            if (typeof i !== "function")
              throw new Error("A function must be given");
            e._getObjectStore(function (e, t) {
              if (e) return i(e);
              try {
                let r = n == null ? t.openCursor() : t.openCursor(n);
              } catch (e) {
                return i(e);
              }
              r.onerror = _.bind(this, i);
              r.onsuccess = function (e) {
                let t = e.target.result;
                i(null, t);
              };
            });
          };
          i.prototype.abort = function () {
            if (this.finished) throw new Error("Transaction is finished");
            if (this._objectStore) this._objectStore.transaction.abort();
            this._close(new Error("Transaction aborted"));
          };
          i.prototype._close = function (e) {
            if (this.finished) return;
            this.finished = true;
            this._kvStore = null;
            this._objectStore = null;
            for (let t in this._waiters)
              this._waiters[t](e || new Error("Transaction is finished"));
            this._waiters = null;
            if (this.onfinish) this.onfinish(e);
            this.onfinish = null;
          };
          function _(e, t) {
            if (t == null) return _(null, e);
            t.preventDefault();
            t.stopPropagation();
            if (e) e(t.target.error);
          }
        },
        { events: 1, inherits: 2, promisize: 3 },
      ],
    },
    {},
    []
  )("/");
};

export const IDBKvStore = builder();
