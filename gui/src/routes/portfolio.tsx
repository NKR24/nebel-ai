import { Title } from "@solidjs/meta"
import Navbar from "~/components/Navbar/Navbar"
import { Starfield } from "~/components/Starfield/Starfield"

export default function Home(){
  return(
    <>
      <Navbar/>
      <main>
        <Title>Portfolio</Title>
        <Starfield/>
        <h1>Portfolio</h1>
      </main>
    </>
  )
}