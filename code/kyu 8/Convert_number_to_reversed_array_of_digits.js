const digitize = n => {
    return [...String(n)].reverse().map(a=>Number(a))
};

console.log(digitize(35231))