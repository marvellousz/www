"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { NAVIGATION_ITEMS } from "@/lib/constants"
import { springTransition } from "@/lib/animations"

interface NavigationProps {
  isVisible: boolean
}

export function Navigation({ isVisible }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-auto sm:max-w-6xl"
      >
        <div className="bg-[#151820]/95 backdrop-blur-md border border-white/10 rounded-full px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between gap-2 sm:gap-6 shadow-lg shadow-black/20 min-w-0">
          <motion.a
            href="#hero"
            className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 min-w-0"
            whileHover={{ scale: 1.05 }}
            transition={springTransition}
          >
            <Image 
              src="/marvlock-logo.png" 
              alt="Project Marvlock Logo" 
              width={24} 
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
            />
            <span className="text-xs sm:text-sm font-medium hidden sm:inline whitespace-nowrap">Project Marvlock</span>
          </motion.a>
          
          <div className="hidden md:flex items-center gap-1 flex-shrink-0">
            {NAVIGATION_ITEMS.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-sm text-[#94A3B8] hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/5 relative group whitespace-nowrap"
                whileHover={{ y: -2 }}
                transition={springTransition}
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white/30 group-hover:w-3/4 transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 text-[#94A3B8] hover:text-white transition-colors flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:hidden"
            >
              <div className="bg-[#151820]/95 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-lg shadow-black/20">
                <div className="flex flex-col gap-1">
                  {NAVIGATION_ITEMS.map((item) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 text-sm text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors cursor-pointer rounded-lg text-center"
                      whileTap={{ scale: 0.98 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

