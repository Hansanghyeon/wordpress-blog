import Headroom from 'headroom.js';

function header() {
  const targetEl = document.querySelector('header#global');
  const headroom = new Headroom(targetEl);
  headroom.init();
}

export default header;
