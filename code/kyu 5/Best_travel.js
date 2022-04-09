/*const chooseBestSum = (t, k, ls) => {
    if(ls.length<2)
        return null
    let res=[]
    let resAr
    const len = ls.length;
    const lenCe=Math.floor(len/2)
    for (let i = 0; i <=lenCe; i++) {
        for (let j = i+1; j <= len; j++){
            for(let k = j+1; k <= len; k++){
                let ar=[ls[i],ls[j],ls[k]]
                if( ar.filter(Boolean).length===3) {
                    res.push(ar)
                }
            }
        }
    }

    resAr=res.map(a=>a.reduce((a,b)=>a+b,0))

    if (resAr.length===0)
        return null

    const closestRight = Math.min(...resAr.filter(v => v > t));
    const closestLeft = Math.max(...resAr.filter(v => v <= t));

    return  closestLeft?closestLeft:closestRight




};*/

const chooseBestSum = (t, k, ls) => ls.reduce((r, e) => r.concat(r.filter(c => c.length < k).map(c => c.concat([e]))), [[]]).filter(c => c.length === k).map(c => c.reduce((a, b) => a + b)).filter(s => s <= t).sort((a, b) => b - a)[0] || null;

let  ts = [50, 55, 56, 57, 58]
console.log(chooseBestSum(163, 3, ts))//163
 ts = [50]
console.log(chooseBestSum(163, 3, ts))//null
ts = [91, 74, 73, 85, 73, 81, 87]
console.log(chooseBestSum(230, 3, ts))//228
