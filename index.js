const audio = new Audio('carSound.mp3');
audio.loop = true;

// Play after first click anywhere
document.addEventListener('click', () => {
  audio.play().catch(e => console.log("Play error:", e));
}, { once: true });