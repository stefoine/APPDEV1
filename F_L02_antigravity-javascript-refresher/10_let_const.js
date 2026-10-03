let name = "Stefan";
const age = 20;

name = "Stefan";

console.log(name);
console.log(age);

try {
    age = 21;
} catch (error) {
    console.log("Cannot reassign const:", error.message);
}

var city = "San Fernando";
console.log(city);