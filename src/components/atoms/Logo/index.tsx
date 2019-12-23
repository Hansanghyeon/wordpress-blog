import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(absolutePath: {regex: "/gatsby-icon.png/"}) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage: file(absolutePath: {regex: "/2020-year-pantone-color-wide-logo.png/"}) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: '(min-width: 768px)',
    },
  ];

  return (
    <div>
      <Image
        fluid={sources}
      />
    </div>
  );
};

export default Logo;
