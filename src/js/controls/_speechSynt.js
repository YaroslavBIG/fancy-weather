import speek from '../speech/speechSynthes';

function speechSynt() {
  const speechButton = document.querySelector('.button_speak');
  speechButton.addEventListener('click', speek);
}

export default speechSynt;
