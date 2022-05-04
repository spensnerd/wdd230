// day names array
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// month names array
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const todayyear = new Date();
const dayName = dayNames[todayyear.getDay()];
const monthName = month[todayyear.getMonth()];
const year = todayyear.getFullYear();
const currentdate = `${dayName}, ${todayyear.getDate()} ${monthName}, ${todayyear.getFullYear()}`;

document.getElementById("theyear").textContent = year;

const options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
let datemod = new Date(document.lastModified);
document.getElementById("lastupdate").textContent =
  new Date().toLocaleDateString("en-US", options);
