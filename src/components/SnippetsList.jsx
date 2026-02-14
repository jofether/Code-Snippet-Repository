function getDifficultyColor(difficulty) {
  switch(difficulty) {
    case 'beginner': return ['rgba(34, 197, 94, 0.1)', 'rgba(34, 197, 94, 0.3)', '#22c55e'];
    case 'intermediate': return ['rgba(251, 191, 36, 0.1)', 'rgba(251, 191, 36, 0.3)', '#fbbf24'];
    case 'advanced': return ['rgba(239, 68, 68, 0.1)', 'rgba(239, 68, 68, 0.3)', '#ef4444'];
    default: return ['rgba(148, 163, 184, 0.1)', 'rgba(148, 163, 184, 0.3)', '#94a3b8'];
  }
}

export function SnippetsList({ filteredSnippets, selectedSnippet, onSelectSnippet }) {
  return (
    <div className="lg:col-span-2">
      <div style={{ color: '#94a3b8', fontSize: '12px', fontWeight: '600', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
        📋 {filteredSnippets.length} Snippet{filteredSnippets.length !== 1 ? 's' : ''}
      </div>
      <div className="space-y-2 max-h-[800px] overflow-y-auto pr-2">
        {filteredSnippets.map((snippet, idx) => {
          const [bgLight, bgHeavy, color] = getDifficultyColor(snippet.difficulty);
          return (
            <div
              key={snippet.id}
              onClick={() => onSelectSnippet(idx)}
              className="snippet-card"
              style={{
                background: selectedSnippet === idx
                  ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.1))'
                  : 'linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.6))',
                border: selectedSnippet === idx
                  ? '1px solid rgba(6, 182, 212, 0.8)'
                  : '1px solid rgba(148, 163, 184, 0.2)',
                padding: '14px 16px',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                <div style={{ color: selectedSnippet === idx ? '#06b6d4' : '#e2e8f0', fontSize: '14px', fontWeight: '600', flex: 1 }}>
                  {snippet.name}
                </div>
                <div style={{
                  fontSize: '10px',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  background: bgLight,
                  color: color,
                  border: `1px solid ${color}40`,
                  fontWeight: '600'
                }}>
                  {snippet.difficulty}
                </div>
              </div>
              <div style={{ color: '#64748b', fontSize: '12px', marginBottom: '6px', lineHeight: '1.4' }}>
                {snippet.description}
              </div>
              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '6px' }}>
                {snippet.tags.slice(0, 2).map(tag => (
                  <span key={tag} style={{ 
                    fontSize: '10px',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    background: 'rgba(167, 139, 250, 0.2)',
                    color: '#c4b5fd',
                    border: '1px solid rgba(167, 139, 250, 0.3)'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748b', paddingTop: '6px', borderTop: '1px solid rgba(148, 163, 184, 0.1)' }}>
                <span>👁️ {snippet.views}</span>
                <span>⭐ {snippet.rating}</span>
                <span>{snippet.lines.length} lines</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
