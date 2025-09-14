"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Zap, Users } from "lucide-react"

const cards = [
  {
    icon: Target,
    title: "AI-Powered Personal Tutor",
    description:
      "Your personal AI tutor understands exactly how you learn best. It adapts content, pacing, and teaching methods to match your unique learning style and goals.",
    gradient: "from-blue-500 to-blue-600",
    features: ["Personalized learning assessment", "Adaptive content delivery", "Real-time progress optimization"],
    color: "blue",
  },
  {
    icon: Zap,
    title: "Smart Adaptation",
    description:
      "Tutr learns from every interaction, continuously refining your learning experience for maximum effectiveness and engagement.",
    gradient: "from-green-500 to-green-600",
    features: ["Real-time difficulty adjustment", "Learning pattern recognition", "Performance optimization"],
    color: "green",
  },
  {
    icon: Users,
    title: "Learning Community",
    description:
      "Connect with fellow learners, share insights, and grow together in our supportive learning ecosystem with collaborative features.",
    gradient: "from-purple-500 to-purple-600",
    features: ["Peer learning groups", "Expert mentorship", "Progress sharing"],
    color: "purple",
  },
]

export function ScrollStackingCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const containerTop = rect.top
      const containerHeight = rect.height

      // Start animation when container enters viewport
      const startPoint = windowHeight * 0.9
      const endPoint = -containerHeight + windowHeight * 0.1

      if (containerTop <= startPoint && containerTop >= endPoint) {
        const totalDistance = startPoint - endPoint
        const currentDistance = startPoint - containerTop
        const progress = Math.min(Math.max(currentDistance / totalDistance, 0), 1)
        setScrollProgress(progress)
      } else if (containerTop > startPoint) {
        setScrollProgress(0)
      } else {
        setScrollProgress(1)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full max-w-lg mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon
            const cardProgress = Math.max(0, Math.min(1, scrollProgress * cards.length - index))
            const translateY = (1 - cardProgress) * 120 // Increased distance for more dramatic effect
            const scale = 0.85 + cardProgress * 0.15 // Better scaling range
            const opacity = Math.max(0.3, cardProgress) // Minimum opacity for visibility
            const zIndex = index + Math.floor(cardProgress * 10)

            return (
              <div
                key={index}
                className="absolute inset-0 transition-transform duration-75 ease-out"
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
              >
                <Card className="w-full shadow-2xl border-2 bg-background/95 backdrop-blur-sm">
                  <CardHeader>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-3">{card.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{card.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {card.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className={`w-2 h-2 bg-${card.color}-500 rounded-full`}></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
