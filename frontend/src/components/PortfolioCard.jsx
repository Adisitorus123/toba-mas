import React from 'react'

function PortfolioCard({ portfolio }) {
  return (
    <div className="portfolio-card">
      <div className="portfolio-image">
        <img 
          src={portfolio.image_url || 'https://via.placeholder.com/800x600?text=Toba+Mas'} 
          alt={portfolio.title}
          loading="lazy"
        />
        <span className="portfolio-category">{portfolio.category}</span>
      </div>
      <div className="portfolio-body">
        <h3>{portfolio.title}</h3>
        <p>{portfolio.description}</p>
      </div>

      <style>{`
        .portfolio-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: all 0.4s ease;
          border: 1px solid #f0f0f0;
        }
        .portfolio-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
        }
        .portfolio-image {
          position: relative;
          height: 240px;
          overflow: hidden;
        }
        .portfolio-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .portfolio-card:hover .portfolio-image img {
          transform: scale(1.08);
        }
        .portfolio-category {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(30, 58, 95, 0.9);
          color: #D4AF37;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .portfolio-body {
          padding: 24px;
        }
        .portfolio-body h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
          color: #1E3A5F;
        }
        .portfolio-body p {
          color: #6c757d;
          font-size: 0.95rem;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default PortfolioCard
