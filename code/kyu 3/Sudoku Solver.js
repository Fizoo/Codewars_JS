function sudoku(puzzle) {
    const fullNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (let i = 0; i < puzzle.length; i++) {
        for (let j = 0; j < puzzle[i].length; j++) {
            let searchNumber = puzzle[i][j]
            if (searchNumber === 0) {
                //console.log('index=', i, j)
                let res = fullNumbers.filter(el => {
                    if (!getSubMatrix(puzzle, i, j).includes(el) && !puzzle[i].includes(el) && !vertSuMatrix(puzzle, i, j).includes(el)) {
                        // console.log('element=',el)
                        return true
                    } else return false
                })
               // console.log('element', res)
                if (res.length === 1) {
                    puzzle[i][j] = res[0]
                }
            }
        }
    }
    return isValid(puzzle) ? puzzle : sudoku(puzzle)

    //return the solved puzzle as a 2d array of 9 x 9
}

function miniSudoku(puzzle) {
    const subMatrices = [];
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            const subMatrix = [];
            for (let k = i; k < i + 3; k++) {
                for (let l = j; l < j + 3; l++) {
                    subMatrix.push(puzzle[k][l]);
                }
            }
            subMatrices.push(subMatrix);
        }
    }
    return subMatrices
}

function getSubMatrix(puzzle, a, b) {
    const subMatrix = miniSudoku(puzzle)
    const subMatrixIndex = Math.floor(a / 3) * 3 + Math.floor(b / 3)
    return subMatrix[subMatrixIndex]
}

function vertSuMatrix(puzzle, a, b) {
    let arr = []
    for (let i = 0; i < puzzle.length; i++) {
        for (let j = 0; j < puzzle[i].length; j++) {
            if (j === b) {
                arr.push(puzzle[i][j])
            }
        }
    }
    return arr
}

function isValid(puzzle) {
    return !puzzle.some(row => row.includes(0));
}

const puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]];
console.log(sudoku(puzzle))
//console.log(miniSudoku(puzzle))

//const Test = require('@codewars/test-compat');
//
// describe('Sudoku', function(){
//     var puzzle = [
//       [5,3,0,0,7,0,0,0,0],
//       [6,0,0,1,9,5,0,0,0],
//       [0,9,8,0,0,0,0,6,0],
//       [8,0,0,0,6,0,0,0,3],
//       [4,0,0,8,0,3,0,0,1],
//       [7,0,0,0,2,0,0,0,6],
//       [0,6,0,0,0,0,2,8,0],
//       [0,0,0,4,1,9,0,0,5],
//       [0,0,0,0,8,0,0,7,9]];
//
//     var solution = [
//       [5,3,4,6,7,8,9,1,2],
//       [6,7,2,1,9,5,3,4,8],
//       [1,9,8,3,4,2,5,6,7],
//       [8,5,9,7,6,1,4,2,3],
//       [4,2,6,8,5,3,7,9,1],
//       [7,1,3,9,2,4,8,5,6],
//       [9,6,1,5,3,7,2,8,4],
//       [2,8,7,4,1,9,6,3,5],
//       [3,4,5,2,8,6,1,7,9]];
//
//     it('Puzzle 1', function(){
//         Test.assertEquals(JSON.stringify(sudoku(puzzle)),JSON.stringify(solution), "Incorrect solution for the following puzzle: " + JSON.stringify(puzzle));
//     });
// });


/*Напишите функцию, которая будет решать головоломку судоку 9x9. Функция будет принимать один аргумент, состоящий из массива 2D-головоломки, значение которого 0представляет собой неизвестный квадрат.

Судоку, протестированные против вашей функции, будут «простыми» (т.е. определяемыми; не будет необходимости предполагать и проверять возможности на неизвестных) и могут быть решены методом грубой силы.

Правила судоку см. в статье Википедии.

var puzzle = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]];

sudoku(puzzle);
/* Should return
[[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]] */