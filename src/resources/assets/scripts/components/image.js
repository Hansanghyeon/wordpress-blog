import mediumZoom from 'medium-zoom';

function image() {
  console.log('test');
  mediumZoom(
    [...document.querySelectorAll('.entry-content img[class*="wp-image"]')],
    {
      background: 'var(--bg0)',
      margin: 48,
    }
  );
}

export default image;
