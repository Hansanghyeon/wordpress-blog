import mediumZoom from 'medium-zoom';

function image() {
  mediumZoom(
    [...document.querySelectorAll('.entry-content img[class*="wp-image"]')],
    {
      background: 'var(--bg1)',
      margin: 48,
    }
  );
}

export default image;
