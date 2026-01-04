"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { PROJECTS } from "@/lib/constants"
import { animationVariants, viewportOptions } from "@/lib/animations"
import { useEffect, useRef } from "react"

export function WorkSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let scrollPosition = 0
    const scrollSpeed = 0.5
    let animationFrameId: number
    let isScrolling = true

    const getSingleSetWidth = () => {
      const firstCard = container.querySelector('.project-card')
      if (!firstCard) return 0
      const cardWidth = (firstCard as HTMLElement).offsetWidth
      const gap = 24
      return PROJECTS.length * (cardWidth + gap) - gap
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
    <section id="work" className="py-20 sm:py-32 px-4 sm:px-6 relative z-10">
      <div className="container mx-auto max-w-7xl w-full">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={animationVariants.staggerContainer}
          className="space-y-12 sm:space-y-16"
        >
          <motion.div variants={animationVariants.slideUp} className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] mb-6">
              <span className="text-sm font-medium text-[#0E1117]">Our Work</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight text-[#0E1117] mb-4">
              Our Projects
            </h2>
            <p className="text-lg sm:text-xl text-[#64748B]">
              A comprehensive showcase of our work including UI/UX designs, full-stack applications, freelance projects, and more.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-20"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-20"></div>
            
            <div 
              ref={scrollContainerRef}
              className="overflow-x-hidden flex gap-6 sm:gap-8 pb-4 cursor-grab active:cursor-grabbing relative"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex gap-6 sm:gap-8 min-w-max">
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={index}
                  variants={animationVariants.slideUp}
                  className="bg-white rounded-2xl border border-[#E2E8F0] p-0 w-[260px] sm:w-[300px] flex flex-col hover:shadow-xl transition-shadow cursor-pointer group overflow-hidden flex-shrink-0 project-card"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="w-full h-40 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 relative overflow-hidden">
                    {project.imageUrl ? (
                      <img 
                        src={project.imageUrl} 
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] opacity-10"></div>
                        <div className="text-center relative z-10 flex items-center justify-center h-full">
                          <div>
                            <div className="text-4xl mb-1">🚀</div>
                            <div className="text-xs text-[#64748B] font-medium">Project Preview</div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="p-4 sm:p-6 flex flex-col space-y-3">
                    <div className="px-3 py-1 bg-gray-100 rounded-full w-fit">
                      <span className="text-xs font-medium text-[#64748B] uppercase tracking-wider">
                        {project.stack[0] || "Project"}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-medium text-[#0E1117]">
                      {project.name}
                    </h3>

                    <p className="text-sm text-[#64748B] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-[#64748B]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-sm font-medium text-[#0E1117] hover:text-[#64748B] transition-colors mt-2"
                      >
                        Live Preview
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={`duplicate-${index}`}
                  variants={animationVariants.slideUp}
                  className="bg-white rounded-2xl border border-[#E2E8F0] p-0 w-[260px] sm:w-[300px] flex flex-col hover:shadow-xl transition-shadow cursor-pointer group overflow-hidden flex-shrink-0 project-card"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="w-full h-40 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 relative overflow-hidden">
                    {project.imageUrl ? (
                      <img 
                        src={project.imageUrl} 
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] opacity-10"></div>
                        <div className="text-center relative z-10 flex items-center justify-center h-full">
                          <div>
                            <div className="text-4xl mb-1">🚀</div>
                            <div className="text-xs text-[#64748B] font-medium">Project Preview</div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col space-y-3">
                    <div className="px-3 py-1 bg-gray-100 rounded-full w-fit">
                      <span className="text-xs font-medium text-[#64748B] uppercase tracking-wider">
                        {project.stack[0] || "Project"}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-medium text-[#0E1117]">
                      {project.name}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-[#64748B]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-sm font-medium text-[#0E1117] hover:text-[#64748B] transition-colors mt-2"
                      >
                        Live Preview
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={`duplicate-2-${index}`}
                  variants={animationVariants.slideUp}
                  className="bg-white rounded-2xl border border-[#E2E8F0] p-0 w-[260px] sm:w-[300px] flex flex-col hover:shadow-xl transition-shadow cursor-pointer group overflow-hidden flex-shrink-0 project-card"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="w-full h-40 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 relative overflow-hidden">
                    {project.imageUrl ? (
                      <img 
                        src={project.imageUrl} 
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] opacity-10"></div>
                        <div className="text-center relative z-10 flex items-center justify-center h-full">
                          <div>
                            <div className="text-4xl mb-1">🚀</div>
                            <div className="text-xs text-[#64748B] font-medium">Project Preview</div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col space-y-3">
                    <div className="px-3 py-1 bg-gray-100 rounded-full w-fit">
                      <span className="text-xs font-medium text-[#64748B] uppercase tracking-wider">
                        {project.stack[0] || "Project"}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-medium text-[#0E1117]">
                      {project.name}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-[#64748B]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-sm font-medium text-[#0E1117] hover:text-[#64748B] transition-colors mt-2"
                      >
                        Live Preview
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
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
