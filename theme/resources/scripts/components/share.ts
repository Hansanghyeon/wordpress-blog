function kakao() {
  const linkBtn = document.querySelector('#share-kakao') as HTMLButtonElement
  if (!linkBtn) {
    return
  }
  const content = {
    title: linkBtn.dataset.title,
    description: linkBtn.dataset.description,
    imageUrl: linkBtn.dataset.imageurl,
    link: {
      webUrl: linkBtn.dataset.link, // 카카오 PC에서 확인할 때 연결될 웹 url
      mobileWebUrl: linkBtn.dataset.link, // 카카오 앱에서 확인할 때 연결될 웹 url
    },
  }
  window.Kakao.init('6ac4fba26bc5d9095ff50a75e065b66e')
  window.Kakao.Share.createDefaultButton({
    container: '#share-kakao', // 공유하기 기능을 부여할 DOM container
    objectType: 'feed', // 피드타입
    content,
    // social: {
    //   likeCount: 286,
    //   commentCount: 45,
    //   sharedCount: 845,
    // },
    // buttons: [
    //   {
    //     title: '웹으로 보기',
    //     link: {
    //       mobileWebUrl: 'https://developers.kakao.com',
    //       webUrl: 'https://developers.kakao.com',
    //     },
    //   },
    //   {
    //     title: '앱으로 보기',
    //     link: {
    //       mobileWebUrl: 'https://developers.kakao.com',
    //       webUrl: 'https://developers.kakao.com',
    //     },
    //   },
    // ],
  })
}

export default () => {
  kakao()
}
