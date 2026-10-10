import React from 'react'
import { motion } from 'framer-motion'
import { Layers, Server, Sparkles } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { ABOUT_DATA } from '../data/portfolio'

export const About: React.FC = () => {
  const icons = [Layers, Server, Sparkles]

  return (
    <section id="about" className="py-20 md:py-28 border-t border-neutral-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="01 / OVERVIEW"
          title={ABOUT_DATA.heading}
        />

        {/* Narrative Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
            {ABOUT_DATA.bio}
          </p>
        </motion.div>

        {/* 3 Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ABOUT_DATA.focusAreas.map((area, index) => {
            const Icon = icons[index % icons.length]
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-white border border-neutral-200/90 shadow-2xs hover:shadow-sm hover:border-neutral-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center mb-5 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-neutral-900 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
