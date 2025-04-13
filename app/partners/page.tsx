"use client"

import type React from "react"

import { useLanguage } from "@/hooks/use-language"
import { Container } from "@/components/ui/container"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar, Award, Users, Gift, Briefcase, Heart, Mail } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import Image from "next/image"
import { useEffect } from "react"

export default function PartnersPage() {
  const { t, language } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [donationType, setDonationType] = useState("bmce")
  const [donationAmount, setDonationAmount] = useState("100")
  const [mounted, setMounted] = useState(false)

  // Add a new ref for the partners section
  // Add this with the other refs at the beginning of the component

  // Add this ref for the partners section
  const { ref: partnersRef, inView: partnersInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Add this after the other state declarations
  // const [mounted, setMounted] = useState(false)

  // Add this useEffect hook to handle mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  // Add this useEffect to handle language changes
  useEffect(() => {
    // Force remount of Swiper when language changes
    setMounted(false)
    setTimeout(() => {
      setMounted(true)
    }, 50)
  }, [language])

  // Add the partners data
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
    {
      name: "Ministère de la Jeunesse",
      logo: "https://mjcc.gov.ma/wp-content/uploads/2021/12/mjcc_black.svg",
    },
    {
      name: "ICESCO",
      logo: "https://icesco.org/wp-content/uploads/2023/05/logo-New.png",
    },
    {
      name: "Ville de Marrakech",
      logo: "https://www.ville-marrakech.ma/images/config/logo11.webp",
    },
    {
      name: "Fondation Mohammed V",
      logo: "https://www.fm5.ma/themes/custom/fm5/logo-en.svg",
    },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  // Hero section animation
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Partnership types section animation
  const { ref: typesRef, inView: typesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Benefits section animation
  const { ref: benefitsRef, inView: benefitsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Donation section animation
  const { ref: donationRef, inView: donationInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // CTA section animation
  const { ref: ctaRef, inView: ctaInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Partnership types
  const partnershipTypes = [
    {
      title: t("monthly_partner"),
      description: t("monthly_partner_description"),
      icon: Calendar,
    },
    {
      title: t("annual_partner"),
      description: t("annual_partner_description"),
      icon: Award,
    },
    {
      title: t("event_sponsor"),
      description: t("event_sponsor_description"),
      icon: Users,
    },
    {
      title: t("project_sponsor"),
      description: t("project_sponsor_description"),
      icon: Briefcase,
    },
    {
      title: t("in_kind_partner"),
      description: t("in_kind_partner_description"),
      icon: Gift,
    },
  ]

  // Partnership benefits
  const benefits = [
    {
      title: t("benefit_visibility_title"),
      description: t("benefit_visibility_description"),
      icon: Award,
    },
    {
      title: t("benefit_impact_title"),
      description: t("benefit_impact_description"),
      icon: Heart,
    },
    {
      title: t("benefit_network_title"),
      description: t("benefit_network_description"),
      icon: Users,
    },
    {
      title: t("benefit_events_access_title"),
      description: t("benefit_events_access_description"),
      icon: Calendar,
    },
  ]

  // Current Partners section animation
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleDonationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setFormSubmitted(true)
      setTimeout(() => setFormSubmitted(false), 5000)

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
      setDonationType("one-time")
      setDonationAmount("100")
    } catch (err) {
      setError("An error occurred. Please try again later.")
      console.error("Error submitting form:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-transparent"
        style={{
          backgroundImage:
            "url('/PHOTOS-JDP/P1388698.jpg')",
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
                <span className="text-xs font-medium text-white">{t("our_partners")}</span>
              </div>
              <h1 className="font-tomato mb-4 text-3xl font-bold leading-tight text-shadow text-white md:text-4xl lg:text-5xl">
                {t("partners_title")}
              </h1>
              <p className="mb-6 text-base text-shadow text-white/90 max-w-lg">{t("partners_subtitle")}</p>
            </div>
          </Container>
        </div>
      </section>

      {/* Current Partners Section */}
      <section className="py-16 bg-white">
        <Container className="max-w-6xl mx-auto">
          {/* Then update the ref in the partners section
          // Change the div ref from "inView" to "partnersInView" */}
          <div ref={partnersRef} className="w-full !opacity-100" style={{ opacity: "1 !important" }}>
            <div className="text-center mb-12">
              <h2 className="font-tomato text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("our_partners")}</h2>
              <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-2xl mx-auto font-tomato">{t("current_partners_description")}</p>
            </div>

            {mounted && (
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                dir={language === "ar" ? "rtl" : "ltr"}
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
                className="partners-swiper !opacity-100"
                style={{ opacity: 1 }}
              >
                {partners.map((partner, index) => (
                  <SwiperSlide key={index} style={{ opacity: 1 }}>
                    <div className="p-6 h-32 flex items-center justify-center">
                      <div className="relative h-full w-full">
                        <div className="relative h-full w-full flex items-center justify-center">
                          <div className="relative h-20 w-full bg-white rounded-md p-3 border border-gray-100 shadow-sm">
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

      {/* Partnership Types Section */}
      <section className="py-20 bg-white">
        <Container className="max-w-6xl mx-auto">
          <div
            ref={typesRef}
            className={cn(
              "transition-all duration-700",
              typesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <div className="text-center mb-16">
              <h2 className="font-tomato text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("partnership_types")}
              </h2>
              <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-2xl mx-auto font-tomato">{t("partnership_types_description")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
                <div
                  key={index}
                  className={cn(
                    "bg-gray-50 p-6 rounded-md border border-gray-100 shadow-sm transition-all duration-700 hover:shadow-md hover:border-primary/20",
                    typesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                      <type.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-tomato">{type.title}</h3>
                      <p className="text-gray-700 font-tomato">{type.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-20 bg-gray-50">
        <Container className="max-w-6xl mx-auto">
          <div
            ref={benefitsRef}
            className={cn(
              "transition-all duration-700",
              benefitsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <div className="text-center mb-16">
              <h2 className="font-tomato text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("partnership_benefits")}
              </h2>
              <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-2xl mx-auto font-tomato">{t("partnership_benefits_description")}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={cn(
                    "bg-white p-6 rounded-md border border-gray-100 shadow-sm transition-all duration-700",
                    benefitsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-tomato">{benefit.title}</h3>
                      <p className="text-gray-700 font-tomato">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Donation & Banking Information Section - Redesigned */}
      <section className="py-20 bg-gray-50">
        <Container className="max-w-6xl mx-auto">
          <div
            ref={donationRef}
            className={cn(
              "transition-all duration-700",
              donationInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <div className="text-center mb-16">
              <h2 className="font-tomato text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("banking_details")}</h2>
              <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-2xl mx-auto font-tomato">{t("banking_details_description")}</p>
            </div>

            {/* Tabs for different banks */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="border-b border-gray-200">
                  <nav className="flex -mb-px">
                    <button
                      className={`py-4 px-6 font-medium text-sm border-b-2 ${
                        donationType === "bmce"
                          ? "border-primary text-primary"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                      onClick={() => setDonationType("bmce")}
                    >
                      BMCE Bank
                    </button>
                    <button
                      className={`py-4 px-6 font-medium text-sm border-b-2 ${
                        donationType === "cih"
                          ? "border-primary text-primary"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                      onClick={() => setDonationType("cih")}
                    >
                      CIH Bank
                    </button>
                    <button
                      className={`py-4 px-6 font-medium text-sm border-b-2 ${
                        donationType === "bp"
                          ? "border-primary text-primary"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                      onClick={() => setDonationType("bp")}
                    >
                      Banque Populaire
                    </button>
                  </nav>
                </div>

                {/* BMCE Bank Details */}
                {donationType === "bmce" && (
                  <div className="p-8 space-y-6">
                    <div className="flex items-center mb-6">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 font-tomato">BMCE Bank</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-tomato">
                            {t("account_holder")}
                          </h4>
                          <p className="text-lg font-medium text-gray-900 font-tomato">Association Turath</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-tomato">
                            {t("account_number")}
                          </h4>
                          <p className="text-lg font-medium text-gray-900 font-tomato">
                            011 780 000 012 000 000 123 45
                          </p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-tomato">
                            {t("branch")}
                          </h4>
                          <p className="text-lg font-medium text-gray-900 font-tomato">Marrakech Guéliz</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-tomato">
                            {t("iban")}
                          </h4>
                          <p className="text-lg font-medium text-gray-900 font-tomato">
                            MA123 011 780 000 012 000 000 123 45
                          </p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-tomato">
                            {t("swift_code")}
                          </h4>
                          <p className="text-lg font-medium text-gray-900 font-tomato">BMCEMAGC</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-tomato">
                            {t("reference")}
                          </h4>
                          <p className="text-lg font-medium text-gray-900 font-tomato">{t("donation_reference")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* CIH Bank Details */}
                {donationType === "cih" && (
                  <div className="p-8 space-y-6">
                    <div className="flex items-center mb-6">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 font-tomato">CIH Bank</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-tomato">
                            {t("account_holder")}
                          </h4>
                          <p className="text-lg font-medium text-gray-900 font-tomato">Association Turath</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-tomato">
                            {t("account_number")}
                          </h4>
                          <p className="text-lg font-medium text-gray-900 font-tomato">
                            230 810 000 016 000 000 789 12
                          </p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-tomato">
                            {t("branch")}
                          </h4>
                          <p className="text-lg font-medium text-gray-900 font-tomato">Marrakech Mohammed VI</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-tomato">
                            {t("iban")}
                          </h4>
                          <p className="text-lg font-medium text-gray-900 font-tomato">
                            MA123 230 810 000 016 000 000 789 12
                          </p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-tomato">
                            {t("swift_code")}
                          </h4>
                          <p className="text-lg font-medium text-gray-900 font-tomato">CIHMMAMCXXX</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-tomato">
                            {t("reference")}
                          </h4>
                          <p className="text-lg font-medium text-gray-900 font-tomato">{t("donation_reference")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Banque Populaire Details */}
                {donationType === "bp" && (
                  <div className="p-8 space-y-6">
                    <div className="flex items-center mb-6">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 font-tomato">Banque Populaire</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-tomato">
                            {t("account_holder")}
                          </h4>
                          <p className="text-lg font-medium text-gray-900 font-tomato">Association Turath</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-tomato">
                            {t("account_number")}
                          </h4>
                          <p className="text-lg font-medium text-gray-900 font-tomato">181 810 21211 456789012345 67</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-tomato">
                            {t("branch")}
                          </h4>
                          <p className="text-lg font-medium text-gray-900 font-tomato">Marrakech Menara</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-tomato">
                            {t("iban")}
                          </h4>
                          <p className="text-lg font-medium text-gray-900 font-tomato">
                            MA123 181 810 21211 456789012345 67
                          </p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-tomato">
                            {t("swift_code")}
                          </h4>
                          <p className="text-lg font-medium text-gray-900 font-tomato">BCPOMAMC</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-tomato">
                            {t("reference")}
                          </h4>
                          <p className="text-lg font-medium text-gray-900 font-tomato">{t("donation_reference")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Donation Note */}
                <div className="bg-gray-50 p-6 border-t border-gray-200">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                      <Gift className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm font-tomato mb-4">{t("donation_note")}</p>
                      <div className="flex items-center">
                        <a
                          href="mailto:finance@turath.org"
                          className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          finance@turath.org
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 relative bg-transparent"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Add a dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>

        <Container className="max-w-6xl mx-auto relative z-10">
          <div
            ref={ctaRef}
            className={cn(
              "max-w-3xl mx-auto text-center transition-all duration-700",
              ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <h2 className="font-tomato text-3xl md:text-4xl font-bold text-white mb-6">{t("become_partner_cta")}</h2>
            <p className="text-white/90 mb-8 font-tomato">{t("become_partner_description")}</p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none font-tomato">
                  {t("contact_us")}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
