import { Title } from "@solidjs/meta"
import styles from "./index/index.module.scss"
import { Starfield } from "~/components/Starfield/Starfield"
import Navbar from "~/components/Navbar/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <main class={styles.page}>
        <Starfield />
        <Title>Nebel AI</Title>
        <h1 class={styles.title}>Welcome to Nebel.</h1>
        <div class={styles.container}>
          <button class={styles.button}>
            <span>Contact Us</span>
          </button>
        </div>
      </main>
    </>
  )
}
