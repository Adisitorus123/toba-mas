import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Beranda' },
    { path: '/tentang-kami', label: 'Tentang Kami' },
    { path: '/portofolio', label: 'Portofolio' },
    { path: '/hubungi-kami', label: 'Hubungi Kami' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">M</span>
          <span className="logo-text">Toba Mas</span>
        </Link>

        <button 
          className="navbar-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={isActive(link.path) ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/hubungi-kami" className="nav-cta" onClick={() => setIsOpen(false)}>
              Reservasi
            </Link>
          </li>
        </ul>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(30, 58, 95, 0.95);
          backdrop-filter: blur(12px);
          z-index: 1000;
          border-bottom: 1px solid rgba(212, 175, 55, 0.15);
        }
        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #fff;
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
        }
        .logo-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #D4AF37, #c5a028);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: #1E3A5F;
        }
        .navbar-menu {
          display: flex;
          align-items: center;
          gap: 8px;
          list-style: none;
        }
        .navbar-menu a {
          color: rgba(255,255,255,0.85);
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }
        .navbar-menu a:hover,
        .navbar-menu a.active {
          color: #D4AF37;
          background: rgba(212, 175, 55, 0.1);
        }
        .nav-cta {
          background: linear-gradient(135deg, #D4AF37, #c5a028) !important;
          color: #1E3A5F !important;
          font-weight: 600 !important;
          margin-left: 8px;
        }
        .nav-cta:hover {
          background: linear-gradient(135deg, #e8c547, #D4AF37) !important;
          color: #1E3A5F !important;
          transform: translateY(-1px);
        }
        .navbar-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }
        .hamburger {
          display: block;
          width: 24px;
          height: 2px;
          background: #fff;
          position: relative;
          transition: all 0.3s ease;
        }
        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 2px;
          background: #fff;
          transition: all 0.3s ease;
        }
        .hamburger::before { top: -7px; }
        .hamburger::after { top: 7px; }
        .hamburger.open { background: transparent; }
        .hamburger.open::before { top: 0; transform: rotate(45deg); }
        .hamburger.open::after { top: 0; transform: rotate(-45deg); }
        
        @media (max-width: 768px) {
          .navbar-toggle { display: block; }
          .navbar-menu {
            position: absolute;
            top: 72px;
            left: 0;
            right: 0;
            background: rgba(30, 58, 95, 0.98);
            flex-direction: column;
            padding: 20px;
            gap: 4px;
            transform: translateY(-100%);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
          }
          .navbar-menu.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
          }
          .navbar-menu a {
            display: block;
            width: 100%;
            padding: 12px 16px;
          }
          .nav-cta { margin-left: 0 !important; margin-top: 8px; text-align: center; }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
