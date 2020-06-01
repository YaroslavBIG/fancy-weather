import dictionary from './_dictionary';
import getLangNum from '../utils/_getLangNum';

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
// const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
// const options = {
//   weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
// };
// console.log(date.toLocaleString('de-DE', options));

export default dayTranslation;
