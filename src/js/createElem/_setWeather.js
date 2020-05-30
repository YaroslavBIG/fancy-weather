
function setWeather(data) {
  const {
    feels_like, humidity, pressure, temp, wind_speed,
  } = data.current;
  const { description } = data.current.weather[0];
  sessionStorage.setItem('weather', description);

  const todayArr = ['description', 'feels_like', 'wind_speed', 'humidity', 'pressure'];
  const todayValue = [description, feels_like, wind_speed, humidity, pressure];

  const tempField = document.querySelector('.today_temp');
  tempField.innerText = temp;

  function createTodayBlock() {
    const fragment = document.createDocumentFragment();
    const wearherTodayBlock = document.querySelector('.today_weather__property');
    todayArr.forEach((el, idx) => {
      const currentEl = document.createElement('div');
      currentEl.classList.add(`today--${el}`);
      currentEl.innerText = todayValue[idx];
      fragment.append(currentEl);
    });
    wearherTodayBlock.append(fragment);
  }
  createTodayBlock();
}

/* <div class="wearher_today__block">
    <div class="today_temp"></div>
    <div class="today_parameters">
      <div class="today_weather__ico"></div>
      <div class="today_weather__property">
        <div class="today--description"></div>
        <div class="today--feels_like"></div>
        <div class="today--wind_speed"></div>
        <div class="today--humidity"></div>
        <div class="today--pressure"></div>
      </div>
  </div> */

export default setWeather;
