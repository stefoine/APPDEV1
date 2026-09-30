const score = 85;

const result = score >= 70 ? "Pass" : "Fail";

console.log(result);

const num = 6;

console.log(num % 2 === 0 ? "even" : "odd");


const user = {
    name: "Stefan"
};

console.log(user.address?.city);

const age = 0;

console.log(age || 18);

console.log(age ?? 18);