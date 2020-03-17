import './src/views/styles/main.scss';

import('prism-themes/themes/prism-dracula.css');
import wrapWithProvider from '@src/stores/rootProvider';
export const wrapRootElement = wrapWithProvider;
