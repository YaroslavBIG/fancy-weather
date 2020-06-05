function marqueeSetError(err) {
  const marque = document.querySelector('.marquee');
  marque.innerHTML = '';
  marque.innerText = err;
}

export default marqueeSetError;
