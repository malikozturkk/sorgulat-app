const { loadEnvConfig } = require('@next/env')
const Backend = require('i18next-fs-backend')
const { initReactI18next } = require('react-i18next')

const { options, default: i18n } = require('./dist/utils/i18n')

const projectDir = process.cwd()
loadEnvConfig(projectDir)

i18n
  .use(Backend)
  .use(lngDetector)
  .use(initReactI18next)
  .init(
    {
      ...options,
      detection: {
        lookupHeader: 'language',
        order: ['customHeaderLookup', 'querystring', 'header', 'cookie'],
      },
      preload: ['tr', 'en'],
      ns: ['common'],
      defaultNS: 'common',
      backend: {
        loadPath: `${appSrc}/locales/{{lng}}/{{ns}}.json`,
        addPath: `${appSrc}/locales/{{lng}}/{{ns}}.missing.json`,
      },
    },
    HandleServer
  )