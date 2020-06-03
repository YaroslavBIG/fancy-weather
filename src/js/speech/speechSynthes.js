function speek() {
  const speech = sessionStorage.getItem('speech');
  const speechButton = document.querySelector('.button_speak');
  const synthesis = new SpeechSynthesisUtterance();
  synthesis.lang = localStorage.getItem('lang');
  synthesis.text = speech;
  synthesis.onstart = speechButton.classList.add('button_speak--active');
  synthesis.onend = setTimeout(() => speechButton.classList.remove('button_speak--active'), 10000);
  synthesis.onerror = speechButton.classList.remove('button_speak--active');
  speechSynthesis.speak(synthesis);
}

export default speek;
