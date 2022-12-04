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
