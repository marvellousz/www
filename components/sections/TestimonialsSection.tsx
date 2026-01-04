"use client"

import { motion } from "framer-motion"
import { animationVariants, viewportOptions } from "@/lib/animations"
import { Quote, Star } from "lucide-react"
import { useEffect, useRef } from "react"

export function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      quote: "Working with this team transformed our product. The attention to detail and technical expertise is unmatched.",
      author: "Sarah Chen",
      role: "CEO @Random Startup"
    },
    {
      quote: "They delivered exactly what we needed, on time and within budget. The code quality is exceptional.",
      author: "Michael Rodriguez",
      role: "CTO @Random Startup"
    },
    {
      quote: "The design work is world-class. Our users love the new interface, and our conversion rates have doubled.",
      author: "Emily Johnson",
      role: "Product Lead @Random Startup"
    },
    {
      quote: "Outstanding communication and professionalism throughout the entire project. They truly understand our vision.",
      author: "David Kim",
      role: "Founder @Random Startup"
    },
    {
      quote: "The team's ability to turn complex requirements into elegant solutions is remarkable. Highly recommended!",
      author: "Lisa Anderson",
      role: "VP of Engineering @Random Startup"
    },
    {
      quote: "We've worked with many agencies, but this team stands out. Their creativity and technical skills are top-notch.",
      author: "James Wilson",
      role: "Director of Product @Random Startup"
    },
    {
      quote: "The project was completed ahead of schedule and exceeded all our expectations. Truly exceptional work.",
      author: "Maria Garcia",
      role: "Head of Design, Random Startup"
    },
    {
      quote: "Their attention to user experience and modern design principles helped us achieve record engagement rates.",
      author: "Robert Taylor",
      role: "CMO @Random Startup"
    }
  ]

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let scrollPosition = 0
    const scrollSpeed = 0.5
    let animationFrameId: number
    let isScrolling = true

    const getSingleSetWidth = () => {
      const firstCard = container.querySelector('.testimonial-card')
      if (!firstCard) return 0
      const cardWidth = (firstCard as HTMLElement).offsetWidth
      const gap = 32
      return testimonials.length * (cardWidth + gap) - gap
    }

    const scroll = () => {
      if (!isScrolling) {
        animationFrameId = requestAnimationFrame(scroll)
        return
      }

      scrollPosition += scrollSpeed
      const singleSetWidth = getSingleSetWidth()
      
      if (scrollPosition >= singleSetWidth) {
        scrollPosition = 0
      }
      
      container.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    const handleMouseEnter = () => {
      isScrolling = false
    }
    const handleMouseLeave = () => {
      isScrolling = true
    }

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrameId)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section id="testimonials" className="py-20 sm:py-32 px-4 sm:px-6 relative z-10">
      <div className="container mx-auto max-w-7xl w-full">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={animationVariants.staggerContainer}
          className="space-y-12 sm:space-y-16"
        >
          <motion.div variants={animationVariants.slideUp} className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] mb-6">
              <span className="text-sm font-medium text-[#0E1117]">Testimonials</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight mb-4 text-[#0E1117]">
              Don't Take Our Word. Take Their's.
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-20"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-20"></div>
            
            <div 
              ref={scrollContainerRef}
              className="overflow-x-hidden flex gap-8 sm:gap-12 pb-4 cursor-grab active:cursor-grabbing relative"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex gap-8 sm:gap-12 min-w-max">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={animationVariants.slideUp}
                    className="p-8 rounded-2xl border border-[#E2E8F0] bg-white hover:shadow-xl transition-all flex-shrink-0 testimonial-card w-[320px] sm:w-[380px]"
                  >
                    <div className="flex items-start gap-3 mb-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                      />
                      <div>
                        <p className="font-semibold text-[#0E1117] text-lg mb-1">{testimonial.author}</p>
                        <p className="text-sm text-[#64748B]">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-base text-[#64748B] leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </motion.div>
                ))}
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={`duplicate-${index}`}
                    variants={animationVariants.slideUp}
                    className="p-8 rounded-2xl border border-[#E2E8F0] bg-white hover:shadow-xl transition-all flex-shrink-0 testimonial-card w-[320px] sm:w-[380px]"
                  >
                    <div className="flex items-start gap-3 mb-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                      />
                      <div>
                        <p className="font-semibold text-[#0E1117] text-lg mb-1">{testimonial.author}</p>
                        <p className="text-sm text-[#64748B]">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-base text-[#64748B] leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </motion.div>
                ))}
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={`duplicate-2-${index}`}
                    variants={animationVariants.slideUp}
                    className="p-8 rounded-2xl border border-[#E2E8F0] bg-white hover:shadow-xl transition-all flex-shrink-0 testimonial-card w-[320px] sm:w-[380px]"
                  >
                    <div className="flex items-start gap-3 mb-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                      />
                      <div>
                        <p className="font-semibold text-[#0E1117] text-lg mb-1">{testimonial.author}</p>
                        <p className="text-sm text-[#64748B]">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-base text-[#64748B] leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
