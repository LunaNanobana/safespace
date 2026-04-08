import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/chat', label: 'AI Chat' },
  { to: '/community', label: 'Community' },
  { to: '/shelter-map', label: 'Shelter Map' },
  { to: '/resources', label: 'Resources' },
  { to: '/safety-plan', label: 'Safety Plan' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="accent-bar" />
      <nav className="sticky top-0 z-50" style={{
        background: 'rgba(255,255,255,.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--gray-200)',
        height: 'var(--nav-h)',
      }}>
        <div className="container h-full flex items-center justify-between" style={{ height: '100%' }}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="icon-circle" style={{
              background: 'linear-gradient(135deg, var(--purple), var(--pink))',
            }}>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', lineHeight: 1.1 }}>
                Safe<span className="grad-text">Space</span>
              </div>
              <div style={{ fontSize: '.65rem', color: 'var(--gray-400)', letterSpacing: '.06em' }}>Қауіпсіз кеңістік</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="flex items-center gap-1 hide-mobile">
            {links.map(l => (
              <Link key={l.to} to={l.to} className="btn btn-ghost btn-sm" style={{
                color: pathname === l.to ? 'var(--purple)' : 'var(--gray-600)',
                background: pathname === l.to ? '#faf5ff' : 'transparent',
                fontWeight: pathname === l.to ? 600 : 400,
              }}>{l.label}</Link>
            ))}
          </div>

          {/* CTA + mobile menu */}
          <div className="flex items-center gap-3">
            <Link to="/emergency" className="btn btn-red btn-sm hide-mobile">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              Emergency
            </Link>

            {/* Hamburger */}
            <button onClick={() => setOpen(!open)} style={{ padding: 8 }} className="show-mobile" aria-label="Menu">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="var(--gray-700)" strokeWidth="2">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            background: '#fff', borderTop: '1px solid var(--gray-200)',
            padding: '16px', display: 'flex', flexDirection: 'column', gap: 4,
          }}>
            {links.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                style={{
                  padding: '12px 16px', borderRadius: 'var(--radius)',
                  color: pathname === l.to ? 'var(--purple)' : 'var(--gray-700)',
                  background: pathname === l.to ? '#faf5ff' : 'transparent',
                  fontWeight: pathname === l.to ? 600 : 400,
                  fontSize: '.9375rem',
                }}>
                {l.label}
              </Link>
            ))}
            <Link to="/emergency" onClick={() => setOpen(false)} className="btn btn-red mt-2">Emergency</Link>
          </div>
        )}
      </nav>
    </>
  )
}
