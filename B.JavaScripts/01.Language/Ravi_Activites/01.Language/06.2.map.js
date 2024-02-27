
// Write a function that takes an array of numbers and returns a new array where each number is doubled using the map function.

let numbers = [10, 20, 30, 40, 50]
// let array = numbers.map(add => add * 2)
// console.log(array)
function f1(y){
    return y*2
}

let x = numbers.map(f1)

console.log(x)