"use client"

import { motion } from "framer-motion"
import { animationVariants, viewportOptions } from "@/lib/animations"

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 sm:py-32 px-4 sm:px-6 relative z-10">
      <div className="container mx-auto max-w-4xl w-full">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={animationVariants.staggerContainer}
          className="space-y-8 sm:space-y-12"
        >
          <motion.div variants={animationVariants.slideUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              What We Do
            </h2>
            <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
          </motion.div>

          <motion.div 
            variants={animationVariants.slideUp}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5 rounded-2xl sm:rounded-3xl blur-3xl"></div>
            <div className="relative p-6 sm:p-8 md:p-12 lg:p-16 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#94A3B8] leading-relaxed text-center space-y-4 sm:space-y-6">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-medium leading-tight mb-4 sm:mb-6">
                  We help brands and founders bring their digital ideas to life.
                </p>
                <p className="leading-relaxed text-sm sm:text-base">
                  Through good design that speaks clarity, clean code that performs flawlessly, and a process that just works, we transform your vision into reality. Whether it's crafting intuitive interfaces, building scalable systems, or creating dashboards that turn data into decisions, we deliver digital products engineered with precision.
                </p>
                <p className="text-white/90 font-medium text-sm sm:text-base">
                  Good design, clean code, and a process that just works.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

