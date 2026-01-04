"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { animationVariants, viewportOptions } from "@/lib/animations"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$2,499",
      period: "one-time",
      description: "Perfect for small businesses looking to establish their digital presence",
      features: [
        "Custom Website Design",
        "Frontend Development",
        "Mobile Responsive",
        "Basic SEO Setup",
        "Contact Forms",
        "3 Revisions",
        "30 Days Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$4,999",
      period: "one-time",
      description: "Ideal for growing businesses that need advanced functionality",
      features: [
        "Everything in Starter",
        "Advanced Animations",
        "Custom UI/UX Design",
        "CMS Integration",
        "E-commerce Ready",
        "Analytics Setup",
        "Unlimited Revisions",
        "90 Days Support",
        "Performance Optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "For large-scale projects requiring custom solutions and ongoing support",
      features: [
        "Everything in Professional",
        "Custom Backend Development",
        "Advanced Design System",
        "Third-party Integrations",
        "Advanced Security",
        "Multi-language Support",
        "Dedicated Project Manager",
        "Priority Support",
        "6 Months Maintenance"
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 sm:py-32 px-4 sm:px-6 relative z-10">
      <div className="container mx-auto max-w-7xl w-full">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={animationVariants.staggerContainer}
          className="space-y-16 sm:space-y-20"
        >
          <motion.div variants={animationVariants.slideUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight mb-4 text-[#0E1117]">
              Pricing
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={animationVariants.slideUp}
                className={`relative p-8 rounded-2xl border-2 ${
                  plan.popular 
                    ? 'border-[#0E1117] bg-[#0E1117] text-white' 
                    : 'border-[#E2E8F0] bg-white'
                } hover:shadow-xl transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0E1117] text-white text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-medium mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-semibold">
                        {plan.price}
                      </span>
                      {plan.period !== "quote" && (
                        <span className={`text-lg ${plan.popular ? 'text-white/70' : 'text-[#64748B]'}`}>
                          /{plan.period}
                        </span>
                      )}
                    </div>
                    <p className={`mt-3 text-sm ${plan.popular ? 'text-white/80' : 'text-[#64748B]'}`}>
                      {plan.description}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-white' : 'text-[#0E1117]'}`} />
                        <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-[#64748B]'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full py-6 rounded-lg font-medium transition-all ${
                      plan.popular
                        ? 'bg-white text-[#0E1117] hover:bg-white/90'
                        : 'bg-[#0E1117] text-white hover:bg-[#0E1117]/90'
                    }`}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
