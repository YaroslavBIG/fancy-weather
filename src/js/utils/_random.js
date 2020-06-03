function randomInteger(min = 1, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export default randomInteger;
