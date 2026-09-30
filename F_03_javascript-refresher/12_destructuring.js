const person = {
    name: "Stefan",
    age: 20
};

const { name, age } = person;

console.log(name, age);

const hobbies = ["watching movies", "gaming", "online shopping"];

const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2);

function printName({ name }) {
    console.log(name);
}

printName(person);