import { useEffect } from 'react'
import { Product3DPage } from '@/pages/sections/Product3DPage'
import { MbajtesesEditorSection } from '@/pages/sections/MbajtesesEditorSection'

import imgGota     from '@/assets/products/gota.webp'
import imgAkullore from '@/assets/products/akullore.webp'
import imgKupa     from '@/assets/products/kupa.webp'

const SPECS = {
  al: [
    { key: 'Madhësia',       val: 'Standarde — 1 variant',       green: true  },
    { key: 'Materiali',      val: 'Letër e bardhë · Karton'                   },
    { key: 'Printimi',       val: 'CMYK 4-ngjyrësh · Offset'                  },
    { key: 'Sasia minimale', val: '5 000 copë',                   green: true  },
    { key: 'Prodhimi',       val: '7–14 ditë pune',               green: true  },
  ],
  en: [
    { key: 'Size',           val: 'Standard — 1 variant',        green: true  },
    { key: 'Material',       val: 'White paper · Cardboard'                    },
    { key: 'Printing',       val: '4-color CMYK · Offset'                      },
    { key: 'Min. quantity',  val: '5 000 pcs',                    green: true  },
    { key: 'Production',     val: '7–14 working days',            green: true  },
  ],
}

const STEPS = {
  al: [
    { n: '01', title: 'Ngarko logon tënde',  desc: 'Shih live në mbajtëse 3D' },
    { n: '02', title: 'Dërgo kërkesën',      desc: 'WhatsApp · Email · Telefon' },
    { n: '03', title: 'Konfirmo ofertën',    desc: 'Çmim final + provë para printimit' },
    { n: '04', title: 'Dorëzim 7–14 ditë',  desc: 'Direkt në adresën tënde' },
  ],
  en: [
    { n: '01', title: 'Upload your logo',    desc: 'See it live on the 3D holder' },
    { n: '02', title: 'Send your request',   desc: 'WhatsApp · Email · Phone' },
    { n: '03', title: 'Confirm quote',       desc: 'Final price + proof before print' },
    { n: '04', title: 'Delivery 7–14 days', desc: 'Direct to your address' },
  ],
}

const RELATED = [
  { slug: '/products/gota',       img: imgGota,     al: 'Gota Letre',    en: 'Paper Cups',       sub: '3.5oz · 7oz · 12oz', available: true  },
  { slug: '/products/akullore',   img: imgAkullore, al: 'Kupa Akullore', en: 'Ice Cream Cups',   sub: 'S · M',               available: true  },
  { slug: '/products/kupa-pasta', img: imgKupa,     al: 'Kupa Paste',    en: 'Pasta Cups',       sub: 'S · M · L',            available: false },
]

export default function ProductMbajtese({ lang = 'al' }) {
  useEffect(() => {
    document.title = lang === 'al'
      ? 'Mbajtëse Lugësh me Printim 3D | ERA Print Pack Kosovë'
      : 'Custom Printed Cutlery Holders 3D | ERA Print Pack Kosovo'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', lang === 'al'
      ? 'Personalizo mbajtësen e lugëve me logon tënde. Konfigurator 3D live, AR. Prodhim brenda 7–14 ditësh. ERA Print Pack, Kosovë.'
      : 'Customize your cutlery holder with your logo. Live 3D configurator, AR. Production in 7–14 days. ERA Print Pack, Kosovo.')
  }, [lang])

  return (
    <Product3DPage
      lang={lang}
      crumbLabel={lang === 'al' ? 'Mbajtëse' : 'Cutlery Holders'}
      specs={SPECS[lang]}
      steps={STEPS[lang]}
      related={RELATED}
    >
      <MbajtesesEditorSection lang={lang} />
    </Product3DPage>
  )
}
