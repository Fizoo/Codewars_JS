function inArray(array1,array2){
    return array1.filter( e => array2.join(' ').includes(e) ).sort();
}

console.log(inArray(["xyz", "live", "strong"],["flive", "alive", "harp", "sharp", "armstrong"]))