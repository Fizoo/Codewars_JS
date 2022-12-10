function onlyOddDigPrimes(n) {
    let arr = []
    for (let i=1;i<n*2;i+=2){
        if (isPrime(i)&&i.toString().split``.every(v=>v%2!==0))arr.push(i)
    }
    let f = arr.filter(v=>v<=n)
    let s = arr.filter(v=>v>=n)
    return [f.length,f[f.length-1],s[0]]
}
function isPrime(n) {
    let rt = Math.sqrt(n);
    for(let i = 2; i <= rt; i++) {
        if(n % i === 0) return false;
    }
    return n !== 1;
    // return [count,min,max]
    // Your code
}

const list = [20, 40, 55, 60, 100];
const results = [[7, 19, 31], [9, 37, 53], [10, 53, 59], [11, 59, 71], [15, 97, 113]];

console.log(onlyOddDigPrimes(20))
console.log(onlyOddDigPrimes(40))


//Простые числа, которые имеют только нечетные цифры, являются чистыми простыми числами с нечетными цифрами, очевидное, но необходимое определение. Примеры чистых нечетных простых чисел: 11, 13, 17, 19, 31... Если простое число имеет только одну четную цифру, оно не принадлежит чисто нечетному простому числу, независимо от количества нечетных цифр, которые могут быть.
//
// Создайте функцию only_oddDigPrimes(), которая получает любое положительное целое число n и выводит список, подобный приведенному ниже:
//
// [число чистых нечетных простых цифр меньше n, наибольшее чистое нечетное простое число меньше n, наименьшее чистое нечетное простое число больше n]
//
// Давайте рассмотрим некоторые случаи:
//
// only_oddDigPrimes(20) ----> [7, 19, 31]
// ///7, beacause we have seven pure odd digit primes below 20 and are 3, 5, 7, 11, 13, 17, 19
// 19, because is the nearest prime of this type to 20
// 31, is the first pure odd digit that we encounter after 20///
//
// only_oddDigPrimes(40) ----> [9, 37, 53]
// В случае, если n заданное значение является чистым нечетным простым числом, его следует сосчитать с найденными простыми числами и найти непосредственно ниже и сразу после него.
//
// Удачного кодирования!!


/*
* 1


Вы совершенно зря увлекаетесь оператором break. Помимо очевидной ненужности в таком простом коде вы получаете совершенно не читаемый и плохо отлаживаемый код

алгоритм прост:

1) заведем flag=1 - число простое

2) переберем все делители числа от 2 до i/2 если нашли делитель, то flag=0 (составное) и прекратили перебор делителей

3) если flag=1 то число выводим

let n = 20;
for (let i = 2; i <= n; i++) {
  let flag=1;
  for (let j = 2; (j <= i/2)&&(flag==1); j=j+1) {
     if (i%j==0) {
         flag=0}
    }
  }
 if (flag==1) {console.log(i);}
}   */