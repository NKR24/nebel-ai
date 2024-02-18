<script lang="ts">
  import { contact } from "../api/queries/contact"
  import Modal from "../components/Modal/Modal.svelte"
  let showContactForm = $state(false)

  function toggleContactForm() {
    showContactForm = !showContactForm
  }

  let name: string = $state("")
  let email: string = $state("")
  let message: string = $state("")

  function handleContactFormSubmit(event: Event) {
    event.preventDefault()
    toggleContactForm()
    contact({ name, email, message })
  }
</script>

<main class="page">
  <h1 class="title">Welcome to Nebel.</h1>
  <h2 class="subtitle">Easy Solutions for Your Business and Personal Needs</h2>
  <button class="contactButton" onclick={toggleContactForm}>
    Contact Us
  </button>
  <Modal isOpen={showContactForm} onClickAway={toggleContactForm}>
    <div class="modalText">
      <form onsubmit={handleContactFormSubmit} class="contactForm">
        <input
          class="input"
          placeholder="Name *"
          type="text"
          name="name"
          bind:value={name}
          required
        />
        <input
          class="input"
          placeholder="E-Mail *"
          type="email"
          name="email"
          bind:value={email}
          required
        />
        <textarea
          class="textarea"
          placeholder="Message *"
          name="message"
          bind:value={message}
          required
        />
        <div class="contactFormButtons">
          <button type="submit" class="submitButton"> Submit </button>
        </div>
      </form>
    </div>
  </Modal>
</main>

<style lang="scss">
  .contactForm {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    gap: 8px;
  }

  .input-valitation {
    box-sizing: border-box;
    $border-size: 0.25px;
    outline: $border-size solid #151b25;

    &:user-invalid {
      outline: $border-size solid #c85a5a;
    }

    &:user-valid {
      outline: $border-size solid #7eab7e;
    }
  }
  .input {
    @extend .input-valitation;

    padding: 12px 20px;
    display: inline-block;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 300;
    background-color: #151b25;
    color: white;
  }

  .textarea {
    @extend .input-valitation;

    padding: 12px 20px;
    display: inline-block;
    box-sizing: border-box;
    height: 150px;
    font-size: 16px;
    background-color: #171b24;

    @media (min-width: 768px) {
      width: 400px;
    }
  }

  .contactFormButtons {
    display: flex;
    width: 100%;
    gap: 8px;
    padding-top: 8px;
  }

  .contactFormButton {
    color: white;
    padding: 14px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    flex: 1;
    transition: all 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }

    &:active {
      filter: brightness(0.8);
    }
  }

  .submitButton {
    @extend .contactFormButton;

    max-width: 50px;
    background-image: linear-gradient(-75deg, #775be2 25%, #ce59b6 65%);
    background-image: -webkit-linear-gradient(-75deg, #775be2 25%, #ce59b6 65%);
  }

  .page {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .navbar {
    width: 7.92vw;
    height: 3.18vw;
  }

  .navbar:hover {
    transform: scale(1.1);
  }

  .contactButton {
    z-index: 3;
    margin-top: 34px;
    border-radius: 7px;
    opacity: 1;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    width: 134px;
    height: 62px;

    color: rgba(0, 0, 0, 1);
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(1.04);
      filter: brightness(0.7);
    }

    @media (max-width: 768px) {
      position: fixed;
      bottom: 82px;
      right: 15px;
      width: 99px;
      height: 39px;
      font-size: 15px;
    }
  }

  .subtitle {
    opacity: 1;
    color: rgba(255, 255, 255, 1);
    font-weight: 300;
    text-align: center;

    font-size: clamp(
      1.147321025468409rem,
      calc(
        1.057321025468409rem +
          (
            (4.449725439999998 - 3.747321025468409) *
              ((100vw - 20rem) / (96 - 20))
          )
      ),
      2.449725439999998rem
    );

    @media (max-width: 768px) {
      font-size: 15px;
      width: 205px;
    }
  }

  .title {
    // font color
    color: #775be2;
    background-image: linear-gradient(-75deg, #775be2 25%, #ce59b6 65%);
    background-image: -webkit-linear-gradient(-75deg, #775be2 25%, #ce59b6 65%);
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    font-weight: 900;

    // glow effect
    filter: drop-shadow(0px 0px 80px rgba(206, 89, 182, 0.4));

    // font size
    font-size: clamp(
      3.247321025468409rem,
      calc(
        3.247321025468409rem +
          (
            (6.449725439999998 - 3.247321025468409) *
              ((100vw - 20rem) / (96 - 20))
          )
      ),
      6.449725439999998rem
    );

    @media (max-width: 768px) {
      font-size: clamp(
        2.247321025468409rem,
        calc(
          2.247321025468409rem +
            (
              (4.449725439999998 - 2.247321025468409) *
                ((100vw - 20rem) / (96 - 20))
            )
        ),
        4.449725439999998rem
      );
    }
  }
</style>
