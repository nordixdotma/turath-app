"use client"

import { useLanguage } from "@/hooks/use-language"
import { Container } from "@/components/ui/container"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function VolunteerPage() {
  const { t } = useLanguage()

  // Hero section animation
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Board section animation
  const { ref: boardRef, inView: boardInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // FAQ section animation
  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // CTA section animation
  const { ref: ctaRef, inView: ctaInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Board members data with actual images
  const boardMembers = [
    {
      name: "Soad Belkeziz",
      position: "president",
      image: "https://associationturath.org/wp-content/uploads/2023/07/SOAD-BELKZIZ.jpeg",
    },
    {
      name: "Faten Safieddine",
      position: "vice_president",
      image: "https://associationturath.org/wp-content/uploads/2023/07/ksfdjhsdf-768x768.png",
    },
    {
      name: "Mounia Benrhanem",
      position: "treasurer",
      image: "https://associationturath.org/wp-content/uploads/2023/07/tre-768x768.png",
    },
    {
      name: "Siham El Mellas",
      position: "deputy_treasurer",
      image: "https://associationturath.org/wp-content/uploads/2023/07/vice--768x768.png",
    },
    {
      name: "Mehdi Belkaziz",
      position: "secretary_general",
      image: "https://associationturath.org/wp-content/uploads/2023/07/mehdi--768x768.png",
    },
  ]

  // FAQ items
  const faqItems = [
    {
      question: "How to be a volunteer?",
      answer:
        "To become a volunteer with Turâth, you can fill out our online application form, attend one of our information sessions, or contact us directly. We welcome individuals of all backgrounds who are passionate about preserving Marrakech's cultural heritage.",
    },
    {
      question: "What should you know before apply",
      answer:
        "Before applying, it's helpful to understand our mission and values, the time commitment required, and the types of volunteer opportunities available. We recommend reviewing our website and social media to get a better sense of our work and the impact we're making.",
    },
    {
      question: "Information about application process",
      answer:
        "Our application process includes filling out a form, an interview with our volunteer coordinator, and an orientation session. The entire process typically takes 2-3 weeks, and we have regular intake periods throughout the year.",
    },
    {
      question: "Volunteer Appreciation Events",
      answer:
        "We regularly host appreciation events to recognize the invaluable contributions of our volunteers. These include annual galas, certificates of recognition, and special access to cultural events and sites in Marrakech.",
    },
    {
      question: "Career and Personal Development",
      answer:
        "Volunteering with Turâth offers numerous opportunities for personal and professional growth. You'll develop new skills, expand your network, and gain valuable experience in heritage preservation, event management, research, and more.",
    },
    {
      question: "Making a Lasting Impact",
      answer:
        "Our volunteers play a crucial role in preserving Marrakech's rich cultural heritage for future generations. Your contributions will help document, restore, and promote the unique architectural, artistic, and cultural elements that make this city special.",
    },
    {
      question: "Spread awareness about volunteering",
      answer:
        "Help us grow our volunteer community by sharing your experience with friends and family. You can also follow and share our social media posts, participate in our public events, and become an ambassador for heritage preservation in your community.",
    },
    {
      question: "How you could become an external partner",
      answer:
        "Organizations interested in partnering with Turâth can reach out to our partnership team. We collaborate with educational institutions, businesses, government agencies, and other NGOs on various projects and initiatives.",
    },
    {
      question: "What Volunteer Benefits Does Turâth Offer?",
      answer:
        "Our volunteers receive training, networking opportunities, invitations to exclusive events, recognition for their contributions, and the satisfaction of making a meaningful impact on cultural heritage preservation.",
    },
    {
      question: "Volunteer Training and Support",
      answer:
        "We provide comprehensive training and ongoing support to all our volunteers. This includes orientation sessions, skill-specific workshops, mentoring from experienced team members, and regular check-ins to ensure you have everything you need to succeed.",
    },
    {
      question: "Flexible Volunteering Opportunities",
      answer:
        "We understand that our volunteers have various commitments, so we offer flexible scheduling options. You can volunteer on a regular basis, for specific events or projects, or remotely, depending on your availability and interests.",
    },
    {
      question: "Diverse Volunteer Roles",
      answer:
        "Turâth offers a wide range of volunteer roles to match different skills and interests. These include tour guides, researchers, event coordinators, social media managers, photographers, translators, administrative support, and more.",
    },
  ]

  // Split FAQ items into two columns for desktop
  const leftColumnFAQs = faqItems.slice(0, Math.ceil(faqItems.length / 2))
  const rightColumnFAQs = faqItems.slice(Math.ceil(faqItems.length / 2))

  return (
    <div>
      {/* Combined Hero and Board Members Section with shared background */}
      <section
        className="relative bg-transparent"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1628642004970-1da51c8c7dec?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
                <span className="text-xs font-medium text-white">Join Our Team</span>
              </div>
              <h1 className="font-tomato mb-4 text-3xl font-bold leading-tight text-shadow text-white md:text-4xl lg:text-5xl">
                Volunteer With Turâth
              </h1>
              <p className="mb-6 text-base text-shadow text-white/90 max-w-lg">
                Be part of our mission to preserve and promote the rich cultural heritage of Marrakech
              </p>
            </div>
          </Container>
        </div>

        {/* Board Members Section - now part of the same background */}
        <div className="relative pb-32">
          <Container className="max-w-6xl mx-auto relative z-10">
            <div
              ref={boardRef}
              className={cn(
                "transition-all duration-700",
                boardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
            >
              <div className="text-center mb-16">
                <h2 className="font-tomato text-3xl md:text-4xl font-bold text-white mb-4">Our Board</h2>
                <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
                <p className="text-white/90 max-w-2xl mx-auto font-tomato">
                  Meet the people behind this amazing initiative
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {boardMembers.map((member, index) => (
                  <div
                    key={index}
                    className={cn(
                      "group transition-all duration-700",
                      boardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-64 overflow-hidden rounded-md shadow-md mb-4">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                    <h3 className="text-lg font-bold text-white font-tomato">{member.name}</h3>
                    <p className="text-sm text-primary font-medium uppercase tracking-wider font-tomato">
                      {t(member.position)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Combined FAQ and CTA Section with shared background */}
      <section
        className="relative bg-transparent"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606819852165-126177dea9d9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Add a dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* FAQ Section - now with two columns on desktop */}
        <div className="relative pt-32 pb-20">
          <Container className="max-w-6xl mx-auto relative z-10">
            <div
              ref={faqRef}
              className={cn(
                "transition-all duration-700",
                faqInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
            >
              <div className="text-center mb-16">
                <h2 className="font-tomato text-3xl md:text-4xl font-bold text-white mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
                <p className="text-white/90 max-w-2xl mx-auto font-tomato">
                  Everything you need to know about volunteering with Turâth
                </p>
              </div>

              {/* Two-column layout for desktop */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="bg-black/50 backdrop-blur-sm p-6 rounded-md">
                  <Accordion type="single" collapsible className="w-full">
                    {leftColumnFAQs.map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-left-${index}`}
                        className={cn(
                          "border-b border-white/20 transition-all duration-700",
                          faqInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                        )}
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        <AccordionTrigger className="text-left font-tomato font-medium text-white hover:text-primary">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-white/90 font-tomato">{item.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Right Column */}
                <div className="bg-black/50 backdrop-blur-sm p-6 rounded-md">
                  <Accordion type="single" collapsible className="w-full">
                    {rightColumnFAQs.map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-right-${index}`}
                        className={cn(
                          "border-b border-white/20 transition-all duration-700",
                          faqInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                        )}
                        style={{ transitionDelay: `${(index + leftColumnFAQs.length) * 50}ms` }}
                      >
                        <AccordionTrigger className="text-left font-tomato font-medium text-white hover:text-primary">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-white/90 font-tomato">{item.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* CTA Section - now part of the same background */}
        <div className="relative pb-32">
          <Container className="max-w-6xl mx-auto relative z-10">
            <div
              ref={ctaRef}
              className={cn(
                "bg-primary/90 backdrop-blur-sm rounded-md overflow-hidden border border-primary/30 transition-all duration-700",
                ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 md:p-12">
                  <h2 className="font-tomato text-3xl font-bold text-white mb-6">
                    Join Us in Preserving Marrakech's Rich Heritage!
                  </h2>
                  <p className="text-white/90 font-tomato mb-8">
                    Be a part of Turâth's passionate team and make a difference in preserving the cultural legacy of
                    Marrakech. Join us as a volunteer and embark on an enriching journey filled with learning,
                    networking, and community engagement.
                  </p>
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-none font-tomato">
                    Apply Now
                  </Button>
                </div>
                <div className="relative hidden md:block">
                  <Image
                    src="https://images.unsplash.com/photo-1606819852165-126177dea9d9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Volunteers working together"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/50"></div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </div>
  )
}

