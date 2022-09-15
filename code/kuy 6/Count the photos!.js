const countPhotos = road => {
    let arr=[...road]

    //let count = 0

    let x=0
    let y=0
    let o=0
    let xSum=0
    let ySum=0
    for (let i = 0; i < arr.length; i++) {
        let s=arr[i]
        if(s==='.'){
            o++
            if(x>0){
                xSum+=x
            }
        }
        if(s==='>'){
            x++
        }
        if(s==='<'){
            y++
            if(o>0){
                ySum+=o
            }
        }
    }

  /*  for (let i = 0; i < arr.length; i++) {
        if(arr[i]==='>'){
          count+=  arr.slice(i).filter(el=>el==='.').length
          // arr.splice(i, 1);
           //i--
        }
        if (arr[i]==='<'){
            count+=  arr.slice(0,i).filter(el=>el==='.').length
          // arr.splice(i, 1);
           // i--
        }
    }*/

    return ySum+xSum
}


console.log(countPhotos('.>>>')) //0
console.log(countPhotos('>.>..<')) //8
console.log(countPhotos('.><.>>.<<')) //11

