import Head from 'next/head';
import useDarkMode from 'use-dark-mode';
// components
import Layout from '@template/Layout';
import Animation404 from '@atom/Animation404';
import { Container, Row, Col } from '@template/Layout/page.style';

export default function Custom404() {
  const { value } = useDarkMode();
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <Layout>
        <Container.Cover>
          <Row.Header />
          <Row>
            <Col col>
              <Animation404 isDark={value} />
            </Col>
          </Row>
          <Row>
            <Col col>
              <h1 style={{ display: 'none' }}>Not Found</h1>
            </Col>
          </Row>
          <Row.Footer />
        </Container.Cover>
      </Layout>
    </>
  );
}
