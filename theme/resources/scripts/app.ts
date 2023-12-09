import domReady from '@roots/sage/client/dom-ready'
import * as routes from './routes'
import Router from './libs/router'
import bootstrapAlpine from './bootstrap/alpine'

/** Populate Router instance with DOM routes */
const Routes = new Router(routes)

/**
 * Application entrypoint
 */
domReady(async () => {
  // ...
  Routes.loadEvents()
  bootstrapAlpine()
})

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
