"use client"

import type React from "react"

import { useLanguage } from "@/hooks/use-language"
import { Container } from "@/components/ui/container"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Hero section animation
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Form section animation
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Map section animation
  const { ref: mapRef, inView: mapInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally handle the form submission to a backend
    setFormSubmitted(true)
    // Reset form after submission
    const form = e.target as HTMLFormElement
    form.reset()
    // Reset submission status after 5 seconds
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  return (
    <div>
      {/* Combined Hero and Contact Form Section with shared background */}
      <section
        className="relative bg-transparent"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1594240500626-1e6d5c6de7dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
                <span className="text-xs font-medium text-white">Get in Touch</span>
              </div>
              <h1 className="font-tomato mb-4 text-3xl font-bold leading-tight text-shadow text-white md:text-4xl lg:text-5xl">
                Contact Us
              </h1>
              <p className="mb-6 text-base text-shadow text-white/90 max-w-lg">
                Have questions about our work or want to get involved? We'd love to hear from you.
              </p>
            </div>
          </Container>
        </div>

        {/* Contact Form and Info Section - now part of the same background */}
        <div className="relative pb-32">
          <Container className="max-w-6xl mx-auto relative z-10">
            <div
              ref={formRef}
              className={cn(
                "grid md:grid-cols-2 gap-12 items-start transition-all duration-700",
                formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
            >
              {/* Contact Form */}
              <div className="bg-black/50 backdrop-blur-sm p-8 rounded-md">
                <h2 className="font-tomato text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                <div className="h-1 w-16 bg-primary mb-8"></div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-white font-tomato">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        className="rounded-none border-gray-700 bg-black/30 text-white focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-white font-tomato">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        className="rounded-none border-gray-700 bg-black/30 text-white focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white font-tomato">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="rounded-none border-gray-700 bg-black/30 text-white focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-white font-tomato">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      className="rounded-none border-gray-700 bg-black/30 text-white focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white font-tomato">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="rounded-none border-gray-700 bg-black/30 text-white focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <Button type="submit" className="bg-primary hover:bg-primary/90 text-white rounded-none font-tomato">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>

                  {formSubmitted && (
                    <div className="bg-green-900/50 border border-green-500 text-green-100 px-4 py-3 rounded-md font-tomato">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div className="bg-black/50 backdrop-blur-sm p-8 rounded-md">
                <h2 className="font-tomato text-3xl font-bold text-white mb-6">Contact Information</h2>
                <div className="h-1 w-16 bg-primary mb-8"></div>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-none bg-primary/20 mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-white font-tomato">Address</p>
                      <p className="mt-1 text-white/90 font-tomato">
                        Musée Mouassine, Derb El Hammam, Mouassine, Marrakech
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-none bg-primary/20 mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-white font-tomato">Phone</p>
                      <p className="mt-1 text-white/90 font-tomato">
                        <a href="tel:+212662388758" className="hover:text-primary transition-colors">
                          (+212) 662 388 758
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-none bg-primary/20 mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-white font-tomato">Email</p>
                      <p className="mt-1 text-white/90 font-tomato">
                        <a href="mailto:turath.marrakech@gmail.com" className="hover:text-primary transition-colors">
                          turath.marrakech@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="font-tomato text-xl font-bold text-white mb-4">Office Hours</h3>
                  <div className="space-y-2 text-white/90 font-tomato">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Map Section with its own background */}
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

        <div className="relative py-32">
          <Container className="max-w-6xl mx-auto relative z-10">
            <div
              ref={mapRef}
              className={cn(
                "transition-all duration-700",
                mapInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
            >
              <h2 className="font-tomato text-3xl font-bold text-white mb-6 text-center">Find Us</h2>
              <div className="h-1 w-16 bg-primary mx-auto mb-8"></div>

              <div className="h-[450px] w-full rounded-md overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0401014321166!2d-7.9952978!3d31.6309884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee9465ae0bf7%3A0x27332ef8ec3bea85!2sMus%C3%A9e%20Mouassine!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Turâth Association Location"
                ></iframe>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </div>
  )
}

