document.addEventListener("DOMContentLoaded", function() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");
  const convertButton = document.getElementById("convert-button");

  convertButton.addEventListener("click", function() {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
  });
});
