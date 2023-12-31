  module.exports = {
  i18n: {
    locales: ['tr', 'en'],
    defaultLocale: 'tr',
    localeDetection: false,
  },
  serializeConfig: false,
  lowerCaseLng: true,
  fallbackLng: (code) => {
    const fallbacks = []
    fallbacks.push(code)
    return fallbacks
  },
}