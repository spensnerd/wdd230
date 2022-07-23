// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#w-icon');
const url =
  'https://api.openweathermap.org/data/2.5/onecall?lat=38.9807&lon=-77.1003&exclude=minutely,hourly&appid=3e2b6958f47431ef6f508c8c75fed505&units=imperial';
// https://api.openweathermap.org/data/2.5/weather?q=bethesda&appid=3e2b6958f47431ef6f508c8c75fed505&units=imperial
// https://api.openweathermap.org/data/2.5/onecall?lat=38.9807&lon=-77.1003&exclude=minutely,hourly&appid=3e2b6958f47431ef6f508c8c75fed505&units=imperial
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
  currentTemp.innerHTML = `${weatherData.current.temp.toFixed(0)}`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
  const desc = weatherData.current.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
  document.querySelector('#humidity').textContent =
    weatherData.current.humidity;

  document.querySelector('#today').textContent = weatherData.daily[0].temp.day;

  document.querySelector('#tomorrow').textContent =
    weatherData.daily[1].temp.day;

  document.querySelector('#nextDay').textContent =
    weatherData.daily[2].temp.day;
}
