/**
 * FunFact Comics - Studio Neural Audio & Voice Engine
 * Features:
 * 1. Studio Neural MP3 Audio Player with zero latency & 100% offline capability
 * 2. Real-time requestAnimationFrame audio-clock synchronization for millisecond-perfect word karaoke
 * 3. Procedural Web Audio API Sound Effects (pop, sparkle, boing, correct, wrong, cheer)
 * 4. Fallback to Web Speech API if offline/file missing
 */

class CuteVoiceEngine {
  constructor() {
    this.currentAudio = null;
    this.isSpeaking = false;
    this.audioCtx = null;
    this.speechRateMultiplier = 1.0;
    this.karaokeRaf = null;

    // Fallback Web Speech API
    this.synth = window.speechSynthesis;

    this.initAudioContext();
    this.unlockAudioOnFirstTouch();
  }

  initAudioContext() {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    } catch (e) {
      console.warn("Web Audio API not supported", e);
    }
  }

  unlockAudioOnFirstTouch() {
    const unlock = () => {
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      document.removeEventListener('touchstart', unlock, true);
      document.removeEventListener('click', unlock, true);
    };

    document.addEventListener('touchstart', unlock, true);
    document.addEventListener('click', unlock, true);
  }

  stop() {
    if (this.karaokeRaf) {
      cancelAnimationFrame(this.karaokeRaf);
      this.karaokeRaf = null;
    }
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    if (this.synth) {
      this.synth.cancel();
    }
    this.isSpeaking = false;
  }

  /**
   * Plays Studio Neural MP3 with precise audio-clock synchronized word karaoke
   * @param {string} audioId - ID of audio file (e.g. 'p1_b1')
   * @param {string} text - Fallback text
   * @param {object} options - { wordTimings: [0.05, 0.45, ...], onStart, onWord, onEnd }
   */
  playDialogueAudio(audioId, text, options = {}) {
    this.stop();

    const audioSrc = `assets/audio/${audioId}.mp3`;
    const audio = new Audio(audioSrc);
    this.currentAudio = audio;
    audio.playbackRate = this.speechRateMultiplier;

    const timings = options.wordTimings || [];
    const words = text.trim().split(/\s+/);

    audio.onplay = () => {
      this.isSpeaking = true;
      if (options.onStart) options.onStart();

      let lastActiveIdx = -1;

      // High-precision frame synchronization against audio.currentTime
      const syncKaraoke = () => {
        if (!this.isSpeaking || !this.currentAudio) return;

        const curTime = this.currentAudio.currentTime;

        let activeIdx = 0;
        if (timings.length > 0) {
          // Find the latest word timing passed
          for (let i = 0; i < timings.length; i++) {
            if (curTime >= timings[i]) {
              activeIdx = i;
            }
          }
        } else {
          // Fallback linear interpolation
          const duration = this.currentAudio.duration || (words.length * 0.35);
          activeIdx = Math.min(words.length - 1, Math.floor((curTime / duration) * words.length));
        }

        if (activeIdx !== lastActiveIdx) {
          lastActiveIdx = activeIdx;
          if (options.onWord) options.onWord(activeIdx);
        }

        this.karaokeRaf = requestAnimationFrame(syncKaraoke);
      };

      this.karaokeRaf = requestAnimationFrame(syncKaraoke);
    };

    audio.onended = () => {
      this.isSpeaking = false;
      if (this.karaokeRaf) {
        cancelAnimationFrame(this.karaokeRaf);
        this.karaokeRaf = null;
      }
      if (options.onEnd) options.onEnd();
    };

    audio.onerror = (e) => {
      console.warn(`Neural MP3 (${audioSrc}) not found, falling back to speech synth:`, e);
      this.speakFallback(text, options);
    };

    audio.play().catch(err => {
      console.warn("Audio play blocked, using fallback:", err);
      this.speakFallback(text, options);
    });
  }

  /**
   * Fallback Web Speech API in case audio file is missing
   */
  speakFallback(text, options = {}) {
    if (!this.synth) {
      if (options.onEnd) options.onEnd();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1.35;
    utterance.rate = 0.95 * this.speechRateMultiplier;

    utterance.onstart = () => {
      this.isSpeaking = true;
      if (options.onStart) options.onStart();
    };
    utterance.onend = () => {
      this.isSpeaking = false;
      if (options.onEnd) options.onEnd();
    };
    utterance.onerror = () => {
      this.isSpeaking = false;
      if (options.onEnd) options.onEnd();
    };

    this.synth.speak(utterance);
  }

  // Cute procedural Web Audio Sound Effects
  playSfx(type) {
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    switch (type) {
      case 'pop': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(1040, now + 0.07);
        gain.gain.setValueAtTime(0.28, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.07);
        break;
      }

      case 'sparkle': {
        const notes = [587.33, 739.99, 880.00, 1174.66]; // D5, F#5, A5, D6
        notes.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const noteTime = now + (i * 0.05);
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, noteTime);
          gain.gain.setValueAtTime(0.2, noteTime);
          gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.18);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(noteTime);
          osc.stop(noteTime + 0.18);
        });
        break;
      }

      case 'boing': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.linearRampToValueAtTime(560, now + 0.12);
        osc.frequency.linearRampToValueAtTime(360, now + 0.22);
        osc.frequency.linearRampToValueAtTime(720, now + 0.35);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
        break;
      }

      case 'correct': {
        const triad = [587.33, 739.99, 880.00, 1174.66]; // D Major Arpeggio
        triad.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const t = now + (idx * 0.08);
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, t);
          gain.gain.setValueAtTime(0.28, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.28);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t);
          osc.stop(t + 0.28);
        });
        break;
      }

      case 'wrong': {
        const freqs = [380, 290];
        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const t = now + (idx * 0.12);
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, t);
          gain.gain.setValueAtTime(0.2, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t);
          osc.stop(t + 0.12);
        });
        break;
      }

      case 'cheer': {
        const chord = [587.33, 739.99, 880.00, 1174.66, 1479.98];
        chord.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const t = now + (idx * 0.05);
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, t);
          gain.gain.setValueAtTime(0.22, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t);
          osc.stop(t + 0.6);
        });
        break;
      }

      case 'star': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1318.51, now); // E6
        osc.frequency.exponentialRampToValueAtTime(1975.53, now + 0.1); // B6
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
        break;
      }
    }
  }
}

// Global audio engine instance
window.cuteVoiceEngine = new CuteVoiceEngine();
