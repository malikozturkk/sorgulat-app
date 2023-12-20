import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../../next-i18next.config";
import { ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";
import { createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "components/FrontendComponents/Header";
import { DefaultDesktopNavigationItems } from "components/FrontendComponents/Header/Header.data";
import SorgulatLogo from "../components/Icons/svg/sorgulat-logo.svg";
import Head from "next/head";

const GlobalStyles = createGlobalStyle`
html,
body {
    font-family: "Open Sans", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    margin: 0;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
  color: #363940;
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  console.log(pageProps, "pageProps geldi");
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=0, maximum-scale=1, minimum-scale=1, user-scalable=0"
        />
        <link rel="icon" type="image/x-icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
        <title>
          SORGULAT: En Avantajlı Teklifi Karşılaştır Sorgulat Enuygununu Bul
        </title>
        <meta property="og:title" content="sorgulat og title" />
        <meta name="description" content="sorgulat description" />
        <meta property="og:description" content="sorgulat og description" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header
            desktopNavigationItems={DefaultDesktopNavigationItems}
            logo={{
              url: "/",
              svg: <SorgulatLogo />,
            }}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
