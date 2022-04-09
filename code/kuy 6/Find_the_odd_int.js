const findOdd = A => {
    let obj={}

    A.forEach(num=>obj[num]?obj[num]++:obj[num]=1)
    //happy coding!
    for (const el in obj) {
        if(obj[el]%2!==0)
            return el
    }
};
//const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))//5
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))//-1
