function firstNonRepeatingLetter(s) {
    return [...s].find(letter=>s.match(new RegExp(`${letter}`,'gi')).length===1) || ''
}
//2
/*function firstNonRepeatingLetter(s) {
    const arr = [...s]

    for (let i = 0; i < arr.length; i++) {
        let regex = new RegExp(arr[i], 'gi')
        let res = s.match(regex)
        if (res.length === 1) {
            return arr[i]
        }
    }
    return ''
}*/

console.log(firstNonRepeatingLetter('a'))//a
console.log(firstNonRepeatingLetter('stress'))//t
console.log(firstNonRepeatingLetter('moonmen'))//e