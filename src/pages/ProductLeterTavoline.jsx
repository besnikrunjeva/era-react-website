import { useEffect } from 'react'
import { Product3DPage } from '@/pages/sections/Product3DPage'
import { LeterTavolineEditorSection } from '@/pages/sections/LeterTavolineEditorSection'

import imgGota     from '@/assets/products/gota.webp'
import imgMbajtese from '@/assets/products/mbajtese.webp'
import imgKupa     from '@/assets/products/kupa.webp'

const SPECS = {
  al: [
    { key: 'Madhësia',       val: 'Roll standard',                green: true  },
    { key: 'Materiali',      val: 'Letër e bardhë · 40gr'                      },
    { key: 'Printimi',       val: 'CMYK 4-ngjyrësh · Offset'                   },
    { key: 'Sasia minimale', val: '5 000 copë',                   green: true  },
    { key: 'Prodhimi',       val: '7–14 ditë pune',               green: true  },
  ],
  en: [
    { key: 'Size',           val: 'Standard roll',                green: true  },
    { key: 'Material',       val: 'White paper · 40gr'                          },
    { key: 'Printing',       val: '4-color CMYK · Offset'                       },
    { key: 'Min. quantity',  val: '5 000 pcs',                    green: true  },
    { key: 'Production',     val: '7–14 working days',            green: true  },
  ],
}

const STEPS = {
  al: [
    { n: '01', title: 'Ngarko logon tënde',  desc: 'Shih live në letër 3D'              },
    { n: '02', title: 'Dërgo kërkesën',      desc: 'WhatsApp · Email · Telefon'         },
    { n: '03', title: 'Konfirmo ofertën',    desc: 'Çmim final + provë para printimit'  },
    { n: '04', title: 'Dorëzim 7–14 ditë',  desc: 'Direkt në adresën tënde'            },
  ],
  en: [
    { n: '01', title: 'Upload your logo',    desc: 'See it live on the 3D paper'        },
    { n: '02', title: 'Send your request',   desc: 'WhatsApp · Email · Phone'           },
    { n: '03', title: 'Confirm quote',       desc: 'Final price + proof before print'   },
    { n: '04', title: 'Delivery 7–14 days', desc: 'Direct to your address'             },
  ],
}

const RELATED = [
  { slug: '/products/gota',      img: imgGota,     al: 'Gota Letre',       en: 'Paper Cups',       sub: '3.5oz · 7oz · 12oz', available: true  },
  { slug: '/products/mbajtese',  img: imgMbajtese, al: 'Mbajtëse Lugësh',  en: 'Cutlery Holders',  sub: 'Standard',            available: true  },
  { slug: '/products/kupa-supe', img: imgKupa,     al: 'Kupa Supe',        en: 'Soup Cups',        sub: 'Standarde',           available: true  },
]

export default function ProductLeterTavoline({ lang = 'al' }) {
  useEffect(() => {
    document.title = lang === 'al'
      ? 'Letër Tavoline me Printim | ERA Print Pack Kosovë'
      : 'Custom Printed Table Paper | ERA Print Pack Kosovo'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', lang === 'al'
      ? 'Personalizo letrën e tavolinës me logon tënde. Konfigurator 3D live. Prodhim brenda 7–14 ditësh. ERA Print Pack, Kosovë.'
      : 'Customise your table paper with your logo. Live 3D configurator. Production in 7–14 days. ERA Print Pack, Kosovo.')
  }, [lang])

  return (
    <Product3DPage
      lang={lang}
      crumbLabel={lang === 'al' ? 'Letër Tavoline' : 'Table Paper'}
      specs={SPECS[lang]}
      steps={STEPS[lang]}
      related={RELATED}
    >
      <LeterTavolineEditorSection lang={lang} />
    </Product3DPage>
  )
}
