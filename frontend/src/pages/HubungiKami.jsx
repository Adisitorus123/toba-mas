import React, { useEffect, useState } from 'react'
import CTAButton from '../components/CTAButton'
import api from '../services/api'

function HubungiKami() {
  const [contact, setContact] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await api.get('/contact')
        setContact(res.data.data)
      } catch (err) {
        setError('Gagal memuat informasi kontak.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchContact()
  }, [])

  const waNumber = contact?.whatsapp?.value || '6281234567890'
  const email = contact?.email?.value || 'info@tobamas.id'
  const address = contact?.address?.value || 'Parapat, Danau Toba, Sumatera Utara, Indonesia'
  const instagram = contact?.instagram?.value || '@tobamas.official'

  return (
    <div className="hubungi-kami-page">
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <h1>Hubungi Kami</h1>
          <p>Tim Toba Mas siap membantu merencanakan perjalanan impian Anda</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-layout">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Informasi Kontak</h2>
            
            {loading ? (
              <div className="loading">Memuat kontak...</div>
            ) : error ? (
              <div className="error">{error}</div>
            ) : (
              <>
                <div className="info-card">
                  <div className="info-icon">WA</div>
                  <div>
                    <h4>WhatsApp</h4>
                    <p>+{waNumber}</p>
                    <span className="info-desc">Reservasi & Informasi cepat</span>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">@</div>
                  <div>
                    <h4>Email</h4>
                    <p>{email}</p>
                    <span className="info-desc">Untuk pertanyaan detail</span>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">IG</div>
                  <div>
                    <h4>Instagram</h4>
                    <p>{instagram}</p>
                    <span className="info-desc">Update & inspirasi perjalanan</span>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">Lok</div>
                  <div>
                    <h4>Alamat</h4>
                    <p>{address}</p>
                    <span className="info-desc">Kantor Pusat Toba Mas</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* CTA Box */}
          <div className="cta-box-large">
            <div className="cta-content">
              <h3>Mulai Perjalanan Anda</h3>
              <p>
                Dapatkan penawaran terbaik untuk paket wisata Danau Toba. 
                Chat langsung dengan tim kami melalui WhatsApp untuk respon tercepat.
              </p>
              <div className="cta-actions">
                <CTAButton 
                  text="Chat WhatsApp Sekarang" 
                  href={`https://wa.me/${waNumber}`}
                  variant="primary"
                />
              </div>
              <div className="cta-meta">
                <span>Respon rata-rata &lt; 15 menit</span>
                <span>Layanan 08.00 - 20.00 WIB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hubungi-kami-page {
          padding-top: 72px;
          min-height: 100vh;
        }
        .page-hero {
          background: linear-gradient(135deg, #2D5A27 0%, #1E3A5F 100%);
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
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          padding-bottom: 80px;
        }
        .contact-info h2 {
          font-size: 1.8rem;
          margin-bottom: 32px;
          color: #1E3A5F;
        }
        .info-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px;
          background: #fff;
          border-radius: 12px;
          border: 1px solid #eee;
          margin-bottom: 16px;
          transition: all 0.3s ease;
        }
        .info-card:hover {
          border-color: #D4AF37;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
        }
        .info-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #1E3A5F, #2a4d7a);
          color: #D4AF37;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.85rem;
          flex-shrink: 0;
        }
        .info-card h4 {
          font-size: 1rem;
          margin-bottom: 4px;
          color: #1E3A5F;
          font-family: 'Inter', sans-serif;
        }
        .info-card p {
          color: #4a4a4a;
          font-weight: 500;
          margin-bottom: 4px;
        }
        .info-desc {
          font-size: 0.85rem;
          color: #6c757d;
        }
        .cta-box-large {
          background: linear-gradient(135deg, #1E3A5F 0%, #2a4d7a 100%);
          border-radius: 20px;
          padding: 48px;
          display: flex;
          align-items: center;
          color: #fff;
          height: fit-content;
        }
        .cta-content h3 {
          color: #fff;
          font-size: 1.8rem;
          margin-bottom: 16px;
        }
        .cta-content p {
          color: rgba(255,255,255,0.85);
          line-height: 1.7;
          margin-bottom: 32px;
        }
        .cta-actions {
          margin-bottom: 24px;
        }
        .cta-meta {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }
        .cta-meta span {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.6);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .cta-meta span::before {
          content: '';
          width: 6px;
          height: 6px;
          background: #25D366;
          border-radius: 50%;
          display: inline-block;
        }
        @media (max-width: 768px) {
          .page-hero h1 { font-size: 2rem; }
          .contact-layout { grid-template-columns: 1fr; }
          .cta-box-large { padding: 32px; }
          .cta-content h3 { font-size: 1.4rem; }
        }
      `}</style>
    </div>
  )
}

export default HubungiKami
