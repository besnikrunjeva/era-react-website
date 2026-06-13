import imgStudio     from '@/assets/products/kuti-torte-studio.webp'
import imgOpenStudio from '@/assets/products/kuti-torte-open-studio.webp'
import imgVar1   from '@/assets/products/kuti-torte-var-1.webp'
import imgVar2   from '@/assets/products/kuti-torte-var-2.webp'
import imgVar3   from '@/assets/products/kuti-torte-var-3.webp'

import imgKutiMuffins  from '@/assets/products/kuti-muffins-studio.webp'
import imgKutiDhurate  from '@/assets/products/kuti-dhurate-studio.webp'
import imgKutiFurre    from '@/assets/products/kuti-furre-studio.webp'

export const PRODUCT = {
  slug: '/products/kuti-torte',

  name: {
    al: 'Kuti Torte',
    en: 'Cake Box',
  },

  tagline: {
    al: 'Kuti katrore me kapak — ideal për copa tortash, eklerë dhe ëmbëlsira të ndryshme.',
    en: 'Square box with hinged lid — ideal for cake slices, éclairs and assorted pastries.',
  },

  img: imgStudio,
  imgAlt: {
    al: 'Kuti torte katrore me printim të personalizuar — ERA Print Pack Kosovë',
    en: 'Custom printed square cake box — ERA Print Pack Kosovo',
  },

  sizes: [
    {
      img: imgStudio,
      label: { al: 'E Mbyllur', en: 'Closed' },
      imgAlt: { al: 'Kuti torte e mbyllur — ERA Print Pack', en: 'Cake box closed — ERA Print Pack' },
    },
    {
      img: imgOpenStudio,
      label: { al: 'E Hapur', en: 'Open' },
      imgAlt: { al: 'Kuti torte e hapur — ERA Print Pack', en: 'Cake box open — ERA Print Pack' },
    },
  ],

  badges: [
    { al: 'Printim CMYK',         en: 'CMYK Print'         },
    { al: 'Karton premium',       en: 'Premium board'      },
    { al: 'Kapak i integruar',    en: 'Hinged lid'         },
    { al: 'Personalizim i plotë', en: 'Full customization' },
  ],

  highlights: [
    { iconName: 'Printer', label: { al: 'Printimi',   en: 'Print'      }, value: { al: '4-ngjyrësh CMYK', en: '4-color CMYK' } },
    { iconName: 'Package', label: { al: 'Sasia min.', en: 'Min. qty'   }, value: { al: '500 copë',         en: '500 pcs'       } },
    { iconName: 'Clock',   label: { al: 'Prodhimi',   en: 'Production' }, value: { al: '7–14 ditë',        en: '7–14 days'     } },
    { iconName: 'Leaf',    label: { al: 'Materiali',  en: 'Material'   }, value: { al: 'Karton i bardhë',  en: 'White board'   } },
  ],

  specs: [
    { key: 'Forma',         val: 'Katrore me kapak',             green: true },
    { key: 'Materiali',     val: 'Karton i bardhë 350g'                      },
    { key: 'Printimi',      val: 'CMYK 4-ngjyrësh · Offset'                  },
    { key: 'Kapaku',        val: 'I integruar — die-cut',         green: true },
    { key: 'Sasia minimale', val: '500 copë',                    green: true },
    { key: 'Prodhimi',      val: '7–14 ditë pune',               green: true },
  ],

  steps: [
    { n: '01', title: { al: 'Dërgo dizajnin',    en: 'Send your design'    }, desc: { al: 'WhatsApp · Email · Telefon',      en: 'WhatsApp · Email · Phone'        } },
    { n: '02', title: { al: 'Merr ofertën',      en: 'Get a quote'         }, desc: { al: 'Çmim final brenda 24 orësh',       en: 'Final price within 24 hours'     } },
    { n: '03', title: { al: 'Konfirmo & paguaj', en: 'Confirm & pay'       }, desc: { al: 'Provë para printimit masiv',        en: 'Proof before full print run'     } },
    { n: '04', title: { al: 'Dorëzim 7–14 ditë', en: 'Delivery 7–14 days'  }, desc: { al: 'Direkt në adresën tënde, Kosovë', en: 'Directly to your address, Kosovo' } },
  ],

  related: [
    { slug: '/products/kuti-muffins', img: imgKutiMuffins, al: 'Kuti për Muffins', en: 'Muffin Box',  sub: 'Muffins · Cupcakes', available: true },
    { slug: '/products/kuti-dhurate', img: imgKutiDhurate, al: 'Kuti Dhuratë',     en: 'Gift Box',    sub: 'Dhurata · Kids menu', available: true },
    { slug: '/products/kuti-furre',   img: imgKutiFurre,   al: 'Kuti Furre',       en: 'Bakery Box',  sub: 'Kroasanë · Eklerë',   available: true },
  ],

  useCases: [
    {
      img: imgVar1,
      label: { al: 'Copë Tortë Çokollate', en: 'Chocolate Cake Slice' },
      desc:  { al: 'Copë tortë me glazurë çokollate — perfekte për pastiçeri', en: 'Chocolate frosted cake slice — perfect for pastry shops' },
    },
    {
      img: imgVar2,
      label: { al: 'Copë Tarte Frutash', en: 'Fruit Tart Slice' },
      desc:  { al: 'Tarte me luleshtrydhe dhe manaferra — freskia e pastiçerisë', en: 'Strawberry and berry tart — the freshness of patisserie' },
    },
    {
      img: imgVar3,
      label: { al: 'Copë Cheesecake', en: 'Cheesecake Slice' },
      desc:  { al: 'Cheesecake me topping manaferre — klasike e pastiçerisë', en: 'Cheesecake with berry topping — a pastry classic' },
    },
  ],

  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per Kuti Torte me printim. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in custom printed Cake Boxes. Can you give me a quote?',
  },

  seo: {
    al: {
      title:       'Kuti Torte me Printim | ERA Print Pack Kosovë',
      description: 'Kuti torte katrore me kapak dhe printim CMYK të personalizuar. Ideal për pastiçeri, copa tortash dhe ëmbëlsira. Sasia min. 500 copë. ERA Print Pack, Prishtinë, Kosovë.',
    },
    en: {
      title:       'Custom Printed Cake Boxes | ERA Print Pack Kosovo',
      description: 'Square cake boxes with hinged lid and custom CMYK printing. Ideal for pastry shops, cake slices and desserts. Min. 500 pcs. ERA Print Pack, Pristina, Kosovo.',
    },
  },
}
