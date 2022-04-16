const accum = s => {
    let result = ''
    let arr = [...s]
    for (let i = 0; i < s.length; i++) {
        let symvol = arr[i]
        for (let j = 0; j <= i; j++) {
            symvol = j === 0 ? arr[i].toUpperCase() : arr[i].toLowerCase()
            result = result.concat(symvol)
        }
        if (i !== s.length - 1) {
            result = result.concat('-')
        }
    }
    return result
}
/*

//2
    const accum = s => s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
*/
console.log(accum("ZpglnRxqenU"))
