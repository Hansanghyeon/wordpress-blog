<?php
/*
 *  Author: Hansanghyeon<(999@hyeon.pro>
 *  Custom functions, support, custom post types and more.
 */

/*
|--------------------------------------------------------------------------
| Register The Auto Loader
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader for
| our theme. We will simply require it into the script here so that we
| don't have to worry about manually loading any of our classes later on.
|
*/

if (!file_exists($composer = __DIR__ . '/vendor/autoload.php')) {
  wp_die(__('Error locating autoloader. Please run <code>composer install</code>.', 'sage'));
}

require $composer;

add_filter('preview_post_link', function () {
  return get_site_url() . '/preview/';
});
