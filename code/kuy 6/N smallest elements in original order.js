function firstNSmallest(array, n){
    const result = [];
    const arrSorted = [...array].sort((a, b) => a - b).slice(0, n);
    array.forEach(a=> arrSorted.includes(a)?result.push(...arrSorted.splice(arrSorted.indexOf(a),1)):null)
    return result;
}
/*//2
function firstNSmallest(array, n){
 while(array.length != n) {
   array.splice(array.lastIndexOf(Math.max(...array)), 1)
   }
   return array
 }


*/

console.log(firstNSmallest([1,2,3,4,5],3))
console.log(firstNSmallest([5,4,3,2,1],3))
console.log(firstNSmallest([1,2,3,1,2],3))
console.log(firstNSmallest([-3, 5, 10, -1, -3, -7, 8, 9, 3, 10] ,2))
console.log(firstNSmallest([2,1,2,3,4,2],4))
