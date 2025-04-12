"use client"

import { useLanguage } from "@/hooks/use-language"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, MapPin, Target, Users, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

export default function PostEarthquakeProjectPage() {
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
            src="https://images.unsplash.com/photo-1722411927625-0e478acf502b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Post-Earthquake Reconstruction"
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
              {t("earthquake_reconstruction_title")}
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">{t("earthquake_reconstruction_description")}</p>
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
                <p>{t("earthquake_reconstruction_about")}</p>
                <p>{t("earthquake_reconstruction_about_2")}</p>
                <h3 className="text-xl font-bold mt-8 mb-4">{t("earthquake_activities")}</h3>
                <ul>
                  <li>
                    <strong>Damage Assessment:</strong> Conducting comprehensive surveys of affected heritage sites to
                    document the extent of damage.
                  </li>
                  <li>
                    <strong>Emergency Stabilization:</strong> Implementing immediate measures to prevent further
                    collapse or deterioration of damaged structures.
                  </li>
                  <li>
                    <strong>Documentation:</strong> Creating detailed records of architectural elements, including
                    photogrammetry and 3D scanning of damaged sites.
                  </li>
                  <li>
                    <strong>Expert Coordination:</strong> Establishing a platform for local and international
                    specialists to exchange expertise and best practices for heritage reconstruction.
                  </li>
                  <li>
                    <strong>Community Engagement:</strong> Working with local communities to incorporate their knowledge
                    and needs into reconstruction plans.
                  </li>
                </ul>
                <h3 className="text-xl font-bold mt-8 mb-4">{t("tinmel_mosque")}</h3>
                <p>
                  The Tinmel Mosque restoration project represents a cornerstone of Turath's post-earthquake efforts.
                  Built in 1156, this mosque was not only an architectural treasure but also a symbol of Morocco's rich
                  religious and cultural heritage. The restoration project aims to:
                </p>
                <ul>
                  <li>Carefully recover and catalog original building materials where possible</li>
                  <li>Develop a restoration plan that respects historical construction techniques</li>
                  <li>Train local craftspeople in traditional building methods</li>
                  <li>Create a sustainable management plan for the restored site</li>
                </ul>
                <h3 className="text-xl font-bold mt-8 mb-4">{t("collaborative_approach")}</h3>
                <p>
                  Turath's approach emphasizes collaboration between various stakeholders, including local communities,
                  Moroccan heritage authorities, international conservation organizations, academic institutions, and
                  traditional craftspeople. This collaborative framework ensures that reconstruction efforts not only
                  restore physical structures but also preserve the intangible cultural heritage associated with these
                  sites.
                </p>
                <p>
                  The project involved planning a platform for specialists, including foreigners, to exchange expertise,
                  highlighting their commitment to collaborative recovery efforts.
                </p>
              </div>
            </div>

            {/* Gallery Section */}
            <div className="bg-white p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6 font-tomato">{t("gallery")}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1603714228681-b399854b8f80?q=80&w=1974&auto=format&fit=crop"
                    alt="Damaged heritage site"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1603714228681-b399854b8f80?q=80&w=1974&auto=format&fit=crop"
                    alt="Assessment team at work"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1603714228681-b399854b8f80?q=80&w=1974&auto=format&fit=crop"
                    alt="Documentation process"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1603714228681-b399854b8f80?q=80&w=1974&auto=format&fit=crop"
                    alt="Stabilization work"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1603714228681-b399854b8f80?q=80&w=1974&auto=format&fit=crop"
                    alt="Community meeting"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1603714228681-b399854b8f80?q=80&w=1974&auto=format&fit=crop"
                    alt="Restoration planning"
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
                    <p className="font-medium">{t("date")}</p>
                    <p className="text-gray-600">September 2023 - Ongoing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">{t("location")}</p>
                    <p className="text-gray-600">Al Haouz region, including Tinmel Mosque</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">{t("contributors")}</p>
                    <p className="text-gray-600">85+ specialists and volunteers</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">{t("goals")}</p>
                    <ul className="text-gray-600 list-disc ml-4">
                      <li>Document earthquake damage to heritage sites</li>
                      <li>Implement emergency stabilization measures</li>
                      <li>Develop restoration plans for damaged structures</li>
                      <li>Restore the Tinmel Mosque</li>
                      <li>Create a knowledge-sharing platform for heritage reconstruction</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">{t("timeline")}</p>
                    <ul className="text-gray-600 list-disc ml-4">
                      <li>Phase 1: Emergency Assessment (Completed)</li>
                      <li>Phase 2: Stabilization (In Progress)</li>
                      <li>Phase 3: Detailed Documentation (In Progress)</li>
                      <li>Phase 4: Restoration Planning (Starting 2024)</li>
                      <li>Phase 5: Implementation (2025-2027)</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-primary/10 p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 font-tomato">{t("support_project")}</h3>
              <p className="text-gray-700 mb-6">
                Support our efforts to restore and preserve Morocco's earthquake-damaged heritage sites. Your
                contribution can help rebuild these important cultural landmarks.
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
