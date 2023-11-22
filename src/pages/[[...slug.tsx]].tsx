import { PAGE_MAP, RenderPage, SupportedLanguages } from "../utils/pages";
import React, { FC } from "react";
import { match, pathToRegexp } from "path-to-regexp";

import { GetServerSideProps } from "next";
import getConfig from "next/config";
import { default as nextI18nextConfig } from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withTheme } from "styled-components";
import { useRouter } from "next/router";

const { publicRuntimeConfig } = getConfig();
const processEnv = publicRuntimeConfig?.processEnv || {};

interface ISorgulat {
  page: keyof typeof PAGE_MAP;
}

const Sorgulat: FC<ISorgulat> = ({ page, ...props }) => {
  const Locale = useRouter().locale;
  const Comp = RenderPage(page, Locale) as any;
  return <Comp {...props} />;
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  resolvedUrl,
  locale,
}) => {
  if (resolvedUrl.includes("/_next/") || resolvedUrl.includes("/static/"))
    return { props: {} };

  const $URL = resolvedUrl;
  const getURL = $URL
    .split(`/`)
    .filter(Boolean)
    .filter((l) => !SupportedLanguages.includes(l));

  const _url = `/${getURL.join("/")}`;

  const $finalURL = new URL(_url, `https://${req.headers.host}`);
  const $PagePath = Object.values(PAGE_MAP[locale] || PAGE_MAP["tr"]).find(
    (item) => {
      // @ts-ignore
      return pathToRegexp(item).exec($finalURL.pathname);
    }
  );
  if (!$PagePath) {
    return {
      notFound: true,
      props: {
        locale: locale,
        host: req.headers.host,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ["common"],
        nextI18nextConfig as any
      )),
      page: $PagePath,
      locale: locale,
      cookies: req.headers["cookie"] || req.cookies || req.headers["x-cookie"],
      resolvedUrl,
    },
  };
};

export default withTheme(Sorgulat);
