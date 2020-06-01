import dictionary from "../transl/_dictionary";

function getLangNum() {
  const lang = localStorage.getItem('lang');
  const langNum = dictionary.lang.indexOf(lang);
  return langNum;
}

export default getLangNum;
