function dec2FactString(n){
    const d = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let s = '0', i = 2;
    while (n){s = d[n%i] + s; n = Math.floor(n / i); i++}
    return s;
}
function factString2Dec(s){
    const d = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const l = s.length;
    return s.split('').reduce((a,e,i) => Number(a) * (l - i) + d.indexOf(e), 0);
}

//console.log(dec2FactString(2982)) //4041000
//console.log(factString2Dec(2982)) //4041000

console.log(dec2FactString(463)) //341010
console.log(dec2FactString(36288000)) //341010
//console.log(factString2Dec(463)) //341010
//console.log(dec2FactString(341010)) //341010
//console.log(factString2Dec( 341010)) //341010
