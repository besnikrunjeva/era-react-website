import imgStudio from '@/assets/products/kuti-corndog-studio.webp'

import imgKutiFastFood from '@/assets/products/kuti-fast-food-v1.png'
import imgFriesBox     from '@/assets/products/fries-box-studio.png'
import imgKutiHapur    from '@/assets/products/kuti-hapur-l.png'

export const PRODUCT = {
  slug: '/products/kuti-corndog',

  name: {
    al: 'Kuti për Corndog',
    en: 'Corndog Box',
  },

  tagline: {
    al: 'Tray karton me printim të plotë — ideal për corndog, hotdog dhe snacks.',
    en: 'Fully printed cardboard tray — ideal for corndogs, hotdogs and snacks.',
  },

  img: imgStudio,
  imgAlt: {
    al: 'Kuti për corndog me printim të personalizuar — ERA Print Pack Kosovë',
    en: 'Custom printed corndog box — ERA Print Pack Kosovo',
  },

  sizes: [
    {
      img: imgStudio,
      label: { al: 'Studio', en: 'Studio' },
      imgAlt: { al: 'Kuti corndog studio — ERA Print Pack', en: 'Corndog box studio — ERA Print Pack' },
    },
  ],

  badges: [
    { al: 'Printim CMYK',         en: 'CMYK Print'         },
    { al: 'Karton food-grade',    en: 'Food-grade board'   },
    { al: 'Tray i hapur',         en: 'Open tray'          },
    { al: 'Personalizim i plotë', en: 'Full customization' },
  ],

  highlights: [
    { iconName: 'Printer', label: { al: 'Printimi',   en: 'Print'      }, value: { al: '4-ngjyrësh CMYK', en: '4-color CMYK' } },
    { iconName: 'Package', label: { al: 'Sasia min.', en: 'Min. qty'   }, value: { al: '500 copë',         en: '500 pcs'       } },
    { iconName: 'Clock',   label: { al: 'Prodhimi',   en: 'Production' }, value: { al: '7–14 ditë',        en: '7–14 days'     } },
    { iconName: 'Leaf',    label: { al: 'Materiali',  en: 'Material'   }, value: { al: 'Karton food-grade', en: 'Food-grade board' } },
  ],

  specs: [
    { key: 'Madhësia',       val: 'Standard — 1 variant',       green: true },
    { key: 'Materiali',      val: 'Karton food-grade'                        },
    { key: 'Printimi',       val: 'CMYK 4-ngjyrësh · Offset'               },
    { key: 'Forma',          val: 'Tray i gjatë i hapur',        green: true },
    { key: 'Sasia minimale', val: '500 copë',                    green: true },
    { key: 'Prodhimi',       val: '7–14 ditë pune',              green: true },
  ],

  steps: [
    { n: '01', title: { al: 'Dërgo dizajnin',    en: 'Send your design'    }, desc: { al: 'WhatsApp · Email · Telefon',      en: 'WhatsApp · Email · Phone'         } },
    { n: '02', title: { al: 'Merr ofertën',      en: 'Get a quote'         }, desc: { al: 'Çmim final brenda 24 orësh',       en: 'Final price within 24 hours'      } },
    { n: '03', title: { al: 'Konfirmo & paguaj', en: 'Confirm & pay'       }, desc: { al: 'Provë para printimit masiv',        en: 'Proof before full print run'      } },
    { n: '04', title: { al: 'Dorëzim 7–14 ditë', en: 'Delivery 7–14 days'  }, desc: { al: 'Direkt në adresën tënde, Kosovë', en: 'Directly to your address, Kosovo' } },
  ],

  related: [
    { slug: '/products/kuti-fast-food', img: imgKutiFastFood, al: 'Kuti Fast Food',  en: 'Fast Food Boxes',   sub: 'Shawarme · Pule',   available: true },
    { slug: '/products/kuti-pomfrit',   img: imgFriesBox,     al: 'Kuti Pomfriti',   en: 'French Fries Box',  sub: 'Jastëk · Karton',   available: true },
    { slug: '/products/kuti-hapur',     img: imgKutiHapur,    al: 'Kuti e Hapur',    en: 'Open Tray Box',     sub: 'L · M · S',          available: true },
  ],

  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per Kuti per Corndog me printim. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in custom printed Corndog Boxes. Can you give me a quote?',
  },

  seo: {
    al: {
      title:       'Kuti për Corndog me Printim | ERA Print Pack Kosovë',
      description: 'Kuti tray për corndog dhe hotdog me printim CMYK të personalizuar. Karton food-grade, tray i hapur gjatë. Sasia min. 500 copë. ERA Print Pack, Prizren, Kosovë.',
    },
    en: {
      title:       'Custom Printed Corndog Boxes | ERA Print Pack Kosovo',
      description: 'Open tray boxes for corndogs and hotdogs with custom CMYK printing. Food-grade board. Min. 500 pcs. ERA Print Pack, Prizren, Kosovo.',
    },
  },
}
