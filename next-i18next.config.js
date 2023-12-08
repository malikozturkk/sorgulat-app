/** @type {import('next-i18next').UserConfig} */
module.exports = {
    i18n: {
      locales: ['tr', 'en'],
      defaultLocale: 'tr',
      localeDetection: false
    },
    fallbackLng: {
      default: ['tr'],
    },
    ns: ['common'],
    nonExplicitSupportedLngs: true,
  }
  