const findMissingLetter = array => {
    return String.fromCharCode(
        array
            .find((c, i) => array[i + 1].charCodeAt() - c.charCodeAt() !== 1)
            .charCodeAt() + 1
    );
};

/* //2
const findMissingLetter = (array) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const start = alphabet.indexOf(array[0]);
    return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
};*/



console.log(findMissingLetter(['a','b','c','d','f']))
console.log(findMissingLetter(['c','d','c','d','f']))
console.log(findMissingLetter(['O','Q','R','S']))
