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

console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2)) //
