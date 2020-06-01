function unitsStart() {
  const unit = localStorage.getItem('unit');
  if (!unit) localStorage.setItem('unit', 'metric');
}

export default unitsStart;
