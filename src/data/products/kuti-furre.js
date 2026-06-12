import imgStudio  from '@/assets/products/kuti-furre-studio.webp'
import imgStudio2 from '@/assets/products/kuti-furre-studio-2.webp'
import imgVar1    from '@/assets/products/kuti-furre-var-1.webp'
import imgVar2    from '@/assets/products/kuti-furre-var-2.webp'
import imgVar3    from '@/assets/products/kuti-furre-var-3.webp'

import imgKutiMakaronash from '@/assets/products/kuti-makaronash-s.png'
import imgKutiKrepa      from '@/assets/products/kuti-krepa-cone.png'
import imgKutiSllajder   from '@/assets/products/kuti-sllajder-1.png'

export const PRODUCT = {
  slug: '/products/kuti-furre',

  name: {
    al: 'Kuti Furre',
    en: 'Bakery Box',
  },

  tagline: {
    al: 'Kuti gjatë me kapak — për bukë, kroasanë dhe produkte furre.',
    en: 'Long hinged-lid box — for bread, croissants and bakery goods.',
  },

  img: imgStudio,
  imgAlt: {
    al: 'Kuti furre me printim të personalizuar — ERA Print Pack Kosovë',
    en: 'Custom printed bakery box — ERA Print Pack Kosovo',
  },

  sizes: [
    {
      img: imgStudio,
      label: { al: 'E mbyllur', en: 'Closed' },
      imgAlt: { al: 'Kuti furre e mbyllur — ERA Print Pack', en: 'Bakery box closed — ERA Print Pack' },
    },
    {
      img: imgStudio2,
      label: { al: 'E hapur', en: 'Open' },
      imgAlt: { al: 'Kuti furre e hapur — ERA Print Pack', en: 'Bakery box open — ERA Print Pack' },
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
    { iconName: 'Leaf',    label: { al: 'Materiali',  en: 'Material'   }, value: { al: 'Karton premium',   en: 'Premium board' } },
  ],

  specs: [
    { key: 'Madhësia',       val: 'Standard — 1 variant',        green: true },
    { key: 'Materiali',      val: 'Karton 350g'                              },
    { key: 'Printimi',       val: 'CMYK 4-ngjyrësh · Offset'               },
    { key: 'Kapaku',         val: 'I integruar — hinged lid',    green: true },
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
    { slug: '/products/kuti-makaronash', img: imgKutiMakaronash, al: 'Kuti Makaronash', en: 'Macaron Boxes', sub: 'S · M · Gjatë',  available: true },
    { slug: '/products/kuti-krepa',      img: imgKutiKrepa,      al: 'Kuti Krepa',     en: 'Crepe Boxes',   sub: 'Kon · Trekëndor', available: true },
    { slug: '/products/kuti-sllajder',   img: imgKutiSllajder,   al: 'Kuti Sllajder',  en: 'Slider Boxes',  sub: 'Me · pa dritare', available: true },
  ],

  useCases: [
    {
      img: imgVar1,
      label: { al: 'Kroasanë',  en: 'Croissants' },
      desc:  { al: 'Kroasanë të freskët, kifle, produkte me gjalpë', en: 'Fresh croissants, rolls, butter pastries' },
    },
    {
      img: imgVar2,
      label: { al: 'Eklerë',    en: 'Éclairs'    },
      desc:  { al: 'Eklerë me çokollatë, karamele, krem', en: 'Chocolate éclairs, caramel, cream pastries' },
    },
    {
      img: imgVar3,
      label: { al: 'Baguette',  en: 'Baguette'   },
      desc:  { al: 'Baguette, bukë artizanale, produce furre', en: 'Baguette, artisan bread, bakery goods' },
    },
  ],

  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per Kuti Furre me printim. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in custom printed Bakery Boxes. Can you give me a quote?',
  },

  seo: {
    al: {
      title:       'Kuti Furre me Printim | ERA Print Pack Kosovë',
      description: 'Kuti gjatë për furra dhe pastiçeri me printim CMYK të personalizuar. Kapak i integruar, karton premium. Sasia min. 500 copë. ERA Print Pack, Prizren, Kosovë.',
    },
    en: {
      title:       'Custom Printed Bakery Boxes | ERA Print Pack Kosovo',
      description: 'Long hinged-lid boxes for bakeries and pastry shops with custom CMYK printing. Premium board. Min. 500 pcs. ERA Print Pack, Prizren, Kosovo.',
    },
  },
}
