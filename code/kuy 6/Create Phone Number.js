const createPhoneNumber = numbers => {
    let result='('
    for (let i = 0; i < numbers.length; i++) {

        if(i<=2){
            result+=numbers[i]
        }
        if(i===2){
            result+=') '
        }

        if(i>2&&i<=5){
            result+=numbers[i]
        }
        if(i===5) {
            result += '-'
        }
        if(i>5){
            result+=numbers[i]
        }
    }
    return result
};

//const createPhoneNumber = numbers => numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
//const createPhoneNumber = numbers => numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
//const createPhoneNumber = numbers => numbers.reduce((p, c) => p.replace('x', c), "(xxx) xxx-xxxx");

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // => returns "(123) 456-7890")
