function pigIt(str){
    return  str.split(' ').map(a=>/\w/.test(a)?a.slice(1) + a.slice(0, 1) + 'ay':a).join(' ')

    //Code here
}

/*
function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}*/

console.log(pigIt('Pig latin is cool') )//igPay atinlay siay oolcay
console.log(pigIt('This is my string') )//hisTay siay ymay tringsay
console.log(pigIt('Hello world !'));     // elloHay orldway !
