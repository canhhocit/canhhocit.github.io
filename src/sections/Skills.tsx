import React from 'react'
import { motion } from 'framer-motion'
import { Server, Layout, Database, Wrench, Compass, Blocks, Code2 } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { SKILL_CATEGORIES, PROGRAMMING_LANGUAGES } from '../data/portfolio'

export const Skills: React.FC = () => {
  const categoryIcons: Record<string, React.ElementType> = {
    Backend: Server,
    Frontend: Layout,
    'Database & Caching': Database,
    'Integrations & Cloud APIs': Blocks,
    'Tools & Workflow': Wrench,
    'Additional Interests': Compass,
  }

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-neutral-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="03 / CAPABILITIES"
          title="Technical Skills"
          description="Programming languages, specialized stacks, and cloud services I actively work with and explore."
        />

        {/* Featured Programming Languages Block */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-8 p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-neutral-100">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <Code2 size={19} />
              </div>
              <div>
                <h3 className="text-base font-bold text-neutral-900">
                  Programming Languages
                </h3>
                <p className="text-xs text-neutral-500 font-medium">
                  Primary engineering languages and multi-platform foundations
                </p>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                <span className="text-neutral-700 font-medium">Core</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-neutral-400" />
                <span className="text-neutral-500 font-medium">Familiar</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {PROGRAMMING_LANGUAGES.map((lang, idx) => {
              const isCore = lang.level === 'Core'

              return (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all duration-200 ${
                    isCore
                      ? 'bg-blue-50/40 border-blue-200/80 hover:bg-blue-50/70 hover:border-blue-300 shadow-2xs'
                      : 'bg-neutral-50/70 border-neutral-200/70 hover:bg-neutral-100/60 hover:border-neutral-300'
                  }`}
                >
                  <span className="text-sm font-semibold text-neutral-900 mb-2">
                    {lang.name}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isCore ? 'bg-blue-600' : 'bg-neutral-400'
                      }`}
                    />
                    <span
                      className={`text-[11px] font-medium tracking-tight ${
                        isCore ? 'text-blue-700 font-semibold' : 'text-neutral-500'
                      }`}
                    >
                      {lang.level}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, catIndex) => {
            const Icon = categoryIcons[category.name] || Wrench
            const isInterests = category.name === 'Additional Interests'
            const isIntegrations = category.name === 'Integrations & Cloud APIs'

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: catIndex * 0.07 }}
                className={`p-6 rounded-xl bg-white border transition-all duration-200 shadow-2xs hover:shadow-sm ${
                  isInterests
                    ? 'border-blue-100/90 bg-gradient-to-b from-blue-50/20 to-white'
                    : isIntegrations
                    ? 'border-emerald-100/90 hover:border-neutral-300'
                    : 'border-neutral-200/90 hover:border-neutral-300'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div
                    className={`p-2 rounded-lg ${
                      isInterests
                        ? 'bg-blue-100/80 text-blue-700'
                        : isIntegrations
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-neutral-100 text-neutral-700'
                    }`}
                  >
                    <Icon size={17} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">
                      {category.name}
                    </h3>
                    <span className="text-[11px] text-neutral-400 font-medium">
                      {isInterests
                        ? 'Current areas of exploration'
                        : isIntegrations
                        ? 'Third-party SDKs & Webhooks'
                        : 'Core practical toolkit'}
                    </span>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        isInterests
                          ? 'bg-blue-50/80 text-blue-800 border border-blue-200/60 hover:bg-blue-100/70'
                          : isIntegrations
                          ? 'bg-neutral-50 text-neutral-800 border border-neutral-200/80 hover:bg-emerald-50/60 hover:border-emerald-200'
                          : 'bg-neutral-50 text-neutral-800 border border-neutral-200/80 hover:bg-neutral-100 hover:border-neutral-300'
                      }`}
                    >
                      {skill}
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
