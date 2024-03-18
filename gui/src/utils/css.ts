export function loadCyrillicFont() {
  addCss(
    "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
  )
}

export function loadJapaneseFont() {
  addCss(
    "https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@100..900&display=swap"
  )
}

function addCss(url: string) {
  const head = document.head
  const link = document.createElement("link")

  link.type = "text/css"
  link.rel = "stylesheet"
  link.href = url

  head.appendChild(link)
}
