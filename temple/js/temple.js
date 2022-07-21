const requestUrl = 'https://spensnerd.github.io/wdd230/temple/js/temple.json';
const cards = document.querySelector('.cards');

// async function apiFetch() {
//   try {
//     const response = await fetch(requestUrl);
//     if (response.ok) {
//       const data = await response.json();
//       console.log(data); // this is for testing the call
//       displayResults(data);
//     } else {
//       throw Error(await response.text());
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['temples'];
    prophets.forEach(displayResults);
  });

function displayResults(temples) {
  let card = document.createElement('section');
  let title = document.createElement('h2');
  let image = document.createElement('img');
  let streetAddress = document.createElement('p');
  let phone = document.createElement('p');
  let email = document.createElement('p');
  let services = document.createElement('p');
  let history = document.createElement('p');
  let ordinance = document.createElement('p');

  title.textContent = `${temples.location} temple`;
  image.setAttribute('src', temples.imageURL);
  image.setAttribute('alt', `picture of ${temples.location} temple`);
  image.setAttribute('loading', 'lazy');
  streetAddress.textContent = `Address: ${temples.address.streetAddress} ${temples.location} ${temples.address.state}, ${temples.address.zipCode}`;
  phone.textContent = `+1 ${temples.telephone}`;
  email.textContent = `${temples.email}`;
  services.textContent = `${temples.services}`;
  history.textContent = `${temples.history}`;
  ordinance.textContent = `${temples.sessionSchedule}`;

  card.appendChild(title);
  card.appendChild(image);
  card.appendChild(streetAddress);
  card.appendChild(phone);
  card.appendChild(email);
  card.appendChild(services);
  card.appendChild(history);
  card.appendChild(ordinance);

  document.querySelector('div.cards').appendChild(card);
}
