/* f = 35.74 + .6215t - 35.75s^.16 + .4275ts^.16, 
f = wind chill factor
t = average air temperature
s = wind speed in miles per hour
*/

let t = parseFloat(document.querySelector("#t").textContent);
let s = parseFloat(document.querySelector("#s").textContent);
let windchill = "";
if (t <= 50 && s > 3) {
  windchill = windChill(t, s);
  windchill = `${windchill}&#176;F`;
} else {
  windchill = "N/A";
}

document.querySelector("#w").innerHTML = windchill;

function windChill(temp, speed) {

  var windChill =
    (35.74 +
    (0.6215 * temp)) -
    (35.75 * Math.pow(speed,0.16)) +
    (0.4275 * temp * Math.pow(speed,0.16));
  return(Math.round(windChill * 10) / 10);
}
