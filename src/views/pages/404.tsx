import React from 'react';

import Layout from '@template/layout';
import SEO from '@view/components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not Found" />
    <h1>Not Found</h1>
    <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
