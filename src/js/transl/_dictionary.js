
const dictionary = {
  placeholder: ['Enter city', 'Увядзіце горад', 'Введите город'],
  lang: ['en', 'be', 'ru'],
  search: ['search', 'пошук', 'поиск'],
  feel: ['Feels like:', 'Адчуваецца як:', 'Ощущается как:'],
  wind: ['Wind:', 'Вецер:', 'Ветер:'],
  temp: ['Temp:', 'Тэмпература:', 'Температура:'],
  ms: ['m/s', 'м/с', 'м/с'],
  humidity: ['Humidity:', 'Вільготнасць:', 'Влажность:'],
  pressure: ['Pressure:', 'Ціск:', 'Давление:'],
  metric: ['mm Hg', 'мм рт. ст.', 'мм рт. ст.'],
  imperial: ['hPa', 'гПа', 'гПа'],
  day: [
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацверг', 'Пятнiца', 'Субота'],
    ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  ],
  month: [
    ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
      'October', 'November', 'December'],
    ['Студзеня', 'Лютага', 'Сакавіка', 'Красавіка', 'Мая', 'Чэрвеня', 'Ліпеня', 'Аўгуста', 'Верасеня',
      'Кастрычніка', 'Лістапада', 'Снежаня'],
    ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа',
      'Сентября', 'Октября', 'Ноября', 'Декабря'],
  ],
  lat: ['Latitude', 'Шырата', 'Широта'],
  lng: ['Longitude', 'Даўгата', 'Долгота'],
  marquee: ['Weather requested, please wait... ',
    'Надвор\'е запытаная, калі ласка пачакайце.',
    'Погода запрошенна, пожалуйста подождите... ',
  ],
  wether: {
    200: ['Thunderstorm with light rain', 'Навальніца з невялікім дажджом', 'Гроза с небольшим дождем'],
    201: ['Thunderstorm with rain', 'Навальніца з дажджом', 'Гроза с дождем'],
    202: ['Thunderstorm with heavy rain', 'Навальніца з праліўным дажджом', 'Гроза с проливным дождем'],
    231: ['Thunderstorm with drizzle', 'Навальніца з дробным дажджом', 'Гроза с моросящим дождем'],
    232: ['Thunderstorm with heavy drizzle', 'Навальніца з сільным маросячым дождем', 'Гроза с сильным дождем'],
    233: ['Thunderstorm with Hail', 'Навальніца з градом', 'Гроза с градом'],
    300: ['Light Drizzle', 'Легкая Імжа', 'Легкая морось'],
    301: ['Drizzle', 'Імжа', 'Морось'],
    302: ['Heavy Drizzle', 'Моцная Імжа', 'Сильная Морось'],
    500: ['Light Rain', 'Дробны дождж', 'Легкий дождь'],
    501: ['Moderate Rain', 'Ўмераны дождж', 'Умеренный дождь'],
    502: ['Heavy rain', 'Моцны дождж', 'Сильный дождь'],
    511: ['Freezing rain', 'Дождж са снегам', 'Дождь со снегом'],
    520: ['Light shower rain', 'Слабы дождж', 'Слабый дождь'],
    521: ['Shower rain', 'Залева', 'Ливень'],
    522: ['Heavy shower rain', 'Моцны лівень', 'Сильный ливень'],
    600: ['Light snow', 'Лёгкі снег', 'Легкий снег'],
    601: ['Snow', 'Снег', 'Снег'],
    602: ['Heavy Snow', 'Моцны снег', 'Сильный снегопад'],
    610: ['Mix snow/rain', 'Снег з дажджом / дождж', 'Снег с дождём'],
    611: ['Sleet', 'Золь', 'Слякоть'],
    612: ['Heavy sleet', 'Моцны мокры снег', 'Сильный мокрый снег'],
    621: ['Snow shower', 'Снегапад', 'Снегопад'],
    622: ['Heavy snow shower', 'Моцны снегапад', 'Сильный снегопад'],
    623: ['Flurries', 'мяцеліца', 'метель'],
    700: ['Mist', 'Туман', 'Туман'],
    711: ['Smoke', 'Дым', 'Смог'],
    721: ['Haze', 'Лёгкі туман', 'Легкий туман'],
    731: ['Sand/dust', 'віхор пяску і пылу', 'Песок / пыль'],
    741: ['Fog', 'Туман', 'Туман'],
    751: ['Freezing Fog', 'Марозны Туман', 'Морозный Туман'],
    800: ['Clear sky', 'Чыстае неба', 'Чистое небо'],
    801: ['Few clouds', 'Невялікі аблокі', 'Небольшая облачность'],
    802: ['Scattered clouds', 'Пераменная воблачнасць', 'Переменная облачность'],
    803: ['Broken clouds', 'Воблачна з праясненнямі', 'Облачно с прояснениями'],
    804: ['Overcast clouds', 'Пахмурна', 'Пасмурно'],
    900: ['Unknown Precipitation', 'Невядомыя ападкі', 'Неизвестные осадки'],
  },
  error: 'There is no such place',
};

export default dictionary;
