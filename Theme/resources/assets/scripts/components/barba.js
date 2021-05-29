import barba from '@barba/core';
import { gsap } from 'gsap';
import common from '../routes/common';
import somePage from '../routes/somePage';

function barbaInit() {
  barba.init({
    debug: true,
    transitions: [
      {
        name: 'basic',
        leave: function (data) {
          gsap.to(data.current.container, 1, {
            opacity: 0,
            onComplete: this.async(),
          });
        },
        enter: function (data) {
          // barba behavior
          // Remove the old container
          const parent = data.current.container.parentNode;
          parent.removeChild(data.current.container);

          data.current.container.remove();
          window.replybox.identifier = data.next.container.dataset.postid;
          gsap.from(data.next.container, 1, {
            opacity: 0,
            onComplete: this.async(),
          });
        },
        beforeEnter: ({ next }) => {
          // 새로 실행할 스크립트 가져오기
          const container = next.container;
          const scripts = container.querySelectorAll('#containerScript script');

          scripts.forEach((script) => {
            if (script.id.search(/instagram|toc|replybox/g) === -1) return;
            const newScript = document.createElement('script');

            if (script.id === 'replybox-js-js-extra') {
              newScript.textContent = script.textContent;
              container.appendChild(newScript);
              return;
            }

            newScript.src = script.src;
            container.appendChild(newScript);
          });
        },
      },
      {
        name: 'to-some-page',
        to: {
          namespace: ['some-page'],
        },
        leave: function () {},
        enter: function (data) {
          // Load common code for all containers
          common.containerInit();
          // Load this page JS
          somePage.init();
          gsap.from(data.current.container, 1, {
            opacity: 0,
            onComplete: () => {
              this.async();

              $('body').attr('class', $('#body-classes').attr('class'));
            },
          });
        },
      },
    ],
  });
}

export default {
  init() {
    const a = window.ajax_object.ajax_url;
    const b = { action: 'is_user_logged_in' };
    function c(isLogged) {
      if (!isLogged) barbaInit();
    }
    $.post(a, b, c);
  },
};
