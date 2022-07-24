/* eslint-disable import/no-named-default */
import { default as OriginalWPGBlocks } from 'react-gutenberg';
import { parse } from '@wordpress/block-serialization-default-parser';
import loadable from '@loadable/component';

const Paragraph = loadable(
  () => import('~web/components/prose/Paragraph/Paragraph'),
);
const Code = loadable(() => import('~web/components/prose/Code/Code'));

function GetCustomBlock(name: string) {
  switch (name) {
    case 'core/code':
      return Code;
    case 'core/paragraph':
      return Paragraph;
    default:
      return null;
  }
}

export default function WPGBlocks({ blocks }: any) {
  return (
    <OriginalWPGBlocks
      blocks={parse(blocks ?? '')}
      mapToBlock={GetCustomBlock}
    />
  );
}
