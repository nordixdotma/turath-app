"use client"

import { Container } from "@/components/ui/container"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function UnveilingHiddenTreasuresPage() {
  const { t } = useLanguage()

  // Hero section animation
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Content sections animation
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Gallery section animation
  const { ref: galleryRef, inView: galleryInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-transparent"
        style={{
          height: "60vh",
          backgroundImage: `url('/Logo turath 2-1.png')`,
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
                <span className="text-xs font-medium text-white">{t("ongoing")}</span>
              </div>
              <h1 className="font-tomato mb-4 text-3xl font-bold leading-tight text-shadow text-white md:text-4xl lg:text-5xl">
                {t("treasures_project_title")}
              </h1>
              <p className="mb-6 text-base text-shadow text-white/90 max-w-lg">{t("treasures_project_short_desc")}</p>
            </div>
          </Container>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-20 bg-white">
        <Container className="max-w-6xl mx-auto">
          <div
            ref={contentRef}
            className={cn(
              "grid md:grid-cols-3 gap-12 transition-all duration-700",
              contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="font-tomato text-3xl font-bold text-gray-900 mb-6">{t("about_the_project")}</h2>
              <div className="h-1 w-16 bg-primary mb-8"></div>

              <div className="prose max-w-none text-gray-700 font-tomato">
                <p className="mb-6">{t("treasures_project_desc_p1")}</p>
                <p className="mb-6">{t("treasures_project_desc_p2")}</p>
                <p className="mb-6">{t("treasures_project_desc_p3")}</p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t("program_components")}</h3>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span>{t("treasures_component_1")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span>{t("treasures_component_2")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span>{t("treasures_component_3")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span>{t("treasures_component_4")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span>{t("treasures_component_5")}</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t("focus_areas")}</h3>
                <p>{t("treasures_focus_intro")}</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span>{t("treasures_focus_1")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span>{t("treasures_focus_2")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span>{t("treasures_focus_3")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span>{t("treasures_focus_4")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span>{t("treasures_focus_5")}</span>
                  </li>
                </ul>

                <p className="mt-6">{t("treasures_conclusion")}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-tomato">{t("project_details")}</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 font-tomato">{t("date")}</p>
                      <p className="text-gray-700 font-tomato">{t("treasures_project_date")}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 font-tomato">{t("location")}</p>
                      <p className="text-gray-700 font-tomato">{t("treasures_project_location")}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 font-tomato">{t("participants_to_date")}</p>
                      <p className="text-gray-700 font-tomato">120+ {t("participants_across_activities")}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-none font-tomato">
                    {t("register_for_next_event")}
                  </Button>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-md border border-gray-200 mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-tomato">{t("key_initiatives")}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700 font-tomato">{t("treasures_initiative_1")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700 font-tomato">{t("treasures_initiative_2")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700 font-tomato">{t("treasures_initiative_3")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700 font-tomato">{t("treasures_initiative_4")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700 font-tomato">{t("treasures_initiative_5")}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-md border border-gray-200 mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-tomato">{t("impact")}</h3>
                <p className="text-gray-700 font-tomato">{t("treasures_impact")}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <Container className="max-w-6xl mx-auto">
          <div
            ref={galleryRef}
            className={cn(
              "transition-all duration-700",
              galleryInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <h2 className="font-tomato text-3xl font-bold text-gray-900 mb-6 text-center">{t("gallery")}</h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-12"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div
                  key={index}
                  className={cn(
                    "relative h-64 rounded-md overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl",
                    galleryInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Image
                    src={`/Logo turath 2-1.png`}
                    alt={`${t("gallery_image")} ${index}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
