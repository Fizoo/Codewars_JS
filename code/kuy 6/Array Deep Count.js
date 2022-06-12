function deepCount(a){
   return  a.reduce((acc,val)=>{
        if(Array.isArray(val)){
          acc++
        return acc+deepCount(val)
        }
        else acc++
       return acc
    },0)
}
/*//2
const deepCount = a => a.reduce((s, e) => s + (Array.isArray(e) ? deepCount(e) : 0), a.length);
*/

console.log(deepCount([]))
console.log(deepCount([1, 2, 3]))
console.log(deepCount(["x", "y", ["z"]]))
console.log(deepCount([1, 2, [3, 4, [5]]]))
