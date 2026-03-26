import { useState } from "react"
import cycles from './assets/cycles.jpg';
import mythical from './assets/mythical.png';
import bakerGirl from './assets/bakergirl.JPG';
import poolside from './assets/poolside.JPG';

const releases = [
  {
    id: 1,
    title: "CYCLES EP",
    year: "2025",
    type: "EP",
    cover: cycles,
    url: "https://open.spotify.com/album/2oujPYx4IJxxNaoM075bKR?si=fy2SteXGQB6V51zZMnculQ",
    tracks: 5,
  },
  {
    id: 2,
    title: "MYTHICAL/PERSIAN EYES",
    year: "2025",
    type: "Single",
    cover: mythical,
    url: "https://open.spotify.com/album/6dNxU9gXCmIRlZejPKNJAm?si=qgIbOMOvRgSt40FqnYAzmw",
    tracks: 2,
  },
  {
    id: 3,
    title: "BAKER GIRL",
    year: "2023",
    type: "Album",
    cover: bakerGirl,
    url: "https://open.spotify.com/album/1eYJ2HxcC3ARpsd3gfcbHo?si=xpM2CjheSVa8M7zfRTGCLg",
    tracks: 9,
  },
  {
    id: 4,
    title: "POOLSIDE",
    year: "2023",
    type: "Single",
    cover: poolside,
    url: "https://open.spotify.com/album/459gkoLzipTL5UCMWxFxn9?si=3fZgYbsRTnyIuQMrlWDG1A",
    tracks: 1,
  },
]

const platforms = ["Spotify", "Apple Music", "SoundCloud", "Tidal", "YouTube Music"]

export default function Music() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="pt-11 min-h-screen text-center">

      <div className="border-b border-gray-200 px-6 py-3">
        <span className="text-xs tracking-widest uppercase text-gray-400">Music</span>
      </div>

      <div className="max-w-lg mx-auto">
        {releases.map((r) => (
          <a
            key={r.id}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border-b border-gray-200"
            onMouseEnter={() => setHovered(r.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative overflow-hidden">
              <img
                src={r.cover}
                alt={r.title}
                className="w-full object-cover transition-all duration-700 group-hover:scale-105"
                style={{
                  aspectRatio: "1/1",
                  filter: hovered === r.id ? "grayscale(0%)" : "grayscale(25%)",
                }}
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                style={{ opacity: hovered === r.id ? 1 : 0 }}
              >
                <div className="border border-black bg-white w-12 h-12 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="black" width="16" height="16">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 px-6 py-3 text-center">
              <div>
                <p className="text-xs text-gray-400 tracking-widest uppercase mb-1">
                  {r.type} {r.year}
                </p>
                <p className="text-sm">{r.title}</p>
              </div>
              <span
                className="text-gray-300 transition-all duration-200 text-lg"
                style={{ opacity: hovered === r.id ? 1 : 0.3 }}
              >
                &rsaquo;
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="max-w-lg mx-auto px-6 py-10">
        <p className="text-xs tracking-widest uppercase text-gray-300 mb-3">Available on</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {platforms.map((p) => (
            <span
              key={p}
              className="text-xs text-gray-400 hover:text-black transition-colors cursor-pointer"
            >
              {p}
            </span>
          ))}
        </div>
      </div>

    </div>
  )
}
