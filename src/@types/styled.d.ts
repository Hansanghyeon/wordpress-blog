// import original module declarations
import 'styled-components';

declare module 'styled-components' {
  // 우리가 아는 타입 지정을 여기서 다해주고 불러서 쓰기
  // 1. 인터페이스 지정
  export interface DefaultTheme {
    colors: {
      primary: '#0f4c81' | '#fff46a';
      bg: ['#fff', '#E1EBF2'] | ['#2C2F33', '#232326'];
      text:
        | ['#333', '#4A4F57', '#868E96', '#dcdcdc']
        | ['#C2BFB9', '#C2BFB9', '#9ba4b7', '#515151'];
      grayscalesDark: [
        '#12171f',
        '#161a23',
        '#181c27',
        '#1f2330',
        '#252836',
        '#303645',
      ];
      grayscalesLight: ['#ffffff', '#e6ecf8', '#9ba4b7', '#6d7484', '#404655'];
      codeBg: '#f5f7ff' | '#1d1f21';
      codeColor: '#5e6687' | '#f92672';
    };
  }
}
