import imgForestFruits from '@/assets/products/caj-forest-fruits.png'
import imgMana          from '@/assets/products/caj-mana-slimming.jpg'
import imgHeksagonal    from '@/assets/products/caj-pfanta-sage.jpg'

export const PRODUCT = {
  slug: '/products/caj-gable-top',

  name: {
    al: 'Qese Çaji Gable-Top',
    en: 'Gable-Top Tea Bags',
  },

  tagline: {
    al: 'Format gable-top me majë të mbyllur — disponueshme në letër kraft natyrale dhe karton premium.',
    en: 'Sealed gable-top format — available in natural kraft paper and premium cardboard.',
  },

  img: imgForestFruits,
  imgAlt: {
    al: 'Qese çaji gable-top me printim CMYK — ERA Print Pack Kosovë',
    en: 'Gable-top tea bag with CMYK print — ERA Print Pack Kosovo',
  },

  sizes: [
    {
      img: imgForestFruits,
      label: { al: 'Letër kraft', en: 'Kraft paper' },
      imgAlt: {
        al: 'Qese çaji gable-top kraft natyrale — ERA Print Pack',
        en: 'Natural kraft gable-top tea bag — ERA Print Pack',
      },
    },
    {
      img: imgMana,
      label: { al: 'Karton premium', en: 'Premium board' },
      imgAlt: {
        al: 'Qese çaji gable-top karton navy — ERA Print Pack',
        en: 'Navy board gable-top tea bag — ERA Print Pack',
      },
    },
  ],

  badges: [
    { al: 'Printim CMYK',       en: 'CMYK Print'         },
    { al: 'Format gable-top',   en: 'Gable-top format'   },
    { al: '2 materiale',        en: '2 materials'         },
    { al: 'Personalizim i plotë', en: 'Full customization' },
  ],

  highlights: [
    { iconName: 'Printer', label: { al: 'Printimi',   en: 'Print'      }, value: { al: '4-ngjyrësh CMYK', en: '4-color CMYK' } },
    { iconName: 'Package', label: { al: 'Sasia min.', en: 'Min. qty'   }, value: { al: '500 copë',         en: '500 pcs'       } },
    { iconName: 'Clock',   label: { al: 'Prodhimi',   en: 'Production' }, value: { al: '7–14 ditë',        en: '7–14 days'     } },
    { iconName: 'Leaf',    label: { al: 'Materiali',  en: 'Material'   }, value: { al: 'Kraft · Karton',   en: 'Kraft · Board'  } },
  ],

  specs: [
    { key: 'Format',     val: 'Gable-top — majë e mbyllur',          green: true },
    { key: 'Materiali',  val: 'Letër kraft natyrale  ·  Karton 350g'              },
    { key: 'Printimi',   val: 'CMYK 4-ngjyrësh · Offset'                          },
    { key: 'Sasia min.', val: '500 copë',                             green: true },
    { key: 'Prodhimi',   val: '7–14 ditë pune',                       green: true },
  ],

  steps: [
    { n: '01', title: { al: 'Dërgo dizajnin',    en: 'Send your design'    }, desc: { al: 'WhatsApp · Email · Telefon',      en: 'WhatsApp · Email · Phone'        } },
    { n: '02', title: { al: 'Merr ofertën',      en: 'Get a quote'         }, desc: { al: 'Çmim final brenda 24 orësh',       en: 'Final price within 24 hours'     } },
    { n: '03', title: { al: 'Konfirmo & paguaj', en: 'Confirm & pay'       }, desc: { al: 'Provë para printimit masiv',        en: 'Proof before full print run'     } },
    { n: '04', title: { al: 'Dorëzim 7–14 ditë', en: 'Delivery 7–14 days'  }, desc: { al: 'Direkt në adresën tënde, Kosovë', en: 'Directly to your address, Kosovo' } },
  ],

  related: [
    { slug: '/products/caj-heksagonal', img: imgHeksagonal, al: 'Kuti Çaji Heksagonale', en: 'Hexagonal Tea Boxes', sub: 'Karton · Kraft', available: true },
  ],

  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per qese çaji format gable-top. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in gable-top tea bags. Can you give me a quote?',
  },

  seo: {
    al: {
      title:       'Qese Çaji Gable-Top me Printim | ERA Print Pack Kosovë',
      description: 'Qese çaji gable-top me letër kraft ose karton premium, printim CMYK. Sasia min. 500 copë. ERA Print Pack, Prizren, Kosovë.',
    },
    en: {
      title:       'Gable-Top Tea Bags with Print | ERA Print Pack Kosovo',
      description: 'Gable-top tea bags in natural kraft or premium board, CMYK print. Min. 500 pcs. ERA Print Pack Kosovo.',
    },
  },
}
