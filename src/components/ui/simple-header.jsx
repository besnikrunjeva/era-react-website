import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { MenuToggle } from '@/components/ui/menu-toggle'
import eraLogo from '@/assets/era-logo.png'

const links = [
  { label: { al: 'Ballina', en: 'Home' }, href: '/' },
  { label: { al: 'Produktet', en: 'Products' }, href: '/products' },
  { label: { al: 'Makineria', en: 'Machines' }, href: '/machines' },
  { label: { al: 'Rreth Nesh', en: 'About' }, href: '/about' },
  { label: { al: 'Kontakt', en: 'Contact' }, href: '/contact' },
]

export function SimpleHeader() {
  const [open, setOpen] = React.useState(false)
  const [lang, setLang] = React.useState('al')
  const location = useLocation()

  const t = (obj) => obj[lang]

  const navLink = (href) =>
    `px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
      location.pathname === href
        ? 'text-[#4ca706] bg-[#4ca706]/10'
        : 'text-gray-700 hover:text-[#4ca706] hover:bg-[#4ca706]/10'
    }`

  return (
    <header className="bg-white/95 supports-[backdrop-filter]:bg-white/80 sticky top-0 z-50 w-full border-b border-gray-200 backdrop-blur-lg">
      <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={eraLogo} alt="ERA Print Pack" className="h-8 w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link key={link.href} to={link.href} className={navLink(link.href)}>
              {t(link.label)}
            </Link>
          ))}
        </div>

        {/* Right side: lang toggle + CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center rounded-md border border-white/10 overflow-hidden text-sm font-medium">
            <button
              onClick={() => setLang('al')}
              className={`px-3 py-1.5 transition-colors ${lang === 'al' ? 'bg-[#4ca706] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              AL
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 transition-colors ${lang === 'en' ? 'bg-[#4ca706] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              EN
            </button>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-[#4ca706] px-4 py-2 text-sm font-medium text-white hover:bg-[#3d8f05] transition-colors">
            {lang === 'al' ? 'Merr Ofertë' : 'Get a Quote'}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <Button size="icon" variant="outline" className="lg:hidden border-gray-200">
            <MenuToggle strokeWidth={2.5} open={open} onOpenChange={setOpen} className="size-6 text-gray-700" />
          </Button>
          <SheetContent
            className="bg-white gap-0"
            showClose={false}
            side="left"
          >
            <div className="grid gap-y-1 overflow-y-auto px-4 pt-12 pb-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={navLink(link.href) + ' justify-start w-full'}
                >
                  {t(link.label)}
                </Link>
              ))}
            </div>
            <SheetFooter className="flex-row gap-2">
              <div className="flex items-center rounded-md border border-white/10 overflow-hidden text-sm font-medium">
                <button
                  onClick={() => setLang('al')}
                  className={`px-3 py-1.5 transition-colors ${lang === 'al' ? 'bg-[#4ca706] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  AL
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1.5 transition-colors ${lang === 'en' ? 'bg-[#4ca706] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  EN
                </button>
              </div>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-md bg-[#4ca706] px-4 py-2 text-sm font-medium text-white hover:bg-[#3d8f05] transition-colors"
              >
                {lang === 'al' ? 'Merr Ofertë' : 'Get a Quote'}
              </Link>
            </SheetFooter>
          </SheetContent>
        </Sheet>

      </nav>
    </header>
  )
}
