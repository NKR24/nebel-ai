<script lang="ts">
  import { availableLanguageTags, languageTag } from "$paraglide/runtime"
  import { i18n, type Language } from "../../utils/i18n.svelte"
  import { page } from "$app/stores"
  import { goto } from "$app/navigation"
  import cookies from "js-cookie"
  import { loadCyrillicFont } from "../../utils/css"

  function handleLanguageSwitch(event: Event) {
    // eslint-disable-next-line svelte/valid-compile
    const url = $page.url.pathname.replace(
      new RegExp(`/${availableLanguageTags.join("|")}`, "i"),
      ""
    )
    const lang = (event?.currentTarget as unknown as { value: Language })?.value

    if (lang === "ru") {
      loadCyrillicFont()
    }

    cookies.set("lang", lang)
    goto(i18n.resolveRoute(url, lang))
  }
</script>

<select value={languageTag()} onchange={handleLanguageSwitch}>
  {#each availableLanguageTags as language}
    <option value={language} selected={language === languageTag()}
      >{language}</option
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
    margin-right: 10px;
    position: absolute;
    right: 20px;
    top: 19px;
    border-radius: 5px;
    height: 40px;

    opacity: 1;
    color: rgba(255, 255, 255, 1);
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    text-decoration: underline;

    appearance: none;
    -webkit-appearance: none;

    @media (max-width: 768px) {
      right: 17px;
      top: 6px;
    }
  }
</style>
