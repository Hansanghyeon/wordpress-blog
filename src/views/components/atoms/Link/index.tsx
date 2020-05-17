import React from 'react';
// import { Link as GatsbyLink } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
// import TransitionLink from 'gatsby-plugin-transition-link';

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  direction,
  ...other
}: any) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <AniLink
        swipe
        top="exit"
        direction={direction}
        duration={1}
        entryOffset={200}
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </AniLink>
    );
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  );
};

export default Link;
