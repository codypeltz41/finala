const display = document.querySelector("#display");
const btns = document.querySelectorAll(".num, .operator");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let value = e.target.innerText;
    display.value += value;
  });
});

document.querySelector("#clear").addEventListener("click", (e) => {
  display.value = "";
});

document.querySelector("#equals").addEventListener("click", (e) => {
  display.value = eval(display.value);
});
