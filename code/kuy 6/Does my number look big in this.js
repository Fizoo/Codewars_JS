const narcissistic = value => {

        return value===[...value.toString()].map(Number).reduce((sum,cur)=>sum+Math.pow(cur,`${value}`.length),0)
    // .map(el=>Math.pow(el,3)).reduce((a,b)=>a+b)

}

//console.log(narcissistic(371))
//console.log(narcissistic(7))
console.log(narcissistic(153))
console.log(narcissistic(1652))
