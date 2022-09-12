import type {Bud} from '@roots/bud'

export default (bud: Bud): void => {
  bud
    /**
     * Application entrypoints
     */
    .entry({
      app: ["@scripts/app", "@styles/app"],
      editor: ["@scripts/editor", "@styles/editor"],
    })

    /**
     * Directory contents to be included in the compilation
     */
    .assets(["images", {
      from: bud.path('@src/fonts'),
      to: bud.path('@dist/fonts')
    }])

    /**
     * Matched files trigger a page reload when modified
     */
    .watch(["resources/views/**/*", "app/**/*"])

    /**
     * Proxy origin (`WP_HOME`)
     */
    .proxy("https://dev.hyeon.pro")

    /**
     * Development origin
     */
    .serve("http://0.0.0.0:3000")

    /**
     * URI of the `public` directory
     */
    .setPublicPath("/app/themes/sage/public/");
  // app
  //   .make('theme', async (theme: Bud): Promise<void> => {
  //     theme
  //       .setPath('@dist', 'dist/theme')
  //       .entry('theme', ['theme.js', 'theme.css'])
  //   })
  //   .make(
  //     'plugin',
  //     async (plugin: Bud): Promise<void> =>
  //       plugin
  //         .setPath('@dist', 'dist/plugin')
  //         .entry('plugin', ['plugin.js', 'plugin.css']),
  // )
}
