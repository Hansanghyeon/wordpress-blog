import * as _Link from 'next/link';

const Link = (props) => {
  const { children, href } = props;
  if (!href)
    return <button {...props}>{children}</button>
  return <_Link.default href={href}><a {...props}>{children}</a></_Link.default>
}

export default Link