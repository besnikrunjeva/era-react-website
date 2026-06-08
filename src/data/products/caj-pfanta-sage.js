import imgMain        from '@/assets/products/caj-pfanta-sage.jpg'
import imgForestFruits from '@/assets/products/caj-forest-fruits.png'
import imgMana         from '@/assets/products/caj-mana-slimming.jpg'
import imgGjelbrt      from '@/assets/products/caj-gjelbrt.jpg'

export const PRODUCT = {
  slug: '/products/caj-pfanta-sage',

  name: {
    al: 'Pfanta Organic — Sage Tea',
    en: 'Pfanta Organic — Sage Tea',
  },

  tagline: {
    al: 'Kuti çaji heksagonale me printim CMYK — formë unike gjashtëkëndore për produkte premium organike.',
    en: 'Hexagonal tea box with CMYK print — unique six-sided shape for premium organic products.',
  },

  img: imgMain,
  imgAlt: {
    al: 'Paketim çaji Pfanta Organic Sage Tea heksagonal — ERA Print Pack Kosovë',
    en: 'Pfanta Organic Sage Tea hexagonal packaging — ERA Print Pack Kosovo',
  },

  badges: [
    { al: 'Printim CMYK',        en: 'CMYK Print'         },
    { al: 'Formë heksagonale',   en: 'Hexagonal shape'    },
    { al: 'Karton food-grade',   en: 'Food-grade board'   },
    { al: 'Personalizim i plotë', en: 'Full customization' },
  ],

  highlights: [
    { iconName: 'Printer', label: { al: 'Printimi',   en: 'Print'      }, value: { al: '4-ngjyrësh CMYK',  en: '4-color CMYK'   } },
    { iconName: 'Package', label: { al: 'Sasia min.', en: 'Min. qty'   }, value: { al: '500 copë',          en: '500 pcs'         } },
    { iconName: 'Clock',   label: { al: 'Prodhimi',   en: 'Production' }, value: { al: '7–14 ditë',         en: '7–14 days'       } },
    { iconName: 'Leaf',    label: { al: 'Materiali',  en: 'Material'   }, value: { al: 'Karton food-grade', en: 'Food-grade board' } },
  ],

  specs: [
    { key: 'Format',     val: 'Heksagonale — 6 anë',      green: true },
    { key: 'Materiali',  val: 'Karton 350g food-grade'                },
    { key: 'Printimi',   val: 'CMYK 4-ngjyrësh · Offset'             },
    { key: 'Sasia min.', val: '500 copë',                  green: true },
    { key: 'Prodhimi',   val: '7–14 ditë pune',            green: true },
  ],

  steps: [
    { n: '01', title: { al: 'Dërgo dizajnin',    en: 'Send your design'   }, desc: { al: 'WhatsApp · Email · Telefon',      en: 'WhatsApp · Email · Phone'        } },
    { n: '02', title: { al: 'Merr ofertën',      en: 'Get a quote'        }, desc: { al: 'Çmim final brenda 24 orësh',       en: 'Final price within 24 hours'     } },
    { n: '03', title: { al: 'Konfirmo & paguaj', en: 'Confirm & pay'      }, desc: { al: 'Provë para printimit masiv',        en: 'Proof before full print run'     } },
    { n: '04', title: { al: 'Dorëzim 7–14 ditë', en: 'Delivery 7–14 days' }, desc: { al: 'Direkt në adresën tënde, Kosovë', en: 'Directly to your address, Kosovo' } },
  ],

  related: [
    { slug: '/products/caj-gjelbrt',       img: imgGjelbrt,      al: 'Go Healthy — Çaj i Gjelbërt', en: 'Go Healthy — Green Tea',     sub: 'Heksagon · Kraft',      available: true },
    { slug: '/products/caj-forest-fruits', img: imgForestFruits, al: 'Go Healthy — Forest Fruits',  en: 'Go Healthy — Forest Fruits', sub: 'Gable-top · Kraft',     available: true },
    { slug: '/products/caj-mana-slimming', img: imgMana,         al: 'Mana Tea — Slimming',         en: 'Mana Tea — Slimming',        sub: 'Gable-top · Navy',      available: true },
  ],

  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per paketim çaji format heksagonal. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in hexagonal tea packaging. Can you give me a quote?',
  },

  seo: {
    al: {
      title:       'Kuti Çaji Heksagonale me Printim | ERA Print Pack Kosovë',
      description: 'Kuti çaji heksagonale me karton food-grade dhe printim CMYK. Formë unike 6-anëshe për produkte organike premium. Sasia min. 500 copë. ERA Print Pack, Prizren, Kosovë.',
    },
    en: {
      title:       'Hexagonal Tea Box with Print | ERA Print Pack Kosovo',
      description: 'Hexagonal tea box with food-grade board and CMYK print. Unique 6-sided shape for premium organic products. Min. 500 pcs. ERA Print Pack Kosovo.',
    },
  },
}
