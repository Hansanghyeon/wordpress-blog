import Headroom from 'headroom.js';

{
  const targetEl = document.querySelector('header.headroom');
  const headroom = new Headroom(targetEl);
  headroom.init();
}
