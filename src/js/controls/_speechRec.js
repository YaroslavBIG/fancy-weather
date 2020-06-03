import recognition from '../speech/speechRecognition';
import getLocByCoords from '../api/_openCage';
import insertCoords from '../createElem/_coords';
import addMap from '../createElem/map/_mapCreate';
import getWeather from '../api/_openWeather';

function speechRec() {
  const speechRecButton = document.querySelector('.button_mic');
  speechRecButton.addEventListener('click', () => {
    speechRecButton.classList.toggle('button_mic--active');
    const status = () => speechRecButton.classList.contains('button_mic--active');
    if (status()) {
      recognition.start();
      recognition.onresult = async function ev(event) {
        const results = event.results[0][0].transcript;
        const inputSearch = document.querySelector('.mapboxgl-ctrl-geocoder--input');
        inputSearch.value = results;
        try {
          await getLocByCoords(false, results);
          const lat = sessionStorage.getItem('latitude');
          const lng = sessionStorage.getItem('longitude');
          await insertCoords(true);
          await addMap(lat, lng, true);
        } catch (e) {
          return e;
        }
        await getWeather();
        recognition.stop();
        inputSearch.value = results;
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
