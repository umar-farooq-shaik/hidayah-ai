
import React from 'react';
import Layout from '../components/Layout';
import { Users, Target, AlertTriangle, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-cairo font-bold text-4xl md:text-5xl text-slate mb-4">
            About Hidayah AI
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering Muslims worldwide with authentic Islamic knowledge from verified sources
          </p>
        </div>

        <div className="space-y-12">
          {/* Mission */}
          <section className="card-islamic">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Target className="text-primary" size={32} />
              </div>
              <div>
                <h2 className="font-semibold text-2xl text-slate mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To provide Muslims around the world with easy access to authentic Islamic guidance 
                  sourced directly from the Quran and Sahih Hadith. We believe that Islamic knowledge 
                  should be accessible, verified, and free from personal interpretations or modern opinions.
                </p>
              </div>
            </div>
          </section>

          {/* Who We Are */}
          <section className="card-islamic">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Users className="text-secondary" size={32} />
              </div>
              <div>
                <h2 className="font-semibold text-2xl text-slate mb-4">Who We Are</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                  <p>
                    Hidayah AI is developed by a team of dedicated Muslims working alongside Islamic 
                    scholars to ensure accuracy and authenticity in every response. Our platform 
                    combines modern AI technology with traditional Islamic scholarship.
                  </p>
                  <p>
                    As an open-source initiative, we believe in transparency and community collaboration. 
                    Our code and methodologies are open for review by scholars and developers worldwide.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sources */}
          <section className="card-islamic">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <BookOpen className="text-primary" size={32} />
              </div>
              <div>
                <h2 className="font-semibold text-2xl text-slate mb-4">Our Sources</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                  <p>All our responses are sourced from:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>The Holy Quran</strong> - with verified translations</li>
                    <li><strong>Sahih Bukhari</strong> - authenticated hadith collection</li>
                    <li><strong>Sahih Muslim</strong> - authenticated hadith collection</li>
                    <li><strong>Classical Tafsir</strong> - traditional Quranic commentary</li>
                    <li><strong>Riyad-us-Saliheen</strong> - collection of authentic hadith</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Ethical Disclaimer */}
          <section className="card-islamic border-l-4 border-red-400">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <AlertTriangle className="text-red-500" size={32} />
              </div>
              <div>
                <h2 className="font-semibold text-2xl text-slate mb-4">Important Disclaimer</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="font-medium text-red-700">
                    Hidayah AI is NOT a Fatwa service and should not replace consultation with qualified Islamic scholars.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Our responses provide references from Islamic sources for educational purposes</li>
                    <li>For complex religious matters, please consult qualified scholars in your community</li>
                    <li>We do not issue religious rulings or personal guidance</li>
                    <li>Always verify important matters with local Islamic authorities</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-8">
            <div className="inline-block p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
              <h3 className="font-semibold text-xl text-slate mb-4">
                Join Our Mission
              </h3>
              <p className="text-gray-600 mb-6 max-w-lg">
                Help us improve and expand access to authentic Islamic knowledge. 
                Contribute feedback, suggest sources, or join our development community.
              </p>
              <div className="space-x-4">
                <a href="#" className="btn-primary">
                  Contribute on GitHub
                </a>
                <a href="/contact" className="btn-secondary">
                  Contact Us
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
