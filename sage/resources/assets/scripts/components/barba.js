import barba from '@barba/core';
import { gsap } from 'gsap';
import common from '../routes/common';
import somePage from '../routes/somePage';
import replybox from './replybox';
// import ...

function barbaInit() {
  barba.init({
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
          replybox();
          gsap.from(data.next.container, 1, {
            opacity: 0,
            onComplete: this.async(),
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
