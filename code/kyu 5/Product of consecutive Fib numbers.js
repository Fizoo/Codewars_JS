function productFib(prod) {
    let is = false
    let sum=0
    let arr = []
    arr[0] = 0
    arr[1] = 1
        for (let i = 2; i < prod; i++) {
            arr[i] = arr[i - 1] + arr[i - 2]
            sum=arr[i]*arr[i-1]
            if (sum===prod){
                is=true
                break
            }
            if(sum>prod){
                break
            }
    }
    return [arr.at(-2),arr.at(-1),is]
}
//2
/*function productFib(prod){
    let [a, b] = [0, 1];
    while(a * b < prod) [a, b] = [b, a + b];
    return [a, b, a * b === prod];
}*/
console.log(productFib(4895))
console.log(productFib(5895))
console.log(productFib(447577))

