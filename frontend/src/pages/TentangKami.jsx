import React, { useEffect, useState } from 'react'
import api from '../services/api'

function TentangKami() {
  const [about, setAbout] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await api.get('/about')
        setAbout(res.data.data)
      } catch (err) {
        setError('Gagal memuat data perusahaan.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchAbout()
  }, [])

  const missions = about?.mission ? about.mission.split('\n').filter(m => m.trim()) : []

  return (
    <div className="tentang-kami-page">
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <h1>Tentang Kami</h1>
          <p>Mengenal lebih dekat cerita, visi, dan komitmen Toba Mas</p>
        </div>
      </div>

      <div className="container">
        {loading ? (
          <div className="loading">Memuat data...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          <>
            {/* Sejarah */}
            <section className="content-section">
              <div className="section-header">
                <span className="section-number">01</span>
                <h2>Sejarah</h2>
              </div>
              <div className="history-content">
                <div className="history-text">
                  <p>{about?.history}</p>
                </div>
                <div className="history-visual">
                  <div className="gold-accent"></div>
                </div>
              </div>
            </section>

            {/* Visi */}
            <section className="content-section vision-block">
              <div className="section-header">
                <span className="section-number">02</span>
                <h2>Visi</h2>
              </div>
              <blockquote className="vision-quote">
                "{about?.vision}"
              </blockquote>
            </section>

            {/* Misi */}
            <section className="content-section">
              <div className="section-header">
                <span className="section-number">03</span>
                <h2>Misi</h2>
              </div>
              <div className="missions-grid">
                {missions.map((mission, index) => {
                  const [title, ...descParts] = mission.split(':')
                  return (
                    <div className="mission-card" key={index}>
                      <div className="mission-number">{String(index + 1).padStart(2, '0')}</div>
                      <h3>{title}</h3>
                      <p>{descParts.join(':')}</p>
                    </div>
                  )
                })}
              </div>
            </section>
          </>
        )}
      </div>

      <style>{`
        .tentang-kami-page {
          padding-top: 72px;
        }
        .page-hero {
          background: linear-gradient(135deg, #1E3A5F 0%, #2a4d7a 100%);
          color: #fff;
          padding: 80px 0 60px;
          text-align: center;
        }
        .page-hero h1 {
          color: #fff;
          font-size: 2.8rem;
          margin-bottom: 12px;
        }
        .page-hero p {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.8);
        }
        .content-section {
          padding: 64px 0;
          border-bottom: 1px solid #eee;
        }
        .content-section:last-child {
          border-bottom: none;
        }
        .section-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
        }
        .section-number {
          font-size: 1rem;
          font-weight: 700;
          color: #D4AF37;
          font-family: 'Playfair Display', serif;
        }
        .section-header h2 {
          font-size: 2rem;
          margin: 0;
        }
        .history-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 48px;
          align-items: start;
        }
        .history-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #4a4a4a;
        }
        .history-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 200px;
        }
        .gold-accent {
          width: 120px;
          height: 120px;
          border: 4px solid #D4AF37;
          border-radius: 50%;
          position: relative;
        }
        .gold-accent::after {
          content: '';
          position: absolute;
          inset: -20px;
          border: 2px solid rgba(212, 175, 55, 0.3);
          border-radius: 50%;
        }
        .vision-block {
          background: #f8f9fa;
          border-radius: 16px;
          margin: 32px 0;
          padding: 48px;
        }
        .vision-quote {
          font-size: 1.5rem;
          font-style: italic;
          color: #1E3A5F;
          font-family: 'Playfair Display', serif;
          line-height: 1.6;
          margin: 0;
          padding-left: 24px;
          border-left: 4px solid #D4AF37;
        }
        .missions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }
        .mission-card {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 12px;
          padding: 28px;
          transition: all 0.3s ease;
        }
        .mission-card:hover {
          border-color: #D4AF37;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          transform: translateY(-4px);
        }
        .mission-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: #D4AF37;
          margin-bottom: 12px;
          font-family: 'Playfair Display', serif;
        }
        .mission-card h3 {
          font-size: 1.1rem;
          margin-bottom: 10px;
          color: #1E3A5F;
        }
        .mission-card p {
          color: #6c757d;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .page-hero h1 { font-size: 2rem; }
          .history-content { grid-template-columns: 1fr; }
          .vision-quote { font-size: 1.2rem; }
          .missions-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  )
}

export default TentangKami
