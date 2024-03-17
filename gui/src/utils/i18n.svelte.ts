import { createI18n } from "@inlang/paraglide-js-adapter-sveltekit"
import * as runtime from "$paraglide/runtime"
import * as messages from "$paraglide/messages"

export const i18n = createI18n(runtime)
export const t = messages

export type Language = (typeof runtime.availableLanguageTags)[number]
