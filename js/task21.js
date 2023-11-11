/**
  * ЗАВДАННЯ 1
  * Перероби функцію на проміс таким чином, щоб проміс повертав значення
  * через 2 секунди після виклику функції
  */
 function greet() {
   return new Promise((res) => {
     setTimeout(() => {
       res('hello world');
     }, 2000);
   }).then((value) => {
     return value;
    })
  }

greet().then((data) => console.log(data));