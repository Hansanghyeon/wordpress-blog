import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// components
import Link from '@atom/Link';
import { Wrap, Content as C, Thumbnail } from './index.style';

type FooterLinkProps = {
  name: string;
  src: string;
};
const FooterLink: React.FC<FooterLinkProps> = ({
  name,
  src,
}: FooterLinkProps) => {
  if (name === 'github')
    return (
      <Link to={src}>
        <FontAwesomeIcon icon={faGithub} />
      </Link>
    );
  return <Link to={src} />;
};

type thumbnailProps = {
  thumbnail: {
    type: string;
    src: string;
  };
};
const ThumbnailComponent: React.FC<thumbnailProps> = ({
  thumbnail,
}: thumbnailProps) => {
  const { type, src } = thumbnail;
  const typeRegExp = new RegExp(/video/);
  if (typeRegExp.test(type))
    return (
      <video width="100%" autoPlay loop>
        <source src={src} type={type} />
        <track kind="captions" />
      </video>
    );
  return <div />;
};

type props = {
  data: {
    title: string;
    content: any;
    tags: string[];
    links: { name: string; src: string }[];
    thumbnail: {
      type: string;
      src: string;
    };
  };
};
const ProjectItem: React.FC<props> = ({ data }: props) => {
  const { title, content, tags, thumbnail, links } = data;

  return (
    <Wrap>
      <C.Wrap>
        <C.Inner>
          <C.Title>{title}</C.Title>
          <C.Content>{content()}</C.Content>
          <C.Footer>
            {tags.map((tag) => (
              <code>{tag}</code>
            ))}
            {links.map((link) => (
              <FooterLink {...link} />
            ))}
          </C.Footer>
        </C.Inner>
      </C.Wrap>
      <Thumbnail.Wrap>
        <Thumbnail.Inner>
          <ThumbnailComponent thumbnail={thumbnail} />
        </Thumbnail.Inner>
      </Thumbnail.Wrap>
    </Wrap>
  );
};

export default ProjectItem;
