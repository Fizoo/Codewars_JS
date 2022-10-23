function high(x){

    const alphabet=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const arr=x.split(' ')
    let result=''
    let max=0
    for (let i = 0; i <arr.length ; i++) {
        let sum=0
        let s=[...arr[i]]
        for (let j = 0; j < s.length; j++) {
           sum+=alphabet.reduce((value,item,i)=>item===s[j]?value+=i+1:value,0)
        }
       /* console.log('sum: ',sum)
        console.log('max: ',max)*/
        if(sum>max){
            max=sum
            result=arr[i]
        }
    }
   return result
}
/*
function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
}
*/


console.log(high('man i need a taxi up to ubud')) //taxi
console.log(high('what time are we climbing up the volcano')) //taxi
console.log(high('aa b')) //taxi
console.log(high('b aa')) //taxi
console.log(high('d bb')) //taxi
console.log(high('bb d')) //taxi
