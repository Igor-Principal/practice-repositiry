/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

const circle = document.querySelector(".outerCircle");
circle.addEventListener("click", onclick);

function onclick(evt) {
  const item = evt.currentTarget;

  if (item.style.position === "absolute") {
    item.style.position = "static";
    window.removeEventListener("mousemove", onMouseMove);
    return;
  }
  item.style.position = "absolute";
  window.addEventListener("mousemove", onMouseMove);
}

function onMouseMove(evt) {
  circle.style.top = evt.pageY - 15 + "px";
  circle.style.left = evt.pageX - 15 + "px";
}
