const { i18n } = require('./next-i18next.config')
const { loadEnvConfig } = require('@next/env')

const projectDir = process.cwd()
loadEnvConfig(projectDir)

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  i18n,
  trailingSlash: true,
  generateEtags: false,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  compress: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}