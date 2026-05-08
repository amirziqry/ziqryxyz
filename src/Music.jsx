import { useState } from "react"
import cycles from './assets/cycles.jpg';
import mythical from './assets/mythical.png';
import bakerGirl from './assets/bakergirl.JPG';
import poolside from './assets/poolside.JPG';
import newDimension from './assets/newdimension.JPG';
import saltSugar from './assets/saltsugar.JPG';
import lofi from './assets/lofi.JPG';
import sbs from './assets/sbs.JPG';
import metamemory from './assets/metamemory.JPG';
import pomegrenate from './assets/pomegrenate.jpg';
import andromeda from './assets/andromeda.JPG';
import certainDays from './assets/certaindays.JPG';

const releases = [
  {
    id: 1,
    title: "CYCLES",
    year: "2025",
    type: "EP",
    cover: cycles,
    url: "https://share.amuse.io/album/ziqry-cycles",
    tracks: 5,
  },
  {
    id: 2,
    title: "MYTHICAL/PERSIAN EYES",
    year: "2025",
    type: "Single",
    cover: mythical,
    url: "https://share.amuse.io/track/ziqry-mythical",
    tracks: 2,
  },
  {
    id: 3,
    title: "BAKER GIRL",
    year: "2023",
    type: "Album",
    cover: bakerGirl,
    url: "https://bfan.link/bakergirl",
    tracks: 9,
  },
  {
    id: 4,
    title: "POOLSIDE",
    year: "2023",
    type: "Single",
    cover: poolside,
    url: "https://share.amuse.io/track/ziqry-poolside",
    tracks: 1,
  },
  {
    id: 5,
    title: "NEW DIMENSION",
    year: "2022",
    type: "Album",
    cover: newDimension,
    url: "https://youtu.be/K2J79c54pZE?si=YFJewkCNwizmGSnM",
    tracks: 10,
  },
  {
    id: 6,
    title: "SALTSUGAR",
    year: "2022",
    type: "EP",
    cover: saltSugar,
    url: "https://youtube.com/playlist?list=PLMFRfWG5Y_3zlTv1nd5-1oLLO-Mb4jv-K&si=65asS4RFJMfwxeli",
    tracks: 4,
  },
  {
    id: 7,
    title: "BOREDOM TAPES : LOFI",
    year: "2022",
    type: "EP",
    cover: lofi,
    url: "https://soundcloud.com/user-23737436/sets/boredom-tapes-l0-fi?si=82dca8d8a08a4d6b84505562d67591b7&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    tracks: 4,
  },
  {
    id: 8,
    title: "SOME BEDROOM SONGS",
    year: "2022",
    type: "Album",
    cover: sbs,
    url: "https://soundcloud.com/user-23737436/sets/some-bedroom-songs?si=356fdb9cc3024e20a34a0ce3c3cc81d2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    tracks: 10,
  },
  {
    id: 9,
    title: "METAMEMORY",
    year: "2021",
    type: "EP",
    cover: metamemory,
    url: "https://soundcloud.com/user-23737436/sets/metamemory?si=117519c222084ca8a2e37b1542fe7397&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    tracks: 4,
  },
  {
    id: 10,
    title: "POMEGRANATE JUICE",
    year: "2021",
    type: "Album",
    cover: pomegrenate,
    url: "https://soundcloud.com/zqry/sets/pomegranate-juice?si=bdb7fc9a499a483194ab0a22aa0f9b97&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    tracks: 10,
  },
  {
    id: 11,
    title: "ANDROMEDA, SO CLOSE YET SO FAR",
    year: "2021",
    type: "Album",
    cover: andromeda,
    url: "https://soundcloud.com/zqry/sets/andromeda?si=f11cec2ae3f844be96c825befa3fa0b5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    tracks: 8,
  },
  {
    id: 12,
    title: "CERTAIN DAYS",
    year: "2020",
    type: "Album",
    cover: certainDays,
    url: "https://soundcloud.com/zqry/sets/project-3?si=425c7eec1aca4cbab029522e560f5d36&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    tracks: 10,
  }
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
