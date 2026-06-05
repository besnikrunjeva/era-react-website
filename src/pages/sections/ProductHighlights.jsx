import { motion } from 'framer-motion'
import { Printer, Package, Clock, Leaf } from 'lucide-react'

const ICON_MAP = { Printer, Package, Clock, Leaf }
const EASE = [0.16, 1, 0.3, 1]

export function ProductHighlights({ lang = 'al', highlights }) {
  return (
    <section className="border-y border-gray-100 bg-white px-5 md:px-8">
      <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4">
        {highlights.map((item, i) => {
          const Icon = ICON_MAP[item.iconName]
          const isLastInRow = i === highlights.length - 1
          const isOddMobile = i % 2 === 0 && !isLastInRow

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
              className={[
                'flex flex-col gap-1 px-6 py-5',
                !isLastInRow ? 'md:border-r md:border-gray-100' : '',
                isOddMobile ? 'border-r border-gray-100' : '',
                i < 2 ? 'border-b border-gray-100 md:border-b-0' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {Icon && <Icon size={18} className="text-[#4ca706]" />}
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                {item.label[lang]}
              </p>
              <p className="text-sm font-bold text-gray-800">{item.value[lang]}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
