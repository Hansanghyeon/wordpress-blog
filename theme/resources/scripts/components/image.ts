import mediumZoom from 'medium-zoom'

function image() {
  const images = document.querySelectorAll(
    '.entry-content img[class*="wp-image"]',
  )
  mediumZoom(images, {
    background: 'var(--bg1)',
    margin: 48,
  })
}

export default image
