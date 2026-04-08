import { useState } from 'react'

const SERVICES = [
  { nameKz: 'Полиция жедел қызметі', nameEn: 'Police Emergency', num: '102', desc: 'For immediate danger or ongoing violence', avail: '24/7', langs: 'Қазақша, Русский, English', cls: 'service-red' },
  { nameKz: 'Үйдегі зорлық желісі', nameEn: 'Domestic Violence Hotline', num: '150', desc: 'Crisis counseling and immediate support', avail: '24/7', langs: 'Қазақша, Русский', cls: 'service-purple' },
  { nameKz: 'Әйелдер дағдарыс орталығы', nameEn: "Women's Crisis Center", num: '+7 (727) 292-91-04', desc: 'Shelter, legal aid, psychological support', avail: '24/7', langs: 'Қазақша, Русский', cls: 'service-pink' },
  { nameKz: 'Медициналық жедел жәрдем', nameEn: 'Medical Emergency', num: '103', desc: 'For injuries requiring immediate attention', avail: '24/7', langs: 'Қазақша, Русский, English', cls: 'service-blue' },
]

const CONTACTS = [
  { name: 'Айгерім (Best Friend)', phone: '+7 XXX XXX XX XX', rel: 'Friend' },
  { name: 'Апа (Aunt)', phone: '+7 XXX XXX XX XX', rel: 'Family' },
  { name: 'Гүлнар (Colleague)', phone: '+7 XXX XXX XX XX', rel: 'Work' },
]

const SHELTERS = [
  { nameKz: 'Алматы әйелдер орталығы', nameEn: "Almaty Women's Crisis Center", addr: 'Dostyk Ave, Almaty', dist: '2.3 km', beds: 'Available', services: ['Shelter', 'Legal Aid', 'Counseling', 'Children Welcome'] },
  { nameKz: 'Қауіпсіз баспана орталығы', nameEn: 'Safe Haven Center', addr: 'Abay Ave, Almaty', dist: '4.7 km', beds: 'Call to check', services: ['24/7 Shelter', 'Medical', 'Job Training'] },
]

export default function EmergencyPage() {
  const [tab, setTab] = useState('emergency')
  const [active, setActive] = useState(false)

  return (
    <div>
      {/* Header */}
      <div className="page-hero" style={{ background: 'linear-gradient(135deg,var(--red),var(--orange))' }}>
        <div className="container">
          <h1 className="heading-1 text-white">Жедел көмек</h1>
          <p className="text-white" style={{ opacity: .85 }}>Emergency Help</p>
          {active && (
            <div className="card card-p mt-4" style={{ borderLeft: '4px solid var(--red)', maxWidth: 480 }}>
              <div className="flex items-center gap-2">
                <span style={{ animation: 'pulse 2s infinite', fontSize: '1.1rem' }}>🚨</span>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--red)' }}>Emergency mode active</div>
                  <div style={{ fontSize: '.875rem', color: 'var(--gray-600)' }}>Your trusted contacts have been notified</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container" style={{ padding: '32px 24px', maxWidth: 900, margin: '0 auto' }}>
        {/* Tabs */}
        <div className="tabs-bar mb-6">
          {['emergency', 'contacts', 'shelters'].map(t => (
            <button key={t} className={`tab-btn ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>
              {t === 'emergency' ? 'Emergency' : t === 'contacts' ? 'Contacts' : 'Shelters'}
            </button>
          ))}
        </div>

        {/* Emergency tab */}
        {tab === 'emergency' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Activate button */}
            <div style={{ background: 'linear-gradient(135deg,var(--red),#b91c1c)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
              <h2 className="heading-2 text-white mb-2">Жедел белсендіру / Emergency Activation</h2>
              <p className="text-white mb-6" style={{ opacity: .85 }}>This will call emergency services and notify your trusted contacts</p>
              <button className="btn btn-lg w-full" style={{ background: '#fff', color: 'var(--red)', fontWeight: 700, fontSize: '1rem' }}
                onClick={() => setActive(true)}>
                🚨 ACTIVATE EMERGENCY HELP
              </button>
            </div>

            <h2 className="heading-2">Жедел қызметтер / Emergency Services</h2>
            {SERVICES.map(s => (
              <div key={s.num} className={s.cls} style={{ borderRadius: 'var(--radius-lg)', padding: 24, color: '#fff' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', marginBottom: 4 }}>{s.nameKz}</h3>
                <p style={{ opacity: .85, marginBottom: 10, fontSize: '.9375rem' }}>{s.nameEn}</p>
                <p style={{ opacity: .85, marginBottom: 12, fontSize: '.9375rem' }}>{s.desc}</p>
                <div className="flex gap-4 mb-4" style={{ fontSize: '.875rem', opacity: .85 }}>
                  <span>⏰ {s.avail}</span>
                  <span>🌐 {s.langs}</span>
                </div>
                <button className="btn w-full" style={{ background: '#fff', color: '#111', fontWeight: 600 }}>
                  📞 Call {s.num}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Contacts tab */}
        {tab === 'contacts' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="alert alert-blue">
              <span>👥</span>
              <span>These people will be notified if you activate emergency mode</span>
            </div>
            {CONTACTS.map((c, i) => (
              <div key={i} className="card card-p flex items-center gap-4">
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'linear-gradient(135deg,#8b5cf6,#ec4899)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0,
                }}>{c.name[0]}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: 'var(--gray-900)' }}>{c.name}</div>
                  <div style={{ color: 'var(--gray-500)', fontSize: '.875rem' }}>{c.phone}</div>
                  <span className="badge badge-outline mt-1">{c.rel}</span>
                </div>
                <button className="btn btn-outline btn-sm">📞 Call</button>
              </div>
            ))}
            <button className="btn btn-outline w-full">+ Add Trusted Contact</button>
            <div className="alert alert-purple">
              <span>💜</span>
              <div>
                <strong>Мәдени кеңес / Cultural Tip:</strong>
                <p style={{ marginTop: 4, fontSize: '.875rem' }}>Consider adding a trusted elder woman (апа) who understands cultural context and can advocate for you within the family.</p>
              </div>
            </div>
          </div>
        )}

        {/* Shelters tab */}
        {tab === 'shelters' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="alert alert-green">
              <span>📍</span>
              <div>
                <strong>Жақын баспаналар / Nearest Shelters</strong>
                <p style={{ fontSize: '.875rem', marginTop: 2 }}>Safe spaces available 24/7 with no questions asked</p>
              </div>
            </div>
            {SHELTERS.map((s, i) => (
              <div key={i} className="card">
                <div style={{ background: 'linear-gradient(135deg,var(--green),var(--emerald))', padding: '16px 20px', color: '#fff' }}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 style={{ fontWeight: 700, marginBottom: 2 }}>{s.nameKz}</h3>
                      <p style={{ opacity: .85, fontSize: '.9rem' }}>{s.nameEn}</p>
                    </div>
                    <span className="badge" style={{ background: s.beds === 'Available' ? '#fff' : 'rgba(255,255,255,.2)', color: s.beds === 'Available' ? 'var(--green)' : '#fff', flexShrink: 0 }}>{s.beds}</span>
                  </div>
                  <div className="flex gap-4 mt-3" style={{ opacity: .85, fontSize: '.875rem' }}>
                    <span>📍 {s.dist}</span>
                    <span>{s.addr}</span>
                  </div>
                </div>
                <div className="card-p">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {s.services.map(sv => <span key={sv} className="badge badge-green">{sv}</span>)}
                  </div>
                  <div className="flex gap-3">
                    <button className="btn btn-outline flex-1">📞 Call</button>
                    <button className="btn btn-green flex-1">🧭 Directions</button>
                  </div>
                </div>
              </div>
            ))}
            <div className="alert alert-orange">
              <span>⚠️</span>
              <div>
                <strong>Маңызды ақпарат / Important:</strong>
                <ul style={{ marginTop: 6, fontSize: '.875rem', display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {['You can arrive without prior notice','No documents required for emergency admission','Children are welcome','Free services available','Қазақша қызмет көрсетіледі'].map(t => <li key={t}>• {t}</li>)}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
