import styles from "./Navbar.module.scss"
import { A } from "@solidjs/router"

export default function Navbar() {
  return (
    <nav class={styles.nav}>
      <div class={styles.container}>
        <Logo />
        <Pages />
      </div>
    </nav>
  )
}

function Logo() {
  return (
    <div class={styles.logo}>
      <A href="/">
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
      </A>
    </div>
  )
}

function Pages() {
  return (
    <div class={styles.pages}>
      <A href="/about">
        <span class={styles.text}>About</span>
      </A>
      <A href="/portfolio">
        <span class={styles.text}>Portfolio</span>
      </A>
    </div>
  )
}
