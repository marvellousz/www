"use client"

import { motion } from "framer-motion"
import { animationVariants, viewportOptions } from "@/lib/animations"
import { Palette, Globe, Smartphone, Code2, Presentation, Tablet } from "lucide-react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export function ServicesSection() {
  const services = [
    {
      title: "Brand Identity",
      description: "Get a differentiated and unique brand identity to stand out your product from competitors.",
      illustration: "brand",
      icons: ["Ai", "infinity"]
    },
    {
      title: "Website Design",
      description: "Turn your website into a eye-dropping marketing machine to turn visitors into customers.",
      illustration: "website",
      icons: ["infinity", "lightning"]
    },
    {
      title: "Product Design",
      description: "Make your product so delightful to, it instantly becomes the thing to talk about in the industry.",
      illustration: "product",
      icons: ["infinity", "N", "square"]
    },
    {
      title: "Web Development",
      description: "Build fast, scalable, and modern web applications with cutting-edge technologies and best practices.",
      illustration: "webdev",
      icons: ["code", "rocket", "W"]
    },
    {
      title: "App Development",
      description: "Create native and cross-platform mobile applications that deliver exceptional user experiences.",
      illustration: "app",
      icons: ["cube", "rocket", "code"]
    },
    {
      title: "Pitch Deck & Collaterals",
      description: "Fulfill all marketing design requirements with a team that feels like your own.",
      illustration: "pitch",
      icons: ["grid", "trash"]
    }
  ]

  const renderIllustration = (type: string) => {
    switch (type) {
      case "brand":
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-[#1E1E1E] rounded-lg border border-[#2D2D2D] p-4 shadow-sm w-full overflow-hidden">
              <DotLottieReact
                src="https://lottie.host/ef32f5c6-fb72-4316-b6cb-2003b8f47e6a/rmnzQkYKkb.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzWeZsMVsPp4qSfeuNw5YcsZMALGrJIjO97Cy8H" 
                  alt="AI" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzWzmSfUYioaCjdrBhpmGy7Te6F9ZUlckQtuNSI" 
                  alt="Figma" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )
      case "website":
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-[#1E1E1E] rounded-lg border border-[#2D2D2D] p-4 shadow-sm w-full overflow-hidden">
              <DotLottieReact
                src="https://lottie.host/4e2f59f1-24df-4dcc-9df2-9950fd6f9bd1/WJhi64AFOQ.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzWzmSfUYioaCjdrBhpmGy7Te6F9ZUlckQtuNSI" 
                  alt="Figma" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzWv4VgfA7GBOtCH3IarZi1WRn6om4PwEyVhsgS" 
                  alt="Framer" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )
      case "product":
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-[#1E1E1E] rounded-lg border border-[#2D2D2D] p-4 shadow-sm w-full overflow-hidden">
              <DotLottieReact
                src="https://lottie.host/fc75e8ec-9039-4676-9f73-5453cb200479/63I8e8JBYb.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzWzmSfUYioaCjdrBhpmGy7Te6F9ZUlckQtuNSI" 
                  alt="Figma" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzW3pFhhMe21QOI0roAJCzZXBmwha4RS9Ptxueq" 
                  alt="Notion" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzWo5s9T1NCsSpH2FPtymi6KkbXJgAdw7LM1YDr" 
                  alt="Linear" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )
      case "webdev":
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-[#1E1E1E] rounded-lg border border-[#2D2D2D] p-4 shadow-sm w-full overflow-hidden">
              <DotLottieReact
                src="https://lottie.host/457fd8b1-2056-4651-a8b7-56ba08b5d9de/oz1W6AhJTF.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzWEAtfUPo9A46PCmS5D8fnQkOsi3RKX7VbzcrH" 
                  alt="Coding" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzWv4VgfA7GBOtCH3IarZi1WRn6om4PwEyVhsgS" 
                  alt="Framer" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzW52x8xHE9xs5uJUKrLyqc2advWBVG3kenhflj" 
                  alt="Webflow" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )
      case "app":
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-[#1E1E1E] rounded-lg border border-[#2D2D2D] p-4 shadow-sm w-full overflow-hidden">
              <DotLottieReact
                src="https://lottie.host/e257894e-ffd4-4b61-a21f-c9ba2b61ae74/xN6bZuLDMf.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <rect x="9" y="5" width="6" height="10" rx="1" fill="currentColor" opacity="0.3"/>
                  <circle cx="12" cy="17" r="1" fill="currentColor"/>
                </svg>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzWv4VgfA7GBOtCH3IarZi1WRn6om4PwEyVhsgS" 
                  alt="Framer" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzWEAtfUPo9A46PCmS5D8fnQkOsi3RKX7VbzcrH" 
                  alt="Coding" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )
      case "pitch":
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-[#1E1E1E] rounded-lg border border-[#2D2D2D] p-4 shadow-sm w-full overflow-hidden">
              <DotLottieReact
                src="https://lottie.host/194d1d90-fa30-4a7f-87a8-d42c3a35ea56/C9ncrgqcst.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="9" height="9" fill="#00A4EF"/>
                  <rect x="13" y="2" width="9" height="9" fill="#00A4EF"/>
                  <rect x="2" y="13" width="9" height="9" fill="#00A4EF"/>
                  <rect x="13" y="13" width="9" height="9" fill="#00A4EF"/>
                </svg>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="14" rx="1" fill="#D83B01"/>
                  <rect x="5" y="7" width="14" height="2" fill="white" opacity="0.8"/>
                  <rect x="5" y="11" width="10" height="1.5" fill="white" opacity="0.6"/>
                  <rect x="5" y="14" width="12" height="1.5" fill="white" opacity="0.6"/>
                  <rect x="5" y="17" width="8" height="1.5" fill="white" opacity="0.6"/>
                </svg>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section id="services" className="py-20 sm:py-32 px-4 sm:px-6 relative z-10">
      <div className="container mx-auto max-w-7xl w-full">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={animationVariants.staggerContainer}
          className="space-y-16 sm:space-y-20"
        >
          <motion.div variants={animationVariants.slideUp} className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] mb-6">
              <span className="text-sm font-medium text-[#0E1117]">Our Services</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight mb-4 text-[#0E1117]">
              Anything you need. Done for you.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={animationVariants.slideUp}
                className="p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] bg-white cursor-pointer"
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="flex flex-col items-center space-y-4 mb-6">
                  {renderIllustration(service.illustration)}
                </div>
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-medium text-[#0E1117] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-base text-[#64748B] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
