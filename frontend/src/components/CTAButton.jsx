import React from 'react'

function CTAButton({ 
  text = "Hubungi Kami", 
  href, 
  icon = true,
  variant = 'primary'
}) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`cta-button ${variant}`}
    >
      {icon && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      )}
      {text}

      <style>{`
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.05rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .cta-button.primary {
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: #fff;
          box-shadow: 0 4px 16px rgba(37, 211, 102, 0.35);
        }
        .cta-button.primary:hover {
          background: linear-gradient(135deg, #22c55e, #0d9488);
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(37, 211, 102, 0.45);
        }
        .cta-button.gold {
          background: linear-gradient(135deg, #D4AF37, #c5a028);
          color: #1E3A5F;
          box-shadow: 0 4px 16px rgba(212, 175, 55, 0.35);
        }
        .cta-button.gold:hover {
          background: linear-gradient(135deg, #e8c547, #D4AF37);
          transform: translateY(-2px);
        }
      `}</style>
    </a>
  )
}

export default CTAButton
