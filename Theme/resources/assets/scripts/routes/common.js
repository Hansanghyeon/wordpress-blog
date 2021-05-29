import footer from '../components/footer';
import share from '../components/share';
import loader from '../components/loader';

export default {
  containerInit() {
    share();
  },
  init() {
    // common code outside containers (header, menu, footer, etc.)
    footer();
    // container init
    this.containerInit();
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
    loader();
  },
};
