import React from 'react'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { PERSONAL_INFO } from '../data/portfolio'

interface SocialLinksProps {
  className?: string
  iconSize?: number
  variant?: 'minimal' | 'badge'
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  iconSize = 18,
  variant = 'minimal',
}) => {
  const links = [
    {
      name: 'GitHub',
      href: PERSONAL_INFO.github,
      icon: GithubIcon,
      external: true,
      ariaLabel: 'View GitHub profile of Pham Huu Canh',
    },
    {
      name: 'LinkedIn',
      href: PERSONAL_INFO.linkedin,
      icon: LinkedinIcon,
      external: true,
      ariaLabel: 'Connect with Pham Huu Canh on LinkedIn',
    },
    {
      name: 'Email',
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: Mail,
      external: false,
      ariaLabel: 'Send email to Pham Huu Canh',
    },
  ]

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => {
        const Icon = link.icon

        if (variant === 'badge') {
          return (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              aria-label={link.ariaLabel}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-200 bg-white text-neutral-700 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50/50 text-xs font-medium transition-all duration-200 shadow-2xs focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
            >
              <Icon size={iconSize} />
              <span>{link.name}</span>
            </a>
          )
        }

        return (
          <a
            key={link.name}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            aria-label={link.ariaLabel}
            className="p-2 rounded-lg text-neutral-600 hover:text-blue-600 hover:bg-neutral-100 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
          >
            <Icon size={iconSize} />
          </a>
        )
      })}
    </div>
  )
}
