const squareDigits = num => {
    return Number([...num.toString()].map(a=>a*a).join(''))
};

console.log(squareDigits(3212))
