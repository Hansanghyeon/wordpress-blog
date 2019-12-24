import(`prism-themes/themes/${window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'prism-dracula' : 'prism-material-light'}.css`);
import('./src/styles/useDarkMode.css');
import './src/styles/main.scss';
