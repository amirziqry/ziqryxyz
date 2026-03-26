function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="20" height="20">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconYouTube() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="20" height="20">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconSoundCloud() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M11.56 8.87V17h8.76c1.25 0 2.18-.95 2.18-2.08 0-1.08-.87-1.96-1.96-2.04C20.7 10.3 18.5 8 15.78 8c-1.4 0-2.65.56-3.57 1.47-.2-.38-.6-.6-.65-.6zm-1.5 1.5c-.17 0-.3.13-.3.3v5.7c0 .17.13.3.3.3.17 0 .3-.13.3-.3v-5.7c0-.17-.13-.3-.3-.3zm-2 .8c-.17 0-.3.13-.3.3v4.9c0 .17.13.3.3.3.17 0 .3-.13.3-.3v-4.9c0-.17-.13-.3-.3-.3zm-2 .8c-.17 0-.3.13-.3.3v4.1c0 .17.13.3.3.3.17 0 .3-.13.3-.3v-4.1c0-.17-.13-.3-.3-.3zm-2 .5c-.17 0-.3.13-.3.3v3.1c0 .17.13.3.3.3.17 0 .3-.13.3-.3v-3.1c0-.17-.13-.3-.3-.3zm-1.8 1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
    </svg>
  )
}

function IconLetterboxd() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="20" height="20">
      <circle cx="8.5" cy="12" r="3.5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="15.5" cy="12" r="3.5" />
    </svg>
  )
}

const platforms = [
  { id: "instagram", label: "Instagram", handle: "@amir.ziqry", url: "https://www.instagram.com/amir.ziqry/", Icon: IconInstagram },
  { id: "youtube", label: "YouTube", handle: "@pierremiyazaki", url: "https://www.youtube.com/@pierremiyazaki", Icon: IconYouTube },
  { id: "soundcloud", label: "SoundCloud", handle: "@zqry", url: "https://soundcloud.com/zqry", Icon: IconSoundCloud },
  { id: "letterboxd", label: "Letterboxd", handle: "@amirziqry", url: "https://letterboxd.com/amirziqry/", Icon: IconLetterboxd },
]

export default function Social() {
  return (
    <div className="pt-11 min-h-screen text-center">

      <div className="border-b border-gray-200 px-6 py-3 text-center">
        <span className="text-xs tracking-widest uppercase text-gray-400">Social</span>
      </div>

      <div className="max-w-lg mx-auto">
        {platforms.map((p) => (
          <a
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center px-6 py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors gap-2"
          >
            <div className="text-gray-400 group-hover:text-black transition-colors">
              <p.Icon />
            </div>
            <p className="text-sm font-light mb-0.5">{p.label}</p>
            <p className="text-xs text-gray-400">{p.handle}</p>
          </a>
        ))}
      </div>

      <div className="max-w-lg mx-auto px-6 py-8">
        <p className="text-xs text-gray-300">All links open in a new tab.</p>
      </div>

    </div>
  )
}