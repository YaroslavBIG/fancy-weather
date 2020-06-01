import { flickr } from './_keys';

async function getLinkToImageFlickr() {
  try {
    const key = flickr;
    const description = sessionStorage.getItem('weather');
    const country = sessionStorage.getItem('country');
    const query = `${description},${country}`;
    const url = `https://www.flickr.com/services/rest/?
    method=flickr.photos.search&
    api_key=${key}&tags=${query}&tag_mode=all&extras=url_h&
    format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    // const imgUrl = data.urls.regular;
    console.log(data);
    return; // imgUrl;
  } catch (e) {
    return './img/background/bg3.png';
  }
}

export default getLinkToImageFlickr;
