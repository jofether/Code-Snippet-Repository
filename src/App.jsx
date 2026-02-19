import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { StatsBar } from './components/StatsBar';
import { SearchAndFilter } from './components/SearchAndFilter';
import { SnippetsList } from './components/SnippetsList';
import { CodeEditor } from './components/CodeEditor';
import { FeaturedSection } from './components/FeaturedSection';
import { Footer } from './components/Footer';
import { snippetsData } from './components/snippetsData';
import { styles } from './components/styles';

function App() {
  const [copied, setCopied] = useState(false);
  const [selectedSnippet, setSelectedSnippet] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSnippets = useMemo(() => {
    return snippetsData.filter(snippet => {
      const matchesCategory = selectedCategory === 'all' || snippet.category === selectedCategory;
      const matchesSearch = snippet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          snippet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          snippet.tags.some(tag => tag.includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const currentSnippet = filteredSnippets.length > 0 ? filteredSnippets[selectedSnippet] : snippetsData[0];

  const handleCopy = () => {
    const code = currentSnippet.lines.map(line => line.text).join('\n');
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #1e1b4b 60%, #0f172a 100%)' }} className="min-h-screen py-8 px-4 relative overflow-hidden">
      <style>{styles}</style>
      
      {/* Animated background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-card" style={{ 
          background: 'radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)',
          width: '500px',
          height: '500px',
          position: 'absolute',
          top: '10%',
          left: '-10%',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}></div>
        <div className="floating-card" style={{ 
          background: 'radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
          width: '600px',
          height: '600px',
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animationDelay: '2s'
        }}></div>
        <div style={{ 
          background: 'radial-gradient(circle at 50% 0%, rgba(168, 85, 247, 0.1) 0%, transparent 60%)',
          width: '400px',
          height: '400px',
          position: 'absolute',
          top: '-10%',
          right: '20%',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative" style={{ zIndex: 1 }}>
        {/* Header */}
        <Header snippetsCount={snippetsData.length} />

        {/* Stats */}
        <StatsBar snippets={snippetsData} />

        {/* Search & Filter */}
        <SearchAndFilter 
          searchTerm={searchTerm}
          onSearchChange={(value) => {
            setSearchTerm(value);
            setSelectedSnippet(0);
          }}
          selectedCategory={selectedCategory}
          onCategoryChange={(category) => {
            setSelectedCategory(category);
            setSelectedSnippet(0);
          }}
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Snippets List */}
          <SnippetsList 
            filteredSnippets={filteredSnippets}
            selectedSnippet={selectedSnippet}
            onSelectSnippet={setSelectedSnippet}
          />

          {/* Code Editor */}
          <CodeEditor 
            currentSnippet={currentSnippet}
            copied={copied}
            onCopy={handleCopy}
          />
        </div>

        {/* Featured Section */}
        <FeaturedSection 
          snippets={snippetsData}
          filteredSnippets={filteredSnippets}
          onSelectSnippet={setSelectedSnippet}
          onSelectCategory={setSelectedCategory}
        />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
