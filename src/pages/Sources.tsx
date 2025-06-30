
import React from 'react';
import Layout from '../components/Layout';
import { BookOpen, CheckCircle, ExternalLink } from 'lucide-react';

const Sources = () => {
  const sources = [
    {
      id: 1,
      name: 'The Holy Quran',
      type: 'Primary Source',
      description: 'The final revelation from Allah, preserved in its original Arabic text',
      translations: ['Sahih International', 'Pickthall', 'Yusuf Ali'],
      status: 'verified',
      details: 'Complete 114 chapters with authenticated translations and tafsir references'
    },
    {
      id: 2,
      name: 'Sahih al-Bukhari',
      type: 'Hadith Collection',
      description: 'Most authentic collection of Prophet Muhammad\'s (ﷺ) sayings and actions',
      translator: 'Muhammad al-Bukhari',
      hadiths: '7,563',
      status: 'verified',
      details: 'Rigorously authenticated hadith collection, considered most reliable after the Quran'
    },
    {
      id: 3,
      name: 'Sahih Muslim',
      type: 'Hadith Collection',
      description: 'Second most authentic hadith collection in Islamic literature',
      translator: 'Muslim ibn al-Hajjaj',
      hadiths: '7,470',
      status: 'verified',
      details: 'Comprehensive collection of authentic prophetic traditions'
    },
    {
      id: 4,
      name: 'Riyad-us-Saliheen',
      type: 'Hadith Compilation',
      description: 'Collection of authentic hadith compiled by Imam an-Nawawi',
      translator: 'Imam an-Nawawi',
      hadiths: '1,896',
      status: 'verified',
      details: 'Thematically organized authentic hadith for practical guidance'
    },
    {
      id: 5,
      name: 'Tafsir Ibn Kathir',
      type: 'Quranic Commentary',
      description: 'Classical commentary on the Quran by Ibn Kathir',
      translator: 'Ibn Kathir',
      status: 'verified',
      details: 'Authoritative Quranic interpretation based on hadith and scholarly consensus'
    }
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-cairo font-bold text-4xl md:text-5xl text-slate mb-4">
            Our Islamic Sources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every answer on Hidayah AI comes from these verified and authentic Islamic sources, 
            ensuring the highest level of scholarly accuracy.
          </p>
        </div>

        {/* Source Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card-islamic text-center">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="font-semibold text-lg mb-2">Primary Sources</h3>
            <p className="text-gray-600 text-sm">Quran and authentic Hadith collections</p>
          </div>
          <div className="card-islamic text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="font-semibold text-lg mb-2">Classical Texts</h3>
            <p className="text-gray-600 text-sm">Traditional Islamic scholarship and commentary</p>
          </div>
          <div className="card-islamic text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="font-semibold text-lg mb-2">Verified Only</h3>
            <p className="text-gray-600 text-sm">All sources authenticated by Islamic scholars</p>
          </div>
        </div>

        {/* Sources List */}
        <div className="space-y-6">
          {sources.map((source) => (
            <div key={source.id} className="card-islamic hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <BookOpen className="text-primary" size={24} />
                    <h3 className="font-semibold text-xl text-slate">{source.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      source.status === 'verified' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      <CheckCircle className="inline w-3 h-3 mr-1" />
                      {source.status === 'verified' ? 'Verified' : 'Pending'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Type:</span>
                      <p className="text-gray-700">{source.type}</p>
                    </div>
                    
                    {source.translator && (
                      <div>
                        <span className="text-sm font-medium text-gray-500">Scholar:</span>
                        <p className="text-gray-700">{source.translator}</p>
                      </div>
                    )}
                    
                    {source.hadiths && (
                      <div>
                        <span className="text-sm font-medium text-gray-500">Hadiths:</span>
                        <p className="text-gray-700">{source.hadiths}</p>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 mb-3">{source.description}</p>
                  <p className="text-sm text-gray-500">{source.details}</p>

                  {source.translations && (
                    <div className="mt-3">
                      <span className="text-sm font-medium text-gray-500">Available Translations:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {source.translations.map((translation) => (
                          <span
                            key={translation}
                            className="px-2 py-1 bg-accent text-slate text-xs rounded"
                          >
                            {translation}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <button className="ml-4 p-2 text-gray-400 hover:text-primary transition-colors">
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Request New Source */}
        <div className="mt-12 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-accent/50 to-white rounded-xl">
            <h3 className="font-semibold text-xl text-slate mb-4">
              Missing a Source?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              If you know of an authentic Islamic source that should be included, 
              please let us know and our scholars will review it.
            </p>
            <button className="btn-primary">
              Request a Source
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-red-50 border-l-4 border-red-400 rounded-lg">
          <div className="flex items-start space-x-3">
            <div className="text-red-500 mt-1">
              <CheckCircle size={20} />
            </div>
            <div>
              <h4 className="font-medium text-red-800 mb-2">Source Verification Process</h4>
              <p className="text-red-700 text-sm leading-relaxed">
                All sources undergo rigorous verification by qualified Islamic scholars before being 
                included in our database. We only accept sources that are widely recognized as authentic 
                by the global Muslim scholarly community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sources;
