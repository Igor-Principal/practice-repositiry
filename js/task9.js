/**
*? Поверніть об'єкт, в якому вказано кількість тегів.
*? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}
1)flat map
2) reduce


 */
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const tagsArray = tweets
  .flatMap((tweet) => tweet.tags)
  .reduce((acc, elem) => {
    console.log(acc);
    return { ...acc, [elem]: acc[elem] ? acc[elem] + 1 : 1 };
  }, {});

console.log(tagsArray);
