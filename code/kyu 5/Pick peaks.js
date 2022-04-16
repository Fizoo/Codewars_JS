const pickPeaks = arr => {
    let result = { pos: [], peaks: [] };
    for (let i = 1; i < arr.length; i++) {
        let position;
        if (arr[i] > arr[i - 1]) {
            position = i;
        } else if (arr[i] < arr[i - 1] && position) {
            result.pos.push(position);
            result.peaks.push(arr[position]);
            position = undefined;
        }
    }
    return result;
    
}

console.log(pickPeaks([1,2,3,6,4,1,2,3,2,1]))
console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]))
console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]))
console.log(pickPeaks([2,1,3,1,2,2,2,2,1]))
console.log(pickPeaks())
