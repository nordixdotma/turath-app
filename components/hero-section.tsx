"use client"

import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { Container } from "@/components/ui/container"
import { ArrowRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCreative } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-creative"

export default function HeroSection() {
  const { t, language } = useLanguage()
  const [viewportHeight, setViewportHeight] = useState("100vh")
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Typing effect
  const [text] = useTypewriter({
    words: [t("hero_title"), t("typewriter_text1"), t("typewriter_text2"), t("typewriter_text3")],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 70,
    deleteSpeed: 50,
  })

  // Hero images - Marrakech heritage specific
  const heroImages = [
    "/PHOTOS-JDP/P1388698.jpg",
    "/PHOTOS-JDP/P1388723.jpg",
    "https://images.unsplash.com/photo-1536237717235-0acadb345d8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
  ]

  // Adjust for mobile browser chrome
  useEffect(() => {
    const setHeight = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
      setViewportHeight(`calc(var(--vh, 1vh) * 100)`)
    }

    setHeight()
    window.addEventListener("resize", setHeight)

    // Animation timing
    const timer = setTimeout(() => {
      setIsVisible(true)
      setMounted(true)
    }, 100)

    return () => {
      window.removeEventListener("resize", setHeight)
      clearTimeout(timer)
    }
  }, [])

  // Add a new useEffect to handle language changes
  useEffect(() => {
    // Force remount of Swiper when language changes
    setMounted(false)
    setTimeout(() => {
      setMounted(true)
    }, 50)
  }, [language])

  return (
    <section
      className="relative bg-transparent"
      style={{
        height: viewportHeight,
        backgroundImage:
          "url('/HOMEPAGEIMAGE.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Add a dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <Container className="max-w-6xl mx-auto relative z-10">
          <div className="grid gap-8 md:grid-cols-12 items-center">
            <div
              className={cn(
                "md:col-span-6 transition-all duration-1000 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <div className="inline-block mb-4 px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-none">
                <span className="text-xs font-medium text-white">{t("established")} 2021</span>
              </div>
              <h1 className="font-tomato mb-4 text-3xl font-bold leading-tight text-shadow text-white md:text-4xl lg:text-5xl">
                <span>{text}</span>
                <span className="text-primary">
                  <Cursor cursorStyle="_" />
                </span>
              </h1>
              <p className="mb-6 text-base text-shadow text-white/90 max-w-lg">{t("hero_description")}</p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="default"
                  variant="outline"
                  className="border-white text-primary bg-white hover:bg-white/10 hover:text-white group transition-all duration-300 rounded-none"
                >
                  {t("discover_more")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            <div
              className={cn(
                "hidden md:block md:col-span-6 transition-all duration-1000 delay-300 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <div className="relative h-[380px] w-full rounded-md overflow-hidden shadow-2xl">
                {mounted && (
                  <Swiper
                    modules={[Autoplay, EffectCreative]}
                    effect="creative"
                    creativeEffect={{
                      prev: {
                        shadow: true,
                        translate: [language === "ar" ? "20%" : "-20%", 0, -1],
                      },
                      next: {
                        translate: [language === "ar" ? "-100%" : "100%", 0, 0],
                      },
                    }}
                    speed={1000}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    dir={language === "ar" ? "rtl" : "ltr"}
                    className="h-full w-full"
                  >
                    {heroImages.map((image, index) => (
                      <SwiperSlide key={index} className="h-full w-full">
                        <div className="relative h-full w-full">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={t("hero_image_alt")}
                            fill
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

