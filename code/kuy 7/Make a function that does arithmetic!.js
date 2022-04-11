function arithmetic(a, b, operator){
    switch (operator) {
        case "add":
            return a+b
        case "subtract":
            return a-b
        case  "multiply":
            return a*b
        case "divide":
            return a/b
    }
}
/*
const arithmetic = (a, b, operator) => ({
    'add'     : a + b,
    'subtract': a - b,
    'multiply': a * b,
    'divide'  : a / b
}[operator]);*/

console.log(arithmetic(1, 2, "add"))
