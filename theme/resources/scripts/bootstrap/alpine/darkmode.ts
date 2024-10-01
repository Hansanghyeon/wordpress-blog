import Alpine from 'alpinejs'

const darkMode = () => {
  // Check if dark mode preference is stored in localStorage
  const storedDarkMode = localStorage.getItem('darkMode') === 'true'

  // Create an Alpine.js store for persisting the dark mode preference
  Alpine.store('darkMode', {
    value: storedDarkMode,
    on() {
      this.value = true
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
      window.REMARK42.changeTheme('dark')
    },
    off() {
      this.value = false
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
      window.REMARK42.changeTheme('light')
    },
    toggle() {
      this.value = !this.value
      if (this.value) {
        this.on()
      } else {
        this.off()
      }
    },
  })

  // Set the initial class on the HTML element based on the dark mode preference
  document.documentElement.classList.toggle('dark', storedDarkMode)

  // Initialize dark mode based on store or user preference
  Alpine.data('darkModeInit', () => ({
    darkMode: Alpine.store('darkMode').value,
  }))
}

export default darkMode
