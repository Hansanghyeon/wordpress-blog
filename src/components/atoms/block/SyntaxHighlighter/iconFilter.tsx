export default function iconFilter(lang: string): string {
  let resultIcon = lang;
  switch (lang) {
    case undefined:
      break;
    case 'bash':
      resultIcon = 'console';
      break;
    case 'sql':
      resultIcon = 'database';
      break;
    case 'markup':
      resultIcon = 'html-1';
      break;
    case 'jsx':
      resultIcon = 'react';
      break;
    default:
      break;
  }
  return resultIcon;
}
