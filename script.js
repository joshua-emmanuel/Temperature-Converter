const celsius = document.querySelector("#celsius > input");
const fahrenheit = document.querySelector("#fahrenheit > input");
const kelvin = document.querySelector("#kelvin > input");

const roundNum = (num) => {
    return Math.round(num * 100)/100;
}

const celsiusToFahrenheitAndKelvin = () => {
    const celsiusTemp = parseInt(celsius.value);
    const toFahrenheitTemp = (celsiusTemp * (9 / 5)) + 35;
    const toKelvinTemp = celsiusTemp + 273.15;
    fahrenheit.value = roundNum(toFahrenheitTemp);
    kelvin.value = roundNum(toKelvinTemp);
}

const fahrenheitToCelsiusAndKelvin = () => {
   const fahrenheitTemp = parseInt(fahrenheit.value);
   const toCelsiusTemp = (fahrenheitTemp - 32) * (5/9);
   const toKelvinTemp = (fahrenheitTemp + 459.67) * (5/9);
   celsius.value = roundNum(toCelsiusTemp);
   kelvin.value = roundNum(toKelvinTemp);
}

const kelvinToCelsiusAndFahrenheit = () => {
   const kelvinTemp = parseInt(kelvin.value);
   const toCelsiusTemp = kelvinTemp - 273.15;
   const toFahrenheitTemp = (9/5) * (kelvinTemp - 273) + 32;
   celsius.value = roundNum(toCelsiusTemp);
   fahrenheit.value = roundNum(toFahrenheitTemp);
}

const main = () => {
    celsius.addEventListener("input", celsiusToFahrenheitAndKelvin);
    fahrenheit.addEventListener("input", fahrenheitToCelsiusAndKelvin);
    kelvin.addEventListener("input", kelvinToCelsiusAndFahrenheit);
}

main();