import React from 'react';
import styled from 'styled-components';
import parser, { domToReact } from 'html-react-parser';

const CONSTANTS = (() => {
  const KEY_OF_H2 = 2;
  const KEY_OF_H3 = 3;
  const KEY_OF_H4 = 4;

  const LEVEL_1 = 1;
  const LEVEL_2 = 2;
  const LEVEL_3 = 3;

  const levelsByH2 = () => ({ h2: LEVEL_1, h3: LEVEL_2, h4: LEVEL_3 });

  const levelsByH3 = () => ({ h3: LEVEL_1, h4: LEVEL_2 });
  const levelsByH4 = () => ({ h4: LEVEL_1 });

  return {
    indexOfH2: KEY_OF_H2,
    indexOfH3: KEY_OF_H3,
    indexOfH4: KEY_OF_H4,
    levelsByH2: levelsByH2(),
    levelsByH3: levelsByH3(),
    levelsByH4: levelsByH4(),
  };
})();
const findHighestHTagName = (heading: string[]) =>
  [...heading].reduce((pre, cur) => {
    const headingLevel = new RegExp('<h([0-4]).+>');
    const tagNumOfPre = headingLevel.exec(pre)[1];
    const tagNumOfCur = headingLevel.exec(cur)[1];

    return tagNumOfPre < tagNumOfCur ? pre : cur;
  });
const getLevelsByHighestTag = (_findHighestHTagName: string) => {
  const headingLevel = new RegExp('<h([0-4]).+>');
  const isHeadingNumber = headingLevel.exec(_findHighestHTagName)[1];
  const levelMapByHihestTag = [CONSTANTS.levelsByH2, CONSTANTS.levelsByH3];
  return levelMapByHihestTag[isHeadingNumber - 2] || CONSTANTS.levelsByH4;
};
const levelMap = (data: string[]) =>
  getLevelsByHighestTag(findHighestHTagName(data));

const TOCWrap = styled.div`
  a {
    text-decoration: none;
    cursor: pointer;
  }
`;
const Level1 = styled.a`
  display: block;
`;
const Level2 = styled.a`
  display: block;
  padding-left: 1rem;
`;
const Level3 = styled.a`
  display: block;
  padding-left: 2rem;
`;

interface props {
  data?: Array<string>;
}
const TOC = ({ data }: props) => {
  if (data?.length === 0) return null;
  const HeadingLevel = levelMap(data);

  return (
    <TOCWrap>
      {data?.map((e, index) =>
        parser(e, {
          replace: ({ name, children, attribs }: any) => {
            if (!name) return;
            if (Object.prototype.hasOwnProperty.call(HeadingLevel, name)) {
              const level: number = HeadingLevel[name];
              let result;
              switch (level) {
                case 1:
                  result = (
                    <Level1
                      {...attribs}
                      id={`toc-${index}`}
                      className={`toc-common toc-level-${level}`}
                    >
                      {domToReact(children)}
                    </Level1>
                  );
                  break;
                case 2:
                  result = (
                    <Level2
                      {...attribs}
                      id={`toc-${index}`}
                      className={`toc-common toc-level-${level}`}
                    >
                      {domToReact(children)}
                    </Level2>
                  );
                  break;
                case 3:
                  result = (
                    <Level3
                      {...attribs}
                      id={`toc-${index}`}
                      className={`toc-common toc-level-${level}`}
                    >
                      {domToReact(children)}
                    </Level3>
                  );
                  break;
                default:
              }
              // eslint-disable-next-line consistent-return
              return result;
            }
          },
        }),
      )}
    </TOCWrap>
  );
};

export default TOC;
