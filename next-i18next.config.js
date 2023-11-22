/** @type {import('next-i18next').UserConfig} */
module.exports = {
    i18n: {
      defaultLocale: 'tr',
      locales: ['tr', 'en'],
    },
    fallbackLng: {
      default: ['tr'],
    },
    ns: ['common'],
    nonExplicitSupportedLngs: true,
  }
  