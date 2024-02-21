import { addTranslations, setLocale, setRoute } from "$lib/translations"

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ data }) => {
  if (data && "i18n" in data) {
    const { i18n, translations } = data
    const { locale, route } = i18n

    addTranslations(translations)

    await setRoute(route)
    await setLocale(locale)

    return i18n
  } else {
    throw new Error("Data does not contain i18n information")
  }
}
