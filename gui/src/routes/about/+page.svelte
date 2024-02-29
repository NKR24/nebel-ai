<script>
  import { t } from "$lib/translations"
</script>

<svelte:head>
  <title>{$t("title.about")}</title>
  <meta name="description" content="About this app" />
</svelte:head>

<main>
  <h1 class="main">{$t("about.about")}</h1>
</main>
