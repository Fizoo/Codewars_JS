function removeSmallest(numbers) {
   const minIndex=numbers.indexOf( Math.min(...numbers))
   return [...numbers.slice(0,minIndex),...numbers.slice(minIndex+1)]
}

/*//2
const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
   */

console.log(removeSmallest([1, 2, 3, 4, 5]))
