import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

export function UseCasesSection({ useCases, lang = 'al' }) {
  return (
    <section className="border-b border-gray-100 bg-[#f9f9f7] px-5 py-10 md:px-8">
      <div className="mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: EASE }}
          className="mb-6 flex items-center gap-3"
        >
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#4ca706]">
            {lang === 'al' ? 'Çfarë mund të paketosh' : 'What you can pack'}
          </p>
          <div className="h-px flex-1 bg-[#4ca706]/15" />
        </motion.div>

        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {useCases.map((uc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: EASE }}
              className="group overflow-hidden rounded-xl border border-gray-100 bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={uc.img}
                  alt={uc.label[lang]}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="px-3 py-2.5">
                <p className="text-[12px] font-black text-gray-800">{uc.label[lang]}</p>
                <p className="mt-0.5 text-[10px] text-gray-400">{uc.desc[lang]}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
