function count(array){
    return array.reduce((acc,val)=>{
        acc[val]=(acc[val]||0)+1
        return acc
    },{})
    //your code here
}

console.log(count(['james', 'james', 'john']))
