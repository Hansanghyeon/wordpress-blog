import Headroom from 'headroom.js'

function header() {
  const targetEl = document.querySelector('header#gnb')
  if (targetEl) {
    const headroom = new Headroom(targetEl)
    headroom.init()
  }

  // mobile header
  const mobileHeader = document.querySelector('header#m-gnb')
  if (mobileHeader) {
    const mobileHeaderHeadroom = new Headroom(mobileHeader)
    mobileHeaderHeadroom.init()
  }
}

export default header
