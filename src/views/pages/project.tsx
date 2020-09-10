import React from 'react';
// components
import Maintenance from '@template/Maintenance';
import Project from '@template/Project';

const ProjectPage: React.FC = () => {
  if (process.env.NODE_ENV === 'production') return <Maintenance />;
  return <Project />;
};

export default ProjectPage;
