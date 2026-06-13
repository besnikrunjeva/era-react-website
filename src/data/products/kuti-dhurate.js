import imgStudio from '@/assets/products/kuti-dhurate-studio.webp'
import imgVar1   from '@/assets/products/kuti-dhurate-var-1.webp'
import imgVar2   from '@/assets/products/kuti-dhurate-var-2.webp'
import imgVar3   from '@/assets/products/kuti-dhurate-var-3.webp'

import imgKutiBurger  from '@/assets/products/kuti-burger.webp'
import imgKutiSllajder from '@/assets/products/kuti-sllajder-1.png'
import imgKutiFastFood from '@/assets/products/kuti-fast-food-v1.png'

export const PRODUCT = {
  slug: '/products/kuti-dhurate',

  name: {
    al: 'Kuti Dhuratë',
    en: 'Gift Box',
  },

  tagline: {
    al: 'Karton premium me dorezë — ideal për dhurata dhe kids menu.',
    en: 'Premium board with carry handle — ideal for gifts and kids meals.',
  },

  img: imgStudio,
  imgAlt: {
    al: 'Kuti dhuratë me dorezë me printim të personalizuar — ERA Print Pack Kosovë',
    en: 'Custom printed gift box with carry handle — ERA Print Pack Kosovo',
  },

  sizes: [
    {
      img: imgStudio,
      label: { al: 'Studio', en: 'Studio' },
      imgAlt: { al: 'Kuti dhuratë studio — ERA Print Pack', en: 'Gift box studio — ERA Print Pack' },
    },
  ],

  badges: [
    { al: 'Printim CMYK',         en: 'CMYK Print'         },
    { al: 'Karton premium',       en: 'Premium board'      },
    { al: 'Dorezë e integruar',   en: 'Built-in handle'    },
    { al: 'Personalizim i plotë', en: 'Full customization' },
  ],

  highlights: [
    { iconName: 'Printer', label: { al: 'Printimi',   en: 'Print'      }, value: { al: '4-ngjyrësh CMYK', en: '4-color CMYK' } },
    { iconName: 'Package', label: { al: 'Sasia min.', en: 'Min. qty'   }, value: { al: '500 copë',         en: '500 pcs'       } },
    { iconName: 'Clock',   label: { al: 'Prodhimi',   en: 'Production' }, value: { al: '7–14 ditë',        en: '7–14 days'     } },
    { iconName: 'Leaf',    label: { al: 'Materiali',  en: 'Material'   }, value: { al: 'Karton i bardhë',  en: 'White board'   } },
  ],

  specs: [
    { key: 'Madhësia',       val: 'Standard — 1 variant',          green: true },
    { key: 'Materiali',      val: 'Karton i bardhë / gri 350g'                 },
    { key: 'Printimi',       val: 'CMYK 4-ngjyrësh · Offset'                  },
    { key: 'Doreza',         val: 'E integruar — die-cut',          green: true },
    { key: 'Sasia minimale', val: '500 copë',                       green: true },
    { key: 'Prodhimi',       val: '7–14 ditë pune',                 green: true },
  ],

  steps: [
    { n: '01', title: { al: 'Dërgo dizajnin',    en: 'Send your design'    }, desc: { al: 'WhatsApp · Email · Telefon',      en: 'WhatsApp · Email · Phone'        } },
    { n: '02', title: { al: 'Merr ofertën',      en: 'Get a quote'         }, desc: { al: 'Çmim final brenda 24 orësh',       en: 'Final price within 24 hours'     } },
    { n: '03', title: { al: 'Konfirmo & paguaj', en: 'Confirm & pay'       }, desc: { al: 'Provë para printimit masiv',        en: 'Proof before full print run'     } },
    { n: '04', title: { al: 'Dorëzim 7–14 ditë', en: 'Delivery 7–14 days'  }, desc: { al: 'Direkt në adresën tënde, Kosovë', en: 'Directly to your address, Kosovo' } },
  ],

  related: [
    { slug: '/products/kuti-hamburgeri', img: imgKutiBurger,   al: 'Kuti Hamburgeri', en: 'Burger Boxes',    sub: 'Standard · Large', available: true },
    { slug: '/products/kuti-sllajder',   img: imgKutiSllajder, al: 'Kuti Sllajder',   en: 'Slider Boxes',    sub: 'Pizza · Embëlsira', available: true },
    { slug: '/products/kuti-fast-food',  img: imgKutiFastFood, al: 'Kuti Fast Food',  en: 'Fast Food Boxes', sub: 'Shawarme · Pule',   available: true },
  ],

  useCases: [
    {
      img: imgVar1,
      label: { al: 'Kids Menu',   en: 'Kids Meal'       },
      desc:  { al: 'Happy meal, kids box, vakte fëmijësh', en: 'Happy meal, kids box, children\'s meals' },
    },
    {
      img: imgVar2,
      label: { al: 'Dhuratë Premium', en: 'Premium Gift'  },
      desc:  { al: 'Dhurata luksit, evente, korporata',    en: 'Luxury gifts, events, corporate'         },
    },
    {
      img: imgVar3,
      label: { al: 'Pastiçeri',   en: 'Pastry'           },
      desc:  { al: 'Tortë, ëmbëlsira, konfeksione',       en: 'Cake, sweets, confectionery'             },
    },
  ],

  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per Kuti Dhurate me printim. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in custom printed Gift Boxes. Can you give me a quote?',
  },

  seo: {
    al: {
      title:       'Kuti Dhuratë me Printim | ERA Print Pack Kosovë',
      description: 'Kuti dhuratë premium me dorezë dhe printim CMYK të personalizuar. Ideal për kids menu dhe dhurata. Sasia min. 500 copë. ERA Print Pack, Prizren, Kosovë.',
    },
    en: {
      title:       'Custom Printed Gift Boxes | ERA Print Pack Kosovo',
      description: 'Premium gift boxes with carry handle and custom CMYK printing. Ideal for kids meals and gifts. Min. 500 pcs. ERA Print Pack, Prizren, Kosovo.',
    },
  },
}
