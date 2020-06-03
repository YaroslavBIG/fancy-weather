import getIco from '../../utils/ico/_getIco';
import getIcoBlock from '../../utils/ico/_insetrIco';
import setWeatherProperty from './_setWeatherProperty';

function setWeather(data) {
  const { temp } = data.current;
  const { description, icon } = data.current.weather[0];
  sessionStorage.setItem('weather', description);

  const tempField = document.querySelector('.today_temp');
  tempField.innerHTML = '';
  tempField.innerText = Math.round(temp);

  const todayParametersBlock = document.querySelector('.today_parameters');
  todayParametersBlock.innerHTML = '';

  const todayIco = getIco(icon);
  const todayIcoEl = getIcoBlock(todayIco);
  todayIcoEl.classList.add('today_ico');
  todayParametersBlock.append(todayIcoEl);

  setWeatherProperty(data);
}

export default setWeather;
