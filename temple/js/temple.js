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
  let baptism = document.createElement('p');
  let initiatory = document.createElement('p');
  let endowment = document.createElement('p');
  let sealings = document.createElement('p');
  let session = document.createElement('p');
  let closures = document.createElement('p');
  let btn = document.createElement('button');

  title.textContent = `${temples.location} temple`;
  image.setAttribute('src', temples.imageURL);
  image.setAttribute('alt', `picture of ${temples.location} temple`);
  image.setAttribute('loading', 'lazy');
  btn.setAttribute('id', `${temples.address.state}Btn`);

  streetAddress.textContent = `Address: ${temples.address.streetAddress} ${temples.location} ${temples.address.state}, ${temples.address.zipCode}`;
  phone.textContent = `+1 ${temples.telephone}`;
  email.textContent = `${temples.email}`;
  services.textContent = ` Services: ${temples.services}`;
  history.textContent = `History: ${temples.history}`;
  baptism.textContent = `Baptism Schedule: ${temples.ordinanceSchedule.Baptisms}`;
  initiatory.textContent = `Initiatory Schedule: ${temples.ordinanceSchedule.Initiatory}`;
  endowment.textContent = `Endowment Schedule: ${temples.ordinanceSchedule.Endowment}`;
  sealings.textContent = `Sealings Schedule: ${temples.ordinanceSchedule.Sealings}`;
  session.textContent = `Session Schedule: ${temples.sessionSchedule}`;
  closures.textContent = `Closures: ${temples.templeClosureSchedule}`;
  btn.innerHTML = `I like the ${temples.location} temple`;

  card.appendChild(title);
  card.appendChild(image);
  card.appendChild(streetAddress);
  card.appendChild(phone);
  card.appendChild(email);
  card.appendChild(services);
  card.appendChild(history);
  card.appendChild(baptism);
  card.appendChild(initiatory);
  card.appendChild(endowment);
  card.appendChild(sealings);
  card.appendChild(session);
  card.appendChild(closures);
  card.appendChild(btn);

  document.querySelector('div.cards').appendChild(card);
}

// .MOBtn
// .CABtn
// .TNBtn
// .OKBtn
let MOBtn = document.getElementById('MOBtn'),
  CABtn = document.getElementById('CABtn'),
  TNBtn = document.getElementById('TNBtn'),
  OKBtn = document.getElementById('OKBtn'),
  clicks = {};

function click(e) {
  localStorage.setItem(`${temples.address.state}Btn`);
  // let id = e.target.id;
  // if (!clicks[id]) clicks[id] = 0;
  // clicks[id]++;
  // e.target.textContent = clicks[id];
}

MOBtn.addEventListener('click', click);
CABtn.addEventListener('click', click);
TNBtn.addEventListener('click', click);
OKBtn.addEventListener('click', click);
