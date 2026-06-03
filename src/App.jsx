import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import { SimpleHeader } from '@/components/ui/simple-header'
import { StickyFooter } from '@/components/ui/sticky-footer'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Products from '@/pages/Products'
import ProductGota from '@/pages/ProductGota'
import ProductMbajtese from '@/pages/ProductMbajtese'
import ProductAkullore from '@/pages/ProductAkullore'
import ProductKupaSupe from '@/pages/ProductKupaSupe'
import Machines from '@/pages/Machines'
import PreviewTest from '@/pages/PreviewTest'

function App() {
  return (
    <BrowserRouter basename="/era-react-website">
      <ScrollToTop />
      <SimpleHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/gota" element={<ProductGota />} />
        <Route path="/products/mbajtese" element={<ProductMbajtese />} />
        <Route path="/products/akullore" element={<ProductAkullore />} />
        <Route path="/products/kupa-supe" element={<ProductKupaSupe />} />
        <Route path="/machines" element={<Machines />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/preview-test" element={<PreviewTest />} />
      </Routes>
      <StickyFooter />
    </BrowserRouter>
  )
}

export default App
