import { Title } from "@solidjs/meta";
import Navbar from "~/components/Navbar/Navbar"
import { Starfield } from "~/components/Starfield/Starfield"

export default function Home() {
  return (
    <main>
      <Title>About</Title>
      <Navbar/>
      <Starfield/>
      <h1>About</h1>
    </main>
  );
}
