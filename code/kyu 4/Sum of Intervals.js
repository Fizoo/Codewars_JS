function sumIntervals(intervals) {
    let arr=[]


    for (let i = 0; i < intervals.length; i++) {
        
        for (let j = intervals[i][0]; j < intervals[i][1] ; j++) {
           arr.push(j)
        }
    }
    return [...new Set([...arr])].length

}
//2
/*function sumIntervals(xs) {
    let ys = xs.sort(([a,b], [c,d]) => a-c);
    let m = -Number.MAX_VALUE;
    let res = 0;
    for (let [a,b] of ys) {
        m = Math.max(m, a);
        res += Math.max(0, b-m);
        m = Math.max(m, b);
    }
    return res;
}*/

//3
/*function sumIntervals(intervals){
    intervals = intervals.sort(function(a, b) { // O(n)
        return a[0] - b[0];
    });
    intervals = intervals.reduce(function(acc, el, index, array) { // O(n)
        const anterior = array[index - 1];
        if (array.length > 1 && anterior !== undefined) {
            if (el[0] < acc[acc.length - 1]) {
                if (el[1] >= acc[acc.length - 1]) {
                    acc[acc.length - 1] = el[1];
                }
            } else {
                acc.push(...el);
            }
        } else {
            acc.push(...el);
        }
        return acc;
    }, []);
    let result = 0;
    for (let i = 0; i < intervals.length - 1 ; i+=2) { // O(2n)
        result+=(intervals[i + 1] - intervals[i]);
    }
    return result;
}*/



console.log(sumIntervals([[1,2], [6, 10], [11, 15]] )) //9
console.log(sumIntervals([  [1,4], [7, 10], [3, 5]] )) //7
//console.log(sumIntervals([   [0, 20], [-100000000, 10], [30, 40]] )) //7
