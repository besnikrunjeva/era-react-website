import imgMain        from '@/assets/products/caj-gjelbrt.jpg'
import imgForestFruits from '@/assets/products/caj-forest-fruits.png'
import imgMana         from '@/assets/products/caj-mana-slimming.jpg'
import imgPfanta       from '@/assets/products/caj-pfanta-sage.jpg'

export const PRODUCT = {
  slug: '/products/caj-gjelbrt',

  name: {
    al: 'Go Healthy — Çaj i Gjelbërt',
    en: 'Go Healthy — Green Tea',
  },

  tagline: {
    al: 'Kuti çaji heksagonale kraft me printim CMYK — estetikë natyrale për produkte bio.',
    en: 'Hexagonal kraft tea box with CMYK print — natural aesthetic for organic products.',
  },

  img: imgMain,
  imgAlt: {
    al: 'Paketim çaji Go Healthy Çaj i Gjelbërt heksagonal kraft — ERA Print Pack Kosovë',
    en: 'Go Healthy Green Tea hexagonal kraft packaging — ERA Print Pack Kosovo',
  },

  badges: [
    { al: 'Printim CMYK',        en: 'CMYK Print'         },
    { al: 'Letër kraft',         en: 'Kraft paper'         },
    { al: 'Formë heksagonale',   en: 'Hexagonal shape'    },
    { al: 'Personalizim i plotë', en: 'Full customization' },
  ],

  highlights: [
    { iconName: 'Printer', label: { al: 'Printimi',   en: 'Print'      }, value: { al: '4-ngjyrësh CMYK', en: '4-color CMYK' } },
    { iconName: 'Package', label: { al: 'Sasia min.', en: 'Min. qty'   }, value: { al: '500 copë',         en: '500 pcs'       } },
    { iconName: 'Clock',   label: { al: 'Prodhimi',   en: 'Production' }, value: { al: '7–14 ditë',        en: '7–14 days'     } },
    { iconName: 'Leaf',    label: { al: 'Materiali',  en: 'Material'   }, value: { al: 'Kraft natyral',    en: 'Natural kraft'  } },
  ],

  specs: [
    { key: 'Format',     val: 'Heksagonale — letër kraft', green: true },
    { key: 'Materiali',  val: 'Letër kraft natyrale'                   },
    { key: 'Printimi',   val: 'CMYK 4-ngjyrësh · Offset'              },
    { key: 'Sasia min.', val: '500 copë',                   green: true },
    { key: 'Prodhimi',   val: '7–14 ditë pune',             green: true },
  ],

  steps: [
    { n: '01', title: { al: 'Dërgo dizajnin',    en: 'Send your design'   }, desc: { al: 'WhatsApp · Email · Telefon',      en: 'WhatsApp · Email · Phone'        } },
    { n: '02', title: { al: 'Merr ofertën',      en: 'Get a quote'        }, desc: { al: 'Çmim final brenda 24 orësh',       en: 'Final price within 24 hours'     } },
    { n: '03', title: { al: 'Konfirmo & paguaj', en: 'Confirm & pay'      }, desc: { al: 'Provë para printimit masiv',        en: 'Proof before full print run'     } },
    { n: '04', title: { al: 'Dorëzim 7–14 ditë', en: 'Delivery 7–14 days' }, desc: { al: 'Direkt në adresën tënde, Kosovë', en: 'Directly to your address, Kosovo' } },
  ],

  related: [
    { slug: '/products/caj-pfanta-sage',   img: imgPfanta,       al: 'Pfanta Organic — Sage Tea',   en: 'Pfanta Organic — Sage Tea',  sub: 'Heksagon · E gjelbër', available: true },
    { slug: '/products/caj-forest-fruits', img: imgForestFruits, al: 'Go Healthy — Forest Fruits',  en: 'Go Healthy — Forest Fruits', sub: 'Gable-top · Kraft',    available: true },
    { slug: '/products/caj-mana-slimming', img: imgMana,         al: 'Mana Tea — Slimming',         en: 'Mana Tea — Slimming',        sub: 'Gable-top · Navy',     available: true },
  ],

  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per paketim çaji format heksagonal kraft. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in hexagonal kraft tea packaging. Can you give me a quote?',
  },

  seo: {
    al: {
      title:       'Kuti Çaji Heksagonale Kraft | ERA Print Pack Kosovë',
      description: 'Kuti çaji heksagonale kraft me printim CMYK. Estetikë natyrale bio me logo të personalizuar. Sasia min. 500 copë. ERA Print Pack, Prizren, Kosovë.',
    },
    en: {
      title:       'Hexagonal Kraft Tea Box | ERA Print Pack Kosovo',
      description: 'Hexagonal kraft tea box with CMYK print. Natural organic aesthetic with custom logo. Min. 500 pcs. ERA Print Pack Kosovo.',
    },
  },
}
