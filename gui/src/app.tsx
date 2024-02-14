// @refresh reload
import { MetaProvider } from "@solidjs/meta"
import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start"
import { Suspense } from "solid-js"
import "./app.scss"
import Navbar from "~/components/Navbar/Navbar"
import { Starfield } from "~/components/Starfield/Starfield"

export default function App() {
  return (
    <>
      <Starfield />
      <Router
        root={(props) => (
          <MetaProvider>
            <Navbar />
            <Suspense>{props.children}</Suspense>
          </MetaProvider>
        )}
      >
        <FileRoutes />
      </Router>
    </>
  )
}
