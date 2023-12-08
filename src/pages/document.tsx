import React from "react";

import { i18n } from "next-i18next";
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      originalRenderPage({
        enhanceApp: (App) => (props) => {
          const Application = App as any;
          return sheet.collectStyles(<Application {...props} />);
        },
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
    const dir = i18n?.dir(i18n?.language) || "ltr";
    return (
      <Html lang="tr" dir={dir}>
        <Head>
          <style jsx global>
            {`
              html,
              body {
                font-family: "Open Sans", -apple-system, system-ui,
                  BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
                  Arial, sans-serif;
                margin: 0;
              }
            `}
          </style>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
            rel="stylesheet"
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
