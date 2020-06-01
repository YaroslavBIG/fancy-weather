import translateElements from '../transl/_translateElements';

function langSelect() {
  const select = document.getElementById('lang');
  select.onchange = () => {
    const currentLang = localStorage.getItem('lang');
    const changedLang = select.value;
    if (currentLang !== changedLang) {
      localStorage.setItem('lang', changedLang);
      translateElements();
    }
  };
}

export default langSelect;
