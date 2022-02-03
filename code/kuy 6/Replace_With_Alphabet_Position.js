function alphabetPosition(text) {
    return [...text].map(el=>parseInt(el,36)-9).filter(a=>a>0).join(" ")
}

console.log(alphabetPosition('a b s fdf'))
console.log(alphabetPosition('xyor09b@'))
console.log(alphabetPosition("The sunset sets at twelve o' clock."))