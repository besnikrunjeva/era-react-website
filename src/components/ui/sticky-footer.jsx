import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Globe, Camera, MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import eraLogo from '@/assets/era-logo.png'

const socialLinks = [
  { title: 'Facebook',  href: 'https://facebook.com',      icon: Globe },
  { title: 'Instagram', href: 'https://instagram.com',     icon: Camera },
  { title: 'WhatsApp',  href: 'https://wa.me/38344113533', icon: MessageCircle },
]

const getFooterLinkGroups = (lang) => [
  {
    label: lang === 'al' ? 'Produktet' : 'Products',
    links: [
      { title: lang === 'al' ? 'Gota Letre'        : 'Paper Cups',         href: '/products/gota' },
      { title: lang === 'al' ? 'Kupa Pasta & Supe' : 'Pasta & Soup Cups',  href: '/products/kupa-pasta' },
      { title: lang === 'al' ? 'Kupa Akullore'     : 'Ice Cream Cups',     href: '/products/akullore' },
      { title: lang === 'al' ? 'Mbajtëse Lugësh'   : 'Cutlery Holders',    href: '/products/mbajtese' },
      { title: lang === 'al' ? 'Letër Tavoline'    : 'Table Paper',        href: '/products/leter-tavoline' },
      { title: lang === 'al' ? 'Kapak Gotash'      : 'Cup Lids',           href: '/products/kapak' },
      { title: lang === 'al' ? 'Kuti Ushqimore'    : 'Food Boxes',         href: '/products/kuti' },
    ],
  },
  {
    label: lang === 'al' ? 'Kompania' : 'Company',
    links: [
      { title: lang === 'al' ? 'Rreth Nesh' : 'About Us',  href: '/about' },
      { title: lang === 'al' ? 'Makineria'  : 'Machines',  href: '/machines' },
      { title: lang === 'al' ? 'Portofoli'  : 'Portfolio', href: '/portfolio' },
      { title: lang === 'al' ? 'Kontakt'    : 'Contact',   href: '/contact' },
    ],
  },
  {
    label: lang === 'al' ? 'Porosit' : 'Order',
    links: [
      { title: lang === 'al' ? 'Bëj Porosi'      : 'Place Order',        href: '/order' },
      { title: lang === 'al' ? 'Merr Ofertë'     : 'Get a Quote',        href: '/contact' },
      { title: '+383 44 113 533',                                          href: 'tel:+38344113533', icon: Phone },
    ],
  },
]

function AnimatedContainer({ delay = 0.1, children, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StickyFooter({ lang = 'al', className, ...props }) {
  const footerLinkGroups = getFooterLinkGroups(lang)

  return (
    <footer
      className={cn('relative md:h-[380px] w-full', className)}
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
      {...props}
    >
      <div className="md:fixed md:bottom-0 md:h-[380px] w-full">
        <div className="md:sticky md:top-[calc(100vh-380px)] h-full overflow-y-auto">

          <div className="relative flex h-full flex-col justify-between bg-[#0f1010] border-t border-white/10 px-4 py-6 md:px-12">

            {/* Green glow */}
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
              <div
                className="absolute -top-40 -left-20 h-80 w-80 rounded-full opacity-20 blur-[80px]"
                style={{ background: '#4ca706' }}
              />
            </div>

            {/* Columns */}
            <div className="relative z-10 flex flex-col gap-6 md:flex-row">
              {/* Brand */}
              <AnimatedContainer className="w-full max-w-xs space-y-3">
                <img src={eraLogo} alt="ERA Print Pack" className="h-8 w-auto brightness-0 invert" />
                <p className="text-sm text-white/50 leading-relaxed">
                  {lang === 'al'
                    ? 'Prodhues i ambalazheve nga lëtër në Kosovë. Gota, kupa, kuti dhe etiketa me printim të personalizuar.'
                    : 'Paper packaging manufacturer in Kosovo. Cups, bowls, boxes and labels with custom printing.'}
                </p>
                <div className="flex gap-2">
                  {socialLinks.map((link) => (
                    <a key={link.title} href={link.href} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="outline" className="size-8 border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-[#4ca706]">
                        <link.icon className="size-3.5" />
                      </Button>
                    </a>
                  ))}
                </div>
              </AnimatedContainer>

              {/* Link groups */}
              {footerLinkGroups.map((group, index) => (
                <AnimatedContainer key={group.label} delay={0.1 + index * 0.1} className="w-full">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#4ca706]">
                    {group.label}
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-sm">
                    {group.links.map((link) => (
                      <li key={link.title}>
                        <Link
                          to={link.href}
                          className="inline-flex items-center gap-1.5 text-white/50 hover:text-white transition-colors duration-200"
                        >
                          {link.icon && <link.icon className="size-3.5" />}
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AnimatedContainer>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="relative z-10 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-4 text-xs text-white/30 md:flex-row">
              <p>
                {lang === 'al'
                  ? '© 2026 NPT Shtypshkronja ERA. Të gjitha të drejtat e rezervuara.'
                  : '© 2026 NPT Shtypshkronja ERA. All rights reserved.'}
              </p>
              <p>{lang === 'al' ? 'Prishtinë, Kosovë' : 'Pristina, Kosovo'} · +383 44 113 533</p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}
