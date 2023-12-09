export {}

declare global {
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
