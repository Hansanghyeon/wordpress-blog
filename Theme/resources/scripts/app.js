/**
 * External Dependencies
 */
import 'jquery';
import Alpine from 'alpinejs';

// Import everything from autoload
// import './autoload/**/*';

// import local dependencies
import Router from './util/router';
import common from './routes/common';
import singleDev from './routes/single-dev';
import singleBlog from './routes/single-blog';
import taxonomy from './routes/taxonomy';

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  singleDev,
  singleBlog,
  taxDevCategory: taxonomy,
  taxDevTag: taxonomy,
  taxBlogCategory: taxonomy,
});

// Load Events
jQuery(document).ready(() => {
  routes.loadEvents();
  Alpine.start();
});
