const summation = num => {
    /*//one
    let res=0;
    for (let i = 1; i <= num; i++) {
        res+=i;
    }
    return res;*/

    //two
    return [...Array(num+1).keys()].reduce((accum,item)=>accum+item)

    //three rec
    //return (num > 1) ? num + summation(num - 1):num;

    //four
    // return num * (num + 1) / 2

}
console.log(summation(1))