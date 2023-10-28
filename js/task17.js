/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const btn = document.querySelector('#passwordButton');
const input = document.querySelector('#passwordInput');

btn.addEventListener('click', onClick);

function onClick() {
  const showValue = input.getAttribute('type');
  if (showValue === 'text') {
    input.setAttribute('type', 'password');
    btn.textContent = 'Розкрити';
  } else {
    input.setAttribute('type', 'text');
    btn.textContent = 'Приховати';
  }
}