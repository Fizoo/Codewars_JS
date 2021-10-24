function arrayDiff(a, b) {
  // return a.length===0||b.length===0?[]: [...a,...b].filter(el=>!a.includes(el)||!b.includes(el))
    return a.filter(e => !b.includes(e));
}

console.log(arrayDiff([1,2,2,2,3],[]))