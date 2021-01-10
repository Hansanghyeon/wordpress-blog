import { useRef } from 'react';
import clamp from 'lodash/clamp';
import { useSprings, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import { MotionImgWrap } from './style';

const source = [
  'https://wp.hyeon.pro/wp-content/uploads/IMG_0191-scaled.jpg',
  'https://wp.hyeon.pro/wp-content/uploads/IMG_0161-scaled.jpg',
  'https://wp.hyeon.pro/wp-content/uploads/IMG_0095-scaled.jpg',
  'https://wp.hyeon.pro/wp-content/uploads/talkv_wo21iT6yFv_WE9zUhQOaHJdrqvuKHq3mk_talkv_high.mp4',
  'https://wp.hyeon.pro/wp-content/uploads/IMG_0058.mp4',
  'https://wp.hyeon.pro/wp-content/uploads/IMG_0094-scaled.jpg',
];

function ImageCarousel() {
  const index = useRef(0);
  const [props, set] = useSprings(source.length, (i) => ({
    x: i * 375,
    sc: 1,
    display: 'block',
  }));
  const bind = useGesture(
    ({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
      if (down && distance > 375 / 2) {
        cancel(
          (index.current = clamp(
            index.current + (xDir > 0 ? -1 : 1),
            0,
            source.length - 1,
          )),
        );
      }
      set((i) => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: 'none' };
        const x = (i - index.current) * 375 + (down ? xDelta : 0);
        const sc = down ? 1 - distance / 375 / 2 : 1;
        return { x, sc, display: 'block' };
      });
    },
  );

  // image video check
  const sourceImgCheck = /(https?:\/\/.*\.(?:png|jpg)$)/i;

  return props.map(({ x, display, sc }, i) => (
    <animated.div
      {...bind()}
      key={i}
      style={{
        display,
        transform: x.interpolate((x) => `translate3d(${x}px,0,0)`),
      }}
    >
      {sourceImgCheck.test(source[i]) ? (
        <animated.div
          style={{
            transform: sc.interpolate((s) => `scale(${s})`),
            backgroundImage: `url(${source[i]})`,
          }}
        />
      ) : (
        <animated.div
          style={{
            transform: sc.interpolate((s) => `scale(${s})`),
          }}
        >
          <video autoPlay loop muted>
            <source src={source[i]} />
          </video>
        </animated.div>
      )}
    </animated.div>
  ));
}

export default function Carousel() {
  return (
    <MotionImgWrap>
      <ImageCarousel />
    </MotionImgWrap>
  );
}
