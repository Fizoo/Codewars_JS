const countBits = n => [...n.toString(2)].filter(Number).length
    // Program Me


//countBits = n => n.toString(2).split('0').join('').length;

//const countBits = n => n.toString(2).split("").reduce((a,b) => parseInt(a)+parseInt(b),0);


console.log(countBits(4))
console.log(countBits(7))
console.log(countBits(9))
