import { useState } from 'react'

const POSTS = [
  { id: 1, author: 'Аноним 🌸', time: '2 сағат бұрын', content: 'Бүгін үлкен қадам жасадым — психологпен алғаш рет кездестім. Бөлісу өте қиын болды, бірақ жеңілдеген сияқты. Сіздер жалғыз емессіздер.\n\nToday I took a big step — met with a psychologist for the first time. It was hard to share, but I feel lighter. You are not alone.', category: 'Sharing', likes: 24, replies: 8, anonymous: true },
  { id: 2, author: 'Күншуақ', time: '5 hours ago', content: 'For anyone dealing with family pressure about marriage — remember that your life is yours. In our culture, they say "қыз — қонақ", but you are not just a guest in life. You are the author of your story. Stay strong! 💪', category: 'Support', likes: 45, replies: 15, anonymous: false },
  { id: 3, author: 'Anonymous User', time: '1 день назад', content: 'Спасибо всем за поддержку вчера. Ваши слова помогли мне найти силы обратиться за помощью. Сегодня я подала заявление. Это страшно, но я знаю, что делаю правильно.', category: 'Victory', likes: 67, replies: 23, anonymous: true },
  { id: 4, author: 'Әсем', time: '2 days ago', content: 'Resource sharing: I found a legal aid organization that helps women for free. They understand cultural sensitivities and can provide advice in Kazakh, Russian, and English. Reach out if you need the contact! 🤝', category: 'Resources', likes: 89, replies: 31, anonymous: false },
  { id: 5, author: 'Аноним 🦋', time: '3 күн бұрын', content: 'Балаларыммен кеткенімді ойлап отырмын. Қорқамын, бірақ білемін бұл керек. Біреу осындай жағдайдан өткен бе? Кеңес керек.\n\nThinking of leaving with my children. Scared but I know it\'s necessary. Has anyone been through this? Need advice.', category: 'Advice', likes: 34, replies: 42, anonymous: true },
]

const CAT_COLORS = {
  Sharing: 'badge-purple', Support: 'badge-blue', Victory: 'badge-green',
  Resources: 'badge-orange', Advice: 'badge-red',
}

export default function CommunityPage() {
  const [tab, setTab] = useState('all')
  const [liked, setLiked] = useState(new Set())
  const [showForm, setShowForm] = useState(false)
  const [newText, setNewText] = useState('')

  const posts = tab === 'trending' ? [...POSTS].sort((a,b) => b.likes - a.likes) : POSTS

  return (
    <div>
      {/* Header */}
      <div className="page-hero" style={{ background: 'linear-gradient(135deg,var(--blue),var(--cyan))' }}>
        <div className="container">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="heading-1 text-white">Қауымдастық</h1>
              <p className="text-white" style={{ opacity: .85 }}>Community Support</p>
            </div>
            <button className="btn" style={{ background: '#fff', color: 'var(--blue)' }} onClick={() => setShowForm(true)}>
              + Share Anonymously
            </button>
          </div>
          <div className="flex gap-2 mt-6">
            {['all','trending'].map(t => (
              <button key={t} className="btn btn-sm" onClick={() => setTab(t)} style={{
                background: tab === t ? '#fff' : 'rgba(255,255,255,.15)',
                color: tab === t ? 'var(--blue)' : '#fff',
                border: 'none', backdropFilter: 'blur(8px)',
              }}>
                {t === 'all' ? '👥 Барлығы / All' : '📈 Танымал / Trending'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '32px 24px', maxWidth: 800, margin: '0 auto' }}>
        {/* Guidelines */}
        <div className="alert alert-purple mb-6">
          <span>💜</span>
          <span>Біздің қауымдастық — қауіпсіз кеңістік. Be kind, supportive, and respectful.</span>
        </div>

        {/* New post form */}
        {showForm && (
          <div className="card card-p mb-6" style={{ border: '2px solid #ddd6fe' }}>
            <h3 className="heading-3 mb-4">Share Anonymously</h3>
            <div className="alert alert-blue mb-4">
              <span>🔒</span>
              <span>Your identity is protected. Share safely.</span>
            </div>
            <textarea className="input" rows={5} value={newText} onChange={e => setNewText(e.target.value)}
              placeholder="Share your story, ask for advice, or offer support..." />
            <div className="flex gap-3 mt-4 justify-end">
              <button className="btn btn-outline" onClick={() => setShowForm(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={() => { setShowForm(false); setNewText('') }}>Post</button>
            </div>
          </div>
        )}

        {/* Posts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {posts.map(p => (
            <div key={p.id} className="card card-p">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div style={{
                    width: 42, height: 42, borderRadius: '50%',
                    background: 'linear-gradient(135deg,#8b5cf6,#ec4899)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem', color: '#fff', fontWeight: 700,
                  }}>{p.anonymous ? '🔒' : p.author[0]}</div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--gray-900)', fontSize: '.9375rem' }}>{p.author}</div>
                    <div style={{ fontSize: '.8125rem', color: 'var(--gray-400)' }}>{p.time}</div>
                  </div>
                </div>
                <span className={`badge ${CAT_COLORS[p.category] || 'badge-outline'}`}>{p.category}</span>
              </div>
              {/* Content */}
              <p style={{ color: 'var(--gray-700)', lineHeight: 1.7, whiteSpace: 'pre-line', fontSize: '.9375rem', marginBottom: 16 }}>{p.content}</p>
              {/* Actions */}
              <div style={{ borderTop: '1px solid var(--gray-100)', paddingTop: 12, display: 'flex', gap: 20 }}>
                <button onClick={() => setLiked(s => { const n = new Set(s); n.has(p.id) ? n.delete(p.id) : n.add(p.id); return n; })}
                  style={{ display: 'flex', alignItems: 'center', gap: 6, color: liked.has(p.id) ? 'var(--pink)' : 'var(--gray-500)', fontWeight: 600, fontSize: '.9rem', background: 'none', border: 'none', cursor: 'pointer' }}>
                  <span>{liked.has(p.id) ? '❤️' : '🤍'}</span>
                  {p.likes + (liked.has(p.id) ? 1 : 0)}
                </button>
                <button style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--gray-500)', fontWeight: 600, fontSize: '.9rem', background: 'none', border: 'none', cursor: 'pointer' }}>
                  💬 {p.replies}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Safety notice */}
        <div className="flex items-center gap-2 mt-6" style={{ color: 'var(--gray-500)', fontSize: '.875rem' }}>
          <span>🔒</span>
          All posts are monitored for safety. Report harmful content anytime.
        </div>
      </div>
    </div>
  )
}
