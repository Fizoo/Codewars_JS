const number = busStops => {

    return [...busStops].reduce((accum,[on,off])=> accum+on-off,0)

};

console.log(number([[10,0],[3,5],[5,8]]))
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))
