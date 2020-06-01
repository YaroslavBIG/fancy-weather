import { yandexTranslateKey } from './_keys';

async function translate(text, langFrom = 'ru', langTo = 'en') {
  const key = yandexTranslateKey;
  const response = await fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&
  text=${text}&lang=${langFrom}-${langTo}`);
  const data = await response.json();
  return data;
}

export default translate;
