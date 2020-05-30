function langSave() {
  const currentLang = localStorage.getItem('lang') || 'en';
  const option = document.querySelector(`.${currentLang}`);
  option.setAttribute('selected', true);
}

export default langSave;
