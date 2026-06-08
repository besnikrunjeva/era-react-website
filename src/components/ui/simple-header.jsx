import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MenuToggle } from '@/components/ui/menu-toggle'
import { Globe } from 'lucide-react'
import eraLogo from '@/assets/era-logo.png'

const LANGS = [
  { code: 'al', flag: '🇽🇰', name: 'Shqip',   sub: 'Kosovë · Shqipëri' },
  { code: 'en', flag: '🇬🇧', name: 'English', sub: 'International'      },
]

const links = [
  { label: { al: 'Ballina', en: 'Home' }, href: '/' },
  { label: { al: 'Produktet', en: 'Products' }, href: '/products' },
  { label: { al: 'Makineria', en: 'Machines' }, href: '/machines' },
  { label: { al: 'Rreth Nesh', en: 'About' }, href: '/about' },
  { label: { al: 'Kontakt', en: 'Contact' }, href: '/contact' },
]

function LangDropdown({ lang, setLang, align = 'right' }) {
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef(null)

  React.useEffect(() => {
    function handler(e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-1.5 rounded-md border border-gray-200 px-2.5 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:border-[#4ca706]/40 hover:text-[#4ca706]"
      >
        <Globe className="size-3.5" />
        <span>{LANGS.find(l => l.code === lang)?.flag}</span>
        <span>{lang.toUpperCase()}</span>
        <svg className={`size-3 transition-transform duration-150 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <div className={`absolute top-full z-50 mt-1.5 w-44 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg ${align === 'right' ? 'right-0' : 'left-0'}`}>
          <p className="px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-gray-400">
            {lang === 'al' ? 'Gjuha' : 'Language'}
          </p>
          {LANGS.map(l => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false) }}
              className={`flex w-full items-center gap-3 px-3 py-2 transition-colors hover:bg-gray-50 ${lang === l.code ? 'bg-[#f0f9e8]' : ''}`}
            >
              <span className="text-lg leading-none">{l.flag}</span>
              <div className="text-left">
                <p className={`text-[12px] font-bold ${lang === l.code ? 'text-[#4ca706]' : 'text-gray-700'}`}>{l.name}</p>
                <p className="text-[9px] text-gray-400">{l.sub}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function SimpleHeader({ lang = 'al', onLangChange }) {
  const [open, setOpen] = React.useState(false)
  const setLang = (l) => onLangChange?.(l)
  const location = useLocation()

  const t = (obj) => obj[lang]

  const navLink = (href) =>
    `px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
      location.pathname === href
        ? 'text-[#4ca706] bg-[#4ca706]/10'
        : 'text-gray-700 hover:text-[#4ca706] hover:bg-[#4ca706]/10'
    }`

  // Close on route change
  React.useEffect(() => { setOpen(false) }, [location.pathname])

  // Lock body scroll when drawer is open
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className="bg-white/95 supports-[backdrop-filter]:bg-white/80 sticky top-0 z-50 w-full border-b border-gray-200 backdrop-blur-lg">
        <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={eraLogo} alt="ERA" className="h-8 w-auto" />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link key={link.href} to={link.href} className={navLink(link.href)}>
                {t(link.label)}
              </Link>
            ))}
          </div>

          {/* Desktop right: lang dropdown + CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <LangDropdown lang={lang} setLang={setLang} align="right" />
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-[#4ca706] px-4 py-2 text-sm font-medium text-white hover:bg-[#3d8f05] transition-colors">
              {lang === 'al' ? 'Merr Ofertë' : 'Get a Quote'}
            </Link>
          </div>

          {/* Mobile: lang dropdown + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <LangDropdown lang={lang} setLang={setLang} align="right" />
            <div className="p-2 text-gray-700">
              <MenuToggle strokeWidth={2.5} open={open} onOpenChange={setOpen} className="size-6" />
            </div>
          </div>

        </nav>
      </header>

      {/* Mobile bottom drawer — lightweight, no Radix overhead */}
      {/* Backdrop */}
      <div
        className="lg:hidden fixed inset-0 z-40 bg-black/40"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 220ms ease',
        }}
        onClick={() => setOpen(false)}
      />

      {/* Drawer panel */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl bg-white shadow-2xl"
        style={{
          transform: open ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 260ms cubic-bezier(0.32, 0.72, 0, 1)',
          willChange: 'transform',
        }}
      >
        {/* Drag handle */}
        <div className="mx-auto mt-3 mb-1 h-1 w-10 rounded-full bg-gray-300" />

        {/* Nav links */}
        <nav className="flex flex-col px-5 pt-1 pb-2">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`flex items-center justify-between border-b border-gray-100 py-4 text-base font-bold ${
                location.pathname === link.href ? 'text-[#4ca706]' : 'text-gray-800'
              }`}
            >
              {t(link.label)}
              {location.pathname === link.href && (
                <span className="size-2 rounded-full bg-[#4ca706]" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-5 pt-3 pb-8">
          <Link
            to="/contact"
            className="block rounded-xl bg-[#4ca706] py-3.5 text-center text-sm font-bold text-white"
          >
            {lang === 'al' ? 'Merr Ofertë →' : 'Get a Quote →'}
          </Link>
        </div>
      </div>
    </>
  )
}
