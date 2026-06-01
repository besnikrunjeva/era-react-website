import { motion } from 'framer-motion'
import { MessageCircle, Receipt, CheckCheck, Truck } from 'lucide-react'

const steps = {
  al: [
    {
      n: '01',
      icon: MessageCircle,
      title: 'Na kontakto',
      desc: 'Na shkruan në WhatsApp — trego çfarë ambalazhe nevojiten, sasia dhe dimensionet. Pa formularë.',
    },
    {
      n: '02',
      icon: Receipt,
      title: 'Ofertë falas',
      desc: 'Brenda 24 orësh të dërgojmë çmimin, specifikimet dhe të gjitha opsionet. Pa asnjë detyrim.',
    },
    {
      n: '03',
      icon: CheckCheck,
      title: 'Shikon & Miraton',
      desc: 'Marrin mockupin 3D falas të ambalazhes me logon tënde — shikon saktësisht si do të duket, pastaj miraton.',
      highlight: true,
    },
    {
      n: '04',
      icon: Truck,
      title: 'Dorëzim 7–14 ditë',
      desc: 'Prodhojmë dhe dorëzojmë ambalazhët direkt te ti. Nga miratimi deri tek dorëzimi — dy javë.',
    },
  ],
  en: [
    {
      n: '01',
      icon: MessageCircle,
      title: 'Contact us',
      desc: 'Message us on WhatsApp — describe what packaging you need, quantity and dimensions. No forms.',
    },
    {
      n: '02',
      icon: Receipt,
      title: 'Free quote',
      desc: 'Within 24 hours we send you the price, specs and all options. Zero obligation.',
    },
    {
      n: '03',
      icon: CheckCheck,
      title: 'See & Approve',
      desc: 'You receive a free 3D mockup of your packaging with your logo — see exactly how it looks, then approve.',
      highlight: true,
    },
    {
      n: '04',
      icon: Truck,
      title: 'Delivered in 7–14 days',
      desc: 'We produce and deliver your packaging directly to you. From approval to delivery — two weeks.',
    },
  ],
}

export function ProcessSteps({ lang = 'al' }) {
  return (
    <section className="relative overflow-hidden bg-white py-24 px-4">

      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#4ca706]">
            {lang === 'al' ? 'Si funksionon' : 'How it works'}
          </span>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {lang === 'al' ? 'Katër hapa deri tek ambalazha jote' : 'Four steps to your custom packaging'}
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm">
            {lang === 'al'
              ? 'Procesi ynë është i thjeshtë dhe transparent. Ti sheh çdo hap para se të paguash gjë.'
              : 'Our process is simple and transparent. You see every step before paying anything.'}
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 gap-y-10 md:grid-cols-4 md:gap-x-6">

          {/* Connecting line — desktop only */}
          <div
            aria-hidden
            className="absolute top-[30px] left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px hidden md:block"
            style={{ background: 'linear-gradient(90deg, #4ca706 0%, #e5e7eb 40%, #e5e7eb 60%, #e5e7eb 100%)' }}
          />

          {steps[lang].map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Circle */}
                <div
                  className={`relative z-10 mb-6 flex size-[60px] items-center justify-center rounded-full border-2 bg-white shadow-sm ${
                    step.highlight
                      ? 'border-[#4ca706] shadow-[0_0_24px_rgba(76,167,6,0.15)]'
                      : 'border-gray-100'
                  }`}
                >
                  <Icon className={`size-6 ${step.highlight ? 'text-[#4ca706]' : 'text-gray-400'}`} />
                  <span
                    className={`absolute -top-1.5 -right-1.5 flex size-[18px] items-center justify-center rounded-full text-[9px] font-bold text-white ${
                      step.highlight ? 'bg-[#4ca706]' : 'bg-gray-300'
                    }`}
                  >
                    {step.n}
                  </span>
                </div>

                <h3 className={`mb-2 text-[15px] font-bold ${step.highlight ? 'text-[#4ca706]' : 'text-gray-900'}`}>
                  {step.title}
                  {step.highlight && (
                    <span className="ml-2 inline-flex items-center rounded-full bg-[#4ca706]/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#4ca706]">
                      {lang === 'al' ? 'falas' : 'free'}
                    </span>
                  )}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
