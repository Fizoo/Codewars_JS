function countPositivesSumNegatives(input) {
    return input.filter(Boolean)
        ?input.reduce((acc, val) => {
        if(val===0) return []
        if (val > 0) {
            acc[0] += 1}
        else {
            acc[1] += val}
        return [acc[0], acc[1]]}, [0, 0])
        : []
}

/*
function countPositivesSumNegatives(input) {
    let positiveCount = 0
    let negativeCount = 0
    let positiveSum = 0
    let negativeSum = 0
    return input.reduce((acc, val) => {
        if (val > 0) {
            positiveCount += 1
            positiveSum += val
        } else {
            negativeCount += 1
            negativeSum += val
        }
        return {
            positive: [{count: positiveCount, sum: positiveCount}],
            negative: [{count: negativeCount, sum: negativeSum}]
        }
    }, {})
}
*/
/*
function countPositivesSumNegatives(input) {
    let positiveCount = 0
    let negativeCount = 0
    let positiveSum = 0
    let negativeSum = 0
    return input.reduce((acc, val) => {
        if (val > 0) {
            acc.positive[0].count = (acc.positive[0].count || 0)+1
            acc.positive[0].sum = (acc.positive[0].sum || 0)+val
        } else {
            acc.negative[0].count =(acc.negative[0].count || 0)+1
            acc.negative[0].sum =(acc.negative[0].sum || 0)+val
        }
        return {
            positive: [{count:  acc.positive[0].count, sum:acc.positive[0].sum}],
            negative: [{count:  acc.negative[0].count, sum:acc.negative[0].sum }]
        }
    }, {positive:[{}],
        negative:[{}]
    })


    res={
  positive: [ { count: 11, sum: 57 } ],
  negative: [ { count: 5, sum: -65 } ]
}

}*/

console.log(countPositivesSumNegatives([1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
console.log(countPositivesSumNegatives([0,0]))
console.log(countPositivesSumNegatives([NaN,NaN]))
