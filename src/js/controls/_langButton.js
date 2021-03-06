import translateElements from '../transl/_translateElements';
import insertCoords from '../createElem/_coords';
import recognition from '../speech/speechRecognition';

function langSelect() {
  const select = document.getElementById('lang');
  select.onchange = () => {
    const currentLang = localStorage.getItem('lang');
    const changedLang = select.value;
    if (currentLang !== changedLang) {
      recognition.lang = changedLang;
      localStorage.setItem('lang', changedLang);
      translateElements();
      insertCoords('lang');
    }
  };
}

export default langSelect;
