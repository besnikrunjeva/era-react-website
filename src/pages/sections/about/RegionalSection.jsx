import { motion } from 'framer-motion'

const countries = [
  { flag: '🇽🇰', name: { al: 'Kosovë',           en: 'Kosovo'          } },
  { flag: '🇷🇸', name: { al: 'Serbi',             en: 'Serbia'          } },
  { flag: '🇲🇰', name: { al: 'Maqedoni e Veriut', en: 'North Macedonia'  } },
  { flag: '🇦🇱', name: { al: 'Shqipëri',          en: 'Albania'         } },
  { flag: '🇩🇪', name: { al: 'Gjermani',          en: 'Germany'         } },
  { flag: '🇨🇭', name: { al: 'Zvicër',            en: 'Switzerland'     } },
  { flag: '🇺🇸', name: { al: 'SHBA (Chicago)',     en: 'USA (Chicago)'   } },
]

export function RegionalSection({ lang = 'al' }) {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center"
        >
          {/* Text */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#4ca706]">
              {lang === 'al' ? 'Prania Rajonale' : 'Regional Presence'}
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
              {lang === 'al'
                ? 'Bazë në Kosovë, Shërbim në Botë'
                : 'Based in Kosovo, Shipped Worldwide'}
            </h2>
            <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-gray-500">
              <p>
                {lang === 'al'
                  ? 'Nga Ballkani deri në Evropën Perëndimore dhe Shtetet e Bashkuara — ambalazhjet tona arrijnë kudo.'
                  : 'From the Balkans to Western Europe and the United States — our packaging ships everywhere.'}
              </p>
              <p>
                {lang === 'al'
                  ? 'Dorëzim direkt nga fabrika — pa ndërmjetës, me kontroll të plotë të cilësisë dhe afateve.'
                  : 'Direct factory delivery — no middlemen, with full quality and timeline control.'}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {countries.map(c => (
                <span
                  key={c.name.en}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#4ca706]/30 bg-[#4ca706]/10 px-3 py-1 text-xs font-semibold text-[#4ca706]"
                >
                  {c.flag} {c.name[lang]}
                </span>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="aspect-[4/3] w-full rounded-2xl bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl mb-2">🗺️</div>
              <p className="text-xs font-medium text-gray-400">
                {lang === 'al' ? 'Harta rajonale' : 'Regional map'}
              </p>
              <p className="mt-0.5 text-[11px] text-gray-300">about-map.webp</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
