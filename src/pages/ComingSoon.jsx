import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { InfiniteGrid } from '@/components/ui/infinite-grid'
import eraLogo from '@/assets/era-logo.png'

export default function ComingSoon() {
  return (
    <InfiniteGrid className="min-h-[100dvh]">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center gap-6 px-6 text-center"
      >
        {/* Logo */}
        <img src={eraLogo} alt="Shtypshkronja ERA" className="h-16 w-auto" />

        {/* Divider */}
        <div className="h-px w-16 bg-[#4ca706]/50" />

        {/* Coming soon */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            Së shpejti
            <span className="mx-3 text-[#4ca706]/40">·</span>
            Coming soon
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-gray-500">
            Ambalazhe letre me printim profesional — prodhuar në Kosovë.
          </p>
        </div>

        {/* CTA */}
        <motion.a
          href="https://wa.me/38344113533"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-2 inline-flex items-center gap-2.5 rounded-xl bg-[#4ca706] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4ca706]/20 transition-colors hover:bg-[#3d8f05]"
        >
          <MessageCircle className="size-4" />
          Na kontakto në WhatsApp
        </motion.a>

        {/* Phone */}
        <p className="text-xs text-gray-400">+383 44 113 533</p>
      </motion.div>
    </InfiniteGrid>
  )
}
