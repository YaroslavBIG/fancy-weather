import getLinkToImage from '../api/_usplashBackground';

async function changeBg() {
  const body = document.querySelector('body');
  const bgImg = new Image();
  const bgImgUrl = await getLinkToImage();
  bgImg.src = bgImgUrl;
  bgImg.onload = function insert() {
    body.style.backgroundImage = `url(${bgImg.src})`;
  };
}

export default changeBg;
