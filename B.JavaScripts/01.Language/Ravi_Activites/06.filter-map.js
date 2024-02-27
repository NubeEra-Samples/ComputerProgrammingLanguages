
// Write a JavaScript function that takes an array of numbers and returns a new array containing only the even numbers using the filter method.

    // Method : 1
        // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        // let even = numbers.filter(function(a){
        //     return a % 2 == 0
        // })

        // console.log(even)

    // Method : 2
        // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        // let even = numbers.filter(numbers => numbers % 2 == 0)
        // console.log(even)

// _____________________________________________________________________________

// Create a function that filters out all the strings from an array of mixed data types using the filter method.

//  let string = [1, "Apple", 6, "Banana", "car", 10 , "orange", 11, "Bike"]
//  let company = string.filter(product => typeof product === "string")
//  console.log(company)

// ___________________________________________________________________________________

// Implement a function that filters out all the elements of an array that are less than a specified value using the filter method.

// let numbers = [1, 2, 3, 4, 5, ,6, 7, 8, 9, 10]
// let elements = numbers.filter(a => a < 5)
// console.log(elements)

// _______________________________________________________________________________________________

// Write a JavaScript function that takes an array of strings and filters out all the strings that are shorter than a certain length using the filter method.

// let fruits = ["Apple", "Banana", "Mango", "Grapes", "Painapple"]
// let string = fruits.filter(product => product.length === 5)
// console.log(string)

// ________________________________________________________________________________________________________

// Develop a function that filters out all the objects from an array that have a specific property value using the filter method.

// let objects = [
//     { name: "Vishal", marks: 90 },
//     { name: "Gaytri", marks: 90 },
//     { name: "Sumit", marks: 83 },
//     { name: "Sagar", marks: 70 },
//     { name: "Ram", marks: 76 }
//   ];

//  let collage = objects.filter(students => students.marks >= 80)
// console.log(collage)

// _________________________________________________________________________________________________________________

// Create a function that filters out all duplicate values from an array using the filter method.

// let duplicateValues = [1, 10, 5, 17, 8, 2, 5, 2, 8, 4, 10]
// let numbers = duplicateValues.filter((value, index, array) => array.indexOf(value) === index);
// console.log(numbers)

// __________________________________________________________________________________________________________________

// Write a JavaScript function that takes an array of objects representing people and filters out all the people whose age is less than a certain threshold using the filter method.

// let people = 
// [
//     {name : "Vishal" , age : 18},
//     {name : "gaytri" , age : 18},
//     {name : "swarbh" , age : 25},
//     {name : "sham"   , age : 22},
//     {name : "tusher" , age : 19}
// ]

// let details = people.filter(a => a.age >= 20)
// console.log( details)

// __________________________________________________________________________________________________________________________

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
