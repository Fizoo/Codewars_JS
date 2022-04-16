const positiveSum = arr => {
    return arr.reduce((sum,count)=>count>0?sum+count:sum,0)
};

console.log(positiveSum([1,-2,3,4,5]))
