import React from 'react';
import { Prism as ReactSyntaxHighlighter } from 'react-syntax-highlighter';
import {
  atomDark,
  base16AteliersulphurpoolLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

interface themeState {
  isDark?: boolean;
}
interface Props extends themeState {
  lang: string;
  children: React.ReactNode;
}
const SyntaxHighlighter = ({ isDark, lang, children }: Props) => (
  <ReactSyntaxHighlighter
    language={lang}
    style={isDark ? atomDark : base16AteliersulphurpoolLight}
  >
    {children}
  </ReactSyntaxHighlighter>
);

export default SyntaxHighlighter;
