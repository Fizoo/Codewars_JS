function validParentheses(parens) {
      if (parens.length===1
          || parens.startsWith(')')
          || parens.endsWith('(')
          || parens.length%2!==0
          || parens.split('(').length!==parens.split(')').length
      ) return false
    let res = true

    let x = [...parens].reduce((a, b) => {
        if (b === '(') a += 1
        if (b === ')') a -= 1
        if (a < 0) res = false
        return a
    }, 0);
    return res && x === 0


}

/*
function validParentheses(parens){
    return [...parens].reduce((a,c) => (a+c).replace("()",'') ) == ""?true:false;
}
*/

console.log(validParentheses("()")) //true
console.log(validParentheses(")(()))")) //false
console.log(validParentheses("(")) //false
console.log(validParentheses('(())((()())())  ')) //true
console.log(validParentheses("())(()")) //false
