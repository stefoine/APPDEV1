const values = [0, "", "hello", null, undefined, [], {}];

values.forEach((val) => {
    if (val) {
        console.log(val, "-> truthy");
    } else {
        console.log(val, "-> falsy");
    }
});

// [] and {} are truthy — only the 6 falsy values above are falsy

const username = "stefan";
const password = "passwordi2";

const canLogIn = username !== "" && password !== "";

console.log(canLogIn);

const isAdmin = true;
const isSubscriber = false;

const canWatch = isAdmin || isSubscriber;

console.log(canWatch);

console.log("" || "default");
console.log(username && "Welcome!");
console.log(!canLogIn);