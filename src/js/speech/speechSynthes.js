import recognition from './speechRecognition';

function speek(volume = 0.5) {
  const speech = sessionStorage.getItem('speech');
  const speechButton = document.querySelector('.button_speak');
  const synthesis = new SpeechSynthesisUtterance();
  synthesis.lang = localStorage.getItem('lang');
  synthesis.text = speech;
  synthesis.volume = volume;
  synthesis.onstart = () => {
    speechButton.classList.add('button_speak--active');
    recognition.stop();
  };
  synthesis.onend = () => setTimeout(() => {
    speechButton.classList.remove('button_speak--active');
  }, 3000);
  synthesis.onerror = () => speechButton.classList.remove('button_speak--active');
  speechSynthesis.speak(synthesis);
}

export default speek;
