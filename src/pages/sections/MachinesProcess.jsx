import { motion } from 'framer-motion'

const STEPS = [
  { n: '01', al: 'Dizajni',    en: 'Design' },
  { n: '02', al: 'Para-shtyp', en: 'Pre-press' },
  { n: '03', al: 'Printimi',   en: 'Printing' },
  { n: '04', al: 'Prerja',     en: 'Die-cutting' },
  { n: '05', al: 'Dërgesa',    en: 'Delivery' },
]

export function MachinesProcess({ lang = 'al' }) {
  return (
    <section className="border-y border-white/10 bg-[#0f1010] py-6 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="relative flex items-start justify-between">
          {/* Connector line */}
          <div
            aria-hidden
            className="absolute left-[8%] right-[8%] top-[18px] h-px"
            style={{ background: 'linear-gradient(90deg, #c8ddb8, rgba(76,167,6,0.35), #c8ddb8)' }}
          />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="relative z-10 flex flex-col items-center gap-2"
            >
              <div className="flex size-9 items-center justify-center rounded-full bg-[#4ca706] shadow-sm shadow-[#4ca706]/20">
                <span className="text-[10px] font-black text-white">{step.n}</span>
              </div>
              <span className="hidden text-center text-[11px] font-semibold text-white/40 sm:block">
                {step[lang]}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
