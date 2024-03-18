<script lang="ts">
  import { availableLanguageTags, languageTag } from "$paraglide/runtime"
  import { i18n, type Language } from "../../utils/i18n.svelte"
  import { page } from "$app/stores"
  import { goto } from "$app/navigation"
  import cookies from "js-cookie"
  import { loadCyrillicFont, loadJapaneseFont } from "../../utils/css"

  function handleLanguageSwitch(event: Event) {
    // eslint-disable-next-line svelte/valid-compile
    const url = $page.url.pathname.replace(
      new RegExp(`/${availableLanguageTags.join("|")}`, "i"),
      ""
    )
    const lang = (
      event?.currentTarget as unknown as { value: string }
    )?.value?.toLowerCase() as Language

    if (lang === "ru") {
      loadCyrillicFont()
    }

    if (lang === "jp") {
      loadJapaneseFont()
    }

    cookies.set("lang", lang)
    goto(i18n.resolveRoute(url, lang))
  }
</script>

<select value={languageTag().toUpperCase()} onchange={handleLanguageSwitch}>
  {#each availableLanguageTags as language}
    <option value={language.toUpperCase()} selected={language === languageTag()}
      >{language.toUpperCase()}</option
    >
  {/each}
</select>

<style lang="scss">
  option:hover {
    opacity: 0;
  }

  option {
    all: unset;
    color: white;
    padding: 20px;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    background-color: rgb(19, 22, 31);
  }

  select {
    all: unset;
    cursor: pointer;
    position: absolute;
    right: 20px;

    font-size: 24px;
    font-weight: 700;
  }
</style>
