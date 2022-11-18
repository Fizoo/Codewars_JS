function strCount(str, letter){
    return [...str].filter(el=>el===letter).length
    //code here
}

console.log(strCount('hello','o'))
