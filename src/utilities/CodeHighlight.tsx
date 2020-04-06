/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import Prism from 'prismjs';

// prettier-ignore
// eslint-disable-next-line no-useless-escape
const CodeBlockRegExp = new RegExp(/\<pre.+class\=\".+\">\<code lang\=\"(.+)\" class\=\".+\"\>([\s\S]+)\<\/code\>\<\/pre\>/g);

interface Props {
  code: string;
}
const CodeHighlight = ({ code }: Props) => {
  const result = CodeBlockRegExp.exec(code);
  const lang = result && result[1];
  const codeString = (result && result[2])?.replace(
    new RegExp('&lt;', 'g'),
    '<',
  );
  console.log(codeString);
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  });
  return (
    <pre className={`language-${lang}`}>
      <code className={`language-${lang}`}>{codeString}</code>
    </pre>
  );
};

export default CodeHighlight;
