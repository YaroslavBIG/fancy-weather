import dictionary from '../../transl/_dictionary';
import getLangNum from './_getLangNum';

function getPressure(val) {
  const unit = localStorage.getItem('unit');
  const lang = getLangNum();
  const valueMm = Math.round(val * 0.750063755419211);
  const units = dictionary[unit][lang];
  const metric = `${valueMm} ${units}`;
  const imperial = `${val} ${units}`;
  return unit === 'metric' ? metric : imperial;
}

export default getPressure;
