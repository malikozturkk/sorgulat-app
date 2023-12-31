/** @type {import('next-i18next').UserConfig} */
module.exports = {
  fallbackLng: 'tr',
  supportedLngs: ['tr', 'en'],
  load: 'languageOnly',
  ns: ['common'],
  nonExplicitSupportedLngs: true,
  defaultNS: 'common',
  i18n: {
    locales: ['tr', 'en'],
    defaultLocale: 'tr',
    localeDetection: false
  },
  fallbackLng: {
    default: ['tr'],
  },
  
}
