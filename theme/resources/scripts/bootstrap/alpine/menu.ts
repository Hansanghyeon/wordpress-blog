import Alpine from 'alpinejs'
import {
  disableBodyScroll,
  enableBodyScroll,
} from '../../bootstrap/alpine/body-lock'

const menu = () =>
  Alpine.store('menu', {
    on: false,
    open() {
      console.log('open')
      this.on = true
      disableBodyScroll()
    },
    close() {
      console.log('close')
      this.on = false
      enableBodyScroll()
    },
  })

export default menu
