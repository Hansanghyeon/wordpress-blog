import * as _Link from 'next/link';

const Link = (props) => {
  const { children, href, ...rest } = props;
  if (!href)
    return <button {...rest}>{children}</button>
  return <_Link.default href={href}><a {...rest}>{children}</a></_Link.default>
}

export default Link