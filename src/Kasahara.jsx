import kasaharaLogo from "./assets/kasahara-logo.png"
import banner from "./assets/banner1.PNG"
import graphic1 from "./assets/graphic1.PNG"
import graphic2 from "./assets/graphic2.PNG"
import graphic3 from "./assets/graphic3.PNG"
import graphic4 from "./assets/graphic4.PNG"
import { useEffect, useRef } from "react"
import photo1 from "./assets/photo1.JPG"
import photo2 from "./assets/photo2.JPG"
import photo3 from "./assets/photo3.jpg"
import StaticOverlay from "./components/StaticOverlay"
import undefinedFilm from "./assets/undefined.mp4"

const photos = [photo1, photo2, photo3]

const tags = ["Creative Direction", "Product Development", "Graphic Design", "Filmmaking", "Video Editing", "Photography", "Logistics", "Social Media", "Copywriting", "Sales", "Customer Service", "Finance", "Web Development"]

function FadeInImage({ src, alt, style = {}, className = "" }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1"
          el.style.transform = "translateY(0)"
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        ...style,
      }}
    />
  )
}

export default function Kasahara() {
  return (
    <div className="pt-11 min-h-screen text-center">

      <div className="border-b border-gray-200 px-6 py-3">
        <span className="text-xs tracking-widest uppercase text-gray-400">Kasahara</span>
      </div>

      <div
        className="w-full overflow-hidden"
        style={{ height: "55vw", maxHeight: "600px", minHeight: "240px" }}
      >
        <img
          src={banner}
          alt="Kasahara"
          className="w-full h-full object-cover object-center"
          style={{ filter: "grayscale(15%)" }}
        />
        <StaticOverlay opacity={0.15} />
      </div>
      

      <div className="max-w-lg mx-auto px-6 py-12">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">why i created kasahara?</p>
        <p className="text-base font-light leading-relaxed mb-4">
          Kasahara is a multidisciplinary space where art takes many shapes. It’s an evolution from the auditory (music) to the visual (filmmaking), ultimately manifesting in a physical form through our products
        </p>
        <p className="text-sm text-gray-500 leading-relaxed mb-8">
          My practice lives at the intersection of storytelling and design thinking.
          Each project starts with a question or concept that we want to explore and hopefully open up people’s minds to new perspectives. 
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs border border-gray-200 px-3 py-1 text-gray-400">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 mx-6" />

      <div className="border-b border-gray-200 px-6 py-3 text-center">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">visual Film</p>
        <a
          href="https://www.instagram.com/reel/DKVzMNlhosf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noopener noreferrer"
          className="block group relative overflow-hidden mb-4"
        >
         <video
  src={undefinedFilm}
  autoPlay loop muted playsInline
  className="w-full object-cover"
  style={{ aspectRatio: "16/9", filter: "grayscale(20%)" }}
/>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="border border-black bg-white w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="black" width="16" height="16">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </a>
        <p className="text-sm mb-1">UNDEFINED, Featuring Hafizi Jina</p>
        <p className="text-xs text-gray-400 mb-4">
          Written, directed and produced independently. 2025
        </p>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest uppercase border-b border-black pb-px hover:opacity-40 transition-opacity"
        >
          Watch in full
        </a>
      </div>

      <div className="border-t border-gray-200 mx-6" />

      {/* Graphic Design — one per row, natural ratio */}
      <div className="max-w-lg mx-auto px-6 py-12">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">Graphics</p>
        <div className="flex flex-col gap-6">
          {[graphic3, graphic2, graphic1, graphic4].map((src, i) => (
            <div key={i}>
              <FadeInImage
                src={src}
                alt={`Design ${i + 1}`}
                className="w-full h-auto"
                style={{ filter: "grayscale(10%)", display: "block" }}
              />
              {i < 3 && <div className="border-b border-gray-100 mt-6" />}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 mx-6" />

      {/* Photography — one per row, natural ratio */}
      <div className="max-w-lg mx-auto px-6 py-12">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">Photos</p>
        <div className="flex flex-col gap-6">
          {photos.map((src, i) => (
            <div key={i}>
              <FadeInImage
                src={src}
                alt={`Project ${i + 1}`}
                className="w-full h-auto"
                style={{ filter: "grayscale(15%)", display: "block" }}
              />
              {i < photos.length - 1 && <div className="border-b border-gray-100 mt-6" />}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200">
        <a
          href="https://kasahara.co"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center py-16 hover:bg-gray-50 transition-colors"
        >
          <img
            src={kasaharaLogo}
            alt="Kasahara"
            className="h-24 w-auto object-contain group-hover:opacity-40 transition-opacity"
          />
        </a>
      </div>

    </div>
  )
}
