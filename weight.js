/* 
    WEIGHT CONVERSION
*/
const weightSelect = document.querySelector(".weight-unit");
const weightInput = document.querySelector(".weight-input");
const weightToConvertTo = document.querySelector(".weight-to-convert");
const weightConvertBtn = document.querySelector(".convert-weight-btn");
const weightResult = document.querySelector(".result-weight");

/* 
    FORMULAE FOR KG CONVERSION
*/

const kgToStone = () => {
  let stone1 = Number(weightInput.value) * 0.16;
  return (weightResult.innerHTML = `${stone1.toFixed(2)} st`);
};
const stoneToKg = () => {
  let kg1 = Number(weightInput.value) * 6.35;
  return (weightResult.innerHTML = `${kg1.toFixed(2)} kg`);
};
const kgToTonnes = () => {
  let tonnes1 = Number(weightInput.value) / 1000;
  return (weightResult.innerHTML = `${tonnes1.toFixed(2)} tonnes`);
};
const tonnesToKg = () => {
  let kg2 = Number(weightInput.value) * 1000;
  return (weightResult.innerHTML = `${kg2.toFixed(2)} kg`);
};
const kgToGrams = () => {
  let grams1 = Number(weightInput.value) * 1000;
  return (weightResult.innerHTML = `${grams1.toFixed()} g`);
};
const gramsToKg = () => {
  let kg3 = Number(weightInput.value) * 1000;
  return (weightResult.innerHTML = `${kg3.toFixed(2)} g`);
};
const kgToPounds = () => {
  let pounds1 = Number(weightInput.value) * 2.2;
  return (weightResult.innerHTML = `${pounds1.toFixed(2)} lbs`);
};
const poundsToKg = () => {
  let kg4 = Number(weightInput.value) * 0.45;
  return (weightResult.innerHTML = `${kg4.toFixed(2)} tonnes`);
};

/* 
    FORMULAE FOR STONE CONVERSION
*/
const stoneToTonnes = () => {
  let tonnes2 = Number(weightInput.value) / 157.47;
  return (weightResult.innerHTML = `${tonnes2.toFixed(2)} tonnes`);
};
const tonnesToStone = () => {
  let stone2 = Number(weightInput.value) * 157.47;
  return (weightResult.innerHTML = `${stone2.toFixed(2)} st`);
};
const stoneToGrams = () => {
  let grams2 = Number(weightInput.value) * 6350.29;
  return (weightResult.innerHTML = `${grams2.toFixed()} g`);
};
const gramsToStone = () => {
  let stone3 = Number(weightInput.value) / 6350.29;
  return (weightResult.innerHTML = `${stone3.toFixed(2)} st`);
};
const stoneToPounds = () => {
  let pounds2 = Number(weightInput.value) * 14;
  return (weightResult.innerHTML = `${pounds2.toFixed(2)} lbs`);
};
const poundsToStone = () => {
  let stone4 = Number(weightInput.value) / 14;
  return (weightResult.innerHTML = `${stone4.toFixed(2)} st`);
};

/* 
    FORMULAE FOR TONNES CONVERSION
*/

const tonnesToGrams = () => {
  let grams3 = Number(weightInput.value) * 1000000;
  return (weightResult.innerHTML = `${grams3.toFixed()} g`);
};
const gramsToTonnes = () => {
  let tonnes3 = Number(weightInput.value) / 1000000;
  return (weightResult.innerHTML = `${tonnes3.toFixed(2)} tonnes`);
};
const tonnesToPounds = () => {
  let pounds3 = Number(weightInput.value) * 2204.62;
  return (weightResult.innerHTML = `${pounds3.toFixed(2)} lbs`);
};
const poundsToTonnes = () => {
  let tonnes4 = Number(weightInput.value) * 0.00045;
  return (weightResult.innerHTML = `${tonnes4.toFixed(2)} tonnes`);
};

/* 
    FORMULAE FOR GRAMS
*/

const gramsToPounds = () => {
  let pounds4 = Number(weightInput.value) * 0.0022;
  return (weightResult.innerHTML = `${pounds4.toFixed(2)} lbs`);
};
const poundsToGrams = () => {
  let grams4 = Number(weightInput.value) * 453.6;
  return (weightResult.innerHTML = `${grams4.toFixed()} g`);
};

/* 
    CONVERT BUTTON
*/

weightConvertBtn.addEventListener("click", () => {
  if (
    weightSelect.value === "kilograms" &&
    weightToConvertTo.value === "stone"
  ) {
    weightResult.innerHTML = "";
    kgToStone();
  } else if (
    weightSelect.value === "kilograms" &&
    weightToConvertTo.value === "tonnes"
  ) {
    weightResult.innerHTML = "";
    kgToTonnes();
  } else if (
    weightSelect.value === "kilograms" &&
    weightToConvertTo.value === "grams"
  ) {
    weightResult.innerHTML = "";
    kgToGrams();
  } else if (
    weightSelect.value === "kilograms" &&
    weightToConvertTo.value === "pounds"
  ) {
    weightResult.innerHTML = "";
    kgToPounds();
  } else if (
    weightSelect.value === "stone" &&
    weightToConvertTo.value === "kilograms"
  ) {
    weightResult.innerHTML = "";
    stoneToKg();
  } else if (
    weightSelect.value === "stone" &&
    weightToConvertTo.value === "tonnes"
  ) {
    weightResult.innerHTML = "";
    stoneToTonnes();
  } else if (
    weightSelect.value === "stone" &&
    weightToConvertTo.value === "grams"
  ) {
    weightResult.innerHTML = "";
    stoneToGrams();
  } else if (
    weightSelect.value === "stone" &&
    weightToConvertTo.value === "pounds"
  ) {
    weightResult.innerHTML = "";
    stoneToPounds();
  } else if (
    weightSelect.value === "tonnes" &&
    weightToConvertTo.value === "kilograms"
  ) {
    weightResult.innerHTML = "";
    tonnesToKg();
  } else if (
    weightSelect.value === "tonnes" &&
    weightToConvertTo.value === "stone"
  ) {
    weightResult.innerHTML = "";
    tonnesToStone();
  } else if (
    weightSelect.value === "tonnes" &&
    weightToConvertTo.value === "grams"
  ) {
    weightResult.innerHTML = "";
    tonnesToGrams();
  } else if (
    weightSelect.value === "tonnes" &&
    weightToConvertTo.value === "pounds"
  ) {
    weightResult.innerHTML = "";
    tonnesToPounds();
  } else if (
    weightSelect.value === "grams" &&
    weightToConvertTo.value === "kilograms"
  ) {
    weightResult.innerHTML = "";
    gramsToKg();
  } else if (
    weightSelect.value === "grams" &&
    weightToConvertTo.value === "stone"
  ) {
    weightResult.innerHTML = "";
    gramsToStone();
  } else if (
    weightSelect.value === "grams" &&
    weightToConvertTo.value === "tonnes"
  ) {
    weightResult.innerHTML = "";
    gramsToTonnes();
  } else if (
    weightSelect.value === "grams" &&
    weightToConvertTo.value === "pounds"
  ) {
    weightResult.innerHTML = "";
    gramsToPounds();
  } else if (
    weightSelect.value === "pounds" &&
    weightToConvertTo.value === "kilograms"
  ) {
    weightResult.innerHTML = "";
    poundsToKg();
  } else if (
    weightSelect.value === "pounds" &&
    weightToConvertTo.value === "stone"
  ) {
    weightResult.innerHTML = "";
    poundsToStone();
  } else if (
    weightSelect.value === "pounds" &&
    weightToConvertTo.value === "tonnes"
  ) {
    weightResult.innerHTML = "";
    poundsToTonnes();
  } else if (
    weightSelect.value === "pounds" &&
    weightToConvertTo.value === "grams"
  ) {
    weightResult.innerHTML = "";
    poundsToGrams();
  } else if (weightSelect.value === "" || weightToConvertTo.value === "") {
    return alert("Please select a unit!");
  }
});
