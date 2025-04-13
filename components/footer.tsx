"use client"

import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, Heart } from "lucide-react"
import { Container } from "@/components/ui/container"
import { useState } from "react"

export default function Footer() {
  const { t } = useLanguage()
  const [heartClicks, setHeartClicks] = useState(0)
  const [isHeartAnimating, setIsHeartAnimating] = useState(false)

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  // Update the usefulLinks array to match the header navigation
  const usefulLinks = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/volunteer", label: "volunteer" },
    { href: "/projects", label: "projects" },
    { href: "/partners", label: "partners" },
    { href: "/contact", label: "contact" },
  ]

  const contactInfo = [
    {
      icon: MapPin,
      title: "address",
      value: "address_value",
      link: false,
    },
    {
      icon: Phone,
      title: "phone",
      value: "phone_value",
      link: "tel:+212662388758",
    },
    {
      icon: Mail,
      title: "email",
      value: "email_value",
      link: "mailto:turath.marrakech@gmail.com",
    },
  ]

  const handleHeartClick = () => {
    setHeartClicks((prev) => prev + 1)
    setIsHeartAnimating(true)
    setTimeout(() => setIsHeartAnimating(false), 500)
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black relative">
      <Container className="max-w-6xl mx-auto relative z-10">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Vision */}
            <div>
              <Link href="/" className="inline-block mb-6">
                <span className="font-tomato text-2xl font-bold text-primary">Turâth</span>
              </Link>
              <p className="text-sm leading-relaxed text-white/80 mb-8 font-tomato">{t("vision_text")}</p>
              <div>
                <h4 className="mb-4 text-sm font-semibold text-primary font-tomato">{t("social_icons")}</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-none text-white bg-primary/20 transition-all duration-300 hover:bg-primary/40 hover:scale-110"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="font-tomato mb-6 text-xl font-bold text-primary">{t("useful_links")}</h3>
              <ul className="space-y-4">
                {usefulLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="inline-block text-white/80 transition-all duration-300 hover:text-primary relative group font-tomato"
                    >
                      {t(link.label)}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-tomato mb-6 text-xl font-bold text-primary">{t("contact_info")}</h3>
              <ul className="space-y-6">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-none bg-primary/20 mr-4">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-white font-tomato">{t(item.title)}</p>
                      {item.link ? (
                        <p className="mt-1 text-sm text-white/80 font-tomato">
                          <a href={typeof item.link === "string" ? item.link : undefined} className="transition-all duration-300 hover:text-primary relative group">
                            {t(item.value)}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                          </a>
                        </p>
                      ) : (
                        <p className="mt-1 text-sm text-white/80 font-tomato">{t(item.value)}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Copyright section */}
      <div className="border-t border-white/10 py-6 relative z-10">
        <Container className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70 font-tomato">
              © {currentYear} Turâth. {t("copyright")}
            </p>
            <p className="text-sm text-white/70 flex items-center font-tomato">
              {t("made_with")}
              <button onClick={handleHeartClick} className="mx-1 rounded-none p-1" aria-label="Click the heart">
                <Heart
                  className={`h-4 w-4 transition-all duration-300 ${
                    isHeartAnimating ? "scale-150 text-red-400" : "text-primary"
                  }`}
                  fill={heartClicks > 0 ? "#f87171" : "none"}
                />
                {heartClicks > 0 && <span className="sr-only">Heart clicked {heartClicks} times</span>}
              </button>
              {t("in_morocco")}
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}
