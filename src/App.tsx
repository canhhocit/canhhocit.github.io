import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { CareerFocus } from './sections/CareerFocus'
import { Contact } from './sections/Contact'
import { SupportModal } from './components/SupportModal'
import { DevTerminal } from './components/DevTerminal'
import { Coffee, Terminal as TerminalIcon } from 'lucide-react'

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isSupportOpen, setIsSupportOpen] = useState(false)
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)

  // Scroll spy
  useEffect(() => {
    const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'career-focus', 'contact']

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

  // Keyboard shortcut Ctrl+K / Cmd+K to open DevTerminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsTerminalOpen((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-[#1c1917] selection:bg-blue-100 selection:text-blue-900 relative">
      {/* Skip to Main Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium shadow-md outline-none"
      >
        Skip to main content
      </a>

      {/* Global Header */}
      <Header
        activeSection={activeSection}
        onOpenSupport={() => setIsSupportOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        <Hero onOpenSupport={() => setIsSupportOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <CareerFocus />
        <Contact onOpenSupport={() => setIsSupportOpen(true)} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Action Bar (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        {/* Terminal Button */}
        <button
          type="button"
          onClick={() => setIsTerminalOpen(true)}
          className="w-10 h-10 rounded-full bg-[#161b22] text-neutral-200 border border-neutral-700/80 hover:text-emerald-400 hover:border-emerald-500/60 shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer"
          title="Mở Terminal Dev (Ctrl + K)"
          aria-label="Open developer terminal"
        >
          <TerminalIcon size={17} />
        </button>

        {/* Nuoi Toi (Buy me a coffee) Floating Button */}
        <button
          type="button"
          onClick={() => setIsSupportOpen(true)}
          className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold text-xs shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer ring-2 ring-amber-400/40"
          title="Tiếp tế năng lượng cho dev (Buy me a coffee)"
          aria-label="Support dev"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <Coffee size={15} className="text-neutral-950 transition-transform group-hover:rotate-12" />
          <span className="hidden sm:inline font-semibold">Nuôi Tôi ☕</span>
        </button>
      </div>

      {/* Modals */}
      <SupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
      <DevTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenSupport={() => {
          setIsTerminalOpen(false)
          setIsSupportOpen(true)
        }}
      />
    </div>
  )
}
