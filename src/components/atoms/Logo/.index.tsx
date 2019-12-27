import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(absolutePath: {regex: "/gatsby-icon.png/"}) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Image
      fluid={data.logo.childImageSharp.fluid}
    />
  );
};

export default Logo;
