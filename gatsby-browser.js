import('prismjs/plugins/line-numbers/prism-line-numbers.css');
import('prismjs/plugins/command-line/prism-command-line.css');
import './src/styles/main.scss';

import(`prism-themes/themes/${window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'prism-dracula' : 'prism-material-light'}.css`);