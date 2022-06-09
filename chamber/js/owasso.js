let d = new Date().getDay();

const banner = document.getElementById("banner");
if (d === 1 || d === 2) {
    banner.style.display = 'block';
}

const close = document.querySelector("#close");

close.addEventListener("click", () => {
    banner.style.display = "none";
});

const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// show todays date.
todayDisplay.textContent = Date.now();

document.querySelector("body > footer > span.visits")

