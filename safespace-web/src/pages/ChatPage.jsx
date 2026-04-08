import { useState, useRef, useEffect } from 'react'

const SUGGESTIONS_INIT = [
  "I need someone to talk to",
  "I'm feeling unsafe",
  "Tell me about my rights",
  "Менің құқықтарым қандай?",
]

function genReply(text, len) {
  const lower = text.toLowerCase()
  if (lower.includes('unsafe') || lower.includes('fear') || lower.includes('danger')) {
    return {
      text: "Сіздің қауіпсіздігіңіз маңызды. Your safety is the top priority.\n\nI'm here to help you right now. You can:\n\n• Access your personal safety plan\n• Contact emergency services (150)\n• Find a safe shelter nearby\n\nRemember: 'Өзіңді қорға' — Protect yourself first. You have every right to be safe.",
      suggestions: ["Show safety plan", "Emergency contacts", "Find shelter"],
    }
  }
  if (lower.includes('right') || lower.includes('rights') || lower.includes('құқықтарым')) {
    return {
      text: "In Kazakhstan, you have important legal rights:\n\n• Right to protection from domestic violence\n• Right to confidentiality when seeking help\n• Right to refuse forced marriage\n• Free legal aid is available\n\n'Әйелдің құрметі - елдің құрметі' — A woman's dignity is the nation's dignity. You deserve respect and full protection under Kazakh law.",
      suggestions: ["Legal resources", "How to report abuse", "Talk to community"],
    }
  }
  if (lower.includes('talk') || lower.includes('listen') || lower.includes('alone')) {
    return {
      text: "Мен тыңдап тұрмын. I'm listening, and I'm here for you.\n\nYou don't have to face this alone. In Kazakh tradition, we say 'Бөлісу - жеңілдету' — sharing lightens the burden.\n\nTake your time. Tell me what's on your mind, and I'll do my best to support you.",
      suggestions: ["I feel overwhelmed", "What options do I have?", "Tell me about shelters"],
    }
  }
  if (lower.includes('shelter') || lower.includes('leave') || lower.includes('go')) {
    return {
      text: "There are safe shelters near you that are available 24/7 with no questions asked.\n\n• Almaty Women's Crisis Center — 2.3 km away\n• Safe Haven Center — 4.7 km away\n\nYou can get a QR entry code that is completely anonymous — shelter staff cannot see your identity. Do you want me to show you the shelter map?",
      suggestions: ["Show shelter map", "Get QR code", "Safety plan first"],
    }
  }
  return {
    text: "Рақмет сізге бөліскеніңізге. Thank you for reaching out.\n\nI'm here to support you in whatever way I can — whether that's talking through your situation, finding resources, or helping you stay safe. How can I help you right now?",
    suggestions: ["Resources", "Safety planning", "Just want to talk"],
  }
}

export default function ChatPage() {
  const [messages, setMessages] = useState([{
    id: 1, isUser: false, isTyping: false,
    text: "Сәлеметсіз бе! Мен Алтын — сіздің AI көмекшіңізбін.\n\nHello! I'm Altyn, your AI assistant. I'm here to listen and support you. Everything you share is encrypted and completely anonymous.\n\nHow are you feeling today?",
    suggestions: SUGGESTIONS_INIT,
  }])
  const [input, setInput] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  function send(text) {
    const msg = (text || input).trim()
    if (!msg) return
    setInput('')
    const id = Date.now()
    setMessages(prev => [...prev, { id, isUser: true, text: msg }])
    setTimeout(() => setMessages(prev => [...prev, { id: id + 1, isUser: false, isTyping: true, text: '' }]), 400)
    setTimeout(() => {
      const reply = genReply(msg, id)
      setMessages(prev => prev.filter(m => !m.isTyping).concat({ id: id + 2, isUser: false, isTyping: false, ...reply }))
    }, 1600)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - var(--nav-h) - 4px)' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg,var(--purple),var(--pink))',
        padding: '20px 32px', color: '#fff', flexShrink: 0,
      }}>
        <div className="container flex items-center gap-4">
          <div style={{
            width: 48, height: 48, borderRadius: '50%',
            background: 'rgba(255,255,255,.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.4rem',
          }}>✨</div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem' }}>
              Алтын AI ✨
            </div>
            <div className="flex items-center gap-2" style={{ opacity: .85, fontSize: '.875rem' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
              Always here for you
            </div>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <span className="badge" style={{ background: 'rgba(255,255,255,.2)', color: '#fff', backdropFilter: 'blur(8px)' }}>
              🔒 Encrypted & Anonymous
            </span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1, overflowY: 'auto', background: 'var(--gray-50)',
        padding: '24px 0',
      }}>
        <div className="container-sm" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {messages.map(m => (
            <div key={m.id}>
              {!m.isUser && (
                <div className="flex items-start gap-3">
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                    background: 'linear-gradient(135deg,var(--purple),var(--pink))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem',
                  }}>✨</div>
                  <div>
                    <div style={{ fontSize: '.75rem', color: 'var(--gray-500)', marginBottom: 6, fontWeight: 600 }}>Altyn</div>
                    <div className="chat-bubble-ai" style={{ borderRadius: '4px 18px 18px 18px' }}>
                      {m.isTyping ? (
                        <div className="flex gap-2 items-center" style={{ padding: '4px 0' }}>
                          {[0, 150, 300].map(d => (
                            <span key={d} style={{
                              width: 8, height: 8, borderRadius: '50%', background: 'var(--gray-400)',
                              display: 'block', animation: `bounce 1s ${d}ms infinite`,
                            }} />
                          ))}
                        </div>
                      ) : (
                        <p style={{ whiteSpace: 'pre-line', lineHeight: 1.7, color: 'var(--gray-900)', fontSize: '.9375rem' }}>{m.text}</p>
                      )}
                    </div>
                    {m.suggestions && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {m.suggestions.map((s, i) => (
                          <button key={i} className="chip chip-purple" onClick={() => send(s)}>{s}</button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
              {m.isUser && (
                <div className="flex justify-end">
                  <div className="chat-bubble-user">
                    <p style={{ whiteSpace: 'pre-line', lineHeight: 1.6, fontSize: '.9375rem' }}>{m.text}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Privacy notice */}
      <div style={{ background: '#faf5ff', borderTop: '1px solid #ede9fe', padding: '10px 32px', flexShrink: 0 }}>
        <div className="container-sm flex items-center gap-2">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="var(--purple)" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959..." />
          </svg>
          <span style={{ fontSize: '.8125rem', color: 'var(--purple)' }}>All conversations are encrypted and anonymous</span>
        </div>
      </div>

      {/* Input */}
      <div style={{ background: '#fff', borderTop: '1px solid var(--gray-200)', padding: '16px 32px', flexShrink: 0 }}>
        <div className="container-sm flex gap-3">
          <input
            className="input flex-1"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send()}
            placeholder="Хабарлама жазыңыз / Type a message..."
          />
          <button className="btn btn-primary" onClick={() => send()} style={{ padding: '12px 20px' }}>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
