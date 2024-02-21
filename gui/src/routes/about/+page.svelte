<script>
  import { page } from "$app/stores"
  import { goto } from "$app/navigation"
  import { t, locale, locales } from "$lib/translations"
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<main>
  <h1 class="main">{$t("about.about")}</h1>
</main>
