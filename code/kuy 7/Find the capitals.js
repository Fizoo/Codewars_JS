const capitals = function (word) {
   return [...word].reduce((a,item,i)=> item === item.toUpperCase()?[...a,i]:a,[])

    // Write your code here
};

console.log(capitals('CodEWaRs'))
