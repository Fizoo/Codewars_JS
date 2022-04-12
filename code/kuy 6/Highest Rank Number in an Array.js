const highestRank = arr => {

    let res = {}
    arr.forEach(el=> res[el]=(res[el]||0)+1)
    let max=Math.max(...Object.values(res))
    return  Math.max(...Object.entries(res).filter(([_,value])=>value===max).map(([value,_])=>value))
}

//const highestRank = arr => arr.sort((a, b) => arr.filter(i => i === b).length - arr.filter(i => i === a).length)[0];

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]  )) //12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10] )) //12
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  )) //3
