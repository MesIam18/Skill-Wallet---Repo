const name = "Ed Andrew"; 
let age = 19; 

age = 19;

console.log("Name:", name);
console.log("Age:", age);


const greet = (name) => {
    return `Hello ${name}`;
};

console.log(greet("Ed Andrew"));



const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);


const student = {
    studentName: "Ed Andrew",
    course: "BSIT"
};

const { studentName, course } = student;
console.log(`Student: ${studentName}, Course: ${course}`);

const numbers1 = [1, 2, 3];
const numbers2 = [...numbers1, 4, 5];
console.log("Combined Array:", numbers2);

const multiply = (a = 1, b = 1) => {
    return a * b;
};

console.log("Multiply:", multiply(5, 2));
console.log("Default Multiply:", multiply());


console.log("ES6 Features applied successfully!");