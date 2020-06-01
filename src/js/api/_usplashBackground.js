import { unsplash } from './_keys';

async function getLinkToImage() {
  try {
    const key = unsplash;
    const description = sessionStorage.getItem('weather');
    const country = sessionStorage.getItem('country');
    const query = `${description},${country}`;
    const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=${key}`;
    const res = await fetch(url);
    const data = await res.json();
    const imgUrl = data.urls.regular;
    console.log(imgUrl);
    return imgUrl;
  } catch (e) {
    return './img/background/bg3.png';
  }
}

export default getLinkToImage;
