import { Alpine as AlpineType } from 'alpinejs'
export {}

declare global {
  // eslint-disable-next-line no-var
  var Alpine: AlpineType
  interface Window {
    enableBodyScroll: () => void
    disableBodyScroll: () => void
    overlayMenu?: (open: boolean) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Alpine: any
  }
}
