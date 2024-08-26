/*

    DISTANCE CONVERSION
    
*/

const distanceSelect = document.querySelector(".distance-unit");
const distanceInput = document.querySelector(".distance-input");
const distanceToConvertTo = document.querySelector(".distance-to-convert");
const distanceConvertBtn = document.querySelector(".convert-distance-btn");
const distanceResult = document.querySelector(".result-distance");

/*#

    FORMULAE

*/

const kilometersToMiles = () => {
  let miles1 = Number(distanceInput.value) * (62 / 100);
  return (distanceResult.innerHTML = `${miles1.toFixed(2)} miles`);
};

const kilometersToNauticalM = () => {
  let nauticalM1 = Number(distanceInput.value) * (54 / 100);
  return (distanceResult.innerHTML = `${nauticalM1.toFixed(2)} nm`);
};

const milesToKilometers = () => {
  let kilometers1 = Number(distanceInput.value) * (161 / 100);
  return (distanceResult.innerHTML = `${kilometers1.toFixed(2)} km`);
};
const milesToNauticalM = () => {
  let nauticalM2 = Number(distanceInput.value) * (115 / 100);
  return (distanceResult.innerHTML = `${nauticalM2.toFixed(2)} nm`);
};
const nauticalMilesToKilometers = () => {
  let kilometers2 = Number(distanceInput.value) * (185 / 100);
  return (distanceResult.innerHTML = `${kilometers2.toFixed(2)} km`);
};
const nauticalMilesToMiles = () => {
  let miles2 = Number(distanceInput.value) / (115 / 100);
  return (distanceResult.innerHTML = `${miles2.toFixed(2)} miles`);
};

/* 

    CONVERT BUTTON

*/

distanceConvertBtn.addEventListener("click", () => {
  if (
    distanceSelect.value === "kilometer" &&
    distanceToConvertTo.value === "miles"
  ) {
    distanceResult.innerHTML = "";
    kilometersToMiles();
  } else if (
    distanceSelect.value === "kilometer" &&
    distanceToConvertTo.value === "nautical-miles"
  ) {
    distanceResult.innerHTML = "";
    kilometersToNauticalM();
  } else if (
    distanceSelect.value === "miles" &&
    distanceToConvertTo.value === "kilometer"
  ) {
    distanceResult.innerHTML = "";
    milesToKilometers();
  } else if (
    distanceSelect.value === "miles" &&
    distanceToConvertTo.value === "nautical-miles"
  ) {
    distanceResult.innerHTML = "";
    milesToNauticalM();
  } else if (
    distanceSelect.value === "nautical-miles" &&
    distanceToConvertTo.value === "miles"
  ) {
    distanceResult.innerHTML = "";
    nauticalMilesToMiles();
  } else if (
    distanceSelect.value === "nautical-miles" &&
    distanceToConvertTo.value === "kilometer"
  ) {
    distanceResult.innerHTML = "";
    nauticalMilesToKilometers();
  } else if (distanceSelect.value === "" || distanceToConvertTo.value === "") {
    return alert("Please select a unit!");
  }
});
