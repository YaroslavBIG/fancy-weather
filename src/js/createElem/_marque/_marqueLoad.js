import getLangNum from '../../utils/data/_getLangNum';
import dictionary from '../../transl/_dictionary';

function marqueeLoad() {
  const marque = document.querySelector('.marquee');
  const lang = getLangNum();
  const textArr = dictionary.marquee;
  marque.innerText = textArr[lang];
}

export default marqueeLoad;
