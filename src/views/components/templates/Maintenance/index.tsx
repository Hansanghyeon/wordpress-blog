import React from 'react';
// components
import UnderMaintenance from '@atom/maintenance';
import { Root, MaintenanceAnimationWrap } from './style';

const Maintenance: React.FC = () => {
  return (
    <Root>
      <MaintenanceAnimationWrap>
        <UnderMaintenance />
      </MaintenanceAnimationWrap>
    </Root>
  );
};

export default Maintenance;
