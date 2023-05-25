
import generateList from "./list.js";
import Student from "./student.js";

// function generateList(student, togleTrueOrFalse(1: only True, -1: only False, default: random)
let student1 = new Student("Sasha", "Gontarev", 1981, [85, 80, 80, 78, 55]);
console.log(student1);
console.log("Age: ", student1.ageStudent());
console.log("Average grade: ", student1.averageScore());
generateList(student1);
console.log(student1.summary())

let student2 = new Student("Anna", "Gontareva", 1985, [90, 90, 85, 88, 99]);
console.log(student2);
console.log("Age: ", student2.ageStudent());
console.log("Average grade: ", student2.averageScore());
generateList(student2, 1);
console.log(student2.summary())

let student3 = new Student("Dmytro", "Gontarev", 2010, [100, 90, 95, 92, 97]);
console.log(student3);
console.log("Age: ", student3.ageStudent())
console.log("Average grade: ", student3.averageScore())
generateList(student3)
console.log(student3.summary())
