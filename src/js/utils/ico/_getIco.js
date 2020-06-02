function getIco(icoId, size = '4x') {
  const icoUrl = `http://openweathermap.org/img/wn/${icoId}@${size}.png`;
  const todayIco = document.createElement('img');
  todayIco.src = icoUrl;
  return todayIco;
}

export default getIco;
