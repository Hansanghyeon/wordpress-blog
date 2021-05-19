import Macy from 'macy';

export default {
  init() {
    console.log('arhcive dev');
    new Macy({
      container: '#macy-container',
      trueOrder: false,
      waitForImages: false,
      margin: 24,
      columns: 3,
      breakAt: {
        1200: 3,
        992: 2,
        576: 1,
      },
    });
  },
  finalize() {},
};
