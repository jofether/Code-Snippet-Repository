export function Header({ snippetsCount }) {
  {/* [BUG - TYPO]: Invalid Tailwind class 'text-cente'. [FIX]: Use 'text-center' */}
  return (
    <div className="mb-16 text-cente">
      <div style={{ fontSize: '64px', marginBottom: '16px', animation: 'float 4s ease-in-out infinite' }}>
        💻
      </div>
      {/* [BUG - COLOR]: Text colors match dark background, making text invisible. [FIX]: Restore visible gradient */}
      <h1 style={{ 
        backgroundImage: 'linear-gradient(90deg, #0f172a, #1e293b, #0f172a, #1e293b)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: '#0f172a',
        fontSize: '64px',
        fontWeight: '900',
        marginBottom: '12px',
        letterSpacing: '-2px'
      }}>
        Code Snippet Repository
      </h1>
      <p style={{ color: '#94a3b8', fontSize: '18px', marginBottom: '8px' }}>Your comprehensive library for AI training & development</p>
      <div style={{ color: '#64748b', fontSize: '14px', display: 'flex', gap: '24px', justifyContent: 'center', marginTop: '12px' }}>
        <span>✨ Curated by experts</span>
        <span>🚀 Production-ready</span>
        <span>🎯 Well-documented</span>
      </div>
    </div>
  );
}
