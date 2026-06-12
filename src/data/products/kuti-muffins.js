import imgStudio  from '@/assets/products/kuti-muffins-studio.webp'
import imgStudio2 from '@/assets/products/kuti-muffins-studio-2.webp'
import imgVar1    from '@/assets/products/kuti-muffins-var-1.webp'
import imgVar2    from '@/assets/products/kuti-muffins-var-2.webp'
import imgVar3    from '@/assets/products/kuti-muffins-var-3.webp'

import imgKutiMakaronash from '@/assets/products/kuti-makaronash-s.png'
import imgKuti6Pika      from '@/assets/products/kuti-6pika-gold.png'
import imgKutiKrepa      from '@/assets/products/kuti-krepa-cone.png'

export const PRODUCT = {
  slug: '/products/kuti-muffins',

  name: {
    al: 'Kuti për Muffins',
    en: 'Muffin Box',
  },

  tagline: {
    al: 'Karton premium me kapak — ideal për muffins, cupcakes dhe ëmbëlsira.',
    en: 'Premium board with lid — ideal for muffins, cupcakes and pastries.',
  },

  img: imgStudio,
  imgAlt: {
    al: 'Kuti për muffins me printim të personalizuar — ERA Print Pack Kosovë',
    en: 'Custom printed muffin box — ERA Print Pack Kosovo',
  },

  sizes: [
    {
      img: imgStudio,
      label: { al: 'E mbyllur', en: 'Closed' },
      imgAlt: { al: 'Kuti muffins e mbyllur — ERA Print Pack', en: 'Muffin box closed — ERA Print Pack' },
    },
    {
      img: imgStudio2,
      label: { al: 'E hapur', en: 'Open' },
      imgAlt: { al: 'Kuti muffins e hapur — ERA Print Pack', en: 'Muffin box open — ERA Print Pack' },
    },
  ],

  badges: [
    { al: 'Printim CMYK',         en: 'CMYK Print'         },
    { al: 'Karton premium',       en: 'Premium board'      },
    { al: 'Kapak i integruar',    en: 'Built-in lid'       },
    { al: 'Personalizim i plotë', en: 'Full customization' },
  ],

  highlights: [
    { iconName: 'Printer', label: { al: 'Printimi',   en: 'Print'      }, value: { al: '4-ngjyrësh CMYK', en: '4-color CMYK' } },
    { iconName: 'Package', label: { al: 'Sasia min.', en: 'Min. qty'   }, value: { al: '500 copë',         en: '500 pcs'       } },
    { iconName: 'Clock',   label: { al: 'Prodhimi',   en: 'Production' }, value: { al: '7–14 ditë',        en: '7–14 days'     } },
    { iconName: 'Leaf',    label: { al: 'Materiali',  en: 'Material'   }, value: { al: 'Karton i bardhë',  en: 'White board'   } },
  ],

  specs: [
    { key: 'Madhësia',       val: 'Standard — 1 variant',    green: true },
    { key: 'Materiali',      val: 'Karton i bardhë 350g'                 },
    { key: 'Printimi',       val: 'CMYK 4-ngjyrësh · Offset'            },
    { key: 'Kapaku',         val: 'I integruar — fold-over',  green: true },
    { key: 'Sasia minimale', val: '500 copë',                 green: true },
    { key: 'Prodhimi',       val: '7–14 ditë pune',           green: true },
  ],

  steps: [
    { n: '01', title: { al: 'Dërgo dizajnin',    en: 'Send your design'    }, desc: { al: 'WhatsApp · Email · Telefon',      en: 'WhatsApp · Email · Phone'         } },
    { n: '02', title: { al: 'Merr ofertën',      en: 'Get a quote'         }, desc: { al: 'Çmim final brenda 24 orësh',       en: 'Final price within 24 hours'      } },
    { n: '03', title: { al: 'Konfirmo & paguaj', en: 'Confirm & pay'       }, desc: { al: 'Provë para printimit masiv',        en: 'Proof before full print run'      } },
    { n: '04', title: { al: 'Dorëzim 7–14 ditë', en: 'Delivery 7–14 days'  }, desc: { al: 'Direkt në adresën tënde, Kosovë', en: 'Directly to your address, Kosovo' } },
  ],

  related: [
    { slug: '/products/kuti-makaronash', img: imgKutiMakaronash, al: 'Kuti Makaronash', en: 'Macaron Boxes',  sub: 'S · M · Gjatë',  available: true },
    { slug: '/products/kuti-6pika',      img: imgKuti6Pika,      al: 'Kuti me 6 Pika', en: '6-Corner Boxes', sub: 'Foli ari · Gri',  available: true },
    { slug: '/products/kuti-krepa',      img: imgKutiKrepa,      al: 'Kuti Krepa',     en: 'Crepe Boxes',    sub: 'Kon · Trekëndor', available: true },
  ],

  useCases: [
    {
      img: imgVar1,
      label: { al: 'Muffins',   en: 'Muffins'   },
      desc:  { al: 'Muffins me çokollatë, vanilje, boronica', en: 'Chocolate, vanilla, blueberry muffins' },
    },
    {
      img: imgVar2,
      label: { al: 'Cupcakes',  en: 'Cupcakes'  },
      desc:  { al: 'Cupcakes me krem rozë, sprinkles, dekor', en: 'Frosted cupcakes with sprinkles and toppings' },
    },
    {
      img: imgVar3,
      label: { al: 'Macarons',  en: 'Macarons'  },
      desc:  { al: 'Macarons, petit fours, karamele artizanale', en: 'Macarons, petit fours, artisan sweets' },
    },
  ],

  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per Kuti per Muffins me printim. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in custom printed Muffin Boxes. Can you give me a quote?',
  },

  seo: {
    al: {
      title:       'Kuti për Muffins me Printim | ERA Print Pack Kosovë',
      description: 'Kuti premium për muffins dhe cupcakes me printim CMYK të personalizuar. Kapak i integruar, karton i bardhë. Sasia min. 500 copë. ERA Print Pack, Prizren, Kosovë.',
    },
    en: {
      title:       'Custom Printed Muffin Boxes | ERA Print Pack Kosovo',
      description: 'Premium muffin and cupcake boxes with custom CMYK printing. Built-in lid, white board. Min. 500 pcs. ERA Print Pack, Prizren, Kosovo.',
    },
  },
}
