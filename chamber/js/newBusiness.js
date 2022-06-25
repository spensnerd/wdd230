const chamberBiz =
  'https://raw.githubusercontent.com/spensnerd/wdd230/master/chamber/js/data.json';
const cards = document.querySelector('#cards');

fetch(chamberBiz)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const businesses = jsonObject['members'];
    businesses.forEach(displayMembers);
  });

function displayMembers(member) {
  let card = document.createElement('section');
  let h3 = document.createElement('h3');
  let img = document.createElement('img');
  let address = document.createElement('h5');
  let site = document.createElement('a');

  h3.textContent = `${member.bizname}`;
  address.textContent = `${member.address}`;
  site.textContent = `company site`;
  site.href = `${member.url}`;
  site.target = `"_blank"`;

  img.setAttribute('src', member.imageURL);
  img.setAttribute('alt', `business image for ${member.bizname}.`);
  img.setAttribute('loading', 'lazy');

  card.appendChild(img);
  card.appendChild(h3);
  card.appendChild(address);
  card.appendChild(site);

  cards.appendChild(card);
}

// grid or list button
const gridbutton = document.querySelector('#grid:not(header)');
const listbutton = document.querySelector('#list:not(header)');

gridbutton.addEventListener('click', () => {
  // example using arrow function
  cards.classList.add('grid');
  cards.classList.remove('list');
});

listbutton.addEventListener('click', showList);

function showList() {
  cards.classList.add('list');
  cards.classList.remove('grid');
}
