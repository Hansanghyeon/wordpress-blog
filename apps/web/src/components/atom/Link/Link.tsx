// eslint-disable-next-line import/no-named-default
import { default as _Link } from 'next/link';

const Link = (props) => {
  const { children, href, ...rest } = props!;
  if (!href) return <button {...rest}>{children}</button>;
  return (
    <_Link href={href}>
      <a {...rest}>{children}</a>
    </_Link>
  );
};

export default Link;
