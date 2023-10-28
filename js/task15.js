/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/
const btn = document.querySelector("#alertButton");
const input = document.querySelector("#alertInput");
btn.addEventListener("click", onClick)

function onClick() {
    console.log(input.value);
}