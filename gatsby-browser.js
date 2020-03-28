import './src/views/styles/style.scss';

import('prism-themes/themes/prism-dracula.css');
import wrapWithProvider from '@src/stores/rootProvider';
export const wrapRootElement = wrapWithProvider;
