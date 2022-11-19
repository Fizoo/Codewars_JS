function towerBuilder(n) {
    return [...Array(n)].map(
        (_, i) =>
            " ".repeat(n - 1 - i) + "*".repeat(i * 2 + 1) + " ".repeat(n - 1 - i)
    );
    // build here
}

//console.log(towerBuilder(1))
//console.log(towerBuilder(2))
console.log(towerBuilder(3))
//console.log(towerBuilder(8))
