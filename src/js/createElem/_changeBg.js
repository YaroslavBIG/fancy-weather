import getLinkToImage from '../api/_usplashBackground';

async function changeBg() {
  const body = document.querySelector('body');
  const newImg = await getLinkToImage();
  body.style.backgroundImage = `url(${newImg})`;
}

export default changeBg;
