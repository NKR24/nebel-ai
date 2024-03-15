<script>
  import Navbar from "../components/Navbar/Navbar.svelte"
  import Starfield from "../components/Starfield/Starfield.svelte"
  import { ParaglideJS } from "@inlang/paraglide-js-adapter-sveltekit"
  import { i18n } from "../utils/i18n.svelte"
</script>

<Starfield />

<ParaglideJS {i18n}>
  <Navbar />
  <slot />
</ParaglideJS>

<style>
  :global(body) {
    font-family: "specter", sans-serif;
    font-weight: 300;
    color: white;
  }

  :global(button, input, textarea) {
    all: unset;
  }

  :global(button) {
    cursor: pointer !important;
  }

  :global(html, body, #app) {
    height: 100%;
    margin: 0;
  }

  :global(html) {
    background: #0c0e14 radial-gradient(#111921 0%, #090a0f 100%);
  }

  :global(h1, h2) {
    margin: 0;
  }
</style>
