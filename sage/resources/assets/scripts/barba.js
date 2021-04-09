import barba from '@barba/core';
import gsap from 'gsap';
import common from './routes/common';
import somePage from './routes/somePage';
// import ...

export default {
  init() {
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
        },
        {
          name: 'to-some-page',
          to: {
            namespace: ['some-page'],
          },
          leave: function () {},
          enter: function () {
            // Load common code for all containers
            common.containerInit();
            // Load this page JS
            somePage.init();
          },
        },
      ],
    });
  },
};
