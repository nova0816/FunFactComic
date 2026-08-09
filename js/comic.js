/**
 * FunFact Comics - Comic Grid & Storybook Interactive Engine
 * Features:
 * 1. Compact unexpanded speech buttons so comic art is 100% visible
 * 2. Sequential "Tap 1 -> Tap 2" visual guidance with pulsing indicators
 * 3. Smooth expanding speech bubble on tap with 100% kid voice audio & karaoke
 * 4. Fullscreen iPad Storybook slide mode with touch gestures
 */

class ComicViewer {
  constructor() {
    this.currentStoryId = "fiona_pink_secret";
    this.story = STORIES_DATA[this.currentStoryId];
    this.currentSlideIndex = 0; // 0 to 3
    this.currentViewMode = "grid"; // 'grid' or 'storybook'
    this.isAutoReading = false;
    this.autoReadQueue = [];
    this.autoReadTimer = null;

    // DOM Elements
    this.gridContainer = document.getElementById("comicGrid");
    this.storybookContainer = document.getElementById("storybookView");
    this.stageSlideImg = document.getElementById("stageSlideImg");
    this.stageBubblesOverlay = document.getElementById("stageBubblesOverlay");
    this.stagePanelBadge = document.getElementById("stagePanelBadge");
    this.slideDotsContainer = document.getElementById("slideDots");
    this.btnPrevSlide = document.getElementById("btnPrevSlide");
    this.btnNextSlide = document.getElementById("btnNextSlide");
    this.btnAutoRead = document.getElementById("btnAutoRead");
    this.vocabPopover = document.getElementById("vocabPopover");

    this.init();
  }

  init() {
    this.renderGrid();
    this.renderStorybookSlide(0);
    this.bindEvents();
    this.bindTouchGestures();
  }

  setStory(storyId) {
    if (STORIES_DATA[storyId]) {
      this.currentStoryId = storyId;
      this.story = STORIES_DATA[storyId];
      this.currentSlideIndex = 0;
      this.renderGrid();
      this.renderStorybookSlide(0);
    }
  }

  // ==========================================
  // 1. Render 2x2 Comic Grid
  // ==========================================
  renderGrid() {
    if (!this.gridContainer) return;
    this.gridContainer.innerHTML = "";

    this.story.panels.forEach((panel, pIdx) => {
      const panelCard = document.createElement("div");
      panelCard.className = "comic-panel-card";
      panelCard.dataset.panelIndex = pIdx;

      // Header Tag
      const headerTag = document.createElement("div");
      headerTag.className = "panel-header-tag";
      headerTag.innerText = `Panel ${pIdx + 1}`;
      panelCard.appendChild(headerTag);

      // Image & Bubbles wrapper
      const imgWrapper = document.createElement("div");
      imgWrapper.className = "panel-image-wrapper";

      const img = document.createElement("img");
      img.className = "panel-img";
      img.src = panel.image;
      img.alt = panel.altText;
      img.loading = "lazy";
      imgWrapper.appendChild(img);

      // Bubbles Overlay Area
      const bubblesOverlay = document.createElement("div");
      bubblesOverlay.className = "bubbles-overlay";
      bubblesOverlay.id = `grid_overlay_${pIdx}`;

      panel.bubbles.forEach((bubble, bIdx) => {
        const bubbleEl = this.createBubbleElement(bubble, pIdx, bIdx, false);
        bubblesOverlay.appendChild(bubbleEl);
      });

      imgWrapper.appendChild(bubblesOverlay);
      panelCard.appendChild(imgWrapper);

      // Footer note
      const footerNote = document.createElement("div");
      footerNote.className = "panel-footer-note";
      footerNote.innerHTML = `<span class="note-icon">💬</span> <span>${panel.narratorText}</span>`;
      panelCard.appendChild(footerNote);

      this.gridContainer.appendChild(panelCard);
    });
  }

  // ==========================================
  // 2. Render Storybook Single Slide
  // ==========================================
  renderStorybookSlide(slideIdx) {
    if (!this.stageSlideImg || !this.stageBubblesOverlay) return;

    this.currentSlideIndex = Math.max(0, Math.min(this.story.panels.length - 1, slideIdx));
    const panel = this.story.panels[this.currentSlideIndex];

    this.stageSlideImg.src = panel.image;
    this.stageSlideImg.alt = panel.altText;
    this.stagePanelBadge.innerText = `Panel ${this.currentSlideIndex + 1} of ${this.story.panels.length}`;

    // Render Bubbles
    this.stageBubblesOverlay.innerHTML = "";
    panel.bubbles.forEach((bubble, bIdx) => {
      const bubbleEl = this.createBubbleElement(bubble, this.currentSlideIndex, bIdx, true);
      this.stageBubblesOverlay.appendChild(bubbleEl);
    });

    // Update Dots
    this.renderSlideDots();
  }

  renderSlideDots() {
    if (!this.slideDotsContainer) return;
    this.slideDotsContainer.innerHTML = "";
    this.story.panels.forEach((_, idx) => {
      const dot = document.createElement("div");
      dot.className = `slide-dot ${idx === this.currentSlideIndex ? "active" : ""}`;
      dot.addEventListener("click", () => {
        window.cuteVoiceEngine.playSfx("pop");
        this.renderStorybookSlide(idx);
      });
      this.slideDotsContainer.appendChild(dot);
    });
  }

  // ==========================================
  // 3. Speech Bubble Element Creator (Compact -> Expandable)
  // ==========================================
  createBubbleElement(bubble, panelIdx, bubbleIdx, isStorybook = false) {
    const char = this.story.characters[bubble.speaker];
    const orderNum = bubbleIdx + 1; // 1 or 2

    const container = document.createElement("div");
    container.className = "bubble-container";
    container.id = `${isStorybook ? "sb_" : "grid_"}${bubble.id}`;
    container.dataset.panelIndex = panelIdx;
    container.dataset.bubbleOrder = orderNum;

    // Position coordinates
    if (bubble.position) {
      if (bubble.position.top) container.style.top = bubble.position.top;
      if (bubble.position.left) container.style.left = bubble.position.left;
      if (bubble.position.right) container.style.right = bubble.position.right;
    }

    // ----------------------------------------------------
    // A. ULTRA-COMPACT NUMBER PIN (Only number 1 / 2)
    // ----------------------------------------------------
    const triggerBtn = document.createElement("button");
    triggerBtn.className = `bubble-trigger-btn ${orderNum === 1 ? "next-to-play" : ""}`;
    triggerBtn.title = `Step ${orderNum}: Tap to hear ${char.name}`;
    triggerBtn.setAttribute("aria-label", `Listen to ${char.name}, step ${orderNum}`);
    triggerBtn.style.setProperty("--char-color", char.color);

    triggerBtn.innerHTML = `
      <span class="trigger-num">${orderNum}</span>
    `;

    container.appendChild(triggerBtn);

    // ----------------------------------------------------
    // B. EXPANDED SPEECH BUBBLE CARD (Shows on click)
    // ----------------------------------------------------
    const expandedCard = document.createElement("div");
    expandedCard.className = `bubble-expanded-card bubble-${bubble.speaker}`;

    // Avatar inside expanded bubble
    const avatarWrap = document.createElement("div");
    avatarWrap.className = "bubble-avatar-wrap";
    avatarWrap.style.borderColor = char.color;

    const avatarImg = document.createElement("img");
    avatarImg.className = "bubble-avatar-img";
    avatarImg.src = char.avatar;
    avatarImg.alt = char.name;
    avatarWrap.appendChild(avatarImg);

    const badgeDot = document.createElement("div");
    badgeDot.className = "speaker-badge-dot";
    badgeDot.style.backgroundColor = char.color;
    avatarWrap.appendChild(badgeDot);
    expandedCard.appendChild(avatarWrap);

    // Text & Word Spans
    const textSpan = document.createElement("div");
    textSpan.className = "bubble-text-content";

    bubble.words.forEach((wObj, wIdx) => {
      const wSpan = document.createElement("span");
      wSpan.className = `word-span ${wObj.isVocab ? "is-vocab" : ""}`;
      wSpan.dataset.wordIndex = wIdx;
      wSpan.dataset.cleanWord = wObj.clean;
      wSpan.innerText = wObj.word + " ";

      if (wObj.isVocab) {
        wSpan.title = "Tap to learn this word!";
        wSpan.addEventListener("click", (e) => {
          e.stopPropagation();
          this.showVocabPopover(wObj, e.target);
        });
      }

      textSpan.appendChild(wSpan);
    });

    expandedCard.appendChild(textSpan);

    // Close button to collapse bubble back to button
    const closeBtn = document.createElement("button");
    closeBtn.className = "bubble-close-btn";
    closeBtn.innerText = "✕";
    closeBtn.title = "Close bubble";
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      window.cuteVoiceEngine.playSfx("pop");
      container.classList.remove("expanded", "is-speaking");
      const wrapper = container.closest(".panel-image-wrapper, .stage-slide-wrapper");
      if (wrapper) wrapper.classList.remove("has-expanded-bubble");
      window.cuteVoiceEngine.stop();
    });
    expandedCard.appendChild(closeBtn);

    container.appendChild(expandedCard);

    // Click handler on Trigger Button or Card
    triggerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.activateBubble(container, bubble, char, panelIdx, orderNum, isStorybook);
    });

    expandedCard.addEventListener("click", (e) => {
      e.stopPropagation();
      this.activateBubble(container, bubble, char, panelIdx, orderNum, isStorybook);
    });

    return container;
  }

  // ==========================================
  // 4. Activate & Read Bubble with Sequential Hint
  // ==========================================
  activateBubble(containerEl, bubbleData, charConfig, panelIdx, orderNum, isStorybook = false) {
    window.cuteVoiceEngine.playSfx("pop");

    // Collapse other bubbles in the same panel
    const parent = containerEl.parentElement;
    if (parent) {
      parent.querySelectorAll(".bubble-container").forEach(el => {
        if (el !== containerEl) {
          el.classList.remove("expanded", "is-speaking");
        }
      });
    }

    // Set wrapper class to dim inactive pins
    const wrapper = containerEl.closest(".panel-image-wrapper, .stage-slide-wrapper");
    if (wrapper) {
      wrapper.classList.add("has-expanded-bubble");
    }

    // Expand current bubble with highest z-index
    containerEl.classList.add("expanded", "is-speaking");
    containerEl.querySelector(".bubble-trigger-btn").classList.remove("next-to-play");

    const wordSpans = containerEl.querySelectorAll(".word-span");
    const timings = bubbleData.words ? bubbleData.words.map(w => w.time !== undefined ? w.time : 0) : [];

    window.cuteVoiceEngine.playDialogueAudio(bubbleData.id, bubbleData.text, {
      characterId: bubbleData.speaker,
      wordTimings: timings,
      onStart: () => {
        if (wordSpans.length > 0) {
          wordSpans[0].classList.add("highlighted");
        }
      },
      onWord: (wordIndex) => {
        wordSpans.forEach(s => s.classList.remove("highlighted"));
        if (wordSpans[wordIndex]) {
          wordSpans[wordIndex].classList.add("highlighted");
        }
      },
      onEnd: () => {
        containerEl.classList.remove("is-speaking");
        wordSpans.forEach(s => s.classList.remove("highlighted"));

        // If this was Step 1, highlight Step 2 button to guide sequence!
        if (orderNum === 1 && parent) {
          const nextBtn = parent.querySelector('.bubble-container[data-bubble-order="2"] .bubble-trigger-btn');
          if (nextBtn) {
            nextBtn.classList.add("next-to-play");
            window.cuteVoiceEngine.playSfx("sparkle");
          }
        }
      }
    });
  }

  // ==========================================
  // 5. Auto "Read to Me" Sequence
  // ==========================================
  startAutoRead() {
    if (this.isAutoReading) {
      this.stopAutoRead();
      return;
    }

    this.isAutoReading = true;
    if (this.btnAutoRead) {
      this.btnAutoRead.innerHTML = "⏹️ Stop";
      this.btnAutoRead.classList.add("btn-speaking");
    }

    // Build speech queue of all bubbles in order (Panel 1 Bubble 1 -> Bubble 2 -> Panel 2 ...)
    this.autoReadQueue = [];
    this.story.panels.forEach((panel, pIdx) => {
      panel.bubbles.forEach((bubble, bIdx) => {
        this.autoReadQueue.push({
          panelIndex: pIdx,
          bubbleIndex: bIdx,
          bubble: bubble,
          char: this.story.characters[bubble.speaker]
        });
      });
    });

    this.executeNextAutoReadItem(0);
  }

  stopAutoRead() {
    this.isAutoReading = false;
    window.cuteVoiceEngine.stop();
    if (this.btnAutoRead) {
      this.btnAutoRead.innerHTML = "🔊 Read to Me";
      this.btnAutoRead.classList.remove("btn-speaking");
    }
    document.querySelectorAll(".bubble-container").forEach(el => el.classList.remove("expanded", "is-speaking"));
    document.querySelectorAll(".word-span.highlighted").forEach(el => el.classList.remove("highlighted"));
  }

  executeNextAutoReadItem(index) {
    if (!this.isAutoReading || index >= this.autoReadQueue.length) {
      this.stopAutoRead();
      window.cuteVoiceEngine.playSfx("cheer");
      return;
    }

    const item = this.autoReadQueue[index];

    // If in storybook mode, switch slide to current panel
    if (this.currentViewMode === "storybook" && this.currentSlideIndex !== item.panelIndex) {
      this.renderStorybookSlide(item.panelIndex);
    }

    // Locate bubble element in DOM
    const prefix = this.currentViewMode === "storybook" ? "sb_" : "grid_";
    const containerEl = document.getElementById(`${prefix}${item.bubble.id}`);

    if (containerEl) {
      this.activateBubble(containerEl, item.bubble, item.char, item.panelIndex, item.bubbleIndex + 1, this.currentViewMode === "storybook");

      const wordCount = item.bubble.words ? item.bubble.words.length : 6;
      const estimatedDuration = Math.max(2200, wordCount * 450);

      this.autoReadTimer = setTimeout(() => {
        this.executeNextAutoReadItem(index + 1);
      }, estimatedDuration + 600);
    } else {
      this.executeNextAutoReadItem(index + 1);
    }
  }

  // ==========================================
  // 6. Vocabulary Popover Card
  // ==========================================
  showVocabPopover(vocabObj, targetElement) {
    if (!this.vocabPopover) return;

    window.cuteVoiceEngine.playSfx("sparkle");

    const wordEl = this.vocabPopover.querySelector(".vocab-pop-word");
    const meaningEl = this.vocabPopover.querySelector(".vocab-pop-meaning");
    const speakBtn = this.vocabPopover.querySelector(".vocab-pop-speak-btn");

    wordEl.innerHTML = `${vocabObj.emoji || "✨"} ${vocabObj.clean}`;
    meaningEl.innerText = vocabObj.meaning || "A fun English word!";

    const audioKey = `vocab_${vocabObj.clean}`;
    speakBtn.onclick = () => {
      window.cuteVoiceEngine.playDialogueAudio(audioKey, vocabObj.clean, {
        characterId: "dot"
      });
    };

    // Position Popover near target
    const rect = targetElement.getBoundingClientRect();
    const top = Math.min(window.innerHeight - 150, Math.max(20, rect.bottom + window.scrollY + 10));
    const left = Math.min(window.innerWidth - 300, Math.max(20, rect.left + window.scrollX - 20));

    this.vocabPopover.style.top = `${top}px`;
    this.vocabPopover.style.left = `${left}px`;
    this.vocabPopover.classList.add("active");

    // Automatically speak the word
    window.cuteVoiceEngine.playDialogueAudio(audioKey, vocabObj.clean, {
      characterId: "dot"
    });
  }

  hideVocabPopover() {
    if (this.vocabPopover) {
      this.vocabPopover.classList.remove("active");
    }
  }

  // ==========================================
  // 7. Navigation & Touch Gestures
  // ==========================================
  bindEvents() {
    if (this.btnPrevSlide) {
      this.btnPrevSlide.addEventListener("click", () => {
        window.cuteVoiceEngine.playSfx("pop");
        this.renderStorybookSlide(this.currentSlideIndex - 1);
      });
    }

    if (this.btnNextSlide) {
      this.btnNextSlide.addEventListener("click", () => {
        window.cuteVoiceEngine.playSfx("pop");
        this.renderStorybookSlide(this.currentSlideIndex + 1);
      });
    }

    if (this.btnAutoRead) {
      this.btnAutoRead.addEventListener("click", () => {
        this.startAutoRead();
      });
    }

    // Dismiss vocab popover & expanded bubbles on click outside
    document.addEventListener("click", (e) => {
      if (this.vocabPopover && !this.vocabPopover.contains(e.target) && !e.target.classList.contains("is-vocab")) {
        this.hideVocabPopover();
      }

      // If clicked outside any bubble container and not during auto-read, collapse expanded bubbles
      if (!this.isAutoReading && !e.target.closest(".bubble-container") && !e.target.closest(".control-navbar")) {
        document.querySelectorAll(".bubble-container.expanded").forEach(el => {
          el.classList.remove("expanded", "is-speaking");
        });
        document.querySelectorAll(".has-expanded-bubble").forEach(el => {
          el.classList.remove("has-expanded-bubble");
        });
      }
    });

    const popoverClose = document.querySelector(".vocab-pop-close");
    if (popoverClose) {
      popoverClose.addEventListener("click", () => this.hideVocabPopover());
    }

    // Character Emote Buttons
    document.querySelectorAll(".char-avatar-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const charId = btn.dataset.character;
        const char = this.story.characters[charId];
        if (char) {
          window.cuteVoiceEngine.playSfx("boing");
          btn.style.animation = "characterWobble 0.5s ease";
          setTimeout(() => btn.style.animation = "", 500);
          window.cuteVoiceEngine.playDialogueAudio(`emote_${charId}`, char.sillyReaction, {
            characterId: charId
          });
        }
      });
    });
  }

  bindTouchGestures() {
    const stage = document.getElementById("storybookStage");
    if (!stage) return;

    let touchStartX = 0;
    let touchEndX = 0;

    stage.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    stage.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipeGesture(touchStartX, touchEndX);
    }, { passive: true });
  }

  handleSwipeGesture(startX, endX) {
    const diff = endX - startX;
    const threshold = 50; // swipe threshold in px

    if (diff < -threshold) {
      // Swiped Left -> Next Slide
      if (this.currentSlideIndex < this.story.panels.length - 1) {
        window.cuteVoiceEngine.playSfx("pop");
        this.renderStorybookSlide(this.currentSlideIndex + 1);
      }
    } else if (diff > threshold) {
      // Swiped Right -> Prev Slide
      if (this.currentSlideIndex > 0) {
        window.cuteVoiceEngine.playSfx("pop");
        this.renderStorybookSlide(this.currentSlideIndex - 1);
      }
    }
  }

  setViewMode(mode) {
    this.currentViewMode = mode;
    this.stopAutoRead();

    if (mode === "grid") {
      this.gridContainer.style.display = "grid";
      this.storybookContainer.classList.remove("active");
    } else {
      this.gridContainer.style.display = "none";
      this.storybookContainer.classList.add("active");
      this.renderStorybookSlide(this.currentSlideIndex);
    }
  }
}
