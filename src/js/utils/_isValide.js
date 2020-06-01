function isValide(text) {
  const regEx = /[а-яёўА-ЯЁЎa-zA-Z0-9]+/;
  const result = regEx.test(text);
  return result;
}

export default isValide;
