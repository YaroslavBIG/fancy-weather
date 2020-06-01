import changeBg from './js/createElem/_changeBg';
import geoLoc from './js/api/_getCoords';
import unitsSelect from './js/controls/_units';
import langSelect from './js/controls/_langButton';
import langSave from './js/createElem/_lang';
import startMarquee from './js/createElem/weather/_marquee';
import getTime from './js/createElem/_setClock';
import getLinkToImageFlickr from './js/api/_flickrBackground';
import langStart from './js/utils/_langStart';
import unitsStart from './js/utils/_unitsStart';

function addEv() {
  const refrBtn = document.querySelector('.button_refresh');
  sessionStorage.setItem('timezone', 'GMT');
  refrBtn.addEventListener('click', changeBg);
  document.addEventListener('DOMContentLoaded', () => {
    unitsSelect();
    langStart();
    unitsStart();
    langSelect();
    langSave();
    geoLoc();
    getTime();
    getLinkToImageFlickr();
    startMarquee;
  });
}

// TODO: Day/Night; Seasons
// TODO: Refresh backgroud img after weather load
// TODO: Animate background
addEv();
