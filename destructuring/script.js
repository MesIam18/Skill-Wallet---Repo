const output = document.getElementById("output");

function show(title, content) {
  const div = document.createElement("div");
  div.className = "box";

  div.innerHTML = `
    <h3>${title}</h3>
    <pre>${content}</pre>
  `;

  output.appendChild(div);
}

console.log("===== DESTRUCTURING LAB =====");



const fruits = ["strawberry", "orange", "pineapple"];
const [first, second, third] = fruits;

const numbers = [10, 20, 30, 40];
const [a, , c] = numbers;

console.log(first, second, third);
console.log(a, c);

show(
  "Array Destructuring",
  `
First: ${first}
Second: ${second}
Third: ${third}

Skip Example:
a = ${a}
c = ${c}
`
);



const student = {
  name: "Ed Andrew",
  age: 19,
  course: "BSIT"
};

const { name, age, course } = student;

console.log(name, age, course);

show(
  "Object Destructuring",
  `
Name: ${name}
Age: ${age}
Course: ${course}
`
);


const user = {
  username: "andrew123",
  email: "andrew@email.com"
};

const { username: userName, email: userEmail } = user;

const product = {
  title: "Desktop"
};

const { title, price = 50000 } = product;

const person = {
  info: {
    fullName: "Ed Andrew",
    address: {
      city: "Pangasinan"
    }
  }
};

const {
  info: {
    fullName,
    address: { city }
  }
} = person;

console.log(userName, userEmail);
console.log(title, price);
console.log(fullName, city);

show(
  "Advanced Destructuring",
  `
Renamed:
Username: ${userName}
Email: ${userEmail}

Default Value:
Title: ${title}
Price: ${price}

Nested:
Full Name: ${fullName}
City: ${city}
`
);


function displayStudent({ name, age }) {
  return `Name: ${name}, Age: ${age}`;
}

function sum([x, y]) {
  return x + y;
}

const studentInfo = displayStudent(student);
const sumResult = sum([5, 10]);

console.log(studentInfo);
console.log(sumResult);

show(
  "Destructuring in Functions",
  `
${studentInfo}
Sum Result: ${sumResult}
`
);


const colors = ["pink", "cyan", "orange", "yellow"];
const [primary, ...others] = colors;

console.log(primary, others);

show(
  "Bonus: Rest Operator",
  `
Primary: ${primary}
Others: ${others.join(", ")}
`
);