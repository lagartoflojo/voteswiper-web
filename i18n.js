module.exports = {
  locales: ['de', 'en', 'sv', 'fr', 'fi', 'tr', 'ku', 'ru', 'ar', 'fa'],
  defaultLocale: 'en',
  rtlLocales: ['ar', 'fa'],
  pages: {
    '*': ['common', 'header', 'footer'],
    '/': ['home'],
    '/[country]': ['country'],
    '/404': ['error'],
    '/[country]/[election]': ['election'],
    '/embed/[country]/[election]': ['election'],
    '/preview/[country]/[election]': ['election'],
    '/[country]/[election]/[parties]': ['election'],
    '/page/press': ['press'],
    '/page/press/embed': ['press'],
    '/page/press/downloads': ['press'],
    '/page/press/releases': ['press'],
    '/page/press/releases/[slug]': ['press'],
    '/page/verein': ['org'],
    '/page/verein/satzung': ['org'],
    '/page/verein/spenden': ['org'],
    '/page/verein/mitglied-werden': ['org'],
    '/page/[page]': ['page'],
  },
};
