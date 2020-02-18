import React from 'react';
import Callout from './index';

export default {
  title: 'molecules|Callout',
  component: Callout,
};

const mockData = {
  text: `Culpa ullamco sit officia sunt duis et minim sit laboris cupidatat sunt officia eiusmod eiusmod. Sint voluptate nisi adipisicing culpa incididunt magna. Laboris exercitation consequat labore dolore proident laborum duis eiusmod eiusmod dolore in. Eiusmod velit laborum labore laborum officia sint amet ex reprehenderit anim id deserunt reprehenderit incididunt. Excepteur irure fugiat ex proident exercitation veniam incididunt in incididunt ut anim. Laboris laboris nisi sint magna.`,
};

export const standard = () => <Callout icon="👍">{mockData.text}</Callout>;
