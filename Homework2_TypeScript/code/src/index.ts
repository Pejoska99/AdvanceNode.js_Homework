// Exercise 1
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
//If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function areInLove(petals1: number, petals2: number): boolean {

    if((petals1 % 2 ===0 && petals2 % 2 !==0) || (petals1 % 2 !==0 && petals2 % 2 === 0)){
        return true
    }
    else {
        return false;
    }
}

console.log(areInLove(2, 3)); 
console.log(areInLove(2, 4)); 
console.log(areInLove(3, 5)); 


//Exercise 2
// Create interface Person that will have the following properties:

// name which is string,
// age which is number and
// gender which is 'male' or 'female'.
// Create a function named filterByProperty. 
// The function should accept three parameters:

// people => which is array of Person objects
// property => which is string
// value => which is string
// So if we invoke the function filterByProperty as filterByProperty(peopleArray, "gender", "male") ,
// it should return the objects of the peopleArray that its gender is male, 
// and if we invoke the function filterByProperty as filterByProperty(peopleArray, "age", 30) it should return the objects of the peopleArray that its age is 30.


interface Person {
    name: string;
    age: number;
    gender: 'male' | 'female';
}


function filterByProperty(people: Person[], property: string, value: string | number): Person[] {
    
    return people.filter(person => {
      
        if (property === "age" && typeof value === "number") {
            return person.age === value;
        }

        else if (property === "gender" && (value === "male" || value === "female")) {
            return person.gender === value;
        }
      
        else {
            return false;
        }
    });
}

const peopleArray: Person[] = [
    { name: "Nikola", age: 30, gender: "male" },
    { name: "Emilija", age: 25, gender: "female" },
    { name: "Bo", age: 35, gender: "male" },
    { name: "Sandra", age: 40, gender: "female" }
];


const males: Person[] = filterByProperty(peopleArray, "gender", "male");
console.log("Males:", males);


const ageThirty: Person[] = filterByProperty(peopleArray, "age", 30);
console.log("Age 30:", ageThirty);

// Given an array of numbers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function doubleArrayValues(numbers: number[]): number[] {
    return numbers.map(number => number * 2);
}


const originalArray: number[] = [3, 6, 9];
const doubledArray: number[] = doubleArrayValues(originalArray);
console.log(doubledArray); 

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(value: boolean): string {
    if (value) {
        return "true";
    } else {
        return "false";
    }
}


console.log(booleanToString(true)); 
console.log(booleanToString(false))


// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.



function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) {
        return 0;
    }

    const sum: number = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}


console.log(calculateAverage([1, 2, 3, 4, 5])); 
console.log(calculateAverage([])); 

//There was a test in your class and you passed it. Congratulations! But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note: Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function isBetterThanAverage(yourScore: number, classScores: number[]): boolean {
   
    const sum: number = classScores.reduce((acc, curr) => acc + curr, yourScore);
    
   
    const average: number = sum / (classScores.length + 1);
    
   
    return yourScore > average;
}


console.log(isBetterThanAverage(80, [70, 60, 90])); 
console.log(isBetterThanAverage(70, [70, 60, 90])); 

// Given an array of numbers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array. Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(numbers: number[]): number[] {
    if (!numbers || numbers.length === 0) {
        return [];
    }

    let positiveCount = 0;
    let negativeSum = 0;

    for (let number of numbers) {
        if (number > 0) {
            positiveCount++;
        } else if (number < 0) {
            negativeSum += number;
        }
    }

    return [positiveCount, negativeSum];
}


console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); 



//Create a function that takes a number as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number: number): string {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


console.log(evenOrOdd(4)); 
console.log(evenOrOdd(7)); 

// Иmplement a Basic Calculator

// Description: Create a basic calculator application using TypeScript. The calculator should support addition, subtraction, multiplication, and division operations.

// Requirements: Use TypeScript for defining types, interfaces etc. Implement functions for performing basic arithmetic operations. Ensure error handling for division by zero and invalid inputs.

interface Calculator {
    add: (num1: number, num2: number) => number;
    subtract: (num1: number, num2: number) => number;
    multiply: (num1: number, num2: number) => number;
    divide: (num1: number, num2: number) => number | string;
}


const calculator: Calculator = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => {
        if (num2 === 0) {
            return "Error: Division by zero";
        } else {
            return num1 / num2;
        }
    }
};


console.log("Addition:", calculator.add(5, 3)); 
console.log("Subtraction:", calculator.subtract(10, 4));
console.log("Multiplication:", calculator.multiply(2, 6)); 
console.log("Division:", calculator.divide(10, 2)); 
console.log("Division by zero:", calculator.divide(5, 0)); 


