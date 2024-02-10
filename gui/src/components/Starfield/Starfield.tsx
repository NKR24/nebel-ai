import styles from "./Starfield.module.scss"

export function Starfield() {
  return (
    <div class={styles.starfield}>
      <div class={styles.stars} />
      <div class={styles.stars1} />
      <div class={styles.stars2} />
      <div class={styles.stars3} />
    </div>
  )
}
