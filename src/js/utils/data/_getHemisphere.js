const getHemisphere = () => (sessionStorage.getItem('latitude') > 0 ? 'southern' : 'northern');

export default getHemisphere;
