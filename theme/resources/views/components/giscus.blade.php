<div id="giscus"></div>
<script>
  function setGiscus() {
    const giscusTheme = localStorage.getItem('darkMode') === 'true';
    const giscusAttributes = {
      'src': 'https://giscus.app/client.js',
      'data-repo': 'Hansanghyeon/blog',
      'data-repo-id': 'MDEwOlJlcG9zaXRvcnkyMjc4NTg3MjM=',
      'data-category': 'comment',
      'data-category-id': 'comment',
      'data-mapping': 'specific',
      'data-term': '{!! $id !!}',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '1',
      'data-theme': giscusTheme ? 'dark_dimmed' : 'light_tritanopia',
      'data-lang': 'ko',
      'data-position': 'top',
      'crossorigin': 'anonymous',
      'async': '',
    };

    const giscusScript = document.createElement('script');
    giscusScript.setAttribute('id', 'giscus-script');
    Object.entries(giscusAttributes).forEach(([key, value]) => giscusScript.setAttribute(key, value));
    const giscus = document.getElementById('giscus');
    giscus.append(giscusScript);
  }

  function removeGiscus() {
    const giscus = document.getElementById('giscus');
    giscus.innerHTML = '';
  }

  // initial setting
  setGiscus()

  const targetNode = document.querySelector('html');
  // MutationObserver 생성
  const observer = new MutationObserver(mutationsList => {
    // 변경된 요소들에 대해 반복
    for(const mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        removeGiscus()
        setGiscus()
        // 클래스 이름이 변경된 경우 처리할 작업 수행
        console.log('클래스 이름이 변경되었습니다.');
      }
    }
  });

  // 감시할 옵션 설정
  const config = { attributes: true, attributeFilter: ['class'] };

  // DOM의 변화를 감지할 MutationObserver 시작
  observer.observe(targetNode, config);
</script>
