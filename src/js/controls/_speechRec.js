import recognition from '../speech/speechRecognition';
import getLocByCoords from '../api/_openCage';

function speechRec() {
  const speechRecButton = document.querySelector('.button_mic');
  speechRecButton.addEventListener('click', () => {
    speechRecButton.classList.toggle('button_mic--active');
    const status = () => speechRecButton.classList.contains('button_mic--active');
    if (status()) {
      recognition.start();
      recognition.onresult = function ev(event) {
        const results = event.results[0][0].transcript;
        const inputSearch = document.querySelector('.mapboxgl-ctrl-geocoder--input');
        inputSearch.value = results;
        recognition.stop();
        inputSearch.value = results;
        getLocByCoords(false, results);
      };
      recognition.onend = function stop() {
        status() ? recognition.start() : recognition.abort();
      };
    }
    if (!status()) {
      recognition.stop();
      recognition.abort();
    }
  });
}

export default speechRec;
