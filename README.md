# 🦩 FunFact Comics - Interactive ESL Story Game for Kids

An interactive, touch-friendly 4-panel educational web comic designed for young ESL learners (A1/A2 level) on iPad and desktop.

Kids can tap dialogue bubbles to hear cute character voices, follow karaoke-style word highlighting, explore vocabulary words, and play a fun comprehension quiz with star rewards and confetti!

---

## 🚀 Features

* **4-Panel Comic Strip & Fullscreen iPad Storybook Mode**: Switch seamlessly between a 2x2 comic layout and a swipeable cinema-style slide mode.
* **Cute Character Voice Synthesis**: High-pitched, playful voices for Pip (Orange Cat), Dot (Smart Bunny), and Fiona (Pink Flamingo) powered by Web Speech API.
* **Karaoke Word Highlighting**: Dialogue words light up in sync as the cute voice reads them aloud.
* **Interactive Vocabulary Tooltip**: Tap marked words (e.g. *pink*, *shrimp*, *broccoli*, *strong*) to hear them slowly and see friendly definitions with emoji.
* **Mini ESL Quiz & Star Celebration**: 3 interactive comprehension questions with immediate sound feedback, celebratory star ratings, and confetti animation.
* **Animal Fact Discovery Card**: Educational takeaway explaining why flamingos are pink.
* **Zero Backend / 100% Static**: Runs directly in the browser or on GitHub Pages.

---

## 💻 How to Run Locally

You can simply open `index.html` in any modern web browser (Chrome, Edge, Safari):

```bash
# Option 1: Double-click index.html in file explorer

# Option 2: Run a quick local development server
npx serve .
# or
python -m http.server 8000
```

---

## 📱 How to Play on iPad

1. Open Safari on your iPad and navigate to your GitHub Pages URL (e.g., `https://nova0816.github.io/FunfactComics/` or `https://nova0816.github.io/`).
2. Tap the **Share** button in Safari.
3. Tap **Add to Home Screen**.
4. Launch the app from the Home Screen for a full-screen, native-like tablet reading experience!

---

## 🌐 Publishing to GitHub Pages (`nova0816.github.io`)

1. Initialize git in this directory (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: FunFact Comics interactive web app"
   ```
2. Link to your GitHub repository:
   ```bash
   git remote add origin https://github.com/nova0816/nova0816.github.io.git
   # or your repository name:
   # git remote add origin https://github.com/nova0816/FunfactComics.git
   ```
3. Push to `main` (or `gh-pages`):
   ```bash
   git branch -M main
   git push -u origin main
   ```
4. In your GitHub repository **Settings** -> **Pages**, select **Deploy from a branch** -> `main` / `root` -> **Save**.
5. Your interactive comic will be live at `https://nova0816.github.io`!

---

## 📚 How to Add More Stories

Open `js/storyData.js` and add a new story entry under `STORIES_DATA` following the same 4-panel blueprint!
