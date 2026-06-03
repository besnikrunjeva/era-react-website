import { motion } from 'framer-motion'

const placeholders = {
  al: [
    { quote: 'Testimonial real shtohet këtu — cilësia e printimit, shpejtësia e dërgimit.', name: 'Emri i Klientit', role: 'Kafeja / Restoranti, Prishtinë' },
    { quote: 'Testimonial i dytë real shtohet këtu — besueshmëria e partneritetit.', name: 'Emri i Klientit', role: 'Biznesi, Kosovë' },
  ],
  en: [
    { quote: 'Real testimonial goes here — print quality, delivery speed.', name: 'Client Name', role: 'Cafe / Restaurant, Pristina' },
    { quote: 'Second real testimonial goes here — reliability of the partnership.', name: 'Client Name', role: 'Business, Kosovo' },
  ],
}

export function TestimonialsSection({ lang = 'al' }) {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#4ca706]">
            {lang === 'al' ? 'Çfarë thonë partnerët' : 'What clients say'}
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            {lang === 'al' ? 'Fjalë nga partnerët tanë' : 'Words from our partners'}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 max-w-3xl mx-auto">
          {placeholders[lang].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-dashed border-gray-200 bg-white p-7"
            >
              <div className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-gray-300">
                {lang === 'al' ? 'Em. shtohet' : 'Placeholder'}
              </div>
              <p className="text-sm italic leading-relaxed text-gray-300">"{t.quote}"</p>
              <div className="mt-5 border-t border-gray-100 pt-4">
                <p className="text-xs font-bold text-gray-200">{t.name}</p>
                <p className="text-xs text-gray-200">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
