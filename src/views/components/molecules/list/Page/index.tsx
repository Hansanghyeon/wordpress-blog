import React from 'react';
import Link from '@atom/Link';

type staticPageQuery = {
  node: {
    path: string;
    id: string;
    internalComponentName: string;
  };
};
const PageList = ({ data }: { data: any }) => {
  return (
    <ul>
      {data.allSitePage.edges
        .filter(({ node }: any) => {
          const filterRegExp = new RegExp(/(Index|404)/);
          return !filterRegExp.test(node.internalComponentName);
        })
        .map(
          ({ node: { path, id, internalComponentName } }: staticPageQuery) => {
            const name = internalComponentName.replace('Component', '');
            return (
              <li key={id}>
                <Link to={path} state={{ path: name }}>
                  {name}
                </Link>
              </li>
            );
          },
        )}
    </ul>
  );
};

export default PageList;
