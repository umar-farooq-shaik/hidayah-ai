
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout';
import ApiKeyInput from '../components/ApiKeyInput';
import { geminiService } from '../services/geminiService';
import { Search, Bookmark, ThumbsUp, ThumbsDown, Loader, BookOpen, Quote, AlertCircle } from 'lucide-react';

interface Answer {
  id: string;
  sourceType: 'Quran' | 'Hadith' | 'Tafsir';
  arabicText: string;
  translation: string;
  reference: string;
  simplified?: string;
}

const Ask = () => {
  const [searchParams] = useSearchParams();
  const [question, setQuestion] = useState(searchParams.get('q') || '');
  const [isLoading, setIsLoading] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showSimplified, setShowSimplified] = useState<{ [key: string]: boolean }>({});
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check for stored API key on component mount
  useEffect(() => {
    const storedApiKey = localStorage.getItem('gemini-api-key');
    if (storedApiKey) {
      setApiKey(storedApiKey);
      geminiService.setApiKey(storedApiKey);
    } else {
      setShowApiKeyInput(true);
    }
  }, []);

  // Auto-search if question is provided in URL
  useEffect(() => {
    const urlQuestion = searchParams.get('q');
    if (urlQuestion && apiKey) {
      setQuestion(urlQuestion);
      handleSearch(null, urlQuestion);
    }
  }, [searchParams, apiKey]);

  const handleApiKeySubmit = (newApiKey: string) => {
    setApiKey(newApiKey);
    localStorage.setItem('gemini-api-key', newApiKey);
    geminiService.setApiKey(newApiKey);
    setShowApiKeyInput(false);
    setError(null);
  };

  const handleSearch = async (e: React.FormEvent | null, searchQuestion?: string) => {
    if (e) e.preventDefault();
    const queryQuestion = searchQuestion || question;
    
    if (!queryQuestion.trim()) return;

    if (!apiKey) {
      setShowApiKeyInput(true);
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const geminiAnswers = await geminiService.askQuestion(queryQuestion);
      setAnswers(geminiAnswers);
    } catch (error) {
      console.error('Error getting Gemini response:', error);
      setError('Failed to get response. Please check your API key and try again.');
      
      // Show mock data as fallback
      const mockAnswers: Answer[] = [
        {
          id: 'fallback-1',
          sourceType: 'Quran',
          arabicText: 'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا',
          translation: 'And whoever fears Allah - He will make for him a way out.',
          reference: 'Surah At-Talaq 65:2',
          simplified: 'This verse teaches us that those who have taqwa (God-consciousness) will be provided with solutions to their difficulties by Allah.'
        }
      ];
      setAnswers(mockAnswers);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSimplified = (id: string) => {
    setShowSimplified(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleBookmark = (answerId: string) => {
    console.log('Bookmarked:', answerId);
    // Implement bookmark functionality
  };

  const handleFeedback = (answerId: string, helpful: boolean) => {
    console.log('Feedback:', answerId, helpful);
    // Implement feedback functionality
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* API Key Input */}
        <ApiKeyInput 
          onApiKeySubmit={handleApiKeySubmit}
          isVisible={showApiKeyInput}
        />

        {/* Search Bar */}
        <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm py-4 -mx-4 px-4 mb-8">
          <form onSubmit={handleSearch} className="relative">
            <div className="flex items-center bg-white border-2 border-gray-200 rounded-xl shadow-sm focus-within:border-primary transition-colors">
              <Search className="text-gray-400 ml-4" size={20} />
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask your Islamic question..."
                className="flex-1 py-4 px-4 text-lg bg-transparent border-none outline-none"
              />
              <button
                type="submit"
                className="btn-primary m-2 px-6 py-3"
                disabled={isLoading}
              >
                {isLoading ? <Loader className="animate-spin" size={20} /> : 'Ask'}
              </button>
            </div>
          </form>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <AlertCircle className="text-red-600 mr-2" size={20} />
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4"></div>
            <p className="text-gray-600">Consulting Islamic sources...</p>
          </div>
        )}

        {/* Answers */}
        {answers.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate mb-6">
              Islamic Guidance for: "{question}"
            </h2>

            {answers.map((answer) => (
              <div key={answer.id} className="card-islamic animate-fade-in">
                {/* Source Type Badge */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    answer.sourceType === 'Quran' 
                      ? 'bg-primary/10 text-primary'
                      : answer.sourceType === 'Hadith'
                      ? 'bg-secondary/10 text-secondary'
                      : 'bg-accent text-slate'
                  }`}>
                    {answer.sourceType === 'Quran' ? '📖 Quran' : 
                     answer.sourceType === 'Hadith' ? '📕 Hadith' : '📚 Tafsir'}
                  </span>
                  {answer.reference && (
                    <span className="text-sm text-gray-500">{answer.reference}</span>
                  )}
                </div>

                {/* Arabic Text */}
                {answer.arabicText && (
                  <div className="mb-4 p-4 bg-accent/30 rounded-lg">
                    <p className="arabic-text text-xl md:text-2xl text-slate">
                      {answer.arabicText}
                    </p>
                  </div>
                )}

                {/* Translation */}
                <div className="mb-4">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    <Quote className="inline w-5 h-5 text-gray-400 mr-2" />
                    {answer.translation}
                  </p>
                </div>

                {/* Simplified Explanation */}
                {answer.simplified && (
                  <div className="mb-4">
                    <button
                      onClick={() => toggleSimplified(answer.id)}
                      className="text-primary hover:text-primary/80 text-sm font-medium mb-2"
                    >
                      {showSimplified[answer.id] ? 'Hide' : 'Show'} Simplified Explanation
                    </button>
                    
                    {showSimplified[answer.id] && (
                      <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                        <p className="text-gray-700">{answer.simplified}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">Was this helpful?</span>
                    <button
                      onClick={() => handleFeedback(answer.id, true)}
                      className="flex items-center space-x-1 text-sm text-gray-500 hover:text-primary transition-colors"
                    >
                      <ThumbsUp size={16} />
                      <span>Yes</span>
                    </button>
                    <button
                      onClick={() => handleFeedback(answer.id, false)}
                      className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <ThumbsDown size={16} />
                      <span>No</span>
                    </button>
                  </div>

                  <button
                    onClick={() => handleBookmark(answer.id)}
                    className="flex items-center space-x-1 text-sm text-gray-500 hover:text-secondary transition-colors"
                  >
                    <Bookmark size={16} />
                    <span>Save</span>
                  </button>
                </div>
              </div>
            ))}

            {/* Related Content - only show if we have real answers */}
            {!error && (
              <div className="mt-12 p-6 bg-gradient-to-r from-accent/50 to-white rounded-xl">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <BookOpen className="mr-2 text-primary" size={20} />
                  Related Guidance
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Quran 2:286</p>
                    <p className="text-gray-700">"Allah does not burden a soul beyond that it can bear..."</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Sahih Muslim 2999</p>
                    <p className="text-gray-700">"The believer is not one who eats his fill while his neighbor goes hungry."</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* No Results State */}
        {!isLoading && answers.length === 0 && question && !showApiKeyInput && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Ready to Search</h3>
            <p className="text-gray-600">
              Enter your question above to get answers from authentic Islamic sources.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Ask;
