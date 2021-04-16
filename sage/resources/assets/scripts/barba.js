import barba from '@barba/core';
import { gsap } from 'gsap';
import common from './routes/common';
import somePage from './routes/somePage';
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
          gsap.from(data.next.container, 1, {
            opacity: 0,
            onComplete: this.async(),
          });
        },
        // afterEnter: function () {
        //   $('.wp_footer script[src]').each(function (i, script) {
        //     if (
        //       script.indexOf('scripts/main.js') !== -1 ||
        //       script.indexOf('replybox')
        //     ) {
        //       var $script = $(script);
        //       $.ajax({
        //         url: $script.attr('src'),
        //         cache: true,
        //         dataType: 'script',
        //         success: function () {
        //           $script.trigger('load');
        //           console.log($script);
        //         },
        //       });
        //     }
        //   });
        // },
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
