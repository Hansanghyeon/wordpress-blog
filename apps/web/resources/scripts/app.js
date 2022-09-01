import {domReady} from '@roots/sage/client';
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

/**
 * app.main
 */
const main = async (err) => {
  if (err) {
    // handle hmr errors
    console.error(err);
  }

  // application code
   Routes.loadEvents();
   store();
   Alpine.start();
};

/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */
domReady(main);
import.meta.webpackHot?.accept(main);
