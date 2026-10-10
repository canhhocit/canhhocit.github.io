import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, Briefcase } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { PERSONAL_INFO } from '../data/portfolio'

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const navOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Current Position Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200/90 bg-white/90 text-neutral-700 text-xs font-medium shadow-2xs mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-neutral-500 font-normal">Current:</span>
              <span className="font-semibold text-neutral-800">{PERSONAL_INFO.currentRole}</span>
              <span className="text-neutral-300">|</span>
              <span className="text-neutral-600">{PERSONAL_INFO.company}</span>
            </motion.div>

            {/* Small Intro */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="text-xs sm:text-sm font-semibold tracking-wider text-blue-600 uppercase mb-2"
            >
              {PERSONAL_INFO.heroSubtitle}
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1] mb-3"
            >
              {PERSONAL_INFO.name}
            </motion.h1>

            {/* Professional Title */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-600 tracking-tight mb-6"
            >
              {PERSONAL_INFO.title}
            </motion.h2>

            {/* Short Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl mb-4 font-normal"
            >
              {PERSONAL_INFO.heroIntro}
            </motion.p>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
              className="text-sm sm:text-base text-neutral-500 leading-relaxed max-w-xl mb-8"
            >
              {PERSONAL_INFO.heroSupporting}
            </motion.p>

            {/* CTA Buttons & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                type="button"
                onClick={() => handleScrollTo('experience')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 text-sm font-medium transition-all duration-200 shadow-xs hover:shadow-sm focus-visible:outline-2 focus-visible:outline-neutral-900 focus-visible:outline-offset-2 cursor-pointer"
              >
                <Briefcase size={16} />
                <span>Explore My Experience</span>
                <ArrowDown size={14} className="text-neutral-400" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-neutral-200 text-neutral-800 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50/30 text-sm font-medium transition-all duration-200 shadow-2xs focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 cursor-pointer"
              >
                <Mail size={16} />
                <span>Get In Touch</span>
              </button>

              {/* Direct Social Links */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:ml-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors focus-visible:outline-2 focus-visible:outline-blue-600"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={19} />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-neutral-600 hover:text-blue-600 hover:bg-neutral-100 transition-colors focus-visible:outline-2 focus-visible:outline-blue-600"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={19} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Avatar Graphic Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Outer soft glow ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-500/15 via-neutral-200/40 to-transparent blur-md group-hover:from-blue-500/20 transition-all duration-500" />

              {/* Avatar Card Container */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-92 rounded-2xl bg-white border border-neutral-200/90 shadow-sm p-2.5 flex flex-col justify-between overflow-hidden">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-900">
                  <img
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle dark gradient overlay at bottom for card readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-transparent to-transparent pointer-events-none" />

                  {/* Top corner status pill */}
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/20 text-white flex items-center gap-1.5 shadow-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-mono tracking-wider uppercase">Active</span>
                  </div>

                  {/* Floating info tag at bottom */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-lg bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-xs flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                        </span>
                        <span className="text-[11px] font-semibold text-neutral-800 tracking-wide uppercase">
                          Full-Stack Dev
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 font-medium mt-0.5">
                        {PERSONAL_INFO.name}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-md bg-neutral-900 text-white flex items-center justify-center font-bold text-xs font-mono shadow-2xs">
                      {PERSONAL_INFO.initials}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
