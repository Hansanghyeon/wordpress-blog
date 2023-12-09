function globalEvent() {
  document.addEventListener('keydown', (e) => {
    // esc 키보드이벤트만 처리한다.
    if (e.key === 'Escape') {
      Alpine.store('menu').close()
    }
  })
}

export { globalEvent }
