/**
 * External Dependencies
 */
import 'jquery';
import Alpine from 'alpinejs';

// Import everything from autoload
// import './autoload/**/*';

// import local dependencies

import Router from './util/router';
import routes from './routes';

/** Populate Router instance with DOM routes */
const Routes = new Router(routes);

// Load Events
jQuery(document).ready(() => {
  Routes.loadEvents();
  Alpine.start();
});
