
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Mail, MessageSquare, Users, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-cairo font-bold text-4xl md:text-5xl text-slate mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Send us feedback, suggestions, or questions about Islamic sources.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card-islamic">
              <div className="flex items-start space-x-4">
                <MessageSquare className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">General Inquiries</h3>
                  <p className="text-gray-600 text-sm">
                    Questions about our platform, sources, or general feedback.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-islamic">
              <div className="flex items-start space-x-4">
                <Users className="text-secondary mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Scholar Collaboration</h3>
                  <p className="text-gray-600 text-sm">
                    Islamic scholars interested in contributing to our verification process.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-islamic">
              <div className="flex items-start space-x-4">
                <Mail className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Technical Support</h3>
                  <p className="text-gray-600 text-sm">
                    Bug reports, feature requests, or technical assistance.
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
              <h3 className="font-semibold text-lg mb-3">Stay Updated</h3>
              <p className="text-gray-600 text-sm mb-4">
                Subscribe to receive updates about new features and Islamic content.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="card-islamic">
              <h2 className="font-semibold text-2xl text-slate mb-6">Send us a Message</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="source-request">Source Request</option>
                  <option value="technical">Technical Issue</option>
                  <option value="scholar">Scholar Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-vertical"
                  placeholder="Please provide as much detail as possible..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>

              <p className="text-xs text-gray-500 mt-4">
                * Required fields. We typically respond within 24-48 hours.
              </p>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="font-semibold text-2xl text-slate mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-islamic">
              <h3 className="font-semibold text-lg mb-3">How do I suggest a new Islamic source?</h3>
              <p className="text-gray-600 text-sm">
                Use the contact form above with "Source Request" as the subject. Include the source name, 
                author, and why you believe it should be included.
              </p>
            </div>

            <div className="card-islamic">
              <h3 className="font-semibold text-lg mb-3">Can I contribute as a scholar?</h3>
              <p className="text-gray-600 text-sm">
                Yes! We welcome qualified Islamic scholars to join our verification team. 
                Please contact us with your credentials and areas of expertise.
              </p>
            </div>

            <div className="card-islamic">
              <h3 className="font-semibold text-lg mb-3">Is Hidayah AI free to use?</h3>
              <p className="text-gray-600 text-sm">
                Yes, Hidayah AI is completely free and will always remain so. We believe Islamic 
                knowledge should be accessible to everyone.
              </p>
            </div>

            <div className="card-islamic">
              <h3 className="font-semibold text-lg mb-3">How do you ensure source authenticity?</h3>
              <p className="text-gray-600 text-sm">
                All sources undergo review by qualified Islamic scholars and are cross-referenced 
                with established Islamic academic standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
