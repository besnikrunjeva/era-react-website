import imgMain    from '@/assets/products/caj-forest-fruits.png'
import imgMana    from '@/assets/products/caj-mana-slimming.jpg'
import imgPfanta  from '@/assets/products/caj-pfanta-sage.jpg'
import imgGjelbrt from '@/assets/products/caj-gjelbrt.jpg'

export const PRODUCT = {
  slug: '/products/caj-forest-fruits',

  name: {
    al: 'Go Healthy — Forest Fruits',
    en: 'Go Healthy — Forest Fruits',
  },

  tagline: {
    al: 'Qese çaji kraft me printim CMYK — format gable-top për çaj premium natyral.',
    en: 'Kraft tea bag with CMYK print — gable-top format for premium natural tea.',
  },

  img: imgMain,
  imgAlt: {
    al: 'Paketim çaji Go Healthy Forest Fruits — ERA Print Pack Kosovë',
    en: 'Go Healthy Forest Fruits tea packaging — ERA Print Pack Kosovo',
  },

  badges: [
    { al: 'Printim CMYK',        en: 'CMYK Print'         },
    { al: 'Letër kraft',         en: 'Kraft paper'         },
    { al: 'Format gable-top',    en: 'Gable-top format'    },
    { al: 'Personalizim i plotë', en: 'Full customization' },
  ],

  highlights: [
    { iconName: 'Printer', label: { al: 'Printimi',   en: 'Print'      }, value: { al: '4-ngjyrësh CMYK', en: '4-color CMYK' } },
    { iconName: 'Package', label: { al: 'Sasia min.', en: 'Min. qty'   }, value: { al: '500 copë',         en: '500 pcs'       } },
    { iconName: 'Clock',   label: { al: 'Prodhimi',   en: 'Production' }, value: { al: '7–14 ditë',        en: '7–14 days'     } },
    { iconName: 'Leaf',    label: { al: 'Materiali',  en: 'Material'   }, value: { al: 'Kraft natyral',    en: 'Natural kraft'  } },
  ],

  specs: [
    { key: 'Format',     val: 'Gable-top — qese kraft',   green: true },
    { key: 'Materiali',  val: 'Letër kraft natyrale'                   },
    { key: 'Printimi',   val: 'CMYK 4-ngjyrësh · Offset'              },
    { key: 'Sasia min.', val: '500 copë',                  green: true },
    { key: 'Prodhimi',   val: '7–14 ditë pune',            green: true },
  ],

  steps: [
    { n: '01', title: { al: 'Dërgo dizajnin',    en: 'Send your design'   }, desc: { al: 'WhatsApp · Email · Telefon',      en: 'WhatsApp · Email · Phone'        } },
    { n: '02', title: { al: 'Merr ofertën',      en: 'Get a quote'        }, desc: { al: 'Çmim final brenda 24 orësh',       en: 'Final price within 24 hours'     } },
    { n: '03', title: { al: 'Konfirmo & paguaj', en: 'Confirm & pay'      }, desc: { al: 'Provë para printimit masiv',        en: 'Proof before full print run'     } },
    { n: '04', title: { al: 'Dorëzim 7–14 ditë', en: 'Delivery 7–14 days' }, desc: { al: 'Direkt në adresën tënde, Kosovë', en: 'Directly to your address, Kosovo' } },
  ],

  related: [
    { slug: '/products/caj-mana-slimming', img: imgMana,    al: 'Mana Tea — Slimming',        en: 'Mana Tea — Slimming',        sub: 'Gable-top · Navy',        available: true },
    { slug: '/products/caj-pfanta-sage',   img: imgPfanta,  al: 'Pfanta Organic — Sage Tea',  en: 'Pfanta Organic — Sage Tea',  sub: 'Heksagon · E gjelbër',    available: true },
    { slug: '/products/caj-gjelbrt',       img: imgGjelbrt, al: 'Go Healthy — Çaj i Gjelbërt', en: 'Go Healthy — Green Tea',    sub: 'Heksagon · Kraft',        available: true },
  ],

  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per paketim çaji format gable-top kraft. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in kraft gable-top tea packaging. Can you give me a quote?',
  },

  seo: {
    al: {
      title:       'Paketim Çaji Kraft Gable-Top | ERA Print Pack Kosovë',
      description: 'Qese çaji kraft me printim CMYK, format gable-top. Personalizim i plotë me logo tënde. Sasia min. 500 copë. ERA Print Pack, Prizren, Kosovë.',
    },
    en: {
      title:       'Kraft Gable-Top Tea Packaging | ERA Print Pack Kosovo',
      description: 'Kraft tea bag with CMYK print, gable-top format. Full customization with your logo. Min. 500 pcs. ERA Print Pack Kosovo.',
    },
  },
}
