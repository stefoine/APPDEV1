class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log("Hi, I am " + this.name);
    }
}

class Student extends Person {
    study() {
        console.log(this.name + " is studying.");
    }
}

class BSISStudent extends Student {
    enrollmentStatus() {
        console.log(this.name + " is enrolled at 3rd year BSIS.");
    }
}

const student = new BSISStudent("Stefan");

student.sayHello();
student.study();
student.enrollmentStatus();