import { Link } from 'react-router-dom'

const features = [
  { icon: '🤖', title: 'AI Assistant (Altyn)', titleKz: 'AI Көмекшісі', desc: 'Chat with Altyn, our bilingual AI trained to support you with empathy, legal guidance, and cultural awareness.', color: '#7C3AED', bg: '#f5f3ff', link: '/chat' },
  { icon: '👥', title: 'Community Support', titleKz: 'Қауымдастық', desc: 'Connect anonymously with others who understand. Share, ask for advice, and find strength in community.', color: '#2563EB', bg: '#eff6ff', link: '/community' },
  { icon: '📍', title: 'Shelter Map', titleKz: 'Баспана картасы', desc: 'Find nearby safe shelters with real-time availability, distance, and QR entry codes — no questions asked.', color: '#16A34A', bg: '#f0fdf4', link: '/shelter-map' },
  { icon: '📋', title: 'Safety Plan', titleKz: 'Қауіпсіздік жоспары', desc: 'Build a personalized safety plan with AI guidance tailored to Kazakh cultural context.', color: '#EA580C', bg: '#fff7ed', link: '/safety-plan' },
  { icon: '🚨', title: 'Emergency Network', titleKz: 'Жедел желі', desc: 'One-tap access to emergency services, trusted contacts, and panic mode with location sharing.', color: '#DC2626', bg: '#fef2f2', link: '/emergency' },
  { icon: '🔒', title: 'Privacy First', titleKz: 'Құпиялылық', desc: 'Quick-exit mode, disguise app, biometric lock, and auto-delete history — your security is our priority.', color: '#7C3AED', bg: '#f5f3ff', link: '/privacy' },
]

const stats = [
  { value: '24/7', label: 'Available', sub: 'Always here' },
  { value: '100%', label: 'Anonymous', sub: 'No personal data' },
  { value: '3+', label: 'Languages', sub: 'Kazakh, Russian, English' },
  { value: '0', label: 'Ads', sub: 'Never monetized' },
]

const steps = [
  { num: '01', title: 'Open SafeSpace', desc: 'Access the platform anonymously — no account, no personal information required.' },
  { num: '02', title: 'Choose your need', desc: 'Talk to AI, find a shelter, access legal resources, or connect with community.' },
  { num: '03', title: 'Get support', desc: 'Receive guidance tailored to your situation in Kazakh, Russian, or English.' },
  { num: '04', title: 'Take action safely', desc: 'Use emergency features, safety plans, and shelter QR codes when ready.' },
]

const testimonials = [
  { text: '"SafeSpace helped me understand my rights and find a shelter near me. I finally felt like I had control over my situation."', lang: 'en', emoji: '🌸' },
  { text: '"Altyn AI-мен сөйлескенде өзімді жалғыз сезінбедім. Ол менің жағдайымды түсінді."', lang: 'kz', emoji: '💜' },
  { text: '"Благодаря этому приложению я узнала о своих правах и смогла обратиться за помощью."', lang: 'ru', emoji: '🦋' },
]

export default function LandingPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(135deg, #7C3AED 0%, #DB2777 45%, #2563EB 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradientShift 8s ease infinite',
        padding: '100px 0 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: .06,
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
        {/* Blobs */}
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(255,255,255,.06)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-30%', left: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,.04)', pointerEvents: 'none' }} />

        <div className="container relative">
          <div style={{ maxWidth: 680 }}>
            <div className="flex items-center gap-2 mb-6 anim-fade-up">
              <span className="badge" style={{ background: 'rgba(255,255,255,.2)', color: '#fff', backdropFilter: 'blur(8px)' }}>
                🔒 100% Anonymous & Encrypted
              </span>
            </div>
            <h1 className="display-1 text-white anim-fade-up-2" style={{ marginBottom: 20 }}>
              Қауіпсіз кеңістік<br />
              <span style={{ opacity: .85 }}>SafeSpace</span>
            </h1>
            <p className="body-lg text-white anim-fade-up-3" style={{ opacity: .9, maxWidth: 520, marginBottom: 40 }}>
              A safe, anonymous platform designed to support women in Kazakhstan — AI assistance, emergency resources, and community, all in one place.
            </p>
            <div className="flex flex-wrap gap-3 anim-fade-up-4">
              <Link to="/chat" className="btn btn-lg" style={{
                background: '#fff',
                color: 'var(--purple)',
                fontWeight: 700,
                boxShadow: '0 8px 32px rgba(0,0,0,.2)',
              }}>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
                Talk to Altyn AI
              </Link>
              <Link to="/emergency" className="btn btn-lg" style={{
                background: 'rgba(255,255,255,.15)',
                color: '#fff',
                border: '2px solid rgba(255,255,255,.3)',
                backdropFilter: 'blur(8px)',
              }}>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                Emergency Help
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--gray-200)', padding: '24px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
            {stats.map(s => (
              <div key={s.value} style={{ textAlign: 'center' }}>
                <div className="stat-value grad-text">{s.value}</div>
                <div style={{ fontWeight: 600, color: 'var(--gray-900)', fontSize: '.9375rem' }}>{s.label}</div>
                <div style={{ fontSize: '.8125rem', color: 'var(--gray-500)' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Features ── */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="label text-purple mb-3 block">Everything you need</span>
            <h2 className="display-2" style={{ marginBottom: 12 }}>Your safety toolkit</h2>
            <p className="body-lg text-gray-5" style={{ maxWidth: 520, margin: '0 auto' }}>
              Six integrated tools working together to keep you safe, informed, and connected.
            </p>
          </div>

          <div className="grid-3" style={{ gap: 20 }}>
            {features.map(f => (
              <Link key={f.title} to={f.link} className="card card-hover" style={{ display: 'block' }}>
                <div className="card-p">
                  <div style={{ width: 52, height: 52, borderRadius: 'var(--radius)', background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: 16 }}>
                    {f.icon}
                  </div>
                  <div style={{ marginBottom: 4 }}>
                    <span style={{ fontSize: '.75rem', color: f.color, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em' }}>{f.titleKz}</span>
                  </div>
                  <h3 className="heading-3" style={{ marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: '.9rem', color: 'var(--gray-500)', lineHeight: 1.6 }}>{f.desc}</p>
                  <div className="flex items-center gap-1 mt-4" style={{ color: f.color, fontWeight: 600, fontSize: '.875rem' }}>
                    Open
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container-sm">
          <div className="text-center mb-12">
            <span className="label text-purple mb-3 block">Simple process</span>
            <h2 className="display-2">How SafeSpace works</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {steps.map((s, i) => (
              <div key={s.num} style={{ display: 'flex', gap: 24, paddingBottom: i < steps.length - 1 ? 32 : 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: '50%', flexShrink: 0,
                    background: 'linear-gradient(135deg,var(--purple),var(--pink))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff', fontSize: '1rem',
                    boxShadow: 'var(--shadow-purple)',
                  }}>{s.num}</div>
                  {i < steps.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: 'var(--gray-200)', minHeight: 32, marginTop: 8 }} />
                  )}
                </div>
                <div style={{ paddingTop: 12 }}>
                  <h3 className="heading-3" style={{ marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ color: 'var(--gray-500)', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section" style={{ background: 'linear-gradient(135deg,#faf5ff,#fdf2f8,#eff6ff)' }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="label text-purple mb-3 block">Community voices</span>
            <h2 className="display-2">Stories of strength</h2>
          </div>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <div key={i} className="card card-p">
                <div style={{ fontSize: '2rem', marginBottom: 16 }}>{t.emoji}</div>
                <p style={{ color: 'var(--gray-700)', lineHeight: 1.7, fontStyle: 'italic', fontSize: '.9375rem' }}>{t.text}</p>
                <div className="mt-4">
                  <span className="badge badge-purple">Anonymous</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: 'linear-gradient(135deg,var(--purple) 0%,var(--pink) 50%,var(--blue) 100%)',
        padding: '80px 0',
        textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: .05, backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="container relative">
          <h2 className="display-2 text-white" style={{ marginBottom: 16 }}>You are not alone</h2>
          <p className="body-lg text-white" style={{ opacity: .9, marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>
            Сіз жалғыз емессіз — SafeSpace is here for you, 24 hours a day, 7 days a week.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Link to="/chat" className="btn btn-lg" style={{ background: '#fff', color: 'var(--purple)', fontWeight: 700 }}>
              Start Talking to Altyn
            </Link>
            <Link to="/emergency" className="btn btn-lg" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', border: '2px solid rgba(255,255,255,.3)' }}>
              Emergency Resources
            </Link>
          </div>
          <p className="mt-8 text-white" style={{ opacity: .7, fontSize: '.875rem' }}>
            🔒 No account required · 100% anonymous · Encrypted
          </p>
        </div>
      </section>
    </div>
  )
}
