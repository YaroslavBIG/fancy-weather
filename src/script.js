import geoLoc from './js/api/_getCoords';
import unitsSelect from './js/controls/_units';
import langSelect from './js/controls/_langButton';
import langSave from './js/createElem/_lang';
import startMarquee from './js/createElem/weather/_marquee';
import getTime from './js/createElem/_setClock';
import langStart from './js/utils/start/_langStart';
import unitsStart from './js/utils/start/_unitsStart';
import refreshBackroundButton from './js/controls/_background';
import changeBg from './js/createElem/_changeBg';

function addEv() {
  sessionStorage.setItem('timezone', 'GMT');
  document.addEventListener('DOMContentLoaded', () => {
    unitsSelect();
    langStart();
    unitsStart();
    langSelect();
    langSave();
    refreshBackroundButton();
    geoLoc();
    getTime();
    startMarquee;
    changeBg();
  });
}

// TODO: Refresh backgroud img after weather load
// TODO: Animate background
addEv();
