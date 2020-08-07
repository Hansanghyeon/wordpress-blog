import React from 'react';
// components
import Project from '@template/Project';
import { Container, Row, Col } from './page.style';

const ProjectPage = () => {
  return (
    <Container.Project>
      <Row.Def>
        <Col.Def>
          <Project />
        </Col.Def>
      </Row.Def>
    </Container.Project>
  );
};

export default ProjectPage;
