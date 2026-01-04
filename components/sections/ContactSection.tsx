"use client"

import { motion } from "framer-motion"
import { CONTACT_EMAIL } from "@/lib/constants"
import { animationVariants, viewportOptions } from "@/lib/animations"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative z-10">
      <div className="container mx-auto max-w-4xl w-full relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={animationVariants.staggerContainer}
          className="text-center space-y-8 sm:space-y-10"
        >
          <motion.div variants={animationVariants.slideUp} className="space-y-4 sm:space-y-6">
            <h2 
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-[#0E1117]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Ready to scale?
            </h2>
            <p 
              className="text-lg sm:text-xl text-[#64748B] max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Join the high-performing teams building the future with Project Marvlock.
            </p>
          </motion.div>

          <motion.div
            variants={animationVariants.slideUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
          >
            <motion.a
              href={`mailto:${CONTACT_EMAIL}?subject=New Project Inquiry`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-[#0E1117] text-white rounded-full font-medium text-base sm:text-lg shadow-lg hover:bg-[#0E1117]/90 transition-all cursor-pointer"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Get Started Now
            </motion.a>
            <motion.a
              href="https://cal.com/pranavmurali"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ opacity: 0.7 }}
              className="text-base sm:text-lg text-[#0E1117] font-normal cursor-pointer"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Book a demo
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

