const deleteNth = (arr, n) => {
    let obj = {}
    let newArr = []
    arr.map(el=> {
        if (!obj[el]) {
            obj[el] = 1
            newArr.push(el)
        } else if (obj[el] < n) {
            obj[el] = obj[el] + 1
            newArr.push(el)
        }
    })


    return newArr
}

//2
/*const deleteNth = (a, x) => {
    let m = {};
    return a.filter( v => (m[v] = m[v]+1||1) <= x );
}*/

console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2)) //
