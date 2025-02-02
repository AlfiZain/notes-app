/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var t = {
      871: () => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var r = 0; r < e.length; r++) {
            var o = e[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(t, n(o.key), o);
          }
        }
        function n(e) {
          var n = (function (e) {
            if ('object' != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, 'string');
              if ('object' != t(r)) return r;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.',
              );
            }
            return String(e);
          })(e);
          return 'symbol' == t(n) ? n : n + '';
        }
        function r(t) {
          var e = 'function' == typeof Map ? new Map() : void 0;
          return (
            (r = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf('[native code]')
                    );
                  } catch (e) {
                    return 'function' == typeof t;
                  }
                })(t)
              )
                return t;
              if ('function' != typeof t)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (o()) return Reflect.construct.apply(null, arguments);
                  var r = [null];
                  r.push.apply(r, e);
                  var a = new (t.bind.apply(t, r))();
                  return n && i(a, n.prototype), a;
                })(t, arguments, a(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(n, t)
              );
            }),
            r(t)
          );
        }
        function o() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (o = function () {
            return !!t;
          })();
        }
        function i(t, e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            i(t, e)
          );
        }
        function a(t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            a(t)
          );
        }
        var s = (function (n) {
          function r() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, r),
              ((e = (function (e, n, r) {
                return (
                  (n = a(n)),
                  (function (e, n) {
                    if (n && ('object' == t(n) || 'function' == typeof n))
                      return n;
                    if (void 0 !== n)
                      throw new TypeError(
                        'Derived constructors may only return object or undefined',
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(e);
                  })(
                    e,
                    o()
                      ? Reflect.construct(n, r || [], a(e).constructor)
                      : n.apply(e, r),
                  )
                );
              })(this, r))._shadowRoot = e.attachShadow({ mode: 'open' })),
              (e._style = document.createElement('style')),
              e
            );
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && i(t, e);
            })(r, n),
            (s = r),
            (l = [
              {
                key: '_updateStyle',
                value: function () {
                  this._style.textContent =
                    '\n      :host {\n        display: none;\n      }\n      .section-title {\n        margin: 0 0 1rem 0;\n      }\n      label {\n        display: block;\n        font-weight: bold;\n        font-size: 1.15rem;\n        margin-block-end: 0.5rem;\n      }\n      input, textarea {\n        width: 100%;\n        padding: 0.75rem;\n        margin-block-end: 1rem;\n        border: 1px solid #cccccc;\n        border-radius: 5px;\n        font-size: 1rem;\n        box-sizing: border-box;\n        font-family: inherit;\n      }\n      textarea {\n        resize: vertical;\n        min-height: 150px;\n      }\n      .form-group .description {\n        display: block;\n        margin-block-end: 0.5rem;\n        font-size: 0.75rem;\n        color: #666666;\n      }\n      .form-group.btn-group {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        gap: 1rem;\n      }\n      button {\n        width: 100%;\n        max-width: 200px;\n        padding: 0.5rem 1rem;\n        font-size: 1rem;\n        border: none;\n        border-radius: 10px;\n        cursor: pointer;\n      }\n      .submit-btn {\n        color: white;\n        background: #28a745;\n      }\n      .submit-btn:hover {\n        background: #218838;\n      }\n      .cancel-btn {\n        color: white;\n        background: #ff2222;\n      }\n      .cancel-btn:hover {\n        background: #dd0000;\n      }\n      #loading-indicator {\n        display: none;\n        position: fixed;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        background: rgba(0, 0, 0, 0.7);\n        color: white;\n        padding: 1rem 2rem;\n        border-radius: 8px;\n        font-size: 1.2rem;\n        z-index: 1000;\n      }\n      @media screen and (max-width: 480px) {\n        button {\n          max-width: 320px;\n        }\n      }\n    ';
                },
              },
              {
                key: '_emptyContent',
                value: function () {
                  this._shadowRoot.innerHTML = '';
                },
              },
              {
                key: 'connectedCallback',
                value: function () {
                  this.render();
                },
              },
              {
                key: 'render',
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n      <h2 class="section-title">Add New Note</h2>\n      <form>\n        <div class="form-group">\n          <label for="title">Note Title</label>\n          <span id="titleHelp" class="description"></span>\n          <input \n            type="text" \n            id="title" \n            name="title" \n            placeholder="Enter a note title" \n            required \n            minlength="5" \n            maxlength="30" \n            autocomplete="off" \n            aria-describedby="titleHelp">\n        </div>\n        <div class="form-group">\n          <label for="body">Note Contents</label>\n          <span id="bodyHelp" class="description"></span>\n          <textarea \n            id="body" \n            name="body" \n            placeholder="Write your notes here..." \n            required \n            minlength="5" \n            maxlength="250" \n            inputmode="text" \n            aria-describedby="bodyHelp"></textarea>\n        </div>\n        <div class="form-group btn-group">\n          <button type="submit" class="submit-btn">Save Notes</button>\n          <button type="button" class="cancel-btn">Cancel</button>\n        </div>\n      </form>\n      <div id="loading-indicator">Loading...</div>\n    ');
                },
              },
            ]) && e(s.prototype, l),
            Object.defineProperty(s, 'prototype', { writable: !1 }),
            s
          );
          var s, l;
        })(r(HTMLElement));
        customElements.define('add-note-form', s);
      },
      799: () => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var r = 0; r < e.length; r++) {
            var o = e[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(t, n(o.key), o);
          }
        }
        function n(e) {
          var n = (function (e) {
            if ('object' != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, 'string');
              if ('object' != t(r)) return r;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.',
              );
            }
            return String(e);
          })(e);
          return 'symbol' == t(n) ? n : n + '';
        }
        function r(t) {
          var e = 'function' == typeof Map ? new Map() : void 0;
          return (
            (r = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf('[native code]')
                    );
                  } catch (e) {
                    return 'function' == typeof t;
                  }
                })(t)
              )
                return t;
              if ('function' != typeof t)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (o()) return Reflect.construct.apply(null, arguments);
                  var r = [null];
                  r.push.apply(r, e);
                  var a = new (t.bind.apply(t, r))();
                  return n && i(a, n.prototype), a;
                })(t, arguments, a(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(n, t)
              );
            }),
            r(t)
          );
        }
        function o() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (o = function () {
            return !!t;
          })();
        }
        function i(t, e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            i(t, e)
          );
        }
        function a(t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            a(t)
          );
        }
        var s = (function (n) {
          function r() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, r),
              ((e = (function (e, n, r) {
                return (
                  (n = a(n)),
                  (function (e, n) {
                    if (n && ('object' == t(n) || 'function' == typeof n))
                      return n;
                    if (void 0 !== n)
                      throw new TypeError(
                        'Derived constructors may only return object or undefined',
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(e);
                  })(
                    e,
                    o()
                      ? Reflect.construct(n, r || [], a(e).constructor)
                      : n.apply(e, r),
                  )
                );
              })(this, r))._shadowRoot = e.attachShadow({ mode: 'open' })),
              (e._style = document.createElement('style')),
              e
            );
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && i(t, e);
            })(r, n),
            (s = r),
            (l = [
              {
                key: '_updateStyle',
                value: function () {
                  this._style.textContent =
                    '\n      :host {\n        display: block;\n        width: 100%;\n        color: black;\n        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);\n        background: #008bff;\n      }\n      div {\n        padding: 24px 20px;\n      }\n      .app-name {\n        margin: 0;\n        color: white;\n        font-size: 1.7em;\n      }\n    ';
                },
              },
              {
                key: '_emptyContent',
                value: function () {
                  this._shadowRoot.innerHTML = '';
                },
              },
              {
                key: 'connectedCallback',
                value: function () {
                  this.render();
                },
              },
              {
                key: 'render',
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n      <div>\n        <h1 class="app-name">My Notes</h1>\n      </div>\n    ');
                },
              },
            ]) && e(s.prototype, l),
            Object.defineProperty(s, 'prototype', { writable: !1 }),
            s
          );
          var s, l;
        })(r(HTMLElement));
        customElements.define('app-bar', s);
      },
      177: () => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var r = 0; r < e.length; r++) {
            var o = e[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(t, n(o.key), o);
          }
        }
        function n(e) {
          var n = (function (e) {
            if ('object' != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, 'string');
              if ('object' != t(r)) return r;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.',
              );
            }
            return String(e);
          })(e);
          return 'symbol' == t(n) ? n : n + '';
        }
        function r(t) {
          var e = 'function' == typeof Map ? new Map() : void 0;
          return (
            (r = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf('[native code]')
                    );
                  } catch (e) {
                    return 'function' == typeof t;
                  }
                })(t)
              )
                return t;
              if ('function' != typeof t)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (o()) return Reflect.construct.apply(null, arguments);
                  var r = [null];
                  r.push.apply(r, e);
                  var a = new (t.bind.apply(t, r))();
                  return n && i(a, n.prototype), a;
                })(t, arguments, a(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(n, t)
              );
            }),
            r(t)
          );
        }
        function o() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (o = function () {
            return !!t;
          })();
        }
        function i(t, e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            i(t, e)
          );
        }
        function a(t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            a(t)
          );
        }
        var s = (function (n) {
          function r() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, r),
              ((e = (function (e, n, r) {
                return (
                  (n = a(n)),
                  (function (e, n) {
                    if (n && ('object' == t(n) || 'function' == typeof n))
                      return n;
                    if (void 0 !== n)
                      throw new TypeError(
                        'Derived constructors may only return object or undefined',
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(e);
                  })(
                    e,
                    o()
                      ? Reflect.construct(n, r || [], a(e).constructor)
                      : n.apply(e, r),
                  )
                );
              })(this, r))._shadowRoot = e.attachShadow({ mode: 'open' })),
              (e._style = document.createElement('style')),
              e
            );
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && i(t, e);
            })(r, n),
            (s = r),
            (l = [
              {
                key: '_updateStyle',
                value: function () {
                  this._style.textContent =
                    '\n        :host {\n          display: block;\n          width: 100%;\n          color: black;\n          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);\n          background: #008bff;\n        }\n        div {\n            padding: 24px 20px;\n        }\n        p {\n        text-align: center;    \n        color: white;\n        }\n      ';
                },
              },
              {
                key: '_emptyContent',
                value: function () {
                  this._shadowRoot.innerHTML = '';
                },
              },
              {
                key: 'connectedCallback',
                value: function () {
                  this.render();
                },
              },
              {
                key: 'render',
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n        <div>    \n    <p>My Notes by Muhammad Alfi Zain</p>\n    </div>\n      ');
                },
              },
            ]) && e(s.prototype, l),
            Object.defineProperty(s, 'prototype', { writable: !1 }),
            s
          );
          var s, l;
        })(r(HTMLElement));
        customElements.define('footer-bar', s);
      },
      784: () => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, s(r.key), r);
          }
        }
        function n(t) {
          var e = 'function' == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf('[native code]')
                    );
                  } catch (e) {
                    return 'function' == typeof t;
                  }
                })(t)
              )
                return t;
              if ('function' != typeof t)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return n && o(a, n.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = s(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function s(e) {
          var n = (function (e) {
            if ('object' != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, 'string');
              if ('object' != t(r)) return r;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.',
              );
            }
            return String(e);
          })(e);
          return 'symbol' == t(n) ? n : n + '';
        }
        var l = (function (n) {
          function s() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, s),
              a(
                (e = (function (e, n, o) {
                  return (
                    (n = i(n)),
                    (function (e, n) {
                      if (n && ('object' == t(n) || 'function' == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          'Derived constructors may only return object or undefined',
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(e);
                    })(
                      e,
                      r()
                        ? Reflect.construct(n, o || [], i(e).constructor)
                        : n.apply(e, o),
                    )
                  );
                })(this, s)),
                '_shadowRoot',
                null,
              ),
              a(e, '_style', null),
              a(e, '_note', {
                id: null,
                title: null,
                body: null,
                createdAt: null,
                archived: !1,
              }),
              (e._shadowRoot = e.attachShadow({ mode: 'open' })),
              (e._style = document.createElement('style')),
              e
            );
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && o(t, e);
            })(s, n),
            (l = s),
            (c = [
              {
                key: 'note',
                get: function () {
                  return this._note;
                },
                set: function (t) {
                  (this._note = t), this.render();
                },
              },
              {
                key: '_updateStyle',
                value: function () {
                  this._style.textContent =
                    '\n      .note-card {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        height: 350px;\n        border-radius: 10%;\n        padding: 0.5rem;\n        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);\n        background: #eeeeee;\n        transition: transform 0.3s ease;\n      }\n      .note-card:hover {\n        transform: scale(1.05);\n      }\n      .note-content {\n        margin: 0.5rem;\n        overflow: hidden;\n      }\n      .note-footer {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        row-gap: 0.5rem;\n        margin: 0.5rem;\n      }\n      .note-title {\n        margin: 0;\n        overflow-wrap: break-word;\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .note-info {\n        margin-block: 0.5em;\n        font-size: 0.7rem;\n        color: gray;\n      }\n      .note-body {\n        margin-block: 0.5em;\n      }\n      .btn {\n        align-items: start;\n        justify-content: center;\n        gap: 0.5rem;\n        width: 100%;\n        padding: 0.5rem 1rem;\n        font-size: 1rem;\n        border: none;\n        border-radius: 10px;\n        cursor: pointer;\n      }\n      .icon {\n        width: 15px;\n        height: 15px;\n        color: inherit;\n      }\n      .archive-btn {\n        display: flex;\n        background: #6c757d;\n        color: white;\n      }\n      .archive-btn:hover {\n        background: #5a6268;\n      }\n      .unarchive-btn {\n        display: none;\n        align-items: end;\n        background: #6c757d;\n        color: white;\n      }\n      .unarchive-btn:hover {\n        background: #5a6268;\n      }\n      .delete-btn {\n        display: flex;\n        background: #ff2222;\n        color: white;\n      }\n      .delete-btn:hover {\n        background: #dd0000;\n      }\n      .unarchive-icon{\n        width: 20px;\n        height: 20px;\n      }\n    ';
                },
              },
              {
                key: '_emptyContent',
                value: function () {
                  this._shadowRoot.innerHTML = '';
                },
              },
              {
                key: 'connectedCallback',
                value: function () {
                  this.render();
                },
              },
              {
                key: 'render',
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style);
                  var t = new Date(this._note.createdAt).toLocaleString(),
                    e = this._note.archived;
                  this._shadowRoot.innerHTML +=
                    '\n      <div class="note-card" id="'
                      .concat(
                        this._note.id,
                        '">\n        <div class="note-content">\n          <h3 class="note-title">',
                      )
                      .concat(
                        this._note.title,
                        '</h3>\n          <p class="note-info">',
                      )
                      .concat(this._note.id, ' - ')
                      .concat(t, '</p>\n          <p class="note-body">')
                      .concat(
                        this._note.body,
                        '</p>\n        </div>\n        <div class="note-footer">\n          <button class="btn archive-btn" style="display: ',
                      )
                      .concat(
                        e ? 'none' : 'flex',
                        ';">\n            <svg class="icon archive-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n              <path fill="currentcolor" d="M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"/>\n            </svg>\n            Archive\n          </button>\n          <button class="btn unarchive-btn" style="display: ',
                      )
                      .concat(
                        e ? 'flex' : 'none',
                        ';">\n            <svg class="icon unarchive-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">\x3c!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--\x3e<path fill="currentcolor" d="M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6l0 167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5l0-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128l2.2 0z">\n            </svg>\n            Unarchive\n          </button>\n          <button class="btn delete-btn">\n            <svg class="icon delete-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n              <path fill="currentcolor" d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>\n            </svg>\n            Delete\n          </button>\n        </div>\n      </div>\n    ',
                      );
                },
              },
            ]) && e(l.prototype, c),
            Object.defineProperty(l, 'prototype', { writable: !1 }),
            l
          );
          var l, c;
        })(n(HTMLElement));
        customElements.define('note-item', l);
      },
      785: () => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, s(r.key), r);
          }
        }
        function n(t) {
          var e = 'function' == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf('[native code]')
                    );
                  } catch (e) {
                    return 'function' == typeof t;
                  }
                })(t)
              )
                return t;
              if ('function' != typeof t)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return n && o(a, n.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = s(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function s(e) {
          var n = (function (e) {
            if ('object' != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, 'string');
              if ('object' != t(r)) return r;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.',
              );
            }
            return String(e);
          })(e);
          return 'symbol' == t(n) ? n : n + '';
        }
        var l = (function (n) {
          function s() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, s),
              a(
                (e = (function (e, n, o) {
                  return (
                    (n = i(n)),
                    (function (e, n) {
                      if (n && ('object' == t(n) || 'function' == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          'Derived constructors may only return object or undefined',
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(e);
                    })(
                      e,
                      r()
                        ? Reflect.construct(n, o || [], i(e).constructor)
                        : n.apply(e, o),
                    )
                  );
                })(this, s)),
                '_shadowRoot',
                null,
              ),
              a(e, '_style', null),
              (e._shadowRoot = e.attachShadow({ mode: 'open' })),
              (e._style = document.createElement('style')),
              e.render(),
              e
            );
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && o(t, e);
            })(s, n),
            (l = s),
            (c = [
              {
                key: '_updateStyle',
                value: function () {
                  this._style.textContent =
                    '\n      .container {\n        width: 100%;\n        max-width: 1000px;\n        min-height: 70vh;\n        display: block;\n        margin-inline: auto;\n        margin-block: 1rem;\n        padding: 1rem;\n        color: black;       \n        box-sizing: border-box;\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n        border-radius: 5px;\n      }\n    ';
                },
              },
              {
                key: '_emptyContent',
                value: function () {
                  this._shadowRoot.innerHTML = '';
                },
              },
              {
                key: 'render',
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n      <div class="container">\n        <slot></slot>\n      </div>\n    ');
                },
              },
            ]) && e(l.prototype, c),
            Object.defineProperty(l, 'prototype', { writable: !1 }),
            l
          );
          var l, c;
        })(n(HTMLElement));
        customElements.define('note-list-container', l);
      },
      827: () => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, s(r.key), r);
          }
        }
        function n(t) {
          var e = 'function' == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf('[native code]')
                    );
                  } catch (e) {
                    return 'function' == typeof t;
                  }
                })(t)
              )
                return t;
              if ('function' != typeof t)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return n && o(a, n.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = s(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function s(e) {
          var n = (function (e) {
            if ('object' != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, 'string');
              if ('object' != t(r)) return r;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.',
              );
            }
            return String(e);
          })(e);
          return 'symbol' == t(n) ? n : n + '';
        }
        var l = (function (n) {
          function s() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, s),
              a(
                (e = (function (e, n, o) {
                  return (
                    (n = i(n)),
                    (function (e, n) {
                      if (n && ('object' == t(n) || 'function' == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          'Derived constructors may only return object or undefined',
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(e);
                    })(
                      e,
                      r()
                        ? Reflect.construct(n, o || [], i(e).constructor)
                        : n.apply(e, o),
                    )
                  );
                })(this, s)),
                '_shadowRoot',
                null,
              ),
              a(e, '_style', null),
              (e._gridSize = e.getAttribute('grid-size')),
              (e._listTitle = e.getAttribute('list-title')),
              (e._shadowRoot = e.attachShadow({ mode: 'open' })),
              (e._style = document.createElement('style')),
              e
            );
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && o(t, e);
            })(s, n),
            (l = s),
            (c = [
              {
                key: '_updateStyle',
                value: function () {
                  this._style.textContent =
                    '\n      .list {\n        display: grid;\n        gap: 1rem;\n      }\n      .small {\n        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n      }\n      .medium {\n        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n      }\n      .large {\n        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n      }\n      .section-title {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 1rem;\n        padding-block: 1rem;\n      }\n      .section-title h2 {\n        margin: 0;\n      }\n      .add-note-btn {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 0.5rem;\n        padding-inline: 1.25rem;\n        padding-block: 0.5rem;\n        font-size: 1rem;\n        color: white;\n        background: #007bff;\n        border: none;\n        border-radius: 10px;\n      }\n      .add-note-btn:hover {\n        background: #005bff;\n        cursor: pointer;\n      }\n      .add-icon {\n        width: 15px;\n        height: 15px;\n        color: inherit;\n      }\n      select {\n        padding: 0.5rem;\n        font-size: 1rem;\n        border: 1px solid #cccccc;\n        border-radius: 5px;\n      }\n      select:focus {\n        outline: none;\n      }\n      .archived-btn {\n        display: flex;\n        align-items: start;\n        gap: 0.5rem;\n        width: 100%;\n        padding: 0.5rem 1rem;\n        margin-block-end: 1rem;\n        font-size: 1rem;\n        color: black;\n        background: #dddddd;\n        border: none;\n        border-radius: 10px;\n        text-align: left;\n      }\n      .archived-btn:hover {\n        cursor: pointer;\n        background: #cccccc;\n      }\n      .archived-icon {\n        width: 15px;\n        height: 15px;\n        color: inherit;\n      }\n      .all-notes-btn {\n        display: none;\n        align-items: start;\n        gap: 0.5rem;\n        width: 100%;\n        padding: 0.5rem 1rem;\n        margin-block-end: 1rem;\n        font-size: 1rem;\n        color: black;\n        background: #dddddd;\n        border: none;\n        border-radius: 10px;\n        text-align: left;\n      }\n      .all-notes-btn:hover {\n        cursor: pointer;\n        background: #cccccc;\n      }\n      .all-notes-icon {\n        width: 15px;\n        height: 15px;\n        color: inherit;\n      }\n      #loading-indicator {\n        display: none;\n        position: fixed;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        background: rgba(0, 0, 0, 0.7);\n        color: white;\n        padding: 1rem 2rem;\n        border-radius: 8px;\n        font-size: 1.2rem;\n        z-index: 1000;\n      }\n      @media screen and (max-width: 1000px) {\n        .section-title {\n          position: sticky;\n          top: 0;\n          left: 0;\n          background: #ffffff;\n          margin-inline: -1rem;\n          padding-inline: 1rem;\n          z-index: 999;\n        }\n      }\n      @media screen and (max-width: 425px) {\n        .add-text {\n          display: none;\n        }\n      }\n    ';
                },
              },
              {
                key: 'attributeChangedCallback',
                value: function (t, e, n) {
                  'grid-size' === t &&
                    ((this._gridSize = n), this._updateGrid()),
                    'list-title' === t &&
                      ((this._listTitle = n), this._updateTitle());
                },
              },
              {
                key: '_emptyContent',
                value: function () {
                  this._shadowRoot.innerHTML = '';
                },
              },
              {
                key: 'connectedCallback',
                value: function () {
                  this.render();
                },
              },
              {
                key: 'render',
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n      <div class="section-title">\n        <h2>'
                        .concat(
                          this._listTitle,
                          '</h2>\n        <button class="add-note-btn">\n          <svg class="add-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\n            <path fill="currentcolor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>\n          </svg>\n          <span class="add-text">Add Note</span>\n        </button>\n      </div>\n      <div class="grid-option-container">\n        <label for="grid-option">Grid Size:</label>\n        <select id="grid-option" class="grid-size-select">\n          <option value="small">Small</option>\n          <option value="medium">Medium</option>\n          <option value="large">Large</option>\n        </select>\n      </div>\n      <search-bar></search-bar>\n      <button class="archived-btn">\n        <svg class="archived-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n          <path fill="currentcolor" d="M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"/>\n        </svg>\n        Archived\n      </button>\n      <button class="all-notes-btn">\n        <svg class="all-notes-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n          <path fill="currentcolor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>\n        </svg>\n        All Notes\n      </button>\n      <div id="loading-indicator">Loading...</div>\n      <div class="list ',
                        )
                        .concat(this._gridSize, '">\n      </div>\n    '));
                },
              },
              {
                key: '_updateGrid',
                value: function () {
                  var t = this._shadowRoot.querySelector('.list');
                  t && (t.className = 'list '.concat(this._gridSize));
                },
              },
              {
                key: '_updateTitle',
                value: function () {
                  var t = this._shadowRoot.querySelector('.section-title h2');
                  t && (t.innerText = this._listTitle);
                },
              },
            ]) && e(l.prototype, c),
            Object.defineProperty(l, 'prototype', { writable: !1 }),
            l
          );
          var l, c;
        })(n(HTMLElement));
        a(l, 'observedAttributes', ['list-title', 'grid-size']),
          customElements.define('note-list', l);
      },
      566: () => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, s(r.key), r);
          }
        }
        function n(t) {
          var e = 'function' == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf('[native code]')
                    );
                  } catch (e) {
                    return 'function' == typeof t;
                  }
                })(t)
              )
                return t;
              if ('function' != typeof t)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return n && o(a, n.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = s(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function s(e) {
          var n = (function (e) {
            if ('object' != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, 'string');
              if ('object' != t(r)) return r;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.',
              );
            }
            return String(e);
          })(e);
          return 'symbol' == t(n) ? n : n + '';
        }
        var l = (function (n) {
          function s() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, s),
              a(
                (e = (function (e, n, o) {
                  return (
                    (n = i(n)),
                    (function (e, n) {
                      if (n && ('object' == t(n) || 'function' == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          'Derived constructors may only return object or undefined',
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(e);
                    })(
                      e,
                      r()
                        ? Reflect.construct(n, o || [], i(e).constructor)
                        : n.apply(e, o),
                    )
                  );
                })(this, s)),
                '_shadowRoot',
                null,
              ),
              a(e, '_style', null),
              a(e, '_submitEvent', 'submit'),
              a(e, '_searchEvent', 'search'),
              (e._shadowRoot = e.attachShadow({ mode: 'open' })),
              (e._style = document.createElement('style')),
              e.render(),
              e
            );
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && o(t, e);
            })(s, n),
            (l = s),
            (c = [
              {
                key: '_emptyContent',
                value: function () {
                  this._shadowRoot.innerHTML = '';
                },
              },
              {
                key: 'connectedCallback',
                value: function () {
                  var t = this;
                  this._shadowRoot
                    .querySelector('form')
                    .addEventListener('submit', function (e) {
                      return t._onFormSubmit(e, t);
                    }),
                    this.addEventListener(
                      this._submitEvent,
                      this._onSearchBarSubmit,
                    );
                },
              },
              {
                key: 'disconnectedCallback',
                value: function () {
                  var t = this;
                  this._shadowRoot
                    .querySelector('form')
                    .removeEventListener('submit', function (e) {
                      return t._onFormSubmit(e, t);
                    }),
                    this.removeEventListener(
                      this._submitEvent,
                      this._onSearchBarSubmit,
                    );
                },
              },
              {
                key: '_onFormSubmit',
                value: function (t, e) {
                  e.dispatchEvent(new CustomEvent('submit')),
                    t.preventDefault();
                },
              },
              {
                key: '_onSearchBarSubmit',
                value: function () {
                  var t = this._shadowRoot.querySelector('input#name').value;
                  t &&
                    this.dispatchEvent(
                      new CustomEvent(this._searchEvent, {
                        detail: { query: t },
                        bubbles: !0,
                      }),
                    );
                },
              },
              {
                key: '_updateStyle',
                value: function () {
                  this._style.textContent =
                    '\n      :host {\n        display: inline;\n      }\n      .floating-form {\n        background-color: white;\n        margin-block: 1rem;\n        border-radius: 5px;\n      }\n      .search-form {\n        display: flex;\n        gap: 16px;\n      }\n      .search-form .form-group {\n        flex-grow: 1;\n        position: relative;\n      }\n      .search-form .form-group input {\n        display: block;\n        width: 100%;\n        height: 40px;\n        padding: 14px 10px 0 10px;\n        border-inline: none;\n        border-block-start: none;\n        border-block-end: 1px solid #007bff;\n        font-size: 1rem;\n      }\n      .search-form .form-group input:focus-visible {\n        outline: 0;\n      }\n      .search-form .form-group label {\n        line-height: 40px;\n        font-size: 1em;\n        font-weight: bold;\n        color: #007bff;\n        white-space: nowrap;\n        position: absolute;\n        top: 0;\n        left: 0;\n        user-select: none;\n        pointer-events: none;\n        transition: 150ms all ease-in-out;\n      }\n      .search-form .form-group input:focus-visible ~ label,\n      .search-form .form-group input:valid ~ label {\n        left: 10px;\n        top: -16px;\n        font-size: 0.8em;\n      }\n      .search-form button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 0.5rem;\n        border: 0;\n        border-radius: 10px;\n        padding-inline: 1.25rem;\n        background-color: #007bff;\n        font-size: 1rem;\n        color: white;\n        cursor: pointer;\n        transition: 100ms linear;\n      }\n      .search-form button:hover {\n        background-color: #005bff;\n      }\n      .search-icon {\n        width: 15px;\n        height: 15px;\n        color: inherit;\n      }\n      @media screen and (max-width: 480px) {\n        .search-text {\n          display: none;\n        }\n      }\n    ';
                },
              },
              {
                key: 'render',
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n      <div class="floating-form">\n        <form id="searchForm" class="search-form">\n          <div class="form-group">\n            <input id="name" name="name" type="search" required />\n            <label for="name">Note Id</label>\n          </div>\n          <button>\n            <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n              <path fill="currentcolor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>\n            </svg>\n            <span class="search-text">Search</span>\n          </button>\n        </form>\n      </div>\n    ');
                },
              },
            ]),
            c && e(l.prototype, c),
            Object.defineProperty(l, 'prototype', { writable: !1 }),
            l
          );
          var l, c;
        })(n(HTMLElement));
        customElements.define('search-bar', l);
      },
      919: (t, e, n) => {
        'use strict';
        n.d(e, { A: () => s });
        var r = n(601),
          o = n.n(r),
          i = n(314),
          a = n.n(i)()(o());
        a.push([
          t.id,
          "* {\n  padding: 0;\n  margin: 0;\n\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  font-size: 100%;\n}\n\n/* Media query untuk mobile */\n@media screen and (max-width: 480px) {\n  body {\n    font-size: 90%;\n  }\n}\n",
          '',
        ]);
        const s = a;
      },
      314: (t) => {
        'use strict';
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = '',
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += '@supports ('.concat(e[4], ') {')),
                  e[2] && (n += '@media '.concat(e[2], ' {')),
                  r &&
                    (n += '@layer'.concat(
                      e[5].length > 0 ? ' '.concat(e[5]) : '',
                      ' {',
                    )),
                  (n += t(e)),
                  r && (n += '}'),
                  e[2] && (n += '}'),
                  e[4] && (n += '}'),
                  n
                );
              }).join('');
            }),
            (e.i = function (t, n, r, o, i) {
              'string' == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var l = this[s][0];
                  null != l && (a[l] = !0);
                }
              for (var c = 0; c < t.length; c++) {
                var u = [].concat(t[c]);
                (r && a[u[0]]) ||
                  (void 0 !== i &&
                    (void 0 === u[5] ||
                      (u[1] = '@layer'
                        .concat(u[5].length > 0 ? ' '.concat(u[5]) : '', ' {')
                        .concat(u[1], '}')),
                    (u[5] = i)),
                  n &&
                    (u[2]
                      ? ((u[1] = '@media '
                          .concat(u[2], ' {')
                          .concat(u[1], '}')),
                        (u[2] = n))
                      : (u[2] = n)),
                  o &&
                    (u[4]
                      ? ((u[1] = '@supports ('
                          .concat(u[4], ') {')
                          .concat(u[1], '}')),
                        (u[4] = o))
                      : (u[4] = ''.concat(o))),
                  e.push(u));
              }
            }),
            e
          );
        };
      },
      601: (t) => {
        'use strict';
        t.exports = function (t) {
          return t[1];
        };
      },
      72: (t) => {
        'use strict';
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var i = {}, a = [], s = 0; s < t.length; s++) {
            var l = t[s],
              c = r.base ? l[0] + r.base : l[0],
              u = i[c] || 0,
              d = ''.concat(c, ' ').concat(u);
            i[c] = u + 1;
            var f = n(d),
              p = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== f) e[f].references++, e[f].updater(p);
            else {
              var h = o(p, r);
              (r.byIndex = s),
                e.splice(s, 0, { identifier: d, updater: h, references: 1 });
            }
            a.push(d);
          }
          return a;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var i = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < i.length; a++) {
              var s = n(i[a]);
              e[s].references--;
            }
            for (var l = r(t, o), c = 0; c < i.length; c++) {
              var u = n(i[c]);
              0 === e[u].references && (e[u].updater(), e.splice(u, 1));
            }
            i = l;
          };
        };
      },
      659: (t) => {
        'use strict';
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      540: (t) => {
        'use strict';
        t.exports = function (t) {
          var e = document.createElement('style');
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      56: (t, e, n) => {
        'use strict';
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute('nonce', e);
        };
      },
      825: (t) => {
        'use strict';
        t.exports = function (t) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = '';
                n.supports && (r += '@supports ('.concat(n.supports, ') {')),
                  n.media && (r += '@media '.concat(n.media, ' {'));
                var o = void 0 !== n.layer;
                o &&
                  (r += '@layer'.concat(
                    n.layer.length > 0 ? ' '.concat(n.layer) : '',
                    ' {',
                  )),
                  (r += n.css),
                  o && (r += '}'),
                  n.media && (r += '}'),
                  n.supports && (r += '}');
                var i = n.sourceMap;
                i &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      ' */',
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      113: (t) => {
        'use strict';
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      465: function (t) {
        (t.exports = (function () {
          'use strict';
          function t(t, e, n) {
            if ('function' == typeof t ? t === e : t.has(e))
              return arguments.length < 3 ? e : n;
            throw new TypeError(
              'Private element is not present on this object',
            );
          }
          function e(e, n) {
            return e.get(t(e, n));
          }
          function n(t, e, n) {
            (function (t, e) {
              if (e.has(t))
                throw new TypeError(
                  'Cannot initialize the same private elements twice on an object',
                );
            })(t, e),
              e.set(t, n);
          }
          const r = {},
            o = (t) =>
              new Promise((e) => {
                if (!t) return e();
                const n = window.scrollX,
                  o = window.scrollY;
                (r.restoreFocusTimeout = setTimeout(() => {
                  r.previousActiveElement instanceof HTMLElement
                    ? (r.previousActiveElement.focus(),
                      (r.previousActiveElement = null))
                    : document.body && document.body.focus(),
                    e();
                }, 100)),
                  window.scrollTo(n, o);
              }),
            i = 'swal2-',
            a = [
              'container',
              'shown',
              'height-auto',
              'iosfix',
              'popup',
              'modal',
              'no-backdrop',
              'no-transition',
              'toast',
              'toast-shown',
              'show',
              'hide',
              'close',
              'title',
              'html-container',
              'actions',
              'confirm',
              'deny',
              'cancel',
              'default-outline',
              'footer',
              'icon',
              'icon-content',
              'image',
              'input',
              'file',
              'range',
              'select',
              'radio',
              'checkbox',
              'label',
              'textarea',
              'inputerror',
              'input-label',
              'validation-message',
              'progress-steps',
              'active-progress-step',
              'progress-step',
              'progress-step-line',
              'loader',
              'loading',
              'styled',
              'top',
              'top-start',
              'top-end',
              'top-left',
              'top-right',
              'center',
              'center-start',
              'center-end',
              'center-left',
              'center-right',
              'bottom',
              'bottom-start',
              'bottom-end',
              'bottom-left',
              'bottom-right',
              'grow-row',
              'grow-column',
              'grow-fullscreen',
              'rtl',
              'timer-progress-bar',
              'timer-progress-bar-container',
              'scrollbar-measure',
              'icon-success',
              'icon-warning',
              'icon-info',
              'icon-question',
              'icon-error',
              'draggable',
              'dragging',
            ].reduce((t, e) => ((t[e] = i + e), t), {}),
            s = ['success', 'warning', 'info', 'question', 'error'].reduce(
              (t, e) => ((t[e] = i + e), t),
              {},
            ),
            l = 'SweetAlert2:',
            c = (t) => t.charAt(0).toUpperCase() + t.slice(1),
            u = (t) => {
              console.warn(`${l} ${'object' == typeof t ? t.join(' ') : t}`);
            },
            d = (t) => {
              console.error(`${l} ${t}`);
            },
            f = [],
            p = function (t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              var n;
              (n = `"${t}" is deprecated and will be removed in the next major release.${e ? ` Use "${e}" instead.` : ''}`),
                f.includes(n) || (f.push(n), u(n));
            },
            h = (t) => ('function' == typeof t ? t() : t),
            m = (t) => t && 'function' == typeof t.toPromise,
            g = (t) => (m(t) ? t.toPromise() : Promise.resolve(t)),
            v = (t) => t && Promise.resolve(t) === t,
            w = () => document.body.querySelector(`.${a.container}`),
            y = (t) => {
              const e = w();
              return e ? e.querySelector(t) : null;
            },
            b = (t) => y(`.${t}`),
            _ = () => b(a.popup),
            x = () => b(a.icon),
            k = () => b(a.title),
            E = () => b(a['html-container']),
            T = () => b(a.image),
            C = () => b(a['progress-steps']),
            S = () => b(a['validation-message']),
            O = () => y(`.${a.actions} .${a.confirm}`),
            A = () => y(`.${a.actions} .${a.cancel}`),
            P = () => y(`.${a.actions} .${a.deny}`),
            L = () => y(`.${a.loader}`),
            M = () => b(a.actions),
            j = () => b(a.footer),
            B = () => b(a['timer-progress-bar']),
            z = () => b(a.close),
            R = () => {
              const t = _();
              if (!t) return [];
              const e = t.querySelectorAll(
                  '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])',
                ),
                n = Array.from(e).sort((t, e) => {
                  const n = parseInt(t.getAttribute('tabindex') || '0'),
                    r = parseInt(e.getAttribute('tabindex') || '0');
                  return n > r ? 1 : n < r ? -1 : 0;
                }),
                r = t.querySelectorAll(
                  '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n',
                ),
                o = Array.from(r).filter(
                  (t) => '-1' !== t.getAttribute('tabindex'),
                );
              return [...new Set(n.concat(o))].filter((t) => tt(t));
            },
            D = () =>
              F(document.body, a.shown) &&
              !F(document.body, a['toast-shown']) &&
              !F(document.body, a['no-backdrop']),
            I = () => {
              const t = _();
              return !!t && F(t, a.toast);
            },
            N = (t, e) => {
              if (((t.textContent = ''), e)) {
                const n = new DOMParser().parseFromString(e, 'text/html'),
                  r = n.querySelector('head');
                r &&
                  Array.from(r.childNodes).forEach((e) => {
                    t.appendChild(e);
                  });
                const o = n.querySelector('body');
                o &&
                  Array.from(o.childNodes).forEach((e) => {
                    e instanceof HTMLVideoElement ||
                    e instanceof HTMLAudioElement
                      ? t.appendChild(e.cloneNode(!0))
                      : t.appendChild(e);
                  });
              }
            },
            F = (t, e) => {
              if (!e) return !1;
              const n = e.split(/\s+/);
              for (let e = 0; e < n.length; e++)
                if (!t.classList.contains(n[e])) return !1;
              return !0;
            },
            $ = (t, e, n) => {
              if (
                (((t, e) => {
                  Array.from(t.classList).forEach((n) => {
                    Object.values(a).includes(n) ||
                      Object.values(s).includes(n) ||
                      Object.values(e.showClass || {}).includes(n) ||
                      t.classList.remove(n);
                  });
                })(t, e),
                !e.customClass)
              )
                return;
              const r = e.customClass[n];
              r &&
                ('string' == typeof r || r.forEach
                  ? V(t, r)
                  : u(
                      `Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof r}"`,
                    ));
            },
            H = (t, e) => {
              if (!e) return null;
              switch (e) {
                case 'select':
                case 'textarea':
                case 'file':
                  return t.querySelector(`.${a.popup} > .${a[e]}`);
                case 'checkbox':
                  return t.querySelector(`.${a.popup} > .${a.checkbox} input`);
                case 'radio':
                  return (
                    t.querySelector(
                      `.${a.popup} > .${a.radio} input:checked`,
                    ) ||
                    t.querySelector(
                      `.${a.popup} > .${a.radio} input:first-child`,
                    )
                  );
                case 'range':
                  return t.querySelector(`.${a.popup} > .${a.range} input`);
                default:
                  return t.querySelector(`.${a.popup} > .${a.input}`);
              }
            },
            q = (t) => {
              if ((t.focus(), 'file' !== t.type)) {
                const e = t.value;
                (t.value = ''), (t.value = e);
              }
            },
            Y = (t, e, n) => {
              t &&
                e &&
                ('string' == typeof e && (e = e.split(/\s+/).filter(Boolean)),
                e.forEach((e) => {
                  Array.isArray(t)
                    ? t.forEach((t) => {
                        n ? t.classList.add(e) : t.classList.remove(e);
                      })
                    : n
                      ? t.classList.add(e)
                      : t.classList.remove(e);
                }));
            },
            V = (t, e) => {
              Y(t, e, !0);
            },
            X = (t, e) => {
              Y(t, e, !1);
            },
            U = (t, e) => {
              const n = Array.from(t.children);
              for (let t = 0; t < n.length; t++) {
                const r = n[t];
                if (r instanceof HTMLElement && F(r, e)) return r;
              }
            },
            G = (t, e, n) => {
              n === `${parseInt(n)}` && (n = parseInt(n)),
                n || 0 === parseInt(n)
                  ? t.style.setProperty(e, 'number' == typeof n ? `${n}px` : n)
                  : t.style.removeProperty(e);
            },
            W = function (t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 'flex';
              t && (t.style.display = e);
            },
            Z = (t) => {
              t && (t.style.display = 'none');
            },
            K = function (t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 'block';
              t &&
                new MutationObserver(() => {
                  J(t, t.innerHTML, e);
                }).observe(t, { childList: !0, subtree: !0 });
            },
            Q = (t, e, n, r) => {
              const o = t.querySelector(e);
              o && o.style.setProperty(n, r);
            },
            J = function (t, e) {
              e
                ? W(
                    t,
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 'flex',
                  )
                : Z(t);
            },
            tt = (t) =>
              !(
                !t ||
                !(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
              ),
            et = (t) => !!(t.scrollHeight > t.clientHeight),
            nt = (t) => {
              const e = window.getComputedStyle(t),
                n = parseFloat(e.getPropertyValue('animation-duration') || '0'),
                r = parseFloat(
                  e.getPropertyValue('transition-duration') || '0',
                );
              return n > 0 || r > 0;
            },
            rt = function (t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              const n = B();
              n &&
                tt(n) &&
                (e && ((n.style.transition = 'none'), (n.style.width = '100%')),
                setTimeout(() => {
                  (n.style.transition = `width ${t / 1e3}s linear`),
                    (n.style.width = '0%');
                }, 10));
            },
            ot =
              `\n <div aria-labelledby="${a.title}" aria-describedby="${a['html-container']}" class="${a.popup}" tabindex="-1">\n   <button type="button" class="${a.close}"></button>\n   <ul class="${a['progress-steps']}"></ul>\n   <div class="${a.icon}"></div>\n   <img class="${a.image}" />\n   <h2 class="${a.title}" id="${a.title}"></h2>\n   <div class="${a['html-container']}" id="${a['html-container']}"></div>\n   <input class="${a.input}" id="${a.input}" />\n   <input type="file" class="${a.file}" />\n   <div class="${a.range}">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="${a.select}" id="${a.select}"></select>\n   <div class="${a.radio}"></div>\n   <label class="${a.checkbox}">\n     <input type="checkbox" id="${a.checkbox}" />\n     <span class="${a.label}"></span>\n   </label>\n   <textarea class="${a.textarea}" id="${a.textarea}"></textarea>\n   <div class="${a['validation-message']}" id="${a['validation-message']}"></div>\n   <div class="${a.actions}">\n     <div class="${a.loader}"></div>\n     <button type="button" class="${a.confirm}"></button>\n     <button type="button" class="${a.deny}"></button>\n     <button type="button" class="${a.cancel}"></button>\n   </div>\n   <div class="${a.footer}"></div>\n   <div class="${a['timer-progress-bar-container']}">\n     <div class="${a['timer-progress-bar']}"></div>\n   </div>\n </div>\n`.replace(
                /(^|\n)\s*/g,
                '',
              ),
            it = () => {
              r.currentInstance.resetValidationMessage();
            },
            at = (t) => {
              const e = (() => {
                const t = w();
                return (
                  !!t &&
                  (t.remove(),
                  X(
                    [document.documentElement, document.body],
                    [a['no-backdrop'], a['toast-shown'], a['has-column']],
                  ),
                  !0)
                );
              })();
              if (
                'undefined' == typeof window ||
                'undefined' == typeof document
              )
                return void d('SweetAlert2 requires document to initialize');
              const n = document.createElement('div');
              (n.className = a.container),
                e && V(n, a['no-transition']),
                N(n, ot);
              const r =
                'string' == typeof (o = t.target)
                  ? document.querySelector(o)
                  : o;
              var o;
              r.appendChild(n),
                ((t) => {
                  const e = _();
                  e.setAttribute('role', t.toast ? 'alert' : 'dialog'),
                    e.setAttribute(
                      'aria-live',
                      t.toast ? 'polite' : 'assertive',
                    ),
                    t.toast || e.setAttribute('aria-modal', 'true');
                })(t),
                ((t) => {
                  'rtl' === window.getComputedStyle(t).direction &&
                    V(w(), a.rtl);
                })(r),
                (() => {
                  const t = _(),
                    e = U(t, a.input),
                    n = U(t, a.file),
                    r = t.querySelector(`.${a.range} input`),
                    o = t.querySelector(`.${a.range} output`),
                    i = U(t, a.select),
                    s = t.querySelector(`.${a.checkbox} input`),
                    l = U(t, a.textarea);
                  (e.oninput = it),
                    (n.onchange = it),
                    (i.onchange = it),
                    (s.onchange = it),
                    (l.oninput = it),
                    (r.oninput = () => {
                      it(), (o.value = r.value);
                    }),
                    (r.onchange = () => {
                      it(), (o.value = r.value);
                    });
                })();
            },
            st = (t, e) => {
              t instanceof HTMLElement
                ? e.appendChild(t)
                : 'object' == typeof t
                  ? lt(t, e)
                  : t && N(e, t);
            },
            lt = (t, e) => {
              t.jquery ? ct(e, t) : N(e, t.toString());
            },
            ct = (t, e) => {
              if (((t.textContent = ''), 0 in e))
                for (let n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
              else t.appendChild(e.cloneNode(!0));
            },
            ut = (t, e) => {
              const n = M(),
                r = L();
              n &&
                r &&
                (e.showConfirmButton || e.showDenyButton || e.showCancelButton
                  ? W(n)
                  : Z(n),
                $(n, e, 'actions'),
                (function (t, e, n) {
                  const r = O(),
                    o = P(),
                    i = A();
                  r &&
                    o &&
                    i &&
                    (dt(r, 'confirm', n),
                    dt(o, 'deny', n),
                    dt(i, 'cancel', n),
                    (function (t, e, n, r) {
                      r.buttonsStyling
                        ? (V([t, e, n], a.styled),
                          r.confirmButtonColor &&
                            ((t.style.backgroundColor = r.confirmButtonColor),
                            V(t, a['default-outline'])),
                          r.denyButtonColor &&
                            ((e.style.backgroundColor = r.denyButtonColor),
                            V(e, a['default-outline'])),
                          r.cancelButtonColor &&
                            ((n.style.backgroundColor = r.cancelButtonColor),
                            V(n, a['default-outline'])))
                        : X([t, e, n], a.styled);
                    })(r, o, i, n),
                    n.reverseButtons &&
                      (n.toast
                        ? (t.insertBefore(i, r), t.insertBefore(o, r))
                        : (t.insertBefore(i, e),
                          t.insertBefore(o, e),
                          t.insertBefore(r, e))));
                })(n, r, e),
                N(r, e.loaderHtml || ''),
                $(r, e, 'loader'));
            };
          function dt(t, e, n) {
            const r = c(e);
            J(t, n[`show${r}Button`], 'inline-block'),
              N(t, n[`${e}ButtonText`] || ''),
              t.setAttribute('aria-label', n[`${e}ButtonAriaLabel`] || ''),
              (t.className = a[e]),
              $(t, n, `${e}Button`);
          }
          const ft = (t, e) => {
            const n = w();
            n &&
              ((function (t, e) {
                'string' == typeof e
                  ? (t.style.background = e)
                  : e ||
                    V(
                      [document.documentElement, document.body],
                      a['no-backdrop'],
                    );
              })(n, e.backdrop),
              (function (t, e) {
                e &&
                  (e in a
                    ? V(t, a[e])
                    : (u(
                        'The "position" parameter is not valid, defaulting to "center"',
                      ),
                      V(t, a.center)));
              })(n, e.position),
              (function (t, e) {
                e && V(t, a[`grow-${e}`]);
              })(n, e.grow),
              $(n, e, 'container'));
          };
          var pt = { innerParams: new WeakMap(), domCache: new WeakMap() };
          const ht = [
              'input',
              'file',
              'range',
              'select',
              'radio',
              'checkbox',
              'textarea',
            ],
            mt = (t) => {
              if (!t.input) return;
              if (!xt[t.input])
                return void d(
                  `Unexpected type of input! Expected ${Object.keys(xt).join(' | ')}, got "${t.input}"`,
                );
              const e = bt(t.input);
              if (!e) return;
              const n = xt[t.input](e, t);
              W(e),
                t.inputAutoFocus &&
                  setTimeout(() => {
                    q(n);
                  });
            },
            gt = (t, e) => {
              const n = _();
              if (!n) return;
              const r = H(n, t);
              if (r) {
                ((t) => {
                  for (let e = 0; e < t.attributes.length; e++) {
                    const n = t.attributes[e].name;
                    ['id', 'type', 'value', 'style'].includes(n) ||
                      t.removeAttribute(n);
                  }
                })(r);
                for (const t in e) r.setAttribute(t, e[t]);
              }
            },
            vt = (t) => {
              if (!t.input) return;
              const e = bt(t.input);
              e && $(e, t, 'input');
            },
            wt = (t, e) => {
              !t.placeholder &&
                e.inputPlaceholder &&
                (t.placeholder = e.inputPlaceholder);
            },
            yt = (t, e, n) => {
              if (n.inputLabel) {
                const r = document.createElement('label'),
                  o = a['input-label'];
                r.setAttribute('for', t.id),
                  (r.className = o),
                  'object' == typeof n.customClass &&
                    V(r, n.customClass.inputLabel),
                  (r.innerText = n.inputLabel),
                  e.insertAdjacentElement('beforebegin', r);
              }
            },
            bt = (t) => {
              const e = _();
              if (e) return U(e, a[t] || a.input);
            },
            _t = (t, e) => {
              ['string', 'number'].includes(typeof e)
                ? (t.value = `${e}`)
                : v(e) ||
                  u(
                    `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`,
                  );
            },
            xt = {};
          (xt.text =
            xt.email =
            xt.password =
            xt.number =
            xt.tel =
            xt.url =
            xt.search =
            xt.date =
            xt['datetime-local'] =
            xt.time =
            xt.week =
            xt.month =
              (t, e) => (
                _t(t, e.inputValue),
                yt(t, t, e),
                wt(t, e),
                (t.type = e.input),
                t
              )),
            (xt.file = (t, e) => (yt(t, t, e), wt(t, e), t)),
            (xt.range = (t, e) => {
              const n = t.querySelector('input'),
                r = t.querySelector('output');
              return (
                _t(n, e.inputValue),
                (n.type = e.input),
                _t(r, e.inputValue),
                yt(n, t, e),
                t
              );
            }),
            (xt.select = (t, e) => {
              if (((t.textContent = ''), e.inputPlaceholder)) {
                const n = document.createElement('option');
                N(n, e.inputPlaceholder),
                  (n.value = ''),
                  (n.disabled = !0),
                  (n.selected = !0),
                  t.appendChild(n);
              }
              return yt(t, t, e), t;
            }),
            (xt.radio = (t) => ((t.textContent = ''), t)),
            (xt.checkbox = (t, e) => {
              const n = H(_(), 'checkbox');
              (n.value = '1'), (n.checked = Boolean(e.inputValue));
              const r = t.querySelector('span');
              return N(r, e.inputPlaceholder || e.inputLabel), n;
            }),
            (xt.textarea = (t, e) => {
              _t(t, e.inputValue), wt(t, e), yt(t, t, e);
              return (
                setTimeout(() => {
                  if ('MutationObserver' in window) {
                    const n = parseInt(window.getComputedStyle(_()).width);
                    new MutationObserver(() => {
                      if (!document.body.contains(t)) return;
                      const r =
                        t.offsetWidth +
                        ((o = t),
                        parseInt(window.getComputedStyle(o).marginLeft) +
                          parseInt(window.getComputedStyle(o).marginRight));
                      var o;
                      r > n
                        ? (_().style.width = `${r}px`)
                        : G(_(), 'width', e.width);
                    }).observe(t, {
                      attributes: !0,
                      attributeFilter: ['style'],
                    });
                  }
                }),
                t
              );
            });
          const kt = (t, e) => {
              const n = E();
              n &&
                (K(n),
                $(n, e, 'htmlContainer'),
                e.html
                  ? (st(e.html, n), W(n, 'block'))
                  : e.text
                    ? ((n.textContent = e.text), W(n, 'block'))
                    : Z(n),
                ((t, e) => {
                  const n = _();
                  if (!n) return;
                  const r = pt.innerParams.get(t),
                    o = !r || e.input !== r.input;
                  ht.forEach((t) => {
                    const r = U(n, a[t]);
                    r &&
                      (gt(t, e.inputAttributes),
                      (r.className = a[t]),
                      o && Z(r));
                  }),
                    e.input && (o && mt(e), vt(e));
                })(t, e));
            },
            Et = (t, e) => {
              for (const [n, r] of Object.entries(s)) e.icon !== n && X(t, r);
              V(t, e.icon && s[e.icon]), St(t, e), Tt(), $(t, e, 'icon');
            },
            Tt = () => {
              const t = _();
              if (!t) return;
              const e = window
                  .getComputedStyle(t)
                  .getPropertyValue('background-color'),
                n = t.querySelectorAll(
                  '[class^=swal2-success-circular-line], .swal2-success-fix',
                );
              for (let t = 0; t < n.length; t++) n[t].style.backgroundColor = e;
            },
            Ct = (t, e) => {
              if (!e.icon && !e.iconHtml) return;
              let n = t.innerHTML,
                r = '';
              e.iconHtml
                ? (r = Ot(e.iconHtml))
                : 'success' === e.icon
                  ? ((r =
                      '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n'),
                    (n = n.replace(/ style=".*?"/g, '')))
                  : 'error' === e.icon
                    ? (r =
                        '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n')
                    : e.icon &&
                      (r = Ot(
                        { question: '?', warning: '!', info: 'i' }[e.icon],
                      )),
                n.trim() !== r.trim() && N(t, r);
            },
            St = (t, e) => {
              if (e.iconColor) {
                (t.style.color = e.iconColor),
                  (t.style.borderColor = e.iconColor);
                for (const n of [
                  '.swal2-success-line-tip',
                  '.swal2-success-line-long',
                  '.swal2-x-mark-line-left',
                  '.swal2-x-mark-line-right',
                ])
                  Q(t, n, 'background-color', e.iconColor);
                Q(t, '.swal2-success-ring', 'border-color', e.iconColor);
              }
            },
            Ot = (t) => `<div class="${a['icon-content']}">${t}</div>`;
          let At = !1,
            Pt = 0,
            Lt = 0,
            Mt = 0,
            jt = 0;
          const Bt = (t) => {
              const e = _();
              if (t.target === e || x().contains(t.target)) {
                At = !0;
                const n = Dt(t);
                (Pt = n.clientX),
                  (Lt = n.clientY),
                  (Mt = parseInt(e.style.insetInlineStart) || 0),
                  (jt = parseInt(e.style.insetBlockStart) || 0),
                  V(e, 'swal2-dragging');
              }
            },
            zt = (t) => {
              const e = _();
              if (At) {
                let { clientX: n, clientY: r } = Dt(t);
                (e.style.insetInlineStart = `${Mt + (n - Pt)}px`),
                  (e.style.insetBlockStart = `${jt + (r - Lt)}px`);
              }
            },
            Rt = () => {
              const t = _();
              (At = !1), X(t, 'swal2-dragging');
            },
            Dt = (t) => {
              let e = 0,
                n = 0;
              return (
                t.type.startsWith('mouse')
                  ? ((e = t.clientX), (n = t.clientY))
                  : t.type.startsWith('touch') &&
                    ((e = t.touches[0].clientX), (n = t.touches[0].clientY)),
                { clientX: e, clientY: n }
              );
            },
            It = (t, e) => {
              const n = w(),
                r = _();
              if (n && r) {
                if (e.toast) {
                  G(n, 'width', e.width), (r.style.width = '100%');
                  const t = L();
                  t && r.insertBefore(t, x());
                } else G(r, 'width', e.width);
                G(r, 'padding', e.padding),
                  e.color && (r.style.color = e.color),
                  e.background && (r.style.background = e.background),
                  Z(S()),
                  Nt(r, e),
                  e.draggable && !e.toast
                    ? (V(r, a.draggable),
                      ((t) => {
                        t.addEventListener('mousedown', Bt),
                          document.body.addEventListener('mousemove', zt),
                          t.addEventListener('mouseup', Rt),
                          t.addEventListener('touchstart', Bt),
                          document.body.addEventListener('touchmove', zt),
                          t.addEventListener('touchend', Rt);
                      })(r))
                    : (X(r, a.draggable),
                      ((t) => {
                        t.removeEventListener('mousedown', Bt),
                          document.body.removeEventListener('mousemove', zt),
                          t.removeEventListener('mouseup', Rt),
                          t.removeEventListener('touchstart', Bt),
                          document.body.removeEventListener('touchmove', zt),
                          t.removeEventListener('touchend', Rt);
                      })(r));
              }
            },
            Nt = (t, e) => {
              const n = e.showClass || {};
              (t.className = `${a.popup} ${tt(t) ? n.popup : ''}`),
                e.toast
                  ? (V(
                      [document.documentElement, document.body],
                      a['toast-shown'],
                    ),
                    V(t, a.toast))
                  : V(t, a.modal),
                $(t, e, 'popup'),
                'string' == typeof e.customClass && V(t, e.customClass),
                e.icon && V(t, a[`icon-${e.icon}`]);
            },
            Ft = (t) => {
              const e = document.createElement('li');
              return V(e, a['progress-step']), N(e, t), e;
            },
            $t = (t) => {
              const e = document.createElement('li');
              return (
                V(e, a['progress-step-line']),
                t.progressStepsDistance &&
                  G(e, 'width', t.progressStepsDistance),
                e
              );
            },
            Ht = (t, e) => {
              It(0, e),
                ft(0, e),
                ((t, e) => {
                  const n = C();
                  if (!n) return;
                  const { progressSteps: r, currentProgressStep: o } = e;
                  r && 0 !== r.length && void 0 !== o
                    ? (W(n),
                      (n.textContent = ''),
                      o >= r.length &&
                        u(
                          'Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)',
                        ),
                      r.forEach((t, i) => {
                        const s = Ft(t);
                        if (
                          (n.appendChild(s),
                          i === o && V(s, a['active-progress-step']),
                          i !== r.length - 1)
                        ) {
                          const t = $t(e);
                          n.appendChild(t);
                        }
                      }))
                    : Z(n);
                })(0, e),
                ((t, e) => {
                  const n = pt.innerParams.get(t),
                    r = x();
                  if (r) {
                    if (n && e.icon === n.icon) return Ct(r, e), void Et(r, e);
                    if (e.icon || e.iconHtml) {
                      if (e.icon && -1 === Object.keys(s).indexOf(e.icon))
                        return (
                          d(
                            `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`,
                          ),
                          void Z(r)
                        );
                      W(r),
                        Ct(r, e),
                        Et(r, e),
                        V(r, e.showClass && e.showClass.icon);
                    } else Z(r);
                  }
                })(t, e),
                ((t, e) => {
                  const n = T();
                  n &&
                    (e.imageUrl
                      ? (W(n, ''),
                        n.setAttribute('src', e.imageUrl),
                        n.setAttribute('alt', e.imageAlt || ''),
                        G(n, 'width', e.imageWidth),
                        G(n, 'height', e.imageHeight),
                        (n.className = a.image),
                        $(n, e, 'image'))
                      : Z(n));
                })(0, e),
                ((t, e) => {
                  const n = k();
                  n &&
                    (K(n),
                    J(n, e.title || e.titleText, 'block'),
                    e.title && st(e.title, n),
                    e.titleText && (n.innerText = e.titleText),
                    $(n, e, 'title'));
                })(0, e),
                ((t, e) => {
                  const n = z();
                  n &&
                    (N(n, e.closeButtonHtml || ''),
                    $(n, e, 'closeButton'),
                    J(n, e.showCloseButton),
                    n.setAttribute('aria-label', e.closeButtonAriaLabel || ''));
                })(0, e),
                kt(t, e),
                ut(0, e),
                ((t, e) => {
                  const n = j();
                  n &&
                    (K(n),
                    J(n, e.footer, 'block'),
                    e.footer && st(e.footer, n),
                    $(n, e, 'footer'));
                })(0, e);
              const n = _();
              'function' == typeof e.didRender && n && e.didRender(n),
                r.eventEmitter.emit('didRender', n);
            },
            qt = () => {
              var t;
              return null === (t = O()) || void 0 === t ? void 0 : t.click();
            },
            Yt = Object.freeze({
              cancel: 'cancel',
              backdrop: 'backdrop',
              close: 'close',
              esc: 'esc',
              timer: 'timer',
            }),
            Vt = (t) => {
              t.keydownTarget &&
                t.keydownHandlerAdded &&
                (t.keydownTarget.removeEventListener(
                  'keydown',
                  t.keydownHandler,
                  { capture: t.keydownListenerCapture },
                ),
                (t.keydownHandlerAdded = !1));
            },
            Xt = (t, e) => {
              var n;
              const r = R();
              if (r.length)
                return (
                  (t += e) === r.length
                    ? (t = 0)
                    : -1 === t && (t = r.length - 1),
                  void r[t].focus()
                );
              null === (n = _()) || void 0 === n || n.focus();
            },
            Ut = ['ArrowRight', 'ArrowDown'],
            Gt = ['ArrowLeft', 'ArrowUp'],
            Wt = (t, e, n) => {
              t &&
                (e.isComposing ||
                  229 === e.keyCode ||
                  (t.stopKeydownPropagation && e.stopPropagation(),
                  'Enter' === e.key
                    ? Zt(e, t)
                    : 'Tab' === e.key
                      ? Kt(e)
                      : [...Ut, ...Gt].includes(e.key)
                        ? Qt(e.key)
                        : 'Escape' === e.key && Jt(e, t, n)));
            },
            Zt = (t, e) => {
              if (!h(e.allowEnterKey)) return;
              const n = H(_(), e.input);
              if (
                t.target &&
                n &&
                t.target instanceof HTMLElement &&
                t.target.outerHTML === n.outerHTML
              ) {
                if (['textarea', 'file'].includes(e.input)) return;
                qt(), t.preventDefault();
              }
            },
            Kt = (t) => {
              const e = t.target,
                n = R();
              let r = -1;
              for (let t = 0; t < n.length; t++)
                if (e === n[t]) {
                  r = t;
                  break;
                }
              t.shiftKey ? Xt(r, -1) : Xt(r, 1),
                t.stopPropagation(),
                t.preventDefault();
            },
            Qt = (t) => {
              const e = M(),
                n = O(),
                r = P(),
                o = A();
              if (!(e && n && r && o)) return;
              const i = [n, r, o];
              if (
                document.activeElement instanceof HTMLElement &&
                !i.includes(document.activeElement)
              )
                return;
              const a = Ut.includes(t)
                ? 'nextElementSibling'
                : 'previousElementSibling';
              let s = document.activeElement;
              if (s) {
                for (let t = 0; t < e.children.length; t++) {
                  if (((s = s[a]), !s)) return;
                  if (s instanceof HTMLButtonElement && tt(s)) break;
                }
                s instanceof HTMLButtonElement && s.focus();
              }
            },
            Jt = (t, e, n) => {
              h(e.allowEscapeKey) && (t.preventDefault(), n(Yt.esc));
            };
          var te = {
            swalPromiseResolve: new WeakMap(),
            swalPromiseReject: new WeakMap(),
          };
          const ee = () => {
              Array.from(document.body.children).forEach((t) => {
                t.hasAttribute('data-previous-aria-hidden')
                  ? (t.setAttribute(
                      'aria-hidden',
                      t.getAttribute('data-previous-aria-hidden') || '',
                    ),
                    t.removeAttribute('data-previous-aria-hidden'))
                  : t.removeAttribute('aria-hidden');
              });
            },
            ne = 'undefined' != typeof window && !!window.GestureEvent,
            re = () => {
              const t = w();
              if (!t) return;
              let e;
              (t.ontouchstart = (t) => {
                e = oe(t);
              }),
                (t.ontouchmove = (t) => {
                  e && (t.preventDefault(), t.stopPropagation());
                });
            },
            oe = (t) => {
              const e = t.target,
                n = w(),
                r = E();
              return !(
                !n ||
                !r ||
                ie(t) ||
                ae(t) ||
                (e !== n &&
                  (et(n) ||
                    !(e instanceof HTMLElement) ||
                    'INPUT' === e.tagName ||
                    'TEXTAREA' === e.tagName ||
                    (et(r) && r.contains(e))))
              );
            },
            ie = (t) =>
              t.touches &&
              t.touches.length &&
              'stylus' === t.touches[0].touchType,
            ae = (t) => t.touches && t.touches.length > 1;
          let se = null;
          const le = (t) => {
            null === se &&
              (document.body.scrollHeight > window.innerHeight ||
                'scroll' === t) &&
              ((se = parseInt(
                window
                  .getComputedStyle(document.body)
                  .getPropertyValue('padding-right'),
              )),
              (document.body.style.paddingRight = `${
                se +
                (() => {
                  const t = document.createElement('div');
                  (t.className = a['scrollbar-measure']),
                    document.body.appendChild(t);
                  const e = t.getBoundingClientRect().width - t.clientWidth;
                  return document.body.removeChild(t), e;
                })()
              }px`));
          };
          function ce(t, e, n, i) {
            I() ? ve(t, i) : (o(n).then(() => ve(t, i)), Vt(r)),
              ne
                ? (e.setAttribute('style', 'display:none !important'),
                  e.removeAttribute('class'),
                  (e.innerHTML = ''))
                : e.remove(),
              D() &&
                (null !== se &&
                  ((document.body.style.paddingRight = `${se}px`), (se = null)),
                (() => {
                  if (F(document.body, a.iosfix)) {
                    const t = parseInt(document.body.style.top, 10);
                    X(document.body, a.iosfix),
                      (document.body.style.top = ''),
                      (document.body.scrollTop = -1 * t);
                  }
                })(),
                ee()),
              X(
                [document.documentElement, document.body],
                [a.shown, a['height-auto'], a['no-backdrop'], a['toast-shown']],
              );
          }
          function ue(t) {
            t = he(t);
            const e = te.swalPromiseResolve.get(this),
              n = de(this);
            this.isAwaitingPromise
              ? t.isDismissed || (pe(this), e(t))
              : n && e(t);
          }
          const de = (t) => {
            const e = _();
            if (!e) return !1;
            const n = pt.innerParams.get(t);
            if (!n || F(e, n.hideClass.popup)) return !1;
            X(e, n.showClass.popup), V(e, n.hideClass.popup);
            const r = w();
            return (
              X(r, n.showClass.backdrop),
              V(r, n.hideClass.backdrop),
              me(t, e, n),
              !0
            );
          };
          function fe(t) {
            const e = te.swalPromiseReject.get(this);
            pe(this), e && e(t);
          }
          const pe = (t) => {
              t.isAwaitingPromise &&
                (delete t.isAwaitingPromise,
                pt.innerParams.get(t) || t._destroy());
            },
            he = (t) =>
              void 0 === t
                ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
                : Object.assign(
                    { isConfirmed: !1, isDenied: !1, isDismissed: !1 },
                    t,
                  ),
            me = (t, e, n) => {
              var o;
              const i = w(),
                a = nt(e);
              'function' == typeof n.willClose && n.willClose(e),
                null === (o = r.eventEmitter) ||
                  void 0 === o ||
                  o.emit('willClose', e),
                a
                  ? ge(t, e, i, n.returnFocus, n.didClose)
                  : ce(t, i, n.returnFocus, n.didClose);
            },
            ge = (t, e, n, o, i) => {
              r.swalCloseEventFinishedCallback = ce.bind(null, t, n, o, i);
              const a = function (t) {
                var n;
                t.target === e &&
                  (null === (n = r.swalCloseEventFinishedCallback) ||
                    void 0 === n ||
                    n.call(r),
                  delete r.swalCloseEventFinishedCallback,
                  e.removeEventListener('animationend', a),
                  e.removeEventListener('transitionend', a));
              };
              e.addEventListener('animationend', a),
                e.addEventListener('transitionend', a);
            },
            ve = (t, e) => {
              setTimeout(() => {
                var n;
                'function' == typeof e && e.bind(t.params)(),
                  null === (n = r.eventEmitter) ||
                    void 0 === n ||
                    n.emit('didClose'),
                  t._destroy && t._destroy();
              });
            },
            we = (t) => {
              let e = _();
              if ((e || new Kn(), (e = _()), !e)) return;
              const n = L();
              I() ? Z(x()) : ye(e, t),
                W(n),
                e.setAttribute('data-loading', 'true'),
                e.setAttribute('aria-busy', 'true'),
                e.focus();
            },
            ye = (t, e) => {
              const n = M(),
                r = L();
              n &&
                r &&
                (!e && tt(O()) && (e = O()),
                W(n),
                e &&
                  (Z(e),
                  r.setAttribute('data-button-to-replace', e.className),
                  n.insertBefore(r, e)),
                V([t, n], a.loading));
            },
            be = (t) => (t.checked ? 1 : 0),
            _e = (t) => (t.checked ? t.value : null),
            xe = (t) =>
              t.files && t.files.length
                ? null !== t.getAttribute('multiple')
                  ? t.files
                  : t.files[0]
                : null,
            ke = (t, e) => {
              const n = _();
              if (!n) return;
              const r = (t) => {
                'select' === e.input
                  ? (function (t, e, n) {
                      const r = U(t, a.select);
                      if (!r) return;
                      const o = (t, e, r) => {
                        const o = document.createElement('option');
                        (o.value = r),
                          N(o, e),
                          (o.selected = Ce(r, n.inputValue)),
                          t.appendChild(o);
                      };
                      e.forEach((t) => {
                        const e = t[0],
                          n = t[1];
                        if (Array.isArray(n)) {
                          const t = document.createElement('optgroup');
                          (t.label = e),
                            (t.disabled = !1),
                            r.appendChild(t),
                            n.forEach((e) => o(t, e[1], e[0]));
                        } else o(r, n, e);
                      }),
                        r.focus();
                    })(n, Te(t), e)
                  : 'radio' === e.input &&
                    (function (t, e, n) {
                      const r = U(t, a.radio);
                      if (!r) return;
                      e.forEach((t) => {
                        const e = t[0],
                          o = t[1],
                          i = document.createElement('input'),
                          s = document.createElement('label');
                        (i.type = 'radio'),
                          (i.name = a.radio),
                          (i.value = e),
                          Ce(e, n.inputValue) && (i.checked = !0);
                        const l = document.createElement('span');
                        N(l, o),
                          (l.className = a.label),
                          s.appendChild(i),
                          s.appendChild(l),
                          r.appendChild(s);
                      });
                      const o = r.querySelectorAll('input');
                      o.length && o[0].focus();
                    })(n, Te(t), e);
              };
              m(e.inputOptions) || v(e.inputOptions)
                ? (we(O()),
                  g(e.inputOptions).then((e) => {
                    t.hideLoading(), r(e);
                  }))
                : 'object' == typeof e.inputOptions
                  ? r(e.inputOptions)
                  : d(
                      'Unexpected type of inputOptions! Expected object, Map or Promise, got ' +
                        typeof e.inputOptions,
                    );
            },
            Ee = (t, e) => {
              const n = t.getInput();
              n &&
                (Z(n),
                g(e.inputValue)
                  .then((r) => {
                    (n.value =
                      'number' === e.input ? `${parseFloat(r) || 0}` : `${r}`),
                      W(n),
                      n.focus(),
                      t.hideLoading();
                  })
                  .catch((e) => {
                    d(`Error in inputValue promise: ${e}`),
                      (n.value = ''),
                      W(n),
                      n.focus(),
                      t.hideLoading();
                  }));
            };
          const Te = (t) => {
              const e = [];
              return (
                t instanceof Map
                  ? t.forEach((t, n) => {
                      let r = t;
                      'object' == typeof r && (r = Te(r)), e.push([n, r]);
                    })
                  : Object.keys(t).forEach((n) => {
                      let r = t[n];
                      'object' == typeof r && (r = Te(r)), e.push([n, r]);
                    }),
                e
              );
            },
            Ce = (t, e) => !!e && e.toString() === t.toString(),
            Se = (t, e) => {
              const n = pt.innerParams.get(t);
              if (!n.input)
                return void d(
                  `The "input" parameter is needed to be set when using returnInputValueOn${c(e)}`,
                );
              const r = t.getInput(),
                o = ((t, e) => {
                  const n = t.getInput();
                  if (!n) return null;
                  switch (e.input) {
                    case 'checkbox':
                      return be(n);
                    case 'radio':
                      return _e(n);
                    case 'file':
                      return xe(n);
                    default:
                      return e.inputAutoTrim ? n.value.trim() : n.value;
                  }
                })(t, n);
              n.inputValidator
                ? Oe(t, o, e)
                : r && !r.checkValidity()
                  ? (t.enableButtons(),
                    t.showValidationMessage(
                      n.validationMessage || r.validationMessage,
                    ))
                  : 'deny' === e
                    ? Ae(t, o)
                    : Me(t, o);
            },
            Oe = (t, e, n) => {
              const r = pt.innerParams.get(t);
              t.disableInput(),
                Promise.resolve()
                  .then(() => g(r.inputValidator(e, r.validationMessage)))
                  .then((r) => {
                    t.enableButtons(),
                      t.enableInput(),
                      r
                        ? t.showValidationMessage(r)
                        : 'deny' === n
                          ? Ae(t, e)
                          : Me(t, e);
                  });
            },
            Ae = (t, e) => {
              const n = pt.innerParams.get(t || void 0);
              n.showLoaderOnDeny && we(P()),
                n.preDeny
                  ? ((t.isAwaitingPromise = !0),
                    Promise.resolve()
                      .then(() => g(n.preDeny(e, n.validationMessage)))
                      .then((n) => {
                        !1 === n
                          ? (t.hideLoading(), pe(t))
                          : t.close({
                              isDenied: !0,
                              value: void 0 === n ? e : n,
                            });
                      })
                      .catch((e) => Le(t || void 0, e)))
                  : t.close({ isDenied: !0, value: e });
            },
            Pe = (t, e) => {
              t.close({ isConfirmed: !0, value: e });
            },
            Le = (t, e) => {
              t.rejectPromise(e);
            },
            Me = (t, e) => {
              const n = pt.innerParams.get(t || void 0);
              n.showLoaderOnConfirm && we(),
                n.preConfirm
                  ? (t.resetValidationMessage(),
                    (t.isAwaitingPromise = !0),
                    Promise.resolve()
                      .then(() => g(n.preConfirm(e, n.validationMessage)))
                      .then((n) => {
                        tt(S()) || !1 === n
                          ? (t.hideLoading(), pe(t))
                          : Pe(t, void 0 === n ? e : n);
                      })
                      .catch((e) => Le(t || void 0, e)))
                  : Pe(t, e);
            };
          function je() {
            const t = pt.innerParams.get(this);
            if (!t) return;
            const e = pt.domCache.get(this);
            Z(e.loader),
              I() ? t.icon && W(x()) : Be(e),
              X([e.popup, e.actions], a.loading),
              e.popup.removeAttribute('aria-busy'),
              e.popup.removeAttribute('data-loading'),
              (e.confirmButton.disabled = !1),
              (e.denyButton.disabled = !1),
              (e.cancelButton.disabled = !1);
          }
          const Be = (t) => {
            const e = t.popup.getElementsByClassName(
              t.loader.getAttribute('data-button-to-replace'),
            );
            e.length
              ? W(e[0], 'inline-block')
              : !tt(O()) && !tt(P()) && !tt(A()) && Z(t.actions);
          };
          function ze() {
            const t = pt.innerParams.get(this),
              e = pt.domCache.get(this);
            return e ? H(e.popup, t.input) : null;
          }
          function Re(t, e, n) {
            const r = pt.domCache.get(t);
            e.forEach((t) => {
              r[t].disabled = n;
            });
          }
          function De(t, e) {
            const n = _();
            if (n && t)
              if ('radio' === t.type) {
                const t = n.querySelectorAll(`[name="${a.radio}"]`);
                for (let n = 0; n < t.length; n++) t[n].disabled = e;
              } else t.disabled = e;
          }
          function Ie() {
            Re(this, ['confirmButton', 'denyButton', 'cancelButton'], !1);
          }
          function Ne() {
            Re(this, ['confirmButton', 'denyButton', 'cancelButton'], !0);
          }
          function Fe() {
            De(this.getInput(), !1);
          }
          function $e() {
            De(this.getInput(), !0);
          }
          function He(t) {
            const e = pt.domCache.get(this),
              n = pt.innerParams.get(this);
            N(e.validationMessage, t),
              (e.validationMessage.className = a['validation-message']),
              n.customClass &&
                n.customClass.validationMessage &&
                V(e.validationMessage, n.customClass.validationMessage),
              W(e.validationMessage);
            const r = this.getInput();
            r &&
              (r.setAttribute('aria-invalid', 'true'),
              r.setAttribute('aria-describedby', a['validation-message']),
              q(r),
              V(r, a.inputerror));
          }
          function qe() {
            const t = pt.domCache.get(this);
            t.validationMessage && Z(t.validationMessage);
            const e = this.getInput();
            e &&
              (e.removeAttribute('aria-invalid'),
              e.removeAttribute('aria-describedby'),
              X(e, a.inputerror));
          }
          const Ye = {
              title: '',
              titleText: '',
              text: '',
              html: '',
              footer: '',
              icon: void 0,
              iconColor: void 0,
              iconHtml: void 0,
              template: void 0,
              toast: !1,
              draggable: !1,
              animation: !0,
              showClass: {
                popup: 'swal2-show',
                backdrop: 'swal2-backdrop-show',
                icon: 'swal2-icon-show',
              },
              hideClass: {
                popup: 'swal2-hide',
                backdrop: 'swal2-backdrop-hide',
                icon: 'swal2-icon-hide',
              },
              customClass: {},
              target: 'body',
              color: void 0,
              backdrop: !0,
              heightAuto: !0,
              allowOutsideClick: !0,
              allowEscapeKey: !0,
              allowEnterKey: !0,
              stopKeydownPropagation: !0,
              keydownListenerCapture: !1,
              showConfirmButton: !0,
              showDenyButton: !1,
              showCancelButton: !1,
              preConfirm: void 0,
              preDeny: void 0,
              confirmButtonText: 'OK',
              confirmButtonAriaLabel: '',
              confirmButtonColor: void 0,
              denyButtonText: 'No',
              denyButtonAriaLabel: '',
              denyButtonColor: void 0,
              cancelButtonText: 'Cancel',
              cancelButtonAriaLabel: '',
              cancelButtonColor: void 0,
              buttonsStyling: !0,
              reverseButtons: !1,
              focusConfirm: !0,
              focusDeny: !1,
              focusCancel: !1,
              returnFocus: !0,
              showCloseButton: !1,
              closeButtonHtml: '&times;',
              closeButtonAriaLabel: 'Close this dialog',
              loaderHtml: '',
              showLoaderOnConfirm: !1,
              showLoaderOnDeny: !1,
              imageUrl: void 0,
              imageWidth: void 0,
              imageHeight: void 0,
              imageAlt: '',
              timer: void 0,
              timerProgressBar: !1,
              width: void 0,
              padding: void 0,
              background: void 0,
              input: void 0,
              inputPlaceholder: '',
              inputLabel: '',
              inputValue: '',
              inputOptions: {},
              inputAutoFocus: !0,
              inputAutoTrim: !0,
              inputAttributes: {},
              inputValidator: void 0,
              returnInputValueOnDeny: !1,
              validationMessage: void 0,
              grow: !1,
              position: 'center',
              progressSteps: [],
              currentProgressStep: void 0,
              progressStepsDistance: void 0,
              willOpen: void 0,
              didOpen: void 0,
              didRender: void 0,
              willClose: void 0,
              didClose: void 0,
              didDestroy: void 0,
              scrollbarPadding: !0,
            },
            Ve = [
              'allowEscapeKey',
              'allowOutsideClick',
              'background',
              'buttonsStyling',
              'cancelButtonAriaLabel',
              'cancelButtonColor',
              'cancelButtonText',
              'closeButtonAriaLabel',
              'closeButtonHtml',
              'color',
              'confirmButtonAriaLabel',
              'confirmButtonColor',
              'confirmButtonText',
              'currentProgressStep',
              'customClass',
              'denyButtonAriaLabel',
              'denyButtonColor',
              'denyButtonText',
              'didClose',
              'didDestroy',
              'draggable',
              'footer',
              'hideClass',
              'html',
              'icon',
              'iconColor',
              'iconHtml',
              'imageAlt',
              'imageHeight',
              'imageUrl',
              'imageWidth',
              'preConfirm',
              'preDeny',
              'progressSteps',
              'returnFocus',
              'reverseButtons',
              'showCancelButton',
              'showCloseButton',
              'showConfirmButton',
              'showDenyButton',
              'text',
              'title',
              'titleText',
              'willClose',
            ],
            Xe = { allowEnterKey: void 0 },
            Ue = [
              'allowOutsideClick',
              'allowEnterKey',
              'backdrop',
              'draggable',
              'focusConfirm',
              'focusDeny',
              'focusCancel',
              'returnFocus',
              'heightAuto',
              'keydownListenerCapture',
            ],
            Ge = (t) => Object.prototype.hasOwnProperty.call(Ye, t),
            We = (t) => -1 !== Ve.indexOf(t),
            Ze = (t) => Xe[t],
            Ke = (t) => {
              Ge(t) || u(`Unknown parameter "${t}"`);
            },
            Qe = (t) => {
              Ue.includes(t) &&
                u(`The parameter "${t}" is incompatible with toasts`);
            },
            Je = (t) => {
              const e = Ze(t);
              e && p(t, e);
            };
          function tn(t) {
            const e = _(),
              n = pt.innerParams.get(this);
            if (!e || F(e, n.hideClass.popup))
              return void u(
                "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.",
              );
            const r = en(t),
              o = Object.assign({}, n, r);
            Ht(this, o),
              pt.innerParams.set(this, o),
              Object.defineProperties(this, {
                params: {
                  value: Object.assign({}, this.params, t),
                  writable: !1,
                  enumerable: !0,
                },
              });
          }
          const en = (t) => {
            const e = {};
            return (
              Object.keys(t).forEach((n) => {
                We(n) ? (e[n] = t[n]) : u(`Invalid parameter to update: ${n}`);
              }),
              e
            );
          };
          function nn() {
            const t = pt.domCache.get(this),
              e = pt.innerParams.get(this);
            e
              ? (t.popup &&
                  r.swalCloseEventFinishedCallback &&
                  (r.swalCloseEventFinishedCallback(),
                  delete r.swalCloseEventFinishedCallback),
                'function' == typeof e.didDestroy && e.didDestroy(),
                r.eventEmitter.emit('didDestroy'),
                rn(this))
              : on(this);
          }
          const rn = (t) => {
              on(t),
                delete t.params,
                delete r.keydownHandler,
                delete r.keydownTarget,
                delete r.currentInstance;
            },
            on = (t) => {
              t.isAwaitingPromise
                ? (an(pt, t), (t.isAwaitingPromise = !0))
                : (an(te, t),
                  an(pt, t),
                  delete t.isAwaitingPromise,
                  delete t.disableButtons,
                  delete t.enableButtons,
                  delete t.getInput,
                  delete t.disableInput,
                  delete t.enableInput,
                  delete t.hideLoading,
                  delete t.disableLoading,
                  delete t.showValidationMessage,
                  delete t.resetValidationMessage,
                  delete t.close,
                  delete t.closePopup,
                  delete t.closeModal,
                  delete t.closeToast,
                  delete t.rejectPromise,
                  delete t.update,
                  delete t._destroy);
            },
            an = (t, e) => {
              for (const n in t) t[n].delete(e);
            };
          var sn = Object.freeze({
            __proto__: null,
            _destroy: nn,
            close: ue,
            closeModal: ue,
            closePopup: ue,
            closeToast: ue,
            disableButtons: Ne,
            disableInput: $e,
            disableLoading: je,
            enableButtons: Ie,
            enableInput: Fe,
            getInput: ze,
            handleAwaitingPromise: pe,
            hideLoading: je,
            rejectPromise: fe,
            resetValidationMessage: qe,
            showValidationMessage: He,
            update: tn,
          });
          const ln = (t, e, n) => {
              e.popup.onclick = () => {
                (t && (cn(t) || t.timer || t.input)) || n(Yt.close);
              };
            },
            cn = (t) =>
              !!(
                t.showConfirmButton ||
                t.showDenyButton ||
                t.showCancelButton ||
                t.showCloseButton
              );
          let un = !1;
          const dn = (t) => {
              t.popup.onmousedown = () => {
                t.container.onmouseup = function (e) {
                  (t.container.onmouseup = () => {}),
                    e.target === t.container && (un = !0);
                };
              };
            },
            fn = (t) => {
              t.container.onmousedown = (e) => {
                e.target === t.container && e.preventDefault(),
                  (t.popup.onmouseup = function (e) {
                    (t.popup.onmouseup = () => {}),
                      (e.target === t.popup ||
                        (e.target instanceof HTMLElement &&
                          t.popup.contains(e.target))) &&
                        (un = !0);
                  });
              };
            },
            pn = (t, e, n) => {
              e.container.onclick = (r) => {
                un
                  ? (un = !1)
                  : r.target === e.container &&
                    h(t.allowOutsideClick) &&
                    n(Yt.backdrop);
              };
            },
            hn = (t) =>
              t instanceof Element ||
              ((t) => 'object' == typeof t && t.jquery)(t);
          const mn = () => {
              if (r.timeout)
                return (
                  (() => {
                    const t = B();
                    if (!t) return;
                    const e = parseInt(window.getComputedStyle(t).width);
                    t.style.removeProperty('transition'),
                      (t.style.width = '100%');
                    const n =
                      (e / parseInt(window.getComputedStyle(t).width)) * 100;
                    t.style.width = `${n}%`;
                  })(),
                  r.timeout.stop()
                );
            },
            gn = () => {
              if (r.timeout) {
                const t = r.timeout.start();
                return rt(t), t;
              }
            };
          let vn = !1;
          const wn = {};
          const yn = (t) => {
            for (let e = t.target; e && e !== document; e = e.parentNode)
              for (const t in wn) {
                const n = e.getAttribute(t);
                if (n) return void wn[t].fire({ template: n });
              }
          };
          r.eventEmitter = new (class {
            constructor() {
              this.events = {};
            }
            _getHandlersByEventName(t) {
              return (
                void 0 === this.events[t] && (this.events[t] = []),
                this.events[t]
              );
            }
            on(t, e) {
              const n = this._getHandlersByEventName(t);
              n.includes(e) || n.push(e);
            }
            once(t, e) {
              var n = this;
              const r = function () {
                n.removeListener(t, r);
                for (
                  var o = arguments.length, i = new Array(o), a = 0;
                  a < o;
                  a++
                )
                  i[a] = arguments[a];
                e.apply(n, i);
              };
              this.on(t, r);
            }
            emit(t) {
              for (
                var e = arguments.length,
                  n = new Array(e > 1 ? e - 1 : 0),
                  r = 1;
                r < e;
                r++
              )
                n[r - 1] = arguments[r];
              this._getHandlersByEventName(t).forEach((t) => {
                try {
                  t.apply(this, n);
                } catch (t) {
                  console.error(t);
                }
              });
            }
            removeListener(t, e) {
              const n = this._getHandlersByEventName(t),
                r = n.indexOf(e);
              r > -1 && n.splice(r, 1);
            }
            removeAllListeners(t) {
              void 0 !== this.events[t] && (this.events[t].length = 0);
            }
            reset() {
              this.events = {};
            }
          })();
          var bn = Object.freeze({
            __proto__: null,
            argsToParams: (t) => {
              const e = {};
              return (
                'object' != typeof t[0] || hn(t[0])
                  ? ['title', 'html', 'icon'].forEach((n, r) => {
                      const o = t[r];
                      'string' == typeof o || hn(o)
                        ? (e[n] = o)
                        : void 0 !== o &&
                          d(
                            `Unexpected type of ${n}! Expected "string" or "Element", got ${typeof o}`,
                          );
                    })
                  : Object.assign(e, t[0]),
                e
              );
            },
            bindClickHandler: function () {
              (wn[
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 'data-swal-template'
              ] = this),
                vn || (document.body.addEventListener('click', yn), (vn = !0));
            },
            clickCancel: () => {
              var t;
              return null === (t = A()) || void 0 === t ? void 0 : t.click();
            },
            clickConfirm: qt,
            clickDeny: () => {
              var t;
              return null === (t = P()) || void 0 === t ? void 0 : t.click();
            },
            enableLoading: we,
            fire: function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              return new this(...e);
            },
            getActions: M,
            getCancelButton: A,
            getCloseButton: z,
            getConfirmButton: O,
            getContainer: w,
            getDenyButton: P,
            getFocusableElements: R,
            getFooter: j,
            getHtmlContainer: E,
            getIcon: x,
            getIconContent: () => b(a['icon-content']),
            getImage: T,
            getInputLabel: () => b(a['input-label']),
            getLoader: L,
            getPopup: _,
            getProgressSteps: C,
            getTimerLeft: () => r.timeout && r.timeout.getTimerLeft(),
            getTimerProgressBar: B,
            getTitle: k,
            getValidationMessage: S,
            increaseTimer: (t) => {
              if (r.timeout) {
                const e = r.timeout.increase(t);
                return rt(e, !0), e;
              }
            },
            isDeprecatedParameter: Ze,
            isLoading: () => {
              const t = _();
              return !!t && t.hasAttribute('data-loading');
            },
            isTimerRunning: () => !(!r.timeout || !r.timeout.isRunning()),
            isUpdatableParameter: We,
            isValidParameter: Ge,
            isVisible: () => tt(_()),
            mixin: function (t) {
              return class extends this {
                _main(e, n) {
                  return super._main(e, Object.assign({}, t, n));
                }
              };
            },
            off: (t, e) => {
              t
                ? e
                  ? r.eventEmitter.removeListener(t, e)
                  : r.eventEmitter.removeAllListeners(t)
                : r.eventEmitter.reset();
            },
            on: (t, e) => {
              r.eventEmitter.on(t, e);
            },
            once: (t, e) => {
              r.eventEmitter.once(t, e);
            },
            resumeTimer: gn,
            showLoading: we,
            stopTimer: mn,
            toggleTimer: () => {
              const t = r.timeout;
              return t && (t.running ? mn() : gn());
            },
          });
          class _n {
            constructor(t, e) {
              (this.callback = t),
                (this.remaining = e),
                (this.running = !1),
                this.start();
            }
            start() {
              return (
                this.running ||
                  ((this.running = !0),
                  (this.started = new Date()),
                  (this.id = setTimeout(this.callback, this.remaining))),
                this.remaining
              );
            }
            stop() {
              return (
                this.started &&
                  this.running &&
                  ((this.running = !1),
                  clearTimeout(this.id),
                  (this.remaining -=
                    new Date().getTime() - this.started.getTime())),
                this.remaining
              );
            }
            increase(t) {
              const e = this.running;
              return (
                e && this.stop(),
                (this.remaining += t),
                e && this.start(),
                this.remaining
              );
            }
            getTimerLeft() {
              return (
                this.running && (this.stop(), this.start()), this.remaining
              );
            }
            isRunning() {
              return this.running;
            }
          }
          const xn = ['swal-title', 'swal-html', 'swal-footer'],
            kn = (t) => {
              const e = {};
              return (
                Array.from(t.querySelectorAll('swal-param')).forEach((t) => {
                  Ln(t, ['name', 'value']);
                  const n = t.getAttribute('name'),
                    r = t.getAttribute('value');
                  n &&
                    r &&
                    (e[n] =
                      'boolean' == typeof Ye[n]
                        ? 'false' !== r
                        : 'object' == typeof Ye[n]
                          ? JSON.parse(r)
                          : r);
                }),
                e
              );
            },
            En = (t) => {
              const e = {};
              return (
                Array.from(t.querySelectorAll('swal-function-param')).forEach(
                  (t) => {
                    const n = t.getAttribute('name'),
                      r = t.getAttribute('value');
                    n && r && (e[n] = new Function(`return ${r}`)());
                  },
                ),
                e
              );
            },
            Tn = (t) => {
              const e = {};
              return (
                Array.from(t.querySelectorAll('swal-button')).forEach((t) => {
                  Ln(t, ['type', 'color', 'aria-label']);
                  const n = t.getAttribute('type');
                  n &&
                    ['confirm', 'cancel', 'deny'].includes(n) &&
                    ((e[`${n}ButtonText`] = t.innerHTML),
                    (e[`show${c(n)}Button`] = !0),
                    t.hasAttribute('color') &&
                      (e[`${n}ButtonColor`] = t.getAttribute('color')),
                    t.hasAttribute('aria-label') &&
                      (e[`${n}ButtonAriaLabel`] =
                        t.getAttribute('aria-label')));
                }),
                e
              );
            },
            Cn = (t) => {
              const e = {},
                n = t.querySelector('swal-image');
              return (
                n &&
                  (Ln(n, ['src', 'width', 'height', 'alt']),
                  n.hasAttribute('src') &&
                    (e.imageUrl = n.getAttribute('src') || void 0),
                  n.hasAttribute('width') &&
                    (e.imageWidth = n.getAttribute('width') || void 0),
                  n.hasAttribute('height') &&
                    (e.imageHeight = n.getAttribute('height') || void 0),
                  n.hasAttribute('alt') &&
                    (e.imageAlt = n.getAttribute('alt') || void 0)),
                e
              );
            },
            Sn = (t) => {
              const e = {},
                n = t.querySelector('swal-icon');
              return (
                n &&
                  (Ln(n, ['type', 'color']),
                  n.hasAttribute('type') && (e.icon = n.getAttribute('type')),
                  n.hasAttribute('color') &&
                    (e.iconColor = n.getAttribute('color')),
                  (e.iconHtml = n.innerHTML)),
                e
              );
            },
            On = (t) => {
              const e = {},
                n = t.querySelector('swal-input');
              n &&
                (Ln(n, ['type', 'label', 'placeholder', 'value']),
                (e.input = n.getAttribute('type') || 'text'),
                n.hasAttribute('label') &&
                  (e.inputLabel = n.getAttribute('label')),
                n.hasAttribute('placeholder') &&
                  (e.inputPlaceholder = n.getAttribute('placeholder')),
                n.hasAttribute('value') &&
                  (e.inputValue = n.getAttribute('value')));
              const r = Array.from(t.querySelectorAll('swal-input-option'));
              return (
                r.length &&
                  ((e.inputOptions = {}),
                  r.forEach((t) => {
                    Ln(t, ['value']);
                    const n = t.getAttribute('value');
                    if (!n) return;
                    const r = t.innerHTML;
                    e.inputOptions[n] = r;
                  })),
                e
              );
            },
            An = (t, e) => {
              const n = {};
              for (const r in e) {
                const o = e[r],
                  i = t.querySelector(o);
                i &&
                  (Ln(i, []),
                  (n[o.replace(/^swal-/, '')] = i.innerHTML.trim()));
              }
              return n;
            },
            Pn = (t) => {
              const e = xn.concat([
                'swal-param',
                'swal-function-param',
                'swal-button',
                'swal-image',
                'swal-icon',
                'swal-input',
                'swal-input-option',
              ]);
              Array.from(t.children).forEach((t) => {
                const n = t.tagName.toLowerCase();
                e.includes(n) || u(`Unrecognized element <${n}>`);
              });
            },
            Ln = (t, e) => {
              Array.from(t.attributes).forEach((n) => {
                -1 === e.indexOf(n.name) &&
                  u([
                    `Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,
                    e.length
                      ? `Allowed attributes are: ${e.join(', ')}`
                      : 'To set the value, use HTML within the element.',
                  ]);
              });
            },
            Mn = (t) => {
              const e = w(),
                n = _();
              'function' == typeof t.willOpen && t.willOpen(n),
                r.eventEmitter.emit('willOpen', n);
              const o = window.getComputedStyle(document.body).overflowY;
              Rn(e, n, t),
                setTimeout(() => {
                  Bn(e, n);
                }, 10),
                D() &&
                  (zn(e, t.scrollbarPadding, o),
                  (() => {
                    const t = w();
                    Array.from(document.body.children).forEach((e) => {
                      e.contains(t) ||
                        (e.hasAttribute('aria-hidden') &&
                          e.setAttribute(
                            'data-previous-aria-hidden',
                            e.getAttribute('aria-hidden') || '',
                          ),
                        e.setAttribute('aria-hidden', 'true'));
                    });
                  })()),
                I() ||
                  r.previousActiveElement ||
                  (r.previousActiveElement = document.activeElement),
                'function' == typeof t.didOpen &&
                  setTimeout(() => t.didOpen(n)),
                r.eventEmitter.emit('didOpen', n),
                X(e, a['no-transition']);
            },
            jn = (t) => {
              const e = _();
              if (t.target !== e) return;
              const n = w();
              e.removeEventListener('animationend', jn),
                e.removeEventListener('transitionend', jn),
                (n.style.overflowY = 'auto');
            },
            Bn = (t, e) => {
              nt(e)
                ? ((t.style.overflowY = 'hidden'),
                  e.addEventListener('animationend', jn),
                  e.addEventListener('transitionend', jn))
                : (t.style.overflowY = 'auto');
            },
            zn = (t, e, n) => {
              (() => {
                if (ne && !F(document.body, a.iosfix)) {
                  const t = document.body.scrollTop;
                  (document.body.style.top = -1 * t + 'px'),
                    V(document.body, a.iosfix),
                    re();
                }
              })(),
                e && 'hidden' !== n && le(n),
                setTimeout(() => {
                  t.scrollTop = 0;
                });
            },
            Rn = (t, e, n) => {
              V(t, n.showClass.backdrop),
                n.animation
                  ? (e.style.setProperty('opacity', '0', 'important'),
                    W(e, 'grid'),
                    setTimeout(() => {
                      V(e, n.showClass.popup),
                        e.style.removeProperty('opacity');
                    }, 10))
                  : W(e, 'grid'),
                V([document.documentElement, document.body], a.shown),
                n.heightAuto &&
                  n.backdrop &&
                  !n.toast &&
                  V(
                    [document.documentElement, document.body],
                    a['height-auto'],
                  );
            };
          var Dn = (t, e) =>
              /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)
                ? Promise.resolve()
                : Promise.resolve(e || 'Invalid email address'),
            In = (t, e) =>
              /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
                t,
              )
                ? Promise.resolve()
                : Promise.resolve(e || 'Invalid URL');
          function Nn(t) {
            (function (t) {
              t.inputValidator ||
                ('email' === t.input && (t.inputValidator = Dn),
                'url' === t.input && (t.inputValidator = In));
            })(t),
              t.showLoaderOnConfirm &&
                !t.preConfirm &&
                u(
                  'showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request',
                ),
              (function (t) {
                (!t.target ||
                  ('string' == typeof t.target &&
                    !document.querySelector(t.target)) ||
                  ('string' != typeof t.target && !t.target.appendChild)) &&
                  (u('Target parameter is not valid, defaulting to "body"'),
                  (t.target = 'body'));
              })(t),
              'string' == typeof t.title &&
                (t.title = t.title.split('\n').join('<br />')),
              at(t);
          }
          let Fn;
          var $n = new WeakMap();
          class Hn {
            constructor() {
              if ((n(this, $n, void 0), 'undefined' == typeof window)) return;
              Fn = this;
              for (
                var e = arguments.length, r = new Array(e), o = 0;
                o < e;
                o++
              )
                r[o] = arguments[o];
              const i = Object.freeze(this.constructor.argsToParams(r));
              var a, s, l;
              (this.params = i),
                (this.isAwaitingPromise = !1),
                (a = $n),
                (s = this),
                (l = this._main(Fn.params)),
                a.set(t(a, s), l);
            }
            _main(t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if (
                (((t) => {
                  !1 === t.backdrop &&
                    t.allowOutsideClick &&
                    u(
                      '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`',
                    );
                  for (const e in t) Ke(e), t.toast && Qe(e), Je(e);
                })(Object.assign({}, e, t)),
                r.currentInstance)
              ) {
                const t = te.swalPromiseResolve.get(r.currentInstance),
                  { isAwaitingPromise: e } = r.currentInstance;
                r.currentInstance._destroy(),
                  e || t({ isDismissed: !0 }),
                  D() && ee();
              }
              r.currentInstance = Fn;
              const n = Yn(t, e);
              Nn(n),
                Object.freeze(n),
                r.timeout && (r.timeout.stop(), delete r.timeout),
                clearTimeout(r.restoreFocusTimeout);
              const o = Vn(Fn);
              return Ht(Fn, n), pt.innerParams.set(Fn, n), qn(Fn, o, n);
            }
            then(t) {
              return e($n, this).then(t);
            }
            finally(t) {
              return e($n, this).finally(t);
            }
          }
          const qn = (t, e, n) =>
              new Promise((o, i) => {
                const a = (e) => {
                  t.close({ isDismissed: !0, dismiss: e });
                };
                te.swalPromiseResolve.set(t, o),
                  te.swalPromiseReject.set(t, i),
                  (e.confirmButton.onclick = () => {
                    ((t) => {
                      const e = pt.innerParams.get(t);
                      t.disableButtons(),
                        e.input ? Se(t, 'confirm') : Me(t, !0);
                    })(t);
                  }),
                  (e.denyButton.onclick = () => {
                    ((t) => {
                      const e = pt.innerParams.get(t);
                      t.disableButtons(),
                        e.returnInputValueOnDeny ? Se(t, 'deny') : Ae(t, !1);
                    })(t);
                  }),
                  (e.cancelButton.onclick = () => {
                    ((t, e) => {
                      t.disableButtons(), e(Yt.cancel);
                    })(t, a);
                  }),
                  (e.closeButton.onclick = () => {
                    a(Yt.close);
                  }),
                  ((t, e, n) => {
                    t.toast ? ln(t, e, n) : (dn(e), fn(e), pn(t, e, n));
                  })(n, e, a),
                  ((t, e, n) => {
                    Vt(t),
                      e.toast ||
                        ((t.keydownHandler = (t) => Wt(e, t, n)),
                        (t.keydownTarget = e.keydownListenerCapture
                          ? window
                          : _()),
                        (t.keydownListenerCapture = e.keydownListenerCapture),
                        t.keydownTarget.addEventListener(
                          'keydown',
                          t.keydownHandler,
                          { capture: t.keydownListenerCapture },
                        ),
                        (t.keydownHandlerAdded = !0));
                  })(r, n, a),
                  ((t, e) => {
                    'select' === e.input || 'radio' === e.input
                      ? ke(t, e)
                      : ['text', 'email', 'number', 'tel', 'textarea'].some(
                          (t) => t === e.input,
                        ) &&
                        (m(e.inputValue) || v(e.inputValue)) &&
                        (we(O()), Ee(t, e));
                  })(t, n),
                  Mn(n),
                  Xn(r, n, a),
                  Un(e, n),
                  setTimeout(() => {
                    e.container.scrollTop = 0;
                  });
              }),
            Yn = (t, e) => {
              const n = ((t) => {
                  const e =
                    'string' == typeof t.template
                      ? document.querySelector(t.template)
                      : t.template;
                  if (!e) return {};
                  const n = e.content;
                  return (
                    Pn(n),
                    Object.assign(
                      kn(n),
                      En(n),
                      Tn(n),
                      Cn(n),
                      Sn(n),
                      On(n),
                      An(n, xn),
                    )
                  );
                })(t),
                r = Object.assign({}, Ye, e, n, t);
              return (
                (r.showClass = Object.assign({}, Ye.showClass, r.showClass)),
                (r.hideClass = Object.assign({}, Ye.hideClass, r.hideClass)),
                !1 === r.animation &&
                  ((r.showClass = { backdrop: 'swal2-noanimation' }),
                  (r.hideClass = {})),
                r
              );
            },
            Vn = (t) => {
              const e = {
                popup: _(),
                container: w(),
                actions: M(),
                confirmButton: O(),
                denyButton: P(),
                cancelButton: A(),
                loader: L(),
                closeButton: z(),
                validationMessage: S(),
                progressSteps: C(),
              };
              return pt.domCache.set(t, e), e;
            },
            Xn = (t, e, n) => {
              const r = B();
              Z(r),
                e.timer &&
                  ((t.timeout = new _n(() => {
                    n('timer'), delete t.timeout;
                  }, e.timer)),
                  e.timerProgressBar &&
                    (W(r),
                    $(r, e, 'timerProgressBar'),
                    setTimeout(() => {
                      t.timeout && t.timeout.running && rt(e.timer);
                    })));
            },
            Un = (t, e) => {
              if (!e.toast)
                return h(e.allowEnterKey)
                  ? void (Gn(t) || Wn(t, e) || Xt(-1, 1))
                  : (p('allowEnterKey'), void Zn());
            },
            Gn = (t) => {
              const e = Array.from(t.popup.querySelectorAll('[autofocus]'));
              for (const t of e)
                if (t instanceof HTMLElement && tt(t)) return t.focus(), !0;
              return !1;
            },
            Wn = (t, e) =>
              e.focusDeny && tt(t.denyButton)
                ? (t.denyButton.focus(), !0)
                : e.focusCancel && tt(t.cancelButton)
                  ? (t.cancelButton.focus(), !0)
                  : !(
                      !e.focusConfirm ||
                      !tt(t.confirmButton) ||
                      (t.confirmButton.focus(), 0)
                    ),
            Zn = () => {
              document.activeElement instanceof HTMLElement &&
                'function' == typeof document.activeElement.blur &&
                document.activeElement.blur();
            };
          if (
            'undefined' != typeof window &&
            /^ru\b/.test(navigator.language) &&
            location.host.match(/\.(ru|su|by|xn--p1ai)$/)
          ) {
            const t = new Date(),
              e = localStorage.getItem('swal-initiation');
            e
              ? (t.getTime() - Date.parse(e)) / 864e5 > 3 &&
                setTimeout(() => {
                  document.body.style.pointerEvents = 'none';
                  const t = document.createElement('audio');
                  (t.src =
                    'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3'),
                    (t.loop = !0),
                    document.body.appendChild(t),
                    setTimeout(() => {
                      t.play().catch(() => {});
                    }, 2500);
                }, 500)
              : localStorage.setItem('swal-initiation', `${t}`);
          }
          (Hn.prototype.disableButtons = Ne),
            (Hn.prototype.enableButtons = Ie),
            (Hn.prototype.getInput = ze),
            (Hn.prototype.disableInput = $e),
            (Hn.prototype.enableInput = Fe),
            (Hn.prototype.hideLoading = je),
            (Hn.prototype.disableLoading = je),
            (Hn.prototype.showValidationMessage = He),
            (Hn.prototype.resetValidationMessage = qe),
            (Hn.prototype.close = ue),
            (Hn.prototype.closePopup = ue),
            (Hn.prototype.closeModal = ue),
            (Hn.prototype.closeToast = ue),
            (Hn.prototype.rejectPromise = fe),
            (Hn.prototype.update = tn),
            (Hn.prototype._destroy = nn),
            Object.assign(Hn, bn),
            Object.keys(sn).forEach((t) => {
              Hn[t] = function () {
                return Fn && Fn[t] ? Fn[t](...arguments) : null;
              };
            }),
            (Hn.DismissReason = Yt),
            (Hn.version = '11.15.10');
          const Kn = Hn;
          return (Kn.default = Kn), Kn;
        })()),
          void 0 !== this &&
            this.Sweetalert2 &&
            (this.swal =
              this.sweetAlert =
              this.Swal =
              this.SweetAlert =
                this.Sweetalert2),
          'undefined' != typeof document &&
            (function (t, e) {
              var n = t.createElement('style');
              if (
                (t.getElementsByTagName('head')[0].appendChild(n), n.styleSheet)
              )
                n.styleSheet.disabled || (n.styleSheet.cssText = e);
              else
                try {
                  n.innerHTML = e;
                } catch (t) {
                  n.innerText = e;
                }
            })(
              document,
              'body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}',
            );
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return t[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      'use strict';
      n(799), n(785), n(827), n(784), n(871), n(177), n(566);
      var t = n(72),
        e = n.n(t),
        r = n(825),
        o = n.n(r),
        i = n(659),
        a = n.n(i),
        s = n(56),
        l = n.n(s),
        c = n(540),
        u = n.n(c),
        d = n(113),
        f = n.n(d),
        p = n(919),
        h = {};
      function m(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function g(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      (h.styleTagTransform = f()),
        (h.setAttributes = l()),
        (h.insert = a().bind(null, 'head')),
        (h.domAPI = o()),
        (h.insertStyleElement = u()),
        e()(p.A, h),
        p.A && p.A.locals && p.A.locals;
      var v,
        w,
        y,
        b,
        _,
        x,
        k,
        E,
        T,
        C,
        S,
        O,
        A,
        P,
        L,
        M,
        j,
        B = {
          autoSleep: 120,
          force3D: 'auto',
          nullTargetWarn: 1,
          units: { lineHeight: '' },
        },
        z = { duration: 0.5, overwrite: !1, delay: 0 },
        R = 1e8,
        D = 1e-8,
        I = 2 * Math.PI,
        N = I / 4,
        F = 0,
        $ = Math.sqrt,
        H = Math.cos,
        q = Math.sin,
        Y = function (t) {
          return 'string' == typeof t;
        },
        V = function (t) {
          return 'function' == typeof t;
        },
        X = function (t) {
          return 'number' == typeof t;
        },
        U = function (t) {
          return void 0 === t;
        },
        G = function (t) {
          return 'object' == typeof t;
        },
        W = function (t) {
          return !1 !== t;
        },
        Z = function () {
          return 'undefined' != typeof window;
        },
        K = function (t) {
          return V(t) || Y(t);
        },
        Q =
          ('function' == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        J = Array.isArray,
        tt = /(?:-?\.?\d|\.)+/gi,
        et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        nt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        rt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        ot = /[+-]=-?[.\d]+/,
        it = /[^,'"\[\]\s]+/gi,
        at = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        st = {},
        lt = {},
        ct = function (t) {
          return (lt = It(t, st)) && Nn;
        },
        ut = function (t, e) {
          return console.warn(
            'Invalid property',
            t,
            'set to',
            e,
            'Missing plugin? gsap.registerPlugin()',
          );
        },
        dt = function (t, e) {
          return !e && console.warn(t);
        },
        ft = function (t, e) {
          return (t && (st[t] = e) && lt && (lt[t] = e)) || st;
        },
        pt = function () {
          return 0;
        },
        ht = { suppressEvents: !0, isStart: !0, kill: !1 },
        mt = { suppressEvents: !0, kill: !1 },
        gt = { suppressEvents: !0 },
        vt = {},
        wt = [],
        yt = {},
        bt = {},
        _t = {},
        xt = 30,
        kt = [],
        Et = '',
        Tt = function (t) {
          var e,
            n,
            r = t[0];
          if ((G(r) || V(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
            for (n = kt.length; n-- && !kt[n].targetTest(r); );
            e = kt[n];
          }
          for (n = t.length; n--; )
            (t[n] && (t[n]._gsap || (t[n]._gsap = new Qe(t[n], e)))) ||
              t.splice(n, 1);
          return t;
        },
        Ct = function (t) {
          return t._gsap || Tt(me(t))[0]._gsap;
        },
        St = function (t, e, n) {
          return (n = t[e]) && V(n)
            ? t[e]()
            : (U(n) && t.getAttribute && t.getAttribute(e)) || n;
        },
        Ot = function (t, e) {
          return (t = t.split(',')).forEach(e) || t;
        },
        At = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        Pt = function (t) {
          return Math.round(1e7 * t) / 1e7 || 0;
        },
        Lt = function (t, e) {
          var n = e.charAt(0),
            r = parseFloat(e.substr(2));
          return (
            (t = parseFloat(t)),
            '+' === n ? t + r : '-' === n ? t - r : '*' === n ? t * r : t / r
          );
        },
        Mt = function (t, e) {
          for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n; );
          return r < n;
        },
        jt = function () {
          var t,
            e,
            n = wt.length,
            r = wt.slice(0);
          for (yt = {}, wt.length = 0, t = 0; t < n; t++)
            (e = r[t]) &&
              e._lazy &&
              (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        },
        Bt = function (t, e, n, r) {
          wt.length && !w && jt(),
            t.render(e, n, r || (w && e < 0 && (t._initted || t._startAt))),
            wt.length && !w && jt();
        },
        zt = function (t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + '').match(it).length < 2
            ? e
            : Y(t)
              ? t.trim()
              : t;
        },
        Rt = function (t) {
          return t;
        },
        Dt = function (t, e) {
          for (var n in e) n in t || (t[n] = e[n]);
          return t;
        },
        It = function (t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        },
        Nt = function t(e, n) {
          for (var r in n)
            '__proto__' !== r &&
              'constructor' !== r &&
              'prototype' !== r &&
              (e[r] = G(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
          return e;
        },
        Ft = function (t, e) {
          var n,
            r = {};
          for (n in t) n in e || (r[n] = t[n]);
          return r;
        },
        $t = function (t) {
          var e,
            n = t.parent || b,
            r = t.keyframes
              ? ((e = J(t.keyframes)),
                function (t, n) {
                  for (var r in n)
                    r in t ||
                      ('duration' === r && e) ||
                      'ease' === r ||
                      (t[r] = n[r]);
                })
              : Dt;
          if (W(t.inherit))
            for (; n; ) r(t, n.vars.defaults), (n = n.parent || n._dp);
          return t;
        },
        Ht = function (t, e, n, r, o) {
          void 0 === n && (n = '_first'), void 0 === r && (r = '_last');
          var i,
            a = t[r];
          if (o) for (i = e[o]; a && a[o] > i; ) a = a._prev;
          return (
            a
              ? ((e._next = a._next), (a._next = e))
              : ((e._next = t[n]), (t[n] = e)),
            e._next ? (e._next._prev = e) : (t[r] = e),
            (e._prev = a),
            (e.parent = e._dp = t),
            e
          );
        },
        qt = function (t, e, n, r) {
          void 0 === n && (n = '_first'), void 0 === r && (r = '_last');
          var o = e._prev,
            i = e._next;
          o ? (o._next = i) : t[n] === e && (t[n] = i),
            i ? (i._prev = o) : t[r] === e && (t[r] = o),
            (e._next = e._prev = e.parent = null);
        },
        Yt = function (t, e) {
          t.parent &&
            (!e || t.parent.autoRemoveChildren) &&
            t.parent.remove &&
            t.parent.remove(t),
            (t._act = 0);
        },
        Vt = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
          return t;
        },
        Xt = function (t, e, n, r) {
          return (
            t._startAt &&
            (w
              ? t._startAt.revert(mt)
              : (t.vars.immediateRender && !t.vars.autoRevert) ||
                t._startAt.render(e, !0, r))
          );
        },
        Ut = function t(e) {
          return !e || (e._ts && t(e.parent));
        },
        Gt = function (t) {
          return t._repeat
            ? Wt(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0;
        },
        Wt = function (t, e) {
          var n = Math.floor((t = Pt(t / e)));
          return t && n === t ? n - 1 : n;
        },
        Zt = function (t, e) {
          return (
            (t - e._start) * e._ts +
            (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
          );
        },
        Kt = function (t) {
          return (t._end = Pt(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || D) || 0),
          ));
        },
        Qt = function (t, e) {
          var n = t._dp;
          return (
            n &&
              n.smoothChildTiming &&
              t._ts &&
              ((t._start = Pt(
                n._time -
                  (t._ts > 0
                    ? e / t._ts
                    : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts),
              )),
              Kt(t),
              n._dirty || Vt(n, t)),
            t
          );
        },
        Jt = function (t, e) {
          var n;
          if (
            ((e._time ||
              (!e._dur && e._initted) ||
              (e._start < t._time && (e._dur || !e.add))) &&
              ((n = Zt(t.rawTime(), e)),
              (!e._dur || de(0, e.totalDuration(), n) - e._tTime > D) &&
                e.render(n, !0)),
            Vt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration())
              for (n = t; n._dp; )
                n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
            t._zTime = -1e-8;
          }
        },
        te = function (t, e, n, r) {
          return (
            e.parent && Yt(e),
            (e._start = Pt(
              (X(n) ? n : n || t !== b ? le(t, n, e) : t._time) + e._delay,
            )),
            (e._end = Pt(
              e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0),
            )),
            Ht(t, e, '_first', '_last', t._sort ? '_start' : 0),
            oe(e) || (t._recent = e),
            r || Jt(t, e),
            t._ts < 0 && Qt(t, t._tTime),
            t
          );
        },
        ee = function (t, e) {
          return (
            (st.ScrollTrigger || ut('scrollTrigger', e)) &&
            st.ScrollTrigger.create(e, t)
          );
        },
        ne = function (t, e, n, r, o) {
          return (
            sn(t, e, o),
            t._initted
              ? !n &&
                t._pt &&
                !w &&
                ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                T !== Ne.frame
                ? (wt.push(t), (t._lazy = [o, r]), 1)
                : void 0
              : 1
          );
        },
        re = function t(e) {
          var n = e.parent;
          return (
            n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
          );
        },
        oe = function (t) {
          var e = t.data;
          return 'isFromStart' === e || 'isStart' === e;
        },
        ie = function (t, e, n, r) {
          var o = t._repeat,
            i = Pt(e) || 0,
            a = t._tTime / t._tDur;
          return (
            a && !r && (t._time *= i / t._dur),
            (t._dur = i),
            (t._tDur = o
              ? o < 0
                ? 1e10
                : Pt(i * (o + 1) + t._rDelay * o)
              : i),
            a > 0 && !r && Qt(t, (t._tTime = t._tDur * a)),
            t.parent && Kt(t),
            n || Vt(t.parent, t),
            t
          );
        },
        ae = function (t) {
          return t instanceof tn ? Vt(t) : ie(t, t._dur);
        },
        se = { _start: 0, endTime: pt, totalDuration: pt },
        le = function t(e, n, r) {
          var o,
            i,
            a,
            s = e.labels,
            l = e._recent || se,
            c = e.duration() >= R ? l.endTime(!1) : e._dur;
          return Y(n) && (isNaN(n) || n in s)
            ? ((i = n.charAt(0)),
              (a = '%' === n.substr(-1)),
              (o = n.indexOf('=')),
              '<' === i || '>' === i
                ? (o >= 0 && (n = n.replace(/=/, '')),
                  ('<' === i ? l._start : l.endTime(l._repeat >= 0)) +
                    (parseFloat(n.substr(1)) || 0) *
                      (a ? (o < 0 ? l : r).totalDuration() / 100 : 1))
                : o < 0
                  ? (n in s || (s[n] = c), s[n])
                  : ((i = parseFloat(n.charAt(o - 1) + n.substr(o + 1))),
                    a &&
                      r &&
                      (i = (i / 100) * (J(r) ? r[0] : r).totalDuration()),
                    o > 1 ? t(e, n.substr(0, o - 1), r) + i : c + i))
            : null == n
              ? c
              : +n;
        },
        ce = function (t, e, n) {
          var r,
            o,
            i = X(e[1]),
            a = (i ? 2 : 1) + (t < 2 ? 0 : 1),
            s = e[a];
          if ((i && (s.duration = e[1]), (s.parent = n), t)) {
            for (r = s, o = n; o && !('immediateRender' in r); )
              (r = o.vars.defaults || {}), (o = W(o.vars.inherit) && o.parent);
            (s.immediateRender = W(r.immediateRender)),
              t < 2 ? (s.runBackwards = 1) : (s.startAt = e[a - 1]);
          }
          return new fn(e[0], s, e[a + 1]);
        },
        ue = function (t, e) {
          return t || 0 === t ? e(t) : e;
        },
        de = function (t, e, n) {
          return n < t ? t : n > e ? e : n;
        },
        fe = function (t, e) {
          return Y(t) && (e = at.exec(t)) ? e[1] : '';
        },
        pe = [].slice,
        he = function (t, e) {
          return (
            t &&
            G(t) &&
            'length' in t &&
            ((!e && !t.length) || (t.length - 1 in t && G(t[0]))) &&
            !t.nodeType &&
            t !== _
          );
        },
        me = function (t, e, n) {
          return y && !e && y.selector
            ? y.selector(t)
            : !Y(t) || n || (!x && Fe())
              ? J(t)
                ? (function (t, e, n) {
                    return (
                      void 0 === n && (n = []),
                      t.forEach(function (t) {
                        var r;
                        return (Y(t) && !e) || he(t, 1)
                          ? (r = n).push.apply(r, me(t))
                          : n.push(t);
                      }) || n
                    );
                  })(t, n)
                : he(t)
                  ? pe.call(t, 0)
                  : t
                    ? [t]
                    : []
              : pe.call((e || k).querySelectorAll(t), 0);
        },
        ge = function (t) {
          return (
            (t = me(t)[0] || dt('Invalid scope') || {}),
            function (e) {
              var n = t.current || t.nativeElement || t;
              return me(
                e,
                n.querySelectorAll
                  ? n
                  : n === t
                    ? dt('Invalid scope') || k.createElement('div')
                    : t,
              );
            }
          );
        },
        ve = function (t) {
          return t.sort(function () {
            return 0.5 - Math.random();
          });
        },
        we = function (t) {
          if (V(t)) return t;
          var e = G(t) ? t : { each: t },
            n = Ue(e.ease),
            r = e.from || 0,
            o = parseFloat(e.base) || 0,
            i = {},
            a = r > 0 && r < 1,
            s = isNaN(r) || a,
            l = e.axis,
            c = r,
            u = r;
          return (
            Y(r)
              ? (c = u = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
              : !a && s && ((c = r[0]), (u = r[1])),
            function (t, a, d) {
              var f,
                p,
                h,
                m,
                g,
                v,
                w,
                y,
                b,
                _ = (d || e).length,
                x = i[_];
              if (!x) {
                if (!(b = 'auto' === e.grid ? 0 : (e.grid || [1, R])[1])) {
                  for (
                    w = -R;
                    w < (w = d[b++].getBoundingClientRect().left) && b < _;

                  );
                  b < _ && b--;
                }
                for (
                  x = i[_] = [],
                    f = s ? Math.min(b, _) * c - 0.5 : r % b,
                    p = b === R ? 0 : s ? (_ * u) / b - 0.5 : (r / b) | 0,
                    w = 0,
                    y = R,
                    v = 0;
                  v < _;
                  v++
                )
                  (h = (v % b) - f),
                    (m = p - ((v / b) | 0)),
                    (x[v] = g =
                      l ? Math.abs('y' === l ? m : h) : $(h * h + m * m)),
                    g > w && (w = g),
                    g < y && (y = g);
                'random' === r && ve(x),
                  (x.max = w - y),
                  (x.min = y),
                  (x.v = _ =
                    (parseFloat(e.amount) ||
                      parseFloat(e.each) *
                        (b > _
                          ? _ - 1
                          : l
                            ? 'y' === l
                              ? _ / b
                              : b
                            : Math.max(b, _ / b)) ||
                      0) * ('edges' === r ? -1 : 1)),
                  (x.b = _ < 0 ? o - _ : o),
                  (x.u = fe(e.amount || e.each) || 0),
                  (n = n && _ < 0 ? Ve(n) : n);
              }
              return (
                (_ = (x[t] - x.min) / x.max || 0),
                Pt(x.b + (n ? n(_) : _) * x.v) + x.u
              );
            }
          );
        },
        ye = function (t) {
          var e = Math.pow(10, ((t + '').split('.')[1] || '').length);
          return function (n) {
            var r = Pt(Math.round(parseFloat(n) / t) * t * e);
            return (r - (r % 1)) / e + (X(n) ? 0 : fe(n));
          };
        },
        be = function (t, e) {
          var n,
            r,
            o = J(t);
          return (
            !o &&
              G(t) &&
              ((n = o = t.radius || R),
              t.values
                ? ((t = me(t.values)), (r = !X(t[0])) && (n *= n))
                : (t = ye(t.increment))),
            ue(
              e,
              o
                ? V(t)
                  ? function (e) {
                      return (r = t(e)), Math.abs(r - e) <= n ? r : e;
                    }
                  : function (e) {
                      for (
                        var o,
                          i,
                          a = parseFloat(r ? e.x : e),
                          s = parseFloat(r ? e.y : 0),
                          l = R,
                          c = 0,
                          u = t.length;
                        u--;

                      )
                        (o = r
                          ? (o = t[u].x - a) * o + (i = t[u].y - s) * i
                          : Math.abs(t[u] - a)) < l && ((l = o), (c = u));
                      return (
                        (c = !n || l <= n ? t[c] : e),
                        r || c === e || X(e) ? c : c + fe(e)
                      );
                    }
                : ye(t),
            )
          );
        },
        _e = function (t, e, n, r) {
          return ue(J(t) ? !e : !0 === n ? !!(n = 0) : !r, function () {
            return J(t)
              ? t[~~(Math.random() * t.length)]
              : (n = n || 1e-5) &&
                  (r = n < 1 ? Math.pow(10, (n + '').length - 2) : 1) &&
                  Math.floor(
                    Math.round(
                      (t - n / 2 + Math.random() * (e - t + 0.99 * n)) / n,
                    ) *
                      n *
                      r,
                  ) / r;
          });
        },
        xe = function (t, e, n) {
          return ue(n, function (n) {
            return t[~~e(n)];
          });
        },
        ke = function (t) {
          for (var e, n, r, o, i = 0, a = ''; ~(e = t.indexOf('random(', i)); )
            (r = t.indexOf(')', e)),
              (o = '[' === t.charAt(e + 7)),
              (n = t.substr(e + 7, r - e - 7).match(o ? it : tt)),
              (a +=
                t.substr(i, e - i) +
                _e(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5)),
              (i = r + 1);
          return a + t.substr(i, t.length - i);
        },
        Ee = function (t, e, n, r, o) {
          var i = e - t,
            a = r - n;
          return ue(o, function (e) {
            return n + (((e - t) / i) * a || 0);
          });
        },
        Te = function (t, e, n) {
          var r,
            o,
            i,
            a = t.labels,
            s = R;
          for (r in a)
            (o = a[r] - e) < 0 == !!n &&
              o &&
              s > (o = Math.abs(o)) &&
              ((i = r), (s = o));
          return i;
        },
        Ce = function (t, e, n) {
          var r,
            o,
            i,
            a = t.vars,
            s = a[e],
            l = y,
            c = t._ctx;
          if (s)
            return (
              (r = a[e + 'Params']),
              (o = a.callbackScope || t),
              n && wt.length && jt(),
              c && (y = c),
              (i = r ? s.apply(o, r) : s.call(o)),
              (y = l),
              i
            );
        },
        Se = function (t) {
          return (
            Yt(t),
            t.scrollTrigger && t.scrollTrigger.kill(!!w),
            t.progress() < 1 && Ce(t, 'onInterrupt'),
            t
          );
        },
        Oe = [],
        Ae = function (t) {
          if (t)
            if (((t = (!t.name && t.default) || t), Z() || t.headless)) {
              var e = t.name,
                n = V(t),
                r =
                  e && !n && t.init
                    ? function () {
                        this._props = [];
                      }
                    : t,
                o = {
                  init: pt,
                  render: _n,
                  add: on,
                  kill: kn,
                  modifier: xn,
                  rawVars: 0,
                },
                i = {
                  targetTest: 0,
                  get: 0,
                  getSetter: vn,
                  aliases: {},
                  register: 0,
                };
              if ((Fe(), t !== r)) {
                if (bt[e]) return;
                Dt(r, Dt(Ft(t, o), i)),
                  It(r.prototype, It(o, Ft(t, i))),
                  (bt[(r.prop = e)] = r),
                  t.targetTest && (kt.push(r), (vt[e] = 1)),
                  (e =
                    ('css' === e
                      ? 'CSS'
                      : e.charAt(0).toUpperCase() + e.substr(1)) + 'Plugin');
              }
              ft(e, r), t.register && t.register(Nn, r, Cn);
            } else Oe.push(t);
        },
        Pe = 255,
        Le = {
          aqua: [0, Pe, Pe],
          lime: [0, Pe, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, Pe],
          navy: [0, 0, 128],
          white: [Pe, Pe, Pe],
          olive: [128, 128, 0],
          yellow: [Pe, Pe, 0],
          orange: [Pe, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [Pe, 0, 0],
          pink: [Pe, 192, 203],
          cyan: [0, Pe, Pe],
          transparent: [Pe, Pe, Pe, 0],
        },
        Me = function (t, e, n) {
          return (
            ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
              ? e + (n - e) * t * 6
              : t < 0.5
                ? n
                : 3 * t < 2
                  ? e + (n - e) * (2 / 3 - t) * 6
                  : e) *
              Pe +
              0.5) |
            0
          );
        },
        je = function (t, e, n) {
          var r,
            o,
            i,
            a,
            s,
            l,
            c,
            u,
            d,
            f,
            p = t ? (X(t) ? [t >> 16, (t >> 8) & Pe, t & Pe] : 0) : Le.black;
          if (!p) {
            if (
              (',' === t.substr(-1) && (t = t.substr(0, t.length - 1)), Le[t])
            )
              p = Le[t];
            else if ('#' === t.charAt(0)) {
              if (
                (t.length < 6 &&
                  ((r = t.charAt(1)),
                  (o = t.charAt(2)),
                  (i = t.charAt(3)),
                  (t =
                    '#' +
                    r +
                    r +
                    o +
                    o +
                    i +
                    i +
                    (5 === t.length ? t.charAt(4) + t.charAt(4) : ''))),
                9 === t.length)
              )
                return [
                  (p = parseInt(t.substr(1, 6), 16)) >> 16,
                  (p >> 8) & Pe,
                  p & Pe,
                  parseInt(t.substr(7), 16) / 255,
                ];
              p = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & Pe,
                t & Pe,
              ];
            } else if ('hsl' === t.substr(0, 3))
              if (((p = f = t.match(tt)), e)) {
                if (~t.indexOf('='))
                  return (p = t.match(et)), n && p.length < 4 && (p[3] = 1), p;
              } else
                (a = (+p[0] % 360) / 360),
                  (s = +p[1] / 100),
                  (r =
                    2 * (l = +p[2] / 100) -
                    (o = l <= 0.5 ? l * (s + 1) : l + s - l * s)),
                  p.length > 3 && (p[3] *= 1),
                  (p[0] = Me(a + 1 / 3, r, o)),
                  (p[1] = Me(a, r, o)),
                  (p[2] = Me(a - 1 / 3, r, o));
            else p = t.match(tt) || Le.transparent;
            p = p.map(Number);
          }
          return (
            e &&
              !f &&
              ((r = p[0] / Pe),
              (o = p[1] / Pe),
              (i = p[2] / Pe),
              (l = ((c = Math.max(r, o, i)) + (u = Math.min(r, o, i))) / 2),
              c === u
                ? (a = s = 0)
                : ((d = c - u),
                  (s = l > 0.5 ? d / (2 - c - u) : d / (c + u)),
                  (a =
                    c === r
                      ? (o - i) / d + (o < i ? 6 : 0)
                      : c === o
                        ? (i - r) / d + 2
                        : (r - o) / d + 4),
                  (a *= 60)),
              (p[0] = ~~(a + 0.5)),
              (p[1] = ~~(100 * s + 0.5)),
              (p[2] = ~~(100 * l + 0.5))),
            n && p.length < 4 && (p[3] = 1),
            p
          );
        },
        Be = function (t) {
          var e = [],
            n = [],
            r = -1;
          return (
            t.split(Re).forEach(function (t) {
              var o = t.match(nt) || [];
              e.push.apply(e, o), n.push((r += o.length + 1));
            }),
            (e.c = n),
            e
          );
        },
        ze = function (t, e, n) {
          var r,
            o,
            i,
            a,
            s = '',
            l = (t + s).match(Re),
            c = e ? 'hsla(' : 'rgba(',
            u = 0;
          if (!l) return t;
          if (
            ((l = l.map(function (t) {
              return (
                (t = je(t, e, 1)) &&
                c +
                  (e
                    ? t[0] + ',' + t[1] + '%,' + t[2] + '%,' + t[3]
                    : t.join(',')) +
                  ')'
              );
            })),
            n && ((i = Be(t)), (r = n.c).join(s) !== i.c.join(s)))
          )
            for (a = (o = t.replace(Re, '1').split(nt)).length - 1; u < a; u++)
              s +=
                o[u] +
                (~r.indexOf(u)
                  ? l.shift() || c + '0,0,0,0)'
                  : (i.length ? i : l.length ? l : n).shift());
          if (!o)
            for (a = (o = t.split(Re)).length - 1; u < a; u++) s += o[u] + l[u];
          return s + o[a];
        },
        Re = (function () {
          var t,
            e =
              '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b';
          for (t in Le) e += '|' + t + '\\b';
          return new RegExp(e + ')', 'gi');
        })(),
        De = /hsl[a]?\(/,
        Ie = function (t) {
          var e,
            n = t.join(' ');
          if (((Re.lastIndex = 0), Re.test(n)))
            return (
              (e = De.test(n)),
              (t[1] = ze(t[1], e)),
              (t[0] = ze(t[0], e, Be(t[1]))),
              !0
            );
        },
        Ne = (function () {
          var t,
            e,
            n,
            r,
            o,
            i,
            a = Date.now,
            s = 500,
            l = 33,
            c = a(),
            u = c,
            d = 1e3 / 240,
            f = d,
            p = [],
            h = function n(h) {
              var m,
                g,
                v,
                w,
                y = a() - u,
                b = !0 === h;
              if (
                ((y > s || y < 0) && (c += y - l),
                ((m = (v = (u += y) - c) - f) > 0 || b) &&
                  ((w = ++r.frame),
                  (o = v - 1e3 * r.time),
                  (r.time = v /= 1e3),
                  (f += m + (m >= d ? 4 : d - m)),
                  (g = 1)),
                b || (t = e(n)),
                g)
              )
                for (i = 0; i < p.length; i++) p[i](v, o, w, h);
            };
          return (r = {
            time: 0,
            frame: 0,
            tick: function () {
              h(!0);
            },
            deltaRatio: function (t) {
              return o / (1e3 / (t || 60));
            },
            wake: function () {
              E &&
                (!x &&
                  Z() &&
                  ((_ = x = window),
                  (k = _.document || {}),
                  (st.gsap = Nn),
                  (_.gsapVersions || (_.gsapVersions = [])).push(Nn.version),
                  ct(lt || _.GreenSockGlobals || (!_.gsap && _) || {}),
                  Oe.forEach(Ae)),
                (n =
                  'undefined' != typeof requestAnimationFrame &&
                  requestAnimationFrame),
                t && r.sleep(),
                (e =
                  n ||
                  function (t) {
                    return setTimeout(t, (f - 1e3 * r.time + 1) | 0);
                  }),
                (S = 1),
                h(2));
            },
            sleep: function () {
              (n ? cancelAnimationFrame : clearTimeout)(t), (S = 0), (e = pt);
            },
            lagSmoothing: function (t, e) {
              (s = t || 1 / 0), (l = Math.min(e || 33, s));
            },
            fps: function (t) {
              (d = 1e3 / (t || 240)), (f = 1e3 * r.time + d);
            },
            add: function (t, e, n) {
              var o = e
                ? function (e, n, i, a) {
                    t(e, n, i, a), r.remove(o);
                  }
                : t;
              return r.remove(t), p[n ? 'unshift' : 'push'](o), Fe(), o;
            },
            remove: function (t, e) {
              ~(e = p.indexOf(t)) && p.splice(e, 1) && i >= e && i--;
            },
            _listeners: p,
          });
        })(),
        Fe = function () {
          return !S && Ne.wake();
        },
        $e = {},
        He = /^[\d.\-M][\d.\-,\s]/,
        qe = /["']/g,
        Ye = function (t) {
          for (
            var e,
              n,
              r,
              o = {},
              i = t.substr(1, t.length - 3).split(':'),
              a = i[0],
              s = 1,
              l = i.length;
            s < l;
            s++
          )
            (n = i[s]),
              (e = s !== l - 1 ? n.lastIndexOf(',') : n.length),
              (r = n.substr(0, e)),
              (o[a] = isNaN(r) ? r.replace(qe, '').trim() : +r),
              (a = n.substr(e + 1).trim());
          return o;
        },
        Ve = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        Xe = function t(e, n) {
          for (var r, o = e._first; o; )
            o instanceof tn
              ? t(o, n)
              : !o.vars.yoyoEase ||
                (o._yoyo && o._repeat) ||
                o._yoyo === n ||
                (o.timeline
                  ? t(o.timeline, n)
                  : ((r = o._ease),
                    (o._ease = o._yEase),
                    (o._yEase = r),
                    (o._yoyo = n))),
              (o = o._next);
        },
        Ue = function (t, e) {
          return (
            (t &&
              (V(t)
                ? t
                : $e[t] ||
                  (function (t) {
                    var e,
                      n,
                      r,
                      o,
                      i = (t + '').split('('),
                      a = $e[i[0]];
                    return a && i.length > 1 && a.config
                      ? a.config.apply(
                          null,
                          ~t.indexOf('{')
                            ? [Ye(i[1])]
                            : ((e = t),
                              (n = e.indexOf('(') + 1),
                              (r = e.indexOf(')')),
                              (o = e.indexOf('(', n)),
                              e.substring(
                                n,
                                ~o && o < r ? e.indexOf(')', r + 1) : r,
                              ))
                                .split(',')
                                .map(zt),
                        )
                      : $e._CE && He.test(t)
                        ? $e._CE('', t)
                        : a;
                  })(t))) ||
            e
          );
        },
        Ge = function (t, e, n, r) {
          void 0 === n &&
            (n = function (t) {
              return 1 - e(1 - t);
            }),
            void 0 === r &&
              (r = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
              });
          var o,
            i = { easeIn: e, easeOut: n, easeInOut: r };
          return (
            Ot(t, function (t) {
              for (var e in (($e[t] = st[t] = i),
              ($e[(o = t.toLowerCase())] = n),
              i))
                $e[
                  o +
                    ('easeIn' === e
                      ? '.in'
                      : 'easeOut' === e
                        ? '.out'
                        : '.inOut')
                ] = $e[t + '.' + e] = i[e];
            }),
            i
          );
        },
        We = function (t) {
          return function (e) {
            return e < 0.5
              ? (1 - t(1 - 2 * e)) / 2
              : 0.5 + t(2 * (e - 0.5)) / 2;
          };
        },
        Ze = function t(e, n, r) {
          var o = n >= 1 ? n : 1,
            i = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
            a = (i / I) * (Math.asin(1 / o) || 0),
            s = function (t) {
              return 1 === t
                ? 1
                : o * Math.pow(2, -10 * t) * q((t - a) * i) + 1;
            },
            l =
              'out' === e
                ? s
                : 'in' === e
                  ? function (t) {
                      return 1 - s(1 - t);
                    }
                  : We(s);
          return (
            (i = I / i),
            (l.config = function (n, r) {
              return t(e, n, r);
            }),
            l
          );
        },
        Ke = function t(e, n) {
          void 0 === n && (n = 1.70158);
          var r = function (t) {
              return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
            },
            o =
              'out' === e
                ? r
                : 'in' === e
                  ? function (t) {
                      return 1 - r(1 - t);
                    }
                  : We(r);
          return (
            (o.config = function (n) {
              return t(e, n);
            }),
            o
          );
        };
      Ot('Linear,Quad,Cubic,Quart,Quint,Strong', function (t, e) {
        var n = e < 5 ? e + 1 : e;
        Ge(
          t + ',Power' + (n - 1),
          e
            ? function (t) {
                return Math.pow(t, n);
              }
            : function (t) {
                return t;
              },
          function (t) {
            return 1 - Math.pow(1 - t, n);
          },
          function (t) {
            return t < 0.5
              ? Math.pow(2 * t, n) / 2
              : 1 - Math.pow(2 * (1 - t), n) / 2;
          },
        );
      }),
        ($e.Linear.easeNone = $e.none = $e.Linear.easeIn),
        Ge('Elastic', Ze('in'), Ze('out'), Ze()),
        (O = 7.5625),
        (L = 2 * (P = 1 / (A = 2.75))),
        (M = 2.5 * P),
        Ge(
          'Bounce',
          function (t) {
            return 1 - j(1 - t);
          },
          (j = function (t) {
            return t < P
              ? O * t * t
              : t < L
                ? O * Math.pow(t - 1.5 / A, 2) + 0.75
                : t < M
                  ? O * (t -= 2.25 / A) * t + 0.9375
                  : O * Math.pow(t - 2.625 / A, 2) + 0.984375;
          }),
        ),
        Ge('Expo', function (t) {
          return (
            Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t)
          );
        }),
        Ge('Circ', function (t) {
          return -($(1 - t * t) - 1);
        }),
        Ge('Sine', function (t) {
          return 1 === t ? 1 : 1 - H(t * N);
        }),
        Ge('Back', Ke('in'), Ke('out'), Ke()),
        ($e.SteppedEase =
          $e.steps =
          st.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1);
                var n = 1 / t,
                  r = t + (e ? 0 : 1),
                  o = e ? 1 : 0;
                return function (t) {
                  return (((r * de(0, 0.99999999, t)) | 0) + o) * n;
                };
              },
            }),
        (z.ease = $e['quad.out']),
        Ot(
          'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
          function (t) {
            return (Et += t + ',' + t + 'Params,');
          },
        );
      var Qe = function (t, e) {
          (this.id = F++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : St),
            (this.set = e ? e.getSetter : vn);
        },
        Je = (function () {
          function t(t) {
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              ie(this, +t.duration, 1, 1),
              (this.data = t.data),
              y && ((this._ctx = y), y.data.push(this)),
              S || Ne.wake();
          }
          var e = t.prototype;
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0
                      ? t + (t + this._rDelay) * this._repeat
                      : t,
                  )
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  ie(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1),
                  ))
                : this._tDur;
            }),
            (e.totalTime = function (t, e) {
              if ((Fe(), !arguments.length)) return this._tTime;
              var n = this._dp;
              if (n && n.smoothChildTiming && this._ts) {
                for (
                  Qt(this, t), !n._dp || n.parent || Jt(n, this);
                  n && n.parent;

                )
                  n.parent._time !==
                    n._start +
                      (n._ts >= 0
                        ? n._tTime / n._ts
                        : (n.totalDuration() - n._tTime) / -n._ts) &&
                    n.totalTime(n._tTime, !0),
                    (n = n.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  te(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && Math.abs(this._zTime) === D) ||
                  (!t && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = t), Bt(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + Gt(this)) %
                      (this._dur + this._rDelay) || (t ? this._dur : 0),
                    e,
                  )
                : this._time;
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                  ? Math.min(1, this._tTime / this._tDur)
                  : this.rawTime() >= 0 && this._initted
                    ? 1
                    : 0;
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                      Gt(this),
                    e,
                  )
                : this.duration()
                  ? Math.min(1, this._time / this._dur)
                  : this.rawTime() > 0
                    ? 1
                    : 0;
            }),
            (e.iteration = function (t, e) {
              var n = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * n, e)
                : this._repeat
                  ? Wt(this._tTime, n) + 1
                  : 1;
            }),
            (e.timeScale = function (t, e) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === t) return this;
              var n =
                this.parent && this._ts
                  ? Zt(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                this.totalTime(
                  de(-Math.abs(this._delay), this._tDur, n),
                  !1 !== e,
                ),
                Kt(this),
                (function (t) {
                  for (var e = t.parent; e && e.parent; )
                    (e._dirty = 1), e.totalDuration(), (e = e.parent);
                  return t;
                })(this)
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (Fe(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            Math.abs(this._zTime) !== D &&
                            (this._tTime -= D),
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    te(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (W(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                    ? Zt(e.rawTime(t), this)
                    : this._tTime
                : this._tTime;
            }),
            (e.revert = function (t) {
              void 0 === t && (t = gt);
              var e = w;
              return (
                (w = t),
                (this._initted || this._startAt) &&
                  (this.timeline && this.timeline.revert(t),
                  this.totalTime(-0.01, t.suppressEvents)),
                'nested' !== this.data && !1 !== t.kill && this.kill(),
                (w = e),
                this
              );
            }),
            (e.globalTime = function (t) {
              for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
                (n = e._start + n / (Math.abs(e._ts) || 1)), (e = e._dp);
              return !this.parent && this._sat ? this._sat.globalTime(t) : n;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), ae(this))
                : -2 === this._repeat
                  ? 1 / 0
                  : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              if (arguments.length) {
                var e = this._time;
                return (this._rDelay = t), ae(this), e ? this.time(e) : this;
              }
              return this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(le(this, t), W(e));
            }),
            (e.restart = function (t, e) {
              return (
                this.play().totalTime(t ? -this._delay : 0, W(e)),
                this._dur || (this._zTime = -1e-8),
                this
              );
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
              return this.paused(!1);
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                  this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (
                (this._initted = this._act = 0), (this._zTime = -1e-8), this
              );
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                n = this._start;
              return !(
                e &&
                !(
                  this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= n &&
                  t < this.endTime(!0) - D
                )
              );
            }),
            (e.eventCallback = function (t, e, n) {
              var r = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((r[t] = e),
                      n && (r[t + 'Params'] = n),
                      'onUpdate' === t && (this._onUpdate = e))
                    : delete r[t],
                  this)
                : r[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (n) {
                var r = V(t) ? t : Rt,
                  o = function () {
                    var t = e.then;
                    (e.then = null),
                      V(r) && (r = r(e)) && (r.then || r === e) && (e.then = t),
                      n(r),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? o()
                  : (e._prom = o);
              });
            }),
            (e.kill = function () {
              Se(this);
            }),
            t
          );
        })();
      Dt(Je.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var tn = (function (t) {
        function e(e, n) {
          var r;
          return (
            void 0 === e && (e = {}),
            ((r = t.call(this, e) || this).labels = {}),
            (r.smoothChildTiming = !!e.smoothChildTiming),
            (r.autoRemoveChildren = !!e.autoRemoveChildren),
            (r._sort = W(e.sortChildren)),
            b && te(e.parent || b, m(r), n),
            e.reversed && r.reverse(),
            e.paused && r.paused(!0),
            e.scrollTrigger && ee(m(r), e.scrollTrigger),
            r
          );
        }
        g(e, t);
        var n = e.prototype;
        return (
          (n.to = function (t, e, n) {
            return ce(0, arguments, this), this;
          }),
          (n.from = function (t, e, n) {
            return ce(1, arguments, this), this;
          }),
          (n.fromTo = function (t, e, n, r) {
            return ce(2, arguments, this), this;
          }),
          (n.set = function (t, e, n) {
            return (
              (e.duration = 0),
              (e.parent = this),
              $t(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new fn(t, e, le(this, n), 1),
              this
            );
          }),
          (n.call = function (t, e, n) {
            return te(this, fn.delayedCall(0, t, e), n);
          }),
          (n.staggerTo = function (t, e, n, r, o, i, a) {
            return (
              (n.duration = e),
              (n.stagger = n.stagger || r),
              (n.onComplete = i),
              (n.onCompleteParams = a),
              (n.parent = this),
              new fn(t, n, le(this, o)),
              this
            );
          }),
          (n.staggerFrom = function (t, e, n, r, o, i, a) {
            return (
              (n.runBackwards = 1),
              ($t(n).immediateRender = W(n.immediateRender)),
              this.staggerTo(t, e, n, r, o, i, a)
            );
          }),
          (n.staggerFromTo = function (t, e, n, r, o, i, a, s) {
            return (
              (r.startAt = n),
              ($t(r).immediateRender = W(r.immediateRender)),
              this.staggerTo(t, e, r, o, i, a, s)
            );
          }),
          (n.render = function (t, e, n) {
            var r,
              o,
              i,
              a,
              s,
              l,
              c,
              u,
              d,
              f,
              p,
              h,
              m = this._time,
              g = this._dirty ? this.totalDuration() : this._tDur,
              v = this._dur,
              y = t <= 0 ? 0 : Pt(t),
              _ = this._zTime < 0 != t < 0 && (this._initted || !v);
            if (
              (this !== b && y > g && t >= 0 && (y = g),
              y !== this._tTime || n || _)
            ) {
              if (
                (m !== this._time &&
                  v &&
                  ((y += this._time - m), (t += this._time - m)),
                (r = y),
                (d = this._start),
                (l = !(u = this._ts)),
                _ && (v || (m = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat)
              ) {
                if (
                  ((p = this._yoyo),
                  (s = v + this._rDelay),
                  this._repeat < -1 && t < 0)
                )
                  return this.totalTime(100 * s + t, e, n);
                if (
                  ((r = Pt(y % s)),
                  y === g
                    ? ((a = this._repeat), (r = v))
                    : ((a = ~~(f = Pt(y / s))) && a === f && ((r = v), a--),
                      r > v && (r = v)),
                  (f = Wt(this._tTime, s)),
                  !m &&
                    this._tTime &&
                    f !== a &&
                    this._tTime - f * s - this._dur <= 0 &&
                    (f = a),
                  p && 1 & a && ((r = v - r), (h = 1)),
                  a !== f && !this._lock)
                ) {
                  var x = p && 1 & f,
                    k = x === (p && 1 & a);
                  if (
                    (a < f && (x = !x),
                    (m = x ? 0 : y % v ? v : y),
                    (this._lock = 1),
                    (this.render(m || (h ? 0 : Pt(a * s)), e, !v)._lock = 0),
                    (this._tTime = y),
                    !e && this.parent && Ce(this, 'onRepeat'),
                    this.vars.repeatRefresh &&
                      !h &&
                      (this.invalidate()._lock = 1),
                    (m && m !== this._time) ||
                      l !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act))
                  )
                    return this;
                  if (
                    ((v = this._dur),
                    (g = this._tDur),
                    k &&
                      ((this._lock = 2),
                      (m = x ? v : -1e-4),
                      this.render(m, !0),
                      this.vars.repeatRefresh && !h && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !l)
                  )
                    return this;
                  Xe(this, h);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  ((c = (function (t, e, n) {
                    var r;
                    if (n > e)
                      for (r = t._first; r && r._start <= n; ) {
                        if ('isPause' === r.data && r._start > e) return r;
                        r = r._next;
                      }
                    else
                      for (r = t._last; r && r._start >= n; ) {
                        if ('isPause' === r.data && r._start < e) return r;
                        r = r._prev;
                      }
                  })(this, Pt(m), Pt(r))),
                  c && (y -= r - (r = c._start))),
                (this._tTime = y),
                (this._time = r),
                (this._act = !u),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t),
                  (m = 0)),
                !m && r && !e && !a && (Ce(this, 'onStart'), this._tTime !== y))
              )
                return this;
              if (r >= m && t >= 0)
                for (o = this._first; o; ) {
                  if (
                    ((i = o._next),
                    (o._act || r >= o._start) && o._ts && c !== o)
                  ) {
                    if (o.parent !== this) return this.render(t, e, n);
                    if (
                      (o.render(
                        o._ts > 0
                          ? (r - o._start) * o._ts
                          : (o._dirty ? o.totalDuration() : o._tDur) +
                              (r - o._start) * o._ts,
                        e,
                        n,
                      ),
                      r !== this._time || (!this._ts && !l))
                    ) {
                      (c = 0), i && (y += this._zTime = -1e-8);
                      break;
                    }
                  }
                  o = i;
                }
              else {
                o = this._last;
                for (var E = t < 0 ? t : r; o; ) {
                  if (
                    ((i = o._prev), (o._act || E <= o._end) && o._ts && c !== o)
                  ) {
                    if (o.parent !== this) return this.render(t, e, n);
                    if (
                      (o.render(
                        o._ts > 0
                          ? (E - o._start) * o._ts
                          : (o._dirty ? o.totalDuration() : o._tDur) +
                              (E - o._start) * o._ts,
                        e,
                        n || (w && (o._initted || o._startAt)),
                      ),
                      r !== this._time || (!this._ts && !l))
                    ) {
                      (c = 0), i && (y += this._zTime = E ? -1e-8 : D);
                      break;
                    }
                  }
                  o = i;
                }
              }
              if (
                c &&
                !e &&
                (this.pause(),
                (c.render(r >= m ? 0 : -1e-8)._zTime = r >= m ? 1 : -1),
                this._ts)
              )
                return (this._start = d), Kt(this), this.render(t, e, n);
              this._onUpdate && !e && Ce(this, 'onUpdate', !0),
                ((y === g && this._tTime >= this.totalDuration()) ||
                  (!y && m)) &&
                  ((d !== this._start && Math.abs(u) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((t || !v) &&
                      ((y === g && this._ts > 0) || (!y && this._ts < 0)) &&
                      Yt(this, 1),
                    e ||
                      (t < 0 && !m) ||
                      (!y && !m && g) ||
                      (Ce(
                        this,
                        y === g && t >= 0 ? 'onComplete' : 'onReverseComplete',
                        !0,
                      ),
                      this._prom &&
                        !(y < g && this.timeScale() > 0) &&
                        this._prom())));
            }
            return this;
          }),
          (n.add = function (t, e) {
            var n = this;
            if ((X(e) || (e = le(this, e, t)), !(t instanceof Je))) {
              if (J(t))
                return (
                  t.forEach(function (t) {
                    return n.add(t, e);
                  }),
                  this
                );
              if (Y(t)) return this.addLabel(t, e);
              if (!V(t)) return this;
              t = fn.delayedCall(0, t);
            }
            return this !== t ? te(this, t, e) : this;
          }),
          (n.getChildren = function (t, e, n, r) {
            void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === n && (n = !0),
              void 0 === r && (r = -R);
            for (var o = [], i = this._first; i; )
              i._start >= r &&
                (i instanceof fn
                  ? e && o.push(i)
                  : (n && o.push(i),
                    t && o.push.apply(o, i.getChildren(!0, e, n)))),
                (i = i._next);
            return o;
          }),
          (n.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
              if (e[n].vars.id === t) return e[n];
          }),
          (n.remove = function (t) {
            return Y(t)
              ? this.removeLabel(t)
              : V(t)
                ? this.killTweensOf(t)
                : (t.parent === this && qt(this, t),
                  t === this._recent && (this._recent = this._last),
                  Vt(this));
          }),
          (n.totalTime = function (e, n) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = Pt(
                    Ne.time -
                      (this._ts > 0
                        ? e / this._ts
                        : (this.totalDuration() - e) / -this._ts),
                  )),
                t.prototype.totalTime.call(this, e, n),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (n.addLabel = function (t, e) {
            return (this.labels[t] = le(this, e)), this;
          }),
          (n.removeLabel = function (t) {
            return delete this.labels[t], this;
          }),
          (n.addPause = function (t, e, n) {
            var r = fn.delayedCall(0, e || pt, n);
            return (
              (r.data = 'isPause'),
              (this._hasPause = 1),
              te(this, r, le(this, t))
            );
          }),
          (n.removePause = function (t) {
            var e = this._first;
            for (t = le(this, t); e; )
              e._start === t && 'isPause' === e.data && Yt(e), (e = e._next);
          }),
          (n.killTweensOf = function (t, e, n) {
            for (var r = this.getTweensOf(t, n), o = r.length; o--; )
              en !== r[o] && r[o].kill(t, e);
            return this;
          }),
          (n.getTweensOf = function (t, e) {
            for (var n, r = [], o = me(t), i = this._first, a = X(e); i; )
              i instanceof fn
                ? Mt(i._targets, o) &&
                  (a
                    ? (!en || (i._initted && i._ts)) &&
                      i.globalTime(0) <= e &&
                      i.globalTime(i.totalDuration()) > e
                    : !e || i.isActive()) &&
                  r.push(i)
                : (n = i.getTweensOf(o, e)).length && r.push.apply(r, n),
                (i = i._next);
            return r;
          }),
          (n.tweenTo = function (t, e) {
            e = e || {};
            var n,
              r = this,
              o = le(r, t),
              i = e,
              a = i.startAt,
              s = i.onStart,
              l = i.onStartParams,
              c = i.immediateRender,
              u = fn.to(
                r,
                Dt(
                  {
                    ease: e.ease || 'none',
                    lazy: !1,
                    immediateRender: !1,
                    time: o,
                    overwrite: 'auto',
                    duration:
                      e.duration ||
                      Math.abs(
                        (o - (a && 'time' in a ? a.time : r._time)) /
                          r.timeScale(),
                      ) ||
                      D,
                    onStart: function () {
                      if ((r.pause(), !n)) {
                        var t =
                          e.duration ||
                          Math.abs(
                            (o - (a && 'time' in a ? a.time : r._time)) /
                              r.timeScale(),
                          );
                        u._dur !== t && ie(u, t, 0, 1).render(u._time, !0, !0),
                          (n = 1);
                      }
                      s && s.apply(u, l || []);
                    },
                  },
                  e,
                ),
              );
            return c ? u.render(0) : u;
          }),
          (n.tweenFromTo = function (t, e, n) {
            return this.tweenTo(e, Dt({ startAt: { time: le(this, t) } }, n));
          }),
          (n.recent = function () {
            return this._recent;
          }),
          (n.nextLabel = function (t) {
            return void 0 === t && (t = this._time), Te(this, le(this, t));
          }),
          (n.previousLabel = function (t) {
            return void 0 === t && (t = this._time), Te(this, le(this, t), 1);
          }),
          (n.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.previousLabel(this._time + D);
          }),
          (n.shiftChildren = function (t, e, n) {
            void 0 === n && (n = 0);
            for (var r, o = this._first, i = this.labels; o; )
              o._start >= n && ((o._start += t), (o._end += t)), (o = o._next);
            if (e) for (r in i) i[r] >= n && (i[r] += t);
            return Vt(this);
          }),
          (n.invalidate = function (e) {
            var n = this._first;
            for (this._lock = 0; n; ) n.invalidate(e), (n = n._next);
            return t.prototype.invalidate.call(this, e);
          }),
          (n.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, n = this._first; n; )
              (e = n._next), this.remove(n), (n = e);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              t && (this.labels = {}),
              Vt(this)
            );
          }),
          (n.totalDuration = function (t) {
            var e,
              n,
              r,
              o = 0,
              i = this,
              a = i._last,
              s = R;
            if (arguments.length)
              return i.timeScale(
                (i._repeat < 0 ? i.duration() : i.totalDuration()) /
                  (i.reversed() ? -t : t),
              );
            if (i._dirty) {
              for (r = i.parent; a; )
                (e = a._prev),
                  a._dirty && a.totalDuration(),
                  (n = a._start) > s && i._sort && a._ts && !i._lock
                    ? ((i._lock = 1), (te(i, a, n - a._delay, 1)._lock = 0))
                    : (s = n),
                  n < 0 &&
                    a._ts &&
                    ((o -= n),
                    ((!r && !i._dp) || (r && r.smoothChildTiming)) &&
                      ((i._start += n / i._ts),
                      (i._time -= n),
                      (i._tTime -= n)),
                    i.shiftChildren(-n, !1, -Infinity),
                    (s = 0)),
                  a._end > o && a._ts && (o = a._end),
                  (a = e);
              ie(i, i === b && i._time > o ? i._time : o, 1, 1), (i._dirty = 0);
            }
            return i._tDur;
          }),
          (e.updateRoot = function (t) {
            if ((b._ts && (Bt(b, Zt(t, b)), (T = Ne.frame)), Ne.frame >= xt)) {
              xt += B.autoSleep || 120;
              var e = b._first;
              if ((!e || !e._ts) && B.autoSleep && Ne._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next;
                e || Ne.sleep();
              }
            }
          }),
          e
        );
      })(Je);
      Dt(tn.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var en,
        nn,
        rn = function (t, e, n, r, o, i, a) {
          var s,
            l,
            c,
            u,
            d,
            f,
            p,
            h,
            m = new Cn(this._pt, t, e, 0, 1, bn, null, o),
            g = 0,
            v = 0;
          for (
            m.b = n,
              m.e = r,
              n += '',
              (p = ~(r += '').indexOf('random(')) && (r = ke(r)),
              i && (i((h = [n, r]), t, e), (n = h[0]), (r = h[1])),
              l = n.match(rt) || [];
            (s = rt.exec(r));

          )
            (u = s[0]),
              (d = r.substring(g, s.index)),
              c ? (c = (c + 1) % 5) : 'rgba(' === d.substr(-5) && (c = 1),
              u !== l[v++] &&
                ((f = parseFloat(l[v - 1]) || 0),
                (m._pt = {
                  _next: m._pt,
                  p: d || 1 === v ? d : ',',
                  s: f,
                  c: '=' === u.charAt(1) ? Lt(f, u) - f : parseFloat(u) - f,
                  m: c && c < 4 ? Math.round : 0,
                }),
                (g = rt.lastIndex));
          return (
            (m.c = g < r.length ? r.substring(g, r.length) : ''),
            (m.fp = a),
            (ot.test(r) || p) && (m.e = 0),
            (this._pt = m),
            m
          );
        },
        on = function (t, e, n, r, o, i, a, s, l, c) {
          V(r) && (r = r(o || 0, t, i));
          var u,
            d = t[e],
            f =
              'get' !== n
                ? n
                : V(d)
                  ? l
                    ? t[
                        e.indexOf('set') || !V(t['get' + e.substr(3)])
                          ? e
                          : 'get' + e.substr(3)
                      ](l)
                    : t[e]()
                  : d,
            p = V(d) ? (l ? mn : hn) : pn;
          if (
            (Y(r) &&
              (~r.indexOf('random(') && (r = ke(r)),
              '=' === r.charAt(1) &&
                ((u = Lt(f, r) + (fe(f) || 0)) || 0 === u) &&
                (r = u)),
            !c || f !== r || nn)
          )
            return isNaN(f * r) || '' === r
              ? (!d && !(e in t) && ut(e, r),
                rn.call(this, t, e, f, r, p, s || B.stringFilter, l))
              : ((u = new Cn(
                  this._pt,
                  t,
                  e,
                  +f || 0,
                  r - (f || 0),
                  'boolean' == typeof d ? yn : wn,
                  0,
                  p,
                )),
                l && (u.fp = l),
                a && u.modifier(a, this, t),
                (this._pt = u));
        },
        an = function (t, e, n, r, o, i) {
          var a, s, l, c;
          if (
            bt[t] &&
            !1 !==
              (a = new bt[t]()).init(
                o,
                a.rawVars
                  ? e[t]
                  : (function (t, e, n, r, o) {
                      if (
                        (V(t) && (t = cn(t, o, e, n, r)),
                        !G(t) || (t.style && t.nodeType) || J(t) || Q(t))
                      )
                        return Y(t) ? cn(t, o, e, n, r) : t;
                      var i,
                        a = {};
                      for (i in t) a[i] = cn(t[i], o, e, n, r);
                      return a;
                    })(e[t], r, o, i, n),
                n,
                r,
                i,
              ) &&
            ((n._pt = s =
              new Cn(n._pt, o, t, 0, 1, a.render, a, 0, a.priority)),
            n !== C)
          )
            for (
              l = n._ptLookup[n._targets.indexOf(o)], c = a._props.length;
              c--;

            )
              l[a._props[c]] = s;
          return a;
        },
        sn = function t(e, n, r) {
          var o,
            i,
            a,
            s,
            l,
            c,
            u,
            d,
            f,
            p,
            h,
            m,
            g,
            y = e.vars,
            _ = y.ease,
            x = y.startAt,
            k = y.immediateRender,
            E = y.lazy,
            T = y.onUpdate,
            C = y.runBackwards,
            S = y.yoyoEase,
            O = y.keyframes,
            A = y.autoRevert,
            P = e._dur,
            L = e._startAt,
            M = e._targets,
            j = e.parent,
            B = j && 'nested' === j.data ? j.vars.targets : M,
            I = 'auto' === e._overwrite && !v,
            N = e.timeline;
          if (
            (N && (!O || !_) && (_ = 'none'),
            (e._ease = Ue(_, z.ease)),
            (e._yEase = S ? Ve(Ue(!0 === S ? _ : S, z.ease)) : 0),
            S &&
              e._yoyo &&
              !e._repeat &&
              ((S = e._yEase), (e._yEase = e._ease), (e._ease = S)),
            (e._from = !N && !!y.runBackwards),
            !N || (O && !y.stagger))
          ) {
            if (
              ((m = (d = M[0] ? Ct(M[0]).harness : 0) && y[d.prop]),
              (o = Ft(y, vt)),
              L &&
                (L._zTime < 0 && L.progress(1),
                n < 0 && C && k && !A
                  ? L.render(-1, !0)
                  : L.revert(C && P ? mt : ht),
                (L._lazy = 0)),
              x)
            ) {
              if (
                (Yt(
                  (e._startAt = fn.set(
                    M,
                    Dt(
                      {
                        data: 'isStart',
                        overwrite: !1,
                        parent: j,
                        immediateRender: !0,
                        lazy: !L && W(E),
                        startAt: null,
                        delay: 0,
                        onUpdate:
                          T &&
                          function () {
                            return Ce(e, 'onUpdate');
                          },
                        stagger: 0,
                      },
                      x,
                    ),
                  )),
                ),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                n < 0 && (w || (!k && !A)) && e._startAt.revert(mt),
                k && P && n <= 0 && r <= 0)
              )
                return void (n && (e._zTime = n));
            } else if (C && P && !L)
              if (
                (n && (k = !1),
                (a = Dt(
                  {
                    overwrite: !1,
                    data: 'isFromStart',
                    lazy: k && !L && W(E),
                    immediateRender: k,
                    stagger: 0,
                    parent: j,
                  },
                  o,
                )),
                m && (a[d.prop] = m),
                Yt((e._startAt = fn.set(M, a))),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                n < 0 &&
                  (w ? e._startAt.revert(mt) : e._startAt.render(-1, !0)),
                (e._zTime = n),
                k)
              ) {
                if (!n) return;
              } else t(e._startAt, D, D);
            for (
              e._pt = e._ptCache = 0, E = (P && W(E)) || (E && !P), i = 0;
              i < M.length;
              i++
            ) {
              if (
                ((u = (l = M[i])._gsap || Tt(M)[i]._gsap),
                (e._ptLookup[i] = p = {}),
                yt[u.id] && wt.length && jt(),
                (h = B === M ? i : B.indexOf(l)),
                d &&
                  !1 !== (f = new d()).init(l, m || o, e, h, B) &&
                  ((e._pt = s =
                    new Cn(e._pt, l, f.name, 0, 1, f.render, f, 0, f.priority)),
                  f._props.forEach(function (t) {
                    p[t] = s;
                  }),
                  f.priority && (c = 1)),
                !d || m)
              )
                for (a in o)
                  bt[a] && (f = an(a, o, e, h, l, B))
                    ? f.priority && (c = 1)
                    : (p[a] = s =
                        on.call(e, l, a, 'get', o[a], h, B, 0, y.stringFilter));
              e._op && e._op[i] && e.kill(l, e._op[i]),
                I &&
                  e._pt &&
                  ((en = e),
                  b.killTweensOf(l, p, e.globalTime(n)),
                  (g = !e.parent),
                  (en = 0)),
                e._pt && E && (yt[u.id] = 1);
            }
            c && Tn(e), e._onInit && e._onInit(e);
          }
          (e._onUpdate = T),
            (e._initted = (!e._op || e._pt) && !g),
            O && n <= 0 && N.render(R, !0, !0);
        },
        ln = function (t, e, n, r) {
          var o,
            i,
            a = e.ease || r || 'power1.inOut';
          if (J(e))
            (i = n[t] || (n[t] = [])),
              e.forEach(function (t, n) {
                return i.push({ t: (n / (e.length - 1)) * 100, v: t, e: a });
              });
          else
            for (o in e)
              (i = n[o] || (n[o] = [])),
                'ease' === o || i.push({ t: parseFloat(t), v: e[o], e: a });
        },
        cn = function (t, e, n, r, o) {
          return V(t)
            ? t.call(e, n, r, o)
            : Y(t) && ~t.indexOf('random(')
              ? ke(t)
              : t;
        },
        un = Et + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
        dn = {};
      Ot(un + ',id,stagger,delay,duration,paused,scrollTrigger', function (t) {
        return (dn[t] = 1);
      });
      var fn = (function (t) {
        function e(e, n, r, o) {
          var i;
          'number' == typeof n && ((r.duration = n), (n = r), (r = null));
          var a,
            s,
            l,
            c,
            u,
            d,
            f,
            p,
            h = (i = t.call(this, o ? n : $t(n)) || this).vars,
            g = h.duration,
            w = h.delay,
            y = h.immediateRender,
            _ = h.stagger,
            x = h.overwrite,
            k = h.keyframes,
            E = h.defaults,
            T = h.scrollTrigger,
            C = h.yoyoEase,
            S = n.parent || b,
            O = (J(e) || Q(e) ? X(e[0]) : 'length' in n) ? [e] : me(e);
          if (
            ((i._targets = O.length
              ? Tt(O)
              : dt(
                  'GSAP target ' + e + ' not found. https://gsap.com',
                  !B.nullTargetWarn,
                ) || []),
            (i._ptLookup = []),
            (i._overwrite = x),
            k || _ || K(g) || K(w))
          ) {
            if (
              ((n = i.vars),
              (a = i.timeline =
                new tn({
                  data: 'nested',
                  defaults: E || {},
                  targets: S && 'nested' === S.data ? S.vars.targets : O,
                })).kill(),
              (a.parent = a._dp = m(i)),
              (a._start = 0),
              _ || K(g) || K(w))
            ) {
              if (((c = O.length), (f = _ && we(_)), G(_)))
                for (u in _) ~un.indexOf(u) && (p || (p = {}), (p[u] = _[u]));
              for (s = 0; s < c; s++)
                ((l = Ft(n, dn)).stagger = 0),
                  C && (l.yoyoEase = C),
                  p && It(l, p),
                  (d = O[s]),
                  (l.duration = +cn(g, m(i), s, d, O)),
                  (l.delay = (+cn(w, m(i), s, d, O) || 0) - i._delay),
                  !_ &&
                    1 === c &&
                    l.delay &&
                    ((i._delay = w = l.delay), (i._start += w), (l.delay = 0)),
                  a.to(d, l, f ? f(s, d, O) : 0),
                  (a._ease = $e.none);
              a.duration() ? (g = w = 0) : (i.timeline = 0);
            } else if (k) {
              $t(Dt(a.vars.defaults, { ease: 'none' })),
                (a._ease = Ue(k.ease || n.ease || 'none'));
              var A,
                P,
                L,
                M = 0;
              if (J(k))
                k.forEach(function (t) {
                  return a.to(O, t, '>');
                }),
                  a.duration();
              else {
                for (u in ((l = {}), k))
                  'ease' === u ||
                    'easeEach' === u ||
                    ln(u, k[u], l, k.easeEach);
                for (u in l)
                  for (
                    A = l[u].sort(function (t, e) {
                      return t.t - e.t;
                    }),
                      M = 0,
                      s = 0;
                    s < A.length;
                    s++
                  )
                    ((L = {
                      ease: (P = A[s]).e,
                      duration: ((P.t - (s ? A[s - 1].t : 0)) / 100) * g,
                    })[u] = P.v),
                      a.to(O, L, M),
                      (M += L.duration);
                a.duration() < g && a.to({}, { duration: g - a.duration() });
              }
            }
            g || i.duration((g = a.duration()));
          } else i.timeline = 0;
          return (
            !0 !== x || v || ((en = m(i)), b.killTweensOf(O), (en = 0)),
            te(S, m(i), r),
            n.reversed && i.reverse(),
            n.paused && i.paused(!0),
            (y ||
              (!g &&
                !k &&
                i._start === Pt(S._time) &&
                W(y) &&
                Ut(m(i)) &&
                'nested' !== S.data)) &&
              ((i._tTime = -1e-8), i.render(Math.max(0, -w) || 0)),
            T && ee(m(i), T),
            i
          );
        }
        g(e, t);
        var n = e.prototype;
        return (
          (n.render = function (t, e, n) {
            var r,
              o,
              i,
              a,
              s,
              l,
              c,
              u,
              d,
              f = this._time,
              p = this._tDur,
              h = this._dur,
              m = t < 0,
              g = t > p - D && !m ? p : t < D ? 0 : t;
            if (h) {
              if (
                g !== this._tTime ||
                !t ||
                n ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== m) ||
                this._lazy
              ) {
                if (((r = g), (u = this.timeline), this._repeat)) {
                  if (((a = h + this._rDelay), this._repeat < -1 && m))
                    return this.totalTime(100 * a + t, e, n);
                  if (
                    ((r = Pt(g % a)),
                    g === p
                      ? ((i = this._repeat), (r = h))
                      : (i = ~~(s = Pt(g / a))) && i === s
                        ? ((r = h), i--)
                        : r > h && (r = h),
                    (l = this._yoyo && 1 & i) &&
                      ((d = this._yEase), (r = h - r)),
                    (s = Wt(this._tTime, a)),
                    r === f && !n && this._initted && i === s)
                  )
                    return (this._tTime = g), this;
                  i !== s &&
                    (u && this._yEase && Xe(u, l),
                    this.vars.repeatRefresh &&
                      !l &&
                      !this._lock &&
                      r !== a &&
                      this._initted &&
                      ((this._lock = n = 1),
                      (this.render(Pt(a * i), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (ne(this, m ? t : r, n, e, g))
                    return (this._tTime = 0), this;
                  if (
                    !(
                      f === this._time ||
                      (n && this.vars.repeatRefresh && i !== s)
                    )
                  )
                    return this;
                  if (h !== this._dur) return this.render(t, e, n);
                }
                if (
                  ((this._tTime = g),
                  (this._time = r),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = c = (d || this._ease)(r / h)),
                  this._from && (this.ratio = c = 1 - c),
                  r &&
                    !f &&
                    !e &&
                    !i &&
                    (Ce(this, 'onStart'), this._tTime !== g))
                )
                  return this;
                for (o = this._pt; o; ) o.r(c, o.d), (o = o._next);
                (u &&
                  u.render(
                    t < 0 ? t : u._dur * u._ease(r / this._dur),
                    e,
                    n,
                  )) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (m && Xt(this, t, 0, n), Ce(this, 'onUpdate')),
                  this._repeat &&
                    i !== s &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    Ce(this, 'onRepeat'),
                  (g !== this._tDur && g) ||
                    this._tTime !== g ||
                    (m && !this._onUpdate && Xt(this, t, 0, !0),
                    (t || !h) &&
                      ((g === this._tDur && this._ts > 0) ||
                        (!g && this._ts < 0)) &&
                      Yt(this, 1),
                    e ||
                      (m && !f) ||
                      !(g || f || l) ||
                      (Ce(
                        this,
                        g === p ? 'onComplete' : 'onReverseComplete',
                        !0,
                      ),
                      this._prom &&
                        !(g < p && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else
              !(function (t, e, n, r) {
                var o,
                  i,
                  a,
                  s = t.ratio,
                  l =
                    e < 0 ||
                    (!e &&
                      ((!t._start && re(t) && (t._initted || !oe(t))) ||
                        ((t._ts < 0 || t._dp._ts < 0) && !oe(t))))
                      ? 0
                      : 1,
                  c = t._rDelay,
                  u = 0;
                if (
                  (c &&
                    t._repeat &&
                    ((u = de(0, t._tDur, e)),
                    (i = Wt(u, c)),
                    t._yoyo && 1 & i && (l = 1 - l),
                    i !== Wt(t._tTime, c) &&
                      ((s = 1 - l),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  l !== s || w || r || t._zTime === D || (!e && t._zTime))
                ) {
                  if (!t._initted && ne(t, e, r, n, u)) return;
                  for (
                    a = t._zTime,
                      t._zTime = e || (n ? D : 0),
                      n || (n = e && !a),
                      t.ratio = l,
                      t._from && (l = 1 - l),
                      t._time = 0,
                      t._tTime = u,
                      o = t._pt;
                    o;

                  )
                    o.r(l, o.d), (o = o._next);
                  e < 0 && Xt(t, e, 0, !0),
                    t._onUpdate && !n && Ce(t, 'onUpdate'),
                    u && t._repeat && !n && t.parent && Ce(t, 'onRepeat'),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === l &&
                      (l && Yt(t, 1),
                      n ||
                        w ||
                        (Ce(t, l ? 'onComplete' : 'onReverseComplete', !0),
                        t._prom && t._prom()));
                } else t._zTime || (t._zTime = e);
              })(this, t, e, n);
            return this;
          }),
          (n.targets = function () {
            return this._targets;
          }),
          (n.invalidate = function (e) {
            return (
              (!e || !this.vars.runBackwards) && (this._startAt = 0),
              (this._pt =
                this._op =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(e),
              t.prototype.invalidate.call(this, e)
            );
          }),
          (n.resetTo = function (t, e, n, r, o) {
            S || Ne.wake(), this._ts || this.play();
            var i = Math.min(
              this._dur,
              (this._dp._time - this._start) * this._ts,
            );
            return (
              this._initted || sn(this, i),
              (function (t, e, n, r, o, i, a, s) {
                var l,
                  c,
                  u,
                  d,
                  f = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
                if (!f)
                  for (
                    f = t._ptCache[e] = [],
                      u = t._ptLookup,
                      d = t._targets.length;
                    d--;

                  ) {
                    if ((l = u[d][e]) && l.d && l.d._pt)
                      for (l = l.d._pt; l && l.p !== e && l.fp !== e; )
                        l = l._next;
                    if (!l)
                      return (
                        (nn = 1),
                        (t.vars[e] = '+=0'),
                        sn(t, a),
                        (nn = 0),
                        s ? dt(e + ' not eligible for reset') : 1
                      );
                    f.push(l);
                  }
                for (d = f.length; d--; )
                  ((l = (c = f[d])._pt || c).s =
                    (!r && 0 !== r) || o ? l.s + (r || 0) + i * l.c : r),
                    (l.c = n - l.s),
                    c.e && (c.e = At(n) + fe(c.e)),
                    c.b && (c.b = l.s + fe(c.b));
              })(this, t, e, n, r, this._ease(i / this._dur), i, o)
                ? this.resetTo(t, e, n, r, 1)
                : (Qt(this, 0),
                  this.parent ||
                    Ht(
                      this._dp,
                      this,
                      '_first',
                      '_last',
                      this._dp._sort ? '_start' : 0,
                    ),
                  this.render(0))
            );
          }),
          (n.kill = function (t, e) {
            if ((void 0 === e && (e = 'all'), !(t || (e && 'all' !== e))))
              return (
                (this._lazy = this._pt = 0),
                this.parent
                  ? Se(this)
                  : this.scrollTrigger && this.scrollTrigger.kill(!!w),
                this
              );
            if (this.timeline) {
              var n = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(t, e, en && !0 !== en.vars.overwrite)
                  ._first || Se(this),
                this.parent &&
                  n !== this.timeline.totalDuration() &&
                  ie(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                this
              );
            }
            var r,
              o,
              i,
              a,
              s,
              l,
              c,
              u = this._targets,
              d = t ? me(t) : u,
              f = this._ptLookup,
              p = this._pt;
            if (
              (!e || 'all' === e) &&
              (function (t, e) {
                for (
                  var n = t.length, r = n === e.length;
                  r && n-- && t[n] === e[n];

                );
                return n < 0;
              })(u, d)
            )
              return 'all' === e && (this._pt = 0), Se(this);
            for (
              r = this._op = this._op || [],
                'all' !== e &&
                  (Y(e) &&
                    ((s = {}),
                    Ot(e, function (t) {
                      return (s[t] = 1);
                    }),
                    (e = s)),
                  (e = (function (t, e) {
                    var n,
                      r,
                      o,
                      i,
                      a = t[0] ? Ct(t[0]).harness : 0,
                      s = a && a.aliases;
                    if (!s) return e;
                    for (r in ((n = It({}, e)), s))
                      if ((r in n))
                        for (o = (i = s[r].split(',')).length; o--; )
                          n[i[o]] = n[r];
                    return n;
                  })(u, e))),
                c = u.length;
              c--;

            )
              if (~d.indexOf(u[c]))
                for (s in ((o = f[c]),
                'all' === e
                  ? ((r[c] = e), (a = o), (i = {}))
                  : ((i = r[c] = r[c] || {}), (a = e)),
                a))
                  (l = o && o[s]) &&
                    (('kill' in l.d && !0 !== l.d.kill(s)) ||
                      qt(this, l, '_pt'),
                    delete o[s]),
                    'all' !== i && (i[s] = 1);
            return this._initted && !this._pt && p && Se(this), this;
          }),
          (e.to = function (t, n) {
            return new e(t, n, arguments[2]);
          }),
          (e.from = function (t, e) {
            return ce(1, arguments);
          }),
          (e.delayedCall = function (t, n, r, o) {
            return new e(n, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: n,
              onReverseComplete: n,
              onCompleteParams: r,
              onReverseCompleteParams: r,
              callbackScope: o,
            });
          }),
          (e.fromTo = function (t, e, n) {
            return ce(2, arguments);
          }),
          (e.set = function (t, n) {
            return (
              (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(t, n)
            );
          }),
          (e.killTweensOf = function (t, e, n) {
            return b.killTweensOf(t, e, n);
          }),
          e
        );
      })(Je);
      Dt(fn.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        Ot('staggerTo,staggerFrom,staggerFromTo', function (t) {
          fn[t] = function () {
            var e = new tn(),
              n = pe.call(arguments, 0);
            return (
              n.splice('staggerFromTo' === t ? 5 : 4, 0, 0), e[t].apply(e, n)
            );
          };
        });
      var pn = function (t, e, n) {
          return (t[e] = n);
        },
        hn = function (t, e, n) {
          return t[e](n);
        },
        mn = function (t, e, n, r) {
          return t[e](r.fp, n);
        },
        gn = function (t, e, n) {
          return t.setAttribute(e, n);
        },
        vn = function (t, e) {
          return V(t[e]) ? hn : U(t[e]) && t.setAttribute ? gn : pn;
        },
        wn = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
        },
        yn = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        bn = function (t, e) {
          var n = e._pt,
            r = '';
          if (!t && e.b) r = e.b;
          else if (1 === t && e.e) r = e.e;
          else {
            for (; n; )
              (r =
                n.p +
                (n.m
                  ? n.m(n.s + n.c * t)
                  : Math.round(1e4 * (n.s + n.c * t)) / 1e4) +
                r),
                (n = n._next);
            r += e.c;
          }
          e.set(e.t, e.p, r, e);
        },
        _n = function (t, e) {
          for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
        },
        xn = function (t, e, n, r) {
          for (var o, i = this._pt; i; )
            (o = i._next), i.p === r && i.modifier(t, e, n), (i = o);
        },
        kn = function (t) {
          for (var e, n, r = this._pt; r; )
            (n = r._next),
              (r.p === t && !r.op) || r.op === t
                ? qt(this, r, '_pt')
                : r.dep || (e = 1),
              (r = n);
          return !e;
        },
        En = function (t, e, n, r) {
          r.mSet(t, e, r.m.call(r.tween, n, r.mt), r);
        },
        Tn = function (t) {
          for (var e, n, r, o, i = t._pt; i; ) {
            for (e = i._next, n = r; n && n.pr > i.pr; ) n = n._next;
            (i._prev = n ? n._prev : o) ? (i._prev._next = i) : (r = i),
              (i._next = n) ? (n._prev = i) : (o = i),
              (i = e);
          }
          t._pt = r;
        },
        Cn = (function () {
          function t(t, e, n, r, o, i, a, s, l) {
            (this.t = e),
              (this.s = r),
              (this.c = o),
              (this.p = n),
              (this.r = i || wn),
              (this.d = a || this),
              (this.set = s || pn),
              (this.pr = l || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, n) {
              (this.mSet = this.mSet || this.set),
                (this.set = En),
                (this.m = t),
                (this.mt = n),
                (this.tween = e);
            }),
            t
          );
        })();
      Ot(
        Et +
          'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
        function (t) {
          return (vt[t] = 1);
        },
      ),
        (st.TweenMax = st.TweenLite = fn),
        (st.TimelineLite = st.TimelineMax = tn),
        (b = new tn({
          sortChildren: !1,
          defaults: z,
          autoRemoveChildren: !0,
          id: 'root',
          smoothChildTiming: !0,
        })),
        (B.stringFilter = Ie);
      var Sn = [],
        On = {},
        An = [],
        Pn = 0,
        Ln = 0,
        Mn = function (t) {
          return (On[t] || An).map(function (t) {
            return t();
          });
        },
        jn = function () {
          var t = Date.now(),
            e = [];
          t - Pn > 2 &&
            (Mn('matchMediaInit'),
            Sn.forEach(function (t) {
              var n,
                r,
                o,
                i,
                a = t.queries,
                s = t.conditions;
              for (r in a)
                (n = _.matchMedia(a[r]).matches) && (o = 1),
                  n !== s[r] && ((s[r] = n), (i = 1));
              i && (t.revert(), o && e.push(t));
            }),
            Mn('matchMediaRevert'),
            e.forEach(function (t) {
              return t.onMatch(t, function (e) {
                return t.add(null, e);
              });
            }),
            (Pn = t),
            Mn('matchMedia'));
        },
        Bn = (function () {
          function t(t, e) {
            (this.selector = e && ge(e)),
              (this.data = []),
              (this._r = []),
              (this.isReverted = !1),
              (this.id = Ln++),
              t && this.add(t);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, n) {
              V(t) && ((n = e), (e = t), (t = V));
              var r = this,
                o = function () {
                  var t,
                    o = y,
                    i = r.selector;
                  return (
                    o && o !== r && o.data.push(r),
                    n && (r.selector = ge(n)),
                    (y = r),
                    (t = e.apply(r, arguments)),
                    V(t) && r._r.push(t),
                    (y = o),
                    (r.selector = i),
                    (r.isReverted = !1),
                    t
                  );
                };
              return (
                (r.last = o),
                t === V
                  ? o(r, function (t) {
                      return r.add(null, t);
                    })
                  : t
                    ? (r[t] = o)
                    : o
              );
            }),
            (e.ignore = function (t) {
              var e = y;
              (y = null), t(this), (y = e);
            }),
            (e.getTweens = function () {
              var e = [];
              return (
                this.data.forEach(function (n) {
                  return n instanceof t
                    ? e.push.apply(e, n.getTweens())
                    : n instanceof fn &&
                        !(n.parent && 'nested' === n.parent.data) &&
                        e.push(n);
                }),
                e
              );
            }),
            (e.clear = function () {
              this._r.length = this.data.length = 0;
            }),
            (e.kill = function (t, e) {
              var n = this;
              if (
                (t
                  ? (function () {
                      for (var e, r = n.getTweens(), o = n.data.length; o--; )
                        'isFlip' === (e = n.data[o]).data &&
                          (e.revert(),
                          e.getChildren(!0, !0, !1).forEach(function (t) {
                            return r.splice(r.indexOf(t), 1);
                          }));
                      for (
                        r
                          .map(function (t) {
                            return {
                              g:
                                t._dur ||
                                t._delay ||
                                (t._sat && !t._sat.vars.immediateRender)
                                  ? t.globalTime(0)
                                  : -1 / 0,
                              t,
                            };
                          })
                          .sort(function (t, e) {
                            return e.g - t.g || -1 / 0;
                          })
                          .forEach(function (e) {
                            return e.t.revert(t);
                          }),
                          o = n.data.length;
                        o--;

                      )
                        (e = n.data[o]) instanceof tn
                          ? 'nested' !== e.data &&
                            (e.scrollTrigger && e.scrollTrigger.revert(),
                            e.kill())
                          : !(e instanceof fn) && e.revert && e.revert(t);
                      n._r.forEach(function (e) {
                        return e(t, n);
                      }),
                        (n.isReverted = !0);
                    })()
                  : this.data.forEach(function (t) {
                      return t.kill && t.kill();
                    }),
                this.clear(),
                e)
              )
                for (var r = Sn.length; r--; )
                  Sn[r].id === this.id && Sn.splice(r, 1);
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            t
          );
        })(),
        zn = (function () {
          function t(t) {
            (this.contexts = []), (this.scope = t), y && y.data.push(this);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, n) {
              G(t) || (t = { matches: t });
              var r,
                o,
                i,
                a = new Bn(0, n || this.scope),
                s = (a.conditions = {});
              for (o in (y && !a.selector && (a.selector = y.selector),
              this.contexts.push(a),
              (e = a.add('onMatch', e)),
              (a.queries = t),
              t))
                'all' === o
                  ? (i = 1)
                  : (r = _.matchMedia(t[o])) &&
                    (Sn.indexOf(a) < 0 && Sn.push(a),
                    (s[o] = r.matches) && (i = 1),
                    r.addListener
                      ? r.addListener(jn)
                      : r.addEventListener('change', jn));
              return (
                i &&
                  e(a, function (t) {
                    return a.add(null, t);
                  }),
                this
              );
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            (e.kill = function (t) {
              this.contexts.forEach(function (e) {
                return e.kill(t, !0);
              });
            }),
            t
          );
        })(),
        Rn = {
          registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            e.forEach(function (t) {
              return Ae(t);
            });
          },
          timeline: function (t) {
            return new tn(t);
          },
          getTweensOf: function (t, e) {
            return b.getTweensOf(t, e);
          },
          getProperty: function (t, e, n, r) {
            Y(t) && (t = me(t)[0]);
            var o = Ct(t || {}).get,
              i = n ? Rt : zt;
            return (
              'native' === n && (n = ''),
              t
                ? e
                  ? i(((bt[e] && bt[e].get) || o)(t, e, n, r))
                  : function (e, n, r) {
                      return i(((bt[e] && bt[e].get) || o)(t, e, n, r));
                    }
                : t
            );
          },
          quickSetter: function (t, e, n) {
            if ((t = me(t)).length > 1) {
              var r = t.map(function (t) {
                  return Nn.quickSetter(t, e, n);
                }),
                o = r.length;
              return function (t) {
                for (var e = o; e--; ) r[e](t);
              };
            }
            t = t[0] || {};
            var i = bt[e],
              a = Ct(t),
              s = (a.harness && (a.harness.aliases || {})[e]) || e,
              l = i
                ? function (e) {
                    var r = new i();
                    (C._pt = 0),
                      r.init(t, n ? e + n : e, C, 0, [t]),
                      r.render(1, r),
                      C._pt && _n(1, C);
                  }
                : a.set(t, s);
            return i
              ? l
              : function (e) {
                  return l(t, s, n ? e + n : e, a, 1);
                };
          },
          quickTo: function (t, e, n) {
            var r,
              o = Nn.to(
                t,
                Dt(
                  (((r = {})[e] = '+=0.1'),
                  (r.paused = !0),
                  (r.stagger = 0),
                  r),
                  n || {},
                ),
              ),
              i = function (t, n, r) {
                return o.resetTo(e, t, n, r);
              };
            return (i.tween = o), i;
          },
          isTweening: function (t) {
            return b.getTweensOf(t, !0).length > 0;
          },
          defaults: function (t) {
            return t && t.ease && (t.ease = Ue(t.ease, z.ease)), Nt(z, t || {});
          },
          config: function (t) {
            return Nt(B, t || {});
          },
          registerEffect: function (t) {
            var e = t.name,
              n = t.effect,
              r = t.plugins,
              o = t.defaults,
              i = t.extendTimeline;
            (r || '').split(',').forEach(function (t) {
              return (
                t &&
                !bt[t] &&
                !st[t] &&
                dt(e + ' effect requires ' + t + ' plugin.')
              );
            }),
              (_t[e] = function (t, e, r) {
                return n(me(t), Dt(e || {}, o), r);
              }),
              i &&
                (tn.prototype[e] = function (t, n, r) {
                  return this.add(_t[e](t, G(n) ? n : (r = n) && {}, this), r);
                });
          },
          registerEase: function (t, e) {
            $e[t] = Ue(e);
          },
          parseEase: function (t, e) {
            return arguments.length ? Ue(t, e) : $e;
          },
          getById: function (t) {
            return b.getById(t);
          },
          exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var n,
              r,
              o = new tn(t);
            for (
              o.smoothChildTiming = W(t.smoothChildTiming),
                b.remove(o),
                o._dp = 0,
                o._time = o._tTime = b._time,
                n = b._first;
              n;

            )
              (r = n._next),
                (!e &&
                  !n._dur &&
                  n instanceof fn &&
                  n.vars.onComplete === n._targets[0]) ||
                  te(o, n, n._start - n._delay),
                (n = r);
            return te(b, o, 0), o;
          },
          context: function (t, e) {
            return t ? new Bn(t, e) : y;
          },
          matchMedia: function (t) {
            return new zn(t);
          },
          matchMediaRefresh: function () {
            return (
              Sn.forEach(function (t) {
                var e,
                  n,
                  r = t.conditions;
                for (n in r) r[n] && ((r[n] = !1), (e = 1));
                e && t.revert();
              }) || jn()
            );
          },
          addEventListener: function (t, e) {
            var n = On[t] || (On[t] = []);
            ~n.indexOf(e) || n.push(e);
          },
          removeEventListener: function (t, e) {
            var n = On[t],
              r = n && n.indexOf(e);
            r >= 0 && n.splice(r, 1);
          },
          utils: {
            wrap: function t(e, n, r) {
              var o = n - e;
              return J(e)
                ? xe(e, t(0, e.length), n)
                : ue(r, function (t) {
                    return ((o + ((t - e) % o)) % o) + e;
                  });
            },
            wrapYoyo: function t(e, n, r) {
              var o = n - e,
                i = 2 * o;
              return J(e)
                ? xe(e, t(0, e.length - 1), n)
                : ue(r, function (t) {
                    return (
                      e + ((t = (i + ((t - e) % i)) % i || 0) > o ? i - t : t)
                    );
                  });
            },
            distribute: we,
            random: _e,
            snap: be,
            normalize: function (t, e, n) {
              return Ee(t, e, 0, 1, n);
            },
            getUnit: fe,
            clamp: function (t, e, n) {
              return ue(n, function (n) {
                return de(t, e, n);
              });
            },
            splitColor: je,
            toArray: me,
            selector: ge,
            mapRange: Ee,
            pipe: function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              return function (t) {
                return e.reduce(function (t, e) {
                  return e(t);
                }, t);
              };
            },
            unitize: function (t, e) {
              return function (n) {
                return t(parseFloat(n)) + (e || fe(n));
              };
            },
            interpolate: function t(e, n, r, o) {
              var i = isNaN(e + n)
                ? 0
                : function (t) {
                    return (1 - t) * e + t * n;
                  };
              if (!i) {
                var a,
                  s,
                  l,
                  c,
                  u,
                  d = Y(e),
                  f = {};
                if ((!0 === r && (o = 1) && (r = null), d))
                  (e = { p: e }), (n = { p: n });
                else if (J(e) && !J(n)) {
                  for (l = [], c = e.length, u = c - 2, s = 1; s < c; s++)
                    l.push(t(e[s - 1], e[s]));
                  c--,
                    (i = function (t) {
                      t *= c;
                      var e = Math.min(u, ~~t);
                      return l[e](t - e);
                    }),
                    (r = n);
                } else o || (e = It(J(e) ? [] : {}, e));
                if (!l) {
                  for (a in n) on.call(f, e, a, 'get', n[a]);
                  i = function (t) {
                    return _n(t, f) || (d ? e.p : e);
                  };
                }
              }
              return ue(r, i);
            },
            shuffle: ve,
          },
          install: ct,
          effects: _t,
          ticker: Ne,
          updateRoot: tn.updateRoot,
          plugins: bt,
          globalTimeline: b,
          core: {
            PropTween: Cn,
            globals: ft,
            Tween: fn,
            Timeline: tn,
            Animation: Je,
            getCache: Ct,
            _removeLinkedListItem: qt,
            reverting: function () {
              return w;
            },
            context: function (t) {
              return t && y && (y.data.push(t), (t._ctx = y)), y;
            },
            suppressOverwrites: function (t) {
              return (v = t);
            },
          },
        };
      Ot('to,from,fromTo,delayedCall,set,killTweensOf', function (t) {
        return (Rn[t] = fn[t]);
      }),
        Ne.add(tn.updateRoot),
        (C = Rn.to({}, { duration: 0 }));
      var Dn = function (t, e) {
          for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
            n = n._next;
          return n;
        },
        In = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, n, r) {
              r._onInit = function (t) {
                var r, o;
                if (
                  (Y(n) &&
                    ((r = {}),
                    Ot(n, function (t) {
                      return (r[t] = 1);
                    }),
                    (n = r)),
                  e)
                ) {
                  for (o in ((r = {}), n)) r[o] = e(n[o]);
                  n = r;
                }
                !(function (t, e) {
                  var n,
                    r,
                    o,
                    i = t._targets;
                  for (n in e)
                    for (r = i.length; r--; )
                      (o = t._ptLookup[r][n]) &&
                        (o = o.d) &&
                        (o._pt && (o = Dn(o, n)),
                        o && o.modifier && o.modifier(e[n], t, i[r], n));
                })(t, n);
              };
            },
          };
        },
        Nn =
          Rn.registerPlugin(
            {
              name: 'attr',
              init: function (t, e, n, r, o) {
                var i, a, s;
                for (i in ((this.tween = n), e))
                  (s = t.getAttribute(i) || ''),
                    ((a = this.add(
                      t,
                      'setAttribute',
                      (s || 0) + '',
                      e[i],
                      r,
                      o,
                      0,
                      0,
                      i,
                    )).op = i),
                    (a.b = s),
                    this._props.push(i);
              },
              render: function (t, e) {
                for (var n = e._pt; n; )
                  w ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), (n = n._next);
              },
            },
            {
              name: 'endArray',
              init: function (t, e) {
                for (var n = e.length; n--; )
                  this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1);
              },
            },
            In('roundProps', ye),
            In('modifiers'),
            In('snap', be),
          ) || Rn;
      (fn.version = tn.version = Nn.version = '3.12.7'),
        (E = 1),
        Z() && Fe(),
        $e.Power0,
        $e.Power1,
        $e.Power2,
        $e.Power3,
        $e.Power4,
        $e.Linear,
        $e.Quad,
        $e.Cubic,
        $e.Quart,
        $e.Quint,
        $e.Strong,
        $e.Elastic,
        $e.Back,
        $e.SteppedEase,
        $e.Bounce,
        $e.Sine,
        $e.Expo,
        $e.Circ;
      var Fn,
        $n,
        Hn,
        qn,
        Yn,
        Vn,
        Xn,
        Un,
        Gn = {},
        Wn = 180 / Math.PI,
        Zn = Math.PI / 180,
        Kn = Math.atan2,
        Qn = /([A-Z])/g,
        Jn = /(left|right|width|margin|padding|x)/i,
        tr = /[\s,\(]\S/,
        er = {
          autoAlpha: 'opacity,visibility',
          scale: 'scaleX,scaleY',
          alpha: 'opacity',
        },
        nr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e,
          );
        },
        rr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e,
          );
        },
        or = function (t, e) {
          return e.set(
            e.t,
            e.p,
            t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
            e,
          );
        },
        ir = function (t, e) {
          var n = e.s + e.c * t;
          e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
        },
        ar = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e);
        },
        sr = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        },
        lr = function (t, e, n) {
          return (t.style[e] = n);
        },
        cr = function (t, e, n) {
          return t.style.setProperty(e, n);
        },
        ur = function (t, e, n) {
          return (t._gsap[e] = n);
        },
        dr = function (t, e, n) {
          return (t._gsap.scaleX = t._gsap.scaleY = n);
        },
        fr = function (t, e, n, r, o) {
          var i = t._gsap;
          (i.scaleX = i.scaleY = n), i.renderTransform(o, i);
        },
        pr = function (t, e, n, r, o) {
          var i = t._gsap;
          (i[e] = n), i.renderTransform(o, i);
        },
        hr = 'transform',
        mr = hr + 'Origin',
        gr = function t(e, n) {
          var r = this,
            o = this.target,
            i = o.style,
            a = o._gsap;
          if (e in Gn && i) {
            if (((this.tfm = this.tfm || {}), 'transform' === e))
              return er.transform.split(',').forEach(function (e) {
                return t.call(r, e, n);
              });
            if (
              (~(e = er[e] || e).indexOf(',')
                ? e.split(',').forEach(function (t) {
                    return (r.tfm[t] = Br(o, t));
                  })
                : (this.tfm[e] = a.x ? a[e] : Br(o, e)),
              e === mr && (this.tfm.zOrigin = a.zOrigin),
              this.props.indexOf(hr) >= 0)
            )
              return;
            a.svg &&
              ((this.svgo = o.getAttribute('data-svg-origin')),
              this.props.push(mr, n, '')),
              (e = hr);
          }
          (i || n) && this.props.push(e, n, i[e]);
        },
        vr = function (t) {
          t.translate &&
            (t.removeProperty('translate'),
            t.removeProperty('scale'),
            t.removeProperty('rotate'));
        },
        wr = function () {
          var t,
            e,
            n = this.props,
            r = this.target,
            o = r.style,
            i = r._gsap;
          for (t = 0; t < n.length; t += 3)
            n[t + 1]
              ? 2 === n[t + 1]
                ? r[n[t]](n[t + 2])
                : (r[n[t]] = n[t + 2])
              : n[t + 2]
                ? (o[n[t]] = n[t + 2])
                : o.removeProperty(
                    '--' === n[t].substr(0, 2)
                      ? n[t]
                      : n[t].replace(Qn, '-$1').toLowerCase(),
                  );
          if (this.tfm) {
            for (e in this.tfm) i[e] = this.tfm[e];
            i.svg &&
              (i.renderTransform(),
              r.setAttribute('data-svg-origin', this.svgo || '')),
              ((t = Xn()) && t.isStart) ||
                o[hr] ||
                (vr(o),
                i.zOrigin &&
                  o[mr] &&
                  ((o[mr] += ' ' + i.zOrigin + 'px'),
                  (i.zOrigin = 0),
                  i.renderTransform()),
                (i.uncache = 1));
          }
        },
        yr = function (t, e) {
          var n = { target: t, props: [], revert: wr, save: gr };
          return (
            t._gsap || Nn.core.getCache(t),
            e &&
              t.style &&
              t.nodeType &&
              e.split(',').forEach(function (t) {
                return n.save(t);
              }),
            n
          );
        },
        br = function (t, e) {
          var n = $n.createElementNS
            ? $n.createElementNS(
                (e || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
                t,
              )
            : $n.createElement(t);
          return n && n.style ? n : $n.createElement(t);
        },
        _r = function t(e, n, r) {
          var o = getComputedStyle(e);
          return (
            o[n] ||
            o.getPropertyValue(n.replace(Qn, '-$1').toLowerCase()) ||
            o.getPropertyValue(n) ||
            (!r && t(e, kr(n) || n, 1)) ||
            ''
          );
        },
        xr = 'O,Moz,ms,Ms,Webkit'.split(','),
        kr = function (t, e, n) {
          var r = (e || Yn).style,
            o = 5;
          if (t in r && !n) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1);
            o-- && !(xr[o] + t in r);

          );
          return o < 0 ? null : (3 === o ? 'ms' : o >= 0 ? xr[o] : '') + t;
        },
        Er = function () {
          'undefined' != typeof window &&
            window.document &&
            ((Fn = window),
            ($n = Fn.document),
            (Hn = $n.documentElement),
            (Yn = br('div') || { style: {} }),
            br('div'),
            (hr = kr(hr)),
            (mr = hr + 'Origin'),
            (Yn.style.cssText =
              'border-width:0;line-height:0;position:absolute;padding:0'),
            (Un = !!kr('perspective')),
            (Xn = Nn.core.reverting),
            (qn = 1));
        },
        Tr = function (t) {
          var e,
            n = t.ownerSVGElement,
            r = br(
              'svg',
              (n && n.getAttribute('xmlns')) || 'http://www.w3.org/2000/svg',
            ),
            o = t.cloneNode(!0);
          (o.style.display = 'block'), r.appendChild(o), Hn.appendChild(r);
          try {
            e = o.getBBox();
          } catch (t) {}
          return r.removeChild(o), Hn.removeChild(r), e;
        },
        Cr = function (t, e) {
          for (var n = e.length; n--; )
            if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
        },
        Sr = function (t) {
          var e, n;
          try {
            e = t.getBBox();
          } catch (r) {
            (e = Tr(t)), (n = 1);
          }
          return (
            (e && (e.width || e.height)) || n || (e = Tr(t)),
            !e || e.width || e.x || e.y
              ? e
              : {
                  x: +Cr(t, ['x', 'cx', 'x1']) || 0,
                  y: +Cr(t, ['y', 'cy', 'y1']) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        Or = function (t) {
          return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Sr(t));
        },
        Ar = function (t, e) {
          if (e) {
            var n,
              r = t.style;
            e in Gn && e !== mr && (e = hr),
              r.removeProperty
                ? (('ms' !== (n = e.substr(0, 2)) &&
                    'webkit' !== e.substr(0, 6)) ||
                    (e = '-' + e),
                  r.removeProperty(
                    '--' === n ? e : e.replace(Qn, '-$1').toLowerCase(),
                  ))
                : r.removeAttribute(e);
          }
        },
        Pr = function (t, e, n, r, o, i) {
          var a = new Cn(t._pt, e, n, 0, 1, i ? sr : ar);
          return (t._pt = a), (a.b = r), (a.e = o), t._props.push(n), a;
        },
        Lr = { deg: 1, rad: 1, turn: 1 },
        Mr = { grid: 1, flex: 1 },
        jr = function t(e, n, r, o) {
          var i,
            a,
            s,
            l,
            c = parseFloat(r) || 0,
            u = (r + '').trim().substr((c + '').length) || 'px',
            d = Yn.style,
            f = Jn.test(n),
            p = 'svg' === e.tagName.toLowerCase(),
            h = (p ? 'client' : 'offset') + (f ? 'Width' : 'Height'),
            m = 100,
            g = 'px' === o,
            v = '%' === o;
          if (o === u || !c || Lr[o] || Lr[u]) return c;
          if (
            ('px' !== u && !g && (c = t(e, n, r, 'px')),
            (l = e.getCTM && Or(e)),
            (v || '%' === u) && (Gn[n] || ~n.indexOf('adius')))
          )
            return (
              (i = l ? e.getBBox()[f ? 'width' : 'height'] : e[h]),
              At(v ? (c / i) * m : (c / 100) * i)
            );
          if (
            ((d[f ? 'width' : 'height'] = m + (g ? u : o)),
            (a =
              ('rem' !== o && ~n.indexOf('adius')) ||
              ('em' === o && e.appendChild && !p)
                ? e
                : e.parentNode),
            l && (a = (e.ownerSVGElement || {}).parentNode),
            (a && a !== $n && a.appendChild) || (a = $n.body),
            (s = a._gsap) &&
              v &&
              s.width &&
              f &&
              s.time === Ne.time &&
              !s.uncache)
          )
            return At((c / s.width) * m);
          if (!v || ('height' !== n && 'width' !== n))
            (v || '%' === u) &&
              !Mr[_r(a, 'display')] &&
              (d.position = _r(e, 'position')),
              a === e && (d.position = 'static'),
              a.appendChild(Yn),
              (i = Yn[h]),
              a.removeChild(Yn),
              (d.position = 'absolute');
          else {
            var w = e.style[n];
            (e.style[n] = m + o), (i = e[h]), w ? (e.style[n] = w) : Ar(e, n);
          }
          return (
            f && v && (((s = Ct(a)).time = Ne.time), (s.width = a[h])),
            At(g ? (i * c) / m : i && c ? (m / i) * c : 0)
          );
        },
        Br = function (t, e, n, r) {
          var o;
          return (
            qn || Er(),
            e in er &&
              'transform' !== e &&
              ~(e = er[e]).indexOf(',') &&
              (e = e.split(',')[0]),
            Gn[e] && 'transform' !== e
              ? ((o = Vr(t, r)),
                (o =
                  'transformOrigin' !== e
                    ? o[e]
                    : o.svg
                      ? o.origin
                      : Xr(_r(t, mr)) + ' ' + o.zOrigin + 'px'))
              : (!(o = t.style[e]) ||
                  'auto' === o ||
                  r ||
                  ~(o + '').indexOf('calc(')) &&
                (o =
                  (Ir[e] && Ir[e](t, e, n)) ||
                  _r(t, e) ||
                  St(t, e) ||
                  ('opacity' === e ? 1 : 0)),
            n && !~(o + '').trim().indexOf(' ') ? jr(t, e, o, n) + n : o
          );
        },
        zr = function (t, e, n, r) {
          if (!n || 'none' === n) {
            var o = kr(e, t, 1),
              i = o && _r(t, o, 1);
            i && i !== n
              ? ((e = o), (n = i))
              : 'borderColor' === e && (n = _r(t, 'borderTopColor'));
          }
          var a,
            s,
            l,
            c,
            u,
            d,
            f,
            p,
            h,
            m,
            g,
            v = new Cn(this._pt, t.style, e, 0, 1, bn),
            w = 0,
            y = 0;
          if (
            ((v.b = n),
            (v.e = r),
            (n += ''),
            'auto' == (r += '') &&
              ((d = t.style[e]),
              (t.style[e] = r),
              (r = _r(t, e) || r),
              d ? (t.style[e] = d) : Ar(t, e)),
            Ie((a = [n, r])),
            (r = a[1]),
            (l = (n = a[0]).match(nt) || []),
            (r.match(nt) || []).length)
          ) {
            for (; (s = nt.exec(r)); )
              (f = s[0]),
                (h = r.substring(w, s.index)),
                u
                  ? (u = (u + 1) % 5)
                  : ('rgba(' !== h.substr(-5) && 'hsla(' !== h.substr(-5)) ||
                    (u = 1),
                f !== (d = l[y++] || '') &&
                  ((c = parseFloat(d) || 0),
                  (g = d.substr((c + '').length)),
                  '=' === f.charAt(1) && (f = Lt(c, f) + g),
                  (p = parseFloat(f)),
                  (m = f.substr((p + '').length)),
                  (w = nt.lastIndex - m.length),
                  m ||
                    ((m = m || B.units[e] || g),
                    w === r.length && ((r += m), (v.e += m))),
                  g !== m && (c = jr(t, e, d, m) || 0),
                  (v._pt = {
                    _next: v._pt,
                    p: h || 1 === y ? h : ',',
                    s: c,
                    c: p - c,
                    m: (u && u < 4) || 'zIndex' === e ? Math.round : 0,
                  }));
            v.c = w < r.length ? r.substring(w, r.length) : '';
          } else v.r = 'display' === e && 'none' === r ? sr : ar;
          return ot.test(r) && (v.e = 0), (this._pt = v), v;
        },
        Rr = {
          top: '0%',
          bottom: '100%',
          left: '0%',
          right: '100%',
          center: '50%',
        },
        Dr = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var n,
              r,
              o,
              i = e.t,
              a = i.style,
              s = e.u,
              l = i._gsap;
            if ('all' === s || !0 === s) (a.cssText = ''), (r = 1);
            else
              for (o = (s = s.split(',')).length; --o > -1; )
                (n = s[o]),
                  Gn[n] && ((r = 1), (n = 'transformOrigin' === n ? mr : hr)),
                  Ar(i, n);
            r &&
              (Ar(i, hr),
              l &&
                (l.svg && i.removeAttribute('transform'),
                (a.scale = a.rotate = a.translate = 'none'),
                Vr(i, 1),
                (l.uncache = 1),
                vr(a)));
          }
        },
        Ir = {
          clearProps: function (t, e, n, r, o) {
            if ('isFromStart' !== o.data) {
              var i = (t._pt = new Cn(t._pt, e, n, 0, 0, Dr));
              return (
                (i.u = r), (i.pr = -10), (i.tween = o), t._props.push(n), 1
              );
            }
          },
        },
        Nr = [1, 0, 0, 1, 0, 0],
        Fr = {},
        $r = function (t) {
          return 'matrix(1, 0, 0, 1, 0, 0)' === t || 'none' === t || !t;
        },
        Hr = function (t) {
          var e = _r(t, hr);
          return $r(e) ? Nr : e.substr(7).match(et).map(At);
        },
        qr = function (t, e) {
          var n,
            r,
            o,
            i,
            a = t._gsap || Ct(t),
            s = t.style,
            l = Hr(t);
          return a.svg && t.getAttribute('transform')
            ? '1,0,0,1,0,0' ===
              (l = [
                (o = t.transform.baseVal.consolidate().matrix).a,
                o.b,
                o.c,
                o.d,
                o.e,
                o.f,
              ]).join(',')
              ? Nr
              : l
            : (l !== Nr ||
                t.offsetParent ||
                t === Hn ||
                a.svg ||
                ((o = s.display),
                (s.display = 'block'),
                ((n = t.parentNode) &&
                  (t.offsetParent || t.getBoundingClientRect().width)) ||
                  ((i = 1), (r = t.nextElementSibling), Hn.appendChild(t)),
                (l = Hr(t)),
                o ? (s.display = o) : Ar(t, 'display'),
                i &&
                  (r
                    ? n.insertBefore(t, r)
                    : n
                      ? n.appendChild(t)
                      : Hn.removeChild(t))),
              e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
        },
        Yr = function (t, e, n, r, o, i) {
          var a,
            s,
            l,
            c = t._gsap,
            u = o || qr(t, !0),
            d = c.xOrigin || 0,
            f = c.yOrigin || 0,
            p = c.xOffset || 0,
            h = c.yOffset || 0,
            m = u[0],
            g = u[1],
            v = u[2],
            w = u[3],
            y = u[4],
            b = u[5],
            _ = e.split(' '),
            x = parseFloat(_[0]) || 0,
            k = parseFloat(_[1]) || 0;
          n
            ? u !== Nr &&
              (s = m * w - g * v) &&
              ((l = x * (-g / s) + k * (m / s) - (m * b - g * y) / s),
              (x = x * (w / s) + k * (-v / s) + (v * b - w * y) / s),
              (k = l))
            : ((x =
                (a = Sr(t)).x + (~_[0].indexOf('%') ? (x / 100) * a.width : x)),
              (k =
                a.y +
                (~(_[1] || _[0]).indexOf('%') ? (k / 100) * a.height : k))),
            r || (!1 !== r && c.smooth)
              ? ((y = x - d),
                (b = k - f),
                (c.xOffset = p + (y * m + b * v) - y),
                (c.yOffset = h + (y * g + b * w) - b))
              : (c.xOffset = c.yOffset = 0),
            (c.xOrigin = x),
            (c.yOrigin = k),
            (c.smooth = !!r),
            (c.origin = e),
            (c.originIsAbsolute = !!n),
            (t.style[mr] = '0px 0px'),
            i &&
              (Pr(i, c, 'xOrigin', d, x),
              Pr(i, c, 'yOrigin', f, k),
              Pr(i, c, 'xOffset', p, c.xOffset),
              Pr(i, c, 'yOffset', h, c.yOffset)),
            t.setAttribute('data-svg-origin', x + ' ' + k);
        },
        Vr = function (t, e) {
          var n = t._gsap || new Qe(t);
          if ('x' in n && !e && !n.uncache) return n;
          var r,
            o,
            i,
            a,
            s,
            l,
            c,
            u,
            d,
            f,
            p,
            h,
            m,
            g,
            v,
            w,
            y,
            b,
            _,
            x,
            k,
            E,
            T,
            C,
            S,
            O,
            A,
            P,
            L,
            M,
            j,
            z,
            R = t.style,
            D = n.scaleX < 0,
            I = 'px',
            N = 'deg',
            F = getComputedStyle(t),
            $ = _r(t, mr) || '0';
          return (
            (r = o = i = l = c = u = d = f = p = 0),
            (a = s = 1),
            (n.svg = !(!t.getCTM || !Or(t))),
            F.translate &&
              (('none' === F.translate &&
                'none' === F.scale &&
                'none' === F.rotate) ||
                (R[hr] =
                  ('none' !== F.translate
                    ? 'translate3d(' +
                      (F.translate + ' 0 0').split(' ').slice(0, 3).join(', ') +
                      ') '
                    : '') +
                  ('none' !== F.rotate ? 'rotate(' + F.rotate + ') ' : '') +
                  ('none' !== F.scale
                    ? 'scale(' + F.scale.split(' ').join(',') + ') '
                    : '') +
                  ('none' !== F[hr] ? F[hr] : '')),
              (R.scale = R.rotate = R.translate = 'none')),
            (g = qr(t, n.svg)),
            n.svg &&
              (n.uncache
                ? ((S = t.getBBox()),
                  ($ = n.xOrigin - S.x + 'px ' + (n.yOrigin - S.y) + 'px'),
                  (C = ''))
                : (C = !e && t.getAttribute('data-svg-origin')),
              Yr(t, C || $, !!C || n.originIsAbsolute, !1 !== n.smooth, g)),
            (h = n.xOrigin || 0),
            (m = n.yOrigin || 0),
            g !== Nr &&
              ((b = g[0]),
              (_ = g[1]),
              (x = g[2]),
              (k = g[3]),
              (r = E = g[4]),
              (o = T = g[5]),
              6 === g.length
                ? ((a = Math.sqrt(b * b + _ * _)),
                  (s = Math.sqrt(k * k + x * x)),
                  (l = b || _ ? Kn(_, b) * Wn : 0),
                  (d = x || k ? Kn(x, k) * Wn + l : 0) &&
                    (s *= Math.abs(Math.cos(d * Zn))),
                  n.svg &&
                    ((r -= h - (h * b + m * x)), (o -= m - (h * _ + m * k))))
                : ((z = g[6]),
                  (M = g[7]),
                  (A = g[8]),
                  (P = g[9]),
                  (L = g[10]),
                  (j = g[11]),
                  (r = g[12]),
                  (o = g[13]),
                  (i = g[14]),
                  (c = (v = Kn(z, L)) * Wn),
                  v &&
                    ((C = E * (w = Math.cos(-v)) + A * (y = Math.sin(-v))),
                    (S = T * w + P * y),
                    (O = z * w + L * y),
                    (A = E * -y + A * w),
                    (P = T * -y + P * w),
                    (L = z * -y + L * w),
                    (j = M * -y + j * w),
                    (E = C),
                    (T = S),
                    (z = O)),
                  (u = (v = Kn(-x, L)) * Wn),
                  v &&
                    ((w = Math.cos(-v)),
                    (j = k * (y = Math.sin(-v)) + j * w),
                    (b = C = b * w - A * y),
                    (_ = S = _ * w - P * y),
                    (x = O = x * w - L * y)),
                  (l = (v = Kn(_, b)) * Wn),
                  v &&
                    ((C = b * (w = Math.cos(v)) + _ * (y = Math.sin(v))),
                    (S = E * w + T * y),
                    (_ = _ * w - b * y),
                    (T = T * w - E * y),
                    (b = C),
                    (E = S)),
                  c &&
                    Math.abs(c) + Math.abs(l) > 359.9 &&
                    ((c = l = 0), (u = 180 - u)),
                  (a = At(Math.sqrt(b * b + _ * _ + x * x))),
                  (s = At(Math.sqrt(T * T + z * z))),
                  (v = Kn(E, T)),
                  (d = Math.abs(v) > 2e-4 ? v * Wn : 0),
                  (p = j ? 1 / (j < 0 ? -j : j) : 0)),
              n.svg &&
                ((C = t.getAttribute('transform')),
                (n.forceCSS =
                  t.setAttribute('transform', '') || !$r(_r(t, hr))),
                C && t.setAttribute('transform', C))),
            Math.abs(d) > 90 &&
              Math.abs(d) < 270 &&
              (D
                ? ((a *= -1),
                  (d += l <= 0 ? 180 : -180),
                  (l += l <= 0 ? 180 : -180))
                : ((s *= -1), (d += d <= 0 ? 180 : -180))),
            (e = e || n.uncache),
            (n.x =
              r -
              ((n.xPercent =
                r &&
                ((!e && n.xPercent) ||
                  (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
                ? (t.offsetWidth * n.xPercent) / 100
                : 0) +
              I),
            (n.y =
              o -
              ((n.yPercent =
                o &&
                ((!e && n.yPercent) ||
                  (Math.round(t.offsetHeight / 2) === Math.round(-o)
                    ? -50
                    : 0)))
                ? (t.offsetHeight * n.yPercent) / 100
                : 0) +
              I),
            (n.z = i + I),
            (n.scaleX = At(a)),
            (n.scaleY = At(s)),
            (n.rotation = At(l) + N),
            (n.rotationX = At(c) + N),
            (n.rotationY = At(u) + N),
            (n.skewX = d + N),
            (n.skewY = f + N),
            (n.transformPerspective = p + I),
            (n.zOrigin =
              parseFloat($.split(' ')[2]) || (!e && n.zOrigin) || 0) &&
              (R[mr] = Xr($)),
            (n.xOffset = n.yOffset = 0),
            (n.force3D = B.force3D),
            (n.renderTransform = n.svg ? Jr : Un ? Qr : Gr),
            (n.uncache = 0),
            n
          );
        },
        Xr = function (t) {
          return (t = t.split(' '))[0] + ' ' + t[1];
        },
        Ur = function (t, e, n) {
          var r = fe(e);
          return At(parseFloat(e) + parseFloat(jr(t, 'x', n + 'px', r))) + r;
        },
        Gr = function (t, e) {
          (e.z = '0px'),
            (e.rotationY = e.rotationX = '0deg'),
            (e.force3D = 0),
            Qr(t, e);
        },
        Wr = '0deg',
        Zr = '0px',
        Kr = ') ',
        Qr = function (t, e) {
          var n = e || this,
            r = n.xPercent,
            o = n.yPercent,
            i = n.x,
            a = n.y,
            s = n.z,
            l = n.rotation,
            c = n.rotationY,
            u = n.rotationX,
            d = n.skewX,
            f = n.skewY,
            p = n.scaleX,
            h = n.scaleY,
            m = n.transformPerspective,
            g = n.force3D,
            v = n.target,
            w = n.zOrigin,
            y = '',
            b = ('auto' === g && t && 1 !== t) || !0 === g;
          if (w && (u !== Wr || c !== Wr)) {
            var _,
              x = parseFloat(c) * Zn,
              k = Math.sin(x),
              E = Math.cos(x);
            (x = parseFloat(u) * Zn),
              (_ = Math.cos(x)),
              (i = Ur(v, i, k * _ * -w)),
              (a = Ur(v, a, -Math.sin(x) * -w)),
              (s = Ur(v, s, E * _ * -w + w));
          }
          m !== Zr && (y += 'perspective(' + m + Kr),
            (r || o) && (y += 'translate(' + r + '%, ' + o + '%) '),
            (b || i !== Zr || a !== Zr || s !== Zr) &&
              (y +=
                s !== Zr || b
                  ? 'translate3d(' + i + ', ' + a + ', ' + s + ') '
                  : 'translate(' + i + ', ' + a + Kr),
            l !== Wr && (y += 'rotate(' + l + Kr),
            c !== Wr && (y += 'rotateY(' + c + Kr),
            u !== Wr && (y += 'rotateX(' + u + Kr),
            (d === Wr && f === Wr) || (y += 'skew(' + d + ', ' + f + Kr),
            (1 === p && 1 === h) || (y += 'scale(' + p + ', ' + h + Kr),
            (v.style[hr] = y || 'translate(0, 0)');
        },
        Jr = function (t, e) {
          var n,
            r,
            o,
            i,
            a,
            s = e || this,
            l = s.xPercent,
            c = s.yPercent,
            u = s.x,
            d = s.y,
            f = s.rotation,
            p = s.skewX,
            h = s.skewY,
            m = s.scaleX,
            g = s.scaleY,
            v = s.target,
            w = s.xOrigin,
            y = s.yOrigin,
            b = s.xOffset,
            _ = s.yOffset,
            x = s.forceCSS,
            k = parseFloat(u),
            E = parseFloat(d);
          (f = parseFloat(f)),
            (p = parseFloat(p)),
            (h = parseFloat(h)) && ((p += h = parseFloat(h)), (f += h)),
            f || p
              ? ((f *= Zn),
                (p *= Zn),
                (n = Math.cos(f) * m),
                (r = Math.sin(f) * m),
                (o = Math.sin(f - p) * -g),
                (i = Math.cos(f - p) * g),
                p &&
                  ((h *= Zn),
                  (a = Math.tan(p - h)),
                  (o *= a = Math.sqrt(1 + a * a)),
                  (i *= a),
                  h &&
                    ((a = Math.tan(h)),
                    (n *= a = Math.sqrt(1 + a * a)),
                    (r *= a))),
                (n = At(n)),
                (r = At(r)),
                (o = At(o)),
                (i = At(i)))
              : ((n = m), (i = g), (r = o = 0)),
            ((k && !~(u + '').indexOf('px')) ||
              (E && !~(d + '').indexOf('px'))) &&
              ((k = jr(v, 'x', u, 'px')), (E = jr(v, 'y', d, 'px'))),
            (w || y || b || _) &&
              ((k = At(k + w - (w * n + y * o) + b)),
              (E = At(E + y - (w * r + y * i) + _))),
            (l || c) &&
              ((a = v.getBBox()),
              (k = At(k + (l / 100) * a.width)),
              (E = At(E + (c / 100) * a.height))),
            (a =
              'matrix(' +
              n +
              ',' +
              r +
              ',' +
              o +
              ',' +
              i +
              ',' +
              k +
              ',' +
              E +
              ')'),
            v.setAttribute('transform', a),
            x && (v.style[hr] = a);
        },
        to = function (t, e, n, r, o) {
          var i,
            a,
            s = 360,
            l = Y(o),
            c = parseFloat(o) * (l && ~o.indexOf('rad') ? Wn : 1) - r,
            u = r + c + 'deg';
          return (
            l &&
              ('short' === (i = o.split('_')[1]) &&
                (c %= s) != c % 180 &&
                (c += c < 0 ? s : -360),
              'cw' === i && c < 0
                ? (c = ((c + 36e9) % s) - ~~(c / s) * s)
                : 'ccw' === i &&
                  c > 0 &&
                  (c = ((c - 36e9) % s) - ~~(c / s) * s)),
            (t._pt = a = new Cn(t._pt, e, n, r, c, rr)),
            (a.e = u),
            (a.u = 'deg'),
            t._props.push(n),
            a
          );
        },
        eo = function (t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        },
        no = function (t, e, n) {
          var r,
            o,
            i,
            a,
            s,
            l,
            c,
            u = eo({}, n._gsap),
            d = n.style;
          for (o in (u.svg
            ? ((i = n.getAttribute('transform')),
              n.setAttribute('transform', ''),
              (d[hr] = e),
              (r = Vr(n, 1)),
              Ar(n, hr),
              n.setAttribute('transform', i))
            : ((i = getComputedStyle(n)[hr]),
              (d[hr] = e),
              (r = Vr(n, 1)),
              (d[hr] = i)),
          Gn))
            (i = u[o]) !== (a = r[o]) &&
              'perspective,force3D,transformOrigin,svgOrigin'.indexOf(o) < 0 &&
              ((s = fe(i) !== (c = fe(a)) ? jr(n, o, i, c) : parseFloat(i)),
              (l = parseFloat(a)),
              (t._pt = new Cn(t._pt, r, o, s, l - s, nr)),
              (t._pt.u = c || 0),
              t._props.push(o));
          eo(r, u);
        };
      Ot('padding,margin,Width,Radius', function (t, e) {
        var n = 'Top',
          r = 'Right',
          o = 'Bottom',
          i = 'Left',
          a = (e < 3 ? [n, r, o, i] : [n + i, n + r, o + r, o + i]).map(
            function (n) {
              return e < 2 ? t + n : 'border' + n + t;
            },
          );
        Ir[e > 1 ? 'border' + t : t] = function (t, e, n, r, o) {
          var i, s;
          if (arguments.length < 4)
            return (
              (i = a.map(function (e) {
                return Br(t, e, n);
              })),
              5 === (s = i.join(' ')).split(i[0]).length ? i[0] : s
            );
          (i = (r + '').split(' ')),
            (s = {}),
            a.forEach(function (t, e) {
              return (s[t] = i[e] = i[e] || i[((e - 1) / 2) | 0]);
            }),
            t.init(e, s, o);
        };
      });
      var ro,
        oo,
        io = {
          name: 'css',
          register: Er,
          targetTest: function (t) {
            return t.style && t.nodeType;
          },
          init: function (t, e, n, r, o) {
            var i,
              a,
              s,
              l,
              c,
              u,
              d,
              f,
              p,
              h,
              m,
              g,
              v,
              w,
              y,
              b,
              _,
              x,
              k,
              E,
              T = this._props,
              C = t.style,
              S = n.vars.startAt;
            for (d in (qn || Er(),
            (this.styles = this.styles || yr(t)),
            (b = this.styles.props),
            (this.tween = n),
            e))
              if (
                'autoRound' !== d &&
                ((a = e[d]), !bt[d] || !an(d, e, n, r, t, o))
              )
                if (
                  ((c = typeof a),
                  (u = Ir[d]),
                  'function' === c && (c = typeof (a = a.call(n, r, t, o))),
                  'string' === c && ~a.indexOf('random(') && (a = ke(a)),
                  u)
                )
                  u(this, t, d, a, n) && (y = 1);
                else if ('--' === d.substr(0, 2))
                  (i = (getComputedStyle(t).getPropertyValue(d) + '').trim()),
                    (a += ''),
                    (Re.lastIndex = 0),
                    Re.test(i) || ((f = fe(i)), (p = fe(a))),
                    p ? f !== p && (i = jr(t, d, i, p) + p) : f && (a += f),
                    this.add(C, 'setProperty', i, a, r, o, 0, 0, d),
                    T.push(d),
                    b.push(d, 0, C[d]);
                else if ('undefined' !== c) {
                  if (
                    (S && d in S
                      ? ((i =
                          'function' == typeof S[d]
                            ? S[d].call(n, r, t, o)
                            : S[d]),
                        Y(i) && ~i.indexOf('random(') && (i = ke(i)),
                        fe(i + '') ||
                          'auto' === i ||
                          (i += B.units[d] || fe(Br(t, d)) || ''),
                        '=' === (i + '').charAt(1) && (i = Br(t, d)))
                      : (i = Br(t, d)),
                    (l = parseFloat(i)),
                    (h =
                      'string' === c &&
                      '=' === a.charAt(1) &&
                      a.substr(0, 2)) && (a = a.substr(2)),
                    (s = parseFloat(a)),
                    d in er &&
                      ('autoAlpha' === d &&
                        (1 === l &&
                          'hidden' === Br(t, 'visibility') &&
                          s &&
                          (l = 0),
                        b.push('visibility', 0, C.visibility),
                        Pr(
                          this,
                          C,
                          'visibility',
                          l ? 'inherit' : 'hidden',
                          s ? 'inherit' : 'hidden',
                          !s,
                        )),
                      'scale' !== d &&
                        'transform' !== d &&
                        ~(d = er[d]).indexOf(',') &&
                        (d = d.split(',')[0])),
                    (m = d in Gn))
                  )
                    if (
                      (this.styles.save(d),
                      g ||
                        (((v = t._gsap).renderTransform && !e.parseTransform) ||
                          Vr(t, e.parseTransform),
                        (w = !1 !== e.smoothOrigin && v.smooth),
                        ((g = this._pt =
                          new Cn(
                            this._pt,
                            C,
                            hr,
                            0,
                            1,
                            v.renderTransform,
                            v,
                            0,
                            -1,
                          )).dep = 1)),
                      'scale' === d)
                    )
                      (this._pt = new Cn(
                        this._pt,
                        v,
                        'scaleY',
                        v.scaleY,
                        (h ? Lt(v.scaleY, h + s) : s) - v.scaleY || 0,
                        nr,
                      )),
                        (this._pt.u = 0),
                        T.push('scaleY', d),
                        (d += 'X');
                    else {
                      if ('transformOrigin' === d) {
                        b.push(mr, 0, C[mr]),
                          (x = void 0),
                          (k = void 0),
                          (E = void 0),
                          (k = (x = (_ = a).split(' '))[0]),
                          (E = x[1] || '50%'),
                          ('top' !== k &&
                            'bottom' !== k &&
                            'left' !== E &&
                            'right' !== E) ||
                            ((_ = k), (k = E), (E = _)),
                          (x[0] = Rr[k] || k),
                          (x[1] = Rr[E] || E),
                          (a = x.join(' ')),
                          v.svg
                            ? Yr(t, a, 0, w, 0, this)
                            : ((p = parseFloat(a.split(' ')[2]) || 0) !==
                                v.zOrigin &&
                                Pr(this, v, 'zOrigin', v.zOrigin, p),
                              Pr(this, C, d, Xr(i), Xr(a)));
                        continue;
                      }
                      if ('svgOrigin' === d) {
                        Yr(t, a, 1, w, 0, this);
                        continue;
                      }
                      if (d in Fr) {
                        to(this, v, d, l, h ? Lt(l, h + a) : a);
                        continue;
                      }
                      if ('smoothOrigin' === d) {
                        Pr(this, v, 'smooth', v.smooth, a);
                        continue;
                      }
                      if ('force3D' === d) {
                        v[d] = a;
                        continue;
                      }
                      if ('transform' === d) {
                        no(this, a, t);
                        continue;
                      }
                    }
                  else d in C || (d = kr(d) || d);
                  if (
                    m ||
                    ((s || 0 === s) && (l || 0 === l) && !tr.test(a) && d in C)
                  )
                    s || (s = 0),
                      (f = (i + '').substr((l + '').length)) !==
                        (p = fe(a) || (d in B.units ? B.units[d] : f)) &&
                        (l = jr(t, d, i, p)),
                      (this._pt = new Cn(
                        this._pt,
                        m ? v : C,
                        d,
                        l,
                        (h ? Lt(l, h + s) : s) - l,
                        m ||
                        ('px' !== p && 'zIndex' !== d) ||
                        !1 === e.autoRound
                          ? nr
                          : ir,
                      )),
                      (this._pt.u = p || 0),
                      f !== p &&
                        '%' !== p &&
                        ((this._pt.b = i), (this._pt.r = or));
                  else if (d in C) zr.call(this, t, d, i, h ? h + a : a);
                  else if (d in t)
                    this.add(t, d, i || t[d], h ? h + a : a, r, o);
                  else if ('parseTransform' !== d) {
                    ut(d, a);
                    continue;
                  }
                  m ||
                    (d in C
                      ? b.push(d, 0, C[d])
                      : 'function' == typeof t[d]
                        ? b.push(d, 2, t[d]())
                        : b.push(d, 1, i || t[d])),
                    T.push(d);
                }
            y && Tn(this);
          },
          render: function (t, e) {
            if (e.tween._time || !Xn())
              for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
            else e.styles.revert();
          },
          get: Br,
          aliases: er,
          getSetter: function (t, e, n) {
            var r = er[e];
            return (
              r && r.indexOf(',') < 0 && (e = r),
              e in Gn && e !== mr && (t._gsap.x || Br(t, 'x'))
                ? n && Vn === n
                  ? 'scale' === e
                    ? dr
                    : ur
                  : (Vn = n || {}) && ('scale' === e ? fr : pr)
                : t.style && !U(t.style[e])
                  ? lr
                  : ~e.indexOf('-')
                    ? cr
                    : vn(t, e)
            );
          },
          core: { _removeProperty: Ar, _getMatrix: qr },
        };
      (Nn.utils.checkPrefix = kr),
        (Nn.core.getStyleSaver = yr),
        (oo = Ot(
          'x,y,z,scale,scaleX,scaleY,xPercent,yPercent' +
            ',' +
            (ro = 'rotation,rotationX,rotationY,skewX,skewY') +
            ',transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
          function (t) {
            Gn[t] = 1;
          },
        )),
        Ot(ro, function (t) {
          (B.units[t] = 'deg'), (Fr[t] = 1);
        }),
        (er[oo[13]] = 'x,y,z,scale,scaleX,scaleY,xPercent,yPercent,' + ro),
        Ot(
          '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
          function (t) {
            var e = t.split(':');
            er[e[1]] = oo[e[0]];
          },
        ),
        Ot(
          'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
          function (t) {
            B.units[t] = 'px';
          },
        ),
        Nn.registerPlugin(io);
      var ao = Nn.registerPlugin(io) || Nn;
      function so(t) {
        return (
          (so =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          so(t)
        );
      }
      function lo(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, co(r.key), r);
        }
      }
      function co(t) {
        var e = (function (t) {
          if ('object' != so(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, 'string');
            if ('object' != so(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(t);
        })(t);
        return 'symbol' == so(e) ? e : e + '';
      }
      ao.core.Tween;
      var uo = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, t);
          }),
          (e = [
            {
              key: 'showElement',
              value: function (t) {
                (t.style.display = 'block'), (t.hidden = !1);
              },
            },
            {
              key: 'showFlexElement',
              value: function (t) {
                (t.style.display = 'flex'), (t.hidden = !1);
              },
            },
            {
              key: 'hideElement',
              value: function (t) {
                (t.style.display = 'none'), (t.hidden = !0);
              },
            },
            {
              key: 'emptyElement',
              value: function (t) {
                t.innerHTML = '';
              },
            },
            {
              key: 'showLoading',
              value: function (t) {
                (t.style.display = 'block'), (t.hidden = !1);
              },
            },
            {
              key: 'hideLoading',
              value: function (t) {
                (t.style.display = 'none'), (t.hidden = !0);
              },
            },
            {
              key: 'appearAnimation',
              value: function (t) {
                ao.fromTo(
                  t,
                  { opacity: 0 },
                  { opacity: 1, duration: 0.3, ease: 'none' },
                );
              },
            },
          ]),
          null && lo(t.prototype, null),
          e && lo(t, e),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          t
        );
        var t, e;
      })();
      const fo = uo;
      function po(t) {
        return (
          (po =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          po(t)
        );
      }
      function ho() {
        ho = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = 'function' == typeof Symbol ? Symbol : {},
          a = i.iterator || '@@iterator',
          s = i.asyncIterator || '@@asyncIterator',
          l = i.toStringTag || '@@toStringTag';
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, '');
        } catch (t) {
          c = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function u(t, e, n, r) {
          var i = e && e.prototype instanceof v ? e : v,
            a = Object.create(i.prototype),
            s = new P(r || []);
          return o(a, '_invoke', { value: C(t, n, s) }), a;
        }
        function d(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = u;
        var f = 'suspendedStart',
          p = 'suspendedYield',
          h = 'executing',
          m = 'completed',
          g = {};
        function v() {}
        function w() {}
        function y() {}
        var b = {};
        c(b, a, function () {
          return this;
        });
        var _ = Object.getPrototypeOf,
          x = _ && _(_(L([])));
        x && x !== n && r.call(x, a) && (b = x);
        var k = (y.prototype = v.prototype = Object.create(b));
        function E(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function T(t, e) {
          function n(o, i, a, s) {
            var l = d(t[o], t, i);
            if ('throw' !== l.type) {
              var c = l.arg,
                u = c.value;
              return u && 'object' == po(u) && r.call(u, '__await')
                ? e.resolve(u.__await).then(
                    function (t) {
                      n('next', t, a, s);
                    },
                    function (t) {
                      n('throw', t, a, s);
                    },
                  )
                : e.resolve(u).then(
                    function (t) {
                      (c.value = t), a(c);
                    },
                    function (t) {
                      return n('throw', t, a, s);
                    },
                  );
            }
            s(l.arg);
          }
          var i;
          o(this, '_invoke', {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function C(e, n, r) {
          var o = f;
          return function (i, a) {
            if (o === h) throw Error('Generator is already running');
            if (o === m) {
              if ('throw' === i) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var l = S(s, r);
                if (l) {
                  if (l === g) continue;
                  return l;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              o = h;
              var c = d(e, n, r);
              if ('normal' === c.type) {
                if (((o = r.done ? m : p), c.arg === g)) continue;
                return { value: c.arg, done: r.done };
              }
              'throw' === c.type &&
                ((o = m), (r.method = 'throw'), (r.arg = c.arg));
            }
          };
        }
        function S(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'),
                (n.arg = t),
                S(e, n),
                'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              g
            );
          var i = d(o, e.iterator, n.arg);
          if ('throw' === i.type)
            return (
              (n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), g
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                g)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              g);
        }
        function O(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function A(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function P(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(O, this),
            this.reset(!0);
        }
        function L(e) {
          if (e || '' === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(po(e) + ' is not iterable');
        }
        return (
          (w.prototype = y),
          o(k, 'constructor', { value: y, configurable: !0 }),
          o(y, 'constructor', { value: w, configurable: !0 }),
          (w.displayName = c(y, l, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === w || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, y)
                : ((t.__proto__ = y), c(t, l, 'GeneratorFunction')),
              (t.prototype = Object.create(k)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          E(T.prototype),
          c(T.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = T),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new T(u(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          E(k),
          c(k, l, 'Generator'),
          c(k, a, function () {
            return this;
          }),
          c(k, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = L),
          (P.prototype = {
            constructor: P,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(A),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  o && ((n.method = 'next'), (n.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ('root' === a.tryLoc) return o('end');
                if (a.tryLoc <= this.prev) {
                  var l = r.call(a, 'catchLoc'),
                    c = r.call(a, 'finallyLoc');
                  if (l && c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!c)
                      throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ('break' === t || 'continue' === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), g)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                g
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), A(n), g;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var o = r.arg;
                    A(n);
                  }
                  return o;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: L(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                g
              );
            },
          }),
          e
        );
      }
      function mo(t, e, n, r, o, i, a) {
        try {
          var s = t[i](a),
            l = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(l) : Promise.resolve(l).then(r, o);
      }
      function go(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              mo(i, r, o, a, s, 'next', t);
            }
            function s(t) {
              mo(i, r, o, a, s, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      function vo(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, wo(r.key), r);
        }
      }
      function wo(t) {
        var e = (function (t) {
          if ('object' != po(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, 'string');
            if ('object' != po(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(t);
        })(t);
        return 'symbol' == po(e) ? e : e + '';
      }
      var yo = 'https://notes-api.dicoding.dev/v2',
        bo = (function () {
          return (
            (t = function t() {
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t);
            }),
            (e = [
              {
                key: 'getNotes',
                value:
                  ((l = go(
                    ho().mark(function t() {
                      var e, n;
                      return ho().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  (t.next = 3),
                                  fetch(''.concat(yo, '/notes'))
                                );
                              case 3:
                                return (e = t.sent), (t.next = 6), e.json();
                              case 6:
                                if ('success' === (n = t.sent).status) {
                                  t.next = 9;
                                  break;
                                }
                                throw new Error(n.message);
                              case 9:
                                return t.abrupt('return', n.data);
                              case 12:
                                return (
                                  (t.prev = 12),
                                  (t.t0 = t.catch(0)),
                                  t.abrupt('return', Promise.reject(t.t0))
                                );
                              case 15:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 12]],
                      );
                    }),
                  )),
                  function () {
                    return l.apply(this, arguments);
                  }),
              },
              {
                key: 'getArchivedNotes',
                value:
                  ((s = go(
                    ho().mark(function t() {
                      var e, n;
                      return ho().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  (t.next = 3),
                                  fetch(''.concat(yo, '/notes/archived'))
                                );
                              case 3:
                                return (e = t.sent), (t.next = 6), e.json();
                              case 6:
                                if ('success' === (n = t.sent).status) {
                                  t.next = 9;
                                  break;
                                }
                                throw new Error(n.message);
                              case 9:
                                return t.abrupt('return', n.data);
                              case 12:
                                return (
                                  (t.prev = 12),
                                  (t.t0 = t.catch(0)),
                                  t.abrupt('return', Promise.reject(t.t0))
                                );
                              case 15:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 12]],
                      );
                    }),
                  )),
                  function () {
                    return s.apply(this, arguments);
                  }),
              },
              {
                key: 'getSingleNote',
                value:
                  ((a = go(
                    ho().mark(function t(e) {
                      var n, r;
                      return ho().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  (t.next = 3),
                                  fetch(''.concat(yo, '/notes/').concat(e))
                                );
                              case 3:
                                return (n = t.sent), (t.next = 6), n.json();
                              case 6:
                                if ('success' === (r = t.sent).status) {
                                  t.next = 9;
                                  break;
                                }
                                throw new Error(r.message);
                              case 9:
                                return t.abrupt('return', r.data);
                              case 12:
                                return (
                                  (t.prev = 12),
                                  (t.t0 = t.catch(0)),
                                  t.abrupt('return', Promise.reject(t.t0))
                                );
                              case 15:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 12]],
                      );
                    }),
                  )),
                  function (t) {
                    return a.apply(this, arguments);
                  }),
              },
              {
                key: 'createNote',
                value:
                  ((i = go(
                    ho().mark(function t(e) {
                      var n, r, o;
                      return ho().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  (n = {
                                    method: 'POST',
                                    headers: {
                                      'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(e),
                                  }),
                                  (t.next = 4),
                                  fetch(''.concat(yo, '/notes'), n)
                                );
                              case 4:
                                return (r = t.sent), (t.next = 7), r.json();
                              case 7:
                                if ('success' === (o = t.sent).status) {
                                  t.next = 10;
                                  break;
                                }
                                throw new Error(o.message);
                              case 10:
                                return t.abrupt('return', o.message);
                              case 13:
                                return (
                                  (t.prev = 13),
                                  (t.t0 = t.catch(0)),
                                  t.abrupt('return', Promise.reject(t.t0))
                                );
                              case 16:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 13]],
                      );
                    }),
                  )),
                  function (t) {
                    return i.apply(this, arguments);
                  }),
              },
              {
                key: 'archiveNote',
                value:
                  ((o = go(
                    ho().mark(function t(e) {
                      var n, r, o;
                      return ho().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  (n = {
                                    method: 'POST',
                                    headers: {
                                      'Content-Type': 'application/json',
                                    },
                                  }),
                                  (t.next = 4),
                                  fetch(
                                    ''
                                      .concat(yo, '/notes/')
                                      .concat(e, '/archive'),
                                    n,
                                  )
                                );
                              case 4:
                                return (r = t.sent), (t.next = 7), r.json();
                              case 7:
                                if ('success' === (o = t.sent).status) {
                                  t.next = 10;
                                  break;
                                }
                                throw new Error(o.message);
                              case 10:
                                return t.abrupt('return', o.message);
                              case 13:
                                return (
                                  (t.prev = 13),
                                  (t.t0 = t.catch(0)),
                                  t.abrupt('return', Promise.reject(t.t0))
                                );
                              case 16:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 13]],
                      );
                    }),
                  )),
                  function (t) {
                    return o.apply(this, arguments);
                  }),
              },
              {
                key: 'unarchiveNote',
                value:
                  ((r = go(
                    ho().mark(function t(e) {
                      var n, r, o;
                      return ho().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  (n = {
                                    method: 'POST',
                                    headers: {
                                      'Content-Type': 'application/json',
                                    },
                                  }),
                                  (t.next = 4),
                                  fetch(
                                    ''
                                      .concat(yo, '/notes/')
                                      .concat(e, '/unarchive'),
                                    n,
                                  )
                                );
                              case 4:
                                return (r = t.sent), (t.next = 7), r.json();
                              case 7:
                                if ('success' === (o = t.sent).status) {
                                  t.next = 10;
                                  break;
                                }
                                throw new Error(o.message);
                              case 10:
                                return t.abrupt('return', o.message);
                              case 13:
                                return (
                                  (t.prev = 13),
                                  (t.t0 = t.catch(0)),
                                  t.abrupt('return', Promise.reject(t.t0))
                                );
                              case 16:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 13]],
                      );
                    }),
                  )),
                  function (t) {
                    return r.apply(this, arguments);
                  }),
              },
              {
                key: 'deleteNote',
                value:
                  ((n = go(
                    ho().mark(function t(e) {
                      var n, r, o;
                      return ho().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  (n = {
                                    method: 'DELETE',
                                    headers: {
                                      'Content-Type': 'application/json',
                                    },
                                  }),
                                  (t.next = 4),
                                  fetch(''.concat(yo, '/notes/').concat(e), n)
                                );
                              case 4:
                                return (r = t.sent), (t.next = 7), r.json();
                              case 7:
                                if ('success' === (o = t.sent).status) {
                                  t.next = 10;
                                  break;
                                }
                                throw new Error(o.message);
                              case 10:
                                return t.abrupt('return', o.message);
                              case 13:
                                return (
                                  (t.prev = 13),
                                  (t.t0 = t.catch(0)),
                                  t.abrupt('return', Promise.reject(t.t0))
                                );
                              case 16:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 13]],
                      );
                    }),
                  )),
                  function (t) {
                    return n.apply(this, arguments);
                  }),
              },
            ]),
            e && vo(t, e),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            t
          );
          var t, e, n, r, o, i, a, s, l;
        })();
      const _o = bo;
      var xo = n(465),
        ko = n.n(xo);
      function Eo(t) {
        return (
          (Eo =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          Eo(t)
        );
      }
      function To() {
        To = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = 'function' == typeof Symbol ? Symbol : {},
          a = i.iterator || '@@iterator',
          s = i.asyncIterator || '@@asyncIterator',
          l = i.toStringTag || '@@toStringTag';
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, '');
        } catch (t) {
          c = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function u(t, e, n, r) {
          var i = e && e.prototype instanceof v ? e : v,
            a = Object.create(i.prototype),
            s = new P(r || []);
          return o(a, '_invoke', { value: C(t, n, s) }), a;
        }
        function d(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = u;
        var f = 'suspendedStart',
          p = 'suspendedYield',
          h = 'executing',
          m = 'completed',
          g = {};
        function v() {}
        function w() {}
        function y() {}
        var b = {};
        c(b, a, function () {
          return this;
        });
        var _ = Object.getPrototypeOf,
          x = _ && _(_(L([])));
        x && x !== n && r.call(x, a) && (b = x);
        var k = (y.prototype = v.prototype = Object.create(b));
        function E(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function T(t, e) {
          function n(o, i, a, s) {
            var l = d(t[o], t, i);
            if ('throw' !== l.type) {
              var c = l.arg,
                u = c.value;
              return u && 'object' == Eo(u) && r.call(u, '__await')
                ? e.resolve(u.__await).then(
                    function (t) {
                      n('next', t, a, s);
                    },
                    function (t) {
                      n('throw', t, a, s);
                    },
                  )
                : e.resolve(u).then(
                    function (t) {
                      (c.value = t), a(c);
                    },
                    function (t) {
                      return n('throw', t, a, s);
                    },
                  );
            }
            s(l.arg);
          }
          var i;
          o(this, '_invoke', {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function C(e, n, r) {
          var o = f;
          return function (i, a) {
            if (o === h) throw Error('Generator is already running');
            if (o === m) {
              if ('throw' === i) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var l = S(s, r);
                if (l) {
                  if (l === g) continue;
                  return l;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              o = h;
              var c = d(e, n, r);
              if ('normal' === c.type) {
                if (((o = r.done ? m : p), c.arg === g)) continue;
                return { value: c.arg, done: r.done };
              }
              'throw' === c.type &&
                ((o = m), (r.method = 'throw'), (r.arg = c.arg));
            }
          };
        }
        function S(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'),
                (n.arg = t),
                S(e, n),
                'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              g
            );
          var i = d(o, e.iterator, n.arg);
          if ('throw' === i.type)
            return (
              (n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), g
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                g)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              g);
        }
        function O(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function A(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function P(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(O, this),
            this.reset(!0);
        }
        function L(e) {
          if (e || '' === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(Eo(e) + ' is not iterable');
        }
        return (
          (w.prototype = y),
          o(k, 'constructor', { value: y, configurable: !0 }),
          o(y, 'constructor', { value: w, configurable: !0 }),
          (w.displayName = c(y, l, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === w || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, y)
                : ((t.__proto__ = y), c(t, l, 'GeneratorFunction')),
              (t.prototype = Object.create(k)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          E(T.prototype),
          c(T.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = T),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new T(u(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          E(k),
          c(k, l, 'Generator'),
          c(k, a, function () {
            return this;
          }),
          c(k, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = L),
          (P.prototype = {
            constructor: P,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(A),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  o && ((n.method = 'next'), (n.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ('root' === a.tryLoc) return o('end');
                if (a.tryLoc <= this.prev) {
                  var l = r.call(a, 'catchLoc'),
                    c = r.call(a, 'finallyLoc');
                  if (l && c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!c)
                      throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ('break' === t || 'continue' === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), g)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                g
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), A(n), g;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var o = r.arg;
                    A(n);
                  }
                  return o;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: L(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                g
              );
            },
          }),
          e
        );
      }
      function Co(t, e, n, r, o, i, a) {
        try {
          var s = t[i](a),
            l = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(l) : Promise.resolve(l).then(r, o);
      }
      function So(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var Oo,
        Ao,
        Po,
        Lo,
        Mo,
        jo,
        Bo,
        zo,
        Ro,
        Do,
        Io,
        No,
        Fo,
        $o = function () {
          return (
            Oo ||
            ('undefined' != typeof window &&
              (Oo = window.gsap) &&
              Oo.registerPlugin &&
              Oo)
          );
        },
        Ho = 1,
        qo = [],
        Yo = [],
        Vo = [],
        Xo = Date.now,
        Uo = function (t, e) {
          return e;
        },
        Go = function (t, e) {
          return ~Vo.indexOf(t) && Vo[Vo.indexOf(t) + 1][e];
        },
        Wo = function (t) {
          return !!~Do.indexOf(t);
        },
        Zo = function (t, e, n, r, o) {
          return t.addEventListener(e, n, { passive: !1 !== r, capture: !!o });
        },
        Ko = function (t, e, n, r) {
          return t.removeEventListener(e, n, !!r);
        },
        Qo = 'scrollLeft',
        Jo = 'scrollTop',
        ti = function () {
          return (Io && Io.isPressed) || Yo.cache++;
        },
        ei = function (t, e) {
          var n = function n(r) {
            if (r || 0 === r) {
              Ho && (Po.history.scrollRestoration = 'manual');
              var o = Io && Io.isPressed;
              (r = n.v = Math.round(r) || (Io && Io.iOS ? 1 : 0)),
                t(r),
                (n.cacheID = Yo.cache),
                o && Uo('ss', r);
            } else
              (e || Yo.cache !== n.cacheID || Uo('ref')) &&
                ((n.cacheID = Yo.cache), (n.v = t()));
            return n.v + n.offset;
          };
          return (n.offset = 0), t && n;
        },
        ni = {
          s: Qo,
          p: 'left',
          p2: 'Left',
          os: 'right',
          os2: 'Right',
          d: 'width',
          d2: 'Width',
          a: 'x',
          sc: ei(function (t) {
            return arguments.length
              ? Po.scrollTo(t, ri.sc())
              : Po.pageXOffset || Lo[Qo] || Mo[Qo] || jo[Qo] || 0;
          }),
        },
        ri = {
          s: Jo,
          p: 'top',
          p2: 'Top',
          os: 'bottom',
          os2: 'Bottom',
          d: 'height',
          d2: 'Height',
          a: 'y',
          op: ni,
          sc: ei(function (t) {
            return arguments.length
              ? Po.scrollTo(ni.sc(), t)
              : Po.pageYOffset || Lo[Jo] || Mo[Jo] || jo[Jo] || 0;
          }),
        },
        oi = function (t, e) {
          return (
            ((e && e._ctx && e._ctx.selector) || Oo.utils.toArray)(t)[0] ||
            ('string' == typeof t && !1 !== Oo.config().nullTargetWarn
              ? console.warn('Element not found:', t)
              : null)
          );
        },
        ii = function (t, e) {
          var n = e.s,
            r = e.sc;
          Wo(t) && (t = Lo.scrollingElement || Mo);
          var o = Yo.indexOf(t),
            i = r === ri.sc ? 1 : 2;
          !~o && (o = Yo.push(t) - 1), Yo[o + i] || Zo(t, 'scroll', ti);
          var a = Yo[o + i],
            s =
              a ||
              (Yo[o + i] =
                ei(Go(t, n), !0) ||
                (Wo(t)
                  ? r
                  : ei(function (e) {
                      return arguments.length ? (t[n] = e) : t[n];
                    })));
          return (
            (s.target = t),
            a || (s.smooth = 'smooth' === Oo.getProperty(t, 'scrollBehavior')),
            s
          );
        },
        ai = function (t, e, n) {
          var r = t,
            o = t,
            i = Xo(),
            a = i,
            s = e || 50,
            l = Math.max(500, 3 * s),
            c = function (t, e) {
              var l = Xo();
              e || l - i > s
                ? ((o = r), (r = t), (a = i), (i = l))
                : n
                  ? (r += t)
                  : (r = o + ((t - o) / (l - a)) * (i - a));
            };
          return {
            update: c,
            reset: function () {
              (o = r = n ? 0 : r), (a = i = 0);
            },
            getVelocity: function (t) {
              var e = a,
                s = o,
                u = Xo();
              return (
                (t || 0 === t) && t !== r && c(t),
                i === a || u - a > l
                  ? 0
                  : ((r + (n ? s : -s)) / ((n ? u : i) - e)) * 1e3
              );
            },
          };
        },
        si = function (t, e) {
          return (
            e && !t._gsapAllow && t.preventDefault(),
            t.changedTouches ? t.changedTouches[0] : t
          );
        },
        li = function (t) {
          var e = Math.max.apply(Math, t),
            n = Math.min.apply(Math, t);
          return Math.abs(e) >= Math.abs(n) ? e : n;
        },
        ci = function () {
          var t, e, n, r;
          (Ro = Oo.core.globals().ScrollTrigger) &&
            Ro.core &&
            ((t = Ro.core),
            (e = t.bridge || {}),
            (n = t._scrollers),
            (r = t._proxies),
            n.push.apply(n, Yo),
            r.push.apply(r, Vo),
            (Yo = n),
            (Vo = r),
            (Uo = function (t, n) {
              return e[t](n);
            }));
        },
        ui = function (t) {
          return (
            (Oo = t || $o()),
            !Ao &&
              Oo &&
              'undefined' != typeof document &&
              document.body &&
              ((Po = window),
              (Lo = document),
              (Mo = Lo.documentElement),
              (jo = Lo.body),
              (Do = [Po, Lo, Mo, jo]),
              Oo.utils.clamp,
              (Fo = Oo.core.context || function () {}),
              (zo = 'onpointerenter' in jo ? 'pointer' : 'mouse'),
              (Bo = di.isTouch =
                Po.matchMedia &&
                Po.matchMedia('(hover: none), (pointer: coarse)').matches
                  ? 1
                  : 'ontouchstart' in Po ||
                      navigator.maxTouchPoints > 0 ||
                      navigator.msMaxTouchPoints > 0
                    ? 2
                    : 0),
              (No = di.eventTypes =
                (
                  'ontouchstart' in Mo
                    ? 'touchstart,touchmove,touchcancel,touchend'
                    : 'onpointerdown' in Mo
                      ? 'pointerdown,pointermove,pointercancel,pointerup'
                      : 'mousedown,mousemove,mouseup,mouseup'
                ).split(',')),
              setTimeout(function () {
                return (Ho = 0);
              }, 500),
              ci(),
              (Ao = 1)),
            Ao
          );
        };
      (ni.op = ri), (Yo.cache = 0);
      var di = (function () {
        function t(t) {
          this.init(t);
        }
        var e, n;
        return (
          (t.prototype.init = function (t) {
            Ao ||
              ui(Oo) ||
              console.warn('Please gsap.registerPlugin(Observer)'),
              Ro || ci();
            var e = t.tolerance,
              n = t.dragMinimum,
              r = t.type,
              o = t.target,
              i = t.lineHeight,
              a = t.debounce,
              s = t.preventDefault,
              l = t.onStop,
              c = t.onStopDelay,
              u = t.ignore,
              d = t.wheelSpeed,
              f = t.event,
              p = t.onDragStart,
              h = t.onDragEnd,
              m = t.onDrag,
              g = t.onPress,
              v = t.onRelease,
              w = t.onRight,
              y = t.onLeft,
              b = t.onUp,
              _ = t.onDown,
              x = t.onChangeX,
              k = t.onChangeY,
              E = t.onChange,
              T = t.onToggleX,
              C = t.onToggleY,
              S = t.onHover,
              O = t.onHoverEnd,
              A = t.onMove,
              P = t.ignoreCheck,
              L = t.isNormalizer,
              M = t.onGestureStart,
              j = t.onGestureEnd,
              B = t.onWheel,
              z = t.onEnable,
              R = t.onDisable,
              D = t.onClick,
              I = t.scrollSpeed,
              N = t.capture,
              F = t.allowClicks,
              $ = t.lockAxis,
              H = t.onLockAxis;
            (this.target = o = oi(o) || Mo),
              (this.vars = t),
              u && (u = Oo.utils.toArray(u)),
              (e = e || 1e-9),
              (n = n || 0),
              (d = d || 1),
              (I = I || 1),
              (r = r || 'wheel,touch,pointer'),
              (a = !1 !== a),
              i || (i = parseFloat(Po.getComputedStyle(jo).lineHeight) || 22);
            var q,
              Y,
              V,
              X,
              U,
              G,
              W,
              Z = this,
              K = 0,
              Q = 0,
              J = t.passive || (!s && !1 !== t.passive),
              tt = ii(o, ni),
              et = ii(o, ri),
              nt = tt(),
              rt = et(),
              ot =
                ~r.indexOf('touch') &&
                !~r.indexOf('pointer') &&
                'pointerdown' === No[0],
              it = Wo(o),
              at = o.ownerDocument || Lo,
              st = [0, 0, 0],
              lt = [0, 0, 0],
              ct = 0,
              ut = function () {
                return (ct = Xo());
              },
              dt = function (t, e) {
                return (
                  ((Z.event = t) && u && ~u.indexOf(t.target)) ||
                  (e && ot && 'touch' !== t.pointerType) ||
                  (P && P(t, e))
                );
              },
              ft = function () {
                var t = (Z.deltaX = li(st)),
                  n = (Z.deltaY = li(lt)),
                  r = Math.abs(t) >= e,
                  o = Math.abs(n) >= e;
                E && (r || o) && E(Z, t, n, st, lt),
                  r &&
                    (w && Z.deltaX > 0 && w(Z),
                    y && Z.deltaX < 0 && y(Z),
                    x && x(Z),
                    T && Z.deltaX < 0 != K < 0 && T(Z),
                    (K = Z.deltaX),
                    (st[0] = st[1] = st[2] = 0)),
                  o &&
                    (_ && Z.deltaY > 0 && _(Z),
                    b && Z.deltaY < 0 && b(Z),
                    k && k(Z),
                    C && Z.deltaY < 0 != Q < 0 && C(Z),
                    (Q = Z.deltaY),
                    (lt[0] = lt[1] = lt[2] = 0)),
                  (X || V) &&
                    (A && A(Z),
                    V && (p && 1 === V && p(Z), m && m(Z), (V = 0)),
                    (X = !1)),
                  G && !(G = !1) && H && H(Z),
                  U && (B(Z), (U = !1)),
                  (q = 0);
              },
              pt = function (t, e, n) {
                (st[n] += t),
                  (lt[n] += e),
                  Z._vx.update(t),
                  Z._vy.update(e),
                  a ? q || (q = requestAnimationFrame(ft)) : ft();
              },
              ht = function (t, e) {
                $ &&
                  !W &&
                  ((Z.axis = W = Math.abs(t) > Math.abs(e) ? 'x' : 'y'),
                  (G = !0)),
                  'y' !== W && ((st[2] += t), Z._vx.update(t, !0)),
                  'x' !== W && ((lt[2] += e), Z._vy.update(e, !0)),
                  a ? q || (q = requestAnimationFrame(ft)) : ft();
              },
              mt = function (t) {
                if (!dt(t, 1)) {
                  var e = (t = si(t, s)).clientX,
                    r = t.clientY,
                    o = e - Z.x,
                    i = r - Z.y,
                    a = Z.isDragging;
                  (Z.x = e),
                    (Z.y = r),
                    (a ||
                      ((o || i) &&
                        (Math.abs(Z.startX - e) >= n ||
                          Math.abs(Z.startY - r) >= n))) &&
                      ((V = a ? 2 : 1), a || (Z.isDragging = !0), ht(o, i));
                }
              },
              gt = (Z.onPress = function (t) {
                dt(t, 1) ||
                  (t && t.button) ||
                  ((Z.axis = W = null),
                  Y.pause(),
                  (Z.isPressed = !0),
                  (t = si(t)),
                  (K = Q = 0),
                  (Z.startX = Z.x = t.clientX),
                  (Z.startY = Z.y = t.clientY),
                  Z._vx.reset(),
                  Z._vy.reset(),
                  Zo(L ? o : at, No[1], mt, J, !0),
                  (Z.deltaX = Z.deltaY = 0),
                  g && g(Z));
              }),
              vt = (Z.onRelease = function (t) {
                if (!dt(t, 1)) {
                  Ko(L ? o : at, No[1], mt, !0);
                  var e = !isNaN(Z.y - Z.startY),
                    n = Z.isDragging,
                    r =
                      n &&
                      (Math.abs(Z.x - Z.startX) > 3 ||
                        Math.abs(Z.y - Z.startY) > 3),
                    i = si(t);
                  !r &&
                    e &&
                    (Z._vx.reset(),
                    Z._vy.reset(),
                    s &&
                      F &&
                      Oo.delayedCall(0.08, function () {
                        if (Xo() - ct > 300 && !t.defaultPrevented)
                          if (t.target.click) t.target.click();
                          else if (at.createEvent) {
                            var e = at.createEvent('MouseEvents');
                            e.initMouseEvent(
                              'click',
                              !0,
                              !0,
                              Po,
                              1,
                              i.screenX,
                              i.screenY,
                              i.clientX,
                              i.clientY,
                              !1,
                              !1,
                              !1,
                              !1,
                              0,
                              null,
                            ),
                              t.target.dispatchEvent(e);
                          }
                      })),
                    (Z.isDragging = Z.isGesturing = Z.isPressed = !1),
                    l && n && !L && Y.restart(!0),
                    V && ft(),
                    h && n && h(Z),
                    v && v(Z, r);
                }
              }),
              wt = function (t) {
                return (
                  t.touches &&
                  t.touches.length > 1 &&
                  (Z.isGesturing = !0) &&
                  M(t, Z.isDragging)
                );
              },
              yt = function () {
                return (Z.isGesturing = !1) || j(Z);
              },
              bt = function (t) {
                if (!dt(t)) {
                  var e = tt(),
                    n = et();
                  pt((e - nt) * I, (n - rt) * I, 1),
                    (nt = e),
                    (rt = n),
                    l && Y.restart(!0);
                }
              },
              _t = function (t) {
                if (!dt(t)) {
                  (t = si(t, s)), B && (U = !0);
                  var e =
                    (1 === t.deltaMode
                      ? i
                      : 2 === t.deltaMode
                        ? Po.innerHeight
                        : 1) * d;
                  pt(t.deltaX * e, t.deltaY * e, 0), l && !L && Y.restart(!0);
                }
              },
              xt = function (t) {
                if (!dt(t)) {
                  var e = t.clientX,
                    n = t.clientY,
                    r = e - Z.x,
                    o = n - Z.y;
                  (Z.x = e),
                    (Z.y = n),
                    (X = !0),
                    l && Y.restart(!0),
                    (r || o) && ht(r, o);
                }
              },
              kt = function (t) {
                (Z.event = t), S(Z);
              },
              Et = function (t) {
                (Z.event = t), O(Z);
              },
              Tt = function (t) {
                return dt(t) || (si(t, s) && D(Z));
              };
            (Y = Z._dc =
              Oo.delayedCall(c || 0.25, function () {
                Z._vx.reset(), Z._vy.reset(), Y.pause(), l && l(Z);
              }).pause()),
              (Z.deltaX = Z.deltaY = 0),
              (Z._vx = ai(0, 50, !0)),
              (Z._vy = ai(0, 50, !0)),
              (Z.scrollX = tt),
              (Z.scrollY = et),
              (Z.isDragging = Z.isGesturing = Z.isPressed = !1),
              Fo(this),
              (Z.enable = function (t) {
                return (
                  Z.isEnabled ||
                    (Zo(it ? at : o, 'scroll', ti),
                    r.indexOf('scroll') >= 0 &&
                      Zo(it ? at : o, 'scroll', bt, J, N),
                    r.indexOf('wheel') >= 0 && Zo(o, 'wheel', _t, J, N),
                    ((r.indexOf('touch') >= 0 && Bo) ||
                      r.indexOf('pointer') >= 0) &&
                      (Zo(o, No[0], gt, J, N),
                      Zo(at, No[2], vt),
                      Zo(at, No[3], vt),
                      F && Zo(o, 'click', ut, !0, !0),
                      D && Zo(o, 'click', Tt),
                      M && Zo(at, 'gesturestart', wt),
                      j && Zo(at, 'gestureend', yt),
                      S && Zo(o, zo + 'enter', kt),
                      O && Zo(o, zo + 'leave', Et),
                      A && Zo(o, zo + 'move', xt)),
                    (Z.isEnabled = !0),
                    (Z.isDragging = Z.isGesturing = Z.isPressed = X = V = !1),
                    Z._vx.reset(),
                    Z._vy.reset(),
                    (nt = tt()),
                    (rt = et()),
                    t && t.type && gt(t),
                    z && z(Z)),
                  Z
                );
              }),
              (Z.disable = function () {
                Z.isEnabled &&
                  (qo.filter(function (t) {
                    return t !== Z && Wo(t.target);
                  }).length || Ko(it ? at : o, 'scroll', ti),
                  Z.isPressed &&
                    (Z._vx.reset(),
                    Z._vy.reset(),
                    Ko(L ? o : at, No[1], mt, !0)),
                  Ko(it ? at : o, 'scroll', bt, N),
                  Ko(o, 'wheel', _t, N),
                  Ko(o, No[0], gt, N),
                  Ko(at, No[2], vt),
                  Ko(at, No[3], vt),
                  Ko(o, 'click', ut, !0),
                  Ko(o, 'click', Tt),
                  Ko(at, 'gesturestart', wt),
                  Ko(at, 'gestureend', yt),
                  Ko(o, zo + 'enter', kt),
                  Ko(o, zo + 'leave', Et),
                  Ko(o, zo + 'move', xt),
                  (Z.isEnabled = Z.isPressed = Z.isDragging = !1),
                  R && R(Z));
              }),
              (Z.kill = Z.revert =
                function () {
                  Z.disable();
                  var t = qo.indexOf(Z);
                  t >= 0 && qo.splice(t, 1), Io === Z && (Io = 0);
                }),
              qo.push(Z),
              L && Wo(o) && (Io = Z),
              Z.enable(f);
          }),
          (e = t),
          (n = [
            {
              key: 'velocityX',
              get: function () {
                return this._vx.getVelocity();
              },
            },
            {
              key: 'velocityY',
              get: function () {
                return this._vy.getVelocity();
              },
            },
          ]) && So(e.prototype, n),
          t
        );
      })();
      (di.version = '3.12.7'),
        (di.create = function (t) {
          return new di(t);
        }),
        (di.register = ui),
        (di.getAll = function () {
          return qo.slice();
        }),
        (di.getById = function (t) {
          return qo.filter(function (e) {
            return e.vars.id === t;
          })[0];
        }),
        $o() && Oo.registerPlugin(di);
      var fi,
        pi,
        hi,
        mi,
        gi,
        vi,
        wi,
        yi,
        bi,
        _i,
        xi,
        ki,
        Ei,
        Ti,
        Ci,
        Si,
        Oi,
        Ai,
        Pi,
        Li,
        Mi,
        ji,
        Bi,
        zi,
        Ri,
        Di,
        Ii,
        Ni,
        Fi,
        $i,
        Hi,
        qi,
        Yi,
        Vi,
        Xi,
        Ui,
        Gi,
        Wi,
        Zi = 1,
        Ki = Date.now,
        Qi = Ki(),
        Ji = 0,
        ta = 0,
        ea = function (t, e, n) {
          var r =
            ma(t) && ('clamp(' === t.substr(0, 6) || t.indexOf('max') > -1);
          return (n['_' + e + 'Clamp'] = r), r ? t.substr(6, t.length - 7) : t;
        },
        na = function (t, e) {
          return !e || (ma(t) && 'clamp(' === t.substr(0, 6))
            ? t
            : 'clamp(' + t + ')';
        },
        ra = function t() {
          return ta && requestAnimationFrame(t);
        },
        oa = function () {
          return (Ti = 1);
        },
        ia = function () {
          return (Ti = 0);
        },
        aa = function (t) {
          return t;
        },
        sa = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        la = function () {
          return 'undefined' != typeof window;
        },
        ca = function () {
          return fi || (la() && (fi = window.gsap) && fi.registerPlugin && fi);
        },
        ua = function (t) {
          return !!~wi.indexOf(t);
        },
        da = function (t) {
          return (
            ('Height' === t ? Hi : hi['inner' + t]) ||
            gi['client' + t] ||
            vi['client' + t]
          );
        },
        fa = function (t) {
          return (
            Go(t, 'getBoundingClientRect') ||
            (ua(t)
              ? function () {
                  return (Ts.width = hi.innerWidth), (Ts.height = Hi), Ts;
                }
              : function () {
                  return Ia(t);
                })
          );
        },
        pa = function (t, e) {
          var n = e.s,
            r = e.d2,
            o = e.d,
            i = e.a;
          return Math.max(
            0,
            (n = 'scroll' + r) && (i = Go(t, n))
              ? i() - fa(t)()[o]
              : ua(t)
                ? (gi[n] || vi[n]) - da(r)
                : t[n] - t['offset' + r],
          );
        },
        ha = function (t, e) {
          for (var n = 0; n < Pi.length; n += 3)
            (!e || ~e.indexOf(Pi[n + 1])) && t(Pi[n], Pi[n + 1], Pi[n + 2]);
        },
        ma = function (t) {
          return 'string' == typeof t;
        },
        ga = function (t) {
          return 'function' == typeof t;
        },
        va = function (t) {
          return 'number' == typeof t;
        },
        wa = function (t) {
          return 'object' == typeof t;
        },
        ya = function (t, e, n) {
          return t && t.progress(e ? 0 : 1) && n && t.pause();
        },
        ba = function (t, e) {
          if (t.enabled) {
            var n = t._ctx
              ? t._ctx.add(function () {
                  return e(t);
                })
              : e(t);
            n && n.totalTime && (t.callbackAnimation = n);
          }
        },
        _a = Math.abs,
        xa = 'left',
        ka = 'right',
        Ea = 'bottom',
        Ta = 'width',
        Ca = 'height',
        Sa = 'Right',
        Oa = 'Left',
        Aa = 'Top',
        Pa = 'Bottom',
        La = 'padding',
        Ma = 'margin',
        ja = 'Width',
        Ba = 'Height',
        za = 'px',
        Ra = function (t) {
          return hi.getComputedStyle(t);
        },
        Da = function (t, e) {
          for (var n in e) n in t || (t[n] = e[n]);
          return t;
        },
        Ia = function (t, e) {
          var n =
              e &&
              'matrix(1, 0, 0, 1, 0, 0)' !== Ra(t)[Ci] &&
              fi
                .to(t, {
                  x: 0,
                  y: 0,
                  xPercent: 0,
                  yPercent: 0,
                  rotation: 0,
                  rotationX: 0,
                  rotationY: 0,
                  scale: 1,
                  skewX: 0,
                  skewY: 0,
                })
                .progress(1),
            r = t.getBoundingClientRect();
          return n && n.progress(0).kill(), r;
        },
        Na = function (t, e) {
          var n = e.d2;
          return t['offset' + n] || t['client' + n] || 0;
        },
        Fa = function (t) {
          var e,
            n = [],
            r = t.labels,
            o = t.duration();
          for (e in r) n.push(r[e] / o);
          return n;
        },
        $a = function (t) {
          var e = fi.utils.snap(t),
            n =
              Array.isArray(t) &&
              t.slice(0).sort(function (t, e) {
                return t - e;
              });
          return n
            ? function (t, r, o) {
                var i;
                if ((void 0 === o && (o = 0.001), !r)) return e(t);
                if (r > 0) {
                  for (t -= o, i = 0; i < n.length; i++)
                    if (n[i] >= t) return n[i];
                  return n[i - 1];
                }
                for (i = n.length, t += o; i--; ) if (n[i] <= t) return n[i];
                return n[0];
              }
            : function (n, r, o) {
                void 0 === o && (o = 0.001);
                var i = e(n);
                return !r || Math.abs(i - n) < o || i - n < 0 == r < 0
                  ? i
                  : e(r < 0 ? n - t : n + t);
              };
        },
        Ha = function (t, e, n, r) {
          return n.split(',').forEach(function (n) {
            return t(e, n, r);
          });
        },
        qa = function (t, e, n, r, o) {
          return t.addEventListener(e, n, { passive: !r, capture: !!o });
        },
        Ya = function (t, e, n, r) {
          return t.removeEventListener(e, n, !!r);
        },
        Va = function (t, e, n) {
          (n = n && n.wheelHandler) && (t(e, 'wheel', n), t(e, 'touchmove', n));
        },
        Xa = {
          startColor: 'green',
          endColor: 'red',
          indent: 0,
          fontSize: '16px',
          fontWeight: 'normal',
        },
        Ua = { toggleActions: 'play', anticipatePin: 0 },
        Ga = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
        Wa = function (t, e) {
          if (ma(t)) {
            var n = t.indexOf('='),
              r = ~n ? +(t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1)) : 0;
            ~n &&
              (t.indexOf('%') > n && (r *= e / 100), (t = t.substr(0, n - 1))),
              (t =
                r +
                (t in Ga
                  ? Ga[t] * e
                  : ~t.indexOf('%')
                    ? (parseFloat(t) * e) / 100
                    : parseFloat(t) || 0));
          }
          return t;
        },
        Za = function (t, e, n, r, o, i, a, s) {
          var l = o.startColor,
            c = o.endColor,
            u = o.fontSize,
            d = o.indent,
            f = o.fontWeight,
            p = mi.createElement('div'),
            h = ua(n) || 'fixed' === Go(n, 'pinType'),
            m = -1 !== t.indexOf('scroller'),
            g = h ? vi : n,
            v = -1 !== t.indexOf('start'),
            w = v ? l : c,
            y =
              'border-color:' +
              w +
              ';font-size:' +
              u +
              ';color:' +
              w +
              ';font-weight:' +
              f +
              ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;';
          return (
            (y += 'position:' + ((m || s) && h ? 'fixed;' : 'absolute;')),
            (m || s || !h) &&
              (y += (r === ri ? ka : Ea) + ':' + (i + parseFloat(d)) + 'px;'),
            a &&
              (y +=
                'box-sizing:border-box;text-align:left;width:' +
                a.offsetWidth +
                'px;'),
            (p._isStart = v),
            p.setAttribute(
              'class',
              'gsap-marker-' + t + (e ? ' marker-' + e : ''),
            ),
            (p.style.cssText = y),
            (p.innerText = e || 0 === e ? t + '-' + e : t),
            g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
            (p._offset = p['offset' + r.op.d2]),
            Ka(p, 0, r, v),
            p
          );
        },
        Ka = function (t, e, n, r) {
          var o = { display: 'block' },
            i = n[r ? 'os2' : 'p2'],
            a = n[r ? 'p2' : 'os2'];
          (t._isFlipped = r),
            (o[n.a + 'Percent'] = r ? -100 : 0),
            (o[n.a] = r ? '1px' : 0),
            (o['border' + i + ja] = 1),
            (o['border' + a + ja] = 0),
            (o[n.p] = e + 'px'),
            fi.set(t, o);
        },
        Qa = [],
        Ja = {},
        ts = function () {
          return Ki() - Ji > 34 && (Xi || (Xi = requestAnimationFrame(ws)));
        },
        es = function () {
          (!Bi || !Bi.isPressed || Bi.startX > vi.clientWidth) &&
            (Yo.cache++,
            Bi ? Xi || (Xi = requestAnimationFrame(ws)) : ws(),
            Ji || ss('scrollStart'),
            (Ji = Ki()));
        },
        ns = function () {
          (Di = hi.innerWidth), (Ri = hi.innerHeight);
        },
        rs = function (t) {
          Yo.cache++,
            (!0 === t ||
              (!Ei &&
                !ji &&
                !mi.fullscreenElement &&
                !mi.webkitFullscreenElement &&
                (!zi ||
                  Di !== hi.innerWidth ||
                  Math.abs(hi.innerHeight - Ri) > 0.25 * hi.innerHeight))) &&
              yi.restart(!0);
        },
        os = {},
        is = [],
        as = function t() {
          return Ya(Ms, 'scrollEnd', t) || ms(!0);
        },
        ss = function (t) {
          return (
            (os[t] &&
              os[t].map(function (t) {
                return t();
              })) ||
            is
          );
        },
        ls = [],
        cs = function (t) {
          for (var e = 0; e < ls.length; e += 5)
            (!t || (ls[e + 4] && ls[e + 4].query === t)) &&
              ((ls[e].style.cssText = ls[e + 1]),
              ls[e].getBBox && ls[e].setAttribute('transform', ls[e + 2] || ''),
              (ls[e + 3].uncache = 1));
        },
        us = function (t, e) {
          var n;
          for (Si = 0; Si < Qa.length; Si++)
            !(n = Qa[Si]) ||
              (e && n._ctx !== e) ||
              (t ? n.kill(1) : n.revert(!0, !0));
          (qi = !0), e && cs(e), e || ss('revert');
        },
        ds = function (t, e) {
          Yo.cache++,
            (e || !Ui) &&
              Yo.forEach(function (t) {
                return ga(t) && t.cacheID++ && (t.rec = 0);
              }),
            ma(t) && (hi.history.scrollRestoration = Fi = t);
        },
        fs = 0,
        ps = function () {
          vi.appendChild($i),
            (Hi = (!Bi && $i.offsetHeight) || hi.innerHeight),
            vi.removeChild($i);
        },
        hs = function (t) {
          return bi(
            '.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end',
          ).forEach(function (e) {
            return (e.style.display = t ? 'none' : 'block');
          });
        },
        ms = function (t, e) {
          if (
            ((gi = mi.documentElement),
            (vi = mi.body),
            (wi = [hi, mi, gi, vi]),
            !Ji || t || qi)
          ) {
            ps(),
              (Ui = Ms.isRefreshing = !0),
              Yo.forEach(function (t) {
                return ga(t) && ++t.cacheID && (t.rec = t());
              });
            var n = ss('refreshInit');
            Li && Ms.sort(),
              e || us(),
              Yo.forEach(function (t) {
                ga(t) &&
                  (t.smooth && (t.target.style.scrollBehavior = 'auto'), t(0));
              }),
              Qa.slice(0).forEach(function (t) {
                return t.refresh();
              }),
              (qi = !1),
              Qa.forEach(function (t) {
                if (t._subPinOffset && t.pin) {
                  var e = t.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
                    n = t.pin[e];
                  t.revert(!0, 1),
                    t.adjustPinSpacing(t.pin[e] - n),
                    t.refresh();
                }
              }),
              (Yi = 1),
              hs(!0),
              Qa.forEach(function (t) {
                var e = pa(t.scroller, t._dir),
                  n = 'max' === t.vars.end || (t._endClamp && t.end > e),
                  r = t._startClamp && t.start >= e;
                (n || r) &&
                  t.setPositions(
                    r ? e - 1 : t.start,
                    n ? Math.max(r ? e : t.start + 1, e) : t.end,
                    !0,
                  );
              }),
              hs(!1),
              (Yi = 0),
              n.forEach(function (t) {
                return t && t.render && t.render(-1);
              }),
              Yo.forEach(function (t) {
                ga(t) &&
                  (t.smooth &&
                    requestAnimationFrame(function () {
                      return (t.target.style.scrollBehavior = 'smooth');
                    }),
                  t.rec && t(t.rec));
              }),
              ds(Fi, 1),
              yi.pause(),
              fs++,
              (Ui = 2),
              ws(2),
              Qa.forEach(function (t) {
                return ga(t.vars.onRefresh) && t.vars.onRefresh(t);
              }),
              (Ui = Ms.isRefreshing = !1),
              ss('refresh');
          } else qa(Ms, 'scrollEnd', as);
        },
        gs = 0,
        vs = 1,
        ws = function (t) {
          if (2 === t || (!Ui && !qi)) {
            (Ms.isUpdating = !0), Wi && Wi.update(0);
            var e = Qa.length,
              n = Ki(),
              r = n - Qi >= 50,
              o = e && Qa[0].scroll();
            if (
              ((vs = gs > o ? -1 : 1),
              Ui || (gs = o),
              r &&
                (Ji && !Ti && n - Ji > 200 && ((Ji = 0), ss('scrollEnd')),
                (xi = Qi),
                (Qi = n)),
              vs < 0)
            ) {
              for (Si = e; Si-- > 0; ) Qa[Si] && Qa[Si].update(0, r);
              vs = 1;
            } else for (Si = 0; Si < e; Si++) Qa[Si] && Qa[Si].update(0, r);
            Ms.isUpdating = !1;
          }
          Xi = 0;
        },
        ys = [
          xa,
          'top',
          Ea,
          ka,
          Ma + Pa,
          Ma + Sa,
          Ma + Aa,
          Ma + Oa,
          'display',
          'flexShrink',
          'float',
          'zIndex',
          'gridColumnStart',
          'gridColumnEnd',
          'gridRowStart',
          'gridRowEnd',
          'gridArea',
          'justifySelf',
          'alignSelf',
          'placeSelf',
          'order',
        ],
        bs = ys.concat([
          Ta,
          Ca,
          'boxSizing',
          'max' + ja,
          'max' + Ba,
          'position',
          Ma,
          La,
          La + Aa,
          La + Sa,
          La + Pa,
          La + Oa,
        ]),
        _s = function (t, e, n, r) {
          if (!t._gsap.swappedIn) {
            for (var o, i = ys.length, a = e.style, s = t.style; i--; )
              a[(o = ys[i])] = n[o];
            (a.position = 'absolute' === n.position ? 'absolute' : 'relative'),
              'inline' === n.display && (a.display = 'inline-block'),
              (s[Ea] = s[ka] = 'auto'),
              (a.flexBasis = n.flexBasis || 'auto'),
              (a.overflow = 'visible'),
              (a.boxSizing = 'border-box'),
              (a[Ta] = Na(t, ni) + za),
              (a[Ca] = Na(t, ri) + za),
              (a[La] = s[Ma] = s.top = s[xa] = '0'),
              ks(r),
              (s[Ta] = s['max' + ja] = n[Ta]),
              (s[Ca] = s['max' + Ba] = n[Ca]),
              (s[La] = n[La]),
              t.parentNode !== e &&
                (t.parentNode.insertBefore(e, t), e.appendChild(t)),
              (t._gsap.swappedIn = !0);
          }
        },
        xs = /([A-Z])/g,
        ks = function (t) {
          if (t) {
            var e,
              n,
              r = t.t.style,
              o = t.length,
              i = 0;
            for (
              (t.t._gsap || fi.core.getCache(t.t)).uncache = 1;
              i < o;
              i += 2
            )
              (n = t[i + 1]),
                (e = t[i]),
                n
                  ? (r[e] = n)
                  : r[e] &&
                    r.removeProperty(e.replace(xs, '-$1').toLowerCase());
          }
        },
        Es = function (t) {
          for (var e = bs.length, n = t.style, r = [], o = 0; o < e; o++)
            r.push(bs[o], n[bs[o]]);
          return (r.t = t), r;
        },
        Ts = { left: 0, top: 0 },
        Cs = function (t, e, n, r, o, i, a, s, l, c, u, d, f, p) {
          ga(t) && (t = t(s)),
            ma(t) &&
              'max' === t.substr(0, 3) &&
              (t = d + ('=' === t.charAt(4) ? Wa('0' + t.substr(3), n) : 0));
          var h,
            m,
            g,
            v = f ? f.time() : 0;
          if ((f && f.seek(0), isNaN(t) || (t = +t), va(t)))
            f &&
              (t = fi.utils.mapRange(
                f.scrollTrigger.start,
                f.scrollTrigger.end,
                0,
                d,
                t,
              )),
              a && Ka(a, n, r, !0);
          else {
            ga(e) && (e = e(s));
            var w,
              y,
              b,
              _,
              x = (t || '0').split(' ');
            (g = oi(e, s) || vi),
              ((w = Ia(g) || {}) && (w.left || w.top)) ||
                'none' !== Ra(g).display ||
                ((_ = g.style.display),
                (g.style.display = 'block'),
                (w = Ia(g)),
                _ ? (g.style.display = _) : g.style.removeProperty('display')),
              (y = Wa(x[0], w[r.d])),
              (b = Wa(x[1] || '0', n)),
              (t = w[r.p] - l[r.p] - c + y + o - b),
              a && Ka(a, b, r, n - b < 20 || (a._isStart && b > 20)),
              (n -= n - b);
          }
          if ((p && ((s[p] = t || -0.001), t < 0 && (t = 0)), i)) {
            var k = t + n,
              E = i._isStart;
            (h = 'scroll' + r.d2),
              Ka(
                i,
                k,
                r,
                (E && k > 20) ||
                  (!E &&
                    (u ? Math.max(vi[h], gi[h]) : i.parentNode[h]) <= k + 1),
              ),
              u &&
                ((l = Ia(a)),
                u && (i.style[r.op.p] = l[r.op.p] - r.op.m - i._offset + za));
          }
          return (
            f &&
              g &&
              ((h = Ia(g)),
              f.seek(d),
              (m = Ia(g)),
              (f._caScrollDist = h[r.p] - m[r.p]),
              (t = (t / f._caScrollDist) * d)),
            f && f.seek(v),
            f ? t : Math.round(t)
          );
        },
        Ss = /(webkit|moz|length|cssText|inset)/i,
        Os = function (t, e, n, r) {
          if (t.parentNode !== e) {
            var o,
              i,
              a = t.style;
            if (e === vi) {
              for (o in ((t._stOrig = a.cssText), (i = Ra(t))))
                +o ||
                  Ss.test(o) ||
                  !i[o] ||
                  'string' != typeof a[o] ||
                  '0' === o ||
                  (a[o] = i[o]);
              (a.top = n), (a.left = r);
            } else a.cssText = t._stOrig;
            (fi.core.getCache(t).uncache = 1), e.appendChild(t);
          }
        },
        As = function (t, e, n) {
          var r = e,
            o = r;
          return function (e) {
            var i = Math.round(t());
            return (
              i !== r &&
                i !== o &&
                Math.abs(i - r) > 3 &&
                Math.abs(i - o) > 3 &&
                ((e = i), n && n()),
              (o = r),
              (r = Math.round(e))
            );
          };
        },
        Ps = function (t, e, n) {
          var r = {};
          (r[e.p] = '+=' + n), fi.set(t, r);
        },
        Ls = function (t, e) {
          var n = ii(t, e),
            r = '_scroll' + e.p2,
            o = function e(o, i, a, s, l) {
              var c = e.tween,
                u = i.onComplete,
                d = {};
              a = a || n();
              var f = As(n, a, function () {
                c.kill(), (e.tween = 0);
              });
              return (
                (l = (s && l) || 0),
                (s = s || o - a),
                c && c.kill(),
                (i[r] = o),
                (i.inherit = !1),
                (i.modifiers = d),
                (d[r] = function () {
                  return f(a + s * c.ratio + l * c.ratio * c.ratio);
                }),
                (i.onUpdate = function () {
                  Yo.cache++, e.tween && ws();
                }),
                (i.onComplete = function () {
                  (e.tween = 0), u && u.call(c);
                }),
                (c = e.tween = fi.to(t, i))
              );
            };
          return (
            (t[r] = n),
            (n.wheelHandler = function () {
              return o.tween && o.tween.kill() && (o.tween = 0);
            }),
            qa(t, 'wheel', n.wheelHandler),
            Ms.isTouch && qa(t, 'touchmove', n.wheelHandler),
            o
          );
        },
        Ms = (function () {
          function t(e, n) {
            pi ||
              t.register(fi) ||
              console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
              Ni(this),
              this.init(e, n);
          }
          return (
            (t.prototype.init = function (e, n) {
              if (
                ((this.progress = this.start = 0),
                this.vars && this.kill(!0, !0),
                ta)
              ) {
                var r,
                  o,
                  i,
                  a,
                  s,
                  l,
                  c,
                  u,
                  d,
                  f,
                  p,
                  h,
                  m,
                  g,
                  v,
                  w,
                  y,
                  b,
                  _,
                  x,
                  k,
                  E,
                  T,
                  C,
                  S,
                  O,
                  A,
                  P,
                  L,
                  M,
                  j,
                  B,
                  z,
                  R,
                  D,
                  I,
                  N,
                  F,
                  $,
                  H,
                  q,
                  Y,
                  V = (e = Da(
                    ma(e) || va(e) || e.nodeType ? { trigger: e } : e,
                    Ua,
                  )),
                  X = V.onUpdate,
                  U = V.toggleClass,
                  G = V.id,
                  W = V.onToggle,
                  Z = V.onRefresh,
                  K = V.scrub,
                  Q = V.trigger,
                  J = V.pin,
                  tt = V.pinSpacing,
                  et = V.invalidateOnRefresh,
                  nt = V.anticipatePin,
                  rt = V.onScrubComplete,
                  ot = V.onSnapComplete,
                  it = V.once,
                  at = V.snap,
                  st = V.pinReparent,
                  lt = V.pinSpacer,
                  ct = V.containerAnimation,
                  ut = V.fastScrollEnd,
                  dt = V.preventOverlaps,
                  ft =
                    e.horizontal ||
                    (e.containerAnimation && !1 !== e.horizontal)
                      ? ni
                      : ri,
                  pt = !K && 0 !== K,
                  ht = oi(e.scroller || hi),
                  mt = fi.core.getCache(ht),
                  gt = ua(ht),
                  vt =
                    'fixed' ===
                    ('pinType' in e
                      ? e.pinType
                      : Go(ht, 'pinType') || (gt && 'fixed')),
                  wt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                  yt = pt && e.toggleActions.split(' '),
                  bt = 'markers' in e ? e.markers : Ua.markers,
                  _t = gt ? 0 : parseFloat(Ra(ht)['border' + ft.p2 + ja]) || 0,
                  xt = this,
                  kt =
                    e.onRefreshInit &&
                    function () {
                      return e.onRefreshInit(xt);
                    },
                  Et = (function (t, e, n) {
                    var r = n.d,
                      o = n.d2,
                      i = n.a;
                    return (i = Go(t, 'getBoundingClientRect'))
                      ? function () {
                          return i()[r];
                        }
                      : function () {
                          return (e ? da(o) : t['client' + o]) || 0;
                        };
                  })(ht, gt, ft),
                  Tt = (function (t, e) {
                    return !e || ~Vo.indexOf(t)
                      ? fa(t)
                      : function () {
                          return Ts;
                        };
                  })(ht, gt),
                  Ct = 0,
                  St = 0,
                  Ot = 0,
                  At = ii(ht, ft);
                if (
                  ((xt._startClamp = xt._endClamp = !1),
                  (xt._dir = ft),
                  (nt *= 45),
                  (xt.scroller = ht),
                  (xt.scroll = ct ? ct.time.bind(ct) : At),
                  (a = At()),
                  (xt.vars = e),
                  (n = n || e.animation),
                  'refreshPriority' in e &&
                    ((Li = 1), -9999 === e.refreshPriority && (Wi = xt)),
                  (mt.tweenScroll = mt.tweenScroll || {
                    top: Ls(ht, ri),
                    left: Ls(ht, ni),
                  }),
                  (xt.tweenTo = r = mt.tweenScroll[ft.p]),
                  (xt.scrubDuration = function (t) {
                    (z = va(t) && t)
                      ? B
                        ? B.duration(t)
                        : (B = fi.to(n, {
                            ease: 'expo',
                            totalProgress: '+=0',
                            inherit: !1,
                            duration: z,
                            paused: !0,
                            onComplete: function () {
                              return rt && rt(xt);
                            },
                          }))
                      : (B && B.progress(1).kill(), (B = 0));
                  }),
                  n &&
                    ((n.vars.lazy = !1),
                    (n._initted && !xt.isReverted) ||
                      (!1 !== n.vars.immediateRender &&
                        !1 !== e.immediateRender &&
                        n.duration() &&
                        n.render(0, !0, !0)),
                    (xt.animation = n.pause()),
                    (n.scrollTrigger = xt),
                    xt.scrubDuration(K),
                    (M = 0),
                    G || (G = n.vars.id)),
                  at &&
                    ((wa(at) && !at.push) || (at = { snapTo: at }),
                    'scrollBehavior' in vi.style &&
                      fi.set(gt ? [vi, gi] : ht, { scrollBehavior: 'auto' }),
                    Yo.forEach(function (t) {
                      return (
                        ga(t) &&
                        t.target === (gt ? mi.scrollingElement || gi : ht) &&
                        (t.smooth = !1)
                      );
                    }),
                    (i = ga(at.snapTo)
                      ? at.snapTo
                      : 'labels' === at.snapTo
                        ? (function (t) {
                            return function (e) {
                              return fi.utils.snap(Fa(t), e);
                            };
                          })(n)
                        : 'labelsDirectional' === at.snapTo
                          ? ((H = n),
                            function (t, e) {
                              return $a(Fa(H))(t, e.direction);
                            })
                          : !1 !== at.directional
                            ? function (t, e) {
                                return $a(at.snapTo)(
                                  t,
                                  Ki() - St < 500 ? 0 : e.direction,
                                );
                              }
                            : fi.utils.snap(at.snapTo)),
                    (R = at.duration || { min: 0.1, max: 2 }),
                    (R = wa(R) ? _i(R.min, R.max) : _i(R, R)),
                    (D = fi
                      .delayedCall(at.delay || z / 2 || 0.1, function () {
                        var t = At(),
                          e = Ki() - St < 500,
                          o = r.tween;
                        if (
                          !(e || Math.abs(xt.getVelocity()) < 10) ||
                          o ||
                          Ti ||
                          Ct === t
                        )
                          xt.isActive && Ct !== t && D.restart(!0);
                        else {
                          var a,
                            s,
                            u = (t - l) / g,
                            d = n && !pt ? n.totalProgress() : u,
                            f = e ? 0 : ((d - j) / (Ki() - xi)) * 1e3 || 0,
                            p = fi.utils.clamp(
                              -u,
                              1 - u,
                              (_a(f / 2) * f) / 0.185,
                            ),
                            h = u + (!1 === at.inertia ? 0 : p),
                            m = at,
                            v = m.onStart,
                            w = m.onInterrupt,
                            y = m.onComplete;
                          if (
                            ((a = i(h, xt)),
                            va(a) || (a = h),
                            (s = Math.max(0, Math.round(l + a * g))),
                            t <= c && t >= l && s !== t)
                          ) {
                            if (o && !o._initted && o.data <= _a(s - t)) return;
                            !1 === at.inertia && (p = a - u),
                              r(
                                s,
                                {
                                  duration: R(
                                    _a(
                                      (0.185 * Math.max(_a(h - d), _a(a - d))) /
                                        f /
                                        0.05 || 0,
                                    ),
                                  ),
                                  ease: at.ease || 'power3',
                                  data: _a(s - t),
                                  onInterrupt: function () {
                                    return D.restart(!0) && w && w(xt);
                                  },
                                  onComplete: function () {
                                    xt.update(),
                                      (Ct = At()),
                                      n &&
                                        !pt &&
                                        (B
                                          ? B.resetTo(
                                              'totalProgress',
                                              a,
                                              n._tTime / n._tDur,
                                            )
                                          : n.progress(a)),
                                      (M = j =
                                        n && !pt
                                          ? n.totalProgress()
                                          : xt.progress),
                                      ot && ot(xt),
                                      y && y(xt);
                                  },
                                },
                                t,
                                p * g,
                                s - t - p * g,
                              ),
                              v && v(xt, r.tween);
                          }
                        }
                      })
                      .pause())),
                  G && (Ja[G] = xt),
                  ($ =
                    (Q = xt.trigger = oi(Q || (!0 !== J && J))) &&
                    Q._gsap &&
                    Q._gsap.stRevert) && ($ = $(xt)),
                  (J = !0 === J ? Q : oi(J)),
                  ma(U) && (U = { targets: Q, className: U }),
                  J &&
                    (!1 === tt ||
                      tt === Ma ||
                      (tt =
                        !(
                          !tt &&
                          J.parentNode &&
                          J.parentNode.style &&
                          'flex' === Ra(J.parentNode).display
                        ) && La),
                    (xt.pin = J),
                    (o = fi.core.getCache(J)).spacer
                      ? (v = o.pinState)
                      : (lt &&
                          ((lt = oi(lt)) &&
                            !lt.nodeType &&
                            (lt = lt.current || lt.nativeElement),
                          (o.spacerIsNative = !!lt),
                          lt && (o.spacerState = Es(lt))),
                        (o.spacer = b = lt || mi.createElement('div')),
                        b.classList.add('pin-spacer'),
                        G && b.classList.add('pin-spacer-' + G),
                        (o.pinState = v = Es(J))),
                    !1 !== e.force3D && fi.set(J, { force3D: !0 }),
                    (xt.spacer = b = o.spacer),
                    (L = Ra(J)),
                    (C = L[tt + ft.os2]),
                    (x = fi.getProperty(J)),
                    (k = fi.quickSetter(J, ft.a, za)),
                    _s(J, b, L),
                    (y = Es(J))),
                  bt)
                ) {
                  (h = wa(bt) ? Da(bt, Xa) : Xa),
                    (f = Za('scroller-start', G, ht, ft, h, 0)),
                    (p = Za('scroller-end', G, ht, ft, h, 0, f)),
                    (_ = f['offset' + ft.op.d2]);
                  var Pt = oi(Go(ht, 'content') || ht);
                  (u = this.markerStart = Za('start', G, Pt, ft, h, _, 0, ct)),
                    (d = this.markerEnd = Za('end', G, Pt, ft, h, _, 0, ct)),
                    ct && (F = fi.quickSetter([u, d], ft.a, za)),
                    vt ||
                      (Vo.length && !0 === Go(ht, 'fixedMarkers')) ||
                      ((Y = Ra((q = gt ? vi : ht)).position),
                      (q.style.position =
                        'absolute' === Y || 'fixed' === Y ? Y : 'relative'),
                      fi.set([f, p], { force3D: !0 }),
                      (O = fi.quickSetter(f, ft.a, za)),
                      (P = fi.quickSetter(p, ft.a, za)));
                }
                if (ct) {
                  var Lt = ct.vars.onUpdate,
                    Mt = ct.vars.onUpdateParams;
                  ct.eventCallback('onUpdate', function () {
                    xt.update(0, 0, 1), Lt && Lt.apply(ct, Mt || []);
                  });
                }
                if (
                  ((xt.previous = function () {
                    return Qa[Qa.indexOf(xt) - 1];
                  }),
                  (xt.next = function () {
                    return Qa[Qa.indexOf(xt) + 1];
                  }),
                  (xt.revert = function (t, e) {
                    if (!e) return xt.kill(!0);
                    var r = !1 !== t || !xt.enabled,
                      o = Ei;
                    r !== xt.isReverted &&
                      (r &&
                        ((I = Math.max(At(), xt.scroll.rec || 0)),
                        (Ot = xt.progress),
                        (N = n && n.progress())),
                      u &&
                        [u, d, f, p].forEach(function (t) {
                          return (t.style.display = r ? 'none' : 'block');
                        }),
                      r && ((Ei = xt), xt.update(r)),
                      !J ||
                        (st && xt.isActive) ||
                        (r
                          ? (function (t, e, n) {
                              ks(n);
                              var r = t._gsap;
                              if (r.spacerIsNative) ks(r.spacerState);
                              else if (t._gsap.swappedIn) {
                                var o = e.parentNode;
                                o && (o.insertBefore(t, e), o.removeChild(e));
                              }
                              t._gsap.swappedIn = !1;
                            })(J, b, v)
                          : _s(J, b, Ra(J), S)),
                      r || xt.update(r),
                      (Ei = o),
                      (xt.isReverted = r));
                  }),
                  (xt.refresh = function (o, i, h, _) {
                    if ((!Ei && xt.enabled) || i)
                      if (J && o && Ji) qa(t, 'scrollEnd', as);
                      else {
                        !Ui && kt && kt(xt),
                          (Ei = xt),
                          r.tween && !h && (r.tween.kill(), (r.tween = 0)),
                          B && B.pause(),
                          et && n && n.revert({ kill: !1 }).invalidate(),
                          xt.isReverted || xt.revert(!0, !0),
                          (xt._subPinOffset = !1);
                        var k,
                          C,
                          O,
                          P,
                          L,
                          M,
                          j,
                          z,
                          R,
                          F,
                          $,
                          H,
                          q,
                          Y = Et(),
                          V = Tt(),
                          X = ct ? ct.duration() : pa(ht, ft),
                          U = g <= 0.01,
                          G = 0,
                          W = _ || 0,
                          K = wa(h) ? h.end : e.end,
                          nt = e.endTrigger || Q,
                          rt = wa(h)
                            ? h.start
                            : e.start ||
                              (0 !== e.start && Q ? (J ? '0 0' : '0 100%') : 0),
                          ot = (xt.pinnedContainer =
                            e.pinnedContainer && oi(e.pinnedContainer, xt)),
                          it = (Q && Math.max(0, Qa.indexOf(xt))) || 0,
                          at = it;
                        for (
                          bt &&
                          wa(h) &&
                          ((H = fi.getProperty(f, ft.p)),
                          (q = fi.getProperty(p, ft.p)));
                          at-- > 0;

                        )
                          (M = Qa[at]).end || M.refresh(0, 1) || (Ei = xt),
                            !(j = M.pin) ||
                              (j !== Q && j !== J && j !== ot) ||
                              M.isReverted ||
                              (F || (F = []), F.unshift(M), M.revert(!0, !0)),
                            M !== Qa[at] && (it--, at--);
                        for (
                          ga(rt) && (rt = rt(xt)),
                            rt = ea(rt, 'start', xt),
                            l =
                              Cs(
                                rt,
                                Q,
                                Y,
                                ft,
                                At(),
                                u,
                                f,
                                xt,
                                V,
                                _t,
                                vt,
                                X,
                                ct,
                                xt._startClamp && '_startClamp',
                              ) || (J ? -0.001 : 0),
                            ga(K) && (K = K(xt)),
                            ma(K) &&
                              !K.indexOf('+=') &&
                              (~K.indexOf(' ')
                                ? (K = (ma(rt) ? rt.split(' ')[0] : '') + K)
                                : ((G = Wa(K.substr(2), Y)),
                                  (K = ma(rt)
                                    ? rt
                                    : (ct
                                        ? fi.utils.mapRange(
                                            0,
                                            ct.duration(),
                                            ct.scrollTrigger.start,
                                            ct.scrollTrigger.end,
                                            l,
                                          )
                                        : l) + G),
                                  (nt = Q))),
                            K = ea(K, 'end', xt),
                            c =
                              Math.max(
                                l,
                                Cs(
                                  K || (nt ? '100% 0' : X),
                                  nt,
                                  Y,
                                  ft,
                                  At() + G,
                                  d,
                                  p,
                                  xt,
                                  V,
                                  _t,
                                  vt,
                                  X,
                                  ct,
                                  xt._endClamp && '_endClamp',
                                ),
                              ) || -0.001,
                            G = 0,
                            at = it;
                          at--;

                        )
                          (j = (M = Qa[at]).pin) &&
                            M.start - M._pinPush <= l &&
                            !ct &&
                            M.end > 0 &&
                            ((k =
                              M.end -
                              (xt._startClamp
                                ? Math.max(0, M.start)
                                : M.start)),
                            ((j === Q && M.start - M._pinPush < l) ||
                              j === ot) &&
                              isNaN(rt) &&
                              (G += k * (1 - M.progress)),
                            j === J && (W += k));
                        if (
                          ((l += G),
                          (c += G),
                          xt._startClamp && (xt._startClamp += G),
                          xt._endClamp &&
                            !Ui &&
                            ((xt._endClamp = c || -0.001),
                            (c = Math.min(c, pa(ht, ft)))),
                          (g = c - l || ((l -= 0.01) && 0.001)),
                          U &&
                            (Ot = fi.utils.clamp(
                              0,
                              1,
                              fi.utils.normalize(l, c, I),
                            )),
                          (xt._pinPush = W),
                          u &&
                            G &&
                            (((k = {})[ft.a] = '+=' + G),
                            ot && (k[ft.p] = '-=' + At()),
                            fi.set([u, d], k)),
                          !J || (Yi && xt.end >= pa(ht, ft)))
                        ) {
                          if (Q && At() && !ct)
                            for (C = Q.parentNode; C && C !== vi; )
                              C._pinOffset &&
                                ((l -= C._pinOffset), (c -= C._pinOffset)),
                                (C = C.parentNode);
                        } else
                          (k = Ra(J)),
                            (P = ft === ri),
                            (O = At()),
                            (E = parseFloat(x(ft.a)) + W),
                            !X &&
                              c > 1 &&
                              (($ = {
                                style: ($ = (
                                  gt ? mi.scrollingElement || gi : ht
                                ).style),
                                value: $['overflow' + ft.a.toUpperCase()],
                              }),
                              gt &&
                                'scroll' !==
                                  Ra(vi)['overflow' + ft.a.toUpperCase()] &&
                                ($.style['overflow' + ft.a.toUpperCase()] =
                                  'scroll')),
                            _s(J, b, k),
                            (y = Es(J)),
                            (C = Ia(J, !0)),
                            (z = vt && ii(ht, P ? ni : ri)()),
                            tt
                              ? (((S = [tt + ft.os2, g + W + za]).t = b),
                                (at = tt === La ? Na(J, ft) + g + W : 0) &&
                                  (S.push(ft.d, at + za),
                                  'auto' !== b.style.flexBasis &&
                                    (b.style.flexBasis = at + za)),
                                ks(S),
                                ot &&
                                  Qa.forEach(function (t) {
                                    t.pin === ot &&
                                      !1 !== t.vars.pinSpacing &&
                                      (t._subPinOffset = !0);
                                  }),
                                vt && At(I))
                              : (at = Na(J, ft)) &&
                                'auto' !== b.style.flexBasis &&
                                (b.style.flexBasis = at + za),
                            vt &&
                              (((L = {
                                top: C.top + (P ? O - l : z) + za,
                                left: C.left + (P ? z : O - l) + za,
                                boxSizing: 'border-box',
                                position: 'fixed',
                              })[Ta] = L['max' + ja] =
                                Math.ceil(C.width) + za),
                              (L[Ca] = L['max' + Ba] =
                                Math.ceil(C.height) + za),
                              (L[Ma] =
                                L[Ma + Aa] =
                                L[Ma + Sa] =
                                L[Ma + Pa] =
                                L[Ma + Oa] =
                                  '0'),
                              (L[La] = k[La]),
                              (L[La + Aa] = k[La + Aa]),
                              (L[La + Sa] = k[La + Sa]),
                              (L[La + Pa] = k[La + Pa]),
                              (L[La + Oa] = k[La + Oa]),
                              (w = (function (t, e, n) {
                                for (
                                  var r, o = [], i = t.length, a = n ? 8 : 0;
                                  a < i;
                                  a += 2
                                )
                                  (r = t[a]),
                                    o.push(r, r in e ? e[r] : t[a + 1]);
                                return (o.t = t.t), o;
                              })(v, L, st)),
                              Ui && At(0)),
                            n
                              ? ((R = n._initted),
                                Mi(1),
                                n.render(n.duration(), !0, !0),
                                (T = x(ft.a) - E + g + W),
                                (A = Math.abs(g - T) > 1),
                                vt && A && w.splice(w.length - 2, 2),
                                n.render(0, !0, !0),
                                R || n.invalidate(!0),
                                n.parent || n.totalTime(n.totalTime()),
                                Mi(0))
                              : (T = g),
                            $ &&
                              ($.value
                                ? ($.style['overflow' + ft.a.toUpperCase()] =
                                    $.value)
                                : $.style.removeProperty('overflow-' + ft.a));
                        F &&
                          F.forEach(function (t) {
                            return t.revert(!1, !0);
                          }),
                          (xt.start = l),
                          (xt.end = c),
                          (a = s = Ui ? I : At()),
                          ct || Ui || (a < I && At(I), (xt.scroll.rec = 0)),
                          xt.revert(!1, !0),
                          (St = Ki()),
                          D && ((Ct = -1), D.restart(!0)),
                          (Ei = 0),
                          n &&
                            pt &&
                            (n._initted || N) &&
                            n.progress() !== N &&
                            n.progress(N || 0, !0).render(n.time(), !0, !0),
                          (U ||
                            Ot !== xt.progress ||
                            ct ||
                            et ||
                            (n && !n._initted)) &&
                            (n &&
                              !pt &&
                              n.totalProgress(
                                ct && l < -0.001 && !Ot
                                  ? fi.utils.normalize(l, c, 0)
                                  : Ot,
                                !0,
                              ),
                            (xt.progress = U || (a - l) / g === Ot ? 0 : Ot)),
                          J &&
                            tt &&
                            (b._pinOffset = Math.round(xt.progress * T)),
                          B && B.invalidate(),
                          isNaN(H) ||
                            ((H -= fi.getProperty(f, ft.p)),
                            (q -= fi.getProperty(p, ft.p)),
                            Ps(f, ft, H),
                            Ps(u, ft, H - (_ || 0)),
                            Ps(p, ft, q),
                            Ps(d, ft, q - (_ || 0))),
                          U && !Ui && xt.update(),
                          !Z || Ui || m || ((m = !0), Z(xt), (m = !1));
                      }
                  }),
                  (xt.getVelocity = function () {
                    return ((At() - s) / (Ki() - xi)) * 1e3 || 0;
                  }),
                  (xt.endAnimation = function () {
                    ya(xt.callbackAnimation),
                      n &&
                        (B
                          ? B.progress(1)
                          : n.paused()
                            ? pt || ya(n, xt.direction < 0, 1)
                            : ya(n, n.reversed()));
                  }),
                  (xt.labelToScroll = function (t) {
                    return (
                      (n &&
                        n.labels &&
                        (l || xt.refresh() || l) +
                          (n.labels[t] / n.duration()) * g) ||
                      0
                    );
                  }),
                  (xt.getTrailing = function (t) {
                    var e = Qa.indexOf(xt),
                      n =
                        xt.direction > 0
                          ? Qa.slice(0, e).reverse()
                          : Qa.slice(e + 1);
                    return (
                      ma(t)
                        ? n.filter(function (e) {
                            return e.vars.preventOverlaps === t;
                          })
                        : n
                    ).filter(function (t) {
                      return xt.direction > 0 ? t.end <= l : t.start >= c;
                    });
                  }),
                  (xt.update = function (t, e, o) {
                    if (!ct || o || t) {
                      var i,
                        u,
                        d,
                        p,
                        h,
                        m,
                        v,
                        _ = !0 === Ui ? I : xt.scroll(),
                        x = t ? 0 : (_ - l) / g,
                        S = x < 0 ? 0 : x > 1 ? 1 : x || 0,
                        L = xt.progress;
                      if (
                        (e &&
                          ((s = a),
                          (a = ct ? At() : _),
                          at &&
                            ((j = M), (M = n && !pt ? n.totalProgress() : S))),
                        nt &&
                          J &&
                          !Ei &&
                          !Zi &&
                          Ji &&
                          (!S && l < _ + ((_ - s) / (Ki() - xi)) * nt
                            ? (S = 1e-4)
                            : 1 === S &&
                              c > _ + ((_ - s) / (Ki() - xi)) * nt &&
                              (S = 0.9999)),
                        S !== L && xt.enabled)
                      ) {
                        if (
                          ((p =
                            (h =
                              (i = xt.isActive = !!S && S < 1) !=
                              (!!L && L < 1)) || !!S != !!L),
                          (xt.direction = S > L ? 1 : -1),
                          (xt.progress = S),
                          p &&
                            !Ei &&
                            ((u = S && !L ? 0 : 1 === S ? 1 : 1 === L ? 2 : 3),
                            pt &&
                              ((d =
                                (!h && 'none' !== yt[u + 1] && yt[u + 1]) ||
                                yt[u]),
                              (v =
                                n &&
                                ('complete' === d ||
                                  'reset' === d ||
                                  d in n)))),
                          dt &&
                            (h || v) &&
                            (v || K || !n) &&
                            (ga(dt)
                              ? dt(xt)
                              : xt.getTrailing(dt).forEach(function (t) {
                                  return t.endAnimation();
                                })),
                          pt ||
                            (!B || Ei || Zi
                              ? n && n.totalProgress(S, !(!Ei || (!St && !t)))
                              : (B._dp._time - B._start !== B._time &&
                                  B.render(B._dp._time - B._start),
                                B.resetTo
                                  ? B.resetTo(
                                      'totalProgress',
                                      S,
                                      n._tTime / n._tDur,
                                    )
                                  : ((B.vars.totalProgress = S),
                                    B.invalidate().restart()))),
                          J)
                        )
                          if ((t && tt && (b.style[tt + ft.os2] = C), vt)) {
                            if (p) {
                              if (
                                ((m =
                                  !t &&
                                  S > L &&
                                  c + 1 > _ &&
                                  _ + 1 >= pa(ht, ft)),
                                st)
                              )
                                if (t || (!i && !m)) Os(J, b);
                                else {
                                  var z = Ia(J, !0),
                                    R = _ - l;
                                  Os(
                                    J,
                                    vi,
                                    z.top + (ft === ri ? R : 0) + za,
                                    z.left + (ft === ri ? 0 : R) + za,
                                  );
                                }
                              ks(i || m ? w : y),
                                (A && S < 1 && i) ||
                                  k(E + (1 !== S || m ? 0 : T));
                            }
                          } else k(sa(E + T * S));
                        at && !r.tween && !Ei && !Zi && D.restart(!0),
                          U &&
                            (h || (it && S && (S < 1 || !Vi))) &&
                            bi(U.targets).forEach(function (t) {
                              return t.classList[i || it ? 'add' : 'remove'](
                                U.className,
                              );
                            }),
                          X && !pt && !t && X(xt),
                          p && !Ei
                            ? (pt &&
                                (v &&
                                  ('complete' === d
                                    ? n.pause().totalProgress(1)
                                    : 'reset' === d
                                      ? n.restart(!0).pause()
                                      : 'restart' === d
                                        ? n.restart(!0)
                                        : n[d]()),
                                X && X(xt)),
                              (!h && Vi) ||
                                (W && h && ba(xt, W),
                                wt[u] && ba(xt, wt[u]),
                                it && (1 === S ? xt.kill(!1, 1) : (wt[u] = 0)),
                                h ||
                                  (wt[(u = 1 === S ? 1 : 3)] && ba(xt, wt[u]))),
                              ut &&
                                !i &&
                                Math.abs(xt.getVelocity()) >
                                  (va(ut) ? ut : 2500) &&
                                (ya(xt.callbackAnimation),
                                B
                                  ? B.progress(1)
                                  : ya(n, 'reverse' === d ? 1 : !S, 1)))
                            : pt && X && !Ei && X(xt);
                      }
                      if (P) {
                        var N = ct
                          ? (_ / ct.duration()) * (ct._caScrollDist || 0)
                          : _;
                        O(N + (f._isFlipped ? 1 : 0)), P(N);
                      }
                      F && F((-_ / ct.duration()) * (ct._caScrollDist || 0));
                    }
                  }),
                  (xt.enable = function (e, n) {
                    xt.enabled ||
                      ((xt.enabled = !0),
                      qa(ht, 'resize', rs),
                      gt || qa(ht, 'scroll', es),
                      kt && qa(t, 'refreshInit', kt),
                      !1 !== e && ((xt.progress = Ot = 0), (a = s = Ct = At())),
                      !1 !== n && xt.refresh());
                  }),
                  (xt.getTween = function (t) {
                    return t && r ? r.tween : B;
                  }),
                  (xt.setPositions = function (t, e, n, r) {
                    if (ct) {
                      var o = ct.scrollTrigger,
                        i = ct.duration(),
                        a = o.end - o.start;
                      (t = o.start + (a * t) / i), (e = o.start + (a * e) / i);
                    }
                    xt.refresh(
                      !1,
                      !1,
                      {
                        start: na(t, n && !!xt._startClamp),
                        end: na(e, n && !!xt._endClamp),
                      },
                      r,
                    ),
                      xt.update();
                  }),
                  (xt.adjustPinSpacing = function (t) {
                    if (S && t) {
                      var e = S.indexOf(ft.d) + 1;
                      (S[e] = parseFloat(S[e]) + t + za),
                        (S[1] = parseFloat(S[1]) + t + za),
                        ks(S);
                    }
                  }),
                  (xt.disable = function (e, n) {
                    if (
                      xt.enabled &&
                      (!1 !== e && xt.revert(!0, !0),
                      (xt.enabled = xt.isActive = !1),
                      n || (B && B.pause()),
                      (I = 0),
                      o && (o.uncache = 1),
                      kt && Ya(t, 'refreshInit', kt),
                      D &&
                        (D.pause(), r.tween && r.tween.kill() && (r.tween = 0)),
                      !gt)
                    ) {
                      for (var i = Qa.length; i--; )
                        if (Qa[i].scroller === ht && Qa[i] !== xt) return;
                      Ya(ht, 'resize', rs), gt || Ya(ht, 'scroll', es);
                    }
                  }),
                  (xt.kill = function (t, r) {
                    xt.disable(t, r), B && !r && B.kill(), G && delete Ja[G];
                    var i = Qa.indexOf(xt);
                    i >= 0 && Qa.splice(i, 1),
                      i === Si && vs > 0 && Si--,
                      (i = 0),
                      Qa.forEach(function (t) {
                        return t.scroller === xt.scroller && (i = 1);
                      }),
                      i || Ui || (xt.scroll.rec = 0),
                      n &&
                        ((n.scrollTrigger = null),
                        t && n.revert({ kill: !1 }),
                        r || n.kill()),
                      u &&
                        [u, d, f, p].forEach(function (t) {
                          return t.parentNode && t.parentNode.removeChild(t);
                        }),
                      Wi === xt && (Wi = 0),
                      J &&
                        (o && (o.uncache = 1),
                        (i = 0),
                        Qa.forEach(function (t) {
                          return t.pin === J && i++;
                        }),
                        i || (o.spacer = 0)),
                      e.onKill && e.onKill(xt);
                  }),
                  Qa.push(xt),
                  xt.enable(!1, !1),
                  $ && $(xt),
                  n && n.add && !g)
                ) {
                  var jt = xt.update;
                  (xt.update = function () {
                    (xt.update = jt), Yo.cache++, l || c || xt.refresh();
                  }),
                    fi.delayedCall(0.01, xt.update),
                    (g = 0.01),
                    (l = c = 0);
                } else xt.refresh();
                J &&
                  (function () {
                    if (Gi !== fs) {
                      var t = (Gi = fs);
                      requestAnimationFrame(function () {
                        return t === fs && ms(!0);
                      });
                    }
                  })();
              } else this.update = this.refresh = this.kill = aa;
            }),
            (t.register = function (e) {
              return (
                pi ||
                  ((fi = e || ca()),
                  la() && window.document && t.enable(),
                  (pi = ta)),
                pi
              );
            }),
            (t.defaults = function (t) {
              if (t) for (var e in t) Ua[e] = t[e];
              return Ua;
            }),
            (t.disable = function (t, e) {
              (ta = 0),
                Qa.forEach(function (n) {
                  return n[e ? 'kill' : 'disable'](t);
                }),
                Ya(hi, 'wheel', es),
                Ya(mi, 'scroll', es),
                clearInterval(ki),
                Ya(mi, 'touchcancel', aa),
                Ya(vi, 'touchstart', aa),
                Ha(Ya, mi, 'pointerdown,touchstart,mousedown', oa),
                Ha(Ya, mi, 'pointerup,touchend,mouseup', ia),
                yi.kill(),
                ha(Ya);
              for (var n = 0; n < Yo.length; n += 3)
                Va(Ya, Yo[n], Yo[n + 1]), Va(Ya, Yo[n], Yo[n + 2]);
            }),
            (t.enable = function () {
              if (
                ((hi = window),
                (mi = document),
                (gi = mi.documentElement),
                (vi = mi.body),
                fi &&
                  ((bi = fi.utils.toArray),
                  (_i = fi.utils.clamp),
                  (Ni = fi.core.context || aa),
                  (Mi = fi.core.suppressOverwrites || aa),
                  (Fi = hi.history.scrollRestoration || 'auto'),
                  (gs = hi.pageYOffset || 0),
                  fi.core.globals('ScrollTrigger', t),
                  vi))
              ) {
                (ta = 1),
                  (($i = document.createElement('div')).style.height = '100vh'),
                  ($i.style.position = 'absolute'),
                  ps(),
                  ra(),
                  di.register(fi),
                  (t.isTouch = di.isTouch),
                  (Ii =
                    di.isTouch &&
                    /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                  (zi = 1 === di.isTouch),
                  qa(hi, 'wheel', es),
                  (wi = [hi, mi, gi, vi]),
                  fi.matchMedia
                    ? ((t.matchMedia = function (t) {
                        var e,
                          n = fi.matchMedia();
                        for (e in t) n.add(e, t[e]);
                        return n;
                      }),
                      fi.addEventListener('matchMediaInit', function () {
                        return us();
                      }),
                      fi.addEventListener('matchMediaRevert', function () {
                        return cs();
                      }),
                      fi.addEventListener('matchMedia', function () {
                        ms(0, 1), ss('matchMedia');
                      }),
                      fi
                        .matchMedia()
                        .add('(orientation: portrait)', function () {
                          return ns(), ns;
                        }))
                    : console.warn('Requires GSAP 3.11.0 or later'),
                  ns(),
                  qa(mi, 'scroll', es);
                var e,
                  n,
                  r = vi.hasAttribute('style'),
                  o = vi.style,
                  i = o.borderTopStyle,
                  a = fi.core.Animation.prototype;
                for (
                  a.revert ||
                    Object.defineProperty(a, 'revert', {
                      value: function () {
                        return this.time(-0.01, !0);
                      },
                    }),
                    o.borderTopStyle = 'solid',
                    e = Ia(vi),
                    ri.m = Math.round(e.top + ri.sc()) || 0,
                    ni.m = Math.round(e.left + ni.sc()) || 0,
                    i
                      ? (o.borderTopStyle = i)
                      : o.removeProperty('border-top-style'),
                    r ||
                      (vi.setAttribute('style', ''),
                      vi.removeAttribute('style')),
                    ki = setInterval(ts, 250),
                    fi.delayedCall(0.5, function () {
                      return (Zi = 0);
                    }),
                    qa(mi, 'touchcancel', aa),
                    qa(vi, 'touchstart', aa),
                    Ha(qa, mi, 'pointerdown,touchstart,mousedown', oa),
                    Ha(qa, mi, 'pointerup,touchend,mouseup', ia),
                    Ci = fi.utils.checkPrefix('transform'),
                    bs.push(Ci),
                    pi = Ki(),
                    yi = fi.delayedCall(0.2, ms).pause(),
                    Pi = [
                      mi,
                      'visibilitychange',
                      function () {
                        var t = hi.innerWidth,
                          e = hi.innerHeight;
                        mi.hidden
                          ? ((Oi = t), (Ai = e))
                          : (Oi === t && Ai === e) || rs();
                      },
                      mi,
                      'DOMContentLoaded',
                      ms,
                      hi,
                      'load',
                      ms,
                      hi,
                      'resize',
                      rs,
                    ],
                    ha(qa),
                    Qa.forEach(function (t) {
                      return t.enable(0, 1);
                    }),
                    n = 0;
                  n < Yo.length;
                  n += 3
                )
                  Va(Ya, Yo[n], Yo[n + 1]), Va(Ya, Yo[n], Yo[n + 2]);
              }
            }),
            (t.config = function (e) {
              'limitCallbacks' in e && (Vi = !!e.limitCallbacks);
              var n = e.syncInterval;
              (n && clearInterval(ki)) || ((ki = n) && setInterval(ts, n)),
                'ignoreMobileResize' in e &&
                  (zi = 1 === t.isTouch && e.ignoreMobileResize),
                'autoRefreshEvents' in e &&
                  (ha(Ya) || ha(qa, e.autoRefreshEvents || 'none'),
                  (ji = -1 === (e.autoRefreshEvents + '').indexOf('resize')));
            }),
            (t.scrollerProxy = function (t, e) {
              var n = oi(t),
                r = Yo.indexOf(n),
                o = ua(n);
              ~r && Yo.splice(r, o ? 6 : 2),
                e && (o ? Vo.unshift(hi, e, vi, e, gi, e) : Vo.unshift(n, e));
            }),
            (t.clearMatchMedia = function (t) {
              Qa.forEach(function (e) {
                return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
              });
            }),
            (t.isInViewport = function (t, e, n) {
              var r = (ma(t) ? oi(t) : t).getBoundingClientRect(),
                o = r[n ? Ta : Ca] * e || 0;
              return n
                ? r.right - o > 0 && r.left + o < hi.innerWidth
                : r.bottom - o > 0 && r.top + o < hi.innerHeight;
            }),
            (t.positionInViewport = function (t, e, n) {
              ma(t) && (t = oi(t));
              var r = t.getBoundingClientRect(),
                o = r[n ? Ta : Ca],
                i =
                  null == e
                    ? o / 2
                    : e in Ga
                      ? Ga[e] * o
                      : ~e.indexOf('%')
                        ? (parseFloat(e) * o) / 100
                        : parseFloat(e) || 0;
              return n
                ? (r.left + i) / hi.innerWidth
                : (r.top + i) / hi.innerHeight;
            }),
            (t.killAll = function (t) {
              if (
                (Qa.slice(0).forEach(function (t) {
                  return 'ScrollSmoother' !== t.vars.id && t.kill();
                }),
                !0 !== t)
              ) {
                var e = os.killAll || [];
                (os = {}),
                  e.forEach(function (t) {
                    return t();
                  });
              }
            }),
            t
          );
        })();
      (Ms.version = '3.12.7'),
        (Ms.saveStyles = function (t) {
          return t
            ? bi(t).forEach(function (t) {
                if (t && t.style) {
                  var e = ls.indexOf(t);
                  e >= 0 && ls.splice(e, 5),
                    ls.push(
                      t,
                      t.style.cssText,
                      t.getBBox && t.getAttribute('transform'),
                      fi.core.getCache(t),
                      Ni(),
                    );
                }
              })
            : ls;
        }),
        (Ms.revert = function (t, e) {
          return us(!t, e);
        }),
        (Ms.create = function (t, e) {
          return new Ms(t, e);
        }),
        (Ms.refresh = function (t) {
          return t ? rs(!0) : (pi || Ms.register()) && ms(!0);
        }),
        (Ms.update = function (t) {
          return ++Yo.cache && ws(!0 === t ? 2 : 0);
        }),
        (Ms.clearScrollMemory = ds),
        (Ms.maxScroll = function (t, e) {
          return pa(t, e ? ni : ri);
        }),
        (Ms.getScrollFunc = function (t, e) {
          return ii(oi(t), e ? ni : ri);
        }),
        (Ms.getById = function (t) {
          return Ja[t];
        }),
        (Ms.getAll = function () {
          return Qa.filter(function (t) {
            return 'ScrollSmoother' !== t.vars.id;
          });
        }),
        (Ms.isScrolling = function () {
          return !!Ji;
        }),
        (Ms.snapDirectional = $a),
        (Ms.addEventListener = function (t, e) {
          var n = os[t] || (os[t] = []);
          ~n.indexOf(e) || n.push(e);
        }),
        (Ms.removeEventListener = function (t, e) {
          var n = os[t],
            r = n && n.indexOf(e);
          r >= 0 && n.splice(r, 1);
        }),
        (Ms.batch = function (t, e) {
          var n,
            r = [],
            o = {},
            i = e.interval || 0.016,
            a = e.batchMax || 1e9,
            s = function (t, e) {
              var n = [],
                r = [],
                o = fi
                  .delayedCall(i, function () {
                    e(n, r), (n = []), (r = []);
                  })
                  .pause();
              return function (t) {
                n.length || o.restart(!0),
                  n.push(t.trigger),
                  r.push(t),
                  a <= n.length && o.progress(1);
              };
            };
          for (n in e)
            o[n] =
              'on' === n.substr(0, 2) && ga(e[n]) && 'onRefreshInit' !== n
                ? s(0, e[n])
                : e[n];
          return (
            ga(a) &&
              ((a = a()),
              qa(Ms, 'refresh', function () {
                return (a = e.batchMax());
              })),
            bi(t).forEach(function (t) {
              var e = {};
              for (n in o) e[n] = o[n];
              (e.trigger = t), r.push(Ms.create(e));
            }),
            r
          );
        });
      var js,
        Bs = function (t, e, n, r) {
          return (
            e > r ? t(r) : e < 0 && t(0),
            n > r ? (r - e) / (n - e) : n < 0 ? e / (e - n) : 1
          );
        },
        zs = function t(e, n) {
          !0 === n
            ? e.style.removeProperty('touch-action')
            : (e.style.touchAction =
                !0 === n
                  ? 'auto'
                  : n
                    ? 'pan-' + n + (di.isTouch ? ' pinch-zoom' : '')
                    : 'none'),
            e === gi && t(vi, n);
        },
        Rs = { auto: 1, scroll: 1 },
        Ds = function (t) {
          var e,
            n = t.event,
            r = t.target,
            o = t.axis,
            i = (n.changedTouches ? n.changedTouches[0] : n).target,
            a = i._gsap || fi.core.getCache(i),
            s = Ki();
          if (!a._isScrollT || s - a._isScrollT > 2e3) {
            for (
              ;
              i &&
              i !== vi &&
              ((i.scrollHeight <= i.clientHeight &&
                i.scrollWidth <= i.clientWidth) ||
                (!Rs[(e = Ra(i)).overflowY] && !Rs[e.overflowX]));

            )
              i = i.parentNode;
            (a._isScroll =
              i &&
              i !== r &&
              !ua(i) &&
              (Rs[(e = Ra(i)).overflowY] || Rs[e.overflowX])),
              (a._isScrollT = s);
          }
          (a._isScroll || 'x' === o) &&
            (n.stopPropagation(), (n._gsapAllow = !0));
        },
        Is = function (t, e, n, r) {
          return di.create({
            target: t,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: e,
            onWheel: (r = r && Ds),
            onPress: r,
            onDrag: r,
            onScroll: r,
            onEnable: function () {
              return n && qa(mi, di.eventTypes[0], Fs, !1, !0);
            },
            onDisable: function () {
              return Ya(mi, di.eventTypes[0], Fs, !0);
            },
          });
        },
        Ns = /(input|label|select|textarea)/i,
        Fs = function (t) {
          var e = Ns.test(t.target.tagName);
          (e || js) && ((t._gsapAllow = !0), (js = e));
        };
      function $s(t) {
        return (
          ($s =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          $s(t)
        );
      }
      function Hs(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function qs() {
        qs = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = 'function' == typeof Symbol ? Symbol : {},
          a = i.iterator || '@@iterator',
          s = i.asyncIterator || '@@asyncIterator',
          l = i.toStringTag || '@@toStringTag';
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, '');
        } catch (t) {
          c = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function u(t, e, n, r) {
          var i = e && e.prototype instanceof v ? e : v,
            a = Object.create(i.prototype),
            s = new P(r || []);
          return o(a, '_invoke', { value: C(t, n, s) }), a;
        }
        function d(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = u;
        var f = 'suspendedStart',
          p = 'suspendedYield',
          h = 'executing',
          m = 'completed',
          g = {};
        function v() {}
        function w() {}
        function y() {}
        var b = {};
        c(b, a, function () {
          return this;
        });
        var _ = Object.getPrototypeOf,
          x = _ && _(_(L([])));
        x && x !== n && r.call(x, a) && (b = x);
        var k = (y.prototype = v.prototype = Object.create(b));
        function E(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function T(t, e) {
          function n(o, i, a, s) {
            var l = d(t[o], t, i);
            if ('throw' !== l.type) {
              var c = l.arg,
                u = c.value;
              return u && 'object' == $s(u) && r.call(u, '__await')
                ? e.resolve(u.__await).then(
                    function (t) {
                      n('next', t, a, s);
                    },
                    function (t) {
                      n('throw', t, a, s);
                    },
                  )
                : e.resolve(u).then(
                    function (t) {
                      (c.value = t), a(c);
                    },
                    function (t) {
                      return n('throw', t, a, s);
                    },
                  );
            }
            s(l.arg);
          }
          var i;
          o(this, '_invoke', {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function C(e, n, r) {
          var o = f;
          return function (i, a) {
            if (o === h) throw Error('Generator is already running');
            if (o === m) {
              if ('throw' === i) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var l = S(s, r);
                if (l) {
                  if (l === g) continue;
                  return l;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              o = h;
              var c = d(e, n, r);
              if ('normal' === c.type) {
                if (((o = r.done ? m : p), c.arg === g)) continue;
                return { value: c.arg, done: r.done };
              }
              'throw' === c.type &&
                ((o = m), (r.method = 'throw'), (r.arg = c.arg));
            }
          };
        }
        function S(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'),
                (n.arg = t),
                S(e, n),
                'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              g
            );
          var i = d(o, e.iterator, n.arg);
          if ('throw' === i.type)
            return (
              (n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), g
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                g)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              g);
        }
        function O(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function A(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function P(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(O, this),
            this.reset(!0);
        }
        function L(e) {
          if (e || '' === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError($s(e) + ' is not iterable');
        }
        return (
          (w.prototype = y),
          o(k, 'constructor', { value: y, configurable: !0 }),
          o(y, 'constructor', { value: w, configurable: !0 }),
          (w.displayName = c(y, l, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === w || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, y)
                : ((t.__proto__ = y), c(t, l, 'GeneratorFunction')),
              (t.prototype = Object.create(k)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          E(T.prototype),
          c(T.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = T),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new T(u(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          E(k),
          c(k, l, 'Generator'),
          c(k, a, function () {
            return this;
          }),
          c(k, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = L),
          (P.prototype = {
            constructor: P,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(A),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  o && ((n.method = 'next'), (n.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ('root' === a.tryLoc) return o('end');
                if (a.tryLoc <= this.prev) {
                  var l = r.call(a, 'catchLoc'),
                    c = r.call(a, 'finallyLoc');
                  if (l && c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!c)
                      throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ('break' === t || 'continue' === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), g)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                g
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), A(n), g;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var o = r.arg;
                    A(n);
                  }
                  return o;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: L(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                g
              );
            },
          }),
          e
        );
      }
      function Ys(t, e, n, r, o, i, a) {
        try {
          var s = t[i](a),
            l = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(l) : Promise.resolve(l).then(r, o);
      }
      function Vs(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              Ys(i, r, o, a, s, 'next', t);
            }
            function s(t) {
              Ys(i, r, o, a, s, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      (Ms.sort = function (t) {
        if (ga(t)) return Qa.sort(t);
        var e = hi.pageYOffset || 0;
        return (
          Ms.getAll().forEach(function (t) {
            return (t._sortY = t.trigger
              ? e + t.trigger.getBoundingClientRect().top
              : t.start + hi.innerHeight);
          }),
          Qa.sort(
            t ||
              function (t, e) {
                return (
                  -1e6 * (t.vars.refreshPriority || 0) +
                  (t.vars.containerAnimation ? 1e6 : t._sortY) -
                  ((e.vars.containerAnimation ? 1e6 : e._sortY) +
                    -1e6 * (e.vars.refreshPriority || 0))
                );
              },
          )
        );
      }),
        (Ms.observe = function (t) {
          return new di(t);
        }),
        (Ms.normalizeScroll = function (t) {
          if (void 0 === t) return Bi;
          if (!0 === t && Bi) return Bi.enable();
          if (!1 === t) return Bi && Bi.kill(), void (Bi = t);
          var e =
            t instanceof di
              ? t
              : (function (t) {
                  wa(t) || (t = {}),
                    (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
                    t.type || (t.type = 'wheel,touch'),
                    (t.debounce = !!t.debounce),
                    (t.id = t.id || 'normalizer');
                  var e,
                    n,
                    r,
                    o,
                    i,
                    a,
                    s,
                    l,
                    c = t,
                    u = c.normalizeScrollX,
                    d = c.momentum,
                    f = c.allowNestedScroll,
                    p = c.onRelease,
                    h = oi(t.target) || gi,
                    m = fi.core.globals().ScrollSmoother,
                    g = m && m.get(),
                    v =
                      Ii &&
                      ((t.content && oi(t.content)) ||
                        (g && !1 !== t.content && !g.smooth() && g.content())),
                    w = ii(h, ri),
                    y = ii(h, ni),
                    b = 1,
                    _ =
                      (di.isTouch && hi.visualViewport
                        ? hi.visualViewport.scale * hi.visualViewport.width
                        : hi.outerWidth) / hi.innerWidth,
                    x = 0,
                    k = ga(d)
                      ? function () {
                          return d(e);
                        }
                      : function () {
                          return d || 2.8;
                        },
                    E = Is(h, t.type, !0, f),
                    T = function () {
                      return (o = !1);
                    },
                    C = aa,
                    S = aa,
                    O = function () {
                      (n = pa(h, ri)),
                        (S = _i(Ii ? 1 : 0, n)),
                        u && (C = _i(0, pa(h, ni))),
                        (r = fs);
                    },
                    A = function () {
                      (v._gsap.y = sa(parseFloat(v._gsap.y) + w.offset) + 'px'),
                        (v.style.transform =
                          'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
                          parseFloat(v._gsap.y) +
                          ', 0, 1)'),
                        (w.offset = w.cacheID = 0);
                    },
                    P = function () {
                      O(),
                        i.isActive() &&
                          i.vars.scrollY > n &&
                          (w() > n
                            ? i.progress(1) && w(n)
                            : i.resetTo('scrollY', n));
                    };
                  return (
                    v && fi.set(v, { y: '+=0' }),
                    (t.ignoreCheck = function (t) {
                      return (
                        (Ii &&
                          'touchmove' === t.type &&
                          (function () {
                            if (o) {
                              requestAnimationFrame(T);
                              var t = sa(e.deltaY / 2),
                                n = S(w.v - t);
                              if (v && n !== w.v + w.offset) {
                                w.offset = n - w.v;
                                var r = sa(
                                  (parseFloat(v && v._gsap.y) || 0) - w.offset,
                                );
                                (v.style.transform =
                                  'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
                                  r +
                                  ', 0, 1)'),
                                  (v._gsap.y = r + 'px'),
                                  (w.cacheID = Yo.cache),
                                  ws();
                              }
                              return !0;
                            }
                            w.offset && A(), (o = !0);
                          })()) ||
                        (b > 1.05 && 'touchstart' !== t.type) ||
                        e.isGesturing ||
                        (t.touches && t.touches.length > 1)
                      );
                    }),
                    (t.onPress = function () {
                      o = !1;
                      var t = b;
                      (b = sa(
                        ((hi.visualViewport && hi.visualViewport.scale) || 1) /
                          _,
                      )),
                        i.pause(),
                        t !== b && zs(h, b > 1.01 || (!u && 'x')),
                        (a = y()),
                        (s = w()),
                        O(),
                        (r = fs);
                    }),
                    (t.onRelease = t.onGestureStart =
                      function (t, e) {
                        if ((w.offset && A(), e)) {
                          Yo.cache++;
                          var r,
                            o,
                            a = k();
                          u &&
                            ((o =
                              (r = y()) + (0.05 * a * -t.velocityX) / 0.227),
                            (a *= Bs(y, r, o, pa(h, ni))),
                            (i.vars.scrollX = C(o))),
                            (o = (r = w()) + (0.05 * a * -t.velocityY) / 0.227),
                            (a *= Bs(w, r, o, pa(h, ri))),
                            (i.vars.scrollY = S(o)),
                            i.invalidate().duration(a).play(0.01),
                            ((Ii && i.vars.scrollY >= n) || r >= n - 1) &&
                              fi.to({}, { onUpdate: P, duration: a });
                        } else l.restart(!0);
                        p && p(t);
                      }),
                    (t.onWheel = function () {
                      i._ts && i.pause(),
                        Ki() - x > 1e3 && ((r = 0), (x = Ki()));
                    }),
                    (t.onChange = function (t, e, n, o, i) {
                      if (
                        (fs !== r && O(),
                        e &&
                          u &&
                          y(
                            C(
                              o[2] === e
                                ? a + (t.startX - t.x)
                                : y() + e - o[1],
                            ),
                          ),
                        n)
                      ) {
                        w.offset && A();
                        var l = i[2] === n,
                          c = l ? s + t.startY - t.y : w() + n - i[1],
                          d = S(c);
                        l && c !== d && (s += d - c), w(d);
                      }
                      (n || e) && ws();
                    }),
                    (t.onEnable = function () {
                      zs(h, !u && 'x'),
                        Ms.addEventListener('refresh', P),
                        qa(hi, 'resize', P),
                        w.smooth &&
                          ((w.target.style.scrollBehavior = 'auto'),
                          (w.smooth = y.smooth = !1)),
                        E.enable();
                    }),
                    (t.onDisable = function () {
                      zs(h, !0),
                        Ya(hi, 'resize', P),
                        Ms.removeEventListener('refresh', P),
                        E.kill();
                    }),
                    (t.lockAxis = !1 !== t.lockAxis),
                    ((e = new di(t)).iOS = Ii),
                    Ii && !w() && w(1),
                    Ii && fi.ticker.add(aa),
                    (l = e._dc),
                    (i = fi.to(e, {
                      ease: 'power4',
                      paused: !0,
                      inherit: !1,
                      scrollX: u ? '+=0.1' : '+=0',
                      scrollY: '+=0.1',
                      modifiers: {
                        scrollY: As(w, w(), function () {
                          return i.pause();
                        }),
                      },
                      onUpdate: ws,
                      onComplete: l.vars.onComplete,
                    })),
                    e
                  );
                })(t);
          return (
            Bi && Bi.target === e.target && Bi.kill(),
            ua(e.target) && (Bi = e),
            e
          );
        }),
        (Ms.core = {
          _getVelocityProp: ai,
          _inputObserver: Is,
          _scrollers: Yo,
          _proxies: Vo,
          bridge: {
            ss: function () {
              Ji || ss('scrollStart'), (Ji = Ki());
            },
            ref: function () {
              return Ei;
            },
          },
        }),
        ca() && fi.registerPlugin(Ms);
      const Xs = function () {
        var t = document.querySelector('note-list'),
          e = t.shadowRoot,
          n = e.querySelector('.list'),
          r = 'Archived Notes' === t.getAttribute('list-title'),
          o = document.querySelector('add-note-form'),
          i = e.querySelector('.add-note-btn'),
          a = e.querySelector('search-bar'),
          s = e.querySelector('.archived-btn'),
          l = e.querySelector('.all-notes-btn'),
          c = e.querySelector('#grid-option');
        (c.value = t.getAttribute('grid-size')), ao.registerPlugin(Ms);
        var u = e.getElementById('loading-indicator'),
          d = (function () {
            var e = Vs(
              qs().mark(function e() {
                var n;
                return qs().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            fo.showLoading(u),
                            (e.next = 4),
                            _o.getNotes()
                          );
                        case 4:
                          (n = e.sent),
                            t.setAttribute('list-title', 'All Notes'),
                            fo.appearAnimation(t),
                            h(n),
                            fo.hideElement(l),
                            fo.showFlexElement(s),
                            (e.next = 15);
                          break;
                        case 12:
                          (e.prev = 12),
                            (e.t0 = e.catch(0)),
                            ko().fire({
                              icon: 'error',
                              title: 'Error',
                              text: 'An error occurred, check your internet connection',
                              draggable: !0,
                            });
                        case 15:
                          return (e.prev = 15), fo.hideLoading(u), e.finish(15);
                        case 18:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 12, 15, 18]],
                );
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          f = (function () {
            var e = Vs(
              qs().mark(function e() {
                var n;
                return qs().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            fo.showLoading(u),
                            (e.next = 4),
                            _o.getArchivedNotes()
                          );
                        case 4:
                          (n = e.sent),
                            t.setAttribute('list-title', 'Archived Notes'),
                            fo.appearAnimation(t),
                            h(n),
                            fo.hideElement(s),
                            fo.showFlexElement(l),
                            (e.next = 15);
                          break;
                        case 12:
                          (e.prev = 12),
                            (e.t0 = e.catch(0)),
                            ko().fire({
                              icon: 'error',
                              title: 'Error',
                              text: 'An error occurred, check your internet connection',
                              draggable: !0,
                            });
                        case 15:
                          return (e.prev = 15), fo.hideLoading(u), e.finish(15);
                        case 18:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 12, 15, 18]],
                );
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          p = (function () {
            var e = Vs(
              qs().mark(function e(n) {
                var r;
                return qs().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            fo.showLoading(u),
                            (e.next = 4),
                            _o.getSingleNote(n)
                          );
                        case 4:
                          (r = e.sent),
                            fo.appearAnimation(t),
                            h([r]),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(0)),
                            ko().fire({
                              icon: 'error',
                              title: 'Error',
                              text: 'Note not found',
                              draggable: !0,
                            });
                        case 12:
                          return (e.prev = 12), fo.hideLoading(u), e.finish(12);
                        case 15:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 9, 12, 15]],
                );
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          h = function (r) {
            fo.emptyElement(n);
            var i,
              a = r.map(function (t) {
                var e = document.createElement('note-item');
                return (e.note = t), e.setAttribute('id', t.id), e;
              });
            fo.hideElement(o),
              fo.showElement(t),
              n.append.apply(
                n,
                (function (t) {
                  if (Array.isArray(t)) return Hs(t);
                })((i = a)) ||
                  (function (t) {
                    if (
                      ('undefined' != typeof Symbol &&
                        null != t[Symbol.iterator]) ||
                      null != t['@@iterator']
                    )
                      return Array.from(t);
                  })(i) ||
                  (function (t, e) {
                    if (t) {
                      if ('string' == typeof t) return Hs(t, e);
                      var n = {}.toString.call(t).slice(8, -1);
                      return (
                        'Object' === n &&
                          t.constructor &&
                          (n = t.constructor.name),
                        'Map' === n || 'Set' === n
                          ? Array.from(t)
                          : 'Arguments' === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? Hs(t, e)
                            : void 0
                      );
                    }
                  })(i) ||
                  (function () {
                    throw new TypeError(
                      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                  })(),
              ),
              m(),
              e.querySelectorAll('note-item').forEach(function (t) {
                var e = t.shadowRoot,
                  n = e.querySelector('.archive-btn'),
                  r = e.querySelector('.unarchive-btn'),
                  o = e.querySelector('.delete-btn');
                n.addEventListener('click', function () {
                  g(t.note.id);
                }),
                  r.addEventListener('click', function () {
                    v(t.note.id);
                  }),
                  o.addEventListener('click', function () {
                    w(t.note.id);
                  });
              });
          },
          m = function () {
            e.querySelectorAll('note-item').forEach(function (t) {
              ao.fromTo(
                t,
                { opacity: 0, scale: 0.2 },
                {
                  opacity: 1,
                  scale: 1,
                  duration: 0.5,
                  ease: 'power2.out',
                  scrollTrigger: {
                    trigger: t,
                    start: 'top 80%',
                    end: 'top 50%',
                    toggleActions: 'play none none none',
                  },
                },
              );
            });
          },
          g = (function () {
            var t = Vs(
              qs().mark(function t(e) {
                var n;
                return qs().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            fo.showLoading(u),
                            (t.next = 4),
                            _o.archiveNote(e)
                          );
                        case 4:
                          (n = t.sent),
                            ko().fire({
                              title: ''.concat(n),
                              icon: 'success',
                              draggable: !0,
                            }),
                            d(),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            ko().fire({
                              icon: 'error',
                              title: 'Error',
                              text: 'An error occurred, check your internet connection',
                              draggable: !0,
                            });
                        case 12:
                          return (t.prev = 12), fo.hideLoading(u), t.finish(12);
                        case 15:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9, 12, 15]],
                );
              }),
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          v = (function () {
            var t = Vs(
              qs().mark(function t(e) {
                var n;
                return qs().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            fo.showLoading(u),
                            (t.next = 4),
                            _o.unarchiveNote(e)
                          );
                        case 4:
                          (n = t.sent),
                            ko().fire({
                              title: ''.concat(n),
                              icon: 'success',
                              draggable: !0,
                            }),
                            f(),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            ko().fire({
                              icon: 'error',
                              title: 'Error',
                              text: 'An error occurred, check your internet connection',
                              draggable: !0,
                            });
                        case 12:
                          return (t.prev = 12), fo.hideLoading(u), t.finish(12);
                        case 15:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9, 12, 15]],
                );
              }),
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          w = (function () {
            var n = Vs(
              qs().mark(function n(r) {
                var o, i;
                return qs().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            fo.showLoading(u),
                            (n.next = 4),
                            ko().fire({
                              title: 'Are you sure?',
                              text: "You won't be able to revert this!",
                              icon: 'warning',
                              showCancelButton: !0,
                              confirmButtonColor: '#3085d6',
                              cancelButtonColor: '#d33',
                              confirmButtonText: 'Yes, delete it!',
                            })
                          );
                        case 4:
                          if (!n.sent.isConfirmed) {
                            n.next = 13;
                            break;
                          }
                          return (n.next = 8), _o.deleteNote(r);
                        case 8:
                          return (
                            (o = n.sent),
                            (i = e.querySelector(
                              'note-item[id="'.concat(r, '"]'),
                            )) &&
                              ao.to(i, {
                                opacity: 0,
                                scale: 0.5,
                                duration: 1,
                                ease: 'power1.in',
                              }),
                            (n.next = 13),
                            ko().fire({
                              title: 'Deleted!',
                              text: ''.concat(o),
                              icon: 'success',
                            })
                          );
                        case 13:
                          'Archived Notes' === t.getAttribute('list-title')
                            ? f()
                            : d(),
                            (n.next = 20);
                          break;
                        case 17:
                          (n.prev = 17),
                            (n.t0 = n.catch(0)),
                            ko().fire({
                              icon: 'error',
                              title: 'Error',
                              text: 'An error occurred, check your internet connection',
                              draggable: !0,
                            });
                        case 20:
                          return (n.prev = 20), fo.hideLoading(u), n.finish(20);
                        case 23:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 17, 20, 23]],
                );
              }),
            );
            return function (t) {
              return n.apply(this, arguments);
            };
          })();
        c.addEventListener('change', function (e) {
          var n = e.target.value;
          (c.value = n), t.setAttribute('grid-size', n), m();
        }),
          i.addEventListener('click', function (e) {
            fo.showElement(o),
              fo.hideElement(t),
              (function (t) {
                var e = document.querySelector('add-note-form'),
                  n = e.shadowRoot,
                  r = n.querySelector('form'),
                  o = n.getElementById('title'),
                  i = n.getElementById('body'),
                  a = n.getElementById('titleHelp'),
                  s = n.getElementById('bodyHelp'),
                  l = n.querySelector('.cancel-btn'),
                  c = n.getElementById('loading-indicator'),
                  u = 'Title must be between '
                    .concat(o.getAttribute('minlength'), ' and ')
                    .concat(o.getAttribute('maxlength'), ' characters.'),
                  d = 'The content of the note must be between '
                    .concat(i.getAttribute('minlength'), ' and ')
                    .concat(i.getAttribute('maxlength'), ' characters.'),
                  f = (function () {
                    var e = (function (t) {
                      return function () {
                        var e = this,
                          n = arguments;
                        return new Promise(function (r, o) {
                          var i = t.apply(e, n);
                          function a(t) {
                            Co(i, r, o, a, s, 'next', t);
                          }
                          function s(t) {
                            Co(i, r, o, a, s, 'throw', t);
                          }
                          a(void 0);
                        });
                      };
                    })(
                      To().mark(function e(n) {
                        var r;
                        return To().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    fo.showLoading(c),
                                    (e.next = 4),
                                    _o.createNote(n)
                                  );
                                case 4:
                                  (r = e.sent),
                                    ko().fire({
                                      title: ''.concat(r),
                                      icon: 'success',
                                      draggable: !0,
                                    }),
                                    t && t(),
                                    (e.next = 12);
                                  break;
                                case 9:
                                  (e.prev = 9),
                                    (e.t0 = e.catch(0)),
                                    ko().fire({
                                      icon: 'error',
                                      title: 'Error',
                                      text: 'An error occurred, check your internet connection',
                                      draggable: !0,
                                    });
                                case 12:
                                  return (
                                    (e.prev = 12),
                                    fo.hideLoading(c),
                                    e.finish(12)
                                  );
                                case 15:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 9, 12, 15]],
                        );
                      }),
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })();
                r.addEventListener('submit', function (t) {
                  t.preventDefault();
                  var e = { title: o.value.trim(), body: i.value.trim() };
                  p(o, a) && p(i, s) && (f(e), t.target.reset());
                });
                var p = function (t, e) {
                  var n = t.getAttribute('maxlength');
                  return (
                    (e.textContent = ''),
                    t.checkValidity()
                      ? (t.value.length >= n &&
                          ((e.textContent =
                            'The character has reached the limit'),
                          (e.style.color = 'red')),
                        !0)
                      : ((e.textContent = t.validationMessage),
                        (e.style.color = 'red'),
                        !1)
                  );
                };
                o.addEventListener('input', function () {
                  p(this, a);
                }),
                  i.addEventListener('input', function () {
                    p(this, s);
                  }),
                  l.addEventListener('click', function () {
                    r.reset(), t && t();
                  }),
                  (a.innerText = u),
                  (a.style.color = '#666666'),
                  (s.innerText = d),
                  (s.style.color = '#666666'),
                  fo.appearAnimation(e);
              })(function () {
                'Archived Notes' === t.getAttribute('list-title') ? f() : d();
              });
          }),
          a.addEventListener('search', function (e) {
            var n = e.detail.query;
            n &&
              (p(n),
              (a.shadowRoot.querySelector('input#name').value = ''),
              t.setAttribute('list-title', 'Note ID : '.concat(n)),
              fo.hideElement(s),
              fo.showFlexElement(l));
          }),
          s.addEventListener('click', function () {
            f();
          }),
          l.addEventListener('click', function () {
            d();
          }),
          r ? f() : d();
      };
      document.addEventListener('DOMContentLoaded', function () {
        Xs();
      });
    })();
})();
