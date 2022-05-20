const shortestStepsToNum = num => {
    if (num <= 1) return 0;
    if (num % 2 === 1) return 1 + shortestStepsToNum(num - 1);
    return 1 + shortestStepsToNum(num / 2);
};

//console.log(shortestStepsToNum(1)) //0
console.log(shortestStepsToNum(2)) //0
console.log(shortestStepsToNum(12))//4
console.log(shortestStepsToNum(16))//4
console.log(shortestStepsToNum(71))//9
