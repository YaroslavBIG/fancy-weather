function speek() {
  // const result;
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(document.getElementById('speekInput').value));
}

export default speek;
