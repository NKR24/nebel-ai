import { post } from "../../utils/axios"
import type { ContactForm } from "../types/ContactForm"

export function postContactForm(form: ContactForm) {
  return post("/contact", form)
}
