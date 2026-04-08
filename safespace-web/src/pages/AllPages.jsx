// ── RESOURCES PAGE ──────────────────────────────────────────────────────────
import { useState } from 'react'
import { Link } from 'react-router-dom'

// RESOURCES
const EM_CONTACTS = [
  { nameKz: 'Үйдегі зорлық-зомбылық желісі', nameEn: 'National Domestic Violence Hotline', num: '150', avail: '24/7', langs: 'Қазақша, Русский, English' },
  { nameKz: 'Әйелдер дағдарыс орталығы', nameEn: "Women's Crisis Center", num: '+7 (727) 292-91-04', avail: '24/7', langs: 'Қазақша, Русский' },
  { nameKz: 'Полиция (Отбасылық зорлық бөлімі)', nameEn: 'Police (Domestic Violence Unit)', num: '102', avail: '24/7', langs: 'Қазақша, Русский, English' },
]
const LEGAL = [
  { titleKz: 'Қазақстандағы құқықтарыңыз', titleEn: 'Understanding Your Rights in Kazakhstan', desc: "Complete guide to women's rights and legal protections", type: 'PDF Guide', icon: '📄' },
  { titleKz: 'Қорғаныс қалай алу керек', titleEn: 'How to File a Restraining Order', desc: 'Step-by-step process and required documents', type: 'Guide', icon: '⚖️' },
  { titleKz: 'Тегін заң көмегі ұйымдары', titleEn: 'Free Legal Aid Organizations', desc: 'List of organizations providing free legal support', type: 'Directory', icon: '📚' },
  { titleKz: 'Неке құқықтары және мәжбүрлі неке', titleEn: 'Marriage Rights & Forced Marriage', desc: 'Your rights regarding marriage choice and cultural pressure', type: 'Article', icon: '💜' },
]
const EDU = [
  { titleKz: 'Зорлық-зомбылықты тану', titleEn: 'Recognizing Abuse: Types and Warning Signs', dur: '8 min read', cat: 'Education', col: '#dc2626', bg: '#fee2e2' },
  { titleKz: 'Қауіпсіздік жоспары құру', titleEn: 'Creating a Safety Plan', dur: '12 min read', cat: 'Safety', col: '#ea580c', bg: '#ffedd5' },
  { titleKz: 'Мәдени дәстүрлер мен құқықтар', titleEn: 'Cultural Traditions vs. Your Rights', dur: '10 min read', cat: 'Culture', col: '#7c3aed', bg: '#ede9fe' },
  { titleKz: 'Әйелдердің қаржылық тәуелсіздігі', titleEn: 'Financial Independence for Women', dur: '15 min read', cat: 'Empowerment', col: '#16a34a', bg: '#dcfce7' },
  { titleKz: 'Психикалық жарақаттан айығу', titleEn: 'Healing from Trauma', dur: '11 min read', cat: 'Mental Health', col: '#2563eb', bg: '#dbeafe' },
]

export function ResourcesPage() {
  const [tab, setTab] = useState('emergency')
  return (
    <div>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg,var(--green),var(--emerald))' }}>
        <div className="container">
          <h1 className="heading-1 text-white">Ресурстар</h1>
          <p className="text-white" style={{ opacity: .85 }}>Resources & Information</p>
        </div>
      </div>
      <div className="container" style={{ padding: '32px 24px', maxWidth: 900, margin: '0 auto' }}>
        <div className="tabs-bar mb-6">
          {['emergency','legal','learn'].map(t => (
            <button key={t} className={`tab-btn ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>
              {t === 'emergency' ? 'Emergency' : t === 'legal' ? 'Legal' : 'Learn'}
            </button>
          ))}
        </div>

        {tab === 'emergency' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="alert alert-red"><span>📞</span><div><strong>Жедел байланыс / Emergency Contacts</strong><p style={{ fontSize: '.875rem', marginTop: 2 }}>If you're in immediate danger, call emergency services</p></div></div>
            {EM_CONTACTS.map((c, i) => (
              <div key={i} className="card card-p">
                <h3 className="heading-3 mb-1">{c.nameKz}</h3>
                <p style={{ color: 'var(--gray-600)', marginBottom: 10, fontSize: '.9rem' }}>{c.nameEn}</p>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ color: 'var(--green)', fontWeight: 700 }}>📞 {c.num}</span>
                </div>
                <p style={{ fontSize: '.875rem', color: 'var(--gray-500)' }}>Available: {c.avail} · Languages: {c.langs}</p>
                <button className="btn btn-green w-full mt-4">📞 Call Now</button>
              </div>
            ))}
          </div>
        )}

        {tab === 'legal' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="alert alert-blue"><span>⚖️</span><div><strong>Your Legal Rights</strong><p style={{ fontSize: '.875rem', marginTop: 2 }}>All resources available in Kazakh, Russian, and English</p></div></div>
            {LEGAL.map((r, i) => (
              <div key={i} className="card card-p flex gap-4">
                <div style={{ width: 52, height: 52, borderRadius: 'var(--radius)', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>{r.icon}</div>
                <div style={{ flex: 1 }}>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="heading-3" style={{ marginBottom: 2 }}>{r.titleKz}</h3>
                      <p style={{ color: 'var(--gray-500)', fontSize: '.9rem' }}>{r.titleEn}</p>
                    </div>
                    <span className="badge badge-outline" style={{ flexShrink: 0 }}>{r.type}</span>
                  </div>
                  <p style={{ color: 'var(--gray-500)', fontSize: '.875rem', marginBottom: 12 }}>{r.desc}</p>
                  <div className="flex gap-2">
                    <button className="btn btn-outline btn-sm">⬇ Download</button>
                    <button className="btn btn-outline btn-sm">↗ Open</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'learn' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="alert alert-purple"><span>📖</span><div><strong>Білім алу / Educational Content</strong><p style={{ fontSize: '.875rem', marginTop: 2 }}>Knowledge is power. Learn about your rights and how to protect yourself.</p></div></div>
            {EDU.map((e, i) => (
              <div key={i} className="card card-p flex gap-4">
                <div style={{ width: 64, height: 64, borderRadius: 'var(--radius)', background: 'linear-gradient(135deg,var(--purple),var(--pink))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', flexShrink: 0 }}>📖</div>
                <div style={{ flex: 1 }}>
                  <h3 className="heading-3" style={{ marginBottom: 2 }}>{e.titleKz}</h3>
                  <p style={{ color: 'var(--gray-500)', fontSize: '.9rem', marginBottom: 8 }}>{e.titleEn}</p>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="badge" style={{ background: e.bg, color: e.col }}>{e.cat}</span>
                    <span style={{ color: 'var(--gray-400)', fontSize: '.8125rem' }}>{e.dur}</span>
                  </div>
                  <button className="btn btn-outline btn-sm w-full">Read Article</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ── SHELTER MAP PAGE ──────────────────────────────────────────────────────────
const SHELTERS_MAP = [
  { id: 1, nameKz: 'Алматы әйелдер дағдарыс орталығы', nameEn: "Almaty Women's Crisis Center", addr: 'Dostyk Ave 125, Almaty', dist: '2.3 km', walk: '28 min', drive: '8 min', phone: '+7 (727) 292-91-04', avail: true, services: ['24/7 Shelter','Legal Aid','Counseling','Children Welcome'], x: 62, y: 28 },
  { id: 2, nameKz: 'Қауіпсіз баспана орталығы', nameEn: 'Safe Haven Center', addr: 'Abay Ave 52, Almaty', dist: '4.7 km', walk: '58 min', drive: '15 min', phone: '+7 (727) 250-15-89', avail: true, services: ['Shelter','Medical','Job Training'], x: 75, y: 44 },
  { id: 3, nameKz: 'Әйелдерге қолдау үйі', nameEn: "Women's Support House", addr: 'Satpaev St 90, Almaty', dist: '6.1 km', walk: '1h 15min', drive: '18 min', phone: '+7 (727) 378-44-22', avail: false, services: ['Shelter','Education','Child Care'], x: 30, y: 60 },
]

export function ShelterMapPage() {
  const [sel, setSel] = useState(1)
  const shelter = SHELTERS_MAP.find(s => s.id === sel)

  return (
    <div>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg,var(--green),var(--emerald))' }}>
        <div className="container">
          <h1 className="heading-1 text-white">Баспаналар картасы</h1>
          <p className="text-white" style={{ opacity: .85 }}>Shelter Map</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 0, minHeight: 600 }}>
        {/* Map */}
        <div className="map-placeholder" style={{ position: 'relative', minHeight: 500, borderRadius: 0 }}>
          {/* Grid lines */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: .15 }} preserveAspectRatio="none">
            {[...Array(10)].map((_,i) => <line key={`h${i}`} x1="0" y1={`${i*12}%`} x2="100%" y2={`${i*12}%`} stroke="#16a34a" strokeWidth="1"/>)}
            {[...Array(10)].map((_,i) => <line key={`v${i}`} x1={`${i*12}%`} y1="0" x2={`${i*12}%`} y2="100%" stroke="#16a34a" strokeWidth="1"/>)}
          </svg>

          {/* You */}
          <div style={{ position: 'absolute', left: '50%', top: '45%', transform: 'translate(-50%,-50%)' }}>
            <div style={{ position: 'relative', width: 16, height: 16 }}>
              <div style={{ position: 'absolute', inset: '-12px', borderRadius: '50%', background: 'rgba(37,99,235,.25)', animation: 'ping 1.5s infinite' }} />
              <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#2563eb', border: '3px solid white', boxShadow: '0 2px 8px rgba(0,0,0,.3)' }} />
            </div>
          </div>

          {/* Pins */}
          {SHELTERS_MAP.map(s => (
            <button key={s.id} onClick={() => setSel(s.id)} style={{
              position: 'absolute', left: `${s.x}%`, top: `${s.y}%`,
              transform: `translate(-50%,-100%) scale(${sel === s.id ? 1.25 : 1})`,
              transition: 'transform .2s', background: 'none', border: 'none', cursor: 'pointer',
            }}>
              <div style={{ position: 'relative' }}>
                <span style={{ fontSize: sel === s.id ? '2.5rem' : '2rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,.3))', color: sel === s.id ? 'var(--green)' : s.avail ? '#dc2626' : '#6b7280' }}>📍</span>
                <div style={{ position: 'absolute', top: -4, right: -6, width: 18, height: 18, borderRadius: '50%', background: sel === s.id ? 'var(--green)' : '#6b7280', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.65rem', color: '#fff', fontWeight: 700 }}>{s.id}</div>
              </div>
            </button>
          ))}

          {/* Legend */}
          <div style={{ position: 'absolute', bottom: 16, left: 16, background: '#fff', borderRadius: 'var(--radius)', padding: '12px 16px', boxShadow: 'var(--shadow)' }}>
            {[{ c: '#2563eb', l: 'Your Location' }, { c: 'var(--green)', l: 'Available' }, { c: '#6b7280', l: 'Full' }].map(i => (
              <div key={i.l} className="flex items-center gap-2 mb-1" style={{ fontSize: '.8125rem' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: i.c, display: 'block', flexShrink: 0 }} />
                {i.l}
              </div>
            ))}
          </div>
        </div>

        {/* Detail panel */}
        {shelter && (
          <div style={{ overflowY: 'auto', maxHeight: 'calc(100vh - var(--nav-h))', background: '#f9fafb', padding: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
              <div style={{ background: shelter.avail ? 'linear-gradient(135deg,var(--green),var(--emerald))' : 'linear-gradient(135deg,#4b5563,#374151)', padding: 16, color: '#fff' }}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 style={{ fontWeight: 700, marginBottom: 4 }}>{shelter.nameKz}</h3>
                    <p style={{ opacity: .85, fontSize: '.9rem' }}>{shelter.nameEn}</p>
                  </div>
                  <span className="badge" style={{ background: '#fff', color: shelter.avail ? 'var(--green)' : '#374151', flexShrink: 0, fontSize: '.75rem' }}>{shelter.avail ? 'Beds Available' : 'Call First'}</span>
                </div>
                <div className="flex items-center gap-1 mt-2" style={{ opacity: .85, fontSize: '.875rem' }}>
                  📍 {shelter.addr}
                </div>
              </div>

              <div style={{ background: '#f0fdf4', padding: '12px 16px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, textAlign: 'center' }}>
                {[{ v: shelter.dist, l: 'Distance' }, { v: shelter.walk, l: 'Walking' }, { v: shelter.drive, l: 'Driving' }].map(i => (
                  <div key={i.l}>
                    <div style={{ fontWeight: 700, color: '#14532d', fontSize: '.9375rem' }}>{i.v}</div>
                    <div style={{ fontSize: '.75rem', color: 'var(--green)' }}>{i.l}</div>
                  </div>
                ))}
              </div>

              <div style={{ background: '#fff', padding: 16 }}>
                <p style={{ fontSize: '.8125rem', color: 'var(--gray-600)', marginBottom: 8 }}>Services:</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {shelter.services.map(s => <span key={s} className="badge badge-green">{s}</span>)}
                </div>
                <div style={{ fontSize: '.875rem', color: 'var(--gray-600)', marginBottom: 4 }}>📞 {shelter.phone}</div>
                <div style={{ fontSize: '.875rem', color: 'var(--gray-600)' }}>🕐 Open 24/7</div>
              </div>
            </div>

            <button className="btn btn-green w-full">🧭 Get Directions</button>
            <div className="flex gap-3">
              <button className="btn btn-outline flex-1">📞 Call</button>
              <Link to="/emergency" className="btn btn-outline flex-1">🔑 QR Entry</Link>
            </div>

            <h3 className="heading-3">Other Shelters</h3>
            {SHELTERS_MAP.filter(s => s.id !== sel).map(s => (
              <button key={s.id} onClick={() => setSel(s.id)} style={{ background: '#fff', borderRadius: 'var(--radius)', padding: '12px 16px', border: 'none', cursor: 'pointer', textAlign: 'left', boxShadow: 'var(--shadow-sm)', width: '100%' }}>
                <div className="flex items-center gap-3">
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: s.avail ? '#dcfce7' : '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🛡</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '.875rem', color: 'var(--gray-900)' }}>{s.nameKz}</div>
                    <div style={{ fontSize: '.8125rem', color: 'var(--gray-500)' }}>{s.dist} away</div>
                  </div>
                  <span>›</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ── SAFETY PLAN PAGE ──────────────────────────────────────────────────────────
const CHECKLIST = [
  { id: 1, text: 'Pack emergency bag with essentials', done: false },
  { id: 2, text: 'Save copies of important documents', done: true },
  { id: 3, text: 'Identify safe places to go', done: false },
  { id: 4, text: 'Tell trusted friend about situation', done: false },
  { id: 5, text: 'Memorize emergency contact numbers', done: false },
  { id: 6, text: 'Open separate bank account', done: false },
]
const BAG_ITEMS = ['Documents', 'Medicines', 'Money', 'Phone charger', 'Clothes', 'Keys', 'Photos', 'Jewelry']
const DOCS = ['Identity Card (ЖСН)', 'Birth Certificates', 'Marriage Certificate', 'Property Documents', 'Bank Information', 'Medical Records']

export function SafetyPlanPage() {
  const [items, setItems] = useState(CHECKLIST)
  const done = items.filter(i => i.done).length
  const pct = Math.round(done / items.length * 100)

  const toggle = id => setItems(p => p.map(i => i.id === id ? { ...i, done: !i.done } : i))

  return (
    <div>
      <div style={{ background: 'linear-gradient(135deg,var(--orange),var(--amber))', padding: '40px 0 60px', color: '#fff' }}>
        <div className="container">
          <h1 className="heading-1 text-white">Қауіпсіздік жоспары</h1>
          <p style={{ opacity: .85, marginBottom: 20 }}>Safety Plan</p>
          <div style={{ maxWidth: 500, background: 'rgba(255,255,255,.15)', borderRadius: 'var(--radius-lg)', padding: 20, backdropFilter: 'blur(8px)' }}>
            <div className="flex justify-between mb-2"><span style={{ fontWeight: 600 }}>Plan Completion</span><span style={{ fontWeight: 700 }}>{pct}%</span></div>
            <div className="progress-track"><div className="progress-fill" style={{ width: `${pct}%`, background: '#fff' }} /></div>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '32px 24px', maxWidth: 800, margin: '0 auto', transform: 'translateY(-20px)' }}>
        {/* AI suggestions */}
        <div className="card card-p mb-6" style={{ borderLeft: '4px solid var(--purple)' }}>
          <div className="flex items-center gap-2 mb-3">
            <span>✨</span>
            <h3 className="heading-3" style={{ color: 'var(--purple)' }}>AI Жеке кеңестер / AI Suggestions</h3>
          </div>
          {['Based on your situation, consider having cash saved separately', 'Remember to clear browser history after using this app', 'In Kazakh culture, trusted elder women (апалар) can be powerful allies'].map((s, i) => (
            <div key={i} className="flex items-start gap-2 mb-2">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--purple)', display: 'block', marginTop: 8, flexShrink: 0 }} />
              <p style={{ color: 'var(--gray-700)', fontSize: '.9375rem' }}>{s}</p>
            </div>
          ))}
        </div>

        {/* Checklist */}
        <h2 className="heading-2 mb-4">Тексеру тізімі / Safety Checklist</h2>
        <div className="card mb-6">
          {items.map((item, i) => (
            <div key={item.id}>
              <div className="card-p" style={{ paddingTop: i === 0 ? 16 : 12, paddingBottom: 12 }}>
                <label className="checkbox-wrap">
                  <div className={`checkbox ${item.done ? 'checked' : ''}`} onClick={() => toggle(item.id)}>
                    {item.done && <span style={{ color: '#fff', fontSize: '.75rem' }}>✓</span>}
                  </div>
                  <span style={{ fontSize: '.9375rem', color: item.done ? 'var(--gray-400)' : 'var(--gray-900)', textDecoration: item.done ? 'line-through' : 'none', cursor: 'pointer' }} onClick={() => toggle(item.id)}>
                    {item.text}
                  </span>
                </label>
              </div>
              {i < items.length - 1 && <div className="divider" />}
            </div>
          ))}
          <div style={{ padding: 16 }}>
            <button className="btn btn-outline w-full">+ Add Custom Item</button>
          </div>
        </div>

        {/* Emergency bag */}
        <h2 className="heading-2 mb-4">Жедел сөмке / Emergency Bag</h2>
        <div className="card card-p mb-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10, marginBottom: 16 }}>
            {BAG_ITEMS.map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', background: '#fff7ed', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--orange)', display: 'block', flexShrink: 0 }} />
                <span style={{ fontSize: '.9rem', color: 'var(--gray-700)' }}>{b}</span>
              </div>
            ))}
          </div>
          <div className="alert alert-orange"><span>🛡</span><span style={{ fontSize: '.875rem' }}>Keep this bag hidden in a safe, accessible place</span></div>
        </div>

        {/* Documents */}
        <h2 className="heading-2 mb-4">Маңызды құжаттар / Documents</h2>
        <div className="card mb-6">
          {DOCS.map((d, i) => (
            <div key={d}>
              <div style={{ padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '.9375rem', color: 'var(--gray-700)' }}>{d}</span>
                <span className="badge badge-outline">Save copy</span>
              </div>
              {i < DOCS.length - 1 && <div className="divider" />}
            </div>
          ))}
          <div style={{ padding: '12px 20px' }}>
            <div className="alert alert-blue"><span>💼</span><span style={{ fontSize: '.875rem' }}>Store digital copies in secure cloud storage</span></div>
          </div>
        </div>

        {/* Cultural notes */}
        <div style={{ background: 'linear-gradient(135deg,#faf5ff,#fdf2f8)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
          <div className="flex items-center gap-2 mb-3"><span>💜</span><h3 className="heading-3" style={{ color: 'var(--purple)' }}>Мәдени ерекшеліктер / Cultural Notes</h3></div>
          {['In Kazakh culture, extended family can be both support and challenge', 'Consider trusted elder women (апалар) who understand your situation', "Know that choosing safety doesn't mean dishonoring your culture", '"Өз жаныңды құтқар" — Save yourself first'].map((n, i) => (
            <p key={i} style={{ color: '#6d28d9', marginBottom: 6, fontSize: '.9375rem' }}>• {n}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── PRIVACY PAGE ──────────────────────────────────────────────────────────────
const SETTINGS = [
  { id: 'quickExit', icon: '⚠️', title: 'Жедел шығу / Quick Exit', desc: 'Press Escape key 3 times to exit and clear browser history', color: '#dc2626', bg: '#fee2e2' },
  { id: 'disguise', icon: '👁', title: 'Жасыру режимі / Disguise Mode', desc: 'Website appears as a weather or news site in browser history', color: '#7c3aed', bg: '#ede9fe' },
  { id: 'anon', icon: '🛡', title: 'Анонимді режим / Anonymous Mode', desc: 'Hide your identity in community posts', color: '#16a34a', bg: '#dcfce7' },
  { id: 'autoDelete', icon: '🗑', title: 'Тарихты жою / Auto-Delete History', desc: 'Automatically clear browsing and chat history after 24 hours', color: '#ea580c', bg: '#ffedd5' },
]

export function PrivacyPage() {
  const [s, setS] = useState({ quickExit: true, disguise: false, anon: true, autoDelete: true })

  return (
    <div>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg,var(--purple),var(--blue))' }}>
        <div className="container">
          <h1 className="heading-1 text-white">Құпиялылық</h1>
          <p style={{ color: 'rgba(255,255,255,.85)' }}>Privacy & Security</p>
        </div>
      </div>

      <div className="container" style={{ padding: '32px 24px', maxWidth: 800, margin: '0 auto' }}>
        <div className="alert alert-red mb-6">
          <span>🛡</span>
          <div>
            <strong>Қауіпсіздік кеңесі / Safety Tip:</strong>
            <p style={{ fontSize: '.875rem', marginTop: 4 }}>Enable Quick Exit to immediately leave the site if someone approaches. Your safety is the priority.</p>
          </div>
        </div>

        <h2 className="heading-2 mb-4">Қауіпсіздік мүмкіндіктері / Security Features</h2>
        <div className="card mb-6">
          {SETTINGS.map((f, i) => (
            <div key={f.id}>
              <div style={{ padding: '20px 24px' }}>
                <div className="flex items-start gap-4">
                  <div style={{ width: 44, height: 44, borderRadius: 'var(--radius)', background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0 }}>{f.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, color: 'var(--gray-900)', marginBottom: 2 }}>{f.title}</div>
                    <p style={{ fontSize: '.875rem', color: 'var(--gray-500)' }}>{f.desc}</p>
                  </div>
                  <label className="toggle" style={{ flexShrink: 0 }}>
                    <input type="checkbox" checked={s[f.id]} onChange={() => setS(p => ({ ...p, [f.id]: !p[f.id] }))} />
                    <span className="toggle-slider" />
                  </label>
                </div>
              </div>
              {i < SETTINGS.length - 1 && <div className="divider" />}
            </div>
          ))}
        </div>

        {/* Data management */}
        <h2 className="heading-2 mb-4">Деректерді басқару / Data Management</h2>
        <div className="card card-p mb-6" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[{ icon: '⬇', label: 'Export My Data', sub: 'Download all your information' }, { icon: '🗑', label: 'Clear All History', sub: 'Delete chat and activity history' }].map(b => (
            <button key={b.label} className="btn btn-outline" style={{ justifyContent: 'flex-start', gap: 12 }}>
              <span style={{ fontSize: '1.1rem' }}>{b.icon}</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 600 }}>{b.label}</div>
                <div style={{ fontSize: '.8125rem', color: 'var(--gray-500)' }}>{b.sub}</div>
              </div>
            </button>
          ))}
          <div className="divider" />
          <button className="btn btn-outline" style={{ justifyContent: 'flex-start', gap: 12, borderColor: '#fca5a5' }}>
            <span style={{ fontSize: '1.1rem' }}>🗑</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 600, color: 'var(--red)' }}>Delete Account</div>
              <div style={{ fontSize: '.8125rem', color: 'var(--red)' }}>Permanently remove all data</div>
            </div>
          </button>
        </div>

        {/* Guarantee */}
        <div className="card card-p">
          <h3 className="heading-3 mb-4">Құпиялылық кепілдігі / Privacy Guarantee</h3>
          {['End-to-end encryption for all messages', 'No data stored on external servers', 'Anonymous usage — no personal information required', 'Compliant with Kazakhstan privacy laws'].map((t, i) => (
            <div key={i} className="flex items-start gap-3 mb-3">
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--purple)', display: 'block', marginTop: 8, flexShrink: 0 }} />
              <p style={{ fontSize: '.9375rem', color: 'var(--gray-700)' }}>{t}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── PANIC PAGE ────────────────────────────────────────────────────────────────
export function PanicPage() {
  const [activated, setActivated] = useState(false)
  const [clicks, setClicks] = useState(0)
  const [calling, setCalling] = useState(false)
  const [locShared, setLocShared] = useState(false)
  const [countdown, setCountdown] = useState(5)

  const activate = () => {
    setActivated(true)
    setCountdown(5)
    const timer = setInterval(() => {
      setCountdown(c => {
        if (c <= 1) { clearInterval(timer); setCalling(true); setTimeout(() => setLocShared(true), 1500); return 0; }
        return c - 1
      })
    }, 1000)
  }

  const cancel = () => { setActivated(false); setClicks(0); setCalling(false); setLocShared(false); setCountdown(5) }

  const handleTest = () => {
    const n = clicks + 1
    setClicks(n)
    if (n >= 3) activate()
    else setTimeout(() => setClicks(0), 2000)
  }

  return (
    <div>
      <div className="page-hero" style={{ background: activated ? 'linear-gradient(135deg,#b91c1c,#dc2626)' : 'linear-gradient(135deg,var(--red),var(--orange))' }}>
        <div className="container">
          <h1 className="heading-1 text-white">Дабыл режимі</h1>
          <p style={{ color: 'rgba(255,255,255,.85)' }}>Panic Mode</p>
        </div>
      </div>

      <div className="container-sm" style={{ padding: '32px 24px' }}>
        {!activated ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="card card-p" style={{ background: 'linear-gradient(135deg,#fef2f2,#fff7ed)', textAlign: 'center' }}>
              <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '2rem' }}>📱</div>
              <h2 className="heading-2 mb-2" style={{ color: '#7f1d1d' }}>Shake to Activate</h2>
              <p style={{ color: '#991b1b', marginBottom: 20 }}>Телефонды 3 рет шайқаңыз / Click the button 3 times to test</p>
              {clicks > 0 && (
                <div className="flex justify-center gap-3 mb-4">
                  {[1,2,3].map(n => (
                    <div key={n} style={{ width: 48, height: 48, borderRadius: '50%', background: n <= clicks ? 'var(--red)' : '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: n <= clicks ? '#fff' : '#9ca3af', transition: 'all .2s' }}>{n}</div>
                  ))}
                </div>
              )}
            </div>

            {/* How it works */}
            <div className="card card-p">
              <h3 className="heading-3 mb-4">🛡 Қалай жұмыс істейді / How It Works</h3>
              {[['Shake Detection','Triple-shake or triple-click activates panic mode'],['5-Second Countdown','Cancel within 5 seconds if accidental'],['Auto-Dial Hotline','Automatically calls emergency hotline 150'],['Location Sharing','Sends GPS location to trusted contacts'],['Silent Mode','No sound — stays discreet']].map(([t, d], i) => (
                <div key={t} className="flex gap-3 mb-4">
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--red)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.75rem', fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{i+1}</div>
                  <div><div style={{ fontWeight: 600, marginBottom: 2 }}>{t}</div><p style={{ fontSize: '.875rem', color: 'var(--gray-500)' }}>{d}</p></div>
                </div>
              ))}
            </div>

            <button className="btn btn-red btn-lg w-full" onClick={handleTest}>
              🚨 Test Panic Mode (Click 3×)
            </button>

            <div className="card card-p">
              <h3 className="heading-3 mb-3">Will Contact:</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ background: '#fef2f2', borderRadius: 'var(--radius)', padding: '12px 16px', display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span>📞</span>
                  <div><div style={{ fontWeight: 600, color: '#7f1d1d' }}>Emergency Hotline 150</div><div style={{ fontSize: '.8125rem', color: 'var(--red)' }}>24/7 Support</div></div>
                </div>
                <div style={{ background: '#eff6ff', borderRadius: 'var(--radius)', padding: '12px 16px', display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span>📍</span>
                  <div><div style={{ fontWeight: 600, color: '#1e40af' }}>Trusted Contact</div><div style={{ fontSize: '.8125rem', color: 'var(--blue)' }}>Gets your location via SMS</div></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ background: 'linear-gradient(135deg,#fee2e2,#fff7ed)', borderRadius: 'var(--radius-xl)', padding: 32, border: '3px solid var(--red)', textAlign: 'center' }}>
              <div style={{ width: 96, height: 96, borderRadius: '50%', background: 'var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '2.5rem', animation: 'pulse 1.5s infinite' }}>🚨</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#7f1d1d', fontSize: '1.5rem', marginBottom: 8 }}>PANIC MODE ACTIVATED</h2>
              <p style={{ color: '#991b1b', marginBottom: 20 }}>Дабыл режимі қосылды</p>
              {!calling ? (
                <>
                  <p style={{ fontWeight: 700, color: '#7f1d1d', marginBottom: 12 }}>Calling in {countdown} seconds...</p>
                  <div className="progress-track mb-4" style={{ maxWidth: 300, margin: '0 auto 16px' }}>
                    <div className="progress-fill" style={{ width: `${(5-countdown)/5*100}%`, background: 'var(--red)' }} />
                  </div>
                  <button className="btn btn-outline w-full" style={{ borderColor: 'var(--red)', color: 'var(--red)' }} onClick={cancel}>Cancel (Press to Stop)</button>
                </>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ background: '#fff', borderRadius: 'var(--radius)', padding: 16 }}>
                    <div className="flex items-center gap-3 justify-center mb-2">
                      <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', animation: 'pulse 1s infinite' }}>📞</div>
                      <div style={{ textAlign: 'left' }}>
                        <div style={{ fontWeight: 700, color: '#14532d' }}>Calling Emergency Hotline</div>
                        <div style={{ fontSize: '.875rem', color: 'var(--green)' }}>150 — Connecting...</div>
                      </div>
                    </div>
                  </div>
                  {locShared && (
                    <div className="alert alert-green">
                      <span>✅</span><span>Location shared with trusted contacts</span>
                    </div>
                  )}
                  <button className="btn btn-outline w-full" onClick={cancel}>End Panic Mode</button>
                </div>
              )}
            </div>

            <div className="alert alert-blue">
              <span>🔊</span>
              <div>
                <strong>When Connected:</strong>
                <ul style={{ marginTop: 6, fontSize: '.875rem', display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <li>• Stay on the line if safe to do so</li>
                  <li>• Operator speaks Kazakh, Russian & English</li>
                  <li>• Help is being dispatched to your location</li>
                  <li>• If you can't speak, stay on the line — they'll send help</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="alert alert-purple mt-6">
          <span>🔒</span>
          <div>
            <strong>Құпиялылық / Privacy:</strong>
            <p style={{ fontSize: '.875rem', marginTop: 4 }}>Panic mode activation is not logged. No record is kept. Your safety is the only priority.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
