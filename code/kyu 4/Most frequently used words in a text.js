function topThreeWords(text) {

    text = text.toLowerCase().split` `.map(v=>{
        if (v===`'`) return ''
        return v.replace(/[^'a-z]/gi,'')
    }).filter(v=>v)

   let arr2=  text.reduce((a,b)=>{
       b=b.toLowerCase();
        a[b]=(a[b] || 0) + 1
        return a
    },{})

        return Object.entries(arr2).sort(([,b],[,d])=>d-b).map(([a,b])=>a).slice(0,3)

}

//2
/*function topThreeWords(text) {
    const occurences = text
        .toLowerCase()
        .replace(/[^\w\s']/g, '')
        .split(/\s+/)
        .filter(w => w)
        .filter(w => w !== "'")
        .reduce((acc, v) => {
            acc[v] = (acc[v] || 0) + 1
            return acc
        }, {})

    return Object.entries(occurences)
        .sort((a,b) => b[1] - a[1])
        .map(c => c[0])
        .slice(0,3)
}*/

console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"))//, ['e','d','a']))
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"))//,['e','ddd','aa'])
console.log(topThreeWords("  //wont won't won't "))//, ["won't", "wont"]
