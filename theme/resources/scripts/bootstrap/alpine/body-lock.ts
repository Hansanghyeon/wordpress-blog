import scrollLock from 'scroll-lock'
export function disableBodyScroll() {
  scrollLock.disableBodyScroll(document.querySelector('body'))
  const wpBar = document.querySelector('#wpadminbar')
  if (wpBar) {
    wpBar.classList.add('pr-[15px]')
  }
  const mGnb = document.querySelector('#m-gnb')
  if (mGnb) {
    mGnb.classList.add('pr-[15px]')
  }
}

window.disableBodyScroll = disableBodyScroll

export function enableBodyScroll() {
  scrollLock.enableBodyScroll(document.querySelector('body'))
  const wpBar = document.querySelector('#wpadminbar')
  if (wpBar) {
    wpBar.classList.remove('pr-[15px]')
  }
  const mGnb = document.querySelector('#m-gnb')
  if (mGnb) {
    mGnb.classList.remove('pr-[15px]')
  }
}

window.enableBodyScroll = enableBodyScroll
