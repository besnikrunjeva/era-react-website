import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const STORAGE_KEY = 'era-lang-toast-dismissed'

function isLikelyKosovo() {
  const loc = navigator.language || ''
  // sq, sq-AL, sq-XK, sq-MK — Albanian-speaking locales
  return /^sq/i.test(loc)
}

export function LangToast({ lang, onSwitch }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (lang === 'en') return
    if (sessionStorage.getItem(STORAGE_KEY)) return
    if (isLikelyKosovo()) return
    // Small delay so it doesn't fire before the page has loaded
    const t = setTimeout(() => setVisible(true), 1800)
    return () => clearTimeout(t)
  }, [])

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  function accept() {
    onSwitch('en')
    dismiss()
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 32 }}
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          className="fixed bottom-6 right-4 z-50 w-72 rounded-2xl border border-[#4ca706]/30 bg-[#111] p-4 shadow-2xl"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl leading-none mt-0.5">🌍</span>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-bold text-white leading-snug">Prefer English?</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Looks like you're outside Kosovo — switch to English for a better experience.</p>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={accept}
                  className="flex-1 rounded-lg bg-[#4ca706] py-1.5 text-[11px] font-bold text-white transition-colors hover:bg-[#3d8f05]"
                >
                  🇬🇧 Switch to English
                </button>
                <button
                  onClick={dismiss}
                  className="rounded-lg border border-[#374151] px-3 py-1.5 text-[11px] font-bold text-gray-400 transition-colors hover:border-gray-500 hover:text-gray-300"
                >
                  No thanks
                </button>
              </div>
            </div>
            <button onClick={dismiss} className="shrink-0 text-gray-600 hover:text-gray-400 transition-colors">
              <X className="size-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
