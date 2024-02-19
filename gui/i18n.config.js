export default {
  defaultLocale: "en",
  locales: ["en", "ru"],
  loadLocaleFrom: (locale, namespace) =>
    import(`./locales/${locale}/${namespace}.json`),
}
