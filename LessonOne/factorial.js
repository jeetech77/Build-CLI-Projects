const readlineSync = require('readline-sync');
let userNum = readlineSync.questionInt("Enter the number to get the factorial : \n");
let factOfNum = userNum;
for (let index = userNum; index > 2; index--) {
    factOfNum = factOfNum * (index - 1);
}
console.log(factOfNum)