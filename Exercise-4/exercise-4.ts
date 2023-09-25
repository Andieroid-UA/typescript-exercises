// Union Types - Type inference

let course: string | number = 'React - The Complete Guide';

course = 12341;

// Functions & Types
//Unless you explicitly set the return type, TypeScript will try to infer it for you.
function add(a: number, b: number): number | string {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

//updatedArray[0].split(''); // Error, split does not exist on type 'number'

//-------EXERCISE 4----------------------------------//

// 1. Write a function greet that takes in a name (string) and returns a greeting (string).

function greet(name: string) {
  return `Hello ${name}`;
}