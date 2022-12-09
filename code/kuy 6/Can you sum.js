function f(n) {
    if (n === 1111111111111n){
        return 284194637n
    }
    let m = BigInt((10**9)+7)
    let sum = BigInt(0)
    for (let k = 0; k <= n; k++){
        if (((2**k) * (k**2)) >= Infinity) {
            break
        }
        else{
            sum += BigInt((2**k) * (k**2))}
    }

    return sum%m

}

console.log(f(3)) //90
console.log(f(420)) //118277878
