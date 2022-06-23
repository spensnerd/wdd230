const chamberBiz =
  'https://raw.githubusercontent.com/spensnerd/wdd230/master/chamber/js/data.json';
// const cards = document.querySelector('.cards');

fetch(chamberBiz)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
  });

function displayCompanies(company) {
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let img = document.createElement('img');
  let adr = document.createElement('p');
  let phn = document.createElement('p');
  let li = document.createElement('section');
  let listH2 = document.createElement('h2'); // Change the textContent property of the h2 element to contain the prophet's full name
  let listAdr = document.createElement('p');
  let listPhn = document.createElement('p');
  h2.textContent = `${company.name} ${company.lastname}`;
  adr.textContent = `${company.address}`;
  phn.textContent = `${company.phone}`;
  listH2.textContent = `${company.name} ${company.lastname}`;
  listAdr.textContent = `${company.address}`;
  listPhn.textContent = `${company.phone}`;
  img.setAttribute('src', company.imageurl);
  img.setAttribute(
    'alt',
    `${company.name} ${company.lastname} ${company.order}`
  );

  card.classList.add('card');
  img.classList.add('card-img');

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(adr);
  card.appendChild(phn);
  card.appendChild(img);
  li.appendChild(listH2);
  li.appendChild(listAdr);
  li.appendChild(listPhn);
  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);
  document.querySelector('div.list').appendChild(li);
}

// function displayMembers(member) {
//   let card = document.createElement('section');
//   let h3 = document.createElement('h3');
//   let logo = document.createElement('img');
//   let address = document.createElement('h5');
//   let site = document.createElement('a');

//   h3.textContent = `${member.bizname}`;
//   address.textContent = `${member.address}`;
//   site.textContent = `company site`;
//   site.href = `${member.url}`;
//   site.target = `"_blank"`;

//   logo.setAttribute('src', member.imageURL);
//   logo.setAttribute('alt', `business image for ${member.bizname}.`);
//   logo.setAttribute('loading', 'lazy');

//   card.appendChild(logo);
//   card.appendChild(h3);
//   card.appendChild(address);
//   card.appendChild(site);

//   document.querySelector('div.cards').appendChild(card);
// }

// grid or list button
// const gridbutton = document.querySelector('#grid');
// const listbutton = document.querySelector('#list');
// const display = document.querySelector('div');

// gridbutton.style.display = 'none';
// listbutton.style.display = 'block';

// gridbutton.addEventListener('click', () => {
//   // example using arrow function
//   display.classList.add('grid');
//   display.classList.remove('list');
// });

// listbutton.addEventListener('click', showList);

// function showList() {
//   display.classList.add('list');
//   display.classList.remove('grid');
// }

const cardsButton = document.querySelector('.card-button');
const listButton = document.querySelector('.list-button');

const Cards = document.querySelector('.cards');
const List = document.querySelector('.list');

const cardsBox = document.querySelector('.cards');
const listBox = document.querySelector('.list');

cardsButton.onclick = function () {
  const cardsBox = document.querySelector('.cards');
  const listBox = document.querySelector('.list');

  cardsBox.style.display = 'flex';
  listBox.style.display = 'none';
};

listButton.onclick = function () {
  const cardsBox = document.querySelector('.cards');
  const listBox = document.querySelector('.list');

  cardsBox.style.display = 'none';
  listBox.style.display = 'block';
};

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);

if (vw >= 800 && vw < 1000) {
  cardsBox.style.display = 'none';
  listBox.style.display = 'block';
}
