/**
 * @see {@link https://bud.js.org/extensions/bud-preset-wordpress/editor-integration/filters}
 */
// roots.register.filters('@scripts/filters')

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (import.meta.webpackHot) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import.meta.webpackHot.accept(console.error)
}
