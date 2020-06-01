const wrapper = document.querySelector('.marquee-wrapper');
const marquee = document.querySelector('.marquee');
const wrapperWidth = wrapper.offsetWidth;
const marqueeWidth = marquee.scrollWidth;

function move() {
  let currentTX = getComputedStyle(marquee).transform.split(',');
  if (currentTX[4] === undefined) {
    currentTX = -1;
  } else {
    currentTX = parseFloat(currentTX[4]) - 1;
  }

  if (-currentTX >= marqueeWidth) {
    marquee.style.transform = `translateX(${wrapperWidth}px)`;
  } else {
    marquee.style.transform = `translateX(${currentTX}px)`;
  }
}

const startMarquee = setInterval(move, 10);

export default startMarquee;
