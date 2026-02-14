const categories = [
  { id: 'all', name: 'All Snippets', icon: '📚' },
  { id: 'react', name: 'React', icon: '⚛️' },
  { id: 'javascript', name: 'JavaScript', icon: '💛' },
];

export function SearchAndFilter({ searchTerm, onSearchChange, selectedCategory, onCategoryChange }) {
  return (
    <div className="mb-8">
      <div className="mb-6">
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="🔍 Search snippets by name, language, or tags..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: '14px',
              border: '2px solid rgba(148, 163, 184, 0.2)',
              background: 'rgba(15, 23, 42, 0.8)',
              color: '#ffffff',
              fontSize: '15px',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              fontFamily: 'inherit'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'rgba(6, 182, 212, 0.6)';
              e.target.style.boxShadow = '0 0 20px rgba(6, 182, 212, 0.2)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(148, 163, 184, 0.2)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 mb-6">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`category-btn px-6 py-2 rounded-lg text-sm font-600 whitespace-nowrap transition-all ${
              selectedCategory === cat.id ? 'active' : ''
            }`}
            style={{
              background: selectedCategory === cat.id 
                ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.1))'
                : 'linear-gradient(135deg, rgba(148, 163, 184, 0.1), rgba(148, 163, 184, 0.05))',
              border: selectedCategory === cat.id
                ? '1px solid rgba(6, 182, 212, 0.8)'
                : '1px solid rgba(148, 163, 184, 0.3)',
              color: selectedCategory === cat.id ? '#06b6d4' : '#94a3b8'
            }}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}
