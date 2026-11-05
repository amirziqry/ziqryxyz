import { useState, useEffect } from "react"
import heroImage from './assets/hero.jpg'
import profileImage from './assets/profile.JPG'
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
    <div className="pt-11 font-['Alte_Haas_Grotesk',sans-serif] text-[#1a38b8] selection:bg-[#1a38b8] selection:text-white">

      {/* Hero section */}
      <div className="w-full relative">
        <img
          src={heroImage}
          alt="Hero"
          fetchPriority="high"
          decoding="async"
          className="w-full h-auto block"
          style={{ filter: "grayscale(20%)" }}
        />
        <StaticOverlay opacity={0.15} />
      </div>

      {/* Date / time bar */}
      <div className="border-b border-gray-200 px-6 py-3 flex items-center justify-center">
        <span className="text-xs tracking-widest text-gray-400 uppercase font-['Alte_Haas_Grotesk',sans-serif]">
          {date}&nbsp;&nbsp;{time}
        </span>
      </div>

      {/* Main Editorial Layout */}
      <div className="max-w-6xl mx-auto px-8 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Kept Bold as originally styled */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight space-y-4">
              <p>
                I'm Amir Ziqry, a developing Design Engineer/Creative Technologist based in Selangor, Malaysia.
              </p>
              <p>
                My educational background includes studies in Foundation Management & Bachelor of Information Technology.
            
              </p>
              <p>Art creation has also been a big portion of my life as I have produced albums and short films for it's own sake.</p>
              <p>
                This website serves as an all in one portfolio of my works that i'm open to share to the public.
              </p>
            </div>

            {/* Profile Image (Mobile / Tablet only) */}
            <div className="mt-12 w-full max-w-sm block lg:hidden">
              <img
                src={profileImage}
                alt="Portrait"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain grayscale"
              />
            </div>
          </div>

          {/* Right Column: Facts Listing in Alte Haas Grotesk */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-12">
            <div className="font-['Alte_Haas_Grotesk',sans-serif] text-[16px] leading-[1.45] tracking-normal font-normal">
              <p className="text-[17px] mb-2">Facts:</p>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="mr-2">–</span>
                  <span>Currently freelancing & part-timing as a UI/UX designer and Frontend Developer</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">–</span>
                  <span>Grew up in Bukit Jelutong and Section 9, Shah Alam</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">–</span>
                  <span>Mostly self taught</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">–</span>
                  <span>Adaptive</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">–</span>
                  <span>Photoshop, Illustrator</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">–</span>
                  <span>FL Studio, Ableton</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">–</span>
                  <span>HTML/CSS (JS), React</span>
                </li>
              </ul>
            </div>

            {/* Profile Image (Desktop only) */}
            <div className="w-full max-w-sm hidden lg:block">
              <img
                src={profileImage}
                alt="Portrait"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain grayscale"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 px-6 py-5 flex items-center justify-center gap-6 font-['Alte_Haas_Grotesk',sans-serif]">
        <span className="text-xs tracking-widest text-gray-300 uppercase">
          © {new Date().getFullYear()}
        </span>
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