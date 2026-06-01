import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export function DarkCta({ lang = 'al' }) {
  return (
    <section className="relative overflow-hidden bg-[#0f1010] py-24 px-4">
      {/* Green glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full opacity-20 blur-[80px]"
        style={{ background: '#4ca706' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <p className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
          {lang === 'al'
            ? 'Bashkohuni me 397+ bizneset që na besojnë'
            : 'Join 397+ businesses that trust us'}
        </p>
        <p className="mt-4 text-base text-white/50">
          {lang === 'al'
            ? 'Merr ofertën tënde falas — përgjigje brenda 24 orësh.'
            : 'Get your free quote — reply within 24 hours.'}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://wa.me/38344113533"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#4ca706] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3d8f05]"
          >
            <MessageCircle className="size-4" />
            {lang === 'al' ? 'Merr ofertën tënde falas' : 'Get your free quote'}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 px-7 py-3 text-sm font-semibold text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            {lang === 'al' ? 'Kontaktoni përmes formës' : 'Contact via form'}
          </Link>
        </div>

        <p className="mt-5 text-xs text-white/30">
          {lang === 'al' ? 'Pa detyrime · WhatsApp · +383 44 113 533' : 'No commitment · WhatsApp · +383 44 113 533'}
        </p>
      </motion.div>
    </section>
  )
}
