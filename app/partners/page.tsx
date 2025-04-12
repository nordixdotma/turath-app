"use client"

import type React from "react"

import { useLanguage } from "@/hooks/use-language"
import { Container } from "@/components/ui/container"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Calendar, Award, Users, Gift, Briefcase, Heart, ChevronRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function PartnersPage() {
  const { t } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [donationType, setDonationType] = useState("one-time")
  const [donationAmount, setDonationAmount] = useState("100")

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
            "url('https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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

      {/* Donation Section */}
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
              <h2 className="font-tomato text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("make_donation")}</h2>
              <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-2xl mx-auto font-tomato">{t("make_donation_description")}</p>
            </div>

            <div className="max-w-2xl mx-auto bg-white p-8 rounded-md shadow-sm border border-gray-100">
              <Tabs defaultValue="one-time" onValueChange={(value) => setDonationType(value)}>
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="one-time">{t("one_time_donation")}</TabsTrigger>
                  <TabsTrigger value="recurring">{t("recurring_donation")}</TabsTrigger>
                </TabsList>

                <form onSubmit={handleDonationSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 font-tomato">{t("donation_amount")}</h3>
                    <div className="grid grid-cols-4 gap-3 mb-4">
                      {["50", "100", "250", "500"].map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant={donationAmount === amount ? "default" : "outline"}
                          className={cn(
                            "rounded-none font-tomato",
                            donationAmount === amount
                              ? "bg-primary hover:bg-primary/90"
                              : "border-gray-300 hover:bg-gray-50",
                          )}
                          onClick={() => setDonationAmount(amount)}
                        >
                          {amount} MAD
                        </Button>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Input
                        type="text"
                        placeholder={t("custom_amount")}
                        className="rounded-none border-gray-300 focus:border-primary focus:ring-primary"
                        onChange={(e) => setDonationAmount(e.target.value)}
                        value={!["50", "100", "250", "500"].includes(donationAmount) ? donationAmount : ""}
                      />
                      <span className="text-gray-700 font-tomato">MAD</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 font-tomato">{t("donor_information")}</h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
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
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 font-tomato">{t("payment_information")}</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="cardNumber" className="text-sm font-medium text-gray-700 font-tomato">
                          {t("card_number")} *
                        </label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          required
                          className="rounded-none border-gray-300 focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="expDate" className="text-sm font-medium text-gray-700 font-tomato">
                            {t("expiration_date")} *
                          </label>
                          <Input
                            id="expDate"
                            name="expDate"
                            placeholder="MM/YY"
                            required
                            className="rounded-none border-gray-300 focus:border-primary focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="cvv" className="text-sm font-medium text-gray-700 font-tomato">
                            {t("cvv")} *
                          </label>
                          <Input
                            id="cvv"
                            name="cvv"
                            required
                            className="rounded-none border-gray-300 focus:border-primary focus:ring-primary"
                          />
                        </div>
                      </div>
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
                        {t("donate_button")}
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
                      {t("donation_success")}
                    </div>
                  )}
                </form>
              </Tabs>
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
