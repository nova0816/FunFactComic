/**
 * FunFact Comics - Main App Orchestration, View Router & Controls
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Core Components
  const comicViewer = new ComicViewer();
  const quizGame = new QuizGame();

  // View Sections
  const mainMenuView = document.getElementById("mainMenuView");
  const comicReaderView = document.getElementById("comicReaderView");
  const btnBackToLibrary = document.getElementById("btnBackToLibrary");

  const currentComicTitle = document.getElementById("currentComicTitle");
  const currentComicSubtitle = document.getElementById("currentComicSubtitle");

  // ==========================================
  // 1. View Switcher: Main Menu <--> Comic Reader
  // ==========================================
  function showMainMenu() {
    comicViewer.stopAutoRead();
    window.cuteVoiceEngine.stop();
    window.cuteVoiceEngine.playSfx("pop");

    if (comicReaderView) comicReaderView.classList.remove("active");
    if (mainMenuView) mainMenuView.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openStory(storyId) {
    const story = STORIES_DATA[storyId];
    if (!story) return;

    window.cuteVoiceEngine.playSfx("sparkle");

    // Update Story Content
    comicViewer.setStory(storyId);
    quizGame.setStory(storyId);

    if (currentComicTitle) currentComicTitle.innerText = `🦩 ${story.title}`;
    if (currentComicSubtitle) currentComicSubtitle.innerText = `${story.subtitle} Tap any speech pin to listen!`;

    // Switch View
    if (mainMenuView) mainMenuView.classList.remove("active");
    if (comicReaderView) comicReaderView.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Bind Story Selection Cards
  document.querySelectorAll(".btn-play-story[data-story-id], .story-card.active-story").forEach(el => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const storyId = el.dataset.storyId || "fiona_pink_secret";
      openStory(storyId);
    });
  });

  // Bind Back to Library Button
  if (btnBackToLibrary) {
    btnBackToLibrary.addEventListener("click", () => {
      showMainMenu();
    });
  }

  // ==========================================
  // 2. Comic Mode Toggle (Grid vs Storybook Slide)
  // ==========================================
  const tabGrid = document.getElementById("tabGrid");
  const tabStorybook = document.getElementById("tabStorybook");

  if (tabGrid && tabStorybook) {
    tabGrid.addEventListener("click", () => {
      window.cuteVoiceEngine.playSfx("pop");
      tabGrid.classList.add("active");
      tabStorybook.classList.remove("active");
      comicViewer.setViewMode("grid");
    });

    tabStorybook.addEventListener("click", () => {
      window.cuteVoiceEngine.playSfx("pop");
      tabStorybook.classList.add("active");
      tabGrid.classList.remove("active");
      comicViewer.setViewMode("storybook");
    });
  }

  // ==========================================
  // 3. Voice Speed Selector
  // ==========================================
  const speedBtn = document.getElementById("btnSpeedControl");
  const speeds = [
    { label: "🐰 1.0x", value: 1.0 },
    { label: "🐢 0.8x", value: 0.8 },
    { label: "🐆 1.2x", value: 1.2 }
  ];
  let currentSpeedIdx = 0;

  if (speedBtn) {
    speedBtn.addEventListener("click", () => {
      window.cuteVoiceEngine.playSfx("pop");
      currentSpeedIdx = (currentSpeedIdx + 1) % speeds.length;
      const selected = speeds[currentSpeedIdx];
      speedBtn.innerText = selected.label;
      window.cuteVoiceEngine.speechRateMultiplier = selected.value;
    });
  }

  // ==========================================
  // 4. iPad / Browser Fullscreen Toggle
  // ==========================================
  const fullscreenBtn = document.getElementById("btnFullscreen");
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", () => {
      window.cuteVoiceEngine.playSfx("pop");
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
          console.log("Fullscreen request ignored:", err.message);
        });
        fullscreenBtn.innerText = "🗗 Exit";
      } else {
        document.exitFullscreen().catch(() => {});
        fullscreenBtn.innerText = "⛶ Full";
      }
    });
  }
});
