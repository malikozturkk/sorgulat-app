import i18n, { InitOptions } from 'i18next'

import { default as i18config } from '../../next-i18next.config'

export const options: InitOptions = {
  fallbackLng: i18config.i18n.defaultLocale,
  supportedLngs: i18config.i18n.locales,
  load: 'languageOnly', // we only provide en, de -> no region specific locals like en-US, de-DE
  // have a common namespace used around the full app
  ns: ['common'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
    format: (value, format, lng) => {
      if (format === 'uppercase') return value.toUpperCase()
      return value
    },
  },
}

// for browser use http backend to load translations and browser lng detector
// if (process && !process.release) {
//   i18n.use(Backend).use(initReactI18next)
// }

// initialize if not already initialized
if (!i18n.isInitialized) {
  i18n.init(options)
}

export default i18n
