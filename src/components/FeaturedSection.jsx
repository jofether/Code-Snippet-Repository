export function FeaturedSection({ snippets, filteredSnippets, onSelectSnippet, onSelectCategory }) {
  return (
    <div style={{ marginTop: '48px', paddingTop: '48px', borderTop: '1px solid rgba(148, 163, 184, 0.1)' }}>
      <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#e2e8f0', marginBottom: '24px' }}>
        🌟 Featured Snippets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {snippets.slice(0, 3).map(snippet => (
          <div key={snippet.id} style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.6))',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            borderRadius: '14px',
            padding: '20px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onClick={() => {
            onSelectSnippet(filteredSnippets.findIndex(s => s.id === snippet.id));
            onSelectCategory(snippet.category);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.6)';
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(6, 182, 212, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.2)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{ fontSize: '20px', marginBottom: '12px' }}>
              {snippet.category === 'react' ? '⚛️' : '💛'}
            </div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#e2e8f0', marginBottom: '8px' }}>
              {snippet.name}
            </h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '12px', lineHeight: '1.5' }}>
              {snippet.description}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#64748b', paddingTop: '12px', borderTop: '1px solid rgba(148, 163, 184, 0.1)' }}>
              <span>⭐ {snippet.rating}</span>
              <span>{snippet.lines.length} lines</span>
              <span>{snippet.language}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
