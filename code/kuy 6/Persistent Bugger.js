const persistence = num => {
   let count = 0
   while (num >= 10) {
      count++
      num = [...num.toString()].map(Number).reduce((sum, cur) => sum * cur)
   }
   return count

}
/*
//2
const persistence = num => `${num}`.length > 1 ? 1 + persistence(`${num}`.split('').reduce((next, prev) => next * prev)) : 0;

*/

console.log(persistence(39))
console.log(persistence(4))
console.log(persistence(25))
console.log(persistence(999))
