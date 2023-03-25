function mix(s1, s2) {
    let objArr1 =splitStr(s1)
    let objArr2 = splitStr(s2)
    let resArr = mainArr(objArr1,objArr2)

    return resArr.filter(el => el[1] > 1).sort((a, b) => {
        if (a[1] === b[1]) {
            if (a[2] === b[2]) {
                return a[0].localeCompare(b[0]);
            } else if (a[2] === 3 && b[2] === 2) {
                return 1;
            } else if (a[2] === 2 && b[2] === 3) {
                return -1;
            } else {
                return a[2] - b[2];
            }
        } else {
            return b[1] - a[1];
        }

    }).map(el => {
        el[0] = repeatChar(el)
        el[2] = el[2] === 1 ? '1' : el[2] === 2 ? '2' : '='
        return el
    }).reduce((value, item) => {
        value += item[2]+':' + item[0] + '/'
        return value
    }, '').slice(0,-1)

}

function mainArr(arr1,arr2){
    let res=[]
    for (let key in arr1) {
        if(arr2.hasOwnProperty(key)){
            if(arr1[key]>arr2[key]){
                res.push([key,arr1[key],1])
            }
            else if (arr1[key]<arr2[key]){
                res.push([key,arr2[key],2])
            }
            else res.push([key,arr1[key],3])
            delete arr2[key];
        }

        else res.push([key,arr1[key],1])
    }

    for (let key in arr2) {
        res.push([key, arr2[key],2]);
    }

    return  res.filter(el=>el[1]>1)
}
function splitStr(str) {

    return str.replace(/\W/g,'').split('').reduce((obj, item) => {
        obj[item] = (obj[item] || 0) + 1
        return obj
    }, {})
}
function repeatChar(strArr) {
    const char = strArr[0];
    const count = strArr[1];

    return char.repeat(count);
}

s1 = "Are they here"
s2 = "yes, they are here"
console.log(mix(s1, s2)) // "2:eeeee/2:yy/=:hh/=:rr"

s1 = "looping is fun but dangerous"
s2 = "less dangerous than coding"
console.log(mix(s1, s2)) //"1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"
 s1 = " In many languages"
s2 = " there's a pair of functions"
console.log(mix(s1, s2)) //"1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt"