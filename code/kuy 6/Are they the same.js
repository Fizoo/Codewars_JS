const comp = (array1, array2) => {

    if (!array1 || !array2 || array1.length !== array2.length) return false;

    return array1.every(el => array2.some((a,i) => {
            if (a===el*el){
                array2.splice(i,1)
                return true
            }
            return false
         })
    )

    //your code here
};


//2
/*function comp(a, b) {
    return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
}*/

//3
/*function comp(array1, array2) {
    if(array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
}*/

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
console.log(comp(a,b))
a=[]
b=[1]
console.log(comp(a,b))
a= [121, 144, 19, 161, 19, 144, 19, 11]
b=  [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
console.log(comp(a,b))
a= []
b=  null
console.log(comp(a,b))
