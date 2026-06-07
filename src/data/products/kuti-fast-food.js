import imgGota        from '@/assets/products/gota.webp'
import imgKutiBurger  from '@/assets/products/kuti-burger-s1.png'
import imgKutiSllajder from '@/assets/products/kuti-sllajder-1.png'

import imgV1  from '@/assets/products/kuti-fast-food-v1.png'
import imgV2  from '@/assets/products/kuti-fast-food-v2.png'
import imgUC1 from '@/assets/products/kuti-fast-food-uc1.png'
import imgUC2 from '@/assets/products/kuti-fast-food-uc2.png'
import imgUC3 from '@/assets/products/kuti-fast-food-uc3.png'

export const PRODUCT = {
  slug: '/products/kuti-fast-food',

  name: {
    al: 'Kuti Fast Food',
    en: 'Fast Food Boxes',
  },

  tagline: {
    al: 'Karton food-grade me printim të plotë CMYK — shawarme, pule, nuggets e çdo gjë tjetër.',
    en: 'Food-grade cardboard with full CMYK print — shawarma, chicken, nuggets and anything else.',
  },

  img: imgV1,
  imgAlt: {
    al: 'Kuti fast food me printim të personalizuar — ERA Print Pack Kosovë',
    en: 'Custom printed fast food boxes — ERA Print Pack Kosovo',
  },

  sizes: [
    {
      img: imgV1,
      label: { al: 'Majë trekëndore', en: 'Gable top' },
      imgAlt: {
        al: 'Kuti fast food me majë trekëndore — ERA Print Pack',
        en: 'Gable-top fast food box — ERA Print Pack',
      },
    },
    {
      img: imgV2,
      label: { al: 'Katrore', en: 'Square top' },
      imgAlt: {
        al: 'Kuti fast food katrore — ERA Print Pack',
        en: 'Square-top fast food box — ERA Print Pack',
      },
    },
  ],

  useCases: [
    {
      img: imgUC1,
      label: { al: 'Shawarme', en: 'Shawarma' },
      desc: { al: 'Shawarme, wrap, rosto', en: 'Shawarma, wraps, roasts' },
    },
    {
      img: imgUC2,
      label: { al: 'Pule & Wings', en: 'Chicken & Wings' },
      desc: { al: 'Kofshë, krahë, crispy', en: 'Thighs, wings, crispy' },
    },
    {
      img: imgUC3,
      label: { al: 'Nuggets & Snacks', en: 'Nuggets & Snacks' },
      desc: { al: 'Nuggets, byrek, snacks', en: 'Nuggets, börek, snacks' },
    },
  ],

  badges: [
    { al: 'Printim CMYK',         en: 'CMYK Print'        },
    { al: 'Karton food-grade',    en: 'Food-grade board'   },
    { al: '2 forma disponueshme', en: '2 shapes available' },
    { al: 'Personalizim i plotë', en: 'Full customization' },
  ],

  highlights: [
    { iconName: 'Printer', label: { al: 'Printimi',   en: 'Print'      }, value: { al: '4-ngjyrësh CMYK', en: '4-color CMYK' } },
    { iconName: 'Package', label: { al: 'Sasia min.', en: 'Min. qty'   }, value: { al: '500 copë',         en: '500 pcs'       } },
    { iconName: 'Clock',   label: { al: 'Prodhimi',   en: 'Production' }, value: { al: '7–14 ditë',        en: '7–14 days'     } },
    { iconName: 'Leaf',    label: { al: 'Materiali',  en: 'Material'   }, value: { al: 'Food-grade',       en: 'Food-grade'    } },
  ],

  specs: [
    { key: 'Format',       val: 'Majë trekëndore · Katrore — 2 variante', green: true },
    { key: 'Materiali',    val: 'Karton 350g food-grade'                               },
    { key: 'Printimi',     val: 'CMYK 4-ngjyrësh · Offset'                            },
    { key: 'Sasia min.',   val: '500 copë',                                green: true },
    { key: 'Prodhimi',     val: '7–14 ditë pune',                          green: true },
  ],

  steps: [
    { n: '01', title: { al: 'Dërgo dizajnin',    en: 'Send your design'   }, desc: { al: 'WhatsApp · Email · Telefon',      en: 'WhatsApp · Email · Phone'        } },
    { n: '02', title: { al: 'Merr ofertën',      en: 'Get a quote'        }, desc: { al: 'Çmim final brenda 24 orësh',       en: 'Final price within 24 hours'     } },
    { n: '03', title: { al: 'Konfirmo & paguaj', en: 'Confirm & pay'      }, desc: { al: 'Provë para printimit masiv',        en: 'Proof before full print run'     } },
    { n: '04', title: { al: 'Dorëzim 7–14 ditë', en: 'Delivery 7–14 days' }, desc: { al: 'Direkt në adresën tënde, Kosovë', en: 'Directly to your address, Kosovo' } },
  ],

  related: [
    { slug: '/products/kuti-hamburgeri', img: imgKutiBurger,   al: 'Kuti Hamburgeri', en: 'Burger Boxes',  sub: 'Standard · Large',  available: true },
    { slug: '/products/kuti-sllajder',   img: imgKutiSllajder, al: 'Kuti Sllajder',   en: 'Slider Boxes',  sub: 'Pa dritare · Me dritare', available: true },
    { slug: '/products/gota',            img: imgGota,         al: 'Gota Letre',      en: 'Paper Cups',    sub: '3.5oz · 7oz · 12oz', available: true },
  ],

  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per Kuti Fast Food me printim. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in custom printed Fast Food Boxes. Can you give me a quote?',
  },

  seo: {
    al: {
      title:       'Kuti Fast Food me Printim | ERA Print Pack Kosovë',
      description: 'Kuti fast food food-grade me printim CMYK — shawarme, pule, nuggets, snacks. Dy forma: majë trekëndore dhe katrore. Sasia min. 500 copë. ERA Print Pack, Prizren, Kosovë.',
    },
    en: {
      title:       'Custom Printed Fast Food Boxes | ERA Print Pack Kosovo',
      description: 'Food-grade fast food boxes with CMYK print — shawarma, chicken, nuggets, snacks. Two shapes: gable-top and square-top. Min. 500 pcs. ERA Print Pack Kosovo.',
    },
  },
}
