import getIco from './_getIco';

function getAnimateIco(id, icon) {
  const timeOfDayNow = sessionStorage.getItem('timeOfDayNow');

  const animIcoIdDay = [200, 201, 300, 301, 302, 500, 501, 502,
    511, 520, 521, 522, 600, 601, 602, 610, 611, 612, 621, 622,
    623, 800, 801, 802, 803, 804];

  const animIcoIdNight = [200, 201, 500, 501, 502,
    511, 520, 521, 522, 610, 612, 621, 622, 623, 800, 801, 802, 803, 804];

  let targetArr;

  if (timeOfDayNow === 'day') targetArr = animIcoIdDay;
  if (timeOfDayNow === 'night') {
    targetArr = animIcoIdNight;
  }

  const isAnimated = targetArr.includes(id);
  if (isAnimated) {
    let icoUrl;
    icoUrl = `./img/weatherIco/${id}.svg`;
    if (id >= 800 && id <= 803 && timeOfDayNow === 'night') icoUrl = `./img/weatherIco/${id}0.svg`;
    const todayIco = document.createElement('img');
    todayIco.src = icoUrl;
    return todayIco;
  }

  return getIco(icon);
}

export default getAnimateIco;
