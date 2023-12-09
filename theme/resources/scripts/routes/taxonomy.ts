import Macy from 'macy'

export default {
  init() {
    new Macy({
      container: '#macy-container',
      trueOrder: false,
      waitForImages: false,
      margin: 24,
      breakAt: {
        1440: 4,
        1200: 3,
        992: 2,
        576: 1,
      },
    })
  },
  finalize() {},
}
