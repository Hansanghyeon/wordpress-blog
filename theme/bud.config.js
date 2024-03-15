/* eslint-disable no-confusing-arrow */
/**
 * Compiler configuration
 *
 * @see {@link https://roots.io/docs/sage sage documentation}
 * @see {@link https://bud.js.org/guides/configure bud.js configuration guide}
 *
 * @type {import('@roots/bud').Config}
 */
export default async (bud) => {
  /**
   * Application assets & entrypoints
   *
   * @see {@link https://bud.js.org/docs/bud.entry}
   * @see {@link https://bud.js.org/docs/bud.assets}
   */
  bud
    .entry('app', ['@scripts/app', '@styles/app'])
    .entry('editor', ['@scripts/editor', '@styles/editor'])
    .entry('replybox', ['@styles/replybox'])
    .assets(['images', 'fonts'])

  if (bud.isProduction) {
    /**
     * @see https://discourse.roots.io/t/compile-singular-scss-without-hashing/25397/2
     */
    bud.webpackConfig((config) => {
      const findPlugin = (plugin) =>
        plugin.constructor.name === 'MiniCssExtractPlugin'

      const filename = ({ chunk }) =>
        chunk.name === 'replybox'
          ? 'css/replybox.css'
          : bud.relPath('css/@name.css')

      Object.assign(config.plugins.find(findPlugin).options, {
        filename,
      })

      return config
    })
  }

  /**
   * Set public path
   *
   * @see {@link https://bud.js.org/docs/bud.setPublicPath}
   */
  bud.setPublicPath('/app/themes/sage/public/')

  /**
   * Development server settings
   *
   * @see {@link https://bud.js.org/docs/bud.setUrl}
   * @see {@link https://bud.js.org/docs/bud.setProxyUrl}
   * @see {@link https://bud.js.org/docs/bud.watch}
   */
  bud
    .setUrl('http://localhost:3000')
    .setProxyUrl('https://hyeon.pro')
    .watch(['resources/views', 'app'])

  /**
   * Generate WordPress `theme.json`
   *
   * @note This overwrites `theme.json` on every build.
   *
   * @see {@link https://bud.js.org/extensions/sage/theme.json}
   * @see {@link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-json}
   */
  bud.wpjson
    .setSettings({
      color: {
        custom: false,
        customDuotone: false,
        customGradient: false,
        defaultDuotone: false,
        defaultGradients: false,
        defaultPalette: false,
        duotone: [],
      },
      custom: {
        spacing: {},
        typography: {
          'font-size': {},
          'line-height': {},
        },
      },
      spacing: {
        padding: true,
        units: ['px', '%', 'em', 'rem', 'vw', 'vh'],
      },
      typography: {
        customFontSize: false,
      },
    })
    .useTailwindColors()
    .useTailwindFontFamily()
    .useTailwindFontSize()
}
