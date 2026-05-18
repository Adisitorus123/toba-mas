import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Toba Mas</h3>
            <p>Pengelola destinasi wisata eksklusif Danau Toba yang menggabungkan kemewahan modern dengan kearifan lokal Batak.</p>
          </div>
          <div className="footer-links">
            <h4>Navigasi</h4>
            <ul>
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/tentang-kami">Tentang Kami</Link></li>
              <li><Link to="/portofolio">Portofolio</Link></li>
              <li><Link to="/hubungi-kami">Hubungi Kami</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Kontak</h4>
            <p>Parapat, Danau Toba</p>
            <p>Sumatera Utara, Indonesia</p>
            <p>Email: info@tobamas.id</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p> {new Date().getFullYear()} Toba Mas. Seluruh hak cipta dilindungi.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: #1E3A5F;
          color: rgba(255,255,255,0.8);
          padding: 60px 0 0;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }
        .footer-brand h3 {
          color: #D4AF37;
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          margin-bottom: 16px;
        }
        .footer-brand p {
          line-height: 1.7;
          max-width: 300px;
        }
        .footer-links h4,
        .footer-contact h4 {
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 16px;
          font-family: 'Inter', sans-serif;
        }
        .footer-links ul {
          list-style: none;
        }
        .footer-links li {
          margin-bottom: 10px;
        }
        .footer-links a {
          color: rgba(255,255,255,0.7);
          transition: all 0.3s ease;
        }
        .footer-links a:hover {
          color: #D4AF37;
          padding-left: 4px;
        }
        .footer-contact p {
          margin-bottom: 8px;
          font-size: 0.95rem;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 20px 0;
          text-align: center;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.5);
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
