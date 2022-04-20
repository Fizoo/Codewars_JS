const findEvenIndex = arr => {

    let leftSum
    let rightSum

    const len=arr.length-1

    for (let i = 1; i < len; i++) {

        leftSum=arr.filter((a,index)=>index<i).reduce((a,b)=>a+b,0)
        rightSum=arr.filter((a,index)=>index>i).reduce((a,b)=>a+b,0)

        if(leftSum===rightSum) {
            return i
        }
    }
    return -1
    //Code goes here!
};

/*
//2
function findEvenIndex(arr) {
    for (var i = 1; i < arr.length - 1; i++) {
        if (
            arr.slice(0, i).reduce((a, b) => a + b) ===
            arr.slice(i + 1).reduce((a, b) => a + b)
        ) {
            return i;
        }
    }
    return -1;
}
*/

//console.log(findEvenIndex([1,2,3]))
console.log(findEvenIndex([1,2,3,4,3,2,1]))
console.log(findEvenIndex([1,100,50,-51,1,1]))
console.log(findEvenIndex([1,2,3,4,5,6]))
console.log(findEvenIndex([20,10,30,10,10,15,35]))
console.log(findEvenIndex([20,10,-80,10,10,15,35] ))
