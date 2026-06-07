import imgKutiSllajder  from '@/assets/products/kuti-sllajder-1.png'
import imgKutiFastFood  from '@/assets/products/kuti-fast-food-v1.png'
import imgKutiHamburgeri from '@/assets/products/kuti-burger-s1.png'

import imgV1   from '@/assets/products/kuti-6pika-v1.png'
import imgGold from '@/assets/products/kuti-6pika-gold.png'
import imgSilv from '@/assets/products/kuti-6pika-silver.png'
import imgUC1  from '@/assets/products/kuti-6pika-uc1.png'
import imgUC2  from '@/assets/products/kuti-6pika-uc2.png'
import imgUC3  from '@/assets/products/kuti-6pika-uc3.png'

export const PRODUCT = {
  slug: '/products/kuti-6pika',

  name: {
    al: 'Kuti me 6 Pika',
    en: '6-Corner Boxes',
  },

  tagline: {
    al: 'Vjen e montuar — klienti e hap dhe është gati. Karton premium me foli ari ose argjend.',
    en: 'Arrives pre-assembled — client just opens it. Premium board with gold or silver foil.',
  },

  img: imgV1,
  imgAlt: {
    al: 'Kuti me 6 pika me printim të personalizuar — ERA Print Pack Kosovë',
    en: 'Custom printed 6-corner box — ERA Print Pack Kosovo',
  },

  sizes: [
    {
      img: imgV1,
      label: { al: 'Printim CMYK', en: 'CMYK Print' },
      imgAlt: {
        al: 'Kuti me 6 pika me printim — ERA Print Pack',
        en: '6-corner box with CMYK print — ERA Print Pack',
      },
    },
    {
      img: imgGold,
      label: { al: 'Foli Ari', en: 'Gold Foil' },
      imgAlt: {
        al: 'Kuti me 6 pika me foli ari — ERA Print Pack',
        en: '6-corner box with gold foil — ERA Print Pack',
      },
    },
    {
      img: imgSilv,
      label: { al: 'Foli Argjend', en: 'Silver Foil' },
      imgAlt: {
        al: 'Kuti me 6 pika me foli argjend — ERA Print Pack',
        en: '6-corner box with silver foil — ERA Print Pack',
      },
    },
  ],

  useCases: [
    {
      img: imgUC1,
      label: { al: 'Embëlsira & Krofne', en: 'Sweets & Pastries' },
      desc: { al: 'Krofne, ekler, makaronë', en: 'Doughnuts, eclairs, macarons' },
    },
    {
      img: imgUC2,
      label: { al: 'Çokollatë & Pralinë', en: 'Chocolate & Pralines' },
      desc: { al: 'Çokollatë, pralinë, bonbon', en: 'Chocolate, pralines, bonbons' },
    },
    {
      img: imgUC3,
      label: { al: 'Bakllava & Llokume', en: 'Baklava & Sweets' },
      desc: { al: 'Bakllava, llokume, ëmbëlsira orientale', en: 'Baklava, lokum, oriental sweets' },
    },
  ],

  badges: [
    { al: 'E montuar gati',       en: 'Pre-assembled'      },
    { al: 'Foli ari ose argjend', en: 'Gold or silver foil' },
    { al: 'Printim CMYK',         en: 'CMYK Print'          },
    { al: 'Premium pasticeri',    en: 'Premium pastry'      },
  ],

  highlights: [
    { iconName: 'Printer', label: { al: 'Printimi',    en: 'Print'        }, value: { al: 'CMYK · Foli ari/argjend', en: 'CMYK · Gold/silver foil' } },
    { iconName: 'Package', label: { al: 'Sasia min.',  en: 'Min. qty'     }, value: { al: '500 copë',                 en: '500 pcs'                  } },
    { iconName: 'Clock',   label: { al: 'Prodhimi',    en: 'Production'   }, value: { al: '7–14 ditë',                en: '7–14 days'                } },
    { iconName: 'Leaf',    label: { al: 'Montimi',     en: 'Assembly'     }, value: { al: 'Gati — hap & mbush',       en: 'Ready — open & fill'       } },
  ],

  specs: [
    { key: 'Konstruksioni', val: '6-pikë — ngjitje automatike', green: true },
    { key: 'Montimi',       val: 'Vjen i montuar — pa asamblim',green: true },
    { key: 'Materiali',     val: 'Karton 350–450g premium'                  },
    { key: 'Finishi',       val: 'CMYK · Foli Ari · Foli Argjend',green: true },
    { key: 'Sasia min.',    val: '500 copë',                    green: true },
    { key: 'Prodhimi',      val: '7–14 ditë pune',              green: true },
  ],

  steps: [
    { n: '01', title: { al: 'Dërgo dizajnin',    en: 'Send your design'   }, desc: { al: 'WhatsApp · Email · Telefon',      en: 'WhatsApp · Email · Phone'        } },
    { n: '02', title: { al: 'Zgjidh finishin',   en: 'Choose your finish' }, desc: { al: 'CMYK · Foli Ari · Foli Argjend',   en: 'CMYK · Gold Foil · Silver Foil'  } },
    { n: '03', title: { al: 'Konfirmo & paguaj', en: 'Confirm & pay'      }, desc: { al: 'Provë para printimit masiv',        en: 'Proof before full print run'     } },
    { n: '04', title: { al: 'Dorëzim 7–14 ditë', en: 'Delivery 7–14 days' }, desc: { al: 'Direkt në adresën tënde, Kosovë', en: 'Directly to your address, Kosovo' } },
  ],

  related: [
    { slug: '/products/kuti-sllajder',   img: imgKutiSllajder,   al: 'Kuti Sllajder',   en: 'Slider Boxes',     sub: 'Pa dritare · Me dritare', available: true },
    { slug: '/products/kuti-fast-food',  img: imgKutiFastFood,   al: 'Kuti Fast Food',  en: 'Fast Food Boxes',  sub: 'Gable · Katrore',         available: true },
    { slug: '/products/kuti-hamburgeri', img: imgKutiHamburgeri, al: 'Kuti Hamburgeri', en: 'Burger Boxes',     sub: 'Standard · Large',        available: true },
  ],

  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per Kuti me 6 Pika me printim/foli. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in 6-Corner Boxes with print/foil. Can you give me a quote?',
  },

  seo: {
    al: {
      title:       'Kuti me 6 Pika — Foli Ari & Argjend | ERA Print Pack Kosovë',
      description: 'Kuti me 6 pika — vijnë të montuara, klienti hap dhe mbush. Foli ari, foli argjend ose printim CMYK. Ideal për embëlsira, çokollatë dhe bakllava. ERA Print Pack, Prizren, Kosovë.',
    },
    en: {
      title:       '6-Corner Boxes — Gold & Silver Foil | ERA Print Pack Kosovo',
      description: 'Pre-assembled 6-corner boxes — client just opens and fills. Gold foil, silver foil or CMYK print. Ideal for sweets, chocolates and baklava. ERA Print Pack Kosovo.',
    },
  },
}
