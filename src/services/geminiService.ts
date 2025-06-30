
import { GoogleGenerativeAI } from '@google/generative-ai';

interface GeminiAnswer {
  sourceType: 'Quran' | 'Hadith' | 'Tafsir';
  arabicText: string;
  translation: string;
  reference: string;
  simplified?: string;
}

const SYSTEM_PROMPT = `You are a scholarly assistant trained on Quran, Sahih Hadith collections (Bukhari, Muslim), and classical Islamic texts.

When the user asks a question, respond with ONLY direct references found in Quran or Hadith, formatted as JSON array with this exact structure:

[
  {
    "sourceType": "Quran" | "Hadith" | "Tafsir",
    "arabicText": "Original Arabic text",
    "translation": "English translation (Sahih International preferred)",
    "reference": "Exact reference (e.g., Surah Al-Baqarah 2:2, or Sahih Bukhari 5590)",
    "simplified": "Optional short, neutral explanation based strictly on the text meaning"
  }
]

Rules:
❌ Do not include any modern fatwa, personal opinion, or internet content.
❌ Do not cite social media or blogs.
✅ If nothing is found, return: [{"sourceType": "Quran", "arabicText": "", "translation": "No direct reference was found in the Quran or Sahih Hadith. Please consult a qualified scholar for further guidance.", "reference": "", "simplified": ""}]

Maintain a humble and respectful tone throughout.`;

export class GeminiService {
  private genAI: GoogleGenerativeAI | null = null;
  private apiKey: string = '';

  constructor(apiKey?: string) {
    if (apiKey) {
      this.apiKey = apiKey;
      this.genAI = new GoogleGenerativeAI(apiKey);
    }
  }

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
    this.genAI = new GoogleGenerativeAI(apiKey);
  }

  async askQuestion(question: string): Promise<GeminiAnswer[]> {
    if (!this.genAI) {
      throw new Error('Gemini API key not provided');
    }

    try {
      const model = this.genAI.getGenerativeModel({ model: 'gemini-pro' });
      
      const prompt = `${SYSTEM_PROMPT}\n\nUser Question: ${question}`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      console.log('Gemini raw response:', text);

      // Try to parse JSON response
      try {
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          const parsedAnswers = JSON.parse(jsonMatch[0]);
          return parsedAnswers.map((answer: any, index: number) => ({
            id: `gemini-${Date.now()}-${index}`,
            ...answer
          }));
        }
      } catch (parseError) {
        console.warn('Failed to parse JSON, using fallback:', parseError);
      }

      // Fallback: Return a single answer if JSON parsing fails
      return [{
        id: `gemini-${Date.now()}`,
        sourceType: 'Quran' as const,
        arabicText: '',
        translation: text || 'Unable to process the question at this time. Please try again.',
        reference: '',
        simplified: ''
      }];

    } catch (error) {
      console.error('Gemini API error:', error);
      throw new Error('Failed to get response from Gemini AI');
    }
  }
}

export const geminiService = new GeminiService();
