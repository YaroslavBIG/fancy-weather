import { flickr } from './_keys';
import isLatin from '../utils/search/_isLatin';

async function getLinkToImageFlickr() {
  try {
    const key = flickr;
    const description = sessionStorage.getItem('weather');
    const country = sessionStorage.getItem('country');
    const timeOfDay = sessionStorage.getItem('timeOfDayNow');
    const season = sessionStorage.getItem('season');

    let query = `${timeOfDay},${season}`;
    if (isLatin(description)) query += `,${description},${country}`;
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&
    api_key=${key}&tags=${query}&tag_mode=all&extras=url_h&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    return data.photos.photo[0].url_h; // imgUrl;
  } catch (e) {
    return './img/background/bg3.png';
  }
}

export default getLinkToImageFlickr;
