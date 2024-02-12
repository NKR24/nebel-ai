import { Title } from "@solidjs/meta"
import styles from "./index/index.module.scss"
import { Starfield } from "~/components/Starfield/Starfield"
import Navbar from "~/components/Navbar/Navbar"

export default function Home() {
  return (
    <>
      <main class={styles.page}>
        <Navbar />
        <Starfield />
        <Title>Nebel AI</Title>
        <h1 class={styles.title}>Welcome to Nebel.</h1>
        <h2 class={styles.lowTitle}>Easy Solutions for Your Business and Personal Needs </h2>
        <button class={styles.button}>
          <span>Contact Us</span>
        </button>
      </main>
    </>
  )
}
