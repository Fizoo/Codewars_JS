
const duplicateEncode = word => {
    //one
    const res={}
        const wordToLower=word.toLowerCase().split('')
    wordToLower.forEach((el)=>{
       res[el]=(res[el]||0)+1
    })
    return wordToLower.map((el)=>res[el]===1?'(':')').join('')

    //two
    //return [...word].map(el =>word.match(new RegExp(el,'ig')).length===1?'(':')').join('')

   /* //three
    return word
        .toLowerCase()
        .split('')
        .map( function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');*/
};

console.log(duplicateEncode("din" )) //  =>  "((("
console.log(duplicateEncode("recede" )) // =>  "()()()"
console.log(duplicateEncode("Success" )) //  =>   ")())())"
console.log(duplicateEncode("(( @" )) //  =>  "))(("

