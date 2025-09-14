"use client"

import { useEffect, useRef } from "react"

interface LatticeNode {
  x: number
  y: number
  color: string
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<LatticeNode[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = Math.max(document.documentElement.scrollHeight, window.innerHeight)
    }

    const createLattice = () => {
      const nodes: LatticeNode[] = []
      const spacing = 80 // Distance between lattice points
      const colors = [
        "rgba(59, 130, 246, 0.25)", // blue-500
        "rgba(147, 51, 234, 0.25)", // purple-600
        "rgba(34, 197, 94, 0.25)", // green-500
        "rgba(249, 115, 22, 0.25)", // orange-500
      ]

      for (let x = -spacing; x < canvas.width + spacing; x += spacing) {
        for (let y = -spacing; y < canvas.height + spacing; y += spacing) {
          nodes.push({
            x,
            y,
            color: colors[Math.floor(Math.random() * colors.length)],
          })
        }
      }

      nodesRef.current = nodes
    }

    const drawLattice = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      nodesRef.current.forEach((node, index) => {
        nodesRef.current.forEach((otherNode, otherIndex) => {
          if (index !== otherIndex) {
            const dx = node.x - otherNode.x
            const dy = node.y - otherNode.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 90 && distance > 0) {
              const opacity = Math.max(0.08, 0.3 - distance / 400)

              ctx.beginPath()
              ctx.moveTo(node.x, node.y)
              ctx.lineTo(otherNode.x, otherNode.y)
              ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`
              ctx.lineWidth = 1
              ctx.stroke()
            }
          }
        })

        ctx.beginPath()
        ctx.arc(node.x, node.y, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.fill()

        // Add subtle glow effect
        ctx.beginPath()
        ctx.arc(node.x, node.y, 5, 0, Math.PI * 2)
        ctx.fillStyle = node.color.replace("0.25", "0.08")
        ctx.fill()
      })
    }

    resizeCanvas()
    createLattice()
    drawLattice()

    const handleResize = () => {
      resizeCanvas()
      createLattice()
      drawLattice()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  )
}
