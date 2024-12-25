// Song list
// script.js

// Select DOM elements
const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');

// Play music
playButton.addEventListener('click', () => {
  audio.play();
});

// Pause music
pauseButton.addEventListener('click', () => {
  audio.pause();
});

// Stop music
stopButton.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0; // Reset to start
});
