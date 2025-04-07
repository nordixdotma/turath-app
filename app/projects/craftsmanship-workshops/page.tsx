"use client"

import { useLanguage } from "@/hooks/use-language"
import { Container } from "@/components/ui/container"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react"

export default function CraftsmanshipProjectPage() {
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
    title: "TRADITIONAL CRAFTSMANSHIP WORKSHOPS",
    description:
      "Hands-on workshops led by master artisans, teaching traditional Moroccan crafts such as pottery, weaving, and woodworking to preserve these ancient skills for future generations.",
    fullDescription:
      "Our Traditional Craftsmanship Workshops are designed to preserve and promote the rich artisanal heritage of Morocco. Led by master artisans with decades of experience, these workshops offer participants the opportunity to learn traditional crafts such as pottery, weaving, woodworking, leather crafting, and metalwork. Through these hands-on experiences, we aim to ensure that these ancient skills and techniques are passed down to future generations, while also providing economic opportunities for local artisans and creating meaningful cultural exchanges.",
    date: "Monthly workshops throughout the year",
    location: "Artisan Center, Marrakech Medina",
    participants: 120,
    mainImage:
      "https://images.unsplash.com/photo-1722411927625-0e478acf502b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1681686587176-d0e1a37edd47?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1518112390430-f4ab02e9c2c8?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1677702162842-b4a4b3c47a27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    workshops: [
      "Pottery and Ceramics",
      "Traditional Weaving",
      "Woodworking and Carpentry",
      "Leather Crafting",
      "Metalwork and Jewelry Making",
      "Zellige Tile Making",
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
                <span className="text-xs font-medium text-white">Workshop</span>
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

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t("workshop_types")}</h3>
                <ul className="space-y-2 mb-8">
                  {project.workshops.map((workshop, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                      <span>{workshop}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t("impact")}</h3>
                <p>
                  These workshops have a significant impact on both cultural preservation and the local economy. By
                  teaching traditional crafts to new generations, we ensure that these skills are not lost to time.
                  Additionally, the workshops provide economic opportunities for local artisans who serve as instructors
                  and mentors. Participants gain a deeper appreciation for Moroccan craftsmanship and culture, while
                  also developing practical skills that they can continue to practice and share with others.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-tomato">{t("workshop_details")}</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 font-tomato">{t("schedule")}</p>
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
                      <p className="font-medium text-gray-900 font-tomato">{t("participants_to_date")}</p>
                      <p className="text-gray-700 font-tomato">{project.participants} people</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-none font-tomato">
                    {t("register_workshop")}
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

