import { Title } from "@solidjs/meta"
import styles from "./index/index.module.scss"
import { Starfield } from "~/components/Starfield/Starfield"

export default function Home() {
  return (
    <main class={styles.page}>
      <Starfield />
      <Title>Nebel AI</Title>
      <h1 class={styles.title}>Welcome to Nebel.</h1>
    </main>
  )
}
