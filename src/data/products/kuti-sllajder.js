import imgGota     from '@/assets/products/gota.webp'
import imgAkullore from '@/assets/products/akullore.webp'
import imgKutiBurger from '@/assets/products/kuti-burger-s1.png'

import imgV1   from '@/assets/products/kuti-sllajder-1.png'
import imgV2   from '@/assets/products/kuti-sllajder-2.png'
import imgUC1  from '@/assets/products/kuti-sllajder-uc1.png'
import imgUC2  from '@/assets/products/kuti-sllajder-uc2.png'
import imgUC3  from '@/assets/products/kuti-sllajder-uc3.png'

export const PRODUCT = {
  slug: '/products/kuti-sllajder',

  name: {
    al: 'Kuti Sllajder',
    en: 'Slider Boxes',
  },

  tagline: {
    al: 'Karton food-grade me mëngë rrëshqitëse — me ose pa dritare.',
    en: 'Food-grade cardboard with sliding sleeve — with or without window.',
  },

  img: imgV1,
  imgAlt: {
    al: 'Kuti sllajder me printim të personalizuar — ERA Print Pack Kosovë',
    en: 'Custom printed slider box — ERA Print Pack Kosovo',
  },

  sizes: [
    {
      img: imgV1,
      label: { al: 'Pa dritare', en: 'No window' },
      imgAlt: {
        al: 'Kuti sllajder pa dritare — ERA Print Pack',
        en: 'Slider box without window — ERA Print Pack',
      },
    },
    {
      img: imgV2,
      label: { al: 'Me dritare', en: 'With window' },
      imgAlt: {
        al: 'Kuti sllajder me dritare transparente — ERA Print Pack',
        en: 'Slider box with transparent window — ERA Print Pack',
      },
    },
  ],

  useCases: [
    {
      img: imgUC1,
      label: { al: 'Embëlsira', en: 'Sweets' },
      desc: { al: 'Makaronë, tortë, ëmbëlsira', en: 'Macarons, cakes, pastries' },
    },
    {
      img: imgUC2,
      label: { al: 'Furra', en: 'Bakery' },
      desc: { al: 'Bukë, kifle, produkte furre', en: 'Bread, rolls, bakery goods' },
    },
    {
      img: imgUC3,
      label: { al: 'Kafete & Sanduiçe', en: 'Café & Sandwiches' },
      desc: { al: 'Sanduiçe, wrap, snacks', en: 'Sandwiches, wraps, snacks' },
    },
  ],

  badges: [
    { al: 'Printim CMYK',         en: 'CMYK Print'        },
    { al: 'Karton food-grade',    en: 'Food-grade board'   },
    { al: 'Me ose pa dritare',    en: 'Window optional'    },
    { al: 'Personalizim i plotë', en: 'Full customization' },
  ],

  highlights: [
    { iconName: 'Printer', label: { al: 'Printimi',   en: 'Print'      }, value: { al: '4-ngjyrësh CMYK', en: '4-color CMYK' } },
    { iconName: 'Package', label: { al: 'Sasia min.', en: 'Min. qty'   }, value: { al: '500 copë',         en: '500 pcs'       } },
    { iconName: 'Clock',   label: { al: 'Prodhimi',   en: 'Production' }, value: { al: '7–14 ditë',        en: '7–14 days'     } },
    { iconName: 'Leaf',    label: { al: 'Materiali',  en: 'Material'   }, value: { al: 'Food-grade',       en: 'Food-grade'    } },
  ],

  specs: [
    { key: 'Tipi',         val: 'Mëngë + Tepsi (Tray & Sleeve)', green: true },
    { key: 'Materiali',    val: 'Karton 350g food-grade'                      },
    { key: 'Printimi',     val: 'CMYK 4-ngjyrësh · Offset'                   },
    { key: 'Dritare',      val: 'Opsionale — PET transparent',    green: true },
    { key: 'Sasia min.',   val: '500 copë',                        green: true },
    { key: 'Prodhimi',     val: '7–14 ditë pune',                  green: true },
  ],

  steps: [
    { n: '01', title: { al: 'Dërgo dizajnin',    en: 'Send your design'   }, desc: { al: 'WhatsApp · Email · Telefon',      en: 'WhatsApp · Email · Phone'        } },
    { n: '02', title: { al: 'Merr ofertën',      en: 'Get a quote'        }, desc: { al: 'Çmim final brenda 24 orësh',       en: 'Final price within 24 hours'     } },
    { n: '03', title: { al: 'Konfirmo & paguaj', en: 'Confirm & pay'      }, desc: { al: 'Provë para printimit masiv',        en: 'Proof before full print run'     } },
    { n: '04', title: { al: 'Dorëzim 7–14 ditë', en: 'Delivery 7–14 days' }, desc: { al: 'Direkt në adresën tënde, Kosovë', en: 'Directly to your address, Kosovo' } },
  ],

  related: [
    { slug: '/products/kuti-hamburgeri', img: imgKutiBurger, al: 'Kuti Hamburgeri', en: 'Burger Boxes',  sub: 'Standard · Large',  available: true },
    { slug: '/products/gota',            img: imgGota,       al: 'Gota Letre',      en: 'Paper Cups',    sub: '3.5oz · 7oz · 12oz', available: true },
    { slug: '/products/akullore',        img: imgAkullore,   al: 'Kupa Akullore',   en: 'Ice Cream Cups', sub: 'S · M',              available: true },
  ],

  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per Kuti Sllajder me printim. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in custom printed Slider Boxes. Can you give me a quote?',
  },

  seo: {
    al: {
      title:       'Kuti Sllajder me Printim | ERA Print Pack Kosovë',
      description: 'Kuti sllajder food-grade me printim CMYK — me ose pa dritare. Embëlsira, pizza, furra, kafete. Sasia min. 500 copë. ERA Print Pack, Prizren, Kosovë.',
    },
    en: {
      title:       'Custom Printed Slider Boxes | ERA Print Pack Kosovo',
      description: 'Food-grade slider boxes with custom CMYK printing — with or without window. Sweets, pizza, bakery, café. Min. 500 pcs. ERA Print Pack Kosovo.',
    },
  },
}
