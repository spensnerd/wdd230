// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#w-icon');
const url =
  'https://api.openweathermap.org/data/2.5/weather?q=oklahoma+city&appid=3e2b6958f47431ef6f508c8c75fed505&units=imperial';
const forecast = document.querySelector('#forecast');
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');
const nextDay = document.querySelector('#nextDay');

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(weatherData) {
  currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
  document.querySelector('#humidity').textContent = weatherData.main.humidity;
}
