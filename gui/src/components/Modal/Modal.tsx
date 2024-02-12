import { ParentProps, Show } from "solid-js"
import styles from "./Modal.module.scss"

type Props = ParentProps<{
  isOpen: boolean
}>

export function Modal(props: Props) {
  return (
    <Show when={props.isOpen}>
      <div class={styles.container}>
        {props.children}
      </div>
    </Show>
  )
}