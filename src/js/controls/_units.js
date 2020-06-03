import getWeather from '../api/_openWeather';

function buttonUnitsCange(currentUnit) {
  const content = currentUnit === 'imperial' ? 'F' : 'C';
  const buttonText = document.getElementById('unit');
  buttonText.innerText = content;
}

function unitsSelect() {
  const unitsButton = document.getElementById('buttonUnits');
  let currentUnit = localStorage.getItem('unit');
  if (currentUnit === 'undefined') localStorage.setItem('unit', 'metric');

  unitsButton.addEventListener('click', () => {
    const change = currentUnit === 'imperial' ? 'metric' : 'imperial';
    localStorage.setItem('unit', change);
    currentUnit = localStorage.getItem('unit');
    buttonUnitsCange(currentUnit);
    getWeather();
  });
}

export { unitsSelect, buttonUnitsCange };
