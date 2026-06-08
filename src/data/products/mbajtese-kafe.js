import imgStudio from '@/assets/products/cup-holder-studio.png'
import imgGota   from '@/assets/products/gota.webp'
import imgFries  from '@/assets/products/fries-box-studio.png'

export const PRODUCT = {
  slug: '/products/mbajtese-kafe',

  name: {
    al: 'Mbajtëse Kafeje',
    en: 'Coffee Cup Holder',
  },

  tagline: {
    al: 'Mbajtëse letre për 2 gota — praktike, e printuar me dizajnin tënd, perfekte për kafene.',
    en: 'Paper carrier for 2 cups — practical, custom printed, perfect for your café.',
  },

  img: imgStudio,
  imgAlt: {
    al: 'Mbajtëse kafeje me printim ngjyrash — ERA Print Pack Kosovë',
    en: 'Colourful printed coffee cup holder — ERA Print Pack Kosovo',
  },

  badges: [
    { al: '2 gota',               en: '2 cups'              },
    { al: 'Printim CMYK',         en: 'CMYK Print'          },
    { al: 'Karton solid',         en: 'Solid board'         },
    { al: 'Personalizim i plotë', en: 'Full customization'  },
  ],

  highlights: [
    { iconName: 'Printer', label: { al: 'Printimi',   en: 'Print'      }, value: { al: '4-ngjyrësh CMYK', en: '4-color CMYK'  } },
    { iconName: 'Package', label: { al: 'Sasia min.', en: 'Min. qty'   }, value: { al: '500 copë',         en: '500 pcs'        } },
    { iconName: 'Clock',   label: { al: 'Prodhimi',   en: 'Production' }, value: { al: '7–14 ditë',        en: '7–14 days'      } },
    { iconName: 'Leaf',    label: { al: 'Kapaciteti', en: 'Capacity'   }, value: { al: '2 gota',           en: '2 cups'         } },
  ],

  specs: [
    { key: 'Kapaciteti',  val: '2 gota',                    green: true },
    { key: 'Materiali',   val: 'Karton solid GC2'                       },
    { key: 'Printimi',    val: 'CMYK 4-ngjyrësh · Offset'              },
    { key: 'Sasia min.',  val: '500 copë',                  green: true },
    { key: 'Prodhimi',    val: '7–14 ditë pune',            green: true },
  ],

  steps: [
    { n: '01', title: { al: 'Dërgo dizajnin',     en: 'Send your design'   }, desc: { al: 'WhatsApp · Email · Telefon',     en: 'WhatsApp · Email · Phone'        } },
    { n: '02', title: { al: 'Merr ofertën',        en: 'Get a quote'        }, desc: { al: 'Çmim final brenda 24 orësh',      en: 'Final price within 24 hours'     } },
    { n: '03', title: { al: 'Konfirmo & paguaj',   en: 'Confirm & pay'      }, desc: { al: 'Provë para printimit masiv',       en: 'Proof before full print run'     } },
    { n: '04', title: { al: 'Dorëzim 7–14 ditë',  en: 'Delivery 7–14 days' }, desc: { al: 'Direkt në adresën tënde, Kosovë', en: 'Directly to your address, Kosovo'} },
  ],

  // cross-sell: shown as special section on page
  pairWith: {
    slug: '/products/gota',
    img: imgGota,
    label: { al: 'Gota Letre 7oz', en: '7oz Paper Cups' },
    desc: {
      al: 'Mbajtësja është projektuar posaçërisht për gotat tona 7oz — hyn perfekt dhe qëndron e sigurt gjatë transportit.',
      en: 'This holder is designed specifically for our 7oz cups — fits perfectly and stays secure during transport.',
    },
  },

  related: [
    { slug: '/products/kuti-pomfrit', img: imgFries, al: 'Kuti Pomfriti', en: 'French Fries Box', sub: 'Formë jastëku · Karton', available: true },
  ],

  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per mbajtese kafeje. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in coffee cup holders. Can you give me a quote?',
  },

  seo: {
    al: {
      title:       'Mbajtëse Kafeje me Printim | ERA Print Pack Kosovë',
      description: 'Mbajtëse letre për 2 gota kafeje me printim CMYK të plotë. Perfekte për gotat 7oz. Sasia min. 500 copë. ERA Print Pack, Kosovë.',
    },
    en: {
      title:       'Custom Printed Coffee Cup Holder | ERA Print Pack Kosovo',
      description: 'Paper cup holder for 2 cups with full CMYK custom print. Perfect for 7oz cups. Min. 500 pcs. ERA Print Pack Kosovo.',
    },
  },
}
