import React, { useState } from 'react';

function App() {
  const [copied, setCopied] = useState(false);

  const codeLines = [
    { num: 1, text: "import React from 'react';", color: "#a78bfa" },
    { num: 2, text: "", color: "" },
    { num: 3, text: "function Welcome({ name }) {", color: "#93c5fd" },
    { num: 4, text: "  return (", color: "#ffffff" },
    { num: 5, text: "    <h1 className=\"text-2xl\">", color: "#6ee7b7" },
    { num: 6, text: "      Hello, {name}", color: "#ffffff" },
    { num: 7, text: "    </h1>", color: "#6ee7b7" },
    { num: 8, text: "  );", color: "#ffffff" },
    { num: 9, text: "}", color: "#93c5fd" },
    { num: 10, text: "", color: "" },
    { num: 11, text: "export default Welcome;", color: "#a78bfa" },
  ];

  const handleCopy = () => {
    const code = codeLines.map(line => line.text).join('\n');
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const styles = `
    .code-editor {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
    }
    .code-window {
      background: linear-gradient(to bottom, #1e293b, #0f172a);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7);
    }
    .header-bar {
      background: linear-gradient(90deg, #1e293b, #0e7490);
    }
    .line-hover:hover {
      background: rgba(255, 255, 255, 0.05);
    }
  `;

  return (
    <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #1e1b4b 60%, #0f172a 100%)' }} className="min-h-screen py-16 px-4 relative overflow-hidden">
      <style>{styles}</style>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div style={{ 
          background: 'radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)',
          width: '500px',
          height: '500px',
          position: 'absolute',
          top: '10%',
          left: '-10%',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}></div>
        <div style={{ 
          background: 'radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
          width: '600px',
          height: '600px',
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 style={{ 
            backgroundImage: 'linear-gradient(90deg, #06b6d4, #0ea5e9, #3b82f6, #8b5cf6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '48px',
            fontWeight: '900',
            marginBottom: '8px'
          }}>
            Code Snippet Library
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '16px' }}>Monospace text alignment & line numbering for AI training</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Code Editor - Spans 2 columns */}
          <div className="lg:col-span-2">
            <div 
              className="code-window rounded-2xl overflow-hidden border"
              style={{ borderColor: 'rgba(148, 163, 184, 0.3)' }}
            >
              {/* Title Bar */}
              <div 
                className="header-bar px-6 py-4 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.2)' }}
              >
                <div className="flex items-center gap-3">
                  <div style={{ 
                    width: '12px', 
                    height: '12px', 
                    borderRadius: '50%',
                    background: '#ef4444',
                    boxShadow: '0 0 8px rgba(239, 68, 68, 0.5)',
                    cursor: 'pointer'
                  }}></div>
                  <div style={{ 
                    width: '12px', 
                    height: '12px', 
                    borderRadius: '50%',
                    background: '#eab308',
                    boxShadow: '0 0 8px rgba(234, 179, 8, 0.5)',
                    cursor: 'pointer'
                  }}></div>
                  <div style={{ 
                    width: '12px', 
                    height: '12px', 
                    borderRadius: '50%',
                    background: '#22c55e',
                    boxShadow: '0 0 8px rgba(34, 197, 94, 0.5)',
                    cursor: 'pointer'
                  }}></div>
                  <span style={{ color: '#64748b', fontSize: '12px', marginLeft: '16px', fontFamily: 'monospace', fontWeight: '500' }}>
                    Welcome.jsx
                  </span>
                </div>
                <span style={{ color: '#64748b', fontSize: '12px', fontFamily: 'monospace' }}>11 lines</span>
              </div>

              {/* Code Content */}
              <div className="code-editor p-8 overflow-x-auto" style={{ fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.8' }}>
                {codeLines.map((line) => (
                  <div 
                    key={line.num}
                    className="line-hover transition-colors py-1 flex"
                  >
                    <div 
                      style={{ 
                        color: '#64748b',
                        width: '48px',
                        textAlign: 'right',
                        paddingRight: '24px',
                        borderRight: '1px solid rgba(148, 163, 184, 0.2)',
                        userSelect: 'none',
                        fontWeight: '500'
                      }}
                    >
                      {line.num}
                    </div>
                    <div 
                      style={{ 
                        color: line.color || '#ffffff',
                        paddingLeft: '24px',
                        whiteSpace: 'pre',
                        flex: 1
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
                  background: '#0ea5e9',
                  color: '#ffffff',
                  fontSize: '12px',
                  padding: '8px 16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div style={{ display: 'flex', gap: '16px' }}>
                  <span>master</span>
                  <span>Spaces: 2</span>
                  <span>UTF-8</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ 
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#86efac',
                    animation: 'pulse 2s infinite'
                  }}></span>
                  <span>JavaScript React</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Info Cards */}
          <div className="flex flex-col gap-6">
            {/* Info Card 1 */}
            <div 
              className="rounded-xl p-6 border backdrop-blur-sm transition-all hover:border-cyan-400/50"
              style={{ 
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.05))',
                borderColor: 'rgba(6, 182, 212, 0.3)'
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: '700', color: '#06b6d4', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Language</div>
              <div style={{ fontSize: '24px', fontWeight: '900', background: 'linear-gradient(90deg, #06b6d4, #0ea5e9)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>React</div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>JSX Component</div>
            </div>

            {/* Info Card 2 */}
            <div 
              className="rounded-xl p-6 border backdrop-blur-sm transition-all hover:border-purple-400/50"
              style={{ 
                background: 'linear-gradient(135deg, rgba(147, 112, 219, 0.1), rgba(168, 85, 247, 0.05))',
                borderColor: 'rgba(147, 112, 219, 0.3)'
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: '700', color: '#a78bfa', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Component</div>
              <div style={{ fontSize: '24px', fontWeight: '900', background: 'linear-gradient(90deg, #a78bfa, #d8b4fe)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Welcome</div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>11 Lines</div>
            </div>

            {/* Info Card 3 */}
            <div 
              className="rounded-xl p-6 border backdrop-blur-sm transition-all hover:border-emerald-400/50"
              style={{ 
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 197, 94, 0.05))',
                borderColor: 'rgba(16, 185, 129, 0.3)'
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: '700', color: '#10b981', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Type</div>
              <div style={{ fontSize: '24px', fontWeight: '900', background: 'linear-gradient(90deg, #10b981, #34d399)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Functional</div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>No State</div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mt-2">
              <button
                onClick={handleCopy}
                style={{
                  background: copied 
                    ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.1))'
                    : 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.1))',
                  border: `1px solid ${copied ? 'rgba(34, 197, 94, 0.5)' : 'rgba(6, 182, 212, 0.5)'}`,
                  color: copied ? '#22c55e' : '#06b6d4',
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => !copied && (e.target.style.borderColor = 'rgba(6, 182, 212, 0.8)')}
                onMouseLeave={(e) => !copied && (e.target.style.borderColor = 'rgba(6, 182, 212, 0.5)')}
              >
                {copied ? '✓ Copied!' : '📋 Copy Code'}
              </button>
              
              <button
                style={{
                  background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(239, 68, 68, 0.1))',
                  border: '1px solid rgba(236, 72, 153, 0.5)',
                  color: '#ec4899',
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => (e.target.style.borderColor = 'rgba(236, 72, 153, 0.8)')}
                onMouseLeave={(e) => (e.target.style.borderColor = 'rgba(236, 72, 153, 0.5)')}
              >
                ⬇️ Download .jsx
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}

export default App;