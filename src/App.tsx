import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Skills } from './sections/Skills'
import { CareerFocus } from './sections/CareerFocus'
import { Contact } from './sections/Contact'

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sections = ['hero', 'about', 'experience', 'skills', 'career-focus', 'contact']

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i]
        const element = document.getElementById(sectionId)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-[#1c1917] selection:bg-blue-100 selection:text-blue-900">
      {/* Skip to Main Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium shadow-md outline-none"
      >
        Skip to main content
      </a>

      {/* Global Header */}
      <Header activeSection={activeSection} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <CareerFocus />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}
