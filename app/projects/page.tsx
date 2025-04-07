"use client"

import { useLanguage } from "@/hooks/use-language"
import { Container } from "@/components/ui/container"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ProjectsPage() {
  const { t } = useLanguage()

  // Hero section animation
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Projects data
  const projects = [
    {
      id: "heritage-days",
      title: "MARRAKECH HERITAGE DAYS",
      description:
        "A week-long celebration featuring guided tours of historical sites, workshops on traditional crafts, and cultural performances that showcase the rich heritage of Marrakech.",
      image:
        "https://images.unsplash.com/photo-1724762511996-8daf138c0a30?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "event",
      participants: 250,
    },
    {
      id: "craftsmanship-workshops",
      title: "TRADITIONAL CRAFTSMANSHIP WORKSHOPS",
      description:
        "Hands-on workshops led by master artisans, teaching traditional Moroccan crafts such as pottery, weaving, and woodworking to preserve these ancient skills for future generations.",
      image:
        "https://images.unsplash.com/photo-1722411927625-0e478acf502b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "workshop",
      participants: 120,
    },
    {
      id: "architectural-preservation",
      title: "ARCHITECTURAL PRESERVATION INITIATIVES",
      description:
        "Collaborative projects focused on documenting, restoring, and preserving the unique architectural elements of Marrakech's historical buildings and neighborhoods.",
      image:
        "https://images.unsplash.com/photo-1736718126907-bb2232556351?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "restoration",
      participants: 85,
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
            "url('https://images.unsplash.com/photo-1722411927625-0e478acf502b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
              <div className="inline-block mb-4 px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-none">
                <span className="text-xs font-medium text-white">{t("our_initiatives")}</span>
              </div>
              <h1 className="font-tomato mb-4 text-3xl font-bold leading-tight text-shadow text-white md:text-4xl lg:text-5xl">
                Heritage Horizons: Unveiling Marrakech's Hidden Treasures
              </h1>
              <p className="mb-6 text-base text-shadow text-white/90 max-w-lg">{t("projects_hero_description")}</p>
            </div>
          </Container>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <Container className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-tomato text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("our_projects")}</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto font-tomato">{t("our_projects_description")}</p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={cn("grid md:grid-cols-2 gap-8 items-center", index % 2 === 1 ? "md:flex-row-reverse" : "")}
              >
                <div className={cn("order-1", index % 2 === 1 ? "md:order-2" : "md:order-1")}>
                  <div className="relative h-64 md:h-80 rounded-md overflow-hidden shadow-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="inline-block px-3 py-1 bg-primary/80 text-white text-xs font-medium uppercase tracking-wider">
                        {project.type}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cn("order-2", index % 2 === 1 ? "md:order-1" : "md:order-2")}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-tomato">{project.title}</h3>
                  <p className="text-gray-700 mb-6 font-tomato">{project.description}</p>

                  <div className="flex items-center mb-6">
                    <div className="bg-primary/10 px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-primary font-tomato">
                        {project.participants} Participants
                      </span>
                    </div>
                  </div>

                  <Link href={`/projects/${project.id}`}>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10 rounded-none font-tomato"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}

