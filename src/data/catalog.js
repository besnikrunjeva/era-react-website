// src/data/catalog.js
import imgLeter           from '@/assets/products/leter.webp'
import imgCajPfanta       from '@/assets/products/caj-pfanta-sage.jpg'
import imgCajForestFruits from '@/assets/products/caj-forest-fruits.png'
import imgKutiBurger      from '@/assets/products/kuti-burger.webp'
import imgKutiSllajder    from '@/assets/products/kuti-sllajder-1.png'
import imgKutiFastFood    from '@/assets/products/kuti-fast-food-v1.png'
import imgKuti6Pika       from '@/assets/products/kuti-6pika-gold.png'
import imgKutiHapur       from '@/assets/products/kuti-hapur-l.png'
import imgKutiKrepa       from '@/assets/products/kuti-krepa-cone.png'
import imgKutiSallata     from '@/assets/products/kuti-sallata-closed.png'
import imgKutiMakaronash  from '@/assets/products/kuti-makaronash-s.png'
import imgKuti            from '@/assets/products/kuti.webp'
import imgKapak           from '@/assets/products/kapak.webp'
import imgFriesBox        from '@/assets/products/fries-box-studio.png'
import imgCupHolder       from '@/assets/products/cup-holder-studio.png'
import imgSanduic         from '@/assets/products/kuti-sanduic-studio.jpg'

export const TYPES = [
  { id: 'kuti',     al: 'Kuti',          en: 'Boxes'         },
  { id: 'caj',      al: 'Paketime Çaji', en: 'Tea Packages'  },
  { id: 'aksesore', al: 'Aksesorë',      en: 'Accessories'   },
]

export const USE_CASES = [
  { id: 'kafene',    al: 'Kafene',    en: 'Café'       },
  { id: 'fast-food', al: 'Fast Food', en: 'Fast Food'  },
  { id: 'pasticeri', al: 'Pastiçeri', en: 'Pastry'     },
  { id: 'restorant', al: 'Restorant', en: 'Restaurant' },
]

export const MATERIALS = [
  { id: 'karton',     al: 'Karton',     en: 'Board'      },
  { id: 'kraft',      al: 'Kraft',      en: 'Kraft'      },
  { id: 'food-grade', al: 'Food-grade', en: 'Food-grade' },
]

export const CATALOG = [
  // ── Kuti ─────────────────────────────────────────────────────────────
  {
    slug: '/products/kuti-hamburgeri',
    al: 'Kuti Hamburgeri',
    en: 'Burger Boxes',
    desc: { al: 'Burger · Fritas · Sallata', en: 'Burger · Fries · Salad' },
    img: imgKutiBurger,
    type: 'kuti',
    useCases: ['fast-food', 'restorant'],
    materials: ['karton'],
    available: true,
    is3D: false,
  },
  {
    slug: '/products/kuti-sllajder',
    al: 'Kuti Sllajder',
    en: 'Slider Boxes',
    desc: { al: 'Pizza · Embëlsira · Furra · Kafete', en: 'Pizza · Sweets · Bakery · Café' },
    img: imgKutiSllajder,
    type: 'kuti',
    useCases: ['fast-food', 'pasticeri', 'kafene'],
    materials: ['karton'],
    available: true,
    is3D: false,
  },
  {
    slug: '/products/kuti-fast-food',
    al: 'Kuti Fast Food',
    en: 'Fast Food Boxes',
    desc: { al: 'Shawarme · Pule · Nuggets · Snacks', en: 'Shawarma · Chicken · Nuggets · Snacks' },
    img: imgKutiFastFood,
    type: 'kuti',
    useCases: ['fast-food'],
    materials: ['karton'],
    available: true,
    is3D: false,
  },
  {
    slug: '/products/kuti-sallata',
    al: 'Kuti për Sallata',
    en: 'Salad Boxes',
    desc: { al: 'Sallata · Oriz · Pule · Fast food', en: 'Salad · Rice · Chicken · Fast food' },
    img: imgKutiSallata,
    type: 'kuti',
    useCases: ['fast-food', 'restorant'],
    materials: ['karton'],
    available: true,
    is3D: false,
  },
  {
    slug: '/products/kuti-hapur',
    al: 'Kuti e Hapur',
    en: 'Open Tray Box',
    desc: { al: 'Fast Food · Embëlsira · Sushi', en: 'Fast Food · Pastries · Sushi' },
    img: imgKutiHapur,
    type: 'kuti',
    useCases: ['fast-food', 'pasticeri'],
    materials: ['karton'],
    available: true,
    is3D: false,
  },
  {
    slug: '/products/kuti-pomfrit',
    al: 'Kuti Pomfriti',
    en: 'French Fries Box',
    desc: { al: 'Formë jastëku · Karton', en: 'Pillow shape · Board' },
    img: imgFriesBox,
    type: 'kuti',
    useCases: ['fast-food'],
    materials: ['karton'],
    available: true,
    is3D: false,
  },
  {
    slug: '/products/kuti-sanduic',
    al: 'Kuti Sanduiçi',
    en: 'Sandwich Box',
    desc: { al: 'Kapak çirës · Karton', en: 'Tear-open lid · Board' },
    img: imgSanduic,
    type: 'kuti',
    useCases: ['fast-food', 'kafene'],
    materials: ['karton'],
    available: true,
    is3D: false,
  },
  {
    slug: '/products/kuti-makaronash',
    al: 'Kuti Makaronash',
    en: 'Macaron Boxes',
    desc: { al: 'S · M · Gjatë — kapak sllajder', en: 'S · M · Long — sliding lid' },
    img: imgKutiMakaronash,
    type: 'kuti',
    useCases: ['pasticeri'],
    materials: ['karton'],
    available: true,
    is3D: false,
  },
  {
    slug: '/products/kuti-krepa',
    al: 'Kuti Krepa',
    en: 'Crepe Boxes',
    desc: { al: 'Kon handheld · Kuti trekëndore', en: 'Cone holder · Triangle box' },
    img: imgKutiKrepa,
    type: 'kuti',
    useCases: ['pasticeri', 'kafene'],
    materials: ['karton'],
    available: true,
    is3D: false,
  },
  {
    slug: '/products/kuti-6pika',
    al: 'Kuti me 6 Pika',
    en: '6-Corner Boxes',
    desc: { al: 'Foli ari · Foli argjend · E montuar gati', en: 'Gold foil · Silver foil · Pre-assembled' },
    img: imgKuti6Pika,
    type: 'kuti',
    useCases: ['pasticeri'],
    materials: ['karton'],
    available: true,
    is3D: false,
  },
  {
    slug: '/products/kuti-embelsira',
    al: 'Kuti Embëlsira',
    en: 'Dessert Boxes',
    desc: { al: 'Tortë · Kek · Byrek', en: 'Cake · Muffin · Börek' },
    img: imgKuti,
    type: 'kuti',
    useCases: ['pasticeri'],
    materials: ['karton'],
    available: false,
    is3D: false,
  },
  // ── Paketime Çaji ─────────────────────────────────────────────────────
  {
    slug: '/products/caj-heksagonal',
    al: 'Kuti Çaji Heksagonale',
    en: 'Hexagonal Tea Boxes',
    desc: { al: 'Karton · Kraft · 2 materiale', en: 'Board · Kraft · 2 materials' },
    img: imgCajPfanta,
    type: 'caj',
    useCases: ['pasticeri', 'kafene'],
    materials: ['karton', 'kraft'],
    available: true,
    is3D: false,
  },
  {
    slug: '/products/caj-gable-top',
    al: 'Qese Çaji Gable-Top',
    en: 'Gable-Top Tea Bags',
    desc: { al: 'Kraft · Karton · 2 materiale', en: 'Kraft · Board · 2 materials' },
    img: imgCajForestFruits,
    type: 'caj',
    useCases: ['pasticeri', 'kafene'],
    materials: ['karton', 'kraft'],
    available: true,
    is3D: false,
  },
  // ── Aksesorë ──────────────────────────────────────────────────────────
  {
    slug: '/products/mbajtese-kafe',
    al: 'Mbajtëse Kafeje',
    en: 'Coffee Cup Holder',
    desc: { al: '2 gota · Printim CMYK', en: '2 cups · CMYK Print' },
    img: imgCupHolder,
    type: 'aksesore',
    useCases: ['kafene'],
    materials: ['karton'],
    available: true,
    is3D: false,
  },
  {
    slug: '/products/kapak-gota',
    al: 'Kapak Gote',
    en: 'Cup Lids',
    desc: { al: 'PET · 3 madhësi', en: 'PET · 3 sizes' },
    img: imgKapak,
    type: 'aksesore',
    useCases: ['kafene', 'restorant'],
    materials: ['karton'],
    available: false,
    is3D: false,
  },
  {
    slug: '/products/leter-mbeshtjellese',
    al: 'Letër Mbeshtjellëse',
    en: 'Wrapping Paper',
    desc: { al: 'Me logo custom · Roll', en: 'Custom logo · Roll' },
    img: imgLeter,
    type: 'aksesore',
    useCases: ['restorant', 'kafene', 'fast-food'],
    materials: ['karton'],
    available: false,
    is3D: false,
  },
]
