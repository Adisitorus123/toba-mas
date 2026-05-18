import React, { useEffect, useState } from 'react'
import HeroSection from '../components/HeroSection'
import PortfolioCard from '../components/PortfolioCard'
import CTAButton from '../components/CTAButton'
import api from '../services/api'

function Home() {
  const [about, setAbout] = useState(null)
  const [portfolios, setPortfolios] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [aboutRes, portfolioRes] = await Promise.all([
          api.get('/about'),
          api.get('/portfolio')
        ])
        setAbout(aboutRes.data.data)
        setPortfolios(portfolioRes.data.data.slice(0, 3))
      } catch (err) {
        setError('Gagal memuat data. Silakan coba lagi nanti.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <HeroSection />

      {/* Vision Preview Section */}
      <section className="section vision-section">
        <div className="container">
          <div className="vision-content">
            <span className="section-label">Visi Kami</span>
            <h2 className="section-title">Menyatukan Kemewahan & Budaya Batak</h2>
            <p className="vision-text">
              {about?.vision || 'Menjadi pengelola destinasi wisata terintegrasi yang paling inovatif dan berkelanjutan di Asia Tenggara, dengan menonjolkan harmoni antara kemewahan modern dan autentisitas budaya Danau Toba.'}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Portfolios */}
      <section className="section portfolio-section">
        <div className="container">
          <span className="section-label">Portofolio Unggulan</span>
          <h2 className="section-title">Pengalaman yang Kami Tawarkan</h2>
          <p className="section-subtitle">
            Dari akomodasi mewah hingga petualangan budaya, setiap detail dirancang untuk menghadirkan pengalaman tak terlupakan.
          </p>

          {loading ? (
            <div className="loading">Memuat portofolio...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            <div className="grid grid-3">
              {portfolios.map((portfolio) => (
                <PortfolioCard key={portfolio.id} portfolio={portfolio} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Siap Menjelajahi Keindahan Danau Toba?</h2>
            <p>Hubungi kami sekarang untuk informasi reservasi dan paket wisata eksklusif.</p>
            <CTAButton 
              text="Chat WhatsApp" 
              href="https://wa.me/6281234567890" 
              variant="primary"
            />
          </div>
        </div>
      </section>

      <style>{`
        .vision-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #eef2f7 100%);
        }
        .vision-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        .section-label {
          display: inline-block;
          color: #D4AF37;
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }
        .vision-text {
          font-size: 1.25rem;
          color: #4a4a4a;
          line-height: 1.8;
          font-style: italic;
          font-family: 'Playfair Display', serif;
        }
        .portfolio-section {
          background: #fff;
        }
        .portfolio-section .section-title {
          margin-bottom: 12px;
        }
        .cta-section {
          background: linear-gradient(135deg, #1E3A5F 0%, #2D5A27 100%);
          padding: 100px 0;
        }
        .cta-box {
          text-align: center;
          color: #fff;
        }
        .cta-box h2 {
          color: #fff;
          font-size: 2.2rem;
          margin-bottom: 16px;
        }
        .cta-box p {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.85);
          margin-bottom: 32px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 768px) {
          .cta-box h2 { font-size: 1.6rem; }
        }
      `}</style>
    </div>
  )
}

export default Home
