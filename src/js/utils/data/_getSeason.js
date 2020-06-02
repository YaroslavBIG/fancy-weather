import getHemisphere from './_getHemisphere';

function getSeason(timeStamp) {
  const date = new Date(timeStamp * 1000);
  const seasonNow = (Math.floor(((date.getMonth() / 12) * 4)) % 4) - 1;
  const seasons = {
    southern: ['summer', 'autumn', 'winter', 'spring'],
    northern: ['winter', 'spring', 'summer', 'autumn'],
  };
  const hemispher = getHemisphere();
  const result = seasons[hemispher][seasonNow];
  console.log(result);
  sessionStorage.setItem('season', result);
  return result;
}

export default getSeason;
