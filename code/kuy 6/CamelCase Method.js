String.prototype.camelCase=function(){
    let arg=this.toString().trim().split(' ')
    let arr=arg.map((v)=>
    v?v.slice(0,1).toUpperCase()+v.slice(1):v)
    return arr.join('')
    //your code here
}

//V2
/*String.prototype.camelCase = function () {
    return this.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase())
}*/

//v3
/*return this.split(' ').map(w => w.slice(0, 1).toUpperCase() + w.slice(1)).join('');*/

console.log( "test case".camelCase())