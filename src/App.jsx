import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SimpleHeader } from '@/components/ui/simple-header'
import { StickyFooter } from '@/components/ui/sticky-footer'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Products from '@/pages/Products'
import ProductGota from '@/pages/ProductGota'
import Machines from '@/pages/Machines'
import PreviewTest from '@/pages/PreviewTest'

function App() {
  return (
    <BrowserRouter basename="/era-react-website">
      <SimpleHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/gota" element={<ProductGota />} />
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
