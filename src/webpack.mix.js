const mix = require('laravel-mix');
require('@tinypixelco/laravel-mix-wp-blocks');

// Source path helper
const src = (path) => `resources/assets/${path}`;

/**
  |--------------------------------------------------------------------------
  | Mix Asset Management
  |--------------------------------------------------------------------------
  |
  | Mix provides a clean, fluent API for defining some Webpack build steps
  | for your Sage application. By default, we are compiling the Sass file
  | for your application, as well as bundling up your JS files.
  |
  **/
// Public Path
mix.browserSync('hyeon.local:10000');
// Browsersync
mix.setPublicPath('./public');

// Styles
mix
  .sass(src`styles/app.scss`, 'styles')
  .sass(src`styles/editor.scss`, 'styles');

// JavaScript
mix
  .js(src`scripts/app.js`, 'scripts')
  .js(src`scripts/customizer.js`, 'scripts')
  .blocks(src`scripts/editor.js`, 'scripts')
  .extract();

// Autoload
mix.autoload({ jquery: ['$', 'window.jQuery'] });

// Options
mix.options({
  processCssUrls: false,
  postCss: [require('tailwindcss')],
  autoprefixer: {
    options: {
      browsers: ['last 6 versions'],
    },
  },
  legacyNodePolyfills: false,
});

mix
  .copyDirectory(src`images`, 'public/images')
  .copyDirectory(src`lottie`, 'public/lottie')
  .copyDirectory(src`fonts`, 'public/fonts');

mix.webpackConfig({
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|s?[ca]ss)$/,
        loader: 'import-glob',
      },
    ],
  },
});

if (!mix.inProduction()) {
  mix.sourceMaps().version();
  mix.webpackConfig({
    devtool: 'inline-source-map',
  });
}
