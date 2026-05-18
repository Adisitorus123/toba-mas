import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection({ 
  title = "Keagungan Danau Toba, Kemewahan yang Autentik", 
  subtitle = "Temukan harmoni sempurna antara pariwisata berkelanjutan dan kekayaan budaya Batak bersama Toba Mas.",
  ctaText = "Jelajahi Toba Mas",
  ctaLink = "/tentang-kami",
  showSecondaryCta = true
}) {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="container">
          <span className="hero-badge">UNESCO Global Geopark</span>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div className="hero-buttons">
            <Link to={ctaLink} className="btn btn-primary">
              {ctaText}
            </Link>
            {showSecondaryCta && (
              <Link to="/portofolio" className="btn btn-secondary">
                Lihat Portofolio
              </Link>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-top: 0;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background: url('https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1920') center/cover no-repeat;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(30, 58, 95, 0.88) 0%,
            rgba(30, 58, 95, 0.65) 50%,
            rgba(45, 90, 39, 0.55) 100%
          );
        }
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: #fff;
          padding: 120px 24px 80px;
          width: 100%;
        }
        .hero-badge {
          display: inline-block;
          background: rgba(212, 175, 55, 0.2);
          color: #D4AF37;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 24px;
          border: 1px solid rgba(212, 175, 55, 0.3);
        }
        .hero h1 {
          font-size: 3.5rem;
          color: #fff;
          max-width: 800px;
          margin: 0 auto 24px;
          line-height: 1.15;
          text-shadow: 0 2px 20px rgba(0,0,0,0.2);
        }
        .hero p {
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto 40px;
          color: rgba(255,255,255,0.85);
          line-height: 1.7;
        }
        .hero-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .hero .btn-secondary {
          color: #fff;
          border-color: rgba(255,255,255,0.5);
        }
        .hero .btn-secondary:hover {
          background: #fff;
          color: #1E3A5F;
          border-color: #fff;
        }
        @media (max-width: 768px) {
          .hero h1 { font-size: 2.2rem; }
          .hero p { font-size: 1.05rem; }
          .hero-content { padding: 100px 20px 60px; }
        }
      `}</style>
    </section>
  )
}

export default HeroSection
