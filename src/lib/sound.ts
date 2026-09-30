// Minimal WebAudio blips for narrative beats (glitch, system failure).
// Silent by design until the first user gesture unlocks the AudioContext,
// and every call is guarded — audio must never break the experience.

let context: AudioContext | null = null;
let unlocked = false;

export function unlockAudio(): void {
  if (typeof window === "undefined" || unlocked) return;
  try {
    const Ctor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return;
    if (!context) context = new Ctor();
    void context.resume();
    unlocked = true;
  } catch {
    context = null;
  }
}

export function blip(frequency = 880, durationMs = 90): void {
  if (!unlocked || !context) return;
  try {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "square";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.04, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + durationMs / 1000);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + durationMs / 1000);
  } catch {
    // Audio is decorative; ignore failures.
  }
}
