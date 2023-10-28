/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
const btn = document.querySelector("#swapButton");
const leftSwapInput = document.querySelector("#leftSwapInput");
const rightSwapInput = document.querySelector("#rightSwapInput");
btn.addEventListener("click", onClick);
function onClick() {
    const leftValue = leftSwapInput.value;
    const rightValue = rightSwapInput.value;
    leftSwapInput.value = rightValue;
    rightSwapInput.value = leftValue;
}