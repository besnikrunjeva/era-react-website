import imgStudio from '@/assets/products/kuti-sanduic-studio.jpg'
import imgOpen   from '@/assets/products/kuti-sanduic-open.jpg'
import imgFries  from '@/assets/products/fries-box-studio.png'

export const PRODUCT = {
  slug: '/products/kuti-sanduic',

  name: {
    al: 'Kuti Sanduiçi',
    en: 'Sandwich Box',
  },

  tagline: {
    al: 'Kuti sanduiçi me kapak çirës — printim i plotë sipas biznesit tënd.',
    en: 'Tear-open sandwich box — fully custom printed for your brand.',
  },

  img: imgStudio,
  imgAlt: {
    al: 'Kuti sanduiçi me printim custom — ERA Print Pack Kosovë',
    en: 'Custom printed sandwich box — ERA Print Pack Kosovo',
  },

  sizes: [
    {
      img:    imgStudio,
      imgAlt: { al: 'Kuti sanduiçi e mbyllur', en: 'Sandwich box closed' },
      label:  { al: 'E mbyllur',               en: 'Closed'              },
    },
    {
      img:    imgOpen,
      imgAlt: { al: 'Kuti sanduiçi me kapak të hapur (çirës)', en: 'Sandwich box with tear-open lid' },
      label:  { al: 'Kapak çirës',             en: 'Tear-open'           },
    },
  ],

  badges: [
    { al: 'Kapak çirës',         en: 'Tear-open lid'       },
    { al: 'Printim CMYK',        en: 'CMYK Print'          },
    { al: 'Karton ushqimor',     en: 'Food-grade board'    },
    { al: 'Personalizim i plotë',en: 'Full customization'  },
  ],

  highlights: [
    { iconName: 'Printer', label: { al: 'Printimi',   en: 'Print'      }, value: { al: '4-ngjyrësh CMYK',   en: '4-color CMYK'    } },
    { iconName: 'Package', label: { al: 'Sasia min.', en: 'Min. qty'   }, value: { al: '500 copë',           en: '500 pcs'         } },
    { iconName: 'Clock',   label: { al: 'Prodhimi',   en: 'Production' }, value: { al: '7–14 ditë',          en: '7–14 days'       } },
    { iconName: 'Leaf',    label: { al: 'Materiali',  en: 'Material'   }, value: { al: 'Karton ushqimor',    en: 'Food-grade board' } },
  ],

  specs: [
    { key: 'Forma',        val: 'Drejtkëndore e gjatë',      green: true },
    { key: 'Kapaku',       val: 'Çirës / Tear-open',         green: true },
    { key: 'Materiali',    val: 'Karton ushqimor SBS'                    },
    { key: 'Printimi',     val: 'CMYK 4-ngjyrësh · Offset'              },
    { key: 'Sasia min.',   val: '500 copë',                  green: true },
    { key: 'Prodhimi',     val: '7–14 ditë pune',            green: true },
  ],

  steps: [
    { n: '01', title: { al: 'Dërgo dizajnin',    en: 'Send your design'   }, desc: { al: 'WhatsApp · Email · Telefon',     en: 'WhatsApp · Email · Phone'        } },
    { n: '02', title: { al: 'Merr ofertën',       en: 'Get a quote'        }, desc: { al: 'Çmim final brenda 24 orësh',      en: 'Final price within 24 hours'     } },
    { n: '03', title: { al: 'Konfirmo & paguaj',  en: 'Confirm & pay'      }, desc: { al: 'Provë para printimit masiv',       en: 'Proof before full print run'     } },
    { n: '04', title: { al: 'Dorëzim 7–14 ditë', en: 'Delivery 7–14 days' }, desc: { al: 'Direkt në adresën tënde, Kosovë', en: 'Directly to your address, Kosovo'} },
  ],

  related: [
    { slug: '/products/kuti-pomfrit', img: imgFries, al: 'Kuti Pomfriti', en: 'French Fries Box', sub: 'Formë jastëku · Karton', available: true },
  ],

  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per kuti sanduici. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in sandwich boxes. Can you give me a quote?',
  },

  seo: {
    al: {
      title:       'Kuti Sanduiçi me Printim Custom | ERA Print Pack Kosovë',
      description: 'Kuti sanduiçi me kapak çirës dhe printim CMYK të plotë sipas biznesit tënd. Karton ushqimor, sasia min. 500 copë. ERA Print Pack, Kosovë.',
    },
    en: {
      title:       'Custom Printed Sandwich Box | ERA Print Pack Kosovo',
      description: 'Tear-open sandwich box with full CMYK custom print. Food-grade board, min. 500 pcs. ERA Print Pack Kosovo.',
    },
  },
}
