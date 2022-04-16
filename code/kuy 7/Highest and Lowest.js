function highAndLow(numbers){
    let res=numbers.split(' ').map(Number)
    return `${Math.max(...res)} ${Math.min(...res)}`
    // ...
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
