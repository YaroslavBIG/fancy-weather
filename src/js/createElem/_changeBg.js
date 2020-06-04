import getLinkToImageFlickr from '../api/_flickrBackground';

async function changeBg() {
  const body = document.querySelector('body');
  const bgImg = new Image();
  const bgImgUrl = await getLinkToImageFlickr();
  bgImg.src = bgImgUrl;
  bgImg.onload = function insert() {
    body.style.backgroundImage = `url(${bgImg.src})`;
  };
}

export default changeBg;
