function stray(numbers) {
    numbers.sort()

    return numbers[0]!==numbers[1]?numbers[0]:numbers.at(-1)
}

/*const stray = nums => nums.reduce((a, b) => a ^ b);*/

console.log(stray([17, 17, 3, 17, 17, 17, 17] ))
