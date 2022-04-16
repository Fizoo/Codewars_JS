const isValidWalk = walk => {
    if(walk.length!==10)
        return false
    let res={}
    walk.forEach(el=> res[el]=(res[el]||0)+1
    )
    return !(res.n !== res.s || res.w !== res.e);
    //insert brilliant code here
};

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
console.log(isValidWalk(['w']))
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))

