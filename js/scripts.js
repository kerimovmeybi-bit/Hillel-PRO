// Home-work19.1
const API_KEY = 'a2e213d0056dfafe85d1d4ef315eae5e';
const CITY = 'Odessa';
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&lang=uk&appid=${API_KEY}`;

const elements = {
  temp: document.getElementById('temp'),
  desc: document.getElementById('description'),
  humidity: document.getElementById('humidity'),
  pressure: document.getElementById('pressure'),
  wind: document.getElementById('wind'),
  icon: document.getElementById('icon'),
  time: document.getElementById('time'),
  date: document.getElementById('date'),
};

function updateTime() {
  const now = new Date();
  elements.time.textContent = now.toLocaleTimeString('uk-UA', {
    hour: '2-digit',
    minute: '2-digit'
  });
  elements.date.textContent = now.toLocaleDateString('uk-UA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

async function getWeather() {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    elements.temp.textContent = Math.round(data.main.temp);
    elements.desc.textContent = data.weather[0].description;
    elements.humidity.textContent = data.main.humidity;
    elements.pressure.textContent = data.main.pressure;
    elements.wind.textContent = data.wind.speed;

    elements.icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  } catch (err) {
    alert('Помилка завантаження погоди');
  }
}

document.getElementById('refresh').addEventListener('click', getWeather);

// старт
updateTime();
setInterval(updateTime, 1000);
getWeather();
