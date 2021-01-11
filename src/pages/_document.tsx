import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class _Document extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const GoogleFonts = [
      'Cookie',
      'Noto+Sans+KR:wght@100;300;400;500;700;900',
      'Fira+Code:wght@300;400;500;600;700',
      'Nanum+Gothic:wght@400;700;800',
      'Noto+Sans:ital,wght@0,400;0,700;1,400;1,700',
    ];

    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href={`https://fonts.googleapis.com/css2?${GoogleFonts.map(
              (font) => `family=${font}&`,
            ).join('')}display=swap`}
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/joungkyun/font-d2coding/d2coding.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _Document;
