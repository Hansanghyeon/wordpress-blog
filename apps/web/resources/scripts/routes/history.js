import ReactDOM from 'react-dom'
import History from '../components/History.jsx';
/* eslint-enable */

export default {
  init() {
    ReactDOM.render(<History />, document.getElementById('react-history-app'));
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
