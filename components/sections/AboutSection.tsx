"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 relative z-10">
      <div className="container mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center order-2 lg:order-1"
          >
            <div className="relative w-full h-full">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-cyan-500/30 blur-3xl"
              ></motion.div>
              <motion.div
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: [90, 0, 90],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/25 via-purple-500/25 to-pink-500/20 blur-2xl"
              ></motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-white/10 via-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 shadow-2xl">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Crafted with clarity.<br />
              Built with intent.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] leading-relaxed">
              We're developers and designers who think in systems, not pixels. Our work blends precision engineering with thoughtful design.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

