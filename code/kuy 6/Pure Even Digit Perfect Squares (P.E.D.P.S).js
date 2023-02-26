function evenDigitSquares(a, b) {
    const result = [];
    for (let i = 1; i <= Math.sqrt(b); i++) {
        const square = i ** 2;
        if (square >= a && square <= b && evenDigitSquaresInRange(square)) {
            result.push(square);
        }
    }
    return result;
}
function evenDigitSquaresInRange(num) {
    // перевіряємо, чи є число повним квадратом
    if (Math.sqrt(num) % 1 !== 0) {
        return false;
    }

    const digits = num.toString().split('');
    for (let digit of digits) {
        if (digit % 2 !== 0) {
            return false;
        }
    }
    return true;
}







console.log(evenDigitSquares(100, 1000))// [400, 484]);
console.log(evenDigitSquares(1000, 4000))// []);
console.log(evenDigitSquares(10000, 40000))// [26244, 28224, 40000]
