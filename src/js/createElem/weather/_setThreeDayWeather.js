import getIco from '../../utils/_getIco';
import getIcoBlock from '../../utils/_insetrIco';
import dayTranslation from '../../transl/_dayTranslation';

function setThreeDayWeather(data) {
  const { daily } = data;
  const fromDay = 1;
  const toDay = 3;
  const daysArr = daily.filter((value, index) => index >= fromDay && index <= toDay);
  const daysWeatherBlock = document.querySelector('.weather_days');
  const newDaysBlock = document.createDocumentFragment();

  const createDaysBlock = (obj) => {
    const timeStamp = obj.dt;
    const dayEl = document.createElement('div');
    dayEl.classList.add('dealy');

    const weekdayEl = document.createElement('div');
    weekdayEl.classList.add('dealy_weekday');
    const weekday = dayTranslation(timeStamp);
    weekdayEl.append(weekday);
    dayEl.append(weekdayEl);

    const weatherWrap = document.createElement('div');
    weatherWrap.classList.add('dealy_weather__wrapper');

    const tempEl = document.createElement('div');
    const temp = Math.round(obj.temp.day);
    tempEl.innerText = temp;
    tempEl.classList.add('dealy_temp');
    weatherWrap.append(tempEl);

    const icoCode = obj.weather[0].icon;
    const ico = getIco(icoCode, '2x');
    const icoEl = getIcoBlock(ico);
    icoEl.classList.add('daily_ico');
    weatherWrap.append(icoEl);
    dayEl.append(weatherWrap);

    newDaysBlock.append(dayEl);
  };
  daysArr.forEach((el) => createDaysBlock(el));
  daysWeatherBlock.innerHTML = '';
  daysWeatherBlock.append(newDaysBlock);
}

export default setThreeDayWeather;
