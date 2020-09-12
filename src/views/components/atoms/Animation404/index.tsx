import React from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import darkAniJson from './dark.json';
import lightAniJson from './light.json';

const Wrap = styled.div`
  max-height: 500px;
  height: 500px;
  width: 100%;
`;

interface Animation404Props {
  isDark?: boolean;
}
const Animation404: React.FC<Animation404Props> = ({
  isDark,
}: Animation404Props) => {
  const lottieOptions = {
    animationData: isDark ? darkAniJson : lightAniJson,
    loop: true,
    autoplay: false,
    renderSettings: {},
  };
  return (
    <Wrap>
      <Lottie options={lottieOptions} />
    </Wrap>
  );
};

export default Animation404;
