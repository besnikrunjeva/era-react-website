import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Cpu } from 'lucide-react'

export function MachinesCallout({ lang = 'al' }) {
  return (
    <section className="bg-white py-10 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            to="/machines"
            className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-gray-50 px-8 py-6 transition-colors hover:border-[#4ca706]/40 hover:bg-[#4ca706]/5"
          >
            <div className="flex items-center gap-5">
              <div className="flex size-12 items-center justify-center rounded-full bg-[#4ca706]/10 text-[#4ca706]">
                <Cpu className="size-5" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">
                  {lang === 'al' ? '13 makina prodhimi në Prishtinë' : '13 production machines in Pristina'}
                </h3>
                <p className="text-sm text-gray-500">
                  {lang === 'al'
                    ? 'Shiko kapacitetin e plotë të prodhimit tonë'
                    : 'View our full production capacity'}
                </p>
              </div>
            </div>
            <ArrowRight className="size-5 text-[#4ca706] transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
