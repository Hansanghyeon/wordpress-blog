// import external dependencies
import 'jquery';

// Import everything from autoload
import './autoload/**/*';

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home';
import aboutUs from './routes/about';
import barba from './barba';
import somePage from './routes/somePage';
import singleDev from './routes/singleDev';

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Home page
  home,
  // About Us page, note the change from about-us to aboutUs.
  aboutUs,
  // The new page we created
  somePage,
  singleDev,
});

// Load Events
jQuery(document).ready(() => {
  routes.loadEvents();
  barba.init();
});
