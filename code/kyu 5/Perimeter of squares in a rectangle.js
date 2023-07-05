function perimeter(n) {
    if (n===0)
        return 4
    let resSum=4

    let rect=[0,1]

    for (let i = 2; i < n+2; i++) {
        rect[i]=rect[i-1]+rect[i-2]
        resSum+=rect[i]*4
    }

    return resSum
}

//v2
/*const perimeter = N => {
    let [a, b] = [1, 1];
    for (let i = 0; i <= N; i++) [a, b] = [b, a + b];
    return (b - 1) * 4;
}*/

//console.log(perimeter(0))//4
console.log(perimeter(5))//80
console.log(perimeter(6))//80???
console.log(perimeter(7))//216
console.log(perimeter(20))//114624