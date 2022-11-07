function rgb(r, g, b){
    return [r,g,b].map(el=> {
        if(el>255) el=255
        if(el<0) el=0
        let s=el.toString(16).toUpperCase()
       return s.length===1?0+s:s
    }).join('')
    // complete this function
}

console.log(rgb(0,0,0)) //000000
console.log(rgb(0,0,-20)) //000000
console.log(rgb(300,255,255))//'FFFFFF'
console.log(rgb(173,255,47))// 'ADFF2F'
