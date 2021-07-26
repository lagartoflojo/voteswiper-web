module.exports = {
  locales: ['de', 'en', 'sv', 'fr', 'fi', /*'tr', 'ru', 'ar', 'fa'*/],
  defaultLocale: 'en',
  rtlLocales: ['ar', 'fa'],
  pages: {
    '*': ['common', 'header', 'footer'],
    '/': ['home'],
    '/[country]': ['country'],
    '/404': ['error'],
    '/[country]/[election]': ['election'],
    '/embed/[country]/[election]': ['election'],
    '/[country]/[election]/[parties]': ['election'],
    '/page/[page]': ['page'],
  },
};
