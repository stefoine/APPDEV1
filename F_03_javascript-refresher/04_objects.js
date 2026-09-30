const aboutMe = {
    name: "Stefan",
    age: 20,
    course: "Information Systems",
    introduce: function () {
        console.log(`Hi, I'm ${this.name}, age ${this.age}.`);
    }
};

aboutMe.hobby = "Watching Movies";

aboutMe.introduce();
console.log("Hobby:", aboutMe.hobby);