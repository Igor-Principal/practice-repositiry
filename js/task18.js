/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

const decreaseBtn = document.querySelector("#decrease");
const increaseBtn = document.querySelector("#increase");
const box = document.querySelector("#box");

increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);

let width = parseInt(getComputedStyle(box).width);
let height = parseInt(getComputedStyle(box).height);

function increase() {
  width += 10;
  height += 10;
  box.style.width = width + "px";
  box.style.height = height + "px";
}

function decrease() {
  width -= 10;
  height -= 10;
  box.style.width = width + "px";
  box.style.height = height + "px";
}
