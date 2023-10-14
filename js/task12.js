/**
*? Напиши функцію конструктор User для 
*? створення користувача з такими властивостями:
*? a. userName - ім'я, рядок
*? b. age - вік, число
*? c. numbersOfPost - кількість постів, число
*? d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

*? Додай метод getInfo(), який повертає рядок:
*? `Користувачеві ${ім'я} ${вік} років і в нього ${кількістьПублікацій} публікацій.`

 */

function User({ userName, age, stats: { numbersOfPost, likes }}) {
    // console.log(userObj);
    // const {userName, age, numbersOfPost} = userObj;
    this.userName = userName;
    this.age = age;
    this.numbersOfPost = numbersOfPost;
    this.likes = likes;
    this.getInfo = function () {
        const {userName, age, numbersOfPost, likes} = this;
        return `Користувачеві ${userName} ${age} років і в нього ${numbersOfPost} публікацій і ${likes} лайків.`;
        
    }
}

const polly = new User({ userName: "Polly", age: 30, stats: { numbersOfPost: 15, likes: 54 } });
// const anny = new User({ userName: "Anny", age: 32, numbersOfPost: 18 });
console.log(polly.getInfo());
console.log(anny.getInfo());