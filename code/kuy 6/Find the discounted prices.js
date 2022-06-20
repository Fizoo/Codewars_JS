const findDiscounted = prices => {
    let newArr=[]
    prices.split(' ').map(el=>Number(el)).
    forEach(((el,i,arr)=> {
        console.log('el=',el," 25%el=",el*1.25)
        if(  (el * 1.25) === arr[i + 1]) {
            //console.log(el)
          newArr.push(el)
            newArr.push(arr[i + 1])
        }
    }))
    return newArr
    //your code here
};

console.log(findDiscounted("15 20 60 75 80 100")) //,"15 60 75"
console.log(findDiscounted("9 9 12 12 12 15 16 20")) //,"9 9 12 15"
