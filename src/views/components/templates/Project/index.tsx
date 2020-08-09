import React from 'react';
import { GridThemeProvider } from 'styled-bootstrap-grid';
// components
import Grid from '@style/Grid';
import ProjectItem from '@molecule/ProjectItem';
import { Container, Col, Row } from './index.style';

const Project = () => {
  const _Grid = {
    ...Grid,
    container: {
      maxWidth: {
        xl: 1280,
        lg: 1280,
        md: 1280,
        sm: 1280,
        xs: 1280,
      },
    },
  };
  const projectData = [
    {
      id: 'proMeta',
      title: '메타크롤러',
      content: () => (
        <div>
          url을 받아와 open graph 데이터와 섬네일과 파비콘은 로컬에 저장하고
          로컬 url를 포함하는 data return{' '}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </div>
      ),
      tags: ['express'],
      links: [
        { name: 'github', src: 'https://github.com/Hansanghyeon/meta-crawler' },
      ],
      thumbnail: {
        type: 'video/mp4',
        src: 'https://storage.googleapis.com/wp-ome/2020-08-08-3.15.10.mp4',
      },
    },
  ];
  return (
    <>
      <GridThemeProvider gridTheme={_Grid}>
        <Container.Screen fluid>
          <Container.Def>
            <Row.Def>
              <Col.Def>
                {projectData.map((data) => (
                  <ProjectItem data={data} key={data.id} />
                ))}
              </Col.Def>
            </Row.Def>
          </Container.Def>
        </Container.Screen>
      </GridThemeProvider>
    </>
  );
};

export default Project;
