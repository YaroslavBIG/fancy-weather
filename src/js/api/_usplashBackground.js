import { unsplash } from './_keys';

async function getLinkToImage() {
  try {
    const key = unsplash;
    const description = sessionStorage.getItem('description');
    const query = `${description}`;
    const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=${key}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.urls.regular;
  } catch (e) {
    return './img/background/bg3.png';
  }
}

export default getLinkToImage;
