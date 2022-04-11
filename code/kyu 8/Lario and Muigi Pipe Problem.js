const pipeFix = numbers => {

    let max=Math.max(...numbers)
    let min=Math.min(...numbers)
    return [...Array(max-min+1).keys()].map(x=>x+min)
}

console.log(pipeFix([1,2,3,5,6,8,9]))
console.log(pipeFix([1,2,3,12]))
console.log(pipeFix([-1,4]))
