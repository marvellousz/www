"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { animationVariants } from "@/lib/animations"

export function HeroSection() {
  return (
    <section className="flex items-center justify-center px-4 sm:px-6 pt-32 sm:pt-40 pb-20 sm:pb-24 relative z-10 overflow-hidden min-h-[85vh]">

      <div className="container mx-auto max-w-5xl w-full relative z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={animationVariants.staggerContainer}
          className="text-center space-y-6 sm:space-y-8"
        >
          <motion.div
            variants={animationVariants.slideUp}
            className="flex items-center justify-center gap-2"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-blink"></div>
              <span className="text-sm font-medium text-[#0E1117]">Available for New Projects</span>
            </div>
          </motion.div>

          <motion.h1
            variants={animationVariants.slideUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.2] tracking-tight text-[#0E1117]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <div className="flex flex-col items-center">
              <span className="whitespace-nowrap">We Build Web & Mobile Apps</span>
              <span className="whitespace-nowrap">That Users Actually Want to Use</span>
            </div>
          </motion.h1>
          
          <motion.p
            variants={animationVariants.slideUp}
            className="text-base sm:text-lg md:text-xl text-[#64748B] leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            From sleek web applications to powerful mobile apps—we craft digital products that combine beautiful design with robust engineering to drive real business results.
          </motion.p>

          <motion.div
            variants={animationVariants.slideUp}
            className="flex justify-center pt-2"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Button
                className="bg-[#0E1117] text-white hover:bg-[#0E1117]/90 px-8 sm:px-10 py-5 sm:py-6 rounded-lg transition-all cursor-pointer shadow-lg font-semibold text-base sm:text-lg w-full sm:w-auto"
                style={{ fontFamily: 'var(--font-body)' }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book a Free MVP Call
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

