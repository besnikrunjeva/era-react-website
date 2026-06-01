import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone, Mail, MapPin, Clock, MessageCircle,
  Send, ChevronDown, CheckCircle, AlertCircle,
} from 'lucide-react'
import { InfiniteGrid } from '@/components/ui/infinite-grid'
import emailjs from '@emailjs/browser'

// ── EmailJS config — set these in .env ──────────────────────
// VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
// VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
// VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
const EJ_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || ''
const EJ_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const EJ_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || ''

// ── Copy ─────────────────────────────────────────────────────
const copy = {
  al: {
    badge:       'Kontakto ERA',
    h1:          'Na kontaktoni për ofertë falas',
    sub:         'Dërgoni logon tuaj dhe specifikimet — brenda 24 orësh merrni ofertën dhe mockupin 3D falas.',
    waCta:       'Nis bisedën në WhatsApp',
    infoTitle:   'Informacioni i Kontaktit',
    phone:       'Telefon',
    email:       'Email',
    address:     'Adresa',
    hours:       'Orari',
    phoneV:      '+383 44 113 533',
    emailV:      'info@eraprintpack.com',
    addressV:    'Rr. Jakup Musa nr. 36\nmagjistralja Ferizaj–Prishtinë',
    hoursV:      'E Hënë – E Premte\n08:00 – 17:00',
    formTitle:   'Dërgo Mesazh',
    formSub:     'Plotëso formularin dhe do t\'ju kontaktojmë brenda 24 orësh.',
    name:        'Emri & Mbiemri *',
    biz:         'Emri i Biznesit',
    emailF:      'Email Adresa *',
    phoneF:      'Numri i Telefonit',
    service:     'Lloji i Shërbimit *',
    serviceDef:  'Zgjidhni llojin e ambalazhes...',
    msg:         'Mesazhi Juaj *',
    msgPh:       'Përshkruani produktin që ju nevojitet, sasinë e përafërt dhe afatin...',
    submit:      'Dërgo Mesazhin',
    sending:     'Duke dërguar...',
    successT:    'Mesazhi u dërgua!',
    successS:    'Do t\'ju kontaktojmë brenda 24 orësh. Mund të na kontaktoni edhe direkt në WhatsApp.',
    errorT:      'Ndodhi një gabim',
    errorS:      'Ju lutemi provoni përsëri ose na kontaktoni direkt në WhatsApp.',
    faqTitle:    'Pyetje të Shpeshta',
    services: [
      { v: 'gota',    l: 'Gota Letre' },
      { v: 'kupa',    l: 'Kupa Pasta & Supe' },
      { v: 'akull',   l: 'Kupa Akullore' },
      { v: 'kuti',    l: 'Kuti Ushqimore' },
      { v: 'etiketa', l: 'Etiketa & Stikera' },
      { v: 'mbajtese',l: 'Mbajtëse Lugësh' },
      { v: 'other',   l: 'Tjetër' },
    ],
    faqs: [
      {
        q: 'Cila është sasia minimale e porosisë?',
        a: 'Sasia minimale varet nga lloji i produktit. Për shumicën e paketimeve standarde, minimumi fillon nga 500 copë. Na kontaktoni për detaje sipas produktit që ju intereson.',
      },
      {
        q: 'Sa zgjat prodhimi?',
        a: 'Afati standard i prodhimit është 7 deri në 14 ditë pune pas aprovimit të dizajnit. Për porosi urgjente ofrojmë edhe shërbim express.',
      },
      {
        q: 'A mund ta sjell dizajnin tim?',
        a: 'Po, pranojmë dizajne të gatshme në formatet AI, PDF, PSD dhe EPS. Ekipi ynë i kontrollon dhe i përgatit për printim profesional.',
      },
      {
        q: 'A bëni dorëzim jashtë Kosovës?',
        a: 'Po, ofrojmë dërgesa në të gjithë rajonin e Ballkanit. Na kontaktoni për informata rreth kostove dhe afateve të transportit.',
      },
    ],
  },
  en: {
    badge:       'Contact ERA',
    h1:          'Get your free quote today',
    sub:         'Send us your logo and specifications — within 24 hours you\'ll receive a quote and a free 3D mockup.',
    waCta:       'Start a WhatsApp chat',
    infoTitle:   'Contact Information',
    phone:       'Phone',
    email:       'Email',
    address:     'Address',
    hours:       'Hours',
    phoneV:      '+383 44 113 533',
    emailV:      'info@eraprintpack.com',
    addressV:    'Jakup Musa St. No. 36\nFerizaj–Prishtina Highway',
    hoursV:      'Monday – Friday\n08:00 – 17:00',
    formTitle:   'Send a Message',
    formSub:     'Fill in the form and we\'ll get back to you within 24 hours.',
    name:        'Full Name *',
    biz:         'Business Name',
    emailF:      'Email Address *',
    phoneF:      'Phone Number',
    service:     'Service Type *',
    serviceDef:  'Select packaging type...',
    msg:         'Your Message *',
    msgPh:       'Describe the product you need, approximate quantity, and timeline...',
    submit:      'Send Message',
    sending:     'Sending...',
    successT:    'Message sent!',
    successS:    'We\'ll get back to you within 24 hours. You can also reach us directly on WhatsApp.',
    errorT:      'Something went wrong',
    errorS:      'Please try again or contact us directly on WhatsApp.',
    faqTitle:    'Frequently Asked Questions',
    services: [
      { v: 'gota',    l: 'Paper Cups' },
      { v: 'kupa',    l: 'Pasta & Soup Cups' },
      { v: 'akull',   l: 'Ice Cream Cups' },
      { v: 'kuti',    l: 'Food Boxes' },
      { v: 'etiketa', l: 'Labels & Stickers' },
      { v: 'mbajtese',l: 'Cutlery Holders' },
      { v: 'other',   l: 'Other' },
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity?',
        a: 'The minimum quantity depends on the product type. For most standard packaging items, orders start from 500 pieces. Contact us for exact details.',
      },
      {
        q: 'How long does production take?',
        a: 'Standard production time is 7 to 14 business days after the design is approved. We also offer an express service for urgent orders.',
      },
      {
        q: 'Can I bring my own design?',
        a: 'Yes. We accept artwork in AI, PDF, PSD, and EPS formats. Our team will review it and prepare it for professional printing.',
      },
      {
        q: 'Do you deliver outside Kosovo?',
        a: 'Yes, we deliver across the Balkans region. Contact us for shipping costs and lead-time details.',
      },
    ],
  },
}

// ── JSON-LD schemas ───────────────────────────────────────────
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Shtypshkronja ERA',
  alternateName: 'ERA Print Pack',
  telephone: '+38344113533',
  email: 'info@eraprintpack.com',
  url: 'https://shtypshkronjaera.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rr. Jakup Musa nr. 36',
    addressLocality: 'Prishtinë',
    addressRegion: 'Prishtinë',
    addressCountry: 'XK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.3811182,
    longitude: 21.170452,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
  description: 'Prodhim ambalazhesh letre me printim të personalizuar — gota, kuti, kupa dhe etiketa. Bazë në Prishtinë, Kosovë.',
  priceRange: '$$',
  sameAs: [
    'https://www.facebook.com/shtypshkronjaera',
    'https://www.instagram.com/shtypshkronjaera',
  ],
}

// ── Input component ───────────────────────────────────────────
function Field({ label, error, className = '', children }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && <label className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-500">{label}</label>}
      {children}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}

const inputCls = 'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#4ca706] focus:ring-1 focus:ring-[#4ca706]/30'

// ── FAQ item ──────────────────────────────────────────────────
function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="border-b border-white/[0.07] last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-[15px] font-semibold text-white">{q}</span>
        <ChevronDown
          className="size-4 flex-shrink-0 text-[#4ca706] transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-white/50">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────
export default function Contact({ lang = 'al' }) {
  const t = copy[lang] || copy.al
  const formRef = useRef(null)
  const [fields, setFields] = useState({ name: '', biz: '', email: '', phone: '', service: '', msg: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [openFaq, setOpenFaq] = useState(null)

  // SEO
  useEffect(() => {
    document.title = lang === 'al'
      ? 'Kontakt — Shtypshkronja ERA | Ambalazhe Prishtinë'
      : 'Contact — Shtypshkronja ERA | Packaging Prishtina'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', lang === 'al'
      ? 'Kontaktoni ERA për ambalazhe letre me printim të personalizuar. Gota, kuti, kupa dhe etiketa. Prishtinë, Kosovë. ☎ +383 44 113 533'
      : 'Contact ERA for custom printed paper packaging. Cups, boxes, labels. Pristina, Kosovo. ☎ +383 44 113 533')
    // Inject JSON-LD
    const id = 'era-local-schema'
    if (!document.getElementById(id)) {
      const s = document.createElement('script')
      s.id = id; s.type = 'application/ld+json'
      s.textContent = JSON.stringify(localBusinessSchema)
      document.head.appendChild(s)
    }
    const faqId = 'era-faq-schema'
    if (!document.getElementById(faqId)) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: t.faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
      const s = document.createElement('script')
      s.id = faqId; s.type = 'application/ld+json'
      s.textContent = JSON.stringify(faqSchema)
      document.head.appendChild(s)
    }
    return () => {
      document.getElementById(id)?.remove()
      document.getElementById(faqId)?.remove()
    }
  }, [lang])

  function validate() {
    const e = {}
    if (!fields.name.trim())    e.name    = lang === 'al' ? 'Emri është i detyrueshëm' : 'Name is required'
    if (!fields.email.trim())   e.email   = lang === 'al' ? 'Email është i detyrueshëm' : 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(fields.email)) e.email = lang === 'al' ? 'Email i pavlefshëm' : 'Invalid email'
    if (!fields.service)        e.service = lang === 'al' ? 'Zgjidhni llojin' : 'Select a type'
    if (!fields.msg.trim())     e.msg     = lang === 'al' ? 'Mesazhi është i detyrueshëm' : 'Message is required'
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setStatus('sending')
    try {
      if (EJ_SERVICE && EJ_TEMPLATE && EJ_KEY) {
        await emailjs.sendForm(EJ_SERVICE, EJ_TEMPLATE, formRef.current, EJ_KEY)
      } else {
        // Dev mode — log and simulate success
        console.info('[Contact] EmailJS not configured. Form data:', fields)
        await new Promise(r => setTimeout(r, 800))
      }
      setStatus('success')
      setFields({ name: '', biz: '', email: '', phone: '', service: '', msg: '' })
    } catch {
      setStatus('error')
    }
  }

  const set = key => e => setFields(f => ({ ...f, [key]: e.target.value }))

  const contactItems = [
    { icon: Phone,    label: t.phone,   value: t.phoneV,   href: 'tel:+38344113533' },
    { icon: Mail,     label: t.email,   value: t.emailV,   href: 'mailto:info@eraprintpack.com' },
    { icon: MapPin,   label: t.address, value: t.addressV, href: null },
    { icon: Clock,    label: t.hours,   value: t.hoursV,   href: null },
  ]

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <InfiniteGrid className="min-h-[52dvh]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center gap-5 px-4 py-20 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#4ca706]/40 bg-[#4ca706]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#4ca706]">
            {t.badge}
          </span>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            {t.h1}
          </h1>
          <p className="max-w-lg text-base text-gray-500 md:text-lg">
            {t.sub}
          </p>
          <a
            href="https://wa.me/38344113533"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#4ca706] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4ca706]/20 transition-colors hover:bg-[#3d8f05]"
          >
            <MessageCircle className="size-4" />
            {t.waCta}
          </a>
        </motion.div>
      </InfiniteGrid>

      {/* ── Contact main ──────────────────────────────────── */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[360px_1fr]">

          {/* Info card — dark */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-2xl bg-[#0f1010] p-8"
          >
            {/* Glow */}
            <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#4ca706] opacity-[0.07] blur-[80px]" />

            <h2 className="mb-8 text-lg font-bold text-white">{t.infoTitle}</h2>

            <div className="space-y-6">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex size-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#4ca706]/10">
                    <Icon className="size-4 text-[#4ca706]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/30">{label}</p>
                    {href
                      ? <a href={href} className="mt-0.5 block text-sm font-medium text-white/80 hover:text-white">{value}</a>
                      : <p className="mt-0.5 text-sm font-medium text-white/80 whitespace-pre-line">{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Quick actions */}
            <div className="mt-10 flex flex-col gap-3">
              <a
                href="https://wa.me/38344113533"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4ca706] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#3d8f05]"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
              <a
                href="tel:+38344113533"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white/70 transition-colors hover:border-white/20 hover:text-white"
              >
                <Phone className="size-4" />
                +383 44 113 533
              </a>
            </div>

            {/* Social */}
            <div className="mt-8 flex items-center gap-3">
              <a href="https://facebook.com/shtypshkronjaera" target="_blank" rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-xl border border-white/10 text-white/40 transition-colors hover:border-white/20 hover:text-white">
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://instagram.com/shtypshkronjaera" target="_blank" rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-xl border border-white/10 text-white/40 transition-colors hover:border-white/20 hover:text-white">
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
          >
            <h2 className="mb-1 text-lg font-bold text-gray-900">{t.formTitle}</h2>
            <p className="mb-8 text-sm text-gray-400">{t.formSub}</p>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4 py-16 text-center"
                >
                  <div className="flex size-16 items-center justify-center rounded-full bg-[#4ca706]/10">
                    <CheckCircle className="size-8 text-[#4ca706]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{t.successT}</h3>
                  <p className="max-w-sm text-sm text-gray-500">{t.successS}</p>
                  <a
                    href="https://wa.me/38344113533"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 rounded-xl bg-[#4ca706] px-6 py-3 text-sm font-bold text-white"
                  >
                    <MessageCircle className="size-4" />
                    WhatsApp
                  </a>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                >
                  <Field label={t.name} error={errors.name}>
                    <input name="name" type="text" value={fields.name} onChange={set('name')}
                      placeholder={lang === 'al' ? 'Besnik Hoxha' : 'John Smith'}
                      className={inputCls} />
                  </Field>

                  <Field label={t.biz}>
                    <input name="biz" type="text" value={fields.biz} onChange={set('biz')}
                      placeholder={lang === 'al' ? 'Kafe Soma' : 'Soma Café'}
                      className={inputCls} />
                  </Field>

                  <Field label={t.emailF} error={errors.email}>
                    <input name="email" type="email" value={fields.email} onChange={set('email')}
                      placeholder="info@biznesijuaj.com"
                      className={inputCls} />
                  </Field>

                  <Field label={t.phoneF}>
                    <input name="phone" type="tel" value={fields.phone} onChange={set('phone')}
                      placeholder="+383 44 000 000"
                      className={inputCls} />
                  </Field>

                  <Field label={t.service} error={errors.service} className="sm:col-span-2">
                    <select name="service" value={fields.service} onChange={set('service')}
                      className={inputCls + ' cursor-pointer'}>
                      <option value="">{t.serviceDef}</option>
                      {t.services.map(s => <option key={s.v} value={s.v}>{s.l}</option>)}
                    </select>
                  </Field>

                  <Field label={t.msg} error={errors.msg} className="sm:col-span-2">
                    <textarea name="msg" rows={5} value={fields.msg} onChange={set('msg')}
                      placeholder={t.msgPh}
                      className={inputCls + ' resize-none'} />
                  </Field>

                  {status === 'error' && (
                    <div className="sm:col-span-2 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                      <AlertCircle className="size-4 flex-shrink-0" />
                      {t.errorS}
                    </div>
                  )}

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#4ca706] px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#3d8f05] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending'
                        ? <><span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />{t.sending}</>
                        : <><Send className="size-4" />{t.submit}</>
                      }
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Google Maps ───────────────────────────────────── */}
      <div className="bg-white px-4 pb-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d731.0!2d21.170452!3d42.3811182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13547e6b42f19ecb%3A0x1a8c40473e9c272f!2sShytpshkronja%20ERA!5e0!3m2!1sen!2s!4v1"
            width="100%"
            height="360"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shtypshkronja ERA — Lokacioni"
          />
        </div>
      </div>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0f1010] px-4 py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4ca706] opacity-[0.06] blur-[130px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 text-center"
          >
            <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#4ca706]">FAQ</span>
            <h2 className="text-2xl font-bold text-white md:text-3xl">{t.faqTitle}</h2>
          </motion.div>
          <div className="divide-y divide-white/[0.07] rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6">
            {t.faqs.map((f, i) => (
              <FaqItem
                key={i}
                q={f.q}
                a={f.a}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
