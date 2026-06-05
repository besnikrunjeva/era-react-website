import { motion } from 'framer-motion'
import { Target, Box, Clock, Users } from 'lucide-react'

const points = {
  al: [
    {
      icon: Target,
      title: 'Vetëm ambalazhe letre',
      desc: 'Nuk printojmë gjithçka. Prodhojmë vetëm ambalazhe letre — fokusi është arsyeja pse cilësia tregon.',
    },
    {
      icon: Box,
      title: 'E sheh para se paguan',
      desc: 'Para se të porosisësh, sheh saktësisht si do të duket ambalazha — me logon dhe ngjyrat tua. Falas, pa detyrime.',
    },
    {
      icon: Clock,
      title: 'Gati brenda dy javësh',
      desc: 'Nga miratimi i dizajnit deri tek dorëzimi — brenda dy javësh. Pa pritje të gjata.',
    },
    {
      icon: Users,
      title: '397 partnerë, jo vetëm klientë',
      desc: 'Kafeteri, restorante, furra dhe supermarkete — mbi 397 biznese na besojnë çdo ditë.',
    },
  ],
  en: [
    {
      icon: Target,
      title: 'Paper packaging only',
      desc: "We don't print everything. We only make paper packaging — that focus is why the quality shows.",
    },
    {
      icon: Box,
      title: 'See it before you pay',
      desc: 'Before you order, see exactly how your packaging will look — with your logo and colours. Free, no strings.',
    },
    {
      icon: Clock,
      title: 'Ready in two weeks',
      desc: 'From design approval to delivery — within two weeks. No long waits.',
    },
    {
      icon: Users,
      title: '397 partners, not just clients',
      desc: 'Cafés, restaurants, bakeries and supermarkets — over 397 businesses trust us every day.',
    },
  ],
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export function WhyERA({ lang = 'al' }) {
  return (
    <section className="relative overflow-hidden bg-[#0f1010] py-24 px-4">

      {/* Glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] blur-[130px]"
          style={{ background: '#4ca706' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {lang === 'al'
              ? 'Të tjerët printojnë gjithçka. Ne vetëm ambalazhe letre.'
              : 'Others print everything. We only do paper packaging.'}
          </h2>
          <p className="mt-3 text-white/60 max-w-xl mx-auto text-sm">
            {lang === 'al'
              ? 'Kur bën vetëm një gjë, e bën mirë. Çdo ditë, me çdo porosi.'
              : 'Specialisation is not a limitation — it\'s why our quality is unmatched.'}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {points[lang].map((p) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                variants={item}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 transition-colors hover:border-[#4ca706]/30 hover:bg-[#4ca706]/[0.04]"
              >
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-[#4ca706]/10">
                  <Icon className="size-5 text-[#4ca706]" />
                </div>
                <h3 className="mb-2 text-base font-bold text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{p.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
