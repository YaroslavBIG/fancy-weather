function langStart() {
  const langCurrent = localStorage.getItem('lang');
  if (!langCurrent) localStorage.setItem('lang', 'en');
}

export default langStart;
