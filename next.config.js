const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['cdn3.iconfinder.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}