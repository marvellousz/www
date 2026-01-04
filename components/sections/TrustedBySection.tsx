"use client"

import { motion } from "framer-motion"
import { animationVariants, viewportOptions } from "@/lib/animations"

export function TrustedBySection() {
  const companies = [
    "Vercel",
    "Stripe",
    "Linear",
    "Notion",
    "Raycast",
    "Supabase"
  ]

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 relative z-10 border-y border-[#E2E8F0]/30">
      <div className="container mx-auto max-w-7xl w-full">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={animationVariants.staggerContainer}
          className="space-y-8"
        >
          <motion.p
            variants={animationVariants.slideUp}
            className="text-center text-sm sm:text-base font-medium text-[#64748B] uppercase tracking-wider"
          >
            Trusted by engineering teams at
          </motion.p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                variants={animationVariants.slideUp}
                className="text-2xl sm:text-3xl font-bold text-[#94A3B8] hover:text-[#0E1117] transition-colors cursor-pointer"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
