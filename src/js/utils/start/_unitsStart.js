import { buttonUnitsCange } from '../../controls/_units';

function unitsStart() {
  const unit = () => localStorage.getItem('unit');
  if (!unit()) localStorage.setItem('unit', 'metric');
  buttonUnitsCange(unit());
}

export default unitsStart;
