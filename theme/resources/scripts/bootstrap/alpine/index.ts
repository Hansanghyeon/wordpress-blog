import Alpine from 'alpinejs'
import { globalEvent } from './global'
import menu from './menu'
import modal from './modal'
import darkmode from './darkmode'

// suggested in the Alpine docs:
// make Alpine on window available for better DX
window.Alpine = Alpine

function store() {
  document.addEventListener('alpine:init', () => {
    menu()
    modal()
    darkmode()
  })
}

export const bootstarpAlpine = () => {
  store()
  Alpine.start()

  // alpine이 시작하고나면 global 이벤트를 추가해야한다.
  globalEvent()
}

export default bootstarpAlpine
