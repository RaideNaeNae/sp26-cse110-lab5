// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // 1. Element Selectors
  // Using getElementById and querySelector as recommended
  const hornSelect = document.getElementById('horn-select');
  const image = document.querySelector('#expose img');
  const audio = document.querySelector('audio');
  
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  
  const playButton = document.querySelector('button');

  // Initialize the confetti library (already included in the starter assets)
  const jsConfetti = new JSConfetti();

  // 2. Horn Selection Logic
  // Listens for 'change' to update the visual and audio assets
  hornSelect.addEventListener('change', (event) => {
    const selectedHorn = event.target.value;
    
    image.src = `assets/images/${selectedHorn}.svg`;
    image.alt = `${selectedHorn} selected`;
    audio.src = `assets/audio/${selectedHorn}.mp3`;
  });

  // 3. Volume Control Logic
  // Listens for 'input' to update volume and icons in real-time
  volumeSlider.addEventListener('input', (event) => {
    const vol = event.target.value;
    
    // Convert 0-100 slider value to 0.0-1.0 for the audio element
    audio.volume = vol / 100;

    // Icon state logic based on thresholds
    if (vol == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (vol < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (vol < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });

  // 4. Play Button Logic
  playButton.addEventListener('click', () => {
    // Play the selected horn sound
    audio.play();

    // Special case: Trigger confetti only if 'Party Horn' is selected
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}