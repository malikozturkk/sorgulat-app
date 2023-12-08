import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../../next-i18next.config";
import { ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";
import { createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

const GlobalStyles = createGlobalStyle`
html,
body {
    font-family: "Open Sans", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    margin: 0;
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
