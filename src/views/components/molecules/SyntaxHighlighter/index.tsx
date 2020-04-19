import React from 'react';
import { Prism as ReactSyntaxHighlighter } from 'react-syntax-highlighter';
import {
  atomDark,
  base16AteliersulphurpoolLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  lang: string;
  isDark?: boolean;
  children: React.ReactNode;
};
const SyntaxHighlighter = (props: Props) => {
  const { lang, isDark, children } = props;
  return (
    <ReactSyntaxHighlighter
      {...props}
      language={lang}
      style={isDark ? atomDark : base16AteliersulphurpoolLight}
    >
      {children}
    </ReactSyntaxHighlighter>
  );
};

export default SyntaxHighlighter;
