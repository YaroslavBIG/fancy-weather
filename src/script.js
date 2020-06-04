import geoLoc from './js/api/_getCoords';
import { unitsSelect } from './js/controls/_units';
import langSelect from './js/controls/_langButton';
import langSave from './js/createElem/_lang';
import startMarquee from './js/createElem/weather/_marquee';
import langStart from './js/utils/start/_langStart';
import unitsStart from './js/utils/start/_unitsStart';
import refreshBackroundButton from './js/controls/_background';
import marqueeLoad from './js/createElem/_marque/_marqueLoad';
import speechRec from './js/controls/_speechRec';
import speechSynt from './js/controls/_speechSynt';

function addEv() {
  sessionStorage.setItem('timezone', 'GMT');
  langSave();
  marqueeLoad();
  langStart();
  unitsStart();
  geoLoc();
  document.addEventListener('DOMContentLoaded', () => {
    unitsSelect();
    langSelect();
    startMarquee;
    speechRec();
    speechSynt();
    refreshBackroundButton();
  });
}

// TODO: voice activate;
// TODO: Animate icons / background
addEv();
