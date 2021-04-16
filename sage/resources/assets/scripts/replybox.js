function replybox() {
  !(function (e) {
    var t = {};
    function o(n) {
      if (t[n]) return t[n].exports;
      var r = (t[n] = {
        i: n,
        l: !1,
        exports: {},
      });
      return e[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
    }
    (o.m = e),
      (o.c = t),
      (o.d = function (e, t, n) {
        o.o(e, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: n,
          });
      }),
      (o.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, {
            value: 'Module',
          }),
          Object.defineProperty(e, '__esModule', {
            value: !0,
          });
      }),
      (o.t = function (e, t) {
        if ((1 & t && (e = o(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (o.r(n),
          Object.defineProperty(n, 'default', {
            enumerable: !0,
            value: e,
          }),
          2 & t && 'string' != typeof e)
        )
          for (var r in e)
            o.d(
              n,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
            );
        return n;
      }),
      (o.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return o.d(t, 'a', t), t;
      }),
      (o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (o.p = '/'),
      o((o.s = 2));
  })({
    2: function (e, t, o) {
      e.exports = o('4p6k');
    },
    '4p6k': function () {
      !(function () {
        'use strict';
        var e = document.getElementById('replybox');
        if (
          null !== e &&
          null !== window.replybox &&
          null !== window.replybox.site
        ) {
          var t =
            '?url=' +
            encodeURIComponent(window.location.href) +
            '&identifier=' +
            encodeURIComponent(
              window.replybox.identifier ? window.replybox.identifier : ''
            ) +
            '&title=' +
            encodeURIComponent(document.title);
          window.replybox.sso &&
            window.replybox.sso.hash &&
            window.replybox.sso.payload &&
            (t = t.concat(
              '&sso=' +
                encodeURIComponent(window.replybox.sso.hash) +
                '&payload=' +
                encodeURIComponent(window.replybox.sso.payload)
            ));
          var o = document.createElement('iframe');
          o.setAttribute('frameborder', 0),
            o.setAttribute('scrolling', 'no'),
            o.setAttribute(
              'src',
              'https://app.getreplybox.com/embed/sites/' +
                window.replybox.site +
                t
            ),
            o.setAttribute('title', 'ReplyBox Comments'),
            o.setAttribute('width', '100%'),
            e.appendChild(o),
            window.addEventListener('message', function (t) {
              if (
                ('ready' === t.data.message &&
                  window.location.hash &&
                  n('hashChanged', window.location.hash),
                'height' === t.data.message &&
                  o.setAttribute('height', t.data.payload + 'px'),
                'updateHash' === t.data.message &&
                  (window.location.href = '#comment-' + t.data.payload),
                'scrollTo' === t.data.message)
              ) {
                var r = document.body.getBoundingClientRect(),
                  i = e.getBoundingClientRect();
                window.scrollTo(
                  0,
                  i.top - r.top + parseInt(t.data.payload) - 10
                );
              }
            }),
            window.addEventListener('hashchange', function () {
              n('hashChanged', window.location.hash);
            });
        }
        function n(e, t) {
          o.contentWindow.postMessage(
            {
              message: e,
              payload: t,
            },
            '*'
          );
        }
      })();
    },
  });
}

export default replybox;
