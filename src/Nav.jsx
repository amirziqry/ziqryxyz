import { useState } from "react"
import logo from "./assets/logo.png"

const links = [
  { id: "music", label: "MUSIC" },
  { id: "kasahara", label: "CREATIVE AGENCY" },
  { id: "social", label: "SOCIALS" },
]

export default function Nav({ current, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const go = (page) => {
    navigate(page)
    setMenuOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-11 flex items-center justify-between px-6">

        <button
          onClick={() => go("home")}
          className="flex items-center hover:opacity-50 transition-opacity"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-6 w-auto"
          />
        </button>

        <div className="hidden sm:flex items-center gap-8">
          {links.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={
                "text-xs tracking-widest uppercase transition-opacity " +
                (current === id ? "opacity-100" : "opacity-40 hover:opacity-100")
              }
            >
              {label}
            </button>
          ))}
        </div>

        <button
          className="sm:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className="block w-5 h-px bg-black transition-all duration-300"
            style={{ transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none" }}
          />
          <span
            className="block w-5 h-px bg-black transition-all duration-300"
            style={{ transform: menuOpen ? "translateY(-2px) rotate(-45deg)" : "none" }}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-start justify-end pb-16 px-6 sm:hidden">
          <button
            onClick={() => go("home")}
            className="mb-8 hover:opacity-40 transition-opacity"
          >
            <img src={logo} alt="Logo" className="h-6 w-auto" />
          </button>
          {links.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="text-3xl font-light tracking-tight mb-4 hover:opacity-40 transition-opacity"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}