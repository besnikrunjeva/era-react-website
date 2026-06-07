import imgKutiBurger from '@/assets/products/kuti-burger.webp'
import imgGota       from '@/assets/products/gota.webp'
import imgAkullore   from '@/assets/products/akullore.webp'
import imgMbajtese   from '@/assets/products/mbajtese.webp'
import imgSize1 from '@/assets/products/kuti-burger-s1.png'
import imgSize2 from '@/assets/products/kuti-burger-s2.png'
import imgSize3 from '@/assets/products/kuti-burger-s3.png'

export const PRODUCT = {
  slug: '/products/kuti-hamburgeri',

  name: {
    al: 'Kuti Hamburgeri',
    en: 'Burger Boxes',
  },

  tagline: {
    al: 'Karton food-grade me printim të plotë CMYK.',
    en: 'Food-grade cardboard with full CMYK print.',
  },

  img: imgSize1,
  imgAlt: {
    al: 'Kuti hamburgeri me printim të personalizuar — ERA Print Pack Kosovë',
    en: 'Custom printed burger boxes — ERA Print Pack Kosovo',
  },

  sizes: [
    {
      img: imgSize1,
      label: { al: 'Small',  en: 'Small'  },
      imgAlt: { al: 'Kuti hamburgeri Small — ERA Print Pack', en: 'Burger box Small — ERA Print Pack' },
    },
    {
      img: imgSize2,
      label: { al: 'Medium', en: 'Medium' },
      imgAlt: { al: 'Kuti hamburgeri Medium — ERA Print Pack', en: 'Burger box Medium — ERA Print Pack' },
    },
    {
      img: imgSize3,
      label: { al: 'Large',  en: 'Large'  },
      imgAlt: { al: 'Kuti hamburgeri Large — ERA Print Pack', en: 'Burger box Large — ERA Print Pack' },
    },
  ],

  badges: [
    { al: 'Printim CMYK',         en: 'CMYK Print'        },
    { al: 'Karton food-grade',    en: 'Food-grade board'   },
    { al: 'Personalizim i plotë', en: 'Full customization' },
  ],

  highlights: [
    { iconName: 'Printer', label: { al: 'Printimi',   en: 'Print'      }, value: { al: '4-ngjyrësh CMYK', en: '4-color CMYK' } },
    { iconName: 'Package', label: { al: 'Sasia min.', en: 'Min. qty'   }, value: { al: '500 copë',         en: '500 pcs'       } },
    { iconName: 'Clock',   label: { al: 'Prodhimi',   en: 'Production' }, value: { al: '7–14 ditë',        en: '7–14 days'     } },
    { iconName: 'Leaf',    label: { al: 'Materiali',  en: 'Material'   }, value: { al: 'Food-grade',       en: 'Food-grade'    } },
  ],

  specs: [
    { key: 'Madhësia',       val: 'Standard · Large — 2 variante', green: true },
    { key: 'Materiali',      val: 'Karton 350g food-grade'                      },
    { key: 'Printimi',       val: 'CMYK 4-ngjyrësh · Offset'                   },
    { key: 'Sasia minimale', val: '500 copë',                       green: true },
    { key: 'Prodhimi',       val: '7–14 ditë pune',                 green: true },
  ],

  steps: [
    { n: '01', title: { al: 'Dërgo dizajnin',    en: 'Send your design'   }, desc: { al: 'WhatsApp · Email · Telefon',      en: 'WhatsApp · Email · Phone'       } },
    { n: '02', title: { al: 'Merr ofertën',      en: 'Get a quote'        }, desc: { al: 'Çmim final brenda 24 orësh',       en: 'Final price within 24 hours'    } },
    { n: '03', title: { al: 'Konfirmo & paguaj', en: 'Confirm & pay'      }, desc: { al: 'Provë para printimit masiv',        en: 'Proof before full print run'    } },
    { n: '04', title: { al: 'Dorëzim 7–14 ditë', en: 'Delivery 7–14 days' }, desc: { al: 'Direkt në adresën tënde, Kosovë', en: 'Directly to your address, Kosovo' } },
  ],

  related: [
    { slug: '/products/gota',     img: imgGota,     al: 'Gota Letre',    en: 'Paper Cups',      sub: '3.5oz · 7oz · 12oz', available: true },
    { slug: '/products/akullore', img: imgAkullore, al: 'Kupa Akullore', en: 'Ice Cream Cups',  sub: 'S · M',               available: true },
    { slug: '/products/mbajtese', img: imgMbajtese, al: 'Mbajtëse',      en: 'Cutlery Holders', sub: 'Standarde',            available: true },
  ],

  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per Kuti Hamburgeri me printim. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in custom printed Burger Boxes. Can you give me a quote?',
  },

  seo: {
    al: {
      title:       'Kuti Hamburgeri me Printim | ERA Print Pack Kosovë',
      description: 'Kuti hamburgeri food-grade me printim CMYK të personalizuar. Sasia minimale 500 copë. Prodhim 7–14 ditë. ERA Print Pack, Prizren, Kosovë.',
    },
    en: {
      title:       'Custom Printed Burger Boxes | ERA Print Pack Kosovo',
      description: 'Food-grade burger boxes with custom CMYK printing. Min. 500 pcs. Production 7–14 days. ERA Print Pack, Prizren, Kosovo.',
    },
  },
}
