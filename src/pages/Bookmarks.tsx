
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Bookmark, Trash2, Search, Filter, Quote } from 'lucide-react';

interface BookmarkedAnswer {
  id: string;
  question: string;
  sourceType: 'Quran' | 'Hadith' | 'Tafsir';
  arabicText: string;
  translation: string;
  reference: string;
  dateBookmarked: string;
  category?: string;
}

const Bookmarks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'Quran' | 'Hadith' | 'Tafsir'>('all');

  const mockBookmarks: BookmarkedAnswer[] = [
    {
      id: '1',
      question: 'What does Islam say about patience?',
      sourceType: 'Quran',
      arabicText: 'وَبَشِّرِ الصَّابِرِينَ',
      translation: 'And give good tidings to the patient.',
      reference: 'Surah Al-Baqarah 2:155',
      dateBookmarked: '2024-01-15',
      category: 'Patience'
    },
    {
      id: '2',
      question: 'Importance of seeking knowledge',
      sourceType: 'Hadith',
      arabicText: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ',
      translation: 'Seeking knowledge is an obligation upon every Muslim.',
      reference: 'Sunan Ibn Majah 224',
      dateBookmarked: '2024-01-10',
      category: 'Knowledge'
    },
    {
      id: '3',
      question: 'How to make dua effectively?',
      sourceType: 'Quran',
      arabicText: 'ادْعُونِي أَسْتَجِبْ لَكُمْ',
      translation: 'Call upon Me; I will respond to you.',
      reference: 'Surah Ghafir 40:60',
      dateBookmarked: '2024-01-05',
      category: 'Prayer'
    }
  ];

  const filteredBookmarks = mockBookmarks.filter(bookmark => {
    const matchesSearch = bookmark.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bookmark.translation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || bookmark.sourceType === filterType;
    return matchesSearch && matchesFilter;
  });

  const handleDelete = (id: string) => {
    console.log('Delete bookmark:', id);
    // Implement delete functionality
  };

  const categories = [...new Set(mockBookmarks.map(b => b.category).filter(Boolean))];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-cairo font-bold text-4xl md:text-5xl text-slate mb-4">
            Your Bookmarks
          </h1>
          <p className="text-xl text-gray-600">
            Your saved Islamic guidance and references
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search bookmarks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            />
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value as typeof filterType)}
                className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Sources</option>
                <option value="Quran">Quran</option>
                <option value="Hadith">Hadith</option>
                <option value="Tafsir">Tafsir</option>
              </select>
            </div>

            <span className="text-sm text-gray-500">
              {filteredBookmarks.length} bookmark{filteredBookmarks.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Categories */}
        {categories.length > 0 && (
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <span
                  key={category}
                  className="px-3 py-1 bg-accent text-slate rounded-full text-sm cursor-pointer hover:bg-primary hover:text-white transition-colors"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Bookmarks List */}
        {filteredBookmarks.length > 0 ? (
          <div className="space-y-6">
            {filteredBookmarks.map((bookmark) => (
              <div key={bookmark.id} className="card-islamic animate-fade-in group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    {/* Question */}
                    <h3 className="font-semibold text-lg text-slate mb-3 group-hover:text-primary transition-colors">
                      {bookmark.question}
                    </h3>

                    {/* Source Badge */}
                    <div className="flex items-center space-x-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        bookmark.sourceType === 'Quran' 
                          ? 'bg-primary/10 text-primary'
                          : bookmark.sourceType === 'Hadith'
                          ? 'bg-secondary/10 text-secondary'
                          : 'bg-accent text-slate'
                      }`}>
                        {bookmark.sourceType === 'Quran' ? '📖 Quran' : 
                         bookmark.sourceType === 'Hadith' ? '📕 Hadith' : '📚 Tafsir'}
                      </span>
                      <span className="text-sm text-gray-500">{bookmark.reference}</span>
                      {bookmark.category && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          {bookmark.category}
                        </span>
                      )}
                    </div>

                    {/* Arabic Text */}
                    <div className="mb-3 p-3 bg-accent/30 rounded-lg">
                      <p className="arabic-text text-lg text-slate">
                        {bookmark.arabicText}
                      </p>
                    </div>

                    {/* Translation */}
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <Quote className="inline w-4 h-4 text-gray-400 mr-2" />
                      {bookmark.translation}
                    </p>

                    {/* Date */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Bookmarked on {new Date(bookmark.dateBookmarked).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-start space-x-2 ml-4">
                    <button
                      onClick={() => handleDelete(bookmark.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                      title="Remove bookmark"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Bookmark className="mx-auto text-gray-300 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              {searchTerm || filterType !== 'all' ? 'No matching bookmarks' : 'No bookmarks yet'}
            </h3>
            <p className="text-gray-500 mb-6">
              {searchTerm || filterType !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : 'Start exploring Islamic guidance and save your favorite answers'
              }
            </p>
            {!searchTerm && filterType === 'all' && (
              <a href="/ask" className="btn-primary">
                Ask Your First Question
              </a>
            )}
          </div>
        )}

        {/* Quick Stats */}
        {filteredBookmarks.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-islamic text-center">
              <div className="text-2xl font-bold text-primary mb-2">
                {mockBookmarks.filter(b => b.sourceType === 'Quran').length}
              </div>
              <p className="text-gray-600">Quranic Verses</p>
            </div>
            <div className="card-islamic text-center">
              <div className="text-2xl font-bold text-secondary mb-2">
                {mockBookmarks.filter(b => b.sourceType === 'Hadith').length}
              </div>
              <p className="text-gray-600">Hadith References</p>
            </div>
            <div className="card-islamic text-center">
              <div className="text-2xl font-bold text-slate mb-2">
                {categories.length}
              </div>
              <p className="text-gray-600">Categories</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Bookmarks;
