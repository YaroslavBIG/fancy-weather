import changeBg from '../createElem/_changeBg';

function refreshBackroundButton() {
  const refrBtn = document.querySelector('.button_refresh');
  refrBtn.addEventListener('click', changeBg);
}

export default refreshBackroundButton;
