import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { BottomCTA } from '@/pages/sections/BottomCTA'

function Breadcrumb({ label }) {
  return (
    <nav className="border-b border-gray-100 bg-white px-5 py-3 md:px-8">
      <div className="mx-auto flex max-w-5xl items-center gap-1.5 text-[10px] font-semibold text-gray-400">
        <Link to="/" className="transition-colors hover:text-gray-600">Ballina</Link>
        <ChevronRight className="size-3 text-gray-300" />
        <Link to="/products" className="transition-colors hover:text-gray-600">Produktet</Link>
        <ChevronRight className="size-3 text-gray-300" />
        <span className="font-bold text-[#4ca706]">{label}</span>
      </div>
    </nav>
  )
}

function SpecsSection({ specs, steps }) {
  return (
    <section className="border-b border-gray-100 bg-white px-5 py-10 md:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2"
        >
          <div>
            <h2 className="mb-5 text-base font-black text-gray-900">Specifikimet</h2>
            <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 overflow-hidden">
              {specs.map(({ key, val, green }) => (
                <div key={key} className="flex items-center justify-between px-4 py-3">
                  <span className="text-[11px] text-gray-400">{key}</span>
                  <span className={`text-[11px] font-bold ${green ? 'text-[#4ca706]' : 'text-gray-600'}`}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-base font-black text-gray-900">Si të porosisësh</h2>
            <div className="flex flex-col gap-4">
              {steps.map(({ n, title, desc }, i) => (
                <motion.div
                  key={n}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#c8ddb8] bg-[#f0f9e8] text-[10px] font-black text-[#4ca706]">
                    {n}
                  </div>
                  <div className="mt-0.5">
                    <p className="text-[12px] font-bold text-gray-800">{title}</p>
                    <p className="text-[10px] text-gray-400">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function RelatedSection({ related }) {
  return (
    <section className="border-b border-gray-100 bg-white px-5 py-10 md:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-5 text-base font-black text-gray-900">Produkte të ngjashme</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {related.map(({ slug, img, al, sub, available }, i) => (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              {available ? (
                <Link
                  to={slug}
                  className="group flex items-center gap-3 overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-3 transition-colors hover:border-[#4ca706]/40 hover:bg-[#f8fdf4]"
                >
                  <div className="size-12 shrink-0 overflow-hidden rounded-lg bg-white">
                    <img src={img} alt={al} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[12px] font-bold text-gray-700">{al}</p>
                    <p className="text-[10px] text-gray-400">{sub}</p>
                  </div>
                  <ChevronRight className="size-4 text-gray-300 group-hover:text-[#4ca706]" />
                </Link>
              ) : (
                <span
                  aria-disabled
                  title="Së shpejti"
                  className="flex cursor-not-allowed items-center gap-3 overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-3"
                >
                  <div className="size-12 shrink-0 overflow-hidden rounded-lg bg-white">
                    <img src={img} alt={al} className="h-full w-full object-cover opacity-70" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[12px] font-bold text-gray-700">{al}</p>
                    <p className="text-[10px] text-gray-400">{sub}</p>
                  </div>
                  <ChevronRight className="size-4 text-gray-300" />
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Product3DPage({ lang = 'al', crumbLabel, specs, steps, related, children }) {
  return (
    <>
      <Breadcrumb label={crumbLabel} />
      {children}
      <SpecsSection specs={specs} steps={steps} />
      <RelatedSection related={related} />
      <BottomCTA lang={lang} />
    </>
  )
}
