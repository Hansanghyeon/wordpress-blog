/* eslint-disable react/no-danger */
import React from 'react';
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
  const codeString = result && result[2];
  const __html = Prism.highlight(codeString, Prism.languages[lang], lang);
  if (__html) {
    return (
      <pre className={`language-${lang}`}>
        <code className={`language-${lang}`}>
          <div dangerouslySetInnerHTML={{ __html: __html }} />
        </code>
      </pre>
    );
  }
  return <div>test</div>;
};

export default CodeHighlight;
