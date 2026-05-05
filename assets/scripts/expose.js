// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // 1. Element Selectors
  const hornSelect = document.getElementById('horn-select');
  const imageDisplay = document.querySelector('#expose img');
  const audioPlayer = document.querySelector('audio');
  
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  
  const playButton = document.querySelector('button');

  // Initialize the confetti library (already included in your starter project)
  const jsConfetti = new JS_Confetti(); 

  // 2. Horn Selection
  // When the dropdown changes, update the image and the audio source
  hornSelect.addEventListener('change', (event) => {
    const selectedHorn = event.target.value;
    
    imageDisplay.src = `assets/images/${selectedHorn}.svg`;
    imageDisplay.alt = `${selectedHorn} selected`;
    audioPlayer.src = `assets/audio/${selectedHorn}.mp3`;
  });

  // 3. Volume Control
  // Using 'input' event so the icon updates in real-time as the slider moves
  volumeSlider.addEventListener('input', (event) => {
    const volumeValue = event.target.value;
    
    // The audio element volume property ranges from 0.0 to 1.0
    audioPlayer.volume = volumeValue / 100;

    // Update Volume Icons based on thresholds (0, 1-32, 33-66, 67-100)
    if (volumeValue == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Mute';
    } else if (volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume Level 1';
    } else if (volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume Level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume Level 3';
    }
  });

  // 4. Play Sound & Confetti
  playButton.addEventListener('click', () => {
    // Play the audio sound
    audioPlayer.play();

    // If "Party Horn" is selected, shoot confetti
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}