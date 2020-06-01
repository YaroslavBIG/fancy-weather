function isCyrillic(text) {
  return /[а-яёА-ЯЁ]/i.test(text);
}

export default isCyrillic;
