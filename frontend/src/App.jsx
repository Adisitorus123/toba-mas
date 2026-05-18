import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import TentangKami from './pages/TentangKami'
import Portofolio from './pages/Portofolio'
import HubungiKami from './pages/HubungiKami'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/hubungi-kami" element={<HubungiKami />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
