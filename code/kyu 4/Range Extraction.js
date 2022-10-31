const solution = list => {
    list = list.map((v, i) => {
       return  list[i - 1] === v - 1 && list[i + 1] === v + 1 ? '-' : v
    })

    return list.filter((v,i)=>v!=='-'||list[i-1]!=='-').join(',').replace(/,-,/g,'-')

}


console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))
//"-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
