"use client"

import { motion } from "framer-motion"
import { animationVariants, viewportOptions } from "@/lib/animations"

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 relative z-10">
      <div className="container mx-auto max-w-7xl w-full">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={animationVariants.staggerContainer}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
        </motion.div>
      </div>
    </section>
  )
}

