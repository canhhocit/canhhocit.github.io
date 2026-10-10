import React from 'react'
import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
}) => {
  const isCenter = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-12 ${isCenter ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-2 mb-2 ${isCenter ? 'justify-center' : ''}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-600">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
