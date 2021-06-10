const readlineSync = require('readline-sync');
var studentsDB = {
    name: [],
    totalMark: []
}
let numOfStudents = 5;
for (let index = 0; index < numOfStudents; index++) {
    studentsDB.name[index] = readlineSync.question(`Enter the name of ${index + 1} student...\n`);
    let studentsmarks = [];
    studentsmarks[index] = parseInt(readlineSync.question(`Enter the unit test marks of the ${index + 1} student...\n`));
    studentsmarks[index + 1] = parseInt(readlineSync.question(`Enter the pre final marks of the ${index + 1} student...\n`));
    studentsmarks[index + 2] = parseInt(readlineSync.question(`Enter the final of the ${index + 1} student...\n`));
    studentsDB.totalMark[index] = parseInt(studentsmarks[index] + studentsmarks[index + 1] + studentsmarks[index + 2]);
};
console.table(studentsDB);
let allStudentsMark = 0;
studentsDB.totalMark.forEach(value => {
    allStudentsMark += value;
})
console.log(`Average marks of the students is : ${allStudentsMark / numOfStudents}`);
maxMark = Math.max(...studentsDB.totalMark);
console.log(`Max mark of the student is : ${maxMark}`);
console.log(`Name of the student who get maximum mark is : ${studentsDB.name[studentsDB.totalMark.indexOf(maxMark)]}`);