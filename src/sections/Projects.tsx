import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Layers, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react'
import { GithubIcon } from '../components/BrandIcons'
import { SectionHeading } from '../components/SectionHeading'
import { PROJECTS_DATA, type ProjectItem } from '../data/portfolio'

export const Projects: React.FC = () => {
  const [expandedArchitecture, setExpandedArchitecture] = useState<string | null>(null)

  const toggleArchitecture = (id: string) => {
    setExpandedArchitecture((prev) => (prev === id ? null : id))
  }

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-neutral-200/60 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="03 / PORTFOLIO"
          title="Featured Projects"
          description="Distributed systems, enterprise microservices, and modern web applications engineered with production standards."
        />

        <div className="space-y-8">
          {PROJECTS_DATA.map((project: ProjectItem, index: number) => {
            const isArchExpanded = expandedArchitecture === project.id

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-200 bg-[#fafaf9]/70 ${
                  project.isFeatured
                    ? 'border-blue-200/80 shadow-xs hover:border-blue-300 hover:shadow-sm ring-1 ring-blue-500/10'
                    : 'border-neutral-200/90 hover:border-neutral-300'
                }`}
              >
                {/* Category & Badge header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200/60">
                      {project.category}
                    </span>
                    {project.isFeatured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                        <Sparkles size={11} className="text-amber-600" />
                        Flagship
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-neutral-200 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-colors shadow-2xs"
                      >
                        <GithubIcon size={14} />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-2xs"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-neutral-600 mt-1 mb-4">
                  {project.subtitle}
                </p>

                {/* Main description */}
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Technical highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                      <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Architecture Accordion (if present) */}
                {project.architecture && (
                  <div className="mb-6 rounded-xl border border-neutral-200/90 bg-white overflow-hidden text-xs">
                    <button
                      type="button"
                      onClick={() => toggleArchitecture(project.id)}
                      className="w-full px-4 py-2.5 flex items-center justify-between text-neutral-800 font-semibold hover:bg-neutral-50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2 text-blue-700">
                        <Layers size={14} />
                        <span>Xem Sơ đồ Kiến trúc & Luồng Dữ liệu</span>
                      </div>
                      {isArchExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>

                    <AnimatePresence>
                      {isArchExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="px-4 py-3 border-t border-neutral-100 bg-neutral-950 text-neutral-300 font-mono text-[11px] leading-relaxed"
                        >
                          <p className="text-emerald-400 font-bold mb-1">// System Architecture Topology</p>
                          <p>{project.architecture}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-200/60">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md font-mono bg-white border border-neutral-200/80 text-neutral-700 shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
