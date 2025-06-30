
import React, { useState } from 'react';
import { Search, Mic } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [question, setQuestion] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      navigate(`/ask?q=${encodeURIComponent(question)}`);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center mosque-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/95"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="font-cairo font-bold text-4xl md:text-6xl text-slate leading-tight">
              Your Trusted
              <span className="text-primary block">Islamic Answer Hub</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ask any Islamic question and get answers directly from the Quran and Hadith.
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-xl shadow-xl border border-gray-200 p-2">
                <div className="flex items-center space-x-3">
                  <Search className="text-gray-400 ml-4" size={24} />
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="What would you like to know about Islam?"
                    className="flex-1 py-4 px-2 text-lg placeholder-gray-400 bg-transparent border-none outline-none"
                  />
                  <button
                    type="button"
                    className="p-3 rounded-lg hover:bg-accent transition-colors"
                    title="Voice Input"
                  >
                    <Mic className="text-gray-400" size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              className="mt-6 btn-primary text-lg px-8 py-4 rounded-xl transform hover:scale-105 transition-all duration-300"
            >
              Start Asking
            </button>
          </form>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="card-islamic text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Quran Only</h3>
              <p className="text-gray-600 text-sm">
                Direct verses from the Holy Quran with authentic translations
              </p>
            </div>

            <div className="card-islamic text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">100% Verified Sources</h3>
              <p className="text-gray-600 text-sm">
                Only Sahih Hadith and classical Islamic texts
              </p>
            </div>

            <div className="card-islamic text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">No Opinions</h3>
              <p className="text-gray-600 text-sm">
                Zero social media content or personal interpretations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
