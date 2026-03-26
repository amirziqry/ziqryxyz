import { useEffect, useRef } from "react"

export default function StaticOverlay({ opacity = 0.04 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animFrame

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      const imageData = ctx.createImageData(w, h)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const val = Math.random() * 255
        data[i] = val
        data[i + 1] = val
        data[i + 2] = val
        data[i + 3] = 255
      }

      ctx.putImageData(imageData, 0, 0)
      animFrame = requestAnimationFrame(draw)
    }

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resize()
    draw()
    window.addEventListener("resize", resize)
    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity, mixBlendMode: "overlay" }}
    />
  )
}