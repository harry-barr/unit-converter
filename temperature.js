/*

    TEMPERATURE CONVERSION

*/

const temperatureSelect = document.querySelector(".temperature-unit");
const temperatureInput = document.querySelector(".temperature-input");
const temperatureToConvertTo = document.querySelector(
  ".temperature-to-convert"
);
const temperatureConvertBtn = document.querySelector(
  ".convert-temperature-btn"
);
const temperatureResult = document.querySelector(".result-temperature");

/*

    FORMULAE

*/

const celsiusToFahrenheit = () => {
  let fahrenheit1 = Number(temperatureInput.value) * (9 / 5) + 32;
  return (temperatureResult.innerHTML = `${fahrenheit1.toFixed(2)} F`);
};
const celsiusToKelvin = () => {
  let kelvin1 = Number(temperatureInput.value) + 273.15;
  return (temperatureResult.innerHTML = `${kelvin1.toFixed(2)} K`);
};
const fahrenheitToCelsius = () => {
  let celsius1 = Number(temperatureInput.value) * (5 / 9) - 32;
  return (temperatureResult.innerHTML = `${celsius1.toFixed(2)} C`);
};
const fahrenheitToKelvin = () => {
  let kelvin2 = Number(temperatureInput.value - 32) * (5 / 9) + 273.15;
  return (temperatureResult.innerHTML = `${kelvin2.toFixed(2)} K`);
};
const kelvinToCelsius = () => {
  let celsius2 = Number(temperatureInput.value) - 273.15;
  return (temperatureResult.innerHTML = `${celsius2.toFixed(2)} K`);
};
const kelvinToFahrenheit = () => {
  let fahrenheit2 = Number(temperatureInput.value - 273.15) * (9 / 5) + 32;
  return (temperatureResult.innerHTML = `${fahrenheit2.toFixed(2)} F`);
};

/*

    CONVERT BTN

*/

temperatureConvertBtn.addEventListener("click", () => {
  if (
    temperatureSelect.value === "celsius" &&
    temperatureToConvertTo.value === "fahrenheit"
  ) {
    temperatureResult.innerHTML = "";
    celsiusToFahrenheit();
  } else if (
    temperatureSelect.value === "celsius" &&
    temperatureToConvertTo.value === "kelvin"
  ) {
    temperatureResult.innerHTML = "";
    celsiusToKelvin();
  } else if (
    temperatureSelect.value === "fahrenheit" &&
    temperatureToConvertTo.value === "celsius"
  ) {
    temperatureResult.innerHTML = "";
    fahrenheitToCelsius();
  } else if (
    temperatureSelect.value === "fahrenheit" &&
    temperatureToConvertTo.value === "kelvin"
  ) {
    temperatureResult.innerHTML = "";
    fahrenheitToKelvin();
  } else if (
    temperatureSelect.value === "kelvin" &&
    temperatureToConvertTo.value === "celsius"
  ) {
    temperatureResult.innerHTML = "";
    kelvinToCelsius();
  } else if (
    temperatureSelect.value === "kelvin" &&
    temperatureToConvertTo.value === "fahrenheit"
  ) {
    temperatureResult.innerHTML = "";
    kelvinToFahrenheit();
  } else if (
    temperatureSelect.value === "" ||
    temperatureToConvertTo.value === ""
  ) {
    return alert("Please select a unit!");
  }
});
