snail = array => {
    let copyArray = array
    let resArray = []
    while (copyArray.length ) {
        let tempArr=[]
        resArray=[...resArray,...copyArray.shift()]
        copyArray.forEach(el => resArray.push(el.pop()))
        if(copyArray.length>0){
          resArray=[...resArray,...copyArray.pop().reverse()]
        }
        copyArray.forEach(el => tempArr.push(el.shift()))
        resArray.push(...tempArr.reverse())
    }
    return resArray
    // enjoy
}


/*const snail = function(array) {
    const list = [];

    while(array.length) {
        list.push(...array.shift(), ...array.map(row => row.pop()));

        array.reverse().map(row => row.reverse());
    }

    return list;
}*/

console.log(snail([[]])) // []);
console.log(snail([[1]]))// [1]);
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))// [1, 2, 3, 6, 9, 8, 7, 4, 5]);
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))//[1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]))// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
