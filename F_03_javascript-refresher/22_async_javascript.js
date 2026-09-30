function fetchUserMock(callback) {
    setTimeout(() => {
        callback({
            name: "Stefan",
            age: 20
        });
    }, 1000);
}

fetchUserMock((user) => {
    console.log("Got user:", user);
});


function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({
            name: "Stefan",
            age: 20
        }), 1000);
    });
}

async function showUser() {
    try {
        const user = await fetchUser();
        console.log("Got user:", user);
    } catch (error) {
        console.log("Failed to load user");
    }
}

showUser();


let name = "Stefan";
let age = 20;
let address = "Pampanga";

setTimeout(() => {
    console.log("This message is printed after 2 seconds");
}, 2000);

console.log("Name:", name);
console.log("Age:", age);
console.log("Address:", address);