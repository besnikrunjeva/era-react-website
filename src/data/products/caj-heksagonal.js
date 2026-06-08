import imgPfanta   from '@/assets/products/caj-pfanta-sage.jpg'
import imgGjelbrt  from '@/assets/products/caj-gjelbrt.jpg'
import imgGableTop from '@/assets/products/caj-forest-fruits.png'

export const PRODUCT = {
  slug: '/products/caj-heksagonal',

  name: {
    al: 'Kuti Çaji Heksagonale',
    en: 'Hexagonal Tea Boxes',
  },

  tagline: {
    al: 'Formë heksagonale 6-anëshe — disponueshme në karton me ngjyrë dhe letër kraft natyrale.',
    en: 'Six-sided hexagonal shape — available in coloured board and natural kraft paper.',
  },

  img: imgPfanta,
  imgAlt: {
    al: 'Kuti çaji heksagonale me printim CMYK — ERA Print Pack Kosovë',
    en: 'Hexagonal tea box with CMYK print — ERA Print Pack Kosovo',
  },

  sizes: [
    {
      img: imgPfanta,
      label: { al: 'Karton me ngjyrë', en: 'Coloured board' },
      imgAlt: {
        al: 'Kuti çaji heksagonale karton e gjelbër — ERA Print Pack',
        en: 'Green board hexagonal tea box — ERA Print Pack',
      },
    },
    {
      img: imgGjelbrt,
      label: { al: 'Letër kraft', en: 'Kraft paper' },
      imgAlt: {
        al: 'Kuti çaji heksagonale kraft natyrale — ERA Print Pack',
        en: 'Natural kraft hexagonal tea box — ERA Print Pack',
      },
    },
  ],

  badges: [
    { al: 'Printim CMYK',       en: 'CMYK Print'         },
    { al: 'Formë heksagonale',  en: 'Hexagonal shape'    },
    { al: '2 materiale',        en: '2 materials'         },
    { al: 'Personalizim i plotë', en: 'Full customization' },
  ],

  highlights: [
    { iconName: 'Printer', label: { al: 'Printimi',   en: 'Print'      }, value: { al: '4-ngjyrësh CMYK',  en: '4-color CMYK'   } },
    { iconName: 'Package', label: { al: 'Sasia min.', en: 'Min. qty'   }, value: { al: '500 copë',          en: '500 pcs'         } },
    { iconName: 'Clock',   label: { al: 'Prodhimi',   en: 'Production' }, value: { al: '7–14 ditë',         en: '7–14 days'       } },
    { iconName: 'Leaf',    label: { al: 'Materiali',  en: 'Material'   }, value: { al: 'Karton · Kraft',    en: 'Board · Kraft'   } },
  ],

  specs: [
    { key: 'Format',      val: 'Heksagonale — 6 anë',             green: true },
    { key: 'Materiali',   val: 'Karton me ngjyrë  ·  Kraft natyral'            },
    { key: 'Printimi',    val: 'CMYK 4-ngjyrësh · Offset'                      },
    { key: 'Sasia min.',  val: '500 copë',                         green: true },
    { key: 'Prodhimi',    val: '7–14 ditë pune',                   green: true },
  ],

  steps: [
    { n: '01', title: { al: 'Dërgo dizajnin',    en: 'Send your design'    }, desc: { al: 'WhatsApp · Email · Telefon',      en: 'WhatsApp · Email · Phone'        } },
    { n: '02', title: { al: 'Merr ofertën',      en: 'Get a quote'         }, desc: { al: 'Çmim final brenda 24 orësh',       en: 'Final price within 24 hours'     } },
    { n: '03', title: { al: 'Konfirmo & paguaj', en: 'Confirm & pay'       }, desc: { al: 'Provë para printimit masiv',        en: 'Proof before full print run'     } },
    { n: '04', title: { al: 'Dorëzim 7–14 ditë', en: 'Delivery 7–14 days'  }, desc: { al: 'Direkt në adresën tënde, Kosovë', en: 'Directly to your address, Kosovo' } },
  ],

  related: [
    { slug: '/products/caj-gable-top', img: imgGableTop, al: 'Qese Çaji Gable-Top', en: 'Gable-Top Tea Bags', sub: 'Kraft · Karton Navy', available: true },
  ],

  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per kuti çaji heksagonale. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in hexagonal tea boxes. Can you give me a quote?',
  },

  seo: {
    al: {
      title:       'Kuti Çaji Heksagonale me Printim | ERA Print Pack Kosovë',
      description: 'Kuti çaji heksagonale me karton me ngjyrë ose kraft natyrale, printim CMYK. Formë unike 6-anëshe. Sasia min. 500 copë. ERA Print Pack, Prizren, Kosovë.',
    },
    en: {
      title:       'Hexagonal Tea Box with Print | ERA Print Pack Kosovo',
      description: 'Hexagonal tea box in coloured board or natural kraft, CMYK print. Unique 6-sided shape. Min. 500 pcs. ERA Print Pack Kosovo.',
    },
  },
}
