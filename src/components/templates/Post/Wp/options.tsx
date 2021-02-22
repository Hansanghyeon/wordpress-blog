import React from 'react';
import { domToReact, HTMLReactParserOptions } from 'html-react-parser';
// components
import DownloadButton from '@atom/button/Download';
import Callout from '@atom/card/Callout';
import SeoPreviewCard from '@atom/card/SeoPreview/context';
import SyntaxHighlighter from '@atom/block/SyntaxHighlighter';

// FIXME 리팩토링 할일 해당 코드를 더 간결하게 만들수있나 고민
const options = (block: string): HTMLReactParserOptions => ({
  replace: (domNode) => {
    const { name, children, attribs, parent } = domNode;
    const _block = block;
    if (!name) return;
    if (name === 'pre' && attribs?.class === 'wp-block-code') {
      return !!children && domToReact(children, options(_block));
    }
    if (
      name === 'code' &&
      // Object.prototype.hasOwnProperty.call(attribs, 'lang')
      parent?.name === 'pre'
    ) {
      const SyntaxHighlighterProps = {
        data: {
          lang: attribs?.lang,
          fileName: parent?.attribs?.title,
          isLineNumber: new Set(attribs?.class?.split(' ')).has('line-numbers'),
        },
      };
      return (
        <SyntaxHighlighter {...SyntaxHighlighterProps}>
          {block
            .replace(/<[pre][^>]*><[code][^>]*>/, '')
            .replace(/\n<\/code><\/pre>|<\/code><\/pre>/, '')}
        </SyntaxHighlighter>
      );
    }
    if (name === 'component' && children) {
      switch (attribs?.fc) {
        case 'callout':
          return (
            <Callout bgColor={attribs.bg} icon={attribs.icon}>
              {domToReact(children)}
            </Callout>
          );
        case 'seo-preview':
          return SeoPreviewCard(attribs.url);
        default:
          return;
      }
    }
    if (name === 'code' && !!children) {
      return <code className="language-text">{domToReact(children)}</code>;
    }
    if (attribs?.class === 'wp-block-file' && !!children) {
      return <DownloadButton>{domToReact(children)}</DownloadButton>;
    }
  },
});

export default options;
