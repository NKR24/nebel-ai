export default {
  defaultLocale: "en",
  locales: ["en", "ru", "de"],
  loadLocaleFrom: (locale, namespace) =>
    import(`./locales/${locale}/${namespace}.json`),
}
