<script lang="ts">
  import PageWrapper from "../../components/PageWrapper/PageWrapper.svelte"
  import { t } from "../../utils/i18n.svelte"
  import styleHelpers from "$utils/helpers.module.scss"
  import gojover from "$img/gojover.jpg?enhanced"
</script>

<svelte:head>
  <title>{t.navbar$about()}</title>
</svelte:head>

<PageWrapper title={t.about$about()} maxWidth="80ch">
  <h1 class={styleHelpers.title}>{t.about$heading()}</h1>
  <enhanced:img src={gojover} alt="Gojover" sizes="min(300px, 100%)" />
  <p>{t.about$message()}</p>
</PageWrapper>

<style>
</style>
