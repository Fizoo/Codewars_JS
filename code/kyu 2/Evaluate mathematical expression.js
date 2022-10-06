const calc = function (expression) {


    return eval(expression)
    // evaluate `expression` and return result
};


console.log(calc('1+1')) //2
console.log(calc('2 / (2 + 3) * 4.33 - -6')) //7.732
