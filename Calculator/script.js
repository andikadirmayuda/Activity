const display = document.querySelector(".display");
const one = document.getElementById("one");
const angka = document.querySelectorAll(".angka");
const text = document.getElementById("text");

const updateDisplay = () => {
  const display = document.getElementById("text");
  display.value = angka;
};
updateDisplay();
