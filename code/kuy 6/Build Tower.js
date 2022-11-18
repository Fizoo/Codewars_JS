function towerBuilder(nFloors) {
    let arr=[]
    for (let i = 0; i < nFloors; i++) {
        let s=''
        for (let j = nFloors-i; j >=0 ; j) {
            s+='*'
        }
        arr.push(s)

    }
    return arr
    // build here
}

//console.log(towerBuilder(1))
//console.log(towerBuilder(2))
console.log(towerBuilder(3))
//console.log(towerBuilder(8))
