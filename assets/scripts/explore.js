// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const textArea = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('#explore img');

  let voices = [];

  /**
   * Populates the dropdown with available browser voices.
   */
  function populateVoiceList() {
    voices = synth.getVoices();

    // Clear existing options to prevent duplicates on re-renders
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  // Voices are loaded asynchronously; handle both immediate and delayed loading
  populateVoiceList();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
  }

  /**
   * Handles the 'Press to Talk' button click.
   */
  talkButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textArea.value);
    const selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute('data-name');

    // Find the voice object that matches the user selection
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedVoiceName) {
        utterance.voice = voices[i];
      }
    }

    // Animation: Swap to open mouth when speaking starts
    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Smiling face with mouth open';
    };

    // Animation: Swap back to closed mouth when speaking ends
    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    };

    synth.speak(utterance);
  });
}