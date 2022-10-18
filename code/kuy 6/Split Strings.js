function solution(str){
    let arr=[]
    for (let i = 0; i < [...str].length; i+=2) {
        arr.push(str.slice(i,i+2))
    }
    return arr.map(a=>a.length===1?a+'_':a)
}
/*

function solution(s){
    return (s+"_").match(/.{2}/g)||[]
}
*/

console.log(solution( 'abc'))
console.log(solution( 'abcdef'))
