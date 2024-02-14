import { post } from "~/utils/axios"
import { doNothing } from "~/utils/doNothing"

export type ContactFormData = {
  email: string
  name: string
  commentary: string
}

export function postContactForm(data: ContactFormData) {
  post("/contact", data).then(doNothing)
}
