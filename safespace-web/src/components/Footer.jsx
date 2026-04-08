import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--gray-900)', color: 'var(--gray-400)',
      padding: '48px 0 24px',
    }}>
      <div className="accent-bar" style={{ marginBottom: 0, position: 'relative', top: 0 }} />
      <div className="container" style={{ paddingTop: 40 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="icon-circle" style={{ background: 'linear-gradient(135deg,var(--purple),var(--pink))' }}>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff', fontSize: '1.1rem' }}>SafeSpace</span>
            </div>
            <p style={{ fontSize: '.875rem', lineHeight: 1.6 }}>
              Қауіпсіз кеңістік — A safe and anonymous platform designed to support women in Kazakhstan.
            </p>
          </div>

          {/* Links */}
          <div>
            <div style={{ color: '#fff', fontWeight: 600, marginBottom: 16, fontSize: '.875rem', letterSpacing: '.06em', textTransform: 'uppercase' }}>Platform</div>
            {[
              { to: '/chat', label: 'AI Chat (Altyn)' },
              { to: '/community', label: 'Community' },
              { to: '/resources', label: 'Resources' },
              { to: '/shelter-map', label: 'Shelter Map' },
              { to: '/safety-plan', label: 'Safety Plan' },
            ].map(l => (
              <Link key={l.to} to={l.to} style={{ display: 'block', fontSize: '.875rem', marginBottom: 8, color: 'var(--gray-400)' }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'var(--gray-400)'}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Support */}
          <div>
            <div style={{ color: '#fff', fontWeight: 600, marginBottom: 16, fontSize: '.875rem', letterSpacing: '.06em', textTransform: 'uppercase' }}>Support</div>
            {[
              { to: '/emergency', label: 'Emergency Help' },
              { to: '/privacy', label: 'Privacy & Security' },
              { to: '/panic', label: 'Panic Mode' },
            ].map(l => (
              <Link key={l.to} to={l.to} style={{ display: 'block', fontSize: '.875rem', marginBottom: 8, color: 'var(--gray-400)' }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'var(--gray-400)'}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Emergency */}
          <div>
            <div style={{ color: '#fff', fontWeight: 600, marginBottom: 16, fontSize: '.875rem', letterSpacing: '.06em', textTransform: 'uppercase' }}>Emergency</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { num: '150', label: 'Domestic Violence Hotline' },
                { num: '102', label: 'Police Emergency' },
                { num: '103', label: 'Medical Emergency' },
              ].map(e => (
                <div key={e.num} style={{ fontSize: '.875rem' }}>
                  <span style={{ color: '#fff', fontWeight: 700 }}>{e.num}</span>
                  <span style={{ marginLeft: 8, color: 'var(--gray-500)' }}>{e.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #374151', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: '.8125rem' }}>© 2024 SafeSpace. All conversations are encrypted and anonymous.</p>
          <div className="flex gap-3">
            <span className="badge" style={{ background: '#1f2937', color: 'var(--gray-400)', border: '1px solid #374151' }}>
              🔒 End-to-End Encrypted
            </span>
            <span className="badge" style={{ background: '#1f2937', color: 'var(--gray-400)', border: '1px solid #374151' }}>
              👁 Anonymous
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
