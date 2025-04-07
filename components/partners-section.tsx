"use client"

import { useLanguage } from "@/hooks/use-language"
import { Container } from "@/components/ui/container"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

export default function PartnersSection() {
  const { t, language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Partner logos provided by the user (with duplicates)
  const partners = [
    {
      name: "Ministerio de Asuntos Exteriores",
      logo: "https://www.exteriores.gob.es/PublishingImages/Banners/logoMinisterio.svg",
    },
    {
      name: "Fondation Jardin Majorelle",
      logo: "https://th.bing.com/th/id/OIP.JJETPCjpQJDZr_fHwe32nAHaCw?rs=1&pid=ImgDetMain",
    },
    {
      name: "UM6P",
      logo: "https://www.um6p.ma/sites/default/files/logo%20(4)_1.png",
    },
    {
      name: "Casa Memoire",
      logo: "https://www.casamemoire.org/css/images/logo.png",
    },
    // Duplicated logos
    {
      name: "Ministerio de Asuntos Exteriores",
      logo: "https://www.exteriores.gob.es/PublishingImages/Banners/logoMinisterio.svg",
    },
    {
      name: "Fondation Jardin Majorelle",
      logo: "https://th.bing.com/th/id/OIP.JJETPCjpQJDZr_fHwe32nAHaCw?rs=1&pid=ImgDetMain",
    },
  ]

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-24 bg-transparent">
      <Container className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="font-tomato text-3xl md:text-4xl font-bold text-white mb-4">{t("our_partners")}</h2>
          <div className="h-1 w-24 bg-primary mb-6"></div>
        </div>

        <div
          ref={ref}
          className={cn(
            "transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {mounted && (
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              dir={language === "ar" ? "rtl" : "ltr"}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className={`partners-swiper ${language === "ar" ? "rtl-swiper" : ""}`}
            >
              {partners.map((partner, index) => (
                <SwiperSlide key={index}>
                  <div className="p-6 h-32 flex items-center justify-center">
                    <div className="relative h-full w-full">
                      <div className="relative h-full w-full flex items-center justify-center">
                        <div className="relative h-20 w-full bg-white rounded-md p-3">
                          <Image
                            src={partner.logo || "/placeholder.svg"}
                            alt={partner.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </Container>
    </section>
  )
}

