function duplicateEncode(word) {
    const encode = word.toLowerCase().split("");
    const result = encode.reduce((acc, elem) => ({ ...acc, [elem]: acc[elem] ? acc[elem] + 1 : 1 }), {});
    return encode.map(letter => {
        if (result[letter] === 1) return "(";
            return ")";
    }).join("");
}

console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));


// function duplicateEncode(word){
//   return word
//     .toLowerCase()
//     .split('')
//     .map( function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//     })
//     .join('');
// }


// function duplicateEncode(word) {
//   word = word.toLowerCase();
//   return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
// }