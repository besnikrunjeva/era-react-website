import { useEffect } from 'react'
import { Product3DPage } from '@/pages/sections/Product3DPage'
import { AkulloreEditorSection } from '@/pages/sections/AkulloreEditorSection'

import imgGota     from '@/assets/products/gota.webp'
import imgMbajtese from '@/assets/products/mbajtese.webp'
import imgKupa     from '@/assets/products/kupa.webp'

const SPECS = [
  { key: 'Madhësia',       val: 'S · M — 2 variante',            green: true  },
  { key: 'Materiali',      val: 'Letër e bardhë · Karton'                      },
  { key: 'Printimi',       val: 'CMYK 4-ngjyrësh · Offset'                     },
  { key: 'Sasia minimale', val: '5 000 copë',                     green: true  },
  { key: 'Prodhimi',       val: '7–14 ditë pune',                 green: true  },
]

const STEPS = [
  { n: '01', title: 'Ngarko logon tënde',  desc: 'Shih live në kupë 3D'             },
  { n: '02', title: 'Dërgo kërkesën',      desc: 'WhatsApp · Email · Telefon'        },
  { n: '03', title: 'Konfirmo ofertën',    desc: 'Çmim final + provë para printimit' },
  { n: '04', title: 'Dorëzim 7–14 ditë',  desc: 'Direkt në adresën tënde'          },
]

const RELATED = [
  { slug: '/products/gota',       img: imgGota,     al: 'Gota Letre',      sub: '3.5oz · 7oz · 12oz', available: true  },
  { slug: '/products/mbajtese',   img: imgMbajtese, al: 'Mbajtëse Lugësh', sub: 'Standarde',           available: true  },
  { slug: '/products/kupa-pasta', img: imgKupa,     al: 'Kupa Paste',      sub: 'S · M · L',           available: false },
]

export default function ProductAkullore({ lang = 'al' }) {
  useEffect(() => {
    document.title = lang === 'al'
      ? 'Kupa Akullore me Printim 3D | ERA Print Pack Kosovë'
      : 'Custom Printed Ice Cream Cups 3D | ERA Print Pack Kosovo'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', lang === 'al'
      ? 'Personalizo kupat e akullores me logon tënde. Konfigurator 3D live, AR. Prodhim brenda 7–14 ditësh. ERA Print Pack, Kosovë.'
      : 'Customize your ice cream cups with your logo. Live 3D configurator, AR. Production in 7–14 days. ERA Print Pack, Kosovo.')
  }, [lang])

  return (
    <Product3DPage
      lang={lang}
      crumbLabel="Kupa Akullore"
      specs={SPECS}
      steps={STEPS}
      related={RELATED}
    >
      <AkulloreEditorSection lang={lang} />
    </Product3DPage>
  )
}
