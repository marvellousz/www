"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SOCIAL_LINKS } from "@/lib/constants"
import { springTransition } from "@/lib/animations"

export function Footer() {
  return (
    <footer className="pt-12 sm:pt-16 pb-6 px-4 sm:px-6 border-t border-white/5 relative z-10 bg-black">
      <div className="container mx-auto max-w-6xl w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image 
              src="/marvlock-logo.png" 
              alt="Project Marvlock Logo" 
              width={20} 
              height={20}
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            <div className="text-xs sm:text-sm font-medium">Project Marvlock</div>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#94A3B8] hover:text-white transition-colors cursor-pointer group"
                whileHover={{ y: -2 }}
                transition={springTransition}
              >
                {link.name === "X" ? (
                  <span className="group-hover:scale-110 transition-transform">
                    <link.icon />
                  </span>
                ) : (
                  <link.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
                )}
                <span className="hidden sm:inline">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
        <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/5 text-center text-xs sm:text-sm text-[#94A3B8]">
          © 2025 Project Marvlock. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

