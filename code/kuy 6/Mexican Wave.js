function wave(str){
    let arr=[]
    for (let i = 0; i < str.length; i++) {

        if(str[i]!==' ') {
            let s = str[i].toUpperCase()
            let newStr = []
            for (let j = 0; j < str.length; j++) {
                let x = str[j].toLowerCase()
                if (i === j) {
                    x = s
                }
                newStr.push(x)
            }
            arr.push(newStr.join(''))
        }
    }
    return arr
    // Code here
}

/* 2
var wave=w=>[...w].map((a,i)=>w.slice(0,i)+a.toUpperCase()+w.slice(i+1)).filter(a=>a!=w)*/

console.log(wave('Hello'))
