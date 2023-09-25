// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

//let person: any; // This is a fallback type, really shouldn't use since defeats the purpose of TS which is to specify types, preservation

// this is the Object type definition
let person: {
    name: string;
    age: number;
};

person = {
    name: 'Max',
    age: 30
};

// person = {
//     isEmployee: true // wrong type, TS will complain
// };

// Can combine different TS features and types
let people: {
    name: string;
    age: number;
}[];

//----EXERCISE 2----------------------------------//

// 1. Declare an array named subjects containing strings.

let subjects: string[];

subjects = ['Math', 'Science', 'English'];

// 2. Declare a tuple named student that contains a string (for the name) and a number (for the age).
// Turples in TS need brackets
let student: [string, number];
student = ["John Doe", 25];