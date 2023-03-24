/*function solution(input, markers) {
 const pattern = new RegExp('\\s*[' + markers.join('') + '].*', 'gi');
    return input.replace(pattern, '');
}*/


//2
function solution(input, markers) {
    return input.split('\n').map(
        line => markers.reduce(
            (line, marker) => line.split(marker)[0].trim(), line
        )
    ).join('\n')
}

let str="apples, pears # and bananas\ngrapes\nbananas !apples"
console.log( solution(str,['#','!']))

//const Test = require('@codewars/test-compat');
//
// describe("Tests", () => {
//   it("test", () => {
// function checkComments(input, markers, expected) {
//   var actual;
//   actual = solution(input, markers);
//   return Test.expect(actual === expected, "Returned '" + actual + "' but expected '" + expected + "'");
// };
//
// checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges")
// checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne")
// });
// });



//Завершите решение так, чтобы оно удаляло весь текст, следующий за любым из переданных маркеров комментариев. Все пробелы в конце строки также должны быть удалены.
//
// Пример:
//
// Учитывая входную строку:
//
// apples, pears # and bananas
// grapes
// bananas !apples
// Ожидаемый результат будет следующим:
//
// apples, pears
// grapes
// bananas
// Код будет называться так:
//
// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"