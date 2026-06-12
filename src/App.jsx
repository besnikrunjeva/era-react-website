import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import { SimpleHeader } from '@/components/ui/simple-header'
import { StickyFooter } from '@/components/ui/sticky-footer'
import { LangToast } from '@/components/ui/lang-toast'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Products from '@/pages/Products'
import ProductGota from '@/pages/ProductGota'
import ProductMbajtese from '@/pages/ProductMbajtese'
import ProductAkullore from '@/pages/ProductAkullore'
import ProductKupaSupe from '@/pages/ProductKupaSupe'
import ProductLeterTavoline from '@/pages/ProductLeterTavoline'
import ProductKutiHamburgeri from '@/pages/ProductKutiHamburgeri'
import ProductKutiSllajder from '@/pages/ProductKutiSllajder'
import ProductKutiFastFood from '@/pages/ProductKutiFastFood'
import ProductKuti6Pika from '@/pages/ProductKuti6Pika'
import ProductKutiHapur from '@/pages/ProductKutiHapur'
import ProductKutiKrepa from '@/pages/ProductKutiKrepa'
import ProductKutiSallata from '@/pages/ProductKutiSallata'
import ProductKutiMakaronash from '@/pages/ProductKutiMakaronash'
import ProductCajHeksagonal from '@/pages/ProductCajHeksagonal'
import ProductCajGableTop from '@/pages/ProductCajGableTop'
import ProductKutiPomfrit from '@/pages/ProductKutiPomfrit'
import ProductMbajtesekafe from '@/pages/ProductMbajtesekafe'
import ProductKutiSanduic from '@/pages/ProductKutiSanduic'
import ProductKutiDhurate from '@/pages/ProductKutiDhurate'
import ProductKutiMuffins from '@/pages/ProductKutiMuffins'
import Machines from '@/pages/Machines'
import PreviewTest from '@/pages/PreviewTest'
import ComingSoon from '@/pages/ComingSoon'

function App() {
  const [lang, setLang] = useState('al')

  return (
    <BrowserRouter basename="/">
      {import.meta.env.PROD ? <ComingSoon /> : (
        <>
          <ScrollToTop />
          <SimpleHeader lang={lang} onLangChange={setLang} />
          <LangToast lang={lang} onSwitch={setLang} />
          <Routes>
            <Route path="/"                          element={<Home lang={lang} />} />
            <Route path="/products"                  element={<Products lang={lang} />} />
            <Route path="/products/gota"             element={<ProductGota lang={lang} />} />
            <Route path="/products/mbajtese"         element={<ProductMbajtese lang={lang} />} />
            <Route path="/products/akullore"         element={<ProductAkullore lang={lang} />} />
            <Route path="/products/kupa-supe"        element={<ProductKupaSupe lang={lang} />} />
            <Route path="/products/leter-tavoline"   element={<ProductLeterTavoline lang={lang} />} />
            <Route path="/products/kuti-hamburgeri"  element={<ProductKutiHamburgeri lang={lang} />} />
            <Route path="/products/kuti-sllajder"    element={<ProductKutiSllajder lang={lang} />} />
            <Route path="/products/kuti-fast-food"   element={<ProductKutiFastFood lang={lang} />} />
            <Route path="/products/kuti-6pika"       element={<ProductKuti6Pika lang={lang} />} />
            <Route path="/products/kuti-hapur"       element={<ProductKutiHapur lang={lang} />} />
            <Route path="/products/kuti-krepa"       element={<ProductKutiKrepa lang={lang} />} />
            <Route path="/products/kuti-sallata"     element={<ProductKutiSallata lang={lang} />} />
            <Route path="/products/kuti-makaronash"  element={<ProductKutiMakaronash lang={lang} />} />
            <Route path="/products/caj-heksagonal"   element={<ProductCajHeksagonal lang={lang} />} />
            <Route path="/products/caj-gable-top"    element={<ProductCajGableTop lang={lang} />} />
            <Route path="/products/kuti-pomfrit"     element={<ProductKutiPomfrit lang={lang} />} />
            <Route path="/products/mbajtese-kafe"    element={<ProductMbajtesekafe lang={lang} />} />
            <Route path="/products/kuti-sanduic"     element={<ProductKutiSanduic lang={lang} />} />
            <Route path="/products/kuti-dhurate"     element={<ProductKutiDhurate lang={lang} />} />
            <Route path="/products/kuti-muffins"      element={<ProductKutiMuffins lang={lang} />} />
            <Route path="/machines"                  element={<Machines lang={lang} />} />
            <Route path="/about"                     element={<About lang={lang} />} />
            <Route path="/contact"                   element={<Contact lang={lang} />} />
            <Route path="/preview-test"              element={<PreviewTest />} />
          </Routes>
          <StickyFooter lang={lang} />
        </>
      )}
    </BrowserRouter>
  )
}

export default App
