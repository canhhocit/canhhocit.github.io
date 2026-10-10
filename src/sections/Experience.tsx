import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Calendar, MapPin } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { EXPERIENCE_DATA } from '../data/portfolio'

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-neutral-200/60 bg-stone-50/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="02 / CAREER"
          title="Experience"
          description="Professional positions and engineering internship experience."
        />

        <div className="max-w-3xl">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-6 sm:pl-8 border-l-2 border-blue-600/60 pb-4"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-white border-2 border-blue-600 shadow-2xs" />

              {/* Experience Card */}
              <div className="p-6 sm:p-7 rounded-xl bg-white border border-neutral-200/90 shadow-2xs hover:shadow-sm hover:border-neutral-300 transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-sm font-medium text-blue-700">
                      <Building2 size={15} className="text-blue-600" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-semibold self-start sm:self-auto border border-neutral-200/60">
                    <Calendar size={13} className="text-neutral-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                  {exp.description}
                </p>

                <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs text-neutral-500">
                  <MapPin size={13} className="text-neutral-400" />
                  <span>Professional Environment &bull; Continuous Practical Growth</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
