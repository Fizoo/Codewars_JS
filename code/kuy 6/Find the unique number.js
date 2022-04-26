
const findUniq = arr => +arr.filter(value => arr.indexOf(value) === arr.lastIndexOf(value));
/*
//2
function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
}
*/
/*
//3
function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
*/

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
console.log(findUniq([ 1, 1, 1, 1, 2 ]))
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))
console.log(findUniq([ 1, 0, 0 ]))
console.log(findUniq([ 1, 0, 1 ]))
