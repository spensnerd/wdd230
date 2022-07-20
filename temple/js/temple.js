const requestUrl = 'https://spensnerd.github.io/wdd230/temple/js/temple.json';
const cards = document.querySelector('.cards');

async function apiFetch() {
  try {
    const response = await fetch(requestUrl);
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

function displayResults(temple) {
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
}
