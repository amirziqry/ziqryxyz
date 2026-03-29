import { useState, useEffect } from "react"
import heroImage from './assets/hero.jpg';
import music from './assets/music.JPG';
import kasahara from './assets/kasahara.JPG';
import StaticOverlay from "./components/StaticOverlay"

export default function Home({ navigate }) {
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const d = now.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit",
      })
      const t = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      setDate(d)
      setTime(t)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="pt-11">

      {/* Hero image — full width, fixed height */}
      <div className="w-full">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-auto block"
          style={{ filter: "grayscale(20%)" }}
        />
        <StaticOverlay opacity={0.15} />
      </div>

      {/* Date / time bar — blonded.co style */}
      <div className="border-b border-gray-200 px-6 py-3 flex items-center justify-center">
        <span className="text-xs tracking-widest text-gray-400 uppercase">
          {date}&nbsp;&nbsp;{time}
        </span>
      </div>

      {/* Content feed */}
      <div className="max-w-lg mx-auto px-6 py-10 space-y-16">

        {/* Music card */}
        <div
          className="cursor-pointer group"
          onClick={() => navigate("music")}
        >
          <div className="relative overflow-hidden mb-3">
            <img
              src={music}
              alt="Music"
              className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ filter: "saturate(0.7)" }}
            />
          </div>
          <div className="pt-11 text-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">Music</p>
              <p className="text-sm font-light">Latest releases</p>
            </div>
            <span className="text-lg mt-0.5 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all">›</span>
          </div>
        </div>

        {/* Kasahara card */}
        <div
          className="cursor-pointer group"
          onClick={() => navigate("kasahara")}
        >
          <div className="relative overflow-hidden mb-3">
            <img
              src={kasahara}
              alt="Kasahara"
              className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ filter: "saturate(0.7)" }}
            />
          </div>
          <div className="pt-11 text-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">Creative Agency</p>
              <p className="text-sm font-light">Kasahara</p>
            </div>
            <span className="text-lg mt-0.5 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all">›</span>
          </div>
        </div>

        {/* Social card */}
        <div
          className="cursor-pointer group"
          onClick={() => navigate("social")}
        >
          <div className="pt-11 text-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">Social</p>
              <p className="text-sm font-light">Instagram · YouTube · Soundcloud · Letterboxd . Spotify</p>
            </div>
            <span className="text-lg mt-0.5 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all">›</span>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 px-6 py-5 flex items-center justify-center gap-6">
        <span className="text-xs tracking-widest text-gray-300 uppercase">© {new Date().getFullYear()}</span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xs tracking-widest text-gray-300 uppercase hover:text-black transition-colors"
        >
          ↑ Top
        </button>
      </div>

    </div>
  )
}
