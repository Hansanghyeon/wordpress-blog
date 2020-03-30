import React from 'react';

import Layout from '@src/components/templates/layout';
import SEO from '@src/components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not Found" />
    <h1>Not Found</h1>
    <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
