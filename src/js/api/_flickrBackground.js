import { flickr } from './_keys';
import isLatin from '../utils/search/_isLatin';
import randomInteger from '../utils/_random';

async function getLinkToImageFlickr() {
  try {
    const key = flickr;
    const country = sessionStorage.getItem('country');
    const timeOfDay = sessionStorage.getItem('timeOfDayNow');
    const season = sessionStorage.getItem('season');

    let query = `${timeOfDay},${season}`;
    if (isLatin(country)) query += `,${country}`;
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&
    api_key=${key}&tags=${query}&tag_mode=all&extras=url_h&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    const photosArr = data.photos.photo;
    const photosLen = photosArr.length;
    // eslint-disable-next-line no-console
    console.log('Background Search Query: ', query, `| You have ${photosLen} photos`); // console for cross check
    const protoNum = photosLen > 1 ? randomInteger(0, photosLen) : 0;
    return data.photos.photo[protoNum].url_h; // imgUrl;
  } catch (e) {
    return './img/background/bg3.png';
  }
}

export default getLinkToImageFlickr;
