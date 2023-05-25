function scramble(str1, str2) {
   const countMap={}
    for (const char of str1) {
        countMap[char]=(countMap[char] || 0)+1
    }

    for (const char of str2) {
        if(!countMap[char]){
            return false
        }
        countMap[char]--
    }
    return true

}
/*
function scramble(str1, str2) {
    const str1Arr = str1.split("");
    return [...str2].every((s2) => {
        const index = str1Arr.indexOf(s2);
        if (index >= 0) {
            str1Arr.splice(index, 1);
            return true;
        }
        return false;
    });
}*/

console.log(scramble('rkqodlw', 'world'))
console.log(scramble('cedewaraaossoqqyt', 'codewars'))
console.log(scramble('katas', 'steak'))
console.log(scramble('scriptjavx', 'javascript'))
console.log(scramble('scriptingjava',     'javascript' ))
console.log(scramble('scriptsjava',       'javascripts'))
console.log(scramble('javscripts',        'javascript' ))
console.log(scramble('jscripts',          'javascript' ))

console.log(scramble('aabbcamaomsccdd',   'commas'  ))
console.log(scramble('commas',            'commas'))
console.log(scramble('sammoc',            'commas'   ))
