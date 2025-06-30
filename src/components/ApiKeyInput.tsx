
import React, { useState } from 'react';
import { Key, Eye, EyeOff } from 'lucide-react';

interface ApiKeyInputProps {
  onApiKeySubmit: (apiKey: string) => void;
  isVisible: boolean;
}

const ApiKeyInput = ({ onApiKeySubmit, isVisible }: ApiKeyInputProps) => {
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      onApiKeySubmit(apiKey.trim());
    }
  };

  if (!isVisible) return null;

  return (
    <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
      <div className="flex items-center mb-3">
        <Key className="text-amber-600 mr-2" size={20} />
        <h3 className="font-semibold text-amber-800">Gemini API Key Required</h3>
      </div>
      <p className="text-sm text-amber-700 mb-4">
        For the best experience, we recommend connecting this project to Supabase to securely store your API key. 
        For now, you can enter your Gemini API key below (it will be stored temporarily in your browser).
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="flex-1 relative">
          <input
            type={showKey ? 'text' : 'password'}
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your Gemini API key..."
            className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="button"
            onClick={() => setShowKey(!showKey)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        <button
          type="submit"
          className="btn-primary px-4 py-2"
          disabled={!apiKey.trim()}
        >
          Save
        </button>
      </form>
      <p className="text-xs text-amber-600 mt-2">
        Get your free API key from{' '}
        <a 
          href="https://makersuite.google.com/app/apikey" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline hover:text-amber-800"
        >
          Google AI Studio
        </a>
      </p>
    </div>
  );
};

export default ApiKeyInput;
