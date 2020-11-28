import useDarkMode from 'use-dark-mode';
import { Wrap, Col, Row, Emoji } from './index.style';

// NOTE
// "Callout은 MDX에서 사용하기때문에 렌더링할때 props에서 theme 값을 가져올 수 없다."

interface Props {
  children: React.ReactNode;
  icon?: string;
  bgColor?: string;
}

export default function Callout({
  children,
  icon = '📌',
  bgColor = '',
}: Props) {
  const { value } = useDarkMode();
  return (
    <Wrap bgColor={bgColor} isDark={value}>
      <Row.Def>
        <Emoji role="img" aria-label="">
          {icon}
        </Emoji>
        <Col.Text col>{children}</Col.Text>
      </Row.Def>
    </Wrap>
  );
}
