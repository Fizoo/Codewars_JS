function sumMix(x){
    return x.map(a=>Number(a)).reduce((a,b)=>a+b)
}

console.log(sumMix([9, 3, '7', '3']))
