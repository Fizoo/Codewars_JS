function solution(number){
  /*  let count=0
    if( number<0)
        return 0
    for (let i = 0; i < number; i++) {
        if(i%3===0&&i%5===0){
            count+=i
        }
        else if(i%3===0)
            count+=i
        else if(i%5===0)
            count+=i
    }
    return count*/
    return number<0?0:[...Array(number).keys()].filter(a=>a%3===0||a%5===0).reduce((a,b)=>a+b)
}

console.log(solution(10))

