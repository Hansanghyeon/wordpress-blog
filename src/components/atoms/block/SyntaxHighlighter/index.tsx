import useDarkMode from 'use-dark-mode';
import { Prism as ReactSyntaxHighlighter } from 'react-syntax-highlighter';
import {
  atomDark,
  base16AteliersulphurpoolLight,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';
// function
import iconFilter from './iconFilter';
// components
import { PreWrap, Header, Lang, FileName } from './style';

type Props = {
  data: {
    lang?: string;
    fileName?: string;
    isLineNumber?: boolean;
  };
  children: React.ReactNode;
};
export default function SyntaxHighlighter(props: Props) {
  const { data, children } = props;
  const { value } = useDarkMode();
  const isDark = value;
  const { lang, fileName, isLineNumber } = data;
  const icon = iconFilter(lang || '');

  return (
    <PreWrap>
      <Header>
        {fileName ? <FileName>{fileName}</FileName> : <div />}
        {lang && (
          <Lang src={`${process.env.FILE_SERVER}/${icon}.svg`} alt={icon} />
        )}
      </Header>
      <ReactSyntaxHighlighter
        {...props}
        showLineNumbers={isLineNumber}
        language={lang}
        style={isDark ? atomDark : base16AteliersulphurpoolLight}
      >
        {children}
      </ReactSyntaxHighlighter>
    </PreWrap>
  );
}
