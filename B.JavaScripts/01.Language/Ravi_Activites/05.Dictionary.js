
// const complexDictionary = {
//     key1: "value1",
//     key2: {
//         nestedKey1: "nestedValue1",
//         nestedKey2: "nestedValue2"
//     },
//     key3: [1, 2, 3, 4],
//     key4: function() {
//         console.log("Hello from a function inside the dictionary!");
//     }
// };

// Accessing Values:
// console.log(complexDictionary.key1)
// console.log(complexDictionary.key2.nestedKey1)
// console.log(complexDictionary.key3[2])

// Modifying Values:
// console.log(complexDictionary.key1 = "newValue")
// console.log(complexDictionary.key2.nestedKey1 = "newNestedValue1")
// console.log(complexDictionary.key3 = [5, 6, 3])

// Adding and Deleting Entries
// console.log(complexDictionary.key5 = "value5")
// console.log(delete complexDictionary.key4)

// Executing Functions
// complexDictionary.key4()

// __________________________________________________________________________________

const complicatedDictionary = {
    person1: {
        name: "Alice",
        age: 30,
        address: {
            street: "123 Main St",
            city: "New York",
            country: "India"
        },
        hobbies: ["reading", "painting", "hiking"]
    },
    person2: {
        name: "Bob",
        age: 25,
        address: {
            street: "456 Elm St",
            city: "Los Angeles",
            country: "UK"
        },
        hobbies: ["swimming", "photography", "gardening"]
    },
    person3: {
        name: "Charlie",
        age: 35,
        address: {
            street: "789 Oak St",
            city: "Chicago",
            country: "USA"
        },
        hobbies: ["cooking", "playing guitar", "traveling"]
    },
    person4: {
      name: "Ravi",
      age: 30,
      address: {
          street: "789 Oak St",
          city: "Ch. Sambhaji nagar",
          country: "India"
      },
      hobbies: ["cooking", "playing guitar", "traveling"]
  }
};

// for (let personkey in complicatedDictionary)
//     console.log("Person Name: " +( (complicatedDictionary[personkey].address.country=="India")?complicatedDictionary[personkey].name:""))

// let persons = Object.values(complicatedDictionary).filter(person => person.address.country === "India")
// // console.log(persons)
// for (p in persons){
//   console.log(p);
// }

// Accessing Nested Data:
// console.log(complicatedDictionary.person2.address.street)
// console.log(complicatedDictionary.person3.hobbies)

// Manipulating Data:
// console.log(complicatedDictionary.person1.age = 32)
// console.log(complicatedDictionary.person2.hobbies = "biking")

// Iterating Over Data:
// for (let personkey in complicatedDictionary)
// {
//     let person = complicatedDictionary[personkey]
//     console.log(`${person.name} ${person.age}`)
// }

// for (let personkey in complicatedDictionary)
// {
//     let person = complicatedDictionary[personkey]
//     let age = person.age + 2
//     console.log(`${person.name}  ${age}`)
// }

// for (let personkey in complicatedDictionary)
// {
//     let person = complicatedDictionary[personkey]
//     console.log(`${person.name}'s Address:`);
//     console.log(`Street: ${person.address.street}`);
//     console.log(`City: ${person.address.city}`);
//     console.log(`Country: ${person.address.country}`);
// }

// Conditional Operations:
// if (complicatedDictionary.person1 === complicatedDictionary.person1.hobbies["reading"])
// {
//     console.log("Yes")
// }
// else
// {
//     console.log("No")
// }


// const person1 = complicatedDictionary.person1;

// if (person1 && person1.hobbies.includes("reading")) {
//     console.log("Person1 has the hobby 'reading'.");
// } else {
//     console.log("Person1 does not have the hobby 'reading'.");
// }

// let details = Object.values(complicatedDictionary).filter(person => person.address.city === "New York")
// console.log(details)

// _____________________________________________________________________________________

// const complicatedDictionary = {
//     meta: {
//       version: "1.0",
//       author: {
//         name: "John Doe",
//         age: 35,
//         profession: "Data Scientist"
//       },
//       created_at: new Date(),
//       description: "A complicated dictionary example in JavaScript"
//     },
//     data: [
//       {
//         id: 1,
//         name: "Alice",
//         details: {
//           age: 28,
//           hobbies: ["Reading", "Painting"],
//           address: {
//             city: "New York",
//             country: "USA"
//           }
//         }
//       },
//       {
//         id: 2,
//         name: "Bob",
//         details: {
//           age: 32,
//           hobbies: ["Hiking", "Cooking", "Gaming"],
//           address: {
//             city: "London",
//             country: "UK"
//           }
//         }
//       }
//     ],
//     functions: {
//       calculateAverageAge: function() {
//         let totalAge = 0;
//         this.data.forEach(person => {
//           totalAge += person.details.age;
//         });
//         return totalAge / this.data.length;
//       },
//       listHobbies: function() {
//         let hobbiesList = [];
//         this.data.forEach(person => {
//           hobbiesList.push(...person.details.hobbies);
//         });
//         return hobbiesList;
//       }
//     },
//     helperFunctions: {
//       formatDate: function(date) {
//         return date.toDateString();
//       },
//       capitalize: function(string) {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//       }
//     }
//   };
  
  


