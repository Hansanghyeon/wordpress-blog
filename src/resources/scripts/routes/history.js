/* eslint-disable */
const { render } = wp.element;
import History from '../components/history.jsx';
/* eslint-enable */

export default {
  init() {
    render(<History />, document.getElementById('react-app'));
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
