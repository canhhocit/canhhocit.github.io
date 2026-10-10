import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { SectionHeading } from '../components/SectionHeading'
import { CONTACT_DATA } from '../data/portfolio'

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_DATA.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const channels = [
    {
      title: 'Email',
      value: CONTACT_DATA.email,
      href: `mailto:${CONTACT_DATA.email}`,
      icon: Mail,
      isExternal: false,
      action: 'Send an email',
    },
    {
      title: 'GitHub',
      value: 'canhhocit',
      href: CONTACT_DATA.github,
      icon: GithubIcon,
      isExternal: true,
      action: 'View profile',
    },
    {
      title: 'LinkedIn',
      value: 'Cảnh Phạm',
      href: CONTACT_DATA.linkedin,
      icon: LinkedinIcon,
      isExternal: true,
      action: 'Connect on LinkedIn',
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-neutral-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="05 / GET IN TOUCH"
          title={CONTACT_DATA.heading}
          description={CONTACT_DATA.text}
        />

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {channels.map((ch, index) => {
            const Icon = ch.icon

            return (
              <motion.div
                key={ch.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white border border-neutral-200/90 shadow-2xs hover:shadow-sm hover:border-neutral-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center">
                      <Icon size={19} />
                    </div>
                    {ch.title === 'Email' && (
                      <button
                        type="button"
                        onClick={copyEmail}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
                        title="Copy email address"
                        aria-label="Copy email address"
                      >
                        {copied ? (
                          <>
                            <Check size={13} className="text-emerald-600" />
                            <span className="text-emerald-600">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy size={13} />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                    {ch.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-neutral-900 truncate">
                    {ch.value}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <a
                    href={ch.href}
                    target={ch.isExternal ? '_blank' : undefined}
                    rel={ch.isExternal ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors group"
                  >
                    <span>{ch.action}</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Minimal Direct Email Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-gradient-to-r from-neutral-900 to-neutral-800 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
              Have a conversation or inquiry?
            </h3>
            <p className="text-sm text-neutral-300 max-w-lg">
              Feel free to reach out directly via email. I will respond as promptly as possible.
            </p>
          </div>

          <a
            href={`mailto:${CONTACT_DATA.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-neutral-900 hover:bg-neutral-100 font-semibold text-sm transition-all duration-200 shrink-0 shadow-xs focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            <Mail size={16} />
            <span>Say Hello</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
