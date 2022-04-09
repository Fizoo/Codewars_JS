const listSquared = (m, n) => {
    let res=[]
    for (let i = m; i <=n ; i++) {
        let sum=0
        for (let j = 1; j <= i; j++) {
            if(i%j===0){
                sum+=j*j
            }
        }
        if(Math.sqrt(sum)%1===0) {
            res.push([i, sum])
        }
    }
    return res

};

console.log(listSquared(1, 42))
console.log(listSquared(42, 250))
console.log(listSquared(250, 500))
