import header from '../components/header'

export default {
  containerInit() {},
  init() {
    header()
    // container init
    this.containerInit()
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
}
