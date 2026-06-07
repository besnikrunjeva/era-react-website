import imgKutiKrepa   from '@/assets/products/kuti-krepa-cone.png'
import imgKuti6Pika   from '@/assets/products/kuti-6pika-gold.png'
import imgKutiSllajder from '@/assets/products/kuti-sllajder-1.png'

import imgS   from '@/assets/products/kuti-makaronash-s.png'
import imgM   from '@/assets/products/kuti-makaronash-m.png'
import imgL   from '@/assets/products/kuti-makaronash-l.png'
import imgUC1 from '@/assets/products/kuti-makaronash-uc1.png'
import imgUC2 from '@/assets/products/kuti-makaronash-uc2.png'

export const PRODUCT = {
  slug: '/products/kuti-makaronash',

  name: {
    al: 'Kuti Makaronash',
    en: 'Macaron Boxes',
  },

  tagline: {
    al: 'Kuti sllajder me kapak që rrëshqet — dizajn pastel premium. Tre madhësi: S, M dhe e gjatë për rend.',
    en: 'Sliding lid drawer boxes — premium pastel design. Three sizes: S, M and long row format.',
  },

  img: imgS,
  imgAlt: {
    al: 'Kuti makaronash me printim të personalizuar — ERA Print Pack Kosovë',
    en: 'Custom printed macaron boxes — ERA Print Pack Kosovo',
  },

  sizes: [
    {
      img: imgS,
      label: { al: 'S — 2 copë', en: 'S — 2 pcs' },
      imgAlt: {
        al: 'Kuti makaronash e vogël S — ERA Print Pack',
        en: 'Small macaron box S — ERA Print Pack',
      },
    },
    {
      img: imgM,
      label: { al: 'M — 4 copë', en: 'M — 4 pcs' },
      imgAlt: {
        al: 'Kuti makaronash e mesme M — ERA Print Pack',
        en: 'Medium macaron box M — ERA Print Pack',
      },
    },
    {
      img: imgL,
      label: { al: 'Gjatë — 8 copë', en: 'Long — 8 pcs' },
      imgAlt: {
        al: 'Kuti makaronash e gjatë për 8 copë — ERA Print Pack',
        en: 'Long macaron box for 8 pcs — ERA Print Pack',
      },
    },
  ],

  useCases: [
    {
      img: imgUC1,
      label: { al: 'Dhuratë pasticerie', en: 'Pastry Gift' },
      desc: { al: 'Makarona me krem, karamel, vanilje', en: 'Macarons with cream, caramel, vanilla' },
    },
    {
      img: imgUC2,
      label: { al: 'Porosi individuale', en: 'Individual Order' },
      desc: { al: 'Porosi për 2 — mini dhuratë', en: '2-piece order — mini gift' },
    },
  ],

  badges: [
    { al: 'Printim CMYK',          en: 'CMYK Print'         },
    { al: 'Kapak sllajder',        en: 'Sliding lid'        },
    { al: 'S · M · Gjatë',        en: 'S · M · Long'       },
    { al: 'Personalizim i plotë',  en: 'Full customization' },
  ],

  highlights: [
    { iconName: 'Printer', label: { al: 'Printimi',   en: 'Print'      }, value: { al: '4-ngjyrësh CMYK',    en: '4-color CMYK'    } },
    { iconName: 'Package', label: { al: 'Kapaku',     en: 'Lid'        }, value: { al: 'Sllajder — rrëshqet', en: 'Sliding drawer'  } },
    { iconName: 'Clock',   label: { al: 'Prodhimi',   en: 'Production' }, value: { al: '7–14 ditë',            en: '7–14 days'       } },
    { iconName: 'Leaf',    label: { al: 'Madhësitë',  en: 'Sizes'      }, value: { al: 'S · M · Gjatë',       en: 'S · M · Long'    } },
  ],

  specs: [
    { key: 'Konstruksioni', val: 'Sllajder — kapak rrëshqet jashtë',      green: true },
    { key: 'Madhësitë',    val: 'S (2 copë) · M (4 copë) · Gjatë (8 copë)', green: true },
    { key: 'Materiali',    val: 'Karton 350g premium'                                   },
    { key: 'Printimi',     val: 'CMYK 4-ngjyrësh · Offset'                             },
    { key: 'Sasia min.',   val: '500 copë',                                green: true  },
    { key: 'Prodhimi',     val: '7–14 ditë pune',                          green: true  },
  ],

  steps: [
    { n: '01', title: { al: 'Dërgo dizajnin',    en: 'Send your design'   }, desc: { al: 'WhatsApp · Email · Telefon',      en: 'WhatsApp · Email · Phone'        } },
    { n: '02', title: { al: 'Zgjidh madhësinë',  en: 'Choose your size'   }, desc: { al: 'S, M ose e gjatë',                en: 'S, M or long row format'         } },
    { n: '03', title: { al: 'Konfirmo & paguaj', en: 'Confirm & pay'      }, desc: { al: 'Provë para printimit masiv',        en: 'Proof before full print run'     } },
    { n: '04', title: { al: 'Dorëzim 7–14 ditë', en: 'Delivery 7–14 days' }, desc: { al: 'Direkt në adresën tënde, Kosovë', en: 'Directly to your address, Kosovo' } },
  ],

  related: [
    { slug: '/products/kuti-6pika',   img: imgKuti6Pika,   al: 'Kuti me 6 Pika', en: '6-Corner Boxes',  sub: 'Foli ari · Foli argjend',    available: true },
    { slug: '/products/kuti-krepa',   img: imgKutiKrepa,   al: 'Kuti Krepa',     en: 'Crepe Boxes',     sub: 'Kon · Trekëndore',            available: true },
    { slug: '/products/kuti-sllajder',img: imgKutiSllajder,al: 'Kuti Sllajder',  en: 'Slider Boxes',    sub: 'Pa dritare · Me dritare',     available: true },
  ],

  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per Kuti Makaronash me printim. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in custom printed Macaron Boxes. Can you give me a quote?',
  },

  seo: {
    al: {
      title:       'Kuti Makaronash me Printim — S, M & Gjatë | ERA Print Pack Kosovë',
      description: 'Kuti makaronash sllajder premium me printim CMYK — tre madhësi: S (2 copë), M (4 copë) dhe e gjatë (8 copë). Dizajn pastel me kapak që rrëshqet. ERA Print Pack, Prizren, Kosovë.',
    },
    en: {
      title:       'Custom Printed Macaron Boxes — S, M & Long | ERA Print Pack Kosovo',
      description: 'Premium sliding lid macaron boxes with CMYK print — three sizes: S (2 pcs), M (4 pcs) and long row (8 pcs). Pastel design with sliding drawer lid. ERA Print Pack Kosovo.',
    },
  },
}
