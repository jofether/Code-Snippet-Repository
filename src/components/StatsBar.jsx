export function StatsBar({ snippets }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      <div className="glow" style={{ 
        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.05))',
        border: '1px solid rgba(6, 182, 212, 0.3)',
        padding: '20px',
        borderRadius: '16px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '10px', fontWeight: '700', color: '#06b6d4', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Snippets</div>
        <div className="gradient-text" style={{ fontSize: '42px', fontWeight: '900', marginBottom: '4px' }}>{snippets.length}</div>
        <div style={{ color: '#64748b', fontSize: '11px' }}>Ready to use</div>
      </div>
      <div className="glow" style={{ 
        background: 'linear-gradient(135deg, rgba(147, 112, 219, 0.1), rgba(168, 85, 247, 0.05))',
        border: '1px solid rgba(147, 112, 219, 0.3)',
        padding: '20px',
        borderRadius: '16px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '10px', fontWeight: '700', color: '#a78bfa', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Languages</div>
        <div className="gradient-text" style={{ fontSize: '42px', fontWeight: '900', marginBottom: '4px' }}>3</div>
        <div style={{ color: '#64748b', fontSize: '11px' }}>JavaScript, React</div>
      </div>
      <div className="glow" style={{ 
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 197, 94, 0.05))',
        border: '1px solid rgba(16, 185, 129, 0.3)',
        padding: '20px',
        borderRadius: '16px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '10px', fontWeight: '700', color: '#10b981', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Views</div>
        <div className="gradient-text" style={{ fontSize: '42px', fontWeight: '900', marginBottom: '4px' }}>24.5K</div>
        <div style={{ color: '#64748b', fontSize: '11px' }}>Community views</div>
      </div>
      <div className="glow" style={{ 
        background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.05))',
        border: '1px solid rgba(236, 72, 153, 0.3)',
        padding: '20px',
        borderRadius: '16px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '10px', fontWeight: '700', color: '#ec4899', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Rating</div>
        <div className="gradient-text" style={{ fontSize: '42px', fontWeight: '900', marginBottom: '4px' }}>4.8★</div>
        <div style={{ color: '#64748b', fontSize: '11px' }}>from {snippets.length} snippets</div>
      </div>
    </div>
  );
}
