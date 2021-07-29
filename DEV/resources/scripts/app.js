/**
 * External Dependencies
 */
import 'jquery';

// Import everything from autoload
// import './autoload/**/*';

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import singleDev from './routes/single-dev';
import taxonomy from './routes/taxonomy';

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  singleDev,
  taxDevCategory: taxonomy,
});

// Load Events
jQuery(document).ready(() => {
  routes.loadEvents();
});
