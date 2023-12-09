import Alpine from 'alpinejs'
import {
  disableBodyScroll,
  enableBodyScroll,
} from '../../bootstrap/alpine/body-lock'

const overlay = () =>
  Alpine.store('modal', {
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

const modal = () => {
  overlay()
}

export default modal
