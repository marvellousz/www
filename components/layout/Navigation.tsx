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
        className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:max-w-2xl"
      >
        <div className="bg-gray-100/95 backdrop-blur-sm rounded-full px-5 py-2.5 flex items-center justify-between gap-6 shadow-sm min-w-0">
          <motion.a
            href="#hero"
            className="flex items-center gap-2 flex-shrink-0 min-w-0"
            whileHover={{ scale: 1.02 }}
            transition={springTransition}
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <Image 
              src="/marvlock-logo.png" 
              alt="Project Marvlock Logo" 
              width={20} 
              height={20}
              className="w-5 h-5 flex-shrink-0"
            />
            <span className="text-sm font-medium whitespace-nowrap text-[#0E1117]">Project Marvlock</span>
          </motion.a>
          
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <motion.a
              href="#work"
              className="px-3 py-1.5 text-sm text-[#0E1117] hover:text-[#0E1117]/70 transition-colors cursor-pointer whitespace-nowrap"
              whileHover={{ y: -1 }}
              transition={springTransition}
              style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
            >
              Work
            </motion.a>
            <motion.a
              href="https://cal.com/pranavmurali"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-white bg-[#0E1117] hover:bg-[#0E1117]/90 transition-all cursor-pointer rounded-lg shadow-sm whitespace-nowrap"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={springTransition}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Book a Call
            </motion.a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 text-[#0E1117] hover:text-[#0E1117]/70 transition-colors flex-shrink-0"
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
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:hidden"
            >
              <div className="bg-gray-100/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex flex-col gap-1">
                  {NAVIGATION_ITEMS.map((item) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 text-sm text-[#64748B] hover:text-[#0E1117] hover:bg-[#F8FAFC] transition-colors cursor-pointer rounded-lg text-center"
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

