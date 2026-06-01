import { MachinesHero } from '@/pages/sections/MachinesHero'
import { MachinesProcess } from '@/pages/sections/MachinesProcess'
import { MachinesBody } from '@/pages/sections/MachinesBody'
import { BottomCTA } from '@/pages/sections/BottomCTA'

export default function Machines({ lang = 'al' }) {
  return (
    <>
      <MachinesHero lang={lang} />
      <MachinesProcess lang={lang} />
      <MachinesBody lang={lang} />
      <BottomCTA lang={lang} />
    </>
  )
}
