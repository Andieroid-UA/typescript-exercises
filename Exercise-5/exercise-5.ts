// Classes and TypeScript

class Students {
    // firstName: string;
    // lastName: string;
    // age: number;
    // courses: string[];

    //constructor(first: string, last: string, age: number, courses: string[]) {
    constructor(
        // this.firstName = first;
        // this.lastName = last;
        // this.age = age;
        // this.courses = courses;

           public firstName: string, 
           public lastName: string, 
           public age: number, 
           private courses: string[]
           ) {}

    // The method notation. How you add a method to a class in TypeScript. We DON'T have the function keyword, so it's a method
    enroll(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice(); // returns a copy of the array
    }
}

const student = new Students('Elron', 'Smith', 29, ['Math', 'Science']);
student.enroll('React');

//student.listCourses(); // ['Math', 'Science', 'History', 'React']
//student.courses => ['Math', 'Science', 'History', 'React']

//-------------------------------------------------------------------//

// Interfaces
// Object-type definitions

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

// ------------This would ALSO work!
// type Human {
//     firstName: string;
//     age: number;

//     greet: () => void;
// }

let max: Human;

// This works b/c it fulfillls the requirements by the interface
max = {
    firstName: 'Max',
    age: 30,
    greet() {
        console.log('Hello!');
    }
};

class Instructor implements Human {
    firstName: string;
    age: number;

    greet() {
        console.log('Hello!');
    }
}

//-------EXERCISE 5----------------------------------//

// 1. Create a class named Student in TypeScript. The class should define certain properties and methods.


class Student {
    // Define the properties here
    studentName: string;
    studentAge: number;
    studentGrade: number;

    // Define the constructor here
    constructor(name: string, age: number, grade: number) {
        this.studentName = name;
        this.studentAge = age;
        this.studentGrade = grade;
    }

    // Define the displayInfo method here
    displayInfo() {
        console.log(`Student Name: ${this.studentName}`);
        console.log(`Student Age: ${this.studentAge}`);
        console.log(`Student Grade: ${this.studentGrade}`);
    }

    // Define the isPassing method here
    isPassing() {
        if (this.studentGrade >= 70) {
            console.log(`${this.studentName} is passing`);
        } else {
            console.log(`${this.studentName} is not passing`);
        }
    }
}

// Instantiate a new student object and call the methods to test your class

let newStudent = new Student('Elron', 29, 80);