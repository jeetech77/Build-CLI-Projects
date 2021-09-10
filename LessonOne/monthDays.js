const readline = require('readline-sync');
let daysInMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function getMonth() {
    let userMonth = readline.questionInt("Enter the month : \n");
    checkValidMonth(userMonth);
}

function showDays(userMonth) {
    let dayInUserMonth = daysInMonths[userMonth-1];
    console.log(`Total days in the ${userMonth} month is ${dayInUserMonth}`);
}

function checkValidMonth(userMonth) {
    if (userMonth <= 0 || userMonth > 12) {
        console.log("Please input valid month");
        getMonth();
    } else {
        showDays(userMonth);
    }
}
getMonth();

