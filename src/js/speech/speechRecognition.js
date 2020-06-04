const recognition = new (window.SpeechRecognition
  || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
const lang = localStorage.getItem('lang');
recognition.lang = lang;
recognition.interimResults = false;
recognition.maxAlternatives = 5;

export default recognition;
