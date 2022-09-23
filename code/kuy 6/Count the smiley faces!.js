function countSmileys(arr) {
  // return arr.filter(el=>el.match(/(: | ;)(- | ~)?(\) | D)/)).length
    const erg=/(:|;)(-|~)?(\)|D)/
    return arr.filter(v => v.match(erg)).length

  //  return arr.filter(el=>smiles.includes(el)).length

}

console.log(countSmileys([':D',':~)',';~D',':)']))//4
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))//1
console.log(countSmileys([':)',':(',':D',':O',':;']))//2
