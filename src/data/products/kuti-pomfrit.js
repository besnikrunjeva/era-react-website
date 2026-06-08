import imgStudio from '@/assets/products/fries-box-studio.png'
import imgCupHolder from '@/assets/products/cup-holder-studio.png'

export const PRODUCT = {
  slug: '/products/kuti-pomfrit',

  name: {
    al: 'Kuti Pomfriti',
    en: 'French Fries Box',
  },

  tagline: {
    al: 'Kuti jastëku për pomfrit — formë e veçantë, printim i plotë sipas biznesit tënd.',
    en: 'Pillow-style fries box — unique shape, fully custom printed for your brand.',
  },

  img: imgStudio,
  imgAlt: {
    al: 'Kuti pomfriti me printim të kuq — ERA Print Pack Kosovë',
    en: 'Printed red french fries box — ERA Print Pack Kosovo',
  },

  badges: [
    { al: 'Formë jastëku',        en: 'Pillow shape'        },
    { al: 'Printim CMYK',         en: 'CMYK Print'          },
    { al: 'Karton ushqimor',      en: 'Food-grade board'    },
    { al: 'Personalizim i plotë', en: 'Full customization'  },
  ],

  highlights: [
    { iconName: 'Printer', label: { al: 'Printimi',   en: 'Print'      }, value: { al: '4-ngjyrësh CMYK',  en: '4-color CMYK'  } },
    { iconName: 'Package', label: { al: 'Sasia min.', en: 'Min. qty'   }, value: { al: '500 copë',          en: '500 pcs'        } },
    { iconName: 'Clock',   label: { al: 'Prodhimi',   en: 'Production' }, value: { al: '7–14 ditë',         en: '7–14 days'      } },
    { iconName: 'Leaf',    label: { al: 'Materiali',  en: 'Material'   }, value: { al: 'Karton ushqimor',   en: 'Food-grade board'} },
  ],

  specs: [
    { key: 'Forma',        val: 'Jastëk / Pillow box',       green: true },
    { key: 'Materiali',    val: 'Karton ushqimor SBS'                    },
    { key: 'Printimi',     val: 'CMYK 4-ngjyrësh · Offset'              },
    { key: 'Sasia min.',   val: '500 copë',                  green: true },
    { key: 'Prodhimi',     val: '7–14 ditë pune',            green: true },
  ],

  steps: [
    { n: '01', title: { al: 'Dërgo dizajnin',     en: 'Send your design'   }, desc: { al: 'WhatsApp · Email · Telefon',     en: 'WhatsApp · Email · Phone'        } },
    { n: '02', title: { al: 'Merr ofertën',        en: 'Get a quote'        }, desc: { al: 'Çmim final brenda 24 orësh',      en: 'Final price within 24 hours'     } },
    { n: '03', title: { al: 'Konfirmo & paguaj',   en: 'Confirm & pay'      }, desc: { al: 'Provë para printimit masiv',       en: 'Proof before full print run'     } },
    { n: '04', title: { al: 'Dorëzim 7–14 ditë',  en: 'Delivery 7–14 days' }, desc: { al: 'Direkt në adresën tënde, Kosovë', en: 'Directly to your address, Kosovo'} },
  ],

  related: [
    { slug: '/products/mbajtese-kafe', img: imgCupHolder, al: 'Mbajtëse Kafeje', en: 'Coffee Cup Holder', sub: '2 gota · Karton', available: true },
  ],

  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per kuti pomfriti. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in french fries boxes. Can you give me a quote?',
  },

  seo: {
    al: {
      title:       'Kuti Pomfriti me Printim | ERA Print Pack Kosovë',
      description: 'Kuti pomfriti formë jastëku me printim CMYK të plotë sipas biznesit tënd. Karton ushqimor, sasia min. 500 copë. ERA Print Pack, Kosovë.',
    },
    en: {
      title:       'Custom Printed French Fries Box | ERA Print Pack Kosovo',
      description: 'Pillow-style french fries box with full CMYK custom print. Food-grade board, min. 500 pcs. ERA Print Pack Kosovo.',
    },
  },
}
