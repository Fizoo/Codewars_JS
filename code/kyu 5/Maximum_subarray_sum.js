const maxSequence = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        for (let j = 1; j <= arr.length; j++) {
            if (arr.slice(i, j).reduce((a, b) => a + b, 0) > sum) {
                sum = arr.slice(i, j).reduce((a, b) => a + b, 0);
            }
        }
    return sum > 0 ? sum : 0;
    // ...
}
console.log(maxSequence([]))
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
