function queueTime(customers, n) {
    let tills = new Array(n).fill(0)
    for (let i = 0; i < customers.length; i++) {
        let minTill=Math.min(...tills)
        let minIndex=tills.indexOf(minTill)
        tills[minIndex] +=customers[i]
    }
    return Math.max(...tills)
}

console.log(queueTime([], 1)) //0
console.log(queueTime([1,2,3,4], 1)) //10
console.log(queueTime([2,2,3,3,4,4], 2)) //9
console.log(queueTime([1,2,3,4,5], 100)) //5
console.log(queueTime([10,2,3,3], 2)) //10