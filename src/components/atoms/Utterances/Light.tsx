import React, { createRef, useLayoutEffect } from 'react';

const src = 'https://utteranc.es/client.js';

export interface IUtterancesProps {
  repo?: string;
}

const Light: React.FC<IUtterancesProps> = React.memo(
  ({ repo = 'Hansanghyeon/utterances' }: IUtterancesProps) => {
    const containerRef = createRef<HTMLDivElement>();

    useLayoutEffect(() => {
      const utterances = document.createElement('script');

      const attributes = {
        src,
        repo,
        'issue-term': 'og:title',
        label: 'comment',
        theme: 'github-light',
        crossOrigin: 'anonymous',
        async: 'true',
      };

      Object.entries(attributes).forEach(([key, value]) => {
        utterances.setAttribute(key, value);
      });

      containerRef.current!.appendChild(utterances);
    }, [repo]);

    return <div ref={containerRef} />;
  },
);

Light.displayName = 'Utterances lightTheme';

export default Light;
