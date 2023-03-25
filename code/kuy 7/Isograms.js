function isIsogram(str){

    return str.length===[...new Set(str.toLowerCase())].length
}

console.log(isIsogram("Dermatoglyphics")) //true
console.log(isIsogram("moose")) //false
console.log(isIsogram("moOse")) //false
console.log(isIsogram("aba")) //false