export function windowTitle(title: string, subtitle?: string, separator = ' - ') {
  return title + (subtitle ? separator + subtitle : '');
}

export default windowTitle;