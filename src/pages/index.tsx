import { graphql } from 'gatsby';
import * as React from 'react';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string
      }
    }
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;

export default class IndexPage extends React.Component<IndexPageProps> {
  readonly hello = 'Hello'

  public render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { siteName } = this.props.data.site.siteMetadata;
    return (
      <div>
        <h1>
          {this.hello}
          TypeScript world!
        </h1>
        <p>
          This site is named
          <strong>
            {siteName}
          </strong>
        </p>
      </div>
    );
  }
}
