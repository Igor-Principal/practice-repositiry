/**
 * ЗАВДАННЯ 8
 * Створи список справ.
 * Є інпут, в який вводиться назва задачі.
 * Після натискання на кнопку "Додати" завдання додається до списку #list.
 * Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
 * прибрати завдання зі списку.
 * Список із завданнями має бути доступним після перезавантаження сторінки.
 */

const form = document.querySelector("#task-form");
const list = document.querySelector("#task-list");


form.addEventListener("submit", onSubmit);
const KEY = "value";
const arr = JSON.parse(localStorage.getItem(KEY)) || [];
console.log(arr);

function onSubmit(evt) {
  evt.preventDefault();
  let info = evt.target.elements.taskName.value;
  arr.push({ taskName: info, id: Math.random() });
  localStorage.setItem(KEY, JSON.stringify(arr));
  getInfo();
  evt.target.reset();
}

function markup(data) {
  const newMarkup = data
    .map(
      ({ taskName, id }) => `<li id="${id}">
      <p>${taskName}</p>
      <button id="Delete">Delete</button>
    </li>`
    )
    .join("");
  list.insertAdjacentHTML("beforeend", newMarkup);
}

function getInfo() {
  list.innerHTML = "";
  const data = JSON.parse(localStorage.getItem(KEY));
  if (!data.length) return;
  markup(data);
}
getInfo();
 