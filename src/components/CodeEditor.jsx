export function CodeEditor({ currentSnippet, copied, onCopy }) {
  return (
    <div className="lg:col-span-3">
      <div 
        className="code-window rounded-2xl overflow-hidden border"
        style={{ borderColor: 'rgba(148, 163, 184, 0.3)' }}
      >
        {/* Title Bar */}
        <div 
          className="header-bar px-6 py-4 flex items-center justify-between"
          style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.2)' }}
        >
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div style={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%',
              background: '#ef4444',
              boxShadow: '0 0 8px rgba(239, 68, 68, 0.5)',
              cursor: 'pointer',
              flexShrink: 0
            }}></div>
            <div style={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%',
              background: '#eab308',
              boxShadow: '0 0 8px rgba(234, 179, 8, 0.5)',
              cursor: 'pointer',
              flexShrink: 0
            }}></div>
            <div style={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%',
              background: '#22c55e',
              boxShadow: '0 0 8px rgba(34, 197, 94, 0.5)',
              cursor: 'pointer',
              flexShrink: 0
            }}></div>
            <span style={{ color: '#64748b', fontSize: '12px', marginLeft: '16px', fontFamily: 'monospace', fontWeight: '500', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {currentSnippet.name.replace(/\s+/g, '_')}.{'jsx' || 'js'}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '12px', color: '#94a3b8', fontFamily: 'monospace' }}>
            <span>{currentSnippet.language}</span>
          </div>
        </div>

        {/* Code Content */}
        <div className="code-editor p-8 overflow-x-auto max-h-[650px] overflow-y-auto" style={{ fontFamily: "'Fira Code', 'Courier New', monospace", fontSize: '14px', lineHeight: '1.8' }}>
          {currentSnippet.lines.map((line) => (
            <div 
              key={line.num}
              className="line-hover transition-colors py-1 flex group"
            >
              <div 
                style={{ 
                  color: '#64748b',
                  width: '48px',
                  textAlign: 'right',
                  paddingRight: '24px',
                  borderRight: '1px solid rgba(148, 163, 184, 0.2)',
                  userSelect: 'none',
                  fontWeight: '500',
                  flexShrink: 0
                }}
              >
                {line.num}
              </div>
              <div 
                style={{ 
                  color: line.color || '#ffffff',
                  paddingLeft: '24px',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  flex: 1,
                  fontSize: '13px'
                }}
              >
                {line.text}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Bar */}
        <div 
          style={{ 
            background: 'linear-gradient(90deg, #0ea5e9, #06b6d4)',
            color: '#ffffff',
            fontSize: '12px',
            padding: '10px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', gap: '16px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="pulse" style={{ 
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#86efac'
              }}></span>
              main
            </span>
            <span>Spaces: 2</span>
            <span>UTF-8</span>
          </div>
          <div style={{ fontWeight: '600' }}>{currentSnippet.language}</div>
        </div>
      </div>

      {/* Info Cards Below */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div 
          style={{ 
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.05))',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            padding: '14px',
            borderRadius: '12px'
          }}
        >
          <div style={{ fontSize: '10px', fontWeight: '700', color: '#06b6d4', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Description</div>
          <div style={{ fontSize: '12px', color: '#e2e8f0', lineHeight: '1.4' }}>{currentSnippet.description}</div>
        </div>

        <div 
          style={{ 
            background: 'linear-gradient(135deg, rgba(147, 112, 219, 0.1), rgba(168, 85, 247, 0.05))',
            border: '1px solid rgba(147, 112, 219, 0.3)',
            padding: '14px',
            borderRadius: '12px'
          }}
        >
          <div style={{ fontSize: '10px', fontWeight: '700', color: '#a78bfa', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Tags</div>
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            {currentSnippet.tags.map(tag => (
              <span key={tag} style={{ 
                fontSize: '11px',
                padding: '3px 6px',
                borderRadius: '4px',
                background: 'rgba(167, 139, 250, 0.2)',
                color: '#c4b5fd',
                border: '1px solid rgba(167, 139, 250, 0.3)'
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div 
          style={{ 
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.05))',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            padding: '14px',
            borderRadius: '12px'
          }}
        >
          <div style={{ fontSize: '10px', fontWeight: '700', color: '#10b981', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Stats</div>
          <div style={{ fontSize: '11px', color: '#a7f3d0', lineHeight: '1.6' }}>
            <div>👁️ {currentSnippet.views} views</div>
            <div>⭐ {currentSnippet.rating} rating</div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-3 mt-6">
        <button
          onClick={onCopy}
          style={{
            background: copied 
              ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.1))'
              : 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.1))',
            border: `1px solid ${copied ? 'rgba(34, 197, 94, 0.5)' : 'rgba(6, 182, 212, 0.5)'}`,
            color: copied ? '#22c55e' : '#06b6d4',
            width: '100%',
            padding: '12px 16px',
            borderRadius: '10px',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}
          onMouseEnter={(e) => !copied && (e.target.style.borderColor = 'rgba(6, 182, 212, 0.8)') }
          onMouseLeave={(e) => !copied && (e.target.style.borderColor = 'rgba(6, 182, 212, 0.5)')}
        >
          {copied ? '✓ Copied!' : '📋 Copy'}
        </button>
        
        <button
          style={{
            background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(239, 68, 68, 0.1))',
            border: '1px solid rgba(236, 72, 153, 0.5)',
            color: '#ec4899',
            width: '100%',
            padding: '12px 16px',
            borderRadius: '10px',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}
          onMouseEnter={(e) => (e.target.style.borderColor = 'rgba(236, 72, 153, 0.8)')}
          onMouseLeave={(e) => (e.target.style.borderColor = 'rgba(236, 72, 153, 0.5)')}
        >
          ⬇️ Export
        </button>

        <button
          style={{
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(147, 112, 219, 0.1))',
            border: '1px solid rgba(168, 85, 247, 0.5)',
            color: '#d8b4fe',
            width: '100%',
            padding: '12px 16px',
            borderRadius: '10px',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}
          onMouseEnter={(e) => (e.target.style.borderColor = 'rgba(168, 85, 247, 0.8)')}
          onMouseLeave={(e) => (e.target.style.borderColor = 'rgba(168, 85, 247, 0.5)')}
        >
          ❤️ Save
        </button>
      </div>
    </div>
  );
}
