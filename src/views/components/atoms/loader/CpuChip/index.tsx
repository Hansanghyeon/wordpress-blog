import React from 'react';
import Lottie from 'react-lottie';
import CpuChip from './lottie.json';

const lottieOptions = {
  animationData: CpuChip,
  loop: true,
  autoplay: true,
  rendererSettings: {
    className: 'cpu-chip',
  },
};

const CpuChipLoader = () => <Lottie options={lottieOptions} />;

export default CpuChipLoader;
