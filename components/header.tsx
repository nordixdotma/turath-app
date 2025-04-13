"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight, Globe, Home, Briefcase, Info, Heart, Phone, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false)
  const [volunteerDropdownOpen, setVolunteerDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0", 10) * -1)
      }
    }

    return () => {
      // Cleanup in case component unmounts while menu is open
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Update the project links in the header to include all projects
  const projectLinks = [
    { href: "/projects/heritage-days", label: t("heritage_days_title") },
    { href: "/projects/post-earthquake-reconstruction", label: t("earthquake_reconstruction_title") },
    { href: "/projects/unveiling-hidden-treasures", label: t("hidden_treasures_title") },
  ]

  // Add volunteer dropdown links
  const volunteerLinks = [
    { href: "/volunteer", label: t("notre_bureau") },
    { href: "/volunteer/devenir-membre", label: t("devenir_membre") },
    { href: "/volunteer/devenir-volontaire", label: t("devenir_volontaire") },
  ]

  const navLinks = [
    { href: "/", label: "home", icon: Home },
    // Projects link is handled separately
    { href: "/partners", label: "partners", icon: Briefcase },
    { href: "/about", label: "about", icon: Info },
    // Volunteer link is now handled separately
    { href: "/contact", label: "contact", icon: Phone },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 z-40 w-full transition-all duration-300",
        scrolled ? "bg-white shadow-md border-b border-gray-100" : "bg-transparent",
      )}
    >
      <Container className="max-w-6xl mx-auto">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-20">
            <div className="relative h-14 w-28 md:h-16 md:w-32">
              <Image
                src={scrolled ? "/turath.png" : "/favicon.png"}
                alt={t("logo_alt")}
                fill
                className="object-contain transition-opacity duration-300"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Home link */}
            <Link
              href="/"
              className={`text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 relative group font-tomato ${
                scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-white/80"
              } ${pathname === "/" ? "text-primary" : ""}`}
            >
              {t("home")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Projects dropdown */}
            <div className="relative group">
              <Link
                href="/projects"
                className={`flex items-center text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 relative group font-tomato ${
                  scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-white/80"
                } ${pathname.includes("/projects") ? "text-primary" : ""}`}
                onMouseEnter={() => setProjectsDropdownOpen(true)}
                onMouseLeave={() => setProjectsDropdownOpen(false)}
              >
                {t("projects")}
                <ChevronDown className="ml-1 h-4 w-4" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* Projects dropdown menu */}
              <div
                className={`absolute left-0 mt-2 w-64 md:w-72 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ${
                  projectsDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={() => setProjectsDropdownOpen(true)}
                onMouseLeave={() => setProjectsDropdownOpen(false)}
              >
                <div className="py-1">
                  {projectLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="block px-4 py-2 text-sm md:text-base text-gray-800 hover:bg-gray-100 hover:text-primary font-tomato"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Volunteer dropdown */}
            <div className="relative group">
              <Link
                href="/volunteer"
                className={`flex items-center text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 relative group font-tomato ${
                  scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-white/80"
                } ${pathname.includes("/volunteer") ? "text-primary" : ""}`}
                onMouseEnter={() => setVolunteerDropdownOpen(true)}
                onMouseLeave={() => setVolunteerDropdownOpen(false)}
              >
                {t("volunteer")}
                <ChevronDown className="ml-1 h-4 w-4" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* Volunteer dropdown menu */}
              <div
                className={`absolute left-0 mt-2 w-64 md:w-72 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ${
                  volunteerDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={() => setVolunteerDropdownOpen(true)}
                onMouseLeave={() => setVolunteerDropdownOpen(false)}
              >
                <div className="py-1">
                  {volunteerLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="block px-4 py-2 text-sm md:text-base text-gray-800 hover:bg-gray-100 hover:text-primary font-tomato"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Other nav links */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 relative group font-tomato ${
                  scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-white/80"
                } ${pathname === link.href ? "text-primary" : ""}`}
              >
                {t(link.label)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Language Selector and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Language dropdown - visible only on md screens and up */}
            <div className="hidden md:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="sm"
                    className={`transition-all duration-300 min-w-[60px] md:min-w-[70px] md:h-9 rounded-md font-tomato ${
                      scrolled
                        ? "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200"
                        : "bg-white/20 text-white border-white/30 hover:bg-white/30"
                    }`}
                  >
                    <Globe className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                    {language.toUpperCase()}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="rounded-xl">
                  <DropdownMenuItem onClick={() => setLanguage("en")} className="font-tomato">
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("fr")} className="font-tomato">
                    Français
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("ar")} className="font-tomato">
                    العربية
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden ${scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/20"}`}
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">{t("menu_toggle_alt")}</span>
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu - Improved UI/UX */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop overlay with blur effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
              onClick={toggleMenu}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[350px] z-50 md:hidden overflow-y-auto bg-black/80 backdrop-blur-md shadow-2xl"
            >
              <div className="h-full flex flex-col">
                {/* Header with logo and close button */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <Link href="/" className="inline-block" onClick={toggleMenu}>
                    <div className="relative h-10 w-28">
                      <Image src="/favicon.png" alt="Turâth Logo" fill className="object-contain" priority />
                    </div>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMenu}
                    className="rounded-full hover:bg-white/10 text-white"
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>

                {/* Navigation links */}
                <div className="flex-1 overflow-y-auto py-6 px-4">
                  <nav className="space-y-1">
                    {/* Home link */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Link
                        href="/"
                        className="flex items-center py-3 px-4 rounded-xl text-white hover:bg-white/10 transition-colors"
                        onClick={toggleMenu}
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mr-4">
                          <Home className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-lg font-tomato">{t("home")}</span>
                        <ChevronRight className="h-4 w-4 ml-auto" />
                      </Link>
                    </motion.div>

                    {/* Projects link with nested links */}
                    <div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                      >
                        <Link
                          href="/projects"
                          className="flex items-center py-3 px-4 rounded-xl text-white hover:bg-white/10 transition-colors"
                          onClick={toggleMenu}
                        >
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mr-4">
                            <Briefcase className="h-5 w-5" />
                          </div>
                          <span className="font-medium text-lg font-tomato">{t("projects")}</span>
                          <ChevronRight className="h-4 w-4 ml-auto" />
                        </Link>
                      </motion.div>

                      {/* Project sub-links */}
                      <div className="ml-14 mt-2 space-y-1">
                        {projectLinks.map((link, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.05 }}
                          >
                            <Link
                              href={link.href}
                              className="flex items-center py-2 px-4 rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                              onClick={toggleMenu}
                            >
                              <span className="font-medium text-sm font-tomato">{link.label}</span>
                              <ChevronRight className="h-3 w-3 ml-auto" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Volunteer link with nested links */}
                    <div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                      >
                        <Link
                          href="/volunteer"
                          className="flex items-center py-3 px-4 rounded-xl text-white hover:bg-white/10 transition-colors"
                          onClick={toggleMenu}
                        >
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mr-4">
                            <Heart className="h-5 w-5" />
                          </div>
                          <span className="font-medium text-lg font-tomato">{t("volunteer")}</span>
                          <ChevronRight className="h-4 w-4 ml-auto" />
                        </Link>
                      </motion.div>

                      {/* Volunteer sub-links */}
                      <div className="ml-14 mt-2 space-y-1">
                        {volunteerLinks.map((link, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.05 }}
                          >
                            <Link
                              href={link.href}
                              className="flex items-center py-2 px-4 rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                              onClick={toggleMenu}
                            >
                              <span className="font-medium text-sm font-tomato">{link.label}</span>
                              <ChevronRight className="h-3 w-3 ml-auto" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Other nav links */}
                    {navLinks.slice(1).map((link, index) => {
                      const Icon = link.icon
                      return (
                        <motion.div
                          key={link.label}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.35 + index * 0.05 }}
                        >
                          <Link
                            href={link.href}
                            className="flex items-center py-3 px-4 rounded-xl text-white hover:bg-white/10 transition-colors"
                            onClick={toggleMenu}
                          >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mr-4">
                              <Icon className="h-5 w-5" />
                            </div>
                            <span className="font-medium text-lg font-tomato">{t(link.label)}</span>
                            <ChevronRight className="h-4 w-4 ml-auto" />
                          </Link>
                        </motion.div>
                      )
                    })}
                  </nav>
                </div>

                {/* Language selection */}
                <div className="p-6 border-t border-white/10">
                  <p className="text-sm font-medium text-white/70 mb-3 font-tomato">{t("select_language")}</p>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { code: "en", label: "English" },
                      { code: "fr", label: "Français" },
                      { code: "ar", label: "العربية" },
                    ].map((lang) => (
                      <Button
                        key={lang.code}
                        size="sm"
                        variant={language === lang.code ? "default" : "outline"}
                        onClick={() => {
                          setLanguage(lang.code as "en" | "fr" | "ar")
                          toggleMenu()
                        }}
                        className={cn(
                          "rounded-full font-tomato",
                          language === lang.code
                            ? "bg-primary hover:bg-primary/90 text-white" // Added explicit text-white
                            : "border-white/20 text-primary hover:bg-white/10 hover:text-white",
                        )}
                      >
                        {lang.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
