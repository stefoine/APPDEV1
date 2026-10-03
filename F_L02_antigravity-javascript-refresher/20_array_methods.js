const students = [
    { name: "Stefan", grade: 94 },
    { name: "Anne", grade: 83 },
    { name: "Istefanie", grade: 52 }
];

const passing = students.filter(s => s.grade >= 60);

console.log(passing.map(s => s.name));

const anne = students.find(s => s.name === "Anne");

console.log(anne);

console.log(students.some(s => s.grade < 60));

console.log(students.every(s => s.grade >= 60));

const ranked = [...students].sort((a, b) => b.grade - a.grade);

console.log(ranked.map(s => s.name));