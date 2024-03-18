<script lang="ts">
  import PageWrapper from "../../components/PageWrapper/PageWrapper.svelte"
  import { t } from "../../utils/i18n.svelte"
  import styleHelpers from "$utils/helpers.module.scss"
  import nahIdLive from "$img/nahIdLive.png.webp"
  import sadRuby from "$img/sadRuby.gif"
</script>

<PageWrapper title={t.portfolio$portfolio()} maxWidth="80ch">
  <h1 class={styleHelpers.title}>{t.portfolio$heading()}</h1>
  <img src={nahIdLive} alt="Gojover" class="gojover" />
  <p>{t.portfolio$message()}</p>
  <img src={sadRuby} alt="Sad Ruby" class="sadRuby" />
</PageWrapper>

<style>
  .gojover {
    max-width: 95%;
    padding-top: 16px;
    height: unset;
  }

  .sadRuby {
    max-width: 150px;
  }
</style>
