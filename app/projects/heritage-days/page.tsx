"use client"

import { useLanguage } from "@/hooks/use-language"
import { Container } from "@/components/ui/container"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Calendar, MapPin } from "lucide-react"

export default function HeritageProjectPage() {
  const { t } = useLanguage()

  // Hero section animation
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Editions section animation
  const { ref: editionsRef, inView: editionsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Project editions data
  const editions = [
    {
      id: "first_edition",
      title: t("heritage_days_first_edition"),
      description: t("heritage_days_first_edition_description"),
      image: "https://images.unsplash.com/photo-1539020140153-e8c237112e31?q=80&w=1974&auto=format&fit=crop",
      date: t("heritage_days_first_edition_date"),
      location: t("heritage_days_location"),
      status: "completed",
    },
    {
      id: "second_edition",
      title: t("heritage_days_second_edition"),
      description: t("heritage_days_second_edition_description"),
      image: "https://images.unsplash.com/photo-1724762511996-8daf138c0a30?q=80&w=1974&auto=format&fit=crop",
      date: t("heritage_days_second_edition_date"),
      location: t("heritage_days_location"),
      status: "completed",
    },
    {
      id: "third_edition",
      title: t("heritage_days_third_edition"),
      description: t("heritage_days_third_edition_description"),
      image: "https://images.unsplash.com/photo-1594240500626-1e6d5c6de7dc?q=80&w=2070&auto=format&fit=crop",
      date: t("heritage_days_third_edition_date"),
      location: t("heritage_days_location"),
      status: "upcoming",
    },
  ]

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-transparent"
        style={{
          height: "60vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1724762511996-8daf138c0a30?q=80&w=1974&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Add a dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <Container className="max-w-6xl mx-auto relative z-10">
            <div
              ref={heroRef}
              className={cn(
                "max-w-3xl transition-all duration-1000 transform",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <Link href="/projects" className="inline-flex items-center text-white mb-6 group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <span className="text-sm font-medium">{t("back_to_projects")}</span>
              </Link>
              <div className="inline-block mb-4 px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-none">
                <span className="text-xs font-medium text-white">{t("event")}</span>
              </div>
              <h1 className="font-tomato mb-4 text-3xl font-bold leading-tight text-shadow text-white md:text-4xl lg:text-5xl">
                {t("heritage_days_title")}
              </h1>
              <p className="mb-6 text-base text-shadow text-white/90 max-w-lg">{t("heritage_days_description")}</p>
            </div>
          </Container>
        </div>
      </section>

      {/* Editions Section */}
      <section className="py-20 bg-white">
        <Container className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-tomato text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("project_editions")}</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto font-tomato">{t("project_editions_description")}</p>
          </div>

          <div
            ref={editionsRef}
            className={cn(
              "space-y-16 transition-all duration-700",
              editionsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            {editions.map((edition, index) => (
              <div
                key={edition.id}
                className={cn("grid md:grid-cols-2 gap-8 items-center", index % 2 === 1 ? "md:flex-row-reverse" : "")}
              >
                <div className={cn("order-1", index % 2 === 1 ? "md:order-2" : "md:order-1")}>
                  <div className="relative h-64 md:h-80 rounded-md overflow-hidden shadow-lg">
                    <Image
                      src={edition.image || "/placeholder.svg"}
                      alt={edition.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="inline-block px-3 py-1 bg-primary/80 text-white text-xs font-medium uppercase tracking-wider">
                        {t(edition.status)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cn("order-2", index % 2 === 1 ? "md:order-1" : "md:order-2")}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-tomato">{edition.title}</h3>
                  <p className="text-gray-700 mb-6 font-tomato">{edition.description}</p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="flex items-center bg-primary/10 px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm font-medium text-primary font-tomato">{edition.date}</span>
                    </div>

                    <div className="flex items-center bg-primary/10 px-3 py-1 rounded-full">
                      <MapPin className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm font-medium text-primary font-tomato">{edition.location}</span>
                    </div>
                  </div>

                  <Link href={`/projects/heritage-days/${edition.id}`}>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10 rounded-none font-tomato"
                    >
                      {t("view_details")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <Container className="max-w-6xl mx-auto">
          <div className="bg-primary/10 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-tomato text-primary">
                {t("interested_in_heritage_days")}
              </h2>
              <p className="text-gray-700 mb-8 font-tomato">{t("heritage_days_cta_description")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="font-tomato">
                  <Link href="/contact">{t("contact_for_participation")}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-tomato">
                  <Link href="/volunteer">{t("volunteer_for_next_edition")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
