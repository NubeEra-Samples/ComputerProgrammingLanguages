
// Array Initialization: Create an array named fruits containing the names of three fruits of your choice.

// let fruits = ["Mango", "Banana", "Apple"];
// console.log(fruits)

// _____________________________________________________________________________________________________________________

// Array Access: Access and print the second fruit from the fruits array.

// let fruits = ["Mango", "Banana", "Apple"];
// console.log(fruits[1]);

// _________________________________________________________________________________________________________________________

// Array Modification: Replace the first fruit in the fruits array with "Banana".

// let fruits = ["Mango", "Banana", "Apple"];
// fruits [0] = "Banana"
// console.log(fruits) 

// _____________________________________________________________________________________________________________________________

// Array Length: Print the number of elements in the fruits array.

// let fruits = ["Mango", "Banana", "Apple"];
// console.log(fruits.length)

// ______________________________________________________________________________________________________________________________

// Array Iteration: Use a loop to print each fruit in the fruits array on a new line.

// let fruits = ["Mango", "Banana", "Apple"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]); 
// }

// __________________________________________________________________________________________________________

// Array Sorting: Sort the fruits array in alphabetical order.

// let fruits = ["Mango", "Banana", "Apple"];
// console.log(fruits.sort())

// ____________________________________________________________________________________________________________________

// Array Addition: Add two more fruits ("Grapes" and "Watermelon") to the fruits array.

// let fruits = ["Mango", "Banana", "Apple"];
// fruits.push("Grapes", "Watermelon")
// console.log(fruits)

// ___________________________________________________________________________________________________________________________

// Array Removal: Remove the third fruit from the fruits array.

// let fruits = ['Mango', 'Banana', 'Apple', 'Grapes', 'Watermelon'];
// delete fruits[3]
// console.log(fruits)

// ____________________________________________________________________________________________________________________

// Array Searching: Check if "Apple" exists in the fruits array. Print "Yes" if it does, otherwise print "No".

// let fruits = ["Mango", "Banana", "Apple"];

// if (fruits.includes("Apple"))
// {
//     console.log("Yes Apple is avalible")
// }
// else
// {
//     console.log("No Apple is not avalible")
// }

// ____________________________________________________________________________________________________

// Array Concatenation: Create another array named moreFruits containing at least two additional
// fruits. Then, combine the fruits array with the moreFruits array to create a new array named
// allFruits

// let fruits = ["Mango", "Banana", "Apple"];
// let moreFruits = ["Grapes", "Watermelon"]

// let allFruits = fruits.concat(moreFruits)

// console.log(allFruits)

// ________________________________________Filter_Array_______________________________________________________________________

// Filter Even Numbers: Given an array of numbers, use the filter method to create a new array containing only the even numbers.

// Method-1:

    // let evennumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // let even = evennumbers.filter(function(a) {
    //     return a % 2 == 0
    //  })

    // console.log(even)


 // Method-2:

    //  let evennumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    //  let even = evennumbers.filter(a => a % 2 == 0)
    //  console.log(even)
   
// ________________________________________________________________________________________________________________

// Filter Names Starting with 'A': Given an array of names, use the filter method to create a
// new array containing only the names that start with the letter 'A'.

// let group = ["Ravi", "Arush", "Somaya", "Arnav", "Ankita", "Akashy"]
// let students = group.filter(a => a.startsWith("A"))
// console.log(students)

// ____________________________________________________________________________________________________________________

// let fiftyWords = ["apple", "banana", "carrot", "dog", "elephant", "fish", "grape", "hamburger", "ice cream", "jacket", "kite", "lemon", "monkey", "napkin", "orange", "pizza", "queen", "rabbit", "strawberry", "tiger", "umbrella", "vanilla", "watermelon", "xylophone", "yogurt", "zebra", "airplane", "ball", "cat", "duck", "egg", "frog", "giraffe", "hat", "igloo", "juice", "kangaroo", "lamp", "mango", "nest", "ostrich", "pear", "quilt", "rose", "snake", "table", "unicorn", "volcano", "wagon", "xylophone", "yacht"];
// let words = fiftyWords.filter(a => a.length === 3)
// console.log(words)


// let fiftyWords = ["apple", "banana", "carrot", "dog", "elephant", "fish", "grape", "hamburger", "ice cream", "jacket", "kite", "lemon", "monkey", "napkin", "orange", "pizza", "queen", "rabbit", "strawberry", "tiger", "umbrella", "vanilla", "watermelon", "xylophone", "yogurt", "zebra", "airplane", "ball", "cat", "duck", "egg", "frog", "giraffe", "hat", "igloo", "juice", "kangaroo", "lamp", "mango", "nest", "ostrich", "pear", "quilt", "rose", "snake", "table", "unicorn", "volcano", "wagon", "xylophone", "yacht"];
// let Number = parseInt(prompt("Enter Any Number for search words"))
// let words = fiftyWords.filter(a => a.length === Number)
// console.log(words)
// ________________________________________________________________________________________________________________________________________________


  

  