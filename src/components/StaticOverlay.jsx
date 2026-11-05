import { useEffect, useRef } from "react"

export default function StaticOverlay({ opacity = 0.08 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let animFrame
    let frameCount = 0

    // 1. Create a tiny offscreen noise tile (128x128)
    const tileSize = 128
    const patternCanvas = document.createElement("canvas")
    patternCanvas.width = tileSize
    patternCanvas.height = tileSize
    const patternCtx = patternCanvas.getContext("2d")
    const imgData = patternCtx.createImageData(tileSize, tileSize)
    const buffer32 = new Uint32Array(imgData.data.buffer) // 32-bit view is ~4x faster than per-channel loop

    const updatePattern = () => {
      for (let i = 0; i < buffer32.length; i++) {
        // Fast black/white noise bitmask
        const val = (Math.random() * 255) | 0
        buffer32[i] = (255 << 24) | (val << 16) | (val << 8) | val
      }
      patternCtx.putImageData(imgData, 0, 0)
    }

    const draw = () => {
      // Throttle noise refresh to every 2nd or 3rd frame for filmic look & less CPU work
      frameCount++
      if (frameCount % 2 === 0) {
        updatePattern()
      }

      const w = canvas.width
      const h = canvas.height

      if (w > 0 && h > 0) {
        ctx.clearRect(0, 0, w, h)
        const pattern = ctx.createPattern(patternCanvas, "repeat")
        if (pattern) {
          ctx.fillStyle = pattern
          ctx.fillRect(0, 0, w, h)
        }
      }

      animFrame = requestAnimationFrame(draw)
    }

    const resize = () => {
      if (!canvas) return
      // Safe fallback if offsetWidth/Height hasn't laid out yet
      const width = canvas.offsetWidth || window.innerWidth
      const height = canvas.offsetHeight || 400
      canvas.width = width
      canvas.height = height
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