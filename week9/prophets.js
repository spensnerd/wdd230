const requestURL =
  'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

// async function getProphets() {
//   let response = await fetch(requestURL);
//   if (response.ok) {
//     let data = await response.json();
//     console.log(data);
//   } else {
//     throw Error(response.statusText);
//   }
// }

// getProphets();
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

const ordinal = (number) => {
  const ordinalRules = new Intl.PluralRules('en', {
    type: 'ordinal',
  });
  const suffixes = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    other: 'th',
  };
  const suffix = suffixes[ordinalRules.select(number)];
  return number + suffix;
};

function displayProphets(prophet) {
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let portrait = document.createElement('img');
  let h4 = document.createElement('h4');
  let h5 = document.createElement('h5');

  h2.textContent = `${prophet.name} ${prophet.lastname}`;
  h4.textContent = `Birthday: ${prophet.birthdate}`;
  h5.textContent = `Birthplace: ${prophet.birthplace}`;

  portrait.setAttribute('src', prophet.imageurl);
  portrait.setAttribute(
    'alt',
    `Portrait of ${prophet.name} ${prophet.lastname} ${ordinal(
      prophet.order
    )} president of the Church of Jesus Christ of Latter-Day Saints.`
  );
  portrait.setAttribute('loading', 'lazy');

  card.appendChild(h2);
  card.appendChild(h4);
  card.appendChild(h5);
  card.appendChild(portrait);

  document.querySelector('div.cards').appendChild(card);
}
