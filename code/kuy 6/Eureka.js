function sumDigPow(a, b) {
   /* let res;
    res = [];
    for (let i = a; i <=b ; i++) {
        if(i<10) {
            res.push(i)
        }
        else if (i%10<10){
            const a1=Math.floor(i/10)
            const a2=i%10
            if(i===a1+a2*a2) {
                res.push(i)
            }
        }
    }
    return res*/

    let result = [];

    for (let i = a; i <=b; i++) {
        if ( i === i.toString().split('')
            .map((item,index) => {return Math.pow((+item), (index + 1))})
            .reduce((a,b) => {return a + b})) {
            result.push(i);
        }
    }
    return result

}

console.log(sumDigPow(2,100))