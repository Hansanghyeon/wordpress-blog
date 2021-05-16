function toc() {
  // TOC
  const toggleToc = document.querySelector('#toggle-toc');
  const toc = document.querySelector('#toc');
  toggleToc.addEventListener('click', () => {
    if (toc.classList.contains('active')) {
      toc.classList.remove('active');
    } else {
      toc.classList.add('active');
    }
  });
}

export default toc;
