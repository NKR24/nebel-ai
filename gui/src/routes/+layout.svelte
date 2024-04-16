<script>
  import Navbar from "../components/Navbar/Navbar.svelte"
  import Toaster from "../components/Toaster/Toaster.svelte"
  import { ParaglideJS } from "@inlang/paraglide-js-adapter-sveltekit"
  import { i18n } from "../utils/i18n.svelte"
  import { languageTag } from "$paraglide/runtime"
  import { loadCyrillicFont, loadJapaneseFont } from "../utils/css"
  import "../app.scss"
  import Starfield from "../components/Starfield/Starfield.svelte"

  $effect(() => {
    if (languageTag() === "ru") {
      loadCyrillicFont()
    }

    if (languageTag() === "ja") {
      loadJapaneseFont()
    }
  })
</script>

<Starfield />

<ParaglideJS {i18n}>
  <Navbar />
  <Toaster />
  <slot />
</ParaglideJS>
