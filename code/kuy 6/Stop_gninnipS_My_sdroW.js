function spinWords(string){
    return string.split(' ').map(a=>a.length>5?[...a].reverse().join(''):a).join(' ')
}

console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("Welcome"))
console.log(spinWords("Seriously this is the last one"))