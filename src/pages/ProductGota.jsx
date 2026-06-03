import { useEffect } from 'react'
import { Product3DPage } from '@/pages/sections/Product3DPage'
import { GotaEditorSection } from '@/pages/sections/GotaEditorSection'

import imgKapak    from '@/assets/products/kapak.webp'
import imgKupa     from '@/assets/products/kupa.webp'
import imgAkullore from '@/assets/products/akullore.webp'

const SPECS = [
  { key: 'Madhësitë',       val: '3.5oz · 7oz · 12oz',        green: true  },
  { key: 'Materiali',       val: 'Letër e bardhë · Single-wall'              },
  { key: 'Printimi',        val: 'CMYK 4-ngjyrësh · Offset'                  },
  { key: 'Sasia minimale',  val: '10 000 · ose 5 000 + 5 000', green: true  },
  { key: 'Prodhimi',        val: '7–14 ditë pune',              green: true  },
]

const STEPS = [
  { n: '01', title: 'Personalizo gotën',  desc: 'Madhësia · logo ose dizajn i plotë' },
  { n: '02', title: 'Dërgo kërkesën',     desc: 'WhatsApp · Email · Telefon'          },
  { n: '03', title: 'Konfirmo ofertën',   desc: 'Çmim final + provë para printimit'   },
  { n: '04', title: 'Dorëzim 7–14 ditë', desc: 'Direkt në adresën tënde'             },
]

const RELATED = [
  { slug: '/products/kapak-gota', img: imgKapak,    al: 'Kapak Gote',    sub: 'PET · 3 madhësi', available: false },
  { slug: '/products/kupa-pasta', img: imgKupa,     al: 'Kupa Paste',    sub: 'S · M · L',        available: false },
  { slug: '/products/akullore',   img: imgAkullore, al: 'Kupa Akullore', sub: 'H53 · H63',         available: false },
]

export default function ProductGota({ lang = 'al' }) {
  useEffect(() => {
    document.title = lang === 'al'
      ? 'Gota Letre me Printim 3D — 3.5oz, 7oz, 12oz | ERA Print Pack'
      : 'Custom Printed Paper Cups 3D — 3.5oz, 7oz, 12oz | ERA Print Pack'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', lang === 'al'
      ? 'Personalizo gotën tënde të letrës me logo ose dizajn të plotë. Madhësi 3.5oz, 7oz, 12oz. Konfigurator 3D live. Prodhim brenda 7–14 ditësh. ERA Print Pack, Kosovë.'
      : 'Customize your paper cup with logo or full design. Sizes 3.5oz, 7oz, 12oz. Live 3D configurator. Production in 7–14 days. ERA Print Pack, Kosovo.')
  }, [lang])

  return (
    <Product3DPage
      lang={lang}
      crumbLabel="Gota Letre"
      specs={SPECS}
      steps={STEPS}
      related={RELATED}
    >
      <GotaEditorSection lang={lang} />
    </Product3DPage>
  )
}
