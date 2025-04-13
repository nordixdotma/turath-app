"use client"

import type React from "react"

import { useLanguage } from "@/hooks/use-language"
import { Container } from "@/components/ui/container"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, FileText, Users, Calendar, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function DevenirMembrePage() {
  const { t } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [error, setError] = useState("")

  // Hero section animation
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Benefits section animation
  const { ref: benefitsRef, inView: benefitsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Form section animation
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Membership benefits
  const benefits = [
    {
      title: t("benefit_events_title"),
      description: t("benefit_events_description"),
      icon: Calendar,
    },
    {
      title: t("benefit_networking_title"),
      description: t("benefit_networking_description"),
      icon: Users,
    },
    {
      title: t("benefit_updates_title"),
      description: t("benefit_updates_description"),
      icon: FileText,
    },
    {
      title: t("benefit_voting_title"),
      description: t("benefit_voting_description"),
      icon: CheckCircle,
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setFormSubmitted(true)
      form.reset()
      setTimeout(() => setFormSubmitted(false), 5000)
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
            "url('/PHOTOS-JDP/P1388784.jpg')",
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
                <span className="text-xs font-medium text-white">{t("join_team")}</span>
              </div>
              <h1 className="font-tomato mb-4 text-3xl font-bold leading-tight text-shadow text-white md:text-4xl lg:text-5xl">
                {t("devenir_membre")}
              </h1>
              <p className="mb-6 text-base text-shadow text-white/90 max-w-lg">{t("become_member_description")}</p>
            </div>
          </Container>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
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
                {t("membership_benefits")}
              </h2>
              <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-2xl mx-auto font-tomato">{t("membership_benefits_description")}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={cn(
                    "bg-gray-50 p-6 rounded-md border border-gray-100 shadow-sm transition-all duration-700",
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

            <div className="mt-12 text-center">
              <p className="text-gray-700 mb-6 font-tomato">{t("membership_fee")}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Membership Form Section */}
      <section className="py-20 bg-gray-50">
        <Container className="max-w-6xl mx-auto">
          <div
            ref={formRef}
            className={cn(
              "transition-all duration-700",
              formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <div className="text-center mb-16">
              <h2 className="font-tomato text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("apply_membership")}</h2>
              <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-2xl mx-auto font-tomato">{t("apply_membership_description")}</p>
            </div>

            <div className="max-w-2xl mx-auto bg-white p-8 rounded-md shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700 font-tomato">
                      {t("first_name")} *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      className="rounded-none border-gray-300 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700 font-tomato">
                      {t("last_name")} *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      className="rounded-none border-gray-300 focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 font-tomato">
                    {t("email_label")} *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="rounded-none border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 font-tomato">
                    {t("phone")} *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    required
                    className="rounded-none border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="profession" className="text-sm font-medium text-gray-700 font-tomato">
                    {t("profession")}
                  </label>
                  <Input
                    id="profession"
                    name="profession"
                    className="rounded-none border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="motivation" className="text-sm font-medium text-gray-700 font-tomato">
                    {t("why_join_turath")} *
                  </label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    required
                    rows={4}
                    className="rounded-none border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="membershipType" className="text-sm font-medium text-gray-700 font-tomato">
                    {t("membership_type")} *
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="membershipType" value="regular" required className="text-primary" />
                      <span className="text-gray-700 font-tomato">{t("regular_membership")}</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="membershipType" value="student" required className="text-primary" />
                      <span className="text-gray-700 font-tomato">{t("student_membership")}</span>
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white rounded-none font-tomato w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <span className="animate-spin mr-2">⏳</span>
                      {t("processing")}
                    </span>
                  ) : (
                    <span className="flex items-center">
                      {t("submit_application")}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md font-tomato">
                    {t("form_error")}
                  </div>
                )}

                {formSubmitted && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md font-tomato">
                    {t("membership_form_success")}
                  </div>
                )}
              </form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
