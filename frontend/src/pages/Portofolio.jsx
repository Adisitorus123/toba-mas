import React, { useEffect, useState } from 'react'
import PortfolioCard from '../components/PortfolioCard'
import api from '../services/api'

function Portofolio() {
  const [portfolios, setPortfolios] = useState([])
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const res = await api.get('/portfolio')
        const data = res.data.data
        setPortfolios(data)
        const cats = ['Semua', ...new Set(data.map(p => p.category))]
        setCategories(cats)
      } catch (err) {
        setError('Gagal memuat portofolio.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchPortfolios()
  }, [])

  const filtered = activeCategory === 'Semua' 
    ? portfolios 
    : portfolios.filter(p => p.category === activeCategory)

  return (
    <div className="portofolio-page">
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <h1>Portofolio Kami</h1>
          <p>Ragam pengalaman wisata eksklusif yang kami kelola di kawasan Danau Toba</p>
        </div>
      </div>

      <div className="container">
        {/* Category Filter */}
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={activeCategory === cat ? 'active' : ''}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        {loading ? (
          <div className="loading">Memuat portofolio...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          <div className="grid grid-3 portfolio-grid">
            {filtered.map((portfolio) => (
              <PortfolioCard key={portfolio.id} portfolio={portfolio} />
            ))}
          </div>
        )}
      </div>

      <style>{`
        .portofolio-page {
          padding-top: 72px;
          min-height: 100vh;
        }
        .page-hero {
          background: linear-gradient(135deg, #1E3A5F 0%, #2D5A27 100%);
          color: #fff;
          padding: 80px 0 60px;
          text-align: center;
          margin-bottom: 48px;
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
        .filter-bar {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 40px;
        }
        .filter-bar button {
          padding: 10px 24px;
          border-radius: 50px;
          border: 2px solid #e0e0e0;
          background: #fff;
          color: #4a4a4a;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .filter-bar button:hover {
          border-color: #1E3A5F;
          color: #1E3A5F;
        }
        .filter-bar button.active {
          background: #1E3A5F;
          color: #fff;
          border-color: #1E3A5F;
        }
        .portfolio-grid {
          margin-bottom: 64px;
        }
        @media (max-width: 768px) {
          .page-hero h1 { font-size: 2rem; }
          .filter-bar { gap: 8px; }
          .filter-bar button { padding: 8px 18px; font-size: 0.9rem; }
        }
      `}</style>
    </div>
  )
}

export default Portofolio
