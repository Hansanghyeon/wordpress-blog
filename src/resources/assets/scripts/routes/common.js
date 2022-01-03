import share from '../components/share';
import header from '../components/header';
/* eslint-disable */
const { render } = wp.element;
import LightHouse from '../components/LightHouse.jsx';
/* eslint-enable */

export default {
  containerInit() {
    share();
  },
  init() {
    // common code outside containers (header, menu, footer, etc.)
    header();
    // container init
    this.containerInit();
    const app = document.getElementById('react-lighthouse-app');
    const { lottieLight, lottieDark } = app.dataset;
    const data = { lottieLight, lottieDark };
    render(<LightHouse data={data} />, app);
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
