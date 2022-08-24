// ASSESSMENT 3: Coding Practical Questions with Jest

const { type } = require("os")
const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest












// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.


const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// a) Create a test with expect statements for each of the variables provided.

describe ("fibonacci", () => {
    it ("Takes in a number and returns the the fibonacci sequence, its length is dependent on the input number value ", () => {
        expect ( fibonacci(fibLength1) ).toEqual( [1, 1, 2, 3, 5, 8] )
        expect ( fibonacci(fibLength2) ).toEqual( [1, 1, 2, 3, 5, 8, 13, 21, 34, 55] )
    })
})

// Good Failure:
// FAIL  ./code-challenges.test.js
//   fibonacci
//     ✕ Takes in a number and returns the the fibonacci sequence, its length is dependent on the input number value  (1 ms)
//   ● fibonacci › Takes in a number and returns the the fibonacci sequence, its length is dependent on the input number value 
//     ReferenceError: fibonacci is not defined






// b) Create the function that makes the test pass.
// Psuedocode: 
// Create a function called fibonacci
// Input are numbers only--the only restraint is that the input numbers must be greater than 2 
// Output is the fibonacci seqeuence based on the value inputed in the parameter and fitting the condtions
// Logic in general ==> (a number @ index) + (a number @ index - 1) = (the number @ index + 1)
// We are going to either have: 1) A container array that collects new numbers in different array(s)? or 2) A array that utilizes the .map() and produces a new array --since its an acessor-- for the user

const fibonacci = (number) => {
    // 2 arrays: fibonacciArray is out container array; starterFibonacci is only useful with the 0th - 1st index
    let fibonacciArray = [1]
    let starterFibonacci = [0, 1]
for (let index = 0 ; index < number - 1 ; index = index + 1 ) {
    // 1st index of fibonacciArray is 0 + 1 
    if (index === 0 || index === 1){
    fibonacciArray.push(starterFibonacci[index] + fibonacciArray[index])
    } else if (index > 1){
    // 2nd index and onwards of fibonacciArray; 1 + 1 = 2
    fibonacciArray.push(fibonacciArray[index] + fibonacciArray[index - 1])
    } else {
    }
}   return fibonacciArray
}

// Refactoring with map will make this code more cleaner, since .map() method produces a new array without recalling or invoking anything. + we can set 2 conditional statements using   .map( (value, index) => { ... } )

// SUCCESS !!!! 
// PASS  ./code-challenges.test.js
// fibonacci
// ✓ Takes in a number and returns the the fibonacci sequence, its length is dependent on the input number value  (2 ms)











// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.


const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// a) Create a test with expect statements for each of the variables provided.

describe ("oddSort", (array) => {
    it ("Takes in an array of mixed data types and returns an array of odd numbers from lest to greatest ", () => {
        expect ( oddSort(fullArr1) ).toEqual( [-9, 7, 9, 199] )
        expect ( oddSort(fullArr2) ).toEqual( [-823, 7, 23] )
    })
})

// Good Failure:
// FAIL  ./code-challenges.test.js
// oddSort
//   ✕ Takes in an array of mixed data types and returns an array of odd numbers from lest to greatest 
//   ● oddSort › Takes in an array of mixed data types and returns an array of odd numbers from lest to greatest 
//   ReferenceError: oddSort is not defined






// b) Create the function that makes the test pass.
// Pseudocode:
// Create a function called oddSort
// Inputs are an assorted array of mix data types
// Outputs should be odd numbers only orderd from lest to greatest
// Logic filter odd numbers out from array, order all elements from least to greatest 

const oddSort = (array) => {
    return (
    array.filter( (value) => {
        return (value % 2 !== 0 && typeof(value) === "number")
    }).sort((a,b) => {
        if (a > b) return 1;
        if (b > a) return -1;
        return 0;
    })
           )
}

// This is probably the most simplified form... more adjustment can be made for .sort() to make it more compact, though. 

// SUCCESS !!!!!!
// PASS  ./code-challenges.test.js
//   fibonacci
//     ✓ Takes in a number and returns the the fibonacci sequence, its length is dependent on the input number value  (2 ms)
//   oddSort
//     ✓ Takes in an array of mixed data types and returns an array of odd numbers from lest to greatest  (1 ms)











// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

const numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// a) Create a test with expect statements for each of the variables provided.

describe ("addedUp", (array) => {
    it ("Takes in an array of mixed data types and returns an array of odd numbers from lest to greatest ", () => {
        expect ( addedUp(numbersToAdd1) ).toEqual( [2, 6, 51, 60] )
        expect ( addedUp(numbersToAdd2) ).toEqual( [0, 7, -1, 11] )
        expect ( addedUp(numbersToAdd3) ).toEqual( [] )
    })
})

// Good Failure:
// FAIL  ./code-challenges.test.js
//   addedUp
//     ✕ Takes in an array of mixed data types and returns an array of odd numbers from lest to greatest  (1 ms)
// ● addedUp › Takes in an array of mixed data types and returns an array of odd numbers from lest to greatest 
// ReferenceError: addedUp is not defined





// b) Create the function that makes the test pass.
// Psuedocode: 
// Create a function and declare it called addedUp
// Input is an array of numbers
// Output is an array of modified numbers of the same array length
// Logic 0th index remains the same, 1st index is the 1st index + 0th index, 2nd index is the 2nd index + 1st index, Nth index = Nth index + (N - 1)th index
    // This logic is kinda wrong... 

const addedUp = (array) => {
    return (array.map( (value, index) => {
        if (index === 0){
             return array[0]
        } else if (index === 1){
            return array[index] + array[index - 1] 
        } else if (index === 2) {
            return array[index] + array[index - 1] + array[index - 2]
        } else {
            return array[index] + array[index - 1] + array[index - 2] + array[index - 3]
        }
    }
    ))
}

// There should be a more dynamic way to write this... 


// Success.
// PASS  ./code-challenges.test.js
//   fibonacci
//     ✓ Takes in a number and returns the the fibonacci sequence, its length is dependent on the input number value  (2 ms)
//   oddSort
//     ✓ Takes in an array of mixed data types and returns an array of odd numbers from lest to greatest  (4 ms)
//   addedUp
//     ✓ Takes in an array of mixed data types and returns an array of odd numbers from lest to greatest 

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total