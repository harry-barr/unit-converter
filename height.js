/* 
    HEIGHT CONVERSION
*/
const heightSelect = document.querySelector(".height-unit");
const heightInput = document.querySelector(".height-input");
const heightToConvertTo = document.querySelector(".height-to-convert");
const heightConvertBtn = document.querySelector(".convert-height-btn");
const result = document.querySelector(".result-height");

/* 
    FORMULAE
*/

const cmToFeet = () => {
  let feet1 = Number(heightInput.value) * 0.0328;
  return (result.innerHTML = `${feet1.toFixed(2)} feet`);
};
const feetToCm = () => {
  let cm1 = Number(heightInput.value) * 30.48;
  return (result.innerHTML = `${cm1.toFixed(2)} cm`);
};
const metersToCm = () => {
  let cm2 = Number(heightInput.value) * 100;
  return (result.innerHTML = `${cm2.toFixed(2)} cm`);
};
const cmToMeters = () => {
  let meters1 = Number(heightInput.value) / 100;
  return (result.innerHTML = `${meters1.toFixed(2)} meters`);
};
const feetToMeters = () => {
  let meters2 = Number(heightInput.value) / 3.28;
  return (result.innerHTML = `${meters2.toFixed(2)} meters`);
};
const metersToFeet = () => {
  let feet2 = Number(heightInput.value) * 3.28;
  return (result.innerHTML = `${feet2.toFixed(2)} feet`);
};

/* 
  CONVERT BUTTON
*/

heightConvertBtn.addEventListener("click", () => {
  if (
    heightSelect.value === "centimeters" &&
    heightToConvertTo.value === "feet"
  ) {
    result.innerHTML = "";
    cmToFeet();
  } else if (
    heightSelect.value === "feet" &&
    heightToConvertTo.value === "centimeters"
  ) {
    result.innerHTML = "";
    feetToCm();
  } else if (
    heightSelect.value === "meters" &&
    heightToConvertTo.value === "centimeters"
  ) {
    result.innerHTML = "";
    metersToCm();
  } else if (
    heightSelect.value === "centimeters" &&
    heightToConvertTo.value === "meters"
  ) {
    result.innerHTML = "";
    cmToMeters();
  } else if (
    heightSelect.value === "feet" &&
    heightToConvertTo.value === "meters"
  ) {
    result.innerHTML = "";
    feetToMeters();
  } else if (
    heightSelect.value === "meters" &&
    heightToConvertTo.value === "feet"
  ) {
    result.innerHTML = "";
    metersToFeet();
  } else if (heightSelect.value === "" || heightToConvertTo.value === "") {
    return alert("Please select a unit!");
  }
});
