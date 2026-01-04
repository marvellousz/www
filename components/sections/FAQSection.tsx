"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { animationVariants, viewportOptions } from "@/lib/animations"

export function FAQSection() {
  const faqs = [
    {
      question: "How fast will I see results?",
      answer: "We typically deliver the initial MVP within 2 weeks. You'll see daily progress updates and have access to our staging environment from day one."
    },
    {
      question: "Why shouldn't I just hire freelancers or build it myself?",
      answer: "Freelancers can be unreliable and managing them takes time. Building it yourself distracts from business growth. We provide a managed, senior team that delivers guaranteed results."
    },
    {
      question: "What's included in the MVP package?",
      answer: "Everything you need to launch: Full-stack development, database setup, authentication, payment integration, basic analytics, and deployment to a production environment."
    },
    {
      question: "What happens after the MVP is done?",
      answer: "We offer a seamless transition to our Growth Retainer for ongoing development, or we can hand off the code to your in-house team with full documentation."
    },
    {
      question: "What if I want the full product, not just an MVP?",
      answer: "We can scale up! Our architecture is designed to grow. We'll simply extend the roadmap and continue building features based on your prioritized backlog."
    }
  ]

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 relative z-10">
      <div className="container mx-auto max-w-4xl w-full">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={animationVariants.staggerContainer}
          className="space-y-16 sm:space-y-20"
        >
          <motion.div variants={animationVariants.slideUp} className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#0E1117] border border-[#0E1117] mb-6">
              <span className="text-sm font-medium text-white uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight mb-4 text-[#0E1117]">
              Got Questions? We've<br />
              Got Answers
            </h2>
            <p className="text-lg sm:text-xl text-[#64748B]">
              Simple explanations for your most important questions
            </p>
          </motion.div>

          <motion.div variants={animationVariants.slideUp}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-[#E2E8F0] rounded-xl px-6 py-2 hover:border-[#0E1117] transition-colors"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-[#0E1117] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-[#64748B] leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
