const conversionValue = document.getElementById("conversion-value");
const convertBtn = document.getElementById("convert-btn");

const meterToFeetEl = document.getElementById("meter-to-feet-el");
const feetToMeterEl = document.getElementById("feet-to-meter-el");

const literToGallonEl = document.getElementById("liter-to-gallon-el");
const gallonToLiterEl = document.getElementById("gallon-to-liter-el");

const kilogramToPoundEl = document.getElementById("kilogram-to-pound-el");
const poundToKilogramEl = document.getElementById("pound-to-kilogram-el");

function meterToFeet(val) {
    const inFeet = (val * 3.281).toFixed(3);
    const output = `${val} meter = ${inFeet} feet`;
    return output;
}

function feetToMeter(val) {
    const inMeter = (val / 3.281).toFixed(3);
    const output = `${val} feet = ${inMeter} meter`;
    return output;
}

function literToGallon(val) {
    const inGallon = (val / 3.785).toFixed(3);
    const output = `${val} liter = ${inGallon} gallon`;
    return output;
}

function gallonToLiter(val) {
    const inLiter = (val * 3.785).toFixed(3);
    const output = `${val} gallon = ${inLiter} liter`;
    return output;
}

function kilogramToPound(val) {
    const inPound = (val * 2.205).toFixed(3);
    const output = `${val} kilogram = ${inPound} pound`;
    return output;
}

function poundToKilogram(val) {
    const inKilogram = (val / 2.205).toFixed(3);
    const output = `${val} pound = ${inKilogram} kilogram`;
    return output;
}

function renderValues() {
    const val = conversionValue.value;
    meterToFeetEl.textContent = meterToFeet(val);
    feetToMeterEl.textContent = feetToMeter(val);
    literToGallonEl.textContent = literToGallon(val);
    gallonToLiterEl.textContent = gallonToLiter(val);
    kilogramToPoundEl.textContent = kilogramToPound(val);
    poundToKilogramEl.textContent = poundToKilogram(val);
}

window.onload = function () {
    renderValues();
}
convertBtn.addEventListener("click", function () {
    renderValues();
})

