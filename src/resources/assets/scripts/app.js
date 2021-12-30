/**
 * External Dependencies
 */
import 'jquery';
import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';
import store from './store';

Alpine.plugin(intersect);

import Router from './util/router';
import routes from './routes';

/** Populate Router instance with DOM routes */
const Routes = new Router(routes);

// Load Events
jQuery(document).ready(() => {
  Routes.loadEvents();
  store();
  Alpine.start();
});
