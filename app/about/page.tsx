"use client"

import { useLanguage } from "@/hooks/use-language"
import { Container } from "@/components/ui/container"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { BookOpen, Compass, FileSearch, Heart, Lightbulb, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  const { t } = useLanguage()

  // Hero section animation
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Mission section animation
  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Objectives section animation
  const { ref: objectivesRef, inView: objectivesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Importance section animation
  const { ref: importanceRef, inView: importanceInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Objectives with icons
  const objectives = [
    {
      title: "Awareness / Information",
      icon: Lightbulb,
      description:
        "Organize various activities (conferences, exhibitions, guided tours, press relations, training, awareness workshops, think tanks, etc.) with the goal of raising awareness among the general public (both young and old) interested in heritage and its preservation.",
    },
    {
      title: "Valorization / Restoration",
      icon: Heart,
      description:
        "Initiate and encourage preservation, valorization, restoration, or rehabilitation actions on specific sites.",
    },
    {
      title: "Research / Dissemination",
      icon: FileSearch,
      description:
        "Conduct or participate in research and analysis to build and strengthen knowledge about heritage. Act to promote the dissemination and popularization of subjects related to heritage and its valorization (studies, reports, publications…).",
    },
    {
      title: "Heritage Promotion",
      icon: Share2,
      description:
        "Any other action that contributes to the valorization of the tangible and intangible heritage of Marrakech and its region.",
    },
  ]

  return (
    <div>
      {/* Combined Hero and Mission Section with shared background */}
      <section
        className="relative bg-transparent"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529143503127-c95bdeee219a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Add a dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Hero Content */}
        <div className="relative pt-32 pb-20">
          <Container className="max-w-6xl mx-auto relative z-10">
            <div
              ref={heroRef}
              className={cn(
                "max-w-3xl transition-all duration-1000 transform",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <div className="inline-block mb-4 px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-none">
                <span className="text-xs font-medium text-white">{t("established")} 2021</span>
              </div>
              <h1 className="font-tomato mb-4 text-3xl font-bold leading-tight text-shadow text-white md:text-4xl lg:text-5xl">
                About Turâth
              </h1>
              <p className="mb-6 text-base text-shadow text-white/90 max-w-lg">
                Preserving the tangible and intangible heritage of Marrakech and its region
              </p>
            </div>
          </Container>
        </div>

        {/* Mission Section - now part of the same background */}
        <div className="relative pb-32">
          <Container className="max-w-6xl mx-auto relative z-10">
            <div
              ref={missionRef}
              className={cn(
                "grid md:grid-cols-2 gap-12 items-center transition-all duration-700",
                missionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
            >
              {/* Image */}
              <div className="relative h-[400px] rounded-md overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Marrakech Heritage"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block px-3 py-1 bg-primary/80 text-white text-sm font-medium mb-2">
                    Established 2021
                  </div>
                  <h3 className="text-white text-2xl font-bold font-tomato">We Are Turâth</h3>
                </div>
              </div>

              {/* Text */}
              <div className="bg-black/50 backdrop-blur-sm p-8 rounded-md">
                <h2 className="font-tomato text-3xl font-bold text-white mb-6">Our Mission</h2>
                <div className="h-1 w-16 bg-primary mb-8"></div>
                <div className="space-y-4 text-white/90 font-tomato">
                  <p>
                    Turâth is a Moroccan association established in 2021, non-profit, dedicated to the preservation of
                    the tangible and intangible heritage of the city of Marrakech and its region.
                  </p>
                  <p>
                    Heritage, in this context, is understood in its broadest sense, encompassing both architectural and
                    landscape elements, as well as the knowledge and cultural practices associated with related
                    professions.
                  </p>
                  <p>
                    The association brings together members who share common values, such as the understanding of
                    heritage, its preservation, and its valorization, fostering exchange and collaboration across
                    various domains in partnership with private and public institutions.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <Compass className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-white font-medium font-tomato">Non-profit</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-white font-medium font-tomato">Non-religious</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-white font-medium font-tomato">Apolitical</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Combined Objectives and Importance Section with shared background */}
      <section
        className="relative bg-transparent"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1675434836253-7408bf54f791?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Add a dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Objectives Section */}
        <div className="relative pt-32 pb-20">
          <Container className="max-w-6xl mx-auto relative z-10">
            <div
              ref={objectivesRef}
              className={cn(
                "transition-all duration-700",
                objectivesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
            >
              <div className="text-center mb-16">
                <h2 className="font-tomato text-3xl md:text-4xl font-bold text-white mb-4">
                  Objectives of the Association
                </h2>
                <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
                <p className="text-white/90 max-w-2xl mx-auto font-tomato">
                  The non-profit, non-religious, and apolitical association "TURÂTH" was established with the aim of
                  achieving the following objectives:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {objectives.map((objective, index) => (
                  <div
                    key={index}
                    className={cn(
                      "bg-black/50 backdrop-blur-sm p-6 rounded-md transition-all duration-700",
                      objectivesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4 shrink-0">
                        <objective.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3 font-tomato">{objective.title}</h3>
                        <p className="text-white/90 font-tomato">{objective.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>

        {/* Importance of Cultural Heritage Section - now part of the same background */}
        <div className="relative pb-32">
          <Container className="max-w-6xl mx-auto relative z-10">
            <div
              ref={importanceRef}
              className={cn(
                "bg-primary/90 backdrop-blur-sm rounded-md overflow-hidden border border-primary/30 transition-all duration-700",
                importanceInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
            >
              <div className="p-8 md:p-12">
                <h2 className="font-tomato text-3xl font-bold text-white mb-6">
                  The Importance of Cultural Heritage Awareness
                </h2>
                <p className="text-white/90 text-lg font-tomato mb-8">
                  "Raising awareness about cultural heritage is essential for the development of a nation that seeks to
                  build its future while safeguarding the cultural values of its past."
                </p>
                <Link href="/volunteer">
                  <Button
                    variant="outline"
                    className="border-white text-primary bg-white hover:bg-transparent hover:text-white transition-colors rounded-none font-tomato"
                  >
                    Join Our Mission
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </div>
  )
}

