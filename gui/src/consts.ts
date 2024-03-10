export const API_URL = import.meta.env.DEV
  ? "http://localhost:3021"
  : "https://api.nebel.ai"

export const route = {
  root: "/",
  about: "/about",
  portfolio: "/portfolio",
}
