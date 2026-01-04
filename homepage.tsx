"use client"

import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { ApproachSection } from "@/components/sections/ApproachSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { WorkSection } from "@/components/sections/WorkSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { ChatButton } from "@/components/ui/chat-button"
import { useNavbarVisibility } from "@/hooks/useNavbarVisibility"

export default function Component() {
  const isNavbarVisible = useNavbarVisibility()

  return (
    <div className="bg-white text-[#0E1117] relative overflow-x-hidden">
      {/* Subtle background gradient blurs for entire page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-peach-200/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-3/4 left-1/3 w-80 h-80 bg-orange-100/25 rounded-full blur-3xl opacity-35"></div>
        <div className="absolute bottom-1/3 left-1/2 w-64 h-64 bg-peach-200/20 rounded-full blur-3xl opacity-30"></div>
      </div>
      <div className="relative z-10">
        <Navigation isVisible={isNavbarVisible} />
      <HeroSection />
      <ApproachSection />
      <ServicesSection />
      <WorkSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <ChatButton />
      <Footer />
      </div>
    </div>
  )
}
