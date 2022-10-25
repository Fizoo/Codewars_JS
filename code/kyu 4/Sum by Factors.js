const isPrime=(number)=>{
    for (let i = 2; i < number; i++) {
        if(number%i===0 )
            return false
    }
    return true
}

const sumOfDivided = lst => {
    let res=[]
    let primeNumbers=[]
    for (let i = 2; i < 10000; i++) {
        lst.forEach(num=>{
            if(num%i===0 && !primeNumbers.includes(i) && isPrime(i)){
                primeNumbers.push(i)
            }
        })
    }

    primeNumbers.forEach(num=>{
    let sum= lst.reduce((value,item)=>item%num===0? value+=item:value,0)
        res.push([num,sum])
    })
    return res
};

console.log(sumOfDivided([12, 15]))// [ [2, 12], [3, 27], [5, 15] ]);
console.log(sumOfDivided([15,21,24,30,45]))//[ [2, 54], [3, 135], [5, 90], [7, 21] ]);
