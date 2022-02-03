const uniqueInOrder = iterable => {
    return [...iterable].filter((v,i,a) => a[i] !== a[i+1])
    //return [...iterable].filter((a, i) => a !== iterable[i-1])
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'))