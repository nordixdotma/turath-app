"use client"

import { useLanguage } from "@/hooks/use-language"
import { Container } from "@/components/ui/container"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react"

export default function ArchitecturalProjectPage() {
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

  // Project details
  const project = {
    title: "ARCHITECTURAL PRESERVATION INITIATIVES",
    description:
      "Collaborative projects focused on documenting, restoring, and preserving the unique architectural elements of Marrakech's historical buildings and neighborhoods.",
    fullDescription:
      "Our Architectural Preservation Initiatives are dedicated to safeguarding the unique architectural heritage of Marrakech. Through collaborative efforts with local authorities, property owners, and international preservation experts, we work to document, restore, and preserve historical buildings and neighborhoods that represent the city's rich cultural history. These projects not only help maintain the physical structures but also preserve the traditional building techniques and design elements that make Marrakech's architecture so distinctive and valuable.",
    date: "Ongoing projects throughout the year",
    location: "Various sites in Marrakech",
    participants: 85,
    mainImage:
      "https://images.unsplash.com/photo-1736718126907-bb2232556351?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1719084198651-5ac167cb3e6e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    initiatives: [
      "Documentation of historical buildings and architectural elements",
      "Restoration of deteriorating structures using traditional techniques",
      "Training programs for local craftspeople in traditional building methods",
      "Advocacy for preservation policies and regulations",
      "Community engagement to raise awareness about architectural heritage",
      "Development of sustainable preservation strategies",
    ],
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-transparent"
        style={{
          height: "60vh",
          backgroundImage: `url('${project.mainImage}')`,
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
                <span className="text-sm font-medium">Back to Projects</span>
              </Link>
              <div className="inline-block mb-4 px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-none">
                <span className="text-xs font-medium text-white">Restoration</span>
              </div>
              <h1 className="font-tomato mb-4 text-3xl font-bold leading-tight text-shadow text-white md:text-4xl lg:text-5xl">
                {project.title}
              </h1>
              <p className="mb-6 text-base text-shadow text-white/90 max-w-lg">{project.description}</p>
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
              <h2 className="font-tomato text-3xl font-bold text-gray-900 mb-6">{t("about_project")}</h2>
              <div className="h-1 w-16 bg-primary mb-8"></div>

              <div className="prose max-w-none text-gray-700 font-tomato">
                <p className="mb-6">{project.fullDescription}</p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t("key_initiatives")}</h3>
                <ul className="space-y-2 mb-8">
                  {project.initiatives.map((initiative, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                      <span>{initiative}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t("significance")}</h3>
                <p>
                  Marrakech's architectural heritage is not just about beautiful buildings; it represents centuries of
                  cultural evolution, technical innovation, and artistic expression. By preserving these structures, we
                  are maintaining living examples of Morocco's rich history and ensuring that future generations can
                  experience and learn from them. Our preservation work also contributes to sustainable tourism by
                  protecting the authentic character of the city that attracts visitors from around the world.
                </p>
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
                      <p className="font-medium text-gray-900 font-tomato">{t("timeline")}</p>
                      <p className="text-gray-700 font-tomato">{project.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 font-tomato">{t("location")}</p>
                      <p className="text-gray-700 font-tomato">{project.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 font-tomato">{t("contributors")}</p>
                      <p className="text-gray-700 font-tomato">{project.participants} professionals and volunteers</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-none font-tomato">
                    {t("support_project")}
                  </Button>
                </div>
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
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative h-64 rounded-md overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl",
                    galleryInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
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

