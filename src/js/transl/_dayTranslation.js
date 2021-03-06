import dictionary from './_dictionary';
import getLangNum from '../utils/data/_getLangNum';

function dayTranslation(timeStamp, param = 'dayTrans') {
  let result;

  function getDayNum(stamp) {
    const date = new Date(stamp * 1000);
    const dayNum = date.getDay();
    return dayNum;
  }

  function getTranslDayName(stamp) {
    const lang = getLangNum();
    const daysOnCurrentLang = dictionary.day[lang];
    const dayNum = parseInt(getDayNum(stamp), 10);
    const dayTransl = daysOnCurrentLang[dayNum];
    return dayTransl;
  }

  switch (param) {
    case 'dayTrans':
      result = getTranslDayName(timeStamp);
      break;

    case 'dayNum':
      result = getDayNum(timeStamp);
      break;

    default:
      break;
  }

  return result;
}

export default dayTranslation;
