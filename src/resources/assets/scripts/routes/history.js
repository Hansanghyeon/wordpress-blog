/* eslint-disable */
const { render } = wp.element;
import History from '../components/History.jsx';
/* eslint-enable */

export default {
  init() {
    render(<History />, document.getElementById('react-history-app'));
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
