<script lang="ts">
  import PageWrapper from "../../components/PageWrapper/PageWrapper.svelte"
  import { t } from "../../utils/i18n.svelte"
  import styleHelpers from "$utils/helpers.module.scss"
  import nahIdLive from "$img/nahIdLive.png.webp"
  import sadRuby from "$img/sadRuby.gif"
  import hbhLogo from "$img/hbh.png.webp"
</script>

<PageWrapper title={t.portfolio$portfolio()} maxWidth="80ch">
  <h1 class={styleHelpers.title}>{t.portfolio$heading()}</h1>
  <img src={nahIdLive} alt="Strongest idol" class="nahIdLive" />

  <div class="card">
    <h1 class={styleHelpers.title}>{t.portfolio$hbhHeading()}</h1>
    <a href="https://hbh.nebel.ai">
      <img src={hbhLogo} alt="Strongest idol" class="nahIdLive" />
    </a>
  </div>

  <p>{t.portfolio$message()}</p>
  <img src={sadRuby} alt="Sad Ruby" class="sadRuby" />
</PageWrapper>

<style>
  .card {
    margin-top: 50px;
  }

  .nahIdLive {
    max-width: 95%;
    padding-top: 16px;
    height: unset;
  }

  .sadRuby {
    max-width: 150px;
  }
</style>
