import { IWPGBlock } from 'react-gutenberg';

const ParagraphBlock: React.FC<IWPGBlock> = (props) => {
  const {
    // attrs,
    innerHTML,
  } = props!;

  return (
    <div
      className="custom-paragraph"
      dangerouslySetInnerHTML={{ __html: innerHTML }}
    />
  );
};

export default ParagraphBlock;
