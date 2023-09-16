//  *? Напишіть програму, яка отримає від користувача
//   *? число (кількість хвилин) та виведе в консоль
//   *? рядок у форматі годин та хвилин
//  *?      https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
//  *?      70 === 01:10

function showTime(value) {
  const hours = Math.floor(value / 60);
  const minutes = value % 60;
  const modHours = String(hours).padStart(2, 0);
  const modMinutes = String(minutes).padStart(2, 0);
  return `${modHours}:${modMinutes}`;
}
console.log(showTime(70));
