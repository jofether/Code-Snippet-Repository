import React, { useState } from 'react';

function App() {
  const [copied, setCopied] = useState(false);

  const codeLines = [
    { num: 1, text: "import React from 'react';", color: "text-purple-400" },
    { num: 2, text: "", color: "" },
    { num: 3, text: "function Welcome({ name }) {", color: "text-blue-400" },
    { num: 4, text: "  return (", color: "text-white" },
    { num: 5, text: "    <h1 className=\"text-2xl\">", color: "text-green-400" },
    { num: 6, text: "      Hello, {name}", color: "text-white" },
    { num: 7, text: "    </h1>", color: "text-green-400" },
    { num: 8, text: "  );", color: "text-white" },
    { num: 9, text: "}", color: "text-blue-400" },
    { num: 10, text: "", color: "" },
    { num: 11, text: "export default Welcome;", color: "text-purple-400" },
  ];

  const handleCopy = () => {
    const code = codeLines.map(line => line.text).join('\n');
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-700/50 backdrop-blur-sm bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.4 16.6L4.8 12l4.6-4.6M14.6 16.6l4.6-4.6-4.6-4.6M6.7 19.8h10.6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Code Snippet Library
            </h1>
          </div>
          <p className="text-slate-400 text-sm">Demonstrating monospace text alignment and line numbering for AI model training</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Code Editor */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden backdrop-blur-sm shadow-2xl hover:border-slate-600/50 transition-colors">
              
              {/* Title Bar */}
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-5 py-3 flex items-center justify-between border-b border-slate-700/50">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 hover:bg-red-500 transition"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 hover:bg-amber-500 transition"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition"></div>
                  <span className="ml-3 text-xs text-slate-400 font-mono tracking-wide">Welcome.jsx</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">11 lines</span>
              </div>

              {/* Code Content */}
              <div className="p-6 overflow-x-auto bg-slate-900/30 font-mono text-sm leading-relaxed">
                <table className="w-full">
                  <tbody>
                    {codeLines.map((line) => (
                      <tr key={line.num} className="hover:bg-slate-700/20 transition-colors">
                        {/* Line Numbers */}
                        <td className="pr-6 text-right text-slate-500 select-none border-r border-slate-700/30 w-12 font-mono text-xs py-1">
                          {line.num}
                        </td>
                        {/* Code Content */}
                        <td className="pl-4 whitespace-pre py-1">
                          <span className={line.color}>{line.text}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar Info & Controls */}
          <div className="flex flex-col gap-6">
            {/* Info Card */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-slate-200 mb-3 uppercase tracking-wider">Details</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Language</p>
                  <p className="text-cyan-400 font-semibold">JSX / React</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Component</p>
                  <p className="text-blue-400 font-semibold">Welcome</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Type</p>
                  <p className="text-emerald-400 font-semibold">Functional</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleCopy}
                className={`w-full py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                  copied
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/30 hover:border-cyan-400/50'
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                </svg>
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
              
              <button className="w-full py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30 hover:border-blue-400/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
                Download .jsx
              </button>
            </div>

            {/* Stats */}
            <div className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-4">
              <div className="text-xs text-slate-400 space-y-2">
                <p>• Font: Monospace (required)</p>
                <p>• Vertical alignment: Critical</p>
                <p>• Indentation: Preserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-700/50 mt-12 backdrop-blur-sm bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <p className="text-slate-500 text-sm text-center">
            AI Model Training Dataset • Monospace Text Alignment & Line Numbering
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
