import React, { useState } from 'react';

import { Box, Icon, SVG } from './style';

type props = {
  children: React.ReactNode;
};
const DownloadButton: React.FC<props> = ({ children }: props) => {
  const [isClicked, setIsClicked] = useState(false);
  const _handleClick = () => {
    setIsClicked(true);
  };
  return (
    <Box.Wrap>
      <Box.Main>
        <Icon>
          <div>
            <SVG.Arrow viewBox="0 0 20 18">
              <polygon points="8 0 12 0 12 9 15 9 10 14 5 9 8 9" />
            </SVG.Arrow>
            <SVG.Shape viewBox="0 0 20 18" clicked={isClicked}>
              <path d="M4.82668561,0 L15.1733144,0 C16.0590479,0 16.8392841,0.582583769 17.0909106,1.43182334 L19.7391982,10.369794 C19.9108349,10.9490677 19.9490212,11.5596963 19.8508905,12.1558403 L19.1646343,16.3248465 C19.0055906,17.2910371 18.1703851,18 17.191192,18 L2.80880804,18 C1.82961488,18 0.994409401,17.2910371 0.835365676,16.3248465 L0.149109507,12.1558403 C0.0509788145,11.5596963 0.0891651114,10.9490677 0.260801785,10.369794 L2.90908938,1.43182334 C3.16071592,0.582583769 3.94095214,0 4.82668561,0 Z" />
            </SVG.Shape>
            <SVG.Span clicked={isClicked} />
          </div>
        </Icon>
        {children}
        <Box.Link onClick={_handleClick}>{children}</Box.Link>
      </Box.Main>
    </Box.Wrap>
  );
};

export default DownloadButton;
