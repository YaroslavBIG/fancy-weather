const recognition = new (window.SpeechRecognition
  || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
const lang = localStorage.getItem('lang');
recognition.lang = lang;
recognition.interimResults = false;
recognition.maxAlternatives = 5;
// recognition.start();

// function speechRec() {
//   recognition.onresult = function (event) {
//     console.log('You said: ', event.results[0][0].transcript);
//     recognition.stop();
//   };
//   recognition.onend = function () {
//     recognition.start();
//   };
// }

// [
//   'onaudiostart',
//   'onaudioend',
//   // 'onend',
//   'onerror',
//   'onnomatch',
//   // 'onresult',
//   'onsoundstart',
//   'onsoundend',
//   'onspeechend',
//   'onstart',
// ].forEach((eventName) => {
//   recognition[eventName] = function (e) {
//     console.log(eventName, e);
//   };
// });


export default recognition;
