import imgKutiHapur    from '@/assets/products/kuti-hapur-l.png'
import imgKutiFastFood  from '@/assets/products/kuti-fast-food-v1.png'
import imgKutiSllajder  from '@/assets/products/kuti-sllajder-1.png'

import imgCone from '@/assets/products/kuti-krepa-cone.png'
import imgBox  from '@/assets/products/kuti-krepa-box.png'
import imgUC1  from '@/assets/products/kuti-krepa-uc1.png'
import imgUC2  from '@/assets/products/kuti-krepa-uc2.png'
import imgUC3  from '@/assets/products/kuti-krepa-uc3.png'

export const PRODUCT = {
  slug: '/products/kuti-krepa',

  name: {
    al: 'Kuti Krepa',
    en: 'Crepe Boxes',
  },

  tagline: {
    al: 'Dy variante për krepa — mbajtëse konike për handheld dhe kuti trekëndore me kapak që mbyllet. Printim CMYK i plotë.',
    en: 'Two crepe formats — open cone holder for handheld eating and a closing triangle box. Full CMYK print.',
  },

  img: imgCone,
  imgAlt: {
    al: 'Kuti krepa me printim të personalizuar — ERA Print Pack Kosovë',
    en: 'Custom printed crepe boxes — ERA Print Pack Kosovo',
  },

  sizes: [
    {
      img: imgCone,
      label: { al: 'Mbajtëse Konike', en: 'Cone Holder' },
      imgAlt: {
        al: 'Mbajtëse konike për krepa — ERA Print Pack',
        en: 'Handheld crepe cone holder — ERA Print Pack',
      },
    },
    {
      img: imgBox,
      label: { al: 'Kuti Trekëndore', en: 'Triangle Box' },
      imgAlt: {
        al: 'Kuti trekëndore për krepa me kapak — ERA Print Pack',
        en: 'Triangle crepe box with closing lid — ERA Print Pack',
      },
    },
  ],

  useCases: [
    {
      img: imgUC1,
      label: { al: 'Krepa të ëmbla', en: 'Sweet Crepes' },
      desc: { al: 'Krem, luleshtrydhe, çokollatë', en: 'Cream, strawberry, chocolate' },
    },
    {
      img: imgUC2,
      label: { al: 'Krepa të mbyllura', en: 'Boxed Crepes' },
      desc: { al: 'Paketim për marrje me vete', en: 'Takeaway packaging' },
    },
    {
      img: imgUC3,
      label: { al: 'Krepa të kripura', en: 'Savory Crepes' },
      desc: { al: 'Proshutë, djathë, perime', en: 'Ham, cheese, vegetables' },
    },
  ],

  badges: [
    { al: 'Printim CMYK',          en: 'CMYK Print'         },
    { al: 'Karton food-grade',     en: 'Food-grade board'    },
    { al: '2 variante — kon & kuti', en: '2 formats — cone & box' },
    { al: 'Personalizim i plotë',  en: 'Full customization'  },
  ],

  highlights: [
    { iconName: 'Printer', label: { al: 'Printimi',   en: 'Print'      }, value: { al: '4-ngjyrësh CMYK',       en: '4-color CMYK'       } },
    { iconName: 'Package', label: { al: 'Format',     en: 'Formats'    }, value: { al: 'Kon · Kuti trekëndore', en: 'Cone · Triangle box' } },
    { iconName: 'Clock',   label: { al: 'Prodhimi',   en: 'Production' }, value: { al: '7–14 ditë',              en: '7–14 days'           } },
    { iconName: 'Leaf',    label: { al: 'Materiali',  en: 'Material'   }, value: { al: 'Food-grade',             en: 'Food-grade'          } },
  ],

  specs: [
    { key: 'Format 1',    val: 'Mbajtëse konike — e hapur, handheld',      green: true },
    { key: 'Format 2',    val: 'Kuti trekëndore — kapak mbyllet sipër',    green: true },
    { key: 'Materiali',  val: 'Karton 300–350g food-grade'                              },
    { key: 'Printimi',   val: 'CMYK 4-ngjyrësh · Offset'                               },
    { key: 'Sasia min.', val: '500 copë',                                   green: true },
    { key: 'Prodhimi',   val: '7–14 ditë pune',                             green: true },
  ],

  steps: [
    { n: '01', title: { al: 'Dërgo dizajnin',    en: 'Send your design'   }, desc: { al: 'WhatsApp · Email · Telefon',      en: 'WhatsApp · Email · Phone'        } },
    { n: '02', title: { al: 'Zgjidh formatin',   en: 'Choose your format' }, desc: { al: 'Kon handheld ose kuti trekëndore', en: 'Handheld cone or triangle box'   } },
    { n: '03', title: { al: 'Konfirmo & paguaj', en: 'Confirm & pay'      }, desc: { al: 'Provë para printimit masiv',        en: 'Proof before full print run'     } },
    { n: '04', title: { al: 'Dorëzim 7–14 ditë', en: 'Delivery 7–14 days' }, desc: { al: 'Direkt në adresën tënde, Kosovë', en: 'Directly to your address, Kosovo' } },
  ],

  related: [
    { slug: '/products/kuti-hapur',     img: imgKutiHapur,    al: 'Kuti e Hapur',   en: 'Open Tray Box',   sub: 'L · M · S',               available: true },
    { slug: '/products/kuti-fast-food', img: imgKutiFastFood, al: 'Kuti Fast Food', en: 'Fast Food Boxes', sub: 'Gable · Katrore',          available: true },
    { slug: '/products/kuti-sllajder',  img: imgKutiSllajder, al: 'Kuti Sllajder',  en: 'Slider Boxes',    sub: 'Pa dritare · Me dritare',  available: true },
  ],

  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per Kuti Krepa me printim. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in custom printed Crepe Boxes. Can you give me a quote?',
  },

  seo: {
    al: {
      title:       'Kuti Krepa me Printim — Kon & Trekëndore | ERA Print Pack Kosovë',
      description: 'Kuti krepa food-grade me printim CMYK — mbajtëse konike handheld dhe kuti trekëndore me kapak. Ideal për krepa të ëmbla dhe të kripura. Sasia min. 500 copë. ERA Print Pack, Prizren, Kosovë.',
    },
    en: {
      title:       'Custom Printed Crepe Boxes — Cone & Triangle | ERA Print Pack Kosovo',
      description: 'Food-grade crepe packaging with CMYK print — open handheld cone holder and closing triangle box. Ideal for sweet and savory crepes. Min. 500 pcs. ERA Print Pack Kosovo.',
    },
  },
}
