import { availableLanguageTags } from "$paraglide/runtime"
import { redirect, type ServerLoad } from "@sveltejs/kit"
import { i18n, type Language } from "../utils/i18n.svelte"

export const load: ServerLoad = ({ url, cookies }) => {
  const pathname = url.pathname
  const pathnameWithoutLanguageTag = url.pathname.replace(
    new RegExp(`/${availableLanguageTags.join("|")}`, "i"),
    ""
  )
  const openingPageWithoutSpecifyingLanguage =
    pathname === pathnameWithoutLanguageTag
  const lang = cookies.get("lang") as Language | undefined

  if (openingPageWithoutSpecifyingLanguage && lang && lang !== "en") {
    const newUrlWithLanguageTag = i18n.resolveRoute(
      pathnameWithoutLanguageTag,
      lang
    )

    redirect(302, newUrlWithLanguageTag)
  }
}
