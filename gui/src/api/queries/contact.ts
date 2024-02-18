import { post } from "../../utils/axios"
import type { ContactForm } from "../types/ContactForm"

export function contact(form: ContactForm) {
  return post("/contact", form)
}
