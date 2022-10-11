Array.prototype.sameStructureAs = function (other) {
    return (this.length === other.length) ? this.every(function(el, i){
        return Array.isArray(el) ? el.sameStructureAs(other[i]) : true;
    }) : false;
};


console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ))
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ))
