function setLocation() {
  const cityFeald = document.querySelector('.city');
  const countryFeald = document.querySelector('.country');
  const city = sessionStorage.getItem('city');
  const town = sessionStorage.getItem('town');
  const state = sessionStorage.getItem('state');
  const village = sessionStorage.getItem('village');
  const country = sessionStorage.getItem('country');
  const county = sessionStorage.getItem('county');
  const arrPos = [city, town, state, village, county];
  const arrFiltred = arrPos.filter((pos) => pos !== 'undefined');
  const pos = arrFiltred[0];
  cityFeald.innerText = pos;
  countryFeald.innerText = country;
}

export default setLocation;
