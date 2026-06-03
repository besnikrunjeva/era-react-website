import { useEffect } from 'react'
import { Product3DPage } from '@/pages/sections/Product3DPage'
import { KupaSupeEditorSection } from '@/pages/sections/KupaSupeEditorSection'

import imgGota     from '@/assets/products/gota.webp'
import imgAkullore from '@/assets/products/akullore.webp'
import imgMbajtese from '@/assets/products/mbajtese.webp'

const SPECS = [
  { key: 'Madhësia',       val: 'Standarde — 1 variant',          green: true  },
  { key: 'Materiali',      val: 'Kraft natyral + letër e bardhë'               },
  { key: 'Printimi',       val: 'CMYK 4-ngjyrësh · brez horizontal'            },
  { key: 'Sasia minimale', val: '5 000 copë',                      green: true  },
  { key: 'Prodhimi',       val: '7–14 ditë pune',                  green: true  },
]

const STEPS = [
  { n: '01', title: 'Ngarko logon tënde',  desc: 'Shih live në kupë 3D'             },
  { n: '02', title: 'Dërgo kërkesën',      desc: 'WhatsApp · Email · Telefon'        },
  { n: '03', title: 'Konfirmo ofertën',    desc: 'Çmim final + provë para printimit' },
  { n: '04', title: 'Dorëzim 7–14 ditë',  desc: 'Direkt në adresën tënde'          },
]

const RELATED = [
  { slug: '/products/gota',     img: imgGota,     al: 'Gota Letre',      sub: '3.5oz · 7oz · 12oz', available: true },
  { slug: '/products/akullore', img: imgAkullore, al: 'Kupa Akullore',   sub: 'S · M',               available: true },
  { slug: '/products/mbajtese', img: imgMbajtese, al: 'Mbajtëse Lugësh', sub: 'Standarde',           available: true },
]

export default function ProductKupaSupe({ lang = 'al' }) {
  useEffect(() => {
    document.title = lang === 'al'
      ? 'Kupa Supe me Printim 3D | ERA Print Pack Kosovë'
      : 'Custom Printed Soup Cups 3D | ERA Print Pack Kosovo'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', lang === 'al'
      ? 'Personalizo kupat e supës me logon tënde. Kraft natyral, konfigurator 3D live, AR. Prodhim 7–14 ditë. ERA Print Pack, Kosovë.'
      : 'Customize your soup cups with your logo. Natural kraft, live 3D configurator, AR. Production 7–14 days. ERA Print Pack, Kosovo.')
  }, [lang])

  return (
    <Product3DPage
      lang={lang}
      crumbLabel="Kupa Supe"
      specs={SPECS}
      steps={STEPS}
      related={RELATED}
    >
      <KupaSupeEditorSection lang={lang} />
    </Product3DPage>
  )
}
