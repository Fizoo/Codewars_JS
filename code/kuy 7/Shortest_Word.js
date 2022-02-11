function findShort(s){
    let min=100
    const res= s.split(' ')
    res.forEach(el=>el.length<min?min=el.length:el)
    return min

    //return Math.min.apply(null, s.split(' ').map(w => w.length));
    // return Math.min(...s.split(" ").map (s => s.length));
    //return s.split(' ').reduce((min, word) => Math.min(min, word.length), Infinity);
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
console.log(findShort("ProofOfStake"))