function greet(name) {
    const now = new Date();
    const hour = now.getHours();
    const time = now.toLocaleTimeString();
    const greeting = hour < 12 ? "Good morning" : (hour < 18 ? "Good afternoon" : "Good evening");

    return "Hello, " + name + ". " + greeting + ", it is currently " + time + ".";
}

const square = (num) => {
    return num * num;
};

function calculator(a, b) {
    return {
        sum: a + b,
        product: a * b
    };
}

console.log(greet("Stefan"));
console.log(square(6));
console.log(calculator(4, 5));