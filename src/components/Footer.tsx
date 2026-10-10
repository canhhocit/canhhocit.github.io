import React from 'react'
import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { PERSONAL_INFO } from '../data/portfolio'

const CURRENT_YEAR = new Date().getFullYear()

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-neutral-200/80 bg-white/60 py-10 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright & Byline */}
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium text-neutral-800">
              Designed &amp; built by {PERSONAL_INFO.name}
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              &copy; {CURRENT_YEAR} All rights reserved.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3 text-neutral-500">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md hover:text-neutral-900 hover:bg-neutral-100 transition-colors focus-visible:outline-2 focus-visible:outline-blue-600"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={17} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md hover:text-neutral-900 hover:bg-neutral-100 transition-colors focus-visible:outline-2 focus-visible:outline-blue-600"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={17} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-1.5 rounded-md hover:text-neutral-900 hover:bg-neutral-100 transition-colors focus-visible:outline-2 focus-visible:outline-blue-600"
                aria-label="Email Pham Huu Canh"
              >
                <Mail size={17} />
              </a>
            </div>

            <div className="h-4 w-px bg-neutral-200" />

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 hover:text-blue-600 py-1.5 px-2.5 rounded-md hover:bg-neutral-100 transition-colors focus-visible:outline-2 focus-visible:outline-blue-600 cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
