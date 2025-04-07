"use client"

import { useLanguage } from "@/hooks/use-language"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BoardSection() {
  const { t } = useLanguage()

  const president = {
    name: t("president_name"),
    position: "president",
    image: "/SOAD-BELKZIZ.jpeg",
    bio: t("president_bio"),
  }

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-transparent">
      <Container className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="font-tomato text-3xl md:text-4xl font-bold text-white mb-4">{t("board_title")}</h2>
          <div className="h-1 w-24 bg-primary mb-6"></div>
        </div>

        <div
          ref={ref}
          className={cn(
            "transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {/* Redesigned card with better space usage - now with primary color background */}
          <div className="bg-primary/90 backdrop-blur-sm rounded-md overflow-hidden border border-primary/30">
            <div className="flex flex-col md:flex-row">
              {/* Left side: Image and name */}
              <div className="md:w-1/3 p-6 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-white/20">
                <div className="relative w-40 h-48 md:w-48 md:h-56 rounded-md overflow-hidden border-2 border-white/20 shadow-lg mb-4">
                  <Image
                    src={president.image || "/placeholder.svg"}
                    alt={president.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-tomato text-2xl font-bold text-white mb-1">{president.name}</h3>
                <span className="inline-block bg-black/30 text-white px-3 py-1 rounded-none text-sm font-medium uppercase tracking-wider mb-4 font-tomato">
                  {t(president.position)}
                </span>
              </div>

              {/* Right side: Bio and button */}
              <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-medium text-white mb-3 font-tomato">{t("about_president")}</h4>
                  <p className="text-white/90 font-tomato">{president.bio}</p>
                </div>

                <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <Link href="/about">
                    <Button
                      variant="outline"
                      className="border-white text-primary bg-white hover:bg-transparent hover:text-white transition-colors rounded-none font-tomato"
                    >
                      {t("meet_full_board")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>

                  <p className="text-white/80 text-sm italic font-tomato">{t("visit_about_page")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

