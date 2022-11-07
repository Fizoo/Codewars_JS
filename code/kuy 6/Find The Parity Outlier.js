function findOutlier(integers){
    let evel=0
    let odd=0
     integers.forEach(el=> {
         el % 2 === 0 ? evel++ : odd++
         if(evel===2  || odd===2) return;

     })
    return evel===1?integers.find(el=>el%2===0):integers.find(el=>el%2!==0)
    //your code here
}

//2
/*function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
}*/

console.log(findOutlier([0, 1, 2]))//1
console.log(findOutlier([1, 2, 3]))//2
console.log(findOutlier([2,6,8,10,3]))//3
