import recognition from '../speech/speechRecognition';
import getLocByCoords from '../api/_openCage';
import speek from '../speech/speechSynthes';

const speechRecButton = document.querySelector('.button_mic');
const status = () => speechRecButton.classList.contains('button_mic--active');

function speechRecStop() {
  status() ? recognition.start() : recognition.abort();
}

function speechRec() {
  speechRecButton.addEventListener('click', () => {
    speechRecButton.classList.toggle('button_mic--active');
    if (status()) {
      recognition.start();
      recognition.onresult = function ev(event) {
        const results = event.results[0][0].transcript;
        const inputSearch = document.querySelector('.mapboxgl-ctrl-geocoder--input');
        switch (results) {
          case 'weather':
          case 'forecast':
            return speek();
          case 'louder':
            return speek(1);
          case 'quieter':
            return speek(0.1);
          default:
            recognition.stop();
            inputSearch.value = results;
            getLocByCoords(false, results);
        }
      };
      recognition.onend = function stop() {
        speechRecStop();
      };
    }
    if (!status()) {
      recognition.stop();
      recognition.abort();
    }
  });
}


export default speechRec;
