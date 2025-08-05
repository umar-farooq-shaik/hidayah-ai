# 🕌 Hidayah AI

**Your Trusted Islamic Answer Hub**

A web platform to ask any Islamic question and get clear, evidence-based answers strictly from the Quran, Sahih Hadith, and authentic classical texts—no opinions, no social media.

---

## ✨ Inspiration

As practicing Muslims, we saw how often people get confused by contradictory information online about Islamic rulings. Many rely on blogs, forums, or social media without knowing whether the sources are trustworthy. We wanted to build a platform that empowers anyone—scholars, students, or laypeople—to access **verified primary sources** quickly and confidently.

---

## 💡 What it does

Hidayah AI allows users to:
- **Ask any question** about Islam in natural language.
- Get **direct evidence-based answers** sourced only from:
  - The Quran (with Arabic text and trusted translations).
  - Sahih Hadith collections (Bukhari, Muslim).
  - Selected authentic classical references.
- See all relevant references with:
  - Exact citations.
  - Neutral explanations.
- Bookmark important answers.
- Browse in multiple languages.
- Never see opinions or unverified content.

---

## 🛠️ How we built it

- **Frontend:** React for the web interface, styled with TailwindCSS and smooth animations for clarity and accessibility.
- **Backend:** Node.js + Express API handling query processing.
- **NLP & Search:** A Python microservice using semantic embeddings (sentence transformers) to match user queries to indexed texts.
- **Database:**
  - Elasticsearch for high-quality semantic search.
  - MongoDB for user profiles, bookmarks, and history.
- **Sources:**
  - Quran data from Tanzil project and Sahih International translation.
  - Sahih Bukhari and Muslim Hadith datasets in verified formats.
  - Selected tafsir and fiqh references.
- **Deployment:** Hosted on Render and Vercel for fast global access.

---

## 🚧 Challenges we ran into

- **Semantic matching:** Ensuring natural-language questions reliably map to the correct verses or hadith, especially with varied phrasing.
- **Source verification:** Cross-checking datasets to avoid weak or fabricated narrations.
- **User experience:** Designing an interface that feels modern while respecting Islamic aesthetic values.
- **Performance:** Optimizing search speed across large text corpora without sacrificing accuracy.

---

## 🏆 Accomplishments that we're proud of

- Created a **fully working prototype** combining modern NLP with verified Islamic sources.
- Built an intuitive interface with multilingual support and clean design.
- Designed a system that avoids any opinion-based content—only pure references.
- Received positive feedback from early users who appreciated the transparency and reliability.

---

## 🎓 What we learned

- **Natural Language Understanding** is powerful but requires careful fine-tuning when dealing with religious texts.
- **Trust and transparency** are critical when building tools that deal with sensitive topics like faith.
- **User education** is as important as providing answers—many people are not aware of the difference between primary sources and secondary opinions.

---

## 🚀 What's next for Hidayah AI

- Add more languages, including Urdu and Bahasa Indonesia.
- Expand the corpus to include authenticated tafsir collections.
- Integrate audio recitation of referenced Quran ayahs.
- Develop a mobile app version for offline access.
- Collaborate with scholars to enrich explanations while staying strictly evidence-based.

---

*Made with ❤️ to help the Ummah access pure, trusted knowledge.*
