import changeBg from './js/createElem/_changeBg';
import geoLoc from './js/api/_getCoords';
import unitsSelect from './js/controls/_units';
import langSelect from './js/controls/_langButton';
import langSave from './js/createElem/_lang';
import startMarquee from './js/createElem/weather/_marquee';
import getTime from './js/createElem/_setClock';

function addEv() {
  const refrBtn = document.querySelector('.button_refresh');
  sessionStorage.setItem('timezone', 'GMT');
  refrBtn.addEventListener('click', changeBg);
  document.addEventListener('DOMContentLoaded', () => {
    unitsSelect();
    langSelect();
    langSave();
    geoLoc();
    getTime();
    startMarquee;
  });
}

// TODO: Day/Night; Seasons
addEv();
