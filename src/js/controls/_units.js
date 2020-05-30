function unitsSelect() {
  const unitsButton = document.getElementById('buttonUnits');
  const currentUnit = localStorage.getItem('unit');
  if (currentUnit === 'undefined') localStorage.setItem('unit', 'metric');

  unitsButton.addEventListener('click', () => {
    const change = currentUnit === 'imperial' ? 'metric' : 'imperial';
    localStorage.setItem('unit', change);
  });
}

export default unitsSelect;
