const solution = (str, ending) => {
    const len=ending.length
    if(len===0) return true
    return  str.slice(-len)===ending
    //return str.endsWith(ending);
}

console.log(solution('abcde', 'de'))