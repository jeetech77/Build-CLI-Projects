const readlineSync = require('readline-sync');
var studentsDB = {
    name: [],
    totalMark: []
}
let numOfStudents = 5;
for (let index = 0; index < numOfStudents; index++) {
    studentsDB.name[index] = readlineSync.question(`Enter the name of ${index + 1} student...\n`);
     let unitMark = readlineSync.questionInt(`Enter ${studentsDB.name[index]} unit mark : \n`);
     let preFinalMark = readlineSync.questionInt(`Enter ${studentsDB.name[index]} Pre final mark : \n`);
     let finalMark = readlineSync.questionInt(`Enter ${studentsDB.name[index]} Final mark : \n`);
     studentsDB.totalMark[index] = unitMark + preFinalMark + finalMark;
   
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