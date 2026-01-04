"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function ChatButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.a
        href="https://cal.com/pranavmurali"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-full shadow-lg transition-colors group cursor-pointer"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        <MessageCircle className="w-5 h-5 text-[#0E1117]" />
        <span className="text-sm font-medium text-[#0E1117] hidden sm:inline">Chat with us</span>
      </motion.a>
    </motion.div>
  )
}
