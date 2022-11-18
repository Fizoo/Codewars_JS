function maxDiff(list) {

    return list.length<2?0:Math.max(...list)-Math.min(...list)
};



console.log(maxDiff([0, 1, 2, 3, 4, 5, 6])) //, 6);
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]))//, 11);
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16]))//, 16);
console.log(maxDiff([16]))//, 0);
console.log(maxDiff([]))//, 0);
