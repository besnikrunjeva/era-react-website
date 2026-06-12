// src/pages/sections/ProductsGrid.jsx
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Search, X, SlidersHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CATALOG, TYPES, USE_CASES, MATERIALS } from '@/data/catalog'

// ── ProductCard ──────────────────────────────────────────────────────────
function ProductCard({ product, lang, index }) {
  const name = lang === 'al' ? product.al : product.en

  const inner = (
    <>
      <div className="relative h-52 overflow-hidden">
        <img
          src={product.img}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {!product.available && (
          <span className="absolute right-2 top-2 rounded-full bg-black/50 px-2 py-0.5 text-[9px] font-bold text-white/80 backdrop-blur-sm">
            {lang === 'al' ? 'Së shpejti' : 'Soon'}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 bg-[#eeedea] p-4">
        <div className="flex-1">
          <p className="truncate text-[10px] font-medium tracking-wide text-black/35">
            {lang === 'al' ? product.desc.al : product.desc.en}
          </p>
          <h3 className="mt-0.5 text-base font-extrabold leading-snug text-black/80">
            {name}
          </h3>
        </div>
        <div className="flex items-center justify-between gap-2 pt-1">
          <span className={`text-[11px] font-bold transition-colors ${product.available ? 'text-[#4ca706]' : 'text-black/25'}`}>
            {product.available
              ? (lang === 'al' ? 'Shiko detajet →' : 'View details →')
              : (lang === 'al' ? 'Së shpejti' : 'Coming soon')}
          </span>
          {product.available && (
            <a
              href="https://wa.me/38344113533"
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              aria-label={lang === 'al' ? 'Merr ofertë në WhatsApp' : 'Get a quote on WhatsApp'}
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#4ca706]/10 text-[#4ca706] transition-colors hover:bg-[#4ca706]/20 active:bg-[#4ca706]/30"
            >
              <MessageCircle className="size-4" />
            </a>
          )}
        </div>
      </div>
    </>
  )

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.25), ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/[0.07] bg-[#eeedea]"
    >
      {product.available
        ? <Link to={product.slug} className="flex flex-1 flex-col">{inner}</Link>
        : inner}
    </motion.div>
  )
}

// ── FilterChip ───────────────────────────────────────────────────────────
function FilterChip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer rounded-full border px-3 py-1 text-[11px] font-semibold transition-all duration-150 ${
        active
          ? 'border-[#4ca706] bg-[#4ca706] text-white'
          : 'border-gray-200 text-gray-600 hover:border-[#4ca706]/40 hover:text-gray-900'
      }`}
    >
      {label}
    </button>
  )
}

// ── FilterBar ────────────────────────────────────────────────────────────
function FilterBar({ lang, query, setQuery, activeType, setActiveType, activeUseCases, setActiveUseCases, activeMaterials, setActiveMaterials, count }) {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const hasFilters = query || activeType || activeUseCases.length > 0 || activeMaterials.length > 0

  function toggleUseCase(id) {
    setActiveUseCases(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  function toggleMaterial(id) {
    setActiveMaterials(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  function clearAll() {
    setQuery('')
    setActiveType(null)
    setActiveUseCases([])
    setActiveMaterials([])
  }

  return (
    <div className="mb-8 rounded-2xl border border-black/[0.06] bg-white p-4 md:p-5">
      {/* Search row */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 md:max-w-xs">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={lang === 'al' ? 'Kërko produktin…' : 'Search products…'}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-9 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#4ca706]/50 focus:ring-2 focus:ring-[#4ca706]/15"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              aria-label={lang === 'al' ? 'Pastro kërkimin' : 'Clear search'}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setFiltersOpen(v => !v)}
          className={`flex cursor-pointer items-center gap-1.5 rounded-xl border px-3 py-2.5 text-[11px] font-semibold transition-colors md:hidden ${
            hasFilters ? 'border-[#4ca706] bg-[#4ca706]/5 text-[#4ca706]' : 'border-gray-200 text-gray-600'
          }`}
        >
          <SlidersHorizontal className="size-3.5" />
          {lang === 'al' ? 'Filtro' : 'Filter'}
          {hasFilters && <span className="size-1.5 rounded-full bg-[#4ca706]" />}
        </button>

        {/* Desktop count + clear */}
        <div className="ml-auto hidden items-center gap-3 md:flex">
          <span className="whitespace-nowrap text-[11px] text-gray-400">
            {count} {lang === 'al' ? 'produktë' : 'products'}
          </span>
          {hasFilters && (
            <button onClick={clearAll} className="cursor-pointer text-[11px] font-semibold text-[#4ca706] hover:underline">
              {lang === 'al' ? 'Pastro filtrat' : 'Clear filters'}
            </button>
          )}
        </div>
      </div>

      {/* Filter chips — always on desktop, toggled on mobile */}
      <div className={`flex-col gap-3 mt-4 ${filtersOpen ? 'flex' : 'hidden md:flex'}`}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-16 shrink-0 text-[10px] font-bold uppercase tracking-wider text-gray-400">
            {lang === 'al' ? 'Lloji' : 'Type'}
          </span>
          {TYPES.map(t => (
            <FilterChip
              key={t.id}
              label={lang === 'al' ? t.al : t.en}
              active={activeType === t.id}
              onClick={() => setActiveType(prev => prev === t.id ? null : t.id)}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-16 shrink-0 text-[10px] font-bold uppercase tracking-wider text-gray-400">
            {lang === 'al' ? 'Biznesi' : 'Use'}
          </span>
          {USE_CASES.map(u => (
            <FilterChip
              key={u.id}
              label={lang === 'al' ? u.al : u.en}
              active={activeUseCases.includes(u.id)}
              onClick={() => toggleUseCase(u.id)}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-16 shrink-0 text-[10px] font-bold uppercase tracking-wider text-gray-400">
            {lang === 'al' ? 'Materiali' : 'Material'}
          </span>
          {MATERIALS.map(m => (
            <FilterChip
              key={m.id}
              label={lang === 'al' ? m.al : m.en}
              active={activeMaterials.includes(m.id)}
              onClick={() => toggleMaterial(m.id)}
            />
          ))}
        </div>
      </div>

      {/* Mobile count + clear */}
      {(filtersOpen || hasFilters) && (
        <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3 md:hidden">
          <span className="text-[11px] text-gray-400">
            {count} {lang === 'al' ? 'produktë' : 'products'}
          </span>
          {hasFilters && (
            <button onClick={clearAll} className="cursor-pointer text-[11px] font-semibold text-[#4ca706] hover:underline">
              {lang === 'al' ? 'Pastro filtrat' : 'Clear filters'}
            </button>
          )}
        </div>
      )}
    </div>
  )
}

// ── EmptyState ───────────────────────────────────────────────────────────
function EmptyState({ lang, onClear }) {
  return (
    <div className="flex flex-col items-center gap-4 py-20 text-center">
      <div className="flex size-16 items-center justify-center rounded-2xl bg-gray-100">
        <Search className="size-7 text-gray-300" />
      </div>
      <div>
        <p className="font-bold text-gray-700">
          {lang === 'al' ? 'Nuk u gjet asnjë produkt' : 'No products found'}
        </p>
        <p className="mt-1 text-sm text-gray-400">
          {lang === 'al' ? 'Provo të pastrojësh filtrat' : 'Try clearing your filters'}
        </p>
      </div>
      <button
        onClick={onClear}
        className="cursor-pointer rounded-xl bg-[#4ca706] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#3d8f05]"
      >
        {lang === 'al' ? 'Pastro filtrat' : 'Clear filters'}
      </button>
    </div>
  )
}

// ── ProductsGrid (main export) ────────────────────────────────────────────
export function ProductsGrid({ lang = 'al' }) {
  const [query, setQuery] = useState('')
  const [activeType, setActiveType] = useState(null)
  const [activeUseCases, setActiveUseCases] = useState([])
  const [activeMaterials, setActiveMaterials] = useState([])

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return CATALOG.filter(p => {
      if (q && !p.al.toLowerCase().includes(q) && !p.en.toLowerCase().includes(q) &&
          !p.desc.al.toLowerCase().includes(q) && !p.desc.en.toLowerCase().includes(q)) return false
      if (activeType && p.type !== activeType) return false
      if (activeUseCases.length > 0 && !activeUseCases.some(uc => p.useCases.includes(uc))) return false
      if (activeMaterials.length > 0 && !activeMaterials.some(m => p.materials.includes(m))) return false
      return true
    })
  }, [query, activeType, activeUseCases, activeMaterials])

  function clearAll() {
    setQuery('')
    setActiveType(null)
    setActiveUseCases([])
    setActiveMaterials([])
  }

  return (
    <section className="bg-[#f5f4f0] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <FilterBar
          lang={lang}
          query={query}
          setQuery={setQuery}
          activeType={activeType}
          setActiveType={setActiveType}
          activeUseCases={activeUseCases}
          setActiveUseCases={setActiveUseCases}
          activeMaterials={activeMaterials}
          setActiveMaterials={setActiveMaterials}
          count={filtered.length}
        />

        {filtered.length === 0 ? (
          <EmptyState lang={lang} onClear={clearAll} />
        ) : (
          <motion.div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((product, i) => (
                <ProductCard key={product.slug} product={product} lang={lang} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  )
}
