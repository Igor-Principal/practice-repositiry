/**
 *? Дано рядок, що складається із символів, наприклад, 'abcde'.
 *? Перевірте, що першим символом цього рядка є буква 'a'.
 *? Якщо це так - виведіть 'так', інакше виведіть 'ні'.
 */

function lettersChecking(string, checkLetter) {
  const arr = string.split("");
  if (arr[0] === checkLetter) {
    return "yes";
  }
  return "no";
}
console.log(lettersChecking("abcde", "a"));

const array = [];
if (!array.length) console.log("Порожній масив.");
!array.length && console.log("Порожній масив.");
