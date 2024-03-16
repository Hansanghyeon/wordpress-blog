<script>
// 스크립트를 로드하는 함수
function loadScript() {
  // dom 제거하기
  const replybox = document.getElementById('replybox');
  // replybox children 제거
  while (replybox.firstChild) {
    replybox.removeChild(replybox.firstChild);
  }
  // 스크립트
  // 기존에 추가된 스크립트 태그 찾기
  const existingScript = document.querySelector('script[src="https://cdn.getreplybox.com/js/embed.js"]');

  // 기존 스크립트가 있다면 제거
  if (existingScript) {
      existingScript.remove();
  }

  // 새 스크립트 태그 생성
  const script = document.createElement('script');
  script.src = "https://cdn.getreplybox.com/js/embed.js";
  script.defer = true;

  // 문서에 스크립트 태그 추가
  document.body.appendChild(script);
}
</script>
<div id="replybox" x-data x-init="

$watch('$store.darkMode', darkMode => {
  window.replybox = {
    site: 'N6lBApDnAr',
    bodyClass: darkMode.value ? 'dark' : ''
  };
  loadScript()
})

window.replybox = {
  site: 'N6lBApDnAr',
  bodyClass: $store.darkMode.value ? 'dark' : ''
};
loadScript()

"></div>
