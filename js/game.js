/**
 * FunFact Comics - ESL Quiz & Animal Fact Discovery Game Engine
 * Features:
 * 1. Voiced quiz options: Kid taps an option to hear the cute kid voice reading it aloud
 * 2. Selection state with glowing card & sound feedback
 * 3. Submit Answer button: Kid confirms choice to check answer
 * 4. Star score celebration with confetti canvas
 */

class QuizGame {
  constructor() {
    this.currentStoryId = "fiona_pink_secret";
    this.story = STORIES_DATA[this.currentStoryId];
    this.currentQuestionIdx = 0;
    this.score = 0;
    this.selectedOption = null;
    this.selectedBtnEl = null;

    // DOM Elements
    this.quizModal = document.getElementById("quizModal");
    this.factModal = document.getElementById("factModal");
    this.quizCard = document.getElementById("quizCard");
    this.quizCelebration = document.getElementById("quizCelebration");
    this.quizQuestionText = document.getElementById("quizQuestionText");
    this.quizOptionsList = document.getElementById("quizOptionsList");
    this.btnSubmitQuizAnswer = document.getElementById("btnSubmitQuizAnswer");
    this.quizFeedbackBox = document.getElementById("quizFeedbackBox");
    this.quizAudioRepeatBtn = document.getElementById("quizAudioRepeatBtn");
    this.quizBadge = document.getElementById("quizBadge");
    this.starRatingBox = document.getElementById("starRatingBox");
    this.btnRestartQuiz = document.getElementById("btnRestartQuiz");
    this.confettiCanvas = document.getElementById("confettiCanvas");

    this.bindEvents();
  }

  setStory(storyId) {
    if (STORIES_DATA[storyId]) {
      this.currentStoryId = storyId;
      this.story = STORIES_DATA[storyId];
    }
  }

  openQuiz() {
    this.currentQuestionIdx = 0;
    this.score = 0;
    this.selectedOption = null;
    this.selectedBtnEl = null;
    this.quizCard.style.display = "block";
    this.quizCelebration.classList.remove("active");
    this.quizModal.classList.add("active");
    window.cuteVoiceEngine.playSfx("sparkle");
    this.renderQuestion(0);
  }

  closeQuiz() {
    this.quizModal.classList.remove("active");
    window.cuteVoiceEngine.stop();
  }

  openFactModal() {
    const fact = this.story.funFactCard;
    if (!fact) return;

    document.getElementById("factModalTitle").innerText = fact.factTitle;
    document.getElementById("factModalSummary").innerText = fact.summary;
    document.getElementById("factModalQuestion").innerText = fact.funQuestion;

    this.factModal.classList.add("active");
    window.cuteVoiceEngine.playSfx("sparkle");

    // Read fact aloud using neural voice
    window.cuteVoiceEngine.playDialogueAudio("fact_fiona", `${fact.factTitle}. ${fact.summary}`, {
      characterId: "dot"
    });
  }

  closeFactModal() {
    this.factModal.classList.remove("active");
    window.cuteVoiceEngine.stop();
  }

  renderQuestion(index) {
    const questions = this.story.quizQuestions;
    if (index >= questions.length) {
      this.showCelebration();
      return;
    }

    this.currentQuestionIdx = index;
    const qData = questions[index];

    this.selectedOption = null;
    this.selectedBtnEl = null;

    this.quizBadge.innerText = `Question ${index + 1} of ${questions.length}`;
    this.quizQuestionText.innerText = qData.question;
    this.quizFeedbackBox.classList.remove("active");
    this.quizOptionsList.innerHTML = "";

    // Reset and disable Submit button until child selects an option
    if (this.btnSubmitQuizAnswer) {
      this.btnSubmitQuizAnswer.disabled = true;
      this.btnSubmitQuizAnswer.innerHTML = "<span>✅ Check Answer!</span>";
    }

    // Speak question aloud using neural voice
    const audioKey = `quiz_${qData.id}`;
    window.cuteVoiceEngine.playDialogueAudio(audioKey, qData.audioPrompt || qData.question, {
      characterId: "dot"
    });

    // Audio repeat button
    this.quizAudioRepeatBtn.onclick = () => {
      window.cuteVoiceEngine.playSfx("pop");
      window.cuteVoiceEngine.playDialogueAudio(audioKey, qData.audioPrompt || qData.question, {
        characterId: "dot"
      });
    };

    // Render Option Cards with Voice Triggers
    qData.options.forEach((opt) => {
      const optBtn = document.createElement("button");
      optBtn.className = "quiz-option-card";
      optBtn.innerHTML = `
        <span class="quiz-option-emoji">${opt.emoji || "⭐"}</span>
        <span>${opt.text}</span>
        <span class="quiz-option-audio-icon" title="Listen to this option">🔊</span>
      `;

      optBtn.addEventListener("click", () => {
        this.selectOption(opt, optBtn);
      });

      this.quizOptionsList.appendChild(optBtn);
    });
  }

  // 1. Kid taps an option: Plays the kid voice & marks card as selected
  selectOption(optionObj, buttonEl) {
    window.cuteVoiceEngine.playSfx("pop");

    // Remove selected state from all option cards
    const allButtons = this.quizOptionsList.querySelectorAll(".quiz-option-card");
    allButtons.forEach(btn => btn.classList.remove("selected"));

    // Set selected
    buttonEl.classList.add("selected");
    this.selectedOption = optionObj;
    this.selectedBtnEl = buttonEl;

    // Enable the Submit button with glowing invitation
    if (this.btnSubmitQuizAnswer) {
      this.btnSubmitQuizAnswer.disabled = false;
    }

    // Play the option's audio aloud
    if (optionObj.audioId) {
      window.cuteVoiceEngine.playDialogueAudio(optionObj.audioId, optionObj.text, {
        characterId: "dot"
      });
    }
  }

  // 2. Kid taps Submit: Checks the answer & gives cheerful feedback
  handleSubmitAnswer() {
    if (!this.selectedOption || !this.selectedBtnEl) return;

    const qData = this.story.quizQuestions[this.currentQuestionIdx];
    const allButtons = this.quizOptionsList.querySelectorAll(".quiz-option-card");

    // Disable buttons during evaluation
    allButtons.forEach(btn => btn.disabled = true);
    if (this.btnSubmitQuizAnswer) this.btnSubmitQuizAnswer.disabled = true;

    if (this.selectedOption.isCorrect) {
      this.score++;
      this.selectedBtnEl.classList.add("correct");
      window.cuteVoiceEngine.playSfx("correct");
      this.quizFeedbackBox.innerText = `🎉 ${qData.explanation}`;
      this.quizFeedbackBox.style.color = "#10AC84";
      this.quizFeedbackBox.classList.add("active");

      const correctAudioKey = `quiz_${qData.id}_correct`;
      window.cuteVoiceEngine.playDialogueAudio(correctAudioKey, qData.explanation, {
        characterId: "dot",
        onEnd: () => {
          // Wait for the full explanation voice to finish completely before advancing!
          setTimeout(() => {
            this.renderQuestion(this.currentQuestionIdx + 1);
          }, 800);
        }
      });
    } else {
      this.selectedBtnEl.classList.add("wrong");
      window.cuteVoiceEngine.playSfx("wrong");
      this.quizFeedbackBox.innerText = `💡 Oops! Try listening again!`;
      this.quizFeedbackBox.style.color = "#EE5253";
      this.quizFeedbackBox.classList.add("active");

      setTimeout(() => {
        allButtons.forEach(btn => {
          btn.disabled = false;
          btn.classList.remove("wrong", "selected");
        });
        this.selectedOption = null;
        this.selectedBtnEl = null;
        if (this.btnSubmitQuizAnswer) this.btnSubmitQuizAnswer.disabled = true;
        this.quizFeedbackBox.classList.remove("active");
      }, 1500);
    }
  }

  showCelebration() {
    this.quizCard.style.display = "none";
    this.quizCelebration.classList.add("active");

    // Star Rating
    this.starRatingBox.innerHTML = "";
    const totalQ = this.story.quizQuestions.length;
    for (let i = 0; i < totalQ; i++) {
      const star = document.createElement("span");
      star.className = `star-item ${i < this.score ? "filled" : ""}`;
      star.innerText = i < this.score ? "⭐" : "☆";
      star.style.animationDelay = `${i * 0.2}s`;
      this.starRatingBox.appendChild(star);
    }

    // Audio & SFX Celebration
    window.cuteVoiceEngine.playSfx("cheer");
    setTimeout(() => {
      window.cuteVoiceEngine.playDialogueAudio("quiz_win", "Super job! You are a FunFact Animal Champion! Meow and yay!", {
        characterId: "pip"
      });
    }, 400);

    // Launch Confetti Animation
    this.launchConfetti();
  }

  launchConfetti() {
    const canvas = this.confettiCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ["#FF6B8B", "#FECA57", "#48DBFB", "#1DD1A1", "#FF9FF3", "#54A0FF"];

    for (let i = 0; i < 90; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        r: Math.random() * 8 + 4,
        d: Math.random() * 80 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.floor(Math.random() * 10) - 10,
        tiltAngleInc: Math.random() * 0.07 + 0.05,
        tiltAngle: 0
      });
    }

    let animationFrame;
    const updateConfetti = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = 0;

      pieces.forEach((p) => {
        p.tiltAngle += p.tiltAngleInc;
        p.y += (Math.cos(p.d) + 3 + p.r / 2) / 1.5;
        p.tilt = Math.sin(p.tiltAngle - alive / 3) * 15;

        if (p.y <= canvas.height) {
          alive++;
          ctx.beginPath();
          ctx.lineWidth = p.r / 2;
          ctx.strokeStyle = p.color;
          ctx.fillStyle = p.color;
          ctx.save();
          ctx.translate(p.x + p.tilt, p.y);
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });

      if (alive > 0) {
        animationFrame = requestAnimationFrame(updateConfetti);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animationFrame);
      }
    };

    updateConfetti();
  }

  bindEvents() {
    const btnQuizTrigger = document.getElementById("btnQuizTrigger");
    if (btnQuizTrigger) {
      btnQuizTrigger.addEventListener("click", () => this.openQuiz());
    }

    const btnFactTrigger = document.getElementById("btnFactTrigger");
    if (btnFactTrigger) {
      btnFactTrigger.addEventListener("click", () => this.openFactModal());
    }

    const quizClose = document.getElementById("quizModalClose");
    if (quizClose) {
      quizClose.addEventListener("click", () => this.closeQuiz());
    }

    const factClose = document.getElementById("factModalClose");
    if (factClose) {
      factClose.addEventListener("click", () => this.closeFactModal());
    }

    if (this.btnSubmitQuizAnswer) {
      this.btnSubmitQuizAnswer.addEventListener("click", () => this.handleSubmitAnswer());
    }

    if (this.btnRestartQuiz) {
      this.btnRestartQuiz.addEventListener("click", () => {
        this.openQuiz();
      });
    }
  }
}
