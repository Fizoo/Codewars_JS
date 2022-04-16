const getMiddle = s => {
    const len = (s.length)

    return len % 2 === 0 ? `${s[(len / 2-1)]}${s[(len / 2 )]}` : s[Math.floor(len / 2)]
}
/*
//2
const getMiddle = s => s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
*/

/*//2
function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}*/

    //Code goes here!

console.log(getMiddle('abcdef'))
console.log(getMiddle('abcde'))
