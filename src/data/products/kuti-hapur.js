import imgKutiFastFood  from '@/assets/products/kuti-fast-food-v1.png'
import imgKutiHamburgeri from '@/assets/products/kuti-burger-s1.png'
import imgKutiSllajder   from '@/assets/products/kuti-sllajder-1.png'

import imgL   from '@/assets/products/kuti-hapur-l.png'
import imgM   from '@/assets/products/kuti-hapur-m.png'
import imgS   from '@/assets/products/kuti-hapur-s.png'
import imgUC1 from '@/assets/products/kuti-hapur-uc1.png'
import imgUC2 from '@/assets/products/kuti-hapur-uc2.png'
import imgUC3 from '@/assets/products/kuti-hapur-uc3.png'

export const PRODUCT = {
  slug: '/products/kuti-hapur',

  name: {
    al: 'Kuti e Hapur',
    en: 'Open Tray Box',
  },

  tagline: {
    al: 'Tavë letre me printim CMYK — ideal për fast food, embëlsira dhe sushi. Tre madhësi: L, M, S.',
    en: 'Printed paper tray — ideal for fast food, pastries and sushi. Three sizes: L, M, S.',
  },

  img: imgL,
  imgAlt: {
    al: 'Kuti e hapur letre me printim të personalizuar — ERA Print Pack Kosovë',
    en: 'Custom printed open paper tray box — ERA Print Pack Kosovo',
  },

  sizes: [
    {
      img: imgL,
      label: { al: 'L — E Madhe', en: 'L — Large' },
      imgAlt: {
        al: 'Kuti e hapur letre — madhësi L — ERA Print Pack',
        en: 'Open paper tray large size L — ERA Print Pack',
      },
    },
    {
      img: imgM,
      label: { al: 'M — E Mesme', en: 'M — Medium' },
      imgAlt: {
        al: 'Kuti e hapur letre — madhësi M — ERA Print Pack',
        en: 'Open paper tray medium size M — ERA Print Pack',
      },
    },
    {
      img: imgS,
      label: { al: 'S — E Vogël', en: 'S — Small' },
      imgAlt: {
        al: 'Kuti e hapur letre — madhësi S — ERA Print Pack',
        en: 'Open paper tray small size S — ERA Print Pack',
      },
    },
  ],

  useCases: [
    {
      img: imgUC1,
      label: { al: 'Fast Food', en: 'Fast Food' },
      desc: { al: 'Patate, nuggets, onion rings', en: 'Fries, nuggets, onion rings' },
    },
    {
      img: imgUC2,
      label: { al: 'Embëlsira', en: 'Pastries' },
      desc: { al: 'Krofne, ekler, ëmbëlsira', en: 'Doughnuts, eclairs, pastries' },
    },
    {
      img: imgUC3,
      label: { al: 'Sushi & Deti', en: 'Sushi & Seafood' },
      desc: { al: 'Sushi, meze, ushqim deti', en: 'Sushi, mezze, seafood' },
    },
  ],

  badges: [
    { al: 'Printim CMYK',         en: 'CMYK Print'        },
    { al: 'Karton food-grade',    en: 'Food-grade board'   },
    { al: '3 madhësi — L, M, S', en: '3 sizes — L, M, S' },
    { al: 'Personalizim i plotë', en: 'Full customization' },
  ],

  highlights: [
    { iconName: 'Printer', label: { al: 'Printimi',   en: 'Print'      }, value: { al: '4-ngjyrësh CMYK', en: '4-color CMYK' } },
    { iconName: 'Package', label: { al: 'Madhësitë',  en: 'Sizes'      }, value: { al: 'L · M · S',        en: 'L · M · S'    } },
    { iconName: 'Clock',   label: { al: 'Prodhimi',   en: 'Production' }, value: { al: '7–14 ditë',         en: '7–14 days'    } },
    { iconName: 'Leaf',    label: { al: 'Materiali',  en: 'Material'   }, value: { al: 'Food-grade',        en: 'Food-grade'   } },
  ],

  specs: [
    { key: 'Format',      val: 'E hapur — tavë letre me mure të palosur', green: true },
    { key: 'Madhësitë',  val: 'L · M · S — tri variante',                 green: true },
    { key: 'Materiali',  val: 'Karton 300–350g food-grade'                             },
    { key: 'Printimi',   val: 'CMYK 4-ngjyrësh · Offset'                              },
    { key: 'Sasia min.', val: '500 copë',                                  green: true },
    { key: 'Prodhimi',   val: '7–14 ditë pune',                            green: true },
  ],

  steps: [
    { n: '01', title: { al: 'Dërgo dizajnin',    en: 'Send your design'   }, desc: { al: 'WhatsApp · Email · Telefon',      en: 'WhatsApp · Email · Phone'        } },
    { n: '02', title: { al: 'Zgjidh madhësinë',  en: 'Choose your size'   }, desc: { al: 'L, M ose S — sipas nevojës tënde', en: 'L, M or S — based on your needs' } },
    { n: '03', title: { al: 'Konfirmo & paguaj', en: 'Confirm & pay'      }, desc: { al: 'Provë para printimit masiv',        en: 'Proof before full print run'     } },
    { n: '04', title: { al: 'Dorëzim 7–14 ditë', en: 'Delivery 7–14 days' }, desc: { al: 'Direkt në adresën tënde, Kosovë', en: 'Directly to your address, Kosovo' } },
  ],

  related: [
    { slug: '/products/kuti-fast-food',  img: imgKutiFastFood,   al: 'Kuti Fast Food',  en: 'Fast Food Boxes', sub: 'Gable · Katrore',         available: true },
    { slug: '/products/kuti-hamburgeri', img: imgKutiHamburgeri, al: 'Kuti Hamburgeri', en: 'Burger Boxes',    sub: 'Standard · Large',         available: true },
    { slug: '/products/kuti-sllajder',   img: imgKutiSllajder,   al: 'Kuti Sllajder',   en: 'Slider Boxes',    sub: 'Pa dritare · Me dritare',  available: true },
  ],

  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per Kuti e Hapur me printim. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in custom printed Open Tray Boxes. Can you give me a quote?',
  },

  seo: {
    al: {
      title:       'Kuti e Hapur Letre me Printim — L, M, S | ERA Print Pack Kosovë',
      description: 'Kuti e hapur letre food-grade me printim CMYK — tre madhësi L, M, S. Ideal për fast food, embëlsira, sushi dhe meze. Sasia min. 500 copë. ERA Print Pack, Prizren, Kosovë.',
    },
    en: {
      title:       'Custom Printed Open Paper Tray Boxes — L, M, S | ERA Print Pack Kosovo',
      description: 'Food-grade open tray boxes with CMYK print — three sizes L, M, S. Ideal for fast food, pastries, sushi and mezze. Min. 500 pcs. ERA Print Pack Kosovo.',
    },
  },
}
