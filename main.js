const inputElement = document.getElementsByClassName("input-section");
const celsiusInput = document.getElementsByClassName("celsius");
const farenheitInput = document.getElementsByClassName("farenheit");
const kelvinInput = document.getElementsByClassName("kelvin");
let celsius;
let farenheit = 1.8 * celsius + 32;
let kelvin = celsius + 273.15;

for (let i = 0; i < inputElement.length; i++) {
  inputElement[i].addEventListener("change", (e) => {
    let userInput = parseFloat(e.target.value);

    if (e.target.classList.contains("celsius")) {
      celsius = userInput;
      kelvin = celsius + 273.15;
      farenheit = 1.8 * celsius + 32;
    } else if (e.target.classList.contains("farenheit")) {
      farenheit = userInput;
      celsius = (farenheit - 32) * (5 / 9);
      kelvin = celsius + 273.15;
    } else {
      kelvin = userInput;
      celsius = kelvin - 273.15;
      farenheit = 1.8 * celsius + 32;
    }
    celsiusInput[0].value = parseFloat(celsius.toFixed(2));
    farenheitInput[0].value = parseFloat(farenheit.toFixed(2));
    kelvinInput[0].value = parseFloat(kelvin.toFixed(2));
  });
}
