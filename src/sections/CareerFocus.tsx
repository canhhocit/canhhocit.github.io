import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ChevronRight } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { CAREER_FOCUS_DATA } from '../data/portfolio'

export const CareerFocus: React.FC = () => {
  return (
    <section id="career-focus" className="py-20 md:py-28 border-t border-neutral-200/60 bg-stone-50/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="04 / VISION"
          title={CAREER_FOCUS_DATA.heading}
        />

        {/* Narrative Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
            {CAREER_FOCUS_DATA.content}
          </p>
        </motion.div>

        {/* Subtle SDLC Lifecycle Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl bg-white border border-neutral-200/90 p-6 sm:p-8 shadow-2xs"
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
              Software Development Lifecycle Scope
            </span>
            <div className="flex items-center gap-1.5 text-xs text-blue-600 font-medium">
              <CheckCircle2 size={14} />
              <span>End-to-End Mindset</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-2">
            {CAREER_FOCUS_DATA.sdlcSteps.map((step, idx) => {
              const isLast = idx === CAREER_FOCUS_DATA.sdlcSteps.length - 1

              return (
                <div key={step.step} className="relative flex flex-col justify-between p-4 rounded-xl bg-neutral-50/80 border border-neutral-200/60 hover:bg-white hover:border-neutral-300 transition-all duration-200">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-blue-600">
                        {step.step}
                      </span>
                      {!isLast && (
                        <ChevronRight
                          size={14}
                          className="hidden lg:block text-neutral-300 absolute -right-2 top-1/2 -translate-y-1/2 z-10"
                        />
                      )}
                    </div>
                    <h4 className="text-sm font-semibold text-neutral-900 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
