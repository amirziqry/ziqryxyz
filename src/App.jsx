import { useState } from "react"
import Nav from "./Nav"
import Home from "./Home"
import Music from "./Music"
import Kasahara from "./Kasahara"
import Social from "./Social"

export default function App() {
  const [page, setPage] = useState("home")
  const [fading, setFading] = useState(false)

  const navigate = (target) => {
    if (target === page) return
    setFading(true)
    setTimeout(() => {
      setPage(target)
      setFading(false)
      window.scrollTo(0, 0)
    }, 250)
  }

  const pages = { home: Home, music: Music, kasahara: Kasahara, social: Social }
  const Page = pages[page]

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Nav current={page} navigate={navigate} />
      <div
        style={{
          opacity: fading ? 0 : 1,
          transition: "opacity 0.25s ease",
        }}
      >
        <Page navigate={navigate} />
      </div>
    </div>
  )
}