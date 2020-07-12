const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");
const operatorSelect = document.getElementById("operator");
const calculateButton = document.getElementById("calculate-button");
const outputEl = document.getElementById("output");

calculateButton.addEventListener("click", handleClick);
input1.addEventListener("keypress", handleKeyPress);
input2.addEventListener("keypress", handleKeyPress);

function handleKeyPress(e) {
  if (e.key === "Enter") {
    handleClick();
  }
}

function handleClick(event) {
  const value1 = parseInt(input1.value) || 0;
  const value2 = parseInt(input2.value) || 0;
  const operator = operatorSelect.value || "+";

  const result = calculate(value1, value2, operator);
  outputEl.innerText = Math.ceil(result * 100) / 100;
}

function calculate(value1, value2, operator) {
  if (operator === "+") return value1 + value2;
  else if (operator === "-") return value1 - value2;
  else if (operator === "*") return value1 * value2;
  else if (operator === "/") return value1 / value2;
  else return 0;
}
