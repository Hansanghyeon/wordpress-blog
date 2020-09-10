import React from 'react';
import Lottie from 'react-lottie';
//
import UnderMaintenanceJson from './6873-under-maintenance.json';

const lottieOptions = {
  animationData: UnderMaintenanceJson,
  loop: true,
  autoplay: true,
  renderSettings: {},
};
const UnderMaintenance: React.FC = () => {
  return <Lottie options={lottieOptions} />;
};

export default UnderMaintenance;
