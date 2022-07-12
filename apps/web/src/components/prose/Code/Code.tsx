import { IWPGBlock } from 'react-gutenberg';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import parse, { domToReact } from 'html-react-parser';


const PreOption = {
  replace: domNode => {
    if (!('name' in domNode && 'attribs' in domNode)) return;
    const { name, attribs } = domNode;
    if (name === 'pre')
      return (
        <>{domToReact(domNode.children, CodeOption)}</>
      )
  }
}

const CodeOption = {
  replace: domNode => {
    if (!('name' in domNode && 'attribs' in domNode)) return;
    const { name, attribs } = domNode;
    if (name === 'code') {
      return (
        <SyntaxHighlighter language="javascript" style={atomOneDark} codeTagProps={{ className: 'font-code' }}>
          {domToReact(domNode.children)}
        </SyntaxHighlighter>
      )
    }
  }
}



const CodeBlock: React.FC<IWPGBlock> = (props) => {
  const {
    attrs,
    innerHTML } = props

  return (
    <>
      {parse(innerHTML, PreOption)}
    </>
  )
}

export default CodeBlock