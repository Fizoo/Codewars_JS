const digital_root = n => {

   while(n>=10){
    n=[...n.toString()].map(Number).reduce((sum,cur)=>sum+cur,0)
   }
   return n


}
/* //2
const digital_root = n => ((n - 1) % 9) + 1;
*/

/*//3
function digital_root(n) {
    if (n < 10) return n;

    return digital_root(
        n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}
*/


console.log(digital_root(942))
console.log(digital_root(132189))
console.log(digital_root(10))

/*
*  16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
* */
