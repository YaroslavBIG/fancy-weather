import { unsplash } from './_keys';
import isLatin from '../utils/search/_isLatin';

async function getLinkToImage() {
  try {
    const key = unsplash;
    const description = sessionStorage.getItem('weather');
    const country = sessionStorage.getItem('country');
    const timeOfDay = sessionStorage.getItem('timeOfDayNow');
    const season = sessionStorage.getItem('season');

    let query = `${timeOfDay},${season}`;
    if (isLatin(description)) query += `,${description},${country}`;
    const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=${key}`;
    const res = await fetch(url);
    const data = await res.json();
    const imgUrl = data.urls.regular;
    return imgUrl;
  } catch (e) {
    return './img/background/bg3.png';
  }
}

export default getLinkToImage;
