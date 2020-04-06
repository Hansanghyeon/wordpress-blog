import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import CpuChip from './lottie.json';

const CpuChipThemeApply = styled.div`
  width: 100%;
  height: 100%;
  svg.cpu-chip path[stroke='rgb(0,0,0)'] {
    stroke: ${({ theme }) => theme.color.text[1]};
  }
  svg.cpu-chip path[stroke='rgb(241,241,241)'] {
    stroke: ${({ theme }) => theme.color.bg[1]};
  }
  svg.cpu-chip path[fill='rgb(0,0,0)'] {
    fill: ${({ theme }) => theme.color.text[1]};
  }
  svg.cpu-chip path[fill='rgb(241,241,241)'] {
    fill: ${({ theme }) => theme.color.bg[1]};
  }
`;
const lottieOptions = {
  animationData: CpuChip,
  loop: true,
  autoplay: true,
  rendererSettings: {
    className: 'cpu-chip',
  },
};

const CpuChipLoader = () => (
  <CpuChipThemeApply>
    <Lottie options={lottieOptions} />
  </CpuChipThemeApply>
);
export default CpuChipLoader;
