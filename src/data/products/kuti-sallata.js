import imgKutiHapur    from '@/assets/products/kuti-hapur-l.png'
import imgKutiFastFood  from '@/assets/products/kuti-fast-food-v1.png'
import imgKutiHamburgeri from '@/assets/products/kuti-burger-s1.png'

import imgClosed from '@/assets/products/kuti-sallata-closed.png'
import imgOpen   from '@/assets/products/kuti-sallata-open.png'
import imgUC1    from '@/assets/products/kuti-sallata-uc1.png'
import imgUC2    from '@/assets/products/kuti-sallata-uc2.png'
import imgUC3    from '@/assets/products/kuti-sallata-uc3.png'

export const PRODUCT = {
  slug: '/products/kuti-sallata',

  name: {
    al: 'Kuti për Sallata',
    en: 'Salad Boxes',
  },

  tagline: {
    al: 'Kuti clam-shell me kapak të pjerrët — mbyllet me dy tab dhe hapet plotësisht. Printim CMYK i plotë jashtë.',
    en: 'Clam-shell box with hinged lid — locks with two front tabs, opens fully flat. Full CMYK print outside.',
  },

  img: imgClosed,
  imgAlt: {
    al: 'Kuti për sallata me printim të personalizuar — ERA Print Pack Kosovë',
    en: 'Custom printed salad boxes — ERA Print Pack Kosovo',
  },

  sizes: [
    {
      img: imgClosed,
      label: { al: 'E mbyllur', en: 'Closed' },
      imgAlt: {
        al: 'Kuti sallata e mbyllur me kapak — ERA Print Pack',
        en: 'Closed salad box with locked lid — ERA Print Pack',
      },
    },
    {
      img: imgOpen,
      label: { al: 'E hapur', en: 'Open' },
      imgAlt: {
        al: 'Kuti sallata e hapur duke treguar brendësinë — ERA Print Pack',
        en: 'Open salad box showing interior capacity — ERA Print Pack',
      },
    },
  ],

  useCases: [
    {
      img: imgUC1,
      label: { al: 'Sallata të freskëta', en: 'Fresh Salads' },
      desc: { al: 'Sallata, perime, feta', en: 'Salads, vegetables, feta' },
    },
    {
      img: imgUC2,
      label: { al: 'Oriz & Wok', en: 'Rice & Wok' },
      desc: { al: 'Oriz, pule, perime wok', en: 'Rice, chicken, wok vegetables' },
    },
    {
      img: imgUC3,
      label: { al: 'Pule & Fritas', en: 'Chicken & Fries' },
      desc: { al: 'Pule e skuqur, patate fritas', en: 'Fried chicken, french fries' },
    },
  ],

  badges: [
    { al: 'Printim CMYK',        en: 'CMYK Print'       },
    { al: 'Karton food-grade',   en: 'Food-grade board'  },
    { al: 'Kapak me dy tab',     en: 'Dual-tab lock lid' },
    { al: 'Personalizim i plotë',en: 'Full customization'},
  ],

  highlights: [
    { iconName: 'Printer', label: { al: 'Printimi',   en: 'Print'      }, value: { al: '4-ngjyrësh CMYK',    en: '4-color CMYK'    } },
    { iconName: 'Package', label: { al: 'Kapaku',     en: 'Lid'        }, value: { al: 'Mentesë + 2 tab',     en: 'Hinge + 2 tabs'  } },
    { iconName: 'Clock',   label: { al: 'Prodhimi',   en: 'Production' }, value: { al: '7–14 ditë',            en: '7–14 days'       } },
    { iconName: 'Leaf',    label: { al: 'Materiali',  en: 'Material'   }, value: { al: 'Food-grade',           en: 'Food-grade'      } },
  ],

  specs: [
    { key: 'Konstruksioni', val: 'Clam-shell — kapak me mentesë, 2 tab-lock',  green: true },
    { key: 'Materiali',    val: 'Karton 350g food-grade'                                    },
    { key: 'Printimi',     val: 'CMYK 4-ngjyrësh · Offset'                                 },
    { key: 'Sasia min.',   val: '500 copë',                                     green: true },
    { key: 'Prodhimi',     val: '7–14 ditë pune',                               green: true },
  ],

  steps: [
    { n: '01', title: { al: 'Dërgo dizajnin',    en: 'Send your design'   }, desc: { al: 'WhatsApp · Email · Telefon',      en: 'WhatsApp · Email · Phone'        } },
    { n: '02', title: { al: 'Merr ofertën',      en: 'Get a quote'        }, desc: { al: 'Çmim final brenda 24 orësh',       en: 'Final price within 24 hours'     } },
    { n: '03', title: { al: 'Konfirmo & paguaj', en: 'Confirm & pay'      }, desc: { al: 'Provë para printimit masiv',        en: 'Proof before full print run'     } },
    { n: '04', title: { al: 'Dorëzim 7–14 ditë', en: 'Delivery 7–14 days' }, desc: { al: 'Direkt në adresën tënde, Kosovë', en: 'Directly to your address, Kosovo' } },
  ],

  related: [
    { slug: '/products/kuti-hapur',      img: imgKutiHapur,      al: 'Kuti e Hapur',   en: 'Open Tray Box',   sub: 'L · M · S',        available: true },
    { slug: '/products/kuti-fast-food',  img: imgKutiFastFood,   al: 'Kuti Fast Food', en: 'Fast Food Boxes', sub: 'Gable · Katrore',  available: true },
    { slug: '/products/kuti-hamburgeri', img: imgKutiHamburgeri, al: 'Kuti Hamburgeri',en: 'Burger Boxes',    sub: 'Standard · Large', available: true },
  ],

  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per Kuti per Sallata me printim. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in custom printed Salad Boxes. Can you give me a quote?',
  },

  seo: {
    al: {
      title:       'Kuti për Sallata me Printim CMYK | ERA Print Pack Kosovë',
      description: 'Kuti clam-shell food-grade me printim CMYK — ideal për sallata, oriz, pule dhe fast food. Kapak me mentesë dhe dy tab-lock. Sasia min. 500 copë. ERA Print Pack, Prizren, Kosovë.',
    },
    en: {
      title:       'Custom Printed Salad Boxes | ERA Print Pack Kosovo',
      description: 'Food-grade clam-shell boxes with CMYK print — ideal for salads, rice, chicken and fast food. Hinged lid with dual tab-lock. Min. 500 pcs. ERA Print Pack Kosovo.',
    },
  },
}
