import { useEffect } from 'react'
import { MachinesHero } from '@/pages/sections/MachinesHero'
import { MachinesProcess } from '@/pages/sections/MachinesProcess'
import { MachinesBody } from '@/pages/sections/MachinesBody'
import { BottomCTA } from '@/pages/sections/BottomCTA'

export default function Machines({ lang = 'al' }) {
  useEffect(() => {
    document.title = lang === 'al'
      ? 'Makinat e Prodhimit — 13 Makina | ERA Print Pack Kosovë'
      : 'Production Machines — 13 Machines | ERA Print Pack Kosovo'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', lang === 'al'
      ? 'ERA Print Pack operon me 13 makina prodhimi të specializuara për ambalazhe letre. Kapacitet i lartë, cilësi e garantuar, prodhim i plotë in-house në Prishtinë.'
      : 'ERA Print Pack operates 13 specialized paper packaging production machines. High capacity, guaranteed quality, fully in-house production in Pristina.')
  }, [lang])

  return (
    <>
      <MachinesHero lang={lang} />
      <MachinesProcess lang={lang} />
      <MachinesBody lang={lang} />
      <BottomCTA lang={lang} />
    </>
  )
}
