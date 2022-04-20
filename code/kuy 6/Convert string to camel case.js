const toCamelCase = str => {

    return str.split(/[\W_]/).map((el,i)=>i!==0?el.slice(0,1).toUpperCase().concat(el.slice(1)):el).join('')

}
console.log(toCamelCase(''))
console.log(toCamelCase('the_stealth_warrior'))
console.log(toCamelCase('the-stealth-warrior'))
console.log(toCamelCase('The_Stealth_Warrior'))
