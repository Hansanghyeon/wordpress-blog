import barba from '@barba/core';
import gsap from 'gsap';

export default {
  init() {
    // JavaScript to be fired on all pages
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
      ],
    });
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
