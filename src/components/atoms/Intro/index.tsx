import Typing from 'react-typing-animation';
// components
import { Slogan, CursorSpan, IntroWrap, SloganWrap } from './style';
import Carousel from './Carousel';
import CatButton from './CatButton';

function Cursor() {
  return <CursorSpan>|</CursorSpan>;
}

export default function Intro() {
  const finishTyping = () => {};
  return (
    <IntroWrap>
      <SloganWrap>
        <Typing cursor={<Cursor />} onFinishedTyping={finishTyping}>
          <Slogan>
            하고 싶은 것을 하며 살아라
            <Typing.Delay ms={2000} />
            <br />
            단, 후회는 잊어버려라
          </Slogan>
        </Typing>
      </SloganWrap>
      <CatButton />
      <Carousel />
    </IntroWrap>
  );
}
