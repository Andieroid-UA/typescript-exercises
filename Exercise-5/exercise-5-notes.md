##Exercise 5: Classes with TypeScript 

Objective: Create a class named Student in TypeScript. The class should define certain properties and methods.

Properties:
studentName: string
studentAge: number
studentGrade: number
Constructor:
The constructor should take in the above three properties when instantiating a new student object.
Methods:
displayInfo(): Log the student's name, age, and grade to the console.
isPassing(gradeThreshold: number): Takes in a grade threshold and returns a boolean indicating if the student's grade is above the threshold.
Starter Code:

typescriptCopy code
class Student {
    // Define the properties here
    
    // Define the constructor here

    // Define the displayInfo method here

    // Define the isPassing method here
}

// Instantiate a new student object and call the methods to test your class

With this, students can fill in the class details using the information provided.

==========================================

We will be discussing...

- You can access all of the items in the class or functions, UNLESS you add the private keyword. Get a lot more if you use "slice" if you want certain bits of information from your data

- Interfaces
Basically Object-type definitions. An alternative to "Type" keyword, but unlike type it has a certain structure need a class to have a certain method/class

- Compiling

Typescript conflict complier file

npx tsc --init
*Creates a tsconfig.json file*

strict mode is set to true, by default. TS does strict type checking. But also warns if there is not an explicit type when in your script.

In Angular, we get TS out of the box. 