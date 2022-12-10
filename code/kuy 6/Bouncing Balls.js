function bouncingBall(h, bounce, window) {
    if (bounce >= 1 || bounce <= 0) return -1
    let count = 0

    while (h > window) {
        count++
        h = h * bounce
        if (h > window) {
            count++
        }
    }
    return count > 0 ? count : -1

}

//console.log(bouncingBall(3, 0.66, 1.5))
console.log(bouncingBall(2, 0.5, 1))
//console.log(bouncingBall(30, 0.66, 1.5))
//console.log(bouncingBall(30, 1, 1.5))

//Дитина грається з м'ячем на n-му поверсі висотного будинку. Висота цього поверху над рівнем землі h відома.
//
// Він кидає м'яч із вікна. М'яч відскакує (наприклад) на дві третини своєї висоти (відскок 0,66).
//
// Мати дивиться у вікно, що на відстані півтора метра від землі.
//
// Скільки разів мама побачить м’яч, що проходить перед її вікном (включаючи, коли він падає і підстрибує?)
//
// Для правильного експерименту необхідно виконати три умови:
// Параметр float "h" у метрах має бути більше 0
// Параметр float "bounce" має бути більше 0 і менше 1
// Параметр float "window" має бути меншим за h.
// Якщо виконано всі три вищенаведені умови, поверніть додатне ціле число, інакше поверніть -1.
//
// Примітка:
// М'яч можна побачити, лише якщо висота м'яча, що відскакує, строго перевищує параметр вікна.
//
// приклади:
// - h = 3, bounce = 0.66, window = 1.5, result is 3
//
// - h = 3, bounce = 1, window = 1.5, result is -1
//
// (Condition 2) not fulfilled).

//  it ('h = 3.0, bounce = 0.66, window = 1.5', () => {
//     assert.strictEqual(bouncingBall(3.0, 0.66, 1.5), 3);
//   });
//
//   it ('h = 30.0, bounce = 0.66, window = 1.5', () => {
//     assert.strictEqual(bouncingBall(30.0, 0.66, 1.5), 15);
//   });
//
//   it ('h = 3.0, bounce = 1.0, window = 1.5', () => {
//     assert.strictEqual(bouncingBall(3.0, 1.0, 1.5), -1);
//   });
// });
