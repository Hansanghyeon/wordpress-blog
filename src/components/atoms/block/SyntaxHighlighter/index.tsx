import useDarkMode from 'use-dark-mode';
import { Prism as ReactSyntaxHighlighter } from 'react-syntax-highlighter';
import {
  atomDark,
  base16AteliersulphurpoolLight,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Header, Lang, FileName } from './style';

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
  let icon = '';
  switch (lang) {
    case undefined:
      break;
    case 'nginx':
      icon = 'settings';
      break;
    case 'bash':
      icon = 'console';
      break;
    case 'sql':
      icon = 'database';
      break;
    default:
      icon = lang;
      break;
  }
  return (
    <>
      <Header>
        {fileName ? <FileName>{fileName}</FileName> : <div />}
        {lang && (
          <Lang
            src={`https://wp.hyeon.pro/wp-content/uploads/4log/icons/material/${icon}.svg`}
            alt=""
          />
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
    </>
  );
}
