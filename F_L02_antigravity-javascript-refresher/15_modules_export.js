const userInfo = {
    name: "Stefan",
    age: 20,
    student: true
};

function greet() {
    return "Hello from module!";
}

export default greet;
export { userInfo };