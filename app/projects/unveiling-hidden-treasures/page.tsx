"use client"

import { useLanguage } from "@/hooks/use-language"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, MapPin, Target, Users, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

export default function UnveilingTreasuresProjectPage() {
  const { t } = useLanguage()

  // Animation refs
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="relative bg-gray-900 h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1736718126907-bb2232556351?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Unveiling Marrakech's Hidden Treasures"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <Container className="relative z-10">
          <div
            ref={headerRef}
            className={cn(
              "max-w-3xl transition-all duration-1000 transform",
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <Link
              href="/projects"
              className="inline-flex items-center text-white mb-6 hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("back_to_projects")}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-tomato">
              {t("hidden_treasures_title")}
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">{t("hidden_treasures_description")}</p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <Container className="max-w-6xl mx-auto mt-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div
            ref={contentRef}
            className={cn(
              "md:col-span-2 transition-all duration-1000 transform",
              contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <div className="bg-white p-8 shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-6 font-tomato">{t("about_project")}</h2>
              <div className="prose max-w-none">
                <p>{t("hidden_treasures_about")}</p>
                <p>{t("hidden_treasures_about_2")}</p>
                <p>{t("hidden_treasures_about_3")}</p>
                <h3 className="text-xl font-bold mt-8 mb-4">{t("program_components")}</h3>
                <ul>
                  <li>
                    <strong>Hidden Heritage Tours:</strong> Guided explorations of lesser-known historical sites, hidden
                    riads, forgotten fountains, and architectural gems tucked away in the medina's labyrinthine streets.
                  </li>
                  <li>
                    <strong>Craft Documentation:</strong> Recording and preserving knowledge about endangered
                    traditional crafts and techniques through interviews with master artisans and practical
                    demonstrations.
                  </li>
                  <li>
                    <strong>Oral History Collection:</strong> Gathering stories, memories, and traditions from elder
                    community members to preserve intangible cultural heritage.
                  </li>
                  <li>
                    <strong>Educational Workshops:</strong> Hands-on learning experiences focused on traditional skills,
                    from architectural techniques to artistic practices.
                  </li>
                  <li>
                    <strong>Digital Documentation:</strong> Creating accessible digital archives of Marrakech's hidden
                    heritage through photography, video, and interactive media.
                  </li>
                </ul>
                <h3 className="text-xl font-bold mt-8 mb-4">{t("focus_areas")}</h3>
                <p>The initiative explores several key dimensions of Marrakech's hidden heritage:</p>
                <ul>
                  <li>
                    <strong>Architectural Heritage:</strong> Lesser-known historical buildings, traditional construction
                    techniques, and unique architectural elements.
                  </li>
                  <li>
                    <strong>Craft Traditions:</strong> Endangered crafts, specialized techniques, and the stories of
                    artisans who maintain these traditions.
                  </li>
                  <li>
                    <strong>Cultural Practices:</strong> Seasonal celebrations, community traditions, culinary heritage,
                    and other intangible cultural elements.
                  </li>
                  <li>
                    <strong>Historical Narratives:</strong> Untold stories from Marrakech's past, highlighting diverse
                    perspectives and experiences throughout the city's history.
                  </li>
                  <li>
                    <strong>Natural Heritage:</strong> Traditional gardens, water systems, and the relationship between
                    the built environment and natural elements.
                  </li>
                </ul>
                <p>
                  Through this multifaceted approach, "Unveiling Marrakech's Hidden Treasures" contributes to a more
                  comprehensive understanding and appreciation of the city's cultural landscape, ensuring that even its
                  less visible heritage elements are recognized, celebrated, and preserved for future generations.
                </p>
              </div>
            </div>

            {/* Gallery Section */}
            <div className="bg-white p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6 font-tomato">{t("gallery")}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1974&auto=format&fit=crop"
                    alt="Hidden courtyard"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?q=80&w=1974&auto=format&fit=crop"
                    alt="Traditional craft demonstration"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1585670210693-e7fdd16b142e?q=80&w=1974&auto=format&fit=crop"
                    alt="Architectural detail"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560930950-5cc20e80e392?q=80&w=1974&auto=format&fit=crop"
                    alt="Hidden garden"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1512236077335-f1cda9239c11?q=80&w=1974&auto=format&fit=crop"
                    alt="Cultural performance"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551184451-76b762941ad6?q=80&w=1974&auto=format&fit=crop"
                    alt="Oral history interview"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4 font-tomato">{t("project_details")}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">{t("schedule")}</p>
                    <p className="text-gray-600">Ongoing program with various activities throughout the year</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">{t("location")}</p>
                    <p className="text-gray-600">Various locations across Marrakech, focusing on lesser-known sites</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">{t("participants_to_date")}</p>
                    <p className="text-gray-600">120+ participants across various program activities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">{t("key_initiatives")}</p>
                    <ul className="text-gray-600 list-disc ml-4">
                      <li>Hidden Heritage Tours</li>
                      <li>Craft Documentation</li>
                      <li>Oral History Collection</li>
                      <li>Educational Workshops</li>
                      <li>Digital Documentation</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">{t("impact")}</p>
                    <p className="text-gray-600">
                      Creating awareness of lesser-known heritage sites, documenting endangered crafts and traditions,
                      and building a comprehensive digital archive of Marrakech's cultural heritage.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-primary/10 p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 font-tomato">{t("register_event")}</h3>
              <p className="text-gray-700 mb-6">
                Join our upcoming events and activities to discover Marrakech's hidden treasures. Contact us to learn
                about our schedule and register for upcoming tours and workshops.
              </p>
              <Link href="/contact">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">{t("contact_us")}</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
