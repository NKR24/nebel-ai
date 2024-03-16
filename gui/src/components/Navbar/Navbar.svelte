<script lang="ts">
  import { route } from "../../consts"
  import { t } from "../../utils/i18n.svelte"
  import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher.svelte"
</script>

<nav class="navbar-container">
  <div class="navbar">
    <div class="logo">
      <a href={route.root}>
        <svg
          width="40"
          height="38"
          viewBox="0 0 40 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.6082 23.528L13.7162 38H0.702172V0.199997H14.3642L24.4622 14.348L26.4602 17.21L26.4062 14.348L26.2982 0.199997H39.3122V38H25.4882L15.0122 23.366L13.5542 21.26L13.6082 23.528Z"
            fill="white"
          />
        </svg>
      </a>
    </div>
    <div class="pages">
      <a href={route.about}>
        <span class="text">{t.navbar$about()}</span>
      </a>
      <a href={route.portfolio}>
        <span class="text">{t.navbar$portfolio()}</span>
      </a>
    </div>
    <LanguageSwitcher />
  </div>
</nav>

<style lang="scss">
  .navbar-container {
    padding: 42px 58px 0;
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;

    @media (max-width: 768px) {
      padding: 10px 15px 12px 12px;
      position: fixed;
      bottom: 0;
    }
  }

  .navbar {
    position: relative;
    height: 76px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 13px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    background-color: rgb(19, 22, 31);

    @media (max-width: 768px) {
      height: 50px;
    }
  }

  .logo {
    position: absolute;
    left: 20px;
    top: 19px;
    transition: all 0.2s ease-in-out;

    @media (max-width: 768px) {
      left: 17px;
      top: 0;
    }

    &:hover {
      transform: scale(1.07);
    }

    &:active {
      transform: scale(1.04);
      filter: brightness(0.7);
    }
  }

  .logo svg {
    @media (max-width: 768px) {
      width: 30px;
      height: 50px;
    }
  }

  .pages {
    position: absolute;
    z-index: 10;
    display: flex;
    column-gap: 17px;

    @media (max-width: 768px) {
      position: absolute;
      column-gap: 13px;
    }
  }

  .text {
    opacity: 1;
    color: rgba(255, 255, 255, 1);
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    text-decoration: underline;

    @media (max-width: 768px) {
      opacity: 1;
      color: rgba(255, 255, 255, 1);
      font-size: 16px;
      font-weight: 700;
      text-align: center;
      text-decoration: underline;
    }
  }
</style>
