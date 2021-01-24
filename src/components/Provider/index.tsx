import { useEffect, useState } from 'react';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
// style
import Grid from '@style/Grid';
import { darkTheme, lightTheme } from '@style/Themes';
import GlobalStyle from '@style/GlobalStyle';

export default function Providers({ children }: any) {
  const { value } = useDarkMode(false, {
    storageKey: undefined,
    onChange: undefined,
  });
  const theme = value ? darkTheme : lightTheme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GridThemeProvider gridTheme={Grid}>
        <>{children}</>
      </GridThemeProvider>
    </ThemeProvider>
  );

  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }

  return body;
}
