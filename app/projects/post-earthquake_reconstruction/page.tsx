"use client"

import { useLanguage } from "@/hooks/use-language"
import { Container } from "@/components/ui/container"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react"

export default function PostEarthquakeProjectPage() {
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

  // Update the content to be more accurate and specific about the Al Haouz earthquake reconstruction efforts

  // Replace the earthquake_reconstruction_about section with more accurate content
  const earthquake_reconstruction_about = `Following the devastating Al Haouz earthquake on September 8, 2023, which measured 6.8 on the Richter scale and affected numerous historical sites in the Atlas Mountains region, Turâth Association immediately mobilized to support reconstruction efforts. Our team of architects, engineers, and heritage specialists has been working closely with local communities and authorities to assess damage, document affected structures, and develop sustainable reconstruction plans that respect traditional building techniques while improving structural resilience.`

  // Replace earthquake_reconstruction_about_2 with more specific information
  const earthquake_reconstruction_about_2 = `This project focuses particularly on the preservation of architectural heritage in the affected villages of the High Atlas, where centuries-old earthen architecture and traditional building knowledge are at risk of being lost in the reconstruction process. We've established a platform connecting international experts with local master builders to ensure that reconstruction efforts honor traditional methods while incorporating appropriate seismic reinforcement techniques.`

  // Update the Tinmel Mosque section with more accurate information
  const tinmel_mosque_text = `The historic Tinmel Mosque, a masterpiece of Almohad architecture dating back to 1156 and one of only two mosques in Morocco open to non-Muslims, suffered severe damage during the earthquake. Our specific restoration efforts for this UNESCO World Heritage candidate site include:`

  // Update the collaborative approach text
  const collaborative_approach_text = `Our reconstruction efforts are based on a collaborative approach that brings together various stakeholders, including Morocco's Ministry of Culture, UNESCO, ICOMOS, local authorities, academic institutions, and most importantly, the affected communities themselves.`

  const collaborative_approach_text_2 = `This inclusive strategy ensures that reconstruction not only preserves the physical structures but also respects the cultural significance and community values attached to these heritage sites. We're documenting traditional building techniques, training local craftspeople, and creating educational resources to ensure this knowledge continues to be passed down to future generations.`

  // Update the earthquake activities list with more specific activities
  const earthquake_activities_list_assessment = `Comprehensive damage assessment of historical structures in over 20 villages across the Al Haouz region`
  const earthquake_activities_list_stabilization = `Emergency stabilization of damaged heritage buildings using reversible techniques that don't compromise future restoration`
  const earthquake_activities_list_documentation = `Detailed 3D documentation and architectural surveys of damaged structures to guide accurate reconstruction`
  const earthquake_activities_list_coordination = `Coordination with government agencies, UNESCO, and international conservation organizations`
  const earthquake_activities_list_engagement = `Community workshops to incorporate local knowledge and ensure cultural appropriateness of reconstruction plans`

  // Update the Tinmel Mosque goals with more specific objectives
  const tinmel_mosque_goals_recover = `Recover and catalog original architectural elements, including carved stucco and wooden elements`
  const tinmel_mosque_goals_develop = `Develop a comprehensive restoration plan based on historical documentation and archaeological evidence`
  const tinmel_mosque_goals_train = `Train local craftspeople in traditional lime mortar preparation, earthen construction, and decorative techniques`
  const tinmel_mosque_goals_create = `Create a visitor interpretation center explaining the mosque's historical significance and restoration process`

  // Update the project goals with more specific objectives
  const earthquake_goals_document = `Document and preserve the unique earthen building techniques of the High Atlas region`
  const earthquake_goals_implement = `Implement seismically-resistant reconstruction methods that respect local architectural traditions`
  const earthquake_goals_develop = `Develop capacity among local craftspeople through hands-on training workshops`
  const earthquake_goals_restore = `Restore key heritage sites while improving their resilience to future earthquakes`
  const earthquake_goals_create = `Create a digital archive of traditional building knowledge for future generations`

  // Update the timeline with more specific phases
  const earthquake_timeline_phase1 = `Phase 1: Emergency assessment and documentation (Completed - October 2023)`
  const earthquake_timeline_phase2 = `Phase 2: Stabilization of at-risk structures (Completed - December 2023)`
  const earthquake_timeline_phase3 = `Phase 3: Community engagement and planning (Ongoing - January-June 2024)`
  const earthquake_timeline_phase4 = `Phase 4: Restoration of priority heritage sites (Ongoing - April 2024-December 2025)`
  const earthquake_timeline_phase5 = `Phase 5: Knowledge transfer and capacity building (2024-2026)`

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-transparent"
        style={{
          height: "60vh",
          backgroundImage: `url('https://images.unsplash.com/photo-1722411927625-0e478acf502b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
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
                <span className="text-xs font-medium text-white">{t("restoration")}</span>
              </div>
              <h1 className="font-tomato mb-4 text-3xl font-bold leading-tight text-shadow text-white md:text-4xl lg:text-5xl">
                {t("earthquake_reconstruction_title")}
              </h1>
              <p className="mb-6 text-base text-shadow text-white/90 max-w-lg">
                {t("earthquake_reconstruction_description")}
              </p>
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
                <p className="mb-6">{t("earthquake_reconstruction_about")}</p>
                <p className="mb-6">{t("earthquake_reconstruction_about_2")}</p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t("earthquake_activities")}</h3>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span>{t("earthquake_activities_list_assessment")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span>{t("earthquake_activities_list_stabilization")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span>{t("earthquake_activities_list_documentation")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span>{t("earthquake_activities_list_coordination")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span>{t("earthquake_activities_list_engagement")}</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t("tinmel_mosque")}</h3>
                <p>{t("tinmel_mosque_text")}</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span>{t("tinmel_mosque_goals_recover")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span>{t("tinmel_mosque_goals_develop")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span>{t("tinmel_mosque_goals_train")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span>{t("tinmel_mosque_goals_create")}</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t("collaborative_approach")}</h3>
                <p>{t("collaborative_approach_text")}</p>
                <p>{t("collaborative_approach_text_2")}</p>
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
                      <p className="text-gray-700 font-tomato">{t("earthquake_reconstruction_date")}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 font-tomato">{t("location")}</p>
                      <p className="text-gray-700 font-tomato">{t("earthquake_reconstruction_location")}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 font-tomato">{t("contributors")}</p>
                      <p className="text-gray-700 font-tomato">85+ specialists and volunteers</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-none font-tomato">
                    {t("support_project")}
                  </Button>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-md border border-gray-200 mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-tomato">{t("goals")}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700 font-tomato">{t("earthquake_goals_document")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700 font-tomato">{t("earthquake_goals_implement")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700 font-tomato">{t("earthquake_goals_develop")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700 font-tomato">{t("earthquake_goals_restore")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700 font-tomato">{t("earthquake_goals_create")}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-md border border-gray-200 mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-tomato">{t("timeline")}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700 font-tomato">{t("earthquake_timeline_phase1")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700 font-tomato">{t("earthquake_timeline_phase2")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700 font-tomato">{t("earthquake_timeline_phase3")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700 font-tomato">{t("earthquake_timeline_phase4")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700 font-tomato">{t("earthquake_timeline_phase5")}</span>
                  </li>
                </ul>
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
                    src="https://images.unsplash.com/photo-1603714228681-b399854b8f80?q=80&w=1974&auto=format&fit=crop"
                    alt={`Gallery image ${index}`}
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
