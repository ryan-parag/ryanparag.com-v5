import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'skills', label: 'Skills' },
  { id: 'tools', label: 'Tools' },
]

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const NavList = ({ activeId, onSelect, align }) => (
  <>
    {
      SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          className={`text-sm px-3 py-1.5 rounded-lg transition whitespace-nowrap ${align === 'right' ? 'text-right' : 'text-left'} ${
            activeId === id
              ? 'text-themeOnPrimaryContainer bg-themePrimaryContainer'
              : 'text-themeOnSurfaceVariant hover:bg-themeSurface'
          }`}
        >
          {label}
        </button>
      ))
    }
  </>
)

const SideNav = () => {
  const [activeId, setActiveId] = useState(SECTIONS[0].id)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const elements = SECTIONS
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSelect = (id) => {
    scrollToSection(id)
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        className="transition hidden lg:flex flex-col gap-1 fixed right-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-2xl bg-transparent hover:bg-themeSurfaceVariant border border-transparent hover:border-themeOutlineVariant opacity-0"
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      >
        <NavList activeId={activeId} onSelect={handleSelect} align="left" />
      </motion.nav>

      <div className="lg:hidden fixed bottom-6 right-6 z-20 flex flex-col items-end gap-2">
        <AnimatePresence>
          {
            isOpen && (
              <motion.div
                className="transition flex flex-col gap-1 p-2 rounded-2xl bg-themeSurfaceVariant border border-themeOutlineVariant shadow-xl"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
              >
                <NavList activeId={activeId} onSelect={handleSelect} align="right" />
              </motion.div>
            )
          }
        </AnimatePresence>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Section navigation"
          aria-expanded={isOpen}
          className="button-class h-14 w-14 rounded-2xl bg-themeSurfaceVariant text-themeOnSurfaceVariant shadow-xl flex items-center justify-center"
        >
          <motion.svg
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </motion.svg>
        </button>
      </div>
    </>
  )
}

export default SideNav
