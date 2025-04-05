"use client"

import { useLanguage } from "@/hooks/use-language"
import { useState, useEffect } from "react"
import { Container } from "@/components/ui/container"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

export default function StatsSection() {
  const { t } = useLanguage()

  // Updated with the correct numbers
  const stats = [
    { label: "volunteers", value: 580, color: "text-blue-400" },
    { label: "donations", value: 980, color: "text-amber-400" },
    { label: "projects", value: 50, color: "text-emerald-400" },
    { label: "missions", value: 320, color: "text-rose-400" },
  ]

  const [counters, setCounters] = useState(stats.map(() => 0))
  const [animationStarted, setAnimationStarted] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.1,
    // Remove triggerOnce to allow animation to restart
  })

  useEffect(() => {
    // Reset animation state when section is not in view
    if (!inView) {
      setAnimationStarted(false)
      return
    }

    // Function to start the counter animation
    const startCounterAnimation = () => {
      if (animationStarted) return
      setAnimationStarted(true)

      const startTime = Date.now()
      const duration = 2000 // 2 seconds

      const updateCounters = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smoother animation
        const easedProgress = 1 - Math.pow(1 - progress, 3) // Cubic ease-out

        setCounters(stats.map((stat) => Math.floor(stat.value * easedProgress)))

        if (progress < 1) {
          requestAnimationFrame(updateCounters)
        } else {
          // Ensure final values are exact
          setCounters(stats.map((stat) => stat.value))
        }
      }

      requestAnimationFrame(updateCounters)
    }

    if (inView) {
      startCounterAnimation()
    }
  }, [inView, animationStarted])

  return (
    <section ref={ref} className="py-20 bg-primary relative overflow-hidden stats-section mt-16">
      <Container className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-4">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className={cn(
                  "text-center transition-all duration-500",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                )}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="font-tomato text-4xl font-bold text-white md:text-5xl">
                  {counters[index].toLocaleString()}
                </div>
                <div className="mt-2 text-lg text-white/80 font-medium font-tomato">{t(stat.label)}</div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

