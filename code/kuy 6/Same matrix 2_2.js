function countDifferentMatrices(matrices) {
    return new Set(matrices.map(
        ([a, b, c, d]) => [[a, b, c, d], [c, a, d, b], [d, c, b, a], [b, d, a, c]].map(String).sort()[0]
    )).size;
}


let ms = [[1, 2, 3, 4],
    [3, 1, 4, 2],
    [4, 3, 2, 1],
    [2, 4, 1, 3]];
console.log(countDifferentMatrices(ms))
/**
 * У вас есть матрицы 2*2, каждая матрица представлена ​​массивом длины 4.

 такой как [a, b, c, d] является матрицей

 a b
 c d
 Матрицу можно вращать:

 a b   90 degrees  c a  180 degrees  d c  270 degrees  b d
 c d  -----------> d b  -----------> b a  -----------> a c
 Если матрицу A можно получить, повернув матрицу B по часовой стрелке на 0, 90, 180 или 270 градусов, мы считаем, что A и B — одна и та же матрица.

 Например, следующие матрицы считаются одинаковыми.

 1 2
 3 4

 3 1
 4 2

 4 3
 2 1

 2 4
 1 3
 Задача этого ката — подсчитать, сколько у вас разных матриц.

 Образцы

 // Same as the above example.
 count_different_matrices([[1, 2, 3, 4],
 [3, 1, 4, 2],
 [4, 3, 2, 1],
 [2, 4, 1, 3]]);

 //should return '1'
 Заметки

 Значения элементов матрицы равны [1, 9], а количество матриц не превысит 1000.
 let ms = [[1, 2, 3, 4],
 [3, 1, 4, 2],
 [4, 3, 2, 1],
 [2, 4, 1, 3]];
 assert.deepEqual(countDifferentMatrices(ms), 1);

 ms = [[3, 1, 2, 3],
 [3, 1, 2, 3],
 [1, 3, 3, 2],
 [3, 2, 1, 3]];
 assert.deepEqual(countDifferentMatrices(ms), 1);

 ms = [[5, 1, 2, 6],
 [5, 4, 3, 5],
 [2, 5, 6, 1]];
 assert.deepEqual(countDifferentMatrices(ms), 2);

 ms = [[1, 2, 2, 1],
 [1, 1, 2, 2],
 [2, 1, 1, 2],
 [2, 1, 2, 1],
 [1, 2, 1, 2]];
 assert.deepEqual(countDifferentMatrices(ms), 2);

 */
