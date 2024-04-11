<script lang="ts">
  import { availableLanguageTags, languageTag } from "$paraglide/runtime"
  import { i18n, type Language } from "../../utils/i18n.svelte"
  import { page } from "$app/stores"
  import { goto } from "$app/navigation"
  import cookies from "js-cookie"
  import { loadCyrillicFont, loadJapaneseFont } from "../../utils/css"
  import { Select, type Selected } from "bits-ui"
  import styles from "./LanguageSwitcher.module.scss"
  import Check from "../Icons/Check.svelte"
  import { fade } from "svelte/transition"

  function handleLanguageSwitch(selected: Selected<string> | undefined) {
    // eslint-disable-next-line svelte/valid-compile
    const url = $page.url.pathname.replace(
      new RegExp(`/${availableLanguageTags.join("|")}`, "i"),
      ""
    )

    const lang = selected?.value.toLowerCase() as Language

    if (lang === "ru") {
      loadCyrillicFont()
    }

    if (lang === "ja") {
      loadJapaneseFont()
    }

    cookies.set("lang", lang)
    goto(i18n.resolveRoute(url, lang))
  }

  const availableLanguageItems = availableLanguageTags
    .filter((elem) => elem !== languageTag())
    .map((elem) => ({
      value: elem.toUpperCase(),
    }))
</script>

<div class={styles.select}>
  <Select.Root
    items={availableLanguageItems}
    selected={{ value: languageTag().toUpperCase() }}
    onSelectedChange={handleLanguageSwitch}
    preventScroll={false}
  >
    <Select.Trigger>
      <Select.Value placeholder={languageTag().toUpperCase()} />
    </Select.Trigger>

    <Select.Content
      class={styles.content}
      overlap={true}
      transition={fade}
      transitionConfig={{ duration: 150 }}
    >
      {#each availableLanguageItems as language}
        <Select.Item
          class={styles.item}
          value={language.value}
          label={language.value}
        >
          {language.value}
          <Select.ItemIndicator class={styles.itemIndicator} asChild={false}>
            <Check />
          </Select.ItemIndicator>
        </Select.Item>
      {/each}
    </Select.Content>
  </Select.Root>
</div>

<style lang="scss">
</style>
