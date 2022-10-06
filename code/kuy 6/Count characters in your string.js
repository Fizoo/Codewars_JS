function count (string) {
    // The function code should be here
    return [...string].reduce((obj,item)=>{
        obj[item]=(obj[item] || 0)+1
        return obj
    },{})
}

console.log(count('aba'))
