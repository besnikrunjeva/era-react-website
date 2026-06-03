import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function BottomCTA({ lang = 'al' }) {
  return (
    <section className="relative overflow-hidden bg-[#0f1010] py-28 px-4">

      {/* Background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 bottom-0 h-[500px] w-[800px] -translate-x-1/2 translate-y-1/3 rounded-full opacity-[0.12] blur-[120px]"
          style={{ background: '#4ca706' }}
        />
      </div>

      {/* Decorative top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#4ca706]/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >

          {/* Eyebrow */}
          <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#4ca706]">
            {lang === 'al' ? 'Fillo sot' : 'Start today'}
          </span>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            {lang === 'al' ? (
              <>Gati të fillojmë<br /><span className="text-[#4ca706]">bashkë?</span></>
            ) : (
              <>Ready to get<br /><span className="text-[#4ca706]">started?</span></>
            )}
          </h2>

          <p className="mx-auto mt-5 max-w-md text-base text-white/45 leading-relaxed">
            {lang === 'al'
              ? 'Dërgo logon tënde tani. Brenda 24 orësh ke mockupin 3D falas — pa asnjë detyrim.'
              : 'Send your logo now. Within 24 hours you have a free 3D mockup — with no obligation.'}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/38344113533"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 rounded-xl bg-[#4ca706] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#4ca706]/25 transition-colors hover:bg-[#3d8f05]"
            >
              <MessageCircle className="size-5" />
              {lang === 'al' ? 'Nis bisedën në WhatsApp' : 'Start a WhatsApp chat'}
            </motion.a>

            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 px-8 py-4 text-base font-semibold text-white/70 transition-colors hover:border-white/20 hover:text-white"
            >
              {lang === 'al' ? 'Shiko produktet' : 'Browse products'}
              <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* Micro-trust signals */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/25">
            <span>{lang === 'al' ? '✓ Pa detyrime' : '✓ No commitment'}</span>
            <span>{lang === 'al' ? '✓ Mockup 3D falas' : '✓ Free 3D mockup'}</span>
            <span>{lang === 'al' ? '✓ Përgjigje brenda 24 orësh' : '✓ Reply within 24 hours'}</span>
            <span>{lang === 'al' ? '✓ 397+ klientë na besojnë' : '✓ 397+ clients trust us'}</span>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
