const sqInRect = (lng, wdth) => {
    let arr = [];

    if (lng === wdth) return null;

    while (lng > 0 && wdth > 0) {
        arr.push(lng > wdth ? wdth : lng);
        lng > wdth ? (lng -= wdth) : (wdth -= lng);
    }
    return arr;


};
console.log(sqInRect(5, 5))
console.log(sqInRect(5, 3))
console.log(sqInRect(20,14))
