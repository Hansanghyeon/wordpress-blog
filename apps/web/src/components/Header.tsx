import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { styled } from '@stitches/react'
import Image from '~web/components/Image'
import { client, MenuLocationEnum } from "~web/client";

interface Props {
  title?: string;
  description?: string;
}

function Header({
  title = "Headless by WP Engine",
  description,
}: Props): JSX.Element {
  const { menuItems } = client.useQuery();
  const links = menuItems({
    where: { location: MenuLocationEnum.PRIMARY },
  }).nodes;

  return (
    <Root>
      <Wrap>
        <Link href="/">
          <Logo src="/wp-content/uploads/2021/01/favicon-1.png" alt="logo" />
        </Link>
      </Wrap>
    </Root>
  );
}

// const test = () => {
//   return
//   { description && <p className={styles.description}>{description}</p> }
//   <div className={styles.menu}>
//     <ul>
//       {links?.map((link) => (
//         <li key={`${link.label}$-menu`}>
//           <Link href={link.url ?? ""}>
//             {link.label}
//           </Link>
//         </li>
//       ))}
//       <li>
//         <Link href="https://github.com/wpengine/faustjs">
//           GitHub
//         </Link>
//       </li>
//     </ul>
//   </div>
// }

export default Header;

const Root = styled('header', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 0'
})
const Wrap = styled('div', {
  maxWidth: '360px',
  width: '100%',
  borderRadius: '999px',
  height: '60px',
  padding: '12px',
  backgroundColor: 'black',
  boxSizing: 'border-box'
})
const Logo = styled(Image, {
  height: '100%',
})