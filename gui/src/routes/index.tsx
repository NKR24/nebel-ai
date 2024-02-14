import { Title } from "@solidjs/meta"
import styles from "./index/index.module.scss"
import { Starfield } from "~/components/Starfield/Starfield"
import Navbar from "~/components/Navbar/Navbar"
import { createSignal } from "solid-js"
import { Modal } from "~/components/Modal/Modal"
import { postContactForm } from "~/routes/index/queries"

export default function Home() {
  const [showContactForm, setShowContactForm] = createSignal(false)
  const [emailInputValue, setEmailInputValue] = createSignal("")
  const [nameInputValue, setNameInputValue] = createSignal("")
  const [commentaryInputValue, setCommentaryInputValue] = createSignal("")

  return (
    <>
      <main class={styles.page}>
        <Navbar />
        <Starfield />
        <Title>Nebel AI</Title>
        <h1 class={styles.title}>Welcome to Nebel.</h1>
        <h2 class={styles.lowTitle}>Easy Solutions for Your Business and Personal Needs </h2>
        <button onClick={() => setShowContactForm(!showContactForm())} class={styles.button}>
          <span>Contact Us</span>
        </button>
        <Modal isOpen={showContactForm()}>
          <input
            type="email"
            name="email"
            placeholder="Введите email"
            onInput={(event) => setEmailInputValue(event.currentTarget.value)}
          />
          <input
            type="text"
            name="name"
            placeholder="Введите имя"
            onInput={(event) => setNameInputValue(event.currentTarget.value)}
          />
          <textarea
            name="comment"
            rows="4"
            cols="50"
            placeholder="Комментарий"
            onInput={(event) => setCommentaryInputValue(event.currentTarget.value)}
          />
          <button
            onClick={() => {
              setShowContactForm(false)
              postContactForm({
                email: emailInputValue(),
                name: nameInputValue(),
                commentary: commentaryInputValue(),
              })
            }}
          >
            submit
          </button>
        </Modal>
      </main>
    </>
  )
}
