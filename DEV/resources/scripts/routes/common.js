import footer from '../components/footer';

export default {
  containerInit() {},
  init() {
    // common code outside containers (header, menu, footer, etc.)
    footer();
    // container init
    this.containerInit();
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
