function toc() {
  // TOC
  const toggleToc = document.querySelector('#toggle-toc');
  const toc = document.querySelector('#toc');
  // TOC 자체가 없을때 토글 제거
  const ezToc = document.querySelector('.ez-toc');
  if (ezToc === undefined) toggleToc.remove();

  toggleToc.addEventListener('click', () => {
    if (toc.classList.contains('active')) {
      toc.classList.remove('active');
    } else {
      toc.classList.add('active');
    }
  });
}

export default toc;
